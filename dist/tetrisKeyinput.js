(()=>{"use strict";const t=["left","right","hardDrop","softDrop","leftRotation","rightRotation","hold"],o=["swipe","button"];new GameOption("methodOfOpForTouch",0,{defArray:o,toEnum:function(t){if("string"==typeof t)return o.includes(t)?t:void 0},toString:function(t){return console.log(t,t),t},getTitle:function(t){switch(t){case"swipe":return"スワイプ";case"button":return"ボタン"}}});let e=new Map;function n(t){addKeyActions(t,l,(()=>{}),l,(()=>{}),300,50),e.set("right",t)}function r(t){addKeyActions(t,f,(()=>{}),f,(()=>{}),300,50),e.set("left",t)}function s(t){addKeyActions(t,m),e.set("hardDrop",t)}function a(t){addKeyActions(t,h.bind(null,!0),h.bind(null,!1)),e.set("softDrop",t)}function i(t){addKeyActions(t,g),e.set("leftRotation",t)}function c(t){addKeyActions(t,b),e.set("rightRotation",t)}function u(t){addKeyActions(t,y),e.set("hold",t)}function d(t,o){switch(t){case"left":r(o);break;case"right":n(o);break;case"softDrop":a(o);break;case"hardDrop":s(o);break;case"leftRotation":i(o);break;case"rightRotation":c(o);break;case"hold":u(o)}}function p(o){return t.includes(o)?o:void 0}function f(){moveToLeft((function(t){}))}function l(){moveToRight((function(t){}))}function h(t){softDrop(t)}function m(){hardDrop()}function b(){rightRotation()}function g(){leftRotation()}function y(){hold()}document.oncontextmenu=function(){return!1},document.body.oncontextmenu=()=>!1,document.addEventListener("touchmove",(function(t){t.preventDefault()}),{passive:!1}),n("d"),r("a"),s("w"),a("s"),i("ArrowLeft"),c("ArrowRight"),u("Shift"),$(document).on("click",".keyForAny",(t=>{const o=$(t.currentTarget).attr("id");if("string"==typeof o){const t=o.slice(6),n=toLowerFirstLetter(t),r=e.get(p(n));void 0!==r&&removeKeyActions(r),$(document).off(".onClickKeyForAny"),$(document).on("keydown.onClickKeyForAny",(o=>{const r=o.key;if($(document).off(".onClickKeyForAny"),"string"==typeof r){const o=e.get(p(n));for(const t of e.entries())t[1]==r&&(console.log(t[0],"#keyFor"+toUpperFirstLetter(t[0])),removeKeyActions(r),d(t[0],o),$("#keyFor"+toUpperFirstLetter(t[0])).text(o));d(n,r),$("#keyFor"+t).text(r)}}))}})),setButtonActions('.buttonsToOperate[data-operate="left"]',300,50),setButtonActions('.buttonsToOperate[data-operate="right"]',300,50),setButtonActions('.buttonsToOperate[data-operate="softDrop"]'),setButtonActions('.buttonsToOperate[data-operate="hardDrop"]'),setButtonActions('.buttonsToOperate[data-operate="leftRotation"]'),setButtonActions('.buttonsToOperate[data-operate="rightRotation"]'),setButtonActions('.buttonsToOperate[data-operate="hold"]'),$(document).on("pressstart",'.buttonsToOperate[data-operate="left"]',(t=>{f()})),$(document).on("longpress",'.buttonsToOperate[data-operate="left"]',(t=>{f()})),$(document).on("pressstart",'.buttonsToOperate[data-operate="right"]',(t=>{l()})),$(document).on("longpress",'.buttonsToOperate[data-operate="right"]',(t=>{l()})),$(document).on("pressstart",'.buttonsToOperate[data-operate="softDrop"]',(t=>{h(!0)})),$(document).on("pressend",'.buttonsToOperate[data-operate="softDrop"]',(t=>{h(!1)})),$(document).on("pressstart",'.buttonsToOperate[data-operate="hardDrop"]',(t=>{m()})),$(document).on("pressstart",'.buttonsToOperate[data-operate="leftRotation"]',(t=>{g()})),$(document).on("pressstart",'.buttonsToOperate[data-operate="rightRotation"]',(t=>{b()})),$(document).on("pressstart",'.buttonsToOperate[data-operate="hold"]',(t=>{y()})),$(document).on("swipedist",(function(t,o,e){switch(console.log(o),o){case"left":f();break;case"right":l()}})),$(document).on("swipestart",(function(t,o,e){switch(o){case"up":y()}})),$(document).on("longswipe",(function(t,o,e){switch("down"!=o&&h(!1),o){case"down":h(!0);break;case"up":y()}})),$(document).on("swipeend",(function(t,o,e){switch(h(!1),o){case"down":e>5&&m();break;case"up":y()}})),$(document).on("touched",(function(t,o,e){console.log(o,e),o>300?b():g()}))})();