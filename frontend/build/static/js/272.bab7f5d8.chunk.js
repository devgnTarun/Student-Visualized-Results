/*! For license information please see 272.bab7f5d8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[272],{5272:function(t,e,n){n.r(e),n.d(e,{startTapClick:function(){return o}});var i=n(1811),o=function(t){var e,n,o,v=10*-d,l=0,p=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),h=new WeakMap,m=function(t){v=(0,i.u)(t),E(t)},L=function(){o&&clearTimeout(o),o=void 0,e&&(g(!1),e=void 0)},w=function(t){e||b(a(t),t)},E=function(t){b(void 0,t)},b=function(t,n){if(!t||t!==e){o&&clearTimeout(o),o=void 0;var a=(0,i.p)(n),c=a.x,f=a.y;if(e){if(h.has(e))throw new Error("internal error");e.classList.contains(s)||k(e,c,f),g(!0)}if(t){var d=h.get(t);d&&(clearTimeout(d),h.delete(t)),t.classList.remove(s);var v=function(){k(t,c,f),o=void 0};r(t)?v():o=setTimeout(v,u)}e=t}},k=function(t,e,i){if(l=Date.now(),t.classList.add(s),p){var o=c(t);null!==o&&(T(),n=o.addRipple(e,i))}},T=function(){void 0!==n&&(n.then((function(t){return t()})),n=void 0)},g=function(t){T();var n=e;if(n){var i=f-Date.now()+l;if(t&&i>0&&!r(n)){var o=setTimeout((function(){n.classList.remove(s),h.delete(n)}),f);h.set(n,o)}else n.classList.remove(s)}},C=document;C.addEventListener("ionGestureCaptured",L),C.addEventListener("touchstart",(function(t){v=(0,i.u)(t),w(t)}),!0),C.addEventListener("touchcancel",m,!0),C.addEventListener("touchend",m,!0),C.addEventListener("pointercancel",L,!0),C.addEventListener("mousedown",(function(t){if(2!==t.button){var e=(0,i.u)(t)-d;v<e&&w(t)}}),!0),C.addEventListener("mouseup",(function(t){var e=(0,i.u)(t)-d;v<e&&E(t)}),!0)},a=function(t){if(void 0===t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,f=200,d=2500}}]);
//# sourceMappingURL=272.bab7f5d8.chunk.js.map