!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueSwiper=t():e.VueSwiper=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){var r,i;n(1),r=n(5),i=n(6),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.id,r,""]]);n(4)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".swiper{overflow:hidden}.swiper .swiper-wrap{-webkit-transition:all .5s ease;transition:all .5s ease;height:100%}.swiper .swiper-wrap.dragging{-webkit-transition:none;transition:none}.swiper .swiper-wrap>div{overflow:hidden;height:100%}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=d[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(u(r.parts[o],t))}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(u(r.parts[o],t));d[r.id]={id:r.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],s=i[1],a=i[2],u=i[3],h={css:s,media:a,sourceMap:u};n[o]?n[o].parts.push(h):t.push(n[o]={id:o,parts:[h]})}return t}function o(e,t){var n=f(),r=m[m.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function u(e,t){var n,r,i;if(t.singleton){var o=g++;n=v||(v=a(t)),r=h.bind(null,n,o,!1),i=h.bind(null,n,o,!0)}else n=a(t),r=c.bind(null,n),i=function(){s(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function h(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function c(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},l=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,m=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=l()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return r(n,t),function(e){for(var o=[],s=0;s<n.length;s++){var a=n[s],u=d[a.id];u.refs--,o.push(u)}if(e){var h=i(e);r(h,t)}for(var s=0;s<o.length;s++){var u=o[s];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete d[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{performanceMode:!1},data:function(){return{currentPage:1,childrenCount:null,translateY:0,height:0,dragging:!1}},ready:function(){this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.childrenCount=this.$el.querySelectorAll(".swiper-wrap>div").length,this.height=this.$el.clientHeight},methods:{onTouchStart:function(e){this.startY=this.getPageY(e),this.startTranslateY=this.translateY,this.startTime=(new Date).getTime(),this.dragging=!0,document.addEventListener("touchmove",this.onTouchMove),document.addEventListener("touchend",this.onTouchEnd),document.addEventListener("mousemove",this.onTouchMove),document.addEventListener("mouseup",this.onTouchEnd)},onTouchMove:function(e){this.deltaY=this.getPageY(e)-this.startY,this.performanceMode||(this.translateY=this.startTranslateY+this.deltaY)},onTouchEnd:function(e){this.dragging=!1;var t=(new Date).getTime()-this.startTime<1e3;this.deltaY<-100||t&&this.deltaY<-15?this.next():this.deltaY>100||t&&this.deltaY>15?this.prev():this.revert(),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd),document.removeEventListener("mousemove",this.onTouchMove),document.removeEventListener("mouseup",this.onTouchEnd)},next:function(){var e=this.currentPage;this.currentPage<this.childrenCount&&e++,this.setPage(e)},prev:function(){var e=this.currentPage;this.currentPage>1&&e--,this.setPage(e)},revert:function(){this.setPage(this.currentPage)},setPage:function(e){this.currentPage=e,this.translateY=-(this.currentPage-1)*this.height},getPageY:function(e){return e.changedTouches?e.changedTouches[0].pageY:e.pageY}}}},function(e,t){e.exports="<div class=swiper> <div class=swiper-wrap :class=\"{ 'dragging': dragging }\" :style=\"{transform: 'translateY(' + translateY + 'px)'}\" @touchstart=onTouchStart @mousedown=onTouchStart> <slot></slot> </div> </div>"}])});