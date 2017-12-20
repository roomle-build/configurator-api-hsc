(function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()})(0,function(){"use strict"
var n="https://www.roomle.com/app/assets/hsc",t="1.0.0.5",e=document.body.style.position,o=document.body.style.overflowY,i=document.body.style.width,r=function(){e=document.body.style.position,o=document.body.style.overflowY,i=document.body.style.width
var n=document.body.scrollHeight>document.body.clientHeight,t=document.body.currentStyle||window.getComputedStyle(document.body,"")
n="visible"==t.overflow||"visible"==t.overflowY||n&&"auto"==t.overflow||n&&"auto"==t.overflowY,document.body.style.position="fixed",document.body.style.overflowY=n?"scroll":"hidden",document.body.style.width="100%"},u=function(){document.body.style.position=e,document.body.style.overflowY=o,document.body.style.width=i},s=n;(function(n,e){window.RoomleConfigurator=function(n,e){return Array.isArray||(Array.isArray=function(n){return"[object Array]"===Object.prototype.toString.call(n)}),{n:function(){},t:!1,e:null,o:{},i:{},r:0,u:null,s:'<iframe src="@url@" style="width:100%;height:100%;border:none;"></iframe>',a:null,c:{},f:function(n){if(n&&n.data){var t=n.data
if("string"==typeof n.data)try{t=JSON.parse(n.data)}catch(n){t=null}if(Array.isArray(t)&&-1!==t[0].indexOf("MessageFromRoomle")){var e=t.shift().split(".")[1]
return this.d(e,t)}}},d:function(n,t){if("booted"===n)return this.l(["dispatch.init",this.u])
if("initDone"===n)return this.n()
if(0===n.indexOf("event::")){var e=n.split("::")[1]
return this.h(e,t)}var o=t.shift()
if("resolve"===n){var i=this.o[o]
if("function"==typeof i)return i.apply(i,t)}if("toggleFullscreen"===n&&(this.t?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():this.e.requestFullscreen?this.e.requestFullscreen():this.e.webkitRequestFullscreen&&this.e.webkitRequestFullscreen()),"reject"===n){var r=this.i[o]
if("function"==typeof r)return r.apply(r,t)}},h:function(n,t){var e=this.c[n]
if(e&&e.length)for(var o=0,i=e.length;o<i;o++){var r=e[o]
r.apply(r,t)}},l:function(n,t,e){this.r++,this.o[this.r]=t,this.i[this.r]=e
var o=[this.r];[].push.apply(o,n),this.a.postMessage(JSON.stringify(o),"*")},m:function(n){var t="loadConfigurationById",e=null
"string"==typeof n?"{"===n[0]?t="loadConfiguration":(t="loadConfigurationById",e=n):n.isItem&&(t="loadConfigurableItemById",e=n.id)
var o={method:t,id:e}
return e&&(o.preloadId=e),o},g:function(){var n=!1;(document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement)&&(n=!0),this.t=n,this.l(["dispatch.fullscreenChange",n])},v:function(n){var t=s,e=-1===s.indexOf("?")?"?":"&"
for(var o in n)n.hasOwnProperty(o)&&(t+=e+o+"="+n[o],e="&")
return this.s.replace("@url@",t)},apiVersion:t,init:function(t,o,i,s,a){var c=e.getElementById(o)
c.innerHTML=this.v(s),this.e=c
var f=c.firstElementChild
f.addEventListener("mouseenter",r),f.addEventListener("mouseleave",u)
var d=this.g.bind(this);["fullscreenerror","webkitfullscreenerror","mozfullscreenerror","MSFullscreenError"].forEach(function(n){document.addEventListener(n,d)})
var l=this.g.bind(this);["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].forEach(function(n){document.addEventListener(n,l)}),this.u=this.m(i),"function"==typeof a&&(this.n=a),(f||f.contentWindow)&&(this.a=f.contentWindow,n.addEventListener("message",this.f.bind(this),!1))},loadConfigurationId:function(n,t,e,o){"function"==typeof t&&(o=e=t),this.l(["loadConfigurationById",n,t],e,o)},loadConfiguration:function(n,t,e,o){"function"==typeof t&&(o=e=t),this.l(["loadConfiguration",n,t],e,o)},loadConfigurableItemId:function(n,t,e,o){"function"==typeof t&&(o=e=t),this.l(["loadConfigurableItemById",n,t],e,o)},addChangeListener:function(n){var t="onPartListUpdate"
this.c[t]||(this.c[t]=[]),this.c[t].push(n)},generateImagesOfCurrentConfiguration:function(n,t){this.l(["proxy.generateImagesOfCurrentConfiguration"],n,t)},saveCurrentConfiguration:function(n,t){this.l(["proxy.saveCurrentConfiguration"],n,t)},getCurrentConfigurationId:function(n,t){this.l(["proxy.getCurrentConfigurationId"],n,t)},removeChangeListener:function(n){for(var t=this.c.onPartListUpdate,e=t.length,o=0;o<e;o++)if(t[o]===n)return void t.splice(o,1)}}}(n,e)})(window,document)})
