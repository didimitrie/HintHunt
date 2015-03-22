var Zepto=function(){function t(t){return null==t?String(t):I[B.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return T.call(t,function(t){return null!=t})}function u(t){return t.length>0?$.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in P?P[t]:P[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||A[c(t)]?e:e+"px"}function h(t){var e,n;return O[t]||(e=N.createElement(t),N.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),O[t]=n),O[t]}function p(t){return"children"in t?S.call(t.children):$.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(E in e)n&&(o(e[E])||G(e[E]))?(o(e[E])&&!o(t[E])&&(t[E]={}),G(e[E])&&!G(t[E])&&(t[E]=[]),d(t[E],e[E],n)):e[E]!==w&&(t[E]=e[E])}function m(t,e){return null==e?$(t):$(t).filter(e)}function v(t,n,r,i){return e(n)?n.call(t,r,i):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className,r=n&&n.baseVal!==w;return e===w?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function x(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?$.parseJSON(t):t:e):t}catch(n){return t}}function b(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)b(t.childNodes[n],e)}var w,E,$,j,C=[],S=C.slice,T=C.filter,N=window.document,O={},P={},A={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},Z=/^\s*<(\w+|!)[^>]*>/,D=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,L=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,_=/^(?:body|html)$/i,R=/([A-Z])/g,z=["val","css","html","text","data","width","height","offset"],M=["after","prepend","before","append"],k=N.createElement("table"),F=N.createElement("tr"),q={tr:N.createElement("tbody"),tbody:k,thead:k,tfoot:k,td:F,th:F,"*":N.createElement("div")},H=/complete|loaded|interactive/,V=/^[\w-]*$/,I={},B=I.toString,U={},J,X,W=N.createElement("div"),Y={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},G=Array.isArray||function(t){return t instanceof Array};return U.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=W).appendChild(t),r=~U.qsa(i,e).indexOf(t),o&&W.removeChild(t),r},J=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},X=function(t){return T.call(t,function(e,n){return t.indexOf(e)==n})},U.fragment=function(t,e,n){var r,i,a;return D.test(t)&&(r=$(N.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(L,"<$1></$2>")),e===w&&(e=Z.test(t)&&RegExp.$1),e in q||(e="*"),a=q[e],a.innerHTML=""+t,r=$.each(S.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(i=$(r),$.each(n,function(t,e){z.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},U.Z=function(t,e){return t=t||[],t.__proto__=$.fn,t.selector=e||"",t},U.isZ=function(t){return t instanceof U.Z},U.init=function(t,n){var r;if(!t)return U.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&Z.test(t))r=U.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return $(n).find(t);r=U.qsa(N,t)}else{if(e(t))return $(N).ready(t);if(U.isZ(t))return t;if(G(t))r=s(t);else if(i(t))r=[t],t=null;else if(Z.test(t))r=U.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return $(n).find(t);r=U.qsa(N,t)}}return U.Z(r,t)},$=function(t,e){return U.init(t,e)},$.extend=function(t){var e,n=S.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},U.qsa=function(t,e){var n,i="#"==e[0],o=!i&&"."==e[0],a=i||o?e.slice(1):e,s=V.test(a);return r(t)&&s&&i?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:S.call(s&&!i?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},$.contains=N.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},$.type=t,$.isFunction=e,$.isWindow=n,$.isArray=G,$.isPlainObject=o,$.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},$.inArray=function(t,e,n){return C.indexOf.call(e,t,n)},$.camelCase=J,$.trim=function(t){return null==t?"":String.prototype.trim.call(t)},$.uuid=0,$.support={},$.expr={},$.map=function(t,e){var n,r=[],i,o;if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&r.push(n);else for(o in t)n=e(t[o],o),null!=n&&r.push(n);return u(r)},$.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},$.grep=function(t,e){return T.call(t,e)},window.JSON&&($.parseJSON=JSON.parse),$.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){I["[object "+e+"]"]=e.toLowerCase()}),$.fn={forEach:C.forEach,reduce:C.reduce,push:C.push,sort:C.sort,indexOf:C.indexOf,concat:C.concat,map:function(t){return $($.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return $(S.apply(this,arguments))},ready:function(t){return H.test(N.readyState)&&N.body?t($):N.addEventListener("DOMContentLoaded",function(){t($)},!1),this},get:function(t){return t===w?S.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return C.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):$(T.call(this,function(e){return U.matches(e,t)}))},add:function(t,e){return $(X(this.concat($(t,e))))},is:function(t){return this.length>0&&U.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):a(t)&&e(t.item)?S.call(t):$(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return $(n)},has:function(t){return this.filter(function(){return i(t)?$.contains(this,t):$(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:$(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:$(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?$(t).filter(function(){var t=this;return C.some.call(n,function(e){return $.contains(e,t)})}):1==this.length?$(U.qsa(this[0],t)):this.map(function(){return U.qsa(this,t)}):[]},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=$(t));n&&!(i?i.indexOf(n)>=0:U.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return $(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=$.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(X(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return S.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return T.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return $.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=$(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){$(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){$(this[0]).before(t=$(t));for(var e;(e=t.children()).length;)t=e.first();$(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=$(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){$(this).replaceWith($(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=$(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return $(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return $(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;$(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(E in t)g(this,E,t[E]);else g(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:w},removeAttr:function(t){return this.each(function(){1===this.nodeType&&g(this,t)})},prop:function(t,e){return t=Y[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(R,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?x(r):w},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?$(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=$(this),r=v(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r=this[0],i=getComputedStyle(r,"");if(!r)return;if("string"==typeof e)return r.style[J(e)]||i.getPropertyValue(e);if(G(e)){var o={};return $.each(G(e)?e:[e],function(t,e){o[e]=r.style[J(e)]||i.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(E in e)e[E]||0===e[E]?a+=c(E)+":"+f(E,e[E])+";":this.each(function(){this.style.removeProperty(c(E))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf($(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?C.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){j=[];var n=y(this),r=v(this,t,e,n);r.split(/\s+/g).forEach(function(t){$(this).hasClass(t)||j.push(t)},this),j.length&&y(this,n+(n?" ":"")+j.join(" "))}):this},removeClass:function(t){return this.each(function(e){return t===w?y(this,""):(j=y(this),v(this,t,e,j).split(/\s+/g).forEach(function(t){j=j.replace(l(t)," ")}),void y(this,j.trim()))})},toggleClass:function(t,e){return t?this.each(function(n){var r=$(this),i=v(this,t,n,y(this));i.split(/\s+/g).forEach(function(t){(e===w?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=_.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat($(t).css("margin-top"))||0,n.left-=parseFloat($(t).css("margin-left"))||0,r.top+=parseFloat($(e[0]).css("border-top-width"))||0,r.left+=parseFloat($(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||N.body;t&&!_.test(t.nodeName)&&"static"==$(t).css("position");)t=t.offsetParent;return t})}},$.fn.detach=$.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});$.fn[t]=function(i){var o,a=this[0];return i===w?n(a)?a["inner"+e]:r(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=$(this),a.css(t,v(this,i,e,a[t]()))})}}),M.forEach(function(e,n){var r=n%2;$.fn[e]=function(){var e,i=$.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:U.fragment(n)}),o,a=this.length>1;return i.length<1?this:this.each(function(t,e){o=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=$.contains(N.documentElement,o);i.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!o)return $(t).remove();o.insertBefore(t,e),s&&b(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},$.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return $(t)[e](this),this}}),U.Z.prototype=$.fn,U.uniq=X,U.deserializeValue=x,$.zepto=U,$}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function($){function t(t,e,n){var r=$.Event(e);return $(t).trigger(r,n),!r.isDefaultPrevented()}function e(e,n,r,i){return e.global?t(n||m,r,i):void 0}function n(t){t.global&&0===$.active++&&e(t,null,"ajaxStart")}function r(t){t.global&&!--$.active&&e(t,null,"ajaxStop")}function i(t,n){var r=n.context;return n.beforeSend.call(r,t,n)===!1||e(n,r,"ajaxBeforeSend",[t,n])===!1?!1:void e(n,r,"ajaxSend",[t,n])}function o(t,n,r,i){var o=r.context,a="success";r.success.call(o,t,a,n),i&&i.resolveWith(o,[t,a,n]),e(r,o,"ajaxSuccess",[n,r,t]),s(a,n,r)}function a(t,n,r,i,o){var a=i.context;i.error.call(a,r,n,t),o&&o.rejectWith(a,[r,n,t]),e(i,a,"ajaxError",[r,i,t||n]),s(n,r,i)}function s(t,n,i){var o=i.context;i.complete.call(o,n,t),e(i,o,"ajaxComplete",[n,i]),r(i)}function u(){}function c(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==w?"json":x.test(t)?"script":b.test(t)&&"xml")||"text"}function l(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function f(t){t.processData&&t.data&&"string"!=$.type(t.data)&&(t.data=$.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()||(t.url=l(t.url,t.data),t.data=void 0)}function h(t,e,n,r){return $.isFunction(e)&&(r=n,n=e,e=void 0),$.isFunction(n)||(r=n,n=void 0),{url:t,data:e,success:n,dataType:r}}function p(t,e,n,r){var i,o=$.isArray(e),a=$.isPlainObject(e);$.each(e,function(e,s){i=$.type(s),r&&(e=n?r:r+"["+(a||"object"==i||"array"==i?e:"")+"]"),!r&&o?t.add(s.name,s.value):"array"==i||!n&&"object"==i?p(t,s,n,e):t.add(e,s)})}var d=0,m=window.document,v,g,y=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,b=/^(?:text|application)\/xml/i,w="application/json",E="text/html",j=/^\s*$/;$.active=0,$.ajaxJSONP=function(t,e){if(!("type"in t))return $.ajax(t);var n=t.jsonpCallback,r=($.isFunction(n)?n():n)||"jsonp"+ ++d,s=m.createElement("script"),u=window[r],c,l=function(t){$(s).triggerHandler("error",t||"abort")},f={abort:l},h;return e&&e.promise(f),$(s).on("load error",function(n,i){clearTimeout(h),$(s).off().remove(),"error"!=n.type&&c?o(c[0],f,t,e):a(null,i||"error",f,t,e),window[r]=u,c&&$.isFunction(u)&&u(c[0]),u=c=void 0}),i(f,t)===!1?(l("abort"),f):(window[r]=function(){c=arguments},s.src=t.url.replace(/\?(.+)=\?/,"?$1="+r),m.head.appendChild(s),t.timeout>0&&(h=setTimeout(function(){l("timeout")},t.timeout)),f)},$.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:w,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},$.ajax=function(t){var e=$.extend({},t||{}),r=$.Deferred&&$.Deferred();for(v in $.ajaxSettings)void 0===e[v]&&(e[v]=$.ajaxSettings[v]);n(e),e.crossDomain||(e.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(e.url)&&RegExp.$2!=window.location.host),e.url||(e.url=window.location.toString()),f(e);var s=e.dataType,h=/\?.+=\?/.test(e.url);if(h&&(s="jsonp"),e.cache!==!1&&(t&&t.cache===!0||"script"!=s&&"jsonp"!=s)||(e.url=l(e.url,"_="+Date.now())),"jsonp"==s)return h||(e.url=l(e.url,e.jsonp?e.jsonp+"=?":e.jsonp===!1?"":"callback=?")),$.ajaxJSONP(e,r);var p=e.accepts[s],d={},m=function(t,e){d[t.toLowerCase()]=[t,e]},y=/^([\w-]+:)\/\//.test(e.url)?RegExp.$1:window.location.protocol,x=e.xhr(),b=x.setRequestHeader,w;if(r&&r.promise(x),e.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",p||"*/*"),(p=e.mimeType||p)&&(p.indexOf(",")>-1&&(p=p.split(",",2)[0]),x.overrideMimeType&&x.overrideMimeType(p)),(e.contentType||e.contentType!==!1&&e.data&&"GET"!=e.type.toUpperCase())&&m("Content-Type",e.contentType||"application/x-www-form-urlencoded"),e.headers)for(g in e.headers)m(g,e.headers[g]);if(x.setRequestHeader=m,x.onreadystatechange=function(){if(4==x.readyState){x.onreadystatechange=u,clearTimeout(w);var t,n=!1;if(x.status>=200&&x.status<300||304==x.status||0==x.status&&"file:"==y){s=s||c(e.mimeType||x.getResponseHeader("content-type")),t=x.responseText;try{"script"==s?(1,eval)(t):"xml"==s?t=x.responseXML:"json"==s&&(t=j.test(t)?null:$.parseJSON(t))}catch(i){n=i}n?a(n,"parsererror",x,e,r):o(t,x,e,r)}else a(x.statusText||null,x.status?"error":"abort",x,e,r)}},i(x,e)===!1)return x.abort(),a(null,"abort",x,e,r),x;if(e.xhrFields)for(g in e.xhrFields)x[g]=e.xhrFields[g];var E="async"in e?e.async:!0;x.open(e.type,e.url,E,e.username,e.password);for(g in d)b.apply(x,d[g]);return e.timeout>0&&(w=setTimeout(function(){x.onreadystatechange=u,x.abort(),a(null,"timeout",x,e,r)},e.timeout)),x.send(e.data?e.data:null),x},$.get=function(){return $.ajax(h.apply(null,arguments))},$.post=function(){var t=h.apply(null,arguments);return t.type="POST",$.ajax(t)},$.getJSON=function(){var t=h.apply(null,arguments);return t.dataType="json",$.ajax(t)},$.fn.load=function(t,e,n){if(!this.length)return this;var r=this,i=t.split(/\s/),o,a=h(t,e,n),s=a.success;return i.length>1&&(a.url=i[0],o=i[1]),a.success=function(t){r.html(o?$("<div>").html(t.replace(y,"")).find(o):t),s&&s.apply(r,arguments)},$.ajax(a),this};var C=encodeURIComponent;$.param=function(t,e){var n=[];return n.add=function(t,e){this.push(C(t)+"="+C(e))},p(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function($){function t(t,n){var s=t[a],u=s&&r[s];if(void 0===n)return u||e(t);if(u){if(n in u)return u[n];var c=o(n);if(c in u)return u[c]}return i.call($(t),n)}function e(t,e,i){var s=t[a]||(t[a]=++$.uuid),u=r[s]||(r[s]=n(t));return void 0!==e&&(u[o(e)]=i),u}function n(t){var e={};return $.each(t.attributes||s,function(t,n){0==n.name.indexOf("data-")&&(e[o(n.name.replace("data-",""))]=$.zepto.deserializeValue(n.value))}),e}var r={},i=$.fn.data,o=$.camelCase,a=$.expando="Zepto"+ +new Date,s=[];$.fn.data=function(n,r){return void 0===r?$.isPlainObject(n)?this.each(function(t,r){$.each(n,function(t,n){e(r,t,n)})}):0 in this?t(this[0],n):void 0:this.each(function(){e(this,n,r)})},$.fn.removeData=function(t){return"string"==typeof t&&(t=t.split(/\s+/)),this.each(function(){var e=this[a],n=e&&r[e];n&&$.each(t||n,function(e){delete n[t?o(this):e]})})},["remove","empty"].forEach(function(t){var e=$.fn[t];$.fn[t]=function(){var n=this.find("*");return"remove"===t&&(n=n.add(this)),n.removeData(),e.call(this)}})}(Zepto),function($){function t(t){return t._zid||(t._zid=l++)}function e(e,i,o,a){if(i=n(i),i.ns)var s=r(i.ns);return(m[t(e)]||[]).filter(function(e){return!(!e||i.e&&e.e!=i.e||i.ns&&!s.test(e.ns)||o&&t(e.fn)!==t(o)||a&&e.sel!=a)})}function n(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function i(t,e){return t.del&&!g&&t.e in y||!!e}function o(t){return x[t]||g&&y[t]||t}function a(e,r,a,s,c,l,h){var p=t(e),d=m[p]||(m[p]=[]);r.split(/\s/).forEach(function(t){if("ready"==t)return $(document).ready(a);var r=n(t);r.fn=a,r.sel=c,r.e in x&&(a=function(t){var e=t.relatedTarget;return!e||e!==this&&!$.contains(this,e)?r.fn.apply(this,arguments):void 0}),r.del=l;var p=l||a;r.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=s;var n=p.apply(e,t._args==f?[t]:[t].concat(t._args));return n===!1&&(t.preventDefault(),t.stopPropagation()),n}},r.i=d.length,d.push(r),"addEventListener"in e&&e.addEventListener(o(r.e),r.proxy,i(r,h))})}function s(n,r,a,s,u){var c=t(n);(r||"").split(/\s/).forEach(function(t){e(n,t,a,s).forEach(function(t){delete m[c][t.i],"removeEventListener"in n&&n.removeEventListener(o(t.e),t.proxy,i(t,u))})})}function u(t,e){return(e||!t.isDefaultPrevented)&&(e||(e=t),$.each(j,function(n,r){var i=e[n];t[n]=function(){return this[r]=b,i&&i.apply(e,arguments)},t[r]=w}),(e.defaultPrevented!==f?e.defaultPrevented:"returnValue"in e?e.returnValue===!1:e.getPreventDefault&&e.getPreventDefault())&&(t.isDefaultPrevented=b)),t}function c(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var l=1,f,h=Array.prototype.slice,p=$.isFunction,d=function(t){return"string"==typeof t},m={},v={},g="onfocusin"in window,y={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",$.event={add:a,remove:s},$.proxy=function(e,n){var r=2 in arguments&&h.call(arguments,2);if(p(e)){var i=function(){return e.apply(n,r?r.concat(h.call(arguments)):arguments)};return i._zid=t(e),i}if(d(n))return r?(r.unshift(e[n],e),$.proxy.apply(null,r)):$.proxy(e[n],e);throw new TypeError("expected function")},$.fn.bind=function(t,e,n){return this.on(t,e,n)},$.fn.unbind=function(t,e){return this.off(t,e)},$.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var b=function(){return!0},w=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,j={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};$.fn.delegate=function(t,e,n){return this.on(e,t,n)},$.fn.undelegate=function(t,e,n){return this.off(e,t,n)},$.fn.live=function(t,e){return $(document.body).delegate(this.selector,t,e),this},$.fn.die=function(t,e){return $(document.body).undelegate(this.selector,t,e),this},$.fn.on=function(t,e,n,r,i){var o,u,l=this;return t&&!d(t)?($.each(t,function(t,r){l.on(t,e,n,r,i)}),l):(d(e)||p(r)||r===!1||(r=n,n=e,e=f),(p(n)||n===!1)&&(r=n,n=f),r===!1&&(r=w),l.each(function(l,f){i&&(o=function(t){return s(f,t.type,r),r.apply(this,arguments)}),e&&(u=function(t){var n,i=$(t.target).closest(e,f).get(0);return i&&i!==f?(n=$.extend(c(t),{currentTarget:i,liveFired:f}),(o||r).apply(i,[n].concat(h.call(arguments,1)))):void 0}),a(f,t,r,n,e,u||o)}))},$.fn.off=function(t,e,n){var r=this;return t&&!d(t)?($.each(t,function(t,n){r.off(t,e,n)}),r):(d(e)||p(n)||n===!1||(n=e,e=f),n===!1&&(n=w),r.each(function(){s(this,t,n,e)}))},$.fn.trigger=function(t,e){return t=d(t)||$.isPlainObject(t)?$.Event(t):u(t),t._args=e,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(t):$(this).triggerHandler(t,e)})},$.fn.triggerHandler=function(t,n){var r,i;return this.each(function(o,a){r=c(d(t)?$.Event(t):t),r._args=n,r.target=a,$.each(e(a,t.type||t),function(t,e){return i=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),i},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t){$.fn[t]=function(e){return e?this.bind(t,e):this.trigger(t)}}),["focus","blur"].forEach(function(t){$.fn[t]=function(e){return e?this.bind(t,e):this.each(function(){try{this[t]()}catch(e){}}),this}}),$.Event=function(t,e){d(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),u(n)}}(Zepto),function($){$.fn.serializeArray=function(){var t,e,n=[];return $([].slice.call(this.get(0).elements)).each(function(){t=$(this),e=t.attr("type"),"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=e&&"reset"!=e&&"button"!=e&&("radio"!=e&&"checkbox"!=e||this.checked)&&n.push({name:t.attr("name"),value:t.val()})}),n},$.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},$.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var e=$.Event("submit");this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function($){"__proto__"in{}||$.extend($.zepto,{Z:function(t,e){return t=t||[],$.extend(t,$.fn),t.selector=e||"",t.__Z=!0,t},isZ:function(t){return"array"===$.type(t)&&"__Z"in t}});try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(n){return null}}}}(Zepto);