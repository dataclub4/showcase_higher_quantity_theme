!function(e){"use strict";const t=setInterval((()=>{window.ST_GLOBALS&&(clearInterval(t),i().then((()=>console.info("ST Cookie Banner loaded"))))}));class o{constructor(t){this.editor=t,this.divCookie=e.createElement("div")}render(){const{id:e,editor:t,html:o,css:n}=this.editor;let i="";return t.showPrivacy&&(i=`<a href="${t?.privacyLink}" target="_blank" class="st-link">${window.ST_GLOBALS.translate(t?.privacyText)}</a>`),this.divCookie.innerHTML=o,Object.keys(t?.mapping).map((e=>{let o=window.ST_GLOBALS.translate(t?.mapping[e]);-1!==o.indexOf("{{POLICY}}")&&(o=o.replace("{{POLICY}}",i)),this.divCookie.querySelector(e).innerHTML=o})),{id:e,editor:t,html:o,css:n,fontFamily:this.editor?.editor?.fontFamily,divCookie:this.divCookie}}}const n={},i=async function(){if(!window.ST_PLAN||"ACTIVE"!==window.ST_PLAN?.status||"Free"===window.ST_PLAN?.name)return;const e=window.ST_COOKIEBANNERS||[];if(0===e.length)return;const t=[];let i="";e.map((e=>{const{status:s=!1}=e;if(s){const s=new o(e).render();n[s.id]=s;const c=s.fontFamily;if("object"==typeof c&&c?.fontFamily){0===t.filter((e=>e.fontFamily===c.fontFamily&&parseInt(e.fontWeight)===parseInt(c.fontWeight))).length&&t.push(c)}const r=s.css;i+=r}})),i+=".st-cookie-banner {display: flex;align-items: center;justify-content: space-between;line-height: 1.5;position: fixed;z-index: 1;}.st-cookie-banner.full-width {width: 100%;}.st-cookie-banner.box-width {flex-direction: column;}.st-cookie-banner .cookie-text {display: flex;align-items: center;}.st-cookie-banner.box-width .cookie-text {flex-direction: column;}.st-cookie-banner .cookie-svg {display: flex;}.st-cookie-banner.box-width .cookie-text .cookie-des {text-align: center;}@media (min-width: 768px) {.st-cookie-banner .cookie-text .cookie-des { max-width: 80%;}}.st-cookie-banner .cookie-text .cookie-des a {display: inline-block;text-decoration: underline;font-weight: bold !important;cursor: pointer;}.st-cookie-banner .cookie-button {display: flex;align-items: center;cursor: pointer;}.st-cookie-banner .cookie-button .button-text {font-weight: bold !important;}.st-cookie-banner .cookie-gotit {width: max-content;padding: 10px 30px;margin-left: 20px;}@media(max-width:767px) {.st-cookie-banner {flex-direction: column;} .st-cookie-banner .cookie-text {flex-direction: column;}.st-cookie-banner .cookie-text .cookie-des {text-align: center;}}",t.length&&t.map((e=>{window.ST_LOADED_FONTS.includes(e.fontFamily)||window.ST_GLOBALS.loadFont(e)})),window.ST_GLOBALS.addStyle(i),s()},s=function(){let t=0;for(const o in n){const i=n[o],{editor:s,html:r,divCookie:a}=i;let l=!0;c("stCookieBanner")&&(l=!1),l&&(a.getElementsByClassName("st-cookie-banner")[0].style.zIndex=50-t,setTimeout((()=>{e.body.insertAdjacentElement("afterbegin",a)}),1e3*s?.showAfterMs),t++)}},c=function(t){let o=t+"=",n=decodeURIComponent(e.cookie).split(";");for(let e=0;e<n.length;e++){let t=n[e];for(;" "==t.charAt(0);)t=t.substring(1);if(0==t.indexOf(o))return t.substring(o.length,t.length)}return""};window.stCloseCookie=function(t){var o,n;setTimeout((()=>{t.target.closest(".st-cookie-banner").remove()}),100),o="stCookieBanner",n="successful",e.cookie=o+"="+n+";expires=Session;path=/"}}(window.document);