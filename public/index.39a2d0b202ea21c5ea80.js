/*! For license information please see index.39a2d0b202ea21c5ea80.js.LICENSE.txt */
(()=>{var e={771:(e,t,n)=>{var r=Object.create,i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,u=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=e=>i(e,"__esModule",{value:!0}),m=e=>((e,t,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of l(t))d.call(e,r)||"default"===r||i(e,r,{get:()=>t[r],enumerable:!(n=a(t,r))||n.enumerable});return e})(f(i(null!=e?r(u(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);((e,t)=>{for(var n in f(e),t)i(e,n,{get:t[n],enumerable:!0})})(t,{AbstractDerivation:()=>D,Atom:()=>ee,Box:()=>ie,ConstantDerivation:()=>oe,DerivationFromSource:()=>j,PointerProxy:()=>we,Ticker:()=>se,getPointerParts:()=>V,isDerivation:()=>w,isPointer:()=>X,iterateAndCountTicks:()=>ae,iterateOver:()=>le,pointer:()=>$,prism:()=>_e,val:()=>re,valueDerivation:()=>ne});var g,v,y=m(n(878)),b=m(n(409)),x=m(n(935)),_=class{constructor(){this._lastTapperId=0,this._tappers=new Map,this.tappable=new class{constructor(e){this._untapFromSourceTimeout=null,this._cb=e=>{this._tappers.forEach((t=>{t(e)}))},this._lastTapperId=0,this._untapFromSource=null,this._props=e,this._tappers=new Map}_check(){this._untapFromSource?0===this._tappers.size&&this._scheduleToUntapFromSource():0!==this._tappers.size&&(this._untapFromSource=this._props.tapToSource(this._cb))}_scheduleToUntapFromSource(){null===this._untapFromSourceTimeout&&(this._untapFromSourceTimeout=setTimeout((()=>{this._untapFromSourceTimeout=null,0===this._tappers.size&&(this._untapFromSource(),this._untapFromSource=null)}),0))}tap(e){const t=this._lastTapperId++;return this._tappers.set(t,e),this._check(),()=>{this._removeTapperById(t)}}_removeTapperById(e){this._tappers.delete(e),this._check()}}({tapToSource:e=>this._tap(e)})}_tap(e){const t=this._lastTapperId++;return this._tappers.set(t,e),this._onNumberOfTappersChangeListener&&this._onNumberOfTappersChangeListener(this._tappers.size),()=>{this._removeTapperById(t)}}_removeTapperById(e){const t=this._tappers.size;this._tappers.delete(e),t!==this._tappers.size&&this._onNumberOfTappersChangeListener&&this._onNumberOfTappersChangeListener(this._tappers.size)}emit(e){this._tappers.forEach((t=>{t(e)}))}hasTappers(){return 0!==this._tappers.size}onNumberOfTappersChange(e){this._onNumberOfTappersChangeListener=e}};function w(e){return e&&e.isDerivation&&!0===e.isDerivation}(v=g||(g={}))[v.none=0]="none",v[v.dep=1]="dep",v[v.inner=2]="inner";var S=()=>{class e extends D{constructor(e,t){return super(),this._depDerivation=e,this._fn=t,this._innerDerivation=void 0,this._staleDependency=1,this._addDependency(e),this}_recalculateHot(){const e=this._staleDependency;if(this._staleDependency=0,2===e)return this._innerDerivation.getValue();const t=this._fn(this._depDerivation.getValue());return w(t)?(this._innerDerivation=t,this._addDependency(t),t.getValue()):t}_recalculateCold(){const e=this._fn(this._depDerivation.getValue());return w(e)?e.getValue():e}_recalculate(){return this.isHot?this._recalculateHot():this._recalculateCold()}_reactToDependencyBecomingStale(e){const t=e===this._depDerivation?1:2;if(2===t&&e!==this._innerDerivation)throw Error("got a _reactToDependencyBecomingStale() from neither the dep nor the inner derivation");0===this._staleDependency?(this._staleDependency=t,1===t&&this._removeInnerDerivation()):1===this._staleDependency||1===t&&(this._staleDependency=1,this._removeInnerDerivation())}_removeInnerDerivation(){this._innerDerivation&&(this._removeDependency(this._innerDerivation),this._innerDerivation=void 0)}_keepHot(){this._staleDependency=1,this.getValue()}_becomeCold(){this._staleDependency=1,this._removeInnerDerivation()}}return e.displayName="flatMap",e},E=void 0,M=()=>class extends D{constructor(e,t){super(),this._dep=e,this._fn=t,this._addDependency(e)}_recalculate(){return this._fn(this._dep.getValue())}_reactToDependencyBecomingStale(){}},T=void 0,P=class{constructor(){this._head=void 0}peek(){return this._head&&this._head.data}pop(){const e=this._head;if(e)return this._head=e.next,e.data}push(e){const t={next:this._head,data:e};this._head=t}};function C(){const e=new P,t=()=>{};return{type:"Dataverse_discoveryMechanism",startIgnoringDependencies:()=>{e.push(t)},stopIgnoringDependencies:()=>{e.peek()!==t||e.pop()},reportResolutionStart:n=>{const r=e.peek();r&&r(n),e.push(t)},reportResolutionEnd:t=>{e.pop()},pushCollector:t=>{e.push(t)},popCollector:t=>{if(e.peek()!==t)throw new Error("Popped collector is not on top of the stack");e.pop()}}}var{startIgnoringDependencies:A,stopIgnoringDependencies:k,reportResolutionEnd:R,reportResolutionStart:I,pushCollector:O,popCollector:L}=function(){const e="__dataverse_discoveryMechanism_sharedStack";if(window){const t=window[e];if(t&&"object"==typeof t&&"Dataverse_discoveryMechanism"===t.type)return t;{const t=C();return window[e]=t,t}}return C()}(),D=class{constructor(){this.isDerivation=!0,this._didMarkDependentsAsStale=!1,this._isHot=!1,this._isFresh=!1,this._lastValue=void 0,this._dependents=new Set,this._dependencies=new Set,this._internal_markAsStale=e=>{this._reactToDependencyBecomingStale(e),this._didMarkDependentsAsStale||(this._didMarkDependentsAsStale=!0,this._isFresh=!1,this._dependents.forEach((e=>{e(this)})))}}get isHot(){return this._isHot}_addDependency(e){this._dependencies.has(e)||(this._dependencies.add(e),this._isHot&&e.addDependent(this._internal_markAsStale))}_removeDependency(e){this._dependencies.has(e)&&(this._dependencies.delete(e),this._isHot&&e.removeDependent(this._internal_markAsStale))}changes(e){return new class{constructor(e,t){return this._possiblyMarkAsStale=()=>{this._ticker.onThisOrNextTick(this._refresh)},this._refresh=()=>{const e=this._derivation.getValue();e===this._lastValue&&!0===this._lastValueRecorded||(this._lastValue=e,this._lastValueRecorded=!0,this._emitter.emit(e))},this._derivation=e,this._ticker=t,this._emitter=new _,this._emitter.onNumberOfTappersChange((()=>{this._reactToNumberOfTappersChange()})),this._hadTappers=!1,this._lastValueRecorded=!1,this._lastValue=void 0,this}_reactToNumberOfTappersChange(){const e=this._emitter.hasTappers();e!==this._hadTappers&&(this._hadTappers=e,e?this._derivation.addDependent(this._possiblyMarkAsStale):this._derivation.removeDependent(this._possiblyMarkAsStale))}tappable(){return this._emitter.tappable}}(this,e).tappable()}changesWithoutValues(){return new class{constructor(e,t=!1){return this.dontEmitValues=t,this._possiblyMarkAsStale=()=>{this._emitter.emit(void 0)},this._derivation=e,this._emitter=new _,this._emitter.onNumberOfTappersChange((()=>{this._reactToNumberOfTappersChange()})),this._hadTappers=!1,this}_reactToNumberOfTappersChange(){const e=this._emitter.hasTappers();e!==this._hadTappers&&(this._hadTappers=e,e?this._derivation.addDependent(this._possiblyMarkAsStale):this._derivation.removeDependent(this._possiblyMarkAsStale))}tappable(){return this._emitter.tappable}}(this).tappable()}keepHot(){return this.changesWithoutValues().tap((()=>{}))}tapImmediate(e,t){const n=this.changes(e).tap(t);return t(this.getValue()),n}addDependent(e){const t=this._dependents.size>0;this._dependents.add(e),t!==this._dependents.size>0&&this._reactToNumberOfDependentsChange()}removeDependent(e){const t=this._dependents.size>0;this._dependents.delete(e),t!==this._dependents.size>0&&this._reactToNumberOfDependentsChange()}_markAsStale(e){this._internal_markAsStale(e)}getValue(){if(I(this),!this._isFresh){const e=this._recalculate();this._lastValue=e,this._isHot&&(this._isFresh=!0,this._didMarkDependentsAsStale=!1)}return R(this),this._lastValue}_reactToNumberOfDependentsChange(){const e=this._dependents.size>0;e!==this._isHot&&(this._isHot=e,this._didMarkDependentsAsStale=!1,this._isFresh=!1,e?(this._dependencies.forEach((e=>{e.addDependent(this._internal_markAsStale)})),this._keepHot()):(this._dependencies.forEach((e=>{e.removeDependent(this._internal_markAsStale)})),this._becomeCold()))}_keepHot(){}_becomeCold(){}map(e){return function(e,t){return T||(T=M()),new T(e,t)}(this,e)}flatMap(e){return function(e,t){return E||(E=S()),new E(e,t)}(this,e)}},N=()=>{},j=class extends D{constructor(e,t){super(),this._tapToSource=e,this._getValueFromSource=t,this._untapFromChanges=N,this._cachedValue=void 0,this._hasCachedValue=!1}_recalculate(){return this.isHot?(this._hasCachedValue||(this._cachedValue=this._getValueFromSource(),this._hasCachedValue=!0),this._cachedValue):this._getValueFromSource()}_keepHot(){this._hasCachedValue=!1,this._cachedValue=void 0,this._untapFromChanges=this._tapToSource((e=>{this._hasCachedValue=!0,this._cachedValue=e,this._markAsStale(this)}))}_becomeCold(){this._untapFromChanges(),this._untapFromChanges=N,this._hasCachedValue=!1,this._cachedValue=void 0}_reactToDependencyBecomingStale(){}},z=new WeakMap,B=Symbol("pointerMeta"),F=new WeakMap,U={get(e,t){if(t===B)return z.get(e);let n=F.get(e);if(n||(n={},F.set(e,n)),n[t])return n[t];const r=z.get(e),i=G({root:r.root,path:[...r.path,t]});return n[t]=i,i}},H=e=>e[B],V=e=>{const{root:t,path:n}=H(e);return{root:t,path:n}};function G(e){var t;const n={root:e.root,path:null!=(t=e.path)?t:[]},r={};return z.set(r,n),new Proxy(r,U)}var W,q,$=G,X=e=>e&&!!H(e),K=(e,t,n)=>{if(0===t.length)return n(e);if(Array.isArray(e)){let[r,...i]=t;r=parseInt(String(r),10),isNaN(r)&&(r=0);const o=e[r],a=K(o,i,n);if(o===a)return e;const s=[...e];return s.splice(r,1,a),s}if("object"==typeof e&&null!==e){const[i,...a]=t,l=e[i],u=K(l,a,n);if(l===u)return e;return r=((e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))h.call(t,n)&&p(e,n,t[n]);return e})({},e),o(r,s({[i]:u}))}{const[e,...r]=t;return{[e]:K(void 0,r,n)}}var r};(q=W||(W={}))[q.Dict=0]="Dict",q[q.Array=1]="Array",q[q.Other=2]="Other";var Y=e=>Array.isArray(e)?1:(0,b.default)(e)?0:2,Z=(e,t,n=Y(e))=>0===n&&"string"==typeof t||1===n&&J(t)?e[t]:void 0,J=e=>{const t="number"==typeof e?e:parseInt(e,10);return!isNaN(t)&&t>=0&&t<1/0&&(0|t)===t},Q=class{constructor(e,t){this._parent=e,this._path=t,this.children=new Map,this.identityChangeListeners=new Set}addIdentityChangeListener(e){this.identityChangeListeners.add(e)}removeIdentityChangeListener(e){this.identityChangeListeners.delete(e),this._checkForGC()}removeChild(e){this.children.delete(e),this._checkForGC()}getChild(e){return this.children.get(e)}getOrCreateChild(e){let t=this.children.get(e);return t||(t=t=new Q(this,this._path.concat([e])),this.children.set(e,t)),t}_checkForGC(){this.identityChangeListeners.size>0||this.children.size>0||this._parent&&this._parent.removeChild((0,x.default)(this._path))}},ee=class{constructor(e){this.$$isIdentityDerivationProvider=!0,this.reduceState=(e,t)=>{const n=function(e,t,n){return 0===t.length?n(e):K(e,t,n)}(this.getState(),e,t);return this.setState(n),n},this._onPathValueChange=(e,t)=>{const n=this._getOrCreateScopeForPath(e);return n.identityChangeListeners.add(t),()=>{n.identityChangeListeners.delete(t)}},this._currentState=e,this._rootScope=new Q(void 0,[]),this.pointer=$({root:this,path:[]})}setState(e){const t=this._currentState;this._currentState=e,this._checkUpdates(this._rootScope,t,e)}getState(){return this._currentState}getIn(e){return 0===e.length?this.getState():(0,y.default)(this.getState(),e)}setIn(e,t){return this.reduceState(e,(()=>t))}_checkUpdates(e,t,n){if(t===n)return;if(e.identityChangeListeners.forEach((e=>e(n))),0===e.children.size)return;const r=Y(t),i=Y(n);2===r&&r===i||e.children.forEach(((e,o)=>{const a=Z(t,o,r),s=Z(n,o,i);this._checkUpdates(e,a,s)}))}_getOrCreateScopeForPath(e){let t=this._rootScope;for(const n of e)t=t.getOrCreateChild(n);return t}getIdentityDerivation(e){return new j((t=>this._onPathValueChange(e,t)),(()=>this.getIn(e)))}},te=new WeakMap,ne=e=>{const t=H(e);let n=te.get(t);if(!n){const e=t.root;if("object"!=typeof(r=e)||null===r||!0!==r.$$isIdentityDerivationProvider)throw new Error("Cannot run valueDerivation() on a pointer whose root is not an IdentityChangeProvider");const{path:i}=t;n=e.getIdentityDerivation(i),te.set(t,n)}var r;return n},re=e=>X(e)?ne(e).getValue():w(e)?e.getValue():e,ie=class{constructor(e){this._value=e,this._emitter=new _,this._publicDerivation=new j((e=>this._emitter.tappable.tap(e)),this.get.bind(this))}set(e){e!==this._value&&(this._value=e,this._emitter.emit(e))}get(){return this._value}get derivation(){return this._publicDerivation}},oe=class extends D{constructor(e){return super(),this._v=e,this}_recalculate(){return this._v}_reactToDependencyBecomingStale(){}};function*ae(e){let t;if(X(e))t=ne(e);else{if(!w(e))throw new Error("Only pointers and derivations are supported");t=e}let n=0;const r=t.changesWithoutValues().tap((()=>{n++}));try{for(;;){const e=n;n=0,yield{value:t.getValue(),ticks:e}}}finally{r()}}var se=class{constructor(){this._ticking=!1,this._scheduledForThisOrNextTick=new Set,this._scheduledForNextTick=new Set,this._timeAtCurrentTick=0}onThisOrNextTick(e){this._scheduledForThisOrNextTick.add(e)}onNextTick(e){this._scheduledForNextTick.add(e)}offThisOrNextTick(e){this._scheduledForThisOrNextTick.delete(e)}offNextTick(e){this._scheduledForNextTick.delete(e)}get time(){return this._ticking?this._timeAtCurrentTick:performance.now()}tick(e=performance.now()){this._ticking=!0,this._timeAtCurrentTick=e,this._scheduledForNextTick.forEach((e=>this._scheduledForThisOrNextTick.add(e))),this._scheduledForNextTick.clear(),this._tick(0),this._ticking=!1}_tick(e){const t=this.time;if(e>10&&console.warn("_tick() recursing for 10 times"),e>100)throw new Error("Maximum recursion limit for _tick()");const n=this._scheduledForThisOrNextTick;if(this._scheduledForThisOrNextTick=new Set,n.forEach((e=>{e(t)})),this._scheduledForThisOrNextTick.size>0)return this._tick(e+1)}};function*le(e){let t;if(X(e))t=ne(e);else{if(!w(e))throw new Error("Only pointers and derivations are supported");t=e}const n=new se,r=t.changes(n).tap((e=>{}));try{for(;;)n.tick(),yield t.getValue()}finally{r()}}var ce=()=>{},ue=class extends D{constructor(e){super(),this._fn=e,this._cacheOfDendencyValues=new Map,this._possiblyStaleDeps=new Set,this._prismScope=new de}_recalculate(){let e;if(this._possiblyStaleDeps.size>0){let e=!1;A();for(const t of this._possiblyStaleDeps)if(this._cacheOfDendencyValues.get(t)!==t.getValue()){e=!0;break}if(k(),this._possiblyStaleDeps.clear(),!e)return this._lastValue}const t=new Set;this._cacheOfDendencyValues.clear();const n=e=>{t.add(e),this._addDependency(e)};O(n),fe.push(this._prismScope);try{e=this._fn()}catch(e){console.error(e)}finally{fe.pop()!==this._prismScope&&console.warn("The Prism hook stack has slipped. This is a bug.")}return L(n),this._dependencies.forEach((e=>{t.has(e)||this._removeDependency(e)})),this._dependencies=t,A(),t.forEach((e=>{this._cacheOfDendencyValues.set(e,e.getValue())})),k(),e}_reactToDependencyBecomingStale(e){this._possiblyStaleDeps.add(e)}_keepHot(){this._prismScope=new de,A(),this.getValue(),k()}_becomeCold(){he(this._prismScope),this._prismScope=new de}},de=class{constructor(){this.isPrismScope=!0,this._subs={}}sub(e){return this._subs[e]||(this._subs[e]=new de),this._subs[e]}get subs(){return this._subs}};function he(e){for(const[t,n]of Object.entries(e.subs))he(n);!function(e){const t=ge.get(e);if(t)for(const e of Object.keys(t))pe(t[e].cleanup,void 0);ge.delete(e)}(e)}function pe(e,t){let n=t,r=!1;try{n=e(),r=!0}catch(e){setTimeout((()=>{throw e}))}return{success:r,returnValue:n}}var fe=new P,me=new WeakMap,ge=new WeakMap,ve=new WeakMap;function ye(e,t){return void 0===e||void 0===t||e.length!==t.length||e.some(((e,n)=>e!==t[n]))}function be(e,t,n){const r=fe.peek();if(!r)throw new Error("prism.memo() is called outside of a prism() call.");let i=ve.get(r);i||(i={},ve.set(r,i)),i[e]||(i[e]={cachedValue:null,deps:[{}]});const o=i[e];return ye(o.deps,n)&&(A(),o.cachedValue=pe(t,void 0).returnValue,k(),o.deps=n),o.cachedValue}var xe=e=>new ue(e);xe.ref=function(e,t){const n=fe.peek();if(!n)throw new Error("prism.ref() is called outside of a prism() call.");let r=me.get(n);if(r||(r={},me.set(n,r)),r[e])return r[e];{const n={current:t};return r[e]=n,n}},xe.effect=function(e,t,n){const r=fe.peek();if(!r)throw new Error("prism.effect() is called outside of a prism() call.");let i=ge.get(r);i||(i={},ge.set(r,i)),i[e]||(i[e]={cleanup:ce,deps:[{}]});const o=i[e];ye(o.deps,n)&&(o.cleanup(),A(),o.cleanup=pe(t,ce).returnValue,k(),o.deps=n)},xe.memo=be,xe.ensurePrism=function(){if(!fe.peek())throw new Error("The parent function is called outside of a prism() call.")},xe.state=function(e,t){const{b:n,setValue:r}=xe.memo("state/"+e,(()=>{const e=new ie(t);return{b:e,setValue:t=>e.set(t)}}),[]);return[n.derivation.getValue(),r]},xe.scope=function(e,t){const n=fe.peek();if(!n)throw new Error("prism.scope() is called outside of a prism() call.");const r=n.sub(e);fe.push(r);const i=pe(t,void 0).returnValue;return fe.pop(),i},xe.sub=function(e,t,n){return be(e,(()=>xe(t)),n).getValue()},xe.inPrism=function(){return!!fe.peek()};var _e=xe,we=class{constructor(e){this.$$isIdentityDerivationProvider=!0,this._currentPointerBox=new ie(e),this.pointer=$({root:this,path:[]})}setPointer(e){this._currentPointerBox.set(e)}getIdentityDerivation(e){return this._currentPointerBox.derivation.flatMap((t=>{const n=e.reduce(((e,t)=>e[t]),t);return ne(n)}))}}},654:(e,t,n)=>{var r,i,o;e=n.nmd(e);var a,s=Object.create,l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,f=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&v(e,n,t[n]);if(p)for(var n of p(t))g.call(t,n)&&v(e,n,t[n]);return e},b=(e,t)=>c(e,d(t)),x=e=>l(e,"__esModule",{value:!0}),_=(e,t)=>{var n={};for(var r in e)m.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n},w=(e,t)=>function(){return t||(0,e[Object.keys(e)[0]])((t={exports:{}}).exports,t),t.exports},S=e=>((e,t,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let r of h(t))m.call(e,r)||"default"===r||l(e,r,{get:()=>t[r],enumerable:!(n=u(t,r))||n.enumerable});return e})(x(l(null!=e?s(f(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),E=(e,t,n)=>(v(e,"symbol"!=typeof t?t+"":t,n),n),M=w({"../node_modules/queue-microtask/index.js"(e,t){var n;t.exports="function"==typeof queueMicrotask?queueMicrotask.bind(window):e=>(n||(n=Promise.resolve())).then(e).catch((e=>setTimeout((()=>{throw e}),0)))}}),T=w({"../node_modules/polished/lib/internalHelpers/_curry.js"(e,t){"use strict";function n(e,t,r){return function(){var i=r.concat(Array.prototype.slice.call(arguments));return i.length>=t?e.apply(this,i):n(e,t,i)}}e.__esModule=!0,e.default=function(e){return n(e,e.length,[])},t.exports=e.default}}),P=w({"../node_modules/polished/lib/internalHelpers/_guard.js"(e,t){"use strict";e.__esModule=!0,e.default=void 0;e.default=function(e,t,n){return Math.max(e,Math.min(t,n))},t.exports=e.default}}),C=w({"../node_modules/polished/lib/internalHelpers/_hslToRgb.js"(e,t){"use strict";function n(e){return Math.round(255*e)}function r(e,t,r){return n(e)+","+n(t)+","+n(r)}e.__esModule=!0,e.default=void 0;e.default=function(e,t,n,i){if(void 0===i&&(i=r),0===t)return i(n,n,n);var o=(e%360+360)%360/60,a=(1-Math.abs(2*n-1))*t,s=a*(1-Math.abs(o%2-1)),l=0,c=0,u=0;o>=0&&o<1?(l=a,c=s):o>=1&&o<2?(l=s,c=a):o>=2&&o<3?(c=a,u=s):o>=3&&o<4?(c=s,u=a):o>=4&&o<5?(l=s,u=a):o>=5&&o<6&&(l=a,u=s);var d=n-a/2;return i(l+d,c+d,u+d)},t.exports=e.default}}),A=w({"../node_modules/polished/lib/internalHelpers/_nameToHex.js"(e,t){"use strict";e.__esModule=!0,e.default=void 0;var n={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};e.default=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return n[t]?"#"+n[t]:e},t.exports=e.default}}),k=w({"../node_modules/polished/lib/internalHelpers/_errors.js"(e,t){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e){var t="function"==typeof Map?new Map:void 0;return r=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return i(e,arguments,s(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)},r(e)}function i(e,t,n){return(i=o()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&a(i,n.prototype),i}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}e.__esModule=!0,e.default=void 0;var l={1:"Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",2:"Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",3:"Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",4:"Couldn't generate valid rgb string from %s, it returned %s.\n\n",5:"Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",6:"Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",7:"Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",8:"Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",9:"Please provide a number of steps to the modularScale helper.\n\n",10:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",11:'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',12:'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',13:'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',14:'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',15:'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',16:"You must provide a template to this method.\n\n",17:"You passed an unsupported selector state to this method.\n\n",18:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",19:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",20:"expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:"fontFace expects a name of a font-family.\n\n",24:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",25:"fontFace expects localFonts to be an array.\n\n",26:"fontFace expects fileFormats to be an array.\n\n",27:"radialGradient requries at least 2 color-stops to properly render.\n\n",28:"Please supply a filename to retinaImage() as the first argument.\n\n",29:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",32:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",33:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",34:"borderRadius expects a radius value as a string or number as the second argument.\n\n",35:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',36:"Property must be a string value.\n\n",37:"Syntax Error at %s.\n\n",38:"Formula contains a function that needs parentheses at %s.\n\n",39:"Formula is missing closing parenthesis at %s.\n\n",40:"Formula has too many closing parentheses at %s.\n\n",41:"All values in a formula must have the same unit or be unitless.\n\n",42:"Please provide a number of steps to the modularScale helper.\n\n",43:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",44:"Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",45:"Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",46:"Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",47:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",48:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",49:"Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",50:"Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",51:"Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",52:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",53:"fontFace expects localFonts to be an array.\n\n",54:"fontFace expects fileFormats to be an array.\n\n",55:"fontFace expects a name of a font-family.\n\n",56:"linearGradient requries at least 2 color-stops to properly render.\n\n",57:"radialGradient requries at least 2 color-stops to properly render.\n\n",58:"Please supply a filename to retinaImage() as the first argument.\n\n",59:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:"Property must be a string value.\n\n",62:"borderRadius expects a radius value as a string or number as the second argument.\n\n",63:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',64:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",65:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",66:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",67:"You must provide a template to this method.\n\n",68:"You passed an unsupported selector state to this method.\n\n",69:'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',70:'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',71:'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',72:'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',73:"Please provide a valid CSS variable.\n\n",74:"CSS variable not found and no default was provided.\n\n",75:"important requires a valid style object, got a %s instead.\n\n",76:"fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",77:'remToPx expects a value in "rem" but you provided it in "%s".\n\n',78:'base must be set in "px" or "%" but you set it in "%s".\n'};function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,i=t[0],o=[];for(r=1;r<t.length;r+=1)o.push(t[r]);return o.forEach((function(e){i=i.replace(/%[a-z]/,e)})),i}var u=function(e){var t,r;function i(t){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return n(e.call(this,c.apply(void 0,[l[t]].concat(i)))||this)}return r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,a(t,r),i}(r(Error));e.default=u,t.exports=e.default}}),R=w({"../node_modules/polished/lib/color/parseToRgb.js"(e,t){"use strict";e.__esModule=!0,e.default=function(e){if("string"!=typeof e)throw new i.default(3);var t=(0,r.default)(e);if(t.match(a))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(s)){var o=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:o}}if(t.match(l))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(c)){var f=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:f}}var m=u.exec(t);if(m)return{red:parseInt(""+m[1],10),green:parseInt(""+m[2],10),blue:parseInt(""+m[3],10)};var g=d.exec(t.substring(0,50));if(g)return{red:parseInt(""+g[1],10),green:parseInt(""+g[2],10),blue:parseInt(""+g[3],10),alpha:parseFloat(""+g[4])};var v=h.exec(t);if(v){var y=parseInt(""+v[1],10),b=parseInt(""+v[2],10)/100,x=parseInt(""+v[3],10)/100,_="rgb("+(0,n.default)(y,b,x)+")",w=u.exec(_);if(!w)throw new i.default(4,t,_);return{red:parseInt(""+w[1],10),green:parseInt(""+w[2],10),blue:parseInt(""+w[3],10)}}var S=p.exec(t.substring(0,50));if(S){var E=parseInt(""+S[1],10),M=parseInt(""+S[2],10)/100,T=parseInt(""+S[3],10)/100,P="rgb("+(0,n.default)(E,M,T)+")",C=u.exec(P);if(!C)throw new i.default(4,t,P);return{red:parseInt(""+C[1],10),green:parseInt(""+C[2],10),blue:parseInt(""+C[3],10),alpha:parseFloat(""+S[4])}}throw new i.default(5)};var n=o(C()),r=o(A()),i=o(k());function o(e){return e&&e.__esModule?e:{default:e}}var a=/^#[a-fA-F0-9]{6}$/,s=/^#[a-fA-F0-9]{8}$/,l=/^#[a-fA-F0-9]{3}$/,c=/^#[a-fA-F0-9]{4}$/,u=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,d=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,h=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,p=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;t.exports=e.default}}),I=w({"../node_modules/polished/lib/internalHelpers/_reduceHexValue.js"(e,t){"use strict";e.__esModule=!0,e.default=void 0;e.default=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},t.exports=e.default}}),O=w({"../node_modules/polished/lib/internalHelpers/_numberToHex.js"(e,t){"use strict";e.__esModule=!0,e.default=void 0;e.default=function(e){var t=e.toString(16);return 1===t.length?"0"+t:t},t.exports=e.default}}),L=w({"../node_modules/polished/lib/color/rgb.js"(e,t){"use strict";e.__esModule=!0,e.default=function(e,t,o){if("number"==typeof e&&"number"==typeof t&&"number"==typeof o)return(0,n.default)("#"+(0,r.default)(e)+(0,r.default)(t)+(0,r.default)(o));if("object"==typeof e&&void 0===t&&void 0===o)return(0,n.default)("#"+(0,r.default)(e.red)+(0,r.default)(e.green)+(0,r.default)(e.blue));throw new i.default(6)};var n=o(I()),r=o(O()),i=o(k());function o(e){return e&&e.__esModule?e:{default:e}}t.exports=e.default}}),D=w({"../node_modules/polished/lib/color/rgba.js"(e,t){"use strict";e.__esModule=!0,e.default=function(e,t,o,a){if("string"==typeof e&&"number"==typeof t){var s=(0,n.default)(e);return"rgba("+s.red+","+s.green+","+s.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof o&&"number"==typeof a)return a>=1?(0,r.default)(e,t,o):"rgba("+e+","+t+","+o+","+a+")";if("object"==typeof e&&void 0===t&&void 0===o&&void 0===a)return e.alpha>=1?(0,r.default)(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new i.default(7)};var n=o(R()),r=o(L()),i=o(k());function o(e){return e&&e.__esModule?e:{default:e}}t.exports=e.default}}),N=w({"../node_modules/polished/lib/color/transparentize.js"(e,t){"use strict";e.__esModule=!0,e.default=void 0;var n=a(T()),r=a(P()),i=a(D()),o=a(R());function a(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function l(e,t){if("transparent"===t)return t;var n=(0,o.default)(t),a="number"==typeof n.alpha?n.alpha:1,l=s({},n,{alpha:(0,r.default)(0,1,+(100*a-100*parseFloat(e)).toFixed(2)/100)});return(0,i.default)(l)}var c=(0,n.default)(l);e.default=c,t.exports=e.default}}),j=w({"../node_modules/react-error-boundary/dist/react-error-boundary.umd.js"(a,s){var l;l=function(e,t){"use strict";function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var r=n(t);function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var o={error:null},a=function(e){var t,n;function a(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state=o,t.updatedWithError=!1,t.resetErrorBoundary=function(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];null==t.props.onReset||(e=t.props).onReset.apply(e,r),t.reset()},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,i(t,n),a.getDerivedStateFromError=function(e){return{error:e}};var s=a.prototype;return s.reset=function(){this.updatedWithError=!1,this.setState(o)},s.componentDidCatch=function(e,t){var n,r;null==(n=(r=this.props).onError)||n.call(r,e,t)},s.componentDidMount=function(){null!==this.state.error&&(this.updatedWithError=!0)},s.componentDidUpdate=function(e){var t,n,r,i,o=this.state.error,a=this.props.resetKeys;null===o||this.updatedWithError?null!==o&&(void 0===(r=e.resetKeys)&&(r=[]),void 0===(i=a)&&(i=[]),r.length!==i.length||r.some((function(e,t){return!Object.is(e,i[t])})))&&(null==(t=(n=this.props).onResetKeysChange)||t.call(n,e.resetKeys,a),this.reset()):this.updatedWithError=!0},s.render=function(){var e=this.state.error,t=this.props,n=t.fallbackRender,i=t.FallbackComponent,o=t.fallback;if(null!==e){var a={error:e,resetErrorBoundary:this.resetErrorBoundary};if(r.isValidElement(o))return o;if("function"==typeof n)return n(a);if(i)return r.createElement(i,a);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},a}(r.Component);e.ErrorBoundary=a,e.useErrorHandler=function(e){var t=r.useState(null),n=t[0],i=t[1];if(null!=e)throw e;if(null!=n)throw n;return i},e.withErrorBoundary=function(e,t){var n=function(n){return r.createElement(a,t,r.createElement(e,n))},i=e.displayName||e.name||"Unknown";return n.displayName="withErrorBoundary("+i+")",n},Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof a&&void 0!==s?l(a,n(294)):(i=[t,n(294)],void 0===(o="function"==typeof(r=l)?r.apply(t,i):r)||(e.exports=o))}}),z=w({"../node_modules/jiff/lib/lcs.js"(e){function t(e,t,n,r,i,o){return t[i+r]===n[o+r]?{value:e[o+1][i+1].value,type:0}:e[o][i+1].value<e[o+1][i].value?{value:e[o][i+1].value+1,type:-1}:{value:e[o+1][i].value+1,type:1}}e.compare=function(e,n){for(var r=e.length,i=n.length,o=function(e,t){for(var n=0,r=Math.min(e.length,t.length);n<r&&e[n]===t[n];)++n;return n}(e,n),a=o<r&&o<i?function(e,t){for(var n=e.length-1,r=t.length-1,i=Math.min(n,r),o=0;o<i&&e[n-o]===t[r-o];)++o;return o}(e,n):0,s=a+o-1,l=function(e,t){var n,r,i,o=[];for(i=o[t]=[],r=0;r<e;++r)i[r]={value:e-r,type:-1};for(n=0;n<t;++n)o[n]=[],o[n][e]={value:t-n,type:1};return o[t][e]={value:0,type:0},o}(r-=s,i-=s),c=r-1;c>=0;--c)for(var u=i-1;u>=0;--u)l[u][c]=t(l,e,n,o,c,u);return{prefix:o,matrix:l,suffix:a}},e.reduce=function(e,t,n){var r,i,o,a,s=n.matrix,l=n.prefix;for(r=0;r<l;++r)t=e(t,0,r,r);for(o=r,l=s.length,r=0,i=0;r<l;)switch(a=s[r][i].type,t=e(t,a,r+o,i+o),a){case 0:++r,++i;break;case-1:++i;break;case 1:++r}for(r+=o,i+=o,l=n.suffix,o=0;o<l;++o)t=e(t,0,r+o,i+o);return t},e.REMOVE=-1,e.ADD=1,e.EQUAL=0}}),B=w({"../node_modules/jiff/lib/array.js"(e){e.cons=function(e,t){var n=t.length,r=new Array(n+1);r[0]=e;for(var i=0;i<n;++i)r[i+1]=t[i];return r},e.tail=function(e){for(var t=e.length-1,n=new Array(t),r=0;r<t;++r)n[r]=e[r+1];return n},e.map=function(e,t){for(var n=new Array(t.length),r=0;r<t.length;++r)n[r]=e(t[r]);return n}}}),F=w({"../node_modules/jiff/lib/jsonPointerParse.js"(e,t){t.exports=function(e,t){var r,i,o,a;for(r="/"===e.charAt(0)?1:0,i="",n.lastIndex=r;o=n.exec(e);)if(a=o[0],i+=e.slice(r,n.lastIndex-a.length),r=n.lastIndex,"/"===a){if(!1===t(i))return e;i=""}else i+="~1"===a?"/":"~";return t(i+=e.slice(r)),e};var n=/\/|~1|~0/g}}),U=w({"../node_modules/jiff/lib/jsonPointer.js"(e){var t=F();e.find=function(e,r,i,o){if("string"==typeof r){if(""===r)return{target:e,key:void 0};if(r===n)return{target:e,key:""};var a,s=e,l=void 0!==o;return t(r,(function(t){if(null==e)return s=null,!1;a=Array.isArray(e)?l?function(e,t,n,r){var i=t;if(i<0)throw new Error("array index out of bounds "+i);if(void 0!==r&&"function"==typeof e&&(i=e(t,n,r))<0)throw new Error("could not find patch context "+r);return i}(i,c(t),e,o):"-"===t?t:c(t):t,s=e,e=e[a]})),null===s?void 0:{target:s,key:a}}},e.join=function(e){return e.join(n)},e.absolute=function(e){return e[0]===n?e:n+e},e.parse=function(e){var n=[];return t(e,n.push.bind(n)),n},e.contains=function(e,t){return 0===t.indexOf(e)&&t[e.length]===n},e.encodeSegment=function(e){return e.replace(o,"~0").replace(r,"~1")},e.decodeSegment=function(e){return e.replace(i,n).replace(a,"~")},e.parseArrayIndex=c,e.isValidArrayIndex=l;var n="/",r=/\//g,i=/~1/g,o=/~/g,a=/~0/g,s=/^(0|[1-9]\d*)$/;function l(e){return s.test(e)}function c(e){if(l(e))return+e;throw new SyntaxError("invalid array index "+e)}}}),H=w({"../node_modules/jiff/lib/clone.js"(e,t){t.exports=function e(t){return null==t||"object"!=typeof t?t:Array.isArray(t)?function(t){for(var n=t.length,r=new Array(n),i=0;i<n;++i)r[i]=e(t[i]);return r}(t):function(t){for(var n,r=Object.keys(t),i={},o=0,a=r.length;o<a;++o)i[n=r[o]]=e(t[n]);return i}(t)}}}),V=w({"../node_modules/jiff/lib/deepEquals.js"(e,t){t.exports=function e(t,n){return t===n||(Array.isArray(t)&&Array.isArray(n)?function(t,n){if(t.length!==n.length)return!1;for(var r=0;r<t.length;++r)if(!e(t[r],n[r]))return!1;return!0}(t,n):"object"==typeof t&&"object"==typeof n&&function(t,n){if(null===t&&null!==n||null!==t&&null===n)return!1;var r=Object.keys(t),i=Object.keys(n);if(r.length!==i.length)return!1;for(var o,a=0;a<r.length;++a)if(!((o=r[a])in n)||!e(t[o],n[o]))return!1;return!0}(t,n))}}}),G=w({"../node_modules/jiff/lib/commutePaths.js"(e,t){var n=U();function r(e,t,n,r,i){var o=t.length-1,a=+t[o],s=+r[o],l=r.slice();return a>s||("add"===e.op||"copy"===e.op?l[o]=Math.max(0,s-i):"remove"===e.op&&(l[o]=Math.max(0,s+i))),l}function i(e){return"remove"===e.op?{op:e.op,path:e.path}:"copy"===e.op||"move"===e.op?{op:e.op,path:e.path,from:e.from}:{op:e.op,path:e.path,value:e.value}}t.exports=function(e,t){var o=n.parse(e.path),a=n.parse(t.path),s=function(e,t){var n=e.length,r=t.length;if(0===n||0===r||n<2&&r<2)return[];for(var i=n===r?n-1:Math.min(n,r),o=0;o<i&&e[o]===t[o];)++o;return e.slice(0,o)}(o,a),l=function(e,t,r){return n.isValidArrayIndex(e[r])&&n.isValidArrayIndex(t[r])}(o,a,s.length),c=i(e),u=i(t);return 0!==s.length||l?l?function(e,t,i,o){return t.length===o.length?(a=e,l=i,c=o,d=(s=t).length-1,h=+s[d],p=+c[d],h<p?"add"===a.op||"copy"===a.op?((u=c.slice())[d]=Math.max(0,p-1),l.path=n.absolute(n.join(u))):"remove"===a.op&&((u=c.slice())[d]=p+1,l.path=n.absolute(n.join(u))):"add"===l.op||"copy"===l.op?((u=s.slice())[d]=h+1,a.path=n.absolute(n.join(u))):h>p&&"remove"===l.op&&((u=s.slice())[d]=Math.max(0,h-1),a.path=n.absolute(n.join(u))),[l,a]):(t.length>o.length?(t=r(i,o,0,t,-1),e.path=n.absolute(n.join(t))):(o=r(e,t,0,o,1),i.path=n.absolute(n.join(o))),[i,e]);var a,s,l,c,u,d,h,p}(c,o,u,a):function(e,t,n,r){if(e.path===n.path)throw new TypeError("cannot commute "+e.op+","+n.op+" with identical object paths");return[n,e]}(c,0,u):[u,c]}}}),W=w({"../node_modules/jiff/lib/TestFailedError.js"(e,t){function n(e){Error.call(this),this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}t.exports=n,n.prototype=Object.create(Error.prototype),n.prototype.constructor=n}}),q=w({"../node_modules/jiff/lib/InvalidPatchOperationError.js"(e,t){function n(e){Error.call(this),this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}t.exports=n,n.prototype=Object.create(Error.prototype),n.prototype.constructor=n}}),$=w({"../node_modules/jiff/lib/PatchNotInvertibleError.js"(e,t){function n(e){Error.call(this),this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}t.exports=n,n.prototype=Object.create(Error.prototype),n.prototype.constructor=n}}),X=w({"../node_modules/jiff/lib/patches.js"(e){var t=U(),n=H(),r=V(),i=G(),o=B(),a=W(),s=q(),l=$(),c=t.find,u=t.parseArrayIndex;function d(e,t){var n=e.target;if(Array.isArray(n))if("-"===e.key)n.push(t);else{if(e.key>n.length)throw new s("target of add outside of array bounds");n.splice(e.key,0,t)}else{if(!g(n))throw new s("target of add must be an object or array "+e.key);n[e.key]=t}}function h(e,t){if(e.path===t.path&&"remove"===t.op)throw new TypeError("Can't commute add,remove -> remove,add for same path");return i(e,t)}function p(e){var t,n=e.target;if(Array.isArray(n))return(t=n.splice(u(e.key),1))[0];if(g(n))return t=n[e.key],delete n[e.key],t;throw new s("target of remove must be an object or array")}function f(e){return void 0===e||null==e.target&&void 0!==e.key}function m(e){return void 0!==e.key&&void 0===e.target[e.key]}function g(e){return null!==e&&"object"==typeof e}e.test={apply:function(e,t,n){var i,o=c(e,t.path,n.findContext,t.context),s=o.target;if(Array.isArray(s)?i=s[u(o.key)]:i=void 0===o.key?o.target:o.target[o.key],!r(i,t.value))throw new a("test failed "+JSON.stringify(t));return e},inverse:function(e,t){return e.push(t),1},commute:function(e,t){if(e.path===t.path&&"remove"===t.op)throw new TypeError("Can't commute test,remove -> remove,test for same path");return"test"===t.op||"replace"===t.op?[t,e]:i(e,t)}},e.add={apply:function(e,t,r){var i=c(e,t.path,r.findContext,t.context);if(f(i))throw new s("path does not exist "+t.path);if(void 0===t.value)throw new s("missing value");var o=n(t.value);return void 0===i.key?o:(d(i,o),e)},inverse:function(e,t){var n=t.context;return void 0!==n&&(n={before:n.before,after:o.cons(t.value,n.after)}),e.push({op:"test",path:t.path,value:t.value,context:n}),e.push({op:"remove",path:t.path,context:n}),1},commute:h},e.remove={apply:function(e,t,n){var r=c(e,t.path,n.findContext,t.context);if(f(r)||void 0===r.target[r.key])throw new s("path does not exist "+t.path);return p(r),e},inverse:function(e,t,n,r){var i=r[n-1];if(void 0===i||"test"!==i.op||i.path!==t.path)throw new l("cannot invert remove w/o test");var a=i.context;return void 0!==a&&(a={before:a.before,after:o.tail(a.after)}),e.push({op:"add",path:i.path,value:i.value,context:a}),2},commute:function(e,t){return e.path===t.path&&"remove"===t.op?[t,e]:i(e,t)}},e.replace={apply:function(e,t,r){var i=c(e,t.path,r.findContext,t.context);if(f(i)||m(i))throw new s("path does not exist "+t.path);if(void 0===t.value)throw new s("missing value");var o=n(t.value);if(void 0===i.key)return o;var a=i.target;return Array.isArray(a)?a[u(i.key)]=o:a[i.key]=o,e},inverse:function(e,t,n,r){var i=r[n-1];if(void 0===i||"test"!==i.op||i.path!==t.path)throw new l("cannot invert replace w/o test");var a=i.context;return void 0!==a&&(a={before:a.before,after:o.cons(i.value,o.tail(a.after))}),e.push({op:"test",path:i.path,value:t.value}),e.push({op:"replace",path:i.path,value:i.value}),2},commute:function(e,t){if(e.path===t.path&&"remove"===t.op)throw new TypeError("Can't commute replace,remove -> remove,replace for same path");return"test"===t.op||"replace"===t.op?[t,e]:i(e,t)}},e.move={apply:function(e,n,r){if(t.contains(n.path,n.from))throw new s("move.from cannot be ancestor of move.path");return d(c(e,n.path,r.findContext,n.context),p(c(e,n.from,r.findContext,n.fromContext))),e},inverse:function(e,t){return e.push({op:"move",path:t.from,context:t.fromContext,from:t.path,fromContext:t.context}),1},commute:function(e,t){if(e.path===t.path&&"remove"===t.op)throw new TypeError("Can't commute move,remove -> move,replace for same path");return i(e,t)}},e.copy={apply:function(e,t,r){var i=c(e,t.path,r.findContext,t.context),o=c(e,t.from,r.findContext,t.fromContext);if(f(o)||m(o))throw new s("copy.from must exist");var a,l=o.target;return a=Array.isArray(l)?l[u(o.key)]:l[o.key],d(i,n(a)),e},inverse:function(e,t){throw new l("cannot invert "+t.op)},commute:h}}}),K=w({"../node_modules/jiff/lib/jsonPatch.js"(e){var t=X(),n=H(),r=q();e.apply=function(e,t,r){return o(e,n(t),r)},e.applyInPlace=o,e.clone=n,e.isValidObject=a,e.defaultHash=function(e){return a(e)||function(e){return"[object Array]"===Object.prototype.toString.call(e)}(e)?JSON.stringify(e):e};var i={};function o(e,n,o){if(o||(o=i),!Array.isArray(e))return n;for(var a,s,l=0;l<e.length;++l){if(s=e[l],void 0===(a=t[s.op]))throw new r("invalid op "+JSON.stringify(s));n=a.apply(n,s,o)}return n}function a(e){return null!==e&&"[object Object]"===Object.prototype.toString.call(e)}}}),Y=w({"../node_modules/jiff/lib/inverse.js"(e,t){var n=X();function r(e,t,r,i){var o=n[t.op];return void 0!==o&&"function"==typeof o.inverse?o.inverse(e,t,r,i):1}t.exports=function(e){var t,n,i=[];for(t=e.length-1;t>=0;t-=n)n=r(i,e[t],t,e);return i}}}),Z=w({"../node_modules/jiff/jiff.js"(e){var t=z(),n=B(),r=K(),i=Y(),o=U().encodeSegment;e.diff=function(e,t,n){return l(e,t,"",function(e,t){return"object"==typeof e?{patch:t,hash:c(d,e.hash,s),makeContext:c(d,e.makeContext,u),invertible:!(!1===e.invertible)}:{patch:t,hash:c(d,e,s),makeContext:u,invertible:!0}}(n,[])).patch},e.patch=r.apply,e.patchInPlace=r.applyInPlace,e.inverse=i,e.clone=r.clone,e.InvalidPatchOperationError=q(),e.TestFailedError=W(),e.PatchNotInvertibleError=$();var a=r.isValidObject,s=r.defaultHash;function l(e,r,i,s){return Array.isArray(e)&&Array.isArray(r)?function(e,r,i,o){var a=n.map(o.hash,e),s=n.map(o.hash,r);return function(e,n,r,i,o){var a=0;return t.reduce((function(i,o,s,c){var u,d,h=i.patch,p=r+"/"+(c+a);return o===t.REMOVE?(u=h[h.length-1],d=i.makeContext(c,e),i.invertible&&h.push({op:"test",path:p,value:e[c],context:d}),void 0!==u&&"add"===u.op&&u.path===p?(u.op="replace",u.context=d):h.push({op:"remove",path:p,context:d}),a-=1):o===t.ADD?(h.push({op:"add",path:p,value:n[s],context:i.makeContext(c,e)}),a+=1):l(e[c],n[s],p,i),i}),i,o)}(e,r,i,o,t.compare(a,s))}(e,r,i,s):a(e)&&a(r)?function(e,t,n,r){var i,a,s=Object.keys(t),c=r.patch;for(i=s.length-1;i>=0;--i){a=s[i];var u=n+"/"+o(a);void 0!==e[a]?l(e[a],t[a],u,r):c.push({op:"add",path:u,value:t[a]})}for(i=(s=Object.keys(e)).length-1;i>=0;--i)if(void 0===t[a=s[i]]){var d=n+"/"+o(a);r.invertible&&c.push({op:"test",path:d,value:e[a]}),c.push({op:"remove",path:d})}return r}(e,r,i,s):function(e,t,n,r){return e!==t&&(r.invertible&&r.patch.push({op:"test",path:n,value:e}),r.patch.push({op:"replace",path:n,value:t})),r}(e,r,i,s)}function c(e,t,n){return e(t)?t:n}function u(){}function d(e){return"function"==typeof e}}}),J=w({"../node_modules/json-touch-patch/lib/utils/pluck.js"(e,t){"use strict";t.exports=function(e,t){for(var n=0,r=t.length-1;n<r;n++){if(!e[t[n]])return null;e=e[t[n]]}return e}}}),Q=w({"../node_modules/json-touch-patch/lib/utils/toKeys.js"(e,t){"use strict";function n(e){return"~0"===e?"~":"/"}t.exports=function(e){var t=e.split("/");if(-1===e.indexOf("~"))return t;for(var r=0,i=t.length;r<i;r++)-1!==t[r].indexOf("~")&&(t[r]=t[r].replace(/~[01]/g,n));return t}}}),ee=w({"../node_modules/json-touch-patch/lib/get.js"(e,t){"use strict";var n=J(),r=Q();t.exports=function(e,t){var i=r(t),o=i[i.length-1],a=n(e,i);return a?a[o]:void 0}}}),te=w({"../node_modules/json-touch-patch/lib/utils/deepEqual.js"(e,t){"use strict";t.exports=function e(t,n){if(t===n)return!0;if(!t||!n||"object"!=typeof t||"object"!=typeof n)return!1;if(t.length!==n.length)return!1;if(Array.isArray(t)){if(!Array.isArray(n))return!1;for(var r=0,i=t.length;r<i;r++)if(!e(t[r],n[r]))return!1;return!0}var o=Object.keys(t);if(o.length!==Object.keys(n).length)return!1;for(var a=0,s=o.length;a<s;a++){var l=o[a];if(!e(t[l],n[l]))return!1}return!0}}}),ne=w({"../node_modules/json-touch-patch/lib/utils/toArrayIndex.js"(e,t){"use strict";t.exports=function(e,t){if("-"===t)return e.length;for(var n=0,r=t.length;n<r;n++){var i=t.charCodeAt(n);if(57<i||i<48)return 1/0}return+t}}}),re=w({"../node_modules/json-touch-patch/lib/add.js"(e,t){"use strict";var n=te(),r=J(),i=ne(),o=Q();t.exports=function(e,t,a,s){if(void 0===a)return"[op:add] require value, but got undefined";var l=o(t),c=l[l.length-1],u=r(e,l);if(null===u)return"[op:add] path not found: "+t;if(Array.isArray(u)){var d=i(u,c);if(u.length<d)return"[op:add] invalid array index: "+t;s(e,l).splice(d,0,a)}else n(u[c],a)||(s(e,l)[c]=a)}}}),ie=w({"../node_modules/json-touch-patch/lib/remove.js"(e,t){"use strict";var n=J(),r=ne(),i=Q();t.exports=function(e,t,o){var a=i(t),s=a[a.length-1],l=n(e,a);if(null===l)return"[op:remove] path not found: "+t;if(Array.isArray(l)){var c=r(l,s);if(l.length<=c)return"[op:remove] invalid array index: "+t;o(e,a).splice(c,1)}else delete o(e,a)[s]}}}),oe=w({"../node_modules/json-touch-patch/lib/replace.js"(e,t){"use strict";var n=te(),r=J(),i=ne(),o=Q();t.exports=function(e,t,a,s){if(void 0===a)return"[op:replace] require value, but got undefined";var l=o(t),c=l[l.length-1],u=r(e,l);if(null===u)return"[op:replace] path not found: "+t;if(Array.isArray(u)){var d=i(u,c);if(u.length<=d)return"[op:replace] invalid array index: "+t;n(u[d],a)||s(e,l).splice(d,1,a)}else n(u[c],a)||(s(e,l)[c]=a)}}}),ae=w({"../node_modules/json-touch-patch/lib/move.js"(e,t){"use strict";var n=re(),r=J(),i=ne(),o=Q();t.exports=function(e,t,a,s){if(a!==t){var l=o(t),c=l[l.length-1],u=r(e,l);if(null===u)return"[op:move] path not found: "+t;var d=void 0;if(Array.isArray(u)){var h=i(u,c);if(u.length<=h)return"[op:move] invalid array index: "+a;d=u[h],s(e,l).splice(h,1)}else d=u[c],delete s(e,l)[c];return n(e,a,d,s)}}}}),se=w({"../node_modules/json-touch-patch/lib/copy.js"(e,t){"use strict";var n=J(),r=Q(),i=re();t.exports=function(e,t,o,a){var s=r(t),l=s[s.length-1],c=n(e,s);return null===c?"[op:copy] path not found: "+t:i(e,o,c[l],a)}}}),le=w({"../node_modules/json-touch-patch/lib/test.js"(e,t){"use strict";var n=te(),r=J(),i=Q();t.exports=function(e,t,o){var a=i(t),s=a[a.length-1],l=r(e,a);return null===l?"[op:test] path not found: "+t:n(l[s],o)?void 0:"[op:test] not matched: "+JSON.stringify(l[s])+" "+JSON.stringify(o)}}}),ce=w({"../node_modules/json-touch-patch/lib/utils/shallowCopy.js"(e,t){"use strict";t.exports=function(e){if(!e||"object"!=typeof e)return e;if(Array.isArray(e)){for(var t=e.length,n=new Array(t),r=0;r<t;r++)n[r]=e[r];return n}for(var i=Object.keys(e),o={},a=0,s=i.length;a<s;a++){var l=i[a];o[l]=e[l]}return o}}}),ue=w({"../node_modules/json-touch-patch/lib/utils/createAPI.js"(e,t){"use strict";var n=ee(),r=re(),i=ie(),o=oe(),a=ae(),s=se(),l=le(),c=te(),u=ce(),d=Q();t.exports=function(e,t){return{get:function(t){return n(e,t)},add:function(n,i){return r(e,n,i,t)},remove:function(n){return i(e,n,t)},replace:function(n,r){return o(e,n,r,t)},move:function(n,r){return a(e,n,r,t)},copy:function(n,r){return s(e,n,r,t)},test:function(t,n){return l(e,t,n)},deepEqual:c,shallowCopy:u,toKeys:d}}}}),de=w({"../node_modules/json-touch-patch/lib/utils/exit.js"(e,t){"use strict";t.exports=function(e,t,n,r){return r.error=n,r.partial?t[""]:e}}}),he=w({"../node_modules/json-touch-patch/lib/utils/toBoolean.js"(e,t){"use strict";t.exports=function(e){return!!e}}}),pe=w({"../node_modules/json-touch-patch/lib/utils/throwException.js"(e,t){"use strict";t.exports=function(e){if(e)throw new TypeError(e)}}}),fe=w({"../node_modules/json-touch-patch/lib/utils/pluckWithShallowCopy.js"(e,t){"use strict";var n=ce();t.exports=function(e,t){for(var r=0,i=t.length-1;r<i;r++)e=e[t[r]]=n(e[t[r]]);return e}}}),me=w({"../node_modules/json-touch-patch/lib/utils/pluckWithCachedShallowCopy.js"(e,t){"use strict";var n=ce();function r(e,t,r){var i=e[t];return r.has(i)||(i=n(i),r.add(i)),i}t.exports=function(e,t,n){for(var i=0,o=t.length-1;i<o;i++)e=e[t[i]]=r(e,t[i],n);return e}}}),ge=w({"../node_modules/json-touch-patch/lib/patch.js"(e,t){"use strict";var n=ue(),r=de(),i=he(),o=pe(),a=fe(),s=me(),l=re(),c=ie(),u=oe(),d=ae(),h=se(),p=le(),f=window.Set||function(){var e=[];return e.has=function(e){return-1!==this.indexOf(e)},e.add=function(e){this.push(e)},e};t.exports=function(e,t,m){if(0===t.length)return e;for(var g,v,y=(m=m||{}).strict?o:i,b=1===t.length?a:(g=new f,function(e,t){return s(e,t,g)}),x={"":e},_=0,w=t.length;_<w;_++){var S=t[_];switch(S.op){case"add":if(y(l(x,""+S.path,S.value,b)))return r(e,x,S,m);break;case"remove":if(y(c(x,""+S.path,b)))return r(e,x,S,m);break;case"replace":if(y(u(x,""+S.path,S.value,b)))return r(e,x,S,m);break;case"move":if(y(d(x,""+S.from,""+S.path,b)))return r(e,x,S,m);break;case"copy":if(y(h(x,""+S.from,""+S.path,b)))return r(e,x,S,m);break;case"test":if(y(p(x,""+S.path,S.value)))return r(e,x,S,m);break;default:if(!m.custom||!m.custom[S.op])return y("[op:"+S.op+"] unknown"),r(e,x,S,m);if(v=v||n(x,b),y(m.custom[S.op](v,S,_,t)))return r(e,x,S,m)}}return x[""]}}}),ve=w({"../node_modules/json-touch-patch/lib/index.js"(e,t){t.exports=ge()}});function ye(){return a}function be(e,t,n=[]){if("object"==typeof e&&e)for(const[r,i]of Object.entries(e))be(i,t,[...n,r]);else{if(null==e)return;t(e,n)}}((e,t)=>{for(var n in x(e),t)l(e,n,{get:t[n],enumerable:!0})})(t,{ToolbarDropdownSelect:()=>rx,ToolbarIconButton:()=>ic,ToolbarSwitchSelect:()=>ex,default:()=>ox});var xe=S(n(771)),_e={log:console.log,warn:console.warn,error:console.error,trace:console.trace},we=Ae("Theatre_Project"),Se=Ae("Theatre_Sheet"),Ee=Ae("Theatre_SheetTemplate"),Me=Ae("Theatre_SheetObject"),Te=Ae("Theatre_SheetObjectTemplate"),Pe=(Ae("Theatre_Project_PublicAPI"),Ae("Theatre_Sheet_PublicAPI")),Ce=Ae("Theatre_SheetObject_PublicAPI");function Ae(e){return t=>"object"==typeof t&&!!t&&t.type===e}var ke,Re,Ie,Oe,Le=0,De=S(n(771)),Ne=S(n(771)),je="object"==typeof window&&window&&window.Object===Object&&window,ze="object"==typeof self&&self&&self.Object===Object&&self,Be=je||ze||Function("return this")(),Fe=Be.Symbol,Ue=Object.prototype,He=Ue.hasOwnProperty,Ve=Ue.toString,Ge=Fe?Fe.toStringTag:void 0,We=Object.prototype.toString,qe=Fe?Fe.toStringTag:void 0,$e=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":qe&&qe in Object(e)?function(e){var t=He.call(e,Ge),n=e[Ge];try{e[Ge]=void 0;var r=!0}catch(e){}var i=Ve.call(e);return r&&(t?e[Ge]=n:delete e[Ge]),i}(e):function(e){return We.call(e)}(e)},Xe=function(e){return null!=e&&"object"==typeof e},Ke=function(e){return"symbol"==typeof e||Xe(e)&&"[object Symbol]"==$e(e)},Ye=function(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i},Ze=Array.isArray,Je=Fe?Fe.prototype:void 0,Qe=Je?Je.toString:void 0,et=function e(t){if("string"==typeof t)return t;if(Ze(t))return Ye(t,e)+"";if(Ke(t))return Qe?Qe.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n},tt=/\s/,nt=/^\s+/,rt=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&tt.test(e.charAt(t)););return t}(e)+1).replace(nt,""):e},it=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},ot=/^[-+]0x[0-9a-f]+$/i,at=/^0b[01]+$/i,st=/^0o[0-7]+$/i,lt=parseInt,ct=function(e){if("number"==typeof e)return e;if(Ke(e))return NaN;if(it(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=it(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=rt(e);var n=at.test(e);return n||st.test(e)?lt(e.slice(2),n?2:8):ot.test(e)?NaN:+e},ut=function(e){return e?Infinity===(e=ct(e))||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},dt=function(e){var t=ut(e),n=t%1;return t==t?n?t-n:t:0},ht=function(e){return e},pt=function(e){if(!it(e))return!1;var t=$e(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},ft=Be["__core-js_shared__"],mt=(ke=/[^.]+$/.exec(ft&&ft.keys&&ft.keys.IE_PROTO||""))?"Symbol(src)_1."+ke:"",gt=Function.prototype.toString,vt=function(e){if(null!=e){try{return gt.call(e)}catch(e){}try{return e+""}catch(e){}}return""},yt=/^\[object .+?Constructor\]$/,bt=Function.prototype,xt=Object.prototype,_t=bt.toString,wt=xt.hasOwnProperty,St=RegExp("^"+_t.call(wt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Et=function(e){return!(!it(e)||(t=e,mt&&mt in t))&&(pt(e)?St:yt).test(vt(e));var t},Mt=function(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return Et(n)?n:void 0},Tt=Mt(Be,"WeakMap"),Pt=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)},Ct=Date.now,At=function(){try{var e=Mt(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),kt=(Re=At?function(e,t){return At(e,"toString",{configurable:!0,enumerable:!1,value:(n=t,function(){return n}),writable:!0});var n}:ht,Ie=0,Oe=0,function(){var e=Ct(),t=16-(e-Oe);if(Oe=e,t>0){if(++Ie>=800)return arguments[0]}else Ie=0;return Re.apply(void 0,arguments)}),Rt=function(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1},It=function(e){return e!=e},Ot=function(e,t,n){return t==t?function(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}(e,t,n):Rt(e,It,n)},Lt=function(e,t){return!(null==e||!e.length)&&Ot(e,t,0)>-1},Dt=/^(?:0|[1-9]\d*)$/,Nt=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Dt.test(e))&&e>-1&&e%1==0&&e<t},jt=function(e,t,n){"__proto__"==t&&At?At(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},zt=function(e,t){return e===t||e!=e&&t!=t},Bt=Object.prototype.hasOwnProperty,Ft=function(e,t,n){var r=e[t];Bt.call(e,t)&&zt(r,n)&&(void 0!==n||t in e)||jt(e,t,n)},Ut=Math.max,Ht=function(e,t){return kt(function(e,t,n){return t=Ut(void 0===t?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=Ut(r.length-t,0),a=Array(o);++i<o;)a[i]=r[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=r[i];return s[t]=n(a),Pt(e,this,s)}}(e,t,ht),e+"")},Vt=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Gt=function(e){return null!=e&&Vt(e.length)&&!pt(e)},Wt=function(e,t,n){if(!it(n))return!1;var r=typeof t;return!!("number"==r?Gt(n)&&Nt(t,n.length):"string"==r&&t in n)&&zt(n[t],e)},qt=Object.prototype,$t=function(e){return Xe(e)&&"[object Arguments]"==$e(e)},Xt=Object.prototype,Kt=Xt.hasOwnProperty,Yt=Xt.propertyIsEnumerable,Zt=$t(function(){return arguments}())?$t:function(e){return Xe(e)&&Kt.call(e,"callee")&&!Yt.call(e,"callee")},Jt=t&&!t.nodeType&&t,Qt=Jt&&e&&!e.nodeType&&e,en=Qt&&Qt.exports===Jt?Be.Buffer:void 0,tn=(en?en.isBuffer:void 0)||function(){return!1},nn={};nn["[object Float32Array]"]=nn["[object Float64Array]"]=nn["[object Int8Array]"]=nn["[object Int16Array]"]=nn["[object Int32Array]"]=nn["[object Uint8Array]"]=nn["[object Uint8ClampedArray]"]=nn["[object Uint16Array]"]=nn["[object Uint32Array]"]=!0,nn["[object Arguments]"]=nn["[object Array]"]=nn["[object ArrayBuffer]"]=nn["[object Boolean]"]=nn["[object DataView]"]=nn["[object Date]"]=nn["[object Error]"]=nn["[object Function]"]=nn["[object Map]"]=nn["[object Number]"]=nn["[object Object]"]=nn["[object RegExp]"]=nn["[object Set]"]=nn["[object String]"]=nn["[object WeakMap]"]=!1;var rn=function(e){return function(t){return e(t)}},on=t&&!t.nodeType&&t,an=on&&e&&!e.nodeType&&e,sn=an&&an.exports===on&&je.process,ln=function(){try{return an&&an.require&&an.require("util").types||sn&&sn.binding&&sn.binding("util")}catch(e){}}(),cn=ln&&ln.isTypedArray,un=cn?rn(cn):function(e){return Xe(e)&&Vt(e.length)&&!!nn[$e(e)]},dn=Object.prototype.hasOwnProperty,hn=function(e,t){var n=Ze(e),r=!n&&Zt(e),i=!n&&!r&&tn(e),o=!n&&!r&&!i&&un(e),a=n||r||i||o,s=a?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],l=s.length;for(var c in e)!t&&!dn.call(e,c)||a&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Nt(c,l))||s.push(c);return s},pn=function(e,t){return function(n){return e(t(n))}},fn=pn(Object.keys,Object),mn=Object.prototype.hasOwnProperty,gn=function(e){if(n=(t=e)&&t.constructor,t!==("function"==typeof n&&n.prototype||qt))return fn(e);var t,n,r=[];for(var i in Object(e))mn.call(e,i)&&"constructor"!=i&&r.push(i);return r},vn=function(e){return Gt(e)?hn(e):gn(e)},yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,bn=/^\w*$/,xn=function(e,t){if(Ze(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Ke(e))||bn.test(e)||!yn.test(e)||null!=t&&e in Object(t)},_n=Mt(Object,"create"),wn=Object.prototype.hasOwnProperty,Sn=Object.prototype.hasOwnProperty;function En(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}En.prototype.clear=function(){this.__data__=_n?_n(null):{},this.size=0},En.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},En.prototype.get=function(e){var t=this.__data__;if(_n){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return wn.call(t,e)?t[e]:void 0},En.prototype.has=function(e){var t=this.__data__;return _n?void 0!==t[e]:Sn.call(t,e)},En.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=_n&&void 0===t?"__lodash_hash_undefined__":t,this};var Mn=En,Tn=function(e,t){for(var n=e.length;n--;)if(zt(e[n][0],t))return n;return-1},Pn=Array.prototype.splice;function Cn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Cn.prototype.clear=function(){this.__data__=[],this.size=0},Cn.prototype.delete=function(e){var t=this.__data__,n=Tn(t,e);return!(n<0||(n==t.length-1?t.pop():Pn.call(t,n,1),--this.size,0))},Cn.prototype.get=function(e){var t=this.__data__,n=Tn(t,e);return n<0?void 0:t[n][1]},Cn.prototype.has=function(e){return Tn(this.__data__,e)>-1},Cn.prototype.set=function(e,t){var n=this.__data__,r=Tn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};var An=Cn,kn=Mt(Be,"Map"),Rn=function(e,t){var n,r,i=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map};function In(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}In.prototype.clear=function(){this.size=0,this.__data__={hash:new Mn,map:new(kn||An),string:new Mn}},In.prototype.delete=function(e){var t=Rn(this,e).delete(e);return this.size-=t?1:0,t},In.prototype.get=function(e){return Rn(this,e).get(e)},In.prototype.has=function(e){return Rn(this,e).has(e)},In.prototype.set=function(e,t){var n=Rn(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};var On=In;function Ln(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Ln.Cache||On),n}Ln.Cache=On;var Dn=Ln,Nn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jn=/\\(\\)?/g,zn=function(e){var t=Dn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Nn,(function(e,n,r,i){t.push(r?i.replace(jn,"$1"):n||e)})),t})),Bn=zn,Fn=function(e){return null==e?"":et(e)},Un=function(e,t){return Ze(e)?e:xn(e,t)?[e]:Bn(Fn(e))},Hn=function(e){if("string"==typeof e||Ke(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},Vn=function(e,t){for(var n=0,r=(t=Un(t,e)).length;null!=e&&n<r;)e=e[Hn(t[n++])];return n&&n==r?e:void 0},Gn=function(e,t,n){var r=null==e?void 0:Vn(e,t);return void 0===r?n:r},Wn=function(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e},qn=Fe?Fe.isConcatSpreadable:void 0,$n=function(e){return Ze(e)||Zt(e)||!!(qn&&e&&e[qn])},Xn=function e(t,n,r,i,o){var a=-1,s=t.length;for(r||(r=$n),o||(o=[]);++a<s;){var l=t[a];n>0&&r(l)?n>1?e(l,n-1,r,i,o):Wn(o,l):i||(o[o.length]=l)}return o},Kn=pn(Object.getPrototypeOf,Object),Yn=Function.prototype,Zn=Object.prototype,Jn=Yn.toString,Qn=Zn.hasOwnProperty,er=Jn.call(Object),tr=Be.isFinite,nr=Math.min,rr=function(e,t,n){return void 0===n&&(n=t,t=void 0),void 0!==n&&(n=(n=ct(n))==n?n:0),void 0!==t&&(t=(t=ct(t))==t?t:0),function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}(ct(e),t,n)};function ir(e){var t=this.__data__=new An(e);this.size=t.size}ir.prototype.clear=function(){this.__data__=new An,this.size=0},ir.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},ir.prototype.get=function(e){return this.__data__.get(e)},ir.prototype.has=function(e){return this.__data__.has(e)},ir.prototype.set=function(e,t){var n=this.__data__;if(n instanceof An){var r=n.__data__;if(!kn||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new On(r)}return n.set(e,t),this.size=n.size,this};var or=ir,ar=Object.prototype.propertyIsEnumerable,sr=Object.getOwnPropertySymbols,lr=sr?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}(sr(e),(function(t){return ar.call(e,t)})))}:function(){return[]},cr=function(e){return function(e,t,n){var r=t(e);return Ze(e)?r:Wn(r,n(e))}(e,vn,lr)},ur=Mt(Be,"DataView"),dr=Mt(Be,"Promise"),hr=Mt(Be,"Set"),pr="[object Map]",fr="[object Promise]",mr="[object Set]",gr="[object WeakMap]",vr="[object DataView]",yr=vt(ur),br=vt(kn),xr=vt(dr),_r=vt(hr),wr=vt(Tt),Sr=$e;(ur&&Sr(new ur(new ArrayBuffer(1)))!=vr||kn&&Sr(new kn)!=pr||dr&&Sr(dr.resolve())!=fr||hr&&Sr(new hr)!=mr||Tt&&Sr(new Tt)!=gr)&&(Sr=function(e){var t=$e(e),n="[object Object]"==t?e.constructor:void 0,r=n?vt(n):"";if(r)switch(r){case yr:return vr;case br:return pr;case xr:return fr;case _r:return mr;case wr:return gr}return t});var Er=Sr,Mr=Be.Uint8Array;function Tr(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new On;++t<n;)this.add(e[t])}Tr.prototype.add=Tr.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},Tr.prototype.has=function(e){return this.__data__.has(e)};var Pr,Cr,Ar,kr=Tr,Rr=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1},Ir=function(e,t){return e.has(t)},Or=function(e,t,n,r,i,o){var a=1&n,s=e.length,l=t.length;if(s!=l&&!(a&&l>s))return!1;var c=o.get(e),u=o.get(t);if(c&&u)return c==t&&u==e;var d=-1,h=!0,p=2&n?new kr:void 0;for(o.set(e,t),o.set(t,e);++d<s;){var f=e[d],m=t[d];if(r)var g=a?r(m,f,d,t,e,o):r(f,m,d,e,t,o);if(void 0!==g){if(g)continue;h=!1;break}if(p){if(!Rr(t,(function(e,t){if(!Ir(p,t)&&(f===e||i(f,e,n,r,o)))return p.push(t)}))){h=!1;break}}else if(f!==m&&!i(f,m,n,r,o)){h=!1;break}}return o.delete(e),o.delete(t),h},Lr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n},Dr=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},Nr=Fe?Fe.prototype:void 0,jr=Nr?Nr.valueOf:void 0,zr=Object.prototype.hasOwnProperty,Br="[object Arguments]",Fr="[object Array]",Ur="[object Object]",Hr=Object.prototype.hasOwnProperty,Vr=function(e,t,n,r,i,o){var a=Ze(e),s=Ze(t),l=a?Fr:Er(e),c=s?Fr:Er(t),u=(l=l==Br?Ur:l)==Ur,d=(c=c==Br?Ur:c)==Ur,h=l==c;if(h&&tn(e)){if(!tn(t))return!1;a=!0,u=!1}if(h&&!u)return o||(o=new or),a||un(e)?Or(e,t,n,r,i,o):function(e,t,n,r,i,o,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!o(new Mr(e),new Mr(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return zt(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var s=Lr;case"[object Set]":var l=1&r;if(s||(s=Dr),e.size!=t.size&&!l)return!1;var c=a.get(e);if(c)return c==t;r|=2,a.set(e,t);var u=Or(s(e),s(t),r,i,o,a);return a.delete(e),u;case"[object Symbol]":if(jr)return jr.call(e)==jr.call(t)}return!1}(e,t,l,n,r,i,o);if(!(1&n)){var p=u&&Hr.call(e,"__wrapped__"),f=d&&Hr.call(t,"__wrapped__");if(p||f){var m=p?e.value():e,g=f?t.value():t;return o||(o=new or),i(m,g,n,r,o)}}return!!h&&(o||(o=new or),function(e,t,n,r,i,o){var a=1&n,s=cr(e),l=s.length;if(l!=cr(t).length&&!a)return!1;for(var c=l;c--;){var u=s[c];if(!(a?u in t:zr.call(t,u)))return!1}var d=o.get(e),h=o.get(t);if(d&&h)return d==t&&h==e;var p=!0;o.set(e,t),o.set(t,e);for(var f=a;++c<l;){var m=e[u=s[c]],g=t[u];if(r)var v=a?r(g,m,u,t,e,o):r(m,g,u,e,t,o);if(!(void 0===v?m===g||i(m,g,n,r,o):v)){p=!1;break}f||(f="constructor"==u)}if(p&&!f){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(p=!1)}return o.delete(e),o.delete(t),p}(e,t,n,r,i,o))},Gr=function e(t,n,r,i,o){return t===n||(null==t||null==n||!Xe(t)&&!Xe(n)?t!=t&&n!=n:Vr(t,n,r,i,e,o))},Wr=function(e){return e==e&&!it(e)},qr=function(e,t){return function(n){return null!=n&&n[e]===t&&(void 0!==t||e in Object(n))}},$r=function(e){var t=function(e){for(var t=vn(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Wr(i)]}return t}(e);return 1==t.length&&t[0][2]?qr(t[0][0],t[0][1]):function(n){return n===e||function(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=Object(e);i--;){var s=n[i];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++i<o;){var l=(s=n[i])[0],c=e[l],u=s[1];if(a&&s[2]){if(void 0===c&&!(l in e))return!1}else{var d=new or;if(r)var h=r(c,u,l,e,t,d);if(!(void 0===h?Gr(u,c,3,r,d):h))return!1}}return!0}(n,e,t)}},Xr=function(e,t){return null!=e&&t in Object(e)},Kr=function(e,t){return null!=e&&function(e,t,n){for(var r=-1,i=(t=Un(t,e)).length,o=!1;++r<i;){var a=Hn(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&Vt(i)&&Nt(a,i)&&(Ze(e)||Zt(e))}(e,t,Xr)},Yr=function(e){return xn(e)?(t=Hn(e),function(e){return null==e?void 0:e[t]}):function(e){return function(t){return Vn(t,e)}}(e);var t},Zr=function(e){return"function"==typeof e?e:null==e?ht:"object"==typeof e?Ze(e)?(t=e[0],n=e[1],xn(t)&&Wr(n)?qr(Hn(t),n):function(e){var r=Gn(e,t);return void 0===r&&r===n?Kr(e,t):Gr(n,r,3)}):$r(e):Yr(e);var t,n},Jr=function(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(r,a,n(a),e)}return r},Qr=function(e,t,n){for(var r=-1,i=Object(e),o=n(e),a=o.length;a--;){var s=o[++r];if(!1===t(i[s],s,i))break}return e},ei=function(e,t){return e&&Qr(e,t,vn)},ti=(Pr=ei,function(e,t){if(null==e)return e;if(!Gt(e))return Pr(e,t);for(var n=e.length,r=-1,i=Object(e);++r<n&&!1!==t(i[r],r,i););return e}),ni=function(e,t,n,r){return ti(e,(function(e,i,o){t(r,e,n(e),o)})),r},ri=function(){return Be.Date.now()},ii=Math.max,oi=Math.min,ai=function(e,t,n){var r,i,o,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function f(e){return c=e,s=setTimeout(g,t),u?p(e):a}function m(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function g(){var e=ri();if(m(e))return v(e);s=setTimeout(g,function(e){var n=t-(e-l);return d?oi(n,o-(e-c)):n}(e))}function v(e){return s=void 0,h&&r?p(e):(r=i=void 0,a)}function y(){var e=ri(),n=m(e);if(r=arguments,i=this,l=e,n){if(void 0===s)return f(l);if(d)return clearTimeout(s),s=setTimeout(g,t),p(l)}return void 0===s&&(s=setTimeout(g,t)),a}return t=ct(t)||0,it(n)&&(u=!!n.leading,o=(d="maxWait"in n)?ii(ct(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},y.flush=function(){return void 0===s?a:v(ri())},y},si=function(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1},li=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0},ci=Math.max,ui=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:dt(n);return i<0&&(i=ci(r+i,0)),Rt(e,Zr(t),i)},di=Math.max,hi=Math.min,pi=Math.max,fi=Math.min,mi=function(e,t,n){return t=ut(t),void 0===n?(n=t,t=0):n=ut(n),function(e,t,n){return e>=fi(t,n)&&e<pi(t,n)}(e=ct(e),t,n)},gi=(Cr=function(e,t,n){jt(e,n,t)},function(e,t){var n=Ze(e)?Jr:ni,r=Ar?Ar():{};return n(e,Cr,Zr(t),r)}),vi=gi,yi=function(e,t){var n={};return t=Zr(t),ei(e,(function(e,r,i){jt(n,r,t(e,r,i))})),n},bi=function(e,t){if(e!==t){var n=void 0!==e,r=null===e,i=e==e,o=Ke(e),a=void 0!==t,s=null===t,l=t==t,c=Ke(t);if(!s&&!c&&!o&&e>t||o&&a&&l&&!s&&!c||r&&a&&l||!n&&l||!i)return 1;if(!r&&!o&&!c&&e<t||c&&n&&i&&!r&&!o||s&&n&&i||!a&&i||!l)return-1}return 0},xi=function(e,t,n){t=t.length?Ye(t,(function(e){return Ze(e)?function(t){return Vn(t,1===e.length?e[0]:e)}:e})):[ht];var r=-1;t=Ye(t,rn(Zr));var i=function(e,t){var n=-1,r=Gt(e)?Array(e.length):[];return ti(e,(function(e,i,o){r[++n]=t(e,i,o)})),r}(e,(function(e,n,i){return{criteria:Ye(t,(function(t){return t(e)})),index:++r,value:e}}));return function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(i,(function(e,t){return function(e,t,n){for(var r=-1,i=e.criteria,o=t.criteria,a=i.length,s=n.length;++r<a;){var l=bi(i[r],o[r]);if(l)return r>=s?l:l*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}))},_i=function(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1},wi=Array.prototype.splice,Si=function(e,t,n,r){var i=r?_i:Ot,o=-1,a=t.length,s=e;for(e===t&&(t=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}(t)),n&&(s=Ye(e,rn(n)));++o<a;)for(var l=0,c=t[o],u=n?n(c):c;(l=i(s,u,l,r))>-1;)s!==e&&wi.call(s,l,1),wi.call(e,l,1);return e},Ei=Ht((function(e,t){return e&&e.length&&t&&t.length?Si(e,t):e})),Mi=function(e){var t=Math[e];return function(e,n){if(e=ct(e),(n=null==n?0:nr(dt(n),292))&&tr(e)){var r=(Fn(e)+"e").split("e"),i=t(r[0]+"e"+(+r[1]+n));return+((r=(Fn(i)+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}("round"),Ti=function(e,t,n){return null==e?e:function(e,t,n,r){if(!it(e))return e;for(var i=-1,o=(t=Un(t,e)).length,a=o-1,s=e;null!=s&&++i<o;){var l=Hn(t[i]),c=n;if("__proto__"===l||"constructor"===l||"prototype"===l)return e;if(i!=a){var u=s[l];void 0===(c=r?r(u,l,s):void 0)&&(c=it(u)?u:Nt(t[i+1])?[]:{})}Ft(s,l,c),s=s[l]}return e}(e,t,n)},Pi=Ht((function(e,t){if(null==e)return[];var n=t.length;return n>1&&Wt(e,t[0],t[1])?t=[]:n>2&&Wt(t[0],t[1],t[2])&&(t=[t[0]]),xi(e,Xn(t,1),[])})),Ci=hr&&1/Dr(new hr([,-0]))[1]==1/0?function(e){return new hr(e)}:function(){},Ai=function(e){return e&&e.length?function(e,t,n){var r=-1,i=Lt,o=e.length,a=!0,s=[],l=s;if(n)a=!1,i=si;else if(o>=200){var c=t?null:Ci(e);if(c)return Dr(c);a=!1,i=Ir,l=new kr}else l=t?[]:s;e:for(;++r<o;){var u=e[r],d=t?t(u):u;if(u=n||0!==u?u:0,a&&d==d){for(var h=l.length;h--;)if(l[h]===d)continue e;t&&l.push(d),s.push(u)}else i(l,d,n)||(l!==s&&l.push(d),s.push(u))}return s}(e):[]},ki=S(M()),Ri=S(n(294)),Ii=S(n(834)),Oi={log:console.log};function Li(e,t,n){const r=(0,Ri.useCallback)(e,t),i=(0,Ri.useRef)(null);return i.current?i.current.set(r):i.current=new De.Box(r),function(e,t){const n=function(e){const[,t]=(0,Ri.useState)(0);return(0,Ri.useCallback)((()=>{e&&Oi.log(e,"forceUpdate",{trace:new Error}),t((e=>e+1))}),[])}(t),r=(0,Ri.useRef)(void 0);r.current||(Ni++,r.current={queueItem:{debugLabel:t,order:Ni,runUpdate:()=>{r.current.unmounted||n()}},unmounted:!1});const i=(0,Ri.useCallback)((()=>{var e;e=r.current.queueItem,Fi(e),Hi()}),[]);(0,Ri.useLayoutEffect)((()=>{const t=e.changesWithoutValues().tap((()=>{i()}));return o.current!==e.getValue()&&i(),t}),[e]),(0,Ri.useLayoutEffect)((()=>function(){r.current.unmounted=!0,Ui(r.current.queueItem)}),[]);const o=(0,Ri.useRef)(void 0),a=r.current.queueItem;return zi.has(a)&&ji[0]!==r.current.queueItem||(Ui(a),o.current=e.getValue()),o.current}((0,Ri.useMemo)((()=>(0,Ne.prism)((()=>i.current.derivation.getValue()()))),[]),n)}var Di=(e,t)=>Li((()=>(0,Ne.val)(e)),[e],t),Ni=0,ji=[],zi=new Set,Bi=!1,Fi=e=>{if(!zi.has(e))if(zi.add(e),0===ji.length)ji.push(e);else{const t=ui(ji,(t=>t.order>=e.order));-1===t?ji.push(e):ji[t].order>e.order&&ji.splice(t,0,e)}},Ui=e=>{if(!zi.has(e))return;zi.delete(e);const t=ui(ji,(t=>t===e));ji.splice(t,1)};function Hi(){Bi||(Bi=!0,(0,ki.default)((()=>{let e=0;for(;ji.length>0;){if(e++,4===e){setTimeout(Hi,1);break}(0,Ii.unstable_batchedUpdates)((()=>{for(const e of ji)e.runUpdate()}),1)}Bi=!1})))}var Vi=S(n(771)),Gi=S(n(294)),Wi=S(n(804)),qi=S(n(294)),$i=S(n(804));function Xi(){return Xi=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xi.apply(this,arguments)}function Ki(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Yi(e,t){return(Yi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Zi(e){return(Zi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ji(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function Qi(e,t,n){return(Qi=Ji()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&Yi(i,n.prototype),i}).apply(null,arguments)}function eo(e){var t="function"==typeof Map?new Map:void 0;return eo=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return Qi(e,arguments,Zi(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Yi(r,e)},eo(e)}var to={1:"Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",2:"Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",3:"Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",4:"Couldn't generate valid rgb string from %s, it returned %s.\n\n",5:"Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",6:"Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",7:"Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",8:"Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",9:"Please provide a number of steps to the modularScale helper.\n\n",10:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",11:'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',12:'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',13:'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',14:'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',15:'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',16:"You must provide a template to this method.\n\n",17:"You passed an unsupported selector state to this method.\n\n",18:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",19:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",20:"expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:"fontFace expects a name of a font-family.\n\n",24:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",25:"fontFace expects localFonts to be an array.\n\n",26:"fontFace expects fileFormats to be an array.\n\n",27:"radialGradient requries at least 2 color-stops to properly render.\n\n",28:"Please supply a filename to retinaImage() as the first argument.\n\n",29:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",32:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",33:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",34:"borderRadius expects a radius value as a string or number as the second argument.\n\n",35:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',36:"Property must be a string value.\n\n",37:"Syntax Error at %s.\n\n",38:"Formula contains a function that needs parentheses at %s.\n\n",39:"Formula is missing closing parenthesis at %s.\n\n",40:"Formula has too many closing parentheses at %s.\n\n",41:"All values in a formula must have the same unit or be unitless.\n\n",42:"Please provide a number of steps to the modularScale helper.\n\n",43:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",44:"Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",45:"Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",46:"Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",47:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",48:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",49:"Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",50:"Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",51:"Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",52:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",53:"fontFace expects localFonts to be an array.\n\n",54:"fontFace expects fileFormats to be an array.\n\n",55:"fontFace expects a name of a font-family.\n\n",56:"linearGradient requries at least 2 color-stops to properly render.\n\n",57:"radialGradient requries at least 2 color-stops to properly render.\n\n",58:"Please supply a filename to retinaImage() as the first argument.\n\n",59:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:"Property must be a string value.\n\n",62:"borderRadius expects a radius value as a string or number as the second argument.\n\n",63:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',64:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",65:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",66:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",67:"You must provide a template to this method.\n\n",68:"You passed an unsupported selector state to this method.\n\n",69:'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',70:'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',71:'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',72:'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',73:"Please provide a valid CSS variable.\n\n",74:"CSS variable not found and no default was provided.\n\n",75:"important requires a valid style object, got a %s instead.\n\n",76:"fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",77:'remToPx expects a value in "rem" but you provided it in "%s".\n\n',78:'base must be set in "px" or "%" but you set it in "%s".\n'};function no(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,i=t[0],o=[];for(r=1;r<t.length;r+=1)o.push(t[r]);return o.forEach((function(e){i=i.replace(/%[a-z]/,e)})),i}var ro=function(e){var t,n;function r(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return Ki(e.call(this,no.apply(void 0,[to[t]].concat(r)))||this)}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,Yi(t,n),r}(eo(Error)),io=["Top","Right","Bottom","Left"];function oo(e,t){if(!e)return t.toLowerCase();var n=e.split("-");if(n.length>1)return n.splice(1,0,t),n.reduce((function(e,t){return""+e+((n=t).charAt(0).toUpperCase()+n.slice(1));var n}));var r=e.replace(/([a-z])([A-Z])/g,"$1"+t+"$2");return e===r?""+e+t:r}function ao(e,t){for(var n={},r=0;r<t.length;r+=1)(t[r]||0===t[r])&&(n[oo(e,io[r])]=t[r]);return n}function so(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0],o=n[1],a=void 0===o?i:o,s=n[2],l=void 0===s?i:s,c=n[3],u=void 0===c?a:c,d=[i,a,l,u];return ao(e,d)}function lo(e){return Math.round(255*e)}function co(e,t,n){return lo(e)+","+lo(t)+","+lo(n)}function uo(e,t,n,r){if(void 0===r&&(r=co),0===t)return r(n,n,n);var i=(e%360+360)%360/60,o=(1-Math.abs(2*n-1))*t,a=o*(1-Math.abs(i%2-1)),s=0,l=0,c=0;i>=0&&i<1?(s=o,l=a):i>=1&&i<2?(s=a,l=o):i>=2&&i<3?(l=o,c=a):i>=3&&i<4?(l=a,c=o):i>=4&&i<5?(s=a,c=o):i>=5&&i<6&&(s=o,c=a);var u=n-o/2;return r(s+u,l+u,c+u)}var ho={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},po=/^#[a-fA-F0-9]{6}$/,fo=/^#[a-fA-F0-9]{8}$/,mo=/^#[a-fA-F0-9]{3}$/,go=/^#[a-fA-F0-9]{4}$/,vo=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,yo=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i,bo=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,xo=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;function _o(e){if("string"!=typeof e)throw new ro(3);var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return ho[t]?"#"+ho[t]:e}(e);if(t.match(po))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(fo)){var n=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:n}}if(t.match(mo))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(go)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var i=vo.exec(t);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var o=yo.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])};var a=bo.exec(t);if(a){var s="rgb("+uo(parseInt(""+a[1],10),parseInt(""+a[2],10)/100,parseInt(""+a[3],10)/100)+")",l=vo.exec(s);if(!l)throw new ro(4,t,s);return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var c=xo.exec(t.substring(0,50));if(c){var u="rgb("+uo(parseInt(""+c[1],10),parseInt(""+c[2],10)/100,parseInt(""+c[3],10)/100)+")",d=vo.exec(u);if(!d)throw new ro(4,t,u);return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10),alpha:parseFloat(""+c[4])}}throw new ro(5)}function wo(e){return function(e){var t,n=e.red/255,r=e.green/255,i=e.blue/255,o=Math.max(n,r,i),a=Math.min(n,r,i),s=(o+a)/2;if(o===a)return void 0!==e.alpha?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var l=o-a,c=s>.5?l/(2-o-a):l/(o+a);switch(o){case n:t=(r-i)/l+(r<i?6:0);break;case r:t=(i-n)/l+2;break;default:t=(n-r)/l+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:c,lightness:s,alpha:e.alpha}:{hue:t,saturation:c,lightness:s}}(_o(e))}var So=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function Eo(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function Mo(e){return Eo(Math.round(255*e))}function To(e,t,n){return So("#"+Mo(e)+Mo(t)+Mo(n))}function Po(e,t,n){return uo(e,t,n,To)}function Co(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return So("#"+Eo(e)+Eo(t)+Eo(n));if("object"==typeof e&&void 0===t&&void 0===n)return So("#"+Eo(e.red)+Eo(e.green)+Eo(e.blue));throw new ro(6)}function Ao(e,t,n,r){if("string"==typeof e&&"number"==typeof t){var i=_o(e);return"rgba("+i.red+","+i.green+","+i.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof r)return r>=1?Co(e,t,n):"rgba("+e+","+t+","+n+","+r+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===r)return e.alpha>=1?Co(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new ro(7)}function ko(e){if("object"!=typeof e)throw new ro(8);if(function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha}(e))return Ao(e);if(function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return Co(e);if(function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha}(e))return function(e,t,n,r){if("object"==typeof e)return e.alpha>=1?Po(e.hue,e.saturation,e.lightness):"rgba("+uo(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new ro(2)}(e);if(function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return function(e,t,n){if("object"==typeof e)return Po(e.hue,e.saturation,e.lightness);throw new ro(1)}(e);throw new ro(8)}function Ro(e,t,n){return function(){var r=n.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):Ro(e,t,r)}}function Io(e){return Ro(e,e.length,[])}function Oo(e,t,n){return Math.max(e,Math.min(t,n))}function Lo(e,t){if("transparent"===t)return t;var n=wo(t);return ko(Xi({},n,{lightness:Oo(0,1,n.lightness-parseFloat(e))}))}var Do=Io(Lo);function No(e,t){if("transparent"===t)return t;var n=wo(t);return ko(Xi({},n,{lightness:Oo(0,1,n.lightness+parseFloat(e))}))}var jo=Io(No);function zo(e,t){if("transparent"===t)return t;var n=_o(t);return Ao(Xi({},n,{alpha:Oo(0,1,+(100*("number"==typeof n.alpha?n.alpha:1)-100*parseFloat(e)).toFixed(2)/100)}))}var Bo=Io(zo),Fo=["absolute","fixed","relative","static","sticky"];function Uo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Fo.indexOf(e)>=0&&e?Xi({},so.apply(void 0,[""].concat(n)),{position:e}):so.apply(void 0,["",e].concat(n))}var Ho=S(n(804)).css`
  #pointer-root & {
    pointer-events: none;
  }
  #pointer-root.normal & {
    pointer-events: auto;
  }
`,Vo={panel:{bg:"#282b2f",head:{title:{color:"#bbb"},punctuation:{color:"#808080"}},body:{compoudThing:{label:{get color(){return jo(.6,Vo.panel.bg)}}}}}},Go=S(n(804)),Wo={get outlinePanel(){return 1},get propsPanel(){return Wo.outlinePanel},get sequenceEditorPanel(){return this.outlinePanel-1},get toolbar(){return this.outlinePanel+1},get pluginPanes(){return this.sequenceEditorPanel-1}},qo=Vo.panel.bg,$o=Go.default.span`
  white-space: nowrap;
`,Xo=Go.default.span`
  white-space: nowrap;
  color: ${Vo.panel.head.punctuation.color};
`,Ko=Go.default.div`
  background: ${qo};
  flex-grow: 1;
  overflow-y: scroll;
  padding: 0;
`,Yo=Go.default.div`
  height: ${20}px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: relative;
  color: #adadadb3;
  border-bottom: 1px solid rgb(0 0 0 / 13%);
  background-color: #25272b;
  font-size: 10px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Zo=S(n(771)),Jo=S(n(294)),Qo=S(n(804)),ea=S(n(294)),ta=S(n(294)),na=S(n(294)),ra=S(n(294)),ia={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},oa=ra.default.createContext&&ra.default.createContext(ia),aa=function(){return aa=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},aa.apply(this,arguments)};function sa(e){return e&&e.map((function(e,t){return na.default.createElement(e.tag,aa({key:t},e.attr),sa(e.child))}))}function la(e){return function(t){return na.default.createElement(ca,aa({attr:aa({},e.attr)},t),sa(e.child))}}function ca(e){var t=function(t){var n,r=e.attr,i=e.size,o=e.title,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),na.default.createElement("svg",aa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,a,{className:n,style:aa(aa({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&na.default.createElement("title",null,o),e.children)};return void 0!==oa?na.default.createElement(oa.Consumer,null,(function(e){return t(e)})):t(ia)}function ua(e){return la({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(e)}function da(e){return la({tag:"svg",attr:{viewBox:"0 0 8 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z"}}]})(e)}function ha(e){return la({tag:"svg",attr:{viewBox:"0 0 8 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z"}}]})(e)}function pa(e){return la({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M16.957 6.062l-5.808 1.88 12.58 4.070v8.027l-8.383 2.711-7.074-2.287v-7.863l6.836 2.213 5.808-1.879-12.598-4.077-3.622 1.172v13.036l10.649 3.445 11.958-3.869v-13.23z"}}]})(e)}function fa(e){return la({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"}}]})(e)}function ma(e){return la({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M6 9.65685L7.41421 11.0711L11.6569 6.82843L15.8995 11.0711L17.3137 9.65685L11.6569 4L6 9.65685Z",fill:"currentColor"}},{tag:"path",attr:{d:"M6 14.4433L7.41421 13.0291L11.6569 17.2717L15.8995 13.0291L17.3137 14.4433L11.6569 20.1001L6 14.4433Z",fill:"currentColor"}}]})(e)}function ga(e){return la({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14 3v1H2V3h12zm-1 3v1H6V6h7zm0 3v1H5V9h8zm0 3v1H5v-1h8z"}},{tag:"path",attr:{d:"M5 4h1v9H5z"}}]})(e)}function va(e){return la({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14 10.44l-.413.56H2.393L2 10.46 7.627 5h.827L14 10.44z"}}]})(e)}var ya=S(n(804)),ba=()=>{},xa=ya.default.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`,_a=ya.default.div``,wa=(0,ya.default)(_a)`
  padding-left: calc(4px + var(--depth) * 16px);
  padding-right: 8px;
  height: 28px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  pointer-events: none;
  white-space: nowrap;

  color: rgba(255, 255, 255, 0.75);
  --item-bg: ${"#3e4447"};
  --item-border-color: ${"#34343e"};

  &.descendant-is-selected {
    color: rgba(255, 255, 255, 0.9);

    --item-bg: #2e4244ed;
    --item-border-color: #254355;
  }

  &:hover {
    color: #fff;

    --item-bg: #1e5866;
    --item-border-color: #152f42;
  }

  &.selected {
    color: rgba(255, 255, 255, 0.9);

    --item-bg: #1e5866;
    --item-border-color: #152f42;
  }
`,Sa=ya.css`
  font-weight: 500;
  font-size: 11px;
  & {
  }
`,Ea=ya.default.span`
  ${Sa};

  padding: 2px 8px;
  ${Ho};
  position: relative;
  display: flex;
  height: 17px;
  align-items: center;

  background-color: var(--item-bg);

  &:after {
    border: 1px solid var(--item-border-color);
    position: absolute;
    inset: 0px;
    display: block;
    content: ' ';
    z-index: -1;
    pointer-events: none;
    border-radius: 2px;
    box-sizing: border-box;
    box-shadow: 0px 3px 4px -1px rgba(0, 0, 0, 0.48);
  }

  // hit-zone
  &:before {
    position: absolute;
    inset: -1px -20px;
    display: block;
    content: ' ';
    z-index: 0;
    ${Ho};
  }
`,Ma=ya.default.span`
  width: 18px;
  box-sizing: border-box;
  height: 18px;
  margin-right: 4px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 0.99;

  &:after {
    display: block;
    content: ' ';
    position: absolute;
    inset: 0px;
    z-index: -1;
    background-color: var(--item-bg);
    opacity: 0.6;
    border-radius: 2px;
  }
`,Ta=ya.default.span`
  font-size: 9px;
  position: relative;
  display: block;
  transform: rotateZ(${e=>e.isOpen?90:0}deg);
`,Pa=ya.default.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`,Ca=({label:e,children:t,depth:n,select:r,selectionStatus:i,labelDecoration:o})=>{const a=void 0!==t;return ta.default.createElement(xa,{style:{"--depth":n}},ta.default.createElement(wa,{className:i,onClick:null!=r?r:ba},ta.default.createElement(Ma,null,a?ta.default.createElement(Ta,{isOpen:!0},ta.default.createElement(ha,null)):ta.default.createElement(pa,null)),ta.default.createElement(Ea,null,ta.default.createElement("span",null,e)),o),a&&ta.default.createElement(Pa,null,t))},Aa=S(n(771)),ka=()=>{var e;const t=(0,Aa.val)(ye().projectsP),n=(null!=(e=(0,Aa.val)(ye().atomP.historic.panels.outlinePanel.selection))?e:[]).map((e=>{const n=t[e.projectId];if(!n)return;if("Project"===e.type)return n;if(!(0,Aa.val)(n.sheetTemplatesP[e.sheetId]))return;const r=Ra(n,e.sheetId);if(!r)return;if("Sheet"===e.type)return r;return(0,Aa.val)(r.objectsP[e.objectKey])||void 0}));return Ai(n.filter((e=>void 0!==e)))},Ra=(e,t)=>{const n=ye().atomP.historic.projects.stateByProjectId[e.address.projectId],r=(0,Aa.val)(n.stateBySheetId[t].selectedInstanceId),i=(0,Aa.val)(e.sheetTemplatesP[t]);if(i){if(r)return(0,Aa.val)(i.instancesP[r]);{const e=(0,Aa.val)(i.instancesP);return e[Object.keys(e)[0]]}}},Ia=S(n(294)),Oa=S(n(771)),La=S(n(294)),Da=S(n(804)),Na=S(n(294)),ja=S(n(804)),za=S(n(771)),Ba=S(n(294)),Fa=S(n(804)),Ua=S(n(294)),Ha=({sheetObject:e,depth:t})=>{const n=Li((()=>ka()),[]);return Ua.default.createElement(Ca,{select:()=>{ye().transaction((({stateEditors:t})=>{t.studio.historic.panels.outline.selection.set([e])}))},label:e.address.objectKey,depth:t,selectionStatus:n.includes(e)?"selected":"not-selected"})},Va=(Fa.default.li`
  color: ${e=>e.isSelected?"white":"hsl(1, 1%, 80%)"};
`,({sheet:e,depth:t})=>Li((()=>{const n=(0,za.val)(e.objectsP),r=Object.entries(n);return Ba.default.createElement(Ba.default.Fragment,null,r.map((([e,n])=>Ba.default.createElement(Ha,{depth:t,key:"objectPath("+e+")",sheetObject:n}))))}),[e,t])),Ga=ja.default.div`
  display: flex;
`,Wa=(ja.default.li`
  color: ${e=>e.isSelected?"white":"hsl(1, 1%, 80%)"};
`,ja.default.div``),qa=({sheet:e,depth:t})=>{const n=(0,Na.useCallback)((()=>{ye().transaction((({stateEditors:t})=>{t.studio.historic.panels.outline.selection.set([e])}))}),[e]);return Li((()=>{const r=ka();return Na.default.createElement(Ca,{depth:t,select:n,selectionStatus:r.some((t=>t===e))?"selected":r.some((t=>"Theatre_SheetObject"===t.type&&t.sheet===e))?"descendant-is-selected":"not-selected",label:Na.default.createElement(Ga,null,e.address.sheetId,": ",e.address.sheetInstanceId)},Na.default.createElement(Wa,null,Na.default.createElement(Va,{depth:t+1,sheet:e,key:"objectList"+e.address.sheetInstanceId})))}),[t])},$a=(Da.default.div`
  display: flex;
`,Da.default.li`
  color: ${e=>e.isSelected?"white":"hsl(1, 1%, 80%)"};
`,Da.default.div``,({sheetId:e,depth:t,project:n})=>Li((()=>{const r=(0,Oa.val)(n.sheetTemplatesP[e]);if(!r)return La.default.createElement(La.default.Fragment,null);const i=(0,Oa.val)(r.instancesP);return La.default.createElement(La.default.Fragment,null,Object.entries(i).map((([e,n])=>La.default.createElement(qa,{key:n.address.sheetInstanceId,sheet:n,depth:t}))))}),[t,e,n])),Xa=({project:e,depth:t})=>Li((()=>{if(!e)return null;const n=function(e){return Object.keys((0,Aa.val)(e.sheetTemplatesP))}(e);return Ia.default.createElement(Ia.default.Fragment,null,n.map((n=>Ia.default.createElement($a,{depth:t,sheetId:n,key:`sheet-${n}`,project:e}))))}),[e,t]),Ka=S(n(771)),Ya=S(n(804)).default.div`
  color: #ff6363;
  margin-left: 11px;
  background: #4c282d;
  padding: 2px 8px;
  border-radius: 2px;
  font-size: 10px;
  box-shadow: 0 2px 8px -4px black;
`,Za=({depth:e,project:t})=>{const n=Li((()=>ka()),[]),r=Li((()=>{const e=t.address.projectId,n=(0,Ka.val)(ye().atomP.ephemeral.coreByProject[e].loadingState);return"browserStateIsNotBasedOnDiskState"===(null==n?void 0:n.type)}),[t]),i=(0,ea.useCallback)((()=>{ye().transaction((({stateEditors:e})=>{e.studio.historic.panels.outline.selection.set([t])}))}),[t]);return ea.default.createElement(Ca,{depth:e,label:t.address.projectId,labelDecoration:r?ea.default.createElement(Ya,null,"Has Conflicts"):null,children:ea.default.createElement(Xa,{project:t,depth:e+1}),selectionStatus:n.includes(t)?"selected":n.some((e=>e.address.projectId===t.address.projectId))?"descendant-is-selected":"not-selected",select:i})},Ja=Qo.default.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-right: 4px;
`,Qa=e=>Li((()=>{const e=(0,Zo.val)(ye().projectsP);return Jo.default.createElement(Ja,null,Object.keys(e).map((t=>{const n=e[t];return Jo.default.createElement(Za,{depth:0,project:n,key:`projectListItem-${t}`})})))}),[]),es=S(n(804)),ts=S(n(294)),ns=S(n(294));function rs(e){const t=(0,ns.useMemo)((()=>{let t=e;return{get current(){return t},set current(e){t=e,r(e)}}}),[]),[n,r]=(0,ns.useState)((()=>e));return[t,n]}var is=S(n(294)),os=S(n(294)),as=S(n(294)),ss=S(n(294)),ls=S(n(294)),cs=S(n(294)),us=S(n(294)),ds=S(n(294)),hs=S(n(294)),ps=function(e){var t,n=(0,ds.useRef)(e);n.current=e,t=function(){return function(){return n.current()}},(0,hs.useEffect)(t,[])},fs="undefined"!=typeof window,ms=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=function(e){var t=(0,us.useRef)(0),n=(0,us.useState)(e),r=n[0],i=n[1],o=(0,us.useCallback)((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){i(e)}))}),[]);return ps((function(){cancelAnimationFrame(t.current)})),[r,o]}({width:fs?window.innerWidth:e,height:fs?window.innerHeight:t}),r=n[0],i=n[1];return(0,cs.useEffect)((function(){if(fs){var e=function(){i({width:window.innerWidth,height:window.innerHeight})};return function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}(window,"resize",e),function(){!function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}(window,"resize",e)}}}),[]),r},gs=S(n(294));function vs(e){const[t,n]=(0,gs.useState)(null);return(0,gs.useLayoutEffect)((()=>(e&&n(e.getBoundingClientRect()),()=>{n(null)})),[e]),t}var ys=(0,S(n(294)).createContext)({}),bs=S(n(294)),xs=e=>{var t;const n=e.children(),[r,i]=rs(null),o=n.props.style?y({},n.props.style):{};o.position="absolute";const a=vs(i),s=vs(e.target),l=ms(),[c,u]=(0,ls.useState)({});return(0,ls.useLayoutEffect)((()=>{if(!a||!i||!s)return;const t={};let n="bottom",r=0,o=0;s.bottom+a.height+8<l.height?(n="bottom",r=s.bottom+8,t.top="0px"):s.top>a.height+8?(n="top",r=s.top-(a.height+8),t.bottom="0px",t.transform="rotateZ(180deg)"):n="overlay";let c=0;if("overlay"!==n){const e=s.left+s.width/2;e<a.width/2?(o=8,c=Math.max(e-8,8)):e+a.width/2>l.width?(o=l.width-(8+a.width),c=Math.min(e-o,a.width-8)):(o=e-a.width/2,c=a.width/2),t.left=c+"px"}const d=o,h=r;return i.style.left=d+"px",i.style.top=h+"px",u(t),e.onPointerOutside?function(e,t,n){const r=e.getBoundingClientRect(),i=e=>{(e.clientX<r.left-t||e.clientX>r.left+r.width+t||e.clientY<r.top-t||e.clientY>r.top+r.height+t)&&n(e)};return window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}}(i,e.onPointerOutside.threshold,e.onPointerOutside.callback):void 0}),[a,i,e.target,s,l]),function(e,t){(0,bs.useEffect)((()=>{if(!e)return;const n=n=>{n.composedPath().includes(e)||t(n)};return window.addEventListener("mousedown",n,{capture:!0}),()=>{window.removeEventListener("mousedown",n,{capture:!0})}}),[e,t])}(i,null!=(t=e.onClickOutside)?t:ba),ss.default.createElement(ys.Provider,{value:c},(0,ls.cloneElement)(n,{ref:r,style:o}))},_s=S(n(834)),ws=S(n(771)),Ss=S(n(294)),Es=(0,Ss.createContext)(null),Ms=0,Ts=({children:e})=>{const t=(0,Ss.useMemo)((()=>new ws.Box(-1)),[]),n=t.derivation,r=(0,Ss.useMemo)((()=>{let e;return(n,r)=>{const i=void 0!==e;void 0!==e&&(clearTimeout(e),e=void 0),0===r||i?t.set(n):e=setTimeout((()=>{t.set(n),e=void 0}),r)}}),[]);return Ss.default.createElement(Es.Provider,{value:{cur:n,set:r}},e)};function Ps(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cs(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function As(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Cs(Object(n),!0).forEach((function(t){Ps(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cs(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ks(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var Rs=S(n(294)),Is=(0,S(n(294)).createContext)({});function Os(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ls(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ds(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ls(Object(n),!0).forEach((function(t){Os(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ls(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ns(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function js(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function zs(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return js(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?js(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}var Bs=S(n(294)),Fs=function(e,t,n){void 0===n&&(n=t.children);var r=(0,Bs.useContext)(Is);return r.useCreateElement?r.useCreateElement(e,t,n):"string"==typeof e&&function(e){return"function"==typeof e}(n)?(t.children,n(Ns(t,["children"]))):(0,Bs.createElement)(e,t,n)};function Us(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hs(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Vs(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Hs(Object(n),!0).forEach((function(t){Us(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hs(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Gs(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ws(e){var t;if(!function(e){return"object"==typeof e&&null!=e}(e))return!1;var n=Object.getPrototypeOf(e);return null==n||(null===(t=n.constructor)||void 0===t?void 0:t.toString())===Object.toString()}function qs(e,t){for(var n={},r={},i=0,o=Object.keys(e);i<o.length;i++){var a=o[i];t.indexOf(a)>=0?n[a]=e[a]:r[a]=e[a]}return[n,r]}function $s(e,t){if(void 0===t&&(t=[]),!Ws(e.state))return qs(e,t);var n=qs(e,[].concat(t,["state"])),r=n[0],i=n[1],o=r.state,a=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(r,["state"]);return[Vs(Vs({},o),a),i]}function Xs(e,t){if(e===t)return!0;if(!e)return!1;if(!t)return!1;if("object"!=typeof e)return!1;if("object"!=typeof t)return!1;var n=Object.keys(e),r=Object.keys(t),i=n.length;if(r.length!==i)return!1;for(var o=0,a=n;o<a.length;o++){var s=a[o];if(e[s]!==t[s])return!1}return!0}function Ks(e){return"normalizePropsAreEqualInner"===e.name?e:function(t,n){return Ws(t.state)&&Ws(n.state)?e(Vs(Vs({},t.state),t),Vs(Vs({},n.state),n)):e(t,n)}}function Ys(e){var t,n=e.as,r=e.useHook,i=e.memo,o=e.propsAreEqual,a=void 0===o?null==r?void 0:r.unstable_propsAreEqual:o,s=e.keys,l=void 0===s?(null==r?void 0:r.__keys)||[]:s,c=e.useCreateElement,u=void 0===c?Fs:c,d=function(e,t){var i=e.as,o=void 0===i?n:i,a=Ns(e,["as"]);if(r){var s,c=$s(a,l),d=c[0],h=c[1],p=r(d,Ds({ref:t},h)),f=p.wrapElement,m=Ns(p,["wrapElement"]),g=(null===(s=o.render)||void 0===s?void 0:s.__keys)||o.__keys,v=g&&$s(a,g)[0],y=v?Ds(Ds({},m),v):m,b=u(o,y);return f?f(b):b}return u(o,Ds({ref:t},a))};return r&&(d.displayName=r.name.replace(/^(unstable_)?use/,"")),t=d,d=(0,Rs.forwardRef)(t),i&&(d=function(e,t){return(0,Rs.memo)(e,t)}(d,a&&Ks(a))),d.__keys=l,d.unstable_propsAreEqual=Ks(a||Xs),d}S(n(294));var Zs=S(n(294));function Js(e,t){(0,Zs.useDebugValue)(e);var n=(0,Zs.useContext)(Is);return null!=n[e]?n[e]:t}var Qs=S(n(294)),el=S(n(294));function tl(e){var t,n,r,i=(r=e.compose,Array.isArray(r)?r:void 0!==r?[r]:[]),o=function(t,n){if(e.useOptions&&(t=e.useOptions(t,n)),e.name&&(t=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n={});var r="use"+e+"Options";(0,el.useDebugValue)(r);var i=Js(r);return i?Ds(Ds({},t),i(t,n)):t}(e.name,t,n)),e.compose)for(var r,o=zs(i);!(r=o()).done;)t=r.value.__useOptions(t,n);return t},a=function(t,n,r){if(void 0===t&&(t={}),void 0===n&&(n={}),void 0===r&&(r=!1),r||(t=o(t,n)),e.useProps&&(n=e.useProps(t,n)),e.name&&(n=function(e,t,n){void 0===t&&(t={}),void 0===n&&(n={});var r="use"+e+"Props";(0,Qs.useDebugValue)(r);var i=Js(r);return i?i(t,n):n}(e.name,t,n)),e.compose)if(e.useComposeOptions&&(t=e.useComposeOptions(t,n)),e.useComposeProps)n=e.useComposeProps(t,n);else for(var a,s=zs(i);!(a=s()).done;)n=(0,a.value)(t,n,!0);var l={},c=n||{};for(var u in c)void 0!==c[u]&&(l[u]=c[u]);return l};a.__useOptions=o;var s=i.reduce((function(e,t){return e.push.apply(e,t.__keys||[]),e}),[]);return a.__keys=[].concat(s,(null===(t=e.useState)||void 0===t?void 0:t.__keys)||[],e.keys||[]),a.unstable_propsAreEqual=e.propsAreEqual||(null===(n=i[0])||void 0===n?void 0:n.unstable_propsAreEqual)||Xs,e.name&&Object.defineProperty(a,"name",{value:"use"+e.name}),a}S(n(294));var nl=S(n(294));function rl(e,t){void 0===t&&(t=null),e&&("function"==typeof e?e(t):e.current=t)}function il(e,t){return(0,nl.useMemo)((function(){return null==e&&null==t?null:function(n){rl(e,n),rl(t,n)}}),[e,t])}var ol=["button","color","file","image","reset","submit"];function al(e){if("BUTTON"===e.tagName)return!0;if("INPUT"===e.tagName){var t=e;return-1!==ol.indexOf(t.type)}return!1}function sl(e){for(var t,n=[],r=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return Gs(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gs(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}(e);!(t=r()).done;){var i=t.value;Array.isArray(i)?n.push.apply(n,sl(i)):n.push(i)}return n}function ll(e){var t;if(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=sl(r.map((function(e){return[e,"\n"]})));(t=console).warn.apply(t,o.slice(0,-1));try{throw Error(o.join(""))}catch(e){}}}S(n(294)),S(n(294));var cl,ul=S(n(294));function dl(e){return e?e.ownerDocument||e:document}try{cl=window}catch(e){}var hl,pl=(hl=cl,Boolean(void 0!==hl&&hl.document&&hl.document.createElement)),fl=S(n(294)),ml=pl?fl.useLayoutEffect:fl.useEffect;function gl(e){var t=(0,ul.useRef)(e);return ml((function(){t.current=e})),t}function vl(e,t){return e===t||e.contains(t)}function yl(e){return!!pl&&-1!==window.navigator.userAgent.indexOf(e)}var bl=tl({name:"Role",keys:["unstable_system"],propsAreEqual:function(e,t){var n=e.unstable_system,r=ks(e,["unstable_system"]),i=t.unstable_system,o=ks(t,["unstable_system"]);return!(n!==i&&!Xs(n,i))&&Xs(r,o)}}),xl=(Ys({as:"div",useHook:bl}),S(n(294))),_l=yl("Mac")&&!yl("Chrome")&&(yl("Safari")||yl("Firefox"));function wl(e){!function(e){var t=function(e){var t=dl(e).activeElement;return null!=t&&t.nodeName?t:null}(e);if(!t)return!1;if(vl(e,t))return!0;var n=t.getAttribute("aria-activedescendant");return!(!n||n!==e.id&&!e.querySelector("#"+n))}(e)&&function(e){return function(e,t){return"matches"in e?e.matches(t):"msMatchesSelector"in e?e.msMatchesSelector(t):e.webkitMatchesSelector(t)}(e,"input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])")&&function(e){var t=e;return t.offsetWidth>0||t.offsetHeight>0||e.getClientRects().length>0}(e)}(e)&&e.focus()}function Sl(e,t,n,r){return e?t&&!n?-1:void 0:t?r:r||0}function El(e,t){return(0,xl.useCallback)((function(n){var r;null===(r=e.current)||void 0===r||r.call(e,n),n.defaultPrevented||t&&(n.stopPropagation(),n.preventDefault())}),[e,t])}var Ml=tl({name:"Tabbable",compose:bl,keys:["disabled","focusable"],useOptions:function(e,t){return As({disabled:t.disabled},e)},useProps:function(e,t){var n=t.ref,r=t.tabIndex,i=t.onClickCapture,o=t.onMouseDownCapture,a=t.onMouseDown,s=t.onKeyPressCapture,l=t.style,c=ks(t,["ref","tabIndex","onClickCapture","onMouseDownCapture","onMouseDown","onKeyPressCapture","style"]),u=(0,xl.useRef)(null),d=gl(i),h=gl(o),p=gl(a),f=gl(s),m=!!e.disabled&&!e.focusable,g=(0,xl.useState)(!0),v=g[0],y=g[1],b=(0,xl.useState)(!0),x=b[0],_=b[1],w=e.disabled?As({pointerEvents:"none"},l):l;ml((function(){var e=u.current;e?(function(e){return"BUTTON"===e.tagName||"INPUT"===e.tagName||"SELECT"===e.tagName||"TEXTAREA"===e.tagName||"A"===e.tagName}(e)||y(!1),function(e){return"BUTTON"===e.tagName||"INPUT"===e.tagName||"SELECT"===e.tagName||"TEXTAREA"===e.tagName}(e)||_(!1)):ll(!0,"Can't determine if the element is a native tabbable element because `ref` wasn't passed to the component.","See https://reakit.io/docs/tabbable")}),[]);var S=El(d,e.disabled),E=El(h,e.disabled),M=El(f,e.disabled),T=(0,xl.useCallback)((function(e){var t;null===(t=p.current)||void 0===t||t.call(p,e);var n=e.currentTarget;if(!e.defaultPrevented&&_l&&!function(e){return!vl(e.currentTarget,e.target)}(e)&&al(n)){var r=requestAnimationFrame((function(){n.removeEventListener("mouseup",i,!0),wl(n)})),i=function(){cancelAnimationFrame(r),wl(n)};n.addEventListener("mouseup",i,{once:!0,capture:!0})}}),[]);return As({ref:il(u,n),style:w,tabIndex:Sl(m,v,x,r),disabled:!(!m||!x)||void 0,"aria-disabled":!!e.disabled||void 0,onClickCapture:S,onMouseDownCapture:E,onMouseDown:T,onKeyPressCapture:M},c)}}),Tl=(Ys({as:"div",useHook:Ml}),S(n(294))),Pl=tl({name:"Clickable",compose:Ml,keys:["unstable_clickOnEnter","unstable_clickOnSpace"],useOptions:function(e){var t=e.unstable_clickOnEnter,n=void 0===t||t,r=e.unstable_clickOnSpace;return As({unstable_clickOnEnter:n,unstable_clickOnSpace:void 0===r||r},ks(e,["unstable_clickOnEnter","unstable_clickOnSpace"]))},useProps:function(e,t){var n=t.onKeyDown,r=t.onKeyUp,i=ks(t,["onKeyDown","onKeyUp"]),o=(0,Tl.useState)(!1),a=o[0],s=o[1],l=gl(n),c=gl(r),u=(0,Tl.useCallback)((function(t){var n;if(null===(n=l.current)||void 0===n||n.call(l,t),!t.defaultPrevented&&!e.disabled&&!t.metaKey&&function(e){return e.target===e.currentTarget}(t)){var r=e.unstable_clickOnEnter&&"Enter"===t.key,i=e.unstable_clickOnSpace&&" "===t.key;if(r||i){if(function(e){var t=e.currentTarget;return!!e.isTrusted&&(al(t)||"INPUT"===t.tagName||"TEXTAREA"===t.tagName||"A"===t.tagName||"SELECT"===t.tagName)}(t))return;t.preventDefault(),r?t.currentTarget.click():i&&s(!0)}}}),[e.disabled,e.unstable_clickOnEnter,e.unstable_clickOnSpace]),d=(0,Tl.useCallback)((function(t){var n;if(null===(n=c.current)||void 0===n||n.call(c,t),!t.defaultPrevented&&!e.disabled&&!t.metaKey){var r=e.unstable_clickOnSpace&&" "===t.key;a&&r&&(s(!1),t.currentTarget.click())}}),[e.disabled,e.unstable_clickOnSpace,a]);return As({"data-active":a||void 0,onKeyDown:u,onKeyUp:d},i)}}),Cl=(Ys({as:"button",memo:!0,useHook:Pl}),S(n(294))),Al=tl({name:"Button",compose:Pl,keys:[],useProps:function(e,t){var n=t.ref,r=ks(t,["ref"]),i=(0,Cl.useRef)(null),o=(0,Cl.useState)(void 0),a=o[0],s=o[1],l=(0,Cl.useState)("button"),c=l[0],u=l[1];return(0,Cl.useEffect)((function(){var e=i.current;e?al(e)||("A"!==e.tagName&&s("button"),u(void 0)):ll(!0,"Can't determine whether the element is a native button because `ref` wasn't passed to the component","See https://reakit.io/docs/button")}),[]),As({ref:il(i,n),role:a,type:c},r)}}),kl=Ys({as:"button",memo:!0,useHook:Al}),Rl=Ys({as:"div",useHook:tl({name:"Group",compose:bl,keys:[],useProps:function(e,t){return As({role:"group"},t)}})}),Il=(S(n(834)),S(n(294))),Ol=S(n(834));function Ll(){return pl?document.body:null}var Dl,Nl=(0,Il.createContext)(Ll());function jl(e){var t=e.children,n=(0,Il.useContext)(Nl)||Ll(),r=(0,Il.useState)((function(){if(pl){var e=document.createElement("div");return e.className=jl.__className,e}return null})),i=r[0];return ml((function(){if(i&&n)return n.appendChild(i),function(){n.removeChild(i)}}),[i,n]),i?(0,Ol.createPortal)((0,Il.createElement)(Nl.Provider,{value:i},t),i):null}function zl(e,t){const n=!1!==e.enabled,[r,i]=(()=>{const e=(0,Ss.useMemo)((()=>Ms++),[]),{cur:t,set:n}=(0,Ss.useContext)(Es),[r,i]=rs(!1),o=(0,Ss.useCallback)(((t,r)=>{n(t?e:-1,r)}),[]);return(0,Ss.useEffect)((()=>t.changesWithoutValues().tap((()=>{const n=t.getValue()===e;r.current!==n&&(r.current=n)}))),[t,e]),[i,o]})(),[o,a]=rs(null);(0,os.useEffect)((()=>{if(!n)return;const t=o.current;if(!t)return;const r=()=>{var t;return i(!0,null!=(t=e.enterDelay)?t:400)},a=()=>{var t;return i(!1,null!=(t=e.exitDelay)?t:200)};return t.addEventListener("mouseenter",r),t.addEventListener("mouseleave",a),()=>{t.removeEventListener("mouseenter",r),t.removeEventListener("mouseleave",a)}}),[o,n,e.enterDelay,e.exitDelay]);const s=(0,is.useContext)(Nl);return[n&&r&&a?(0,_s.createPortal)(as.default.createElement(xs,{children:t,target:a,onClickOutside:ba}),s):as.default.createElement(as.default.Fragment,null),o,r]}jl.__className="__reakit-portal",jl.__selector="."+jl.__className,"undefined"!=typeof window&&(Dl={get passive(){}},window.addEventListener("testPassive",null,Dl),window.removeEventListener("testPassive",null,Dl)),"undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints);var Bl=function(e){return function(t){e.forEach((function(e){"function"==typeof e?e(t):null!=e&&(e.current=t)}))}},Fl=S(n(804)),Ul=S(n(804)),Hl=S(n(294)),Vl=S(n(804)),Gl=S(n(294)),Wl=S(n(804)),ql=Wl.default.div`
  position: absolute;
  width: 0;
  height: 0;
  color: var(--popover-arrow-color);
  pointer-events: none;
`,$l=Wl.default.div`
  width: 12px;
  height: 8px;
  position: absolute;
  left: -7px;
  top: -8px;
  text-align: center;
  line-height: 0;
`,Xl=Wl.default.path`
  fill: var(--popover-bg);
`,Kl=Wl.default.path`
  fill: var(--popover-inner-stroke);
`,Yl=Wl.default.path`
  fill: var(--popover-outer-stroke);
`,Zl=(0,Gl.forwardRef)((({className:e},t)=>{const n=(0,Gl.useContext)(ys);return Gl.default.createElement(ql,{className:e,ref:t,style:y({},n)},Gl.default.createElement($l,null,Gl.default.createElement("svg",{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Gl.default.createElement(Yl,{d:"M6 0L0 6H12L6 0Z"}),Gl.default.createElement(Kl,{d:"M6 1.5L0 7.5H12L6 1.5Z"}),Gl.default.createElement(Xl,{d:"M6 3L0 9H12L6 3Z"}))))})),Jl=Bo(.05,"#2a2a31"),Ql=Vl.default.div`
  position: absolute;
  --popover-bg: ${Jl};
  --popover-inner-stroke: #505159;
  --popover-outer-stroke: #111;

  background: var(--popover-bg);

  color: white;
  padding: 0;
  margin: 0;
  cursor: default;
  ${Ho};
  border-radius: 3px;
  z-index: 10000;
  border: 1px solid var(--popover-inner-stroke);
  box-shadow: 0 0 0 1px var(--popover-outer-stroke), 0 6px 8px -4px black;
  backdrop-filter: blur(8px);

  & a {
    color: inherit;
  }
`,ec=Hl.default.forwardRef((({children:e,className:t},n)=>Hl.default.createElement(Ql,{className:t,ref:n},Hl.default.createElement(Zl,null),e))),tc=(0,Ul.default)(ec)`
  padding: 1em;
  max-width: 240px;
  pointer-events: none !important;
  --popover-outer-stroke: transparent;
  --popover-inner-stroke: #45464d;
`,nc=(0,Fl.default)(tc)`
  padding: 6px;
`,rc=es.default.button`
  ${Ho};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  width: 24px;
  height: 24px;
  outline: none;

  color: rgba(255, 255, 255, 0.75);
  background-color: rgb(47, 49, 53);

  &:hover {
    color: #fff;

    background-color: rgba(28, 30, 32, 0.95);
    &:after {
      border-color: rgba(90, 90, 90, 1);
    }
  }

  &.selected {
    color: #fff;

    background-color: rgba(17, 18, 20, 0.95);
    &:after {
      border-color: rgb(43, 43, 43);
    }
  }

  &:before {
    border: 1px solid rgb(62, 62, 62);
    position: absolute;
    inset: -1px;
    display: block;
    content: ' ';
    z-index: -1;
    pointer-events: none;
    border-radius: 2px;
    box-sizing: border-box;
    box-shadow: 0px 3px 4px -3px rgba(0, 0, 0, 0.49);
  }

  border: 0;
`,ic=ts.default.forwardRef(((e,t)=>{var n=e,{title:r}=n,i=_(n,["title"]);const[o,a]=zl({enabled:"string"==typeof r},(()=>ts.default.createElement(nc,null,r)));return ts.default.createElement(ts.default.Fragment,null,o,ts.default.createElement(rc,y({ref:Bl([a,t])},i))," ")})),oc=S(n(771)),ac=(0,S(n(804)).default)(tc)`
  --popover-outer-stroke: #e11c1c;
  --popover-inner-stroke: #2c1c1c;
  --popover-bg: #2c1c1c;
  pointer-events: none !important;
`,sc=$i.default.div`
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 12px;
  bottom: 0px;
  right: 0;
  z-index: ${Wo.outlinePanel};

  &:before {
    display: block;
    content: ' ';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 40px;
    ${Ho};
  }
  &:hover:before {
    top: -12px;
    width: 300px;
  }
`,lc=$i.default.div`
  margin-left: 12px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`,cc=$i.default.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateX(-100%);
  pointer-events: none;

  ${sc}:hover & {
    transform: translateX(0);
  }
`,uc="32px",dc=(0,$i.default)(ic)`
  ${sc}:hover & {
    background-color: rgba(36, 38, 42, 0.95);
    &:after {
      border-color: rgba(255, 255, 255, 0.22);
    }
    color: white;
  }
`,hc=($i.default.div`
  margin: 0 12px;
  color: #ffffffc2;
  font-weight: 500;
  font-size: 10px;
  user-select: none;
  position: relative;
  display: none;
  background-color: rgba(60, 60, 60, 0.2);
  height: 24px;
  ${sc}:hover & {
    display: block;
  }

  &:after {
    position: absolute;
    inset: 4px 0px;
    display: block;
    content: ' ';
    pointer-events: none;
    z-index: -1;
    background-color: #69777947;
    border-radius: 0 2px 2px 0;
  }
`,$i.default.div`
  ${Ho};
  position: absolute;
  top: ${uc};
  left: 8px;
  height: auto;
  max-height: calc(100% - ${uc});
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0;
  user-select: none;
`),pc=$i.default.div`
  color: white;
  width: 14px;
  height: 14px;
  background: #d00;
  border-radius: 4px;
  text-align: center;
  line-height: 14px;
  font-weight: 600;
  font-size: 8px;
  position: relative;
  left: -6px;
  top: -11px;
  margin-right: -14px;
  box-shadow: 0 4px 6px -4px #00000059;
`,fc=e=>{const t=Li((()=>{const e=(0,oc.val)(ye().atomP.ephemeral.coreByProject);return Object.entries(e).map((([e,t])=>({projectId:e,state:t}))).filter((({state:e})=>"browserStateIsNotBasedOnDiskState"===e.loadingState.type))}),[]),[n,r]=zl({enabled:t.length>0,enterDelay:t.length>0?0:200},(()=>t.length>0?qi.default.createElement(ac,null,1===t.length?`There is a state conflict in project "${t[0].projectId}". Select the project in the outline below in order to fix it.`:`There are ${t.length} projects that have state conflicts. They are highlighted in the outline below. `):qi.default.createElement(tc,null,"Outline")));return qi.default.createElement(sc,null,qi.default.createElement(lc,null,n,qi.default.createElement(dc,{ref:r},qi.default.createElement(ga,null)),t.length>0?qi.default.createElement(pc,null,t.length):null),qi.default.createElement(cc,null,qi.default.createElement(hc,null,qi.default.createElement(Qa,null))))},mc=S(n(294)),gc=S(n(804)),vc=S(n(294)),yc=S(n(771)),bc=S(n(294)),xc=S(n(294));function _c(e,t){return 0===t.length?e:Gn(e,t)}var wc,Sc=S(n(771)),Ec=S(n(294)),Mc=S(n(294)),Tc=S(n(804)),Pc={defaultState:{color:Bo(.85,"#C4C4C4")},withStaticOverride:{color:Bo(.85,"#C4C4C4")}},Cc=Tc.default.div`
  width: 16px;
  margin: 0 0px 0 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${e=>e.hasStaticOverride?Pc.withStaticOverride.color:Pc.defaultState.color};
`,Ac=Tc.default.rect`
  fill: currentColor;
`,kc=()=>Mc.default.createElement("svg",{width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Mc.default.createElement(Ac,{width:"5",height:"5"})),Rc=e=>Mc.default.createElement(Cc,{hasStaticOverride:e.hasStaticOverride},Mc.default.createElement(kc,null)),Ic=S(n(294)),Oc=S(n(804)),Lc=Oc.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  margin: 0 0px 0 2px;
  position: relative;
  z-index: 0;
  opacity: 0.7;

  &:after {
    position: absolute;
    left: -14px;
    right: -14px;
    top: -2px;
    bottom: -2px;
    content: ' ';
    display: none;
    z-index: -1;
    background: ${Bo(.2,"black")};
  }

  &:hover {
    opacity: 1;
    &:after {
      display: block;
    }
  }
`,Dc=Oc.default.div`
  background: none;
  position: relative;
  border: 0;
  transition: transform 0.1s ease-out;
  z-index: 0;
  outline: none;
  cursor: pointer;

  &:after {
    display: none;
    ${Lc}:hover & {
      display: block;
    }
    position: absolute;
    left: -4px;
    right: -4px;
    top: -4px;
    bottom: -4px;
    content: ' ';
    z-index: -1;
  }
`,Nc="#555",jc="#e0c917",zc=(0,Oc.default)(Dc)`
  &:hover {
    color: #e0c917;
  }
  color: ${e=>e.isOn?jc:Nc};
`,Bc=Oc.css`
  pointer-events: none !important;
`,Fc=(0,Oc.default)(Dc)`
  color: ${e=>e.available?jc:Nc};

  ${e=>e.available?Ho:Bc};
`,Uc=(0,Oc.default)(Fc)`
  transform: translateX(2px);
  ${Lc}:hover & {
    transform: translateX(-7px);
  }
`,Hc=(0,Oc.default)(Fc)`
  transform: translateX(-2px);

  ${Lc}:hover & {
    transform: translateX(7px);
  }
`;!function(e){const t=Oc.default.g`
    stroke-width: 1;
    ${Fc}:hover & path {
      stroke-width: 3;
    }
  `;e.Prev=()=>Ic.default.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ic.default.createElement(t,{transform:"translate(6 3)"},Ic.default.createElement("path",{d:"M4 1L1 4L4 7",stroke:"currentColor"}))),e.Next=()=>Ic.default.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ic.default.createElement(t,{transform:"translate(1 3)"},Ic.default.createElement("path",{d:"M1 1L4 4L1 7",stroke:"currentColor"})));const n=Oc.default.g`
    stroke-width: 0;
    ${zc}:hover & path {
      stroke: currentColor;
      stroke-width: 2;
    }
  `;e.Cur=()=>Ic.default.createElement("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ic.default.createElement(n,{transform:"translate(1 4)"},Ic.default.createElement("path",{d:"M3 0L6 3L3 6L0 3L3 0Z",fill:"currentColor"})))}(wc||(wc={}));var Vc=e=>Ic.default.createElement(Lc,null,Ic.default.createElement(Uc,{available:!!e.prev,onClick:()=>{e.prev&&e.jumpToPosition(e.prev.position)}},Ic.default.createElement(wc.Prev,null)),Ic.default.createElement(zc,{isOn:!!e.cur,onClick:()=>{e.toggleKeyframeOnCurrentPosition()}},Ic.default.createElement(wc.Cur,null)),Ic.default.createElement(Hc,{available:!!e.next,onClick:()=>{e.next&&e.jumpToPosition(e.next.position)}},Ic.default.createElement(wc.Next,null)));function Gc(e,t,n){return Li((()=>{var r;const i=(0,Sc.getPointerParts)(e).path,o=t.getValueByPointer(e),a=Sc.prism.memo("callbacks",(()=>{let t=null;return{temporarilySetValue(n){t||(t=ye().scrub()),t.capture((t=>{t.set(e,n)}))},discardTemporaryValue(){t&&(t.discard(),t=null)},permenantlySetValue(n){t?(t.capture((t=>{t.set(e,n)})),t.commit(),t=null):ye().transaction((t=>{t.set(e,n)}))}}}),[]),s=!0===(0,Sc.val)(Gn(ye().atomP.ephemeral.projects.stateByProjectId[t.address.projectId].stateBySheetId[t.address.sheetId].stateByObjectKey[t.address.objectKey].valuesBeingScrubbed,(0,Sc.getPointerParts)(e).path)),l=[],c=b(y({},a),{value:o,beingScrubbed:s,contextMenuItems:l,controlIndicators:Ec.default.createElement(Ec.default.Fragment,null)}),u="number"===n.type;if(u){const n=_c((0,Sc.val)(t.template.getMapOfValidSequenceTracks_forStudio()),i);if("string"==typeof n){l.push({label:"Make static",callback:()=>{ye().transaction((({stateEditors:n})=>{const r=b(y({},t.address),{pathToProp:i});n.coreByProject.historic.sheetsById.sequence.setPrimitivePropAsStatic(b(y({},r),{value:t.getValueByPointer(e)}))}))}});const o=n,a=Sc.prism.sub("lcr",(()=>{const e=(0,Sc.val)(t.template.project.pointers.historic.sheetsById[t.address.sheetId].sequence.tracksByObject[t.address.objectKey].trackData[o]);if(!e||0===e.keyframes.length)return{};const n=(0,Sc.val)(t.sheet.getSequence().positionDerivation),r=e.keyframes.findIndex((e=>e.position>=n));if(-1===r)return{prev:li(e.keyframes)};const i=e.keyframes[r];return i.position===n?{prev:r>0?e.keyframes[r-1]:void 0,cur:i,next:r===e.keyframes.length-1?void 0:e.keyframes[r+1]}:{next:i,prev:r>0?e.keyframes[r-1]:void 0}}),[o]);let s;s=c.beingScrubbed?"Sequenced_OnKeyframe_BeingScrubbed":a.cur?"Sequenced_OnKeyframe":!0===(null==(r=a.prev)?void 0:r.connectedRight)?"Sequenced_BeingInterpolated":"Sequened_NotBeingInterpolated";const u=Ec.default.createElement(Vc,b(y({},a),{jumpToPosition:e=>{t.sheet.getSequence().position=e},toggleKeyframeOnCurrentPosition:()=>{a.cur?ye().transaction((t=>{t.unset(e)})):ye().transaction((t=>{t.set(e,c.value)}))}}));return b(y({},c),{type:"Sequenced",shade:s,nearbyKeyframes:a,controlIndicators:u})}}return l.push({label:"Reset to default",callback:()=>{ye().transaction((({unset:t})=>{t(e)}))}}),u&&l.push({label:"Sequence",callback:()=>{ye().transaction((({stateEditors:e})=>{const n=b(y({},t.address),{pathToProp:i});e.coreByProject.historic.sheetsById.sequence.setPrimitivePropAsSequenced(n)}))}}),void 0!==_c((0,Sc.val)(t.template.getStaticValues()),i)?b(y({},c),{type:"Static",shade:c.beingScrubbed?"Static_BeingScrubbed":"Static",controlIndicators:Ec.default.createElement(Rc,{hasStaticOverride:!0})}):b(y({},c),{type:"Default",shade:"Default",controlIndicators:Ec.default.createElement(Rc,{hasStaticOverride:!1})})}),[])}var Wc=S(n(771)),qc=S(n(294)),$c=S(N()),Xc=S(n(294)),Kc=S(n(294)),Yc=S(n(834)),Zc=S(n(804)),Jc=S(n(294)),Qc=S(n(804)),eu=Qc.default.li`
  height: ${26}px;
  padding: 0 12px;
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 11px;
  font-weight: 400;
  position: relative;
  pointer-events: ${e=>e.enabled?"auto":"none"};
  color: ${e=>e.enabled?"white":"#AAA"};

  &:after {
    position: absolute;
    inset: 2px 1px;
    display: block;
    content: ' ';
    pointer-events: none;
    z-index: -1;
    border-radius: 3px;
  }

  &:hover:after {
    background-color: rgba(63, 174, 191, 0.75);
  }
`,tu=Qc.default.span``,nu=e=>Jc.default.createElement(eu,{onClick:e.enabled?e.onClick:ba,enabled:e.enabled},Jc.default.createElement(tu,null,e.label)),ru=S(n(294)),iu=Zc.default.ul`
  position: absolute;
  min-width: ${190}px;
  z-index: 10000;
  background: ${(0,$c.default)(.2,"#111")};
  backdrop-filter: blur(2px);
  color: white;
  list-style-type: none;
  padding: 2px 0;
  margin: 0;
  border-radius: 1px;
  cursor: default;
  ${Ho};
  border-radius: 3px;
`,ou=e=>{const[t,n]=(0,Kc.useState)(null),r=vs(t),i=ms();(0,Kc.useLayoutEffect)((()=>{if(!r||!t)return;const n=r.width/2,o={left:e.rightClickPoint.clientX-n,top:e.rightClickPoint.clientY-13};o.left<0?o.left=0:o.left+r.width>i.width&&(o.left=i.width-r.width),o.top<0?o.top=0:o.top+r.height>i.height&&(o.top=i.height-r.height),t.style.left=o.left+"px",t.style.top=o.top+"px";const a=t=>{(t.clientX<o.left-20||t.clientX>o.left+r.width+20||t.clientY<o.top-20||t.clientY>o.top+r.height+20)&&e.onRequestClose()};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}}),[r,t,e.rightClickPoint,i,e.onRequestClose]);const o=(0,Xc.useContext)(Nl);!function(e){const t=(0,ru.useRef)(e);t.current=e,(0,ru.useEffect)((()=>{const e=e=>t.current(e);return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[])}((t=>{"Escape"===t.key&&e.onRequestClose()}));const a=Array.isArray(e.items)?e.items:e.items();return(0,Yc.createPortal)(Kc.default.createElement(iu,{ref:n},a.map(((t,n)=>Kc.default.createElement(nu,{key:`item-${n}`,label:t.label,enabled:!1!==t.enabled,onClick:n=>{t.callback&&t.callback(n),e.onRequestClose()}})))),o)},au=S(n(294)),su=qc.default.createElement(qc.default.Fragment,null);function lu(e,t){const[n,r]=(e=>{const[t,n]=(0,au.useState)({isOpen:!1}),r=(0,au.useCallback)((()=>n({isOpen:!1})),[]);return(0,au.useEffect)((()=>{if(!e)return void n({isOpen:!1});const t=e=>{n({isOpen:!0,event:e}),e.preventDefault(),e.stopPropagation()};return e.addEventListener("contextmenu",t),()=>{e.removeEventListener("contextmenu",t)}}),[e]),[t,r]})(e);return[n.isOpen?qc.default.createElement(ou,{items:t.items,rightClickPoint:n.event,onRequestClose:r}):su,r,n.isOpen]}var cu=S(n(294)),uu=S(n(804)),du="calc(var(--left-pad) + var(--depth) * var(--step))",hu=Bo(.05,"#282b2f"),pu=uu.css`
  &:after,
  &:before {
    position: absolute;
    display: block;
    content: ' ';
    z-index: -1;
    box-sizing: content-box;
  }

  &:after {
    inset: 0px 0 1px calc(-2px + var(--left-pad) + var(--depth) * var(--step));
    background-color: ${hu};
  }

  &:before {
    height: 2px;
    right: 0;
    bottom: 0px;
    left: calc(-2px + var(--left-pad) + var(--depth) * var(--step));
    background-color: ${Bo(.2,hu)};
  }
`,fu=uu.css`
  font-weight: 300;
  font-size: 11px;
  color: #9a9a9a;
  text-shadow: 0.5px 0.5px 2px rgba(0, 0, 0, 0.3);
`,mu=uu.default.div`
  display: flex;
  height: 30px;
  justify-content: flex-start;
  align-items: stretch;
  --right-width: 60%;
  position: relative;
  ${Ho};

  ${pu};
`,gu=uu.default.div`
  box-sizing: border-box;
  padding-left: ${du};
  padding-right: 4px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  gap: 4px;
  flex-grow: 0;
  flex-shrink: 0;
  width: calc(100% - var(--right-width));
`,vu=uu.default.div`
  text-align: left;
  flex: 1 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: default;

  ${fu};
  &:hover {
    color: white;
  }
`,yu=uu.default.div`
  flex-basis: 8px;
  flex: 0 0;
  display: flex;
  align-items: center;
`,bu=uu.default.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  padding: 0 8px 0 2px;
  box-sizing: border-box;
  height: 100%;
  width: var(--right-width);
  flex-shrink: 0;
  flex-grow: 0;
`,xu=({propConfig:e,pointerToProp:t,stuff:n,children:r})=>{var i;const o=null!=(i=e.label)?i:li((0,Wc.getPointerParts)(t).path),[a,s]=rs(null),[l]=lu(s,{items:n.contextMenuItems});return n.shade,cu.default.createElement(mu,null,l,cu.default.createElement(gu,null,cu.default.createElement(yu,null,n.controlIndicators),cu.default.createElement(vu,{ref:a,title:["obj","props",...(0,Wc.getPointerParts)(t).path].join(".")},o)),cu.default.createElement(bu,null,r))},_u=S(n(804)),wu=S(n(804)).default.input.attrs({type:"checkbox"})`
  outline: none;
`,Su=(0,_u.default)(wu)`
  margin-left: 6px;
`;function Eu(e){return"compound"===e.type||"enum"===e.type}var Mu=S(n(771)),Tu=S(n(294)),Pu=S(n(804)),Cu=Pu.default.div`
  --step: 8px;
  --left-pad: 0px;
  ${Ho};
`,Au=Pu.default.div`
  height: 30px;
  display: flex;
  align-items: stretch;
  position: relative;

  ${pu};
`,ku=Pu.default.div`
  padding-left: ${du};
  display: flex;
  align-items: center;
`,Ru=Pu.default.div`
  margin-left: 4px;
  cursor: default;
  height: 100%;
  display: flex;
  align-items: center;
  user-select: none;
  &:hover {
    /* color: white; */
  }

  ${()=>fu};
`,Iu=Bo(.05,"#282b2f"),Ou=Pu.default.div`
  /* background: ${({depth:e})=>Do(.03*e,Iu)}; */
  /* padding: ${e=>e.lastSubIsComposite?0:"4px"} 0; */
`,Lu=S(n(294)),Du=S(n(804)),Nu=()=>{},ju=[],zu=S(n(294));function Bu(e){const t=document.createElement("div");return t.style.cssText="\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 9999999;",t.style.cursor=e,document.body.appendChild(t),()=>{document.body.removeChild(t)}}var Fu=class extends zu.default.PureComponent{constructor(e){super(e),E(this,"s"),E(this,"mode","notDragging"),E(this,"getDeltas"),E(this,"relinquishCursorLock",Nu),E(this,"disableUnwantedClick",(e=>{this.s.dragHappened&&(this.props.dontBlockMouseDown||"notDragging"===this.mode||(e.stopPropagation(),e.preventDefault()),this.s.dragHappened=!1)})),E(this,"dragStartHandler",(e=>{if(0!==e.button)return;if(!1===(this.props.onDragStart&&this.props.onDragStart(e)))return;this.props.dontBlockMouseDown||(e.stopPropagation(),e.preventDefault()),this.mode="dragStartCalled";const{screenX:t,screenY:n}=e;this.s.startPos={x:t,y:n},this.s.dragHappened=!1,this.addDragListeners()})),E(this,"dragEndHandler",(()=>{this.removeDragListeners(),this.mode="notDragging",this.props.onDragEnd&&this.props.onDragEnd(this.s.dragHappened),this.relinquishCursorLock(),this.relinquishCursorLock=Nu})),E(this,"dragHandler",(e=>{!this.s.dragHappened&&this.props.lockCursorTo&&(this.relinquishCursorLock=Bu(this.props.lockCursorTo)),this.s.dragHappened||(this.s.dragHappened=!0),this.mode="dragging";const t=this.getDeltas(e);this.props.onDrag(t[0],t[1],e)})),this.s={dragHappened:!1,startPos:{x:0,y:0}},e.shouldReturnMovement?this.getDeltas=this.getMovements:this.getDeltas=this.getDistances}render(){return!1!==this.props.enabled?zu.default.cloneElement(this.props.children,{onMouseDown:this.dragStartHandler,onClickCapture:this.disableUnwantedClick}):this.props.children}addDragListeners(){document.addEventListener("mousemove",this.dragHandler),document.addEventListener("mouseup",this.dragEndHandler)}removeDragListeners(){document.removeEventListener("mousemove",this.dragHandler),document.removeEventListener("mouseup",this.dragEndHandler)}UNSAFE_componentWillReceiveProps(e){e.lockCursorTo!==this.props.lockCursorTo&&this.s.dragHappened&&(this.relinquishCursorLock(),this.relinquishCursorLock=Nu,e.lockCursorTo&&(this.relinquishCursorLock=Bu(e.lockCursorTo)))}getDistances(e){const{startPos:t}=this.s;return[e.screenX-t.x,e.screenY-t.y]}getMovements(e){return[e.movementX,e.movementY]}componentWillUnmount(){"notDragging"!==this.mode&&(this.relinquishCursorLock(),this.relinquishCursorLock=Nu,this.removeDragListeners(),this.props.onDragEnd&&this.props.onDragEnd("dragging"===this.mode),this.mode="notDragging")}},Uu=Du.default.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  &:after {
    position: absolute;
    inset: 1px 0 2px;
    display: block;
    content: ' ';
    background-color: transparent;
    border: 1px solid transparent;
    z-index: -2;
    box-sizing: border-box;
    border-radius: 1px;
  }

  &:hover,
  &.dragging,
  &.editingViaKeyboard {
    &:after {
      background-color: #10101042;
      border-color: #00000059;
    }
  }
`,Hu=Du.default.input`
  background: transparent;
  border: 1px solid transparent;
  color: rgba(255, 255, 255, 0.9);
  padding: 1px 6px;
  font: inherit;
  outline: none;
  cursor: ew-resize;
  text-align: left;
  width: 100%;
  height: calc(100% - 4px);
  border-radius: 2px;

  &:focus {
    cursor: text;
  }
`,Vu=Du.default.div`
  position: absolute;
  inset: 3px 2px 4px;
  transform: scale(var(--percentage), 1);
  transform-origin: top left;
  background-color: #2d5561;
  z-index: -1;
  border-radius: 2px;
  pointer-events: none;

  ${Uu}.dragging &, ${Uu}.noFocus:hover & {
    background-color: #338198;
  }
`,Gu=e=>!0,Wu=e=>{var t;const[n,r]=(0,Lu.useState)({mode:"noFocus"}),i=null!=(t=e.isValid)?t:Gu,o=(0,Lu.useRef)({state:n,props:e});o.current={state:n,props:e};const a=(0,Lu.useRef)(null),s=(0,Lu.useRef)(null),l=(0,Lu.useMemo)((()=>{const t=()=>{const e=o.current.state,t=parseFloat(e.currentEditedValueInString);isFinite(t)&&i(t)?e.valueBeforeEditing===t?o.current.props.discardTemporaryValue():o.current.props.permenantlySetValue(t):o.current.props.discardTemporaryValue()};let n;return{inputChange:e=>{const t=e.target,{value:n}=t,a=o.current.state;r(b(y({},a),{currentEditedValueInString:n}));const s=parseFloat(n);isFinite(s)&&i(s)&&o.current.props.temporarilySetValue(s)},onBlur:()=>{"editingViaKeyboard"===o.current.state.mode&&(t(),r({mode:"noFocus"})),e.onBlur&&e.onBlur()},transitionToDraggingMode:()=>{var e;const t=o.current.props.value;n=null==(e=a.current)?void 0:e.getBoundingClientRect().width,r({mode:"dragging",valueBeforeDragging:t,currentDraggingValue:t}),s.current=document.body.style.cursor},onInputKeyDown:e=>{"Escape"===e.key?(o.current.props.discardTemporaryValue(),a.current.blur()):"Enter"!==e.key&&"Tab"!==e.key||(t(),a.current.blur())},onClick:e=>{"noFocus"===o.current.state.mode?(a.current.focus(),e.preventDefault(),e.stopPropagation()):e.stopPropagation()},onFocus:()=>{"noFocus"===o.current.state.mode?(()=>{const e=o.current.props.value;r({mode:"editingViaKeyboard",currentEditedValueInString:String(e),valueBeforeEditing:e}),setTimeout((()=>{a.current.focus(),a.current.setSelectionRange(0,100)}))})():o.current.state.mode},onDragEnd:e=>{if(e){const e=o.current.state,t=e.currentDraggingValue;e.valueBeforeDragging===t?o.current.props.discardTemporaryValue():o.current.props.permenantlySetValue(t),r({mode:"noFocus"})}else o.current.props.discardTemporaryValue(),r({mode:"noFocus"}),a.current.focus(),a.current.setSelectionRange(0,100)},onDrag:(t,i)=>{const a=o.current.state;let s=a.valueBeforeDragging+e.nudge({deltaX:t,deltaFraction:t/n,magnitude:1});e.range&&(s=rr(s,e.range[0],e.range[1])),r(b(y({},a),{currentDraggingValue:s})),o.current.props.temporarilySetValue(s)}}}),[o,r,a]);let c="editingViaKeyboard"!==n.mode?(u=e.value,isNaN(u)?"NaN":function(e){return"number"==typeof e&&e==dt(e)}(u)?u.toFixed(0):Mi(u,3).toString()):n.currentEditedValueInString;var u;"number"==typeof c&&isNaN(c)&&(c="NaN");const d=[a];e.inputRef&&d.push(e.inputRef);const h=Lu.default.createElement(Hu,{key:"input",type:"text",onChange:l.inputChange,value:c,onBlur:l.onBlur,onKeyDown:l.onInputKeyDown,onClick:l.onClick,onFocus:l.onFocus,ref:Bl(d),onMouseDown:e=>{e.stopPropagation()},onDoubleClick:e=>{e.preventDefault(),e.stopPropagation()}}),{range:p}=e,f=parseFloat(c),m=p?Lu.default.createElement(Vu,{style:{"--percentage":rr((f-p[0])/(p[1]-p[0]),0,1)}}):null;return Lu.default.createElement(Uu,{className:e.className+" "+o.current.state.mode},Lu.default.createElement(Fu,{key:"draggableArea",onDragStart:l.transitionToDraggingMode,onDragEnd:l.onDragEnd,onDrag:l.onDrag,enabled:"editingViaKeyboard"!==o.current.state.mode,lockCursorTo:"ew-resize"},h),m)},qu=S(n(294)),$u=S(n(294)),Xu=S(n(294)),Ku=S(n(804)),Yu=Ku.default.form`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  vertical-align: middle;
  justify-content: stretch;
  height: 24px;
  width: 100%;
`,Zu=Ku.default.label`
  padding: 0 0.5em;
  background: transparent;
  /* background: #373748; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  color: #a7a7a7;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-right-width: 0px;

  & + &:last-child {
    border-right-width: 1px;
  }

  ${Yu}:hover > & {
    border-color: #1c2123;
    /* background-color: #373748; */
    /* color: ${Do(.1,"white")}; */
  }

  &&:hover {
    background-color: #464654;
  }

  &&[data-checked='true'] {
    color: white;
    background: #3f3f4c;
  }
`,Ju=Ku.default.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  width: 0;
  height: 0;
`,Qu=({value:e,onChange:t,options:n})=>{const r=(0,Xu.useCallback)((e=>{t(String(e.target.value))}),[t]);return Xu.default.createElement(Yu,{role:"radiogroup"},Object.keys(n).map(((t,i)=>Xu.default.createElement(Zu,{key:"label-"+i,"data-checked":e===t},n[t],Xu.default.createElement(Ju,{type:"radio",checked:e===t,value:t,onChange:r,name:"switchbox"})))))},ed=S(n(294)),td=S(n(804)),nd=td.default.div`
  width: 100%;
  position: relative;
`,rd=td.default.div`
  position: absolute;
  right: 0px;
  top: 0;
  bottom: 0;
  width: 1.5em;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #6b7280;
  pointer-events: none;
`,id=td.default.select`
  background-color: transparent;
  box-sizing: border-box;
  border: 1px solid transparent;
  color: rgba(255, 255, 255, 0.85);
  padding: 1px 6px;
  font: inherit;
  outline: none;
  text-align: left;
  width: 100%;
  height: calc(100% - 4px);
  border-radius: 2px;

  color-adjust: exact;
  appearance: none;

  &:hover,
  &:focus {
    background-color: #10101042;
    border-color: #00000059;
  }
`,od=({value:e,onChange:t,options:n,className:r})=>{const i=(0,ed.useCallback)((e=>{t(String(e.target.value))}),[t]);return ed.default.createElement(nd,null,ed.default.createElement(id,{className:r,value:e,onChange:i},Object.keys(n).map(((e,t)=>ed.default.createElement("option",{key:"option-"+t,value:e},n[e])))),ed.default.createElement(rd,null,ed.default.createElement(ma,null)))},ad=S(n(294)),sd=S(n(804)),ld=S(n(294)),cd=sd.default.input.attrs({type:"text"})`
  background: transparent;
  border: 1px solid transparent;
  color: rgba(255, 255, 255, 0.9);
  padding: 1px 6px;
  font: inherit;
  outline: none;
  cursor: text;
  text-align: left;
  width: 100%;
  height: calc(100% - 4px);
  border-radius: 2px;
  border: 1px solid transparent;
  box-sizing: border-box;

  &:hover {
    background-color: #10101042;
    border-color: #00000059;
  }

  &:hover,
  &:focus {
    cursor: text;
    background-color: #10101042;
    border-color: #00000059;
  }
`,ud=e=>!0,dd=e=>{var t;const[n,r]=(0,ld.useState)({mode:"noFocus"}),i=null!=(t=e.isValid)?t:ud,o=(0,ld.useRef)({state:n,props:e});o.current={state:n,props:e};const a=(0,ld.useRef)(null),s=(0,ld.useMemo)((()=>{const t=()=>{const e=o.current.state,t=e.currentEditedValueInString;i(t)?e.valueBeforeEditing===t?o.current.props.discardTemporaryValue():o.current.props.permenantlySetValue(t):o.current.props.discardTemporaryValue()};return{inputChange:e=>{const t=e.target,{value:n}=t,a=o.current.state;r(b(y({},a),{currentEditedValueInString:n})),i(n)&&o.current.props.temporarilySetValue(n)},onBlur:()=>{"editingViaKeyboard"===o.current.state.mode&&(t(),r({mode:"noFocus"})),e.onBlur&&e.onBlur()},onInputKeyDown:e=>{"Escape"===e.key?(o.current.props.discardTemporaryValue(),a.current.blur()):"Enter"!==e.key&&"Tab"!==e.key||(t(),a.current.blur())},onClick:e=>{"noFocus"===o.current.state.mode?(a.current.focus(),e.preventDefault(),e.stopPropagation()):e.stopPropagation()},onFocus:()=>{"noFocus"===o.current.state.mode?(()=>{const e=o.current.props.value;r({mode:"editingViaKeyboard",currentEditedValueInString:String(e),valueBeforeEditing:e}),setTimeout((()=>{a.current.focus()}))})():o.current.state.mode}}}),[o,r,a]);let l="editingViaKeyboard"!==n.mode?e.value:n.currentEditedValueInString;const c=[a];return e.inputRef&&c.push(e.inputRef),ld.default.createElement(cd,{key:"input",type:"text",onChange:s.inputChange,value:l,onBlur:s.onBlur,onKeyDown:s.onInputKeyDown,onClick:s.onClick,onFocus:s.onFocus,ref:Bl(c),onMouseDown:e=>{e.stopPropagation()},onDoubleClick:e=>{e.preventDefault(),e.stopPropagation()}})},hd={compound:({pointerToProp:e,obj:t,propConfig:n,depth:r})=>{var i;const o=null!=(i=n.label)?i:li((0,Mu.getPointerParts)(e).path),a=Object.entries(n.props),s=a.filter((([e,t])=>Eu(t))),l=a.filter((([e,t])=>!Eu(t))),[c,u]=rs(null),d=s.length>0;return Tu.default.createElement(Cu,null,Tu.default.createElement(Au,{style:{"--depth":r-1}},Tu.default.createElement(ku,null,Tu.default.createElement(Rc,{hasStaticOverride:!1}),Tu.default.createElement(Ru,{ref:c},o||"Props"))),Tu.default.createElement(Ou,{style:{"--depth":r},depth:r,lastSubIsComposite:d},[...l,...s].map((([n,i])=>Tu.default.createElement(pd,{key:"prop-"+n,propConfig:i,pointerToProp:e[n],obj:t,depth:r+1})))))},number:({propConfig:e,pointerToProp:t,obj:n})=>{const r=Gc(t,n,e),i=(0,qu.useCallback)((t=>e.nudgeFn(b(y({},t),{config:e}))),[e]);return qu.default.createElement(xu,y({},{stuff:r,propConfig:e,pointerToProp:t}),qu.default.createElement(Wu,{value:r.value,temporarilySetValue:r.temporarilySetValue,discardTemporaryValue:r.discardTemporaryValue,permenantlySetValue:r.permenantlySetValue,range:e.range,nudge:i}))},string:({propConfig:e,pointerToProp:t,obj:n})=>{const r=Gc(t,n,e);return ad.default.createElement(xu,y({},{stuff:r,propConfig:e,pointerToProp:t}),ad.default.createElement(dd,{value:r.value,temporarilySetValue:r.temporarilySetValue,discardTemporaryValue:r.discardTemporaryValue,permenantlySetValue:r.permenantlySetValue}))},enum:()=>bc.default.createElement(bc.default.Fragment,null),boolean:({propConfig:e,pointerToProp:t,obj:n})=>{const r=Gc(t,n,e),i=(0,xc.useCallback)((e=>{r.permenantlySetValue(Boolean(e.target.checked))}),[e,t,n]);return xc.default.createElement(xu,y({},{stuff:r,propConfig:e,pointerToProp:t}),xc.default.createElement(Su,{checked:r.value,onChange:i}))},stringLiteral:({propConfig:e,pointerToProp:t,obj:n})=>{const r=Gc(t,n,e),i=(0,$u.useCallback)((e=>{r.permenantlySetValue(e)}),[e,t,n]);return $u.default.createElement(xu,y({},{stuff:r,propConfig:e,pointerToProp:t}),"menu"===e.as?$u.default.createElement(od,{value:r.value,onChange:i,options:e.options}):$u.default.createElement(Qu,{value:r.value,onChange:i,options:e.options}))}},pd=e=>{var t;const n=null!=(t=e.propConfig)?t:((e,t)=>{const n=t.template.config.props,r=(0,yc.getPointerParts)(e).path;let i=n;for(;0!==r.length;){const e=r.shift();if("string"!=typeof e)throw"number"==typeof e?new Error("Number indexes are not implemented yet. @todo"):new Error("getPropTypeConfigByPath() is called with an invalid path.");if("compound"===i.type){if(i=i.props[e],!i)throw new Error("getPropTypeConfigByPath() is called with an invalid path.")}else{if("enum"!==i.type)throw new Error("getPropTypeConfigByPath() is called with an invalid path.");if(i=i.cases[e],!i)throw new Error("getPropTypeConfigByPath() is called with an invalid path.")}}return i})(e.pointerToProp,e.obj),r=hd[n.type];return bc.default.createElement(r,{obj:e.obj,depth:e.depth,pointerToProp:e.pointerToProp,propConfig:n})},fd=({objects:e})=>{const t=e[0],n=(0,vc.useMemo)((()=>JSON.stringify(t.address)),[t]);return vc.default.createElement(pd,{key:n,obj:t,pointerToProp:t.propsP,propConfig:t.template.config,depth:1})},md=S(n(294)),gd=S(n(834));function vd(e,t){const[n,r]=(0,md.useState)({isOpen:!1}),i=(0,md.useCallback)(((e,t)=>{r({isOpen:!0,clickPoint:{clientX:e.clientX,clientY:e.clientY},target:t})}),[]),o=(0,md.useCallback)((()=>{r({isOpen:!1})}),[]),a=(0,md.useCallback)((()=>{!1!==e.closeOnClickOutside&&o()}),[e.closeOnClickOutside]),s=(0,md.useContext)(Nl),l=(0,md.useMemo)((()=>{var t;if(!1!==e.closeWhenPointerIsDistant)return{threshold:null!=(t=e.pointerDistanceThreshold)?t:100,callback:o}}),[e.closeWhenPointerIsDistant]);return[n.isOpen?(0,gd.createPortal)(md.default.createElement(xs,{children:t,target:n.target,onClickOutside:a,onPointerOutside:l}),s):md.default.createElement(md.default.Fragment,null),i,o,n.isOpen]}var yd=S(n(294)),bd=S(n(804)),xd=S(n(294)),_d=S(n(804));function wd(){return((e=21)=>{let t="",n=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let r=63&n[e];t+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t})(16)}var Sd=S(n(804)).default.button`
  text-align: center;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid #627b7b87;
  background-color: #4b787d3d;
  color: #eaeaea;
  font-weight: 400;
  display: block;
  appearance: none;
  flex-grow: 1;
  cursor: ${e=>e.disabled?"none":"pointer"};
  opacity: ${e=>e.disabled?.4:1};

  &:hover {
    background-color: #7dc1c878;
    border-color: #9ebcbf;
  }
`,Ed=_d.default.div`
  padding: 8px 10px;
  position: relative;
  background-color: #6d232352;
  &:before {
    position: absolute;
    content: ' ';
    display: block;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: #ff000070;
  }
`,Md=_d.default.div`
  margin-bottom: 1em;
  & a {
    color: inherit;
  }
`,Td=_d.default.div`
  display: flex;
  gap: 8px;
`,Pd=({projectId:e,loadingState:t})=>{const[n,r]=zl({},(()=>xd.default.createElement(tc,null,"The browser's state will override the disk state."))),[i,o]=zl({},(()=>xd.default.createElement(tc,null,"The disk's state will override the browser's state.")));return xd.default.createElement(Ed,null,xd.default.createElement(Md,null,"Browser state is not based on disk state."," ",xd.default.createElement("a",{href:"https://docs.theatrejs.com/in-depth/#exporting",target:"_blank"},"Learn more.")),xd.default.createElement(Td,null,n,xd.default.createElement(Sd,{onClick:()=>{ye().transaction((({drafts:n,stateEditors:r})=>{r.coreByProject.historic.revisionHistory.add({projectId:e,revision:t.onDiskState.revisionHistory[0]}),r.coreByProject.historic.revisionHistory.add({projectId:e,revision:wd()}),n.ephemeral.coreByProject[e].loadingState={type:"loaded"}}))},ref:r},"Use browser's state"),i,xd.default.createElement(Sd,{onClick:()=>{ye().transaction((({drafts:n})=>{n.historic.coreByProject[e]=t.onDiskState,n.ephemeral.coreByProject[e].loadingState={type:"loaded"}}))},ref:o},"Use disk state")))},Cd=({projectId:e})=>{const t=Di(ye().atomP.ephemeral.coreByProject[e].loadingState);return t&&"browserStateIsNotBasedOnDiskState"===t.type?xd.default.createElement(Pd,{loadingState:t,projectId:e}):null},Ad=bd.default.div`
  background-color: ${hu};
`,kd=bd.default.div`
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`,Rd=(0,bd.default)(ec)`
  width: 280px;
  padding: 1em;
`,Id=({projects:e})=>{const t=e[0],n=t.address.projectId,[r,i]=(0,yd.useState)(!1),o=(0,yd.useCallback)((()=>{const e=JSON.stringify(ye().createContentOfSaveFile(t.address.projectId),null,2),n=new File([e],"state.json",{type:"application/json"}),r=URL.createObjectURL(n),o=document.createElement("a");o.href=r,o.target="_blank",o.setAttribute("download","state.json"),o.rel="noopener",o.click(),i(!0),setTimeout((()=>{i(!1)}),2e3),setTimeout((()=>{URL.revokeObjectURL(r)}),4e4)}),[]),[a,s]=vd({pointerDistanceThreshold:50},(()=>yd.default.createElement(Rd,null,"This will create a JSON file with the state of your project. You can commit this file to your git repo and include it in your production bundle.",yd.default.createElement("a",{href:"https://docs.theatrejs.com/in-depth/#exporting",target:"_blank"},"Here is a quick guide on how to export to production."))));return yd.default.createElement(yd.default.Fragment,null,a,yd.default.createElement(Ad,null,yd.default.createElement(Cd,{projectId:n}),yd.default.createElement(kd,null,yd.default.createElement(Sd,{onMouseEnter:e=>s(e,e.target),onClick:r?void 0:o,disabled:r},r?"(Exported)":`Export ${n} to JSON`))))},Od=gc.default.div`
  background-color: transparent;
  pointer-events: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 12px;
  bottom: 0px;
  z-index: ${Wo.propsPanel};

  &:before {
    display: block;
    content: ' ';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 20px;
    ${Ho};
  }
`,Ld=gc.default.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 260px;
  bottom: 0;
  /* transform: translateX(100%); */
  /* pointer-events: none; */

  ${Od}:hover & {
    transform: translateX(0);
  }
`,Dd=gc.default.div`
  margin: 0 10px;
  color: #ffffffc2;
  font-weight: 500;
  font-size: 10px;
  user-select: none;
  ${Ho};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Nd="32px",jd=gc.default.div`
  height: ${Nd};
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  &:after {
    position: absolute;
    inset: 1px 0px;
    display: block;
    content: ' ';
    pointer-events: none;
    z-index: -1;
    background-color: #262c2dd1;
    /* border-radius: 2px 0 0 2px; */
  }
`,zd=gc.default.div`
  ${Ho};
  position: absolute;
  top: ${Nd};
  left: 0;
  right: 0;
  height: auto;
  max-height: calc(100% - ${Nd});
  overflow-y: scroll;
  padding: 0;
  user-select: none;
`,Bd=e=>Li((()=>{const e=ka(),t=e.find(Me);if(t)return mc.default.createElement(Od,null,mc.default.createElement(Ld,null,mc.default.createElement(jd,null,mc.default.createElement(Dd,{title:`${t.sheet.address.sheetId}: ${t.sheet.address.sheetInstanceId} > ${t.address.objectKey}`},mc.default.createElement($o,null,t.sheet.address.sheetId," "),mc.default.createElement(Xo,null,":"," "),mc.default.createElement($o,null,t.sheet.address.sheetInstanceId," "),mc.default.createElement(Xo,null," ",">"," "),mc.default.createElement($o,null,t.address.objectKey))),mc.default.createElement(zd,null,mc.default.createElement(fd,{objects:[t]}))));const n=e.find(we);return n?mc.default.createElement(Od,null,mc.default.createElement(Ld,null,mc.default.createElement(jd,null,mc.default.createElement(Dd,{title:`${n.address.projectId}`},mc.default.createElement($o,null,n.address.projectId," "))),mc.default.createElement(zd,null,mc.default.createElement(Id,{projects:[n]})))):mc.default.createElement(mc.default.Fragment,null)}),[]),Fd=S(n(294)),Ud=S(n(294)),Hd=S(n(804)),Vd=S(n(771)),Gd=S(n(294)),Wd=S(n(294)),qd=(e,t)=>{const n=e.left/t.width,r=(e.left+e.width)/t.width,i=e.top/t.height,o=(e.height+e.top)/t.height;return{edges:{left:n<=.5?{from:"screenLeft",distance:n}:{from:"screenRight",distance:1-n},right:r<=.5?{from:"screenLeft",distance:r}:{from:"screenRight",distance:1-r},top:i<=.5?{from:"screenTop",distance:i}:{from:"screenBottom",distance:1-i},bottom:o<=.5?{from:"screenTop",distance:o}:{from:"screenBottom",distance:1-o}}}},$d=Wd.default.createContext(null),Xd=()=>(0,Wd.useContext)($d),Kd=({panelId:e,children:t,defaultPosition:n,minDims:r})=>{const i=ms(800,200),[o,a]=function(){const[e,t]=(0,Gd.useState)(!1);return[e,(0,Gd.useMemo)((()=>{const e=new Set;return()=>{const n=()=>{e.delete(n),t(e.size>0)};return e.add(n),t(!0),n}}),[])]}(),{stuff:s}=Li((()=>{var t;const{edges:s}=null!=(t=(0,Vd.val)(ye().atomP.historic.panelPositions[e]))?t:n,l=Math.floor(i.width*("screenLeft"===s.left.from?s.left.distance:1-s.left.distance)),c=Math.floor(i.width*("screenLeft"===s.right.from?s.right.distance:1-s.right.distance)),u=Math.floor(i.height*("screenTop"===s.top.from?s.top.distance:1-s.top.distance)),d=Math.floor(i.height*("screenTop"===s.bottom.from?s.bottom.distance:1-s.bottom.distance));return{stuff:{dims:{width:Math.max(c-l,r.width),left:l,top:u,height:Math.max(d-u,r.height)},panelId:e,minDims:r,boundsHighlighted:o,addBoundsHighlightLock:a}}}),[e,i,o,a]);return Wd.default.createElement($d.Provider,{value:s},t)},Yd=S(n(294)),Zd=S(n(294)),Jd=S(n(804)),Qd=Jd.default.div`
  pointer-events: auto;
  &.normal {
    pointer-events: none;
  }
`,eh=Jd.default.div`
  position: absolute;
  inset: 0;
  pointer-events: none;

  #pointer-root:not(.normal) > & {
    pointer-events: auto;
  }
`,th=(0,Zd.createContext)({}),nh=(e,t,n)=>{const r=(0,Zd.useContext)(th);(0,Zd.useLayoutEffect)((()=>{if(e)return r.getLock(t,n)}),[e,t,n])};function rh(e,t){const n=(0,Yd.useRef)(t);n.current=t;const[r,i]=rs("notDragging");nh("dragging"===i&&"string"==typeof t.lockCursorTo,"dragging",t.lockCursorTo);const o=(0,Yd.useRef)({dragHappened:!1,startPos:{x:0,y:0}});return(0,Yd.useLayoutEffect)((()=>{if(!e)return;const t=e=>{o.current.dragHappened||(o.current.dragHappened=!0),r.current="dragging";const t=(e=>{const{startPos:t}=o.current;return[e.screenX-t.x,e.screenY-t.y]})(e);n.current.onDrag(t[0],t[1],e)},i=()=>{a(),r.current="notDragging",n.current.onDragEnd&&n.current.onDragEnd(o.current.dragHappened)},a=()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",i)},s=e=>{n.current.disabled||o.current.dragHappened&&(n.current.dontBlockMouseDown||"notDragging"===r.current||(e.stopPropagation(),e.preventDefault()),o.current.dragHappened=!1)},l=e=>{(e=>{const a=n.current;if(!0===a.disabled)return;if(0!==e.button)return;if(!1===(a.onDragStart&&a.onDragStart(e)))return;a.dontBlockMouseDown||(e.stopPropagation(),e.preventDefault()),r.current="dragStartCalled";const{screenX:s,screenY:l}=e;o.current.startPos={x:s,y:l},o.current.dragHappened=!1,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)})(e)};return e.addEventListener("mousedown",l),e.addEventListener("click",s),()=>{a(),e.removeEventListener("mousedown",l),e.removeEventListener("click",s),"notDragging"!==r.current&&n.current.onDragEnd&&n.current.onDragEnd("dragging"===r.current),r.current="notDragging"}}),[e]),["dragging"===i]}var ih=S(n(294)),oh=S(n(804)).default.div`
  cursor: move;
`,ah=e=>{const t=Xd(),n=(0,ih.useRef)(t);n.current=t;const[r,i]=rs(null);rh(i,(0,ih.useMemo)((()=>{let e,r,i=n.current;return{lockCursorTo:"move",onDragStart(){if(i=n.current,r){const e=r;r=void 0,e()}r=t.addBoundsHighlightLock()},onDrag(t,n){const r=b(y({},i.dims),{top:i.dims.top+n,left:i.dims.left+t}),o=qd(r,{width:window.innerWidth,height:window.innerHeight});null==e||e.discard(),e=ye().tempTransaction((({stateEditors:e})=>{e.studio.historic.panelPositions.setPanelPosition({position:o,panelId:i.panelId})}))},onDragEnd(t){if(r){const e=r;r=void 0,e()}t?null==e||e.commit():null==e||e.discard(),e=void 0}}}),[]));const[o,a]=(0,ih.useMemo)((()=>{let e;return[function(){if(e){const t=e;e=void 0,t()}e=t.addBoundsHighlightLock()},function(){if(e){const t=e;e=void 0,t()}}]}),[]);return ih.default.createElement(oh,b(y({},e),{ref:r,onMouseEnter:o,onMouseLeave:a}))},sh=S(n(294)),lh=S(n(804)),ch=S(n(294)),uh=S(n(804)),dh=S(n(294)),hh=S(n(804)),ph=hh.default.div`
  position: absolute;
  z-index: 10;
  ${Ho};
  &:after {
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    display: block;
    content: ' ';
  }

  opacity: 0;
  background-color: #478698;

  &.isHighlighted {
    opacity: 0.7;
  }

  &.isDragging {
    opacity: 1;
    /* background-color: ${jo(.2,"#478698")}; */
  }

  &:hover {
    opacity: 1;
  }
`,fh=(0,hh.default)(ph)`
  left: 0;
  right: 0;
  height: 1px;
`,mh=(0,hh.default)(fh)`
  top: 0;
`,gh=(0,hh.default)(fh)`
  bottom: 0;
`,vh=(0,hh.default)(ph)`
  top: 0;
  bottom: 0;
  width: 1px;
`,yh=(0,hh.default)(vh)`
  left: 0;
`,bh=(0,hh.default)(vh)`
  right: 0;
`,xh=(0,hh.default)(ph)`
  width: 8px;
  height: 8px;
`,_h={Top:mh,TopLeft:(0,hh.default)(xh)`
  top: 0;
  left: 0;
`,TopRight:(0,hh.default)(xh)`
  top: 0;
  right: 0;
`,Bottom:gh,BottomLeft:(0,hh.default)(xh)`
  bottom: 0;
  left: 0;
`,BottomRight:(0,hh.default)(xh)`
  bottom: 0;
  right: 0;
`,Left:yh,Right:bh},wh={Top:"ns-resize",Bottom:"ns-resize",Left:"ew-resize",Right:"ew-resize",TopLeft:"nw-resize",TopRight:"ne-resize",BottomLeft:"sw-resize",BottomRight:"se-resize"},Sh=({which:e})=>{const t=Xd(),n=(0,dh.useRef)(t);n.current=t;const[r,i]=(0,dh.useState)(!1),[o,a]=rs(null);rh(a,(0,dh.useMemo)((()=>{let r,o,a=n.current;return{lockCursorTo:wh[e],onDragStart(){if(a=n.current,i(!0),o){const e=o;o=void 0,e()}o=t.addBoundsHighlightLock()},onDrag(t,n){const i=y({},a.dims);if(e.startsWith("Bottom"))i.height=Math.max(i.height+n,a.minDims.height);else if(e.startsWith("Top")){const e=i.top+i.height,t=Math.min(e-a.minDims.height,i.top+n),r=e-t;i.height=r,i.top=t}if(e.endsWith("Left")){const e=i.left+i.width,n=Math.min(e-a.minDims.width,i.left+t),r=e-n;i.width=r,i.left=n}else e.endsWith("Right")&&(i.width=Math.max(i.width+t,a.minDims.width));const o=qd(i,{width:window.innerWidth,height:window.innerHeight});null==r||r.discard(),r=ye().tempTransaction((({stateEditors:e})=>{e.studio.historic.panelPositions.setPanelPosition({position:o,panelId:a.panelId})}))},onDragEnd(e){if(o){const e=o;o=void 0,e()}i(!1),e?null==r||r.commit():null==r||r.discard(),r=void 0}}}),[e]));const s=_h[e],l=e.length<=6;return dh.default.createElement(s,{ref:o,className:[r?"isDragging":"",t.boundsHighlighted&&l?"isHighlighted":""].join(" "),style:{cursor:wh[e]}})},Eh=(uh.default.div``,e=>ch.default.createElement(ch.default.Fragment,null,ch.default.createElement(Sh,{which:"Bottom"}),ch.default.createElement(Sh,{which:"Top"}),ch.default.createElement(Sh,{which:"Left"}),ch.default.createElement(Sh,{which:"Right"}),ch.default.createElement(Sh,{which:"TopLeft"}),ch.default.createElement(Sh,{which:"TopRight"}),ch.default.createElement(Sh,{which:"BottomLeft"}),ch.default.createElement(Sh,{which:"BottomRight"}))),Mh=lh.default.div`
  position: absolute;
  user-select: none;
  box-sizing: border-box;
  ${Ho};
  /* box-shadow: 1px 2px 10px -5px black; */

  z-index: 1000;
`,Th=sh.default.forwardRef(((e,t)=>{const n=Xd(),r=e,{style:i,children:o}=r,a=_(r,["style","children"]);return sh.default.createElement(Mh,b(y({ref:t},a),{style:y({width:n.dims.width+"px",height:n.dims.height+"px",top:n.dims.top+"px",left:n.dims.left+"px"},null!=i?i:{})}),sh.default.createElement(Eh,null),o)})),Ph=S(j()),Ch={edges:{left:{from:"screenLeft",distance:.3},right:{from:"screenRight",distance:.3},top:{from:"screenTop",distance:.3},bottom:{from:"screenBottom",distance:.3}}},Ah={width:300,height:300},kh=(0,Hd.default)(Th)`
  overflow-y: hidden;
  display: flex;
  flex-direction: column;

  box-shadow: 0px 5px 12px -4px rgb(0 0 0 / 22%);
  z-index: ${Wo.pluginPanes};
`,Rh=Hd.default.div`
  width: 100%;
`,Ih=Hd.default.div`
  display: flex;
  align-items: center;
  opacity: 1;
  position: absolute;
  right: 4px;
  top: 0;
  bottom: 0;
`,Oh=Hd.default.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  font-size: 11px;
  height: 10px;
  width: 18px;
  color: #adadadb3;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: white;
  }
`,Lh=(0,Hd.default)(Ko)`
  position: relative;
  overflow: hidden;

  &:after {
    z-index: 10;
    position: absolute;
    inset: 0;
    display: block;
    content: ' ';
    pointer-events: none;

    #pointer-root:not(.normal) & {
      pointer-events: auto;
    }
  }
`,Dh=Hd.default.div`
  padding: 12px;

  & > pre {
    border: 1px solid #ff62624f;
    background-color: rgb(255 0 0 / 5%);
    margin: 8px 0;
    padding: 8px;
    font-family: monospace;
    overflow: scroll;
    color: #ff9896;
  }
`,Nh=e=>Ud.default.createElement(Dh,null,"An Error occured rendering this pane. Open the console for more info.",Ud.default.createElement("pre",null,JSON.stringify({message:e.error.message,stack:e.error.stack},null,2))),jh=({paneInstance:e})=>{const t=e.definition.component,n=(0,Ud.useCallback)((()=>{ye().paneManager.destroyPane(e.instanceId)}),[e]);return Ud.default.createElement(kh,null,Ud.default.createElement(ah,null,Ud.default.createElement(Yo,null,Ud.default.createElement(Ih,null,Ud.default.createElement(Oh,{onClick:n,title:"Close Pane"},Ud.default.createElement(ua,null))),Ud.default.createElement(Rh,null,e.instanceId))),Ud.default.createElement(Lh,null,Ud.default.createElement(Ph.ErrorBoundary,{FallbackComponent:Nh},Ud.default.createElement(t,{paneId:e.instanceId}))))},zh=({paneInstance:e})=>Ud.default.createElement(Kd,{panelId:`pane-${e.instanceId}`,defaultPosition:Ch,minDims:Ah},Ud.default.createElement(jh,{paneInstance:e})),Bh=S(n(771)),Fh=(e,t)=>{const n=Bh.prism.memo(e,(()=>new Bh.Atom(t)),[]);return n.setState(t),n},Uh=S(n(771)),Hh=S(n(294)),Vh=S(n(804)),Gh=S(n(294)),Wh=S(n(804)),qh=S(n(771)),$h=S(n(294)),Xh=S(n(804)),Kh=S(n(294)),Yh=S(n(804)),Zh=S(n(294)),Jh=S(n(804)),Qh=S(n(294)),ep=S(n(804)),tp=ep.default.li`
  --depth: ${e=>e.depth};
  margin: 0;
  padding: 0;
  list-style: none;
`,np=ep.default.div`
  border-bottom: 1px solid #7695b705;
`,rp=(0,ep.default)(np)`
  padding-left: calc(16px + var(--depth) * 20px);

  display: flex;
  align-items: stretch;
  color: ${Vo.panel.body.compoudThing.label.color};

  box-sizing: border-box;

  ${e=>e.isSelected&&"background: blue"};
`,ip=ep.default.span`
  ${fu};
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 4px;
  line-height: 26px;
  flex-wrap: nowrap;
`,op=ep.default.span`
  width: 12px;
  margin-right: 8px;
  font-size: 9px;
  display: flex;
  align-items: center;

  transform: rotateZ(${e=>e.isOpen?90:0}deg);
`,ap=ep.default.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`,sp=({leaf:e,label:t,children:n,isSelectable:r,isSelected:i,toggleSelect:o})=>{const a=Array.isArray(n)&&n.length>0;return Qh.default.createElement(tp,{depth:e.depth},Qh.default.createElement(rp,{style:{height:e.nodeHeight+"px"},isSelectable:!0===r,isSelected:!0===i,onClick:o,isEven:e.n%2==0},Qh.default.createElement(op,{isOpen:!0},Qh.default.createElement(fa,null)),Qh.default.createElement(ip,null,t)),a&&Qh.default.createElement(ap,null,n))},lp=S(n(294)),cp=S(n(804)),up=e=>JSON.stringify(e),dp=S(n(771)),hp=S(n(294)),pp=S(n(804)),fp=S(n(771)),mp=S(n(294)),gp=S(n(804)),vp=S(n(771)),yp=S(n(294)),bp=S(n(804)),xp=S(n(294)),_p=S(n(294));var wp=S(n(771)),Sp=S(n(294)),Ep=S(n(771));function Mp(e,t,n){const r=(0,Ep.getPointerParts)(t((0,Ep.pointer)({root:{},path:[]}))).path;Ti(e,r,n)}var Tp,Pp=S(n(771)),Cp=S(n(294)),Ap=S(n(804)),kp=Ap.default.div`
  cursor: ${e=>e.isShiftDown?"cell":"default"};
`;!function(e){const t={primitiveProp(e,t,n,r){const{sheetObject:i,trackId:o}=t,a=(0,Pp.val)(ye().atomP.historic.coreByProject[i.address.projectId].sheetsById[i.address.sheetId].sequence.tracksByObject[i.address.objectKey].trackData[o]);a.keyframes.filter((e=>e.position>=n.positions[0]&&e.position<=n.positions[1]));for(const e of a.keyframes)if(!(e.position<=n.positions[0])){if(e.position>=n.positions[1])break;Mp(r,(t=>t.byObjectKey[i.address.objectKey].byTrackId[o].byKeyframeId[e.id]),!0)}}};function n(e,r,i,o){if(i.ys[0]>r.top+r.heightIncludingChildren||r.top>i.ys[1])return;const a=t[r.type];a?a(e,r,i,o):((e,t,r,i)=>{if("children"in t)for(const o of t.children)n(e,o,r,i)})(e,r,i,o)}e.boundsToSelection=function(e,t){const r=(0,Pp.val)(e.tree.sheet),i={type:"DopeSheetSelection",byObjectKey:{},getDragHandlers(t){let n,o;return{onDragStart(){o=(0,Pp.val)(e.scaledSpace.toUnitSpace)},onDrag(e,a,s){let l=o(e);n&&(n.discard(),n=void 0);const c=s.composedPath().find((e=>e instanceof Element&&e!==t.domNode&&e.hasAttribute("data-pos")));if(c){const e=parseFloat(c.getAttribute("data-pos"));isFinite(e)&&(l=e-t.positionAtStartOfDrag)}n=ye().tempTransaction((({stateEditors:e})=>{const n=e.coreByProject.historic.sheetsById.sequence.transformKeyframes;for(const e of Object.keys(i.byObjectKey)){const{byTrackId:o}=i.byObjectKey[e];for(const i of Object.keys(o)){const{byKeyframeId:a}=o[i];n({trackId:i,keyframeIds:Object.keys(a),translate:l,scale:1,origin:0,snappingFunction:r.getSequence().closestGridPosition,objectKey:e,projectId:t.projectId,sheetId:t.sheetId})}}}))},onDragEnd(e){e?n&&n.commit():n&&n.discard(),n=void 0}}},delete(){ye().transaction((({stateEditors:e})=>{const t=e.coreByProject.historic.sheetsById.sequence.deleteKeyframes;for(const e of Object.keys(i.byObjectKey)){const{byTrackId:n}=i.byObjectKey[e];for(const i of Object.keys(n)){const{byKeyframeId:o}=n[i];t(b(y({},r.address),{objectKey:e,trackId:i,keyframeIds:Object.keys(o)}))}}}))}};t=Ip(t);const o=(0,Pp.val)(e.tree);return n(e,o,t,i),i}}(Tp||(Tp={}));var Rp=Ap.default.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border: 1px dashed rgba(255, 255, 255, 0.4);
  box-size: border-box;
`,Ip=e=>({positions:[...e.positions].sort(((e,t)=>e-t)),ys:[...e.ys].sort(((e,t)=>e-t))}),Op=({state:e,layoutP:t})=>{const n=function(e){const t=(0,Sp.useMemo)((()=>new wp.Atom(e)),[]);return(0,Sp.useLayoutEffect)((()=>{t.setState(e)}),[e]),t}(e);return Li((()=>{const e=(0,Pp.val)(n.pointer),r=Ip(e),i=(0,Pp.val)(t.scaledSpace.fromUnitSpace),o=r.positions.map(i),a=r.ys[0],s=r.ys[1]-r.ys[0],l=o[0],c=o[1]-o[0];return Cp.default.createElement(Rp,{style:{top:a+"px",height:s+"px",left:l+"px",width:c+"px"}})}),[t,n])},Lp=({layoutP:e,children:t})=>{const[n,r]=rs(null),i=function(e){const[t,n]=(0,xp.useState)(!1);return function(e,t){const n=(0,_p.useRef)({combo:e,listener:t});n.current={combo:e,listener:t},(0,_p.useEffect)((()=>{function e(e){e.key===n.current.combo&&n.current.listener({down:!0,event:e})}function t(e){e.key===n.current.combo&&n.current.listener({down:!1,event:e})}function r(e){n.current.listener({down:!1,event:void 0})}return document.addEventListener("keydown",e),document.addEventListener("keyup",t),window.addEventListener("blur",r),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",t),window.removeEventListener("blur",r)}}),[])}(e,(({down:e})=>{n(e)})),t}("Shift"),o=function(e,t){const[n,r]=rs(null);return rh(t,(0,Cp.useMemo)((()=>({dontBlockMouseDown:!0,lockCursorTo:"cell",onDragStart(r){if(!r.shiftKey||r.target instanceof HTMLInputElement)return!1;const i=t.getBoundingClientRect(),o=r.clientX-i.left,a=(0,Pp.val)(e.scaledSpace.toUnitSpace)(o);n.current={positions:[a,a],ys:[r.clientY-i.top,r.clientY-i.top]},(0,Pp.val)(e.selectionAtom).setState({current:void 0})},onDrag(r,i,o){n.current;const a=t.getBoundingClientRect(),s=o.clientX-a.left,l=(0,Pp.val)(e.scaledSpace.toUnitSpace)(s);n.current={positions:[n.current.positions[0],l],ys:[n.current.ys[0],o.clientY-a.top]};const c=Tp.boundsToSelection(e,n.current);(0,Pp.val)(e.selectionAtom).setState({current:c})},onDragEnd(e){n.current=null}})),[e,t,n])),r}(e,r);return(0,Cp.useRef)(o).current=o,Cp.default.createElement(kp,{ref:n,isShiftDown:i},o&&Cp.default.createElement(Op,{state:o,layoutP:e}),t)},Dp=S(n(771)),Np=S(n(294)),jp=S(n(804)),zp=S(n(294)),Bp=S(n(804)).default.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: ${()=>kv.scrollableArea};

  &::-webkit-scrollbar {
    display: none;
  }
`,Fp=(0,zp.createContext)(Nu),Up=e=>{const t=(0,zp.useRef)(null),n=(0,zp.useCallback)((e=>{}),[]);return zp.default.createElement(Fp.Provider,{value:n},zp.default.createElement(Bp,{ref:t},e.children))},Hp=jp.default.div`
  position: absolute;

  right: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  ${Ho};

  // hide the scrollbar on Gecko
  scrollbar-width: none;

  // hide the scrollbar on Webkit/Blink
  &::-webkit-scrollbar {
    display: none;
  }
`,Vp=jp.default.div`
  position: absolute;
`,Gp=Np.default.memo((({layoutP:e,children:t,height:n})=>{const{width:r,unitSpaceToScaledSpaceMultiplier:i}=Li((()=>({width:(0,Dp.val)(e.rightDims.width),unitSpaceToScaledSpaceMultiplier:(0,Dp.val)(e.scaledSpace.fromUnitSpace)(1)})),[e]),[o,a]=rs(null);return function(e,t){(0,zp.useContext)(Fp),(0,Np.useLayoutEffect)((()=>{if(!t)return;const n=n=>{if(Math.abs(n.deltaY)<Math.abs(n.deltaX)){n.preventDefault(),n.stopPropagation();const t=(0,Dp.val)(e.scaledSpace.toUnitSpace)(1*n.deltaX),r=(0,Dp.val)(e.clippedSpace.range),i=yi(r,(e=>e+t));(0,Dp.val)(e.clippedSpace.setRange)(i)}else{if(n.ctrlKey){n.preventDefault(),n.stopPropagation();const i=n.clientX-t.getBoundingClientRect().left,o=(0,Dp.val)(e.clippedSpace.toUnitSpace)(i),a=(0,Dp.val)(e.clippedSpace.range),s=1+.03*Wp(n.deltaY,[-50,50]),l=yi(a,(e=>(e-o)*s+o)),c=(0,Dp.val)(e.sheet).getSequence().length,u=c+.25*c;(0,Dp.val)(e.clippedSpace.setRange)((r=[0,u],yi(l,(e=>Wp(e,r)))))}else if(n.shiftKey){n.preventDefault(),n.stopPropagation();const t=(0,Dp.val)(e.sheet).getSequence().length,r=(0,Dp.val)(e.clippedSpace.range),i=(r.end-r.start)/t,o=.05*Wp(n.deltaY,[-50,50])*i,a=yi(r,(e=>e+o));(0,Dp.val)(e.clippedSpace.setRange)(a)}var r}},r={capture:!0,passive:!1};return t.addEventListener("wheel",n,r),()=>{t.removeEventListener("wheel",n,r)}}),[t,e])}(e,a),function(e,t){const n=(0,Np.useMemo)((()=>{let n,r,i=0;const o=(0,Dp.val)(e.seeker.setIsSeeking);return{onDrag(e,t,o){const a=r(e);let s=rr(i+a,0,n.length);const l=o.composedPath().find((e=>e instanceof Element&&e.hasAttribute("data-pos")));if(l){const e=parseFloat(l.getAttribute("data-pos"));isFinite(e)&&(s=e)}n.position=s},onDragStart(a){if(a.target instanceof HTMLInputElement)return!1;if(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey)return!1;if(a.composedPath().some((e=>e instanceof HTMLElement&&!0===e.draggable)))return!1;const s=a.clientX-t.getBoundingClientRect().left,l=rr((0,Dp.val)(e.clippedSpace.toUnitSpace)(s),0,1/0);n=(0,Dp.val)(e.sheet).getSequence(),n.position=l,i=l,r=(0,Dp.val)(e.scaledSpace.toUnitSpace),o(!0)},onDragEnd(){o(!1)}}}),[e,t]),[r]=rh(t,n);nh(r,"draggingPositionInSequenceEditor","ew-resize")}(e,a),function(e,t){(0,Np.useLayoutEffect)((()=>{if(!t)return;const n=(0,Dp.prism)((()=>{const t=(0,Dp.val)(e.clippedSpace.range);return(0,Dp.val)(e.scaledSpace.fromUnitSpace)(t.start)})),r=()=>{const e=n.getValue();t.scrollLeft=e},i=n.changesWithoutValues().tap(r);r();const o=setTimeout(r,100);return()=>{clearTimeout(o),i()}}),[e,t])}(e,a),Np.default.createElement(Hp,{ref:o,style:{width:r+"px",height:n+"px","--unitSpaceToScaledSpaceMultiplier":i}},Np.default.createElement(Vp,{style:{left:(0,Dp.val)(e.scaledSpace.leftPadding)+"px"}},t))}));function Wp(e,[t,n]){return Math.max(Math.min(e,n),t)}var qp,$p,Xp=S(n(294)),Kp=S(n(804)),Yp=S(n(294)),Zp=S(n(804)),Jp=S(n(294)),Qp=S(n(804)),ef=S(n(771)),tf=S(n(294)),nf=S(n(771)),rf=S(n(294)),of=S(n(804)),af=S(n(294)),sf=S(n(804)),lf=S(n(771)),cf=S(n(294)),uf=S(n(294)),df=S(n(804)),hf=S(n(771)),pf=S(n(294)),ff=S(n(804)),mf=S(n(771)),gf=S(n(771)),vf=(0,gf.prism)((()=>{const[e,t]=gf.prism.state("pos",null);return gf.prism.effect("setupListeners",(()=>{const e=e=>{t(e)};return document.addEventListener("mousemove",e),()=>{document.removeEventListener("mousemove",e)}}),[]),e})),yf=S(n(294));($p=qp||(qp={}))[$p.hidden=0]="hidden",$p[$p.locked=1]="locked",$p[$p.snapped=2]="snapped",$p[$p.free=3]="free";var bf=(0,yf.createContext)(null),xf=0,_f=(e,t)=>{const{getLock:n}=(0,yf.useContext)(bf),r=(0,yf.useRef)();(0,yf.useLayoutEffect)((()=>{if(e)return r.current=n(),()=>{r.current.unlock()}}),[e]),(0,yf.useLayoutEffect)((()=>{e&&r.current.set(t)}),[t])},wf="data-theatre-lock-framestamp-to",Sf=({children:e,layoutP:t})=>{const n=(0,yf.useMemo)((()=>new mf.Atom({list:[]})),[]),r={currentD:(0,yf.useMemo)((()=>(0,mf.prism)((()=>{const e=mf.prism.memo("p",(()=>(e=>(0,mf.prism)((()=>{const t=(0,mf.val)(e.rightDims),n=(0,mf.val)(e.clippedSpace.toUnitSpace),r=((0,mf.val)(e.scaledSpace.leftPadding),(0,mf.val)(vf));if(!r)return[-1,0];for(const e of r.composedPath()){if(!(e instanceof HTMLElement||e instanceof SVGElement))break;if(e.hasAttribute(wf)){const t=e.getAttribute(wf);if("string"!=typeof t)continue;if("hide"===t)return[-1,0];const n=parseFloat(t);if(isFinite(n)&&n>=0)return[n,2]}}const{clientX:i,clientY:o}=r,{screenX:a,screenY:s,width:l,height:c}=t;return mi(i,a,a+l)&&mi(o,s,s+c)?[n(i-a),3]:[-1,0]})))(t)),[t]).getValue(),r=(0,mf.val)(n.pointer.list);return r.length>0?li(r).position:e}))),[t]),getLock:(0,yf.useCallback)((()=>{const e=xf++;return n.reduceState(["list"],(t=>[...t,{id:e,position:[-1,0]}])),{set:t=>{n.reduceState(["list"],(n=>{const r=n.findIndex((t=>t.id===e));if(-1===r)return console.warn("Lock is already freed. This is a bug."),n;const i=[...n];return i.splice(r,1,{id:e,position:[t,-1===t?0:1]}),i}))},unlock:()=>{n.reduceState(["list"],(t=>t.filter((t=>t.id!==e))))}}}),[])};return yf.default.createElement(bf.Provider,{value:r},e)},Ef=e=>`\n  left: ${-e/2}px;\n  top: ${-e/2}px;\n  width: ${e}px;\n  height: ${e}px;\n`,Mf={normalColor:"#40AAA4",get selectedColor(){return jo(.35,Mf.normalColor)}},Tf=ff.default.div`
  position: absolute;
  background: ${e=>e.isSelected?Mf.selectedColor:Mf.normalColor};
  transform: rotateZ(45deg);

  z-index: 1;
  pointer-events: none;
  ${e=>Ef((e.isSelected,6))}
`,Pf=ff.default.div`
  position: absolute;
  ${Ef(12)};

  z-index: 1;

  cursor: ew-resize;

  #pointer-root.draggingPositionInSequenceEditor & {
    pointer-events: auto;
    &:hover:after {
      position: absolute;
      top: calc(50% - ${17}px);
      left: calc(50% - ${17}px);
      width: ${34}px;
      height: ${34}px;
      display: block;
      content: ' ';
      background: url(${"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMSA3VjFINyIgc3Ryb2tlPSIjNzRGRkRFIiBzdHJva2Utd2lkdGg9IjAuMjUiIC8+CiAgPHBhdGggZD0iTTcgMzNIMUwxIDI3IiBzdHJva2U9IiM3NEZGREUiIHN0cm9rZS13aWR0aD0iMC4yNSIgLz4KICA8cGF0aCBkPSJNMzMgMjdWMzNIMjciIHN0cm9rZT0iIzc0RkZERSIgc3Ryb2tlLXdpZHRoPSIwLjI1IiAvPgogIDxwYXRoIGQ9Ik0yNyAxTDMzIDFWNyIgc3Ryb2tlPSIjNzRGRkRFIiBzdHJva2Utd2lkdGg9IjAuMjUiIC8+Cjwvc3ZnPg=="}) no-repeat 100% 100%;
      // This icon might also fit: GiConvergenceTarget
    }
  }

  &.beingDragged {
    pointer-events: none !important;
  }

  &:hover + ${Tf}, &.beingDragged + ${Tf} {
    ${Ef(11)}
  }
`,Cf=e=>{const[t,n]=rs(null),[r]=function(e,t){return lu(e,{items:()=>[{label:t.selection?"Delete Selection":"Delete Keyframe",callback:()=>{t.selection?t.selection.delete():ye().transaction((({stateEditors:e})=>{e.coreByProject.historic.sheetsById.sequence.deleteKeyframes(b(y({},t.leaf.sheetObject.address),{keyframeIds:[t.keyframe.id],trackId:t.leaf.trackId}))}))}}]})}(n,e),[i]=function(e,t){const[n,r]=(0,pf.useState)(!1);_f(n,t.keyframe.position);const i=(0,pf.useRef)(t);i.current=t;const o=(0,pf.useMemo)((()=>{let t,n,o,a;return{onDragStart(n){var s;r(!0);const l=i.current;if(l.selection){const{selection:t,leaf:r}=l,{sheetObject:i}=r;return a=t.getDragHandlers(b(y({},i.address),{pathToProp:r.pathToProp,trackId:r.trackId,keyframeId:l.keyframe.id,domNode:e,positionAtStartOfDrag:l.trackData.keyframes[l.index].position})),void(null==(s=a.onDragStart)||s.call(a,n))}o=l,t=(0,hf.val)(o.layoutP.scaledSpace.toUnitSpace)},onDrag(r,i,s){if(a)return void a.onDrag(r,i,s);const l=o.trackData.keyframes[o.index],c=t(r);let u=Math.max(l.position+c,0);const d=s.composedPath().find((t=>t instanceof Element&&t!==e&&t.hasAttribute("data-pos")));if(d){const e=parseFloat(d.getAttribute("data-pos"));isFinite(e)&&(u=e)}n&&(n.discard(),n=void 0),n=ye().tempTransaction((({stateEditors:e})=>{e.coreByProject.historic.sheetsById.sequence.replaceKeyframes(b(y({},o.leaf.sheetObject.address),{trackId:o.leaf.trackId,keyframes:[b(y({},l),{position:u})],snappingFunction:(0,hf.val)(o.layoutP.sheet).getSequence().closestGridPosition}))}))},onDragEnd(e){var t;r(!1),a&&(null==(t=a.onDragEnd)||t.call(a,e),a=void 0),e?n&&n.commit():n&&n.discard(),n=void 0}}}),[]);return rh(e,o),nh(n,"draggingPositionInSequenceEditor","ew-resize"),[n]}(n,e);return pf.default.createElement(pf.default.Fragment,null,pf.default.createElement(Pf,b(y({ref:t,"data-pos":e.keyframe.position.toFixed(3)},{[wf]:e.keyframe.position.toFixed(3)}),{className:i?"beingDragged":""})),pf.default.createElement(Tf,{isSelected:!!e.selection}),r)},Af={normalColor:"#365b59",get hoverColor(){return jo(.1,Af.normalColor)},get selectedColor(){return jo(.2,Af.normalColor)},get selectedHoverColor(){return jo(.4,Af.normalColor)}},kf=df.default.div`
  position: absolute;
  background: ${e=>e.isSelected?Af.selectedColor:Af.normalColor};
  height: ${4}px;
  width: ${1e3}px;

  left: 0;
  top: -${2}px;
  transform-origin: top left;
  z-index: 0;
  cursor: ew-resize;

  &:hover {
    background: ${e=>e.isSelected?Af.selectedHoverColor:Af.hoverColor};
  }
`,Rf=e=>{const{index:t,trackData:n}=e,r=n.keyframes[t],i=n.keyframes[t+1],o=i.position-r.position,[a,s]=rs(null),[l]=lu(s,{items:()=>[{label:e.selection?"Delete Selection":"Delete both Keyframes",callback:()=>{e.selection?e.selection.delete():ye().transaction((({stateEditors:t})=>{t.coreByProject.historic.sheetsById.sequence.deleteKeyframes(b(y({},e.leaf.sheetObject.address),{keyframeIds:[r.id,i.id],trackId:e.leaf.trackId}))}))}}]});return function(e,t){const n=(0,uf.useRef)(t);n.current=t;const r=(0,uf.useMemo)((()=>{let t,r,i,o,a;return{lockCursorTo:"ew-resize",onDragStart(r){var s;const l=n.current;if(l.selection){const{selection:t,leaf:n}=l,{sheetObject:i}=n;return o=t.getDragHandlers(b(y({},i.address),{pathToProp:n.pathToProp,trackId:n.trackId,keyframeId:l.keyframe.id,domNode:e,positionAtStartOfDrag:l.trackData.keyframes[l.index].position})),void(null==(s=o.onDragStart)||s.call(o,r))}i=l,a=(0,lf.val)(i.layoutP.sheet).getSequence(),t=(0,lf.val)(i.layoutP.scaledSpace.toUnitSpace)},onDrag(e,n,s){if(o)return void o.onDrag(e,n,s);const l=t(e);r&&(r.discard(),r=void 0),r=ye().tempTransaction((({stateEditors:e})=>{e.coreByProject.historic.sheetsById.sequence.transformKeyframes(b(y({},i.leaf.sheetObject.address),{trackId:i.leaf.trackId,keyframeIds:[i.keyframe.id,i.trackData.keyframes[i.index+1].id],translate:l,scale:1,origin:0,snappingFunction:a.closestGridPosition}))}))},onDragEnd(e){var t;o&&(null==(t=o.onDragEnd)||t.call(o,e),o=void 0),e?r&&r.commit():r&&r.discard(),r=void 0}}}),[]);rh(e,r)}(s,e),cf.default.createElement(kf,{isSelected:!!e.selection,ref:a,onClick:e=>{0===e.button&&JSON.stringify([r.handles[2],r.handles[3],i.handles[0],i.handles[1]])},style:{transform:`scale3d(calc(var(--unitSpaceToScaledSpaceMultiplier) * ${o/1e3}), 1, 1)`}},l)},If=sf.default.div`
  position: absolute;
`,Of=af.default.createElement(af.default.Fragment,null),Lf=e=>{const{index:t,trackData:n}=e,r=n.keyframes[t],i=n.keyframes[t+1],o=r.connectedRight&&!!i;return af.default.createElement(If,{style:{top:e.leaf.nodeHeight/2+"px",left:`calc(var(--unitSpaceToScaledSpaceMultiplier) * ${r.position}px)`}},af.default.createElement(Cf,y({},e)),o?af.default.createElement(Rf,y({},e)):Of)},Df=(of.default.div``,rf.default.memo((({layoutP:e,trackData:t,leaf:n})=>{const{selectedKeyframeIds:r,selection:i}=Li((()=>{const t=(0,nf.val)(e.selectionAtom),r=(0,nf.val)(t.pointer.current.byObjectKey[n.sheetObject.address.objectKey].byTrackId[n.trackId].byKeyframeId);return r?{selectedKeyframeIds:r,selection:(0,nf.val)(t.pointer.current)}:{selectedKeyframeIds:{},selection:void 0}}),[e,n.trackId]),o=t.keyframes.map(((o,a)=>rf.default.createElement(Lf,{keyframe:o,index:a,trackData:t,layoutP:e,leaf:n,key:"keyframe-"+o.id,selection:!0===r[o.id]?i:void 0})));return rf.default.createElement(rf.default.Fragment,null,o)}))),Nf=S(n(294)),jf=S(n(804)),zf=jf.default.li`
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  position: relative;
`,Bf=jf.default.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;

  &:before {
    position: absolute;
    display: block;
    content: ' ';
    left: -40px;
    top: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    border-bottom: 1px solid #252b3869;
    background: ${e=>e.isEven?"transparent":"#6b8fb505"};
  }
`,Ff=jf.default.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`,Uf=({leaf:e,children:t,node:n})=>{const r=Array.isArray(t)&&t.length>0;return Nf.default.createElement(zf,null,Nf.default.createElement(Bf,{style:{height:e.nodeHeight+"px"},isEven:e.n%2==0},n),r&&Nf.default.createElement(Ff,null,t))},Hf=({leaf:e,layoutP:t})=>Li((()=>{const{sheetObject:n}=e,{trackId:r}=e,i=(0,ef.val)(ye().atomP.historic.coreByProject[n.address.projectId].sheetsById[n.address.sheetId].sequence.tracksByObject[n.address.objectKey].trackData[r]);if("BasicKeyframedTrack"!==(null==i?void 0:i.type))return console.error(`trackData type ${null==i?void 0:i.type} is not yet supported on the sequence editor`),tf.default.createElement(Uf,{leaf:e,node:tf.default.createElement("div",null)});{const n=tf.default.createElement(Df,{layoutP:t,trackData:i,leaf:e});return tf.default.createElement(Uf,{leaf:e,node:n})}}),[e,t]),Vf=(e,t)=>"propWithChildren"===e.type?Jp.default.createElement(Gf,{layoutP:t,leaf:e,key:"prop"+e.pathToProp[e.pathToProp.length-1]}):Jp.default.createElement(Hf,{layoutP:t,leaf:e,key:"prop"+e.pathToProp[e.pathToProp.length-1]}),Gf=(Qp.default.div``,({leaf:e,layoutP:t})=>Li((()=>{const n=Jp.default.createElement("div",null);return Jp.default.createElement(Uf,{leaf:e,node:n},e.children.map((e=>Vf(e,t))))}),[e,t])),Wf=(Zp.default.div``,({leaf:e,layoutP:t})=>Li((()=>{const n=Yp.default.createElement("div",null);return Yp.default.createElement(Uf,{leaf:e,node:n},e.children.map((e=>Vf(e,t))))}),[e,t])),qf=(Kp.default.div``,({leaf:e,layoutP:t})=>Li((()=>Xp.default.createElement(Xp.default.Fragment,null,e.children.map((e=>Xp.default.createElement(Wf,{layoutP:t,key:"sheetObject-"+e.sheetObject.address.objectKey,leaf:e}))))),[e,t])),$f=1e6,Xf=bp.default.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  left: 0;
  width: ${$f}px;
`,Kf=(bp.default.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${e=>e.width};
  bottom: 0;
  z-index: ${()=>kv.rightBackground};
  overflow: hidden;
  background: ${Do(.03,Vo.panel.bg)};
`,({layoutP:e})=>Li((()=>{const t=(0,vp.val)(e.tree),n=(0,vp.val)(e.tree.top)+Math.max((0,vp.val)(e.tree.heightIncludingChildren),(0,vp.val)(e.dopeSheetDims.height));return yp.default.createElement(yp.default.Fragment,null,yp.default.createElement(Gp,{layoutP:e,height:n},yp.default.createElement(Lp,{layoutP:e},yp.default.createElement(Xf,{style:{top:t.top+"px"}},yp.default.createElement(qf,{leaf:t,layoutP:e})))))}),[e])),Yf=S(n(771)),Zf=S(n(294)),Jf=S(n(804)),Qf=S(n(294)),em=S(n(804)),tm=S(n(294)),nm=S(n(804)),rm=S(n(294)),im=S(n(804)).default.path`
  stroke-width: 2;
  stroke: var(--main-color);
  fill: none;
  vector-effect: non-scaling-stroke;
`;function om(e,t,n,r){return 0===n&&(n=1e-4),0===r&&(r=.001),`translate(calc(var(--unitSpaceToScaledSpaceMultiplier) * ${e}px), calc((var(--graphEditorVerticalSpace) - var(--graphEditorVerticalSpace) * ${t}) * 1px)) scale(calc(var(--unitSpaceToScaledSpaceMultiplier) * ${n}), calc(var(--graphEditorVerticalSpace) * ${-1*r}))`}var am=e=>{const{index:t,trackData:n}=e,r=n.keyframes[t],i=n.keyframes[t+1],o=(r.handles[2],r.handles[3],i.handles[0],i.handles[1],i.position-r.position),[a,s]=rs(null),[l]=function(e,t){const{index:n,trackData:r}=t,i=r.keyframes[n],o=r.keyframes[n+1];return lu(e,{items:()=>[{label:"Delete",callback:()=>{ye().transaction((({stateEditors:e})=>{const{deleteKeyframes:n}=e.coreByProject.historic.sheetsById.sequence;n(b(y({},t.sheetObject.address),{trackId:t.trackId,keyframeIds:[i.id,o.id]}))}))}}]})}(s,e),c=e.extremumSpace.fromValueSpace(r.value),u=e.extremumSpace.fromValueSpace(i.value)-c,d=om(r.position,c,o,u),h=`M 0 0 C ${r.handles[2]} ${r.handles[3]} ${i.handles[0]} ${i.handles[1]} 1 1`;return rm.default.createElement(rm.default.Fragment,null,rm.default.createElement(im,{ref:a,d:h,style:{transform:d}}),l)},sm=S(n(771)),lm=S(n(294)),cm=S(n(804)),um=cm.default.circle`
  stroke-width: 1px;
  vector-effect: non-scaling-stroke;
  fill: var(--main-color);
  r: 2px;
  pointer-events: none;
`,dm=cm.default.circle`
  stroke-width: 6px;
  vector-effect: non-scaling-stroke;
  r: 6px;
  fill: transparent;
  cursor: move;
  ${Ho};
  &:hover {
  }
  &:hover + ${um} {
    r: 6px;
  }
`,hm=cm.default.path`
  stroke-width: 1;
  stroke: var(--main-color);
  /* stroke: gray; */
  fill: none;
  vector-effect: non-scaling-stroke;
`,pm=e=>{const[t,n]=rs(null),{index:r,trackData:i}=e,o=i.keyframes[r],a=i.keyframes[r+1],[s]=function(e,t){return lu(e,{items:()=>[{label:"Delete",callback:()=>{ye().transaction((({stateEditors:e})=>{e.coreByProject.historic.sheetsById.sequence.deleteKeyframes(b(y({},t.sheetObject.address),{keyframeIds:[t.keyframe.id],trackId:t.trackId}))}))}}]})}(n,e);!function(e,t){const n=(0,lm.useRef)(t);n.current=t;const r=(0,lm.useMemo)((()=>{let e,t,r,i,o;return{lockCursorTo:"move",onDragStart(){r=n.current,e=(0,sm.val)(r.layoutP.scaledSpace.toUnitSpace),t=(0,sm.val)(r.layoutP.graphEditorVerticalSpace.toExtremumSpace),o=r.extremumSpace.lock()},onDrag(n,o){i&&(i.discard(),i=void 0);const{index:a,trackData:s}=r,l=s.keyframes[a],c=s.keyframes[a+1];let u=e(n)/(c.position-l.position);const d=t(-o),h=r.extremumSpace.deltaToValueSpace(d)/(c.value-l.value);if("left"===r.which){const e=rr(l.handles[2]+u,0,1),t=l.handles[3]+h;i=ye().tempTransaction((({stateEditors:n})=>{n.coreByProject.historic.sheetsById.sequence.replaceKeyframes(b(y({},r.sheetObject.address),{snappingFunction:(0,sm.val)(r.layoutP.sheet).getSequence().closestGridPosition,trackId:r.trackId,keyframes:[b(y({},l),{handles:[l.handles[0],l.handles[1],e,t]})]}))}))}else{const e=rr(c.handles[0]+u,0,1),t=c.handles[1]+h;i=ye().tempTransaction((({stateEditors:n})=>{n.coreByProject.historic.sheetsById.sequence.replaceKeyframes(b(y({},r.sheetObject.address),{trackId:r.trackId,snappingFunction:(0,sm.val)(r.layoutP.sheet).getSequence().closestGridPosition,keyframes:[b(y({},c),{handles:[e,t,c.handles[2],c.handles[3]]})]}))}))}},onDragEnd(e){if(o){const e=o;o=void 0,e()}e?i&&i.commit():i&&i.discard(),i=void 0}}}),[]);rh(e,r)}(n,e);const l="left"===e.which?o.handles[2]:a.handles[0],c=o.position+(a.position-o.position)*l,u="left"===e.which?o.handles[3]:a.handles[1],d=o.value+(a.value-o.value)*u,h=e.extremumSpace.fromValueSpace(d),p=h-e.extremumSpace.fromValueSpace("left"===e.which?o.value:a.value),f=om("left"===e.which?o.position:a.position,e.extremumSpace.fromValueSpace("left"===e.which?o.value:a.value),c-("left"===e.which?o.position:a.position),p);return lm.default.createElement("g",null,lm.default.createElement(dm,{ref:t,style:{cx:`calc(var(--unitSpaceToScaledSpaceMultiplier) * ${c} * 1px)`,cy:`calc((var(--graphEditorVerticalSpace) - var(--graphEditorVerticalSpace) * ${h}) * 1px)`}}),lm.default.createElement(um,{style:{cx:`calc(var(--unitSpaceToScaledSpaceMultiplier) * ${c} * 1px)`,cy:`calc((var(--graphEditorVerticalSpace) - var(--graphEditorVerticalSpace) * ${h}) * 1px)`}}),lm.default.createElement(hm,{d:"M 0 0 L 1 1",style:{transform:f}}),s)},fm=S(n(771)),mm=S(n(294)),gm=S(n(804)),vm=gm.default.circle`
  fill: var(--main-color);
  stroke-width: 1px;
  vector-effect: non-scaling-stroke;

  r: 2px;
`,ym=gm.default.circle`
  stroke-width: 6px;
  vector-effect: non-scaling-stroke;
  r: 6px;
  fill: transparent;
  ${Ho};

  &:hover + ${vm} {
    r: 6px;
  }

  #pointer-root.normal & {
    cursor: move;
  }

  #pointer-root.draggingPositionInSequenceEditor & {
    pointer-events: auto;
  }

  &.beingDragged {
    pointer-events: none !important;
  }
`,bm=e=>{const[t,n]=rs(null),{index:r,trackData:i}=e,o=i.keyframes[r],[a]=(i.keyframes[r+1],function(e,t){return lu(e,{items:()=>[{label:"Delete",callback:()=>{ye().transaction((({stateEditors:e})=>{e.coreByProject.historic.sheetsById.sequence.deleteKeyframes(b(y({},t.sheetObject.address),{keyframeIds:[t.keyframe.id],trackId:t.trackId}))}))}}]})}(n,e)),s=function(e,t){const[n,r]=(0,mm.useState)(!1);_f(n,t.keyframe.position);const i=(0,mm.useRef)(t);i.current=t;const o=(0,mm.useMemo)((()=>{let e,t,n,o,a,s=!1;return{lockCursorTo:"move",onDragStart(n){r(!0),s=!!n.altKey,t=i.current,e=(0,fm.val)(t.layoutP.scaledSpace.toUnitSpace),o=(0,fm.val)(t.layoutP.graphEditorVerticalSpace.toExtremumSpace),a=t.extremumSpace.lock()},onDrag(r,i){const a=t.trackData.keyframes[t.index],l=e(r),c=o(-i),u=t.extremumSpace.deltaToValueSpace(c),d=[],h=b(y({},a),{position:a.position+l,value:a.value+u,handles:[...a.handles]});if(d.push(h),s){const e=t.trackData.keyframes[t.index-1];if(e&&Math.abs(a.value-e.value)>0){const t=b(y({},e),{handles:[...e.handles]});d.push(t),t.handles[3]=(p=e.handles[3],f=e.value,m=e.value,(a.value-f)*p/(h.value-m))}const n=t.trackData.keyframes[t.index+1];if(n&&Math.abs(a.value-n.value)>0){const e=b(y({},n),{handles:[...n.handles]});d.push(e),e.handles[1]=function(e,t,n,r,i){return((t-r)*e+r-t+n-i)/(n-i)}(e.handles[1],e.value,e.value,a.value,h.value)}}var p,f,m;null==n||n.discard(),n=ye().tempTransaction((({stateEditors:e})=>{e.coreByProject.historic.sheetsById.sequence.replaceKeyframes(b(y({},t.sheetObject.address),{trackId:t.trackId,keyframes:d,snappingFunction:(0,fm.val)(t.layoutP.sheet).getSequence().closestGridPosition}))}))},onDragEnd(e){if(r(!1),a){const e=a;a=void 0,e()}e?null==n||n.commit():null==n||n.discard(),n=void 0}}}),[]);return rh(e,o),nh(n,"draggingPositionInSequenceEditor","move"),n}(n,e),l=e.extremumSpace.fromValueSpace(o.value);return mm.default.createElement(mm.default.Fragment,null,mm.default.createElement(ym,b(y({ref:t,style:{cx:`calc(var(--unitSpaceToScaledSpaceMultiplier) * ${o.position} * 1px)`,cy:`calc((var(--graphEditorVerticalSpace) - var(--graphEditorVerticalSpace) * ${l}) * 1px)`}},{[wf]:o.position.toFixed(3)}),{"data-pos":o.position.toFixed(3),className:s?"beingDragged":""})),mm.default.createElement(vm,{style:{cx:`calc(var(--unitSpaceToScaledSpaceMultiplier) * ${o.position} * 1px)`,cy:`calc((var(--graphEditorVerticalSpace) - var(--graphEditorVerticalSpace) * ${l}) * 1px)`}}),a)},xm=nm.default.g`
  /* position: absolute; */
`,_m=tm.default.createElement(tm.default.Fragment,null),wm=e=>{const{index:t,trackData:n}=e,r=n.keyframes[t],i=n.keyframes[t+1],o=r.connectedRight&&!!i&&i.value-r.value!=0;return tm.default.createElement(xm,null,o?tm.default.createElement(tm.default.Fragment,null,tm.default.createElement(am,y({},e)),tm.default.createElement(pm,b(y({},e),{which:"left"})),tm.default.createElement(pm,b(y({},e),{which:"right"}))):_m,tm.default.createElement(bm,y({},e)))},Sm=(em.default.div``,Qf.default.memo((({layoutP:e,trackData:t,sheetObject:n,trackId:r,color:i})=>{const[o,a]=(0,Qf.useState)(!1),s=(0,Qf.useMemo)((()=>{const e=new Set;return function(){const t=0===e.size;function n(){const t=e.size>0;e.delete(n),t&&0===e.size&&a(!1)}return e.add(n),t&&a(!0),n}}),[]),l=(0,Qf.useMemo)((()=>{const e=function(e){let t=1/0,n=-1/0;function r(e){t=Math.min(e,t),n=Math.max(e,n)}return e.forEach(((t,n)=>{if(r(t.value),!t.connectedRight)return;const i=e[n+1];if(!i)return;const o=i.value-t.value;r(t.value+t.handles[3]*o),r(t.value+i.handles[1]*o)})),[t,n]}(t.keyframes),n=t=>t*(e[1]-e[0]);return{fromValueSpace:t=>(t-e[0])/(e[1]-e[0]),toValueSpace:t=>e[0]+n(t),deltaToValueSpace:n,lock:s}}),[t.keyframes]),c=(0,Qf.useRef)(void 0);o||(c.current=l);const u=t.keyframes.map(((o,a)=>Qf.default.createElement(wm,{keyframe:o,index:a,trackData:t,layoutP:e,sheetObject:n,trackId:r,key:"keyframe-"+o.id,extremumSpace:c.current,color:i})));return Qf.default.createElement("g",{style:{"--main-color":zm[i].iconColor}},u)}))),Em=Sm;Jf.default.div``;var Mm=e=>Li((()=>{const{sheetObject:t,trackId:n,pathToProp:r}=e,i=(0,Yf.val)(ye().atomP.historic.coreByProject[t.address.projectId].sheetsById[t.address.sheetId].sequence.tracksByObject[t.address.objectKey].trackData[n]);return"BasicKeyframedTrack"!==(null==i?void 0:i.type)?(console.error(`trackData type ${null==i?void 0:i.type} is not yet supported on the graph editor`),Zf.default.createElement(Zf.default.Fragment,null)):Zf.default.createElement(Em,b(y({},e),{trackData:i}))}),[e.trackId,e.layoutP]),Tm=S(n(771)),Pm=S(n(294)),Cm=S(n(804)),Am=Dn((e=>{const t=[];for(let n=1;n<=e;n++)e%n==0&&t.push(n);return t}));function km({clippedSpaceRange:e,clippedSpaceWidth:t,fps:n,gapWidth:r=120},i){const o=1/n,a=t/(n*(e.end-e.start)),s=Math.floor(r/a),l=(s<n?Am(n).find((e=>e>=s)):n*Math.floor(s/n))*o,c=Math.floor(e.start/l),u=Math.ceil(e.end/l);for(let e=c;e<=u;e++){const t=e*l;i(t,t%1==0)}}var Rm=new(S(n(771)).Ticker),Im=Rm,Om=e=>{Rm.tick(e),window.requestAnimationFrame(Om)};window.requestAnimationFrame(Om);var Lm=Cm.default.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  pointer-events: none;
`,Dm=Cm.default.canvas`
  position: relative;
  left: 0;
`,Nm=e=>(window.devicePixelRatio||1)/(e=>{const t=e;return t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1})(e),jm=({layoutP:e,width:t,height:n})=>{const r=(0,Pm.useRef)(null),[i,o]=(0,Pm.useState)(null),{ctx:a,ratio:s}=(0,Pm.useMemo)((()=>{if(!i)return{};const e=i.getContext("2d");return{ctx:e,ratio:Nm(e)}}),[i]);return(0,Pm.useLayoutEffect)((()=>{if(!a)return;i.width=t*s,i.height=n*s;const r=(0,Tm.prism)((()=>{const t=(0,Tm.val)(e.sheet).getSequence();return{ctx:a,clippedSpaceRange:(0,Tm.val)(e.clippedSpace.range),clippedSpaceWidth:(0,Tm.val)(e.clippedSpace.width),unitSpaceToClippedSpace:(0,Tm.val)(e.clippedSpace.fromUnitSpace),height:n,leftPadding:(0,Tm.val)(e.scaledSpace.leftPadding),fps:t.subUnitsPerUnit,snapToGrid:e=>t.closestGridPosition(e)}})).tapImmediate(Im,(e=>{a.save(),a.scale(s,s),function(e){const{clippedSpaceWidth:t,height:n,ctx:r,unitSpaceToClippedSpace:i,snapToGrid:o}=e;r.clearRect(0,0,t,n),km(e,((e,t)=>{const a=o(e),s=Math.floor(i(a));r.strokeStyle=t?"rgba(225, 225, 225, 0.04)":"rgba(255, 255, 255, 0.01)",r.beginPath(),r.moveTo(s,0),r.lineTo(s,n),r.stroke(),r.closePath()}))}(e),a.restore()}));return()=>{r()}}),[a,t,n,e]),Pm.default.createElement(Lm,{ref:r,style:{width:t+"px"}},Pm.default.createElement(Dm,{ref:o,style:{width:t+"px",height:n+"px"}}))},zm={1:{iconColor:"#b98b08"},2:{iconColor:"#70a904"},3:{iconColor:"#2e928a"},4:{iconColor:"#a943bb"},5:{iconColor:"#b90808"},6:{iconColor:"#b4bf0e"}},Bm=gp.default.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background: ${Bo(.03,"#1a1c1e")};
`,Fm=gp.default.svg`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  pointer-events: none;
`,Um=({layoutP:e})=>Li((()=>{const t=(0,fp.val)(e.sheet),n=(0,fp.val)(ye().atomP.historic.projects.stateByProjectId[t.address.projectId].stateBySheetId[t.address.sheetId].sequenceEditor.selectedPropsByObject),r=(0,fp.val)(e.graphEditorDims.height),i=(0,fp.val)(e.scaledSpace.fromUnitSpace)(1),o=[];if(n)for(const[r,i]of Object.entries(n)){const n=t.getObject(r);if(!n)continue;const s=(0,fp.val)(n.template.getMapOfValidSequenceTracks_forStudio());for(const[t,l]of Object.entries(i)){const i=(a=t,JSON.parse(a)),c=_c(s,i);c&&o.push(mp.default.createElement(Mm,{key:`graph-${r}-${t}`,sheetObject:n,pathToProp:i,layoutP:e,trackId:c,color:l}))}}var a;const s=(0,fp.val)(e.rightDims.width);return mp.default.createElement(Bm,{style:{width:s+"px",height:r+"px","--unitSpaceToScaledSpaceMultiplier":i,"--graphEditorVerticalSpace":`${(0,fp.val)(e.graphEditorVerticalSpace.space)}`}},mp.default.createElement(jm,{layoutP:e,width:s,height:r}),mp.default.createElement(Gp,{layoutP:e,height:r},mp.default.createElement(Fm,{width:$f,height:r,viewBox:`0 0 1000000 ${r}`},mp.default.createElement("g",{style:{transform:`translate(0, ${(0,fp.val)(e.graphEditorDims.padding.top)}px)`}},o))))}),[e]),Hm=(0,pp.default)(tp)``,Vm=(0,pp.default)(np)`
  display: flex;
  color: ${"#9a9a9a"};
  padding-right: 12px;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
`,Gm=pp.default.button`
  background: none;
  border: none;
  outline: none;
  display: flex;
  box-sizing: border-box;
  font-size: 14px;
  align-items: center;
  height: 100%;
  margin-left: 12px;
  color: ${e=>e.isSelected?zm[e.graphEditorColor].iconColor:Nc};

  &:hover {
    color: white;
  }
`,Wm=()=>hp.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"12",viewBox:"0 0 640 512"},hp.default.createElement("g",{transform:"translate(0 100)"},hp.default.createElement("path",{fill:"currentColor",d:"M368 32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM208 88h-84.75C113.75 64.56 90.84 48 64 48 28.66 48 0 76.65 0 112s28.66 64 64 64c26.84 0 49.75-16.56 59.25-40h79.73c-55.37 32.52-95.86 87.32-109.54 152h49.4c11.3-41.61 36.77-77.21 71.04-101.56-3.7-8.08-5.88-16.99-5.88-26.44V88zm-48 232H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM576 48c-26.84 0-49.75 16.56-59.25 40H432v72c0 9.45-2.19 18.36-5.88 26.44 34.27 24.35 59.74 59.95 71.04 101.56h49.4c-13.68-64.68-54.17-119.48-109.54-152h79.73c9.5 23.44 32.41 40 59.25 40 35.34 0 64-28.65 64-64s-28.66-64-64-64zm0 272h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z"}))),qm=pp.default.span`
  margin-right: 4px;
  ${fu};
`,$m=({leaf:e})=>{const t=function(e,t){let n=e;for(const e of t)n=n[e];return n}(e.sheetObject.propsP,e.pathToProp),n=e.sheetObject,{controlIndicators:r}=Gc(t,n,e.propConf),i=Li((()=>{const t=e.sheetObject.address,n=up(e.pathToProp);return(0,dp.val)(ye().atomP.historic.projects.stateByProjectId[t.projectId].stateBySheetId[t.sheetId].sequenceEditor.selectedPropsByObject[t.objectKey][n])}),[e]),o=(0,hp.useRef)(!1),a="string"==typeof i;o.current=a;const s=(0,hp.useCallback)((()=>{const t=e.sheetObject.address;ye().transaction((({stateEditors:n})=>{o.current?n.studio.historic.projects.stateByProjectId.stateBySheetId.sequenceEditor.removePropFromGraphEditor(b(y({},t),{pathToProp:e.pathToProp})):(n.studio.historic.projects.stateByProjectId.stateBySheetId.sequenceEditor.addPropToGraphEditor(b(y({},t),{pathToProp:e.pathToProp})),n.studio.historic.panels.sequenceEditor.graphEditor.setIsOpen({isOpen:!0}))}))}),[e]),l=e.pathToProp[e.pathToProp.length-1];return hp.default.createElement(Hm,{depth:e.depth},hp.default.createElement(Vm,{isEven:e.n%2==0,style:{height:e.nodeHeight+"px"},isSelected:!0===a},hp.default.createElement(qm,null,l),r,hp.default.createElement(Gm,{onClick:s,isSelected:!0===a,graphEditorColor:null!=i?i:"1"},hp.default.createElement(Wm,null))))},Xm=e=>"propWithChildren"===e.type?lp.default.createElement(Km,{leaf:e,key:"prop"+e.pathToProp[e.pathToProp.length-1]}):lp.default.createElement($m,{leaf:e,key:"prop"+e.pathToProp[e.pathToProp.length-1]}),Km=(cp.default.div``,({leaf:e})=>Li((()=>lp.default.createElement(sp,{leaf:e,label:e.pathToProp[e.pathToProp.length-1]},e.children.map((e=>Xm(e))))),[e])),Ym=(Jh.default.div``,({leaf:e})=>Li((()=>Zh.default.createElement(sp,{leaf:e,label:e.sheetObject.address.objectKey},e.children.map((e=>Xm(e))))),[e])),Zm=(Yh.default.div``,({leaf:e})=>Li((()=>Kh.default.createElement(Kh.default.Fragment,null,e.children.map((e=>Kh.default.createElement(Ym,{key:"sheetObject-"+e.sheetObject.address.objectKey,leaf:e}))))),[e])),Jm=Xh.default.div`
  position: absolute;
  left: 0;
  overflow-x: visible;
`,Qm=Xh.default.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`,eg=({layoutP:e})=>Li((()=>{const t=(0,qh.val)(e.tree),n=(0,qh.val)(e.leftDims.width);return $h.default.createElement(Jm,{style:{width:n+"px",top:t.top+"px"}},$h.default.createElement(Qm,null,$h.default.createElement(Zm,{leaf:t})))}),[e]),tg=S(n(294)),ng=S(n(804)).default.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: ${()=>kv.rightBackground};
  overflow: hidden;
  background: ${Bo(.01,Do(.03,Vo.panel.bg))};
  pointer-events: none;
`,rg=({layoutP:e})=>{const t=Di(e.rightDims.width),n=Di(e.panelDims.height);return tg.default.createElement(ng,{style:{width:t+"px"}},tg.default.createElement(jm,{width:t,height:n,layoutP:e}))},ig=Wh.default.div`
  position: absolute;
  left: 0;
  right: 0;
`,og=({layoutP:e})=>{const t=Di(e.dopeSheetDims.height);return Gh.default.createElement(ig,{style:{height:t+"px"}},Gh.default.createElement(rg,{layoutP:e}),Gh.default.createElement(Up,null,Gh.default.createElement(eg,{layoutP:e}),Gh.default.createElement(Kf,{layoutP:e})))},ag=S(n(771)),sg=S(n(771)),lg=S(n(771)),cg=28,ug={start:0,end:10};function dg(e,t){const n=ye(),r=n.atomP.ahistoric.projects.stateByProjectId[e.address.projectId].stateBySheetId[e.address.sheetId],i=n.atomP.historic.projects.stateByProjectId[e.address.projectId].stateBySheetId[e.address.sheetId];return(0,sg.prism)((()=>{var o;const a=("tree",s=()=>(e=>{lg.prism.ensurePrism();let t=20,n=0;const r={type:"sheet",sheet:e,children:[],top:t,depth:-1,n,nodeHeight:0,heightIncludingChildren:-1};t+=r.nodeHeight,n+=1;for(const[t,n]of Object.entries((0,lg.val)(e.objectsP)))i(n,r.children,r.depth+1);function i(e,r,i){const a=(0,lg.val)(e.template.getMapOfValidSequenceTracks_forStudio());if(0===Object.keys(a).length)return;const s={type:"sheetObject",top:t,children:[],depth:i,n,sheetObject:e,nodeHeight:cg,heightIncludingChildren:-1};r.push(s),n+=1,t+=cg,o(e,a,[],e.template.config,s.children,i+1),s.heightIncludingChildren=t-s.top}function o(e,t,n,r,i,o){for(const[s,l]of Object.entries(t)){const t=r.props[s];Eu(t)||a(e,l,[...n,s],t,i,o)}for(const[s,l]of Object.entries(t)){const t=r.props[s];Eu(t)&&a(e,l,[...n,s],t,i,o)}}function a(e,r,i,a,s,l){"compound"===a.type?function(e,r,i,a,s,l){const c={type:"propWithChildren",pathToProp:i,sheetObject:e,top:t,children:[],nodeHeight:cg,heightIncludingChildren:-1,depth:l,trackMapping:r,n};t+=cg,n+=1,s.push(c),o(e,r,i,a,c.children,l+1),c.heightIncludingChildren=t-c.top}(e,r,i,a,s,l):"enum"===a.type?_e.warn("Prop type enum is not yet supported in the sequence editor"):function(e,r,i,o,a,s){const l={type:"primitiveProp",propConf:o,depth:s,sheetObject:e,pathToProp:i,top:t,nodeHeight:cg,heightIncludingChildren:cg,trackId:r,n};a.push(l),n+=1,t+=cg}(e,r,i,a,s,l)}return r.heightIncludingChildren=t-r.top,r})(e),l=[],ag.prism.memo("tree",(()=>(0,ag.prism)(s)),l).getValue());var s,l;const c=(0,sg.val)(t),u=(0,sg.val)(n.atomP.historic.panels.sequenceEditor.graphEditor),d=(0,sg.val)(i.sequenceEditor.selectedPropsByObject),h=!!d&&Object.keys(d).length>0,{leftDims:p,rightDims:f,graphEditorDims:m,dopeSheetDims:g,horizontalScrollbarDims:v}=sg.prism.memo("leftDims",(()=>{var e;const t={width:Math.floor(.2*c.width),height:c.height,screenX:c.screenX,screenY:c.screenY},n={width:c.width-t.width,height:c.height,screenX:c.screenX+t.width,screenY:c.screenY},r=h&&!0===(null==u?void 0:u.isOpen),i=Math.floor((r?rr(null!=(e=null==u?void 0:u.height)?e:.5,.1,.7):0)*c.heightWithoutBorder),o=0+i,a=c.height-o,s={width:c.width,height:a,screenX:c.screenX,screenY:c.screenY};return{leftDims:t,rightDims:n,graphEditorDims:{isAvailable:h,isOpen:r,width:n.width,height:i,screenX:c.screenX,screenY:c.screenY+a,padding:{top:20,bottom:20}},dopeSheetDims:s,horizontalScrollbarDims:{bottom:0}}}),[c,u,h]),x=sg.prism.memo("graphEditorVerticalSpace",(()=>{const e=m.height-m.padding.top-m.padding.bottom;return{space:e,fromExtremumSpace:t=>t*e,toExtremumSpace:t=>t/e}}),[m]),[_,w]=sg.prism.state("isSeeking",!1),S={isSeeking:_,setIsSeeking:w},E=null!=(o=(0,sg.val)(r.sequence.clippedSpaceRange))?o:ug,M=sg.prism.memo("scaledSpace",(()=>{const e=E.end-E.start,t=f.width,n=e/t,r=t/e;return{fromUnitSpace:e=>e*r,toUnitSpace:e=>e*n,leftPadding:10}}),[E,f.width]),T=sg.prism.memo("setClippedSpaceRange",(()=>function(t){n.transaction((({stateEditors:n})=>{const r=y({},t);if(r.end<=r.start&&(r.end=r.start+1),r.start<0){const e=r.end-r.start;r.start=0,r.end=e}n.studio.ahistoric.projects.stateByProjectId.stateBySheetId.sequence.clippedSpaceRange.set(b(y({},e.address),{range:r}))}))}),[]),P=sg.prism.memo("clippedSpace",(()=>({range:E,width:f.width,fromUnitSpace:e=>M.fromUnitSpace(e-E.start)+M.leftPadding,toUnitSpace:e=>M.toUnitSpace(e-M.leftPadding)+E.start,setRange:T})),[E,f.width,M,T]),C=sg.prism.memo("selection.current",(()=>new sg.Atom({})),[]);return Fh("finalAtom",{sheet:e,tree:a,panelDims:c,leftDims:p,rightDims:f,dopeSheetDims:g,horizontalScrollbarDims:v,seeker:S,unitSpace:{},scaledSpace:M,clippedSpace:P,graphEditorDims:m,graphEditorVerticalSpace:x,selectionAtom:C}).pointer}))}var hg=S(n(771)),pg=S(n(294)),fg=S(n(804)),mg=S(n(771)),gg=S(n(294)),vg=S(n(804)),yg=S(n(294)),bg=S(n(804)),xg=S(n(771)),_g=S(n(294)),wg=S(n(804)),Sg=wg.default.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  pointer-events: none;
`,Eg={fullUnitStampColor:"#6a6a6a",stampFontSize:"10px",get subUnitStampColor(){return Do(.2,Eg.fullUnitStampColor)}},Mg=wg.default.div`
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  overflow: hidden;
  /* z-index: 2; */
  will-change: transform;
  pointer-events: none;
`,Tg=wg.default.div`
  position: absolute;
  top: 0;
  left: 0;

  & > span {
    position: absolute;
    display: block;
    top: 9px;
    left: -10px;
    color: ${Eg.fullUnitStampColor};
    text-align: center;
    font-size: ${Eg.stampFontSize};
    width: 20px;

    &.full-unit {
      color: ${Eg.fullUnitStampColor};
    }

    &.sub-unit {
      color: ${Eg.subUnitStampColor};
    }
  }

  pointer-events: none;
`,Pg=({layoutP:e,width:t})=>{const n=(0,_g.useRef)(null),[r,i]=(0,_g.useState)(null);return(0,_g.useLayoutEffect)((()=>{if(r)return(0,xg.prism)((()=>{const t=(0,xg.val)(e.sheet).getSequence();return{fullSecondStampsContainer:r,clippedSpaceRange:(0,xg.val)(e.clippedSpace.range),clippedSpaceWidth:(0,xg.val)(e.clippedSpace.width),unitSpaceToClippedSpace:(0,xg.val)(e.clippedSpace.fromUnitSpace),leftPadding:(0,xg.val)(e.scaledSpace.leftPadding),fps:t.subUnitsPerUnit,sequencePositionFormatter:t.positionFormatter,snapToGrid:e=>t.closestGridPosition(e)}})).tapImmediate(Im,Cg)}),[r,t,e]),_g.default.createElement(Sg,{ref:n,style:{width:t+"px"}},_g.default.createElement(Mg,{style:{width:t+"px"}},_g.default.createElement(Tg,{ref:i})))};function Cg(e){const{fullSecondStampsContainer:t,sequencePositionFormatter:n,snapToGrid:r,unitSpaceToClippedSpace:i}=e;let o="";km(e,((e,t)=>{const a=r(e),s=i(a);o+=t?Ag(n.formatFullUnitForGrid(a),s,"full-unit"):Ag(n.formatSubUnitForGrid(a),s,"sub-unit")})),t.innerHTML=o}function Ag(e,t,n){return`<span class="${n}" style="transform: translate3d(${t.toFixed(1)}px, -50%, 0);">${e}</span>`}var kg="#1f2120eb",Rg=(0,bg.default)(ah)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${20}px;
  box-sizing: border-box;
  background: ${kg};
  border-bottom: 1px solid ${"#1c1e21"};
  ${Ho};
`,Ig=({layoutP:e})=>{const t=Di(e.rightDims.width);return yg.default.createElement(Rg,y({},{[wf]:"hide"}),yg.default.createElement(Pg,{layoutP:e,width:t,height:20}))},Og=S(n(294)),Lg=S(n(804)),Dg=e=>isFinite(e)&&e>0,Ng=Lg.default.div`
  display: flex;
  gap: 8px;
  padding: 4px 8px;
  height: 28px;
  align-items: center;
`,jg=Lg.default.div`
  ${fu};
  white-space: nowrap;
`,zg=({deltaX:e})=>.25*e,Bg=({layoutP:e,onRequestClose:t})=>{const n=Di(e.sheet),r=(0,Og.useMemo)((()=>{let e;return{temporarilySetValue(t){e&&(e.discard(),e=void 0),e=ye().tempTransaction((({stateEditors:e})=>{e.coreByProject.historic.sheetsById.sequence.setLength(b(y({},n.address),{length:t}))}))},discardTemporaryValue(){e&&(e.discard(),e=void 0)},permenantlySetValue(t){e&&(e.discard(),e=void 0),ye().transaction((({stateEditors:e})=>{e.coreByProject.historic.sheetsById.sequence.setLength(b(y({},n.address),{length:t}))}))}}}),[e,n]),i=(0,Og.useRef)(null);return(0,Og.useLayoutEffect)((()=>{i.current.focus()}),[]),Li((()=>{const e=n.getSequence().length;return Og.default.createElement(Ng,null,Og.default.createElement(jg,null,"Sequence length"),Og.default.createElement(Wu,b(y({value:e},r),{isValid:Dg,inputRef:i,onBlur:t,nudge:zg})))}),[n,r,i])},Fg="#000000",Ug=vg.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  z-index: ${()=>kv.lengthIndicatorStrip};
  pointer-events: none;

  &:after {
    display: block;
    content: ' ';
    position: absolute;
    /* top: ${20}px; */
    top: 0;
    bottom: 0;
    left: -1px;
    width: 1px;
    background-color: ${"#0000006c"};
  }

  &:hover:after,
  &.dragging:after {
    background-color: ${Fg};
  }
`,Hg=vg.default.div`
  position: absolute;
  top: ${5}px;
  width: 100px;
  left: -50px;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`,Vg=vg.default.div`
  margin-top: 8px;
  font-size: 10px;
  white-space: nowrap;
  padding: 2px 8px;
  border-radius: 2px;
  ${Ho};
  cursor: ew-resize;
  color: #464646;
  background-color: #0000004d;
  display: none;

  ${Ug}:hover &, ${Ug}.dragging & {
    display: block;
    color: white;
    background-color: ${Fg};
  }
`,Gg=vg.default.div`
  font-size: 10px;
  white-space: nowrap;
  padding: 1px 2px;
  border-radius: 2px;
  ${Ho};
  justify-content: center;
  align-items: center;
  cursor: ew-resize;
  color: #5d5d5d;
  background-color: #191919;

  ${Ug}:hover &, ${Ug}.dragging & {
    color: white;
    background-color: ${Fg};

    & > svg:first-child {
      margin-right: -1px;
    }
  }

  & > svg:first-child {
    margin-right: -4px;
  }
`,Wg=vg.default.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(23 23 23 / 43%);
  width: ${1e3}px;
  z-index: ${()=>kv.lengthIndicatorCover};
  transform-origin: left top;

  ${Ug}.dragging ~ &, ${Ug}:hover ~ & {
    background-color: rgb(23 23 23 / 60%);
  }
`,qg=({layoutP:e})=>{const[t,n]=rs(null),[r]=function(e,t){const n=(0,gg.useRef)(t);n.current=t;const[r,i]=(0,gg.useState)(!1);_f(r,-1);return rh(e,(0,gg.useMemo)((()=>{let e,t,r,o,a;return{lockCursorTo:"ew-resize",onDragStart(t){i(!0),r=n.current,o=(0,mg.val)(n.current.layoutP.sheet),a=o.getSequence().length,e=(0,mg.val)(r.layoutP.scaledSpace.toUnitSpace)},onDrag(n,r,i){const s=e(n);t&&(t.discard(),t=void 0),t=ye().tempTransaction((({stateEditors:e})=>{e.coreByProject.historic.sheetsById.sequence.setLength(b(y({},o.address),{length:a+s}))}))},onDragEnd(e){i(!1),e?t&&t.commit():t&&t.discard(),t=void 0}}}),[])),[r]}(n,{layoutP:e}),[i,o,a,s]=vd({},(()=>gg.default.createElement(ec,null,gg.default.createElement(Bg,{layoutP:e,onRequestClose:a}))));return Li((()=>{const a=(0,mg.val)(e.sheet),s=(0,mg.val)(e.rightDims.height),l=a.getSequence(),c=l.length,u=c;let d,h,p=(0,mg.val)(e.clippedSpace.fromUnitSpace)(u),f=(0,mg.val)(e.clippedSpace.width);return p>f?(h=0,d=0):(p<0&&(p=0),h=p,d=(f-p)/1e3),gg.default.createElement(gg.default.Fragment,null,i,gg.default.createElement(Ug,{style:{height:s+"px",transform:`translateX(${0===h?-1e3:h}px)`},className:(0,mg.val)(r)?"dragging":""},gg.default.createElement(Hg,null,gg.default.createElement(Gg,y({ref:t,onClick:e=>{o(e,n)}},{[wf]:"hide"}),gg.default.createElement(da,null),gg.default.createElement(ha,null)),gg.default.createElement(Vg,null,"Sequence length:"," ",l.positionFormatter.formatBasic(c)))),gg.default.createElement(Wg,{title:"Length",style:{height:s+"px",transform:`translateX(${h}px) scale(${d}, 1)`}}))}),[e,t,r,i])},$g=S(n(771)),Xg=S(n(294)),Kg=S(n(804)),Yg=Kg.default.div`
  position: absolute;
  top: 16px;
  font-size: ${Eg.stampFontSize};
  color: ${Eg.fullUnitStampColor};
  text-align: center;
  transform: translateX(-50%);
  background: ${kg};
  padding: 1px 8px;
  font-variant-numeric: tabular-nums;
  pointer-events: none;
  z-index: ${()=>kv.currentFrameStamp};
`,Zg=Kg.default.div`
  position: absolute;
  top: 5px;
  left: -0px;
  bottom: 0;
  width: 0.5px;
  background: rgba(100, 100, 100, 0.2);
  pointer-events: none;
`,Jg=Xg.default.memo((({layoutP:e})=>{const[t,n]=Di((0,yf.useContext)(bf).currentD),r=Di(e.clippedSpace.fromUnitSpace),{sequence:i,formatter:o,clippedSpaceWidth:a}=Li((()=>{const t=(0,$g.val)(e.sheet).getSequence(),n=(0,$g.val)(e.clippedSpace.width);return{sequence:t,formatter:t.positionFormatter,clippedSpaceWidth:n}}),[e]);if(-1==t)return Xg.default.createElement(Xg.default.Fragment,null);const s=n===qp.free?i.closestGridPosition(t):t,l=r(s),c=l>=0&&l<=a;return Xg.default.createElement(Xg.default.Fragment,null,Xg.default.createElement(Yg,{style:{opacity:c?1:0,transform:`translate3d(calc(${l}px - 50%), 0, 0)`}},o.formatForPlayhead(s)),Xg.default.createElement(Zg,{posType:n,style:{opacity:c?1:0,transform:`translate3d(${l}px, 0, 0)`}}))})),Qg=S(n(771)),ev=S(n(294)),tv=S(n(804)),nv=tv.default.div`
  --threadHeight: 6px;
  --bg-inactive: #32353b;
  --bg-active: #5b5c5d;
  position: absolute;
  height: 0;
  width: 100%;
  left: 12px;
  /* bottom: 8px; */
  ${Ho};
  z-index: ${()=>kv.horizontalScrollbar};
`,rv=tv.default.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--threadHeight);
`,iv=tv.default.div`
  position: absolute;
  height: 5px;
  background: var(--bg-inactive);
  cursor: ew-resize;
  z-index: 2;

  &:hover,
  &:active {
    background: var(--bg-active);
  }

  &:after {
    ${Uo("absolute","-4px")};
    display: block;
    content: ' ';
  }
`,ov=tv.default.div`
  position: absolute;
  height: 5px;
  width: 7px;
  left: 0;
  z-index: 2;
  top: 0;
  bottom: 0;
  display: block;

  &:hover:before {
    background: var(--bg-active);
  }

  &:before {
    ${Uo("absolute","0")};
    display: block;
    content: ' ';
    background: var(--bg-inactive);
    border-radius: 0 2px 2px 0;
  }

  &:after {
    ${Uo("absolute","-4px")};
    display: block;
    content: ' ';
  }
`,av=(0,tv.default)(ov)`
  left: calc(-1 * 7px);
  cursor: w-resize;
  &:before {
    transform: scaleX(-1);
  }
`,sv=(0,tv.default)(ov)`
  cursor: e-resize;
  left: 0px;
`,lv=tv.default.div`
  display: ${e=>e.active?"block":"none"};
  position: absolute;
  top: -20px;
  left: 4px;
  padding: 0 4px;
  transform: translateX(-50%);
  background: #131d1f;
  border-radius: 4px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;

  ${av}:hover &,
  ${sv}:hover &,
  ${iv}:hover ~ ${av} &,
  ${iv}:hover ~ ${sv} & {
    display: block;
  }
`,cv=({layoutP:e})=>{const t=(0,ev.useCallback)((e=>e.toFixed(2)),[]),n=(0,ev.useMemo)((()=>(0,Qg.prism)((()=>{const t=(0,Qg.val)(e.rightDims.width)-25,n=(0,Qg.val)(e.clippedSpace.range),r=(0,Qg.val)(e.sheet).getSequence().length,i=Math.max(n.end,r);return{rightWidth:t,clippedSpaceRange:n,sequenceLength:r,assumedLengthOfSequence:i,rangeStartX:n.start/i*t,rangeEndX:n.end/i*t,bottom:(0,Qg.val)(e.horizontalScrollbarDims.bottom)}}))),[e]),{rangeStartX:r,rangeEndX:i,clippedSpaceRange:o,bottom:a}=Di(n),[s,l]=(0,ev.useState)("nothing"),c=(0,ev.useMemo)((()=>{let t=(0,Qg.val)(n);const r=e=>e/t.rightWidth*t.assumedLengthOfSequence;return{onDragStart(){t=(0,Qg.val)(n)},onDragEnd(){l("nothing")},dragRange:n=>{l("both");const i=r(n),o=yi(t.clippedSpaceRange,(e=>e+i));(0,Qg.val)(e.clippedSpace.setRange)(o)},dragRangeStart:n=>{l("start");const i=r(n),o={start:t.clippedSpaceRange.start+i,end:t.clippedSpaceRange.end};o.start>o.end-1&&(o.start=o.end-1),o.start<=0&&(o.start=0),(0,Qg.val)(e.clippedSpace.setRange)(o)},dragRangeEnd:n=>{l("end");const i=r(n),o={start:t.clippedSpaceRange.start,end:t.clippedSpaceRange.end+i};o.end<o.start+1&&(o.end=o.start+1),o.end>=t.assumedLengthOfSequence&&(o.end=t.assumedLengthOfSequence),(0,Qg.val)(e.clippedSpace.setRange)(o)}}}),[e,n]);return ev.default.createElement(nv,y({style:{bottom:a+8+"px"}},{[wf]:"hide"}),ev.default.createElement(rv,null,ev.default.createElement(Fu,{onDragStart:c.onDragStart,onDragEnd:c.onDragEnd,onDrag:c.dragRange,lockCursorTo:"ew-resize"},ev.default.createElement(iv,{style:{width:i-r+"px",transform:`translate3d(${r}px, 0, 0)`}})),ev.default.createElement(Fu,{onDragStart:c.onDragStart,onDrag:c.dragRangeStart,lockCursorTo:"w-resize"},ev.default.createElement(av,{style:{transform:`translate3d(${r}px, 0, 0)`}},ev.default.createElement(lv,{active:"both"===s||"start"===s},t(o.start)))),ev.default.createElement(Fu,{onDragStart:c.onDragStart,onDrag:c.dragRangeEnd,lockCursorTo:"e-resize"},ev.default.createElement(sv,{style:{transform:`translate3d(${i}px, 0, 0)`}},ev.default.createElement(lv,{active:"both"===s||"end"===s},t(o.end))))))},uv=S(n(294)),dv=S(n(804)).default.div`
  position: absolute;
  inset: ${e=>-1*e.room}px;
`,hv=e=>uv.default.createElement(dv,{room:e.room}),pv=S(n(771)),fv=S(n(294)),mv=S(n(804)),gv=mv.default.div`
  --thumbColor: #00e0ff;
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  z-index: ${()=>kv.playhead};
  pointer-events: none;

  display: ${e=>e.isVisible?"block":"none"};
`,vv=mv.default.div`
  position: absolute;
  top: 8px;
  width: 0;
  height: calc(100% - 8px);
  border-left: 1px solid #27e0fd;
  z-index: 10;

  #pointer-root.draggingPositionInSequenceEditor &:not(.seeking) {
    pointer-events: auto;

    &:after {
      position: absolute;
      inset: -8px;
      display: block;
      content: ' ';
    }
  }
`,yv=mv.default.div`
  background-color: var(--thumbColor);
  position: absolute;
  width: 5px;
  height: 13px;
  top: -4px;
  left: -2px;
  z-index: 11;
  cursor: ew-resize;
  ${Ho};

  #pointer-root.draggingPositionInSequenceEditor &:not(.seeking) {
    pointer-events: auto;
  }

  &:before {
    position: absolute;
    display: block;
    content: ' ';
    left: -2px;
    width: 0;
    height: 0;
    border-bottom: 4px solid #1f2b2b;
    border-left: 2px solid transparent;
  }

  &:after {
    position: absolute;
    display: block;
    content: ' ';
    right: -2px;
    width: 0;
    height: 0;
    border-bottom: 4px solid #1f2b2b;
    border-right: 2px solid transparent;
  }
`,bv=mv.default.div`
  position: absolute;
  left: 1px;
  right: 1px;
  top: 13px;
  border-top: 3px solid var(--thumbColor);
  border-right: 1px solid transparent;
  border-left: 1px solid transparent;
  pointer-events: none;

  &:before {
    position: absolute;
    display: block;
    content: ' ';
    top: -4px;
    left: -2px;
    height: 8px;
    width: 2px;
    background: none;
    border-radius: 0 100% 0 0;
    border-top: 1px solid var(--thumbColor);
    border-right: 1px solid var(--thumbColor);
  }

  &:after {
    position: absolute;
    display: block;
    content: ' ';
    top: -4px;
    right: -2px;
    height: 8px;
    width: 2px;
    background: none;
    border-radius: 100% 0 0 0;
    border-top: 1px solid var(--thumbColor);
    border-left: 1px solid var(--thumbColor);
  }
`,xv=mv.default.div`
  display: none;
  position: absolute;
  top: -20px;
  left: 4px;
  padding: 0 2px;
  transform: translateX(-50%);
  background: #1a1a1a;
  border-radius: 4px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  ${yv}:hover &, ${gv}.seeking & {
    display: block;
  }
`,_v=({layoutP:e})=>{const[t,n]=rs(null),r=(0,fv.useMemo)((()=>{const t=(0,pv.val)(e.seeker.setIsSeeking);let r,i,o=0;return{onDragStart(){r=(0,pv.val)(e.sheet).getSequence(),o=r.position,i=(0,pv.val)(e.scaledSpace.toUnitSpace),t(!0)},onDrag(e,t,a){const s=i(e);let l=rr(o+s,0,r.length);const c=a.composedPath().find((e=>e instanceof Element&&e!==n&&e.hasAttribute("data-pos")));if(c){const e=parseFloat(c.getAttribute("data-pos"));isFinite(e)&&(l=e)}r.position=l},onDragEnd(){t(!1)},lockCursorTo:"ew-resize"}}),[]);return rh(n,r),_f(Di(e.seeker.isSeeking),-1),Li((()=>{const n=(0,pv.val)(e.seeker.isSeeking),r=(0,pv.val)(e.sheet).getSequence(),i=r.positionDerivation.getValue(),o=(0,pv.val)(e.clippedSpace.fromUnitSpace)(i),a=o>=0&&o<=(0,pv.val)(e.clippedSpace.width);return fv.default.createElement(gv,y({isVisible:a,style:{transform:`translate3d(${o}px, 0, 0)`},className:n?"seeking":""},{[wf]:"hide"}),fv.default.createElement(yv,{ref:t,"data-pos":i.toFixed(3)},fv.default.createElement(hv,{room:8}),fv.default.createElement(bv,null),fv.default.createElement(xv,null,r.positionFormatter.formatForPlayhead(r.closestGridPosition(i)))),fv.default.createElement(vv,{"data-pos":i.toFixed(3),className:n?"seeking":""}))}),[e])},wv=fg.default.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: ${()=>kv.rightOverlay};
  overflow: visible;
  pointer-events: none;
`,Sv=({layoutP:e})=>Li((()=>{const t=(0,hg.val)(e.rightDims.width);return pg.default.createElement(wv,{style:{width:t+"px"}},pg.default.createElement(_v,{layoutP:e}),pg.default.createElement(cv,{layoutP:e}),pg.default.createElement(Jg,{layoutP:e}),pg.default.createElement(Ig,{layoutP:e}),pg.default.createElement(qg,{layoutP:e}))}),[e]),Ev=S(n(771)),Mv=S(n(294)),Tv=S(n(804)).default.button`
  outline: none;
  background-color: #1c1d21;
  border: 1px solid #191919;
  border-radius: 2px;
  display: flex;
  bottom: 14px;
  right: 8px;
  z-index: 1;
  position: absolute;

  padding: 4px 8px;
  display: flex;
  color: #656d77;
  line-height: 20px;
  font-size: 10px;

  &:hover {
    color: white;
  }

  & > svg {
    transition: transform 0.3s;
    transform: rotateZ(0deg);
  }

  &:hover > svg {
    transform: rotateZ(-20deg);
  }

  &.open > svg {
    transform: rotateZ(-180deg);
  }

  &.open:hover > svg {
    transform: rotateZ(-160deg);
  }
`,Pv=({layoutP:e})=>{const t=Di(e.graphEditorDims.isOpen),n=(0,Mv.useCallback)((()=>{(0,Ev.val)(e.sheet);const t=(0,Ev.val)(e.graphEditorDims.isOpen);ye().transaction((({stateEditors:e})=>{e.studio.historic.panels.sequenceEditor.graphEditor.setIsOpen({isOpen:!t})}))}),[e]);return Mv.default.createElement(Tv,y({onClick:n,title:"Toggle graph editor",className:t?"open":""},{[wf]:"hide"}),Mv.default.createElement(va,null))},Cv=(0,Vh.default)(Th)`
  z-index: ${Wo.sequenceEditorPanel};
  box-shadow: 2px 2px 0 rgb(0 0 0 / 11%);
`,Av=Vh.default.div`
  background-color: rgba(40, 43, 47, 0.99);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  pointer-events: none;
`,kv=(()=>{const e={rightBackground:0,scrollableArea:0,rightOverlay:0,lengthIndicatorCover:0,lengthIndicatorStrip:0,playhead:0,currentFrameStamp:0,horizontalScrollbar:0};let t=-1;for(const n of Object.keys(e))e[n]=t,t++;return e})(),Rv=(0,Vh.default)(ah)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`,Iv={edges:{left:{from:"screenLeft",distance:.1},right:{from:"screenRight",distance:.2},top:{from:"screenBottom",distance:.4},bottom:{from:"screenBottom",distance:.01}}},Ov={width:800,height:200},Lv=()=>{const{dims:e}=Xd();return Li((()=>{const t=Uh.prism.memo("panelSize",(()=>{const t=e.width,n=e.height;return{width:t,height:n,widthWithoutBorder:t-2,heightWithoutBorder:n-4,screenX:e.left,screenY:e.top}}),[e]),n=Ai(ka().filter((e=>Se(e)||Me(e))).map((e=>Me(e)?e.sheet:e)));if(1!==Ai(n.map((e=>e.template))).length)return Hh.default.createElement(Hh.default.Fragment,null);const r=n[0];if(!r)return Hh.default.createElement(Hh.default.Fragment,null);const i=Fh("panelSizeP",t).pointer,o=Uh.prism.memo("key",(()=>JSON.stringify(r.address)),[r]),a=Uh.prism.memo("layout",(()=>dg(r,i)),[r,i]).getValue();if(0===(0,Uh.val)(a.tree.children).length)return Hh.default.createElement(Hh.default.Fragment,null);const s=Uh.prism.memo("containerRef",jv,[]),l=(0,Uh.val)(a.graphEditorDims.isAvailable),c=(0,Uh.val)(a.graphEditorDims.isOpen);return Hh.default.createElement(Cv,{ref:s},Hh.default.createElement(Av,{style:{width:`${(0,Uh.val)(a.leftDims.width)}px`}}),Hh.default.createElement(Sf,{layoutP:a},Hh.default.createElement(Dv,{layoutP:a}),Hh.default.createElement(og,{key:o+"-dopeSheet",layoutP:a}),c&&Hh.default.createElement(Um,{key:o+"-graphEditor",layoutP:a}),l&&Hh.default.createElement(Pv,{layoutP:a}),Hh.default.createElement(Sv,{layoutP:a})))}),[e])},Dv=({layoutP:e})=>Li((()=>{const t=(0,Uh.val)(e.sheet);return Hh.default.createElement(Rv,{style:{width:(0,Uh.val)(e.leftDims.width)}},Hh.default.createElement(Yo,null,Hh.default.createElement($o,null,t.address.sheetId," "),Hh.default.createElement(Xo,null,":"," "),Hh.default.createElement($o,null,t.address.sheetInstanceId," "),Hh.default.createElement(Xo,null," ",">"," "),Hh.default.createElement($o,null,"Sequence")))}),[e]),Nv=e=>Hh.default.createElement(Kd,{panelId:"sequenceEditor",defaultPosition:Iv,minDims:Ov},Hh.default.createElement(Lv,null)),jv=()=>{let e=null;const t={passive:!1,capture:!1},n=e=>{Math.abs(e.deltaY)<Math.abs(e.deltaX)&&(e.preventDefault(),e.stopPropagation())};return r=>{e!==r&&e&&e.removeEventListener("wheel",n,t),e=r,r&&r.addEventListener("wheel",n,t)}},zv=()=>{const e=Di(ye().paneManager.allPanesD),t=Object.entries(e).map((([e,t])=>Fd.default.createElement(zh,{key:`pane-${e}`,paneInstance:t})));return Fd.default.createElement(Fd.default.Fragment,null,t,Fd.default.createElement(fc,null),Fd.default.createElement(Bd,null),Fd.default.createElement(Nv,null))},Bv=S(n(294)),Fv=S(n(804)).default.div`
  --colors-panel-1: red;
`,Uv=e=>Bv.default.createElement(Fv,null,e.children),Hv=S(n(294)),Vv=S(n(804)),Gv=Vv.default.div`
  position: fixed;
  z-index: ${Wo.toolbar};

  top: 12px;
  right: 12px;
  left: 12px;
  height: 36px;
  pointer-events: none;

  display: flex;
  gap: 1rem;
  justify-content: center;
`,Wv=Vv.default.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: 4px;
  padding: 6px 6px;

  ${Ho};

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(4px);
  }
`,qv=e=>{const t=[],n=Di(ye().atomP.ephemeral.extensions.byId);for(const[,e]of Object.entries(n))e&&e.globalToolbar&&t.push(Hv.default.createElement(e.globalToolbar.component,{key:"extensionToolbar-"+e.id}));return 0===t.length?null:Hv.default.createElement(Gv,null,Hv.default.createElement(Wv,null,t))},$v=S(n(294)),Xv=navigator&&navigator.platform.toUpperCase().indexOf("MAC")>=0;var Kv=Wi.createGlobalStyle`
  :host {
    contain: strict;
    all: initial;
    color: white;
    font: 11px -apple-system, BlinkMacSystemFont, Segoe WPC, Segoe Editor,
      HelveticaNeue-Light, Ubuntu, Droid Sans, sans-serif;
  }

  * {
    padding: 0;
    margin: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    list-style: none;
  }
`,Yv=(0,Wi.default)((e=>{var t,n,r,i;const[o,a]=(0,Zd.useState)([]),s=(0,Zd.useMemo)((()=>({getLock:(e,t)=>{const n={className:e,cursor:t};return a((e=>[...e,n])),()=>{a((e=>e.filter((e=>e!==n))))}}})),[]);return Zd.default.createElement(th.Provider,{value:s},Zd.default.createElement(Qd,{id:"pointer-root",className:(null!=(n=null==(t=o[0])?void 0:t.className)?n:"normal")+" "+e.className},Zd.default.createElement(eh,{style:{cursor:null!=(i=null==(r=o[0])?void 0:r.cursor)?i:""}},e.children)))}))`
  z-index: 50;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  &.invisible {
    pointer-events: none !important;
    opacity: 0;
    transform: translateX(1000000px);
  }
`,Zv=Wi.default.div`
  z-index: 51;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  pointer-events: none;
`;function Jv(){const e=ye(),[t,n]=rs(void 0),[r,i]=rs(void 0);!function(){const e=ye();(0,$v.useEffect)((()=>{const t=t=>{const n=t.composedPath()[0];if(!n||"INPUT"!==n.tagName&&"TEXTAREA"!==n.tagName){if("z"===t.key||"Z"===t.key||"KeyZ"===t.code){if(!(e=>Xv?!0===e.metaKey:!0===e.ctrlKey)(t))return;!0===t.shiftKey?e.redo():e.undo()}else if(" "!==t.key||t.shiftKey||t.metaKey||t.altKey||t.ctrlKey){if(!t.altKey||"\\"!==t.key&&"Backslash"!==t.code&&"IntlBackslash"!==t.code)return;e.transaction((({stateEditors:e,drafts:t})=>{e.studio.ahistoric.setVisibilityState("everythingIsHidden"===t.ahistoric.visibilityState?"everythingIsVisible":"everythingIsHidden")}))}else{const e=function(){const e=Ai(ka().filter((e=>Se(e)||Me(e))).map((e=>Me(e)?e.sheet:e)))[0];if(e)return e.getSequence()}();if(!e)return;e.playing?e.pause():e.play({iterationCount:1e3})}t.preventDefault(),t.stopPropagation()}};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}}),[])}();const o=Di(e.atomP.ahistoric.visibilityState);return(0,Gi.useEffect)((()=>("everythingIsHidden"===o&&console.warn("Theatre Studio is hidden. Use the keyboard shortcut 'alt + \\' to restore the studio, or call studio.ui.restore()."),()=>{})),[o]),Li((()=>{const r=(0,Vi.val)(e.atomP.ahistoric.visibilityState);return(0,Vi.val)(e.atomP.ephemeral.initialised)?Gi.default.createElement(Wi.StyleSheetManager,{disableVendorPrefixes:!0,target:ye().ui.containerShadow},Gi.default.createElement(Gi.default.Fragment,null,Gi.default.createElement(Kv,null),Gi.default.createElement(Uv,null,Gi.default.createElement(Nl.Provider,{value:n},Gi.default.createElement(Ts,null,Gi.default.createElement(Yv,{className:"everythingIsHidden"===r?"invisible":""},Gi.default.createElement(Zv,{ref:t}),Gi.default.createElement(qv,null),Gi.default.createElement(zv,null))))))):null}),[e,t,n])}var Qv=S(n(294)),ey=S(n(834)),ty=S(n(771)),ny=S(n(771));function ry(e){return e}var iy,oy=(e,t=ry)=>{const n=n=>({type:e,payload:t(n)});return n.type=e,n.is=t=>t&&t.type&&t.type===e,n},ay=S(Z()),sy=S(ve()),ly=new Uint8Array(16);function cy(){if(!iy&&!(iy="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return iy(ly)}for(var uy=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,dy=function(e){return"string"==typeof e&&uy.test(e)},hy=[],py=0;py<256;++py)hy.push((py+256).toString(16).substr(1));var fy=function(e,t,n){var r=(e=e||{}).random||(e.rng||cy)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(hy[e[t+0]]+hy[e[t+1]]+hy[e[t+2]]+hy[e[t+3]]+"-"+hy[e[t+4]]+hy[e[t+5]]+"-"+hy[e[t+6]]+hy[e[t+7]]+"-"+hy[e[t+8]]+hy[e[t+9]]+"-"+hy[e[t+10]]+hy[e[t+11]]+hy[e[t+12]]+hy[e[t+13]]+hy[e[t+14]]+hy[e[t+15]]).toLowerCase();if(!dy(n))throw TypeError("Stringified UUID is invalid");return n}(r)},my={replaceHistory:oy("@history/replaceHistory"),startHistoryFromScratch:oy("@history/startHistoryFromScratch"),undo:oy("@history/undo"),redo:oy("@history/redo")},gy={type:"@history/unknownAction",payload:""},vy={maxNumberOfCommits:100};function yy(e){return{currentCommitHash:void 0,commitsByHash:{},listOfCommitHashes:[],innerState:e}}var by,xy,_y={ahistoric:{visibilityState:"everythingIsVisible",theTrigger:{position:{closestCorner:"bottomLeft",distanceFromHorizontalEdge:.02,distanceFromVerticalEdge:.02}},coreByProject:{},projects:{stateByProjectId:{}}},historic:{projects:{stateByProjectId:{}},autoKey:!0,coreByProject:{},panelInstanceDesceriptors:{}},ephemeral:{initialised:!1,coreByProject:{},projects:{stateByProjectId:{}},extensions:{byId:{},paneClasses:{}}}},wy=oy("@storeBundle/replacePersistentState",(e=>e)),Sy=oy("@storeBundle/reduceParts",(e=>e)),Ey={historic:my,replacePersistentState:wy,reduceParts:Sy},My=oy("@storeBundle/setInnerHistoricState",(e=>e)),Ty=((e,t=vy)=>{const n=yy(e(void 0,gy));return function(r,i){return my.startHistoryFromScratch.is(i)?yy(e(void 0,i.payload)):my.replaceHistory.is(i)?i.payload:my.undo.is(i)?r?function(e){if(void 0===e.currentCommitHash)return e;const t=e.listOfCommitHashes.findIndex((t=>t===e.currentCommitHash));if(-1===t)throw new Error("This should never happen");const n=e.commitsByHash[e.currentCommitHash],r=(0,sy.default)(e.innerState,n.backwardDiff),i=t-1,o=-1===i?void 0:e.listOfCommitHashes[i];return b(y({},e),{currentCommitHash:o,innerState:r})}(r):n:my.redo.is(i)?r?function(e){if(0===e.listOfCommitHashes.length)return e;const t=e.listOfCommitHashes.findIndex((t=>t===e.currentCommitHash));if(t===e.listOfCommitHashes.length-1)return e;const n=t+1,r=e.listOfCommitHashes[n],i=e.commitsByHash[r],o=(0,sy.default)(e.innerState,i.forwardDiff);return b(y({},e),{currentCommitHash:r,innerState:o})}(r):n:r?function(e,t,n){if(t===e.innerState)return e;const r=(i=e.innerState,o=t,{forwardDiff:ay.default.diff(i,o,{invertible:!1}),backwardDiff:ay.default.diff(o,i,{invertible:!1}),timestamp:Date.now(),hash:fy()});var i,o;if(0===r.forwardDiff.length)return e;const a=li(e.listOfCommitHashes),s={currentCommitHash:r.hash,commitsByHash:y({},e.commitsByHash),listOfCommitHashes:[...e.listOfCommitHashes],innerState:t};if(e.currentCommitHash!==a){const t=e.listOfCommitHashes.findIndex((t=>t===e.currentCommitHash));e.listOfCommitHashes.slice(t+1).forEach((e=>{delete s.commitsByHash[e]})),s.listOfCommitHashes.splice(t+1,s.listOfCommitHashes.length)}if(s.listOfCommitHashes.push(r.hash),s.commitsByHash[r.hash]=r,s.listOfCommitHashes.length>n.maxNumberOfCommits){const e=s.listOfCommitHashes.length-n.maxNumberOfCommits;s.listOfCommitHashes.slice(0,e).forEach((e=>{delete s.commitsByHash[e]})),s.listOfCommitHashes.splice(0,e)}return s}(r,e(r.innerState,i),t):yy(e(void 0,i))}})(((e=_y.historic,t)=>My.is(t)?t.payload:e)),Py=(e,t)=>{if(wy.is(t)){const{historic:n,ahistoric:r}=t.payload;return{$persistent:{historic:n,ahistoric:r},ephemeral:(null==e?void 0:e.ephemeral)||_y.ephemeral}}if(e){let{historic:n,ahistoric:r}=e.$persistent,{ephemeral:i}=e;if(Sy.is(t)){const o={historic:e.$persistent.historic.innerState,ahistoric:e.$persistent.ahistoric,ephemeral:e.ephemeral},a=t.payload(o);if(a===o)return e;n.innerState!==a.historic&&(n=Ty(n,My(a.historic))),r=a.ahistoric,i=a.ephemeral}else{const r=Ty(n,t);if(r===n)return e;n=r}return{$persistent:n===e.$persistent.historic&&r===e.$persistent.ahistoric?e.$persistent:{historic:n,ahistoric:r},ephemeral:i}}return{$persistent:{historic:Ty(void 0,{}),ahistoric:_y.ahistoric},ephemeral:_y.ephemeral}},Cy=oy("@history/pushTempAction",(e=>e)),Ay=oy("@history/discardTempAction",(e=>e)),ky=oy("@history/commitTempAction",(e=>e)),Ry=0,Iy=(e,t)=>{if(e){let n,{tempActions:r,permanent:i}=e.$temps;if(Cy.is(t))r=[...r,t];else if(ky.is(t)){const e=r.find((e=>e.payload.id===t.payload));e?(n=e.payload.originalAction,r=r.filter((e=>e.payload.id!==t.payload))):_e.error(`Comitting temp action group ${t.payload} isn't possible as this group doesn't exist`)}else Ay.is(t)?r=r.filter((e=>e.payload.id!==t.payload)):n=t;n&&(i=Py(e.$temps.permanent,n));let o={historic:i.$persistent.historic.innerState,ahistoric:i.$persistent.ahistoric,ephemeral:i.ephemeral};for(const e of r)o=e.payload.originalAction.payload(o);return y({$temps:{tempActions:r,permanent:i},$persistent:i.$persistent},o)}{const e=Py(void 0,t);return{$temps:{permanent:e,tempActions:[]},$persistent:e.$persistent,historic:e.$persistent.historic.innerState,ahistoric:e.$persistent.ahistoric,ephemeral:e.ephemeral}}},Oy=(e=21)=>{let t="",n=e;for(;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t};function Ly(){return Oy(10)}function Dy(e,t){if("object"!=typeof e||null===e)return;if(0===t.length){const t=Object.keys(e);for(const n of t)delete e[n];return}const n=t.slice(0,t.length-1);let r=e;const i=new WeakMap;for(const e of n){const t=r,n=t[e];if("object"!=typeof n||null===n)return;i.set(n,t),r=n}const o=t.slice().reverse();for(const e of o){if(delete r[e],0!==Object.keys(r).length)return;r=i.get(r)}}function Ny(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=_b[e],o=i?"function"==typeof i?i.apply(null,n):i:"unknown error nr: "+e;throw Error("[Immer] "+o)}function jy(e){return!!e&&!!e[xb]}function zy(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===wb}(e)||Array.isArray(e)||!!e[bb]||!!e.constructor[bb]||Vy(e)||Gy(e))}function By(e,t,n){void 0===n&&(n=!1),0===Fy(e)?(n?Object.keys:Sb)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function Fy(e){var t=e[xb];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Vy(e)?2:Gy(e)?3:0}function Uy(e,t){return 2===Fy(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Hy(e,t,n){var r=Fy(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function Vy(e){return mb&&e instanceof Map}function Gy(e){return gb&&e instanceof Set}function Wy(e){return e.o||e.t}function qy(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Eb(e);delete t[xb];for(var n=Sb(t),r=0;r<n.length;r++){var i=n[r],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function $y(e,t){return void 0===t&&(t=!1),Ky(e)||jy(e)||!zy(e)||(Fy(e)>1&&(e.set=e.add=e.clear=e.delete=Xy),Object.freeze(e),t&&By(e,(function(e,t){return $y(t,!0)}),!0)),e}function Xy(){Ny(2)}function Ky(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function Yy(e){var t=Mb[e];return t||Ny(18,e),t}function Zy(){return xy||Ny(0),xy}function Jy(e,t){t&&(Yy("Patches"),e.u=[],e.s=[],e.v=t)}function Qy(e){eb(e),e.p.forEach(nb),e.p=null}function eb(e){e===xy&&(xy=e.l)}function tb(e){return xy={p:[],l:xy,h:e,m:!0,_:0}}function nb(e){var t=e[xb];0===t.i||1===t.i?t.j():t.O=!0}function rb(e,t){t._=t.p.length;var n=t.p[0],r=void 0!==e&&e!==n;return t.h.g||Yy("ES5").S(t,e,r),r?(n[xb].P&&(Qy(t),Ny(4)),zy(e)&&(e=ib(t,e),t.l||ab(t,e)),t.u&&Yy("Patches").M(n[xb],e,t.u,t.s)):e=ib(t,n,[]),Qy(t),t.u&&t.v(t.u,t.s),e!==yb?e:void 0}function ib(e,t,n){if(Ky(t))return t;var r=t[xb];if(!r)return By(t,(function(i,o){return ob(e,r,t,i,o,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return ab(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=qy(r.k):r.o;By(3===r.i?new Set(i):i,(function(t,o){return ob(e,r,i,t,o,n)})),ab(e,i,!1),n&&e.u&&Yy("Patches").R(r,n,e.u,e.s)}return r.o}function ob(e,t,n,r,i,o){if(i===n&&Ny(5),jy(i)){var a=ib(e,i,o&&t&&3!==t.i&&!Uy(t.D,r)?o.concat(r):void 0);if(Hy(n,r,a),!jy(a))return;e.m=!1}if(zy(i)&&!Ky(i)){if(!e.h.F&&e._<1)return;ib(e,i),t&&t.A.l||ab(e,i)}}function ab(e,t,n){void 0===n&&(n=!1),e.h.F&&e.m&&$y(t,n)}function sb(e,t){var n=e[xb];return(n?Wy(n):e)[t]}function lb(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function cb(e){e.P||(e.P=!0,e.l&&cb(e.l))}function ub(e){e.o||(e.o=qy(e.t))}function db(e,t,n){var r=Vy(t)?Yy("MapSet").N(t,n):Gy(t)?Yy("MapSet").T(t,n):e.g?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:Zy(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},i=r,o=Tb;n&&(i=[r],o=Pb);var a=Proxy.revocable(i,o),s=a.revoke,l=a.proxy;return r.k=l,r.j=s,l}(t,n):Yy("ES5").J(t,n);return(n?n.A:Zy()).p.push(r),r}function hb(e){return jy(e)||Ny(22,e),function e(t){if(!zy(t))return t;var n,r=t[xb],i=Fy(t);if(r){if(!r.P&&(r.i<4||!Yy("ES5").K(r)))return r.t;r.I=!0,n=pb(t,i),r.I=!1}else n=pb(t,i);return By(n,(function(t,i){r&&function(e,t){return 2===Fy(e)?e.get(t):e[t]}(r.t,t)===i||Hy(n,t,e(i))})),3===i?new Set(n):n}(e)}function pb(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return qy(e)}var fb="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),mb="undefined"!=typeof Map,gb="undefined"!=typeof Set,vb="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,yb=fb?Symbol.for("immer-nothing"):((by={})["immer-nothing"]=!0,by),bb=fb?Symbol.for("immer-draftable"):"__$immer_draftable",xb=fb?Symbol.for("immer-state"):"__$immer_state",_b=("undefined"!=typeof Symbol&&Symbol.iterator,{0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(e){return"Cannot apply patch, path doesn't resolve: "+e},16:'Sets cannot have "replace" patches.',17:function(e){return"Unsupported patch operation: "+e},18:function(e){return"The plugin for '"+e+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+e+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(e){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+e+"'"},22:function(e){return"'current' expects a draft, got: "+e},23:function(e){return"'original' expects a draft, got: "+e},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"}),wb=""+Object.prototype.constructor,Sb="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Eb=Object.getOwnPropertyDescriptors||function(e){var t={};return Sb(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},Mb={},Tb={get:function(e,t){if(t===xb)return e;var n,r,i,o=Wy(e);if(!Uy(o,t))return n=e,(i=lb(o,t))?"value"in i?i.value:null===(r=i.get)||void 0===r?void 0:r.call(n.k):void 0;var a=o[t];return e.I||!zy(a)?a:a===sb(e.t,t)?(ub(e),e.o[t]=db(e.A.h,a,e)):a},has:function(e,t){return t in Wy(e)},ownKeys:function(e){return Reflect.ownKeys(Wy(e))},set:function(e,t,n){var r=lb(Wy(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=sb(Wy(e),t),o=null==i?void 0:i[xb];if(o&&o.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,i)&&(void 0!==n||Uy(e.t,t)))return!0;ub(e),cb(e)}return e.o[t]===n&&"number"!=typeof n&&(void 0!==n||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return void 0!==sb(e.t,t)||t in e.t?(e.D[t]=!1,ub(e),cb(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=Wy(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){Ny(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ny(12)}},Pb={};By(Tb,(function(e,t){Pb[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),Pb.deleteProperty=function(e,t){return isNaN(parseInt(t))&&Ny(13),Tb.deleteProperty.call(this,e[0],t)},Pb.set=function(e,t,n){return"length"!==t&&isNaN(parseInt(t))&&Ny(14),Tb.set.call(this,e[0],t,n,e[0])};var Cb,Ab,kb=function(){function e(e){var t=this;this.g=vb,this.F=!0,this.produce=function(e,n,r){if("function"==typeof e&&"function"!=typeof n){var i=n;n=e;var o=t;return function(e){var t=this;void 0===e&&(e=i);for(var r=arguments.length,a=Array(r>1?r-1:0),s=1;s<r;s++)a[s-1]=arguments[s];return o.produce(e,(function(e){var r;return(r=n).call.apply(r,[t,e].concat(a))}))}}var a;if("function"!=typeof n&&Ny(6),void 0!==r&&"function"!=typeof r&&Ny(7),zy(e)){var s=tb(t),l=db(t,e,void 0),c=!0;try{a=n(l),c=!1}finally{c?Qy(s):eb(s)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(e){return Jy(s,r),rb(e,s)}),(function(e){throw Qy(s),e})):(Jy(s,r),rb(a,s))}if(!e||"object"!=typeof e){if((a=n(e))===yb)return;return void 0===a&&(a=e),t.F&&$y(a,!0),a}Ny(21,e)},this.produceWithPatches=function(e,n){return"function"==typeof e?function(n){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return t.produceWithPatches(n,(function(t){return e.apply(void 0,[t].concat(i))}))}:[t.produce(e,n,(function(e,t){r=e,i=t})),r,i];var r,i},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){zy(e)||Ny(8),jy(e)&&(e=hb(e));var t=tb(this),n=db(this,e,void 0);return n[xb].C=!0,eb(t),n},t.finishDraft=function(e,t){var n=e&&e[xb];n&&n.C||Ny(9),n.I&&Ny(10);var r=n.A;return Jy(r,t),rb(void 0,r)},t.setAutoFreeze=function(e){this.F=e},t.setUseProxies=function(e){e&&!vb&&Ny(20),this.g=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var i=Yy("Patches").$;return jy(e)?i(e,t):this.produce(e,(function(e){return i(e,t.slice(n+1))}))},e}(),Rb=new kb,Ib=(Rb.produce,Rb.produceWithPatches.bind(Rb),Rb.setAutoFreeze.bind(Rb),Rb.setUseProxies.bind(Rb),Rb.applyPatches.bind(Rb),Rb.createDraft.bind(Rb)),Ob=Rb.finishDraft.bind(Rb),Lb=e=>(Cb=e,Ab),Db=()=>{if(void 0===Cb)throw new Error("Calling stateEditors outside of a transaction is not allowed.");return Cb};function Nb(){let e,t;const n=new Promise(((n,i)=>{e=e=>{n(e),r.status="resolved"},t=e=>{i(e),r.status="rejected"}})),r={resolve:e,reject:t,promise:n,status:"pending"};return r}!function(e){let t,n;!function(t){let n,r,i;!function(t){let n,r,i;(n=t.panelPositions||(t.panelPositions={})).setPanelPosition=function(e){const t=Db().historic;null!=t.panelPositions||(t.panelPositions={}),t.panelPositions[e.panelId]=e.position},function(t){let n,r;t._ensure=function(){var e;return null!=(e=Db().historic).panels||(e.panels={}),Db().historic.panels},function(t){let n;var r;t._ensure=function(){const t=e.studio.historic.panels._ensure();return null!=t.outlinePanel||(t.outlinePanel={}),t.outlinePanel},(r=n=t.selection||(t.selection={})).set=function(n){const r=[];for(const t of Ai(n))we(t)?r.push(y({type:"Project"},t.address)):Se(t)?(r.push(y({type:"Sheet"},t.template.address)),e.studio.historic.projects.stateByProjectId.stateBySheetId.setSelectedInstanceId(t.address)):Ee(t)?r.push(y({type:"Sheet"},t.address)):Me(t)?(r.push(y({type:"SheetObject"},t.template.address)),e.studio.historic.projects.stateByProjectId.stateBySheetId.setSelectedInstanceId(t.sheet.address)):Te(t)&&r.push(y({type:"SheetObject"},t.address));t._ensure().selection=r},r.unset=function(){t._ensure().selection=[]}}(n=t.outline||(t.outline={})),function(t){let n;t._ensure=function(){const t=e.studio.historic.panels._ensure();return null!=t.sequenceEditor||(t.sequenceEditor={}),t.sequenceEditor},(n=t.graphEditor||(t.graphEditor={})).setIsOpen=function(e){(function(){const e=t._ensure();return null!=e.graphEditor||(e.graphEditor={height:.5,isOpen:!1}),e.graphEditor}()).isOpen=e.isOpen}}(r=t.sequenceEditor||(t.sequenceEditor={}))}(r=t.panels||(t.panels={})),function(t){let n;!function(t){let n;t._ensure=function(e){const t=Db().historic;return t.projects.stateByProjectId[e.projectId]||(t.projects.stateByProjectId[e.projectId]={stateBySheetId:{}}),t.projects.stateByProjectId[e.projectId]},function(t){let n;var r;t._ensure=function(t){const n=e.studio.historic.projects.stateByProjectId._ensure(t);return n.stateBySheetId[t.sheetId]||(n.stateBySheetId[t.sheetId]={selectedInstanceId:void 0,sequenceEditor:{selectedPropsByObject:{}}}),n.stateBySheetId[t.sheetId]},t.setSelectedInstanceId=function(t){e.studio.historic.projects.stateByProjectId.stateBySheetId._ensure(t).selectedInstanceId=t.sheetInstanceId},(r=n=t.sequenceEditor||(t.sequenceEditor={})).addPropToGraphEditor=function(e){const{selectedPropsByObject:n}=t._ensure(e).sequenceEditor;n[e.objectKey]||(n[e.objectKey]={});const r=n[e.objectKey],i=up(e.pathToProp),o=new Set(Object.keys(zm));for(const[e,t]of Object.entries(hb(n)))for(const[e,n]of Object.entries(t))o.delete(n);const a=o.size>0?o.values().next().value:Object.keys(zm)[0];r[i]=a},r.removePropFromGraphEditor=function(e){const{selectedPropsByObject:n}=t._ensure(e).sequenceEditor;if(!n[e.objectKey])return;const r=n[e.objectKey],i=up(e.pathToProp);r[i]&&Dy(n,[e.objectKey,i])}}(n=t.stateBySheetId||(t.stateBySheetId={}))}(n=t.stateByProjectId||(t.stateByProjectId={}))}(i=t.projects||(t.projects={}))}(n=t.historic||(t.historic={})),function(t){let n;!function(t){let n;!function(t){let n;t._ensure=function(e){const t=Db().ephemeral;return t.projects.stateByProjectId[e.projectId]||(t.projects.stateByProjectId[e.projectId]={stateBySheetId:{}}),t.projects.stateByProjectId[e.projectId]},function(t){let n;t._ensure=function(t){const n=e.studio.ephemeral.projects.stateByProjectId._ensure(t);return n.stateBySheetId[t.sheetId]||(n.stateBySheetId[t.sheetId]={stateByObjectKey:{}}),n.stateBySheetId[t.sheetId]},function(t){let n;t._ensure=function(t){var n;const r=e.studio.ephemeral.projects.stateByProjectId.stateBySheetId._ensure(t).stateByObjectKey;return null!=r[n=t.objectKey]||(r[n]={}),r[t.objectKey]},function(t){function n(t){const n=e.studio.ephemeral.projects.stateByProjectId.stateBySheetId.stateByObjectKey._ensure(t);return null!=n.valuesBeingScrubbed||(n.valuesBeingScrubbed={}),n.valuesBeingScrubbed}t._ensure=n,t.flag=function(e){Ti(n(e),e.pathToProp,!0)}}(n=t.propsBeingScrubbed||(t.propsBeingScrubbed={}))}(n=t.stateByObjectKey||(t.stateByObjectKey={}))}(n=t.stateBySheetId||(t.stateBySheetId={}))}(n=t.stateByProjectId||(t.stateByProjectId={}))}(n=t.projects||(t.projects={}))}(r=t.ephemeral||(t.ephemeral={})),function(t){let n;t.setVisibilityState=function(e){Db().ahistoric.visibilityState=e},function(t){let n;!function(t){let n;t._ensure=function(e){const t=Db().ahistoric;return t.projects.stateByProjectId[e.projectId]||(t.projects.stateByProjectId[e.projectId]={stateBySheetId:{}}),t.projects.stateByProjectId[e.projectId]},function(t){let n;t._ensure=function(t){const n=e.studio.ahistoric.projects.stateByProjectId._ensure(t);return n.stateBySheetId[t.sheetId]||(n.stateBySheetId[t.sheetId]={}),n.stateBySheetId[t.sheetId]},function(t){let n;t._ensure=function(t){const n=e.studio.ahistoric.projects.stateByProjectId.stateBySheetId._ensure(t);return n.sequence||(n.sequence={}),n.sequence},(n=t.clippedSpaceRange||(t.clippedSpaceRange={})).set=function(t){e.studio.ahistoric.projects.stateByProjectId.stateBySheetId.sequence._ensure(t).clippedSpaceRange=y({},t.range)}}(n=t.sequence||(t.sequence={}))}(n=t.stateBySheetId||(t.stateBySheetId={}))}(n=t.stateByProjectId||(t.stateByProjectId={}))}(n=t.projects||(t.projects={}))}(i=t.ahistoric||(t.ahistoric={}))}(t=e.studio||(e.studio={})),function(t){let n;!function(t){let n,r;(n=t.revisionHistory||(t.revisionHistory={})).add=function(e){const t=Db().historic.coreByProject[e.projectId].revisionHistory;t.unshift(e.revision),t.length>50&&(t.length=50)},function(t){let n,r;t._ensure=function(e){const t=Db().historic.coreByProject[e.projectId].sheetsById;return t[e.sheetId]||(t[e.sheetId]={staticOverrides:{byObject:{}}}),t[e.sheetId]},function(t){function n(t){const n=e.coreByProject.historic.sheetsById._ensure(t);return null!=n.sequence||(n.sequence={subUnitsPerUnit:30,length:10,type:"PositionalSequence",tracksByObject:{}}),n.sequence}function r(t){var n;const r=e.coreByProject.historic.sheetsById.sequence._ensure(t).tracksByObject;return null!=r[n=t.objectKey]||(r[n]={trackData:{},trackIdByPropPath:{}}),r[t.objectKey]}function i(e){return r(e).trackData[e.trackId]}function o(e){const t=i(e);if(!t)return;const n=hb(t.keyframes),r=e.keyframes.filter((e=>!!isFinite(e.value)&&!!e.handles.every((e=>isFinite(e))))).map((t=>b(y({},t),{position:e.snappingFunction(t.position)}))),o=vi(r,"id"),a=n.filter((e=>!o[e.id])),s=vi(a,"position");r.forEach((({position:e})=>{const t=s[e];t&&Ei(a,t)}));const l=Pi([...a,...r],"position");t.keyframes=l}t._ensure=n,t.setLength=function(e){n(e).length=parseFloat(e.length.toFixed(2))},t.setPrimitivePropAsSequenced=function(e){const t=r(e),n=up(e.pathToProp);if("string"==typeof t.trackIdByPropPath[n])return;const i=Oy(10);t.trackData[i]={type:"BasicKeyframedTrack",keyframes:[]},t.trackIdByPropPath[n]=i},t.setPrimitivePropAsStatic=function(t){const n=r(t),i=JSON.stringify(t.pathToProp),o=n.trackIdByPropPath[i];"string"==typeof o&&(delete n.trackIdByPropPath[i],delete n.trackData[o],e.coreByProject.historic.sheetsById.staticOverrides.byObject.setValueOfPrimitiveProp(t))},t.setCompoundPropAsStatic=function(t){const n=r(t);for(const e of Object.keys(n.trackIdByPropPath)){const r=JSON.parse(e),i=t.pathToProp.every(((e,t)=>r[t]===e));if(i){const t=n.trackIdByPropPath[e];if("string"!=typeof t)continue;delete n.trackIdByPropPath[e],delete n.trackData[t]}}e.coreByProject.historic.sheetsById.staticOverrides.byObject.setValueOfCompoundProp(t)},t.setKeyframeAtPosition=function(e){const t=e.snappingFunction(e.position),n=i(e);if(!n)return;const{keyframes:r}=n,o=r.findIndex((e=>e.position===t));if(-1!==o)return void(r[o].value=e.value);const a=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=r-1;return void 0!==n&&(i=dt(n),i=n<0?di(r+i,0):hi(i,r-1)),Rt(e,Zr(t),i,!0)}(r,(e=>e.position<t));if(-1===a)return void r.unshift({id:Ly(),position:t,connectedRight:!0,handles:[.5,1,.5,0],value:e.value});const s=r[a];r.splice(a+1,0,{id:Ly(),position:t,connectedRight:s.connectedRight,handles:[.5,1,.5,0],value:e.value})},t.unsetKeyframeAtPosition=function(e){const t=i(e);if(!t)return;const{keyframes:n}=t,r=n.findIndex((t=>t.position===e.position));-1!==r&&n.splice(r,1)},t.transformKeyframes=function(e){const t=i(e);if(!t)return;const n=hb(t.keyframes).filter((t=>-1!==e.keyframeIds.indexOf(t.id))).map((t=>{const n=t.position,r=e.snappingFunction(function(e,{scale:t,origin:n,translate:r}){return r+(n+(e-n)*t)}(n,e));return b(y({},t),{position:r})}));o(b(y({},e),{keyframes:n}))},t.deleteKeyframes=function(e){const t=i(e);t&&(t.keyframes=t.keyframes.filter((t=>-1===e.keyframeIds.indexOf(t.id))))},t.replaceKeyframes=o}(n=t.sequence||(t.sequence={})),function(t){let n;!function(t){function n(t){var n;const r=e.coreByProject.historic.sheetsById._ensure(t).staticOverrides.byObject;return null!=r[n=t.objectKey]||(r[n]={}),r[t.objectKey]}t.setValueOfCompoundProp=function(e){const t=n(e);Ti(t,e.pathToProp,e.value)},t.setValueOfPrimitiveProp=function(e){const t=n(e);Ti(t,e.pathToProp,e.value)},t.unsetValueOfPrimitiveProp=function(t){const n=e.coreByProject.historic.sheetsById._ensure(t).staticOverrides.byObject[t.objectKey];n&&Dy(n,t.pathToProp)}}(n=t.byObject||(t.byObject={}))}(r=t.staticOverrides||(t.staticOverrides={}))}(r=t.sheetsById||(t.sheetsById={}))}(n=t.historic||(t.historic={}))}(n=e.coreByProject||(e.coreByProject={}))}(Ab||(Ab={}));var jb,zb,Bb=S(n(771)),Fb=("function"==typeof(zb=("undefined"!=typeof self?self:"undefined"!=typeof window||"undefined"!=typeof window?window:e).Symbol)?zb.observable?jb=zb.observable:(jb=zb("observable"),zb.observable=jb):jb="@@observable",jb),Ub="@@redux/INIT";function Hb(e,t,n){var r;if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(Hb)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var i=e,o=t,a=[],s=a,l=!1;function c(){s===a&&(s=a.slice())}function u(){return o}function d(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return c(),s.push(e),function(){if(t){t=!1,c();var n=s.indexOf(e);s.splice(n,1)}}}function h(e){if(!function(e){if(!Xe(e)||"[object Object]"!=$e(e))return!1;var t=Kn(e);if(null===t)return!0;var n=Qn.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&Jn.call(n)==er}(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,o=i(o,e)}finally{l=!1}for(var t=a=s,n=0;n<t.length;n++)(0,t[n])();return e}return h({type:Ub}),(r={dispatch:h,subscribe:d,getState:u,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");i=e,h({type:Ub})}})[Fb]=function(){var e,t=d;return(e={subscribe:function(e){if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(u())}return n(),{unsubscribe:t(n)}}})[Fb]=function(){return this},e},r}function Vb(){}"string"==typeof Vb.name&&"isCrushed"!==Vb.name&&function(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build.");var Gb=S(n(771)),Wb=S(n(771)),qb=class{constructor(){E(this,"_values",{})}get(e,t){if(this.has(e))return this._values[e];{const n=t();return this._values[e]=n,n}}has(e){return this._values.hasOwnProperty(e)}},$b=S(n(771)),Xb="__TheatreJS_StudioBundle",Kb=S(n(294)),Yb=S(n(804)),Zb=(0,Yb.default)(ic)``;function Jb({value:e,label:t,icon:n,onClick:r,isSelected:i}){return Kb.default.createElement(Kb.default.Fragment,null,Kb.default.createElement(Zb,{forwardedAs:kl,className:i?"selected":void 0,"aria-label":t,onClick:r,title:t},n))}var Qb=(0,Yb.default)(Rl)`
  display: flex;
  gap: 5px;