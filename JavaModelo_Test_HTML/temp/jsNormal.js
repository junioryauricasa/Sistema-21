/*
 AngularJS v1.5.0-beta.2
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,X,u){'use strict';function I(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.0-beta.2/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function Ba(a){if(null==a||Xa(a))return!1;if(K(a)||J(a)||A&&a instanceof
A)return!0;var b="length"in Object(a)&&a.length;return U(b)&&(0<=b&&b-1 in a||"function"==typeof a.item)}function n(a,b,d){var c,e;if(a)if(C(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(K(a)||Ba(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==n)a.forEach(b,d,a);else if(nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function pc(a){return function(b,d){a(d,b)}}function Vd(){return++ob}function Nb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(F(g)||C(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],s=g[m];d&&F(s)?fa(s)?a[m]=new Date(s.valueOf()):Na(s)?a[m]=new RegExp(s):s.nodeName?a[m]=s.cloneNode(!0):
Ob(s)?a[m]=s.clone():(F(a[m])||(a[m]=K(s)?[]:{}),Nb(a[m],[s],!0)):a[m]=s}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function P(a){return Nb(a,va.call(arguments,1),!1)}function Wd(a){return Nb(a,va.call(arguments,1),!0)}function ba(a){return parseInt(a,10)}function Pb(a,b){return P(Object.create(a),b)}function v(){}function Ya(a){return a}function ca(a){return function(){return a}}function qc(a){return C(a.toString)&&a.toString!==wa}function x(a){return"undefined"===typeof a}function y(a){return"undefined"!==
typeof a}function F(a){return null!==a&&"object"===typeof a}function nc(a){return null!==a&&"object"===typeof a&&!rc(a)}function J(a){return"string"===typeof a}function U(a){return"number"===typeof a}function fa(a){return"[object Date]"===wa.call(a)}function C(a){return"function"===typeof a}function Na(a){return"[object RegExp]"===wa.call(a)}function Xa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function $a(a){return"boolean"===typeof a}function sc(a){return a&&U(a.length)&&
Xd.test(wa.call(a))}function Ob(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function Yd(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function pa(a){return N(a.nodeName||a[0]&&a[0].nodeName)}function ab(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function bb(a,b){function d(a,b){var d=b.$$hashKey,e;if(K(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(nc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)ua.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!F(a))return a;var b=e.indexOf(a);if(-1!==b)return f[b];if(Xa(a)||Za(a))throw Ca("cpws");var b=!1,c;K(a)?(c=[],b=!0):sc(a)?c=new a.constructor(a):fa(a)?c=new Date(a.getTime()):Na(a)?(c=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),c.lastIndex=a.lastIndex):C(a.cloneNode)?c=a.cloneNode(!0):(c=Object.create(rc(a)),b=!0);e.push(a);f.push(c);return b?d(a,c):c}var e=[],f=[];if(b){if(sc(b))throw Ca("cpta");
if(a===b)throw Ca("cpi");K(b)?b.length=0:n(b,function(a,c){"$$hashKey"!==c&&delete b[c]});e.push(a);f.push(b);return d(a,b)}return c(a)}function da(a,b){if(K(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(F(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function la(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(K(a)){if(!K(b))return!1;if((d=a.length)==b.length){for(c=
0;c<d;c++)if(!la(a[c],b[c]))return!1;return!0}}else{if(fa(a))return fa(b)?la(a.getTime(),b.getTime()):!1;if(Na(a))return Na(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Xa(a)||Xa(b)||K(b)||fa(b)||Na(b))return!1;d=V();for(c in a)if("$"!==c.charAt(0)&&!C(a[c])){if(!la(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&y(b[c])&&!C(b[c]))return!1;return!0}return!1}function cb(a,b,d){return a.concat(va.call(b,d))}function tc(a,b){var d=2<arguments.length?va.call(arguments,2):
[];return!C(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,cb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Zd(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=u:Xa(b)?d="$WINDOW":b&&X===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function db(a,b){if("undefined"===typeof a)return u;U(b)||(b=b?2:null);return JSON.stringify(a,Zd,b)}function uc(a){return J(a)?JSON.parse(a):a}function vc(a,
b){var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Qb(a,b,d){d=d?-1:1;var c=vc(b,a.getTimezoneOffset());b=a;a=d*(c-a.getTimezoneOffset());b=new Date(b.getTime());b.setMinutes(b.getMinutes()+a);return b}function qa(a){a=A(a).clone();try{a.empty()}catch(b){}var d=A("<div>").append(a).html();try{return a[0].nodeType===Oa?N(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+N(b)})}catch(c){return N(d)}}function wc(a){try{return decodeURIComponent(a)}catch(b){}}
function xc(a){var b={};n((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=wc(e),y(e)&&(f=y(f)?wc(f):!0,ua.call(b,e)?K(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Rb(a){var b=[];n(a,function(a,c){K(a)?n(a,function(a){b.push(ma(c,!0)+(!0===a?"":"="+ma(a,!0)))}):b.push(ma(c,!0)+(!0===a?"":"="+ma(a,!0)))});return b.length?b.join("&"):""}function pb(a){return ma(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,
"=").replace(/%2B/gi,"+")}function ma(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function $d(a,b){var d,c,e=Pa.length;for(c=0;c<e;++c)if(d=Pa[c]+b,J(d=a.getAttribute(d)))return d;return null}function ae(a,b){var d,c,e={};n(Pa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});n(Pa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":",
"\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==$d(d,"strict-di"),b(d,c?[c]:[],e))}function yc(a,b,d){F(d)||(d={});d=P({strictDi:!1},d);var c=function(){a=A(a);if(a.injector()){var c=a[0]===X?"document":qa(a);throw Ca("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope",
"$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;R&&e.test(R.name)&&(d.debugInfoEnabled=!0,R.name=R.name.replace(e,""));if(R&&!f.test(R.name))return c();R.name=R.name.replace(f,"");ga.resumeBootstrap=function(a){n(a,function(a){b.push(a)});return c()};C(ga.resumeDeferredBootstrap)&&ga.resumeDeferredBootstrap()}function be(){R.name="NG_ENABLE_DEBUG_INFO!"+R.name;R.location.reload()}
function ce(a){a=ga.element(a).injector();if(!a)throw Ca("test");return a.get("$$testability")}function zc(a,b){b=b||"_";return a.replace(de,function(a,c){return(c?b:"")+a.toLowerCase()})}function ee(){var a;if(!Ac){var b=qb();(xa=x(b)?R.jQuery:b?R[b]:u)&&xa.fn.on?(A=xa,P(xa.fn,{scope:Qa.scope,isolateScope:Qa.isolateScope,controller:Qa.controller,injector:Qa.injector,inheritedData:Qa.inheritedData}),a=xa.cleanData,xa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=xa._data(f,"events"))&&
c.$destroy&&xa(f).triggerHandler("$destroy");a(b)}):A=D;ga.element=A;Ac=!0}}function rb(a,b,d){if(!a)throw Ca("areq",b||"?",d||"required");return a}function Ra(a,b,d){d&&K(a)&&(a=a[a.length-1]);rb(C(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Sa(a,b){if("hasOwnProperty"===a)throw Ca("badname",b);}function Bc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&C(a)?tc(e,a):a}function sb(a){for(var b=
a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=A(va.call(a,0,e))),c.push(b);return c||a}function V(){return Object.create(null)}function fe(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=I("$injector"),c=I("ng"),e=b(a,"angular",Object);e.$$minErr=e.$$minErr||I;return b(e,"module",function(){var a={};return function(g,h,k){if("hasOwnProperty"===g)throw c("badname","module");h&&a.hasOwnProperty(g)&&(a[g]=null);return b(a,g,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||
"push"]([b,d,arguments]);return t}}function b(a,d){return function(b,e){e&&C(e)&&(e.$$moduleName=g);c.push([a,d,arguments]);return t}}if(!h)throw d("nomod",g);var c=[],f=[],B=[],Q=a("$injector","invoke","push",f),t={_invokeQueue:c,_configBlocks:f,_runBlocks:B,requires:h,name:g,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider",
"register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:function(a,b){function c(d){function f(a){return e.isFunction(a)?function(b,c){return d.invoke(a,this,{$element:b,$attrs:c})}:a}var g=b.template||b.templateUrl?b.template:"";return{controller:b.controller||function(){},controllerAs:Cc(b.controller)||b.controllerAs||a,template:f(g),templateUrl:f(b.templateUrl),transclude:b.transclude===u?!0:b.transclude,
scope:!1===b.isolate?!0:{},bindToController:b.bindings||{},restrict:b.restrict||"E"}}b.$canActivate&&(c.$canActivate=b.$canActivate);b.$routeConfig&&(c.$routeConfig=b.$routeConfig);c.$inject=["$injector"];return t.directive(a,c)},config:Q,run:function(a){B.push(a);return this}};k&&Q(k);return t})}})}function ge(a){P(a,{bootstrap:yc,copy:bb,extend:P,merge:Wd,equals:la,element:A,forEach:n,injector:eb,noop:v,bind:tc,toJson:db,fromJson:uc,identity:Ya,isUndefined:x,isDefined:y,isString:J,isFunction:C,
isObject:F,isNumber:U,isElement:Ob,isArray:K,version:he,isDate:fa,lowercase:N,uppercase:tb,callbacks:{counter:0},getTestability:ce,$$minErr:I,$$csp:Da,reloadWithDebugInfo:be});Sb=fe(R);Sb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ie});a.provider("$compile",Dc).directive({a:je,input:Ec,textarea:Ec,form:ke,script:le,select:me,style:ne,option:oe,ngBind:pe,ngBindHtml:qe,ngBindTemplate:re,ngClass:se,ngClassEven:te,ngClassOdd:ue,ngCloak:ve,ngController:we,ngForm:xe,ngHide:ye,ngIf:ze,
ngInclude:Ae,ngInit:Be,ngNonBindable:Ce,ngPluralize:De,ngRepeat:Ee,ngShow:Fe,ngStyle:Ge,ngSwitch:He,ngSwitchWhen:Ie,ngSwitchDefault:Je,ngOptions:Ke,ngTransclude:Le,ngModel:Me,ngList:Ne,ngChange:Oe,pattern:Fc,ngPattern:Fc,required:Gc,ngRequired:Gc,minlength:Hc,ngMinlength:Hc,maxlength:Ic,ngMaxlength:Ic,ngValue:Pe,ngModelOptions:Qe}).directive({ngInclude:Re}).directive(ub).directive(Jc);a.provider({$anchorScroll:Se,$animate:Te,$animateCss:Ue,$$animateQueue:Ve,$$AnimateRunner:We,$browser:Xe,$cacheFactory:Ye,
$controller:Ze,$document:$e,$exceptionHandler:af,$filter:Kc,$$forceReflow:bf,$interpolate:cf,$interval:df,$http:ef,$httpParamSerializer:ff,$httpParamSerializerJQLike:gf,$httpBackend:hf,$xhrFactory:jf,$location:kf,$log:lf,$parse:mf,$rootScope:nf,$q:of,$$q:pf,$sce:qf,$sceDelegate:rf,$sniffer:sf,$templateCache:tf,$templateRequest:uf,$$testability:vf,$timeout:wf,$window:xf,$$rAF:yf,$$jqLite:zf,$$HashMap:Af,$$cookieReader:Bf})}])}function fb(a){return a.replace(Cf,function(a,d,c,e){return e?c.toUpperCase():
c}).replace(Df,"Moz$1")}function Lc(a){a=a.nodeType;return 1===a||!a||9===a}function Mc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Tb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Ef.exec(a)||["",""])[1].toLowerCase();c=ia[c]||ia._default;d.innerHTML=c[1]+a.replace(Ff,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=cb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function D(a){if(a instanceof
D)return a;var b;J(a)&&(a=W(a),b=!0);if(!(this instanceof D)){if(b&&"<"!=a.charAt(0))throw Ub("nosel");return new D(a)}if(b){b=X;var d;a=(d=Gf.exec(a))?[b.createElement(d[1])]:(d=Mc(a,b))?d.childNodes:[]}Nc(this,a)}function Vb(a){return a.cloneNode(!0)}function vb(a,b){b||gb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)gb(d[c])}function Oc(a,b,d,c){if(y(c))throw Ub("offargs");var e=(c=wb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];y(d)&&
ab(c||[],d);y(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};n(b.split(" "),function(a){g(a);xb[a]&&g(xb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function gb(a,b){var d=a.ng339,c=d&&hb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Oc(a)),delete hb[d],a.ng339=u))}function wb(a,b){var d=a.ng339,d=d&&hb[d];b&&!d&&(a.ng339=d=++Hf,d=hb[d]={events:{},data:{},handle:u});return d}function Wb(a,b,d){if(Lc(a)){var c=
y(d),e=!c&&b&&!F(b),f=!b;a=(a=wb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];P(a,b)}}}function yb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function zb(a,b){b&&a.setAttribute&&n(b.split(" "),function(b){a.setAttribute("class",W((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+W(b)+" "," ")))})}function Ab(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ");n(b.split(" "),function(a){a=W(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",W(d))}}function Nc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Pc(a,b){return Bb(a,"$"+(b||"ngController")+"Controller")}function Bb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=K(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(y(d=A.data(a,b[c])))return d;a=a.parentNode||
11===a.nodeType&&a.host}}function Qc(a){for(vb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Xb(a,b){b||vb(a);var d=a.parentNode;d&&d.removeChild(a)}function If(a,b){b=b||R;if("complete"===b.document.readyState)b.setTimeout(a);else A(b).on("load",a)}function Rc(a,b){var d=Cb[b.toLowerCase()];return d&&Sc[pa(a)]&&d}function Jf(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=
c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Kf;1<g&&(f=da(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function Kf(a,b,d){d.call(a,b)}function Lf(a,b,d){var c=b.relatedTarget;c&&(c===a||Mf.call(a,c))||d.call(a,b)}function zf(){this.$get=
function(){return P(D,{hasClass:function(a,b){a.attr&&(a=a[0]);return yb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)}})}}function Ea(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Vd)():d+":"+a}function Ta(a,b){if(b){var d=0;this.nextUid=function(){return++d}}n(a,this.put,this)}function Tc(a){a=a.toString().replace(Nf,
"");return a.match(Of)||a.match(Pf)}function Qf(a){return(a=Tc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,c){if(F(b))n(b,pc(a));else return a(b,c)}}function c(a,b){Sa(a,"service");if(C(b)||K(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return s[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(x(c))throw Fa("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){rb(x(a)||
K(a),"modulesToLoad","not an array");var b=[],c;n(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{J(a)?(c=Sb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):C(a)?b.push(q.invoke(a)):K(a)?b.push(q.invoke(a)):Ra(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||
e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Fa("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=eb.$$annotate(a,b,g),l,m,s;m=0;for(l=k.length;m<l;m++){s=k[m];if("string"!==typeof s)throw Fa("itkn",s);h.push(f&&f.hasOwnProperty(s)?f[s]:d(s,g))}K(a)&&(a=a[l]);return a.apply(c,h)}return{invoke:e,
instantiate:function(a,b,c){var d=Object.create((K(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return F(a)||C(a)?a:d},get:d,annotate:eb.$$annotate,has:function(b){return s.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Ta([],!0),s={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ca(b),!1)}),constant:d(function(a,b){Sa(a,"constant");s[a]=b;B[a]=b}),
decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},q=s.$injector=h(s,function(a,b){ga.isString(b)&&l.push(b);throw Fa("unpr",l.join(" <- "));}),B={},Q=h(B,function(a,b){var c=q.get(a+"Provider",b);return t.invoke(c.$get,c,u,a)}),t=Q;s.$injectorProvider={$get:ca(Q)};var p=g(a),t=Q.get("$injector");t.strictDi=b;n(p,function(a){a&&t.invoke(a)});return t}function Se(){var a=!0;this.disableAutoScrolling=function(){a=
!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===pa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;C(c)?c=c():Ob(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):U(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=J(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?
f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||If(function(){c.$evalAsync(g)})});return g}]}function ib(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;K(a)&&(a=a.join(" "));K(b)&&(b=b.join(" "));return a+" "+b}function Rf(a){J(a)&&(a=a.split(" "));var b=V();n(a,function(a){a.length&&(b[a]=!0)});return b}function Ha(a){return F(a)?a:{}}function Sf(a,b,d,c){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(Q--,
0===Q)for(;t.length;)try{t.pop()()}catch(b){d.error(b)}}}function f(){M=null;g();h()}function g(){a:{try{p=m.state;break a}catch(a){}p=void 0}p=x(p)?null:p;la(p,Y)&&(p=Y);Y=p}function h(){if(w!==k.url()||z!==p)w=k.url(),z=p,n(G,function(a){a(k.url(),p)})}var k=this,l=a.location,m=a.history,s=a.setTimeout,q=a.clearTimeout,B={};k.isMock=!1;var Q=0,t=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){Q++};k.notifyWhenNoOutstandingRequests=function(a){0===Q?a():t.push(a)};var p,
z,w=l.href,aa=b.find("base"),M=null;g();z=p;k.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=z===e;if(w===b&&(!c.history||f))return k;var h=w&&Ia(w)===Ia(b);w=b;z=e;if(!c.history||h&&f){if(!h||M)M=b;d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b;l.href!==b&&(M=b)}else m[d?"replaceState":"pushState"](e,"",b),g(),z=p;return k}return M||l.href.replace(/%27/g,"'")};k.state=function(){return p};var G=[],E=!1,
Y=null;k.onUrlChange=function(b){if(!E){if(c.history)A(a).on("popstate",f);A(a).on("hashchange",f);E=!0}G.push(b);return b};k.$$applicationDestroyed=function(){A(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=aa.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;Q++;c=s(function(){delete B[c];e(a)},b||0);B[c]=!0;return c};k.defer.cancel=function(a){return B[a]?(delete B[a],q(a),e(v),!0):!1}}function Xe(){this.$get=["$window",
"$log","$sniffer","$document",function(a,b,d,c){return new Sf(a,c,b,d)}]}function Ye(){this.$get=function(){function a(a,c){function e(a){a!=s&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,s),s=a,s.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw I("$cacheFactory")("iid",a);var g=0,h=P({},c,{id:a}),k=V(),l=c&&c.capacity||Number.MAX_VALUE,m=V(),s=null,q=null;return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(q.key);
return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==s&&(s=b.p);b==q&&(q=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=V();g=0;m=V();s=q=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return P({},h,{size:g})}}}var b={};a.info=function(){var a={};n(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function tf(){this.$get=
["$cacheFactory",function(a){return a("templates")}]}function Dc(a,b){function d(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);if(!g)throw ha("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function c(a){var b=a.charAt(0);if(!b||b!==N(b))throw ha("baddir",a);if(a!==a.trim())throw ha("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Yd("ngSrc,ngSrcset,src,srcset"),k=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function q(b,f){Sa(b,"directive");J(b)?(c(b),rb(f,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var f=[];n(e[b],function(e,g){try{var h=a.invoke(e);C(h)?h={compile:ca(h)}:!h.compile&&h.link&&(h.compile=ca(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=h.require||
h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,m=h.name,q={isolateScope:null,bindToController:null};F(l.scope)&&(!0===l.bindToController?(q.bindToController=d(l.scope,m,!0),q.isolateScope={}):q.isolateScope=d(l.scope,m,!1));F(l.bindToController)&&(q.bindToController=d(l.bindToController,m,!0));if(F(q.bindToController)){var Z=l.controller,Q=l.controllerAs;if(!Z)throw ha("noctrl",m);if(!Cc(Z,Q))throw ha("noident",m);}var na=k.$$bindings=q;F(na.isolateScope)&&(h.$$isolateBindings=na.isolateScope);
h.$$moduleName=e.$$moduleName;f.push(h)}catch(n){c(n)}});return f}])),e[b].push(f)):n(b,pc(q));return this};this.aHrefSanitizationWhitelist=function(a){return y(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return y(a)?(m=a,this):m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest",
"$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,p,z,w,aa,M,G,E){function Y(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e){a instanceof A||(a=A(a));n(a,function(b,c){b.nodeType==Oa&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=Z(a,b,a,c,d,e);L.$$addScopeClass(a);var g=null;return function(b,c,d){rb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;
d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==pa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?A(U(g,A("<div>").append(a).html())):c?Qa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);L.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);return d}}function Z(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,q,B,w;if(p)for(w=Array(c.length),m=0;m<h.length;m+=3)f=h[m],w[f]=c[f];else w=c;m=0;for(q=h.length;m<
q;)k=w[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),L.$$addScopeInfo(A(k),l)):l=a,B=c.transcludeOnThisElement?O(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?O(a,b):null,c(f,l,k,d,B)):f&&f(a,k.childNodes,u,e)}for(var h=[],k,l,m,q,p,B=0;B<a.length;B++){k=new ga;l=na(a[B],[],k,0===B?d:u,e);(f=l.length?oa(l,a[B],k,b,c,null,[],[],f):null)&&f.scope&&L.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[B].childNodes)||!m.length?null:Z(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&
f.transclude:b);if(f||k)h.push(B,f,k),q=!0,p=p||f;f=null}return q?g:null}function O(a,b,c){var d=function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})},e=d.$$slots=V(),f;for(f in b.$$slots)e[f]=O(a,b.$$slots[f],c);return d}function na(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case 1:I(b,ra(pa(a)),"E",d,e);for(var l,m,q,p=a.attributes,B=0,w=p&&p.length;B<w;B++){var G=!1,t=!1;l=p[B];k=l.name;m=W(l.value);
l=ra(k);if(q=ia.test(l))k=k.replace(Vc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(ka))&&R(l[1])&&(G=k,t=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=ra(k.toLowerCase());h[l]=k;if(q||!c.hasOwnProperty(l))c[l]=m,Rc(a,l)&&(c[l]=!0);T(a,b,m,l,q);I(b,l,"A",d,e,G,t)}a=a.className;F(a)&&(a=a.animVal);if(J(a)&&""!==a)for(;k=g.exec(a);)l=ra(k[2]),I(b,l,"C",d,e)&&(c[l]=W(k[3])),a=a.substr(k.index+k[0].length);break;case Oa:if(11===Ja)for(;a.parentNode&&a.nextSibling&&
a.nextSibling.nodeType===Oa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);D(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=ra(k[1]),I(b,l,"M",d,e)&&(c[l]=W(k[2]))}catch(L){}}b.sort(sa);return b}function Ga(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function r(a,b,c){return function(d,
e,f,g,h){e=Ga(e[0],b,c);return a(d,e,f,g,h)}}function y(a,b,c,d,e,f){if(a)return L(b,c,d,e,f);var g;return function(){g||(g=L(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function oa(a,b,d,e,f,g,h,l,m){function q(a,b,c,d){if(a){c&&(a=r(a,c,d));a.require=H.require;a.directiveName=oa;if(E===H||H.$$isolateScope)a=ba(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=r(b,c,d));b.require=H.require;b.directiveName=oa;if(E===H||H.$$isolateScope)b=ba(b,{isolateScope:!0});l.push(b)}}function p(a,b,c,d){var e;
if(J(b)){var f=b.match(k);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ha("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=p(a,b[g],c,d);return e||null}function B(a,b,c,d,e,f){var g=V(),h;for(h in d){var k=d[h],l={$scope:k===E||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=k.controller;"@"==m&&(m=b[k.name]);l=z(m,l,!0,k.controllerAs);g[k.name]=
l;x||a.data("$"+k.name+"Controller",l.instance)}return g}function w(a,c,e,f,g){function k(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=u);x&&(e=z);c||(c=x?O.parent():O);if(d){var f=g.$$slots[d];if(!f)throw ha("noslot",d,qa(O));return f(a,b,e,c,Ga)}return g(a,b,e,c,Ga)}var m,q,G,z,Q,O,na;b===e?(f=d,O=d.$$element):(O=A(e),f=new ga(O,d));G=c;E?q=c.$new(!0):t&&(G=c.$parent);g&&(Q=k,Q.$$boundTransclude=g);Z&&(z=B(O,f,Q,Z,q,c));E&&(L.$$addScopeInfo(O,q,!0,!(Y&&(Y===E||Y===E.$$originalDirective))),L.$$addScopeClass(O,
!0),q.$$isolateBindings=E.$$isolateBindings,(na=fa(c,f,q,q.$$isolateBindings,E))&&q.$on("$destroy",na));for(var Uc in z){na=Z[Uc];var n=z[Uc],M=na.$$bindings.bindToController;n.identifier&&M&&(m=fa(G,f,n.instance,M,na));var aa=n();aa!==n.instance&&(n.instance=aa,O.data("$"+na.name+"Controller",aa),m&&m(),m=fa(G,f,n.instance,M,na))}ja=0;for(S=h.length;ja<S;ja++)m=h[ja],ea(m,m.isolateScope?q:c,O,f,m.require&&p(m.directiveName,m.require,O,z),Q);var Ga=c;E&&(E.template||null===E.templateUrl)&&(Ga=q);
a&&a(Ga,e.childNodes,u,g);for(ja=l.length-1;0<=ja;ja--)m=l[ja],ea(m,m.isolateScope?q:c,O,f,m.require&&p(m.directiveName,m.require,O,z),Q)}m=m||{};for(var G=-Number.MAX_VALUE,t=m.newScopeDirective,Z=m.controllerDirectives,E=m.newIsolateScopeDirective,Y=m.templateDirective,O=m.nonTlbTranscludeDirective,M=!1,aa=!1,x=m.hasElementTranscludeDirective,v=d.$$element=A(b),H,oa,I,N=e,P,sa=!1,R=!1,D,ja=0,S=a.length;ja<S;ja++){H=a[ja];var Db=H.$$start,Yb=H.$$end;Db&&(v=Ga(b,Db,Yb));I=u;if(G>H.priority)break;
if(D=H.scope)H.templateUrl||(F(D)?(Ua("new/isolated scope",E||t,H,v),E=H):Ua("new/isolated scope",E,H,v)),t=t||H;oa=H.name;if(!sa&&(H.replace&&(H.templateUrl||H.template)||H.transclude&&!H.$$tlb)){for(D=ja+1;sa=a[D++];)if(sa.transclude&&!sa.$$tlb||sa.replace&&(sa.templateUrl||sa.template)){R=!0;break}sa=!0}!H.templateUrl&&H.controller&&(D=H.controller,Z=Z||V(),Ua("'"+oa+"' controller",Z[oa],H,v),Z[oa]=H);if(D=H.transclude)if(M=!0,H.$$tlb||(Ua("transclusion",O,H,v),O=H),"element"==D)x=!0,G=H.priority,
I=v,v=d.$$element=A(X.createComment(" "+oa+": "+d[oa]+" ")),b=v[0],$(f,va.call(I,0),b),N=y(R,I,e,G,g&&g.name,{nonTlbTranscludeDirective:O});else{var T=V();I=A(Vb(b)).contents();if(F(D)){I=[];var ca=V(),da=V();n(D,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;ca[b]=a;T[a]=[];da[a]=c});n(v.children(),function(a){var b=ca[ra(pa(a))];b?(da[b]=!0,T[b].push(a)):I.push(a)});n(da,function(a,b){if(!a)throw ha("reqslot",b);});n(Object.keys(T),function(a){T[a]=y(R,T[a],e)})}v.empty();N=y(R,I,e,
u,u,{needsNewScope:H.$$isolateScope||H.$$newScope});N.$$slots=T}if(H.template)if(aa=!0,Ua("template",Y,H,v),Y=H,D=C(H.template)?H.template(v,d):H.template,D=ma(D),H.replace){g=H;I=Tb.test(D)?Wc(U(H.templateNamespace,W(D))):[];b=I[0];if(1!=I.length||1!==b.nodeType)throw ha("tplrt",oa,"");$(f,v,b);D={$attr:{}};var ia=na(b,[],D),ka=a.splice(ja+1,a.length-(ja+1));(E||t)&&Xc(ia,E,t);a=a.concat(ia).concat(ka);Yc(d,D);S=a.length}else v.html(D);if(H.templateUrl)aa=!0,Ua("template",Y,H,v),Y=H,H.replace&&(g=
H),w=Tf(a.splice(ja,a.length-ja),v,d,f,M&&N,h,l,{controllerDirectives:Z,newScopeDirective:t!==H&&t,newIsolateScopeDirective:E,templateDirective:Y,nonTlbTranscludeDirective:O}),S=a.length;else if(H.compile)try{P=H.compile(v,d,N),C(P)?q(null,P,Db,Yb):P&&q(P.pre,P.post,Db,Yb)}catch(la){c(la,qa(v))}H.terminal&&(w.terminal=!0,G=Math.max(G,H.priority))}w.scope=t&&!0===t.scope;w.transcludeOnThisElement=M;w.templateOnThisElement=aa;w.transclude=N;m.hasElementTranscludeDirective=x;return w}function Xc(a,b,
c){for(var d=0,e=a.length;d<e;d++)a[d]=Pb(a[d],{$$isolateScope:b,$$newScope:c})}function I(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,B=d.length;p<B;p++)try{m=d[p],(x(g)||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Pb(m,{$$start:k,$$end:l})),b.push(m),h=m)}catch(w){c(w)}}return h}function R(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function Yc(a,b){var c=
b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(Y(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Tf(a,b,c,e,f,g,h,k){var l=[],m,q,p=b[0],B=a.shift(),w=Pb(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),
G=C(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,L=B.templateNamespace;b.empty();d(G).then(function(d){var t,E;d=ma(d);if(B.replace){d=Tb.test(d)?Wc(U(L,W(d))):[];t=d[0];if(1!=d.length||1!==t.nodeType)throw ha("tplrt",B.name,G);d={$attr:{}};$(e,b,t);var z=na(t,[],d);F(B.scope)&&Xc(z,!0);a=z.concat(a);Yc(c,d)}else t=p,b.html(d);a.unshift(w);m=oa(a,t,c,f,b,B,g,h,k);n(e,function(a,c){a==t&&(e[c]=b[0])});for(q=Z(b[0].childNodes,f);l.length;){d=l.shift();E=l.shift();var Q=l.shift(),M=l.shift(),z=b[0];
if(!d.$$destroyed){if(E!==p){var aa=E.className;k.hasElementTranscludeDirective&&B.replace||(z=Vb(t));$(Q,A(E),z);Y(A(z),aa)}E=m.transcludeOnThisElement?O(d,m.transclude,M):M;m(q,d,z,e,E)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=O(b,m.transclude,e)),m(q,b,c,d,a)))}}function sa(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Ua(a,b,c,d){function e(a){return a?" (module: "+a+
")":""}if(b)throw ha("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,qa(d));}function D(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&L.$$addBindingClass(a);return function(a,c){var e=c.parent();b||L.$$addBindingClass(e);L.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function U(a,b){a=N(a||"html");switch(a){case "svg":case "math":var c=X.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;
default:return b}}function S(a,b){if("srcdoc"==b)return M.HTML;var c=pa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return M.RESOURCE_URL}function T(a,c,d,e,f){var g=S(a,e);f=h[e]||f;var k=b(d,!0,g,f);if(k){if("multiple"===e&&"select"===pa(a))throw ha("selmulti",qa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers=V());if(l.test(e))throw ha("nodomevents");var m=h[e];m!==d&&(k=m&&b(m,!0,g,f),d=m);k&&(h[e]=k(a),
(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function $(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);A.hasData(d)&&(A.data(c,A.data(d)),
A(d).off("$destroy"));A.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ba(a,b){return P(function(){return a.apply(null,arguments)},a,b)}function ea(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,qa(d))}}function fa(a,c,d,e,f){var g=[];n(e,function(e,h){var k=e.attrName,l=e.optional,m,q,w,G;switch(e.mode){case "@":l||ua.call(c,k)||(d[h]=c[k]=void 0);c.$observe(k,function(a){J(a)&&(d[h]=a)});c.$$observers[k].$$scope=a;J(c[k])&&(d[h]=b(c[k])(a));break;case "=":if(!ua.call(c,
k)){if(l)break;c[k]=void 0}if(l&&!c[k])break;q=p(c[k]);G=q.literal?la:function(a,b){return a===b||a!==a&&b!==b};w=q.assign||function(){m=d[h]=q(a);throw ha("nonassign",c[k],f.name);};m=d[h]=q(a);l=function(b){G(b,d[h])||(G(b,m)?w(a,b=d[h]):d[h]=b);return m=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(p(c[k],l),null,q.literal);g.push(l);break;case "&":q=c.hasOwnProperty(k)?p(c[k]):v;if(q===v&&l)break;d[h]=function(b){return q(a,b)}}});return g.length&&function(){for(var a=0,
b=g.length;a<b;++a)g[a]()}}var ga=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};ga.prototype={$normalize:ra,$addClass:function(a){a&&0<a.length&&G.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&G.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Zc(a,b);c&&c.length&&G.addClass(this.$$element,c);(c=Zc(b,a))&&c.length&&G.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=
Rc(this.$$element[0],a),g=$c[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=zc(a,"-"));f=pa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=E(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=W(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+E(W(g[m]),!0),f=f+(" "+W(g[m+1]));g=W(g[2*l]).split(/\s/);
f+=E(W(g[0]),!0);2===g.length&&(f+=" "+W(g[1]));this[a]=b=f}!1!==d&&(null===b||x(b)?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&n(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=V()),e=d[a]||(d[a]=[]);e.push(b);w.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){ab(e,b)}}};var ca=b.startSymbol(),da=b.endSymbol(),ma="{{"==ca||"}}"==da?Ya:function(a){return a.replace(/\{\{/g,
ca).replace(/}}/g,da)},ia=/^ngAttr[A-Z]/,ka=/^(.+)Start$/;L.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:v;L.$$addBindingClass=m?function(a){Y(a,"ng-binding")}:v;L.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;L.$$addScopeClass=m?function(a,b){Y(a,b?"ng-isolate-scope":"ng-scope")}:v;return L}]}function ra(a){return fb(a.replace(Vc,""))}function Zc(a,b){var d="",c=a.split(/\s+/),
e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function Wc(a){a=A(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&Uf.call(a,b,1);return a}function Cc(a,b){if(b&&J(b))return b;if(J(a)){var d=ad.exec(a);if(d)return d[3]}}function Ze(){var a={},b=!1;this.register=function(b,c){Sa(b,"controller");F(b)?P(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,
b,c,d){if(!a||!F(a.$scope))throw I("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,s;h=!0===h;k&&J(k)&&(s=k);if(J(f)){k=f.match(ad);if(!k)throw Vf("ctrlfmt",f);m=k[1];s=s||k[3];f=a.hasOwnProperty(m)?a[m]:Bc(g.$scope,m,!0)||(b?Bc(c,m,!0):u);Ra(f,m,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),s&&e(g,s,l,m||f.name),P(function(){var a=d.invoke(f,l,g,m);a!==l&&(F(a)||C(a))&&(l=a,s&&e(g,s,l,m||f.name));return l},{instance:l,identifier:s});l=d.instantiate(f,
g,m);s&&e(g,s,l,m||f.name);return l}}]}function $e(){this.$get=["$window",function(a){return A(a.document)}]}function af(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function Zb(a){return F(a)?fa(a)?a.toISOString():db(a):a}function ff(){this.$get=function(){return function(a){if(!a)return"";var b=[];oc(a,function(a,c){null===a||x(a)||(K(a)?n(a,function(a,d){b.push(ma(c)+"="+ma(Zb(a)))}):b.push(ma(c)+"="+ma(Zb(a))))});return b.join("&")}}}function gf(){this.$get=
function(){return function(a){function b(a,e,f){null===a||x(a)||(K(a)?n(a,function(a,c){b(a,e+"["+(F(a)?c:"")+"]")}):F(a)&&!fa(a)?oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ma(e)+"="+ma(Zb(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function $b(a,b){if(J(a)){var d=a.replace(Wf,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(bd))||(c=(c=d.match(Xf))&&Yf[c[0]].test(d));c&&(a=uc(d))}}return a}function cd(a){var b=V(),d;J(a)?n(a.split("\n"),function(a){d=
a.indexOf(":");var e=N(W(a.substr(0,d)));a=W(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):F(a)&&n(a,function(a,d){var f=N(d),g=W(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function dd(a){var b;return function(d){b||(b=cd(a));return d?(d=b[N(d)],void 0===d&&(d=null),d):b}}function ed(a,b,d,c){if(C(c))return c(a,b,d);n(c,function(c){a=c(a,b,d)});return a}function ef(){var a=this.defaults={transformResponse:[$b],transformRequest:[function(a){return F(a)&&"[object File]"!==wa.call(a)&&"[object Blob]"!==
wa.call(a)&&"[object FormData]"!==wa.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:da(ac),put:da(ac),patch:da(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return y(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return y(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",
function(e,f,g,h,k,l){function m(b){function c(a){var b=P({},a);b.data=ed(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};n(a,function(a,e){C(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!F(b))throw I("$http")("badreq",b);var f=P({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=a.headers,d=P({},b.headers),f,g,h,c=P({},
c.common,c[N(b.method)]);a:for(f in c){g=N(f);for(h in d)if(N(h)===g)continue a;d[f]=c[f]}return e(d,da(b))}(b);f.method=tb(f.method);f.paramSerializer=J(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=ed(b.data,dd(d),u,b.transformRequest);x(e)&&n(d,function(a,b){"content-type"===N(b)&&delete d[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,e).then(c,c)},u],h=k.when(f);for(n(Q,function(a){(a.request||
a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Ra(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Ra(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=fd("success"),h.error=fd("error"));return h}function s(c,d){function g(a,c,d,e){function f(){l(c,a,d,e)}n&&(200<=a&&300>
a?n.put(O,[a,c,cd(d),e]):n.remove(O));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function l(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?G.resolve:G.reject)({data:a,status:b,headers:dd(d),config:c,statusText:e})}function s(a){l(a.data,a.status,da(a.headers()),a.statusText)}function Q(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var G=k.defer(),E=G.promise,n,L,Z=c.headers,O=q(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);E.then(Q,Q);!c.cache&&!a.cache||!1===
c.cache||"GET"!==c.method&&"JSONP"!==c.method||(n=F(c.cache)?c.cache:F(a.cache)?a.cache:B);n&&(L=n.get(O),y(L)?L&&C(L.then)?L.then(s,s):K(L)?l(L[1],L[0],da(L[2]),L[3]):l(L,200,{},"OK"):n.put(O,E));x(L)&&((L=gd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:u)&&(Z[c.xsrfHeaderName||a.xsrfHeaderName]=L),e(c.method,O,d,g,Z,c.timeout,c.withCredentials,c.responseType));return E}function q(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var B=g("$http");a.paramSerializer=J(a.paramSerializer)?
l.get(a.paramSerializer):a.paramSerializer;var Q=[];n(c,function(a){Q.unshift(J(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){n(arguments,function(a){m[a]=function(b,c){return m(P({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){m[a]=function(b,c,d){return m(P({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function jf(){this.$get=function(){return function(){return new R.XMLHttpRequest}}}function hf(){this.$get=
["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return Zf(a,c,a.defer,b.angular.callbacks,d[0])}]}function Zf(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,B="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),B=a.type,g="error"===a.type?404:200);d&&d(g,B)};f.addEventListener("load",
m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,s,q,B){function Q(){z&&z();w&&w.abort()}function t(b,c,e,f,g){y(M)&&d.cancel(M);z=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(v)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==N(e)){var p="_"+(c.counter++).toString(36);c[p]=function(a){c[p].data=a;c[p].called=!0};var z=f(h.replace("JSON_CALLBACK","angular.callbacks."+p),p,function(a,b){t(l,a,c[p].data,"",b);c[p]=v})}else{var w=b(e,h);w.open(e,
h,!0);n(m,function(a,b){y(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==ya(h).protocol?404:0);t(l,c,b,w.getAllResponseHeaders(),a)};e=function(){t(l,-1,null,null,"")};w.onerror=e;w.onabort=e;q&&(w.withCredentials=!0);if(B)try{w.responseType=B}catch(aa){if("json"!==B)throw aa;}w.send(x(k)?null:k)}if(0<s)var M=d(Q,s);else s&&C(s.then)&&s.then(Q)}}function cf(){var a="{{",b="}}";
this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(s,a).replace(q,b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,s,q){function z(a){try{var b=a;a=s?e.getTrusted(s,b):e.valueOf(b);var d;if(q&&!y(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=
""+a;break;default:a=db(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var w;k||(k=g(f),w=ca(k),w.exp=f,w.expressions=[],w.$$watchDelegate=h);return w}q=!!q;var n,M,G=0,E=[],Y=[];w=f.length;for(var L=[],Z=[];G<w;)if(-1!=(n=f.indexOf(a,G))&&-1!=(M=f.indexOf(b,n+l)))G!==n&&L.push(g(f.substring(G,n))),G=f.substring(n+l,M),E.push(G),Y.push(d(G,z)),G=M+m,Z.push(L.length),L.push("");else{G!==w&&L.push(g(f.substring(G)));break}s&&1<L.length&&Ka.throwNoconcat(f);if(!k||E.length){var O=
function(a){for(var b=0,c=E.length;b<c;b++){if(q&&x(a[b]))return;L[Z[b]]=a[b]}return L.join("")};return P(function(a){var b=0,d=E.length,e=Array(d);try{for(;b<d;b++)e[b]=Y[b](a);return O(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:E,$$watchDelegate:function(a,b){var c;return a.$watchGroup(Y,function(d,e){var f=O(d);C(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,s=new RegExp(a.replace(/./g,f),"g"),q=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=
function(){return b};return k}]}function df(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function s(){q?f.apply(null,B):f(p)}var q=4<arguments.length,B=q?va.call(arguments,4):[],n=b.setInterval,t=b.clearInterval,p=0,z=y(m)&&!m,w=(z?c:d).defer(),aa=w.promise;l=y(l)?l:0;aa.$$intervalId=n(function(){z?e.defer(s):a.$evalAsync(s);w.notify(p++);0<l&&p>=l&&(w.resolve(p),t(aa.$$intervalId),delete g[aa.$$intervalId]);z||a.$apply()},k);g[aa.$$intervalId]=
w;return aa}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function bc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=pb(a[b]);return a.join("/")}function hd(a,b){var d=ya(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=ba(d.port)||$f[d.protocol]||null}function id(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=ya(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?
c.pathname.substring(1):c.pathname);b.$$search=xc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function ta(a,b){if(0===b.indexOf(a))return b.substr(a.length)}function Ia(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function cc(a,b,d){this.$$html5=!0;d=d||"";hd(a,this);this.$$parse=function(a){var d=ta(b,a);if(!J(d))throw Eb("ipthprfx",a,b);id(d,this);this.$$path||(this.$$path="/");this.$$compose()};
this.$$compose=function(){var a=Rb(this.$$search),d=this.$$hash?"#"+pb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;y(f=ta(a,c))?(g=f,g=y(f=ta(d,f))?b+(ta("/",f)||f):a+g):y(f=ta(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function dc(a,b,d){hd(a,this);this.$$parse=function(c){var e=ta(a,c)||ta(b,c),f;x(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f=
"",x(e)&&(a=c,this.replace())):(f=ta(d,e),x(f)&&(f=e));id(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Rb(this.$$search),e=this.$$hash?"#"+pb(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ia(a)==Ia(b)?(this.$$parse(b),!0):!1}}function jd(a,b,d){this.$$html5=!0;
dc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ia(c)?f=c:(g=ta(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Rb(this.$$search),e=this.$$hash?"#"+pb(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Fb(a){return function(){return this[a]}}function kd(a,b){return function(d){if(x(d))return this[a];this[a]=b(d);this.$$compose();return this}}
function kf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return y(b)?(a=b,this):a};this.html5Mode=function(a){return $a(a)?(b.enabled=a,this):F(a)?($a(a.enabled)&&(b.enabled=a.enabled),$a(a.requireBase)&&(b.requireBase=a.requireBase),$a(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),
l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var s=c.url(),q;if(b.enabled){if(!m&&b.requireBase)throw Eb("nobase");q=s.substring(0,s.indexOf("/",s.indexOf("//")+2))+(m||"/");m=e.history?cc:jd}else q=Ia(s),m=dc;var B=q.substr(0,Ia(q).lastIndexOf("/")+1);l=new m(q,B,"#"+a);l.$$parseLinkUrl(s,s);l.$$state=c.state();var n=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&
2!=a.which&&2!=a.button){for(var e=A(a.target);"a"!==pa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");F(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=ya(h.animVal).href);n.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(s)&&c.url(l.absUrl(),!0);var t=!0;c.onUrlChange(function(a,b){x(ta(B,
a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(t=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(t||m)t=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,
f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function lf(){var a=!0,b=this;this.debugEnabled=function(b){return y(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||
v;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];n(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Va(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ea("isecfld",b);return a}function ld(a,b){a+="";if(!J(a))throw ea("iseccst",
b);return a}function za(a,b){if(a){if(a.constructor===a)throw ea("isecfn",b);if(a.window===a)throw ea("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ea("isecdom",b);if(a===Object)throw ea("isecobj",b);}return a}function md(a,b){if(a){if(a.constructor===a)throw ea("isecfn",b);if(a===ag||a===bg||a===cg)throw ea("isecff",b);}}function nd(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ea("isecaf",
b);}function dg(a,b){return"undefined"!==typeof a?a:b}function od(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function S(a,b){var d,c;switch(a.type){case r.Program:d=!0;n(a.body,function(a){S(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case r.Literal:a.constant=!0;a.toWatch=[];break;case r.UnaryExpression:S(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case r.BinaryExpression:S(a.left,b);S(a.right,b);a.constant=a.left.constant&&
a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case r.LogicalExpression:S(a.left,b);S(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case r.ConditionalExpression:S(a.test,b);S(a.alternate,b);S(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case r.Identifier:a.constant=!1;a.toWatch=[a];break;case r.MemberExpression:S(a.object,b);a.computed&&S(a.property,b);
a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case r.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];n(a.arguments,function(a){S(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case r.AssignmentExpression:S(a.left,b);S(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case r.ArrayExpression:d=!0;c=[];n(a.elements,function(a){S(a,b);d=
d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case r.ObjectExpression:d=!0;c=[];n(a.properties,function(a){S(a.value,b);d=d&&a.value.constant;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case r.ThisExpression:a.constant=!1,a.toWatch=[]}}function pd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:u}}function qd(a){return a.type===r.Identifier||a.type===r.MemberExpression}function rd(a){if(1===
a.body.length&&qd(a.body[0].expression))return{type:r.AssignmentExpression,left:a.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}function sd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===r.Literal||a.body[0].expression.type===r.ArrayExpression||a.body[0].expression.type===r.ObjectExpression)}function td(a,b){this.astBuilder=a;this.$filter=b}function ud(a,b){this.astBuilder=a;this.$filter=b}function Gb(a){return"constructor"==a}function ec(a){return C(a.valueOf)?
a.valueOf():eg.call(a)}function mf(){var a=V(),b=V();this.$get=["$filter",function(d){function c(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ec(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,d,e,f){var g=e.inputs,h;if(1===g.length){var k=c,g=g[0];return a.$watch(function(a){var b=g(a);c(b,k)||(h=e(a,u,u,[b]),k=b&&ec(b));return h},b,d,f)}for(var l=[],m=[],s=0,n=g.length;s<n;s++)l[s]=c,m[s]=null;return a.$watch(function(a){for(var b=!1,d=0,f=g.length;d<f;d++){var k=g[d](a);
if(b||(b=!c(k,l[d])))m[d]=k,l[d]=k&&ec(k)}b&&(h=e(a,u,u,m));return h},b,d,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;C(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;n(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;C(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function h(a,b,c,d){var e;return e=
a.$watch(function(a){e();return d(a)},b,c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==g&&c!==f?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return y(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=e,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var l=Da().noUnsafeEval,m={csp:l,expensiveChecks:!1},s={csp:l,expensiveChecks:!0};return function(c,l,
n){var t,p,z;switch(typeof c){case "string":z=c=c.trim();var w=n?b:a;t=w[z];t||(":"===c.charAt(0)&&":"===c.charAt(1)&&(p=!0,c=c.substring(2)),n=n?s:m,t=new fc(n),t=(new gc(t,d,n)).parse(c),t.constant?t.$$watchDelegate=h:p?t.$$watchDelegate=t.literal?g:f:t.inputs&&(t.$$watchDelegate=e),w[z]=t);return k(t,l);case "function":return k(c,l);default:return v}}}]}function of(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return vd(function(b){a.$evalAsync(b)},b)}]}function pf(){this.$get=["$browser",
"$exceptionHandler",function(a,b){return vd(function(b){a.defer(b)},b)}]}function vd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{C(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function f(){this.promise=
new d}var g=I("$q",TypeError);P(d.prototype,{then:function(a,b,c){if(x(a)&&x(b)&&x(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});P(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",
a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(F(a)||C(a))g=a&&a.then;C(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state)},
notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(C(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{C(c)&&(d=c())}catch(e){return h(e,!1)}return d&&C(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=new f;e.resolve(a);return e.promise.then(b,
c,d)},m=function q(a){if(!C(a))throw g("norslvr",a);if(!(this instanceof q))return new q(a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};m.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};m.reject=function(a){var b=new f;b.reject(a);return b.promise};m.when=l;m.resolve=l;m.all=function(a){var b=new f,c=0,d=K(a)?[]:{};n(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},
function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function yf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function nf(){function a(a){function b(){this.$$watchers=
this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++ob;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=I("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ja&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=
a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++ob;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function s(a){if(z.$$phase)throw d("inprog",z.$$phase);z.$$phase=a}function q(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function B(a,b,c){do a.$$listenerCount[c]-=
b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function r(){}function t(){for(;M.length;)try{M.shift()()}catch(a){f(a)}e=null}function p(){null===e&&(e=h.defer(function(){z.$apply(t)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=
d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:r,get:f,exp:e||a,eq:!!d};c=null;C(b)||(l.fn=v);k||(k=h.$$watchers=[]);k.unshift(l);q(this,1);return function(){0<=ab(k,l)&&q(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&
b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(F(e))if(Ba(e))for(f!==s&&(f=s,n=f.length=0,l++),a=e.length,n!==a&&(l++,f.length=n=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==
q&&(f=q={},n=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(n++,f[b]=g,l++));if(n>a)for(b in l++,f)ua.call(e,b)||(n--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),s=[],q={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,h,d);if(k)if(F(e))if(Ba(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,k,l,m,q,p=b,n,B=[],M,v;s("$digest");h.$$checkUrlChange();this===z&&null!==e&&(h.defer.cancel(e),t());c=null;do{q=!1;for(n=this;w.length;){try{v=w.shift(),v.scope.$eval(v.expression,v.locals)}catch(x){f(x)}c=null}a:do{if(l=n.$$watchers)for(m=l.length;m--;)try{if(a=l[m])if((g=a.get(n))!==(k=a.last)&&!(a.eq?la(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))q=!0,c=a,a.last=a.eq?bb(g,null):g,a.fn(g,k===r?g:k,n),5>p&&(M=4-p,B[M]||(B[M]=[]),B[M].push({msg:C(a.exp)?"fn: "+(a.exp.name||
a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){q=!1;break a}}catch(y){f(y)}if(!(l=n.$$watchersCount&&n.$$childHead||n!==this&&n.$$nextSibling))for(;n!==this&&!(l=n.$$nextSibling);)n=n.$parent}while(n=l);if((q||w.length)&&!p--)throw z.$$phase=null,d("infdig",b,B);}while(q||w.length);for(z.$$phase=null;u.length;)try{u.shift()()}catch(A){f(A)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===z&&h.$$applicationDestroyed();
q(this,-this.$$watchersCount);for(var b in this.$$listenerCount)B(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners=
{};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){z.$$phase||w.length||h.defer(function(){w.length&&z.$digest()});w.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){u.push(a)},$apply:function(a){try{s("$apply");try{return this.$eval(a)}finally{z.$$phase=null}}catch(b){f(b)}finally{try{z.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&M.push(b);p()},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,B(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=cb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,
k)}catch(s){f(s)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=cb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&
c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var z=new m,w=z.$$asyncQueue=[],u=z.$$postDigestQueue=[],M=z.$$applyAsyncQueue=[];return z}]}function ie(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=
c?b:a,f;f=ya(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function fg(a){if("self"===a)return a;if(J(a)){if(-1<a.indexOf("***"))throw Aa("iwcard",a);a=wd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Na(a))return new RegExp("^"+a.source+"$");throw Aa("imatcher");}function xd(a){var b=[];y(a)&&n(a,function(a){b.push(fg(a))});return b}function rf(){this.SCE_CONTEXTS=ka;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=xd(b));return a};
this.resourceUrlBlacklist=function(a){arguments.length&&(b=xd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Aa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));
var g=e(),h={};h[ka.HTML]=e(g);h[ka.CSS]=e(g);h[ka.URL]=e(g);h[ka.JS]=e(g);h[ka.RESOURCE_URL]=e(h[ka.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Aa("icontext",a,b);if(null===b||x(b)||""===b)return b;if("string"!==typeof b)throw Aa("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||x(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ka.RESOURCE_URL){var g=ya(e.toString()),s,q,n=!1;
s=0;for(q=a.length;s<q;s++)if(c(a[s],g)){n=!0;break}if(n)for(s=0,q=b.length;s<q;s++)if(c(b[s],g)){n=!1;break}if(n)return e;throw Aa("insecurl",e.toString());}if(d===ka.HTML)return f(e);throw Aa("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function qf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ja)throw Aa("iequirks");var c=da(ka);c.isEnabled=function(){return a};c.trustAs=d.trustAs;
c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;n(ka,function(a,b){var d=N(b);c[fb("parse_as_"+d)]=function(b){return e(a,b)};c[fb("get_trusted_"+d)]=function(b){return f(a,b)};c[fb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function sf(){this.$get=["$window","$document",
function(a,b){var d={},c=ba((/android (\d+)/.exec(N((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),f=b[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,k=f.body&&f.body.style,l=!1,m=!1;if(k){for(var s in k)if(l=h.exec(s)){g=l[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||g+"Transition"in k);m=!!("animation"in k||g+"Animation"in k);!c||l&&m||(l=J(k.webkitTransition),m=J(k.webkitAnimation))}return{history:!(!a.history||
!a.history.pushState||4>c||e),hasEvent:function(a){if("input"===a&&11>=Ja)return!1;if(x(d[a])){var b=f.createElement("div");d[a]="on"+a in b}return d[a]},csp:Da(),vendorPrefix:g,transitions:l,animations:m,android:c}}]}function uf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;J(g)&&b.get(g)||(g=e.getTrustedResourceUrl(g));var k=d.defaults&&d.defaults.transformResponse;K(k)?k=k.filter(function(a){return a!==
$b}):k===$b&&(k=null);return d.get(g,P({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw ha("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function vf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var c=ga.element(a).data("$binding");
c&&n(c,function(c){d?(new RegExp("(^|\\s)"+wd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function wf(){this.$get=["$rootScope",
"$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){C(f)||(l=k,k=f,f=v);var m=va.call(arguments,3),s=y(l)&&!l,q=(s?c:d).defer(),n=q.promise,r;r=b.defer(function(){try{q.resolve(f.apply(null,m))}catch(b){q.reject(b),e(b)}finally{delete g[n.$$timeoutId]}s||a.$apply()},k);n.$$timeoutId=r;g[r]=q;return n}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function ya(a){Ja&&
(T.setAttribute("href",a),a=T.href);T.setAttribute("href",a);return{href:T.href,protocol:T.protocol?T.protocol.replace(/:$/,""):"",host:T.host,search:T.search?T.search.replace(/^\?/,""):"",hash:T.hash?T.hash.replace(/^#/,""):"",hostname:T.hostname,port:T.port,pathname:"/"===T.pathname.charAt(0)?T.pathname:"/"+T.pathname}}function gd(a){a=J(a)?ya(a):a;return a.protocol===yd.protocol&&a.host===yd.host}function xf(){this.$get=ca(R)}function zd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),x(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Bf(){this.$get=zd}function Kc(a){function b(d,c){if(F(d)){var e={};n(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Ad);b("date",Bd);
b("filter",gg);b("json",hg);b("limitTo",ig);b("lowercase",jg);b("number",Cd);b("orderBy",Dd);b("uppercase",kg)}function gg(){return function(a,b,d){if(!Ba(a)){if(null==a)return a;throw I("filter")("notarray",a);}var c;switch(hc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=lg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function lg(a,b,d){var c=F(a)&&"$"in a;!0===b?b=la:C(b)||(b=function(a,b){if(x(a))return!1;if(null===
a||null===b)return a===b;if(F(b)||F(a)&&!qc(a))return!1;a=N(""+a);b=N(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!F(e)?La(e,a.$,b,!1):La(e,a,b,d)}}function La(a,b,d,c,e){var f=hc(a),g=hc(b);if("string"===g&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c);if(K(a))return a.some(function(a){return La(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&La(a[h],b,d,!0))return!0;return e?!1:La(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!C(e)&&!x(e)&&
(f="$"===h,!La(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function hc(a){return null===a?"null":typeof a}function Ad(a){var b=a.NUMBER_FORMATS;return function(a,c,e){x(c)&&(c=b.CURRENCY_SYM);x(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ed(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Cd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ed(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Ed(a,
b,d,c,e){if(F(a))return"";var f=0>a;a=Math.abs(a);var g=Infinity===a;if(!g&&!isFinite(a))return"";var h=a+"",k="",l=!1,m=[];g&&(k="\u221e");if(!g&&-1!==h.indexOf("e")){var s=h.match(/([\d\.]+)e(-?)(\d+)/);s&&"-"==s[2]&&s[3]>e+1?a=0:(k=h,l=!0)}if(g||l)0<e&&1>a&&(k=a.toFixed(e),a=parseFloat(k),k=k.replace(ic,c));else{g=(h.split(ic)[1]||"").length;x(e)&&(e=Math.min(Math.max(b.minFrac,g),b.maxFrac));a=+(Math.round(+(a.toString()+"e"+e)).toString()+"e"+-e);var g=(""+a).split(ic),h=g[0],g=g[1]||"",s=0,
q=b.lgSize,n=b.gSize;if(h.length>=q+n)for(s=h.length-q,l=0;l<s;l++)0===(s-l)%n&&0!==l&&(k+=d),k+=h.charAt(l);for(l=s;l<h.length;l++)0===(h.length-l)%q&&0!==l&&(k+=d),k+=h.charAt(l);for(;g.length<e;)g+="0";e&&"0"!==e&&(k+=c+g.substr(0,e))}0===a&&(f=!1);m.push(f?b.negPre:b.posPre,k,f?b.negSuf:b.posSuf);return m.join("")}function Hb(a,b,d){var c="";0>a&&(c="-",a=-a);for(a=""+a;a.length<b;)a="0"+a;d&&(a=a.substr(a.length-b));return c+a}function $(a,b,d,c){d=d||0;return function(e){e=e["get"+a]();if(0<
d||e>-d)e+=d;0===e&&-12==d&&(e=12);return Hb(e,b,c)}}function Ib(a,b){return function(d,c){var e=d["get"+a](),f=tb(b?"SHORT"+a:a);return c[f][e]}}function Fd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Gd(a){return function(b){var d=Fd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Hb(b,a)}}function jc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Bd(a){function b(a){var b;if(b=
a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=ba(b[9]+b[10]),g=ba(b[9]+b[11]));h.call(a,ba(b[1]),ba(b[2])-1,ba(b[3]));f=ba(b[4]||0)-f;g=ba(b[5]||0)-g;h=ba(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;
J(c)&&(c=mg.test(c)?ba(c):b(c));U(c)&&(c=new Date(c));if(!fa(c)||!isFinite(c.getTime()))return c;for(;d;)(l=ng.exec(d))?(h=cb(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=vc(f,c.getTimezoneOffset()),c=Qb(c,f,!0));n(h,function(b){k=og[b];g+=k?k(c,a.DATETIME_FORMATS,m):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function hg(){return function(a,b){x(b)&&(b=2);return db(a,b)}}function ig(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):ba(b);if(isNaN(b))return a;
U(a)&&(a=a.toString());if(!K(a)&&!J(a))return a;d=!d||isNaN(d)?0:ba(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?a.slice(d,d+b):0===d?a.slice(b,a.length):a.slice(Math.max(0,d+b),d)}}function Dd(a){function b(b,d){d=d?-1:1;return b.map(function(b){var c=1,h=Ya;if(C(b))h=b;else if(J(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(h=a(b),h.constant))var k=h(),h=function(a){return a[k]}}return{get:h,descending:c*d}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;
default:return!1}}return function(a,e,f){if(null==a)return a;if(!Ba(a))throw I("orderBy")("notarray",a);K(e)||(e=[e]);0===e.length&&(e=["+"]);var g=b(e,f);g.push({get:function(){return{}},descending:f?-1:1});a=Array.prototype.map.call(a,function(a,b){return{value:a,predicateValues:g.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("string"===c)e=e.toLowerCase();else if("object"===c)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),d(e)))break a;if(qc(e)&&(e=e.toString(),
d(e)))break a;e=b}return{value:e,type:c}})}});a.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],n=0;c.type===f.type?c.value!==f.value&&(n=c.value<f.value?-1:1):n=c.type<f.type?-1:1;if(c=n*g[d].descending)break}return c});return a=a.map(function(a){return a.value})}}function Ma(a){C(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ca(a)}function Hd(a,b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=u;f.$name=e(b.name||b.ngForm||
"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Jb;f.$rollbackViewValue=function(){n(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Sa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];n(f.$pending,
function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,a)});ab(g,a);a.$$parentForm=Jb};Id({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(ab(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Wa);c.addClass(a,Kb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,
Wa,Kb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function kc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function kb(a,b,d,c,e,f){var g=N(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(a){h=!0});b.on("compositionend",function(){h=!1;
k()})}var k=function(a){l&&(f.defer.cancel(l),l=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=W(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",k);else{var l,m=function(a,b,c){l||(l=f.defer(function(){l=null;b&&b.value===c||k(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",k);
c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Lb(a,b){return function(d,c){var e,f;if(fa(d))return d;if(J(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(pg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},
n(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function lb(a,b,d,c){return function(e,f,g,h,k,l,m){function s(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)&&!fa(a)?d(a)||u:a}Jd(e,f,g,h);kb(e,f,g,h,k,l);var n=h&&h.$options&&h.$options.timezone,r;h.$$parserName=a;h.$parsers.push(function(a){return h.$isEmpty(a)?null:b.test(a)?(a=d(a,r),n&&(a=Qb(a,n)),a):u});h.$formatters.push(function(a){if(a&&!fa(a))throw mb("datefmt",
a);if(s(a))return(r=a)&&n&&(r=Qb(r,n,!0)),m("date")(a,c,n);r=null;return""});if(y(g.min)||g.ngMin){var t;h.$validators.min=function(a){return!s(a)||x(t)||d(a)>=t};g.$observe("min",function(a){t=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var p;h.$validators.max=function(a){return!s(a)||x(p)||d(a)<=p};g.$observe("max",function(a){p=q(a);h.$validate()})}}}function Jd(a,b,d,c){(c.$$hasNativeValidators=F(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?
u:a})}function Kd(a,b,d,c,e){if(y(c)){a=a(c);if(!a.constant)throw mb("constexpr",d,c);return a(b)}return e}function lc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return K(a)?(n(a,function(a){b=b.concat(e(a))}),b):J(a)?a.split(" "):F(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a,
b){var c=g.data("$classCounts")||V(),d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function l(a){if(!0===b||f.$index%2===b){var l=e(a||[]);if(!m){var n=k(l,1);h.$addClass(n)}else if(!la(a,m)){var r=e(m),n=c(l,r),l=c(r,l),n=k(n,1),l=k(l,-1);n&&n.length&&d.addClass(g,n);l&&l.length&&d.removeClass(g,l)}}m=da(a)}var m;f.$watch(h[a],l,!0);h.$observe("class",function(b){l(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,
d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[a]));g===b?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}function Id(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+zc(a,"-"):"";b(nb+a,!0===c);b(Ld+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Ld]=!(f[nb]=e.hasClass(nb));c.$setValidity=function(a,e,f){x(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Md(c.$pending)&&
(c.$pending=u));$a(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Nd,!0),c.$valid=c.$invalid=u,d("",null)):(b(Nd,!1),c.$valid=Md(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?u:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Md(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var qg=/^\/(.+)\/([a-z]*)$/,N=function(a){return J(a)?a.toLowerCase():
a},ua=Object.prototype.hasOwnProperty,tb=function(a){return J(a)?a.toUpperCase():a},Ja,A,xa,va=[].slice,Uf=[].splice,rg=[].push,wa=Object.prototype.toString,rc=Object.getPrototypeOf,Ca=I("ng"),ga=R.angular||(R.angular={}),Sb,ob=0;Ja=X.documentMode;v.$inject=[];Ya.$inject=[];var K=Array.isArray,Xd=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,W=function(a){return J(a)?a.trim():a},wd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,
"\\x08")},Da=function(){if(!y(Da.rules)){var a=X.querySelector("[ng-csp]")||X.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Da.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Da;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Da.rules},qb=function(){if(y(qb.name_))return qb.name_;var a,b,d=Pa.length,c,e;for(b=0;b<d;++b)if(c=Pa[b],a=X.querySelector("["+
c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return qb.name_=e},Pa=["ng-","data-ng-","ng:","x-ng-"],de=/[A-Z]/g,Ac=!1,Oa=3,he={full:"1.5.0-beta.2",major:1,minor:5,dot:0,codeName:"effective-delegation"};D.expando="ng339";var hb=D.cache={},Hf=1;D._data=function(a){return this.cache[a[this.expando]]||{}};var Cf=/([\:\-\_]+(.))/g,Df=/^moz([A-Z])/,xb={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=I("jqLite"),Gf=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,Ef=/<([\w:-]+)/,Ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ia={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option;ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead;ia.th=ia.td;var Mf=Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Qa=D.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===
X.readyState?setTimeout(b):(this.on("DOMContentLoaded",b),D(R).on("load",b))},toString:function(){var a=[];n(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?A(this[a]):A(this[this.length+a])},length:0,push:rg,sort:[].sort,splice:[].splice},Cb={};n("multiple selected checked disabled readOnly required open".split(" "),function(a){Cb[N(a)]=a});var Sc={};n("input select option textarea button form details".split(" "),function(a){Sc[a]=!0});var $c={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Wb,removeData:gb,hasData:function(a){for(var b in hb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)gb(a[b])}},function(a,b){D[b]=a});n({data:Wb,inheritedData:Bb,scope:function(a){return A.data(a,"$scope")||Bb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return A.data(a,"$isolateScope")||A.data(a,"$isolateScopeNoTemplate")},controller:Pc,injector:function(a){return Bb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:yb,css:function(a,b,d){b=fb(b);if(y(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Oa&&2!==c&&8!==c)if(c=N(b),Cb[c])if(y(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||v).specified?c:u;else if(y(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?u:a},prop:function(a,b,d){if(y(d))a[b]=d;else return a[b]},
text:function(){function a(a,d){if(x(d)){var c=a.nodeType;return 1===c||c===Oa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&"select"===pa(a)){var d=[];n(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;vb(a,!0);a.innerHTML=b},empty:Qc},function(a,b){D.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Qc&&x(2==a.length&&a!==yb&&a!==Pc?
b:c)){if(F(b)){for(e=0;e<g;e++)if(a===Wb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=x(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});n({removeData:gb,on:function(a,b,d,c){if(y(c))throw Ub("onargs");if(Lc(a)){c=wb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Jf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===
b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],xb[b]?(h(xb[b],Lf),h(b,u,!0)):h(b)}},off:Oc,one:function(a,b,d){a=A(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;vb(a);n(new D(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];n(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=
a.nodeType;if(1===d||11===d){b=new D(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;n(new D(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){b=A(b).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new D(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Ab,removeClass:zb,
toggleClass:function(a,b,d){b&&n(b.split(" "),function(b){var e=d;x(e)&&(e=!yb(a,b));(e?Ab:zb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Vb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=wb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},
stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:f,target:a},b.type&&(c=P(c,b)),b=da(g),e=d?[c].concat(d):[c],n(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){D.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)x(f)?(f=a(this[g],b,c,e),y(f)&&(f=A(f))):Nc(f,a(this[g],b,c,e));return y(f)?f:this};D.prototype.bind=D.prototype.on;
D.prototype.unbind=D.prototype.off});Ta.prototype={put:function(a,b){this[Ea(a,this.nextUid)]=b},get:function(a){return this[Ea(a,this.nextUid)]},remove:function(a){var b=this[a=Ea(a,this.nextUid)];delete this[a];return b}};var Af=[function(){this.$get=[function(){return Ta}]}],Of=/^([^\(]+?)=>/,Pf=/^[^\(]*\(\s*([^\)]*)\)/m,sg=/,/,tg=/^\s*(_?)(\S+?)\1\s*$/,Nf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=I("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];
if(a.length){if(b)throw J(d)&&d||(d=a.name||Qf(a)),Fa("strictdi",d);b=Tc(a);n(b[1].split(sg),function(a){a.replace(tg,function(a,b,d){c.push(d)})})}a.$inject=c}}else K(a)?(b=a.length-1,Ra(a[b],"fn"),c=a.slice(0,b)):Ra(a,"fn",!0);return c};var Od=I("$animate"),We=function(){this.$get=["$q","$$rAF",function(a,b){function d(){}d.all=v;d.chain=v;d.prototype={end:v,cancel:v,resume:v,pause:v,complete:v,then:function(c,d){return a(function(a){b(function(){a()})}).then(c,d)}};return d}]},Ve=function(){var a=
new Ta,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=J(b)?b.split(" "):K(b)?b:[],n(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){n(b,function(b){var c=a.get(b);if(c){var d=Rf(b.attr("class")),e="",f="";n(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});n(b,function(a){e&&Ab(a,e);f&&zb(a,f)});a.remove(b)}});b.length=0}return{enabled:v,on:v,off:v,pin:v,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);
k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);return new d}}}]},Te=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Od("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=
a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Od("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=
f&&A(f);g=g&&A(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ha(h))},move:function(e,f,g,h){f=f&&A(f);g=g&&A(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ha(h))},leave:function(b,c){return a.push(b,"leave",Ha(c),function(){b.remove()})},addClass:function(b,c,g){g=Ha(g);g.addClass=ib(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ha(g);g.removeClass=ib(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ha(h);h.addClass=ib(h.addClass,
c);h.removeClass=ib(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ha(k);k.from=k.from?P(k.from,c):c;k.to=k.to?P(k.to,g):g;k.tempClasses=ib(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],Ue=function(){this.$get=["$$rAF","$q",function(a,b){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=
b.defer());return this.defer.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)}};return function(b,e){function f(){a(function(){e.addClass&&(b.addClass(e.addClass),e.addClass=null);e.removeClass&&(b.removeClass(e.removeClass),e.removeClass=null);e.to&&(b.css(e.to),e.to=null);g||h.done();g=!0});return h}e.cleanupStyles&&(e.from=e.to=null);e.from&&(b.css(e.from),e.from=
null);var g,h=new d;return{start:f,end:f}}}]},ha=I("$compile");Dc.$inject=["$provide","$$sanitizeUriProvider"];var Vc=/^((?:x|data)[\:\-_])/i,Vf=I("$controller"),ad=/^(\S+)(\s+as\s+(\w+))?$/,bf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof A&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},bd="application/json",ac={"Content-Type":bd+";charset=utf-8"},Xf=/^\[|^\{(?!\{)/,Yf={"[":/]$/,"{":/}$/},Wf=/^\)\]\}',?\n/,ug=I("$http"),fd=function(a){return function(){throw ug("legacy",
a);}},Ka=ga.$interpolateMinErr=I("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var vg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,$f={http:80,https:443,ftp:21},Eb=I("$location"),wg={$$html5:!1,$$replace:!1,absUrl:Fb("$$absUrl"),url:function(a){if(x(a))return this.$$url;var b=vg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Fb("$$protocol"),
host:Fb("$$host"),port:Fb("$$port"),path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(J(a)||U(a))a=a.toString(),this.$$search=xc(a);else if(F(a))a=bb(a,{}),n(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Eb("isrcharg");break;default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==
a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([jd,dc,cc],function(a){a.prototype=Object.create(wg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Eb("nostate");this.$$state=x(b)?null:b;return this}});var ea=I("$parse"),ag=Function.prototype.call,bg=Function.prototype.apply,cg=Function.prototype.bind,Mb=V();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Mb[a]=!0});var xg={n:"\n",f:"\f",r:"\r",
t:"\t",v:"\v","'":"'",'"':'"'},fc=function(a){this.options=a};fc.prototype={constructor:fc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;
else{var b=a+this.peek(),d=b+this.peek(2),c=Mb[b],e=Mb[d];Mb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||
"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=y(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ea("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=N(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();
if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var b=this.text.charAt(this.index);if(!this.isIdent(b)&&!this.isNumber(b))break;this.index++}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=xg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var r=function(a,b){this.lexer=a;this.options=b};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal=
"Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";r.ThisExpression="ThisExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:r.Program,
body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?
(d=this.expression(),{type:r.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,
operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:b.text,
left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=bb(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():
this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:r.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:r.CallExpression,callee:this.identifier(),
arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:r.Property,kind:"init"};this.peek().constant?b.key=this.constant():this.peek().identifier?b.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");b.value=this.expression();a.push(b)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},
throwError:function(a,b){throw ea("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ea("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ea("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];
var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},constants:{"true":{type:r.Literal,value:!0},"false":{type:r.Literal,value:!1},"null":{type:r.Literal,value:null},undefined:{type:r.Literal,value:u},"this":{type:r.ThisExpression}}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],
body:[],own:{}},inputs:[]};S(c,d.$filter);var e="",f;this.stage="assign";if(f=rd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=pd(c.body);d.stage="inputs";n(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+
'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Va,za,md,ld,nd,dg,od,a);this.state=this.stage=u;e.literal=sd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;n(b,function(b){a.push("var "+b+"="+d.generateFunction(b,
"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;n(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,
d,c,e,f){var g,h,k=this,l,m;c=c||v;if(!f&&y(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case r.Program:n(a.body,function(b,c){k.recurse(b.expression,u,u,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case r.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case r.UnaryExpression:this.recurse(a.argument,u,u,function(a){h=a});m=a.operator+"("+this.ifDefined(h,
0)+")";this.assign(b,m);c(m);break;case r.BinaryExpression:this.recurse(a.left,u,u,function(a){g=a});this.recurse(a.right,u,u,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case r.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case r.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,
b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case r.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Va(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",
a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Gb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case r.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,u,function(){k.if_(k.notNull(g),function(){if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,
h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Va(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Gb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case r.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],n(a.arguments,
function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);n(a.arguments,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},
function(){k.assign(b,"undefined")});c(b)}));break;case r.AssignmentExpression:h=this.nextId();g={};if(!qd(a.left))throw ea("lval");this.recurse(a.left,u,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case r.ArrayExpression:l=[];n(a.elements,function(a){k.recurse(a,k.nextId(),u,function(a){l.push(a)})});
m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case r.ObjectExpression:l=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),u,function(b){l.push(k.escape(a.key.type===r.Identifier?a.key.name:""+a.key.value)+":"+b)})});m="{"+l.join(",")+"}";this.assign(b,m);c(m);break;case r.ThisExpression:this.assign(b,"s");c("s");break;case r.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+
this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,
"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){return a+"."+b},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},
addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(J(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(U(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw ea("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;S(c,d.$filter);var e,f;if(e=rd(c))f=this.recurse(e);e=pd(c.body);var g;e&&(g=[],n(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];n(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?function(){}:1===c.body.length?h[0]:function(a,b){var c;n(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=sd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case r.Literal:return this.value(a.value,b);case r.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case r.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case r.Identifier:return Va(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Gb(a.name),b,d,f.expression);case r.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Va(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case r.CallExpression:return g=[],n(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],q=0;q<g.length;++q)n.push(g[q](a,c,d,f));a=e.apply(u,n,f);return b?{context:u,name:u,value:a}:a}:function(a,
c,d,m){var n=e(a,c,d,m),q;if(null!=n.value){za(n.context,f.expression);md(n.value,f.expression);q=[];for(var r=0;r<g.length;++r)q.push(za(g[r](a,c,d,m),f.expression));q=za(n.value.apply(n.context,q),f.expression)}return b?{value:q}:q};case r.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);za(n.value,f.expression);nd(n.context);n.context[n.name]=a;return b?{value:a}:a};case r.ArrayExpression:return g=[],n(a.elements,function(a){g.push(f.recurse(a))}),
function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case r.ObjectExpression:return g=[],n(a.properties,function(a){g.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},n=0;n<g.length;++n)f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case r.ThisExpression:return function(a){return b?{value:a}:a};case r.NGValueParameter:return function(a,c,d,e){return b?{value:d}:d}}},"unary+":function(a,
b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=y(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=od(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(y(h)?h:0)-(y(c)?c:0);return d?{value:h}:h}},"binary*":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,
d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:u,name:u,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=
g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:u;b&&za(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m=ld(m),Va(m,e),c&&1!==c&&l&&!l[m]&&(l[m]={}),n=l[m],za(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&g&&!g[b]&&(g[b]={});h=null!=g?g[b]:u;(d||Gb(b))&&za(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,
b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var gc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new r(this.lexer);this.astCompiler=d.csp?new ud(this.ast,b):new td(this.ast,b)};gc.prototype={constructor:gc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};V();V();var eg=Object.prototype.valueOf,Aa=I("$sce"),ka={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ha=I("$compile"),T=X.createElement("a"),yd=ya(R.location.href);
zd.$inject=["$document"];Kc.$inject=["$provide"];Ad.$inject=["$locale"];Cd.$inject=["$locale"];var ic=".",og={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Ib("Month"),MMM:Ib("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Ib("Day"),EEE:Ib("Day",!0),a:function(a,b){return 12>a.getHours()?
b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Hb(Math[0<a?"floor":"ceil"](a/60),2)+Hb(Math.abs(a%60),2))},ww:Gd(2),w:Gd(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},ng=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,mg=/^\-?\d+$/;Bd.$inject=["$locale"];var jg=ca(N),kg=ca(tb);Dd.$inject=["$parse"];var je=ca({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,
b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===wa.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),ub={};n(Cb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=ra("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});ub[c]=function(){return{restrict:"A",priority:100,link:e}}}});n($c,function(a,b){ub[b]=function(){return{priority:100,link:function(a,
c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(qg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});n(["src","srcset","href"],function(a){var b=ra("ng-"+a);ub[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===wa.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ja&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});
var Jb={$addControl:v,$$renameControl:function(a,b){a.$name=b},$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v,$setSubmitted:v};Hd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Pd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||v}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Hd,compile:function(d,f){d.addClass(Wa).addClass(nb);var g=f.name?"name":a&&f.ngForm?"ngForm":
!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var q=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",q,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",q,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):v;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,u),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);
r(a,u);P(n,Jb)})}}}}}]},ke=Pd(),xe=Pd(!0),pg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,yg=/^[A-Za-z][A-Za-z\d.+-]*:\/*(?:\w+(?::\w+)?@)?[^\s/]+(?::\d+)?(?:\/[\w#!:.?+=&%@\-/]*)?$/,zg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Ag=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Qd=/^(\d{4})-(\d{2})-(\d{2})$/,Rd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mc=/^(\d{4})-W(\d\d)$/,Sd=/^(\d{4})-(\d\d)$/,
Td=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ud={text:function(a,b,d,c,e,f){kb(a,b,d,c,e,f);kc(c)},date:lb("date",Qd,Lb(Qd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":lb("datetimelocal",Rd,Lb(Rd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:lb("time",Td,Lb(Td,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:lb("week",mc,function(a,b){if(fa(a))return a;if(J(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Fd(c),e=7*(e-1);b&&(d=b.getHours(),f=
b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:lb("month",Sd,Lb(Sd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Jd(a,b,d,c);kb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){return c.$isEmpty(a)?null:Ag.test(a)?parseFloat(a):u});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!U(a))throw mb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||
x(g)||a>=g};d.$observe("min",function(a){y(a)&&!U(a)&&(a=parseFloat(a,10));g=U(a)&&!isNaN(a)?a:u;c.$validate()})}if(y(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||x(h)||a<=h};d.$observe("max",function(a){y(a)&&!U(a)&&(a=parseFloat(a,10));h=U(a)&&!isNaN(a)?a:u;c.$validate()})}},url:function(a,b,d,c,e,f){kb(a,b,d,c,e,f);kc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||yg.test(d)}},email:function(a,b,d,c,e,f){kb(a,b,d,c,e,f);kc(c);
c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||zg.test(d)}},radio:function(a,b,d,c){x(d.name)&&b.attr("name",++ob);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Kd(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Kd(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&
a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return la(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:v,button:v,submit:v,reset:v,file:v},Ec=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Ud[N(g.type)]||Ud.text)(e,f,g,h[0],b,a,d,c)}}}}],Bg=/^(true|false|\d+)$/,Pe=function(){return{restrict:"A",priority:100,compile:function(a,
b){return Bg.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},pe=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=x(a)?"":a})}}}}],re=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));
b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a})}}}}],qe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){c.html(a.getTrustedHtml(f(b))||"")})}}}}],Oe=ca({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
se=lc("",!0),ue=lc("Odd",0),te=lc("Even",1),ve=Ma({compile:function(a,b){b.$set("ngCloak",u);a.removeClass("ng-cloak")}}),we=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Jc={},Cg={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=ra("ng-"+a);Jc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=
d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Cg[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var ze=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(b,d,c,e,f){var g,h,k;b.$watch(c.ngIf,function(b){b?h||f(function(b,e){h=e;b[b.length++]=X.createComment(" end ngIf: "+c.ngIf+" ");g={clone:b};a.enter(b,d.parent(),d)}):(k&&(k.remove(),k=null),h&&(h.$destroy(),h=null),g&&(k=
sb(g.clone),a.leave(k).then(function(){k=null}),g=null))})}}}],Ae=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ga.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,q){var r=0,u,t,p,z=function(){t&&(t.remove(),t=null);u&&(u.$destroy(),u=null);p&&(d.leave(p).then(function(){t=null}),t=p,p=null)};c.$watch(f,function(f){var m=function(){!y(h)||h&&!c.$eval(h)||
b()},t=++r;f?(a(f,!0).then(function(a){if(t===r){var b=c.$new();n.template=a;a=q(b,function(a){z();d.enter(a,null,e).then(m)});u=b;p=a;u.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){t===r&&(z(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(z(),n.template=null)})}}}}],Re=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){/SVG/.test(d[0].toString())?(d.empty(),a(Mc(e.template,X).childNodes)(b,function(a){d.append(a)},
{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Be=Ma({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Ne=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?W(e):e;c.$parsers.push(function(a){if(!x(a)){var b=[];a&&n(a.split(g),function(a){a&&b.push(f?W(a):a)});return b}});c.$formatters.push(function(a){return K(a)?a.join(e):u});c.$isEmpty=function(a){return!a||
!a.length}}}},nb="ng-valid",Ld="ng-invalid",Wa="ng-pristine",Kb="ng-dirty",Nd="ng-pending",mb=I("ngModel"),Dg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Jb;var m=e(d.ngModel),s=m.assign,q=m,r=s,A=null,t,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");q=function(a){var c=m(a);C(c)&&(c=b(a));return c};r=function(a,b){C(m(a))?f(a,{$$$p:p.$modelValue}):s(a,p.$modelValue)}}else if(!m.assign)throw mb("nonassign",d.ngModel,qa(c));};this.$render=v;this.$isEmpty=
function(a){return x(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){p.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var z=0;Id({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;f.removeClass(c,Kb);f.addClass(c,Wa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;f.removeClass(c,Wa);f.addClass(c,
Kb);p.$$parentForm.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(A);p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!U(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,b=p.$valid,c=p.$modelValue,d=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,
p.$$lastCommittedViewValue,function(e){d||b===e||(p.$modelValue=e?a:u,p.$modelValue!==c&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;n(p.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(n(p.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;n(p.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!C(h.then))throw mb("$asyncValidators",h);f(g,u);c.push(h.then(function(){f(g,!0)},function(a){d=!1;f(g,!1)}))});c.length?
k.all(c).then(function(){g(d)},v):g(!0)}function f(a,b){h===z&&p.$setValidity(a,b)}function g(a){h===z&&c(a)}z++;var h=z;(function(){var a=p.$$parserName||"parse";if(x(t))f(a,null);else return t||(n(p.$validators,function(a,b){f(b,null)}),n(p.$asyncValidators,function(a,b){f(b,null)})),f(a,t),t;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=p.$viewValue;g.cancel(A);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$updateEmptyClasses(a),p.$$lastCommittedViewValue=
a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=p.$$lastCommittedViewValue;if(t=x(b)?u:!0)for(var c=0;c<p.$parsers.length;c++)if(b=p.$parsers[c](b),x(b)){t=!1;break}U(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=q(a));var d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=b;e&&(p.$modelValue=b,p.$modelValue!==d&&p.$$writeModelToScope());p.$$runValidators(b,p.$$lastCommittedViewValue,function(a){e||(p.$modelValue=a?b:
u,p.$modelValue!==d&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){r(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=p.$options;d&&y(d.debounce)&&(d=d.debounce,U(d)?c=d:U(d[b])?c=d[b]:U(d["default"])&&(c=d["default"]));g.cancel(A);c?A=g(function(){p.$commitViewValue()},c):h.$$phase?
p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var b=q(a);if(b!==p.$modelValue&&(p.$modelValue===p.$modelValue||b===b)){p.$modelValue=p.$$rawModelValue=b;t=u;for(var c=p.$formatters,d=c.length,e=b;d--;)e=c[d](e);p.$viewValue!==e&&(p.$$updateEmptyClasses(e),p.$viewValue=p.$$lastCommittedViewValue=e,p.$render(),p.$$runValidators(b,e,v))}return b})}],Me=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Dg,priority:1,
compile:function(b){b.addClass(Wa).addClass("ng-untouched").addClass(nb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(c){g.$touched||
(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Eg=/(\s+|^)default(\s+|$)/,Qe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=bb(a.$eval(b.ngModelOptions));y(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=W(this.$options.updateOn.replace(Eg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ce=Ma({terminal:!0,priority:1E3}),Fg=I("ngOptions"),Gg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Ke=["$compile","$parse",function(a,b){function d(a,c,d){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function l(a){var b;if(!q&&Ba(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var m=a.match(Gg);if(!m)throw Fg("iexp",a,qa(c));var n=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var r=m[9];c=b(m[2]?m[1]:n);var u=a&&b(a)||c,t=r&&b(r),p=r?function(a,b){return t(d,b)}:function(a){return Ea(a)},z=function(a,
b){return p(a,A(a,b))},w=b(m[2]||m[1]),v=b(m[3]||""),x=b(m[4]||""),G=b(m[8]),y={},A=q?function(a,b){y[q]=b;y[n]=a;return y}:function(a){y[n]=a;return y};return{trackBy:r,getTrackByValue:z,getWatchables:b(G,function(a){var b=[];a=a||[];for(var c=l(a),e=c.length,f=0;f<e;f++){var g=a===c?f:c[f],k=A(a[g],g),g=p(a[g],k);b.push(g);if(m[2]||m[1])g=w(d,k),b.push(g);m[4]&&(k=x(d,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},c=G(d)||[],f=l(c),g=f.length,m=0;m<g;m++){var n=c===f?m:f[m],q=
A(c[n],n),s=u(d,q),n=p(s,q),t=w(d,q),y=v(d,q),q=x(d,q),s=new e(n,s,t,y,q);a.push(s);b[n]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[z(a)]},getViewValueFromOption:function(a){return r?ga.copy(a.viewValue):a.viewValue}}}}}var c=X.createElement("option"),e=X.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=v},post:function(b,g,h,k){function l(a,b){a.element=b;b.disabled=a.disabled;
a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function m(a,b,c,d){b&&N(b.nodeName)===c?c=b:(c=d.cloneNode(!1),b?a.insertBefore(c,b):a.appendChild(c));return c}function s(a){for(var b;a;)b=a.nextSibling,Xb(a),a=b}function q(a){var b=p&&p[0],c=G&&G[0];if(b||c)for(;a&&(a===b||a===c||8===a.nodeType||""===a.value);)a=a.nextSibling;return a}function r(){var a=E&&u.readValue();E=C.getOptions();var b={},d=g[0].firstChild;x&&g.prepend(p);d=q(d);E.items.forEach(function(a){var f,
h;y(a.group)?(f=b[a.group],f||(f=m(g[0],d,"optgroup",e),d=f.nextSibling,f.label=a.group,f=b[a.group]={groupElement:f,currentOptionElement:f.firstChild}),h=m(f.groupElement,f.currentOptionElement,"option",c),l(a,h),f.currentOptionElement=h.nextSibling):(h=m(g[0],d,"option",c),l(a,h),d=h.nextSibling)});Object.keys(b).forEach(function(a){s(b[a].currentOptionElement)});s(d);t.$render();if(!t.$isEmpty(a)){var f=u.readValue();(C.trackBy?la(a,f):a===f)||(t.$setViewValue(f),t.$render())}}var u=k[0],t=k[1];
k=h.multiple;for(var p,z=0,w=g.children(),v=w.length;z<v;z++)if(""===w[z].value){p=w.eq(z);break}var x=!!p,G=A(c.cloneNode(!1));G.val("?");var E,C=d(h.ngOptions,g,b);k?(t.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){E.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=E.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=g.val()||[],b=[];n(a,function(a){(a=E.selectValueMap[a])&&!a.disabled&&b.push(E.getViewValueFromOption(a))});
return b},C.trackBy&&b.$watchCollection(function(){if(K(t.$viewValue))return t.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){t.$render()})):(u.writeValue=function(a){var b=E.getOptionFromViewValue(a);b&&!b.disabled?g[0].value!==b.selectValue&&(G.remove(),x||p.remove(),g[0].value=b.selectValue,b.element.selected=!0,b.element.setAttribute("selected","selected")):null===a||x?(G.remove(),x||g.prepend(p),g.val(""),p.prop("selected",!0),p.attr("selected",!0)):(x||p.remove(),g.prepend(G),
g.val("?"),G.prop("selected",!0),G.attr("selected",!0))},u.readValue=function(){var a=E.selectValueMap[g.val()];return a&&!a.disabled?(x||p.remove(),G.remove(),E.getViewValueFromOption(a)):null},C.trackBy&&b.$watch(function(){return C.getTrackByValue(t.$viewValue)},function(){t.$render()}));x?(p.remove(),a(p)(b),p.removeClass("ng-scope")):p=A(c.cloneNode(!1));r();b.$watchCollection(C.getWatchables,r)}}}}],De=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,
g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),s=h.offset||0,q=f.$eval(m)||{},r={},u=b.startSymbol(),t=b.endSymbol(),p=u+l+"-"+s+t,z=ga.noop,w;n(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+N(c[2]),q[c]=g.attr(h.$attr[b]))});n(q,function(a,d){r[d]=b(a.replace(c,p))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in q||(c=a.pluralCat(c-s));c===w||e&&U(w)&&isNaN(w)||(z(),e=r[c],x(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+
m),z=v,k()):z=f.$watch(e,k),w=c)})}}}],Ee=["$parse","$animate",function(a,b){var d=I("ngRepeat"),c=function(a,b,c,d,k,l,m){a[c]=d;k&&(a[k]=l);a.$index=b;a.$first=0===b;a.$last=b===m-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,f){var g=f.ngRepeat,h=X.createComment(" end ngRepeat: "+g+" "),k=g.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!k)throw d("iexp",g);var l=k[1],m=k[2],s=k[3],q=k[4],k=l.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",l);var r=k[3]||k[1],x=k[2];if(s&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s)))throw d("badident",s);var t,p,z,w,v={$id:Ea};q?t=a(q):(z=function(a,b){return Ea(b)},w=function(a){return a});return function(a,e,f,k,l){t&&(p=function(b,c,d){x&&(v[x]=b);v[r]=c;v.$index=
d;return t(a,v)});var q=V();a.$watchCollection(m,function(f){var k,m,t=e[0],v,y=V(),C,E,I,F,J,D,K;s&&(a[s]=f);if(Ba(f))J=f,m=p||z;else for(K in m=p||w,J=[],f)ua.call(f,K)&&"$"!==K.charAt(0)&&J.push(K);C=J.length;K=Array(C);for(k=0;k<C;k++)if(E=f===J?k:J[k],I=f[E],F=m(E,I,k),q[F])D=q[F],delete q[F],y[F]=D,K[k]=D;else{if(y[F])throw n(K,function(a){a&&a.scope&&(q[a.id]=a)}),d("dupes",g,F,I);K[k]={id:F,scope:u,clone:u};y[F]=!0}for(v in q){D=q[v];F=sb(D.clone);b.leave(F);if(F[0].parentNode)for(k=0,m=F.length;k<
m;k++)F[k].$$NG_REMOVED=!0;D.scope.$destroy()}for(k=0;k<C;k++)if(E=f===J?k:J[k],I=f[E],D=K[k],D.scope){v=t;do v=v.nextSibling;while(v&&v.$$NG_REMOVED);D.clone[0]!=v&&b.move(sb(D.clone),null,A(t));t=D.clone[D.clone.length-1];c(D.scope,k,r,I,x,E,C)}else l(function(a,d){D.scope=d;var e=h.cloneNode(!1);a[a.length++]=e;b.enter(a,null,A(t));t=e;D.clone=a;y[D.id]=D;c(D.scope,k,r,I,x,E,C)});q=y})}}}}],Fe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?
"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ye=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ge=Ma(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&n(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),He=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(b,
d,c,e){var f=[],g=[],h=[],k=[],l=function(a,b){return function(){a.splice(b,1)}};b.$watch(c.ngSwitch||c.on,function(b){var c,d;c=0;for(d=h.length;c<d;++c)a.cancel(h[c]);c=h.length=0;for(d=k.length;c<d;++c){var r=sb(g[c].clone);k[c].$destroy();(h[c]=a.leave(r)).then(l(h,c))}g.length=0;k.length=0;(f=e.cases["!"+b]||e.cases["?"])&&n(f,function(b){b.transclude(function(c,d){k.push(d);var e=b.element;c[c.length++]=X.createComment(" end ngSwitchWhen: ");g.push({clone:c});a.enter(c,e.parent(),e)})})})}}}],
Ie=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Je=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Hg=I("ngTransclude"),Le=Ma({restrict:"EAC",link:function(a,b,d,c,e){if(!e)throw Hg("orphan",qa(b));
e(function(a){b.empty();b.append(a)},null,d.ngTransclude||d.ngTranscludeSlot)}}),le=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Ig={$setViewValue:v,$render:v},Jg=["$element","$scope","$attrs",function(a,b,d){var c=this,e=new Ta;c.ngModelCtrl=Ig;c.unknownOption=A(X.createElement("option"));c.renderUnknownOption=function(b){b="? "+Ea(b)+" ?";c.unknownOption.val(b);a.prepend(c.unknownOption);a.val(b)};b.$on("$destroy",
function(){c.renderUnknownOption=v});c.removeUnknownOption=function(){c.unknownOption.parent()&&c.unknownOption.remove()};c.readValue=function(){c.removeUnknownOption();return a.val()};c.writeValue=function(b){c.hasOption(b)?(c.removeUnknownOption(),a.val(b),""===b&&c.emptyOption.prop("selected",!0)):null==b&&c.emptyOption?(c.removeUnknownOption(),a.val("")):c.renderUnknownOption(b)};c.addOption=function(a,b){Sa(a,'"option value"');""===a&&(c.emptyOption=b);var d=e.get(a)||0;e.put(a,d+1);c.ngModelCtrl.$render();
b[0].hasAttribute("selected")&&(b[0].selected=!0)};c.removeOption=function(a){var b=e.get(a);b&&(1===b?(e.remove(a),""===a&&(c.emptyOption=u)):e.put(a,b-1))};c.hasOption=function(a){return!!e.get(a)};c.registerOption=function(a,b,d,e,l){if(e){var m;d.$observe("value",function(a){y(m)&&c.removeOption(m);m=a;c.addOption(a,b)})}else l?a.$watch(l,function(a,e){d.$set("value",a);e!==a&&c.removeOption(e);c.addOption(a,b)}):c.addOption(d.value,b);b.on("$destroy",function(){c.removeOption(d.value);c.ngModelCtrl.$render()})}}],
me=function(){return{restrict:"E",require:["select","?ngModel"],controller:Jg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;e.$render=function(){f.writeValue(e.$viewValue)};b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];n(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Ta(a);n(b.find("option"),function(a){a.selected=y(c.get(a.value))})};
var g,h=NaN;a.$watch(function(){h!==e.$viewValue||la(g,e.$viewValue)||(g=da(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}}}}},oe=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(y(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],ne=ca({restrict:"E",
terminal:!1}),Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){J(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw I("ngPattern")("noregexp",f,a,qa(b));e=a||u;c.$validate()});
c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(e)||e.test(b)}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=ba(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=ba(a)||0;c.$validate()});c.$validators.minlength=
function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};R.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(ee(),ge(ga),ga.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,
maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,c){var e=a|0,f=c;u===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),A(X).ready(function(){ae(X,yc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.5.0-beta.2
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,w,Sa){'use strict';function wa(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function xa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;W(a)&&(a=a.join(" "));W(b)&&(b=b.join(" "));return a+" "+b}function Ia(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function S(a,b,c){var d="";a=W(a)?a:a&&J(a)&&a.length?a.split(/\s+/):[];r(a,function(a,t){a&&0<a.length&&(d+=0<t?" ":"",d+=c?b+a:a+b)});return d}function Ja(a){if(a instanceof I)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return I(ma(a))}if(1===a.nodeType)return I(a)}function ma(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ka(a,b,c){r(b,function(b){a.addClass(b,c)})}function La(a,b,c){r(b,function(b){a.removeClass(b,c)})}function M(a){return function(b,c){c.addClass&&(Ka(a,b,c.addClass),c.addClass=null);c.removeClass&&(La(a,b,c.removeClass),c.removeClass=null)}}function ia(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
L;a.domOperation=function(){a.$$domOperationFired=!0;b();b=L};a.$$prepared=!0}return a}function da(a,b){ya(a,b);za(a,b)}function ya(a,b){b.from&&(a.css(b.from),b.from=null)}function za(a,b){b.to&&(a.css(b.to),b.to=null)}function P(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),e=(b.removeClass||"")+" "+(c.removeClass||"");a=Ma(a.attr("class"),d,e);c.preparationClasses&&(b.preparationClasses=X(c.preparationClasses,b.preparationClasses),delete c.preparationClasses);d=b.domOperation!==L?b.domOperation:
null;Aa(b,c);d&&(b.domOperation=d);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function Ma(a,b,c){function d(a){J(a)&&(a=a.split(" "));var b={};r(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);r(b,function(a,b){e[b]=1});c=d(c);r(c,function(a,b){e[b]=1===e[b]?null:-1});var t={addClass:"",removeClass:""};r(e,function(b,c){var e,d;1===b?(e="addClass",d=!a[c]):-1===b&&(e="removeClass",d=a[c]);d&&(t[e].length&&(t[e]+=" "),t[e]+=c)});
return t}function B(a){return a instanceof w.element?a[0]:a}function Na(a,b,c){var d="";b&&(d=S(b,"ng-",!0));c.addClass&&(d=X(d,S(c.addClass,"-add")));c.removeClass&&(d=X(d,S(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function ja(a,b){var c=b?"-"+b+"s":"";ea(a,[fa,c]);return[fa,c]}function na(a,b){var c=b?"paused":"",d=T+"PlayState";ea(a,[d,c]);return[d,c]}function ea(a,b){a.style[b[0]]=b[1]}function X(a,b){return a?b?a+" "+b:a:b}function Ba(a,b,c){var d=Object.create(null),
e=a.getComputedStyle(b)||{};r(c,function(a,b){var c=e[a];if(c){var l=c.charAt(0);if("-"===l||"+"===l||0<=l)c=Oa(c);0===c&&(c=null);d[b]=c}});return d}function Oa(a){var b=0;a=a.split(/\s*,\s*/);r(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function oa(a){return 0===a||null!=a}function Ca(a,b){var c=N,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function Da(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},
count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ea(a,b,c){r(c,function(c){a[c]=U(a[c])?a[c]:b.style.getPropertyValue(c)})}var L=w.noop,Aa=w.extend,I=w.element,r=w.forEach,W=w.isArray,J=w.isString,pa=w.isObject,qa=w.isUndefined,U=w.isDefined,Fa=w.isFunction,ra=w.isElement,N,sa,T,ta;qa(H.ontransitionend)&&U(H.onwebkittransitionend)?(N="WebkitTransition",sa="webkitTransitionEnd transitionend"):
(N="transition",sa="transitionend");qa(H.onanimationend)&&U(H.onwebkitanimationend)?(T="WebkitAnimation",ta="webkitAnimationEnd animationend"):(T="animation",ta="animationend");var ka=T+"Delay",ua=T+"Duration",fa=N+"Delay";H=N+"Duration";var Pa={transitionDuration:H,transitionDelay:fa,transitionProperty:N+"Property",animationDuration:ua,animationDelay:ka,animationIterationCount:T+"IterationCount"},Qa={transitionDuration:H,transitionDelay:fa,animationDuration:ua,animationDelay:ka};w.module("ngAnimate",
[]).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,t,h){var g,l;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){g&&a.leave(g);l&&(l.$destroy(),l=null);if(e||0===e)l=b.$new(),h(l,function(b){g=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;w.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",
function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),h=0;h<b.length;h++)b[h]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).factory("$$AnimateRunner",["$q","$sniffer","$$animateAsyncRun",function(a,b,c){function d(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=
c();this._state=0}d.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};d.all=function(a,b){function c(h){l=l&&h;++d===a.length&&b(l)}var d=0,l=!0;r(a,function(a){a.done(c)})};d.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:L,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},
then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},
_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return d}]).factory("$$animateAsyncRun",["$$rAF",function(a){function b(b){c.push(b);1<c.length||a(function(){for(var a=0;a<c.length;a++)c[a]();c=[]})}var c=[];return function(){var a=!1;b(function(){a=!0});return function(c){a?c():b(c)}}}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a,b,c,r){return d[a].some(function(a){return a(b,c,r)})}function c(a,
b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});d.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});d.cancel.push(function(a,b,c){return c.structural&&b.structural});d.cancel.push(function(a,
b,c){return 2===c.state&&b.structural});d.cancel.push(function(a,b,c){a=b.options;c=c.options;return a.addClass&&a.addClass===c.removeClass||a.removeClass&&a.removeClass===c.addClass});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(d,t,h,g,l,s,$,w,Q,C){function D(){var a=!1;return function(b){a?b():t.$$postDigest(function(){a=!0;b()})}}function Y(a,b,c){var f=B(b),d=B(a),m=[];(a=v[c])&&r(a,
function(a){a.node.contains(f)?m.push(a.callback):"leave"===c&&a.node.contains(d)&&m.push(a.callback)});return m}function n(a,f,k){function m(b,c,f,v){Q(function(){var b=Y(l,a,c);b.length&&d(function(){r(b,function(b){b(a,f,v)})})});b.progress(c,f,v)}function v(b){var c=a,f=k;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),f.activeClasses=null);Ha(a,k);da(a,k);k.domOperation();h.complete(!b)}var z,l;if(a=Ja(a))z=
B(a),l=a.parent();k=ia(k);var h=new $,Q=D();W(k.addClass)&&(k.addClass=k.addClass.join(" "));k.addClass&&!J(k.addClass)&&(k.addClass=null);W(k.removeClass)&&(k.removeClass=k.removeClass.join(" "));k.removeClass&&!J(k.removeClass)&&(k.removeClass=null);k.from&&!pa(k.from)&&(k.from=null);k.to&&!pa(k.to)&&(k.to=null);if(!z)return v(),h;var y=[z.className,k.addClass,k.removeClass].join(" ");if(!Ra(y))return v(),h;var n=0<=["enter","move","leave"].indexOf(f),g=!G||F.get(z),y=!g&&p.get(z)||{},C=!!y.state;
g||C&&1==y.state||(g=!la(a,l,f));if(g)return v(),h;n&&x(a);g={structural:n,element:a,event:f,close:v,options:k,runner:h};if(C){if(b("skip",a,g,y)){if(2===y.state)return v(),h;P(a,y.options,k);return y.runner}if(b("cancel",a,g,y))if(2===y.state)y.runner.end();else if(y.structural)y.close();else return P(a,y.options,g.options),y.runner;else if(b("join",a,g,y))if(2===y.state)P(a,k,{});else return Na(a,n?f:null,k),f=g.event=y.event,k=P(a,y.options,g.options),y.runner}else P(a,k,{});(C=g.structural)||
(C="animate"===g.event&&0<Object.keys(g.options.to||{}).length||c(g.options));if(!C)return v(),A(a),h;var w=(y.counter||0)+1;g.counter=w;u(a,1,g);t.$$postDigest(function(){var b=p.get(z),d=!b,b=b||{},e=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||c(b.options));if(d||b.counter!==w||!e){d&&(Ha(a,k),da(a,k));if(d||n&&b.event!==f)k.domOperation(),h.end();e||A(a)}else f=!b.structural&&c(b.options,!0)?"setClass":b.event,u(a,2),b=s(a,f,b.options),b.done(function(b){v(!b);(b=p.get(z))&&
b.counter===w&&A(B(a));m(h,f,"close",{})}),h.setHost(b),m(h,f,"start",{})});return h}function x(a){a=B(a).querySelectorAll("[data-ng-animate]");r(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=p.get(a);switch(b){case 2:c.runner.end();case 1:c&&p.remove(a)}})}function A(a){a=B(a);a.removeAttribute("data-ng-animate");p.remove(a)}function f(a,b){return B(a)===B(b)}function la(a,b,c){c=I(g[0].body);var d=f(a,c)||"HTML"===a[0].nodeName,v=f(a,h),m=!1,A;for((a=a.data("$ngAnimatePin"))&&
(b=a);b&&b.length;){v||(v=f(b,h));a=b[0];if(1!==a.nodeType)break;var u=p.get(a)||{};m||(m=u.structural||F.get(a));if(qa(A)||!0===A)a=b.data("$$ngAnimateChildren"),U(a)&&(A=a);if(m&&!1===A)break;v||(v=f(b,h),v||(a=b.data("$ngAnimatePin"))&&(b=a));d||(d=f(b,c));b=b.parent()}return(!m||A)&&v&&d}function u(a,b,c){c=c||{};c.state=b;a=B(a);a.setAttribute("data-ng-animate",b);c=(b=p.get(a))?Aa(b,c):c;p.put(a,c)}var p=new l,F=new l,G=null,z=t.$watch(function(){return 0===w.totalPendingRequests},function(a){a&&
(z(),t.$$postDigest(function(){t.$$postDigest(function(){null===G&&(G=!0)})}))}),v={},m=a.classNameFilter(),Ra=m?function(a){return m.test(a)}:function(){return!0},Ha=M(Q);return{on:function(a,b,c){b=ma(b);v[a]=v[a]||[];v[a].push({node:b,callback:c})},off:function(a,b,c){function f(a,b,c){var d=ma(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===c))})}var d=v[a];d&&(v[a]=1===arguments.length?null:f(d,b,c))},pin:function(a,b){wa(ra(a),"element","not an element");wa(ra(b),"parentElement",
"not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return n(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!G;else if(ra(a)){var f=B(a),d=F.get(f);1===c?b=!d:(b=!!b)?d&&F.remove(f):F.put(f,!0)}else b=G=!!a;return b}}}]}]).provider("$$animation",["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",
function(a,e,t,h,g,l){function s(a){function b(a){if(a.processed)return a;a.processed=!0;var f=a.domNode,d=f.parentNode;e.put(f,a);for(var u;d;){if(u=e.get(d)){u.processed||(u=b(u));break}d=d.parentNode}(u||c).children.push(a);return a}var c={children:[]},d,e=new g;for(d=0;d<a.length;d++){var h=a[d];e.put(h.domNode,a[d]={domNode:h.domNode,fn:h.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var p=0,
e=[];for(d=0;d<c.length;d++){var h=c[d];0>=a&&(a=p,p=0,b.push(e),e=[]);e.push(h.fn);h.children.forEach(function(a){p++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var $=[],w=M(a);return function(g,C,D){function Y(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];r(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function n(a){var b=[],c={};r(a,function(a,f){var d=B(a.element),v=0<=["enter","move"].indexOf(a.event),
d=a.structural?Y(d):[];if(d.length){var p=v?"to":"from";r(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][p]={animationID:f,element:I(a)}})}else b.push(a)});var f={},d={};r(c,function(c,p){var e=c.from,A=c.to;if(e&&A){var g=a[e.animationID],h=a[A.animationID],u=e.animationID.toString();if(!d[u]){var z=d[u]={structural:!0,beforeStart:function(){g.beforeStart();h.beforeStart()},close:function(){g.close();h.close()},classes:x(g.classes,h.classes),from:g,to:h,anchors:[]};z.classes.length?
b.push(z):(b.push(g),b.push(h))}d[u].anchors.push({out:e.element,"in":A.element})}else e=e?e.animationID:A.animationID,A=e.toString(),f[A]||(f[A]=!0,b.push(a[e]))});return b}function x(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var f=a[d];if("ng-"!==f.substring(0,3))for(var e=0;e<b.length;e++)if(f===b[e]){c.push(f);break}}return c.join(" ")}function A(a){for(var b=c.length-1;0<=b;b--){var d=c[b];if(t.has(d)&&(d=t.get(d)(a)))return d}}function f(a,c){a.from&&a.to?(b(a.from.element).setHost(c),
b(a.to.element).setHost(c)):b(a.element).setHost(c)}function la(){var a=b(g);!a||"leave"===C&&D.$$domOperationFired||a.end()}function u(b){g.off("$destroy",la);g.removeData("$$animationRunner");w(g,D);da(g,D);D.domOperation();z&&a.removeClass(g,z);g.removeClass("ng-animate");F.complete(!b)}D=ia(D);var p=0<=["enter","move","leave"].indexOf(C),F=new h({end:function(){u()},cancel:function(){u(!0)}});if(!c.length)return u(),F;g.data("$$animationRunner",F);var G=xa(g.attr("class"),xa(D.addClass,D.removeClass)),
z=D.tempClasses;z&&(G+=" "+z,D.tempClasses=null);$.push({element:g,classes:G,event:C,structural:p,options:D,beforeStart:function(){g.addClass("ng-animate");z&&a.addClass(g,z)},close:u});g.on("$destroy",la);if(1<$.length)return F;e.$$postDigest(function(){var a=[];r($,function(c){b(c.element)?a.push(c):c.close()});$.length=0;var c=n(a),d=[];r(c,function(a){d.push({domNode:B(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var c,d=a.close;if(b(a.anchors?a.from.element||a.to.element:a.element)){var e=
A(a);e&&(c=e.start)}c?(c=c(),c.done(function(a){d(!a)}),f(a,c)):d()}})});l(s(d))});return F}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Da(),c=Da();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$animate",function(a,e,t,h,g,l,s,w){function Ga(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++n))+"-"+a.getAttribute("class")+"-"+b}function Q(g,f,h,u){var p;0<b.count(h)&&(p=c.get(h),p||(f=
S(f,"-stagger"),e.addClass(g,f),p=Ba(a,g,u),p.animationDuration=Math.max(p.animationDuration,0),p.transitionDuration=Math.max(p.transitionDuration,0),e.removeClass(g,f),c.put(h,p)));return p||{}}function C(a){x.push(a);s.waitUntilQuiet(function(){b.flush();c.flush();for(var a=g(),d=0;d<x.length;d++)x[d](a);x.length=0})}function D(c,f,e){f=b.get(e);f||(f=Ba(a,c,Pa),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=
e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var Y=M(e),n=0,x=[];return function(a,c){function d(){p()}function g(){p(!0)}function p(b){if(!(ga||va&&k)){ga=!0;k=!1;c.$$skipPreparationClasses||e.removeClass(a,Z);e.removeClass(a,X);na(m,!1);ja(m,!1);r(x,function(a){m.style[a[0]]=""});Y(a,c);da(a,c);Object.keys(v).length&&r(v,function(a,b){a?m.style.setProperty(b,a):m.style.removeProperty(b)});if(c.onDone)c.onDone();H&&H.complete(!b)}}
function F(a){q.blockTransition&&ja(m,a);q.blockKeyframeAnimation&&na(m,!!a)}function G(){H=new t({end:d,cancel:g});C(L);p();return{$$willAnimate:!1,start:function(){return H},end:d}}function z(){function b(){if(!ga){F(!1);r(x,function(a){m.style[a[0]]=a[1]});Y(a,c);e.addClass(a,X);if(q.recalculateTimingStyles){ha=m.className+" "+Z;aa=Ga(m,ha);E=D(m,ha,aa);V=E.maxDelay;J=Math.max(V,0);K=E.maxDuration;if(0===K){p();return}q.hasTransitions=0<E.transitionDuration;q.hasAnimations=0<E.animationDuration}q.applyAnimationDelay&&
(V="boolean"!==typeof c.delay&&oa(c.delay)?parseFloat(c.delay):V,J=Math.max(V,0),E.animationDelay=V,ca=[ka,V+"s"],x.push(ca),m.style[ca[0]]=ca[1]);M=1E3*J;y=1E3*K;if(c.easing){var l,k=c.easing;q.hasTransitions&&(l=N+"TimingFunction",x.push([l,k]),m.style[l]=k);q.hasAnimations&&(l=T+"TimingFunction",x.push([l,k]),m.style[l]=k)}E.transitionDuration&&u.push(sa);E.animationDuration&&u.push(ta);z=Date.now();var n=M+1.5*y;l=z+n;var k=a.data("$$animateCss")||[],s=!0;if(k.length){var G=k[0];(s=l>G.expectedEndTime)?
h.cancel(G.timer):k.push(p)}s&&(n=h(d,n,!1),k[0]={timer:n,expectedEndTime:l},k.push(p),a.data("$$animateCss",k));a.on(u.join(" "),g);c.to&&(c.cleanupStyles&&Ea(v,m,Object.keys(c.to)),za(a,c))}}function d(){var b=a.data("$$animateCss");if(b){for(var c=1;c<b.length;c++)b[c]();a.removeData("$$animateCss")}}function g(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-z,0)>=M&&b>=K&&(va=!0,p())}if(!ga)if(m.parentNode){var z,
u=[],l=function(a){if(va)k&&a&&(k=!1,p());else if(k=!a,E.animationDuration)if(a=na(m,k),k)x.push(a);else{var b=x,c=b.indexOf(a);0<=a&&b.splice(c,1)}},n=0<U&&(E.transitionDuration&&0===R.transitionDuration||E.animationDuration&&0===R.animationDuration)&&Math.max(R.animationDelay,R.transitionDelay);n?h(b,Math.floor(n*U*1E3),!1):b();I.resume=function(){l(!0)};I.pause=function(){l(!1)}}else p()}var v={},m=B(a);if(!m||!m.parentNode||!w.enabled())return G();c=ia(c);var x=[],s=a.attr("class"),n=Ia(c),ga,
k,va,H,I,J,M,K,y;if(0===c.duration||!l.animations&&!l.transitions)return G();var ba=c.event&&W(c.event)?c.event.join(" "):c.event,P="",O="";ba&&c.structural?P=S(ba,"ng-",!0):ba&&(P=ba);c.addClass&&(O+=S(c.addClass,"-add"));c.removeClass&&(O.length&&(O+=" "),O+=S(c.removeClass,"-remove"));c.applyClassesEarly&&O.length&&Y(a,c);var Z=[P,O].join(" ").trim(),ha=s+" "+Z,X=S(Z,"-active"),s=n.to&&0<Object.keys(n.to).length;if(!(0<(c.keyframeStyle||"").length||s||Z))return G();var aa,R;0<c.stagger?(n=parseFloat(c.stagger),
R={transitionDelay:n,animationDelay:n,transitionDuration:0,animationDuration:0}):(aa=Ga(m,ha),R=Q(m,Z,aa,Qa));c.$$skipPreparationClasses||e.addClass(a,Z);c.transitionStyle&&(n=[N,c.transitionStyle],ea(m,n),x.push(n));0<=c.duration&&(n=0<m.style[N].length,n=Ca(c.duration,n),ea(m,n),x.push(n));c.keyframeStyle&&(n=[T,c.keyframeStyle],ea(m,n),x.push(n));var U=R?0<=c.staggerIndex?c.staggerIndex:b.count(aa):0;(ba=0===U)&&!c.skipBlocking&&ja(m,9999);var E=D(m,ha,aa),V=E.maxDelay;J=Math.max(V,0);K=E.maxDuration;
var q={};q.hasTransitions=0<E.transitionDuration;q.hasAnimations=0<E.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==E.transitionProperty;q.applyTransitionDuration=s&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=c.duration&&q.hasAnimations;q.applyTransitionDelay=oa(c.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=oa(c.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<O.length;if(q.applyTransitionDuration||
q.applyAnimationDuration)K=c.duration?parseFloat(c.duration):K,q.applyTransitionDuration&&(q.hasTransitions=!0,E.transitionDuration=K,n=0<m.style[N+"Property"].length,x.push(Ca(K,n))),q.applyAnimationDuration&&(q.hasAnimations=!0,E.animationDuration=K,x.push([ua,K+"s"]));if(0===K&&!q.recalculateTimingStyles)return G();if(null!=c.delay){var ca=parseFloat(c.delay);q.applyTransitionDelay&&x.push([fa,ca+"s"]);q.applyAnimationDelay&&x.push([ka,ca+"s"])}null==c.duration&&0<E.transitionDuration&&(q.recalculateTimingStyles=
q.recalculateTimingStyles||ba);M=1E3*J;y=1E3*K;c.skipBlocking||(q.blockTransition=0<E.transitionDuration,q.blockKeyframeAnimation=0<E.animationDuration&&0<R.animationDelay&&0===R.animationDuration);c.from&&(c.cleanupStyles&&Ea(v,m,Object.keys(c.from)),ya(a,c));q.blockTransition||q.blockKeyframeAnimation?F(K):c.skipBlocking||ja(m,!1);return{$$willAnimate:!0,end:d,start:function(){if(!ga)return I={end:d,cancel:g,resume:null,pause:null},H=new t(I),C(z),H}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",
function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,t,h,g){function l(a){return a.replace(/\bng-\S+\b/g,"")}function s(a,b){J(a)&&(a=a.split(" "));J(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function w(c,e,g){function h(a){var b={},c=B(a).getBoundingClientRect();r(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=
C.scrollTop;break;case "left":d+=C.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function f(){var c=l(g.attr("class")||""),d=s(c,p),c=s(p,c),d=a(u,{to:h(g),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function t(){u.remove();e.removeClass("ng-animate-shim");g.removeClass("ng-animate-shim")}var u=I(B(e).cloneNode(!0)),p=l(u.attr("class")||"");e.addClass("ng-animate-shim");g.addClass("ng-animate-shim");u.addClass("ng-anchor");D.append(u);var F;c=
function(){var c=a(u,{addClass:"ng-anchor-out",delay:!0,from:h(e)});return c.$$willAnimate?c:null}();if(!c&&(F=f(),!F))return t();var G=c||F;return{start:function(){function a(){c&&c.end()}var b,c=G.start();c.done(function(){c=null;if(!F&&(F=f()))return c=F.start(),c.done(function(){c=null;t();b.complete()}),c;t();b.complete()});return b=new d({end:a,cancel:a})}}}function H(a,b,c,e){var g=Q(a,L),h=Q(b,L),l=[];r(e,function(a){(a=w(c,a.out,a["in"]))&&l.push(a)});if(g||h||0!==l.length)return{start:function(){function a(){r(b,
function(a){a.end()})}var b=[];g&&b.push(g.start());h&&b.push(h.start());r(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function Q(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=X(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!t.animations&&!t.transitions)return L;var C=g[0].body;
c=B(e);var D=I(c.parentNode&&11===c.parentNode.nodeType||C.contains(c)?c:C);M(h);return function(a){return a.from&&a.to?H(a.from,a.to,a.classes,a.anchors):Q(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=W(c)?c:c.split(" ");for(var d=[],e={},s=0;s<c.length;s++){var r=c[s],t=a.$$registeredAnimations[r];t&&!e[r]&&(d.push(b.get(t)),e[r]=!0)}return d}var t=M(d);return function(a,b,d,s){function w(){s.domOperation();
t(a,s)}function H(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,D,J,f];break;case "addClass":b=[b,D,f];break;case "removeClass":b=[b,J,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Fa(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Fa(a))return a;return L}function B(a,b,d,e,f){var g=[];r(e,function(e){var h=e[f];h&&g.push(function(){var e,f,g=!1,k=function(a){g||(g=!0,(f||L)(a),e.complete(!a))};e=new c({end:function(){k()},cancel:function(){k(!0)}});
f=H(h,a,b,d,function(a){k(!1===a)});return e})});return g}function C(a,b,d,e,f){var g=B(a,b,d,e,f);if(0===g.length){var h,l;"beforeSetClass"===f?(h=B(a,"removeClass",d,e,"beforeRemoveClass"),l=B(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=B(a,"removeClass",d,e,"removeClass"),l=B(a,"addClass",d,e,"addClass"));h&&(g=g.concat(h));l&&(g=g.concat(l))}if(0!==g.length)return function(a){var b=[];g.length&&r(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){r(b,function(b){a?
b.cancel():b.end()})}}}3===arguments.length&&pa(d)&&(s=d,d=null);s=ia(s);d||(d=a.attr("class")||"",s.addClass&&(d+=" "+s.addClass),s.removeClass&&(d+=" "+s.removeClass));var D=s.addClass,J=s.removeClass,n=e(d),x,A;if(n.length){var f,I;"leave"==b?(I="leave",f="afterLeave"):(I="before"+b.charAt(0).toUpperCase()+b.substr(1),f=b);"enter"!==b&&"move"!==b&&(x=C(a,b,s,n,I));A=C(a,b,s,n,f)}if(x||A)return{start:function(){function b(c){f=!0;w();da(a,s);g.complete(c)}var d,e=[];x&&e.push(function(a){d=x(a)});
e.length?e.push(function(a){w();a(!0)}):w();A&&e.push(function(a){d=A(a)});var f=!1,g=new c({end:function(){f||((d||L)(void 0),b(void 0))},cancel:function(){f||((d||L)(!0),b(!0))}});c.chain(e,b);return g}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),h=d(a.to);if(b||h)return{start:function(){function a(){return function(){r(d,
function(a){a.end()})}}var d=[];b&&d.push(b.start());h&&d.push(h.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.5.0-beta.2
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,c,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,d,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(c.isDefined(b&&b.$template)){var b=a.$new(),d=r.current;m=y(b,function(b){g.enter(b,null,m||f).then(function(){!c.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=d.scope=b;l.$emit("$viewContentLoaded");
l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(c,h,g){return{restrict:"ECA",priority:-400,link:function(a,f){var b=g.current,d=b.locals;f.html(d.$template);var y=c(f.contents());b.controller&&(d.$scope=a,d=h(b.controller,d),b.controllerAs&&(a[b.controllerAs]=d),f.data("$ngControllerController",d),f.children().data("$ngControllerController",d));y(a)}}}p=c.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return c.extend(Object.create(a),
f)}function h(a,c){var b=c.caseInsensitiveMatch,d={originalPath:a,regexp:a},g=d.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,c,b,d){a="?"===d?d:null;d="*"===d?d:null;g.push({name:b,optional:!!a});c=c||"";return""+(a?"":c)+"(?:"+(a?c:"")+(d&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");d.regexp=new RegExp("^"+a+"$",b?"i":"");return d}var g={};this.when=function(a,f){var b=c.copy(f);c.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
c.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=c.extend(b,a&&h(a,b));if(a){var d="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[d]=c.extend({redirectTo:a},h(d,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,d,h,p,x){function l(b){var e=s.current;
(v=(n=k())&&e&&n.$$route===e.$$route&&c.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,c.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(c.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),d.when(e).then(function(){if(e){var a=
c.extend({},e.resolve),b,f;c.forEach(a,function(b,e){a[e]=c.isString(b)?h.get(b):h.invoke(b,null,null,e)});c.isDefined(b=e.template)?c.isFunction(b)&&(b=b(e.params)):c.isDefined(f=e.templateUrl)&&(c.isFunction(f)&&(f=f(e.params)),c.isDefined(f)&&(e.loadedTemplateUrl=x.valueOf(f),b=p(f)));c.isDefined(b)&&(a.$template=b);return d.all(a)}}).then(function(f){e==s.current&&(e&&(e.locals=f,c.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function k(){var a,b;c.forEach(g,function(d,g){var q;if(q=!b){var h=f.path();q=d.keys;var l={};if(d.regexp)if(h=d.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(d,{params:c.extend({},f.search(),a),pathParams:a}),b.$$route=d)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
g=f[1];d.push(b[g]);d.push(f[2]||"");delete b[g]}});return d.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route)a=c.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",m);return s}]});var B=c.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});
p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.5.0-beta.2
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(x,s,y){'use strict';function t(f,k,p){n.directive(f,["$parse","$swipe",function(c,e){return function(l,m,g){function h(a){if(!b)return!1;var d=Math.abs(a.y-b.y);a=(a.x-b.x)*k;return r&&75>d&&0<a&&30<a&&.3>d/a}var d=c(g[f]),b,r,a=["touch"];s.isDefined(g.ngSwipeDisableMouse)||a.push("mouse");e.bind(m,{start:function(a,d){b=a;r=!0},cancel:function(a){r=!1},end:function(a,b){h(a)&&l.$apply(function(){m.triggerHandler(p);d(l,{$event:b})})}},a)}}])}var n=s.module("ngTouch",[]);n.factory("$swipe",
[function(){function f(c){c=c.originalEvent||c;var e=c.touches&&c.touches.length?c.touches:[c];c=c.changedTouches&&c.changedTouches[0]||e[0];return{x:c.clientX,y:c.clientY}}function k(c,e){var l=[];s.forEach(c,function(c){(c=p[c][e])&&l.push(c)});return l.join(" ")}var p={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(c,e,l){var m,g,h,d,b=!1;l=l||["mouse","touch"];c.on(k(l,"start"),function(a){h=
f(a);b=!0;g=m=0;d=h;e.start&&e.start(h,a)});var r=k(l,"cancel");if(r)c.on(r,function(a){b=!1;e.cancel&&e.cancel(a)});c.on(k(l,"move"),function(a){if(b&&h){var c=f(a);m+=Math.abs(c.x-d.x);g+=Math.abs(c.y-d.y);d=c;10>m&&10>g||(g>m?(b=!1,e.cancel&&e.cancel(a)):(a.preventDefault(),e.move&&e.move(c,a)))}});c.on(k(l,"end"),function(a){b&&(b=!1,e.end&&e.end(f(a),a))})}}}]);n.config(["$provide",function(f){f.decorator("ngClickDirective",["$delegate",function(k){k.shift();return k}])}]);n.directive("ngClick",
["$parse","$timeout","$rootElement",function(f,k,p){function c(d,b,c){for(var a=0;a<d.length;a+=2){var e=d[a+1],g=c;if(25>Math.abs(d[a]-b)&&25>Math.abs(e-g))return d.splice(a,a+2),!0}return!1}function e(d){if(!(2500<Date.now()-m)){var b=d.touches&&d.touches.length?d.touches:[d],e=b[0].clientX,b=b[0].clientY;if(!(1>e&&1>b||h&&h[0]===e&&h[1]===b)){h&&(h=null);var a=d.target;"label"===s.lowercase(a.nodeName||a[0]&&a[0].nodeName)&&(h=[e,b]);c(g,e,b)||(d.stopPropagation(),d.preventDefault(),d.target&&
d.target.blur&&d.target.blur())}}}function l(d){d=d.touches&&d.touches.length?d.touches:[d];var b=d[0].clientX,c=d[0].clientY;g.push(b,c);k(function(){for(var a=0;a<g.length;a+=2)if(g[a]==b&&g[a+1]==c){g.splice(a,a+2);break}},2500,!1)}var m,g,h;return function(d,b,h){var a=f(h.ngClick),k=!1,q,n,t,v;b.on("touchstart",function(a){k=!0;q=a.target?a.target:a.srcElement;3==q.nodeType&&(q=q.parentNode);b.addClass("ng-click-active");n=Date.now();a=a.originalEvent||a;a=(a.touches&&a.touches.length?a.touches:
[a])[0];t=a.clientX;v=a.clientY});b.on("touchcancel",function(a){k=!1;b.removeClass("ng-click-active")});b.on("touchend",function(a){var d=Date.now()-n,f=a.originalEvent||a,u=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=u.clientX,u=u.clientY,w=Math.sqrt(Math.pow(f-t,2)+Math.pow(u-v,2));k&&750>d&&12>w&&(g||(p[0].addEventListener("click",e,!0),p[0].addEventListener("touchstart",l,!0),g=[]),m=Date.now(),c(g,f,u),q&&q.blur(),s.isDefined(h.disabled)&&
!1!==h.disabled||b.triggerHandler("click",[a]));k=!1;b.removeClass("ng-click-active")});b.onclick=function(a){};b.on("click",function(b,c){d.$apply(function(){a(d,{$event:c||b})})});b.on("mousedown",function(a){b.addClass("ng-click-active")});b.on("mousemove mouseup",function(a){b.removeClass("ng-click-active")})}}]);t("ngSwipeLeft",-1,"swipeleft");t("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return N(new(N(function(){},{prototype:a})),b)}function e(a){return M(arguments,function(b){b!==a&&M(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return M(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return N({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return M(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return M(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=L(a),d=c?[]:{};return M(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=L(a)?[]:{};return M(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=N(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,J(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);M(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return K(a)&&a.then&&a.$$promises}if(!K(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return M(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!H(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;M(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!K(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=N({},d),u=1+q.length/3,v=!1;if(H(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),N(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return H(a.template)?this.fromString(a.template,b):H(a.templateUrl)?this.fromUrl(a.templateUrl,b):H(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return I(a)?a(b):a},this.fromUrl=function(c,d){return I(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new P.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:e=["?(",")?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),j=P.type(h||"string")||d(P.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)}),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=N({params:{}},K(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new P.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){N(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return I(a)||L(a)&&I(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){N(this,a||{})}P=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!H(a)||"string"==typeof a},pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return H(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return H(a)&&(m=a),m},this.strictMode=function(a){return H(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!H(a))return q;if(a!==!0&&a!==!1&&!J(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,N(f(),b))},this.isMatcher=function(a){if(!K(a))return!1;var b=!0;return M(r.prototype,function(c,d){I(c)&&(b=b&&H(a[d])&&I(a[d]))}),b},this.type=function(a,b,c){if(!H(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(N({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},M(x,function(a,b){u[b]=new s(N({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),M(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=K(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function j(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof s?b.type:new s(b.type):"config"===d?u.any:u.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return N(b,c,d).array}function m(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!H(c)||null==c)return q;if(c===!0||J(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=L(a.replace)?a.replace:[],J(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function r(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(d.$$fn);if(null!==a&&a!==c&&!w.type.is(a))throw new Error("Default value ("+a+") for parameter '"+w.id+"' is not an instance of Type ("+w.type.name+")");return a}function t(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),H(a)?w.type.$normalize(a):r()}function v(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=j(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=m(d,y),A=p(d,x,y,z);N(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:t,dynamic:c,config:d,toString:v})},k.prototype={$$new:function(){return d(this,N(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),M(b,function(b){M(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return M(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return M(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return H(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(J(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){o&&d.url()===o;o=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!I(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(J(a)){var b=a;a=function(){return b}}else if(!I(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=J(b);if(J(a)&&(a=d.compile(a)),!h&&!I(b)&&!L(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),N(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:J(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),N(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=J(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!J(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):J(b.parent)?b.parent:K(b.parent)&&J(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)I(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return J(a)&&!H(b)?C[a]:I(b)&&J(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return K(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return M(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(I(d.controllerProvider)||L(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,N({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=N({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!H(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!H(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,I=[];if(f.reload){if(J(f.reload)||K(f.reload)){if(K(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var L=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!L)throw new Error("No such reload state '"+(J(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==L;)G=I[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=I[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,O(y.params,n),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),p.update(),C;for(var M=e.when(G),P=D;P<z.length;P++,F=z[P])G=I[P]=d(G),M=v(F,c,F===b,M,G,f);var Q=y.transition=M.then(function(){var d,e,g;if(y.transition!==Q)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=I[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return r&&(c["#"]=r),y.transition!==Q?A:(y.$current=b,y.current=b.self,y.params=c,O(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==Q?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return Q},y.is=function(a,b,d){d=N({relative:y.$current},d||{});var e=m(a,d.relative);return H(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=N({relative:y.$current},d||{}),J(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return H(e)?H(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=N({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!H(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new P.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(H(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=N({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(J(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new P.ParamSet;return M(a.params||{},function(a,c){b[c]||(b[c]=new P.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?N(a.parent.params.$$new(),a.ownParams):new P.ParamSet},views:function(a){var b={};return M(H(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?N({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=N(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a,c){var d=["location","inherit","reload","absolute"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=B(g.uiSref,a.current.name),j=null,k=C(f)||a.$current,l="[object SVGAnimatedString]"===Object.prototype.toString.call(f.prop("href"))?"xlink:href":"href",m=null,n="A"===f.prop("tagName").toUpperCase(),o="FORM"===f[0].nodeName,p=o?"action":l,q=!0,r={relative:k,inherit:!0},s=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in s&&(r[a]=s[a])});var t=function(c){if(c&&(j=b.copy(c)),q){m=a.href(i.state,j,r);var d=h[1]||h[0];return d&&d.$$addStateInfo(i.state,j),null===m?(q=!1,!1):void g.$set(p,m)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a,b){a!==j&&t(a)},!0),j=b.copy(e.$eval(i.paramExpr))),t(),o||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,r)});b.preventDefault();var g=n&&!m?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function E(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(i):d.removeClass(i)}function g(){for(var a=0;a<j.length;a++)if(h(j[a].state,j[a].params))return!0;return!1}function h(b,c){return"undefined"!=typeof e.uiSrefActiveEq?a.is(b.name,c):a.includes(b.name,c)}var i,j=[];i=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$addStateInfo=function(b,c){var e=a.get(b,C(d));j.push({state:e||{name:b},params:c}),f()},b.$on("$stateChangeSuccess",f)}]}}function F(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function G(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var H=b.isDefined,I=b.isFunction,J=b.isString,K=b.isObject,L=b.isArray,M=b.forEach,N=b.extend,O=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var P;r.prototype.concat=function(a,b){var c={caseInsensitive:P.caseInsensitive(),strict:P.strictMode(),squash:P.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,N(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},r.prototype.parameters=function(a){return H(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=L(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else J(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;L(r)||(r=[r]),r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return L(a)?a:H(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),D.$inject=["$state","$timeout"],E.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",D).directive("uiSrefActive",E).directive("uiSrefActiveEq",E),F.$inject=["$state"],G.$inject=["$state"],b.module("ui.router.state").filter("isState",F).filter("includedByState",G)}(window,window.angular);

(function(window){


/*
 * Funções usadas por todo o código
 */

function __construirSetter( pro, nomeFunc, nomeAttr, defaultVal ){
  if( typeof defaultVal !== 'undefined' ) 
    pro[nomeFunc] = function( val ){
      if( typeof val === 'undefined' ) val = defaultVal;
      this[nomeAttr] = val;
      return this;
    };
  else pro[nomeFunc] = function( val ){
    this[nomeAttr] = val;
    return this;
  };
}


var Module = angular.module('JavaModelo',['ng','ui.router']);

var urlContext = '/context',
    pProvider = null,
    hiProvider = null;
  
Module.run(['$templateCache','$rootElement',  'path',
    function($templateCache,$rootElement,  path){
  
  console.log( 'HostInterProvider em .run', hiProvider );
  if( !hiProvider.ativo ){
    // Pegar o context;
    var url = path('p', urlContext );
    var xhttp = new XMLHttpRequest();
    //xhttp.withCredentials = true;
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        pProvider.context = xhttp.responseText;
      }
    };
    xhttp.open("GET", url, false);
    xhttp.send();
  }else{
    var scripts = $rootElement[0].querySelectorAll('script[type="text/ng-template"]');
    var url = hiProvider.url.replace(/\/$/,'');
    for(var i = 0; i < scripts.length; i++){
      var key = scripts[i].id ;
      var nome = url+ '/'+ key.replace(/^\//,'') ;
      $templateCache.put( nome, scripts[i].textContent );
    }
  }
  
  console.log( 'Testando path', path );
  console.log( "path('servico','persistencia')", path('servico','/persistencia') );
  console.log( "path('persistencia','context')", path('persistencia','/context') );
  
  
}]);
  
  // Configuração dos interceptadores desse módule
Module.config(['$httpProvider','HostInterProvider', 'pathProvider',
          //'$compileProvider','$logProvider',
        function($httpProvider,HostInterProvider , pathProvider
          //,$compileProvider,$logProvider
            ){
            
  //$httpProvider.useApplyAsync( true );
  //$compileProvider.debugInfoEnabled( true );
  //$logProvider.debugEnabled( true );
  
  pProvider = pathProvider;
  hiProvider = HostInterProvider;
  
  $httpProvider.interceptors.push( 'LoginInter' );
  $httpProvider.interceptors.push( 'HostInter' );

  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  $httpProvider.defaults.withCredentials = true;
  
  
}]);


Module.directive('segGrupo', ['Usuario',function(Usuario){

    return {
      link: function (scope, el, attr) {
        Usuario.then(function( u ){
          if (!u) return;

          if (u.credencial) {
            if (u.credencial.grupos) {
              var grupos = {};
              for (var gK in u.credencial.grupos) {
                var g = u.credencial.grupos[gK];
                var gNome = g.chave.trim();
                if (!grupos[gNome]) grupos[gNome] = g;
              }

              var permNome = attr.segGrupo.trim();
              if (permNome.indexOf('!') === 0) {
                if (grupos[permNome.substring(1, permNome.length)]) el.remove();
              } else {
                if (!grupos[permNome]) el.remove();
              }
            }
          }
        });
      }
    };

  }]);
Module.directive('segPermissao', ['Usuario',function(Usuario){

    return {
      link: function (scope, el, attr) {
        Usuario.then(function(u){
          if (!u) return;

          if (u.credencial) {
            if (u.credencial.grupos) {
              var permissoes = {};
              for (var gK in u.credencial.grupos) {
                var g = u.credencial.grupos[gK];
                if (!g.permissoes) continue;
                for (var pK in g.permissoes) {
                  var p = g.permissoes[pK];
                  var pNome = p.nome.trim();
                  if (!permissoes[pNome]) permissoes[pNome] = p;
                }
              }
              for (var pK in u.credencial.permissoes) {
                var p = u.credencial.permissoes[pK];
                var pNome = p.nome.trim();
                if (!permissoes[pNome])
                  permissoes[pNome] = p;
              }

              //------------------------------------------------------
              var permNome = attr.segPermissao.trim();
              if (permNome.indexOf('!') === 0) {
                if (permissoes[permNome.substring(1, permNome.length)]) el.remove();
              } else {
                if (!permissoes[permNome]) el.remove();
              }
            }
          }
        });
      }
    };

  }]);
(function(){
  var $http = null, $q = null, Entidades = null;
  
  function _getObjByPath( obj, path ){
    if( !path ) return obj;
    if( typeof path === 'string' ) path = path.split('.');
    for(var i =0; i < path.length; i++){
      obj = obj[path[i]] || (obj[path[i]] = {});
    }
    return  obj;
  }
  function _apply( query, scope ){
    if( query.$scope && !query.$scope.$$phase ) query.$scope.$apply(  );
    else if( scope && scope.$apply && !scope.$$phase ) scope.$apply(  );
  }
  
  //===========================================================================
  
  var defaults = {
        contentType: 'application/json',
        dataPath: 'data.0',
        size: 20,
        page: 0,
        url: '',
          // o cache usa no indece o número da AÇÃO:
        cacheTimeout: {
          "5": -1 , // -1 para nunca expirar
          "1": 180000 , // 3min timeout
          "2": 180000 ,
          "3": 180000 ,
          "4": 180000 
        } // ms
      },
      headers = {
        'Content-Type': defaults.contentType,
        'X-Requested-With':"XMLHttpRequest"
      },
      entidadesCache = {};

  //===========================================================================
  
  function Entidade( nome, config ){
    if( !config ) config = {};
    this.nome = nome;
    this.dataPath = config.dataPath || defaults.dataPath;
    this.size = config.size || defaults.size;
    this.page = config.page || defaults.page;
    this.url = config.url || defaults.url ;
    this.cache = {};
    this.ultimoCache = {};
    this.cacheTimeout = angular.extend({}, 
        defaults.cacheTimeout , config.cacheTimeout ); 
  }
  
  function Query( ent ){
    this.entidade = ent || {};
    this._size = this.entidade.size;
    this._page = this.entidade.page;
    this._where = []; // query
    this._join = [];
    this._order = [];
    this._data = null;
    this._id = false;
    this._acao = 1;
    
    this._url = this.entidade.url;
    this.$scope = null;
    this._build = null;
    this._cache = false;
    this._clearCache = false;
    this._inObj = null;
    this._inPath = this.entidade.nome;
  }
  
  var proto = Query.prototype;
    
  __construirSetter( proto, 'page', '_page' );
  __construirSetter( proto, 'size', '_size' );
  __construirSetter( proto, 'id', '_id', true );
  __construirSetter( proto, 'data', '_data' );
  __construirSetter( proto, 'acao', '_acao' );
  proto.order = function (vals) {
    if (vals instanceof Array) {
      for (var g in vals) {
        var val = vals[g];
        if (typeof val === 'string')
          this._order.push( val );
      }
    } else if (typeof vals === 'string') {
      this._order.push(vals);
    }
    return this;
  };
  proto.join = function (vals) {
    if (vals instanceof Array) {
      for (var g in vals) {
        var val = vals[g];
        if (typeof val === 'string')
          this._join.push( val );
      }
    } else if (typeof vals === 'string') {
      this._join.push(vals);
    }
    return this;
  };
  proto.where = function (nome, comp, val, logicOp, quoteVal) {
    if (!nome || !comp)
      return this;
    comp = comp.toLowerCase();
    if( comp === 'isnull' || comp === 'isnotnull' ){
      val = '-';
      quoteVal = true;
    }
    if (!logicOp)
      logicOp = '&'; // Padão para E se for falso
    else if (logicOp !== '&' && logicOp !== '|')
      logicOp = '|'; // Padão para OU se for verdadeiro
    if (typeof quoteVal === 'undefined') { // se não for definido verificaremos o valor para tentar sempre usar as aspas
      val = '' + val;
      if (val.indexOf('"') !== 0 && val.indexOf("'") !== 0)
        val = '"' + val;
      if (val.lastIndexOf('"') !== val.length - 1 && val.lastIndexOf("'") !== val.length - 1)
        val = val + '"';
    } else if (quoteVal) {
      val = '"' + val + '"';
    }
    this._where.push(nome + ' ' + comp + ' ' + val + logicOp);
    return this;
  };
  
  proto.in = function( obj, path ){
    this._inObj = obj;
    this._inPath = path;
    return this;
  };
  proto.build = function( force ){
    if( this._build && !force ) return this;
    // Montar Query String:
    var queryStr = '';
    for (var g in this._where) {
      queryStr += this._where[g];
    }
    queryStr = queryStr.replace(/[&\|\s]+$/, '');
    //if (queryStr) queryStr = '?' + queryStr;
    
    this._build = {
      entidade: this.entidade.nome,
      page: this._page,
      size: this._size,
      where: queryStr,
      join: this._join,
      order: this._order,
      data: this._data,
      id: this._id,
      acao: this._acao
    };
    return this;
  };
  proto.send = function(){
    var cached = this.getCache();
    if( cached ) return $q.resolve( _send.call(that, cached) );
    
    var that = this; 
    return $http({
      method: 'POST',
      url: this._url,
      headers: headers,
      data: this._build
    }).then(function(data){ return _send.call(that, data.data); });
  };
  function _send(data){
    if( this._cache ){
      this.entidade.ultimoCache[ this._acao ] = Date.now();
      this.entidade.cache[ this._acao ] = data;
    }
    if( this._inObj ){
      var key = this._inPath.split('.');
      var objToBind = _getObjByPath( this._inObj, key.slice(0,key.length-1) );
      key = key[key.length-1];
      objToBind[key] = _getObjByPath( data, this.entidade.dataPath );
      _apply( this, this._inObj );
    }
    return data; 
  }
  
  proto.getCache = function(){
    var entidade = this.entidade;
    var cache = entidade.cache;
    var cacheKey = this._acao;
    if( this._clearCache 
      || (entidade.ultimoCache[cacheKey] 
        && entidade.cacheTimeout[cacheKey] > 0
        && (Date.now() - entidade.ultimoCache[cacheKey]) > entidade.cacheTimeout[cacheKey]
      ) ) return cache[cacheKey] = null;
    else if( cache[cacheKey] ) return cache[cacheKey];
  };
  proto.clearBuild = function(){
    this._build = false;
    return this;
  };
  __construirSetter( proto, 'cache', '_cache', true );
  __construirSetter( proto, 'clearCache', '_clearCache', true );
  __construirSetter( proto, 'apply', '_apply' );
  
  
  __construirRequisicao( proto, 'tipo',5 );
  __construirRequisicao( proto, 'get',1 );
  __construirRequisicao( proto, 'post',2 );
  __construirRequisicao( proto, 'put',3 );
  __construirRequisicao( proto, 'delete',4 );
  __construirRequisicao( proto, 'paginacao',10 );
  
  __construirRequisicaoIn( proto, 'tipoIn','tipo' );
  __construirRequisicaoIn( proto, 'getIn','get' );
  __construirRequisicaoIn( proto, 'postIn','post' );
  __construirRequisicaoIn( proto, 'putIn','put' );
  __construirRequisicaoIn( proto, 'deleteIn','delete' );
  __construirRequisicaoIn( proto, 'paginacaoIn','paginacao' );
  
  function __construirRequisicao( pro, nomeFunc, acao ){
    pro[nomeFunc] = function( _data ){
      return this.data( _data || this._data ).acao( acao ).build().send();
    };
  }
  function __construirRequisicaoIn( pro, nomeFunc, methodFunc ){
    pro[nomeFunc] = function( obj, key, _data ){
      return this.in( obj, key )[methodFunc]( _data );
    };
  }
  
  
  
//============================================================================
  
  function MuitosQuery( listaQuerys ){
    var arr = listaQuerys || [];
    if( !(arr instanceof Array) ) arr = [ arr ];
    this._querys = arr;
  }
  
  var muitosProto = MuitosQuery.prototype;
  
  muitosProto.add = function( query ){
    this._querys.push( query );
    return this;
  };
  muitosProto.remove = function( query ){
    for( var i = 0; i < this._querys.length; i++ ){
      if( this._querys[i] === query ){
        this._querys.splice( i, 1 );
        break;
      }
    }
    return this;
  };
  
  muitosProto.send = function(){
    if( !this._querys.length ) return $q(function(res,rej){});
    var _build = [], _cacheds = [];
    for( var i = 0; i < this._querys.length; i++ ){
      var q = this._querys[i];
      q.build();
      var cached = q.getCache();
      if( cached ) _cacheds[i] = cached ;
      else _build.push( q._build );
    }
    if( !_build.length ) return;
    
    var that = this;
    return $http({
      method: 'POST',
      url: defaults.url,
      headers: headers,
      data: _build
    }).then(function(data){ 
      data = data.data ;
      var arr = data.data ;
      // restaurar o vetor completo da requisição JS:
      for(var g in _cacheds){
        arr.splice( g, 0, _cacheds[g].data );
      }
      // copia da resposta JsonResponse:
      for(var g in arr){
        var copia = _cacheds[g];
        if( !copia ){
          var copia = {};
          for(var k in data){
            copia[k] = data[k];
          }
          copia.data = [ arr[g] ]; // novo array, para garantir index 0
          copia.size = that._querys[g]._size;
          copia.page = that._querys[g]._page;
        }
        _send.call( that._querys[g], copia );
      }
      
      return data;
    });
  };
  
  
//============================================================================
    // Auxiliares:
  
  function _copiarCom( objArr, arrParam ){
    var retornarVetor = true;
    if( !(objArr instanceof Array) ){
      objArr = [ objArr ];
      retornarVetor = false;
    }
      // montar estrutura de busca
    var arr = [];
    for( var g = 0; g < arrParam.length; g++ ){
      var val = arrParam[g] ;
      if( typeof val === 'number' ) arr.push( [val] );
      else arr.push( val.split('.') );
    }
      // iniciar busca e copiar
    var arrCopia = [],copia, obj, tempObj, tempCopia, vet, k;
    for( var ok = 0; ok < objArr.length; ok++ ){
      obj = objArr[ok];
      copia = {};
      arrCopia.push( copia );
      for(var g = 0; g < arr.length; g++ ){
        vet = arr[g];
        tempObj = obj;
        tempCopia = copia;
        for( k = 0; k < vet.length -1; k++ ){
          tempObj = tempObj[ vet[k] ];
          if( !tempCopia[ vet[k] ] ) tempCopia[ vet[k] ] = {};
          tempCopia = tempCopia[ vet[k] ];
        }
        tempCopia[ vet[k] ] = tempObj[ vet[k] ];
      }
    }
    
    if( retornarVetor ) return arrCopia;
    return copia;
  }
  
  function _copiarSem( objArr, arrParam ){
    var retornarVetor = true;
    if( !(objArr instanceof Array) ){
      objArr = [ objArr ];
      retornarVetor = false;
    }
      // montar estrutura de busca
    var arr = [];
    for( var g = 0; g < arrParam.length; g++ ){
      var val = arrParam[g] ;
      if( typeof val === 'number' ) arr.push( [val] );
      else arr.push( val.split('.') );
    }
    var excluir = {}, tempExc;
    for( var g = 0; g < arr.length; g++ ){
      var vet = arr[g];
      tempExc = excluir;
      for( k = 0; k < vet.length -1; k++ ){
        tempExc = tempExc[ vet[k] ];
      }
      tempExc[ vet[k] ] = true; // para ser verdadeiro na comparação
    }
      // iniciar busca e copiar
    var resp = [];
    for( var ok = 0; ok < objArr.length; ok++ ){
      resp.push( _copiaSem_Deep( {}, objArr[ok], excluir ) );
    }
    
    if( retornarVetor ) return resp;
    return resp[0];
  }
  function _copiaSem_Deep( para, de, comp ){
    for( var g in de ){
      if( !comp[g] ){
        para[g] = de[g];
        continue;
      }
      // CONTINUAR AQUI
    }
  }
  
//============================================================================
Module.provider('Entidades',[function(){
  
  this.defaults = defaults;
  var that = this;
  
  this.$get = ['path','$http','$q',function(path,inj$http, inj$q){
    
    $http = inj$http;
    $q = inj$q;

    that.defaults.url = path('p', that.defaults.url) ;
    var ref = {
      query: function( ent ){
        if( typeof ent === 'string' ) ent = ref.entidade(ent);
        return new Query( ent );
      },
      queryMuitos: function( arrQ ){
        return new MuitosQuery( arrQ );
      },
      entidade: function( nome, config, override ){
        var ent = entidadesCache[nome];
        if( ent && !override ) return ent;
        if( !config ) config = {};
        if( !config.url ) config.url = defaults.url ;
        ent = new Entidade( nome, config );
        that[nome] = entidadesCache[nome] = ent;
        return ent;
      },
      get: function( nome ){
        return entidadesCache[nome] ;
      },
      
        // Shallow copy
      copiarCom: _copiarCom,
        // Shallow copy
      copiarSem: _copiarSem
    };
    
    ref.eq = ref.equal = '=';
    ref.ne = ref.notEqual = '!=';
    ref.le = ref.lowerThanOrEqualTo = '<=';
    ref.ge = ref.greaterThanOrEqualTo = '>=';
    ref.lt = ref.lowerThan = '<';
    ref.gt = ref.greaterThan = '>';
    ref.nl = ref.notLike = 'notlike';
    ref.lk = ref.like = 'like';
    ref.nl = ref.isNull = 'isnull';
    ref.nnl = ref.isNotNull = 'isnotnull';
    
    ref.BUSCAR =      1;
    ref.CRIAR =       2;
    ref.EDITAR =      3;
    ref.DELETAR =     4;
    ref.TIPO =        5;
    ref.ADICIONAR =   6;
    ref.REMOVER =     7;
    ref.PAGINACAO =   10;
    
    return Entidades = ref;
  }];

}]);

})();

(function(){
  
  var $http = null, $q = null, path = null, $rootElement = null ;
  
  
  function Exportar(  ){
    this._data = null; // deve ser no formato de "Busca";
    this._tipo = 'xlsx';
    this._nome = '';
    this._titulos = [];
    this._atributos = [];
    this._entidade = ''; // nome da entidade
    
    this._target = '_blank';
    this._build = false;
  }

  var proto = Exportar.prototype;
  
  __construirSetter( proto, 'nome', '_nome' );
  __construirSetter( proto, 'tipo', '_tipo' );
  __construirSetter( proto, 'entidade', '_entidade' );
  __construirSetter( proto, 'target', '_target' );
  proto.titulos = function( vals ){
    if(!(vals instanceof Array)) vals = [ vals ];
    this._titulos = vals;
    return this;
  };
  proto.dados = function( vals ){
    if(!(vals instanceof Array)) vals = [ vals ];
    this._atributos = vals;
    return this;
  };
  
  
  proto.clearBuild = function(){
    this._build = false;
    return this;
  };
  proto.build = function(){
    if( this._build ) return this;
    
    this._data = {
      entidade: this._entidade,
      data: {
        nome: this._nome,
        titulos: this._titulos,
        atributos: this._atributos
      }
    };
    
    return this;
  };
  proto.send = function(){
    this.build();
    
      // fazer a requisição:
    var form = document.createElement("form");
    form.action = 'exportar';
    form.method = 'post';
    form.target = this._target;
    var input = document.createElement("textarea");
    input.name = 'json';
    input.value = JSON.stringify( this._data );
    form.appendChild(input);
    form.style.display = 'none';
    $rootElement[0].appendChild(form);
    form.submit();
    $rootElement[0].removeChild(form);
  };
  
  
//============================================================================
  Module.provider('Exportar',[function(){
    
    var that = this;
    
    this.$get = ['$http','$q','path','$rootElement',
        function(inj$http,inj$q, injpath, inj$rootElement){
      
      $http = inj$http;
      $q = inj$q;
      path = injpath;
      $rootElement = inj$rootElement;
      
      return {
        query: function( entidadeNome ){
          return new Exportar().entidade( entidadeNome );
        }
      };
    }];
    
  }]);
  
})();
Module.provider('HostInter',[function(){
      /**
       * Interceptador para resirecionar as requisições para outro
       * endereço.
       * (ferramentas de desenvolvimento do Chrome)
       * @type NetbeansChromeInter
       */

  var provider = this;

  provider.ativo = false;
  provider.url = '';

  provider.$get = [function(){

    var ref = {
      request:function( request ){
        if( provider.ativo && !request.noHostInter ){
          request.url = (provider.url + request.url).replace(/\/+/g,'/')
            .replace(/(\w):\/+/g,'$1://') ;
        }
        return request;
      }
    };
    return ref;

  }];

}]);
Module.provider('LoginInter',[function(state){ // '$state'

  var provider = this;
  
  provider.handler = null;
  provider.state = ''; // login
  provider.url = '/login.html';
  provider.ativo = true;
  provider.ERRORCODE_LOGIN = 401 ;

  provider.$get = ['path','$window',function(path,$window){
    /**
     * Esse interceptador redireciona o usuário para a página de login
     * caso o servidor informe o código de erro de usuário não logado.
     * @type LoginInter
     */

    var ref = {
      response:function( response ){
        var data = response.data || {};
        if( provider.ativo && data.codigo === provider.ERRORCODE_LOGIN ){
          if( provider.handler ){
            provider.handler( response );
            //-----------------------------------------------------------------
          }else{
            if( provider.state && false ){
              //state.go( provider.state );
            }else{
              var origin = $window.location.origin ;
              $window.location = origin + path('root','') + provider.url ;
            }
          }
        }
        return response ;
      }
    };
    return ref;

  }];

}]);
(function(){
  
  var injector = angular.injector(['ng'],true),
      $q = injector.get('$q'),
      provider = null;
  
  var resolve, reject;
  var promise = $q(function(resolveX, rejectX){
    resolve = resolveX;
    reject = rejectX;
  });
  promise._recarregar = false;
  promise.recarregar = function(){ return promise; };
  
  var oldThen = promise.then ;
  promise.then = function(){
    if( !promise.$$state.status && !promise._recarregar ) promise.recarregar();
    oldThen.apply( promise, arguments );
  };
  
  //=========================================================================
  Module.provider('Usuario', function(){
    provider = this;
    this.carregarAoIniciar = false;
    this.$get = function(){ return promise; };
  });
  
  //=========================================================================
  Module.run(['path','$http',function(path,$http){
    promise.recarregar = function(){
      if( promise._recarregar ) return promise;
      promise.$$state.status = 0;
      promise._recarregar = true;
      $http.get( path('servico','/seguranca/usuario') ).then(function(data){
        if( data.data.codigo === 200 && data.data.data ) resolve( data.data.data );
        else reject( {} );
      },function(err){
        reject( err );
      }).finally(function(){
        promise._recarregar = false;
      });
      return promise;
    };
    if( provider.carregarAoIniciar ) promise.recarregar();
  }]);
  
})();



(function(){
  
  Module.provider('path',[function(){
    var that = this;
    
    that.protocol = '';
    that.host = '';
    that.port = '';
    that.context = '';
    
    that.hasHost = false;
    
    that.root = '/';
    that.servico = '/';
    that.websocket = '/';
    that.persistencia = '/persistencia';
    
    
    this.$get = ['$window',function($window){
      // tratamentos do HOST:
      var wl = $window.location;
      var host = that.host;
      var hostParsed = null;
      if( that.host ){
        hostParsed = /(\w+:\/+)?([^\/:]+)(:\d+)?(\/.*)?/i.exec( host );
        that.hasHost = true;
      }else{
        hostParsed = [
          wl+'',
          wl.protocol+'//',
          wl.host.replace(/:.*/,''),
          wl.port,
          wl.pathname
        ];
      }
      
      if(!that.protocol) that.protocol = hostParsed[1] || 'http://';
      if(that.hasHost || !that.host) that.host = hostParsed[2];
      
      if(!that.port) that.port = parseInt(hostParsed[3].replace(':','')) || 80;
      else that.port = parseInt(that.port);
      
      if(!that.context) that.context = hostParsed[4];
      
      // tratamentos dos nomes padrão:
      that.r = that.root;
      that.s = that.servico;
      that.ws = that.websocket;
      that.p = that.persistencia;
      
      //console.log( 'path:this,pathProvider:this', this, that );
      
      
      var pathFunc = function( pathName, path, fullPath ){
        if( !pathName ) pathName = 'r';
        if( !path ) path = '';
        var str = (that.context+that[pathName] + path) ;
        if( that.hasHost || fullPath ){
          str = that.protocol + (that.host+':'+that.port+str);
        }
        return str.replace(/\/+/g,'/');
      };
      
      pathFunc.get = function( pathName ){
        return that[pathName];
      };
      pathFunc.hasHost = function(  ){
        return that.hasHost;
      };
      
      return pathFunc;
    }];
    
  }]);
  
})();

})(window);


window.Module = angular.module('Module',['ngAnimate','ngTouch','ngRoute','ui.router','JavaModelo']);

Module.config(['pathProvider','HostInterProvider',
    function(pathProvider, HostInterProvider ){
  
  //UsuarioProvider.carregarAoIniciar = false;
  
  HostInterProvider.url = '@@hostInter'; // trocado por "grunt:replace"
  HostInterProvider.ativo = HostInterProvider.url? true : false;
  
  pathProvider.servico = '/s';
  pathProvider.websocket = '/websocket';
  
}]);

Module.controller('Carro',['$scope','Entidades','Exportar',
    function($scope,Entidades, Exportar){
  
  $scope.cores = [];
  $scope.carro = {};
  
  function recarregar(){
    Entidades.query( 'Cor' ).order(['nome']).get().then(function(data){
      console.log( 'data', data );
      $scope.cores = data.data[0];
    }) ; 
    Entidades.query('Carro').join(['cores','portas','valor','portas.janelas',
        'registroUsuario'])
      .order(['nome']).getIn( $scope, 'coisas.carros' );
  }
  recarregar();
  
  
  $scope.postCarro = function(){
    Entidades.query('Carro').post( $scope.carro ).then( recarregar );
  };
  
  $scope.deleteCarro = function( carro ){
    var sim = confirm('Deletar?');
    sim && Entidades.query('Carro').id().delete( carro ).then( recarregar );
  };
  
  $scope.exportarCarros = function(){
    Exportar.query('Carro').nome('Carros - Export')
      .titulos(['ID','Nome','Valor'])
      .dados(['id','nome','valor.valor'])
      .send();
  };
  
}]);
Module.controller('Janela',['$scope','Entidades',
    function($scope,Entidades){
    
  function recarregar(){
    Entidades.query( 'Janela' ).where('porta',Entidades.nnl).getIn($scope,'janelasPortas'); 
    Entidades.query( 'Janela' ).where('porta',Entidades.nl).getIn($scope,'janelasSemPortas'); 
  }
  recarregar();
  
  
  
}]);
Module.controller('Menu',['$scope','$http','$window','path',
    function($scope,$http,$window,path){
  
  $scope.logoutMsg = '';
  
  $scope.logout = function(){
    //$http.post( context.services+ '/seguranca/logout').then(function(data){
    $http.post( path('s', '/seguranca/logout') ).then(function(data){
      if( data.data.status ){
        //var url = $window.location.origin + context.root ;
        //$window.location = url;
        $window.location = path();
      }else{
        $scope.logoutMsg = 'Falha no logout.';
      }
    });
  };
  
}]);
Module.controller('Tipo',['$scope','Entidades',
    function($scope,Entidades){
  
  $scope.tipo = null;
  $scope.entidade = null;
  $scope.override = false;
  $scope.entidadeLista = [
    'Carro','Porta','Usuario','Valor','Cor','RegistroUsuario'
  ];
  
  $scope.mostrarTipo = function(x){
    Entidades.query( $scope.entidade ).cache(true).clearCache( $scope.override )
      .tipoIn( $scope, 'tipo' );
  };
  
}]);
Module.controller('TipoMany',['$scope','Entidades',
    function($scope,Entidades){
  
  $scope.tipo = null;
  $scope.entidade = null;
  $scope.override = false;
  $scope.entidadeLista = [
    'Carro','Porta','Usuario','Valor','Cor'
  ];
  
  var q = Entidades.queryMuitos();
  for(var g in $scope.entidadeLista){
    q.add( Entidades.query($scope.entidadeLista[g])
      .in( $scope, 'tipo.'+g ).acao( Entidades.TIPO ) );
  }
  q.send();
  console.log( 'Entidades::queryMuitos', q );
  console.log( '$scope', $scope );
  
  $scope.mostrarTipo = function(x){
    //Entidades.query( $scope.entidade ).tipoIn( $scope, 'tipo', $scope.override );
  };
  
}]);






Module.config(['$stateProvider','$routeProvider',
    function($stateProvider,$routeProvider){
      
  $routeProvider.otherwise('/#/carro');
  
  $stateProvider.state('index',
    { url: '/index', views:{login:{ templateUrl:'index.html' }}}
  ).state('login',
    { url: '/login', views:{login:{ templateUrl:'login.html' }}}
  ).state('carro',
    { url: '/carro', views:{conteudo:{ templateUrl:'carro.html' }}}
  ).state('tipo',
    { url: '/tipo', views:{conteudo:{ templateUrl:'tipo.html' }}}
  ).state('tipoMany',
    { url: '/tipoMany', views:{conteudo:{ templateUrl:'tipoMany.html' }}}
  ).state('janela',
    { url: '/janela', views:{conteudo:{ templateUrl:'janela.html' }}}
  );
  
}]);


Module.run(['Entidades','$window','Usuario','$q',
    function(Entidades,$window,Usuario, $q){
  
  $window.Carro = Entidades.entidade('Carro');
  $window.Cor = Entidades.entidade('Cor');
  
  Entidades.entidade('Porta');
  Entidades.entidade('Usuario'); 
  Entidades.entidade('Valor');
  Entidades.entidade('RegistroUsuario');
  
  Usuario.then(function(u){
    console.log('Usuario::: ', u);
  });
  
  
}]);
