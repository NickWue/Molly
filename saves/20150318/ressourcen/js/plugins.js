/*!
 * Masonry PACKAGED v3.1.3
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

//(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,i){t.fn[e]=function(o){if("string"==typeof o){for(var s=n.call(arguments,1),a=0,h=this.length;h>a;a++){var p=this[a],u=t.data(p,e);if(u)if(t.isFunction(u[o])&&"_"!==o.charAt(0)){var f=u[o].apply(u,s);if(void 0!==f)return f}else r("no such method '"+o+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+o+"'")}return this}return this.each(function(){var n=t.data(this,e);n?(n.option(o),n._init()):(n=new i(this,o),t.data(this,e,n))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),o(t,e)},t.bridget}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){var e=document.documentElement,i=function(){};e.addEventListener?i=function(t,e,i){t.addEventListener(e,i,!1)}:e.attachEvent&&(i=function(e,i,n){e[i+n]=n.handleEvent?function(){var e=t.event;e.target=e.target||e.srcElement,n.handleEvent.call(n,e)}:function(){var i=t.event;i.target=i.target||i.srcElement,n.call(e,i)},e.attachEvent("on"+i,e[i+n])});var n=function(){};e.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:e.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var o={bind:i,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",o):t.eventie=o}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==o.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var n=0,s=r.length;s>n;n++){var a=r[n];a()}}}function n(n){return n.bind(o,"DOMContentLoaded",i),n.bind(o,"readystatechange",i),n.bind(t,"load",i),e}var o=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],n)):t.docReady=n(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype;n.getListeners=function(t){var e,i,n=this._getEvents();if("object"==typeof t){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if("object"===i)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=a.length;i>e;e++){var n=a[e];t[n]=0}return t}function n(t){function n(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var n=s(t);if("none"===n.display)return i();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var u=r.isBorderBox=!(!p||!n[p]||"border-box"!==n[p]),f=0,d=a.length;d>f;f++){var l=a[f],c=n[l];c=o(t,c);var m=parseFloat(c);r[l]=isNaN(m)?0:m}var y=r.paddingLeft+r.paddingRight,g=r.paddingTop+r.paddingBottom,v=r.marginLeft+r.marginRight,_=r.marginTop+r.marginBottom,b=r.borderLeftWidth+r.borderRightWidth,E=r.borderTopWidth+r.borderBottomWidth,L=u&&h,z=e(n.width);z!==!1&&(r.width=z+(L?0:y+b));var S=e(n.height);return S!==!1&&(r.height=S+(L?0:g+E)),r.innerWidth=r.width-(y+b),r.innerHeight=r.height-(g+E),r.outerWidth=r.width+v,r.outerHeight=r.height+_,r}}function o(t,e){if(r||-1===e.indexOf("%"))return e;var i=t.style,n=i.left,o=t.runtimeStyle,s=o&&o.left;return s&&(o.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=n,s&&(o.left=s),e}var h,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var n=s(t);h=200===e(n.width),i.removeChild(t)}}(),n}var o=document.defaultView,r=o&&o.getComputedStyle,s=r?function(t){return o.getComputedStyle(t,null)}:function(t){return t.currentStyle},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],n):t.getSize=n(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function n(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){n(t);for(var i=t.parentNode.querySelectorAll(e),o=0,r=i.length;r>o;o++)if(i[o]===t)return!0;return!1}function r(t,e){return n(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,n=t.length;n>i;i++){var o=t[i],r=o+"MatchesSelector";if(e[r])return r}}();if(a){var h=document.createElement("div"),p=i(h,"div");s=p?i:r}else s=o;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function o(t,o,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var h=r("transition"),p=r("transform"),u=h&&p,f=!!r("perspective"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[h],l=["transform","transition","transitionDuration","transitionProperty"],c=function(){for(var t={},e=0,i=l.length;i>e;e++){var n=l[e],o=r(n);o&&o!==n&&(t[n]=o)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transition={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=o(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var n=c[i]||i;e[n]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,n=e.isOriginTop,o=parseInt(t[i?"left":"right"],10),r=parseInt(t[n?"top":"bottom"],10);o=isNaN(o)?0:o,r=isNaN(r)?0:r;var a=this.layout.size;o-=i?a.paddingLeft:a.paddingRight,r-=n?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var m=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,h=e-n,p={},u=this.layout.options;a=u.isOriginLeft?a:-a,h=u.isOriginTop?h:-h,p.transform=m(a,h),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=u?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transition;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var y=p&&n(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:y,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(d,this,!1))},a.prototype.transition=a.prototype[h?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transition,n=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(d,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!h||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=document.defaultView,s=r&&r.getComputedStyle?function(t){return r.getComputedStyle(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],o):(t.Outlayer={},t.Outlayer.Item=o(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function n(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var n=0,o=t.length;o>n;n++)e.push(t[n]);else e.push(t);return e}function o(t,e){var i=l(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,l,c,m){function y(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!d(t))return h&&h.error("Bad "+this.settings.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.options),this.option(i);var n=++v;this.element.outlayerGUID=n,_[n]=this,this._create(),this.options.isInitLayout&&this.layout()}function g(t,i){t.prototype[i]=e({},y.prototype[i])}var v=0,_={};return y.prototype.settings={namespace:"outlayer",item:m},y.prototype.options={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(y.prototype,f.prototype),y.prototype.option=function(t){e(this.options,t)},y.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},y.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},y.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.settings.item,n=[],o=0,r=e.length;r>o;o++){var s=e[o],a=new i(s,this);n.push(a)}return n},y.prototype._filterFindItemElements=function(t){t=n(t);for(var e=this.options.itemSelector,i=[],o=0,r=t.length;r>o;o++){var s=t[o];if(d(s))if(e){c(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),h=0,p=a.length;p>h;h++)i.push(a[h])}else i.push(s)}return i},y.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},y.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},y.prototype._init=y.prototype.layout,y.prototype._resetLayout=function(){this.getSize()},y.prototype.getSize=function(){this.size=l(this.element)},y.prototype._getMeasurement=function(t,e){var i,n=this.options[t];n?("string"==typeof n?i=this.element.querySelector(n):d(n)&&(i=n),this[t]=i?l(i)[e]:n):this[t]=0},y.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},y.prototype._getItemsForLayout=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i];o.isIgnored||e.push(o)}return e},y.prototype._layoutItems=function(t,e){if(!t||!t.length)return this.emitEvent("layoutComplete",[this,t]),void 0;this._itemsOn(t,"layout",function(){this.emitEvent("layoutComplete",[this,t])});for(var i=[],n=0,o=t.length;o>n;n++){var r=t[n],s=this._getItemLayoutPosition(r);s.item=r,s.isInstant=e,i.push(s)}this._processLayoutQueue(i)},y.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},y.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];this._positionItem(n.item,n.x,n.y,n.isInstant)}},y.prototype._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},y.prototype._postLayout=function(){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))},y.prototype._getContainerSize=u,y.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},y.prototype._itemsOn=function(t,e,i){function n(){return o++,o===r&&i.call(s),!0}for(var o=0,r=t.length,s=this,a=0,h=t.length;h>a;a++){var p=t[a];p.on(e,n)}},y.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},y.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},y.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];this.ignore(n)}}},y.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var n=t[e];o(n,this.stamps),this.unignore(n)}},y.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n(t)):void 0},y.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},y.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},y.prototype._manageStamp=u,y.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=l(t),o={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return o},y.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},y.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},y.prototype.unbindResize=function(){i.unbind(t,"resize",this),this.isResizeBound=!1},y.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},y.prototype.resize=function(){var t=l(this.element),e=this.size&&t;e&&t.innerWidth===this.size.innerWidth||this.layout()},y.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},y.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},y.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},y.prototype.reveal=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++){var n=t[e];n.reveal()}},y.prototype.hide=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++){var n=t[e];n.hide()}},y.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];if(n.element===t)return n}},y.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],r=this.getItem(o);r&&e.push(r)}return e}},y.prototype.remove=function(t){t=n(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),o(s,this.items)}}},y.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];n.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.settings.namespace)},y.data=function(t){var e=t&&t.outlayerGUID;return e&&_[e]},y.create=function(t,i){function n(){y.apply(this,arguments)}return e(n.prototype,y.prototype),g(n,"options"),g(n,"settings"),e(n.prototype.options,i),n.prototype.settings.namespace=t,n.data=y.data,n.Item=function(){m.apply(this,arguments)},n.Item.prototype=new m,n.prototype.settings.item=n.Item,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),o="data-"+e+"-options",s=0,u=i.length;u>s;s++){var f,d=i[s],l=d.getAttribute(o);try{f=l&&JSON.parse(l)}catch(c){h&&h.error("Error parsing "+o+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+c);continue}var m=new n(d,f);p&&p.data(d,t,m)}}),p&&p.bridget&&p.bridget(t,n),n},y.Item=m,y}var a=t.document,h=t.console,p=t.jQuery,u=function(){},f=Object.prototype.toString,d="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},l=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t,e){var n=t.create("masonry");return n.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},n.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},n.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},n.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,n=e&&1>e?"round":"ceil",o=Math[n](t.size.outerWidth/this.columnWidth);o=Math.min(o,this.cols);for(var r=this._getColGroup(o),s=Math.min.apply(Math,r),a=i(r,s),h={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,u=this.cols+1-r.length,f=0;u>f;f++)this.colYs[a+f]=p;return h},n.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},n.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this.options.isOriginLeft?n.left:n.right,r=o+i.outerWidth,s=Math.floor(o/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a=Math.min(this.cols-1,a);for(var h=(this.options.isOriginTop?n.top:n.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(h,this.colYs[p])},n.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},n.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.prototype.resize=function(){var t=this.containerWidth;this.getContainerWidth(),t!==this.containerWidth&&this.layout()},n}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++){var o=t[i];if(o===e)return i}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window);
/*! 
 * quantize.js Copyright 2008 Nick Rabinowitz.
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */
 
// fill out a couple protovis dependencies
/*!
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 */
if (!pv) {
    var pv = {
        map: function(array, f) {
          var o = {};
          return f
              ? array.map(function(d, i) { o.index = i; return f.call(o, d); })
              : array.slice();
        },
        naturalOrder: function(a, b) {
            return (a < b) ? -1 : ((a > b) ? 1 : 0);
        },
        sum: function(array, f) {
          var o = {};
          return array.reduce(f
              ? function(p, d, i) { o.index = i; return p + f.call(o, d); }
              : function(p, d) { return p + d; }, 0);
        },
        max: function(array, f) {
          return Math.max.apply(null, f ? pv.map(array, f) : array);
        }
    }
}
 
/**
 * Basic Javascript port of the MMCQ (modified median cut quantization)
 * algorithm from the Leptonica library (http://www.leptonica.com/).
 * Returns a color map you can use to map original pixels to the reduced
 * palette. Still a work in progress.
 * 
 * @author Nick Rabinowitz
 * @example
 
// array of pixels as [R,G,B] arrays
var myPixels = [[190,197,190], [202,204,200], [207,214,210], [211,214,211], [205,207,207]
                // etc
                ];
var maxColors = 4;
 
var cmap = MMCQ.quantize(myPixels, maxColors);
var newPalette = cmap.palette();
var newPixels = myPixels.map(function(p) { 
    return cmap.map(p); 
});
 
 */
var MMCQ = (function() {
    // private constants
    var sigbits = 5,
        rshift = 8 - sigbits,
        maxIterations = 1000,
        fractByPopulations = 0.75;
    
    // get reduced-space color index for a pixel
    function getColorIndex(r, g, b) {
        return (r << (2 * sigbits)) + (g << sigbits) + b;
    }
    
    // Simple priority queue
    function PQueue(comparator) {
        var contents = [],
            sorted = false;
        
        function sort() {
            contents.sort(comparator);
            sorted = true;
        }
        
        return {
            push: function(o) {
                contents.push(o);
                sorted = false;
            },
            peek: function(index) {
                if (!sorted) sort();
                if (index===undefined) index = contents.length - 1;
                return contents[index];
            },
            pop: function() {
                if (!sorted) sort();
                return contents.pop();
            },
            size: function() {
                return contents.length;
            },
            map: function(f) {
                return contents.map(f);
            },
            debug: function() {
                if (!sorted) sort();
                return contents;
            }
        };
    }
    
    // 3d color space box
    function VBox(r1, r2, g1, g2, b1, b2, histo) {
        var vbox = this;
        vbox.r1 = r1;
        vbox.r2 = r2;
        vbox.g1 = g1;
        vbox.g2 = g2;
        vbox.b1 = b1;
        vbox.b2 = b2;
        vbox.histo = histo;
    }
    VBox.prototype = {
        volume: function(force) {
            var vbox = this;
            if (!vbox._volume || force) {
                vbox._volume = ((vbox.r2 - vbox.r1 + 1) * (vbox.g2 - vbox.g1 + 1) * (vbox.b2 - vbox.b1 + 1));
            }
            return vbox._volume;
        },
        count: function(force) {
            var vbox = this,
                histo = vbox.histo;
            if (!vbox._count_set || force) {
                var npix = 0,
                    i, j, k;
                for (i = vbox.r1; i <= vbox.r2; i++) {
                    for (j = vbox.g1; j <= vbox.g2; j++) {
                        for (k = vbox.b1; k <= vbox.b2; k++) {
                             index = getColorIndex(i,j,k);
                             npix += (histo[index] || 0);
                        }
                    }
                }
                vbox._count = npix;
                vbox._count_set = true;
            }
            return vbox._count;
        },
        copy: function() {
            var vbox = this;
            return new VBox(vbox.r1, vbox.r2, vbox.g1, vbox.g2, vbox.b1, vbox.b2, vbox.histo);
        },
        avg: function(force) {
            var vbox = this,
                histo = vbox.histo;
            if (!vbox._avg || force) {
                var ntot = 0,
                    mult = 1 << (8 - sigbits),
                    rsum = 0,
                    gsum = 0,
                    bsum = 0,
                    hval,
                    i, j, k, histoindex;
                for (i = vbox.r1; i <= vbox.r2; i++) {
                    for (j = vbox.g1; j <= vbox.g2; j++) {
                        for (k = vbox.b1; k <= vbox.b2; k++) {
                             histoindex = getColorIndex(i,j,k);
                             hval = histo[histoindex] || 0;
                             ntot += hval;
                             rsum += (hval * (i + 0.5) * mult);
                             gsum += (hval * (j + 0.5) * mult);
                             bsum += (hval * (k + 0.5) * mult);
                        }
                    }
                }
                if (ntot) {
                    vbox._avg = [~~(rsum/ntot), ~~(gsum/ntot), ~~(bsum/ntot)];
                } else {
                    console.log('empty box');
                    vbox._avg = [
                        ~~(mult * (vbox.r1 + vbox.r2 + 1) / 2),
                        ~~(mult * (vbox.g1 + vbox.g2 + 1) / 2),
                        ~~(mult * (vbox.b1 + vbox.b2 + 1) / 2)
                    ];
                }
            }
            return vbox._avg;
        },
        contains: function(pixel) {
            var vbox = this,
                rval = pixel[0] >> rshift;
                gval = pixel[1] >> rshift;
                bval = pixel[2] >> rshift;
            return (rval >= vbox.r1 && rval <= vbox.r2 &&
                    gval >= vbox.g1 && rval <= vbox.g2 &&
                    bval >= vbox.b1 && rval <= vbox.b2);
        }
    };
    
    // Color map
    function CMap() {
        this.vboxes = new PQueue(function(a,b) { 
            return pv.naturalOrder(
                a.vbox.count()*a.vbox.volume(), 
                b.vbox.count()*b.vbox.volume()
            ) 
        });;
    }
    CMap.prototype = {
        push: function(vbox) {
            this.vboxes.push({
                vbox: vbox,
                color: vbox.avg()
            });
        },
        palette: function() {
            return this.vboxes.map(function(vb) { return vb.color });
        },
        size: function() {
            return this.vboxes.size();
        },
        map: function(color) {
            var vboxes = this.vboxes;
            for (var i=0; i<vboxes.size(); i++) {
                if (vboxes.peek(i).vbox.contains(color)) {
                    return vboxes.peek(i).color;
                }
            }
            return this.nearest(color);
        },
        nearest: function(color) {
            var vboxes = this.vboxes,
                d1, d2, pColor;
            for (var i=0; i<vboxes.size(); i++) {
                d2 = Math.sqrt(
                    Math.pow(color[0] - vboxes.peek(i).color[0], 2) +
                    Math.pow(color[1] - vboxes.peek(i).color[1], 2) +
                    Math.pow(color[1] - vboxes.peek(i).color[1], 2)
                );
                if (d2 < d1 || d1 === undefined) {
                    d1 = d2;
                    pColor = vboxes.peek(i).color;
                }
            }
            return pColor;
        },
        forcebw: function() {
            // XXX: won't  work yet
            var vboxes = this.vboxes;
            vboxes.sort(function(a,b) { return pv.naturalOrder(pv.sum(a.color), pv.sum(b.color) )});
            
            // force darkest color to black if everything < 5
            var lowest = vboxes[0].color;
            if (lowest[0] < 5 && lowest[1] < 5 && lowest[2] < 5)
                vboxes[0].color = [0,0,0];
            
            // force lightest color to white if everything > 251
            var idx = vboxes.length-1,
                highest = vboxes[idx].color;
            if (highest[0] > 251 && highest[1] > 251 && highest[2] > 251)
                vboxes[idx].color = [255,255,255];
        }
    };
    
    // histo (1-d array, giving the number of pixels in
    // each quantized region of color space), or null on error
    function getHisto(pixels) {
        var histosize = 1 << (3 * sigbits),
            histo = new Array(histosize),
            index, rval, gval, bval;
        pixels.forEach(function(pixel) {
            rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            index = getColorIndex(rval, gval, bval);
            histo[index] = (histo[index] || 0) + 1;
        });
        return histo;
    }
    
    function vboxFromPixels(pixels, histo) {
        var rmin=1000000, rmax=0, 
            gmin=1000000, gmax=0, 
            bmin=1000000, bmax=0, 
            rval, gval, bval;
        // find min/max
        pixels.forEach(function(pixel) {
            rval = pixel[0] >> rshift;
            gval = pixel[1] >> rshift;
            bval = pixel[2] >> rshift;
            if (rval < rmin) rmin = rval;
            else if (rval > rmax) rmax = rval;
            if (gval < gmin) gmin = gval;
            else if (gval > gmax) gmax = gval;
            if (bval < bmin) bmin = bval;
            else if (bval > bmax)  bmax = bval;
        });
        return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, histo);
    }
    
    function medianCutApply(histo, vbox) {
        if (!vbox.count()) return;
        
        var rw = vbox.r2 - vbox.r1 + 1,
            gw = vbox.g2 - vbox.g1 + 1,
            bw = vbox.b2 - vbox.b1 + 1,
            maxw = pv.max([rw, gw, bw]);
        // only one pixel, no split
        if (vbox.count() == 1) {
            return [vbox.copy()]
        }
        /* Find the partial sum arrays along the selected axis. */
        var total = 0,
            partialsum = [],
            lookaheadsum = [],
            i, j, k, sum, index;
        if (maxw == rw) {
            for (i = vbox.r1; i <= vbox.r2; i++) {
                sum = 0;
                for (j = vbox.g1; j <= vbox.g2; j++) {
                    for (k = vbox.b1; k <= vbox.b2; k++) {
                        index = getColorIndex(i,j,k);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        }
        else if (maxw == gw) {
            for (i = vbox.g1; i <= vbox.g2; i++) {
                sum = 0;
                for (j = vbox.r1; j <= vbox.r2; j++) {
                    for (k = vbox.b1; k <= vbox.b2; k++) {
                        index = getColorIndex(j,i,k);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        }
        else {  /* maxw == bw */
            for (i = vbox.b1; i <= vbox.b2; i++) {
                sum = 0;
                for (j = vbox.r1; j <= vbox.r2; j++) {
                    for (k = vbox.g1; k <= vbox.g2; k++) {
                        index = getColorIndex(j,k,i);
                        sum += (histo[index] || 0);
                    }
                }
                total += sum;
                partialsum[i] = total;
            }
        }
        partialsum.forEach(function(d,i) { 
            lookaheadsum[i] = total-d 
        });
        function doCut(color) {
            var dim1 = color + '1',
                dim2 = color + '2', 
                left, right, vbox1, vbox2, d2, count2=0;
            for (i = vbox[dim1]; i <= vbox[dim2]; i++) {
                if (partialsum[i] > total / 2) {
                    vbox1 = vbox.copy();
                    vbox2 = vbox.copy();
                    left = i - vbox[dim1];
                    right = vbox[dim2] - i;
                    if (left <= right)
                        d2 = Math.min(vbox[dim2] - 1, ~~(i + right / 2));
                    else d2 = Math.max(vbox[dim1], ~~(i - 1 - left / 2));
                    // avoid 0-count boxes
                    while (!partialsum[d2]) d2++;
                    count2 = lookaheadsum[d2];
                    while (!count2 && partialsum[d2-1]) count2 = lookaheadsum[--d2];
                    // set dimensions
                    vbox1[dim2] = d2;
                    vbox2[dim1] = vbox1[dim2] + 1;
                    console.log('vbox counts:', vbox.count(), vbox1.count(), vbox2.count());
                    return [vbox1, vbox2];
                }
            }
        
        }
        // determine the cut planes
        return maxw == rw ? doCut('r') :
            maxw == gw ? doCut('g') :
            doCut('b');
    }
 
    function quantize(pixels, maxcolors) {
        // short-circuit
        if (!pixels.length || maxcolors < 2 || maxcolors > 256) {
            console.log('wrong number of maxcolors');
            return false;
        }
        
        // XXX: check color content and convert to grayscale if insufficient
        
        var histo = getHisto(pixels),
            histosize = 1 << (3 * sigbits);
        
        // check that we aren't below maxcolors already
        var nColors = 0;
        histo.forEach(function() { nColors++ });
        if (nColors <= maxcolors) {
            // XXX: generate the new colors from the histo and return
        }
        
        // get the beginning vbox from the colors
        var vbox = vboxFromPixels(pixels, histo),
            pq = new PQueue(function(a,b) { return pv.naturalOrder(a.count(), b.count()) });
        pq.push(vbox);
        
        // inner function to do the iteration
        function iter(lh, target) {
            var ncolors = 1,
                niters = 0,
                vbox;
            while (niters < maxIterations) {
                vbox = lh.pop();
                if (!vbox.count())  { /* just put it back */
                    lh.push(vbox);
                    niters++;
                    continue;
                }
                // do the cut
                var vboxes = medianCutApply(histo, vbox),
                    vbox1 = vboxes[0],
                    vbox2 = vboxes[1];
                    
                if (!vbox1) {
                    console.log("vbox1 not defined; shouldn't happen!");
                    return;
                }
                lh.push(vbox1);
                if (vbox2) {  /* vbox2 can be null */
                    lh.push(vbox2);
                    ncolors++;
                }
                if (ncolors >= target) return;
                if (niters++ > maxIterations) {
                    console.log("infinite loop; perhaps too few pixels!");
                    return;
                }
            }
        }
        
        // first set of colors, sorted by population
        iter(pq, fractByPopulations * maxcolors);
        // console.log(pq.size(), pq.debug().length, pq.debug().slice());
        
        // Re-sort by the product of pixel occupancy times the size in color space.
        var pq2 = new PQueue(function(a,b) { 
            return pv.naturalOrder(a.count()*a.volume(), b.count()*b.volume()) 
        });
        while (pq.size()) {
            pq2.push(pq.pop());
        }
        
        // next set - generate the median cuts using the (npix * vol) sorting.
        iter(pq2, maxcolors - pq2.size());
        
        // calculate the actual colors
        var cmap = new CMap();
        while (pq2.size()) {
            cmap.push(pq2.pop());
        }
        
        return cmap;
    }
    
    return {
        quantize: quantize
    }
})();
// Generated by CoffeeScript 1.4.0
(function() {

  (function($, window, document) {
    var Plugin, defaults, pluginName;
    pluginName = "shapeshift";
    defaults = {
      selector: "*",
      enableDrag: true,
      enableCrossDrop: true,
      enableResize: true,
      enableTrash: false,
      align: "center",
      colWidth: null,
      columns: null,
      minColumns: 1,
      autoHeight: true,
      maxHeight: null,
      minHeight: 100,
      gutterX: 15,
      gutterY: 15,
      paddingX: 10,
      paddingY: 10,
      animated: true,
      animateOnInit: false,
      animationSpeed: 225,
      animationThreshold: 100,
      dragClone: false,
      deleteClone: true,
      dragRate: 100,
      dragWhitelist: "*",
      crossDropWhitelist: "*",
      cutoffStart: null,
      cutoffEnd: null,
      handle: false,
      cloneClass: "ss-cloned-child",
      activeClass: "ss-active-child",
      draggedClass: "ss-dragged-child",
      placeholderClass: "ss-placeholder-child",
      originalContainerClass: "ss-original-container",
      currentContainerClass: "ss-current-container",
      previousContainerClass: "ss-previous-container"
    };
    Plugin = (function() {

      function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this.globals = {};
        this.$container = $(element);
        if (this.errorCheck()) {
          this.init();
        }
      }

      Plugin.prototype.errorCheck = function() {
        var $children, error_msg, errors, options;
        options = this.options;
        errors = false;
        error_msg = "Shapeshift ERROR:";
        if (options.colWidth === null) {
          $children = this.$container.children(options.selector);
          if ($children.length === 0) {
            errors = true;
            //console.error("" + error_msg + " option colWidth must be specified if Shapeshift is initialized with no active children.");
          }
        }
        return !errors;
      };

      Plugin.prototype.init = function() {
        this.createEvents();
        this.setGlobals();
        this.setIdentifier();
        this.setActiveChildren();
        this.enableFeatures();
        this.gridInit();
        this.render();
        return this.afterInit();
      };

      Plugin.prototype.createEvents = function() {
        var $container, options,
          _this = this;
        options = this.options;
        $container = this.$container;
        $container.off("ss-arrange").on("ss-arrange", function(e, trigger_drop_finished) {
          if (trigger_drop_finished == null) {
            trigger_drop_finished = false;
          }
          return _this.render(false, trigger_drop_finished);
        });
        $container.off("ss-rearrange").on("ss-rearrange", function() {
          return _this.render(true);
        });
        $container.off("ss-setTargetPosition").on("ss-setTargetPosition", function() {
          return _this.setTargetPosition();
        });
        $container.off("ss-destroy").on("ss-destroy", function() {
          return _this.destroy();
        });
        return $container.off("ss-shuffle").on("ss-shuffle", function() {
          return _this.shuffle();
        });
      };

      Plugin.prototype.setGlobals = function() {
        this.globals.animated = this.options.animateOnInit;
        return this.globals.dragging = false;
      };

      Plugin.prototype.afterInit = function() {
        return this.globals.animated = this.options.animated;
      };

      Plugin.prototype.setIdentifier = function() {
        this.identifier = "shapeshifted_container_" + Math.random().toString(36).substring(7);
        return this.$container.addClass(this.identifier);
      };

      Plugin.prototype.enableFeatures = function() {
        if (this.options.enableResize) {
          this.enableResize();
        }
        if (this.options.enableDrag || this.options.enableCrossDrop) {
          return this.enableDragNDrop();
        }
      };

      Plugin.prototype.setActiveChildren = function() {
        var $children, active_child_class, colspan, columns, i, min_columns, options, total, _i, _j, _ref, _results;
        options = this.options;
        $children = this.$container.children(options.selector);
        active_child_class = options.activeClass;
        total = $children.length;
        for (i = _i = 0; 0 <= total ? _i < total : _i > total; i = 0 <= total ? ++_i : --_i) {
          $($children[i]).addClass(active_child_class);
        }
        this.setParsedChildren();
        columns = options.columns;
        _results = [];
        for (i = _j = 0, _ref = this.parsedChildren.length; 0 <= _ref ? _j < _ref : _j > _ref; i = 0 <= _ref ? ++_j : --_j) {
          colspan = this.parsedChildren[i].colspan;
          min_columns = options.minColumns;
          if (colspan > columns && colspan > min_columns) {
            options.minColumns = colspan;
            _results.push(console.error("Shapeshift ERROR: There are child elements that have a larger colspan than the minimum columns set through options.\noptions.minColumns has been set to " + colspan));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };

      Plugin.prototype.setParsedChildren = function() {
        var $child, $children, child, i, parsedChildren, total, _i;
        $children = this.$container.find("." + this.options.activeClass).filter(":visible");
        total = $children.length;
        parsedChildren = [];
        for (i = _i = 0; 0 <= total ? _i < total : _i > total; i = 0 <= total ? ++_i : --_i) {
          $child = $($children[i]);
          child = {
            i: i,
            el: $child,
            colspan: parseInt($child.attr("data-ss-colspan")) || 1,
            height: $child.outerHeight()
          };
          parsedChildren.push(child);
        }
        return this.parsedChildren = parsedChildren;
      };

      Plugin.prototype.gridInit = function() {
        var fc_colspan, fc_width, first_child, gutter_x, single_width;
        gutter_x = this.options.gutterX;
        if (!(this.options.colWidth >= 1)) {
          first_child = this.parsedChildren[0];
          fc_width = first_child.el.outerWidth();
          fc_colspan = first_child.colspan;
          single_width = (fc_width - ((fc_colspan - 1) * gutter_x)) / fc_colspan;
          return this.globals.col_width = single_width + gutter_x;
        } else {
          return this.globals.col_width = this.options.colWidth + gutter_x;
        }
      };

      Plugin.prototype.render = function(reparse, trigger_drop_finished) {
        if (reparse == null) {
          reparse = false;
        }
        if (reparse) {
          this.setActiveChildren();
        }
        this.setGridColumns();
        return this.arrange(false, trigger_drop_finished);
      };

      Plugin.prototype.setGridColumns = function() {
        var actual_columns, children_count, col_width, colspan, columns, globals, grid_width, gutter_x, i, inner_width, minColumns, options, padding_x, _i, _ref;
        globals = this.globals;
        options = this.options;
        col_width = globals.col_width;
        gutter_x = options.gutterX;
        padding_x = options.paddingX;
        inner_width = this.$container.innerWidth() - (padding_x * 2);
        minColumns = options.minColumns;
        columns = options.columns || Math.floor((inner_width + gutter_x) / col_width);
        if (minColumns && minColumns > columns) {
          columns = minColumns;
        }
        globals.columns = columns;
        children_count = this.parsedChildren.length;
        if (columns > children_count) {
          actual_columns = 0;
          for (i = _i = 0, _ref = this.parsedChildren.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
            colspan = this.parsedChildren[i].colspan;
            if (colspan + actual_columns <= columns) {
              actual_columns += colspan;
            }
          }
          columns = actual_columns;
        }
        globals.child_offset = padding_x;
        switch (options.align) {
          case "center":
            grid_width = (columns * col_width) - gutter_x;
            return globals.child_offset += (inner_width - grid_width) / 2;
          case "right":
            grid_width = (columns * col_width) - gutter_x;
            return globals.child_offset += inner_width - grid_width;
        }
      };

      Plugin.prototype.arrange = function(reparse, trigger_drop_finished) {
        var $child, $container, animated, animation_speed, attributes, child_positions, container_height, dragged_class, globals, i, is_dragged_child, max_height, min_height, options, parsed_children, placeholder_class, total_children, _i;
        if (reparse) {
          this.setParsedChildren();
        }
        globals = this.globals;
        options = this.options;
        $container = this.$container;
        child_positions = this.getPositions();
        parsed_children = this.parsedChildren;
        total_children = parsed_children.length;
        animated = globals.animated && total_children <= options.animationThreshold;
        animation_speed = options.animationSpeed;
        dragged_class = options.draggedClass;
        for (i = _i = 0; 0 <= total_children ? _i < total_children : _i > total_children; i = 0 <= total_children ? ++_i : --_i) {
          $child = parsed_children[i].el;
          attributes = child_positions[i];
          is_dragged_child = $child.hasClass(dragged_class);
          if (is_dragged_child) {
            placeholder_class = options.placeholderClass;
            $child = $child.siblings("." + placeholder_class);
          }
          if (animated && !is_dragged_child) {
            $child.stop(true, false).animate(attributes, animation_speed, function() {});
          } else {
            $child.css(attributes);
          }
        }
        if (trigger_drop_finished) {
          if (animated) {
            setTimeout((function() {
              return $container.trigger("ss-drop-complete");
            }), animation_speed);
          } else {
            $container.trigger("ss-drop-complete");
          }
		  newstring ='';
		  $('#cansort li.card').not('#support,#nocards,#design').each(function(){
			newstring += ' '+$(this).attr('id');
		  });
		   localStorage["activatedcards"] = newstring.trim();
        }
        $container.trigger("ss-arranged");
        if (options.autoHeight) {
          container_height = globals.container_height;
          max_height = options.maxHeight;
          min_height = options.minHeight;
          if (min_height && container_height < min_height) {
            container_height = min_height;
          } else if (max_height && container_height > max_height) {
            container_height = max_height;
          }
          return $container.height(container_height);
        }
      };

      Plugin.prototype.getPositions = function(include_dragged) {
        var col_heights, determineMultiposition, determinePositions, dragged_class, globals, grid_height, gutter_y, i, options, padding_y, parsed_children, positions, recalculateSavedChildren, savePosition, saved_children, total_children, _i, _ref,
          _this = this;
        if (include_dragged == null) {
          include_dragged = true;
        }
        globals = this.globals;
        options = this.options;
        gutter_y = options.gutterY;
        padding_y = options.paddingY;
        dragged_class = options.draggedClass;
        parsed_children = this.parsedChildren;
        total_children = parsed_children.length;
        col_heights = [];
        for (i = _i = 0, _ref = globals.columns; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
          col_heights.push(padding_y);
        }
        savePosition = function(child) {
          var col, colspan, j, offset_x, offset_y, _j, _results;
          col = child.col;
          colspan = child.colspan;
          offset_x = (child.col * globals.col_width) + globals.child_offset;
          offset_y = col_heights[col];
          positions[child.i] = {
            left: offset_x,
            top: offset_y
          };
          col_heights[col] += child.height + gutter_y;
          if (colspan >= 1) {
            _results = [];
            for (j = _j = 1; 1 <= colspan ? _j < colspan : _j > colspan; j = 1 <= colspan ? ++_j : --_j) {
              _results.push(col_heights[col + j] = col_heights[col]);
            }
            return _results;
          }
        };
        determineMultiposition = function(child) {
          var chosen_col, col, colspan, height, kosher, next_height, offset, possible_col_heights, possible_cols, span, _j, _k;
          possible_cols = col_heights.length - child.colspan + 1;
          possible_col_heights = col_heights.slice(0).splice(0, possible_cols);
          chosen_col = void 0;
          for (offset = _j = 0; 0 <= possible_cols ? _j < possible_cols : _j > possible_cols; offset = 0 <= possible_cols ? ++_j : --_j) {
            col = _this.lowestCol(possible_col_heights, offset);
            colspan = child.colspan;
            height = col_heights[col];
            kosher = true;
            for (span = _k = 1; 1 <= colspan ? _k < colspan : _k > colspan; span = 1 <= colspan ? ++_k : --_k) {
              next_height = col_heights[col + span];
              if (height < next_height) {
                kosher = false;
                break;
              }
            }
            if (kosher) {
              chosen_col = col;
              break;
            }
          }
          return chosen_col;
        };
        saved_children = [];
        recalculateSavedChildren = function() {
          var index, pop_i, saved_child, saved_i, to_pop, _j, _k, _ref1, _ref2, _results;
          to_pop = [];
          for (saved_i = _j = 0, _ref1 = saved_children.length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; saved_i = 0 <= _ref1 ? ++_j : --_j) {
            saved_child = saved_children[saved_i];
            saved_child.col = determineMultiposition(saved_child);
            if (saved_child.col >= 0) {
              savePosition(saved_child);
              to_pop.push(saved_i);
            }
          }
          _results = [];
          for (pop_i = _k = _ref2 = to_pop.length - 1; _k >= 0; pop_i = _k += -1) {
            index = to_pop[pop_i];
            _results.push(saved_children.splice(index, 1));
          }
          return _results;
        };
        positions = [];
        (determinePositions = function() {
          var child, _j, _results;
          _results = [];
          for (i = _j = 0; 0 <= total_children ? _j < total_children : _j > total_children; i = 0 <= total_children ? ++_j : --_j) {
            child = parsed_children[i];
            if (!(!include_dragged && child.el.hasClass(dragged_class))) {
              if (child.colspan > 1) {
                child.col = determineMultiposition(child);
              } else {
                child.col = _this.lowestCol(col_heights);
              }
              if (child.col === void 0) {
                saved_children.push(child);
              } else {
                savePosition(child);
              }
              _results.push(recalculateSavedChildren());
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        })();
        if (options.autoHeight) {
          grid_height = col_heights[this.highestCol(col_heights)] - gutter_y;
          globals.container_height = grid_height + padding_y;
        }
        return positions;
      };
	
      Plugin.prototype.enableDragNDrop = function() {
        var $clone, $container, $placeholder, $selected, active_class, clone_class, current_container_class, delete_clone, drag_clone, drag_rate, drag_timeout, dragged_class, options, original_container_class, placeholder_class, previous_container_class, selected_offset_x, selected_offset_y,
          _this = this;
        options = this.options;
        $container = this.$container;
        active_class = options.activeClass;
        dragged_class = options.draggedClass;
        placeholder_class = options.placeholderClass;
        original_container_class = options.originalContainerClass;
        current_container_class = options.currentContainerClass;
        previous_container_class = options.previousContainerClass;
        delete_clone = options.deleteClone;
        drag_rate = options.dragRate;
        drag_clone = options.dragClone;
        clone_class = options.cloneClass;
        $selected = $placeholder = $clone = selected_offset_y = selected_offset_x = null;
        drag_timeout = false;
        if (options.enableDrag) {
          $container.children("." + active_class).filter(options.dragWhitelist).draggable({
            addClasses: false,
            containment: 'document',
            handle: options.handle,
            zIndex: 9999,
            start: function(e, ui) {
              var selected_tag;
              _this.globals.dragging = true;
              $selected = $(e.target);
              if (drag_clone) {
                $clone = $selected.clone(false, false).insertBefore($selected).addClass(clone_class);
              }
              $selected.addClass(dragged_class);
              selected_tag = $selected.prop("tagName");
              $placeholder = $("<" + selected_tag + " class='" + placeholder_class + "' style='height: " + ($selected.height()) + "px; width: " + ($selected.width()) + "px'></" + selected_tag + ">");
              $selected.parent().addClass(original_container_class).addClass(current_container_class);
              selected_offset_y = $selected.outerHeight() / 2;
              return selected_offset_x = $selected.outerWidth() / 2;
            },
            drag: function(e, ui) {
              if (!drag_timeout && !(drag_clone && delete_clone && $("." + current_container_class)[0] === $("." + original_container_class)[0])) {
                $placeholder.remove().appendTo("." + current_container_class);
                $("." + current_container_class).trigger("ss-setTargetPosition");
				if ( ($(e.target).offset().top + $(e.target).height()) > $('#recyclebin').offset().top && $(e.target).offset().left + $(e.target).width() > $('#recyclebin').offset().left && $(e.target).offset().left < $('#recyclebin').offset().left+$('#recyclebin').width()){
					$(e.target).addClass('onreyclebin');
				}
				else $(e.target).removeClass('onreyclebin');
                drag_timeout = true;
                window.setTimeout((function() {
                  return drag_timeout = false;
                }), drag_rate);
              }
              ui.position.left = e.pageX - $selected.parent().offset().left - selected_offset_x;
              return ui.position.top = e.pageY - $selected.parent().offset().top - selected_offset_y;
            },
            stop: function(e,ui) {
              var $current_container, $original_container, $previous_container;
              _this.globals.dragging = false;
              $original_container = $("." + original_container_class);
              $current_container = $("." + current_container_class);
              $previous_container = $("." + previous_container_class);
              $selected.removeClass(dragged_class);
              $("." + placeholder_class).remove();
				if ( ($(e.target).offset().top + $(e.target).height()) > $('#recyclebin').offset().top && $(e.target).offset().left + $(e.target).width() > $('#recyclebin').offset().left && $(e.target).offset().left < $('#recyclebin').offset().left+$('#recyclebin').width()){
					tabpage.changeactivecards('remove',$(e.target).attr('id'));
				}
				else $(e.target).removeClass('onreyclebin');
              if (drag_clone) {
                if (delete_clone && $("." + current_container_class)[0] === $("." + original_container_class)[0]) {
                  $clone.remove();
                  $("." + current_container_class).trigger("ss-rearrange");
                } else {
                    $clone.removeClass(clone_class);
                    $original_container.shapeshift($original_container.data("plugin_shapeshift").options);
                    $current_container.shapeshift($current_container.data("plugin_shapeshift").options);
                }
              }
              if ($original_container[0] === $current_container[0]) {
                $current_container.trigger("ss-rearranged", $selected);
              } else {
                $original_container.trigger("ss-removed", $selected);
                $current_container.trigger("ss-added", $selected);
              }
              $original_container.trigger("ss-arrange").removeClass(original_container_class);
              $current_container.trigger("ss-arrange", true).removeClass(current_container_class);
              $previous_container.trigger("ss-arrange").removeClass(previous_container_class);
              return $selected = $placeholder = null;
            }
          });
        }
        if (options.enableCrossDrop) {
          return $container.droppable({
            accept: options.crossDropWhitelist,
            tolerance: 'intersect',
            over: function(e) {
              $("." + previous_container_class).removeClass(previous_container_class);
              $("." + current_container_class).removeClass(current_container_class).addClass(previous_container_class);
              return $(e.target).addClass(current_container_class);
            },
            drop: function(e, selected) {
              var $current_container, $original_container, $previous_container;
              if (_this.options.enableTrash) {
                $original_container = $("." + original_container_class);
                $current_container = $("." + current_container_class);
                $previous_container = $("." + previous_container_class);
                $selected = $(selected.helper);
                $current_container.trigger("ss-trashed", $selected);
                $selected.remove();
                $original_container.trigger("ss-rearrange").removeClass(original_container_class);
                $current_container.trigger("ss-rearrange").removeClass(current_container_class);
                return $previous_container.trigger("ss-arrange").removeClass(previous_container_class);
              }
            }
          });
        }
      };

      Plugin.prototype.setTargetPosition = function() {
        var $selected, $start_container, $target, attributes, child_positions, cutoff_end, cutoff_start, distance, dragged_class, options, parsed_children, placeholder_class, position_i, previous_container_class, selected_x, selected_y, shortest_distance, target_position, total_positions, x_dist, y_dist, _i;
        options = this.options;
        if (!options.enableTrash) {
          dragged_class = options.draggedClass;
          $selected = $("." + dragged_class);
          $start_container = $selected.parent();
          parsed_children = this.parsedChildren;
          child_positions = this.getPositions(false);
          total_positions = child_positions.length;
          selected_x = $selected.offset().left - $start_container.offset().left + (this.globals.col_width / 2);
          selected_y = $selected.offset().top - $start_container.offset().top + ($selected.height() / 2);
          shortest_distance = 9999999;
          target_position = 0;
          if (total_positions > 1) {
            cutoff_start = options.cutoffStart + 1 || 0;
            cutoff_end = options.cutoffEnd || total_positions;
            for (position_i = _i = cutoff_start; cutoff_start <= cutoff_end ? _i < cutoff_end : _i > cutoff_end; position_i = cutoff_start <= cutoff_end ? ++_i : --_i) {
              attributes = child_positions[position_i];
              if (attributes) {
                y_dist = selected_x - attributes.left;
                x_dist = selected_y - attributes.top;
                if (y_dist > 0 && x_dist > 0) {
                  distance = Math.sqrt((x_dist * x_dist) + (y_dist * y_dist));
                  if (distance < shortest_distance) {
                    shortest_distance = distance;
                    target_position = position_i;
                    if (position_i === total_positions - 1) {
                      if (y_dist > parsed_children[position_i].height / 2) {
                        target_position++;
                      }
                    }
                  }
                }
              }
            }
            if (target_position === parsed_children.length) {
              $target = parsed_children[target_position - 1].el;
              $selected.insertAfter($target);
            } else {
              $target = parsed_children[target_position].el;
              $selected.insertBefore($target);
            }
          } else {
            if (total_positions === 1) {
              attributes = child_positions[0];
              if (attributes.left < selected_x) {
                this.$container.append($selected);
              } else {
                this.$container.prepend($selected);
              }
            } else {
              this.$container.append($selected);
            }
          }
          this.arrange(true);
          if ($start_container[0] !== $selected.parent()[0]) {
              previous_container_class = options.previousContainerClass;
              if ($("." + previous_container_class).data("plugin_shapeshift").options.enableCrossDrop == true) {
                  return $("." + previous_container_class).trigger("ss-rearrange");
              } else {
                  return $("." + previous_container_class);
              }
          }
        } else {
          placeholder_class = this.options.placeholderClass;
          return $("." + placeholder_class).remove();
        }
      };

      Plugin.prototype.enableResize = function() {
        var animation_speed, binding, resizing,
          _this = this;
        animation_speed = this.options.animationSpeed;
        resizing = false;
        binding = "resize." + this.identifier;
        return $(window).on(binding, function() {
          if (!resizing) {
            resizing = true;
            setTimeout((function() {
              return _this.render();
            }), animation_speed / 3);
            setTimeout((function() {
              return _this.render();
            }), animation_speed / 3);
            return setTimeout(function() {
              resizing = false;
              return _this.render();
            }, animation_speed / 3);
          }
        });
      };

      Plugin.prototype.shuffle = function() {
        var calculateShuffled;
        calculateShuffled = function(container, activeClass) {
          var shuffle;
          shuffle = function(arr) {
            var i, j, x;
            j = void 0;
            x = void 0;
            i = arr.length;
            while (i) {
              j = parseInt(Math.random() * i);
              x = arr[--i];
              arr[i] = arr[j];
              arr[j] = x;
            }
            return arr;
          };
          return container.each(function() {
            var items;
            items = container.find("." + activeClass).filter(":visible");
            if (items.length) {
              return container.html(shuffle(items));
            } else {
              return this;
            }
          });
        };
        if (!this.globals.dragging) {
          calculateShuffled(this.$container, this.options.activeClass);
          this.enableFeatures();
          return this.$container.trigger("ss-rearrange");
        }
      };

      Plugin.prototype.lowestCol = function(array, offset) {
        var augmented_array, i, length, _i;
        if (offset == null) {
          offset = 0;
        }
        length = array.length;
        augmented_array = [];
        for (i = _i = 0; 0 <= length ? _i < length : _i > length; i = 0 <= length ? ++_i : --_i) {
          augmented_array.push([array[i], i]);
        }
        augmented_array.sort(function(a, b) {
          var ret;
          ret = a[0] - b[0];
          if (ret === 0) {
            ret = a[1] - b[1];
          }
          return ret;
        });
        return augmented_array[offset][1];
      };

      Plugin.prototype.highestCol = function(array) {
        return $.inArray(Math.max.apply(window, array), array);
      };

      Plugin.prototype.destroy = function() {
        var $active_children, $container, active_class;
        $container = this.$container;
        $container.off("ss-arrange");
        $container.off("ss-rearrange");
        $container.off("ss-setTargetPosition");
        $container.off("ss-destroy");
        active_class = this.options.activeClass;
        $active_children = $container.find("." + active_class);
        if (this.options.enableDrag) {
          $active_children.draggable('destroy');
        }
        if (this.options.enableCrossDrop) {
          $container.droppable('destroy');
        }
        $active_children.removeClass(active_class);
        return $container.removeClass(this.identifier);
      };

      return Plugin;

    })();
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        var bound_indentifier, old_class, _ref, _ref1;
        old_class = (_ref = $(this).attr("class")) != null ? (_ref1 = _ref.match(/shapeshifted_container_\w+/)) != null ? _ref1[0] : void 0 : void 0;
        if (old_class) {
          bound_indentifier = "resize." + old_class;
          $(window).off(bound_indentifier);
          $(this).removeClass(old_class);
        }
        return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      });
    };
  })(jQuery, window, document);

}).call(this);
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

(function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function s(e,t){var s=n(e,t)?i:r;s(e,t)}var n,r,i;if("classList"in document.documentElement){n=function(e,t){return e.classList.contains(t)};r=function(e,t){e.classList.add(t)};i=function(e,t){e.classList.remove(t)}}else{n=function(e,n){return t(n).test(e.className)};r=function(e,t){if(!n(e,t)){e.className=e.className+" "+t}};i=function(e,n){e.className=e.className.replace(t(n)," ")}}var o={hasClass:n,addClass:r,removeClass:i,toggleClass:s,has:n,add:r,remove:i,toggle:s};if(typeof define==="function"&&define.amd){define(o)}else{e.classie=o}})(window)

/**
 * gnmenu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';

	// http://stackoverflow.com/a/11381730/989439
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}

	function gnMenu( el, options ) {	
		this.el = el;
		this._init();
	}

	gnMenu.prototype = {
		_init : function() {
			this.trigger = this.el.querySelector( 'a.icon-menu' );
			this.menu = this.el.querySelector( 'nav.gn-menu-wrapper' );
			this.isMenuOpen = false;
			this.eventtype = mobilecheck() ? 'touchstart' : 'click';
			this._initEvents();

			var self = this;
			this.bodyClickFn = function() {
				self._closeMenu();
				this.removeEventListener( self.eventtype, self.bodyClickFn );
			};
		},
		_initEvents : function() {
			var self = this;

			if( !mobilecheck() ) {
				this.trigger.addEventListener( 'mouseover', function(ev) { self._openIconMenu(); } );
				this.trigger.addEventListener( 'mouseout', function(ev) { self._closeIconMenu(); } );
			
				this.menu.addEventListener( 'mouseover', function(ev) {
					self._openMenu(); 
					document.addEventListener( self.eventtype, self.bodyClickFn ); 
				} );
			}
			this.trigger.addEventListener( this.eventtype, function( ev ) {
				ev.stopPropagation();
				ev.preventDefault();
				if( self.isMenuOpen ) {
					self._closeMenu();
					document.removeEventListener( self.eventtype, self.bodyClickFn );
				}
				else {
					self._openMenu();
					document.addEventListener( self.eventtype, self.bodyClickFn );
				}
			} );
			this.menu.addEventListener( this.eventtype, function(ev) { ev.stopPropagation(); } );
		},
		_openIconMenu : function() {
			classie.add( this.menu, 'gn-open-part' );
			$('.gn-trigger').css('background','white');
			$('a.gn-icon.icon-menu').css('color','#5f6f81');
		},
		_closeIconMenu : function() {
			classie.remove( this.menu, 'gn-open-part' );
			$('.gn-trigger').css('background','transparent');
			$('a.gn-icon.icon-menu').css('color','white');
		},
		_openMenu : function() {
			if( this.isMenuOpen ) return;
			classie.add( this.trigger, 'gn-selected' );
			this.isMenuOpen = true;
			classie.add( this.menu, 'gn-open-all' );
			this._closeIconMenu();
			$('.gn-trigger').css('background','white').css('padding-right','240px');
			$('a.gn-icon.icon-menu').css('color','#5f6f81');
		},
		_closeMenu : function() {
			if( !this.isMenuOpen ) return;
			classie.remove( this.trigger, 'gn-selected' );
			this.isMenuOpen = false;
			classie.remove( this.menu, 'gn-open-all' );
			this._closeIconMenu();
			$('.gn-trigger').css('background','transparent');
			$('.gn-trigger').css('padding-right','0px');
			$('a.gn-icon.icon-menu').css('color','white');
		}
	}

	// add to global namespace
	window.gnMenu = gnMenu;

} )( window );