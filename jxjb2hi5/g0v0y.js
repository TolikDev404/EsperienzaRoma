// source --> https://prontosocialchef.it/wp-content/themes/listeo/js/daterangepicker.js?ver=2 
/**
* @version: 3.0.3
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2018 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: http://www.daterangepicker.com/
*/
// Following the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Make globaly available as well
        define(['moment', 'jquery'], function (moment, jquery) {
            if (!jquery.fn) jquery.fn = {}; // webpack server rendering
            if (typeof moment !== 'function' && moment.default) moment = moment.default
            return factory(moment, jquery);
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node / Browserify
        //isomorphic issue
        var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;
        if (!jQuery) {
            jQuery = require('jquery');
            if (!jQuery.fn) jQuery.fn = {};
        }
        var moment = (typeof window != 'undefined' && typeof window.moment != 'undefined') ? window.moment : require('moment');
        module.exports = factory(moment, jQuery);
    } else {
        // Browser globals
        root.daterangepicker = factory(root.moment, root.jQuery);
    }
}(this, function(moment, $) {
    var DateRangePicker = function(element, options, cb) {

        //default settings for options
        this.parentEl = 'body';
        this.element = $(element);
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        this.minDate = false;
        this.maxDate = false;
        this.minSpan = false;
        this.maxSpan = false;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.minYear = moment().subtract(100, 'year').format('YYYY');
        this.maxYear = moment().add(100, 'year').format('YYYY');
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.showCustomRangeLabel = true;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.linkedCalendars = true;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.ranges = {};

        this.opens = 'right';
        if (this.element.hasClass('pull-right'))
            this.opens = 'left';

        this.drops = 'down';
        if (this.element.hasClass('dropup'))
            this.drops = 'up';

        this.buttonClasses = 'btn btn-sm';
        this.applyButtonClasses = 'btn-primary';
        this.cancelButtonClasses = 'btn-default';

        this.locale = {
            direction: 'ltr',
            format: moment.localeData().longDateFormat('L'),
            separator: ' - ',
            applyLabel: 'Apply',
            cancelLabel: 'Cancel',
            weekLabel: 'W',
            customRangeLabel: 'Custom Range',
            daysOfWeek: moment.weekdaysMin(),
            monthNames: moment.monthsShort(),
            firstDay: moment.localeData().firstDayOfWeek()
        };

        this.callback = function() { };

        //some state information
        this.isShowing = false;
        this.leftCalendar = {};
        this.rightCalendar = {};

        //custom options from user
        if (typeof options !== 'object' || options === null)
            options = {};

        //allow setting options with data attributes
        //data-api options will be overwritten with custom javascript options
        options = $.extend(this.element.data(), options);

        //html template for the picker UI
        if (typeof options.template !== 'string' && !(options.template instanceof $))
            options.template =
            '<div class="daterangepicker">' +
                '<div class="ranges"></div>' +
                '<div class="drp-calendar left">' +
                    '<div class="calendar-table"></div>' +
                    '<div class="calendar-time"></div>' +
                '</div>' +
                '<div class="drp-calendar right">' +
                    '<div class="calendar-table"></div>' +
                    '<div class="calendar-time"></div>' +
                '</div>' +
                '<div class="drp-buttons">' +
                    '<span class="drp-selected"></span>' +
                    '<button class="cancelBtn" type="button"></button>' +
                    '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
                '</div>' +
            '</div>';

        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
        this.container = $(options.template).appendTo(this.parentEl);

        //
        // handle all the possible options overriding defaults
        //

        if (typeof options.locale === 'object') {

            if (typeof options.locale.direction === 'string')
                this.locale.direction = options.locale.direction;

            if (typeof options.locale.format === 'string')
                this.locale.format = options.locale.format;

            if (typeof options.locale.separator === 'string')
                this.locale.separator = options.locale.separator;

            if (typeof options.locale.daysOfWeek === 'object')
                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

            if (typeof options.locale.monthNames === 'object')
              this.locale.monthNames = options.locale.monthNames.slice();

            if (typeof options.locale.firstDay === 'number')
              this.locale.firstDay = options.locale.firstDay;

            if (typeof options.locale.applyLabel === 'string')
              this.locale.applyLabel = options.locale.applyLabel;

            if (typeof options.locale.cancelLabel === 'string')
              this.locale.cancelLabel = options.locale.cancelLabel;

            if (typeof options.locale.weekLabel === 'string')
              this.locale.weekLabel = options.locale.weekLabel;

            if (typeof options.locale.customRangeLabel === 'string'){
                //Support unicode chars in the custom range name.
                var elem = document.createElement('textarea');
                elem.innerHTML = options.locale.customRangeLabel;
                var rangeHtml = elem.value;
                this.locale.customRangeLabel = rangeHtml;
            }
        }
        this.container.addClass(this.locale.direction);

        if (typeof options.startDate === 'string')
            this.startDate = moment(options.startDate, this.locale.format);

        if (typeof options.endDate === 'string')
            this.endDate = moment(options.endDate, this.locale.format);

        if (typeof options.minDate === 'string')
            this.minDate = moment(options.minDate, this.locale.format);

        if (typeof options.maxDate === 'string')
            this.maxDate = moment(options.maxDate, this.locale.format);

        if (typeof options.startDate === 'object')
            this.startDate = moment(options.startDate);

        if (typeof options.endDate === 'object')
            this.endDate = moment(options.endDate);

        if (typeof options.minDate === 'object')
            this.minDate = moment(options.minDate);

        if (typeof options.maxDate === 'object')
            this.maxDate = moment(options.maxDate);

        // sanity check for bad options
        if (this.minDate && this.startDate.isBefore(this.minDate))
            this.startDate = this.minDate.clone();

        // sanity check for bad options
        if (this.maxDate && this.endDate.isAfter(this.maxDate))
            this.endDate = this.maxDate.clone();

        if (typeof options.applyButtonClasses === 'string')
            this.applyButtonClasses = options.applyButtonClasses;

        if (typeof options.applyClass === 'string') //backwards compat
            this.applyButtonClasses = options.applyClass;

        if (typeof options.cancelButtonClasses === 'string')
            this.cancelButtonClasses = options.cancelButtonClasses;

        if (typeof options.cancelClass === 'string') //backwards compat
            this.cancelButtonClasses = options.cancelClass;
        
        if (typeof options.minSpan === 'object')
            this.minSpan = options.minSpan;

        if (typeof options.maxSpan === 'object')
            this.maxSpan = options.maxSpan;

        if (typeof options.dateLimit === 'object') //backwards compat
            this.maxSpan = options.dateLimit;

        if (typeof options.opens === 'string')
            this.opens = options.opens;

        if (typeof options.drops === 'string')
            this.drops = options.drops;

        if (typeof options.showWeekNumbers === 'boolean')
            this.showWeekNumbers = options.showWeekNumbers;

        if (typeof options.showISOWeekNumbers === 'boolean')
            this.showISOWeekNumbers = options.showISOWeekNumbers;

        if (typeof options.buttonClasses === 'string')
            this.buttonClasses = options.buttonClasses;

        if (typeof options.buttonClasses === 'object')
            this.buttonClasses = options.buttonClasses.join(' ');

        if (typeof options.showDropdowns === 'boolean')
            this.showDropdowns = options.showDropdowns;

        if (typeof options.minYear === 'number')
            this.minYear = options.minYear;

        if (typeof options.maxYear === 'number')
            this.maxYear = options.maxYear;

        if (typeof options.showCustomRangeLabel === 'boolean')
            this.showCustomRangeLabel = options.showCustomRangeLabel;

        if (typeof options.singleDatePicker === 'boolean') {
            this.singleDatePicker = options.singleDatePicker;
            if (this.singleDatePicker)
                this.endDate = this.startDate.clone();
        }

        if (typeof options.timePicker === 'boolean')
            this.timePicker = options.timePicker;

        if (typeof options.timePickerSeconds === 'boolean')
            this.timePickerSeconds = options.timePickerSeconds;

        if (typeof options.timePickerIncrement === 'number')
            this.timePickerIncrement = options.timePickerIncrement;

        if (typeof options.timePicker24Hour === 'boolean')
            this.timePicker24Hour = options.timePicker24Hour;

        if (typeof options.autoApply === 'boolean')
            this.autoApply = options.autoApply;

        if (typeof options.autoUpdateInput === 'boolean')
            this.autoUpdateInput = options.autoUpdateInput;

        if (typeof options.linkedCalendars === 'boolean')
            this.linkedCalendars = options.linkedCalendars;

        if (typeof options.isInvalidDate === 'function')
            this.isInvalidDate = options.isInvalidDate;

        if (typeof options.isCustomDate === 'function')
            this.isCustomDate = options.isCustomDate;

        if (typeof options.alwaysShowCalendars === 'boolean')
            this.alwaysShowCalendars = options.alwaysShowCalendars;

        // update day names order to firstDay
        if (this.locale.firstDay != 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
                iterator--;
            }
        }

        var start, end, range;

        //if no start/end dates set, check if an input element contains initial values
        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
            if ($(this.element).is(':text')) {
                var val = $(this.element).val(),
                    split = val.split(this.locale.separator);

                start = end = null;

                if (split.length == 2) {
                    start = moment(split[0], this.locale.format);
                    end = moment(split[1], this.locale.format);
                } else if (this.singleDatePicker && val !== "") {
                    start = moment(val, this.locale.format);
                    end = moment(val, this.locale.format);
                }
                if (start !== null && end !== null) {
                    this.setStartDate(start);
                    this.setEndDate(end);
                }
            }
        }

        if (typeof options.ranges === 'object') {
            for (range in options.ranges) {
                if(range === 'Today') {
                    console.log(options.ranges['Today']);
                    console.log(this);
                }
                if (typeof options.ranges[range][0] === 'string')
                    start = moment(options.ranges[range][0], this.locale.format);
                else
                    start = moment(options.ranges[range][0]);

                if (typeof options.ranges[range][1] === 'string')
                    end = moment(options.ranges[range][1], this.locale.format);
                else
                    end = moment(options.ranges[range][1]);

                // If the start or end date exceed those allowed by the minDate or maxSpan
                // options, shorten the range to the allowable period.
                if (this.minDate && start.isBefore(this.minDate))
                    start = this.minDate.clone();

                var maxDate = this.maxDate;
                if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate))
                    maxDate = start.clone().add(this.maxSpan);

                // If minSpan exceeds maxSpan, use maxSpan instead.
                if(this.minSpan && this.maxSpan && this.minSpan > this.maxSpan)
                    this.minSpan = this.maxSpan;

                // If end date does not equal or exceed start date + minSpan,
                // use the start date + minSpan as end date.
                if (this.minSpan && end.clone().isBefore(start.clone().add(this.minSpan).subtract(1, 'day').endOf('day')))
                    end = start.clone().add(this.minSpan).subtract(1, 'day').endOf('day');

                if (maxDate && end.isAfter(maxDate))
                    end = maxDate.clone();

                // If the end of the range is before the minimum or the start of the range is
                // after the maximum, don't display this range option at all.
                if ((this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day'))
                  || (maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')))
                    continue;

                //Support unicode chars in the range names.
                var elem = document.createElement('textarea');
                elem.innerHTML = range;
                var rangeHtml = elem.value;

                this.ranges[rangeHtml] = [start, end];
            }

            var list = '<ul>';
            for (range in this.ranges) {
                list += '<li data-range-key="' + range + '">' + range + '</li>';
            }
            if (this.showCustomRangeLabel) {
                list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
            }
            list += '</ul>';
            this.container.find('.ranges').prepend(list);
        }

        if (typeof cb === 'function') {
            this.callback = cb;
        }

        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
            this.endDate = this.endDate.endOf('day');
            this.container.find('.calendar-time').hide();
        }

        //can't be used together for now
        if (this.timePicker && this.autoApply)
            this.autoApply = false;

        if (this.autoApply) {
            this.container.addClass('auto-apply');
        }

        if (typeof options.ranges === 'object')
            this.container.addClass('show-ranges');

        if (this.singleDatePicker) {
            this.container.addClass('single');
            this.container.find('.drp-calendar.left').addClass('single');
            this.container.find('.drp-calendar.left').show();
            this.container.find('.drp-calendar.right').hide();
            if (!this.timePicker) {
                this.container.addClass('auto-apply');
            }
        }

        if ((typeof options.ranges === 'undefined' && !this.singleDatePicker) || this.alwaysShowCalendars) {
            this.container.addClass('show-calendar');
        }

        this.container.addClass('opens' + this.opens);

        //apply CSS classes and labels to buttons
        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
        if (this.applyButtonClasses.length)
            this.container.find('.applyBtn').addClass(this.applyButtonClasses);
        if (this.cancelButtonClasses.length)
            this.container.find('.cancelBtn').addClass(this.cancelButtonClasses);
        this.container.find('.applyBtn').html(this.locale.applyLabel);
        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

        //
        // event listeners
        //

        this.container.find('.drp-calendar')
            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
            .on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))

        this.container.find('.ranges')
            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))

        this.container.find('.drp-buttons')
            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))

        if (this.element.is('input') || this.element.is('button')) {
            this.element.on({
                'click.daterangepicker': $.proxy(this.show, this),
                'focus.daterangepicker': $.proxy(this.show, this),
                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
                'keydown.daterangepicker': $.proxy(this.keydown, this) //IE 11 compatibility
            });
        } else {
            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
            this.element.on('keydown.daterangepicker', $.proxy(this.toggle, this));
        }

        //
        // if attached to a text input, set the initial value
        //

        this.updateElement();

    };

    DateRangePicker.prototype = {

        constructor: DateRangePicker,

        setStartDate: function(startDate) {
            if (typeof startDate === 'string')
                this.startDate = moment(startDate, this.locale.format);

            if (typeof startDate === 'object')
                this.startDate = moment(startDate);

            if (!this.timePicker)
                this.startDate = this.startDate.startOf('day');

            if (this.timePicker && this.timePickerIncrement)
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.minDate && this.startDate.isBefore(this.minDate)) {
                this.startDate = this.minDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
                this.startDate = this.maxDate.clone();
                if (this.timePicker && this.timePickerIncrement)
                    this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        setEndDate: function(endDate) {
            if (typeof endDate === 'string')
                this.endDate = moment(endDate, this.locale.format);

            if (typeof endDate === 'object')
                this.endDate = moment(endDate);

            if (!this.timePicker)
                this.endDate = this.endDate.add(1,'d').startOf('day').subtract(1,'second');

            if (this.timePicker && this.timePickerIncrement)
                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

            if (this.endDate.isBefore(this.startDate))
                this.endDate = this.startDate.clone();

            if (this.minSpan && this.endDate.clone().isBefore(this.startDate.clone().add(this.minSpan))) {
                this.endDate = this.startDate.clone().add(this.minSpan).subtract(1, 'day').endOf('day');
            }

            if (this.maxDate && this.endDate.isAfter(this.maxDate))
                this.endDate = this.maxDate.clone();

            if (this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate))
                this.endDate = this.startDate.clone().add(this.maxSpan);

            this.previousRightTime = this.endDate.clone();

            this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));

            if (!this.isShowing)
                this.updateElement();

            this.updateMonthsInView();
        },

        isInvalidDate: function() {
            return false;
        },

        isCustomDate: function() {
            return false;
        },

        updateView: function() {
            if (this.timePicker) {
                this.renderTimePicker('left');
                this.renderTimePicker('right');
                if (!this.endDate) {
                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
                } else {
                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
                }
            }
            if (this.endDate)
                this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
            this.updateMonthsInView();
            this.updateCalendars();
            this.updateFormInputs();
        },

        updateMonthsInView: function() {
            if (this.endDate) {

                //if both dates are visible already, do nothing
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    &&
                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
                    ) {
                    return;
                }

                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                } else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }

            } else {
                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
                    this.leftCalendar.month = this.startDate.clone().date(2);
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
            if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
              this.rightCalendar.month = this.maxDate.clone().date(2);
              this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
            }
        },

        updateCalendars: function() {

            if (this.timePicker) {
                var hour, minute, second;
                if (this.endDate) {
                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                } else {
                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                }
                this.leftCalendar.month.hour(hour).minute(minute).second(second);
                this.rightCalendar.month.hour(hour).minute(minute).second(second);
            }

            this.renderCalendar('left');
            this.renderCalendar('right');

            //highlight any predefined range matching the current start and end dates
            this.container.find('.ranges li').removeClass('active');
            if (this.endDate == null) return;

            this.calculateChosenLabel();
        },

        renderCalendar: function(side) {

            //
            // Build the matrix of dates that will populate the calendar
            //

            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
            var month = calendar.month.month();
            var year = calendar.month.year();
            var hour = calendar.month.hour();
            var minute = calendar.month.minute();
            var second = calendar.month.second();
            var daysInMonth = moment([year, month]).daysInMonth();
            var firstDay = moment([year, month, 1]);
            var lastDay = moment([year, month, daysInMonth]);
            var lastMonth = moment(firstDay).subtract(1, 'month').month();
            var lastYear = moment(firstDay).subtract(1, 'month').year();
            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
            var dayOfWeek = firstDay.day();

            //initialize a 6 rows x 7 columns array for the calendar
            var calendar = [];
            calendar.firstDay = firstDay;
            calendar.lastDay = lastDay;

            for (var i = 0; i < 6; i++) {
                calendar[i] = [];
            }

            //populate the calendar with date objects
            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
            if (startDay > daysInLastMonth)
                startDay -= 7;

            if (dayOfWeek == this.locale.firstDay)
                startDay = daysInLastMonth - 6;

            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

            var col, row;
            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
                if (i > 0 && col % 7 === 0) {
                    col = 0;
                    row++;
                }
                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
                curDate.hour(12);

                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
                    calendar[row][col] = this.minDate.clone();
                }

                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
                    calendar[row][col] = this.maxDate.clone();
                }

            }

            //make the calendar object available to hoverDate/clickDate
            if (side == 'left') {
                this.leftCalendar.calendar = calendar;
            } else {
                this.rightCalendar.calendar = calendar;
            }

            //
            // Display the calendar
            //

            var minDate = side == 'left' ? this.minDate : this.startDate;
            var maxDate = this.maxDate;
            var selected = side == 'left' ? this.startDate : this.endDate;
            var arrow = this.locale.direction == 'ltr' ? {left: 'chevron-left', right: 'chevron-right'} : {left: 'chevron-right', right: 'chevron-left'};

            var html = '<table class="table-condensed">';
            html += '<thead>';
            html += '<tr>';

            // add empty cell for week number
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th></th>';

            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
                html += '<th class="prev available"><span></span></th>';
            } else {
                html += '<th></th>';
            }

            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

            if (this.showDropdowns) {
                var currentMonth = calendar[1][1].month();
                var currentYear = calendar[1][1].year();
                var maxYear = (maxDate && maxDate.year()) || (this.maxYear);
                var minYear = (minDate && minDate.year()) || (this.minYear);
                var inMinYear = currentYear == minYear;
                var inMaxYear = currentYear == maxYear;

                var monthHtml = '<select class="monthselect">';
                for (var m = 0; m < 12; m++) {
                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            ">" + this.locale.monthNames[m] + "</option>";
                    } else {
                        monthHtml += "<option value='" + m + "'" +
                            (m === currentMonth ? " selected='selected'" : "") +
                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
                    }
                }
                monthHtml += "</select>";

                var yearHtml = '<select class="yearselect">';
                for (var y = minYear; y <= maxYear; y++) {
                    yearHtml += '<option value="' + y + '"' +
                        (y === currentYear ? ' selected="selected"' : '') +
                        '>' + y + '</option>';
                }
                yearHtml += '</select>';

                dateHtml = monthHtml + yearHtml;
            }

            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
                html += '<th class="next available"><span></span></th>';
            } else {
                html += '<th></th>';
            }

            html += '</tr>';
            html += '<tr>';

            // add week number label
            if (this.showWeekNumbers || this.showISOWeekNumbers)
                html += '<th class="week">' + this.locale.weekLabel + '</th>';

            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
                html += '<th>' + dayOfWeek + '</th>';
            });

            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';

            //adjust maxDate to reflect the maxSpan setting in order to
            //grey out end dates beyond the maxSpan
            if (this.endDate == null && this.maxSpan) {
                var maxLimit = this.startDate.clone().add(this.maxSpan).endOf('day');
                if (!maxDate || maxLimit.isBefore(maxDate)) {
                    maxDate = maxLimit;
                }
            }

            for (var row = 0; row < 6; row++) {
                html += '<tr>';

                // add week number
                if (this.showWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].week() + '</td>';
                else if (this.showISOWeekNumbers)
                    html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

                for (var col = 0; col < 7; col++) {

                    var classes = [];

                    //highlight today's date
                    if (calendar[row][col].isSame(new Date(), "day"))
                        classes.push('today');

                    //highlight weekends
                    if (calendar[row][col].isoWeekday() > 5)
                        classes.push('weekend');

                    //grey out the dates in other months displayed at beginning and end of this calendar
                    if (calendar[row][col].month() != calendar[1][1].month())
                        classes.push('off');

                    //don't allow selection of dates before the minimum date
                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of dates after the maximum date
                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
                        classes.push('off', 'disabled');

                    //don't allow selection of date if a custom function decides it's invalid
                    if (this.isInvalidDate(calendar[row][col]))
                        classes.push('off', 'disabled');

                    //highlight the currently selected start date
                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
                        classes.push('active', 'start-date');

                    //highlight the currently selected end date
                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
                        classes.push('active', 'end-date');

                    //highlight dates in-between the selected dates
                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
                        classes.push('in-range');

                    //apply custom classes for this date
                    var isCustom = this.isCustomDate(calendar[row][col]);
                    if (isCustom !== false) {
                        if (typeof isCustom === 'string')
                            classes.push(isCustom);
                        else
                            Array.prototype.push.apply(classes, isCustom);
                    }

                    var cname = '', disabled = false;
                    for (var i = 0; i < classes.length; i++) {
                        cname += classes[i] + ' ';
                        if (classes[i] == 'disabled')
                            disabled = true;
                    }
                    if (!disabled)
                        cname += 'available';

                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

                }
                html += '</tr>';
            }

            html += '</tbody>';
            html += '</table>';

            this.container.find('.drp-calendar.' + side + ' .calendar-table').html(html);

        },

        renderTimePicker: function(side) {

            // Don't bother updating the time picker if it's currently disabled
            // because an end date hasn't been clicked yet
            if (side == 'right' && !this.endDate) return;

            var html, selected, minDate, maxDate = this.maxDate;

            if (this.maxSpan && (!this.maxDate || this.startDate.clone().add(this.maxSpan).isAfter(this.maxDate)))
                maxDate = this.startDate.clone().add(this.maxSpan);

            if (side == 'left') {
                selected = this.startDate.clone();
                minDate = this.minDate;
            } else if (side == 'right') {
                selected = this.endDate.clone();
                minDate = this.startDate;

                //Preserve the time already selected
                var timeSelector = this.container.find('.drp-calendar.right .calendar-time');
                if (timeSelector.html() != '') {

                    selected.hour(selected.hour() || timeSelector.find('.hourselect option:selected').val());
                    selected.minute(selected.minute() || timeSelector.find('.minuteselect option:selected').val());
                    selected.second(selected.second() || timeSelector.find('.secondselect option:selected').val());

                    if (!this.timePicker24Hour) {
                        var ampm = timeSelector.find('.ampmselect option:selected').val();
                        if (ampm === 'PM' && selected.hour() < 12)
                            selected.hour(selected.hour() + 12);
                        if (ampm === 'AM' && selected.hour() === 12)
                            selected.hour(0);
                    }

                }

                if (selected.isBefore(this.startDate))
                    selected = this.startDate.clone();

                if (maxDate && selected.isAfter(maxDate))
                    selected = maxDate.clone();

            }

            //
            // hours
            //

            html = '<select class="hourselect">';

            var start = this.timePicker24Hour ? 0 : 1;
            var end = this.timePicker24Hour ? 23 : 12;

            for (var i = start; i <= end; i++) {
                var i_in_24 = i;
                if (!this.timePicker24Hour)
                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

                var time = selected.clone().hour(i_in_24);
                var disabled = false;
                if (minDate && time.minute(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.minute(0).isAfter(maxDate))
                    disabled = true;

                if (i_in_24 == selected.hour() && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
                } else {
                    html += '<option value="' + i + '">' + i + '</option>';
                }
            }

            html += '</select> ';

            //
            // minutes
            //

            html += ': <select class="minuteselect">';

            for (var i = 0; i < 60; i += this.timePickerIncrement) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().minute(i);

                var disabled = false;
                if (minDate && time.second(59).isBefore(minDate))
                    disabled = true;
                if (maxDate && time.second(0).isAfter(maxDate))
                    disabled = true;

                if (selected.minute() == i && !disabled) {
                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                } else if (disabled) {
                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                } else {
                    html += '<option value="' + i + '">' + padded + '</option>';
                }
            }

            html += '</select> ';

            //
            // seconds
            //

            if (this.timePickerSeconds) {
                html += ': <select class="secondselect">';

                for (var i = 0; i < 60; i++) {
                    var padded = i < 10 ? '0' + i : i;
                    var time = selected.clone().second(i);

                    var disabled = false;
                    if (minDate && time.isBefore(minDate))
                        disabled = true;
                    if (maxDate && time.isAfter(maxDate))
                        disabled = true;

                    if (selected.second() == i && !disabled) {
                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
                    } else if (disabled) {
                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
                    } else {
                        html += '<option value="' + i + '">' + padded + '</option>';
                    }
                }

                html += '</select> ';
            }

            //
            // AM/PM
            //

            if (!this.timePicker24Hour) {
                html += '<select class="ampmselect">';

                var am_html = '';
                var pm_html = '';

                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
                    am_html = ' disabled="disabled" class="disabled"';

                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
                    pm_html = ' disabled="disabled" class="disabled"';

                if (selected.hour() >= 12) {
                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
                } else {
                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
                }

                html += '</select>';
            }

            this.container.find('.drp-calendar.' + side + ' .calendar-time').html(html);

        },

        updateFormInputs: function() {

            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
                this.container.find('button.applyBtn').removeAttr('disabled');
            } else {
                this.container.find('button.applyBtn').attr('disabled', 'disabled');
            }

        },

        move: function() {
            var parentOffset = { top: 0, left: 0 },
                containerTop;
            var parentRightEdge = $(window).width();
            if (!this.parentEl.is('body')) {
                parentOffset = {
                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
                };
                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
            }

            if (this.drops == 'up')
                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
            else
                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('drop-up');

            if (this.opens == 'left') {
                this.container.css({
                    top: containerTop,
                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
                    left: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else if (this.opens == 'center') {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
                            - this.container.outerWidth() / 2,
                    right: 'auto'
                });
                if (this.container.offset().left < 0) {
                    this.container.css({
                        right: 'auto',
                        left: 9
                    });
                }
            } else {
                this.container.css({
                    top: containerTop,
                    left: this.element.offset().left - parentOffset.left,
                    right: 'auto'
                });
                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
                    this.container.css({
                        left: 'auto',
                        right: 0
                    });
                }
            }
        },

        show: function(e) {
            if (this.isShowing) return;

            // Create a click proxy that is private to this instance of datepicker, for unbinding
            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

            // Bind global datepicker mousedown for hiding and
            $(document)
              .on('mousedown.daterangepicker', this._outsideClickProxy)
              // also support mobile devices
              .on('touchend.daterangepicker', this._outsideClickProxy)
              // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
              .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
              // and also close when focus changes to outside the picker (eg. tabbing between controls)
              .on('focusin.daterangepicker', this._outsideClickProxy);

            // Reposition the picker if the window is resized while it's open
            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

            this.oldStartDate = this.startDate.clone();
            this.oldEndDate = this.endDate.clone();
            this.previousRightTime = this.endDate.clone();

            this.updateView();
            this.container.show();
            this.move();
            this.element.trigger('show.daterangepicker', this);
            this.isShowing = true;
        },

        hide: function(e) {
            if (!this.isShowing) return;

            //incomplete date selection, revert to last values
            if (!this.endDate) {
                this.startDate = this.oldStartDate.clone();
                this.endDate = this.oldEndDate.clone();
            }

            //if a new date range was selected, invoke the user callback function
            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
                this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel);

            //if picker is attached to a text input, update it
            this.updateElement();

            $(document).off('.daterangepicker');
            $(window).off('.daterangepicker');
            this.container.hide();
            this.element.trigger('hide.daterangepicker', this);
            this.isShowing = false;
        },

        toggle: function(e) {
            if (this.isShowing) {
                this.hide();
            } else {
                this.show();
            }
        },

        outsideClick: function(e) {
            var target = $(e.target);
            // if the page is clicked anywhere except within the daterangerpicker/button
            // itself then call this.hide()
            if (
                // ie modal dialog fix
                e.type == "focusin" ||
                target.closest(this.element).length ||
                target.closest(this.container).length ||
                target.closest('.calendar-table').length
                ) return;
            this.hide();
            this.element.trigger('outsideClick.daterangepicker', this);
        },

        showCalendars: function() {
            this.container.addClass('show-calendar');
            this.move();
            this.element.trigger('showCalendar.daterangepicker', this);
        },

        hideCalendars: function() {
            this.container.removeClass('show-calendar');
            this.element.trigger('hideCalendar.daterangepicker', this);
        },

        clickRange: function(e) {
            var label = e.target.getAttribute('data-range-key');
            this.chosenLabel = label;
            if (label == this.locale.customRangeLabel) {
                this.showCalendars();
            } else {
                var dates = this.ranges[label];
                this.startDate = dates[0];
                this.endDate = dates[1];

                if (!this.timePicker) {
                    this.startDate.startOf('day');
                    this.endDate.endOf('day');
                }

                if (!this.alwaysShowCalendars)
                    this.hideCalendars();
                this.clickApply();
            }
        },

        clickPrev: function(e) {
            var cal = $(e.target).parents('.drp-calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.subtract(1, 'month');
                if (this.linkedCalendars)
                    this.rightCalendar.month.subtract(1, 'month');
            } else {
                this.rightCalendar.month.subtract(1, 'month');
            }
            this.updateCalendars();
        },

        clickNext: function(e) {
            var cal = $(e.target).parents('.drp-calendar');
            if (cal.hasClass('left')) {
                this.leftCalendar.month.add(1, 'month');
            } else {
                this.rightCalendar.month.add(1, 'month');
                if (this.linkedCalendars)
                    this.leftCalendar.month.add(1, 'month');
            }
            this.updateCalendars();
        },

        hoverDate: function(e) {

            //ignore dates that can't be selected
            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.drp-calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //highlight the dates between the start date and the date being hovered as a potential end date
            var leftCalendar = this.leftCalendar;
            var rightCalendar = this.rightCalendar;
            var startDate = this.startDate;
            if (!this.endDate) {
                this.container.find('.drp-calendar tbody td').each(function(index, el) {

                    //skip week numbers, only look at dates
                    if ($(el).hasClass('week')) return;

                    var title = $(el).attr('data-title');
                    var row = title.substr(1, 1);
                    var col = title.substr(3, 1);
                    var cal = $(el).parents('.drp-calendar');
                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

                    if ((dt.isAfter(startDate) && dt.isBefore(date)) || dt.isSame(date, 'day')) {
                        $(el).addClass('in-range');
                    } else {
                        $(el).removeClass('in-range');
                    }

                });
            }

        },

        clickDate: function(e) {

            if (!$(e.target).hasClass('available')) return;

            var title = $(e.target).attr('data-title');
            var row = title.substr(1, 1);
            var col = title.substr(3, 1);
            var cal = $(e.target).parents('.drp-calendar');
            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

            //
            // this function needs to do a few things:
            // * alternate between selecting a start and end date for the range,
            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
            // * if autoapply is enabled, and an end date was chosen, apply the selection
            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
            // * if one of the inputs above the calendars was focused, cancel that manual input
            //

            if (this.endDate || date.isBefore(this.startDate, 'day')) { //picking start
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.left .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.endDate = null;
                this.setStartDate(date.clone());
            } else if (!this.endDate && date.isBefore(this.startDate)) {
                //special case: clicking the same date for start/end,
                //but the time of the end date is before the start date
                this.setEndDate(this.startDate.clone());
            } else { // picking end
                if (this.timePicker) {
                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
                    if (!this.timePicker24Hour) {
                        var ampm = this.container.find('.right .ampmselect').val();
                        if (ampm === 'PM' && hour < 12)
                            hour += 12;
                        if (ampm === 'AM' && hour === 12)
                            hour = 0;
                    }
                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
                    date = date.clone().hour(hour).minute(minute).second(second);
                }
                this.setEndDate(date.clone());
                if (this.autoApply) {
                  this.calculateChosenLabel();
                  this.clickApply();
                }
            }

            if (this.singleDatePicker) {
                this.setEndDate(this.startDate);
                if (!this.timePicker)
                    this.clickApply();
            }

            this.updateView();

            //This is to cancel the blur event handler if the mouse was in one of the inputs
            e.stopPropagation();

        },

        calculateChosenLabel: function () {
            var customRange = true;
            var i = 0;
            for (var range in this.ranges) {
              if (this.timePicker) {
                    var format = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";
                    //ignore times when comparing dates if time picker seconds is not enabled
                    if (this.startDate.format(format) == this.ranges[range][0].format(format) && this.endDate.format(format) == this.ranges[range][1].format(format)) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
                        break;
                    }
                } else {
                    //ignore times when comparing dates if time picker is not enabled
                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
                        customRange = false;
                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
                        break;
                    }
                }
                i++;
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenLabel = this.container.find('.ranges li:last').addClass('active').attr('data-range-key');
                } else {
                    this.chosenLabel = null;
                }
                this.showCalendars();
            }
        },

        clickApply: function(e) {
            this.hide();
            this.element.trigger('apply.daterangepicker', this);
        },

        clickCancel: function(e) {
            this.startDate = this.oldStartDate;
            this.endDate = this.oldEndDate;
            this.hide();
            this.element.trigger('cancel.daterangepicker', this);
        },

        monthOrYearChanged: function(e) {
            var isLeft = $(e.target).closest('.drp-calendar').hasClass('left'),
                leftOrRight = isLeft ? 'left' : 'right',
                cal = this.container.find('.drp-calendar.'+leftOrRight);

            // Month must be Number for new moment versions
            var month = parseInt(cal.find('.monthselect').val(), 10);
            var year = cal.find('.yearselect').val();

            if (!isLeft) {
                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
                    month = this.startDate.month();
                    year = this.startDate.year();
                }
            }

            if (this.minDate) {
                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
                    month = this.minDate.month();
                    year = this.minDate.year();
                }
            }

            if (this.maxDate) {
                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
                    month = this.maxDate.month();
                    year = this.maxDate.year();
                }
            }

            if (isLeft) {
                this.leftCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            } else {
                this.rightCalendar.month.month(month).year(year);
                if (this.linkedCalendars)
                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
            this.updateCalendars();
        },

        timeChanged: function(e) {

            var cal = $(e.target).closest('.drp-calendar'),
                isLeft = cal.hasClass('left');

            var hour = parseInt(cal.find('.hourselect').val(), 10);
            var minute = parseInt(cal.find('.minuteselect').val(), 10);
            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

            if (!this.timePicker24Hour) {
                var ampm = cal.find('.ampmselect').val();
                if (ampm === 'PM' && hour < 12)
                    hour += 12;
                if (ampm === 'AM' && hour === 12)
                    hour = 0;
            }

            if (isLeft) {
                var start = this.startDate.clone();
                start.hour(hour);
                start.minute(minute);
                start.second(second);
                this.setStartDate(start);
                if (this.singleDatePicker) {
                    this.endDate = this.startDate.clone();
                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                    this.setEndDate(start.clone());
                }
            } else if (this.endDate) {
                var end = this.endDate.clone();
                end.hour(hour);
                end.minute(minute);
                end.second(second);
                this.setEndDate(end);
            }

            //update the calendars so all clickable dates reflect the new time component
            this.updateCalendars();

            //update the form inputs above the calendars with the new time
            this.updateFormInputs();

            //re-render the time pickers because changing one selection can affect what's enabled in another
            this.renderTimePicker('left');
            this.renderTimePicker('right');

        },

        elementChanged: function() {
            if (!this.element.is('input')) return;
            if (!this.element.val().length) return;

            var dateString = this.element.val().split(this.locale.separator),
                start = null,
                end = null;

            if (dateString.length === 2) {
                start = moment(dateString[0], this.locale.format);
                end = moment(dateString[1], this.locale.format);
            }

            if (this.singleDatePicker || start === null || end === null) {
                start = moment(this.element.val(), this.locale.format);
                end = start;
            }

            if (!start.isValid() || !end.isValid()) return;

            this.setStartDate(start);
            this.setEndDate(end);
            this.updateView();
        },

        keydown: function(e) {
            //hide on tab or enter
            if ((e.keyCode === 9) || (e.keyCode === 13)) {
                this.hide();
            }

            //hide on esc and prevent propagation
            if (e.keyCode === 27) {
                e.preventDefault();
                e.stopPropagation();

                this.hide();
            }
        },

        updateElement: function() {
            if (this.element.is('input') && this.autoUpdateInput) {
                var newValue = this.startDate.format(this.locale.format);
                if (!this.singleDatePicker) {
                    newValue += this.locale.separator + this.endDate.format(this.locale.format);
                }
                if (newValue !== this.element.val()) {
                    this.element.val(newValue).trigger('change');
                }
            }
        },

        remove: function() {
            this.container.remove();
            this.element.off('.daterangepicker');
            this.element.removeData();
        }

    };

    $.fn.daterangepicker = function(options, callback) {
        var implementOptions = $.extend(true, {}, $.fn.daterangepicker.defaultOptions, options);
        this.each(function() {
            var el = $(this);
            if (el.data('daterangepicker'))
                el.data('daterangepicker').remove();
            el.data('daterangepicker', new DateRangePicker(el, implementOptions, callback));
        });
        return this;
    };

    return DateRangePicker;

}));
// source --> https://prontosocialchef.it/wp-content/themes/listeo/js/bootstrap-slider.min.js?ver=2 
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},windowIsDefined="object"===("undefined"==typeof window?"undefined":_typeof(window));!function(t){if("function"==typeof define&&define.amd)define(["jquery"],t);else if("object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports){var e;try{e=require("jquery")}catch(t){e=null}module.exports=t(e)}else window&&(window.Slider=t(window.jQuery))}(function(t){var e,i="slider",s="bootstrapSlider";return windowIsDefined&&!window.console&&(window.console={}),windowIsDefined&&!window.console.log&&(window.console.log=function(){}),windowIsDefined&&!window.console.warn&&(window.console.warn=function(){}),function(t){function e(){}var i=Array.prototype.slice;!function(t){if(t){var s="undefined"==typeof console?e:function(t){console.error(t)};t.bridget=function(e,o){var n,a,h;(h=o).prototype.option||(h.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))}),n=e,a=o,t.fn[n]=function(e){if("string"==typeof e){for(var o=i.call(arguments,1),h=0,l=this.length;l>h;h++){var r=this[h],d=t.data(r,n);if(d)if(t.isFunction(d[e])&&"_"!==e.charAt(0)){var p=d[e].apply(d,o);if(void 0!==p&&p!==d)return p}else s("no such method '"+e+"' for "+n+" instance");else s("cannot call methods on "+n+" prior to initialization; attempted to call '"+e+"'")}return this}var c=this.map(function(){var i=t.data(this,n);return i?(i.option(e),i._init()):(i=new a(this,e),t.data(this,n,i)),t(this)});return!c||c.length>1?c:c[0]}},t.bridget}}(t)}(t),function(t){function o(e,i){function s(t,e){var i="data-slider-"+e.replace(/_/g,"-"),s=t.getAttribute(i);try{return JSON.parse(s)}catch(t){return s}}this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1},this.ticksCallbackMap={},this.handleCallbackMap={},"string"==typeof e?this.element=document.querySelector(e):e instanceof HTMLElement&&(this.element=e),i=i||{};for(var o=Object.keys(this.defaultOptions),n=0;n<o.length;n++){var h=o[n],l=i[h];l=null!==(l=void 0!==l?l:s(this.element,h))?l:this.defaultOptions[h],this.options||(this.options={}),this.options[h]=l}"auto"===this.options.rtl&&(this.options.rtl="rtl"===window.getComputedStyle(this.element).direction),"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.rtl?this.options.tooltip_position="left":this.options.tooltip_position="right";var r,d,p,c,u,m=this.element.style.width,v=!1,_=this.element.parentNode;if(this.sliderElem)v=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="bt-slider";var f=document.createElement("div");f.className="slider-track",(d=document.createElement("div")).className="slider-track-low",(r=document.createElement("div")).className="slider-selection",(p=document.createElement("div")).className="slider-track-high",(c=document.createElement("div")).className="slider-handle min-slider-handle",c.setAttribute("role","slider"),c.setAttribute("aria-valuemin",this.options.min),c.setAttribute("aria-valuemax",this.options.max),(u=document.createElement("div")).className="slider-handle max-slider-handle",u.setAttribute("role","slider"),u.setAttribute("aria-valuemin",this.options.min),u.setAttribute("aria-valuemax",this.options.max),f.appendChild(d),f.appendChild(r),f.appendChild(p),this.rangeHighlightElements=[];var g=this.options.rangeHighlights;if(Array.isArray(g)&&g.length>0)for(var y=0;y<g.length;y++){var b=document.createElement("div"),k=g[y].class||"";b.className="slider-rangeHighlight slider-selection "+k,this.rangeHighlightElements.push(b),f.appendChild(b)}var E=Array.isArray(this.options.labelledby);if(E&&this.options.labelledby[0]&&c.setAttribute("aria-labelledby",this.options.labelledby[0]),E&&this.options.labelledby[1]&&u.setAttribute("aria-labelledby",this.options.labelledby[1]),!E&&this.options.labelledby&&(c.setAttribute("aria-labelledby",this.options.labelledby),u.setAttribute("aria-labelledby",this.options.labelledby)),this.ticks=[],Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(this.ticksContainer=document.createElement("div"),this.ticksContainer.className="slider-tick-container",n=0;n<this.options.ticks.length;n++){var C=document.createElement("div");if(C.className="slider-tick",this.options.ticks_tooltip){var w=this._addTickListener(),x=w.addMouseEnter(this,C,n),L=w.addMouseLeave(this,C);this.ticksCallbackMap[n]={mouseEnter:x,mouseLeave:L}}this.ticks.push(C),this.ticksContainer.appendChild(C)}r.className+=" tick-slider-selection"}if(this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",n=0;n<this.options.ticks_labels.length;n++){var P=document.createElement("div"),T=0===this.options.ticks_positions.length,M=this.options.reversed&&T?this.options.ticks_labels.length-(n+1):n;P.className="slider-tick-label",P.innerHTML=this.options.ticks_labels[M],this.tickLabels.push(P),this.tickLabelContainer.appendChild(P)}var A=function(t){var e=document.createElement("div");e.className="tooltip-arrow";var i=document.createElement("div");i.className="tooltip-inner",t.appendChild(e),t.appendChild(i)},H=document.createElement("div");H.className="tooltip tooltip-main",H.setAttribute("role","presentation"),A(H);var N=document.createElement("div");N.className="tooltip tooltip-min",N.setAttribute("role","presentation"),A(N);var S=document.createElement("div");S.className="tooltip tooltip-max",S.setAttribute("role","presentation"),A(S),this.sliderElem.appendChild(f),this.sliderElem.appendChild(H),this.sliderElem.appendChild(N),this.sliderElem.appendChild(S),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),this.ticksContainer&&this.sliderElem.appendChild(this.ticksContainer),this.sliderElem.appendChild(c),this.sliderElem.appendChild(u),_.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(t&&(this.$element=t(this.element),this.$sliderElem=t(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.touchX=0,this.touchY=0,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),a[this.options.scale]&&(this.options.scale=a[this.options.scale]),!0===v&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.sliderElem,"slider-rtl"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","right","top","width","height"].forEach(function(t){this._removeProperty(this.trackLow,t),this._removeProperty(this.trackSelection,t),this._removeProperty(this.trackHigh,t)},this),[this.handle1,this.handle2].forEach(function(t){this._removeProperty(t,"left"),this._removeProperty(t,"right"),this._removeProperty(t,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(t){this._removeProperty(t,"left"),this._removeProperty(t,"right"),this._removeProperty(t,"top"),this._removeClass(t,"right"),this._removeClass(t,"left"),this._removeClass(t,"top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=m,this.options.orientation="horizontal",this.options.rtl?this.stylePos="right":this.stylePos="left",this.mousePos="clientX",this.sizePos="offsetWidth"),this.options.rtl&&this._addClass(this.sliderElem,"slider-rtl"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&this.options.ticks.length>0&&(this.options.max=Math.max.apply(Math,this.options.ticks),this.options.min=Math.min.apply(Math,this.options.ticks)),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this.options.range?this._state.value=[this.options.value,this.options.max]:this._state.value=this.options.value,this.trackLow=d||this.trackLow,this.trackSelection=r||this.trackSelection,this.trackHigh=p||this.trackHigh,"none"===this.options.selection?(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")):("after"===this.options.selection||"before"===this.options.selection)&&(this._removeClass(this.trackLow,"hide"),this._removeClass(this.trackSelection,"hide"),this._removeClass(this.trackHigh,"hide")),this.handle1=c||this.handle1,this.handle2=u||this.handle2,!0===v)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),n=0;n<this.ticks.length;n++)this._removeClass(this.ticks[n],"round triangle hide");if(-1!==["round","triangle","custom"].indexOf(this.options.handle))for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),n=0;n<this.ticks.length;n++)this._addClass(this.ticks[n],this.options.handle);if(this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchstart=this._touchstart.bind(this),this.touchmove=this._touchmove.bind(this),this.touchCapable){var z=!1;try{var D=Object.defineProperty({},"passive",{get:function(){z=!0}});window.addEventListener("test",null,D)}catch(t){}var V=!!z&&{passive:!0};this.sliderElem.addEventListener("touchstart",this.touchstart,V),this.sliderElem.addEventListener("touchmove",this.touchmove,V)}if(this.sliderElem.addEventListener("mousedown",this.mousedown,!1),this.resize=this._resize.bind(this),window.addEventListener("resize",this.resize,!1),"hide"===this.options.tooltip)this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide");else if("always"===this.options.tooltip)this._showTooltip(),this._alwaysShowTooltip=!0;else{if(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.options.ticks_tooltip){var F=this._addTickListener(),R=F.addMouseEnter(this,this.handle1),I=F.addMouseLeave(this,this.handle1);this.handleCallbackMap.handle1={mouseEnter:R,mouseLeave:I},R=F.addMouseEnter(this,this.handle2),I=F.addMouseLeave(this,this.handle2),this.handleCallbackMap.handle2={mouseEnter:R,mouseLeave:I}}else this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1);this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1)}this.options.enabled?this.enable():this.disable()}var n=function(t){return"Invalid input value '"+t+"' passed in"},a={linear:{toValue:function(t){var e=t/100*(this.options.max-this.options.min),i=!0;if(this.options.ticks_positions.length>0){for(var s,o,n,a=0,h=1;h<this.options.ticks_positions.length;h++)if(t<=this.options.ticks_positions[h]){s=this.options.ticks[h-1],n=this.options.ticks_positions[h-1],o=this.options.ticks[h],a=this.options.ticks_positions[h];break}e=s+(t-n)/(a-n)*(o-s),i=!1}var l=(i?this.options.min:0)+Math.round(e/this.options.step)*this.options.step;return l<this.options.min?this.options.min:l>this.options.max?this.options.max:l},toPercentage:function(t){if(this.options.max===this.options.min)return 0;if(this.options.ticks_positions.length>0){for(var e,i,s,o=0,n=0;n<this.options.ticks.length;n++)if(t<=this.options.ticks[n]){e=n>0?this.options.ticks[n-1]:0,s=n>0?this.options.ticks_positions[n-1]:0,i=this.options.ticks[n],o=this.options.ticks_positions[n];break}if(n>0)return s+(t-e)/(i-e)*(o-s)}return 100*(t-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(t){var e=0===this.options.min?0:Math.log(this.options.min),i=Math.log(this.options.max),s=Math.exp(e+(i-e)*t/100);return Math.round(s)===this.options.max?this.options.max:(s=this.options.min+Math.round((s-this.options.min)/this.options.step)*this.options.step)<this.options.min?this.options.min:s>this.options.max?this.options.max:s},toPercentage:function(t){if(this.options.max===this.options.min)return 0;var e=Math.log(this.options.max),i=0===this.options.min?0:Math.log(this.options.min);return 100*((0===t?0:Math.log(t))-i)/(e-i)}}};if((e=function(t,e){return o.call(this,t,e),this}).prototype={_init:function(){},constructor:e,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,handle:"round",reversed:!1,rtl:"auto",enabled:!0,formatter:function(t){return Array.isArray(t)?t[0]+" : "+t[1]:t},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,ticks_tooltip:!1,scale:"linear",focus:!1,tooltip_position:null,labelledby:null,rangeHighlights:[]},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(t,e,i){t||(t=0);var s=this.getValue();this._state.value=this._validateInputValue(t);var o=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=o(this._state.value[0]),this._state.value[1]=o(this._state.value[1]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=o(this._state.value),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),"after"===this.options.selection?this._state.value[1]=this.options.max:this._state.value[1]=this.options.min),this.options.max>this.options.min?this._state.percentage=[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:this._state.percentage=[0,0,100],this._layout();var n=this.options.range?this._state.value:this._state.value[0];return this._setDataVal(n),!0===e&&this._trigger("slide",n),s!==n&&!0===i&&this._trigger("change",{oldValue:s,newValue:n}),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),t&&(this._unbindJQueryEventHandlers(),this.$element.removeData("slider"))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(t,e){return this._bindNonQueryEventHandler(t,e),this},off:function(e,i){t?(this.$element.off(e,i),this.$sliderElem.off(e,i)):this._unbindNonQueryEventHandler(e,i)},getAttribute:function(t){return t?this.options[t]:this.options},setAttribute:function(t,e){return this.options[t]=e,this},refresh:function(){return this._removeSliderEventHandlers(),o.call(this,this.element,this.options),t&&t.data(this.element,"slider",this),this},relayout:function(){return this._resize(),this._layout(),this},_removeSliderEventHandlers:function(){if(this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.options.ticks_tooltip){for(var t=this.ticksContainer.getElementsByClassName("slider-tick"),e=0;e<t.length;e++)t[e].removeEventListener("mouseenter",this.ticksCallbackMap[e].mouseEnter,!1),t[e].removeEventListener("mouseleave",this.ticksCallbackMap[e].mouseLeave,!1);this.handle1.removeEventListener("mouseenter",this.handleCallbackMap.handle1.mouseEnter,!1),this.handle2.removeEventListener("mouseenter",this.handleCallbackMap.handle2.mouseEnter,!1),this.handle1.removeEventListener("mouseleave",this.handleCallbackMap.handle1.mouseLeave,!1),this.handle2.removeEventListener("mouseleave",this.handleCallbackMap.handle2.mouseLeave,!1)}this.handleCallbackMap=null,this.ticksCallbackMap=null,this.showTooltip&&(this.handle1.removeEventListener("focus",this.showTooltip,!1),this.handle2.removeEventListener("focus",this.showTooltip,!1)),this.hideTooltip&&(this.handle1.removeEventListener("blur",this.hideTooltip,!1),this.handle2.removeEventListener("blur",this.hideTooltip,!1)),this.showTooltip&&this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.hideTooltip&&this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.touchstart,!1),this.sliderElem.removeEventListener("touchmove",this.touchmove,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1),window.removeEventListener("resize",this.resize,!1)},_bindNonQueryEventHandler:function(t,e){void 0===this.eventToCallbackMap[t]&&(this.eventToCallbackMap[t]=[]),this.eventToCallbackMap[t].push(e)},_unbindNonQueryEventHandler:function(t,e){var i=this.eventToCallbackMap[t];if(void 0!==i)for(var s=0;s<i.length;s++)if(i[s]===e){i.splice(s,1);break}},_cleanUpEventCallbacksMap:function(){for(var t=Object.keys(this.eventToCallbackMap),e=0;e<t.length;e++){var i=t[e];delete this.eventToCallbackMap[i]}},_showTooltip:function(){!1===this.options.tooltip_split?(this._addClass(this.tooltip,"in"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"in"),this._addClass(this.tooltip_max,"in"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){!1===this._state.inDrag&&!0!==this.alwaysShowTooltip&&(this._removeClass(this.tooltip,"in"),this._removeClass(this.tooltip_min,"in"),this._removeClass(this.tooltip_max,"in")),this._state.over=!1},_setToolTipOnMouseOver:function(t){function e(t,e){return e?[100-t.percentage[0],this.options.range?100-t.percentage[1]:t.percentage[1]]:[t.percentage[0],t.percentage[1]]}var i=this.options.formatter(t?t.value[0]:this._state.value[0]),s=e(t||this._state,this.options.reversed);this._setText(this.tooltipInner,i),this.tooltip.style[this.stylePos]=s[0]+"%"},_addTickListener:function(){return{addMouseEnter:function(t,e,i){var s=function(){var e=t._state,s=i>=0?i:this.attributes["aria-valuenow"].value,o=parseInt(s,10);e.value[0]=o,e.percentage[0]=t.options.ticks_positions[o],t._setToolTipOnMouseOver(e),t._showTooltip()};return e.addEventListener("mouseenter",s,!1),s},addMouseLeave:function(t,e){var i=function(){t._hideTooltip()};return e.addEventListener("mouseleave",i,!1),i}}},_layout:function(){var t,e;if(t=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]],this.handle1.style[this.stylePos]=t[0]+"%",this.handle1.setAttribute("aria-valuenow",this._state.value[0]),isNaN(this.options.formatter(this._state.value[0]))&&this.handle1.setAttribute("aria-valuetext",this.options.formatter(this._state.value[0])),this.handle2.style[this.stylePos]=t[1]+"%",this.handle2.setAttribute("aria-valuenow",this._state.value[1]),isNaN(this.options.formatter(this._state.value[1]))&&this.handle2.setAttribute("aria-valuetext",this.options.formatter(this._state.value[1])),this.rangeHighlightElements.length>0&&Array.isArray(this.options.rangeHighlights)&&this.options.rangeHighlights.length>0)for(var i=0;i<this.options.rangeHighlights.length;i++){var s=this._toPercentage(this.options.rangeHighlights[i].start),o=this._toPercentage(this.options.rangeHighlights[i].end);if(this.options.reversed){var n=100-o;o=100-s,s=n}var a=this._createHighlightRange(s,o);a?"vertical"===this.options.orientation?(this.rangeHighlightElements[i].style.top=a.start+"%",this.rangeHighlightElements[i].style.height=a.size+"%"):(this.options.rtl?this.rangeHighlightElements[i].style.right=a.start+"%":this.rangeHighlightElements[i].style.left=a.start+"%",this.rangeHighlightElements[i].style.width=a.size+"%"):this.rangeHighlightElements[i].style.display="none"}if(Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var h,l="vertical"===this.options.orientation?"height":"width";h="vertical"===this.options.orientation?"marginTop":this.options.rtl?"marginRight":"marginLeft";var r=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var d=0;if(0===this.options.ticks_positions.length)"vertical"!==this.options.orientation&&(this.tickLabelContainer.style[h]=-r/2+"px"),d=this.tickLabelContainer.offsetHeight;else for(p=0;p<this.tickLabelContainer.childNodes.length;p++)this.tickLabelContainer.childNodes[p].offsetHeight>d&&(d=this.tickLabelContainer.childNodes[p].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=d+"px")}for(var p=0;p<this.options.ticks.length;p++){var c=this.options.ticks_positions[p]||this._toPercentage(this.options.ticks[p]);this.options.reversed&&(c=100-c),this.ticks[p].style[this.stylePos]=c+"%",this._removeClass(this.ticks[p],"in-selection"),this.options.range?c>=t[0]&&c<=t[1]&&this._addClass(this.ticks[p],"in-selection"):"after"===this.options.selection&&c>=t[0]?this._addClass(this.ticks[p],"in-selection"):"before"===this.options.selection&&c<=t[0]&&this._addClass(this.ticks[p],"in-selection"),this.tickLabels[p]&&(this.tickLabels[p].style[l]=r+"px","vertical"!==this.options.orientation&&void 0!==this.options.ticks_positions[p]?(this.tickLabels[p].style.position="absolute",this.tickLabels[p].style[this.stylePos]=c+"%",this.tickLabels[p].style[h]=-r/2+"px"):"vertical"===this.options.orientation&&(this.options.rtl?this.tickLabels[p].style.marginRight=this.sliderElem.offsetWidth+"px":this.tickLabels[p].style.marginLeft=this.sliderElem.offsetWidth+"px",this.tickLabelContainer.style[h]=this.sliderElem.offsetWidth/2*-1+"px"))}}if(this.options.range){e=this.options.formatter(this._state.value),this._setText(this.tooltipInner,e),this.tooltip.style[this.stylePos]=(t[1]+t[0])/2+"%";var u=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,u);var m=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,m),this.tooltip_min.style[this.stylePos]=t[0]+"%",this.tooltip_max.style[this.stylePos]=t[1]+"%"}else e=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,e),this.tooltip.style[this.stylePos]=t[0]+"%";if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(t[0],t[1])+"%",this.trackSelection.style.top=Math.min(t[0],t[1])+"%",this.trackSelection.style.height=Math.abs(t[0]-t[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(t[0],t[1])-Math.abs(t[0]-t[1])+"%";else{"right"===this.stylePos?this.trackLow.style.right="0":this.trackLow.style.left="0",this.trackLow.style.width=Math.min(t[0],t[1])+"%","right"===this.stylePos?this.trackSelection.style.right=Math.min(t[0],t[1])+"%":this.trackSelection.style.left=Math.min(t[0],t[1])+"%",this.trackSelection.style.width=Math.abs(t[0]-t[1])+"%","right"===this.stylePos?this.trackHigh.style.left="0":this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(t[0],t[1])-Math.abs(t[0]-t[1])+"%";var v=this.tooltip_min.getBoundingClientRect(),_=this.tooltip_max.getBoundingClientRect();"bottom"===this.options.tooltip_position?v.right>_.left?(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top="",this.tooltip_max.style.bottom="22px"):(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top=this.tooltip_min.style.top,this.tooltip_max.style.bottom=""):v.right>_.left?(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_createHighlightRange:function(t,e){return this._isHighlightRange(t,e)?t>e?{start:e,size:t-e}:{start:t,size:e-t}:null},_isHighlightRange:function(t,e){return t>=0&&100>=t&&e>=0&&100>=e},_resize:function(t){this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this._layout()},_removeProperty:function(t,e){t.style.removeProperty?t.style.removeProperty(e):t.style.removeAttribute(e)},_mousedown:function(t){if(!this._state.enabled)return!1;t.preventDefault&&t.preventDefault(),this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var e=this._getPercentage(t);if(this.options.range){var i=Math.abs(this._state.percentage[0]-e),s=Math.abs(this._state.percentage[1]-e);this._state.dragged=s>i?0:1,this._adjustPercentageForRangeSliders(e)}else this._state.dragged=0;this._state.percentage[this._state.dragged]=e,this._layout(),this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var o=this._calculateValue();return this._trigger("slideStart",o),this._setDataVal(o),this.setValue(o,!1,!0),t.returnValue=!1,this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_touchstart:function(t){if(void 0!==t.changedTouches){var e=t.changedTouches[0];this.touchX=e.pageX,this.touchY=e.pageY}else this._mousedown(t)},_triggerFocusOnHandle:function(t){0===t&&this.handle1.focus(),1===t&&this.handle2.focus()},_keydown:function(t,e){if(!this._state.enabled)return!1;var i;switch(e.keyCode){case 37:case 40:i=-1;break;case 39:case 38:i=1}if(i){if(this.options.natural_arrow_keys){var s="vertical"===this.options.orientation&&!this.options.reversed,o="horizontal"===this.options.orientation&&this.options.reversed;(s||o)&&(i=-i)}var n=this._state.value[t]+i*this.options.step,a=n/this.options.max*100;if(this._state.keyCtrl=t,this.options.range)this._adjustPercentageForRangeSliders(a),n=[this._state.keyCtrl?this._state.value[0]:n,this._state.keyCtrl?n:this._state.value[1]];return this._trigger("slideStart",n),this._setDataVal(n),this.setValue(n,!0,!0),this._setDataVal(n),this._trigger("slideStop",n),this._layout(),this._pauseEvent(e),delete this._state.keyCtrl,!1}},_pauseEvent:function(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1},_mousemove:function(t){if(!this._state.enabled)return!1;var e=this._getPercentage(t);this._adjustPercentageForRangeSliders(e),this._state.percentage[this._state.dragged]=e,this._layout();var i=this._calculateValue(!0);return this.setValue(i,!0,!0),!1},_touchmove:function(t){if(void 0!==t.changedTouches){var e=t.changedTouches[0],i=e.pageX-this.touchX,s=e.pageY-this.touchY;this._state.inDrag||("vertical"===this.options.orientation&&5>=i&&i>=-5&&(s>=15||-15>=s)?this._mousedown(t):5>=s&&s>=-5&&(i>=15||-15>=i)&&this._mousedown(t))}},_adjustPercentageForRangeSliders:function(t){if(this.options.range){var e=this._getNumDigitsAfterDecimalPlace(t);e=e?e-1:0;var i=this._applyToFixedAndParseFloat(t,e);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],e)<i?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],e)>i?(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0):0===this._state.keyCtrl&&this._state.value[1]/this.options.max*100<t?(this._state.percentage[0]=this._state.percentage[1],this._state.keyCtrl=1,this.handle2.focus()):1===this._state.keyCtrl&&this._state.value[0]/this.options.max*100>t&&(this._state.percentage[1]=this._state.percentage[0],this._state.keyCtrl=0,this.handle1.focus())}},_mouseup:function(){if(!this._state.enabled)return!1;this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!1,!1===this._state.over&&this._hideTooltip();var t=this._calculateValue(!0);return this._layout(),this._setDataVal(t),this._trigger("slideStop",t),!1},_calculateValue:function(t){var e;if(this.options.range?(e=[this.options.min,this.options.max],0!==this._state.percentage[0]&&(e[0]=this._toValue(this._state.percentage[0]),e[0]=this._applyPrecision(e[0])),100!==this._state.percentage[1]&&(e[1]=this._toValue(this._state.percentage[1]),e[1]=this._applyPrecision(e[1]))):(e=this._toValue(this._state.percentage[0]),e=parseFloat(e),e=this._applyPrecision(e)),t){for(var i=[e,1/0],s=0;s<this.options.ticks.length;s++){var o=Math.abs(this.options.ticks[s]-e);o<=i[1]&&(i=[this.options.ticks[s],o])}if(i[1]<=this.options.ticks_snap_bounds)return i[0]}return e},_applyPrecision:function(t){var e=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(t,e)},_getNumDigitsAfterDecimalPlace:function(t){var e=(""+t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return e?Math.max(0,(e[1]?e[1].length:0)-(e[2]?+e[2]:0)):0},_applyToFixedAndParseFloat:function(t,e){var i=t.toFixed(e);return parseFloat(i)},_getPercentage:function(t){!this.touchCapable||"touchstart"!==t.type&&"touchmove"!==t.type||(t=t.touches[0]);var e=t[this.mousePos]-this._state.offset[this.stylePos];"right"===this.stylePos&&(e=-e);var i=e/this._state.size*100;return i=Math.round(i/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(i=100-i),Math.max(0,Math.min(100,i))},_validateInputValue:function(t){if(isNaN(+t)){if(Array.isArray(t))return this._validateArray(t),t;throw new Error(n(t))}return+t},_validateArray:function(t){for(var e=0;e<t.length;e++){var i=t[e];if("number"!=typeof i)throw new Error(n(i))}},_setDataVal:function(t){this.element.setAttribute("data-value",t),this.element.setAttribute("value",t),this.element.value=t},_trigger:function(e,i){i=i||0===i?i:void 0;var s=this.eventToCallbackMap[e];if(s&&s.length)for(var o=0;o<s.length;o++){(0,s[o])(i)}t&&this._triggerJQueryEvent(e,i)},_triggerJQueryEvent:function(t,e){var i={type:t,value:e};this.$element.trigger(i),this.$sliderElem.trigger(i)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(t,e){void 0!==t.textContent?t.textContent=e:void 0!==t.innerText&&(t.innerText=e)},_removeClass:function(t,e){for(var i=e.split(" "),s=t.className,o=0;o<i.length;o++){var n=i[o],a=new RegExp("(?:\\s|^)"+n+"(?:\\s|$)");s=s.replace(a," ")}t.className=s.trim()},_addClass:function(t,e){for(var i=e.split(" "),s=t.className,o=0;o<i.length;o++){var n=i[o];new RegExp("(?:\\s|^)"+n+"(?:\\s|$)").test(s)||(s+=" "+n)}t.className=s.trim()},_offsetLeft:function(t){return t.getBoundingClientRect().left},_offsetRight:function(t){return t.getBoundingClientRect().right},_offsetTop:function(t){for(var e=t.offsetTop;(t=t.offsetParent)&&!isNaN(t.offsetTop);)e+=t.offsetTop,"BODY"!==t.tagName&&(e-=t.scrollTop);return e},_offset:function(t){return{left:this._offsetLeft(t),right:this._offsetRight(t),top:this._offsetTop(t)}},_css:function(e,i,s){if(t)t.style(e,i,s);else{var o=i.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()});e.style[o]=s}},_toValue:function(t){return this.options.scale.toValue.apply(this,[t])},_toPercentage:function(t){return this.options.scale.toPercentage.apply(this,[t])},_setTooltipPosition:function(){var t=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var e,i="left"===(e=this.options.tooltip_position?this.options.tooltip_position:this.options.rtl?"left":"right")?"right":"left";t.forEach(function(t){this._addClass(t,e),t.style[i]="100%"}.bind(this))}else"bottom"===this.options.tooltip_position?t.forEach(function(t){this._addClass(t,"bottom"),t.style.top="22px"}.bind(this)):t.forEach(function(t){this._addClass(t,"top"),t.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))}},t&&t.fn){var h=void 0;t.fn.slider?(windowIsDefined&&window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."),h=s):(t.bridget(i,e),h=i),t.bridget(s,e),t(function(){t("input[data-provide=slider]")[h]()})}}(t),e});