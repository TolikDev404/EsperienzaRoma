// source --> https://prontosocialchef.it/wp-content/plugins/listeo-core/assets/js/frontend.js?ver=1.8.17 
	/* ----------------- Start Document ----------------- */
(function($){
"use strict";

$(document).ready(function(){
  $(".listeo_core-dashboard-action-delete").click(function (e) {
    e.preventDefault();
    if (window.confirm(listeo_core.areyousure)) {
      location.href = this.href;
    }
  });

  // $('.booking-widget').after("<div class='booking-widget-hook'></div>");

  //  $(window).on('load resize', function() {
  //        var winWidth = $(window).width();
  //        if (winWidth < 992) {
  //           $('.booking-widget').insertAfter("#titlebar");
  //        } else if (winWidth > 992) {
  //           $('.booking-widget').insertAfter(".booking-widget-hook");
  //        }
  //  });

  $("body").on("click", ".listeo_core-bookmark-it", function (e) {
    e.preventDefault();
    if ($(this).is(".clicked,.liked")) {
      return;
    }
    $(this).addClass("clicked");

    var post_id = $(this).data("post_id"),
      handler = $(this),
      nonce = $(this).data("nonce"),
      addedtolist = $(this).data("saved-title");

    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "listeo_core_bookmark_this",
        post_id: post_id,
        nonce: nonce,
      },
      success: function (response) {
        console.log(response);
        if (response.type == "success") {
          handler
            .removeClass("listeo_core-bookmark-it")
            .addClass("liked")
            .addClass("listeo_core-unbookmark-it")
            .removeClass("clicked");
          var confirmed = handler.data("confirm");
          handler
            .children(".like-icon")
            .addClass("liked")
            .removeClass("clicked")
            .parent()
            .html('<span class="like-icon liked"></span> ' + confirmed);
        } else {
          handler.removeClass("clicked");
          handler.children(".like-icon").removeClass("liked");
        }
      },
    });
  });

  $(".listeo_core-unbookmark-it").on("click", function (e) {
    e.preventDefault();
    var handler = $(this);
    var post_id = $(this).data("post_id");
    var nonce = $(this).data("nonce");
    handler.closest("li").addClass("opacity-05");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "listeo_core_unbookmark_this",
        post_id: post_id,
        nonce: nonce,
      },
      success: function (response) {
        console.log(handler);
        console.log(response);
        if (response.type == "success") {
          handler.closest("li").fadeOut();
          handler.removeClass("clicked");
          handler.removeClass("liked");
          handler.children(".like-icon").removeClass("liked");
        } else {
          handler.closest("li").removeClass("opacity-05");
        }
      },
    });
  });

  // Choose listing type step
  $(".add-listing-section.type-selection a").on("click", function (e) {
    e.preventDefault();
    var type = $(this).data("type");
    $("#listing_type").val(type);
    $("#submit-listing-form").submit();
  });

  $(".add-listing-section.type-selection a").on("click", function (e) {
    e.preventDefault();
    var type = $(this).data("type");
    $("#listing_type").val(type);
    $("#submit-listing-form").submit();
  });

  var elements = document.querySelectorAll("input,select,textarea");

  for (var i = elements.length; i--; ) {
    elements[i].addEventListener("invalid", function () {
      this.scrollIntoView(false);
    });
  }

  $(".add-listing-section.availability_calendar").on(
    "click",
    "span.calendar-day-date",
    function (e) {
      e.preventDefault();
      var td = $(this).parent();
      var timestamp = td.data("timestamp");
      var date = td.data("date");
      var $el = $(".listeo-calendar-avail");

      if (td.hasClass("not_active")) {
        td.removeClass("not_active");
        var current_dates = $el.val();
        console.log(current_dates);
        console.log(date + "|");
        current_dates = current_dates.replace(date + "|", "");
        console.log(current_dates);
        $el.val(current_dates);
      } else {
        td.addClass("not_active");
        $el.val($el.val() + date + "|");
      }
    }
  );

  $(".add-listing-section.availability_calendar").on(
    "click",
    "button",
    function (e) {
      e.preventDefault();
      var td = $(this).parent().parent();
      var timestamp = td.data("timestamp");
      var date = td.data("date");
      var $el = $(".listeo-calendar-avail");
      var current_price = $(this).prev("span").text();

      var price = (function ask() {
        var n = prompt(listeo_core.prompt_price);
        console.log(typeof n);
        if (n === null) {
          return n;
        } else if (n === "") {
          return current_price;
        } else {
          return isNaN(n) ? ask() : n;
        }
      })();
      var json = {};
      var reg_price;
      if (td.hasClass("weekend")) {
        reg_price = $("#_weekday_price").val();
      } else {
        reg_price = $("#_normal_price").val();
      }
      if (price != null && price != reg_price) {
        $(this).parent().find("span").html(price);
        // json.push({
        //   date : price
        // });
        var current_value = $(".listeo-calendar-price").val();
        if (current_value) {
          var json = jQuery.parseJSON($(".listeo-calendar-price").val());
        }
        json[date] = price;
        var stringit = JSON.stringify(json);
        $(".listeo-calendar-price").val(stringit);
      }
      if (price == reg_price) {
        $(this).parent().find("span").html(price);
        var current_value = $(".listeo-calendar-price").val();
        if (current_value) {
          var json = jQuery.parseJSON($(".listeo-calendar-price").val());
        }
        delete json[date];
        var stringit = JSON.stringify(json);
        $(".listeo-calendar-price").val(stringit);
      }
    }
  );

  $("#_normal_price").on("input", function (e) {
    e.preventDefault();
    var price = $(this).val();
    $(".listeo-calendar-day:not(.weekend) .calendar-price span").html(price);
    submit_calendar_update_price();
  });

  $("#_weekend_price,#_weekday_price").on("input", function (e) {
    e.preventDefault();
    var price = $(this).val();
    $(".listeo-calendar-day.weekend .calendar-price span").html(price);
    submit_calendar_update_price();
  });

  $(".add-listing-section.availability_calendar").on(
    "click",
    ".prev",
    function (event) {
      var month = $(this).data("prev-month");
      var year = $(this).data("prev-year");
      getCalendar(month, year);
    }
  );
  $(".add-listing-section.availability_calendar").on(
    "click",
    ".next",
    function (event) {
      var month = $(this).data("next-month");
      var year = $(this).data("next-year");
      getCalendar(month, year);
    }
  );
  $(".add-listing-section.availability_calendar").on(
    "blur",
    "#currentYear",
    function (event) {
      var month = $("#currentMonth").text();
      var year = $("#currentYear").text();
      getCalendar(month, year);
    }
  );

  function getCalendar(month, year) {
    $.ajax({
      type: "post",
      dataType: "json",
      url: listeo_core.ajax_url,
      data: { action: "listeo_core_calendar", month: month, year: year },
      success: function (data) {
        $("#listeo-calendar-outer").html(data.response);
        var _normal_price = $("#_normal_price").val();
        $(".listeo-calendar-day:not(.weekend) .calendar-price span").html(
          _normal_price
        );
        var _weekend_price = $("#_weekday_price").val();
        $(".listeo-calendar-day.weekend .calendar-price span").html(
          _weekend_price
        );
        submit_calendar_update_price();
        submit_calendar_update_unav_days();
      },
    });
  }

  function submit_calendar_update_unav_days() {
    var days = $(".listeo-calendar-avail").val();
    if (days) {
      var array = days.split("|");

      $.each(array, function (key, day) {
        if (day) {
          $("td.listeo-calendar-day[data-date='" + day + "']").addClass(
            "not_active"
          );
        }
      });
    }
  }

  function submit_calendar_update_price() {
    var prices = $(".listeo-calendar-price").val();
    if (prices) {
      var obj = JSON.parse(prices);

      $.each(obj, function (day, price) {
        if (day) {
          $(
            "td.listeo-calendar-day[data-date='" +
              day +
              "'] .calendar-price span"
          ).text(price);
        }
      });
    }
  }
  var _normal_price = $("#_normal_price").val();
  $(".listeo-calendar-day:not(.weekend) .calendar-price span").html(
    _normal_price
  );
  var _weekend_price = $("#_weekday_price").val();
  $(".listeo-calendar-day.weekend .calendar-price span").html(_weekend_price);
  submit_calendar_update_price();
  submit_calendar_update_unav_days();

  // // Store the start and end dates
  // var startDate = null;
  // var endDate = null;

  // // Attach a click event listener to all table cells
  // $("table td")
  //   .click(function () {
  //     var cellIndex = $(this).index();
  //     var rowIndex = $(this).parent().index();

  //     // If start date is not set, set it
  //     if (startDate === null) {
  //       startDate = {
  //         row: rowIndex,
  //         cell: cellIndex,
  //       };
  //       $(this).addClass("selected");
  //     }
  //     // If end date is not set, set it
  //     else if (endDate === null) {
  //       endDate = {
  //         row: rowIndex,
  //         cell: cellIndex,
  //       };
  //       $(this).addClass("selected");

  //       // Swap start and end date if necessary
  //       if (
  //         startDate.row > endDate.row ||
  //         (startDate.row === endDate.row && startDate.cell > endDate.cell)
  //       ) {
  //         var tempDate = startDate;
  //         startDate = endDate;
  //         endDate = tempDate;
  //       }

  //       // Prompt user for value
  //       var value = prompt("Enter a value:");

  //       // Set value for selected range of dates
  //       $("table tr").each(function (row) {
  //         $(this)
  //           .find("td")
  //           .each(function (cell) {
  //             if (
  //               (row > startDate.row ||
  //                 (row === startDate.row && cell >= startDate.cell)) &&
  //               (row < endDate.row ||
  //                 (row === endDate.row && cell <= endDate.cell))
  //             ) {
  //               $(this).find("input").val(value);
  //             }
  //           });
  //       });
  //     }
  //     // If both start and end date are already set, reset the selection
  //     else {
  //       startDate = {
  //         row: rowIndex,
  //         cell: cellIndex,
  //       };
  //       endDate = null;
  //       $("table td").removeClass("selected");
  //       $(this).addClass("selected");
  //     }
  //   })
  //   .hover(
  //     function () {
  //       // If start date is already set, add class to all tds between start date and current hover
  //       if (startDate !== null && endDate === null) {
  //         var cellIndex = $(this).index();
  //         var rowIndex = $(this).parent().index();
  //         $("table tr").each(function (row) {
  //           $(this)
  //             .find("td")
  //             .each(function (cell) {
  //               if (
  //                 (row > startDate.row ||
  //                   (row === startDate.row && cell >= startDate.cell)) &&
  //                 (row < rowIndex || (row === rowIndex && cell <= cellIndex))
  //               ) {
  //                 $(this).addClass("selected");
  //               }
  //             });
  //         });
  //       }
  //     },
  //     function () {
  //       // If start date is already set, remove class from all tds between start date and current hover
  //       if (startDate !== null && endDate === null) {
  //         $("table tr").each(function (row) {
  //           $(this)
  //             .find("td")
  //             .each(function (cell) {
  //               if (
  //                 (row > startDate.row ||
  //                   (row === startDate.row && cell >= startDate.cell)) &&
  //                 (row < rowIndex || (row === rowIndex && cell <= cellIndex))
  //               ) {
  //                 $(this).removeClass("selected");
  //               }
  //             });
  //         });
  //       }
  //     }
  //   );

  // send slots in json
  var slot_container = 0;
  var slots = new Array();

  $("#submit-listing-form").submit(function (e) {
    //e.preventDefault();
    $(".slots-container").each(function () {
      var inside_slots = new Array();
      var slot_number = 0;
      $(this)
        .find(".single-slot-time")
        .each(function (slot_time) {
          inside_slots[slot_number] =
            $(this).text() +
            "|" +
            $(this).parent().parent().find("#slot-qty").val();
          slot_number++;
        });
      slots[slot_container] = inside_slots;
      slot_container++;
    });
    $("#_slots").val(JSON.stringify(slots));
    //console.log(JSON.stringify(slots));
    //$( this ).submit();
  });

  /* var json = jQuery.parseJSON($(".listeo-calendar-price").val());  
    
    json[date] = price;
    var stringit = JSON.stringify(json);*/

  $("#listeo-activities-list a.close-list-item").on("click", function (e) {
    var $this = $(this),
      id = $(this).data("id"),
      nonce = $(this).data("nonce");

    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "remove_activity",
        id: id,
        nonce: nonce,
      },
      success: function (data) {
        if (data.success == true) {
          $this
            .parent()
            .addClass("wait")
            .fadeOut("normal", function () {
              $this.remove();
            });
        } else {
        }
      },
    });
    e.preventDefault();
  });

  $("#listeo-clear-activities").on("click", function (e) {
    var $this = $(this),
      nonce = $(this).data("nonce");

    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "remove_all_activities",
        nonce: nonce,
      },
      success: function (data) {
        if (data.success == true) {
          $("ul#listeo-activities-list li:not(.cleared)").remove();
          $("li.cleared").show();
          $this.parent().parent().find(".pagination-container").remove();
        } else {
        }
      },
    });
    e.preventDefault();
  });

  $("select#sort-reviews-by").on("change", function (e) {
    var button = $(this);
    button.parents(".dashboard-list-box").addClass("loading");
    var page = button.find("#reviews_list_visitors").data("page");
    var post_id = $(this).val();
    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "reload_reviews",
        id: post_id,
        page: page,
        //'nonce': nonce
      },
      success: function (data) {
        button.parents(".dashboard-list-box").removeClass("loading");
        if (data.success == true) {
          $("#reviews_list_visitors").html(data.comments);
          $("#visitor-reviews-pagination").html(data.pagination);
          $(".popup-with-zoom-anim").magnificPopup({
            type: "inline",

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: "auto",

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: "my-mfp-zoom-in",
          });
        } else {
          console.log("error");
        }
      },
    });
    e.preventDefault();
  });

  $("#visitor-reviews-pagination").on("click", "a", function (e) {
    var page = $(this).parent().data("paged");
    var post_id = $("#sort-reviews-by").val();
    $(".reviews-visitior-box").addClass("loading");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "reload_reviews",
        id: post_id,
        page: page,
      },
      success: function (data) {
        $(".reviews-visitior-box").removeClass("loading");
        if (data.success == true) {
          $("#reviews_list_visitors").html(data.comments);
          $("#visitor-reviews-pagination").html(data.pagination);
          $(".popup-with-zoom-anim").magnificPopup({
            type: "inline",

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: "auto",

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: "my-mfp-zoom-in",
          });
        } else {
          console.log("error");
        }
      },
    });
    e.preventDefault();
  });

  $(".reviews-visitior-box").on("click", ".reply-to-review-link", function (e) {
    $("#comment_reply").val();
    var post_id = $(this).data("postid");
    var review_id = $(this).data("replyid");

    $("#send-comment-reply input#reply-post-id").val(post_id);
    $("#send-comment-reply input#reply-review-id").val(review_id);
  });

  $(".reviews-visitior-box").on("click", ".edit-reply", function (e) {
    //var review_id = $(this).parents('.review-li').data('review');
    $("#send-comment-edit-reply textarea#comment_reply").val("");
    var comment_id = $(this).data("comment-id");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "get_comment_review_details",
        comment: comment_id,
        //'nonce': nonce
      },
      success: function (data) {
        var comment_content = data.comment_content;
        $("#send-comment-edit-reply textarea#comment_reply").val(
          comment_content
        );
      },
    });

    $("#send-comment-edit-reply input#reply_id").val(comment_id);
  });

  $("#send-comment-edit-reply").on("submit", function (e) {
    $("#send-comment-edit-reply button").addClass("loading");
    var content = $(this).find("textarea#comment_reply").val();
    var reply_id = $(this).find("input#reply_id").val();
    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "edit_reply_to_review",
        //'post_id':  $(this).find('input#reply-post-id').val(),
        reply_id: $(this).find("input#reply_id").val(),
        content: content,
        //'nonce': nonce
      },
      success: function (data) {
        if (data.success == true) {
          $("#send-comment-edit-reply button").removeClass("loading");
          $('.edit-reply[data-comment-id="' + reply_id + '"]').data(
            "comment-content",
            content
          );
          // $('#review-'+review_id+' .edit-reply')
          $(".mfp-close").trigger("click");
        } else {
          $("#send-comment-edit-reply button").removeClass("loading");
        }
      },
    });
    e.preventDefault();
  });

  $("#send-comment-reply").on("submit", function (e) {
    $("#send-comment-reply button").addClass("loading");
    var review_id = $(this).find("input#reply-review-id").val();

    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "reply_to_review",
        post_id: $(this).find("input#reply-post-id").val(),
        review_id: review_id,
        content: $(this).find("textarea#comment_reply").val(),
        //'nonce': nonce
      },
      success: function (data) {
        console.log(data);
        if (data.success == true) {
          $("#send-comment-reply button").removeClass("loading");
          $(".mfp-close").trigger("click");
          $("#review-" + review_id + " .reply-to-review-link")
            .html('<i class="sl sl-icon-check"></i> ' + listeo_core.replied)
            .off("click");
          //location.reload();
        } else {
          $("#send-comment-reply button").removeClass("loading");
        }
      },
    });
    e.preventDefault();
  });

  var critera = listeo_core.review_criteria.split(",");

  $(".your-reviews-box").on("click", ".edit-review", function (e) {
    //var review_id = $(this).parents('.review-li').data('review');
    $("#send-comment-edit-review input[type=radio]").prop("checked", false);
    $("#send-comment-edit-review textarea#comment_reply").val("");
    $(".message-reply").addClass("loading");
    var comment_id = $(this).data("comment-id");

    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "get_comment_review_details",
        comment: comment_id,
        //'nonce': nonce
      },
      success: function (data) {
        $("#send-comment-edit-review input#reply_id").val(comment_id);
        $("#send-comment-edit-review input#rating-" + data.comment_rating).prop(
          "checked",
          true
        );
        $(".sub-ratings-container").html(data.ratings);
        // $.each( critera, function( index, value ){
        //     var rate_val = data[value];

        //     console.log(rate_val);

        //     $("#send-comment-edit-review input#rating-"+value+"-"+rate_val).prop( "checked", true );
        // });
        $("#send-comment-edit-review textarea#comment_reply").val(
          data.comment_content
        );
        $(".message-reply").removeClass("loading");
      },
    });

    // var button = $(this);
    // var comment_content = $(this).data('comment-content');
    // var comment_rating = $(this).data('comment-rating');

    // $('#send-comment-edit-review input#reply_id').val(comment_id);

    // $('#send-comment-edit-review input#rating-'+comment_rating).prop( "checked", true );
    // $.each( critera, function( index, value ){
    //     var rate_val = button.data('comment-'+value);
    //     $('#send-comment-edit-review input#rating-'+value+'-'+rate_val).prop( "checked", true );
    // });
    // $('#send-comment-edit-review textarea#comment_reply').val(comment_content);
  });

  $(".listeo_core-dashboard-delete-review").click(function (e) {
    e.preventDefault();
    if (window.confirm(listeo_core.areyousure)) {
      location.href = this.href;
    }
  });

  function get_url_extension(url) {
    return url.split(/\#|\?/)[0].split(".").pop().trim();
  }

  $("body").on("submit", ".ical-import-form", function (e) {
    e.preventDefault();

    $(this).find("button").addClass("loading");
    $("input.import_ical_url").removeClass("bounce");

    var form = $(this);
    var listing_id = $(this).data("listing-id");
    var name = $(this).find("input.import_ical_name").val();
    var url = $(this).find("input.import_ical_url").val();
    var force_update = $(this)
      .find("input.import_ical_force_update")
      .prop("checked");
    var filetype = get_url_extension(url); //validate for .ical, .ics, .ifb, .icalendar

    var valid_filetypes = ["ical", "ics", "ifb", "icalendar", "calendar"];

    if (
      url.indexOf("calendar") !== -1 ||
      url.indexOf("accommodation_id") !== -1 ||
      url.indexOf("ical") !== -1 ||
      $.inArray(filetype, valid_filetypes) > -1
    ) {
      $.ajax({
        type: "POST",
        dataType: "json",
        url: listeo.ajaxurl,
        data: {
          action: "add_new_listing_ical",
          name: name,
          url: url,
          listing_id: listing_id,
          force_update: force_update,
          //'nonce': nonce
        },
        success: function (data) {
          if (data.type == "success") {
            form.find("button").removeClass("loading");
            form.find("input.import_ical_name").val("");
            form.find("input.import_ical_url").val("");
            form
              .parents(".ical-import-dialog")
              .find(".saved-icals")
              .html(data.output);
            $(".ical-import-dialog .notification")
              .removeClass("error notice")
              .addClass("success")
              .show()
              .html(data.notification);
          }

          if (data.type == "error") {
            form.find("button").removeClass("loading");

            $(".ical-import-dialog .notification")
              .removeClass("success notice")
              .addClass("error")
              .show()
              .html(data.notification);
          }
        },
      });
    } else {
      $(this).find("button").removeClass("loading");
      $("input.import_ical_url").addClass("bounce");
      window.setTimeout(function () {
        $("input.import_ical_url").removeClass("bounce");
      }, 1000);
    }
  });

  $("body").on("click", "a.ical-remove", function (e) {
    e.preventDefault();
    var $this = $(this),
      index = $(this).data("remove"),
      nonce = $(this).data("nonce");
    var listing_id = $(this).data("listing-id");
    $this.parents(".saved-icals").addClass("loading");

    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "add_remove_listing_ical",
        index: index,
        listing_id: listing_id,
        //'nonce': nonce
      },
      success: function (data) {
        if (data.type == "success") {
          $this
            .parents(".saved-icals")
            .removeClass("loading")
            .html(data.output);
        }
        $(".ical-import-dialog .notification").show().html(data.notification);
      },
    });
  });

  $("body").on("click", "a.update-all-icals", function (e) {
    e.preventDefault();
    var $this = $(this),
      listing_id = $(this).data("listing-id");
    $this.addClass("loading");
    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "refresh_listing_import_ical",
        listing_id: listing_id,
        //'nonce': nonce
      },
      success: function (data) {
        $this.removeClass("loading");
        if (data.type == "success") {
          $(".ical-import-dialog .notification")
            .removeClass("error notice")
            .addClass("success")
            .show()
            .html(data.notification);
        } else if (data.type == "error") {
          $(".ical-import-dialog .notification")
            .removeClass("success notice")
            .addClass("error")
            .show()
            .html(data.notification);
        }
      },
    });
  });

  $("#send-comment-edit-review").on("submit", function (e) {
    $("#send-comment-edit-review button").addClass("loading");
    var value = "service";
    var button = $(this);
    var content = $(this).find("textarea#comment_reply").val();
    var reply_id = $(this).find("input#reply_id").val();
    var reply_rating = $(this).find('input[type="radio"]:checked').val();

    var data = {
      action: "edit_review",
      //'post_id':  $(this).find('input#reply-post-id').val(),
      reply_id: $(this).find("input#reply_id").val(),
      content: content,
      //'nonce': nonce
    };
    $.each(critera, function (index, value) {
      data["rating_" + value] = button
        .find('input[type="radio"][name="' + value + '"]:checked')
        .val();
    });
    console.log(data);

    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: data,
      success: function (data) {
        if (data.success == true) {
          $("#send-comment-edit-review button").removeClass("loading");

          // $('#review-'+review_id+' .edit-reply')
          $(".mfp-close").trigger("click");
        } else {
          $("#send-comment-edit-review button").removeClass("loading");
        }
      },
    });
    e.preventDefault();
  });

  $("a.listeo_core-rate-review").on("click", function (e) {
    e.preventDefault();
    var $this = $(this),
      comment = $(this).data("comment"),
      nonce = $(this).data("nonce");

    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "listeo_core_rate_review",
        comment: comment,
        //'nonce': nonce
      },
      success: function (data) {
        $this.html(data.output);
      },
    });
    e.preventDefault();
  });

  // Contact Form Ajax

  $("#send-message-from-widget").on("submit", function (e) {
    $("#send-message-from-widget button")
      .addClass("loading")
      .prop("disabled", true);

    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "listeo_send_message",
        recipient: $(this).find("textarea#contact-message").data("recipient"),
        referral: $(this).find("textarea#contact-message").data("referral"),
        message: $(this).find("textarea#contact-message").val(),
        //'nonce': nonce
      },
      success: function (data) {
        if (data.type == "success") {
          $("#send-message-from-widget button").removeClass("loading");
          $("#send-message-from-widget .notification")
            .show()
            .html(data.message);
          window.setTimeout(closepopup, 3000);
          $(this).find("textarea#contact-message").val("");
        } else {
          $("#send-message-from-widget .notification")
            .removeClass("success")
            .addClass("error")
            .show()
            .html(data.message);
          $("#send-message-from-widget button")
            .removeClass("loading")
            .prop("disabled", false);
        }
      },
    });
    e.preventDefault();
  });

  function closepopup() {
    var magnificPopup = $.magnificPopup.instance;
    if (magnificPopup) {
      magnificPopup.close();
      $("#send-message-from-widget button")
        .removeClass("loading")
        .prop("disabled", false);
    }
  }

  $("#send-message-from-chat").on("submit", function (e) {
    var message = $(this).find("textarea#contact-message").val();

    if (message) {
      $(this).find("textarea#contact-message").removeClass("error");
      $(".loading").show();
      $(this).find("button").prop("disabled", true);
      $.ajax({
        type: "POST",
        dataType: "json",
        url: listeo.ajaxurl,
        data: {
          action: "listeo_send_message_chat",
          recipient: $(this).find("input#recipient").val(),
          conversation_id: $(this).find("input#conversation_id").val(),
          message: message,
          //'nonce': nonce
        },
        success: function (data) {
          if (data.type == "success") {
            $(this).addClass("success");
            refreshMessages();
            $("#send-message-from-chat textarea").val("");
            $("#send-message-from-chat button").prop("disabled", false);
          } else {
            $(this).addClass("error");
          }
        },
      });
    } else {
      $(this).find("textarea#contact-message").addClass("error");
    }
    e.preventDefault();
  });

  $(document).on("click", ".booking-message", function (e) {
    var recipient = $(this).data("recipient");
    var referral = $(this).data("booking_id");
    $("#send-message-from-widget textarea").val("");
    $("#send-message-from-widget .notification").hide();

    $("#send-message-from-widget textarea")
      .data("referral", referral)
      .data("recipient", recipient);

    $(".send-message-to-owner").trigger("click");
  });

  function refreshMessages() {
    if ($(".message-bubbles").length) {
      $.ajax({
        type: "POST",
        dataType: "json",
        url: listeo.ajaxurl,
        data: {
          action: "listeo_get_conversation",
          conversation_id: $(
            "#send-message-from-chat input#conversation_id"
          ).val(),
          //'nonce': nonce
        },
        success: function (data) {
          if (data.type == "success") {
            $(".message-bubbles").html(data.message);
          }
          $(".loading").hide();
        },
        complete: function () {
          setTimeout(refreshMessages, 4000);
        },
      });
    }
  }
  setTimeout(refreshMessages, 4000);

  if ($("#coupon_bg-uploader").length > 0) {
    /* Upload using dropzone */
    Dropzone.autoDiscover = false;

    var couponDropzone = new Dropzone("#coupon_bg-uploader", {
      url: listeo_core.upload,
      maxFiles: 1,
      maxFilesize: listeo_core.maxFilesize,
      dictDefaultMessage: listeo_core.dictDefaultMessage,
      dictFallbackMessage: listeo_core.dictFallbackMessage,
      dictFallbackText: listeo_core.dictFallbackText,
      dictFileTooBig: listeo_core.dictFileTooBig,
      dictInvalidFileType: listeo_core.dictInvalidFileType,
      dictResponseError: listeo_core.dictResponseError,
      dictCancelUpload: listeo_core.dictCancelUpload,
      dictCancelUploadConfirmation: listeo_core.dictCancelUploadConfirmation,
      dictRemoveFile: listeo_core.dictRemoveFile,
      dictMaxFilesExceeded: listeo_core.dictMaxFilesExceeded,
      acceptedFiles: "image/*",
      accept: function (file, done) {
        done();
      },
      init: function () {
        this.on("addedfile", function () {
          if (this.files[1] != null) {
            this.removeFile(this.files[0]);
          }
        });
      },

      success: function (file, response) {
        file.previewElement.classList.add("dz-success");
        //remove any blank characters and empty lines from response
        response = response.replace(/(\r\n|\n|\r)/gm, "");
        file["attachment_id"] = response; // push the id for future reference
        console.log(file["attachment_id"]);
        $("#coupon_bg-uploader-id").val(file["attachment_id"]);
      },
      error: function (file, response) {
        file.previewElement.classList.add("dz-error");
      },
      // update the following section is for removing image from library
      addRemoveLinks: true,
      removedfile: function (file) {
        var attachment_id = file["attachment_id"];
        if (attachment_id == undefined) {
          attachment_id = $("#coupon_bg-uploader-id").val();
        }
        $("#coupon_bg-uploader-id").val("");
        $.ajax({
          type: "POST",
          url: listeo_core.delete,
          data: {
            media_id: attachment_id,
          },
          success: function (result) {
            console.log(result);
          },
          error: function () {
            console.log("delete error");
          },
        });
        var _ref;
        return (_ref = file.previewElement) != null
          ? _ref.parentNode.removeChild(file.previewElement)
          : void 0;
      },
    });

    couponDropzone.on("maxfilesexceeded", function (file) {
      this.removeFile(file);
    });
    if ($(".edit-coupon-photo").attr("data-photo")) {
      var mockFile = {
        name: $(".edit-coupon-photo").attr("data-name"),
        size: $(".edit-coupon-photo").attr("data-size"),
      };
      couponDropzone.emit("addedfile", mockFile);
      couponDropzone.emit(
        "thumbnail",
        mockFile,
        $(".edit-coupon-photo").attr("data-photo")
      );
      couponDropzone.emit("complete", mockFile);
      couponDropzone.files.push(mockFile);
      // If you use the maxFiles option, make sure you adjust it to the
      // correct amount:

      couponDropzone.options.maxFiles = 1;
    }
  }

  if ($("#avatar-uploader").length > 0) {
    /* Upload using dropzone */
    Dropzone.autoDiscover = false;

    var avatarDropzone = new Dropzone("#avatar-uploader", {
      url: listeo_core.upload,
      maxFiles: 1,
      maxFilesize: listeo_core.maxFilesize,
      dictDefaultMessage: listeo_core.dictDefaultMessage,
      dictFallbackMessage: listeo_core.dictFallbackMessage,
      dictFallbackText: listeo_core.dictFallbackText,
      dictFileTooBig: listeo_core.dictFileTooBig,
      dictInvalidFileType: listeo_core.dictInvalidFileType,
      dictResponseError: listeo_core.dictResponseError,
      dictCancelUpload: listeo_core.dictCancelUpload,
      dictCancelUploadConfirmation: listeo_core.dictCancelUploadConfirmation,
      dictRemoveFile: listeo_core.dictRemoveFile,
      dictMaxFilesExceeded: listeo_core.dictMaxFilesExceeded,
      acceptedFiles: "image/jpeg,image/png,image/gif,image/jpg",
      accept: function (file, done) {
        done();
      },
      init: function () {
        this.on("addedfile", function () {
          if (this.files[1] != null) {
            this.removeFile(this.files[0]);
          }
        });
      },

      success: function (file, response) {
        file.previewElement.classList.add("dz-success");
        file["attachment_id"] = response; // push the id for future reference
        $("#avatar-uploader-id").val(file["attachment_id"]);
      },
      error: function (file, response) {
        file.previewElement.classList.add("dz-error");
        $(file.previewElement).find(".dz-error-message").text(response);
      },
      // update the following section is for removing image from library
      addRemoveLinks: true,
      removedfile: function (file) {
        var attachment_id = file["attachment_id"];
        if (attachment_id == undefined) {
          attachment_id = $("#avatar-uploader-id").val();
        }
        $("#avatar-uploader-id").val("");
        $.ajax({
          type: "POST",
          url: listeo_core.delete,
          data: {
            media_id: attachment_id,
          },
          success: function (result) {
            console.log(result);
          },
          error: function () {
            console.log("delete error");
          },
        });
        var _ref;
        return (_ref = file.previewElement) != null
          ? _ref.parentNode.removeChild(file.previewElement)
          : void 0;
      },
    });

    avatarDropzone.on("maxfilesexceeded", function (file) {
      this.removeFile(file);
    });
    if ($(".edit-profile-photo").attr("data-photo")) {
      var mockFile = {
        name: $(".edit-profile-photo").attr("data-name"),
        size: $(".edit-profile-photo").attr("data-size"),
      };
      avatarDropzone.emit("addedfile", mockFile);
      avatarDropzone.emit(
        "thumbnail",
        mockFile,
        $(".edit-profile-photo").attr("data-photo")
      );
      avatarDropzone.emit("complete", mockFile);
      avatarDropzone.files.push(mockFile);
      // If you use the maxFiles option, make sure you adjust it to the
      // correct amount:

      avatarDropzone.options.maxFiles = 1;
    }
  }

  $(
    ".dynamic #tax-listing_category,.dynamic #tax-listing_category-panel input"
  ).on("change", function (e) {
    var cat_ids = [];

    $("#tax-listing_feature-panel .checkboxes").addClass("loading");
    $("#tax-listing_feature-panel .panel-buttons").hide();
    var panel = false;
    if ($("#tax-listing_category-panel").length > 0) {
      panel = true;

      $("#tax-listing_category-panel input[type=checkbox]:checked").each(
        function () {
          cat_ids.push($(this).val());
        }
      );
    } else {
      if ($("#tax-listing_feature-panel").length > 0) {
        panel = true;
      }
      if ($(this).prop("multiple")) {
        $("#tax-listing_category :selected").each(function (i, sel) {
          cat_ids.push($(sel).val());
        });
      } else {
        cat_ids.push($(this).val());
      }
    }
    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "listeo_get_features_from_category",
        cat_ids: cat_ids,
        panel: panel,
        //'nonce': nonce
      },
      success: function (data) {
        $("#tax-listing_feature-panel .checkboxes").removeClass("loading");
        $("#tax-listing_feature-panel .checkboxes .row")
          .html(data["output"])
          .removeClass("loading");
        $("#tax-listing_feature").html(data["output"]).removeClass("loading");
        // $("#tax-listing_feature").empty().select2({
        //   data: data["data"],
        // });
        if (data["success"]) {
          $("#tax-listing_feature-panel .panel-buttons").show();
        }
      },
    });
  });
  $(".dynamic #tax-listing_category").trigger("change");
  //listeo_get_listing_types_from_categories
  $(
    ".dynamic-taxonomies #tax-listing_category,.dynamic-taxonomies #tax-listing_category-panel input"
  ).on("change", function (e) {
    var cat_ids = [];

    $(".dynamic-taxonomies #listeo-search-form_tax-service_category").hide();
    $(".dynamic-taxonomies #listeo-search-form_tax-rental_category").hide();
    $(".dynamic-taxonomies #listeo-search-form_tax-event_category").hide();
    $(
      ".dynamic-taxonomies #listeo-search-form_tax-classifieds_category"
    ).hide();
    $(
      ".dynamic-taxonomies #listeo-search-form_tax-service_category select, .dynamic-taxonomies #tax-service_category-panel select"
    ).val("");
    $(
      ".dynamic-taxonomies #listeo-search-form_tax-rental_category select, .dynamic-taxonomies #tax-rental_category-panel select"
    ).val("");
    $(
      ".dynamic-taxonomies #listeo-search-form_tax-event_category select, .dynamic-taxonomies #tax-event_category-panel select"
    ).val("");
    $(
      ".dynamic-taxonomies #listeo-search-form_tax-classifieds_category select, .dynamic-taxonomies #tax-classifieds_category-panel select"
    ).val("");
    $(".dynamic-taxonomies #tax-service_category-panel").hide();
    $(".dynamic-taxonomies #tax-rental_category-panel").hide();
    $(".dynamic-taxonomies #tax-event_category-panel").hide();
    $(".dynamic-taxonomies #tax-classifieds_category-panel").hide();
    $(".dynamic-taxonomies #tax-service_category-panel input:checkbox").prop(
      "checked",
      false
    );
    $(".dynamic-taxonomies #tax-rental_category-panel input:checkbox").prop(
      "checked",
      false
    );
    $(".dynamic-taxonomies #tax-event_category-panel input:checkbox").prop(
      "checked",
      false
    );
    $(
      ".dynamic-taxonomies #tax-classifieds_category-panel input:checkbox"
    ).prop("checked", false);

    $(
      ".dynamic-taxonomies #tax-event_category-panel input:checkbox"
    ).removeAttr("checked");
    var panel = false;
    if ($("#tax-listing_category-panel").length > 0) {
      panel = true;

      $("#tax-listing_category-panel input[type=checkbox]:checked").each(
        function () {
          cat_ids.push($(this).val());
        }
      );
    } else {
      if ($("#tax-listing_feature-panel").length > 0) {
        panel = true;
      }
      if ($(this).prop("multiple")) {
        $("#tax-listing_category :selected").each(function (i, sel) {
          cat_ids.push($(sel).val());
        });
      } else {
        cat_ids.push($(this).val());
      }
    }
    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "listeo_get_listing_types_from_categories",
        cat_ids: cat_ids,
        panel: panel,
        //'nonce': nonce
      },
      success: function (data) {
        // $('#tax-listing_feature-panel .checkboxes').removeClass('loading');
        // $('#tax-listing_feature-panel .checkboxes .row').html(data['output']).removeClass('loading');
        // $('#tax-listing_feature').html(data['output']).removeClass('loading');
        // if(data['success']){
        //   $('#tax-listing_feature-panel .panel-buttons').show();
        // }
        //
        if (data["success"]) {
          var types = data["output"];
          if (types.includes("service")) {
            $(
              ".dynamic-taxonomies #listeo-search-form_tax-service_category"
            ).show();
            $(".dynamic-taxonomies #tax-service_category-panel").css(
              "display",
              "inline-block"
            );
          }
          if (types.includes("rental")) {
            $(
              ".dynamic-taxonomies #listeo-search-form_tax-rental_category"
            ).show();
            $(".dynamic-taxonomies #tax-rental_category-panel").css(
              "display",
              "inline-block"
            );
          }
          if (types.includes("event")) {
            $(
              ".dynamic-taxonomies #listeo-search-form_tax-event_category"
            ).show();
            $(".dynamic-taxonomies #tax-event_category-panel").css(
              "display",
              "inline-block"
            );
          }
          if (types.includes("classifieds")) {
            $(
              ".dynamic-taxonomies #listeo-search-form_tax-classifieds_category"
            ).show();
            $(".dynamic-taxonomies #tax-classifieds_category-panel").css(
              "display",
              "inline-block"
            );
          }
        }
      },
    });
  });

  $(
    ".add-listing-section.dynamic-features #listing_category,.add-listing-section.dynamic-features #tax-listing_category"
  ).on("change", function (e) {
    var listing_id = $("input[name='listing_id']").val();
    if ($(this).prop("multiple")) {
      var cat_ids;
      cat_ids = $(this).val();
    } else {
      var cat_ids = [];
      cat_ids.push($(this).val());
    }

    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: {
        action: "listeo_get_features_ids_from_category",
        cat_ids: cat_ids,
        listing_id: listing_id,
        selected: selected_listing_feature,
        panel: false,
        //'nonce': nonce
      },
      success: function (data) {
        $(
          ".listeo_core-term-checklist-listing_feature,.listeo_core-term-checklist-tax-listing_feature"
        ).removeClass("loading");
        $(
          ".listeo_core-term-checklist-listing_feature,.listeo_core-term-checklist-tax-listing_feature"
        )
          .html(data["output"])
          .removeClass("loading");
      },
    });
  });

  var selected_listing_feature = [];
  if ($(".add-listing-section").length) {
    $.each(
      $("input[name='tax_input[listing_feature][]']:checked"),
      function () {
        selected_listing_feature.push($(this).val());
      }
    );

    $("select#listing_category").trigger("change");
    $("select#tax-listing_category").trigger("change");
  }

  if (
    $("body").hasClass("tax-listing_category") ||
    $("body").hasClass("post-type-archive-listing")
  ) {
    $("select#tax-listing_category").trigger("change");
    $("#tax-listing_category-panel input:checked").trigger("change");
  }
  $("#tax-listing_category-panel input:checked").trigger("change");
  // foreach
  // if($('.panel-dropdown-content .notification').length>0) {
  //   console.log($(this));
  //   $(this).find('.panel-buttons').hide();
  // }
  $(".panel-dropdown-content .notification").each(function (index) {
    $(this).parent().parent().find(".panel-buttons").hide();
  });

  // var uploadButton = {
  //   $button: $(".uploadButton-input"),
  //   $nameField: $(".uploadButton-file-name"),
  // };

  // uploadButton.$button.on("change", function () {
  //   _populateFileField($(this));
  // });

  // function _populateFileField($button) {
  //   var selectedFile = [];
  //   for (var i = 0; i < $button.get(0).files.length; ++i) {
  //     selectedFile.push($button.get(0).files[i].name + "<br>");
  //   }
  //   uploadButton.$nameField.html(selectedFile);
  // }

  // var uploadButton = {
  //   $button: $(".uploadButton-input"),
  //   $nameField: $(".uploadButton-file-name"),
  // };

  $(".uploadButton-input").on("change", function () {
    _populateFileField($(this));
  });

  function _populateFileField($button) {
    console.log($button);
    var selectedFile = [];

    for (var i = 0; i < $button.get(0).files.length; ++i) {
      selectedFile.push($button.get(0).files[i].name + "<br>");
    }
    console.log(selectedFile);
    $($button).siblings(".uploadButton-file-name").html(selectedFile);
  }

  /*----------------------------------------------------*/
  /* Time Slots
  /*----------------------------------------------------*/

  // Add validation parts
  $(".day-slots").each(function () {
    var daySlots = $(this);

    daySlots.find(".add-slot-btn").on("click", function (e) {
      e.preventDefault();

      var slotTime_Start = daySlots
        .find(".add-slot-inputs input.time-slot-start")
        .val();
      var slotTimePM_AM_Start = daySlots
        .find(".add-slot-inputs select.time-slot-start")
        .val();

      var slotTime_End = daySlots
        .find(".add-slot-inputs input.time-slot-end")
        .val();
      var slotTimePM_AM_End = daySlots
        .find(".add-slot-inputs select.time-slot-end")
        .val();

      // Checks if input values are not blank
      if (slotTime_Start.length > 0 && slotTime_End.length > 0) {
        // New Time Slot Div
        var newTimeSlot = daySlots
          .find(".single-slot.cloned")
          .clone(true)
          .addClass("slot-animation")
          .removeClass("cloned");

        setTimeout(function () {
          newTimeSlot.removeClass("slot-animation");
        }, 300);

        newTimeSlot.find(".plusminus input").val("1");

        // Plus - Minus Init
        newTimeSlot.find(".plusminus").numberPicker();

        // Check if there's am/pm dropdown
        var $twelve_hr = $(".add-slot-inputs select.twelve-hr");

        if ($twelve_hr.length) {
          newTimeSlot
            .find(".single-slot-time")
            .html(
              slotTime_Start +
                " " +
                '<i class="am-pm">' +
                slotTimePM_AM_Start +
                "</i>" +
                " - " +
                slotTime_End +
                " " +
                '<i class="am-pm">' +
                slotTimePM_AM_End +
                "</i>"
            );
        } else {
          newTimeSlot
            .find(".single-slot-time")
            .html("" + slotTime_Start + " - " + slotTime_End);
        }

        // Appending new slot
        newTimeSlot.appendTo(daySlots.find(".slots-container"));

        // Refresh sotrable script
        $(".slots-container").sortable("refresh");
      }

      // Validation Error
      else {
        daySlots.find(".add-slot").addClass("add-slot-shake-error");
        setTimeout(function () {
          daySlots.find(".add-slot").removeClass("add-slot-shake-error");
        }, 600);
      }
    });

    // Removing "no slots" message
    function hideSlotInfo() {
      var slotCount = daySlots.find(".slots-container").children().length;
      if (slotCount < 1) {
        daySlots
          .find(".no-slots")
          .addClass("no-slots-fadein")
          .removeClass("no-slots-fadeout");
      }
    }
    hideSlotInfo();

    // Removing Slot
    daySlots.find(".remove-slot").bind("click", function (e) {
      e.preventDefault();
      $(this)
        .closest(".single-slot")
        .animate({ height: 0, opacity: 0 }, "fast", function () {
          $(this).remove();
        });

      // Removing "no slots" message
      setTimeout(function () {
        hideSlotInfo();
      }, 400);
    });

    // Showing "no slots" message
    daySlots.find(".add-slot-btn").on("click", function (e) {
      e.preventDefault();
      var slotCount = daySlots.find(".slots-container").children().length;
      if (slotCount >= 1) {
        daySlots
          .find(".no-slots")
          .removeClass("no-slots-fadein")
          .addClass("no-slots-fadeout");
      }
    });
  });

  // Sotrable Script
  $(".slots-container").sortable();

  // 24 hour clock type switcher
  if ($(".availability-slots").attr("data-clock-type") == "24hr") {
    $(".availability-slots").addClass("twenty-four-clock");
    $(".availability-slots").find('input[type="time"]').attr({ max: "24:00" });
  }

  // Switcher
  $(".add-listing-section").each(function () {
    var switcherSection = $(this);
    var switcherInput = $(this).find(".switch input");

    if (switcherInput.is(":checked")) {
      $(switcherSection).addClass("switcher-on");
    }

    switcherInput.change(function () {
      if (this.checked === true) {
        $(switcherSection).addClass("switcher-on");

        if (switcherInput.attr("id") == "_booking_status") {
          $(
            ".add-listing-section.slots,.add-listing-section.basic_prices,.add-listing-section.availability_calendar"
          ).show();
        }
      } else {
        $(switcherSection).removeClass("switcher-on");
        if (switcherInput.attr("id") == "_booking_status") {
          $(
            ".add-listing-section.slots,.add-listing-section.basic_prices,.add-listing-section.availability_calendar"
          ).hide();
        }
      }
    });
  });

  if ($("#_booking_status").is(":checked")) {
    $(
      ".add-listing-section.slots,.add-listing-section.basic_prices,.add-listing-section.availability_calendar"
    ).show();
  } else {
    $(
      ".add-listing-section.slots,.add-listing-section.basic_prices,.add-listing-section.availability_calendar"
    ).hide();
  }

  /*----------------------------------------------------*/
  /*  Booking Sticky Footer
  /*----------------------------------------------------*/
  $(".booking-sticky-footer a.button").on("click", function (e) {
    var $anchor = $(this);
    $("html, body").animate(
      { scrollTop: $($anchor.attr("href")).offset().top - 100 },
      1000
    );
  });

  /*----------------------------------------------------*/
  /* Opening Hours
  /*----------------------------------------------------*/

  $("body").on("click", ".opening-day-remove", function (e) {
    e.preventDefault();
    var div_class = $(this).data("remove");
    $(this).parent().parent().remove();
    $("div." + div_class).remove();
  });

  $("body").on("click", ".opening-day-add-hours", function (e) {
    e.preventDefault();
    var dayname = $(this).data("dayname");
    var count = $(this).parents(".opening-day").find(".row").length;
    var id = $(this).data("id");
    var i = $(this).parents(".opening-day").find(".row").length;

    var newElem = $(
      "" +
        '<div class="row"><div class="col-md-2 opening-day-tools"><a class="opening-day-remove button" data-remove="' +
        dayname +
        "-opening-hours-row" +
        count +
        '" href="#">' +
        listeo_core.remove +
        "</a>" +
        '</div><div class="col-md-5 ' +
        dayname +
        "-opening-hours-row" +
        count +
        '">' +
        '<input type="text" class="listeo-flatpickr" name="_' +
        id +
        '_opening_hour[]" placeholder="' +
        listeo_core.opening_time +
        '" value=""></div>' +
        '<div class="col-md-5 ' +
        dayname +
        "-opening-hours-row" +
        count +
        '" >' +
        '<input type="text" class="listeo-flatpickr" name="_' +
        id +
        '_closing_hour[]" placeholder="' +
        listeo_core.closing_time +
        '" value="">' +
        "</div></div>"
    );

    newElem.appendTo($(this).parents(".opening-day"));
    var time24 = false;

    if (listeo_core.clockformat) {
      time24 = true;
    }
    $(this)
      .parents(".opening-day")
      .find(".row:last .listeo-flatpickr")
      .flatpickr({
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: time24,
        disableMobile: true,
      });
  });

  $("input[type=radio][name=user_role]").change(function () {
    $("#listeo-core-registration-fields").html("");
    if (
      this.value == "owner" ||
      this.value == "vendor" ||
      this.value == "seller"
    ) {
      $("#listeo-core-registration-fields").html(
        $(
          ".listeo-custom-fields-wrapper #listeo-core-registration-owner-fields"
        ).html()
      );
    } else {
      $("#listeo-core-registration-fields").html(
        $(
          ".listeo-custom-fields-wrapper #listeo-core-registration-guest-fields"
        ).html()
      );
    }
    //$('.select2-single').select2("destroy");

    $(".select2-single").select2({
      dropdownPosition: "below",

      minimumResultsForSearch: 20,
      width: "100%",
      placeholder: $(this).data("placeholder"),
      formatNoMatches: listeo_core.no_results_text,
    });
  });

  /*----------------------------------------------------*/
  /* Pricing List
  /*----------------------------------------------------*/
  function pricingCoverSwitcher() {
    var readURL = function (input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        var input_obj = $(input);

        reader.onload = function (e) {
          $(input).parent().find(".cover-pic").attr("src", e.target.result);
          $(input).parent().find(".menu-cover-id").val("");
        };

        reader.readAsDataURL(input.files[0]);
      }
    };
    $("#pricing-list-container").on("change", ".file-upload", function (e) {
      readURL(this);
    });
    $("#pricing-list-container").on("click", ".upload-button", function (e) {
      $(this).next(".file-upload").click();
    });
  }
  pricingCoverSwitcher();

  $(".remove-cover").on("click", function (e) {
    e.preventDefault();
    $(this).next(".menu-cover-id").val("");
    $(this)
      .parent()
      .find(".cover-pic")
      .attr("src", listeo.theme_url + "/images/pricing-cover-placeholder.png");
  });

  function newMenuItem() {
    // var newElem = $('tr.pricing-list-item:not(.pricing-submenu)').last().clone(true);
    // console.log(newElem.length);
    // if(!newElem){
    var extra_services = listeo_core.extra_services_options_type;

    //check if extra_services is an array
    var select_extra_service_types = "";
    if (typeof extra_services === "string") {
      extra_services = extra_services.split(",");
    }

    //  '<div class="fm-input pricing-bookable-options">' +
    //   '<select class="select2-single" name="_menu[0][menu_elements][0][bookable_options]" id="">' +
    //   select_extra_service_types +
    //   "</select>" +
    //   '<div class="checkboxes in-row pricing-quanity-buttons">' +
    //   '<input type="checkbox"  class="input-checkbox" name="_menu[0][menu_elements][0][bookable_quantity]" id="_menu[0][menu_elements][0][bookable_quantity]" />' +
    //   '<label for="_menu[0][menu_elements][0][bookable_quantity]">' +
    //   listeo_core.quantitybuttons +
    //   "</label>" +
    //   '<input type="number" class="bookable_quantity_max" step="1" name="_menu[0][menu_elements][0][bookable_quantity_max]" placeholder="' +
    //   listeo_core.bookable_quantity_max +
    //   '" />"' +
    //   "</div>" +
    // check if extra_services size is less then 4
    if (extra_services.length < 4) {
      var select_extra_service_types =
        '<div class="fm-input pricing-bookable-options">' +
        '<select class="select2-single" name="_menu[0][menu_elements][0][bookable_options]" id="">';
      if (!extra_services.includes("onetime")) {
        select_extra_service_types +=
          '<option value="onetime">' + listeo_core.onetimefee + "</option>";
      }
      // check if byguest is in array extra_service

      if (!extra_services.includes("byguest")) {
        select_extra_service_types +=
          '<option value="byguest">' + listeo_core.multiguest + "</option>";
      }
      if (!extra_services.includes("bydays")) {
        select_extra_service_types +=
          '<option value="bydays">' + listeo_core.multidays + "</option>";
      }
      if (!extra_services.includes("byguestanddays")) {
        select_extra_service_types +=
          '<option value="byguestanddays">' +
          listeo_core.multiguestdays +
          "</option>";
      }
      select_extra_service_types +=
        "</select>" +
        '<div class="checkboxes in-row pricing-quanity-buttons">' +
        '<input type="checkbox"  class="input-checkbox" name="_menu[0][menu_elements][0][bookable_quantity]" id="_menu[0][menu_elements][0][bookable_quantity]" />' +
        '<label for="_menu[0][menu_elements][0][bookable_quantity]">' +
        listeo_core.quantitybuttons +
        "</label>" +
        '<input type="number" class="bookable_quantity_max" step="1" name="_menu[0][menu_elements][0][bookable_quantity_max]" placeholder="' +
        listeo_core.bookable_quantity_max +
        '" />"' +
        "</div>";
    }

    var newElem = $(
      "" +
        '<tr class="pricing-list-item pattern" data-iterator="0">' +
        "<td>" +
        '<div class="fm-move"><i class="sl sl-icon-cursor-move"></i></div>' +
        '<div class="fm-input pricing-cover"><div class="pricing-cover-wrapper" data-tippy-placement="bottom" title="Change Avatar"><img class="cover-pic" src="' +
        listeo.theme_url +
        '/images/pricing-cover-placeholder.png" alt=""><div class="upload-button"></div><input class="file-upload" type="file" accept="image/*" name="_menu[0][menu_elements][0][cover]"></div></div>' +
        '<div class="fm-input pricing-name"><input type="text" placeholder="' +
        listeo_core.menu_title +
        '" name="_menu[0][menu_elements][0][name]" /></div>' +
        '<div class="fm-input pricing-ingredients"><input type="text" placeholder="' +
        listeo_core.menu_desc +
        '" name="_menu[0][menu_elements][0][description]"/></div>' +
        '<div class="fm-input pricing-price">' +
        '<i class="data-unit">' +
        listeo_core.currency +
        "</i>" +
        '<input type="number" step="0.01" placeholder="' +
        listeo_core.menu_price +
        '" name="_menu[0][menu_elements][0][price]" /></div>' +
        '<div class="fm-input pricing-bookable"><div class="switcher-tip" data-tip-content="' +
        listeo_core.pricingTooltip +
        '">' +
        '<input type="checkbox" class="input-checkbox switch_1" value="on" name="_menu[0][menu_elements][0][bookable]" /></div></div>' +
        select_extra_service_types +
        "</div>" +
        '<div class="fm-close"><a class="delete" href="#"><i class="fa fa-remove"></i></a></div>' +
        "</td>" +
        "</tr>"
    );
    //}

    newElem.find("input").val("");

    var prev_category_number = $(".pricing-submenu").last().data("number");
    var prev_data_iterator = $("tr.pricing-list-item:not(.pricing-submenu)")
      .last()
      .data("iterator");

    if (prev_category_number == undefined) {
      prev_category_number = 0;
    }

    var next_data_iterator = prev_data_iterator + 1;

    var last_table_el = $("tr.pricing-list-item").last();

    newElem.find("input").each(function () {
      // replace 1st number with current category title number

      this.name = this.name.replace(
        /\[\d+\]/,
        "[" + prev_category_number + "]"
      );
      this.id = this.id.replace(/\[\d+\]/, "[" + prev_category_number + "]");
      //replace 2nd number / if it's new category start from 0, if not iterate
      if (last_table_el.hasClass("pricing-submenu")) {
        next_data_iterator = 0;
        // replace 2nd number
        this.name = replaceLast(
          this.name,
          "[0]",
          "[" + next_data_iterator + "]"
        );
        this.id = replaceLast(this.id, "[0]", "[" + next_data_iterator + "]");
      } else {
        // replace 2nd number
        this.name = replaceLast(
          this.name,
          "[0]",
          "[" + next_data_iterator + "]"
        );
        this.id = replaceLast(this.id, "[0]", "[" + next_data_iterator + "]");
      }
    });
    newElem.find("select").each(function () {
      // replace 1st number with current category title number

      this.name = this.name.replace(
        /\[\d+\]/,
        "[" + prev_category_number + "]"
      );
      this.id = this.id.replace(/\[\d+\]/, "[" + prev_category_number + "]");
      //replace 2nd number / if it's new category start from 0, if not iterate
      if (last_table_el.hasClass("pricing-submenu")) {
        next_data_iterator = 0;
        // replace 2nd number
        this.name = replaceLast(
          this.name,
          "[0]",
          "[" + next_data_iterator + "]"
        );
        this.id = replaceLast(this.id, "[0]", "[" + next_data_iterator + "]");
      } else {
        // replace 2nd number
        this.name = replaceLast(
          this.name,
          "[0]",
          "[" + next_data_iterator + "]"
        );
        this.id = replaceLast(this.id, "[0]", "[" + next_data_iterator + "]");
      }
    });

    newElem.find("label").each(function () {
      //replace 1st number with current category title number
      this.htmlFor = this.htmlFor.replace(
        /\[\d+\]/,
        "[" + prev_category_number + "]"
      );
      //console.log(this.htmlFor);

      //replace 2nd number / if it's new category start from 0, if not iterate
      if (last_table_el.hasClass("pricing-submenu")) {
        next_data_iterator = 0;
        // replace 2nd number
        this.htmlFor = replaceLast(
          this.htmlFor,
          "[0]",
          "[" + next_data_iterator + "]"
        );
      } else {
        // replace 2nd number
        this.htmlFor = replaceLast(
          this.htmlFor,
          "[0]",
          "[" + next_data_iterator + "]"
        );
      }
    });
    //console.log(newElem);

    newElem
      .appendTo("table#pricing-list-container")
      .data("iterator", next_data_iterator)
      .find("select")
      .trigger("chosen:updated");

    $("#pricing-list-container").data("iterator", next_data_iterator);
  }

  var test = "_menu[0][menu_elements][0][bookable_quantity]";
  // console.log(test);
  // console.log(test.search(/\[\d+\]/));

  function replaceLast(string, search, replace) {
    // find the index of last time word was used
    var n = string.lastIndexOf(search);

    // slice the string in 2, one from the start to the lastIndexOf
    // and then replace the word in the rest
    return string.slice(0, n) + string.slice(n).replace(search, replace);
  }

  if ($("table#pricing-list-container").is("*")) {
    $(".add-pricing-list-item").on("click", function (e) {
      e.preventDefault();
      newMenuItem();
    });

    // remove ingredient
    $(document).on("click", "#pricing-list-container .delete", function (e) {
      e.preventDefault();
      $(this).parent().parent().remove();
    });

    // add submenu
    $(".add-pricing-submenu").on("click", function (e) {
      e.preventDefault();
      var i = $(".pricing-submenu").length;

      var newElem = $(
        "" +
          '<tr class="pricing-list-item pricing-submenu" data-number="' +
          i +
          '">' +
          "<td>" +
          '<div class="fm-move"><i class="sl sl-icon-cursor-move"></i></div>' +
          '<div class="fm-input"><input name="_menu[' +
          i +
          '][menu_title]" type="text" placeholder="' +
          listeo_core.category_title +
          '" /></div>' +
          '<div class="fm-close"><a class="delete" href="#"><i class="fa fa-remove"></i></a></div>' +
          "</td>" +
          "</tr>"
      );

      newElem.appendTo("table#pricing-list-container");
    });

    $("table#pricing-list-container tbody").sortable({
      forcePlaceholderSize: true,
      forceHelperSize: false,
      placeholder: "sortableHelper",
      zIndex: 999990,
      opacity: 0.6,
      tolerance: "pointer",
      start: function (e, ui) {
        ui.placeholder.height(ui.helper.outerHeight());
      },
      stop: function (event, ui) {
        updateNames($(this));
      },
    });

    $(window).on("load resize", function () {
      var winWidth = $(window).width();
      if (winWidth < 992) {
        $("table#pricing-list-container tbody").sortable("disable");
      } else if (winWidth > 992) {
        $("table#pricing-list-container tbody").sortable("enable");
      }
    });
  }

  //updates list name numbers
  function updateNames($list) {
    var cat_i = 0;
    var subcat_i = 0;
    $list.find("tr").each(function () {
      var prev_data_iterator = $(this).data("iterator");

      //category
      if ($(this).hasClass("pricing-submenu")) {
        var cat_input = $(this).find("input");
        cat_input.each(function () {
          this.name = this.name.replace(/(\[\d\])/, "[" + cat_i + "]");
        });
        var cat_select = $(this).find("select");

        cat_select.each(function () {
          this.name = this.name.replace(/(\[\d\])/, "[" + cat_i + "]");
        });
        $(this).data("number", cat_i);
      } else {
        var prev_category_number = $(this)
          .prevAll(".pricing-submenu")
          .first()
          .data("number");
        if (typeof prev_category_number === "undefined") {
          prev_category_number = 0;
        }
        var subcat_input = $(this).find("input");

        subcat_input.each(function () {
          // replace 1st number with current category title number
          this.name = this.name.replace(
            /\[\d+\]/,
            "[" + prev_category_number + "]"
          );
          this.name = replaceLast(
            this.name,
            "[" + prev_data_iterator + "]",
            "[" + subcat_i + "]"
          );
        });
        var subcat_select = $(this).find("select");

        subcat_select.each(function () {
          // replace 1st number with current category title number
          this.name = this.name.replace(
            /\[\d+\]/,
            "[" + prev_category_number + "]"
          );
          this.name = replaceLast(
            this.name,
            "[" + prev_data_iterator + "]",
            "[" + subcat_i + "]"
          );
        });
        $(this).data("iterator", subcat_i);
        subcat_i++;
      }

      if ($(this).hasClass("pricing-submenu")) {
        cat_i++;
        subcat_i = 0;
      }
      // $inp.each(function () {
      //     this.name = this.name.replace(/(\[\d\])/, '[' + idx + ']');
      // })
    });
  }

  // Unit character
  var fieldUnit = $(".pricing-price").children("input").attr("data-unit");
  $(".pricing-price")
    .children("input")
    .before('<i class="data-unit">' + fieldUnit + "</i>");

  // Unit character


  if (
    $("body").hasClass("page-template-template-home-search-splash") ||
    $("body").hasClass("page-template-template-home-search") ||
    $("body").hasClass("page-template-template-split-map")
  ) {
    var open_cal = "right";
  } else {
    var open_cal = "left";
  }

  $(".add-repeatable-list-item").on("click", function (e) {
    e.preventDefault();
    newRepeatableItem($(this));
  });

  // remove ingredient
  $(document).on("click", "#repeatable-list-container .delete", function (e) {
    e.preventDefault();
    $(this).parent().parent().remove();
  });


  function newRepeatableItem(el) {
    var newElem = el.parent().find(".repeatable-list-item").last().clone(true);
    newElem.find("input").val("");

    var prev_data_iterator = el
      .parent()
      .find(".repeatable-list-item")
      .last()
      .data("iterator");

    var next_data_iterator = prev_data_iterator + 1;

    newElem.find("input").each(function () {
      // replace 1st number with current category title number

      this.name = this.name.replace(/\[\d+\]/, "[" + next_data_iterator + "]");
      this.id = this.id.replace(/\[\d+\]/, "[" + next_data_iterator + "]");
    });
    newElem.find("select").each(function () {
      this.name = this.name.replace(/\[\d+\]/, "[" + next_data_iterator + "]");
      this.id = this.id.replace(/\[\d+\]/, "[" + next_data_iterator + "]");
    });
    newElem
      .appendTo("#repeatable-list-container")
      .removeClass("pattern")
      .data("iterator", next_data_iterator);

      
  }

  // loop all .fm-input and check if it has data-unit attribute
  $(".repeatable-list-item .fm-input").each(function () {
    var repeatableFieldUnit = $(this).children("input").data("unit");
    if (repeatableFieldUnit)
      $(this)
        .children("input")
        .before('<i class="data-unit">' + repeatableFieldUnit + "</i>");
  });


  // var repeatableFieldUnit = $(".repeatable-list-item .fm-input input").data("unit");
  // console.log($(".repeatable-list-item .fm-input input").data("unit"));
  // if (repeatableFieldUnit)
  //   $(".repeatable-list-item .fm-input")
  //     .children("input")
  //     .before('<i class="data-unit">' + repeatableFieldUnit + "</i>");

  $(".date_range").daterangepicker({
    opens: open_cal,
    // checking attribute listing type and set type of calendar
    autoUpdateInput: false,

    minDate: moment().subtract(0, "days"),
    locale: {
      format: wordpress_date_format.date,
      firstDay: parseInt(wordpress_date_format.day),
      applyLabel: listeo_core.applyLabel,
      cancelLabel: listeo_core.clearLabel,
      fromLabel: listeo_core.fromLabel,
      toLabel: listeo_core.toLabel,
      customRangeLabel: listeo_core.customRangeLabel,
      daysOfWeek: [
        listeo_core.day_short_su,
        listeo_core.day_short_mo,
        listeo_core.day_short_tu,
        listeo_core.day_short_we,
        listeo_core.day_short_th,
        listeo_core.day_short_fr,
        listeo_core.day_short_sa,
      ],
      monthNames: [
        listeo_core.january,
        listeo_core.february,
        listeo_core.march,
        listeo_core.april,
        listeo_core.may,
        listeo_core.june,
        listeo_core.july,
        listeo_core.august,
        listeo_core.september,
        listeo_core.october,
        listeo_core.november,
        listeo_core.december,
      ],
    },
  });

  $(".date_range").on("apply.daterangepicker", function (ev, picker) {
    $("input[name=_listing_type]").prop("disabled", false);
    $(this)
      .val(
        picker.startDate.format(wordpress_date_format.date) +
          " - " +
          picker.endDate.format(wordpress_date_format.date)
      )
      .trigger("change");
    Cookies.set(
      "listeo_rental_startdate",
      picker.startDate.format(wordpress_date_format.date)
    );
    Cookies.set(
      "listeo_rental_enddate",
      picker.endDate.format(wordpress_date_format.date)
    );
  });

  $(".date_range").on("cancel.daterangepicker", function (ev, picker) {
    $("input[name=_listing_type]").prop("disabled", true);
    $(this).val("").trigger("change");
  });

  $(".date_range").on("show.daterangepicker", function (ev, picker) {
    $(".daterangepicker").addClass(
      "calendar-visible calendar-animated bordered-alt-style"
    );
    $(".daterangepicker").removeClass("calendar-hidden");
    $("input[name=_listing_type]").prop("disabled", false);
  });
  $(".date_range").on("hide.daterangepicker", function (ev, picker) {
    $(".daterangepicker").removeClass("calendar-visible");
    $(".daterangepicker").addClass("calendar-hidden");
  });

  $("input.slot-time-input")
    .keydown(function (e) {
      if (e.ctrlKey || e.metaKey) {
        return true;
      }

      if (e.which >= 37 && e.which <= 40) {
        return true;
      }

      if (e.which !== 8 && e.which !== 0 && e.key.match(/[^:0-9]/)) {
        return false;
      }
    })
    .keyup(function (e) {
      var $this = $(this);

      if (
        e.ctrlKey ||
        e.metaKey ||
        e.which === 8 ||
        e.which === 0 ||
        (e.which >= 37 && e.which <= 40)
      ) {
        return true;
      }

      var ss = parseInt(this.selectionStart);

      var v = $this.val();
      var t = v.replace(/[^0-9]/g, "");
      if ($(".availability-slots").attr("data-clock-type") == "24hr") {
        var h = Math.max(0, Math.min(24, parseInt(t.substr(0, 2))));
      } else {
        var h = Math.max(0, Math.min(12, parseInt(t.substr(0, 2))));
      }
      var m = Math.max(0, Math.min(59, parseInt(t.substr(2))));

      if (t.length < 3) {
        m = "";
      }

      var r;

      if (v.length === 2) {
        r = String("0" + h).substr(String(h).length - 1) + ":";
        ss++;
      } else if (v.length >= 3 && v.length < 5) {
        r = String("0" + h).substr(String(h).length - 1) + ":" + m;
        ss++;
      } else if (v.length === 5) {
        r =
          String("0" + h).substr(String(h).length - 1) +
          ":" +
          String("0" + m).substr(String(m).length - 1);
      }

      if (r && r !== $this.val()) {
        $this.val(r);
        this.selectionStart = this.selectionEnd = ss;
      }
    })
    .blur(function (e) {
      var $this = $(this);

      var v = $this.val();
      var t = v.replace(/[^0-9]/g, "");
      var h = Math.max(0, Math.min(23, parseInt(t.substr(0, 2))));
      var m = Math.max(0, Math.min(59, parseInt(t.substr(2)))) || 0;
      var r = "";

      if (!isNaN(h)) {
        r =
          String("0" + h).substr(String(h).length - 1) +
          ":" +
          String("0" + m).substr(String(m).length - 1);
      }

      $this.val(r);
    });

  $(document.body).on("click", ".remove-uploaded-file", function () {
    $(this).closest(".job-manager-uploaded-file").remove();
    $(this).closest(".listeo-uploaded-file").remove();

    return false;
  });

  //select export ical
  //
  $("input.listeo-export-ical-input").blur(function () {
    if ($(this).attr("data-selected-all")) {
      //Remove atribute to allow select all again on focus
      $(this).removeAttr("data-selected-all");
    }
  });

  $("input.listeo-export-ical-input").click(function () {
    if (!$(this).attr("data-selected-all")) {
      try {
        $(this).selectionStart = 0;
        $(this).selectionEnd = $(this).value.length + 1;
        //add atribute allowing normal selecting post focus
        $(this).attr("data-selected-all", true);
      } catch (err) {
        $(this).select();
        //add atribute allowing normal selecting post focus
        $(this).attr("data-selected-all", true);
      }
    }
  });

  function updateDashboardChart(params) {
    console.log($("#chart-date-range").data("daterangepicker"));
    var startDataSql = moment(
      $("#chart-date-range").data("daterangepicker").startDate,
      ["MM/DD/YYYY"]
    ).format("YYYY-MM-DD");

    var endDataSql = moment(
      $("#chart-date-range").data("daterangepicker").endDate,
      ["MM/DD/YYYY"]
    ).format("YYYY-MM-DD");

    var listing_id = $("#listing_id").val();
    var stat_type = $("#stat_type").val();

    var ajax_data = {
      action: "listeo_chart_refresh",
      date_start: startDataSql,
      date_end: endDataSql,
      listing: listing_id,
      stat_type: stat_type,

      //'nonce': nonce
    };

    $.ajax({
      type: "POST",
      dataType: "json",
      url: listeo.ajaxurl,
      data: ajax_data,

      success: function (data) {
        // loader clas

        let labels = new Array();
        Object.keys(data.labels).forEach((key) => {
          labels.push(data.labels[key]);
        });
        chart.data.labels = labels;

        let postdata = new Array();
        Object.keys(data.data).forEach((key) => {
          postdata.push(data.data[key]);
        });
        console.log(postdata);
        chart.data.datasets = postdata;

        chart.update();
      },
    });
  }

  if ($("#chart-date-range").length) {
    var start = moment().subtract(6, "days");
    var end = moment();

    function cb(start, end) {
      $("#chart-date-range span").html(
        start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
      );
    }

    var ranges = new Object();
    ranges[listeo_core.today] = [moment().subtract(1, "days"), moment()];
    ranges[listeo_core.yesterday] = [
      moment().subtract(1, "days"),
      moment().subtract(1, "days"),
    ];
    ranges[listeo_core.last_7_days] = [moment().subtract(6, "days"), moment()];
    ranges[listeo_core.last_30_days] = [
      moment().subtract(29, "days"),
      moment(),
    ];
    ranges[listeo_core.this_month] = [
      moment().startOf("month"),
      moment().endOf("month"),
    ];
    ranges[listeo_core.last_month] = [
      moment().subtract(1, "month").startOf("month"),
      moment().subtract(1, "month").endOf("month"),
    ];

    cb(start, end);

    // $("#chart-date-range-enabler").on("click", function (e) {
    //   e.preventDefault();
    //   $(this).hide();
    //   cb(start, end);
    $("#chart-date-range")
      .show()
      .daterangepicker(
        {
          opens: "left",
          autoUpdateInput: false,
          alwaysShowCalendars: true,
          startDate: start,
          endDate: end,
          ranges: ranges,
          locale: {
            format: wordpress_date_format.date,
            firstDay: parseInt(wordpress_date_format.day),
            applyLabel: listeo_core.applyLabel,
            cancelLabel: listeo_core.cancelLabel,
            fromLabel: listeo_core.fromLabel,
            toLabel: listeo_core.toLabel,
            customRangeLabel: listeo_core.customRangeLabel,
            daysOfWeek: [
              listeo_core.day_short_su,
              listeo_core.day_short_mo,
              listeo_core.day_short_tu,
              listeo_core.day_short_we,
              listeo_core.day_short_th,
              listeo_core.day_short_fr,
              listeo_core.day_short_sa,
            ],
            monthNames: [
              listeo_core.january,
              listeo_core.february,
              listeo_core.march,
              listeo_core.april,
              listeo_core.may,
              listeo_core.june,
              listeo_core.july,
              listeo_core.august,
              listeo_core.september,
              listeo_core.october,
              listeo_core.november,
              listeo_core.december,
            ],
          },
        },
        cb
      );

    cb(start, end);
    // });

    // Calendar animation and visual settings
    $("#chart-date-range").on("show.daterangepicker", function (ev, picker) {
      $(".daterangepicker").addClass(
        "calendar-visible calendar-animated bordered-style"
      );
      $(".daterangepicker").removeClass("calendar-hidden");
    });
    $("#chart-date-range").on("hide.daterangepicker", function (ev, picker) {
      $(".daterangepicker").removeClass("calendar-visible");
      $(".daterangepicker").addClass("calendar-hidden");
    });
  }

  // hooks for get bookings into view
  $("#chart-date-range").on("apply.daterangepicker", function (e) {
    updateDashboardChart();
  });

  $(".dashboard-chart-full #listing_id").on("change", function (e) {
    updateDashboardChart();
  });
  $(".dashboard-chart-full #stat_type").on("change", function (e) {
    updateDashboardChart();
  });

  // ------------------ End Document ------------------ //
});

})(this.jQuery);
/**/;
// source --> https://prontosocialchef.it/wp-content/plugins/listeo-core/assets/js/bookings.js?ver=1.8.17 
/* ----------------- Start Document ----------------- */
(function($){
"use strict";

$(document).ready(function(){

	var inputClicked = false;
/*----------------------------------------------------*/
	/*  Booking widget and confirmation form
	/*----------------------------------------------------*/
	$('a.booking-confirmation-btn').on('click', function(e){

		e.preventDefault();
		var bookingForm = $('#booking-confirmation');
		if (bookingForm[0].checkValidity()) {
			var button = $(this);
			button.addClass('loading');
			$('#booking-confirmation').submit();
		}
		
	});

	$(document).bind('change', function(e){
		if( $(e.target).is(':invalid') ){
			$(e.target).parent().addClass('invalid');
		} else {
			$(e.target).parent().removeClass('invalid');
		}
	});

	$('#listeo-coupon-link').on('click', function(e){
		e.preventDefault();
		$('.coupon-form').toggle();
	});

	function validate_coupon(listing_id,price) {

		var current_codes = $('#coupon_code').val();
		if(current_codes){
			var codes = current_codes.split(',');
			$.each(codes, function(index, item) {
				console.log(item);
			    var ajax_data = {
					'listing_id' : 	listing_id,
					'coupon' : 	item,
					'coupons' : codes,
					'price' : 	price,
					'action' : 'listeo_validate_coupon'	
				};
				$.ajax({
		            type: 'POST', 
		            dataType: 'json',
					url: listeo.ajaxurl,
					data: ajax_data,
					
		            success: function(data){
						
						if(data.success){
					
							
							
						} else {

							
							$('#coupon-widget-wrapper-output div.error').html(data.message).show();
							$('#coupon-widget-wrapper-applied-coupons span[data-coupon="'+item+'"] i').trigger('click');
							$('#apply_new_coupon').val('');
							$("#coupon-widget-wrapper-output .error").delay(3500).hide(500);
						
						}
						$('a.listeo-booking-widget-apply_new_coupon').removeClass('active');
		            }
		        });
			});
		}
		
			

	}

	// Apply new coupon
	$('a.listeo-booking-widget-apply_new_coupon').on('click', function(e){
		
		e.preventDefault();
		$(this).addClass('active');
		$('#coupon-widget-wrapper-output div').hide();
		
		var ajax_data = {
			'listing_id' : 	$('#listing_id').val(),
			'coupon' : 	$('#apply_new_coupon').val(),
			'price' : 	$('.booking-estimated-cost').data('price'),
			'action' : 'listeo_validate_coupon'	
		};

		//check if it was already addd
		
		var current_codes = $('#coupon_code').val();
		var result = current_codes.split(',');
		var arraycontainscoupon = (result.indexOf($('#apply_new_coupon').val()) > -1);
		
		$('#coupon-widget-wrapper-output div').hide();
		if(arraycontainscoupon) {
			$(this).removeClass('active');
			$('input#apply_new_coupon').removeClass('bounce').addClass('bounce');
			return;			
		}
		$.ajax({
            type: 'POST', 
            dataType: 'json',
			url: listeo.ajaxurl,
			data: ajax_data,
			
            success: function(data){
				
				if(data.success){
			
					if(current_codes.length>0){
						$('#coupon_code').val(current_codes + ',' + data.coupon);	
					} else {
						$('#coupon_code').val(data.coupon);	
					}
					$('#apply_new_coupon').val('');
					$('#coupon-widget-wrapper-applied-coupons').append("<span data-coupon="+data.coupon+">"+data.coupon+"<i class='fa fa-times'></i></span>")
					$('#coupon-widget-wrapper-output .success').show();
					if($('#booking-confirmation-summary').length>0){
						calculate_booking_form_price();
					} else {
						if($("#form-booking").hasClass('form-booking-event')){
							calculate_price();
						} else {
							check_booking();	
						}
						
					}
					$("#coupon-widget-wrapper-output .success").delay(3500).hide(500);
					
				} else {

					$('input#apply_new_coupon').removeClass('bounce').addClass('bounce');
					$('#coupon-widget-wrapper-output div.error').html(data.message).show();
					
					$('#apply_new_coupon').val('');
					$("#coupon-widget-wrapper-output .error").delay(3500).hide(500);
				
				}
				$('a.listeo-booking-widget-apply_new_coupon').removeClass('active');
            }
        });
	});


	// Remove coupon from widget and calculate price again
	$('#coupon-widget-wrapper-applied-coupons').on('click', 'span i', function(e){

		var coupon = $(this).parent().data('coupon');
		

		var coupons = $('#coupon_code').val();	
		var coupons_array = coupons.split(',');
		coupons_array = coupons_array.filter(function(item) {
			console.log(item);
			console.log(coupon);
		    return item !== coupon
		})
		
		$('#coupon_code').val(coupons_array.join(","));	
		$(this).parent().remove();
		if($('#booking-confirmation-summary').length>0){
			calculate_booking_form_price();
		} else {
			check_booking();
			calculate_price();
			
		}
	});



	//Book now button
	$('.listing-widget').on('click', 'a.book-now', function(e){
		
		var button = $(this);

		if($('#date-picker').val()){
			inputClicked = true;
			

			if ($(".time-picker").length && !$(".time-picker").val()) {
				inputClicked = false;
				
			}
			if ($("#slot").length && !$("#slot").val()) {
				inputClicked = false;
				
			}
			if(inputClicked){
				check_booking();
			}
			
		
		}
		console.log(inputClicked);
		
		if(inputClicked == false){
			$('.time-picker,.time-slots-dropdown,.date-picker-listing-rental').addClass('bounce');
		} else {
				button.addClass('loading');
		}
		e.preventDefault();

		var freeplaces = button.data('freeplaces');
		
		  
        // var checked = $(".bookable-services input[type=checkbox]:checked").length;

		// if (!checked) {
		// 	alert("You must select at least one extra service.");
		// 	return false;
		// }
       

	
		setTimeout(function() {
			  button.removeClass('loading');
			  $('.time-picker,.time-slots-dropdown,.date-picker-listing-rental').removeClass('bounce');
			  
		}, 3000);

		try {
			if ( freeplaces > 0 ) 
			{

					// preparing data for ajax
					var startDataSql = moment( $('#date-picker').data('daterangepicker').startDate, ["MM/DD/YYYY"]).format("YYYY-MM-DD");
					var endDataSql = moment( $('#date-picker').data('daterangepicker').endDate, ["MM/DD/YYYY"]).format("YYYY-MM-DD");
			
					var ajax_data = {
						'listing_type' : $('#listing_type').val(),
						'listing_id' : 	$('#listing_id').val()
						//'nonce': nonce		
					};
					var invalid = false;
					if ( startDataSql ) ajax_data.date_start = startDataSql;
					if ( endDataSql ) ajax_data.date_end = endDataSql;
					if ( $('input#slot').val() ) ajax_data.slot = $('input#slot').val();
					if ( $('.time-picker#_hour').val() ) ajax_data._hour = $('.time-picker#_hour').val();
					if ( $('.time-picker#_hour_end').val() ) ajax_data._hour_end = $('.time-picker#_hour_end').val();
					if ( $('.adults').val() ) ajax_data.adults = $('.adults').val();
					if ( $('.childrens').val() ) ajax_data.childrens = $('.childrens').val();
					if ( $('#tickets').val() ) ajax_data.tickets = $('#tickets').val();
					if ( $('#coupon_code').val() ) ajax_data.coupon = $('#coupon_code').val();

					if ( $('#listing_type').val() == 'service' ) {
						
						if( $('input#slot').val() == undefined || $('input#slot').val() == '' ) {
							inputClicked = false;
							invalid = true;
						}
						if( $('.time-picker').length  ) {
							
							invalid = false;
						}
					}
					
					if(invalid == false) {

						var services = [];
	 					// $.each($("input[name='_service[]']:checked"), function(){            
	      //           		services.push($(this).val());
	      //       		});
	            		$.each($("input.bookable-service-checkbox:checked"), function(){   
							var quantity = $(this).parent().find('input.bookable-service-quantity').val();
				    		services.push({"service" : $(this).val(), "value" : quantity});
						});
	            		ajax_data.services = services;
						$('input#booking').val( JSON.stringify( ajax_data ) );
						$('#form-booking').submit();
					

					}

			} 
		} catch (e) {
			console.log(e);
		}

		if ( $('#listing_type').val() == 'event' )
		{
			
			var ajax_data = {
				'listing_type' : $('#listing_type').val(),
				'listing_id' : 	$('#listing_id').val(),
				'date_start' : $('.booking-event-date span').html(),
				'date_end' : $('.booking-event-date span').html(),
				//'nonce': nonce		
			};
			if ( $('#coupon_code').val() ) ajax_data.coupon = $('#coupon_code').val();
			var services = [];
			$.each($("input.bookable-service-checkbox:checked"), function(){   
				var quantity = $(this).parent().find('input.bookable-service-quantity').val();
	    		services.push({"service" : $(this).val(), "value" : quantity});
			});
    		ajax_data.services = services;
			
			// converent data
			ajax_data['date_start'] = moment(ajax_data['date_start'], wordpress_date_format.date).format('YYYY-MM-DD');
			ajax_data['date_end'] = moment(ajax_data['date_end'], wordpress_date_format.date).format('YYYY-MM-DD');
			if ( $('#tickets').val() ) ajax_data.tickets = $('#tickets').val();
			$('input#booking').val( JSON.stringify( ajax_data ) );
			
			$('#form-booking').submit();
			
		}
		
	});

	if(Boolean(listeo_core.clockformat)){
		var dateformat_even = wordpress_date_format.date+' HH:mm';
	} else {
		var dateformat_even = wordpress_date_format.date+' hh:mm A';
	}


	function updateCounter() {
	    var len = $(".bookable-services input[type='checkbox']:checked").length;
	    if(len>0){
	    	$(".booking-services span.services-counter").text(''+len+'');
	    	$(".booking-services span.services-counter").addClass('counter-visible');
	    } else{
	    	$(".booking-services span.services-counter").removeClass('counter-visible');
	    	$(".booking-services span.services-counter").text('0');
	    }
	}

	$('.single-service').on('click', function() {
		updateCounter();
		$(".booking-services span.services-counter").addClass("rotate-x");

		setTimeout(function() {
			$(".booking-services span.services-counter").removeClass("rotate-x");
		}, 300);
	});
	

	// $( ".input-datetime" ).each(function( index ) {
	// 	var $this = $(this);
	// 	var input = $(this).next('input');
	//   	var date =  parseInt(input.val());	
	//   	if(date){
	// 	  	var a = new Date(date);
	// 		var timestamp = moment(a);
	// 		$this.val(timestamp.format(dateformat_even));	
	//   	}
		
	// });
	
	//$('#_event_date').val(timestamp.format(dateformat_even));
	
	$('.input-datetime').daterangepicker({
		"opens": "left",
		// checking attribute listing type and set type of calendar
		singleDatePicker: true, 
		timePicker: true,
		autoUpdateInput: false,
		timePicker24Hour: Boolean(listeo_core.clockformat),
		minDate: moment().subtract(0, 'days'),
		
		locale: {
			format 			: dateformat_even,

			"firstDay"		: parseInt(wordpress_date_format.day),
			"applyLabel"	: listeo_core.applyLabel,
	        "cancelLabel"	: listeo_core.cancelLabel,
	        "fromLabel"		: listeo_core.fromLabel,
	        "toLabel"		: listeo_core.toLabel,
	        "customRangeLabel": listeo_core.customRangeLabel,
	        "daysOfWeek": [
		            listeo_core.day_short_su,
		            listeo_core.day_short_mo,
		            listeo_core.day_short_tu,
		            listeo_core.day_short_we,
		            listeo_core.day_short_th,
		            listeo_core.day_short_fr,
		            listeo_core.day_short_sa
	        ],
	        "monthNames": [
	            listeo_core.january,
	            listeo_core.february,
	            listeo_core.march,
	            listeo_core.april,
	            listeo_core.may,
	            listeo_core.june,
	            listeo_core.july,
	            listeo_core.august,
	            listeo_core.september,
	            listeo_core.october,
	            listeo_core.november,
	            listeo_core.december,
	        ],
	  	},
	  
	  	
	});

	$('.input-datetime').on('apply.daterangepicker', function(ev, picker) {
      	$(this).val(picker.startDate.format(dateformat_even));
	});

	$('.input-datetime').on('cancel.daterangepicker', function(ev, picker) {
	    $(this).val('');
	});

	
	$('.input-date').daterangepicker({
		"opens": "left",
		// checking attribute listing type and set type of calendar
		singleDatePicker: true, 
		timePicker: false,
		autoUpdateInput: false,
		
		minDate: moment().subtract(0, 'days'),
		
		locale: {
			format 			: 'YYYY-MM-DD',
			"firstDay"		: parseInt(wordpress_date_format.day),
			"applyLabel"	: listeo_core.applyLabel,
	        "cancelLabel"	: listeo_core.cancelLabel,
	        "fromLabel"		: listeo_core.fromLabel,
	        "toLabel"		: listeo_core.toLabel,
	        "customRangeLabel": listeo_core.customRangeLabel,
	        "daysOfWeek": [
		            listeo_core.day_short_su,
		            listeo_core.day_short_mo,
		            listeo_core.day_short_tu,
		            listeo_core.day_short_we,
		            listeo_core.day_short_th,
		            listeo_core.day_short_fr,
		            listeo_core.day_short_sa
	        ],
	        "monthNames": [
	            listeo_core.january,
	            listeo_core.february,
	            listeo_core.march,
	            listeo_core.april,
	            listeo_core.may,
	            listeo_core.june,
	            listeo_core.july,
	            listeo_core.august,
	            listeo_core.september,
	            listeo_core.october,
	            listeo_core.november,
	            listeo_core.december,
	        ],
	  	},
	  
	  	
	});

	$('.input-date').on('apply.daterangepicker', function(ev, picker) {
      	$(this).val(picker.startDate.format('YYYY-MM-DD'));
	});

	$('.input-date').on('cancel.daterangepicker', function(ev, picker) {
	    $(this).val('');
	});
	// $('.input-datetime').on( 'apply.daterangepicker', function(){
		
	// 	var picked_date = $(this).val();
	// 	var input = $(this).next('input');
	// 	input.val(moment(picked_date,dateformat_even).format('YYYY-MM-DD HH:MM:SS'));
	// } );

	function wpkGetThisDateSlots( date ) {

		var slots = {
			isFirstSlotTaken: false,
			isSecondSlotTaken: false
		}
		
		if ( $( '#listing_type' ).val() == 'event' )
			return slots;
		
		if ( typeof disabledDates !== 'undefined' ) {
			if ( wpkIsDateInArray( date, disabledDates ) ) {
				slots.isFirstSlotTaken = slots.isSecondSlotTaken = true;
				return slots;
			}
		}

		if ( typeof wpkStartDates != 'undefined' && typeof wpkEndDates != 'undefined' ) {
			slots.isSecondSlotTaken = wpkIsDateInArray( date, wpkStartDates );
			slots.isFirstSlotTaken = wpkIsDateInArray( date, wpkEndDates );
		}
		//console.log(slots);
		return slots;

	}

	function wpkIsDateInArray( date, array ) {
		return jQuery.inArray( date.format("YYYY-MM-DD"), array ) !== -1;
	}


	$('#date-picker').daterangepicker({
		"opens": "left",
		// checking attribute listing type and set type of calendar
		singleDatePicker: ( $('#date-picker').data('listing_type') == 'rental' ? false : true ), 
		timePicker: false,
		minDate: moment().subtract(0, 'days'),
		minSpan : { days:  $('#date-picker').data('minspan') },
		startDate : Cookies.get('listeo_rental_startdate'),
    	endDate : Cookies.get('listeo_rental_enddate'),
		locale: {
			format: wordpress_date_format.date,
			"firstDay": parseInt(wordpress_date_format.day),
			"applyLabel"	: listeo_core.applyLabel,
	        "cancelLabel"	: listeo_core.cancelLabel,
	        "fromLabel"		: listeo_core.fromLabel,
	        "toLabel"		: listeo_core.toLabel,
	        "customRangeLabel": listeo_core.customRangeLabel,
	        "daysOfWeek": [
	            listeo_core.day_short_su,
	            listeo_core.day_short_mo,
	            listeo_core.day_short_tu,
	            listeo_core.day_short_we,
	            listeo_core.day_short_th,
	            listeo_core.day_short_fr,
	            listeo_core.day_short_sa
	        ],
	        "monthNames": [
	            listeo_core.january,
	            listeo_core.february,
	            listeo_core.march,
	            listeo_core.april,
	            listeo_core.may,
	            listeo_core.june,
	            listeo_core.july,
	            listeo_core.august,
	            listeo_core.september,
	            listeo_core.october,
	            listeo_core.november,
	            listeo_core.december,
	        ],
	      
		},

		isCustomDate: function( date ) {

			var slots = wpkGetThisDateSlots( date );

			if ( ! slots.isFirstSlotTaken && ! slots.isSecondSlotTaken )
				return [];

			if ( slots.isFirstSlotTaken && ! slots.isSecondSlotTaken ) {
				return [ 'first-slot-taken' ];
			}

			if ( slots.isSecondSlotTaken && ! slots.isFirstSlotTaken ) {
				return [ 'second-slot-taken' ];
			}
			
		},

		isInvalidDate: function(date) {

			// working only for rental
						

			if ($('#listing_type').val() == 'event' ) return false;
			if ($('#listing_type').val() == 'service' && typeof disabledDates != 'undefined' ) {
				if ( jQuery.inArray( date.format("YYYY-MM-DD"), disabledDates ) !== -1) return true;
				
			}

			if ($(".time-slots-dropdown").length) {
				var timeslotdays = $(".time-slots-dropdown")
          .data("slots-days")
          .toString();

				var timeslotdaysArray = timeslotdays.split(",");
				// O is sunday in moment, monday in slot
				if (timeslotdaysArray.includes(moment(date).day().toString())) {
				console.log("day");
				return false;
				} else {
				console.log("noday");
				return true;
				}
			}

			if ($('#listing_type').val() == 'rental' ) {
	
				var slots = wpkGetThisDateSlots( date );

				return slots.isFirstSlotTaken && slots.isSecondSlotTaken;
			}
		}

	});

	$('#date-picker').on('show.daterangepicker', function(ev, picker) {

        $('.daterangepicker').addClass('calendar-visible calendar-animated');
        $('.daterangepicker').removeClass('calendar-hidden');
    });
    $('#date-picker').on('hide.daterangepicker', function(ev, picker) {
    	
        $('.daterangepicker').removeClass('calendar-visible');
        $('.daterangepicker').addClass('calendar-hidden');
	});

	function calculate_price(){
		
		var ajax_data = {
			'action': 'calculate_price', 
			'listing_type' : $('#date-picker').data('listing_type'),
			'listing_id' : 	$('input#listing_id').val(),
			'tickets' : 	$('input#tickets').val(),
			'coupon' : 	$('input#coupon_code').val(),
			//'nonce': nonce		
		};
		var services = [];

		$.each($("input.bookable-service-checkbox:checked"), function(){   
			var quantity = $(this).parent().find('input.bookable-service-quantity').val();
    		services.push({"service" : $(this).val(), "value" : quantity});
		});
		ajax_data.services = services;
		$.ajax({
            type: 'POST', dataType: 'json',
			url: listeo.ajaxurl,
			data: ajax_data,
			
            success: function(data){

						$('#negative-feedback').fadeOut();
						$('a.book-now').removeClass('inactive');
						if(data.data.price) {
							if(listeo_core.currency_position=='before'){
								$('.booking-estimated-cost span').html(listeo_core.currency_symbol+' '+data.data.price);	
								
							} else {
								$('.booking-estimated-cost span').html(data.data.price+' '+listeo_core.currency_symbol);	
							}
							$('.booking-estimated-cost').data('price',data.data.price)
							$('.booking-estimated-cost').fadeIn();
						}
						if(data.data.price_discount) {
							if(listeo_core.currency_position=='before'){
								$('.booking-estimated-discount-cost span').html(listeo_core.currency_symbol+' '+data.data.price_discount);	
							} else {
								$('.booking-estimated-discount-cost span').html(data.data.price_discount+' '+listeo_core.currency_symbol);	
							}
							$('.booking-estimated-cost').addClass('estimated-with-discount');
							$('.booking-estimated-discount-cost').fadeIn();

						} else {
							$('.booking-estimated-cost').removeClass('estimated-with-discount');
							$('.booking-estimated-discount-cost').fadeOut();
						}
            }
        });
	}

	function calculate_booking_form_price() {
		var ajax_data = {
			'action'		:   'listeo_calculate_booking_form_price', 
			'coupon' 		: 	$('input#coupon_code').val(),
			'price' 		: 	$('li.total-costs').data('price'),
		}

		$.ajax({
            type: 'POST', dataType: 'json',
			url: listeo.ajaxurl,
			data: ajax_data,
			
            success: function(data){
						
						if(data.price >= 0) {
							
							if(listeo_core.currency_position=='before'){
								$('.total-discounted_costs span').html(listeo_core.currency_symbol+' '+data.price);	
							} else {
								$('.total-discounted_costs span').html(data.price+' '+listeo_core.currency_symbol);	
							}
							
							$('.total-discounted_costs').fadeIn();
							$('.total-costs').addClass('estimated-with-discount');

						} else {
							$('.total-discounted_costs ').fadeOut();
							$('.total-costs').removeClass('estimated-with-discount');
						}
            }
        });

	};
	
	// function when checking booking by widget
	function check_booking() 
	{
		inputClicked = true;
		if ( is_open === false ) return 0;
		
		// if we not deal with services with slots or opening hours
		if ( $('#date-picker').data('listing_type') == 'service' && 
		! $('input#slot').val() && ! $('.time-picker').val() ) 
		{
			$('#negative-feedback').fadeIn();
			
			return;
		}
		
		Cookies.set('listeo_rental_startdate', $('#date-picker').data('daterangepicker').startDate.format(wordpress_date_format.date));
        Cookies.set('listeo_rental_enddate',  $('#date-picker').data('daterangepicker').endDate.format(wordpress_date_format.date));

		var startDataSql = moment( $('#date-picker').data('daterangepicker').startDate, ["MM/DD/YYYY"]).format("YYYY-MM-DD");
		var endDataSql = moment( $('#date-picker').data('daterangepicker').endDate, ["MM/DD/YYYY"]).format("YYYY-MM-DD");
		
		console.log($('#date-picker').data('daterangepicker').startDate);
		
		// preparing data for ajax
		var ajax_data = {
			'action': 'check_avaliabity', 
			'listing_type' : $('#date-picker').data('listing_type'),
			'listing_id' : 	$('input#listing_id').val(),
			'coupon' : 	$('input#coupon_code').val(),
			'date_start' : startDataSql,
			'date_end' : endDataSql,
			//'nonce': nonce		
		};
		var services = [];
		// $.each($("input.bookable-service-checkbox:checked"), function(){            
  //   		services.push($(this).val());
		// });
		// $.each($("input.bookable-service-quantity"), function(){            
  //   		services.push($(this).val());
		// });
		$.each($("input.bookable-service-checkbox:checked"), function(){   
			var quantity = $(this).parent().find('input.bookable-service-quantity').val();
    		services.push({"service" : $(this).val(), "value" : quantity});
		});
	
		ajax_data.services = services;
		
		if ( $('input#slot').val() ) ajax_data.slot = $('input#slot').val();
		if ( $('input.adults').val() ) ajax_data.adults = $('input.adults').val();
		if ( $('.time-picker').val() ) ajax_data.hour = $('.time-picker').val();
		if ( $(".time-picker-end-hour").val()) ajax_data.end_hour = $(".time-picker-end-hour").val();
		

		// loader class
		$('a.book-now').addClass('loading');
		$('a.book-now-notloggedin').addClass('loading');

		$.ajax({
            type: 'POST', dataType: 'json',
			url: listeo.ajaxurl,
			data: ajax_data,
			
            success: function(data){

				// loader clas
				if (data.success == true && ( ! $(".time-picker").length || is_open != false ) ) {
                   if ( data.data.free_places > 0) {
                   		$('a.book-now,a.book-now-notloggedin').data('freeplaces',data.data.free_places);
						$('.booking-error-message').fadeOut();
						$('a.book-now').removeClass('inactive');
						if(data.data.price) {
							if(listeo_core.currency_position=='before'){
								$('.booking-estimated-cost span').html(listeo_core.currency_symbol+' '+data.data.price);	
							} else {
								$('.booking-estimated-cost span').html(data.data.price+' '+listeo_core.currency_symbol);	
							}
							$('.booking-estimated-cost').data('price',data.data.price)
							$('.booking-estimated-cost').fadeIn();
						} else {
							$('.booking-estimated-cost span').html( '0 '+listeo_core.currency_symbol);	
							$('.booking-estimated-cost').fadeOut();
						}
						if(data.data.price_discount) {
							if(listeo_core.currency_position=='before'){
								$('.booking-estimated-discount-cost span').html(listeo_core.currency_symbol+' '+data.data.price_discount);	
							} else {
								$('.booking-estimated-discount-cost span').html(data.data.price_discount+' '+listeo_core.currency_symbol);	
							}
							$('.booking-estimated-cost').addClass('estimated-with-discount');
							$('.booking-estimated-discount-cost').fadeIn();

						} else {
							$('.booking-estimated-cost').removeClass('estimated-with-discount');
							$('.booking-estimated-discount-cost').fadeOut();
						}
						validate_coupon($('input#listing_id').val(),data.data.price);
						$('.coupon-widget-wrapper').fadeIn();
				   } else {
				   		$('a.book-now,a.book-now-notloggedin').data('freeplaces',0);
						$('.booking-error-message').fadeIn();
						
						$('.booking-estimated-cost').fadeOut();

						$('.booking-estimated-cost span').html('');

					}
                } else {
                	$('a.book-now,a.book-now-notloggedin').data('freeplaces',0);
					$('.booking-error-message').fadeIn();
					
					$('.booking-estimated-cost').fadeOut();
		   		}
		   		$('a.book-now').removeClass('loading');
		   		$('a.book-now-notloggedin').removeClass('loading');
            }
		});

	}

	var is_open = true;
	var lastDayOfWeek;




	// update slots and check hours setted to this day
	function update_booking_widget () 
	{

		// function only for services
		if ( $('#date-picker').data('listing_type') != 'service') return;
		$('a.book-now').addClass('loading');
		$('a.book-now-notloggedin').addClass('loading');
		// get day of week
		var date = $('#date-picker').data('daterangepicker').endDate._d;
		var dayOfWeek = date.getDay() - 1;
		console.log(date.getDay() - 1);
	
		if(date.getDay() == 0){
			dayOfWeek = 6;
		}
		

		var startDataSql = moment( $('#date-picker').data('daterangepicker').startDate, ["MM/DD/YYYY"]).format("YYYY-MM-DD");
		var endDataSql = moment( $('#date-picker').data('daterangepicker').endDate, ["MM/DD/YYYY"]).format("YYYY-MM-DD");
			
		var ajax_data = {
			'action'		: 'update_slots', 
			'listing_id' 	: 	$('input#listing_id').val(),
			'date_start' 	: startDataSql,
			'date_end' 		: endDataSql,
			'slot'			: dayOfWeek
			//'nonce': nonce		
		};

		$.ajax({
            type: 'POST', dataType: 'json',
			url: listeo.ajaxurl,
			data: ajax_data,
			
			
            success: function(data){
            	
				$('.time-slots-dropdown .panel-dropdown-scrollable').html(data.data);

				// reset values of slot selector
				if ( dayOfWeek != lastDayOfWeek)
				{
					
					$( '.panel-dropdown-scrollable .time-slot input' ).prop("checked", false);
					
					$('.panel-dropdown.time-slots-dropdown input#slot').val('');
					$('.panel-dropdown.time-slots-dropdown a').html( $('.panel-dropdown.time-slots-dropdown a').attr('placeholder') );
					$(' .booking-estimated-cost span').html(' ');

				}

				lastDayOfWeek = dayOfWeek;

				if ( ! $( '.panel-dropdown-scrollable .time-slot[day=\'' + dayOfWeek + '\']' ).length ) 
				{

					$( '.no-slots-information' ).show();
					$('.panel-dropdown.time-slots-dropdown a').html( $( '.no-slots-information' ).html() );

				}
					else  
				{

					// when we dont have slots for this day reset cost and show no slots
					$( '.no-slots-information' ).hide();
					$(' .booking-estimated-cost span').html(' ');
					

				}
				// show only slots for this day
				$( '.panel-dropdown-scrollable .time-slot' ).hide( );
				
				$( '.panel-dropdown-scrollable .time-slot[day=\'' + dayOfWeek + '\']' ).show( );
				$(".time-slot").each(function() {
					var timeSlot = $(this);
					$(this).find('input').on('change',function() {
						
						var timeSlotVal = timeSlot.find("strong").text();
						var slotArray = [timeSlot.find("strong").text(), timeSlot.find("input").val()];
						
						
						$('.panel-dropdown.time-slots-dropdown input#slot').val( JSON.stringify( slotArray ) );
				
						$('.panel-dropdown.time-slots-dropdown a').html(timeSlotVal);
						
							$(".panel-dropdown").removeClass("active");
            			
              
						
						check_booking();
					});
				});
				$('a.book-now').removeClass('loading');
				$('a.book-now-notloggedin').removeClass('loading');
            }
        });
		

		// check if opening days are active
		if ( $(".time-picker").length ) {
			if(availableDays){


				if ( availableDays[dayOfWeek].opening == 'Closed' || availableDays[dayOfWeek].closing == 'Closed') 
				{

					$('#negative-feedback').fadeIn();

					//$('a.book-now').css('background-color','grey');
					
					is_open = false;
					//console.log('zamkniete tego dnia' + dayOfWeek);
					return;
				}

				// converent hours to 24h format
				var opening_hour = moment( availableDays[dayOfWeek].opening, ["h:mm A"]).format("HH:mm");
				var closing_hour = moment( availableDays[dayOfWeek].closing, ["h:mm A"]).format("HH:mm");


				// get hour in 24 format
				var current_hour = $('.time-picker').val();


				// check if currer hour bar is open
				if ( current_hour >= opening_hour && current_hour <= closing_hour) 
				{

					is_open = true;
					$('#negative-feedback').fadeOut();
					$('a.book-now').attr('href','#').css('background-color','#f30c0c');
					check_booking()
					console.log('otwarte' + dayOfWeek);
					

				} else {
					
					is_open = false;
					$('#negative-feedback').fadeIn();
					//$('a.book-now').attr('href','#').css('background-color','grey');
					$('.booking-estimated-cost span').html('');
					console.log('zamkniete');

				}
			}
		}
	}

	// if slots exist update them
	if ( $( '.time-slot' ).length ) { update_booking_widget(); }
	
	// show only services for actual day from datapicker
	$( '#date-picker' ).on( 'apply.daterangepicker', update_booking_widget );
	$( '#date-picker' ).on( 'change', function(){
		check_booking();
		update_booking_widget();
	});


	// when slot is selected check if there are avalible bookings
	$( '#date-picker' ).on( 'apply.daterangepicker', check_booking );
	$( '#date-picker' ).on( 'cancel.daterangepicker', check_booking );
	
	$(document).on("change", 'input#slot,input.adults, input.bookable-service-quantity, .form-booking-service input.bookable-service-checkbox,.form-booking-rental input.bookable-service-checkbox', function(event) {
		check_booking();
	}); 
	//$('input#slot').on( 'change', check_booking );
	
	$('input#tickets,.form-booking-event input.bookable-service-checkbox').on('change',function(e){
		//check_booking();
		calculate_price();
	});


	// hours picker
	if ( $(".time-picker").length ) {
		var time24 = false;
		
		if(listeo_core.clockformat){
			time24 = true;
		}
		const calendars = $(".time-picker").flatpickr({
			enableTime: true,
			noCalendar: true,
			dateFormat: "H:i",
			time_24hr: time24,
 			disableMobile: "true",
 			

			// check if there are free days on change and calculate price
			onClose: function(selectedDates, dateStr, instance) {
				update_booking_widget();
				check_booking();
			},

		});
		
		if($('#_hour_end').length) {
			calendars[0].config.onClose = [() => {
			  setTimeout(() => calendars[1].open(), 1);
			}];

			calendars[0].config.onChange = [(selDates) => {
			  calendars[1].set("minDate", selDates[0]);
			}];

			calendars[1].config.onChange = [(selDates) => {
			  calendars[0].set("maxDate", selDates[0]);
			}]
		}	 
	};
	

	
/*----------------------------------------------------*/
/*  Bookings Dashboard Script
/*----------------------------------------------------*/
$(".booking-services").on("click", '.qtyInc', function() {
	  var $button = $(this);

      var oldValue = $button.parent().find("input").val();
      console.log(oldValue);
      if(oldValue == 2) {
      	//$button.parents('.single-service').find('label').trigger('click');
      	$button.parents('.single-service').find('input.bookable-service-checkbox').prop("checked",true);
      	updateCounter();
      }
     	if($("#form-booking").hasClass('form-booking-event')){
			calculate_price();
		} else {
			check_booking();	
		}
      //calculate_price();
});


if ( $( "#booking-date-range" ).length ) {

	// to update view with bookin

	var bookingsOffset = 0;

	// here we can set how many bookings per page
	var bookingsLimit = 5;

	// function when checking booking by widget
	function listeo_bookings_manage(page) 
	{
		
		if($('#booking-date-range').data('daterangepicker')){
			var startDataSql = moment( $('#booking-date-range').data('daterangepicker').startDate, ["MM/DD/YYYY"]).format("YYYY-MM-DD");
			var endDataSql = moment( $('#booking-date-range').data('daterangepicker').endDate, ["MM/DD/YYYY"]).format("YYYY-MM-DD");
	
		} else {
			var startDataSql = '';
			var endDataSql = '';
		}
		if(!page) { page = 1 }
		if (page == "prev") {
		var current = $("div.pagination-container li.current").data("paged");
		page = current-1;
		}
		if (page == "next") {
		var current = $("div.pagination-container li.current").data("paged");
		page = current+1;
		}
			
		
		// preparing data for ajax
		var ajax_data = {
			'action': 'listeo_bookings_manage', 
			'date_start' : startDataSql,
			'date_end' : endDataSql,
			'listing_id' : $('#listing_id').val(),
			'listing_status' : $('#listing_status').val(),
			'booking_author' : $('#booking_author').val(),
			'dashboard_type' : $('#dashboard_type').val(),
			'limit' : bookingsLimit,
			'offset' : bookingsOffset,
			'page' : page,
			//'nonce': nonce		
		};

		
		// display loader class
		$(".dashboard-list-box").addClass('loading');

		$.ajax({
            type: 'POST', dataType: 'json',
			url: listeo.ajaxurl,
			data: ajax_data,
			
            success: function(data){

				
				// display loader class
				$(".dashboard-list-box").removeClass('loading');

				if(data.data.html){
					$('#no-bookings-information').hide();
					$( "ul#booking-requests" ).html(data.data.html);	
					$( ".pagination-container" ).html(data.data.pagination);	
				} else {
					$( "ul#booking-requests" ).empty();
					$( ".pagination-container" ).empty();
					$('#no-bookings-information').show();
				}
				
            }
		});

	}

	     $( '#dashboard-booking-author-search' ).autocomplete({
	                
	                source: function(req, response){
	                    $.getJSON(
                        listeo_core.ajax_url +
                          "?callback=?&action=listeo_core_incremental_listing_suggest",
                        req,
                        response
                      );
	                },
	                select: function(event, ui) {
	                    window.location.href=ui.item.link;
	                },
	                minLength: 3,
	            }); 

	// hooks for get bookings into view
	 $( '#booking-date-range' ).on( 'apply.daterangepicker', function(e){
		listeo_bookings_manage();
	 });
	 $( '#listing_id' ).on( 'change', function(e){
		listeo_bookings_manage();
	 });
	$( '#listing_status' ).on( 'change', function(e){
		listeo_bookings_manage();
	 });
	$("#booking_author").on("change", function (e) {
    listeo_bookings_manage();
  });

	$( 'div.pagination-container').on( 'click', 'a', function(e) {
		e.preventDefault();
		
		var page   = $(this).parent().data('paged');

		listeo_bookings_manage(page);

		$( 'body, html' ).animate({
			scrollTop: $(".dashboard-list-box").offset().top
		}, 600 );

		return false;
	} );


	$(document).on('click','.reject, .cancel',function(e) {
		e.preventDefault();
		if (window.confirm(listeo_core.areyousure)) {
			var $this = $(this);
			$this.parents('li').addClass('loading');
			var status = 'confirmed';
			if ( $(this).hasClass('reject' ) ) status = 'cancelled';
			if ( $(this).hasClass('cancel' ) ) status = 'cancelled';

			// preparing data for ajax
			var ajax_data = {
				'action': 'listeo_bookings_manage', 
				'booking_id' : $(this).data('booking_id'),
				'status' : status,
				//'nonce': nonce		
			};
			$.ajax({
	            type: 'POST', dataType: 'json',
				url: listeo.ajaxurl,
				data: ajax_data,
				
	            success: function(data){
						
					// display loader class
					$this.parents('li').removeClass('loading');

					listeo_bookings_manage();
					
	            }
			});
		}
	});

	$(document).on('click','.delete',function(e) {
		e.preventDefault();
		if (window.confirm(listeo_core.areyousure)) {
			var $this = $(this);
			$this.parents('li').addClass('loading');
			var status = 'deleted';
			
			// preparing data for ajax
			var ajax_data = {
				'action': 'listeo_bookings_manage', 
				'booking_id' : $(this).data('booking_id'),
				'status' : status,
				//'nonce': nonce		
			};
			$.ajax({
	            type: 'POST', dataType: 'json',
				url: listeo.ajaxurl,
				data: ajax_data,
				
	            success: function(data){
						
					// display loader class
					$this.parents('li').removeClass('loading');

					listeo_bookings_manage();
					
	            }
			});
		}
	});

	$(document).on('click','.renew_booking',function(e) {
		e.preventDefault();
		if (window.confirm(listeo_core.areyousure)) {
			var $this = $(this);
			$this.parents('li').addClass('loading');
			
			
			// preparing data for ajax
			var ajax_data = {
				'action': 'listeo_bookings_renew_booking', 
				'booking_id' : $(this).data('booking_id'),
				//'nonce': nonce		
			};
			$.ajax({
	            type: 'POST', dataType: 'json',
				url: listeo.ajaxurl,
				data: ajax_data,
				
	            success: function(data){
					if(data.success) {

					} else {
						alert(listeo_core.booked_dates);
					}
					// display loader class
					$this.parents('li').removeClass('loading');

					listeo_bookings_manage();
					
	            }
			});
		}
	});

	
	$(document).on('click','.approve',function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.parents('li').addClass('loading');
		var status = 'confirmed';
		if ( $(this).hasClass('reject' ) ) status = 'cancelled';
		if ( $(this).hasClass('cancel' ) ) status = 'cancelled';

		// preparing data for ajax
		var ajax_data = {
			'action': 'listeo_bookings_manage', 
			'booking_id' : $(this).data('booking_id'),
			'status' : status,
			//'nonce': nonce		
		};
		$.ajax({
            type: 'POST', dataType: 'json',
			url: listeo.ajaxurl,
			data: ajax_data,
			
            success: function(data){
					
				// display loader class
				$this.parents('li').removeClass('loading');

				listeo_bookings_manage();
				
            }
		});

	});
	$(document).on('click','.mark-as-paid',function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.parents('li').addClass('loading');
		var status = 'paid';
		
		// preparing data for ajax
		var ajax_data = {
			'action': 'listeo_bookings_manage', 
			'booking_id' : $(this).data('booking_id'),
			'status' : status,
			//'nonce': nonce		
		};
		$.ajax({
            type: 'POST', dataType: 'json',
			url: listeo.ajaxurl,
			data: ajax_data,
			
            success: function(data){
					
				// display loader class
				$this.parents('li').removeClass('loading');

				listeo_bookings_manage();
				
            }
		});

	});


	var start = moment().subtract(30, 'days');
    var end = moment();

    function cb(start, end) {
        $("#booking-date-range span,#chart-date-range span").html(
          start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
        );
    }
    
	var ranges = new Object();
	ranges[listeo_core.today] = [moment().subtract(1, "days"), moment()];
	ranges[listeo_core.yesterday] = [moment().subtract(1, 'days'), moment().subtract(1, 'days')];
	ranges[listeo_core.last_7_days] = [moment().subtract(6, 'days'), moment()];
	ranges[listeo_core.last_30_days] = [moment().subtract(29, 'days'), moment()];
	ranges[listeo_core.this_month] = [moment().startOf('month'), moment().endOf('month')];
	ranges[listeo_core.last_month] = [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')];

    var today = listeo_core.today;
	
    $('#booking-date-range-enabler').on('click',function(e){
		
    	e.preventDefault();
    	$(this).hide();
    	cb(start, end);
	    $('#booking-date-range,#chart-date-range').show().daterangepicker({
	    	"opens": "left",
		    "autoUpdateInput": false,
		    "alwaysShowCalendars": true,
	        startDate: start,
	        endDate: end,
	        ranges: ranges,
			locale: {
				format: wordpress_date_format.date,
				"firstDay": parseInt(wordpress_date_format.day),
				"applyLabel"	: listeo_core.applyLabel,
		        "cancelLabel"	: listeo_core.cancelLabel,
		        "fromLabel"		: listeo_core.fromLabel,
		        "toLabel"		: listeo_core.toLabel,
		        "customRangeLabel": listeo_core.customRangeLabel,
		        "daysOfWeek": [
		            listeo_core.day_short_su,
		            listeo_core.day_short_mo,
		            listeo_core.day_short_tu,
		            listeo_core.day_short_we,
		            listeo_core.day_short_th,
		            listeo_core.day_short_fr,
		            listeo_core.day_short_sa
		        ],
		        "monthNames": [
		            listeo_core.january,
		            listeo_core.february,
		            listeo_core.march,
		            listeo_core.april,
		            listeo_core.may,
		            listeo_core.june,
		            listeo_core.july,
		            listeo_core.august,
		            listeo_core.september,
		            listeo_core.october,
		            listeo_core.november,
		            listeo_core.december,
		        ],
		  	}
	    }, cb).trigger('click');
	    cb(start, end);
    })
   

    


    // Calendar animation and visual settings
    $('#booking-date-range').on('show.daterangepicker', function(ev, picker) {

        $('.daterangepicker').addClass('calendar-visible calendar-animated bordered-style');
        $('.daterangepicker').removeClass('calendar-hidden');
    });
    $('#booking-date-range').on('hide.daterangepicker', function(ev, picker) {
    	
        $('.daterangepicker').removeClass('calendar-visible');
        $('.daterangepicker').addClass('calendar-hidden');
	});
	
} // end if dashboard booking

   

	// $('a.reject').on('click', function() {
		
	// 	console.log(picker);
	
	// });
	});

})(this.jQuery);