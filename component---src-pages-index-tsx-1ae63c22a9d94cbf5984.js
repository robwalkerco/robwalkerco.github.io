"use strict";(self.webpackChunkrobwalkerco=self.webpackChunkrobwalkerco||[]).push([[691],{7606:function(e,t,r){r.d(t,{G:function(){return w}});var n=r(4694),a=r(5697),o=r.n(a),l=r(7294);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function p(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var y=["style"];function d(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=m(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var h=!1;try{h=!0}catch(E){}function g(e){return e&&"object"===s(e)&&e.prefix&&e.iconName&&e.icon?e:n.parse.icon?n.parse.icon(e):null===e?null:e&&"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var v=["forwardedRef"];function w(e){var t=e.forwardedRef,r=u(e,v),a=r.icon,o=r.mask,l=r.symbol,i=r.className,s=r.title,b=r.titleId,m=r.maskId,y=g(a),d=O("classes",[].concat(p(function(e){var t,r=e.beat,n=e.fade,a=e.beatFade,o=e.bounce,l=e.shake,i=e.flash,c=e.spin,s=e.spinPulse,u=e.spinReverse,p=e.pulse,b=e.fixedWidth,m=e.inverse,y=e.border,d=e.listItem,h=e.flip,g=e.size,O=e.rotation,v=e.pull,w=(f(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":l,"fa-flash":i,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":s,"fa-pulse":p,"fa-fw":b,"fa-inverse":m,"fa-border":y,"fa-li":d,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(g),null!=g),f(t,"fa-rotate-".concat(O),null!=O&&0!==O),f(t,"fa-pull-".concat(v),null!=v),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map((function(e){return w[e]?e:null})).filter((function(e){return e}))}(r)),p(i.split(" ")))),E=O("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),j=O("mask",g(o)),x=(0,n.icon)(y,c(c(c(c({},d),E),j),{},{symbol:l,title:s,titleId:b,maskId:m}));if(!x)return function(){var e;!h&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",y),null;var P=x.abstract,S={ref:t};return Object.keys(r).forEach((function(e){w.defaultProps.hasOwnProperty(e)||(S[e]=r[e])})),k(P[0],S)}w.displayName="FontAwesomeIcon",w.propTypes={beat:o().bool,border:o().bool,bounce:o().bool,className:o().string,fade:o().bool,flash:o().bool,mask:o().oneOfType([o().object,o().array,o().string]),maskId:o().string,fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),shake:o().bool,size:o().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,spinPulse:o().bool,spinReverse:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,titleId:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},w.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var k=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=d(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[m(t)]=n}return e}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,s=u(n,y);return o.attrs.style=c(c({},o.attrs.style),i),t.apply(void 0,[r.tag,c(c({},o.attrs),s)].concat(p(a)))}.bind(null,l.createElement)},5871:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children;return n.createElement(n.Fragment,null,t)}},6738:function(e,t,r){r.r(t);var n=r(7606),a=r(7190),o=r(8014),l=r(7294),i=r(5871),c=r(306);t.default=function(){var e=l.useState(""),t=e[0],r=e[1];return l.useEffect((function(){r("hi@robwalker.co")}),[]),l.createElement(i.Z,null,l.createElement("main",null,l.createElement("header",null,l.createElement("a",{href:"/"},l.createElement("img",{id:"face",src:c.Z,alt:"Rob Walker"}))),l.createElement("article",null,l.createElement("h1",null,"Rob Walker"),l.createElement("h2",null,"Software Engineering Manager | Specialising in React Native | Working at"," ",l.createElement("a",{href:"https://www.nearform.com",target:"_blank"},"Nearform")),l.createElement("p",null,l.createElement("a",{href:"/talks"},l.createElement(n.G,{icon:o.uqF}),"Past talks ->")),l.createElement("p",null,l.createElement("a",{href:"mailto:"+t},l.createElement(n.G,{icon:o.FU$}),t)),l.createElement("p",null,l.createElement("a",{href:"https://twitter.com/robwalkerco"},l.createElement(n.G,{icon:a.sd1}),"@robwalkerco")),l.createElement("p",null,l.createElement("a",{href:"https://github.com/robwalkerco"},l.createElement(n.G,{icon:a.pUg}),"github.com/robwalkerco")),l.createElement("p",null,l.createElement("a",{href:"https://www.linkedin.com/in/robwalkerco/"},l.createElement(n.G,{icon:a.D9H}),"linkedin.com/in/robertwalkerco")))))}},306:function(e,t,r){t.Z=r.p+"static/robwalker-bdeed1373894fb86d41549f17a1a8ed7.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1ae63c22a9d94cbf5984.js.map