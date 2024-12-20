(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Oo(e){const t=Object.create(null);for(const o of e.split(","))t[o]=1;return o=>o in t}const B={},Je=[],pe=()=>{},Ii=()=>!1,Wt=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Eo=e=>e.startsWith("onUpdate:"),G=Object.assign,Do=(e,t)=>{const o=e.indexOf(t);o>-1&&e.splice(o,1)},Oi=Object.prototype.hasOwnProperty,j=(e,t)=>Oi.call(e,t),O=Array.isArray,ct=e=>zt(e)==="[object Map]",Ei=e=>zt(e)==="[object Set]",E=e=>typeof e=="function",k=e=>typeof e=="string",ot=e=>typeof e=="symbol",W=e=>e!==null&&typeof e=="object",Os=e=>(W(e)||E(e))&&E(e.then)&&E(e.catch),Di=Object.prototype.toString,zt=e=>Di.call(e),Mi=e=>zt(e).slice(8,-1),Pi=e=>zt(e)==="[object Object]",Mo=e=>k(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ut=Oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),kt=e=>{const t=Object.create(null);return o=>t[o]||(t[o]=e(o))},Ui=/-(\w)/g,Ve=kt(e=>e.replace(Ui,(t,o)=>o?o.toUpperCase():"")),ji=/\B([A-Z])/g,ze=kt(e=>e.replace(ji,"-$1").toLowerCase()),Es=kt(e=>e.charAt(0).toUpperCase()+e.slice(1)),io=kt(e=>e?`on${Es(e)}`:""),je=(e,t)=>!Object.is(e,t),no=(e,...t)=>{for(let o=0;o<e.length;o++)e[o](...t)},Ds=(e,t,o,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:o})},Vi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ts;const Gt=()=>ts||(ts=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Po(e){if(O(e)){const t={};for(let o=0;o<e.length;o++){const s=e[o],i=k(s)?qi(s):Po(s);if(i)for(const n in i)t[n]=i[n]}return t}else if(k(e)||W(e))return e}const Fi=/;(?![^(]*\))/g,Hi=/:([^]+)/,Li=/\/\*[^]*?\*\//g;function qi(e){const t={};return e.replace(Li,"").split(Fi).forEach(o=>{if(o){const s=o.split(Hi);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function oe(e){let t="";if(k(e))t=e;else if(O(e))for(let o=0;o<e.length;o++){const s=oe(e[o]);s&&(t+=s+" ")}else if(W(e))for(const o in e)e[o]&&(t+=o+" ");return t.trim()}const Ni="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bi=Oo(Ni);function Ms(e){return!!e||e===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ue;class Ki{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ue,!t&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,o;if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].pause();for(t=0,o=this.effects.length;t<o;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,o;if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].resume();for(t=0,o=this.effects.length;t<o;t++)this.effects[t].resume()}}run(t){if(this._active){const o=ue;try{return ue=this,t()}finally{ue=o}}}on(){ue=this}off(){ue=this.parent}stop(t){if(this._active){this._active=!1;let o,s;for(o=0,s=this.effects.length;o<s;o++)this.effects[o].stop();for(this.effects.length=0,o=0,s=this.cleanups.length;o<s;o++)this.cleanups[o]();if(this.cleanups.length=0,this.scopes){for(o=0,s=this.scopes.length;o<s;o++)this.scopes[o].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Xi(){return ue}let N;const ro=new WeakSet;class Ps{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ue&&ue.active&&ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ro.has(this)&&(ro.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||js(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,os(this),Vs(this);const t=N,o=he;N=this,he=!0;try{return this.fn()}finally{Fs(this),N=t,he=o,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Vo(t);this.deps=this.depsTail=void 0,os(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ro.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vo(this)&&this.run()}get dirty(){return vo(this)}}let Us=0,ft,dt;function js(e,t=!1){if(e.flags|=8,t){e.next=dt,dt=e;return}e.next=ft,ft=e}function Uo(){Us++}function jo(){if(--Us>0)return;if(dt){let t=dt;for(dt=void 0;t;){const o=t.next;t.next=void 0,t.flags&=-9,t=o}}let e;for(;ft;){let t=ft;for(ft=void 0;t;){const o=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=o}}if(e)throw e}function Vs(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Fs(e){let t,o=e.depsTail,s=o;for(;s;){const i=s.prevDep;s.version===-1?(s===o&&(o=i),Vo(s),$i(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=o}function vo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Hs(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Hs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===bt))return;e.globalVersion=bt;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!vo(e)){e.flags&=-3;return}const o=N,s=he;N=e,he=!0;try{Vs(e);const i=e.fn(e._value);(t.version===0||je(i,e._value))&&(e._value=i,t.version++)}catch(i){throw t.version++,i}finally{N=o,he=s,Fs(e),e.flags&=-3}}function Vo(e,t=!1){const{dep:o,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),o.subs===e&&(o.subs=s,!s&&o.computed)){o.computed.flags&=-5;for(let n=o.computed.deps;n;n=n.nextDep)Vo(n,!0)}!t&&!--o.sc&&o.map&&o.map.delete(o.key)}function $i(e){const{prevDep:t,nextDep:o}=e;t&&(t.nextDep=o,e.prevDep=void 0),o&&(o.prevDep=t,e.nextDep=void 0)}let he=!0;const Ls=[];function Fe(){Ls.push(he),he=!1}function He(){const e=Ls.pop();he=e===void 0?!0:e}function os(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const o=N;N=void 0;try{t()}finally{N=o}}}let bt=0;class Wi{constructor(t,o){this.sub=t,this.dep=o,this.version=o.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!N||!he||N===this.computed)return;let o=this.activeLink;if(o===void 0||o.sub!==N)o=this.activeLink=new Wi(N,this),N.deps?(o.prevDep=N.depsTail,N.depsTail.nextDep=o,N.depsTail=o):N.deps=N.depsTail=o,qs(o);else if(o.version===-1&&(o.version=this.version,o.nextDep)){const s=o.nextDep;s.prevDep=o.prevDep,o.prevDep&&(o.prevDep.nextDep=s),o.prevDep=N.depsTail,o.nextDep=void 0,N.depsTail.nextDep=o,N.depsTail=o,N.deps===o&&(N.deps=s)}return o}trigger(t){this.version++,bt++,this.notify(t)}notify(t){Uo();try{for(let o=this.subs;o;o=o.prevSub)o.sub.notify()&&o.sub.dep.notify()}finally{jo()}}}function qs(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)qs(s)}const o=e.dep.subs;o!==e&&(e.prevSub=o,o&&(o.nextSub=e)),e.dep.subs=e}}const bo=new WeakMap,$e=Symbol(""),_o=Symbol(""),_t=Symbol("");function Y(e,t,o){if(he&&N){let s=bo.get(e);s||bo.set(e,s=new Map);let i=s.get(o);i||(s.set(o,i=new Fo),i.map=s,i.key=o),i.track()}}function Ie(e,t,o,s,i,n){const r=bo.get(e);if(!r){bt++;return}const a=u=>{u&&u.trigger()};if(Uo(),t==="clear")r.forEach(a);else{const u=O(e),p=u&&Mo(o);if(u&&o==="length"){const f=Number(s);r.forEach((h,S)=>{(S==="length"||S===_t||!ot(S)&&S>=f)&&a(h)})}else switch((o!==void 0||r.has(void 0))&&a(r.get(o)),p&&a(r.get(_t)),t){case"add":u?p&&a(r.get("length")):(a(r.get($e)),ct(e)&&a(r.get(_o)));break;case"delete":u||(a(r.get($e)),ct(e)&&a(r.get(_o)));break;case"set":ct(e)&&a(r.get($e));break}}jo()}function Ge(e){const t=U(e);return t===e?t:(Y(t,"iterate",_t),me(e)?t:t.map(se))}function Ho(e){return Y(e=U(e),"iterate",_t),e}const zi={__proto__:null,[Symbol.iterator](){return lo(this,Symbol.iterator,se)},concat(...e){return Ge(this).concat(...e.map(t=>O(t)?Ge(t):t))},entries(){return lo(this,"entries",e=>(e[1]=se(e[1]),e))},every(e,t){return Ae(this,"every",e,t,void 0,arguments)},filter(e,t){return Ae(this,"filter",e,t,o=>o.map(se),arguments)},find(e,t){return Ae(this,"find",e,t,se,arguments)},findIndex(e,t){return Ae(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ae(this,"findLast",e,t,se,arguments)},findLastIndex(e,t){return Ae(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ae(this,"forEach",e,t,void 0,arguments)},includes(...e){return ao(this,"includes",e)},indexOf(...e){return ao(this,"indexOf",e)},join(e){return Ge(this).join(e)},lastIndexOf(...e){return ao(this,"lastIndexOf",e)},map(e,t){return Ae(this,"map",e,t,void 0,arguments)},pop(){return rt(this,"pop")},push(...e){return rt(this,"push",e)},reduce(e,...t){return ss(this,"reduce",e,t)},reduceRight(e,...t){return ss(this,"reduceRight",e,t)},shift(){return rt(this,"shift")},some(e,t){return Ae(this,"some",e,t,void 0,arguments)},splice(...e){return rt(this,"splice",e)},toReversed(){return Ge(this).toReversed()},toSorted(e){return Ge(this).toSorted(e)},toSpliced(...e){return Ge(this).toSpliced(...e)},unshift(...e){return rt(this,"unshift",e)},values(){return lo(this,"values",se)}};function lo(e,t,o){const s=Ho(e),i=s[t]();return s!==e&&!me(e)&&(i._next=i.next,i.next=()=>{const n=i._next();return n.value&&(n.value=o(n.value)),n}),i}const ki=Array.prototype;function Ae(e,t,o,s,i,n){const r=Ho(e),a=r!==e&&!me(e),u=r[t];if(u!==ki[t]){const h=u.apply(e,n);return a?se(h):h}let p=o;r!==e&&(a?p=function(h,S){return o.call(this,se(h),S,e)}:o.length>2&&(p=function(h,S){return o.call(this,h,S,e)}));const f=u.call(r,p,s);return a&&i?i(f):f}function ss(e,t,o,s){const i=Ho(e);let n=o;return i!==e&&(me(e)?o.length>3&&(n=function(r,a,u){return o.call(this,r,a,u,e)}):n=function(r,a,u){return o.call(this,r,se(a),u,e)}),i[t](n,...s)}function ao(e,t,o){const s=U(e);Y(s,"iterate",_t);const i=s[t](...o);return(i===-1||i===!1)&&Bo(o[0])?(o[0]=U(o[0]),s[t](...o)):i}function rt(e,t,o=[]){Fe(),Uo();const s=U(e)[t].apply(e,o);return jo(),He(),s}const Gi=Oo("__proto__,__v_isRef,__isVue"),Ns=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ot));function Qi(e){ot(e)||(e=String(e));const t=U(this);return Y(t,"has",e),t.hasOwnProperty(e)}class Bs{constructor(t=!1,o=!1){this._isReadonly=t,this._isShallow=o}get(t,o,s){if(o==="__v_skip")return t.__v_skip;const i=this._isReadonly,n=this._isShallow;if(o==="__v_isReactive")return!i;if(o==="__v_isReadonly")return i;if(o==="__v_isShallow")return n;if(o==="__v_raw")return s===(i?n?ln:Ws:n?$s:Xs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=O(t);if(!i){let u;if(r&&(u=zi[o]))return u;if(o==="hasOwnProperty")return Qi}const a=Reflect.get(t,o,Z(t)?t:s);return(ot(o)?Ns.has(o):Gi(o))||(i||Y(t,"get",o),n)?a:Z(a)?r&&Mo(o)?a:a.value:W(a)?i?zs(a):qo(a):a}}class Ks extends Bs{constructor(t=!1){super(!1,t)}set(t,o,s,i){let n=t[o];if(!this._isShallow){const u=We(n);if(!me(s)&&!We(s)&&(n=U(n),s=U(s)),!O(t)&&Z(n)&&!Z(s))return u?!1:(n.value=s,!0)}const r=O(t)&&Mo(o)?Number(o)<t.length:j(t,o),a=Reflect.set(t,o,s,Z(t)?t:i);return t===U(i)&&(r?je(s,n)&&Ie(t,"set",o,s):Ie(t,"add",o,s)),a}deleteProperty(t,o){const s=j(t,o);t[o];const i=Reflect.deleteProperty(t,o);return i&&s&&Ie(t,"delete",o,void 0),i}has(t,o){const s=Reflect.has(t,o);return(!ot(o)||!Ns.has(o))&&Y(t,"has",o),s}ownKeys(t){return Y(t,"iterate",O(t)?"length":$e),Reflect.ownKeys(t)}}class Ji extends Bs{constructor(t=!1){super(!0,t)}set(t,o){return!0}deleteProperty(t,o){return!0}}const Yi=new Ks,Zi=new Ji,en=new Ks(!0);const xo=e=>e,Pt=e=>Reflect.getPrototypeOf(e);function tn(e,t,o){return function(...s){const i=this.__v_raw,n=U(i),r=ct(n),a=e==="entries"||e===Symbol.iterator&&r,u=e==="keys"&&r,p=i[e](...s),f=o?xo:t?yo:se;return!t&&Y(n,"iterate",u?_o:$e),{next(){const{value:h,done:S}=p.next();return S?{value:h,done:S}:{value:a?[f(h[0]),f(h[1])]:f(h),done:S}},[Symbol.iterator](){return this}}}}function Ut(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function on(e,t){const o={get(i){const n=this.__v_raw,r=U(n),a=U(i);e||(je(i,a)&&Y(r,"get",i),Y(r,"get",a));const{has:u}=Pt(r),p=t?xo:e?yo:se;if(u.call(r,i))return p(n.get(i));if(u.call(r,a))return p(n.get(a));n!==r&&n.get(i)},get size(){const i=this.__v_raw;return!e&&Y(U(i),"iterate",$e),Reflect.get(i,"size",i)},has(i){const n=this.__v_raw,r=U(n),a=U(i);return e||(je(i,a)&&Y(r,"has",i),Y(r,"has",a)),i===a?n.has(i):n.has(i)||n.has(a)},forEach(i,n){const r=this,a=r.__v_raw,u=U(a),p=t?xo:e?yo:se;return!e&&Y(u,"iterate",$e),a.forEach((f,h)=>i.call(n,p(f),p(h),r))}};return G(o,e?{add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear")}:{add(i){!t&&!me(i)&&!We(i)&&(i=U(i));const n=U(this);return Pt(n).has.call(n,i)||(n.add(i),Ie(n,"add",i,i)),this},set(i,n){!t&&!me(n)&&!We(n)&&(n=U(n));const r=U(this),{has:a,get:u}=Pt(r);let p=a.call(r,i);p||(i=U(i),p=a.call(r,i));const f=u.call(r,i);return r.set(i,n),p?je(n,f)&&Ie(r,"set",i,n):Ie(r,"add",i,n),this},delete(i){const n=U(this),{has:r,get:a}=Pt(n);let u=r.call(n,i);u||(i=U(i),u=r.call(n,i)),a&&a.call(n,i);const p=n.delete(i);return u&&Ie(n,"delete",i,void 0),p},clear(){const i=U(this),n=i.size!==0,r=i.clear();return n&&Ie(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{o[i]=tn(i,e,t)}),o}function Lo(e,t){const o=on(e,t);return(s,i,n)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(j(o,i)&&i in s?o:s,i,n)}const sn={get:Lo(!1,!1)},nn={get:Lo(!1,!0)},rn={get:Lo(!0,!1)};const Xs=new WeakMap,$s=new WeakMap,Ws=new WeakMap,ln=new WeakMap;function an(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cn(e){return e.__v_skip||!Object.isExtensible(e)?0:an(Mi(e))}function qo(e){return We(e)?e:No(e,!1,Yi,sn,Xs)}function un(e){return No(e,!1,en,nn,$s)}function zs(e){return No(e,!0,Zi,rn,Ws)}function No(e,t,o,s,i){if(!W(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const n=i.get(e);if(n)return n;const r=cn(e);if(r===0)return e;const a=new Proxy(e,r===2?s:o);return i.set(e,a),a}function pt(e){return We(e)?pt(e.__v_raw):!!(e&&e.__v_isReactive)}function We(e){return!!(e&&e.__v_isReadonly)}function me(e){return!!(e&&e.__v_isShallow)}function Bo(e){return e?!!e.__v_raw:!1}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function fn(e){return!j(e,"__v_skip")&&Object.isExtensible(e)&&Ds(e,"__v_skip",!0),e}const se=e=>W(e)?qo(e):e,yo=e=>W(e)?zs(e):e;function Z(e){return e?e.__v_isRef===!0:!1}function Ye(e){return dn(e,!1)}function dn(e,t){return Z(e)?e:new pn(e,t)}class pn{constructor(t,o){this.dep=new Fo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=o?t:U(t),this._value=o?t:se(t),this.__v_isShallow=o}get value(){return this.dep.track(),this._value}set value(t){const o=this._rawValue,s=this.__v_isShallow||me(t)||We(t);t=s?t:U(t),je(t,o)&&(this._rawValue=t,this._value=s?t:se(t),this.dep.trigger())}}function hn(e){return Z(e)?e.value:e}const mn={get:(e,t,o)=>t==="__v_raw"?e:hn(Reflect.get(e,t,o)),set:(e,t,o,s)=>{const i=e[t];return Z(i)&&!Z(o)?(i.value=o,!0):Reflect.set(e,t,o,s)}};function ks(e){return pt(e)?e:new Proxy(e,mn)}class gn{constructor(t,o,s){this.fn=t,this.setter=o,this._value=void 0,this.dep=new Fo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!o,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&N!==this)return js(this,!0),!0}get value(){const t=this.dep.track();return Hs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function vn(e,t,o=!1){let s,i;return E(e)?s=e:(s=e.get,i=e.set),new gn(s,i,o)}const jt={},qt=new WeakMap;let Xe;function bn(e,t=!1,o=Xe){if(o){let s=qt.get(o);s||qt.set(o,s=[]),s.push(e)}}function _n(e,t,o=B){const{immediate:s,deep:i,once:n,scheduler:r,augmentJob:a,call:u}=o,p=T=>i?T:me(T)||i===!1||i===0?Ue(T,1):Ue(T);let f,h,S,C,P=!1,M=!1;if(Z(e)?(h=()=>e.value,P=me(e)):pt(e)?(h=()=>p(e),P=!0):O(e)?(M=!0,P=e.some(T=>pt(T)||me(T)),h=()=>e.map(T=>{if(Z(T))return T.value;if(pt(T))return p(T);if(E(T))return u?u(T,2):T()})):E(e)?t?h=u?()=>u(e,2):e:h=()=>{if(S){Fe();try{S()}finally{He()}}const T=Xe;Xe=f;try{return u?u(e,3,[C]):e(C)}finally{Xe=T}}:h=pe,t&&i){const T=h,z=i===!0?1/0:i;h=()=>Ue(T(),z)}const Q=Xi(),H=()=>{f.stop(),Q&&Q.active&&Do(Q.effects,f)};if(n&&t){const T=t;t=(...z)=>{T(...z),H()}}let X=M?new Array(e.length).fill(jt):jt;const $=T=>{if(!(!(f.flags&1)||!f.dirty&&!T))if(t){const z=f.run();if(i||P||(M?z.some((Ee,ve)=>je(Ee,X[ve])):je(z,X))){S&&S();const Ee=Xe;Xe=f;try{const ve=[z,X===jt?void 0:M&&X[0]===jt?[]:X,C];u?u(t,3,ve):t(...ve),X=z}finally{Xe=Ee}}}else f.run()};return a&&a($),f=new Ps(h),f.scheduler=r?()=>r($,!1):$,C=T=>bn(T,!1,f),S=f.onStop=()=>{const T=qt.get(f);if(T){if(u)u(T,4);else for(const z of T)z();qt.delete(f)}},t?s?$(!0):X=f.run():r?r($.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function Ue(e,t=1/0,o){if(t<=0||!W(e)||e.__v_skip||(o=o||new Set,o.has(e)))return e;if(o.add(e),t--,Z(e))Ue(e.value,t,o);else if(O(e))for(let s=0;s<e.length;s++)Ue(e[s],t,o);else if(Ei(e)||ct(e))e.forEach(s=>{Ue(s,t,o)});else if(Pi(e)){for(const s in e)Ue(e[s],t,o);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Ue(e[s],t,o)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ct(e,t,o,s){try{return s?e(...s):e()}catch(i){Qt(i,t,o)}}function we(e,t,o,s){if(E(e)){const i=Ct(e,t,o,s);return i&&Os(i)&&i.catch(n=>{Qt(n,t,o)}),i}if(O(e)){const i=[];for(let n=0;n<e.length;n++)i.push(we(e[n],t,o,s));return i}}function Qt(e,t,o,s=!0){const i=t?t.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||B;if(t){let a=t.parent;const u=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${o}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](e,u,p)===!1)return}a=a.parent}if(n){Fe(),Ct(n,null,10,[e,u,p]),He();return}}xn(e,o,i,s,r)}function xn(e,t,o,s=!0,i=!1){if(i)throw e;console.error(e)}const ie=[];let ye=-1;const Ze=[];let Me=null,Qe=0;const Gs=Promise.resolve();let Nt=null;function yn(e){const t=Nt||Gs;return e?t.then(this?e.bind(this):e):t}function Rn(e){let t=ye+1,o=ie.length;for(;t<o;){const s=t+o>>>1,i=ie[s],n=xt(i);n<e||n===e&&i.flags&2?t=s+1:o=s}return t}function Ko(e){if(!(e.flags&1)){const t=xt(e),o=ie[ie.length-1];!o||!(e.flags&2)&&t>=xt(o)?ie.push(e):ie.splice(Rn(t),0,e),e.flags|=1,Qs()}}function Qs(){Nt||(Nt=Gs.then(Ys))}function Sn(e){O(e)?Ze.push(...e):Me&&e.id===-1?Me.splice(Qe+1,0,e):e.flags&1||(Ze.push(e),e.flags|=1),Qs()}function is(e,t,o=ye+1){for(;o<ie.length;o++){const s=ie[o];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;ie.splice(o,1),o--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Js(e){if(Ze.length){const t=[...new Set(Ze)].sort((o,s)=>xt(o)-xt(s));if(Ze.length=0,Me){Me.push(...t);return}for(Me=t,Qe=0;Qe<Me.length;Qe++){const o=Me[Qe];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Me=null,Qe=0}}const xt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ys(e){const t=pe;try{for(ye=0;ye<ie.length;ye++){const o=ie[ye];o&&!(o.flags&8)&&(o.flags&4&&(o.flags&=-2),Ct(o,o.i,o.i?15:14),o.flags&4||(o.flags&=-2))}}finally{for(;ye<ie.length;ye++){const o=ie[ye];o&&(o.flags&=-2)}ye=-1,ie.length=0,Js(),Nt=null,(ie.length||Ze.length)&&Ys()}}let Ce=null,Zs=null;function Bt(e){const t=Ce;return Ce=e,Zs=e&&e.type.__scopeId||null,t}function Cn(e,t=Ce,o){if(!t||e._n)return e;const s=(...i)=>{s._d&&ds(-1);const n=Bt(t);let r;try{r=e(...i)}finally{Bt(n),s._d&&ds(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Be(e,t,o,s){const i=e.dirs,n=t&&t.dirs;for(let r=0;r<i.length;r++){const a=i[r];n&&(a.oldValue=n[r].value);let u=a.dir[s];u&&(Fe(),we(u,o,8,[e.el,a,e,t]),He())}}const wn=Symbol("_vte"),An=e=>e.__isTeleport;function Xo(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Xo(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ei(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Kt(e,t,o,s,i=!1){if(O(e)){e.forEach((P,M)=>Kt(P,t&&(O(t)?t[M]:t),o,s,i));return}if(ht(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Kt(e,t,o,s.component.subTree);return}const n=s.shapeFlag&4?ko(s.component):s.el,r=i?null:n,{i:a,r:u}=e,p=t&&t.r,f=a.refs===B?a.refs={}:a.refs,h=a.setupState,S=U(h),C=h===B?()=>!1:P=>j(S,P);if(p!=null&&p!==u&&(k(p)?(f[p]=null,C(p)&&(h[p]=null)):Z(p)&&(p.value=null)),E(u))Ct(u,a,12,[r,f]);else{const P=k(u),M=Z(u);if(P||M){const Q=()=>{if(e.f){const H=P?C(u)?h[u]:f[u]:u.value;i?O(H)&&Do(H,n):O(H)?H.includes(n)||H.push(n):P?(f[u]=[n],C(u)&&(h[u]=f[u])):(u.value=[n],e.k&&(f[e.k]=u.value))}else P?(f[u]=r,C(u)&&(h[u]=r)):M&&(u.value=r,e.k&&(f[e.k]=r))};r?(Q.id=-1,ce(Q,o)):Q()}}}Gt().requestIdleCallback;Gt().cancelIdleCallback;const ht=e=>!!e.type.__asyncLoader,ti=e=>e.type.__isKeepAlive;function Tn(e,t){oi(e,"a",t)}function In(e,t){oi(e,"da",t)}function oi(e,t,o=ne){const s=e.__wdc||(e.__wdc=()=>{let i=o;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Jt(t,s,o),o){let i=o.parent;for(;i&&i.parent;)ti(i.parent.vnode)&&On(s,t,o,i),i=i.parent}}function On(e,t,o,s){const i=Jt(t,e,s,!0);si(()=>{Do(s[t],i)},o)}function Jt(e,t,o=ne,s=!1){if(o){const i=o[e]||(o[e]=[]),n=t.__weh||(t.__weh=(...r)=>{Fe();const a=Tt(o),u=we(t,o,e,r);return a(),He(),u});return s?i.unshift(n):i.push(n),n}}const Oe=e=>(t,o=ne)=>{(!St||e==="sp")&&Jt(e,(...s)=>t(...s),o)},En=Oe("bm"),Dn=Oe("m"),Mn=Oe("bu"),Pn=Oe("u"),Un=Oe("bum"),si=Oe("um"),jn=Oe("sp"),Vn=Oe("rtg"),Fn=Oe("rtc");function Hn(e,t=ne){Jt("ec",e,t)}const Ln=Symbol.for("v-ndc"),Ro=e=>e?Si(e)?ko(e):Ro(e.parent):null,mt=G(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ro(e.parent),$root:e=>Ro(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>$o(e),$forceUpdate:e=>e.f||(e.f=()=>{Ko(e.update)}),$nextTick:e=>e.n||(e.n=yn.bind(e.proxy)),$watch:e=>lr.bind(e)}),co=(e,t)=>e!==B&&!e.__isScriptSetup&&j(e,t),qn={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:o,setupState:s,data:i,props:n,accessCache:r,type:a,appContext:u}=e;let p;if(t[0]!=="$"){const C=r[t];if(C!==void 0)switch(C){case 1:return s[t];case 2:return i[t];case 4:return o[t];case 3:return n[t]}else{if(co(s,t))return r[t]=1,s[t];if(i!==B&&j(i,t))return r[t]=2,i[t];if((p=e.propsOptions[0])&&j(p,t))return r[t]=3,n[t];if(o!==B&&j(o,t))return r[t]=4,o[t];So&&(r[t]=0)}}const f=mt[t];let h,S;if(f)return t==="$attrs"&&Y(e.attrs,"get",""),f(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(o!==B&&j(o,t))return r[t]=4,o[t];if(S=u.config.globalProperties,j(S,t))return S[t]},set({_:e},t,o){const{data:s,setupState:i,ctx:n}=e;return co(i,t)?(i[t]=o,!0):s!==B&&j(s,t)?(s[t]=o,!0):j(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(n[t]=o,!0)},has({_:{data:e,setupState:t,accessCache:o,ctx:s,appContext:i,propsOptions:n}},r){let a;return!!o[r]||e!==B&&j(e,r)||co(t,r)||(a=n[0])&&j(a,r)||j(s,r)||j(mt,r)||j(i.config.globalProperties,r)},defineProperty(e,t,o){return o.get!=null?e._.accessCache[t]=0:j(o,"value")&&this.set(e,t,o.value,null),Reflect.defineProperty(e,t,o)}};function ns(e){return O(e)?e.reduce((t,o)=>(t[o]=null,t),{}):e}let So=!0;function Nn(e){const t=$o(e),o=e.proxy,s=e.ctx;So=!1,t.beforeCreate&&rs(t.beforeCreate,e,"bc");const{data:i,computed:n,methods:r,watch:a,provide:u,inject:p,created:f,beforeMount:h,mounted:S,beforeUpdate:C,updated:P,activated:M,deactivated:Q,beforeDestroy:H,beforeUnmount:X,destroyed:$,unmounted:T,render:z,renderTracked:Ee,renderTriggered:ve,errorCaptured:De,serverPrefetch:It,expose:Le,inheritAttrs:st,components:Ot,directives:Et,filters:eo}=t;if(p&&Bn(p,s,null),r)for(const K in r){const L=r[K];E(L)&&(s[K]=L.bind(o))}if(i){const K=i.call(o,o);W(K)&&(e.data=qo(K))}if(So=!0,n)for(const K in n){const L=n[K],qe=E(L)?L.bind(o,o):E(L.get)?L.get.bind(o,o):pe,Dt=!E(L)&&E(L.set)?L.set.bind(o):pe,Ne=Ir({get:qe,set:Dt});Object.defineProperty(s,K,{enumerable:!0,configurable:!0,get:()=>Ne.value,set:be=>Ne.value=be})}if(a)for(const K in a)ii(a[K],s,o,K);if(u){const K=E(u)?u.call(o):u;Reflect.ownKeys(K).forEach(L=>{kn(L,K[L])})}f&&rs(f,e,"c");function ee(K,L){O(L)?L.forEach(qe=>K(qe.bind(o))):L&&K(L.bind(o))}if(ee(En,h),ee(Dn,S),ee(Mn,C),ee(Pn,P),ee(Tn,M),ee(In,Q),ee(Hn,De),ee(Fn,Ee),ee(Vn,ve),ee(Un,X),ee(si,T),ee(jn,It),O(Le))if(Le.length){const K=e.exposed||(e.exposed={});Le.forEach(L=>{Object.defineProperty(K,L,{get:()=>o[L],set:qe=>o[L]=qe})})}else e.exposed||(e.exposed={});z&&e.render===pe&&(e.render=z),st!=null&&(e.inheritAttrs=st),Ot&&(e.components=Ot),Et&&(e.directives=Et),It&&ei(e)}function Bn(e,t,o=pe){O(e)&&(e=Co(e));for(const s in e){const i=e[s];let n;W(i)?"default"in i?n=Vt(i.from||s,i.default,!0):n=Vt(i.from||s):n=Vt(i),Z(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:r=>n.value=r}):t[s]=n}}function rs(e,t,o){we(O(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,o)}function ii(e,t,o,s){let i=s.includes(".")?bi(o,s):()=>o[s];if(k(e)){const n=t[e];E(n)&&Ft(i,n)}else if(E(e))Ft(i,e.bind(o));else if(W(e))if(O(e))e.forEach(n=>ii(n,t,o,s));else{const n=E(e.handler)?e.handler.bind(o):t[e.handler];E(n)&&Ft(i,n,e)}}function $o(e){const t=e.type,{mixins:o,extends:s}=t,{mixins:i,optionsCache:n,config:{optionMergeStrategies:r}}=e.appContext,a=n.get(t);let u;return a?u=a:!i.length&&!o&&!s?u=t:(u={},i.length&&i.forEach(p=>Xt(u,p,r,!0)),Xt(u,t,r)),W(t)&&n.set(t,u),u}function Xt(e,t,o,s=!1){const{mixins:i,extends:n}=t;n&&Xt(e,n,o,!0),i&&i.forEach(r=>Xt(e,r,o,!0));for(const r in t)if(!(s&&r==="expose")){const a=Kn[r]||o&&o[r];e[r]=a?a(e[r],t[r]):t[r]}return e}const Kn={data:ls,props:as,emits:as,methods:at,computed:at,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:at,directives:at,watch:$n,provide:ls,inject:Xn};function ls(e,t){return t?e?function(){return G(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function Xn(e,t){return at(Co(e),Co(t))}function Co(e){if(O(e)){const t={};for(let o=0;o<e.length;o++)t[e[o]]=e[o];return t}return e}function te(e,t){return e?[...new Set([].concat(e,t))]:t}function at(e,t){return e?G(Object.create(null),e,t):t}function as(e,t){return e?O(e)&&O(t)?[...new Set([...e,...t])]:G(Object.create(null),ns(e),ns(t??{})):t}function $n(e,t){if(!e)return t;if(!t)return e;const o=G(Object.create(null),e);for(const s in t)o[s]=te(e[s],t[s]);return o}function ni(){return{app:null,config:{isNativeTag:Ii,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wn=0;function zn(e,t){return function(s,i=null){E(s)||(s=G({},s)),i!=null&&!W(i)&&(i=null);const n=ni(),r=new WeakSet,a=[];let u=!1;const p=n.app={_uid:Wn++,_component:s,_props:i,_container:null,_context:n,_instance:null,version:Or,get config(){return n.config},set config(f){},use(f,...h){return r.has(f)||(f&&E(f.install)?(r.add(f),f.install(p,...h)):E(f)&&(r.add(f),f(p,...h))),p},mixin(f){return n.mixins.includes(f)||n.mixins.push(f),p},component(f,h){return h?(n.components[f]=h,p):n.components[f]},directive(f,h){return h?(n.directives[f]=h,p):n.directives[f]},mount(f,h,S){if(!u){const C=p._ceVNode||ge(s,i);return C.appContext=n,S===!0?S="svg":S===!1&&(S=void 0),h&&t?t(C,f):e(C,f,S),u=!0,p._container=f,f.__vue_app__=p,ko(C.component)}},onUnmount(f){a.push(f)},unmount(){u&&(we(a,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(f,h){return n.provides[f]=h,p},runWithContext(f){const h=et;et=p;try{return f()}finally{et=h}}};return p}}let et=null;function kn(e,t){if(ne){let o=ne.provides;const s=ne.parent&&ne.parent.provides;s===o&&(o=ne.provides=Object.create(s)),o[e]=t}}function Vt(e,t,o=!1){const s=ne||Ce;if(s||et){const i=et?et._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return o&&E(t)?t.call(s&&s.proxy):t}}const ri={},li=()=>Object.create(ri),ai=e=>Object.getPrototypeOf(e)===ri;function Gn(e,t,o,s=!1){const i={},n=li();e.propsDefaults=Object.create(null),ci(e,t,i,n);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);o?e.props=s?i:un(i):e.type.props?e.props=i:e.props=n,e.attrs=n}function Qn(e,t,o,s){const{props:i,attrs:n,vnode:{patchFlag:r}}=e,a=U(i),[u]=e.propsOptions;let p=!1;if((s||r>0)&&!(r&16)){if(r&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let S=f[h];if(Yt(e.emitsOptions,S))continue;const C=t[S];if(u)if(j(n,S))C!==n[S]&&(n[S]=C,p=!0);else{const P=Ve(S);i[P]=wo(u,a,P,C,e,!1)}else C!==n[S]&&(n[S]=C,p=!0)}}}else{ci(e,t,i,n)&&(p=!0);let f;for(const h in a)(!t||!j(t,h)&&((f=ze(h))===h||!j(t,f)))&&(u?o&&(o[h]!==void 0||o[f]!==void 0)&&(i[h]=wo(u,a,h,void 0,e,!0)):delete i[h]);if(n!==a)for(const h in n)(!t||!j(t,h))&&(delete n[h],p=!0)}p&&Ie(e.attrs,"set","")}function ci(e,t,o,s){const[i,n]=e.propsOptions;let r=!1,a;if(t)for(let u in t){if(ut(u))continue;const p=t[u];let f;i&&j(i,f=Ve(u))?!n||!n.includes(f)?o[f]=p:(a||(a={}))[f]=p:Yt(e.emitsOptions,u)||(!(u in s)||p!==s[u])&&(s[u]=p,r=!0)}if(n){const u=U(o),p=a||B;for(let f=0;f<n.length;f++){const h=n[f];o[h]=wo(i,u,h,p[h],e,!j(p,h))}}return r}function wo(e,t,o,s,i,n){const r=e[o];if(r!=null){const a=j(r,"default");if(a&&s===void 0){const u=r.default;if(r.type!==Function&&!r.skipFactory&&E(u)){const{propsDefaults:p}=i;if(o in p)s=p[o];else{const f=Tt(i);s=p[o]=u.call(null,t),f()}}else s=u;i.ce&&i.ce._setProp(o,s)}r[0]&&(n&&!a?s=!1:r[1]&&(s===""||s===ze(o))&&(s=!0))}return s}const Jn=new WeakMap;function ui(e,t,o=!1){const s=o?Jn:t.propsCache,i=s.get(e);if(i)return i;const n=e.props,r={},a=[];let u=!1;if(!E(e)){const f=h=>{u=!0;const[S,C]=ui(h,t,!0);G(r,S),C&&a.push(...C)};!o&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!n&&!u)return W(e)&&s.set(e,Je),Je;if(O(n))for(let f=0;f<n.length;f++){const h=Ve(n[f]);cs(h)&&(r[h]=B)}else if(n)for(const f in n){const h=Ve(f);if(cs(h)){const S=n[f],C=r[h]=O(S)||E(S)?{type:S}:G({},S),P=C.type;let M=!1,Q=!0;if(O(P))for(let H=0;H<P.length;++H){const X=P[H],$=E(X)&&X.name;if($==="Boolean"){M=!0;break}else $==="String"&&(Q=!1)}else M=E(P)&&P.name==="Boolean";C[0]=M,C[1]=Q,(M||j(C,"default"))&&a.push(h)}}const p=[r,a];return W(e)&&s.set(e,p),p}function cs(e){return e[0]!=="$"&&!ut(e)}const fi=e=>e[0]==="_"||e==="$stable",Wo=e=>O(e)?e.map(Se):[Se(e)],Yn=(e,t,o)=>{if(t._n)return t;const s=Cn((...i)=>Wo(t(...i)),o);return s._c=!1,s},di=(e,t,o)=>{const s=e._ctx;for(const i in e){if(fi(i))continue;const n=e[i];if(E(n))t[i]=Yn(i,n,s);else if(n!=null){const r=Wo(n);t[i]=()=>r}}},pi=(e,t)=>{const o=Wo(t);e.slots.default=()=>o},hi=(e,t,o)=>{for(const s in t)(o||s!=="_")&&(e[s]=t[s])},Zn=(e,t,o)=>{const s=e.slots=li();if(e.vnode.shapeFlag&32){const i=t._;i?(hi(s,t,o),o&&Ds(s,"_",i,!0)):di(t,s)}else t&&pi(e,t)},er=(e,t,o)=>{const{vnode:s,slots:i}=e;let n=!0,r=B;if(s.shapeFlag&32){const a=t._;a?o&&a===1?n=!1:hi(i,t,o):(n=!t.$stable,di(t,i)),r=t}else t&&(pi(e,t),r={default:1});if(n)for(const a in i)!fi(a)&&r[a]==null&&delete i[a]},ce=hr;function tr(e){return or(e)}function or(e,t){const o=Gt();o.__VUE__=!0;const{insert:s,remove:i,patchProp:n,createElement:r,createText:a,createComment:u,setText:p,setElementText:f,parentNode:h,nextSibling:S,setScopeId:C=pe,insertStaticContent:P}=e,M=(l,c,d,v=null,m=null,g=null,y=void 0,x=null,_=!!c.dynamicChildren)=>{if(l===c)return;l&&!lt(l,c)&&(v=Mt(l),be(l,m,g,!0),l=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:b,ref:A,shapeFlag:R}=c;switch(b){case Zt:Q(l,c,d,v);break;case yt:H(l,c,d,v);break;case po:l==null&&X(c,d,v,y);break;case Re:Ot(l,c,d,v,m,g,y,x,_);break;default:R&1?z(l,c,d,v,m,g,y,x,_):R&6?Et(l,c,d,v,m,g,y,x,_):(R&64||R&128)&&b.process(l,c,d,v,m,g,y,x,_,ke)}A!=null&&m&&Kt(A,l&&l.ref,g,c||l,!c)},Q=(l,c,d,v)=>{if(l==null)s(c.el=a(c.children),d,v);else{const m=c.el=l.el;c.children!==l.children&&p(m,c.children)}},H=(l,c,d,v)=>{l==null?s(c.el=u(c.children||""),d,v):c.el=l.el},X=(l,c,d,v)=>{[l.el,l.anchor]=P(l.children,c,d,v,l.el,l.anchor)},$=({el:l,anchor:c},d,v)=>{let m;for(;l&&l!==c;)m=S(l),s(l,d,v),l=m;s(c,d,v)},T=({el:l,anchor:c})=>{let d;for(;l&&l!==c;)d=S(l),i(l),l=d;i(c)},z=(l,c,d,v,m,g,y,x,_)=>{c.type==="svg"?y="svg":c.type==="math"&&(y="mathml"),l==null?Ee(c,d,v,m,g,y,x,_):It(l,c,m,g,y,x,_)},Ee=(l,c,d,v,m,g,y,x)=>{let _,b;const{props:A,shapeFlag:R,transition:w,dirs:I}=l;if(_=l.el=r(l.type,g,A&&A.is,A),R&8?f(_,l.children):R&16&&De(l.children,_,null,v,m,uo(l,g),y,x),I&&Be(l,null,v,"created"),ve(_,l,l.scopeId,y,v),A){for(const q in A)q!=="value"&&!ut(q)&&n(_,q,null,A[q],g,v);"value"in A&&n(_,"value",null,A.value,g),(b=A.onVnodeBeforeMount)&&xe(b,v,l)}I&&Be(l,null,v,"beforeMount");const D=sr(m,w);D&&w.beforeEnter(_),s(_,c,d),((b=A&&A.onVnodeMounted)||D||I)&&ce(()=>{b&&xe(b,v,l),D&&w.enter(_),I&&Be(l,null,v,"mounted")},m)},ve=(l,c,d,v,m)=>{if(d&&C(l,d),v)for(let g=0;g<v.length;g++)C(l,v[g]);if(m){let g=m.subTree;if(c===g||xi(g.type)&&(g.ssContent===c||g.ssFallback===c)){const y=m.vnode;ve(l,y,y.scopeId,y.slotScopeIds,m.parent)}}},De=(l,c,d,v,m,g,y,x,_=0)=>{for(let b=_;b<l.length;b++){const A=l[b]=x?Pe(l[b]):Se(l[b]);M(null,A,c,d,v,m,g,y,x)}},It=(l,c,d,v,m,g,y)=>{const x=c.el=l.el;let{patchFlag:_,dynamicChildren:b,dirs:A}=c;_|=l.patchFlag&16;const R=l.props||B,w=c.props||B;let I;if(d&&Ke(d,!1),(I=w.onVnodeBeforeUpdate)&&xe(I,d,c,l),A&&Be(c,l,d,"beforeUpdate"),d&&Ke(d,!0),(R.innerHTML&&w.innerHTML==null||R.textContent&&w.textContent==null)&&f(x,""),b?Le(l.dynamicChildren,b,x,d,v,uo(c,m),g):y||L(l,c,x,null,d,v,uo(c,m),g,!1),_>0){if(_&16)st(x,R,w,d,m);else if(_&2&&R.class!==w.class&&n(x,"class",null,w.class,m),_&4&&n(x,"style",R.style,w.style,m),_&8){const D=c.dynamicProps;for(let q=0;q<D.length;q++){const V=D[q],re=R[V],J=w[V];(J!==re||V==="value")&&n(x,V,re,J,m,d)}}_&1&&l.children!==c.children&&f(x,c.children)}else!y&&b==null&&st(x,R,w,d,m);((I=w.onVnodeUpdated)||A)&&ce(()=>{I&&xe(I,d,c,l),A&&Be(c,l,d,"updated")},v)},Le=(l,c,d,v,m,g,y)=>{for(let x=0;x<c.length;x++){const _=l[x],b=c[x],A=_.el&&(_.type===Re||!lt(_,b)||_.shapeFlag&70)?h(_.el):d;M(_,b,A,null,v,m,g,y,!0)}},st=(l,c,d,v,m)=>{if(c!==d){if(c!==B)for(const g in c)!ut(g)&&!(g in d)&&n(l,g,c[g],null,m,v);for(const g in d){if(ut(g))continue;const y=d[g],x=c[g];y!==x&&g!=="value"&&n(l,g,x,y,m,v)}"value"in d&&n(l,"value",c.value,d.value,m)}},Ot=(l,c,d,v,m,g,y,x,_)=>{const b=c.el=l?l.el:a(""),A=c.anchor=l?l.anchor:a("");let{patchFlag:R,dynamicChildren:w,slotScopeIds:I}=c;I&&(x=x?x.concat(I):I),l==null?(s(b,d,v),s(A,d,v),De(c.children||[],d,A,m,g,y,x,_)):R>0&&R&64&&w&&l.dynamicChildren?(Le(l.dynamicChildren,w,d,m,g,y,x),(c.key!=null||m&&c===m.subTree)&&mi(l,c,!0)):L(l,c,d,A,m,g,y,x,_)},Et=(l,c,d,v,m,g,y,x,_)=>{c.slotScopeIds=x,l==null?c.shapeFlag&512?m.ctx.activate(c,d,v,y,_):eo(c,d,v,m,g,y,_):Qo(l,c,_)},eo=(l,c,d,v,m,g,y)=>{const x=l.component=Rr(l,v,m);if(ti(l)&&(x.ctx.renderer=ke),Sr(x,!1,y),x.asyncDep){if(m&&m.registerDep(x,ee,y),!l.el){const _=x.subTree=ge(yt);H(null,_,c,d)}}else ee(x,l,c,d,m,g,y)},Qo=(l,c,d)=>{const v=c.component=l.component;if(dr(l,c,d))if(v.asyncDep&&!v.asyncResolved){K(v,c,d);return}else v.next=c,v.update();else c.el=l.el,v.vnode=c},ee=(l,c,d,v,m,g,y)=>{const x=()=>{if(l.isMounted){let{next:R,bu:w,u:I,parent:D,vnode:q}=l;{const le=gi(l);if(le){R&&(R.el=q.el,K(l,R,y)),le.asyncDep.then(()=>{l.isUnmounted||x()});return}}let V=R,re;Ke(l,!1),R?(R.el=q.el,K(l,R,y)):R=q,w&&no(w),(re=R.props&&R.props.onVnodeBeforeUpdate)&&xe(re,D,R,q),Ke(l,!0);const J=fo(l),de=l.subTree;l.subTree=J,M(de,J,h(de.el),Mt(de),l,m,g),R.el=J.el,V===null&&pr(l,J.el),I&&ce(I,m),(re=R.props&&R.props.onVnodeUpdated)&&ce(()=>xe(re,D,R,q),m)}else{let R;const{el:w,props:I}=c,{bm:D,m:q,parent:V,root:re,type:J}=l,de=ht(c);if(Ke(l,!1),D&&no(D),!de&&(R=I&&I.onVnodeBeforeMount)&&xe(R,V,c),Ke(l,!0),w&&so){const le=()=>{l.subTree=fo(l),so(w,l.subTree,l,m,null)};de&&J.__asyncHydrate?J.__asyncHydrate(w,l,le):le()}else{re.ce&&re.ce._injectChildStyle(J);const le=l.subTree=fo(l);M(null,le,d,v,l,m,g),c.el=le.el}if(q&&ce(q,m),!de&&(R=I&&I.onVnodeMounted)){const le=c;ce(()=>xe(R,V,le),m)}(c.shapeFlag&256||V&&ht(V.vnode)&&V.vnode.shapeFlag&256)&&l.a&&ce(l.a,m),l.isMounted=!0,c=d=v=null}};l.scope.on();const _=l.effect=new Ps(x);l.scope.off();const b=l.update=_.run.bind(_),A=l.job=_.runIfDirty.bind(_);A.i=l,A.id=l.uid,_.scheduler=()=>Ko(A),Ke(l,!0),b()},K=(l,c,d)=>{c.component=l;const v=l.vnode.props;l.vnode=c,l.next=null,Qn(l,c.props,v,d),er(l,c.children,d),Fe(),is(l),He()},L=(l,c,d,v,m,g,y,x,_=!1)=>{const b=l&&l.children,A=l?l.shapeFlag:0,R=c.children,{patchFlag:w,shapeFlag:I}=c;if(w>0){if(w&128){Dt(b,R,d,v,m,g,y,x,_);return}else if(w&256){qe(b,R,d,v,m,g,y,x,_);return}}I&8?(A&16&&it(b,m,g),R!==b&&f(d,R)):A&16?I&16?Dt(b,R,d,v,m,g,y,x,_):it(b,m,g,!0):(A&8&&f(d,""),I&16&&De(R,d,v,m,g,y,x,_))},qe=(l,c,d,v,m,g,y,x,_)=>{l=l||Je,c=c||Je;const b=l.length,A=c.length,R=Math.min(b,A);let w;for(w=0;w<R;w++){const I=c[w]=_?Pe(c[w]):Se(c[w]);M(l[w],I,d,null,m,g,y,x,_)}b>A?it(l,m,g,!0,!1,R):De(c,d,v,m,g,y,x,_,R)},Dt=(l,c,d,v,m,g,y,x,_)=>{let b=0;const A=c.length;let R=l.length-1,w=A-1;for(;b<=R&&b<=w;){const I=l[b],D=c[b]=_?Pe(c[b]):Se(c[b]);if(lt(I,D))M(I,D,d,null,m,g,y,x,_);else break;b++}for(;b<=R&&b<=w;){const I=l[R],D=c[w]=_?Pe(c[w]):Se(c[w]);if(lt(I,D))M(I,D,d,null,m,g,y,x,_);else break;R--,w--}if(b>R){if(b<=w){const I=w+1,D=I<A?c[I].el:v;for(;b<=w;)M(null,c[b]=_?Pe(c[b]):Se(c[b]),d,D,m,g,y,x,_),b++}}else if(b>w)for(;b<=R;)be(l[b],m,g,!0),b++;else{const I=b,D=b,q=new Map;for(b=D;b<=w;b++){const ae=c[b]=_?Pe(c[b]):Se(c[b]);ae.key!=null&&q.set(ae.key,b)}let V,re=0;const J=w-D+1;let de=!1,le=0;const nt=new Array(J);for(b=0;b<J;b++)nt[b]=0;for(b=I;b<=R;b++){const ae=l[b];if(re>=J){be(ae,m,g,!0);continue}let _e;if(ae.key!=null)_e=q.get(ae.key);else for(V=D;V<=w;V++)if(nt[V-D]===0&&lt(ae,c[V])){_e=V;break}_e===void 0?be(ae,m,g,!0):(nt[_e-D]=b+1,_e>=le?le=_e:de=!0,M(ae,c[_e],d,null,m,g,y,x,_),re++)}const Zo=de?ir(nt):Je;for(V=Zo.length-1,b=J-1;b>=0;b--){const ae=D+b,_e=c[ae],es=ae+1<A?c[ae+1].el:v;nt[b]===0?M(null,_e,d,es,m,g,y,x,_):de&&(V<0||b!==Zo[V]?Ne(_e,d,es,2):V--)}}},Ne=(l,c,d,v,m=null)=>{const{el:g,type:y,transition:x,children:_,shapeFlag:b}=l;if(b&6){Ne(l.component.subTree,c,d,v);return}if(b&128){l.suspense.move(c,d,v);return}if(b&64){y.move(l,c,d,ke);return}if(y===Re){s(g,c,d);for(let R=0;R<_.length;R++)Ne(_[R],c,d,v);s(l.anchor,c,d);return}if(y===po){$(l,c,d);return}if(v!==2&&b&1&&x)if(v===0)x.beforeEnter(g),s(g,c,d),ce(()=>x.enter(g),m);else{const{leave:R,delayLeave:w,afterLeave:I}=x,D=()=>s(g,c,d),q=()=>{R(g,()=>{D(),I&&I()})};w?w(g,D,q):q()}else s(g,c,d)},be=(l,c,d,v=!1,m=!1)=>{const{type:g,props:y,ref:x,children:_,dynamicChildren:b,shapeFlag:A,patchFlag:R,dirs:w,cacheIndex:I}=l;if(R===-2&&(m=!1),x!=null&&Kt(x,null,d,l,!0),I!=null&&(c.renderCache[I]=void 0),A&256){c.ctx.deactivate(l);return}const D=A&1&&w,q=!ht(l);let V;if(q&&(V=y&&y.onVnodeBeforeUnmount)&&xe(V,c,l),A&6)Ti(l.component,d,v);else{if(A&128){l.suspense.unmount(d,v);return}D&&Be(l,null,c,"beforeUnmount"),A&64?l.type.remove(l,c,d,ke,v):b&&!b.hasOnce&&(g!==Re||R>0&&R&64)?it(b,c,d,!1,!0):(g===Re&&R&384||!m&&A&16)&&it(_,c,d),v&&Jo(l)}(q&&(V=y&&y.onVnodeUnmounted)||D)&&ce(()=>{V&&xe(V,c,l),D&&Be(l,null,c,"unmounted")},d)},Jo=l=>{const{type:c,el:d,anchor:v,transition:m}=l;if(c===Re){Ai(d,v);return}if(c===po){T(l);return}const g=()=>{i(d),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(l.shapeFlag&1&&m&&!m.persisted){const{leave:y,delayLeave:x}=m,_=()=>y(d,g);x?x(l.el,g,_):_()}else g()},Ai=(l,c)=>{let d;for(;l!==c;)d=S(l),i(l),l=d;i(c)},Ti=(l,c,d)=>{const{bum:v,scope:m,job:g,subTree:y,um:x,m:_,a:b}=l;us(_),us(b),v&&no(v),m.stop(),g&&(g.flags|=8,be(y,l,c,d)),x&&ce(x,c),ce(()=>{l.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},it=(l,c,d,v=!1,m=!1,g=0)=>{for(let y=g;y<l.length;y++)be(l[y],c,d,v,m)},Mt=l=>{if(l.shapeFlag&6)return Mt(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const c=S(l.anchor||l.el),d=c&&c[wn];return d?S(d):c};let to=!1;const Yo=(l,c,d)=>{l==null?c._vnode&&be(c._vnode,null,null,!0):M(c._vnode||null,l,c,null,null,null,d),c._vnode=l,to||(to=!0,is(),Js(),to=!1)},ke={p:M,um:be,m:Ne,r:Jo,mt:eo,mc:De,pc:L,pbc:Le,n:Mt,o:e};let oo,so;return t&&([oo,so]=t(ke)),{render:Yo,hydrate:oo,createApp:zn(Yo,oo)}}function uo({type:e,props:t},o){return o==="svg"&&e==="foreignObject"||o==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:o}function Ke({effect:e,job:t},o){o?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function sr(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function mi(e,t,o=!1){const s=e.children,i=t.children;if(O(s)&&O(i))for(let n=0;n<s.length;n++){const r=s[n];let a=i[n];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[n]=Pe(i[n]),a.el=r.el),!o&&a.patchFlag!==-2&&mi(r,a)),a.type===Zt&&(a.el=r.el)}}function ir(e){const t=e.slice(),o=[0];let s,i,n,r,a;const u=e.length;for(s=0;s<u;s++){const p=e[s];if(p!==0){if(i=o[o.length-1],e[i]<p){t[s]=i,o.push(s);continue}for(n=0,r=o.length-1;n<r;)a=n+r>>1,e[o[a]]<p?n=a+1:r=a;p<e[o[n]]&&(n>0&&(t[s]=o[n-1]),o[n]=s)}}for(n=o.length,r=o[n-1];n-- >0;)o[n]=r,r=t[r];return o}function gi(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:gi(t)}function us(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const nr=Symbol.for("v-scx"),rr=()=>Vt(nr);function Ft(e,t,o){return vi(e,t,o)}function vi(e,t,o=B){const{immediate:s,deep:i,flush:n,once:r}=o,a=G({},o),u=t&&s||!t&&n!=="post";let p;if(St){if(n==="sync"){const C=rr();p=C.__watcherHandles||(C.__watcherHandles=[])}else if(!u){const C=()=>{};return C.stop=pe,C.resume=pe,C.pause=pe,C}}const f=ne;a.call=(C,P,M)=>we(C,f,P,M);let h=!1;n==="post"?a.scheduler=C=>{ce(C,f&&f.suspense)}:n!=="sync"&&(h=!0,a.scheduler=(C,P)=>{P?C():Ko(C)}),a.augmentJob=C=>{t&&(C.flags|=4),h&&(C.flags|=2,f&&(C.id=f.uid,C.i=f))};const S=_n(e,t,a);return St&&(p?p.push(S):u&&S()),S}function lr(e,t,o){const s=this.proxy,i=k(e)?e.includes(".")?bi(s,e):()=>s[e]:e.bind(s,s);let n;E(t)?n=t:(n=t.handler,o=t);const r=Tt(this),a=vi(i,n.bind(s),o);return r(),a}function bi(e,t){const o=t.split(".");return()=>{let s=e;for(let i=0;i<o.length&&s;i++)s=s[o[i]];return s}}const ar=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ve(t)}Modifiers`]||e[`${ze(t)}Modifiers`];function cr(e,t,...o){if(e.isUnmounted)return;const s=e.vnode.props||B;let i=o;const n=t.startsWith("update:"),r=n&&ar(s,t.slice(7));r&&(r.trim&&(i=o.map(f=>k(f)?f.trim():f)),r.number&&(i=o.map(Vi)));let a,u=s[a=io(t)]||s[a=io(Ve(t))];!u&&n&&(u=s[a=io(ze(t))]),u&&we(u,e,6,i);const p=s[a+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,we(p,e,6,i)}}function _i(e,t,o=!1){const s=t.emitsCache,i=s.get(e);if(i!==void 0)return i;const n=e.emits;let r={},a=!1;if(!E(e)){const u=p=>{const f=_i(p,t,!0);f&&(a=!0,G(r,f))};!o&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!n&&!a?(W(e)&&s.set(e,null),null):(O(n)?n.forEach(u=>r[u]=null):G(r,n),W(e)&&s.set(e,r),r)}function Yt(e,t){return!e||!Wt(t)?!1:(t=t.slice(2).replace(/Once$/,""),j(e,t[0].toLowerCase()+t.slice(1))||j(e,ze(t))||j(e,t))}function fo(e){const{type:t,vnode:o,proxy:s,withProxy:i,propsOptions:[n],slots:r,attrs:a,emit:u,render:p,renderCache:f,props:h,data:S,setupState:C,ctx:P,inheritAttrs:M}=e,Q=Bt(e);let H,X;try{if(o.shapeFlag&4){const T=i||s,z=T;H=Se(p.call(z,T,f,h,C,S,P)),X=a}else{const T=t;H=Se(T.length>1?T(h,{attrs:a,slots:r,emit:u}):T(h,null)),X=t.props?a:ur(a)}}catch(T){gt.length=0,Qt(T,e,1),H=ge(yt)}let $=H;if(X&&M!==!1){const T=Object.keys(X),{shapeFlag:z}=$;T.length&&z&7&&(n&&T.some(Eo)&&(X=fr(X,n)),$=tt($,X,!1,!0))}return o.dirs&&($=tt($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(o.dirs):o.dirs),o.transition&&Xo($,o.transition),H=$,Bt(Q),H}const ur=e=>{let t;for(const o in e)(o==="class"||o==="style"||Wt(o))&&((t||(t={}))[o]=e[o]);return t},fr=(e,t)=>{const o={};for(const s in e)(!Eo(s)||!(s.slice(9)in t))&&(o[s]=e[s]);return o};function dr(e,t,o){const{props:s,children:i,component:n}=e,{props:r,children:a,patchFlag:u}=t,p=n.emitsOptions;if(t.dirs||t.transition)return!0;if(o&&u>=0){if(u&1024)return!0;if(u&16)return s?fs(s,r,p):!!r;if(u&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const S=f[h];if(r[S]!==s[S]&&!Yt(p,S))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===r?!1:s?r?fs(s,r,p):!0:!!r;return!1}function fs(e,t,o){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const n=s[i];if(t[n]!==e[n]&&!Yt(o,n))return!0}return!1}function pr({vnode:e,parent:t},o){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=o,t=t.parent;else break}}const xi=e=>e.__isSuspense;function hr(e,t){t&&t.pendingBranch?O(e)?t.effects.push(...e):t.effects.push(e):Sn(e)}const Re=Symbol.for("v-fgt"),Zt=Symbol.for("v-txt"),yt=Symbol.for("v-cmt"),po=Symbol.for("v-stc"),gt=[];let fe=null;function wt(e=!1){gt.push(fe=e?null:[])}function mr(){gt.pop(),fe=gt[gt.length-1]||null}let Rt=1;function ds(e,t=!1){Rt+=e,e<0&&fe&&t&&(fe.hasOnce=!0)}function gr(e){return e.dynamicChildren=Rt>0?fe||Je:null,mr(),Rt>0&&fe&&fe.push(e),e}function At(e,t,o,s,i,n){return gr(F(e,t,o,s,i,n,!0))}function yi(e){return e?e.__v_isVNode===!0:!1}function lt(e,t){return e.type===t.type&&e.key===t.key}const Ri=({key:e})=>e??null,Ht=({ref:e,ref_key:t,ref_for:o})=>(typeof e=="number"&&(e=""+e),e!=null?k(e)||Z(e)||E(e)?{i:Ce,r:e,k:t,f:!!o}:e:null);function F(e,t=null,o=null,s=0,i=null,n=e===Re?0:1,r=!1,a=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ri(t),ref:t&&Ht(t),scopeId:Zs,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ce};return a?(zo(u,o),n&128&&e.normalize(u)):o&&(u.shapeFlag|=k(o)?8:16),Rt>0&&!r&&fe&&(u.patchFlag>0||n&6)&&u.patchFlag!==32&&fe.push(u),u}const ge=vr;function vr(e,t=null,o=null,s=0,i=null,n=!1){if((!e||e===Ln)&&(e=yt),yi(e)){const a=tt(e,t,!0);return o&&zo(a,o),Rt>0&&!n&&fe&&(a.shapeFlag&6?fe[fe.indexOf(e)]=a:fe.push(a)),a.patchFlag=-2,a}if(Tr(e)&&(e=e.__vccOpts),t){t=br(t);let{class:a,style:u}=t;a&&!k(a)&&(t.class=oe(a)),W(u)&&(Bo(u)&&!O(u)&&(u=G({},u)),t.style=Po(u))}const r=k(e)?1:xi(e)?128:An(e)?64:W(e)?4:E(e)?2:0;return F(e,t,o,s,i,r,n,!0)}function br(e){return e?Bo(e)||ai(e)?G({},e):e:null}function tt(e,t,o=!1,s=!1){const{props:i,ref:n,patchFlag:r,children:a,transition:u}=e,p=t?_r(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Ri(p),ref:t&&t.ref?o&&n?O(n)?n.concat(Ht(t)):[n,Ht(t)]:Ht(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Re?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tt(e.ssContent),ssFallback:e.ssFallback&&tt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&s&&Xo(f,u.clone(f)),f}function Ao(e=" ",t=0){return ge(Zt,null,e,t)}function Se(e){return e==null||typeof e=="boolean"?ge(yt):O(e)?ge(Re,null,e.slice()):yi(e)?Pe(e):ge(Zt,null,String(e))}function Pe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:tt(e)}function zo(e,t){let o=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(O(t))o=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),zo(e,i()),i._c&&(i._d=!0));return}else{o=32;const i=t._;!i&&!ai(t)?t._ctx=Ce:i===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else E(t)?(t={default:t,_ctx:Ce},o=32):(t=String(t),s&64?(o=16,t=[Ao(t)]):o=8);e.children=t,e.shapeFlag|=o}function _r(...e){const t={};for(let o=0;o<e.length;o++){const s=e[o];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=oe([t.class,s.class]));else if(i==="style")t.style=Po([t.style,s.style]);else if(Wt(i)){const n=t[i],r=s[i];r&&n!==r&&!(O(n)&&n.includes(r))&&(t[i]=n?[].concat(n,r):r)}else i!==""&&(t[i]=s[i])}return t}function xe(e,t,o,s=null){we(e,t,7,[o,s])}const xr=ni();let yr=0;function Rr(e,t,o){const s=e.type,i=(t?t.appContext:e.appContext)||xr,n={uid:yr++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ki(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ui(s,i),emitsOptions:_i(s,i),emit:null,emitted:null,propsDefaults:B,inheritAttrs:s.inheritAttrs,ctx:B,data:B,props:B,attrs:B,slots:B,refs:B,setupState:B,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=cr.bind(null,n),e.ce&&e.ce(n),n}let ne=null,$t,To;{const e=Gt(),t=(o,s)=>{let i;return(i=e[o])||(i=e[o]=[]),i.push(s),n=>{i.length>1?i.forEach(r=>r(n)):i[0](n)}};$t=t("__VUE_INSTANCE_SETTERS__",o=>ne=o),To=t("__VUE_SSR_SETTERS__",o=>St=o)}const Tt=e=>{const t=ne;return $t(e),e.scope.on(),()=>{e.scope.off(),$t(t)}},ps=()=>{ne&&ne.scope.off(),$t(null)};function Si(e){return e.vnode.shapeFlag&4}let St=!1;function Sr(e,t=!1,o=!1){t&&To(t);const{props:s,children:i}=e.vnode,n=Si(e);Gn(e,s,n,t),Zn(e,i,o);const r=n?Cr(e,t):void 0;return t&&To(!1),r}function Cr(e,t){const o=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,qn);const{setup:s}=o;if(s){Fe();const i=e.setupContext=s.length>1?Ar(e):null,n=Tt(e),r=Ct(s,e,0,[e.props,i]),a=Os(r);if(He(),n(),(a||e.sp)&&!ht(e)&&ei(e),a){if(r.then(ps,ps),t)return r.then(u=>{hs(e,u,t)}).catch(u=>{Qt(u,e,0)});e.asyncDep=r}else hs(e,r,t)}else Ci(e,t)}function hs(e,t,o){E(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:W(t)&&(e.setupState=ks(t)),Ci(e,o)}let ms;function Ci(e,t,o){const s=e.type;if(!e.render){if(!t&&ms&&!s.render){const i=s.template||$o(e).template;if(i){const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:u}=s,p=G(G({isCustomElement:n,delimiters:a},r),u);s.render=ms(i,p)}}e.render=s.render||pe}{const i=Tt(e);Fe();try{Nn(e)}finally{He(),i()}}}const wr={get(e,t){return Y(e,"get",""),e[t]}};function Ar(e){const t=o=>{e.exposed=o||{}};return{attrs:new Proxy(e.attrs,wr),slots:e.slots,emit:e.emit,expose:t}}function ko(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ks(fn(e.exposed)),{get(t,o){if(o in t)return t[o];if(o in mt)return mt[o](e)},has(t,o){return o in t||o in mt}})):e.proxy}function Tr(e){return E(e)&&"__vccOpts"in e}const Ir=(e,t)=>vn(e,t,St),Or="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Io;const gs=typeof window<"u"&&window.trustedTypes;if(gs)try{Io=gs.createPolicy("vue",{createHTML:e=>e})}catch{}const wi=Io?e=>Io.createHTML(e):e=>e,Er="http://www.w3.org/2000/svg",Dr="http://www.w3.org/1998/Math/MathML",Te=typeof document<"u"?document:null,vs=Te&&Te.createElement("template"),Mr={insert:(e,t,o)=>{t.insertBefore(e,o||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,o,s)=>{const i=t==="svg"?Te.createElementNS(Er,e):t==="mathml"?Te.createElementNS(Dr,e):o?Te.createElement(e,{is:o}):Te.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>Te.createTextNode(e),createComment:e=>Te.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Te.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,o,s,i,n){const r=o?o.previousSibling:t.lastChild;if(i&&(i===n||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),o),!(i===n||!(i=i.nextSibling)););else{vs.innerHTML=wi(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=vs.content;if(s==="svg"||s==="mathml"){const u=a.firstChild;for(;u.firstChild;)a.appendChild(u.firstChild);a.removeChild(u)}t.insertBefore(a,o)}return[r?r.nextSibling:t.firstChild,o?o.previousSibling:t.lastChild]}},Pr=Symbol("_vtc");function Ur(e,t,o){const s=e[Pr];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):o?e.setAttribute("class",t):e.className=t}const bs=Symbol("_vod"),jr=Symbol("_vsh"),Vr=Symbol(""),Fr=/(^|;)\s*display\s*:/;function Hr(e,t,o){const s=e.style,i=k(o);let n=!1;if(o&&!i){if(t)if(k(t))for(const r of t.split(";")){const a=r.slice(0,r.indexOf(":")).trim();o[a]==null&&Lt(s,a,"")}else for(const r in t)o[r]==null&&Lt(s,r,"");for(const r in o)r==="display"&&(n=!0),Lt(s,r,o[r])}else if(i){if(t!==o){const r=s[Vr];r&&(o+=";"+r),s.cssText=o,n=Fr.test(o)}}else t&&e.removeAttribute("style");bs in e&&(e[bs]=n?s.display:"",e[jr]&&(s.display="none"))}const _s=/\s*!important$/;function Lt(e,t,o){if(O(o))o.forEach(s=>Lt(e,t,s));else if(o==null&&(o=""),t.startsWith("--"))e.setProperty(t,o);else{const s=Lr(e,t);_s.test(o)?e.setProperty(ze(s),o.replace(_s,""),"important"):e[s]=o}}const xs=["Webkit","Moz","ms"],ho={};function Lr(e,t){const o=ho[t];if(o)return o;let s=Ve(t);if(s!=="filter"&&s in e)return ho[t]=s;s=Es(s);for(let i=0;i<xs.length;i++){const n=xs[i]+s;if(n in e)return ho[t]=n}return t}const ys="http://www.w3.org/1999/xlink";function Rs(e,t,o,s,i,n=Bi(t)){s&&t.startsWith("xlink:")?o==null?e.removeAttributeNS(ys,t.slice(6,t.length)):e.setAttributeNS(ys,t,o):o==null||n&&!Ms(o)?e.removeAttribute(t):e.setAttribute(t,n?"":ot(o)?String(o):o)}function Ss(e,t,o,s,i){if(t==="innerHTML"||t==="textContent"){o!=null&&(e[t]=t==="innerHTML"?wi(o):o);return}const n=e.tagName;if(t==="value"&&n!=="PROGRESS"&&!n.includes("-")){const a=n==="OPTION"?e.getAttribute("value")||"":e.value,u=o==null?e.type==="checkbox"?"on":"":String(o);(a!==u||!("_value"in e))&&(e.value=u),o==null&&e.removeAttribute(t),e._value=o;return}let r=!1;if(o===""||o==null){const a=typeof e[t];a==="boolean"?o=Ms(o):o==null&&a==="string"?(o="",r=!0):a==="number"&&(o=0,r=!0)}try{e[t]=o}catch{}r&&e.removeAttribute(i||t)}function qr(e,t,o,s){e.addEventListener(t,o,s)}function Nr(e,t,o,s){e.removeEventListener(t,o,s)}const Cs=Symbol("_vei");function Br(e,t,o,s,i=null){const n=e[Cs]||(e[Cs]={}),r=n[t];if(s&&r)r.value=s;else{const[a,u]=Kr(t);if(s){const p=n[t]=Wr(s,i);qr(e,a,p,u)}else r&&(Nr(e,a,r,u),n[t]=void 0)}}const ws=/(?:Once|Passive|Capture)$/;function Kr(e){let t;if(ws.test(e)){t={};let s;for(;s=e.match(ws);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ze(e.slice(2)),t]}let mo=0;const Xr=Promise.resolve(),$r=()=>mo||(Xr.then(()=>mo=0),mo=Date.now());function Wr(e,t){const o=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=o.attached)return;we(zr(s,o.value),t,5,[s])};return o.value=e,o.attached=$r(),o}function zr(e,t){if(O(t)){const o=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{o.call(e),e._stopped=!0},t.map(s=>i=>!i._stopped&&s&&s(i))}else return t}const As=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,kr=(e,t,o,s,i,n)=>{const r=i==="svg";t==="class"?Ur(e,s,r):t==="style"?Hr(e,o,s):Wt(t)?Eo(t)||Br(e,t,o,s,n):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gr(e,t,s,r))?(Ss(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Rs(e,t,s,r,n,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!k(s))?Ss(e,Ve(t),s,n,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Rs(e,t,s,r))};function Gr(e,t,o,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&As(t)&&E(o));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return As(t)&&k(o)?!1:t in e}const Qr=G({patchProp:kr},Mr);let Ts;function Jr(){return Ts||(Ts=tr(Qr))}const Yr=(...e)=>{const t=Jr().createApp(...e),{mount:o}=t;return t.mount=s=>{const i=el(s);if(!i)return;const n=t._component;!E(n)&&!n.render&&!n.template&&(n.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=o(i,!1,Zr(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function Zr(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function el(e){return k(e)?document.querySelector(e):e}const Go=(e,t)=>{const o=e.__vccOpts||e;for(const[s,i]of t)o[s]=i;return o},tl={},ol={class:"navbar bg-white",style:{"border-bottom":"2px solid var(--cor-contraste)"}};function sl(e,t){return wt(),At("div",ol,t[0]||(t[0]=[F("ul",{class:"nav justify-content-center w-100 navbar-light"},[F("li",{class:"nav-item"},[F("img",{src:"https://media.licdn.com/dms/image/v2/D4D0BAQHef3aYW5xeNg/company-logo_200_200/company-logo_200_200/0/1697397714063?e=1743033600&v=beta&t=gB2BNxwEoX5vwPJVT_LMWt-3G6TCP0-x5GM4bYVxytA",alt:"logo lamsa",height:"50"})])],-1)]))}const il=Go(tl,[["render",sl]]),vt=Ye(0),go=Ye(!1);const nl={setup(){let e=Ye(!1),t=Ye(!1);const o=Ye(null);return{btn1:e,btn2:t,ativarLista:r=>{r===1?e.value=!e.value:t.value=!t.value},setSession:r=>{vt.value=r,o.value=r},activeItem:o,activeSection:vt,showSidebar:go,toggleSidebar:()=>{go.value=!go.value}}}},rl={class:"sidebar-content"},ll={class:"side-list"};function al(e,t,o,s,i,n){return wt(),At("div",null,[F("button",{class:"hamburger",onClick:t[0]||(t[0]=(...r)=>s.toggleSidebar&&s.toggleSidebar(...r))},t[11]||(t[11]=[F("i",{class:"bi bi-list"},null,-1)])),F("div",{class:oe(["sidebar",{"sidebar-visible":s.showSidebar}])},[F("div",rl,[F("ul",ll,[F("li",null,[F("button",{class:"btn-list",onClick:t[1]||(t[1]=r=>s.ativarLista(1))},[t[12]||(t[12]=Ao("Meta Quest2 ")),F("span",null,[F("i",{class:oe(["bi","bi-caret-right-fill",s.btn1?"rotate":""])},null,2)])]),F("ul",{class:oe(s.btn1?"active":"inactive")},[F("li",{onClick:t[2]||(t[2]=r=>s.setSession(1)),class:oe({active:s.activeItem===1})},"Introdução",2),F("li",{onClick:t[3]||(t[3]=r=>s.setSession(2)),class:oe({active:s.activeItem===2})},"Download",2),F("li",{onClick:t[4]||(t[4]=r=>s.setSession(3)),class:oe({active:s.activeItem===3})},"Dicas",2)],2)]),F("li",null,[F("button",{class:"btn-list",onClick:t[5]||(t[5]=r=>s.ativarLista(2))},[t[13]||(t[13]=Ao("Unity ")),F("span",null,[F("i",{class:oe(["bi","bi-caret-right-fill",s.btn2?"rotate":""])},null,2)])]),F("ul",{class:oe(s.btn2?"active":"inactive")},[F("li",{onClick:t[6]||(t[6]=r=>s.setSession(4)),class:oe({active:s.activeItem===4})},"Introdução",2),F("li",{onClick:t[7]||(t[7]=r=>s.setSession(5)),class:oe({active:s.activeItem===5})},"Download",2),F("li",{onClick:t[8]||(t[8]=r=>s.setSession(6)),class:oe({active:s.activeItem===6})},"Exemplo",2),F("li",{onClick:t[9]||(t[9]=r=>s.setSession(7)),class:oe({active:s.activeItem===7})},"Xr ToolKit",2)],2)]),F("li",null,[F("button",{class:"btn-list",onClick:t[10]||(t[10]=r=>s.setSession(8))},"Referências")])])])],2)])}const cl=Go(nl,[["render",al],["__scopeId","data-v-5d472598"]]),Is={0:`<div class="container-menu">
              <h2 class="mt-4">Guia de Desenvolvimento VR com Meta Quest 2 e Unity</h2>
              <p class="ps-5 mt-2 pe-5">
                  Explore este guia prático e detalhado sobre como integrar o Meta Quest 2 à Unity para criar experiências imersivas em realidade virtual. Este site é dividido em duas seções principais:
              </p>
              <ul>
                  <li></li>
              </ul>
              <div class="row mt-5 mx-auto d-flex justify-content-center">
                  <div class="col-sm-5">
                      <div class="card">
                          <div class="card-body">
                              <h1 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-unity" viewBox="0 0 16 16"><path d="M15 11.2V3.733L8.61 0v2.867l2.503 1.466c.099.067.099.2 0 .234L8.148 6.3c-.099.067-.197.033-.263 0L4.92 4.567c-.099-.034-.099-.2 0-.234l2.504-1.466V0L1 3.733V11.2v-.033.033l2.438-1.433V6.833c0-.1.131-.166.197-.133L6.6 8.433c.099.067.132.134.132.234v3.466c0 .1-.132.167-.198.134L4.031 10.8l-2.438 1.433L7.983 16l6.391-3.733-2.438-1.434L9.434 12.3c-.099.067-.198 0-.198-.133V8.7c0-.1.066-.2.132-.233l2.965-1.734c.099-.066.197 0 .197.134V9.8z"/></svg></h1>
                              <p class="card-text">Unity: Configuração do ambiente de desenvolvimento.</p>
                              <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-5">
                      <div class="card">
                          <div class="card-body">
                              <h1 class="card-title"><i class="bi bi-meta custom-icon"></i></h1>
                              <p class="card-text">Meta Quest 2: Configuração do dispositivo e integração com a Unity.</p>
                              <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>`,1:`<div class="container-menu">
                <header class="text-Black text-center pt-4">
                    <h2>Guia de Desenvolvimento para Horizon OS no Unity</h2>
                </header>

                <div class="container my-5 px-5 text-start ms-5">
                    <section>
                        <h2>Introdução</h2>
                        <p>Neste guia, você aprenderá como desenvolver aplicativos de <strong>realidade estendida (XR)</strong> para o <strong>Meta Horizon OS</strong> no <strong>Unity</strong>. Este fluxo de trabalho inclui requisitos, ferramentas e práticas recomendadas para criar experiências imersivas com suporte a <strong>Meta Quest</strong>.</p>
                    </section>

                    <section class="mt-5">
                        <h2>Requisitos para o Desenvolvimento</h2>
                        <ul>
                            <li><strong>Fone de ouvido Meta Quest</strong> compatível.</li>
                            <li>Computador com <strong>Windows 10+</strong> (64 bits) ou <strong>macOS Sierra 10.10+</strong>.</li>
                            <li><strong>Unity Editor 2021 LTS ou superior</strong>, com os seguintes módulos instalados:
                                <ul>
                                    <li>Suporte para <strong>Android Build</strong>.</li>
                                    <li><strong>OpenJDK</strong>.</li>
                                    <li><strong>Android SDK e NDK</strong>.</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section class="mt-5">
                        <h2>Fluxo de Trabalho de Desenvolvimento</h2>

                        <h3>1. Pacotes do Meta XR SDK</h3>
                        <p>A Meta fornece pacotes essenciais para facilitar o desenvolvimento, incluindo:</p>
                        <ul>
                            <li><strong>Meta XR Core SDK</strong>: Rig XR personalizado, suporte para entrada de controle e rastreamento de dispositivos.</li>
                            <li><strong>Meta XR Interaction SDK</strong>: Componentes personalizáveis para interações com o usuário.</li>
                        </ul>

                        <h3>2. Configuração da Cena XR</h3>
                        <p>Utilize o <strong>XR Origin</strong> para mapeamento de dados de rastreamento e controle da movimentação da câmera.</p>

                        <h3>3. Manipulando Entrada do Usuário</h3>
                        <ul>
                            <li>Entrada da cabeça e das mãos para criar experiências imersivas.</li>
                            <li>Interações customizadas com APIs do <strong>Meta XR Core SDK</strong>.</li>
                        </ul>

                        <h3>4. Rastreamento Corporal e Facial</h3>
                        <p>Use o <strong>Meta XR Movement SDK</strong> para integrar movimentos do corpo e do rosto dos usuários.</p>

                        <h3>5. Entrada de Texto e Voz</h3>
                        <ul>
                            <li><strong>Teclado</strong>: Suporte para entrada de texto via teclado físico ou virtual.</li>
                            <li><strong>Entrada de Voz</strong>: Use o <strong>Meta XR Voice SDK</strong> para comandos de voz e interações baseadas em fala.</li>
                        </ul>

                        <h3>6. Gerenciamento de Entrada Bruta</h3>
                        <p>Acesse e manipule dados do controlador e do headset para criar gestos personalizados.</p>
                    </section>

                    <section class="mt-5">
                        <h2>Ferramentas e Testes</h2>

                        <h3>1. Ferramentas de Teste</h3>
                        <ul>
                            <li><strong>Link</strong>: Transmita seu aplicativo para o headset via USB-C ou Wi-Fi (Windows).</li>
                            <li><strong>Meta XR Simulator</strong>: Simula o ambiente XR no computador (Windows e macOS).</li>
                            <li><strong>Immersive Debugger</strong>: Ferramenta para depuração no editor Unity.</li>
                        </ul>

                        <h3>2. Gerenciamento de Dispositivos</h3>
                        <p>Use o <strong>Meta Quest Developer Hub (MQDH)</strong> para:</p>
                        <ul>
                            <li>Gerenciar dispositivos de teste.</li>
                            <li>Visualizar logs e capturar vídeos do headset.</li>
                            <li>Implantar aplicativos diretamente no dispositivo.</li>
                        </ul>
                    </section>

                    <section class="mt-5">
                        <h2>Explorando Novos Recursos</h2>
                        <p>Use o <strong>Building Blocks</strong> do <strong>Meta XR Core SDK</strong> para explorar recursos e exemplos, ou teste novos recursos com os prefabs fornecidos.</p>
                    </section>

                    <section class="mt-5">
                        <h2>Conclusão</h2>
                        <p>Com ferramentas como <strong>Meta XR Core SDK</strong>, <strong>Meta XR Interaction SDK</strong>, e <strong>Meta Quest Developer Hub</strong>, o desenvolvimento para o <strong>Horizon OS</strong> se torna mais acessível e eficiente. Siga as práticas recomendadas para criar experiências imersivas e de alta qualidade.</p>
                    </section>
                </div>

                <footer class="text-center py-3">
                    <p>&copy; 2024 Guia de Desenvolvimento para Horizon OS. Todos os direitos reservados.</p>
                </footer>
          </div>`,2:`
        <div class="container-menu align-items-start">
            <h2 class="mt-4 mx-auto">Comece com o Meta Quest Developer Hub</h2>
            <p class="ps-5 mt-2 mx-5">
                Configure seu ambiente de desenvolvimento com o Meta Quest Developer Hub (MQDH). Siga os passos para preparar seu dispositivo e iniciar o desenvolvimento em realidade virtual.
            </p>
            <div class="text-start px-5 mx-5 px-5  ">
            <ul>
                <li><strong>Pré-requisitos:</strong> 
                    <ul>
                        <li>Conta de desenvolvedor Meta</li>
                        <li>Fone de ouvido Meta Quest</li>
                        <li>Cabo USB-C</li>
                        <li>Dispositivo Android ou iOS</li>
                    </ul>
                </li>
                <li><strong>Instalação:</strong>
                    <ul>
                        <li>Baixe e instale o MQDH para <a target="_blank" href="https://developers.meta.com/horizon/downloads/package/oculus-developer-hub-mac">macOS</a> ou <a target="_blank" href="https://developers.meta.com/horizon/downloads/package/oculus-developer-hub-win">Windows</a></li>
                        <li>Faça login com sua conta de desenvolvedor Meta</li>
                    </ul>
                </li>
                <li><strong>Conectando o Fone de Ouvido:</strong>
                    <ul>
                        <li>Ative o Modo Desenvolvedor no aplicativo Meta Horizon</li>
                        <li>Conecte o headset ao computador usando USB-C</li>
                        <li>Aceite as permissões para depuração USB</li>
                    </ul>
                </li>
                <li><strong>Verificação da Conexão:</strong>
                    <ul>
                        <li>Acesse "Gerenciador de Dispositivos" no MQDH</li>
                        <li>Verifique o status da conexão e selecione o dispositivo ativo</li>
                    </ul>
                </li>
                <li><strong>Atualização do MQDH:</strong>
                    <ul>
                        <li>Atualizações regulares garantem novos recursos e correções</li>
                        <li>O MQDH suporta atualização automática</li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>    
    `,3:`
    <div class="container-menu align-items-start text-start">
        <header class="text-Black mx-auto py-4">
            <h2 class="mx-auto">Gerencie seu fone de ouvido com MQDH</h2>
        </header>
 
        <section class="mb-4 ms-5 ps-5" >
            <h2>Alterar o Apelido do Dispositivo</h2>
            <p>Para dar um apelido ao seu dispositivo:</p>
            <ol>
                <li>Selecione <strong>Gerenciador de dispositivos</strong> no painel de navegação esquerdo.</li>
                <li>Em <strong>Dispositivos</strong>, selecione o ícone de engrenagem ao lado do dispositivo.</li>
                <li>Em <strong>Geral</strong>, selecione <strong>Alterar</strong> ao lado de Apelido do dispositivo.</li>
                <li>Insira um novo apelido e selecione <strong>Salvar</strong>.</li>
            </ol>
        </section>

        <section class="mb-4 ms-5 ps-5">
            <h2>Desligar o Sistema de Limites</h2>
            <p>Para desativar o sistema de limites:</p>
            <ol>
                <li>Selecione <strong>Gerenciador de dispositivos</strong>.</li>
                <li>Desative a opção <strong>Limite</strong> em <strong>Ações do dispositivo</strong>.</li>
            </ol>
            <p>Alternativamente, use o atalho <code>CTRL + Shift + G</code> para ativar ou desativar.</p>
        </section>

        <section class="mb-4 ms-5 ps-5">
            <h2>Desligar o Sensor de Proximidade</h2>
            <p>Para manter o dispositivo ativo e facilitar o desenvolvimento, desative o sensor de proximidade:</p>
            <ol>
                <li>Selecione <strong>Gerenciador de dispositivos</strong>.</li>
                <li>Em <strong>Ações do dispositivo</strong>, desative o <strong>Sensor de proximidade</strong>.</li>
            </ol>
            <p>Use o atalho <code>CTRL + Shift + P</code> para ligar ou desligar.</p>
        </section>

        <section class="mb-4 ms-5 ps-5">
            <h2>Habilitar ADB via Wi-Fi</h2>
            <p>Para usar ADB sem fio:</p>
            <ol>
                <li>Abra <strong>Gerenciador de dispositivos</strong>.</li>
                <li>Em <strong>Ações do dispositivo</strong>, ative a opção <strong>ADB over Wi-Fi</strong>.</li>
                <li>Desconecte o cabo USB para usar o dispositivo sem fio.</li>
            </ol>
        </section>

        <section class="mb-4 ms-5 ps-5">
            <h2>Configurar Link</h2>
            <p>Para habilitar o Link:</p>
            <ol>
                <li>Abra <strong>Gerenciador de dispositivos</strong>.</li>
                <li>Selecione o modo de conexão (Cabo ou Air Link) ao lado de <strong>Meta Quest Link</strong>.</li>
            </ol>
        </section>

        <section class="mb-4 ms-5 ps-5">
            <h2>Configurar as Definições do MQDH</h2>
            <p>Para visualizar e atualizar as configurações:</p>
            <ol>
                <li>Abra o MQDH.</li>
                <li>Selecione <strong>Configurações</strong> no painel esquerdo.</li>
                <li>Escolha entre as guias: <strong>Geral</strong>, <strong>Sobre</strong>, <strong>Notificações</strong>, ou <strong>Interno</strong> para editar as configurações.</li>
            </ol>
        </section>
    </div>
    `,4:`
    <div class="container-menu mt-4">
    <header class="text-center">
        <h2>Introdução à Unity</h2>
    </header>

    <section class="mt-5 mx-5 px-5 text-start">
        <h2 class="text-center mb-2">O que é a Unity?</h2>
        <p>A Unity é uma plataforma de desenvolvimento multiplataforma que permite criar jogos, simuladores e experiências interativas. Inicialmente voltada para o desenvolvimento de jogos em 2D e 3D, a Unity se expandiu para suportar uma variedade de plataformas e dispositivos, incluindo realidade virtual (VR), realidade aumentada (AR), dispositivos móveis, consoles e PC.</p>

        <p>Com uma interface intuitiva e fácil de aprender, a Unity é uma das ferramentas mais acessíveis tanto para desenvolvedores iniciantes quanto para profissionais experientes. Sua poderosa engine de física, gráficos de alta qualidade, e a flexibilidade do código em C# tornam a Unity uma escolha popular para a criação de experiências imersivas.</p>
    </section>

    <section class="mt-5 mx-5 px-5 text-start">
        <h3>Principais Características da Unity</h3>
        <ul>
            <li><strong>Multiplataforma:</strong> Unity permite que você crie experiências que podem ser distribuídas em diversas plataformas, como Windows, macOS, Android, iOS, PlayStation, Xbox, VR e muito mais.</li>
            <li><strong>Facilidade de uso:</strong> Com uma interface amigável, a Unity torna o desenvolvimento acessível para iniciantes, ao mesmo tempo que oferece ferramentas poderosas para desenvolvedores experientes.</li>
            <li><strong>Suporte a C#:</strong> A Unity utiliza C# como sua principal linguagem de programação, o que torna o desenvolvimento flexível e eficiente, com fácil integração de scripts e recursos personalizados.</li>
            <li><strong>Asset Store:</strong> A Unity oferece uma loja de recursos onde você pode comprar ou baixar gratuitamente uma vasta gama de modelos 3D, texturas, scripts e ferramentas para acelerar o desenvolvimento de seu projeto.</li>
            <li><strong>Ferramentas de VR e AR:</strong> A Unity é amplamente utilizada no desenvolvimento de experiências de realidade virtual (VR) e aumentada (AR), proporcionando suporte robusto para dispositivos como o Meta Quest 2, HTC Vive, Oculus Rift e outros.</li>
        </ul>
    </section>

    <section class="mt-5 mx-5 px-5 text-start">
        <h2>Por que escolher a Unity?</h2>
        <p>A Unity é amplamente adotada pela comunidade de desenvolvedores devido a suas inúmeras vantagens:</p>
        <ul>
            <li><strong>Documentação abrangente:</strong> A Unity possui uma extensa documentação oficial, tutoriais e fóruns comunitários onde você pode aprender e solucionar problemas facilmente.</li>
            <li><strong>Comunidade ativa:</strong> A comunidade global da Unity é vibrante, com milhares de desenvolvedores contribuindo com tutoriais, plugins e outros recursos úteis.</li>
            <li><strong>Escalabilidade:</strong> De jogos simples a grandes experiências de VR, a Unity pode ser usada para criar projetos de qualquer tamanho, desde protótipos rápidos até jogos de grande escala.</li>
            <li><strong>Futuro promissor:</strong> A Unity continua a evoluir, com novos recursos e melhorias a cada atualização, garantindo que você tenha acesso às tecnologias mais recentes e poderosas no campo do desenvolvimento.</li>
        </ul>
    </section>

    <section class="mt-5 mx-5 px-5 text-start">
        <h2>Unity no Desenvolvimento de Realidade Virtual (VR)</h2>
        <p>Nos últimos anos, a Unity se tornou uma das principais plataformas para o desenvolvimento de experiências imersivas de realidade virtual. Sua integração com dispositivos VR, como o Meta Quest 2, oferece aos desenvolvedores as ferramentas necessárias para criar mundos virtuais de alta qualidade e totalmente interativos.</p>

        <p>Com a Unity, é possível:</p>
        <ul>
            <li><strong>Desenvolver ambientes 3D imersivos:</strong> Crie mundos virtuais detalhados e interativos que respondem aos movimentos do jogador, proporcionando uma experiência imersiva.</li>
            <li><strong>Integrar dispositivos de entrada VR:</strong> Conecte e utilize controladores VR e sensores de movimento para criar interações naturais dentro do ambiente virtual.</li>
            <li><strong>Testar e otimizar:</strong> A Unity permite que você teste e otimize suas experiências VR em tempo real, garantindo que o desempenho e a fluidez sejam mantidos em dispositivos como o Meta Quest 2.</li>
        </ul>
    </section>

</div>
    `,5:`
    <div class="container-menu mt-2">
    <header class="text-center">
        <h2>Área de Downloads</h2>
    </header>

    <section class="mt-2">
        

        <section class="mt-5 mx-5 px-5 text-start">
        <h2>Instruções de Instalação do Unity</h2>
        <p>Após o download, siga as instruções abaixo para instalar e configurar o ambiente de desenvolvimento Unity:</p>
        <ul>
            <li><strong>Unity Installer:</strong> Baixe o instalador adequado para o seu sistema operacional (Windows ou macOS). Você pode acessar o instalador mais recente no [site oficial da Unity](https://unity.com/download).</li>
            <li><strong>Iniciar Instalação:</strong> Após o download, abra o arquivo de instalação. No caso do Windows, basta clicar duas vezes no arquivo .exe. Para macOS, basta abrir o arquivo .dmg.</li>
            <li><strong>Escolher Componentes:</strong> Durante a instalação, você será solicitado a escolher os componentes que deseja instalar, como a versão do Unity, suporte a plataformas específicas (Android, iOS, etc.), e o Visual Studio (recomendado para edição de scripts).</li>
            <li><strong>Configuração Inicial:</strong> Após a instalação, abra o Unity Hub. O Hub é a interface centralizada para gerenciar seus projetos e versões do Unity. Você precisará fazer login com uma conta Unity ou criar uma nova se ainda não tiver.</li>
            <li><strong>Criar um Novo Projeto:</strong> Após configurar o Unity Hub, clique em "New Project" e escolha o template adequado para o seu projeto (2D, 3D, ou VR).</li>
        </ul>
        </section>
        <h3>Downloads Disponíveis</h3>
        <!-- Exemplo de download de Unity -->
        <div class="row mt-3 py-5">
            <div class="col-md-6 mx-auto">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Unity Installer</h5>
                        <p class="card-text">Baixe o instalador da Unity para configurar seu ambiente de desenvolvimento. A versão mais recente do Unity está disponível para Windows e macOS.</p>
                        <a target="_blank" href="https://unity.com/pt/download" class="btn btn-primary" target="_blank">Baixar Unity</a>
                    </div>
                </div>
            </div>
    </section>
    </div>
    `,6:`
    <section class="mt-5 mx-5 px-5 text-start">
    <h2>Passo a Passo: Criando Seu Primeiro Projeto de Realidade Virtual (VR) na Unity</h2>
    <p>Siga estas etapas para criar seu primeiro projeto de realidade virtual utilizando Unity. Este guia assume que você já tenha a Unity instalada e configurada conforme as instruções anteriores.</p>
    <ol>
        <li><strong>Criação do Novo Projeto:</strong>
            <ul>
                <li>Abra o Unity Hub e clique em "New Project".</li>
                <li>Escolha o template "3D" para o projeto.</li>
                <li>Escolha um nome para o projeto e um local onde ele será salvo. Clique em "Create".</li>
            </ul>
        </li>
        <li><strong>Configuração para Realidade Virtual:</strong>
            <ul>
                <li>Com o projeto aberto, vá até o menu "Edit" e selecione "Project Settings".</li>
                <li>Na janela que abrir, clique em "Player" no painel da esquerda.</li>
                <li>Na seção "XR Settings", marque a opção "Virtual Reality Supported" para ativar o suporte a VR.</li>
                <li>Adicione o dispositivo VR desejado na lista de "Virtual Reality SDKs". Para Oculus, por exemplo, selecione "Oculus".</li>
            </ul>
        </li>
        <li><strong>Importação do Pacote XR Interaction Toolkit:</strong>
            <ul>
                <li>Vá para o "Window" no menu superior e clique em "Package Manager".</li>
                <li>No Package Manager, procure por "XR Interaction Toolkit" na lista de pacotes disponíveis.</li>
                <li>Selecione o pacote "XR Interaction Toolkit" e clique em "Install". Esse pacote oferece ferramentas essenciais para interação em VR.</li>
            </ul>
        </li>
        <li><strong>Configuração da Câmera para VR:</strong>
            <ul>
                <li>Na Hierarquia, clique com o botão direito do mouse e selecione "XR" > "XR Rig".</li>
                <li>Isso criará uma nova "XR Rig" na cena, que inclui a câmera e os controladores de VR, configurados para movimento e interação.</li>
                <li>Verifique a posição da "XR Rig" na cena. Normalmente, ela deve estar posicionada no (0, 0, 0) para começar a experiência de VR no centro.</li>
            </ul>
        </li>
        <li><strong>Adicionar Interação com o Controlador:</strong>
            <ul>
                <li>Na "XR Rig", você verá os objetos "LeftHand Controller" e "RightHand Controller". Cada um representa o controlador de mão no VR.</li>
                <li>Adicione interações com objetos criando "Grabbables" ou outros tipos de interação dentro da cena. Para isso, crie objetos e adicione componentes do tipo "XR Grab Interactable".</li>
                <li>Esses objetos agora poderão ser pegados e manipulados pelo usuário dentro da experiência de VR.</li>
            </ul>
        </li>
        <li><strong>Testar o Projeto:</strong>
            <ul>
                <li>Conecte seu headset VR ao computador e certifique-se de que está ligado e configurado corretamente.</li>
                <li>No Unity, clique em "Play" para iniciar a cena e testar a experiência de realidade virtual.</li>
                <li>Se tudo estiver configurado corretamente, você deverá ver a cena na perspectiva do VR e interagir com os objetos com os controladores de mão.</li>
            </ul>
        </li>
        <li><strong>Construir para o dispositivo VR:</strong>
            <ul>
                <li>Quando o projeto estiver pronto, você pode construir para o seu dispositivo VR.</li>
                <li>Vá em "File" > "Build Settings" e selecione a plataforma adequada (por exemplo, Android para Oculus Quest).</li>
                <li>Clique em "Build and Run" para criar o aplicativo e testá-lo diretamente no seu dispositivo VR.</li>
            </ul>
        </li>
    </ol>
</section>
    `,7:`
     <section class="mt-5 mx-5 px-5 text-start">
    <h2 class="text-center">Entendendo o XR Interaction Toolkit</h2>
    <p>O XR Interaction Toolkit da Unity é uma poderosa ferramenta que permite criar experiências imersivas de realidade virtual (VR) e realidade aumentada (AR) de forma fácil e eficiente. Ele oferece uma série de componentes e funcionalidades que facilitam a interação com objetos no ambiente virtual, tornando mais simples a criação de interações como pegar, soltar, empurrar e muito mais.</p>
    
    <h3>O que é o XR Interaction Toolkit?</h3>
    <p>O <strong>XR Interaction Toolkit</strong> é um pacote da Unity que fornece uma estrutura pronta para interações em projetos de realidade virtual e aumentada. Ele facilita a criação de interações entre o usuário e os objetos da cena, utilizando controladores de VR, mãos virtuais e gestos.</p>
    
    <h3>Principais Componentes do XR Interaction Toolkit</h3>
    <ul>
        <li><strong>XR Rig:</strong> O XR Rig é a estrutura principal para a interação do jogador no espaço 3D. Ele inclui a câmera e os controladores de movimento. Ao adicionar o XR Rig à cena, você garante que a posição e os movimentos do usuário sejam atualizados automaticamente, criando uma experiência mais realista.</li>
        <li><strong>XR Controller:</strong> Representa os controladores do dispositivo de VR. Eles permitem que o usuário interaja com objetos virtuais através de ações como agarrar, apontar e pressionar botões.</li>
        <li><strong>XR Grab Interactable:</strong> Com esse componente, você pode fazer objetos na cena interagirem com os controladores do usuário. Adicionando esse componente a um objeto, ele se torna "pegável", permitindo que o usuário o pegue, mova e solte.</li>
        <li><strong>XR Ray Interactor:</strong> Este componente cria um feixe (raycast) que permite ao usuário interagir com objetos a distância. É útil para selecionar objetos sem precisar tocá-los fisicamente.</li>
        <li><strong>Action-based Input:</strong> O XR Interaction Toolkit usa um sistema de input baseado em ações. Isso permite que você mapeie entradas de dispositivos de VR (como pressionar um botão ou movimentar um controlador) para ações específicas dentro do jogo.</li>
    </ul>

    <h3>Como Utilizar o XR Interaction Toolkit</h3>
    <ol>
        <li><strong>Instalar o XR Interaction Toolkit:</strong>
            <ul>
                <li>Abra o "Package Manager" no Unity.</li>
                <li>Pesquise por "XR Interaction Toolkit" e clique em "Install".</li>
            </ul>
        </li>
        <li><strong>Configurar o XR Rig:</strong>
            <ul>
                <li>Na sua cena, adicione um "XR Rig" através do menu "GameObject" > "XR" > "XR Rig".</li>
                <li>Isso criará um novo objeto com a câmera e os controladores de movimento prontos para uso.</li>
            </ul>
        </li>
        <li><strong>Adicionar Interações com Objetos:</strong>
            <ul>
                <li>Para fazer um objeto interativo, selecione o objeto na cena e adicione o componente "XR Grab Interactable".</li>
                <li>Agora, o objeto poderá ser agarrado e manipulado pelo jogador utilizando os controladores de VR.</li>
            </ul>
        </li>
        <li><strong>Configuração de Inputs (Ações):</strong>
            <ul>
                <li>No Unity, crie um novo arquivo de "Input Actions" para mapear as entradas dos controladores de VR.</li>
                <li>Você pode definir ações como pressionar um botão ou ativar um gatilho e associá-las a funções dentro do seu projeto.</li>
            </ul>
        </li>
        <li><strong>Testar Interações:</strong>
            <ul>
                <li>Conecte o seu dispositivo de VR ao computador e clique em "Play" para testar as interações na sua cena.</li>
                <li>Você poderá ver as interações dos controladores de VR, como pegar objetos, apontar para botões e mais.</li>
            </ul>
        </li>
    </ol>
    
    <h3>Exemplo Prático</h3>
    <p>Imagine que você queira criar um objeto que o jogador possa pegar e lançar. Com o XR Interaction Toolkit, você só precisa adicionar o componente "XR Grab Interactable" ao objeto e ele será automaticamente interativo. Quando o jogador aproximar o controlador do objeto e pressionar o botão para agarrá-lo, ele poderá segurá-lo e lançá-lo.</p>

    <h3>Conclusão</h3>
    <p>O XR Interaction Toolkit simplifica a criação de interações em projetos VR e AR, permitindo que você se concentre mais na experiência do usuário do que em complexas lógicas de interação. Com os componentes e ferramentas fornecidos, você pode criar interações realistas, como agarrar objetos, pressionar botões e muito mais, de forma simples e eficaz.</p>
    </section>
    `,8:`
    <section class="mt-5 mx-5 px-5 text-start">
    <h2 class="text-center">Links Oficiais e Recursos Úteis</h2>
    <p>Aqui você encontra links oficiais e recursos úteis para começar a trabalhar com Unity, explorar assets, e aprimorar suas habilidades no desenvolvimento de experiências em VR.</p>

    <h3>Links Oficiais</h3>
    <ul>
        <li><strong><a href="https://unity.com" target="_blank">Site Oficial da Unity</a></strong>: Acesse o site principal da Unity para baixar o software, acessar a documentação e muito mais.</li>
        <li><strong><a href="https://docs.unity.com" target="_blank">Documentação Oficial da Unity</a></strong>: Explore a documentação detalhada sobre todos os aspectos da Unity, desde a instalação até as técnicas avançadas.</li>
        <li><strong><a href="https://unity.com/learn" target="_blank">Unity Learn</a></strong>: Plataforma oficial de aprendizado da Unity com tutoriais e cursos gratuitos para iniciantes e desenvolvedores avançados.</li>
        <li><strong><a href="https://store.unity.com" target="_blank">Unity Asset Store</a></strong>: Acesse a loja oficial de assets, onde você pode comprar e baixar modelos 3D, scripts, plugins e mais para os seus projetos Unity.</li>
    </ul>

    <h3>Recursos e Dicas para Desenvolvedores</h3>
    <ul>
        <li><strong><a href="https://learn.unity.com/tutorial/welcome-to-the-pathway?uv=2022.3&pathwayId=627c12d8edbc2a75333b9185&missionId=62554983edbc2a76a27486cb#" target="_blank">Criando um Jogo 3D</a></strong>: Curso passo a passo para iniciantes na criação de jogos 3D com Unity.</li>
        <li><strong><a href="https://www.raywenderlich.com/unity" target="_blank">Ray Wenderlich - Unity Tutorials</a></strong>: Uma coleção de tutoriais de qualidade para Unity, com foco em jogos, VR, AR e muito mais.</li>
        <li><strong><a href="https://github.com/Unity-Technologies" target="_blank">GitHub da Unity Technologies</a></strong>: Explore repositórios oficiais da Unity, incluindo projetos open-source, exemplos e templates.</li>
        <li><strong><a href="https://www.youtube.com/user/Unity3D" target="_blank">Canal Oficial no YouTube</a></strong>: Canal da Unity com vídeos tutoriais, apresentações e demonstrações sobre as últimas funcionalidades e novidades.</li>
        <li><strong><a href="https://forum.unity.com" target="_blank">Fórum Oficial da Unity</a></strong>: Um lugar para interagir com a comunidade Unity, tirar dúvidas e compartilhar conhecimento.</li>
    </ul>

    <h3>Assets Gratuitos e Recursos de VR</h3>
    <ul>
        <li><strong><a href="https://assetstore.unity.com" target="_blank">Unity Asset Store</a></strong>: Acesse uma vasta coleção de assets, incluindo recursos gratuitos para começar o seu projeto.</li>
        <li><strong><a href="https://www.vrready.com" target="_blank">VR Ready</a></strong>: Recursos gratuitos e pagos para desenvolver experiências de VR, incluindo modelos e scripts específicos para VR.</li>
        <li><strong><a href="https://www.turbosquid.com" target="_blank">TurboSquid</a></strong>: Plataforma que oferece modelos 3D gratuitos e pagos, muitos dos quais podem ser usados em projetos VR com Unity.</li>
        <li><strong><a href="https://sketchfab.com" target="_blank">Sketchfab</a></strong>: Um repositório de modelos 3D interativos e gratuitos, ideal para uso em projetos Unity, incluindo VR.</li>
    </ul>

    <h3>Dicas de Desenvolvimento VR</h3>
    <ul>
        <li><strong><a href="https://developers.meta.com/horizon/documentation/unity/unity-tutorial-hello-vr" target="_blank">Oculus - Começando com Unity</a></strong>: Documentação oficial do Oculus para integrar seus dispositivos VR com Unity.</li>
        <li><strong><a href="https://developer.vive.com/resources/" target="_blank">Vive Developer Resources</a></strong>: Recursos da HTC Vive para desenvolver aplicações VR com Unity, incluindo SDKs e guias de integração.</li>
    </ul>

    <h3>Redes Sociais e Comunidades</h3>
    <ul>
        <li><strong><a href="https://www.reddit.com/r/Unity3D/" target="_blank">Reddit - r/Unity3D</a></strong>: A comunidade Unity no Reddit, onde você pode discutir tópicos, tirar dúvidas e compartilhar experiências com outros desenvolvedores.</li>
        <li><strong><a href="https://discord.com/invite/unity" target="_blank">Discord - Unity Official</a></strong>: Canal oficial no Discord para interagir com outros desenvolvedores Unity, trocar ideias e receber suporte.</li>
    </ul>
    </section>
    `};const ul=["innerHTML"],fl={__name:"Conteudo",setup(e){const t=Ye(Is[vt.value]);return Ft(()=>vt.value,o=>{t.value=Is[o]}),console.log(vt.value),(o,s)=>(wt(),At("div",{class:"container-menu",innerHTML:t.value},null,8,ul))}};const dl={class:"container-xxl"},pl={__name:"Menu",setup(e){return(t,o)=>(wt(),At("div",dl,[ge(cl,{onChangeSection:o[0]||(o[0]=s=>t.activeSection=s)}),ge(fl)]))}},hl=Go(pl,[["__scopeId","data-v-1af8232e"]]),ml={__name:"App",setup(e){return(t,o)=>(wt(),At(Re,null,[ge(il),ge(hl)],64))}};Yr(ml).mount("#app");
