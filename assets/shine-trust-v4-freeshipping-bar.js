"use strict";!function(e){const t=setInterval((()=>{window.ST_GLOBALS&&(clearInterval(t),w().then((()=>console.info("ST Free Shipping Bar loaded"))))}));class n{constructor(t){this.freeShippingBar=t;const{html:{code:n},target:{deviceShow:i}}=t;this.freeShippingBarEl=e.createElement("div"),this.freeShippingBarEl.classList.add("st-freeshipping-fadeIn"),this.freeShippingBarEl.innerHTML=n.replace('onclick="stCloseBar(event)"',""),"desktop"===i?(this.freeShippingBarEl.querySelector(".st-freeshipping").classList.add("hide-on-mobile"),this.freeShippingBarEl.querySelector(".st-freeshipping").classList.remove("hide-on-desktop")):"mobile"===i?(this.freeShippingBarEl.querySelector(".st-freeshipping").classList.add("hide-on-desktop"),this.freeShippingBarEl.querySelector(".st-freeshipping").classList.remove("hide-on-mobile")):this.freeShippingBarEl.querySelector(".st-freeshipping").classList.remove("hide-on-mobile","hide-on-desktop"),this.events(),this.renderText()}events(){let e=this.freeShippingBarEl.querySelector(".st-freeshipping-close");e&&e.addEventListener("click",(function(e){window.ST_GLOBALS.closeBar(e,".st-topbar",window.ST_META_DATA?.effectElementTopBar)}))}renderText(){const{editor:{startText:e,progressText:t,successText:n,money:i}}=this.freeShippingBar,o=window.ST_GLOBALS.translate(e),s=window.ST_GLOBALS.translate(t),a=window.ST_GLOBALS.translate(n),r=parseFloat(i);let c=o.replace("{{amount}}",`<span>${window.ST_GLOBALS.formatMoney(r)}</span>`);p>0&&p<r?c=s.replace("{{amount}}",`<span>${window.ST_GLOBALS.formatMoney(r-p)}</span>`):p>=r&&(c=a),this.freeShippingBarEl.querySelector(".st-freeshipping-text").innerHTML=c}render(){const{editor:{behavior:e=!1,behaviorShowMs:t,behaviorHideMs:n}}=this.freeShippingBar;return{show:e?1e3*parseInt(t):0,hide:e?1e3*parseInt(n):0,freeShippingBar:this.freeShippingBar,freeShippingBarEl:this.freeShippingBarEl}}}const i="ST:add",o="ST:update",s="ST:change",a="ST:clear",r="ST:mutate",c=["/cart/add","/cart/update","/cart/change","/cart/clear","/cart/add.js","/cart/update.js","/cart/change.js","/cart/clear.js"];let l=null;const d={};let p=0;const w=async function(){if(!window.ST_PLAN||"Advanced"!==window.ST_PLAN?.name||"ACTIVE"!==window.ST_PLAN?.status)return;l=window.ST_GLOBALS.getBaseCDN();const t=window.ST_FREE_SHIPPING_BARS||[];if(0===t.length)return;p=await h();const i=window.ST_GLOBALS.pageType||"index",o=[];let s="";t.map((e=>{const{id:t,status:a,css:r,editor:c,target:{locationFilter:l,locationShow:p,pageFilter:w,pageShow:S,collections:h=[]}}=e,{fontFamily:u,startDateStatus:T,endDateStatus:L,startDateTime:g,endDateTime:m}=c;if(a){let a=!1;if(T||L){const e=window.ST_GLOBALS.dateWithTimeZone(new Date,window.ST_META_DATA.timeZone),t=window.ST_GLOBALS.dateWithTimeZone(g,window.ST_META_DATA.timeZone),n=window.ST_GLOBALS.dateWithTimeZone(m,window.ST_META_DATA.timeZone);(!T&&L&&n.getTime()>=e.getTime()||T&&!L&&t.getTime()<=e.getTime()||T&&L&&t.getTime()<=e.getTime()&&n.getTime()>=e.getTime())&&(a=!0)}else a=!0;if(a){if(f(i,w,S,h)){let i=!0;if("include"===l?p.includes("all")||p.includes(window.ST_GLOBALS.countryCustomer)||(i=!1):"exclude"===l&&p.includes(window.ST_GLOBALS.countryCustomer)&&(i=!1),i&&(d[t]=new n(e).render(),s+=r,"object"==typeof u&&u?.fontFamily)){0===o.filter((e=>e.fontFamily===u.fontFamily&&parseInt(e.fontWeight)===parseInt(u.fontWeight))).length&&o.push(u)}}}}})),o.length&&o.map((e=>{window.ST_LOADED_FONTS.includes(e.fontFamily)||window.ST_GLOBALS.loadFont(e)})),s&&window.ST_GLOBALS.addStyle(s);let a=0;for(const t in d){const{freeShippingBarEl:n,show:i,hide:o}=d[t];n.querySelector(".st-freeshipping").style.zIndex=25-a,setTimeout((()=>{e.body.insertAdjacentElement("afterbegin",n),window.ST_GLOBALS.changeBodyStyle(".st-freeshipping",window.ST_GLOBALS.cssFixed)}),i),o>0&&setTimeout((()=>{n.remove(),window.ST_GLOBALS.changeBodyStyle(".st-freeshipping",window.ST_GLOBALS.cssFixed)}),o),a++}window.addEventListener("ST:add",(e=>{S()})),window.addEventListener("ST:update",(e=>{S()})),window.addEventListener("ST:change",(e=>{S()})),window.addEventListener("ST:clear",(e=>{S()})),window.addEventListener("ST:mutate",(e=>{S()}))};async function S(){const e=await h();for(const t in d){const{freeShippingBarEl:n,freeShippingBar:i}=d[t],o=n.querySelector(".st-freeshipping-text");if(o){const{editor:{startText:t,progressText:n,successText:s,money:a}}=i,r=window.ST_GLOBALS.translate(t),c=window.ST_GLOBALS.translate(n),l=window.ST_GLOBALS.translate(s);let d=parseFloat(a)||0,p=r.replace("{{amount}}",`<span>${window.ST_GLOBALS.formatMoney(d)}</span>`);e>0&&e<d?p=c.replace("{{amount}}",`<span>${window.ST_GLOBALS.formatMoney(d-e)}</span>`):e>=d&&(p=l),o.innerHTML=p}}}const h=async function(){let e=0;return await fetch(window.Shopify.routes.root+"cart.js").then((e=>e.json())).then((t=>{e=t?.total_price/100})),e},f=function(e,t="include",n,i=[]){let o=!1,s="";switch(n){case"collection_page":s="collection";break;case"collection_list":s="list-collections";break;case"product_page":s="product";break;case"homepage":s="index";break;case"cart":s="cart"}if("include"===t)if("collection"===e&&"collection"===s){const e=`gid://shopify/Collection/${window.ST_GLOBALS.collectionID}`;(i.includes("selectall")||window.ST_GLOBALS.collectionID&&i.includes(e)||!window.ST_GLOBALS.collectionID&&i.includes("all"))&&(o=!0)}else"all"!==n&&e!==s||(o=!0);else if("exclude"===t)if("collection"===e&&"collection"===s){const e=`gid://shopify/Collection/${window.ST_GLOBALS.collectionID}`;i.includes("selectall")?window.ST_GLOBALS.collectionID&&!i.includes(e)?o=!0:window.ST_GLOBALS.collectionID||i.includes("all")||(o=!0):o=!0}else e!==s&&(o=!0);return o},u=function(e,t){if("string"==typeof t)try{t=JSON.parse(t)}catch{}window.dispatchEvent(new CustomEvent(r,{detail:t}));switch(updateType(e)){case"add":window.dispatchEvent(new CustomEvent(i,{detail:t}));break;case"update":window.dispatchEvent(new CustomEvent(o,{detail:t}));break;case"change":window.dispatchEvent(new CustomEvent(s,{detail:t}));break;case"clear":window.dispatchEvent(new CustomEvent(a,{detail:t}))}},T=function(e){if(!e||"object"==typeof e)return!1;const t=e.split("?")[0].split("/").pop();return c.includes(`/cart/${t}`)};!function(){if(!window.fetch||"function"!=typeof window.fetch)return;const e=window.fetch;window.fetch=function(){const t=e.apply(this,arguments);return T(arguments[0])&&t.then((e=>{e.clone().json().then((t=>u(e.url,t)))})),t}}(),function(){if(!window.XMLHttpRequest)return;const e=window.XMLHttpRequest.prototype.open;window.XMLHttpRequest.prototype.open=function(){const t=arguments[1];return this.addEventListener("load",(function(){T(t)&&u(t,this.response)})),e.apply(this,arguments)}}()}(window.document);