(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[205],{1851:function(){},239:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(7437),o=r(2265);t.default=function(e){let{html:t,height:r=null,width:a=null,children:i,dataNtpc:u=""}=e;return(0,o.useEffect)(()=>{u&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(u)}})},[u]),(0,n.jsxs)(n.Fragment,{children:[i,t?(0,n.jsx)("div",{style:{height:null!=r?"".concat(r,"px"):"auto",width:null!=a?"".concat(a,"px"):"auto"},"data-ntpc":u,dangerouslySetInnerHTML:{__html:t}}):null]})}},4404:function(e,t,r){"use strict";var n;let o;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=void 0;let a=r(7437),i=r(2265),u=(n=r(1877))&&n.__esModule?n:{default:n};t.GoogleAnalytics=function(e){let{gaId:t,dataLayerName:r="dataLayer"}=e;return void 0===o&&(o=r),(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(r,"'] = window['").concat(r,"'] || [];\n          function gtag(){window['").concat(r,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"');")}}),(0,a.jsx)(u.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];if(void 0===o){console.warn("@next/third-parties: GA has not been initialized");return}window[o]?window[o].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(o," does not exist"))}},7640:function(e,t,r){"use strict";var n;let o;Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=t.GoogleTagManager=void 0;let a=r(7437),i=r(2265),u=(n=r(1877))&&n.__esModule?n:{default:n};t.GoogleTagManager=function(e){let{gtmId:t,dataLayerName:r="dataLayer",auth:n,preview:s,dataLayer:l}=e;void 0===o&&(o=r);let c="dataLayer"!==r?"&l=".concat(r):"";return(0,i.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(l?"w[l].push(".concat(JSON.stringify(l),")"):"","\n      })(window,'").concat(r,"');")}}),(0,a.jsx)(u.default,{id:"_next-gtm","data-ntpc":"GTM",src:"https://www.googletagmanager.com/gtm.js?id=".concat(t).concat(c).concat(n?"&gtm_auth=".concat(n):"").concat(s?"&gtm_preview=".concat(s,"&gtm_cookies_win=x"):"")})]})},t.sendGTMEvent=e=>{if(void 0===o){console.warn("@next/third-parties: GTM has not been initialized");return}window[o]?window[o].push(e):console.warn("@next/third-parties: GTM dataLayer ".concat(o," does not exist"))}},9137:function(e,t,r){"use strict";/*!
 * negotiator
 * Copyright(c) 2012 Federico Romero
 * Copyright(c) 2012-2014 Isaac Z. Schlueter
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var n=r(5627),o=r(5879),a=r(3682),i=r(4068);function u(e){if(!(this instanceof u))return new u(e);this.request=e}e.exports=u,e.exports.Negotiator=u,u.prototype.charset=function(e){var t=this.charsets(e);return t&&t[0]},u.prototype.charsets=function(e){return n(this.request.headers["accept-charset"],e)},u.prototype.encoding=function(e){var t=this.encodings(e);return t&&t[0]},u.prototype.encodings=function(e){return o(this.request.headers["accept-encoding"],e)},u.prototype.language=function(e){var t=this.languages(e);return t&&t[0]},u.prototype.languages=function(e){return a(this.request.headers["accept-language"],e)},u.prototype.mediaType=function(e){var t=this.mediaTypes(e);return t&&t[0]},u.prototype.mediaTypes=function(e){return i(this.request.headers.accept,e)},u.prototype.preferredCharset=u.prototype.charset,u.prototype.preferredCharsets=u.prototype.charsets,u.prototype.preferredEncoding=u.prototype.encoding,u.prototype.preferredEncodings=u.prototype.encodings,u.prototype.preferredLanguage=u.prototype.language,u.prototype.preferredLanguages=u.prototype.languages,u.prototype.preferredMediaType=u.prototype.mediaType,u.prototype.preferredMediaTypes=u.prototype.mediaTypes},5627:function(e){"use strict";e.exports=r,e.exports.preferredCharsets=r;var t=/^\s*([^\s;]+)\s*(?:;(.*))?$/;function r(e,r){var i=function(e){for(var r=e.split(","),n=0,o=0;n<r.length;n++){var a=function(e,r){var n=t.exec(e);if(!n)return null;var o=n[1],a=1;if(n[2])for(var i=n[2].split(";"),u=0;u<i.length;u++){var s=i[u].trim().split("=");if("q"===s[0]){a=parseFloat(s[1]);break}}return{charset:o,q:a,i:r}}(r[n].trim(),n);a&&(r[o++]=a)}return r.length=o,r}(void 0===e?"*":e||"");if(!r)return i.filter(a).sort(n).map(o);var u=r.map(function(e,t){return function(e,t,r){for(var n={o:-1,q:0,s:0},o=0;o<t.length;o++){var a=function(e,t,r){var n=0;if(t.charset.toLowerCase()===e.toLowerCase())n|=1;else if("*"!==t.charset)return null;return{i:r,o:t.i,q:t.q,s:n}}(e,t[o],r);a&&0>(n.s-a.s||n.q-a.q||n.o-a.o)&&(n=a)}return n}(e,i,t)});return u.filter(a).sort(n).map(function(e){return r[u.indexOf(e)]})}function n(e,t){return t.q-e.q||t.s-e.s||e.o-t.o||e.i-t.i||0}function o(e){return e.charset}function a(e){return e.q>0}},5879:function(e){"use strict";e.exports=n,e.exports.preferredEncodings=n;var t=/^\s*([^\s;]+)\s*(?:;(.*))?$/;function r(e,t,r){var n=0;if(t.encoding.toLowerCase()===e.toLowerCase())n|=1;else if("*"!==t.encoding)return null;return{i:r,o:t.i,q:t.q,s:n}}function n(e,n){var u=function(e){for(var n=e.split(","),o=!1,a=1,i=0,u=0;i<n.length;i++){var s=function(e,r){var n=t.exec(e);if(!n)return null;var o=n[1],a=1;if(n[2])for(var i=n[2].split(";"),u=0;u<i.length;u++){var s=i[u].trim().split("=");if("q"===s[0]){a=parseFloat(s[1]);break}}return{encoding:o,q:a,i:r}}(n[i].trim(),i);s&&(n[u++]=s,o=o||r("identity",s),a=Math.min(a,s.q||1))}return o||(n[u++]={encoding:"identity",q:a,i:i}),n.length=u,n}(e||"");if(!n)return u.filter(i).sort(o).map(a);var s=n.map(function(e,t){return function(e,t,n){for(var o={o:-1,q:0,s:0},a=0;a<t.length;a++){var i=r(e,t[a],n);i&&0>(o.s-i.s||o.q-i.q||o.o-i.o)&&(o=i)}return o}(e,u,t)});return s.filter(i).sort(o).map(function(e){return n[s.indexOf(e)]})}function o(e,t){return t.q-e.q||t.s-e.s||e.o-t.o||e.i-t.i||0}function a(e){return e.encoding}function i(e){return e.q>0}},3682:function(e){"use strict";e.exports=n,e.exports.preferredLanguages=n;var t=/^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;function r(e,r){var n=t.exec(e);if(!n)return null;var o=n[1],a=n[2],i=o;a&&(i+="-"+a);var u=1;if(n[3])for(var s=n[3].split(";"),l=0;l<s.length;l++){var c=s[l].split("=");"q"===c[0]&&(u=parseFloat(c[1]))}return{prefix:o,suffix:a,q:u,i:r,full:i}}function n(e,t){var n=function(e){for(var t=e.split(","),n=0,o=0;n<t.length;n++){var a=r(t[n].trim(),n);a&&(t[o++]=a)}return t.length=o,t}(void 0===e?"*":e||"");if(!t)return n.filter(i).sort(o).map(a);var u=t.map(function(e,t){return function(e,t,n){for(var o={o:-1,q:0,s:0},a=0;a<t.length;a++){var i=function(e,t,n){var o=r(e);if(!o)return null;var a=0;if(t.full.toLowerCase()===o.full.toLowerCase())a|=4;else if(t.prefix.toLowerCase()===o.full.toLowerCase())a|=2;else if(t.full.toLowerCase()===o.prefix.toLowerCase())a|=1;else if("*"!==t.full)return null;return{i:n,o:t.i,q:t.q,s:a}}(e,t[a],n);i&&0>(o.s-i.s||o.q-i.q||o.o-i.o)&&(o=i)}return o}(e,n,t)});return u.filter(i).sort(o).map(function(e){return t[u.indexOf(e)]})}function o(e,t){return t.q-e.q||t.s-e.s||e.o-t.o||e.i-t.i||0}function a(e){return e.full}function i(e){return e.q>0}},4068:function(e){"use strict";e.exports=n,e.exports.preferredMediaTypes=n;var t=/^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;function r(e,r){var n=t.exec(e);if(!n)return null;var o=Object.create(null),a=1,i=n[2],l=n[1];if(n[3])for(var c=(function(e){for(var t=e.split(";"),r=1,n=0;r<t.length;r++)u(t[n])%2==0?t[++n]=t[r]:t[n]+=";"+t[r];t.length=n+1;for(var r=0;r<t.length;r++)t[r]=t[r].trim();return t})(n[3]).map(s),f=0;f<c.length;f++){var d=c[f],p=d[0].toLowerCase(),g=d[1],h=g&&'"'===g[0]&&'"'===g[g.length-1]?g.substr(1,g.length-2):g;if("q"===p){a=parseFloat(h);break}o[p]=h}return{type:l,subtype:i,params:o,q:a,i:r}}function n(e,t){var n=function(e){for(var t=function(e){for(var t=e.split(","),r=1,n=0;r<t.length;r++)u(t[n])%2==0?t[++n]=t[r]:t[n]+=","+t[r];return t.length=n+1,t}(e),n=0,o=0;n<t.length;n++){var a=r(t[n].trim(),n);a&&(t[o++]=a)}return t.length=o,t}(void 0===e?"*/*":e||"");if(!t)return n.filter(i).sort(o).map(a);var s=t.map(function(e,t){return function(e,t,n){for(var o={o:-1,q:0,s:0},a=0;a<t.length;a++){var i=function(e,t,n){var o=r(e),a=0;if(!o)return null;if(t.type.toLowerCase()==o.type.toLowerCase())a|=4;else if("*"!=t.type)return null;if(t.subtype.toLowerCase()==o.subtype.toLowerCase())a|=2;else if("*"!=t.subtype)return null;var i=Object.keys(t.params);if(i.length>0){if(!i.every(function(e){return"*"==t.params[e]||(t.params[e]||"").toLowerCase()==(o.params[e]||"").toLowerCase()}))return null;a|=1}return{i:n,o:t.i,q:t.q,s:a}}(e,t[a],n);i&&0>(o.s-i.s||o.q-i.q||o.o-i.o)&&(o=i)}return o}(e,n,t)});return s.filter(i).sort(o).map(function(e){return t[s.indexOf(e)]})}function o(e,t){return t.q-e.q||t.s-e.s||e.o-t.o||e.i-t.i||0}function a(e){return e.type+"/"+e.subtype}function i(e){return e.q>0}function u(e){for(var t=0,r=0;-1!==(r=e.indexOf('"',r));)t++,r++;return t}function s(e){var t,r,n=e.indexOf("=");return -1===n?t=e:(t=e.substr(0,n),r=e.substr(n+1)),[t,r]}},6463:function(e,t,r){"use strict";var n=r(1169);r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},1877:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o.a}});var n=r(4080),o=r.n(n),a={};for(var i in n)"default"!==i&&(a[i]=(function(e){return n[e]}).bind(0,i));r.d(t,a)},905:function(e,t){"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DOMAttributeNames:function(){return n},default:function(){return i},isEqualNode:function(){return a}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:r}=e,o=document.createElement(t);for(let e in r){if(!r.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===r[e])continue;let a=n[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?o[a]=!!r[e]:o.setAttribute(a,r[e])}let{children:a,dangerouslySetInnerHTML:i}=r;return i?o.innerHTML=i.__html||"":a&&(o.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),o}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let r=t.getAttribute("nonce");if(r&&!e.getAttribute("nonce")){let n=t.cloneNode(!0);return n.setAttribute("nonce",""),n.nonce=r,r===e.nonce&&e.isEqualNode(n)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let r=t[e.type]||[];r.push(e),t[e.type]=r});let n=t.title?t.title[0]:null,o="";if(n){let{children:e}=n.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{r(e,t[e]||[])})}}}r=(e,t)=>{let r=document.getElementsByTagName("head")[0],n=r.querySelector("meta[name=next-head-count]"),i=Number(n.content),u=[];for(let t=0,r=n.previousElementSibling;t<i;t++,r=(null==r?void 0:r.previousElementSibling)||null){var s;(null==r?void 0:null==(s=r.tagName)?void 0:s.toLowerCase())===e&&u.push(r)}let l=t.map(o).filter(e=>{for(let t=0,r=u.length;t<r;t++)if(a(u[t],e))return u.splice(t,1),!1;return!0});u.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),l.forEach(e=>r.insertBefore(e,n)),n.content=(i-u.length+l.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9189:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return _},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return v}});let n=r(9920),o=r(1452),a=r(7437),i=n._(r(4887)),u=o._(r(2265)),s=r(6590),l=r(905),c=r(9189),f=new Map,d=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],g=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}},h=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:o=null,dangerouslySetInnerHTML:a,children:i="",strategy:u="afterInteractive",onError:s,stylesheets:c}=e,h=r||t;if(h&&d.has(h))return;if(f.has(t)){d.add(h),f.get(t).then(n,s);return}let y=()=>{o&&o(),d.add(h)},v=document.createElement("script"),m=new Promise((e,t)=>{v.addEventListener("load",function(t){e(),n&&n.call(this,t),y()}),v.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[r,n]of(a?(v.innerHTML=a.__html||"",y()):i?(v.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",y()):t&&(v.src=t,f.set(t,m)),Object.entries(e))){if(void 0===n||p.includes(r))continue;let e=l.DOMAttributeNames[r]||r.toLowerCase();v.setAttribute(e,n)}"worker"===u&&v.setAttribute("type","text/partytown"),v.setAttribute("data-nscript",u),c&&g(c),document.body.appendChild(v)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))}):h(e)}function v(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}function m(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:o=null,strategy:l="afterInteractive",onError:f,stylesheets:p,...g}=e,{updateScripts:y,scripts:v,getIsSsr:m,appDir:_,nonce:w}=(0,u.useContext)(s.HeadManagerContext),b=(0,u.useRef)(!1);(0,u.useEffect)(()=>{let e=t||r;b.current||(o&&e&&d.has(e)&&o(),b.current=!0)},[o,t,r]);let x=(0,u.useRef)(!1);if((0,u.useEffect)(()=>{!x.current&&("afterInteractive"===l?h(e):"lazyOnload"===l&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>h(e))})),x.current=!0)},[e,l]),("beforeInteractive"===l||"worker"===l)&&(y?(v[l]=(v[l]||[]).concat([{id:t,src:r,onLoad:n,onReady:o,onError:f,...g}]),y(v)):m&&m()?d.add(t||r):m&&!m()&&h(e)),_){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===l)return r?(i.default.preload(r,g.integrity?{as:"script",integrity:g.integrity,nonce:w}:{as:"script",nonce:w}),(0,a.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([r,{...g,id:t}])+")"}})):(g.dangerouslySetInnerHTML&&(g.children=g.dangerouslySetInnerHTML.__html,delete g.dangerouslySetInnerHTML),(0,a.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...g,id:t}])+")"}}));"afterInteractive"===l&&r&&i.default.preload(r,g.integrity?{as:"script",integrity:g.integrity,nonce:w}:{as:"script",nonce:w})}return null}Object.defineProperty(m,"__nextScript",{value:!0});let _=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1349:function(e){e.exports={style:{fontFamily:"'__Plus_Jakarta_Sans_bef233', '__Plus_Jakarta_Sans_Fallback_bef233'",fontStyle:"normal"},className:"__className_bef233"}}}]);