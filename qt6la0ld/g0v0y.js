// source --> https://prontosocialchef.it/wp-includes/js/jquery/jquery.min.js?ver=3.7.1 
/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(ie,e){"use strict";var oe=[],r=Object.getPrototypeOf,ae=oe.slice,g=oe.flat?function(e){return oe.flat.call(e)}:function(e){return oe.concat.apply([],e)},s=oe.push,se=oe.indexOf,n={},i=n.toString,ue=n.hasOwnProperty,o=ue.toString,a=o.call(Object),le={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},C=ie.document,u={type:!0,src:!0,nonce:!0,noModule:!0};function m(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in u)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[i.call(e)]||"object":typeof e}var t="3.7.1",l=/HTML$/i,ce=function(e,t){return new ce.fn.init(e,t)};function c(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function fe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}ce.fn=ce.prototype={jquery:t,constructor:ce,length:0,toArray:function(){return ae.call(this)},get:function(e){return null==e?ae.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=ce.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return ce.each(this,e)},map:function(n){return this.pushStack(ce.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(ae.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(ce.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(ce.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:oe.sort,splice:oe.splice},ce.extend=ce.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||v(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(ce.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||ce.isPlainObject(n)?n:{},i=!1,a[t]=ce.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},ce.extend({expando:"jQuery"+(t+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==i.call(e))&&(!(t=r(e))||"function"==typeof(n=ue.call(t,"constructor")&&t.constructor)&&o.call(n)===a)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){m(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(c(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=ce.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(c(Object(e))?ce.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:se.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!l.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(c(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:le}),"function"==typeof Symbol&&(ce.fn[Symbol.iterator]=oe[Symbol.iterator]),ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var pe=oe.pop,de=oe.sort,he=oe.splice,ge="[\\x20\\t\\r\\n\\f]",ve=new RegExp("^"+ge+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ge+"+$","g");ce.contains=function(e,t){var n=t&&t.parentNode;return e===n||!(!n||1!==n.nodeType||!(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))};var f=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function p(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}ce.escapeSelector=function(e){return(e+"").replace(f,p)};var ye=C,me=s;!function(){var e,b,w,o,a,T,r,C,d,i,k=me,S=ce.expando,E=0,n=0,s=W(),c=W(),u=W(),h=W(),l=function(e,t){return e===t&&(a=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",t="(?:\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",p="\\["+ge+"*("+t+")(?:"+ge+"*([*^$|!~]?=)"+ge+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+t+"))|)"+ge+"*\\]",g=":("+t+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+p+")*)|.*)\\)|)",v=new RegExp(ge+"+","g"),y=new RegExp("^"+ge+"*,"+ge+"*"),m=new RegExp("^"+ge+"*([>+~]|"+ge+")"+ge+"*"),x=new RegExp(ge+"|>"),j=new RegExp(g),A=new RegExp("^"+t+"$"),D={ID:new RegExp("^#("+t+")"),CLASS:new RegExp("^\\.("+t+")"),TAG:new RegExp("^("+t+"|[*])"),ATTR:new RegExp("^"+p),PSEUDO:new RegExp("^"+g),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ge+"*(even|odd|(([+-]|)(\\d*)n|)"+ge+"*(?:([+-]|)"+ge+"*(\\d+)|))"+ge+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+ge+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ge+"*((?:-\\d)?\\d*)"+ge+"*\\)|)(?=[^-]|$)","i")},N=/^(?:input|select|textarea|button)$/i,q=/^h\d$/i,L=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,H=/[+~]/,O=new RegExp("\\\\[\\da-fA-F]{1,6}"+ge+"?|\\\\([^\\r\\n\\f])","g"),P=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},M=function(){V()},R=J(function(e){return!0===e.disabled&&fe(e,"fieldset")},{dir:"parentNode",next:"legend"});try{k.apply(oe=ae.call(ye.childNodes),ye.childNodes),oe[ye.childNodes.length].nodeType}catch(e){k={apply:function(e,t){me.apply(e,ae.call(t))},call:function(e){me.apply(e,ae.call(arguments,1))}}}function I(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(V(e),e=e||T,C)){if(11!==p&&(u=L.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return k.call(n,a),n}else if(f&&(a=f.getElementById(i))&&I.contains(e,a)&&a.id===i)return k.call(n,a),n}else{if(u[2])return k.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&e.getElementsByClassName)return k.apply(n,e.getElementsByClassName(i)),n}if(!(h[t+" "]||d&&d.test(t))){if(c=t,f=e,1===p&&(x.test(t)||m.test(t))){(f=H.test(t)&&U(e.parentNode)||e)==e&&le.scope||((s=e.getAttribute("id"))?s=ce.escapeSelector(s):e.setAttribute("id",s=S)),o=(l=Y(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+Q(l[o]);c=l.join(",")}try{return k.apply(n,f.querySelectorAll(c)),n}catch(e){h(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return re(t.replace(ve,"$1"),e,n,r)}function W(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function F(e){return e[S]=!0,e}function $(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function B(t){return function(e){return fe(e,"input")&&e.type===t}}function _(t){return function(e){return(fe(e,"input")||fe(e,"button"))&&e.type===t}}function z(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&R(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function X(a){return F(function(o){return o=+o,F(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function U(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function V(e){var t,n=e?e.ownerDocument||e:ye;return n!=T&&9===n.nodeType&&n.documentElement&&(r=(T=n).documentElement,C=!ce.isXMLDoc(T),i=r.matches||r.webkitMatchesSelector||r.msMatchesSelector,r.msMatchesSelector&&ye!=T&&(t=T.defaultView)&&t.top!==t&&t.addEventListener("unload",M),le.getById=$(function(e){return r.appendChild(e).id=ce.expando,!T.getElementsByName||!T.getElementsByName(ce.expando).length}),le.disconnectedMatch=$(function(e){return i.call(e,"*")}),le.scope=$(function(){return T.querySelectorAll(":scope")}),le.cssHas=$(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}}),le.getById?(b.filter.ID=function(e){var t=e.replace(O,P);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(O,P);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&C){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},b.find.CLASS=function(e,t){if("undefined"!=typeof t.getElementsByClassName&&C)return t.getElementsByClassName(e)},d=[],$(function(e){var t;r.appendChild(e).innerHTML="<a id='"+S+"' href='' disabled='disabled'></a><select id='"+S+"-\r\\' disabled='disabled'><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+ge+"*(?:value|"+f+")"),e.querySelectorAll("[id~="+S+"-]").length||d.push("~="),e.querySelectorAll("a#"+S+"+*").length||d.push(".#.+[+~]"),e.querySelectorAll(":checked").length||d.push(":checked"),(t=T.createElement("input")).setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),r.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&d.push(":enabled",":disabled"),(t=T.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||d.push("\\["+ge+"*name"+ge+"*="+ge+"*(?:''|\"\")")}),le.cssHas||d.push(":has"),d=d.length&&new RegExp(d.join("|")),l=function(e,t){if(e===t)return a=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!le.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument==ye&&I.contains(ye,e)?-1:t===T||t.ownerDocument==ye&&I.contains(ye,t)?1:o?se.call(o,e)-se.call(o,t):0:4&n?-1:1)}),T}for(e in I.matches=function(e,t){return I(e,null,null,t)},I.matchesSelector=function(e,t){if(V(e),C&&!h[t+" "]&&(!d||!d.test(t)))try{var n=i.call(e,t);if(n||le.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){h(t,!0)}return 0<I(t,T,null,[e]).length},I.contains=function(e,t){return(e.ownerDocument||e)!=T&&V(e),ce.contains(e,t)},I.attr=function(e,t){(e.ownerDocument||e)!=T&&V(e);var n=b.attrHandle[t.toLowerCase()],r=n&&ue.call(b.attrHandle,t.toLowerCase())?n(e,t,!C):void 0;return void 0!==r?r:e.getAttribute(t)},I.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ce.uniqueSort=function(e){var t,n=[],r=0,i=0;if(a=!le.sortStable,o=!le.sortStable&&ae.call(e,0),de.call(e,l),a){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)he.call(e,n[r],1)}return o=null,e},ce.fn.uniqueSort=function(){return this.pushStack(ce.uniqueSort(ae.apply(this)))},(b=ce.expr={cacheLength:50,createPseudo:F,match:D,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(O,P),e[3]=(e[3]||e[4]||e[5]||"").replace(O,P),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||I.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&I.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return D.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&j.test(n)&&(t=Y(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(O,P).toLowerCase();return"*"===e?function(){return!0}:function(e){return fe(e,t)}},CLASS:function(e){var t=s[e+" "];return t||(t=new RegExp("(^|"+ge+")"+e+"("+ge+"|$)"))&&s(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=I.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(v," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(d,e,t,h,g){var v="nth"!==d.slice(0,3),y="last"!==d.slice(-4),m="of-type"===e;return 1===h&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u=v!==y?"nextSibling":"previousSibling",l=e.parentNode,c=m&&e.nodeName.toLowerCase(),f=!n&&!m,p=!1;if(l){if(v){while(u){o=e;while(o=o[u])if(m?fe(o,c):1===o.nodeType)return!1;s=u="only"===d&&!s&&"nextSibling"}return!0}if(s=[y?l.firstChild:l.lastChild],y&&f){p=(a=(r=(i=l[S]||(l[S]={}))[d]||[])[0]===E&&r[1])&&r[2],o=a&&l.childNodes[a];while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if(1===o.nodeType&&++p&&o===e){i[d]=[E,a,p];break}}else if(f&&(p=a=(r=(i=e[S]||(e[S]={}))[d]||[])[0]===E&&r[1]),!1===p)while(o=++a&&o&&o[u]||(p=a=0)||s.pop())if((m?fe(o,c):1===o.nodeType)&&++p&&(f&&((i=o[S]||(o[S]={}))[d]=[E,p]),o===e))break;return(p-=g)===h||p%h==0&&0<=p/h}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||I.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?F(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=se.call(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:F(function(e){var r=[],i=[],s=ne(e.replace(ve,"$1"));return s[S]?F(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:F(function(t){return function(e){return 0<I(t,e).length}}),contains:F(function(t){return t=t.replace(O,P),function(e){return-1<(e.textContent||ce.text(e)).indexOf(t)}}),lang:F(function(n){return A.test(n||"")||I.error("unsupported lang: "+n),n=n.replace(O,P).toLowerCase(),function(e){var t;do{if(t=C?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=ie.location&&ie.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===r},focus:function(e){return e===function(){try{return T.activeElement}catch(e){}}()&&T.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:z(!1),disabled:z(!0),checked:function(e){return fe(e,"input")&&!!e.checked||fe(e,"option")&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return q.test(e.nodeName)},input:function(e){return N.test(e.nodeName)},button:function(e){return fe(e,"input")&&"button"===e.type||fe(e,"button")},text:function(e){var t;return fe(e,"input")&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:X(function(){return[0]}),last:X(function(e,t){return[t-1]}),eq:X(function(e,t,n){return[n<0?n+t:n]}),even:X(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:X(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:X(function(e,t,n){var r;for(r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:X(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=B(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=_(e);function G(){}function Y(e,t){var n,r,i,o,a,s,u,l=c[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=y.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=m.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(ve," ")}),a=a.slice(n.length)),b.filter)!(r=D[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?I.error(e):c(e,s).slice(0)}function Q(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function J(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=n++;return e.first?function(e,t,n){while(e=e[s])if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[E,f];if(n){while(e=e[s])if((1===e.nodeType||c)&&a(e,t,n))return!0}else while(e=e[s])if(1===e.nodeType||c)if(i=e[S]||(e[S]={}),u&&fe(e,u))e=e[s]||e;else{if((r=i[l])&&r[0]===E&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function K(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Z(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function ee(d,h,g,v,y,e){return v&&!v[S]&&(v=ee(v)),y&&!y[S]&&(y=ee(y,e)),F(function(e,t,n,r){var i,o,a,s,u=[],l=[],c=t.length,f=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)I(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),p=!d||!e&&h?f:Z(f,u,d,n,r);if(g?g(p,s=y||(e?d:c||v)?[]:t,n,r):s=p,v){i=Z(s,l),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(s[l[o]]=!(p[l[o]]=a))}if(e){if(y||d){if(y){i=[],o=s.length;while(o--)(a=s[o])&&i.push(p[o]=a);y(null,s=[],i,r)}o=s.length;while(o--)(a=s[o])&&-1<(i=y?se.call(e,a):u[o])&&(e[i]=!(t[i]=a))}}else s=Z(s===t?s.splice(c,s.length):s),y?y(null,t,s,r):k.apply(t,s)})}function te(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=J(function(e){return e===i},a,!0),l=J(function(e){return-1<se.call(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!=w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[J(K(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return ee(1<s&&K(c),1<s&&Q(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ve,"$1"),t,s<n&&te(e.slice(s,n)),n<r&&te(e=e.slice(n)),n<r&&Q(e))}c.push(t)}return K(c)}function ne(e,t){var n,v,y,m,x,r,i=[],o=[],a=u[e+" "];if(!a){t||(t=Y(e)),n=t.length;while(n--)(a=te(t[n]))[S]?i.push(a):o.push(a);(a=u(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=E+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==T||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==T||(V(o),n=!C);while(s=v[a++])if(s(o,t||T,n)){k.call(r,o);break}i&&(E=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=pe.call(r));f=Z(f)}k.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&ce.uniqueSort(r)}return i&&(E=h,w=p),c},m?F(r):r))).selector=e}return a}function re(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&Y(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&C&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(O,P),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=D.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(O,P),H.test(o[0].type)&&U(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Q(o)))return k.apply(n,r),n;break}}}return(l||ne(e,c))(r,t,!C,n,!t||H.test(e)&&U(t.parentNode)||t),n}G.prototype=b.filters=b.pseudos,b.setFilters=new G,le.sortStable=S.split("").sort(l).join("")===S,V(),le.sortDetached=$(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce.find=I,ce.expr[":"]=ce.expr.pseudos,ce.unique=ce.uniqueSort,I.compile=ne,I.select=re,I.setDocument=V,I.tokenize=Y,I.escape=ce.escapeSelector,I.getText=ce.text,I.isXML=ce.isXMLDoc,I.selectors=ce.expr,I.support=ce.support,I.uniqueSort=ce.uniqueSort}();var d=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&ce(e).is(n))break;r.push(e)}return r},h=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},b=ce.expr.match.needsContext,w=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function T(e,n,r){return v(n)?ce.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?ce.grep(e,function(e){return e===n!==r}):"string"!=typeof n?ce.grep(e,function(e){return-1<se.call(n,e)!==r}):ce.filter(n,e,r)}ce.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ce.find.matchesSelector(r,e)?[r]:[]:ce.find.matches(e,ce.grep(t,function(e){return 1===e.nodeType}))},ce.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ce(e).filter(function(){for(t=0;t<r;t++)if(ce.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ce.find(e,i[t],n);return 1<r?ce.uniqueSort(n):n},filter:function(e){return this.pushStack(T(this,e||[],!1))},not:function(e){return this.pushStack(T(this,e||[],!0))},is:function(e){return!!T(this,"string"==typeof e&&b.test(e)?ce(e):e||[],!1).length}});var k,S=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(ce.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||k,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:S.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ce?t[0]:t,ce.merge(this,ce.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),w.test(r[1])&&ce.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=C.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(ce):ce.makeArray(e,this)}).prototype=ce.fn,k=ce(C);var E=/^(?:parents|prev(?:Until|All))/,j={children:!0,contents:!0,next:!0,prev:!0};function A(e,t){while((e=e[t])&&1!==e.nodeType);return e}ce.fn.extend({has:function(e){var t=ce(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ce.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ce(e);if(!b.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&ce.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?ce.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?se.call(ce(e),this[0]):se.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ce.uniqueSort(ce.merge(this.get(),ce(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ce.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return d(e,"parentNode")},parentsUntil:function(e,t,n){return d(e,"parentNode",n)},next:function(e){return A(e,"nextSibling")},prev:function(e){return A(e,"previousSibling")},nextAll:function(e){return d(e,"nextSibling")},prevAll:function(e){return d(e,"previousSibling")},nextUntil:function(e,t,n){return d(e,"nextSibling",n)},prevUntil:function(e,t,n){return d(e,"previousSibling",n)},siblings:function(e){return h((e.parentNode||{}).firstChild,e)},children:function(e){return h(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(fe(e,"template")&&(e=e.content||e),ce.merge([],e.childNodes))}},function(r,i){ce.fn[r]=function(e,t){var n=ce.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=ce.filter(t,n)),1<this.length&&(j[r]||ce.uniqueSort(n),E.test(r)&&n.reverse()),this.pushStack(n)}});var D=/[^\x20\t\r\n\f]+/g;function N(e){return e}function q(e){throw e}function L(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}ce.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},ce.each(e.match(D)||[],function(e,t){n[t]=!0}),n):ce.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){ce.each(e,function(e,t){v(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return ce.each(arguments,function(e,t){var n;while(-1<(n=ce.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<ce.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},ce.extend({Deferred:function(e){var o=[["notify","progress",ce.Callbacks("memory"),ce.Callbacks("memory"),2],["resolve","done",ce.Callbacks("once memory"),ce.Callbacks("once memory"),0,"resolved"],["reject","fail",ce.Callbacks("once memory"),ce.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return ce.Deferred(function(r){ce.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,N,s),l(u,o,q,s)):(u++,t.call(e,l(u,o,N,s),l(u,o,q,s),l(u,o,N,o.notifyWith))):(a!==N&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){ce.Deferred.exceptionHook&&ce.Deferred.exceptionHook(e,t.error),u<=i+1&&(a!==q&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(ce.Deferred.getErrorHook?t.error=ce.Deferred.getErrorHook():ce.Deferred.getStackHook&&(t.error=ce.Deferred.getStackHook()),ie.setTimeout(t))}}return ce.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:N,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:N)),o[2][3].add(l(0,e,v(n)?n:q))}).promise()},promise:function(e){return null!=e?ce.extend(e,a):a}},s={};return ce.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=ae.call(arguments),o=ce.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?ae.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(L(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||v(i[t]&&i[t].then)))return o.then();while(t--)L(i[t],a(t),o.reject);return o.promise()}});var H=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ce.Deferred.exceptionHook=function(e,t){ie.console&&ie.console.warn&&e&&H.test(e.name)&&ie.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ce.readyException=function(e){ie.setTimeout(function(){throw e})};var O=ce.Deferred();function P(){C.removeEventListener("DOMContentLoaded",P),ie.removeEventListener("load",P),ce.ready()}ce.fn.ready=function(e){return O.then(e)["catch"](function(e){ce.readyException(e)}),this},ce.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--ce.readyWait:ce.isReady)||(ce.isReady=!0)!==e&&0<--ce.readyWait||O.resolveWith(C,[ce])}}),ce.ready.then=O.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?ie.setTimeout(ce.ready):(C.addEventListener("DOMContentLoaded",P),ie.addEventListener("load",P));var M=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n))for(s in i=!0,n)M(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ce(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},R=/^-ms-/,I=/-([a-z])/g;function W(e,t){return t.toUpperCase()}function F(e){return e.replace(R,"ms-").replace(I,W)}var $=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function B(){this.expando=ce.expando+B.uid++}B.uid=1,B.prototype={cache:function(e){var t=e[this.expando];return t||(t={},$(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[F(t)]=n;else for(r in t)i[F(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][F(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(F):(t=F(t))in r?[t]:t.match(D)||[]).length;while(n--)delete r[t[n]]}(void 0===t||ce.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ce.isEmptyObject(t)}};var _=new B,z=new B,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,U=/[A-Z]/g;function V(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(U,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:X.test(i)?JSON.parse(i):i)}catch(e){}z.set(e,t,n)}else n=void 0;return n}ce.extend({hasData:function(e){return z.hasData(e)||_.hasData(e)},data:function(e,t,n){return z.access(e,t,n)},removeData:function(e,t){z.remove(e,t)},_data:function(e,t,n){return _.access(e,t,n)},_removeData:function(e,t){_.remove(e,t)}}),ce.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=z.get(o),1===o.nodeType&&!_.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=F(r.slice(5)),V(o,r,i[r]));_.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){z.set(this,n)}):M(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=z.get(o,n))?t:void 0!==(t=V(o,n))?t:void 0;this.each(function(){z.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){z.remove(this,e)})}}),ce.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=_.get(e,t),n&&(!r||Array.isArray(n)?r=_.access(e,t,ce.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ce.queue(e,t),r=n.length,i=n.shift(),o=ce._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){ce.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return _.get(e,n)||_.access(e,n,{empty:ce.Callbacks("once memory").add(function(){_.remove(e,[t+"queue",n])})})}}),ce.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?ce.queue(this[0],t):void 0===n?this:this.each(function(){var e=ce.queue(this,t,n);ce._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&ce.dequeue(this,t)})},dequeue:function(e){return this.each(function(){ce.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ce.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=_.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var G=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Y=new RegExp("^(?:([+-])=|)("+G+")([a-z%]*)$","i"),Q=["Top","Right","Bottom","Left"],J=C.documentElement,K=function(e){return ce.contains(e.ownerDocument,e)},Z={composed:!0};J.getRootNode&&(K=function(e){return ce.contains(e.ownerDocument,e)||e.getRootNode(Z)===e.ownerDocument});var ee=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&K(e)&&"none"===ce.css(e,"display")};function te(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return ce.css(e,t,"")},u=s(),l=n&&n[3]||(ce.cssNumber[t]?"":"px"),c=e.nodeType&&(ce.cssNumber[t]||"px"!==l&&+u)&&Y.exec(ce.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)ce.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,ce.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ne={};function re(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=_.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ee(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ne[s])||(o=a.body.appendChild(a.createElement(s)),u=ce.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ne[s]=u)))):"none"!==n&&(l[c]="none",_.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}ce.fn.extend({show:function(){return re(this,!0)},hide:function(){return re(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ee(this)?ce(this).show():ce(this).hide()})}});var xe,be,we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i;xe=C.createDocumentFragment().appendChild(C.createElement("div")),(be=C.createElement("input")).setAttribute("type","radio"),be.setAttribute("checked","checked"),be.setAttribute("name","t"),xe.appendChild(be),le.checkClone=xe.cloneNode(!0).cloneNode(!0).lastChild.checked,xe.innerHTML="<textarea>x</textarea>",le.noCloneChecked=!!xe.cloneNode(!0).lastChild.defaultValue,xe.innerHTML="<option></option>",le.option=!!xe.lastChild;var ke={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Se(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&fe(e,t)?ce.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)_.set(e[n],"globalEval",!t||_.get(t[n],"globalEval"))}ke.tbody=ke.tfoot=ke.colgroup=ke.caption=ke.thead,ke.th=ke.td,le.option||(ke.optgroup=ke.option=[1,"<select multiple='multiple'>","</select>"]);var je=/<|&#?\w+;/;function Ae(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))ce.merge(p,o.nodeType?[o]:o);else if(je.test(o)){a=a||f.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),u=ke[s]||ke._default,a.innerHTML=u[1]+ce.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;ce.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<ce.inArray(o,r))i&&i.push(o);else if(l=K(o),a=Se(f.appendChild(o),"script"),l&&Ee(a),n){c=0;while(o=a[c++])Ce.test(o.type||"")&&n.push(o)}return f}var De=/^([^.]*)(?:\.(.+)|)/;function Ne(){return!0}function qe(){return!1}function Le(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Le(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=qe;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return ce().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=ce.guid++)),e.each(function(){ce.event.add(this,t,i,r,n)})}function He(e,r,t){t?(_.set(e,r,!1),ce.event.add(e,r,{namespace:!1,handler:function(e){var t,n=_.get(this,r);if(1&e.isTrigger&&this[r]){if(n)(ce.event.special[r]||{}).delegateType&&e.stopPropagation();else if(n=ae.call(arguments),_.set(this,r,n),this[r](),t=_.get(this,r),_.set(this,r,!1),n!==t)return e.stopImmediatePropagation(),e.preventDefault(),t}else n&&(_.set(this,r,ce.event.trigger(n[0],n.slice(1),this)),e.stopPropagation(),e.isImmediatePropagationStopped=Ne)}})):void 0===_.get(e,r)&&ce.event.add(e,r,Ne)}ce.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.get(t);if($(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&ce.find.matchesSelector(J,i),n.guid||(n.guid=ce.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof ce&&ce.event.triggered!==e.type?ce.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(D)||[""]).length;while(l--)d=g=(s=De.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=ce.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=ce.event.special[d]||{},c=ce.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ce.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),ce.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=_.hasData(e)&&_.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(D)||[""]).length;while(l--)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=ce.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ce.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ce.event.remove(e,d+t[l],n,r,!0);ce.isEmptyObject(u)&&_.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=ce.event.fix(e),l=(_.get(this,"events")||Object.create(null))[u.type]||[],c=ce.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=ce.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((ce.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<ce(i,this).index(l):ce.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(ce.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[ce.expando]?e:new ce.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click",!0),!1},trigger:function(e){var t=this||e;return we.test(t.type)&&t.click&&fe(t,"input")&&He(t,"click"),!0},_default:function(e){var t=e.target;return we.test(t.type)&&t.click&&fe(t,"input")&&_.get(t,"click")||fe(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ce.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ce.Event=function(e,t){if(!(this instanceof ce.Event))return new ce.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ne:qe,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&ce.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[ce.expando]=!0},ce.Event.prototype={constructor:ce.Event,isDefaultPrevented:qe,isPropagationStopped:qe,isImmediatePropagationStopped:qe,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ne,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ne,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ne,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},ce.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},ce.event.addProp),ce.each({focus:"focusin",blur:"focusout"},function(r,i){function o(e){if(C.documentMode){var t=_.get(this,"handle"),n=ce.event.fix(e);n.type="focusin"===e.type?"focus":"blur",n.isSimulated=!0,t(e),n.target===n.currentTarget&&t(n)}else ce.event.simulate(i,e.target,ce.event.fix(e))}ce.event.special[r]={setup:function(){var e;if(He(this,r,!0),!C.documentMode)return!1;(e=_.get(this,i))||this.addEventListener(i,o),_.set(this,i,(e||0)+1)},trigger:function(){return He(this,r),!0},teardown:function(){var e;if(!C.documentMode)return!1;(e=_.get(this,i)-1)?_.set(this,i,e):(this.removeEventListener(i,o),_.remove(this,i))},_default:function(e){return _.get(e.target,r)},delegateType:i},ce.event.special[i]={setup:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i);n||(C.documentMode?this.addEventListener(i,o):e.addEventListener(r,o,!0)),_.set(t,i,(n||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=C.documentMode?this:e,n=_.get(t,i)-1;n?_.set(t,i,n):(C.documentMode?this.removeEventListener(i,o):e.removeEventListener(r,o,!0),_.remove(t,i))}}}),ce.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){ce.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||ce.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),ce.fn.extend({on:function(e,t,n,r){return Le(this,e,t,n,r)},one:function(e,t,n,r){return Le(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ce(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=qe),this.each(function(){ce.event.remove(this,e,n,t)})}});var Oe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Me=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Re(e,t){return fe(e,"table")&&fe(11!==t.nodeType?t:t.firstChild,"tr")&&ce(e).children("tbody")[0]||e}function Ie(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function We(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Fe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(_.hasData(e)&&(s=_.get(e).events))for(i in _.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)ce.event.add(t,i,s[i][n]);z.hasData(e)&&(o=z.access(e),a=ce.extend({},o),z.set(t,a))}}function $e(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!le.checkClone&&Pe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),$e(t,r,i,o)});if(f&&(t=(e=Ae(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=ce.map(Se(e,"script"),Ie)).length;c<f;c++)u=e,c!==p&&(u=ce.clone(u,!0,!0),s&&ce.merge(a,Se(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,ce.map(a,We),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!_.access(u,"globalEval")&&ce.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?ce._evalUrl&&!u.noModule&&ce._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):m(u.textContent.replace(Me,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?ce.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ce.cleanData(Se(r)),r.parentNode&&(n&&K(r)&&Ee(Se(r,"script")),r.parentNode.removeChild(r));return e}ce.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=K(e);if(!(le.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ce.isXMLDoc(e)))for(a=Se(c),r=0,i=(o=Se(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||Se(e),a=a||Se(c),r=0,i=o.length;r<i;r++)Fe(o[r],a[r]);else Fe(e,c);return 0<(a=Se(c,"script")).length&&Ee(a,!f&&Se(e,"script")),c},cleanData:function(e){for(var t,n,r,i=ce.event.special,o=0;void 0!==(n=e[o]);o++)if($(n)){if(t=n[_.expando]){if(t.events)for(r in t.events)i[r]?ce.event.remove(n,r):ce.removeEvent(n,r,t.handle);n[_.expando]=void 0}n[z.expando]&&(n[z.expando]=void 0)}}}),ce.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return M(this,function(e){return void 0===e?ce.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return $e(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return $e(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Re(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return $e(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ce.cleanData(Se(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ce.clone(this,e,t)})},html:function(e){return M(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Oe.test(e)&&!ke[(Te.exec(e)||["",""])[1].toLowerCase()]){e=ce.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(ce.cleanData(Se(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return $e(this,arguments,function(e){var t=this.parentNode;ce.inArray(this,n)<0&&(ce.cleanData(Se(this)),t&&t.replaceChild(e,this))},n)}}),ce.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){ce.fn[e]=function(e){for(var t,n=[],r=ce(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),ce(r[o])[a](t),s.apply(n,t.get());return this.pushStack(n)}});var _e=new RegExp("^("+G+")(?!px)[a-z%]+$","i"),ze=/^--/,Xe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=ie),t.getComputedStyle(e)},Ue=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ve=new RegExp(Q.join("|"),"i");function Ge(e,t,n){var r,i,o,a,s=ze.test(t),u=e.style;return(n=n||Xe(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace(ve,"$1")||void 0),""!==a||K(e)||(a=ce.style(e,t)),!le.pixelBoxStyles()&&_e.test(a)&&Ve.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function Ye(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",J.appendChild(u).appendChild(l);var e=ie.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),J.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=C.createElement("div"),l=C.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",le.clearCloneStyle="content-box"===l.style.backgroundClip,ce.extend(le,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="box-sizing:content-box;border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",J.appendChild(e).appendChild(t).appendChild(n),r=ie.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,J.removeChild(e)),a}}))}();var Qe=["Webkit","Moz","ms"],Je=C.createElement("div").style,Ke={};function Ze(e){var t=ce.cssProps[e]||Ke[e];return t||(e in Je?e:Ke[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Qe.length;while(n--)if((e=Qe[n]+t)in Je)return e}(e)||e)}var et=/^(none|table(?!-c[ea]).+)/,tt={position:"absolute",visibility:"hidden",display:"block"},nt={letterSpacing:"0",fontWeight:"400"};function rt(e,t,n){var r=Y.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function it(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=ce.css(e,n+Q[a],!0,i)),r?("content"===n&&(u-=ce.css(e,"padding"+Q[a],!0,i)),"margin"!==n&&(u-=ce.css(e,"border"+Q[a]+"Width",!0,i))):(u+=ce.css(e,"padding"+Q[a],!0,i),"padding"!==n?u+=ce.css(e,"border"+Q[a]+"Width",!0,i):s+=ce.css(e,"border"+Q[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function ot(e,t,n){var r=Xe(e),i=(!le.boxSizingReliable()||n)&&"border-box"===ce.css(e,"boxSizing",!1,r),o=i,a=Ge(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(_e.test(a)){if(!n)return a;a="auto"}return(!le.boxSizingReliable()&&i||!le.reliableTrDimensions()&&fe(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===ce.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===ce.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+it(e,t,n||(i?"border":"content"),o,r,a)+"px"}function at(e,t,n,r,i){return new at.prototype.init(e,t,n,r,i)}ce.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ge(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=F(t),u=ze.test(t),l=e.style;if(u||(t=Ze(s)),a=ce.cssHooks[t]||ce.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=Y.exec(n))&&i[1]&&(n=te(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(ce.cssNumber[s]?"":"px")),le.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=F(t);return ze.test(t)||(t=Ze(s)),(a=ce.cssHooks[t]||ce.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Ge(e,t,r)),"normal"===i&&t in nt&&(i=nt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ce.each(["height","width"],function(e,u){ce.cssHooks[u]={get:function(e,t,n){if(t)return!et.test(ce.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?ot(e,u,n):Ue(e,tt,function(){return ot(e,u,n)})},set:function(e,t,n){var r,i=Xe(e),o=!le.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===ce.css(e,"boxSizing",!1,i),s=n?it(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-it(e,u,"border",!1,i)-.5)),s&&(r=Y.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=ce.css(e,u)),rt(0,t,s)}}}),ce.cssHooks.marginLeft=Ye(le.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ge(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ce.each({margin:"",padding:"",border:"Width"},function(i,o){ce.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+Q[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(ce.cssHooks[i+o].set=rt)}),ce.fn.extend({css:function(e,t){return M(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Xe(e),i=t.length;a<i;a++)o[t[a]]=ce.css(e,t[a],!1,r);return o}return void 0!==n?ce.style(e,t,n):ce.css(e,t)},e,t,1<arguments.length)}}),((ce.Tween=at).prototype={constructor:at,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ce.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ce.cssNumber[n]?"":"px")},cur:function(){var e=at.propHooks[this.prop];return e&&e.get?e.get(this):at.propHooks._default.get(this)},run:function(e){var t,n=at.propHooks[this.prop];return this.options.duration?this.pos=t=ce.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):at.propHooks._default.set(this),this}}).init.prototype=at.prototype,(at.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ce.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){ce.fx.step[e.prop]?ce.fx.step[e.prop](e):1!==e.elem.nodeType||!ce.cssHooks[e.prop]&&null==e.elem.style[Ze(e.prop)]?e.elem[e.prop]=e.now:ce.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=at.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ce.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ce.fx=at.prototype.init,ce.fx.step={};var st,ut,lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ut&&(!1===C.hidden&&ie.requestAnimationFrame?ie.requestAnimationFrame(dt):ie.setTimeout(dt,ce.fx.interval),ce.fx.tick())}function ht(){return ie.setTimeout(function(){st=void 0}),st=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=Q[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function vt(e,t,n){for(var r,i=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function yt(o,e,t){var n,a,r=0,i=yt.prefilters.length,s=ce.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=st||ht(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:ce.extend({},e),opts:ce.extend(!0,{specialEasing:{},easing:ce.easing._default},t),originalProperties:e,originalOptions:t,startTime:st||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=ce.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=F(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ce.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=yt.prefilters[r].call(l,o,c,l.opts))return v(n.stop)&&(ce._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return ce.map(c,vt,l),v(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ce.fx.timer(ce.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}ce.Animation=ce.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return te(n.elem,e,Y.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match(D);for(var n,r=0,i=e.length;r<i;r++)n=e[r],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ee(e),v=_.get(e,"fxshow");for(r in n.queue||(null==(a=ce._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,ce.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ce.style(e,r)}if((u=!ce.isEmptyObject(t))||!ce.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=_.get(e,"display")),"none"===(c=ce.css(e,"display"))&&(l?c=l:(re([e],!0),l=e.style.display||l,c=ce.css(e,"display"),re([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===ce.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=_.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&re([e],!0),p.done(function(){for(r in g||re([e]),_.remove(e,"fxshow"),d)ce.style(e,r,d[r])})),u=vt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),ce.speed=function(e,t,n){var r=e&&"object"==typeof e?ce.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return ce.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ce.fx.speeds?r.duration=ce.fx.speeds[r.duration]:r.duration=ce.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&ce.dequeue(this,r.queue)},r},ce.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=ce.isEmptyObject(t),o=ce.speed(e,n,r),a=function(){var e=yt(this,ce.extend({},t),o);(i||_.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=ce.timers,r=_.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||ce.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=_.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=ce.timers,o=n?n.length:0;for(t.finish=!0,ce.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),ce.each(["toggle","show","hide"],function(e,r){var i=ce.fn[r];ce.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),ce.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){ce.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),ce.timers=[],ce.fx.tick=function(){var e,t=0,n=ce.timers;for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ce.fx.stop(),st=void 0},ce.fx.timer=function(e){ce.timers.push(e),ce.fx.start()},ce.fx.interval=13,ce.fx.start=function(){ut||(ut=!0,dt())},ce.fx.stop=function(){ut=null},ce.fx.speeds={slow:600,fast:200,_default:400},ce.fn.delay=function(r,e){return r=ce.fx&&ce.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=ie.setTimeout(e,r);t.stop=function(){ie.clearTimeout(n)}})},lt=C.createElement("input"),ct=C.createElement("select").appendChild(C.createElement("option")),lt.type="checkbox",le.checkOn=""!==lt.value,le.optSelected=ct.selected,(lt=C.createElement("input")).value="t",lt.type="radio",le.radioValue="t"===lt.value;var mt,xt=ce.expr.attrHandle;ce.fn.extend({attr:function(e,t){return M(this,ce.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){ce.removeAttr(this,e)})}}),ce.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?ce.prop(e,t,n):(1===o&&ce.isXMLDoc(e)||(i=ce.attrHooks[t.toLowerCase()]||(ce.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void ce.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=ce.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!le.radioValue&&"radio"===t&&fe(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(D);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?ce.removeAttr(e,n):e.setAttribute(n,n),n}},ce.each(ce.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||ce.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(D)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function kt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(D)||[]}ce.fn.extend({prop:function(e,t){return M(this,ce.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[ce.propFix[e]||e]})}}),ce.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&ce.isXMLDoc(e)||(t=ce.propFix[t]||t,i=ce.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ce.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),le.optSelected||(ce.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ce.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ce.propFix[this.toLowerCase()]=this}),ce.fn.extend({addClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).addClass(t.call(this,e,Ct(this)))}):(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return v(t)?this.each(function(e){ce(this).removeClass(t.call(this,e,Ct(this)))}):arguments.length?(e=kt(t)).length?this.each(function(){if(r=Ct(this),n=1===this.nodeType&&" "+Tt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=Tt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return v(t)?this.each(function(e){ce(this).toggleClass(t.call(this,e,Ct(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=kt(t),this.each(function(){if(s)for(o=ce(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=Ct(this))&&_.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":_.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+Tt(Ct(n))+" ").indexOf(t))return!0;return!1}});var St=/\r/g;ce.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=v(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,ce(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=ce.map(t,function(e){return null==e?"":e+""})),(r=ce.valHooks[this.type]||ce.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=ce.valHooks[t.type]||ce.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(St,""):null==e?"":e:void 0}}),ce.extend({valHooks:{option:{get:function(e){var t=ce.find.attr(e,"value");return null!=t?t:Tt(ce.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!fe(n.parentNode,"optgroup"))){if(t=ce(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=ce.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<ce.inArray(ce.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ce.each(["radio","checkbox"],function(){ce.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<ce.inArray(ce(e).val(),t)}},le.checkOn||(ce.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Et=ie.location,jt={guid:Date.now()},At=/\?/;ce.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new ie.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||ce.error("Invalid XML: "+(n?ce.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Dt=/^(?:focusinfocus|focusoutblur)$/,Nt=function(e){e.stopPropagation()};ce.extend(ce.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||C],d=ue.call(e,"type")?e.type:e,h=ue.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||C,3!==n.nodeType&&8!==n.nodeType&&!Dt.test(d+ce.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[ce.expando]?e:new ce.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:ce.makeArray(t,[e]),c=ce.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!y(n)){for(s=c.delegateType||d,Dt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||C)&&p.push(a.defaultView||a.parentWindow||ie)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(_.get(o,"events")||Object.create(null))[e.type]&&_.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&$(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!$(n)||u&&v(n[d])&&!y(n)&&((a=n[u])&&(n[u]=null),ce.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Nt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Nt),ce.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=ce.extend(new ce.Event,n,{type:e,isSimulated:!0});ce.event.trigger(r,null,t)}}),ce.fn.extend({trigger:function(e,t){return this.each(function(){ce.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ce.event.trigger(e,t,n,!0)}});var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;function Pt(n,e,r,i){var t;if(Array.isArray(e))ce.each(e,function(e,t){r||qt.test(n)?i(n,t):Pt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==x(e))i(n,e);else for(t in e)Pt(n+"["+t+"]",e[t],r,i)}ce.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!ce.isPlainObject(e))ce.each(e,function(){i(this.name,this.value)});else for(n in e)Pt(n,e[n],t,i);return r.join("&")},ce.fn.extend({serialize:function(){return ce.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ce.prop(this,"elements");return e?ce.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ce(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=ce(this).val();return null==n?null:Array.isArray(n)?ce.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Mt=/%20/g,Rt=/#.*$/,It=/([?&])_=[^&]*/,Wt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},_t={},zt="*/".concat("*"),Xt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(D)||[];if(v(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Vt(t,i,o,a){var s={},u=t===_t;function l(e){var r;return s[e]=!0,ce.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Gt(e,t){var n,r,i=ce.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ce.extend(!0,e,r),e}Xt.href=Et.href,ce.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":zt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":ce.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Gt(Gt(e,ce.ajaxSettings),t):Gt(ce.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut(_t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=ce.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?ce(y):ce.event,x=ce.Deferred(),b=ce.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Wt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace($t,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(D)||[""],null==v.crossDomain){r=C.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Xt.protocol+"//"+Xt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=ce.param(v.data,v.traditional)),Vt(Bt,v,t,T),h)return T;for(i in(g=ce.event&&v.global)&&0==ce.active++&&ce.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ft.test(v.type),f=v.url.replace(Rt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Mt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(At.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(It,"$1"),o=(At.test(f)?"&":"?")+"_="+jt.guid+++o),v.url=f+o),v.ifModified&&(ce.lastModified[f]&&T.setRequestHeader("If-Modified-Since",ce.lastModified[f]),ce.etag[f]&&T.setRequestHeader("If-None-Match",ce.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+zt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Vt(_t,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=ie.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&ie.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<ce.inArray("script",v.dataTypes)&&ce.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(ce.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(ce.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--ce.active||ce.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return ce.get(e,t,n,"json")},getScript:function(e,t){return ce.get(e,void 0,t,"script")}}),ce.each(["get","post"],function(e,i){ce[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),ce.ajax(ce.extend({url:e,type:i,dataType:r,data:t,success:n},ce.isPlainObject(e)&&e))}}),ce.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),ce._evalUrl=function(e,t,n){return ce.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){ce.globalEval(e,t,n)}})},ce.fn.extend({wrapAll:function(e){var t;return this[0]&&(v(e)&&(e=e.call(this[0])),t=ce(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){ce(this).wrapInner(n.call(this,e))}):this.each(function(){var e=ce(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){ce(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ce(this).replaceWith(this.childNodes)}),this}}),ce.expr.pseudos.hidden=function(e){return!ce.expr.pseudos.visible(e)},ce.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ce.ajaxSettings.xhr=function(){try{return new ie.XMLHttpRequest}catch(e){}};var Yt={0:200,1223:204},Qt=ce.ajaxSettings.xhr();le.cors=!!Qt&&"withCredentials"in Qt,le.ajax=Qt=!!Qt,ce.ajaxTransport(function(i){var o,a;if(le.cors||Qt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Yt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&ie.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),ce.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),ce.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ce.globalEval(e),e}}}),ce.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ce.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=ce("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Jt,Kt=[],Zt=/(=)\?(?=&|$)|\?\?/;ce.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||ce.expando+"_"+jt.guid++;return this[e]=!0,e}}),ce.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Zt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Zt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Zt,"$1"+r):!1!==e.jsonp&&(e.url+=(At.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||ce.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=ie[r],ie[r]=function(){o=arguments},n.always(function(){void 0===i?ce(ie).removeProp(r):ie[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),le.createHTMLDocument=((Jt=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Jt.childNodes.length),ce.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(le.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),o=!n&&[],(i=w.exec(e))?[t.createElement(i[1])]:(i=Ae([e],t,o),o&&o.length&&ce(o).remove(),ce.merge([],i.childNodes)));var r,i,o},ce.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&ce.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?ce("<div>").append(ce.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},ce.expr.pseudos.animated=function(t){return ce.grep(ce.timers,function(e){return t===e.elem}).length},ce.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=ce.css(e,"position"),c=ce(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=ce.css(e,"top"),u=ce.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,ce.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},ce.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ce.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===ce.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===ce.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=ce(e).offset()).top+=ce.css(e,"borderTopWidth",!0),i.left+=ce.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-ce.css(r,"marginTop",!0),left:t.left-i.left-ce.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===ce.css(e,"position"))e=e.offsetParent;return e||J})}}),ce.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;ce.fn[t]=function(e){return M(this,function(e,t,n){var r;if(y(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),ce.each(["top","left"],function(e,n){ce.cssHooks[n]=Ye(le.pixelPosition,function(e,t){if(t)return t=Ge(e,n),_e.test(t)?ce(e).position()[n]+"px":t})}),ce.each({Height:"height",Width:"width"},function(a,s){ce.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){ce.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return M(this,function(e,t,n){var r;return y(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?ce.css(e,t,i):ce.style(e,t,n,i)},s,n?e:void 0,n)}})}),ce.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ce.fn[t]=function(e){return this.on(t,e)}}),ce.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){ce.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var en=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;ce.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=ae.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(ae.call(arguments)))}).guid=e.guid=e.guid||ce.guid++,i},ce.holdReady=function(e){e?ce.readyWait++:ce.ready(!0)},ce.isArray=Array.isArray,ce.parseJSON=JSON.parse,ce.nodeName=fe,ce.isFunction=v,ce.isWindow=y,ce.camelCase=F,ce.type=x,ce.now=Date.now,ce.isNumeric=function(e){var t=ce.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},ce.trim=function(e){return null==e?"":(e+"").replace(en,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return ce});var tn=ie.jQuery,nn=ie.$;return ce.noConflict=function(e){return ie.$===ce&&(ie.$=nn),e&&ie.jQuery===ce&&(ie.jQuery=tn),ce},"undefined"==typeof e&&(ie.jQuery=ie.$=ce),ce});
jQuery.noConflict();
// source --> https://prontosocialchef.it/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.4.1 
/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+o[a]<+n[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.1";var t=Object.create(null);s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")&&!e("5.0.0")||n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var o={};function u(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n,o),r},set:function(e){u(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&u(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function c(e,t,r,n,o){if(!o)throw new Error("No warning message provided");return a(e,t,r,n,o),0}function i(e,t,r,n){return a(e,t,r,n),0}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("quirks","jQuery is not compatible with Quirks Mode");var d,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;for(d in i(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(u("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,i(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,d)&&(s.find[d]=y[d]);c(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),c(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),c(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),c(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&c(s,"trim",function(e){return null==e?"":(e+"").replace(v,"$1")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(c(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),c(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(c(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),c(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),c(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),c(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,i(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(c(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),c(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),c(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&u("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function x(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}i(s.fn,"removeAttr",function(e){var r=this,n=!1;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&r.each(function(){if(!1!==s(this).prop(t))return!(n=!0)}),n&&(u("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),i(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(u("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var Q,A,R=!1,C=/^[a-z]/,N=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return R=!0,e=r.apply(this,arguments),R=!1,e})}),i(s,"swap",function(e,t,r,n){var o,a,i={};for(a in R||u("swap","jQuery.swap() is undocumented and deprecated"),t)i[a]=e.style[a],e.style[a]=t[a];for(a in o=r.apply(e,n||[]),t)e.style[a]=i[a];return o},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")?(A={animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},"undefined"!=typeof Proxy?s.cssNumber=new Proxy(A,{get:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return u("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}}):s.cssNumber=A):A=s.cssNumber,Q=s.fn.css,i(s.fn,"css",function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=x(e),n=r,C.test(n)&&N.test(n[0].toUpperCase()+n.slice(1))||A[r]||u("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))},"css-number");var S,P,k,H,E=s.data;i(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&E.call(this,e),o={},t)a!==x(a)?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return E.call(this,e,o),t}return t&&"string"==typeof t&&t!==x(t)&&(n=s.hasData(e)&&E.call(this,e))&&t in n?(u("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):E.apply(this,arguments)},"data-camelCase"),s.fx&&(k=s.Tween.prototype.run,H=function(e){return e},i(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(u("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=H),k.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,P="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u("fx-interval",P),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){u("fx-interval",P),S=e}}));var M=s.fn.load,q=s.event.add,O=s.event.fix;s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),i(s.event,"fix",function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("event-old-patch","jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=O.call(this,e),n&&n.filter?n.filter(t,e):t},"event-old-patch"),i(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("load-after-event","jQuery(window).on('load'...) called after load event occurred"),q.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){i(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?M.apply(this,e):(u("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){c(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("ready-event","'ready' event is deprecated")}},c(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),c(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),c(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),c(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),c(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated");function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var F=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},i(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(F,"<$1></$2>"))!==t&&T(t)!==T(r)&&u("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(F,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags");var D,W,_,I=s.fn.offset;return i(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?I.apply(this,arguments):(u("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(D=s.param,i(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)},"param-ajax-traditional")),c(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(W=s.Deferred,_=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],i(s,"Deferred",function(e){var a=W(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(_,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return c(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),c(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=W.exceptionHook),s});
// source --> https://prontosocialchef.it/wp-content/plugins/announcer/public/js/script.js?ver=6.0 
(function($){
$(document).ready(function(){

    $('.ancr').each(function(){
        var $ancr = $(this);
        this.announcer = new Announcer($ancr);
    });

});
})(jQuery);

function Announcer_Position(){
    this.spacer = false;
    this.normal_moved = false;

    this.sticky_offset = 0;
    this.sticky_group = false;
    this.sticky_elements = false;
}

function Announcer_State(){

    this.bars = [];
    this.top = new Announcer_Position();
    this.bottom = new Announcer_Position();
    this.on_scroll_bars = [];

    this.listen_on_scroll();

}

Announcer_State.prototype.add = function(bar){

    var position = bar.props.position;
    var position_class = '.ancr-pos-' + position;

    this.bars.push(bar);

    if(bar.props.sticky == 'yes'){
        this.add_spacer(position);
        if(!this[position].sticky_group){
            this[position].sticky_group = jQuery(position_class + '.ancr-sticky');
        }
    }else{
        if(position == 'top'){
            if(!this[position].normal_moved){
                var normal_class = position_class + '.ancr-normal';
                if(this[position].spacer){
                    jQuery(normal_class).detach().insertAfter(this[position].spacer);
                }else{
                    jQuery(normal_class).detach().prependTo('body');
                }
                this[position].normal_moved = true;
            }
        }
    }

    if(bar.props.show_on == 'page_scroll'){
        this.on_scroll_bars.push(bar);
    }

}

Announcer_State.prototype.add_spacer = function(position){
    if(!this[position].spacer){
        var $spacer = jQuery('<div class="ancr-' + position + '-spacer"></div>');
        this[position].spacer = $spacer;
        if(position == 'top'){
            jQuery('body').prepend($spacer);
        }else{
            jQuery('body').append($spacer);
        }
    }
}

Announcer_State.prototype.update_offsets = function(position){

    if(this[position].sticky_group){
        this[position].sticky_offset = this[position].sticky_group.outerHeight();
        this[position].spacer.height(this[position].sticky_offset);
        if(jQuery('body').hasClass('admin-bar')){
            jQuery('html').css('margin-top', this[position].sticky_offset + 'px');
        }
    }

}

Announcer_State.prototype.set_cookie = function(name, value, expiry_days, site_wide){

    if(('' + name).includes('PREVIEW')){
        return;
    }

    var expires = '';
    var path = '; path=/';

    if(expiry_days) {
        var date = new Date();
        date.setTime(date.getTime()+(expiry_days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
    }

    if(!site_wide){
        path = '; path=' + window.location.pathname;
    }

    document.cookie = name + '=' + value + expires + path;

}

Announcer_State.prototype.get_cookie = function(name){

    var name_eq = name + "=";
    var ca = document.cookie.split(';');

    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);

        if (c.indexOf(name_eq) == 0){
            return c.substring(name_eq.length, c.length);
        }
    }

    return null;

}

Announcer_State.prototype.listen_on_scroll = function(){

    var self = this;
    var $ = jQuery;

    $(window).scroll(function(){
        var at = $(window).scrollTop();

        for(var i = 0; i < self.on_scroll_bars.length; i++){
            var bar = self.on_scroll_bars[i];
            
            if(at >= bar.props.show_after_scroll){
                if(!bar.is_shown){
                    if(bar.can_show()) bar.show();
                }
            }else{
                if(bar.is_shown){
                    bar.hide(false);
                }
            }
        }

    });

}

Announcer_State.prototype.adjust_fixed_elements = function(){

    var top = this['top'];

    if(!top.sticky_group){
        return;
    }

    if(!top.sticky_elements){

        var possible_stickies = document.querySelectorAll('div, header, nav');
        top.sticky_elements = [];

        for(var i = 0; i < possible_stickies.length; i++){
            var element = possible_stickies[i];

            if(element.className.includes('ancr-')){
                continue;
            }

            var element_bound = element.getBoundingClientRect();
            var element_style = window.getComputedStyle(element, null);
    
            if(element_style.position === 'fixed' && element_style.display != 'none' && element_bound.top <= top['sticky_offset'] && element_bound.left == 0){
                top.sticky_elements.push(element);
            }
        }

    }

    for(i = 0; i < top.sticky_elements.length; i++){
        var element = top.sticky_elements[i];
        element.style.top = top['sticky_offset'] + 'px';
    }

}

Announcer_State.prototype.is_mobile = function(){
    return /Mobi|Android/i.test(navigator.userAgent);
}

window.ancr_state = new Announcer_State();

function Announcer($el){

    this.$el = $el;
    this.props = $el.data('props');
    this.id = this.props.id;
    this.is_shown = false;
    this.close_cookie = 'ancr_close_' + this.id;
    this.force_closed = false;

    ancr_state.add(this);

    this.register_events();
    this.check_show();

}

Announcer.prototype.register_events = function(){

    var self = this;
    var $close_btn = this.$el.find('.ancr-close');

    if(this.props.close_content_click == 'yes'){
        $close_btn = $close_btn.add(this.$el.find('.ancr-inner a'));
    }

    if($close_btn.length != 0){
        $close_btn.on('click', function(e){
            if(jQuery(this).attr('href') == '#'){
                e.preventDefault();
            }
            self.hide();
            if(self.props.show_on == 'page_scroll'){
                self.force_closed = true;
            }
        });
    }

    if(this.props.layout == 'ticker'){
        var initialize_ticker = function(){
            self.$el[0].style.setProperty('--ancr-width', self.$el.outerWidth() + 'px');
            var $content = self.$el.find('.ancr-content');
            var $btn_wrap = self.$el.find('.ancr-btn-wrap');
            var total_width = $content.outerWidth() + ($btn_wrap.length ? $btn_wrap.outerWidth() : 0);
            self.$el.find('.ancr-container').css({
                'min-width': total_width + 30,
                'visibility': 'visible'
            });
            
            var ticker_speed = self.props.ticker_speed;
            self.$el[0].style.setProperty('--ancr-ticker-speed', ticker_speed + 's');

            // Start the ticker animation
            self.$el.addClass('ancr-lo-ticker-anim');
        };
        jQuery(window).on('resize', initialize_ticker);
        setTimeout(function(){
            initialize_ticker();
        }, 500);
    }

}

Announcer.prototype.can_show = function(){

    if(this.props.display == 'custom'){
        return false;
    }

    var closed_cookie = ancr_state.get_cookie(this.close_cookie);

    if(this.props.devices == 'mobile_only' && !ancr_state.is_mobile()){
        return false;
    }

    if(this.props.devices == 'desktop_only' && ancr_state.is_mobile()){
        return false;
    }

    if(this.props.keep_closed == 'yes' && closed_cookie){
        return false;
    }

    if(this.props.display == 'schedule'){
        var now = Date.now()/1000;
        var schedule_from = this.props.schedule_from || (now - 1);
        var schedule_to = this.props.schedule_to || (now + 1);

        if(now > schedule_from && now < schedule_to){
            return true;
        }else{
            return false;
        }
    }

    if(this.force_closed){
        return false;
    }

    return true;

}

Announcer.prototype.check_show = function(){

    var self = this;

    if(!this.can_show()){
        return;
    }

    if(this.props.show_on == 'page_open'){
        self.show();
    }else if(this.props.show_on == 'duration'){
        setTimeout(function(){
            self.show();
        }, this.props.show_after_duration * 1000)
    }

}

Announcer.prototype.show = function(){
    var self = this;
    this.is_shown = true;

    this.animate('show', function(){
        self.after_show();
    });

}

Announcer.prototype.after_show = function(){

    var position = this.props.position;
    ancr_state.update_offsets(position);
    ancr_state.adjust_fixed_elements();

    if(this.props.auto_close != '0'){
        this.auto_close();
    }

}

Announcer.prototype.hide = function(set_cookie=true){
    var self = this;
    this.is_shown = false;

    this.animate('hide', function(){
        self.after_hide(set_cookie);
    });
}

Announcer.prototype.after_hide = function(set_cookie=true){

    var position = this.props.position;
    ancr_state.update_offsets(position);
    ancr_state.adjust_fixed_elements();

    var closed_duration = (this.props.closed_duration == '0') ? false : this.props.closed_duration;

    if(this.props.keep_closed == 'yes' && set_cookie){
        ancr_state.set_cookie(this.close_cookie, 1, closed_duration, true);
    }

}

Announcer.prototype.set_offset = function(){
    var position = this.props.position;
    var css_props = {};
    var offset = ancr_state[position].offset_total;

    css_props[position] = offset + 'px';
    //this.$el.animate(css_props);

}

Announcer.prototype.auto_close = function(){
    var self = this;
    setTimeout(function(){
        self.hide();
    }, this.props.auto_close * 1000);
}

Announcer.prototype.animate = function(type, callback){

    var animations = {
        'slide' : ['slideDown', 'slideUp'],
        'fade' : ['fadeIn', 'fadeOut']
    };

    var chosen = (type == 'show') ? this.props.open_animation : this.props.close_animation;
    var duration = 400;
    var animation = 'show';

    if(chosen == 'none'){
        animation = (type == 'show') ? 'show' : 'hide';
        duration = 0;
    }else{
        animation = (type == 'show') ? animations[chosen][0] : animations[chosen][1];
    }

    this.$el[animation](duration, callback);

};
// source --> https://prontosocialchef.it/wp-content/plugins/listeo-core/assets/js/leaflet.js?ver=4fd0f5bc13853fae144764d9c4a67c2c 
/* @preserve
 * Leaflet 1.4.0, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.L={})}(this,function(t){"use strict";function i(t){var i,e,n,o;for(e=1,n=arguments.length;e<n;e++){o=arguments[e];for(i in o)t[i]=o[i]}return t}function e(t,i){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var n=e.call(arguments,2);return function(){return t.apply(i,n.length?n.concat(e.call(arguments)):arguments)}}function n(t){return t._leaflet_id=t._leaflet_id||++ei,t._leaflet_id}function o(t,i,e){var n,o,s,r;return r=function(){n=!1,o&&(s.apply(e,o),o=!1)},s=function(){n?o=arguments:(t.apply(e,arguments),setTimeout(r,i),n=!0)}}function s(t,i,e){var n=i[1],o=i[0],s=n-o;return t===n&&e?t:((t-o)%s+s)%s+o}function r(){return!1}function a(t,i){var e=Math.pow(10,void 0===i?6:i);return Math.round(t*e)/e}function h(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function u(t){return h(t).split(/\s+/)}function l(t,i){t.hasOwnProperty("options")||(t.options=t.options?ii(t.options):{});for(var e in i)t.options[e]=i[e];return t.options}function c(t,i,e){var n=[];for(var o in t)n.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(i&&-1!==i.indexOf("?")?"&":"?")+n.join("&")}function _(t,i){return t.replace(ni,function(t,e){var n=i[e];if(void 0===n)throw new Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(i)),n})}function d(t,i){for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1}function p(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}function m(t){var i=+new Date,e=Math.max(0,16-(i-ri));return ri=i+e,window.setTimeout(t,e)}function f(t,i,n){if(!n||ai!==m)return ai.call(window,e(t,i));t.call(i)}function g(t){t&&hi.call(window,t)}function v(){}function y(t){if("undefined"!=typeof L&&L&&L.Mixin){t=oi(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}}function x(t,i,e){this.x=e?Math.round(t):t,this.y=e?Math.round(i):i}function w(t,i,e){return t instanceof x?t:oi(t)?new x(t[0],t[1]):void 0===t||null===t?t:"object"==typeof t&&"x"in t&&"y"in t?new x(t.x,t.y):new x(t,i,e)}function P(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function b(t,i){return!t||t instanceof P?t:new P(t,i)}function T(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function z(t,i){return t instanceof T?t:new T(t,i)}function M(t,i,e){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=+t,this.lng=+i,void 0!==e&&(this.alt=+e)}function C(t,i,e){return t instanceof M?t:oi(t)&&"object"!=typeof t[0]?3===t.length?new M(t[0],t[1],t[2]):2===t.length?new M(t[0],t[1]):null:void 0===t||null===t?t:"object"==typeof t&&"lat"in t?new M(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===i?null:new M(t,i,e)}function S(t,i,e,n){if(oi(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=i,this._c=e,this._d=n}function Z(t,i,e,n){return new S(t,i,e,n)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t,i){var e,n,o,s,r,a,h="";for(e=0,o=t.length;e<o;e++){for(n=0,s=(r=t[e]).length;n<s;n++)a=r[n],h+=(n?"L":"M")+a.x+" "+a.y;h+=i?Ji?"z":"x":""}return h||"M0 0"}function B(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}function A(t,i,e,n){return"touchstart"===i?O(t,e,n):"touchmove"===i?W(t,e,n):"touchend"===i&&H(t,e,n),this}function I(t,i,e){var n=t["_leaflet_"+i+e];return"touchstart"===i?t.removeEventListener(te,n,!1):"touchmove"===i?t.removeEventListener(ie,n,!1):"touchend"===i&&(t.removeEventListener(ee,n,!1),t.removeEventListener(ne,n,!1)),this}function O(t,i,n){var o=e(function(t){if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(oe.indexOf(t.target.tagName)<0))return;Pt(t)}j(t,i)});t["_leaflet_touchstart"+n]=o,t.addEventListener(te,o,!1),re||(document.documentElement.addEventListener(te,R,!0),document.documentElement.addEventListener(ie,N,!0),document.documentElement.addEventListener(ee,D,!0),document.documentElement.addEventListener(ne,D,!0),re=!0)}function R(t){se[t.pointerId]=t,ae++}function N(t){se[t.pointerId]&&(se[t.pointerId]=t)}function D(t){delete se[t.pointerId],ae--}function j(t,i){t.touches=[];for(var e in se)t.touches.push(se[e]);t.changedTouches=[t],i(t)}function W(t,i,e){var n=function(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&j(t,i)};t["_leaflet_touchmove"+e]=n,t.addEventListener(ie,n,!1)}function H(t,i,e){var n=function(t){j(t,i)};t["_leaflet_touchend"+e]=n,t.addEventListener(ee,n,!1),t.addEventListener(ne,n,!1)}function F(t,i,e){function n(t){var i;if(Vi){if(!bi||"mouse"===t.pointerType)return;i=ae}else i=t.touches.length;if(!(i>1)){var e=Date.now(),n=e-(s||e);r=t.touches?t.touches[0]:t,a=n>0&&n<=h,s=e}}function o(t){if(a&&!r.cancelBubble){if(Vi){if(!bi||"mouse"===t.pointerType)return;var e,n,o={};for(n in r)e=r[n],o[n]=e&&e.bind?e.bind(r):e;r=o}r.type="dblclick",i(r),s=null}}var s,r,a=!1,h=250;return t[le+he+e]=n,t[le+ue+e]=o,t[le+"dblclick"+e]=i,t.addEventListener(he,n,!1),t.addEventListener(ue,o,!1),t.addEventListener("dblclick",i,!1),this}function U(t,i){var e=t[le+he+i],n=t[le+ue+i],o=t[le+"dblclick"+i];return t.removeEventListener(he,e,!1),t.removeEventListener(ue,n,!1),bi||t.removeEventListener("dblclick",o,!1),this}function V(t){return"string"==typeof t?document.getElementById(t):t}function q(t,i){var e=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!e||"auto"===e)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);e=n?n[i]:null}return"auto"===e?null:e}function G(t,i,e){var n=document.createElement(t);return n.className=i||"",e&&e.appendChild(n),n}function K(t){var i=t.parentNode;i&&i.removeChild(t)}function Y(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function X(t){var i=t.parentNode;i&&i.lastChild!==t&&i.appendChild(t)}function J(t){var i=t.parentNode;i&&i.firstChild!==t&&i.insertBefore(t,i.firstChild)}function $(t,i){if(void 0!==t.classList)return t.classList.contains(i);var e=et(t);return e.length>0&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e)}function Q(t,i){if(void 0!==t.classList)for(var e=u(i),n=0,o=e.length;n<o;n++)t.classList.add(e[n]);else if(!$(t,i)){var s=et(t);it(t,(s?s+" ":"")+i)}}function tt(t,i){void 0!==t.classList?t.classList.remove(i):it(t,h((" "+et(t)+" ").replace(" "+i+" "," ")))}function it(t,i){void 0===t.className.baseVal?t.className=i:t.className.baseVal=i}function et(t){return t.correspondingElement&&(t=t.correspondingElement),void 0===t.className.baseVal?t.className:t.className.baseVal}function nt(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&ot(t,i)}function ot(t,i){var e=!1,n="DXImageTransform.Microsoft.Alpha";try{e=t.filters.item(n)}catch(t){if(1===i)return}i=Math.round(100*i),e?(e.Enabled=100!==i,e.Opacity=i):t.style.filter+=" progid:"+n+"(opacity="+i+")"}function st(t){for(var i=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in i)return t[e];return!1}function rt(t,i,e){var n=i||new x(0,0);t.style[ce]=(Ri?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(e?" scale("+e+")":"")}function at(t,i){t._leaflet_pos=i,ji?rt(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}function ht(t){return t._leaflet_pos||new x(0,0)}function ut(){mt(window,"dragstart",Pt)}function lt(){ft(window,"dragstart",Pt)}function ct(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(_t(),me=t,fe=t.style.outline,t.style.outline="none",mt(window,"keydown",_t))}function _t(){me&&(me.style.outline=fe,me=void 0,fe=void 0,ft(window,"keydown",_t))}function dt(t){do{t=t.parentNode}while(!(t.offsetWidth&&t.offsetHeight||t===document.body));return t}function pt(t){var i=t.getBoundingClientRect();return{x:i.width/t.offsetWidth||1,y:i.height/t.offsetHeight||1,boundingClientRect:i}}function mt(t,i,e,n){if("object"==typeof i)for(var o in i)gt(t,o,i[o],e);else for(var s=0,r=(i=u(i)).length;s<r;s++)gt(t,i[s],e,n);return this}function ft(t,i,e,n){if("object"==typeof i)for(var o in i)vt(t,o,i[o],e);else if(i)for(var s=0,r=(i=u(i)).length;s<r;s++)vt(t,i[s],e,n);else{for(var a in t[ye])vt(t,a,t[ye][a]);delete t[ye]}return this}function gt(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):"");if(t[ye]&&t[ye][s])return this;var r=function(i){return e.call(o||t,i||window.event)},a=r;Vi&&0===i.indexOf("touch")?A(t,i,r,s):!qi||"dblclick"!==i||!F||Vi&&Ei?"addEventListener"in t?"mousewheel"===i?t.addEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):"mouseenter"===i||"mouseleave"===i?(r=function(i){i=i||window.event,Ct(t,i)&&a(i)},t.addEventListener("mouseenter"===i?"mouseover":"mouseout",r,!1)):("click"===i&&zi&&(r=function(t){St(t,a)}),t.addEventListener(i,r,!1)):"attachEvent"in t&&t.attachEvent("on"+i,r):F(t,r,s),t[ye]=t[ye]||{},t[ye][s]=r}function vt(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):""),r=t[ye]&&t[ye][s];if(!r)return this;Vi&&0===i.indexOf("touch")?I(t,i,s):!qi||"dblclick"!==i||!U||Vi&&Ei?"removeEventListener"in t?"mousewheel"===i?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):t.removeEventListener("mouseenter"===i?"mouseover":"mouseleave"===i?"mouseout":i,r,!1):"detachEvent"in t&&t.detachEvent("on"+i,r):U(t,s),t[ye][s]=null}function yt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,Mt(t),this}function xt(t){return gt(t,"mousewheel",yt),this}function wt(t){return mt(t,"mousedown touchstart dblclick",yt),gt(t,"click",zt),this}function Pt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Lt(t){return Pt(t),yt(t),this}function bt(t,i){if(!i)return new x(t.clientX,t.clientY);var e=pt(i),n=e.boundingClientRect;return new x((t.clientX-n.left)/e.x-i.clientLeft,(t.clientY-n.top)/e.y-i.clientTop)}function Tt(t){return bi?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/xe:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function zt(t){we[t.type]=!0}function Mt(t){var i=we[t.type];return we[t.type]=!1,i}function Ct(t,i){var e=i.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}function St(t,i){var e=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=ge&&e-ge;n&&n>100&&n<500||t.target._simulatedClick&&!t._simulated?Lt(t):(ge=e,i(t))}function Zt(t,i){if(!i||!t.length)return t.slice();var e=i*i;return t=At(t,e),t=kt(t,e)}function Et(t,i,e){return Math.sqrt(Dt(t,i,e,!0))}function kt(t,i){var e=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(e);n[0]=n[e-1]=1,Bt(t,n,i,0,e-1);var o,s=[];for(o=0;o<e;o++)n[o]&&s.push(t[o]);return s}function Bt(t,i,e,n,o){var s,r,a,h=0;for(r=n+1;r<=o-1;r++)(a=Dt(t[r],t[n],t[o],!0))>h&&(s=r,h=a);h>e&&(i[s]=1,Bt(t,i,e,n,s),Bt(t,i,e,s,o))}function At(t,i){for(var e=[t[0]],n=1,o=0,s=t.length;n<s;n++)Nt(t[n],t[o])>i&&(e.push(t[n]),o=n);return o<s-1&&e.push(t[s-1]),e}function It(t,i,e,n,o){var s,r,a,h=n?ke:Rt(t,e),u=Rt(i,e);for(ke=u;;){if(!(h|u))return[t,i];if(h&u)return!1;a=Rt(r=Ot(t,i,s=h||u,e,o),e),s===h?(t=r,h=a):(i=r,u=a)}}function Ot(t,i,e,n,o){var s,r,a=i.x-t.x,h=i.y-t.y,u=n.min,l=n.max;return 8&e?(s=t.x+a*(l.y-t.y)/h,r=l.y):4&e?(s=t.x+a*(u.y-t.y)/h,r=u.y):2&e?(s=l.x,r=t.y+h*(l.x-t.x)/a):1&e&&(s=u.x,r=t.y+h*(u.x-t.x)/a),new x(s,r,o)}function Rt(t,i){var e=0;return t.x<i.min.x?e|=1:t.x>i.max.x&&(e|=2),t.y<i.min.y?e|=4:t.y>i.max.y&&(e|=8),e}function Nt(t,i){var e=i.x-t.x,n=i.y-t.y;return e*e+n*n}function Dt(t,i,e,n){var o,s=i.x,r=i.y,a=e.x-s,h=e.y-r,u=a*a+h*h;return u>0&&((o=((t.x-s)*a+(t.y-r)*h)/u)>1?(s=e.x,r=e.y):o>0&&(s+=a*o,r+=h*o)),a=t.x-s,h=t.y-r,n?a*a+h*h:new x(s,r)}function jt(t){return!oi(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function Wt(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),jt(t)}function Ht(t,i,e){var n,o,s,r,a,h,u,l,c,_=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=Rt(t[o],i);for(r=0;r<4;r++){for(l=_[r],n=[],o=0,s=(u=t.length)-1;o<u;s=o++)a=t[o],h=t[s],a._code&l?h._code&l||((c=Ot(h,a,l,i,e))._code=Rt(c,i),n.push(c)):(h._code&l&&((c=Ot(h,a,l,i,e))._code=Rt(c,i),n.push(c)),n.push(a));t=n}return t}function Ft(t,i){var e,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],u=i&&i.pointToLayer,l=i&&i.coordsToLatLng||Ut;if(!a&&!r)return null;switch(r.type){case"Point":return e=l(a),u?u(t,e):new $e(e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)e=l(a[o]),h.push(u?u(t,e):new $e(e));return new Ke(h);case"LineString":case"MultiLineString":return n=Vt(a,"LineString"===r.type?0:1,l),new nn(n,i);case"Polygon":case"MultiPolygon":return n=Vt(a,"Polygon"===r.type?1:2,l),new on(n,i);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=Ft({geometry:r.geometries[o],type:"Feature",properties:t.properties},i);c&&h.push(c)}return new Ke(h);default:throw new Error("Invalid GeoJSON object.")}}function Ut(t){return new M(t[1],t[0],t[2])}function Vt(t,i,e){for(var n,o=[],s=0,r=t.length;s<r;s++)n=i?Vt(t[s],i-1,e):(e||Ut)(t[s]),o.push(n);return o}function qt(t,i){return i="number"==typeof i?i:6,void 0!==t.alt?[a(t.lng,i),a(t.lat,i),a(t.alt,i)]:[a(t.lng,i),a(t.lat,i)]}function Gt(t,i,e,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(i?Gt(t[s],i-1,e,n):qt(t[s],n));return!i&&e&&o.push(o[0]),o}function Kt(t,e){return t.feature?i({},t.feature,{geometry:e}):Yt(e)}function Yt(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}function Xt(t,i){return new sn(t,i)}function Jt(t,i){return new mn(t,i)}function $t(t){return Xi?new vn(t):null}function Qt(t){return Ji||$i?new Pn(t):null}var ti=Object.freeze;Object.freeze=function(t){return t};var ii=Object.create||function(){function t(){}return function(i){return t.prototype=i,new t}}(),ei=0,ni=/\{ *([\w_-]+) *\}/g,oi=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},si="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",ri=0,ai=window.requestAnimationFrame||p("RequestAnimationFrame")||m,hi=window.cancelAnimationFrame||p("CancelAnimationFrame")||p("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)},ui=(Object.freeze||Object)({freeze:ti,extend:i,create:ii,bind:e,lastId:ei,stamp:n,throttle:o,wrapNum:s,falseFn:r,formatNum:a,trim:h,splitWords:u,setOptions:l,getParamString:c,template:_,isArray:oi,indexOf:d,emptyImageUrl:si,requestFn:ai,cancelFn:hi,requestAnimFrame:f,cancelAnimFrame:g});v.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},n=e.__super__=this.prototype,o=ii(n);o.constructor=e,e.prototype=o;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&"__super__"!==s&&(e[s]=this[s]);return t.statics&&(i(e,t.statics),delete t.statics),t.includes&&(y(t.includes),i.apply(null,[o].concat(t.includes)),delete t.includes),o.options&&(t.options=i(ii(o.options),t.options)),i(o,t),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=o._initHooks.length;t<i;t++)o._initHooks[t].call(this)}},e},v.include=function(t){return i(this.prototype,t),this},v.mergeOptions=function(t){return i(this.prototype.options,t),this},v.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};var li={on:function(t,i,e){if("object"==typeof t)for(var n in t)this._on(n,t[n],i);else for(var o=0,s=(t=u(t)).length;o<s;o++)this._on(t[o],i,e);return this},off:function(t,i,e){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],i);else for(var o=0,s=(t=u(t)).length;o<s;o++)this._off(t[o],i,e);else delete this._events;return this},_on:function(t,i,e){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),e===this&&(e=void 0);for(var o={fn:i,ctx:e},s=n,r=0,a=s.length;r<a;r++)if(s[r].fn===i&&s[r].ctx===e)return;s.push(o)},_off:function(t,i,e){var n,o,s;if(this._events&&(n=this._events[t]))if(i){if(e===this&&(e=void 0),n)for(o=0,s=n.length;o<s;o++){var a=n[o];if(a.ctx===e&&a.fn===i)return a.fn=r,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(o,1)}}else{for(o=0,s=n.length;o<s;o++)n[o].fn=r;delete this._events[t]}},fire:function(t,e,n){if(!this.listens(t,n))return this;var o=i({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var r=0,a=s.length;r<a;r++){var h=s[r];h.fn.call(h.ctx||this,o)}this._firingCount--}}return n&&this._propagateEvent(o),this},listens:function(t,i){var e=this._events&&this._events[t];if(e&&e.length)return!0;if(i)for(var n in this._eventParents)if(this._eventParents[n].listens(t,i))return!0;return!1},once:function(t,i,n){if("object"==typeof t){for(var o in t)this.once(o,t[o],i);return this}var s=e(function(){this.off(t,i,n).off(t,s,n)},this);return this.on(t,i,n).on(t,s,n)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[n(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[n(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,i({layer:t.target,propagatedFrom:t.target},t),!0)}};li.addEventListener=li.on,li.removeEventListener=li.clearAllEventListeners=li.off,li.addOneTimeEventListener=li.once,li.fireEvent=li.fire,li.hasEventListeners=li.listens;var ci=v.extend(li),_i=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};x.prototype={clone:function(){return new x(this.x,this.y)},add:function(t){return this.clone()._add(w(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(w(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new x(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new x(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=_i(this.x),this.y=_i(this.y),this},distanceTo:function(t){var i=(t=w(t)).x-this.x,e=t.y-this.y;return Math.sqrt(i*i+e*e)},equals:function(t){return(t=w(t)).x===this.x&&t.y===this.y},contains:function(t){return t=w(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+a(this.x)+", "+a(this.y)+")"}},P.prototype={extend:function(t){return t=w(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new x((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new x(this.min.x,this.max.y)},getTopRight:function(){return new x(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,e;return(t="number"==typeof t[0]||t instanceof x?w(t):b(t))instanceof P?(i=t.min,e=t.max):i=e=t,i.x>=this.min.x&&e.x<=this.max.x&&i.y>=this.min.y&&e.y<=this.max.y},intersects:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>=i.x&&n.x<=e.x,r=o.y>=i.y&&n.y<=e.y;return s&&r},overlaps:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>i.x&&n.x<e.x,r=o.y>i.y&&n.y<e.y;return s&&r},isValid:function(){return!(!this.min||!this.max)}},T.prototype={extend:function(t){var i,e,n=this._southWest,o=this._northEast;if(t instanceof M)i=t,e=t;else{if(!(t instanceof T))return t?this.extend(C(t)||z(t)):this;if(i=t._southWest,e=t._northEast,!i||!e)return this}return n||o?(n.lat=Math.min(i.lat,n.lat),n.lng=Math.min(i.lng,n.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new M(i.lat,i.lng),this._northEast=new M(e.lat,e.lng)),this},pad:function(t){var i=this._southWest,e=this._northEast,n=Math.abs(i.lat-e.lat)*t,o=Math.abs(i.lng-e.lng)*t;return new T(new M(i.lat-n,i.lng-o),new M(e.lat+n,e.lng+o))},getCenter:function(){return new M((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new M(this.getNorth(),this.getWest())},getSouthEast:function(){return new M(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof M||"lat"in t?C(t):z(t);var i,e,n=this._southWest,o=this._northEast;return t instanceof T?(i=t.getSouthWest(),e=t.getNorthEast()):i=e=t,i.lat>=n.lat&&e.lat<=o.lat&&i.lng>=n.lng&&e.lng<=o.lng},intersects:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=i.lat&&n.lat<=e.lat,r=o.lng>=i.lng&&n.lng<=e.lng;return s&&r},overlaps:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>i.lat&&n.lat<e.lat,r=o.lng>i.lng&&n.lng<e.lng;return s&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,i){return!!t&&(t=z(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i))},isValid:function(){return!(!this._southWest||!this._northEast)}},M.prototype={equals:function(t,i){return!!t&&(t=C(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===i?1e-9:i))},toString:function(t){return"LatLng("+a(this.lat,t)+", "+a(this.lng,t)+")"},distanceTo:function(t){return pi.distance(this,C(t))},wrap:function(){return pi.wrapLatLng(this)},toBounds:function(t){var i=180*t/40075017,e=i/Math.cos(Math.PI/180*this.lat);return z([this.lat-i,this.lng-e],[this.lat+i,this.lng+e])},clone:function(){return new M(this.lat,this.lng,this.alt)}};var di={latLngToPoint:function(t,i){var e=this.projection.project(t),n=this.scale(i);return this.transformation._transform(e,n)},pointToLatLng:function(t,i){var e=this.scale(i),n=this.transformation.untransform(t,e);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,e=this.scale(t);return new P(this.transformation.transform(i.min,e),this.transformation.transform(i.max,e))},infinite:!1,wrapLatLng:function(t){var i=this.wrapLng?s(t.lng,this.wrapLng,!0):t.lng;return new M(this.wrapLat?s(t.lat,this.wrapLat,!0):t.lat,i,t.alt)},wrapLatLngBounds:function(t){var i=t.getCenter(),e=this.wrapLatLng(i),n=i.lat-e.lat,o=i.lng-e.lng;if(0===n&&0===o)return t;var s=t.getSouthWest(),r=t.getNorthEast();return new T(new M(s.lat-n,s.lng-o),new M(r.lat-n,r.lng-o))}},pi=i({},di,{wrapLng:[-180,180],R:6371e3,distance:function(t,i){var e=Math.PI/180,n=t.lat*e,o=i.lat*e,s=Math.sin((i.lat-t.lat)*e/2),r=Math.sin((i.lng-t.lng)*e/2),a=s*s+Math.cos(n)*Math.cos(o)*r*r,h=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*h}}),mi={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,e=this.MAX_LATITUDE,n=Math.max(Math.min(e,t.lat),-e),o=Math.sin(n*i);return new x(this.R*t.lng*i,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var i=180/Math.PI;return new M((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:function(){var t=6378137*Math.PI;return new P([-t,-t],[t,t])}()};S.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new x((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};var fi,gi,vi,yi=i({},pi,{code:"EPSG:3857",projection:mi,transformation:function(){var t=.5/(Math.PI*mi.R);return Z(t,.5,-t,.5)}()}),xi=i({},yi,{code:"EPSG:900913"}),wi=document.documentElement.style,Pi="ActiveXObject"in window,Li=Pi&&!document.addEventListener,bi="msLaunchUri"in navigator&&!("documentMode"in document),Ti=B("webkit"),zi=B("android"),Mi=B("android 2")||B("android 3"),Ci=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Si=zi&&B("Google")&&Ci<537&&!("AudioNode"in window),Zi=!!window.opera,Ei=B("chrome"),ki=B("gecko")&&!Ti&&!Zi&&!Pi,Bi=!Ei&&B("safari"),Ai=B("phantom"),Ii="OTransition"in wi,Oi=0===navigator.platform.indexOf("Win"),Ri=Pi&&"transition"in wi,Ni="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Mi,Di="MozPerspective"in wi,ji=!window.L_DISABLE_3D&&(Ri||Ni||Di)&&!Ii&&!Ai,Wi="undefined"!=typeof orientation||B("mobile"),Hi=Wi&&Ti,Fi=Wi&&Ni,Ui=!window.PointerEvent&&window.MSPointerEvent,Vi=!(!window.PointerEvent&&!Ui),qi=!window.L_NO_TOUCH&&(Vi||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),Gi=Wi&&Zi,Ki=Wi&&ki,Yi=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Xi=!!document.createElement("canvas").getContext,Ji=!(!document.createElementNS||!E("svg").createSVGRect),$i=!Ji&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}(),Qi=(Object.freeze||Object)({ie:Pi,ielt9:Li,edge:bi,webkit:Ti,android:zi,android23:Mi,androidStock:Si,opera:Zi,chrome:Ei,gecko:ki,safari:Bi,phantom:Ai,opera12:Ii,win:Oi,ie3d:Ri,webkit3d:Ni,gecko3d:Di,any3d:ji,mobile:Wi,mobileWebkit:Hi,mobileWebkit3d:Fi,msPointer:Ui,pointer:Vi,touch:qi,mobileOpera:Gi,mobileGecko:Ki,retina:Yi,canvas:Xi,svg:Ji,vml:$i}),te=Ui?"MSPointerDown":"pointerdown",ie=Ui?"MSPointerMove":"pointermove",ee=Ui?"MSPointerUp":"pointerup",ne=Ui?"MSPointerCancel":"pointercancel",oe=["INPUT","SELECT","OPTION"],se={},re=!1,ae=0,he=Ui?"MSPointerDown":Vi?"pointerdown":"touchstart",ue=Ui?"MSPointerUp":Vi?"pointerup":"touchend",le="_leaflet_",ce=st(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),_e=st(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),de="webkitTransition"===_e||"OTransition"===_e?_e+"End":"transitionend";if("onselectstart"in document)fi=function(){mt(window,"selectstart",Pt)},gi=function(){ft(window,"selectstart",Pt)};else{var pe=st(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);fi=function(){if(pe){var t=document.documentElement.style;vi=t[pe],t[pe]="none"}},gi=function(){pe&&(document.documentElement.style[pe]=vi,vi=void 0)}}var me,fe,ge,ve=(Object.freeze||Object)({TRANSFORM:ce,TRANSITION:_e,TRANSITION_END:de,get:V,getStyle:q,create:G,remove:K,empty:Y,toFront:X,toBack:J,hasClass:$,addClass:Q,removeClass:tt,setClass:it,getClass:et,setOpacity:nt,testProp:st,setTransform:rt,setPosition:at,getPosition:ht,disableTextSelection:fi,enableTextSelection:gi,disableImageDrag:ut,enableImageDrag:lt,preventOutline:ct,restoreOutline:_t,getSizedParentNode:dt,getScale:pt}),ye="_leaflet_events",xe=Oi&&Ei?2*window.devicePixelRatio:ki?window.devicePixelRatio:1,we={},Pe=(Object.freeze||Object)({on:mt,off:ft,stopPropagation:yt,disableScrollPropagation:xt,disableClickPropagation:wt,preventDefault:Pt,stop:Lt,getMousePosition:bt,getWheelDelta:Tt,fakeStop:zt,skipped:Mt,isExternalTarget:Ct,addListener:mt,removeListener:ft}),Le=ci.extend({run:function(t,i,e,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=ht(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=f(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,e=1e3*this._duration;i<e?this._runFrame(this._easeOut(i/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var e=this._startPos.add(this._offset.multiplyBy(t));i&&e._round(),at(this._el,e),this.fire("step")},_complete:function(){g(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),be=ci.extend({options:{crs:yi,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,i){i=l(this,i),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=e(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),void 0!==i.zoom&&(this._zoom=this._limitZoom(i.zoom)),i.center&&void 0!==i.zoom&&this.setView(C(i.center),i.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=_e&&ji&&!Gi&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),mt(this._proxy,de,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){return e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(C(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&!0!==n&&(void 0!==n.animate&&(n.zoom=i({animate:n.animate},n.zoom),n.pan=i({animate:n.animate,duration:n.duration},n.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan))?(clearTimeout(this._sizeTimer),this):(this._resetView(t,e),this)},setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},zoomIn:function(t,i){return t=t||(ji?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},zoomOut:function(t,i){return t=t||(ji?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},setZoomAround:function(t,i,e){var n=this.getZoomScale(i),o=this.getSize().divideBy(2),s=(t instanceof x?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),r=this.containerPointToLatLng(o.add(s));return this.setView(r,i,{zoom:e})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():z(t);var e=w(i.paddingTopLeft||i.padding||[0,0]),n=w(i.paddingBottomRight||i.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(n));if((o="number"==typeof i.maxZoom?Math.min(i.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(e).divideBy(2),r=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(r.add(a).divideBy(2).add(s),o),zoom:o}},fitBounds:function(t,i){if(!(t=z(t)).isValid())throw new Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,i);return this.setView(e.center,e.zoom,i)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,i){return this.setView(t,this._zoom,{pan:i})},panBy:function(t,i){if(t=w(t).round(),i=i||{},!t.x&&!t.y)return this.fire("moveend");if(!0!==i.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Le,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),!1!==i.animate){Q(this._mapPane,"leaflet-pan-anim");var e=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,e,i.duration||.25,i.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,i,e){function n(t){var i=(g*g-m*m+(t?-1:1)*x*x*v*v)/(2*(t?g:m)*x*v),e=Math.sqrt(i*i+1)-i;return e<1e-9?-18:Math.log(e)}function o(t){return(Math.exp(t)-Math.exp(-t))/2}function s(t){return(Math.exp(t)+Math.exp(-t))/2}function r(t){return o(t)/s(t)}function a(t){return m*(s(w)/s(w+y*t))}function h(t){return m*(s(w)*r(w+y*t)-o(w))/x}function u(t){return 1-Math.pow(1-t,1.5)}function l(){var e=(Date.now()-P)/b,n=u(e)*L;e<=1?(this._flyToFrame=f(l,this),this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n)/v)),p),this.getScaleZoom(m/a(n),p),{flyTo:!0})):this._move(t,i)._moveEnd(!0)}if(!1===(e=e||{}).animate||!ji)return this.setView(t,i,e);this._stop();var c=this.project(this.getCenter()),_=this.project(t),d=this.getSize(),p=this._zoom;t=C(t),i=void 0===i?p:i;var m=Math.max(d.x,d.y),g=m*this.getZoomScale(p,i),v=_.distanceTo(c)||1,y=1.42,x=y*y,w=n(0),P=Date.now(),L=(n(1)-w)/y,b=e.duration?1e3*e.duration:1e3*L*.8;return this._moveStart(!0,e.noMoveStart),l.call(this),this},flyToBounds:function(t,i){var e=this._getBoundsCenterZoom(t,i);return this.flyTo(e.center,e.zoom,i)},setMaxBounds:function(t){return(t=z(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){var i=this.options.minZoom;return this.options.minZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var i=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,i){this._enforcingBounds=!0;var e=this.getCenter(),n=this._limitCenter(e,this._zoom,z(t));return e.equals(n)||this.panTo(n,i),this._enforcingBounds=!1,this},panInside:function(t,i){var e=w((i=i||{}).paddingTopLeft||i.padding||[0,0]),n=w(i.paddingBottomRight||i.padding||[0,0]),o=this.getCenter(),s=this.project(o),r=this.project(t),a=this.getPixelBounds(),h=a.getSize().divideBy(2),u=b([a.min.add(e),a.max.subtract(n)]);if(!u.contains(r)){this._enforcingBounds=!0;var l=s.subtract(r),c=w(r.x+l.x,r.y+l.y);(r.x<u.min.x||r.x>u.max.x)&&(c.x=s.x-l.x,l.x>0?c.x+=h.x-e.x:c.x-=h.x-n.x),(r.y<u.min.y||r.y>u.max.y)&&(c.y=s.y-l.y,l.y>0?c.y+=h.y-e.y:c.y-=h.y-n.y),this.panTo(this.unproject(c),i),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=i({animate:!1,pan:!0},!0===t?{animate:!0}:t);var n=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var o=this.getSize(),s=n.divideBy(2).round(),r=o.divideBy(2).round(),a=s.subtract(r);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(e(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:n,newSize:o})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=i({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var n=e(this._handleGeolocationResponse,this),o=e(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(n,o,t):navigator.geolocation.getCurrentPosition(n,o,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var i=t.code,e=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+e+"."})},_handleGeolocationResponse:function(t){var i=new M(t.coords.latitude,t.coords.longitude),e=i.toBounds(2*t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(e);this.setView(i,n.maxZoom?Math.min(o,n.maxZoom):o)}var s={latlng:i,bounds:e,timestamp:t.timestamp};for(var r in t.coords)"number"==typeof t.coords[r]&&(s[r]=t.coords[r]);this.fire("locationfound",s)},addHandler:function(t,i){if(!i)return this;var e=this[t]=new i(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),K(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(g(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)K(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,i){var e=G("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new T(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,i,e){t=z(t),e=w(e||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(e),u=b(this.project(a,n),this.project(r,n)).getSize(),l=ji?this.options.zoomSnap:1,c=h.x/u.x,_=h.y/u.y,d=i?Math.max(c,_):Math.min(c,_);return n=this.getScaleZoom(d,n),l&&(n=Math.round(n/(l/100))*(l/100),n=i?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new x(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,i){var e=this._getTopLeftPoint(t,i);return new P(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,i){var e=this.options.crs;return i=void 0===i?this._zoom:i,e.scale(t)/e.scale(i)},getScaleZoom:function(t,i){var e=this.options.crs;i=void 0===i?this._zoom:i;var n=e.zoom(t*e.scale(i));return isNaN(n)?1/0:n},project:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.latLngToPoint(C(t),i)},unproject:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.pointToLatLng(w(t),i)},layerPointToLatLng:function(t){var i=w(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){return this.project(C(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(C(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(z(t))},distance:function(t,i){return this.options.crs.distance(C(t),C(i))},containerPointToLayerPoint:function(t){return w(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return w(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(w(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))},mouseEventToContainerPoint:function(t){return bt(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=V(t);if(!i)throw new Error("Map container not found.");if(i._leaflet_id)throw new Error("Map container is already initialized.");mt(i,"scroll",this._onScroll,this),this._containerId=n(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&ji,Q(t,"leaflet-container"+(qi?" leaflet-touch":"")+(Yi?" leaflet-retina":"")+(Li?" leaflet-oldie":"")+(Bi?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=q(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),at(this._mapPane,new x(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Q(t.markerPane,"leaflet-zoom-hide"),Q(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,i){at(this._mapPane,new x(0,0));var e=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var n=this._zoom!==i;this._moveStart(n,!1)._move(t,i)._moveEnd(n),this.fire("viewreset"),e&&this.fire("load")},_moveStart:function(t,i){return t&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(t,i,e){void 0===i&&(i=this._zoom);var n=this._zoom!==i;return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||e&&e.pinch)&&this.fire("zoom",e),this.fire("move",e)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return g(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){at(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[n(this._container)]=this;var i=t?ft:mt;i(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),ji&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){g(this._resizeRequest),this._resizeRequest=f(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var e,o=[],s="mouseout"===i||"mouseover"===i,r=t.target||t.srcElement,a=!1;r;){if((e=this._targets[n(r)])&&("click"===i||"preclick"===i)&&!t._simulated&&this._draggableMoved(e)){a=!0;break}if(e&&e.listens(i,!0)){if(s&&!Ct(r,t))break;if(o.push(e),s)break}if(r===this._container)break;r=r.parentNode}return o.length||a||s||!Ct(r,t)||(o=[this]),o},_handleDOMEvent:function(t){if(this._loaded&&!Mt(t)){var i=t.type;"mousedown"!==i&&"keypress"!==i||ct(t.target||t.srcElement),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,n){if("click"===t.type){var o=i({},t);o.type="preclick",this._fireDOMEvent(o,o.type,n)}if(!t._stopped&&(n=(n||[]).concat(this._findEventTargets(t,e))).length){var s=n[0];"contextmenu"===e&&s.listens(e,!0)&&Pt(t);var r={originalEvent:t};if("keypress"!==t.type){var a=s.getLatLng&&(!s._radius||s._radius<=10);r.containerPoint=a?this.latLngToContainerPoint(s.getLatLng()):this.mouseEventToContainerPoint(t),r.layerPoint=this.containerPointToLayerPoint(r.containerPoint),r.latlng=a?s.getLatLng():this.layerPointToLatLng(r.layerPoint)}for(var h=0;h<n.length;h++)if(n[h].fire(e,r,!0),r.originalEvent._stopped||!1===n[h].options.bubblingMouseEvents&&-1!==d(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},_getMapPanePos:function(){return ht(this._mapPane)||new x(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){return(t&&void 0!==i?this._getNewPixelOrigin(t,i):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var e=this.getSize()._divideBy(2);return this.project(t,i)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return this.project(t,i)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return b([this.project(t.getSouthWest(),i)._subtract(n),this.project(t.getNorthWest(),i)._subtract(n),this.project(t.getSouthEast(),i)._subtract(n),this.project(t.getNorthEast(),i)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,i,e){if(!e)return t;var n=this.project(t,i),o=this.getSize().divideBy(2),s=new P(n.subtract(o),n.add(o)),r=this._getBoundsOffset(s,e,i);return r.round().equals([0,0])?t:this.unproject(n.add(r),i)},_limitOffset:function(t,i){if(!i)return t;var e=this.getPixelBounds(),n=new P(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(n,i))},_getBoundsOffset:function(t,i,e){var n=b(this.project(i.getNorthEast(),e),this.project(i.getSouthWest(),e)),o=n.min.subtract(t.min),s=n.max.subtract(t.max);return new x(this._rebound(o.x,-s.x),this._rebound(o.y,-s.y))},_rebound:function(t,i){return t+i>0?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),e=this.getMaxZoom(),n=ji?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(i,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){tt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){var e=this._getCenterOffset(t)._trunc();return!(!0!==(i&&i.animate)&&!this.getSize().contains(e))&&(this.panBy(e,i),!0)},_createAnimProxy:function(){var t=this._proxy=G("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var i=ce,e=this._proxy.style[i];rt(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",function(){var t=this.getCenter(),i=this.getZoom();rt(this._proxy,this.project(t,i),this.getZoomScale(i,1))},this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){K(this._proxy),delete this._proxy},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,e){if(this._animatingZoom)return!0;if(e=e||{},!this._zoomAnimated||!1===e.animate||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(i),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==e.animate&&!this.getSize().contains(o))&&(f(function(){this._moveStart(!0,!1)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,n,o){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=i,Q(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:i,noUpdate:o}),setTimeout(e(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&tt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),f(function(){this._moveEnd(!0)},this))}}),Te=v.extend({options:{position:"topright"},initialize:function(t){l(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),e=this.getPosition(),n=t._controlCorners[e];return Q(i,"leaflet-control"),-1!==e.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this},remove:function(){return this._map?(K(this._container),this.onRemove&&this.onRemove(this._map),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),ze=function(t){return new Te(t)};be.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){function t(t,o){var s=e+t+" "+e+o;i[t+o]=G("div",s,n)}var i=this._controlCorners={},e="leaflet-",n=this._controlContainer=G("div",e+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)K(this._controlCorners[t]);K(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Me=Te.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,i,e,n){return e<n?-1:n<e?1:0}},initialize:function(t,i,e){l(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in i)this._addLayer(i[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Te.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(n(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){Q(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(Q(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):tt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return tt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=G("div",t),e=this.options.collapsed;i.setAttribute("aria-haspopup",!0),wt(i),xt(i);var n=this._section=G("section",t+"-list");e&&(this._map.on("click",this.collapse,this),zi||mt(i,{mouseenter:this.expand,mouseleave:this.collapse},this));var o=this._layersLink=G("a",t+"-toggle",i);o.href="#",o.title="Layers",qi?(mt(o,"click",Lt),mt(o,"click",this.expand,this)):mt(o,"focus",this.expand,this),e||this.expand(),this._baseLayersList=G("div",t+"-base",n),this._separator=G("div",t+"-separator",n),this._overlaysList=G("div",t+"-overlays",n),i.appendChild(n)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&n(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,n){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:n}),this.options.sortLayers&&this._layers.sort(e(function(t,i){return this.options.sortFunction(t.layer,i.layer,t.name,i.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Y(this._baseLayersList),Y(this._overlaysList),this._layerControlInputs=[];var t,i,e,n,o=0;for(e=0;e<this._layers.length;e++)n=this._layers[e],this._addItem(n),i=i||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(n(t.target)),e=i.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;e&&this._map.fire(e,i)},_createRadioElement:function(t,i){var e='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=e,n.firstChild},_addItem:function(t){var i,e=document.createElement("label"),o=this._map.hasLayer(t.layer);t.overlay?((i=document.createElement("input")).type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=o):i=this._createRadioElement("leaflet-base-layers",o),this._layerControlInputs.push(i),i.layerId=n(t.layer),mt(i,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var r=document.createElement("div");return e.appendChild(r),r.appendChild(i),r.appendChild(s),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){var t,i,e=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=e.length-1;s>=0;s--)t=e[s],i=this._getLayer(t.layerId).layer,t.checked?n.push(i):t.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,i,e=this._layerControlInputs,n=this._map.getZoom(),o=e.length-1;o>=0;o--)t=e[o],i=this._getLayer(t.layerId).layer,t.disabled=void 0!==i.options.minZoom&&n<i.options.minZoom||void 0!==i.options.maxZoom&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),Ce=Te.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",e=G("div",i+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,i+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,i+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,e,n,o){var s=G("a",e,n);return s.innerHTML=t,s.href="#",s.title=i,s.setAttribute("role","button"),s.setAttribute("aria-label",i),wt(s),mt(s,"click",Lt),mt(s,"click",o,this),mt(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";tt(this._zoomInButton,i),tt(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMinZoom())&&Q(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMaxZoom())&&Q(this._zoomInButton,i)}});be.mergeOptions({zoomControl:!0}),be.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ce,this.addControl(this.zoomControl))});var Se=Te.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var i=G("div","leaflet-control-scale"),e=this.options;return this._addScales(e,"leaflet-control-scale-line",i),t.on(e.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,e){t.metric&&(this._mScale=G("div",i,e)),t.imperial&&(this._iScale=G("div",i,e))},_update:function(){var t=this._map,i=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),e=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,e,i/t)},_updateImperial:function(t){var i,e,n,o=3.2808399*t;o>5280?(i=o/5280,e=this._getRoundNum(i),this._updateScale(this._iScale,e+" mi",e/i)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,i,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),e=t/i;return e=e>=10?10:e>=5?5:e>=3?3:e>=2?2:1,i*e}}),Ze=Te.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){l(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=G("div","leaflet-control-attribution"),wt(this._container);for(var i in t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(" | ")}}});be.mergeOptions({attributionControl:!0}),be.addInitHook(function(){this.options.attributionControl&&(new Ze).addTo(this)});Te.Layers=Me,Te.Zoom=Ce,Te.Scale=Se,Te.Attribution=Ze,ze.layers=function(t,i,e){return new Me(t,i,e)},ze.zoom=function(t){return new Ce(t)},ze.scale=function(t){return new Se(t)},ze.attribution=function(t){return new Ze(t)};var Ee=v.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ee.addTo=function(t,i){return t.addHandler(i,this),this};var ke,Be={Events:li},Ae=qi?"touchstart mousedown":"mousedown",Ie={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},Oe={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},Re=ci.extend({options:{clickTolerance:3},initialize:function(t,i,e,n){l(this,n),this._element=t,this._dragStartTarget=i||t,this._preventOutline=e},enable:function(){this._enabled||(mt(this._dragStartTarget,Ae,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Re._dragging===this&&this.finishDrag(),ft(this._dragStartTarget,Ae,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!$(this._element,"leaflet-zoom-anim")&&!(Re._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(Re._dragging=this,this._preventOutline&&ct(this._element),ut(),fi(),this._moving)))){this.fire("down");var i=t.touches?t.touches[0]:t,e=dt(this._element);this._startPoint=new x(i.clientX,i.clientY),this._parentScale=pt(e),mt(document,Oe[t.type],this._onMove,this),mt(document,Ie[t.type],this._onUp,this)}},_onMove:function(t){if(!t._simulated&&this._enabled)if(t.touches&&t.touches.length>1)this._moved=!0;else{var i=t.touches&&1===t.touches.length?t.touches[0]:t,e=new x(i.clientX,i.clientY)._subtract(this._startPoint);(e.x||e.y)&&(Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,Pt(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=ht(this._element).subtract(e),Q(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Q(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,g(this._animRequest),this._lastEvent=t,this._animRequest=f(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),at(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){tt(document.body,"leaflet-dragging"),this._lastTarget&&(tt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in Oe)ft(document,Oe[t],this._onMove,this),ft(document,Ie[t],this._onUp,this);lt(),gi(),this._moved&&this._moving&&(g(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,Re._dragging=!1}}),Ne=(Object.freeze||Object)({simplify:Zt,pointToSegmentDistance:Et,closestPointOnSegment:function(t,i,e){return Dt(t,i,e)},clipSegment:It,_getEdgeIntersection:Ot,_getBitCode:Rt,_sqClosestPointOnSegment:Dt,isFlat:jt,_flat:Wt}),De=(Object.freeze||Object)({clipPolygon:Ht}),je={project:function(t){return new x(t.lng,t.lat)},unproject:function(t){return new M(t.y,t.x)},bounds:new P([-180,-90],[180,90])},We={R:6378137,R_MINOR:6356752.314245179,bounds:new P([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var i=Math.PI/180,e=this.R,n=t.lat*i,o=this.R_MINOR/e,s=Math.sqrt(1-o*o),r=s*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),s/2);return n=-e*Math.log(Math.max(a,1e-10)),new x(t.lng*i*e,n)},unproject:function(t){for(var i,e=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,u=.1;h<15&&Math.abs(u)>1e-7;h++)i=s*Math.sin(a),i=Math.pow((1-i)/(1+i),s/2),a+=u=Math.PI/2-2*Math.atan(r*i)-a;return new M(a*e,t.x*e/n)}},He=(Object.freeze||Object)({LonLat:je,Mercator:We,SphericalMercator:mi}),Fe=i({},pi,{code:"EPSG:3395",projection:We,transformation:function(){var t=.5/(Math.PI*We.R);return Z(t,.5,-t,.5)}()}),Ue=i({},pi,{code:"EPSG:4326",projection:je,transformation:Z(1/180,1,-1/180,.5)}),Ve=i({},di,{projection:je,transformation:Z(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var e=i.lng-t.lng,n=i.lat-t.lat;return Math.sqrt(e*e+n*n)},infinite:!0});di.Earth=pi,di.EPSG3395=Fe,di.EPSG3857=yi,di.EPSG900913=xi,di.EPSG4326=Ue,di.Simple=Ve;var qe=ci.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[n(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[n(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i=t.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var e=this.getEvents();i.on(e,this),this.once("remove",function(){i.off(e,this)},this)}this.onAdd(i),this.getAttribution&&i.attributionControl&&i.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),i.fire("layeradd",{layer:this})}}});be.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var i=n(t);return this._layers[i]?this:(this._layers[i]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var i=n(t);return this._layers[i]?(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return!!t&&n(t)in this._layers},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},_addLayers:function(t){for(var i=0,e=(t=t?oi(t)?t:[t]:[]).length;i<e;i++)this.addLayer(t[i])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[n(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=n(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-1/0,e=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=t===1/0?void 0:t,e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ge=qe.extend({initialize:function(t,i){l(this,i),this._layers={};var e,n;if(t)for(e=0,n=t.length;e<n;e++)this.addLayer(t[e])},addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var i,e,n=Array.prototype.slice.call(arguments,1);for(i in this._layers)(e=this._layers[i])[t]&&e[t].apply(e,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return n(t)}}),Ke=Ge.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ge.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ge.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new T;for(var i in this._layers){var e=this._layers[i];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),Ye=v.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){l(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(e,i&&"IMG"===i.tagName?i:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,i){var e=this.options,n=e[i+"Size"];"number"==typeof n&&(n=[n,n]);var o=w(n),s=w("shadow"===i&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(e.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,i){return i=i||document.createElement("img"),i.src=t,i},_getIconUrl:function(t){return Yi&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),Xe=Ye.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return Xe.imagePath||(Xe.imagePath=this._detectIconPath()),(this.options.imagePath||Xe.imagePath)+Ye.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=G("div","leaflet-default-icon-path",document.body),i=q(t,"background-image")||q(t,"backgroundImage");return document.body.removeChild(t),i=null===i||0!==i.indexOf("url")?"":i.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),Je=Ee.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Re(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Q(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&tt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var i=this._marker,e=i._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=ht(i._icon),r=e.getPixelBounds(),a=e.getPixelOrigin(),h=b(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));if(!h.contains(s)){var u=w((Math.max(h.max.x,s.x)-h.max.x)/(r.max.x-h.max.x)-(Math.min(h.min.x,s.x)-h.min.x)/(r.min.x-h.min.x),(Math.max(h.max.y,s.y)-h.max.y)/(r.max.y-h.max.y)-(Math.min(h.min.y,s.y)-h.min.y)/(r.min.y-h.min.y)).multiplyBy(n);e.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),at(i._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=f(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(g(this._panRequest),this._panRequest=f(this._adjustPan.bind(this,t)))},_onDrag:function(t){var i=this._marker,e=i._shadow,n=ht(i._icon),o=i._map.layerPointToLatLng(n);e&&at(e,n),i._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){g(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),$e=qe.extend({options:{icon:new Xe,interactive:!0,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",bubblingMouseEvents:!1,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,i){l(this,i),this._latlng=C(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var i=this._latlng;return this._latlng=C(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),n=!1;e!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(e.title=t.title),"IMG"===e.tagName&&(e.alt=t.alt||"")),Q(e,i),t.keyboard&&(e.tabIndex="0"),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(Q(o,i),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane("shadowPane").appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),K(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&K(this._shadow),this._shadow=null},_setPos:function(t){at(this._icon,t),this._shadow&&at(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(Q(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Je)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Je(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;nt(this._icon,t),this._shadow&&nt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),Qe=qe.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return l(this,t),this._renderer&&this._renderer._updateStyle(this),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),tn=Qe.extend({options:{fill:!0,radius:10},initialize:function(t,i){l(this,i),this._latlng=C(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=C(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return Qe.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,e=this._clickTolerance(),n=[t+e,i+e];this._pxBounds=new P(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),en=tn.extend({initialize:function(t,e,n){if("number"==typeof e&&(e=i({},n,{radius:e})),l(this,e),this._latlng=C(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new T(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Qe.prototype.setStyle,_project:function(){var t=this._latlng.lng,i=this._latlng.lat,e=this._map,n=e.options.crs;if(n.distance===pi.distance){var o=Math.PI/180,s=this._mRadius/pi.R/o,r=e.project([i+s,t]),a=e.project([i-s,t]),h=r.add(a).divideBy(2),u=e.unproject(h).lat,l=Math.acos((Math.cos(s*o)-Math.sin(i*o)*Math.sin(u*o))/(Math.cos(i*o)*Math.cos(u*o)))/o;(isNaN(l)||0===l)&&(l=s/Math.cos(Math.PI/180*i)),this._point=h.subtract(e.getPixelOrigin()),this._radius=isNaN(l)?0:h.x-e.project([u,t-l]).x,this._radiusY=h.y-r.y}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=e.latLngToLayerPoint(this._latlng),this._radius=this._point.x-e.latLngToLayerPoint(c).x}this._updateBounds()}}),nn=Qe.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,i){l(this,i),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var i,e,n=1/0,o=null,s=Dt,r=0,a=this._parts.length;r<a;r++)for(var h=this._parts[r],u=1,l=h.length;u<l;u++){var c=s(t,i=h[u-1],e=h[u],!0);c<n&&(n=c,o=s(t,i,e))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;for(t=0,i=0;t<h-1;t++)i+=a[t].distanceTo(a[t+1])/2;if(0===i)return this._map.layerPointToLatLng(a[0]);for(t=0,n=0;t<h-1;t++)if(o=a[t],s=a[t+1],e=o.distanceTo(s),(n+=e)>i)return r=(n-i)/e,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,i){return i=i||this._defaultShape(),t=C(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new T,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return jt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var i=[],e=jt(t),n=0,o=t.length;n<o;n++)e?(i[n]=C(t[n]),this._bounds.extend(i[n])):i[n]=this._convertLatLngs(t[n]);return i},_project:function(){var t=new P;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t);var i=this._clickTolerance(),e=new x(i,i);this._bounds.isValid()&&t.isValid()&&(t.min._subtract(e),t.max._add(e),this._pxBounds=t)},_projectLatlngs:function(t,i,e){var n,o,s=t[0]instanceof M,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),e.extend(o[n]);i.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],i,e)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var i,e,n,o,s,r,a,h=this._parts;for(i=0,n=0,o=this._rings.length;i<o;i++)for(e=0,s=(a=this._rings[i]).length;e<s-1;e++)(r=It(a[e],a[e+1],t,e,!0))&&(h[n]=h[n]||[],h[n].push(r[0]),r[1]===a[e+1]&&e!==s-2||(h[n].push(r[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,e=0,n=t.length;e<n;e++)t[e]=Zt(t[e],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,i){var e,n,o,s,r,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(e=0,s=this._parts.length;e<s;e++)for(n=0,o=(r=(a=this._parts[e]).length)-1;n<r;o=n++)if((i||0!==n)&&Et(t,a[o],a[n])<=h)return!0;return!1}});nn._flat=Wt;var on=nn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a,h,u=this._rings[0],l=u.length;if(!l)return null;for(s=r=a=0,t=0,i=l-1;t<l;i=t++)e=u[t],n=u[i],o=e.y*n.x-n.y*e.x,r+=(e.x+n.x)*o,a+=(e.y+n.y)*o,s+=3*o;return h=0===s?u[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var i=nn.prototype._convertLatLngs.call(this,t),e=i.length;return e>=2&&i[0]instanceof M&&i[0].equals(i[e-1])&&i.pop(),i},_setLatLngs:function(t){nn.prototype._setLatLngs.call(this,t),jt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return jt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,i=this.options.weight,e=new x(i,i);if(t=new P(t.min.subtract(e),t.max.add(e)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,s=this._rings.length;o<s;o++)(n=Ht(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var i,e,n,o,s,r,a,h,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(i=this._parts[o]).length)-1;s<h;r=s++)e=i[s],n=i[r],e.y>t.y!=n.y>t.y&&t.x<(n.x-e.x)*(t.y-e.y)/(n.y-e.y)+e.x&&(u=!u);return u||nn.prototype._containsPoint.call(this,t,!0)}}),sn=Ke.extend({initialize:function(t,i){l(this,i),this._layers={},t&&this.addData(t)},addData:function(t){var i,e,n,o=oi(t)?t:t.features;if(o){for(i=0,e=o.length;i<e;i++)((n=o[i]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var r=Ft(t,s);return r?(r.feature=Yt(t),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return t.options=i({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(t){return this.eachLayer(function(i){this._setLayerStyle(i,t)},this)},_setLayerStyle:function(t,i){"function"==typeof i&&(i=i(t.feature)),t.setStyle&&t.setStyle(i)}}),rn={toGeoJSON:function(t){return Kt(this,{type:"Point",coordinates:qt(this.getLatLng(),t)})}};$e.include(rn),en.include(rn),tn.include(rn),nn.include({toGeoJSON:function(t){var i=!jt(this._latlngs),e=Gt(this._latlngs,i?1:0,!1,t);return Kt(this,{type:(i?"Multi":"")+"LineString",coordinates:e})}}),on.include({toGeoJSON:function(t){var i=!jt(this._latlngs),e=i&&!jt(this._latlngs[0]),n=Gt(this._latlngs,e?2:i?1:0,!0,t);return i||(n=[n]),Kt(this,{type:(e?"Multi":"")+"Polygon",coordinates:n})}}),Ge.include({toMultiPoint:function(t){var i=[];return this.eachLayer(function(e){i.push(e.toGeoJSON(t).geometry.coordinates)}),Kt(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(t){var i=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===i)return this.toMultiPoint(t);var e="GeometryCollection"===i,n=[];return this.eachLayer(function(i){if(i.toGeoJSON){var o=i.toGeoJSON(t);if(e)n.push(o.geometry);else{var s=Yt(o);"FeatureCollection"===s.type?n.push.apply(n,s.features):n.push(s)}}}),e?Kt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});var an=Xt,hn=qe.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,i,e){this._url=t,this._bounds=z(i),l(this,e)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Q(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){K(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&X(this._image),this},bringToBack:function(){return this._map&&J(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=z(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,i=this._image=t?this._url:G("img");Q(i,"leaflet-image-layer"),this._zoomAnimated&&Q(i,"leaflet-zoom-animated"),this.options.className&&Q(i,this.options.className),i.onselectstart=r,i.onmousemove=r,i.onload=e(this.fire,this,"load"),i.onerror=e(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=i.src:(i.src=this._url,i.alt=this.options.alt)},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;rt(this._image,e,i)},_reset:function(){var t=this._image,i=new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=i.getSize();at(t,i.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){nt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),un=hn.extend({options:{autoplay:!0,loop:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,i=this._image=t?this._url:G("video");if(Q(i,"leaflet-image-layer"),this._zoomAnimated&&Q(i,"leaflet-zoom-animated"),i.onselectstart=r,i.onmousemove=r,i.onloadeddata=e(this.fire,this,"load"),t){for(var n=i.getElementsByTagName("source"),o=[],s=0;s<n.length;s++)o.push(n[s].src);this._url=n.length>0?o:[i.src]}else{oi(this._url)||(this._url=[this._url]),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop;for(var a=0;a<this._url.length;a++){var h=G("source");h.src=this._url[a],i.appendChild(h)}}}}),ln=qe.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,i){l(this,t),this._source=i},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&nt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&nt(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(nt(this._container,0),this._removeTimeout=setTimeout(e(K,void 0,this._container),200)):K(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=C(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&X(this._container),this},bringToBack:function(){return this._map&&J(this._container),this},_updateContent:function(){if(this._content){var t=this._contentNode,i="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof i)t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),i=w(this.options.offset),e=this._getAnchor();this._zoomAnimated?at(this._container,t.add(e)):i=i.add(t).add(e);var n=this._containerBottom=-i.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}}),cn=ln.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){ln.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Qe||this._source.on("preclick",yt))},onRemove:function(t){ln.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Qe||this._source.off("preclick",yt))},getEvents:function(){var t=ln.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",i=this._container=G("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),e=this._wrapper=G("div",t+"-content-wrapper",i);if(this._contentNode=G("div",t+"-content",e),wt(e),xt(this._contentNode),mt(e,"contextmenu",yt),this._tipContainer=G("div",t+"-tip-container",i),this._tip=G("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=G("a",t+"-close-button",i);n.href="#close",n.innerHTML="&#215;",mt(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var e=t.offsetWidth;e=Math.min(e,this.options.maxWidth),e=Math.max(e,this.options.minWidth),i.width=e+1+"px",i.whiteSpace="",i.height="";var n=t.offsetHeight,o=this.options.maxHeight;o&&n>o?(i.height=o+"px",Q(t,"leaflet-popup-scrolled")):tt(t,"leaflet-popup-scrolled"),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();at(this._container,i.add(e))},_adjustPan:function(){if(this.options.autoPan){this._map._panAnim&&this._map._panAnim.stop();var t=this._map,i=parseInt(q(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+i,n=this._containerWidth,o=new x(this._containerLeft,-e-this._containerBottom);o._add(ht(this._container));var s=t.layerPointToContainerPoint(o),r=w(this.options.autoPanPadding),a=w(this.options.autoPanPaddingTopLeft||r),h=w(this.options.autoPanPaddingBottomRight||r),u=t.getSize(),l=0,c=0;s.x+n+h.x>u.x&&(l=s.x+n-u.x+h.x),s.x-l-a.x<0&&(l=s.x-a.x),s.y+e+h.y>u.y&&(c=s.y+e-u.y+h.y),s.y-c-a.y<0&&(c=s.y-a.y),(l||c)&&t.fire("autopanstart").panBy([l,c])}},_onCloseButtonClick:function(t){this._close(),Lt(t)},_getAnchor:function(){return w(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});be.mergeOptions({closePopupOnClick:!0}),be.include({openPopup:function(t,i,e){return t instanceof cn||(t=new cn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),qe.include({bindPopup:function(t,i){return t instanceof cn?(l(t,i),this._popup=t,t._source=this):(this._popup&&!i||(this._popup=new cn(i,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,i){if(t instanceof qe||(i=t,t=this),t instanceof Ke)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._popup&&this._map&&(this._popup._source=t,this._popup.update(),this._map.openPopup(this._popup,i)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var i=t.layer||t.target;this._popup&&this._map&&(Lt(t),i instanceof Qe?this.openPopup(t.layer||t.target,t.latlng):this._map.hasLayer(this._popup)&&this._popup._source===i?this.closePopup():this.openPopup(i,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var _n=ln.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){ln.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){ln.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=ln.prototype.getEvents.call(this);return qi&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=G("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i=this._map,e=this._container,n=i.latLngToContainerPoint(i.getCenter()),o=i.layerPointToContainerPoint(t),s=this.options.direction,r=e.offsetWidth,a=e.offsetHeight,h=w(this.options.offset),u=this._getAnchor();"top"===s?t=t.add(w(-r/2+h.x,-a+h.y+u.y,!0)):"bottom"===s?t=t.subtract(w(r/2-h.x,-h.y,!0)):"center"===s?t=t.subtract(w(r/2+h.x,a/2-u.y+h.y,!0)):"right"===s||"auto"===s&&o.x<n.x?(s="right",t=t.add(w(h.x+u.x,u.y-a/2+h.y,!0))):(s="left",t=t.subtract(w(r+u.x-h.x,a/2-u.y-h.y,!0))),tt(e,"leaflet-tooltip-right"),tt(e,"leaflet-tooltip-left"),tt(e,"leaflet-tooltip-top"),tt(e,"leaflet-tooltip-bottom"),Q(e,"leaflet-tooltip-"+s),at(e,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&nt(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){return w(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});be.include({openTooltip:function(t,i,e){return t instanceof _n||(t=new _n(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),qe.include({bindTooltip:function(t,i){return t instanceof _n?(l(t,i),this._tooltip=t,t._source=this):(this._tooltip&&!i||(this._tooltip=new _n(i,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var i=t?"off":"on",e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),qi&&(e.click=this._openTooltip)),this[i](e),this._tooltipHandlersAdded=!t}},openTooltip:function(t,i){if(t instanceof qe||(i=t,t=this),t instanceof Ke)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._tooltip&&this._map&&(this._tooltip._source=t,this._tooltip.update(),this._map.openTooltip(this._tooltip,i),this._tooltip.options.interactive&&this._tooltip._container&&(Q(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(tt(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var i=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(i,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var i,e,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(i),n=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(n)}});var dn=Ye.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;if(i.innerHTML=!1!==e.html?e.html:"",e.bgPos){var n=w(e.bgPos);i.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});Ye.Default=Xe;var pn=qe.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Wi,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){l(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),K(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(X(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(J(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=o(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof x?t:new x(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var i,e=this.getPane().children,n=-t(-1/0,1/0),o=0,s=e.length;o<s;o++)i=e[o].style.zIndex,e[o]!==this._container&&i&&(n=t(n,+i));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Li){nt(this._container,this.options.opacity);var t=+new Date,i=!1,e=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var s=Math.min(1,(t-o.loaded)/200);nt(o.el,s),s<1?i=!0:(o.active?e=!0:this._onOpaqueTile(o),o.active=!0)}}e&&!this._noPrune&&this._pruneTiles(),i&&(g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this))}},_onOpaqueTile:r,_initContainer:function(){this._container||(this._container=G("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=i-Math.abs(t-e),this._onUpdateLevel(e)):(K(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=G("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=i,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),n.el.offsetWidth,this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:r,_onRemoveLevel:r,_onCreateLevel:r,_pruneTiles:function(){if(this._map){var t,i,e=this._map.getZoom();if(e>this.options.maxZoom||e<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)if((i=this._tiles[t]).current&&!i.active){var n=i.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)K(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,i,e,n){var o=Math.floor(t/2),s=Math.floor(i/2),r=e-1,a=new x(+o,+s);a.z=+r;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),r>n&&this._retainParent(o,s,r,n))},_retainChildren:function(t,i,e,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*i;s<2*i+2;s++){var r=new x(o,s);r.z=e+1;var a=this._tileCoordsToKey(r),h=this._tiles[a];h&&h.active?h.retain=!0:(h&&h.loaded&&(h.retain=!0),e+1<n&&this._retainChildren(o,s,e+1,n))}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return void 0!==i.minNativeZoom&&t<i.minNativeZoom?i.minNativeZoom:void 0!==i.maxNativeZoom&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,e,n){var o=this._clampZoom(Math.round(i));(void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom)&&(o=void 0);var s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),this._noPrune=!!e),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,i)},_setZoomTransform:function(t,i,e){var n=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i,e)).round();ji?rt(t.el,o,n):at(t.el,o)},_resetGrid:function(){var t=this._map,i=t.options.crs,e=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],n).x/e.x),Math.ceil(t.project([0,i.wrapLng[1]],n).x/e.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],n).y/e.x),Math.ceil(t.project([i.wrapLat[1],0],n).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var i=this._map,e=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),n=i.getZoomScale(e,this._tileZoom),o=i.project(t,this._tileZoom).floor(),s=i.getSize().divideBy(2*n);return new P(o.subtract(s),o.add(s))},_update:function(t){var i=this._map;if(i){var e=this._clampZoom(i.getZoom());if(void 0===t&&(t=i.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),r=[],a=this.options.keepBuffer,h=new P(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new x(l.x,l.y))||(this._tiles[u].current=!1)}if(Math.abs(e-this._tileZoom)>1)this._setView(t,e);else{for(var c=o.min.y;c<=o.max.y;c++)for(var _=o.min.x;_<=o.max.x;_++){var d=new x(_,c);if(d.z=this._tileZoom,this._isValidTile(d)){var p=this._tiles[this._tileCoordsToKey(d)];p?p.current=!0:r.push(d)}}if(r.sort(function(t,i){return t.distanceTo(s)-i.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));var m=document.createDocumentFragment();for(_=0;_<r.length;_++)this._addTile(r[_],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){var e=this._globalTileRange;if(!i.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!i.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return z(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var i=this._map,e=this.getTileSize(),n=t.scaleBy(e),o=n.add(e);return[i.unproject(n,t.z),i.unproject(o,t.z)]},_tileCoordsToBounds:function(t){var i=this._tileCoordsToNwSe(t),e=new T(i[0],i[1]);return this.options.noWrap||(e=this._map.wrapLatLngBounds(e)),e},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var i=t.split(":"),e=new x(+i[0],+i[1]);return e.z=+i[2],e},_removeTile:function(t){var i=this._tiles[t];i&&(K(i.el),delete this._tiles[t],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){Q(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=r,t.onmousemove=r,Li&&this.options.opacity<1&&nt(t,this.options.opacity),zi&&!Mi&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,i){var n=this._getTilePos(t),o=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),e(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&f(e(this._tileReady,this,t,null,s)),at(s,n),this._tiles[o]={el:s,coords:t,current:!0},i.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,i,n){i&&this.fire("tileerror",{error:i,tile:n,coords:t});var o=this._tileCoordsToKey(t);(n=this._tiles[o])&&(n.loaded=+new Date,this._map._fadeAnimated?(nt(n.el,0),g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),i||(Q(n.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:n.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Li||!this._map._fadeAnimated?f(this._pruneTiles,this):setTimeout(e(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new x(this._wrapX?s(t.x,this._wrapX):t.x,this._wrapY?s(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new P(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),mn=pn.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,i){this._url=t,(i=l(this,i)).detectRetina&&Yi&&i.maxZoom>0&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom++):(i.zoomOffset++,i.maxZoom--),i.minZoom=Math.max(0,i.minZoom)),"string"==typeof i.subdomains&&(i.subdomains=i.subdomains.split("")),zi||this.on("tileunload",this._onTileRemove)},setUrl:function(t,i){return this._url===t&&void 0===i&&(i=!0),this._url=t,i||this.redraw(),this},createTile:function(t,i){var n=document.createElement("img");return mt(n,"load",e(this._tileOnLoad,this,i,n)),mt(n,"error",e(this._tileOnError,this,i,n)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(n.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),n.alt="",n.setAttribute("role","presentation"),n.src=this.getTileUrl(t),n},getTileUrl:function(t){var e={r:Yi?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=n),e["-y"]=n}return _(this._url,i(e,this.options))},_tileOnLoad:function(t,i){Li?setTimeout(e(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,e){var n=this.options.errorTileUrl;n&&i.getAttribute("src")!==n&&(i.src=n),t(e,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom,e=this.options.zoomReverse,n=this.options.zoomOffset;return e&&(t=i-t),t+n},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var t,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=r,i.onerror=r,i.complete||(i.src=si,K(i),delete this._tiles[t]))},_removeTile:function(t){var i=this._tiles[t];if(i)return Si||i.el.setAttribute("src",si),pn.prototype._removeTile.call(this,t)},_tileReady:function(t,i,e){if(this._map&&(!e||e.getAttribute("src")!==si))return pn.prototype._tileReady.call(this,t,i,e)}}),fn=mn.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var n=i({},this.defaultWmsParams);for(var o in e)o in this.options||(n[o]=e[o]);var s=(e=l(this,e)).detectRetina&&Yi?2:1,r=this.getTileSize();n.width=r.x*s,n.height=r.y*s,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[i]=this._crs.code,mn.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToNwSe(t),e=this._crs,n=b(e.project(i[0]),e.project(i[1])),o=n.min,s=n.max,r=(this._wmsVersion>=1.3&&this._crs===Ue?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),a=mn.prototype.getTileUrl.call(this,t);return a+c(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(t,e){return i(this.wmsParams,t),e||this.redraw(),this}});mn.WMS=fn,Jt.wms=function(t,i){return new fn(t,i)};var gn=qe.extend({options:{padding:.1,tolerance:0},initialize:function(t){l(this,t),n(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&Q(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var e=this._map.getZoomScale(i,this._zoom),n=ht(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,i),r=this._map.project(t,i).subtract(s),a=o.multiplyBy(-e).add(n).add(o).subtract(r);ji?rt(this._container,a,e):at(this._container,a)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,i=this._map.getSize(),e=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new P(e,e.add(i.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),vn=gn.extend({getEvents:function(){var t=gn.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){gn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");mt(t,"mousemove",o(this._onMouseMove,32,this),this),mt(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),mt(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){g(this._redrawRequest),delete this._ctx,K(this._container),ft(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){this._redrawBounds=null;for(var t in this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){gn.prototype._update.call(this);var t=this._bounds,i=this._container,e=t.getSize(),n=Yi?2:1;at(i,t.min),i.width=n*e.x,i.height=n*e.y,i.style.width=e.x+"px",i.style.height=e.y+"px",Yi&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){gn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[n(t)]=t;var i=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,e=i.next,o=i.prev;e?e.prev=o:this._drawLast=o,o?o.next=e:this._drawFirst=e,delete t._order,delete this._layers[n(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var i,e,n=t.options.dashArray.split(/[, ]+/),o=[];for(e=0;e<n.length;e++){if(i=Number(n[e]),isNaN(i))return;o.push(i)}t.options._dashArray=o}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||f(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var i=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new P,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var i=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,i.x,i.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,i=this._redrawBounds;if(this._ctx.save(),i){var e=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var e,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(h.beginPath(),e=0;e<a;e++){for(n=0,o=r[e].length;n<o;n++)s=r[e][n],h[n?"lineTo":"moveTo"](s.x,s.y);i&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var i=t._point,e=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;1!==o&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(i.x,i.y/o,n,0,2*Math.PI,!1),1!==o&&e.restore(),this._fillStroke(e,t)}},_fillStroke:function(t,i){var e=i.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},_onClick:function(t){for(var i,e,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(n)&&!this._map._draggableMoved(i)&&(e=i);e&&(zt(t),this._fireEvent([e],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var i=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,i)}},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(tt(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,i){for(var e,n,o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(i)&&(n=e);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(Q(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,i,e){this._map._fireDOMEvent(i,e||i.type,t)},_bringToFront:function(t){var i=t._order;if(i){var e=i.next,n=i.prev;e&&(e.prev=n,n?n.next=e:e&&(this._drawFirst=e),i.prev=this._drawLast,this._drawLast.next=i,i.next=null,this._drawLast=i,this._requestRedraw(t))}},_bringToBack:function(t){var i=t._order;if(i){var e=i.next,n=i.prev;n&&(n.next=e,e?e.prev=n:n&&(this._drawLast=n),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(t))}}}),yn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),xn={_initContainer:function(){this._container=G("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(gn.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=yn("shape");Q(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=yn("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;K(i),t.removeInteractiveTarget(i),delete this._layers[n(t)]},_updateStyle:function(t){var i=t._stroke,e=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(i||(i=t._stroke=yn("stroke")),o.appendChild(i),i.weight=n.weight+"px",i.color=n.color,i.opacity=n.opacity,n.dashArray?i.dashStyle=oi(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=n.lineCap.replace("butt","flat"),i.joinstyle=n.lineJoin):i&&(o.removeChild(i),t._stroke=null),n.fill?(e||(e=t._fill=yn("fill")),o.appendChild(e),e.color=n.fillColor||n.color,e.opacity=n.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),e=Math.round(t._radius),n=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+e+","+n+" 0,23592600")},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){X(t._container)},_bringToBack:function(t){J(t._container)}},wn=$i?yn:E,Pn=gn.extend({getEvents:function(){var t=gn.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=wn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=wn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){K(this._container),ft(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){gn.prototype._update.call(this);var t=this._bounds,i=t.getSize(),e=this._container;this._svgSize&&this._svgSize.equals(i)||(this._svgSize=i,e.setAttribute("width",i.x),e.setAttribute("height",i.y)),at(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(t){var i=t._path=wn("path");t.options.className&&Q(i,t.options.className),t.options.interactive&&Q(i,"leaflet-interactive"),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){K(t._path),t.removeInteractiveTarget(t._path),delete this._layers[n(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,e=t.options;i&&(e.stroke?(i.setAttribute("stroke",e.color),i.setAttribute("stroke-opacity",e.opacity),i.setAttribute("stroke-width",e.weight),i.setAttribute("stroke-linecap",e.lineCap),i.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?i.setAttribute("stroke-dasharray",e.dashArray):i.removeAttribute("stroke-dasharray"),e.dashOffset?i.setAttribute("stroke-dashoffset",e.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),e.fill?(i.setAttribute("fill",e.fillColor||e.color),i.setAttribute("fill-opacity",e.fillOpacity),i.setAttribute("fill-rule",e.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,k(t._parts,i))},_updateCircle:function(t){var i=t._point,e=Math.max(Math.round(t._radius),1),n="a"+e+","+(Math.max(Math.round(t._radiusY),1)||e)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(i.x-e)+","+i.y+n+2*e+",0 "+n+2*-e+",0 ";this._setPath(t,o)},_setPath:function(t,i){t._path.setAttribute("d",i)},_bringToFront:function(t){X(t._path)},_bringToBack:function(t){J(t._path)}});$i&&Pn.include(xn),be.include({getRenderer:function(t){var i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this._createRenderer()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var i=this._paneRenderers[t];return void 0===i&&(i=this._createRenderer({pane:t}),this._paneRenderers[t]=i),i},_createRenderer:function(t){return this.options.preferCanvas&&$t(t)||Qt(t)}});var Ln=on.extend({initialize:function(t,i){on.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=z(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});Pn.create=wn,Pn.pointsToPath=k,sn.geometryToLayer=Ft,sn.coordsToLatLng=Ut,sn.coordsToLatLngs=Vt,sn.latLngToCoords=qt,sn.latLngsToCoords=Gt,sn.getFeature=Kt,sn.asFeature=Yt,be.mergeOptions({boxZoom:!0});var bn=Ee.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){mt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ft(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){K(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),fi(),ut(),this._startPoint=this._map.mouseEventToContainerPoint(t),mt(document,{contextmenu:Lt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=G("div","leaflet-zoom-box",this._container),Q(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new P(this._point,this._startPoint),e=i.getSize();at(this._box,i.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(K(this._box),tt(this._container,"leaflet-crosshair")),gi(),lt(),ft(document,{contextmenu:Lt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(e(this._resetState,this),0);var i=new T(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});be.addInitHook("addHandler","boxZoom",bn),be.mergeOptions({doubleClickZoom:!0});var Tn=Ee.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,e=i.getZoom(),n=i.options.zoomDelta,o=t.originalEvent.shiftKey?e-n:e+n;"center"===i.options.doubleClickZoom?i.setZoom(o):i.setZoomAround(t.containerPoint,o)}});be.addInitHook("addHandler","doubleClickZoom",Tn),be.mergeOptions({dragging:!0,inertia:!Mi,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var zn=Ee.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Re(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}Q(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){tt(this._map._container,"leaflet-grab"),tt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=z(this._map.options.maxBounds);this._offsetLimit=b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var i=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(e),this._times.push(i),this._prunePositions(i)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,i=Math.round(t/2),e=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-i+e)%t+i-e,s=(n+i+e)%t-i-e,r=Math.abs(o+e)<Math.abs(s+e)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var i=this._map,e=i.options,n=!e.inertia||this._times.length<2;if(i.fire("dragend",t),n)i.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,r=e.easeLinearity,a=o.multiplyBy(r/s),h=a.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(e.inertiaDeceleration*r),_=l.multiplyBy(-c/2).round();_.x||_.y?(_=i._limitOffset(_,i.options.maxBounds),f(function(){i.panBy(_,{duration:c,easeLinearity:r,noMoveStart:!0,animate:!0})})):i.fire("moveend")}}});be.addInitHook("addHandler","dragging",zn),be.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Mn=Ee.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),mt(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ft(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,i=document.documentElement,e=t.scrollTop||i.scrollTop,n=t.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(n,e)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var i,e,n=this._panKeys={},o=this.keyCodes;for(i=0,e=o.left.length;i<e;i++)n[o.left[i]]=[-1*t,0];for(i=0,e=o.right.length;i<e;i++)n[o.right[i]]=[t,0];for(i=0,e=o.down.length;i<e;i++)n[o.down[i]]=[0,t];for(i=0,e=o.up.length;i<e;i++)n[o.up[i]]=[0,-1*t]},_setZoomDelta:function(t){var i,e,n=this._zoomKeys={},o=this.keyCodes;for(i=0,e=o.zoomIn.length;i<e;i++)n[o.zoomIn[i]]=t;for(i=0,e=o.zoomOut.length;i<e;i++)n[o.zoomOut[i]]=-t},_addHooks:function(){mt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ft(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i,e=t.keyCode,n=this._map;if(e in this._panKeys)n._panAnim&&n._panAnim._inProgress||(i=this._panKeys[e],t.shiftKey&&(i=w(i).multiplyBy(3)),n.panBy(i),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds));else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}Lt(t)}}});be.addInitHook("addHandler","keyboard",Mn),be.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Cn=Ee.extend({addHooks:function(){mt(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ft(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=Tt(t),n=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var o=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(e(this._performZoom,this),o),Lt(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=e?Math.ceil(o/e)*e:o,r=t._limitZoom(i+(this._delta>0?s:-s))-i;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(i+r):t.setZoomAround(this._lastMousePos,i+r))}});be.addInitHook("addHandler","scrollWheelZoom",Cn),be.mergeOptions({tap:!0,tapTolerance:15});var Sn=Ee.extend({addHooks:function(){mt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ft(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(Pt(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new x(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&Q(n,"leaflet-active"),this._holdTimeout=setTimeout(e(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),mt(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),ft(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],e=i.target;e&&e.tagName&&"a"===e.tagName.toLowerCase()&&tt(e,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var i=t.touches[0];this._newPos=new x(i.clientX,i.clientY),this._simulateEvent("mousemove",i)},_simulateEvent:function(t,i){var e=document.createEvent("MouseEvents");e._simulated=!0,i.target._simulatedClick=!0,e.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(e)}});qi&&!Vi&&be.addInitHook("addHandler","tap",Sn),be.mergeOptions({touchZoom:qi&&!Mi,bounceAtZoomLimits:!0});var Zn=Ee.extend({addHooks:function(){Q(this._map._container,"leaflet-touch-zoom"),mt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){tt(this._map._container,"leaflet-touch-zoom"),ft(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(e.add(n)._divideBy(2))),this._startDist=e.distanceTo(n),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),mt(document,"touchmove",this._onTouchMove,this),mt(document,"touchend",this._onTouchEnd,this),Pt(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var i=this._map,n=i.mouseEventToContainerPoint(t.touches[0]),o=i.mouseEventToContainerPoint(t.touches[1]),s=n.distanceTo(o)/this._startDist;if(this._zoom=i.getScaleZoom(s,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&s<1||this._zoom>i.getMaxZoom()&&s>1)&&(this._zoom=i._limitZoom(this._zoom)),"center"===i.options.touchZoom){if(this._center=this._startLatLng,1===s)return}else{var r=n._add(o)._divideBy(2)._subtract(this._centerPoint);if(1===s&&0===r.x&&0===r.y)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),g(this._animRequest);var a=e(i._move,i,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=f(a,this,!0),Pt(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,g(this._animRequest),ft(document,"touchmove",this._onTouchMove),ft(document,"touchend",this._onTouchEnd),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});be.addInitHook("addHandler","touchZoom",Zn),be.BoxZoom=bn,be.DoubleClickZoom=Tn,be.Drag=zn,be.Keyboard=Mn,be.ScrollWheelZoom=Cn,be.Tap=Sn,be.TouchZoom=Zn,Object.freeze=ti,t.version="1.4.0",t.Control=Te,t.control=ze,t.Browser=Qi,t.Evented=ci,t.Mixin=Be,t.Util=ui,t.Class=v,t.Handler=Ee,t.extend=i,t.bind=e,t.stamp=n,t.setOptions=l,t.DomEvent=Pe,t.DomUtil=ve,t.PosAnimation=Le,t.Draggable=Re,t.LineUtil=Ne,t.PolyUtil=De,t.Point=x,t.point=w,t.Bounds=P,t.bounds=b,t.Transformation=S,t.transformation=Z,t.Projection=He,t.LatLng=M,t.latLng=C,t.LatLngBounds=T,t.latLngBounds=z,t.CRS=di,t.GeoJSON=sn,t.geoJSON=Xt,t.geoJson=an,t.Layer=qe,t.LayerGroup=Ge,t.layerGroup=function(t,i){return new Ge(t,i)},t.FeatureGroup=Ke,t.featureGroup=function(t){return new Ke(t)},t.ImageOverlay=hn,t.imageOverlay=function(t,i,e){return new hn(t,i,e)},t.VideoOverlay=un,t.videoOverlay=function(t,i,e){return new un(t,i,e)},t.DivOverlay=ln,t.Popup=cn,t.popup=function(t,i){return new cn(t,i)},t.Tooltip=_n,t.tooltip=function(t,i){return new _n(t,i)},t.Icon=Ye,t.icon=function(t){return new Ye(t)},t.DivIcon=dn,t.divIcon=function(t){return new dn(t)},t.Marker=$e,t.marker=function(t,i){return new $e(t,i)},t.TileLayer=mn,t.tileLayer=Jt,t.GridLayer=pn,t.gridLayer=function(t){return new pn(t)},t.SVG=Pn,t.svg=Qt,t.Renderer=gn,t.Canvas=vn,t.canvas=$t,t.Path=Qe,t.CircleMarker=tn,t.circleMarker=function(t,i){return new tn(t,i)},t.Circle=en,t.circle=function(t,i,e){return new en(t,i,e)},t.Polyline=nn,t.polyline=function(t,i){return new nn(t,i)},t.Polygon=on,t.polygon=function(t,i){return new on(t,i)},t.Rectangle=Ln,t.rectangle=function(t,i){return new Ln(t,i)},t.Map=be,t.map=function(t,i){return new be(t,i)};var En=window.L;t.noConflict=function(){return window.L=En,this},window.L=t});
// source --> https://prontosocialchef.it/wp-content/plugins/listeo-core/assets/js/leaflet-googlemutant.js?ver=1.8.17 
(function () {
  "use strict";

  /**
   * GoogleMutant by Iván Sánchez Ortega <ivan@sanchezortega.es> https://ivan.sanchezortega.es
   * Source and issue tracking: https://gitlab.com/IvanSanchez/Leaflet.GridLayer.GoogleMutant/
   *
   * Based on techniques from https://github.com/shramov/leaflet-plugins
   * and https://avinmathew.com/leaflet-and-google-maps/ , but relying on MutationObserver.
   *
   * "THE BEER-WARE LICENSE":
   * <ivan@sanchezortega.es> wrote this file. As long as you retain this notice you
   * can do whatever you want with this stuff. If we meet some day, and you think
   * this stuff is worth it, you can buy me a beer in return.
   *
   * Uses MIT-licensed code from https://github.com/rsms/js-lru/
   */

  // This implementation of LRUMap is a copy of https://github.com/rsms/js-lru/ ,
  // trivially adapted for ES6 exports.

  /*
	The MIT License

	Copyright (c) 2010-2020 Rasmus Andersson <https://rsms.me/>

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	*/

  /**
   * A doubly linked list-based Least Recently Used (LRU) cache. Will keep most
   * recently used items while discarding least recently used items when its limit
   * is reached.
   *
   * Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
   * See README.md for details.
   *
   * Illustration of the design:
   *
   *       entry             entry             entry             entry
   *       ______            ______            ______            ______
   *      | head |.newer => |      |.newer => |      |.newer => | tail |
   *      |  A   |          |  B   |          |  C   |          |  D   |
   *      |______| <= older.|______| <= older.|______| <= older.|______|
   *
   *  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
   */

  var NEWER = Symbol("newer");
  var OLDER = Symbol("older");

  var LRUMap = function LRUMap(limit, entries) {
    if (typeof limit !== "number") {
      // called as (entries)
      entries = limit;
      limit = 0;
    }

    this.size = 0;
    this.limit = limit;
    this.oldest = this.newest = undefined;
    this._keymap = new Map();

    if (entries) {
      this.assign(entries);
      if (limit < 1) {
        this.limit = this.size;
      }
    }
  };

  LRUMap.prototype._markEntryAsUsed = function _markEntryAsUsed(entry) {
    if (entry === this.newest) {
      // Already the most recenlty used entry, so no need to update the list
      return;
    }
    // HEAD--------------TAIL
    //   <.older   .newer>
    //  <--- add direction --
    //   A  B  C  <D>  E
    if (entry[NEWER]) {
      if (entry === this.oldest) {
        this.oldest = entry[NEWER];
      }
      entry[NEWER][OLDER] = entry[OLDER]; // C <-- E.
    }
    if (entry[OLDER]) {
      entry[OLDER][NEWER] = entry[NEWER]; // C. --> E
    }
    entry[NEWER] = undefined; // D --x
    entry[OLDER] = this.newest; // D. --> E
    if (this.newest) {
      this.newest[NEWER] = entry; // E. <-- D
    }
    this.newest = entry;
  };

  LRUMap.prototype.assign = function assign(entries) {
    var entry,
      limit = this.limit || Number.MAX_VALUE;
    this._keymap.clear();
    var it = entries[Symbol.iterator]();
    for (var itv = it.next(); !itv.done; itv = it.next()) {
      var e = new Entry(itv.value[0], itv.value[1]);
      this._keymap.set(e.key, e);
      if (!entry) {
        this.oldest = e;
      } else {
        entry[NEWER] = e;
        e[OLDER] = entry;
      }
      entry = e;
      if (limit-- == 0) {
        throw new Error("overflow");
      }
    }
    this.newest = entry;
    this.size = this._keymap.size;
  };

  LRUMap.prototype.get = function get(key) {
    // First, find our cache entry
    var entry = this._keymap.get(key);
    if (!entry) {
      return;
    } // Not cached. Sorry.
    // As <key> was found in the cache, register it as being requested recently
    this._markEntryAsUsed(entry);
    return entry.value;
  };

  LRUMap.prototype.set = function set(key, value) {
    var entry = this._keymap.get(key);

    if (entry) {
      // update existing
      entry.value = value;
      this._markEntryAsUsed(entry);
      return this;
    }

    // new entry
    this._keymap.set(key, (entry = new Entry(key, value)));

    if (this.newest) {
      // link previous tail to the new tail (entry)
      this.newest[NEWER] = entry;
      entry[OLDER] = this.newest;
    } else {
      // we're first in -- yay
      this.oldest = entry;
    }

    // add new entry to the end of the linked list -- it's now the freshest entry.
    this.newest = entry;
    ++this.size;
    if (this.size > this.limit) {
      // we hit the limit -- remove the head
      this.shift();
    }

    return this;
  };

  LRUMap.prototype.shift = function shift() {
    // todo: handle special case when limit == 1
    var entry = this.oldest;
    if (entry) {
      if (this.oldest[NEWER]) {
        // advance the list
        this.oldest = this.oldest[NEWER];
        this.oldest[OLDER] = undefined;
      } else {
        // the cache is exhausted
        this.oldest = undefined;
        this.newest = undefined;
      }
      // Remove last strong reference to <entry> and remove links from the purged
      // entry being returned:
      entry[NEWER] = entry[OLDER] = undefined;
      this._keymap.delete(entry.key);
      --this.size;
      return [entry.key, entry.value];
    }
  };

  // -------------------------------------------------------------------------------------
  // Following code (until end of class definition) is optional and can be removed without
  // breaking the core functionality.

  LRUMap.prototype.find = function find(key) {
    var e = this._keymap.get(key);
    return e ? e.value : undefined;
  };

  LRUMap.prototype.has = function has(key) {
    return this._keymap.has(key);
  };

  LRUMap.prototype.delete = function delete$1(key) {
    var entry = this._keymap.get(key);
    if (!entry) {
      return;
    }
    this._keymap.delete(entry.key);
    if (entry[NEWER] && entry[OLDER]) {
      // relink the older entry with the newer entry
      entry[OLDER][NEWER] = entry[NEWER];
      entry[NEWER][OLDER] = entry[OLDER];
    } else if (entry[NEWER]) {
      // remove the link to us
      entry[NEWER][OLDER] = undefined;
      // link the newer entry to head
      this.oldest = entry[NEWER];
    } else if (entry[OLDER]) {
      // remove the link to us
      entry[OLDER][NEWER] = undefined;
      // link the newer entry to head
      this.newest = entry[OLDER];
    } else {
      // if(entry[OLDER] === undefined && entry.newer === undefined) {
      this.oldest = this.newest = undefined;
    }

    this.size--;
    return entry.value;
  };

  LRUMap.prototype.clear = function clear() {
    // Not clearing links should be safe, as we don't expose live links to user
    this.oldest = this.newest = undefined;
    this.size = 0;
    this._keymap.clear();
  };

  LRUMap.prototype.keys = function keys() {
    return new KeyIterator(this.oldest);
  };

  LRUMap.prototype.values = function values() {
    return new ValueIterator(this.oldest);
  };

  LRUMap.prototype.entries = function entries() {
    return this;
  };

  LRUMap.prototype[Symbol.iterator] = function () {
    return new EntryIterator(this.oldest);
  };

  LRUMap.prototype.forEach = function forEach(fun, thisObj) {
    if (typeof thisObj !== "object") {
      thisObj = this;
    }
    var entry = this.oldest;
    while (entry) {
      fun.call(thisObj, entry.value, entry.key, this);
      entry = entry[NEWER];
    }
  };

  /** Returns a JSON (array) representation */
  LRUMap.prototype.toJSON = function toJSON() {
    var s = new Array(this.size),
      i = 0,
      entry = this.oldest;
    while (entry) {
      s[i++] = { key: entry.key, value: entry.value };
      entry = entry[NEWER];
    }
    return s;
  };

  /** Returns a String representation */
  LRUMap.prototype.toString = function toString() {
    var s = "",
      entry = this.oldest;
    while (entry) {
      s += String(entry.key) + ":" + entry.value;
      entry = entry[NEWER];
      if (entry) {
        s += " < ";
      }
    }
    return s;
  };

  function Entry(key, value) {
    this.key = key;
    this.value = value;
    this[NEWER] = undefined;
    this[OLDER] = undefined;
  }

  function EntryIterator(oldestEntry) {
    this.entry = oldestEntry;
  }
  EntryIterator.prototype[Symbol.iterator] = function () {
    return this;
  };
  EntryIterator.prototype.next = function () {
    var ent = this.entry;
    if (ent) {
      this.entry = ent[NEWER];
      return { done: false, value: [ent.key, ent.value] };
    } else {
      return { done: true, value: undefined };
    }
  };

  function KeyIterator(oldestEntry) {
    this.entry = oldestEntry;
  }
  KeyIterator.prototype[Symbol.iterator] = function () {
    return this;
  };
  KeyIterator.prototype.next = function () {
    var ent = this.entry;
    if (ent) {
      this.entry = ent[NEWER];
      return { done: false, value: ent.key };
    } else {
      return { done: true, value: undefined };
    }
  };

  function ValueIterator(oldestEntry) {
    this.entry = oldestEntry;
  }
  ValueIterator.prototype[Symbol.iterator] = function () {
    return this;
  };
  ValueIterator.prototype.next = function () {
    var ent = this.entry;
    if (ent) {
      this.entry = ent[NEWER];
      return { done: false, value: ent.value };
    } else {
      return { done: true, value: undefined };
    }
  };

  // GoogleMutant by Iván Sánchez Ortega <ivan@sanchezortega.es>

  function waitForAPI(callback, context) {
    var checkCounter = 0,
      intervalId = null;

    intervalId = setInterval(function () {
      if (checkCounter >= 20) {
        clearInterval(intervalId);
        throw new Error("window.google not found after 10 seconds");
      }
      if (!!window.google && !!window.google.maps && !!window.google.maps.Map) {
        clearInterval(intervalId);
        callback.call(context);
      }
      ++checkCounter;
    }, 500);
  }

  // 🍂class GridLayer.GoogleMutant
  // 🍂extends GridLayer
  L.GridLayer.GoogleMutant = L.GridLayer.extend({
    options: {
      maxZoom: 21, // can be 23, but ugly if more than maxNativeZoom
      // 🍂option type: String = 'roadmap'
      // Google's map type. Valid values are 'roadmap', 'satellite' or 'terrain'. 'hybrid' is not really supported.
      type: "roadmap",
      maxNativeZoom: 21,
    },

    initialize: function (options) {
      L.GridLayer.prototype.initialize.call(this, options);

      // Couple data structures indexed by tile key
      this._tileCallbacks = {}; // Callbacks for promises for tiles that are expected
      this._lru = new LRUMap(100); // Tile LRU cache

      this._imagesPerTile = this.options.type === "hybrid" ? 2 : 1;

      this._boundOnMutatedImage = this._onMutatedImage.bind(this);
    },

    onAdd: function (map) {
      var this$1 = this;

      L.GridLayer.prototype.onAdd.call(this, map);
      this._initMutantContainer();

      // Attribution and logo nodes are not mutated a second time if the
      // mutant is removed and re-added to the map, hence they are
      // not cleaned up on layer removal, so they can be added here.
      if (this._logoContainer) {
        map._controlCorners.bottomleft.appendChild(this._logoContainer);
      }
      if (this._attributionContainer) {
        map._controlCorners.bottomright.appendChild(this._attributionContainer);
      }

      waitForAPI(function () {
        if (!this$1._map) {
          return;
        }
        this$1._initMutant();

        //handle layer being added to a map for which there are no Google tiles at the given zoom
        google.maps.event.addListenerOnce(this$1._mutant, "idle", function () {
          if (!this$1._map) {
            return;
          }
          this$1._checkZoomLevels();
          this$1._mutantIsReady = true;
        });
      });
    },

    onRemove: function (map) {
      L.GridLayer.prototype.onRemove.call(this, map);
      this._observer.disconnect();
      map._container.removeChild(this._mutantContainer);
      if (this._logoContainer) {
        L.DomUtil.remove(this._logoContainer);
      }
      if (this._attributionContainer) {
        L.DomUtil.remove(this._attributionContainer);
      }
      if (this._mutant) {
        google.maps.event.clearListeners(this._mutant, "idle");
      }
    },

    // 🍂method addGoogleLayer(name: String, options?: Object): this
    // Adds layer with the given name and options to the google Map instance.
    // `name`: one of the google maps API layers, with it's constructor available in `google.maps` object.
    // currently following values supported: 'TrafficLayer', 'TransitLayer', 'BicyclingLayer'.
    // `options`: see https://developers.google.com/maps/documentation/javascript/reference/map
    addGoogleLayer: function (googleLayerName, options) {
      var this$1 = this;

      if (!this._subLayers) {
        this._subLayers = {};
      }
      this.whenReady(function () {
        var Constructor = google.maps[googleLayerName];
        var googleLayer = new Constructor(options);
        googleLayer.setMap(this$1._mutant);
        this$1._subLayers[googleLayerName] = googleLayer;
      });
      return this;
    },

    // 🍂method removeGoogleLayer(name: String): this
    // Removes layer with the given name from the google Map instance.
    removeGoogleLayer: function (googleLayerName) {
      var this$1 = this;

      this.whenReady(function () {
        var googleLayer =
          this$1._subLayers && this$1._subLayers[googleLayerName];
        if (googleLayer) {
          googleLayer.setMap(null);
          delete this$1._subLayers[googleLayerName];
        }
      });
      return this;
    },

    _initMutantContainer: function () {
      if (!this._mutantContainer) {
        this._mutantContainer = L.DomUtil.create(
          "div",
          "leaflet-google-mutant leaflet-top leaflet-left"
        );
        this._mutantContainer.id =
          "_MutantContainer_" + L.Util.stamp(this._mutantContainer);
        this._mutantContainer.style.pointerEvents = "none";
        this._mutantContainer.style.visibility = "hidden";

        L.DomEvent.off(this._mutantContainer);
      }
      this._map.getContainer().appendChild(this._mutantContainer);

      this.setOpacity(this.options.opacity);
      var style = this._mutantContainer.style;
      if (this._map.options.zoomSnap < 1) {
        // Fractional zoom needs a bigger mutant container in order to load more (smaller) tiles
        style.width = "180%";
        style.height = "180%";
      } else {
        style.width = "100%";
        style.height = "100%";
      }
      style.zIndex = -1;

      this._attachObserver(this._mutantContainer);
    },

    _initMutant: function () {
      if (this._mutant) {
        return;
      }

      var map = new google.maps.Map(this._mutantContainer, {
        center: { lat: 0, lng: 0 },
        zoom: 0,
        tilt: 0,
        mapTypeId: this.options.type,
        disableDefaultUI: true,
        keyboardShortcuts: false,
        draggable: false,
        disableDoubleClickZoom: true,
        scrollwheel: false,
        styles: this.options.styles || [],
        backgroundColor: "transparent",
      });

      this._mutant = map;

      this._update();

      // 🍂event spawned
      // Fired when the mutant has been created.
      this.fire("spawned", { mapObject: map });

      this._waitControls();
      this.once("controls_ready", this._setupAttribution);
    },

    _attachObserver: function _attachObserver(node) {
      if (!this._observer) {
        this._observer = new MutationObserver(this._onMutations.bind(this));
      }

      // pass in the target node, as well as the observer options
      this._observer.observe(node, { childList: true, subtree: true });

      // if we are reusing an old _mutantContainer, we must manually detect
      // all existing tiles in it
      Array.prototype.forEach.call(
        node.querySelectorAll("img"),
        this._boundOnMutatedImage
      );
    },

    _waitControls: function () {
      var this$1 = this;

      var id = setInterval(function () {
        var layoutManager = this$1._mutant.__gm.layoutManager;
        if (!layoutManager) {
          return;
        }
        clearInterval(id);
        var positions;
        // iterate through obfuscated key names to find positions set (atm: layoutManager.o)
        Object.keys(layoutManager).forEach(function (key) {
          var el = layoutManager[key];
          if (el.get) {
            if (el.get(1) instanceof Node) {
              positions = el;
            }
          }
        });
        // 🍂event controls_ready
        // Fired when controls positions get available (passed in `positions` property).
        this$1.fire("controls_ready", { positions: positions });
      }, 50);
    },

    _setupAttribution: function (ev) {
      // https://developers.google.com/maps/documentation/javascript/reference/control#ControlPosition
      var pos = google.maps.ControlPosition;
      var ctr = (this._attributionContainer = ev.positions.get(
        pos.BOTTOM_RIGHT
      ));
      L.DomUtil.addClass(ctr, "leaflet-control leaflet-control-attribution");
      L.DomEvent.disableClickPropagation(ctr);
      ctr.style.height = "14px";
      this._map._controlCorners.bottomright.appendChild(ctr);

      this._logoContainer = ev.positions.get(pos.BOTTOM_LEFT);
      this._logoContainer.style.pointerEvents = "auto";
      this._map._controlCorners.bottomleft.appendChild(this._logoContainer);
    },

    _onMutations: function _onMutations(mutations) {
      for (var i = 0; i < mutations.length; ++i) {
        var mutation = mutations[i];
        for (var j = 0; j < mutation.addedNodes.length; ++j) {
          var node = mutation.addedNodes[j];

          if (node instanceof HTMLImageElement) {
            this._onMutatedImage(node);
          } else if (node instanceof HTMLElement) {
            Array.prototype.forEach.call(
              node.querySelectorAll("img"),
              this._boundOnMutatedImage
            );
          }
        }
      }
    },

    // Only images which 'src' attrib match this will be considered for moving around.
    // Looks like some kind of string-based protobuf, maybe??
    // Only the roads (and terrain, and vector-based stuff) match this pattern
    _roadRegexp: /!1i(\d+)!2i(\d+)!3i(\d+)!/,

    // On the other hand, raster imagery matches this other pattern
    _satRegexp: /x=(\d+)&y=(\d+)&z=(\d+)/,

    // On small viewports, when zooming in/out, a static image is requested
    // This will not be moved around, just removed from the DOM.
    _staticRegExp: /StaticMapService\.GetMapImage/,

    _onMutatedImage: function _onMutatedImage(imgNode) {
      var coords;
      var match = imgNode.src.match(this._roadRegexp);
      var sublayer = 0;

      if (match) {
        coords = {
          z: match[1],
          x: match[2],
          y: match[3],
        };
        if (this._imagesPerTile > 1) {
          imgNode.style.zIndex = 1;
          sublayer = 1;
        }
      } else {
        match = imgNode.src.match(this._satRegexp);
        if (match) {
          coords = {
            x: match[1],
            y: match[2],
            z: match[3],
          };
        }
        // imgNode.style.zIndex = 0;
        sublayer = 0;
      }

      if (coords) {
        var tileKey = this._tileCoordsToKey(coords);
        imgNode.style.position = "absolute";

        var key = tileKey + "/" + sublayer;
        // Cache img so it can also be used in subsequent tile requests
        this._lru.set(key, imgNode);

        if (key in this._tileCallbacks && this._tileCallbacks[key]) {
          // Use the tile for *all* pending callbacks. They'll be cloned anyway.
          this._tileCallbacks[key].forEach(function (callback) {
            return callback(imgNode);
          });
          delete this._tileCallbacks[key];
        }
      }
    },

    createTile: function (coords, done) {
      var key = this._tileCoordsToKey(coords),
        tileContainer = L.DomUtil.create("div");

      tileContainer.style.textAlign = "left";
      tileContainer.dataset.pending = this._imagesPerTile;
      done = done.bind(this, null, tileContainer);

      for (var i = 0; i < this._imagesPerTile; ++i) {
        var key2 = key + "/" + i,
          imgNode = this._lru.get(key2);
        if (imgNode) {
          tileContainer.appendChild(this._clone(imgNode));
          --tileContainer.dataset.pending;
        } else {
          this._tileCallbacks[key2] = this._tileCallbacks[key2] || [];
          this._tileCallbacks[key2].push(
            function (c /*, k2*/) {
              return function (imgNode) {
                c.appendChild(this._clone(imgNode));
                --c.dataset.pending;
                if (!parseInt(c.dataset.pending)) {
                  done();
                }
              }.bind(this);
            }.bind(this)(tileContainer /*, key2*/)
          );
        }
      }

      if (!parseInt(tileContainer.dataset.pending)) {
        L.Util.requestAnimFrame(done);
      }
      return tileContainer;
    },

    _clone: function (imgNode) {
      var clonedImgNode = imgNode.cloneNode(true);
      clonedImgNode.style.visibility = "visible";
      return clonedImgNode;
    },

    _checkZoomLevels: function () {
      //setting the zoom level on the Google map may result in a different zoom level than the one requested
      //(it won't go beyond the level for which they have data).
      var zoomLevel = this._map.getZoom(),
        gMapZoomLevel = this._mutant.getZoom();

      if (!zoomLevel || !gMapZoomLevel) {
        return;
      }

      if (
        gMapZoomLevel !== zoomLevel || //zoom levels are out of sync, Google doesn't have data
        gMapZoomLevel > this.options.maxNativeZoom
      ) {
        //at current location, Google does have data (contrary to maxNativeZoom)
        //Update maxNativeZoom
        this._setMaxNativeZoom(gMapZoomLevel);
      }
    },

    _setMaxNativeZoom: function (zoomLevel) {
      if (zoomLevel !== this.options.maxNativeZoom) {
        this.options.maxNativeZoom = zoomLevel;
        this._resetView();
      }
    },

    _update: function (center) {
      // zoom level check needs to happen before super's implementation (tile addition/creation)
      // otherwise tiles may be missed if maxNativeZoom is not yet correctly determined
      if (this._mutant) {
        center = center || this._map.getCenter();
        var _center = new google.maps.LatLng(center.lat, center.lng),
          zoom = Math.round(this._map.getZoom()),
          mutantZoom = this._mutant.getZoom();

        this._mutant.setCenter(_center);

        //ignore fractional zoom levels
        if (zoom !== mutantZoom) {
          this._mutant.setZoom(zoom);

          if (this._mutantIsReady) {
            this._checkZoomLevels();
          }
          //else zoom level check will be done later by 'idle' handler
        }
      }

      L.GridLayer.prototype._update.call(this, center);
    },

    // @method whenReady(fn: Function, context?: Object): this
    // Runs the given function `fn` when the mutant gets initialized, or immediately
    // if it's already initialized, optionally passing a function context.
    whenReady: function (callback, context) {
      if (this._mutant) {
        callback.call(context || this, { target: this });
      } else {
        this.on("spawned", callback, context);
      }
      return this;
    },
  });

  // 🍂factory gridLayer.googleMutant(options)
  // Returns a new `GridLayer.GoogleMutant` given its options
  L.gridLayer.googleMutant = function (options) {
    return new L.GridLayer.GoogleMutant(options);
  };
})();
//# sourceMappingURL=Leaflet.GoogleMutant.js.map;
// source --> https://prontosocialchef.it/wp-content/plugins/listeo-core/assets/js/control.geocoder.js?ver=1.8.17 
/* @preserve
 * Leaflet Control Geocoder 1.8.3
 * https://github.com/perliedman/leaflet-control-geocoder
 *
 * Copyright (c) 2012 sa3m (https://github.com/sa3m)
 * Copyright (c) 2018 Per Liedman
 * All rights reserved.
 */

this.L = this.L || {};
this.L.Control = this.L.Control || {};
this.L.Control.Geocoder = (function (L) {
  'use strict';

  L = L && L.hasOwnProperty('default') ? L['default'] : L;

  var lastCallbackId = 0;

  // Adapted from handlebars.js
  // https://github.com/wycats/handlebars.js/
  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;
  var escape = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };

  function escapeChar(chr) {
    return escape[chr];
  }

  function htmlEscape(string) {
    if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;

    if (!possible.test(string)) {
      return string;
    }
    return string.replace(badChars, escapeChar);
  }

  function jsonp(url, params, callback, context, jsonpParam) {
    var callbackId = '_l_geocoder_' + lastCallbackId++;
    params[jsonpParam || 'callback'] = callbackId;
    window[callbackId] = L.Util.bind(callback, context);
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url + getParamString(params);
    script.id = callbackId;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  function getJSON(url, params, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState !== 4) {
        return;
      }
      var message;
      if (xmlHttp.status !== 200 && xmlHttp.status !== 304) {
        message = '';
      } else if (typeof xmlHttp.response === 'string') {
        // IE doesn't parse JSON responses even with responseType: 'json'.
        try {
          message = JSON.parse(xmlHttp.response);
        } catch (e) {
          // Not a JSON response
          message = xmlHttp.response;
        }
      } else {
        message = xmlHttp.response;
      }
      callback(message);
    };
    xmlHttp.open('GET', url + getParamString(params), true);
    xmlHttp.responseType = 'json';
    xmlHttp.setRequestHeader('Accept', 'application/json');
    xmlHttp.send(null);
  }

  function template(str, data) {
    return str.replace(/\{ *([\w_]+) *\}/g, function(str, key) {
      var value = data[key];
      if (value === undefined) {
        value = '';
      } else if (typeof value === 'function') {
        value = value(data);
      }
      return htmlEscape(value);
    });
  }

  function getParamString(obj, existingUrl, uppercase) {
    var params = [];
    for (var i in obj) {
      var key = encodeURIComponent(uppercase ? i.toUpperCase() : i);
      var value = obj[i];
      if (!L.Util.isArray(value)) {
        params.push(key + '=' + encodeURIComponent(value));
      } else {
        for (var j = 0; j < value.length; j++) {
          params.push(key + '=' + encodeURIComponent(value[j]));
        }
      }
    }
    return (!existingUrl || existingUrl.indexOf('?') === -1 ? '?' : '&') + params.join('&');
  }

  var ArcGis = L.Class.extend({
    options: {
      service_url: 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer'
    },

    initialize: function(accessToken, options) {
      L.setOptions(this, options);
      this._accessToken = accessToken;
    },

    geocode: function(query, cb, context) {
      var params = {
        SingleLine: query,
        outFields: 'Addr_Type',
        forStorage: false,
        maxLocations: 10,
        f: 'json'
      };

      if (this._key && this._key.length) {
        params.token = this._key;
      }

      getJSON(
        this.options.service_url + '/findAddressCandidates',
        L.extend(params, this.options.geocodingQueryParams),
        function(data) {
          var results = [],
            loc,
            latLng,
            latLngBounds;

          if (data.candidates && data.candidates.length) {
            for (var i = 0; i <= data.candidates.length - 1; i++) {
              loc = data.candidates[i];
              latLng = L.latLng(loc.location.y, loc.location.x);
              latLngBounds = L.latLngBounds(
                L.latLng(loc.extent.ymax, loc.extent.xmax),
                L.latLng(loc.extent.ymin, loc.extent.xmin)
              );
              results[i] = {
                name: loc.address,
                bbox: latLngBounds,
                center: latLng
              };
            }
          }

          cb.call(context, results);
        }
      );
    },

    suggest: function(query, cb, context) {
      return this.geocode(query, cb, context);
    },

    reverse: function(location, scale, cb, context) {
      var params = {
        location: encodeURIComponent(location.lng) + ',' + encodeURIComponent(location.lat),
        distance: 100,
        f: 'json'
      };

      getJSON(this.options.service_url + '/reverseGeocode', params, function(data) {
        var result = [],
          loc;

        if (data && !data.error) {
          loc = L.latLng(data.location.y, data.location.x);
          result.push({
            name: data.address.Match_addr,
            center: loc,
            bounds: L.latLngBounds(loc, loc)
          });
        }

        cb.call(context, result);
      });
    }
  });

  function arcgis(accessToken, options) {
    return new ArcGis(accessToken, options);
  }

  var Bing = L.Class.extend({
    initialize: function(key) {
      this.key = key;
    },

    geocode: function(query, cb, context) {
      jsonp(
        'https://dev.virtualearth.net/REST/v1/Locations',
        {
          query: query,
          key: this.key
        },
        function(data) {
          var results = [];
          if (data.resourceSets.length > 0) {
            for (var i = data.resourceSets[0].resources.length - 1; i >= 0; i--) {
              var resource = data.resourceSets[0].resources[i],
                bbox = resource.bbox;
              results[i] = {
                name: resource.name,
                bbox: L.latLngBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]),
                center: L.latLng(resource.point.coordinates)
              };
            }
          }
          cb.call(context, results);
        },
        this,
        'jsonp'
      );
    },

    reverse: function(location, scale, cb, context) {
      jsonp(
        '//dev.virtualearth.net/REST/v1/Locations/' + location.lat + ',' + location.lng,
        {
          key: this.key
        },
        function(data) {
          var results = [];
          for (var i = data.resourceSets[0].resources.length - 1; i >= 0; i--) {
            var resource = data.resourceSets[0].resources[i],
              bbox = resource.bbox;
            results[i] = {
              name: resource.name,
              bbox: L.latLngBounds([bbox[0], bbox[1]], [bbox[2], bbox[3]]),
              center: L.latLng(resource.point.coordinates)
            };
          }
          cb.call(context, results);
        },
        this,
        'jsonp'
      );
    }
  });

  function bing(key) {
    return new Bing(key);
  }

  var Google = L.Class.extend({
    options: {
      serviceUrl: 'https://maps.googleapis.com/maps/api/geocode/json',
      geocodingQueryParams: {},
      reverseQueryParams: {}
    },

    initialize: function(key, options) {
      this._key = key;
      L.setOptions(this, options);
      // Backwards compatibility
      this.options.serviceUrl = this.options.service_url || this.options.serviceUrl;
    },

    geocode: function(query, cb, context) {
      var params = {
        address: query
      };

      if (this._key && this._key.length) {
        params.key = this._key;
      }

      params = L.Util.extend(params, this.options.geocodingQueryParams);

      getJSON(this.options.serviceUrl, params, function(data) {
        var results = [],
          loc,
          latLng,
          latLngBounds;
        if (data.results && data.results.length) {
          for (var i = 0; i <= data.results.length - 1; i++) {
            loc = data.results[i];
            latLng = L.latLng(loc.geometry.location);
            latLngBounds = L.latLngBounds(
              L.latLng(loc.geometry.viewport.northeast),
              L.latLng(loc.geometry.viewport.southwest)
            );
            results[i] = {
              name: loc.formatted_address,
              bbox: latLngBounds,
              center: latLng,
              properties: loc.address_components
            };
          }
        }

        cb.call(context, results);
      });
    },

    reverse: function(location, scale, cb, context) {
      var params = {
        latlng: encodeURIComponent(location.lat) + ',' + encodeURIComponent(location.lng)
      };
      params = L.Util.extend(params, this.options.reverseQueryParams);
      if (this._key && this._key.length) {
        params.key = this._key;
      }

      getJSON(this.options.serviceUrl, params, function(data) {
        var results = [],
          loc,
          latLng,
          latLngBounds;
        if (data.results && data.results.length) {
          for (var i = 0; i <= data.results.length - 1; i++) {
            loc = data.results[i];
            latLng = L.latLng(loc.geometry.location);
            latLngBounds = L.latLngBounds(
              L.latLng(loc.geometry.viewport.northeast),
              L.latLng(loc.geometry.viewport.southwest)
            );
            results[i] = {
              name: loc.formatted_address,
              bbox: latLngBounds,
              center: latLng,
              properties: loc.address_components
            };
          }
        }

        cb.call(context, results);
      });
    }
  });

  function google(key, options) {
    return new Google(key, options);
  }

  var HERE = L.Class.extend({
    options: {
      geocodeUrl: 'http://geocoder.api.here.com/6.2/geocode.json',
      reverseGeocodeUrl: 'http://reverse.geocoder.api.here.com/6.2/reversegeocode.json',
      app_id: '<insert your app_id here>',
      app_code: '<insert your app_code here>',
      geocodingQueryParams: {},
      reverseQueryParams: {}
    },

    initialize: function(options) {
      L.setOptions(this, options);
    },

    geocode: function(query, cb, context) {
      var params = {
        searchtext: query,
        gen: 9,
        app_id: this.options.app_id,
        app_code: this.options.app_code,
        jsonattributes: 1
      };
      params = L.Util.extend(params, this.options.geocodingQueryParams);
      this.getJSON(this.options.geocodeUrl, params, cb, context);
    },

    reverse: function(location, scale, cb, context) {
      var params = {
        prox: encodeURIComponent(location.lat) + ',' + encodeURIComponent(location.lng),
        mode: 'retrieveAddresses',
        app_id: this.options.app_id,
        app_code: this.options.app_code,
        gen: 9,
        jsonattributes: 1
      };
      params = L.Util.extend(params, this.options.reverseQueryParams);
      this.getJSON(this.options.reverseGeocodeUrl, params, cb, context);
    },

    getJSON: function(url, params, cb, context) {
      getJSON(url, params, function(data) {
        var results = [],
          loc,
          latLng,
          latLngBounds;
        if (data.response.view && data.response.view.length) {
          for (var i = 0; i <= data.response.view[0].result.length - 1; i++) {
            loc = data.response.view[0].result[i].location;
            latLng = L.latLng(loc.displayPosition.latitude, loc.displayPosition.longitude);
            latLngBounds = L.latLngBounds(
              L.latLng(loc.mapView.topLeft.latitude, loc.mapView.topLeft.longitude),
              L.latLng(loc.mapView.bottomRight.latitude, loc.mapView.bottomRight.longitude)
            );
            results[i] = {
              name: loc.address.label,
              bbox: latLngBounds,
              center: latLng
            };
          }
        }
        cb.call(context, results);
      });
    }
  });

  function here(options) {
    return new HERE(options);
  }

  var LatLng = L.Class.extend({
    options: {
      // the next geocoder to use
      next: undefined,
      sizeInMeters: 10000
    },

    initialize: function(options) {
      L.Util.setOptions(this, options);
    },

    geocode: function(query, cb, context) {
      var match;
      var center;
      // regex from https://github.com/openstreetmap/openstreetmap-website/blob/master/app/controllers/geocoder_controller.rb
      if ((match = query.match(/^([NS])\s*(\d{1,3}(?:\.\d*)?)\W*([EW])\s*(\d{1,3}(?:\.\d*)?)$/))) {
        // [NSEW] decimal degrees
        center = L.latLng(
          (/N/i.test(match[1]) ? 1 : -1) * parseFloat(match[2]),
          (/E/i.test(match[3]) ? 1 : -1) * parseFloat(match[4])
        );
      } else if (
        (match = query.match(/^(\d{1,3}(?:\.\d*)?)\s*([NS])\W*(\d{1,3}(?:\.\d*)?)\s*([EW])$/))
      ) {
        // decimal degrees [NSEW]
        center = L.latLng(
          (/N/i.test(match[2]) ? 1 : -1) * parseFloat(match[1]),
          (/E/i.test(match[4]) ? 1 : -1) * parseFloat(match[3])
        );
      } else if (
        (match = query.match(
          /^([NS])\s*(\d{1,3})°?\s*(\d{1,3}(?:\.\d*)?)?['′]?\W*([EW])\s*(\d{1,3})°?\s*(\d{1,3}(?:\.\d*)?)?['′]?$/
        ))
      ) {
        // [NSEW] degrees, decimal minutes
        center = L.latLng(
          (/N/i.test(match[1]) ? 1 : -1) * (parseFloat(match[2]) + parseFloat(match[3] / 60)),
          (/E/i.test(match[4]) ? 1 : -1) * (parseFloat(match[5]) + parseFloat(match[6] / 60))
        );
      } else if (
        (match = query.match(
          /^(\d{1,3})°?\s*(\d{1,3}(?:\.\d*)?)?['′]?\s*([NS])\W*(\d{1,3})°?\s*(\d{1,3}(?:\.\d*)?)?['′]?\s*([EW])$/
        ))
      ) {
        // degrees, decimal minutes [NSEW]
        center = L.latLng(
          (/N/i.test(match[3]) ? 1 : -1) * (parseFloat(match[1]) + parseFloat(match[2] / 60)),
          (/E/i.test(match[6]) ? 1 : -1) * (parseFloat(match[4]) + parseFloat(match[5] / 60))
        );
      } else if (
        (match = query.match(
          /^([NS])\s*(\d{1,3})°?\s*(\d{1,2})['′]?\s*(\d{1,3}(?:\.\d*)?)?["″]?\W*([EW])\s*(\d{1,3})°?\s*(\d{1,2})['′]?\s*(\d{1,3}(?:\.\d*)?)?["″]?$/
        ))
      ) {
        // [NSEW] degrees, minutes, decimal seconds
        center = L.latLng(
          (/N/i.test(match[1]) ? 1 : -1) *
            (parseFloat(match[2]) + parseFloat(match[3] / 60 + parseFloat(match[4] / 3600))),
          (/E/i.test(match[5]) ? 1 : -1) *
            (parseFloat(match[6]) + parseFloat(match[7] / 60) + parseFloat(match[8] / 3600))
        );
      } else if (
        (match = query.match(
          /^(\d{1,3})°?\s*(\d{1,2})['′]?\s*(\d{1,3}(?:\.\d*)?)?["″]\s*([NS])\W*(\d{1,3})°?\s*(\d{1,2})['′]?\s*(\d{1,3}(?:\.\d*)?)?["″]?\s*([EW])$/
        ))
      ) {
        // degrees, minutes, decimal seconds [NSEW]
        center = L.latLng(
          (/N/i.test(match[4]) ? 1 : -1) *
            (parseFloat(match[1]) + parseFloat(match[2] / 60 + parseFloat(match[3] / 3600))),
          (/E/i.test(match[8]) ? 1 : -1) *
            (parseFloat(match[5]) + parseFloat(match[6] / 60) + parseFloat(match[7] / 3600))
        );
      } else if (
        (match = query.match(/^\s*([+-]?\d+(?:\.\d*)?)\s*[\s,]\s*([+-]?\d+(?:\.\d*)?)\s*$/))
      ) {
        center = L.latLng(parseFloat(match[1]), parseFloat(match[2]));
      }
      if (center) {
        var results = [
          {
            name: query,
            center: center,
            bbox: center.toBounds(this.options.sizeInMeters)
          }
        ];
        cb.call(context, results);
      } else if (this.options.next) {
        this.options.next.geocode(query, cb, context);
      }
    }
  });

  function latLng(options) {
    return new LatLng(options);
  }

  var Mapbox = L.Class.extend({
    options: {
      serviceUrl: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
      geocodingQueryParams: {},
      reverseQueryParams: {}
    },

    initialize: function(accessToken, options) {
      L.setOptions(this, options);
      this.options.geocodingQueryParams.access_token = accessToken;
      this.options.reverseQueryParams.access_token = accessToken;
    },

    geocode: function(query, cb, context) {
      var params = this.options.geocodingQueryParams;
      if (
        params.proximity !== undefined &&
        params.proximity.lat !== undefined &&
        params.proximity.lng !== undefined
      ) {
        params.proximity = params.proximity.lng + ',' + params.proximity.lat;
      }
      getJSON(this.options.serviceUrl + encodeURIComponent(query) + '.json', params, function(data) {
        var results = [],
          loc,
          latLng,
          latLngBounds;
        if (data.features && data.features.length) {
          for (var i = 0; i <= data.features.length - 1; i++) {
            loc = data.features[i];
            latLng = L.latLng(loc.center.reverse());
            if (loc.bbox) {
              latLngBounds = L.latLngBounds(
                L.latLng(loc.bbox.slice(0, 2).reverse()),
                L.latLng(loc.bbox.slice(2, 4).reverse())
              );
            } else {
              latLngBounds = L.latLngBounds(latLng, latLng);
            }

            var properties = {
              text: loc.text,
              address: loc.address
            };

            for (var j = 0; j < (loc.context || []).length; j++) {
              var id = loc.context[j].id.split('.')[0];
              properties[id] = loc.context[j].text;
            }

            results[i] = {
              name: loc.place_name,
              bbox: latLngBounds,
              center: latLng,
              properties: properties
            };
          }
        }

        cb.call(context, results);
      });
    },

    suggest: function(query, cb, context) {
      return this.geocode(query, cb, context);
    },

    reverse: function(location, scale, cb, context) {
      getJSON(
        this.options.serviceUrl +
          encodeURIComponent(location.lng) +
          ',' +
          encodeURIComponent(location.lat) +
          '.json',
        this.options.reverseQueryParams,
        function(data) {
          var results = [],
            loc,
            latLng,
            latLngBounds;
          if (data.features && data.features.length) {
            for (var i = 0; i <= data.features.length - 1; i++) {
              loc = data.features[i];
              latLng = L.latLng(loc.center.reverse());
              if (loc.bbox) {
                latLngBounds = L.latLngBounds(
                  L.latLng(loc.bbox.slice(0, 2).reverse()),
                  L.latLng(loc.bbox.slice(2, 4).reverse())
                );
              } else {
                latLngBounds = L.latLngBounds(latLng, latLng);
              }
              results[i] = {
                name: loc.place_name,
                bbox: latLngBounds,
                center: latLng
              };
            }
          }

          cb.call(context, results);
        }
      );
    }
  });

  function mapbox(accessToken, options) {
    return new Mapbox(accessToken, options);
  }

  var MapQuest = L.Class.extend({
    options: {
      serviceUrl: 'https://www.mapquestapi.com/geocoding/v1'
    },

    initialize: function(key, options) {
      // MapQuest seems to provide URI encoded API keys,
      // so to avoid encoding them twice, we decode them here
      this._key = decodeURIComponent(key);

      L.Util.setOptions(this, options);
    },

    _formatName: function() {
      var r = [],
        i;
      for (i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
          r.push(arguments[i]);
        }
      }

      return r.join(', ');
    },

    geocode: function(query, cb, context) {
      getJSON(
        this.options.serviceUrl + '/address',
        {
          key: this._key,
          location: query,
          limit: 5,
          outFormat: 'json'
        },
        L.bind(function(data) {
          var results = [],
            loc,
            latLng;
          if (data.results && data.results[0].locations) {
            for (var i = data.results[0].locations.length - 1; i >= 0; i--) {
              loc = data.results[0].locations[i];
              latLng = L.latLng(loc.latLng);
              results[i] = {
                name: this._formatName(loc.street, loc.adminArea4, loc.adminArea3, loc.adminArea1),
                bbox: L.latLngBounds(latLng, latLng),
                center: latLng
              };
            }
          }

          cb.call(context, results);
        }, this)
      );
    },

    reverse: function(location, scale, cb, context) {
      getJSON(
        this.options.serviceUrl + '/reverse',
        {
          key: this._key,
          location: location.lat + ',' + location.lng,
          outputFormat: 'json'
        },
        L.bind(function(data) {
          var results = [],
            loc,
            latLng;
          if (data.results && data.results[0].locations) {
            for (var i = data.results[0].locations.length - 1; i >= 0; i--) {
              loc = data.results[0].locations[i];
              latLng = L.latLng(loc.latLng);
              results[i] = {
                name: this._formatName(loc.street, loc.adminArea4, loc.adminArea3, loc.adminArea1),
                bbox: L.latLngBounds(latLng, latLng),
                center: latLng
              };
            }
          }

          cb.call(context, results);
        }, this)
      );
    }
  });

  function mapQuest(key, options) {
    return new MapQuest(key, options);
  }

  var Neutrino = L.Class.extend({
    options: {
      userId: '<insert your userId here>',
      apiKey: '<insert your apiKey here>',
      serviceUrl: 'https://neutrinoapi.com/'
    },

    initialize: function(options) {
      L.Util.setOptions(this, options);
    },

    // https://www.neutrinoapi.com/api/geocode-address/
    geocode: function(query, cb, context) {
      getJSON(
        this.options.serviceUrl + 'geocode-address',
        {
          apiKey: this.options.apiKey,
          userId: this.options.userId,
          //get three words and make a dot based string
          address: query.split(/\s+/).join('.')
        },
        function(data) {
          var results = [],
            latLng,
            latLngBounds;
          if (data.locations) {
            data.geometry = data.locations[0];
            latLng = L.latLng(data.geometry['latitude'], data.geometry['longitude']);
            latLngBounds = L.latLngBounds(latLng, latLng);
            results[0] = {
              name: data.geometry.address,
              bbox: latLngBounds,
              center: latLng
            };
          }

          cb.call(context, results);
        }
      );
    },

    suggest: function(query, cb, context) {
      return this.geocode(query, cb, context);
    },

    // https://www.neutrinoapi.com/api/geocode-reverse/
    reverse: function(location, scale, cb, context) {
      getJSON(
        this.options.serviceUrl + 'geocode-reverse',
        {
          apiKey: this.options.apiKey,
          userId: this.options.userId,
          latitude: location.lat,
          longitude: location.lng
        },
        function(data) {
          var results = [],
            latLng,
            latLngBounds;
          if (data.status.status == 200 && data.found) {
            latLng = L.latLng(location.lat, location.lng);
            latLngBounds = L.latLngBounds(latLng, latLng);
            results[0] = {
              name: data.address,
              bbox: latLngBounds,
              center: latLng
            };
          }
          cb.call(context, results);
        }
      );
    }
  });

  function neutrino(accessToken) {
    return new Neutrino(accessToken);
  }

  var Nominatim = L.Class.extend({
    options: {
      serviceUrl: 'https://nominatim.openstreetmap.org/',
      geocodingQueryParams: {},
      reverseQueryParams: {},
      htmlTemplate: function(r) {
        var a = r.address,
          parts = [];
        if (a.road || a.building) {
          parts.push('{building} {road} {house_number}');
        }

        if (a.city || a.town || a.village || a.hamlet) {
          parts.push(
            '<span class="' +
              (parts.length > 0 ? 'leaflet-control-geocoder-address-detail' : '') +
              '">{postcode} {city} {town} {village} {hamlet}</span>'
          );
        }

        if (a.state || a.country) {
          parts.push(
            '<span class="' +
              (parts.length > 0 ? 'leaflet-control-geocoder-address-context' : '') +
              '">{state} {country}</span>'
          );
        }

        return template(parts.join('<br/>'), a, true);
      }
    },

    initialize: function(options) {
      L.Util.setOptions(this, options);
    },

    geocode: function(query, cb, context) {
      getJSON(
        this.options.serviceUrl + 'search',
        L.extend(
          {
            q: query,
            limit: 5,
            format: 'json',
            addressdetails: 1
          },
          this.options.geocodingQueryParams
        ),
        L.bind(function(data) {
          var results = [];
          for (var i = data.length - 1; i >= 0; i--) {
            var bbox = data[i].boundingbox;
            for (var j = 0; j < 4; j++) bbox[j] = parseFloat(bbox[j]);
            results[i] = {
              icon: data[i].icon,
              name: data[i].display_name,
              html: this.options.htmlTemplate ? this.options.htmlTemplate(data[i]) : undefined,
              bbox: L.latLngBounds([bbox[0], bbox[2]], [bbox[1], bbox[3]]),
              center: L.latLng(data[i].lat, data[i].lon),
              properties: data[i]
            };
          }
          cb.call(context, results);
        }, this)
      );
    },

    reverse: function(location, scale, cb, context) {
      getJSON(
        this.options.serviceUrl + 'reverse',
        L.extend(
          {
            lat: location.lat,
            lon: location.lng,
            zoom: Math.round(Math.log(scale / 256) / Math.log(2)),
            addressdetails: 1,
            format: 'json'
          },
          this.options.reverseQueryParams
        ),
        L.bind(function(data) {
          var result = [],
            loc;

          if (data && data.lat && data.lon) {
            loc = L.latLng(data.lat, data.lon);
            result.push({
              name: data.display_name,
              html: this.options.htmlTemplate ? this.options.htmlTemplate(data) : undefined,
              center: loc,
              bounds: L.latLngBounds(loc, loc),
              properties: data
            });
          }

          cb.call(context, result);
        }, this)
      );
    }
  });

  function nominatim(options) {
    return new Nominatim(options);
  }

  var OpenLocationCode = L.Class.extend({
    options: {
      OpenLocationCode: undefined,
      codeLength: undefined
    },

    initialize: function(options) {
      L.setOptions(this, options);
    },

    geocode: function(query, cb, context) {
      try {
        var decoded = this.options.OpenLocationCode.decode(query);
        var result = {
          name: query,
          center: L.latLng(decoded.latitudeCenter, decoded.longitudeCenter),
          bbox: L.latLngBounds(
            L.latLng(decoded.latitudeLo, decoded.longitudeLo),
            L.latLng(decoded.latitudeHi, decoded.longitudeHi)
          )
        };
        cb.call(context, [result]);
      } catch (e) {
        console.warn(e); // eslint-disable-line no-console
        cb.call(context, []);
      }
    },
    reverse: function(location, scale, cb, context) {
      try {
        var code = this.options.OpenLocationCode.encode(
          location.lat,
          location.lng,
          this.options.codeLength
        );
        var result = {
          name: code,
          center: L.latLng(location.lat, location.lng),
          bbox: L.latLngBounds(
            L.latLng(location.lat, location.lng),
            L.latLng(location.lat, location.lng)
          )
        };
        cb.call(context, [result]);
      } catch (e) {
        console.warn(e); // eslint-disable-line no-console
        cb.call(context, []);
      }
    }
  });

  function openLocationCode(options) {
    return new OpenLocationCode(options);
  }

  var Pelias = L.Class.extend({
    options: {
      serviceUrl: 'https://api.geocode.earth/v1',
      geocodingQueryParams: {},
      reverseQueryParams: {}
    },

    initialize: function(apiKey, options) {
      L.Util.setOptions(this, options);
      this._apiKey = apiKey;
      this._lastSuggest = 0;
    },

    geocode: function(query, cb, context) {
      var _this = this;
      getJSON(
        this.options.serviceUrl + '/search',
        L.extend(
          {
            api_key: this._apiKey,
            text: query
          },
          this.options.geocodingQueryParams
        ),
        function(data) {
          cb.call(context, _this._parseResults(data, 'bbox'));
        }
      );
    },

    suggest: function(query, cb, context) {
      var _this = this;
      getJSON(
        this.options.serviceUrl + '/autocomplete',
        L.extend(
          {
            api_key: this._apiKey,
            text: query
          },
          this.options.geocodingQueryParams
        ),
        L.bind(function(data) {
          if (data.geocoding.timestamp > this._lastSuggest) {
            this._lastSuggest = data.geocoding.timestamp;
            cb.call(context, _this._parseResults(data, 'bbox'));
          }
        }, this)
      );
    },

    reverse: function(location, scale, cb, context) {
      var _this = this;
      getJSON(
        this.options.serviceUrl + '/reverse',
        L.extend(
          {
            api_key: this._apiKey,
            'point.lat': location.lat,
            'point.lon': location.lng
          },
          this.options.reverseQueryParams
        ),
        function(data) {
          cb.call(context, _this._parseResults(data, 'bounds'));
        }
      );
    },

    _parseResults: function(data, bboxname) {
      var results = [];
      L.geoJson(data, {
        pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng);
        },
        onEachFeature: function(feature, layer) {
          var result = {},
            bbox,
            center;

          if (layer.getBounds) {
            bbox = layer.getBounds();
            center = bbox.getCenter();
          } else if (layer.feature.bbox) {
            center = layer.getLatLng();
            bbox = L.latLngBounds(
              L.GeoJSON.coordsToLatLng(layer.feature.bbox.slice(0, 2)),
              L.GeoJSON.coordsToLatLng(layer.feature.bbox.slice(2, 4))
            );
          } else {
            center = layer.getLatLng();
            bbox = L.latLngBounds(center, center);
          }

          result.name = layer.feature.properties.label;
          result.center = center;
          result[bboxname] = bbox;
          result.properties = layer.feature.properties;
          results.push(result);
        }
      });
      return results;
    }
  });

  function pelias(apiKey, options) {
    return new Pelias(apiKey, options);
  }
  var GeocodeEarth = Pelias;
  var geocodeEarth = pelias;

  var Mapzen = Pelias; // r.i.p.
  var mapzen = pelias;

  var Openrouteservice = Mapzen.extend({
    options: {
      serviceUrl: 'https://api.openrouteservice.org/geocode'
    }
  });
  function openrouteservice(apiKey, options) {
    return new Openrouteservice(apiKey, options);
  }

  var Photon = L.Class.extend({
    options: {
      serviceUrl: 'https://photon.komoot.de/api/',
      reverseUrl: 'https://photon.komoot.de/reverse/',
      nameProperties: ['name', 'street', 'suburb', 'hamlet', 'town', 'city', 'state', 'country']
    },

    initialize: function(options) {
      L.setOptions(this, options);
    },

    geocode: function(query, cb, context) {
      var params = L.extend(
        {
          q: query
        },
        this.options.geocodingQueryParams
      );

      getJSON(
        this.options.serviceUrl,
        params,
        L.bind(function(data) {
          cb.call(context, this._decodeFeatures(data));
        }, this)
      );
    },

    suggest: function(query, cb, context) {
      return this.geocode(query, cb, context);
    },

    reverse: function(latLng, scale, cb, context) {
      var params = L.extend(
        {
          lat: latLng.lat,
          lon: latLng.lng
        },
        this.options.reverseQueryParams
      );

      getJSON(
        this.options.reverseUrl,
        params,
        L.bind(function(data) {
          cb.call(context, this._decodeFeatures(data));
        }, this)
      );
    },

    _decodeFeatures: function(data) {
      var results = [],
        i,
        f,
        c,
        latLng,
        extent,
        bbox;

      if (data && data.features) {
        for (i = 0; i < data.features.length; i++) {
          f = data.features[i];
          c = f.geometry.coordinates;
          latLng = L.latLng(c[1], c[0]);
          extent = f.properties.extent;

          if (extent) {
            bbox = L.latLngBounds([extent[1], extent[0]], [extent[3], extent[2]]);
          } else {
            bbox = L.latLngBounds(latLng, latLng);
          }

          results.push({
            name: this._decodeFeatureName(f),
            html: this.options.htmlTemplate ? this.options.htmlTemplate(f) : undefined,
            center: latLng,
            bbox: bbox,
            properties: f.properties
          });
        }
      }

      return results;
    },

    _decodeFeatureName: function(f) {
      return (this.options.nameProperties || [])
        .map(function(p) {
          return f.properties[p];
        })
        .filter(function(v) {
          return !!v;
        })
        .join(', ');
    }
  });

  function photon(options) {
    return new Photon(options);
  }

  var What3Words = L.Class.extend({
    options: {
      serviceUrl: 'https://api.what3words.com/v2/'
    },

    initialize: function(accessToken) {
      this._accessToken = accessToken;
    },

    geocode: function(query, cb, context) {
      //get three words and make a dot based string
      getJSON(
        this.options.serviceUrl + 'forward',
        {
          key: this._accessToken,
          addr: query.split(/\s+/).join('.')
        },
        function(data) {
          var results = [],
            latLng,
            latLngBounds;
          if (data.geometry) {
            latLng = L.latLng(data.geometry['lat'], data.geometry['lng']);
            latLngBounds = L.latLngBounds(latLng, latLng);
            results[0] = {
              name: data.words,
              bbox: latLngBounds,
              center: latLng
            };
          }

          cb.call(context, results);
        }
      );
    },

    suggest: function(query, cb, context) {
      return this.geocode(query, cb, context);
    },

    reverse: function(location, scale, cb, context) {
      getJSON(
        this.options.serviceUrl + 'reverse',
        {
          key: this._accessToken,
          coords: [location.lat, location.lng].join(',')
        },
        function(data) {
          var results = [],
            latLng,
            latLngBounds;
          if (data.status.status == 200) {
            latLng = L.latLng(data.geometry['lat'], data.geometry['lng']);
            latLngBounds = L.latLngBounds(latLng, latLng);
            results[0] = {
              name: data.words,
              bbox: latLngBounds,
              center: latLng
            };
          }
          cb.call(context, results);
        }
      );
    }
  });

  function what3words(accessToken) {
    return new What3Words(accessToken);
  }



  var geocoders = /*#__PURE__*/Object.freeze({
    ArcGis: ArcGis,
    arcgis: arcgis,
    Bing: Bing,
    bing: bing,
    Google: Google,
    google: google,
    HERE: HERE,
    here: here,
    LatLng: LatLng,
    latLng: latLng,
    Mapbox: Mapbox,
    mapbox: mapbox,
    MapQuest: MapQuest,
    mapQuest: mapQuest,
    Neutrino: Neutrino,
    neutrino: neutrino,
    Nominatim: Nominatim,
    nominatim: nominatim,
    OpenLocationCode: OpenLocationCode,
    openLocationCode: openLocationCode,
    Pelias: Pelias,
    pelias: pelias,
    GeocodeEarth: GeocodeEarth,
    geocodeEarth: geocodeEarth,
    Mapzen: Mapzen,
    mapzen: mapzen,
    Openrouteservice: Openrouteservice,
    openrouteservice: openrouteservice,
    Photon: Photon,
    photon: photon,
    What3Words: What3Words,
    what3words: what3words
  });

  var Geocoder = L.Control.extend({
    options: {
      showUniqueResult: true,
      showResultIcons: false,
      collapsed: true,
      expand: 'touch', // options: touch, click, anythingelse
      position: 'topright',
      placeholder: 'Search...',
      errorMessage: 'Nothing found.',
      queryMinLength: 1,
      suggestMinLength: 3,
      suggestTimeout: 250,
      defaultMarkGeocode: true
    },

    includes: L.Evented.prototype || L.Mixin.Events,

    initialize: function(options) {
      L.Util.setOptions(this, options);
      if (!this.options.geocoder) {
        this.options.geocoder = new Nominatim();
      }

      this._requestCount = 0;
    },

    addThrobberClass: function() {
      L.DomUtil.addClass(this._container, 'leaflet-control-geocoder-throbber');
    },

    removeThrobberClass: function() {
      L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-throbber');
    },

    onAdd: function(map) {
      var className = 'leaflet-control-geocoder',
        container = L.DomUtil.create('div', className + ' leaflet-bar'),
        icon = L.DomUtil.create('button', className + '-icon', container),
        form = (this._form = L.DomUtil.create('div', className + '-form', container)),
        input;

      this._map = map;
      this._container = container;

      icon.innerHTML = '&nbsp;';
      icon.type = 'button';

      input = this._input = L.DomUtil.create('input', '', form);
      input.type = 'text';
      input.placeholder = this.options.placeholder;
      L.DomEvent.disableClickPropagation(input);

      this._errorElement = L.DomUtil.create('div', className + '-form-no-error', container);
      this._errorElement.innerHTML = this.options.errorMessage;

      this._alts = L.DomUtil.create(
        'ul',
        className + '-alternatives leaflet-control-geocoder-alternatives-minimized',
        container
      );
      L.DomEvent.disableClickPropagation(this._alts);

      L.DomEvent.addListener(input, 'keydown', this._keydown, this);
      if (this.options.geocoder.suggest) {
        L.DomEvent.addListener(input, 'input', this._change, this);
      }
      L.DomEvent.addListener(
        input,
        'blur',
        function() {
          if (this.options.collapsed && !this._preventBlurCollapse) {
            this._collapse();
          }
          this._preventBlurCollapse = false;
        },
        this
      );

      if (this.options.collapsed) {
        if (this.options.expand === 'click') {
          L.DomEvent.addListener(
            container,
            'click',
            function(e) {
              if (e.button === 0 && e.detail !== 2) {
                this._toggle();
              }
            },
            this
          );
        } else if (L.Browser.touch && this.options.expand === 'touch') {
          L.DomEvent.addListener(
            container,
            'touchstart mousedown',
            function(e) {
              this._toggle();
              e.preventDefault(); // mobile: clicking focuses the icon, so UI expands and immediately collapses
              e.stopPropagation();
            },
            this
          );
        } else {
          L.DomEvent.addListener(container, 'mouseover', this._expand, this);
          L.DomEvent.addListener(container, 'mouseout', this._collapse, this);
          this._map.on('movestart', this._collapse, this);
        }
      } else {
        this._expand();
        if (L.Browser.touch) {
          L.DomEvent.addListener(
            container,
            'touchstart',
            function() {
              this._geocode();
            },
            this
          );
        } else {
          L.DomEvent.addListener(
            container,
            'click',
            function() {
              this._geocode();
            },
            this
          );
        }
      }

      if (this.options.defaultMarkGeocode) {
        this.on('markgeocode', this.markGeocode, this);
      }

      this.on('startgeocode', this.addThrobberClass, this);
      this.on('finishgeocode', this.removeThrobberClass, this);
      this.on('startsuggest', this.addThrobberClass, this);
      this.on('finishsuggest', this.removeThrobberClass, this);

      L.DomEvent.disableClickPropagation(container);

      return container;
    },

    _geocodeResult: function(results, suggest) {
      if (!suggest && this.options.showUniqueResult && results.length === 1) {
        this._geocodeResultSelected(results[0]);
      } else if (results.length > 0) {
        this._alts.innerHTML = '';
        this._results = results;
        L.DomUtil.removeClass(this._alts, 'leaflet-control-geocoder-alternatives-minimized');
        L.DomUtil.addClass(this._container, 'leaflet-control-geocoder-options-open');
        for (var i = 0; i < results.length; i++) {
          this._alts.appendChild(this._createAlt(results[i], i));
        }
      } else {
        L.DomUtil.addClass(this._container, 'leaflet-control-geocoder-options-error');
        L.DomUtil.addClass(this._errorElement, 'leaflet-control-geocoder-error');
      }
    },

    markGeocode: function(result) {
      result = result.geocode || result;

      this._map.fitBounds(result.bbox);

      if (this._geocodeMarker) {
        this._map.removeLayer(this._geocodeMarker);
      }

      this._geocodeMarker = new L.Marker(result.center)
        .bindPopup(result.html || result.name)
        .addTo(this._map)
        .openPopup();

      return this;
    },

    _geocode: function(suggest) {
      var value = this._input.value;
      if (!suggest && value.length < this.options.queryMinLength) {
        return;
      }

      var requestCount = ++this._requestCount,
        mode = suggest ? 'suggest' : 'geocode',
        eventData = { input: value };

      this._lastGeocode = value;
      if (!suggest) {
        this._clearResults();
      }

      this.fire('start' + mode, eventData);
      this.options.geocoder[mode](
        value,
        function(results) {
          if (requestCount === this._requestCount) {
            eventData.results = results;
            this.fire('finish' + mode, eventData);
            this._geocodeResult(results, suggest);
          }
        },
        this
      );
    },

    _geocodeResultSelected: function(result) {
      this.fire('markgeocode', { geocode: result });
    },

    _toggle: function() {
      if (L.DomUtil.hasClass(this._container, 'leaflet-control-geocoder-expanded')) {
        this._collapse();
      } else {
        this._expand();
      }
    },

    _expand: function() {
      L.DomUtil.addClass(this._container, 'leaflet-control-geocoder-expanded');
      this._input.select();
      this.fire('expand');
    },

    _collapse: function() {
      L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-expanded');
      L.DomUtil.addClass(this._alts, 'leaflet-control-geocoder-alternatives-minimized');
      L.DomUtil.removeClass(this._errorElement, 'leaflet-control-geocoder-error');
      L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-options-open');
      L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-options-error');
      this._input.blur(); // mobile: keyboard shouldn't stay expanded
      this.fire('collapse');
    },

    _clearResults: function() {
      L.DomUtil.addClass(this._alts, 'leaflet-control-geocoder-alternatives-minimized');
      this._selection = null;
      L.DomUtil.removeClass(this._errorElement, 'leaflet-control-geocoder-error');
      L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-options-open');
      L.DomUtil.removeClass(this._container, 'leaflet-control-geocoder-options-error');
    },

    _createAlt: function(result, index) {
      var li = L.DomUtil.create('li', ''),
        a = L.DomUtil.create('a', '', li),
        icon = this.options.showResultIcons && result.icon ? L.DomUtil.create('img', '', a) : null,
        text = result.html ? undefined : document.createTextNode(result.name),
        mouseDownHandler = function mouseDownHandler(e) {
          // In some browsers, a click will fire on the map if the control is
          // collapsed directly after mousedown. To work around this, we
          // wait until the click is completed, and _then_ collapse the
          // control. Messy, but this is the workaround I could come up with
          // for #142.
          this._preventBlurCollapse = true;
          L.DomEvent.stop(e);
          this._geocodeResultSelected(result);
          L.DomEvent.on(
            li,
            'click',
            function() {
              if (this.options.collapsed) {
                this._collapse();
              } else {
                this._clearResults();
              }
            },
            this
          );
        };

      if (icon) {
        icon.src = result.icon;
      }

      li.setAttribute('data-result-index', index);

      if (result.html) {
        a.innerHTML = a.innerHTML + result.html;
      } else {
        a.appendChild(text);
      }

      // Use mousedown and not click, since click will fire _after_ blur,
      // causing the control to have collapsed and removed the items
      // before the click can fire.
      L.DomEvent.addListener(li, 'mousedown touchstart', mouseDownHandler, this);

      return li;
    },

    _keydown: function(e) {
      var _this = this,
        select = function select(dir) {
          if (_this._selection) {
            L.DomUtil.removeClass(_this._selection, 'leaflet-control-geocoder-selected');
            _this._selection = _this._selection[dir > 0 ? 'nextSibling' : 'previousSibling'];
          }
          if (!_this._selection) {
            _this._selection = _this._alts[dir > 0 ? 'firstChild' : 'lastChild'];
          }

          if (_this._selection) {
            L.DomUtil.addClass(_this._selection, 'leaflet-control-geocoder-selected');
          }
        };

      switch (e.keyCode) {
        // Escape
        case 27:
          if (this.options.collapsed) {
            this._collapse();
          } else {
            this._clearResults();
          }
          break;
        // Up
        case 38:
          select(-1);
          break;
        // Up
        case 40:
          select(1);
          break;
        // Enter
        case 13:
          if (this._selection) {
            var index = parseInt(this._selection.getAttribute('data-result-index'), 10);
            this._geocodeResultSelected(this._results[index]);
            this._clearResults();
          } else {
            this._geocode();
          }
          break;
        default:
          return;
      }

      L.DomEvent.preventDefault(e);
    },
    _change: function() {
      var v = this._input.value;
      if (v !== this._lastGeocode) {
        clearTimeout(this._suggestTimeout);
        if (v.length >= this.options.suggestMinLength) {
          this._suggestTimeout = setTimeout(
            L.bind(function() {
              this._geocode(true);
            }, this),
            this.options.suggestTimeout
          );
        } else {
          this._clearResults();
        }
      }
    }
  });

  function geocoder(options) {
    return new Geocoder(options);
  }

  L.Util.extend(Geocoder, geocoders);

  L.Util.extend(L.Control, {
    Geocoder: Geocoder,
    geocoder: geocoder
  });

  return Geocoder;

}(L));
//# sourceMappingURL=Control.Geocoder.js.map;
// source --> https://prontosocialchef.it/wp-content/plugins/listeo-core/assets/js/leaflet.markercluster.js?ver=1.8.17 
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e.Leaflet=e.Leaflet||{},e.Leaflet.markercluster=e.Leaflet.markercluster||{}))}(this,function(e){"use strict";var t=L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,clusterPane:L.Marker.prototype.options.pane,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(e){L.Util.setOptions(this,e),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.addEventParent(this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.addEventParent(this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[],this._childMarkerEventHandlers={dragstart:this._childMarkerDragStart,move:this._childMarkerMoved,dragend:this._childMarkerDragEnd};var t=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,t?this._withAnimation:this._noAnimation),this._markerCluster=t?L.MarkerCluster:L.MarkerClusterNonAnimated},addLayer:function(e){if(e instanceof L.LayerGroup)return this.addLayers([e]);if(!e.getLatLng)return this._nonPointGroup.addLayer(e),this.fire("layeradd",{layer:e}),this;if(!this._map)return this._needsClustering.push(e),this.fire("layeradd",{layer:e}),this;if(this.hasLayer(e))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(e,this._maxZoom),this.fire("layeradd",{layer:e}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons();var t=e,i=this._zoom;if(e.__parent)for(;t.__parent._zoom>=i;)t=t.__parent;return this._currentShownBounds.contains(t.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(e,t):this._animationAddLayerNonAnimated(e,t)),this},removeLayer:function(e){return e instanceof L.LayerGroup?this.removeLayers([e]):e.getLatLng?this._map?e.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(e)),this._removeLayer(e,!0),this.fire("layerremove",{layer:e}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),e.off(this._childMarkerEventHandlers,this),this._featureGroup.hasLayer(e)&&(this._featureGroup.removeLayer(e),e.clusterShow&&e.clusterShow()),this):this:(!this._arraySplice(this._needsClustering,e)&&this.hasLayer(e)&&this._needsRemoving.push({layer:e,latlng:e._latlng}),this.fire("layerremove",{layer:e}),this):(this._nonPointGroup.removeLayer(e),this.fire("layerremove",{layer:e}),this)},addLayers:function(e,t){if(!L.Util.isArray(e))return this.addLayer(e);var i,n=this._featureGroup,r=this._nonPointGroup,s=this.options.chunkedLoading,o=this.options.chunkInterval,a=this.options.chunkProgress,h=e.length,l=0,u=!0;if(this._map){var _=(new Date).getTime(),d=L.bind(function(){for(var c=(new Date).getTime();h>l;l++){if(s&&0===l%200){var p=(new Date).getTime()-c;if(p>o)break}if(i=e[l],i instanceof L.LayerGroup)u&&(e=e.slice(),u=!1),this._extractNonGroupLayers(i,e),h=e.length;else if(i.getLatLng){if(!this.hasLayer(i)&&(this._addLayer(i,this._maxZoom),t||this.fire("layeradd",{layer:i}),i.__parent&&2===i.__parent.getChildCount())){var f=i.__parent.getAllChildMarkers(),m=f[0]===i?f[1]:f[0];n.removeLayer(m)}}else r.addLayer(i),t||this.fire("layeradd",{layer:i})}a&&a(l,h,(new Date).getTime()-_),l===h?(this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout(d,this.options.chunkDelay)},this);d()}else for(var c=this._needsClustering;h>l;l++)i=e[l],i instanceof L.LayerGroup?(u&&(e=e.slice(),u=!1),this._extractNonGroupLayers(i,e),h=e.length):i.getLatLng?this.hasLayer(i)||c.push(i):r.addLayer(i);return this},removeLayers:function(e){var t,i,n=e.length,r=this._featureGroup,s=this._nonPointGroup,o=!0;if(!this._map){for(t=0;n>t;t++)i=e[t],i instanceof L.LayerGroup?(o&&(e=e.slice(),o=!1),this._extractNonGroupLayers(i,e),n=e.length):(this._arraySplice(this._needsClustering,i),s.removeLayer(i),this.hasLayer(i)&&this._needsRemoving.push({layer:i,latlng:i._latlng}),this.fire("layerremove",{layer:i}));return this}if(this._unspiderfy){this._unspiderfy();var a=e.slice(),h=n;for(t=0;h>t;t++)i=a[t],i instanceof L.LayerGroup?(this._extractNonGroupLayers(i,a),h=a.length):this._unspiderfyLayer(i)}for(t=0;n>t;t++)i=e[t],i instanceof L.LayerGroup?(o&&(e=e.slice(),o=!1),this._extractNonGroupLayers(i,e),n=e.length):i.__parent?(this._removeLayer(i,!0,!0),this.fire("layerremove",{layer:i}),r.hasLayer(i)&&(r.removeLayer(i),i.clusterShow&&i.clusterShow())):(s.removeLayer(i),this.fire("layerremove",{layer:i}));return this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),this},clearLayers:function(){return this._map||(this._needsClustering=[],this._needsRemoving=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(e){e.off(this._childMarkerEventHandlers,this),delete e.__parent},this),this._map&&this._generateInitialClusters(),this},getBounds:function(){var e=new L.LatLngBounds;this._topClusterLevel&&e.extend(this._topClusterLevel._bounds);for(var t=this._needsClustering.length-1;t>=0;t--)e.extend(this._needsClustering[t].getLatLng());return e.extend(this._nonPointGroup.getBounds()),e},eachLayer:function(e,t){var i,n,r,s=this._needsClustering.slice(),o=this._needsRemoving;for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(s),n=s.length-1;n>=0;n--){for(i=!0,r=o.length-1;r>=0;r--)if(o[r].layer===s[n]){i=!1;break}i&&e.call(t,s[n])}this._nonPointGroup.eachLayer(e,t)},getLayers:function(){var e=[];return this.eachLayer(function(t){e.push(t)}),e},getLayer:function(e){var t=null;return e=parseInt(e,10),this.eachLayer(function(i){L.stamp(i)===e&&(t=i)}),t},hasLayer:function(e){if(!e)return!1;var t,i=this._needsClustering;for(t=i.length-1;t>=0;t--)if(i[t]===e)return!0;for(i=this._needsRemoving,t=i.length-1;t>=0;t--)if(i[t].layer===e)return!1;return!(!e.__parent||e.__parent._group!==this)||this._nonPointGroup.hasLayer(e)},zoomToShowLayer:function(e,t){"function"!=typeof t&&(t=function(){});var i=function(){!e._icon&&!e.__parent._icon||this._inZoomAnimation||(this._map.off("moveend",i,this),this.off("animationend",i,this),e._icon?t():e.__parent._icon&&(this.once("spiderfied",t,this),e.__parent.spiderfy()))};e._icon&&this._map.getBounds().contains(e.getLatLng())?t():e.__parent._zoom<Math.round(this._map._zoom)?(this._map.on("moveend",i,this),this._map.panTo(e.getLatLng())):(this._map.on("moveend",i,this),this.on("animationend",i,this),e.__parent.zoomToBounds())},onAdd:function(e){this._map=e;var t,i,n;if(!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.addTo(e),this._nonPointGroup.addTo(e),this._gridClusters||this._generateInitialClusters(),this._maxLat=e.options.crs.projection.MAX_LATITUDE,t=0,i=this._needsRemoving.length;i>t;t++)n=this._needsRemoving[t],n.newlatlng=n.layer._latlng,n.layer._latlng=n.latlng;for(t=0,i=this._needsRemoving.length;i>t;t++)n=this._needsRemoving[t],this._removeLayer(n.layer,!0),n.layer._latlng=n.newlatlng;this._needsRemoving=[],this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),i=this._needsClustering,this._needsClustering=[],this.addLayers(i,!0)},onRemove:function(e){e.off("zoomend",this._zoomEnd,this),e.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),delete this._maxLat,this._hideCoverage(),this._featureGroup.remove(),this._nonPointGroup.remove(),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(e){for(var t=e;t&&!t._icon;)t=t.__parent;return t||null},_arraySplice:function(e,t){for(var i=e.length-1;i>=0;i--)if(e[i]===t)return e.splice(i,1),!0},_removeFromGridUnclustered:function(e,t){for(var i=this._map,n=this._gridUnclustered,r=Math.floor(this._map.getMinZoom());t>=r&&n[t].removeObject(e,i.project(e.getLatLng(),t));t--);},_childMarkerDragStart:function(e){e.target.__dragStart=e.target._latlng},_childMarkerMoved:function(e){if(!this._ignoreMove&&!e.target.__dragStart){var t=e.target._popup&&e.target._popup.isOpen();this._moveChild(e.target,e.oldLatLng,e.latlng),t&&e.target.openPopup()}},_moveChild:function(e,t,i){e._latlng=t,this.removeLayer(e),e._latlng=i,this.addLayer(e)},_childMarkerDragEnd:function(e){var t=e.target.__dragStart;delete e.target.__dragStart,t&&this._moveChild(e.target,t,e.target._latlng)},_removeLayer:function(e,t,i){var n=this._gridClusters,r=this._gridUnclustered,s=this._featureGroup,o=this._map,a=Math.floor(this._map.getMinZoom());t&&this._removeFromGridUnclustered(e,this._maxZoom);var h,l=e.__parent,u=l._markers;for(this._arraySplice(u,e);l&&(l._childCount--,l._boundsNeedUpdate=!0,!(l._zoom<a));)t&&l._childCount<=1?(h=l._markers[0]===e?l._markers[1]:l._markers[0],n[l._zoom].removeObject(l,o.project(l._cLatLng,l._zoom)),r[l._zoom].addObject(h,o.project(h.getLatLng(),l._zoom)),this._arraySplice(l.__parent._childClusters,l),l.__parent._markers.push(h),h.__parent=l.__parent,l._icon&&(s.removeLayer(l),i||s.addLayer(h))):l._iconNeedsUpdate=!0,l=l.__parent;delete e.__parent},_isOrIsParent:function(e,t){for(;t;){if(e===t)return!0;t=t.parentNode}return!1},fire:function(e,t,i){if(t&&t.layer instanceof L.MarkerCluster){if(t.originalEvent&&this._isOrIsParent(t.layer._icon,t.originalEvent.relatedTarget))return;e="cluster"+e}L.FeatureGroup.prototype.fire.call(this,e,t,i)},listens:function(e,t){return L.FeatureGroup.prototype.listens.call(this,e,t)||L.FeatureGroup.prototype.listens.call(this,"cluster"+e,t)},_defaultIconCreateFunction:function(e){var t=e.getChildCount(),i=" marker-cluster-";return i+=10>t?"small":100>t?"medium":"large",new L.DivIcon({html:"<div><span>"+t+"</span></div>",className:"marker-cluster"+i,iconSize:new L.Point(40,40)})},_bindEvents:function(){var e=this._map,t=this.options.spiderfyOnMaxZoom,i=this.options.showCoverageOnHover,n=this.options.zoomToBoundsOnClick;(t||n)&&this.on("clusterclick",this._zoomOrSpiderfy,this),i&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),e.on("zoomend",this._hideCoverage,this))},_zoomOrSpiderfy:function(e){for(var t=e.layer,i=t;1===i._childClusters.length;)i=i._childClusters[0];i._zoom===this._maxZoom&&i._childCount===t._childCount&&this.options.spiderfyOnMaxZoom?t.spiderfy():this.options.zoomToBoundsOnClick&&t.zoomToBounds(),e.originalEvent&&13===e.originalEvent.keyCode&&this._map._container.focus()},_showCoverage:function(e){var t=this._map;this._inZoomAnimation||(this._shownPolygon&&t.removeLayer(this._shownPolygon),e.layer.getChildCount()>2&&e.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(e.layer.getConvexHull(),this.options.polygonOptions),t.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var e=this.options.spiderfyOnMaxZoom,t=this.options.showCoverageOnHover,i=this.options.zoomToBoundsOnClick,n=this._map;(e||i)&&this.off("clusterclick",this._zoomOrSpiderfy,this),t&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),n.off("zoomend",this._hideCoverage,this))},_zoomEnd:function(){this._map&&(this._mergeSplitClusters(),this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var e=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,e),this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),e),this._currentShownBounds=e}},_generateInitialClusters:function(){var e=Math.ceil(this._map.getMaxZoom()),t=Math.floor(this._map.getMinZoom()),i=this.options.maxClusterRadius,n=i;"function"!=typeof i&&(n=function(){return i}),null!==this.options.disableClusteringAtZoom&&(e=this.options.disableClusteringAtZoom-1),this._maxZoom=e,this._gridClusters={},this._gridUnclustered={};for(var r=e;r>=t;r--)this._gridClusters[r]=new L.DistanceGrid(n(r)),this._gridUnclustered[r]=new L.DistanceGrid(n(r));this._topClusterLevel=new this._markerCluster(this,t-1)},_addLayer:function(e,t){var i,n,r=this._gridClusters,s=this._gridUnclustered,o=Math.floor(this._map.getMinZoom());for(this.options.singleMarkerMode&&this._overrideMarkerIcon(e),e.on(this._childMarkerEventHandlers,this);t>=o;t--){i=this._map.project(e.getLatLng(),t);var a=r[t].getNearObject(i);if(a)return a._addChild(e),e.__parent=a,void 0;if(a=s[t].getNearObject(i)){var h=a.__parent;h&&this._removeLayer(a,!1);var l=new this._markerCluster(this,t,a,e);r[t].addObject(l,this._map.project(l._cLatLng,t)),a.__parent=l,e.__parent=l;var u=l;for(n=t-1;n>h._zoom;n--)u=new this._markerCluster(this,n,u),r[n].addObject(u,this._map.project(a.getLatLng(),n));return h._addChild(u),this._removeFromGridUnclustered(a,t),void 0}s[t].addObject(e,i)}this._topClusterLevel._addChild(e),e.__parent=this._topClusterLevel},_refreshClustersIcons:function(){this._featureGroup.eachLayer(function(e){e instanceof L.MarkerCluster&&e._iconNeedsUpdate&&e._updateIcon()})},_enqueue:function(e){this._queue.push(e),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var e=0;e<this._queue.length;e++)this._queue[e].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){var e=Math.round(this._map._zoom);this._processQueue(),this._zoom<e&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,e)):this._zoom>e?(this._animationStart(),this._animationZoomOut(this._zoom,e)):this._moveEnd()},_getExpandedVisibleBounds:function(){return this.options.removeOutsideVisibleBounds?L.Browser.mobile?this._checkBoundsMaxLat(this._map.getBounds()):this._checkBoundsMaxLat(this._map.getBounds().pad(1)):this._mapBoundsInfinite},_checkBoundsMaxLat:function(e){var t=this._maxLat;return void 0!==t&&(e.getNorth()>=t&&(e._northEast.lat=1/0),e.getSouth()<=-t&&(e._southWest.lat=-1/0)),e},_animationAddLayerNonAnimated:function(e,t){if(t===e)this._featureGroup.addLayer(e);else if(2===t._childCount){t._addToMap();var i=t.getAllChildMarkers();this._featureGroup.removeLayer(i[0]),this._featureGroup.removeLayer(i[1])}else t._updateIcon()},_extractNonGroupLayers:function(e,t){var i,n=e.getLayers(),r=0;for(t=t||[];r<n.length;r++)i=n[r],i instanceof L.LayerGroup?this._extractNonGroupLayers(i,t):t.push(i);return t},_overrideMarkerIcon:function(e){var t=e.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[e]}});return t}});L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-1/0,-1/0),new L.LatLng(1/0,1/0))}),L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),e),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationZoomOut:function(e,t){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),e),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationAddLayer:function(e,t){this._animationAddLayerNonAnimated(e,t)}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationZoomIn:function(e,t){var i,n=this._getExpandedVisibleBounds(),r=this._featureGroup,s=Math.floor(this._map.getMinZoom());this._ignoreMove=!0,this._topClusterLevel._recursively(n,e,s,function(s){var o,a=s._latlng,h=s._markers;for(n.contains(a)||(a=null),s._isSingleParent()&&e+1===t?(r.removeLayer(s),s._recursivelyAddChildrenToMap(null,t,n)):(s.clusterHide(),s._recursivelyAddChildrenToMap(a,t,n)),i=h.length-1;i>=0;i--)o=h[i],n.contains(o._latlng)||r.removeLayer(o)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(n,t),r.eachLayer(function(e){e instanceof L.MarkerCluster||!e._icon||e.clusterShow()}),this._topClusterLevel._recursively(n,e,t,function(e){e._recursivelyRestoreChildPositions(t)}),this._ignoreMove=!1,this._enqueue(function(){this._topClusterLevel._recursively(n,e,s,function(e){r.removeLayer(e),e.clusterShow()}),this._animationEnd()})},_animationZoomOut:function(e,t){this._animationZoomOutSingle(this._topClusterLevel,e-1,t),this._topClusterLevel._recursivelyAddChildrenToMap(null,t,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),e,this._getExpandedVisibleBounds())},_animationAddLayer:function(e,t){var i=this,n=this._featureGroup;n.addLayer(e),t!==e&&(t._childCount>2?(t._updateIcon(),this._forceLayout(),this._animationStart(),e._setPos(this._map.latLngToLayerPoint(t.getLatLng())),e.clusterHide(),this._enqueue(function(){n.removeLayer(e),e.clusterShow(),i._animationEnd()})):(this._forceLayout(),i._animationStart(),i._animationZoomOutSingle(t,this._map.getMaxZoom(),this._zoom)))}},_animationZoomOutSingle:function(e,t,i){var n=this._getExpandedVisibleBounds(),r=Math.floor(this._map.getMinZoom());e._recursivelyAnimateChildrenInAndAddSelfToMap(n,r,t+1,i);var s=this;this._forceLayout(),e._recursivelyBecomeVisible(n,i),this._enqueue(function(){if(1===e._childCount){var o=e._markers[0];this._ignoreMove=!0,o.setLatLng(o.getLatLng()),this._ignoreMove=!1,o.clusterShow&&o.clusterShow()}else e._recursively(n,i,r,function(e){e._recursivelyRemoveChildrenFromMap(n,r,t+1)});s._animationEnd()})},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_forceLayout:function(){L.Util.falseFn(document.body.offsetWidth)}}),L.markerClusterGroup=function(e){return new L.MarkerClusterGroup(e)};var i=L.MarkerCluster=L.Marker.extend({options:L.Icon.prototype.options,initialize:function(e,t,i,n){L.Marker.prototype.initialize.call(this,i?i._cLatLng||i.getLatLng():new L.LatLng(0,0),{icon:this,pane:e.options.clusterPane}),this._group=e,this._zoom=t,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,i&&this._addChild(i),n&&this._addChild(n)},getAllChildMarkers:function(e,t){e=e||[];for(var i=this._childClusters.length-1;i>=0;i--)this._childClusters[i].getAllChildMarkers(e);for(var n=this._markers.length-1;n>=0;n--)t&&this._markers[n].__dragStart||e.push(this._markers[n]);return e},getChildCount:function(){return this._childCount},zoomToBounds:function(e){for(var t,i=this._childClusters.slice(),n=this._group._map,r=n.getBoundsZoom(this._bounds),s=this._zoom+1,o=n.getZoom();i.length>0&&r>s;){s++;var a=[];for(t=0;t<i.length;t++)a=a.concat(i[t]._childClusters);i=a}r>s?this._group._map.setView(this._latlng,s):o>=r?this._group._map.setView(this._latlng,o+1):this._group._map.fitBounds(this._bounds,e)},getBounds:function(){var e=new L.LatLngBounds;return e.extend(this._bounds),e},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(e,t){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(e),e instanceof L.MarkerCluster?(t||(this._childClusters.push(e),e.__parent=this),this._childCount+=e._childCount):(t||this._markers.push(e),this._childCount++),this.__parent&&this.__parent._addChild(e,!0)},_setClusterCenter:function(e){this._cLatLng||(this._cLatLng=e._cLatLng||e._latlng)},_resetBounds:function(){var e=this._bounds;e._southWest&&(e._southWest.lat=1/0,e._southWest.lng=1/0),e._northEast&&(e._northEast.lat=-1/0,e._northEast.lng=-1/0)},_recalculateBounds:function(){var e,t,i,n,r=this._markers,s=this._childClusters,o=0,a=0,h=this._childCount;if(0!==h){for(this._resetBounds(),e=0;e<r.length;e++)i=r[e]._latlng,this._bounds.extend(i),o+=i.lat,a+=i.lng;for(e=0;e<s.length;e++)t=s[e],t._boundsNeedUpdate&&t._recalculateBounds(),this._bounds.extend(t._bounds),i=t._wLatLng,n=t._childCount,o+=i.lat*n,a+=i.lng*n;this._latlng=this._wLatLng=new L.LatLng(o/h,a/h),this._boundsNeedUpdate=!1}},_addToMap:function(e){e&&(this._backupLatlng=this._latlng,this.setLatLng(e)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(e,t,i){this._recursively(e,this._group._map.getMinZoom(),i-1,function(e){var i,n,r=e._markers;for(i=r.length-1;i>=0;i--)n=r[i],n._icon&&(n._setPos(t),n.clusterHide())},function(e){var i,n,r=e._childClusters;for(i=r.length-1;i>=0;i--)n=r[i],n._icon&&(n._setPos(t),n.clusterHide())})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(e,t,i,n){this._recursively(e,n,t,function(r){r._recursivelyAnimateChildrenIn(e,r._group._map.latLngToLayerPoint(r.getLatLng()).round(),i),r._isSingleParent()&&i-1===n?(r.clusterShow(),r._recursivelyRemoveChildrenFromMap(e,t,i)):r.clusterHide(),r._addToMap()})},_recursivelyBecomeVisible:function(e,t){this._recursively(e,this._group._map.getMinZoom(),t,null,function(e){e.clusterShow()})},_recursivelyAddChildrenToMap:function(e,t,i){this._recursively(i,this._group._map.getMinZoom()-1,t,function(n){if(t!==n._zoom)for(var r=n._markers.length-1;r>=0;r--){var s=n._markers[r];i.contains(s._latlng)&&(e&&(s._backupLatlng=s.getLatLng(),s.setLatLng(e),s.clusterHide&&s.clusterHide()),n._group._featureGroup.addLayer(s))}},function(t){t._addToMap(e)})},_recursivelyRestoreChildPositions:function(e){for(var t=this._markers.length-1;t>=0;t--){var i=this._markers[t];i._backupLatlng&&(i.setLatLng(i._backupLatlng),delete i._backupLatlng)}if(e-1===this._zoom)for(var n=this._childClusters.length-1;n>=0;n--)this._childClusters[n]._restorePosition();else for(var r=this._childClusters.length-1;r>=0;r--)this._childClusters[r]._recursivelyRestoreChildPositions(e)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(e,t,i,n){var r,s;this._recursively(e,t-1,i-1,function(e){for(s=e._markers.length-1;s>=0;s--)r=e._markers[s],n&&n.contains(r._latlng)||(e._group._featureGroup.removeLayer(r),r.clusterShow&&r.clusterShow())},function(e){for(s=e._childClusters.length-1;s>=0;s--)r=e._childClusters[s],n&&n.contains(r._latlng)||(e._group._featureGroup.removeLayer(r),r.clusterShow&&r.clusterShow())})},_recursively:function(e,t,i,n,r){var s,o,a=this._childClusters,h=this._zoom;if(h>=t&&(n&&n(this),r&&h===i&&r(this)),t>h||i>h)for(s=a.length-1;s>=0;s--)o=a[s],o._boundsNeedUpdate&&o._recalculateBounds(),e.intersects(o._bounds)&&o._recursively(e,t,i,n,r)},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}});L.Marker.include({clusterHide:function(){var e=this.options.opacity;return this.setOpacity(0),this.options.opacity=e,this},clusterShow:function(){return this.setOpacity(this.options.opacity)}}),L.DistanceGrid=function(e){this._cellSize=e,this._sqCellSize=e*e,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(e,t){var i=this._getCoord(t.x),n=this._getCoord(t.y),r=this._grid,s=r[n]=r[n]||{},o=s[i]=s[i]||[],a=L.Util.stamp(e);this._objectPoint[a]=t,o.push(e)},updateObject:function(e,t){this.removeObject(e),this.addObject(e,t)},removeObject:function(e,t){var i,n,r=this._getCoord(t.x),s=this._getCoord(t.y),o=this._grid,a=o[s]=o[s]||{},h=a[r]=a[r]||[];for(delete this._objectPoint[L.Util.stamp(e)],i=0,n=h.length;n>i;i++)if(h[i]===e)return h.splice(i,1),1===n&&delete a[r],!0},eachObject:function(e,t){var i,n,r,s,o,a,h,l=this._grid;for(i in l){o=l[i];for(n in o)for(a=o[n],r=0,s=a.length;s>r;r++)h=e.call(t,a[r]),h&&(r--,s--)}},getNearObject:function(e){var t,i,n,r,s,o,a,h,l=this._getCoord(e.x),u=this._getCoord(e.y),_=this._objectPoint,d=this._sqCellSize,c=null;for(t=u-1;u+1>=t;t++)if(r=this._grid[t])for(i=l-1;l+1>=i;i++)if(s=r[i])for(n=0,o=s.length;o>n;n++)a=s[n],h=this._sqDist(_[L.Util.stamp(a)],e),(d>h||d>=h&&null===c)&&(d=h,c=a);return c},_getCoord:function(e){var t=Math.floor(e/this._cellSize);return isFinite(t)?t:e},_sqDist:function(e,t){var i=t.x-e.x,n=t.y-e.y;return i*i+n*n}},function(){L.QuickHull={getDistant:function(e,t){var i=t[1].lat-t[0].lat,n=t[0].lng-t[1].lng;return n*(e.lat-t[0].lat)+i*(e.lng-t[0].lng)},findMostDistantPointFromBaseLine:function(e,t){var i,n,r,s=0,o=null,a=[];for(i=t.length-1;i>=0;i--)n=t[i],r=this.getDistant(n,e),r>0&&(a.push(n),r>s&&(s=r,o=n));return{maxPoint:o,newPoints:a}},buildConvexHull:function(e,t){var i=[],n=this.findMostDistantPointFromBaseLine(e,t);return n.maxPoint?(i=i.concat(this.buildConvexHull([e[0],n.maxPoint],n.newPoints)),i=i.concat(this.buildConvexHull([n.maxPoint,e[1]],n.newPoints))):[e[0]]},getConvexHull:function(e){var t,i=!1,n=!1,r=!1,s=!1,o=null,a=null,h=null,l=null,u=null,_=null;for(t=e.length-1;t>=0;t--){var d=e[t];(i===!1||d.lat>i)&&(o=d,i=d.lat),(n===!1||d.lat<n)&&(a=d,n=d.lat),(r===!1||d.lng>r)&&(h=d,r=d.lng),(s===!1||d.lng<s)&&(l=d,s=d.lng)}n!==i?(_=a,u=o):(_=l,u=h);var c=[].concat(this.buildConvexHull([_,u],e),this.buildConvexHull([u,_],e));return c}}}(),L.MarkerCluster.include({getConvexHull:function(){var e,t,i=this.getAllChildMarkers(),n=[];for(t=i.length-1;t>=0;t--)e=i[t].getLatLng(),n.push(e);return L.QuickHull.getConvexHull(n)}}),L.MarkerCluster.include({_2PI:2*Math.PI,_circleFootSeparation:25,_circleStartAngle:0,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(this._group._spiderfied!==this&&!this._group._inZoomAnimation){var e,t=this.getAllChildMarkers(null,!0),i=this._group,n=i._map,r=n.latLngToLayerPoint(this._latlng);this._group._unspiderfy(),this._group._spiderfied=this,t.length>=this._circleSpiralSwitchover?e=this._generatePointsSpiral(t.length,r):(r.y+=10,e=this._generatePointsCircle(t.length,r)),this._animationSpiderfy(t,e)}},unspiderfy:function(e){this._group._inZoomAnimation||(this._animationUnspiderfy(e),this._group._spiderfied=null)},_generatePointsCircle:function(e,t){var i,n,r=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+e),s=r/this._2PI,o=this._2PI/e,a=[];for(s=Math.max(s,35),a.length=e,i=0;e>i;i++)n=this._circleStartAngle+i*o,a[i]=new L.Point(t.x+s*Math.cos(n),t.y+s*Math.sin(n))._round();return a},_generatePointsSpiral:function(e,t){var i,n=this._group.options.spiderfyDistanceMultiplier,r=n*this._spiralLengthStart,s=n*this._spiralFootSeparation,o=n*this._spiralLengthFactor*this._2PI,a=0,h=[];for(h.length=e,i=e;i>=0;i--)e>i&&(h[i]=new L.Point(t.x+r*Math.cos(a),t.y+r*Math.sin(a))._round()),a+=s/r+5e-4*i,r+=o/a;return h},_noanimationUnspiderfy:function(){var e,t,i=this._group,n=i._map,r=i._featureGroup,s=this.getAllChildMarkers(null,!0);for(i._ignoreMove=!0,this.setOpacity(1),t=s.length-1;t>=0;t--)e=s[t],r.removeLayer(e),e._preSpiderfyLatlng&&(e.setLatLng(e._preSpiderfyLatlng),delete e._preSpiderfyLatlng),e.setZIndexOffset&&e.setZIndexOffset(0),e._spiderLeg&&(n.removeLayer(e._spiderLeg),delete e._spiderLeg);i.fire("unspiderfied",{cluster:this,markers:s}),i._ignoreMove=!1,i._spiderfied=null}}),L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(e,t){var i,n,r,s,o=this._group,a=o._map,h=o._featureGroup,l=this._group.options.spiderLegPolylineOptions;for(o._ignoreMove=!0,i=0;i<e.length;i++)s=a.layerPointToLatLng(t[i]),n=e[i],r=new L.Polyline([this._latlng,s],l),a.addLayer(r),n._spiderLeg=r,n._preSpiderfyLatlng=n._latlng,n.setLatLng(s),n.setZIndexOffset&&n.setZIndexOffset(1e6),h.addLayer(n);this.setOpacity(.3),o._ignoreMove=!1,o.fire("spiderfied",{cluster:this,markers:e})},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerCluster.include({_animationSpiderfy:function(e,t){var i,n,r,s,o,a,h=this,l=this._group,u=l._map,_=l._featureGroup,d=this._latlng,c=u.latLngToLayerPoint(d),p=L.Path.SVG,f=L.extend({},this._group.options.spiderLegPolylineOptions),m=f.opacity;for(void 0===m&&(m=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),p?(f.opacity=0,f.className=(f.className||"")+" leaflet-cluster-spider-leg"):f.opacity=m,l._ignoreMove=!0,i=0;i<e.length;i++)n=e[i],a=u.layerPointToLatLng(t[i]),r=new L.Polyline([d,a],f),u.addLayer(r),n._spiderLeg=r,p&&(s=r._path,o=s.getTotalLength()+.1,s.style.strokeDasharray=o,s.style.strokeDashoffset=o),n.setZIndexOffset&&n.setZIndexOffset(1e6),n.clusterHide&&n.clusterHide(),_.addLayer(n),n._setPos&&n._setPos(c);for(l._forceLayout(),l._animationStart(),i=e.length-1;i>=0;i--)a=u.layerPointToLatLng(t[i]),n=e[i],n._preSpiderfyLatlng=n._latlng,n.setLatLng(a),n.clusterShow&&n.clusterShow(),p&&(r=n._spiderLeg,s=r._path,s.style.strokeDashoffset=0,r.setStyle({opacity:m}));this.setOpacity(.3),l._ignoreMove=!1,setTimeout(function(){l._animationEnd(),l.fire("spiderfied",{cluster:h,markers:e})},200)},_animationUnspiderfy:function(e){var t,i,n,r,s,o,a=this,h=this._group,l=h._map,u=h._featureGroup,_=e?l._latLngToNewLayerPoint(this._latlng,e.zoom,e.center):l.latLngToLayerPoint(this._latlng),d=this.getAllChildMarkers(null,!0),c=L.Path.SVG;for(h._ignoreMove=!0,h._animationStart(),this.setOpacity(1),i=d.length-1;i>=0;i--)t=d[i],t._preSpiderfyLatlng&&(t.closePopup(),t.setLatLng(t._preSpiderfyLatlng),delete t._preSpiderfyLatlng,o=!0,t._setPos&&(t._setPos(_),o=!1),t.clusterHide&&(t.clusterHide(),o=!1),o&&u.removeLayer(t),c&&(n=t._spiderLeg,r=n._path,s=r.getTotalLength()+.1,r.style.strokeDashoffset=s,n.setStyle({opacity:0})));h._ignoreMove=!1,setTimeout(function(){var e=0;for(i=d.length-1;i>=0;i--)t=d[i],t._spiderLeg&&e++;for(i=d.length-1;i>=0;i--)t=d[i],t._spiderLeg&&(t.clusterShow&&t.clusterShow(),t.setZIndexOffset&&t.setZIndexOffset(0),e>1&&u.removeLayer(t),l.removeLayer(t._spiderLeg),delete t._spiderLeg);h._animationEnd(),h.fire("unspiderfied",{cluster:a,markers:d})},200)}}),L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:function(){this._unspiderfy.apply(this,arguments)},_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Browser.touch||this._map.getRenderer(this)},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._map.off("zoomend",this._noanimationUnspiderfy,this),this._noanimationUnspiderfy()
},_unspiderfyZoomStart:function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(e){L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(e))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(e){this._spiderfied&&this._spiderfied.unspiderfy(e)},_noanimationUnspiderfy:function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(e){e._spiderLeg&&(this._featureGroup.removeLayer(e),e.clusterShow&&e.clusterShow(),e.setZIndexOffset&&e.setZIndexOffset(0),this._map.removeLayer(e._spiderLeg),delete e._spiderLeg)}}),L.MarkerClusterGroup.include({refreshClusters:function(e){return e?e instanceof L.MarkerClusterGroup?e=e._topClusterLevel.getAllChildMarkers():e instanceof L.LayerGroup?e=e._layers:e instanceof L.MarkerCluster?e=e.getAllChildMarkers():e instanceof L.Marker&&(e=[e]):e=this._topClusterLevel.getAllChildMarkers(),this._flagParentsIconsNeedUpdate(e),this._refreshClustersIcons(),this.options.singleMarkerMode&&this._refreshSingleMarkerModeMarkers(e),this},_flagParentsIconsNeedUpdate:function(e){var t,i;for(t in e)for(i=e[t].__parent;i;)i._iconNeedsUpdate=!0,i=i.__parent},_refreshSingleMarkerModeMarkers:function(e){var t,i;for(t in e)i=e[t],this.hasLayer(i)&&i.setIcon(this._overrideMarkerIcon(i))}}),L.Marker.include({refreshIconOptions:function(e,t){var i=this.options.icon;return L.setOptions(i,e),this.setIcon(i),t&&this.__parent&&this.__parent._group.refreshClusters(this),this}}),e.MarkerClusterGroup=t,e.MarkerCluster=i});
// source --> https://prontosocialchef.it/wp-content/plugins/listeo-core/assets/js/leaflet-gesture-handling.min.js?ver=1.8.17 
!function(a,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define("leafletGestureHandling",["exports"],t):t(a.leafletGestureHandling={})}(this,function(a){"use strict";var o={ar:{touch:"استخدم إصبعين لتحريك الخريطة",scroll:"‏استخدم ctrl + scroll لتصغير/تكبير الخريطة",scrollMac:"يمكنك استخدام ⌘ + التمرير لتكبير/تصغير الخريطة"},bg:{touch:"Използвайте два пръста, за да преместите картата",scroll:"Задръжте бутона Ctrl натиснат, докато превъртате, за да промените мащаба на картата",scrollMac:"Задръжте бутона ⌘ натиснат, докато превъртате, за да промените мащаба на картата"},bn:{touch:"মানচিত্রটিকে সরাতে দুটি আঙ্গুল ব্যবহার করুন",scroll:"ম্যাপ জুম করতে ctrl + scroll ব্যবহার করুন",scrollMac:"ম্যাপে জুম করতে ⌘ বোতাম টিপে স্ক্রল করুন"},ca:{touch:"Fes servir dos dits per moure el mapa",scroll:"Prem la tecla Control mentre et desplaces per apropar i allunyar el mapa",scrollMac:"Prem la tecla ⌘ mentre et desplaces per apropar i allunyar el mapa"},cs:{touch:"K posunutí mapy použijte dva prsty",scroll:"Velikost zobrazení mapy změňte podržením klávesy Ctrl a posouváním kolečka myši",scrollMac:"Velikost zobrazení mapy změníte podržením klávesy ⌘ a posunutím kolečka myši / touchpadu"},da:{touch:"Brug to fingre til at flytte kortet",scroll:"Brug ctrl + rullefunktionen til at zoome ind og ud på kortet",scrollMac:"Brug ⌘ + rullefunktionen til at zoome ind og ud på kortet"},de:{touch:"Verschieben der Karte mit zwei Fingern",scroll:"Verwende Strg+Scrollen zum Zoomen der Karte",scrollMac:"⌘"},el:{touch:"Χρησιμοποιήστε δύο δάχτυλα για μετακίνηση στον χάρτη",scroll:"Χρησιμοποιήστε το πλήκτρο Ctrl και κύλιση, για να μεγεθύνετε τον χάρτη",scrollMac:"Χρησιμοποιήστε το πλήκτρο ⌘ + κύλιση για εστίαση στον χάρτη"},en:{touch:"Use two fingers to move the map",scroll:"Use ctrl + scroll to zoom the map",scrollMac:"Use ⌘ + scroll to zoom the map"},"en-AU":{touch:"Use two fingers to move the map",scroll:"Use ctrl + scroll to zoom the map",scrollMac:"Use ⌘ + scroll to zoom the map"},"en-GB":{touch:"Use two fingers to move the map",scroll:"Use ctrl + scroll to zoom the map",scrollMac:"Use ⌘ + scroll to zoom the map"},es:{touch:"Para mover el mapa, utiliza dos dedos",scroll:"Mantén pulsada la tecla Ctrl mientras te desplazas para acercar o alejar el mapa",scrollMac:"Mantén pulsada la tecla ⌘ mientras te desplazas para acercar o alejar el mapa"},eu:{touch:"Erabili bi hatz mapa mugitzeko",scroll:"Mapan zooma aplikatzeko, sakatu Ktrl eta egin gora edo behera",scrollMac:"Eduki sakatuta ⌘ eta egin gora eta behera mapa handitu eta txikitzeko"},fa:{touch:"برای حرکت دادن نقشه از دو انگشت استفاده کنید.",scroll:"‏برای بزرگ‌نمایی نقشه از ctrl + scroll استفاده کنید",scrollMac:"برای بزرگ‌نمایی نقشه، از ⌘ + پیمایش استفاده کنید."},fi:{touch:"Siirrä karttaa kahdella sormella.",scroll:"Zoomaa karttaa painamalla Ctrl-painiketta ja vierittämällä.",scrollMac:"Zoomaa karttaa pitämällä painike ⌘ painettuna ja vierittämällä."},fil:{touch:"Gumamit ng dalawang daliri upang iusog ang mapa",scroll:"Gamitin ang ctrl + scroll upang i-zoom ang mapa",scrollMac:"Gamitin ang ⌘ + scroll upang i-zoom ang mapa"},fr:{touch:"Utilisez deux doigts pour déplacer la carte",scroll:"Vous pouvez zoomer sur la carte à l'aide de CTRL+Molette de défilement",scrollMac:"Vous pouvez zoomer sur la carte à l'aide de ⌘+Molette de défilement"},gl:{touch:"Utiliza dous dedos para mover o mapa",scroll:"Preme Ctrl mentres te desprazas para ampliar o mapa",scrollMac:"Preme ⌘ e desprázate para ampliar o mapa"},gu:{touch:"નકશો ખસેડવા બે આંગળીઓનો ઉપયોગ કરો",scroll:"નકશાને ઝૂમ કરવા માટે ctrl + સ્ક્રોલનો ઉપયોગ કરો",scrollMac:"નકશાને ઝૂમ કરવા ⌘ + સ્ક્રોલનો ઉપયોગ કરો"},hi:{touch:"मैप एक जगह से दूसरी जगह ले जाने के लिए दो उंगलियों का इस्तेमाल करें",scroll:"मैप को ज़ूम करने के लिए ctrl + स्क्रोल का उपयोग करें",scrollMac:"मैप को ज़ूम करने के लिए ⌘ + स्क्रोल का उपयोग करें"},hr:{touch:"Pomičite kartu pomoću dva prsta",scroll:"Upotrijebite Ctrl i klizač miša da biste zumirali kartu",scrollMac:"Upotrijebite gumb ⌘ dok se pomičete za zumiranje karte"},hu:{touch:"Két ujjal mozgassa a térképet",scroll:"A térkép a ctrl + görgetés használatával nagyítható",scrollMac:"A térkép a ⌘ + görgetés használatával nagyítható"},id:{touch:"Gunakan dua jari untuk menggerakkan peta",scroll:"Gunakan ctrl + scroll untuk memperbesar atau memperkecil peta",scrollMac:"Gunakan ⌘ + scroll untuk memperbesar atau memperkecil peta"},it:{touch:"Utilizza due dita per spostare la mappa",scroll:"Utilizza CTRL + scorrimento per eseguire lo zoom della mappa",scrollMac:"Utilizza ⌘ + scorrimento per eseguire lo zoom della mappa"},iw:{touch:"הזז את המפה באמצעות שתי אצבעות",scroll:"‏אפשר לשנות את מרחק התצוגה במפה באמצעות מקש ctrl וגלילה",scrollMac:"אפשר לשנות את מרחק התצוגה במפה באמצעות מקש ⌘ וגלילה"},ja:{touch:"地図を移動させるには指 2 本で操作します",scroll:"地図をズームするには、Ctrl キーを押しながらスクロールしてください",scrollMac:"地図をズームするには、⌘ キーを押しながらスクロールしてください"},kn:{touch:"Use two fingers to move the map",scroll:"Use Ctrl + scroll to zoom the map",scrollMac:"Use ⌘ + scroll to zoom the map"},ko:{touch:"지도를 움직이려면 두 손가락을 사용하세요.",scroll:"지도를 확대/축소하려면 Ctrl을 누른 채 스크롤하세요.",scrollMac:"지도를 확대하려면 ⌘ + 스크롤 사용"},lt:{touch:"Perkelkite žemėlapį dviem pirštais",scroll:"Slinkite nuspaudę klavišą „Ctrl“, kad pakeistumėte žemėlapio mastelį",scrollMac:"Paspauskite klavišą ⌘ ir slinkite, kad priartintumėte žemėlapį"},lv:{touch:"Lai pārvietotu karti, bīdiet to ar diviem pirkstiem",scroll:"Kartes tālummaiņai izmantojiet ctrl + ritināšanu",scrollMac:"Lai veiktu kartes tālummaiņu, izmantojiet ⌘ + ritināšanu"},ml:{touch:"മാപ്പ് നീക്കാൻ രണ്ട് വിരലുകൾ ഉപയോഗിക്കുക",scroll:"കൺട്രോൾ + സ്‌ക്രോൾ ഉപയോഗിച്ച് ‌മാപ്പ് ‌സൂം ചെയ്യുക",scrollMac:"⌘ + സ്‌ക്രോൾ ഉപയോഗിച്ച് ‌മാപ്പ് ‌സൂം ചെയ്യുക"},mr:{touch:"नकाशा हलविण्यासाठी दोन बोटे वापरा",scroll:"नकाशा झूम करण्यासाठी ctrl + scroll वापरा",scrollMac:"नकाशावर झूम करण्यासाठी ⌘ + स्क्रोल वापरा"},nl:{touch:"Gebruik twee vingers om de kaart te verplaatsen",scroll:"Gebruik Ctrl + scrollen om in- en uit te zoomen op de kaart",scrollMac:"Gebruik ⌘ + scrollen om in en uit te zoomen op de kaart"},no:{touch:"Bruk to fingre for å flytte kartet",scroll:"Hold ctrl-tasten inne og rull for å zoome på kartet",scrollMac:"Hold inne ⌘-tasten og rull for å zoome på kartet"},pl:{touch:"Przesuń mapę dwoma palcami",scroll:"Naciśnij CTRL i przewiń, by przybliżyć mapę",scrollMac:"Naciśnij ⌘ i przewiń, by przybliżyć mapę"},pt:{touch:"Use dois dedos para mover o mapa",scroll:"Pressione Ctrl e role a tela simultaneamente para aplicar zoom no mapa",scrollMac:"Use ⌘ e role a tela simultaneamente para aplicar zoom no mapa"},"pt-BR":{touch:"Use dois dedos para mover o mapa",scroll:"Pressione Ctrl e role a tela simultaneamente para aplicar zoom no mapa",scrollMac:"Use ⌘ e role a tela simultaneamente para aplicar zoom no mapa"},"pt-PT":{touch:"Utilize dois dedos para mover o mapa",scroll:"Utilizar ctrl + deslocar para aumentar/diminuir zoom do mapa",scrollMac:"Utilize ⌘ + deslocar para aumentar/diminuir o zoom do mapa"},ro:{touch:"Folosiți două degete pentru a deplasa harta",scroll:"Apăsați tasta ctrl și derulați simultan pentru a mări harta",scrollMac:"Folosiți ⌘ și derulați pentru a mări/micșora harta"},ru:{touch:"Чтобы переместить карту, проведите по ней двумя пальцами",scroll:"Чтобы изменить масштаб, прокручивайте карту, удерживая клавишу Ctrl.",scrollMac:"Чтобы изменить масштаб, нажмите ⌘ + прокрутка"},sk:{touch:"Mapu môžete posunúť dvoma prstami",scroll:"Ak chcete priblížiť mapu, stlačte kláves ctrl a posúvajte",scrollMac:"Ak chcete priblížiť mapu, stlačte kláves ⌘ a posúvajte kolieskom myši"},sl:{touch:"Premaknite zemljevid z dvema prstoma",scroll:"Zemljevid povečate tako, da držite tipko Ctrl in vrtite kolesce na miški",scrollMac:"Uporabite ⌘ + funkcijo pomika, da povečate ali pomanjšate zemljevid"},sr:{touch:"Мапу померајте помоћу два прста",scroll:"Притисните ctrl тастер док померате да бисте зумирали мапу",scrollMac:"Притисните тастер ⌘ док померате да бисте зумирали мапу"},sv:{touch:"Använd två fingrar för att flytta kartan",scroll:"Använd ctrl + rulla för att zooma kartan",scrollMac:"Använd ⌘ + rulla för att zooma på kartan"},ta:{touch:"மேப்பை நகர்த்த இரண்டு விரல்களைப் பயன்படுத்தவும்",scroll:"மேப்பை பெரிதாக்கி/சிறிதாக்கிப் பார்க்க, ctrl பட்டனைப் பிடித்தபடி, மேலே/கீழே ஸ்க்ரால் செய்யவும்",scrollMac:"மேப்பை பெரிதாக்கி/சிறிதாக்கிப் பார்க்க, ⌘ பட்டனைப் பிடித்தபடி, மேலே/கீழே ஸ்க்ரால் செய்யவும்"},te:{touch:"మ్యాప్‌ని తరలించడం కోసం రెండు వేళ్లను ఉపయోగించండి",scroll:"మ్యాప్‌ని జూమ్ చేయడానికి ctrl బటన్‌ను నొక్కి ఉంచి, స్క్రోల్ చేయండి",scrollMac:"మ్యాప్ జూమ్ చేయాలంటే ⌘ + స్క్రోల్ ఉపయోగించండి"},th:{touch:"ใช้ 2 นิ้วเพื่อเลื่อนแผนที่",scroll:"กด Ctrl ค้างไว้ แล้วเลื่อนหน้าจอเพื่อซูมแผนที่",scrollMac:"กด ⌘ แล้วเลื่อนหน้าจอเพื่อซูมแผนที่"},tl:{touch:"Gumamit ng dalawang daliri upang iusog ang mapa",scroll:"Gamitin ang ctrl + scroll upang i-zoom ang mapa",scrollMac:"Gamitin ang ⌘ + scroll upang i-zoom ang mapa"},tr:{touch:"Haritada gezinmek için iki parmağınızı kullanın",scroll:"Haritayı yakınlaştırmak için ctrl + kaydırma kombinasyonunu kullanın",scrollMac:"Haritayı yakınlaştırmak için ⌘ tuşuna basıp ekranı kaydırın"},uk:{touch:"Переміщуйте карту двома пальцями",scroll:"Щоб змінювати масштаб карти, прокручуйте коліщатко миші, утримуючи клавішу Ctrl",scrollMac:"Щоб змінити масштаб карти, використовуйте ⌘ + прокручування"},vi:{touch:"Sử dụng hai ngón tay để di chuyển bản đồ",scroll:"Sử dụng ctrl + cuộn để thu phóng bản đồ",scrollMac:"Sử dụng ⌘ + cuộn để thu phóng bản đồ"},"zh-CN":{touch:"使用双指移动地图",scroll:"按住 Ctrl 并滚动鼠标滚轮才可缩放地图",scrollMac:"按住 ⌘ 并滚动鼠标滚轮才可缩放地图"},"zh-TW":{touch:"同時以兩指移動地圖",scroll:"按住 ctrl 鍵加上捲動滑鼠可以縮放地圖",scrollMac:"按 ⌘ 加上滾動捲軸可以縮放地圖"}};L.Map.mergeOptions({gestureHandlingOptions:{text:{},duration:1e3}});var t=!1,e=L.Handler.extend({addHooks:function(){this._handleTouch=this._handleTouch.bind(this),this._setupPluginOptions(),this._setLanguageContent(),this._disableInteractions(),this._map._container.addEventListener("touchstart",this._handleTouch),this._map._container.addEventListener("touchmove",this._handleTouch),this._map._container.addEventListener("touchend",this._handleTouch),this._map._container.addEventListener("touchcancel",this._handleTouch),this._map._container.addEventListener("click",this._handleTouch),L.DomEvent.on(this._map._container,"mousewheel",this._handleScroll,this),L.DomEvent.on(this._map,"mouseover",this._handleMouseOver,this),L.DomEvent.on(this._map,"mouseout",this._handleMouseOut,this),L.DomEvent.on(this._map,"movestart",this._handleDragging,this),L.DomEvent.on(this._map,"move",this._handleDragging,this),L.DomEvent.on(this._map,"moveend",this._handleDragging,this)},removeHooks:function(){this._enableInteractions(),this._map._container.removeEventListener("touchstart",this._handleTouch),this._map._container.removeEventListener("touchmove",this._handleTouch),this._map._container.removeEventListener("touchend",this._handleTouch),this._map._container.removeEventListener("touchcancel",this._handleTouch),this._map._container.removeEventListener("click",this._handleTouch),L.DomEvent.off(this._map._container,"mousewheel",this._handleScroll,this),L.DomEvent.off(this._map,"mouseover",this._handleMouseOver,this),L.DomEvent.off(this._map,"mouseout",this._handleMouseOut,this),L.DomEvent.off(this._map,"movestart",this._handleDragging,this),L.DomEvent.off(this._map,"move",this._handleDragging,this),L.DomEvent.off(this._map,"moveend",this._handleDragging,this)},_handleDragging:function(a){"movestart"==a.type||"move"==a.type?t=!0:"moveend"==a.type&&(t=!1)},_disableInteractions:function(){this._map.dragging.disable(),this._map.scrollWheelZoom.disable(),this._map.tap&&this._map.tap.disable()},_enableInteractions:function(){this._map.dragging.enable(),this._map.scrollWheelZoom.enable(),this._map.tap&&this._map.tap.enable()},_setupPluginOptions:function(){this._map.options.gestureHandlingText&&(this._map.options.gestureHandlingOptions.text=this._map.options.gestureHandlingText)},_setLanguageContent:function(){var a;if(this._map.options.gestureHandlingOptions&&this._map.options.gestureHandlingOptions.text&&this._map.options.gestureHandlingOptions.text.touch&&this._map.options.gestureHandlingOptions.text.scroll&&this._map.options.gestureHandlingOptions.text.scrollMac)a=this._map.options.gestureHandlingOptions.text;else{var t=this._getUserLanguage();t||(t="en"),o[t]&&(a=o[t]),a||-1===t.indexOf("-")||(t=t.split("-")[0],a=o[t]),a||(a=o[t="en"])}var e=!1;0<=navigator.platform.toUpperCase().indexOf("MAC")&&(e=!0);var l=a.scroll;e&&(l=a.scrollMac),this._map._container.setAttribute("data-gesture-handling-touch-content",a.touch),this._map._container.setAttribute("data-gesture-handling-scroll-content",l)},_getUserLanguage:function(){return navigator.languages?navigator.languages[0]:navigator.language||navigator.userLanguage},_handleTouch:function(a){for(var t=["leaflet-control-minimap","leaflet-interactive","leaflet-popup-content","leaflet-popup-content-wrapper","leaflet-popup-close-button","leaflet-control-zoom-in","leaflet-control-zoom-out"],e=!1,l=0;l<t.length;l++)L.DomUtil.hasClass(a.target,t[l])&&(e=!0);e?L.DomUtil.hasClass(a.target,"leaflet-interactive")&&"touchmove"===a.type&&1===a.touches.length?(L.DomUtil.addClass(this._map._container,"leaflet-gesture-handling-touch-warning"),this._disableInteractions()):L.DomUtil.removeClass(this._map._container,"leaflet-gesture-handling-touch-warning"):"touchmove"===a.type||"touchstart"===a.type?1===a.touches.length?(L.DomUtil.addClass(this._map._container,"leaflet-gesture-handling-touch-warning"),this._disableInteractions()):(this._enableInteractions(),L.DomUtil.removeClass(this._map._container,"leaflet-gesture-handling-touch-warning")):L.DomUtil.removeClass(this._map._container,"leaflet-gesture-handling-touch-warning")},_isScrolling:!1,_handleScroll:function(a){a.metaKey||a.ctrlKey?(a.preventDefault(),L.DomUtil.removeClass(this._map._container,"leaflet-gesture-handling-scroll-warning"),this._map.scrollWheelZoom.enable()):(L.DomUtil.addClass(this._map._container,"leaflet-gesture-handling-scroll-warning"),this._map.scrollWheelZoom.disable(),clearTimeout(this._isScrolling),this._isScrolling=setTimeout(function(){for(var a=document.getElementsByClassName("leaflet-gesture-handling-scroll-warning"),t=0;t<a.length;t++)L.DomUtil.removeClass(a[t],"leaflet-gesture-handling-scroll-warning")},this._map.options.gestureHandlingOptions.duration))},_handleMouseOver:function(a){this._enableInteractions()},_handleMouseOut:function(a){t||this._disableInteractions()}});L.Map.addInitHook("addHandler","gestureHandling",e),a.GestureHandling=e,a.default=e,Object.defineProperty(a,"__esModule",{value:!0})});
//# sourceMappingURL=leaflet-gesture-handling.min.js.map;
// source --> https://prontosocialchef.it/wp-content/plugins/listeo-core/assets/js/pwstrength-bootstrap.min.js?ver=1.8.17 
/* pwstrength-bootstrap 2021-06-01 - GPLv3 & MIT License */

!function(s){var t={};!function(o){"use strict";t.fallback={wordMinLength:"Your password is too short",wordMaxLength:"Your password is too long",wordInvalidChar:"Your password contains an invalid character",wordNotEmail:"Do not use your email as your password",wordSimilarToUsername:"Your password cannot contain your username",wordTwoCharacterClasses:"Use different character classes",wordRepetitions:"Too many repetitions",wordSequences:"Your password contains sequences",errorList:"Errors:",veryWeak:"Very Weak",weak:"Weak",normal:"Normal",medium:"Medium",strong:"Strong",veryStrong:"Very Strong"},t.t=function(r){var e="";return(e=o?o.t(r):t.fallback[r])===r?"":e}}(window.i18next);var r,c={};try{!s&&module&&module.exports&&(s=require("jquery"),r=require("jsdom").jsdom,s=s(r().defaultView))}catch(r){}!function(i){"use strict";var r={};c.forbiddenSequences=["0123456789","abcdefghijklmnopqrstuvwxyz","qwertyuiop","asdfghjkl","zxcvbnm","!@#$%^&*()_+"],r.wordNotEmail=function(r,e,o){return e.match(/^([\w!#$%&'*+\-/=?^`{|}~]+\.)*[\w!#$%&'*+\-/=?^`{|}~]+@((((([a-z0-9]{1}[a-z0-9-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(:\d{1,5})?)$/i)?o:0},r.wordMinLength=function(r,e,o){var s=e.length,e=Math.pow(s,r.rules.raisePower);return s<r.common.minChar&&(e+=o),e},r.wordMaxLength=function(r,e,o){var s=e.length,e=Math.pow(s,r.rules.raisePower);return s>r.common.maxChar?o:e},r.wordInvalidChar=function(r,e,o){return r.common.invalidCharsRegExp.test(e)?o:0},r.wordMinLengthStaticScore=function(r,e,o){return e.length<r.common.minChar?0:o},r.wordMaxLengthStaticScore=function(r,e,o){return e.length>r.common.maxChar?0:o},r.wordSimilarToUsername=function(r,e,o){r=i(r.common.usernameField).val();return r&&e.toLowerCase().match(r.replace(/[-[\]/{}()*+=?:.\\^$|!,]/g,"\\$&").toLowerCase())?o:0},r.wordTwoCharacterClasses=function(r,e,o){r=new RegExp("(."+r.rules.specialCharClass+")");return e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)||e.match(/([a-zA-Z])/)&&e.match(/([0-9])/)||e.match(r)&&e.match(/[a-zA-Z0-9_]/)?o:0},r.wordRepetitions=function(r,e,o){return e.match(/(.)\1\1/)?o:0},r.wordSequences=function(r,o,e){var s,t=!1;return 2<o.length&&(i.each(c.forbiddenSequences,function(r,e){t||(e=[e,e.split("").reverse().join("")],i.each(e,function(r,e){for(s=0;s<o.length-2;s+=1)-1<e.indexOf(o.toLowerCase().substring(s,s+3))&&(t=!0)}))}),t)?e:0},r.wordLowercase=function(r,e,o){return e.match(/[a-z]/)&&o},r.wordUppercase=function(r,e,o){return e.match(/[A-Z]/)&&o},r.wordOneNumber=function(r,e,o){return e.match(/\d+/)&&o},r.wordThreeNumbers=function(r,e,o){return e.match(/(.*[0-9].*[0-9].*[0-9])/)&&o},r.wordOneSpecialChar=function(r,e,o){r=new RegExp(r.rules.specialCharClass);return e.match(r)&&o},r.wordTwoSpecialChar=function(r,e,o){r=new RegExp("(.*"+r.rules.specialCharClass+".*"+r.rules.specialCharClass+")");return e.match(r)&&o},r.wordUpperLowerCombo=function(r,e,o){return e.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&o},r.wordLetterNumberCombo=function(r,e,o){return e.match(/([a-zA-Z])/)&&e.match(/([0-9])/)&&o},r.wordLetterNumberCharCombo=function(r,e,o){r=new RegExp("([a-zA-Z0-9].*"+r.rules.specialCharClass+")|("+r.rules.specialCharClass+".*[a-zA-Z0-9])");return e.match(r)&&o},r.wordIsACommonPassword=function(r,e,o){return 0<=i.inArray(e,r.rules.commonPasswords)?o:0},c.validation=r,c.executeRules=function(t,n){var a=0;return i.each(t.rules.activated,function(r,e){var o,s;e&&(o=t.rules.scores[r],"function"==typeof(e="function"!=typeof(e=c.validation[r])?t.rules.extra[r]:e)&&((o=e(t,n,o))&&(a+=o),(o<0||!i.isNumeric(o)&&!o)&&0<(s=t.ui.spanError(t,r)).length&&t.instances.errors.push(s)))}),a}}(s);try{module&&module.exports&&(module.exports=c)}catch(r){}var u={common:{}};u.common.minChar=6,u.common.maxChar=20,u.common.usernameField="#username",u.common.invalidCharsRegExp=new RegExp(/[\s,'"]/),u.common.userInputs=[],u.common.onLoad=void 0,u.common.onKeyUp=void 0,u.common.onScore=void 0,u.common.zxcvbn=!1,u.common.zxcvbnTerms=[],u.common.events=["keyup","change","paste"],u.common.debug=!1,u.rules={},u.rules.extra={},u.rules.scores={wordNotEmail:-100,wordMinLength:-50,wordMaxLength:-50,wordInvalidChar:-100,wordSimilarToUsername:-100,wordSequences:-20,wordTwoCharacterClasses:2,wordRepetitions:-25,wordLowercase:1,wordUppercase:3,wordOneNumber:3,wordThreeNumbers:5,wordOneSpecialChar:3,wordTwoSpecialChar:5,wordUpperLowerCombo:2,wordLetterNumberCombo:2,wordLetterNumberCharCombo:2,wordIsACommonPassword:-100},u.rules.activated={wordNotEmail:!0,wordMinLength:!0,wordMaxLength:!1,wordInvalidChar:!1,wordSimilarToUsername:!0,wordSequences:!0,wordTwoCharacterClasses:!0,wordRepetitions:!0,wordLowercase:!0,wordUppercase:!0,wordOneNumber:!0,wordThreeNumbers:!0,wordOneSpecialChar:!0,wordTwoSpecialChar:!0,wordUpperLowerCombo:!0,wordLetterNumberCombo:!0,wordLetterNumberCharCombo:!0,wordIsACommonPassword:!0},u.rules.raisePower=1.4,u.rules.specialCharClass="[!,@,#,$,%,^,&,*,?,_,~]",u.rules.commonPasswords=["123456","password","12345678","qwerty","123456789","12345","1234","111111","1234567","dragon","123123","baseball","abc123","football","monkey","letmein","696969","shadow","master","666666","qwertyuiop","123321","mustang","1234567890","michael","654321","pussy","superman","1qaz2wsx","7777777","fuckyou","121212","000000","qazwsx","123qwe","killer","trustno1","jordan","jennifer","zxcvbnm","asdfgh","hunter","buster","soccer","harley","batman","andrew","tigger","sunshine","iloveyou","fuckme","2000","charlie","robert","thomas","hockey","ranger","daniel","starwars","klaster","112233","george","asshole","computer","michelle","jessica","pepper","1111","zxcvbn","555555","11111111","131313","freedom","777777","pass","fuck","maggie","159753","aaaaaa","ginger","princess","joshua","cheese","amanda","summer","love","ashley","6969","nicole","chelsea","biteme","matthew","access","yankees","987654321","dallas","austin","thunder","taylor","matrix"],u.ui={},u.ui.bootstrap2=!1,u.ui.bootstrap3=!1,u.ui.colorClasses=["danger","danger","danger","warning","warning","success"],u.ui.showProgressBar=!0,u.ui.progressBarEmptyPercentage=1,u.ui.progressBarMinWidth=1,u.ui.progressBarMinPercentage=1,u.ui.progressExtraCssClasses="",u.ui.progressBarExtraCssClasses="",u.ui.showPopover=!1,u.ui.popoverPlacement="bottom",u.ui.showStatus=!1,u.ui.spanError=function(r,e){"use strict";e=r.i18n.t(e);return e?'<span style="color: #d52929">'+e+"</span>":""},u.ui.popoverError=function(r){"use strict";var e=r.instances.errors,o="<div>"+r.i18n.t("errorList")+'<ul class="error-list" style="margin-bottom: 0;">';return s.each(e,function(r,e){o+="<li>"+e+"</li>"}),o+="</ul></div>"},u.ui.showVerdicts=!0,u.ui.showVerdictsInsideProgressBar=!1,u.ui.useVerdictCssClass=!1,u.ui.showErrors=!1,u.ui.showScore=!1,u.ui.container=void 0,u.ui.viewports={progress:void 0,verdict:void 0,errors:void 0,score:void 0},u.ui.scores=[0,14,26,38,50],u.i18n={},u.i18n.t=t.t;var d={};!function(n){"use strict";var a=["error","warning","success"],o=["veryWeak","weak","normal","medium","strong","veryStrong"];d.getContainer=function(r,e){r=n(r.ui.container);return r=!r||1!==r.length?e.parent():r},d.findElement=function(r,e,o){return(e?r.find(e):r).find(o)},d.getUIElements=function(r,e){var o;return r.instances.viewports||(o=d.getContainer(r,e),(e={}).$progressbar=d.findElement(o,r.ui.viewports.progress,"div.progress"),r.ui.showVerdictsInsideProgressBar&&(e.$verdict=e.$progressbar.find("span.password-verdict")),r.ui.showPopover||(r.ui.showVerdictsInsideProgressBar||(e.$verdict=d.findElement(o,r.ui.viewports.verdict,"span.password-verdict")),e.$errors=d.findElement(o,r.ui.viewports.errors,"ul.error-list")),e.$score=d.findElement(o,r.ui.viewports.score,"span.password-score"),r.instances.viewports=e)},d.initHelper=function(r,e,o,s){r=d.getContainer(r,e);s?r.find(s).append(o):n(o).insertAfter(e)},d.initVerdict=function(r,e){d.initHelper(r,e,'<span class="password-verdict"></span>',r.ui.viewports.verdict)},d.initErrorList=function(r,e){d.initHelper(r,e,'<ul class="error-list"></ul>',r.ui.viewports.errors)},d.initScore=function(r,e){d.initHelper(r,e,'<span class="password-score"></span>',r.ui.viewports.score)},d.initUI=function(r,e){r.ui.showPopover?d.initPopover(r,e):(r.ui.showErrors&&d.initErrorList(r,e),r.ui.showVerdicts&&!r.ui.showVerdictsInsideProgressBar&&d.initVerdict(r,e)),r.ui.showProgressBar&&d.initProgressBar(r,e),r.ui.showScore&&d.initScore(r,e)},d.updateVerdict=function(r,e,o,s){e=d.getUIElements(r,e).$verdict;e.removeClass(r.ui.colorClasses.join(" ")),-1<o&&e.addClass(r.ui.colorClasses[o]),r.ui.showVerdictsInsideProgressBar&&e.css("white-space","nowrap"),e.html(s)},d.updateErrors=function(r,e,o){var e=d.getUIElements(r,e).$errors,s="";o||n.each(r.instances.errors,function(r,e){s+="<li>"+e+"</li>"}),e.html(s)},d.updateScore=function(r,e,o,s){r=d.getUIElements(r,e).$score,e="";s||(e=o.toFixed(2)),r.html(e)},d.updateFieldStatus=function(o,r,e,s){var t=r;o.ui.bootstrap2?t=r.parents(".control-group").first():o.ui.bootstrap3&&(t=r.parents(".form-group").first()),n.each(a,function(r,e){e=d.cssClassesForBS(o,e),t.removeClass(e)}),s||(e=a[Math.floor(e/2)],e=d.cssClassesForBS(o,e),t.addClass(e))},d.cssClassesForBS=function(r,e){return r.ui.bootstrap3?e="has-"+e:r.ui.bootstrap2||(e="border-"+(e="error"===e?"danger":e)),e},d.getVerdictAndCssClass=function(r,e){return void 0===e?["",0]:(e=e<=r.ui.scores[0]?0:e<r.ui.scores[1]?1:e<r.ui.scores[2]?2:e<r.ui.scores[3]?3:e<r.ui.scores[4]?4:5,[r.i18n.t(o[e]),e])},d.updateUI=function(r,e,o){var s,t=d.getVerdictAndCssClass(r,o),n=0===o?"":t[0];t=t[1],s=r.ui.useVerdictCssClass?t:-1,r.ui.showProgressBar&&d.showProgressBar(r,e,o,t,s,n),r.ui.showStatus&&d.updateFieldStatus(r,e,t,void 0===o),r.ui.showPopover?d.updatePopover(r,e,n,void 0===o):(r.ui.showVerdicts&&!r.ui.showVerdictsInsideProgressBar&&d.updateVerdict(r,e,s,n),r.ui.showErrors&&d.updateErrors(r,e,void 0===o)),r.ui.showScore&&d.updateScore(r,e,o,void 0===o)}}(s),function(a){"use strict";d.percentage=function(r,e,o){o=Math.floor(100*e/o),r=r.ui.progressBarMinPercentage;return o=100<(o=o<=r?r:o)?100:o},d.initProgressBar=function(r,e){var o=d.getContainer(r,e),s='<div class="progress ';r.ui.bootstrap2?s+=r.ui.progressBarExtraCssClasses+'"><div class="':s+=r.ui.progressExtraCssClasses+'"><div class="'+r.ui.progressBarExtraCssClasses+" progress-",s+='bar">',r.ui.showVerdictsInsideProgressBar&&(s+='<span class="password-verdict"></span>'),s+="</div></div>",r.ui.viewports.progress?o.find(r.ui.viewports.progress).append(s):a(s).insertAfter(e)},d.showProgressBar=function(r,e,o,s,t,n){o=void 0===o?r.ui.progressBarEmptyPercentage:d.percentage(r,o,r.ui.scores[4]);d.updateProgressBar(r,e,s,o),r.ui.showVerdictsInsideProgressBar&&d.updateVerdict(r,e,t,n)},d.updateProgressBar=function(o,r,e,s){var r=d.getUIElements(o,r).$progressbar,t=r.find(".progress-bar"),n="progress-";o.ui.bootstrap2&&(t=r.find(".bar"),n=""),a.each(o.ui.colorClasses,function(r,e){o.ui.bootstrap2||o.ui.bootstrap3?t.removeClass(n+"bar-"+e):t.removeClass("bg-"+e)}),o.ui.bootstrap2||o.ui.bootstrap3?t.addClass(n+"bar-"+o.ui.colorClasses[e]):t.addClass("bg-"+o.ui.colorClasses[e]),0<s?t.css("min-width",o.ui.progressBarMinWidth+"px"):t.css("min-width",""),t.css("width",s+"%")}}(s),function(){"use strict";d.initPopover=function(r,e){try{e.popover("destroy")}catch(r){e.popover("dispose")}e.popover({html:!0,placement:r.ui.popoverPlacement,trigger:"manual",content:" "})},d.updatePopover=function(r,e,o,s){var t=e.data("bs.popover"),n="",a=!0,i=!1;r.ui.showVerdicts&&!r.ui.showVerdictsInsideProgressBar&&0<o.length&&(n='<h5><span class="password-verdict">'+o+"</span></h5>",a=!1),r.ui.showErrors&&(0<r.instances.errors.length&&(a=!1),n+=r.ui.popoverError(r)),a||s?e.popover("hide"):(r.ui.bootstrap2?t=e.data("popover"):t||(t=bootstrap.Popover.getInstance(e[0]),i=!0),(i?$(t.tip).is(":visible"):t.$arrow&&0<t.$arrow.parents("body").length)?(i?$(t.tip).find(".popover-body"):e.find("+ .popover .popover-content")).html(n):(r.ui.bootstrap2||r.ui.bootstrap3?t.options.content=n:i?t._config.content=n:t.config.content=n,e.popover("show")))}}();var p={};!function(a){"use strict";var o,n=function(r){var o,e,s=a(r.target),t=s.data("pwstrength-bootstrap"),n=s.val();void 0!==t&&(t.instances.errors=[],0===n.length?e=void 0:(e=t.common.zxcvbn?(o=[],a.each(t.common.userInputs.concat([t.common.usernameField]),function(r,e){e=a(e).val();e&&o.push(e)}),o=o.concat(t.common.zxcvbnTerms),e=zxcvbn(n,o).guesses,Math.log(e)*Math.LOG2E):c.executeRules(t,n),"function"==typeof t.common.onScore&&(e=t.common.onScore(t,n,e))),d.updateUI(t,s,e),s=(n=d.getVerdictAndCssClass(t,e))[1],n=n[0],t.common.debug&&console.log(e+" - "+n),"function"==typeof t.common.onKeyUp&&t.common.onKeyUp(r,{score:e,verdictText:n,verdictLevel:s}))},i=function(r){var e=a(r.target),o=e.val(),s=0,t=function(){e.val()!==o?n(r):s<3&&(s+=1,setTimeout(t,100))};setTimeout(t,100)};p.init=function(t){return this.each(function(r,e){var o=a.extend(!0,{},u),o=a.extend(!0,o,t),s=a(e);o.instances={},s.data("pwstrength-bootstrap",o),a.each(o.common.events,function(r,e){s.on(e,"paste"===e?i:n)}),d.initUI(o,s),s.trigger("keyup"),"function"==typeof o.common.onLoad&&o.common.onLoad()}),this},p.destroy=function(){return this.each(function(r,e){var o=a(e),e=o.data("pwstrength-bootstrap"),e=d.getUIElements(e,o);e.$progressbar.remove(),e.$verdict.remove(),e.$errors.remove(),o.removeData("pwstrength-bootstrap")}),this},p.forceUpdate=function(){return this.each(function(r,e){n({target:e})}),this},p.addRule=function(o,s,t,n){return this.each(function(r,e){e=a(e).data("pwstrength-bootstrap");e.rules.activated[o]=n,e.rules.scores[o]=t,e.rules.extra[o]=s}),this},o=function(o,s,t){this.each(function(r,e){a(e).data("pwstrength-bootstrap").rules[s][o]=t})},p.changeScore=function(r,e){return o.call(this,r,"scores",e),this},p.ruleActive=function(r,e){return o.call(this,r,"activated",e),this},p.ruleIsMet=function(t){var n=0;return"wordMinLength"===t?t="wordMinLengthStaticScore":"wordMaxLength"===t&&(t="wordMaxLengthStaticScore"),this.each(function(r,e){var o=a(e).data("pwstrength-bootstrap"),s=c.validation[t];"function"==typeof(s="function"!=typeof s?o.rules.extra[t]:s)&&(e=s(o,a(e).val(),1),a.isNumeric(e)&&(n+=e))}),n===this.length},a.fn.pwstrength=function(r){var e;return p[r]?e=p[r].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof r&&r?a.error("Method "+r+" does not exist on jQuery.pwstrength-bootstrap"):e=p.init.apply(this,arguments),e}}(s)}(jQuery);
// source --> https://prontosocialchef.it/wp-includes/js/dist/vendor/wp-polyfill-inert.min.js?ver=3.1.2 
!function(e){"object"==typeof exports&&"undefined"!=typeof module||"function"!=typeof define||!define.amd?e():define("inert",e)}((function(){"use strict";var e,t,n,i,o,r,s=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e};function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){d(this,u),this._inertManager=t,this._rootElement=e,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}function h(e,t){d(this,h),this._node=e,this._overrodeFocusMethod=!1,this._inertRoots=new Set([t]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}function l(e){if(d(this,l),!e)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=e,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),_(e.head||e.body||e.documentElement),"loading"===e.readyState?e.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}function c(e,t,n){if(e.nodeType==Node.ELEMENT_NODE){var i=e;if(s=(t&&t(i),i.shadowRoot))return void c(s,t,s);if("content"==i.localName){for(var o=(s=i).getDistributedNodes?s.getDistributedNodes():[],r=0;r<o.length;r++)c(o[r],t,n);return}if("slot"==i.localName){for(var s,a=(s=i).assignedNodes?s.assignedNodes({flatten:!0}):[],d=0;d<a.length;d++)c(a[d],t,n);return}}for(var u=e.firstChild;null!=u;)c(u,t,n),u=u.nextSibling}function _(e){var t;e.querySelector("style#inert-style, link#inert-style")||((t=document.createElement("style")).setAttribute("id","inert-style"),t.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",e.appendChild(t))}"undefined"!=typeof window&&(e=Array.prototype.slice,t=Element.prototype.matches||Element.prototype.msMatchesSelector,n=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),s(u,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(e){this._unmanageNode(e.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(e){var t=this,n=(c(e,(function(e){return t._visitNode(e)})),document.activeElement);if(!document.body.contains(e)){for(var i=e,o=void 0;i;){if(i.nodeType===Node.DOCUMENT_FRAGMENT_NODE){o=i;break}i=i.parentNode}o&&(n=o.activeElement)}e.contains(n)&&(n.blur(),n===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(e){e.nodeType===Node.ELEMENT_NODE&&(e!==this._rootElement&&e.hasAttribute("inert")&&this._adoptInertRoot(e),(t.call(e,n)||e.hasAttribute("tabindex"))&&this._manageNode(e))}},{key:"_manageNode",value:function(e){e=this._inertManager.register(e,this),this._managedNodes.add(e)}},{key:"_unmanageNode",value:function(e){(e=this._inertManager.deregister(e,this))&&this._managedNodes.delete(e)}},{key:"_unmanageSubtree",value:function(e){var t=this;c(e,(function(e){return t._unmanageNode(e)}))}},{key:"_adoptInertRoot",value:function(e){var t=this._inertManager.getInertRoot(e);t||(this._inertManager.setInert(e,!0),t=this._inertManager.getInertRoot(e)),t.managedNodes.forEach((function(e){this._manageNode(e.node)}),this)}},{key:"_onMutation",value:function(t,n){t.forEach((function(t){var n,i=t.target;"childList"===t.type?(e.call(t.addedNodes).forEach((function(e){this._makeSubtreeUnfocusable(e)}),this),e.call(t.removedNodes).forEach((function(e){this._unmanageSubtree(e)}),this)):"attributes"===t.type&&("tabindex"===t.attributeName?this._manageNode(i):i!==this._rootElement&&"inert"===t.attributeName&&i.hasAttribute("inert")&&(this._adoptInertRoot(i),n=this._inertManager.getInertRoot(i),this._managedNodes.forEach((function(e){i.contains(e.node)&&n._manageNode(e.node)}))))}),this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return null!==this._savedAriaHidden}},{key:"savedAriaHidden",set:function(e){this._savedAriaHidden=e},get:function(){return this._savedAriaHidden}}]),i=u,s(h,[{key:"destructor",value:function(){var e;this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE&&(e=this._node,null!==this._savedTabIndex?e.setAttribute("tabindex",this._savedTabIndex):e.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete e.focus),this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){var e;this.node.nodeType===Node.ELEMENT_NODE&&(e=this.node,t.call(e,n)?-1===e.tabIndex&&this.hasSavedTabIndex||(e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex),e.setAttribute("tabindex","-1"),e.nodeType===Node.ELEMENT_NODE&&(e.focus=function(){},this._overrodeFocusMethod=!0)):e.hasAttribute("tabindex")&&(this._savedTabIndex=e.tabIndex,e.removeAttribute("tabindex")))}},{key:"addInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.add(e)}},{key:"removeInertRoot",value:function(e){this._throwIfDestroyed(),this._inertRoots.delete(e),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return null!==this._savedTabIndex}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(e){this._throwIfDestroyed(),this._savedTabIndex=e},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),o=h,s(l,[{key:"setInert",value:function(e,t){if(t){if(!this._inertRoots.has(e)&&(t=new i(e,this),e.setAttribute("inert",""),this._inertRoots.set(e,t),!this._document.body.contains(e)))for(var n=e.parentNode;n;)11===n.nodeType&&_(n),n=n.parentNode}else this._inertRoots.has(e)&&(this._inertRoots.get(e).destructor(),this._inertRoots.delete(e),e.removeAttribute("inert"))}},{key:"getInertRoot",value:function(e){return this._inertRoots.get(e)}},{key:"register",value:function(e,t){var n=this._managedNodes.get(e);return void 0!==n?n.addInertRoot(t):n=new o(e,t),this._managedNodes.set(e,n),n}},{key:"deregister",value:function(e,t){var n=this._managedNodes.get(e);return n?(n.removeInertRoot(t),n.destroyed&&this._managedNodes.delete(e),n):null}},{key:"_onDocumentLoaded",value:function(){e.call(this._document.querySelectorAll("[inert]")).forEach((function(e){this.setInert(e,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(n,i){var o=this;n.forEach((function(n){switch(n.type){case"childList":e.call(n.addedNodes).forEach((function(n){var i;n.nodeType===Node.ELEMENT_NODE&&(i=e.call(n.querySelectorAll("[inert]")),t.call(n,"[inert]")&&i.unshift(n),i.forEach((function(e){this.setInert(e,!0)}),o))}),o);break;case"attributes":if("inert"!==n.attributeName)return;var i=n.target,r=i.hasAttribute("inert");o.setInert(i,r)}}),this)}}]),s=l,HTMLElement.prototype.hasOwnProperty("inert")||(r=new s(document),Object.defineProperty(HTMLElement.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(e){r.setInert(this,e)}})))}));
// source --> https://prontosocialchef.it/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.14.0 
var runtime=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i=(w="function"==typeof Symbol?Symbol:{}).iterator||"@@iterator",a=w.asyncIterator||"@@asyncIterator",c=w.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(r){u=function(t,e,r){return t[e]=r}}function h(t,r,n,i){var a,c,u,h;r=r&&r.prototype instanceof v?r:v,r=Object.create(r.prototype),i=new O(i||[]);return o(r,"_invoke",{value:(a=t,c=n,u=i,h=f,function(t,r){if(h===p)throw new Error("Generator is already running");if(h===y){if("throw"===t)throw r;return{value:e,done:!0}}for(u.method=t,u.arg=r;;){var n=u.delegate;if(n&&(n=function t(r,n){var o=n.method,i=r.iterator[o];return i===e?(n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),g):"throw"===(o=l(i,r.iterator,n.arg)).type?(n.method="throw",n.arg=o.arg,n.delegate=null,g):(i=o.arg)?i.done?(n[r.resultName]=i.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}(n,u),n)){if(n===g)continue;return n}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if(h===f)throw h=y,u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);if(h=p,"normal"===(n=l(a,c,u)).type){if(h=u.done?y:s,n.arg!==g)return{value:n.arg,done:u.done}}else"throw"===n.type&&(h=y,u.method="throw",u.arg=n.arg)}})}),r}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var f="suspendedStart",s="suspendedYield",p="executing",y="completed",g={};function v(){}function d(){}function m(){}var w,b,L=((b=(b=(u(w={},i,(function(){return this})),Object.getPrototypeOf))&&b(b(k([]))))&&b!==r&&n.call(b,i)&&(w=b),m.prototype=v.prototype=Object.create(w));function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var r;o(this,"_invoke",{value:function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,c){var u;if("throw"!==(o=l(t[o],t,i)).type)return(i=(u=o.arg).value)&&"object"==typeof i&&n.call(i,"__await")?e.resolve(i.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(i).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}));c(o.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}})}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t||""===t){var r,o=t[i];if(o)return o.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return r=-1,(o=function o(){for(;++r<t.length;)if(n.call(t,r))return o.value=t[r],o.done=!1,o;return o.value=e,o.done=!0,o}).next=o}throw new TypeError(typeof t+" is not iterable")}return o(L,"constructor",{value:d.prototype=m,configurable:!0}),o(m,"constructor",{value:d,configurable:!0}),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){return!!(t="function"==typeof t&&t.constructor)&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(h(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),u(L,c,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;0<=i;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}var a=(i=i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc?null:i)?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,_(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=runtime}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)};
// source --> https://prontosocialchef.it/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0 
!function(t){"use strict";var r,e,n;e={},(n=function(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}).m=r=[function(t,r,e){e(1),e(71),e(78),e(81),e(82),e(84),e(87),e(91),e(92),e(100),e(101),e(104),e(109),e(125),e(129),e(130),e(132),e(134),e(137),e(138),e(139),e(140),e(141),e(145),e(148),e(155),e(156),e(159),e(160),e(166),e(167),e(170),e(171),e(172),e(173),e(175),e(176),e(178),e(179),e(180),e(181),e(182),e(183),e(184),e(189),e(212),e(213),e(214),e(216),e(217),e(218),e(219),e(220),e(221),e(226),e(227),e(228),e(229),e(230),e(231),e(233),e(234),e(235),e(236),e(237),e(238),e(239),e(240),e(241),e(242),e(243),e(246),e(248),e(250),e(252),e(253),e(254),e(255),e(256),e(257),e(260),e(261),e(263),e(264),e(265),e(266),e(267),e(268),e(271),e(272),e(273),e(274),e(276),e(277),e(278),e(279),e(280),e(284),e(285),e(286),e(287),e(288),e(289),e(290),e(292),e(293),e(294),e(298),e(299),e(301),e(302),e(303),e(304),e(310),e(312),e(313),e(315),e(316),e(317),e(318),e(319),e(320),e(321),e(322),e(323),e(326),e(327),e(334),e(337),e(338),e(339),e(340),e(341),e(343),e(344),e(346),e(347),e(349),e(350),e(352),e(353),e(354),e(355),e(356),e(357),e(358),e(360),e(361),e(363),e(364),e(366),e(368),e(369),e(371),e(375),e(376),e(378),e(379),e(381),e(382),e(383),e(384),e(385),e(386),e(387),e(388),e(389),e(393),e(394),e(395),e(396),e(397),e(400),e(401),e(402),e(403),e(404),e(407),e(408),e(409),e(410),e(412),e(415),e(417),e(418),t.exports=e(419)},function(t,r,e){var n=e(2),o=e(39),i=e(63),a=e(68),u=e(70);n({target:"Array",proto:!0,arity:1,forced:e(6)((function(){return 4294967297!==[].push.call({length:4294967296},1)}))||!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}()},{push:function(t){var r=o(this),e=i(r),n=arguments.length;u(e+n);for(var c=0;c<n;c++)r[e]=arguments[c],e++;return a(r,e),e}})},function(r,e,n){var o=n(3),i=n(4).f,a=n(43),u=n(47),c=n(37),f=n(55),s=n(67);r.exports=function(r,e){var n,p,l,h=r.target,v=r.global,y=r.stat,d=v?o:y?o[h]||c(h,{}):(o[h]||{}).prototype;if(d)for(n in e){if(p=e[n],l=r.dontCallGetSet?(l=i(d,n))&&l.value:d[n],!s(v?n:h+(y?".":"#")+n,r.forced)&&l!==t){if(typeof p==typeof l)continue;f(p,l)}(r.sham||l&&l.sham)&&a(p,"sham",!0),u(d,n,p,r)}}},function(t,r){function e(t){return t&&t.Math==Math&&t}t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof global&&global)||function(){return this}()||this||Function("return this")()},function(t,r,e){var n=e(5),o=e(7),i=e(9),a=e(10),u=e(11),c=e(17),f=e(38),s=e(41),p=Object.getOwnPropertyDescriptor;r.f=n?p:function(t,r){if(t=u(t),r=c(r),s)try{return p(t,r)}catch(t){}if(f(t,r))return a(!o(i.f,t,r),t[r])}},function(t,r,e){e=e(6),t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r,e){e=e(8);var n=Function.prototype.call;t.exports=e?n.bind(n):function(){return n.apply(n,arguments)}},function(t,r,e){e=e(6),t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},function(t,r,e){var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);r.f=i?function(t){return!!(t=o(this,t))&&t.enumerable}:n},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,e){var n=e(12),o=e(15);t.exports=function(t){return n(o(t))}},function(t,r,e){var n=e(13),o=e(6),i=e(14),a=Object,u=n("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?u(t,""):a(t)}:a},function(t,r,e){var n=e(8),o=(e=Function.prototype).call;e=n&&e.bind.bind(o,o);t.exports=n?e:function(t){return function(){return o.apply(t,arguments)}}},function(t,r,e){var n=(e=e(13))({}.toString),o=e("".slice);t.exports=function(t){return o(n(t),8,-1)}},function(t,r,e){var n=e(16),o=TypeError;t.exports=function(t){if(n(t))throw o("Can't call method on "+t);return t}},function(r,e){r.exports=function(r){return null===r||r===t}},function(t,r,e){var n=e(18),o=e(22);t.exports=function(t){return t=n(t,"string"),o(t)?t:t+""}},function(r,e,n){var o=n(7),i=n(19),a=n(22),u=n(29),c=n(32),f=(n=n(33),TypeError),s=n("toPrimitive");r.exports=function(r,e){if(!i(r)||a(r))return r;var n=u(r,s);if(n){if(n=o(n,r,e=e===t?"default":e),!i(n)||a(n))return n;throw f("Can't convert object to primitive value")}return c(r,e=e===t?"number":e)}},function(t,r,e){var n=e(20),o=(e=e(21)).all;t.exports=e.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:n(t)||t===o}:function(t){return"object"==typeof t?null!==t:n(t)}},function(t,r,e){var n=(e=e(21)).all;t.exports=e.IS_HTMLDDA?function(t){return"function"==typeof t||t===n}:function(t){return"function"==typeof t}},function(r,e){var n="object"==typeof document&&document.all;r.exports={all:n,IS_HTMLDDA:void 0===n&&n!==t}},function(t,r,e){var n=e(23),o=e(20),i=e(24),a=(e=e(25),Object);t.exports=e?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return o(r)&&i(r.prototype,a(t))}},function(r,e,n){var o=n(3),i=n(20);r.exports=function(r,e){return arguments.length<2?(n=o[r],i(n)?n:t):o[r]&&o[r][e];var n}},function(t,r,e){e=e(13),t.exports=e({}.isPrototypeOf)},function(t,r,e){e=e(26),t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,r,e){var n=e(27),o=e(6),i=e(3).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},function(t,r,e){var n,o,i=e(3),a=e(28);e=i.process,i=i.Deno;!(o=(i=(i=e&&e.versions||i&&i.version)&&i.v8)?0<(n=i.split("."))[0]&&n[0]<4?1:+(n[0]+n[1]):o)&&a&&(!(n=a.match(/Edge\/(\d+)/))||74<=n[1])&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},function(t,r){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},function(r,e,n){var o=n(30),i=n(16);r.exports=function(r,e){return e=r[e],i(e)?t:o(e)}},function(t,r,e){var n=e(20),o=e(31),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a function")}},function(t,r){var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},function(t,r,e){var n=e(7),o=e(20),i=e(19),a=TypeError;t.exports=function(t,r){var e,u;if("string"===r&&o(e=t.toString)&&!i(u=n(e,t)))return u;if(o(e=t.valueOf)&&!i(u=n(e,t)))return u;if("string"!==r&&o(e=t.toString)&&!i(u=n(e,t)))return u;throw a("Can't convert object to primitive value")}},function(t,r,e){var n=e(3),o=e(34),i=e(38),a=e(40),u=e(26),c=(e=e(25),n.Symbol),f=o("wks"),s=e?c.for||c:c&&c.withoutSetter||a;t.exports=function(t){return i(f,t)||(f[t]=u&&i(c,t)?c[t]:s("Symbol."+t)),f[t]}},function(r,e,n){var o=n(35),i=n(36);(r.exports=function(r,e){return i[r]||(i[r]=e!==t?e:{})})("versions",[]).push({version:"3.31.0",mode:o?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",source:"https://github.com/zloirock/core-js"})},function(t,r){t.exports=!1},function(t,r,e){var n=e(3),o=e(37);e=n[e="__core-js_shared__"]||o(e,{});t.exports=e},function(t,r,e){var n=e(3),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},function(t,r,e){var n=e(13),o=e(39),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},function(t,r,e){var n=e(15),o=Object;t.exports=function(t){return o(n(t))}},function(r,e,n){n=n(13);var o=0,i=Math.random(),a=n(1..toString);r.exports=function(r){return"Symbol("+(r===t?"":r)+")_"+a(++o+i,36)}},function(t,r,e){var n=e(5),o=e(6),i=e(42);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,r,e){var n=e(3),o=(e=e(19),n.document),i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,r,e){var n=e(5),o=e(44),i=e(10);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},function(t,r,e){var n=e(5),o=e(41),i=e(45),a=e(46),u=e(17),c=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,p="enumerable",l="configurable",h="writable";r.f=n?i?function(t,r,e){var n;return a(t),r=u(r),a(e),"function"==typeof t&&"prototype"===r&&"value"in e&&h in e&&!e[h]&&(n=s(t,r))&&n[h]&&(t[r]=e.value,e={configurable:(l in e?e:n)[l],enumerable:(p in e?e:n)[p],writable:!1}),f(t,r,e)}:f:function(t,r,e){if(a(t),r=u(r),a(e),o)try{return f(t,r,e)}catch(t){}if("get"in e||"set"in e)throw c("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},function(t,r,e){var n=e(5);e=e(6);t.exports=n&&e((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},function(t,r,e){var n=e(19),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not an object")}},function(r,e,n){var o=n(20),i=n(44),a=n(48),u=n(37);r.exports=function(r,e,n,c){var f=(c=c||{}).enumerable,s=c.name!==t?c.name:e;if(o(n)&&a(n,s,c),c.global)f?r[e]=n:u(e,n);else{try{c.unsafe?r[e]&&(f=!0):delete r[e]}catch(r){}f?r[e]=n:i.f(r,e,{value:n,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return r}},function(r,e,n){var o=n(13),i=n(6),a=n(20),u=n(38),c=n(5),f=n(49).CONFIGURABLE,s=n(50),p=(n=n(51)).enforce,l=n.get,h=String,v=Object.defineProperty,y=o("".slice),d=o("".replace),g=o([].join),b=c&&!i((function(){return 8!==v((function(){}),"length",{value:8}).length})),m=String(String).split("String");r=r.exports=function(r,e,n){"Symbol("===y(h(e),0,7)&&(e="["+d(h(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!u(r,"name")||f&&r.name!==e)&&(c?v(r,"name",{value:e,configurable:!0}):r.name=e),b&&n&&u(n,"arity")&&r.length!==n.arity&&v(r,"length",{value:n.arity});try{n&&u(n,"constructor")&&n.constructor?c&&v(r,"prototype",{writable:!1}):r.prototype&&(r.prototype=t)}catch(r){}return n=p(r),u(n,"source")||(n.source=g(m,"string"==typeof e?e:"")),r};Function.prototype.toString=r((function(){return a(this)&&l(this).source||s(this)}),"toString")},function(t,r,e){var n=e(5),o=e(38),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor;o=(e=o(i,"name"))&&"something"===function(){}.name,i=e&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:e,PROPER:o,CONFIGURABLE:i}},function(t,r,e){var n=e(13),o=e(20),i=(e=e(36),n(Function.toString));o(e.inspectSource)||(e.inspectSource=function(t){return i(t)}),t.exports=e.inspectSource},function(t,r,e){var n,o,i,a,u=e(52),c=e(3),f=e(19),s=e(43),p=e(38),l=e(36),h=e(53),v=(e=e(54),"Object already initialized"),y=c.TypeError,d=(c=c.WeakMap,u||l.state?((i=l.state||(l.state=new c)).get=i.get,i.has=i.has,i.set=i.set,n=function(t,r){if(i.has(t))throw y(v);return r.facade=t,i.set(t,r),r},o=function(t){return i.get(t)||{}},function(t){return i.has(t)}):(e[a=h("state")]=!0,n=function(t,r){if(p(t,a))throw y(v);return r.facade=t,s(t,a,r),r},o=function(t){return p(t,a)?t[a]:{}},function(t){return p(t,a)}));t.exports={set:n,get:o,has:d,enforce:function(t){return d(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!f(r)||(e=o(r)).type!==t)throw y("Incompatible receiver, "+t+" required");return e}}}},function(t,r,e){var n=e(3);e=e(20),n=n.WeakMap;t.exports=e(n)&&/native code/.test(String(n))},function(t,r,e){var n=e(34),o=e(40),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,r){t.exports={}},function(t,r,e){var n=e(38),o=e(56),i=e(4),a=e(44);t.exports=function(t,r,e){for(var u=o(r),c=a.f,f=i.f,s=0;s<u.length;s++){var p=u[s];n(t,p)||e&&n(e,p)||c(t,p,f(r,p))}}},function(t,r,e){var n=e(23),o=e(13),i=e(57),a=e(66),u=e(46),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(u(t)),e=a.f;return e?c(r,e(t)):r}},function(t,r,e){var n=e(58),o=e(65).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,r,e){var n=e(13),o=e(38),i=e(11),a=e(59).indexOf,u=e(54),c=n([].push);t.exports=function(t,r){var e,n=i(t),f=0,s=[];for(e in n)!o(u,e)&&o(n,e)&&c(s,e);for(;r.length>f;)o(n,e=r[f++])&&(~a(s,e)||c(s,e));return s}},function(t,r,e){var n=e(11),o=e(60),i=e(63);e=function(t){return function(r,e,a){var u,c=n(r),f=i(c),s=o(a,f);if(t&&e!=e){for(;s<f;)if((u=c[s++])!=u)return!0}else for(;s<f;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:e(!0),indexOf:e(!1)}},function(t,r,e){var n=e(61),o=Math.max,i=Math.min;t.exports=function(t,r){return(t=n(t))<0?o(t+r,0):i(t,r)}},function(t,r,e){var n=e(62);t.exports=function(t){return(t=+t)!=t||0==t?0:n(t)}},function(t,r){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){return(0<(t=+t)?n:e)(t)}},function(t,r,e){var n=e(64);t.exports=function(t){return n(t.length)}},function(t,r,e){var n=e(61),o=Math.min;t.exports=function(t){return 0<t?o(n(t),9007199254740991):0}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,e){var n=e(6),o=e(20),i=/#|\.prototype\./,a=(e=function(t,r){return(t=u[a(t)])==f||t!=c&&(o(r)?n(r):!!r)},e.normalize=function(t){return String(t).replace(i,".").toLowerCase()}),u=e.data={},c=e.NATIVE="N",f=e.POLYFILL="P";t.exports=e},function(r,e,n){var o=n(5),i=n(69),a=TypeError,u=Object.getOwnPropertyDescriptor;o=o&&!function(){if(this!==t)return 1;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();r.exports=o?function(t,r){if(i(t)&&!u(t,"length").writable)throw a("Cannot set read only .length");return t.length=r}:function(t,r){return t.length=r}},function(t,r,e){var n=e(14);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,r){var e=TypeError;t.exports=function(t){if(9007199254740991<t)throw e("Maximum allowed index exceeded");return t}},function(t,r,e){var n=e(2),o=e(72),i=e(11),a=(e=e(73),Array);n({target:"Array",proto:!0},{toReversed:function(){return o(i(this),a)}}),e("toReversed")},function(t,r,e){var n=e(63);t.exports=function(t,r){for(var e=n(t),o=new r(e),i=0;i<e;i++)o[i]=t[e-i-1];return o}},function(r,e,n){var o=n(33),i=n(74),a=(n=n(44).f,o("unscopables")),u=Array.prototype;u[a]==t&&n(u,a,{configurable:!0,value:i(null)}),r.exports=function(t){u[a][t]=!0}},function(r,e,n){function o(){}function i(t){return"<script>"+t+"</"+v+">"}var a,u=n(46),c=n(75),f=n(65),s=n(54),p=n(77),l=n(42),h=(n=n(53),"prototype"),v="script",y=n("IE_PROTO"),d=function(){try{a=new ActiveXObject("htmlfile")}catch(t){}var t;d="undefined"==typeof document||document.domain&&a?function(t){t.write(i("")),t.close();var r=t.parentWindow.Object;return t=null,r}(a):((t=l("iframe")).style.display="none",p.appendChild(t),t.src=String("javascript:"),(t=t.contentWindow.document).open(),t.write(i("document.F=Object")),t.close(),t.F);for(var r=f.length;r--;)delete d[h][f[r]];return d()};s[y]=!0,r.exports=Object.create||function(r,e){var n;return null!==r?(o[h]=u(r),n=new o,o[h]=null,n[y]=r):n=d(),e===t?n:c.f(n,e)}},function(t,r,e){var n=e(5),o=e(45),i=e(44),a=e(46),u=e(11),c=e(76);r.f=n&&!o?Object.defineProperties:function(t,r){a(t);for(var e,n=u(r),o=c(r),f=o.length,s=0;s<f;)i.f(t,e=o[s++],n[e]);return t}},function(t,r,e){var n=e(58),o=e(65);t.exports=Object.keys||function(t){return n(t,o)}},function(t,r,e){e=e(23),t.exports=e("document","documentElement")},function(r,e,n){var o=n(2),i=n(13),a=n(30),u=n(11),c=n(79),f=n(80),s=(n=n(73),Array),p=i(f("Array").sort);o({target:"Array",proto:!0},{toSorted:function(r){r!==t&&a(r);var e=u(this);e=c(s,e);return p(e,r)}}),n("toSorted")},function(t,r,e){var n=e(63);t.exports=function(t,r){for(var e=0,o=n(r),i=new t(o);e<o;)i[e]=r[e++];return i}},function(t,r,e){var n=e(3);t.exports=function(t){return n[t].prototype}},function(t,r,e){var n=e(2),o=e(73),i=e(70),a=e(63),u=e(60),c=e(11),f=e(61),s=Array,p=Math.max,l=Math.min;n({target:"Array",proto:!0},{toSpliced:function(t,r){var e,n,o,h,v=c(this),y=a(v),d=u(t,y),g=0;for(0===(t=arguments.length)?e=n=0:n=1===t?(e=0,y-d):(e=t-2,l(p(f(r),0),y-d)),o=i(y+e-n),h=s(o);g<d;g++)h[g]=v[g];for(;g<d+e;g++)h[g]=arguments[g-d+2];for(;g<o;g++)h[g]=v[g+n-e];return h}}),o("toSpliced")},function(t,r,e){var n=e(2),o=e(83),i=e(11),a=Array;n({target:"Array",proto:!0},{with:function(t,r){return o(i(this),a,t,r)}})},function(t,r,e){var n=e(63),o=e(61),i=RangeError;t.exports=function(t,r,e,a){var u=n(t),c=(e=o(e))<0?u+e:e;if(u<=c||c<0)throw i("Incorrect index");for(var f=new r(u),s=0;s<u;s++)f[s]=s===c?a:t[s];return f}},function(t,r,e){var n=e(3),o=e(5),i=e(85),a=e(86),u=(e=e(6),n.RegExp),c=u.prototype;o&&e((function(){var t=!0;try{u(".","d")}catch(r){t=!1}var r,e={},n="",o=t?"dgimsy":"gimsy",i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(r in t&&(i.hasIndices="d"),i)!function(t,r){Object.defineProperty(e,t,{get:function(){return n+=r,!0}})}(r,i[r]);return Object.getOwnPropertyDescriptor(c,"flags").get.call(e)!==o||n!==o}))&&i(c,"flags",{configurable:!0,get:a})},function(t,r,e){var n=e(48),o=e(44);t.exports=function(t,r,e){return e.get&&n(e.get,r,{getter:!0}),e.set&&n(e.set,r,{setter:!0}),o.f(t,r,e)}},function(t,r,e){var n=e(46);t.exports=function(){var t=n(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.unicodeSets&&(r+="v"),t.sticky&&(r+="y"),r}},function(t,r,e){var n=e(2),o=e(13),i=e(15),a=e(88),u=o("".charCodeAt);n({target:"String",proto:!0},{isWellFormed:function(){for(var t=a(i(this)),r=t.length,e=0;e<r;e++){var n=u(t,e);if(55296==(63488&n)&&(56320<=n||++e>=r||56320!=(64512&u(t,e))))return!1}return!0}})},function(t,r,e){var n=e(89),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},function(r,e,n){var o=n(90),i=n(20),a=n(14),u=n(33)("toStringTag"),c=Object,f="Arguments"==a(function(){return arguments}());r.exports=o?a:function(r){var e;return r===t?"Undefined":null===r?"Null":"string"==typeof(r=function(t,r){try{return t[r]}catch(t){}}(e=c(r),u))?r:f?a(e):"Object"==(r=a(e))&&i(e.callee)?"Arguments":r}},function(t,r,e){var n={};n[e(33)("toStringTag")]="z",t.exports="[object z]"===String(n)},function(t,r,e){var n=e(2),o=e(7),i=e(13),a=e(15),u=e(88),c=(e=e(6),Array),f=i("".charAt),s=i("".charCodeAt),p=i([].join),l="".toWellFormed,h=l&&e((function(){return"1"!==o(l,1)}));n({target:"String",proto:!0,forced:h},{toWellFormed:function(){var t=u(a(this));if(h)return o(l,t);for(var r=t.length,e=c(r),n=0;n<r;n++){var i=s(t,n);55296!=(63488&i)?e[n]=f(t,n):56320<=i||r<=n+1||56320!=(64512&s(t,n+1))?e[n]="�":(e[n]=f(t,n),e[++n]=f(t,n))}return p(e,"")}})},function(t,r,e){var n=e(72),o=e(93),i=o.aTypedArray,a=(e=o.exportTypedArrayMethod,o.getTypedArrayConstructor);e("toReversed",(function(){return n(i(this),a(this))}))},function(r,e,n){function o(t){return!!l(t)&&(t=v(t),h(C,t)||h(_,t))}var i,a,u,c=n(94),f=n(5),s=n(3),p=n(20),l=n(19),h=n(38),v=n(89),y=n(31),d=n(43),g=n(47),b=n(85),m=n(24),x=n(95),w=n(97),S=n(33),A=n(40),E=(I=n(51)).enforce,O=I.get,R=(n=s.Int8Array)&&n.prototype,I=(I=s.Uint8ClampedArray)&&I.prototype,k=n&&x(n),T=R&&x(R),M=(n=Object.prototype,s.TypeError),j=(S=S("toStringTag"),A("TYPED_ARRAY_TAG")),P="TypedArrayConstructor",D=c&&!!w&&"Opera"!==v(s.opera),C=(c=!1,{Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8}),_={BigInt64Array:8,BigUint64Array:8},N=function(t){var r=x(t);if(l(r))return(t=O(r))&&h(t,P)?t[P]:N(r)};for(i in C)(u=(a=s[i])&&a.prototype)?E(u)[P]=a:D=!1;for(i in _)(u=(a=s[i])&&a.prototype)&&(E(u)[P]=a);if((!D||!p(k)||k===Function.prototype)&&(k=function(){throw M("Incorrect invocation")},D))for(i in C)s[i]&&w(s[i],k);if((!D||!T||T===n)&&(T=k.prototype,D))for(i in C)s[i]&&w(s[i].prototype,T);if(D&&x(I)!==T&&w(I,T),f&&!h(T,S))for(i in b(T,S,{configurable:c=!0,get:function(){return l(this)?this[j]:t}}),C)s[i]&&d(s[i],j,i);r.exports={NATIVE_ARRAY_BUFFER_VIEWS:D,TYPED_ARRAY_TAG:c&&j,aTypedArray:function(t){if(o(t))return t;throw M("Target is not a typed array")},aTypedArrayConstructor:function(t){if(p(t)&&(!w||m(k,t)))return t;throw M(y(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,r,e,n){if(f){if(e)for(var o in C)if((o=s[o])&&h(o.prototype,t))try{delete o.prototype[t]}catch(e){try{o.prototype[t]=r}catch(e){}}T[t]&&!e||g(T,t,!e&&D&&R[t]||r,n)}},exportTypedArrayStaticMethod:function(t,r,e){var n,o;if(f){if(w){if(e)for(n in C)if((o=s[n])&&h(o,t))try{delete o[t]}catch(t){}if(k[t]&&!e)return;try{return g(k,t,!e&&D&&k[t]||r)}catch(t){}}for(n in C)!(o=s[n])||o[t]&&!e||g(o,t,r)}},getTypedArrayConstructor:N,isView:function(t){return!!l(t)&&("DataView"===(t=v(t))||h(C,t)||h(_,t))},isTypedArray:o,TypedArray:k,TypedArrayPrototype:T}},function(t,r){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(t,r,e){var n=e(38),o=e(20),i=e(39),a=e(53),u=(e=e(96),a("IE_PROTO")),c=Object,f=c.prototype;t.exports=e?c.getPrototypeOf:function(t){var r=i(t);return n(r,u)?r[u]:(t=r.constructor,o(t)&&r instanceof t?t.prototype:r instanceof c?f:null)}},function(t,r,e){e=e(6),t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(r,e,n){var o=n(98),i=n(46),a=n(99);r.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=o(Object.prototype,"__proto__","set"))(e,[]),r=e instanceof Array}catch(e){}return function(e,n){return i(e),a(n),r?t(e,n):e.__proto__=n,e}}():t)},function(t,r,e){var n=e(13),o=e(30);t.exports=function(t,r,e){try{return n(o(Object.getOwnPropertyDescriptor(t,r)[e]))}catch(t){}}},function(t,r,e){var n=e(20),o=String,i=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw i("Can't set "+o(t)+" as a prototype")}},function(r,e,n){var o=n(93),i=n(13),a=n(30),u=n(79),c=o.aTypedArray,f=o.getTypedArrayConstructor,s=(n=o.exportTypedArrayMethod,i(o.TypedArrayPrototype.sort));n("toSorted",(function(r){r!==t&&a(r);var e=c(this);e=u(f(e),e);return s(e,r)}))},function(t,r,e){var n=e(83),o=e(93),i=e(102),a=e(61),u=e(103),c=o.aTypedArray,f=o.getTypedArrayConstructor;(0,o.exportTypedArrayMethod)("with",(function(t,r){var e=c(this);t=a(t),r=i(e)?u(r):+r;return n(e,f(e),t,r)}),!function(){try{new Int8Array(1).with(2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}())},function(t,r,e){var n=e(89);t.exports=function(t){return"BigInt64Array"==(t=n(t))||"BigUint64Array"==t}},function(t,r,e){var n=e(18),o=TypeError;t.exports=function(t){if("number"==typeof(t=n(t,"number")))throw o("Can't convert number to bigint");return BigInt(t)}},function(r,e,n){var o=n(2),i=n(24),a=n(95),u=n(97),c=n(55),f=n(74),s=n(43),p=n(10),l=n(105),h=n(108),v=n(33)("toStringTag"),y=Error,d=function(r,e,n){var o,c=i(g,this);return u?o=u(y(),c?a(this):g):(o=c?this:f(g),s(o,v,"Error")),n!==t&&s(o,"message",h(n)),l(o,d,o.stack,1),s(o,"error",r),s(o,"suppressed",e),o};u?u(d,y):c(d,y,{name:!0});var g=d.prototype=f(y.prototype,{constructor:p(1,d),message:p(1,""),name:p(1,"SuppressedError")});o({global:!0,constructor:!0,arity:3},{SuppressedError:d})},function(t,r,e){var n=e(43),o=e(106),i=e(107),a=Error.captureStackTrace;t.exports=function(t,r,e,u){i&&(a?a(t,r):n(t,"stack",o(e,u)))}},function(t,r,e){e=e(13);var n=Error,o=e("".replace),i=(e=String(n("zxcasd").stack),/\n\s*at [^:]*:[^\n]*/),a=i.test(e);t.exports=function(t,r){if(a&&"string"==typeof t&&!n.prepareStackTrace)for(;r--;)t=o(t,i,"");return t}},function(t,r,e){var n=e(6),o=e(10);t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},function(r,e,n){var o=n(88);r.exports=function(r,e){return r===t?arguments.length<2?"":e:o(r)}},function(t,r,e){e(2)({target:"Array",stat:!0},{fromAsync:e(110)})},function(r,e,n){function o(){return new S(this)}var i=n(111),a=n(13),u=n(39),c=n(113),f=n(114),s=n(119),p=n(122),l=n(120),h=n(29),v=n(80),y=n(23),d=n(33),g=n(115),b=n(123).toArray,m=d("asyncIterator"),x=a(v("Array").values),w=a(x([]).next),S=function(t){this.iterator=x(t)};S.prototype.next=function(){return w(this.iterator)},r.exports=function(r){var e=this,n=arguments.length,a=1<n?arguments[1]:t,v=2<n?arguments[2]:t;return new(y("Promise"))((function(n){var y=u(r);a!==t&&(a=i(a,v));var d=h(y,m),x=d?t:l(y)||o,w=c(e)?new e:[];x=d?f(y,d):new g(p(s(y,x)));n(b(x,a,w))}))}},function(r,e,n){var o=n(112),i=n(30),a=n(8),u=o(o.bind);r.exports=function(r,e){return i(r),e===t?r:a?u(r,e):function(){return r.apply(e,arguments)}}},function(t,r,e){var n=e(14),o=e(13);t.exports=function(t){if("Function"===n(t))return o(t)}},function(t,r,e){function n(){}function o(t){if(!u(t))return!1;try{return l(n,p,t),!0}catch(t){return!1}}var i=e(13),a=e(6),u=e(20),c=e(89),f=e(23),s=e(50),p=[],l=f("Reflect","construct"),h=/^\s*(?:class|function)\b/,v=i(h.exec),y=!h.exec(n);i=function(t){if(!u(t))return!1;switch(c(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(h,s(t))}catch(t){return!0}};i.sham=!0,t.exports=!l||a((function(){var t;return o(o.call)||!o(Object)||!o((function(){t=!0}))||t}))?i:o},function(t,r,e){var n=e(7),o=e(115),i=e(46),a=e(119),u=e(122),c=e(29),f=e(33)("asyncIterator");t.exports=function(t,r){return(r=arguments.length<2?c(t,f):r)?i(n(r,t)):new o(u(a(t)))}},function(r,e,n){function o(t,r,e){var n=t.done;v.resolve(t.value).then((function(t){r(h(t,n))}),e)}var i=n(7),a=n(46),u=n(74),c=n(29),f=n(116),s=n(51),p=n(23),l=n(117),h=n(118),v=p("Promise"),y="AsyncFromSyncIterator",d=s.set,g=s.getterFor(y);s=function(t){t.type=y,d(this,t)};s.prototype=f(u(l),{next:function(){var t=g(this);return new v((function(r,e){o(a(i(t.next,t.iterator)),r,e)}))},return:function(){var r=g(this).iterator;return new v((function(e,n){var u=c(r,"return");if(u===t)return e(h(t,!0));o(u=a(i(u,r)),e,n)}))}}),r.exports=s},function(t,r,e){var n=e(47);t.exports=function(t,r,e){for(var o in r)n(t,o,r[o],e);return t}},function(t,r,e){var n,o,i=e(3),a=e(36),u=e(20),c=e(74),f=e(95),s=e(47),p=e(33),l=e(35),h="USE_FUNCTION_CONSTRUCTOR",v=p("asyncIterator");e=i.AsyncIterator;if(p=a.AsyncIteratorPrototype)n=p;else if(u(e))n=e.prototype;else if(a[h]||i[h])try{o=f(f(f(Function("return async function*(){}()")()))),f(o)===Object.prototype&&(n=o)}catch(t){}n?l&&(n=c(n)):n={},u(n[v])||s(n,v,(function(){return this})),t.exports=n},function(t,r){t.exports=function(t,r){return{value:t,done:r}}},function(t,r,e){var n=e(7),o=e(30),i=e(46),a=e(31),u=e(120),c=TypeError;t.exports=function(t,r){if(r=arguments.length<2?u(t):r,o(r))return i(n(r,t));throw c(a(t)+" is not iterable")}},function(t,r,e){var n=e(89),o=e(29),i=e(16),a=e(121),u=e(33)("iterator");t.exports=function(t){if(!i(t))return o(t,u)||o(t,"@@iterator")||a[n(t)]}},function(t,r){t.exports={}},function(t,r){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},function(r,e,n){var o=n(7),i=n(30),a=n(46),u=n(19),c=n(70),f=n(23),s=n(122),p=n(124);n=function(r){var e=0==r,n=1==r,l=2==r,h=3==r;return function(r,v,y){a(r);var d=v!==t;!d&&e||i(v);r=s(r);var g=f("Promise"),b=r.iterator,m=r.next,x=0;return new g((function(r,i){function f(t){p(b,i,t,i)}var s=function(){try{if(d)try{c(x)}catch(t){f(t)}g.resolve(a(o(m,b))).then((function(o){try{if(a(o).done)e?(y.length=x,r(y)):r(!h&&(l||t));else{var c,m,w=o.value;try{d?(c=v(w,x),m=function(t){if(n)s();else if(l)t?s():p(b,r,!1,i);else if(e)try{y[x++]=t,s()}catch(t){f(t)}else t?p(b,r,h||w,i):s()},u(c)?g.resolve(c).then(m,f):m(c)):(y[x++]=w,s())}catch(o){f(o)}}}catch(o){i(o)}}),i)}catch(t){i(t)}};s()}))}};r.exports={toArray:n(0),forEach:n(1),every:n(2),some:n(3),find:n(4)}},function(t,r,e){var n=e(7),o=e(23),i=e(29);t.exports=function(t,r,e,a){try{var u=i(t,"return");if(u)return o("Promise").resolve(n(u,t)).then((function(){r(e)}),(function(t){a(t)}))}catch(t){return a(t)}r(e)}},function(r,e,n){var o=n(2),i=n(126).filterReject;n=n(73);o({target:"Array",proto:!0,forced:!0},{filterOut:function(r){return i(this,r,1<arguments.length?arguments[1]:t)}}),n("filterOut")},function(r,e,n){var o=n(111),i=n(13),a=n(12),u=n(39),c=n(63),f=n(127),s=i([].push);i=function(r){var e=1==r,n=2==r,i=3==r,p=4==r,l=6==r,h=7==r,v=5==r||l;return function(y,d,g,b){for(var m,x,w=u(y),S=a(w),A=o(d,g),E=c(S),O=0,R=(b=b||f,e?b(y,E):n||h?b(y,0):t);O<E;O++)if((v||O in S)&&(x=A(m=S[O],O,w),r))if(e)R[O]=x;else if(x)switch(r){case 3:return!0;case 5:return m;case 6:return O;case 2:s(R,m)}else switch(r){case 4:return!1;case 7:s(R,m)}return l?-1:i||p?p:R}};r.exports={forEach:i(0),map:i(1),filter:i(2),some:i(3),every:i(4),find:i(5),findIndex:i(6),filterReject:i(7)}},function(t,r,e){var n=e(128);t.exports=function(t,r){return new(n(t))(0===r?0:r)}},function(r,e,n){var o=n(69),i=n(113),a=n(19),u=n(33)("species"),c=Array;r.exports=function(r){var e;return o(r)&&(e=r.constructor,(i(e)&&(e===c||o(e.prototype))||a(e)&&null===(e=e[u]))&&(e=t)),e===t?c:e}},function(r,e,n){var o=n(2),i=n(126).filterReject;n=n(73);o({target:"Array",proto:!0,forced:!0},{filterReject:function(r){return i(this,r,1<arguments.length?arguments[1]:t)}}),n("filterReject")},function(r,e,n){var o=n(2),i=n(131);n=n(73);o({target:"Array",proto:!0},{group:function(r){return i(this,r,1<arguments.length?arguments[1]:t)}}),n("group")},function(t,r,e){var n=e(111),o=e(13),i=e(12),a=e(39),u=e(17),c=e(63),f=e(74),s=e(79),p=Array,l=o([].push);t.exports=function(t,r,e,o){for(var h,v,y,d=a(t),g=i(d),b=n(r,e),m=f(null),x=c(g),w=0;w<x;w++)y=g[w],(v=u(b(y,w,d)))in m?l(m[v],y):m[v]=[y];if(o&&(h=o(d))!==p)for(v in m)m[v]=s(h,m[v]);return m}},function(r,e,n){var o=n(2),i=n(131),a=n(133);n=n(73);o({target:"Array",proto:!0,forced:!a("groupBy")},{groupBy:function(r){return i(this,r,1<arguments.length?arguments[1]:t)}}),n("groupBy")},function(t,r,e){var n=e(6);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){return 1},1)}))}},function(t,r,e){var n=e(2),o=e(133),i=e(73),a=e(135);n({target:"Array",proto:!0,name:"groupToMap",forced:e(35)||!o("groupByToMap")},{groupByToMap:a}),i("groupByToMap")},function(r,e,n){var o=n(111),i=n(13),a=n(12),u=n(39),c=n(63),f=(n=n(136)).Map,s=n.get,p=n.has,l=n.set,h=i([].push);r.exports=function(r){for(var e,n,i=u(this),v=a(i),y=o(r,1<arguments.length?arguments[1]:t),d=new f,g=c(v),b=0;b<g;b++)e=y(n=v[b],b,i),p(d,e)?h(s(d,e),n):l(d,e,[n]);return d}},function(t,r,e){var n=e(13);e=Map.prototype;t.exports={Map:Map,set:n(e.set),get:n(e.get),has:n(e.has),remove:n(e.delete),proto:e}},function(t,r,e){var n=e(2),o=e(73),i=e(135);n({target:"Array",proto:!0,forced:e(35)},{groupToMap:i}),o("groupToMap")},function(r,e,n){function o(r,e){if(!u||!a(r)||!u(r))return!1;for(var n,o=0,i=r.length;o<i;)if(!("string"==typeof(n=r[o++])||e&&n===t))return!1;return 0!==i}var i=n(2),a=n(69),u=Object.isFrozen;i({target:"Array",stat:!0,sham:!0,forced:!0},{isTemplateObject:function(t){if(!o(t,!0))return!1;var r=t.raw;return r.length===t.length&&o(r,!1)}})},function(t,r,e){var n=e(5),o=e(73),i=e(39),a=e(63);e=e(85);n&&(e(Array.prototype,"lastIndex",{configurable:!0,get:function(){var t=i(this);return 0==(t=a(t))?0:t-1}}),o("lastIndex"))},function(r,e,n){var o=n(5),i=n(73),a=n(39),u=n(63);n=n(85);o&&(n(Array.prototype,"lastItem",{configurable:!0,get:function(){var r=a(this),e=u(r);return 0==e?t:r[e-1]},set:function(t){var r=a(this),e=u(r);return r[0==e?0:e-1]=t}}),i("lastItem"))},function(t,r,e){var n=e(2),o=e(73);n({target:"Array",proto:!0,forced:!0},{uniqueBy:e(142)}),o("uniqueBy")},function(t,r,e){var n=e(13),o=e(30),i=e(16),a=e(63),u=e(39),c=e(136),f=e(143),s=c.Map,p=c.has,l=c.set,h=n([].push);t.exports=function(t){for(var r,e,n=u(this),c=a(n),v=[],y=new s,d=i(t)?function(t){return t}:o(t),g=0;g<c;g++)e=d(r=n[g]),p(y,e)||l(y,e,r);return f(y,(function(t){h(v,t)})),v}},function(t,r,e){var n,o=e(13),i=e(144),a=(e=(n=e(136)).Map,o((n=n.proto).forEach)),u=o(n.entries),c=u(new e).next;t.exports=function(t,r,e){return e?i(u(t),(function(t){return r(t[1],t[0])}),c):a(t,r)}},function(r,e,n){var o=n(7);r.exports=function(r,e,n){for(var i,a=n||r.next;!(i=o(a,r)).done;)if((i=e(i.value))!==t)return i}},function(t,r,e){var n=e(5),o=e(85),i=e(146);e=ArrayBuffer.prototype;!n||"detached"in e||o(e,"detached",{configurable:!0,get:function(){return i(this)}})},function(t,r,e){var n=e(13),o=e(147),i=n(ArrayBuffer.prototype.slice);t.exports=function(t){if(0!==o(t))return!1;try{return i(t,0,0),!1}catch(t){return!0}}},function(t,r,e){var n=e(98),o=e(14),i=TypeError;t.exports=n(ArrayBuffer.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!=o(t))throw i("ArrayBuffer expected");return t.byteLength}},function(r,e,n){var o=n(2),i=n(149);i&&o({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:t,!0)}})},function(r,e,n){var o=n(3),i=n(13),a=n(98),u=n(150),c=n(146),f=n(147),s=n(151),p=o.TypeError,l=o.structuredClone,h=o.ArrayBuffer,v=o.DataView,y=Math.min,d=(n=h.prototype,o=v.prototype,i(n.slice)),g=a(n,"resizable","get"),b=a(n,"maxByteLength","get"),m=i(o.getInt8),x=i(o.setInt8);r.exports=s&&function(r,e,n){var o=f(r),i=e===t?o:u(e);e=!g||!g(r);if(c(r))throw p("ArrayBuffer is detached");if(r=l(r,{transfer:[r]}),o==i&&(n||e))return r;if(i<=o&&(!n||e))return d(r,0,i);e=n&&!e&&b?{maxByteLength:b(r)}:t,e=new h(i,e);for(var a=new v(r),s=new v(e),w=y(i,o),S=0;S<w;S++)x(s,S,m(a,S));return e}},function(r,e,n){var o=n(61),i=n(64),a=RangeError;r.exports=function(r){if(r===t)return 0;var e=o(r);if(e!==(r=i(e)))throw a("Wrong length or index");return r}},function(t,r,e){var n=e(3),o=e(6),i=e(27),a=e(152),u=e(153),c=e(154),f=n.structuredClone;t.exports=!!f&&!o((function(){if(u&&92<i||c&&94<i||a&&97<i)return!1;var t=new ArrayBuffer(8),r=f(t,{transfer:[t]});return 0!=t.byteLength||8!=r.byteLength}))},function(t,r,e){var n=e(153);e=e(154);t.exports=!n&&!e&&"object"==typeof window&&"object"==typeof document},function(t,r){t.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},function(t,r,e){e=e(14),t.exports="undefined"!=typeof process&&"process"==e(process)},function(r,e,n){var o=n(2),i=n(149);i&&o({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:t,!1)}})},function(r,e,n){function o(t){if((t=S(t)).state==E)throw m(x+" already disposed");return t}function i(){w(s(this,O),{type:x,state:"pending",stack:[]}),u||(this.disposed=!1)}var a=n(2),u=n(5),c=n(23),f=n(30),s=n(157),p=n(47),l=n(116),h=n(85),v=n(33),y=n(51),d=n(158),g=c("Promise"),b=c("SuppressedError"),m=ReferenceError,x=(c=v("asyncDispose"),v=v("toStringTag"),"AsyncDisposableStack"),w=y.set,S=y.getterFor(x),A="async-dispose",E="disposed",O=i.prototype;l(O,{disposeAsync:function(){var r=this;return new g((function(e,n){var o=S(r);if(o.state==E)return e(t);function i(t){a=s?new b(t,a):(s=!0,t),p()}o.state=E,u||(r.disposed=!0);var a,c=o.stack,f=c.length,s=!1,p=function(){if(f){var r=c[--f];c[f]=null;try{g.resolve(r()).then(p,i)}catch(r){i(r)}}else o.stack=null,s?n(a):e(t)};p()}))},use:function(t){return d(o(this),t,A),t},adopt:function(r,e){var n=o(this);return f(e),d(n,t,A,(function(){return e(r)})),r},defer:function(r){var e=o(this);f(r),d(e,t,A,r)},move:function(){var t=o(this),r=new i;return S(r).stack=t.stack,t.stack=[],t.state=E,u||(this.disposed=!0),r}}),u&&h(O,"disposed",{configurable:!0,get:function(){return S(this).state==E}}),p(O,c,O.disposeAsync,{name:"disposeAsync"}),p(O,v,x,{nonWritable:!0}),a({global:!0,constructor:!0,forced:!0},{AsyncDisposableStack:i})},function(t,r,e){var n=e(24),o=TypeError;t.exports=function(t,r){if(n(r,t))return t;throw o("Incorrect invocation")}},function(r,e,n){function o(t,r,e){return a(e||(e=t,"async-dispose"==r&&f(e,s)||f(e,p)),t)}var i=n(13),a=n(111),u=n(46),c=n(16),f=n(29),s=(n=n(33))("asyncDispose"),p=n("dispose"),l=i([].push);r.exports=function(r,e,n,i){var a;if(i)a=o(t,n,i);else{if(c(e))return;a=o(u(e),n)}l(r.stack,a)}},function(t,r,e){var n=e(2),o=e(157),i=e(43),a=e(38),u=e(33),c=e(117),f=e(35);e=u("toStringTag");a((u=function(){o(this,c)}).prototype=c,e)||i(c,e,"AsyncIterator"),!f&&a(c,"constructor")&&c.constructor!==Object||i(c,"constructor",u),n({global:!0,constructor:!0,forced:f},{AsyncIterator:u})},function(t,r,e){e(2)({target:"AsyncIterator",name:"indexed",proto:!0,real:!0,forced:!0},{asIndexedPairs:e(161)})},function(t,r,e){function n(t,r){return[r,t]}var o=e(7),i=e(162);t.exports=function(){return o(i,this,n)}},function(r,e,n){var o=n(7),i=n(30),a=n(46),u=n(19),c=n(122),f=n(163),s=n(118),p=n(124),l=f((function(r){var e=this,n=e.iterator,i=e.mapper;return new r((function(c,f){function l(t){e.done=!0,f(t)}function h(t){p(n,l,t,l)}r.resolve(a(o(e.next,n))).then((function(n){try{if(a(n).done)e.done=!0,c(s(t,!0));else{var o=n.value;try{var f=i(o,e.counter++),p=function(t){c(s(t,!1))};u(f)?r.resolve(f).then(p,h):p(f)}catch(n){h(n)}}}catch(n){l(n)}}),l)}))}));r.exports=function(t){return a(this),i(t),new l(c(this),{mapper:t})}},function(r,e,n){var o=n(7),i=n(164),a=n(46),u=n(74),c=n(43),f=n(116),s=n(33),p=n(51),l=n(23),h=n(29),v=n(117),y=n(118),d=n(165),g=l("Promise"),b=(l=s("toStringTag"),"AsyncIteratorHelper"),m="WrapForValidAsyncIterator",x=p.set,w=(s=function(r){function e(r){var e=(o=i((function(){return c(r)}))).error,o=o.value;return e||n&&o.done?{exit:!0,value:e?g.reject(o):g.resolve(y(t,!0))}:{exit:!1,value:o}}var n=!r,c=p.getterFor(r?m:b);return f(u(v),{next:function(){var t=(r=e(this)).value;if(r.exit)return t;var r=(n=i((function(){return a(t.nextHandler(g))}))).error,n=n.value;return r&&(t.done=!0),r?g.reject(n):g.resolve(n)},return:function(){var n=e(this),u=n.value;if(n.exit)return u;u.done=!0;var c=u.iterator,f=i((function(){if(u.inner)try{d(u.inner.iterator,"normal")}catch(t){return d(c,"throw",t)}return h(c,"return")})),s=n=f.value;return f.error?g.reject(n):s===t?g.resolve(y(t,!0)):(n=(f=i((function(){return o(s,c)}))).value,f.error?g.reject(n):r?g.resolve(n):g.resolve(n).then((function(r){return a(r),y(t,!0)})))}})},s(!0)),S=s(!1);c(S,l,"Async Iterator Helper"),r.exports=function(t,r){function e(e,n){n?(n.iterator=e.iterator,n.next=e.next):n=e,n.type=r?m:b,n.nextHandler=t,n.counter=0,n.done=!1,x(this,n)}return e.prototype=r?w:S,e}},function(t,r){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,r,e){var n=e(7),o=e(46),i=e(29);t.exports=function(t,r,e){var a,u;o(t);try{if(!(a=i(t,"return"))){if("throw"===r)throw e;return e}a=n(a,t)}catch(t){u=!0,a=t}if("throw"===r)throw e;if(u)throw a;return o(a),e}},function(r,e,n){var o=n(7),i=n(47),a=n(23),u=n(29),c=n(38),f=n(33),s=(n=n(117),f=f("asyncDispose"),a("Promise"));c(n,f)||i(n,f,(function(){var r=this;return new s((function(e,n){var i=u(r,"return");i?s.resolve(o(i,r)).then((function(){e(t)}),n):e(t)}))}))},function(r,e,n){var o=n(2),i=n(7),a=n(46),u=n(122),c=n(168),f=n(169),s=n(163),p=n(118),l=s((function(r){var e=this;return new r((function(n,o){function u(t){e.done=!0,o(t)}var c=function(){try{r.resolve(a(i(e.next,e.iterator))).then((function(r){try{a(r).done?(e.done=!0,n(p(t,!0))):e.remaining?(e.remaining--,c()):n(p(r.value,!1))}catch(r){u(r)}}),u)}catch(t){u(t)}};c()}))}));o({target:"AsyncIterator",proto:!0,real:!0},{drop:function(t){return a(this),t=f(c(+t)),new l(u(this),{remaining:t})}})},function(t,r){var e=RangeError;t.exports=function(t){if(t==t)return t;throw e("NaN is not allowed")}},function(t,r,e){var n=e(61),o=RangeError;t.exports=function(t){if((t=n(t))<0)throw o("The argument can't be less than 0");return t}},function(t,r,e){var n=e(2),o=e(123).every;n({target:"AsyncIterator",proto:!0,real:!0},{every:function(t){return o(this,t)}})},function(r,e,n){var o=n(2),i=n(7),a=n(30),u=n(46),c=n(19),f=n(122),s=n(163),p=n(118),l=n(124),h=s((function(r){var e=this,n=e.iterator,o=e.predicate;return new r((function(a,f){function s(t){e.done=!0,f(t)}function h(t){l(n,s,t,s)}var v=function(){try{r.resolve(u(i(e.next,n))).then((function(n){try{if(u(n).done)e.done=!0,a(p(t,!0));else{var i=n.value;try{var f=o(i,e.counter++),l=function(t){t?a(p(i,!1)):v()};c(f)?r.resolve(f).then(l,h):l(f)}catch(n){h(n)}}}catch(n){s(n)}}),s)}catch(t){s(t)}};v()}))}));o({target:"AsyncIterator",proto:!0,real:!0},{filter:function(t){return u(this),a(t),new h(f(this),{predicate:t})}})},function(t,r,e){var n=e(2),o=e(123).find;n({target:"AsyncIterator",proto:!0,real:!0},{find:function(t){return o(this,t)}})},function(r,e,n){var o=n(2),i=n(7),a=n(30),u=n(46),c=n(19),f=n(122),s=n(163),p=n(118),l=n(174),h=n(124),v=s((function(r){var e=this,n=e.iterator,o=e.mapper;return new r((function(a,f){function s(t){e.done=!0,f(t)}function v(t){h(n,s,t,s)}function y(){try{r.resolve(u(i(e.next,n))).then((function(n){try{if(u(n).done)e.done=!0,a(p(t,!0));else{var i=n.value;try{var f=o(i,e.counter++),h=function(t){try{e.inner=l(t),d()}catch(t){v(t)}};c(f)?r.resolve(f).then(h,v):h(f)}catch(n){v(n)}}}catch(n){s(n)}}),s)}catch(t){s(t)}}var d=function(){var t=e.inner;if(t)try{r.resolve(u(i(t.next,t.iterator))).then((function(t){try{u(t).done?(e.inner=null,y()):a(p(t.value,!1))}catch(t){v(t)}}),v)}catch(t){v(t)}else y()};d()}))}));o({target:"AsyncIterator",proto:!0,real:!0},{flatMap:function(t){return u(this),a(t),new v(f(this),{mapper:t,inner:null})}})},function(r,e,n){var o=n(7),i=n(20),a=n(46),u=n(122),c=n(120),f=n(29),s=n(33),p=n(115),l=s("asyncIterator");r.exports=function(r){var e,n=a(r),s=!0;r=f(n,l);return i(r)||(r=c(n),s=!1),r!==t?e=o(r,n):(e=n,s=!0),a(e),u(s?e:new p(u(e)))}},function(t,r,e){var n=e(2),o=e(123).forEach;n({target:"AsyncIterator",proto:!0,real:!0},{forEach:function(t){return o(this,t)}})},function(t,r,e){var n=e(2),o=e(39),i=e(24),a=e(174),u=e(117),c=e(177);n({target:"AsyncIterator",stat:!0},{from:function(t){return t=a("string"==typeof t?o(t):t),i(u,t.iterator)?t.iterator:new c(t)}})},function(t,r,e){var n=e(7);e=e(163);t.exports=e((function(){return n(this.next,this.iterator)}),!0)},function(t,r,e){e(2)({target:"AsyncIterator",proto:!0,real:!0,forced:!0},{indexed:e(161)})},function(t,r,e){e(2)({target:"AsyncIterator",proto:!0,real:!0},{map:e(162)})},function(r,e,n){var o=n(2),i=n(7),a=n(30),u=n(46),c=n(19),f=n(23),s=n(122),p=n(124),l=f("Promise"),h=TypeError;o({target:"AsyncIterator",proto:!0,real:!0},{reduce:function(r){u(this),a(r);var e=s(this),n=e.iterator,o=e.next,f=arguments.length<2,v=f?t:arguments[1],y=0;return new l((function(t,e){function a(t){p(n,e,t,e)}var s=function(){try{l.resolve(u(i(o,n))).then((function(n){try{if(u(n).done)f?e(h("Reduce of empty iterator with no initial value")):t(v);else{var o=n.value;if(f)f=!1,v=o,s();else try{var i=r(v,o,y),p=function(t){v=t,s()};c(i)?l.resolve(i).then(p,a):p(i)}catch(n){a(n)}}y++}catch(n){e(n)}}),e)}catch(t){e(t)}};s()}))}})},function(t,r,e){var n=e(2),o=e(123).some;n({target:"AsyncIterator",proto:!0,real:!0},{some:function(t){return o(this,t)}})},function(r,e,n){var o=n(2),i=n(7),a=n(46),u=n(122),c=n(168),f=n(169),s=n(163),p=n(118),l=s((function(r){var e,n=this,o=n.iterator;if(n.remaining--)return r.resolve(i(n.next,o)).then((function(r){return a(r).done?(n.done=!0,p(t,!0)):p(r.value,!1)})).then(null,(function(t){throw n.done=!0,t}));var u=p(t,!0);return n.done=!0,(e=o.return)!==t?r.resolve(i(e,o,t)).then((function(){return u})):u}));o({target:"AsyncIterator",proto:!0,real:!0},{take:function(t){return a(this),t=f(c(+t)),new l(u(this),{remaining:t})}})},function(r,e,n){var o=n(2),i=n(123).toArray;o({target:"AsyncIterator",proto:!0,real:!0},{toArray:function(){return i(this,t,[])}})},function(t,r,e){var n=e(2),o=e(185);"function"==typeof BigInt&&n({target:"BigInt",stat:!0,forced:!0},{range:function(t,r,e){return new o(t,r,e,"bigint",BigInt(0),BigInt(1))}})},function(r,e,n){var o=n(51),i=n(186),a=n(118),u=n(16),c=n(19),f=n(85),s=n(5),p="Incorrect Iterator.range arguments",l="NumericRangeIterator",h=o.set,v=o.getterFor(l),y=RangeError,d=TypeError,g=i((function(r,e,n,o,i,a){if(typeof r!=o||e!==1/0&&e!==-1/0&&typeof e!=o)throw d(p);if(r===1/0||r===-1/0)throw y(p);var f,v=r<e,g=!1;if(n===t)f=t;else if(c(n))f=n.step,g=!!n.inclusive;else{if(typeof n!=o)throw d(p);f=n}if(typeof(f=u(f)?v?a:-a:f)!=o)throw d(p);if(f===1/0||f===-1/0||f===i&&r!==e)throw y(p);h(this,{type:l,start:r,end:e,step:f,inclusive:g,hitsEnd:r!=r||e!=e||f!=f||r<e!=i<f,currentCount:i,zero:i}),s||(this.start=r,this.end=e,this.step=f,this.inclusive=g)}),l,(function(){var r=v(this);if(r.hitsEnd)return a(t,!0);var e=r.start,n=r.end,o=e+r.step*r.currentCount++;o===n&&(r.hitsEnd=!0);var i=r.inclusive;return(n=e<n?i?n<o:n<=o:i?o<n:o<=n)?(r.hitsEnd=!0,a(t,!0)):a(o,!1)}));i=function(t){f(g.prototype,t,{get:function(){return v(this)[t]},set:function(){},configurable:!0,enumerable:!1})};s&&(i("start"),i("end"),i("inclusive"),i("step")),r.exports=g},function(t,r,e){function n(){return this}var o=e(187).IteratorPrototype,i=e(74),a=e(10),u=e(188),c=e(121);t.exports=function(t,r,e,f){return r+=" Iterator",t.prototype=i(o,{next:a(+!f,e)}),u(t,r,!1,!0),c[r]=n,t}},function(t,r,e){var n,o=e(6),i=e(20),a=e(19),u=e(74),c=e(95),f=e(47),s=e(33),p=e(35),l=s("iterator");e=!1;[].keys&&("next"in(s=[].keys())?(s=c(c(s)))!==Object.prototype&&(n=s):e=!0),!a(n)||o((function(){var t={};return n[l].call(t)!==t}))?n={}:p&&(n=u(n)),i(n[l])||f(n,l,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:e}},function(t,r,e){var n=e(44).f,o=e(38),i=e(33)("toStringTag");t.exports=function(t,r,e){(t=t&&!e?t.prototype:t)&&!o(t,i)&&n(t,i,{configurable:!0,value:r})}},function(t,r,e){function n(){var t=u("Object","freeze");return t?t(c(null)):c(null)}var o=e(2),i=e(190),a=e(191),u=e(23),c=e(74),f=Object;o({global:!0,forced:!0},{compositeKey:function(){return i(a,f,arguments).get("object",n)}})},function(t,r,e){var n=e(8),o=(e=Function.prototype).apply,i=e.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?i.bind(o):function(){return i.apply(o,arguments)})},function(t,r,e){function n(){this.object=null,this.symbol=null,this.primitives=null,this.objectsByIndex=i(null)}e(192),e(209);var o=e(23),i=e(74),a=e(19),u=Object,c=TypeError,f=o("Map"),s=o("WeakMap");n.prototype.get=function(t,r){return this[t]||(this[t]=r())},n.prototype.next=function(t,r,e){return(t=(e=e?this.objectsByIndex[t]||(this.objectsByIndex[t]=new s):this.primitives||(this.primitives=new f)).get(r))||e.set(r,t=new n),t};var p=new n;t.exports=function(){for(var t,r=p,e=arguments.length,n=0;n<e;n++)a(t=arguments[n])&&(r=r.next(n,t,!0));if(this===u&&r===p)throw c("Composite keys must contain a non-primitive component");for(n=0;n<e;n++)a(t=arguments[n])||(r=r.next(n,t,!1));return r}},function(t,r,e){e(193)},function(r,e,n){n(194)("Map",(function(r){return function(){return r(this,arguments.length?arguments[0]:t)}}),n(206))},function(r,e,n){var o=n(2),i=n(3),a=n(13),u=n(67),c=n(47),f=n(195),s=n(202),p=n(157),l=n(20),h=n(16),v=n(19),y=n(6),d=n(204),g=n(188),b=n(205);r.exports=function(r,e,n){function m(r){var e=a(T[r]);c(T,r,"add"==r?function(t){return e(this,0===t?0:t),this}:"delete"==r?function(t){return!(R&&!v(t))&&e(this,0===t?0:t)}:"get"==r?function(r){return R&&!v(r)?t:e(this,0===r?0:r)}:"has"==r?function(t){return!(R&&!v(t))&&e(this,0===t?0:t)}:function(t,r){return e(this,0===t?0:t,r),this})}var x,w,S,A,E,O=-1!==r.indexOf("Map"),R=-1!==r.indexOf("Weak"),I=O?"set":"add",k=i[r],T=k&&k.prototype,M=k,j={};return u(r,!l(k)||!(R||T.forEach&&!y((function(){(new k).entries().next()}))))?(M=n.getConstructor(e,r,O,I),f.enable()):u(r,!0)&&(w=(x=new M)[I](R?{}:-0,1)!=x,S=y((function(){x.has(1)})),A=d((function(t){new k(t)})),E=!R&&y((function(){for(var t=new k,r=5;r--;)t[I](r,r);return!t.has(-0)})),A||(((M=e((function(t,r){return p(t,T),t=b(new k,t,M),h(r)||s(r,t[I],{that:t,AS_ENTRIES:O}),t}))).prototype=T).constructor=M),(S||E)&&(m("delete"),m("has"),O&&m("get")),(E||w)&&m(I),R&&T.clear&&delete T.clear),j[r]=M,o({global:!0,constructor:!0,forced:M!=k},j),g(M,r),R||n.setStrong(M,r,O),M}},function(t,r,e){function n(t){f(t,d,{value:{objectID:"O"+g++,weakData:{}}})}var o=e(2),i=e(13),a=e(54),u=e(19),c=e(38),f=e(44).f,s=e(57),p=e(196),l=e(199),h=e(40),v=e(201),y=!1,d=h("meta"),g=0,b=t.exports={enable:function(){b.enable=function(){},y=!0;var t=s.f,r=i([].splice),e={};e[d]=1,t(e).length&&(s.f=function(e){for(var n=t(e),o=0,i=n.length;o<i;o++)if(n[o]===d){r(n,o,1);break}return n},o({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:p.f}))},fastKey:function(t,r){if(!u(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!c(t,d)){if(!l(t))return"F";if(!r)return"E";n(t)}return t[d].objectID},getWeakData:function(t,r){if(!c(t,d)){if(!l(t))return!0;if(!r)return!1;n(t)}return t[d].weakData},onFreeze:function(t){return v&&y&&l(t)&&!c(t,d)&&n(t),t}};a[d]=!0},function(t,r,e){var n=e(14),o=e(11),i=e(57).f,a=e(197),u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"Window"==n(t)?function(t){try{return i(t)}catch(t){return a(u)}}(t):i(o(t))}},function(r,e,n){var o=n(60),i=n(63),a=n(198),u=Array,c=Math.max;r.exports=function(r,e,n){for(var f=i(r),s=o(e,f),p=o(n===t?f:n,f),l=u(c(p-s,0)),h=0;s<p;s++,h++)a(l,h,r[s]);return l.length=h,l}},function(t,r,e){var n=e(17),o=e(44),i=e(10);t.exports=function(t,r,e){(r=n(r))in t?o.f(t,r,i(0,e)):t[r]=e}},function(t,r,e){var n=e(6),o=e(19),i=e(14),a=e(200),u=Object.isExtensible;n=n((function(){u(1)}));t.exports=n||a?function(t){return!!o(t)&&(!a||"ArrayBuffer"!=i(t))&&(!u||u(t))}:u},function(t,r,e){e=e(6),t.exports=e((function(){var t;"function"==typeof ArrayBuffer&&(t=new ArrayBuffer(8),Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8}))}))},function(t,r,e){e=e(6),t.exports=!e((function(){return Object.isExtensible(Object.preventExtensions({}))}))},function(t,r,e){function n(t,r){this.stopped=t,this.result=r}var o=e(111),i=e(7),a=e(46),u=e(31),c=e(203),f=e(63),s=e(24),p=e(119),l=e(120),h=e(165),v=TypeError,y=n.prototype;t.exports=function(t,r,e){function d(t){return b&&h(b,"normal",t),new n(!0,t)}function g(t){return O?(a(t),k?T(t[0],t[1],d):T(t[0],t[1])):k?T(t,d):T(t)}var b,m,x,w,S,A,E=e&&e.that,O=!(!e||!e.AS_ENTRIES),R=!(!e||!e.IS_RECORD),I=!(!e||!e.IS_ITERATOR),k=!(!e||!e.INTERRUPTED),T=o(r,E);if(R)b=t.iterator;else if(I)b=t;else{if(!(I=l(t)))throw v(u(t)+" is not iterable");if(c(I)){for(m=0,x=f(t);m<x;m++)if((w=g(t[m]))&&s(y,w))return w;return new n(!1)}b=p(t,I)}for(S=(R?t:b).next;!(A=i(S,b)).done;){try{w=g(A.value)}catch(t){h(b,"throw",t)}if("object"==typeof w&&w&&s(y,w))return w}return new n(!1)}},function(r,e,n){var o=n(33),i=n(121),a=o("iterator"),u=Array.prototype;r.exports=function(r){return r!==t&&(i.Array===r||u[a]===r)}},function(t,r,e){var n=e(33)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var e=!1;try{var i={};i[n]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,r,e){var n=e(20),o=e(19),i=e(97);t.exports=function(t,r,e){var a,u;return i&&n(a=r.constructor)&&a!==e&&o(u=a.prototype)&&u!==e.prototype&&i(t,u),t}},function(r,e,n){var o=n(74),i=n(85),a=n(116),u=n(111),c=n(157),f=n(16),s=n(202),p=n(207),l=n(118),h=n(208),v=n(5),y=n(195).fastKey,d=(n=n(51)).set,g=n.getterFor;r.exports={getConstructor:function(r,e,n,p){function l(r,e,n){var o,i=b(r),a=m(r,e);return a?a.value=n:(i.last=a={index:o=y(e,!0),key:e,value:n,previous:n=i.last,next:t,removed:!1},i.first||(i.first=a),n&&(n.next=a),v?i.size++:r.size++,"F"!==o&&(i.index[o]=a)),r}r=r((function(r,i){c(r,h),d(r,{type:e,index:o(null),first:t,last:t,size:0}),v||(r.size=0),f(i)||s(i,r[p],{that:r,AS_ENTRIES:n})}));var h=r.prototype,b=g(e),m=function(t,r){var e,n=b(t);if("F"!==(t=y(r)))return n.index[t];for(e=n.first;e;e=e.next)if(e.key==r)return e};return a(h,{clear:function(){for(var r=b(this),e=r.index,n=r.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=t),delete e[n.index],n=n.next;r.first=r.last=t,v?r.size=0:this.size=0},delete:function(t){var r,e=b(this),n=m(this,t);return n&&(r=n.next,t=n.previous,delete e.index[n.index],n.removed=!0,t&&(t.next=r),r&&(r.previous=t),e.first==n&&(e.first=r),e.last==n&&(e.last=t),v?e.size--:this.size--),!!n},forEach:function(r){for(var e,n=b(this),o=u(r,1<arguments.length?arguments[1]:t);e=e?e.next:n.first;)for(o(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!m(this,t)}}),a(h,n?{get:function(t){return(t=m(this,t))&&t.value},set:function(t,r){return l(this,0===t?0:t,r)}}:{add:function(t){return l(this,t=0===t?0:t,t)}}),v&&i(h,"size",{configurable:!0,get:function(){return b(this).size}}),r},setStrong:function(r,e,n){var o=e+" Iterator",i=g(e),a=g(o);p(r,e,(function(r,e){d(this,{type:o,target:r,state:i(r),kind:e,last:t})}),(function(){for(var r=a(this),e=r.kind,n=r.last;n&&n.removed;)n=n.previous;return r.target&&(r.last=n=n?n.next:r.state.first)?l("keys"==e?n.key:"values"==e?n.value:[n.key,n.value],!1):(r.target=t,l(t,!0))}),n?"entries":"values",!n,!0),h(e)}}},function(t,r,e){function n(){return this}var o=e(2),i=e(7),a=e(35),u=e(49),c=e(20),f=e(186),s=e(95),p=e(97),l=e(188),h=e(43),v=e(47),y=e(33),d=e(121),g=(e=e(187),u.PROPER),b=u.CONFIGURABLE,m=e.IteratorPrototype,x=e.BUGGY_SAFARI_ITERATORS,w=y("iterator"),S="values",A="entries";t.exports=function(t,r,e,u,y,E,O){function R(t){if(t===y&&C)return C;if(!x&&t in P)return P[t];switch(t){case"keys":case S:case A:return function(){return new e(this,t)}}return function(){return new e(this)}}f(e,r,u);var I,k,T,M=r+" Iterator",j=!1,P=t.prototype,D=P[w]||P["@@iterator"]||y&&P[y],C=!x&&D||R(y);if((u="Array"==r&&P.entries||D)&&(I=s(u.call(new t)))!==Object.prototype&&I.next&&(a||s(I)===m||(p?p(I,m):c(I[w])||v(I,w,n)),l(I,M,!0,!0),a&&(d[M]=n)),g&&y==S&&D&&D.name!==S&&(!a&&b?h(P,"name",S):(j=!0,C=function(){return i(D,this)})),y)if(k={values:R(S),keys:E?C:R("keys"),entries:R(A)},O)for(T in k)!x&&!j&&T in P||v(P,T,k[T]);else o({target:r,proto:!0,forced:x||j},k);return a&&!O||P[w]===C||v(P,w,C,{name:y}),d[r]=C,k}},function(t,r,e){var n=e(23),o=e(85),i=e(33),a=e(5),u=i("species");t.exports=function(t){t=n(t),a&&t&&!t[u]&&o(t,u,{configurable:!0,get:function(){return this}})}},function(t,r,e){e(210)},function(r,e,n){var o,i,a,u,c=n(201),f=n(3),s=n(13),p=n(116),l=n(195),h=n(194),v=n(211),y=n(19),d=n(51).enforce,g=n(6),b=n(52),m=(n=Object,Array.isArray),x=n.isExtensible,w=n.isFrozen,S=n.isSealed,A=n.freeze,E=n.seal,O={},R={},I=(n=!f.ActiveXObject&&"ActiveXObject"in f,f=function(r){return function(){return r(this,arguments.length?arguments[0]:t)}},h("WeakMap",f,v)),k=s((h=I.prototype).set);b&&(n?(o=v.getConstructor(f,"WeakMap",!0),l.enable(),i=s(h.delete),a=s(h.has),u=s(h.get),p(h,{delete:function(t){if(!y(t)||x(t))return i(this,t);var r=d(this);return r.frozen||(r.frozen=new o),i(this,t)||r.frozen.delete(t)},has:function(t){if(!y(t)||x(t))return a(this,t);var r=d(this);return r.frozen||(r.frozen=new o),a(this,t)||r.frozen.has(t)},get:function(t){if(!y(t)||x(t))return u(this,t);var r=d(this);return r.frozen||(r.frozen=new o),a(this,t)?u(this,t):r.frozen.get(t)},set:function(t,r){var e;return y(t)&&!x(t)?((e=d(this)).frozen||(e.frozen=new o),a(this,t)?k(this,t,r):e.frozen.set(t,r)):k(this,t,r),this}})):c&&g((function(){var t=A([]);return k(new I,t,1),!w(t)}))&&p(h,{set:function(t,r){var e;return m(t)&&(w(t)?e=O:S(t)&&(e=R)),k(this,t,r),e==O&&A(t),e==R&&E(t),this}}))},function(r,e,n){function o(t){return t.frozen||(t.frozen=new S)}function i(t,r){return b(t.entries,(function(t){return t[0]===r}))}var a=n(13),u=n(116),c=n(195).getWeakData,f=n(157),s=n(46),p=n(16),l=n(19),h=n(202),v=n(126),y=n(38),d=(n=n(51)).set,g=n.getterFor,b=v.find,m=v.findIndex,x=a([].splice),w=0,S=function(){this.entries=[]};S.prototype={get:function(t){if(t=i(this,t))return t[1]},has:function(t){return!!i(this,t)},set:function(t,r){var e=i(this,t);e?e[1]=r:this.entries.push([t,r])},delete:function(t){var r=m(this.entries,(function(r){return r[0]===t}));return~r&&x(this.entries,r,1),!!~r}},r.exports={getConstructor:function(r,e,n,i){function a(t,r,e){var n=b(t),i=c(s(r),!0);return!0===i?o(n).set(r,e):i[n.id]=e,t}r=r((function(r,o){f(r,v),d(r,{type:e,id:w++,frozen:t}),p(o)||h(o,r[i],{that:r,AS_ENTRIES:n})}));var v=r.prototype,b=g(e);return u(v,{delete:function(t){var r=b(this);if(!l(t))return!1;var e=c(t);return!0===e?o(r).delete(t):e&&y(e,r.id)&&delete e[r.id]},has:function(t){var r=b(this);if(!l(t))return!1;var e=c(t);return!0===e?o(r).has(t):e&&y(e,r.id)}}),u(v,n?{get:function(r){var e=b(this);if(l(r)){var n=c(r);return!0===n?o(e).get(r):n?n[e.id]:t}},set:function(t,r){return a(this,t,r)}}:{add:function(t){return a(this,t,!0)}}),r}}},function(t,r,e){var n=e(2),o=e(191),i=e(23),a=e(190);n({global:!0,forced:!0},{compositeSymbol:function(){return 1==arguments.length&&"string"==typeof arguments[0]?i("Symbol").for(arguments[0]):a(o,null,arguments).get("symbol",i("Symbol"))}})},function(r,e,n){function o(t){if((t=w(t)).state==A)throw b(m+" already disposed");return t}function i(){x(s(this,E),{type:m,state:"pending",stack:[]}),u||(this.disposed=!1)}var a=n(2),u=n(5),c=n(23),f=n(30),s=n(157),p=n(47),l=n(116),h=n(85),v=n(33),y=n(51),d=n(158),g=c("SuppressedError"),b=ReferenceError,m=(c=v("dispose"),v=v("toStringTag"),"DisposableStack"),x=y.set,w=y.getterFor(m),S="sync-dispose",A="disposed",E=i.prototype;l(E,{dispose:function(){var t=w(this);if(t.state!=A){t.state=A,u||(this.disposed=!0);for(var r,e=t.stack,n=e.length,o=!1;n;){var i=e[--n];e[n]=null;try{i()}catch(t){r=o?new g(t,r):(o=!0,t)}}if(t.stack=null,o)throw r}},use:function(t){return d(o(this),t,S),t},adopt:function(r,e){var n=o(this);return f(e),d(n,t,S,(function(){e(r)})),r},defer:function(r){var e=o(this);f(r),d(e,t,S,r)},move:function(){var t=o(this),r=new i;return w(r).stack=t.stack,t.stack=[],t.state=A,u||(this.disposed=!0),r}}),u&&h(E,"disposed",{configurable:!0,get:function(){return w(this).state==A}}),p(E,c,E.dispose,{name:"dispose"}),p(E,v,m,{nonWritable:!0}),a({global:!0,constructor:!0},{DisposableStack:i})},function(t,r,e){e(2)({target:"Function",proto:!0,forced:!0},{demethodize:e(215)})},function(t,r,e){var n=e(13),o=e(30);t.exports=function(){return n(o(this))}},function(t,r,e){var n=e(2),o=e(13),i=e(20),a=e(50),u=e(38),c=e(5),f=Object.getOwnPropertyDescriptor,s=/^\s*class\b/,p=o(s.exec);n({target:"Function",stat:!0,sham:!0,forced:!0},{isCallable:function(t){return i(t)&&!function(t){try{if(!c||!p(s,a(t)))return!1}catch(t){}return!!(t=f(t,"prototype"))&&u(t,"writable")&&!t.writable}(t)}})},function(t,r,e){e(2)({target:"Function",stat:!0,forced:!0},{isConstructor:e(113)})},function(r,e,n){var o=n(33),i=n(44).f;n=o("metadata");(o=Function.prototype)[n]===t&&i(o,n,{value:null})},function(t,r,e){e(2)({target:"Function",proto:!0,forced:!0,name:"demethodize"},{unThis:e(215)})},function(t,r,e){var n=e(2),o=e(3),i=e(157),a=e(20),u=e(43),c=e(6),f=e(38),s=e(33),p=e(187).IteratorPrototype,l=(e=e(35),s=s("toStringTag"),o.Iterator);a=e||!a(l)||l.prototype!==p||!c((function(){l({})})),c=function(){i(this,p)};f(p,s)||u(p,s,"Iterator"),!a&&f(p,"constructor")&&p.constructor!==Object||u(p,"constructor",c),c.prototype=p,n({global:!0,constructor:!0,forced:a},{Iterator:c})},function(t,r,e){e(2)({target:"Iterator",name:"indexed",proto:!0,real:!0,forced:!0},{asIndexedPairs:e(222)})},function(t,r,e){function n(t,r){return[r,t]}var o=e(7),i=e(223);t.exports=function(){return o(i,this,n)}},function(t,r,e){var n=e(7),o=e(30),i=e(46),a=e(122),u=e(224),c=e(225),f=u((function(){var t=this.iterator,r=i(n(this.next,t));if(!(this.done=!!r.done))return c(t,this.mapper,[r.value,this.counter++],!0)}));t.exports=function(t){return i(this),o(t),new f(a(this),{mapper:t})}},function(r,e,n){var o=n(7),i=n(74),a=n(43),u=n(116),c=n(33),f=n(51),s=n(29),p=n(187).IteratorPrototype,l=n(118),h=n(165),v=(n=c("toStringTag"),"IteratorHelper"),y="WrapForValidIterator",d=f.set,g=(c=function(r){var e=f.getterFor(r?y:v);return u(i(p),{next:function(){var n=e(this);if(r)return n.nextHandler();try{var o=n.done?t:n.nextHandler();return l(o,n.done)}catch(o){throw n.done=!0,o}},return:function(){var n=e(this),i=n.iterator;if(n.done=!0,r){var a=s(i,"return");return a?o(a,i):l(t,!0)}if(n.inner)try{h(n.inner.iterator,"normal")}catch(n){return h(i,"throw",n)}return h(i,"normal"),l(t,!0)}})},c(!0)),b=c(!1);a(b,n,"Iterator Helper"),r.exports=function(t,r){function e(e,n){n?(n.iterator=e.iterator,n.next=e.next):n=e,n.type=r?y:v,n.nextHandler=t,n.counter=0,n.done=!1,d(this,n)}return e.prototype=r?g:b,e}},function(t,r,e){var n=e(46),o=e(165);t.exports=function(t,r,e,i){try{return i?r(n(e)[0],e[1]):r(e)}catch(r){o(t,"throw",r)}}},function(t,r,e){var n=e(7),o=e(47),i=e(29),a=e(38),u=e(33);a(e=e(187).IteratorPrototype,u=u("dispose"))||o(e,u,(function(){var t=i(this,"return");t&&n(t,this)}))},function(t,r,e){var n=e(2),o=e(7),i=e(46),a=e(122),u=e(168),c=e(169),f=e(224)((function(){for(var t,r=this.iterator,e=this.next;this.remaining;)if(this.remaining--,t=i(o(e,r)),this.done=!!t.done)return;if(t=i(o(e,r)),!(this.done=!!t.done))return t.value}));n({target:"Iterator",proto:!0,real:!0},{drop:function(t){return i(this),t=c(u(+t)),new f(a(this),{remaining:t})}})},function(t,r,e){var n=e(2),o=e(202),i=e(30),a=e(46),u=e(122);n({target:"Iterator",proto:!0,real:!0},{every:function(t){a(this),i(t);var r=u(this),e=0;return!o(r,(function(r,n){if(!t(r,e++))return n()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},function(t,r,e){var n=e(2),o=e(7),i=e(30),a=e(46),u=e(122),c=e(224),f=e(225),s=c((function(){for(var t,r=this.iterator,e=this.predicate,n=this.next;;){if(t=a(o(n,r)),this.done=!!t.done)return;if(t=t.value,f(r,e,[t,this.counter++],!0))return t}}));n({target:"Iterator",proto:!0,real:!0},{filter:function(t){return a(this),i(t),new s(u(this),{predicate:t})}})},function(t,r,e){var n=e(2),o=e(202),i=e(30),a=e(46),u=e(122);n({target:"Iterator",proto:!0,real:!0},{find:function(t){a(this),i(t);var r=u(this),e=0;return o(r,(function(r,n){if(t(r,e++))return n(r)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},function(t,r,e){var n=e(2),o=e(7),i=e(30),a=e(46),u=e(122),c=e(232),f=e(224),s=e(165),p=f((function(){for(var t,r,e=this.iterator,n=this.mapper;;){if(r=this.inner)try{if(!(t=a(o(r.next,r.iterator))).done)return t.value;this.inner=null}catch(t){s(e,"throw",t)}if(t=a(o(this.next,e)),this.done=!!t.done)return;try{this.inner=c(n(t.value,this.counter++))}catch(t){s(e,"throw",t)}}}));n({target:"Iterator",proto:!0,real:!0},{flatMap:function(t){return a(this),i(t),new p(u(this),{mapper:t,inner:null})}})},function(r,e,n){var o=n(7),i=n(46),a=n(122),u=n(120);r.exports=function(r){var e=i(r);r=u(e);return a(i(r!==t?o(r,e):e))}},function(t,r,e){var n=e(2),o=e(202),i=e(30),a=e(46),u=e(122);n({target:"Iterator",proto:!0,real:!0},{forEach:function(t){a(this),i(t);var r=u(this),e=0;o(r,(function(r){t(r,e++)}),{IS_RECORD:!0})}})},function(t,r,e){var n=e(2),o=e(7),i=e(39),a=e(24),u=e(187).IteratorPrototype,c=e(224),f=e(232),s=c((function(){return o(this.next,this.iterator)}),!0);n({target:"Iterator",stat:!0},{from:function(t){return t=f("string"==typeof t?i(t):t),a(u,t.iterator)?t.iterator:new s(t)}})},function(t,r,e){e(2)({target:"Iterator",proto:!0,real:!0,forced:!0},{indexed:e(222)})},function(t,r,e){e(2)({target:"Iterator",proto:!0,real:!0},{map:e(223)})},function(t,r,e){var n=e(2),o=e(185),i=TypeError;n({target:"Iterator",stat:!0,forced:!0},{range:function(t,r,e){if("number"==typeof t)return new o(t,r,e,"number",0,1);if("bigint"==typeof t)return new o(t,r,e,"bigint",BigInt(0),BigInt(1));throw i("Incorrect Iterator.range arguments")}})},function(r,e,n){var o=n(2),i=n(202),a=n(30),u=n(46),c=n(122),f=TypeError;o({target:"Iterator",proto:!0,real:!0},{reduce:function(r){u(this),a(r);var e=c(this),n=arguments.length<2,o=n?t:arguments[1],s=0;if(i(e,(function(t){o=n?(n=!1,t):r(o,t,s),s++}),{IS_RECORD:!0}),n)throw f("Reduce of empty iterator with no initial value");return o}})},function(t,r,e){var n=e(2),o=e(202),i=e(30),a=e(46),u=e(122);n({target:"Iterator",proto:!0,real:!0},{some:function(t){a(this),i(t);var r=u(this),e=0;return o(r,(function(r,n){if(t(r,e++))return n()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},function(r,e,n){var o=n(2),i=n(7),a=n(46),u=n(122),c=n(168),f=n(169),s=n(224),p=n(165),l=s((function(){var r=this.iterator;return this.remaining--?(r=a(i(this.next,r)),(this.done=!!r.done)?void 0:r.value):(this.done=!0,p(r,"normal",t))}));o({target:"Iterator",proto:!0,real:!0},{take:function(t){return a(this),t=f(c(+t)),new l(u(this),{remaining:t})}})},function(t,r,e){var n=e(2),o=e(46),i=e(202),a=e(122),u=[].push;n({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return i(a(o(this)),u,{that:t,IS_RECORD:!0}),t}})},function(t,r,e){var n=e(2),o=e(46),i=e(115),a=e(177),u=e(122);n({target:"Iterator",proto:!0,real:!0},{toAsync:function(){return new a(u(new i(u(o(this)))))}})},function(t,r,e){e(2)({target:"JSON",stat:!0,forced:!e(244)},{isRawJSON:e(245)})},function(t,r,e){e=e(6),t.exports=!e((function(){var t="9007199254740993",r=JSON.rawJSON(t);return!JSON.isRawJSON(r)||JSON.stringify(r)!==t}))},function(t,r,e){var n=e(19),o=e(51).get;t.exports=function(t){return!!n(t)&&(!!(t=o(t))&&"RawJSON"===t.type)}},function(r,e,n){function o(t,r,e,n){this.value=t,this.end=r,this.source=e,this.nodes=n}var i=n(2),a=n(5),u=n(3),c=n(23),f=n(13),s=n(7),p=n(20),l=n(19),h=n(69),v=n(38),y=n(88),d=n(63),g=n(198),b=n(6),m=n(247),x=n(26),w=(n=u.JSON,u.Number),S=u.SyntaxError,A=n&&n.parse,E=c("Object","keys"),O=Object.getOwnPropertyDescriptor,R=f("".charAt),I=f("".slice),k=f(/./.exec),T=f([].push),M=/^\d$/,j=/^[1-9]$/,P=/^(-|\d)$/,D=/^[\t\n\r ]$/,C=function(r,e,n,o){var i,a,u,c,f,p=r[e],y=o&&p===o.value,g=y&&"string"==typeof o.source?{source:o.source}:{};if(l(p)){var b=h(p),m=y?o.nodes:b?[]:{};if(b)for(i=m.length,u=d(p),c=0;c<u;c++)_(p,c,C(p,""+c,n,c<i?m[c]:t));else for(a=E(p),u=d(a),c=0;c<u;c++)f=a[c],_(p,f,C(p,f,n,v(m,f)?m[f]:t))}return s(n,r,e,p,g)},_=function(r,e,n){if(a){var o=O(r,e);if(o&&!o.configurable)return}n===t?delete r[e]:g(r,e,n)},N=function(t,r){this.source=t,this.index=r};N.prototype={fork:function(t){return new N(this.source,t)},parse:function(){var t=this.source,r=this.skip(D,this.index),e=this.fork(r);t=R(t,r);if(k(P,t))return e.number();switch(t){case"{":return e.object();case"[":return e.array();case'"':return e.string();case"t":return e.keyword(!0);case"f":return e.keyword(!1);case"n":return e.keyword(null)}throw S('Unexpected character: "'+t+'" at: '+r)},node:function(t,r,e,n,i){return new o(r,n,t?null:I(this.source,e,n),i)},object:function(){for(var t=this.source,r=this.index+1,e=!1,n={},o={};r<t.length;){if(r=this.until(['"',"}"],r),"}"==R(t,r)&&!e){r++;break}var i=this.fork(r).string(),a=i.value;r=i.end;if(r=this.until([":"],r)+1,r=this.skip(D,r),i=this.fork(r).parse(),g(o,a,i),g(n,a,i.value),r=this.until([",","}"],i.end),","==(i=R(t,r)))e=!0,r++;else if("}"==i){r++;break}}return this.node(1,n,this.index,r,o)},array:function(){for(var t=this.source,r=this.index+1,e=!1,n=[],o=[];r<t.length;){if(r=this.skip(D,r),"]"==R(t,r)&&!e){r++;break}var i=this.fork(r).parse();if(T(o,i),T(n,i.value),r=this.until([",","]"],i.end),","==R(t,r))e=!0,r++;else if("]"==R(t,r)){r++;break}}return this.node(1,n,this.index,r,o)},string:function(){var t=this.index,r=m(this.source,this.index+1);return this.node(0,r.value,t,r.end)},number:function(){var t=this.source,r=this.index,e=r;if("-"==R(t,e)&&e++,"0"==R(t,e))e++;else{if(!k(j,R(t,e)))throw S("Failed to parse number at: "+e);e=this.skip(M,++e)}if(!("."==R(t,e)&&(e=this.skip(M,++e)),"e"!=R(t,e)&&"E"!=R(t,e)||("+"!=R(t,++e)&&"-"!=R(t,e)||e++,e!=(e=this.skip(M,e)))))throw S("Failed to parse number's exponent value at: "+e);return this.node(0,w(I(t,r,e)),r,e)},keyword:function(t){var r=""+t,e=this.index,n=e+r.length;if(I(this.source,e,n)!=r)throw S("Failed to parse value at: "+e);return this.node(0,t,e,n)},skip:function(t,r){for(var e=this.source;r<e.length&&k(t,R(e,r));r++);return r},until:function(t,r){r=this.skip(D,r);for(var e=R(this.source,r),n=0;n<t.length;n++)if(t[n]==e)return r;throw S('Unexpected character: "'+e+'" at: '+r)}};f=b((function(){var t,r="9007199254740993";return A(r,(function(r,e,n){t=n.source})),t!==r}));var F=x&&!b((function(){return 1/A("-0 \t")!=-1/0}));i({target:"JSON",stat:!0,forced:f},{parse:function(t,r){return F&&!p(r)?A(t):function(t,r){t=y(t);var e,n=(e=new N(t,0,"")).parse(),o=n.value;if((e=e.skip(D,n.end))<t.length)throw S('Unexpected extra character: "'+R(t,e)+'" after the parsed data at: '+e);return p(r)?C({"":o},"",r,n):o}(t,r)}})},function(t,r,e){var n=e(13),o=e(38),i=SyntaxError,a=parseInt,u=String.fromCharCode,c=n("".charAt),f=n("".slice),s=n(/./.exec),p={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":"\n","\\r":"\r","\\t":"\t"},l=/^[\da-f]{4}$/i,h=/^[\u0000-\u001F]$/;t.exports=function(t,r){for(var e=!0,n="";r<t.length;){var v=c(t,r);if("\\"==v){var y=f(t,r,r+2);if(o(p,y))n+=p[y],r+=2;else{if("\\u"!=y)throw i('Unknown escape sequence: "'+y+'"');if(y=f(t,r+=2,r+4),!s(l,y))throw i("Bad Unicode escape at: "+r);n+=u(a(y,16)),r+=4}}else{if('"'==v){e=!1,r++;break}if(s(h,v))throw i("Bad control character in string literal at: "+r);n+=v,r++}}if(e)throw i("Unterminated string at: "+r);return{value:n,end:r}}},function(t,r,e){var n=e(2),o=e(201),i=e(244),a=e(23),u=e(7),c=e(13),f=e(20),s=e(245),p=e(88),l=e(198),h=e(247),v=e(249),y=e(40),d=e(51).set,g=String,b=SyntaxError,m=a("JSON","parse"),x=a("JSON","stringify"),w=a("Object","create"),S=a("Object","freeze"),A=c("".charAt),E=c("".slice),O=c(/./.exec),R=c([].push),I=y(),k=I.length,T="Unacceptable as raw JSON",M=/^[\t\n\r ]$/;n({target:"JSON",stat:!0,forced:!i},{rawJSON:function(t){var r=p(t);if(""==r||O(M,A(r,0))||O(M,A(r,r.length-1)))throw b(T);if("object"==typeof(t=m(r))&&null!==t)throw b(T);return t=w(null),d(t,{type:"RawJSON"}),l(t,"rawJSON",r),o?S(t):t}}),x&&n({target:"JSON",stat:!0,arity:3,forced:!i},{stringify:function(t,r,e){var n=v(r),o=[],i=x(t,(function(t,r){return r=f(n)?u(n,this,g(t),r):r,s(r)?I+(R(o,r.rawJSON)-1):r}),e);if("string"!=typeof i)return i;for(var a="",c=i.length,p=0;p<c;p++){var l,y,d=A(i,p);'"'==d?(l=h(i,++p).end-1,y=E(i,p,l),a+=E(y,0,k)==I?o[E(y,k)]:'"'+y+'"',p=l):a+=d}return a}})},function(t,r,e){var n=e(13),o=e(69),i=e(20),a=e(14),u=e(88),c=n([].push);t.exports=function(t){if(i(t))return t;if(o(t)){for(var r=t.length,e=[],n=0;n<r;n++){var f=t[n];"string"==typeof f?c(e,f):"number"!=typeof f&&"Number"!=a(f)&&"String"!=a(f)||c(e,u(f))}var s=e.length,p=!0;return function(t,r){if(p)return p=!1,r;if(o(this))return r;for(var n=0;n<s;n++)if(e[n]===t)return r}}}},function(t,r,e){var n=e(2),o=e(251),i=e(136).remove;n({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,r=o(this),e=!0,n=0,a=arguments.length;n<a;n++)t=i(r,arguments[n]),e=e&&t;return!!e}})},function(t,r,e){var n=e(136).has;t.exports=function(t){return n(t),t}},function(t,r,e){var n=e(2),o=e(251),i=(e=e(136)).get,a=e.has,u=e.set;n({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(t,r){var e,n=o(this);return a(n,t)?(e=i(n,t),"update"in r&&(e=r.update(e,t,n),u(n,t,e)),e):(r=r.insert(t,n),u(n,t,r),r)}})},function(r,e,n){var o=n(2),i=n(111),a=n(251),u=n(143);o({target:"Map",proto:!0,real:!0,forced:!0},{every:function(r){var e=a(this),n=i(r,1<arguments.length?arguments[1]:t);return!1!==u(e,(function(t,r){if(!n(t,r,e))return!1}),!0)}})},function(r,e,n){var o=n(2),i=n(111),a=n(251),u=n(136),c=n(143),f=u.Map,s=u.set;o({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(r){var e=a(this),n=i(r,1<arguments.length?arguments[1]:t),o=new f;return c(e,(function(t,r){n(t,r,e)&&s(o,r,t)})),o}})},function(r,e,n){var o=n(2),i=n(111),a=n(251),u=n(143);o({target:"Map",proto:!0,real:!0,forced:!0},{find:function(r){var e=a(this),n=i(r,1<arguments.length?arguments[1]:t);r=u(e,(function(t,r){if(n(t,r,e))return{value:t}}),!0);return r&&r.value}})},function(r,e,n){var o=n(2),i=n(111),a=n(251),u=n(143);o({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(r){var e=a(this),n=i(r,1<arguments.length?arguments[1]:t);r=u(e,(function(t,r){if(n(t,r,e))return{key:r}}),!0);return r&&r.key}})},function(t,r,e){e(2)({target:"Map",stat:!0,forced:!0},{from:e(258)})},function(r,e,n){var o=n(111),i=n(7),a=n(30),u=n(259),c=n(16),f=n(202),s=[].push;r.exports=function(r){var e,n,p,l,h=arguments.length,v=1<h?arguments[1]:t;return u(this),(e=v!==t)&&a(v),c(r)?new this:(n=[],e?(p=0,l=o(v,2<h?arguments[2]:t),f(r,(function(t){i(s,n,l(t,p++))}))):f(r,s,{that:n}),new this(n))}},function(t,r,e){var n=e(113),o=e(31),i=TypeError;t.exports=function(t){if(n(t))return t;throw i(o(t)+" is not a constructor")}},function(t,r,e){var n=e(2),o=e(13),i=e(30),a=e(15),u=e(202),c=(e=e(136)).Map,f=e.has,s=e.get,p=e.set,l=o([].push);n({target:"Map",stat:!0,forced:!0},{groupBy:function(t,r){a(t),i(r);var e=new c,n=0;return u(t,(function(t){var o=r(t,n++);f(e,o)?l(s(e,o),t):p(e,o,[t])})),e}})},function(t,r,e){var n=e(2),o=e(262),i=e(251),a=e(143);n({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(t){return!0===a(i(this),(function(r){if(o(r,t))return!0}),!0)}})},function(t,r){t.exports=function(t,r){return t===r||t!=t&&r!=r}},function(t,r,e){var n=e(2),o=e(7),i=e(202),a=e(20),u=e(30),c=e(136).Map;n({target:"Map",stat:!0,forced:!0},{keyBy:function(t,r){var e=new(a(this)?this:c);u(r);var n=u(e.set);return i(t,(function(t){o(n,e,r(t),t)})),e}})},function(t,r,e){var n=e(2),o=e(251),i=e(143);n({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(t){var r=i(o(this),(function(r,e){if(r===t)return{key:e}}),!0);return r&&r.key}})},function(r,e,n){var o=n(2),i=n(111),a=n(251),u=n(136),c=n(143),f=u.Map,s=u.set;o({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(r){var e=a(this),n=i(r,1<arguments.length?arguments[1]:t),o=new f;return c(e,(function(t,r){s(o,n(t,r,e),t)})),o}})},function(r,e,n){var o=n(2),i=n(111),a=n(251),u=n(136),c=n(143),f=u.Map,s=u.set;o({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(r){var e=a(this),n=i(r,1<arguments.length?arguments[1]:t),o=new f;return c(e,(function(t,r){s(o,r,n(t,r,e))})),o}})},function(t,r,e){var n=e(2),o=e(251),i=e(202),a=e(136).set;n({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(t){for(var r=o(this),e=arguments.length,n=0;n<e;)i(arguments[n++],(function(t,e){a(r,t,e)}),{AS_ENTRIES:!0});return r}})},function(t,r,e){e(2)({target:"Map",stat:!0,forced:!0},{of:e(269)})},function(t,r,e){var n=e(270);t.exports=function(){return new this(n(arguments))}},function(t,r,e){e=e(13),t.exports=e([].slice)},function(r,e,n){var o=n(2),i=n(30),a=n(251),u=n(143),c=TypeError;o({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(r){var e=a(this),n=arguments.length<2,o=n?t:arguments[1];if(i(r),u(e,(function(t,i){o=n?(n=!1,t):r(o,t,i,e)})),n)throw c("Reduce of empty map with no initial value");return o}})},function(r,e,n){var o=n(2),i=n(111),a=n(251),u=n(143);o({target:"Map",proto:!0,real:!0,forced:!0},{some:function(r){var e=a(this),n=i(r,1<arguments.length?arguments[1]:t);return!0===u(e,(function(t,r){if(n(t,r,e))return!0}),!0)}})},function(r,e,n){var o=n(2),i=n(30),a=n(251),u=(n=n(136),TypeError),c=n.get,f=n.has,s=n.set;o({target:"Map",proto:!0,real:!0,forced:!0},{update:function(r,e){var n=a(this),o=arguments.length;i(e);var p=f(n,r);if(!p&&o<3)throw u("Updating absent value");return o=p?c(n,r):i(2<o?arguments[2]:t)(r,n),s(n,r,e(o,r,n)),n}})},function(t,r,e){e(2)({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:e(275)})},function(r,e,n){var o=n(7),i=n(30),a=n(20),u=n(46),c=TypeError;r.exports=function(r,e){var n,f=u(this),s=i(f.get),p=i(f.has),l=i(f.set),h=2<arguments.length?arguments[2]:t;if(!a(e)&&!a(h))throw c("At least one callback required");return o(p,f,r)?(n=o(s,f,r),a(e)&&(n=e(n),o(l,f,r,n))):a(h)&&(n=h(),o(l,f,r,n)),n}},function(t,r,e){e(2)({target:"Map",proto:!0,real:!0,forced:!0},{upsert:e(275)})},function(t,r,e){e=e(2);var n=Math.min,o=Math.max;e({target:"Math",stat:!0,forced:!0},{clamp:function(t,r,e){return n(e,o(r,t))}})},function(t,r,e){e(2)({target:"Math",stat:!0,nonConfigurable:!0,nonWritable:!0},{DEG_PER_RAD:Math.PI/180})},function(t,r,e){e=e(2);var n=180/Math.PI;e({target:"Math",stat:!0,forced:!0},{degrees:function(t){return t*n}})},function(t,r,e){var n=e(2),o=e(281),i=e(282);n({target:"Math",stat:!0,forced:!0},{fscale:function(t,r,e,n,a){return i(o(t,r,e,n,a))}})},function(t,r){t.exports=Math.scale||function(t,r,e,n,o){return r=+r,e=+e,n=+n,o=+o,(t=+t)!=t||r!=r||e!=e||n!=n||o!=o?NaN:t==1/0||t==-1/0?t:(t-r)*(o-n)/(e-r)+n}},function(t,r,e){var n=e(283),o=Math.abs,i=(e=Math.pow)(2,-52),a=e(2,-23),u=e(2,127)*(2-a),c=e(2,-126);t.exports=Math.fround||function(t){var r=+t,e=o(r);t=n(r);return e<c?t*(e/c/a+1/i-1/i)*c*a:u<(e=(r=(1+a/i)*e)-(r-e))||e!=e?t*(1/0):t*e}},function(t,r){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,r,e){e(2)({target:"Math",stat:!0,forced:!0},{iaddh:function(t,r,e,n){return(r>>>0)+(n>>>0)+(((t>>>=0)&(e>>>=0)|(t|e)&~(t+e>>>0))>>>31)|0}})},function(t,r,e){e(2)({target:"Math",stat:!0,forced:!0},{imulh:function(t,r){var e,n;t=65535&(e=+t),r=65535&(n=+r);return(e=e>>16)*(n=n>>16)+((r=(e*r>>>0)+(t*r>>>16))>>16)+((t*n>>>0)+(65535&r)>>16)}})},function(t,r,e){e(2)({target:"Math",stat:!0,forced:!0},{isubh:function(t,r,e,n){return(r>>>0)-(n>>>0)-((~(t>>>=0)&(e>>>=0)|~(t^e)&t-e>>>0)>>>31)|0}})},function(t,r,e){e(2)({target:"Math",stat:!0,nonConfigurable:!0,nonWritable:!0},{RAD_PER_DEG:180/Math.PI})},function(t,r,e){e=e(2);var n=Math.PI/180;e({target:"Math",stat:!0,forced:!0},{radians:function(t){return t*n}})},function(t,r,e){e(2)({target:"Math",stat:!0,forced:!0},{scale:e(281)})},function(t,r,e){var n=e(2),o=e(46),i=e(291),a=e(186),u=e(118),c=e(51),f=(e="Seeded Random")+" Generator",s=c.set,p=c.getterFor(f),l=TypeError,h=a((function(t){s(this,{type:f,seed:t%2147483647})}),e,(function(){var t=(t=p(this)).seed=(1103515245*t.seed+12345)%2147483647;return u((1073741823&t)/1073741823,!1)}));n({target:"Math",stat:!0,forced:!0},{seededPRNG:function(t){if(t=o(t).seed,!i(t))throw l('Math.seededPRNG() argument should have a "seed" field with a finite value.');return new h(t)}})},function(t,r,e){var n=e(3).isFinite;t.exports=Number.isFinite||function(t){return"number"==typeof t&&n(t)}},function(t,r,e){e(2)({target:"Math",stat:!0,forced:!0},{signbit:function(t){return(t=+t)==t&&0==t?1/t==-1/0:t<0}})},function(t,r,e){e(2)({target:"Math",stat:!0,forced:!0},{umulh:function(t,r){var e,n;t=65535&(e=+t),r=65535&(n=+r);return(e=e>>>16)*(n=n>>>16)+((r=(e*r>>>0)+(t*r>>>16))>>>16)+((t*n>>>0)+(65535&r)>>>16)}})},function(r,e,n){var o=n(2),i=n(13),a=n(61),u=n(295),c="Invalid number representation",f=RangeError,s=SyntaxError,p=TypeError,l=/^[\da-z]+$/,h=i("".charAt),v=i(l.exec),y=i(1..toString),d=i("".slice);o({target:"Number",stat:!0,forced:!0},{fromString:function(r,e){var n,o=1;if("string"!=typeof r)throw p(c);if(!r.length)throw s(c);if("-"==h(r,0)&&(o=-1,!(r=d(r,1)).length))throw s(c);if((e=e===t?10:a(e))<2||36<e)throw f("Invalid radix");if(!v(l,r)||y(n=u(r,e),e)!==r)throw s(c);return o*n}})},function(t,r,e){var n=e(3),o=e(6),i=e(13),a=e(88),u=e(296).trim,c=(e=e(297),n.parseInt),f=(n=n.Symbol)&&n.iterator,s=/^[+-]?0x/i,p=i(s.exec);o=8!==c(e+"08")||22!==c(e+"0x16")||f&&!o((function(){c(Object(f))}));t.exports=o?function(t,r){return t=u(a(t)),c(t,r>>>0||(p(s,t)?16:10))}:c},function(t,r,e){var n=e(13),o=e(15),i=e(88),a=(e=e(297),n("".replace)),u=RegExp("^["+e+"]+"),c=RegExp("(^|[^"+e+"])["+e+"]+$");e=function(t){return function(r){return r=i(o(r)),1&t&&(r=a(r,u,"")),2&t?a(r,c,"$1"):r}};t.exports={start:e(1),end:e(2),trim:e(3)}},function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,r,e){var n=e(2),o=e(185);n({target:"Number",stat:!0,forced:!0},{range:function(t,r,e){return new o(t,r,e,"number",0,1)}})},function(t,r,e){var n=e(2),o=e(300);n({target:"Object",stat:!0,forced:!0},{iterateEntries:function(t){return new o(t,"entries")}})},function(r,e,n){var o=n(51),i=n(186),a=n(118),u=n(38),c=n(76),f=n(39),s="Object Iterator",p=o.set,l=o.getterFor(s);r.exports=i((function(t,r){t=f(t),p(this,{type:s,mode:r,object:t,keys:c(t),index:0})}),"Object",(function(){for(var r=l(this),e=r.keys;;){if(null===e||r.index>=e.length)return r.object=r.keys=null,a(t,!0);var n=e[r.index++],o=r.object;if(u(o,n)){switch(r.mode){case"keys":return a(n,!1);case"values":return a(o[n],!1)}return a([n,o[n]],!1)}}}))},function(t,r,e){var n=e(2),o=e(300);n({target:"Object",stat:!0,forced:!0},{iterateKeys:function(t){return new o(t,"keys")}})},function(t,r,e){var n=e(2),o=e(300);n({target:"Object",stat:!0,forced:!0},{iterateValues:function(t){return new o(t,"values")}})},function(t,r,e){var n=e(2),o=e(23),i=e(13),a=e(30),u=e(15),c=e(17),f=e(202),s=o("Object","create"),p=i([].push);n({target:"Object",stat:!0,forced:!0},{groupBy:function(t,r){u(t),a(r);var e=s(null),n=0;return f(t,(function(t){var o=c(r(t,n++));o in e?p(e[o],t):e[o]=[t]})),e}})},function(t,r,e){e(305),e(308),e(309)},function(r,e,n){function o(r){this.observer=s(r),this.cleanup=t,this.subscriptionObserver=t}var i=n(2),a=n(7),u=n(5),c=n(208),f=n(30),s=n(46),p=n(157),l=n(20),h=n(16),v=n(19),y=n(29),d=n(47),g=n(116),b=n(85),m=n(306),x=n(33),w=n(51),S=n(307),A=x("observable"),E="Observable",O=(n="Subscription","SubscriptionObserver"),R=(x=w.getterFor,w.set),I=x(E),k=x(n),T=x(O);function M(t,r){var e,n=R(this,new o(t));u||(this.closed=!1);try{(e=y(t,"start"))&&a(e,t,this)}catch(r){m(r)}if(!n.isClosed()){t=n.subscriptionObserver=new j(n);try{var i=r(t),c=i;h(i)||(n.cleanup=l(i.unsubscribe)?function(){c.unsubscribe()}:f(i))}catch(r){return void t.error(r)}n.isClosed()&&n.clean()}}o.prototype={type:n,clean:function(){var r=this.cleanup;if(r){this.cleanup=t;try{r()}catch(r){m(r)}}},close:function(){var r,e;u||(r=this.facade,e=this.subscriptionObserver,r.closed=!0,e&&(e.closed=!0)),this.observer=t},isClosed:function(){return this.observer===t}},M.prototype=g({},{unsubscribe:function(){var t=k(this);t.isClosed()||(t.close(),t.clean())}}),u&&b(M.prototype,"closed",{configurable:!0,get:function(){return k(this).isClosed()}});var j=function(t){R(this,{type:O,subscriptionState:t}),u||(this.closed=!1)};j.prototype=g({},{next:function(t){var r=T(this).subscriptionState;if(!r.isClosed()){r=r.observer;try{var e=y(r,"next");e&&a(e,r,t)}catch(t){m(t)}}},error:function(t){var r=T(this).subscriptionState;if(!r.isClosed()){var e=r.observer;r.close();try{var n=y(e,"error");n?a(n,e,t):m(t)}catch(t){m(t)}r.clean()}},complete:function(){var t=T(this).subscriptionState;if(!t.isClosed()){var r=t.observer;t.close();try{var e=y(r,"complete");e&&a(e,r)}catch(t){m(t)}t.clean()}}}),u&&b(j.prototype,"closed",{configurable:!0,get:function(){return T(this).subscriptionState.isClosed()}});b=function(t){p(this,P),R(this,{type:E,subscriber:f(t)})};var P=b.prototype;g(P,{subscribe:function(r){var e=arguments.length;return new M(l(r)?{next:r,error:1<e?arguments[1]:t,complete:2<e?arguments[2]:t}:v(r)?r:{},I(this).subscriber)}}),d(P,A,(function(){return this})),i({global:!0,constructor:!0,forced:S},{Observable:b}),c(E)},function(t,r){t.exports=function(t,r){try{1==arguments.length?console.error(t):console.error(t,r)}catch(t){}}},function(t,r,e){var n=e(3),o=e(20),i=e(33)("observable");n=(e=n.Observable)&&e.prototype;t.exports=!(o(e)&&o(e.from)&&o(e.of)&&o(n.subscribe)&&o(n[i]))},function(t,r,e){var n=e(2),o=e(23),i=e(7),a=e(46),u=e(113),c=e(119),f=e(29),s=e(202),p=e(33),l=(e=e(307),p("observable"));n({target:"Observable",stat:!0,forced:e},{from:function(t){var r=u(this)?this:o("Observable"),e=f(a(t),l);if(e){var n=a(i(e,t));return n.constructor===r?n:new r((function(t){return n.subscribe(t)}))}var p=c(t);return new r((function(t){s(p,(function(r,e){if(t.next(r),t.closed)return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}),t.complete()}))}})},function(t,r,e){var n=e(2),o=e(23),i=e(113),a=(e=e(307),o("Array"));n({target:"Observable",stat:!0,forced:e},{of:function(){for(var t=i(this)?this:o("Observable"),r=arguments.length,e=a(r),n=0;n<r;)e[n]=arguments[n++];return new t((function(t){for(var n=0;n<r;n++)if(t.next(e[n]),t.closed)return;t.complete()}))}})},function(t,r,e){var n=e(2),o=e(311),i=e(164);n({target:"Promise",stat:!0,forced:!0},{try:function(t){var r=o.f(this);return((t=i(t)).error?r.reject:r.resolve)(t.value),r.promise}})},function(r,e,n){function o(r){var e,n;this.promise=new r((function(r,o){if(e!==t||n!==t)throw a("Bad Promise constructor");e=r,n=o})),this.resolve=i(e),this.reject=i(n)}var i=n(30),a=TypeError;r.exports.f=function(t){return new o(t)}},function(t,r,e){var n=e(2),o=e(311);n({target:"Promise",stat:!0,forced:!0},{withResolvers:function(){var t=o.f(this);return{promise:t.promise,resolve:t.resolve,reject:t.reject}}})},function(r,e,n){var o=n(2),i=n(314),a=n(46),u=i.toKey,c=i.set;o({target:"Reflect",stat:!0},{defineMetadata:function(r,e,n){var o=arguments.length<4?t:u(arguments[3]);c(r,e,a(n),o)}})},function(r,e,n){function o(t,r,e){var n=f.get(t);if(!n){if(!e)return;f.set(t,n=new u)}if(!(t=n.get(r))){if(!e)return;n.set(r,t=new u)}return t}n(192),n(209);var i=n(23),a=n(13),u=(n=n(34),i("Map")),c=(i=i("WeakMap"),a([].push)),f=(n=n("metadata")).store||(n.store=new i);r.exports={store:f,getMap:o,has:function(r,e,n){return(n=o(e,n,!1))!==t&&n.has(r)},get:function(r,e,n){return(n=o(e,n,!1))===t?t:n.get(r)},set:function(t,r,e,n){o(e,n,!0).set(t,r)},keys:function(t,r){r=o(t,r,!1);var e=[];return r&&r.forEach((function(t,r){c(e,r)})),e},toKey:function(r){return r===t||"symbol"==typeof r?r:String(r)}}},function(r,e,n){var o=n(2),i=n(314),a=n(46),u=i.toKey,c=i.getMap,f=i.store;o({target:"Reflect",stat:!0},{deleteMetadata:function(r,e){var n=arguments.length<3?t:u(arguments[2]),o=c(a(e),n,!1);return!(o===t||!o.delete(r))&&(!!o.size||((o=f.get(e)).delete(n),!!o.size||f.delete(e)))}})},function(r,e,n){var o=n(2),i=n(314),a=n(46),u=n(95),c=i.has,f=i.get,s=i.toKey,p=function(r,e,n){return c(r,e,n)?f(r,e,n):null!==(e=u(e))?p(r,e,n):t};o({target:"Reflect",stat:!0},{getMetadata:function(r,e){var n=arguments.length<3?t:s(arguments[2]);return p(r,a(e),n)}})},function(r,e,n){var o=n(2),i=n(13),a=n(314),u=n(46),c=n(95),f=i(n(142)),s=i([].concat),p=a.keys,l=a.toKey,h=function(t,r){var e=p(t,r);return null===(t=c(t))?e:(r=h(t,r)).length?e.length?f(s(e,r)):r:e};o({target:"Reflect",stat:!0},{getMetadataKeys:function(r){var e=arguments.length<2?t:l(arguments[1]);return h(u(r),e)}})},function(r,e,n){var o=n(2),i=n(314),a=n(46),u=i.get,c=i.toKey;o({target:"Reflect",stat:!0},{getOwnMetadata:function(r,e){var n=arguments.length<3?t:c(arguments[2]);return u(r,a(e),n)}})},function(r,e,n){var o=n(2),i=n(314),a=n(46),u=i.keys,c=i.toKey;o({target:"Reflect",stat:!0},{getOwnMetadataKeys:function(r){var e=arguments.length<2?t:c(arguments[1]);return u(a(r),e)}})},function(r,e,n){var o=n(2),i=n(314),a=n(46),u=n(95),c=i.has,f=i.toKey,s=function(t,r,e){return!!c(t,r,e)||null!==(r=u(r))&&s(t,r,e)};o({target:"Reflect",stat:!0},{hasMetadata:function(r,e){var n=arguments.length<3?t:f(arguments[2]);return s(r,a(e),n)}})},function(r,e,n){var o=n(2),i=n(314),a=n(46),u=i.has,c=i.toKey;o({target:"Reflect",stat:!0},{hasOwnMetadata:function(r,e){var n=arguments.length<3?t:c(arguments[2]);return u(r,a(e),n)}})},function(t,r,e){var n=e(2),o=e(314),i=e(46),a=o.toKey,u=o.set;n({target:"Reflect",stat:!0},{metadata:function(t,r){return function(e,n){u(t,r,i(e),a(n))}}})},function(t,r,e){var n=e(2),o=e(324),i=e(325).add;n({target:"Set",proto:!0,real:!0,forced:!0},{addAll:function(){for(var t=o(this),r=0,e=arguments.length;r<e;r++)i(t,arguments[r]);return t}})},function(t,r,e){var n=e(325).has;t.exports=function(t){return n(t),t}},function(t,r,e){var n=e(13);e=Set.prototype;t.exports={Set:Set,add:n(e.add),has:n(e.has),remove:n(e.delete),proto:e}},function(t,r,e){var n=e(2),o=e(324),i=e(325).remove;n({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,r=o(this),e=!0,n=0,a=arguments.length;n<a;n++)t=i(r,arguments[n]),e=e&&t;return!!e}})},function(t,r,e){var n=e(2),o=e(328);n({target:"Set",proto:!0,real:!0,forced:!e(333)("difference")},{difference:o})},function(t,r,e){var n=e(324),o=e(325),i=e(329),a=e(331),u=e(332),c=e(330),f=e(144),s=o.has,p=o.remove;t.exports=function(t){var r=n(this),e=u(t),o=i(r);return a(r)<=e.size?c(r,(function(t){e.includes(t)&&p(o,t)})):f(e.getIterator(),(function(t){s(r,t)&&p(o,t)})),o}},function(t,r,e){var n=e(325),o=e(330),i=n.Set,a=n.add;t.exports=function(t){var r=new i;return o(t,(function(t){a(r,t)})),r}},function(t,r,e){var n,o=e(13),i=e(144),a=(e=(n=e(325)).Set,o((n=n.proto).forEach)),u=o(n.keys),c=u(new e).next;t.exports=function(t,r,e){return e?i(u(t),r,c):a(t,r)}},function(t,r,e){var n=e(98);e=e(325);t.exports=n(e.proto,"size","get")||function(t){return t.size}},function(t,r,e){function n(t,r,e,n){this.set=t,this.size=r,this.has=e,this.keys=n}var o=e(30),i=e(46),a=e(7),u=e(61),c=TypeError,f=Math.max;n.prototype={getIterator:function(){return i(a(this.keys,this.set))},includes:function(t){return a(this.has,this.set,t)}},t.exports=function(t){i(t);var r=+t.size;if(r!=r)throw c("Invalid size");return new n(t,f(u(r),0),o(t.has),o(t.keys))}},function(t,r,e){var n=e(23);t.exports=function(t){try{return(new(n("Set")))[t]({size:0,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}),!0}catch(t){return!1}}},function(t,r,e){var n=e(2),o=e(7),i=e(335),a=e(328);n({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){return o(a,this,i(t))}})},function(t,r,e){var n=e(23),o=e(20),i=e(336),a=e(19),u=n("Set");t.exports=function(t){return a(r=t)&&"number"==typeof r.size&&o(r.has)&&o(r.keys)||!i(t)?t:new u(t);var r}},function(r,e,n){var o=n(89),i=n(38),a=n(16),u=n(33),c=n(121),f=u("iterator"),s=Object;r.exports=function(r){return!a(r)&&((r=s(r))[f]!==t||"@@iterator"in r||i(c,o(r)))}},function(r,e,n){var o=n(2),i=n(111),a=n(324),u=n(330);o({target:"Set",proto:!0,real:!0,forced:!0},{every:function(r){var e=a(this),n=i(r,1<arguments.length?arguments[1]:t);return!1!==u(e,(function(t){if(!n(t,t,e))return!1}),!0)}})},function(r,e,n){var o=n(2),i=n(111),a=n(324),u=n(325),c=n(330),f=u.Set,s=u.add;o({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(r){var e=a(this),n=i(r,1<arguments.length?arguments[1]:t),o=new f;return c(e,(function(t){n(t,t,e)&&s(o,t)})),o}})},function(r,e,n){var o=n(2),i=n(111),a=n(324),u=n(330);o({target:"Set",proto:!0,real:!0,forced:!0},{find:function(r){var e=a(this),n=i(r,1<arguments.length?arguments[1]:t);return(r=u(e,(function(t){if(n(t,t,e))return{value:t}}),!0))&&r.value}})},function(t,r,e){e(2)({target:"Set",stat:!0,forced:!0},{from:e(258)})},function(t,r,e){var n=e(2),o=e(6),i=e(342);n({target:"Set",proto:!0,real:!0,forced:!e(333)("intersection")||o((function(){return"3,2"!=Array.from(new Set([1,2,3]).intersection(new Set([3,2])))}))},{intersection:i})},function(t,r,e){var n=e(324),o=e(325),i=e(331),a=e(332),u=e(330),c=e(144),f=o.Set,s=o.add,p=o.has;t.exports=function(t){var r=n(this),e=a(t),o=new f;return i(r)>e.size?c(e.getIterator(),(function(t){p(r,t)&&s(o,t)})):u(r,(function(t){e.includes(t)&&s(o,t)})),o}},function(t,r,e){var n=e(2),o=e(7),i=e(335),a=e(342);n({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){return o(a,this,i(t))}})},function(t,r,e){var n=e(2),o=e(345);n({target:"Set",proto:!0,real:!0,forced:!e(333)("isDisjointFrom")},{isDisjointFrom:o})},function(t,r,e){var n=e(324),o=e(325).has,i=e(331),a=e(332),u=e(330),c=e(144),f=e(165);t.exports=function(t){var r=n(this),e=a(t);if(i(r)<=e.size)return!1!==u(r,(function(t){if(e.includes(t))return!1}),!0);var s=e.getIterator();return!1!==c(s,(function(t){if(o(r,t))return f(s,"normal",!1)}))}},function(t,r,e){var n=e(2),o=e(7),i=e(335),a=e(345);n({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){return o(a,this,i(t))}})},function(t,r,e){var n=e(2),o=e(348);n({target:"Set",proto:!0,real:!0,forced:!e(333)("isSubsetOf")},{isSubsetOf:o})},function(t,r,e){var n=e(324),o=e(331),i=e(330),a=e(332);t.exports=function(t){var r=n(this),e=a(t);return!(o(r)>e.size)&&!1!==i(r,(function(t){if(!e.includes(t))return!1}),!0)}},function(t,r,e){var n=e(2),o=e(7),i=e(335),a=e(348);n({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){return o(a,this,i(t))}})},function(t,r,e){var n=e(2),o=e(351);n({target:"Set",proto:!0,real:!0,forced:!e(333)("isSupersetOf")},{isSupersetOf:o})},function(t,r,e){var n=e(324),o=e(325).has,i=e(331),a=e(332),u=e(144),c=e(165);t.exports=function(t){var r=n(this);t=a(t);if(i(r)<t.size)return!1;var e=t.getIterator();return!1!==u(e,(function(t){if(!o(r,t))return c(e,"normal",!1)}))}},function(t,r,e){var n=e(2),o=e(7),i=e(335),a=e(351);n({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){return o(a,this,i(t))}})},function(r,e,n){var o=n(2),i=n(13),a=n(324),u=n(330),c=n(88),f=i([].join),s=i([].push);o({target:"Set",proto:!0,real:!0,forced:!0},{join:function(r){var e=a(this),n=(r=r===t?",":c(r),[]);return u(e,(function(t){s(n,t)})),f(n,r)}})},function(r,e,n){var o=n(2),i=n(111),a=n(324),u=n(325),c=n(330),f=u.Set,s=u.add;o({target:"Set",proto:!0,real:!0,forced:!0},{map:function(r){var e=a(this),n=i(r,1<arguments.length?arguments[1]:t),o=new f;return c(e,(function(t){s(o,n(t,t,e))})),o}})},function(t,r,e){e(2)({target:"Set",stat:!0,forced:!0},{of:e(269)})},function(r,e,n){var o=n(2),i=n(30),a=n(324),u=n(330),c=TypeError;o({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(r){var e=a(this),n=arguments.length<2,o=n?t:arguments[1];if(i(r),u(e,(function(t){o=n?(n=!1,t):r(o,t,t,e)})),n)throw c("Reduce of empty set with no initial value");return o}})},function(r,e,n){var o=n(2),i=n(111),a=n(324),u=n(330);o({target:"Set",proto:!0,real:!0,forced:!0},{some:function(r){var e=a(this),n=i(r,1<arguments.length?arguments[1]:t);return!0===u(e,(function(t){if(n(t,t,e))return!0}),!0)}})},function(t,r,e){var n=e(2),o=e(359);n({target:"Set",proto:!0,real:!0,forced:!e(333)("symmetricDifference")},{symmetricDifference:o})},function(t,r,e){var n=e(324),o=e(325),i=e(329),a=e(332),u=e(144),c=o.add,f=o.has,s=o.remove;t.exports=function(t){var r=n(this),e=(t=a(t).getIterator(),i(r));return u(t,(function(t){(f(r,t)?s:c)(e,t)})),e}},function(t,r,e){var n=e(2),o=e(7),i=e(335),a=e(359);n({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){return o(a,this,i(t))}})},function(t,r,e){var n=e(2),o=e(362);n({target:"Set",proto:!0,real:!0,forced:!e(333)("union")},{union:o})},function(t,r,e){var n=e(324),o=e(325).add,i=e(329),a=e(332),u=e(144);t.exports=function(t){var r=n(this),e=(t=a(t).getIterator(),i(r));return u(t,(function(t){o(e,t)})),e}},function(t,r,e){var n=e(2),o=e(7),i=e(335),a=e(362);n({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){return o(a,this,i(t))}})},function(r,e,n){var o=n(2),i=n(365).charAt,a=n(15),u=n(61),c=n(88);o({target:"String",proto:!0,forced:!0},{at:function(r){var e=c(a(this)),n=e.length;return(r=0<=(r=u(r))?r:n+r)<0||n<=r?t:i(e,r)}})},function(r,e,n){var o=n(13),i=n(61),a=n(88),u=n(15),c=o("".charAt),f=o("".charCodeAt),s=o("".slice);o=function(r){return function(e,n){var o,p=a(u(e)),l=i(n);e=p.length;return l<0||e<=l?r?"":t:(n=f(p,l))<55296||56319<n||l+1===e||(o=f(p,l+1))<56320||57343<o?r?c(p,l):n:r?s(p,l,l+2):o-56320+(n-55296<<10)+65536}};r.exports={codeAt:o(!1),charAt:o(!0)}},function(t,r,e){e(2)({target:"String",stat:!0,forced:!0},{cooked:e(367)})},function(r,e,n){var o=n(13),i=n(11),a=n(88),u=n(63),c=TypeError,f=o([].push),s=o([].join);r.exports=function(r){var e=i(r),n=u(e);if(!n)return"";for(var o=arguments.length,p=[],l=0;;){var h=e[l++];if(h===t)throw c("Incorrect template");if(f(p,a(h)),l===n)return s(p,"");l<o&&f(p,a(arguments[l]))}}},function(r,e,n){var o=n(2),i=n(186),a=n(118),u=n(15),c=n(88),f=n(51),s=(n=n(365)).codeAt,p=n.charAt,l="String Iterator",h=f.set,v=f.getterFor(l),y=i((function(t){h(this,{type:l,string:t,index:0})}),"String",(function(){var r=v(this),e=r.string,n=r.index;return n>=e.length?a(t,!0):(e=p(e,n),r.index+=e.length,a({codePoint:s(e,0),position:n},!1))}));o({target:"String",proto:!0,forced:!0},{codePoints:function(){return new y(c(u(this)))}})},function(r,e,n){var o=n(201),i=n(2),a=n(34),u=n(23),c=n(48),f=n(13),s=n(190),p=n(46),l=n(39),h=n(20),v=n(63),y=n(44).f,d=n(197),g=n(367),b=n(370),m=(n=n(297),a("GlobalDedentRegistry",new(u("WeakMap"))));function x(t){return c((function(r){var e=d(arguments);return e[0]=function(t){var r=t.raw;if(o&&!E(r))throw S("Raw template should be frozen");if(m.has(r))return m.get(r);var e=C(r);t=N(e);return y(t,"raw",{value:A(e)}),A(t),m.set(r,t),t}(p(r)),s(t,this,e)}),"")}m.has=m.has,m.get=m.get,m.set=m.set;var w=Array,S=TypeError,A=Object.freeze||Object,E=Object.isFrozen,O=Math.min,R=f("".charAt),I=f("".slice),k=f("".split),T=f(/./.exec),M=/([\n\u2028\u2029]|\r\n?)/g,j=RegExp("^["+n+"]*"),P=RegExp("[^"+n+"]"),D="Invalid tag",C=function(t){var r,e=l(t),n=v(e),o=w(n),i=w(n),a=0;if(!n)throw S(D);for(;a<n;a++){var u=e[a];if("string"!=typeof u)throw S(D);o[a]=k(u,M)}for(a=0;a<n;a++){var c=a+1===n,f=o[a];if(0===a){if(1===f.length||0<f[0].length)throw S("Invalid opening line");f[1]=""}if(c){if(1===f.length||T(P,f[f.length-1]))throw S("Invalid closing line");f[f.length-2]="",f[f.length-1]=""}for(var s=2;s<f.length;s+=2){var p=f[s],h=s+1===f.length&&!c,y=T(j,p)[0];h||y.length!==p.length?r=_(y,r):f[s]=""}}var d=r?r.length:0;for(a=0;a<n;a++){for(var g=(f=o[a])[0],b=1;b<f.length;b+=2)g+=f[b]+I(f[b+1],d);i[a]=g}return i},_=function(r,e){if(e===t||r===e)return r;for(var n=0,o=O(r.length,e.length);n<o&&R(r,n)===R(e,n);n++);return I(r,0,n)},N=function(t){for(var r=0,e=t.length,n=w(e);r<e;r++)n[r]=b(t[r]);return n},F=x(g);i({target:"String",stat:!0,forced:!0},{dedent:function(t){return p(t),h(t)?x(t):s(F,this,arguments)}})},function(t,r,e){function n(t,r){return 48<=(r=f(t,r))&&r<=57}function o(t,r,e){if(e>=t.length)return-1;for(var n=0;r<e;r++){var o=l(f(t,r));if(-1===o)return-1;n=16*n+o}return n}var i=e(23),a=(e=e(13),String.fromCharCode),u=i("String","fromCodePoint"),c=e("".charAt),f=e("".charCodeAt),s=e("".indexOf),p=e("".slice),l=function(t){return 48<=t&&t<=57?t-48:97<=t&&t<=102?t-97+10:65<=t&&t<=70?t-65+10:-1};t.exports=function(t){for(var r,e="",i=0,f=0;-1<(f=s(t,"\\",f));){if(e+=p(t,i,f),++f===t.length)return;var l=c(t,f++);switch(l){case"b":e+="\b";break;case"t":e+="\t";break;case"n":e+="\n";break;case"v":e+="\v";break;case"f":e+="\f";break;case"r":e+="\r";break;case"\r":f<t.length&&"\n"===c(t,f)&&++f;case"\n":case"\u2028":case"\u2029":break;case"0":if(n(t,f))return;e+="\0";break;case"x":if(-1===(r=o(t,f,f+2)))return;f+=2,e+=a(r);break;case"u":if(f<t.length&&"{"===c(t,f)){var h=s(t,"}",++f);if(-1===h)return;r=o(t,f,h),f=h+1}else r=o(t,f,f+4),f+=4;if(-1===r||1114111<r)return;e+=u(r);break;default:if(n(l,0))return;e+=l}i=f}return e+p(t,i)}},function(t,r,e){e(372)("asyncDispose")},function(t,r,e){var n=e(373),o=e(38),i=e(374),a=e(44).f;t.exports=function(t){var r=n.Symbol||(n.Symbol={});o(r,t)||a(r,t,{value:i.f(t)})}},function(t,r,e){e=e(3),t.exports=e},function(t,r,e){e=e(33),r.f=e},function(t,r,e){e(372)("dispose")},function(t,r,e){e(2)({target:"Symbol",stat:!0},{isRegisteredSymbol:e(377)})},function(r,e,n){var o=n(23),i=(n=n(13),(o=o("Symbol")).keyFor),a=n(o.prototype.valueOf);r.exports=o.isRegisteredSymbol||function(r){try{return i(a(r))!==t}catch(r){return!1}}},function(t,r,e){e(2)({target:"Symbol",stat:!0,name:"isRegisteredSymbol"},{isRegistered:e(377)})},function(t,r,e){e(2)({target:"Symbol",stat:!0,forced:!0},{isWellKnownSymbol:e(380)})},function(t,r,e){for(var n=e(34),o=e(23),i=e(13),a=e(22),u=e(33),c=o("Symbol"),f=c.isWellKnownSymbol,s=o("Object","getOwnPropertyNames"),p=i(c.prototype.valueOf),l=n("wks"),h=0,v=s(c),y=v.length;h<y;h++)try{var d=v[h];a(c[d])&&u(d)}catch(t){}t.exports=function(t){if(f&&f(t))return!0;try{for(var r=p(t),e=0,n=s(l),o=n.length;e<o;e++)if(l[n[e]]==r)return!0}catch(t){}return!1}},function(t,r,e){e(2)({target:"Symbol",stat:!0,name:"isWellKnownSymbol",forced:!0},{isWellKnown:e(380)})},function(t,r,e){e(372)("matcher")},function(t,r,e){e(372)("metadata")},function(t,r,e){e(372)("metadataKey")},function(t,r,e){e(372)("observable")},function(t,r,e){e(372)("patternMatch")},function(t,r,e){e(372)("replaceAll")},function(r,e,n){var o=n(23),i=n(259),a=n(110),u=n(93),c=n(79),f=u.aTypedArrayConstructor;(0,u.exportTypedArrayStaticMethod)("fromAsync",(function(r){var e=this,n=arguments.length,u=1<n?arguments[1]:t,s=2<n?arguments[2]:t;return new(o("Promise"))((function(t){i(e),t(a(r,u,s))})).then((function(t){return c(f(e),t)}))}),!0)},function(r,e,n){var o=n(93),i=n(126).filterReject,a=n(390),u=o.aTypedArray;(0,o.exportTypedArrayMethod)("filterOut",(function(r){return r=i(u(this),r,1<arguments.length?arguments[1]:t),a(this,r)}),!0)},function(t,r,e){var n=e(79),o=e(391);t.exports=function(t,r){return n(o(t),r)}},function(t,r,e){var n=e(93),o=e(392),i=n.aTypedArrayConstructor,a=n.getTypedArrayConstructor;t.exports=function(t){return i(o(t,a(t)))}},function(r,e,n){var o=n(46),i=n(259),a=n(16),u=n(33)("species");r.exports=function(r,e){var n;return(r=o(r).constructor)===t||a(n=o(r)[u])?e:i(n)}},function(r,e,n){var o=n(93),i=n(126).filterReject,a=n(390),u=o.aTypedArray;(0,o.exportTypedArrayMethod)("filterReject",(function(r){return r=i(u(this),r,1<arguments.length?arguments[1]:t),a(this,r)}),!0)},function(r,e,n){var o=n(93),i=n(131),a=n(391),u=o.aTypedArray;(0,o.exportTypedArrayMethod)("groupBy",(function(r){var e=1<arguments.length?arguments[1]:t;return i(u(this),r,e,a)}),!0)},function(t,r,e){var n=e(93),o=e(63),i=e(102),a=e(60),u=e(103),c=e(61),f=(e=e(6),n.aTypedArray),s=n.getTypedArrayConstructor,p=(n=n.exportTypedArrayMethod,Math.max),l=Math.min;n("toSpliced",(function(t,r){var e,n,h,v,y,d=f(this),g=s(d),b=o(d),m=a(t,b),x=arguments.length,w=0;if(0===x)e=n=0;else if(1===x)e=0,n=b-m;else if(n=l(p(c(r),0),b-m),e=x-2)for(var S=new g(e),A=i(S),E=2;E<x;E++)h=arguments[E],S[E-2]=A?u(h):+h;for(y=new g(v=b+e-n);w<m;w++)y[w]=d[w];for(;w<m+e;w++)y[w]=S[w-m];for(;w<v;w++)y[w]=d[w+n-e];return y}),!!e((function(){var t=new Int8Array([1]),r=t.toSpliced(1,0,{valueOf:function(){return t[0]=2,3}});return 2!==r[0]||3!==r[1]})))},function(t,r,e){var n=e(13),o=e(93),i=e(79),a=(e=e(142),o.aTypedArray),u=o.getTypedArrayConstructor,c=(o=o.exportTypedArrayMethod,n(e));o("uniqueBy",(function(t){return a(this),i(u(this),c(this,t))}),!0)},function(t,r,e){var n=e(2),o=e(398),i=e(399).remove;n({target:"WeakMap",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,r=o(this),e=!0,n=0,a=arguments.length;n<a;n++)t=i(r,arguments[n]),e=e&&t;return!!e}})},function(t,r,e){var n=e(399).has;t.exports=function(t){return n(t),t}},function(t,r,e){var n=e(13);e=WeakMap.prototype;t.exports={WeakMap:WeakMap,set:n(e.set),get:n(e.get),has:n(e.has),remove:n(e.delete)}},function(t,r,e){e(2)({target:"WeakMap",stat:!0,forced:!0},{from:e(258)})},function(t,r,e){e(2)({target:"WeakMap",stat:!0,forced:!0},{of:e(269)})},function(t,r,e){var n=e(2),o=e(398),i=(e=e(399)).get,a=e.has,u=e.set;n({target:"WeakMap",proto:!0,real:!0,forced:!0},{emplace:function(t,r){var e,n=o(this);return a(n,t)?(e=i(n,t),"update"in r&&(e=r.update(e,t,n),u(n,t,e)),e):(r=r.insert(t,n),u(n,t,r),r)}})},function(t,r,e){e(2)({target:"WeakMap",proto:!0,real:!0,forced:!0},{upsert:e(275)})},function(t,r,e){var n=e(2),o=e(405),i=e(406).add;n({target:"WeakSet",proto:!0,real:!0,forced:!0},{addAll:function(){for(var t=o(this),r=0,e=arguments.length;r<e;r++)i(t,arguments[r]);return t}})},function(t,r,e){var n=e(406).has;t.exports=function(t){return n(t),t}},function(t,r,e){var n=e(13);e=WeakSet.prototype;t.exports={WeakSet:WeakSet,add:n(e.add),has:n(e.has),remove:n(e.delete)}},function(t,r,e){var n=e(2),o=e(405),i=e(406).remove;n({target:"WeakSet",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,r=o(this),e=!0,n=0,a=arguments.length;n<a;n++)t=i(r,arguments[n]),e=e&&t;return!!e}})},function(t,r,e){e(2)({target:"WeakSet",stat:!0,forced:!0},{from:e(258)})},function(t,r,e){e(2)({target:"WeakSet",stat:!0,forced:!0},{of:e(269)})},function(r,e,n){var o=n(2),i=n(3),a=n(23),u=n(10),c=n(44).f,f=n(38),s=n(157),p=n(205),l=n(108),h=n(411),v=n(106),y=n(5),d=n(35),g="DOMException",b=a("Error"),m=a(g),x=function(){s(this,w);var r=l((e=arguments.length)<1?t:arguments[0]),e=l(e<2?t:arguments[1],"Error");e=new m(r,e);return(r=b(r)).name=g,c(e,"stack",u(1,v(r.stack,1))),p(e,this,x),e},w=x.prototype=m.prototype,S="stack"in b(g);n="stack"in new m(1,2),i=!(!(i=m&&y&&Object.getOwnPropertyDescriptor(i,g))||i.writable&&i.configurable),n=S&&!i&&!n;o({global:!0,constructor:!0,forced:d||n},{DOMException:n?x:m});var A,E=a(g);if((a=E.prototype).constructor!==E)for(var O in d||c(a,"constructor",u(1,E)),h)f(h,O)&&(f(E,O=(A=h[O]).s)||c(E,O,u(6,A.c)))},function(t,r){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},function(r,e,n){function o(t){throw new J("Uncloneable type: "+t,ut)}function i(t,r){throw new J((r||"Cloning")+" of "+t+" cannot be properly polyfilled in this engine",ut)}function a(t,r){return st||i(r),st(t)}var u,c=n(35),f=n(2),s=n(3),p=n(23),l=n(13),h=n(6),v=n(40),y=n(20),d=n(113),g=n(16),b=n(19),m=n(22),x=n(202),w=n(46),S=n(89),A=n(38),E=n(198),O=n(43),R=n(63),I=n(413),k=n(414),T=n(136),M=n(325),j=n(107),P=n(151),D=s.Object,C=s.Array,_=s.Date,N=s.Error,F=s.EvalError,B=s.RangeError,z=s.ReferenceError,U=s.SyntaxError,L=s.TypeError,W=s.URIError,K=s.PerformanceMark,V=(n=s.WebAssembly)&&n.CompileError||N,G=n&&n.LinkError||N,H=n&&n.RuntimeError||N,J=p("DOMException"),Y=T.Map,$=T.has,q=T.get,X=T.set,Q=M.Set,Z=M.add,tt=p("Object","keys"),rt=l([].push),et=l((!0).valueOf),nt=l(1..valueOf),ot=l("".valueOf),it=l(_.prototype.getTime),at=v("structuredClone"),ut="DataCloneError",ct="Transferring",ft=(l=function(t){return!h((function(){var r=new s.Set([7]),e=t(r),n=t(D(7));return e==r||!e.has(7)||"object"!=typeof n||7!=n}))&&t},v=function(t,r){return!h((function(){var e=new r,n=t({a:e,b:e});return!(n&&n.a===n.b&&n.a instanceof r&&n.a.stack===e.stack)}))},s.structuredClone),st=(c=c||!v(ft,N)||!v(ft,J)||(u=ft,!!h((function(){var t=u(new s.AggregateError([1],at,{cause:3}));return"AggregateError"!=t.name||1!=t.errors[0]||t.message!=at||3!=t.cause}))),v=!ft&&l((function(t){return new K(at,{detail:t}).detail})),l(ft)||v),pt=function(r,e){if(m(r)&&o("Symbol"),!b(r))return r;if(e){if($(e,r))return q(e,r)}else e=new Y;var n,u,c,f,l,h,v,d,g,x,w,I=S(r),T=!1;switch(I){case"Array":c=C(R(r)),T=!0;break;case"Object":c={},T=!0;break;case"Map":c=new Y,T=!0;break;case"Set":c=new Q,T=!0;break;case"RegExp":c=new RegExp(r.source,k(r));break;case"Error":switch(u=r.name){case"AggregateError":c=p("AggregateError")([]);break;case"EvalError":c=F();break;case"RangeError":c=B();break;case"ReferenceError":c=z();break;case"SyntaxError":c=U();break;case"TypeError":c=L();break;case"URIError":c=W();break;case"CompileError":c=V();break;case"LinkError":c=G();break;case"RuntimeError":c=H();break;default:c=N()}T=!0;break;case"DOMException":c=new J(r.message,r.name),T=!0;break;case"DataView":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":n=s[I],b(n)||i(I),c=new n(pt(r.buffer,e),r.byteOffset,"DataView"===I?r.byteLength:r.length);break;case"DOMQuad":try{c=new DOMQuad(pt(r.p1,e),pt(r.p2,e),pt(r.p3,e),pt(r.p4,e))}catch(n){c=a(r,I)}break;case"File":if(st)try{c=st(r),S(c)!==I&&(c=t)}catch(n){}if(!c)try{c=new File([r],r.name,r)}catch(n){}c||i(I);break;case"FileList":if(f=function(){var t;try{t=new s.DataTransfer}catch(r){try{t=new s.ClipboardEvent("").clipboardData}catch(t){}}return t&&t.items&&t.files?t:null}()){for(l=0,h=R(r);l<h;l++)f.items.add(pt(r[l],e));c=f.files}else c=a(r,I);break;case"ImageData":try{c=new ImageData(pt(r.data,e),r.width,r.height,{colorSpace:r.colorSpace})}catch(n){c=a(r,I)}break;default:if(st)c=st(r);else switch(I){case"BigInt":c=D(r.valueOf());break;case"Boolean":c=D(et(r));break;case"Number":c=D(nt(r));break;case"String":c=D(ot(r));break;case"Date":c=new _(it(r));break;case"ArrayBuffer":(n=s.DataView)||"function"==typeof r.slice||i(I);try{if("function"!=typeof r.slice||r.resizable){h=r.byteLength,w="maxByteLength"in r?{maxByteLength:r.maxByteLength}:t,c=new ArrayBuffer(h,w),g=new n(r),x=new n(c);for(l=0;l<h;l++)x.setUint8(l,g.getUint8(l))}else c=r.slice(0)}catch(n){throw new J("ArrayBuffer is detached",ut)}break;case"SharedArrayBuffer":c=r;break;case"Blob":try{c=r.slice(0,r.size,r.type)}catch(n){i(I)}break;case"DOMPoint":case"DOMPointReadOnly":n=s[I];try{c=n.fromPoint?n.fromPoint(r):new n(r.x,r.y,r.z,r.w)}catch(n){i(I)}break;case"DOMRect":case"DOMRectReadOnly":n=s[I];try{c=n.fromRect?n.fromRect(r):new n(r.x,r.y,r.width,r.height)}catch(n){i(I)}break;case"DOMMatrix":case"DOMMatrixReadOnly":n=s[I];try{c=n.fromMatrix?n.fromMatrix(r):new n(r)}catch(n){i(I)}break;case"AudioData":case"VideoFrame":y(r.clone)||i(I);try{c=r.clone()}catch(n){o(I)}break;case"CropTarget":case"CryptoKey":case"FileSystemDirectoryHandle":case"FileSystemFileHandle":case"FileSystemHandle":case"GPUCompilationInfo":case"GPUCompilationMessage":case"ImageBitmap":case"RTCCertificate":case"WebAssembly.Module":i(I);default:o(I)}}if(X(e,r,c),T)switch(I){case"Array":case"Object":for(v=tt(r),l=0,h=R(v);l<h;l++)d=v[l],E(c,d,pt(r[d],e));break;case"Map":r.forEach((function(t,r){X(c,pt(r,e),pt(t,e))}));break;case"Set":r.forEach((function(t){Z(c,pt(t,e))}));break;case"Error":O(c,"message",pt(r.message,e)),A(r,"cause")&&O(c,"cause",pt(r.cause,e)),"AggregateError"==u&&(c.errors=pt(r.errors,e));case"DOMException":j&&O(c,"stack",pt(r.stack,e))}return c};f({global:!0,enumerable:!0,sham:!P,forced:c},{structuredClone:function(r){var e,n;return(n=(n=1<I(arguments.length,1)&&!g(arguments[1])?w(arguments[1]):t)?n.transfer:t)!==t&&function(r,e){if(!b(r))throw L("Transfer option cannot be converted to a sequence");var n=[];x(r,(function(t){rt(n,w(t))}));var o,a,u,c,f,p,l=0,h=R(n);if(P)for(c=ft(n,{transfer:n});l<h;)X(e,n[l],c[l++]);else for(;l<h;){if(o=n[l++],$(e,o))throw new J("Duplicate transferable",ut);switch(a=S(o)){case"ImageBitmap":u=s.OffscreenCanvas,d(u)||i(a,ct);try{(p=new u(o.width,o.height)).getContext("bitmaprenderer").transferFromImageBitmap(o),f=p.transferToImageBitmap()}catch(r){}break;case"AudioData":case"VideoFrame":y(o.clone)&&y(o.close)||i(a,ct);try{f=o.clone(),o.close()}catch(r){}break;case"ArrayBuffer":y(o.transfer)||i(a,ct),f=o.transfer();break;case"MediaSourceHandle":case"MessagePort":case"OffscreenCanvas":case"ReadableStream":case"TransformStream":case"WritableStream":i(a,ct)}if(f===t)throw new J("This object cannot be transferred: "+a,ut);X(e,o,f)}}(n,e=new Y),pt(r,e)}})},function(t,r){var e=TypeError;t.exports=function(t,r){if(t<r)throw e("Not enough arguments");return t}},function(r,e,n){var o=n(7),i=n(38),a=n(24),u=n(86),c=RegExp.prototype;r.exports=function(r){var e=r.flags;return e!==t||"flags"in c||i(r,"flags")||!a(c,r)?e:o(u,r)}},function(r,e,n){var o=n(2),i=n(23),a=n(6),u=n(413),c=n(88),f=(n=n(416),i("URL"));o({target:"URL",stat:!0,forced:!(n&&a((function(){f.canParse()})))},{canParse:function(r){var e=u(arguments.length,1);r=c(r),e=e<2||arguments[1]===t?t:c(arguments[1]);try{return!!new f(r,e)}catch(r){return!1}}})},function(r,e,n){var o=n(6),i=n(33),a=n(5),u=n(35),c=i("iterator");r.exports=!o((function(){var r=new URL("b?a=1&b=2&c=3","http://a"),e=r.searchParams,n=new URLSearchParams("a=1&a=2"),o="";return r.pathname="c%20d",e.forEach((function(t,r){e.delete("b"),o+=r+t})),n.delete("a",2),u&&(!r.toJSON||!n.has("a",1)||n.has("a",2))||!e.size&&(u||!a)||!e.sort||"http://a/c%20d?a=1&c=3"!==r.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[c]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==o||"x"!==new URL("http://x",t).host}))},function(r,e,n){var o,i=n(47),a=n(13),u=n(88),c=n(413),f=a((n=(o=URLSearchParams).prototype).append),s=a(n.delete),p=a(n.forEach),l=a([].push);(o=new o("a=1&a=2")).delete("a",1),o+""!="a=2"&&i(n,"delete",(function(r){var e=arguments.length,n=e<2?t:arguments[1];if(e&&n===t)return s(this,r);var o=[];p(this,(function(t,r){l(o,{key:r,value:t})})),c(e,1);for(var i,a=u(r),h=u(n),v=0,y=0,d=!1,g=o.length;v<g;)i=o[v++],d||i.key===a?(d=!0,s(this,i.key)):y++;for(;y<g;)(i=o[y++]).key===a&&i.value===h||f(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},function(r,e,n){var o=n(47),i=n(13),a=n(88),u=n(413),c=URLSearchParams,f=i((n=c.prototype).getAll),s=i(n.has);new c("a=1").has("a",2)&&o(n,"has",(function(r){var e=arguments.length,n=e<2?t:arguments[1];if(e&&n===t)return s(this,r);var o=f(this,r);u(e,1);for(var i=a(n),c=0;c<o.length;)if(o[c++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},function(t,r,e){var n=e(5),o=e(13),i=e(85),a=o((e=URLSearchParams.prototype).forEach);!n||"size"in e||i(e,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})}],n.c=e,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=0)}();
// source --> https://prontosocialchef.it/wp-includes/js/dist/hooks.min.js?ver=c6aec9a8d4e5a5d543a1 
/*! This file is auto-generated */
!function(){"use strict";var n={d:function(t,r){for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o:function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r:function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},t={};n.r(t),n.d(t,{actions:function(){return S},addAction:function(){return m},addFilter:function(){return p},applyFilters:function(){return k},createHooks:function(){return f},currentAction:function(){return w},currentFilter:function(){return I},defaultHooks:function(){return h},didAction:function(){return O},didFilter:function(){return j},doAction:function(){return b},doingAction:function(){return x},doingFilter:function(){return T},filters:function(){return z},hasAction:function(){return _},hasFilter:function(){return y},removeAction:function(){return A},removeAllActions:function(){return F},removeAllFilters:function(){return g},removeFilter:function(){return v}});var r=function(n){return"string"!=typeof n||""===n?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(n)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var e=function(n){return"string"!=typeof n||""===n?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(n)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(n)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var o=function(n,t){return function(o,i,c,s=10){const u=n[t];if(!e(o))return;if(!r(i))return;if("function"!=typeof c)return void console.error("The hook callback must be a function.");if("number"!=typeof s)return void console.error("If specified, the hook priority must be a number.");const l={callback:c,priority:s,namespace:i};if(u[o]){const n=u[o].handlers;let t;for(t=n.length;t>0&&!(s>=n[t-1].priority);t--);t===n.length?n[t]=l:n.splice(t,0,l),u.__current.forEach((n=>{n.name===o&&n.currentIndex>=t&&n.currentIndex++}))}else u[o]={handlers:[l],runs:0};"hookAdded"!==o&&n.doAction("hookAdded",o,i,c,s)}};var i=function(n,t,o=!1){return function(i,c){const s=n[t];if(!e(i))return;if(!o&&!r(c))return;if(!s[i])return 0;let u=0;if(o)u=s[i].handlers.length,s[i]={runs:s[i].runs,handlers:[]};else{const n=s[i].handlers;for(let t=n.length-1;t>=0;t--)n[t].namespace===c&&(n.splice(t,1),u++,s.__current.forEach((n=>{n.name===i&&n.currentIndex>=t&&n.currentIndex--})))}return"hookRemoved"!==i&&n.doAction("hookRemoved",i,c),u}};var c=function(n,t){return function(r,e){const o=n[t];return void 0!==e?r in o&&o[r].handlers.some((n=>n.namespace===e)):r in o}};var s=function(n,t,r=!1){return function(e,...o){const i=n[t];i[e]||(i[e]={handlers:[],runs:0}),i[e].runs++;const c=i[e].handlers;if(!c||!c.length)return r?o[0]:void 0;const s={name:e,currentIndex:0};for(i.__current.push(s);s.currentIndex<c.length;){const n=c[s.currentIndex].callback.apply(null,o);r&&(o[0]=n),s.currentIndex++}return i.__current.pop(),r?o[0]:void 0}};var u=function(n,t){return function(){var r;const e=n[t];return null!==(r=e.__current[e.__current.length-1]?.name)&&void 0!==r?r:null}};var l=function(n,t){return function(r){const e=n[t];return void 0===r?void 0!==e.__current[0]:!!e.__current[0]&&r===e.__current[0].name}};var a=function(n,t){return function(r){const o=n[t];if(e(r))return o[r]&&o[r].runs?o[r].runs:0}};class d{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=o(this,"actions"),this.addFilter=o(this,"filters"),this.removeAction=i(this,"actions"),this.removeFilter=i(this,"filters"),this.hasAction=c(this,"actions"),this.hasFilter=c(this,"filters"),this.removeAllActions=i(this,"actions",!0),this.removeAllFilters=i(this,"filters",!0),this.doAction=s(this,"actions"),this.applyFilters=s(this,"filters",!0),this.currentAction=u(this,"actions"),this.currentFilter=u(this,"filters"),this.doingAction=l(this,"actions"),this.doingFilter=l(this,"filters"),this.didAction=a(this,"actions"),this.didFilter=a(this,"filters")}}var f=function(){return new d};const h=f(),{addAction:m,addFilter:p,removeAction:A,removeFilter:v,hasAction:_,hasFilter:y,removeAllActions:F,removeAllFilters:g,doAction:b,applyFilters:k,currentAction:w,currentFilter:I,doingAction:x,doingFilter:T,didAction:O,didFilter:j,actions:S,filters:z}=h;(window.wp=window.wp||{}).hooks=t}();