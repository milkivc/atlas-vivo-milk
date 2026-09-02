/*! For license information please see itowns.umd.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("itowns",[],e):"object"==typeof exports?exports.itowns=e():t.itowns=e()}(self,(()=>(()=>{var t,e={122:(t,e,r)=>{"use strict";var n=r(46518),i=r(44576),s=r(91955),o=r(79306),a=r(22812),l=r(79039),c=r(43724);n({global:!0,enumerable:!0,dontCallGetSet:!0,forced:l((function(){return c&&1!==Object.getOwnPropertyDescriptor(i,"queueMicrotask").value.length}))},{queueMicrotask:function(t){a(arguments.length,1),s(o(t))}})},162:(t,e,r)=>{"use strict";var n=r(69565),i=r(79306),s=r(94901),o=r(28551),a=TypeError;t.exports=function(t,e){var r,l=o(this),c=i(l.get),h=i(l.has),u=i(l.set),d=arguments.length>2?arguments[2]:void 0;if(!s(e)&&!s(d))throw new a("At least one callback required");return n(h,l,t)?(r=n(c,l,t),s(e)&&(r=e(r),n(u,l,t,r))):s(d)&&(r=d(),n(u,l,t,r)),r}},221:(t,e,r)=>{"use strict";var n=r(46518),i=r(79039),s=r(20034),o=r(22195),a=r(15652),l=Object.isSealed;n({target:"Object",stat:!0,forced:a||i((function(){l(1)}))},{isSealed:function(t){return!s(t)||!(!a||"ArrayBuffer"!==o(t))||!!l&&l(t)}})},373:(t,e,r)=>{"use strict";var n=r(44576),i=r(27476),s=r(79039),o=r(79306),a=r(74488),l=r(94644),c=r(13709),h=r(13763),u=r(39519),d=r(3607),p=l.aTypedArray,f=l.exportTypedArrayMethod,m=n.Uint16Array,g=m&&i(m.prototype.sort),A=!(!g||s((function(){g(new m(2),null)}))&&s((function(){g(new m(2),{})}))),y=!!g&&!s((function(){if(u)return u<74;if(c)return c<67;if(h)return!0;if(d)return d<602;var t,e,r=new m(516),n=Array(516);for(t=0;t<516;t++)e=t%4,r[t]=515-t,n[t]=t-2*e+3;for(g(r,(function(t,e){return(t/4|0)-(e/4|0)})),t=0;t<516;t++)if(r[t]!==n[t])return!0}));f("sort",(function(t){return void 0!==t&&o(t),y?g(this,t):a(p(this),function(t){return function(e,r){return void 0!==t?+t(e,r)||0:r!=r?-1:e!=e?1:0===e&&0===r?1/e>0&&1/r<0?1:-1:e>r}}(t))}),!y||A)},616:(t,e,r)=>{"use strict";var n=r(79504),i=r(39297),s=SyntaxError,o=parseInt,a=String.fromCharCode,l=n("".charAt),c=n("".slice),h=n(/./.exec),u={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":"\n","\\r":"\r","\\t":"\t"},d=/^[\da-f]{4}$/i,p=/^[\u0000-\u001F]$/;t.exports=function(t,e){for(var r=!0,n="";e<t.length;){var f=l(t,e);if("\\"===f){var m=c(t,e,e+2);if(i(u,m))n+=u[m],e+=2;else{if("\\u"!==m)throw new s('Unknown escape sequence: "'+m+'"');var g=c(t,e+=2,e+4);if(!h(d,g))throw new s("Bad Unicode escape at: "+e);n+=a(o(g,16)),e+=4}}else{if('"'===f){r=!1,e++;break}if(h(p,f))throw new s("Bad control character in string literal at: "+e);n+=f,e++}}if(r)throw new s("Unterminated string at: "+e);return{value:n,end:e}}},655:(t,e,r)=>{"use strict";var n=r(36955),i=String;t.exports=function(t){if("Symbol"===n(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},876:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),i=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),e.Step=e.Scale=e.Key=e.Getter=e.Dimension=e.Bounds=e.Binary=void 0,i(r(16882),e);var s=r(33359);Object.defineProperty(e,"Binary",{enumerable:!0,get:function(){return s.Binary}});var o=r(19459);Object.defineProperty(e,"Bounds",{enumerable:!0,get:function(){return o.Bounds}});var a=r(44324);Object.defineProperty(e,"Dimension",{enumerable:!0,get:function(){return a.Dimension}});var l=r(27201);Object.defineProperty(e,"Getter",{enumerable:!0,get:function(){return l.Getter}});var c=r(54623);Object.defineProperty(e,"Key",{enumerable:!0,get:function(){return c.Key}});var h=r(66838);Object.defineProperty(e,"Scale",{enumerable:!0,get:function(){return h.Scale}});var u=r(95192);Object.defineProperty(e,"Step",{enumerable:!0,get:function(){return u.Step}})},944:t=>{"use strict";var e=TypeError;t.exports=function(t){var r=t&&t.alphabet;if(void 0===r||"base64"===r||"base64url"===r)return r||"base64";throw new e("Incorrect `alphabet` option")}},1103:t=>{"use strict";t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},1469:(t,e,r)=>{"use strict";var n=r(87433);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},1480:(t,e,r)=>{"use strict";var n=r(46518),i=r(79039),s=r(10298).f;n({target:"Object",stat:!0,forced:i((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:s})},1548:(t,e,r)=>{"use strict";var n=r(44576),i=r(79039),s=r(39519),o=r(84215),a=n.structuredClone;t.exports=!!a&&!i((function(){if("DENO"===o&&s>92||"NODE"===o&&s>94||"BROWSER"===o&&s>97)return!1;var t=new ArrayBuffer(8),e=a(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength}))},1625:(t,e,r)=>{"use strict";var n=r(79504);t.exports=n({}.isPrototypeOf)},1688:(t,e,r)=>{"use strict";var n=r(46518),i=r(70380);n({target:"Date",proto:!0,forced:Date.prototype.toISOString!==i},{toISOString:i})},1767:t=>{"use strict";t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},1886:(t,e,r)=>{"use strict";var n=r(69565),i=r(24074),s=r(28551),o=r(70081),a=r(1767),l=r(55966),c=r(78227)("asyncIterator");t.exports=function(t,e){var r=arguments.length<2?l(t,c):e;return r?s(n(r,t)):new i(a(o(t)))}},1951:(t,e,r)=>{"use strict";var n=r(78227);e.f=n},2008:(t,e,r)=>{"use strict";var n=r(46518),i=r(59213).filter;n({target:"Array",proto:!0,forced:!r(70597)("filter")},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},2087:(t,e,r)=>{"use strict";var n=r(20034),i=Math.floor;t.exports=Number.isInteger||function(t){return!n(t)&&isFinite(t)&&i(t)===t}},2222:(t,e,r)=>{"use strict";var n=r(46518),i=r(97751),s=r(79039),o=r(22812),a=r(655),l=r(67416),c=i("URL"),h=l&&s((function(){c.canParse()})),u=s((function(){return 1!==c.canParse.length}));n({target:"URL",stat:!0,forced:!h||u},{canParse:function(t){var e=o(arguments.length,1),r=a(t),n=e<2||void 0===arguments[1]?void 0:a(arguments[1]);try{return!!new c(r,n)}catch(t){return!1}}})},2259:(t,e,r)=>{"use strict";r(70511)("iterator")},2293:(t,e,r)=>{"use strict";var n=r(28551),i=r(35548),s=r(64117),o=r(78227)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||s(r=n(a)[o])?e:i(r)}},2360:(t,e,r)=>{"use strict";var n,i=r(28551),s=r(96801),o=r(88727),a=r(30421),l=r(20397),c=r(4055),h=r(66119),u="prototype",d="script",p=h("IE_PROTO"),f=function(){},m=function(t){return"<"+d+">"+t+"</"+d+">"},g=function(t){t.write(m("")),t.close();var e=t.parentWindow.Object;return t=null,e},A=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,e,r;A="undefined"!=typeof document?document.domain&&n?g(n):(e=c("iframe"),r="java"+d+":",e.style.display="none",l.appendChild(e),e.src=String(r),(t=e.contentWindow.document).open(),t.write(m("document.F=Object")),t.close(),t.F):g(n);for(var i=o.length;i--;)delete A[u][o[i]];return A()};a[p]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(f[u]=i(t),r=new f,f[u]=null,r[p]=t):r=A(),void 0===e?r:s.f(r,e)}},2478:(t,e,r)=>{"use strict";var n=r(79504),i=r(48981),s=Math.floor,o=n("".charAt),a=n("".replace),l=n("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,h=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,n,u,d){var p=r+t.length,f=n.length,m=h;return void 0!==u&&(u=i(u),m=c),a(d,m,(function(i,a){var c;switch(o(a,0)){case"$":return"$";case"&":return t;case"`":return l(e,0,r);case"'":return l(e,p);case"<":c=u[l(a,1,-1)];break;default:var h=+a;if(0===h)return i;if(h>f){var d=s(h/10);return 0===d?i:d<=f?void 0===n[d-1]?o(a,1):n[d-1]+o(a,1):i}c=n[h-1]}return void 0===c?"":c}))}},2848:(t,e,r)=>{"use strict";r(46518)({target:"Math",stat:!0,nonConfigurable:!0,nonWritable:!0},{RAD_PER_DEG:180/Math.PI})},2892:(t,e,r)=>{"use strict";var n=r(46518),i=r(96395),s=r(43724),o=r(44576),a=r(19167),l=r(79504),c=r(92796),h=r(39297),u=r(23167),d=r(1625),p=r(10757),f=r(72777),m=r(79039),g=r(38480).f,A=r(77347).f,y=r(24913).f,v=r(31240),x=r(43802).trim,_="Number",w=o[_],b=a[_],E=w.prototype,S=o.TypeError,M=l("".slice),C=l("".charCodeAt),T=c(_,!w(" 0o1")||!w("0b1")||w("+0x1")),I=function(t){var e,r=arguments.length<1?0:w(function(t){var e=f(t,"number");return"bigint"==typeof e?e:function(t){var e,r,n,i,s,o,a,l,c=f(t,"number");if(p(c))throw new S("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=x(c),43===(e=C(c,0))||45===e){if(88===(r=C(c,2))||120===r)return NaN}else if(48===e){switch(C(c,1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(o=(s=M(c,2)).length,a=0;a<o;a++)if((l=C(s,a))<48||l>i)return NaN;return parseInt(s,n)}return+c}(e)}(t));return d(E,e=this)&&m((function(){v(e)}))?u(Object(r),this,I):r};I.prototype=E,T&&!i&&(E.constructor=I),n({global:!0,constructor:!0,wrap:!0,forced:T},{Number:I});var R=function(t,e){for(var r,n=s?g(e):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),i=0;n.length>i;i++)h(e,r=n[i])&&!h(t,r)&&y(t,r,A(e,r))};i&&b&&R(a[_],b),(T||i)&&R(a[_],w)},2917:(t,e,r)=>{"use strict";r(15239),r(9035),r(78662)},2945:(t,e,r)=>{"use strict";var n=r(46518),i=r(44576),s=r(97751),o=r(79504),a=r(69565),l=r(79039),c=r(655),h=r(22812),u=r(92804).c2i,d=/[^\d+/a-z]/i,p=/[\t\n\f\r ]+/g,f=/[=]{1,2}$/,m=s("atob"),g=String.fromCharCode,A=o("".charAt),y=o("".replace),v=o(d.exec),x=!!m&&!l((function(){return"hi"!==m("aGk=")})),_=x&&l((function(){return""!==m(" ")})),w=x&&!l((function(){m("a")})),b=x&&!l((function(){m()})),E=x&&1!==m.length;n({global:!0,bind:!0,enumerable:!0,forced:!x||_||w||b||E},{atob:function(t){if(h(arguments.length,1),x&&!_&&!w)return a(m,i,t);var e,r,n,o=y(c(t),p,""),l="",b=0,E=0;if(o.length%4==0&&(o=y(o,f,"")),(e=o.length)%4==1||v(d,o))throw new(s("DOMException"))("The string is not correctly encoded","InvalidCharacterError");for(;b<e;)r=A(o,b++),n=E%4?64*n+u[r]:u[r],E++%4&&(l+=g(255&n>>(-2*E&6)));return l}})},2952:(t,e,r)=>{"use strict";var n=r(76080),i=r(79504),s=r(47055),o=r(48981),a=r(26198),l=r(72248),c=l.Map,h=l.get,u=l.has,d=l.set,p=i([].push);t.exports=function(t){for(var e,r,i=o(this),l=s(i),f=n(t,arguments.length>1?arguments[1]:void 0),m=new c,g=a(l),A=0;g>A;A++)e=f(r=l[A],A,i),u(m,e)?p(h(m,e),r):d(m,e,[r]);return m}},3064:(t,e,r)=>{"use strict";var n=r(46518),i=r(36639).find;n({target:"AsyncIterator",proto:!0,real:!0},{find:function(t){return i(this,t)}})},3238:(t,e,r)=>{"use strict";var n=r(44576),i=r(77811),s=r(67394),o=n.DataView;t.exports=function(t){if(!i||0!==s(t))return!1;try{return new o(t),!1}catch(t){return!0}}},3296:(t,e,r)=>{"use strict";r(45806)},3362:(t,e,r)=>{"use strict";r(10436),r(16499),r(82003),r(7743),r(51481),r(40280)},3451:(t,e,r)=>{"use strict";var n=r(46518),i=r(79504),s=r(30421),o=r(20034),a=r(39297),l=r(24913).f,c=r(38480),h=r(10298),u=r(34124),d=r(33392),p=r(92744),f=!1,m=d("meta"),g=0,A=function(t){l(t,m,{value:{objectID:"O"+g++,weakData:{}}})},y=t.exports={enable:function(){y.enable=function(){},f=!0;var t=c.f,e=i([].splice),r={};r[m]=1,t(r).length&&(c.f=function(r){for(var n=t(r),i=0,s=n.length;i<s;i++)if(n[i]===m){e(n,i,1);break}return n},n({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:h.f}))},fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,m)){if(!u(t))return"F";if(!e)return"E";A(t)}return t[m].objectID},getWeakData:function(t,e){if(!a(t,m)){if(!u(t))return!0;if(!e)return!1;A(t)}return t[m].weakData},onFreeze:function(t){return p&&f&&u(t)&&!a(t,m)&&A(t),t}};s[m]=!0},3470:t=>{"use strict";t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},3607:(t,e,r)=>{"use strict";var n=r(82839).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},3690:(t,e,r)=>{"use strict";r(15823)("Uint16",(function(t){return function(e,r,n){return t(this,e,r,n)}}))},3717:(t,e,r)=>{"use strict";var n=r(79504),i=2147483647,s=/[^\0-\u007E]/,o=/[.\u3002\uFF0E\uFF61]/g,a="Overflow: input needs wider integers to process",l=RangeError,c=n(o.exec),h=Math.floor,u=String.fromCharCode,d=n("".charCodeAt),p=n([].join),f=n([].push),m=n("".replace),g=n("".split),A=n("".toLowerCase),y=function(t){return t+22+75*(t<26)},v=function(t,e,r){var n=0;for(t=r?h(t/700):t>>1,t+=h(t/e);t>455;)t=h(t/35),n+=36;return h(n+36*t/(t+38))},x=function(t){var e=[];t=function(t){for(var e=[],r=0,n=t.length;r<n;){var i=d(t,r++);if(i>=55296&&i<=56319&&r<n){var s=d(t,r++);56320==(64512&s)?f(e,((1023&i)<<10)+(1023&s)+65536):(f(e,i),r--)}else f(e,i)}return e}(t);var r,n,s=t.length,o=128,c=0,m=72;for(r=0;r<t.length;r++)(n=t[r])<128&&f(e,u(n));var g=e.length,A=g;for(g&&f(e,"-");A<s;){var x=i;for(r=0;r<t.length;r++)(n=t[r])>=o&&n<x&&(x=n);var _=A+1;if(x-o>h((i-c)/_))throw new l(a);for(c+=(x-o)*_,o=x,r=0;r<t.length;r++){if((n=t[r])<o&&++c>i)throw new l(a);if(n===o){for(var w=c,b=36;;){var E=b<=m?1:b>=m+26?26:b-m;if(w<E)break;var S=w-E,M=36-E;f(e,u(y(E+S%M))),w=h(S/M),b+=36}f(e,u(y(w))),m=v(c,_,A===g),c=0,A++}}c++,o++}return p(e,"")};t.exports=function(t){var e,r,n=[],i=g(m(A(t),o,"."),".");for(e=0;e<i.length;e++)r=i[e],f(n,c(s,r)?"xn--"+x(r):r);return p(n,".")}},3949:(t,e,r)=>{"use strict";r(7588)},3995:(t,e,r)=>{"use strict";var n=r(46518),i=r(79504),s=r(24194),o=r(57696),a=r(67787),l=r(53602),c=Math.pow,h=1024,u=i(DataView.prototype.setUint16);n({target:"DataView",proto:!0},{setFloat16:function(t,e){s(this);var r=o(t),n=function(t){if(t!=t)return 32256;if(0===t)return(1/t==-1/0)<<15;var e=t<0;if(e&&(t=-t),t>=65520)return e<<15|31744;if(t<61005353927612305e-21)return e<<15|l(16777216*t);var r=0|a(t);if(-15===r)return e<<15|h;var n=l((t*c(2,-r)-1)*h);return n===h?e<<15|r+16<<10:e<<15|r+15<<10|n}(+e);return u(this,r,n,arguments.length>2&&arguments[2])}})},4055:(t,e,r)=>{"use strict";var n=r(44576),i=r(20034),s=n.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},4235:(t,e,r)=>{"use strict";var n=r(46518),i=r(79504),s=r(72652),o=RangeError,a=TypeError,l=1/0,c=Math.abs,h=Math.pow,u=i([].push),d=h(2,1023),p=h(2,53)-1,f=Number.MAX_VALUE,m=h(2,971),g={},A={},y={},v={},x={},_=function(t,e){var r=t+e;return{hi:r,lo:e-(r-t)}};n({target:"Math",stat:!0},{sumPrecise:function(t){var e=[],r=0,n=v;switch(s(t,(function(t){if(++r>=p)throw new o("Maximum allowed index exceeded");if("number"!=typeof t)throw new a("Value is not a number");n!==g&&(t!=t?n=g:t===l?n=n===A?g:y:t===-1/0?n=n===y?g:A:0===t&&1/t!==l||n!==v&&n!==x||(n=x,u(e,t)))})),n){case g:return NaN;case A:return-1/0;case y:return l;case v:return-0}for(var i,h,w,b,E,S,M=[],C=0,T=0;T<e.length;T++){i=e[T];for(var I=0,R=0;R<M.length;R++){if(h=M[R],c(i)<c(h)&&(S=i,i=h,h=S),b=(w=_(i,h)).hi,E=w.lo,c(b)===l){var P=b===l?1:-1;C+=P,c(i=i-P*d-P*d)<c(h)&&(S=i,i=h,h=S),b=(w=_(i,h)).hi,E=w.lo}0!==E&&(M[I++]=E),i=b}M.length=I,0!==i&&u(M,i)}var B=M.length-1;if(b=0,E=0,0!==C){var L=B>=0?M[B]:0;if(B--,c(C)>1||C>0&&L>0||C<0&&L<0)return C>0?l:-1/0;if(b=(w=_(C*d,L/2)).hi,E=w.lo,E*=2,c(2*b)===l)return b>0?b===d&&E===-m/2&&B>=0&&M[B]<0?f:l:b===-d&&E===m/2&&B>=0&&M[B]>0?-f:-1/0;0!==E&&(M[++B]=E,E=0),b*=2}for(;B>=0&&(b=(w=_(b,M[B--])).hi,0===(E=w.lo)););return B>=0&&(E<0&&M[B]<0||E>0&&M[B]>0)&&(h=2*E)==(i=b+h)-b&&(b=i),b}})},4294:(t,e,r)=>{"use strict";var n=r(46518),i=r(97751),s=r(18745),o=r(79039),a=r(14601),l="AggregateError",c=i(l),h=!o((function(){return 1!==c([1]).errors[0]}))&&o((function(){return 7!==c([1],l,{cause:7}).cause}));n({global:!0,constructor:!0,arity:2,forced:h},{AggregateError:a(l,(function(t){return function(e,r){return s(t,this,arguments)}}),h,!0)})},4360:(t,e,r)=>{"use strict";var n=r(46518),i=r(33164);n({target:"Math",stat:!0},{f16round:function(t){return i(t,.0009765625,65504,6103515625e-14)}})},4495:(t,e,r)=>{"use strict";var n=r(39519),i=r(79039),s=r(44576).String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol("symbol detection");return!s(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},4731:(t,e,r)=>{"use strict";var n=r(44576);r(10687)(n.JSON,"JSON",!0)},5240:(t,e,r)=>{"use strict";r(16468)("WeakSet",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(91625))},5247:(t,e,r)=>{"use strict";r.d(e,{M:()=>m});var n=r(24922),i=r(52219);const s=Math.PI,o=s/2,a=new n.Pq0,l=new n.Pq0,c=new n.Pq0,h=new n.kn4;let u=0;const d=[];function p(t=!1){return t?(d[u]||(d[u]=new n.Pq0),u++,d[u-1]):new n.Pq0}function f(){u=0}class m extends i.C1{constructor(t,e,r,n=-o,i=o,a=0,l=2*s,c=0,h=0){super(t,e,r),this.latStart=n,this.latEnd=i,this.lonStart=a,this.lonEnd=l,this.heightStart=c,this.heightEnd=h}_getPoints(t=!1){const{latStart:e,latEnd:r,lonStart:i,lonEnd:a,heightStart:l,heightEnd:c}=this,h=n.cj9.mapLinear(.5,0,1,e,r),u=n.cj9.mapLinear(.5,0,1,i,a),d=Math.floor(i/o)*o,f=[[-s/2,0],[s/2,0],[0,d],[0,d+s/2],[0,d+s],[0,d+3*s/2],[e,a],[r,a],[e,i],[r,i],[0,i],[0,a],[h,u],[e,u],[r,u],[h,i],[h,a]],m=[],g=f.length;for(let s=0;s<=1;s++){const o=n.cj9.mapLinear(s,0,1,l,c);for(let n=0,s=g;n<s;n++){const[s,l]=f[n];if(s>=e&&s<=r&&l>=i&&l<=a){const e=p(t);m.push(e),this.getCartographicToPosition(s,l,o,e)}}}return m}getBoundingBox(t,e){f();const{latStart:r,latEnd:i,lonStart:o,lonEnd:u}=this;if(i-r<s/2){const t=n.cj9.mapLinear(.5,0,1,r,i),s=n.cj9.mapLinear(.5,0,1,o,u);this.getCartographicToNormal(t,s,c),l.set(0,0,1),a.crossVectors(l,c),l.crossVectors(a,c),e.makeBasis(a,l,c)}else a.set(1,0,0),l.set(0,1,0),c.set(0,0,1),e.makeBasis(a,l,c);h.copy(e).invert();const d=this._getPoints(!0);for(let t=0,e=d.length;t<e;t++)d[t].applyMatrix4(h);t.makeEmpty(),t.setFromPoints(d)}getBoundingSphere(t,e){f();const r=this._getPoints(!0);t.makeEmpty(),t.setFromPoints(r,e)}}},5506:(t,e,r)=>{"use strict";var n=r(46518),i=r(32357).entries;n({target:"Object",stat:!0},{entries:function(t){return i(t)}})},5745:(t,e,r)=>{"use strict";var n=r(46518),i=r(77240);n({target:"String",proto:!0,forced:r(23061)("bold")},{bold:function(){return i(this,"b","","")}})},5746:(t,e,r)=>{"use strict";var n=r(69565),i=r(89228),s=r(28551),o=r(64117),a=r(67750),l=r(3470),c=r(655),h=r(55966),u=r(56682);i("search",(function(t,e,r){return[function(e){var r=a(this),i=o(e)?void 0:h(e,t);return i?n(i,e,r):new RegExp(e)[t](c(r))},function(t){var n=s(this),i=c(t),o=r(e,n,i);if(o.done)return o.value;var a=n.lastIndex;l(a,0)||(n.lastIndex=0);var h=u(n,i);return l(n.lastIndex,a)||(n.lastIndex=a),null===h?-1:h.index}]}))},5914:(t,e,r)=>{"use strict";r(46518)({target:"Math",stat:!0},{sign:r(77782)})},6469:(t,e,r)=>{"use strict";var n=r(78227),i=r(2360),s=r(24913).f,o=n("unscopables"),a=Array.prototype;void 0===a[o]&&s(a,o,{configurable:!0,value:i(null)}),t.exports=function(t){a[o][t]=!0}},6585:t=>{var e=1e3,r=60*e,n=60*r,i=24*n,s=7*i;function o(t,e,r,n){var i=e>=1.5*r;return Math.round(t/r)+" "+n+(i?"s":"")}t.exports=function(t,a){a=a||{};var l,c,h=typeof t;if("string"===h&&t.length>0)return function(t){if(!((t=String(t)).length>100)){var o=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(o){var a=parseFloat(o[1]);switch((o[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*a;case"weeks":case"week":case"w":return a*s;case"days":case"day":case"d":return a*i;case"hours":case"hour":case"hrs":case"hr":case"h":return a*n;case"minutes":case"minute":case"mins":case"min":case"m":return a*r;case"seconds":case"second":case"secs":case"sec":case"s":return a*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}}}(t);if("number"===h&&isFinite(t))return a.long?(l=t,(c=Math.abs(l))>=i?o(l,c,i,"day"):c>=n?o(l,c,n,"hour"):c>=r?o(l,c,r,"minute"):c>=e?o(l,c,e,"second"):l+" ms"):function(t){var s=Math.abs(t);return s>=i?Math.round(t/i)+"d":s>=n?Math.round(t/n)+"h":s>=r?Math.round(t/r)+"m":s>=e?Math.round(t/e)+"s":t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},6660:(t,e,r)=>{"use strict";r(46518)({target:"Math",stat:!0,forced:!0},{signbit:function(t){var e=+t;return e==e&&0===e?1/e==-1/0:e<0}})},6761:(t,e,r)=>{"use strict";var n=r(46518),i=r(44576),s=r(69565),o=r(79504),a=r(96395),l=r(43724),c=r(4495),h=r(79039),u=r(39297),d=r(1625),p=r(28551),f=r(25397),m=r(56969),g=r(655),A=r(6980),y=r(2360),v=r(71072),x=r(38480),_=r(10298),w=r(33717),b=r(77347),E=r(24913),S=r(96801),M=r(48773),C=r(36840),T=r(62106),I=r(25745),R=r(66119),P=r(30421),B=r(33392),L=r(78227),D=r(1951),O=r(70511),N=r(58242),F=r(10687),U=r(91181),k=r(59213).forEach,z=R("hidden"),G="Symbol",Q="prototype",V=U.set,j=U.getterFor(G),H=Object[Q],q=i.Symbol,W=q&&q[Q],Y=i.RangeError,X=i.TypeError,$=i.QObject,J=b.f,K=E.f,Z=_.f,tt=M.f,et=o([].push),rt=I("symbols"),nt=I("op-symbols"),it=I("wks"),st=!$||!$[Q]||!$[Q].findChild,ot=function(t,e,r){var n=J(H,e);n&&delete H[e],K(t,e,r),n&&t!==H&&K(H,e,n)},at=l&&h((function(){return 7!==y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?ot:K,lt=function(t,e){var r=rt[t]=y(W);return V(r,{type:G,tag:t,description:e}),l||(r.description=e),r},ct=function(t,e,r){t===H&&ct(nt,e,r),p(t);var n=m(e);return p(r),u(rt,n)?(r.enumerable?(u(t,z)&&t[z][n]&&(t[z][n]=!1),r=y(r,{enumerable:A(0,!1)})):(u(t,z)||K(t,z,A(1,y(null))),t[z][n]=!0),at(t,n,r)):K(t,n,r)},ht=function(t,e){p(t);var r=f(e),n=v(r).concat(ft(r));return k(n,(function(e){l&&!s(ut,r,e)||ct(t,e,r[e])})),t},ut=function(t){var e=m(t),r=s(tt,this,e);return!(this===H&&u(rt,e)&&!u(nt,e))&&(!(r||!u(this,e)||!u(rt,e)||u(this,z)&&this[z][e])||r)},dt=function(t,e){var r=f(t),n=m(e);if(r!==H||!u(rt,n)||u(nt,n)){var i=J(r,n);return!i||!u(rt,n)||u(r,z)&&r[z][n]||(i.enumerable=!0),i}},pt=function(t){var e=Z(f(t)),r=[];return k(e,(function(t){u(rt,t)||u(P,t)||et(r,t)})),r},ft=function(t){var e=t===H,r=Z(e?nt:f(t)),n=[];return k(r,(function(t){!u(rt,t)||e&&!u(H,t)||et(n,rt[t])})),n};c||(C(W=(q=function(){if(d(W,this))throw new X("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?g(arguments[0]):void 0,e=B(t),r=function(t){var n=void 0===this?i:this;n===H&&s(r,nt,t),u(n,z)&&u(n[z],e)&&(n[z][e]=!1);var o=A(1,t);try{at(n,e,o)}catch(t){if(!(t instanceof Y))throw t;ot(n,e,o)}};return l&&st&&at(H,e,{configurable:!0,set:r}),lt(e,t)})[Q],"toString",(function(){return j(this).tag})),C(q,"withoutSetter",(function(t){return lt(B(t),t)})),M.f=ut,E.f=ct,S.f=ht,b.f=dt,x.f=_.f=pt,w.f=ft,D.f=function(t){return lt(L(t),t)},l&&(T(W,"description",{configurable:!0,get:function(){return j(this).description}}),a||C(H,"propertyIsEnumerable",ut,{unsafe:!0}))),n({global:!0,constructor:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),k(v(it),(function(t){O(t)})),n({target:G,stat:!0,forced:!c},{useSetter:function(){st=!0},useSimple:function(){st=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!l},{create:function(t,e){return void 0===e?y(t):ht(y(t),e)},defineProperty:ct,defineProperties:ht,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt}),N(),F(q,G),P[z]=!0},6980:t=>{"use strict";t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6986:(t,e,r)=>{"use strict";var n=r(46518),i=r(77957),s=r(34598),o=r(6469);n({target:"Array",proto:!0,forced:!s("groupBy")},{groupBy:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("groupBy")},7036:(t,e,r)=>{"use strict";var n=r(46518),i=r(79306),s=r(36194),o=r(72248),a=o.get,l=o.has,c=o.set;n({target:"Map",proto:!0,real:!0,forced:!0},{getOrInsertComputed:function(t,e){if(s(this),i(e),l(this,t))return a(this,t);0===t&&1/t==-1/0&&(t=0);var r=e(t);return c(this,t,r),r}})},7040:(t,e,r)=>{"use strict";var n=r(4495);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7467:(t,e,r)=>{"use strict";var n=r(46518),i=r(18745),s=r(59323),o=r(97751),a=r(2360),l=Object,c=function(){var t=o("Object","freeze");return t?t(a(null)):a(null)};n({global:!0,forced:!0},{compositeKey:function(){return i(s,l,arguments).get("object",c)}})},7588:(t,e,r)=>{"use strict";var n=r(46518),i=r(72652),s=r(79306),o=r(28551),a=r(1767);n({target:"Iterator",proto:!0,real:!0},{forEach:function(t){o(this),s(t);var e=a(this),r=0;i(e,(function(e){t(e,r++)}),{IS_RECORD:!0})}})},7709:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.allSettled=void 0,e.allSettled=function(t){return Promise.all(t.map((t=>{const e=t=>({status:"fulfilled",value:t}),r=t=>({status:"rejected",reason:t}),n=Promise.resolve(t);try{return n.then(e,r)}catch(t){return Promise.reject(t)}})))}},7740:t=>{"use strict";var e=Math.log;t.exports=Math.log1p||function(t){var r=+t;return r>-1e-8&&r<1e-8?r-r*r/2:e(1+r)}},7743:(t,e,r)=>{"use strict";var n=r(46518),i=r(69565),s=r(79306),o=r(36043),a=r(1103),l=r(72652);n({target:"Promise",stat:!0,forced:r(90537)},{race:function(t){var e=this,r=o.f(e),n=r.reject,c=a((function(){var o=s(e.resolve);l(t,(function(t){i(o,e,t).then(r.resolve,n)}))}));return c.error&&n(c.value),r.promise}})},7860:(t,e,r)=>{"use strict";var n=r(82839);t.exports=/web0s(?!.*chrome)/i.test(n)},7904:(t,e,r)=>{"use strict";var n=r(46518),i=r(43724),s=r(42551),o=r(48981),a=r(56969),l=r(42787),c=r(77347).f;i&&n({target:"Object",proto:!0,forced:s},{__lookupSetter__:function(t){var e,r=o(this),n=a(t);do{if(e=c(r,n))return e.set}while(r=l(r))}})},8045:(t,e,r)=>{"use strict";var n=r(76080),i=r(79504),s=r(48981),o=r(33517),a=r(1886),l=r(70081),c=r(1767),h=r(50851),u=r(55966),d=r(97751),p=r(44124),f=r(78227),m=r(24074),g=r(36639).toArray,A=f("asyncIterator"),y=i(p("Array","values")),v=i(y([]).next),x=function(){return new _(this)},_=function(t){this.iterator=y(t)};_.prototype.next=function(){return v(this.iterator)},t.exports=function(t){var e=this,r=arguments.length,i=r>1?arguments[1]:void 0,p=r>2?arguments[2]:void 0;return new(d("Promise"))((function(r){var d=s(t);void 0!==i&&(i=n(i,p));var f=u(d,A),y=f?void 0:h(d)||x,v=o(e)?new e:[],_=f?a(d,f):new m(c(l(d,y)));r(g(_,i,v))}))}},8085:(t,e,r)=>{"use strict";var n=r(46518),i=Math.floor,s=Math.log,o=Math.LOG2E;n({target:"Math",stat:!0},{clz32:function(t){var e=t>>>0;return e?31-i(s(e+.5)*o):32}})},8159:(t,e,r)=>{"use strict";var n=r(46518),i=r(36639).some;n({target:"AsyncIterator",proto:!0,real:!0},{some:function(t){return i(this,t)}})},8288:(t,e,r)=>{"use strict";var n=r(46518),i=r(18449),s=r(28551),o=i.toKey,a=i.set;n({target:"Reflect",stat:!0},{metadata:function(t,e){return function(r,n){a(t,e,s(r),o(n))}}})},8379:(t,e,r)=>{"use strict";var n=r(18745),i=r(25397),s=r(91291),o=r(26198),a=r(34598),l=Math.min,c=[].lastIndexOf,h=!!c&&1/[1].lastIndexOf(1,-0)<0,u=a("lastIndexOf"),d=h||!u;t.exports=d?function(t){if(h)return n(c,this,arguments)||0;var e=i(this),r=o(e);if(0===r)return-1;var a=r-1;for(arguments.length>1&&(a=l(a,s(arguments[1]))),a<0&&(a=r+a);a>=0;a--)if(a in e&&e[a]===t)return a||0;return-1}:c},8872:(t,e,r)=>{"use strict";r(18237)},8921:(t,e,r)=>{"use strict";var n=r(46518),i=r(8379);n({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},8995:(t,e,r)=>{"use strict";var n=r(94644),i=r(59213).map,s=n.aTypedArray,o=n.getTypedArrayConstructor;(0,n.exportTypedArrayMethod)("map",(function(t){return i(s(this),t,arguments.length>1?arguments[1]:void 0,(function(t,e){return new(o(t))(e)}))}))},9035:(t,e,r)=>{"use strict";var n=r(46518),i=r(97751),s=r(69565),o=r(28551),a=r(33517),l=r(70081),c=r(55966),h=r(72652),u=r(78227)("observable");n({target:"Observable",stat:!0,forced:!0},{from:function(t){var e=a(this)?this:i("Observable"),r=c(o(t),u);if(r){var n=o(s(r,t));return n.constructor===e?n:new e((function(t){return n.subscribe(t)}))}var d=l(t);return new e((function(t){h(d,(function(e,r){if(t.next(e),t.closed)return r()}),{IS_ITERATOR:!0,INTERRUPTED:!0}),t.complete()}))}})},9065:(t,e,r)=>{"use strict";var n=r(46518),i=r(43724),s=r(28551),o=r(77347);n({target:"Reflect",stat:!0,sham:!i},{getOwnPropertyDescriptor:function(t,e){return o.f(s(t),e)}})},9156:(t,e,r)=>{"use strict";var n=r(46518),i=r(91354);n({target:"Object",stat:!0,forced:!0},{iterateKeys:function(t){return new i(t,"keys")}})},9220:(t,e,r)=>{"use strict";var n=r(46518),i=r(43724),s=r(42551),o=r(48981),a=r(56969),l=r(42787),c=r(77347).f;i&&n({target:"Object",proto:!0,forced:s},{__lookupGetter__:function(t){var e,r=o(this),n=a(t);do{if(e=c(r,n))return e.get}while(r=l(r))}})},9391:(t,e,r)=>{"use strict";var n=r(46518),i=r(96395),s=r(80550),o=r(79039),a=r(97751),l=r(94901),c=r(2293),h=r(93438),u=r(36840),d=s&&s.prototype;if(n({target:"Promise",proto:!0,real:!0,forced:!!s&&o((function(){d.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=c(this,a("Promise")),r=l(t);return this.then(r?function(r){return h(e,t()).then((function(){return r}))}:t,r?function(r){return h(e,t()).then((function(){throw r}))}:t)}}),!i&&l(s)){var p=a("Promise").prototype.finally;d.finally!==p&&u(d,"finally",p,{unsafe:!0})}},9539:(t,e,r)=>{"use strict";var n=r(69565),i=r(28551),s=r(55966);t.exports=function(t,e,r){var o,a;i(t);try{if(!(o=s(t,"return"))){if("throw"===e)throw r;return r}o=n(o,t)}catch(t){a=!0,o=t}if("throw"===e)throw r;if(a)throw o;return i(o),r}},9678:(t,e,r)=>{"use strict";var n=r(46518),i=r(37628),s=r(25397),o=r(6469),a=Array;n({target:"Array",proto:!0},{toReversed:function(){return i(s(this),a)}}),o("toReversed")},9730:(t,e,r)=>{"use strict";r(3995)},9868:(t,e,r)=>{"use strict";var n=r(46518),i=r(79504),s=r(91291),o=r(31240),a=r(72333),l=r(79039),c=RangeError,h=String,u=Math.floor,d=i(a),p=i("".slice),f=i(1..toFixed),m=function(t,e,r){return 0===e?r:e%2==1?m(t,e-1,r*t):m(t*t,e/2,r)},g=function(t,e,r){for(var n=-1,i=r;++n<6;)i+=e*t[n],t[n]=i%1e7,i=u(i/1e7)},A=function(t,e){for(var r=6,n=0;--r>=0;)n+=t[r],t[r]=u(n/e),n=n%e*1e7},y=function(t){for(var e=6,r="";--e>=0;)if(""!==r||0===e||0!==t[e]){var n=h(t[e]);r=""===r?n:r+d("0",7-n.length)+n}return r};n({target:"Number",proto:!0,forced:l((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!l((function(){f({})}))},{toFixed:function(t){var e,r,n,i,a=o(this),l=s(t),u=[0,0,0,0,0,0],f="",v="0";if(l<0||l>20)throw new c("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return h(a);if(a<0&&(f="-",a=-a),a>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(a*m(2,69,1))-69)<0?a*m(2,-e,1):a/m(2,e,1),r*=4503599627370496,(e=52-e)>0){for(g(u,0,r),n=l;n>=7;)g(u,1e7,0),n-=7;for(g(u,m(10,n,1),0),n=e-1;n>=23;)A(u,1<<23),n-=23;A(u,1<<n),g(u,1,1),A(u,2),v=y(u)}else g(u,0,r),g(u,1<<-e,0),v=y(u)+d("0",l);return l>0?f+((i=v.length)<=l?"0."+d("0",l-i)+v:p(v,0,i-l)+"."+p(v,i-l)):f+v}})},9920:(t,e,r)=>{"use strict";var n=r(46518),i=r(36639).forEach;n({target:"AsyncIterator",proto:!0,real:!0},{forEach:function(t){return i(this,t)}})},10149:(t,e,r)=>{"use strict";r(44732)},10255:(t,e,r)=>{"use strict";var n=r(46518),i=r(79504),s=Math.pow,o=s(2,-24),a=.0009765625,l=i(DataView.prototype.getUint16);n({target:"DataView",proto:!0},{getFloat16:function(t){var e,r,n,i;return r=(e=l(this,t,arguments.length>1&&arguments[1]))>>>15,i=1023&e,31==(n=e>>>10&31)?0===i?0===r?1/0:-1/0:NaN:0===n?i*(0===r?o:-o):s(2,n-15)*(0===r?1+i*a:-1-i*a)}})},10287:(t,e,r)=>{"use strict";r(46518)({target:"Object",stat:!0},{setPrototypeOf:r(52967)})},10298:(t,e,r)=>{"use strict";var n=r(22195),i=r(25397),s=r(38480).f,o=r(67680),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"Window"===n(t)?function(t){try{return s(t)}catch(t){return o(a)}}(t):s(i(t))}},10350:(t,e,r)=>{"use strict";var n=r(43724),i=r(39297),s=Function.prototype,o=n&&Object.getOwnPropertyDescriptor,a=i(s,"name"),l=a&&"something"===function(){}.name,c=a&&(!n||n&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},10436:(t,e,r)=>{"use strict";var n,i,s,o=r(46518),a=r(96395),l=r(38574),c=r(44576),h=r(69565),u=r(36840),d=r(52967),p=r(10687),f=r(87633),m=r(79306),g=r(94901),A=r(20034),y=r(90679),v=r(2293),x=r(59225).set,_=r(91955),w=r(90757),b=r(1103),E=r(18265),S=r(91181),M=r(80550),C=r(10916),T=r(36043),I="Promise",R=C.CONSTRUCTOR,P=C.REJECTION_EVENT,B=C.SUBCLASSING,L=S.getterFor(I),D=S.set,O=M&&M.prototype,N=M,F=O,U=c.TypeError,k=c.document,z=c.process,G=T.f,Q=G,V=!!(k&&k.createEvent&&c.dispatchEvent),j="unhandledrejection",H=function(t){var e;return!(!A(t)||!g(e=t.then))&&e},q=function(t,e){var r,n,i,s=e.value,o=1===e.state,a=o?t.ok:t.fail,l=t.resolve,c=t.reject,u=t.domain;try{a?(o||(2===e.rejection&&J(e),e.rejection=1),!0===a?r=s:(u&&u.enter(),r=a(s),u&&(u.exit(),i=!0)),r===t.promise?c(new U("Promise-chain cycle")):(n=H(r))?h(n,r,l,c):l(r)):c(s)}catch(t){u&&!i&&u.exit(),c(t)}},W=function(t,e){t.notified||(t.notified=!0,_((function(){for(var r,n=t.reactions;r=n.get();)q(r,t);t.notified=!1,e&&!t.rejection&&X(t)})))},Y=function(t,e,r){var n,i;V?((n=k.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),c.dispatchEvent(n)):n={promise:e,reason:r},!P&&(i=c["on"+t])?i(n):t===j&&w("Unhandled promise rejection",r)},X=function(t){h(x,c,(function(){var e,r=t.facade,n=t.value;if($(t)&&(e=b((function(){l?z.emit("unhandledRejection",n,r):Y(j,r,n)})),t.rejection=l||$(t)?2:1,e.error))throw e.value}))},$=function(t){return 1!==t.rejection&&!t.parent},J=function(t){h(x,c,(function(){var e=t.facade;l?z.emit("rejectionHandled",e):Y("rejectionhandled",e,t.value)}))},K=function(t,e,r){return function(n){t(e,n,r)}},Z=function(t,e,r){t.done||(t.done=!0,r&&(t=r),t.value=e,t.state=2,W(t,!0))},tt=function(t,e,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===e)throw new U("Promise can't be resolved itself");var n=H(e);n?_((function(){var r={done:!1};try{h(n,e,K(tt,r,t),K(Z,r,t))}catch(e){Z(r,e,t)}})):(t.value=e,t.state=1,W(t,!1))}catch(e){Z({done:!1},e,t)}}};if(R&&(F=(N=function(t){y(this,F),m(t),h(n,this);var e=L(this);try{t(K(tt,e),K(Z,e))}catch(t){Z(e,t)}}).prototype,(n=function(t){D(this,{type:I,done:!1,notified:!1,parent:!1,reactions:new E,rejection:!1,state:0,value:null})}).prototype=u(F,"then",(function(t,e){var r=L(this),n=G(v(this,N));return r.parent=!0,n.ok=!g(t)||t,n.fail=g(e)&&e,n.domain=l?z.domain:void 0,0===r.state?r.reactions.add(n):_((function(){q(n,r)})),n.promise})),i=function(){var t=new n,e=L(t);this.promise=t,this.resolve=K(tt,e),this.reject=K(Z,e)},T.f=G=function(t){return t===N||void 0===t?new i(t):Q(t)},!a&&g(M)&&O!==Object.prototype)){s=O.then,B||u(O,"then",(function(t,e){var r=this;return new N((function(t,e){h(s,r,t,e)})).then(t,e)}),{unsafe:!0});try{delete O.constructor}catch(t){}d&&d(O,F)}o({global:!0,constructor:!0,wrap:!0,forced:R},{Promise:N}),p(N,I,!1,!0),f(I)},10539:()=>{},10586:(t,e,r)=>{"use strict";var n=r(46518),i=r(59323),s=r(97751),o=r(18745);n({global:!0,forced:!0},{compositeSymbol:function(){return 1===arguments.length&&"string"==typeof arguments[0]?s("Symbol").for(arguments[0]):o(i,null,arguments).get("symbol",s("Symbol"))}})},10687:(t,e,r)=>{"use strict";var n=r(24913).f,i=r(39297),s=r(78227)("toStringTag");t.exports=function(t,e,r){t&&!r&&(t=t.prototype),t&&!i(t,s)&&n(t,s,{configurable:!0,value:e})}},10757:(t,e,r)=>{"use strict";var n=r(97751),i=r(94901),s=r(1625),o=r(7040),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=n("Symbol");return i(e)&&s(e.prototype,a(t))}},10838:(t,e,r)=>{"use strict";var n=r(46518),i=r(43839).findLast,s=r(6469);n({target:"Array",proto:!0},{findLast:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("findLast")},10916:(t,e,r)=>{"use strict";var n=r(44576),i=r(80550),s=r(94901),o=r(92796),a=r(33706),l=r(78227),c=r(84215),h=r(96395),u=r(39519),d=i&&i.prototype,p=l("species"),f=!1,m=s(n.PromiseRejectionEvent),g=o("Promise",(function(){var t=a(i),e=t!==String(i);if(!e&&66===u)return!0;if(h&&(!d.catch||!d.finally))return!0;if(!u||u<51||!/native code/.test(t)){var r=new i((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))};if((r.constructor={})[p]=n,!(f=r.then((function(){}))instanceof n))return!0}return!(e||"BROWSER"!==c&&"DENO"!==c||m)}));t.exports={CONSTRUCTOR:g,REJECTION_EVENT:m,SUBCLASSING:f}},11025:(t,e,r)=>{"use strict";r(52675),r(89463),r(66412),r(60193),r(92168),r(2259),r(86964),r(83142),r(83237),r(61833),r(67947),r(31073),r(45700),r(78125),r(20326),r(16280),r(76918),r(30067),r(4294),r(18107),r(28706),r(26835),r(88431),r(33771),r(2008),r(50113),r(48980),r(10838),r(13451),r(46449),r(78350),r(51629),r(23418),r(74423),r(25276),r(64346),r(23792),r(48598),r(8921),r(62062),r(31051),r(44114),r(72712),r(18863),r(94490),r(34782),r(15086),r(26910),r(87478),r(54554),r(9678),r(57145),r(71658),r(93514),r(30237),r(13609),r(11558),r(54743),r(46761),r(11745),r(38309),r(10255),r(3995),r(16573),r(78100),r(77936),r(61699),r(59089),r(91191),r(93515),r(1688),r(60739),r(89572),r(23288),r(36456),r(94170),r(48957),r(62010),r(55081),r(18111),r(29314),r(81148),r(22489),r(20116),r(30531),r(7588),r(49603),r(61701),r(18237),r(13579),r(54972),r(61806),r(33110),r(4731),r(36033),r(47072),r(93153),r(82326),r(36389),r(64444),r(8085),r(77762),r(65070),r(60605),r(4360),r(39469),r(72152),r(75376),r(56624),r(11367),r(5914),r(78553),r(98690),r(60479),r(70761),r(2892),r(45374),r(25428),r(32637),r(40150),r(59149),r(64601),r(44435),r(87220),r(25843),r(62337),r(9868),r(80630),r(69085),r(59904),r(17427),r(67945),r(84185),r(87607),r(5506),r(52811),r(53921),r(83851),r(81278),r(1480),r(40875),r(77691),r(78347),r(29908),r(94052),r(94003),r(221),r(79432),r(9220),r(7904),r(93967),r(63548),r(93941),r(10287),r(26099),r(16034),r(78459),r(58940),r(3362),r(96167),r(93518),r(9391),r(31689),r(14628),r(39796),r(60825),r(87411),r(21211),r(40888),r(9065),r(86565),r(32812),r(84634),r(71137),r(30985),r(34268),r(34873),r(15472),r(84864),r(96069),r(57465),r(27495),r(69479),r(87745),r(90906),r(38781),r(31415),r(17642),r(58004),r(33853),r(45876),r(32475),r(15024),r(31698),r(67357),r(23860),r(99449),r(27337),r(21699),r(42043),r(47764),r(71761),r(28543),r(35701),r(68156),r(85906),r(42781),r(25440),r(79978),r(5746),r(90744),r(11392),r(50375),r(67438),r(42762),r(39202),r(43359),r(89907),r(11898),r(35490),r(5745),r(94298),r(60268),r(69546),r(20781),r(50778),r(89195),r(46276),r(48718),r(16308),r(34594),r(29833),r(46594),r(72107),r(95477),r(21489),r(22134),r(3690),r(61740),r(48140),r(81630),r(72170),r(75044),r(69539),r(31694),r(89955),r(21903),r(91134),r(33206),r(48345),r(44496),r(66651),r(12887),r(19369),r(66812),r(8995),r(52568),r(31575),r(36072),r(88747),r(28845),r(29423),r(57301),r(373),r(86614),r(41405),r(37467),r(44732),r(33684),r(79577),r(88267),r(73772),r(30958),r(49806),r(39687),r(26148),r(34504),r(87370),r(31659),r(95115),r(17978),r(46058),r(6986),r(88177),r(80081),r(45490),r(17656),r(55105),r(54151),r(72400),r(73677),r(61938),r(85901),r(26280),r(27913),r(47801),r(82750),r(33811),r(84847),r(74147),r(29150),r(74648),r(17333),r(3064),r(32679),r(9920),r(46967),r(45182),r(41393),r(14905),r(8159),r(39320),r(86994),r(24964),r(7467),r(10586),r(47390),r(81332),r(9730),r(56192),r(66557),r(26615),r(83354),r(98225),r(37998),r(16401),r(18640),r(62480),r(98992),r(51098),r(81218),r(16037),r(64743),r(23215),r(54520),r(72577),r(30670),r(3949),r(45882),r(76913),r(81454),r(75289),r(8872),r(37550),r(27413),r(41795),r(81730),r(67296),r(58335),r(33981),r(71517),r(11379),r(93777),r(14190),r(12359),r(86097),r(39172),r(27254),r(7036),r(57019),r(17273),r(81723),r(27415),r(19929),r(37583),r(55122),r(16385),r(20230),r(57268),r(79733),r(19717),r(52231),r(58179),r(30456),r(74017),r(79310),r(16453),r(83062),r(96369),r(15637),r(2848),r(24842),r(24746),r(33454),r(6660),r(4235),r(15941),r(82101),r(79926),r(84208),r(91550),r(9156),r(48918),r(66090),r(2917),r(35874),r(47575),r(47628),r(43799),r(65186),r(42978),r(72527),r(79852),r(42376),r(40617),r(73067),r(66820),r(8288),r(37108),r(25509),r(65223),r(43375),r(60321),r(41927),r(11632),r(64377),r(49522),r(39225),r(66771),r(13972),r(12516),r(99209),r(68931),r(25714),r(52514),r(35694),r(52774),r(23283),r(49536),r(21926),r(17561),r(16864),r(66197),r(16215),r(78898),r(84114),r(74176),r(66337),r(44590),r(38344),r(12041),r(51755),r(81202),r(49604),r(43275),r(13070),r(87153),r(53032),r(53803),r(13976),r(30465),r(18999),r(42793),r(77208),r(73440),r(13195),r(51839),r(14037),r(47350),r(91706),r(96847),r(23241),r(43250),r(10149),r(67302),r(55871),r(24082),r(57051),r(27650),r(41549),r(49797),r(49631),r(35623),r(67348),r(26957),r(79732),r(35644),r(80805),r(73525),r(49634),r(83742),r(56422),r(82451),r(46270),r(2945),r(42207),r(23500),r(62953),r(55815),r(64979),r(79739),r(59848),r(122),r(13611),r(71678),r(76031),r(3296),r(2222),r(45781),r(27208),r(48408),r(14603),r(47566),r(98721),r(19167)},11029:(t,e)=>{"use strict";let r;function n(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/,"$1")+"/"}Object.defineProperty(e,"__esModule",{value:!0}),e.getBundleURL=e.getBaseURL=void 0,e.getBundleURL=function(){return r||(r=function(){try{throw new Error}catch(t){const e=(""+t.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(e)return n(e[0])}return"/"}()),r},e.getBaseURL=n},11056:(t,e,r)=>{"use strict";var n=r(24913).f;t.exports=function(t,e,r){r in t||n(t,r,{configurable:!0,get:function(){return e[r]},set:function(t){e[r]=t}})}},11367:(t,e,r)=>{"use strict";r(46518)({target:"Math",stat:!0},{log2:r(67787)})},11379:(t,e,r)=>{"use strict";var n=r(46518),i=r(36194),s=r(72248),o=s.get,a=s.has,l=s.set;n({target:"Map",proto:!0,real:!0,forced:!0},{emplace:function(t,e){var r,n,s=i(this);return a(s,t)?(r=o(s,t),"update"in e&&(r=e.update(r,t,s),l(s,t,r)),r):(n=e.insert(t,s),l(s,t,n),n)}})},11392:(t,e,r)=>{"use strict";var n,i=r(46518),s=r(27476),o=r(77347).f,a=r(18014),l=r(655),c=r(60511),h=r(67750),u=r(41436),d=r(96395),p=s("".slice),f=Math.min,m=u("startsWith");i({target:"String",proto:!0,forced:!(!d&&!m&&(n=o(String.prototype,"startsWith"),n&&!n.writable)||m)},{startsWith:function(t){var e=l(h(this));c(t);var r=a(f(arguments.length>1?arguments[1]:void 0,e.length)),n=l(t);return p(e,r,r+n.length)===n}})},11558:(t,e,r)=>{"use strict";var n=r(46518),i=r(39928),s=r(25397),o=Array;n({target:"Array",proto:!0},{with:function(t,e){return i(s(this),o,t,e)}})},11632:(t,e,r)=>{"use strict";var n=r(46518),i=r(76080),s=r(97080),o=r(94402),a=r(38469),l=o.Set,c=o.add;n({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=s(this),r=i(t,arguments.length>1?arguments[1]:void 0),n=new l;return a(e,(function(t){r(t,t,e)&&c(n,t)})),n}})},11677:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Extractor=void 0;const n=r(876);function i(t){const{scale:e,offset:r}=t,i=a(t);function s(t,e){return t.getUint8(i(e)+14)}function o(t,e){return t.getUint8(i(e)+15)}function l(t,e){return 31&o(t,e)}return{X:(t,s)=>n.Scale.unapply(t.getInt32(i(s),!0),e[0],r[0]),Y:(t,s)=>n.Scale.unapply(t.getInt32(i(s)+4,!0),e[1],r[1]),Z:(t,s)=>n.Scale.unapply(t.getInt32(i(s)+8,!0),e[2],r[2]),Intensity:(t,e)=>t.getUint16(i(e)+12,!0),ReturnNumber:(t,e)=>7&s(t,e),NumberOfReturns:(t,e)=>(56&s(t,e))>>3,ScanDirectionFlag:(t,e)=>(64&s(t,e))>>6,EdgeOfFlightLine:(t,e)=>(128&s(t,e))>>7,Classification:(t,e)=>{const r=l(t,e);return 12===r?0:r},Synthetic:(t,e)=>(32&o(t,e))>>5,KeyPoint:(t,e)=>(64&o(t,e))>>6,Withheld:(t,e)=>(128&o(t,e))>>7,Overlap:(t,e)=>12===l(t,e)?1:0,ScanAngle:(t,e)=>t.getInt8(i(e)+16),UserData:(t,e)=>t.getUint8(i(e)+17),PointSourceId:(t,e)=>t.getUint16(i(e)+18,!0)}}function s(t){const{scale:e,offset:r}=t,i=a(t);function s(t,e){return t.getUint8(i(e)+15)}return{X:(t,s)=>n.Scale.unapply(t.getInt32(i(s),!0),e[0],r[0]),Y:(t,s)=>n.Scale.unapply(t.getInt32(i(s)+4,!0),e[1],r[1]),Z:(t,s)=>n.Scale.unapply(t.getInt32(i(s)+8,!0),e[2],r[2]),Intensity:(t,e)=>t.getUint16(i(e)+12,!0),ReturnNumber:(t,e)=>15&t.getUint16(i(e)+14,!0),NumberOfReturns:(t,e)=>(240&t.getUint16(i(e)+14,!0))>>4,Synthetic:(t,e)=>1&s(t,e),KeyPoint:(t,e)=>(2&s(t,e))>>1,Withheld:(t,e)=>(4&s(t,e))>>2,Overlap:(t,e)=>(8&s(t,e))>>3,ScannerChannel:(t,e)=>(48&s(t,e))>>4,ScanDirectionFlag:(t,e)=>(64&s(t,e))>>6,EdgeOfFlightLine:(t,e)=>(128&s(t,e))>>7,Classification:(t,e)=>t.getUint8(i(e)+16),UserData:(t,e)=>t.getUint8(i(e)+17),ScanAngle:(t,e)=>.006*t.getInt16(i(e)+18,!0),PointSourceId:(t,e)=>t.getUint16(i(e)+20,!0),GpsTime:(t,e)=>t.getFloat64(i(e)+22,!0)}}function o(t){const e=a(t);return{...s(t),Red:(t,r)=>t.getUint16(e(r)+30,!0),Green:(t,r)=>t.getUint16(e(r)+32,!0),Blue:(t,r)=>t.getUint16(e(r)+34,!0)}}function a(t){const{pointDataRecordLength:e}=t;return function(t){return t*e}}e.Extractor={create:function(t,e=[]){const r=function(t,e){let r=function(t){switch(t){case 0:return 20;case 1:return 28;case 2:return 26;case 3:return 34;case 6:return 30;case 7:return 36;case 8:return 38;default:throw new Error(`Unsupported point data record format: ${t}`)}}(t.pointDataRecordFormat);return e.reduce(((e,i)=>{const s=r;r+=i.length;const o=function(t,e,{type:r,length:i}){const s=a(t);switch(r){case"signed":switch(i){case 1:return(t,r)=>t.getInt8(s(r)+e);case 2:return(t,r)=>t.getInt16(s(r)+e,!0);case 4:return(t,r)=>t.getInt32(s(r)+e,!0);case 8:return(t,r)=>(0,n.parseBigInt)(t.getBigInt64(s(r)+e,!0))}case"unsigned":switch(i){case 1:return(t,r)=>t.getUint8(s(r)+e);case 2:return(t,r)=>t.getUint16(s(r)+e,!0);case 4:return(t,r)=>t.getUint32(s(r)+e,!0);case 8:return(t,r)=>(0,n.parseBigInt)((0,n.getBigUint64)(t,s(r)+e,!0))}case"float":switch(i){case 4:return(t,r)=>t.getFloat32(s(r)+e,!0);case 8:return(t,r)=>t.getFloat64(s(r)+e,!0)}}}(t,s,i);if(!o)return e;return{...e,[i.name]:(t,e)=>n.Scale.unapply(o(t,e),i.scale,i.offset)}}),{})}(t,e);return{...(()=>{const{pointDataRecordFormat:e}=t;switch(e){case 0:return i(t);case 1:return function(t){const e=a(t);return{...i(t),GpsTime:(t,r)=>t.getFloat64(e(r)+20,!0)}}(t);case 2:return function(t){const e=a(t);return{...i(t),Red:(t,r)=>t.getUint16(e(r)+20,!0),Green:(t,r)=>t.getUint16(e(r)+22,!0),Blue:(t,r)=>t.getUint16(e(r)+24,!0)}}(t);case 3:return function(t){const e=a(t);return{...i(t),GpsTime:(t,r)=>t.getFloat64(e(r)+20,!0),Red:(t,r)=>t.getUint16(e(r)+28,!0),Green:(t,r)=>t.getUint16(e(r)+30,!0),Blue:(t,r)=>t.getUint16(e(r)+32,!0)}}(t);case 6:return s(t);case 7:return o(t);case 8:return function(t){const e=a(t);return{...o(t),Infrared:(t,r)=>t.getUint16(e(r)+36,!0)}}(t);default:throw new Error(`Unsupported point data record format: ${e}`)}})(),...r}}}},11745:(t,e,r)=>{"use strict";var n=r(46518),i=r(27476),s=r(79039),o=r(66346),a=r(28551),l=r(35610),c=r(18014),h=o.ArrayBuffer,u=o.DataView,d=u.prototype,p=i(h.prototype.slice),f=i(d.getUint8),m=i(d.setUint8);n({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:s((function(){return!new h(2).slice(1,void 0).byteLength}))},{slice:function(t,e){if(p&&void 0===e)return p(a(this),t);for(var r=a(this).byteLength,n=l(t,r),i=l(void 0===e?r:e,r),s=new h(c(i-n)),o=new u(this),d=new u(s),g=0;n<i;)m(d,g++,f(o,n++));return s}})},11854:function(t,e,r){"use strict";var n=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(i,s){function o(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(o,a)}l((n=n.apply(t,e||[])).next())}))},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.expose=e.isWorkerRuntime=e.Transfer=e.registerSerializer=void 0;const s=i(r(95409)),o=r(99278),a=r(66712),l=r(12781),c=i(r(64304));var h=r(99278);Object.defineProperty(e,"registerSerializer",{enumerable:!0,get:function(){return h.registerSerializer}});var u=r(66712);Object.defineProperty(e,"Transfer",{enumerable:!0,get:function(){return u.Transfer}}),e.isWorkerRuntime=c.default.isWorkerRuntime;let d=!1;const p=new Map,f=t=>t&&t.type===l.MasterMessageType.run,m=t=>s.default(t)||function(t){return t&&"object"==typeof t&&"function"==typeof t.subscribe}(t);function g(t){return a.isTransferDescriptor(t)?{payload:t.send,transferables:t.transferables}:{payload:t,transferables:void 0}}function A(t,e){const{payload:r,transferables:n}=g(e),i={type:l.WorkerMessageType.error,uid:t,error:o.serialize(r)};c.default.postMessageToMaster(i,n)}function y(t,e,r){const{payload:n,transferables:i}=g(r),s={type:l.WorkerMessageType.result,uid:t,complete:!!e||void 0,payload:n};c.default.postMessageToMaster(s,i)}function v(t){try{const e={type:l.WorkerMessageType.uncaughtError,error:o.serialize(t)};c.default.postMessageToMaster(e)}catch(e){console.error("Not reporting uncaught error back to master thread as it occured while reporting an uncaught error already.\nLatest error:",e,"\nOriginal error:",t)}}function x(t,e,r){return n(this,void 0,void 0,(function*(){let n;try{n=e(...r)}catch(e){return A(t,e)}const i=m(n)?"observable":"promise";if(function(t,e){const r={type:l.WorkerMessageType.running,uid:t,resultType:e};c.default.postMessageToMaster(r)}(t,i),m(n)){const e=n.subscribe((e=>y(t,!1,o.serialize(e))),(e=>{A(t,o.serialize(e)),p.delete(t)}),(()=>{y(t,!0),p.delete(t)}));p.set(t,e)}else try{const e=yield n;y(t,!0,o.serialize(e))}catch(e){A(t,o.serialize(e))}}))}e.expose=function(t){if(!c.default.isWorkerRuntime())throw Error("expose() called in the master thread.");if(d)throw Error("expose() called more than once. This is not possible. Pass an object to expose() if you want to expose multiple functions.");if(d=!0,"function"==typeof t)c.default.subscribeToMasterMessages((e=>{f(e)&&!e.method&&x(e.uid,t,e.args.map(o.deserialize))})),function(){const t={type:l.WorkerMessageType.init,exposed:{type:"function"}};c.default.postMessageToMaster(t)}();else{if("object"!=typeof t||!t)throw Error(`Invalid argument passed to expose(). Expected a function or an object, got: ${t}`);c.default.subscribeToMasterMessages((e=>{f(e)&&e.method&&x(e.uid,t[e.method],e.args.map(o.deserialize))})),function(t){const e={type:l.WorkerMessageType.init,exposed:{type:"module",methods:t}};c.default.postMessageToMaster(e)}(Object.keys(t).filter((e=>"function"==typeof t[e])))}c.default.subscribeToMasterMessages((t=>{if((e=t)&&e.type===l.MasterMessageType.cancel){const e=t.uid,r=p.get(e);r&&(r.unsubscribe(),p.delete(e))}var e}))},"undefined"!=typeof self&&"function"==typeof self.addEventListener&&c.default.isWorkerRuntime()&&(self.addEventListener("error",(t=>{setTimeout((()=>v(t.error||t)),250)})),self.addEventListener("unhandledrejection",(t=>{const e=t.reason;e&&"string"==typeof e.message&&setTimeout((()=>v(e)),250)}))),"undefined"!=typeof process&&"function"==typeof process.on&&c.default.isWorkerRuntime()&&(process.on("uncaughtException",(t=>{setTimeout((()=>v(t)),250)})),process.on("unhandledRejection",(t=>{t&&"string"==typeof t.message&&setTimeout((()=>v(t)),250)})))},11898:(t,e,r)=>{"use strict";var n=r(46518),i=r(77240);n({target:"String",proto:!0,forced:r(23061)("big")},{big:function(){return i(this,"big","","")}})},12041:(t,e,r)=>{"use strict";r(79978)},12211:(t,e,r)=>{"use strict";var n=r(79039);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},12359:(t,e,r)=>{"use strict";var n=r(46518),i=r(76080),s=r(36194),o=r(26223);n({target:"Map",proto:!0,real:!0,forced:!0},{find:function(t){var e=s(this),r=i(t,arguments.length>1?arguments[1]:void 0),n=o(e,(function(t,n){if(r(t,n,e))return{value:t}}),!0);return n&&n.value}})},12516:(t,e,r)=>{"use strict";var n=r(46518),i=r(69565),s=r(47650),o=r(64449);n({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){return i(o,this,s(t))}})},12586:(t,e,r)=>{"use strict";var n=r(97751),i=r(79504),s=n("Symbol"),o=s.keyFor,a=i(s.prototype.valueOf);t.exports=s.isRegisteredSymbol||function(t){try{return void 0!==o(a(t))}catch(t){return!1}}},12781:(t,e)=>{"use strict";var r,n;Object.defineProperty(e,"__esModule",{value:!0}),e.WorkerMessageType=e.MasterMessageType=void 0,(n=e.MasterMessageType||(e.MasterMessageType={})).cancel="cancel",n.run="run",(r=e.WorkerMessageType||(e.WorkerMessageType={})).error="error",r.init="init",r.result="result",r.running="running",r.uncaughtError="uncaughtError"},12865:(t,e,r)=>{"use strict";var n=r(79504),i=r(79306);t.exports=function(){return n(i(this))}},12887:(t,e,r)=>{"use strict";var n=r(44576),i=r(79039),s=r(79504),o=r(94644),a=r(23792),l=r(78227)("iterator"),c=n.Uint8Array,h=s(a.values),u=s(a.keys),d=s(a.entries),p=o.aTypedArray,f=o.exportTypedArrayMethod,m=c&&c.prototype,g=!i((function(){m[l].call([1])})),A=!!m&&m.values&&m[l]===m.values&&"values"===m.values.name,y=function(){return h(p(this))};f("entries",(function(){return d(p(this))}),g),f("keys",(function(){return u(p(this))}),g),f("values",y,g||!A,{name:"values"}),f(l,y,g||!A,{name:"values"})},13070:(t,e,r)=>{"use strict";r(46518)({target:"Symbol",stat:!0},{isRegisteredSymbol:r(12586)})},13195:(t,e,r)=>{"use strict";var n=r(97751),i=r(35548),s=r(8045),o=r(94644),a=r(35370),l=o.aTypedArrayConstructor;(0,o.exportTypedArrayStaticMethod)("fromAsync",(function(t){var e=this,r=arguments.length,o=r>1?arguments[1]:void 0,c=r>2?arguments[2]:void 0;return new(n("Promise"))((function(r){i(e),r(s(t,o,c))})).then((function(t){return a(l(e),t)}))}),!0)},13451:(t,e,r)=>{"use strict";var n=r(46518),i=r(43839).findLastIndex,s=r(6469);n({target:"Array",proto:!0},{findLastIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),s("findLastIndex")},13579:(t,e,r)=>{"use strict";var n=r(46518),i=r(72652),s=r(79306),o=r(28551),a=r(1767);n({target:"Iterator",proto:!0,real:!0},{some:function(t){o(this),s(t);var e=a(this),r=0;return i(e,(function(e,n){if(t(e,r++))return n()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},13609:(t,e,r)=>{"use strict";var n=r(46518),i=r(48981),s=r(26198),o=r(34527),a=r(84606),l=r(96837);n({target:"Array",proto:!0,arity:1,forced:1!==[].unshift(0)||!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}}()},{unshift:function(t){var e=i(this),r=s(e),n=arguments.length;if(n){l(r+n);for(var c=r;c--;){var h=c+n;c in e?e[h]=e[c]:a(e,h)}for(var u=0;u<n;u++)e[u]=arguments[u]}return o(e,r+n)}})},13611:(t,e,r)=>{"use strict";var n=r(46518),i=r(44576),s=r(62106),o=r(43724),a=TypeError,l=Object.defineProperty,c=i.self!==i;try{if(o){var h=Object.getOwnPropertyDescriptor(i,"self");!c&&h&&h.get&&h.enumerable||s(i,"self",{get:function(){return i},set:function(t){if(this!==i)throw new a("Illegal invocation");l(i,"self",{value:t,writable:!0,configurable:!0,enumerable:!0})},configurable:!0,enumerable:!0})}else n({global:!0,simple:!0,forced:c},{self:i})}catch(t){}},13709:(t,e,r)=>{"use strict";var n=r(82839).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},13763:(t,e,r)=>{"use strict";var n=r(82839);t.exports=/MSIE|Trident/.test(n)},13925:(t,e,r)=>{"use strict";var n=r(20034);t.exports=function(t){return n(t)||null===t}},13972:(t,e,r)=>{"use strict";r(33853)},13976:(t,e,r)=>{"use strict";r(70511)("matcher")},14037:(t,e,r)=>{"use strict";var n=r(94644),i=r(59213).filterReject,s=r(29948),o=n.aTypedArray;(0,n.exportTypedArrayMethod)("filterOut",(function(t){var e=i(o(this),t,arguments.length>1?arguments[1]:void 0);return s(this,e)}),!0)},14190:(t,e,r)=>{"use strict";var n=r(46518),i=r(76080),s=r(36194),o=r(72248),a=r(26223),l=o.Map,c=o.set;n({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(t){var e=s(this),r=i(t,arguments.length>1?arguments[1]:void 0),n=new l;return a(e,(function(t,i){r(t,i,e)&&c(n,i,t)})),n}})},14468:(t,e,r)=>{"use strict";var n=r(91181),i=r(33994),s=r(62529),o=r(64117),a=r(20034),l=r(62106),c=r(43724),h="Incorrect Iterator.range arguments",u="NumericRangeIterator",d=n.set,p=n.getterFor(u),f=RangeError,m=TypeError,g=i((function(t,e,r,n,i,s){if(typeof t!=n||e!==1/0&&e!==-1/0&&typeof e!=n)throw new m(h);if(t===1/0||t===-1/0)throw new f(h);var l,p=e>t,g=!1;if(void 0===r)l=void 0;else if(a(r))l=r.step,g=!!r.inclusive;else{if(typeof r!=n)throw new m(h);l=r}if(o(l)&&(l=p?s:-s),typeof l!=n)throw new m(h);if(l===1/0||l===-1/0||l===i&&t!==e)throw new f(h);d(this,{type:u,start:t,end:e,step:l,inclusive:g,hitsEnd:t!=t||e!=e||l!=l||e>t!=l>i,currentCount:i,zero:i}),c||(this.start=t,this.end=e,this.step=l,this.inclusive=g)}),u,(function(){var t=p(this);if(t.hitsEnd)return s(void 0,!0);var e=t.start,r=t.end,n=e+t.step*t.currentCount++;n===r&&(t.hitsEnd=!0);var i=t.inclusive;return(r>e?i?n>r:n>=r:i?r>n:r>=n)?(t.hitsEnd=!0,s(void 0,!0)):s(n,!1)})),A=function(t){l(g.prototype,t,{get:function(){return p(this)[t]},set:function(){},configurable:!0,enumerable:!1})};c&&(A("start"),A("end"),A("inclusive"),A("step")),t.exports=g},14528:(t,e,r)=>{"use strict";r.d(e,{A:()=>Ar});var n=6378137,i=.0066943799901413165,s=484813681109536e-20,o=Math.PI/2,a=1e-10,l=.017453292519943295,c=57.29577951308232,h=Math.PI/4,u=2*Math.PI,d=3.14159265359;const p={greenwich:0,lisbon:-9.131906111111,paris:2.337229166667,bogota:-74.080916666667,madrid:-3.687938888889,rome:12.452333333333,bern:7.439583333333,jakarta:106.807719444444,ferro:-17.666666666667,brussels:4.367975,stockholm:18.058277777778,athens:23.7163375,oslo:10.722916666667},f={mm:{to_meter:.001},cm:{to_meter:.01},ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937},fath:{to_meter:1.8288},kmi:{to_meter:1852},"us-ch":{to_meter:20.1168402336805},"us-mi":{to_meter:1609.34721869444},km:{to_meter:1e3},"ind-ft":{to_meter:.30479841},"ind-yd":{to_meter:.91439523},mi:{to_meter:1609.344},yd:{to_meter:.9144},ch:{to_meter:20.1168},link:{to_meter:.201168},dm:{to_meter:.1},in:{to_meter:.0254},"ind-ch":{to_meter:20.11669506},"us-in":{to_meter:.025400050800101},"us-yd":{to_meter:.914401828803658}};var m=/[\s_\-\/\(\)]/g;function g(t,e){if(t[e])return t[e];for(var r,n=Object.keys(t),i=e.toLowerCase().replace(m,""),s=-1;++s<n.length;)if((r=n[s]).toLowerCase().replace(m,"")===i)return t[r]}function A(t){var e,r,n,i={},s=t.split("+").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r=e.split("=");return r.push(!0),t[r[0].toLowerCase()]=r[1],t}),{}),o={proj:"projName",datum:"datumCode",rf:function(t){i.rf=parseFloat(t)},lat_0:function(t){i.lat0=t*l},lat_1:function(t){i.lat1=t*l},lat_2:function(t){i.lat2=t*l},lat_ts:function(t){i.lat_ts=t*l},lon_0:function(t){i.long0=t*l},lon_1:function(t){i.long1=t*l},lon_2:function(t){i.long2=t*l},alpha:function(t){i.alpha=parseFloat(t)*l},gamma:function(t){i.rectified_grid_angle=parseFloat(t)*l},lonc:function(t){i.longc=t*l},x_0:function(t){i.x0=parseFloat(t)},y_0:function(t){i.y0=parseFloat(t)},k_0:function(t){i.k0=parseFloat(t)},k:function(t){i.k0=parseFloat(t)},a:function(t){i.a=parseFloat(t)},b:function(t){i.b=parseFloat(t)},r:function(t){i.a=i.b=parseFloat(t)},r_a:function(){i.R_A=!0},zone:function(t){i.zone=parseInt(t,10)},south:function(){i.utmSouth=!0},towgs84:function(t){i.datum_params=t.split(",").map((function(t){return parseFloat(t)}))},to_meter:function(t){i.to_meter=parseFloat(t)},units:function(t){i.units=t;var e=g(f,t);e&&(i.to_meter=e.to_meter)},from_greenwich:function(t){i.from_greenwich=t*l},pm:function(t){var e=g(p,t);i.from_greenwich=(e||parseFloat(t))*l},nadgrids:function(t){"@null"===t?i.datumCode="none":i.nadgrids=t},axis:function(t){var e="ewnsud";3===t.length&&-1!==e.indexOf(t.substr(0,1))&&-1!==e.indexOf(t.substr(1,1))&&-1!==e.indexOf(t.substr(2,1))&&(i.axis=t)},approx:function(){i.approx=!0}};for(e in s)r=s[e],e in o?"function"==typeof(n=o[e])?n(r):i[n]=r:i[e]=r;return"string"==typeof i.datumCode&&"WGS84"!==i.datumCode&&(i.datumCode=i.datumCode.toLowerCase()),i}const y=class{static getId(t){const e=t.find((t=>Array.isArray(t)&&"ID"===t[0]));return e&&e.length>=3?{authority:e[1],code:parseInt(e[2],10)}:null}static convertUnit(t,e="unit"){if(!t||t.length<3)return{type:e,name:"unknown",conversion_factor:null};const r=t[1],n=parseFloat(t[2])||null,i=t.find((t=>Array.isArray(t)&&"ID"===t[0]));return{type:e,name:r,conversion_factor:n,id:i?{authority:i[1],code:parseInt(i[2],10)}:null}}static convertAxis(t){const e=t[1]||"Unknown";let r;const n=e.match(/^\((.)\)$/);if(n){const t=n[1].toUpperCase();if("E"===t)r="east";else if("N"===t)r="north";else{if("U"!==t)throw new Error(`Unknown axis abbreviation: ${t}`);r="up"}}else r=t[2]?t[2].toLowerCase():"unknown";const i=t.find((t=>Array.isArray(t)&&"ORDER"===t[0])),s=i?parseInt(i[1],10):null,o=t.find((t=>Array.isArray(t)&&("LENGTHUNIT"===t[0]||"ANGLEUNIT"===t[0]||"SCALEUNIT"===t[0])));return{name:e,direction:r,unit:this.convertUnit(o),order:s}}static extractAxes(t){return t.filter((t=>Array.isArray(t)&&"AXIS"===t[0])).map((t=>this.convertAxis(t))).sort(((t,e)=>(t.order||0)-(e.order||0)))}static convert(t,e={}){switch(t[0]){case"PROJCRS":e.type="ProjectedCRS",e.name=t[1],e.base_crs=t.find((t=>Array.isArray(t)&&"BASEGEOGCRS"===t[0]))?this.convert(t.find((t=>Array.isArray(t)&&"BASEGEOGCRS"===t[0]))):null,e.conversion=t.find((t=>Array.isArray(t)&&"CONVERSION"===t[0]))?this.convert(t.find((t=>Array.isArray(t)&&"CONVERSION"===t[0]))):null;const r=t.find((t=>Array.isArray(t)&&"CS"===t[0]));r&&(e.coordinate_system={type:r[1],axis:this.extractAxes(t)});const n=t.find((t=>Array.isArray(t)&&"LENGTHUNIT"===t[0]));if(n){const t=this.convertUnit(n);e.coordinate_system.unit=t}e.id=this.getId(t);break;case"BASEGEOGCRS":case"GEOGCRS":e.type="GeographicCRS",e.name=t[1];const i=t.find((t=>Array.isArray(t)&&("DATUM"===t[0]||"ENSEMBLE"===t[0])));if(i){const r=this.convert(i);"ENSEMBLE"===i[0]?e.datum_ensemble=r:e.datum=r;const n=t.find((t=>Array.isArray(t)&&"PRIMEM"===t[0]));n&&"Greenwich"!==n[1]&&(r.prime_meridian={name:n[1],longitude:parseFloat(n[2])})}e.coordinate_system={type:"ellipsoidal",axis:this.extractAxes(t)},e.id=this.getId(t);break;case"DATUM":e.type="GeodeticReferenceFrame",e.name=t[1],e.ellipsoid=t.find((t=>Array.isArray(t)&&"ELLIPSOID"===t[0]))?this.convert(t.find((t=>Array.isArray(t)&&"ELLIPSOID"===t[0]))):null;break;case"ENSEMBLE":e.type="DatumEnsemble",e.name=t[1],e.members=t.filter((t=>Array.isArray(t)&&"MEMBER"===t[0])).map((t=>({type:"DatumEnsembleMember",name:t[1],id:this.getId(t)})));const s=t.find((t=>Array.isArray(t)&&"ENSEMBLEACCURACY"===t[0]));s&&(e.accuracy=parseFloat(s[1]));const o=t.find((t=>Array.isArray(t)&&"ELLIPSOID"===t[0]));o&&(e.ellipsoid=this.convert(o)),e.id=this.getId(t);break;case"ELLIPSOID":e.type="Ellipsoid",e.name=t[1],e.semi_major_axis=parseFloat(t[2]),e.inverse_flattening=parseFloat(t[3]),t.find((t=>Array.isArray(t)&&"LENGTHUNIT"===t[0]))&&this.convert(t.find((t=>Array.isArray(t)&&"LENGTHUNIT"===t[0])),e);break;case"CONVERSION":e.type="Conversion",e.name=t[1],e.method=t.find((t=>Array.isArray(t)&&"METHOD"===t[0]))?this.convert(t.find((t=>Array.isArray(t)&&"METHOD"===t[0]))):null,e.parameters=t.filter((t=>Array.isArray(t)&&"PARAMETER"===t[0])).map((t=>this.convert(t)));break;case"METHOD":e.type="Method",e.name=t[1],e.id=this.getId(t);break;case"PARAMETER":e.type="Parameter",e.name=t[1],e.value=parseFloat(t[2]),e.unit=this.convertUnit(t.find((t=>Array.isArray(t)&&("LENGTHUNIT"===t[0]||"ANGLEUNIT"===t[0]||"SCALEUNIT"===t[0])))),e.id=this.getId(t);break;case"BOUNDCRS":e.type="BoundCRS";const a=t.find((t=>Array.isArray(t)&&"SOURCECRS"===t[0]));if(a){const t=a.find((t=>Array.isArray(t)));e.source_crs=t?this.convert(t):null}const l=t.find((t=>Array.isArray(t)&&"TARGETCRS"===t[0]));if(l){const t=l.find((t=>Array.isArray(t)));e.target_crs=t?this.convert(t):null}const c=t.find((t=>Array.isArray(t)&&"ABRIDGEDTRANSFORMATION"===t[0]));e.transformation=c?this.convert(c):null;break;case"ABRIDGEDTRANSFORMATION":if(e.type="Transformation",e.name=t[1],e.method=t.find((t=>Array.isArray(t)&&"METHOD"===t[0]))?this.convert(t.find((t=>Array.isArray(t)&&"METHOD"===t[0]))):null,e.parameters=t.filter((t=>Array.isArray(t)&&("PARAMETER"===t[0]||"PARAMETERFILE"===t[0]))).map((t=>"PARAMETER"===t[0]?this.convert(t):"PARAMETERFILE"===t[0]?{name:t[1],value:t[2],id:{authority:"EPSG",code:8656}}:void 0)),7===e.parameters.length){const t=e.parameters[6];"Scale difference"===t.name&&(t.value=Math.round(1e12*(t.value-1))/1e6)}e.id=this.getId(t);break;case"AXIS":e.coordinate_system||(e.coordinate_system={type:"unspecified",axis:[]}),e.coordinate_system.axis.push(this.convertAxis(t));break;case"LENGTHUNIT":const h=this.convertUnit(t,"LinearUnit");e.coordinate_system&&e.coordinate_system.axis&&e.coordinate_system.axis.forEach((t=>{t.unit||(t.unit=h)})),h.conversion_factor&&1!==h.conversion_factor&&e.semi_major_axis&&(e.semi_major_axis={value:e.semi_major_axis,unit:h});break;default:e.keyword=t[0]}return e}},v=class extends y{static convert(t,e={}){return super.convert(t,e),e.coordinate_system&&"Cartesian"===e.coordinate_system.subtype&&delete e.coordinate_system,e.usage&&delete e.usage,e}},x=class extends y{static convert(t,e={}){super.convert(t,e);const r=t.find((t=>Array.isArray(t)&&"CS"===t[0]));r&&(e.coordinate_system={subtype:r[1],axis:this.extractAxes(t)});const n=t.find((t=>Array.isArray(t)&&"USAGE"===t[0]));if(n){const t=n.find((t=>Array.isArray(t)&&"SCOPE"===t[0])),r=n.find((t=>Array.isArray(t)&&"AREA"===t[0])),i=n.find((t=>Array.isArray(t)&&"BBOX"===t[0]));e.usage={},t&&(e.usage.scope=t[1]),r&&(e.usage.area=r[1]),i&&(e.usage.bbox=i.slice(1))}return e}};var _=1,w=/\s/,b=/[A-Za-z]/,E=/[A-Za-z84_]/,S=/[,\]]/,M=/[\d\.E\-\+]/;function C(t){if("string"!=typeof t)throw new Error("not a string");this.text=t.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=_}function T(t,e,r){Array.isArray(e)&&(r.unshift(e),e=null);var n=e?{}:t,i=r.reduce((function(t,e){return I(e,t),t}),n);e&&(t[e]=i)}function I(t,e){if(Array.isArray(t)){var r=t.shift();if("PARAMETER"===r&&(r=t.shift()),1===t.length)return Array.isArray(t[0])?(e[r]={},void I(t[0],e[r])):void(e[r]=t[0]);if(t.length)if("TOWGS84"!==r){if("AXIS"===r)return r in e||(e[r]=[]),void e[r].push(t);var n;switch(Array.isArray(r)||(e[r]={}),r){case"UNIT":case"PRIMEM":case"VERT_DATUM":return e[r]={name:t[0].toLowerCase(),convert:t[1]},void(3===t.length&&I(t[2],e[r]));case"SPHEROID":case"ELLIPSOID":return e[r]={name:t[0],a:t[1],rf:t[2]},void(4===t.length&&I(t[3],e[r]));case"EDATUM":case"ENGINEERINGDATUM":case"LOCAL_DATUM":case"DATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":return t[0]=["name",t[0]],void T(e,r,t);case"COMPD_CS":case"COMPOUNDCRS":case"FITTED_CS":case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"ENGCRS":case"ENGINEERINGCRS":return t[0]=["name",t[0]],T(e,r,t),void(e[r].type=r);default:for(n=-1;++n<t.length;)if(!Array.isArray(t[n]))return I(t,e[r]);return T(e,r,t)}}else e[r]=t;else e[r]=!0}else e[t]=!0}function R(t){return.017453292519943295*t}function P(t){const e=(t.projName||"").toLowerCase().replace(/_/g," ");t.long0||!t.longc||"albers conic equal area"!==e&&"lambert azimuthal equal area"!==e||(t.long0=t.longc),t.lat_ts||!t.lat1||"stereographic south pole"!==e&&"polar stereographic (variant b)"!==e?t.lat_ts||!t.lat0||"polar stereographic"!==e&&"polar stereographic (variant a)"!==e||(t.lat_ts=t.lat0,t.lat0=R(t.lat0>0?90:-90),delete t.lat1):(t.lat0=R(t.lat1>0?90:-90),t.lat_ts=t.lat1,delete t.lat1)}function B(t){let e={units:null,to_meter:void 0};return"string"==typeof t?(e.units=t.toLowerCase(),"metre"===e.units&&(e.units="meter"),"meter"===e.units&&(e.to_meter=1)):t&&t.name&&(e.units=t.name.toLowerCase(),"metre"===e.units&&(e.units="meter"),e.to_meter=t.conversion_factor),e}function L(t){return"object"==typeof t?t.value*t.unit.conversion_factor:t}function D(t,e){t.ellipsoid.radius?(e.a=t.ellipsoid.radius,e.rf=0):(e.a=L(t.ellipsoid.semi_major_axis),void 0!==t.ellipsoid.inverse_flattening?e.rf=t.ellipsoid.inverse_flattening:void 0!==t.ellipsoid.semi_major_axis&&void 0!==t.ellipsoid.semi_minor_axis&&(e.rf=e.a/(e.a-L(t.ellipsoid.semi_minor_axis))))}function O(t,e={}){return t&&"object"==typeof t?"BoundCRS"===t.type?(O(t.source_crs,e),t.transformation&&(t.transformation.method&&"NTv2"===t.transformation.method.name?e.nadgrids=t.transformation.parameters[0].value:e.datum_params=t.transformation.parameters.map((t=>t.value))),e):(Object.keys(t).forEach((r=>{const n=t[r];if(null!==n)switch(r){case"name":if(e.srsCode)break;e.name=n,e.srsCode=n;break;case"type":"GeographicCRS"===n?e.projName="longlat":"ProjectedCRS"===n&&t.conversion&&t.conversion.method&&(e.projName=t.conversion.method.name);break;case"datum":case"datum_ensemble":n.ellipsoid&&(e.ellps=n.ellipsoid.name,D(n,e)),n.prime_meridian&&(e.from_greenwich=n.prime_meridian.longitude*Math.PI/180);break;case"ellipsoid":e.ellps=n.name,D(n,e);break;case"prime_meridian":e.long0=(n.longitude||0)*Math.PI/180;break;case"coordinate_system":if(n.axis)if(e.axis=n.axis.map((t=>{const e=t.direction;if("east"===e)return"e";if("north"===e)return"n";if("west"===e)return"w";if("south"===e)return"s";throw new Error(`Unknown axis direction: ${e}`)})).join("")+"u",n.unit){const{units:t,to_meter:r}=B(n.unit);e.units=t,e.to_meter=r}else if(n.axis[0]&&n.axis[0].unit){const{units:t,to_meter:r}=B(n.axis[0].unit);e.units=t,e.to_meter=r}break;case"id":n.authority&&n.code&&(e.title=n.authority+":"+n.code);break;case"conversion":n.method&&n.method.name&&(e.projName=n.method.name),n.parameters&&n.parameters.forEach((t=>{const r=t.name.toLowerCase().replace(/\s+/g,"_"),n=t.value;t.unit&&t.unit.conversion_factor?e[r]=n*t.unit.conversion_factor:"degree"===t.unit?e[r]=n*Math.PI/180:e[r]=n}));break;case"unit":n.name&&(e.units=n.name.toLowerCase(),"metre"===e.units&&(e.units="meter")),n.conversion_factor&&(e.to_meter=n.conversion_factor);break;case"base_crs":O(n,e),e.datumCode=n.id?n.id.authority+"_"+n.id.code:n.name}})),void 0!==e.latitude_of_false_origin&&(e.lat0=e.latitude_of_false_origin),void 0!==e.longitude_of_false_origin&&(e.long0=e.longitude_of_false_origin),void 0!==e.latitude_of_standard_parallel&&(e.lat0=e.latitude_of_standard_parallel,e.lat1=e.latitude_of_standard_parallel),void 0!==e.latitude_of_1st_standard_parallel&&(e.lat1=e.latitude_of_1st_standard_parallel),void 0!==e.latitude_of_2nd_standard_parallel&&(e.lat2=e.latitude_of_2nd_standard_parallel),void 0!==e.latitude_of_projection_centre&&(e.lat0=e.latitude_of_projection_centre),void 0!==e.longitude_of_projection_centre&&(e.longc=e.longitude_of_projection_centre),void 0!==e.easting_at_false_origin&&(e.x0=e.easting_at_false_origin),void 0!==e.northing_at_false_origin&&(e.y0=e.northing_at_false_origin),void 0!==e.latitude_of_natural_origin&&(e.lat0=e.latitude_of_natural_origin),void 0!==e.longitude_of_natural_origin&&(e.long0=e.longitude_of_natural_origin),void 0!==e.longitude_of_origin&&(e.long0=e.longitude_of_origin),void 0!==e.false_easting&&(e.x0=e.false_easting),e.easting_at_projection_centre&&(e.x0=e.easting_at_projection_centre),void 0!==e.false_northing&&(e.y0=e.false_northing),e.northing_at_projection_centre&&(e.y0=e.northing_at_projection_centre),void 0!==e.standard_parallel_1&&(e.lat1=e.standard_parallel_1),void 0!==e.standard_parallel_2&&(e.lat2=e.standard_parallel_2),void 0!==e.scale_factor_at_natural_origin&&(e.k0=e.scale_factor_at_natural_origin),void 0!==e.scale_factor_at_projection_centre&&(e.k0=e.scale_factor_at_projection_centre),void 0!==e.scale_factor_on_pseudo_standard_parallel&&(e.k0=e.scale_factor_on_pseudo_standard_parallel),void 0!==e.azimuth&&(e.alpha=e.azimuth),void 0!==e.azimuth_at_projection_centre&&(e.alpha=e.azimuth_at_projection_centre),e.angle_from_rectified_to_skew_grid&&(e.rectified_grid_angle=e.angle_from_rectified_to_skew_grid),P(e),e):t}C.prototype.readCharicter=function(){var t=this.text[this.place++];if(4!==this.state)for(;w.test(t);){if(this.place>=this.text.length)return;t=this.text[this.place++]}switch(this.state){case _:return this.neutral(t);case 2:return this.keyword(t);case 4:return this.quoted(t);case 5:return this.afterquote(t);case 3:return this.number(t);case-1:return}},C.prototype.afterquote=function(t){if('"'===t)return this.word+='"',void(this.state=4);if(S.test(t))return this.word=this.word.trim(),void this.afterItem(t);throw new Error("havn't handled \""+t+'" in afterquote yet, index '+this.place)},C.prototype.afterItem=function(t){return","===t?(null!==this.word&&this.currentObject.push(this.word),this.word=null,void(this.state=_)):"]"===t?(this.level--,null!==this.word&&(this.currentObject.push(this.word),this.word=null),this.state=_,this.currentObject=this.stack.pop(),void(this.currentObject||(this.state=-1))):void 0},C.prototype.number=function(t){if(!M.test(t)){if(S.test(t))return this.word=parseFloat(this.word),void this.afterItem(t);throw new Error("havn't handled \""+t+'" in number yet, index '+this.place)}this.word+=t},C.prototype.quoted=function(t){'"'!==t?this.word+=t:this.state=5},C.prototype.keyword=function(t){if(E.test(t))this.word+=t;else{if("["===t){var e=[];return e.push(this.word),this.level++,null===this.root?this.root=e:this.currentObject.push(e),this.stack.push(this.currentObject),this.currentObject=e,void(this.state=_)}if(!S.test(t))throw new Error("havn't handled \""+t+'" in keyword yet, index '+this.place);this.afterItem(t)}},C.prototype.neutral=function(t){if(b.test(t))return this.word=t,void(this.state=2);if('"'===t)return this.word="",void(this.state=4);if(M.test(t))return this.word=t,void(this.state=3);if(!S.test(t))throw new Error("havn't handled \""+t+'" in neutral yet, index '+this.place);this.afterItem(t)},C.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(-1===this.state)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};var N=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function F(t){for(var e=Object.keys(t),r=0,n=e.length;r<n;++r){var i=e[r];-1!==N.indexOf(i)&&U(t[i]),"object"==typeof t[i]&&F(t[i])}}function U(t){if(t.AUTHORITY){var e=Object.keys(t.AUTHORITY)[0];e&&e in t.AUTHORITY&&(t.title=e+":"+t.AUTHORITY[e])}if("GEOGCS"===t.type?t.projName="longlat":"LOCAL_CS"===t.type?(t.projName="identity",t.local=!0):"object"==typeof t.PROJECTION?t.projName=Object.keys(t.PROJECTION)[0]:t.projName=t.PROJECTION,t.AXIS){for(var r="",n=0,i=t.AXIS.length;n<i;++n){var s=[t.AXIS[n][0].toLowerCase(),t.AXIS[n][1].toLowerCase()];-1!==s[0].indexOf("north")||("y"===s[0]||"lat"===s[0])&&"north"===s[1]?r+="n":-1!==s[0].indexOf("south")||("y"===s[0]||"lat"===s[0])&&"south"===s[1]?r+="s":-1!==s[0].indexOf("east")||("x"===s[0]||"lon"===s[0])&&"east"===s[1]?r+="e":-1===s[0].indexOf("west")&&("x"!==s[0]&&"lon"!==s[0]||"west"!==s[1])||(r+="w")}2===r.length&&(r+="u"),3===r.length&&(t.axis=r)}t.UNIT&&(t.units=t.UNIT.name.toLowerCase(),"metre"===t.units&&(t.units="meter"),t.UNIT.convert&&("GEOGCS"===t.type?t.DATUM&&t.DATUM.SPHEROID&&(t.to_meter=t.UNIT.convert*t.DATUM.SPHEROID.a):t.to_meter=t.UNIT.convert));var o=t.GEOGCS;function a(e){return e*(t.to_meter||1)}"GEOGCS"===t.type&&(o=t),o&&(o.DATUM?t.datumCode=o.DATUM.name.toLowerCase():t.datumCode=o.name.toLowerCase(),"d_"===t.datumCode.slice(0,2)&&(t.datumCode=t.datumCode.slice(2)),"new_zealand_1949"===t.datumCode&&(t.datumCode="nzgd49"),"wgs_1984"!==t.datumCode&&"world_geodetic_system_1984"!==t.datumCode||("Mercator_Auxiliary_Sphere"===t.PROJECTION&&(t.sphere=!0),t.datumCode="wgs84"),"belge_1972"===t.datumCode&&(t.datumCode="rnb72"),o.DATUM&&o.DATUM.SPHEROID&&(t.ellps=o.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),"international"===t.ellps.toLowerCase().slice(0,13)&&(t.ellps="intl"),t.a=o.DATUM.SPHEROID.a,t.rf=parseFloat(o.DATUM.SPHEROID.rf,10)),o.DATUM&&o.DATUM.TOWGS84&&(t.datum_params=o.DATUM.TOWGS84),~t.datumCode.indexOf("osgb_1936")&&(t.datumCode="osgb36"),~t.datumCode.indexOf("osni_1952")&&(t.datumCode="osni52"),(~t.datumCode.indexOf("tm65")||~t.datumCode.indexOf("geodetic_datum_of_1965"))&&(t.datumCode="ire65"),"ch1903+"===t.datumCode&&(t.datumCode="ch1903"),~t.datumCode.indexOf("israel")&&(t.datumCode="isr93")),t.b&&!isFinite(t.b)&&(t.b=t.a),t.rectified_grid_angle&&(t.rectified_grid_angle=R(t.rectified_grid_angle)),[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",R],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",R],["x0","false_easting",a],["y0","false_northing",a],["long0","central_meridian",R],["lat0","latitude_of_origin",R],["lat0","standard_parallel_1",R],["lat1","standard_parallel_1",R],["lat2","standard_parallel_2",R],["azimuth","Azimuth"],["alpha","azimuth",R],["srsCode","name"]].forEach((function(e){return function(t,e){var r=e[0],n=e[1];!(r in t)&&n in t&&(t[r]=t[n],3===e.length&&(t[r]=e[2](t[r])))}(t,e)})),P(t)}function k(t){if("object"==typeof t)return O(t);const e=function(t){const e=t.toUpperCase();return e.includes("PROJCRS")||e.includes("GEOGCRS")||e.includes("BOUNDCRS")||e.includes("VERTCRS")||e.includes("LENGTHUNIT")||e.includes("ANGLEUNIT")||e.includes("SCALEUNIT")?"WKT2":(e.includes("PROJCS")||e.includes("GEOGCS")||e.includes("LOCAL_CS")||e.includes("VERT_CS")||e.includes("UNIT"),"WKT1")}(t);var r=new C(t).output();if("WKT2"===e)return O(function(t){const e=function(t){return t.find((t=>Array.isArray(t)&&"USAGE"===t[0]))?"2019":(t.find((t=>Array.isArray(t)&&"CS"===t[0]))||"BOUNDCRS"===t[0]||"PROJCRS"===t[0]||t[0],"2015")}(t);return("2019"===e?x:v).convert(t)}(r));var n=r[0],i={};return I(r,i),F(i),i[n]}function z(t){var e=this;if(2===arguments.length){var r=arguments[1];"string"==typeof r?"+"===r.charAt(0)?z[t]=A(arguments[1]):z[t]=k(arguments[1]):z[t]=r}else if(1===arguments.length){if(Array.isArray(t))return t.map((function(t){return Array.isArray(t)?z.apply(e,t):z(t)}));if("string"==typeof t){if(t in z)return z[t]}else"EPSG"in t?z["EPSG:"+t.EPSG]=t:"ESRI"in t?z["ESRI:"+t.ESRI]=t:"IAU2000"in t?z["IAU2000:"+t.IAU2000]=t:console.log(t);return}}!function(t){t("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),t("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),t("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");for(var e=1;e<=60;++e)t("EPSG:"+(32600+e),"+proj=utm +zone="+e+" +datum=WGS84 +units=m"),t("EPSG:"+(32700+e),"+proj=utm +zone="+e+" +south +datum=WGS84 +units=m");t.WGS84=t["EPSG:4326"],t["EPSG:3785"]=t["EPSG:3857"],t.GOOGLE=t["EPSG:3857"],t["EPSG:900913"]=t["EPSG:3857"],t["EPSG:102113"]=t["EPSG:3857"]}(z);const G=z;var Q=["3857","900913","3785","102113"];function V(t,e){var r,n;if(t=t||{},!e)return t;for(n in e)void 0!==(r=e[n])&&(t[n]=r);return t}function j(t,e,r){var n=t*e;return r/Math.sqrt(1-n*n)}function H(t){return t<0?-1:1}function q(t){return Math.abs(t)<=d?t:t-H(t)*u}function W(t,e,r){var n=t*r,i=.5*t;return n=Math.pow((1-n)/(1+n),i),Math.tan(.5*(o-e))/n}function Y(t,e){for(var r,n,i=.5*t,s=o-2*Math.atan(e),a=0;a<=15;a++)if(r=t*Math.sin(s),s+=n=o-2*Math.atan(e*Math.pow((1-r)/(1+r),i))-s,Math.abs(n)<=1e-10)return s;return-9999}function X(t){return t}var $=[{init:function(){var t=this.b/this.a;this.es=1-t*t,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=j(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)},forward:function(t){var e,r,n=t.x,i=t.y;if(i*c>90&&i*c<-90&&n*c>180&&n*c<-180)return null;if(Math.abs(Math.abs(i)-o)<=a)return null;if(this.sphere)e=this.x0+this.a*this.k0*q(n-this.long0),r=this.y0+this.a*this.k0*Math.log(Math.tan(h+.5*i));else{var s=Math.sin(i),l=W(this.e,i,s);e=this.x0+this.a*this.k0*q(n-this.long0),r=this.y0-this.a*this.k0*Math.log(l)}return t.x=e,t.y=r,t},inverse:function(t){var e,r,n=t.x-this.x0,i=t.y-this.y0;if(this.sphere)r=o-2*Math.atan(Math.exp(-i/(this.a*this.k0)));else{var s=Math.exp(-i/(this.a*this.k0));if(-9999===(r=Y(this.e,s)))return null}return e=q(this.long0+n/(this.a*this.k0)),t.x=e,t.y=r,t},names:["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","Mercator_Variant_A","merc"]},{init:function(){},forward:X,inverse:X,names:["longlat","identity"]}],J={},K=[];function Z(t,e){var r=K.length;return t.names?(K[r]=t,t.names.forEach((function(t){J[t.toLowerCase()]=r})),this):(console.log(e),!0)}function tt(t){return t.replace(/[-\(\)\s]+/g," ").trim().replace(/ /g,"_")}const et={start:function(){$.forEach(Z)},add:Z,get:function(t){if(!t)return!1;var e=t.toLowerCase();return void 0!==J[e]&&K[J[e]]||(e=tt(e))in J&&K[J[e]]?K[J[e]]:void 0}},rt={MERIT:{a:6378137,rf:298.257,ellipseName:"MERIT 1983"},SGS85:{a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"},GRS80:{a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"},IAU76:{a:6378140,rf:298.257,ellipseName:"IAU 1976"},airy:{a:6377563.396,b:6356256.91,ellipseName:"Airy 1830"},APL4:{a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"},NWL9D:{a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"},mod_airy:{a:6377340.189,b:6356034.446,ellipseName:"Modified Airy"},andrae:{a:6377104.43,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"},aust_SA:{a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"},GRS67:{a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"},bessel:{a:6377397.155,rf:299.1528128,ellipseName:"Bessel 1841"},bess_nam:{a:6377483.865,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"},clrk66:{a:6378206.4,b:6356583.8,ellipseName:"Clarke 1866"},clrk80:{a:6378249.145,rf:293.4663,ellipseName:"Clarke 1880 mod."},clrk80ign:{a:6378249.2,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"},clrk58:{a:6378293.645208759,rf:294.2606763692654,ellipseName:"Clarke 1858"},CPM:{a:6375738.7,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"},delmbr:{a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"},engelis:{a:6378136.05,rf:298.2566,ellipseName:"Engelis 1985"},evrst30:{a:6377276.345,rf:300.8017,ellipseName:"Everest 1830"},evrst48:{a:6377304.063,rf:300.8017,ellipseName:"Everest 1948"},evrst56:{a:6377301.243,rf:300.8017,ellipseName:"Everest 1956"},evrst69:{a:6377295.664,rf:300.8017,ellipseName:"Everest 1969"},evrstSS:{a:6377298.556,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"},fschr60:{a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"},fschr60m:{a:6378155,rf:298.3,ellipseName:"Fischer 1960"},fschr68:{a:6378150,rf:298.3,ellipseName:"Fischer 1968"},helmert:{a:6378200,rf:298.3,ellipseName:"Helmert 1906"},hough:{a:6378270,rf:297,ellipseName:"Hough"},intl:{a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"},kaula:{a:6378163,rf:298.24,ellipseName:"Kaula 1961"},lerch:{a:6378139,rf:298.257,ellipseName:"Lerch 1979"},mprts:{a:6397300,rf:191,ellipseName:"Maupertius 1738"},new_intl:{a:6378157.5,b:6356772.2,ellipseName:"New International 1967"},plessis:{a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"},krass:{a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"},SEasia:{a:6378155,b:6356773.3205,ellipseName:"Southeast Asia"},walbeck:{a:6376896,b:6355834.8467,ellipseName:"Walbeck"},WGS60:{a:6378165,rf:298.3,ellipseName:"WGS 60"},WGS66:{a:6378145,rf:298.25,ellipseName:"WGS 66"},WGS7:{a:6378135,rf:298.26,ellipseName:"WGS 72"},WGS84:{a:6378137,rf:298.257223563,ellipseName:"WGS 84"},sphere:{a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"}},nt=rt.WGS84;var it={wgs84:{towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},ch1903:{towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},ggrs87:{towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},nad83:{towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},nad27:{nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},potsdam:{towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},carthage:{towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},hermannskogel:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"},mgi:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"},osni52:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"},ire65:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},rassadiran:{towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},nzgd49:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},osgb36:{towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Ordnance Survey of Great Britain 1936"},s_jtsk:{towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},beduaram:{towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},gunung_segara:{towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},rnb72:{towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"},EPSG_5451:{towgs84:"6.41,-49.05,-11.28,1.5657,0.5242,6.9718,-5.7649"},IGNF_LURESG:{towgs84:"-192.986,13.673,-39.309,-0.4099,-2.9332,2.6881,0.43"},EPSG_4614:{towgs84:"-119.4248,-303.65872,-11.00061,1.164298,0.174458,1.096259,3.657065"},EPSG_4615:{towgs84:"-494.088,-312.129,279.877,-1.423,-1.013,1.59,-0.748"},ESRI_37241:{towgs84:"-76.822,257.457,-12.817,2.136,-0.033,-2.392,-0.031"},ESRI_37249:{towgs84:"-440.296,58.548,296.265,1.128,10.202,4.559,-0.438"},ESRI_37245:{towgs84:"-511.151,-181.269,139.609,1.05,2.703,1.798,3.071"},EPSG_4178:{towgs84:"24.9,-126.4,-93.2,-0.063,-0.247,-0.041,1.01"},EPSG_4622:{towgs84:"-472.29,-5.63,-304.12,0.4362,-0.8374,0.2563,1.8984"},EPSG_4625:{towgs84:"126.93,547.94,130.41,-2.7867,5.1612,-0.8584,13.8227"},EPSG_5252:{towgs84:"0.023,0.036,-0.068,0.00176,0.00912,-0.01136,0.00439"},EPSG_4314:{towgs84:"597.1,71.4,412.1,0.894,0.068,-1.563,7.58"},EPSG_4282:{towgs84:"-178.3,-316.7,-131.5,5.278,6.077,10.979,19.166"},EPSG_4231:{towgs84:"-83.11,-97.38,-117.22,0.0276,-0.2167,0.2147,0.1218"},EPSG_4274:{towgs84:"-230.994,102.591,25.199,0.633,-0.239,0.9,1.95"},EPSG_4134:{towgs84:"-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.71006"},EPSG_4254:{towgs84:"18.38,192.45,96.82,0.056,-0.142,-0.2,-0.0013"},EPSG_4159:{towgs84:"-194.513,-63.978,-25.759,-3.4027,3.756,-3.352,-0.9175"},EPSG_4687:{towgs84:"0.072,-0.507,-0.245,0.0183,-0.0003,0.007,-0.0093"},EPSG_4227:{towgs84:"-83.58,-397.54,458.78,-17.595,-2.847,4.256,3.225"},EPSG_4746:{towgs84:"599.4,72.4,419.2,-0.062,-0.022,-2.723,6.46"},EPSG_4745:{towgs84:"612.4,77,440.2,-0.054,0.057,-2.797,2.55"},EPSG_6311:{towgs84:"8.846,-4.394,-1.122,-0.00237,-0.146528,0.130428,0.783926"},EPSG_4289:{towgs84:"565.7381,50.4018,465.2904,-1.91514,1.60363,-9.09546,4.07244"},EPSG_4230:{towgs84:"-68.863,-134.888,-111.49,-0.53,-0.14,0.57,-3.4"},EPSG_4154:{towgs84:"-123.02,-158.95,-168.47"},EPSG_4156:{towgs84:"570.8,85.7,462.8,4.998,1.587,5.261,3.56"},EPSG_4299:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4179:{towgs84:"33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84"},EPSG_4313:{towgs84:"-106.8686,52.2978,-103.7239,0.3366,-0.457,1.8422,-1.2747"},EPSG_4194:{towgs84:"163.511,127.533,-159.789"},EPSG_4195:{towgs84:"105,326,-102.5"},EPSG_4196:{towgs84:"-45,417,-3.5"},EPSG_4611:{towgs84:"-162.619,-276.959,-161.764,0.067753,-2.243649,-1.158827,-1.094246"},EPSG_4633:{towgs84:"137.092,131.66,91.475,-1.9436,-11.5993,-4.3321,-7.4824"},EPSG_4641:{towgs84:"-408.809,366.856,-412.987,1.8842,-0.5308,2.1655,-121.0993"},EPSG_4643:{towgs84:"-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7002"},EPSG_4300:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4188:{towgs84:"482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15"},EPSG_4660:{towgs84:"982.6087,552.753,-540.873,32.39344,-153.25684,-96.2266,16.805"},EPSG_4662:{towgs84:"97.295,-263.247,310.882,-1.5999,0.8386,3.1409,13.3259"},EPSG_3906:{towgs84:"577.88891,165.22205,391.18289,4.9145,-0.94729,-13.05098,7.78664"},EPSG_4307:{towgs84:"-209.3622,-87.8162,404.6198,0.0046,3.4784,0.5805,-1.4547"},EPSG_6892:{towgs84:"-76.269,-16.683,68.562,-6.275,10.536,-4.286,-13.686"},EPSG_4690:{towgs84:"221.597,152.441,176.523,2.403,1.3893,0.884,11.4648"},EPSG_4691:{towgs84:"218.769,150.75,176.75,3.5231,2.0037,1.288,10.9817"},EPSG_4629:{towgs84:"72.51,345.411,79.241,-1.5862,-0.8826,-0.5495,1.3653"},EPSG_4630:{towgs84:"165.804,216.213,180.26,-0.6251,-0.4515,-0.0721,7.4111"},EPSG_4692:{towgs84:"217.109,86.452,23.711,0.0183,-0.0003,0.007,-0.0093"},EPSG_9333:{towgs84:"0,0,0,-8.393,0.749,-10.276,0"},EPSG_9059:{towgs84:"0,0,0"},EPSG_4312:{towgs84:"601.705,84.263,485.227,4.7354,1.3145,5.393,-2.3887"},EPSG_4123:{towgs84:"-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496"},EPSG_4309:{towgs84:"-124.45,183.74,44.64,-0.4384,0.5446,-0.9706,-2.1365"},ESRI_104106:{towgs84:"-283.088,-70.693,117.445,-1.157,0.059,-0.652,-4.058"},EPSG_4281:{towgs84:"-219.247,-73.802,269.529"},EPSG_4322:{towgs84:"0,0,4.5"},EPSG_4324:{towgs84:"0,0,1.9"},EPSG_4284:{towgs84:"43.822,-108.842,-119.585,1.455,-0.761,0.737,0.549"},EPSG_4277:{towgs84:"446.448,-125.157,542.06,0.15,0.247,0.842,-20.489"},EPSG_4207:{towgs84:"-282.1,-72.2,120,-1.529,0.145,-0.89,-4.46"},EPSG_4688:{towgs84:"347.175,1077.618,2623.677,33.9058,-70.6776,9.4013,186.0647"},EPSG_4689:{towgs84:"410.793,54.542,80.501,-2.5596,-2.3517,-0.6594,17.3218"},EPSG_4720:{towgs84:"0,0,4.5"},EPSG_4273:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},EPSG_4240:{towgs84:"204.64,834.74,293.8"},EPSG_4817:{towgs84:"278.3,93,474.5,7.889,0.05,-6.61,6.21"},ESRI_104131:{towgs84:"426.62,142.62,460.09,4.98,4.49,-12.42,-17.1"},EPSG_4265:{towgs84:"-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68"},EPSG_4263:{towgs84:"-111.92,-87.85,114.5,1.875,0.202,0.219,0.032"},EPSG_4298:{towgs84:"-689.5937,623.84046,-65.93566,-0.02331,1.17094,-0.80054,5.88536"},EPSG_4270:{towgs84:"-253.4392,-148.452,386.5267,0.15605,0.43,-0.1013,-0.0424"},EPSG_4229:{towgs84:"-121.8,98.1,-10.7"},EPSG_4220:{towgs84:"-55.5,-348,-229.2"},EPSG_4214:{towgs84:"12.646,-155.176,-80.863"},EPSG_4232:{towgs84:"-345,3,223"},EPSG_4238:{towgs84:"-1.977,-13.06,-9.993,0.364,0.254,0.689,-1.037"},EPSG_4168:{towgs84:"-170,33,326"},EPSG_4131:{towgs84:"199,931,318.9"},EPSG_4152:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_5228:{towgs84:"572.213,85.334,461.94,4.9732,1.529,5.2484,3.5378"},EPSG_8351:{towgs84:"485.021,169.465,483.839,7.786342,4.397554,4.102655,0"},EPSG_4683:{towgs84:"-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06"},EPSG_4133:{towgs84:"0,0,0"},EPSG_7373:{towgs84:"0.819,-0.5762,-1.6446,-0.00378,-0.03317,0.00318,0.0693"},EPSG_9075:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9072:{towgs84:"-0.9102,2.0141,0.5602,0.029039,0.010065,0.010101,0"},EPSG_9294:{towgs84:"1.16835,-1.42001,-2.24431,-0.00822,-0.05508,0.01818,0.23388"},EPSG_4212:{towgs84:"-267.434,173.496,181.814,-13.4704,8.7154,7.3926,14.7492"},EPSG_4191:{towgs84:"-44.183,-0.58,-38.489,2.3867,2.7072,-3.5196,-8.2703"},EPSG_4237:{towgs84:"52.684,-71.194,-13.975,-0.312,-0.1063,-0.3729,1.0191"},EPSG_4740:{towgs84:"-1.08,-0.27,-0.9"},EPSG_4124:{towgs84:"419.3836,99.3335,591.3451,0.850389,1.817277,-7.862238,-0.99496"},EPSG_5681:{towgs84:"584.9636,107.7175,413.8067,1.1155,0.2824,-3.1384,7.9922"},EPSG_4141:{towgs84:"23.772,17.49,17.859,-0.3132,-1.85274,1.67299,-5.4262"},EPSG_4204:{towgs84:"-85.645,-273.077,-79.708,2.289,-1.421,2.532,3.194"},EPSG_4319:{towgs84:"226.702,-193.337,-35.371,-2.229,-4.391,9.238,0.9798"},EPSG_4200:{towgs84:"24.82,-131.21,-82.66"},EPSG_4130:{towgs84:"0,0,0"},EPSG_4127:{towgs84:"-82.875,-57.097,-156.768,-2.158,1.524,-0.982,-0.359"},EPSG_4149:{towgs84:"674.374,15.056,405.346"},EPSG_4617:{towgs84:"-0.991,1.9072,0.5129,1.25033e-7,4.6785e-8,5.6529e-8,0"},EPSG_4663:{towgs84:"-210.502,-66.902,-48.476,2.094,-15.067,-5.817,0.485"},EPSG_4664:{towgs84:"-211.939,137.626,58.3,-0.089,0.251,0.079,0.384"},EPSG_4665:{towgs84:"-105.854,165.589,-38.312,-0.003,-0.026,0.024,-0.048"},EPSG_4666:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},EPSG_4756:{towgs84:"-192.873,-39.382,-111.202,-0.00205,-0.0005,0.00335,0.0188"},EPSG_4723:{towgs84:"-179.483,-69.379,-27.584,-7.862,8.163,6.042,-13.925"},EPSG_4726:{towgs84:"8.853,-52.644,180.304,-0.393,-2.323,2.96,-24.081"},EPSG_4267:{towgs84:"-8.0,160.0,176.0"},EPSG_5365:{towgs84:"-0.16959,0.35312,0.51846,0.03385,-0.16325,0.03446,0.03693"},EPSG_4218:{towgs84:"304.5,306.5,-318.1"},EPSG_4242:{towgs84:"-33.722,153.789,94.959,-8.581,-4.478,4.54,8.95"},EPSG_4216:{towgs84:"-292.295,248.758,429.447,4.9971,2.99,6.6906,1.0289"},ESRI_104105:{towgs84:"631.392,-66.551,481.442,1.09,-4.445,-4.487,-4.43"},ESRI_104129:{towgs84:"0,0,0"},EPSG_4673:{towgs84:"174.05,-25.49,112.57"},EPSG_4202:{towgs84:"-124,-60,154"},EPSG_4203:{towgs84:"-117.763,-51.51,139.061,0.292,0.443,0.277,-0.191"},EPSG_3819:{towgs84:"595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408"},EPSG_8694:{towgs84:"-93.799,-132.737,-219.073,-1.844,0.648,-6.37,-0.169"},EPSG_4145:{towgs84:"275.57,676.78,229.6"},EPSG_4283:{towgs84:"61.55,-10.87,-40.19,39.4924,32.7221,32.8979,-9.994"},EPSG_4317:{towgs84:"2.3287,-147.0425,-92.0802,-0.3092483,0.32482185,0.49729934,5.68906266"},EPSG_4272:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993"},EPSG_4248:{towgs84:"-307.7,265.3,-363.5"},EPSG_5561:{towgs84:"24,-121,-76"},EPSG_5233:{towgs84:"-0.293,766.95,87.713,0.195704,1.695068,3.473016,-0.039338"},ESRI_104130:{towgs84:"-86,-98,-119"},ESRI_104102:{towgs84:"682,-203,480"},ESRI_37207:{towgs84:"7,-10,-26"},EPSG_4675:{towgs84:"59.935,118.4,-10.871"},ESRI_104109:{towgs84:"-89.121,-348.182,260.871"},ESRI_104112:{towgs84:"-185.583,-230.096,281.361"},ESRI_104113:{towgs84:"25.1,-275.6,222.6"},IGNF_WGS72G:{towgs84:"0,12,6"},IGNF_NTFG:{towgs84:"-168,-60,320"},IGNF_EFATE57G:{towgs84:"-127,-769,472"},IGNF_PGP50G:{towgs84:"324.8,153.6,172.1"},IGNF_REUN47G:{towgs84:"94,-948,-1262"},IGNF_CSG67G:{towgs84:"-186,230,110"},IGNF_GUAD48G:{towgs84:"-467,-16,-300"},IGNF_TAHI51G:{towgs84:"162,117,154"},IGNF_TAHAAG:{towgs84:"65,342,77"},IGNF_NUKU72G:{towgs84:"84,274,65"},IGNF_PETRELS72G:{towgs84:"365,194,166"},IGNF_WALL78G:{towgs84:"253,-133,-127"},IGNF_MAYO50G:{towgs84:"-382,-59,-262"},IGNF_TANNAG:{towgs84:"-139,-967,436"},IGNF_IGN72G:{towgs84:"-13,-348,292"},IGNF_ATIGG:{towgs84:"1118,23,66"},IGNF_FANGA84G:{towgs84:"150.57,158.33,118.32"},IGNF_RUSAT84G:{towgs84:"202.13,174.6,-15.74"},IGNF_KAUE70G:{towgs84:"126.74,300.1,-75.49"},IGNF_MOP90G:{towgs84:"-10.8,-1.8,12.77"},IGNF_MHPF67G:{towgs84:"338.08,212.58,-296.17"},IGNF_TAHI79G:{towgs84:"160.61,116.05,153.69"},IGNF_ANAA92G:{towgs84:"1.5,3.84,4.81"},IGNF_MARQUI72G:{towgs84:"330.91,-13.92,58.56"},IGNF_APAT86G:{towgs84:"143.6,197.82,74.05"},IGNF_TUBU69G:{towgs84:"237.17,171.61,-77.84"},IGNF_STPM50G:{towgs84:"11.363,424.148,373.13"},EPSG_4150:{towgs84:"674.374,15.056,405.346"},EPSG_4754:{towgs84:"-208.4058,-109.8777,-2.5764"},ESRI_104101:{towgs84:"374,150,588"},EPSG_4693:{towgs84:"0,-0.15,0.68"},EPSG_6207:{towgs84:"293.17,726.18,245.36"},EPSG_4153:{towgs84:"-133.63,-157.5,-158.62"},EPSG_4132:{towgs84:"-241.54,-163.64,396.06"},EPSG_4221:{towgs84:"-154.5,150.7,100.4"},EPSG_4266:{towgs84:"-80.7,-132.5,41.1"},EPSG_4193:{towgs84:"-70.9,-151.8,-41.4"},EPSG_5340:{towgs84:"-0.41,0.46,-0.35"},EPSG_4246:{towgs84:"-294.7,-200.1,525.5"},EPSG_4318:{towgs84:"-3.2,-5.7,2.8"},EPSG_4121:{towgs84:"-199.87,74.79,246.62"},EPSG_4223:{towgs84:"-260.1,5.5,432.2"},EPSG_4158:{towgs84:"-0.465,372.095,171.736"},EPSG_4285:{towgs84:"-128.16,-282.42,21.93"},EPSG_4613:{towgs84:"-404.78,685.68,45.47"},EPSG_4607:{towgs84:"195.671,332.517,274.607"},EPSG_4475:{towgs84:"-381.788,-57.501,-256.673"},EPSG_4208:{towgs84:"-157.84,308.54,-146.6"},EPSG_4743:{towgs84:"70.995,-335.916,262.898"},EPSG_4710:{towgs84:"-323.65,551.39,-491.22"},EPSG_7881:{towgs84:"-0.077,0.079,0.086"},EPSG_4682:{towgs84:"283.729,735.942,261.143"},EPSG_4739:{towgs84:"-156,-271,-189"},EPSG_4679:{towgs84:"-80.01,253.26,291.19"},EPSG_4750:{towgs84:"-56.263,16.136,-22.856"},EPSG_4644:{towgs84:"-10.18,-350.43,291.37"},EPSG_4695:{towgs84:"-103.746,-9.614,-255.95"},EPSG_4292:{towgs84:"-355,21,72"},EPSG_4302:{towgs84:"-61.702,284.488,472.052"},EPSG_4143:{towgs84:"-124.76,53,466.79"},EPSG_4606:{towgs84:"-153,153,307"},EPSG_4699:{towgs84:"-770.1,158.4,-498.2"},EPSG_4247:{towgs84:"-273.5,110.6,-357.9"},EPSG_4160:{towgs84:"8.88,184.86,106.69"},EPSG_4161:{towgs84:"-233.43,6.65,173.64"},EPSG_9251:{towgs84:"-9.5,122.9,138.2"},EPSG_9253:{towgs84:"-78.1,101.6,133.3"},EPSG_4297:{towgs84:"-198.383,-240.517,-107.909"},EPSG_4269:{towgs84:"0,0,0"},EPSG_4301:{towgs84:"-147,506,687"},EPSG_4618:{towgs84:"-59,-11,-52"},EPSG_4612:{towgs84:"0,0,0"},EPSG_4678:{towgs84:"44.585,-131.212,-39.544"},EPSG_4250:{towgs84:"-130,29,364"},EPSG_4144:{towgs84:"214,804,268"},EPSG_4147:{towgs84:"-17.51,-108.32,-62.39"},EPSG_4259:{towgs84:"-254.1,-5.36,-100.29"},EPSG_4164:{towgs84:"-76,-138,67"},EPSG_4211:{towgs84:"-378.873,676.002,-46.255"},EPSG_4182:{towgs84:"-422.651,-172.995,84.02"},EPSG_4224:{towgs84:"-143.87,243.37,-33.52"},EPSG_4225:{towgs84:"-205.57,168.77,-4.12"},EPSG_5527:{towgs84:"-67.35,3.88,-38.22"},EPSG_4752:{towgs84:"98,390,-22"},EPSG_4310:{towgs84:"-30,190,89"},EPSG_9248:{towgs84:"-192.26,65.72,132.08"},EPSG_4680:{towgs84:"124.5,-63.5,-281"},EPSG_4701:{towgs84:"-79.9,-158,-168.9"},EPSG_4706:{towgs84:"-146.21,112.63,4.05"},EPSG_4805:{towgs84:"682,-203,480"},EPSG_4201:{towgs84:"-165,-11,206"},EPSG_4210:{towgs84:"-157,-2,-299"},EPSG_4183:{towgs84:"-104,167,-38"},EPSG_4139:{towgs84:"11,72,-101"},EPSG_4668:{towgs84:"-86,-98,-119"},EPSG_4717:{towgs84:"-2,151,181"},EPSG_4732:{towgs84:"102,52,-38"},EPSG_4280:{towgs84:"-377,681,-50"},EPSG_4209:{towgs84:"-138,-105,-289"},EPSG_4261:{towgs84:"31,146,47"},EPSG_4658:{towgs84:"-73,46,-86"},EPSG_4721:{towgs84:"265.025,384.929,-194.046"},EPSG_4222:{towgs84:"-136,-108,-292"},EPSG_4601:{towgs84:"-255,-15,71"},EPSG_4602:{towgs84:"725,685,536"},EPSG_4603:{towgs84:"72,213.7,93"},EPSG_4605:{towgs84:"9,183,236"},EPSG_4621:{towgs84:"137,248,-430"},EPSG_4657:{towgs84:"-28,199,5"},EPSG_4316:{towgs84:"103.25,-100.4,-307.19"},EPSG_4642:{towgs84:"-13,-348,292"},EPSG_4698:{towgs84:"145,-187,103"},EPSG_4192:{towgs84:"-206.1,-174.7,-87.7"},EPSG_4311:{towgs84:"-265,120,-358"},EPSG_4135:{towgs84:"58,-283,-182"},ESRI_104138:{towgs84:"198,-226,-347"},EPSG_4245:{towgs84:"-11,851,5"},EPSG_4142:{towgs84:"-125,53,467"},EPSG_4213:{towgs84:"-106,-87,188"},EPSG_4253:{towgs84:"-133,-77,-51"},EPSG_4129:{towgs84:"-132,-110,-335"},EPSG_4713:{towgs84:"-77,-128,142"},EPSG_4239:{towgs84:"217,823,299"},EPSG_4146:{towgs84:"295,736,257"},EPSG_4155:{towgs84:"-83,37,124"},EPSG_4165:{towgs84:"-173,253,27"},EPSG_4672:{towgs84:"175,-38,113"},EPSG_4236:{towgs84:"-637,-549,-203"},EPSG_4251:{towgs84:"-90,40,88"},EPSG_4271:{towgs84:"-2,374,172"},EPSG_4175:{towgs84:"-88,4,101"},EPSG_4716:{towgs84:"298,-304,-375"},EPSG_4315:{towgs84:"-23,259,-9"},EPSG_4744:{towgs84:"-242.2,-144.9,370.3"},EPSG_4244:{towgs84:"-97,787,86"},EPSG_4293:{towgs84:"616,97,-251"},EPSG_4714:{towgs84:"-127,-769,472"},EPSG_4736:{towgs84:"260,12,-147"},EPSG_6883:{towgs84:"-235,-110,393"},EPSG_6894:{towgs84:"-63,176,185"},EPSG_4205:{towgs84:"-43,-163,45"},EPSG_4256:{towgs84:"41,-220,-134"},EPSG_4262:{towgs84:"639,405,60"},EPSG_4604:{towgs84:"174,359,365"},EPSG_4169:{towgs84:"-115,118,426"},EPSG_4620:{towgs84:"-106,-129,165"},EPSG_4184:{towgs84:"-203,141,53"},EPSG_4616:{towgs84:"-289,-124,60"},EPSG_9403:{towgs84:"-307,-92,127"},EPSG_4684:{towgs84:"-133,-321,50"},EPSG_4708:{towgs84:"-491,-22,435"},EPSG_4707:{towgs84:"114,-116,-333"},EPSG_4709:{towgs84:"145,75,-272"},EPSG_4712:{towgs84:"-205,107,53"},EPSG_4711:{towgs84:"124,-234,-25"},EPSG_4718:{towgs84:"230,-199,-752"},EPSG_4719:{towgs84:"211,147,111"},EPSG_4724:{towgs84:"208,-435,-229"},EPSG_4725:{towgs84:"189,-79,-202"},EPSG_4735:{towgs84:"647,1777,-1124"},EPSG_4722:{towgs84:"-794,119,-298"},EPSG_4728:{towgs84:"-307,-92,127"},EPSG_4734:{towgs84:"-632,438,-609"},EPSG_4727:{towgs84:"912,-58,1227"},EPSG_4729:{towgs84:"185,165,42"},EPSG_4730:{towgs84:"170,42,84"},EPSG_4733:{towgs84:"276,-57,149"},ESRI_37218:{towgs84:"230,-199,-752"},ESRI_37240:{towgs84:"-7,215,225"},ESRI_37221:{towgs84:"252,-209,-751"},ESRI_4305:{towgs84:"-123,-206,219"},ESRI_104139:{towgs84:"-73,-247,227"},EPSG_4748:{towgs84:"51,391,-36"},EPSG_4219:{towgs84:"-384,664,-48"},EPSG_4255:{towgs84:"-333,-222,114"},EPSG_4257:{towgs84:"-587.8,519.75,145.76"},EPSG_4646:{towgs84:"-963,510,-359"},EPSG_6881:{towgs84:"-24,-203,268"},EPSG_6882:{towgs84:"-183,-15,273"},EPSG_4715:{towgs84:"-104,-129,239"},IGNF_RGF93GDD:{towgs84:"0,0,0"},IGNF_RGM04GDD:{towgs84:"0,0,0"},IGNF_RGSPM06GDD:{towgs84:"0,0,0"},IGNF_RGTAAF07GDD:{towgs84:"0,0,0"},IGNF_RGFG95GDD:{towgs84:"0,0,0"},IGNF_RGNCG:{towgs84:"0,0,0"},IGNF_RGPFGDD:{towgs84:"0,0,0"},IGNF_ETRS89G:{towgs84:"0,0,0"},IGNF_RGR92GDD:{towgs84:"0,0,0"},EPSG_4173:{towgs84:"0,0,0"},EPSG_4180:{towgs84:"0,0,0"},EPSG_4619:{towgs84:"0,0,0"},EPSG_4667:{towgs84:"0,0,0"},EPSG_4075:{towgs84:"0,0,0"},EPSG_6706:{towgs84:"0,0,0"},EPSG_7798:{towgs84:"0,0,0"},EPSG_4661:{towgs84:"0,0,0"},EPSG_4669:{towgs84:"0,0,0"},EPSG_8685:{towgs84:"0,0,0"},EPSG_4151:{towgs84:"0,0,0"},EPSG_9702:{towgs84:"0,0,0"},EPSG_4758:{towgs84:"0,0,0"},EPSG_4761:{towgs84:"0,0,0"},EPSG_4765:{towgs84:"0,0,0"},EPSG_8997:{towgs84:"0,0,0"},EPSG_4023:{towgs84:"0,0,0"},EPSG_4670:{towgs84:"0,0,0"},EPSG_4694:{towgs84:"0,0,0"},EPSG_4148:{towgs84:"0,0,0"},EPSG_4163:{towgs84:"0,0,0"},EPSG_4167:{towgs84:"0,0,0"},EPSG_4189:{towgs84:"0,0,0"},EPSG_4190:{towgs84:"0,0,0"},EPSG_4176:{towgs84:"0,0,0"},EPSG_4659:{towgs84:"0,0,0"},EPSG_3824:{towgs84:"0,0,0"},EPSG_3889:{towgs84:"0,0,0"},EPSG_4046:{towgs84:"0,0,0"},EPSG_4081:{towgs84:"0,0,0"},EPSG_4558:{towgs84:"0,0,0"},EPSG_4483:{towgs84:"0,0,0"},EPSG_5013:{towgs84:"0,0,0"},EPSG_5264:{towgs84:"0,0,0"},EPSG_5324:{towgs84:"0,0,0"},EPSG_5354:{towgs84:"0,0,0"},EPSG_5371:{towgs84:"0,0,0"},EPSG_5373:{towgs84:"0,0,0"},EPSG_5381:{towgs84:"0,0,0"},EPSG_5393:{towgs84:"0,0,0"},EPSG_5489:{towgs84:"0,0,0"},EPSG_5593:{towgs84:"0,0,0"},EPSG_6135:{towgs84:"0,0,0"},EPSG_6365:{towgs84:"0,0,0"},EPSG_5246:{towgs84:"0,0,0"},EPSG_7886:{towgs84:"0,0,0"},EPSG_8431:{towgs84:"0,0,0"},EPSG_8427:{towgs84:"0,0,0"},EPSG_8699:{towgs84:"0,0,0"},EPSG_8818:{towgs84:"0,0,0"},EPSG_4757:{towgs84:"0,0,0"},EPSG_9140:{towgs84:"0,0,0"},EPSG_8086:{towgs84:"0,0,0"},EPSG_4686:{towgs84:"0,0,0"},EPSG_4737:{towgs84:"0,0,0"},EPSG_4702:{towgs84:"0,0,0"},EPSG_4747:{towgs84:"0,0,0"},EPSG_4749:{towgs84:"0,0,0"},EPSG_4674:{towgs84:"0,0,0"},EPSG_4755:{towgs84:"0,0,0"},EPSG_4759:{towgs84:"0,0,0"},EPSG_4762:{towgs84:"0,0,0"},EPSG_4763:{towgs84:"0,0,0"},EPSG_4764:{towgs84:"0,0,0"},EPSG_4166:{towgs84:"0,0,0"},EPSG_4170:{towgs84:"0,0,0"},EPSG_5546:{towgs84:"0,0,0"},EPSG_7844:{towgs84:"0,0,0"},EPSG_4818:{towgs84:"589,76,480"}};for(var st in it){var ot=it[st];ot.datumName&&(it[ot.datumName]=ot)}const at=it;var lt={};async function ct(t,e){for(var r=[],n=await e.getImageCount(),i=n-1;i>=0;i--){var s=await e.getImage(i),o=await s.readRasters(),a=[s.getWidth(),s.getHeight()],l=s.getBoundingBox().map(ut),c=[s.fileDirectory.ModelPixelScale[0],s.fileDirectory.ModelPixelScale[1]].map(ut),h=l[0]+(a[0]-1)*c[0],u=l[3]-(a[1]-1)*c[1],d=o[0],p=o[1],f=[];for(let t=a[1]-1;t>=0;t--)for(let e=a[0]-1;e>=0;e--){var m=t*a[0]+e;f.push([-dt(p[m]),dt(d[m])])}r.push({del:c,lim:a,ll:[-h,u],cvs:f})}var g={header:{nSubgrids:n},subgrids:r};return lt[t]=g,g}function ht(t){if(0===t.length)return null;var e="@"===t[0];return e&&(t=t.slice(1)),"null"===t?{name:"null",mandatory:!e,grid:null,isNull:!0}:{name:t,mandatory:!e,grid:lt[t]||null,isNull:!1}}function ut(t){return t*Math.PI/180}function dt(t){return t/3600*Math.PI/180}function pt(t,e,r){return String.fromCharCode.apply(null,new Uint8Array(t.buffer.slice(e,r)))}function ft(t){return t.map((function(t){return[dt(t.longitudeShift),dt(t.latitudeShift)]}))}function mt(t,e,r){return{name:pt(t,e+8,e+16).trim(),parent:pt(t,e+24,e+24+8).trim(),lowerLatitude:t.getFloat64(e+72,r),upperLatitude:t.getFloat64(e+88,r),lowerLongitude:t.getFloat64(e+104,r),upperLongitude:t.getFloat64(e+120,r),latitudeInterval:t.getFloat64(e+136,r),longitudeInterval:t.getFloat64(e+152,r),gridNodeCount:t.getInt32(e+168,r)}}function gt(t,e,r,n,i){var s=e+176,o=16;!1===i&&(o=8);for(var a=[],l=0;l<r.gridNodeCount;l++){var c={latitudeShift:t.getFloat32(s+l*o,n),longitudeShift:t.getFloat32(s+l*o+4,n)};!1!==i&&(c.latitudeAccuracy=t.getFloat32(s+l*o+8,n),c.longitudeAccuracy=t.getFloat32(s+l*o+12,n)),a.push(c)}return a}function At(t,e){if(!(this instanceof At))return new At(t);this.forward=null,this.inverse=null,this.name,this.title,e=e||function(t){if(t)throw t};var r=function(t){if(!function(t){return"string"==typeof t}(t))return"projName"in t?t:k(t);if(function(t){return t in G}(t))return G[t];if(function(t){return 0!==t.indexOf("+")&&-1!==t.indexOf("[")||"object"==typeof t&&!("srsCode"in t)}(t)){var e=k(t);if(function(t){var e=g(t,"authority");if(e){var r=g(e,"epsg");return r&&Q.indexOf(r)>-1}}(e))return G["EPSG:3857"];var r=function(t){var e=g(t,"extension");if(e)return g(e,"proj4")}(e);return r?A(r):e}return function(t){return"+"===t[0]}(t)?A(t):void 0}(t);if("object"==typeof r){var n=At.projections.get(r.projName);if(n){if(r.datumCode&&"none"!==r.datumCode){var i=g(at,r.datumCode);i&&(r.datum_params=r.datum_params||(i.towgs84?i.towgs84.split(","):null),r.ellps=i.ellipse,r.datumName=i.datumName?i.datumName:r.datumCode)}r.k0=r.k0||1,r.axis=r.axis||"enu",r.ellps=r.ellps||"wgs84",r.lat1=r.lat1||r.lat0;var o,l,c,h,u,d,p=function(t,e,r,n,i){if(!t){var s=g(rt,n);s||(s=nt),t=s.a,e=s.b,r=s.rf}return r&&!e&&(e=(1-1/r)*t),(0===r||Math.abs(t-e)<a)&&(i=!0,e=t),{a:t,b:e,rf:r,sphere:i}}(r.a,r.b,r.rf,r.ellps,r.sphere),f=(o=p.a,l=p.b,p.rf,u=((c=o*o)-(h=l*l))/c,d=0,r.R_A?(c=(o*=1-u*(.16666666666666666+u*(.04722222222222222+.022156084656084655*u)))*o,u=0):d=Math.sqrt(u),{es:u,e:d,ep2:(c-h)/h}),m=function(t){return void 0===t?null:t.split(",").map(ht)}(r.nadgrids),y=r.datum||function(t,e,r,n,i,o,a){var l={};return l.datum_type=void 0===t||"none"===t?5:4,e&&(l.datum_params=e.map(parseFloat),0===l.datum_params[0]&&0===l.datum_params[1]&&0===l.datum_params[2]||(l.datum_type=1),l.datum_params.length>3&&(0===l.datum_params[3]&&0===l.datum_params[4]&&0===l.datum_params[5]&&0===l.datum_params[6]||(l.datum_type=2,l.datum_params[3]*=s,l.datum_params[4]*=s,l.datum_params[5]*=s,l.datum_params[6]=l.datum_params[6]/1e6+1))),a&&(l.datum_type=3,l.grids=a),l.a=r,l.b=n,l.es=i,l.ep2=o,l}(r.datumCode,r.datum_params,p.a,p.b,f.es,f.ep2,m);V(this,r),V(this,n),this.a=p.a,this.b=p.b,this.rf=p.rf,this.sphere=p.sphere,this.es=f.es,this.e=f.e,this.ep2=f.ep2,this.datum=y,"init"in this&&"function"==typeof this.init&&this.init(),e(null,this)}else e("Could not get projection name from: "+t)}else e("Could not parse to valid json: "+t)}At.projections=et,At.projections.start();const yt=At;function vt(t,e,r){var n,i,s,a,l=t.x,c=t.y,h=t.z?t.z:0;if(c<-o&&c>-1.001*o)c=-o;else if(c>o&&c<1.001*o)c=o;else{if(c<-o)return{x:-1/0,y:-1/0,z:t.z};if(c>o)return{x:1/0,y:1/0,z:t.z}}return l>Math.PI&&(l-=2*Math.PI),i=Math.sin(c),a=Math.cos(c),s=i*i,{x:((n=r/Math.sqrt(1-e*s))+h)*a*Math.cos(l),y:(n+h)*a*Math.sin(l),z:(n*(1-e)+h)*i}}function xt(t,e,r,n){var i,s,o,a,l,c,h,u,d,p,f,m,g,A,y,v=t.x,x=t.y,_=t.z?t.z:0;if(i=Math.sqrt(v*v+x*x),s=Math.sqrt(v*v+x*x+_*_),i/r<1e-12){if(A=0,s/r<1e-12)return y=-n,{x:t.x,y:t.y,z:t.z}}else A=Math.atan2(x,v);o=_/s,u=(a=i/s)*(1-e)*(l=1/Math.sqrt(1-e*(2-e)*a*a)),d=o*l,g=0;do{g++,c=e*(h=r/Math.sqrt(1-e*d*d))/(h+(y=i*u+_*d-h*(1-e*d*d))),m=(f=o*(l=1/Math.sqrt(1-c*(2-c)*a*a)))*u-(p=a*(1-c)*l)*d,u=p,d=f}while(m*m>1e-24&&g<30);return{x:A,y:Math.atan(f/Math.abs(p)),z:y}}function _t(t){return 1===t||2===t}function wt(t,e,r){if(null===t.grids||0===t.grids.length)return console.log("Grid shift grids not found"),-1;var n={x:-r.x,y:r.y},i={x:Number.NaN,y:Number.NaN},s=[];t:for(var o=0;o<t.grids.length;o++){var a=t.grids[o];if(s.push(a.name),a.isNull){i=n;break}if(null!==a.grid)for(var l=a.grid.subgrids,h=0,u=l.length;h<u;h++){var d=l[h],p=(Math.abs(d.del[1])+Math.abs(d.del[0]))/1e4,f=d.ll[0]-p,m=d.ll[1]-p,g=d.ll[0]+(d.lim[0]-1)*d.del[0]+p,A=d.ll[1]+(d.lim[1]-1)*d.del[1]+p;if(!(m>n.y||f>n.x||A<n.y||g<n.x||(i=bt(n,e,d),isNaN(i.x))))break t}else if(a.mandatory)return console.log("Unable to find mandatory grid '"+a.name+"'"),-1}return isNaN(i.x)?(console.log("Failed to find a grid shift table for location '"+-n.x*c+" "+n.y*c+" tried: '"+s+"'"),-1):(r.x=-i.x,r.y=i.y,0)}function bt(t,e,r){var n={x:Number.NaN,y:Number.NaN};if(isNaN(t.x))return n;var i={x:t.x,y:t.y};i.x-=r.ll[0],i.y-=r.ll[1],i.x=q(i.x-Math.PI)+Math.PI;var s=Et(i,r);if(e){if(isNaN(s.x))return n;s.x=i.x-s.x,s.y=i.y-s.y;var o,a,l=9;do{if(a=Et(s,r),isNaN(a.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}o={x:i.x-(a.x+s.x),y:i.y-(a.y+s.y)},s.x+=o.x,s.y+=o.y}while(l--&&Math.abs(o.x)>1e-12&&Math.abs(o.y)>1e-12);if(l<0)return console.log("Inverse grid shift iterator failed to converge."),n;n.x=q(s.x+r.ll[0]),n.y=s.y+r.ll[1]}else isNaN(s.x)||(n.x=t.x+s.x,n.y=t.y+s.y);return n}function Et(t,e){var r,n={x:t.x/e.del[0],y:t.y/e.del[1]},i=Math.floor(n.x),s=Math.floor(n.y),o=n.x-1*i,a=n.y-1*s,l={x:Number.NaN,y:Number.NaN};if(i<0||i>=e.lim[0])return l;if(s<0||s>=e.lim[1])return l;r=s*e.lim[0]+i;var c=e.cvs[r][0],h=e.cvs[r][1];r++;var u=e.cvs[r][0],d=e.cvs[r][1];r+=e.lim[0];var p=e.cvs[r][0],f=e.cvs[r][1];r--;var m=e.cvs[r][0],g=e.cvs[r][1],A=o*a,y=o*(1-a),v=(1-o)*(1-a),x=(1-o)*a;return l.x=v*c+y*u+x*m+A*p,l.y=v*h+y*d+x*g+A*f,l}function St(t,e,r){var n,i,s,o=r.x,a=r.y,l=r.z||0,c={};for(s=0;s<3;s++)if(!e||2!==s||void 0!==r.z)switch(0===s?(n=o,i=-1!=="ew".indexOf(t.axis[s])?"x":"y"):1===s?(n=a,i=-1!=="ns".indexOf(t.axis[s])?"y":"x"):(n=l,i="z"),t.axis[s]){case"e":case"n":c[i]=n;break;case"w":case"s":c[i]=-n;break;case"u":void 0!==r[i]&&(c.z=n);break;case"d":void 0!==r[i]&&(c.z=-n);break;default:return null}return c}function Mt(t){var e={x:t[0],y:t[1]};return t.length>2&&(e.z=t[2]),t.length>3&&(e.m=t[3]),e}function Ct(t){if("function"==typeof Number.isFinite){if(Number.isFinite(t))return;throw new TypeError("coordinates must be finite numbers")}if("number"!=typeof t||t!=t||!isFinite(t))throw new TypeError("coordinates must be finite numbers")}function Tt(t,e,r,s){var o,a=void 0!==(r=Array.isArray(r)?Mt(r):{x:r.x,y:r.y,z:r.z,m:r.m}).z;if(function(t){Ct(t.x),Ct(t.y)}(r),t.datum&&e.datum&&function(t,e){return(1===t.datum.datum_type||2===t.datum.datum_type||3===t.datum.datum_type)&&"WGS84"!==e.datumCode||(1===e.datum.datum_type||2===e.datum.datum_type||3===e.datum.datum_type)&&"WGS84"!==t.datumCode}(t,e)&&(r=Tt(t,o=new yt("WGS84"),r,s),t=o),s&&"enu"!==t.axis&&(r=St(t,!1,r)),"longlat"===t.projName)r={x:r.x*l,y:r.y*l,z:r.z||0};else if(t.to_meter&&(r={x:r.x*t.to_meter,y:r.y*t.to_meter,z:r.z||0}),!(r=t.inverse(r)))return;if(t.from_greenwich&&(r.x+=t.from_greenwich),r=function(t,e,r){if(function(t,e){return t.datum_type===e.datum_type&&!(t.a!==e.a||Math.abs(t.es-e.es)>5e-11)&&(1===t.datum_type?t.datum_params[0]===e.datum_params[0]&&t.datum_params[1]===e.datum_params[1]&&t.datum_params[2]===e.datum_params[2]:2!==t.datum_type||t.datum_params[0]===e.datum_params[0]&&t.datum_params[1]===e.datum_params[1]&&t.datum_params[2]===e.datum_params[2]&&t.datum_params[3]===e.datum_params[3]&&t.datum_params[4]===e.datum_params[4]&&t.datum_params[5]===e.datum_params[5]&&t.datum_params[6]===e.datum_params[6])}(t,e))return r;if(5===t.datum_type||5===e.datum_type)return r;var s=t.a,o=t.es;if(3===t.datum_type){if(0!==wt(t,!1,r))return;s=n,o=i}var a=e.a,l=e.b,c=e.es;return 3===e.datum_type&&(a=n,l=6356752.314,c=i),o!==c||s!==a||_t(t.datum_type)||_t(e.datum_type)?(r=vt(r,o,s),_t(t.datum_type)&&(r=function(t,e,r){if(1===e)return{x:t.x+r[0],y:t.y+r[1],z:t.z+r[2]};if(2===e){var n=r[0],i=r[1],s=r[2],o=r[3],a=r[4],l=r[5],c=r[6];return{x:c*(t.x-l*t.y+a*t.z)+n,y:c*(l*t.x+t.y-o*t.z)+i,z:c*(-a*t.x+o*t.y+t.z)+s}}}(r,t.datum_type,t.datum_params)),_t(e.datum_type)&&(r=function(t,e,r){if(1===e)return{x:t.x-r[0],y:t.y-r[1],z:t.z-r[2]};if(2===e){var n=r[0],i=r[1],s=r[2],o=r[3],a=r[4],l=r[5],c=r[6],h=(t.x-n)/c,u=(t.y-i)/c,d=(t.z-s)/c;return{x:h+l*u-a*d,y:-l*h+u+o*d,z:a*h-o*u+d}}}(r,e.datum_type,e.datum_params)),r=xt(r,c,a,l),3!==e.datum_type||0===wt(e,!0,r)?r:void 0):r}(t.datum,e.datum,r))return e.from_greenwich&&(r={x:r.x-e.from_greenwich,y:r.y,z:r.z||0}),"longlat"===e.projName?r={x:r.x*c,y:r.y*c,z:r.z||0}:(r=e.forward(r),e.to_meter&&(r={x:r.x/e.to_meter,y:r.y/e.to_meter,z:r.z||0})),s&&"enu"!==e.axis?St(e,!0,r):(r&&!a&&delete r.z,r)}var It=yt("WGS84");function Rt(t,e,r,n){var i,s,o;return Array.isArray(r)?(i=Tt(t,e,r,n)||{x:NaN,y:NaN},r.length>2?void 0!==t.name&&"geocent"===t.name||void 0!==e.name&&"geocent"===e.name?"number"==typeof i.z?[i.x,i.y,i.z].concat(r.slice(3)):[i.x,i.y,r[2]].concat(r.slice(3)):[i.x,i.y].concat(r.slice(2)):[i.x,i.y]):(s=Tt(t,e,r,n),2===(o=Object.keys(r)).length||o.forEach((function(n){if(void 0!==t.name&&"geocent"===t.name||void 0!==e.name&&"geocent"===e.name){if("x"===n||"y"===n||"z"===n)return}else if("x"===n||"y"===n)return;s[n]=r[n]})),s)}function Pt(t){return t instanceof yt?t:"object"==typeof t&&"oProj"in t?t.oProj:yt(t)}var Bt="AJSAJS",Lt="AFAFAF",Dt=65,Ot=73,Nt=79;const Ft={forward:Ut,inverse:function(t){var e=Qt(jt(t.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat,e.lon,e.lat]:[e.left,e.bottom,e.right,e.top]},toPoint:kt};function Ut(t,e){return e=e||5,function(t,e){var r,n,i,s,o,a,l,c,h,u,d,p="00000"+t.easting,f="00000"+t.northing;return t.zoneNumber+t.zoneLetter+(h=t.easting,u=t.northing,d=Vt(t.zoneNumber),r=Math.floor(h/1e5),n=Math.floor(u/1e5)%20,s=Bt.charCodeAt(i=d-1),o=Lt.charCodeAt(i),c=!1,(a=s+r-1)>90&&(a=a-90+Dt-1,c=!0),(a===Ot||s<Ot&&a>Ot||(a>Ot||s<Ot)&&c)&&a++,(a===Nt||s<Nt&&a>Nt||(a>Nt||s<Nt)&&c)&&++a===Ot&&a++,a>90&&(a=a-90+Dt-1),(l=o+n)>86?(l=l-86+Dt-1,c=!0):c=!1,(l===Ot||o<Ot&&l>Ot||(l>Ot||o<Ot)&&c)&&l++,(l===Nt||o<Nt&&l>Nt||(l>Nt||o<Nt)&&c)&&++l===Ot&&l++,l>86&&(l=l-86+Dt-1),String.fromCharCode(a)+String.fromCharCode(l))+p.substr(p.length-5,e)+f.substr(f.length-5,e)}(function(t){var e,r,n,i,s,o,a,l=t.lat,c=t.lon,h=6378137,u=.00669438,d=.9996,p=zt(l),f=zt(c);a=Math.floor((c+180)/6)+1,180===c&&(a=60),l>=56&&l<64&&c>=3&&c<12&&(a=32),l>=72&&l<84&&(c>=0&&c<9?a=31:c>=9&&c<21?a=33:c>=21&&c<33?a=35:c>=33&&c<42&&(a=37)),o=zt(6*(a-1)-180+3),e=.006739496752268451,r=h/Math.sqrt(1-u*Math.sin(p)*Math.sin(p)),n=Math.tan(p)*Math.tan(p),i=e*Math.cos(p)*Math.cos(p);var m,g,A=d*r*((s=Math.cos(p)*(f-o))+(1-n+i)*s*s*s/6+(5-18*n+n*n+72*i-58*e)*s*s*s*s*s/120)+5e5,y=d*(h*(.9983242984503243*p-.002514607064228144*Math.sin(2*p)+2639046602129982e-21*Math.sin(4*p)-3.418046101696858e-9*Math.sin(6*p))+r*Math.tan(p)*(s*s/2+(5-n+9*i+4*i*i)*s*s*s*s/24+(61-58*n+n*n+600*i-2.2240339282485886)*s*s*s*s*s*s/720));return l<0&&(y+=1e7),{northing:Math.round(y),easting:Math.round(A),zoneNumber:a,zoneLetter:(m=l,g="Z",84>=m&&m>=72?g="X":72>m&&m>=64?g="W":64>m&&m>=56?g="V":56>m&&m>=48?g="U":48>m&&m>=40?g="T":40>m&&m>=32?g="S":32>m&&m>=24?g="R":24>m&&m>=16?g="Q":16>m&&m>=8?g="P":8>m&&m>=0?g="N":0>m&&m>=-8?g="M":-8>m&&m>=-16?g="L":-16>m&&m>=-24?g="K":-24>m&&m>=-32?g="J":-32>m&&m>=-40?g="H":-40>m&&m>=-48?g="G":-48>m&&m>=-56?g="F":-56>m&&m>=-64?g="E":-64>m&&m>=-72?g="D":-72>m&&m>=-80&&(g="C"),g)}}({lat:t[1],lon:t[0]}),e)}function kt(t){var e=Qt(jt(t.toUpperCase()));return e.lat&&e.lon?[e.lon,e.lat]:[(e.left+e.right)/2,(e.top+e.bottom)/2]}function zt(t){return t*(Math.PI/180)}function Gt(t){return t/Math.PI*180}function Qt(t){var e=t.northing,r=t.easting,n=t.zoneLetter,i=t.zoneNumber;if(i<0||i>60)return null;var s,o,a,l,c,h,u,d,p,f=.9996,m=6378137,g=.00669438,A=(1-Math.sqrt(.99330562))/(1+Math.sqrt(.99330562)),y=r-5e5,v=e;n<"N"&&(v-=1e7),u=6*(i-1)-180+3,s=.006739496752268451,p=(d=v/f/6367449.145945056)+(3*A/2-27*A*A*A/32)*Math.sin(2*d)+(21*A*A/16-55*A*A*A*A/32)*Math.sin(4*d)+151*A*A*A/96*Math.sin(6*d),o=m/Math.sqrt(1-g*Math.sin(p)*Math.sin(p)),a=Math.tan(p)*Math.tan(p),l=s*Math.cos(p)*Math.cos(p),c=.99330562*m/Math.pow(1-g*Math.sin(p)*Math.sin(p),1.5),h=y/(o*f);var x=p-o*Math.tan(p)/c*(h*h/2-(5+3*a+10*l-4*l*l-9*s)*h*h*h*h/24+(61+90*a+298*l+45*a*a-1.6983531815716497-3*l*l)*h*h*h*h*h*h/720);x=Gt(x);var _,w=(h-(1+2*a+l)*h*h*h/6+(5-2*l+28*a-3*l*l+8*s+24*a*a)*h*h*h*h*h/120)/Math.cos(p);if(w=u+Gt(w),t.accuracy){var b=Qt({northing:t.northing+t.accuracy,easting:t.easting+t.accuracy,zoneLetter:t.zoneLetter,zoneNumber:t.zoneNumber});_={top:b.lat,right:b.lon,bottom:x,left:w}}else _={lat:x,lon:w};return _}function Vt(t){var e=t%6;return 0===e&&(e=6),e}function jt(t){if(t&&0===t.length)throw"MGRSPoint coverting from nothing";for(var e,r=t.length,n=null,i="",s=0;!/[A-Z]/.test(e=t.charAt(s));){if(s>=2)throw"MGRSPoint bad conversion from: "+t;i+=e,s++}var o=parseInt(i,10);if(0===s||s+3>r)throw"MGRSPoint bad conversion from: "+t;var a=t.charAt(s++);if(a<="A"||"B"===a||"Y"===a||a>="Z"||"I"===a||"O"===a)throw"MGRSPoint zone letter "+a+" not handled: "+t;n=t.substring(s,s+=2);for(var l=Vt(o),c=function(t,e){for(var r=Bt.charCodeAt(e-1),n=1e5,i=!1;r!==t.charCodeAt(0);){if(++r===Ot&&r++,r===Nt&&r++,r>90){if(i)throw"Bad character: "+t;r=Dt,i=!0}n+=1e5}return n}(n.charAt(0),l),h=function(t,e){if(t>"V")throw"MGRSPoint given invalid Northing "+t;for(var r=Lt.charCodeAt(e-1),n=0,i=!1;r!==t.charCodeAt(0);){if(++r===Ot&&r++,r===Nt&&r++,r>86){if(i)throw"Bad character: "+t;r=Dt,i=!0}n+=1e5}return n}(n.charAt(1),l);h<Ht(a);)h+=2e6;var u=r-s;if(u%2!=0)throw"MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters"+t;var d,p,f,m=u/2,g=0,A=0;return m>0&&(d=1e5/Math.pow(10,m),p=t.substring(s,s+m),g=parseFloat(p)*d,f=t.substring(s+m),A=parseFloat(f)*d),{easting:g+c,northing:A+h,zoneLetter:a,zoneNumber:o,accuracy:d}}function Ht(t){var e;switch(t){case"C":e=11e5;break;case"D":e=2e6;break;case"E":e=28e5;break;case"F":e=37e5;break;case"G":e=46e5;break;case"H":e=55e5;break;case"J":e=64e5;break;case"K":e=73e5;break;case"L":e=82e5;break;case"M":e=91e5;break;case"N":e=0;break;case"P":e=8e5;break;case"Q":e=17e5;break;case"R":e=26e5;break;case"S":e=35e5;break;case"T":e=44e5;break;case"U":e=53e5;break;case"V":e=62e5;break;case"W":e=7e6;break;case"X":e=79e5;break;default:e=-1}if(e>=0)return e;throw"Invalid zone letter: "+t}function qt(t,e,r){if(!(this instanceof qt))return new qt(t,e,r);if(Array.isArray(t))this.x=t[0],this.y=t[1],this.z=t[2]||0;else if("object"==typeof t)this.x=t.x,this.y=t.y,this.z=t.z||0;else if("string"==typeof t&&void 0===e){var n=t.split(",");this.x=parseFloat(n[0]),this.y=parseFloat(n[1]),this.z=parseFloat(n[2])||0}else this.x=t,this.y=e,this.z=r||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}qt.fromMGRS=function(t){return new qt(kt(t))},qt.prototype.toMGRS=function(t){return Ut([this.x,this.y],t)};const Wt=qt;var Yt=.046875,Xt=.01953125,$t=.01068115234375;function Jt(t){var e=[];e[0]=1-t*(.25+t*(Yt+t*(Xt+t*$t))),e[1]=t*(.75-t*(Yt+t*(Xt+t*$t)));var r=t*t;return e[2]=r*(.46875-t*(.013020833333333334+.007120768229166667*t)),r*=t,e[3]=r*(.3645833333333333-.005696614583333333*t),e[4]=r*t*.3076171875,e}function Kt(t,e,r,n){return r*=e,e*=e,n[0]*t-r*(n[1]+e*(n[2]+e*(n[3]+e*n[4])))}function Zt(t,e,r){for(var n=1/(1-e),i=t,s=20;s;--s){var o=Math.sin(i),l=1-e*o*o;if(i-=l=(Kt(i,o,Math.cos(i),r)-t)*(l*Math.sqrt(l))*n,Math.abs(l)<a)return i}return i}const te={init:function(){this.x0=void 0!==this.x0?this.x0:0,this.y0=void 0!==this.y0?this.y0:0,this.long0=void 0!==this.long0?this.long0:0,this.lat0=void 0!==this.lat0?this.lat0:0,this.es&&(this.en=Jt(this.es),this.ml0=Kt(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))},forward:function(t){var e,r,n,i=t.x,s=t.y,o=q(i-this.long0),l=Math.sin(s),c=Math.cos(s);if(this.es){var h=c*o,u=Math.pow(h,2),d=this.ep2*Math.pow(c,2),p=Math.pow(d,2),f=Math.abs(c)>a?Math.tan(s):0,m=Math.pow(f,2),g=Math.pow(m,2);e=1-this.es*Math.pow(l,2),h/=Math.sqrt(e);var A=Kt(s,l,c,this.en);r=this.a*(this.k0*h*(1+u/6*(1-m+d+u/20*(5-18*m+g+14*d-58*m*d+u/42*(61+179*g-g*m-479*m)))))+this.x0,n=this.a*(this.k0*(A-this.ml0+l*o*h/2*(1+u/12*(5-m+9*d+4*p+u/30*(61+g-58*m+270*d-330*m*d+u/56*(1385+543*g-g*m-3111*m))))))+this.y0}else{var y=c*Math.sin(o);if(Math.abs(Math.abs(y)-1)<a)return 93;if(r=.5*this.a*this.k0*Math.log((1+y)/(1-y))+this.x0,n=c*Math.cos(o)/Math.sqrt(1-Math.pow(y,2)),(y=Math.abs(n))>=1){if(y-1>a)return 93;n=0}else n=Math.acos(n);s<0&&(n=-n),n=this.a*this.k0*(n-this.lat0)+this.y0}return t.x=r,t.y=n,t},inverse:function(t){var e,r,n,i,s=(t.x-this.x0)*(1/this.a),l=(t.y-this.y0)*(1/this.a);if(this.es)if(r=Zt(e=this.ml0+l/this.k0,this.es,this.en),Math.abs(r)<o){var c=Math.sin(r),h=Math.cos(r),u=Math.abs(h)>a?Math.tan(r):0,d=this.ep2*Math.pow(h,2),p=Math.pow(d,2),f=Math.pow(u,2),m=Math.pow(f,2);e=1-this.es*Math.pow(c,2);var g=s*Math.sqrt(e)/this.k0,A=Math.pow(g,2);n=r-(e*=u)*A/(1-this.es)*.5*(1-A/12*(5+3*f-9*d*f+d-4*p-A/30*(61+90*f-252*d*f+45*m+46*d-A/56*(1385+3633*f+4095*m+1574*m*f)))),i=q(this.long0+g*(1-A/6*(1+2*f+d-A/20*(5+28*f+24*m+8*d*f+6*d-A/42*(61+662*f+1320*m+720*m*f))))/h)}else n=o*H(l),i=0;else{var y=Math.exp(s/this.k0),v=.5*(y-1/y),x=this.lat0+l/this.k0,_=Math.cos(x);e=Math.sqrt((1-Math.pow(_,2))/(1+Math.pow(v,2))),n=Math.asin(e),l<0&&(n=-n),i=0===v&&0===_?0:q(Math.atan2(v,_)+this.long0)}return t.x=i,t.y=n,t},names:["Fast_Transverse_Mercator","Fast Transverse Mercator"]};function ee(t){var e=Math.exp(t);return(e-1/e)/2}function re(t,e){t=Math.abs(t),e=Math.abs(e);var r=Math.max(t,e),n=Math.min(t,e)/(r||1);return r*Math.sqrt(1+Math.pow(n,2))}function ne(t,e){for(var r,n=2*Math.cos(2*e),i=t.length-1,s=t[i],o=0;--i>=0;)r=n*s-o+t[i],o=s,s=r;return e+r*Math.sin(2*e)}function ie(t,e,r){for(var n,i,s=Math.sin(e),o=Math.cos(e),a=ee(r),l=function(t){var e=Math.exp(t);return(e+1/e)/2}(r),c=2*o*l,h=-2*s*a,u=t.length-1,d=t[u],p=0,f=0,m=0;--u>=0;)n=f,i=p,d=c*(f=d)-n-h*(p=m)+t[u],m=h*f-i+c*p;return[(c=s*l)*d-(h=o*a)*m,c*m+h*d]}const se={init:function(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(te.init.apply(this),this.forward=te.forward,this.inverse=te.inverse),this.x0=void 0!==this.x0?this.x0:0,this.y0=void 0!==this.y0?this.y0:0,this.long0=void 0!==this.long0?this.long0:0,this.lat0=void 0!==this.lat0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var t=this.es/(1+Math.sqrt(1-this.es)),e=t/(2-t),r=e;this.cgb[0]=e*(2+e*(-2/3+e*(e*(116/45+e*(26/45+e*(-2854/675)))-2))),this.cbg[0]=e*(e*(2/3+e*(4/3+e*(-82/45+e*(32/45+e*(4642/4725)))))-2),r*=e,this.cgb[1]=r*(7/3+e*(e*(-227/45+e*(2704/315+e*(2323/945)))-1.6)),this.cbg[1]=r*(5/3+e*(-16/15+e*(-13/9+e*(904/315+e*(-1522/945))))),r*=e,this.cgb[2]=r*(56/15+e*(-136/35+e*(-1262/105+e*(73814/2835)))),this.cbg[2]=r*(-26/15+e*(34/21+e*(1.6+e*(-12686/2835)))),r*=e,this.cgb[3]=r*(4279/630+e*(-332/35+e*(-399572/14175))),this.cbg[3]=r*(1237/630+e*(e*(-24832/14175)-2.4)),r*=e,this.cgb[4]=r*(4174/315+e*(-144838/6237)),this.cbg[4]=r*(-734/315+e*(109598/31185)),r*=e,this.cgb[5]=r*(601676/22275),this.cbg[5]=r*(444337/155925),r=Math.pow(e,2),this.Qn=this.k0/(1+e)*(1+r*(1/4+r*(1/64+r/256))),this.utg[0]=e*(e*(2/3+e*(-37/96+e*(1/360+e*(81/512+e*(-96199/604800)))))-.5),this.gtu[0]=e*(.5+e*(-2/3+e*(5/16+e*(41/180+e*(-127/288+e*(7891/37800)))))),this.utg[1]=r*(-1/48+e*(-1/15+e*(437/1440+e*(-46/105+e*(1118711/3870720))))),this.gtu[1]=r*(13/48+e*(e*(557/1440+e*(281/630+e*(-1983433/1935360)))-.6)),r*=e,this.utg[2]=r*(-17/480+e*(37/840+e*(209/4480+e*(-5569/90720)))),this.gtu[2]=r*(61/240+e*(-103/140+e*(15061/26880+e*(167603/181440)))),r*=e,this.utg[3]=r*(-4397/161280+e*(11/504+e*(830251/7257600))),this.gtu[3]=r*(49561/161280+e*(-179/168+e*(6601661/7257600))),r*=e,this.utg[4]=r*(-4583/161280+e*(108847/3991680)),this.gtu[4]=r*(34729/80640+e*(-3418889/1995840)),r*=e,this.utg[5]=r*(-20648693/638668800),this.gtu[5]=.6650675310896665*r;var n=ne(this.cbg,this.lat0);this.Zb=-this.Qn*(n+function(t,e){for(var r,n=2*Math.cos(e),i=t.length-1,s=t[i],o=0;--i>=0;)r=n*s-o+t[i],o=s,s=r;return Math.sin(e)*r}(this.gtu,2*n))},forward:function(t){var e=q(t.x-this.long0),r=t.y;r=ne(this.cbg,r);var n=Math.sin(r),i=Math.cos(r),s=Math.sin(e),o=Math.cos(e);r=Math.atan2(n,o*i),e=Math.atan2(s*i,re(n,i*o)),e=function(t){var e=Math.abs(t);return e=function(t){var e=1+t,r=e-1;return 0===r?t:t*Math.log(e)/r}(e*(1+e/(re(1,e)+1))),t<0?-e:e}(Math.tan(e));var a,l,c=ie(this.gtu,2*r,2*e);return r+=c[0],e+=c[1],Math.abs(e)<=2.623395162778?(a=this.a*(this.Qn*e)+this.x0,l=this.a*(this.Qn*r+this.Zb)+this.y0):(a=1/0,l=1/0),t.x=a,t.y=l,t},inverse:function(t){var e,r,n=(t.x-this.x0)*(1/this.a),i=(t.y-this.y0)*(1/this.a);if(i=(i-this.Zb)/this.Qn,n/=this.Qn,Math.abs(n)<=2.623395162778){var s=ie(this.utg,2*i,2*n);i+=s[0],n+=s[1],n=Math.atan(ee(n));var o=Math.sin(i),a=Math.cos(i),l=Math.sin(n),c=Math.cos(n);i=Math.atan2(o*c,re(l,c*a)),e=q((n=Math.atan2(l,c*a))+this.long0),r=ne(this.cgb,i)}else e=1/0,r=1/0;return t.x=e,t.y=r,t},names:["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"]},oe={init:function(){var t=function(t,e){if(void 0===t){if((t=Math.floor(30*(q(e)+Math.PI)/Math.PI)+1)<0)return 0;if(t>60)return 60}return t}(this.zone,this.long0);if(void 0===t)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(t)-183)*l,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,se.init.apply(this),this.forward=se.forward,this.inverse=se.inverse},names:["Universal Transverse Mercator System","utm"],dependsOn:"etmerc"};function ae(t,e){return Math.pow((1-t)/(1+t),e)}const le={init:function(){var t=Math.sin(this.lat0),e=Math.cos(this.lat0);e*=e,this.rc=Math.sqrt(1-this.es)/(1-this.es*t*t),this.C=Math.sqrt(1+this.es*e*e/(1-this.es)),this.phic0=Math.asin(t/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+h)/(Math.pow(Math.tan(.5*this.lat0+h),this.C)*ae(this.e*t,this.ratexp))},forward:function(t){var e=t.x,r=t.y;return t.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*r+h),this.C)*ae(this.e*Math.sin(r),this.ratexp))-o,t.x=this.C*e,t},inverse:function(t){for(var e=t.x/this.C,r=t.y,n=Math.pow(Math.tan(.5*r+h)/this.K,1/this.C),i=20;i>0&&(r=2*Math.atan(n*ae(this.e*Math.sin(t.y),-.5*this.e))-o,!(Math.abs(r-t.y)<1e-14));--i)t.y=r;return i?(t.x=e,t.y=r,t):null},names:["gauss"]},ce={init:function(){le.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))},forward:function(t){var e,r,n,i;return t.x=q(t.x-this.long0),le.forward.apply(this,[t]),e=Math.sin(t.y),r=Math.cos(t.y),n=Math.cos(t.x),i=this.k0*this.R2/(1+this.sinc0*e+this.cosc0*r*n),t.x=i*r*Math.sin(t.x),t.y=i*(this.cosc0*e-this.sinc0*r*n),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t},inverse:function(t){var e,r,n,i,s;if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,s=re(t.x,t.y)){var o=2*Math.atan2(s,this.R2);e=Math.sin(o),r=Math.cos(o),i=Math.asin(r*this.sinc0+t.y*e*this.cosc0/s),n=Math.atan2(t.x*e,s*this.cosc0*r-t.y*this.sinc0*e)}else i=this.phic0,n=0;return t.x=n,t.y=i,le.inverse.apply(this,[t]),t.x=q(t.x+this.long0),t},names:["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"]};function he(t,e,r){return e*=r,Math.tan(.5*(o+t))*Math.pow((1-e)/(1+e),.5*r)}const ue={init:function(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?1===this.k0&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=a&&(this.k0=.5*(1+H(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=a&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),1===this.k0&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=a&&Math.abs(Math.cos(this.lat_ts))>a&&(this.k0=.5*this.cons*j(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/W(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=j(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(he(this.lat0,this.sinlat0,this.e))-o,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))},forward:function(t){var e,r,n,i,s,l,c=t.x,h=t.y,u=Math.sin(h),d=Math.cos(h),p=q(c-this.long0);return Math.abs(Math.abs(c-this.long0)-Math.PI)<=a&&Math.abs(h+this.lat0)<=a?(t.x=NaN,t.y=NaN,t):this.sphere?(e=2*this.k0/(1+this.sinlat0*u+this.coslat0*d*Math.cos(p)),t.x=this.a*e*d*Math.sin(p)+this.x0,t.y=this.a*e*(this.coslat0*u-this.sinlat0*d*Math.cos(p))+this.y0,t):(r=2*Math.atan(he(h,u,this.e))-o,i=Math.cos(r),n=Math.sin(r),Math.abs(this.coslat0)<=a?(s=W(this.e,h*this.con,this.con*u),l=2*this.a*this.k0*s/this.cons,t.x=this.x0+l*Math.sin(c-this.long0),t.y=this.y0-this.con*l*Math.cos(c-this.long0),t):(Math.abs(this.sinlat0)<a?(e=2*this.a*this.k0/(1+i*Math.cos(p)),t.y=e*n):(e=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*n+this.cosX0*i*Math.cos(p))),t.y=e*(this.cosX0*n-this.sinX0*i*Math.cos(p))+this.y0),t.x=e*i*Math.sin(p)+this.x0,t))},inverse:function(t){var e,r,n,i,s;t.x-=this.x0,t.y-=this.y0;var l=Math.sqrt(t.x*t.x+t.y*t.y);if(this.sphere){var c=2*Math.atan(l/(2*this.a*this.k0));return e=this.long0,r=this.lat0,l<=a?(t.x=e,t.y=r,t):(r=Math.asin(Math.cos(c)*this.sinlat0+t.y*Math.sin(c)*this.coslat0/l),e=Math.abs(this.coslat0)<a?this.lat0>0?q(this.long0+Math.atan2(t.x,-1*t.y)):q(this.long0+Math.atan2(t.x,t.y)):q(this.long0+Math.atan2(t.x*Math.sin(c),l*this.coslat0*Math.cos(c)-t.y*this.sinlat0*Math.sin(c))),t.x=e,t.y=r,t)}if(Math.abs(this.coslat0)<=a){if(l<=a)return r=this.lat0,e=this.long0,t.x=e,t.y=r,t;t.x*=this.con,t.y*=this.con,n=l*this.cons/(2*this.a*this.k0),r=this.con*Y(this.e,n),e=this.con*q(this.con*this.long0+Math.atan2(t.x,-1*t.y))}else i=2*Math.atan(l*this.cosX0/(2*this.a*this.k0*this.ms1)),e=this.long0,l<=a?s=this.X0:(s=Math.asin(Math.cos(i)*this.sinX0+t.y*Math.sin(i)*this.cosX0/l),e=q(this.long0+Math.atan2(t.x*Math.sin(i),l*this.cosX0*Math.cos(i)-t.y*this.sinX0*Math.sin(i)))),r=-1*Y(this.e,Math.tan(.5*(o+s)));return t.x=e,t.y=r,t},names:["stere","Stereographic_South_Pole","Polar_Stereographic_variant_A","Polar_Stereographic_variant_B","Polar_Stereographic"],ssfn_:he},de={init:function(){var t=this.lat0;this.lambda0=this.long0;var e=Math.sin(t),r=this.a,n=1/this.rf,i=2*n-Math.pow(n,2),s=this.e=Math.sqrt(i);this.R=this.k0*r*Math.sqrt(1-i)/(1-i*Math.pow(e,2)),this.alpha=Math.sqrt(1+i/(1-i)*Math.pow(Math.cos(t),4)),this.b0=Math.asin(e/this.alpha);var o=Math.log(Math.tan(Math.PI/4+this.b0/2)),a=Math.log(Math.tan(Math.PI/4+t/2)),l=Math.log((1+s*e)/(1-s*e));this.K=o-this.alpha*a+this.alpha*s/2*l},forward:function(t){var e=Math.log(Math.tan(Math.PI/4-t.y/2)),r=this.e/2*Math.log((1+this.e*Math.sin(t.y))/(1-this.e*Math.sin(t.y))),n=-this.alpha*(e+r)+this.K,i=2*(Math.atan(Math.exp(n))-Math.PI/4),s=this.alpha*(t.x-this.lambda0),o=Math.atan(Math.sin(s)/(Math.sin(this.b0)*Math.tan(i)+Math.cos(this.b0)*Math.cos(s))),a=Math.asin(Math.cos(this.b0)*Math.sin(i)-Math.sin(this.b0)*Math.cos(i)*Math.cos(s));return t.y=this.R/2*Math.log((1+Math.sin(a))/(1-Math.sin(a)))+this.y0,t.x=this.R*o+this.x0,t},inverse:function(t){for(var e=t.x-this.x0,r=t.y-this.y0,n=e/this.R,i=2*(Math.atan(Math.exp(r/this.R))-Math.PI/4),s=Math.asin(Math.cos(this.b0)*Math.sin(i)+Math.sin(this.b0)*Math.cos(i)*Math.cos(n)),o=Math.atan(Math.sin(n)/(Math.cos(this.b0)*Math.cos(n)-Math.sin(this.b0)*Math.tan(i))),a=this.lambda0+o/this.alpha,l=0,c=s,h=-1e3,u=0;Math.abs(c-h)>1e-7;){if(++u>20)return;l=1/this.alpha*(Math.log(Math.tan(Math.PI/4+s/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(c))/2)),h=c,c=2*Math.atan(Math.exp(l))-Math.PI/2}return t.x=a,t.y=c,t},names:["somerc"]};var pe=1e-7;const fe={init:function(){var t,e,r,n,i,s,l,c,d,p,f,m,g,A,y=0,v=0,x=0,_=0,w=0,b=0,E=0;this.no_off=(g=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],A="object"==typeof(m=this).projName?Object.keys(m.projName)[0]:m.projName,"no_uoff"in m||"no_off"in m||-1!==g.indexOf(A)||-1!==g.indexOf(tt(A))),this.no_rot="no_rot"in this;var S=!1;"alpha"in this&&(S=!0);var M=!1;if("rectified_grid_angle"in this&&(M=!0),S&&(E=this.alpha),M&&(y=this.rectified_grid_angle),S||M)v=this.longc;else if(x=this.long1,w=this.lat1,_=this.long2,b=this.lat2,Math.abs(w-b)<=pe||(t=Math.abs(w))<=pe||Math.abs(t-o)<=pe||Math.abs(Math.abs(this.lat0)-o)<=pe||Math.abs(Math.abs(b)-o)<=pe)throw new Error;var C=1-this.es;e=Math.sqrt(C),Math.abs(this.lat0)>a?(c=Math.sin(this.lat0),r=Math.cos(this.lat0),t=1-this.es*c*c,this.B=r*r,this.B=Math.sqrt(1+this.es*this.B*this.B/C),this.A=this.B*this.k0*e/t,(i=(n=this.B*e/(r*Math.sqrt(t)))*n-1)<=0?i=0:(i=Math.sqrt(i),this.lat0<0&&(i=-i)),this.E=i+=n,this.E*=Math.pow(W(this.e,this.lat0,c),this.B)):(this.B=1/e,this.A=this.k0,this.E=n=i=1),S||M?(S?(f=Math.asin(Math.sin(E)/n),M||(y=E)):(f=y,E=Math.asin(n*Math.sin(f))),this.lam0=v-Math.asin(.5*(i-1/i)*Math.tan(f))/this.B):(s=Math.pow(W(this.e,w,Math.sin(w)),this.B),l=Math.pow(W(this.e,b,Math.sin(b)),this.B),i=this.E/s,d=(l-s)/(l+s),p=((p=this.E*this.E)-l*s)/(p+l*s),(t=x-_)<-Math.PI?_-=u:t>Math.PI&&(_+=u),this.lam0=q(.5*(x+_)-Math.atan(p*Math.tan(.5*this.B*(x-_))/d)/this.B),f=Math.atan(2*Math.sin(this.B*q(x-this.lam0))/(i-1/i)),y=E=Math.asin(n*Math.sin(f))),this.singam=Math.sin(f),this.cosgam=Math.cos(f),this.sinrot=Math.sin(y),this.cosrot=Math.cos(y),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(n*n-1)/Math.cos(E))),this.lat0<0&&(this.u_0=-this.u_0)),i=.5*f,this.v_pole_n=this.ArB*Math.log(Math.tan(h-i)),this.v_pole_s=this.ArB*Math.log(Math.tan(h+i))},forward:function(t){var e,r,n,i,s,l,c,h,u={};if(t.x=t.x-this.lam0,Math.abs(Math.abs(t.y)-o)>a){if(e=.5*((s=this.E/Math.pow(W(this.e,t.y,Math.sin(t.y)),this.B))-(l=1/s)),r=.5*(s+l),i=Math.sin(this.B*t.x),n=(e*this.singam-i*this.cosgam)/r,Math.abs(Math.abs(n)-1)<a)throw new Error;h=.5*this.ArB*Math.log((1-n)/(1+n)),l=Math.cos(this.B*t.x),c=Math.abs(l)<pe?this.A*t.x:this.ArB*Math.atan2(e*this.cosgam+i*this.singam,l)}else h=t.y>0?this.v_pole_n:this.v_pole_s,c=this.ArB*t.y;return this.no_rot?(u.x=c,u.y=h):(c-=this.u_0,u.x=h*this.cosrot+c*this.sinrot,u.y=c*this.cosrot-h*this.sinrot),u.x=this.a*u.x+this.x0,u.y=this.a*u.y+this.y0,u},inverse:function(t){var e,r,n,i,s,l,c,h={};if(t.x=(t.x-this.x0)*(1/this.a),t.y=(t.y-this.y0)*(1/this.a),this.no_rot?(r=t.y,e=t.x):(r=t.x*this.cosrot-t.y*this.sinrot,e=t.y*this.cosrot+t.x*this.sinrot+this.u_0),i=.5*((n=Math.exp(-this.BrA*r))-1/n),s=.5*(n+1/n),c=((l=Math.sin(this.BrA*e))*this.cosgam+i*this.singam)/s,Math.abs(Math.abs(c)-1)<a)h.x=0,h.y=c<0?-o:o;else{if(h.y=this.E/Math.sqrt((1+c)/(1-c)),h.y=Y(this.e,Math.pow(h.y,1/this.B)),h.y===1/0)throw new Error;h.x=-this.rB*Math.atan2(i*this.cosgam-l*this.singam,Math.cos(this.BrA*e))}return h.x+=this.lam0,h},names:["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_variant_A","Hotine_Oblique_Mercator_Variant_B","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"]},me={init:function(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<a)){var t=this.b/this.a;this.e=Math.sqrt(1-t*t);var e=Math.sin(this.lat1),r=Math.cos(this.lat1),n=j(this.e,e,r),i=W(this.e,this.lat1,e),s=Math.sin(this.lat2),l=Math.cos(this.lat2),c=j(this.e,s,l),h=W(this.e,this.lat2,s),u=Math.abs(Math.abs(this.lat0)-o)<a?0:W(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>a?this.ns=Math.log(n/c)/Math.log(i/h):this.ns=e,isNaN(this.ns)&&(this.ns=e),this.f0=n/(this.ns*Math.pow(i,this.ns)),this.rh=this.a*this.f0*Math.pow(u,this.ns),this.title||(this.title="Lambert Conformal Conic")}},forward:function(t){var e=t.x,r=t.y;Math.abs(2*Math.abs(r)-Math.PI)<=a&&(r=H(r)*(o-2e-10));var n,i,s=Math.abs(Math.abs(r)-o);if(s>a)n=W(this.e,r,Math.sin(r)),i=this.a*this.f0*Math.pow(n,this.ns);else{if((s=r*this.ns)<=0)return null;i=0}var l=this.ns*q(e-this.long0);return t.x=this.k0*(i*Math.sin(l))+this.x0,t.y=this.k0*(this.rh-i*Math.cos(l))+this.y0,t},inverse:function(t){var e,r,n,i,s,a=(t.x-this.x0)/this.k0,l=this.rh-(t.y-this.y0)/this.k0;this.ns>0?(e=Math.sqrt(a*a+l*l),r=1):(e=-Math.sqrt(a*a+l*l),r=-1);var c=0;if(0!==e&&(c=Math.atan2(r*a,r*l)),0!==e||this.ns>0){if(r=1/this.ns,n=Math.pow(e/(this.a*this.f0),r),-9999===(i=Y(this.e,n)))return null}else i=-o;return s=q(c/this.ns+this.long0),t.x=s,t.y=i,t},names:["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"]},ge={init:function(){this.a=6377397.155,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.4334234309119251),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq},forward:function(t){var e,r,n,i,s,o,a,l=t.x,c=t.y,h=q(l-this.long0);return e=Math.pow((1+this.e*Math.sin(c))/(1-this.e*Math.sin(c)),this.alfa*this.e/2),r=2*(Math.atan(this.k*Math.pow(Math.tan(c/2+this.s45),this.alfa)/e)-this.s45),n=-h*this.alfa,i=Math.asin(Math.cos(this.ad)*Math.sin(r)+Math.sin(this.ad)*Math.cos(r)*Math.cos(n)),s=Math.asin(Math.cos(r)*Math.sin(n)/Math.cos(i)),o=this.n*s,a=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(i/2+this.s45),this.n),t.y=a*Math.cos(o)/1,t.x=a*Math.sin(o)/1,this.czech||(t.y*=-1,t.x*=-1),t},inverse:function(t){var e,r,n,i,s,o,a,l=t.x;t.x=t.y,t.y=l,this.czech||(t.y*=-1,t.x*=-1),s=Math.sqrt(t.x*t.x+t.y*t.y),i=Math.atan2(t.y,t.x)/Math.sin(this.s0),n=2*(Math.atan(Math.pow(this.ro0/s,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),e=Math.asin(Math.cos(this.ad)*Math.sin(n)-Math.sin(this.ad)*Math.cos(n)*Math.cos(i)),r=Math.asin(Math.cos(n)*Math.sin(i)/Math.cos(e)),t.x=this.long0-r/this.alfa,o=e,a=0;var c=0;do{t.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(e/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(o))/(1-this.e*Math.sin(o)),this.e/2))-this.s45),Math.abs(o-t.y)<1e-10&&(a=1),o=t.y,c+=1}while(0===a&&c<15);return c>=15?null:t},names:["Krovak","krovak"]};function Ae(t,e,r,n,i){return t*i-e*Math.sin(2*i)+r*Math.sin(4*i)-n*Math.sin(6*i)}function ye(t){return 1-.25*t*(1+t/16*(3+1.25*t))}function ve(t){return.375*t*(1+.25*t*(1+.46875*t))}function xe(t){return.05859375*t*t*(1+.75*t)}function _e(t){return t*t*t*(35/3072)}function we(t,e,r){var n=e*r;return t/Math.sqrt(1-n*n)}function be(t){return Math.abs(t)<o?t:t-H(t)*Math.PI}function Ee(t,e,r,n,i){var s,o;s=t/e;for(var a=0;a<15;a++)if(s+=o=(t-(e*s-r*Math.sin(2*s)+n*Math.sin(4*s)-i*Math.sin(6*s)))/(e-2*r*Math.cos(2*s)+4*n*Math.cos(4*s)-6*i*Math.cos(6*s)),Math.abs(o)<=1e-10)return s;return NaN}const Se={init:function(){this.sphere||(this.e0=ye(this.es),this.e1=ve(this.es),this.e2=xe(this.es),this.e3=_e(this.es),this.ml0=this.a*Ae(this.e0,this.e1,this.e2,this.e3,this.lat0))},forward:function(t){var e,r,n=t.x,i=t.y;if(n=q(n-this.long0),this.sphere)e=this.a*Math.asin(Math.cos(i)*Math.sin(n)),r=this.a*(Math.atan2(Math.tan(i),Math.cos(n))-this.lat0);else{var s=Math.sin(i),o=Math.cos(i),a=we(this.a,this.e,s),l=Math.tan(i)*Math.tan(i),c=n*Math.cos(i),h=c*c,u=this.es*o*o/(1-this.es);e=a*c*(1-h*l*(1/6-(8-l+8*u)*h/120)),r=this.a*Ae(this.e0,this.e1,this.e2,this.e3,i)-this.ml0+a*s/o*h*(.5+(5-l+6*u)*h/24)}return t.x=e+this.x0,t.y=r+this.y0,t},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var e,r,n=t.x/this.a,i=t.y/this.a;if(this.sphere){var s=i+this.lat0;e=Math.asin(Math.sin(s)*Math.cos(n)),r=Math.atan2(Math.tan(n),Math.cos(s))}else{var l=Ee(this.ml0/this.a+i,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(l)-o)<=a)return t.x=this.long0,t.y=o,i<0&&(t.y*=-1),t;var c=we(this.a,this.e,Math.sin(l)),h=c*c*c/this.a/this.a*(1-this.es),u=Math.pow(Math.tan(l),2),d=n*this.a/c,p=d*d;e=l-c*Math.tan(l)/h*d*d*(.5-(1+3*u)*d*d/24),r=d*(1-p*(u/3+(1+3*u)*u*p/15))/Math.cos(l)}return t.x=q(r+this.long0),t.y=be(e),t},names:["Cassini","Cassini_Soldner","cass"]};function Me(t,e){var r;return t>1e-7?(1-t*t)*(e/(1-(r=t*e)*r)-.5/t*Math.log((1-r)/(1+r))):2*e}const Ce={init:function(){var t,e=Math.abs(this.lat0);if(Math.abs(e-o)<a?this.mode=this.lat0<0?1:2:Math.abs(e)<a?this.mode=3:this.mode=4,this.es>0)switch(this.qp=Me(this.e,1),this.mmf=.5/(1-this.es),this.apa=function(t){var e,r=[];return r[0]=.3333333333333333*t,e=t*t,r[0]+=.17222222222222222*e,r[1]=.06388888888888888*e,e*=t,r[0]+=.10257936507936508*e,r[1]+=.0664021164021164*e,r[2]=.016415012942191543*e,r}(this.es),this.mode){case 2:case 1:this.dd=1;break;case 3:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case 4:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=Me(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd}else 4===this.mode&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))},forward:function(t){var e,r,n,i,s,l,c,u,d,p,f=t.x,m=t.y;if(f=q(f-this.long0),this.sphere){if(s=Math.sin(m),p=Math.cos(m),n=Math.cos(f),this.mode===this.OBLIQ||this.mode===this.EQUIT){if((r=this.mode===this.EQUIT?1+p*n:1+this.sinph0*s+this.cosph0*p*n)<=a)return null;e=(r=Math.sqrt(2/r))*p*Math.sin(f),r*=this.mode===this.EQUIT?s:this.cosph0*s-this.sinph0*p*n}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(n=-n),Math.abs(m+this.lat0)<a)return null;r=h-.5*m,e=(r=2*(this.mode===this.S_POLE?Math.cos(r):Math.sin(r)))*Math.sin(f),r*=n}}else{switch(c=0,u=0,d=0,n=Math.cos(f),i=Math.sin(f),s=Math.sin(m),l=Me(this.e,s),this.mode!==this.OBLIQ&&this.mode!==this.EQUIT||(c=l/this.qp,u=Math.sqrt(1-c*c)),this.mode){case this.OBLIQ:d=1+this.sinb1*c+this.cosb1*u*n;break;case this.EQUIT:d=1+u*n;break;case this.N_POLE:d=o+m,l=this.qp-l;break;case this.S_POLE:d=m-o,l=this.qp+l}if(Math.abs(d)<a)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:d=Math.sqrt(2/d),r=this.mode===this.OBLIQ?this.ymf*d*(this.cosb1*c-this.sinb1*u*n):(d=Math.sqrt(2/(1+u*n)))*c*this.ymf,e=this.xmf*d*u*i;break;case this.N_POLE:case this.S_POLE:l>=0?(e=(d=Math.sqrt(l))*i,r=n*(this.mode===this.S_POLE?d:-d)):e=r=0}}return t.x=this.a*e+this.x0,t.y=this.a*r+this.y0,t},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var e,r,n,i,s,l,c,h,u,d,p=t.x/this.a,f=t.y/this.a;if(this.sphere){var m,g=0,A=0;if((r=.5*(m=Math.sqrt(p*p+f*f)))>1)return null;switch(r=2*Math.asin(r),this.mode!==this.OBLIQ&&this.mode!==this.EQUIT||(A=Math.sin(r),g=Math.cos(r)),this.mode){case this.EQUIT:r=Math.abs(m)<=a?0:Math.asin(f*A/m),p*=A,f=g*m;break;case this.OBLIQ:r=Math.abs(m)<=a?this.lat0:Math.asin(g*this.sinph0+f*A*this.cosph0/m),p*=A*this.cosph0,f=(g-Math.sin(r)*this.sinph0)*m;break;case this.N_POLE:f=-f,r=o-r;break;case this.S_POLE:r-=o}e=0!==f||this.mode!==this.EQUIT&&this.mode!==this.OBLIQ?Math.atan2(p,f):0}else{if(c=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(p/=this.dd,f*=this.dd,(l=Math.sqrt(p*p+f*f))<a)return t.x=this.long0,t.y=this.lat0,t;i=2*Math.asin(.5*l/this.rq),n=Math.cos(i),p*=i=Math.sin(i),this.mode===this.OBLIQ?(c=n*this.sinb1+f*i*this.cosb1/l,s=this.qp*c,f=l*this.cosb1*n-f*this.sinb1*i):(c=f*i/l,s=this.qp*c,f=l*n)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(f=-f),!(s=p*p+f*f))return t.x=this.long0,t.y=this.lat0,t;c=1-s/this.qp,this.mode===this.S_POLE&&(c=-c)}e=Math.atan2(p,f),d=(h=Math.asin(c))+h,r=h+(u=this.apa)[0]*Math.sin(d)+u[1]*Math.sin(d+d)+u[2]*Math.sin(d+d+d)}return t.x=q(this.long0+e),t.y=r,t},names:["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"],S_POLE:1,N_POLE:2,EQUIT:3,OBLIQ:4};function Te(t){return Math.abs(t)>1&&(t=t>1?1:-1),Math.asin(t)}const Ie={init:function(){Math.abs(this.lat1+this.lat2)<a||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=j(this.e3,this.sin_po,this.cos_po),this.qs1=Me(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=j(this.e3,this.sin_po,this.cos_po),this.qs2=Me(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=Me(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>a?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)},forward:function(t){var e=t.x,r=t.y;this.sin_phi=Math.sin(r),this.cos_phi=Math.cos(r);var n=Me(this.e3,this.sin_phi),i=this.a*Math.sqrt(this.c-this.ns0*n)/this.ns0,s=this.ns0*q(e-this.long0),o=i*Math.sin(s)+this.x0,a=this.rh-i*Math.cos(s)+this.y0;return t.x=o,t.y=a,t},inverse:function(t){var e,r,n,i,s,o;return t.x-=this.x0,t.y=this.rh-t.y+this.y0,this.ns0>=0?(e=Math.sqrt(t.x*t.x+t.y*t.y),n=1):(e=-Math.sqrt(t.x*t.x+t.y*t.y),n=-1),i=0,0!==e&&(i=Math.atan2(n*t.x,n*t.y)),n=e*this.ns0/this.a,this.sphere?o=Math.asin((this.c-n*n)/(2*this.ns0)):(r=(this.c-n*n)/this.ns0,o=this.phi1z(this.e3,r)),s=q(i/this.ns0+this.long0),t.x=s,t.y=o,t},names:["Albers_Conic_Equal_Area","Albers_Equal_Area","Albers","aea"],phi1z:function(t,e){var r,n,i,s,o=Te(.5*e);if(t<a)return o;for(var l=t*t,c=1;c<=25;c++)if(o+=s=.5*(i=1-(n=t*(r=Math.sin(o)))*n)*i/Math.cos(o)*(e/(1-l)-r/i+.5/t*Math.log((1-n)/(1+n))),Math.abs(s)<=1e-7)return o;return null}},Re={init:function(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1},forward:function(t){var e,r,n,i,s,o,l,c=t.x,h=t.y;return n=q(c-this.long0),e=Math.sin(h),r=Math.cos(h),i=Math.cos(n),(s=this.sin_p14*e+this.cos_p14*r*i)>0||Math.abs(s)<=a?(o=this.x0+1*this.a*r*Math.sin(n)/s,l=this.y0+1*this.a*(this.cos_p14*e-this.sin_p14*r*i)/s):(o=this.x0+this.infinity_dist*r*Math.sin(n),l=this.y0+this.infinity_dist*(this.cos_p14*e-this.sin_p14*r*i)),t.x=o,t.y=l,t},inverse:function(t){var e,r,n,i,s,o;return t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,t.x/=this.k0,t.y/=this.k0,(e=Math.sqrt(t.x*t.x+t.y*t.y))?(i=Math.atan2(e,this.rc),r=Math.sin(i),o=Te((n=Math.cos(i))*this.sin_p14+t.y*r*this.cos_p14/e),s=Math.atan2(t.x*r,e*this.cos_p14*n-t.y*this.sin_p14*r),s=q(this.long0+s)):(o=this.phic0,s=0),t.x=s,t.y=o,t},names:["gnom"]},Pe={init:function(){this.sphere||(this.k0=j(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))},forward:function(t){var e,r,n=t.x,i=t.y,s=q(n-this.long0);if(this.sphere)e=this.x0+this.a*s*Math.cos(this.lat_ts),r=this.y0+this.a*Math.sin(i)/Math.cos(this.lat_ts);else{var o=Me(this.e,Math.sin(i));e=this.x0+this.a*this.k0*s,r=this.y0+this.a*o*.5/this.k0}return t.x=e,t.y=r,t},inverse:function(t){var e,r;return t.x-=this.x0,t.y-=this.y0,this.sphere?(e=q(this.long0+t.x/this.a/Math.cos(this.lat_ts)),r=Math.asin(t.y/this.a*Math.cos(this.lat_ts))):(r=function(t,e){var r=1-(1-t*t)/(2*t)*Math.log((1-t)/(1+t));if(Math.abs(Math.abs(e)-r)<1e-6)return e<0?-1*o:o;for(var n,i,s,a,l=Math.asin(.5*e),c=0;c<30;c++)if(i=Math.sin(l),s=Math.cos(l),a=t*i,l+=n=Math.pow(1-a*a,2)/(2*s)*(e/(1-t*t)-i/(1-a*a)+.5/t*Math.log((1-a)/(1+a))),Math.abs(n)<=1e-10)return l;return NaN}(this.e,2*t.y*this.k0/this.a),e=q(this.long0+t.x/(this.a*this.k0))),t.x=e,t.y=r,t},names:["cea"]},Be={init:function(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)},forward:function(t){var e=t.x,r=t.y,n=q(e-this.long0),i=be(r-this.lat0);return t.x=this.x0+this.a*n*this.rc,t.y=this.y0+this.a*i,t},inverse:function(t){var e=t.x,r=t.y;return t.x=q(this.long0+(e-this.x0)/(this.a*this.rc)),t.y=be(this.lat0+(r-this.y0)/this.a),t},names:["Equirectangular","Equidistant_Cylindrical","Equidistant_Cylindrical_Spherical","eqc"]},Le={init:function(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=ye(this.es),this.e1=ve(this.es),this.e2=xe(this.es),this.e3=_e(this.es),this.ml0=this.a*Ae(this.e0,this.e1,this.e2,this.e3,this.lat0)},forward:function(t){var e,r,n,i=t.x,s=t.y,o=q(i-this.long0);if(n=o*Math.sin(s),this.sphere)Math.abs(s)<=a?(e=this.a*o,r=-1*this.a*this.lat0):(e=this.a*Math.sin(n)/Math.tan(s),r=this.a*(be(s-this.lat0)+(1-Math.cos(n))/Math.tan(s)));else if(Math.abs(s)<=a)e=this.a*o,r=-1*this.ml0;else{var l=we(this.a,this.e,Math.sin(s))/Math.tan(s);e=l*Math.sin(n),r=this.a*Ae(this.e0,this.e1,this.e2,this.e3,s)-this.ml0+l*(1-Math.cos(n))}return t.x=e+this.x0,t.y=r+this.y0,t},inverse:function(t){var e,r,n,i,s,o,l,c,h;if(n=t.x-this.x0,i=t.y-this.y0,this.sphere)if(Math.abs(i+this.a*this.lat0)<=a)e=q(n/this.a+this.long0),r=0;else{var u;for(o=this.lat0+i/this.a,l=n*n/this.a/this.a+o*o,c=o,s=20;s;--s)if(c+=h=-1*(o*(c*(u=Math.tan(c))+1)-c-.5*(c*c+l)*u)/((c-o)/u-1),Math.abs(h)<=a){r=c;break}e=q(this.long0+Math.asin(n*Math.tan(c)/this.a)/Math.sin(r))}else if(Math.abs(i+this.ml0)<=a)r=0,e=q(this.long0+n/this.a);else{var d,p,f,m,g;for(o=(this.ml0+i)/this.a,l=n*n/this.a/this.a+o*o,c=o,s=20;s;--s)if(g=this.e*Math.sin(c),d=Math.sqrt(1-g*g)*Math.tan(c),p=this.a*Ae(this.e0,this.e1,this.e2,this.e3,c),f=this.e0-2*this.e1*Math.cos(2*c)+4*this.e2*Math.cos(4*c)-6*this.e3*Math.cos(6*c),c-=h=(o*(d*(m=p/this.a)+1)-m-.5*d*(m*m+l))/(this.es*Math.sin(2*c)*(m*m+l-2*o*m)/(4*d)+(o-m)*(d*f-2/Math.sin(2*c))-f),Math.abs(h)<=a){r=c;break}d=Math.sqrt(1-this.es*Math.pow(Math.sin(r),2))*Math.tan(r),e=q(this.long0+Math.asin(n*d/this.a)/Math.sin(r))}return t.x=e,t.y=r,t},names:["Polyconic","American_Polyconic","poly"]},De={init:function(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013},forward:function(t){var e,r=t.x,n=t.y-this.lat0,i=r-this.long0,o=n/s*1e-5,a=i,l=1,c=0;for(e=1;e<=10;e++)l*=o,c+=this.A[e]*l;var h,u=c,d=a,p=1,f=0,m=0,g=0;for(e=1;e<=6;e++)h=f*u+p*d,p=p*u-f*d,f=h,m=m+this.B_re[e]*p-this.B_im[e]*f,g=g+this.B_im[e]*p+this.B_re[e]*f;return t.x=g*this.a+this.x0,t.y=m*this.a+this.y0,t},inverse:function(t){var e,r,n=t.x,i=t.y,o=n-this.x0,a=(i-this.y0)/this.a,l=o/this.a,c=1,h=0,u=0,d=0;for(e=1;e<=6;e++)r=h*a+c*l,c=c*a-h*l,h=r,u=u+this.C_re[e]*c-this.C_im[e]*h,d=d+this.C_im[e]*c+this.C_re[e]*h;for(var p=0;p<this.iterations;p++){var f,m=u,g=d,A=a,y=l;for(e=2;e<=6;e++)f=g*u+m*d,m=m*u-g*d,g=f,A+=(e-1)*(this.B_re[e]*m-this.B_im[e]*g),y+=(e-1)*(this.B_im[e]*m+this.B_re[e]*g);m=1,g=0;var v=this.B_re[1],x=this.B_im[1];for(e=2;e<=6;e++)f=g*u+m*d,m=m*u-g*d,g=f,v+=e*(this.B_re[e]*m-this.B_im[e]*g),x+=e*(this.B_im[e]*m+this.B_re[e]*g);var _=v*v+x*x;u=(A*v+y*x)/_,d=(y*v-A*x)/_}var w=u,b=d,E=1,S=0;for(e=1;e<=9;e++)E*=w,S+=this.D[e]*E;var M=this.lat0+S*s*1e5,C=this.long0+b;return t.x=C,t.y=M,t},names:["New_Zealand_Map_Grid","nzmg"]},Oe={init:function(){},forward:function(t){var e=t.x,r=t.y,n=q(e-this.long0),i=this.x0+this.a*n,s=this.y0+this.a*Math.log(Math.tan(Math.PI/4+r/2.5))*1.25;return t.x=i,t.y=s,t},inverse:function(t){t.x-=this.x0,t.y-=this.y0;var e=q(this.long0+t.x/this.a),r=2.5*(Math.atan(Math.exp(.8*t.y/this.a))-Math.PI/4);return t.x=e,t.y=r,t},names:["Miller_Cylindrical","mill"]},Ne={init:function(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=Jt(this.es)},forward:function(t){var e,r,n=t.x,i=t.y;if(n=q(n-this.long0),this.sphere){if(this.m)for(var s=this.n*Math.sin(i),o=20;o;--o){var l=(this.m*i+Math.sin(i)-s)/(this.m+Math.cos(i));if(i-=l,Math.abs(l)<a)break}else i=1!==this.n?Math.asin(this.n*Math.sin(i)):i;e=this.a*this.C_x*n*(this.m+Math.cos(i)),r=this.a*this.C_y*i}else{var c=Math.sin(i),h=Math.cos(i);r=this.a*Kt(i,c,h,this.en),e=this.a*n*h/Math.sqrt(1-this.es*c*c)}return t.x=e,t.y=r,t},inverse:function(t){var e,r,n;return t.x-=this.x0,r=t.x/this.a,t.y-=this.y0,e=t.y/this.a,this.sphere?(e/=this.C_y,r/=this.C_x*(this.m+Math.cos(e)),this.m?e=Te((this.m*e+Math.sin(e))/this.n):1!==this.n&&(e=Te(Math.sin(e)/this.n)),r=q(r+this.long0),e=be(e)):(e=Zt(t.y/this.a,this.es,this.en),(n=Math.abs(e))<o?(n=Math.sin(e),r=q(this.long0+t.x*Math.sqrt(1-this.es*n*n)/(this.a*Math.cos(e)))):n-a<o&&(r=this.long0)),t.x=r,t.y=e,t},names:["Sinusoidal","sinu"]},Fe={init:function(){},forward:function(t){for(var e=t.x,r=t.y,n=q(e-this.long0),i=r,s=Math.PI*Math.sin(r);;){var o=-(i+Math.sin(i)-s)/(1+Math.cos(i));if(i+=o,Math.abs(o)<a)break}i/=2,Math.PI/2-Math.abs(r)<a&&(n=0);var l=.900316316158*this.a*n*Math.cos(i)+this.x0,c=1.4142135623731*this.a*Math.sin(i)+this.y0;return t.x=l,t.y=c,t},inverse:function(t){var e,r;t.x-=this.x0,t.y-=this.y0,r=t.y/(1.4142135623731*this.a),Math.abs(r)>.999999999999&&(r=.999999999999),e=Math.asin(r);var n=q(this.long0+t.x/(.900316316158*this.a*Math.cos(e)));n<-Math.PI&&(n=-Math.PI),n>Math.PI&&(n=Math.PI),r=(2*e+Math.sin(2*e))/Math.PI,Math.abs(r)>1&&(r=1);var i=Math.asin(r);return t.x=n,t.y=i,t},names:["Mollweide","moll"]},Ue={init:function(){Math.abs(this.lat1+this.lat2)<a||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=ye(this.es),this.e1=ve(this.es),this.e2=xe(this.es),this.e3=_e(this.es),this.sin_phi=Math.sin(this.lat1),this.cos_phi=Math.cos(this.lat1),this.ms1=j(this.e,this.sin_phi,this.cos_phi),this.ml1=Ae(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<a?this.ns=this.sin_phi:(this.sin_phi=Math.sin(this.lat2),this.cos_phi=Math.cos(this.lat2),this.ms2=j(this.e,this.sin_phi,this.cos_phi),this.ml2=Ae(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=Ae(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))},forward:function(t){var e,r=t.x,n=t.y;if(this.sphere)e=this.a*(this.g-n);else{var i=Ae(this.e0,this.e1,this.e2,this.e3,n);e=this.a*(this.g-i)}var s=this.ns*q(r-this.long0),o=this.x0+e*Math.sin(s),a=this.y0+this.rh-e*Math.cos(s);return t.x=o,t.y=a,t},inverse:function(t){var e,r,n,i;t.x-=this.x0,t.y=this.rh-t.y+this.y0,this.ns>=0?(r=Math.sqrt(t.x*t.x+t.y*t.y),e=1):(r=-Math.sqrt(t.x*t.x+t.y*t.y),e=-1);var s=0;return 0!==r&&(s=Math.atan2(e*t.x,e*t.y)),this.sphere?(i=q(this.long0+s/this.ns),n=be(this.g-r/this.a),t.x=i,t.y=n,t):(n=Ee(this.g-r/this.a,this.e0,this.e1,this.e2,this.e3),i=q(this.long0+s/this.ns),t.x=i,t.y=n,t)},names:["Equidistant_Conic","eqdc"]},ke={init:function(){this.R=this.a},forward:function(t){var e,r,n=t.x,i=t.y,s=q(n-this.long0);Math.abs(i)<=a&&(e=this.x0+this.R*s,r=this.y0);var l=Te(2*Math.abs(i/Math.PI));(Math.abs(s)<=a||Math.abs(Math.abs(i)-o)<=a)&&(e=this.x0,r=i>=0?this.y0+Math.PI*this.R*Math.tan(.5*l):this.y0+Math.PI*this.R*-Math.tan(.5*l));var c=.5*Math.abs(Math.PI/s-s/Math.PI),h=c*c,u=Math.sin(l),d=Math.cos(l),p=d/(u+d-1),f=p*p,m=p*(2/u-1),g=m*m,A=Math.PI*this.R*(c*(p-g)+Math.sqrt(h*(p-g)*(p-g)-(g+h)*(f-g)))/(g+h);s<0&&(A=-A),e=this.x0+A;var y=h+p;return A=Math.PI*this.R*(m*y-c*Math.sqrt((g+h)*(h+1)-y*y))/(g+h),r=i>=0?this.y0+A:this.y0-A,t.x=e,t.y=r,t},inverse:function(t){var e,r,n,i,s,o,l,c,h,u,d,p;return t.x-=this.x0,t.y-=this.y0,d=Math.PI*this.R,s=(n=t.x/d)*n+(i=t.y/d)*i,d=3*(i*i/(c=-2*(o=-Math.abs(i)*(1+s))+1+2*i*i+s*s)+(2*(l=o-2*i*i+n*n)*l*l/c/c/c-9*o*l/c/c)/27)/(h=(o-l*l/3/c)/c)/(u=2*Math.sqrt(-h/3)),Math.abs(d)>1&&(d=d>=0?1:-1),p=Math.acos(d)/3,r=t.y>=0?(-u*Math.cos(p+Math.PI/3)-l/3/c)*Math.PI:-(-u*Math.cos(p+Math.PI/3)-l/3/c)*Math.PI,e=Math.abs(n)<a?this.long0:q(this.long0+Math.PI*(s-1+Math.sqrt(1+2*(n*n-i*i)+s*s))/2/n),t.x=e,t.y=r,t},names:["Van_der_Grinten_I","VanDerGrinten","Van_der_Grinten","vandg"]},ze={init:function(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0),this.f=this.es/(1+Math.sqrt(1-this.es))},forward:function(t){var e,r,n,i,s,l,c,h,u,d,p,f=t.x,m=t.y,g=Math.sin(t.y),A=Math.cos(t.y),y=q(f-this.long0);return this.sphere?Math.abs(this.sin_p12-1)<=a?(t.x=this.x0+this.a*(o-m)*Math.sin(y),t.y=this.y0-this.a*(o-m)*Math.cos(y),t):Math.abs(this.sin_p12+1)<=a?(t.x=this.x0+this.a*(o+m)*Math.sin(y),t.y=this.y0+this.a*(o+m)*Math.cos(y),t):(u=this.sin_p12*g+this.cos_p12*A*Math.cos(y),h=(c=Math.acos(u))?c/Math.sin(c):1,t.x=this.x0+this.a*h*A*Math.sin(y),t.y=this.y0+this.a*h*(this.cos_p12*g-this.sin_p12*A*Math.cos(y)),t):(e=ye(this.es),r=ve(this.es),n=xe(this.es),i=_e(this.es),Math.abs(this.sin_p12-1)<=a?(s=this.a*Ae(e,r,n,i,o),l=this.a*Ae(e,r,n,i,m),t.x=this.x0+(s-l)*Math.sin(y),t.y=this.y0-(s-l)*Math.cos(y),t):Math.abs(this.sin_p12+1)<=a?(s=this.a*Ae(e,r,n,i,o),l=this.a*Ae(e,r,n,i,m),t.x=this.x0+(s+l)*Math.sin(y),t.y=this.y0+(s+l)*Math.cos(y),t):Math.abs(f)<a&&Math.abs(m-this.lat0)<a?(t.x=t.y=0,t):(d=function(t,e,r,n,i,s){const o=n-e,a=Math.atan((1-s)*Math.tan(t)),l=Math.atan((1-s)*Math.tan(r)),c=Math.sin(a),h=Math.cos(a),u=Math.sin(l),d=Math.cos(l);let p,f,m,g,A,y,v,x,_,w,b,E,S,M,C,T=o,I=100;do{if(f=Math.sin(T),m=Math.cos(T),g=Math.sqrt(d*f*(d*f)+(h*u-c*d*m)*(h*u-c*d*m)),0===g)return{azi1:0,s12:0};A=c*u+h*d*m,y=Math.atan2(g,A),v=h*d*f/g,x=1-v*v,_=0!==x?A-2*c*u/x:0,w=s/16*x*(4+s*(4-3*x)),p=T,T=o+(1-w)*s*v*(y+w*g*(_+w*A*(2*_*_-1)))}while(Math.abs(T-p)>1e-12&&--I>0);return 0===I?{azi1:NaN,s12:NaN}:(b=x*(i*i-i*(1-s)*(i*(1-s)))/(i*(1-s)*(i*(1-s))),E=1+b/16384*(4096+b*(b*(320-175*b)-768)),S=b/1024*(256+b*(b*(74-47*b)-128)),M=S*g*(_+S/4*(A*(2*_*_-1)-S/6*_*(4*g*g-3)*(4*_*_-3))),C=i*(1-s)*E*(y-M),{azi1:Math.atan2(d*f,h*u-c*d*m),s12:C})}(this.lat0,this.long0,m,f,this.a,this.f),p=d.azi1,t.x=d.s12*Math.sin(p),t.y=d.s12*Math.cos(p),t))},inverse:function(t){var e,r,n,i,s,l,c,h,u,d,p,f,m,g,A;if(t.x-=this.x0,t.y-=this.y0,this.sphere){if((e=Math.sqrt(t.x*t.x+t.y*t.y))>2*o*this.a)return;return r=e/this.a,n=Math.sin(r),i=Math.cos(r),s=this.long0,Math.abs(e)<=a?l=this.lat0:(l=Te(i*this.sin_p12+t.y*n*this.cos_p12/e),c=Math.abs(this.lat0)-o,s=Math.abs(c)<=a?this.lat0>=0?q(this.long0+Math.atan2(t.x,-t.y)):q(this.long0-Math.atan2(-t.x,t.y)):q(this.long0+Math.atan2(t.x*n,e*this.cos_p12*i-t.y*this.sin_p12*n))),t.x=s,t.y=l,t}return h=ye(this.es),u=ve(this.es),d=xe(this.es),p=_e(this.es),Math.abs(this.sin_p12-1)<=a?(l=Ee(((f=this.a*Ae(h,u,d,p,o))-(e=Math.sqrt(t.x*t.x+t.y*t.y)))/this.a,h,u,d,p),s=q(this.long0+Math.atan2(t.x,-1*t.y)),t.x=s,t.y=l,t):Math.abs(this.sin_p12+1)<=a?(f=this.a*Ae(h,u,d,p,o),l=Ee(((e=Math.sqrt(t.x*t.x+t.y*t.y))-f)/this.a,h,u,d,p),s=q(this.long0+Math.atan2(t.x,t.y)),t.x=s,t.y=l,t):(m=Math.atan2(t.x,t.y),g=Math.sqrt(t.x*t.x+t.y*t.y),A=function(t,e,r,n,i,s){const o=Math.atan((1-s)*Math.tan(t)),a=Math.sin(o),l=Math.cos(o),c=Math.sin(r),h=Math.cos(r),u=Math.atan2(a,l*h),d=l*c,p=1-d*d,f=p*(i*i-i*(1-s)*(i*(1-s)))/(i*(1-s)*(i*(1-s))),m=1+f/16384*(4096+f*(f*(320-175*f)-768)),g=f/1024*(256+f*(f*(74-47*f)-128));let A,y,v,x,_,w=n/(i*(1-s)*m),b=100;do{y=Math.cos(2*u+w),v=Math.sin(w),x=Math.cos(w),_=g*v*(y+g/4*(x*(2*y*y-1)-g/6*y*(4*v*v-3)*(4*y*y-3))),A=w,w=n/(i*(1-s)*m)+_}while(Math.abs(w-A)>1e-12&&--b>0);if(0===b)return{lat2:NaN,lon2:NaN};const E=a*v-l*x*h,S=s/16*p*(4+s*(4-3*p));return{lat2:Math.atan2(a*x+l*v*h,(1-s)*Math.sqrt(d*d+E*E)),lon2:e+(Math.atan2(v*c,l*x-a*v*h)-(1-S)*s*d*(w+S*v*(y+S*x*(2*y*y-1))))}}(this.lat0,this.long0,m,g,this.a,this.f),t.x=A.lon2,t.y=A.lat2,t)},names:["Azimuthal_Equidistant","aeqd"]},Ge={init:function(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)},forward:function(t){var e,r,n,i,s,o,l,c=t.x,h=t.y;return n=q(c-this.long0),e=Math.sin(h),r=Math.cos(h),i=Math.cos(n),((s=this.sin_p14*e+this.cos_p14*r*i)>0||Math.abs(s)<=a)&&(o=1*this.a*r*Math.sin(n),l=this.y0+1*this.a*(this.cos_p14*e-this.sin_p14*r*i)),t.x=o,t.y=l,t},inverse:function(t){var e,r,n,i,s,l,c;return t.x-=this.x0,t.y-=this.y0,r=Te((e=Math.sqrt(t.x*t.x+t.y*t.y))/this.a),n=Math.sin(r),i=Math.cos(r),l=this.long0,Math.abs(e)<=a?(c=this.lat0,t.x=l,t.y=c,t):(c=Te(i*this.sin_p14+t.y*n*this.cos_p14/e),s=Math.abs(this.lat0)-o,Math.abs(s)<=a?(l=this.lat0>=0?q(this.long0+Math.atan2(t.x,-t.y)):q(this.long0-Math.atan2(-t.x,t.y)),t.x=l,t.y=c,t):(l=q(this.long0+Math.atan2(t.x*n,e*this.cos_p14*i-t.y*this.sin_p14*n)),t.x=l,t.y=c,t))},names:["ortho"]};function Qe(t,e,r,n){var i;return t<a?(n.value=1,i=0):(i=Math.atan2(e,r),Math.abs(i)<=h?n.value=1:i>h&&i<=o+h?(n.value=2,i-=o):i>o+h||i<=-(o+h)?(n.value=3,i=i>=0?i-d:i+d):(n.value=4,i+=o)),i}function Ve(t,e){var r=t+e;return r<-d?r+=u:r>+d&&(r-=u),r}const je={init:function(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=o-h/2?this.face=5:this.lat0<=-(o-h/2)?this.face=6:Math.abs(this.long0)<=h?this.face=1:Math.abs(this.long0)<=o+h?this.face=this.long0>0?2:4:this.face=3,0!==this.es&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)},forward:function(t){var e,r,n,i,s,a,l={x:0,y:0},c={value:0};if(t.x-=this.long0,e=0!==this.es?Math.atan(this.one_minus_f_squared*Math.tan(t.y)):t.y,r=t.x,5===this.face)i=o-e,r>=h&&r<=o+h?(c.value=1,n=r-o):r>o+h||r<=-(o+h)?(c.value=2,n=r>0?r-d:r+d):r>-(o+h)&&r<=-h?(c.value=3,n=r+o):(c.value=4,n=r);else if(6===this.face)i=o+e,r>=h&&r<=o+h?(c.value=1,n=-r+o):r<h&&r>=-h?(c.value=2,n=-r):r<-h&&r>=-(o+h)?(c.value=3,n=-r-o):(c.value=4,n=r>0?-r+d:-r-d);else{var u,p,f,m,g,A;2===this.face?r=Ve(r,+o):3===this.face?r=Ve(r,+d):4===this.face&&(r=Ve(r,-o)),m=Math.sin(e),g=Math.cos(e),A=Math.sin(r),u=g*Math.cos(r),p=g*A,f=m,1===this.face?n=Qe(i=Math.acos(u),f,p,c):2===this.face?n=Qe(i=Math.acos(p),f,-u,c):3===this.face?n=Qe(i=Math.acos(-u),f,-p,c):4===this.face?n=Qe(i=Math.acos(-p),f,u,c):(i=n=0,c.value=1)}return a=Math.atan(12/d*(n+Math.acos(Math.sin(n)*Math.cos(h))-o)),s=Math.sqrt((1-Math.cos(i))/(Math.cos(a)*Math.cos(a))/(1-Math.cos(Math.atan(1/Math.cos(n))))),2===c.value?a+=o:3===c.value?a+=d:4===c.value&&(a+=1.5*d),l.x=s*Math.cos(a),l.y=s*Math.sin(a),l.x=l.x*this.a+this.x0,l.y=l.y*this.a+this.y0,t.x=l.x,t.y=l.y,t},inverse:function(t){var e,r,n,i,s,a,l,c,h,u,p,f,m={lam:0,phi:0},g={value:0};if(t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a,r=Math.atan(Math.sqrt(t.x*t.x+t.y*t.y)),e=Math.atan2(t.y,t.x),t.x>=0&&t.x>=Math.abs(t.y)?g.value=1:t.y>=0&&t.y>=Math.abs(t.x)?(g.value=2,e-=o):t.x<0&&-t.x>=Math.abs(t.y)?(g.value=3,e=e<0?e+d:e-d):(g.value=4,e+=o),h=d/12*Math.tan(e),s=Math.sin(h)/(Math.cos(h)-1/Math.sqrt(2)),a=Math.atan(s),(l=1-(n=Math.cos(e))*n*(i=Math.tan(r))*i*(1-Math.cos(Math.atan(1/Math.cos(a)))))<-1?l=-1:l>1&&(l=1),5===this.face)c=Math.acos(l),m.phi=o-c,1===g.value?m.lam=a+o:2===g.value?m.lam=a<0?a+d:a-d:3===g.value?m.lam=a-o:m.lam=a;else if(6===this.face)c=Math.acos(l),m.phi=c-o,1===g.value?m.lam=-a+o:2===g.value?m.lam=-a:3===g.value?m.lam=-a-o:m.lam=a<0?-a-d:-a+d;else{var A,y,v;h=(A=l)*A,y=(h+=(v=h>=1?0:Math.sqrt(1-h)*Math.sin(a))*v)>=1?0:Math.sqrt(1-h),2===g.value?(h=y,y=-v,v=h):3===g.value?(y=-y,v=-v):4===g.value&&(h=y,y=v,v=-h),2===this.face?(h=A,A=-y,y=h):3===this.face?(A=-A,y=-y):4===this.face&&(h=A,A=y,y=-h),m.phi=Math.acos(-v)-o,m.lam=Math.atan2(y,A),2===this.face?m.lam=Ve(m.lam,-o):3===this.face?m.lam=Ve(m.lam,-d):4===this.face&&(m.lam=Ve(m.lam,+o))}return 0!==this.es&&(u=m.phi<0?1:0,p=Math.tan(m.phi),f=this.b/Math.sqrt(p*p+this.one_minus_f_squared),m.phi=Math.atan(Math.sqrt(this.a*this.a-f*f)/(this.one_minus_f*f)),u&&(m.phi=-m.phi)),m.lam+=this.long0,t.x=m.lam,t.y=m.phi,t},names:["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"]};var He=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-9.86701e-7],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,1.8736e-8],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,9.34959e-7],[.7986,-.00755338,-500009e-10,9.35324e-7],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],qe=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-1.26793e-9,4.22642e-10],[.124,.0124,5.07171e-9,-1.60604e-9],[.186,.0123999,-1.90189e-8,6.00152e-9],[.248,.0124002,7.10039e-8,-2.24e-8],[.31,.0123992,-2.64997e-7,8.35986e-8],[.372,.0124029,9.88983e-7,-3.11994e-7],[.434,.0123893,-369093e-11,-4.35621e-7],[.4958,.0123198,-102252e-10,-3.45523e-7],[.5571,.0121916,-154081e-10,-5.82288e-7],[.6176,.0119938,-241424e-10,-5.25327e-7],[.6769,.011713,-320223e-10,-5.16405e-7],[.7346,.0113541,-397684e-10,-6.09052e-7],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-1.40374e-9],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],We=.8487,Ye=1.3523,Xe=c/5,$e=1/Xe,Je=function(t,e){return t[0]+e*(t[1]+e*(t[2]+e*t[3]))};const Ke={init:function(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"},forward:function(t){var e=q(t.x-this.long0),r=Math.abs(t.y),n=Math.floor(r*Xe);n<0?n=0:n>=18&&(n=17);var i={x:Je(He[n],r=c*(r-$e*n))*e,y:Je(qe[n],r)};return t.y<0&&(i.y=-i.y),i.x=i.x*this.a*We+this.x0,i.y=i.y*this.a*Ye+this.y0,i},inverse:function(t){var e={x:(t.x-this.x0)/(this.a*We),y:Math.abs(t.y-this.y0)/(this.a*Ye)};if(e.y>=1)e.x/=He[18][0],e.y=t.y<0?-o:o;else{var r=Math.floor(18*e.y);for(r<0?r=0:r>=18&&(r=17);;)if(qe[r][0]>e.y)--r;else{if(!(qe[r+1][0]<=e.y))break;++r}var n=qe[r],i=5*(e.y-n[0])/(qe[r+1][0]-n[0]);i=function(t,e,r,n){for(var i=e;n;--n){var s=t(i);if(i-=s,Math.abs(s)<1e-10)break}return i}((function(t){return(Je(n,t)-e.y)/function(t,e){return t[1]+e*(2*t[2]+3*e*t[3])}(n,t)}),i,0,100),e.x/=Je(He[r],i),e.y=(5*r+i)*l,t.y<0&&(e.y=-e.y)}return e.x=q(e.x+this.long0),e},names:["Robinson","robin"]},Ze={init:function(){this.name="geocent"},forward:function(t){return vt(t,this.es,this.a)},inverse:function(t){return xt(t,this.es,this.a,this.b)},names:["Geocentric","geocentric","geocent","Geocent"]};var tr={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};const er={init:function(){if(Object.keys(tr).forEach(function(t){if(void 0===this[t])this[t]=tr[t].def;else{if(tr[t].num&&isNaN(this[t]))throw new Error("Invalid parameter value, must be numeric "+t+" = "+this[t]);tr[t].num&&(this[t]=parseFloat(this[t]))}tr[t].degrees&&(this[t]=this[t]*l)}.bind(this)),Math.abs(Math.abs(this.lat0)-o)<a?this.mode=this.lat0<0?1:0:Math.abs(this.lat0)<a?this.mode=2:(this.mode=3,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var t=this.tilt,e=this.azi;this.cg=Math.cos(e),this.sg=Math.sin(e),this.cw=Math.cos(t),this.sw=Math.sin(t)},forward:function(t){t.x-=this.long0;var e,r,n,i,s=Math.sin(t.y),o=Math.cos(t.y),a=Math.cos(t.x);switch(this.mode){case 3:r=this.sinph0*s+this.cosph0*o*a;break;case 2:r=o*a;break;case 1:r=-s;break;case 0:r=s}switch(e=(r=this.pn1/(this.p-r))*o*Math.sin(t.x),this.mode){case 3:r*=this.cosph0*s-this.sinph0*o*a;break;case 2:r*=s;break;case 0:r*=-o*a;break;case 1:r*=o*a}return i=1/((n=r*this.cg+e*this.sg)*this.sw*this.h1+this.cw),e=(e*this.cg-r*this.sg)*this.cw*i,r=n*i,t.x=e*this.a,t.y=r*this.a,t},inverse:function(t){t.x/=this.a,t.y/=this.a;var e,r,n,i={x:t.x,y:t.y};n=1/(this.pn1-t.y*this.sw),e=this.pn1*t.x*n,r=this.pn1*t.y*this.cw*n,t.x=e*this.cg+r*this.sg,t.y=r*this.cg-e*this.sg;var s=re(t.x,t.y);if(Math.abs(s)<a)i.x=0,i.y=t.y;else{var o,l;switch(l=1-s*s*this.pfact,l=(this.p-Math.sqrt(l))/(this.pn1/s+s/this.pn1),o=Math.sqrt(1-l*l),this.mode){case 3:i.y=Math.asin(o*this.sinph0+t.y*l*this.cosph0/s),t.y=(o-this.sinph0*Math.sin(i.y))*s,t.x*=l*this.cosph0;break;case 2:i.y=Math.asin(t.y*l/s),t.y=o*s,t.x*=l;break;case 0:i.y=Math.asin(o),t.y=-t.y;break;case 1:i.y=-Math.asin(o)}i.x=Math.atan2(t.x,t.y)}return t.x=i.x+this.long0,t.y=i.y,t},names:["Tilted_Perspective","tpers"]},rr={init:function(){if(this.flip_axis="x"===this.sweep?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,0!==this.es){var t=1-this.es,e=1/t;this.radius_p=Math.sqrt(t),this.radius_p2=t,this.radius_p_inv2=e,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")},forward:function(t){var e,r,n,i,s=t.x,o=t.y;if(s-=this.long0,"ellipse"===this.shape){o=Math.atan(this.radius_p2*Math.tan(o));var a=this.radius_p/re(this.radius_p*Math.cos(o),Math.sin(o));if(r=a*Math.cos(s)*Math.cos(o),n=a*Math.sin(s)*Math.cos(o),i=a*Math.sin(o),(this.radius_g-r)*r-n*n-i*i*this.radius_p_inv2<0)return t.x=Number.NaN,t.y=Number.NaN,t;e=this.radius_g-r,this.flip_axis?(t.x=this.radius_g_1*Math.atan(n/re(i,e)),t.y=this.radius_g_1*Math.atan(i/e)):(t.x=this.radius_g_1*Math.atan(n/e),t.y=this.radius_g_1*Math.atan(i/re(n,e)))}else"sphere"===this.shape&&(e=Math.cos(o),r=Math.cos(s)*e,n=Math.sin(s)*e,i=Math.sin(o),e=this.radius_g-r,this.flip_axis?(t.x=this.radius_g_1*Math.atan(n/re(i,e)),t.y=this.radius_g_1*Math.atan(i/e)):(t.x=this.radius_g_1*Math.atan(n/e),t.y=this.radius_g_1*Math.atan(i/re(n,e))));return t.x=t.x*this.a,t.y=t.y*this.a,t},inverse:function(t){var e,r,n,i,s=-1,o=0,a=0;if(t.x=t.x/this.a,t.y=t.y/this.a,"ellipse"===this.shape){this.flip_axis?(a=Math.tan(t.y/this.radius_g_1),o=Math.tan(t.x/this.radius_g_1)*re(1,a)):(o=Math.tan(t.x/this.radius_g_1),a=Math.tan(t.y/this.radius_g_1)*re(1,o));var l=a/this.radius_p;if(e=o*o+l*l+s*s,(n=(r=2*this.radius_g*s)*r-4*e*this.C)<0)return t.x=Number.NaN,t.y=Number.NaN,t;i=(-r-Math.sqrt(n))/(2*e),s=this.radius_g+i*s,o*=i,a*=i,t.x=Math.atan2(o,s),t.y=Math.atan(a*Math.cos(t.x)/s),t.y=Math.atan(this.radius_p_inv2*Math.tan(t.y))}else if("sphere"===this.shape){if(this.flip_axis?(a=Math.tan(t.y/this.radius_g_1),o=Math.tan(t.x/this.radius_g_1)*Math.sqrt(1+a*a)):(o=Math.tan(t.x/this.radius_g_1),a=Math.tan(t.y/this.radius_g_1)*Math.sqrt(1+o*o)),e=o*o+a*a+s*s,(n=(r=2*this.radius_g*s)*r-4*e*this.C)<0)return t.x=Number.NaN,t.y=Number.NaN,t;i=(-r-Math.sqrt(n))/(2*e),s=this.radius_g+i*s,o*=i,a*=i,t.x=Math.atan2(o,s),t.y=Math.atan(a*Math.cos(t.x)/s)}return t.x=t.x+this.long0,t},names:["Geostationary Satellite View","Geostationary_Satellite","geos"]};var nr=1.340264,ir=-.081106,sr=893e-6,or=.003796,ar=Math.sqrt(3)/2;const lr={init:function(){this.es=0,this.long0=void 0!==this.long0?this.long0:0},forward:function(t){var e=q(t.x-this.long0),r=t.y,n=Math.asin(ar*Math.sin(r)),i=n*n,s=i*i*i;return t.x=e*Math.cos(n)/(ar*(nr+3*ir*i+s*(7*sr+9*or*i))),t.y=n*(nr+ir*i+s*(sr+or*i)),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t},inverse:function(t){t.x=(t.x-this.x0)/this.a,t.y=(t.y-this.y0)/this.a;var e,r,n,i,s=t.y;for(i=0;i<12&&(s-=n=(s*(nr+ir*(e=s*s)+(r=e*e*e)*(sr+or*e))-t.y)/(nr+3*ir*e+r*(7*sr+9*or*e)),!(Math.abs(n)<1e-9));++i);return r=(e=s*s)*e*e,t.x=ar*t.x*(nr+3*ir*e+r*(7*sr+9*or*e))/Math.cos(s),t.y=Math.asin(Math.sin(s)/ar),t.x=q(t.x+this.long0),t},names:["eqearth","Equal Earth","Equal_Earth"]};var cr=1e-10;function hr(t){var e,r,n,i=q(t.x-(this.long0||0)),s=t.y;return e=this.am1+this.m1-Kt(s,r=Math.sin(s),n=Math.cos(s),this.en),r=n*i/(e*Math.sqrt(1-this.es*r*r)),t.x=e*Math.sin(r),t.y=this.am1-e*Math.cos(r),t.x=this.a*t.x+(this.x0||0),t.y=this.a*t.y+(this.y0||0),t}function ur(t){var e,r,n,i;if(t.x=(t.x-(this.x0||0))/this.a,t.y=(t.y-(this.y0||0))/this.a,r=re(t.x,t.y=this.am1-t.y),i=Zt(this.am1+this.m1-r,this.es,this.en),(e=Math.abs(i))<o)e=Math.sin(i),n=r*Math.atan2(t.x,t.y)*Math.sqrt(1-this.es*e*e)/Math.cos(i);else{if(!(Math.abs(e-o)<=cr))throw new Error;n=0}return t.x=q(n+(this.long0||0)),t.y=be(i),t}function dr(t){var e,r,n=q(t.x-(this.long0||0)),i=t.y;return r=this.cphi1+this.phi1-i,Math.abs(r)>cr?(t.x=r*Math.sin(e=n*Math.cos(i)/r),t.y=this.cphi1-r*Math.cos(e)):t.x=t.y=0,t.x=this.a*t.x+(this.x0||0),t.y=this.a*t.y+(this.y0||0),t}function pr(t){var e,r;t.x=(t.x-(this.x0||0))/this.a,t.y=(t.y-(this.y0||0))/this.a;var n=re(t.x,t.y=this.cphi1-t.y);if(r=this.cphi1+this.phi1-n,Math.abs(r)>o)throw new Error;return e=Math.abs(Math.abs(r)-o)<=cr?0:n*Math.atan2(t.x,t.y)/Math.cos(r),t.x=q(e+(this.long0||0)),t.y=be(r),t}const fr={init:function(){var t;if(this.phi1=this.lat1,Math.abs(this.phi1)<cr)throw new Error;this.es?(this.en=Jt(this.es),this.m1=Kt(this.phi1,this.am1=Math.sin(this.phi1),t=Math.cos(this.phi1),this.en),this.am1=t/(Math.sqrt(1-this.es*this.am1*this.am1)*this.am1),this.inverse=ur,this.forward=hr):(Math.abs(this.phi1)+cr>=o?this.cphi1=0:this.cphi1=1/Math.tan(this.phi1),this.inverse=pr,this.forward=dr)},names:["bonne","Bonne (Werner lat_1=90)"]},mr=Object.assign((function(t,e,r){var n,i,s,o=!1;return void 0===e?(i=Pt(t),n=It,o=!0):(void 0!==e.x||Array.isArray(e))&&(r=e,i=Pt(t),n=It,o=!0),n||(n=Pt(t)),i||(i=Pt(e)),r?Rt(n,i,r):(s={forward:function(t,e){return Rt(n,i,t,e)},inverse:function(t,e){return Rt(i,n,t,e)}},o&&(s.oProj=i),s)}),{defaultDatum:"WGS84",Proj:yt,WGS84:new yt("WGS84"),Point:Wt,toPoint:Mt,defs:G,nadgrid:function(t,e,r){return e instanceof ArrayBuffer?function(t,e,r){var n=!0;void 0!==r&&!1===r.includeErrorFields&&(n=!1);var i=new DataView(e),s=function(t){var e=t.getInt32(8,!1);return 11!==e&&(11!==(e=t.getInt32(8,!0))&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}(i),o=function(t,e){return{nFields:t.getInt32(8,e),nSubgridFields:t.getInt32(24,e),nSubgrids:t.getInt32(40,e),shiftType:pt(t,56,64).trim(),fromSemiMajorAxis:t.getFloat64(120,e),fromSemiMinorAxis:t.getFloat64(136,e),toSemiMajorAxis:t.getFloat64(152,e),toSemiMinorAxis:t.getFloat64(168,e)}}(i,s),a=function(t,e,r,n){for(var i=176,s=[],o=0;o<e.nSubgrids;o++){var a=mt(t,i,r),l=gt(t,i,a,r,n),c=Math.round(1+(a.upperLongitude-a.lowerLongitude)/a.longitudeInterval),h=Math.round(1+(a.upperLatitude-a.lowerLatitude)/a.latitudeInterval);s.push({ll:[dt(a.lowerLongitude),dt(a.lowerLatitude)],del:[dt(a.longitudeInterval),dt(a.latitudeInterval)],lim:[c,h],count:a.gridNodeCount,cvs:ft(l)});var u=16;!1===n&&(u=8),i+=176+a.gridNodeCount*u}return s}(i,o,s,n),l={header:o,subgrids:a};return lt[t]=l,l}(t,e,r):{ready:ct(t,e)}},transform:Tt,mgrs:Ft,version:"__VERSION__"});var gr;(gr=mr).Proj.projections.add(te),gr.Proj.projections.add(se),gr.Proj.projections.add(oe),gr.Proj.projections.add(ce),gr.Proj.projections.add(ue),gr.Proj.projections.add(de),gr.Proj.projections.add(fe),gr.Proj.projections.add(me),gr.Proj.projections.add(ge),gr.Proj.projections.add(Se),gr.Proj.projections.add(Ce),gr.Proj.projections.add(Ie),gr.Proj.projections.add(Re),gr.Proj.projections.add(Pe),gr.Proj.projections.add(Be),gr.Proj.projections.add(Le),gr.Proj.projections.add(De),gr.Proj.projections.add(Oe),gr.Proj.projections.add(Ne),gr.Proj.projections.add(Fe),gr.Proj.projections.add(Ue),gr.Proj.projections.add(ke),gr.Proj.projections.add(ze),gr.Proj.projections.add(Ge),gr.Proj.projections.add(je),gr.Proj.projections.add(Ke),gr.Proj.projections.add(Ze),gr.Proj.projections.add(er),gr.Proj.projections.add(rr),gr.Proj.projections.add(lr),gr.Proj.projections.add(fr);const Ar=mr},14601:(t,e,r)=>{"use strict";var n=r(97751),i=r(39297),s=r(66699),o=r(1625),a=r(52967),l=r(77740),c=r(11056),h=r(23167),u=r(32603),d=r(77584),p=r(80747),f=r(43724),m=r(96395);t.exports=function(t,e,r,g){var A="stackTraceLimit",y=g?2:1,v=t.split("."),x=v[v.length-1],_=n.apply(null,v);if(_){var w=_.prototype;if(!m&&i(w,"cause")&&delete w.cause,!r)return _;var b=n("Error"),E=e((function(t,e){var r=u(g?e:t,void 0),n=g?new _(t):new _;return void 0!==r&&s(n,"message",r),p(n,E,n.stack,2),this&&o(w,this)&&h(n,this,E),arguments.length>y&&d(n,arguments[y]),n}));if(E.prototype=w,"Error"!==x?a?a(E,b):l(E,b,{name:!0}):f&&A in _&&(c(E,_,A),c(E,_,"prepareStackTrace")),l(E,_),!m)try{w.name!==x&&s(w,"name",x),w.constructor=E}catch(t){}return E}}},14603:(t,e,r)=>{"use strict";var n=r(36840),i=r(79504),s=r(655),o=r(22812),a=URLSearchParams,l=a.prototype,c=i(l.append),h=i(l.delete),u=i(l.forEach),d=i([].push),p=new a("a=1&a=2&b=3");p.delete("a",1),p.delete("b",void 0),p+""!="a=2"&&n(l,"delete",(function(t){var e=arguments.length,r=e<2?void 0:arguments[1];if(e&&void 0===r)return h(this,t);var n=[];u(this,(function(t,e){d(n,{key:e,value:t})})),o(e,1);for(var i,a=s(t),l=s(r),p=0,f=0,m=!1,g=n.length;p<g;)i=n[p++],m||i.key===a?(m=!0,h(this,i.key)):f++;for(;f<g;)(i=n[f++]).key===a&&i.value===l||c(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},14628:(t,e,r)=>{"use strict";var n=r(46518),i=r(36043);n({target:"Promise",stat:!0},{withResolvers:function(){var t=i.f(this);return{promise:t.promise,resolve:t.resolve,reject:t.reject}}})},14905:(t,e,r)=>{"use strict";var n=r(46518),i=r(69565),s=r(79306),o=r(28551),a=r(20034),l=r(97751),c=r(1767),h=r(20772),u=l("Promise"),d=TypeError;n({target:"AsyncIterator",proto:!0,real:!0},{reduce:function(t){o(this),s(t);var e=c(this),r=e.iterator,n=e.next,l=arguments.length<2,p=l?void 0:arguments[1],f=0;return new u((function(e,s){var c=function(t){h(r,s,t,s)},m=function(){try{u.resolve(o(i(n,r))).then((function(r){try{if(o(r).done)l?s(new d("Reduce of empty iterator with no initial value")):e(p);else{var n=r.value;if(l)l=!1,p=n,m();else try{var i=t(p,n,f),h=function(t){p=t,m()};a(i)?u.resolve(i).then(h,c):h(i)}catch(t){c(t)}}f++}catch(t){s(t)}}),s)}catch(t){s(t)}};m()}))}})},15024:(t,e,r)=>{"use strict";var n=r(46518),i=r(83650);n({target:"Set",proto:!0,real:!0,forced:!r(84916)("symmetricDifference")},{symmetricDifference:i})},15086:(t,e,r)=>{"use strict";var n=r(46518),i=r(59213).some;n({target:"Array",proto:!0,forced:!r(34598)("some")},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},15234:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(e,r);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,i)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),i=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&n(e,t,r);return i(e,t),e},o=this&&this.__exportStar||function(t,e){for(var r in t)"default"===r||Object.prototype.hasOwnProperty.call(e,r)||n(e,t,r)};Object.defineProperty(e,"__esModule",{value:!0}),e.Las=e.Ept=void 0,e.Ept=s(r(68962)),o(r(36564),e),e.Las=s(r(30549)),o(r(876),e)},15239:(t,e,r)=>{"use strict";var n=r(46518),i=r(69565),s=r(43724),o=r(87633),a=r(79306),l=r(28551),c=r(90679),h=r(94901),u=r(64117),d=r(20034),p=r(55966),f=r(36840),m=r(56279),g=r(62106),A=r(90757),y=r(78227),v=r(91181),x=y("observable"),_="Observable",w="Subscription",b="SubscriptionObserver",E=v.getterFor,S=v.set,M=E(_),C=E(w),T=E(b),I=function(t){this.observer=l(t),this.cleanup=null,this.subscriptionObserver=null};I.prototype={type:w,clean:function(){var t=this.cleanup;if(t){this.cleanup=null;try{t()}catch(t){A(t)}}},close:function(){if(!s){var t=this.facade,e=this.subscriptionObserver;t.closed=!0,e&&(e.closed=!0)}this.observer=null},isClosed:function(){return null===this.observer}};var R=function(t,e){var r,n=S(this,new I(t));s||(this.closed=!1);try{(r=p(t,"start"))&&i(r,t,this)}catch(t){A(t)}if(!n.isClosed()){var o=n.subscriptionObserver=new P(n);try{var l=e(o),c=l;u(l)||(n.cleanup=h(l.unsubscribe)?function(){c.unsubscribe()}:a(l))}catch(t){return void o.error(t)}n.isClosed()&&n.clean()}};R.prototype=m({},{unsubscribe:function(){var t=C(this);t.isClosed()||(t.close(),t.clean())}}),s&&g(R.prototype,"closed",{configurable:!0,get:function(){return C(this).isClosed()}});var P=function(t){S(this,{type:b,subscriptionState:t}),s||(this.closed=!1)};P.prototype=m({},{next:function(t){var e=T(this).subscriptionState;if(!e.isClosed()){var r=e.observer;try{var n=p(r,"next");n&&i(n,r,t)}catch(t){A(t)}}},error:function(t){var e=T(this).subscriptionState;if(!e.isClosed()){var r=e.observer;e.close();try{var n=p(r,"error");n?i(n,r,t):A(t)}catch(t){A(t)}e.clean()}},complete:function(){var t=T(this).subscriptionState;if(!t.isClosed()){var e=t.observer;t.close();try{var r=p(e,"complete");r&&i(r,e)}catch(t){A(t)}t.clean()}}}),s&&g(P.prototype,"closed",{configurable:!0,get:function(){return T(this).subscriptionState.isClosed()}});var B=function(t){c(this,L),S(this,{type:_,subscriber:a(t)})},L=B.prototype;m(L,{subscribe:function(t){var e=arguments.length;return new R(h(t)?{next:t,error:e>1?arguments[1]:void 0,complete:e>2?arguments[2]:void 0}:d(t)?t:{},M(this).subscriber)}}),f(L,x,(function(){return this})),n({global:!0,constructor:!0,forced:!0},{Observable:B}),o(_)},15472:(t,e,r)=>{"use strict";var n=r(46518),i=r(44576),s=r(10687);n({global:!0},{Reflect:{}}),s(i.Reflect,"Reflect",!0)},15575:(t,e,r)=>{"use strict";var n=r(46518),i=r(44576),s=r(79472)(i.setInterval,!0);n({global:!0,bind:!0,forced:i.setInterval!==s},{setInterval:s})},15617:(t,e,r)=>{"use strict";var n=r(33164);t.exports=Math.fround||function(t){return n(t,1.1920928955078125e-7,34028234663852886e22,11754943508222875e-54)}},15637:(t,e,r)=>{"use strict";r(46518)({target:"Math",stat:!0,forced:!0},{isubh:function(t,e,r,n){var i=t>>>0,s=r>>>0;return(e>>>0)-(n>>>0)-((~i&s|(i^~s)&i-s>>>0)>>>31)|0}})},15652:(t,e,r)=>{"use strict";var n=r(79039);t.exports=n((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},15690:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Info=void 0;const n=r(876),i=r(50329);e.Info={parse:function(t){const e=n.Binary.toDataView(t);if(e.byteLength!==i.infoLength)throw new Error(`Invalid COPC info VLR length (should be ${i.infoLength}): ${e.byteLength}`);const r=[e.getFloat64(0,!0),e.getFloat64(8,!0),e.getFloat64(16,!0)],s=e.getFloat64(24,!0);return{cube:[r[0]-s,r[1]-s,r[2]-s,r[0]+s,r[1]+s,r[2]+s],spacing:e.getFloat64(32,!0),rootHierarchyPage:{pageOffset:(0,n.parseBigInt)((0,n.getBigUint64)(e,40,!0)),pageLength:(0,n.parseBigInt)((0,n.getBigUint64)(e,48,!0))},gpsTimeRange:[e.getFloat64(56,!0),e.getFloat64(64,!0)]}}}},15823:(t,e,r)=>{"use strict";var n=r(46518),i=r(44576),s=r(69565),o=r(43724),a=r(72805),l=r(94644),c=r(66346),h=r(90679),u=r(6980),d=r(66699),p=r(2087),f=r(18014),m=r(57696),g=r(58229),A=r(58319),y=r(56969),v=r(39297),x=r(36955),_=r(20034),w=r(10757),b=r(2360),E=r(1625),S=r(52967),M=r(38480).f,C=r(43251),T=r(59213).forEach,I=r(87633),R=r(62106),P=r(24913),B=r(77347),L=r(35370),D=r(91181),O=r(23167),N=D.get,F=D.set,U=D.enforce,k=P.f,z=B.f,G=i.RangeError,Q=c.ArrayBuffer,V=Q.prototype,j=c.DataView,H=l.NATIVE_ARRAY_BUFFER_VIEWS,q=l.TYPED_ARRAY_TAG,W=l.TypedArray,Y=l.TypedArrayPrototype,X=l.isTypedArray,$="BYTES_PER_ELEMENT",J="Wrong length",K=function(t,e){R(t,e,{configurable:!0,get:function(){return N(this)[e]}})},Z=function(t){var e;return E(V,t)||"ArrayBuffer"===(e=x(t))||"SharedArrayBuffer"===e},tt=function(t,e){return X(t)&&!w(e)&&e in t&&p(+e)&&e>=0},et=function(t,e){return e=y(e),tt(t,e)?u(2,t[e]):z(t,e)},rt=function(t,e,r){return e=y(e),!(tt(t,e)&&_(r)&&v(r,"value"))||v(r,"get")||v(r,"set")||r.configurable||v(r,"writable")&&!r.writable||v(r,"enumerable")&&!r.enumerable?k(t,e,r):(t[e]=r.value,t)};o?(H||(B.f=et,P.f=rt,K(Y,"buffer"),K(Y,"byteOffset"),K(Y,"byteLength"),K(Y,"length")),n({target:"Object",stat:!0,forced:!H},{getOwnPropertyDescriptor:et,defineProperty:rt}),t.exports=function(t,e,r){var o=t.match(/\d+/)[0]/8,l=t+(r?"Clamped":"")+"Array",c="get"+t,u="set"+t,p=i[l],y=p,v=y&&y.prototype,x={},w=function(t,e){k(t,e,{get:function(){return function(t,e){var r=N(t);return r.view[c](e*o+r.byteOffset,!0)}(this,e)},set:function(t){return function(t,e,n){var i=N(t);i.view[u](e*o+i.byteOffset,r?A(n):n,!0)}(this,e,t)},enumerable:!0})};H?a&&(y=e((function(t,e,r,n){return h(t,v),O(_(e)?Z(e)?void 0!==n?new p(e,g(r,o),n):void 0!==r?new p(e,g(r,o)):new p(e):X(e)?L(y,e):s(C,y,e):new p(m(e)),t,y)})),S&&S(y,W),T(M(p),(function(t){t in y||d(y,t,p[t])})),y.prototype=v):(y=e((function(t,e,r,n){h(t,v);var i,a,l,c=0,u=0;if(_(e)){if(!Z(e))return X(e)?L(y,e):s(C,y,e);i=e,u=g(r,o);var d=e.byteLength;if(void 0===n){if(d%o)throw new G(J);if((a=d-u)<0)throw new G(J)}else if((a=f(n)*o)+u>d)throw new G(J);l=a/o}else l=m(e),i=new Q(a=l*o);for(F(t,{buffer:i,byteOffset:u,byteLength:a,length:l,view:new j(i)});c<l;)w(t,c++)})),S&&S(y,W),v=y.prototype=b(Y)),v.constructor!==y&&d(v,"constructor",y),U(v).TypedArrayConstructor=y,q&&d(v,q,l);var E=y!==p;x[l]=y,n({global:!0,constructor:!0,forced:E,sham:!H},x),$ in y||d(y,$,o),$ in v||d(v,$,o),I(l)}):t.exports=function(){}},15941:(t,e,r)=>{"use strict";r(46518)({target:"Math",stat:!0,forced:!0},{umulh:function(t,e){var r=65535,n=+t,i=+e,s=n&r,o=i&r,a=n>>>16,l=i>>>16,c=(a*o>>>0)+(s*o>>>16);return a*l+(c>>>16)+((s*l>>>0)+(c&r)>>>16)}})},16034:(t,e,r)=>{"use strict";var n=r(46518),i=r(32357).values;n({target:"Object",stat:!0},{values:function(t){return i(t)}})},16037:(t,e,r)=>{"use strict";var n=r(69565),i=r(36840),s=r(55966),o=r(39297),a=r(78227),l=r(57657).IteratorPrototype,c=a("dispose");o(l,c)||i(l,c,(function(){var t=s(this,"return");t&&n(t,this)}))},16193:(t,e,r)=>{"use strict";var n=r(79504),i=Error,s=n("".replace),o=String(new i("zxcasd").stack),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(o);t.exports=function(t,e){if(l&&"string"==typeof t&&!i.prepareStackTrace)for(;e--;)t=s(t,a,"");return t}},16215:(t,e,r)=>{"use strict";var n=r(46518),i=r(69565),s=r(47650),o=r(44204);n({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){return i(o,this,s(t))}})},16280:(t,e,r)=>{"use strict";var n=r(46518),i=r(44576),s=r(18745),o=r(14601),a="WebAssembly",l=i[a],c=7!==new Error("e",{cause:7}).cause,h=function(t,e){var r={};r[t]=o(t,e,c),n({global:!0,constructor:!0,arity:1,forced:c},r)},u=function(t,e){if(l&&l[t]){var r={};r[t]=o(a+"."+t,e,c),n({target:a,stat:!0,constructor:!0,arity:1,forced:c},r)}};h("Error",(function(t){return function(e){return s(t,this,arguments)}})),h("EvalError",(function(t){return function(e){return s(t,this,arguments)}})),h("RangeError",(function(t){return function(e){return s(t,this,arguments)}})),h("ReferenceError",(function(t){return function(e){return s(t,this,arguments)}})),h("SyntaxError",(function(t){return function(e){return s(t,this,arguments)}})),h("TypeError",(function(t){return function(e){return s(t,this,arguments)}})),h("URIError",(function(t){return function(e){return s(t,this,arguments)}})),u("CompileError",(function(t){return function(e){return s(t,this,arguments)}})),u("LinkError",(function(t){return function(e){return s(t,this,arguments)}})),u("RuntimeError",(function(t){return function(e){return s(t,this,arguments)}}))},16308:(t,e,r)=>{"use strict";var n=r(46518),i=r(77240);n({target:"String",proto:!0,forced:r(23061)("sup")},{sup:function(){return i(this,"sup","","")}})},16385:(t,e,r)=>{"use strict";var n=r(46518),i=r(72248);n({target:"Map",stat:!0,forced:!0},{of:r(87500)(i.Map,i.set,!0)})},16401:(t,e,r)=>{"use strict";var n=r(78227),i=r(24913).f,s=n("metadata"),o=Function.prototype;void 0===o[s]&&i(o,s,{value:null})},16453:(t,e,r)=>{"use strict";r(4360)},16468:(t,e,r)=>{"use strict";var n=r(46518),i=r(44576),s=r(79504),o=r(92796),a=r(36840),l=r(3451),c=r(72652),h=r(90679),u=r(94901),d=r(64117),p=r(20034),f=r(79039),m=r(84428),g=r(10687),A=r(23167);t.exports=function(t,e,r){var y=-1!==t.indexOf("Map"),v=-1!==t.indexOf("Weak"),x=y?"set":"add",_=i[t],w=_&&_.prototype,b=_,E={},S=function(t){var e=s(w[t]);a(w,t,"add"===t?function(t){return e(this,0===t?0:t),this}:"delete"===t?function(t){return!(v&&!p(t))&&e(this,0===t?0:t)}:"get"===t?function(t){return v&&!p(t)?void 0:e(this,0===t?0:t)}:"has"===t?function(t){return!(v&&!p(t))&&e(this,0===t?0:t)}:function(t,r){return e(this,0===t?0:t,r),this})};if(o(t,!u(_)||!(v||w.forEach&&!f((function(){(new _).entries().next()})))))b=r.getConstructor(e,t,y,x),l.enable();else if(o(t,!0)){var M=new b,C=M[x](v?{}:-0,1)!==M,T=f((function(){M.has(1)})),I=m((function(t){new _(t)})),R=!v&&f((function(){for(var t=new _,e=5;e--;)t[x](e,e);return!t.has(-0)}));I||((b=e((function(t,e){h(t,w);var r=A(new _,t,b);return d(e)||c(e,r[x],{that:r,AS_ENTRIES:y}),r}))).prototype=w,w.constructor=b),(T||R)&&(S("delete"),S("has"),y&&S("get")),(R||C)&&S(x),v&&w.clear&&delete w.clear}return E[t]=b,n({global:!0,constructor:!0,forced:b!==_},E),g(b,t),v||r.setStrong(b,t,y),b}},16499:(t,e,r)=>{"use strict";var n=r(46518),i=r(69565),s=r(79306),o=r(36043),a=r(1103),l=r(72652);n({target:"Promise",stat:!0,forced:r(90537)},{all:function(t){var e=this,r=o.f(e),n=r.resolve,c=r.reject,h=a((function(){var r=s(e.resolve),o=[],a=0,h=1;l(t,(function(t){var s=a++,l=!1;h++,i(r,e,t).then((function(t){l||(l=!0,o[s]=t,--h||n(o))}),c)})),--h||n(o)}));return h.error&&c(h.value),r.promise}})},16573:(t,e,r)=>{"use strict";var n=r(43724),i=r(62106),s=r(3238),o=ArrayBuffer.prototype;n&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},16575:(t,e,r)=>{"use strict";var n=r(39297);t.exports=function(t){return void 0!==t&&(n(t,"value")||n(t,"writable"))}},16823:t=>{"use strict";var e=String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},16864:(t,e,r)=>{"use strict";var n=r(46518),i=r(69565),s=r(47650),o=r(83650);n({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){return i(o,this,s(t))}})},16882:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getBigUint64=e.parseBigInt=void 0,e.parseBigInt=function(t){if(t>BigInt(Number.MAX_SAFE_INTEGER)||t<BigInt(-Number.MAX_SAFE_INTEGER))throw new Error(`Cannot convert bigint to number: ${t}`);return Number(t)},e.getBigUint64=function(t,e,r){if(t.getBigUint64)return t.getBigUint64(e,r);const[n,i]=r?[4,0]:[0,4],s=BigInt(t.getUint32(e+n,r)),o=BigInt(t.getUint32(e+i,r));return(s<<BigInt(32))+o}},17145:(t,e,r)=>{"use strict";var n=r(46518),i=r(1625),s=r(42787),o=r(52967),a=r(77740),l=r(2360),c=r(66699),h=r(6980),u=r(77584),d=r(80747),p=r(72652),f=r(32603),m=r(78227)("toStringTag"),g=Error,A=[].push,y=function(t,e){var r,n=i(v,this);o?r=o(new g,n?s(this):v):(r=n?this:l(v),c(r,m,"Error")),void 0!==e&&c(r,"message",f(e)),d(r,y,r.stack,1),arguments.length>2&&u(r,arguments[2]);var a=[];return p(t,A,{that:a}),c(r,"errors",a),r};o?o(y,g):a(y,g,{name:!0});var v=y.prototype=l(g.prototype,{constructor:h(1,y),message:h(1,""),name:h(1,"AggregateError")});n({global:!0,constructor:!0,arity:2},{AggregateError:y})},17273:(t,e,r)=>{"use strict";var n=r(46518),i=r(33317),s=r(36194),o=r(26223);n({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(t){return!0===o(s(this),(function(e){if(i(e,t))return!0}),!0)}})},17333:(t,e,r)=>{"use strict";var n=r(46518),i=r(69565),s=r(79306),o=r(28551),a=r(20034),l=r(1767),c=r(92059),h=r(62529),u=r(20772),d=r(96395),p=c((function(t){var e=this,r=e.iterator,n=e.predicate;return new t((function(s,l){var c=function(t){e.done=!0,l(t)},d=function(t){u(r,c,t,c)},p=function(){try{t.resolve(o(i(e.next,r))).then((function(r){try{if(o(r).done)e.done=!0,s(h(void 0,!0));else{var i=r.value;try{var l=n(i,e.counter++),u=function(t){t?s(h(i,!1)):p()};a(l)?t.resolve(l).then(u,d):u(l)}catch(t){d(t)}}}catch(t){c(t)}}),c)}catch(t){c(t)}};p()}))}));n({target:"AsyncIterator",proto:!0,real:!0,forced:d},{filter:function(t){return o(this),s(t),new p(l(this),{predicate:t})}})},17427:(t,e,r)=>{"use strict";var n=r(46518),i=r(43724),s=r(42551),o=r(79306),a=r(48981),l=r(24913);i&&n({target:"Object",proto:!0,forced:s},{__defineGetter__:function(t,e){l.f(a(this),t,{get:o(e),enumerable:!0,configurable:!0})}})},17561:(t,e,r)=>{"use strict";r(15024)},17642:(t,e,r)=>{"use strict";var n=r(46518),i=r(83440);n({target:"Set",proto:!0,real:!0,forced:!r(84916)("difference",(function(t){return 0===t.size}))},{difference:i})},17656:(t,e,r)=>{"use strict";var n=r(43724),i=r(6469),s=r(48981),o=r(26198),a=r(62106);n&&(a(Array.prototype,"lastIndex",{configurable:!0,get:function(){var t=s(this),e=o(t);return 0===e?0:e-1}}),i("lastIndex"))},17833:(t,e,r)=>{e.formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;e.splice(1,0,r,"color: inherit");let n=0,i=0;e[0].replace(/%[a-zA-Z%]/g,(t=>{"%%"!==t&&(n++,"%c"===t&&(i=n))})),e.splice(i,0,r)},e.save=function(t){try{t?e.storage.setItem("debug",t):e.storage.removeItem("debug")}catch(t){}},e.load=function(){let t;try{t=e.storage.getItem("debug")||e.storage.getItem("DEBUG")}catch(t){}return!t&&"undefined"!=typeof process&&"env"in process&&(t=process.env.DEBUG),t},e.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let t;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&(t=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(t[1],10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage=function(){try{return localStorage}catch(t){}}(),e.destroy=(()=>{let t=!1;return()=>{t||(t=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.log=console.debug||console.log||(()=>{}),t.exports=r(40736)(e);const{formatters:n}=t.exports;n.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}},17978:(t,e,r)=>{"use strict";r(13451)},18014:(t,e,r)=>{"use strict";var n=r(91291),i=Math.min;t.exports=function(t){var e=n(t);return e>0?i(e,9007199254740991):0}},18107:(t,e,r)=>{"use strict";var n=r(46518),i=r(48981),s=r(26198),o=r(91291),a=r(6469);n({target:"Array",proto:!0},{at:function(t){var e=i(this),r=s(e),n=o(t),a=n>=0?n:r+n;return a<0||a>=r?void 0:e[a]}}),a("at")},18111:(t,e,r)=>{"use strict";var n=r(46518),i=r(44576),s=r(90679),o=r(28551),a=r(94901),l=r(42787),c=r(62106),h=r(97040),u=r(79039),d=r(39297),p=r(78227),f=r(57657).IteratorPrototype,m=r(43724),g=r(96395),A="constructor",y="Iterator",v=p("toStringTag"),x=TypeError,_=i[y],w=g||!a(_)||_.prototype!==f||!u((function(){_({})})),b=function(){if(s(this,f),l(this)===f)throw new x("Abstract class Iterator not directly constructable")},E=function(t,e){m?c(f,t,{configurable:!0,get:function(){return e},set:function(e){if(o(this),this===f)throw new x("You can't redefine this property");d(this,t)?this[t]=e:h(this,t,e)}}):f[t]=e};d(f,v)||E(v,y),!w&&d(f,A)&&f[A]!==Object||E(A,b),b.prototype=f,n({global:!0,constructor:!0,forced:w},{Iterator:b})},18237:(t,e,r)=>{"use strict";var n=r(46518),i=r(72652),s=r(79306),o=r(28551),a=r(1767),l=TypeError;n({target:"Iterator",proto:!0,real:!0},{reduce:function(t){o(this),s(t);var e=a(this),r=arguments.length<2,n=r?void 0:arguments[1],c=0;if(i(e,(function(e){r?(r=!1,n=e):n=t(n,e,c),c++}),{IS_RECORD:!0}),r)throw new l("Reduce of empty iterator with no initial value");return n}})},18265:t=>{"use strict";var e=function(){this.head=null,this.tail=null};e.prototype={add:function(t){var e={item:t,next:null},r=this.tail;r?r.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return null===(this.head=t.next)&&(this.tail=null),t.item}},t.exports=e},18449:(t,e,r)=>{"use strict";r(36033),r(73772);var n=r(97751),i=r(79504),s=r(25745),o=n("Map"),a=n("WeakMap"),l=i([].push),c=s("metadata"),h=c.store||(c.store=new a),u=function(t,e,r){var n=h.get(t);if(!n){if(!r)return;h.set(t,n=new o)}var i=n.get(e);if(!i){if(!r)return;n.set(e,i=new o)}return i};t.exports={store:h,getMap:u,has:function(t,e,r){var n=u(e,r,!1);return void 0!==n&&n.has(t)},get:function(t,e,r){var n=u(e,r,!1);return void 0===n?void 0:n.get(t)},set:function(t,e,r,n){u(r,n,!0).set(t,e)},keys:function(t,e){var r=u(t,e,!1),n=[];return r&&r.forEach((function(t,e){l(n,e)})),n},toKey:function(t){return void 0===t||"symbol"==typeof t?t:String(t)}}},18640:(t,e,r)=>{"use strict";r(46518)({target:"Function",proto:!0,forced:!0,name:"demethodize"},{unThis:r(12865)})},18727:(t,e,r)=>{"use strict";var n=r(36955);t.exports=function(t){var e=n(t);return"BigInt64Array"===e||"BigUint64Array"===e}},18745:(t,e,r)=>{"use strict";var n=r(40616),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?o.bind(s):function(){return o.apply(s,arguments)})},18814:(t,e,r)=>{"use strict";var n=r(79039),i=r(44576).RegExp;t.exports=n((function(){var t=i("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},18863:(t,e,r)=>{"use strict";var n=r(46518),i=r(80926).right,s=r(34598),o=r(39519);n({target:"Array",proto:!0,forced:!r(38574)&&o>79&&o<83||!s("reduceRight")},{reduceRight:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},18866:(t,e,r)=>{"use strict";var n=r(43802).end,i=r(60706);t.exports=i("trimEnd")?function(){return n(this)}:"".trimEnd},18999:(t,e,r)=>{"use strict";r(70511)("metadataKey")},19167:(t,e,r)=>{"use strict";var n=r(44576);t.exports=n},19369:(t,e,r)=>{"use strict";var n=r(94644),i=r(79504),s=n.aTypedArray,o=n.exportTypedArrayMethod,a=i([].join);o("join",(function(t){return a(s(this),t)}))},19459:(t,e)=>{"use strict";function r([t,e,r,n,i,s]){return[t+(n-t)/2,e+(i-e)/2,r+(s-r)/2]}function n(t){return t[3]-t[0]}function i(t){return t[4]-t[1]}function s(t){return t[5]-t[2]}function o(t,[e,n,i]){const[s,o,a,l,c,h]=t,[u,d,p]=r(t);return[e?u:s,n?d:o,i?p:a,e?l:u,n?c:d,i?h:p]}Object.defineProperty(e,"__esModule",{value:!0}),e.Bounds=void 0,e.Bounds={min:function(t){return[t[0],t[1],t[2]]},max:function(t){return[t[3],t[4],t[5]]},mid:r,width:n,depth:i,height:s,cube:function(t){const e=r(t),o=Math.max(n(t),i(t),s(t))/2;return[e[0]-o,e[1]-o,e[2]-o,e[0]+o,e[1]+o,e[2]+o]},step:o,stepTo:function(t,[e,r,n,i]){for(let s=e-1;s>=0;--s)t=o(t,[r>>s&1,n>>s&1,i>>s&1]);return t},intersection:function(t,e){return[Math.max(t[0],e[0]),Math.max(t[1],e[1]),Math.max(t[2],e[2]),Math.min(t[3],e[3]),Math.min(t[4],e[4]),Math.min(t[5],e[5])]}}},19462:(t,e,r)=>{"use strict";var n=r(69565),i=r(2360),s=r(66699),o=r(56279),a=r(78227),l=r(91181),c=r(55966),h=r(57657).IteratorPrototype,u=r(62529),d=r(9539),p=a("toStringTag"),f="IteratorHelper",m="WrapForValidIterator",g=l.set,A=function(t){var e=l.getterFor(t?m:f);return o(i(h),{next:function(){var r=e(this);if(t)return r.nextHandler();if(r.done)return u(void 0,!0);try{var n=r.nextHandler();return r.returnHandlerResult?n:u(n,r.done)}catch(t){throw r.done=!0,t}},return:function(){var r=e(this),i=r.iterator;if(r.done=!0,t){var s=c(i,"return");return s?n(s,i):u(void 0,!0)}if(r.inner)try{d(r.inner.iterator,"normal")}catch(t){return d(i,"throw",t)}return i&&d(i,"normal"),u(void 0,!0)}})},y=A(!0),v=A(!1);s(v,p,"Iterator Helper"),t.exports=function(t,e,r){var n=function(n,i){i?(i.iterator=n.iterator,i.next=n.next):i=n,i.type=e?m:f,i.returnHandlerResult=!!r,i.nextHandler=t,i.counter=0,i.done=!1,g(this,i)};return n.prototype=e?y:v,n}},19617:(t,e,r)=>{"use strict";var n=r(25397),i=r(35610),s=r(26198),o=function(t){return function(e,r,o){var a=n(e),l=s(a);if(0===l)return!t&&-1;var c,h=i(o,l);if(t&&r!=r){for(;l>h;)if((c=a[h++])!=c)return!0}else for(;l>h;h++)if((t||h in a)&&a[h]===r)return t||h||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},19717:(t,e,r)=>{"use strict";r(46518)({target:"Map",proto:!0,real:!0,name:"upsert",forced:!0},{updateOrInsert:r(162)})},19767:t=>{"use strict";var e=TypeError;t.exports=function(t){if("number"==typeof t)return t;throw new e("Argument is not a number")}},19929:(t,e,r)=>{"use strict";var n=r(46518),i=r(76080),s=r(36194),o=r(72248),a=r(26223),l=o.Map,c=o.set;n({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(t){var e=s(this),r=i(t,arguments.length>1?arguments[1]:void 0),n=new l;return a(e,(function(t,i){c(n,r(t,i,e),t)})),n}})},20034:(t,e,r)=>{"use strict";var n=r(94901);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},20116:(t,e,r)=>{"use strict";var n=r(46518),i=r(72652),s=r(79306),o=r(28551),a=r(1767);n({target:"Iterator",proto:!0,real:!0},{find:function(t){o(this),s(t);var e=a(this),r=0;return i(e,(function(e,n){if(t(e,r++))return n(e)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},20230:(t,e,r)=>{"use strict";var n=r(46518),i=r(79306),s=r(36194),o=r(26223),a=TypeError;n({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=s(this),r=arguments.length<2,n=r?void 0:arguments[1];if(i(t),o(e,(function(i,s){r?(r=!1,n=i):n=t(n,i,s,e)})),r)throw new a("Reduce of empty map with no initial value");return n}})},20326:(t,e,r)=>{"use strict";r(70511)("unscopables")},20397:(t,e,r)=>{"use strict";var n=r(97751);t.exports=n("document","documentElement")},20713:(t,e,r)=>{"use strict";var n=r(69565),i=r(79306),s=r(28551),o=r(1767),a=r(19462),l=r(96319),c=a((function(){var t=this.iterator,e=s(n(this.next,t));if(!(this.done=!!e.done))return l(t,this.mapper,[e.value,this.counter++],!0)}));t.exports=function(t){return s(this),i(t),new c(o(this),{mapper:t})}},20772:(t,e,r)=>{"use strict";var n=r(69565),i=r(97751),s=r(55966);t.exports=function(t,e,r,o){try{var a=s(t,"return");if(a)return i("Promise").resolve(n(a,t)).then((function(){e(r)}),(function(t){o(t)}))}catch(t){return o(t)}e(r)}},20781:(t,e,r)=>{"use strict";var n=r(46518),i=r(77240);n({target:"String",proto:!0,forced:r(23061)("italics")},{italics:function(){return i(this,"i","","")}})},21211:(t,e,r)=>{"use strict";var n=r(46518),i=r(28551),s=r(77347).f;n({target:"Reflect",stat:!0},{deleteProperty:function(t,e){var r=s(i(t),e);return!(r&&!r.configurable)&&delete t[e]}})},21489:(t,e,r)=>{"use strict";r(15823)("Uint8",(function(t){return function(e,r,n){return t(this,e,r,n)}}))},21699:(t,e,r)=>{"use strict";var n=r(46518),i=r(79504),s=r(60511),o=r(67750),a=r(655),l=r(41436),c=i("".indexOf);n({target:"String",proto:!0,forced:!l("includes")},{includes:function(t){return!!~c(a(o(this)),a(s(t)),arguments.length>1?arguments[1]:void 0)}})},21903:(t,e,r)=>{"use strict";var n=r(94644),i=r(43839).findLast,s=n.aTypedArray;(0,n.exportTypedArrayMethod)("findLast",(function(t){return i(s(this),t,arguments.length>1?arguments[1]:void 0)}))},21926:(t,e,r)=>{"use strict";var n=r(46518),i=r(76080),s=r(97080),o=r(38469);n({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=s(this),r=i(t,arguments.length>1?arguments[1]:void 0);return!0===o(e,(function(t){if(r(t,t,e))return!0}),!0)}})},22134:(t,e,r)=>{"use strict";r(15823)("Uint8",(function(t){return function(e,r,n){return t(this,e,r,n)}}),!0)},22195:(t,e,r)=>{"use strict";var n=r(79504),i=n({}.toString),s=n("".slice);t.exports=function(t){return s(i(t),8,-1)}},22489:(t,e,r)=>{"use strict";var n=r(46518),i=r(69565),s=r(79306),o=r(28551),a=r(1767),l=r(19462),c=r(96319),h=r(96395),u=l((function(){for(var t,e,r=this.iterator,n=this.predicate,s=this.next;;){if(t=o(i(s,r)),this.done=!!t.done)return;if(e=t.value,c(r,n,[e,this.counter++],!0))return e}}));n({target:"Iterator",proto:!0,real:!0,forced:h},{filter:function(t){return o(this),s(t),new u(a(this),{predicate:t})}})},22812:t=>{"use strict";var e=TypeError;t.exports=function(t,r){if(t<r)throw new e("Not enough arguments");return t}},23061:(t,e,r)=>{"use strict";var n=r(79039);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},23167:(t,e,r)=>{"use strict";var n=r(94901),i=r(20034),s=r(52967);t.exports=function(t,e,r){var o,a;return s&&n(o=e.constructor)&&o!==r&&i(a=o.prototype)&&a!==r.prototype&&s(t,a),t}},23215:(t,e,r)=>{"use strict";r(81148)},23241:(t,e,r)=>{"use strict";var n=r(94644),i=r(77957),s=n.aTypedArray,o=n.getTypedArrayConstructor;(0,n.exportTypedArrayMethod)("groupBy",(function(t){var e=arguments.length>1?arguments[1]:void 0;return i(s(this),t,e,o)}),!0)},23283:(t,e,r)=>{"use strict";var n=r(46518),i=r(94402);n({target:"Set",stat:!0,forced:!0},{of:r(87500)(i.Set,i.add,!1)})},23288:(t,e,r)=>{"use strict";var n=r(79504),i=r(36840),s=Date.prototype,o="Invalid Date",a="toString",l=n(s[a]),c=n(s.getTime);String(new Date(NaN))!==o&&i(s,a,(function(){var t=c(this);return t==t?l(this):o}))},23418:(t,e,r)=>{"use strict";var n=r(46518),i=r(97916);n({target:"Array",stat:!0,forced:!r(84428)((function(t){Array.from(t)}))},{from:i})},23500:(t,e,r)=>{"use strict";var n=r(44576),i=r(67400),s=r(79296),o=r(90235),a=r(66699),l=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var c in i)i[c]&&l(n[c]&&n[c].prototype);l(s)},23755:(t,e,r)=>{"use strict";var n=r(88205).has;t.exports=function(t){return n(t),t}},23792:(t,e,r)=>{"use strict";var n=r(25397),i=r(6469),s=r(26269),o=r(91181),a=r(24913).f,l=r(51088),c=r(62529),h=r(96395),u=r(43724),d="Array Iterator",p=o.set,f=o.getterFor(d);t.exports=l(Array,"Array",(function(t,e){p(this,{type:d,target:n(t),index:0,kind:e})}),(function(){var t=f(this),e=t.target,r=t.index++;if(!e||r>=e.length)return t.target=null,c(void 0,!0);switch(t.kind){case"keys":return c(r,!1);case"values":return c(e[r],!1)}return c([r,e[r]],!1)}),"values");var m=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!h&&u&&"values"!==m.name)try{a(m,"name",{value:"values"})}catch(t){}},23860:(t,e,r)=>{"use strict";var n=r(46518),i=r(68183).codeAt;n({target:"String",proto:!0},{codePointAt:function(t){return i(this,t)}})},24074:(t,e,r)=>{"use strict";var n=r(69565),i=r(28551),s=r(2360),o=r(55966),a=r(56279),l=r(91181),c=r(97751),h=r(53982),u=r(62529),d=c("Promise"),p="AsyncFromSyncIterator",f=l.set,m=l.getterFor(p),g=function(t,e,r){var n=t.done;d.resolve(t.value).then((function(t){e(u(t,n))}),r)},A=function(t){t.type=p,f(this,t)};A.prototype=a(s(h),{next:function(){var t=m(this);return new d((function(e,r){var s=i(n(t.next,t.iterator));g(s,e,r)}))},return:function(){var t=m(this).iterator;return new d((function(e,r){var s=o(t,"return");if(void 0===s)return e(u(void 0,!0));var a=i(n(s,t));g(a,e,r)}))}}),t.exports=A},24082:(t,e,r)=>{"use strict";r(79577)},24149:t=>{"use strict";var e=RangeError;t.exports=function(t){if(t==t)return t;throw new e("NaN is not allowed")}},24194:(t,e,r)=>{"use strict";var n=r(36955),i=TypeError;t.exports=function(t){if("DataView"===n(t))return t;throw new i("Argument is not a DataView")}},24305:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Hierarchy=void 0,e.Hierarchy={parse:function(t){return Object.entries(t).reduce(((t,[e,r])=>(-1===r?t.pages[e]={}:r&&(t.nodes[e]={pointCount:r}),t)),{nodes:{},pages:{}})}}},24359:(t,e,r)=>{"use strict";var n=r(46518),i=r(66346);n({global:!0,constructor:!0,forced:!r(77811)},{DataView:i.DataView})},24599:(t,e,r)=>{"use strict";var n=r(46518),i=r(44576),s=r(79472)(i.setTimeout,!0);n({global:!0,bind:!0,forced:i.setTimeout!==s},{setTimeout:s})},24659:(t,e,r)=>{"use strict";var n=r(79039),i=r(6980);t.exports=!n((function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},24746:(t,e,r)=>{"use strict";r(46518)({target:"Math",stat:!0,forced:!0},{scale:r(77905)})},24842:(t,e,r)=>{"use strict";var n=r(46518),i=Math.PI/180;n({target:"Math",stat:!0,forced:!0},{radians:function(t){return t*i}})},24913:(t,e,r)=>{"use strict";var n=r(43724),i=r(35917),s=r(48686),o=r(28551),a=r(56969),l=TypeError,c=Object.defineProperty,h=Object.getOwnPropertyDescriptor,u="enumerable",d="configurable",p="writable";e.f=n?s?function(t,e,r){if(o(t),e=a(e),o(r),"function"==typeof t&&"prototype"===e&&"value"in r&&p in r&&!r[p]){var n=h(t,e);n&&n[p]&&(t[e]=r.value,r={configurable:d in r?r[d]:n[d],enumerable:u in r?r[u]:n[u],writable:!1})}return c(t,e,r)}:c:function(t,e,r){if(o(t),e=a(e),o(r),i)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw new l("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},24922:(t,e,r)=>{"use strict";r.d(e,{$EB:()=>g,$Ed:()=>Ra,$Kf:()=>qo,$NF:()=>Ah,$O9:()=>_t,$Yl:()=>z,$_I:()=>Ct,$ei:()=>C,$p8:()=>Fh,A$4:()=>xs,AKb:()=>Wc,ALV:()=>Bn,AQS:()=>rn,Am1:()=>Kh,B69:()=>Fi,B6O:()=>fl,BER:()=>lt,BH$:()=>Ha,BKk:()=>Js,BND:()=>vd,BRH:()=>vh,BXX:()=>ne,B_h:()=>de,CMB:()=>Ht,CR7:()=>fr,CSG:()=>Uc,CV9:()=>bl,CVz:()=>le,CWW:()=>Pe,Cfg:()=>wt,CmU:()=>Vh,CwR:()=>Au,D$Q:()=>Pc,DAe:()=>Qe,DXC:()=>Va,Df:()=>Oc,Dmk:()=>zt,E0M:()=>Ed,EAD:()=>$o,EQC:()=>Fe,EZo:()=>v,EdD:()=>_,F1T:()=>io,F1l:()=>rd,FCc:()=>ja,FFZ:()=>Mr,FNr:()=>zc,FV:()=>it,FXf:()=>E,FZo:()=>zh,Fn:()=>Se,Fpm:()=>$u,FvD:()=>el,Fvi:()=>ct,Fvt:()=>Gc,G3T:()=>Be,GBG:()=>rh,GJx:()=>gt,GOR:()=>il,GWd:()=>Vt,GYF:()=>Wo,GZZ:()=>xl,G_z:()=>Fc,Gu$:()=>wc,Gwm:()=>Y,GxU:()=>us,H23:()=>Me,H2z:()=>Cd,HIg:()=>Qt,HLH:()=>or,HO_:()=>Re,HPb:()=>ur,HXV:()=>oe,HgN:()=>xn,HiM:()=>Lh,Hit:()=>eh,Ho_:()=>Pl,Hrb:()=>vs,Hrq:()=>Lr,I46:()=>Ho,I9Y:()=>Zr,IE4:()=>te,IUQ:()=>Mn,IWo:()=>yd,Iit:()=>Ys,Ipv:()=>ol,Iw4:()=>Iu,IzY:()=>Sd,Jnc:()=>l,K52:()=>X,KDk:()=>he,KLL:()=>rr,KPJ:()=>ch,KRh:()=>K,Ke9:()=>Ge,Kef:()=>Te,Ktl:()=>Ir,Kwu:()=>x,Kzg:()=>Xh,Kzv:()=>jt,LAk:()=>ot,Ld9:()=>Md,LiQ:()=>P,LlO:()=>$s,LoY:()=>Bs,LuO:()=>Ou,MBL:()=>nh,MOq:()=>Dr,MSw:()=>_c,MW4:()=>ws,Mjd:()=>rt,Mmk:()=>dn,N1A:()=>ka,N2s:()=>yu,N5j:()=>We,NRn:()=>Fn,NTi:()=>y,NZq:()=>Tt,Nex:()=>Td,Nt7:()=>O,Nv2:()=>Ka,Nwf:()=>Su,Nz6:()=>ee,O0B:()=>Cn,O3Y:()=>Ec,O49:()=>je,O9p:()=>xi,ONl:()=>$a,OUM:()=>It,Oax:()=>bs,Om:()=>mt,OuU:()=>L,P5j:()=>Mu,PFK:()=>dd,PJ3:()=>Ne,PPD:()=>da,PTz:()=>Ln,Pdi:()=>Xc,Pem:()=>tl,Pf$:()=>hu,Pq0:()=>Dn,Q1f:()=>rs,QCA:()=>mc,QP0:()=>u,Qev:()=>Gr,Qrf:()=>me,R1W:()=>od,R3r:()=>co,RJ4:()=>Ve,ROr:()=>ar,RQf:()=>Ot,RcT:()=>mr,RiT:()=>sh,Riy:()=>ce,Rkk:()=>qe,RlV:()=>ci,RoJ:()=>Ao,RrE:()=>k,Ru$:()=>lr,RyA:()=>p,S$4:()=>Ee,S20:()=>al,SUR:()=>jh,SYV:()=>Za,ScU:()=>yh,T6I:()=>th,TDQ:()=>kl,THS:()=>ms,TMh:()=>Ar,Tap:()=>xh,TdN:()=>Ur,TiK:()=>wr,TkQ:()=>Jt,U3G:()=>W,UJ6:()=>Kc,UPV:()=>Sc,UTZ:()=>ht,Ufg:()=>yc,UpK:()=>Oo,UtB:()=>Hu,UtX:()=>Jh,V3x:()=>kt,V9B:()=>os,VCu:()=>sl,VGF:()=>Kt,VT0:()=>Yt,VVr:()=>ir,Vb5:()=>a,VnP:()=>_l,Vnu:()=>Tr,Vwu:()=>Id,VxR:()=>er,W9U:()=>Ce,WBB:()=>Ac,WNZ:()=>o,WTh:()=>md,Wdf:()=>Fr,Wew:()=>Ft,Wk7:()=>d,Wyr:()=>Nr,XG_:()=>Ie,XIg:()=>A,XJ7:()=>Cc,XMJ:()=>Ru,XTe:()=>Hh,XrR:()=>Z,Y9S:()=>fh,YHV:()=>Gu,YJl:()=>ao,YOZ:()=>Zc,YRT:()=>gh,Yhb:()=>Jc,Yuy:()=>Lt,Z0B:()=>yl,Z58:()=>po,ZLX:()=>sa,ZM4:()=>xd,ZQM:()=>Xt,Zcv:()=>ca,Zpd:()=>bc,Zr2:()=>tr,ZyN:()=>Nh,_4j:()=>Bc,_QJ:()=>ye,_Ut:()=>Xs,_xc:()=>td,a$r:()=>bt,a55:()=>Hr,a5J:()=>Ae,aEY:()=>F,aHM:()=>uh,aJ8:()=>at,aMy:()=>Le,aVO:()=>kc,agE:()=>Cr,amv:()=>vr,b4q:()=>so,bC7:()=>_e,bCz:()=>w,bI3:()=>$e,bTm:()=>h,baL:()=>As,bdM:()=>vc,bkx:()=>Dt,brA:()=>H,bw0:()=>$,c5h:()=>nl,c90:()=>Zt,cHt:()=>Bt,cRK:()=>ho,cZY:()=>Yu,caT:()=>J,cj9:()=>Kr,czI:()=>pe,dAo:()=>wl,dYF:()=>Pn,dcC:()=>Wt,dhZ:()=>ze,dth:()=>wh,dwI:()=>tn,dzP:()=>Du,e0p:()=>G,eB$:()=>fo,eHc:()=>V,eHs:()=>go,eaF:()=>js,eoi:()=>br,er$:()=>Ze,ezk:()=>$c,f4X:()=>R,fBL:()=>Pt,fJr:()=>cr,fP5:()=>uu,fTw:()=>ad,fc6:()=>ys,g7M:()=>st,gJ2:()=>Ut,gO9:()=>b,gPd:()=>Sn,gWB:()=>Sr,ghU:()=>At,h2z:()=>ke,hB5:()=>f,hIf:()=>Pr,hZF:()=>ih,h_9:()=>hh,hdd:()=>D,hgQ:()=>U,hjs:()=>Qu,hsX:()=>m,hxR:()=>vt,hy7:()=>ut,hzE:()=>ld,i7d:()=>Ks,i7u:()=>kr,iNn:()=>qs,iOZ:()=>rl,iUH:()=>Mt,ibB:()=>ll,ie2:()=>B,imn:()=>ss,ix0:()=>Nt,iyt:()=>ei,j6:()=>Mc,jGm:()=>Ml,jR7:()=>re,jUj:()=>uo,jej:()=>hn,jf0:()=>Ke,jsO:()=>pr,jut:()=>Gh,jzd:()=>Er,k6Q:()=>ie,k6q:()=>Et,k8v:()=>Xe,kBv:()=>i,kEx:()=>mh,kG0:()=>sr,kLi:()=>wn,kO0:()=>_r,kRr:()=>St,kTW:()=>yt,kTp:()=>se,kYr:()=>dr,k_V:()=>Vu,keZ:()=>ru,klZ:()=>gr,kn4:()=>hi,kqe:()=>nr,kxk:()=>Po,kyO:()=>et,l2R:()=>lh,lGu:()=>j,lGw:()=>Yc,lMl:()=>Ji,lPF:()=>an,lc7:()=>De,ljd:()=>Oe,lxW:()=>Ws,lyL:()=>xe,mcG:()=>cn,mrM:()=>Pa,nCl:()=>Th,nEu:()=>Dl,nNL:()=>nt,nST:()=>S,nWS:()=>Tn,nZQ:()=>nu,nc$:()=>Bu,nzx:()=>Tl,o6l:()=>oo,oVO:()=>hr,oh6:()=>Nu,ojh:()=>T,ojs:()=>be,ov9:()=>Q,pBf:()=>ae,pFK:()=>Ll,pHI:()=>xt,pPE:()=>Cu,paN:()=>$t,ppV:()=>gn,psI:()=>ge,q2:()=>Rc,qBx:()=>Nc,qFE:()=>Bl,qU7:()=>Il,qUd:()=>Dh,qa3:()=>ue,qad:()=>I,qq$:()=>on,qtW:()=>Es,r6x:()=>Qh,rFo:()=>In,rKP:()=>xc,rOG:()=>Or,rQf:()=>Ue,rSH:()=>fe,rYR:()=>He,rrX:()=>Pu,s0K:()=>vl,sKt:()=>yr,sPf:()=>n,tBo:()=>Uu,tJf:()=>Rt,tXL:()=>Dc,tcD:()=>Rl,tz3:()=>oh,uB5:()=>ve,uSd:()=>Lc,uV5:()=>ft,uWO:()=>Jo,uXQ:()=>Rr,ubm:()=>ro,uov:()=>Br,ure:()=>Uh,v9J:()=>zr,veJ:()=>_h,vim:()=>xr,vmz:()=>_s,vyJ:()=>Je,wAk:()=>Cl,wTz:()=>Ye,wfO:()=>pt,wn6:()=>N,wrO:()=>Gt,wtR:()=>s,wvS:()=>gs,xFO:()=>dt,xJ6:()=>dc,xOk:()=>kh,xSv:()=>q,xZx:()=>gu,xfg:()=>El,xiE:()=>un,y3Z:()=>we,y9J:()=>Rn,y_p:()=>tt,ypk:()=>zl,ywQ:()=>c,zD7:()=>iu,zdS:()=>qt,zgK:()=>_i,znC:()=>M});const n="174",i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},o=0,a=1,l=2,c=3,h=0,u=1,d=2,p=3,f=0,m=1,g=2,A=0,y=1,v=2,x=3,_=4,w=5,b=100,E=101,S=102,M=103,C=104,T=200,I=201,R=202,P=203,B=204,L=205,D=206,O=207,N=208,F=209,U=210,k=211,z=212,G=213,Q=214,V=0,j=1,H=2,q=3,W=4,Y=5,X=6,$=7,J=0,K=1,Z=2,tt=0,et=1,rt=2,nt=3,it=4,st=5,ot=6,at=7,lt="attached",ct="detached",ht=300,ut=301,dt=302,pt=303,ft=304,mt=306,gt=1e3,At=1001,yt=1002,vt=1003,xt=1004,_t=1004,wt=1005,bt=1005,Et=1006,St=1007,Mt=1007,Ct=1008,Tt=1008,It=1009,Rt=1010,Pt=1011,Bt=1012,Lt=1013,Dt=1014,Ot=1015,Nt=1016,Ft=1017,Ut=1018,kt=1020,zt=35902,Gt=1021,Qt=1022,Vt=1023,jt=1024,Ht=1025,qt=1026,Wt=1027,Yt=1028,Xt=1029,$t=1030,Jt=1031,Kt=1032,Zt=1033,te=33776,ee=33777,re=33778,ne=33779,ie=35840,se=35841,oe=35842,ae=35843,le=36196,ce=37492,he=37496,ue=37808,de=37809,pe=37810,fe=37811,me=37812,ge=37813,Ae=37814,ye=37815,ve=37816,xe=37817,_e=37818,we=37819,be=37820,Ee=37821,Se=36492,Me=36494,Ce=36495,Te=36283,Ie=36284,Re=36285,Pe=36286,Be=2200,Le=2201,De=2202,Oe=2300,Ne=2301,Fe=2302,Ue=2400,ke=2401,ze=2402,Ge=2500,Qe=2501,Ve=0,je=1,He=2,qe=3200,We=3201,Ye=3202,Xe=3203,$e=0,Je=1,Ke="",Ze="srgb",tr="srgb-linear",er="linear",rr="srgb",nr=0,ir=7680,sr=7681,or=7682,ar=7683,lr=34055,cr=34056,hr=5386,ur=512,dr=513,pr=514,fr=515,mr=516,gr=517,Ar=518,yr=519,vr=512,xr=513,_r=514,wr=515,br=516,Er=517,Sr=518,Mr=519,Cr=35044,Tr=35048,Ir=35040,Rr=35045,Pr=35049,Br=35041,Lr=35046,Dr=35050,Or=35042,Nr="100",Fr="300 es",Ur=2e3,kr=2001,zr={COMPUTE:"compute",RENDER:"render"};class Gr{addEventListener(t,e){void 0===this._listeners&&(this._listeners={});const r=this._listeners;void 0===r[t]&&(r[t]=[]),-1===r[t].indexOf(e)&&r[t].push(e)}hasEventListener(t,e){const r=this._listeners;return void 0!==r&&void 0!==r[t]&&-1!==r[t].indexOf(e)}removeEventListener(t,e){const r=this._listeners;if(void 0===r)return;const n=r[t];if(void 0!==n){const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}dispatchEvent(t){const e=this._listeners;if(void 0===e)return;const r=e[t.type];if(void 0!==r){t.target=this;const e=r.slice(0);for(let r=0,n=e.length;r<n;r++)e[r].call(this,t);t.target=null}}}const Qr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vr=1234567;const jr=Math.PI/180,Hr=180/Math.PI;function qr(){const t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,r=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Qr[255&t]+Qr[t>>8&255]+Qr[t>>16&255]+Qr[t>>24&255]+"-"+Qr[255&e]+Qr[e>>8&255]+"-"+Qr[e>>16&15|64]+Qr[e>>24&255]+"-"+Qr[63&r|128]+Qr[r>>8&255]+"-"+Qr[r>>16&255]+Qr[r>>24&255]+Qr[255&n]+Qr[n>>8&255]+Qr[n>>16&255]+Qr[n>>24&255]).toLowerCase()}function Wr(t,e,r){return Math.max(e,Math.min(r,t))}function Yr(t,e){return(t%e+e)%e}function Xr(t,e,r){return(1-r)*t+r*e}function $r(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(4294967295*t);case Uint16Array:return Math.round(65535*t);case Uint8Array:return Math.round(255*t);case Int32Array:return Math.round(2147483647*t);case Int16Array:return Math.round(32767*t);case Int8Array:return Math.round(127*t);default:throw new Error("Invalid component type.")}}const Kr={DEG2RAD:jr,RAD2DEG:Hr,generateUUID:qr,clamp:Wr,euclideanModulo:Yr,mapLinear:function(t,e,r,n,i){return n+(t-e)*(i-n)/(r-e)},inverseLerp:function(t,e,r){return t!==e?(r-t)/(e-t):0},lerp:Xr,damp:function(t,e,r,n){return Xr(t,e,1-Math.exp(-r*n))},pingpong:function(t,e=1){return e-Math.abs(Yr(t,2*e)-e)},smoothstep:function(t,e,r){return t<=e?0:t>=r?1:(t=(t-e)/(r-e))*t*(3-2*t)},smootherstep:function(t,e,r){return t<=e?0:t>=r?1:(t=(t-e)/(r-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){void 0!==t&&(Vr=t);let e=Vr+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(t){return t*jr},radToDeg:function(t){return t*Hr},isPowerOfTwo:function(t){return!(t&t-1)&&0!==t},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,r,n,i){const s=Math.cos,o=Math.sin,a=s(r/2),l=o(r/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),f=o((n-e)/2);switch(i){case"XYX":t.set(a*h,l*u,l*d,a*c);break;case"YZY":t.set(l*d,a*h,l*u,a*c);break;case"ZXZ":t.set(l*u,l*d,a*h,a*c);break;case"XZX":t.set(a*h,l*f,l*p,a*c);break;case"YXY":t.set(l*p,a*h,l*f,a*c);break;case"ZYZ":t.set(l*f,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Jr,denormalize:$r};class Zr{constructor(t=0,e=0){Zr.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,r=this.y,n=t.elements;return this.x=n[0]*e+n[3]*r+n[6],this.y=n[1]*e+n[4]*r+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wr(this.x,t.x,e.x),this.y=Wr(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wr(this.x,t,e),this.y=Wr(this.y,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Wr(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(Wr(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const r=Math.cos(e),n=Math.sin(e),i=this.x-t.x,s=this.y-t.y;return this.x=i*r-s*n+t.x,this.y=i*n+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tn{constructor(t,e,r,n,i,s,o,a,l){tn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],void 0!==t&&this.set(t,e,r,n,i,s,o,a,l)}set(t,e,r,n,i,s,o,a,l){const c=this.elements;return c[0]=t,c[1]=n,c[2]=o,c[3]=e,c[4]=i,c[5]=a,c[6]=r,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,n=e.elements,i=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],h=r[7],u=r[2],d=r[5],p=r[8],f=n[0],m=n[3],g=n[6],A=n[1],y=n[4],v=n[7],x=n[2],_=n[5],w=n[8];return i[0]=s*f+o*A+a*x,i[3]=s*m+o*y+a*_,i[6]=s*g+o*v+a*w,i[1]=l*f+c*A+h*x,i[4]=l*m+c*y+h*_,i[7]=l*g+c*v+h*w,i[2]=u*f+d*A+p*x,i[5]=u*m+d*y+p*_,i[8]=u*g+d*v+p*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[1],n=t[2],i=t[3],s=t[4],o=t[5],a=t[6],l=t[7],c=t[8];return e*s*c-e*o*l-r*i*c+r*o*a+n*i*l-n*s*a}invert(){const t=this.elements,e=t[0],r=t[1],n=t[2],i=t[3],s=t[4],o=t[5],a=t[6],l=t[7],c=t[8],h=c*s-o*l,u=o*a-c*i,d=l*i-s*a,p=e*h+r*u+n*d;if(0===p)return this.set(0,0,0,0,0,0,0,0,0);const f=1/p;return t[0]=h*f,t[1]=(n*l-c*r)*f,t[2]=(o*r-n*s)*f,t[3]=u*f,t[4]=(c*e-n*a)*f,t[5]=(n*i-o*e)*f,t[6]=d*f,t[7]=(r*a-l*e)*f,t[8]=(s*e-r*i)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,n,i,s,o){const a=Math.cos(i),l=Math.sin(i);return this.set(r*a,r*l,-r*(a*s+l*o)+s+t,-n*l,n*a,-n*(-l*s+a*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(en.makeScale(t,e)),this}rotate(t){return this.premultiply(en.makeRotation(-t)),this}translate(t,e){return this.premultiply(en.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,r,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,r=t.elements;for(let t=0;t<9;t++)if(e[t]!==r[t])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return(new this.constructor).fromArray(this.elements)}}const en=new tn;function rn(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}const nn={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function sn(t,e){return new nn[t](e)}function on(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function an(){const t=on("canvas");return t.style.display="block",t}const ln={};function cn(t){t in ln||(ln[t]=!0,console.warn(t))}function hn(t,e,r){return new Promise((function(n,i){setTimeout((function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,r);break;default:n()}}),r)}))}function un(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dn(t){const e=t.elements;-1===e[11]?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=1-e[14])}const pn=(new tn).set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fn=(new tn).set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mn(){const t={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(t,e,r){return!1!==this.enabled&&e!==r&&e&&r?(this.spaces[e].transfer===rr&&(t.r=An(t.r),t.g=An(t.g),t.b=An(t.b)),this.spaces[e].primaries!==this.spaces[r].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===rr&&(t.r=yn(t.r),t.g=yn(t.g),t.b=yn(t.b)),t):t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Ke?er:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,r){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],r=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[tr]:{primaries:e,whitePoint:n,transfer:er,toXYZ:pn,fromXYZ:fn,luminanceCoefficients:r,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:e,whitePoint:n,transfer:rr,toXYZ:pn,fromXYZ:fn,luminanceCoefficients:r,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),t}const gn=mn();function An(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function yn(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}let vn;class xn{static getDataURL(t){if(/^data:/i.test(t.src))return t.src;if("undefined"==typeof HTMLCanvasElement)return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{void 0===vn&&(vn=on("canvas")),vn.width=t.width,vn.height=t.height;const r=vn.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),e=vn}return e.toDataURL("image/png")}static sRGBToLinear(t){if("undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap){const e=on("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const n=r.getImageData(0,0,t.width,t.height),i=n.data;for(let t=0;t<i.length;t++)i[t]=255*An(i[t]/255);return r.putImageData(n,0,0),e}if(t.data){const e=t.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(255*An(e[t]/255)):e[t]=An(e[t]);return{data:e,width:t.width,height:t.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _n=0;class wn{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_n++}),this.uuid=qr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){!0===t&&this.version++}toJSON(t){const e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.images[this.uuid])return t.images[this.uuid];const r={uuid:this.uuid,url:""},n=this.data;if(null!==n){let t;if(Array.isArray(n)){t=[];for(let e=0,r=n.length;e<r;e++)n[e].isDataTexture?t.push(bn(n[e].image)):t.push(bn(n[e]))}else t=bn(n);r.url=t}return e||(t.images[this.uuid]=r),r}}function bn(t){return"undefined"!=typeof HTMLImageElement&&t instanceof HTMLImageElement||"undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement||"undefined"!=typeof ImageBitmap&&t instanceof ImageBitmap?xn.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let En=0;class Sn extends Gr{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,r=At,n=At,i=Et,s=Ct,o=Vt,a=It,l=Sn.DEFAULT_ANISOTROPY,c=Ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:En++}),this.uuid=qr(),this.name="",this.source=new wn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Zr(0,0),this.repeat=new Zr(1,1),this.center=new Zr(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return(new this.constructor).copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=void 0===t||"string"==typeof t;if(!e&&void 0!==t.textures[this.uuid])return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ht)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gt:t.x=t.x-Math.floor(t.x);break;case At:t.x=t.x<0?0:1;break;case yt:1===Math.abs(Math.floor(t.x)%2)?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x)}if(t.y<0||t.y>1)switch(this.wrapT){case gt:t.y=t.y-Math.floor(t.y);break;case At:t.y=t.y<0?0:1;break;case yt:1===Math.abs(Math.floor(t.y)%2)?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y)}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){!0===t&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){!0===t&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null,Sn.DEFAULT_MAPPING=ht,Sn.DEFAULT_ANISOTROPY=1;class Mn{constructor(t=0,e=0,r=0,n=1){Mn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=r,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,n){return this.x=t,this.y=e,this.z=r,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=void 0!==t.w?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,r=this.y,n=this.z,i=this.w,s=t.elements;return this.x=s[0]*e+s[4]*r+s[8]*n+s[12]*i,this.y=s[1]*e+s[5]*r+s[9]*n+s[13]*i,this.z=s[2]*e+s[6]*r+s[10]*n+s[14]*i,this.w=s[3]*e+s[7]*r+s[11]*n+s[15]*i,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,n,i;const s=.01,o=.1,a=t.elements,l=a[0],c=a[4],h=a[8],u=a[1],d=a[5],p=a[9],f=a[2],m=a[6],g=a[10];if(Math.abs(c-u)<s&&Math.abs(h-f)<s&&Math.abs(p-m)<s){if(Math.abs(c+u)<o&&Math.abs(h+f)<o&&Math.abs(p+m)<o&&Math.abs(l+d+g-3)<o)return this.set(1,0,0,0),this;e=Math.PI;const t=(l+1)/2,a=(d+1)/2,A=(g+1)/2,y=(c+u)/4,v=(h+f)/4,x=(p+m)/4;return t>a&&t>A?t<s?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(t),n=y/r,i=v/r):a>A?a<s?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(a),r=y/n,i=x/n):A<s?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(A),r=v/i,n=x/i),this.set(r,n,i,e),this}let A=Math.sqrt((m-p)*(m-p)+(h-f)*(h-f)+(u-c)*(u-c));return Math.abs(A)<.001&&(A=1),this.x=(m-p)/A,this.y=(h-f)/A,this.z=(u-c)/A,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wr(this.x,t.x,e.x),this.y=Wr(this.y,t.y,e.y),this.z=Wr(this.z,t.z,e.z),this.w=Wr(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wr(this.x,t,e),this.y=Wr(this.y,t,e),this.z=Wr(this.z,t,e),this.w=Wr(this.w,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Wr(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cn extends Gr{constructor(t=1,e=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Mn(0,0,t,e),this.scissorTest=!1,this.viewport=new Mn(0,0,t,e);const n={width:t,height:e,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const i=new Sn(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];const s=r.count;for(let t=0;t<s;t++)this.textures[t]=i.clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){null!==this._depthTexture&&(this._depthTexture.renderTarget=null),null!==t&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,r=1){if(this.width!==t||this.height!==e||this.depth!==r){this.width=t,this.height=e,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return(new this.constructor).copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,r=t.textures.length;e<r;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new wn(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,null!==t.depthTexture&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends Cn{constructor(t=1,e=1,r={}){super(t,e,r),this.isWebGLRenderTarget=!0}}class In extends Sn{constructor(t=null,e=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:r,depth:n},this.magFilter=vt,this.minFilter=vt,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rn extends Tn{constructor(t=1,e=1,r=1,n={}){super(t,e,n),this.isWebGLArrayRenderTarget=!0,this.depth=r,this.texture=new In(null,t,e,r),this.texture.isRenderTargetTexture=!0}}class Pn extends Sn{constructor(t=null,e=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:r,depth:n},this.magFilter=vt,this.minFilter=vt,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn extends Tn{constructor(t=1,e=1,r=1,n={}){super(t,e,n),this.isWebGL3DRenderTarget=!0,this.depth=r,this.texture=new Pn(null,t,e,r),this.texture.isRenderTargetTexture=!0}}class Ln{constructor(t=0,e=0,r=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=n}static slerpFlat(t,e,r,n,i,s,o){let a=r[n+0],l=r[n+1],c=r[n+2],h=r[n+3];const u=i[s+0],d=i[s+1],p=i[s+2],f=i[s+3];if(0===o)return t[e+0]=a,t[e+1]=l,t[e+2]=c,void(t[e+3]=h);if(1===o)return t[e+0]=u,t[e+1]=d,t[e+2]=p,void(t[e+3]=f);if(h!==f||a!==u||l!==d||c!==p){let t=1-o;const e=a*u+l*d+c*p+h*f,r=e>=0?1:-1,n=1-e*e;if(n>Number.EPSILON){const i=Math.sqrt(n),s=Math.atan2(i,e*r);t=Math.sin(t*s)/i,o=Math.sin(o*s)/i}const i=o*r;if(a=a*t+u*i,l=l*t+d*i,c=c*t+p*i,h=h*t+f*i,t===1-o){const t=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=t,l*=t,c*=t,h*=t}}t[e]=a,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,r,n,i,s){const o=r[n],a=r[n+1],l=r[n+2],c=r[n+3],h=i[s],u=i[s+1],d=i[s+2],p=i[s+3];return t[e]=o*p+c*h+a*d-l*u,t[e+1]=a*p+c*u+l*h-o*d,t[e+2]=l*p+c*d+o*u-a*h,t[e+3]=c*p-o*h-a*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,n){return this._x=t,this._y=e,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const r=t._x,n=t._y,i=t._z,s=t._order,o=Math.cos,a=Math.sin,l=o(r/2),c=o(n/2),h=o(i/2),u=a(r/2),d=a(n/2),p=a(i/2);switch(s){case"XYZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"YXZ":this._x=u*c*h+l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"ZXY":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h-u*d*p;break;case"ZYX":this._x=u*c*h-l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h+u*d*p;break;case"YZX":this._x=u*c*h+l*d*p,this._y=l*d*h+u*c*p,this._z=l*c*p-u*d*h,this._w=l*c*h-u*d*p;break;case"XZY":this._x=u*c*h-l*d*p,this._y=l*d*h-u*c*p,this._z=l*c*p+u*d*h,this._w=l*c*h+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return!0===e&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const r=e/2,n=Math.sin(r);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,r=e[0],n=e[4],i=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10],u=r+o+h;if(u>0){const t=.5/Math.sqrt(u+1);this._w=.25/t,this._x=(c-a)*t,this._y=(i-l)*t,this._z=(s-n)*t}else if(r>o&&r>h){const t=2*Math.sqrt(1+r-o-h);this._w=(c-a)/t,this._x=.25*t,this._y=(n+s)/t,this._z=(i+l)/t}else if(o>h){const t=2*Math.sqrt(1+o-r-h);this._w=(i-l)/t,this._x=(n+s)/t,this._y=.25*t,this._z=(a+c)/t}else{const t=2*Math.sqrt(1+h-r-o);this._w=(s-n)/t,this._x=(i+l)/t,this._y=(a+c)/t,this._z=.25*t}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wr(this.dot(t),-1,1)))}rotateTowards(t,e){const r=this.angleTo(t);if(0===r)return this;const n=Math.min(1,e/r);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const r=t._x,n=t._y,i=t._z,s=t._w,o=e._x,a=e._y,l=e._z,c=e._w;return this._x=r*c+s*o+n*l-i*a,this._y=n*c+s*a+i*o-r*l,this._z=i*c+s*l+r*a-n*o,this._w=s*c-r*o-n*a-i*l,this._onChangeCallback(),this}slerp(t,e){if(0===e)return this;if(1===e)return this.copy(t);const r=this._x,n=this._y,i=this._z,s=this._w;let o=s*t._w+r*t._x+n*t._y+i*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=r,this._y=n,this._z=i,this;const a=1-o*o;if(a<=Number.EPSILON){const t=1-e;return this._w=t*s+e*this._w,this._x=t*r+e*this._x,this._y=t*n+e*this._y,this._z=t*i+e*this._z,this.normalize(),this}const l=Math.sqrt(a),c=Math.atan2(l,o),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=s*h+this._w*u,this._x=r*h+this._x*u,this._y=n*h+this._y*u,this._z=i*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(t),n*Math.cos(t),i*Math.sin(e),i*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Dn{constructor(t=0,e=0,r=0){Dn.prototype.isVector3=!0,this.x=t,this.y=e,this.z=r}set(t,e,r){return void 0===r&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nn.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nn.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,r=this.y,n=this.z,i=t.elements;return this.x=i[0]*e+i[3]*r+i[6]*n,this.y=i[1]*e+i[4]*r+i[7]*n,this.z=i[2]*e+i[5]*r+i[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,r=this.y,n=this.z,i=t.elements,s=1/(i[3]*e+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*e+i[4]*r+i[8]*n+i[12])*s,this.y=(i[1]*e+i[5]*r+i[9]*n+i[13])*s,this.z=(i[2]*e+i[6]*r+i[10]*n+i[14])*s,this}applyQuaternion(t){const e=this.x,r=this.y,n=this.z,i=t.x,s=t.y,o=t.z,a=t.w,l=2*(s*n-o*r),c=2*(o*e-i*n),h=2*(i*r-s*e);return this.x=e+a*l+s*h-o*c,this.y=r+a*c+o*l-i*h,this.z=n+a*h+i*c-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,r=this.y,n=this.z,i=t.elements;return this.x=i[0]*e+i[4]*r+i[8]*n,this.y=i[1]*e+i[5]*r+i[9]*n,this.z=i[2]*e+i[6]*r+i[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wr(this.x,t.x,e.x),this.y=Wr(this.y,t.y,e.y),this.z=Wr(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wr(this.x,t,e),this.y=Wr(this.y,t,e),this.z=Wr(this.z,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Wr(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const r=t.x,n=t.y,i=t.z,s=e.x,o=e.y,a=e.z;return this.x=n*a-i*o,this.y=i*s-r*a,this.z=r*o-n*s,this}projectOnVector(t){const e=t.lengthSq();if(0===e)return this.set(0,0,0);const r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return On.copy(this).projectOnVector(t),this.sub(On)}reflect(t){return this.sub(On.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(Wr(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y,n=this.z-t.z;return e*e+r*r+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){const n=Math.sin(e)*t;return this.x=n*Math.sin(r),this.y=Math.cos(e)*t,this.z=n*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=2*Math.random()-1,r=Math.sqrt(1-e*e);return this.x=r*Math.cos(t),this.y=e,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const On=new Dn,Nn=new Ln;class Fn{constructor(t=new Dn(1/0,1/0,1/0),e=new Dn(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e+=3)this.expandByPoint(kn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,r=t.count;e<r;e++)this.expandByPoint(kn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const r=kn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return(new this.constructor).copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(void 0!==r){const n=r.getAttribute("position");if(!0===e&&void 0!==n&&!0!==t.isInstancedMesh)for(let e=0,r=n.count;e<r;e++)!0===t.isMesh?t.getVertexPosition(e,kn):kn.fromBufferAttribute(n,e),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else void 0!==t.boundingBox?(null===t.boundingBox&&t.computeBoundingBox(),zn.copy(t.boundingBox)):(null===r.boundingBox&&r.computeBoundingBox(),zn.copy(r.boundingBox)),zn.applyMatrix4(t.matrixWorld),this.union(zn)}const n=t.children;for(let t=0,r=n.length;t<r;t++)this.expandByObject(n[t],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wn),Yn.subVectors(this.max,Wn),Gn.subVectors(t.a,Wn),Qn.subVectors(t.b,Wn),Vn.subVectors(t.c,Wn),jn.subVectors(Qn,Gn),Hn.subVectors(Vn,Qn),qn.subVectors(Gn,Vn);let e=[0,-jn.z,jn.y,0,-Hn.z,Hn.y,0,-qn.z,qn.y,jn.z,0,-jn.x,Hn.z,0,-Hn.x,qn.z,0,-qn.x,-jn.y,jn.x,0,-Hn.y,Hn.x,0,-qn.y,qn.x,0];return!!Jn(e,Gn,Qn,Vn,Yn)&&(e=[1,0,0,0,1,0,0,0,1],!!Jn(e,Gn,Qn,Vn,Yn)&&(Xn.crossVectors(jn,Hn),e=[Xn.x,Xn.y,Xn.z],Jn(e,Gn,Qn,Vn,Yn)))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=.5*this.getSize(kn).length()),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()||(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un)),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new Dn,new Dn,new Dn,new Dn,new Dn,new Dn,new Dn,new Dn],kn=new Dn,zn=new Fn,Gn=new Dn,Qn=new Dn,Vn=new Dn,jn=new Dn,Hn=new Dn,qn=new Dn,Wn=new Dn,Yn=new Dn,Xn=new Dn,$n=new Dn;function Jn(t,e,r,n,i){for(let s=0,o=t.length-3;s<=o;s+=3){$n.fromArray(t,s);const o=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),a=e.dot($n),l=r.dot($n),c=n.dot($n);if(Math.max(-Math.max(a,l,c),Math.min(a,l,c))>o)return!1}return!0}const Kn=new Fn,Zn=new Dn,ti=new Dn;class ei{constructor(t=new Dn,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const r=this.center;void 0!==e?r.copy(e):Kn.setFromPoints(t).getCenter(r);let n=0;for(let e=0,i=t.length;e<i;e++)n=Math.max(n,r.distanceToSquared(t[e]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zn.subVectors(t,this.center);const e=Zn.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),r=.5*(t-this.radius);this.center.addScaledVector(Zn,r/t),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(!0===this.center.equals(t.center)?this.radius=Math.max(this.radius,t.radius):(ti.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zn.copy(t.center).add(ti)),this.expandByPoint(Zn.copy(t.center).sub(ti))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return(new this.constructor).copy(this)}}const ri=new Dn,ni=new Dn,ii=new Dn,si=new Dn,oi=new Dn,ai=new Dn,li=new Dn;class ci{constructor(t=new Dn,e=new Dn(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,r,n){ni.copy(t).add(e).multiplyScalar(.5),ii.copy(e).sub(t).normalize(),si.copy(this.origin).sub(ni);const i=.5*t.distanceTo(e),s=-this.direction.dot(ii),o=si.dot(this.direction),a=-si.dot(ii),l=si.lengthSq(),c=Math.abs(1-s*s);let h,u,d,p;if(c>0)if(h=s*a-o,u=s*o-a,p=i*c,h>=0)if(u>=-p)if(u<=p){const t=1/c;h*=t,u*=t,d=h*(h+s*u+2*o)+u*(s*h+u+2*a)+l}else u=i,h=Math.max(0,-(s*u+o)),d=-h*h+u*(u+2*a)+l;else u=-i,h=Math.max(0,-(s*u+o)),d=-h*h+u*(u+2*a)+l;else u<=-p?(h=Math.max(0,-(-s*i+o)),u=h>0?-i:Math.min(Math.max(-i,-a),i),d=-h*h+u*(u+2*a)+l):u<=p?(h=0,u=Math.min(Math.max(-i,-a),i),d=u*(u+2*a)+l):(h=Math.max(0,-(s*i+o)),u=h>0?i:Math.min(Math.max(-i,-a),i),d=-h*h+u*(u+2*a)+l);else u=s>0?-i:i,h=Math.max(0,-(s*u+o)),d=-h*h+u*(u+2*a)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(ni).addScaledVector(ii,u),d}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const r=ri.dot(this.direction),n=ri.dot(ri)-r*r,i=t.radius*t.radius;if(n>i)return null;const s=Math.sqrt(i-n),o=r-s,a=r+s;return a<0?null:o<0?this.at(a,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(0===e)return 0===t.distanceToPoint(this.origin)?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){const r=this.distanceToPlane(t);return null===r?null:this.at(r,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return 0===e||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,n,i,s,o,a;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(r=(t.min.x-u.x)*l,n=(t.max.x-u.x)*l):(r=(t.max.x-u.x)*l,n=(t.min.x-u.x)*l),c>=0?(i=(t.min.y-u.y)*c,s=(t.max.y-u.y)*c):(i=(t.max.y-u.y)*c,s=(t.min.y-u.y)*c),r>s||i>n?null:((i>r||isNaN(r))&&(r=i),(s<n||isNaN(n))&&(n=s),h>=0?(o=(t.min.z-u.z)*h,a=(t.max.z-u.z)*h):(o=(t.max.z-u.z)*h,a=(t.min.z-u.z)*h),r>a||o>n?null:((o>r||r!=r)&&(r=o),(a<n||n!=n)&&(n=a),n<0?null:this.at(r>=0?r:n,e)))}intersectsBox(t){return null!==this.intersectBox(t,ri)}intersectTriangle(t,e,r,n,i){oi.subVectors(e,t),ai.subVectors(r,t),li.crossVectors(oi,ai);let s,o=this.direction.dot(li);if(o>0){if(n)return null;s=1}else{if(!(o<0))return null;s=-1,o=-o}si.subVectors(this.origin,t);const a=s*this.direction.dot(ai.crossVectors(si,ai));if(a<0)return null;const l=s*this.direction.dot(oi.cross(si));if(l<0)return null;if(a+l>o)return null;const c=-s*si.dot(li);return c<0?null:this.at(c/o,i)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return(new this.constructor).copy(this)}}class hi{constructor(t,e,r,n,i,s,o,a,l,c,h,u,d,p,f,m){hi.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],void 0!==t&&this.set(t,e,r,n,i,s,o,a,l,c,h,u,d,p,f,m)}set(t,e,r,n,i,s,o,a,l,c,h,u,d,p,f,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=r,g[12]=n,g[1]=i,g[5]=s,g[9]=o,g[13]=a,g[2]=l,g[6]=c,g[10]=h,g[14]=u,g[3]=d,g[7]=p,g[11]=f,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new hi).fromArray(this.elements)}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){const e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,r=t.elements,n=1/ui.setFromMatrixColumn(t,0).length(),i=1/ui.setFromMatrixColumn(t,1).length(),s=1/ui.setFromMatrixColumn(t,2).length();return e[0]=r[0]*n,e[1]=r[1]*n,e[2]=r[2]*n,e[3]=0,e[4]=r[4]*i,e[5]=r[5]*i,e[6]=r[6]*i,e[7]=0,e[8]=r[8]*s,e[9]=r[9]*s,e[10]=r[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,r=t.x,n=t.y,i=t.z,s=Math.cos(r),o=Math.sin(r),a=Math.cos(n),l=Math.sin(n),c=Math.cos(i),h=Math.sin(i);if("XYZ"===t.order){const t=s*c,r=s*h,n=o*c,i=o*h;e[0]=a*c,e[4]=-a*h,e[8]=l,e[1]=r+n*l,e[5]=t-i*l,e[9]=-o*a,e[2]=i-t*l,e[6]=n+r*l,e[10]=s*a}else if("YXZ"===t.order){const t=a*c,r=a*h,n=l*c,i=l*h;e[0]=t+i*o,e[4]=n*o-r,e[8]=s*l,e[1]=s*h,e[5]=s*c,e[9]=-o,e[2]=r*o-n,e[6]=i+t*o,e[10]=s*a}else if("ZXY"===t.order){const t=a*c,r=a*h,n=l*c,i=l*h;e[0]=t-i*o,e[4]=-s*h,e[8]=n+r*o,e[1]=r+n*o,e[5]=s*c,e[9]=i-t*o,e[2]=-s*l,e[6]=o,e[10]=s*a}else if("ZYX"===t.order){const t=s*c,r=s*h,n=o*c,i=o*h;e[0]=a*c,e[4]=n*l-r,e[8]=t*l+i,e[1]=a*h,e[5]=i*l+t,e[9]=r*l-n,e[2]=-l,e[6]=o*a,e[10]=s*a}else if("YZX"===t.order){const t=s*a,r=s*l,n=o*a,i=o*l;e[0]=a*c,e[4]=i-t*h,e[8]=n*h+r,e[1]=h,e[5]=s*c,e[9]=-o*c,e[2]=-l*c,e[6]=r*h+n,e[10]=t-i*h}else if("XZY"===t.order){const t=s*a,r=s*l,n=o*a,i=o*l;e[0]=a*c,e[4]=-h,e[8]=l*c,e[1]=t*h+i,e[5]=s*c,e[9]=r*h-n,e[2]=n*h-r,e[6]=o*c,e[10]=i*h+t}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pi,t,fi)}lookAt(t,e,r){const n=this.elements;return Ai.subVectors(t,e),0===Ai.lengthSq()&&(Ai.z=1),Ai.normalize(),mi.crossVectors(r,Ai),0===mi.lengthSq()&&(1===Math.abs(r.z)?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),mi.crossVectors(r,Ai)),mi.normalize(),gi.crossVectors(Ai,mi),n[0]=mi.x,n[4]=gi.x,n[8]=Ai.x,n[1]=mi.y,n[5]=gi.y,n[9]=Ai.y,n[2]=mi.z,n[6]=gi.z,n[10]=Ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,n=e.elements,i=this.elements,s=r[0],o=r[4],a=r[8],l=r[12],c=r[1],h=r[5],u=r[9],d=r[13],p=r[2],f=r[6],m=r[10],g=r[14],A=r[3],y=r[7],v=r[11],x=r[15],_=n[0],w=n[4],b=n[8],E=n[12],S=n[1],M=n[5],C=n[9],T=n[13],I=n[2],R=n[6],P=n[10],B=n[14],L=n[3],D=n[7],O=n[11],N=n[15];return i[0]=s*_+o*S+a*I+l*L,i[4]=s*w+o*M+a*R+l*D,i[8]=s*b+o*C+a*P+l*O,i[12]=s*E+o*T+a*B+l*N,i[1]=c*_+h*S+u*I+d*L,i[5]=c*w+h*M+u*R+d*D,i[9]=c*b+h*C+u*P+d*O,i[13]=c*E+h*T+u*B+d*N,i[2]=p*_+f*S+m*I+g*L,i[6]=p*w+f*M+m*R+g*D,i[10]=p*b+f*C+m*P+g*O,i[14]=p*E+f*T+m*B+g*N,i[3]=A*_+y*S+v*I+x*L,i[7]=A*w+y*M+v*R+x*D,i[11]=A*b+y*C+v*P+x*O,i[15]=A*E+y*T+v*B+x*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[4],n=t[8],i=t[12],s=t[1],o=t[5],a=t[9],l=t[13],c=t[2],h=t[6],u=t[10],d=t[14];return t[3]*(+i*a*h-n*l*h-i*o*u+r*l*u+n*o*d-r*a*d)+t[7]*(+e*a*d-e*l*u+i*s*u-n*s*d+n*l*c-i*a*c)+t[11]*(+e*l*h-e*o*d-i*s*h+r*s*d+i*o*c-r*l*c)+t[15]*(-n*o*c-e*a*h+e*o*u+n*s*h-r*s*u+r*a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=r),this}invert(){const t=this.elements,e=t[0],r=t[1],n=t[2],i=t[3],s=t[4],o=t[5],a=t[6],l=t[7],c=t[8],h=t[9],u=t[10],d=t[11],p=t[12],f=t[13],m=t[14],g=t[15],A=h*m*l-f*u*l+f*a*d-o*m*d-h*a*g+o*u*g,y=p*u*l-c*m*l-p*a*d+s*m*d+c*a*g-s*u*g,v=c*f*l-p*h*l+p*o*d-s*f*d-c*o*g+s*h*g,x=p*h*a-c*f*a-p*o*u+s*f*u+c*o*m-s*h*m,_=e*A+r*y+n*v+i*x;if(0===_)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/_;return t[0]=A*w,t[1]=(f*u*i-h*m*i-f*n*d+r*m*d+h*n*g-r*u*g)*w,t[2]=(o*m*i-f*a*i+f*n*l-r*m*l-o*n*g+r*a*g)*w,t[3]=(h*a*i-o*u*i-h*n*l+r*u*l+o*n*d-r*a*d)*w,t[4]=y*w,t[5]=(c*m*i-p*u*i+p*n*d-e*m*d-c*n*g+e*u*g)*w,t[6]=(p*a*i-s*m*i-p*n*l+e*m*l+s*n*g-e*a*g)*w,t[7]=(s*u*i-c*a*i+c*n*l-e*u*l-s*n*d+e*a*d)*w,t[8]=v*w,t[9]=(p*h*i-c*f*i-p*r*d+e*f*d+c*r*g-e*h*g)*w,t[10]=(s*f*i-p*o*i+p*r*l-e*f*l-s*r*g+e*o*g)*w,t[11]=(c*o*i-s*h*i-c*r*l+e*h*l+s*r*d-e*o*d)*w,t[12]=x*w,t[13]=(c*f*n-p*h*n+p*r*u-e*f*u-c*r*m+e*h*m)*w,t[14]=(p*o*n-s*f*n-p*r*a+e*f*a+s*r*m-e*o*m)*w,t[15]=(s*h*n-c*o*n+c*r*a-e*h*a-s*r*u+e*o*u)*w,this}scale(t){const e=this.elements,r=t.x,n=t.y,i=t.z;return e[0]*=r,e[4]*=n,e[8]*=i,e[1]*=r,e[5]*=n,e[9]*=i,e[2]*=r,e[6]*=n,e[10]*=i,e[3]*=r,e[7]*=n,e[11]*=i,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,n))}makeTranslation(t,e,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const r=Math.cos(e),n=Math.sin(e),i=1-r,s=t.x,o=t.y,a=t.z,l=i*s,c=i*o;return this.set(l*s+r,l*o-n*a,l*a+n*o,0,l*o+n*a,c*o+r,c*a-n*s,0,l*a-n*o,c*a+n*s,i*a*a+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,n,i,s){return this.set(1,r,i,0,t,1,s,0,e,n,1,0,0,0,0,1),this}compose(t,e,r){const n=this.elements,i=e._x,s=e._y,o=e._z,a=e._w,l=i+i,c=s+s,h=o+o,u=i*l,d=i*c,p=i*h,f=s*c,m=s*h,g=o*h,A=a*l,y=a*c,v=a*h,x=r.x,_=r.y,w=r.z;return n[0]=(1-(f+g))*x,n[1]=(d+v)*x,n[2]=(p-y)*x,n[3]=0,n[4]=(d-v)*_,n[5]=(1-(u+g))*_,n[6]=(m+A)*_,n[7]=0,n[8]=(p+y)*w,n[9]=(m-A)*w,n[10]=(1-(u+f))*w,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,r){const n=this.elements;let i=ui.set(n[0],n[1],n[2]).length();const s=ui.set(n[4],n[5],n[6]).length(),o=ui.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),t.x=n[12],t.y=n[13],t.z=n[14],di.copy(this);const a=1/i,l=1/s,c=1/o;return di.elements[0]*=a,di.elements[1]*=a,di.elements[2]*=a,di.elements[4]*=l,di.elements[5]*=l,di.elements[6]*=l,di.elements[8]*=c,di.elements[9]*=c,di.elements[10]*=c,e.setFromRotationMatrix(di),r.x=i,r.y=s,r.z=o,this}makePerspective(t,e,r,n,i,s,o=Ur){const a=this.elements,l=2*i/(e-t),c=2*i/(r-n),h=(e+t)/(e-t),u=(r+n)/(r-n);let d,p;if(o===Ur)d=-(s+i)/(s-i),p=-2*s*i/(s-i);else{if(o!==kr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);d=-s/(s-i),p=-s*i/(s-i)}return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,r,n,i,s,o=Ur){const a=this.elements,l=1/(e-t),c=1/(r-n),h=1/(s-i),u=(e+t)*l,d=(r+n)*c;let p,f;if(o===Ur)p=(s+i)*h,f=-2*h;else{if(o!==kr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);p=i*h,f=-1*h}return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=f,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,r=t.elements;for(let t=0;t<16;t++)if(e[t]!==r[t])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}}const ui=new Dn,di=new hi,pi=new Dn(0,0,0),fi=new Dn(1,1,1),mi=new Dn,gi=new Dn,Ai=new Dn,yi=new hi,vi=new Ln;class xi{constructor(t=0,e=0,r=0,n=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,n=this._order){return this._x=t,this._y=e,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){const n=t.elements,i=n[0],s=n[4],o=n[8],a=n[1],l=n[5],c=n[9],h=n[2],u=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(Wr(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wr(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(Wr(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(a,i));break;case"ZYX":this._y=Math.asin(-Wr(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(a,i)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Wr(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Wr(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,!0===r&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return yi.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yi,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vi.setFromEuler(this),this.setFromQuaternion(vi,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class _i{constructor(){this.mask=1}set(t){this.mask=1<<t>>>0}enable(t){this.mask|=1<<t}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t}disable(t){this.mask&=~(1<<t)}disableAll(){this.mask=0}test(t){return!!(this.mask&t.mask)}isEnabled(t){return!!(this.mask&1<<t)}}let wi=0;const bi=new Dn,Ei=new Ln,Si=new hi,Mi=new Dn,Ci=new Dn,Ti=new Dn,Ii=new Ln,Ri=new Dn(1,0,0),Pi=new Dn(0,1,0),Bi=new Dn(0,0,1),Li={type:"added"},Di={type:"removed"},Oi={type:"childadded",child:null},Ni={type:"childremoved",child:null};class Fi extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wi++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fi.DEFAULT_UP.clone();const t=new Dn,e=new xi,r=new Ln,n=new Dn(1,1,1);e._onChange((function(){r.setFromEuler(e,!1)})),r._onChange((function(){e.setFromQuaternion(r,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new hi},normalMatrix:{value:new tn}}),this.matrix=new hi,this.matrixWorld=new hi,this.matrixAutoUpdate=Fi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _i,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(Ri,t)}rotateY(t){return this.rotateOnAxis(Pi,t)}rotateZ(t){return this.rotateOnAxis(Bi,t)}translateOnAxis(t,e){return bi.copy(t).applyQuaternion(this.quaternion),this.position.add(bi.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ri,t)}translateY(t){return this.translateOnAxis(Pi,t)}translateZ(t){return this.translateOnAxis(Bi,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?Mi.copy(t):Mi.set(t,e,r);const n=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Ci,Mi,this.up):Si.lookAt(Mi,Ci,this.up),this.quaternion.setFromRotationMatrix(Si),n&&(Si.extractRotation(n.matrixWorld),Ei.setFromRotationMatrix(Si),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Li),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(t);return-1!==e&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Di),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null),this}removeFromParent(){const t=this.parent;return null!==t&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),null!==t.parent&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Li),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,n=this.children.length;r<n;r++){const n=this.children[r].getObjectByProperty(t,e);if(void 0!==n)return n}}getObjectsByProperty(t,e,r=[]){this[t]===e&&r.push(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].getObjectsByProperty(t,e,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,Ti),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,Ii,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let r=0,n=e.length;r<n;r++)e[r].traverse(t)}traverseVisible(t){if(!1===this.visible)return;t(this);const e=this.children;for(let r=0,n=e.length;r<n;r++)e[r].traverseVisible(t)}traverseAncestors(t){const e=this.parent;null!==e&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(!0===this.matrixWorldAutoUpdate&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let r=0,n=e.length;r<n;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e){const r=this.parent;if(!0===t&&null!==r&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),!0===this.matrixWorldAutoUpdate&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),!0===e){const t=this.children;for(let e=0,r=t.length;e<r;e++)t[e].updateWorldMatrix(!1,!0)}}toJSON(t){const e=void 0===t||"string"==typeof t,r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};function i(e,r){return void 0===e[r.uuid]&&(e[r.uuid]=r.toJSON(t)),r.uuid}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),!0===this.castShadow&&(n.castShadow=!0),!0===this.receiveShadow&&(n.receiveShadow=!0),!1===this.visible&&(n.visible=!1),!1===this.frustumCulled&&(n.frustumCulled=!1),0!==this.renderOrder&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),!1===this.matrixAutoUpdate&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map((t=>({boxInitialized:t.boxInitialized,boxMin:t.box.min.toArray(),boxMax:t.box.max.toArray(),sphereInitialized:t.sphereInitialized,sphereRadius:t.sphere.radius,sphereCenter:t.sphere.center.toArray()}))),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),null!==this._colorsTexture&&(n.colorsTexture=this._colorsTexture.toJSON(t)),null!==this.boundingSphere&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),null!==this.boundingBox&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(t.geometries,this.geometry);const e=this.geometry.parameters;if(void 0!==e&&void 0!==e.shapes){const r=e.shapes;if(Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const n=r[e];i(t.shapes,n)}else i(t.shapes,r)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(i(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){const e=[];for(let r=0,n=this.material.length;r<n;r++)e.push(i(t.materials,this.material[r]));n.material=e}else n.material=i(t.materials,this.material);if(this.children.length>0){n.children=[];for(let e=0;e<this.children.length;e++)n.children.push(this.children[e].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let e=0;e<this.animations.length;e++){const r=this.animations[e];n.animations.push(i(t.animations,r))}}if(e){const e=s(t.geometries),n=s(t.materials),i=s(t.textures),o=s(t.images),a=s(t.shapes),l=s(t.skeletons),c=s(t.animations),h=s(t.nodes);e.length>0&&(r.geometries=e),n.length>0&&(r.materials=n),i.length>0&&(r.textures=i),o.length>0&&(r.images=o),a.length>0&&(r.shapes=a),l.length>0&&(r.skeletons=l),c.length>0&&(r.animations=c),h.length>0&&(r.nodes=h)}return r.object=n,r;function s(t){const e=[];for(const r in t){const n=t[r];delete n.metadata,e.push(n)}return e}}clone(t){return(new this.constructor).copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(let e=0;e<t.children.length;e++){const r=t.children[e];this.add(r.clone())}return this}}Fi.DEFAULT_UP=new Dn(0,1,0),Fi.DEFAULT_MATRIX_AUTO_UPDATE=!0,Fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new Dn,ki=new Dn,zi=new Dn,Gi=new Dn,Qi=new Dn,Vi=new Dn,ji=new Dn,Hi=new Dn,qi=new Dn,Wi=new Dn,Yi=new Mn,Xi=new Mn,$i=new Mn;class Ji{constructor(t=new Dn,e=new Dn,r=new Dn){this.a=t,this.b=e,this.c=r}static getNormal(t,e,r,n){n.subVectors(r,e),Ui.subVectors(t,e),n.cross(Ui);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(t,e,r,n,i){Ui.subVectors(n,e),ki.subVectors(r,e),zi.subVectors(t,e);const s=Ui.dot(Ui),o=Ui.dot(ki),a=Ui.dot(zi),l=ki.dot(ki),c=ki.dot(zi),h=s*l-o*o;if(0===h)return i.set(0,0,0),null;const u=1/h,d=(l*a-o*c)*u,p=(s*c-o*a)*u;return i.set(1-d-p,p,d)}static containsPoint(t,e,r,n){return null!==this.getBarycoord(t,e,r,n,Gi)&&Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,e,r,n,i,s,o,a){return null===this.getBarycoord(t,e,r,n,Gi)?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(i,Gi.x),a.addScaledVector(s,Gi.y),a.addScaledVector(o,Gi.z),a)}static getInterpolatedAttribute(t,e,r,n,i,s){return Yi.setScalar(0),Xi.setScalar(0),$i.setScalar(0),Yi.fromBufferAttribute(t,e),Xi.fromBufferAttribute(t,r),$i.fromBufferAttribute(t,n),s.setScalar(0),s.addScaledVector(Yi,i.x),s.addScaledVector(Xi,i.y),s.addScaledVector($i,i.z),s}static isFrontFacing(t,e,r,n){return Ui.subVectors(r,e),ki.subVectors(t,e),Ui.cross(ki).dot(n)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,n){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,r,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,n),this}clone(){return(new this.constructor).copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),.5*Ui.cross(ki).length()}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ji.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ji.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,r,n,i){return Ji.getInterpolation(t,this.a,this.b,this.c,e,r,n,i)}containsPoint(t){return Ji.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ji.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const r=this.a,n=this.b,i=this.c;let s,o;Qi.subVectors(n,r),Vi.subVectors(i,r),Hi.subVectors(t,r);const a=Qi.dot(Hi),l=Vi.dot(Hi);if(a<=0&&l<=0)return e.copy(r);qi.subVectors(t,n);const c=Qi.dot(qi),h=Vi.dot(qi);if(c>=0&&h<=c)return e.copy(n);const u=a*h-c*l;if(u<=0&&a>=0&&c<=0)return s=a/(a-c),e.copy(r).addScaledVector(Qi,s);Wi.subVectors(t,i);const d=Qi.dot(Wi),p=Vi.dot(Wi);if(p>=0&&d<=p)return e.copy(i);const f=d*l-a*p;if(f<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(r).addScaledVector(Vi,o);const m=c*p-d*h;if(m<=0&&h-c>=0&&d-p>=0)return ji.subVectors(i,n),o=(h-c)/(h-c+(d-p)),e.copy(n).addScaledVector(ji,o);const g=1/(m+f+u);return s=f*g,o=u*g,e.copy(r).addScaledVector(Qi,s).addScaledVector(Vi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ki={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},ts={h:0,s:0,l:0};function es(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+6*(e-t)*(2/3-r):t}class rs{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,r)}set(t,e,r){if(void 0===e&&void 0===r){const e=t;e&&e.isColor?this.copy(e):"number"==typeof e?this.setHex(e):"string"==typeof e&&this.setStyle(e)}else this.setRGB(t,e,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,gn.toWorkingColorSpace(this,e),this}setRGB(t,e,r,n=gn.workingColorSpace){return this.r=t,this.g=e,this.b=r,gn.toWorkingColorSpace(this,n),this}setHSL(t,e,r,n=gn.workingColorSpace){if(t=Yr(t,1),e=Wr(e,0,1),r=Wr(r,0,1),0===e)this.r=this.g=this.b=r;else{const n=r<=.5?r*(1+e):r+e-r*e,i=2*r-n;this.r=es(i,n,t+1/3),this.g=es(i,n,t),this.b=es(i,n,t-1/3)}return gn.toWorkingColorSpace(this,n),this}setStyle(t,e=Ze){function r(e){void 0!==e&&parseFloat(e)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let i;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,e);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,e);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],i=r.length;if(3===i)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(6===i)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const r=Ki[t.toLowerCase()];return void 0!==r?this.setHex(r,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return gn.fromWorkingColorSpace(ns.copy(this),t),65536*Math.round(Wr(255*ns.r,0,255))+256*Math.round(Wr(255*ns.g,0,255))+Math.round(Wr(255*ns.b,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=gn.workingColorSpace){gn.fromWorkingColorSpace(ns.copy(this),e);const r=ns.r,n=ns.g,i=ns.b,s=Math.max(r,n,i),o=Math.min(r,n,i);let a,l;const c=(o+s)/2;if(o===s)a=0,l=0;else{const t=s-o;switch(l=c<=.5?t/(s+o):t/(2-s-o),s){case r:a=(n-i)/t+(n<i?6:0);break;case n:a=(i-r)/t+2;break;case i:a=(r-n)/t+4}a/=6}return t.h=a,t.s=l,t.l=c,t}getRGB(t,e=gn.workingColorSpace){return gn.fromWorkingColorSpace(ns.copy(this),e),t.r=ns.r,t.g=ns.g,t.b=ns.b,t}getStyle(t=Ze){gn.fromWorkingColorSpace(ns.copy(this),t);const e=ns.r,r=ns.g,n=ns.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*r)},${Math.round(255*n)})`}offsetHSL(t,e,r){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(ts);const r=Xr(Zi.h,ts.h,e),n=Xr(Zi.s,ts.s,e),i=Xr(Zi.l,ts.l,e);return this.setHSL(r,n,i),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,r=this.g,n=this.b,i=t.elements;return this.r=i[0]*e+i[3]*r+i[6]*n,this.g=i[1]*e+i[4]*r+i[7]*n,this.b=i[2]*e+i[5]*r+i[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ns=new rs;rs.NAMES=Ki;let is=0;class ss extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:is++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=y,this.side=f,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=B,this.blendDst=L,this.blendEquation=b,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rs(0,0,0),this.blendAlpha=0,this.depthFunc=q,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(void 0!==t)for(const e in t){const r=t[e];if(void 0===r){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];void 0!==n?n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[e]=r:console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`)}}toJSON(t){const e=void 0===t||"string"==typeof t;e&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(t){const e=[];for(const r in t){const n=t[r];delete n.metadata,e.push(n)}return e}if(r.uuid=this.uuid,r.type=this.type,""!==this.name&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),void 0!==this.roughness&&(r.roughness=this.roughness),void 0!==this.metalness&&(r.metalness=this.metalness),void 0!==this.sheen&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),void 0!==this.emissiveIntensity&&1!==this.emissiveIntensity&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(r.shininess=this.shininess),void 0!==this.clearcoat&&(r.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.dispersion&&(r.dispersion=this.dispersion),void 0!==this.iridescence&&(r.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(r.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),void 0!==this.anisotropy&&(r.anisotropy=this.anisotropy),void 0!==this.anisotropyRotation&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,void 0!==this.combine&&(r.combine=this.combine)),void 0!==this.envMapRotation&&(r.envMapRotation=this.envMapRotation.toArray()),void 0!==this.envMapIntensity&&(r.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(r.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),void 0!==this.transmission&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),void 0!==this.thickness&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),void 0!==this.attenuationDistance&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(r.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(r.size=this.size),null!==this.shadowSide&&(r.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==y&&(r.blending=this.blending),this.side!==f&&(r.side=this.side),!0===this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),!0===this.transparent&&(r.transparent=!0),this.blendSrc!==B&&(r.blendSrc=this.blendSrc),this.blendDst!==L&&(r.blendDst=this.blendDst),this.blendEquation!==b&&(r.blendEquation=this.blendEquation),null!==this.blendSrcAlpha&&(r.blendSrcAlpha=this.blendSrcAlpha),null!==this.blendDstAlpha&&(r.blendDstAlpha=this.blendDstAlpha),null!==this.blendEquationAlpha&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),0!==this.blendAlpha&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==q&&(r.depthFunc=this.depthFunc),!1===this.depthTest&&(r.depthTest=this.depthTest),!1===this.depthWrite&&(r.depthWrite=this.depthWrite),!1===this.colorWrite&&(r.colorWrite=this.colorWrite),255!==this.stencilWriteMask&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yr&&(r.stencilFunc=this.stencilFunc),0!==this.stencilRef&&(r.stencilRef=this.stencilRef),255!==this.stencilFuncMask&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(r.stencilZPass=this.stencilZPass),!0===this.stencilWrite&&(r.stencilWrite=this.stencilWrite),void 0!==this.rotation&&0!==this.rotation&&(r.rotation=this.rotation),!0===this.polygonOffset&&(r.polygonOffset=!0),0!==this.polygonOffsetFactor&&(r.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(r.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(r.linewidth=this.linewidth),void 0!==this.dashSize&&(r.dashSize=this.dashSize),void 0!==this.gapSize&&(r.gapSize=this.gapSize),void 0!==this.scale&&(r.scale=this.scale),!0===this.dithering&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),!0===this.alphaHash&&(r.alphaHash=!0),!0===this.alphaToCoverage&&(r.alphaToCoverage=!0),!0===this.premultipliedAlpha&&(r.premultipliedAlpha=!0),!0===this.forceSinglePass&&(r.forceSinglePass=!0),!0===this.wireframe&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(r.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(r.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(r.flatShading=!0),!1===this.visible&&(r.visible=!1),!1===this.toneMapped&&(r.toneMapped=!1),!1===this.fog&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData),e){const e=n(t.textures),i=n(t.images);e.length>0&&(r.textures=e),i.length>0&&(r.images=i)}return r}clone(){return(new this.constructor).copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let r=null;if(null!==e){const t=e.length;r=new Array(t);for(let n=0;n!==t;++n)r[n]=e[n].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){!0===t&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class os extends ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rs(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=J,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const as=ls();function ls(){const t=new ArrayBuffer(4),e=new Float32Array(t),r=new Uint32Array(t),n=new Uint32Array(512),i=new Uint32Array(512);for(let t=0;t<256;++t){const e=t-127;e<-27?(n[t]=0,n[256|t]=32768,i[t]=24,i[256|t]=24):e<-14?(n[t]=1024>>-e-14,n[256|t]=1024>>-e-14|32768,i[t]=-e-1,i[256|t]=-e-1):e<=15?(n[t]=e+15<<10,n[256|t]=e+15<<10|32768,i[t]=13,i[256|t]=13):e<128?(n[t]=31744,n[256|t]=64512,i[t]=24,i[256|t]=24):(n[t]=31744,n[256|t]=64512,i[t]=13,i[256|t]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let t=1;t<1024;++t){let e=t<<13,r=0;for(;!(8388608&e);)e<<=1,r-=8388608;e&=-8388609,r+=947912704,s[t]=e|r}for(let t=1024;t<2048;++t)s[t]=939524096+(t-1024<<13);for(let t=1;t<31;++t)o[t]=t<<23;o[31]=1199570944,o[32]=2147483648;for(let t=33;t<63;++t)o[t]=2147483648+(t-32<<23);o[63]=3347054592;for(let t=1;t<64;++t)32!==t&&(a[t]=1024);return{floatView:e,uint32View:r,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function cs(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=Wr(t,-65504,65504),as.floatView[0]=t;const e=as.uint32View[0],r=e>>23&511;return as.baseTable[r]+((8388607&e)>>as.shiftTable[r])}function hs(t){const e=t>>10;return as.uint32View[0]=as.mantissaTable[as.offsetTable[e]+(1023&t)]+as.exponentTable[e],as.floatView[0]}class us{static toHalfFloat(t){return cs(t)}static fromHalfFloat(t){return hs(t)}}const ds=new Dn,ps=new Zr;let fs=0;class ms{constructor(t,e,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fs++}),this.name="",this.array=t,this.itemSize=e,this.count=void 0!==t?t.length/e:0,this.normalized=r,this.usage=Cr,this.updateRanges=[],this.gpuType=Ot,this.version=0}onUploadCallback(){}set needsUpdate(t){!0===t&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[t+n]=e.array[r+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(2===this.itemSize)for(let e=0,r=this.count;e<r;e++)ps.fromBufferAttribute(this,e),ps.applyMatrix3(t),this.setXY(e,ps.x,ps.y);else if(3===this.itemSize)for(let e=0,r=this.count;e<r;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXYZ(e,ds.x,ds.y,ds.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix4(t),this.setXYZ(e,ds.x,ds.y,ds.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)ds.fromBufferAttribute(this,e),ds.applyNormalMatrix(t),this.setXYZ(e,ds.x,ds.y,ds.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)ds.fromBufferAttribute(this,e),ds.transformDirection(t),this.setXYZ(e,ds.x,ds.y,ds.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let r=this.array[t*this.itemSize+e];return this.normalized&&(r=$r(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=Jr(r,this.array)),this.array[t*this.itemSize+e]=r,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$r(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jr(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$r(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jr(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$r(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jr(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$r(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jr(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=Jr(e,this.array),r=Jr(r,this.array)),this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,n){return t*=this.itemSize,this.normalized&&(e=Jr(e,this.array),r=Jr(r,this.array),n=Jr(n,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=n,this}setXYZW(t,e,r,n,i){return t*=this.itemSize,this.normalized&&(e=Jr(e,this.array),r=Jr(r,this.array),n=Jr(n,this.array),i=Jr(i,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=n,this.array[t+3]=i,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return""!==this.name&&(t.name=this.name),this.usage!==Cr&&(t.usage=this.usage),t}}class gs extends ms{constructor(t,e,r){super(new Int8Array(t),e,r)}}class As extends ms{constructor(t,e,r){super(new Uint8Array(t),e,r)}}class ys extends ms{constructor(t,e,r){super(new Uint8ClampedArray(t),e,r)}}class vs extends ms{constructor(t,e,r){super(new Int16Array(t),e,r)}}class xs extends ms{constructor(t,e,r){super(new Uint16Array(t),e,r)}}class _s extends ms{constructor(t,e,r){super(new Int32Array(t),e,r)}}class ws extends ms{constructor(t,e,r){super(new Uint32Array(t),e,r)}}class bs extends ms{constructor(t,e,r){super(new Uint16Array(t),e,r),this.isFloat16BufferAttribute=!0}getX(t){let e=hs(this.array[t*this.itemSize]);return this.normalized&&(e=$r(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jr(e,this.array)),this.array[t*this.itemSize]=cs(e),this}getY(t){let e=hs(this.array[t*this.itemSize+1]);return this.normalized&&(e=$r(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jr(e,this.array)),this.array[t*this.itemSize+1]=cs(e),this}getZ(t){let e=hs(this.array[t*this.itemSize+2]);return this.normalized&&(e=$r(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jr(e,this.array)),this.array[t*this.itemSize+2]=cs(e),this}getW(t){let e=hs(this.array[t*this.itemSize+3]);return this.normalized&&(e=$r(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jr(e,this.array)),this.array[t*this.itemSize+3]=cs(e),this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=Jr(e,this.array),r=Jr(r,this.array)),this.array[t+0]=cs(e),this.array[t+1]=cs(r),this}setXYZ(t,e,r,n){return t*=this.itemSize,this.normalized&&(e=Jr(e,this.array),r=Jr(r,this.array),n=Jr(n,this.array)),this.array[t+0]=cs(e),this.array[t+1]=cs(r),this.array[t+2]=cs(n),this}setXYZW(t,e,r,n,i){return t*=this.itemSize,this.normalized&&(e=Jr(e,this.array),r=Jr(r,this.array),n=Jr(n,this.array),i=Jr(i,this.array)),this.array[t+0]=cs(e),this.array[t+1]=cs(r),this.array[t+2]=cs(n),this.array[t+3]=cs(i),this}}class Es extends ms{constructor(t,e,r){super(new Float32Array(t),e,r)}}let Ss=0;const Ms=new hi,Cs=new Fi,Ts=new Dn,Is=new Fn,Rs=new Fn,Ps=new Dn;class Bs extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ss++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rn(t)?ws:xs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return void 0!==this.attributes[t]}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;void 0!==e&&(e.applyMatrix4(t),e.needsUpdate=!0);const r=this.attributes.normal;if(void 0!==r){const e=(new tn).getNormalMatrix(t);r.applyNormalMatrix(e),r.needsUpdate=!0}const n=this.attributes.tangent;return void 0!==n&&(n.transformDirection(t),n.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ms.makeRotationFromQuaternion(t),this.applyMatrix4(Ms),this}rotateX(t){return Ms.makeRotationX(t),this.applyMatrix4(Ms),this}rotateY(t){return Ms.makeRotationY(t),this.applyMatrix4(Ms),this}rotateZ(t){return Ms.makeRotationZ(t),this.applyMatrix4(Ms),this}translate(t,e,r){return Ms.makeTranslation(t,e,r),this.applyMatrix4(Ms),this}scale(t,e,r){return Ms.makeScale(t,e,r),this.applyMatrix4(Ms),this}lookAt(t){return Cs.lookAt(t),Cs.updateMatrix(),this.applyMatrix4(Cs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(void 0===e){const e=[];for(let r=0,n=t.length;r<n;r++){const n=t[r];e.push(n.x,n.y,n.z||0)}this.setAttribute("position",new Es(e,3))}else{const r=Math.min(t.length,e.count);for(let n=0;n<r;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new Fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new Dn(-1/0,-1/0,-1/0),new Dn(1/0,1/0,1/0));if(void 0!==t){if(this.boundingBox.setFromBufferAttribute(t),e)for(let t=0,r=e.length;t<r;t++){const r=e[t];Is.setFromBufferAttribute(r),this.morphTargetsRelative?(Ps.addVectors(this.boundingBox.min,Is.min),this.boundingBox.expandByPoint(Ps),Ps.addVectors(this.boundingBox.max,Is.max),this.boundingBox.expandByPoint(Ps)):(this.boundingBox.expandByPoint(Is.min),this.boundingBox.expandByPoint(Is.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new Dn,1/0);if(t){const r=this.boundingSphere.center;if(Is.setFromBufferAttribute(t),e)for(let t=0,r=e.length;t<r;t++){const r=e[t];Rs.setFromBufferAttribute(r),this.morphTargetsRelative?(Ps.addVectors(Is.min,Rs.min),Is.expandByPoint(Ps),Ps.addVectors(Is.max,Rs.max),Is.expandByPoint(Ps)):(Is.expandByPoint(Rs.min),Is.expandByPoint(Rs.max))}Is.getCenter(r);let n=0;for(let e=0,i=t.count;e<i;e++)Ps.fromBufferAttribute(t,e),n=Math.max(n,r.distanceToSquared(Ps));if(e)for(let i=0,s=e.length;i<s;i++){const s=e[i],o=this.morphTargetsRelative;for(let e=0,i=s.count;e<i;e++)Ps.fromBufferAttribute(s,e),o&&(Ts.fromBufferAttribute(t,e),Ps.add(Ts)),n=Math.max(n,r.distanceToSquared(Ps))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(null===t||void 0===e.position||void 0===e.normal||void 0===e.uv)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const r=e.position,n=e.normal,i=e.uv;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new ms(new Float32Array(4*r.count),4));const s=this.getAttribute("tangent"),o=[],a=[];for(let t=0;t<r.count;t++)o[t]=new Dn,a[t]=new Dn;const l=new Dn,c=new Dn,h=new Dn,u=new Zr,d=new Zr,p=new Zr,f=new Dn,m=new Dn;function g(t,e,n){l.fromBufferAttribute(r,t),c.fromBufferAttribute(r,e),h.fromBufferAttribute(r,n),u.fromBufferAttribute(i,t),d.fromBufferAttribute(i,e),p.fromBufferAttribute(i,n),c.sub(l),h.sub(l),d.sub(u),p.sub(u);const s=1/(d.x*p.y-p.x*d.y);isFinite(s)&&(f.copy(c).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(s),m.copy(h).multiplyScalar(d.x).addScaledVector(c,-p.x).multiplyScalar(s),o[t].add(f),o[e].add(f),o[n].add(f),a[t].add(m),a[e].add(m),a[n].add(m))}let A=this.groups;0===A.length&&(A=[{start:0,count:t.count}]);for(let e=0,r=A.length;e<r;++e){const r=A[e],n=r.start;for(let e=n,i=n+r.count;e<i;e+=3)g(t.getX(e+0),t.getX(e+1),t.getX(e+2))}const y=new Dn,v=new Dn,x=new Dn,_=new Dn;function w(t){x.fromBufferAttribute(n,t),_.copy(x);const e=o[t];y.copy(e),y.sub(x.multiplyScalar(x.dot(e))).normalize(),v.crossVectors(_,e);const r=v.dot(a[t])<0?-1:1;s.setXYZW(t,y.x,y.y,y.z,r)}for(let e=0,r=A.length;e<r;++e){const r=A[e],n=r.start;for(let e=n,i=n+r.count;e<i;e+=3)w(t.getX(e+0)),w(t.getX(e+1)),w(t.getX(e+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(void 0!==e){let r=this.getAttribute("normal");if(void 0===r)r=new ms(new Float32Array(3*e.count),3),this.setAttribute("normal",r);else for(let t=0,e=r.count;t<e;t++)r.setXYZ(t,0,0,0);const n=new Dn,i=new Dn,s=new Dn,o=new Dn,a=new Dn,l=new Dn,c=new Dn,h=new Dn;if(t)for(let u=0,d=t.count;u<d;u+=3){const d=t.getX(u+0),p=t.getX(u+1),f=t.getX(u+2);n.fromBufferAttribute(e,d),i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,f),c.subVectors(s,i),h.subVectors(n,i),c.cross(h),o.fromBufferAttribute(r,d),a.fromBufferAttribute(r,p),l.fromBufferAttribute(r,f),o.add(c),a.add(c),l.add(c),r.setXYZ(d,o.x,o.y,o.z),r.setXYZ(p,a.x,a.y,a.z),r.setXYZ(f,l.x,l.y,l.z)}else for(let t=0,o=e.count;t<o;t+=3)n.fromBufferAttribute(e,t+0),i.fromBufferAttribute(e,t+1),s.fromBufferAttribute(e,t+2),c.subVectors(s,i),h.subVectors(n,i),c.cross(h),r.setXYZ(t+0,c.x,c.y,c.z),r.setXYZ(t+1,c.x,c.y,c.z),r.setXYZ(t+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)Ps.fromBufferAttribute(t,e),Ps.normalize(),t.setXYZ(e,Ps.x,Ps.y,Ps.z)}toNonIndexed(){function t(t,e){const r=t.array,n=t.itemSize,i=t.normalized,s=new r.constructor(e.length*n);let o=0,a=0;for(let i=0,l=e.length;i<l;i++){o=t.isInterleavedBufferAttribute?e[i]*t.data.stride+t.offset:e[i]*n;for(let t=0;t<n;t++)s[a++]=r[o++]}return new ms(s,n,i)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Bs,r=this.index.array,n=this.attributes;for(const i in n){const s=t(n[i],r);e.setAttribute(i,s)}const i=this.morphAttributes;for(const n in i){const s=[],o=i[n];for(let e=0,n=o.length;e<n;e++){const n=t(o[e],r);s.push(n)}e.morphAttributes[n]=s}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let t=0,r=s.length;t<r;t++){const r=s[t];e.addGroup(r.start,r.count,r.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),void 0!==this.parameters){const e=this.parameters;for(const r in e)void 0!==e[r]&&(t[r]=e[r]);return t}t.data={attributes:{}};const e=this.index;null!==e&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const r=this.attributes;for(const e in r){const n=r[e];t.data.attributes[e]=n.toJSON(t.data)}const n={};let i=!1;for(const e in this.morphAttributes){const r=this.morphAttributes[e],s=[];for(let e=0,n=r.length;e<n;e++){const n=r[e];s.push(n.toJSON(t.data))}s.length>0&&(n[e]=s,i=!0)}i&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return null!==o&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return(new this.constructor).copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const r=t.index;null!==r&&this.setIndex(r.clone(e));const n=t.attributes;for(const t in n){const r=n[t];this.setAttribute(t,r.clone(e))}const i=t.morphAttributes;for(const t in i){const r=[],n=i[t];for(let t=0,i=n.length;t<i;t++)r.push(n[t].clone(e));this.morphAttributes[t]=r}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let t=0,e=s.length;t<e;t++){const e=s[t];this.addGroup(e.start,e.count,e.materialIndex)}const o=t.boundingBox;null!==o&&(this.boundingBox=o.clone());const a=t.boundingSphere;return null!==a&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ls=new hi,Ds=new ci,Os=new ei,Ns=new Dn,Fs=new Dn,Us=new Dn,ks=new Dn,zs=new Dn,Gs=new Dn,Qs=new Dn,Vs=new Dn;class js extends Fi{constructor(t=new Bs,e=new os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),void 0!==t.morphTargetInfluences&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),void 0!==t.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const r=t[e[0]];if(void 0!==r){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,e=r.length;t<e;t++){const e=r[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[e]=t}}}}getVertexPosition(t,e){const r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,s=r.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(i&&o){Gs.set(0,0,0);for(let r=0,n=i.length;r<n;r++){const n=o[r],a=i[r];0!==n&&(zs.fromBufferAttribute(a,t),s?Gs.addScaledVector(zs,n):Gs.addScaledVector(zs.sub(e),n))}e.add(Gs)}return e}raycast(t,e){const r=this.geometry,n=this.material,i=this.matrixWorld;if(void 0!==n){if(null===r.boundingSphere&&r.computeBoundingSphere(),Os.copy(r.boundingSphere),Os.applyMatrix4(i),Ds.copy(t.ray).recast(t.near),!1===Os.containsPoint(Ds.origin)){if(null===Ds.intersectSphere(Os,Ns))return;if(Ds.origin.distanceToSquared(Ns)>(t.far-t.near)**2)return}Ls.copy(i).invert(),Ds.copy(t.ray).applyMatrix4(Ls),null!==r.boundingBox&&!1===Ds.intersectsBox(r.boundingBox)||this._computeIntersections(t,e,Ds)}}_computeIntersections(t,e,r){let n;const i=this.geometry,s=this.material,o=i.index,a=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv1,h=i.attributes.normal,u=i.groups,d=i.drawRange;if(null!==o)if(Array.isArray(s))for(let i=0,a=u.length;i<a;i++){const a=u[i],p=s[a.materialIndex];for(let i=Math.max(a.start,d.start),s=Math.min(o.count,Math.min(a.start+a.count,d.start+d.count));i<s;i+=3)n=Hs(this,p,t,r,l,c,h,o.getX(i),o.getX(i+1),o.getX(i+2)),n&&(n.faceIndex=Math.floor(i/3),n.face.materialIndex=a.materialIndex,e.push(n))}else for(let i=Math.max(0,d.start),a=Math.min(o.count,d.start+d.count);i<a;i+=3)n=Hs(this,s,t,r,l,c,h,o.getX(i),o.getX(i+1),o.getX(i+2)),n&&(n.faceIndex=Math.floor(i/3),e.push(n));else if(void 0!==a)if(Array.isArray(s))for(let i=0,o=u.length;i<o;i++){const o=u[i],p=s[o.materialIndex];for(let i=Math.max(o.start,d.start),s=Math.min(a.count,Math.min(o.start+o.count,d.start+d.count));i<s;i+=3)n=Hs(this,p,t,r,l,c,h,i,i+1,i+2),n&&(n.faceIndex=Math.floor(i/3),n.face.materialIndex=o.materialIndex,e.push(n))}else for(let i=Math.max(0,d.start),o=Math.min(a.count,d.start+d.count);i<o;i+=3)n=Hs(this,s,t,r,l,c,h,i,i+1,i+2),n&&(n.faceIndex=Math.floor(i/3),e.push(n))}}function Hs(t,e,r,n,i,s,o,a,l,c){t.getVertexPosition(a,Fs),t.getVertexPosition(l,Us),t.getVertexPosition(c,ks);const h=function(t,e,r,n,i,s,o,a){let l;if(l=e.side===m?n.intersectTriangle(o,s,i,!0,a):n.intersectTriangle(i,s,o,e.side===f,a),null===l)return null;Vs.copy(a),Vs.applyMatrix4(t.matrixWorld);const c=r.ray.origin.distanceTo(Vs);return c<r.near||c>r.far?null:{distance:c,point:Vs.clone(),object:t}}(t,e,r,n,Fs,Us,ks,Qs);if(h){const t=new Dn;Ji.getBarycoord(Qs,Fs,Us,ks,t),i&&(h.uv=Ji.getInterpolatedAttribute(i,a,l,c,t,new Zr)),s&&(h.uv1=Ji.getInterpolatedAttribute(s,a,l,c,t,new Zr)),o&&(h.normal=Ji.getInterpolatedAttribute(o,a,l,c,t,new Dn),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const e={a,b:l,c,normal:new Dn,materialIndex:0};Ji.getNormal(Fs,Us,ks,e.normal),h.face=e,h.barycoord=t}return h}class qs extends Bs{constructor(t=1,e=1,r=1,n=1,i=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:n,heightSegments:i,depthSegments:s};const o=this;n=Math.floor(n),i=Math.floor(i),s=Math.floor(s);const a=[],l=[],c=[],h=[];let u=0,d=0;function p(t,e,r,n,i,s,p,f,m,g,A){const y=s/m,v=p/g,x=s/2,_=p/2,w=f/2,b=m+1,E=g+1;let S=0,M=0;const C=new Dn;for(let s=0;s<E;s++){const o=s*v-_;for(let a=0;a<b;a++){const u=a*y-x;C[t]=u*n,C[e]=o*i,C[r]=w,l.push(C.x,C.y,C.z),C[t]=0,C[e]=0,C[r]=f>0?1:-1,c.push(C.x,C.y,C.z),h.push(a/m),h.push(1-s/g),S+=1}}for(let t=0;t<g;t++)for(let e=0;e<m;e++){const r=u+e+b*t,n=u+e+b*(t+1),i=u+(e+1)+b*(t+1),s=u+(e+1)+b*t;a.push(r,n,s),a.push(n,i,s),M+=6}o.addGroup(d,M,A),d+=M,u+=S}p("z","y","x",-1,-1,r,e,t,s,i,0),p("z","y","x",1,-1,r,e,-t,s,i,1),p("x","z","y",1,1,t,r,e,n,s,2),p("x","z","y",1,-1,t,r,-e,n,s,3),p("x","y","z",1,-1,t,e,r,n,i,4),p("x","y","z",-1,-1,t,e,-r,n,i,5),this.setIndex(a),this.setAttribute("position",new Es(l,3)),this.setAttribute("normal",new Es(c,3)),this.setAttribute("uv",new Es(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ws(t){const e={};for(const r in t){e[r]={};for(const n in t[r]){const i=t[r][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][n]=null):e[r][n]=i.clone():Array.isArray(i)?e[r][n]=i.slice():e[r][n]=i}}return e}function Ys(t){const e={};for(let r=0;r<t.length;r++){const n=Ws(t[r]);for(const t in n)e[t]=n[t]}return e}function Xs(t){const e=t.getRenderTarget();return null===e?t.outputColorSpace:!0===e.isXRRenderTarget?e.texture.colorSpace:gn.workingColorSpace}const $s={clone:Ws,merge:Ys};class Js extends ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==t&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=function(t){const e=[];for(let r=0;r<t.length;r++)e.push(t[r].clone());return e}(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?e.uniforms[r]={type:"t",value:n.toJSON(t).uuid}:n&&n.isColor?e.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?e.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?e.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?e.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?e.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?e.uniforms[r]={type:"m4",value:n.toArray()}:e.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const r={};for(const t in this.extensions)!0===this.extensions[t]&&(r[t]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}}class Ks extends Fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hi,this.projectionMatrix=new hi,this.projectionMatrixInverse=new hi,this.coordinateSystem=Ur}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return(new this.constructor).copy(this)}}const Zs=new Dn,to=new Zr,eo=new Zr;class ro extends Ks{constructor(t=50,e=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=null===t.view?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=2*Hr*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(.5*jr*this.fov);return.5*this.getFilmHeight()/t}getEffectiveFOV(){return 2*Hr*Math.atan(Math.tan(.5*jr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,r){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Zs.x,Zs.y).multiplyScalar(-t/Zs.z)}getViewSize(t,e){return this.getViewBounds(t,to,eo),e.subVectors(eo,to)}setViewOffset(t,e,r,n,i,s){this.aspect=t/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(.5*jr*this.fov)/this.zoom,r=2*e,n=this.aspect*r,i=-.5*n;const s=this.view;if(null!==this.view&&this.view.enabled){const t=s.fullWidth,o=s.fullHeight;i+=s.offsetX*n/t,e-=s.offsetY*r/o,n*=s.width/t,r*=s.height/o}const o=this.filmOffset;0!==o&&(i+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,e,e-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const no=-90;class io extends Fi{constructor(t,e,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ro(no,1,t,e);n.layers=this.layers,this.add(n);const i=new ro(no,1,t,e);i.layers=this.layers,this.add(i);const s=new ro(no,1,t,e);s.layers=this.layers,this.add(s);const o=new ro(no,1,t,e);o.layers=this.layers,this.add(o);const a=new ro(no,1,t,e);a.layers=this.layers,this.add(a);const l=new ro(no,1,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[r,n,i,s,o,a]=e;for(const t of e)this.remove(t);if(t===Ur)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else{if(t!==kr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1)}for(const t of e)this.add(t),t.updateMatrixWorld()}update(t,e){null===this.parent&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[i,s,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const f=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,n),t.render(e,i),t.setRenderTarget(r,1,n),t.render(e,s),t.setRenderTarget(r,2,n),t.render(e,o),t.setRenderTarget(r,3,n),t.render(e,a),t.setRenderTarget(r,4,n),t.render(e,l),r.texture.generateMipmaps=f,t.setRenderTarget(r,5,n),t.render(e,c),t.setRenderTarget(h,u,d),t.xr.enabled=p,r.texture.needsPMREMUpdate=!0}}class so extends Sn{constructor(t,e,r,n,i,s,o,a,l,c){super(t=void 0!==t?t:[],e=void 0!==e?e:ut,r,n,i,s,o,a,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class oo extends Tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},n=[r,r,r,r,r,r];this.texture=new so(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==e.generateMipmaps&&e.generateMipmaps,this.texture.minFilter=void 0!==e.minFilter?e.minFilter:Et}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const r={tEquirect:{value:null}},n="\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",i="\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t",s=new qs(5,5,5),o=new Js({name:"CubemapFromEquirect",uniforms:Ws(r),vertexShader:n,fragmentShader:i,side:m,blending:A});o.uniforms.tEquirect.value=e;const a=new js(s,o),l=e.minFilter;return e.minFilter===Ct&&(e.minFilter=Et),new io(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,r,n){const i=t.getRenderTarget();for(let i=0;i<6;i++)t.setRenderTarget(this,i),t.clear(e,r,n);t.setRenderTarget(i)}}class ao extends Fi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lo={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return null===this._hand&&(this._hand=new ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return null===this._targetRay&&(this._targetRay=new ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Dn,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Dn),this._targetRay}getGripSpace(){return null===this._grip&&(this._grip=new ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Dn,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Dn),this._grip}dispatchEvent(t){return null!==this._targetRay&&this._targetRay.dispatchEvent(t),null!==this._grip&&this._grip.dispatchEvent(t),null!==this._hand&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const r of t.hand.values())this._getHandJoint(e,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),null!==this._targetRay&&(this._targetRay.visible=!1),null!==this._grip&&(this._grip.visible=!1),null!==this._hand&&(this._hand.visible=!1),this}update(t,e,r){let n=null,i=null,s=null;const o=this._targetRay,a=this._grip,l=this._hand;if(t&&"visible-blurred"!==e.session.visibilityState){if(l&&t.hand){s=!0;for(const n of t.hand.values()){const t=e.getJointPose(n,r),i=this._getHandJoint(l,n);null!==t&&(i.matrix.fromArray(t.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=t.radius),i.visible=null!==t}const n=l.joints["index-finger-tip"],i=l.joints["thumb-tip"],o=n.position.distanceTo(i.position),a=.02,c=.005;l.inputState.pinching&&o>a+c?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&o<=a-c&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else null!==a&&t.gripSpace&&(i=e.getPose(t.gripSpace,r),null!==i&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1));null!==o&&(n=e.getPose(t.targetRaySpace,r),null===n&&null!==i&&(n=i),null!==n&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lo)))}return null!==o&&(o.visible=null!==n),null!==a&&(a.visible=null!==i),null!==l&&(l.visible=null!==s),this}_getHandJoint(t,e){if(void 0===t.joints[e.jointName]){const r=new ao;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[e.jointName]=r,t.add(r)}return t.joints[e.jointName]}}class ho{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new rs(t),this.density=e}clone(){return new ho(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uo{constructor(t,e=1,r=1e3){this.isFog=!0,this.name="",this.color=new rs(t),this.near=e,this.far=r}clone(){return new uo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class po extends Fi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),null!==t.background&&(this.background=t.background.clone()),null!==t.environment&&(this.environment=t.environment.clone()),null!==t.fog&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),null!==t.overrideMaterial&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return null!==this.fog&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),1!==this.backgroundIntensity&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),1!==this.environmentIntensity&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fo{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=void 0!==t?t.length/e:0,this.usage=Cr,this.updateRanges=[],this.version=0,this.uuid=qr()}onUploadCallback(){}set needsUpdate(t){!0===t&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,r){t*=this.stride,r*=e.stride;for(let n=0,i=this.stride;n<i;n++)this.array[t+n]=e.array[r+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=qr()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(e,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return void 0===t.arrayBuffers&&(t.arrayBuffers={}),void 0===this.array.buffer._uuid&&(this.array.buffer._uuid=qr()),void 0===t.arrayBuffers[this.array.buffer._uuid]&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mo=new Dn;class go{constructor(t,e,r,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=r,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,r=this.data.count;e<r;e++)mo.fromBufferAttribute(this,e),mo.applyMatrix4(t),this.setXYZ(e,mo.x,mo.y,mo.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)mo.fromBufferAttribute(this,e),mo.applyNormalMatrix(t),this.setXYZ(e,mo.x,mo.y,mo.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)mo.fromBufferAttribute(this,e),mo.transformDirection(t),this.setXYZ(e,mo.x,mo.y,mo.z);return this}getComponent(t,e){let r=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(r=$r(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=Jr(r,this.array)),this.data.array[t*this.data.stride+this.offset+e]=r,this}setX(t,e){return this.normalized&&(e=Jr(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jr(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jr(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jr(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$r(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$r(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$r(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$r(e,this.array)),e}setXY(t,e,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jr(e,this.array),r=Jr(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=r,this}setXYZ(t,e,r,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jr(e,this.array),r=Jr(r,this.array),n=Jr(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=r,this.data.array[t+2]=n,this}setXYZW(t,e,r,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jr(e,this.array),r=Jr(r,this.array),n=Jr(n,this.array),i=Jr(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=r,this.data.array[t+2]=n,this.data.array[t+3]=i,this}clone(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let e=0;e<this.count;e++){const r=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[r+e])}return new ms(new this.array.constructor(t),this.itemSize,this.normalized)}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new go(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(void 0===t){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let e=0;e<this.count;e++){const r=e*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)t.push(this.data.array[r+e])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return void 0===t.interleavedBuffers&&(t.interleavedBuffers={}),void 0===t.interleavedBuffers[this.data.uuid]&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ao extends ss{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rs(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let yo;const vo=new Dn,xo=new Dn,_o=new Dn,wo=new Zr,bo=new Zr,Eo=new hi,So=new Dn,Mo=new Dn,Co=new Dn,To=new Zr,Io=new Zr,Ro=new Zr;class Po extends Fi{constructor(t=new Ao){if(super(),this.isSprite=!0,this.type="Sprite",void 0===yo){yo=new Bs;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),e=new fo(t,5);yo.setIndex([0,1,2,0,2,3]),yo.setAttribute("position",new go(e,3,0,!1)),yo.setAttribute("uv",new go(e,2,3,!1))}this.geometry=yo,this.material=t,this.center=new Zr(.5,.5)}raycast(t,e){null===t.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xo.setFromMatrixScale(this.matrixWorld),Eo.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_o.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&xo.multiplyScalar(-_o.z);const r=this.material.rotation;let n,i;0!==r&&(i=Math.cos(r),n=Math.sin(r));const s=this.center;Bo(So.set(-.5,-.5,0),_o,s,xo,n,i),Bo(Mo.set(.5,-.5,0),_o,s,xo,n,i),Bo(Co.set(.5,.5,0),_o,s,xo,n,i),To.set(0,0),Io.set(1,0),Ro.set(1,1);let o=t.ray.intersectTriangle(So,Mo,Co,!1,vo);if(null===o&&(Bo(Mo.set(-.5,.5,0),_o,s,xo,n,i),Io.set(0,1),o=t.ray.intersectTriangle(So,Co,Mo,!1,vo),null===o))return;const a=t.ray.origin.distanceTo(vo);a<t.near||a>t.far||e.push({distance:a,point:vo.clone(),uv:Ji.getInterpolation(vo,So,Mo,Co,To,Io,Ro,new Zr),face:null,object:this})}copy(t,e){return super.copy(t,e),void 0!==t.center&&this.center.copy(t.center),this.material=t.material,this}}function Bo(t,e,r,n,i,s){wo.subVectors(t,r).addScalar(.5).multiply(n),void 0!==i?(bo.x=s*wo.x-i*wo.y,bo.y=i*wo.x+s*wo.y):bo.copy(wo),t.copy(e),t.x+=bo.x,t.y+=bo.y,t.applyMatrix4(Eo)}const Lo=new Dn,Do=new Dn;class Oo extends Fi{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let t=0,r=e.length;t<r;t++){const r=e[t];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,r=0){e=Math.abs(e);const n=this.levels;let i;for(i=0;i<n.length&&!(e<n[i].distance);i++);return n.splice(i,0,{distance:e,hysteresis:r,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let r=0;r<e.length;r++)if(e[r].distance===t){const t=e.splice(r,1);return this.remove(t[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let r,n;for(r=1,n=e.length;r<n;r++){let n=e[r].distance;if(e[r].object.visible&&(n-=n*e[r].hysteresis),t<n)break}return e[r-1].object}return null}raycast(t,e){if(this.levels.length>0){Lo.setFromMatrixPosition(this.matrixWorld);const r=t.ray.origin.distanceTo(Lo);this.getObjectForDistance(r).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Lo.setFromMatrixPosition(t.matrixWorld),Do.setFromMatrixPosition(this.matrixWorld);const r=Lo.distanceTo(Do)/t.zoom;let n,i;for(e[0].object.visible=!0,n=1,i=e.length;n<i;n++){let t=e[n].distance;if(e[n].object.visible&&(t-=t*e[n].hysteresis),!(r>=t))break;e[n-1].object.visible=!1,e[n].object.visible=!0}for(this._currentLevel=n-1;n<i;n++)e[n].object.visible=!1}}toJSON(t){const e=super.toJSON(t);!1===this.autoUpdate&&(e.object.autoUpdate=!1),e.object.levels=[];const r=this.levels;for(let t=0,n=r.length;t<n;t++){const n=r[t];e.object.levels.push({object:n.object.uuid,distance:n.distance,hysteresis:n.hysteresis})}return e}}const No=new Dn,Fo=new Mn,Uo=new Mn,ko=new Dn,zo=new hi,Go=new Dn,Qo=new ei,Vo=new hi,jo=new ci;class Ho extends js{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lt,this.bindMatrix=new hi,this.bindMatrixInverse=new hi,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;null===this.boundingBox&&(this.boundingBox=new Fn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let t=0;t<e.count;t++)this.getVertexPosition(t,Go),this.boundingBox.expandByPoint(Go)}computeBoundingSphere(){const t=this.geometry;null===this.boundingSphere&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let t=0;t<e.count;t++)this.getVertexPosition(t,Go),this.boundingSphere.expandByPoint(Go)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const r=this.material,n=this.matrixWorld;void 0!==r&&(null===this.boundingSphere&&this.computeBoundingSphere(),Qo.copy(this.boundingSphere),Qo.applyMatrix4(n),!1!==t.ray.intersectsSphere(Qo)&&(Vo.copy(n).invert(),jo.copy(t.ray).applyMatrix4(Vo),null!==this.boundingBox&&!1===jo.intersectsBox(this.boundingBox)||this._computeIntersections(t,e,jo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,void 0===e&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Mn,e=this.geometry.attributes.skinWeight;for(let r=0,n=e.count;r<n;r++){t.fromBufferAttribute(e,r);const n=1/t.manhattanLength();n!==1/0?t.multiplyScalar(n):t.set(1,0,0,0),e.setXYZW(r,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===lt?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ct?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const r=this.skeleton,n=this.geometry;Fo.fromBufferAttribute(n.attributes.skinIndex,t),Uo.fromBufferAttribute(n.attributes.skinWeight,t),No.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let t=0;t<4;t++){const n=Uo.getComponent(t);if(0!==n){const i=Fo.getComponent(t);zo.multiplyMatrices(r.bones[i].matrixWorld,r.boneInverses[i]),e.addScaledVector(ko.copy(No).applyMatrix4(zo),n)}}return e.applyMatrix4(this.bindMatrixInverse)}}class qo extends Fi{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wo extends Sn{constructor(t=null,e=1,r=1,n,i,s,o,a,l=vt,c=vt,h,u){super(null,s,o,a,l,c,n,i,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yo=new hi,Xo=new hi;class $o{constructor(t=[],e=[]){this.uuid=qr(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(16*t.length),0===e.length)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let t=0,e=this.bones.length;t<e;t++)this.boneInverses.push(new hi)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const e=new hi;this.bones[t]&&e.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(e)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t];e&&e.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const e=this.bones[t];e&&(e.parent&&e.parent.isBone?(e.matrix.copy(e.parent.matrixWorld).invert(),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))}}update(){const t=this.bones,e=this.boneInverses,r=this.boneMatrices,n=this.boneTexture;for(let n=0,i=t.length;n<i;n++){const i=t[n]?t[n].matrixWorld:Xo;Yo.multiplyMatrices(i,e[n]),Yo.toArray(r,16*n)}null!==n&&(n.needsUpdate=!0)}clone(){return new $o(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(4*this.bones.length);t=4*Math.ceil(t/4),t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const r=new Wo(e,t,t,Vt,Ot);return r.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=r,this}getBoneByName(t){for(let e=0,r=this.bones.length;e<r;e++){const r=this.bones[e];if(r.name===t)return r}}dispose(){null!==this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let r=0,n=t.bones.length;r<n;r++){const n=t.bones[r];let i=e[n];void 0===i&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),i=new qo),this.bones.push(i),this.boneInverses.push((new hi).fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,r=this.boneInverses;for(let n=0,i=e.length;n<i;n++){const i=e[n];t.bones.push(i.uuid);const s=r[n];t.boneInverses.push(s.toArray())}return t}}class Jo extends ms{constructor(t,e,r,n=1){super(t,e,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ko=new hi,Zo=new hi,ta=[],ea=new Fn,ra=new hi,na=new js,ia=new ei;class sa extends js{constructor(t,e,r){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jo(new Float32Array(16*r),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let t=0;t<r;t++)this.setMatrixAt(t,ra)}computeBoundingBox(){const t=this.geometry,e=this.count;null===this.boundingBox&&(this.boundingBox=new Fn),null===t.boundingBox&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<e;r++)this.getMatrixAt(r,Ko),ea.copy(t.boundingBox).applyMatrix4(Ko),this.boundingBox.union(ea)}computeBoundingSphere(){const t=this.geometry,e=this.count;null===this.boundingSphere&&(this.boundingSphere=new ei),null===t.boundingSphere&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<e;r++)this.getMatrixAt(r,Ko),ia.copy(t.boundingSphere).applyMatrix4(Ko),this.boundingSphere.union(ia)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),null!==t.morphTexture&&(this.morphTexture=t.morphTexture.clone()),null!==t.instanceColor&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,null!==t.boundingBox&&(this.boundingBox=t.boundingBox.clone()),null!==t.boundingSphere&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,3*t)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,16*t)}getMorphAt(t,e){const r=e.morphTargetInfluences,n=this.morphTexture.source.data.data,i=t*(r.length+1)+1;for(let t=0;t<r.length;t++)r[t]=n[i+t]}raycast(t,e){const r=this.matrixWorld,n=this.count;if(na.geometry=this.geometry,na.material=this.material,void 0!==na.material&&(null===this.boundingSphere&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(r),!1!==t.ray.intersectsSphere(ia)))for(let i=0;i<n;i++){this.getMatrixAt(i,Ko),Zo.multiplyMatrices(r,Ko),na.matrixWorld=Zo,na.raycast(t,ta);for(let t=0,r=ta.length;t<r;t++){const r=ta[t];r.instanceId=i,r.object=this,e.push(r)}ta.length=0}}setColorAt(t,e){null===this.instanceColor&&(this.instanceColor=new Jo(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),e.toArray(this.instanceColor.array,3*t)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,16*t)}setMorphAt(t,e){const r=e.morphTargetInfluences,n=r.length+1;null===this.morphTexture&&(this.morphTexture=new Wo(new Float32Array(n*this.count),n,this.count,Yt,Ot));const i=this.morphTexture.source.data.data;let s=0;for(let t=0;t<r.length;t++)s+=r[t];const o=this.geometry.morphTargetsRelative?1:1-s,a=n*t;i[a]=o,i.set(r,a+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),null!==this.morphTexture&&(this.morphTexture.dispose(),this.morphTexture=null)}}const oa=new Dn,aa=new Dn,la=new tn;class ca{constructor(t=new Dn(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,n){return this.normal.set(t,e,r),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){const n=oa.subVectors(r,e).cross(aa.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const r=t.delta(oa),n=this.normal.dot(r);if(0===n)return 0===this.distanceToPoint(t.start)?e.copy(t.start):null;const i=-(t.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:e.copy(t.start).addScaledVector(r,i)}intersectsLine(t){const e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const r=e||la.getNormalMatrix(t),n=this.coplanarPoint(oa).applyMatrix4(t),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return(new this.constructor).copy(this)}}const ha=new ei,ua=new Dn;class da{constructor(t=new ca,e=new ca,r=new ca,n=new ca,i=new ca,s=new ca){this.planes=[t,e,r,n,i,s]}set(t,e,r,n,i,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(s),this}copy(t){const e=this.planes;for(let r=0;r<6;r++)e[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,e=Ur){const r=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],p=n[9],f=n[10],m=n[11],g=n[12],A=n[13],y=n[14],v=n[15];if(r[0].setComponents(a-i,u-l,m-d,v-g).normalize(),r[1].setComponents(a+i,u+l,m+d,v+g).normalize(),r[2].setComponents(a+s,u+c,m+p,v+A).normalize(),r[3].setComponents(a-s,u-c,m-p,v-A).normalize(),r[4].setComponents(a-o,u-h,m-f,v-y).normalize(),e===Ur)r[5].setComponents(a+o,u+h,m+f,v+y).normalize();else{if(e!==kr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);r[5].setComponents(o,h,f,y).normalize()}return this}intersectsObject(t){if(void 0!==t.boundingSphere)null===t.boundingSphere&&t.computeBoundingSphere(),ha.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;null===e.boundingSphere&&e.computeBoundingSphere(),ha.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ha)}intersectsSprite(t){return ha.center.set(0,0,0),ha.radius=.7071067811865476,ha.applyMatrix4(t.matrixWorld),this.intersectsSphere(ha)}intersectsSphere(t){const e=this.planes,r=t.center,n=-t.radius;for(let t=0;t<6;t++)if(e[t].distanceToPoint(r)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let r=0;r<6;r++){const n=e[r];if(ua.x=n.normal.x>0?t.max.x:t.min.x,ua.y=n.normal.y>0?t.max.y:t.min.y,ua.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}clone(){return(new this.constructor).copy(this)}}function pa(t,e){return t-e}function fa(t,e){return t.z-e.z}function ma(t,e){return e.z-t.z}class ga{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,r,n){const i=this.pool,s=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const o=i[this.index];s.push(o),this.index++,o.start=t,o.count=e,o.z=r,o.index=n}reset(){this.list.length=0,this.index=0}}const Aa=new hi,ya=new rs(1,1,1),va=new da,xa=new Fn,_a=new ei,wa=new Dn,ba=new Dn,Ea=new Dn,Sa=new ga,Ma=new js,Ca=[];function Ta(t,e,r=0){const n=e.itemSize;if(t.isInterleavedBufferAttribute||t.array.constructor!==e.array.constructor){const i=t.count;for(let s=0;s<i;s++)for(let i=0;i<n;i++)e.setComponent(s+r,i,t.getComponent(s,i))}else e.array.set(t.array,r*n);e.needsUpdate=!0}function Ia(t,e){if(t.constructor!==e.constructor){const r=Math.min(t.length,e.length);for(let n=0;n<r;n++)e[n]=t[n]}else{const r=Math.min(t.length,e.length);e.set(new t.constructor(t.buffer,0,r))}}class Ra extends js{constructor(t,e,r=2*e,n){super(new Bs,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=r,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(4*this._maxInstanceCount);t=4*Math.ceil(t/4),t=Math.max(t,4);const e=new Float32Array(t*t*4),r=new Wo(e,t,t,Vt,Ot);this._matricesTexture=r}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),r=new Wo(e,t,t,Xt,Dt);this._indirectTexture=r}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),r=new Wo(e,t,t,Vt,Ot);r.colorSpace=gn.workingColorSpace,this._colorsTexture=r}_initializeGeometry(t){const e=this.geometry,r=this._maxVertexCount,n=this._maxIndexCount;if(!1===this._geometryInitialized){for(const n in t.attributes){const i=t.getAttribute(n),{array:s,itemSize:o,normalized:a}=i,l=new s.constructor(r*o),c=new ms(l,o,a);e.setAttribute(n,c)}if(null!==t.getIndex()){const t=r>65535?new Uint32Array(n):new Uint16Array(n);e.setIndex(new ms(t,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(Boolean(t.getIndex())!==Boolean(e.getIndex()))throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const r in e.attributes){if(!t.hasAttribute(r))throw new Error(`THREE.BatchedMesh: Added geometry missing "${r}". All geometries must have consistent attributes.`);const n=t.getAttribute(r),i=e.getAttribute(r);if(n.itemSize!==i.itemSize||n.normalized!==i.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||!1===e[t].active)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||!1===e[t].active)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new Fn);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let r=0,n=e.length;r<n;r++){if(!1===e[r].active)continue;const n=e[r].geometryIndex;this.getMatrixAt(r,Aa),this.getBoundingBoxAt(n,xa).applyMatrix4(Aa),t.union(xa)}}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new ei);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let r=0,n=e.length;r<n;r++){if(!1===e[r].active)continue;const n=e[r].geometryIndex;this.getMatrixAt(r,Aa),this.getBoundingSphereAt(n,_a).applyMatrix4(Aa),t.union(_a)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&0===this._availableInstanceIds.length)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const e={visible:!0,active:!0,geometryIndex:t};let r=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(pa),r=this._availableInstanceIds.shift(),this._instanceInfo[r]=e):(r=this._instanceInfo.length,this._instanceInfo.push(e));const n=this._matricesTexture;Aa.identity().toArray(n.image.data,16*r),n.needsUpdate=!0;const i=this._colorsTexture;return i&&(ya.toArray(i.image.data,4*r),i.needsUpdate=!0),this._visibilityChanged=!0,r}addGeometry(t,e=-1,r=-1){this._initializeGeometry(t),this._validateGeometry(t);const n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},i=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=-1===e?t.getAttribute("position").count:e;const s=t.getIndex();if(null!==s&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=-1===r?s.count:r),-1!==n.indexStart&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let o;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(pa),o=this._availableGeometryIds.shift(),i[o]=n):(o=this._geometryCount,this._geometryCount++,i.push(n)),this.setGeometryAt(o,t),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,o}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const r=this.geometry,n=null!==r.getIndex(),i=r.getIndex(),s=e.getIndex(),o=this._geometryInfo[t];if(n&&s.count>o.reservedIndexCount||e.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const a=o.vertexStart,l=o.reservedVertexCount;o.vertexCount=e.getAttribute("position").count;for(const t in r.attributes){const n=e.getAttribute(t),i=r.getAttribute(t);Ta(n,i,a);const s=n.itemSize;for(let t=n.count,e=l;t<e;t++){const e=a+t;for(let t=0;t<s;t++)i.setComponent(e,t,0)}i.needsUpdate=!0,i.addUpdateRange(a*s,l*s)}if(n){const t=o.indexStart,r=o.reservedIndexCount;o.indexCount=e.getIndex().count;for(let e=0;e<s.count;e++)i.setX(t+e,a+s.getX(e));for(let e=s.count,n=r;e<n;e++)i.setX(t+e,a);i.needsUpdate=!0,i.addUpdateRange(t,o.reservedIndexCount)}return o.start=n?o.indexStart:o.vertexStart,o.count=n?o.indexCount:o.vertexCount,o.boundingBox=null,null!==e.boundingBox&&(o.boundingBox=e.boundingBox.clone()),o.boundingSphere=null,null!==e.boundingSphere&&(o.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||!1===e[t].active)return this;const r=this._instanceInfo;for(let e=0,n=r.length;e<n;e++)r[e].active&&r[e].geometryIndex===t&&this.deleteInstance(e);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const r=this._geometryInfo,n=r.map(((t,e)=>e)).sort(((t,e)=>r[t].vertexStart-r[e].vertexStart)),i=this.geometry;for(let s=0,o=r.length;s<o;s++){const o=n[s],a=r[o];if(!1!==a.active){if(null!==i.index){if(a.indexStart!==e){const{indexStart:r,vertexStart:n,reservedIndexCount:s}=a,o=i.index,l=o.array,c=t-n;for(let t=r;t<r+s;t++)l[t]=l[t]+c;o.array.copyWithin(e,r,r+s),o.addUpdateRange(e,s),a.indexStart=e}e+=a.reservedIndexCount}if(a.vertexStart!==t){const{vertexStart:e,reservedVertexCount:r}=a,n=i.attributes;for(const i in n){const s=n[i],{array:o,itemSize:a}=s;o.copyWithin(t*a,e*a,(e+r)*a),s.addUpdateRange(t*a,r*a)}a.vertexStart=t}t+=a.reservedVertexCount,a.start=i.index?a.indexStart:a.vertexStart,this._nextIndexStart=i.index?a.indexStart+a.reservedIndexCount:0,this._nextVertexStart=a.vertexStart+a.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const r=this.geometry,n=this._geometryInfo[t];if(null===n.boundingBox){const t=new Fn,e=r.index,i=r.attributes.position;for(let r=n.start,s=n.start+n.count;r<s;r++){let n=r;e&&(n=e.getX(n)),t.expandByPoint(wa.fromBufferAttribute(i,n))}n.boundingBox=t}return e.copy(n.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const r=this.geometry,n=this._geometryInfo[t];if(null===n.boundingSphere){const e=new ei;this.getBoundingBoxAt(t,xa),xa.getCenter(e.center);const i=r.index,s=r.attributes.position;let o=0;for(let t=n.start,r=n.start+n.count;t<r;t++){let r=t;i&&(r=i.getX(r)),wa.fromBufferAttribute(s,r),o=Math.max(o,e.center.distanceToSquared(wa))}e.radius=Math.sqrt(o),n.boundingSphere=e}return e.copy(n.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const r=this._matricesTexture,n=this._matricesTexture.image.data;return e.toArray(n,16*t),r.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,16*t)}setColorAt(t,e){return this.validateInstanceId(t),null===this._colorsTexture&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,4*t),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),e.fromArray(this._colorsTexture.image.data,4*t)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e||(this._instanceInfo[t].visible=e,this._visibilityChanged=!0),this}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const r=this._geometryInfo[t];return e.vertexStart=r.vertexStart,e.vertexCount=r.vertexCount,e.reservedVertexCount=r.reservedVertexCount,e.indexStart=r.indexStart,e.indexCount=r.indexCount,e.reservedIndexCount=r.reservedIndexCount,e.start=r.start,e.count=r.count,e}setInstanceCount(t){const e=this._availableInstanceIds,r=this._instanceInfo;for(e.sort(pa);e[e.length-1]===r.length;)r.pop(),e.pop();if(t<r.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const n=new Int32Array(t),i=new Int32Array(t);Ia(this._multiDrawCounts,n),Ia(this._multiDrawStarts,i),this._multiDrawCounts=n,this._multiDrawStarts=i,this._maxInstanceCount=t;const s=this._indirectTexture,o=this._matricesTexture,a=this._colorsTexture;s.dispose(),this._initIndirectTexture(),Ia(s.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Ia(o.image.data,this._matricesTexture.image.data),a&&(a.dispose(),this._initColorsTexture(),Ia(a.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const r=[...this._geometryInfo].filter((t=>t.active));if(Math.max(...r.map((t=>t.vertexStart+t.reservedVertexCount)))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...r.map((t=>t.indexStart+t.reservedIndexCount)))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const n=this.geometry;n.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Bs,this._initializeGeometry(n));const i=this.geometry;n.index&&Ia(n.index.array,i.index.array);for(const t in n.attributes)Ia(n.attributes[t].array,i.attributes[t].array)}raycast(t,e){const r=this._instanceInfo,n=this._geometryInfo,i=this.matrixWorld,s=this.geometry;Ma.material=this.material,Ma.geometry.index=s.index,Ma.geometry.attributes=s.attributes,null===Ma.geometry.boundingBox&&(Ma.geometry.boundingBox=new Fn),null===Ma.geometry.boundingSphere&&(Ma.geometry.boundingSphere=new ei);for(let s=0,o=r.length;s<o;s++){if(!r[s].visible||!r[s].active)continue;const o=r[s].geometryIndex,a=n[o];Ma.geometry.setDrawRange(a.start,a.count),this.getMatrixAt(s,Ma.matrixWorld).premultiply(i),this.getBoundingBoxAt(o,Ma.geometry.boundingBox),this.getBoundingSphereAt(o,Ma.geometry.boundingSphere),Ma.raycast(t,Ca);for(let t=0,r=Ca.length;t<r;t++){const r=Ca[t];r.object=this,r.batchId=s,e.push(r)}Ca.length=0}Ma.material=null,Ma.geometry.index=null,Ma.geometry.attributes={},Ma.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=null!==t.boundingBox?t.boundingBox.clone():null,this.boundingSphere=null!==t.boundingSphere?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map((t=>({...t,boundingBox:null!==t.boundingBox?t.boundingBox.clone():null,boundingSphere:null!==t.boundingSphere?t.boundingSphere.clone():null}))),this._instanceInfo=t._instanceInfo.map((t=>({...t}))),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),null!==this._colorsTexture&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,null!==this._colorsTexture&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,r,n,i){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const s=n.getIndex(),o=null===s?1:s.array.BYTES_PER_ELEMENT,a=this._instanceInfo,l=this._multiDrawStarts,c=this._multiDrawCounts,h=this._geometryInfo,u=this.perObjectFrustumCulled,d=this._indirectTexture,p=d.image.data;u&&(Aa.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse).multiply(this.matrixWorld),va.setFromProjectionMatrix(Aa,t.coordinateSystem));let f=0;if(this.sortObjects){Aa.copy(this.matrixWorld).invert(),wa.setFromMatrixPosition(r.matrixWorld).applyMatrix4(Aa),ba.set(0,0,-1).transformDirection(r.matrixWorld).transformDirection(Aa);for(let t=0,e=a.length;t<e;t++)if(a[t].visible&&a[t].active){const e=a[t].geometryIndex;this.getMatrixAt(t,Aa),this.getBoundingSphereAt(e,_a).applyMatrix4(Aa);let r=!1;if(u&&(r=!va.intersectsSphere(_a)),!r){const r=h[e],n=Ea.subVectors(_a.center,wa).dot(ba);Sa.push(r.start,r.count,n,t)}}const t=Sa.list,e=this.customSort;null===e?t.sort(i.transparent?ma:fa):e.call(this,t,r);for(let e=0,r=t.length;e<r;e++){const r=t[e];l[f]=r.start*o,c[f]=r.count,p[f]=r.index,f++}Sa.reset()}else for(let t=0,e=a.length;t<e;t++)if(a[t].visible&&a[t].active){const e=a[t].geometryIndex;let r=!1;if(u&&(this.getMatrixAt(t,Aa),this.getBoundingSphereAt(e,_a).applyMatrix4(Aa),r=!va.intersectsSphere(_a)),!r){const r=h[e];l[f]=r.start*o,c[f]=r.count,p[f]=t,f++}}d.needsUpdate=!0,this._multiDrawCount=f,this._visibilityChanged=!1}onBeforeShadow(t,e,r,n,i,s){this.onBeforeRender(t,null,n,i,s)}}class Pa extends ss{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rs(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ba=new Dn,La=new Dn,Da=new hi,Oa=new ci,Na=new ei,Fa=new Dn,Ua=new Dn;class ka extends Fi{constructor(t=new Bs,e=new Pa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(null===t.index){const e=t.attributes.position,r=[0];for(let t=1,n=e.count;t<n;t++)Ba.fromBufferAttribute(e,t-1),La.fromBufferAttribute(e,t),r[t]=r[t-1],r[t]+=Ba.distanceTo(La);t.setAttribute("lineDistance",new Es(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const r=this.geometry,n=this.matrixWorld,i=t.params.Line.threshold,s=r.drawRange;if(null===r.boundingSphere&&r.computeBoundingSphere(),Na.copy(r.boundingSphere),Na.applyMatrix4(n),Na.radius+=i,!1===t.ray.intersectsSphere(Na))return;Da.copy(n).invert(),Oa.copy(t.ray).applyMatrix4(Da);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this×®}ß¯Ê×¬¢h­µç][ÙOŽÙJÊÊ\‹™œ›ÛPY™™\]šX]JJKËœ‹ÕÛÜšÚ[™ÐÛÛÜ”ÜXÙJ‹Ë™\‰
KœÙ]VŠK‹œ‹‹™Ë‹˜Š_WÛØYXœ˜\žJJ^ØÛÛœÝ[™]ÈË–NTÊ\Ë›X[˜YÙ\ŠNÜ™]\›ˆ‹œÙ]]
\Ë™XÛÙ\”]
K‹œÙ]™\ÜÛœÙU\JJK‹œÙ]Ú]Ü™Y[X[Ê\ËÚ]Ü™Y[X[ÊK™]È›ÛZ\ÙJ

KŠOOžÜ‹›ØY
K›ÚYŠ_JJ_\™[ØY

^Ü™]\›ˆ\Ë—Ú[š]XÛÙ\Š
K\ßWÚ[š]XÛÙ\Š
^ÚYŠ\Ë™XÛÙ\”[™[™Ê\™]\›ˆ\Ë™XÛÙ\”[™[™ÎØÛÛœÝH›Øš™XÝˆO]\[ÙˆÙX\ÜÙ[X›_šœÈOO]\Ë™XÛÙ\ÛÛ™šYË\KOV×NÜ™]\›ˆÙKœ\Ú
\Ë—ÛØYXœ˜\žJ™˜XÛ×ÙXÛÙ\‹šœÈ‹^ŠJNŠKœ\Ú
\Ë—ÛØYXœ˜\žJ™˜XÛ×ÝØ\ÛWÝÜ˜\\‹šœÈ‹^ŠJKKœ\Ú
\Ë—ÛØYXœ˜\žJ™˜XÛ×ÙXÛÙ\‹Ø\ÛH‹˜\œ˜^XY™™\ˆŠJJK\Ë™XÛÙ\”[™[™ÏT›ÛZ\ÙK˜[
JK[Š
OOžØÛÛœÝYVÌNÝ
\Ë™XÛÙ\ÛÛ™šYËØ\ÛPš[˜\žOYVÌWJNØÛÛœÝ^YÔÝš[™Ê
KOVÈ‹Êˆ˜XÛÈXÛÙ\ˆ
‹È‹‹ˆ‹‹ÊˆÛÜšÙ\ˆ
‹È‹‹œÝXœÝš[™Ê‹š[™^ÙŠžÈŠJÌK‹›\Ý[™^ÙŠŸHŠJWKš›Ú[Š—ˆŠNÝ\ËÛÜšÙ\”ÛÝ\˜ÙUT“UT“˜Ü™X]SØš™XÝT“
™]È›ØŠÚWJJ_JJK\Ë™XÛÙ\”[™[™ßWÙÙ]ÛÜšÙ\ŠJ^Ü™]\›ˆ\Ë—Ú[š]XÛÙ\Š
K[Š


OOžÚYŠ\ËÛÜšÙ\”ÛÛ›[™Ý\ËÛÜšÙ\“[Z]
^ØÛÛœÝ[™]ÈÛÜšÙ\Š\ËÛÜšÙ\”ÛÝ\˜ÙUT“
NÝ—ØØ[˜XÚÜÏ^ßK—Ý\ÚÐÛÜÝÏ^ßK—Ý\ÚÓØYLœÜÝY\ÜØYÙJÝ\Nˆš[š]‹XÛÙ\ÛÛ™šYÎ\Ë™XÛÙ\ÛÛ™šYßJK›Û›Y\ÜØYÙOY[˜Ý[ÛŠJ^ØÛÛœÝYK™]NÜÝÚ]Ú
‹\J^ØØ\ÙH™XÛÙHŽ—ØØ[˜XÚÜÖÜ‹šYKœ™\ÛÛ™JŠNØœ™XZÎØØ\ÙH™\œ›ÜˆŽ—ØØ[˜XÚÜÖÜ‹šYKœ™Z™XÝ
ŠNØœ™XZÎÙY˜][˜ÛÛœÛÛK™\œ›ÜŠ	Õ‘QK‘PÓÓØY\Žˆ[™^XÝYY\ÜØYÙK‰ÊÜ‹\JÉÈ‰Ê__K\ËÛÜšÙ\”ÛÛœ\Ú

_Y[ÙH\ËÛÜšÙ\”ÛÛœÛÜ

[˜Ý[ÛŠJ^Ü™]\›ˆ—Ý\ÚÓØY™K—Ý\ÚÓØYËLNŒ_JJNØÛÛœÝ]\ËÛÜšÙ\”ÛÛÝ\ËÛÜšÙ\”ÛÛ›[™ÝLWNÜ™]\›ˆ‹—Ý\ÚÐÛÜÝÖÝOYK‹—Ý\ÚÓØY
ÏYKŸJJ_WÜ™[X\ÙU\ÚÊJ^Ý—Ý\ÚÓØYO]—Ý\ÚÐÛÜÝÖÙWK[]H—ØØ[˜XÚÜÖÙWK[]H—Ý\ÚÐÛÜÝÖÙW_YXYÊ
^ØÛÛœÛÛK›ÙÊ•\ÚÈØYˆ‹\ËÛÜšÙ\”ÛÛ›X\

O—Ý\ÚÓØY
JJ_Y\ÜÜÙJ
^Ù›ÜŠ]LÝ\ËÛÜšÙ\”ÛÛ›[™ÝÊÊÝ
]\ËÛÜšÙ\”ÛÛÝK\›Z[˜]J
NÜ™]\›ˆ\ËÛÜšÙ\”ÛÛ›[™ÝLˆˆOO]\ËÛÜšÙ\”ÛÝ\˜ÙUT“	‰•T“œ™]›ÚÙSØš™XÝT“
\ËÛÜšÙ\”ÛÝ\˜ÙUT“
K\ß_Y[˜Ý[ÛˆY

^Û]NÙ[˜Ý[ÛˆŠK‹‹KÊ^ØÛÛœÝÏ\Ë›[WØÛÛ\Û™[Ê
KO\‹›[WÜÚ[Ê
J›ËXJšK–UT×ÔT—ÑSSQS•ÏY[˜Ý[ÛŠJ^ÜÝÚ]Ú
J^ØØ\ÙH›Ø]Ì\œ˜^Nœ™]\›ˆ‘Ñ“ÐUÌŽØØ\ÙH[\œ˜^Nœ™]\›ˆ‘ÒS•ØØ\ÙH[M\œ˜^Nœ™]\›ˆ‘ÒS•MŽØØ\ÙH[Ì\œ˜^Nœ™]\›ˆ‘ÒS•ÌŽØØ\ÙHZ[\œ˜^Nœ™]\›ˆ‘ÕRS•ØØ\ÙHZ[M\œ˜^Nœ™]\›ˆ‘ÕRS•MŽØØ\ÙHZ[Ì\œ˜^Nœ™]\›ˆ‘ÕRS•ÌŸ_JJK]—ÛX[ØÊ
NÙK‘Ù]]šX]Q]P\œ˜^Q›Ü[Ú[Ê‹ËË
NØÛÛœÝO[™]ÈJ’PTŒÌ‹˜Y™™\‹JKœÛXÙJ
NÜ™]\›ˆ—Ùœ™YJ
KÛ˜[YN›‹\œ˜^NK][TÚ^™N›ß_[Û›Y\ÜØYÙOY[˜Ý[ÛŠŠ^ØÛÛœÝO[‹™]NÜÝÚ]Ú
K\J^ØØ\ÙHš[š]ŽZK™XÛÙ\ÛÛ™šYËO[™]È›ÛZ\ÙJ
[˜Ý[ÛŠJ^Ý›Û“[Ù[SØYYY[˜Ý[ÛŠ
^ÙJÙ˜XÛÎJ_K˜XÛÑXÛÙ\“[Ù[J
_JJNØœ™XZÎØØ\ÙH™XÛÙHŽ˜ÛÛœÝZK˜Y™™\‹ÏZK\ÚÐÛÛ™šYÎÙK[Š
OžØÛÛœÝO]™˜XÛËÏ[™]ÈK‘XÛÙ\ŽÝž^ØÛÛœÝY[˜Ý[ÛŠK‹J^ØÛÛœÝÏZK˜]šX]RQËÏZK˜]šX]U\\ÎÛ]KØÛÛœÝÏYK‘Ù][˜ÛÙYÙ[ÛY]žU\JŠNÚYŠÏOO]•’PS‘ÕST—ÓQTÒ
XO[™]È“Y\ÚYK‘XÛÙP\œ˜^UÓY\Ú
‹‹˜ž]S[™ÝJNÙ[Ù^ÚYŠÈOO]”ÒS•ÐÓÕQ
]›ÝÈ™]È\œ›ÜŠ•‘QK‘PÓÓØY\Žˆ[™^XÝYÙ[ÛY]žH\KˆŠNØO[™]È”Ú[ÛÝYYK‘XÛÙP\œ˜^UÔÚ[ÛÝY
‹‹˜ž]S[™ÝJ_ZYŠ[›ÚÊ
_OOXKœŠ]›ÝÈ™]È\œ›ÜŠ•‘QK‘PÓÓØY\ŽˆXÛÙ[™È˜Z[YˆŠÛ™\œ›Ü—Û\ÙÊ
JNØÛÛœÝ^Ú[™^›[]šX]\Î–×_NÙ›ÜŠÛÛœÝˆ[ˆÊ^ØÛÛœÝ\Ù[–ÛÖÛ—WNÛ]ËNÚYŠK\ÙU[š\]YRQÊ]O\ÖÛ—KÏYK‘Ù]]šX]PžU[š\]YRY
KJNÙ[Ù^ÚYŠOYK‘Ù]]šX]RY
KÜÖÛ—WJKLOOO]JXÛÛ[YNØÏYK‘Ù]]šX]JKJ_XÛÛœÝ\ŠKK‹ÊNÈ˜ÛÛÜˆOO[‰‰Š™\^ÛÛÜ”ÜXÙOZK™\^ÛÛÜ”ÜXÙJK˜]šX]\Ëœ\Ú

_\™]\›ˆÏOO]•’PS‘ÕST—ÓQTÒ	‰Šš[™^Y[˜Ý[ÛŠKŠ^ØÛÛœÝLÊœ‹›[WÙ˜XÙ\Ê
KOM
›‹Ï]—ÛX[ØÊJNÙK‘Ù]šX[™Û\ÕR[Ì\œ˜^J‹KÊNØÛÛœÝÏ[™]ÈZ[Ì\œ˜^J’PTŒÌ‹˜Y™™\‹ËŠKœÛXÙJ
NÜ™]\›ˆ—Ùœ™YJÊKØ\œ˜^N›Ë][TÚ^™NŒ__JKJJK™\Ý›ÞJJKJKË™]È[\œ˜^JŠKÊKO]˜]šX]\Ë›X\

O˜\œ˜^K˜Y™™\ŠJNÝš[™^	‰˜Kœ\Ú
š[™^˜\œ˜^K˜Y™™\ŠKÙ[‹œÜÝY\ÜØYÙJÝ\Nˆ™XÛÙH‹YšKšYÙ[ÛY]žNKJ_XØ]Ú

^ØÛÛœÛÛK™\œ›ÜŠ
KÙ[‹œÜÝY\ÜØYÙJÝ\Nˆ™\œ›Üˆ‹YšKšY\œ›ÜŽ›Y\ÜØYÙ_J_Yš[˜[^ÙK™\Ý›ÞJÊ__JJ___XÛ\ÜÈ™ØÛÛœÝXÝÜŠM
^Ý\ËœÛÛ]\Ëœ]Y]YOV×K\ËÛÜšÙ\œÏV×K\ËÛÜšÙ\œÔ™\ÛÛ™OV×K\ËÛÜšÙ\”Ý]\ÏLWÚ[š]ÛÜšÙ\Š
^ÚYŠ]\ËÛÜšÙ\œÖÝJ^ØÛÛœÝO]\ËÛÜšÙ\Ü™X]ÜŠ
NÙK˜Y]™[\Ý[™\Š›Y\ÜØYÙH‹\Ë—ÛÛ“Y\ÜØYÙK˜š[™
\Ë
JK\ËÛÜšÙ\œÖÝOY__WÙÙ]YUÛÜšÙ\Š
^Ù›ÜŠ]LÝ\ËœÛÛÝ
ÊÊZYŠJ\ËÛÜšÙ\”Ý]\ÉŒO
J\™]\›ˆÜ™]\›‹L_WÛÛ“Y\ÜØYÙJJ^ØÛÛœÝ]\ËÛÜšÙ\œÔ™\ÛÛ™VÝNÚYŠ‰‰œŠJK\Ëœ]Y]YK›[™Ý
^ØÛÛœÝÜ™\ÛÛ™N™K\ÙÎœ‹˜[œÙ™\Ž›ŸO]\Ëœ]Y]YKœÚY

NÝ\ËÛÜšÙ\œÔ™\ÛÛ™VÝOYK\ËÛÜšÙ\œÖÝKœÜÝY\ÜØYÙJ‹Š_Y[ÙH\ËÛÜšÙ\”Ý]\×LO\Ù]ÛÜšÙ\Ü™X]ÜŠ
^Ý\ËÛÜšÙ\Ü™X]Ü]\Ù]ÛÜšÙ\“[Z]

^Ý\ËœÛÛ]\ÜÝY\ÜØYÙJJ^Ü™]\›ˆ™]È›ÛZ\ÙJ
OžØÛÛœÝ]\Ë—ÙÙ]YUÛÜšÙ\Š
NËLHOO[Ê\Ë—Ú[š]ÛÜšÙ\ŠŠK\ËÛÜšÙ\”Ý]\ßLO‹\ËÛÜšÙ\œÔ™\ÛÛ™VÛ—O\‹\ËÛÜšÙ\œÖÛ—KœÜÝY\ÜØYÙJJJN\Ëœ]Y]YKœ\Ú
Ü™\ÛÛ™Nœ‹\ÙÎ˜[œÙ™\Ž™_J_JJ_Y\ÜÜÙJ
^Ý\ËÛÜšÙ\œË™›Ü‘XXÚ

O\›Z[˜]J
JJK\ËÛÜšÙ\œÔ™\ÛÛ™K›[™ÝL\ËÛÜšÙ\œË›[™ÝL\Ëœ]Y]YK›[™ÝL\ËÛÜšÙ\”Ý]\ÏL_XÛÛœÝNKÙLMKÙLM‹™LŒ‹YLÍËÙMËYMÍ‹ÙNËNMËYLL™LLËLLK™LMKLM‹LL™LÎØÛ\ÜÈÙØÛÛœÝXÝÜŠ
^Ý\ËšÑ›Ü›X]L\Ë\TÚ^™OLK\Ëœ^[ÚYL\Ëœ^[ZYÚL\Ëœ^[\L\Ë›^Y\ÛÝ[L\Ë™˜XÙPÛÝ[LK\ËœÝ\\˜ÛÛ\™\ÜÚ[Û”ØÚ[YOL\Ë›]™[ÏV×K\Ë™]Q›Ü›X]\ØÜš\ÜVÞÝ™[™Ü’YŒ\ØÜš\Ü•\NŒ\ØÜš\Ü›ØÚÔÚ^™NŒ™\œÚ[Û“[X™\ŽŒ‹ÛÛÜ“[Ù[ŒÛÛÜ”š[X\šY\ÎŒK˜[œÙ™\‘[˜Ý[ÛŽŒ‹›YÜÎŒ^[›ØÚÑ[Y[œÚ[ÛŽ–ÌKž]\Ô[™N–ÌKØ[\\Î–×_WK\ËšÙ^U˜[YO^ßK\Ë™ÛØ˜[]O[[_XÛ\ÜÈ™ØÛÛœÝXÝÜŠK‹Š^Ý\Ë—Ù]UšY]Ï]›ÚY\Ë—Û]Q[™X[]›ÚY\Ë—ÛÙ™œÙ]]›ÚY\Ë—Ù]UšY]Ï[™]È]UšY]Ê˜Y™™\‹˜ž]SÙ™œÙ]
ÙKŠK\Ë—Û]Q[™X[[‹\Ë—ÛÙ™œÙ]LWÛ™^Z[

^ØÛÛœÝ]\Ë—Ù]UšY]Ë™Ù]Z[
\Ë—ÛÙ™œÙ]
NÜ™]\›ˆ\Ë—ÛÙ™œÙ]
ÏLKWÛ™^Z[MŠ
^ØÛÛœÝ]\Ë—Ù]UšY]Ë™Ù]Z[MŠ\Ë—ÛÙ™œÙ]\Ë—Û]Q[™X[ŠNÜ™]\›ˆ\Ë—ÛÙ™œÙ]
ÏL‹WÛ™^Z[ÌŠ
^ØÛÛœÝ]\Ë—Ù]UšY]Ë™Ù]Z[ÌŠ\Ë—ÛÙ™œÙ]\Ë—Û]Q[™X[ŠNÜ™]\›ˆ\Ë—ÛÙ™œÙ]
ÏMWÛ™^Z[

^ØÛÛœÝ]\Ë—Ù]UšY]Ë™Ù]Z[ÌŠ\Ë—ÛÙ™œÙ]\Ë—Û]Q[™X[ŠJÌŠŠŒÌŠ\Ë—Ù]UšY]Ë™Ù]Z[ÌŠ\Ë—ÛÙ™œÙ]
Í\Ë—Û]Q[™X[ŠNÜ™]\›ˆ\Ë—ÛÙ™œÙ]
ÏNWÛ™^[ÌŠ
^ØÛÛœÝ]\Ë—Ù]UšY]Ë™Ù][ÌŠ\Ë—ÛÙ™œÙ]\Ë—Û]Q[™X[ŠNÜ™]\›ˆ\Ë—ÛÙ™œÙ]
ÏMWÛ™^Z[\œ˜^J
^ØÛÛœÝO[™]ÈZ[\œ˜^J\Ë—Ù]UšY]Ë˜Y™™\‹\Ë—Ù]UšY]Ë˜ž]SÙ™œÙ]
Ý\Ë—ÛÙ™œÙ]
NÜ™]\›ˆ\Ë—ÛÙ™œÙ]
Ï]_WÜÚÚ\

^Ü™]\›ˆ\Ë—ÛÙ™œÙ]
Ï]\ßWÜØØ[ŠJ^Ý›ÚYOOYI‰ŠOL
NØÛÛœÝ]\Ë—ÛÙ™œÙ]Û]LÙ›ÜŠÝ\Ë—Ù]UšY]Ë™Ù]Z[
\Ë—ÛÙ™œÙ]
HOOYI‰›Ê[ŠÊË\Ë—ÛÙ™œÙ]
ÊÎÜ™]\›ˆ	‰\Ë—ÛÙ™œÙ]
ÊË™]ÈZ[\œ˜^J\Ë—Ù]UšY]Ë˜Y™™\‹\Ë—Ù]UšY]Ë˜ž]SÙ™œÙ]
Ü‹Š__[™]ÈZ[\œ˜^JÌJNØÛÛœÝ™VÌMÌKÍKÌ‹LNËLËL‹LNÙ[˜Ý[ÛˆY

^Ü™]\›Š™]È^XÛÙ\ŠK™XÛÙJ
_[]Ù™ÙØÛÛœÝY^Ù[ŽžÙ[\ØÜš\[—Û›ÝYžWÛY[[ÜžWÙÜ›ÝÝ™[˜Ý[ÛŠ
^ÑÙ[™]ÈZ[\œ˜^J™™^ÜË›Y[[ÜžK˜Y™™\Š___NØÛ\ÜÈ™Ú[š]

^Ü™]\›ˆÙ
ÙH[™Yš[™YˆO]\[Ùˆ™]ÚÙ™]Ú
™]N˜\XØ][Û‹ÝØ\ÛNØ˜\ÙMŠÚ™
K[Š
O˜\œ˜^PY™™\Š
JJK[Š
O•ÙX\ÜÙ[X›Kš[œÝ[X]JY
JJK[Š\Ë—Ú[š]
N•ÙX\ÜÙ[X›Kš[œÝ[X]JY™™\‹™œ›ÛJ™˜˜\ÙMŠKY
K[Š\Ë—Ú[š]
KÙ
_WÚ[š]

^Þ™]š[œÝ[˜ÙKY™[‹™[\ØÜš\[—Û›ÝYžWÛY[[ÜžWÙÜ›ÝÝ

_YXÛÙJOL
^ÚYŠ^™
]›ÝÈ™]È\œ›ÜŠ–”ÕXÛÙ\Žˆ]ØZ]š[š]

H™Y›Ü™HXÛÙ[™ËˆŠNØÛÛœÝ]˜ž]S[™Ý^™™^ÜË›X[ØÊŠNÑÙœÙ]
ŠKOY_[X™\Š™™^ÜË–”ÕÙš[™XÛÛ\™\ÜÙYÚ^™J‹ŠJNØÛÛœÝO^™™^ÜË›X[ØÊJKÏ^™™^ÜË–”ÕÙXÛÛ\™\ÜÊKK‹ŠKÏQÙœÛXÙJKJÜÊNÜ™]\›ˆ™™^ÜË™œ™YJŠK™™^ÜË™œ™YJJKß_XÛÛœÝ™HQÑž˜”QPPPPPœQU–PQ‹ÐVYÐ[ŽKÐQÐQŒÎKÐVYÐ–KÙŒÎKÐVYÐVVPR‹ÙÑ‹ÖPT‹ÙŒÎKÐVYÐLÎKÙÐ™Ð›ŽKÙŒÎKÙÑ‹ÖPYÙŒÎKÙŒÎKÐVYÐ[ŽKÐVYÐ[JÐVYÐPP™Ð–KÙŒÎKÐQÐQÙŒÎKÙŒÎKÐQÐRYŒÎKÙŒÎKÙŒÎVP[ÙŒÎKÙŒÎKÙŒÎVPPP™ŒRYŒÎKÙŒÎKÙŒÎ™ŒS™ŒÎKÙŒÎKÙŒÎKÙŒÎKÙÑ‹ÖPQ‹ÐVÒÑQ•ÍL’•Ì“žXVŒ•ÍY˜›NLUÖVŒ[•Î^YUŽ[˜ÛNLÙÙÐPSœPQQPPQYÑQÝÐPÐTPPYÒQ”XÐP]ÐP‘ÜÐTXÐQZRPUP‘TQPPPSÔPÐYÖPÐYÑ]ÓQ™ÑPPÔZÒ™ÒPÐPVQÐYÔUPÖQÐ]ÒQÐPSPÐTYÐÕQÐÙÛÑQTPQPQRP]ÙÑ”YÑPNPPXÐPUP˜ÐQPÐYÕQPTPÐPYÖRV”XPÙÝÐRSŒR›L[•Î^YTRPP›LZ‘Þ–]Ð[Ð‘ÖžV•ÕPR™ÞULT‘V›”–žXŒÒPXP›ULT‘V–œ›T‘V•Ó˜–žV–ž–•Ô•VQ”TÛ•T‘ŽZÖ•Ó˜–žV–žQ[ÑÖÓŒVŒPÔRÑPTTQSTÔRÝ\ÜÐ˜PNRPPYÐPÙÐÐÐP˜Z–PÐ\ÖPÐPRÐRPRPP[ÐYÔ’ÑŒTPYÐUÝ’ÑŒÝÙÐRPPšRSÌÍ’P^QP’PP[ÐYÔZPLYÕTRPP[ÐYÙÚPTÐPRÐRTUÔRPPTQNPP[ÐYÝÚPZPP”™ÔTTQZPQTÐ’‘ÝÎPPYÐTÐP’PRœ’PSLÖZPÐP’PTœ’PR’’YÑX’YÒœ’YÔLYÙÙÐPÐQPRLÔœ“™ÒQRPPYÐÙÐPQPÐP\ÙÐT\ÕPTQ‹ÒPPYÐTPÒTRYÐPÐP‘PQYÐYÝŒÐTQPÙžPPÔ”TRPPÐQÐÐPÐPTTPLZYÐQRPSÒRTXšÑÜÙÐPÐP“™ÒSRPPYÐUQQXZ–PÑPÐPÔTT”‘PYÐPÐP’PRœRYÑ™‘ÛÚP^–PÐÐÐPRPS[ÐPPLYÐYÐUQ‹ØZLPPÒP‘PYÐQQRRPQTQ‘ÜÌYÔYÐYÎPPQPÐ‘Q‹ÑÜÙÐPÐP“™ÒRRPPYÐTÌPPÒQ™ÒPRPR™›[ÚP‘QP•TRPTUÝ‘PYÐPÐP“PPÔTŒPSžRYÓLYÐSPPYÐTÌPUQRYÐQZ–PÐP\ÙÐTÐPØZÑ‹ØZLPPÒP””TRPPQPÐ‘QœÑÜÙÐQQ[ÒPQTQÐPÔTSŒ[\ÌYÔYÐYÜÕÐPÐPRPQ\PPLÐPPYÐPÐP’ÔPRSÐRPÞNVÐUQPÙQÙÒÛÛÐYÐYÐPÙÐÐQQYÒPQYÐPÙÐÐ‘Ü”TŽ^‘ZZPPRPQTPTÐPÐÞQPRPQÞŽX•N[ÙšPPY‘RYšURÒJÝ›S™[MMKÙ™ÜÙTQ‹ÒPP[ÐYÙÙÐPÙÐÑVQYžPPRÐRQTTÐ‘Ð•QPPÝÝPÐQQžPPÔVQPQNTPÐPRPQYÐZ›’PPTÞPPRPRœRTSPÔPÐPRPQž”TSž”TPZÐYÐZÑP”ÐTRPPZYÝÐÞPPTTSž”TRPPZYÝÐÞPPRTRQPÐPÒPQ]PPMPPYÐUQP˜ZQP’PRUÛÚPZPQÌ’PRLÑSP\ÓZÐYÐLŽÔÒQTXÐPTÔLRPRYÐ‘QXZRQ”ÝÌPLYÐZPP’ÐRPS™ÒPRPRYÐTÙÐÐ‘PÐÐPÒPQ[ÐYÙÌYÙÙÐZPP’ÐRSS™ÒSRPRYÐTÙÐÑQPÑPÐPÒPQ[ÐZLZYÐZPP’ÐRVS™ÒVRPRYÐTÙÐÒPÒÐPÒPQ[ÐZPLZPYÐZPP’ÐRZÓ™ÒZÒPRYÐTÙÐÒÑPÒÐÐPÒPQ[ÐZ]ÌZ]ÙÐZPP’ÐR]Ó™Ò]ÒPRYÐTÙÐÓ‘PÓÐPÒPQ[ÐZ™ÌZ™ÙÐZPP’ÐRN™ÒNPQ”QÜÚTÐPÔUPœ’YÒYÐ•LP\ÓPRYÐ‘NTSRPRYÐTÙÐÐQPÐPÐP”TTœRTQYÐZÑQXZRPÒPT’‘PSQSPS‘ZÑTPÐPRTRSPT\ÙÐLŽZRQRPP’‘PYÐPÑPÑQSPPZYÓRPRYÐTÌPQÐPPÐPÒPQ]PQMPQYÐZPP“PPÓÙÐPÒPRYÐTÌP^›ÐP^PP”TTœRTQYÐZÑQXZRPÒPT“‘PSÞPPÒPS’‘PQPÐPÒPQ]PPMPPYÐUQP˜ZQP’PRUÛÚPZPQÌPÝÜÙÐP\ÓPPÐPRPQ\PPLÐPPSTQPÙžPPRÐRRRYÑYÐPÙÐÑQZÑTQQQÜÙÐPÐPRÐRQRYÒŒÑLYÔYÐPÐP’PRLÖœ’YÑLYÙÙÐPÐP’ÐPPS™ÒPTTPSPYÐPÐP’ÐRPS™ÐPPËØÐÐTR‹ÐZÐYÐPÐP”™ÌPZÐYÐTÐPØZPPTÝÔRPPYÐ[[ÚPÐP”ÝÌÞPPRPQYÐZSÜÙÐPÐP˜ÌQÔÑQZÐPÔPÐPRPQ’‘PYÐ]ÔRPPZ]ÝÑÞPPTTSž”TRPPZ]ÝÐÐÞPPRTSQPÐPÔ”LRPSYÐTÌPQÐPPÐP”TQœRTQYÐZÑ‹ØZQPÒPSUÛÚPLQÔLPÝÝÐÝÒRPSSPÐQTTSž‘PQPÐPÔ”L’PPYÐZÑ‹ØZRPØZRQPQYÐ[[ÝPPMPPYÐLQÔLPÝÜÙÐZÑQLPLYÐPÐPÔVRYÒœRPQYÐ[[ÛÐYÐLYÐYÐZÑQÝÌPÝÜÙÐZÕSYÓRPPYÐZÑ‹ØZRPØZPP’PRœSPPSÙÐPRPRSP\ÓPYÜÙÐZÑQLRPRZSRPSYÐTÙÐÐQPÐPÐP”TTœRTQYÐLQXZQQPT™‘ÛÚP‘QQÝÌPÞPPÔTSžTRSPR‘‘PQPÐQPQ]PPMPPYÐLP˜ZQQPQUÛÚTÐPÔV\RYÒSP\ÓPPSÒPÐ[Ž™™ÒRPR‘‘PYÐPÐPØZRQV\RPQMPPYÐPÐP“ÙÐPRPRLÓPÐQV\RPQMPPYÐPÐP“ÙÐP’PS™•ÛÙÐUÐPPÐPRPQMPRYÐZÑRÔLRPS™‘ÛÙÐUÐPPÐPRPQMPSYÐZÑR”ÔLRPPPÐPXLQÔÒQXZRQPQ‹ÝÑžVQÐÚZÒYÑLYÐYÐ^PPÒPTœ”VYÔœRYÒ™‘ÛÙÐUPÐPÐQTT[‘PYÐ^PP“™ÒRRPSYÐUPÐÐPÔVRPQLYÐYÐZÑŒZPP“™ÒPRPT‘ÕZÓPÐQPQLZÙÐ^PP“™ÒURPSYÐUPÑPÐQPQLYÝÙÐZÑØZPP“™ÒPRPR˜‘ÛÙÐUPÐPÐPÔUÚRPQLYÐYÐZÑšØZPP“™ÒPRPTYÐLQXÕQVXÚRQX^RPÔTÐ’‘PYÐXLP•RYÚPQšÑQ’PSYÐ‘ÛÚTSRPQYÐ•ÑÐÐP’PULÐ^YÐTÐQ“ÓRRPQYÐ•ÑPÐP”TÐœRTQYÐZÑ™ØZRPÔTŽSPSÞPPPÞN[ŽÐPÙÐÐÐPRÐRPTTRŒZRPÓPPÒTSYÐPÐPÓÑPRPQYÐZLP^RXZ–PÐPÐQÞN[ŽÐPÙÐÐÐPRÐRPTTRŒZRPÓPPÒTSYÐPÐPÓÑPRPQYÐZLP^Q˜Z–PÐPÐQÞRPPYÐTÐPÒÐRQQPYÌYÐYÐTQQÚPPRPRÑÛÌYÔSÐPYÐQÙ’ÓSYÕP‘QQTX^RRÒPPÙžPQTTS“‘PYÐÚÑPS™ÒSRP\‘ÛÙÐ^PQQP\ØRPPYÐTÐPÒP\‘ÜU’YÐ˜ÐPQPSX’PPYÐPÐQTÞÓPT\ÙÐQQPRPQ[ÐYÐV[[ÔQPÑS”U”YÐ^YÐPPÒQÔTN^YÐÚÜÓP›ÙÐZPPTTUœS™ÒPRPSYÐ‘ÛÚPZÑŽZQSRPR™UÛÚPPÔVRTYÐQQQØZQSTTZ”ÐQÔTTŒ’TT’PÐPYÒPTTQžRTZÙÐTÙÐÐPÑTTPZZPQTVPÔPSRP[ZÙÙÐZPTÌÒ‘‘PYÐZQRZÐYÐÐTPLYÐ‘RËÝÓžY‹ËÐLQTPÐRTšRTXÙÐšPTTÔT‹ÒPV[[ÚPšYÐPPÐQ™ÕYÐ•QTXZQQ’PT‘RSTTSPT\ÓLYÐ‘QQÔÒRTTS‘Ð‘PYÐ•QPØZQQ’PT[–ZÐRTSœRTXÓPT\ÓPXÙÐÑÛÚPžPTÝÌRPU[[Ú”SRPRYÐŒÑTPÐS’PRVœTTPMÐTPYÐZÑP˜ZQPÑQSÞPQÒPMSTPYÐšPQ”TSŒXZRRP^ÌQTPÐRÐPPRPUŒÑZP–Z]ÐÐÞPQTTRŒ’TTSPVZÜÐÙžPSV\RPTYÐQQ‹Ø[‘ZPšPPTTQŒV\RYÙÙÐÕÜÚQUZÓP›ÙÐÐRXÔÒQTTPYÑTÐQRPP’QÌœÚšPSÞQRRPLÐZÑP™ÛÙÐšÑ‹ØZRQSÝÑPRP[TÐQØ^PQRPVUYØ˜^QRLYÐÔÐPTÐTRPPVZPÐSV\RT\ÓPT\Ó[ŽÐžPSÔÌPRPXÙÐ”ÐRXZRQ”TSŒXZRQÒP^ÌQTPÐQ”TYQSPUYÑÒQÒPY”TSŒ]ÜÚ”ÐPÔTQœRTRYÐ‘UZÐÐQÒÐPPRPU’ÑŒ’TTSPT\ÓUÝÙÐÕQP”žPQ”TÐ’ØÙÌ‘ÚPP’PR™Œ›ÌYÐYÐšPQ”TYTTSŒXZPQ]ÝÐÌ”PÞQPRP\‘QÛÚÐPÐPPÝÚÐTTQ”ÐPQÝÜÓPPÐPRPQ[ÐPPLPPSYÓPÛŽQRÐQÜÚPÚTPRPRUÛÚPPTTZRT]™ÒPQRPU™ŒœTŒRT^PÑPÔTQZšÑP’PUŒYÛ™Œ›ÚQQRPLYÐZPSÔšÕQTPRRPQYÐZÑP™ÒS˜ZNPÒRY‹ËÐLQTPÐSPZLÔœRPRLYÔYÐÑQ‹ØZQRTTQZÝÐÞPQÔTPYÑÐRTŒTŒTÚÚ™ÜÙÐÚPS˜ZPRÝÑPRPRUÛÚYÝÐÝÜÙÐPÐQ“™ÒQRPPYÐš–PÐPÐR”TSŒ’P[VœTTSœRT^PÑPTTPZšÑPRTRQPÐQÒPMQÐ‘PQPRRPPYÐÕVSPÐRÒP\ÙÐQQQÛÚPTÙÐÐÒQÔTQŒZRPÒPR]TPZPZÑP˜ZœÐPÐP’PUYÐZUX^RRSÙÐQPQYÐZPRTYŽ˜ÖYÐÕÜÍÐTPYÐTÐQRPV[”ZP[[ÛÐYÐMPRYÐTÐPÒPSœRÐRPS™ÒQRPPUÛÚP]ÐÝÜÑ’PQYÐšÑP™ÛÝPTPZQPRTXÑPÐRPLSÔ”TRP\ÙÐZÑQÛÙÐš–PÐSRPRYÑÛÙÑÑZPZPRTÝÌPÞPRTQœRTXÓPT\ÓPVUÛÚ™ÝÐÝÜÙÐÚÒÐQÛÚÐP\ÚQRPRPQTPÔÐPZRÒJÝ›S™[MMKÙšÓŒÓ\U‹ÓMÞNVU‹Ù\ÔPPÐPT[Ð]ÙÙÐPÐP“™ÒPPÞTPVÐPTRPQ[ÐYÔZPYÔRPQ[ÐYÙÙÐPÐPÑTQPQÜÙÐP[PÝÜÙPÐPRPQYÐZNPRS™ÒPRPQTP›ÙÐPÐPÔTTœS™ÒQPÌÐVP›ÐÐ[ÐYÐZPTÐPXZRPTVSP‘PšPÐ“QPÐQQ‹ÑÜÐÔPÐPTÐ‘R“‘PYÐP›QPšPÐ“QPÐQQ‹ÑÝ›ÐÐYÐQPÐPÐPÎXÐTZÔXœÒT[ÐÔPÐPÒÐRQRYÙÙÐZYÐÐPÒR˜ZRSÒPQYÐQÝP˜ÑRÒPZÙÐÐQÐRPRYÝ”ÝÌRPPYÐÕÛÚPÐPÒÐRRRYÞ’TLÐPÐP”UÐœRYÎÐÞPR”TPTRÔÐQPZÙÐÌ›ÌYÐPÔPRRP]ÙÐÐQ˜LTPÐS’TUSPT\ÙÑÐQRPVœ”ÝÌÒPXÙÑÐQ˜^RPXZRP’PZRPY‘PYÐÐP’PYÔQÓPYÜÙÐÐP”TPYÐQÜÔQQP’PRYÐPÐRXZRRS™ÒQRPQYÐQÜÚ\ÙÐÐTPUYÐÑQP‘PÚÓPMÙÜÙÐÙÝXYÑP™žSPTVPP˜^RS’PYÑÐQ™ÒŽZÐYÐZÑQÝÔTVÔ]ÐÝÒPZÐPÔPRRPRUÜÓÐ]ÐQYÑSPV‘‘PRÔ]ÑPÌœÒTZÙÐ”ÌPPÒPÒPS“SYÐPÐRPR[”ZP[[ÛÐYÐYÐZPRXZYÐÐPMÒPQYÐQPÐQQP’TZÓP]ÜÙÐTÐR“™ÒPTTPZÔ]ÐÐÞPRÔ”TTUÝÚÔ]ÐÐÌPRTZÙÐÌYÑQV”ÒSUQRRPTŒTZRTPPÑPÐLYÐZPPUÌÒPR”QÜÚYÝÐPP\ÐPÌœÒTZÙÑÐS”YÐXZPS”Y™ÐXZPQ’PVTQ”ÒPÑPSSPÐS’ÐRYÓYÐ‘\ÓPÐPRPLÑÙÐÙÐRPYÙÐ^VRPQYÐQPÐPÐPÒTZÓPLP™ÐQœRPYÐÔ\ÓPÐPRPQYÐZSÙÜÔPPÐPSÐPRPP]PR‘RžPÞNP[ŽPRÐUQRTÔLQÚÑžRPP[ÐPTZPQQŒÔÝÌQÚÑÍžPPTTZRYÐYÐPÐP”ÞÓÝÚÐRPPYÐUÐPP\ÑPQSYÖP–ÐPÐPRÐRPRYÕ™›‘LYÐPÐPRPUVœTVTYÒÐRPRYÔYÐQVX’TQPÔPRRPP[ÐYÔZPZÕSPÐPÒÐRPRYÓVSPÐPÔTZRYÕYÐLP™ÑZRQTYÙÐLRTÞ”TŽ^”TRŒVPY˜ZRQÐRPT™ÔRPSYÐZYÐÑPÐP\ÙÐZYÐÐÐÒQ‘PYÐ^PPÒÐRSS™ÒQPÞPPÒÐRSRYÓQTPÐQPR[ÐYÙÌYÐSPRYÐZYÐÐPÐPRÐRPTV^Z–PÐQQÑRPÑPPZÐPÔPÐP””LRPQYÐZ–PÐÐP’ÐRPRYÓVSTÐQTQŒ”VRYÓÐÐQTZÌ™’Ó[”™ÐŽ\RYÓ[ÐYÐYÐUQRXZÖQTPÐQPQ[ÐYÝÌYÐSPQ[ÐYÙÚP]ÔRPSYÐTÙÐÑPÐ\ÙÐTÙÐÑÒQ‘PYÐ^PP’ÐRRS™ÒPTVTYÒÐRPRTTSPRYÐZYÐÐPÐP’ÐRPTV^Z–PÐPÐP’PT‘ÑPYÐTÐP’ÐRPTTQŒ˜ZÑQXZQPPÞPPRPRLYÐSPR[ÐYÐV™QÛÚPQQRRPPÑ\Ø–ŒY˜ÌPÙQÐR›ÚPTÙÐÐPÑPRPQYÐ•PÐPÐPÒPPLYÝÙÐZÑPS™ÒRRPP‘‘QYÐPÐQ“™ÒPQÜÐÔPÐP””LRPQ[ÐYÐZPZÑP˜ÔLRPRV™QÛÚPZÑRRPRÑ\Ø–ŒY˜ÌPÙQÐR›ÚPZYÐÐPÐP”TZT™ÔRPRYÐTÙÐÑPÐP\ÙÐTÙÐÐÐÒPÐ‘PYÐZPP’ÐRSS™ÒQPÞPP’ÐRSRYÒQTPÐPÒPQ[ÐYÙÌYÐšÐ[ÐYÐZ\ÙÐPÐPRÐRPRPQ[ÐYÐ™›‘œRYÒLYÐPÔPÐP’PT’‘PYÐTÐP’ÐRPTTQŒ˜ZPPS™ÒQRPP[ÐYÐZYÝÐÌÑRPÐPS™ÒPPÞPPÔTQŒ”VRYÑÐÐP”TZÌ™’Ó[”™ÐŽ\RYÒ[ÐYÐZTÐPÒPPÑÛÚPZ–PÐPÐPRPQLYÝÙÐQQPS™ÒRRPQ‘‘QYÐTÐPÓ™ÒPQÜÙÐ•QP™ÑZRP”TYÙÐUQRTÞ”TŽ^”TRŒVPY˜ZRPÒÐRPRTQYÐZPPTTZRYÒLYÐYÐPÐP“™ÒSRPPQPÐÐÐP””LRPQYÐZ–PÐP\ÓÐYÐPTRPP™QÛÔR”\ÓÐRPLÎÔPÐPTTN\TVVTYÒÐRPRÐRPTTQŒ˜^RPÑPŒP™ŒSPRTVTYÒÐRPRYÐ[ÐYÐZPUQP˜ÔLRPQV™QÛÚPUQRRPQÑ\Ø–ŒY˜ÌPÙQÐR›ÚPTÙÐÐPÐPTTZT™ÔRPQYÐPÙÐÑPÐP\ÙÐPÙÐÐÐÒP‘PYÐTÐPRÐRSS™ÒQPÞPPRÐRSRYÑ‘‘PYÐTÐPRÐRRS™ÒPPÌP’TQYÐPÐPRÐRPRPRVœRYÒLYÐYÐZÑP˜ÔLRPRV™QÛÚPZÑRRPRÑ\Ø–ŒY˜ÌPÙQÐR›ÚP^YÐÐPÑPÒPSYÐQQRXZRQ™ÒPRPPYÐZ–PÑÐPTTPLYÙÙÐZÕSPÐPÒPSLYÐSPQSÒPLÎÔPRRPPTÐPQÞRPÑQÚPPLPZÐPÔQQÑRPÙÐÐPÒPT”LRPP[ÐYÐZPLP˜ÔLRPPYÐLP˜Ú–PÐPÐQTQŒ”VRYÑÐÐP”TZÌ™’Ó[”™ÐŽ\RYÑ[ÐYÐYÐQQRXZÖQTPÐP’PP[ÐYÝÌYÐSPP[ÐYÙÚPTTRPQYÐPÙÐÑPÐ\ÙÐPÙÐÑÒP‘PYÐTÐPRÐRRS™ÒPPÞPPÑPØÚZÑPRTQšÐ[ÐYÐZPÐPÑQYÐPÐPRÐRPTV^™ÒPTTPTÞPPÔTN\TVYÓTRÒPÔVQÑRYÐZÑRZÑÔÒPRPR’‘PYÐPÐPØ^YVQÑSSZÐšÐ[ÐYÐZPUUQTQQÐRPÐPS™ÒPQQSPPYÐUPÐ]šÐYÐQPÐPÐPRPSVVLYÐSPT\ÙÐQUST\ÙÐQQRXZQPÞPPÍÚÑTR‹ÒPPYÐL›Ú”RRPSŒÑTPSRPPYÐ•NZPPRPR]PPMPPYÐQQP˜ZQPRPRUÛÚYÝÐPP\ÐPÞPQTTQ‘Ð‘PPÔPÐPRPRœ’YÖŒTPÐPRPR]PPMPPYÐPÐPÓPP“ÙÐP’PPYÐZLPZ›ÐPZPPRPR]PSMPSYÐQQQXZPPÒPV[”ZPšÒR[ÛÐYÐœRYÒTQžPPÒPV\RÐRPX^QPÑQSPPYÐZSPÞPPÔTZRTRYÐQQRXZQPPÝÒPZÐPÔPRRPUYÐULTPÐPRPSœRTQYÐ‘QP”žPPRPRœ”TNRØÙÌLYÐPÐPÑP]ÙÐZÑRXZQPÒPPÑÛÚPPÐP”ÔLPÝÝÑÞPPRPQ“‘PYÐPÑP‘TSPTUXÙÐPÐPØLTÛ’STÐPRTSYÐZQQPLYÐ^PQQP]ÙÐ‘QRXZQQRPSÑÛÚP^PP”ÔLPÝÝÐÐÝÓRPPYÐZRPR‘QÛÚZPPTTœRYÐYÐUZÓP\ÓP]ÜÙÐPÑQPRZSRPSYÐRPT‘QÛÚÐQTœRYÓYÐUZÓP\ÓPRYÐTÐPXL›ÚYÜÑPÐP’PU”QYÐTÐPÓPPSÙÐPRPQUÛÚTÐPÔTQœRTRSPPPSP\ÓTQPÙžPPRPP[Ð\š™ÐTÒQ™ÓMQYÐPÙÐÝ“ÐP’TTYÐPÐP“™ÒÎQYÐPÐP’PRœS™ÒÍQYÐPÐP’PTYÐLS™ÓMQSÑPVÐPÐPRÐSÍQTQš–PÞSÐP’PPÐQÑ
ÓÐP’PPÐQÑSÐP’PPÓÐP˜ZÒPSÓPRPPœSPXZRP”V^PYÓÐPS™ÒPRPPQPÛSÒP’PPÐQÑSÑP’PPÐ^˜ÑÓÑP’PPœ“P˜ZÒÑZZÐÐQÐÐPÐPTX•PUÜ’[ÐYÐLYÐYÐPÐP“™ÒSRPPYÐQQÖRQÛÌYÙÙÐPÐPTXP]ØZ–PÐÐPRPP‘QÛÌYÐSTQP™ŒÍžQQZÐYÐUQQÔLRPRYÐPZYÑLÖZPQPÐÐÐPÒPQVLYÔYÐZPP”TQŒ”TSžYÓLYÐPÔPÐQV\RYÑZÜÓPRRPQUÜÓÐYÑPPYÝ˜NPPZ]ÜÙÐ]ÜÓPPÐPRPQYÐZÑPQPÍPTPÐLÎÙšPQP–ZÐPTTP’ÐTRTPYÐÐPÔÝÔRPTTÞPP””TTVÝÒPZÐYÐLP”™ÌRPQ[ÐPPZPšÑÛÍœ\™ÌTVZ^PQÔVžY]RP”Ì”TYÚ^PPÔTZ‘QYÐQQPTTÙÔQPÑPRPQ[ÐPTZTÐPTTQLZYÐPÐPœ•ÑQQPQÜÙÐTÐPÒPSTSRQPR“PYÐPÐQ™ÒVTVZ^PP’PTœRYÕ™Œ›ÝPPZPZÑRXÔLRPR’RZPšÕQTQQÒTSYÐ”ÌPPÒQ”XXÐ”ÝÌ’PUŒÑÝYÑYÐ•QQÑRØ\L‘ÒYÙÐM
ÒPYTYÙÐ‘QP˜ZQQPÞPPÔTVŒ’TSYÐZÑPÙQQZÐYÐZÑQÕQ‹ØZRPÔTR“‘PPÑPÑQSZÐPÔPRRPRUÜÓÐYÑPÐP\ÙÐTÐQXZLPPÑPÒPTUÛÚ]ÐÐÞPP’PTœSÐPRTRYÐ‘QPØZQQQQSPQYÐ‘ÛÛÐPPZZPQTTTœRTTSPUVZ”RŠÐZÐPÔPRRPS™Œ›ÚPLPÕTRPSUÜÓÐYÒQT]ÙžPQÔ”LÚPP’PTœSTPPQSSPQYÐ‘ÛÝPPÝ[ÐPÙ]ÐÐÞPP’PTœRÐPP\”]ÐÞPP’PTœRÔPPPÞQRPPYÐ•PÒPÐPRPRLZÙÐPÐRÓPTTPZ^PPTTPLZYÐPÐRPYÙÐšÚPž˜ÑÐÐPRPYÙÒPRRPYÙÒPRUœÊÐZSPSSÝÑP™ŒÍžQQPRTQšRPÒPQ“’ÐPÐPØZÑ‹ØZLPPÒPTTSžTRŒXPYXZYÐÐPÐPØZPPTTVŒ’YÑ[”œÐ\RÐRPXZPPTTÐžYÐ‘˜ZPP””ÐPTTUŒ˜ÕÛÑ”XšÐÝÜÙPÐPRÐRÔMÑTUÚPPTTPL\QPTÐPTYÐLÐMQPT]LP]ÑQ™žSPTVPØ^RRÒPR™ÒRPU‘‘PYÐÝÐPPÒRTYŽ˜ÔÑRZÐYÐÑQ‹ÕTRPY™ÛŽ\TTQŒ’YÙÙÐ•NZÑœÒTVYÐŒÐ™Œ›ÚP•QÐPZÎZPQTTQœRTYPÑQÐLYÐšPQ•ÔRPUZšPRRTXÓP]ÕYÐPÐQØZPRPVVœRYÔ]PP’MPPYÐPÐQÔTQžXZPQSPPTTN^ÙÐPRPV[[Ú™ÝÐÝÐPPÝÐSPXÙÐ•NTÐPRPTUÛÙÐžPRÑQ“ZPšQQSPVZ‘QPRTVYÐUQPTUTQPÑR”TPZ”SRPTYÐšØÑTPÐPRPVœRYÙÝPPZPUQSÝÔTUÝÚ™ÝÑ”ÐR’PQ[”œRYÑYÐTÙÐÐQQP˜Z–PÐPÐQÔTQœRTVTÐRSPPYQP™ÐQ˜ZQQ‘RSP\ÓUÝÚšPQ””LRPUTQ‘QP˜ZRP”T^PYÐ^PP“™ÒPTTQTÐP™ÐQ˜^RQP”ZPVYÐLÓPÐPRPTœRPQUÛÚPQÐPPÐR’PP[”œRYÐYÐPÙÐÐQQP˜Z–PÐPÐR’ÐRQRYÐZÚÙÐQQP˜ÖSPÐPÒPTUÛÌYÐYÐŒP˜ZQQÐÞPRÔVPØZTPRPVSP‘QRÐQÜÚP”ÔPTUÝÚÝÒRPSÚÚÓPÐPÓÐPRT[ÙÐZNPZQR’PR]PTZžPQ”TZRPTTQÒRPSYÐžPR’P\XZÑQØZRSTÔLRPU]P[ÚÐÐQ”YÐXZPPÔTVœRYÒYÐÚQÒYÜÔP]Ì’PU”QÜÙÐZPRØZRPÒPZÔPšRSPSSTÐQ”TÚRPRYÐÕÛÚPZPRPVZPÞQQYÐ•QTXZPPÒPYRPSYÑÜÔPšRSPSSTÐPRPQœRYÎP™•ÛÚPÐQTTTœRTVTÑSPPYÐUQQZÑPÙRQZRSRPSœRYÒYÐL›ÚQQQPRZÐSRTXÑPÐSPSYÑQ[‘PYÐPÐQÒPUŒPœRPYÔPZÑPÙÛÚPÔÎQÐPPÐQ”YÐXZPR“PPÑPQYÐÔÌP^QSPXÙÐšPQ”UPœ’PYÔPZÑPÙÛÚPÔÎQÐPPÐQ”UPœ’PZÝPRTPTÐR“PQT[ÙÐÐQÒPU’ÑÛÙÐÐPÔTRŒZRR“ÑPSÝÐPRPU’ÑÛÙÐÔÌPZP’PZÝPSZÔÐQPVYÐ•QTXZPRQPR[”œRYÌTPMÐPPYÐ•QTXZPS“PPÑPQYÑÌP^QS’PPYÐÌ›ÚPÞPQÒPUŒPœRPYÔPZÑPÙÛÚPPÎQÐPPÐQ”YÐXZPPSPPÑPQYÐPÌP^QPRPXÙÐÛ[ÚPÚPQÒPU”QÜÙÐÐPÔTRŒZRRÑPSÝÐPRPU”QÜÙÐžLPZP’PXÝPSZžPQRP[RYÚÙÐšPQ”TÚRPYÔPZÑPÙÛÚPÎQÐPPÐQ”TÚRPT]PRTPTÐQSPQTTYÐ^PS˜ZRQPVYÐ•QTXZPRQPR[”œRYÌTPMÐPPYÐ•QTXZPS“PPÑPQYÐPÐSZQPRPXÙÐÛ[ÚžPQRP[RTTYÐ^PS“PQZQQPUŒPœQPLÐ•QX^S˜ÚPQ”TÚQPL^RPU‘QÛÔQ‘’T\ÓPT\ÓPTYÑÜÙÐžPPÔÌÒSQQœÒT\ÙÐPÐSTÝÌ’P^™•ÛÚÔSTTPYÐPÐR”ÔÐQ”YÐXZQQÝÔRPPYÐšPQ”YÐXZPRQPR[”œRYÛÝTPMÐPPYÐ•RPQÛÙÐÚLPZP’PPYÐÚLPL›ÚPPÐQÒPUŒPœRPYÔPZÑPÙÛÚPÚNQÐPPÐQ”YÐXZPRÓPPÑPQYÐPÐRÓPQZQPQQQ’P^™›[ÚÙÓRPUŒPœQPTYÐPÐRÔÌÒ‘‘PYÐPÐQÒPUŒPœRPYÔPZÑPÙÛÚPÔÎQÐPPÐQ”YÐXZPR“PPÑPQYÐPÐR“PQZQPQQSÝÓRPPYÐÚÌTPÐPRPVYÐ•RPQÛÙÐÐPÔTRŒZRR“ÑPSÝÐPRPUŒPœRPZÝPRTPTÐPRPZÝPSœRTPSPT\ÓZÐYÐPÐSUÌRPPYÐšPQ”YÐXZPRQPRZPQQPÙÛÚQÌPQÐPPÐSSPQTQ‘Ð‘PYÐ•RPQÛÙÑÌPZP‘QSPU[Ð[’ÓPÐQ”YÐXZPQÒPP[”œSPPÑPQYÐ”ÙÐÖQZÔLRPU’QPÖ\ÙÐZÑŽXZQSPLPÐRP^’PU”QÜÔPœÑTPÐRPVYÐ•QX^PRQPR[”œRYÐ]TPMÐPPYÐ•QX^PPSPPÑPQYÐžPPSPQZRPRPVYÐ•QX^PRQPR[”œRYØÝTPMÐPPYÐ•QX^PRPPÑPQYÐPÐRPQZQRQQ’PR™›[ÚSRPU”QÜÔPÐRP^ÚÕQTPÐRPVYÐ•QX^PRQPR[”œRYÐ]TPMÐPPYÐ•QX^PPSPPÑPQYÐžPPSPQZQRQSÝÓRPXÙÑLTPÐRPVYÐ•QX^PRQPR[”œRYÐ]TPMÐPPYÐ•QX^PPSPPÑPQYÐžPPSPQZQRQSÝÒRPXÙÐZÎPÐRPVYÐ•QX^PRQPRZPQQPÙÛÚPZLPQÐPPÐPÓPQTQ‘Ð‘PYÐ•QX^PPÓPPÑPQSPT\ÙÐ”ÙÐÔ‘QY”ÝÌRPU”QÜÙÐšPPTTRŒZLPZP’PU[ÐZÔ’UZÓPÐQ”TÐLZÔSPMP™•ÛÚYÓTTPYÐÐPÔÔÐQ”TÚQPTX‘PYÐÐQÒPU’ÑÛÙÐÐPÔTRŒZRPSÑPSÝÐPRPU’ÑÛÙÐPÌPZP’PTYÐPÌPL›ÚPPÐQÒPU’ÑÛÙÐÐPÔTRŒZRQSÑPSÝÐPRPU’ÑÛÙÐÌPZP’PPYÐÌPL›Ú]Ð”ÐSÔV\RTRQPÐQ”TÚQPTYÐÐPÔÌÒ‘‘PYÐÐQÒPU’ÑÛÙÐÐPÔTRŒZRPSÑPSÝÐPRPU’ÑÛÙÐPÌPZP’PTYÐPÌPL›Ú]ÐÝÜÑPÐQRPR“‘PYÐÐQÒPU’ÑÛÙÐÐPÔTRŒZRPSÑPSÝÐPRPU’ÑÛÙÐPÌPZP’PTYÐPÌPL›Ú]ÐÝÜÐÔPÐQRPMTPYÐÐQÒPU’ÑÛÙÐÐPÒYÐ[”œRYÒ]PPMPPYÐZLPLP”™ÔRPU’ÑÛÙÐZLPZP‘QSPU[ÐZ^’ÓPÐQ”TÚRPVYÐQQPÙÛÝPRTPTÐQ’ÐR\ÔTÑ’‘PYÐ•QYÓ™Ò\ÐÝÓTTPYÐ^PTTÔÐQ”TœQPTX‘PYÐ^PQÒPU‘QÛÙÐÐPÔTRŒZRPSÑPSÝÐPRPU‘QÛÙÐPÌPZP’PSYÐPÌPL›ÚPPÐQÒPU‘QÛÙÐÐPÔTRŒZRPÓÑPSÝÐPRPU‘QÛÙÐZLPZP’PPYÐZLPL›Ú]ÝÐ”ÐTV\RTRQPÐQ”TœQPTYÐ^PPÔÌÒ‘‘PYÐ^PQÒPU‘QÛÙÐÐPÔTRŒZRPSÑPSÝÐPRPU‘QÛÙÐPÌPZP’PSYÐPÌPL›Ú]ÝÐÝÜÑPÐQPR“‘PYÐ^PQÒPU‘QÛÙÐÐPÔTRŒZRPSÑPSÝÐPRPU‘QÛÙÐPÌPZP’PSYÐPÌPL›Ú]ÝÐÝÜÐÔPÐQPNTPYÐ^PQÒPU‘QÛÙÐÐPÒYÐ[”œRYÒ]PPMPPYÐZLPLP”™ÔRPU‘QÛÙÐZLPZP‘QSPU[ÐZ’ÓPÐQ”TœRPVYÐQQPÙÛÝPRTPTÐQ’ÐRUTTÑ’‘PYÐ•QYÓ™ÒUPÞPP”UÝÙÐ•RPQÛÔPÚPQ”UPœ‘P\PU’ÑÛÔPÛ‘YÐ•QTXZRØÔœÚÝÝÒÝÐPPÝÐSPPSP\ÐPP\ÐPÝÐPPÝÐSUÝÚÝÜÙÐ•RÐQÛÚÐPÐSÍÕQPTMKÒ]Ð‘QÜÚPšTPRPV‘ÛÙÐPSÔU”Z”RRPTŒÐ]‘PYÐšLPÑRPSŽTœTTPÐPTQPÑRRPY‘\ÓPÐQYÒ˜ZRR’PYÙÐšÑRXZPQÔT^RPQYÐZ^ZTPLQTPÐQÒÐRSRYÔYÐŒÓTÐQYÑ˜ZQTPSœUœRT‘YÐQQQXZQTÒPSœPUœRTQYÐÑQLYÐ”ÒPÔV\RTUYÐÐÐPÔTRŒZYÐÐQUSP\ÙÐZÑP˜ZQSÔTQZ”SRPUYÑÎQ‘PYÐÐÐQ”TRŒYÝRÐRPRT]ÙÐTÐSZPRÓ™ÒPRPUUÛÚ”ÐRÒP^RT[ÓPT\ÓPQYÐÚ–PÐQQPRTUYÐšYÐÐÐÑSLYÐ”ÐSšÕQTPÐP’PUYÐÕÛÝPPZQQPÙÛÚQÐS’ÐRPRYÌPUÛÌYÐYÑPS”TQŒZRS’P]ÍPQYÑÐQ“ÙÐPRPUUÛÚ”]ÐÝÝPÑP’PSQPÜPUYÐ‘Q‹ØÞPRZQR”TQZ”SRPUYÑÎQ‘PYÐÐÐQ”TRŒYÝRÐRPRT]ÙÐ^PSZPP“™ÒPRP]ÙÐ”ÐR˜[”YÐUÛÚTÐQ”TQœRTUSPT\ÓPXÙÐ‘QP˜ZRP’PRœ’YÔœ”TQœRTYÑQQP’TUYÐÐRUQTPSRPUYÑÎQ‘PYÐ•QPÙÒR’PSYÐ‘QL‘ÜRPSYÐÕÛÛÐYÐYÐ’LYÐYÐ•QP˜ZQQ‘QSÞPQTTQœRTTSPT\ÓP’YÐžPTP[ÙÑTÐQPRYÐTšÒPVUÐP”ÐQÒPXÍPVYÐPÐQÒÐRQS™ÒPPÞPTRTUSPV‘QÛÚÐPÐQÎST]Ò]ÐŽPœ’YÕZÐQQœÒTZÐÔPÐQT\‘PYÐZNPPÑRÒPR]PRZÐPÓÐQRTVYÐ•QRXZPQQPMÔPÐQPVYÐÚPSX[\›[ÚQZÓPÐQ“PRÒTXÙÐ•RPQÛÙÐZÑQØZRPÒP[ÔPšRR‘PSSTÐQ”UPœ’PRYÐÛ[ÚPZPSQPVZPÔQQYÐ•Q[ØZPPÒP^RYÒYÐšQÒYÚÔP]Ì’PU‘QÛÙÐZPQØZPQPL\‘PVZPÔQQYÐPÐP˜ZRSÔV\RTNÐ‘QQXZQQÔTQZÔÐPRPQLœ[–ZP[[ÚPÚPPØZRSRPRœRYÌ^PSRTTYÐÚQPÐLYÐÔÐQPNR˜ÔTRPVYÐ•RPQÛÙÐžPÔTQŒZRRSPPRT\ÙÐ•RPQÛÙÐÐÌPTP’PPYÐÞ›ÐPPÐQÒPU”QÜÙÐžPÔTQŒZRRSPPRT\ÙÐ•QX^PRSPP‘PQYÐZPSÙÐPRPVYÐ•Q[ØZPRPRVœRYÙÝPPZÞPQ”TÚRPYÝPQTPTÐQRP\ÍPPYÐšPQ”TœRPXÔPZÑP™ÛÚPÐÌPPÑSPU‘QÛÙÐÐÌPTP’PSYÐÞ›ÐPPÐQÒPUŒPœRPXÔPZÑP™ÛÚPÐÌPPÑSPUŒPœRPYÝPQTPTÐPRP\ÍPQYÐšPQ”UPœ’PXÔPZÑP™ÛÚPÐÌPPÑSPU”QÜÙÐÐÌPTP’PRYÐÞ›ÐPTÐQÒPU’ÑÛÙÐžPÔTQŒZRRSPPRT\ÙÐ•Q[ØZPRSPP‘PQYÐÐSÙÐP’PVYÐ•QTXZPRPRVœRYÙÝPPZÞPQ”TœRPYÝPQTPTÐQP\ÍPQYÐLPØZQQPT[[ÚÐPÔTRœRTRYÐQQPØZQPRPZÙÐ•RPQÛÔQUžPU”QÜÔQUžPU’ÑÛÔQUžPU‘QÛÔQUžTZÓPT\ÓPTYÑ\ÙÐZPSTÌÒSQQœÒTZÙÐPÐRÔÝÌ’P\™•ÛÚÔSRPUŒPœQPTYÐPÐR•Ò‘‘PYÐšPQ”YÐXZPRPRVœRYÙÝPPZÞPQ”YÐXZPRSPP‘PQYÐPÐSÙÐPRPVYÐ•RPQÛÙÐžPÔTQŒZRRSPPRT\ÙÐ•RPQÛÙÐÐÌPTP’PPYÐÞ›ÐPTÐPTTRœRTPSPT\ÓLYÐ•RPQÛÔPÐPRP\ÚÕQTPÐQÒPUŒPœRPXÔPZÑP™ÛÚPÔÌPPÑRRPUŒPœRPZÝPQTPTÐPRPYÍPPYÐQQP˜ZQPQQSÝÓRPPYÐÚÚÑTPÐQÒPUŒPœRPXÔPZÑP™ÛÚPÔÌPPÑRRPUŒPœRPZÝPQTPTÐPRPYÍPPYÐQQP˜ZQPQQSÞPSTV\RTPQPÐQ”UPœ‘PTYÐZPPUÒ‘‘PYÐšPQ”UPœ’PXÔPZÑP™ÛÚPÚLPPÑR’PU”QÜÙÐÚLPTP’PRYÐÕÐPPÐQÒPU”QÜÙÐžPÔTQŒZRRÓPPRTZÙÐ•QX^PRÓPP‘PQYÐZPR“ÙÐP’PR[[ÚYÝÐÝÜÑPÐQ”UPœ‘PTYÐZPSUÒ‘‘PYÐšPQ”UPœ’PXÔPZÑP™ÛÚPPÌPPÑRÒPU”QÜÙÐPÌPTP’PRYÐÚ›ÐPPÐPÔTQœRTRSPT\ÓLYÐZPSTÔTRPVYÐ•QX^PRPRVœRYÐ]PPZÚPQ”UPœ’PP]PQTPTÐPÒP[ÍPPYÐZÑP˜ZQPÑQSÞPS”V\RTPQPÐQ”TÚQPTYÐÐPUÒ‘‘PYÐšPQ”TÚRPXÔPZÑP™ÛÚPZLPPÑRÒPU’ÑÛÙÐZLPTP’PTYÐÚ›ÐPPÐQÒPU’ÑÛÙÐžPÔTQŒZRPÓPPRT[ÙÐ•Q[ØZPPÓPP‘PQYÐÐRÓÙÐP’PT[[Ú]ÐÝÜÑPÐQ”TÚQPTYÐÐS•Ò‘‘PYÐšPQ”TÚRPXÔPZÑP™ÛÚPPÌPPÑPÒPU’ÑÛÙÐPÌPTP’PTYÐZ›ÐPPÐQTTQœRTTSPT\ÓLYÐÐS”ÔTRPVYÐ•Q[ØZPRPRVœRYÐ]PPZZPQ”TÚRPP]PQTPTÐQRPRMPPYÐ‘QP˜ZQQQQSÝÓRPU‘QÛÔPÐQPNTÚÕQTPÐQÒPU‘QÛÙÐžPÔTQŒZRPSPPRTRYÐ•QTXZPPSPP‘PQYÐ^PPÓÙÐPRPVYÐ•QTXZPRPRVœRYÐ]PPZZPQ”TœRPP]PQTPTÐQPRMPQYÐLPØZQQQSÝÓRPU‘QÛÔPÐQPMTÚÕQTPÐQÒPU‘QÛÙÐžPÔTQŒZRPSPPRTRYÐ•QTXZPPSPP‘PQYÐ^PPÓÙÐPRPSUÛÚ]ÝÐÝÜÑPÐQPMR‘PYÐšPQ”TœRPXÔPZÑP™ÛÚPPÌPPÑPÒPU‘QÛÙÐPÌPTP’PSYÐZ›ÐPPÐQTQœRTSSPT\ÓPQ˜ÐQ”YÐXZRÒPU”QÜÔPÛ‘YÐ•Q[ØZRØÔÐQ”TœQP\ÞQR‘QSUÝÚÔ\ÙÐ•RÐQÛÚÐPÐRÎÐÐTT‹Ò]Ð’QÜÚP”ÔPRPUYÐSÒPU]PRZžPQ”TZRPRYÐ^QÒYÒTPLQTPÐQTTTœRTRYÐPÐP˜ZRQV\RTTQPÐQ”TZQPTYÐPÐQUÒ‘‘PYÐZPQ”TZRPXÔPZÑP™ÛÚPšLPPÑRRPUÑÛÙÐšLPTP’PPYÐÑÐPPÐPÒPUÑÛÙÐžPÔTQŒZRQÓPPRTYÙÐ•QRXZPQÓPP‘PQYÐPÐRSÙÐP’PP[[ÚP]ÐÝÜÑPÐQ”TZQPTYÐPÐQÒ‘‘PYÐZPQ”TZRPXÔPZÑP™ÛÚPÌPPÑQÒPUÑÛÙÐÌPTP’PPYÐš›ÐPPÐPTTQœRTPSPT\ÓLYÐPÐQQTPÐPÒPUÑÛÙÐžPÔTQŒZRQSPPRTVYÐ•QRXZPQSPP‘PQYÐPÐQÓÙÐPRPPUÛÚP]ÐÝÜÙÐUQœÒPUÑÛÔPÚÚYÜÙÐ•QYØZTPRPRSÓPÖQQTX^RQÒPYÐšÑPS™ÒSRPVQPÐÑQ•RTTPÔPRRPS”QÜÚQÐQPVÑÛÙÐšÑSXZPP’PRTSTÒPÑPSSPÐQÔTTœRPPTQPQÒÐRSRYØÙÐšLP‘QP˜ZÜÓTÐPTTTœRT[ÙÐšÑPSÙÐQ’PVYÐž›ÐPšPPRPV[ÐYÔLYÐYÐŒP˜ZQR”TQZSRPTYÐÕZÑTPÐQPT[”œRYÑ[ÐYÐZPÐP’PULYÐYÐPÐQTV\YÐQ˜ZQQ’PTUÛÚ]ÐÝÜÙÐŒP˜ZQRTPZ”ÐQÒÐRRRTZÑPÐQ’P[ÑQYÐ^PQ’P^SPPRYÔ[”œRYÐTÐQYQP™ÒSPP[ÐYÐZPUÛÚPQPÐPÐRPTœ’TZPÑQPZÐYÐÌQTPLYÐÐS™ÌÒP[ÙÐTÐQXZÑP™ÛÚPPÐRSÙÐP’PPYÐ•ÐPPÐQTTQœRTTSPPPSP\ÑPÐP’PP”QYÐÚPP”TQŒZRQRPYÍPQYÐÐQ“ÙÐPRPTYÐÑÐP^PQRPUMPRYÐÐRSÙÐQ’PTYÐ•ÐPÐQRPYÍPXÙÐÐQ“ÙÐQÒPQ‘ÛÚT]ÐPP\ÐPÞPQ”TQœRTUSPPPSP\ÙÐZQQPÞPQÔTœRPYÐ]]TQPÙÒTVTYÒÐRPRPP’PP[ÐYÐVZP^PP˜LZRPÔVTZÙÔ‹ÒPRQ’PSTRŒSTÐPÔTZPÌTTÔLRPPYÐPÙÐÐPÒPÔTQžPPYÐUÜ‘œ™RZPTÐPXLP™LYÐYÐTÐPS™ÒQRPQYÐTÙÐÐQQP˜ÔÐPRPRVœRPQœ’YÒVžS™ÒPTVTYÒPQYÐZÒËËËËÐŒÑœTTTœTVTYÒÐRPRPP‘ÑÞPP“™ÒPRPQTR”\ÓYÒP–ÔPRPZÐYÐQQRRPPÑ\Ø–ŒY˜ÞPPXUQP”Œ›ÚPUQQTÔÐPRPQŒ˜ÙÌRPQ[”‹Ð\RÐRPRYÒ‘‘PQPÐPÔVRYÓ[ÐYÐV™QÛÚP”ÐPUÔRPRYÐ•QRRPUÑ\Ø–ŒY˜ÌPÙQÐR›ÚPTÙÐÐQVQTPÐP’PR[ÐYÔLYÐSSSPT’ÜÓTÐQTTQœRTTYÐZYÐÐÒPÑPSÌPRTSYÐUQYÕÌLYÐUQPÙQÐR›ÛÐYÐZPZÕQTPÐP”TSTRYÐUQP˜ZQP’PR‘‘QSP]ÜÓPRYÐZÑZRQÐRPTTQŒ”VRYÑÐÐP”TZÌ™’Ó[”™ÐŽ\RYÑ[ÐYÐ‘Ð‘PYÐTÐPÒÐRQS™ÒPPÝÜÙÐZYÐÐPÒP‘PYÐTÐPÒÐRQS™ÒQPÞPPÒÐRQRYÑQTPÐP’PR[ÐYÐLYÐSPSYÐ^YÐÐQQP˜Ú–PÐPÐQPPTSÜÙÐ]ÝšÝÒS™ÕŠÒ]ÐŽPœ’YØÚÐPÐRPP[Ð]‘TÒRS™Ò˜ÒPQYÐ[[ÚÐRRPP[Ð[ÑPUÛÚÒPZÐYÐ•UQTPÐP’TTSPT\ÙÐPÙÐÞÐP’TYÐPÙÐÝÓÐP’T‘YÐPÙÐÝ“ÐP’TMÐQQP“™ÒÓMQPÑRPLYÐÑQQÔRPXÙÐÑQPÙÒPØZPPRPRœTX^”PUÛÛÐYÐLZÔYÐÑQP˜ZQRQQSÌœÒT]ÙÐŒVXZPQPTTPšQQYÐŒ\ØZPRTšRPP[ÐYÐTQ^PRUœRPY‘ÑÛÙÐPÙÐÐÐUPY”ÛÙÐŒVXZPPRÐRQQP“YÑQ™ØZQTÒPQZ‘QPRT]ÑPÐRÐR]ÒPXÛÐZ^LÔœRÔRPRZÑRZ[”YŽ˜ÔÑRRPXÛÐZÐYÐžYÐÔQQÛÜYÐZQ•RTZRÙ‹ÝÑžT\ÙÐžYÐÓÐÐRÐRLTSŒZZÐÐPÒUÔZPÒ\QR’P•ÒRYÚžPUTZPÒ\QPÐZÐYÑšÒTZRÙ‹ÝÑžYÓZÎTPRRPV‘’PS‘Õ[T”TRPZÙÐŒVXZPQTÐYÐžYÐÒÜÚPÚPRÒPS“ÞRRÑPUYÐ^PRØ^RQÛÚÔÐRTšQPTXRPS‘‘QYÐŒVXZPQPUYÐÕÛÚÔ]ÐÞPRTšRPSTP”ÐR˜ZQR’PY‘ÑÛÔP›ÓPXÜZÔZÐÐRPZÌZÔYÐžPVSÓ’QQSZÐYÐLQTPÐPÐ‘PYÐžYÐÔÑR‘SSPXÛÐZÙÚÔ]ÐÝÒPZÐYÐŒVXZÑP‘PUYÐÔÐPÔ•ÜRYÓLQTPÐRÐR‘TV\RYÓYÐLœRTZÓPT\ÙÐLPÙÐRZYÐÔÒR’P[˜ZQR’PSUVST\ÙÐžPRÐR’S™Ò“PÝÜÙÐžPRÐR‘S™Ò’RPXÙÐÕPÔ\ÙÑ˜Ú^PS‘PYÐŒVXZPSPUYÐL›Ú]ÜÙÐÐÐSZÑUUÔRPY‘ÑÛÔP›ÓPYÑTPÐRTšRPYÔP”ÐPØZQPÐÞPRTšQPTXRPXÙÐŒVXZPUTZR\ÐVTPÐÐU\ËÝÓžZ–PÓÐRPY‘ÑÛÙÑ•RVZRÙ‹ÝÑžPYÙÑ˜Y‹ËÎÕÛÌZÙÐŒVXZQQÚPRPY‘ÑÛÙÑšÒVZRÙ‹ÝÑžPYÙÑœY‹ËÎÕÛÌZ”YÐžPPÓ™Ò™ÒPXÛÐ[ÚÚPRPZÌ[YÙÐžPQ™ÒšÐZÐPÔPRRPTYÐZPQZRSZPTÔÝÌRPRYÐÛ[ÚQ^PTÝÌRPLÐ‘ÜÙÐÌYØZÎT\ÙÐžPRÔS›ÓÓTRPXÙÐžZÑQÑÐÐQRPLÐŒRXZPRYÐXZPTPMÑTÐTQPÝÝÐÞPPÒPTœRTYÙÐÐRÑPXÙÐZÑT•ÔRPT‘QÛÚYÓRPRYÐÚÑTXZRRÑPXÙÐZÑTXZRPÒPZ‘PSÞPRRP[’TRYÐžPU™Ò˜ÒPZÙÐÐÐSØLÑTPÐR’PYÙÑUÝ‘P˜ÑSRSPYÐZPSØ^RPØZRRÒPSœRP“‘PYÐÐÐRÒPSTQÓPYÜÙÐÐÐRÔTPYÐ[\ÔQQRRPXÙÐZPQZRQ™ÒšÒPYÙÐ[\ÚÐÐSÒTRSP[‘QNTPÐQPZRTSQPÐRRPRTPžPPÔTœRTRYÐÑQTXZRRRPS’‘PSQSZÐYÐÕQRTRPYÙÐZLPQÐPPÐRRPR]PQMPQYÐÐÐPÓPPÓÙÐPÒPYÙÐZLP^›ÐP^PRTTTœRPRYÐÕQPÙÒQXÐYXZYÐÐQÛÚPZVPRYÐLÒ[ÛÐYÐœ’TRYÐžYÐÖÑQQSPYÙÐZSPÞPQT[‘PYÐ^PRXZQQPZÑÛÚPÐÐPÔTZRYÒœ”TNSP‘PQPÐRRPRTQÐPÔTZRTRYÐÑQRXZRRRPS’‘PSPYÐSP\ÑPÐRRPRTPžPPÔTœRTRYÐÑQTXZRRRPS’‘PSÞPRTšQPTXRP\ÙÑÐSPSZPZÚÐQRPTYÐÌ›ÙÐZÚÐQ”V\RYÕSP\ÙÑQQ˜ÑSRPY‘ÑÛÔP‘QPÔÔL”TPZÐSRPZLÑTPÐPRPZ[”ZP[\œ“P˜ZPPÒPYRÐR‘S™ÒPRPZUÛÚÐ]ÐÝÜÙÐžYÐÖÑRPÌÍ™žQSRPNÐÑÜÚPPÐS’PTœ”ÝÌRPTQYžPQRPYÙÐPSPPœP•QPPÞPP˜^QSPÞPRYPXZTPRP]ÓÔ˜ÐÑ›Ž™šSPTYP˜^RRPYÐžPPRÐSÍQZPÑPÝQYÐTÐPØZQTÒPYÙÐPÙÐÙÓÒP˜ZQUZÐPÔPÐQ””TRPQZ]ÝÐÞPPRÐSMQZTÐPRÐSMQZ”ÐPRÐRÎQZPPTTQL[ÞšUQPRTYÑPÐRTTS’‘PYÐžPRTTRŒYÒœRPPYÐ[\œ“P˜ZYÐÐQPÕÐRTTQœRTYÓPT\ÓPXÙÑUPÖÐRPN[PYÐžPP’PN\“™Ò›ÔUÝÚPÐRTÚRPSYÐQÑPSSTÐQ”TTYÐ•QQTÐœÚžPRURPY’ÑÛÙÐPÙÐÐPUPYžPœRPY’ÑÛÙÐPÙÐÐÐUPYžPœRPY’ÑÛÙÐPÙÐÐUTPZÐRYPPXZQSRPYPPœRT[ÑPÐRTÚQPTZÜÙÐÐV’‘‘PYÐžYÐÔPÐRÐRNTSŒZZÐÐPÒYZÒ\ÐVZÞPRÐR”RPXÛÐZÞLÔœRÔRPRZPÑRZ[”YŽ˜ÔÑR’PXÛÐZÙÙÐžYÐÔ‘QQÛÜYÐZRYÚRØÚÐÐYTZPÒRTÐYÒRYÚRØÚYÒRPŽPÑRZ[”YŽ˜ÔÒQTR”‘PPÔPÐQÔ”ÐQT›˜ÚÕQTPÐRRPY’ÑÛÙÐLYÒPXÛÐZ^’YÌÑÐQÞÚQQ’PSYÑÜÚPLÔœRTYÙÐŒ[ØZQQÚPQ”L’PY’ÑÛÙÐ^Q’PZRTYÓPT\ÙÐŒ[ØZPQPUYÐÑÛÚÐÐRTÚQPTXPÞPRÔR•RTÑYÐžPRS™Ò•RPXÙÒUÑÐ]ÐÝÒRPS‘‘PYÐYÔRPXÛÐ[ZÐ]ÑÞPRÐR–RTYÓPT\ÐÔPRRPY’ÑÜTQ’PYÙÐZÕœXZRQTS‘Ð‘PYÐžYÐÕ‘Q‹ØZRQPS‘˜ZQRQQSPS[”YÐŒ›ÛÐ[ZPÐÐRT•ÛÚÐÐQTQ‘ÑQSPXÙÐžYÐÕÑPÖ\ÓPXÙÐžYÐÕ‘PÕÐÐRPYÌ[SPÐÛ’TSYÐÔTRPY’ÑÛÙÐÔQ’PSœRTSSPZÙÐÌœ‘‘NTPÐRTÚQPTXPÞPS‘PYÐŒ[ØZPSPUYÐ[[ÚYÜÙÐŒ[ØZQQÚPRPXÛÐ[YÙÐ[[ÚPÔÐQZ–PØPÐRÒP]ÙÐÐÐR”ÞÛÐYÐZÐRPY’ÑÛÙÒRVZRÙ‹ÝÑžPYÙÒY‹ËÎÕÛÌZÙÐžPRTÚRPPÑÒZ[”YŽ˜ÔRRP›”Y‹ËÐLÑœS™Ò“RPY’ÑÛÔP›ÙÐŒ[ØZPY”ZR\ÐVTPÐÑSÒPYŽPœRPT’œRYÜÙÐÔÐS˜ZPRX^–PÑÐSPYÌYÙÙÐÞPQ™ÒQRP\ÙÐZ–PÐPÐRPMÒ™‹ËÎÕÛÌZÔYÐ‘QP˜ZQQQQSÞPQRP™QQYÑZÑ™ØZQVRPYPœRT›ÙÐŒÐQÛÚÞPP’TSQPÐRTÚQPTZÜÙÐÐQ•’‘‘PYÐžYÐÔPÐRÐRNTSŒZZÐÐPÒYZÒ\ÐVZÞPRÐR”RPXÛÐZÞLÔœRÔRPRZPÑRZ[”YŽ˜ÔÑRRPXÛÐZÙÙÐžYÐÔ‘QQÛÜYÐZRYÚRØÚÔÐYTZPÒRTÐYÒRYÚRØÚRRPŽPÑRZ[”YŽ˜ÔÒPÔTR”‘PPÔPÐQÔ”ÐPÔT›˜ÚÕQTPÐR’PY’ÑÛÙÐZÑYÒPXÛÐZ^’YÛÙÐÚPPÔÞÚPÚQ’PRYÐÛ\ÚP[”œRTZÙÐŒ[ØZQQÚPPÔ”L’PY’ÑÛÙÐZQ’P[RTZÓPT\ÙÐŒ[ØZPPÑPUYÐÕÛÚÔÐRTÚQPTXPÞPRÔR•RTÑYÐžPR“™Ò•RPXÙÒUÑÐ]ÐÝÒRPR‘‘PYÑTRPXÛÐ[ZÔ]ÑÞPRÐR–RTZÓPT\ÐÔPRRPY’ÑÜTQ’PZÙÑUœXZRPÔTS‘Ð‘PYÐžYÐÕ‘Q‹ØZRPÒPR‘˜ZQR‘QSPR[”YÐŒ›ÛÐ[ZPÔÐR”•ÛÚÔÐPÔTQ‘ÑQSPXÙÐžYÐÕÑPÖ\ÓPXÙÐžYÐÕ‘PÕÐÐRPZÌ[SPÐÛ’T”YÐÐTRPY’ÑÛÙÐÐQ’P”œRT”SPYÙÐÌœ‘‘NTPÐRTÚQPTXPÞPS‘PYÐŒ[ØZPSPUYÑÛÚ\ÙÐŒ[ØZQQÚPRPXÛÐ[YÙÑÛÚQÔÐUXZ–PØPÐX’P›ÙÐÔÐV”ÞÛÐYÐZÐRPY’ÑÛÙÒRVZRÙ‹ÝÑžPYÙÒY‹ËÎÕÛÌZÙÐžPRTÚRPPÑÒZ[”YŽ˜ÔRRP›”Y‹ËÐLÑœS™Ò“RPY’ÑÛÔP›ÙÐžPRTÚRPŽPÑÒZ[”YŽ˜ÔRRPŠÛ”Y‹ËÐLÑœS™Ò‘RPXÙÐŒÐQÛÙÐ‘QQÕQQYÛÚQÚÑÐÒYÔPTÐRPL]ÐZR˜ÑÐQPÔPRPZÐYÐžYÐÝQZQPY\RPØZRUÒP““PYÐ^PRÐSPTÒRÒPRœRYÝRPšPYÑZPQ^PSTÐœUÌÞPRPXÜNÐ“ÓTRPXÙÐžZÑÐQLÐ]ÙÙÐ^PTÒPYÑÛÙÐŒÎUÛÙÑ^PTP•YÑTYRT\ÓPT\ÙÐZPQZQRRPSYÑRPR‘UNTPÐQTœRTRQPÐPÒPMP‘QÛÚQRPR‘QÛÚPZPRTÔLPÝÜÙÐÐÐYRSØ^QPÒPXÙÑš–PÝQYÑPRRPN\”ÝÔRPMÐÐÐU˜LÑTQQœÒT\ÓPYÜÙÑTÐPÒPN\’YÒœRZYÐÛ[ÙÑULTPÐRRP–YÐÚTÙÝÐÐÞPRRP–PÐPØ^TTYÙÐžPPÒP\RYÛÌ\ÔP’PYÙÐ[\ÚÐÐTTRSPMP‘QNTPÐRRP\RT[ÑPÐRRPRTPžPPÔTœRTRYÐÑQTXZRRRP\‘PSQSZÐYÑÑRTRPYÙÐZLPQÐPPÐRRPR]PQMPQYÐÐÐPÓPPÓÙÐPÒPYÙÐZLP^›ÐP^PRTTTœRPRYÑÑPÙÒRÔXÐYXZYÐÐQÛÚPZVPRYÐÚÒÒ[ÛÐYÐœ’TRYÐžYÐÞQZÙÝÐÞPRRPRTQ\ÙÐÚÑR”ÔLRPYÙÐÛ[ÚÚPRTTZRYÙÙÐZÑRXZRPØLTTPLYÐÐÐPÑP]ÙÐZÑRXZQPÒPZÑÛÚPÐÐRÔÔLQRPPÝÐSLYÐÐÐPÑPXÙÐZÑTXZQPÒPZ‘QÛÚPÐÐRÔÔLPÝÜÙÐÞQ‘PYÐÞQTQTQ’PLÑPÐPÐS’PšÙÒÛÙÐÕÜÌYÝÙÑÐR“™ÒRRPLÑ‘PÐÐQTTQœRTTYÐ^PSZQQRSP\ÓPTYÐ•YÓTÐQRP™’T]PÑQPLYÐÞPQ”ÐTRPXÙÐŒÐQÛÙÐÌQÕQQYÛÚPZZÑÐÒYÔPTÐRPR\]ÐZR˜ÑÐQPÔPRPZÐYÐžYÐÝQZQÐY\RPØZRRÒP““PYÐ^PRÐSPTÒR’PRœRZœRPšPYÑZPQ^PTTTÐœUÌÞPRPXÜNÐ“ÓYÒPXÙÐžZÑÐQLÐ^ÙÐ^PTÒPY‘ÑÛÙÐŒÎUÛÙÑ^PTP•YÑTYRTSPT\ÙÐZPQZQRRPSYÑRPR‘UNTPÐQTœRTRQPÐPÒP^‘QÛÚQRPR‘QÛÚPZPRTÔLPÝÜÙÐÐÐYRQØ^QPÒPXÙÐÚ–PÝQYÐšPRRPN\”ÝÔRPVYÐÐÐU˜LÑTQQœÒTSPYÜÙÑTÐPÒPN\’YÒœRYÝÙÐÕÛÙÑULTPÐRRP]ÙÐÔTÙÝÐÐÞPRRP^PÐPØ^TTYÙÐžPPÒP[RYÚÌ\ÔP’PYÙÐ[\ÚÐÐTTRSPV‘QNTPÐRRP[RTVQPÐRRPRTPžPPÔTœRTRYÐÑQTXZRRRPV’‘PSQSZÐYÐšÑRTRPYÙÐZLPQÐPPÐRRPR]PQMPQYÐÐÐPÓPPÓÙÐPÒPYÙÐZLP^›ÐP^PRTTTœRPRYÐšÑPÙÒQÔXÐYXZYÐÐQÛÚPZVPRYÐšÒÒ[ÛÐYÐœ’TRYÐžYÐÞQZÔ]ÐÞPRRPRTQ\ÙÐÕQR”ÔLRPYÙÐÕÛÚšPRTTZRYÙÙÐZÑRXZRPØLTTPLYÐÐÐPÑP]ÙÐZÑRXZQPÒPZÑÛÚPÐÐQÔÔLQRPPÝÐSLYÐÐÐPÑPXÙÐZÑTXZQPÒPZ‘QÛÚPÐÐQÔÔLPÝÜÙÑPQSYÐÌP˜ZQSPSYÑQÛÚ]ÝÐÝÜÑPÐQTTS’‘PYÐPÐQTTRŒYÒœTX^”PUÛÙÐZPRZYÐÕ‘PÐPÐQTTQœRTTSPT\ÓPXÛÐ\Ð’TYÓXœÒTYÑ^PRX^RPRP’YÐLPYÐ]Ô‹ÒPSYÐÐÐPQP\ÙÐQÛÑ”TPSPQœ’TSPYŒQœRPYÑP\ÛPÐPTYÐLÐYÐYÐQQPSÝÑRRPPQÐPÞPPRPQLYÝÙÐPÐPÓÙÐRÐÍÔQTS‹Ò]Ð“QÜÚPÔPRPP‹ÝÑœRYÕ™•ÛÚ™ÒRPS]TRQTPÐQTTšRPQYÐZQÒYÒTP]Ì’PT‘QÛÙÐ‘QVXZPQPÙÐ‘QRXZPQTTšRPSTRÐPRTSQPRRPT‘ÑÛÔPÐQPV”ÚÕQTPÐQPT‘QÛÙÐ‘QVXZTÓÙÐPRPSYÐ‘QRXZPQTTšQP’MPQYÐ‘QVXZQT”L’PS[[Ú]ÜÙÐ•QŠØZQQ[ŽQQÍ™žQPÒPSZPTÐQ”ÝÌ’PQYÐ‘QTXZPQTTšQP’MPPYÐUQP˜ZQQPT‘ÑÛÔP‘QQ™ÔTTRZZPQTTZQRSPSYÐ•\Ó”ÐP’PTÑÛÙÐ‘QVXZTÓÙÐP’PQ[[ÚLQTRYÐ‘QVXZQTTS’PSPT‘QÛÓTUYÐ^PQ’PT‘ÑÛÔQZ›ÐPPÐP’PRœRPPœ’TRSP]ÜÙÐ^PQTTœRPT‘ÑÛÔQZ›ÐPZPQPTÑÛÙÐ‘QVXZTÓÙÐQPS‘ÛÚ]ÝÐPP\ÐPÞPQTTšRPQYÐZQÒYÒTP]ÌRPT‘QÛÙÐ‘QVXZPQPÙÐ‘QRXZPQTTšRPSTRÐPRTSQPRRPT‘ÑÛÔPÐQPV”ÚÕQTPÐQPT‘QÛÙÐ‘QVXZT“ÙÐPRPSYÐ‘QRXZPQTTšQP‘MPQYÐ‘QVXZQT”L’PS[[Ú]ÜÙÐ•QŠØZQQ[ŽQQÍ™žQPÒPSZPTÐQ”ÝÌRPQYÐ‘QTXZPQTTšQP‘MPPYÐUQP˜ZQQPT‘ÑÛÔP‘QQ™ÔTTRZZPQTTZQRSPSYÐ•\ÓÐP’PTÑÛÙÐ‘QVXZT“ÙÐP’PQ[[ÚLQTRYÐ‘QVXZQTTS’PSPT‘QÛÓTUYÐ^PQ’PT‘ÑÛÔQUÐPPÐP’PRœRPPœ’TRSPYÜÙÐ^PQTTœRPT‘ÑÛÔQUÐPZPQPTÑÛÙÐ‘QVXZT“ÙÐQPS‘ÛÚ]ÝÐPP\ÐPÞPQTUœRPYÐYÝTQ‹Ð[ŽÔPRRPRŒPÐP’ÐPPTX™’]ÝQŠÔÌRPPYÐTÙÐP‘PÛSÒP”UÒYÐQQTXZPP’PRTTRQPSSZÙÐQRÐ™ÒPÐQQÑSÑP’PPYÐTÐQZPPÒPSœ‘PÛÓPT\ÙÐPÐP’PRTRÙÝP\Ó”SP›ŽQQÐPUÜÚP^TPTUÒZÐRRPRÕZÓPÐPTVš”PQÛÙÐUQRXZRQRPR™QÛÙÐQQÖLPTS^RQ‘PSZP™ÌRPS’–PÙÐQPS‹ÐPœRPSŠÐPœRPTYÐÐQ˜ZPQÑÞRQRPQYÐ[[ÚPZPQX^U’YÕTP]ÌRPS[Ð[ÚPšÑY”ÝÌRPS[Ð[™ÚPŒR•ÌRPPšPÐœRPSYÐšÑÐPÌÐQÐRP™ÙÐLL™ÒŽPSYÐLQÛÙÐLQÛÙÐÐQ˜ZRQRPRYÐ‘ÜÔQ”ÒQ‘PSSPÐQÐRŽYÖ“‘\ÓPÐQÐRYÙÚÎPÐPTV]ØZPQPV™ÐLPMÐžVRPS’^–PÙÐQPS‹ÐPœRPSŠÐPœRPTYÐ•ÛÚPÐPÒPTœ‘P•ZP”QPYÐ^YÐÙÒQÔTÓ“PYÐ^YÐÙPÒRT\PYÐPÐQPVÐŒ‘YÐžVRPTYÐ•ÛÚP‘QSXZRQ’PR“PYÐZPQ˜^QQ”TPZYÓRPRLÑTPÐQRÐPPRYÖ™Œ›ÙÐ•NZPPRPR[”œTVž”PUÛÙÐš–PÐPÐPÔTQœRTRYÐ‘QQXZQQQQSÞPQRPQœ’TYÓPS™ÐQœRPYÐÐ]ÐTS‹ÒPPÑÛÚ^PPRÐRQRTRPÑPPLYÐPÐPÙÕQTPÐP’PSYÐQQQÛÝPR‘šÝRTQYÐQQP˜ZQPQQSÞPP”TYÙÐ[]ÍQTU‹ÔXšÒTXÐÔPÐQ”LRPR]PPZP‘UQTPÐP”TPLYÐUQÍžPQTQ‘ÑÝÎ[ŽÐZÑP˜ZRQ’PT‘Ò‘ÒZPšÑ‹ÔÙÌQÚPQÔVQÐ‘PYÐLQÐLÒPU]PP™Ô˜ZQQRPRL›ÓPT\ÙÐLPÔÐL’PR]PQYÐ‘QRY™ÒPŠØZQQRPR[[ÓTUYÐTÐQS™ÒPRPUUÛÚPTÐPÒPSœRYÓ“P˜ÑRPP‘QÛÙÐPÐQ“PPRYÕ›–’LR’PQYÐ^PP˜LQQRQURÑZPPRÐRÓMQYÐPÙÐÛ“ÒP’PTTRRQÑPSZPÐLRPP›PÐœRPPÑÛÙÐ•QQYÑQÕQY”TYÙÐTÐP’PVœRPYØ’YÑYÐ^PP˜LÐPÌÐQQÐQžPPRÐRÓMQYÐPÙÐÛ“ÒP’PTTRRQÑPSZPÐLRPP›ÑœRPP‘ÛÙÐ•QPÙÑQÕQLTZÙÐTÐP’PVœRPYØ’YÑYÐ^PP˜LÐQRÑÑÔQÔÐPRÐRÓMQYÐPÙÐÛ“ÒP’PTTRRPQPSSPÐPRPQœRPRœ’TXÓPXÓ”SPÛŽQQÐP‘ÜÚPÐÔPP[ŽP•ZPPÔYŽ”ÝÌQÚÑ•RPS‘\ÓP›ÙÐZÑP˜ZQSPP‘ÛÚÕQÐYÐTYÐL‹Ø[”‘RZÚÑPRTRTÑQTTQYÐLÔZPŒ‹ØZRSRTUQPÐPÒP]Ô”TPZÐYÐTÐPÔTQŒYÌ\SÑPRYÖ‹ËÎ™ÔRPZÙÐ•QPÙÛÙÐZ›ÐPZPQ”V\RTUTÑQÑQSPTPÐRÒPV‘R‘R’ÑÞQQPÞPRRPL\RPVMÐTPYÐZÑP˜ZQPÑQSÞPPRPTMÐTRYÐPÐQÝÑPRPYLÖYÐŒP™\L›ÚšÑPRTTPÑPÐLYÐÐSšÕQTPÐP’PTVœSÑPRT\PÑPPLYÐPÐRÕÕQTPÐR’PR[”œRPTMPRQPÐPÒPVœRP^YÒYÐ•\ÓP\ÙÐQQP˜ZQPQQSÞPQTTQœRTTSPT\ÓVÐYÌQÚÑPRTRQžPPÒPYÐ’PPUYÐÐÐR’PR[”œRYÐ]PRVœRYÑYÐTÎPÒP”TQœSÝÑPRPPYÐ^PP‘P”œ’YÕMPSYÐPÐP’PU‹ÝÑžÐR^œÐPÐPÔTQœRTRSPT\ÓÞQQ’PZ™ÐTœRPYÐ”]š™ÑRYŒœÒTXÐÔPÐPÔTS’‘PPÔPRPZÐPÔPÐP“PPRYÓLÑZPÕQP˜]Í]ÑPPYÜÙÐPÙÐÚSÑP‘P–YÎPR•ZÓZÑQTVYÐTÙÐPPÑQ[ŽÔPRRPS[–LÑZPÑQŠØZRQTTQ“‘PYÐ‘QP˜]Ì‘RSPU‘–‹ÝÙTTYÐ•QQYÒÐŒÑZ^PRT”]ÐÐÞPQ”T’Œ’TTÑQÒPU’‹ËÎXÔÑQTPSPT\ÙÐ•QQYÒËÝÎ^YÓ™ÒPRTÝÌPQ]PTÛ”YÐ•QUÙ’Z‘QQ’TVP\Ú”ÐQRPVœRYÛÙÐZÜÓYÒRPS™ÔV’‘PYÐPÙÐÛ“ÒP””LTTPZYÓRPR™ÍP”ÝÌ’PR”QÜÚYÝÐPP\ÐPÝÒ‹ÒP[LQTPÐP’PVœRTQYÐQRÍÑœRTRYÐPÙÐÑÑQÒPUQTPÐPÒPSYÐTÐQRPVTVÝÐÐÞPPÒPSYÐTÐQRPVTV]ÐÞPPTXš”PUÛÚZPP’PVœRTQYÐQRÍÑœRTVYÐQQÛÌPœRTYÙÐ”TRPYÙÐšPQPQYÐÐPÑQPT\ÙÐÐÐQÒPSYÐTÐQRPRTV\ÔP]ÌÒPPYÐ^–PÙÓÒP’PPUPÚSÑP’PPYÐQRÍÑœS™ÓÍQYÐÕQPÔ™ÔRPPYÐQQÛÌPœS™ÒSPÞPPRPSœRYÐšSÓP˜ZÒPSÐPRPP™ÓÓP˜ZÒPSÐPRPPŠÓÒP˜ZÒPSÐPRPPŽÒP˜ZÒPSÐPRP[ÔÝÒ‹ÐZÐPÔPRRPS[–LÑ™Œ›ÚP‘QPÔÝÌRPTUÜÓÐYÐPÐT]TÑQRPSLÖSPYÝZQQRPQ]PP’SPT]^QQRPQTRUQQYÜÚP^PQXZRQ”TÐœRPR“‘PYÐ”ÐPÔÝÌÒPPŽÒP˜ZPP’PTœRPSTPÞQP’PPYÐ^–PÙÓÒP’PPYÐUPÎÑP’PQYÐL›ÚPQRPSÐVRPPÐQÐQPÐPTYÐLÐPYÙÐQRPSÐPRPUTÞPPRPSL[ÑPTÐPRPQYÐ‘ÛÌ]‘TÐQ‘ÜÐÙÒPZÐPÔPÐQTRŒ”TSžV\RYÔZÜÓPÐQTTQœ‘ÒPPYÑSTQZžPQTSŒ‘RSTRZžPP“ÐPTTTŒ‘QSPR‘ZÙÐTZYÒšÐPU]QQ^QRPR’STRYÐQRÍÑœRPQYÐŒ›ÝPPYÐZÑYØZTRTQYÐPÐPÓ™ÒÐMÑYÐPÐP“™ÓÍQYÐŒP˜ZQRÞPRÌÐRPPÊÙ\”LÙ’›ÙUQÑPÐPTYÐLÐ^ÙÐQS]ÊÌÙ\Œ•RLÐ^YÐQSÍMŒ’ŽYPPSÓRRPPÐQÑPÐPTTÚTTP’ÐTQÙÝšPYÒPÙÕŠÒPP’ÑÛÚPTÐPRÐR’XZQPÐ[ÐPÚÑPÒQZP˜P‘PYÐPÚÑPÒQTYÙR’PP\]ÙÚP•RPšVÙÐPÚÑÐÒQÔYÞR™ÐPRÔSYÒYÙÑ[ÛPUTQÔÐQQPšÙÐšV’PXÔQÔ]ÐÞPPRÔSVT\Ö˜“XœœRŒÝÓPSŽTSQPÐP”TZRYÐYÐZÌTQRPRPQ\PPTPÔÐQRXšURÒJÝ›S™[MMKÙšÓŒÓ\U‹ÓMÞNVU‹ÙÑQPPZT]ÐÝÜÐÔPÐP”TTœRYÐYÐZÜÑTPÐP’TPSPT\ÙÐTÙÐPRÌPÚUÝœZLŒÜYYŒÍÐMÑÞŽX•N[ÙšÓNLÞY˜Vœ^ŽTSSLYÐPÐPÔÔTRPP^PPÞËÖœÝ’][Û™šPQRSURÒJÝ›S™[MMKÙšQQPPUÛÚP]ÐÝÜÙÐLZPÐQS]ÊÌÙ\Œ•RŠÒYÓÒYÙÐMÊÙ”›Œ›X\ÕÙšRQZPÒRPSÑÊÎÐYÒ‹Ð’ÐPÐPRÔSPRPRÝ‘ÑPRPZÐYÐPÙÐÔÐÒQPRœRYÔ’TPÐP””L’PPYÐLœ’ÑÛÙÐTÐPÑPÐYÐPÙÐÔÐÐPØZQQQQSPQYÐ[[ÚYÒ‹ÒPSQTPÐPTTÚRYÔYÐL›ÙÐUQYÒPSœ‘PÐYÐPÐPRÔSRRPT\PPTPÕÑÐÐPRPP\^YÐPÚÐSPR“ÓTRPPYÐPÚÑÐÐPRÔPMPZÌÐ^ÙÐPÐPRÔSYÒPP”QÜÜPPTPÕÑPÐPRÐR’RTSYÐQQPS™Ò’RPQYÐL’QÛÚT\ÙÐUQYØZPPÕ\ÑTPÐPÔUÐœRTSYÐPÚÑPÑQ’PP\^ÚšPPRÔSTRTXÙÐPÚÑÐÑRPLYÐÐÐP’ÔPPQPZÚÐÐRPQ\PYÔPÔÑRPVYÐTÚÐQPR’TVYÐ”ÐP’ÔPVQPZÚ”ÐP”TÐœRYÑYÐLP\ÙÐPÐQ“ÓYÒPPYÐš˜ÑÐÐPRPXÌÐ^YÐPÐRSÓRPÞPP’PR”QYÐQQ[ØZPP’PRYÐUÜÚPYÐÞPPRPTLZÙÓÞNVÐQUQTQQÌ™ŒPRPSX‘Ý[ŽÐQPQ“’ÐPÐPÒPSTQP›ÙÐ]Õ[ŽÞNVÐQUQTQQÌ™ŒPRPSX‘Ý[ŽÐQPQ“’ÐPÐPÒPSTPÞÙÐ]Õ[ŽÍ™ÐÐTV‹Ò]Ð‘QÜÚPžTPRPPŒ“ÐP˜ZZÑQRÐYÒPTUšQRTXšÒTUPÔPÐQTY‹ËÐŒÓPÐPRPSYÐÒYÕTP^RQÑPYÐPÙÐÛ“ÒP’TZÙÐPÐRT^RPSYÐ^PQ˜ZPQÑÞRRÒPTPÐQ’PVX˜^RQÑQPZP^Q‘PYÐ^QQ‘QSPXÛÐYÝÚÐP””TTXœÒTUYÐ‘QPTÙÌÞPQÒPSœ’TUYÐ^PRØZQQZÐYÐÔTRPPQPÛ“ÒP‘QSZÐPÔPRRPT•YÓPÐPTY™ÐUÛÜ]ÐÙÒPÐPÑ™ÓP]ÐÞPPTTPL\šPT]ÐÞPPRÐRRQQšPPTTPL\šPTÐQÔT””QSPPYÐTÐPÒPSYÐ”ÐQRPYÔSÔÑQ‘QSPPYÐTÐPÒPSYÐ”ÐQRPYÔSÚQQÞPRTœRPYÐ”]PÐPTYÐUÛÙÐTÐPÒPP[Ð]^šT]RYÑTP]ÔRPQTÌÍžQPÐZÐYÐTLRPPÓÐP˜ZYÐÐPÒP‘P–PÑPÒPP[Ð\šPTÐP”ÌÌPRTRYÐQRÍQœRÐRPT”LRPPšÓÑP˜Z‘ÞPPÐÞXÐVUžRQT”TTUPTÞPQRPPYÐTÐPÒPSYÐ“QNPÐQQQ–YÐP\ËÐTQ‹ÐZÐPÔPRRPP[Ð\QPUQP˜ZRP”TR“PYÐUQP˜]ÍÐPQPÐÞPPQQPNPPQPÛÓÒPÞPPRÐRÕMÑSSPÐŒÎ™šSPTTœ’YÚÚÐQQÍžQQÐZÐYÐÙÐÐPÒRTTUÔÐPRÐSÍQZP”‘PYÐ^YÐÐPÒRTQ”ÐQ‘ÞPQ‘PÎP”Q‘PYÐ”ÑQÑQSPYÙÐ•QQZÚÓPÐPRPXÙÐ”’’YÖTP]ÌRPQYÐ[[ÚÚPPTV‘UÛÚÞPRRPUœ’TRYÐ”ÐRZQRPQZ”SRPXÙÐZPR‘PÝÚPšQQYÐZÑŽXZRPÒPV’‘PR™ÝÐÐÞPR’ÐRPRYÚZÜÑTQQœÒTVSPYÜÙÐŒQZQR[ŽÔPRPZÐYÐÑQP˜]ÍÐYÐPÞPPRPUYÐÚPQ˜^PRPVTTÐ]ÐÐÞPQ’P[ÙÐ•ÜÙÐžPQÑQXÓPT\ÙÐ”ÐRÒPUœ’PXÝPPYÐÔÙÐÐÐ‘ÐÞRRQPSQTPÐRRTVSPYÜÙÐPÙÐÎÐP‘PYÐÞPQ’PYÔT”\ÙÐZPQØ^QPÒPVYÐŒ›ÚžPQ’PZRTUYÐÔÙÐÐ‘USP\ÙÐPÚÑÐP’YÞÙŒRQTQQœÒTVYÑÐQ’PQœœ‘’ST\ÙÐPÙÐÎÐP‘P˜ZQQÒPR‘ZÓTÐSQTZÐRÐPPRP^[”Ì’PY‘ÛÚžPPÔVRTRSPSYÐž–PÐPÐQRPRLYÐYÐ”ÐP˜^QQÐÞPR”TœRPYÐ™ÜÝPPÐPQPÜÐÙŒPTTPTP]ÌQÚPP””ÐPÔ–‘‘P–ZPPRPQYÐZNQPSST›ÓTPSÞ˜ÐRPQQTPÐPRPP[Ð\ÕÐTÐP’ÐRQRPQ[ÐYÚTž–PÛ“ÒPÞPPQPÝPQPQ‘˜ÚÕQTPÐPRPQTUÝÜÓRPŒÎQQTX^RQÒPYÐšPQS™ÒRRPVYÐ^–PÑÐQ‘PYÐ”ÙÐÐÑRÒPU[ÐYÙÚÔ\ÙÐTÑRPZÐPÔPSRPP[Ð]^šTUÒT\ÐÔPSRPTYÐÌÓTÐQÐPPTVžY]RP”™ÔRPSYÐZRYØÔP]ÌRPTYÐŒœÚÐQPYRTSSPT\ÓPVYÐ^–PÑÐQÒPTLYÙÐÔPÐQ‘PYÐPÐQ‘QMPPÑRTPTPLST]ÑÞPPRP[ÙÐÔ“’YØÔP]ÌPÞPPRPYÔUPÐSTTQ’TPYÐPÐRRPRYÐšÑSXZPQÔTZQQ]ÚPžRQLPRPSTP^ÚÙT”TTXšÒTXÓP\ÙÐžQSYÐZPR^QPÒPXÙÐÑÛÚÑQP’T]ÙÐšYÐÑÑQPV[ÐYÙÚ]ÐÝÜÙÐšPQ™ÒSRPVYÐ‘PÐÑQÍžQRPTSTÐRRPQœ’TXÓPT\ÙÐšPQ™ÒSRPVYÐ‘PÐÐ\ÙÐšÑTXZTPRPXÓ™ÑPÙžPP’PP[Ð\š™ÐTÒPÔÔRPPYÐZ–PÞÐP’PPYÐUPÝSÐP’PP[Ð\ž™ÐTÑQPPYÐUPÝ“ÐP’PPYÐTÐQPRœ˜Z–PÝÓÐPÝÝ]YÒQYÑŠÒ]Ð”QÛÚPÔPPZÐPÔPÐPÔTZ‘PYÐTÙÐPQQØÕRLSÐUXÓPÐP’PRTRZQP’PPÐQÑÐÐPTTPLYÔYÐPÐP“™ÒPQQSPT‘ÑÛÙÐTÐPÑPÌP^Q‘PYÐPÐQP›ÓPT\ÙÐ]ÔRPPRQÙÝÐÞPPÒPT[ÐZZPLœÚZPP’PSœRTSQPRRPPYÐ^PPÒPTÑÛÔSÒQ‘PSQYžPQ”ÐPÒPUL›ÚP•NUQÍÜÔQÙÝÐÐÞPQÔTQœRTVYÐZPQ˜^QPÒPSYÐ•ÛÚ^PQRÐRST”LPÞPQRÐRM‘PYÐZÑQTRPPRQÙÝÐÐÞPQTTœRTSSPT[ÐZYÚZPQRÔSVRTXÙÐQQPS™ÒQRPPYÐ^PP˜^–PÐPÐPRPRYÐ›^]PXÙÐŒ‹ÕTœÌÐ]ÙÓPT”QÜÚÐP\ÛTQ‹Ò]Ð‘QÜÚPZTPRPRYÐPÐP‘Q‘YÐZYÐÐPÑPRPR‘QÛÚÐPÐPPÌÌ’QQÔP‘ÜÚPÔPRPT‹ÝÑLYÙÐÔPÐQTTœRPTÑÛÙÐ‘QSXZPP’PRTQ”ÒQÑPSQTPÐQÒTUSPT]•ÑQ’PT[ÐYÝÚPŒQÔÝÌRPSYÐ‘QTXZPQRÐRRRPXÔTTÒQ‘PSSPÐPRPQYÐ›[ÙÐZPQØ^PQQÚ”\ÙÐ‘QÔP‘ÛÚÐPÐQÍÐYÒ‹Ð[PPUÒTSPÔPSRPQYÐLTPRRPP[ÐPP˜ÒŒ”ÌÙÑ‘Ð‘PYÐPÐP‘PÒZPZQ”L”[ÞPPRPQTU”ÒQT[ŒUÑSYÐÐQ™ÒQ’PT•RTRÙšQQRPRS^PPRPQTUZRPÑPSS]ÜÙÐTÐPØ^QP’PPYÐ[[ÚP]ÐÝÝÙšPQ’PQX’TTSPTSÒP™ÑŠÒ]Ð“QÜÚPZTPP[PÙšPPÔTZRPPYÐT]PXTYÐYÐZYÐÒQP”™ÌQÚPPÒÔSRPÞQQPR“QÛÚÐPÐQÍTR‹Ò]Ð“QÜÚPTÔPPZÐYÐQUSPÐPRÐRÒMÑSPÐP’PP‹ÓÑP˜ZYÐÐQPÒÐÐP’PP\]•UÑPÐPQQYÐPÙÐÜSÒP’TRYÐTÐP’ÐR[Ó™ÒVRPQYÐTÚÑQÑPÐPÒPQ‘QÛÔQÞPPTTPL\ZšPTÐP’PQ[ÐZYÌYÙÙÐTÐP’ÔSYÓÓPRPPYÐTXÞPP”UœRPSÙÑPÙžSPTTœ’YÐZÐPÐPTTPLYÙÙÐQRPSÓPRPPTUÐÑP’PP‘QÛÚÐPÐPÍÐTS‹Ò]Ð‘QÜÚPZTPPZÐYÐPÙÐÐQUYÐPÙÐÐ‘Už‘PYÐZPPRÐRRS™ÒRRPRYÐPÚÐÐQÑPR‹ÒPR[ÐYÐZPTTRPR[ÐYÚœSÓR’PQT”PSPT]œSÓR‘PÙÓYÑ‘‘PYÐTÐPRÔRPSÓQYÐURQœRPP[ÐYÙÌYÐYÐT–’PQZ]ÜÙÐZÑTXZTPRPSS]ÑP[ŽQQYØ^RP’PYÐQQÐ™ÒQPQPÝÒP’PPQPÚSÒP’PPQPÍÓÑP’PPÐQÑÓÒP’PPQPÜÓR’PPQPÌÓÒP’PPÐQÐÞ“ÒP’PPQPÝ“ÒP’PPQPÞÐP’PPÐQÐÛ“ÒP’PPœÒP˜ZÒPSÒPRPPœ“ÒP˜ZÑPS™ÒPRPQÐQÐÑPÐP”YÐLÐZÙÐTÐP’ÔSVSÓRRPQYÐTÚÑQÑPÐP’ÐRRTTZ”TQžTRYÐQQPS™ÓÍÑYÐPÐPÓ™ÒÓMÑYÐUQYØZTPPÌÖPLÎQQ]Ø^RP’PYÐPTRPQYÐQRLQœRYÒ[ÐYÐLZYÙÐTÐPRÔRÎQLÐ^PYÐPÙÐÐPÑQPQYÐZYÐÐQPÑÐÐP’PP\\ž”PUÑPÐQPQ‘QÛÔQÞPP’PQ[ÐZYÌYÙÙÐTÐP’ÔSYÓÓPRPPYÐTXÞPP”UœRPSQPVÐPÐP’ÐRÌQL\šPTÐPRPQ[ÐYÔZPZ–PÝÓÐP’PPYÐZ–PÝ“ÐP’PPYÐZPP’ÐRRXZRPÓ™ÒÍQYÐPÐPÓ™ÓMQYÐTÙÐÝSP‘PYÐQRÐ™ÒPÐQQÑSÑP’PPYÐUQÚÌPœS™ÒSRPPYÐUQÕRQÛÌYÙÙÐPÐP”VÝØZ–PÐÐPRPQ‘ÛÌYÐYÐQQÜÌQœRPQœSP˜ZYÐÐQPÐPÐPTX‘PUÛÙÐUQÜÌQœRÐRPS™ÒPRPPP˜ZPP”X‘PUÛÛÐYÐLYÐTÞPPTYÐLÐMšT\ÍÐPÐPÔ”TTXœÑÜÙÐ‘UQTQQœÑÜÙÐZPQQQÐQTPÐPRPQYÐZPQPTYÐ”šÜÙÐPÐP’PRYÐ^PQRPUTV”]ÐTQ‹Ò]Ð‘QÜÚP”ÔPRPUÑÛÙÐSÐ[ŽÐ”ÌPÔTRPPYÐTÐPÒPSYÐ^QQSPPYÐTÐPÒPSYÐLÞQPRPU‘QÛÚÐPÐPPÞ”PRPPYÐ^PQRPUTSšRQ‘PSQTPÐQ‘ÜÙÐ”ÐQTÔT‹ÒPQYÐZPQPUœRPTYÐ•ÜÙÐPLP•QÍÜÓ™ÑP™žSPTTœ’YÕZÐPÐQ”TZRPTTQÒ‹ÒPU]PZÑTPÐPRPQYÐZPQPTTVYÝÐÞPPRPQYÐZPQPTTS”\ÚPÐQ”TœRPYÐP]TQ‹ÔTNZPP’PP’‘PYÐUQQYÐPXšQPÐÞPPTTZ’YÑYÐZÑVXÒPTV]ÒXZYÐÐQÝÙÐQQÒPÑÛÛÐYÐœRYÒLÖYÐ[[ÙÐQQÐPÑÛÛÐYÐYÐQQÑPÑÛÛÐYÐYÐUÞTÔ\ÌÐPÐPRPSYÐÐQ”VPTQQZP”Q‘PYÐ”NPUYÐ‘ZÑYžPP’PRYÐ^PQ˜ZPQRPUœ’PPTSYÕRÍÎTS‹Ò]Ð’QÜÚP”ÔPRPUÑÛÙÐZPQPVZPZQ”TRPPYÐUÛÚPŒŽXZQQÒPUYÐSÒPT‘ÛÚZPQ“PPÒTSQQQPRPPYÐšÚÙÐ•QRXZQQÝÔRPPYÐZPQ”TZRPSTPZÑPÙÛÚPÎQÐPPÐQ”TZRPT]PRTPTÐPRPT]PSœRYÔYÐZPQ”TZRPSTPZÑPÙÛÚPPÎQÐPPÐQ”TZRPP]PRTPTÐQRPP]PSœRTPSPTUYÐŒŠØZQQPLYÐ•QRXZQRPPYÐ‘]T”TRPPYÐZPQ”TZRPSTPZÑPÙÛÚPšNQÐPPÐQ”TZRPV]PRTPTÐPRPV]PSœRTPSPT\ÓLYÐPÐQTÌQTPÐPRPRYÐ•QRXZPQPR[”œRYÖ]TPMÐPPYÐ•QRXZPQÓPPÑPQYÐPÐQÓPQZQPQQSÝÒRPPYÐŒPÐPRPRYÐ•QRXZPQPRZPLPÙÛÚPPÌPQÐPPÐPSPQTQ‘Ð‘PYÐ•QRXZPPSPPÑPQSPT\ÙÐ”ÙÐÑQY”ÝÌRPUÑÛÙÐZPQTRŒZLPZP’PU[ÐYÞ’UZÓPÐQ”TÐLYÝÓPQ˜ÐQ”TZQP[Ø’TRSÝÜÙÐ•QYØZTPRPRSÙÒP’QQXZRR’PYÐÔÐQUTPÞQQZÐYÐ‘QPÔÐLRPSYÐ‘QPÙÛÛÐYÐZÔÐQURPYÔR^PQTQMQÐ^PPÓÙÐJÔTPZÐQÐRNT[ÑPÐQRP[ÑQYÐPÐQTTRŒZPRÓ™ÑPRPTUÛÚ]ÐPP\ÐPÌPRTZÑPÐQÒP[Ô”TRPSYÐ”ÐR”TQŒZRRÓPP’YÝ[”œRYÝÛÐYÐZÐQURP[ÝPPÒYÐÑÜ‹ËÎÔZ’PSZ›ÐTPQPXÙÐÌœÚPÚPPØZ›ÐTPQTTQYÐTÐRØLÔœRT[ÙÐ^YÐÔÑSLYÐPÐQTTRŒZPS™ÑPRPTUÛÚPÐRÔÔLPÞPSRP[ÌYÐYÐÕQP˜ZQR‘QSÞPQUPœ’PSÝÒPÖQRPQÜÚPÔÔPRP[‘QÛÙÐ•QLP\ØRPXÙÐ›\ÚPRPQœ’TQPRRPSYÐÚØÑTQQP’PQYÐžPPÒP\VœRYÖ]PQZQÜÚPÑÜÚPÌÔZÐQÓPPRTMÐÕQTXZPSTTRŒZRSRÐRPRTVYÐÞPTÔRPPYÐšÑPÙÛÙÐÞPRRPUYÐÑQL‘ÛÙÐÐÐTXZRRTTQYÐÑQP”ÚÚPÐÐPÒPTYÐÑQPÙÛÛÐYÐZPÑQP™ÛÙÐ^PRX^PRPMV^PQÒPL\RTYÓPYÜÙÐÕQSXZPSÑPÓYÐÕQP“ÙÐTPZÙÐÑÐQPQÒPL\RTYÙÐÔÙÐÑÑSLYÐšPRUÌÒPPYÐšÑPÙÛÙÐÞ–PPÐQÔTQœRTVSPPPSP\ÙÐÕRPQÛÚÐPNP]ÙÐÑPÐPÐRÔTQœRT[ÓPPPSP\ÌPÐPRPSYÐÐQ‘QZP”Q‘PYÐ”NPUYÐ‘ZÑYžPP’PRYÐ^PQ˜ZPQRPUœ’PPTSURÞSPRPPKÐQQTYÝ‹ËÎZÑTYÐPTVQÐ‘PPNTPTPQQPÞœÐVÐYÔPLYÐPÐP’PR™ÐÐYÐZÑÐRQZØ’YÓTPÞQPRPQ™ÐÐœRTQYÐQQÐRQÛÚPÐPÒPSœ’YÒSP\ÓÝÖPRPPTP]ÜÓP•RQQÒPÐ\ÓTPPPPQPPPPPÐPPPPYÐ›ÐYÓÝÖPPPPPTPPPPRPPPPPÐPPPR™ÐPPRRPPPPZ”PPTÙÐPPQØÒPPP[PPPP]ÐQPPRPPPPP’”PPTÙÐPPSPPP\PPPSRPPRPPPPP’”PPTÙÐPPSPPP]PPP^YÒPPRPPPPPÒÐ”PPTÙÐPPRTRPPLPPPPXÝÓPPRPPPPPÙ”PPTÙÐPPRÐRPPNPPPPYÔSPPRPPPPQ”PPTÝÐPPQÐPP‘PPPP[™ÓPPRPPPPP“™ÐPTÝÐPPRÛÒÐPP“PPP\ÝÓPPRPPPPQ™ÐPUPPPPŽPP“PPPU]ÔPPRPPPPPZÐPPUTPPPRÖTPP•PPPP[TTPPRPPPPP“ÔPPUÐPPSTÐPP–PPPPL™ÔPPRPPPPPÔPPVPPPPÓUPPP•PPPPT”UPPRPPPPP•PÙÐPXYÐPPR]ÕPPPœPPPP\ÕPPRPPPPPŒÔPPYPPPQMPPPŽPPPLÒPPRPPPPPšÐPZÔPPPRRPPÔÐPPPPPPPPPQPPPPPPPPP”PPPPLPPPYPPPTPPPRPPQPPPPKÔQPPTPQPÐPKÔNPTPQTÐPKÖPTËÐPQKÝÑPKÙŽTËÐÑKÝÎKÙŽTËÔÑKÌÎKÙ‹ËÐTËËÝÒKËÎÙ‹ËÐ‹ÌËËÝËÎKËÎ‹Ù‹ËÔÌËËÌÎPPPPPTPPPPRPPPPQPPPPPPPPUPPPPQÐPPPPÐPPPYÐPPPRPPPPÙÐPPP\ÐPPPSPPPPQPPPPMPPPTPPPQPPPPP‘PPPPTÐPPPQ]ÐPPP”PPPPUPPPQ™ÐPPP˜ÐPPPVPPPPQÔPPPP›ÐPPPXPPPRPPPPŒPPPYPPPPRÐPPPSPPPPQPPPPP”PPPPVPPPPRPPPPÐPPPPZÐPPPRÐPPPPÝÐPPP]ÐPPPSPPPQÐPPPNPPPTPPPPQTPPPP’PPPPUPPPQPPPP•PPPPUÐPPPQÐPPP™ÐPPPVPPPQÙÐPPPœÐPPPXÐPPPRPPPPPPPYPPPRPPPPPÑPPPPZPPPPR]ÐPPPÕPPPP[PPPRÔPPPPÜÐPPP]PPPS]ÐPPQÐPPP‘PPPU]ÐPPQÓPPPPÑPPPP]ÑPPPSPÐPPQPPP]ÙÐPPSTPPPQPPPPLPPPSÐPPPQPQPTYPTÌQPPPPPTPPPPQPPPPPPPPPYÐPPPRPPPPQPPPP]ÐPPPTPPPPQPPPPP”PPPPXÐPPPRPPPPPÔPPPP[ÐPPPSPPPQPPPPLPPPSÐPPPQÐPPPPTXÔTPÍÐTPPPPRPPPPQPPPPPPPPUPPPPQÐPPPPÐPPPYÐPPPRPPPPÙÐPPP\ÐPPPSPPPPQPPPPMPPPTPPPQPPPPP’PPPPUPPPPQ™ÐPPP™ÐPPPXÐPPPRPPPPPÙÐPPP]ÐPPPTPPPPRPPPPPPPTPPPPRPPPPQPPPPPÐPPPPPPPPYÐPPPTPPPPRPPPPPPPTPšÐ’SYÔPPPPPTPPPPQPPPPPPPPPYÐPPPRPPPPQPPPP]ÐPPPTPPPPQÐPPPPÐPPPYÐPPPRPPPPÙÐPPP\ÐPPPSPPPPQPPPPMPPPTPPPQPPPPPQPPPPQPPPPPÐPPPPPPPPPPPQP™ÐPPPPPPPTPPPPPQPPPPPPPPPYÐPPQTPPPPPPPPUQPPPPPPPP”TPPPPPPPPQ™ÐPPPPPPPURPPPPPPPP”ZÐPPPPPPPQÙÐPPPPPPPUSPPPPPPPPP™ÍPPPPPPQQ‘PPPPPPPPTUUPPPPPPPP”–PPPPPPPRQ’PPPPPPP]ÕYÐPPPPPPQP•PPPPYÐPVQ”PPPPPPPPÕÐPPPPPPPRP™ÐPPPPPP[ÑÐPTPPPPPQVPQPPPRPPPPPPPPPPPPPQPTPPPPPPPPUPÐPPPRPPPP”TPPPPPPPPQ”PPPPÐPPPURPPPPPPPP”YÐPPPYÐPPQÙÐPPPPPPPUSPPPPPPPP™ÌPPPYÐPQQ‘PPPPPPPPTUTÐPPPRPPP”–PPPPPPPRQ‘ÐPPPPÐPP]ÕYÐPPPPPPQ”ÙÐPPPPPPVQTPPPPPPP™ÔPPPPRPPR–PPPPPPPPZÑÐPRPPPPPPÝÖPPÐPPSPPPPPPPPPTPPPQPTPPPPÐPPPUPÐPPPRPPPP”SPPPPYÐPPQ”PPPPÐPPPUQÐPPPRPPPP”YÐPPPYÐPPQÔPPPPÐPPPUSPPPRPPPP”]ÐPPPPPPPQÑÐPPPÐPPTUTÐPPPRPPP””PPPPYÐPRQ‘ÐPPPPÐPPYÕXÐPPPRPPQ”ÙÐPPPYÐPTQ“PPPPPPPQPVPPPQPPPPT™ÐÐPPPPPPMÐQPPPPPPQVPRPP™Ð˜ÓÒPPQP”PPPPPPPPUPPPPPPPPQÐ‘PPPPPPZÑ‹ÔQPPPPPQÖYÐPPPPU™ŒËÒÐPPPSQ”PPPPPPPÔŽPPPPPPPSP™ŒPPPPP’Q‹ÙŽPPPQÖKÌÎPPPQ”ŒPPPPPPYÑKÔPPPPPPQÖTÐPPPPUP™ŒËÑÐPPPRQTPPPPPPÔŽPPPPPPPS™ŒPPPPP‘Q‹ÙŽPPPQ™ÖKÞŽPPPQP”LPPPTPPYÑKÔPPPPPPQVRÐPPPPU™ŒËÐÐPPPQQTPPPPPP™ÔNPPPPPPPRÐ™ŒPPPPPQ‹ÙŽPPPPRVKËÎPPX™ŒËËÝØÐPP›Ñ‹Ù‹ËÐ]ÐPQÔVKËÎPPVP™ŒËËÝÐšÐšÓÔPPQP™ÐPPPPPPPVQPPPPPPPPTPPPPYÐPPQ”PPPPPPPPUQÐPPPPPPPP”YÐPPPPPPPQÔPPPPPPPPUSPPPPPPPP™ÌPPPPPPPQÑPPPPPPPPPVUPPPPPPPPšPPPPPPPPQÑÔPPPPPPPPVXÐPPPPPPPPšPPPPPPPQÒYÐPPPPPPTV[PPPPPPPšZÐPPPPPPRQÓÐPPPPPP]ÖMÐPPPPPPQP›PPPPPPPXÑÙÝÐPPPPPPÔVQYÐPQPPPPTPPPPPPPPQP”PPPPÐPPPUQÐPPPPPPPP”XÐPPPYÐPPQÔPPPPPPPPURÐPPPPPPPP™ÝÐPPPPPPPQÑÐPPPPPPPVTÐPPPPPPPPšPPPPPPPPQÑÐPPPPPPPPVXPPPPPPPPšPPPPPPPQÒTPPPPPPPTVZPPPPPPPšXÐPPPPPPRQÒÝÐPPPPPP]Ö^PPPPPPQPšÓPPPPPPPUQÖ]ÐPPPPPPÐVQTPPRPPPPTPPPP]ÐPPQPPPPPPPPTQPPPRPPPP”XÐPPPYÐPPQÐPPPPÐPPPURÐPPPRPPPP”\ÐPPPPPPPQÑÐPPPPPPPVTPPPPPPPPšPPPPPPPPQÑÐPPPPPPPVXPPPPPPPPPšPPPPPPPQÒPPPPPPPQPVQPQPPPPT™ÓÐPPPPPPMÐLPPPPPQVQPPPPPPSP™ÓTPPPPPP\ÑÐ]ÙÐPPPPPÙÖQPœŒ”QPPPPP]ÐPPPXÐPPPTPPPRÐPPQPPP‹ÐPPPKÝÐPPTPQÐ]ÐPKÝØÐPTPQÒÐPKÞŽPTKÐPQËÝÐPKËÎTËÐ]ÑËÝØÐKËÎTËÒÑËÞŽKËÎKÐTËËÝÑËËÎ‹ËËËÐKËËËÝÙ‹ËËÎËËËÒËËËÞ‹ËËËÎKÐPPPPPQPPPPPÐPPPPPPPPPPPPPPÐPPPPPPPPYÐPPPPPPPPPTPPPPRPPPPPPPPPPPPPTPPPPQPPPPPPPPPYÐPPPRPPPPPÐPPPPXÐPPPRPPPPPÔPPPP[ÐPPPSQQÙÒP\ÑÐ”H‹JË’ÓË•ž‹Ë•ž‹™]ÈÙXZÓX\
NÛ]YÙLØÛ\ÜÈY^[™ÈË˜R^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë˜[œØÛÙ\”]Hˆ‹\Ë˜[œØÛÙ\š[˜\žO[[\Ë˜[œØÛÙ\”[™[™Ï[[\ËÛÜšÙ\”ÛÛ[™]È™\ËÛÜšÙ\”ÛÝ\˜ÙUT“Hˆ‹\ËÛÜšÙ\ÛÛ™šYÏ[[[™Yš[™YˆO]\[ÙˆTÐ×ÕS”ÐÓÑT‰‰˜ÛÛœÛÛKØ\›Š	Õ‘QK’Õ“ØY\ŽˆX\ÙH\]HÈ]\Ý˜˜\Ú\×Ý˜[œØÛÙ\ˆ‹ˆ›\Ø×Ø˜\Ú\×Ý˜[œØÛÙ\ˆˆ\È›ÈÛ™Ù\ˆÝ\ÜY[ˆ™YKšœÈŒLJË‰Ê_\Ù]˜[œØÛÙ\”]

^Ü™]\›ˆ\Ë˜[œØÛÙ\”]]\ß\Ù]ÛÜšÙ\“[Z]

^Ü™]\›ˆ\ËÛÜšÙ\”ÛÛœÙ]ÛÜšÙ\“[Z]

K\ßX\Þ[˜È]XÝÝ\Ü\Þ[˜Ê
^Ü™]\›ˆ\ËÛÜšÙ\ÛÛ™šYÏ^Ø\ÝÔÝ\ÜY˜]ØZ]š\Ñ™X]\™P\Þ[˜Ê^\™KXÛÛ\™\ÜÚ[Û‹X\ÝÈŠK\ÝÒ”Ý\ÜYˆLK]ÌTÝ\ÜY˜]ØZ]š\Ñ™X]\™P\Þ[˜Ê^\™KXÛÛ\™\ÜÚ[Û‹Y]ÌHŠK]Ì”Ý\ÜY˜]ØZ]š\Ñ™X]\™P\Þ[˜Ê^\™KXÛÛ\™\ÜÚ[Û‹Y]ÌˆŠKÝ\ÜY˜]ØZ]š\Ñ™X]\™P\Þ[˜Ê^\™KXÛÛ\™\ÜÚ[Û‹X˜ÈŠKœÔÝ\ÜY˜]ØZ]š\Ñ™X]\™P\Þ[˜Ê^\™KXÛÛ\™\ÜÚ[Û‹XœÈŠKœÔÝ\ÜY˜]ØZ]š\Ñ™X]\™P\Þ[˜Ê^\™KXÛÛ\™\ÜÚ[Û‹\œÈŠ_K\ßY]XÝÝ\Ü

^Ü™]\›ˆLOO]š\ÕÙX‘ÔT™[™\™\Ý\ËÛÜšÙ\ÛÛ™šYÏ^Ø\ÝÔÝ\ÜYš\Ñ™X]\™J^\™KXÛÛ\™\ÜÚ[Û‹X\ÝÈŠK\ÝÒ”Ý\ÜYˆLK]ÌTÝ\ÜYš\Ñ™X]\™J^\™KXÛÛ\™\ÜÚ[Û‹Y]ÌHŠK]Ì”Ý\ÜYš\Ñ™X]\™J^\™KXÛÛ\™\ÜÚ[Û‹Y]ÌˆŠKÝ\ÜYš\Ñ™X]\™J^\™KXÛÛ\™\ÜÚ[Û‹X˜ÈŠKœÔÝ\ÜYš\Ñ™X]\™J^\™KXÛÛ\™\ÜÚ[Û‹XœÈŠKœÔÝ\ÜYš\Ñ™X]\™J^\™KXÛÛ\™\ÜÚ[Û‹\œÈŠ_N\ËÛÜšÙ\ÛÛ™šYÏ^Ø\ÝÔÝ\ÜY™^[œÚ[ÛœËš\Ê•ÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WØ\ÝÈŠK\ÝÒ”Ý\ÜY™^[œÚ[ÛœËš\Ê•ÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WØ\ÝÈŠI‰™^[œÚ[ÛœË™Ù]
•ÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WØ\ÝÈŠK™Ù]Ý\ÜY›Ùš[\Ê
Kš[˜ÛY\ÊšˆŠK]ÌTÝ\ÜY™^[œÚ[ÛœËš\Ê•ÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WÙ]ÌHŠK]Ì”Ý\ÜY™^[œÚ[ÛœËš\Ê•ÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WÙ]ÈŠKÝ\ÜY™^[œÚ[ÛœËš\Ê•ÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WÜÌÝÈŠKœÔÝ\ÜY™^[œÚ[ÛœËš\Ê‘VÝ^\™WØÛÛ\™\ÜÚ[Û—ØœÈŠKœÔÝ\ÜY™^[œÚ[ÛœËš\Ê•ÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WÜœÈŠ_™^[œÚ[ÛœËš\Ê•ÑP’ÒUÕÑP‘ÓØÛÛ\™\ÜÙYÝ^\™WÜœÈŠ_K\ßZ[š]

^ÚYŠ]\Ë˜[œØÛÙ\”[™[™Ê^ØÛÛœÝ[™]ÈË–NTÊ\Ë›X[˜YÙ\ŠNÝœÙ]]
\Ë˜[œØÛÙ\”]
KœÙ]Ú]Ü™Y[X[Ê\ËÚ]Ü™Y[X[ÊNØÛÛœÝO]›ØY\Þ[˜Ê˜˜\Ú\×Ý˜[œØÛÙ\‹šœÈŠK[™]ÈË–NTÊ\Ë›X[˜YÙ\ŠNÜ‹œÙ]]
\Ë˜[œØÛÙ\”]
K‹œÙ]™\ÜÛœÙU\J˜\œ˜^XY™™\ˆŠK‹œÙ]Ú]Ü™Y[X[Ê\ËÚ]Ü™Y[X[ÊNØÛÛœÝ\‹›ØY\Þ[˜Ê˜˜\Ú\×Ý˜[œØÛÙ\‹Ø\ÛHŠNÝ\Ë˜[œØÛÙ\”[™[™ÏT›ÛZ\ÙK˜[
ÙK—JK[Š

ÝWJOOžØÛÛœÝVY˜\Ú\ÕÛÜšÙ\‹ÔÝš[™Ê
KVÈ‹ÊˆÛÛœÝ[È
‹È‹›]Ñ[™Ú[™Q›Ü›X]HŠÒ”ÓÓ‹œÝš[™ÚYžJY‘[™Ú[™Q›Ü›X]
K›]Ñ[™Ú[™U\HHŠÒ”ÓÓ‹œÝš[™ÚYžJY‘[™Ú[™U\JK›]Õ˜[œØÛÙ\‘›Ü›X]HŠÒ”ÓÓ‹œÝš[™ÚYžJY•˜[œØÛÙ\‘›Ü›X]
K›]Ð˜\Ú\Ñ›Ü›X]HŠÒ”ÓÓ‹œÝš[™ÚYžJY˜\Ú\Ñ›Ü›X]
K‹Êˆ˜\Ú\×Ý˜[œØÛÙ\‹šœÈ
‹È‹‹ÊˆÛÜšÙ\ˆ
‹È‹‹œÝXœÝš[™Ê‹š[™^ÙŠžÈŠJÌK‹›\Ý[™^ÙŠŸHŠJWKš›Ú[Š—ˆŠNÝ\ËÛÜšÙ\”ÛÝ\˜ÙUT“UT“˜Ü™X]SØš™XÝT“
™]È›ØŠÛ—JJK\Ë˜[œØÛÙ\š[˜\žOYK\ËÛÜšÙ\”ÛÛœÙ]ÛÜšÙ\Ü™X]ÜŠ


OOžØÛÛœÝ[™]ÈÛÜšÙ\Š\ËÛÜšÙ\”ÛÝ\˜ÙUT“
KO]\Ë˜[œØÛÙ\š[˜\žKœÛXÙJ
NÜ™]\›ˆœÜÝY\ÜØYÙJÝ\Nˆš[š]‹ÛÛ™šYÎ\ËÛÜšÙ\ÛÛ™šYË˜[œØÛÙ\š[˜\žN™_KÙWJKJJ_JJKÙŒ	‰˜ÛÛœÛÛKØ\›Š•‘QK’Õ“ØY\Žˆ][\HXÝ]™HÕˆØY\œÈX^HØ]\ÙH\™›Ü›X[˜ÙH\ÜÝY\Ëˆ\ÙHHÚ[™ÛHÕ“ØY\ˆ[œÝ[˜ÙKÜˆØ[™\ÜÜÙJ
HÛˆÛ[œÝ[˜Ù\ËˆŠKÙ
Êß\™]\›ˆ\Ë˜[œØÛÙ\”[™[™ß[ØY
K‹Š^ÚYŠ[OO]\ËÛÜšÙ\ÛÛ™šYÊ]›ÝÈ™]È\œ›ÜŠ•‘QK’Õ“ØY\ŽˆZ\ÜÚ[™È[š]X[^˜][ÛˆÚ]™]XÝÝ\Ü
™[™\™\ˆ
XˆŠNØÛÛœÝO[™]ÈË–NTÊ\Ë›X[˜YÙ\ŠNÚKœÙ]™\ÜÛœÙU\J˜\œ˜^XY™™\ˆŠKKœÙ]Ú]Ü™Y[X[Ê\ËÚ]Ü™Y[X[ÊKK›ØY

OžÝ\Ëœ\œÙJKŠ_JK‹Š_\\œÙJKŠ^ÚYŠ[OO]\ËÛÜšÙ\ÛÛ™šYÊ]›ÝÈ™]È\œ›ÜŠ•‘QK’Õ“ØY\ŽˆZ\ÜÚ[™È[š]X[^˜][ÛˆÚ]™]XÝÝ\Ü
™[™\™\ˆ
XˆŠNÚYŠš\Ê
J\™]\›ˆ™Ù]

Kœ›ÛZ\ÙK[ŠJK˜Ø]Ú
ŠNÝ\Ë—ØÜ™X]U^\™J
K[Š
O™OÙJ
N›[
JK˜Ø]Ú
Š_WØÜ™X]U^\™Qœ›ÛJJ^ØÛÛœÝÝ\Nœ‹\œ›ÜŽ›‹]NžÙ˜XÙ\ÎšKÚY›ËZYÚ˜K›Ü›X]›\N˜Ë™›YÜÎš_O]ÚYŠ™\œ›ÜˆOO\Š\™]\›ˆ›ÛZ\ÙKœ™Z™XÝ
ŠNÛ]NÚYŠOOYK™˜XÙPÛÝ[
]O[™]ÈË˜ÍZ
KÊNÙ[Ù^ØÛÛœÝZVÌK›Z\X\ÎÝOYK›^Y\ÛÝ[ŒOÛ™]ÈËšSÖŠËKK›^Y\ÛÝ[ÊN›™]ÈË‘‘
ËKÊ_\™]\›ˆK›Z[‘š[\LOOOZVÌK›Z\X\Ë›[™ÝÜËšÍœNœË‰ÒKK›XYÑš[\\ËšÍœKK™Ù[™\˜]SZ\X\ÏHLKK›™YYÕ\]OHLK˜ÛÛÜ”ÜXÙORÙ
JKKœ™[][\P[OHHJIš
K_X\Þ[˜ÈØÜ™X]U^\™JO^ßJ^ØÛÛœÝY[˜Ý[ÛŠ
^ØÛÛœÝO[™]ÈZ[\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]™›[™Ý
NÚYŠVÌHOOQ™Ì_VÌWHOOQ™ÌW_VÌ—HOOQ™Ì—_VÌ×HOOQ™Ì×_VÍHOOQ™Í_VÍWHOOQ™ÍW_VÍ—HOOQ™Í—_VÍ×HOOQ™Í×_VÎHOOQ™Î_VÎWHOOQ™ÎW_VÌLHOOQ™ÌL_VÌLWHOOQ™ÌLWJ]›ÝÈ™]È\œ›ÜŠ“Z\ÜÚ[™ÈÕ‹ŒY[YšY\‹ˆŠNØÛÛœÝ[™]ÈÙLMÊ•Z[Ì\œ˜^K–UT×ÔT—ÑSSQS•O[™]È™
™›[™Ý‹L
NÜ‹šÑ›Ü›X]ZK—Û™^Z[ÌŠ
K‹\TÚ^™OZK—Û™^Z[ÌŠ
K‹œ^[ÚYZK—Û™^Z[ÌŠ
K‹œ^[ZYÚZK—Û™^Z[ÌŠ
K‹œ^[\ZK—Û™^Z[ÌŠ
K‹›^Y\ÛÝ[ZK—Û™^Z[ÌŠ
K‹™˜XÙPÛÝ[ZK—Û™^Z[ÌŠ
NØÛÛœÝÏZK—Û™^Z[ÌŠ
NÜ‹œÝ\\˜ÛÛ\™\ÜÚ[Û”ØÚ[YOZK—Û™^Z[ÌŠ
NØÛÛœÝÏZK—Û™^Z[ÌŠ
KOZK—Û™^Z[ÌŠ
KZK—Û™^Z[ÌŠ
KÏZK—Û™^Z[ÌŠ
KZK—Û™^Z[

KOZK—Û™^Z[

K[™]È™
™›[™Ý
Û‹ÊœÊŽL
NÙ›ÜŠ]OLÙOÎÙJÊÊ\‹›]™[Ëœ\Ú
Û]™[]N›™]ÈZ[\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]
Ù—Û™^Z[

K—Û™^Z[

JK[˜ÛÛ\™\ÜÙYž]S[™Ý™—Û™^Z[

_JNØÛÛœÝ[™]È™
ËKL
K^Ý™[™Ü’Yœ—ÜÚÚ\

K—Û™^Z[MŠ
K\ØÜš\Ü•\Nœ—Û™^Z[MŠ
K™\œÚ[Û“[X™\Žœ—Û™^Z[MŠ
K\ØÜš\Ü›ØÚÔÚ^™Nœ—Û™^Z[MŠ
KÛÛÜ“[Ù[œ—Û™^Z[

KÛÛÜ”š[X\šY\Îœ—Û™^Z[

K˜[œÙ™\‘[˜Ý[ÛŽœ—Û™^Z[

K›YÜÎœ—Û™^Z[

K^[›ØÚÑ[Y[œÚ[ÛŽ–Ü—Û™^Z[

K—Û™^Z[

K—Û™^Z[

K—Û™^Z[

WKž]\Ô[™N–Ü—Û™^Z[

K—Û™^Z[

K—Û™^Z[

K—Û™^Z[

K—Û™^Z[

K—Û™^Z[

K—Û™^Z[

K—Û™^Z[

WKØ[\\Î–×_KOJ‹™\ØÜš\Ü›ØÚÔÚ^™KÍMŠKÍÙ›ÜŠ]LÝNÝ
ÊÊ^ØÛÛœÝO^Øš]Ù™œÙ]œ—Û™^Z[MŠ
Kš][™Ýœ—Û™^Z[

KÚ[›™[\Nœ—Û™^Z[

KØ[\TÜÚ][ÛŽ–Ü—Û™^Z[

K—Û™^Z[

K—Û™^Z[

K—Û™^Z[

WKØ[\SÝÙ\Ž‹LKÌØ[\U\\ŽŒKÌNÍ	™K˜Ú[›™[\OÊKœØ[\SÝÙ\\—Û™^[ÌŠ
KKœØ[\U\\\—Û™^[ÌŠ
JNŠKœØ[\SÝÙ\\—Û™^Z[ÌŠ
KKœØ[\U\\\—Û™^Z[ÌŠ
JK‹œØ[\\ÖÝOY_\‹™]Q›Ü›X]\ØÜš\Ü‹›[™ÝL‹™]Q›Ü›X]\ØÜš\Ü‹œ\Ú
ŠNØÛÛœÝÏ[™]È™
ËL
NÙ›ÜŠÙË—ÛÙ™œÙ]ÎÊ^ØÛÛœÝYË—Û™^Z[ÌŠ
KOYË—ÜØØ[Š
KUY
JNÚYŠ‹šÙ^U˜[YVÛ—OYË—Û™^Z[\œ˜^JYK˜ž]S[™ÝLJK‹›X]Ú
×šÝÚJJ^ØÛÛœÝUY
‹šÙ^U˜[YVÛ—JNÜ‹šÙ^U˜[YVÛ—O]œÝXœÝš[™Ê›\Ý[™^ÙŠ—ŠJ_YË—ÜÚÚ\
	MÍ]	MŒ
_ZYŠOL
\™]\›ˆŽØÛÛœÝO[™]È™
KL
KOPK—Û™^Z[MŠ
KPK—Û™^Z[MŠ
KPK—Û™^Z[ÌŠ
KÏPK—Û™^Z[ÌŠ
KÏPK—Û™^Z[ÌŠ
KPK—Û™^Z[ÌŠ
KOV×NÙ›ÜŠ]LÝÎÝ
ÊÊQKœ\Ú
Ú[XYÙQ›YÜÎK—Û™^Z[ÌŠ
K™Ø”ÛXÙPž]SÙ™œÙ]K—Û™^Z[ÌŠ
K™Ø”ÛXÙPž]S[™ÝK—Û™^Z[ÌŠ
K[TÛXÙPž]SÙ™œÙ]K—Û™^Z[ÌŠ
K[TÛXÙPž]S[™ÝK—Û™^Z[ÌŠ
_JNØÛÛœÝÏZ
ÐK—ÛÙ™œÙ]OTÊÞÏSJ×ËPÊÝËO[™]ÈZ[\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]
ÔË
K[™]ÈZ[\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]
ÓKÊK[™]ÈZ[\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]
ÐËÊK[™]ÈZ[\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]
ÕŠNÜ™]\›ˆ‹™ÛØ˜[]O^Ù[™Ú[ÛÝ[žKÙ[XÝÜÛÝ[‹[XYÙQ\ØÜÎ‘K[™Ú[Ñ]N’KÙ[XÝÜœÑ]N”‹X›\Ñ]N”^[™Y]NŸKŸJ™]ÈZ[\œ˜^J
JK\‹šÑ›Ü›X]OOQ	‰ŒMÏOO\‹™]Q›Ü›X]\ØÜš\Ü–ÌK˜ÛÛÜ“[Ù[ÚYŠOO\‹šÑ›Ü›X]	‰Š[Ÿ\ËÛÜšÙ\ÛÛ™šYË˜\ÝÒ”Ý\ÜY
J\™]\›ˆ\Þ[˜È[˜Ý[ÛŠ
^ØÛÛœÝÝšÑ›Ü›X]™_O]ÚYŠ›ÚYOOIÙWJ]›ÝÈ™]È\œ›ÜŠ•‘QK’Õ“ØY\Žˆ[œÝ\ÜYšÑ›Ü›X]ˆŠNÛ]ŽÌOO]œÝ\\˜ÛÛ\™\ÜÚ[Û”ØÚ[YI‰ŠY
Y[™]È›ÛZ\ÙJ
\Þ[˜ÈOžØÛÛœÝO[™]È™Ø]ØZ]Kš[š]

K
J_JJJKX]ØZ]Y
NØÛÛœÝV×NÙ›ÜŠ]OLÚO›]™[Ë›[™ÝÚJÊÊ^ØÛÛœÝÏSX]›X^
Kœ^[ÚYšJKOSX]›X^
Kœ^[ZYÚšJK]œ^[\ÓX]›X^
Kœ^[\šJNŒÏ]›]™[ÖÚWNÛ]NÚYŠOO]œÝ\\˜ÛÛ\™\ÜÚ[Û”ØÚ[YJZXË›]™[]NÙ[Ù^ÚYŠˆOO]œÝ\\˜ÛÛ\™\ÜÚ[Û”ØÚ[YJ]›ÝÈ™]È\œ›ÜŠ•‘QK’Õ“ØY\Žˆ[œÝ\ÜYÝ\\˜ÛÛ\™\ÜÚ[Û”ØÚ[YKˆŠNÚ\‹™XÛÙJË›]™[]KË[˜ÛÛ\™\ÜÙYž]S[™Ý
_]OR™ÙWOOO\Ë””YÛ™]È›Ø]Ì\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]˜ž]S[™ÝÑ›Ø]Ì\œ˜^K–UT×ÔT—ÑSSQS•
N’™ÙWOOO\Ëš^Û™]ÈZ[M\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]˜ž]S[™ÝÕZ[M\œ˜^K–UT×ÔT—ÑSSQS•
Nš‹œ\Ú
Ù]NKÚY›ËZYÚ˜K\›J_[]NÚYŠš\Ê	ÙWJJZOLOO]œ^[\Û™]ÈË‘ÖQŠ–ÌK™]Kœ^[ÚYœ^[ZYÚ
N›™]ÈË™QŠ–ÌK™]Kœ^[ÚYœ^[ZYÚœ^[\
NÙ[Ù^ÚYŠœ^[\Œ
]›ÝÈ™]È\œ›ÜŠ•‘QK’Õ“ØY\Žˆ[œÝ\ÜY^[\ˆŠNÚO[™]ÈË‘‘
‹œ^[ÚYœ^[ZYÚ
KK›Z[‘š[\LOOO[‹›[™ÝÜËšÍœNœË‰ÒKK›XYÑš[\\ËšÍœ_\™]\›ˆK›Z\X\Ï[‹K\OR™ÙWKK™›Ü›X]IÙWKK˜ÛÛÜ”ÜXÙORÙ

KK›™YYÕ\]OHL›ÛZ\ÙKœ™\ÛÛ™JJ_JŠNØÛÛœÝOYKÏ]\Ëš[š]

K[Š


OO\ËÛÜšÙ\”ÛÛœÜÝY\ÜØYÙJÝ\Nˆ˜[œØÛÙH‹Y™™\Ž\ÚÐÛÛ™šYÎš_KÝJJJK[Š
O\Ë—ØÜ™X]U^\™Qœ›ÛJ™]KŠJJNÜ™]\›ˆœÙ]
Ü›ÛZ\ÙN›ßJKßY\ÜÜÙJ
^Ü™]\›ˆ\ËÛÜšÙ\”ÛÛ™\ÜÜÙJ
K\ËÛÜšÙ\”ÛÝ\˜ÙUT“	‰•T“œ™]›ÚÙSØš™XÝT“
\ËÛÜšÙ\”ÛÝ\˜ÙUT“
KÙKK\ß_VY˜\Ú\Ñ›Ü›X]^ÑUÌTÎŒPTÕÎŒKPTÕ×ÒŽŒŸKY•˜[œØÛÙ\‘›Ü›X]^ÑUÌNŒUÌŽŒKÌNŒ‹ÌÎŒËÍÍNKÍ×ÓM—ÓÔTUQWÓÓ“N‹Í×ÓMNË”•ÌWÍÔ‘ÐŽŽ”•ÌWÍÔ‘ÐNŽKTÕ×ÍŒLU×Ô‘ÐŽŒLKU×Ô‘ÐWÒS•T”ÓUQÐSNŒL‹‘ÐLÌŽŒLË‘ÐMNŒM‘ÔMNŒMK‘ÐMŒM‹Í’ŒŒ‹‘Ð—ÒSŽŒ‘ÐWÒSŽŒ_KY‘[™Ú[™Q›Ü›X]^Ô‘ÐQ›Ü›X]œË‘ÕÙ‘ÐWÐTÕ×ÍÑ›Ü›X]œËœXLË‘Ð—Ð”×ÕS”ÒQÓ‘QÑ›Ü›X]œË•ÎUK‘ÐWÐ”×Ñ›Ü›X]œË‘›‹‘ÐWÑUÌ—ÑPP×Ñ›Ü›X]œË’ÑË‘ÐWÔ”•×Í”ŒWÑ›Ü›X]œË’‹‘ÐWÔÌÕ×ÑWÑ›Ü›X]œË–‘Ð—ÑUÌWÑ›Ü›X]œËÕž‹‘Ð—ÑUÌ—Ñ›Ü›X]œË”š^K‘Ð—Ô”•×Í”ŒWÑ›Ü›X]œËšÍ”K‘ÐWÔÌÕ×ÑWÑ›Ü›X]œË“žŸKY‘[™Ú[™U\O^Õ[œÚYÛ™Yž]U\NœË“ÕSK[‘›Ø]\NœËš^›Ø]\NœË””YŸKY˜\Ú\ÕÛÜšÙ\Y[˜Ý[ÛŠ
^Û]KŽØÛÛœÝWÑ[™Ú[™Q›Ü›X]OWÑ[™Ú[™U\KÏWÕ˜[œØÛÙ\‘›Ü›X]ÏWÐ˜\Ú\Ñ›Ü›X]ÜÙ[‹˜Y]™[\Ý[™\Š›Y\ÜØYÙH‹
[˜Ý[ÛŠŠ^ØÛÛœÝÏ[‹™]NÜÝÚ]Ú
Ë\J^ØØ\ÙHš[š]Ž\Ë˜ÛÛ™šYËO\Ë˜[œØÛÙ\š[˜\žKO[™]È›ÛZ\ÙJ
OžÜ^ÝØ\ÛPš[˜\žN˜KÛ”[[YR[š]X[^™YKTÒTÊŠ_JJK[Š


OOžÜ‹š[š]X[^™P˜\Ú\Ê
K›ÚYOO\‹’Õ‘š[I‰˜ÛÛœÛÛKØ\›Š•‘QK’Õ“ØY\ŽˆX\ÙH\]H˜\Ú\È[š]™\œØ[˜[œØÛÙ\‹ˆŠ_JJNØœ™XZÎØØ\ÙH˜[œØÛÙHŽ™K[Š


OOžÝž^ØÛÛœÝÙ˜XÙ\Î™KY™™\œÎ›‹ÚY˜KZYÚK\Ð[N™›Ü›X]œ\N™‹™›YÜÎ›_OY[˜Ý[ÛŠJ^ØÛÛœÝ[™]È‹’Õ‘š[J™]ÈZ[\œ˜^JJJNÙ[˜Ý[ÛˆÊ
^Û‹˜ÛÜÙJ
K‹™[]J
_ZYŠ[‹š\Õ˜[Y

J]›ÝÈÊ
K™]È\œ›ÜŠ•‘QK’Õ“ØY\Ž—[˜[YÜˆ[œÝ\ÜYšÝˆš[HŠNÛ]NÚYŠ‹š\ÕPTÕÊ
JXO[Ë•PTÕÎÙ[ÙHYŠ‹š\ÑUÌTÊ
JXO[Ë‘UÌTÎÙ[Ù^ÚYŠ[‹š\ÒŠ
J]›ÝÈ™]È\œ›ÜŠ•‘QK’Õ“ØY\Žˆ[šÛ›ÝÛˆ˜\Ú\È[˜ÛÙ[™ÈŠNØO[Ë•PTÕ×ÒŸXÛÛœÝO[‹™Ù]ÚY

K[‹™Ù]ZYÚ

K[‹™Ù]^Y\œÊ
_K[‹™Ù]]™[Ê
KO[‹™Ù]˜XÙ\Ê
KÏ[‹™Ù]\Ð[J
KO[‹™Ù]‘›YÜÊ
KÝ˜[œØÛÙ\‘›Ü›X]žK[™Ú[™Q›Ü›X]‹[™Ú[™U\NžOY[˜Ý[ÛŠK‹‹J^ØÛÛœÝÏ[ÙWNÙ›ÜŠ]ÏLÛÏË›[™ÝÛÊÊÊ^ØÛÛœÝO\ÖÛ×NÚYŠ
XKšYŸØKšY—JI‰ŠK˜˜\Ú\Ñ›Ü›X]š[˜ÛY\ÊJI‰ˆJI‰˜K˜[œØÛÙ\‘›Ü›X]›[™ÝŠI‰ŠXK›™YYÔÝÙ\“Ù•ÛßÊŠI‰˜ÊŠJJJ\™]\›žÝ˜[œØÛÙ\‘›Ü›X]˜K˜[œØÛÙ\‘›Ü›X]ÚOÌNŒK[™Ú[™Q›Ü›X]˜K™[™Ú[™Q›Ü›X]ÚOÌNŒK[™Ú[™U\N˜K™[™Ú[™U\VÌ__]›ÝÈ™]È\œ›ÜŠ•‘QK’Õ“ØY\Žˆ˜Z[YÈY[YžH˜[œØÛÙ[™È\™Ù]ˆŠ_JKKÊNÚYŠ]_YYŠ]›ÝÈÊ
K™]È\œ›ÜŠ•‘QK’Õ“ØY\Ž—[˜[Y^\™HŠNÚYŠ[‹œÝ\˜[œØÛÙ[™Ê
J]›ÝÈÊ
K™]È\œ›ÜŠ•‘QK’Õ“ØY\ŽˆœÝ\˜[œØÛÙ[™È˜Z[YŠNØÛÛœÝÏV×KÏV×NÙ›ÜŠ]LÝNÝ
ÊÊ^ØÛÛœÝOV×NÙ›ÜŠ]LÜŽÜŠÊÊ^ØÛÛœÝÏV×NÛ]KÙ›ÜŠ]OLÙOÙJÊÊ^ØÛÛœÝÏ[‹™Ù][XYÙS]™[[™›Ê‹K
NÌOO]OO\ŸOOY_Ë›ÜšYÕÚY	MOL	‰˜Ë›ÜšYÒZYÚ	MOLÛÛœÛÛKØ\›Š•‘QK’Õ“ØY\ŽˆUÌTÈ[™PTÕÈ^\™\ÈÚÝ[\ÙH][\K[Ù‹Y›Ý\ˆ[Y[œÚ[ÛœËˆŠKŒOÊOXË›ÜšYÕÚYXË›ÜšYÒZYÚ
NŠOXËÚYXËšZYÚ
NÛ][™]ÈZ[\œ˜^J‹™Ù][XYÙU˜[œØÛÙYÚ^™R[ž]\Ê‹KJJNØÛÛœÝO[‹˜[œØÛÙR[XYÙJ‹KKLKLJNÚYŠOOZK’[‘›Ø]\I‰Š[™]ÈZ[M\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]˜ž]S[™ÝÕZ[M\œ˜^K–UT×ÔT—ÑSSQS•
JK]J]›ÝÈÊ
K™]È\œ›ÜŠ•‘QK’Õ“ØY\Žˆ˜[œØÛÙR[XYÙH˜Z[YˆŠNÛËœ\Ú

_XÛÛœÝÏZ
ÊNÙKœ\Ú
Ù]N˜ËÚY˜KZYÚ›JKËœ\Ú
Ë˜Y™™\Š_WËœ\Ú
ÛZ\X\Î™KÚYKZYÚ™›Ü›X]‹\NžJ_\™]\›ˆÊ
KÙ˜XÙ\Î—ËY™™\œÎËÚYKZYÚ™\Ð[N™Ë™›YÜÎK›Ü›X]‹\Nž_JË˜Y™™\ŠNÜÙ[‹œÜÝY\ÜØYÙJÝ\Nˆ˜[œØÛÙH‹YœËšY]NžÙ˜XÙ\Î™KÚY˜KZYÚK\Ð[N™›Ü›X]œ\N™‹™›YÜÎ›__KŠ_XØ]Ú

^ØÛÛœÛÛK™\œ›ÜŠ
KÙ[‹œÜÝY\ÜØYÙJÝ\Nˆ™\œ›Üˆ‹YœËšY\œ›ÜŽ›Y\ÜØYÙ_J__JJ_]˜\ˆ_JJNØÛÛœÝOVÞÚYŽˆ˜\ÝÔÝ\ÜY‹˜\Ú\Ñ›Ü›X]–ÛË•PTÕ×K˜[œØÛÙ\‘›Ü›X]–ÜËTÕ×ÍËTÕ×ÍK[™Ú[™Q›Ü›X]–Û‹”‘ÐWÐTÕ×ÍÑ›Ü›X]‹”‘ÐWÐTÕ×ÍÑ›Ü›X]K[™Ú[™U\N–ÚK•[œÚYÛ™Yž]U\WKš[Üš]QUÌTÎŒKÌš[Üš]UPTÕÎŒK™YYÔÝÙ\“Ù•ÛÎˆL_KÚYŽˆ˜œÔÝ\ÜY‹˜\Ú\Ñ›Ü›X]–ÛË‘UÌTËË•PTÕ×K˜[œØÛÙ\‘›Ü›X]–ÜËÍ×ÓMKËÍ×ÓMWK[™Ú[™Q›Ü›X]–Û‹”‘ÐWÐ”×Ñ›Ü›X]‹”‘ÐWÐ”×Ñ›Ü›X]K[™Ú[™U\N–ÚK•[œÚYÛ™Yž]U\WKš[Üš]QUÌTÎŒËš[Üš]UPTÕÎŒ‹™YYÔÝÙ\“Ù•ÛÎˆL_KÚYŽˆ™Ý\ÜY‹˜\Ú\Ñ›Ü›X]–ÛË‘UÌTËË•PTÕ×K˜[œØÛÙ\‘›Ü›X]–ÜËÌKËÌ×K[™Ú[™Q›Ü›X]–Û‹”‘ÐWÔÌÕ×ÑWÑ›Ü›X]‹”‘ÐWÔÌÕ×ÑWÑ›Ü›X]K[™Ú[™U\N–ÚK•[œÚYÛ™Yž]U\WKš[Üš]QUÌTÎš[Üš]UPTÕÎK™YYÔÝÙ\“Ù•ÛÎˆL_KÚYŽˆ™]Ì”Ý\ÜY‹˜\Ú\Ñ›Ü›X]–ÛË‘UÌTËË•PTÕ×K˜[œØÛÙ\‘›Ü›X]–ÜË‘UÌKË‘UÌ—K[™Ú[™Q›Ü›X]–Û‹”‘Ð—ÑUÌ—Ñ›Ü›X]‹”‘ÐWÑUÌ—ÑPP×Ñ›Ü›X]K[™Ú[™U\N–ÚK•[œÚYÛ™Yž]U\WKš[Üš]QUÌTÎŒKš[Üš]UPTÕÎŒË™YYÔÝÙ\“Ù•ÛÎˆL_KÚYŽˆ™]ÌTÝ\ÜY‹˜\Ú\Ñ›Ü›X]–ÛË‘UÌTËË•PTÕ×K˜[œØÛÙ\‘›Ü›X]–ÜË‘UÌWK[™Ú[™Q›Ü›X]–Û‹”‘Ð—ÑUÌWÑ›Ü›X]K[™Ú[™U\N–ÚK•[œÚYÛ™Yž]U\WKš[Üš]QUÌTÎŒ‹š[Üš]UPTÕÎ™YYÔÝÙ\“Ù•ÛÎˆL_KÚYŽˆœœÔÝ\ÜY‹˜\Ú\Ñ›Ü›X]–ÛË‘UÌTËË•PTÕ×K˜[œØÛÙ\‘›Ü›X]–ÜË””•ÌWÍÔ‘Ð‹Ë””•ÌWÍÔ‘ÐWK[™Ú[™Q›Ü›X]–Û‹”‘Ð—Ô”•×Í”ŒWÑ›Ü›X]‹”‘ÐWÔ”•×Í”ŒWÑ›Ü›X]K[™Ú[™U\N–ÚK•[œÚYÛ™Yž]U\WKš[Üš]QUÌTÎKš[Üš]UPTÕÎ‹™YYÔÝÙ\“Ù•ÛÎˆLKÚYŽˆ˜œÔÝ\ÜY‹˜\Ú\Ñ›Ü›X]–ÛË•PTÕ×Ò—K˜[œØÛÙ\‘›Ü›X]–ÜËÍ’K[™Ú[™Q›Ü›X]–Û‹”‘Ð—Ð”×ÕS”ÒQÓ‘QÑ›Ü›X]K[™Ú[™U\N–ÚK’[‘›Ø]\WKš[Üš]RŽŒK™YYÔÝÙ\“Ù•ÛÎˆL_KØ˜\Ú\Ñ›Ü›X]–ÛË‘UÌTËË•PTÕ×K˜[œØÛÙ\‘›Ü›X]–ÜË”‘ÐLÌ‹Ë”‘ÐLÌ—K[™Ú[™Q›Ü›X]–Û‹”‘ÐQ›Ü›X]‹”‘ÐQ›Ü›X]K[™Ú[™U\N–ÚK•[œÚYÛ™Yž]U\KK•[œÚYÛ™Yž]U\WKš[Üš]QUÌTÎŒLš[Üš]UPTÕÎŒL™YYÔÝÙ\“Ù•ÛÎˆL_KØ˜\Ú\Ñ›Ü›X]–ÛË•PTÕ×Ò—K˜[œØÛÙ\‘›Ü›X]–ÜË”‘ÐWÒS—K[™Ú[™Q›Ü›X]–Û‹”‘ÐQ›Ü›X]K[™Ú[™U\N–ÚK’[‘›Ø]\WKš[Üš]RŽŒL™YYÔÝÙ\“Ù•ÛÎˆL_WK^ÖÛË‘UÌT×N˜K™š[\Š
O˜˜\Ú\Ñ›Ü›X]š[˜ÛY\ÊË‘UÌTÊJJKœÛÜ


JOOœš[Üš]UPTÕËYKœš[Üš]UPTÕÊJKÛË•PTÕ×N˜K™š[\Š
O˜˜\Ú\Ñ›Ü›X]š[˜ÛY\ÊË•PTÕÊJJKœÛÜ


JOOœš[Üš]UPTÕËYKœš[Üš]UPTÕÊJKÛË•PTÕ×Ò—N˜K™š[\Š
O˜˜\Ú\Ñ›Ü›X]š[˜ÛY\ÊË•PTÕ×ÒŠJJKœÛÜ


JOOœš[Üš]R‹YKœš[Üš]RŠJ_NÙ[˜Ý[ÛˆÊ
^Ü™]\›ˆLŸJ	LJI‰ŒOO]Y[˜Ý[Ûˆ

^ÚYŠOOO]›[™Ý
\™]\›ˆÌNÛ]OLÙ›ÜŠ]LÜ›[™ÝÜŠÊÊYJÏ]Ü—K˜ž]S[™ÝØÛÛœÝ[™]ÈZ[\œ˜^JJNÛ]LÙ›ÜŠ]OLÙO›[™ÝÙJÊÊ^ØÛÛœÝO]ÙWNÜ‹œÙ]
KŠKŠÏZK˜ž]S[™Ý\™]\›ˆŸ_NØÛÛœÝ[™]ÈÙ]
ÜË‘ÕÙËœS‹Ë••JK	^ÖÔNœË‘ÕÙÕNœË‘ÕÙÑYNœË‘ÕÙÔÙNœË‘ÕÙÔ™NœËœS‹ÐÙNœËœS‹ÝÙNœËœS‹Ø™NœËœS‹ÒYNœË••ÓYNœË••×ÙNœË••ÞNœË••ÑNœËœXLËÓNœË”\™‹Ð™NœË”\™ŸK™^ÖÔNœË””Y‹ÕNœËš^ÑYNœË“ÕSKÔÙNœË“ÕSKÔ™NœË””Y‹ÐÙNœËš^ÝÙNœË“ÕSKØ™NœË“ÕSKÒYNœË””Y‹ÓYNœËš^×ÙNœË“ÕSKÞNœË“ÕSKÑNœËš^ÓNœË“ÕSKÐ™NœË“ÕS_NÙ[˜Ý[ÛˆÙ

^ØÛÛœÝO]™]Q›Ü›X]\ØÜš\Ü–ÌNÜ™]\›ˆOOOYK˜ÛÛÜ”š[X\šY\ÏÌOOYK˜[œÙ™\‘[˜Ý[ÛÜË™\‰œË–œŒŽŒLOOYK˜ÛÛÜ”š[X\šY\ÏÌOOYK˜[œÙ™\‘[˜Ý[ÛÈ™\Ü^K\ÈŽˆ™\Ü^K\Ë[[™X\ˆŽŠOOYK˜ÛÛÜ”š[X\šY\ßÛÛœÛÛKØ\›Š‘QK’Õ“ØY\Žˆ[œÝ\ÜYÛÛÜˆš[X\šY\Ë‰ÙK˜ÛÛÜ”š[X\šY\ßH˜
KËš™Œ
_XÛÛœÝ™^ÜÙ]Yš[™SX\[™ÊKŠ^ÓØš™XÝšÙ^\ÊŠK™›Ü‘XXÚ

OžÝ™Yš[™\ÖØ	Ù_WÉÛŸXO\–Û—_JJ_KÙ]Yš[™T›Ü\JK‹Š^Ý™Yš[™\ÖÜ—O[‹Øš™XÝ™Yš[™T›Ü\JKÙÙ]Š
OO™Yš[™\ÖÜ—KÙ]™OOžÝ™Yš[™\ÖÜ—HOYI‰Š™Yš[™\ÖÜ—OYK›™YYÕ\]OHL
__J_KÙ][šY›Ü›T›Ü\JKŠ^Ý[šY›Ü›\ÖÙWO[™]ÈË›˜É
ŠKØš™XÝ™Yš[™T›Ü\JKÙÙ]Š
OO[šY›Ü›\ÖÙWK˜[YKÙ]œOžÝ[šY›Ü›\ÖÙWK˜[YHO\‰‰Š[šY›Ü›\ÖÙWK˜[YO\Š__J__K^ÔÔPÕS–ÖÌ™]ÈË”LYŠŒÍŽ‹ŒÌNŒÍLÊWKËŒK™]ÈË”LYŠŒNMŒKLÌÌËÍLŠWKËŒ‹™]ÈË”LYŠÍŒÌJWKËŒË™]ÈË”LYŠÌ‹ŽËÌJWKË™]ÈË”LYŠŽL‹ŽMŒNMŒJWKËK™]ÈË”LYŠKKÍJWKË‹™]ÈË”LYŠŽNMŒKŽÎMLJWKËË™]ÈË”LYŠŽNLŒ‹ŽŒÎ
WKËŽ™]ÈË”LYŠŽMMŽKÍKŒŒÊWKËŽK™]ÈË”LYŠŽÍLËŒÌKŒÌN
WKÌK™]ÈË”LYŠŒNM‹ŒÎKŒN
WWKTÓPN–ÖÌ™]ÈË”LYŠŒKŒMKŒJWKËŒK™]ÈË”LYŠŒÎËŒKM
WKËŒ‹™]ÈË”LYŠLŒKLÊWKËŒË™]ÈË”LYŠLKŒLKNMŠWKË™]ÈË”LYŠÍL‹ŒŒËLLÊWKËK™]ÈË”LYŠŽÍËŒÌŽKÌJWKË‹™]ÈË”LYŠŽLËÍKŒÍLÊWKËË™]ÈË”LYŠŽMŒËMMŒÌŠWKËŽ™]ÈË”LYŠŽNL‹ŽKŒNMJWKËŽK™]ÈË”LYŠŽNËŽŒ‹ŒM
WKÌK™]ÈË”LYŠŽMŽMÍKŒLÌJWWKQSÕ×ÑÔ‘QSŽ–ÖÌ™]ÈË”LYŠŒMËŒŽŒÍLJWKËŒK™]ÈË”LYŠŒLÌÎŒÍMMKŒÊWKËŒ‹™]ÈË”LYŠŒŒKÌNK
WKËŒË™]ÈË”LYŠLNKLÌNJWKË™]ÈË”LYŠNKMMŽJWKËK™]ÈË”LYŠŒLÍËKMŒM
WKË‹™]ÈË”LYŠŒŽL‹ÌÎMKMÍÊWKËË™]ÈË”LYŠLËŽNKLŒJWKËŽ™]ÈË”LYŠŒL‹ŽÍJWKËŽK™]ÈË”LYŠÎËŽLÌŒËLM
WKÌK™]ÈË”LYŠŽNŽNÌM
WWK’T’QTÎ–ÖÌ™]ÈË”LYŠŒËŒKŒÌŽJWKËŒK™]ÈË”LYŠŒŽËŒMKN
WKËŒ‹™]ÈË”LYŠŒMŒKLÊWKËŒË™]ÈË”LYŠŒŒËŒÍÌ‹MLÊWKË™]ÈË”LYŠŒMÌKMN
WKËK™]ÈË”LYŠŒLŽMËMLJWKË‹™]ÈË”LYŠŒLÍKNKLN
WKËË™]ÈË”LYŠŒËÍKJWKËŽ™]ÈË”LYŠÎŽŒKŒÌN
WKËŽK™]ÈË”LYŠÍKŽÌËŒMJWKÌK™]ÈË”LYŠŽNLËŽL‹ŒM
WWKS‘‘T““Î–ÖÌ™]ÈË”LYŠŒÍËŒ‹ŒŒŠWKËŒK™]ÈË”LYŠŒŒKŒÍ‹ŒÎ
WKËŒ‹™]ÈË”LYŠŒÍÌËŒÍÌŠWKËŒË™]ÈË”LYŠLŒ‹ŒLŽŠWKË™]ÈË”LYŠKŒN‹ŒÍÊWKËK™]ÈË”LYŠÎMËŒMKŒŽÊWKË‹™]ÈË”LYŠŽL‹ŒÍŒN
WKËË™]ÈË”LYŠŽMŽKLM‹ŒŒÊWKËŽ™]ÈË”LYŠŽNŽËŒÌŠWKËŽK™]ÈË”LYŠŽMŒKŽNKŒŽN
WKÌK™]ÈË”LYŠŽNŽNNJWWKÔVTÐÐSN–ÖÌ™]ÈË”LYŠ
WKÌK™]ÈË”LYŠKKJWWKT“Î–ÖÌ™]ÈË”LYŠŒNNMKŒÌMÍ‹ŒŒÌŒMÊWKËŒË™]ÈË”LYŠŒLLËŒLŒÍËŒÌÍÍ
WKËŒLË™]ÈË”LYŠŒÍŒŽŒLNŽLLŒÊWKËŒ‹™]ÈË”LYŠŒNŒ‹MÎMNŽNNÍŠWKËŒË™]ÈË”LYŠŒMNÌÍMLKŽLŒÌJWKËŒÌË™]ÈË”LYŠŒLËŽMMÍŒŒÊWKË™]ÈË”LYŠŒNMNKŽMLKNMŠWKËË™]ÈË”LYŠÍÎŽNMNKŒÎMÍJWKËLË™]ÈË”LYŠÍŒ‹ŽNNNKŒŒÌÍMŠWKË‹™]ÈË”LYŠŽÌËŽLL‹ŒŒNJWKËË™]ÈË”LYŠŽLÌÌKŽLŒÍ‹ŒŒÊWKËÌË™]ÈË”LYŠŽNLÌMÍŒŒÍ
WKËŽ™]ÈË”LYŠŽNÍ‹LŽLKŒLŽJWKËŽË™]ÈË”LYŠŽLŒLKŒÌMKŒMÍJWKËŽLË™]ÈË”LYŠŽMŒŒNŒ‹ŒNJWKÌK™]ÈË”LYŠKŒÍ‹Œ
WWKRS“ÕÎ–ÖÌ™]ÈË”LYŠŒÎÌM
WKÌKÍ‹™]ÈË”LYŠJWKÌ‹Í‹™]ÈË”LYŠKJWKËK™]ÈË”LYŠK
WKÍÍ‹™]ÈË”LYŠKK
WKÍKÍ‹™]ÈË”LYŠK
WKÌK™]ÈË”LYŠK
WWKÓÓ•ÕTŽ–ÖÌ™]ÈË”LYŠ
WKËŒË™]ÈË”LYŠ
WKËŒ™]ÈË”LYŠKKJWKÌK™]ÈË”LYŠKKJWW_K\^ÐÓÓÔŽŒS•S”ÒUNŒKÓTÔÒQ’PÐUSÓŽŒ‹SUUSÓŽŒË‘UT“—Ó•SP‘TŽ‘UT“—ÕTNK‘UT“—ÐÓÕS•‹ÒS•ÔÓÕTÑWÒQËÐÐS—ÐS‘ÓNŽ“Ô“PSŽ_Kœ^ÐÒTÓNŒÔUPT‘NŒ_Kœ^ÕSQNŒUS•PUQŒ_K\[™]ÈË”LYŠKKJKÜ^ÑQUSžÌžÝš\ÚX›NˆL˜[YNˆ›™]™\ˆÛ\ÜÚYšYY‹ÛÛÜŽ›™]ÈË”LYŠKKJKÜXÚ]NŒ_KNžÝš\ÚX›NˆL˜[YNˆ[˜Û\ÜÚYšYY‹ÛÛÜŽ›™]ÈË”LYŠKKJKÜXÚ]NŒ_KŽžÝš\ÚX›NˆL˜[YNˆ™Ü›Ý[™‹ÛÛÜŽ›™]ÈË”LYŠŒËŒÌ‹ŒN
KÜXÚ]NŒ_KÎžÝš\ÚX›NˆL˜[YNˆ›ÝÈ™YÙ]][Ûˆ‹ÛÛÜŽ›™]ÈË”LYŠK
KÜXÚ]NŒ_KžÝš\ÚX›NˆL˜[YNˆ›YY][H™YÙ]][Ûˆ‹ÛÛÜŽ›™]ÈË”LYŠŽ
KÜXÚ]NŒ_KNžÝš\ÚX›NˆL˜[YNˆšYÚ™YÙ]][Ûˆ‹ÛÛÜŽ›™]ÈË”LYŠ‹
KÜXÚ]NŒ_KŽžÝš\ÚX›NˆL˜[YNˆ˜Z[[™È‹ÛÛÜŽ›™]ÈË”LYŠK‹
KÜXÚ]NŒ_KÎžÝš\ÚX›NˆL˜[YNˆ›ÝÈÚ[
›Ú\ÙJH‹ÛÛÜŽ›™]ÈË”LYŠKJKÜXÚ]NŒ_KžÝš\ÚX›NˆL˜[YNˆšÙ^K\Ú[‹ÛÛÜŽ›™]ÈË”LYŠK
KÜXÚ]NŒ_KNžÝš\ÚX›NˆL˜[YNˆØ]\ˆ‹ÛÛÜŽ›™]ÈË”LYŠJKÜXÚ]NŒ_KLžÝš\ÚX›NˆL˜[YNˆœ˜Z[‹ÛÛÜŽ›™]ÈË”LYŠŽŽJKÜXÚ]NŒ_KLNžÝš\ÚX›NˆL˜[YNˆœ›ØYÝ\™˜XÙH‹ÛÛÜŽ›™]ÈË”LYŠÊKÜXÚ]NŒ_KLŽžÝš\ÚX›NˆL˜[YNˆ›Ý™\›\‹ÛÛÜŽ›™]ÈË”LYŠKK
KÜXÚ]NŒ_KQUSžÝš\ÚX›NˆL˜[YNˆ™Y˜][‹ÛÛÜŽ›™]ÈË”LYŠŒË‹ŠKÜXÚ]NŒ___KÜ^ÑQUSžÌžÝš\ÚX›NˆL˜[YNˆŒ‹ÛÛÜŽ›™]ÈË”LYŠœ™ØŠËNKŒMŠHŠKÜXÚ]NŒ_KNžÝš\ÚX›NˆL˜[YNˆŒH‹ÛÛÜŽ›™]ÈË”LYŠœ™ØŠŒNÍJNÈŠKÜXÚ]NŒ_KŽžÝš\ÚX›NˆL˜[YNˆŒˆ‹ÛÛÜŽ›™]ÈË”LYŠœ™ØŠMKMKJHŠKÜXÚ]NŒ_KÎžÝš\ÚX›NˆL˜[YNˆŒÈ‹ÛÛÜŽ›™]ÈË”LYŠœ™ØŠMKÌN
HŠKÜXÚ]NŒ_KžÝš\ÚX›NˆL˜[YNˆ‹ÛÛÜŽ›™]ÈË”LYŠœ™ØŠKLÌJHŠKÜXÚ]NŒ_KNžÝš\ÚX›NˆL˜[YNˆH‹ÛÛÜŽ›™]ÈË”LYŠœ™ØŠŒÌKÍJHŠKÜXÚ]NŒ_KŽžÝš\ÚX›NˆL˜[YNˆˆ‹ÛÛÜŽ›™]ÈË”LYŠœ™ØŠ‹ŒL‹
HŠKÜXÚ]NŒ_KÎžÝš\ÚX›NˆL˜[YNˆÈ‹ÛÛÜŽ›™]ÈË”LYŠœ™ØŠLŒÌ
HŠKÜXÚ]NŒ_KQUSžÝš\ÚX›NˆL˜[YNˆ™Y˜][‹ÛÛÜŽš\ÜXÚ]NŒ___NÙ[˜Ý[Ûˆ\
KŠ^ØÛÛœÝYKš[XYÙK™]KOYKš[XYÙKÚYÜŸ
SØš™XÝšÙ^\Ê
K›[™Ý
KK\Ù\‘]K˜[œÜ\™[HLNÙ›ÜŠ]ÏLÜÏNÜÊÊÊ^Û]KÎÝÜ×OÊO]Ü×K˜ÛÛÜ‹Ï]Ü×K›ÜXÚ]JNÜÉ\—OÊO]ÜÉ\—K˜ÛÛÜ‹Ï]ÜÉ\—K›ÜXÚ]JN‘QUSÊO]‘QUS˜ÛÛÜ‹Ï]‘QUS›ÜXÚ]JNŠOZ\ÏLJNØÛÛœÝOM
œÎÛ–ØJÌO\\œÙR[
MJšKœ‹L
K–ØJÌWO\\œÙR[
MJšK™ËL
K–ØJÌ—O\\œÙR[
MJšK˜‹L
K–ØJÌ×O\\œÙR[
MJ›ËL
KÏI‰ŠK\Ù\‘]K˜[œÜ\™[HL
_YK›™YYÕ\]OHLXÛ\ÜÈ^[™ÈË’ÚÞØÛÛœÝXÝÜŠ
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNžßNØÛÛœÝO^Ë‹‹™Ü˜YY[‹‹NÝ™Ü˜YY[SØš™XÝ˜[Y\ÊJVÌNØÛÛœÝÚ[[œÚ]T˜[™ÙNœ[™]ÈË’NVJKMLÍŠK[]˜][Û”˜[™ÙN›[™]ÈË’NVJYLÊK[™ÛT˜[™ÙNšO[™]ÈË’NVJNLL
KÛ\ÜÚYšXØ][Û”ØÚ[YN›Ï\Ü‘QUS\ØÜ™]TØÚ[YN˜O[Ü‘QUSÚ^™N›LK[ÙN˜ÏY\ÓÓÔ‹Ú\Nš\œÒTÓKÚ^™S[ÙNO[œUS•PUQZ[][X]YÚ^™N™LËX^][X]YÚ^™NœLLÜ˜YY[™‹Ø[[XN›OLKØØ[N™ÏKŒKÓX][ŠJK[XšY[›ÛÜÝOL‹‹ž_O]ÜÝ\\ŠË‹‹žK›ÙÎˆL˜[œÜ\™[ˆL™XÚ\Ú[ÛŽˆšYÚ‹™\^ÛÛÜœÎˆLJK\Ë[šY›Ü›\Ï\Ë“Ë›Y\™ÙJÒ•[šY›Ü›\ÓX‹œÚ[Ë•[šY›Ü›\ÓX‹™›Ù×JK\Ë™\^ÚY\HˆÚ[˜ÛYHÛÛ[[Û—ˆÚ[˜ÛYH›Ù×Ü\œ×Ý™\^—ˆÚ[˜ÛYH[Üœ\™Ù]Ü\œ×Ý™\^—ˆÚ[˜ÛYHÙÙ\Y—Ü\œ×Ý™\^—ˆÚ[˜ÛYHÛ\[™×Ü[™\×Ü\œ×Ý™\^—˜\žZ[™È™XÍÛÛÜŽÈËÈÛÛÜ—Ü\œ×Ý™\^—ˆÚY™YˆTÑWÔÒS•×ÕU—ˆ˜\žZ[™È™XÌˆ•]Ž×ˆ[šY›Ü›HX]È]•˜[œÙ›Ü›N×ˆÙ[™Y——ˆÙYš[™HÓÕTÑWÒQÑÔ“ÕT——[šY›Ü›H›Ø]Ú^™N×[šY›Ü›H›Ø]ØØ[N×—[šY›Ü›H›ÛÛXÚÚ[™Î×[šY›Ü›H[[ÙN×—[šY›Ü›H™XÌˆ[]˜][Û”˜[™ÙN×[šY›Ü›H™XÌˆ[[œÚ]T˜[™ÙN×[šY›Ü›H™XÌˆ[™ÛT˜[™ÙN×—[šY›Ü›HØ[\\Œ‘Û\ÜÚYšXØ][Û•^\™N×[šY›Ü›HØ[\\Œ‘\ØÜ™]U^\™N×[šY›Ü›HØ[\\Œ‘Ü˜YY[^\™N×[šY›Ü›HØ[\\Œ‘š\ÚXš[]U^\™N×—[šY›Ü›H[Ú^™S[ÙN×[šY›Ü›H›Ø]Z[][X]YÚ^™N×[šY›Ü›H›Ø]X^][X]YÚ^™N×—˜]šX]H™XÍ[š\]YWÚY×˜]šX]H›Ø][[œÚ]N×˜]šX]H›Ø]Û\ÜÚYšXØ][ÛŽ×˜]šX]H›Ø]Ú[ÛÝ\˜ÙRQ×—˜]šX]H›Ø]™]\›“[X™\Ž×˜]šX]H›Ø][X™\“Ù”™]\›œÎ×˜]šX]H›Ø]ØØ[[™ÛN×—›ÚYXZ[Š
H×ˆ™XÌˆ]ˆH™XÌŠÛ\ÜÚYšXØ][Û‹ÌMK‹JN×—ˆÛÛÜˆH™XÍ
KŒ
N×ˆYˆ
XÚÚ[™ÊH×ˆÛÛÜˆH[š\]YWÚY×ˆH[ÙH×ˆYˆ
[ÙHOH•×ÓSÑWÐÓTÔÒQ’PÐUSÓŠH×ˆÛÛÜˆH^\™L‘
Û\ÜÚYšXØ][Û•^\™K]ŠN×ˆH[ÙHYˆ
[ÙHOH•×ÓSÑWÓ“Ô“PS
H×ˆÛÛÜ‹œ™ØˆHXœÊ›Ü›X[
N×ˆH[ÙHYˆ
[ÙHOH•×ÓSÑWÐÓÓÔŠH×ˆÚYˆYš[™Y
TÑWÐÓÓÔŠWˆÛÛÜ‹œ™ØˆHÛÛÜ‹œ™ØŽ×ˆÙ[YˆYš[™Y
TÑWÐÓÓÔ—ÐSJWˆÛÛÜˆHÛÛÜŽ×ˆÙ[™Y—ˆH[ÙHYˆ
[ÙHOH•×ÓSÑWÔ‘UT“—Ó•SP‘TŠH×ˆ™XÌˆ]ˆH™XÌŠ™]\›“[X™\‹ÌMK‹JN×ˆÛÛÜˆH^\™L‘
\ØÜ™]U^\™K]ŠN×ˆH[ÙHYˆ
[ÙHOH•×ÓSÑWÔ‘UT“—ÕTJH×ˆ›Ø]™]\›•\N×ˆYˆ
™]\›“[X™\ˆˆ[X™\“Ù”™]\›œÊH×ˆ™]\›•\HHŽ×ˆH[ÙHYˆ
™]\›“[X™\ˆOHKŠH×ˆYˆ
[X™\“Ù”™]\›œÈOHKŠH×ˆËÈÚ[™ÛWˆ™]\›•\HHŽ×ˆH[ÙH×ˆËÈš\œÝˆ™]\›•\HHKŽ×ˆWˆH[ÙH×ˆYˆ
™]\›“[X™\ˆOH[X™\“Ù”™]\›œÊH×ˆËÈ\Ýˆ™]\›•\HHËŽ×ˆH[ÙH×ˆËÈ[\›YYX]Wˆ™]\›•\HH‹Ž×ˆWˆWˆ™XÌˆ]ˆH™XÌŠ™]\›•\KÌMK‹JN×ˆÛÛÜˆH^\™L‘
\ØÜ™]U^\™K]ŠN×ˆH[ÙHYˆ
[ÙHOH•×ÓSÑWÔ‘UT“—ÐÓÕS•
H×ˆ™XÌˆ]ˆH™XÌŠ[X™\“Ù”™]\›œËÌMK‹JN×ˆÛÛÜˆH^\™L‘
\ØÜ™]U^\™K]ŠN×ˆH[ÙHYˆ
[ÙHOH•×ÓSÑWÔÒS•ÔÓÕTÑWÒQ
H×ˆ™XÌˆ]ˆH™XÌŠ[Ù
Ú[ÛÝ\˜ÙRQÓÕTÑWÒQÑÔ“ÕT
KÌMK‹JN×ˆÛÛÜˆH^\™L‘
\ØÜ™]U^\™K]ŠN×ˆH[ÙHYˆ
[ÙHOH•×ÓSÑWÔÐÐS—ÐS‘ÓJH×ˆ›Ø]HH
ØØ[[™ÛHH[™ÛT˜[™ÙKž
HÈ
[™ÛT˜[™ÙKžHH[™ÛT˜[™ÙKž
N×ˆ™XÌˆ]ˆH™XÌŠK
KˆHJJN×ˆÛÛÜˆH^\™L‘
Ü˜YY[^\™K]ŠN×ˆH[ÙHYˆ
[ÙHOH•×ÓSÑWÒS•S”ÒUJH×ˆ›Ø]HH
[[œÚ]HH[[œÚ]T˜[™ÙKž
HÈ
[[œÚ]T˜[™ÙKžHH[[œÚ]T˜[™ÙKž
N×ˆ™XÌˆ]ˆH™XÌŠK
KˆHJJN×ˆÛÛÜˆH^\™L‘
Ü˜YY[^\™K]ŠN×ˆH[ÙHYˆ
[ÙHOH•×ÓSÑWÑSUUSÓŠH×ˆ›Ø]ˆH
[Ù[X]š^
ˆ™XÍ
ÜÚ][Û‹KŒ
JKžŽ×ˆ›Ø]HH
ˆH[]˜][Û”˜[™ÙKž
HÈ
[]˜][Û”˜[™ÙKžHH[]˜][Û”˜[™ÙKž
N×ˆ™XÌˆ]ˆH™XÌŠK
KˆHJJN×ˆÛÛÜˆH^\™L‘
Ü˜YY[^\™K]ŠN×ˆWˆW—ˆYˆ
^\™L‘
š\ÚXš[]U^\™K]ŠKœˆOHŠH×ˆÛÛÜ‹˜HHŽ×ˆW—ˆÙYš[™HTÑWÐÓÓÔ—ÐSWˆÚ[˜ÛYH[ÜœÛÛÜ—Ý™\^—ˆÚ[˜ÛYH™YÚ[—Ý™\^—ˆÚ[˜ÛYH[Üœ\™Ù]Ý™\^—ˆÚ[˜ÛYH›Ú™XÝÝ™\^——ˆÛÔÚ[Ú^™HHÚ^™N×—ˆYˆ
Ú^™S[ÙHOH•×ÔÒV‘WÓSÑWÐUS•PUQ
H×ˆ›ÛÛ\Ô\œÜXÝ]™HH\Ô\œÜXÝ]™SX]š^
›Ú™XÝ[Û“X]š^
N×—ˆYˆ
\Ô\œÜXÝ]™JH×ˆÛÔÚ[Ú^™H
HØØ[HÈ[]”ÜÚ][Û‹žŽ×ˆÛÔÚ[Ú^™HHÛ[\
ÛÔÚ[Ú^™KZ[][X]YÚ^™KX^][X]YÚ^™JN×ˆWˆW—ˆÚ[˜ÛYHÙÙ\Y—Ý™\^—ˆÚ[˜ÛYHÛ\[™×Ü[™\×Ý™\^—ˆÚ[˜ÛYHÛÜ›Ü×Ý™\^—ˆÚ[˜ÛYH›Ù×Ý™\^—ŸWˆ‹\Ë™œ˜YÛY[ÚY\HˆÙYš[™HTÑWÐÓÓÔ—ÐSW—ˆÚ[˜ÛYHÛÛÜ—Ü\œ×Ùœ˜YÛY[—ˆÚ[˜ÛYHX\Ü\XÛWÜ\œ×Ùœ˜YÛY[—ˆÚ[˜ÛYH[]\ÝÜ\œ×Ùœ˜YÛY[—ˆÚ[˜ÛYH[Z\ÚÜ\œ×Ùœ˜YÛY[—ˆÚ[˜ÛYH›Ù×Ü\œ×Ùœ˜YÛY[—ˆÚ[˜ÛYHÙÙ\Y—Ü\œ×Ùœ˜YÛY[—ˆÚ[˜ÛYHÛ\[™×Ü[™\×Ü\œ×Ùœ˜YÛY[——[šY›Ü›H™XÌÈY™\ÙN×[šY›Ü›H›Ø]ÜXÚ]N×[šY›Ü›H›Ø]Ø[[XN×[šY›Ü›H›Ø][XšY[›ÛÜÝ×—[šY›Ü›H›ÛÛXÚÚ[™Î×[šY›Ü›H[Ú\N×—›ÚYXZ[Š
H×—‹ËÈX\›H\ØØ\™
Û\[™È[™\È[™Ú\JWˆÚ[˜ÛYHÛ\[™×Ü[™\×Ùœ˜YÛY[—ˆYˆ
Ú\HOH•×ÔÒTWÐÒTÓJH×ˆËØÚ\˜Ý[\ˆ™[™\š[™È[ˆÛÛˆYˆ

[™Ý
ÛÔÚ[ÛÛÜ™HJHˆJJH×ˆ\ØØ\™×ˆWˆW—ˆÚ[˜ÛYHÙÙ\Y—Ùœ˜YÛY[——ˆ™XÍY™\ÙPÛÛÜˆH™XÍ
Y™\ÙKÜXÚ]JN×ˆÚ[˜ÛYHX\Ü\XÛWÙœ˜YÛY[—ˆÚ[˜ÛYHÛÛÜ—Ùœ˜YÛY[——ˆÚ[˜ÛYH[]\ÝÙœ˜YÛY[—ˆÚ[˜ÛYH[Z\ÚÙœ˜YÛY[——ˆ™XÌÈÝ]ÛÚ[™ÓYÚHY™\ÙPÛÛÜ‹œ™ØŽ×ˆˆÝ]ÛÚ[™ÓYÚHX^
Ý]ÛÚ[™ÓYÚ™XÌÊ[XšY[›ÛÜÝ
JN×ˆˆÝ]ÛÚ[™ÓYÚHÝÊÝ]ÛÚ[™ÓYÚ™XÌÊKŒÈØ[[XJJN×ˆˆÚ[˜ÛYHÜ\]YWÙœ˜YÛY[ˆËÈÛÑœ˜YÐÛÛÜ—ˆÚ[˜ÛYHÛ™[X\[™×Ùœ˜YÛY[—ˆÚ[˜ÛYH›Ù×Ùœ˜YÛY[—ˆÚ[˜ÛYH™[][\YYØ[WÙœ˜YÛY[——ŸWˆ‹\Ë™Ü˜YY[ÏYK\Ë™Ü˜YY[^\™O[™]ÈË‘ÓÔ‹™œÙ]Yš[™SX\[™Ê\Ë”•×ÓSÑH‹\
K™œÙ]Yš[™SX\[™Ê\Ë”•×ÔÒTH‹œ
K™œÙ]Yš[™SX\[™Ê\Ë”•×ÔÒV‘WÓSÑH‹œ
K\ËœÚ^™O[™œÙ][šY›Ü›T›Ü\J\Ë›[ÙH‹ÊK™œÙ][šY›Ü›T›Ü\J\ËœÚ\H‹
K™œÙ][šY›Ü›T›Ü\J\ËœXÚÚ[™È‹LJK™œÙ][šY›Ü›T›Ü\J\Ë›ÜXÚ]H‹\Ë›ÜXÚ]JK™œÙ][šY›Ü›T›Ü\J\Ëš[[œÚ]T˜[™ÙH‹ŠK™œÙ][šY›Ü›T›Ü\J\Ë™[]˜][Û”˜[™ÙH‹ŠK™œÙ][šY›Ü›T›Ü\J\Ë˜[™ÛT˜[™ÙH‹JK™œÙ][šY›Ü›T›Ü\J\ËœÚ^™S[ÙH‹JK™œÙ][šY›Ü›T›Ü\J\ËœØØ[H‹ÊK™œÙ][šY›Ü›T›Ü\J\Ë›Z[][X]YÚ^™H‹
K™œÙ][šY›Ü›T›Ü\J\Ë›X^][X]YÚ^™H‹
K™œÙ][šY›Ü›T›Ü\J\Ë™Ø[[XH‹JK™œÙ][šY›Ü›T›Ü\J\Ë˜[XšY[›ÛÜÝ‹JNØÛÛœÝ[™]ÈZ[\œ˜^JL
K[™]ÈË‘ÖQŠ‹M‹KË‘ÕÙ
NÞ›™YYÕ\]OHL›XYÑš[\\Ëš‹™œÙ][šY›Ü›T›Ü\J\Ë˜Û\ÜÚYšXØ][Û•^\™H‹
NØÛÛœÝÏ[™]ÈZ[\œ˜^JL
KÏ[™]ÈË‘ÖQŠËM‹KË‘ÕÙ
NÝË›™YYÕ\]OHLË›XYÑš[\\Ëš‹™œÙ][šY›Ü›T›Ü\J\Ë™\ØÜ™]U^\™H‹ÊNØÛÛœÝ[™]ÈZ[\œ˜^JMŠKO[™]ÈË‘ÖQŠ‹M‹KË••
NÑK›™YYÕ\]OHLK›XYÑš[\\Ëš‹™œÙ][šY›Ü›T›Ü\J\Ëš\ÚXš[]U^\™H‹JK\Ë˜Û\ÜÚYšXØ][Û”ØÚ[YO[Ë\Ë™\ØÜ™]TØÚ[YOXK\Ëœ™XÛÛ\]PÛ\ÜÚYšXØ][ÛŠ
K\Ëœ™XÛÛ\]Q\ØÜ™]U^\™J
K\Ëœ™XÛÛ\]Uš\ÚXš[]U^\™J
K\Ë™Ü˜YY[Y‹™œÙ][šY›Ü›T›Ü\J\Ë™Ü˜YY[^\™H‹\Ë™Ü˜YY[^\™J_XÛÜJ
^Ü™]\›ˆš\ÔÚY\“X]\šX[ÜÝ\\‹˜ÛÜJ
NœËš[[‹œ›ÝÝ\K˜ÛÜK˜Ø[
\Ë
K\Ë˜ÛÛÜ‹˜ÛÜJ˜ÛÛÜŠK\Ë›X\]›X\\Ë˜[SX\]˜[SX\\ËœÚ^™O]œÚ^™K\ËœÚ^™P][X][Û]œÚ^™P][X][Û‹\Ë™›ÙÏ]™›ÙË\ßYÙ]ÛÛÜŠ
^Ü™]\›ˆ\Ë[šY›Ü›\Ë™Y™\ÙK˜[Y_\Ù]ÛÛÜŠ
^Ý\Ë[šY›Ü›\Ë™Y™\ÙK˜[YK˜ÛÜJ
_YÙ]X\

^Ü™]\›ˆ\Ë[šY›Ü›\Ë›X\˜[Y_\Ù]X\

^Ý\Ë[šY›Ü›\Ë›X\˜[YO]	‰Š›X]š^]]Õ\]I‰\]SX]š^

K\Ë[šY›Ü›\Ë]•˜[œÙ›Ü›K˜[YK˜ÛÜJ›X]š^
J_YÙ][SX\

^Ü™]\›ˆ\Ë[šY›Ü›\Ë˜[SX\˜[Y_\Ù][SX\

^Ý\Ë[šY›Ü›\Ë˜[SX\˜[YO]	‰Š›X]š^]]Õ\]I‰\]SX]š^

K\Ë[šY›Ü›\Ë˜[SX\˜[œÙ›Ü›K˜[YK˜ÛÜJ›X]š^
J_YÙ]Ú^™J
^Ü™]\›ˆ\Ë[šY›Ü›\ËœÚ^™K˜[Y_\Ù]Ú^™J
^Ý\Ë[šY›Ü›\ËœÚ^™K˜[YO]YÙ]Ú^™P][X][ÛŠ
^Ü™]\›ˆ\ËœÚ^™S[ÙHOO[œ•SQ_\Ù]Ú^™P][X][ÛŠ
^Ý\ËœÚ^™S[ÙO]ÛœUS•PUQ›œ•SQ_YÙ]Ø[[XJ
^Ü™]\›ˆ\Ë[šY›Ü›\Ë™Ø[[XK˜[Y_\Ù]Ø[[XJ
^Ý\Ë[šY›Ü›\Ë™Ø[[XK˜[YO]YÙ][XšY[›ÛÜÝ

^Ü™]\›ˆ\Ë[šY›Ü›\Ë˜[XšY[›ÛÜÝ˜[Y_\Ù][XšY[›ÛÜÝ

^Ý\Ë[šY›Ü›\Ë˜[XšY[›ÛÜÝ˜[YO]\™XÛÛ\]PÛ\ÜÚYšXØ][ÛŠ
^Ø\
\Ë˜Û\ÜÚYšXØ][Û”ØÚ[YK\Ë˜Û\ÜÚYšXØ][Û•^\™KMŠK\Ë™\Ü]Ú]™[
Ý\Nˆ›X]\šX[Ü›Ü\WØÚ[™ÙY‹\™Ù]\Ë[šY›Ü›\ßJ_\™XÛÛ\]Q\ØÜ™]U^\™J
^Ø\
\Ë™\ØÜ™]TØÚ[YK\Ë™\ØÜ™]U^\™JK\Ë™\Ü]Ú]™[
Ý\Nˆ›X]\šX[Ü›Ü\WØÚ[™ÙY‹\™Ù]\Ë[šY›Ü›\ßJ_\™XÛÛ\]Uš\ÚXš[]U^\™J
^ØÛÛœÝ]\Ëš\ÚXš[]U^\™KO]\Ë˜Û\ÜÚYšXØ][Û”ØÚ[YK]š[XYÙK™]K]š[XYÙKÚYÙ›ÜŠ]LÝŽÝ
ÊÊ^Û]ŽÛYVÝOÙVÝKš\ÚX›NˆYK‘QUSK‘QUSš\ÚX›K–ÝO[ÌMNŒ]›™YYÕ\]OHL\Ë™\Ü]Ú]™[
Ý\Nˆ›X]\šX[Ü›Ü\WØÚ[™ÙY‹\™Ù]\Ë[šY›Ü›\ßJ_Y[˜X›TXÚÚ[™Ê
^Ý\ËœXÚÚ[™Ï]\Ë˜›[™[™Ï]ÜË–YÎœË“•_\Ù]Ü˜YY[

^Ý\Ë™Ü˜YY[^\™OY[˜Ý[ÛŠ
^ØÛÛœÝOMYØÝ[Y[˜Ü™X]Q[[Y[
˜Ø[˜\ÈŠNÜ‹ÚYYK‹šZYÚYNØÛÛœÝ\‹™Ù]ÛÛ^
Œ™ŠNÛ‹œ™XÝ
KJNØÛÛœÝO[‹˜Ü™X]S[™X\‘Ü˜YY[
KJNÙ›ÜŠ]OLÙO›[™ÝÙJÊÊ^ØÛÛœÝ]ÙWNÚK˜YÛÛÜ”ÝÜ
–ÌKÉÜ–ÌWK™Ù]^Ýš[™Ê
_X
_[‹™š[Ý[OZK‹™š[

NØÛÛœÝÏ[™]ÈË‘ÓÔŠŠNÜ™]\›ˆË›™YYÕ\]OHLË›Z[‘š[\\ËšÍœKËÜ˜\\Ë‘ÒžËœ™\X]L‹ßJ
__XÛÛœÝÜ[[™]ÈË›Ë\^ßK[™]ÈYÙœ™YÚ\Ý\Š


OO›™]ÈJJKœ™YÚ\Ý\Š


OO›™]ÈY
JKœ™YÚ\Ý\Š


OO›™]È™
JNØÛÛœÝ^ÓÐQÕSWÔÑUˆ›ØY][K\Ù]‹ÐQÓSÑSˆ›ØY[[Ù[‹TÔÔÑWÓSÑSˆ™\ÜÜÙK[[Ù[‹SWÕ’TÒP’SUWÐÒS‘ÑNˆ[K]š\ÚXš[]KXÚ[™ÙH‹ST×ÓÐQÔÕT•ˆ[\Ë[ØY\Ý\‹ST×ÓÐQÑS‘ˆ[\Ë[ØYY[™ŸNÙ[˜Ý[Ûˆœ
J^ÚYŠ]
]›ÝÈ™]È\œ›ÜŠ”]È˜XÛÈ›Û\ˆ\ÈX[™]ÜžHŠNØÛÛœÝ[™]ÈYÜ‹œÙ]XÛÙ\”]

KI‰œ‹œÙ]XÛÙ\ÛÛ™šYÊJKœÙ]PÓÓØY\ŠŠ_Y[˜Ý[Ûˆ\
J^ÚYŠ]YJ]›ÝÈ™]È\œ›ÜŠ”]ÈÝˆ›Û\ˆ[™™[™\™\ˆ\™HX[™]ÜžHŠNØÛÛœÝ[™]ÈYÜ‹œÙ]˜[œØÛÙ\”]

K‹™]XÝÝ\Ü
JKœÙ]Õ“ØY\ŠŠ_Y[˜Ý[ÛˆÜ

^ÚYŠ]
]›ÝÈ™]È\œ›ÜŠ“Y\ÚÜXÛÙ\ˆ[Ù[H\ÈX[™]ÜžHŠNÙœÙ]Y\ÚÜXÛÙ\Š
_XÛÛœÝ\J
OOžØÛÛœÛÛKØ\›Š–ÓÑÐÌÑ[\Ó^Y\—HX]\šX[›Ü\HØ[››Ý™HÙ]œ›ÛHHX]\šX[\ÙH^Y\ˆ›Ü\Y\È[œÝXYŠ_K\XÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠJ^ØÛÛœÝÜÓ[ÙNœY\ÓÓÔ‹ÔÚ\N›\œÒTÓKÛ\ÜÚYšXØ][ÛŽšO\Ü‘QUSÔÚ^™S[ÙN›Ï[œ•SQKÓZ[][X]YÚ^™N˜OLËÓX^][X]YÚ^™N›LL‹‹˜ßOYNÜÝ\\Š™]ÈË–R›ÊK\Ëš\ÓÑÐÌÑ[\Ó^Y\HL\ËœÓ[ÙO\‹\ËœÔÚ\O[‹\Ë˜Û\ÜÚYšXØ][ÛZK\ËœÔÚ^™S[ÙO[Ë\ËœÓZ[][X]YÚ^™OXK\ËœÓX^][X]YÚ^™O[\Ë[\Ô™[™\™\[™]ÈJ\ËœÛÝ\˜ÙK\›
KKœÛÝ\˜ÙKš\ÓÑÐÌÑ[\Ò[Û”ÛÝ\˜ÙOÝ\Ë[\Ô™[™\™\‹œ™YÚ\Ý\”YÚ[Š™]ÈÙ
Ø\UÚÙ[Ž™KœÛÝ\˜ÙK˜XØÙ\ÜÕÚÙ[‹\ÜÙ]Y™KœÛÝ\˜ÙK˜\ÜÙ]Y]]Ô™Yœ™\ÚÚÙ[ŽˆLJJN™KœÛÝ\˜ÙKš\ÓÑÐÌÑ[\ÑÛÛÙÛTÛÝ\˜ÙI‰\Ë[\Ô™[™\™\‹œ™YÚ\Ý\”YÚ[Š™]ÈÙ
Ø\UÚÙ[Ž™KœÛÝ\˜ÙKšÙ^K]]Ô™Yœ™\ÚÚÙ[ŽˆLJJK\Ë[\Ô™[™\™\‹œ™YÚ\Ý\”YÚ[Š™]ÈY
K\Ë[\Ô™[™\™\‹›X[˜YÙ\‹˜Y[™\Š×™Û‰Ë
K\Ë›Øš™XÝÙ˜Y
\Ë[\Ô™[™\™\‹™Ü›Ý\
K\Ë—Ü™\Ï]\Ë˜Y[š]X[^˜][Û”Ý\

K\ËœÜÙU™\ÚÛ]\Ë[\Ô™[™\™\‹™\œ›Ü•\™Ù]Øš™XÝ™Yš[™T›Ü\J\ËœÜÙU™\ÚÛ‹ÙÙ]

^Ü™]\›ˆ\Ë[\Ô™[™\™\‹™\œ›Ü•\™Ù]KÙ]

^Ý\Ë[\Ô™[™\™\‹™\œ›Ü•\™Ù]]_JKKœÜÙU™\ÚÛ	‰Š\ËœÜÙU™\ÚÛYKœÜÙU™\ÚÛ
K\Ë\ÚÜÏV×K\Ë[\ÔØÚY[[™ÐÐ]OžÝ\Ë\ÚÜËœ\Ú

__WÜÙ]\ØXÚP[™]Y]Y\Ê
^ØÛÛœÝO]šYÚYŠ\ÙWJ]\Ë[\Ô™[™\™\‹›PØXÚO]\ÙWK›PØXÚK\Ë[\Ô™[™\™\‹™ÝÛ›ØY]Y]YO]\ÙWK™ÝÛ›ØY]Y]YK\Ë[\Ô™[™\™\‹œ\œÙT]Y]YO]\ÙWKœ\œÙT]Y]YK\ÙWK›^Y\Ø[˜XÚÜÖÝ\ËšYO]\Ë[\ÔØÚY[[™ÐÐŽÙ[Ù^ØÛÛœÝ]OžÓØš™XÝ˜[Y\Ê\ÙWK›^Y\Ø[˜XÚÜÊK™›Ü‘XXÚ

OOžÙJ
_JJ_NÝ\Ë[\Ô™[™\™\‹™ÝÛ›ØY]Y]YKœØÚY[[™ÐØ[˜XÚÏ\‹\Ë[\Ô™[™\™\‹œ\œÙT]Y]YKœØÚY[[™ÐØ[˜XÚÏ\‹\ÙWO^ÛPØXÚN\Ë[\Ô™[™\™\‹›PØXÚKÝÛ›ØY]Y]YN\Ë[\Ô™[™\™\‹™ÝÛ›ØY]Y]YK\œÙT]Y]YN\Ë[\Ô™[™\™\‹œ\œÙT]Y]YK^Y\Ø[˜XÚÜÎžÖÝ\ËšYN\Ë[\ÔØÚY[[™ÐÐŸ_K˜Y]™[\Ý[™\Š™‹‘TÔÔÑQ
OžÙ[]H\Ý\™Ù]šY_JJ_]\Ë—ÝšY]ÒYY_WÜÙ]\]™[Ê
^Ù›ÜŠÛÛœÝÙˆØš™XÝ˜[Y\Ê
J]\Ë[\Ô™[™\™\‹˜Y]™[\Ý[™\Š
OžÝ\Ë™\Ü]Ú]™[

_JJ_WÜÙ]\

^Ý\Ë[\Ô™[™\™\‹œÙ]Ø[Y\˜J˜Ø[Y\˜LÑ
K\Ë[\Ô™[™\™\‹œÙ]™\ÛÛ][Û‘œ›ÛT™[™\™\Š˜Ø[Y\˜LÑœ™[™\™\ŠNÛ]OHLNÝ\Ë[\Ô™[™\™\‹˜Y]™[\Ý[™\Š›ØY][K\Ù]‹


OOžÝ››ÝYžPÚ[™ÙJ\ÊK_
OHL\Ë—Ü™\Ê
J_JJK\Ë[\Ô™[™\™\‹˜Y]™[\Ý[™\Š›ØY[[Ù[‹
OOžØÛÛœÝÜØÙ[™NœŸOYNÜ‹˜]™\œÙJ
OžÝ\Ë—Ø\ÜÚYÛ‘š[˜[X]\šX[

K\Ë—Ø\ÜÚYÛ‘š[˜[]šX]\Ê
_JJK››ÝYžPÚ[™ÙJ\Ê_JJK\Ë—ÜÙ]\ØXÚP[™]Y]Y\Ê
K\Ë—ÜÙ]\]™[Ê
K\Ë[\Ô™[™\™\‹\]J
_WØ\ÜÚYÛ‘š[˜[X]\šX[

^ÚYŠ]š\ÓY\Ú	‰ˆ]š\ÔÚ[Ê\™]\›ŽÛ]O]›X]\šX[ÚYŠš\ÔÚ[Ê^ØÛÛœÝ[™]ÈÜ
Û[ÙN\ËœÓ[ÙKÚ\N\ËœÔÚ\KÛ\ÜÚYšXØ][Û”ØÚ[YN\Ë˜Û\ÜÚYšXØ][Û‹Ú^™S[ÙN\ËœÔÚ^™S[ÙKZ[][X]YÚ^™N\ËœÓZ[][X]YÚ^™KX^][X]YÚ^™N\ËœÓX^][X]YÚ^™_JNÝ˜ÛÜJJKO][˜Ý[ÛŠJ^Û]]˜[œÜ\™[ÓØš™XÝ™Yš[™T›Ü\J˜[œÜ\™[‹ÙÙ]Š
OOžØÛÛœÝO]›ÜXÚ]O_˜Û\ÜÚYšXØ][Û•^\™K\Ù\‘]K˜[œÜ\™[Ü™]\›ˆHO\‰‰Š›™YYÕ\]OHLYJK_KÙ]\JKØš™XÝ™Yš[™T›Ü\JÚ\™Yœ˜[YH‹ÙÙ]Š
OO™KÚ\™Yœ˜[YKÙ]\JKØš™XÝ™Yš[™T›Ü\J[šY›Ü›\Ë›ÜXÚ]K˜[YH‹ÙÙ]Š
OO™K›ÜXÚ]KÙ]\JKØš™XÝ™Yš[™T›Ü\J[šY›Ü›\Ë›[ÙK˜[YH‹ÙÙ]Š
OO™KœÓ[ÙKÙ]\JKØš™XÝ™Yš[™T›Ü\J[šY›Ü›\ËœÚ\K˜[YH‹ÙÙ]Š
OO™KœÔÚ\KÙ]\JKØš™XÝ™Yš[™T›Ü\J[šY›Ü›\ËœÚ^™S[ÙK˜[YH‹ÙÙ]Š
OO™KœÔÚ^™S[ÙKÙ]\JKØš™XÝ™Yš[™T›Ü\J[šY›Ü›\Ë›Z[][X]YÚ^™K˜[YH‹ÙÙ]Š
OO™KœÓZ[][X]YÚ^™KÙ]\JKØš™XÝ™Yš[™T›Ü\J[šY›Ü›\Ë›X^][X]YÚ^™K˜[YH‹ÙÙ]Š
OO™KœÓX^][X]YÚ^™KÙ]\JKØš™XÝ™Yš[™T›Ü\J[šY›Ü›\ËœØØ[K˜[YH‹ÙÙ]Š
OO™KœØØ[KÙ]\J_JK\Ê_Y[ÙHY[˜Ý[ÛŠJ^ÓØš™XÝ™Yš[™T›Ü\J›ÜXÚ]H‹ÙÙ]Š
OO™K›ÜXÚ]KÙ]\JNÛ]]˜[œÜ\™[ÓØš™XÝ™Yš[™T›Ü\J˜[œÜ\™[‹ÙÙ]Š
OOžØÛÛœÝO]›ÜXÚ]ONÜ™]\›ˆHO\‰‰Š›™YYÕ\]OHLYJK_KÙ]\JKØš™XÝ™Yš[™T›Ü\JÚ\™Yœ˜[YH‹ÙÙ]Š
OO™KÚ\™Yœ˜[YKÙ]\J_JK\ÊNÝ›X]\šX[Y_WØ\ÜÚYÛ‘š[˜[]šX]\Ê
^ØÛÛœÝO]™Ù[ÛY]žK]˜˜]ÚX›NÚYŠš\ÔÚ[Ê^ØÛÛœÝ\Ë™Ù]›Ü\P\œ˜^JÛ\ÜÚYšXØ][ÛˆŠNÝ	‰™KœÙ]]šX]J˜Û\ÜÚYšXØ][Ûˆ‹™]ÈË•ÊJJ__Z[™U\ÚÜÊ
^Ù›ÜŠ]LO]\Ë\ÚÜË›[™ÝÝNÝ
ÊÊ]\Ë\ÚÜÖÝJ
NÝ\Ë\ÚÜË›[™ÝL\™U\]J
^Ü™]\›ˆ\ËœØØ[O]˜Ø[Y\˜K—Ü™TÔÑK\Ëš[™U\ÚÜÊ
K\Ë[\Ô™[™\™\‹\]J
K[]\]J
^ßY[]J
^Û[O]\Ë—ÝšY]ÒY	‰\Ý\Ë—ÝšY]ÒYOË›^Y\Ø[˜XÚÜÉ‰Š[]H\Ý\Ë—ÝšY]ÒYK›^Y\Ø[˜XÚÜÖÝ\ËšYKOOSØš™XÝšÙ^\Ê\Ý\Ë—ÝšY]ÒYK›^Y\Ø[˜XÚÜÊK›[™Ý	‰™[]H\Ý\Ë—ÝšY]ÒYJK\Ë[\Ô™[™\™\‹™\ÜÜÙJ
K\Ë[\ÔØÚY[[™ÐÐ[[\Ë—ÝšY]ÒY[[X\Þ[˜ÈÙ]Y]Y]Qœ›ÛR[\œÙXÝ[ÛœÊ
^ÚYŠ]›[™Ý
\™]\›ˆ[ØÛÛœÝOX]ØZ]\Þ[˜È[˜Ý[ÛŠ
^ØÛÛœÝÜÚ[™KØš™XÝœ‹˜XÙN›‹˜XÙR[™^š_O]ÛY\Ú™X]\™\Î›ËÝXÝ\˜[Y]Y]N˜_O\‹\Ù\‘]K[™]ÈË”LÚYŠŠ^ØÛÛœÝ\‹™Ù[ÛY]žK™Ù]]šX]JœÜÚ][ÛˆŠKOJ™]ÈË›[
KœÙ]œ›ÛP]šX]P[™[™XÙ\Ê‹˜K‹˜‹‹˜ÊNÚK˜K˜\SX]š^
‹›X]š^ÛÜ›
KK˜‹˜\SX]š^
‹›X]š^ÛÜ›
KK˜Ë˜\SX]š^
‹›X]š^ÛÜ›
KK™Ù]˜\žXÛÛÜ™
K
_Y[ÙHœÙ]

NØÛÛœÝÙ™X]\™\Î˜Ë™X]\™RYÎšO[ÏØ]ØZ]\Þ[˜È[˜Ý[ÛŠJ^ØÛÛœÝÙ˜XÙR[™^œ‹˜\žXÛÛÜ™›ŸOYNÜ™]\›žÙ™X]\™\Î˜]ØZ]™Ù]™X]\™\Ð\Þ[˜Ê‹ŠK™X]\™RYÎ™Ù]™X]\™R[™›Ê
__JËÙ˜XÙR[™^šK˜\žXÛÛÜ™›JNžßKOZË›X\

Oœ›Ü\UX›JJKXOÙ[˜Ý[ÛŠJ^ØÛÛœÝÚ[™^œ‹˜XÙR[™^›‹˜\žXÛÛÜ™šKX›R[™XÙ\ÎœË™X]\™\Î›ßOYKOV×NÝ›ÚYOO\É‰›ÚYOO[É‰™Ù]›Ü\UX›Q]JËËJNØÛÛœÝV×NÝ›ÚYOO\‰‰™Ù]›Ü\P]šX]Q]J‹
NØÛÛœÝÏV×NÜ™]\›ˆ›ÚYOO[‰‰™Ù]›Ü\U^\™Q]J‹KÊKË‹‹˜K‹‹˜Ë‹‹›_JKË‹‹˜\žXÛÛÜ™›X›R[™XÙ\ÎK™X]\™\Î˜ßJN–×NÜ™]\›ˆJÌJNÜ™]\›ˆ_YÙ]ÌÑ[Q™X]\™Qœ›ÛR[\œÙXÝÐ\œ˜^J
^ÚYŠ]›[™Ý
\™]\›ˆ[ØÛÛœÝÙ˜XÙN™K[™^œ‹Øš™XÝ›‹[œÝ[˜ÙRYš_O]ÌNÛ]ÎÚYŠ‹š\ÔÚ[É‰›[O\ÜÏ[‹™Ù[ÛY]žK™Ù]]šX]J—Ø˜]ÚYŠOË™Ù]
ŠOÏÜŽ›‹š\ÓY\Ú	‰™I‰ŠÏ[‹™Ù[ÛY]žK™Ù]]šX]J—Ø˜]ÚYŠOË™Ù]
K˜JOÏÚJK›ÚYOO\Ê\™]\›ˆ[Û]Ï[ŽÙ›ÜŠÈ[Ë˜˜]ÚX›NÊ[Ï[Ëœ\™[Ü™]\›ˆË˜˜]ÚX›K™Ù]]Qœ›ÛRY
Ê_\XÚÓØš™XÝÐ]
J^Û]X\™Ý[Y[Ë›[™ÝŒÉ‰›ÚYOOX\™Ý[Y[ÖÌ×OØ\™Ý[Y[ÖÌ×N–×NØÛÛœÝ]˜Ø[Y\˜K˜Ø[Y\˜LÑÚœÙ]œ›ÛPØ[Y\˜JšY]ÕÓ›Ü›X[^™YÛÛÜ™ÊJKŠK›™X\[‹›™X\‹™˜\[‹™˜\‹™š\œÝ]Û›OHLØÛÛœÝOZš[\œÙXÝØš™XÝ
\Ë[\Ô™[™\™\‹™Ü›Ý\L
NÜ™]\›ˆK™›Ü‘XXÚ

OžÝ›^Y\]\ßJJK‹œ\Ú
‹‹šJKŸX]XÚ

^ØÛÛœÛÛKØ\›Š–ÓÑÐÌÑ[\Ó^Y\—Nˆ]XÚ[™ÈÈ]XÚ[™È^Y\œÈ\È›ÝY][\[Y[Y›ÜˆÑÐÌÑ[\Ó^Y\‹ˆŠ_Y]XÚ

^Ü™]\›ˆÛÛœÛÛKØ\›Š–ÓÑÐÌÑ[\Ó^Y\—Nˆ]XÚ[™ÈÈ]XÚ[™È^Y\œÈ\È›ÝY][\[Y[Y›ÜˆÑÐÌÑ[\Ó^Y\‹ˆŠKLYÙ]Øš™XÝÕ\]Q›Ü]XÚY^Y\œÊ
^Ü™]\›ˆ[Y›Ü‘XXÚ[J
^Ý\Ë[\Ô™[™\™\‹˜]™\œÙJ
OOžÝ
KK˜ØXÚYœØÙ[™J_JJ__KœJ™]ÈËšÛ
K›XZÙT›Ý][Û–
X]”KÌŠKJ™]ÈËšÛ
K›XZÙT›Ý][Û–ŠSX]”KÌŠKÜ[™]È^XÛÙ\ŽÙ[˜Ý[ÛˆÜ

^ØÛÛœÝOVÈ“SÑS’QUÈ‹“SÑS’QUÒS•‘T”ÑUS”ÔÔÑH‹”“Ò‘PÕSÓˆ‹’“ÒS•PU’V—NÚYŠ™Û”ÚY\Š^ØÛÛœÝV×NÙ›ÜŠÛÛœÝH[ˆ™Û”ÚY\‹˜›Ý[™[šY›Ü›\Ê\‹œ\Ú
JNÙ›ÜŠÛÛœÝˆÙˆŠ^ØÛÛœÝ]™Û”ÚY\‹˜›Ý[™[šY›Ü›\ÖÛ—KœÙ[X[XÎÙKš[˜ÛY\ÊŠ_[]H™Û”ÚY\‹˜›Ý[™[šY›Ü›\ÖÛ—___XÛÛœÝœ^Ü\œÙJJ^ØÛÛœÝHLOOYK™œ\Ý[PÝ[YÚYŠ]
]›ÝÈ™]È\œ›ÜŠ“›È\œ˜^HY™™\ˆ›ÝšYYˆŠNØÛÛœÝ[™]È]UšY]Ê
NÛ]OLØÛÛœÝÏ^ßNÚYŠË›XYÚXÏWÜ™XÛÙJ™]ÈZ[\œ˜^J
JKË›XYÚXÊ^ÛË™\œÚ[Û[‹™Ù]Z[ÌŠKL
KJÏUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•Ë˜ž]S[™Ý[‹™Ù]Z[ÌŠKL
KJÏUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•Ë‘•”ÓÓ“[™Ý[‹™Ù]Z[ÌŠKL
KJÏUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•Ë‘•š[˜\žS[™Ý[‹™Ù]Z[ÌŠKL
KJÏUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•Ë•”ÓÓ“[™Ý[‹™Ù]Z[ÌŠKL
KJÏUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•Ë•š[˜\žS[™Ý[‹™Ù]Z[ÌŠKL
KJÏUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•ØÛÛœÝOZJÍV×NÛ]Ï^ßNØÛÛœÝ[™]ÈË”LÚYŠË‘•”ÓÓ“[™ÝŒ
^ØÛÛœÝOXK]œÛXÙJKË‘•”ÓÓ“[™Ý
ÙJKWÜ™XÛÙJ™]ÈZ[\œ˜^JŠJNØÏR”ÓÓ‹œ\œÙJŠKË”•×ÐÑS•TÚ™œ›ÛP\œ˜^JË”•×ÐÑS•TŠNšœÙ]

_ZYŠË‘•š[˜\žS[™ÝŒ	‰˜ÛÛœÛÛKØ\›ŠŒÑ[\È™X]\™HX›Hš[˜\žH›ÝÝ\ÜYY]ˆŠKË•”ÓÓ“[™ÝŒ
^ØÛÛœÝXJÛË‘•”ÓÓ“[™Ý
ÛË‘•š[˜\žS[™Ý]œÛXÙJ‹ŠÛË•”ÓÓ“[™Ý
ÛË•š[˜\žS[™Ý
NÛœ\Ú
›ÛZ\ÙKœ™\ÛÛ™J™]È[
‹Ë•”ÓÓ“[™ÝË•š[˜\žS[™ÝËUÒÓS‘ÕKœ™YÚ\Ý\™Y^[œÚ[ÛœÊJJ_Y[ÙHœ\Ú
›ÛZ\ÙKœ™\ÛÛ™J™]È[
JNØÛÛœÝOXJÛË‘•”ÓÓ“[™Ý
ÛË‘•š[˜\žS[™Ý
ÛË•”ÓÓ“[™Ý
ÛË•š[˜\žS[™Ý]œÛXÙJJKY[˜Ý[ÛŠ
^ÚYŠ™œ\Ý[PÝ[Y\‹›X]\šX[
^ÚYŠK›Ý™\œšYSX]\šX[Ê^ØÛÛœÝ]›X]\šX[È›Øš™XÝO]\[ÙˆK›Ý™\œšYSX]\šX[É‰™K›Ý™\œšYSX]\šX[Ëš\ÓX]\šX[Ý›X]\šX[YK›Ý™\œšYSX]\šX[Î›X]\šX[[™]ÈË•ŽP‹[˜Ý[ÛŠ
^ØÛÛœÝOY[˜Ý[ÛŠ
^ØÛÛœÝOV×NÜ™]\›ˆ˜[SX\	‰™Kœ\Ú
›X\
K˜[ÓX\	‰™Kœ\Ú
›X\
K˜[\X\	‰™Kœ\Ú
˜[\X\
K™\ÜXÙ[Y[X\	‰™Kœ\Ú
˜[\X\
K™[Z\ÜÚ]™SX\	‰™Kœ\Ú
™[Z\ÜÚ]™SX\
K™[“X\	‰™Kœ\Ú
™[“X\
K›YÚX\	‰™Kœ\Ú
™[“X\
K›X\	‰™Kœ\Ú
›X\
K›Y][™\ÜÓX\	‰™Kœ\Ú
›X\
K››Ü›X[X\	‰™Kœ\Ú
›X\
Kœ›ÝYÚ™\ÜÓX\	‰™Kœ\Ú
›X\
KœÜXÝ[\“X\	‰™Kœ\Ú
œÜXÝ[\“X\
K_J
NÚYŠ\œ˜^Kš\Ð\œ˜^J
JY›ÜŠÛÛœÝHÙˆ
YK™\ÜÜÙJ
NÙ[ÙH™\ÜÜÙJ
NÙ›ÜŠ]LÝK›[™ÝÝ
ÊÊYVÝK™\ÜÜÙJ
_JŠ_Y[ÙH‹š\ÓÙÑ\Y™™\”Ý\ÜY

I‰›X]\šX[š\Ô˜]ÔÚY\“X]\šX[	‰ˆYK™Ó›Ý]ÚX]\šX[	‰ŠKœ]ÚX]\šX[›Ü“ÙÑ\Ý\Ü
›X]\šX[
KÛÛœÛÛKØ\›Š™ÛˆÚY\ˆ\È™Y[ˆ]ÚYÈYÙÈ\Y™™\ˆÝ\ÜŠJNØÛ
›X]\šX[K›^Y\Š__NÜ™]\›ˆœ\Ú
œ\œÙP\Þ[˜ÊJK[Š
OžÙ›ÜŠÛÛœÝHÙˆœØÙ[™\ÊYK˜]™\œÙJÜ
NÝ˜\ˆ‹ŽÜ]œØÙ[™K
YK™Û•\^\ÊI‰ˆ–HˆOO[È–OO[‰‰œ‹˜\SX]š^

Nœ‹˜\SX]š^
œ
NØÛÛœÝOQ‹š\ÓÙÑ\Y™™\”Ý\ÜY

I‰ˆYK™Ó›Ý]ÚX]\šX[Ü™]\›ŠLOOOYK™œ\Ý[PÝ[[™ßK›Ý™\œšYSX]\šX[ß_K›^Y\ŠI‰œØÙ[™K˜]™\œÙJ
KœØÙ[™KœÜÚ][Û‹˜ÛÜJ
KJJK˜Ø]Ú

OžÝ›ÝÈ™]È\œ›ÜŠ
_JJJK›ÛZ\ÙK˜[

K[Š
OŠÙÛŽÌWK˜]ÚX›NÌ_JJJK˜Ø]Ú

OžÝ›ÝÈ™]È\œ›ÜŠ
_JJ_]›ÝÈ™]È\œ›ÜŠ’[˜[YŒÙHš[KˆŠ__K\[™]È^XÛÙ\‹Ü[™]È^XÛÙ\ŽÙ[˜Ý[Ûˆ\
KŠ^ØÛÛœÝ\Ëœž™^˜XÝ\›˜\ÙJŠKO^ÙÛ•\^\Î™K[\Ù]˜\ÜÙ]™Û•\^\Ë\›˜\ÙN›‹Ý™\œšYSX]\šX[Î™K›Ý™\œšYSX]\šX[ËÓ›Ý]ÚX]\šX[™K™Ó›Ý]ÚX]\šX[™YÚ\Ý\™Y^[œÚ[ÛœÎ™Kœ™YÚ\Ý\™Y^[œÚ[ÛœË^Y\Ž™_NÜ™]\›ˆœœ\œÙJJK[Š
OŠØ˜]ÚX›N˜˜]ÚX›KØš™XÝÙ™Û‹œØÙ[™_JJJ_Y[˜Ý[ÛˆÜ
KŠ^ØÛÛœÝ\Ëœž™^˜XÝ\›˜\ÙJŠNÜ™]\›ˆœ\œÙP\Þ[˜ÊŠK[Š
OŠÛØš™XÝÙœØÙ[™_JJJ_Y[˜Ý[Ûˆ
J^Ü™]\›ˆ[˜Ý[ÛŠJ^ÚYŠ]
]›ÝÈ™]È\œ›ÜŠ“›È\œ˜^HY™™\ˆ›ÝšYYˆŠNØÛÛœÝ[™]È]UšY]Ê
NÛ]LØÛÛœÝO^ßNÛ]Ï^ßKO^ßNÚYŠK›XYÚXÏQ\™XÛÙJ™]ÈZ[\œ˜^J‹
JKŠÏMK›XYÚXÊ^ÚK™\œÚ[Û\‹™Ù]Z[ÌŠ‹L
KŠÏUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•K˜ž]S[™Ý\‹™Ù]Z[ÌŠ‹L
KŠÏUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•K‘•”ÓÓ“[™Ý\‹™Ù]Z[ÌŠ‹L
KŠÏUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•K‘•š[˜\žS[™Ý\‹™Ù]Z[ÌŠ‹L
KŠÏUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•K•”ÓÓ“[™Ý\‹™Ù]Z[ÌŠ‹L
KŠÏUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•K•š[˜\žS[™Ý\‹™Ù]Z[ÌŠ‹L
KŠÏUZ[Ì\œ˜^K–UT×ÔT—ÑSSQS•Û]^ßNÚYŠK‘•”ÓÓ“[™ÝŒ
^ØÛÛœÝO[‹]œÛXÙJKK‘•”ÓÓ“[™Ý
ÙJKÏQ\™XÛÙJ™]ÈZ[\œ˜^JŠJNÛR”ÓÓ‹œ\œÙJÊ_ZYŠK‘•š[˜\žS[™ÝŒ	‰ŠOY[˜Ý[ÛŠKŠ^ØÛÛœÝ[™]ÈË“ÖKOQ\™XÛÙJ™]ÈZ[\œ˜^JKŠJKÏR”ÓÓ‹œ\œÙJJNÛ]NÚYŠË”ÒS•×ÓS‘Õ	‰ŠO[Ë”ÒS•×ÓS‘Õ
KË”ÔÒUSÓŠ^ØÛÛœÝ[Ë”ÔÒUSÓ‹˜ž]SÙ™œÙ]
ÚK›[™Ý
ÙK[™]È›Ø]Ì\œ˜^J‹Ê˜JNÛ‹œÙ]]šX]JœÜÚ][Ûˆ‹™]ÈË•ÊÊJ_ZYŠË”‘ÐŠ^ØÛÛœÝ[Ë”‘Ð‹˜ž]SÙ™œÙ]
ÚK›[™Ý
ÙK[™]ÈZ[\œ˜^J‹Ê˜JNÛ‹œÙ]]šX]J˜ÛÛÜˆ‹™]ÈË•ÊËL
J_ZYŠË”ÔÒUSÓ—ÔUPS•V‘Q
]›ÝÈ™]È\œ›ÜŠ‘›ÜˆÈØY\‹ÔÒUSÓ—ÔUPS•V‘Qˆ›ÝY]X[˜YÙYŠNÚYŠË”‘ÐJ]›ÝÈ™]È\œ›ÜŠ‘›ÜˆÈØY\‹‘ÐNˆ›ÝY]X[˜YÙYŠNÚYŠË”‘ÐMJ]›ÝÈ™]È\œ›ÜŠ‘›ÜˆÈØY\‹‘ÐMNˆ›ÝY]X[˜YÙYŠNÚYŠË““Ô“PS
]›ÝÈ™]È\œ›ÜŠ‘›ÜˆÈØY\‹“Ô“PSˆ›ÝY]X[˜YÙYŠNÚYŠË““Ô“PSÓÐÕM”
]›ÝÈ™]È\œ›ÜŠ‘›ÜˆÈØY\‹“Ô“PSÓÐÕM”ˆ›ÝY]X[˜YÙYŠNÚYŠËUÒÒQ
]›ÝÈ™]È\œ›ÜŠ‘›ÜˆÈØY\‹UÒÒQˆ›ÝY]X[˜YÙYŠNÜ™]\›žÙÙ[ÛY]žN›‹Ù™œÙ]›Ë”•×ÐÑS•TÊ™]ÈË”L
K™œ›ÛP\œ˜^JË”•×ÐÑS•TŠN›ÚY_J‹K‘•”ÓÓ“[™Ý
JKK•”ÓÓ“[™ÝŒ
^ØÛÛœÝ[ŠÚK‘•”ÓÓ“[™Ý
ÚK‘•š[˜\žS[™ÝÏ]œÛXÙJ‹K•”ÓÓ“[™Ý
ÚK•š[˜\žS[™Ý
ÜŠNÛÏ[™]È[
ËK•”ÓÓ“[™ÝK•š[˜\žS[™ÝUÒÒQ	‰›UÒÓS‘ÕÛUÒÓS‘Õ›”ÒS•×ÓS‘ÕJKOY[˜Ý[ÛŠJ^ÚYŠ™Ù[ÛY]žJ\™]\›ˆK˜ÛÛ[	‰™K˜ÛÛ[Û\ÜÚYšXØ][Û‰‰™Ù[ÛY]žKœÙ]]šX]J˜Û\ÜÚYšXØ][Ûˆ‹™]ÈË•Ê™]ÈZ[\œ˜^JK˜ÛÛ[Û\ÜÚYšXØ][ÛŠKJJKJKÊ_XÛÛœÝÏ^ÜÚ[˜K˜]ÚX›N›ßNÜ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™JÊ_]›ÝÈ™]È\œ›ÜŠ’[˜[YÈš[KˆŠ_JKœ™YÚ\Ý\™Y^[œÚ[ÛœÊK[Š
OžØÛÛœÝYK›X]\šX[ÙK›X]\šX[˜ÛÛ™J
N›™]ÈÜ
ÜÚ^™NŒK[ÙN™KœÓ[ÙKÚ\N™KœÔÚ\KÛ\ÜÚYšXØ][Û”ØÚ[YN™K˜Û\ÜÚYšXØ][Û‹Ú^™S[ÙN™KœÔÚ^™S[ÙKZ[][X]YÚ^™N™KœÓZ[][X]YÚ^™KX^][X]YÚ^™N™KœÓX^][X]YÚ^™_JNØÛ
‹JNØÛÛœÝ[™]ÈË“Ó›
œÚ[™Ù[ÛY]žKŠNÜ™]\›ˆœÚ[›Ù™œÙ]	‰›‹œÜÚ][Û‹˜ÛÜJœÚ[›Ù™œÙ]
KÛØš™XÝÙ›‹˜]ÚX›N˜˜]ÚX›__JJ_XÛÛœÝ\^Ù^XÝ]PÛÛ[X[™™[˜Ý[ÛŠ
^ØÛÛœÝO]›^Y\‹]›Y]Y]K[™]ÈËŽNÈY[˜Ý[ÛŠK‹Š^Ý™œ\Ý[PÝ[YHLK›^Y\YK‹˜[œÙ›Ü›I‰˜\SX]š^
‹˜[œÙ›Ü›JK™Ù[ÛY]šXÑ\œ›Ü\‹™Ù[ÛY]šXÑ\œ›Ü‹[RY\‹[RY‹œ™Yš[™OÝ˜Y]]™T™Yš[™[Y[HQOO\‹œ™Yš[™KÕ\\Ø\ÙJ
N˜Y]]™T™Yš[™[Y[HH[‰‰›‹˜Y]]™T™Yš[™[Y[šY]Ù\”™\]Y\Ý›Û[YO\‹šY]Ù\”™\]Y\Ý›Û[YK˜›Ý[™[™Õ›Û[YO\‹˜›Ý[™[™Õ›Û[YK\]SX]š^ÛÜ›

_J‹K‹œ™\]Y\Ý\ŠNØÛÛœÝO\‹˜ÛÛ[	‰Š‹˜ÛÛ[\›‹˜ÛÛ[\šJKÏ]OžÝ\Ù\‘]K›Y]Y]O\‹›^Y\Y_NÚYŠJ^Û]ZKœÝ\ÕÚ]
šŠOÚNœ‹˜˜\ÙUT“
ÚNÙKœÛÝ\˜ÙKš\ÐÌÑ[\ÑÛÛÙÛTÛÝ\˜ÙI‰ŠYKœÛÝ\˜ÙK™Ù][U\›

JNØÛÛœÝÏ^ØŒÙN“\Î•ÛŽÜNÜ™]\›ˆ˜K˜\œ˜^PY™™\ŠKœÛÝ\˜ÙK›™]ÛÜšÓÜ[ÛœÊK[Š
OOžÚYŠ›ÚYOOZJ^Û]NØÛÛœÝTÜ™XÛÙJ™]ÈZ[\œ˜^JK
JNÚYŠžÈOO[ÌJ^ÚOR”ÓÓ‹œ\œÙJÜ™XÛÙJ™]ÈZ[\œ˜^JJJJNØÛÛœÝYKœÛÝ\˜ÙKš\ÐÌÑ[\ÑÛÛÙÛTÛÝ\˜ÙOÙKœÛÝ\˜ÙK˜˜\ÙU\›œÛXÙJ›\Ý[™^ÙŠ‹ÈŠJÌJNÙK[\Ù]™^[™[\Ù]
K‹[RY‹Kœ™YÚ\Ý\™Y^[œÚ[ÛœÊ_Y[ÙHYŠ˜ŒÙHO[
XO\Ë˜ŒÙNÙ[ÙHYŠœÈO[
YKš\ÔÏHLO\ËœÎÙ[Ù^ÚYŠ™ÛˆˆO[
\™]\›ˆ›ÛZ\ÙKœ™Z™XÝ
[œÝ\ÜYXYÚXÈÛÙH	ÛX
NØO\Ë™ÛŸZYŠJ\™]\›ˆJKK
K[Š
OŠ‹˜ÛÛ[]›Øš™XÝÙ˜˜]ÚX›I‰Š‹˜˜]ÚX›O]˜˜]ÚX›JK‹˜Y
›Øš™XÝÙ
K‹˜]™\œÙJÊKŠJJ_\™]\›ˆ‹˜]™\œÙJÊKŸJJ_\™]\›ˆ‹˜]™\œÙJÊK›ÛZ\ÙKœ™\ÛÛ™JŠ__NÛ]œLNØÛÛœÝ^Ù^XÝ]PÛÛ[X[™

^ØÛÛœÝO]›^Y\‹]œ™\]Y\Ý\ŽÜ™]\›ˆ‹›ØY

K[Š
OžØÛÛœÝÏ[™]ÈË“Ó›
‹K›X]\šX[
NÜ™]\›ˆ[˜Ý[ÛŠ
^ØÛÛœÝO]™Ù[ÛY]žK˜]šX]\ËœÜÚ][Û‹˜ÛÝ[[™]ÈZ[\œ˜^J
™JKTœ
ÊÎÚYŠOMLÍ_MLÍJ\™]\›ˆÛÛœÛÛKØ\›ŠÝ\œ™[HXÚÚ[™È\È[Z]YÈÚ[ÈÚ]\ÜÈ[ˆMLÍH[[Y[È[™\ÜÈ[ˆMLÍHÚ[È[œÝ[˜Ù\ÈŠKÙ›ÜŠ]LÝNÝ
ÊÊ^ØÛÛœÝO[MŸÜ–Í

ÌOJÎNL	™JOŒ–Í

ÌWOJMÌLMŽ	™JOŒM‹–Í

Ì—OJLŽ	™JOŽ–Í

Ì×OLMI™_]˜˜\ÙRY[‹™Ù[ÛY]žKœÙ]]šX]J[š\]YWÚY‹™]ÈË•Ê‹L
J_JÊKË™œ\Ý[PÝ[YHLKË›X]š^]]Õ\]OHLKËœÜÚ][Û‹˜ÛÜJ‹\Ù\‘]K›ÜšYÚ[Ÿ‹˜˜›Þ›Z[ŠKËœØØ[K˜ÛÜJKœØØ[JKË\]SX]š^

KËYÚ˜›Þ[‹˜›Ý[™[™Ð›Þ˜\SX]š^
Ë›X]š^
KË›^Y\YKË™^[ZKž”‹™œ›ÛP›ÞÊšY]Ëœ™Y™\™[˜ÙPÜœË‹˜˜›Þ
KË\Ù\‘]K››ÙO\‹ßJJ__NÛ]œLÙ[˜Ý[Ûˆ

^ØÛÛœÝOK×	ÝNŠ×ËWËŸJÊWKË™^XÊ
NÚYŠYJ\™]\›ˆØÛÛœÝYVÌWKœÜ]
ŸŠNÜ™]\›ˆœ™\XÙJVÌK–Ðœ
ÊÉ\‹›[™ÝJ_XÛÛœÝ^ÜÝX‘ÛXZ[œÎ“^Ž™[˜Ý[ÛŠJ^Ü™]\›ˆ
K\›œ™\XÙJÊ	Þ—_	USSPU’V
KËK[SX]š^Ø[˜XÚÊž›ÛÛJJKœ™\XÙJÊ	ÞW_	T“ÕÊKËœ›ÝÊKœ™\XÙJÊ	Þ_	PÓÓ
KË˜ÛÛ
J_K˜›Þ™[˜Ý[ÛŠJ^Û]H‘TÑÎÌˆOYK˜ÜœÏÎNŒŽÝ›ÚYOOYK˜˜›ÞYÚ]É‰ŠYK˜˜›ÞYÚ]ÊNØÛÛœÝ]Ù\ÝÑš^Y
ŠKO]œÛÝ]Ñš^Y
ŠKÏ]™X\ÝÑš^Y
ŠKÏ]››ÜÑš^Y
ŠNÛ]OYK˜^\ÓÜ™\ŸÜÙ[ˆŽÜ™]\›ˆOXKœ™\XÙJÈ‹	ÛŸK
Kœ™\XÙJœÈ‹	Ú_K
Kœ™\XÙJ™H‹	ÜßK
Kœ™\XÙJ›ˆ‹	ÛßK
KœÛXÙJLJK
K\›œ™\XÙJ‰X˜›Þ‹JJ__NÙ[˜Ý[ÛˆÜ
J^ØÛÛœÝYKœš[Üš]K]œš[Üš]NÜ™]\›ˆOO\ÙK[Y\Ý[\][Y\Ý[\œŸY[˜Ý[Ûˆœ

^Ü™]\›žÜ]Y]YJ
^ØÛÛœÝO]›^Y\ŽÛ]]\ËœÝÜ˜YÙ\Ë™Ù]
KšY
NÜŸ
^ÜN›™]È
ØÛÛ\\˜]ÜŽ“ÜJKš[Üš]NŒKXØÝ[][]ÜŽŒK\ËœÝÜ˜YÙ\ËœÙ]
KšYŠJK‹œš[Üš]OYKœš[Üš]_K‹œKœ]Y]YJ
K\Ë˜ÛÝ[\œËœ[™[™ÊÊßKÝÜ˜YÙ\Î›™]ÈX\ÛÝ[\œÎžÙ^XÝ][™ÎŒ^XÝ]YŒ˜Z[YŒØ[˜Ù[YŒ[™[™ÎŒK^XÝ]JJ^Ü™]\›ˆ\Ë˜ÛÝ[\œËœ[™[™ËKK\Ë˜ÛÝ[\œË™^XÝ][™ÊÊËK™^XÝ]PÛÛ[X[™

K[Š
OOžÝ\Ë˜ÛÝ[\œË™^XÝ][™ËKKœ™\ÛÛ™JJK\Ë˜ÛÝ[\œË™^XÝ]Y
ÊßJK
OOžÝ\Ë˜ÛÝ[\œË™^XÝ][™ËKKœ™Z™XÝ
JK\Ë˜ÛÝ[\œË™˜Z[Y
ÊßJJ___Y[˜Ý[Ûˆœ

^Ý\Ë™Y˜][]Y]YOSœ

K\ËšÜÝ]Y]Y\Ï[™]ÈX\\Ëœ›ÝšY\œÏ^ßK\Ë›X^ÛÛ[X[™Ô\’ÜÝM‹\Ëš[š]Y˜][›ÝšY\œÊ
_Qœœ›ÝÝ\K˜ÛÛœÝXÝÜQœœœ›ÝÝ\Kš[š]Y˜][›ÝšY\œÏY[˜Ý[ÛŠ
^Ý\Ë˜Y›ÝØÛÛ›ÝšY\Š[H‹›
K\Ë˜Y›ÝØÛÛ›ÝšY\ŠŒÙ][\È‹\
K\Ë˜Y›ÝØÛÛ›ÝšY\ŠœÚ[ÛÝY‹
_Kœœ›ÝÝ\Kœ[ÛÛ[X[™Y[˜Ý[ÛŠKŠ^ØÛÛœÝ]\Ë™Ù]›ÝØÛÛ›ÝšY\Š›^Y\‹œ›ÝØÛÛ
NÚYŠ[Š]›ÝÈ™]È\œ›ÜŠ›ÈÛ›ÝÛˆ›ÝšY\ˆ›Üˆ^Y\ˆ	Ý›^Y\‹šYX
NÙK™^XÝ]J‹ŠK[Š


OOžÚYŠšY]Ë››ÝYžPÚ[™ÙJœ™\]Y\Ý\‹œ™Y˜]ÊKK˜ÛÝ[\œË™^XÝ][™Ï\Ë›X^ÛÛ[X[™Ô\’ÜÝ
^ØÛÛœÝ]\Ë™T]Y]YJJNÝ	‰\Ëœ[ÛÛ[X[™
J__JJ_Kœœ›ÝÝ\K™^XÝ]OY[˜Ý[ÛŠ
^ØÛÛœÝO]›^Y\‹YKœÛÝ\˜ÙI‰™KœÛÝ\˜ÙK\›	‰ˆ››Û™HˆOOYKœÛÝ\˜ÙK\›Û™]ÈT“
œÝX‘ÛXZ[œÊKœÛÝ\˜ÙK\›
K™š[N‹ËËÐÎ‹Õ\Ù\œËÐ›ÙØ]ËÑØÝ[Y[ËÚ]ÝÛœËLKÜXÚØYÙ\ËÓXZ[‹ÜÜ˜ËÐÛÜ™KÔØÚY[\‹ÔØÚY[\‹šœÈŠKšÜÝ›ÚYÝœ›ÛZ\ÙO[™]È›ÛZ\ÙJ

KŠOOžÝœ™\ÛÛ™OYKœ™Z™XÝ\ŸJJK‰‰ˆ]\ËšÜÝ]Y]Y\Ëš\ÊŠI‰\ËšÜÝ]Y]Y\ËœÙ]
‹œ

JNØÛÛœÝ\Ý\ËšÜÝ]Y]Y\Ë™Ù]
ŠN\Ë™Y˜][]Y]YNÜ™]\›ˆ[Y\Ý[\Q]K››ÝÊ
K‹œ]Y]YJ
K‹˜ÛÝ[\œË™^XÝ][™Ï\Ë›X^ÛÛ[X[™Ô\’ÜÝ	‰”›ÛZ\ÙKœ™\ÛÛ™J
K[Š


OOžÚYŠ‹˜ÛÝ[\œË™^XÝ][™Ï\Ë›X^ÛÛ[X[™Ô\’ÜÝ
^ØÛÛœÝ]\Ë™T]Y]YJŠNÝ	‰\Ëœ[ÛÛ[X[™
Š__JJKœ›ÛZ\Ù_Kœœ›ÝÝ\K˜Y›ÝØÛÛ›ÝšY\Y[˜Ý[ÛŠJ^ÚYŠ™[˜Ý[ÛˆˆO]\[ÙˆK™^XÝ]PÛÛ[X[™
]›ÝÈ™]È\œ›ÜŠØ[‰ÝY›ÝšY\ˆ›Üˆ	ÝNˆZ\ÜÚ[™ÈH^XÝ]PÛÛ[X[™[˜Ý[Û‹˜
NÝ\Ëœ›ÝšY\œÖÝOY_Kœœ›ÝÝ\K™Ù]›ÝØÛÛ›ÝšY\Y[˜Ý[ÛŠ
^Ü™]\›ˆ\Ëœ›ÝšY\œÖÝ_ÛKœœ›ÝÝ\K˜ÛÛ[X[™ÕØZ][™Ñ^XÝ][ÛÛÝ[Y[˜Ý[ÛŠ
^Û]]\Ë™Y˜][]Y]YK˜ÛÝ[\œËœ[™[™ÊÝ\Ë™Y˜][]Y]YK˜ÛÝ[\œË™^XÝ][™ÎÙ›ÜŠÛÛœÝHÙˆ\ËšÜÝ]Y]Y\Ê]
ÏYVÌWK˜ÛÝ[\œËœ[™[™ÊÙVÌWK˜ÛÝ[\œË™^XÝ][™ÎÜ™]\›ˆKœœ›ÝÝ\K˜ÛÛ[X[™Ô[›š[™ÐÛÝ[Y[˜Ý[ÛŠ
^Û]]\Ë™Y˜][]Y]YK˜ÛÝ[\œË™^XÝ][™ÎÙ›ÜŠÛÛœÝHÙˆ\ËšÜÝ]Y]Y\Ê]
ÏYVÌWK˜ÛÝ[\œË™^XÝ][™ÎÜ™]\›ˆKœœ›ÝÝ\Kœ™\Ù]ÛÛ[X[™ÐÛÝ[Y[˜Ý[ÛŠ
^Û]O]\Ë™Y˜][]Y]YK˜ÛÝ[\œÖÝNÝ\Ë™Y˜][]Y]YK˜ÛÝ[\œÖÝOLÙ›ÜŠÛÛœÝˆÙˆ\ËšÜÝ]Y]Y\ÊYJÏ\–ÌWK˜ÛÝ[\œÖÝK–ÌWK˜ÛÝ[\œÖÝOLÜ™]\›ˆ_Kœœ›ÝÝ\K™T]Y]YOY[˜Ý[ÛŠ
^ØÛÛœÝOY[˜Ý[ÛŠ
^Û]K‹LÙ›ÜŠÛÛœÝHÙˆ
^ØÛÛœÝZVÌWNÝœK›[™ÝŒ	‰ŠŠÏ]œš[Üš]K˜XØÝ[][]ÜŠÏ]œš[Üš]K
Y_˜XØÝ[][]ÜœŠI‰ŠO]]˜XØÝ[][]ÜŠJ_ZYŠJ\™]\›ˆK˜XØÝ[][]Ü‹O[‹Kœ_JœÝÜ˜YÙ\ÊNÙ›ÜŠÙI‰™K›[™ÝŒÊ^ØÛÛœÝYK™\]Y]YJ
NÚYŠ\‹™X\›Q›Ü[˜Ý[ÛŸ\‹™X\›Q›Ü[˜Ý[ÛŠŠJ\™]\›ˆŽÝ˜ÛÝ[\œËœ[™[™ËKK˜ÛÝ[\œË˜Ø[˜Ù[Y
ÊË‹œ™Z™XÝ
™]È›
ŠJ__NØÛÛœÝ\QœÜ[™]ÈK‘I
‘TÑÎÌˆŠNÛ]œÜHˆŽÈ[™Yš[™YˆO]\[ÙˆØÝ[Y[	‰ŠÜ]›ÚYOOYØÝ[Y[™ØÝ[Y[[[Y[œÝ[K˜[œÙ›Ü›OÈ˜[œÙ›Ü›HŽ›ÚYOOYØÝ[Y[™ØÝ[Y[[[Y[œÝ[KÙXšÚ]˜[œÙ›Ü›OÈÙXšÚ]˜[œÙ›Ü›HŽ›ÚYOOYØÝ[Y[™ØÝ[Y[[[Y[œÝ[K›[Þ•˜[œÙ›Ü›OÈ›[Þ•˜[œÙ›Ü›HŽ›ÚYOOYØÝ[Y[™ØÝ[Y[[[Y[œÝ[K›Õ˜[œÙ›Ü›OÈ›Õ˜[œÙ›Ü›HŽˆ˜[œÙ›Ü›HŠNØÛ\ÜÈ\^[™ÈËŽ^ØÛÛœÝXÝÜŠ
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNˆˆ‹OX\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚYX\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—OØ\™Ý[Y[ÖÌ—NžßNÚYŠ[OYJ]›ÝÈ™]È\œ›ÜŠ˜ÛÛÜ™[˜]\È\™HX[™]ÜžHÈYHX™[ŠNØ\™Ý[Y[Ë›[™ÝŒÉ‰˜ÛÛœÛÛKØ\›Š‘\™XØ]Y\™Ý[Y[Üš]\È[ˆX™[ÛÛœÝXÝÜ‹ˆÜš]\È]\Ý™HÛÛ™šYÝ\™Y[ˆÝ[H\™Ý[Y[ˆŠKÝ\\Š
NÛ]]\Ëš\ÚX›NÓØš™XÝ™Yš[™T›Ü\J\Ëš\ÚX›H‹ÜÙ]

^ÝO[‰‰Š]\Ë˜ÛÛ[œÝ[K™\Ü^O]È˜›ØÚÈŽˆ››Û™HŠ_KÙ]Š
OO›ŸJK\Ëš\ÓX™[HL\Ë˜ÛÛÜ™[˜]\ÏYK\Ëœ›Ú™XÝYÜÚ][Û^ÞŒNŒK\Ë˜›Ý[™\šY\Ï^ÛYŒšYÚŒÜŒ›ÝÛNŒKœÝš[™ÈO]\[ÙˆÊ\Ë˜ÛÛ[YØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠK\Ë˜ÛÛ[^ÛÛ[\‹^™šY[
N\Ë˜ÛÛ[]˜ÛÛ™S›ÙJL
K\Ë˜ÛÛ[˜Û\ÜÓ\Ý˜Y
š]ÝÛœË[X™[ŠK\Ë˜ÛÛ[œÝ[K\Ù\”Ù[XÝH››Û™H‹\Ë˜ÛÛ[œÝ[KœÜÚ][ÛH˜XœÛÛ]H‹‹š\ÔÝ[OÊ\Ë˜[˜ÚÜ\‹™Ù]^[˜ÚÜ”ÜÚ][ÛŠ
K\ËœÝ[SÙ™œÙ]\‹^›Ù™œÙ]œÝš[™ÈO]\[Ùˆ	‰Š‹^š[ÕÚYŒ	‰\Ë˜ÛÛ[˜Û\ÜÓ\Ý˜Y
š]ÝÛœË\Ý›ÚÙK\Ú[™ÛHŠK‹˜\UÒS
\Ë˜ÛÛ[
K[Š
OžÝ	‰Š\ËšXÛÛ]
_JJJJNŠ\Ë˜[˜ÚÜVÌK\ËœÝ[SÙ™œÙ]VÌJK\ËšXÛÛ“Ù™œÙ]^ÛYŒšYÚŒÜŒ›ÝÛNŒK\Ëž›ÛÛO^ÛZ[Žœ‹ž›ÛÛI‰›[O\‹ž›ÛÛK›Z[Ü‹ž›ÛÛK›Z[ŽŒ‹X^œ‹ž›ÛÛI‰›[O\‹ž›ÛÛK›X^Ü‹ž›ÛÛK›X^ŒK\Ë›Ü™\\‹›Ü™\Ÿ\ËœY[™ÏLŸ]\]T›Ú™XÝYÜÚ][ÛŠJ^ØÛÛœÝSX]œ›Ý[™

KSX]œ›Ý[™
JNÜO]\Ëœ›Ú™XÝYÜÚ][Û‹ž	‰›O]\Ëœ›Ú™XÝYÜÚ][Û‹ž_
\Ëœ›Ú™XÝYÜÚ][Û‹ž\‹\Ëœ›Ú™XÝYÜÚ][Û‹žO[‹\Ë˜›Ý[™\šY\Ë›Y]
Ý\Ë›Ù™œÙ]›Y]\ËœY[™Ë\Ë˜›Ý[™\šY\ËœšYÚ]
Ý\Ë›Ù™œÙ]œšYÚ
Ý\ËœY[™Ë\Ë˜›Ý[™\šY\ËÜYJÝ\Ë›Ù™œÙ]Ü]\ËœY[™Ë\Ë˜›Ý[™\šY\Ë˜›ÝÛOYJÝ\Ë›Ù™œÙ]˜›ÝÛJÝ\ËœY[™ËOO]\ËšXÛÛ“Ù™œÙ]›Y	‰ŒOO]\ËšXÛÛ“Ù™œÙ]œšYÚ	‰ŒOO]\ËšXÛÛ“Ù™œÙ]Ü	‰ŒOO]\ËšXÛÛ“Ù™œÙ]˜›ÝÛ_
\Ë˜›Ý[™\šY\Ë›YSX]›Z[Š\Ë˜›Ý[™\šY\Ë›Y
Ý\ËšXÛÛ“Ù™œÙ]›Y
K\Ë˜›Ý[™\šY\ËœšYÚSX]›X^
\Ë˜›Ý[™\šY\ËœšYÚ
Ý\ËšXÛÛ“Ù™œÙ]œšYÚ
K\Ë˜›Ý[™\šY\ËÜSX]›Z[Š\Ë˜›Ý[™\šY\ËÜJÝ\ËšXÛÛ“Ù™œÙ]Ü
K\Ë˜›Ý[™\šY\Ë˜›ÝÛOSX]›X^
\Ë˜›Ý[™\šY\Ë˜›ÝÛKJÝ\ËšXÛÛ“Ù™œÙ]˜›ÝÛJJJ_]\]PÔÔÔÜÚ][ÛŠ
^Ý\Ë˜ÛÛ[œÝ[VÑÜOX˜[œÛ]J	Ý\Ëœ›Ú™XÝYÜÚ][Û‹ž
Ý\Ë›Ù™œÙ]›Y\	Ý\Ëœ›Ú™XÝYÜÚ][Û‹žJÝ\Ë›Ù™œÙ]Ü\
X\ËšXÛÛ‰‰Š\ËšXÛÛ‹œÝ[VÑÜOX˜[œÛ]J	Ë]\Ë›Ù™œÙ]›Y\	Ë]\Ë›Ù™œÙ]Ü\
X
_Z[š][Y[œÚ[ÛœÊ
^ÚYŠ]\Ë›Ù™œÙ]
^Þœ]\Ë˜ÛÛ[™Ù]›Ý[™[™ÐÛY[™XÝ

NØÛÛœÝSX]œ›Ý[™
œÚY
KOSX]œ›Ý[™
œšZYÚ
NÝ\Ë›Ù™œÙ]^ÛY
\Ë˜[˜ÚÜ–ÌJÝ\ËœÝ[SÙ™œÙ]ÌKÜ™J\Ë˜[˜ÚÜ–ÌWJÝ\ËœÝ[SÙ™œÙ]ÌW_K\Ë›Ù™œÙ]œšYÚ]\Ë›Ù™œÙ]›Y
Ý\Ë›Ù™œÙ]˜›ÝÛO]\Ë›Ù™œÙ]Ü
ÙK\ËšXÛÛ‰‰Šœ]\ËšXÛÛ‹™Ù]›Ý[™[™ÐÛY[™XÝ

K\ËšXÛÛ“Ù™œÙ]^ÛY“X]™›ÛÜŠœž
KÜ“X]™›ÛÜŠœžJKšYÚ“X]˜ÙZ[
œž
ÞœÚY
K›ÝÛN“X]˜ÙZ[
œžJÞœšZYÚ
_J__]\]LÙÜÚ][ÛŠ
^Ý\Ë˜ÛÛÜ™[˜]\Ë˜\ÊÜ
KÕ™XÝÜŒÊ\ËœÜÚ][ÛŠK\Ë\]SX]š^ÛÜ›

_]\]Q[]˜][Û‘œ›ÛS^Y\ŠJ^ÚYŠO]˜]XÚY^Y\œË™š[\Š
Oš\Ñ[]˜][Û“^Y\ŠJK›[™Ý
\™]\›ŽÛ]SX]›X^
K™Ù][]˜][Û•˜[YP]
\Ë˜ÛÛÜ™[˜]\ËK‘TÕÔ‘PQÖ‹JJNÚ\Ó˜SŠŠI‰ŠSX]›X^
K™Ù][]˜][Û•˜[YP]
\Ë˜ÛÛÜ™[˜]\ËK‘TÕÔ‘PQÖŠJJK\Ó˜SŠŠ_O]\Ë˜ÛÛÜ™[˜]\ËžŸ
\Ë˜ÛÛÜ™[˜]\Ëž\Š_]\]RÜš^›ÛÝ[[™ÔÚ[

^Ý\ËšÜš^›ÛÝ[[™ÔÚ[	‰\Ë™Ù]ÛÜ›ÜÚ][ÛŠ\ËšÜš^›ÛÝ[[™ÔÚ[
__XÛÛœÝœT\Ù[˜Ý[Ûˆœ

^Û]K‹‹O]œŸÌKÌMKÏ]™ßÌWKÌMKÏ]˜ŸÌ—KÌMNÜ™]\›ˆOZO‹ŒOÊ
JËŒMJKÌKŒMJJŠŒ‹šKÌL‹ŽL‹Ï\Ï‹ŒOÊ
ÊËŒMJKÌKŒMJJŠŒ‹œËÌL‹ŽL‹Ï[Ï‹ŒOÊ
ÊËŒMJKÌKŒMJJŠŒ‹›ËÌL‹ŽL‹OJL
šJËŒÍMÍŠœÊËŒNJ›ÊKËŽMLËJŒŒLŠšJËÌMLŠœÊËŒÌŒŠ›ÊKÌKJŒNLÊšJËŒLNLŠœÊËŽMLJ›ÊKÌKŒËOYO‹ŒMÙJŠŠKÌÊNËÎÊ™JÌM‹ÌLM‹\‹ŒMÜŠŠŠKÌÊNËÎÊœŠÌM‹ÌLM‹[‹ŒMÛŠŠŠKÌÊNËÎÊ›ŠÌM‹ÌLM‹ÌLMŠœ‹LM‹L
ŠK\ŠKŒ
Š‹[ŠW_Y[˜Ý[Ûˆ
J^ØÛÛœÝZœ

KZœ
JKO\–ÌK[–ÌKÏ\–ÌWK[–ÌWKÏ\–Ì—K[–Ì—KOSX]œÜ\
–ÌWJœ–ÌWJÜ–Ì—Jœ–Ì—JKXKSX]œÜ\
–ÌWJ›–ÌWJÛ–Ì—J›–Ì—JNÛ]Ï\ÊœÊÛÊ›Ë[
›ØÏXÏÌ“X]œÜ\
ÊNØÛÛœÝZKÌKO[ÊJËŒJ˜JKXËÊJËŒMJ˜JKZ
š
ÝJJÙ
™Ü™]\›ˆÌ“X]œÜ\

_XÛÛœÝ\[™]È]
ÛX^LJNÛ]Ü\Ù[˜Ý[Ûˆ
J^Ü™]\›ˆOË˜ÛÛÜ™[˜]\ÏËžŸY[˜Ý[Ûˆ	
J^ÚYŠ™^™\ÜÚ[ÛŠ\™]\›ˆ™^™\ÜÚ[Û‹™]˜[X]JJNÚYŠœÝÜÊ^ØÛÛœÝ]œÝÜÎÝ]œÝÜÖÌVÌWNÙ›ÜŠ]\‹›[™ÝLNÛLÛ‹KJ^ØÛÛœÝO\–Û—NÚYŠKž›ÛÛOZVÌJ^ÝZVÌWNØœ™XZß__\™]\›ˆœÝš[™ÈO]\[Ùˆ[œÝ[˜Ù[ÙˆÝš[™ÏÝœ™\XÙJ×ÊŠÏÊWKÙË

ŠOO™Kœ›Ü\Y\ÖÜ—_ˆŠJKš[J
N[œÝ[˜Ù[Ùˆ[˜Ý[ÛÝ
Kœ›Ü\Y\ËJNX\Þ[˜È[˜Ý[Ûˆœ

^ØÛÛœÝO]œÜ]
ÈŠVÌNÛ]\\™Ù]
JNÜ™]\›ˆŸ
\˜K^\™JØÜ›ÜÜÓÜšYÚ[Žˆ˜[›Ûž[[Ý\ÈŸJK\œÙ]
KŠJK
]ØZ]ŠKš[XYÙ_Y[˜Ý[ÛˆÜ
J^ØÛÛœÝYKžYKž_OYKÚY›˜]\˜[ÚYÏYKšZYÚ›˜]\˜[ZYÚÖ\ÚYZK\šZYÚ\ÎØÛÛœÝÏV\™Ù]ÛÛ^
Œ™‹ÝÚ[™XYœ™\]Y[NˆLJNÜ™]\›ˆË™˜]Ò[XYÙJ‹‹KËKÊKË™Ù][XYÙQ]JKÊ_H[™Yš[™YˆO]\[ÙˆØÝ[Y[	‰ŠÜYØÝ[Y[˜Ü™X]Q[[Y[”Êš‹ËÝÝÝËÌË›Ü™ËÌŒÜÝ™È‹œÝ™ÈŠK˜Ü™X]TÕ‘ÓX]š^

K\YØÝ[Y[˜Ü™X]Q[[Y[
˜Ø[˜\ÈŠJNØÛÛœÝœ^ÛY–ÌKWKšYÚ–ËLKKWKÜ–ËKKK›ÝÛN–ËKKLWKÜ\šYÚŽ–ËLKK˜›ÝÛK[YŽ–ÌLWK˜›ÝÛK\šYÚŽ–ËLKLWKÙ[\Ž–ËKKKWKÜ[YŽ–Ì_NÙ[˜Ý[ÛˆŠK‹‹J^Û]ÎÓØš™XÝ™Yš[™T›Ü\JÙWK‹Ù[[Y\˜X›NˆLÙ]Š
OOžÚYŠ[O\Ê\™]\›ˆÎÚYŠ[O[Š\™]\›ˆ	
‹˜ÛÛ^
NØÛÛœÝÏ]˜ÛÛ^™™X]\™TÝ[OË–ÙWOË–Ü—NÜ™]\›ˆ[O[ÏÉ
Ë˜ÛÛ^
NšH[œÝ[˜Ù[Ùˆ[˜Ý[ÛÚJ˜ÛÛ^œ›Ü\Y\Ë˜ÛÛ^
OÏÚNš_KÙ]OžÜÏ]_J_XÛ\ÜÈYžÈÙ]J

OO›™]ÈK‘I
‘TÑÎÌˆ‹
JJ
NÈÜJ

OO›™]ÈK‘I
‘TÑÎÌˆ‹
JJ
NÈÛHLÈÚ]^ßNÈÜÝ^ßNÜÙ]›ÛÛJ
^Ý\Ëž›ÛÛO]\Ù]™X]\™J
^Ý\ËˆÚ]]\Ù]Ù[ÛY]žJ
^Ý\ËˆÜÝ]\Ù]ÛÛXÝ[ÛŠ
^Ý\Ë˜ÛÛXÝ[Û]\ËˆÜœÙ]ÜœÊ˜ÜœÊ_\Ù]ØØ[ÛÛÜ™[˜]\Ñœ›ÛP\œ˜^JJ^Ü™]\›ˆ\ËˆÛHLK\ËˆÜœÙ]œ›ÛP\œ˜^JJ_YÙ]›Ü\Y\Ê
^Ü™]\›ˆ\ËˆÜÝœ›Ü\Y\ßYÙ]\J
^Ü™]\›ˆ\ËˆÚ]\_YÙ]™X]\™TÝ[J
^Û]]\ËˆÚ]œÝ[NÜ™]\›ˆ[œÝ[˜Ù[Ùˆ[˜Ý[Û‰‰Š]
\Ëœ›Ü\Y\Ë\ÊJKYÙ]ÛÛÜ™[˜]\Ê
^Ü™]\›ˆ\ËˆÛ
\ËˆÛHL\ËˆÙ]˜ÛÜJ\ËˆÜ
K˜\SX]š^
\Ë˜ÛÛXÝ[Û‹›X]š^ÛÜ›
K‘TÑÎMÎˆO]\ËˆÜ˜ÜœÊOÝ\ËˆÙ]\ËˆÙ]˜\Ê‘TÑÎÌˆ‹\ËˆÙ]
__XÛÛœÝ™^Ú]ÝÛœ×ÜÝ›ÚÙWÜÚ[™ÛWØ™Y›Ü™Nˆ‹š]ÝÛœË\Ý›ÚÙK\Ú[™ÛN˜™Y›Ü™H×ˆ\Ü^Nˆ˜\ŠK]^ÜÝ›ÚÙWÙ\Ü^JN×ˆÛÛ[ˆ]Š]KX™Y›Ü™JN×ˆÜXÚ]NˆN×ˆÜÚ][ÛŽˆXœÛÛ]N×ˆ]ÙXšÚ]]^\Ý›ÚÙK]ÚYˆ˜\ŠK]^ÜÝ›ÚÙWÝÚY
N×ˆ]ÙXšÚ]]^\Ý›ÚÙKXÛÛÜŽˆ˜\ŠK]^ÜÝ›ÚÙWØÛÛÜŠN×ˆYˆ×ˆšYÚˆ×ˆ›ÝÛNˆ×ˆÜˆ×ˆ‹Z[™^ˆLN×ˆÚ]K\ÜXÙNˆ[š\š]×ˆÝ™\™›ÝË]Ü˜\ˆ[š\š]×ˆ]\‹\ÜXÚ[™Îˆ[š\š]×ˆ^X[YÛŽˆ[š\š]×ˆY[™Îˆ[š\š]×ˆ›ÛY˜[Z[Nˆ[š\š]×ˆ^]˜[œÙ›Ü›Nˆ[š\š]×ˆX^]ÚYˆ[š\š]×ˆ›Û\Ú^™Nˆ[š\š]×ŸWˆŸNÚYŠ[™Yš[™YˆO]\[ÙˆØÝ[Y[
^ØÛÛœÝYØÝ[Y[˜Ü™X]Q[[Y[
œÝ[HŠNÝ\OH^ØÜÜÈ‹Øš™XÝšÙ^\Ê™ŠK™›Ü‘XXÚ

OOžÝš[›™\’S
ÏX	Ü™–ÙW_W—˜JJKØÝ[Y[™Ù][[Y[ÐžUYÓ˜[YJšXYŠVÌK˜\[™Ú[

_XÛÛœÝ™XÛ\ÜÞØÛÛœÝXÝÜŠ
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNžßNÝ\Ëš\ÔÝ[OHL\Ë˜ÛÛ^[™]ÈY‹ž›ÛÛO]ž›ÛÛ_ßK™š[]™š[ßKœÝ›ÚÙO]œÝ›ÚÙ_ßKœÚ[]œÚ[ßK^]^ßKšXÛÛ]šXÛÛŸßK\Ëž›ÛÛO^ßKŠ\Ëž›ÛÛH‹›Z[ˆ‹ž›ÛÛK›Z[ŠKŠ\Ëž›ÛÛH‹›X^‹ž›ÛÛK›X^
K\Ë™š[^ßKŠ\Ë™š[‹˜ÛÛÜˆ‹™š[˜ÛÛÜŠKŠ\Ë™š[‹›ÜXÚ]H‹™š[›ÜXÚ]KJKŠ\Ë™š[‹œ]\›ˆ‹™š[œ]\›ŠKŠ\Ë™š[‹˜˜\ÙWØ[]YH‹™š[˜˜\ÙWØ[]YK
K™š[™^\Ú[Û—ÚZYÚ	‰Š\Ë™š[‹™^\Ú[Û—ÚZYÚ‹™š[™^\Ú[Û—ÚZYÚ
K\ËœÝ›ÚÙO^ßKŠ\ËœÝ›ÚÙH‹˜ÛÛÜˆ‹œÝ›ÚÙK˜ÛÛÜŠKŠ\ËœÝ›ÚÙH‹›ÜXÚ]H‹œÝ›ÚÙK›ÜXÚ]KJKŠ\ËœÝ›ÚÙH‹ÚY‹œÝ›ÚÙKÚYJKŠ\ËœÝ›ÚÙH‹™\Ú\œ˜^H‹œÝ›ÚÙK™\Ú\œ˜^K×JKŠ\ËœÝ›ÚÙH‹˜˜\ÙWØ[]YH‹œÝ›ÚÙK˜˜\ÙWØ[]YK
K\ËœÚ[^ßKŠ\ËœÚ[‹˜ÛÛÜˆ‹œÚ[˜ÛÛÜŠKŠ\ËœÚ[‹›[™H‹œÚ[›[™JKŠ\ËœÚ[‹›ÜXÚ]H‹œÚ[›ÜXÚ]KJKŠ\ËœÚ[‹œ˜Y]\È‹œÚ[œ˜Y]\ËŠKŠ\ËœÚ[‹ÚY‹œÚ[ÚY
KŠ\ËœÚ[‹˜˜\ÙWØ[]YH‹œÚ[˜˜\ÙWØ[]YK
KœÚ[›[Ù[	‰Š\ËœÚ[‹›[Ù[‹œÚ[›[Ù[
K\Ë^^ßKŠ\Ë^‹™šY[‹^™šY[
KŠ\Ë^‹ž“Ü™\ˆ‹^ž“Ü™\‹˜]]ÈŠKŠ\Ë^‹˜ÛÛÜˆ‹^˜ÛÛÜ‹ˆÌŠKŠ\Ë^‹˜[˜ÚÜˆ‹^˜[˜ÚÜ‹˜Ù[\ˆŠKŠ\Ë^‹›Ù™œÙ]‹^›Ù™œÙ]ÌJKŠ\Ë^‹œY[™È‹^œY[™ËŠKŠ\Ë^‹œÚ^™H‹^œÚ^™KMŠKŠ\Ë^‹œXÙ[Y[‹^œXÙ[Y[œÚ[ŠKŠ\Ë^‹œ›Ý][Ûˆ‹^œ›Ý][Û‹˜]]ÈŠKŠ\Ë^‹Ü˜\‹^Ü˜\L
KŠ\Ë^‹œÜXÚ[™È‹^œÜXÚ[™Ë
KŠ\Ë^‹˜[œÙ›Ü›H‹^˜[œÙ›Ü›K››Û™HŠKŠ\Ë^‹š\ÝYžH‹^š\ÝYžK˜Ù[\ˆŠKŠ\Ë^‹›ÜXÚ]H‹^›ÜXÚ]KJKŠ\Ë^‹™›Û‹^™›ÛÈ“Ü[ˆØ[œÈ™YÝ[\ˆ‹\šX[[šXÛÙHTÈ™YÝ[\ˆ‹œØ[œË\Ù\šYˆ—JKŠ\Ë^‹š[ÐÛÛÜˆ‹^š[ÐÛÛÜ‹ˆÌŠKŠ\Ë^‹š[ÕÚY‹^š[ÕÚY
KŠ\Ë^‹š[Ð›\ˆ‹^š[Ð›\‹
K\ËšXÛÛ^ßKŠ\ËšXÛÛˆ‹œÛÝ\˜ÙH‹šXÛÛ‹œÛÝ\˜ÙJKšXÛÛ‹šÙ^I‰ŠÛÛœÛÛKØ\›Š‰ÚXÛÛ‹šÙ^IÈ\È\™XØ]Yˆ\ÙH	ÚXÛÛ‹šY	È[œÝXYŠKšXÛÛ‹šY]šXÛÛ‹šÙ^JKŠ\ËšXÛÛˆ‹šY‹šXÛÛ‹šY
KŠ\ËšXÛÛˆ‹˜Ü›Ü˜[Y\È‹šXÛÛ‹˜Ü›Ü˜[Y\ÊKŠ\ËšXÛÛˆ‹˜[˜ÚÜˆ‹šXÛÛ‹˜[˜ÚÜ‹˜Ù[\ˆŠKŠ\ËšXÛÛˆ‹œÚ^™H‹šXÛÛ‹œÚ^™KJKŠ\ËšXÛÛˆ‹˜ÛÛÜˆ‹šXÛÛ‹˜ÛÛÜŠKŠ\ËšXÛÛˆ‹›ÜXÚ]H‹šXÛÛ‹›ÜXÚ]KJ_\Ù]ÛÛ^

^Ý\Ë˜ÛÛ^]X\UÐØ[˜\ÔÛYÛÛŠK‹Š^Ý\ËœÝ›ÚÙKÚYŒ	‰\Ë—Ø\TÝ›ÚÙUÔÛYÛÛŠ‹JK‰‰Š\Ë™š[œ]\›Ÿ\Ë™š[˜ÛÛÜŠI‰\Ë—Ø\Qš[ÔÛYÛÛŠ‹J_WØ\TÝ›ÚÙUÔÛYÛÛŠKŠ^ÝœÝ›ÚÙTÝ[HOO]\ËœÝ›ÚÙK˜ÛÛÜ‰‰ŠœÝ›ÚÙTÝ[O]\ËœÝ›ÚÙK˜ÛÛÜŠNØÛÛœÝ]\ËœÝ›ÚÙKÚY
™NÝ›[™UÚYOO[‰‰Š›[™UÚY[ŠNØÛÛœÝO]\ËœÝ›ÚÙK›ÜXÚ]NÚHOO]™ÛØ˜[[I‰ˆ›[X™\ˆO]\[ÙˆI‰Š™ÛØ˜[[OZJK›[™PØ\OO]\ËœÝ›ÚÙK›[™PØ\	‰Š›[™PØ\]\ËœÝ›ÚÙK›[™PØ\
KœÙ][™Q\Ú
\ËœÝ›ÚÙK™\Ú\œ˜^K›X\

O
™JŒŠJJKœÝ›ÚÙJŠ_X\Þ[˜ÈØ\Qš[ÔÛYÛÛŠKŠ^ÚYŠ\Ë™š[œ]\›Š^Û]]\Ë™š[œ]\›ŽØÛÛœÝ^Ë‹‹\Ë™š[œ]\›‹˜Ü›Ü˜[Y\ßNÝ\Ë™š[œ]\›‹œÛÝ\˜ÙI‰ŠX]ØZ]œ
\Ë™š[œ]\›‹œÛÝ\˜ÙJJKÜ
‹ŠK™š[Ý[O]˜Ü™X]T]\›Š\œ™\X]ŠK™š[Ý[KœÙ]˜[œÙ›Ü›OÝ™š[Ý[KœÙ]˜[œÙ›Ü›JÜœØØ[JJJN˜ÛÛœÛÛKØ\›Š”˜\Ý\ˆ]\›ˆ\Û‰ÝÛÛ\][HÝ\ÜYÛˆYH[™YÙH‹™š[Ý[J_Y[ÙH™š[Ý[HOO]\Ë™š[˜ÛÛÜ‰‰Š™š[Ý[O]\Ë™š[˜ÛÛÜŠNÝ\Ë™š[›ÜXÚ]HOO]™ÛØ˜[[I‰Š™ÛØ˜[[O]\Ë™š[›ÜXÚ]JK™š[
Š_X\Þ[˜È\UÒS

^ÚYŠ\™Ý[Y[Ë›[™ÝŒI‰˜ÛÛœÛÛKØ\›Š‘\™XØ]Y\™Ý[Y[Üš]\ËˆÜš]\È]\Ý™HÛÛ™šYÝ\™Y[ˆÝ[KˆŠKœÝ[KœY[™ÏX	Ý\Ë^œY[™ß\œÝ[K›X^ÚYX	Ý\Ë^Ü˜\Y[XœÝ[K˜ÛÛÜ]\Ë^˜ÛÛÜ‹\Ë^œÚ^™OŒ	‰ŠœÝ[K™›ÛÚ^™OX	Ý\Ë^œÚ^™_\
KœÝ[K™›Û˜[Z[O]\Ë^™›Ûš›Ú[Š‹ŠKœÝ[K^˜[œÙ›Ü›O]\Ë^˜[œÙ›Ü›KœÝ[K›]\”ÜXÚ[™ÏX	Ý\Ë^œÜXÚ[™ßY[XœÝ[K^[YÛ]\Ë^š\ÝYžKœÝ[VÈÚ]K\ÜXÙH—OHœ™K[[™H‹\Ë^š[ÕÚYŒ	‰ŠœÝ[KœÙ]›Ü\J‹K]^ÜÝ›ÚÙWÙ\Ü^H‹˜›ØÚÈŠKœÝ[KœÙ]›Ü\J‹K]^ÜÝ›ÚÙWÝÚY‹	Ý\Ë^š[ÕÚY\
KœÝ[KœÙ]›Ü\J‹K]^ÜÝ›ÚÙWØÛÛÜˆ‹\Ë^š[ÐÛÛÜŠKœÙ]]šX]J™]KX™Y›Ü™H‹^ÛÛ[
JK]\ËšXÛÛ‹œÛÝ\˜ÙJ\™]\›ŽÛ]NÈ[™Yš[™YˆO]\[ÙˆØÝ[Y[	‰ŠOYØÝ[Y[˜Ü™X]Q[[Y[
š[YÈŠJNØÛÛœÝ[™]È›ÛZ\ÙJ

‹ŠOOžØÛÛœÝO^ÜÚ^™N\ËšXÛÛ‹œÚ^™KÛÛÜŽ\ËšXÛÛ‹˜ÛÛÜ‹ÜXÚ]N\ËšXÛÛ‹›ÜXÚ]K[˜ÚÜŽ\ËšXÛÛ‹˜[˜ÚÜŸNÙK›Û›ØYJ
OOœŠ[˜Ý[ÛŠKŠ^ØÛÛœÝ]˜ÛÛ™S›ÙJ
NÜÝÚ]Ú
‹œÙ]]šX]J˜Û\ÜÈ‹š]ÝÛœËZXÛÛˆŠK‹ÚY]ÚY
œ‹œÚ^™K‹šZYÚ]šZYÚ
œ‹œÚ^™K‹œÝ[K˜ÛÛÜ\‹˜ÛÛÜ‹‹œÝ[K›ÜXÚ]O\‹›ÜXÚ]K‹œÝ[KœÜÚ][ÛH˜XœÛÛ]H‹‹œÝ[KÜHŒ‹‹œÝ[K›YHŒ‹‹˜[˜ÚÜŠ^ØØ\ÙH›YŽ›‹œÝ[KÜKKJ›‹šZYÚ
ÈœŽØœ™XZÎØØ\ÙHœšYÚŽ›‹œÝ[KÜKKJ›‹šZYÚ
Èœ‹‹œÝ[K›YK[‹ÚY
ÈœŽØœ™XZÎØØ\ÙHÜŽ›‹œÝ[K›YKKJ›‹ÚY
ÈœŽØœ™XZÎØØ\ÙH˜›ÝÛHŽ›‹œÝ[KÜK[‹šZYÚ
Èœ‹‹œÝ[K›YKKJ›‹ÚY
ÈœŽØœ™XZÎØØ\ÙH˜›ÝÛK[YŽ›‹œÝ[KÜK[‹šZYÚ
ÈœŽØœ™XZÎØØ\ÙH˜›ÝÛK\šYÚŽ›‹œÝ[KÜK[‹šZYÚ
Èœ‹‹œÝ[K›YK[‹ÚY
ÈœŽØœ™XZÎØØ\ÙHÜ[YŽ˜œ™XZÎØØ\ÙHÜ\šYÚŽ›‹œÝ[K›YK[‹ÚY
ÈœŽØœ™XZÎÙY˜][›‹œÝ[KÜKKJ›‹šZYÚ
Èœ‹‹œÝ[K›YKKJ›‹ÚY
ÈœŸ\™]\›ˆ‹œÝ[VÈž‹Z[™^—OKLKK˜\[™Ú[
ŠKŸJKJJKK›Û™\œ›Ü]O›Š
_JJNÚYŠ\ËšXÛÛ‹˜Ü›Ü˜[Y\ß\ËšXÛÛ‹˜ÛÛÜŠ^ØÛÛœÝ^Ë‹‹\ËšXÛÛ‹˜Ü›Ü˜[Y\ßK]\ËšXÛÛ‹˜ÛÛÜ‹]\ËšXÛÛ‹šY\ËšXÛÛ‹œÛÝ\˜ÙKOY[˜Ý[ÛŠKŠ^ÚYŠYJ\™]\›ˆØÛÛœÝ\\™Ù]
	ÜŸWÉÙ_X
NÚYŠ[Š^ØÛÛœÝ]™]KO[™]ÈË”LYŠJKÏ[™]ÈË”LYŠÚ]HŠNÙ›ÜŠ]LO[‹›[™ÝÝNÝ
ÏM
^ØÛÛœÝOR
‹œÛXÙJ
ÌÊKÊKÌLÛ–ÝO[–ÝJ™JÌMJšKœŠŠKYJK–Ý
ÌWO[–Ý
ÌWJ™JÌMJšK™ÊŠKYJK–Ý
Ì—O[–Ý
Ì—J™JÌMJšK˜ŠŠKYJ_\™]\›ˆ\œÙ]
	ÜŸWÉÙ_X
K\™]\›ˆŸJÜ
]ØZ]œ
\ËšXÛÛ‹œÛÝ\˜ÙJK
K‹ŠNÖ\™Ù]ÛÛ^
Œ™ŠKœ][XYÙQ]JK
KKœÜ˜ÏV\Ñ]UT“
š[XYÙKÜ™ÈŠ_Y[ÙHKœÜ˜Ï]\ËšXÛÛ‹œÛÝ\˜ÙNÜ™]\›ˆŸYÙ]^[˜ÚÜ”ÜÚ][ÛŠ
^Ü™]\›ˆœÝš[™ÈO]\[Ùˆ\Ë^˜[˜ÚÜÓØš™XÝšÙ^\Êœ
Kš[˜ÛY\Ê\Ë^˜[˜ÚÜŠOÖœÝ\Ë^˜[˜ÚÜ—NŠÛÛœÛÛK™\œ›ÜŠ	Ý\Ë^˜[˜ÚÜŸH\È›ÝH˜[Y[œ]›ÜˆÝ[K^˜[˜ÚÜˆ\˜[Y]\‹˜
Kœ˜Ù[\ŠN\Ë^˜[˜ÚÜŸ_KÙ[™]ÈY‹Ù[™]ÈK‘I
‘TÑÎÌˆ‹
KY[™]ÈKž”Š‘TÑÎÌˆ‹
K[™]ÈË’NVKÙ[™]ÈË’NVK[™]ÈË’NVNØÛ\ÜÈYžÈÛÝHLNØÛÛœÝXÝÜŠ
^Ý\Ë™ÛOYØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠK\Ë™ÛKœÝ[K™\Ü^OH››Û™H‹\Ëš\ÚX›OHLYÙ]š\ÚX›J
^Ü™]\›ˆ\ËˆÛÝ\Ù]š\ÚX›J
^ÝOO]\ËˆÛÝ	‰Š\ËˆÛÝ]\Ë™ÛKœÝ[K™\Ü^O]È˜›ØÚÈŽˆ››Û™HŠ_ZYJ
^Ý\Ëš\ÚX›OHL_\ÚÝÊ
^Ý\Ëš\ÚX›OHLXY

^Ý\Ë™ÛK˜\[™
™ÛJ__XÛ\ÜÈˆ^[™ÈË–R›ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë››ÙT\™[]\Ë›™YYÕ\]OHLZ[š]X[^™QÛJ
^Ý\Ë™ÛQ[[Y[Ï[™]ÈY‹\Ë™ÛQ[[Y[Ë›X™[Ï[™]ÈY‹\Ë™ÛQ[[Y[Ë˜Y
\Ë™ÛQ[[Y[Ë›X™[ÊK\Ë™ÛQ[[Y[Ë›X™[Ë™ÛKœÝ[K›ÜXÚ]OHŒŸXYX™[

^Ý\Ë˜Y

K\Ë™ÛQ[[Y[Ë›X™[Ë™ÛK˜\[™
˜ÛÛ[
Kš[š][Y[œÚ[ÛœÊ
K\Ë››ÙT\™[›^Y\‹š\ÑÛØ™S^Y\‰‰\Ë››ÙT\™[›]™[	‰ŠšÜš^›ÛÝ[[™ÔÚ[[™]ÈË”L
_\™[[Ý™SX™[

^Ý\Ëœ™[[Ý™J
K\Ë™ÛQ[[Y[Ë›X™[Ë™ÛKœ™[[Ý™PÚ[
˜ÛÛ[
_]\]TÜÚ][ÛŠ
^Ý\Ë›™YYÕ\]I‰Š\Ë›™YYÐ[]YI‰\]Q[]˜][Û‘œ›ÛS^Y\Š\Ë››ÙT\™[›^Y\‹Ý\Ë››ÙT\™[JK\]LÙÜÚ][ÛŠ\Ë››ÙT\™[›^Y\‹˜ÜœÊK\]RÜš^›ÛÝ[[™ÔÚ[

J_XÛÝ[

^Ü™]\›ˆ\Ë˜Ú[™[‹›[™ÝYÙ]X™[Ê
^Ü™]\›ˆ\Ë˜Ú[™[Ÿ_XÛÛœÝXÛ\ÜÈ^[™ÈØ^ÈØ]J

OO›™]È›
J
NØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNØÛÛœÝÙÛQ[[Y[œ‹\™›Ü›X[˜ÙN›HL›Ü˜ÙPÛ[\Õ\œ˜Z[ŽšOHLKX\™Ú[Ž›ËÝ[N˜O^ßK‹‹›OYNÜÝ\\ŠK›Øš™XÝÙ™]ÈË–R›
K\Ëš\ÓX™[^Y\HL\ËœÝ[OXH[œÝ[˜Ù[Ùˆ™ØN›™]È™ŠJK\Ë™ÛQ[[Y[[™]ÈY‹\Ë™ÛQ[[Y[œÚÝÊ
K\Ë™ÛQ[[Y[™ÛKšYX]ÝÛœË[X™[IÝ\ËšYX\Ë˜Z[^[HL\Ë˜ÜœÏYKœÛÝ\˜ÙK˜ÜœË\Ëœ\™›Ü›X[˜ÙO[‹\Ë™›Ü˜ÙPÛ[\Õ\œ˜Z[ZK\Ë›X\™Ú[[Ë\ËÒYO[™]ÈË–R›\Ë›X™[ÛY[[Y[\‹\Ë›X\™Ú[YK›X\™Ú[ŸYÙ]š\ÚX›J
^Ü™]\›ˆÝ\\‹š\ÚX›_\Ù]š\ÚX›J
^ÜÝ\\‹š\ÚX›O]Ý\Ë™ÛQ[[Y[ËœÚÝÊ
N\Ë™ÛQ[[Y[ËšYJ
_YÙ]ÝX›Z]YX™[›Ù\Ê
^Ü™]\›ˆ\Ë›Øš™XÝÙ˜Ú[™[ŸXÛÛ™\
J^ØÛÛœÝV×NÜ™]\›ˆKš\Ñ^[ÙK˜\Ê˜ÜœËYŠN™KÑ^[
˜ÜœËYŠKÙ‹˜ÜœÏ]˜ÜœËÙ‹œÙ]›ÛÛJKž›ÛÛJK™™X]\™\Ë™›Ü‘XXÚ

OOžÚYŠKœÝ[K^	‰ŒOOSØš™XÝšÙ^\ÊKœÝ[K^
K›[™Ý
\™]\›ŽÜÙ‹œÙ]™X]\™JJNØÛÛœÝYKœÝ[OË^Ë™šY[OYKœÝ[OËœÚ[Ë˜˜\ÙWØ[]YKÏZH[œÝ[˜Ù[Ùˆ[˜Ý[Û‰‰ˆ˜˜\ÙP[]YQY˜][OZK›˜[YNÜ‹›™YYÐ[]YO\‹›™YYÐ[]Y_LOO]\Ë™›Ü˜ÙPÛ[\Õ\œ˜Z[ŸÉ‰ˆYKš\Ô˜]Ñ[]˜][Û‘]KK™Ù[ÛY]šY\Ë™›Ü‘XXÚ

OOžÜÙ‹œÙ]Ù[ÛY]žJJK\ËœÝ[KœÙ]ÛÛ^
ÙŠNØÛÛœÝÏ]\ËœÝ[K^	‰\ËœÝ[K^™šY[ÏZKœ›Ü\Y\ËœÝ[I‰šKœ›Ü\Y\ËœÝ[K^	‰šKœ›Ü\Y\ËœÝ[K^™šY[Û]NÚYŠ\Ë›X™[ÛY[[Y[
XOI
\Ë›X™[ÛY[[Y[ÙŠNÙ[ÙHYŠJßŸßKœ›Ü\Y\ËœÝ[I‰ŠKœ›Ü\Y\ËœÝ[KšXÛÛ‹œÛÝ\˜Ù_Kœ›Ü\Y\ËœÝ[KšXÛÛ‹šÙ^J_KœÝ[I‰™KœÝ[KšXÛÛ‰‰ŠKœÝ[KšXÛÛ‹œÛÝ\˜Ù_KœÝ[KšXÛÛ‹šÙ^J_\ËœÝ[KšXÛÛ‰‰Š\ËœÝ[KšXÛÛ‹œÛÝ\˜Ù_\ËœÝ[KšXÛÛ‹šÙ^JJJ\™]\›ŽÝ\ËœÝ[Kž›ÛÛK›Z[\ËœÝ[K˜ÛÛ^ž›ÛÛ_\ËœÝ[Kž›ÛÛK›X^]\ËœÝ[K˜ÛÛ^ž›ÛÛ_Kš[™XÙ\Ë™›Ü‘XXÚ

OžÚYŠÙ‹œÙ]œ›ÛP\œ˜^JK™\XÙ\ËKœÚ^™J›‹›Ù™œÙ]
KÙ‹˜\SX]š^
›X]š^ÛÜ›
KXY‹š\ÔÚ[[œÚYJÙŠJ\™]\›ŽØÛÛœÝÏ[™]Èœ
KÙ‹˜ÛÛ™J
K\ËœÝ[JNÜË›^Y\’Y]\ËšYË›Ü™\YK›Ü™\‹ËœY[™Ï]\Ë›X\™Ú[ŸËœY[™Ë‹œ\Ú
Ê_JJ_JJ_JJKŸ\™U\]JJ^ÙKš\Ê\Ëœ\™[
I‰Š\Ë›Øš™XÝÙ˜ÛX\Š
K\ËˆØ]ÚYKJ\Ëœ\™[›X^ØÜ™Y[”Ú^™S›ÙK\ËˆØ]šZYÚKJ\Ëœ\™[›X^ØÜ™Y[”Ú^™S›ÙK\ËˆØ]œ™\Ú^™J
J_HÛ

^Ý\Ë›Øš™XÝÙ˜Y

_HØÝ

^Ý\ËÒYK˜Y

_HÚ

^Ü™]\›ˆœ\™[Ëš\Õ[SY\ÚÝœ\™[›[šÖÝ\ËšYOË™ÛQ[[Y[ß\ËˆÚ
œ\™[
N\Ë™ÛQ[[Y[HÝ]

^Ü™]\›ˆ˜Ú[™[‹™]™\žJ
O›^Y\•\]TÝ]I‰›^Y\•\]TÝ]VÝ\ËšYOËš\Ñš[š\ÚY

JJ_HÙ

^ØÛÛœÝO]˜Ú[™[‹œÛXÙJ
NÝ\ËˆØ]œ™\Ù]

KKœÛÜ


JOO™K›Ü™\‹]›Ü™\ŠJKK™›Ü‘XXÚ

OOžÝ››ÙT\™[™^[œ[˜\‘[Y[œÚ[ÛœÊŠKÙ‹˜ÜœÏ]››ÙT\™[™^[˜ÜœËÙ‹œÙ]œ›ÛU˜[Y\Ê››ÙT\™[™^[Ù\Ý››ÙT\™[™^[››Ü
KÕ™XÝÜŒÊÙŠKÙ‹˜ÛÜJK˜ÛÛÜ™[˜]\ÊK˜\Ê››ÙT\™[™^[˜ÜœËÙŠKÕ™XÝÜŒÊŠK‹œÝXŠÙŠK‹žJÏ[‹žK‹™]šYJŠK›][\TØØ[\Š\ËˆØ]ÚY
KK\]T›Ú™XÝYÜÚ][ÛŠ‹ž‹žJK\ËˆØ]š[œÙ\
J_œ™[[Ý™SX™[
J_JJ_]\]JK‹Š^ÚYŠ[‰‰œ‹›[šÖÙKšYJ\™]\›ˆ›ÚYØKœ™[[Ý™PÚ[™[[™ÛX[\™XÝ\œÚ]™[J\ËŠNØÛÛœÝO\‹›[šÖÙKšY_™]ÈŠŠNÚYŠ‹›[šÖÙKšYOZK\Ë™œ›Þ™[Ÿ\‹š\ÚX›_]\Ëš\ÚX›J\™]\›ŽÚYŠ\‹›X]\šX[š\ÚX›I‰\ËˆÝ]
ŠJ\™]\›ˆ\ËˆØÝ
JNØÛÛœÝÏ\‹™Ù]^[ÐžT›Ú™XÝ[ÛŠ\ËœÛÝ\˜ÙK˜ÜœÊ_Ü‹™^[KÏ\ÖÌKž›ÛÛNÚYŠÏKž›ÛÛK›Z[ŸÏ™Kž›ÛÛK›X^
\™]\›ˆ\ËˆØÝ
JNÚYŠ›ÚYOO\‹›^Y\•\]TÝ]VÝ\ËšYI‰Š‹›^Y\•\]TÝ]VÝ\ËšYO[™]ÈXJK]\ËœÛÝ\˜ÙK™^[[œÚYS[Z]
‹™^[ÊJ\™]\›ˆ›ÚY‹›^Y\•\]TÝ]VÝ\ËšYK››Ó[Ü™U\]TÜÜÚX›J
NÚYŠ\ËˆÝ]
‹œ\™[
J\™]\›ˆ‹›X]\šX[š\ÚX›_
K›™YYÕ\]OHL
K›ÚY\ËˆÛ
JNÚYŠ\‹›^Y\•\]TÝ]VÝ\ËšYK˜Ø[•žU\]J
J\™]\›ŽÜ‹›^Y\•\]TÝ]VÝ\ËšYK›™]ÕžJ
NØÛÛœÝO^Û^Y\Ž\Ë^[ÔÛÝ\˜ÙNœËšY]ÎšY]Ë™\]Y\Ý\ŽœŸNÜ™]\›ˆœØÚY[\‹™^XÝ]JJK[Š
OOžÚYŠYJ\™]\›ŽØÛÛœÝ]šY]Ë›XZ[“ÛÜ™Ùž[™Ú[™K›X™[™™[™\™\ŽÚKš[š]X[^™QÛJ
K\ËˆÚ
ŠK˜Y
K™ÛQ[[Y[ÊKK™›Ü‘XXÚ

OžÜ‹œ\™[ÊK›™YYÐ[]YOZK›™YYÐ[]Y_›™YYÐ[]YK™›Ü‘XXÚ

OžÜ‹™^[š\ÔÚ[[œÚYJ˜ÛÛÜ™[˜]\ÊI‰šK˜YX™[

_JJJN™›Ü‘XXÚ

Ož×ØKœ™[[Ý™PÚ[™[[™ÛX[\™XÝ\œÚ]™[J\Ë
K‹œ™[[Ý™SX™[ÓJ
_JJ_JJKK˜ÛÝ[

I‰ŠK™ÛQ[[Y[Ë›X™[ËšYJ
KK™ÛQ[[Y[Ë›X™[Ë™ÛKœÝ[K›ÜXÚ]OHŒKŒ‹‹˜Y]™[\Ý[™\ŠœÚÝÈ‹


OOšK™ÛQ[[Y[Ë›X™[ËœÚÝÊ
JJK‹˜Y]™[\Ý[™\ŠšY[ˆ‹


OO\ËˆØÝ
JJJK‹˜Y]™[\Ý[™\Šœ™[[Ý™Y‹


OO\Ëœ™[[Ý™S›ÙQÛQ[[Y[
ŠJJKK›™YYÐ[]YI‰œ‹›X]\šX[™Ù][]˜][Û•[J
I‰œ‹›X]\šX[™Ù][]˜][Û•[J
K˜Y]™[\Ý[™\Šœ˜\Ý\‘[]˜][Û“]™[Ú[™ÙY‹


OOžÚK›™YYÕ\]OHLJJK\Ëœ\™›Ü›X[˜ÙI‰\ËˆÙ
JJK‹›^Y\•\]TÝ]VÝ\ËšYK››Ó[Ü™U\]TÜÜÚX›J
_JJ_\™[[Ý™SX™[Ñœ›ÛS›ÙT™XÝ\œÚ]™J
^Ý˜Ú[™[‹™›Ü‘XXÚ

OžÝ›[šÖÝ\ËšYI‰™[]H›[šÖÝ\ËšYK\Ëœ™[[Ý™SX™[Ñœ›ÛS›ÙT™XÝ\œÚ]™J
_JJK\Ëœ™[[Ý™S›ÙQÛQ[[Y[

_\™[[Ý™S›ÙQÛQ[[Y[

^ÚYŠ›[šÖÝ\ËšYOË™ÛQ[[Y[Ê^ØÛÛœÝO]›[šÖÝ\ËšYK™ÛQ[[Y[Ë™ÛNÙKœ\™[[[Y[œ™[[Ý™PÚ[
JK[]H›[šÖÝ\ËšYK™ÛQ[[Y[ß_Y[]J
^Ý	‰\Ë˜ØXÚK˜ÛX\Š
K\Ë™ÛQ[[Y[™ÛKœ\™[[[Y[œ™[[Ý™PÚ[
\Ë™ÛQ[[Y[™ÛJK\Ëœ\™[›]™[›Ù\Ë™›Ü‘XXÚ

O\Ëœ™[[Ý™SX™[Ñœ›ÛS›ÙT™XÝ\œÚ]™J
JJ__K™^ÓVQT”×ÒS’UPSV‘Qˆ›^Y\œËZ[š]X[^™Y‹VQT—Ô‘SSÕ‘Qˆ›^Y\‹\™[[Ý™Y‹VQT—ÐQQˆ›^Y\‹XYY‹S’UPSV‘Qˆš[š]X[^™Y‹ÓÓÔ—ÓVQT”×ÓÔ‘T—ÐÒS‘ÑQ•‹ÐSQTWÓSÕ‘Qˆ˜Ø[Y\˜K[[Ý™Y‹TÔÔÑQˆ™\ÜÜÙYŸKY[™]ÈË’NVKÙ[™]ÈËšÛY[™]ÈË’NVKY[™]ÈË”›‹™[™]ÈË”L[™]ÈË”LÙ[™]ÈK‘I
‘TÑÎÌˆŠKÙV×NÛ]™‹YLØÛ\ÜÈÙˆ^[™ÈË”Y]žÈÜV×NÈÙJ

OO›™]ÈZ[\œ˜^J
JJ
NÈÛ]ØÛÛœÝXÝÜŠJ^Û]‹X\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—OØ\™Ý[Y[ÖÌ—NžßNÚYŠYJ]›ÝÈ™]È\œ›ÜŠ’[˜[YšY]Ù\‘]ˆ\˜[Y]\ˆ
]\Ý›Ûˆ™H[Ý[™Yš[™Y
HŠNÜÝ\\Š
K\Ë™ÛQ[[Y[YK\ËšYQYŠÊË\Ëœ™Y™\™[˜ÙPÜœÏ][‹œ™[™\™\‰‰›‹œ™[™\™\‹™ÛQ[[Y[Û™]È
‹œ™[™\™\ŠN›™]È
K‹œ™[™\™\ŠK\Ë›XZ[“ÛÜ[‹›XZ[“ÛÜ™]ÈŠ™]È\ŠK\ËœØÙ[™O[‹œØÙ[™LÑ™]ÈË–N‹œØÙ[™LÑ
\ËœØÙ[™K›X]š^ÛÜ›]]Õ\]OHLJK\Ë˜Ø[Y\˜O[™]ÈÊ\Ëœ™Y™\™[˜ÙPÜœË\Ë›XZ[“ÛÜ™Ùž[™Ú[™K™Ù]Ú[™ÝÔÚ^™J
Kž\Ë›XZ[“ÛÜ™Ùž[™Ú[™K™Ù]Ú[™ÝÔÚ^™J
KžK‹˜Ø[Y\˜JK\Ë—Ùœ˜[YT™\]Y\Ý\œÏ^ßK\Ë—Ü™\Ú^™S\Ý[™\J
OO\Ëœ™\Ú^™J
KÚ[™ÝË˜Y]™[\Ý[™\Šœ™\Ú^™H‹\Ë—Ü™\Ú^™S\Ý[™\‹LJK\Ë—ØÚ[™ÙTÛÝ\˜Ù\Ï[™]ÈÙ]\Ë—Ù[^YYœ˜[YT™\]Y\Ý\”™[[Ý˜[V×K\Ë—Ø[^Y\œÐ\™T™XYPØ[˜XÚÏJ
OOžÝ\Ë™Ù]^Y\œÊ
K™]™\žJ
Oœ™XYJJI‰ŒO]\Ë›XZ[“ÛÜœØÚY[\‹˜ÛÛ[X[™ÕØZ][™Ñ^XÝ][ÛÛÝ[

I‰ŒO]\Ë›XZ[“ÛÜœ™[™\š[™ÔÝ]I‰Š\Ë™\Ü]Ú]™[
Ý\N™™‹“VQT”×ÒS’UPSV‘QJK\Ëœ™[[Ý™Qœ˜[YT™\]Y\Ý\Š•TUWÑS‘\Ë—Ø[^Y\œÐ\™T™XYPØ[˜XÚÊJ_K\Ë˜Ø[Y\˜Kœ™\Ú^™J\Ë™ÛQ[[Y[˜ÛY[ÚY\Ë™ÛQ[[Y[˜ÛY[ZYÚ
NØÛÛœÝOJ
OOžÝ\Ëœ™[[Ý™Q]™[\Ý[™\Š™‹“VQT”×ÒS’UPSV‘QJK\Ë™\Ü]Ú]™[
Ý\N™™‹’S’UPSV‘QJ_NÛ]ÎÝ\Ë˜Y]™[\Ý[™\Š™‹“VQT”×ÒS’UPSV‘QJK\ËˆÛ][™]ÈZ[\œ˜^J
\Ë˜Ø[Y\˜KÚY
\Ë˜Ø[Y\˜KšZYÚ
K\Ë™ÛQ[[Y[X’[™^KLK‹™\ØX›Q›ØÝ\ÓÛ”Ý\\Ë™ÛQ[[Y[™›ØÝ\Ê
K\Ë™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\Ù]\‹
OžÌOO]˜]Û‰‰ŠÉ‰[YTÝ[\[ÏL	‰\Ë™ÛQ[[Y[™\Ü]Ú]™[
™]È[Ý\ÙQ]™[
™›ÛXÚË\šYÚ‹
JKÏ][YTÝ[\
_JJKÙ‹œ\Ú
\Ê_YÙ]™[™\™\Š
^Ü™]\›ˆ\Ë›XZ[“ÛÜË™Ùž[™Ú[™OË™Ù]™[™\™\Š
_YÙ]Ø[Y\˜LÑ

^Ü™]\›ˆ\Ë˜Ø[Y\˜OË˜Ø[Y\˜LÑY\ÜÜÙJ
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌI‰˜\™Ý[Y[ÖÌNØÛÛœÝO]Ù‹š[™^ÙŠ\ÊNÚYŠLOOYJ\™]\›ˆ›ÚYÛÛœÛÛKØ\›Š•šY]È[™XYH\ÜÜÙYŠNÝÚ[™ÝËœ™[[Ý™Q]™[\Ý[™\Šœ™\Ú^™H‹\Ë—Ü™\Ú^™S\Ý[™\ŠK\Ë˜ÛÛ›ÛÉ‰Š™[˜Ý[ÛˆO]\[Ùˆ\Ë˜ÛÛ›ÛË™\ÜÜÙI‰\Ë˜ÛÛ›ÛË™\ÜÜÙJ
K[]H\Ë˜ÛÛ›ÛÊK\Ëœ™[[Ý™P[œ˜[YT™\]Y\Ý\œÊ
NØÛÛœÝ]\Ë™Ù]^Y\œÊ
Oˆ]š\Õ[YÙ[ÛY]žS^Y\‰‰ˆ]š\Ð][ÜÜ\™JJNÙ›ÜŠÛÛœÝHÙˆŠ]\Ëœ™[[Ý™S^Y\ŠKšY
NØÛÛœÝ]\Ë™Ù]^Y\œÊ
Oš\Ð][ÜÜ\™JJNÙ›ÜŠÛÛœÝHÙˆŠ]\Ëœ™[[Ý™S^Y\ŠKšY
NØÛÛœÝO]\Ë™Ù]^Y\œÊ
Oš\Õ[YÙ[ÛY]žS^Y\ŠJNÙ›ÜŠÛÛœÝHÙˆJ]\Ëœ™[[Ý™S^Y\ŠKšY
NÝÙ‹œÜXÙJKJK\ËœØÙ[™K˜]™\œÙJØK˜ÛX[\
K\Ë™\Ü]Ú]™[
Ý\N™™‹‘TÔÔÑQJK\Ëœ™[[Ý™P[]™[Ê
_XY^Y\ŠJ^ÚYŠ]]š\Ó^Y\Š\™]\›ˆ›ÛZ\ÙKœ™Z™XÝ
™]È\œ›ÜŠY^Y\ˆ\HØš™XÝŠJNÚYŠ\Ë™Ù]^Y\žRY
šY
J\™]\›ˆ—Ü™Z™XÝ
™]È\œ›ÜŠ[˜[YY	ÉÝšYIÎˆY[™XYH\ÙY
JNÚYŠY[˜Ý[ÛŠKŠ^ØÛÛœÝYKœÛÝ\˜ÙNÚYŠ‰‰ˆYK™^[	‰ŠK™^[\‹™^[‰‰ˆ[‹™^[	‰Š‹™^[\‹™^[
JKKš\ÑÙ[ÛY]žS^Y\‰‰ˆYKš\ÓX™[^Y\ÙK˜ÜœÏ]œ™Y™\™[˜ÙPÜœÎ™K˜Üœß
‰‰œ‹[SX]š^Ù]É‰œ‹[SX]š^Ù]Ëš[˜ÛY\Ê‹˜ÜœÊOÙK˜ÜœÏ[‹˜ÜœÎ™K˜ÜœÏ\‰‰œ‹™^[˜ÜœÊKKš\ÓX™[^Y\Š]›XZ[“ÛÜ™Ùž[™Ú[™K›X™[™™[™\™\‹œ™YÚ\Ý\“^Y\ŠJNÙ[ÙHYŠK›X™[[˜X›YK˜YX™[^Y\Š^ÙK›X™[[˜X›Y	‰˜ÛÛœÛÛKš[™›Ê›^Y\‹›X™[[˜X›Y\È\™XØ]Y\ÙHYX™[^Y\‹[œÝXYÙˆŠKK˜Z[^[HLKœÝXÝ\™OHŒÙŽØÛÛœÝ[™]ÈŠ	ÙKšYK[X™[ÜÛÝ\˜ÙN›‹Ý[N™KœÝ[K›ÛÛN™Kž›ÛÛK\™›Ü›X[˜ÙN™K˜YX™[^Y\‹œ\™›Ü›X[˜ÙKÜœÎ›‹˜ÜœËš\ÚX›N™Kš\ÚX›KX\™Ú[ŽŒMK›Ü˜ÙPÛ[\Õ\œ˜Z[Ž™K˜YX™[^Y\‹™›Ü˜ÙPÛ[\Õ\œ˜Z[ŸJNÙK˜Y]™[\Ý[™\Šš\ÚX›K\›Ü\KXÚ[™ÙY‹


OOžÜ‹š\ÚX›OYKš\ÚX›_JJNØÛÛœÝO[OžÛ‹›^Y\’YOOYKšY	‰œ™[[Ý™S^Y\Š‹šY
Kœ™[[Ý™Q]™[\Ý[™\Š™‹“VQT—Ô‘SSÕ‘QJ_NÝ˜Y]™[\Ý[™\Š™‹“VQT—Ô‘SSÕ‘QJKKÚ[”™XYOYKÚ[”™XYK[Š


OOŠ˜Y^Y\ŠŠKJJJ_\™]\›ˆKš\ÓÑÐÌÑ[\Ó^Y\‰‰™K—ÜÙ]\

K_J\ËJKJ^ÚYŠš\ÐÛÛÜ“^Y\Š^ØÛÛœÝO]\Ë™Ù]^Y\œÊ
Oš\ÐÛÛÜ“^Y\ŠJNÝœÙ\]Y[˜ÙOYK›[™ÝYK˜]XÚ

_Y[Ù^ÚYŠ™[˜Ý[ÛˆˆO]\[Ùˆ\]J\™]\›ˆ—Ü™Z™XÝ
™]È\œ›ÜŠØ[YÙ[ÛY]žS^Y\ŽˆZ\ÜÚ[™ÈH\]H[˜Ý[ÛˆŠJNÚYŠ™[˜Ý[ÛˆˆO]\[Ùˆœ™U\]J\™]\›ˆ—Ü™Z™XÝ
™]È\œ›ÜŠØ[YÙ[ÛY]žS^Y\ŽˆZ\ÜÚ[™ÈH™U\]H[˜Ý[ÛˆŠJNÝ\ËˆÜœ\Ú

_\™]\›ˆ›Øš™XÝÙ	‰ˆ]›Øš™XÝÙœ\™[	‰›Øš™XÝÙOO]\ËœØÙ[™I‰\ËœØÙ[™K˜Y
›Øš™XÝÙ
KœÝ\\

K[Š


OOžÝ\Ë››ÝYžPÚ[™ÙJ_LJK\Ë—Ùœ˜[YT™\]Y\Ý\œÖÕ•TUWÑS‘I‰\Ë—Ùœ˜[YT™\]Y\Ý\œÖÕ•TUWÑS‘Kš[˜ÛY\Ê\Ë—Ø[^Y\œÐ\™T™XYPØ[˜XÚÊ_\Ë˜Yœ˜[YT™\]Y\Ý\Š•TUWÑS‘\Ë—Ø[^Y\œÐ\™T™XYPØ[˜XÚÊK\Ë™\Ü]Ú]™[
Ý\N™™‹“VQT—ÐQQ^Y\’YšYJ_JJKÚ[”™XY_\™[[Ý™S^Y\ŠJ^ØÛÛœÝ]\Ë™Ù]^Y\žRY

NÚYŠŠ^ØÛÛœÝ\‹œ\™[ÚYŠ‹™[]JJK‰‰ˆ[‹™]XÚ
ŠJ]›ÝÈ™]È\œ›ÜŠ\œ›ÜˆÈ]XÚ	ÝHœ›ÛH	Û‹šYX
NÚYŠ[O[‰‰\ËˆÜœÜXÙJ\ËˆÜ™š[™[™^

OO™KšYO]
JKJK‹š\ÐÛÛÜ“^Y\Š^ØÛÛœÝ]\Ë™Ù]^Y\œÊ
Oš\ÐÛÛÜ“^Y\ŠJNÙ›ÜŠÛÛœÝHÙˆ
YKœÙ\]Y[˜ÙOœ‹œÙ\]Y[˜ÙI‰™KœÙ\]Y[˜ÙKK_[]OLÙ›ÜŠÛÛœÝÙˆÙŠZJÏ]™Ù]^Y\œÊ
OœÛÝ\˜ÙKZYO\‹œÛÝ\˜ÙKZY	‰˜ÜœÏO\‹˜ÜœÊJK›[™ÝÜ™]\›ˆ‹œÛÝ\˜ÙK›Û“^Y\”™[[Ý™Y
Ý[\ÙYÜœÎŒOZOÜ‹˜ÜœÎ›ÚYJK\Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜JK\Ë™\Ü]Ú]™[
Ý\N™™‹“VQT—Ô‘SSÕ‘Q^Y\’YJKL]›ÝÈ™]È\œ›ÜŠ	ÝHÙ\Û‰Ý^\Ý
_[›ÝYžPÚ[™ÙJ
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌN›ÚYOHJ\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWJ_\™Ý[Y[ÖÌWNÝ	‰Š\Ë—ØÚ[™ÙTÛÝ\˜Ù\Ë˜Y

K\Ë›XZ[“ÛÜ™Ùž[™Ú[™Kœ™[™\™\‹ž‹š\Ô™\Ù[[™ß]š\Õ[SY\Ú	‰ˆ]š\ÐØ[Y\˜_
\ËˆÛ]›™YYÕ\]OHL
JK\Ë›XZ[“ÛÜœØÚY[UšY]Õ\]J\ËJ_YÙ]^Y\œÊ
^ØÛÛœÝOV×NÙ›ÜŠÛÛœÝˆÙˆ\ËˆÜ
ZYŠ	‰ˆ]
Š_Kœ\Ú
ŠK‹˜]XÚY^Y\œÊY›ÜŠÛÛœÝˆÙˆ‹˜]XÚY^Y\œÊ]	‰ˆ]
‹Š_Kœ\Ú
ŠNÜ™]\›ˆ_YÙ]^Y\žRY

^Ü™]\›ˆ\Ë™Ù]^Y\œÊ
OO™KšYOO]
JVÌ_XYœ˜[YT™\]Y\Ý\ŠJ^ÚYŠ™[˜Ý[ÛˆˆO]\[ÙˆJ]›ÝÈ™]È\œ›ÜŠ™œ˜[YT™\]Y\Ý\ˆ]\Ý™HH[˜Ý[ÛˆŠNÝ\Ë—Ùœ˜[YT™\]Y\Ý\œÖÝOÝ\Ë—Ùœ˜[YT™\]Y\Ý\œÖÝKœ\Ú
JN\Ë—Ùœ˜[YT™\]Y\Ý\œÖÝOVÙW_\™[[Ý™Qœ˜[YT™\]Y\Ý\ŠJ^Ý\Ë—Ùœ˜[YT™\]Y\Ý\œÖÝKš[˜ÛY\ÊJOÝ\Ë—Ù[^YYœ˜[YT™\]Y\Ý\”™[[Ý˜[œ\Ú
ÝÚ[Žœ˜[YT™\]Y\Ý\Ž™_JN˜ÛÛœÛÛK™\œ›ÜŠ’[˜[YØ[È™[[Ý™Qœ˜[YT™\]Y\Ý\Žˆœ˜[YT™\]Y\Ý\ˆ\Û‰Ý™YÚ\Ý\™YŠ_\™[[Ý™P[œ˜[YT™\]Y\Ý\œÊ
^Ù›ÜŠÛÛœÝ[ˆ\Ë—Ùœ˜[YT™\]Y\Ý\œÊZYŠØš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
\Ë—Ùœ˜[YT™\]Y\Ý\œË
J^ØÛÛœÝO]\Ë—Ùœ˜[YT™\]Y\Ý\œÖÝNÙ›ÜŠÛÛœÝˆÙˆJ]\Ëœ™[[Ý™Qœ˜[YT™\]Y\Ý\ŠŠ_]\Ë—Ù^XÝ]Qœ˜[YT™\]Y\Ý\œÔ™[[Ý˜[Ê
_\™[[Ý™P[]™[Ê
^ÚYŠ›ÚYOO]\Ë—Û\Ý[™\œÊ^Ù›ÜŠÛÛœÝ[ˆ\Ë—Û\Ý[™\œÊSØš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
\Ë—Û\Ý[™\œË
I‰™[]H\Ë—Û\Ý[™\œÖÝNÝ\Ë—Û\Ý[™\œÏ]›ÚY_WÙ^XÝ]Qœ˜[YT™\]Y\Ý\œÔ™[[Ý˜[Ê
^Ù›ÜŠÛÛœÝÙˆ\Ë—Ù[^YYœ˜[YT™\]Y\Ý\”™[[Ý˜[
^ØÛÛœÝO]\Ë—Ùœ˜[YT™\]Y\Ý\œÖÝÚ[—Kš[™^ÙŠ™œ˜[YT™\]Y\Ý\ŠNÙOLÝ\Ë—Ùœ˜[YT™\]Y\Ý\œÖÝÚ[—KœÜXÙJKJN˜ÛÛœÛÛKØ\›Š‘œ˜[YT™\H\È[™XYH™Y[ˆ™[[Ý™YŠ_]\Ë—Ù[^YYœ˜[YT™\]Y\Ý\”™[[Ý˜[›[™ÝLY^XÑœ˜[YT™\]Y\Ý\œÊKŠ^ÚYŠ\Ë—Ùœ˜[YT™\]Y\Ý\œÖÝJ^Ý\Ë—Ù[^YYœ˜[YT™\]Y\Ý\”™[[Ý˜[›[™ÝŒ	‰\Ë—Ù^XÝ]Qœ˜[YT™\]Y\Ý\œÔ™[[Ý˜[Ê
NÙ›ÜŠ˜\ˆX\™Ý[Y[Ë›[™ÝO[™]È\œ˜^JŒÏÛ‹LÎŒ
KÏLÎÜÏŽÜÊÊÊZVÜËL×OX\™Ý[Y[ÖÜ×NÙ›ÜŠÛÛœÝˆÙˆ\Ë—Ùœ˜[YT™\]Y\Ý\œÖÝJ[‹\]OÛ‹\]JK‹JN›ŠK‹J__Y]™[ÕšY]ÐÛÛÜ™Ê
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWN›Y‹X\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—OØ\™Ý[Y[ÖÌ—NŒØÛÛœÝ]\Ë™ÛQ[[Y[™Ù]›Ý[™[™ÐÛY[™XÝ

NÚYŠÝXÚ\É‰ÝXÚ\Ë›[™Ý
\™]\›ˆKœÙ]
ÝXÚ\ÖÜ—K˜ÛY[[‹žÝXÚ\ÖÜ—K˜ÛY[K[‹žJNÚYŠ›ÚYOO]›Ù™œÙ]	‰›ÚYOO]›Ù™œÙ]J^ØÛÛœÝ]\™Ù]™Ù]›Ý[™[™ÐÛY[™XÝ

NÜ™]\›ˆKœÙ]
‹ž
Ý›Ù™œÙ][‹ž‹žJÝ›Ù™œÙ]K[‹žJ__Y]™[Ó›Ü›X[^™YÛÛÜ™Ê
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNŒÜ™]\›ˆ\ËšY]ÕÓ›Ü›X[^™YÛÛÜ™Ê\Ë™]™[ÕšY]ÐÛÛÜ™ÊY‹JJ_]šY]ÕÓ›Ü›X[^™YÛÛÜ™Ê
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWN›YŽÜ™]\›ˆKž]žÝ\Ë˜Ø[Y\˜KÚY
Œ‹LKKžO]žKÝ\Ë˜Ø[Y\˜KšZYÚ
‹LŠÌK_[›Ü›X[^™YÕšY]ÐÛÛÜ™Ê
^Ü™]\›ˆY‹žKJŠž
ÌJJ\Ë˜Ø[Y\˜KÚYY‹žOKKJŠžKLJJ\Ë˜Ø[Y\˜KšZYÚYŸ\XÚÓØš™XÝÐ]

^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNŒX\™Ý[Y[Ë›[™ÝŒØ\™Ý[Y[ÖÌ—N›ÚYØÛÛœÝV×NÚYŠ‰‰ŒOO\‹›[™Ý
]\Ë™Ù]^Y\œÊ
Oš\ÑÙ[ÛY]žS^Y\ŠJJK\œ˜^Kš\Ð\œ˜^JŠ_
VÜ—JK‹™›Ü‘XXÚ

OžÈœÝš[™ÈO]\[Ùˆ	‰Š]\Ë™Ù]^Y\žRY

JK	‰Šš\ÑÙ[ÛY]žS^Y\Ÿš\ÓØš™XÝÑ
I‰›‹œ\Ú

_JJKO[‹›[™Ý
\™]\›–×NØÛÛœÝOV×KÏ][œÝ[˜Ù[Ùˆ]™[Ý\Ë™]™[ÕšY]ÐÛÛÜ™Ê
NÙ›ÜŠÛÛœÝÙˆŠZYŠ]š\Ð][ÜÜ\™JZYŠš\ÑÙ[ÛY]žS^Y\Š^ÚYŠ]œ™XYJ^ØÛÛœÛÛKØ\›ŠšY]ËœXÚÓØš™XÝ]ˆ^Y\ˆ\È›Ý™XYHˆ‹
NØÛÛ[Y_]œXÚÓØš™XÝÐ]
\ËËKJ_Y[ÙHXKœXÚÓØš™XÝÐ]
\ËËKJNÜ™]\›ˆ_YÙ]ØØ[J
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌN‹ŒŽÜ™]\›ˆ\Ë˜Ø[Y\˜LÑš\ÓÜÙÜ˜\XÐØ[Y\˜OËŒJÝ\Ë™Ù]^[ÕÓY]\œÊ
N\Ë™Ù]ØØ[Qœ›ÛQ\Ý[˜ÙJ\Ë™Ù]\Ý[˜ÙQœ›ÛPØ[Y\˜J
J_YÙ]ØØ[Qœ›ÛQ\Ý[˜ÙJ
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌN‹ŒŽOX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNŒNÝÏLYLÎØÛÛœÝ\Ë˜ÚŽK™YÕÔ˜Y
\Ë˜Ø[Y\˜LÑ™›ÝŠNÜ™]\›ˆ
Š\Ë˜Ø[Y\˜KšZYÚÊŠ™J“X][ŠJœŠJJ_YÙ]\Ý[˜ÙQœ›ÛPØ[Y\˜J
^Ü™]\›ˆ\Ë™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\
ŠK\Ë˜Ø[Y\˜LÑœÜÚ][Û‹™\Ý[˜ÙUÊŠ_YÙ]^[ÕÓY]\œÊ
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNŒKOX\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚYÜ™]\›ˆ\Ë˜Ø[Y\˜LÑš\ÓÜÙÜ˜\XÐØ[Y\˜OÊ™J\Ë˜Ø[Y\˜LÑœšYÚ]\Ë˜Ø[Y\˜LÑ›Y
KÝ\Ë˜Ø[Y\˜LÑž›ÛÛK
˜™‹Ý\Ë˜Ø[Y\˜KÚY
N\Ë™Ù]^[ÕÓY]\œÑœ›ÛQ\Ý[˜ÙJ\Ë™Ù]\Ý[˜ÙQœ›ÛPØ[Y\˜JJJ_YÙ]^[ÕÓY]\œÑœ›ÛQ\Ý[˜ÙJ
^Ü™]\›Š\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNŒJJŠ\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNŒJKÝ\Ë˜Ø[Y\˜K—Ü™TÔÑ_YÙ]Y]\œÕÔ^[Ê
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNŒKOX\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚYÜ™]\›ˆ\Ë˜Ø[Y\˜LÑš\ÓÜÙÜ˜\XÐØ[Y\˜OÊ™J\Ë˜Ø[Y\˜LÑœšYÚ]\Ë˜Ø[Y\˜LÑ›Y
KÝ\Ë˜Ø[Y\˜LÑž›ÛÛK
\Ë˜Ø[Y\˜KÚYØ™ŠN\Ë™Ù]Y]\œÕÔ^[Ñœ›ÛQ\Ý[˜ÙJ\Ë™Ù]\Ý[˜ÙQœ›ÛPØ[Y\˜JJJ_YÙ]Y]\œÕÔ^[Ñœ›ÛQ\Ý[˜ÙJ
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNŒKOX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNŒNÜ™]\›ˆ\Ë˜Ø[Y\˜K—Ü™TÔÑJÙ_\XÚÑ™X]\™\Ð]

^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNŒÎÙ›ÜŠ˜\ˆX\™Ý[Y[Ë›[™Ý[™]È\œ˜^JŒÜ‹LŽŒ
KÏLŽÜÏŽÜÊÊÊ[–ÜËL—OX\™Ý[Y[ÖÜ×NÐ\œ˜^Kš\Ð\œ˜^J–ÌJI‰ŠÛÛœÛÛKØ\›Š‘\™XØ]YˆH‹‹Ú\™H\™Ý[Y[ÙˆšY]ÈÜXÚÑ™X]\™\Ð]ÚÝ[›Ý™H[ˆ\œ˜^H[ž[[Ü™K]H\Ýˆ\ÙHHÜ™XYÜ\˜]ÜˆYˆ™YYYˆŠK[–ÌJNØÛÛœÝÏV×KO^ßNÊLO[‹›[™ÝÝ\Ë™Ù]^Y\œÊ
Oš\ÐÛÛÜ“^Y\Ÿš\ÑÙ[ÛY]žS^Y\ŠJN›ŠK™›Ü‘XXÚ

OžÈœÝš[™ÈO]\[Ùˆ	‰Š]\Ë™Ù]^Y\žRY

JK	‰š\Ó^Y\‰‰ŠVÝšYOV×Kš\ÐÛÛÜ“^Y\‰‰›Ëœ\Ú
šY
J_JJNØÛÛœÝ][œÝ[˜Ù[Ùˆ]™[Ý\Ë™]™[ÕšY]ÐÛÛÜ™ÊYŠNÏ]\ËœXÚÓØš™XÝÐ]
K‹‹›ŠNÚYŠË›[™ÝŒ	‰˜Ë™›Ü‘XXÚ

O˜VÝ›^Y\‹šYKœ\Ú

JJKO[Ë›[™Ý
\™]\›ˆNÛ]Ý\Ë™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\
ŠKÙ‹˜ÜœÏ]\Ëœ™Y™\™[˜ÙPÜœËÙ‹œÙ]œ›ÛU™XÝÜŒÊŠNØÛÛœÝO^ÓN\Ë™Ù]^[ÕÓY]\œÊK
K‹ŒJ™_NÝ\Ëš\Ô[˜\•šY]ÏÝK‘]K“N\Ë™Ù]^[ÕÑYÜ™Y\É‰ŠK‘]\Ë™Ù]Y]\œÕÑYÜ™Y\ÊK“JJNØÛÛœÝ^XKœXÚÕ[\Ð]
\ËK\Ë[S^Y\ŠNÙ›ÜŠÛÛœÝÙˆ
ZYŠ›Øš™XÝ›X]\šX[
Y›ÜŠÛÛœÝHÙˆ›Øš™XÝ›X]\šX[™Ù][\ÊÊJY›ÜŠÛÛœÝÙˆK^\™\Ê]™™X]\™\É‰ŠZKËš\ÓY]šXÕ[š]
™™X]\™\Ë˜ÜœÊOÝK“NK‘™š[\‘™X]\™\Õ[™\ÛÛÜ™[˜]JÙ‹™™X]\™\Ë
K™›Ü‘XXÚ

OžØVÙKšYK™š[™

OO™K™Ù[ÛY]žOOO]™Ù[ÛY]žJJ_VÙKšYKœ\Ú

_JJJNÜ™]\›ˆ_\™XY\Y™™\ŠK‹‹J^ØÛÛœÝÏ]\Ë›XZ[“ÛÜ™Ùž[™Ú[™KÏ]\Ë[S^Y\‹Ú\™Yœ˜[YKO]\Ë[S^Y\‹›ÜXÚ]K]\Ë[S^Y\‹š\ÚX›NÛÉ‰Š\Ë[S^Y\‹Ú\™Yœ˜[YOHLJKOI‰Š\Ë[S^Y\‹›ÜXÚ]OLJK
\Ë[S^Y\‹š\ÚX›OHL
NØÛÛœÝÏ]\Ë[S^Y\‹›]™[›Ù\Ë›X\

O‰œ\Ú
	“SÑTË‘T
JJNÜ™]\›ˆO\Ëœ™[™\•šY]ÕÐY™™\ŠØØ[Y\˜N\Ë˜Ø[Y\˜KØÙ[™N\Ë[S^Y\‹›Øš™XÝÙKÞN™KÚYœ‹ZYÚ›‹Y™™\Žš_JKË™›Ü‘XXÚ

O

JJK\Ë[S^Y\‹Ú\™Yœ˜[YHOO[É‰Š\Ë[S^Y\‹Ú\™Yœ˜[YO[ÊK\Ë[S^Y\‹›ÜXÚ]HOOXI‰Š\Ë[S^Y\‹›ÜXÚ]OXJK\Ë[S^Y\‹š\ÚX›HOO[	‰Š\Ë[S^Y\‹š\ÚX›O[
K_YÙ]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\

^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWN›™]ÈË”LÚYŠ]\Ë[S^Y\ŸO]\Ë[S^Y\‹›]™[›Ù\Ë›[™Ý]\Ë[S^Y\‹›]™[›Ù\ÖÌJ\™]\›ˆ›ÚY
O]›ÚY
NØÛÛœÝ]\Ë›XZ[“ÛÜLO\‹œØÚY[\‹˜ÛÛ[X[™ÕØZ][™Ñ^XÝ][ÛÛÝ[

I‰ŒO\‹œ™[™\š[™ÔÝ]KO\‹™Ùž[™Ú[™KÏZK™Ù]Ú[™ÝÔÚ^™J
NÛ]NÚYŠ
]Ë˜ÛÛ™J
K›][\TØØ[\ŠJJKžSX]™›ÛÜŠž
KžOSX]™›ÛÜŠžJKŠ^Ý\ËˆÛ]›™YYÕ\]I‰Š\Ëœ™XY\Y™™\ŠËžËžK\ËˆÛ]
K\ËˆÛ]›™YYÕ\]OHLJNØÛÛœÝOM
Š
ËžK]žKLJJ›Ëž
Ýž
NØO]\ËˆÛ]œÛXÙJKJÍ
_Y[ÙHO]\Ëœ™XY\Y™™\ŠžžKKK\ËˆÙ
NÚYŠY‹ž]žÛËž
Œ‹LKY‹žOK]žKÛËžJŒŠÌK‹š\ÓÙÑ\Y™™\”Ý\ÜY

I‰ˆ”\œÜXÝ]™PØ[Y\˜HO]\Ë˜Ø[Y\˜LÑ\J^ÞY‹›ÜšYÚ[‹˜ÛÜJ\Ë˜Ø[Y\˜LÑœÜÚ][ÛŠKY‹™\™XÝ[Û‹œÙ]
Y‹žY‹žKJKÙ‹›][\SX]šXÙ\Ê\Ë˜Ø[Y\˜LÑ›X]š^ÛÜ›Ù‹˜ÛÜJ\Ë˜Ø[Y\˜LÑœ›Ú™XÝ[Û“X]š^
Kš[™\

JKY‹™\™XÝ[Û‹˜\SX]š^
ÙŠKY‹™\™XÝ[Û‹œÝXŠY‹›ÜšYÚ[ŠK™‹œÙ]
JK™‹˜\SX]š^
ÙŠK™‹œÝXŠY‹›ÜšYÚ[ŠNØÛÛœÝ]™‹˜[™ÛUÊY‹™\™XÝ[ÛŠKZK™\Y™™\”‘ÐU˜[YUÓÜÖŠK\Ë˜Ø[Y\˜LÑ
KÓX]˜ÛÜÊ
NÙK˜Y™XÝÜœÊ\Ë˜Ø[Y\˜LÑœÜÚ][Û‹Y‹™\™XÝ[Û‹œÙ][™Ý
ŠJ_Y[Ù^ØÛÛœÝZK™\Y™™\”‘ÐU˜[YUÓÜÖŠK\Ë˜Ø[Y\˜LÑ
NÙKœÙ]
Y‹žY‹žK
KK[œ›Ú™XÝ
\Ë˜Ø[Y\˜LÑ
_\™]\›ˆK›[™Ý

OŒYMÏÝ›ÚY™_\XÚÕ\œ˜Z[ÛÛÜ™[˜]\Ê
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWN›™]ÈK‘I
\Ëœ™Y™\™[˜ÙPÜœÊNÜ™]\›ˆ[œÝ[˜Ù[Ùˆ]™[Ý\Ë™]™[ÕšY]ÐÛÛÜ™Ê
N	‰›ÚYOO]ž	‰›ÚYOO]žOÛY‹˜ÛÜJ
N›Y‹œÙ]
\Ë›XZ[“ÛÜ™Ùž[™Ú[™KÚYÌ‹\Ë›XZ[“ÛÜ™Ùž[™Ú[™KšZYÚÌŠK\Ë™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\
Y‹ŠKÙ‹˜ÜœÏ]\Ëœ™Y™\™[˜ÙPÜœËÙ‹œÙ]œ›ÛU™XÝÜŒÊŠKÙ‹˜\ÊK˜ÜœËJK_\XÚÐÛÛÜ™[˜]\Ê
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWN›™]ÈK‘I
\Ëœ™Y™\™[˜ÙPÜœÊNÜ™]\›ˆÛÛœÛÛKØ\›Š‘\™XØ]Y\ÙHšY]ÈÜXÚÕ\œ˜Z[ÛÛÜ™[˜]\È[œÝXYˆŠK\ËœXÚÕ\œ˜Z[ÛÛÜ™[˜]\ÊJ_\™\Ú^™JJ^ÝOØÛÛœÛÛKØ\›ŠžZ[™ÈÈ™\Ú^™HHšY]ÈÚ]™YØ]]™HZYÚ
	Ù_JHÜˆÚY
	ÝJKˆÚÚ\[™È™\Ú^™K˜
NŠ[O]	‰Š]\Ë™ÛQ[[Y[˜ÛY[ÚY
K[OYI‰ŠO]\Ë™ÛQ[[Y[˜ÛY[ZYÚ
K\ËˆÛ][™]ÈZ[\œ˜^J

™JK\Ë›XZ[“ÛÜ™Ùž[™Ú[™K›Û•Ú[™ÝÔ™\Ú^™JJKOO]	‰ŒOOYI‰Š\Ë˜Ø[Y\˜Kœ™\Ú^™JJK\Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜LÑ
JJ__XÛÛœÝYTÙ‹ÙLYLËÍŒY[˜Ý[ÛŠ
^ÝšY	‰ŠÛX\’[\˜[
šY
KšY]›ÚY
KØZ][Y\‰‰ŠÛX\’[\˜[
ØZ][Y\ŠKØZ][Y\]›ÚY
KšÙ^Yœ˜[YOLKYY[˜Ý[ÛŠ
^ÕŠ
Kš\Ñ[™Y

I‰™\Ü]Ú]™[
Ý\Nˆ˜[š[X][Û‹Y[™YŸJK™\Ü]Ú]™[
Ý\Nˆ˜[š[X][Û‹\ÝÜYŸJK™\˜][ÛLNØÛ\ÜÈ™ˆ^[™ÈË”Y]žØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\ËšY[[\ËšÙ^Yœ˜[YOL\Ë™\˜][ÛL\ËœÝ]OL\ËØZ][Y\[[\Ë˜Ø[˜XÚÏJ
OOžß_Z\Ô^Z[™Ê
^Ü™]\›ˆOOO]\ËœÝ]_Z\ÔÝÜY

^Ü™]\›ˆOO]\ËœÝ]_Z\Ñ[™Y

^Ü™]\›ˆOO]\ËœÝ]_\Ù]Ø[˜XÚÊ
^Ý\Ë˜Ø[˜XÚÏ]\^J
^Ý\Ë™\˜][Û]\Ë™\Ü]Ú]™[
Ý\Nˆ˜[š[X][Û‹\Ý\YŸJK\ËœÝ]OLKŠ\ÊK\ËšY\Ù][\˜[
\Ë™œ˜[YK˜š[™
\ÊKÙŠ_\^S]\ŠJ^ØÛÛœÝSX]™›ÛÜŠÙŠ™JNÝÚ[™ÝË˜ÛX\’[\˜[
\ËØZ][Y\ŠNØÛÛœÝ]\ÎÝ\ËØZ][Y\]Ú[™ÝËœÙ][Y[Ý]



OOžÛ‹œ^J
_JKŠ_\ÝÜ

^Ý\ËœÝ]OLYŠ\Ê_Yœ˜[YJ
^Ý\ËšÙ^Yœ˜[YO\Ë™\˜][ÛÊ\ËšÙ^Yœ˜[YJÊË\Ë™\Ü]Ú]™[
Ý\Nˆ˜[š[X][Û‹Yœ˜[YHŸJK\Ë˜Ø[˜XÚÊ
JNŠ\ËœÝ]OL‹YŠ\ÊJ__XÛÛœÝT™ŽÝ˜\ˆ™\ŠL
NÜËŽK‘QUSÕTœÙ]
JNØÛÛœÝ[™]ÈË”L[™]ÈK‘I
‘TÑÎÌˆ‹
KÙ[™]ÈKÌK™V×K™[™]ÈÛY[™]ÈË”LÙ[˜Ý[ÛˆÙŠ
^Ü™]\›ˆLÍŒ
“X]™›ÛÜŠ

ÌN
KÌÍŒ
_Y[˜Ý[Ûˆ™Š
^Ü™]\›ˆ™Ù]^Y\œÊ
Oš\Õ[YÙ[ÛY]žS^Y\ŠJVÌ_XÛ\ÜÈÙˆ^[™ÈËŽ^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\ËœÙXS]™[[™]ÈËŽK\Ë\™Ù][™]ÈËŽK\Ë\™Ù]œ›Ý][Û‹›Ü™\H––H‹\Ë˜Ø[Y\˜O[™]ÈËšMÙ\Ë˜Y
\ËœÙXS]™[
K\ËœÙXS]™[˜Y
\Ë\™Ù]
K\Ë\™Ù]˜Y
\Ë˜Ø[Y\˜JK\Ë˜ÛÛÜ™[™]ÈK‘I
‘TÑÎMÎ‹
K\Ë\™Ù]ÛÜ›ÜÚ][Û[™]ÈË”L\Ëœ™[[Ý™P[J
OOžßK\Ë—ÛÛÚ[™ÙPØ[˜XÚÏ[[X\U˜[œÙ›Ü›UÐØ[Y\˜JJ^Ý\Ëœ›ÞOÊKœ]X]\›š[Û‹—ÛÛÚ[™ÙJ\Ë—ÛÛÚ[™ÙPØ[˜XÚÊK\Ë˜Ø[Y\˜K›X]š^ÛÜ›™XÛÛ\ÜÙJ\Ëœ›ÞKœÜÚ][Û‹Kœ]X]\›š[Û‹KœØØ[JKKœ]X]\›š[Û‹—ÛÛÚ[™ÙJ


OO\Ëœ™[[Ý™T›ÞJJJJJN\Ë˜Ø[Y\˜K›X]š^ÛÜ›™XÛÛ\ÜÙJKœÜÚ][Û‹Kœ]X]\›š[Û‹KœØØ[JK™\Ü]Ú]™[
Ý\N™™‹ÐSQTWÓSÕ‘QÛÛÜ™\Ë˜ÛÛÜ™˜[™ÙN\Ëœ˜[™ÙKXY[™Î\ËšXY[™Ë[\Ë[J_\Ù]›ÞJJ^È]\Ëœ›ÞI‰	‰™I‰Š\Ëœ›ÞO^ÜÜÚ][ÛŽ›™]ÈË”LKØš™XÝšÙ^\ÊKœÜÚ][ÛŠK™›Ü‘XXÚ

O™[˜Ý[ÛŠK‹Š^Ü‹œ›ÞKœÜÚ][Û–Û—OYKœÜÚ][Û–Û—KØš™XÝ™Yš[™T›Ü\JKœÜÚ][Û‹‹ÙÙ]Š
OOœ‹œ›ÞKœÜÚ][Û–Û—KÙ]šOOžÜ‹œ™[[Ý™T›ÞJJKKœÜÚ][Û–Û—OZ__J_JK\ËŠJJK\Ë—ÛÛÚ[™ÙPØ[˜XÚÏYKœ]X]\›š[Û‹—ÛÛÚ[™ÙPØ[˜XÚËKœ]X]\›š[Û‹—ÛÛÚ[™ÙJ


OO\Ëœ™[[Ý™T›ÞJJJJJ_\™[[Ý™T›ÞJJ^Ý\ËœÝÜ

K\Ëœ›ÞI‰	‰™I‰ŠØš™XÝšÙ^\ÊKœÜÚ][ÛŠK™›Ü‘XXÚ

O“Øš™XÝ™Yš[™T›Ü\JKœÜÚ][Û‹Ý˜[YN\Ëœ›ÞKœÜÚ][Û–ÝKÜš]X›NˆLJJJKKœ]X]\›š[Û‹—ÛÛÚ[™ÙJ\Ë—ÛÛÚ[™ÙPØ[˜XÚÊK\Ëœ›ÞO[[
_\Ù]\™Ù]œ›ÛPÛÛÜ™[˜]JJ^ÙK˜\Ê™Š
K™^[˜ÜœË\Ë˜ÛÛÜ™
NØÛÛœÝSX]›X^
K™Ù][]˜][Û•˜[YP]
™Š
K\Ë˜ÛÛÜ™K”‘PÒTÑWÔ‘PQÖŠ_\Ë˜ÛÛÜ™žŠNÝ\Ë˜ÛÛÜ™ž\‹\Ë˜ÛÛÜ™˜\Êœ™Y™\™[˜ÙPÜœÊKÕ™XÝÜŒÊŠK‘TÑÎMÎO]œ™Y™\™[˜ÙPÜœÏÊ\Ë›ÛÚÐ]
ŠK\ËœÙXS]™[œÜÚ][Û‹œÙ]
‹›[™Ý

K\ŠJNŠ\ËœÜÚ][Û‹œÙ]
‹ž‹žK
K\ËœÙXS]™[œÜÚ][Û‹œÙ]

JK\Ë\™Ù]œÜÚ][Û‹œÙ]
Š_\Ù]œ›ÛTÜÚ][ÛœÊJ^Ý\ËœÙ]\™Ù]œ›ÛPÛÛÜ™[˜]J™]ÈK‘I
œ™Y™\™[˜ÙPÜœÊKœÙ]œ›ÛU™XÝÜŒÊŠJK\Ë\™Ù]œ›Ý][Û‹œÙ]

K\Ë\]SX]š^ÛÜ›
L
K\Ë˜Ø[Y\˜KœÜÚ][Û‹˜ÛÜJJK\Ë\™Ù]ÛÜ›ÓØØ[
\Ë˜Ø[Y\˜KœÜÚ][ÛŠNØÛÛœÝ]\Ë˜Ø[Y\˜KœÜÚ][Û‹›[™Ý

NÝ\Ë\™Ù]œ›Ý][Û‹žSX]˜\Ú[Š\Ë˜Ø[Y\˜KœÜÚ][Û‹ž‹ÜŠNØÛÛœÝ\Ë˜ÚŽK˜Û[\
\Ë˜Ø[Y\˜KœÜÚ][Û‹žKÊX]˜ÛÜÊ\Ë\™Ù]œ›Ý][Û‹ž
JœŠKLKJNÝ\Ë\™Ù]œ›Ý][Û‹žSX]œÚYÛŠ]\Ë˜Ø[Y\˜KœÜÚ][Û‹žJJ“X]˜XÛÜÊŠK\Ë˜Ø[Y\˜KœÜÚ][Û‹œÙ]
‹
_X\T\˜[\ÊJ^ÙK˜ÛÛÜ™	‰\ËœÙ]\™Ù]œ›ÛPÛÛÜ™[˜]JK˜ÛÛÜ™
K[OYK[	‰Š\Ë\™Ù]œ›Ý][Û‹ž\Ë˜ÚŽK™YÕÔ˜Y
K[
JK[OYKšXY[™É‰Š\Ë\™Ù]œ›Ý][Û‹ž\Ë˜ÚŽK™YÕÔ˜Y
ZÙŠKšXY[™ÊÌN
JJKKœ˜[™ÙI‰\Ë˜Ø[Y\˜KœÜÚ][Û‹œÙ]
Kœ˜[™ÙK
K\Ë˜Ø[Y\˜Kœ›Ý][Û‹œÙ]
J‹SX]”KX]”JK\Ë\]SX]š^ÛÜ›
L
K\Ë\™Ù]ÛÜ›ÜÚ][Û‹œÙ]œ›ÛSX]š^ÜÚ][ÛŠ\ËœÙXS]™[›X]š^ÛÜ›
_YÙ]\˜[\Ê
^Ü™]\›žØÛÛÜ™\Ë˜ÛÛÜ™˜ÛÛ™J
K[\Ë[XY[™Î\ËšXY[™Ë˜[™ÙN\Ëœ˜[™ÙK\™Ù]ÛÜ›ÜÚ][ÛŽ\Ë\™Ù]ÛÜ›ÜÚ][ÛŸ_\Ù]œ›ÛPØ[Y\˜JKŠ^ÙK\]SX]š^ÛÜ›
L
K[O\‰‰Š]™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\

_[˜Ý[ÛŠJ^ØÛÛœÝ[™]ÈË”L
JNÚYŠ‹[œ›Ú™XÝ
JK‹œÝXŠKœÜÚ][ÛŠK››Ü›X[^™J
K‘TÑÎMÎO]œ™Y™\™[˜ÙPÜœÊ\™]\›ˆÙ‹š[\œÙXÝ[ÛŠÙ\™XÝ[ÛŽœ‹ÜšYÚ[Ž™KœÜÚ][ÛŸJNÞØÛÛœÝYKœÜÚ][Û‹ž‹Ü‹žŽÜ™]\›ˆ‹›][\TØØ[\Š
K˜Y
KœÜÚ][ÛŠ__JJJNØÛÛœÝ\‰‰ˆZ\Ó˜SŠ‹ž
OÙKœÜÚ][Û‹™\Ý[˜ÙUÊŠNŒLÙK›ØØ[ÕÛÜ›
‹œÙ]
[ŠJK\ËœÙ]œ›ÛTÜÚ][ÛœÊKœÜÚ][ÛŠ_XÛÜSØš™XÝÑ

^Ü™]\›ˆ\Ë˜ÛÜJLJK\ËœÙXS]™[˜ÛÜJœÙXS]™[LJK\Ë\™Ù]˜ÛÜJ\™Ù]LJK\Ë˜Ø[Y\˜K˜ÛÜJ˜Ø[Y\˜JK\ßX[š[X]PØ[Y\˜UÓÛÚÐ]\™Ù]
KŠ^Ü‹™X\Ú[™Ï\‹™X\Ú[™ß™‹^K‘X\Ú[™Ë”]X\XË’[“Ý]\ËœÙ]œ›ÛPØ[Y\˜JJNØÛÛœÝ[™]È™‹^K‘Ü›Ý\Ý\ËœÝ\J\ËœÝ\™]ÈÙŠK˜ÛÜSØš™XÝÑ
\ÊK\Ë™[™J\Ë™[™™]ÈÙŠK˜ÛÜSØš™XÝÑ
\ÊNØÛÛœÝO\‹[Y_LÏ^ÝŒKOV×KJ

OOžÛ]NÜ™]\›žÜ›ÛZ\ÙN›™]È›ÛZ\ÙJ

‹ŠOOžÝ\‹O[ŸJJK™\ÛÛ™N™Z™XÝ™__JJ
NÝ\Ë˜YXÙU\™Ù]Û‘Ü›Ý[™
K‹˜ÛÛÜ™ÊK\Ë™[™˜\T\˜[\ÊŠNØÛÛœÝÏ]\Ë™[™\™Ù]œ›Ý][Û‹ž‹]\ËœÝ\\™Ù]œ›Ý][Û‹žŽÜ™]\›ˆX]˜XœÊÊO“X]”I‰Š\Ë™[™\™Ù]œ›Ý][Û‹ž]\ËœÝ\\™Ù]œ›Ý][Û‹žŠØËLŠ“X]œÚYÛŠÊJ“X]”JKKœ\Ú
™]È™‹^K•ÙY[ŠÊKÊÝŒ_KJK™X\Ú[™Ê‹™X\Ú[™ÊK›Û•\]J
OOžÈ‘TÑÎMÎO]œ™Y™\™[˜ÙPÜœÉ‰\Ëœ]X]\›š[Û‹œÛ\œ]X]\›š[ÛœÊ\ËœÝ\œ]X]\›š[Û‹\Ë™[™œ]X]\›š[Û‹K
K\Ë˜Ø[Y\˜Kœ]X]\›š[Û‹œÛ\œ]X]\›š[ÛœÊ\ËœÝ\˜Ø[Y\˜Kœ]X]\›š[Û‹\Ë™[™˜Ø[Y\˜Kœ]X]\›š[Û‹K
K\Ë\™Ù]œ›Ý][Û‹œÙ]

K\Ë\™Ù]œ›Ý]VŠË˜ÚŽK›\œ
\ËœÝ\\™Ù]œ›Ý][Û‹ž‹\Ë™[™\™Ù]œ›Ý][Û‹ž‹K
JK\Ë\™Ù]œ›Ý]V
Ë˜ÚŽK›\œ
\ËœÝ\\™Ù]œ›Ý][Û‹ž\Ë™[™\™Ù]œ›Ý][Û‹žK
J_JJJK‘TÑÎMÎˆO]œ™Y™\™[˜ÙPÜœÉ‰˜Kœ\Ú
™]È™‹^K•ÙY[Š\ËœÜÚ][ÛŠKÊ\Ë™[™œÜÚ][Û‹JK™X\Ú[™Ê‹™X\Ú[™ÊJKKœ\Ú
™]È™‹^K•ÙY[Š\ËœÙXS]™[œÜÚ][ÛŠKÊ\Ë™[™œÙXS]™[œÜÚ][Û‹JK™X\Ú[™Ê‹™X\Ú[™ÊJKKœ\Ú
™]È™‹^K•ÙY[Š\Ë˜Ø[Y\˜KœÜÚ][ÛŠKÊ\Ë™[™˜Ø[Y\˜KœÜÚ][Û‹JK™X\Ú[™Ê‹™X\Ú[™ÊJK‹˜Y
‹‹˜JK\Ë˜[š[X][Û‘œ˜[YT™\]Y\Ý\J
OOžÛ‹\]J
K\Ë\]SX]š^ÛÜ›
L
K\Ë˜\U˜[œÙ›Ü›UÐØ[Y\˜JJK\Ë\™Ù]ÛÜ›ÜÚ][Û‹œÙ]œ›ÛSX]š^ÜÚ][ÛŠ\ËœÙXS]™[›X]š^ÛÜ›
K‹˜Ø[˜XÚÉ‰œ‹˜Ø[˜XÚÊ\ÊK‹˜ÜœÏ]œ™Y™\™[˜ÙPÜœË‹œÙ]œ›ÛU™XÝÜŒÊ\Ë\™Ù]ÛÜ›ÜÚ][ÛŠK˜\Ê™Š
K™^[˜ÜœË\Ë˜ÛÛÜ™
K››ÝYžPÚ[™ÙJJ_K\Ëœ™[[Ý™P[Y[˜Ý[ÛŠJ^Ý\Ëœ™[[Ý™P[J
OOžßK‹œ™[[Ý™P[

K\Ë˜[š[X][Û‘œ˜[YT™\]Y\Ý\‰‰œ™[[Ý™Qœ˜[YT™\]Y\Ý\Š‘Q“Ô‘WÔ‘S‘T‹\Ë˜[š[X][Û‘œ˜[YT™\]Y\Ý\ŠKœ™\ÛÛ™J›ÚYOOYJK\Ë˜[š[X][Û‘œ˜[YT™\]Y\Ý\[[KVØK›[™ÝLWK›ÛÛÛ\]J\Ëœ™[[Ý™P[
KK™›Ü‘XXÚ

OœÝ\

JJK˜Yœ˜[YT™\]Y\Ý\Š‘Q“Ô‘WÔ‘S‘T‹\Ë˜[š[X][Û‘œ˜[YT™\]Y\Ý\ŠK››ÝYžPÚ[™ÙJJK\ÝÜ

^Ý\Ëœ™[[Ý™TXÙU\™Ù]Û‘Ü›Ý[™

K\Ëœ™[[Ý™P[

_XYXÙU\™Ù]Û‘Ü›Ý[™
KŠ^Û]X\™Ý[Y[Ë›[™ÝŒÉ‰›ÚYOOX\™Ý[Y[ÖÌ×OØ\™Ý[Y[ÖÌ×NžÝŒ_NÚYŠ\Ëœ™[[Ý™TXÙU\™Ù]Û‘Ü›Ý[™

K	‰™J^ØÛÛœÝO]\Ë\™Ù]œÜÚ][Û‹žŽÝ\ËœXÙU\™Ù]Û‘Ü›Ý[™J
OOžØÛÛœÝÏSX]›X^
K™Ù][]˜][Û•˜[YP]
™Š
KŸ\Ë˜ÛÛÜ™K”‘PÒTÑWÔ‘PQÖŠ_
NÝ\Ë\™Ù]œÜÚ][Û‹žZJŠK[‹
JÜÊ›‹\Ë\™Ù]\]SX]š^ÛÜ›
L
K\Ë˜\U˜[œÙ›Ü›UÐØ[Y\˜JJ_K\ËœXÙU\™Ù]Û‘Ü›Ý[™

K˜Yœ˜[YT™\]Y\Ý\Š‘Q“Ô‘WÔ‘S‘T‹\ËœXÙU\™Ù]Û‘Ü›Ý[™
__\™[[Ý™TXÙU\™Ù]Û‘Ü›Ý[™

^Ý	‰\ËœXÙU\™Ù]Û‘Ü›Ý[™	‰Šœ™[[Ý™Qœ˜[YT™\]Y\Ý\Š‘Q“Ô‘WÔ‘S‘T‹\ËœXÙU\™Ù]Û‘Ü›Ý[™
K\ËœXÙU\™Ù]Û‘Ü›Ý[™[[
_YÙ][

^Ü™]\›ˆË˜ÚŽKœ˜YÑYÊ\Ë\™Ù]œ›Ý][Û‹ž
_YÙ]XY[™Ê
^Ü™]\›‹ZÙŠË˜ÚŽKœ˜YÑYÊ\Ë\™Ù]œ›Ý][Û‹žŠJÌN
_YÙ]˜[™ÙJ
^Ü™]\›ˆ\Ë˜Ø[Y\˜KœÜÚ][Û‹ž__Y[˜Ý[ÛˆYŠ
^Ü™]\›ˆ™–Ý]ZYOS™–Ý]ZY_™]ÈÙ‹™–Ý]ZY_XÛÛœÝ™^ÙY˜][ÝÜXÙSÛ‘Ü›Ý[™][™ˆLKX\Ú[™Î™‹^K‘X\Ú[™ËÝÜ
J^ÔYŠJKœÝÜ

_KÙ]˜[œÙ›Ü›PØ[Y\˜SÛÚÚ[™Ð]\™Ù]
KŠ^ØÛÛœÝTYŠJNÜ™]\›ˆ‹œÙ]œ›ÛPØ[Y\˜JKŠK‹™Ù]\˜[\Ê
_K˜[œÙ›Ü›PØ[Y\˜UÓÛÚÐ]\™Ù]
J^Û]X\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—OØ\™Ý[Y[ÖÌ—NžßNÜ‹š\Ñ^[	‰Š]\Ë™Ù]Ø[Y\˜U˜[œÙ›Ü›SÜ[ÛœÑœ›ÛQ^[
KŠJK‹œ›ÞO]›ÚYOO\‹œ›Þ_‹œ›ÞNØÛÛœÝTYŠJNÜ™]\›ˆ‹œÝÜ

K‹œÙ]œ›ÛPØ[Y\˜JJK‹œ›ÞI‰›‹œÙ]›ÞJJK‹˜\T\˜[\ÊŠK‹˜YXÙU\™Ù]Û‘Ü›Ý[™
K‹˜ÛÛÜ™
K‹˜\U˜[œÙ›Ü›UÐØ[Y\˜JJK››ÝYžPÚ[™ÙJJK›ÛZ\ÙKœ™\ÛÛ™J‹™Ù]\˜[\Ê
J_KÙ]Ø[Y\˜U˜[œÙ›Ü›SÜ[ÛœÑœ›ÛQ^[
KŠ^ØÛÛœÝ^ØÛÛÜ™›™]ÈK‘I
‹˜ÜœË
KXY[™ÎŒ[š\Ô[˜\•šY]ÏÎLŽKŽ_NÛ]ÎÚYŠš\ÑÛØ™UšY]ÏÊ\‹˜\Ê‘TÑÎÌˆŠK™‹œÙ]œ›ÛQ^[
ŠK™‹˜›ÞÑ™Ù]Ú^™JYŠKÏ^Þ•Y‹žKN•Y‹žJN›ÏJ\‹˜\Êœ™Y™\™[˜ÙPÜœÊJKœ[˜\‘[Y[œÚ[ÛœÊ
K‹˜Ù[\Š‹˜ÛÛÜ™
KKš\ÓÜÙÜ˜\XÐØ[Y\˜J[ËžÛËžO™K˜\ÜXÝÙKž›ÛÛOJKœšYÚYK›Y
KÛËž™Kž›ÛÛOJKÜYK˜›ÝÛJKÛËžKK\]T›Ú™XÝ[Û“X]š^

K‹œ˜[™ÙOLYLÎÙ[ÙHYŠKš\Ô\œÜXÝ]™PØ[Y\˜J^ØÛÛœÝ\Ë˜ÚŽK™YÕÔ˜Y
K™›ÝŠNÚYŠËžÛËžO™K˜\ÜXÝ
^ØÛÛœÝOKJ™ÛQ[[Y[˜ÛY[ZYÚÓX][ŠJœŠKOLŠ“X]˜][ŠJ™ÛQ[[Y[˜ÛY[ÚYÙJNÛ‹œ˜[™ÙO[ËžÊŠ“X][ŠJšJJ_Y[ÙH‹œ˜[™ÙO[ËžKÊŠ“X][ŠJœŠJ_\™]\›ˆŸK[š[X]PØ[Y\˜UÓÛÚÐ]\™Ù]
J^Û]X\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—OØ\™Ý[Y[ÖÌ—NžßNÜ‹œ›ÞO]›ÚYOO\‹œ›Þ_‹œ›ÞNØÛÛœÝTYŠJNÜ™]\›ˆ‹œÝÜ

K‹œ›ÞI‰›‹œÙ]›ÞJJK‹˜[š[X]PØ[Y\˜UÓÛÚÐ]\™Ù]
KŠKœ›ÛZ\ÙK[Š
OOžØÛÛœÝO]›ÚYOO\‹œÝÜXÙSÛ‘Ü›Ý[™][™Ý\Ë™Y˜][ÝÜXÙSÛ‘Ü›Ý[™][™œ‹œÝÜXÙSÛ‘Ü›Ý[™][™Ï[‹™Ù]\˜[\Ê
NÜ™]\›ˆI‰›‹œÝÜ

KË™š[š\ÚYYKßJJ_KÙ\]Y[˜ÙP[š[X][ÛœÕÓÛÚÐ]\™Ù]
J^Ü™]\›Š\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—OØ\™Ý[Y[ÖÌ—N–ÞßWJK›X\

OŠ
OO\Ë˜[š[X]PØ[Y\˜UÓÛÚÐ]\™Ù]
KŠJJKœ™YXÙJ

JOO[Š
Oˆ]›[™ÝÝ›[™ÝLWK™š[š\ÚYÙJ
K[Š\œ˜^Kœ›ÝÝ\K˜ÛÛ˜Ø]˜š[™

JN”›ÛZ\ÙKœ™\ÛÛ™JÞÙš[š\ÚYˆL_WJJJJK›ÛZ\ÙKœ™\ÛÛ™J×JJ_KÙ]Y™”\˜[\ÊJ^ÚYŠ]YJ\™]\›ŽÛ]ŽÜ™]\›ˆX]˜XœÊœ˜[™ÙKYKœ˜[™ÙJKÝœ˜[™ÙO‹ŒI‰Š\ŸßK‹œ˜[™ÙO^Ü™]š[Ý\Îœ˜[™ÙK™]Î™Kœ˜[™Ù_JKX]˜XœÊ[YK[
O‹ŒI‰Š\ŸßK‹[^Ü™]š[Ý\Î[™]Î™K[JKX]˜XœÊšXY[™ËYKšXY[™ÊO‹ŒI‰Š\ŸßK‹šXY[™Ï^Ü™]š[Ý\ÎšXY[™Ë™]Î™KšXY[™ßJK
X]˜XœÊ˜ÛÛÜ™žYK˜ÛÛÜ™ž
OŒYKMŸX]˜XœÊ˜ÛÛÜ™žKYK˜ÛÛÜ™žJOŒYKMŠI‰Š\ŸßK‹˜ÛÛÜ™^Ü™]š[Ý\Î˜ÛÛÜ™™]Î™K˜ÛÛÜ™JKŸ_K™^ÓÔ’UžÙ[˜X›NˆL[Ý\ÙP]ÛŽœËšÐ‹“Q•ÝX›NˆLKÙ^X›Ø\™ŒMËš[™Ù\ŽŒ‹Ù]™[ˆœ›Ý]HŸKSÕ‘WÑÓÐ‘NžÙ[˜X›NˆL[Ý\ÙP]ÛŽœËšÐ‹“Q•ÝX›NˆLKš[™Ù\ŽŒKÙ]™[ˆ™˜YÈŸKÓNžÙ[˜X›NˆL[Ý\ÙP]ÛŽœËšÐ‹“RQKÝX›NˆLKš[™Ù\ŽŒ‹Ù]™[ˆ™ÛHŸKSŽžÙ[˜X›NˆL[Ý\ÙP]ÛŽœËšÐ‹”’QÒÝX›NˆLKš[™Ù\ŽŒËÙ]™[ˆœ[ˆŸKS“ÔSRPÎžÙ[˜X›NˆL[Ý\ÙP]ÛŽœËšÐ‹“Q•ÝX›NˆLKÙ^X›Ø\™ŒM‹Ù]™[ˆœ[›Ü˜[ZXÈŸKU‘SÒSŽžÙ[˜X›NˆL[Ý\ÙP]ÛŽœËšÐ‹“Q•ÝX›NˆLÙ]™[ˆ˜]™[Ú[ˆ‹ÝšYÙÙ\ŽˆLÙ\™XÝ[ÛŽˆš[ˆŸKU‘SÓÕUžÙ[˜X›NˆLKÝX›NˆLKÙ]™[ˆ˜]™[ÛÝ]‹ÝšYÙÙ\ŽˆLÙ\™XÝ[ÛŽˆ›Ý]ŸK“ÓÓNžÙ[˜X›NˆLÙ]™[ˆž›ÛÛH‹ÝšYÙÙ\ŽˆLKS—ÕTžÙ[˜X›NˆLÙ^X›Ø\™ŒÎÝX›NˆLKÙ]™[ˆœ[ˆ‹ÝšYÙÙ\ŽˆLÙ\™XÝ[ÛŽˆ\ŸKS—Ð“ÕÓNžÙ[˜X›NˆLÙ^X›Ø\™ÝX›NˆLKÙ]™[ˆœ[ˆ‹ÝšYÙÙ\ŽˆLÙ\™XÝ[ÛŽˆ˜›ÝÛHŸKS—ÓQ•žÙ[˜X›NˆLÙ^X›Ø\™ŒÍËÝX›NˆLKÙ]™[ˆœ[ˆ‹ÝšYÙÙ\ŽˆLÙ\™XÝ[ÛŽˆ›YŸKS—Ô’QÒžÙ[˜X›NˆLÙ^X›Ø\™ŒÎKÝX›NˆLKÙ]™[ˆœ[ˆ‹ÝšYÙÙ\ŽˆLÙ\™XÝ[ÛŽˆœšYÚŸ_K[™]ÈË’NVNØÛ\ÜÈYˆ^[™ÈË”Y]žØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNÜÝ\\Š
K\Ë—ÝšY]Ï]\Ë—ÙÛQ[[Y[]™ÛQ[[Y[Û]HLÓØš™XÝ™Yš[™T›Ü\J\Ë™[˜X›Y‹ÙÙ]Š
OOœ‹Ù]OžÝ
\Ë›Û’Ù^U\

K\Ë›Û”Ú[\•\

JK]_JNÛ]HLÓØš™XÝ™Yš[™T›Ü\J\Ë™[˜X›RÙ^\È‹ÙÙ]Š
OO›‹Ù]OžÝ\Ë›Û’Ù^U\

K]_JK\Ë““Ó‘O^ßNÛ]O]\Ë““Ó‘NÓØš™XÝ™Yš[™T›Ü\J\Ë˜Ý\œ™[Ý]H‹ÙÙ]Š
OOšKÙ]OžÚYŠHOO]
^ØÛÛœÝOZNÚO]\Ë™\Ü]Ú]™[
Ý\NˆœÝ]KXÚ[™ÙY‹šY]ÐÛÛÜ™Î’‹™]š[Ý\Î™_J___JK\Ë—ØÛXÚÕ[YTÝ[\L\Ë—Û\Ý[Ý\ÙT™\ÜÙY^ÝšY]ÐÛÛÜ™Î›™]ÈË’NV_K\Ë—ØÝ\œ™[[Ý\ÙT™\ÜÙY]›ÚY\Ë—ØÝ\œ™[Ù^T™\ÜÙY]›ÚY\Ë—ÛÛ”Ú[\‘ÝÛ]\Ë›Û”Ú[\‘ÝÛ‹˜š[™
\ÊK\Ë—ÛÛ”Ú[\“[Ý™O]\Ë›Û”Ú[\“[Ý™K˜š[™
\ÊK\Ë—ÛÛ”Ú[\•\]\Ë›Û”Ú[\•\˜š[™
\ÊK\Ë—ÛÛ“[Ý\ÙUÚY[]\Ë›Û“[Ý\ÙUÚY[˜š[™
\ÊK\Ë—ÛÛ’Ù^QÝÛ]\Ë›Û’Ù^QÝÛ‹˜š[™
\ÊK\Ë—ÛÛ’Ù^U\]\Ë›Û’Ù^U\˜š[™
\ÊK\Ë—ÛÛ›\]\Ë›Û›\‹˜š[™
\ÊK\Ë—ÛÛÛÛ^Y[O]\Ë›ÛÛÛ^Y[K˜š[™
\ÊK\Ë—ÙÛQ[[Y[˜Y]™[\Ý[™\ŠœÚ[\™ÝÛˆ‹\Ë—ÛÛ”Ú[\‘ÝÛ‹LJK\Ë—ÙÛQ[[Y[˜Y]™[\Ý[™\ŠÚY[‹\Ë—ÛÛ“[Ý\ÙUÚY[LJK\Ë—ÙÛQ[[Y[˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹\Ë—ÛÛ’Ù^QÝÛ‹LJK\Ë—ÙÛQ[[Y[˜Y]™[\Ý[™\ŠšÙ^]\‹\Ë—ÛÛ’Ù^U\LJK\Ë—ÙÛQ[[Y[˜Y]™[\Ý[™\Š˜›\ˆ‹\Ë—ÛÛ›\ŠK\Ë—ÙÛQ[[Y[˜Y]™[\Ý[™\Š˜ÛÛ^Y[H‹\Ë—ÛÛÛÛ^Y[KLJK\ËœÙ]œ›ÛSÜ[ÛœÊJ_Z[œ]ÔÝ]JJ^Û]X\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—I‰˜\™Ý[Y[ÖÌ—NÙ›ÜŠÛÛœÝˆÙˆØš™XÝšÙ^\Ê™ŠJ^ØÛÛœÝO]\ÖÛ—NÚYŠK™[˜X›I‰šK›[Ý\ÙP]ÛOO]	‰šKšÙ^X›Ø\™OOYI‰šK™ÝX›OOO\Š^ÚYŠZK—ÝšYÙÙ\Š\™]\›ˆNÝ\Ë™\Ü]Ú]™[
Ý\NšK—Ù]™[šY]ÐÛÛÜ™Î›ÚYOO]	‰’‹\™XÝ[ÛŽšK—Ù\™XÝ[ÛŸJ__\™]\›ˆ\Ë““Ó‘_]ÝXÚÔÝ]J
^Ù›ÜŠÛÛœÝHÙˆØš™XÝšÙ^\Ê™ŠJ^ØÛÛœÝ]\ÖÙWNÚYŠ‹™[˜X›I‰OO\‹™š[™Ù\Š\™]\›ˆŸ\™]\›ˆ\Ë““Ó‘_\Ù]œ›ÛSÜ[ÛœÊ
^Ù›ÜŠÛÛœÝH[ˆ™ŠZYŠßKš\ÓÝÛ”›Ü\K˜Ø[
™‹JJ^Û]^ßNÜ]ÙW_\ÖÙW_Øš™XÝ˜\ÜÚYÛŠ‹™–ÙWJKÙWI‰›ÚYOO]ÙWK™[˜X›I‰Š‹™[˜X›O]\ÖÙWK™[˜X›JK‹™ÝX›OHH\‹™ÝX›K‹—Ù]™[Z™–ÙWK—Ù]™[‹—ÝšYÙÙ\Z™–ÙWK—ÝšYÙÙ\‹‹—Ù\™XÝ[ÛZ™–ÙWK—Ù\™XÝ[Û‹\ÖÙWO\Ÿ_[Û”Ú[\‘ÝÛŠ
^Ý\Ë™[˜X›Y	‰Š‹˜ÛÜJ\Ë—ÝšY]Ë™]™[ÕšY]ÐÛÛÜ™Ê
JK›[Ý\ÙHOO]œÚ[\•\I‰Š\Ë—ØÝ\œ™[[Ý\ÙT™\ÜÙY]˜]Û‹›ÚYOO]\Ë—ØÝ\œ™[Ù^T™\ÜÙY	‰Š˜Ý›Ù^OÝ\Ë—ØÝ\œ™[Ù^T™\ÜÙYLMÎœÚYÙ^OÝ\Ë—ØÝ\œ™[Ù^T™\ÜÙYLMŽ›Y]RÙ^I‰Š\Ë—ØÝ\œ™[Ù^T™\ÜÙYNLJJK\Ë˜Ý\œ™[Ý]O]\Ëš[œ]ÔÝ]J\Ë—ØÝ\œ™[[Ý\ÙT™\ÜÙY\Ë—ØÝ\œ™[Ù^T™\ÜÙY[YTÝ[\]\Ë—ØÛXÚÕ[YTÝ[\L	‰\Ë—Û\Ý[Ý\ÙT™\ÜÙY˜]ÛOO]\Ë—ØÝ\œ™[[Ý\ÙT™\ÜÙY	‰\Ë—Û\Ý[Ý\ÙT™\ÜÙYšY]ÐÛÛÜ™Ë™\Ý[˜ÙUÊŠOJK\Ë—ØÛXÚÕ[YTÝ[\][YTÝ[\\Ë—Û\Ý[Ý\ÙT™\ÜÙY˜]Û]\Ë—ØÝ\œ™[[Ý\ÙT™\ÜÙY\Ë—Û\Ý[Ý\ÙT™\ÜÙYšY]ÐÛÛÜ™Ë˜ÛÜJŠJK\Ë—ÙÛQ[[Y[˜Y]™[\Ý[™\ŠœÚ[\›[Ý™H‹\Ë—ÛÛ”Ú[\“[Ý™KLJK\Ë—ÙÛQ[[Y[˜Y]™[\Ý[™\ŠœÚ[\\‹\Ë—ÛÛ”Ú[\•\LJK\Ë—ÙÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\Ù[X]™H‹\Ë—ÛÛ”Ú[\•\LJJ_[Û”Ú[\“[Ý™J
^Ýœ™]™[Y˜][

K\Ë™[˜X›Y	‰Š‹˜ÛÜJ\Ë—ÝšY]Ë™]™[ÕšY]ÐÛÛÜ™Ê
JK›[Ý\ÙHOO]œÚ[\•\JI‰\Ë™\Ü]Ú]™[
Ý\N\Ë˜Ý\œ™[Ý]K—Ù]™[šY]ÐÛÛÜ™Î’ŸJ_[Û”Ú[\•\

^Ý\Ë™[˜X›Y	‰Š\Ë—ØÝ\œ™[[Ý\ÙT™\ÜÙY]›ÚY\Ë—ÙÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\›[Ý™H‹\Ë—ÛÛ”Ú[\“[Ý™KLJK\Ë—ÙÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\\‹\Ë—ÛÛ”Ú[\•\LJK\Ë—ÙÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š›[Ý\Ù[X]™H‹\Ë—ÛÛ”Ú[\•\LJK\Ë˜Ý\œ™[Ý]O]\Ë““Ó‘J_[Û“[Ý\ÙUÚY[

^Ýœ™]™[Y˜][

K\Ë™[˜X›Y	‰\Ë–“ÓÓK™[˜X›I‰Š‹˜ÛÜJ\Ë—ÝšY]Ë™]™[ÕšY]ÐÛÛÜ™Ê
JK\Ë˜Ý\œ™[Ý]O]\Ë–“ÓÓK\Ë™\Ü]Ú]™[
Ý\N\Ë–“ÓÓK—Ù]™[[N™[VKšY]ÐÛÛÜ™Î’ŸJJ_[Û’Ù^QÝÛŠ
^Ý\Ë™[˜X›Y	‰\Ë™[˜X›RÙ^\É‰Š\Ë—ØÝ\œ™[Ù^T™\ÜÙY]šÙ^PÛÙK\Ëš[œ]ÔÝ]J\Ë—ØÝ\œ™[[Ý\ÙT™\ÜÙY\Ë—ØÝ\œ™[Ù^T™\ÜÙY
J_[Û’Ù^U\

^Ý\Ë™[˜X›Y	‰\Ë™[˜X›RÙ^\É‰Š\Ë—ØÝ\œ™[Ù^T™\ÜÙY]›ÚY›ÚYOO]\Ë—ØÝ\œ™[[Ý\ÙT™\ÜÙY	‰Š\Ë˜Ý\œ™[Ý]O]\Ë““Ó‘JJ_[Û›\Š
^Ý\Ë›Û’Ù^U\

K\Ë›Û”Ú[\•\

_[ÛÛÛ^Y[J
^Ýœ™]™[Y˜][

_Y\ÜÜÙJ
^Ý\Ë—ØÛXÚÕ[YTÝ[\L\Ë—Û\Ý[Ý\ÙT™\ÜÙY]›ÚY\Ë—ØÝ\œ™[Ù^T™\ÜÙY]›ÚY\Ë—ÙÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\™ÝÛˆ‹\Ë—ÛÛ”Ú[\‘ÝÛ‹LJK\Ë—ÙÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\›[Ý™H‹\Ë—ÛÛ”Ú[\“[Ý™KLJK\Ë—ÙÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠœÚ[\\‹\Ë—ÛÛ”Ú[\•\LJK\Ë—ÙÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠÚY[‹\Ë—ÛÛ“[Ý\ÙUÚY[LJK\Ë—ÙÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠšÙ^YÝÛˆ‹\Ë—ÛÛ’Ù^QÝÛ‹LJK\Ë—ÙÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠšÙ^]\‹\Ë—ÛÛ’Ù^U\LJK\Ë—ÙÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š˜›\ˆ‹\Ë—ÛÛ›\ŠK\Ë—ÙÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š˜ÛÛ^Y[H‹\Ë—ÛÛÛÛ^Y[KLJ__XÛÛœÝÙ\Y‹YLYKM‹^Ý\›™]ÈË’NVJJK›ÝÛN›™]ÈË’NVJLJKY›™]ÈË’NVJK
KšYÚ›™]ÈË’NVJLK
_K	[™]ÈË’NVK™[™]ÈË’NVKÙ[™]ÈË’NVK™[™]ÈË–RŠKŒK
KO[™]ÈË–RŠK
NÛ][OLNØÛÛœÝ›O[™]ÈË’NVK›O[™]ÈË’NVK[O[™]ÈË’NVKÛO[™]ÈË”LÛO[™]ÈË’NVK[O[™]ÈË’NVKO[™]ÈË’NVNÛ]ÛNØÛÛœÝO[™]ÈË”‹[O[™]ÈËŽKO[™]ÈK‘I
‘TÑÎMÎŠNÝ[K›X]š^ÛÜ›[™\œÙO[™]ÈËšÛØÛÛœÝO[™]ÈK‘I
‘TÑÎMÎ‹
K›O[™]ÈK‘I
‘TÑÎÌˆ‹
NÙ[˜Ý[Ûˆ[JJ^ÜKœÙ]œ›ÛU™XÝÜŒÊ
K˜\Ê‘TÑÎÌˆ‹›JKKœÜÚ][Û‹˜ÛÜJ
KK›ÛÚÐ]
›K™Ù[Ù\ÚXÓ›Ü›X[˜Y

JKKœ›Ý]V
J“X]”JKK\]SX]š^ÛÜ›
L
_[]ÛOL[OHLØÛÛœÝ[O[™]ÈË”ŠJK›O[™]ÈË”LO[™]ÈË”LÛO[™]ÈË”‹ÛO[™]ÈËš^]›O[™]ÈË”L[O[™]ÈË”LÛO^ßK[O^ÔS—ÐÒS‘ÑQˆœ[‹XÚ[™ÙY‹Ô’QS•USÓ—ÐÒS‘ÑQˆ›ÜšY[][Û‹XÚ[™ÙY‹S‘ÑWÐÒS‘ÑQˆœ˜[™ÙKXÚ[™ÙY‹ÐSQTWÕT‘ÑUÐÒS‘ÑQˆ˜Ø[Y\˜K]\™Ù]XÚ[™ÙYŸKÛO[™]ÈË”‹O[™]ÈË”‹[O[™]ÈË”L
K
NÛ]›OLKÌØÛÛœÝO[™]ÈË”L›O[™]ÈË”LO[™]ÈË›ËO[™]ÈË”LÛO[™]ÈË”L›O[™]ÈËš^]Û]›NØÛ\ÜÈ[H^[™ÈË”Y]žØÛÛœÝXÝÜŠJ^Û]X\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—OØ\™Ý[Y[ÖÌ—NžßNÜÝ\\Š
K\Ëœ^Y\[™]È‹\ËšY]Ï]\Ë˜Ø[Y\˜O]˜Ø[Y\˜LÑ\ËœÝ]\Ï[™]ÈÙŠ\ËšY]Ë‹œÝ]PÛÛ›Û
KØš™XÝ™Yš[™T›Ü\J\Ë™[˜X›Y‹ÙÙ]Š
OO\ËœÝ]\Ë™[˜X›YÙ]OžØÛÛœÛÛKØ\›Š‘ÛØ™PÛÛ›ÛË™[˜X›Y›Ü\H\È\™XØ]Yˆ\ÙHÝ]PÛÛ›Û™[˜X›Y[œÝXYHÚXÚ[ÝHØ[ˆXØÙ\ÜÈÚ]ÛØ™PÛÛ›ÛËœÝ]\Ë™[˜X›YˆŠK\ËœÝ]\Ë™[˜X›Y]_JK‹ž›ÛÛTÜYY	‰ŠÛÛœÛÛKØ\›ŠÛÛ›ÛÈ›ÛÛTÜYY\˜[Y]\ˆ\È\™XØ]Yˆ\ÙH›ÛÛQ˜XÝÜˆ[œÝXYˆŠK‹ž›ÛÛQ˜XÝÜ\‹ž›ÛÛQ˜XÝÜŸ‹ž›ÛÛTÜYY
K\Ëž›ÛÛQ˜XÝÜ\‹ž›ÛÛQ˜XÝÜŸKŒK\Ë›Z[‘\Ý[˜ÙO\‹›Z[‘\Ý[˜Ù_L\Ë›X^\Ý[˜ÙO\‹›X^\Ý[˜Ù_
šK”[ž\Ë›Z[–›ÛÛO\‹›Z[–›ÛÛ_\Ë›X^›ÛÛO\‹›X^›ÛÛ_KÌ\Ëœ›Ý]TÜYY\‹œ›Ý]TÜYYŒK\ËšÙ^T[”ÜYY\‹šÙ^T[”ÜYYË\Ë›Z[”Û\[™ÛO\Ë˜ÚŽK™YÕÔ˜Y
‹›Z[”Û\[™ÛOÏËJK\Ë›X^Û\[™ÛO\Ë˜ÚŽK™YÕÔ˜Y
‹›Z[”Û\[™ÛOÏÎŠK\Ë›Z[^š[]][™ÛO\‹›Z[^š[]][™ÛOÜË˜ÚŽK™YÕÔ˜Y
‹›Z[^š[]][™ÛJN‹LKÌ\Ë›X^^š[]][™ÛO\‹›X^^š[]][™ÛOÜË˜ÚŽK™YÕÔ˜Y
‹›X^^š[]][™ÛJNŒKÌ\Ëš[™PÛÛ\Ú[Û]›ÚYOO\‹š[™PÛÛ\Ú[ÛŸ‹š[™PÛÛ\Ú[Û‹\Ë›Z[‘\Ý[˜ÙPÛÛ\Ú[ÛMŒØš™XÝ™Yš[™T›Ü\J\Ë™[˜X›RÙ^\È‹ÙÙ]Š
OO\ËœÝ]\Ë™[˜X›RÙ^\ËÙ]OžØÛÛœÛÛKØ\›Š‘ÛØ™PÛÛ›ÛË™[˜X›RÙ^\È›Ü\H\È\™XØ]Yˆ\ÙHÝ]PÛÛ›Û™[˜X›RÙ^\È[œÝXYHÚXÚ[ÝHØ[ˆXØÙ\ÜÈÚ]ÛØ™PÛÛ›ÛËœÝ]\Ë™[˜X›RÙ^\ËˆŠK\ËœÝ]\Ë™[˜X›RÙ^\Ï]_JK\Ë™[˜X›Q[\[™ÏHLHOO\‹™[˜X›Q[\[™Ë\Ë™[\[™Ó[Ý™Q˜XÝÜ[[O\‹™[\[™Ó[Ý™Q˜XÝÜÜ‹™[\[™Ó[Ý™Q˜XÝÜŽ‹ŒK\ËœÝ\]™[^Ý\NˆœÝ\ŸK\Ë™[™]™[^Ý\Nˆ™[™ŸK\Ë\]R[\Y[˜Ý[ÛŠ
^ßK\Ë—ÛÛ‘[™[™Ó[Ý™O[[\Ë—ÛÛ•˜]™[]\Ë˜]™[˜š[™
\ÊK\Ë—ÛÛ•ÝXÚÝ\]\Ë›Û•ÝXÚÝ\˜š[™
\ÊK\Ë—ÛÛ•ÝXÚ[™]\Ë›Û•ÝXÚ[™˜š[™
\ÊK\Ë—ÛÛ•ÝXÚ[Ý™O]\Ë›Û•ÝXÚ[Ý™K˜š[™
\ÊK\Ë—ÛÛ”Ý]PÚ[™ÙO]\Ë›Û”Ý]PÚ[™ÙK˜š[™
\ÊK\Ë—ÛÛ”›Ý][Û]\Ëš[™T›Ý][Û‹˜š[™
\ÊK\Ë—ÛÛ‘˜YÏ]\Ëš[™Q˜YË˜š[™
\ÊK\Ë—ÛÛ‘ÛO]\Ëš[™QÛK˜š[™
\ÊK\Ë—ÛÛ”[]\Ëš[™T[‹˜š[™
\ÊK\Ë—ÛÛ”[›Ü˜[ZXÏ]\Ëš[™T[›Ü˜[ZXË˜š[™
\ÊK\Ë—ÛÛ–›ÛÛO]\Ëš[™V›ÛÛK˜š[™
\ÊK\ËœÝ]\Ë˜Y]™[\Ý[™\ŠœÝ]KXÚ[™ÙY‹\Ë—ÛÛ”Ý]PÚ[™ÙKLJK\ËœÝ]\Ë˜Y]™[\Ý[™\Š\ËœÝ]\Ë“Ô’U—Ù]™[\Ë—ÛÛ”›Ý][Û‹LJK\ËœÝ]\Ë˜Y]™[\Ý[™\Š\ËœÝ]\Ë“SÕ‘WÑÓÐ‘K—Ù]™[\Ë—ÛÛ‘˜YËLJK\ËœÝ]\Ë˜Y]™[\Ý[™\Š\ËœÝ]\Ë‘ÓK—Ù]™[\Ë—ÛÛ‘ÛKLJK\ËœÝ]\Ë˜Y]™[\Ý[™\Š\ËœÝ]\Ë”S‹—Ù]™[\Ë—ÛÛ”[‹LJK\ËœÝ]\Ë˜Y]™[\Ý[™\Š\ËœÝ]\Ë”S“ÔSRPË—Ù]™[\Ë—ÛÛ”[›Ü˜[ZXËLJK\ËœÝ]\Ë˜Y]™[\Ý[™\Šž›ÛÛH‹\Ë—ÛÛ–›ÛÛKLJK\ËšY]Ë™ÛQ[[Y[˜Y]™[\Ý[™\ŠÝXÚÝ\‹\Ë—ÛÛ•ÝXÚÝ\LJK\ËšY]Ë™ÛQ[[Y[˜Y]™[\Ý[™\ŠÝXÚ[™‹\Ë—ÛÛ•ÝXÚ[™LJK\ËšY]Ë™ÛQ[[Y[˜Y]™[\Ý[™\ŠÝXÚ[Ý™H‹\Ë—ÛÛ•ÝXÚ[Ý™KLJK\ËœÝ]\Ë˜Y]™[\Ý[™\Š\ËœÝ]\Ë•U‘SÒS‹—Ù]™[\Ë—ÛÛ•˜]™[LJK\ËœÝ]\Ë˜Y]™[\Ý[™\Š\ËœÝ]\Ë•U‘SÓÕU—Ù]™[\Ë—ÛÛ•˜]™[LJKœØÙ[™K˜Y
[JKKš\Ñ^[ÙK˜Ù[\Š
K˜\Ê‘TÑÎMÎ‹JNŠK˜ÛÛÜ™˜\Ê‘TÑÎMÎ‹JKK[YK[KKKšXY[™ÏYKšXY[™ß
K[JK[JK\Ë›ÛÚÐ]ÛÛÜ™[˜]JKLJKK˜ÜœÏ]\ËšY]Ëœ™Y™\™[˜ÙPÜœßYÙ]›ÛÛR[”ØØ[J
^Ü™]\›ˆ\Ëž›ÛÛQ˜XÝÜŸYÙ]›ÛÛSÝ]ØØ[J
^Ü™]\›ˆKÝ\Ëž›ÛÛQ˜XÝÜŸYÙ]\Ô]\ÙY

^Ü™]\›ˆ\ËœÝ]\Ë˜Ý\œ™[Ý]OOO]\ËœÝ]\Ë““Ó‘I‰ˆ]\Ëœ^Y\‹š\Ô^Z[™Ê
_[Û‘[™[™Ó[Ý™J
^Ý\Ë—ÛÛ‘[™[™Ó[Ý™I‰Š\Ëœ^Y\‹œ™[[Ý™Q]™[\Ý[™\Š˜[š[X][Û‹\ÝÜY‹\Ë—ÛÛ‘[™[™Ó[Ý™JK\Ë—ÛÛ‘[™[™Ó[Ý™O[[
K\Ëš[™[™Ñ]™[

_\›Ý]SY

^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNŒÝK]KO]\›Ý]U\

^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNŒÝKœKO]\[“Y

^ØÛÛœÝO]\Ë˜Ø[Y\˜K›X]š^™[[Y[ÎÜÛK™œ›ÛP\œ˜^JJKÛK›][\TØØ[\Š]
K›K˜Y
ÛJ_\[•\

^ØÛÛœÝO]\Ë˜Ø[Y\˜K›X]š^™[[Y[ÎÜÛK™œ›ÛP\œ˜^JK
KÛK›][\TØØ[\Š
K›K˜Y
ÛJ_[[Ý\ÙUÔ[ŠJ^ØÛÛœÝ]\ËšY]Ë›XZ[“ÛÜ™Ùž[™Ú[™NÚYŠ\Ë˜Ø[Y\˜Kš\Ô\œÜXÝ]™PØ[Y\˜J^Û]]\Ë˜Ø[Y\˜KœÜÚ][Û‹™\Ý[˜ÙUÊ\Ë™Ù]Ø[Y\˜U\™Ù]ÜÚ][ÛŠ
JNÛŠLŠ“X][ŠË˜ÚŽK™YÕÔ˜Y
J\Ë˜Ø[Y\˜K™›ÝŠJK\Ëœ[“Y

›‹Ü‹ÚY
\Ë˜Ø[Y\˜K˜\ÜXÝ
K\Ëœ[•\
J›‹Ü‹šZYÚ
_Y[ÙH\Ë˜Ø[Y\˜Kš\ÓÜÙÜ˜\XÐØ[Y\˜I‰Š\Ëœ[“Y

Š\Ë˜Ø[Y\˜KœšYÚ]\Ë˜Ø[Y\˜K›Y
KÜ‹ÚY
K\Ëœ[•\
JŠ\Ë˜Ø[Y\˜KÜ]\Ë˜Ø[Y\˜K˜›ÝÛJKÜ‹šZYÚ
J_YÛJ
^ÌOO]	‰ŠÛO]ŒÝ\Ëž›ÛÛR[”ØØ[N\Ëž›ÛÛSÝ]ØØ[K\Ë˜Ø[Y\˜Kš\Ô\œÜXÝ]™PØ[Y\˜OÙ[KÏXÛN\Ë˜Ø[Y\˜Kš\ÓÜÙÜ˜\XÐØ[Y\˜I‰Š\Ë˜Ø[Y\˜Kž›ÛÛO\Ë˜ÚŽK˜Û[\
\Ë˜Ø[Y\˜Kž›ÛÛJ˜ÛK\Ë›Z[–›ÛÛK\Ë›X^›ÛÛJK\Ë˜Ø[Y\˜K\]T›Ú™XÝ[Û“X]š^

K\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜JJJ_YÙ]Z[‘\Ý[˜ÙPØ[Y\˜P›Ý[™[™ÔÜ\™SØ˜œÕ\

^ÚYŠ›]™[ŒL	‰ŒOO]˜Ú[™[‹›[™Ý	‰™Ù[ÛY]žJ^ØÛÛœÝO]›Ø˜ŽÓ›K˜Ù[\‹˜ÛÜJ\Ë˜Ø[Y\˜KœÜÚ][ÛŠK›Kœ˜Y]\Ï]\Ë›Z[‘\Ý[˜ÙPÛÛ\Ú[Û‹Kš\ÔÜ\™PX›Ý™VP›Þ
›JI‰Š›OSX]›Z[Š›K˜Ù[\‹ž‹YK˜›ÞÑ›X^ž‹›JJ__]\]J
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌN\ËœÝ]\Ë˜Ý\œ™[Ý]NÚYŠ›OLKÌ\Ëš[™PÛÛ\Ú[Û‰‰\ËšY]Ë[S^Y\ŠY›ÜŠÛÛœÝÙˆ\ËšY]Ë[S^Y\‹›]™[›Ù\Ê]˜]™\œÙJ\Ë™Ù]Z[‘\Ý[˜ÙPØ[Y\˜P›Ý[™[™ÔÜ\™SØ˜œÕ\˜š[™
\ÊJNÜÝÚ]Ú

^ØØ\ÙH\ËœÝ]\Ë“SÕ‘WÑÓÐ‘NšYŠ›O
][K˜[œÛ]VJT›JK\Ë˜Ø[Y\˜KœÜÚ][Û‹œÙ][™Ý
\Ë˜Ø[Y\˜KœÜÚ][Û‹›[™Ý

KT›JNÙ[ÙHYŠ›O\Ë›Z[‘\Ý[˜ÙPÛÛ\Ú[ÛŠ^ØÛÛœÝ]\Ë›Z[‘\Ý[˜ÙPÛÛ\Ú[ÛŠŠKT›KÝ\Ë›Z[‘\Ý[˜ÙPÛÛ\Ú[ÛŠNÝ[K˜[œÛ]VJ
K\Ë˜Ø[Y\˜KœÜÚ][Û‹œÙ][™Ý
\Ë˜Ø[Y\˜KœÜÚ][Û‹›[™Ý

JÝ
_TK˜ÛÜJ›JK˜\T]X]\›š[ÛŠJK[KœÜÚ][Û‹˜\T]X]\›š[ÛŠJK\Ë˜Ø[Y\˜KœÜÚ][Û‹˜\T]X]\›š[ÛŠJNØœ™XZÎØØ\ÙH\ËœÝ]\Ë”SŽ\Ë˜Ø[Y\˜KœÜÚ][Û‹˜Y
›JK[KœÜÚ][Û‹˜Y
›JNØœ™XZÎØØ\ÙH\ËœÝ]\Ë”S“ÔSRPÎžÝ\Ë˜Ø[Y\˜KÛÜ›ÓØØ[
[KœÜÚ][ÛŠNØÛÛœÝ]\Ë˜Ø[Y\˜KœÜÚ][Û‹˜ÛÛ™J
K››Ü›X[^™J
K˜\T]X]\›š[ÛŠ\Ë˜Ø[Y\˜Kœ]X]\›š[Û‹˜ÛÛ™J
Kš[™\

JNÐÛKœÙ]œ›ÛP^\Ð[™ÛJK]JK›][\JKœÙ]œ›ÛP^\Ð[™ÛJ[KKœJJK[KœÜÚ][Û‹˜\T]X]\›š[ÛŠÛJK\Ë˜Ø[Y\˜K›ØØ[ÕÛÜ›
[KœÜÚ][ÛŠNØœ™XZßYY˜][žÝ\Ë˜Ø[Y\˜KœÜÚ][Û‹˜\SX]š^
[K›X]š^ÛÜ›[™\œÙJK
K]_KœJI‰–™‹œÙ]œ›ÛU™XÝÜŒÊ\Ë˜Ø[Y\˜KœÜÚ][ÛŠNØÛÛœÝV™‹œ˜Y]\Ê“X]œÚ[Š\Ë›Z[”Û\[™ÛJKON
LŠKKŒNÚYŠ\Ëš[™PÛÛ\Ú[ÛŠZYŠ›OI‰”›Oœ‰‰KœOŒ
^ØÛÛœÝYK\‹LKJJ›K\ŠJKÝÝKœJ[Š›ŸY[ÙHYŠ›O‰‰”›O‹\‰‰KœO›Š^Û]KSX]˜\Ú[ŠŒJŠ‹T›JKÖ™‹œ˜Y]\ÊNÝ\Ë˜ÚŽK˜Û[\
‹
NØÛÛœÝOLKJ‹T›JKÊŠœŠNÝKœO\Ë˜ÚŽK›\œ
KœKJK›KOSX]œÚ[ŠKœJJ–™‹œ˜Y]\ßV™‹]JÏ]K]K™‹œJÏ]KœK™‹]OSX]›X^
\Ë›Z[^š[]][™ÛKX]›Z[Š\Ë›X^^š[]][™ÛK™‹]JJK™‹œOSX]›X^
\Ë›Z[”Û\[™ÛKX]›Z[Š\Ë›X^Û\[™ÛK™‹œJJK™‹œ˜Y]\Ï]\Ë˜Ø[Y\˜KœÜÚ][Û‹›[™Ý

J™[K™‹›XZÙTØY™J
K™‹œ˜Y]\ÏSX]›X^
\Ë›Z[‘\Ý[˜ÙKX]›Z[Š\Ë›X^\Ý[˜ÙK™‹œ˜Y]\ÊJK\Ë˜Ø[Y\˜KœÜÚ][Û‹œÙ]œ›ÛTÜ\šXØ[
™ŠK›O	‰Š\Ë˜Ø[Y\˜KœÜÚ][Û‹žKOT›K™‹œÙ]œ›ÛU™XÝÜŒÊ\Ë˜Ø[Y\˜KœÜÚ][ÛŠKKœOL
K[K›ØØ[ÕÛÜ›
\Ë˜Ø[Y\˜KœÜÚ][ÛŠ__]\Ë˜Ø[Y\˜K\˜ÛÜJ[KœÜÚ][ÛŠK››Ü›X[^™J
K\Ë˜Ø[Y\˜K›ÛÚÐ]
[KœÜÚ][ÛŠK\Ë™[˜X›Q[\[™ÏÊK]JKÍKKœJKÍKKœÛ\œ
[KŒŠ\Ë™[\[™Ó[Ý™Q˜XÝÜŠJNŠK]OLKœOLKœÙ]
JJK[OLK›KœÙ]

K
K™\Ý[˜ÙUÔÜ]X\™Y
\Ë˜Ø[Y\˜KœÜÚ][ÛŠO–YŸ
ŠKWÛK™Ý
\Ë˜Ø[Y\˜Kœ]X]\›š[ÛŠJO–YŠI‰Š\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜JKK˜ÛÜJ\Ë˜Ø[Y\˜KœÜÚ][ÛŠKÛK˜ÛÜJ\Ë˜Ø[Y\˜Kœ]X]\›š[ÛŠJK\Ë™[˜X›Q[\[™É‰OO]\ËœÝ]\Ë“Ô’U	‰\Ëœ^Y\‹š\ÔÝÜY

I‰ŠK]O–YŸKœO–YŠI‰Š\Ëœ^Y\‹œÙ]Ø[˜XÚÊ


OOžÝ\Ë\]J\ËœÝ]\Ë“Ô’U
_JJK\Ëœ^Y\‹œ^S]\ŠŒŠJK\ËšY]Ë™\Ü]Ú]™[
Ý\N™™‹ÐSQTWÓSÕ‘QÛÛÜ™™KœÙ]œ›ÛU™XÝÜŒÊ[KœÜÚ][ÛŠK˜[™ÙN–™‹œ˜Y]\ËXY[™Î‹\Ë˜ÚŽKœ˜YÑYÊ™‹]JK[ŽL\Ë˜ÚŽKœ˜YÑYÊ™‹œJ_J_[Û”Ý]PÚ[™ÙJ
^Ý\ËœÝ]\Ë˜Ý\œ™[Ý]HOO]\ËœÝ]\Ë““Ó‘OÊ™‹œÝÜ
\ËšY]Ë\Ë˜Ø[Y\˜JK\Ë›Û‘[™[™Ó[Ý™J
K\Ëœ^Y\‹œÝÜ

K\Ë\]U\™Ù]

K›OU™‹™Ù]˜[œÙ›Ü›PØ[Y\˜SÛÚÚ[™Ð]\™Ù]
\ËšY]Ë\Ë˜Ø[Y\˜KÛJK	‹˜ÛÜJšY]ÐÛÛÜ™ÊK\ËšY]Ë™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\
šY]ÐÛÛÜ™Ë›JI‰ŠÛKœ˜Y]\ÏX›K›[™Ý

KK˜ÛÜJ›JK››Ü›X[^™J
K\Ë\]R[\Š›KÛKœXÚÚ[™ÊJKÛK˜ÛÜJšY]ÐÛÛÜ™ÊK\ËšY]Ë™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\
šY]ÐÛÛÜ™ËÛJK›K˜ÛÜJšY]ÐÛÛÜ™ÊJN\Ëš[™Q[™[Ý™[Y[

_Z[™T›Ý][ÛŠ
^Ý\Ëœ^Y\‹œÝÜ

K\Ëš[™T[›Ü˜[ZXÊ
_Z[™Q˜YÊ
^ØÛÛœÝO]\ËšY]ËšY]ÕÓ›Ü›X[^™YÛÛÜ™ÊšY]ÐÛÛÜ™ÊNÝ\Ë˜Ø[Y\˜K\]SX]š^ÛÜ›

KKœÙ]œ›ÛPØ[Y\˜JK\Ë˜Ø[Y\˜JKKœ˜^Kš[\œÙXÝÜ\™JÛK[JOÊ›K˜ÛÜJ[JK››Ü›X[^™J
KKœÙ]œ›ÛU[š]™XÝÜœÊ›KJKÛOQ]K››ÝÊ
K\Ë\]J
JN\ËœÝ]\Ë›Û”Ú[\•\

_Z[™QÛJ
^Ø[K˜ÛÜJšY]ÐÛÛÜ™ÊKKœÝX•™XÝÜœÊ[KÛJKÛK˜ÛÜJ[JK™[O[KžKO]™[I‰\Ëš[™V›ÛÛJ
_Z[™T[Š
^ÝšY]ÐÛÛÜ™ÏÊ›K˜ÛÜJšY]ÐÛÛÜ™ÊK[KœÝX•™XÝÜœÊ›K›JK›K˜ÛÜJ›JJN™\™XÝ[Û‰‰š[K˜ÛÜJ–Ý™\™XÝ[Û—JK›][\TØØ[\Š\ËšÙ^T[”ÜYY
K\Ë›[Ý\ÙUÔ[Š[Kž[KžJK\Ë\]J\ËœÝ]\Ë”SŠ_Z[™T[›Ü˜[ZXÊ
^Ò™‹˜ÛÜJšY]ÐÛÛÜ™ÊKÙ‹œÝX•™XÝÜœÊ™‹	ŠNØÛÛœÝO]\ËšY]Ë›XZ[“ÛÜ™Ùž[™Ú[™NÝK]KOLŠ“X]”J’Ù‹žÙKÚY
\Ëœ›Ý]TÜYYKœKOLŠ“X]”J’Ù‹žKÙKšZYÚ
\Ëœ›Ý]TÜYY	‹˜ÛÜJ™ŠK\Ë\]J
_Z[™Q[™[Ý™[Y[

^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNžßNÝ\Ë™\Ü]Ú]™[
\Ë™[™]™[
K\Ëœ^Y\‹œÝÜ

K\Ë™[˜X›Q[\[™ÏÝœ™]š[Ý\ÏOO]\ËœÝ]\Ë“Ô’U	‰ŠK]O–YŸKœO–YŠOÊ\Ëœ^Y\‹œÙ]Ø[˜XÚÊ


OOžÝ\Ë\]J\ËœÝ]\Ë“Ô’U
_JJK\Ëœ^Y\‹œ^JŒ
K\Ë—ÛÛ‘[™[™Ó[Ý™OJ
OO\Ë›Û‘[™[™Ó[Ý™J
K\Ëœ^Y\‹˜Y]™[\Ý[™\Š˜[š[X][Û‹\ÝÜY‹\Ë—ÛÛ‘[™[™Ó[Ý™JJNœ™]š[Ý\ÏOO]\ËœÝ]\Ë“SÕ‘WÑÓÐ‘I‰‘]K››ÝÊ
KYÛOLÊ\Ëœ^Y\‹œÙ]Ø[˜XÚÊ


OOžÝ\Ë\]J\ËœÝ]\Ë“SÕ‘WÑÓÐ‘J_JJK\Ëœ^Y\‹œ^JLŒ
K\Ë—ÛÛ‘[™[™Ó[Ý™OJ
OO\Ë›Û‘[™[™Ó[Ý™J
K\Ëœ^Y\‹˜Y]™[\Ý[™\Š˜[š[X][Û‹\ÝÜY‹\Ë—ÛÛ‘[™[™Ó[Ý™JJN\Ë›Û‘[™[™Ó[Ý™J
N\Ë›Û‘[™[™Ó[Ý™J
_]\]U\™Ù]

^ÚYŠ\ËšY]Ë™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\
[ÛJJ^ØÛÛœÝZ\Ó˜SŠÛKž
OÌL\Ë˜Ø[Y\˜KœÜÚ][Û‹™\Ý[˜ÙUÊÛJNÑKœÙ]
]
K\Ë˜Ø[Y\˜K›ØØ[ÕÛÜ›
JK[JK[JK[K›X]š^ÛÜ›[™\œÙK˜ÛÜJ[K›X]š^ÛÜ›
Kš[™\

KK˜ÛÜJ\Ë˜Ø[Y\˜KœÜÚ][ÛŠKK˜\SX]š^
[K›X]š^ÛÜ›[™\œÙJK™‹œÙ]œ›ÛU™XÝÜŒÊJ__Z[™[™Ñ]™[

^Ý]™‹™Ù]˜[œÙ›Ü›PØ[Y\˜SÛÚÚ[™Ð]\™Ù]
\ËšY]Ë\Ë˜Ø[Y\˜JNØÛÛœÝOU™‹™Ù]Y™”\˜[\Ê›K
NÚYŠI‰ŠKœ˜[™ÙI‰\Ë™\Ü]Ú]™[
Ý\N“[K”S‘ÑWÐÒS‘ÑQ™]š[Ý\Î™Kœ˜[™ÙKœ™]š[Ý\Ë™]Î™Kœ˜[™ÙK›™]ßJKK˜ÛÛÜ™	‰\Ë™\Ü]Ú]™[
Ý\N“[KÐSQTWÕT‘ÑUÐÒS‘ÑQ™]š[Ý\Î™K˜ÛÛÜ™œ™]š[Ý\Ë™]Î™K˜ÛÛÜ™›™]ßJKK[KšXY[™ÊJ^ØÛÛœÝ^Ý\N“[K“Ô’QS•USÓ—ÐÒS‘ÑQNÙK[	‰Šœ™]š[Ý\Ï^Ý[™K[œ™]š[Ý\ßK›™]Ï^Ý[™K[›™]ßJKKšXY[™É‰Šœ™]š[Ý\Ï]œ™]š[Ý\ßßK›™]Ï]›™]ßßK›™]ËšXY[™ÏYKšXY[™Ë›™]Ëœ™]š[Ý\ËšXY[™ÏYKšXY[™Ëœ™]š[Ý\ÊK\Ë™\Ü]Ú]™[

__]˜]™[

^Ý\Ëœ^Y\‹œÝÜ

NØÛÛœÝO]\ËšY]Ë™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\
šY]ÐÛÛÜ™ÊK]\Ë™Ù]˜[™ÙJJNÚYŠI‰œ\Ë›Z[‘\Ý[˜ÙJ\™]\›ˆ\Ë›ÛÚÐ]ÛÛÜ™[˜]JØÛÛÜ™›™]ÈK‘I
‘TÑÎMÎŠKœÙ]œ›ÛU™XÝÜŒÊJK˜[™ÙNœŠŠ›Ý]OO]™\™XÝ[ÛÌKËŽ‹ŠK[YNŒMLJ_Z[™V›ÛÛJ
^Ý\Ëœ^Y\‹œÝÜ

K™‹œÝÜ
\ËšY]Ë\Ë˜Ø[Y\˜JNØÛÛœÝO]™[OŒÝ\Ëž›ÛÛR[”ØØ[N\Ëž›ÛÛSÝ]ØØ[NÛ]H™ÛHOO]\OÓÛN\ËšY]Ë™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\
šY]ÐÛÛÜ™ÊK]\Ë™Ù]˜[™ÙJ
NÚYŠŠYK‰‰›\Ë›Z[‘\Ý[˜ÙI‰›\Ë›X^\Ý[˜ÙJ^ØÛÛœÝ\KœÙ]œ›ÛU™XÝÜŒÊ[KœÜÚ][ÛŠK˜\Ê‘TÑÎÌˆ‹›JKÕ™XÝÜŒÊ
NÜ™]\›ˆ\KœÙ]œ›ÛU™XÝÜŒÊŠK˜\Ê‘TÑÎÌˆ‹›JKÕ™XÝÜŒÊ
Kž
œ‹ž	‰Šž\‹žŒNÜ‹ž
ÏLÍŒœ‹ž]žŒN	‰Šž
ÏLÍŒ
JK‹›\œ
JKY›KœÙ]œ›ÛU™XÝÜŒÊŠK˜\Ê‘TÑÎMÎ‹JK\Ë›ÛÚÐ]ÛÛÜ™[˜]JØÛÛÜ™œ‹˜[™ÙN›ŸKLJ__[Û•ÝXÚÝ\

^ÚYŠ\Ëœ^Y\‹œÝÜ

KLHOO]\ËœÝ]\Ë™[˜X›Y	‰Š\ËœÝ]O]\ËœÝ]\ËÝXÚÔÝ]JÝXÚ\Ë›[™Ý
K\Ë\]U\™Ù]

K\ËœÝ]HOO]\ËœÝ]\Ë““Ó‘JJ^ÜÝÚ]Ú
\ËœÝ]J^ØØ\ÙH\ËœÝ]\Ë“SÕ‘WÑÓÐ‘NžØÛÛœÝO]\ËšY]Ë™]™[ÕšY]ÐÛÛÜ™Ê
NÝ\ËšY]Ë™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\
K›JOÊÛKœ˜Y]\ÏX›K›[™Ý

KK˜ÛÜJ›JK››Ü›X[^™J
K\Ë\]R[\Š›KÛKœXÚÚ[™ÊJN\ËœÝ]O]\ËœÝ]\Ë““Ó‘NØœ™XZßXØ\ÙH\ËœÝ]\Ë“Ô’U˜Ø\ÙH\ËœÝ]\Ë‘ÓNžØÛÛœÝO]ÝXÚ\ÖÌKœYÙV]ÝXÚ\ÖÌKœYÙVKYK]ÝXÚ\ÖÌWKœYÙVO\‹]ÝXÚ\ÖÌWKœYÙVKÏSX]œÜ\
Š›ŠÚJšJNÛÛKœÙ]
ÊK	‹œÙ]
KŠNØœ™XZßXØ\ÙH\ËœÝ]\Ë”SŽœ›KœÙ]
ÝXÚ\ÖÌKœYÙVÝXÚ\ÖÌKœYÙVJ_]\Ë™\Ü]Ú]™[
\ËœÝ\]™[
__[Û•ÝXÚ[Ý™J
^ÚYŠ\Ëœ^Y\‹š\Ô^Z[™Ê
I‰\Ëœ^Y\‹œÝÜ

KLHOO]\ËœÝ]\Ë™[˜X›Y
^ÜÝÚ]Ú
œ™]™[Y˜][

KœÝÜ›ÜYØ][ÛŠ
KÝXÚ\Ë›[™Ý
^ØØ\ÙH\ËœÝ]\Ë“SÕ‘WÑÓÐ‘K™š[™Ù\ŽžØÛÛœÝO]\ËšY]Ë™]™[ÕšY]ÐÛÛÜ™Ê
K]\ËšY]ËšY]ÕÓ›Ü›X[^™YÛÛÜ™ÊJNÝ\Ë˜Ø[Y\˜K\]SX]š^ÛÜ›

KKœÙ]œ›ÛPØ[Y\˜J‹\Ë˜Ø[Y\˜JKKœ˜^Kš[\œÙXÝÜ\™JÛK[JOÊ›K˜ÛÜJ[JK››Ü›X[^™J
KKœÙ]œ›ÛU[š]™XÝÜœÊ›KJKÛOQ]K››ÝÊ
JN\Ë›Û•ÝXÚ[™

NØœ™XZßXØ\ÙH\ËœÝ]\Ë“Ô’U™š[™Ù\Ž˜Ø\ÙH\ËœÝ]\Ë‘ÓK™š[™Ù\ŽžØÛÛœÝO]\ËšY]Ë›XZ[“ÛÜ™Ùž[™Ú[™NÒ™‹œÙ]
ÝXÚ\ÖÌKœYÙVÝXÚ\ÖÌKœYÙVJKÙ‹œÝX•™XÝÜœÊ™‹	ŠK\Ëœ›Ý]SY
Š“X]”J’Ù‹žÙKÚY
\Ëœ›Ý]TÜYY
K\Ëœ›Ý]U\
Š“X]”J’Ù‹žKÙKšZYÚ
\Ëœ›Ý]TÜYY
K	‹˜ÛÜJ™ŠNØÛÛœÝ]ÝXÚ\ÖÌKœYÙV]ÝXÚ\ÖÌWKœYÙV]ÝXÚ\ÖÌKœYÙVK]ÝXÚ\ÖÌWKœYÙVKOSX]œÜ\
ŠœŠÛŠ›ŠNØ[KœÙ]
JKKœÝX•™XÝÜœÊ[KÛJK\Ë™ÛJKžJKÛK˜ÛÜJ[JNØœ™XZßXØ\ÙH\ËœÝ]\Ë”S‹™š[™Ù\Ž››KœÙ]
ÝXÚ\ÖÌKœYÙVÝXÚ\ÖÌKœYÙVJK[KœÝX•™XÝÜœÊ›K›JK\Ë›[Ý\ÙUÔ[Š[Kž[KžJK›K˜ÛÜJ›JNØœ™XZÎÙY˜][\ËœÝ]O]\ËœÝ]\Ë““Ó‘_]\ËœÝ]HOO]\ËœÝ]\Ë““Ó‘I‰\Ë\]J\ËœÝ]J__[Û•ÝXÚ[™

^Ý\Ëš[™Q[™[Ý™[Y[
Ü™]š[Ý\Î\ËœÝ]_JK\ËœÝ]O]\ËœÝ]\Ë““Ó‘_Y\ÜÜÙJ
^Ý\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠÝXÚÝ\‹\Ë—ÛÛ•ÝXÚÝ\LJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠÝXÚ[™‹\Ë—ÛÛ•ÝXÚ[™LJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠÝXÚ[Ý™H‹\Ë—ÛÛ•ÝXÚ[Ý™KLJK\ËœÝ]\Ë™\ÜÜÙJ
K\ËœÝ]\Ëœ™[[Ý™Q]™[\Ý[™\ŠœÝ]KXÚ[™ÙY‹\Ë—ÛÛ”Ý]PÚ[™ÙKLJK\ËœÝ]\Ëœ™[[Ý™Q]™[\Ý[™\Š\ËœÝ]\Ë“Ô’U—Ù]™[\Ë—ÛÛ”›Ý][Û‹LJK\ËœÝ]\Ëœ™[[Ý™Q]™[\Ý[™\Š\ËœÝ]\Ë“SÕ‘WÑÓÐ‘K—Ù]™[\Ë—ÛÛ‘˜YËLJK\ËœÝ]\Ëœ™[[Ý™Q]™[\Ý[™\Š\ËœÝ]\Ë‘ÓK—Ù]™[\Ë—ÛÛ‘ÛKLJK\ËœÝ]\Ëœ™[[Ý™Q]™[\Ý[™\Š\ËœÝ]\Ë”S‹—Ù]™[\Ë—ÛÛ”[‹LJK\ËœÝ]\Ëœ™[[Ý™Q]™[\Ý[™\Š\ËœÝ]\Ë”S“ÔSRPË—Ù]™[\Ë—ÛÛ”[›Ü˜[ZXËLJK\ËœÝ]\Ëœ™[[Ý™Q]™[\Ý[™\Šž›ÛÛH‹\Ë—ÛÛ–›ÛÛKLJK\ËœÝ]\Ëœ™[[Ý™Q]™[\Ý[™\Š\ËœÝ]\Ë•U‘SÒS‹—Ù]™[\Ë—ÛÛ•˜]™[LJK\ËœÝ]\Ëœ™[[Ý™Q]™[\Ý[™\Š\ËœÝ]\Ë•U‘SÓÕU—Ù]™[\Ë—ÛÛ•˜]™[LJK\Ë™\Ü]Ú]™[
Ý\Nˆ™\ÜÜÙHŸJ_\Ù][
J^Ü™]\›ˆ\Ë›ÛÚÐ]ÛÛÜ™[˜]JÝ[KJ_\Ù]XY[™ÊJ^Ü™]\›ˆ\Ë›ÛÚÐ]ÛÛÜ™[˜]JÚXY[™ÎKJ_\Ù]˜[™ÙJJ^Ü™]\›ˆ\Ë›ÛÚÐ]ÛÛÜ™[˜]JÜ˜[™ÙNKJ_YÙ]Ø[Y\˜U\™Ù]ÜÚ][ÛŠ
^Ü™]\›ˆ[KœÜÚ][ÛŸYÙ]˜[™ÙJ
^Ü™]\›ˆ™‹™Ù]˜[œÙ›Ü›PØ[Y\˜SÛÚÚ[™Ð]\™Ù]
\ËšY]Ë\Ë˜Ø[Y\˜K
Kœ˜[™Ù_YÙ][

^Ü™]\›ˆ™‹™Ù]˜[œÙ›Ü›PØ[Y\˜SÛÚÚ[™Ð]\™Ù]
\ËšY]Ë\Ë˜Ø[Y\˜K
K[YÙ]XY[™Ê
^Ü™]\›ˆ™‹™Ù]˜[œÙ›Ü›PØ[Y\˜SÛÚÚ[™Ð]\™Ù]
\ËšY]Ë\Ë˜Ø[Y\˜K
KšXY[™ß\[Š
^Ü™]\›ˆ\Ë›[Ý\ÙUÔ[ŠžžJK\Ë\]J\ËœÝ]\Ë”SŠK›ÛZ\ÙKœ™\ÛÛ™J
_YÙ]Ø[Y\˜SÜšY[][ÛŠ
^Ü™]\›ˆ\ËšY]Ë™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\
[ÛJKÝ\Ë™Ù][
ÛJK\Ë™Ù]XY[™ÊÛJW_YÙ]Ø[Y\˜PÛÛÜ™[˜]J
^Ü™]\›ˆ™]ÈK‘I
‘TÑÎMÎŠKœÙ]œ›ÛU™XÝÜŒÊ\Ë˜Ø[Y\˜KœÜÚ][ÛŠK˜\Ê‘TÑÎÌˆŠ_YÙ]ÛÚÐ]ÛÛÜ™[˜]J
^Ü™]\›ˆ™‹™Ù]˜[œÙ›Ü›PØ[Y\˜SÛÚÚ[™Ð]\™Ù]
\ËšY]Ë\Ë˜Ø[Y\˜JK˜ÛÛÜ™\Ù][š[X][Û‘[˜X›Y

^Ð[O]Z\Ð[š[X][Û‘[˜X›Y

^Ü™]\›ˆ[_YÙ]›ÛÛJ
^Ü™]\›ˆ\ËšY]Ë[S^Y\‹˜ÛÛ\]U[V›ÛÛQœ›ÛQ\Ý[˜ÙPØ[Y\˜J\Ë™Ù]˜[™ÙJ
K\ËšY]Ë˜Ø[Y\˜J_\Ù]›ÛÛJJ^Ü™]\›ˆ\Ë›ÛÚÐ]ÛÛÜ™[˜]JÞ›ÛÛNKJ_YÙ]ØØ[J
^Ü™]\›ˆÛÛœÛÛKØ\›Š‘\™XØ]Y\ÙHšY]ÈÙÙ]ØØ[H[œÝXYˆŠK\ËšY]Ë™Ù]ØØ[J
_\^[ÕÓY]\œÊ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWN‹ŒŽÜ™]\›ˆÛÛœÛÛKØ\›Š‘\™XØ]Y\ÙHšY]ÈÙÙ]^[ÕÓY]\œÈ[œÝXYˆŠK
™KÝ\Ë™Ù]ØØ[JJKÌYLß\^[ÕÑYÜ™Y\Ê
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWN‹ŒŽØÛÛœÛÛKØ\›Š‘\™XØ]Y\ÙHšY]ÈÙÙ]^[ÕÓY]\œÈ[™ÛØ™PÛÛ›ÛÈÙÙ]Y]\œÕÑYÜ™Y\È[œÝXYˆŠNØÛÛœÝ]\Ëœ^[ÕÓY]\œÊJNÜ™]\›ˆË˜ÚŽKœ˜YÑYÊŠ“X]˜\Ú[Š‹ÊŠšK”[ž
JJ_[Y]\œÕÔ^[Ê
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWN‹ŒŽØÛÛœÛÛKØ\›Š‘\™XØ]Y\ÙHšY]ÈÙÙ]Y]\œÕÔ^[È[œÝXYˆŠNØÛÛœÝ]\Ë™Ù]ØØ[JJNÜ™]\›ˆKÏLYLË
œ‹Ù_\Ù]ØØ[JKŠ^Ü™]\›ˆ\Ë›ÛÚÐ]ÛÛÜ™[˜]JÜØØ[N]Ú™_KŠ_[ÛÚÐ]ÛÛÜ™[˜]J
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNžßKOX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWN\Ëš\Ð[š[X][Û‘[˜X›Y

NÚYŠ\Ëœ^Y\‹œÝÜ

K]š\Ñ^[	‰Šž›ÛÛOÝœ˜[™ÙO]\ËšY]Ë[S^Y\‹˜ÛÛ\]Q\Ý[˜ÙPØ[Y\˜Qœ›ÛU[V›ÛÛJž›ÛÛK\ËšY]Ë˜Ø[Y\˜JNœØØ[I‰Šœ˜[™ÙO]\ËšY]Ë™Ù]ØØ[Qœ›ÛQ\Ý[˜ÙJœ]ÚœØØ[JK
œ˜[™ÙO\Ë›Z[‘\Ý[˜Ù_œ˜[™ÙO\Ë›X^\Ý[˜ÙJI‰ŠÛÛœÛÛKØ\›Š\ÈØØ[H	ÝœØØ[_HØ[ˆ›Ý™H™XXÚY
Kœ˜[™ÙO\Ë˜ÚŽK˜Û[\
œ˜[™ÙK\Ë›Z[‘\Ý[˜ÙK\Ë›X^\Ý[˜ÙJJJK›ÚYOO][
J^ØÛÛœÝONL\Ë˜ÚŽKœ˜YÑYÊ\Ë›X^Û\[™ÛJKNL\Ë˜ÚŽKœ˜YÑYÊ\Ë›Z[”Û\[™ÛJNÊ[_[œŠI‰Š[\Ë˜ÚŽK˜Û[\
[KŠKÛÛœÛÛKØ\›Š•[Ø\ÈÛ[\YÈ‹[H[\˜[\È™]ÙY[ˆ	Ù_H[™	ÜŸHYÜ™YX
J_\™]\›ˆ›OU™‹™Ù]˜[œÙ›Ü›PØ[Y\˜SÛÚÚ[™Ð]\™Ù]
\ËšY]Ë\Ë˜Ø[Y\˜JKOÊ˜Ø[˜XÚÏ]O[KœÜÚ][Û‹˜ÛÜJ\™Ù]ÛÜ›ÜÚ][ÛŠK\Ë™\Ü]Ú]™[
Ý\Nˆ˜[š[X][Û‹\Ý\YŸJK™‹˜[š[X]PØ[Y\˜UÓÛÚÐ]\™Ù]
\ËšY]Ë\Ë˜Ø[Y\˜K
K[Š
OŠ\Ë™\Ü]Ú]™[
Ý\Nˆ˜[š[X][Û‹Y[™YŸJK\Ëš[™[™Ñ]™[

K
JJJN•™‹˜[œÙ›Ü›PØ[Y\˜UÓÛÚÐ]\™Ù]
\ËšY]Ë\Ë˜Ø[Y\˜K
K[Š
OŠ[KœÜÚ][Û‹˜ÛÜJ\™Ù]ÛÜ›ÜÚ][ÛŠK\Ëš[™[™Ñ]™[

K
JJ_\XÚÑÙ[ÔÜÚ][ÛŠ
^ØÛÛœÝO]\ËšY]Ë™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\

NÚYŠJ\™]\›ˆ™]ÈK‘I
‘TÑÎMÎŠKœÙ]œ›ÛU™XÝÜŒÊJK˜\Ê‘TÑÎÌˆŠ__XÛÛœÝÛOU[K›O^Ý[šY›Ü›\ÎžÛ[Z[˜[˜ÙP][ÜÜ\™NžÝ\Nˆ™ˆ‹˜[YNŒ_K\˜šY]NžÝ\Nˆ™ˆ‹˜[YNŒŸK™Z[ZYÚžÝ\Nˆ™ˆ‹˜[YNŒ_KZYPÛÙY™šXÚY[žÝ\Nˆ™ˆ‹˜[YN‹Œ_KZYQ\™XÝ[Û˜[ÎžÝ\Nˆ™ˆ‹˜[YN‹ŽKŒÓYÚÜÚ][ÛŽžÝ\NˆŒÈ‹˜[YN›™]ÈË”LK\žÝ\NˆŒÈ‹˜[YN›™]ÈË”L
K
__K™\^ÚY\Ž–È˜\žZ[™È™XÌÈ•ÛÜ›ÜÚ][ÛŽÈ‹›ÚYXZ[Š
HÈ‹™XÍÛÜ›ÜÚ][ÛˆH[Ù[X]š^
ˆ™XÍ
Ø[Y\˜TÜÚ][Ûˆ
ÈÜÚ][Û‹KŒ
NÈ‹•ÛÜ›ÜÚ][ÛˆHÛÜ›ÜÚ][Û‹ž^ŽÈ‹™ÛÔÜÚ][ÛˆH›Ú™XÝ[Û“X]š^
ˆ[Ù[šY]ÓX]š^
ˆ™XÍ
Ø[Y\˜TÜÚ][Ûˆ
ÈÜÚ][Û‹KŒ
NÈ‹ŸH—Kš›Ú[Š—ˆŠKœ˜YÛY[ÚY\Ž–È[šY›Ü›HØ[\\Œ‘ÚÞTØ[\\ŽÈ‹[šY›Ü›H™XÌÈŒÓYÚÜÚ][ÛŽÈ‹[šY›Ü›H™XÌÈ\È‹˜\žZ[™È™XÌÈ•ÛÜ›ÜÚ][ÛŽÈ‹‹ËÈ[šY›Ü›HØ[\\Œ‘ÑY™\ÙNÈ‹‹ËÈÛÛœÝ›Ø]\˜šY]HHLŒÈËÈ‹‹ËÈÛÛœÝ›Ø]™Z[ZYÚH‹ŽÈËÈ‹‹ËÈÛÛœÝ›Ø][Z[˜[˜ÙP][ÜÜ\™HHKŒÈËÈ‹‹ËÈÛÛœÝ›Ø]ZYPÛÙY™šXÚY[HŒNÈ‹‹ËÈÛÛœÝ›Ø]ZYQ\™XÝ[Û˜[ÈHŽÈ‹[šY›Ü›H›Ø][Z[˜[˜ÙP][ÜÜ\™NÈ‹[šY›Ü›H›Ø]\˜šY]NÈ‹[šY›Ü›H›Ø]™Z[ZYÚÈ‹[šY›Ü›H›Ø]ZYPÛÙY™šXÚY[È‹[šY›Ü›H›Ø]ZYQ\™XÝ[Û˜[ÎÈ‹‹ËÈÛÛœÝ[È›Üˆ][ÜÜ\šXÈØØ]\š[™È‹˜ÛÛœÝ›Ø]HH‹ÌNŽNŽNLLŒÍLÍŒŽÍÌLÍLŒMÍÍMÌÌLÍŽNNMNMMÎÈ‹˜ÛÛœÝ›Ø]HHËŒMMNLLÍNMÎLÌŒÎŒÌÎÌÎMLŽNMÌMŽNÈ‹˜ÛÛœÝ›Ø]ˆHKŒÎÈËÈ™Yœ˜XÝ]™H[™^ÙˆZ\ˆ‹˜ÛÛœÝ›Ø]ˆH‹MQLNÈËÈ[X™\ˆÙˆ[ÛXÝ[\È\ˆ[š]›Û[YH›ÜˆZ\ˆ]‹‹ËÈŽŒMRÈ[™LLÛXˆ
ÙXH]™[MHÙ[Ú]\ÊH‹˜ÛÛœÝ›Ø]ˆHŒÍNÈËÈ\Û]^˜][Ûˆ˜XÝÜˆ›ÜˆÝ[™\™Z\ˆ‹‹ËÈØ]™[[™ÝÙˆ\ÙYš[X\šY\ËXØÛÜ™[™ÈÈ™Y][H‹˜ÛÛœÝ™XÌÈ[X™HH™XÌÊŽKNKMLKNKLKNJNÈ‹‹ËÈZYHÝY™ˆ‹‹ËÈÈÛÙY™šXÚY[›ÜˆHš[X\šY\È‹˜ÛÛœÝ™XÌÈÈH™XÌÊŽ‹ÎŠNÈ‹˜ÛÛœÝ›Ø]ˆHŒÈ‹‹ËÈÜXØ[[™Ý]™[š]›Üˆ[ÛXÝ[\È‹˜ÛÛœÝ›Ø]˜^[ZYÚ™[š][™ÝHLÎÈ‹˜ÛÛœÝ›Ø]ZYV™[š][™ÝHKŒQLÎÈ‹˜ÛÛœÝ›Ø]QHHLŒÈ‹˜ÛÛœÝ›Ø]Ý[[™Ý[\‘X[Y]\ÛÜÈHŽNNNMMÍŽMÍMLÍMÍŒNNLŽMÍÎLŽŽLŽÌÎLNLÌÈ‹‹ËÈˆ\˜ÈÙXÛÛ™ÈOˆYÜ™Y\Ë[™HÛÜÚ[™HÙˆ]‹‹ËÈX\ÚYÝÈXÚÈ‹˜ÛÛœÝ›Ø]Ý]Ù™[™ÛHHKÌKŽMNÈ‹˜ÛÛœÝ›Ø]ÝY\™\ÜÈHKNÈ‹™XÌÈÝ[˜^[ZYÚ
™XÌÈ[X™JH‹žÈ‹œ™]\›ˆ
Œ
ˆÝÊKËŒ
H
ˆÝÊÝÊ‹‹Œ
HHKŒ‹Œ
H
ˆ
‹Œ
ÈËŒ
ˆŠJHÈ
ËŒ
ˆˆ
ˆÝÊ[X™K™XÌÊŒ
JH
ˆ
‹ŒHËŒ
ˆŠJNÈ‹ŸH‹‹ËÈHÚ[\YY™\œÚ[ÛˆÙˆHÝ[™X^[ZYÚØØ]\š[™ÈÈÛÜšÜÈÛˆœ›ÝÜÙ\œÈ]\ÙHS‘ÓH‹™XÌÈÚ[\YšYY˜^[ZYÚ

H‹žÈ‹œ™]\›ˆŒHÈ™XÌÊMN
NÈ‹ŸH‹™›Ø]˜^[ZYÚ\ÙJ›Ø]ÛÜÕ]JH‹žÈ‹œ™]\›ˆ
ËŒÈ
M‹Œ
œJJH
ˆ
KŒ
ÈÝÊÛÜÕ]K‹Œ
JNÈ‹‹ËÈ™]\›ˆ
KŒÈ
ËŒ
œJJH
ˆ
KŒ
ÈÝÊÛÜÕ]K‹Œ
JNÈ‹‹ËÈ™]\›ˆ
ËŒÈŒ
H
ˆ
KŒ
ÈÝÊÛÜÕ]K‹Œ
JNÈ‹ŸH‹™XÌÈÝ[ZYJ™XÌÈ[X™K™XÌÈË›Ø]
H‹žÈ‹™›Ø]ÈH
Œˆ
ˆ
H
ˆLKLNÈ‹œ™]\›ˆÍ
ˆÈ
ˆH
ˆÝÊ
‹Œ
ˆJHÈ[X™K™XÌÊˆH‹Œ
JH
ˆÎÈ‹ŸH‹™›Ø]Ô\ÙJ›Ø]ÛÜÕ]K›Ø]ÊH‹žÈ‹œ™]\›ˆ
KŒÈ
Œ
œJJH
ˆ

KŒHÝÊË‹Œ
JHÈÝÊKŒH‹Œ
™Ê˜ÛÜÕ]H
ÈÝÊË‹Œ
KKJJNÈ‹ŸH‹™›Ø]Ý[’[[œÚ]J›Ø]™[š][™ÛPÛÜÊH‹žÈ‹œ™]\›ˆQH
ˆX^
ŒKŒH^
J
Ý]Ù™[™ÛHHXÛÜÊ™[š][™ÛPÛÜÊJKÜÝY\™\ÜÊJJNÈ‹ŸH‹‹ËÈ›Ø]ÙÓ[Z[˜[˜ÙJ™XÌÈÊH‹‹ËÈÈ‹‹ËÈ™]\›ˆÙÊËœˆ
ˆŒŒLˆ
ÈË™È
ˆÌMLˆ
ÈË˜ˆ
ˆŒÌŒŠNÈ‹‹ËÈH‹‹ËÈš[ZXÈÛ™SX\[™È‹ËÙš[ZXÙØ[Y\Ë˜ÛÛKØ\˜Ú]™\ËÍÍH‹™›Ø]HHŒMNÈ‹™›Ø]ˆHLÈ‹™›Ø]ÈHŒLÈ‹™›Ø]HŒŒÈ‹™›Ø]HHŒŽÈ‹™›Ø]ˆHŒÌÈ‹™›Ø]ÈHLŒÈ‹™XÌÈ[˜Ú\Y•Û™[X\
™XÌÈ
H‹žÈ‹œ™]\›ˆ


ŠJž
ÐÊŠJÑ
‘JKÊ
ŠJž
ÐŠJÑ
‘ŠJKQKÑŽÈ‹ŸH‹›ÚYXZ[Š
H‹žÈ‹™XÌÈ\ˆH›Ü›X[^™JØ[Y\˜TÜÚ][Û‹ž^ŠNÈ‹™›Ø]Ý[™˜YHHKŒXÛ[\
KŒY^

ŒÓYÚÜÚ][Û‹žKÍLŒ
JKŒKŒ
NÈ‹™›Ø]™Z[ZYÚÛÙY™šXÚY[H™Z[ZYÚH
KŒ
ˆ
KŒ\Ý[™˜YJJNÈ‹™XÌÈÝ[‘\™XÝ[ÛˆH›Ü›X[^™JŒÓYÚÜÚ][ÛŠNÈ‹™›Ø]Ý[‘HHÝ[’[[œÚ]JÝ
Ý[‘\™XÝ[Û‹\ŠJNÈ‹‹ËÈ^[˜Ý[Ûˆ
XœÛÜ˜[Ûˆ
ÈÝ]ØØ]\š[™ÊH‹‹ËÈ˜^[ZYÚÛÙY™šXÚY[È‹™XÌÈ™]TˆHÚ[\YšYY˜^[ZYÚ

H
ˆ™Z[ZYÚÛÙY™šXÚY[È‹‹ËÈZYHÛÙY™šXÚY[È‹™XÌÈ™]SHHÝ[ZYJ[X™KË\˜šY]JH
ˆZYPÛÙY™šXÚY[È‹‹ËÈÜXØ[[™Ý‹‹ËÈÝ]Ù™ˆ[™ÛH]LÈ]›ÚYÚ[™Ý[\š]H[ˆ™^›Ü›][Kˆ‹™›Ø]™[š][™ÛHHXÛÜÊX^
ŒÝ
\‹›Ü›X[^™J•ÛÜ›ÜÚ][ÛˆHØ[Y\˜TÜÚ][ÛŠJJJNÈ‹™›Ø]ÔˆH˜^[ZYÚ™[š][™ÝÈ
ÛÜÊ™[š][™ÛJH
ÈŒMH
ˆÝÊLËŽHH

™[š][™ÛH
ˆNŒ
HÈJKLKŒLÊJNÈ‹™›Ø]ÓHHZYV™[š][™ÝÈ
ÛÜÊ™[š][™ÛJH
ÈŒMH
ˆÝÊLËŽHH

™[š][™ÛH
ˆNŒ
HÈJKLKŒLÊJNÈ‹‹ËÈÛÛXš[™Y^[˜Ý[Ûˆ˜XÝÜˆ‹™XÌÈ™^H^
J™]Tˆ
ˆÔˆ
È™]SH
ˆÓJJNÈ‹‹ËÈ[ˆØØ]\š[™È‹™›Ø]ÛÜÕ]HHÝ
›Ü›X[^™J•ÛÜ›ÜÚ][ÛˆHØ[Y\˜TÜÚ][ÛŠKÝ[‘\™XÝ[ÛŠNÈ‹™›Ø]”\ÙHH˜^[ZYÚ\ÙJÛÜÕ]JŒJÌJNÈ‹™XÌÈ™]T•]HH™]Tˆ
ˆ”\ÙNÈ‹™›Ø]T\ÙHHÔ\ÙJÛÜÕ]KZYQ\™XÝ[Û˜[ÊNÈ‹™XÌÈ™]SU]HH™]SH
ˆT\ÙNÈ‹™XÌÈ[ˆHÝÊÝ[‘H
ˆ

™]T•]H
È™]SU]JHÈ
™]Tˆ
È™]SJJH
ˆ
KŒH™^
K™XÌÊKJJNÈ‹“[ˆ
HZ^
™XÌÊKŒ
KÝÊÝ[‘H
ˆ

™]T•]H
È™]SU]JHÈ
™]Tˆ
È™]SJJH
ˆ™^™XÌÊKŒÌ‹Œ
JKÛ[\
ÝÊKŒYÝ
\‹Ý[‘\™XÝ[ÛŠKKŒ
KŒKŒ
JNÈ‹‹ËÛšYÚÚÞH‹™XÌÈ\™XÝ[ÛˆH›Ü›X[^™J•ÛÜ›ÜÚ][ÛˆHØ[Y\˜TÜÚ][ÛŠNÈ‹™›Ø]]HHXÛÜÊ\™XÝ[Û‹žJNÈËÈ[]˜][ÛˆKWÙHKX^\ËË\KÌ‹KÌ—H‹™›Ø]HH][Š\™XÝ[Û‹ž‹\™XÝ[Û‹ž
NÈËÈ^š[]]KWÙHX^\ÈË\KÌ‹KÌ—H‹™XÌˆ]ˆH™XÌŠK]JHÈ™XÌŠ‹Œ
œKJH
È™XÌŠKŒ
NÈ‹‹ËÈ™XÌÈH^\™L‘
ÚÞTØ[\\‹]ŠKœ™ØŠÌŒH
ˆ™^È‹™XÌÈH™XÌÊŒJH
ˆ™^È‹‹ËÈÛÛ\ÜÚ][Ûˆ
ÈÛÛ\ˆ\ØÈ‹‹ËÚYˆ
ÛÜÕ]HˆÝ[[™Ý[\‘X[Y]\ÛÜÊH‹™›Ø]Ý[™\ÚÈHÛ[ÛÝÝ\
Ý[[™Ý[\‘X[Y]\ÛÜËÝ[[™Ý[\‘X[Y]\ÛÜÊÌŒ‹ÛÜÕ]JNÈ‹‹ËÈYˆ
›Ü›X[^™J•ÛÜ›ÜÚ][ÛˆHØ[Y\˜TÜÚ][ÛŠKžOŒŒ
H‹“
ÏH
Ý[‘H
ˆNLŒ
ˆ™^
JœÝ[™\ÚÎÈ‹™XÌÈÚ]TØØ[HHKŒÕ[˜Ú\Y•Û™[X\
™XÌÊÊJNÈ‹™XÌÈ^ÛÛÜˆH
[ŠÓ
NÈ‹^ÛÛÜˆ
HŒÈ‹^ÛÛÜˆ
ÏH™XÌÊŒŒKŒJJŒŒÎÈ‹™›Ø]×Ù“X^[Z[˜[˜ÙHHKŒÈ‹™›Ø]“[TØØ[YHŒHÈ[Z[˜[˜ÙP][ÜÜ\™NÈ‹™›Ø]“[PÛÛ\™\ÜÙYH
“[TØØ[Y
ˆ
KŒ
È
“[TØØ[YÈ
×Ù“X^[Z[˜[˜ÙH
ˆ×Ù“X^[Z[˜[˜ÙJJJJHÈ
KŒ
È“[TØØ[Y
NÈ‹™›Ø]^ÜÝ\™PšX\ÈH“[PÛÛ\™\ÜÙYÈ‹™XÌÈÝ\œˆH[˜Ú\Y•Û™[X\

ÙÌŠ‹ŒÜÝÊ[Z[˜[˜ÙP][ÜÜ\™KŒ
JJJ^ÛÛÜŠNÈ‹™XÌÈÛÛÜˆHÝ\œŠÚ]TØØ[NÈ‹™XÌÈ™]ÛÛÜˆHÝÊÛÛÜ‹™XÌÊKŒÊKŒŠÊKŒŠœÝ[™˜YJJJJNÈ‹™ÛÑœ˜YÐÛÛÜ‹œ™ØˆH™]ÛÛÜŽÈ‹™ÛÑœ˜YÐÛÛÜ‹˜HHKˆH

[™Ý
Ø[Y\˜TÜÚ][ÛŠHHŠHÈLŠNÈ‹ŸH—Kš›Ú[Š—ˆŠ_NØÛ\ÜÈÛH^[™ÈË™XQžØÛÛœÝXÝÜŠ
^ØÛÛœÝ\Ë“Ë˜ÛÛ™J›K[šY›Ü›\ÊKO[™]ÈË’ÚÊÙœ˜YÛY[ÚY\Žž›K™œ˜YÛY[ÚY\‹™\^ÚY\Žž›K™\^ÚY\‹[šY›Ü›\ÎÚYNœËšÖ˜[œÜ\™[ˆL\Üš]NˆL_JNÜÝ\\Š™]ÈË‘ÝI
MÌ‹MJKJ__XÛÛœÝ[OQÛK›OHˆÚ[˜ÛYHÙÙ\Y—Ü\œ×Ùœ˜YÛY[——[šY›Ü›H[][ÒSŽ×˜\žZ[™È›Ø][[œÚ]N×—™XÍÛÝÐÛÛÜˆH™XÍ
KÍKˆKŒ
N×—›ÚYXZ[Š
H×ˆÚ[˜ÛYHÙÙ\Y—Ùœ˜YÛY[—ˆÛÑœ˜YÐÛÛÜˆHÛÝÐÛÛÜˆ
ˆ[[œÚ]N×ŸW—ˆ‹›OHˆÚ[˜ÛYHÛÛ[[Û—ˆÚ[˜ÛYHÙÙ\Y—Ü\œ×Ý™\^——[šY›Ü›H[][ÒSŽ×˜\žZ[™È›Ø][[œÚ]N×—›ÚYXZ[Š
Wž×ˆ™XÌÈ›Ü›X[TÈH›Ü›X[^™J›Ü›X[X]š^
ˆ›Ü›X[
N×ˆ™XÌÈ›Ü›X[ÐSQTÈH›Ü›X[^™J›Ü›X[X]š^
ˆØ[Y\˜TÜÚ][Ûˆ
N×—ˆYŠ][ÒSˆOH
H×ˆ[[œÚ]HHÝÊˆHÝ
›Ü›X[TË›Ü›X[ÐSQTÊKˆ
N×ˆH[ÙH×ˆ[[œÚ]HHÝÊKˆHÝ
›Ü›X[TË›Ü›X[ÐSQTÊKŽ
N×ˆW—ˆÛÔÜÚ][ÛˆH›Ú™XÝ[Û“X]š^
ˆ[Ù[šY]ÓX]š^
ˆ™XÍ
ÜÚ][Û‹KŒ
N×—ˆÚ[˜ÛYHÙÙ\Y—Ý™\^—ŸW——ˆ‹O[™]ÈË”L
K
K[O[™]ÈË”LÛO[™]ÈK‘I
‘TÑÎÌˆŠK[O[™]ÈK‘I
‘TÑÎÌˆŠKO[™]ÈË”LYŠMŽMŽ
K	O[™]ÈË”LY‹›O[™]ÈË”LYŠNMÎMŠKÛOM™MK›OLMŒ
šK”[žÏXÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNˆ˜][ÜÜ\™H‹OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNÙKœÛÝ\˜ÙOHLKÝ\\Š™]ÈËŽKJK\Ëš\Ð][ÜÜ\™OHLØÛÛœÝ[™]ÈË’ÚÊÝ[šY›Ü›\ÎžØ][ÒSŽžÝ\NˆšH‹˜[YNŒKØÜ™Y[”Ú^™NžÝ\NˆŒˆ‹˜[YN›™]ÈË’NVJÚ[™ÝËš[›™\•ÚYÚ[™ÝËš[›™\’ZYÚ
__K™\^ÚY\Žš›Kœ˜YÛY[ÚY\Ž•›KÚYNœËšÖ›[™[™ÎœË‘V›Ë˜[œÜ\™[ˆLÚ\™Yœ˜[YNˆL_JK[™]ÈË‘ÝI
K
KÏ[™]ÈË™XQŠ‹ŠNÛËœØØ[K˜ÛÜJK”[
K›][\TØØ[\ŠKŒM
K\Ë˜˜\ÚXÐ][ÜÜ\™O[™]ÈËŽK\Ëœ™X[\ÝXÐ][ÜÜ\™O[™]ÈËŽK\Ëœ™X[\ÝXÐ][ÜÜ\™Kš\ÚX›OHLK\Ë›Øš™XÝÙ˜Y
\Ë˜˜\ÚXÐ][ÜÜ\™JK\Ë›Øš™XÝÙ˜Y
\Ëœ™X[\ÝXÐ][ÜÜ\™JK\Ë˜˜\ÚXÐ][ÜÜ\™K˜Y
ÊNØÛÛœÝO[™]ÈË’ÚÊÝ[šY›Ü›\ÎžØ][ÒSŽžÝ\NˆšH‹˜[YNŒ_KØÜ™Y[”Ú^™NžÝ\NˆŒˆ‹˜[YN›™]ÈË’NVJÚ[™ÝËš[›™\•ÚYÚ[™ÝËš[›™\’ZYÚ
__K™\^ÚY\Žš›Kœ˜YÛY[ÚY\Ž•›KÚYNœËšK›[™[™ÎœË‘V›Ë˜[œÜ\™[ˆL\Üš]NˆL_JK[™]ÈË™XQŠ‹JNÛœØØ[K˜ÛÜJK”[
K›][\TØØ[\ŠKŒŠK\Ë˜˜\ÚXÐ][ÜÜ\™K˜Y

K\Ëœ™X[\ÝXÓYÚ[™ÔÜÚ][Û^Þ‹KKNŒŽŒ_K\Ë™›ÙÏ^Ù[˜X›NˆL\Ý[˜ÙN–›_K\Ëœ™X[\ÝXÐ][ÜÜ\™R[š]\˜[\ÏYK’ÜÙNžÒÜŽ‹ŒKÛN‹ŒMKTÝ[ŽŒŒÎ‹KŽMK[›™\”˜Y]\ÎMKÝ]\”˜Y]\ÎÙMKØ]™[[™Ý–ËKMËÍWKØØ[Q\‹Œ_K\Ë›Øš™XÝÙ\]SX]š^ÛÜ›

_]\]JKŠ^Ü‹›X]\šX[œÙ][šY›Ü›J™›ÙÑ\Ý[˜ÙH‹\Ë™›ÙË™\Ý[˜ÙJK‹›X]\šX[œÙ][šY›Ü›J›YÚ[™Ñ[˜X›Y‹\Ëœ™X[\ÝXÐ][ÜÜ\™Kš\ÚX›JK‹›X]\šX[œÙ][šY›Ü›J›YÚÜÚ][Ûˆ‹\Ëœ™X[\ÝXÓYÚ[™ÔÜÚ][ÛŠ_\™U\]J
^ØÛÛœÝO]šY]Ë˜Ø[Y\˜LÑœÜÚ][ÛŽÚYŠ\Ë™›ÙË™[˜X›J^Ü[KœÙ]œ›ÛSX]š^ÜÚ][ÛŠšY]Ë[S^Y\‹›Øš™XÝÙ›X]š^ÛÜ›
NØÛÛœÝ\[K™\Ý[˜ÙUÊJNÝ\Ë™›ÙË™\Ý[˜ÙOV›JŠŒJŠ‹KŽNJšK”[ž
KÚK”[ž
JŠŒK_Y[ÙH\Ë™›ÙË™\Ý[˜ÙOLYLLNØÛÛœÝ]šY]Ë›XZ[“ÛÜ™Ùž[™Ú[™Kœ™[™\™\ŽÕÛK˜ÜœÏ]šY]Ëœ™Y™\™[˜ÙPÜœËÛKœÙ]œ›ÛU™XÝÜŒÊJK˜\Ê‘TÑÎÌˆ‹[JNØÛÛœÝV[K˜[]YNÛÛOÊ	K˜ÛÜJ›JK›\œ
K
ÛK[ŠKÒÛJK‹œÙ]ÛX\ÛÛÜŠ	K‹™Ù]ÛX\[J
JJNœ‹œÙ]ÛX\ÛÛÜŠ›K‹™Ù]ÛX\[J
J_WÚ[š]™X[\ÝXÓYÚš[™Ê
^ØÛÛœÝ]\Ëœ™X[\ÝXÐ][ÜÜ\™R[š]\˜[\ËO^ÝŒÓYÚÜÚ][ÛŽžÝ˜[YN’K˜ÛÛ™J
K››Ü›X[^™J
_KŒÒ[•Ø]™[[™ÝžÝ˜[YN›™]ÈË”L
KÝØ]™[[™ÝÌJŠKÝØ]™[[™ÝÌWJŠKÝØ]™[[™ÝÌ—JŠ
_KØ[Y\˜RZYÚžÝ˜[YNŒKØ[Y\˜RZYÚŽžÝ˜[YNŒK’[›™\”˜Y]\ÎžÝ˜[YNš[›™\”˜Y]\ßK’[›™\”˜Y]\ÌŽžÝ˜[YNš[›™\”˜Y]\Êš[›™\”˜Y]\ßK“Ý]\”˜Y]\ÎžÝ˜[YN›Ý]\”˜Y]\ßK“Ý]\”˜Y]\ÌŽžÝ˜[YN›Ý]\”˜Y]\Ê›Ý]\”˜Y]\ßK’Ü‘TÝ[ŽžÝ˜[YN’ÜŠ‘TÝ[ŸK’ÛQTÝ[ŽžÝ˜[YN’ÛJ‘TÝ[ŸK’ÜNžÝ˜[YN
’ÜŠ“X]”_K’ÛMNžÝ˜[YN
’ÛJ“X]”_K”ØØ[NžÝ˜[YNŒKÊ›Ý]\”˜Y]\Ë]š[›™\”˜Y]\Ê_K”ØØ[Q\žÝ˜[YNœØØ[Q\K”ØØ[SÝ™\”ØØ[Q\žÝ˜[YNŒKÊ›Ý]\”˜Y]\Ë]š[›™\”˜Y]\ÊKÝœØØ[Q\KÎžÝ˜[YN™ßKÌŽžÝ˜[YN™Ê™ßK”Ø[\\ÎžÝ˜[YNŒßK”Ø[\\ÎžÝ˜[YNŒßK\ÜXÙ[Y[žÝ˜[YN›™]ÈË™ÔKÚÞX›ÞY™\ÙNžÝ˜[YN›™]ÈË™ÔK“šYÚØØ[NžÝ˜[YNŒ__K[™]ÈË‘ÝI
š[›™\”˜Y]\ËLL
K[™]ÈË’ÚÊÝ[šY›Ü›\Î™K™\^ÚY\Žˆ[šY›Ü›H™XÌÈŒÓYÚÜÚ][ÛŽÈËÈH\™XÝ[Ûˆ™XÝÜˆÈHYÚÛÝ\˜ÙW[šY›Ü›H™XÌÈŒÒ[•Ø]™[[™ÝÈËÈHÈÝÊØ]™[[™Ý
H›ÜˆH™YÜ™Y[‹[™›YHÚ[›™[×[šY›Ü›H›Ø]Ø[Y\˜RZYÚÈËÈHØ[Y\˜IÜÈÝ\œ™[ZYÚ[šY›Ü›H›Ø]Ø[Y\˜RZYÚŽÈËÈØ[Y\˜RZYÚŒ—[šY›Ü›H›Ø]“Ý]\”˜Y]\ÎÈËÈHÝ]\ˆ
][ÜÜ\™JH˜Y]\×[šY›Ü›H›Ø]“Ý]\”˜Y]\ÌŽÈËÈ“Ý]\”˜Y]\×Œ—[šY›Ü›H›Ø]’[›™\”˜Y]\ÎÈËÈH[›™\ˆ
[™]\žJH˜Y]\×[šY›Ü›H›Ø]’[›™\”˜Y]\ÌŽÈËÈ’[›™\”˜Y]\×Œ—[šY›Ü›H›Ø]’Ü‘TÝ[ŽÈËÈÜˆ
ˆTÝ[—[šY›Ü›H›Ø]’ÛQTÝ[ŽÈËÈÛH
ˆTÝ[—[šY›Ü›H›Ø]’ÜNÈËÈÜˆ
ˆ
ˆW[šY›Ü›H›Ø]’ÛMNÈËÈÛH
ˆ
ˆW[šY›Ü›H›Ø]”ØØ[NÈËÈHÈ
“Ý]\”˜Y]\ÈH’[›™\”˜Y]\ÊW[šY›Ü›H›Ø]”ØØ[Q\ÈËÈHØØ[H\
K™KˆH[]YH]ÚXÚH][ÜÜ\™IÜÈ]™\˜YÙH[œÚ]H\È›Ý[™
W[šY›Ü›H›Ø]”ØØ[SÝ™\”ØØ[Q\ÈËÈ”ØØ[HÈ”ØØ[Q\—˜\žZ[™È™XÌÈÌ×˜\žZ[™È™XÌÈÌN×—˜ÛÛœÝ[”Ø[\\ÈHÎ×˜ÛÛœÝ›Ø]”Ø[\\ÈHËŒ×—™›Ø]ØØ[J›Ø]ÛÜÊWž×ˆ›Ø]HKŒHÛÜÎ×ˆ™]\›ˆ”ØØ[Q\
ˆ^
LŒŽÈ
È
ŠNH
È
ŠËŽÈ
È
ŠM‹Ž
È
KŒJJJJN×ŸW—›ÚYXZ[Š›ÚY
H×—ˆ›Ø]Ø[Y\˜RZYÚˆH[™Ý
Ø[Y\˜TÜÚ][ÛŠH
ˆ[™Ý
Ø[Y\˜TÜÚ][ÛŠN×—ˆËÈÙ]H˜^Hœ›ÛHHØ[Y\˜HÈH™\^[™]È[™Ý
ÚXÚ\ÈH˜\ˆÚ[ÙˆH˜^H\ÜÚ[™È›ÝYÚH][ÜÜ\™JWˆ™XÌÈŒÔ˜^HHÜÚ][ÛˆHØ[Y\˜TÜÚ][ÛŽ×ˆ›Ø]‘˜\ˆH[™Ý
ŒÔ˜^JN×ˆŒÔ˜^HÏH‘˜\Ž×—ˆËÈØ[Ý[]HHÛÜÙ\Ý[\œÙXÝ[ÛˆÙˆH˜^HÚ]HÝ]\ˆ][ÜÜ\™H
ÚXÚ\ÈH™X\ˆÚ[ÙˆH˜^H\ÜÚ[™È›ÝYÚH][ÜÜ\™JWˆ›Ø]ˆH‹Œ
ˆÝ
Ø[Y\˜TÜÚ][Û‹ŒÔ˜^JN×ˆ›Ø]ÈHØ[Y\˜RZYÚˆH“Ý]\”˜Y]\ÌŽ×ˆ›Ø]‘]HX^
ŒŠˆHŒ
ˆÊN×ˆ›Ø]“™X\ˆHH
ˆ
PˆHÜ\
‘]
JN×—ˆËÈØ[Ý[]HH˜^IÜÈÝ\[™ÈÜÚ][Û‹[ˆØ[Ý[]H]ÈØØ]\š[™ÈÙ™œÙ]ˆ™XÌÈŒÔÝ\HØ[Y\˜TÜÚ][Ûˆ
ÈŒÔ˜^H
ˆ“™X\Ž×ˆ‘˜\ˆOH“™X\Ž×ˆ›Ø]‘\H^

’[›™\”˜Y]\ÈH“Ý]\”˜Y]\ÊHÈ”ØØ[Q\
N×ˆ›Ø]Ø[Y\˜P[™ÛHHÝ
]ŒÔ˜^KÜÚ][ÛŠHÈ[™Ý
ÜÚ][ÛŠN×ˆ›Ø]“YÚ[™ÛHHÝ
ŒÓYÚÜÚ][Û‹ÜÚ][ÛŠHÈ[™Ý
ÜÚ][ÛŠN×ˆ›Ø]Ø[Y\˜TØØ[HHØØ[JØ[Y\˜P[™ÛJN×ˆ›Ø]“YÚØØ[HHØØ[J“YÚ[™ÛJN×ˆ›Ø]Ø[Y\˜SÙ™œÙ]H‘\
™Ø[Y\˜TØØ[N×ˆ›Ø]•[\H
“YÚØØ[H
ÈØ[Y\˜TØØ[JN×—ˆËÈ[š]X[^™HHØØ]\š[™ÈÛÜ˜\šXX›\×ˆ›Ø]”Ø[\S[™ÝH‘˜\ˆÈ”Ø[\\Î×ˆ›Ø]”ØØ[Y[™ÝH”Ø[\S[™Ý
ˆ”ØØ[N×ˆ™XÌÈŒÔØ[\T˜^HHŒÔ˜^H
ˆ”Ø[\S[™Ý×ˆ™XÌÈŒÔØ[\TÚ[HŒÔÝ\
ÈŒÔØ[\T˜^H
ˆN×—ˆËÈ›ÝÈÛÜ›ÝYÚHØ[\H˜^\×ˆ™XÌÈŒÑœ›ÛÛÛÜˆH™XÌÊŒŒŒ
N×ˆ™XÌÈŒÐ][X]HH™XÌÊŒŒŒ
N×ˆ›ÜŠ[OLÈO”Ø[\\ÎÈJÊÊWˆ×ˆ›Ø]’ZYÚH[™Ý
ŒÔØ[\TÚ[
N×ˆ›Ø]‘\H^
”ØØ[SÝ™\”ØØ[Q\
ˆ
’[›™\”˜Y]\ÈH’ZYÚ
JN×ˆ›Ø]”ØØ]\ˆH‘\
™•[\HØ[Y\˜SÙ™œÙ]×ˆŒÐ][X]HH^
Y”ØØ]\ˆ
ˆ
ŒÒ[•Ø]™[[™Ý
ˆ’ÜH
È’ÛMJJN×ˆŒÑœ›ÛÛÛÜˆ
ÏHŒÐ][X]H
ˆ
‘\
ˆ”ØØ[Y[™Ý
N×ˆŒÔØ[\TÚ[
ÏHŒÔØ[\T˜^N×ˆW—ˆËÈØ[Ý[]HH][X][Ûˆ˜XÝÜˆ›ÜˆHÜ›Ý[™ˆÌHŒÐ][X]N×ˆÌHHŒÑœ›ÛÛÛÜˆ
ˆ
ŒÒ[•Ø]™[[™Ý
ˆ’Ü‘TÝ[ˆ
È’ÛQTÝ[ŠN×—ˆÛÔÜÚ][ÛˆH›Ú™XÝ[Û“X]š^
ˆ[Ù[šY]ÓX]š^
ˆ™XÍ
ÜÚ][Û‹KŒ
N×ŸH‹œ˜YÛY[ÚY\Žˆ˜\žZ[™È™XÌÈÌ×˜\žZ[™È™XÌÈÌN×—›ÚYXZ[ˆ
›ÚY
H×—ÛÑœ˜YÐÛÛÜˆH™XÍ
ÌKKŒHÌÍŠN×ŸH‹›[™[™ÎœË‘V›Ë˜[œÜ\™[ˆL\\ÝˆLK\Üš]NˆL_JKO[™]ÈË™XQŠ‹ŠKÏ[™]ÈË‘ÝI
›Ý]\”˜Y]\ËNM‹NMŠKO[™]ÈË’ÚÊÝ[šY›Ü›\Î™K™\^ÚY\Žˆ[šY›Ü›H™XÌÈŒÓYÚÜÚ][ÛŽÈËÈH\™XÝ[Ûˆ™XÝÜˆÈHYÚÛÝ\˜ÙW[šY›Ü›H™XÌÈŒÒ[•Ø]™[[™ÝÈËÈHÈÝÊØ]™[[™Ý
H›ÜˆH™YÜ™Y[‹[™›YHÚ[›™[×[šY›Ü›H›Ø]Ø[Y\˜RZYÚÈËÈHØ[Y\˜IÜÈÝ\œ™[ZYÚ[šY›Ü›H›Ø]Ø[Y\˜RZYÚŽÈËÈØ[Y\˜RZYÚŒ—[šY›Ü›H›Ø]“Ý]\”˜Y]\ÎÈËÈHÝ]\ˆ
][ÜÜ\™JH˜Y]\×[šY›Ü›H›Ø]“Ý]\”˜Y]\ÌŽÈËÈ“Ý]\”˜Y]\×Œ—[šY›Ü›H›Ø]’[›™\”˜Y]\ÎÈËÈH[›™\ˆ
[™]\žJH˜Y]\×[šY›Ü›H›Ø]’[›™\”˜Y]\ÌŽÈËÈ’[›™\”˜Y]\×Œ—[šY›Ü›H›Ø]’Ü‘TÝ[ŽÈËÈÜˆ
ˆTÝ[—[šY›Ü›H›Ø]’ÛQTÝ[ŽÈËÈÛH
ˆTÝ[—[šY›Ü›H›Ø]’ÜNÈËÈÜˆ
ˆ
ˆW[šY›Ü›H›Ø]’ÛMNÈËÈÛH
ˆ
ˆW[šY›Ü›H›Ø]”ØØ[NÈËÈHÈ
“Ý]\”˜Y]\ÈH’[›™\”˜Y]\ÊW[šY›Ü›H›Ø]”ØØ[Q\ÈËÈHØØ[H\
K™KˆH[]YH]ÚXÚH][ÜÜ\™IÜÈ]™\˜YÙH[œÚ]H\È›Ý[™
W[šY›Ü›H›Ø]”ØØ[SÝ™\”ØØ[Q\ÈËÈ”ØØ[HÈ”ØØ[Q\—˜ÛÛœÝ[”Ø[\\ÈHÎ×˜ÛÛœÝ›Ø]”Ø[\\ÈHËŒ×—˜\žZ[™È™XÌÈŒÑ\™XÝ[ÛŽ×˜\žZ[™È™XÌÈÌ×˜\žZ[™È™XÌÈÌN×—™›Ø]ØØ[J›Ø]ÛÜÊH×ˆ›Ø]HKŒHÛÜÎ×ˆ™]\›ˆ”ØØ[Q\
ˆ^
LŒŽÈ
È
ŠNH
È
ŠËŽÈ
È
ŠM‹Ž
È
KŒJJJJN×ŸW—›ÚYXZ[Š›ÚY
H×ˆ›Ø][™ÝØ[Y\˜HH[™Ý
Ø[Y\˜TÜÚ][ÛŠN×ˆ›Ø]Ø[Y\˜RZYÚˆH[™ÝØ[Y\˜H
ˆ[™ÝØ[Y\˜N×—ˆËÈÙ]H˜^Hœ›ÛHHØ[Y\˜HÈH™\^[™]È[™Ý
ÚXÚ\ÈH˜\ˆÚ[ÙˆH˜^H\ÜÚ[™È›ÝYÚH][ÜÜ\™JWˆ™XÌÈŒÔ˜^HHÜÚ][ÛˆHØ[Y\˜TÜÚ][ÛŽ×ˆ›Ø]‘˜\ˆH[™Ý
ŒÔ˜^JN×ˆŒÔ˜^HÏH‘˜\Ž×—ˆËÈØ[Ý[]HHÛÜÙ\Ý[\œÙXÝ[ÛˆÙˆH˜^HÚ]HÝ]\ˆ][ÜÜ\™H
ÚXÚ\ÈH™X\ˆÚ[ÙˆH˜^H\ÜÚ[™È›ÝYÚH][ÜÜ\™JWˆ›Ø]ˆH‹Œ
ˆÝ
Ø[Y\˜TÜÚ][Û‹ŒÔ˜^JN×ˆ›Ø]ÈHØ[Y\˜RZYÚˆH“Ý]\”˜Y]\ÌŽ×ˆ›Ø]‘]HX^
ŒŠˆHŒ
ˆÊN×ˆ›Ø]“™X\ˆHH
ˆ
PˆHÜ\
‘]
JN×—ˆËÈØ[Ý[]HH˜^IÜÈÝ\[™ÈÜÚ][Û‹[ˆØ[Ý[]H]ÈØØ]\š[™ÈÙ™œÙ]ˆ™XÌÈŒÔÝ\HØ[Y\˜TÜÚ][Ûˆ
ÈŒÔ˜^H
ˆ“™X\Ž×ˆ‘˜\ˆOH“™X\Ž×ˆ›Ø]”Ý\[™ÛHHÝ
ŒÔ˜^KŒÔÝ\
HÈ“Ý]\”˜Y]\Î×ˆ›Ø]”Ý\\H^
LKŒÈ”ØØ[Q\
N×ˆ›Ø]”Ý\Ù™œÙ]H”Ý\\
ˆØØ[J”Ý\[™ÛJN×—ˆËÈ[š]X[^™HHØØ]\š[™ÈÛÜ˜\šXX›\×ˆ›Ø]”Ø[\S[™ÝH‘˜\ˆÈ”Ø[\\Î×ˆ›Ø]”ØØ[Y[™ÝH”Ø[\S[™Ý
ˆ”ØØ[N×ˆ™XÌÈŒÔØ[\T˜^HHŒÔ˜^H
ˆ”Ø[\S[™Ý×ˆ™XÌÈŒÔØ[\TÚ[HŒÔÝ\
ÈŒÔØ[\T˜^H
ˆN×—ˆËÈ›ÝÈÛÜ›ÝYÚHØ[\H˜^\×ˆ™XÌÈŒÑœ›ÛÛÛÜˆH™XÌÊŒŒŒ
N×ˆ›ÜŠ[OLÈO”Ø[\\ÎÈJÊÊWˆ×ˆ›Ø]’ZYÚH[™Ý
ŒÔØ[\TÚ[
N×ˆ›Ø]‘\H^
”ØØ[SÝ™\”ØØ[Q\
ˆ
’[›™\”˜Y]\ÈH’ZYÚ
JN×ˆ›Ø]“YÚ[™ÛHHÝ
ŒÓYÚÜÚ][Û‹ŒÔØ[\TÚ[
HÈ’ZYÚ×ˆ›Ø]Ø[Y\˜P[™ÛHHÝ
ŒÔ˜^KŒÔØ[\TÚ[
HÈ’ZYÚ×ˆ›Ø]”ØØ]\ˆH
”Ý\Ù™œÙ]
È‘\
ˆ
ØØ[J“YÚ[™ÛJHHØØ[JØ[Y\˜P[™ÛJJJN×ˆ™XÌÈŒÐ][X]HH^
Y”ØØ]\ˆ
ˆ
ŒÒ[•Ø]™[[™Ý
ˆ’ÜH
È’ÛMJJN×—ˆŒÑœ›ÛÛÛÜˆ
ÏHŒÐ][X]H
ˆ
‘\
ˆ”ØØ[Y[™Ý
N×ˆŒÔØ[\TÚ[
ÏHŒÔØ[\T˜^N×ˆW—ˆËÈš[˜[KØØ[HHZYH[™˜^[ZYÚÛÛÜœÈ[™Ù]\H˜\žZ[™È˜\šXX›\È›ÜˆH^[ÚY\—ˆÛÔÜÚ][ÛˆH›Ú™XÝ[Û“X]š^
ˆ[Ù[šY]ÓX]š^
ˆ™XÍ
ÜÚ][Û‹KŒ
N×ˆÌHŒÑœ›ÛÛÛÜˆ
ˆ
ŒÒ[•Ø]™[[™Ý
ˆ’Ü‘TÝ[ŠN×ˆÌHHŒÑœ›ÛÛÛÜˆ
ˆ’ÛQTÝ[Ž×ˆŒÑ\™XÝ[ÛˆHØ[Y\˜TÜÚ][ÛˆHÜÚ][ÛŽ×ŸH‹œ˜YÛY[ÚY\Žˆ[šY›Ü›H™XÌÈŒÓYÚÜÎ×[šY›Ü›H›Ø]Î×[šY›Ü›H›Ø]ÌŽ×—˜\žZ[™È™XÌÈŒÑ\™XÝ[ÛŽ×˜\žZ[™È™XÌÈÌ×˜\žZ[™È™XÌÈÌN×—‹ËÈØ[Ý[]\ÈHZYH\ÙH[˜Ý[Û—™›Ø]Ù]ZYT\ÙJ›Ø]ÛÜË›Ø]ÛÜÌ‹›Ø]Ë›Ø]ÌŠH×ˆ™]\›ˆKH
ˆ

KŒHÌŠHÈ
‹Œ
ÈÌŠJH
ˆ
KŒ
ÈÛÜÌŠHÈÝÊKŒ
ÈÌˆH‹Œ
ˆÈ
ˆÛÜËKJN×ŸW—‹ËÈØ[Ý[]\ÈH˜^[ZYÚ\ÙH[˜Ý[Û—™›Ø]Ù]˜^[ZYÚ\ÙJ›Ø]ÛÜÌŠH×ˆ™]\›ˆÍH
ÈÍH
ˆÛÜÌŽ×ŸW—›ÚYXZ[ˆ
›ÚY
H×ˆ›Ø]ÛÜÈHÝ
ŒÓYÚÜËŒÑ\™XÝ[ÛŠHÈ[™Ý
ŒÑ\™XÝ[ÛŠN×ˆ›Ø]ÛÜÌˆHÛÜÈ
ˆÛÜÎ×—ˆ™XÌÈÛÛÜˆHÙ]˜^[ZYÚ\ÙJÛÜÌŠH
ˆÌ
ÈÙ]ZYT\ÙJÛÜËÛÜÌ‹ËÌŠH
ˆÌN×—ˆÛÑœ˜YÐÛÛÜˆH™XÍ
ÛÛÜ‹KŒ
N×ˆÛÑœ˜YÐÛÛÜ‹˜HHÛÑœ˜YÐÛÛÜ‹˜Ž×ŸH‹˜[œÜ\™[ˆLÚYNœËšÖJK[™]ÈË™XQŠËJKÏ[™]È[NØË™œ\Ý[PÝ[YHLK\Ëœ™X[\ÝXÐ][ÜÜ\™K˜Y
JK\Ëœ™X[\ÝXÐ][ÜÜ\™K˜Y

K\Ëœ™X[\ÝXÐ][ÜÜ\™K˜Y
ÊNØË›X]\šX[[šY›Ü›\Ë\˜šY]K˜[YOLLË›X]\šX[[šY›Ü›\Ëœ™Z[ZYÚ˜[YOL‹Ë›X]\šX[[šY›Ü›\Ë›[Z[˜[˜ÙP][ÜÜ\™K˜[YOLKË›X]\šX[[šY›Ü›\Ë›ZYPÛÙY™šXÚY[˜[YOKŒKË›X]\šX[[šY›Ü›\Ë›ZYQ\™XÝ[Û˜[Ë˜[YOKŽË›X]\šX[[šY›Ü›\Ë\˜[YO[™]ÈË”L\Ù]™X[\ÝXÓÛŠ
^Ý	‰Š\Ëœ™X[\ÝXÐ][ÜÜ\™K˜Ú[™[‹›[™Ý\Ë—Ú[š]™X[\ÝXÓYÚš[™Ê
K\Ëœ™X[\ÝXÓYÚ[™ÔÜÚ][ÛZK“•™Ù]Ý[”ÜÚ][Û’[”ØÙ[™J
™]È]JK™Ù][YJ
KŽK‹ŒÍJK››Ü›X[^™J
K\Ëœ™X[\ÝXÐ][ÜÜ\™K˜Ú[™[‹™›Ü‘XXÚ

O›X]\šX[[šY›Ü›\ËŒÓYÚÜÚ][Û‹˜[YK˜ÛÜJ\Ëœ™X[\ÝXÓYÚ[™ÔÜÚ][ÛŠJJJK\Ë˜˜\ÚXÐ][ÜÜ\™Kš\ÚX›OH]\Ëœ™X[\ÝXÐ][ÜÜ\™Kš\ÚX›O]_KYÏ^Ò[™Y™\ÜÎ“Øš™XÝ™œ™Y^™JÓ“Ó‘Nˆ››Û™H‹Q•ˆ›Y‹’QÒˆœšYÚŸJKÛÛ\Û™[Ý]N“Øš™XÝ™œ™Y^™JÑQUSˆ™Y˜][‹ÕPÒQˆÝXÚY‹‘TÔÑQˆœ™\ÜÙYŸJKÛÛ\Û™[›Ü\N“Øš™XÝ™œ™Y^™JÐ•UÓŽˆ˜]Ûˆ‹ÐVTÎˆž^\È‹WÐVTÎˆžP^\È‹ÕUNˆœÝ]HŸJKÛÛ\Û™[\N“Øš™XÝ™œ™Y^™JÕ’QÑÑTŽˆšYÙÙ\ˆ‹ÔUQQV‘NˆœÜ]YY^™H‹ÕPÒQˆÝXÚY‹SP”ÕPÒÎˆ[XœÝXÚÈ‹•UÓŽˆ˜]ÛˆŸJK]Û•ÝXÚ™\ÚÛ‹ŒK^\ÕÝXÚ™\ÚÛ‹ŒKš\ÝX[™\ÜÛœÙT›Ü\N“Øš™XÝ™œ™Y^™JÕS”Ñ“Ô“Nˆ˜[œÙ›Ü›H‹’TÒP’SUNˆš\ÚXš[]HŸJ_NØ\Þ[˜È[˜Ý[Ûˆ™Ê
^ØÛÛœÝOX]ØZ]™]Ú

NÚYŠK›ÚÊ\™]\›ˆKšœÛÛŠ
NÝ›ÝÈ™]È\œ›ÜŠKœÝ]\Õ^
_XÛÛœÝ™Ï^Þ^\ÎŒP^\ÎŒ]ÛŽŒÝ]N™YËÛÛ\Û™[Ý]K‘QUSNØÛ\ÜÈYÞØÛÛœÝXÝÜŠ
^Ý\Ë˜ÛÛ\Û™[›Ü\O]˜ÛÛ\Û™[›Ü\K\ËœÝ]\Ï]œÝ]\Ë\Ë˜[YS›ÙS˜[YO]˜[YS›ÙS˜[YK\Ë˜[YS›ÙT›Ü\O]˜[YS›ÙT›Ü\K\Ë˜[YS›ÙT›Ü\OOOYYË•š\ÝX[™\ÜÛœÙT›Ü\K•S”Ñ“Ô“I‰Š\Ë›Z[“›ÙS˜[YO]›Z[“›ÙS˜[YK\Ë›X^›ÙS˜[YO]›X^›ÙS˜[YJK\Ë˜[YOL\Ë\]Qœ›ÛPÛÛ\Û™[
™Ê_]\]Qœ›ÛPÛÛ\Û™[
Þ^\ÎP^\Î™K]ÛŽœ‹Ý]N›ŸJ^ØÛÛœÝÛ›Ü›X[^™Y^\ÎšK›Ü›X[^™YP^\ÎœßOY[˜Ý[ÛŠLOL
^Û]]YNÚYŠX]œÜ\


ÙJ™JOŒJ^ØÛÛœÝOSX]˜][ŒŠK
NÜSX]˜ÛÜÊJKSX]œÚ[ŠJ_\™]\›žÛ›Ü›X[^™Y^\Î‹JœŠËK›Ü›X[^™YP^\Î‹J›ŠË__JJNÜÝÚ]Ú
\Ë˜ÛÛ\Û™[›Ü\J^ØØ\ÙHYËÛÛ\Û™[›Ü\K–ÐVTÎ\Ë˜[YO]\ËœÝ]\Ëš[˜ÛY\ÊŠOÚN‹NØœ™XZÎØØ\ÙHYËÛÛ\Û™[›Ü\K–WÐVTÎ\Ë˜[YO]\ËœÝ]\Ëš[˜ÛY\ÊŠOÜÎ‹NØœ™XZÎØØ\ÙHYËÛÛ\Û™[›Ü\K•UÓŽ\Ë˜[YO]\ËœÝ]\Ëš[˜ÛY\ÊŠOÜŽŒØœ™XZÎØØ\ÙHYËÛÛ\Û™[›Ü\K”ÕUN\Ë˜[YS›ÙT›Ü\OOOYYË•š\ÝX[™\ÜÛœÙT›Ü\K•’TÒP’SUOÝ\Ë˜[YO]\ËœÝ]\Ëš[˜ÛY\ÊŠN\Ë˜[YO]\ËœÝ]\Ëš[˜ÛY\ÊŠOÌNŒØœ™XZÎÙY˜][›ÝÈ™]È\œ›ÜŠ[™^XÝYš\ÝX[™\ÜÛœÙHÛÛ\Û™[›Ü\H	Ý\Ë˜ÛÛ\Û™[›Ü\_X
___XÛ\ÜÈÙÞØÛÛœÝXÝÜŠJ^ÚYŠJ	‰™I‰™Kš\ÝX[™\ÜÛœÙ\É‰™K™Ø[Y\Y[™XÙ\É‰ŒOOSØš™XÝšÙ^\ÊK™Ø[Y\Y[™XÙ\ÊK›[™Ý
J]›ÝÈ™]È\œ›ÜŠ’[˜[Y\™Ý[Y[ÈÝ\YYŠNÝ\ËšY]\Ë\OYK\K\Ëœ›ÛÝ›ÙS˜[YOYKœ›ÛÝ›ÙS˜[YK\ËÝXÚÚ[›ÙS˜[YOYKÝXÚÚ[›ÙS˜[YK\Ëš\ÝX[™\ÜÛœÙ\Ï^ßKØš™XÝšÙ^\ÊKš\ÝX[™\ÜÛœÙ\ÊK™›Ü‘XXÚ

OžØÛÛœÝ[™]ÈYÊKš\ÝX[™\ÜÛœÙ\ÖÝJNÝ\Ëš\ÝX[™\ÜÛœÙ\ÖÝO\ŸJJK\Ë™Ø[Y\Y[™XÙ\ÏSØš™XÝ˜\ÜÚYÛŠßKK™Ø[Y\Y[™XÙ\ÊK\Ë˜[Y\Ï^ÜÝ]N™YËÛÛ\Û™[Ý]K‘QUS]ÛŽ›ÚYOO]\Ë™Ø[Y\Y[™XÙ\Ë˜]ÛÌ›ÚY^\Î›ÚYOO]\Ë™Ø[Y\Y[™XÙ\Ëž^\ÏÌ›ÚYP^\Î›ÚYOO]\Ë™Ø[Y\Y[™XÙ\ËžP^\ÏÌ›ÚY_YÙ]]J
^Ü™]\›žÚY\ËšY‹‹\Ë˜[Y\ß_]\]Qœ›ÛQØ[Y\Y

^ÚYŠ\Ë˜[Y\ËœÝ]OYYËÛÛ\Û™[Ý]K‘QUS›ÚYOO]\Ë™Ø[Y\Y[™XÙ\Ë˜]Û‰‰˜]ÛœË›[™Ý\Ë™Ø[Y\Y[™XÙ\Ë˜]ÛŠ^ØÛÛœÝO]˜]ÛœÖÝ\Ë™Ø[Y\Y[™XÙ\Ë˜]Û—NÝ\Ë˜[Y\Ë˜]ÛYK˜[YK\Ë˜[Y\Ë˜]Û]\Ë˜[Y\Ë˜]ÛÌ\Ë˜[Y\Ë˜]Û‹\Ë˜[Y\Ë˜]Û]\Ë˜[Y\Ë˜]ÛŒOÌN\Ë˜[Y\Ë˜]Û‹Kœ™\ÜÙYOOO]\Ë˜[Y\Ë˜]ÛÝ\Ë˜[Y\ËœÝ]OYYËÛÛ\Û™[Ý]K”‘TÔÑQŠKÝXÚY\Ë˜[Y\Ë˜]Û™YË]Û•ÝXÚ™\ÚÛ
I‰Š\Ë˜[Y\ËœÝ]OYYËÛÛ\Û™[Ý]K•ÕPÒQ
_]›ÚYOO]\Ë™Ø[Y\Y[™XÙ\Ëž^\É‰˜^\Ë›[™Ý\Ë™Ø[Y\Y[™XÙ\Ëž^\É‰Š\Ë˜[Y\Ëž^\Ï]˜^\ÖÝ\Ë™Ø[Y\Y[™XÙ\Ëž^\×K\Ë˜[Y\Ëž^\Ï]\Ë˜[Y\Ëž^\ÏLOËLN\Ë˜[Y\Ëž^\Ë\Ë˜[Y\Ëž^\Ï]\Ë˜[Y\Ëž^\ÏŒOÌN\Ë˜[Y\Ëž^\Ë\Ë˜[Y\ËœÝ]OOOYYËÛÛ\Û™[Ý]K‘QUS	‰“X]˜XœÊ\Ë˜[Y\Ëž^\ÊO™YË^\ÕÝXÚ™\ÚÛ	‰Š\Ë˜[Y\ËœÝ]OYYËÛÛ\Û™[Ý]K•ÕPÒQ
JK›ÚYOO]\Ë™Ø[Y\Y[™XÙ\ËžP^\É‰˜^\Ë›[™Ý\Ë™Ø[Y\Y[™XÙ\ËžP^\É‰Š\Ë˜[Y\ËžP^\Ï]˜^\ÖÝ\Ë™Ø[Y\Y[™XÙ\ËžP^\×K\Ë˜[Y\ËžP^\Ï]\Ë˜[Y\ËžP^\ÏLOËLN\Ë˜[Y\ËžP^\Ë\Ë˜[Y\ËžP^\Ï]\Ë˜[Y\ËžP^\ÏŒOÌN\Ë˜[Y\ËžP^\Ë\Ë˜[Y\ËœÝ]OOOYYËÛÛ\Û™[Ý]K‘QUS	‰“X]˜XœÊ\Ë˜[Y\ËžP^\ÊO™YË^\ÕÝXÚ™\ÚÛ	‰Š\Ë˜[Y\ËœÝ]OYYËÛÛ\Û™[Ý]K•ÕPÒQ
JKØš™XÝ˜[Y\Ê\Ëš\ÝX[™\ÜÛœÙ\ÊK™›Ü‘XXÚ

OžÝ\]Qœ›ÛPÛÛ\Û™[
\Ë˜[Y\Ê_JJ__XÛ\ÜÈÙÞØÛÛœÝXÝÜŠKŠ^ÚYŠ]
]›ÝÈ™]È\œ›ÜŠ“›È’[œ]ÛÝ\˜ÙHÝ\YYŠNÚYŠYJ]›ÝÈ™]È\œ›ÜŠ“›È›Ùš[HÝ\YYŠNÝ\Ëž’[œ]ÛÝ\˜ÙO]\Ë˜\ÜÙ]\›\‹\ËšYYKœ›Ùš[RY\Ë›^[Ý]\ØÜš\[ÛYK›^[Ý]ÖÝš[™Y™\Ü×K\Ë˜ÛÛ\Û™[Ï^ßKØš™XÝšÙ^\Ê\Ë›^[Ý]\ØÜš\[Û‹˜ÛÛ\Û™[ÊK™›Ü‘XXÚ

OžØÛÛœÝO]\Ë›^[Ý]\ØÜš\[Û‹˜ÛÛ\Û™[ÖÝNÝ\Ë˜ÛÛ\Û™[ÖÝO[™]ÈÙÊJ_JJK\Ë\]Qœ›ÛQØ[Y\Y

_YÙ]Üš\ÜXÙJ
^Ü™]\›ˆ\Ëž’[œ]ÛÝ\˜ÙK™Üš\ÜXÙ_YÙ]\™Ù]˜^TÜXÙJ
^Ü™]\›ˆ\Ëž’[œ]ÛÝ\˜ÙK\™Ù]˜^TÜXÙ_YÙ]]J
^ØÛÛœÝV×NÜ™]\›ˆØš™XÝ˜[Y\Ê\Ë˜ÛÛ\Û™[ÊK™›Ü‘XXÚ

OOžÝœ\Ú
K™]J_JJK]\]Qœ›ÛQØ[Y\Y

^ÓØš™XÝ˜[Y\Ê\Ë˜ÛÛ\Û™[ÊK™›Ü‘XXÚ

OžÝ\]Qœ›ÛQØ[Y\Y
\Ëž’[œ]ÛÝ\˜ÙK™Ø[Y\Y
_JJ__XÛ\ÜÈYÈ^[™ÈËŽ^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë›[Ý[ÛÛÛ›Û\[[\Ë™[“X\[[\Ù][š\›Û›Y[X\

^Ü™]\›ˆ\Ë™[“X\O]
\Ë™[“X\]\Ë˜]™\œÙJ
OžÝš\ÓY\Ú	‰Š›X]\šX[™[“X\]\Ë™[“X\›X]\šX[›™YYÕ\]OHL
_JJJK\ß]\]SX]š^ÛÜ›

^ÜÝ\\‹\]SX]š^ÛÜ›

K\Ë›[Ý[ÛÛÛ›Û\‰‰Š\Ë›[Ý[ÛÛÛ›Û\‹\]Qœ›ÛQØ[Y\Y

KØš™XÝ˜[Y\Ê\Ë›[Ý[ÛÛÛ›Û\‹˜ÛÛ\Û™[ÊK™›Ü‘XXÚ

OžÓØš™XÝ˜[Y\Êš\ÝX[™\ÜÛœÙ\ÊK™›Ü‘XXÚ

OžØÛÛœÝÝ˜[YS›ÙN™KZ[“›ÙNœ‹X^›ÙN›‹˜[YNšK˜[YS›ÙT›Ü\NœßO]ÙI‰ŠÏOOYYË•š\ÝX[™\ÜÛœÙT›Ü\K•’TÒP’SUOÙKš\ÚX›OZNœÏOOYYË•š\ÝX[™\ÜÛœÙT›Ü\K•S”Ñ“Ô“I‰ŠKœ]X]\›š[Û‹œÛ\œ]X]\›š[ÛœÊ‹œ]X]\›š[Û‹‹œ]X]\›š[Û‹JKKœÜÚ][Û‹›\œ™XÝÜœÊ‹œÜÚ][Û‹‹œÜÚ][Û‹JJJ_JJ_JJJ__Y[˜Ý[ÛˆÊJ^ÈY[˜Ý[ÛŠJ^ÓØš™XÝ˜[Y\Ê˜ÛÛ\Û™[ÊK™›Ü‘XXÚ

OžØÛÛœÝÝ\Nœ‹ÝXÚÚ[›ÙS˜[YN›‹š\ÝX[™\ÜÛœÙ\Îš_O]ÚYŠOOYYËÛÛ\Û™[\K•ÕPÒQ
ZYŠÝXÚÚ[›ÙOYK™Ù]Øš™XÝžS˜[YJŠKÝXÚÚ[›ÙJ^ØÛÛœÝO[™]ÈË‘ÝI
ŒJK[™]ÈË•ŽPŠØÛÛÜŽŒM_JK[™]ÈË™XQŠKŠNÝÝXÚÚ[›ÙK˜Y
Š_Y[ÙHÛÛœÛÛKØ\›ŠÛÝ[›Ýš[™ÝXÚÝ	ÝÝXÚÚ[›ÙS˜[Y_K[ˆÝXÚYÛÛ\Û™[	ÝšYX
NÓØš™XÝ˜[Y\ÊJK™›Ü‘XXÚ

OžØÛÛœÝÝ˜[YS›ÙS˜[YNœ‹Z[“›ÙS˜[YN›‹X^›ÙS˜[YNšK˜[YS›ÙT›Ü\NœßO]ÚYŠÏOOYYË•š\ÝX[™\ÜÛœÙT›Ü\K•S”Ñ“Ô“J^ÚYŠ›Z[“›ÙOYK™Ù]Øš™XÝžS˜[YJŠK›X^›ÙOYK™Ù]Øš™XÝžS˜[YJJK]›Z[“›ÙJ\™]\›ˆ›ÚYÛÛœÛÛKØ\›ŠÛÝ[›Ýš[™	ÛŸH[ˆH[Ù[
NÚYŠ]›X^›ÙJ\™]\›ˆ›ÚYÛÛœÛÛKØ\›ŠÛÝ[›Ýš[™	Ú_H[ˆH[Ù[
_]˜[YS›ÙOYK™Ù]Øš™XÝžS˜[YJŠK˜[YS›Ù_ÛÛœÛÛKØ\›ŠÛÝ[›Ýš[™	ÜŸH[ˆH[Ù[
_JJ_JJ_J›[Ý[ÛÛÛ›Û\‹JK™[“X\	‰™K˜]™\œÙJ
OOžÙKš\ÓY\Ú	‰ŠK›X]\šX[™[“X\]™[“X\K›X]\šX[›™YYÕ\]OHL
_JJK˜Y
J_XÛ\ÜÈÙÞØÛÛœÝXÝÜŠ[[O[[
^Ý\Ë™Û“ØY\]\Ëœ]HšÎ‹ËØÙ‹šœÙ[]œ‹›™]ÛœKÐÙXž‹Z[œ]\›Ùš[\ËØ\ÜÙ]ÐKŒÙ\ÝÜ›Ùš[\È‹\Ë—Ø\ÜÙ]ØXÚO^ßK\Ë›Û“ØYYK\Ë™Û“ØY\Ÿ
\Ë™Û“ØY\[™]ÈÊ_\Ù]]

^Ü™]\›ˆ\Ëœ]]\ßXÜ™X]PÛÛ›Û\“[Ù[

^ØÛÛœÝO[™]ÈYÎÛ][[Ü™]\›ˆ˜Y]™[\Ý[™\Š˜ÛÛ›™XÝY‹
OžØÛÛœÝ]™]NÈ˜XÚÙY\Ú[\ˆOO[‹\™Ù]˜^S[ÙI‰›‹™Ø[Y\Y	‰ˆ[‹š[™	‰˜\Þ[˜È[˜Ý[ÛŠK[[HL
^ÚYŠ]
]›ÝÈ™]È\œ›ÜŠ“›È’[œ]ÛÝ\˜ÙHÝ\YYŠNÚYŠYJ]›ÝÈ™]È\œ›ÜŠ“›È˜\ÙT]Ý\YYŠNØÛÛœÝOX]ØZ]\Þ[˜È[˜Ý[ÛŠ
^ÚYŠ]
]›ÝÈ™]È\œ›ÜŠ“›È˜\ÙT]Ý\YYŠNÜ™]\›ˆ]ØZ]™Ê	ÝKÜ›Ùš[\Ó\ÝšœÛÛ˜
_JJNÛ]ÎÚYŠœ›Ùš[\ËœÛÛYJ
OžØÛÛœÝZVÝNÜ™]\›ˆ‰‰ŠÏ^Ü›Ùš[RY›Ùš[T]˜	Ù_KÉÜ‹œ]X\™XØ]YˆH\‹™\™XØ]YJKH\ßJJK\Ê^ÚYŠ\Š]›ÝÈ™]È\œ›ÜŠ“›ÈX]Ú[™È›Ùš[H˜[YH›Ý[™ŠNØÛÛœÝZVÜ—NÚYŠ]
]›ÝÈ™]È\œ›ÜŠ›ÈX]Ú[™È›Ùš[H˜[YH›Ý[™[™Y˜][›Ùš[H‰ÜŸHˆZ\ÜÚ[™Ë˜
NÜÏ^Ü›Ùš[RYœ‹›Ùš[T]˜	Ù_KÉÝœ]X\™XØ]YˆH]™\™XØ]Y_XÛÛœÝÏX]ØZ]™ÊËœ›Ùš[T]
NÛ]NÚYŠŠ^Û]NÚYŠOH˜[žHOO]š[™Y™\ÜÏÛË›^[Ý]ÖÓØš™XÝšÙ^\ÊË›^[Ý]ÊVÌWN›Ë›^[Ý]ÖÝš[™Y™\Ü×KYJ]›ÝÈ™]È\œ›ÜŠ›ÈX]Ú[™È[™Y™\ÜË	Ýš[™Y™\ÜßK[ˆ›Ùš[H	ÜËœ›Ùš[RYX
NÙK˜\ÜÙ]]	‰ŠO\Ëœ›Ùš[T]œ™\XÙJœ›Ùš[KšœÛÛˆ‹K˜\ÜÙ]]
J_\™]\›žÜ›Ùš[N›Ë\ÜÙ]]˜__J‹\Ëœ]™Ù[™\šXË]šYÙÙ\ˆŠK[Š

Ü›Ùš[N\ÜÙ]]š_JOOžÙK›[Ý[ÛÛÛ›Û\[™]ÈÙÊ‹JNØÛÛœÝÏ]\Ë—Ø\ÜÙ]ØXÚVÙK›[Ý[ÛÛÛ›Û\‹˜\ÜÙ]\›NÚYŠÊ\\ËœØÙ[™K˜ÛÛ™J
KÊKŠK\Ë›Û“ØY	‰\Ë›Û“ØY
ŠNÙ[Ù^ÚYŠ]\Ë™Û“ØY\Š]›ÝÈ™]È\œ›ÜŠ‘Ó“ØY\ˆ›ÝÙ]ˆŠNÝ\Ë™Û“ØY\‹œÙ]]
ˆŠK\Ë™Û“ØY\‹›ØY
K›[Ý[ÛÛÛ›Û\‹˜\ÜÙ]\›
OžÝ\Ë—Ø\ÜÙ]ØXÚVÙK›[Ý[ÛÛÛ›Û\‹˜\ÜÙ]\›O]]œØÙ[™K˜ÛÛ™J
KÊKŠK\Ë›Û“ØY	‰\Ë›Û“ØY
Š_JK[


OOžÝ›ÝÈ™]È\œ›ÜŠ\ÜÙ]	ÙK›[Ý[ÛÛÛ›Û\‹˜\ÜÙ]\›HZ\ÜÚ[™ÈÜˆX[›Ü›YY˜
_JJ__JJK˜Ø]Ú

OžØÛÛœÛÛKØ\›Š
_JJ_JJK˜Y]™[\Ý[™\Š™\ØÛÛ›™XÝY‹


OOžÙK›[Ý[ÛÛÛ›Û\[[Kœ™[[Ý™JŠK[[JJK__XÛ\ÜÈÞÜÝ]XÈRS—ÑSWÐSUQOLKŽÜÝ]XÈPVÓ•SP‘T—ÐÓÓ•“ÓT”ÏLŽØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNÝ\ËšY]Ï]\Ë™Ü›Ý\YK\ËÙX–“X[˜YÙ\]›XZ[“ÛÜ™Ùž[™Ú[™Kœ™[™\™\‹ž‹\ËœšYÚ]Û”™\ÜÙYHLK\Ë˜ÛÛ›Û\œÏV×K\Ëš[š]ÛÛ›Û\œÊ
_\Ý]XÈ[š]
J^Ü™]\›ˆ™]ÈÊJ_Z[š]ÛÛ›Û\œÊ
^Ý\Ë™Ü›Ý\‹˜Y
™]ÈË™
LMNKLLÍKÊJNØÛÛœÝ[™]ÈÙÎÙ›ÜŠ]OLÙOË“PVÓ•SP‘T—ÐÓÓ•“ÓT”ÎÙJÊÊ^ØÛÛœÝ]\ËÙX–“X[˜YÙ\‹™Ù]ÛÛ›Û\ŠJNÜ‹˜Y]™[\Ý[™\Š˜ÛÛ›™XÝY‹
OžÜ‹›˜[YO[‹™]Kš[™Y™\ÜË‹\Ù\‘]Kš[™Y™\ÜÏ[‹™]Kš[™Y™\ÜË‹™Ø[Y\Y[‹™]K™Ø[Y\Y\Ë™Ü›Ý\‹˜Y
ŠNØÛÛœÝO]\ËÙX–“X[˜YÙ\‹™Ù]ÛÛ›Û\‘Üš\
JNÚK›˜[YOX	Ü‹›˜[Y_QÜš\ÛÛ›Û\˜K\Ù\‘]Kš[™Y™\ÜÏ[‹™]Kš[™Y™\ÜË\Ë˜š[™Üš\ÛÛ›Û\ŠK\Ë™Ü›Ý\ŠK\Ë˜ÛÛ›Û\œËœ\Ú
ŠK\Ë™Ü›Ý\‹˜Y
JK\ËœÙ]\]™[\Ý[™\œÊŠ_JJK‹˜Y]™[\Ý[™\Š™\ØÛÛ›™XÝY‹
[˜Ý[ÛŠ
^Ý\Ëœ™[[Ý™J\Ë˜Ú[™[–ÌJ_JJ__Xš[™Üš\ÛÛ›Û\ŠKŠ^ÙK˜Y
˜Ü™X]PÛÛ›Û\“[Ù[
JJK‹˜Y
J_\Ù]\]™[\Ý[™\œÊ
^Ý˜Y]™[\Ý[™\Šš]ÝÛœË^‹X^\ËXÚ[™ÙY‹
O\Ë›Û^\ÐÚ[™ÙY

JJK˜Y]™[\Ý[™\Šš]ÝÛœË^‹X^\Ë\ÝÜ‹
O\Ë›Û^\ÔÝÜ

JJK˜Y]™[\Ý[™\Šš]ÝÛœË^‹X]Û‹\™\ÜÙY‹
O\Ë›Û]Û”™\ÜÙY

JJK˜Y]™[\Ý[™\Šš]ÝÛœË^‹X]Û‹\™[X\ÙY‹
O\Ë›Û]Û”™[X\ÙY

JJK˜Y]™[\Ý[™\ŠœÙ[XÝÝ\‹
O\Ë›Û”Ù[XÝÝ\

JJK˜Y]™[\Ý[™\ŠœÙ[XÝ[™‹
O\Ë›Û”Ù[XÝ[™

JJ_[\Ý[‘Ø[Y\Y

^Ù›ÜŠÛÛœÝÙˆ\Ë˜ÛÛ›Û\œÊ^ÚYŠ]™Ø[Y\Y
\™]\›ŽØÛÛœÝO]™Ø[Y\YYK˜^\ËœÛÛYJ
OŒOO]
JNÚYŠš\ÔÝXÚÐXÝ]™I‰ˆ\‰‰™Ø[Y\Y™[™Ø[YTY˜XÚÑ[Z]
\™]\›ˆ™\Ü]Ú]™[
Ý\Nˆš]ÝÛœË^‹X^\Ë\ÝÜ‹Y\ÜØYÙNžØÛÛ›Û\Ž_JK›ÚY
š\ÔÝXÚÐXÝ]™OHLJNÈ]š\ÔÝXÚÐXÝ]™I‰œÊ™Ø[Y\Y™[™Ø[YTY˜XÚÑ[Z]HLKš\ÔÝXÚÐXÝ]™OHL
Nš\ÔÝXÚÐXÝ]™I‰ˆ\‰‰Š™Ø[Y\Y™[™Ø[YTY˜XÚÑ[Z]HL
K‰‰™\Ü]Ú]™[
Ý\Nˆš]ÝÛœË^‹X^\ËXÚ[™ÙY‹Y\ÜØYÙNžØÛÛ›Û\Ž_JNÙ›ÜŠÛÛœÝÜ‹—[ÙˆK˜]ÛœË™[šY\Ê
J[‹œ™\ÜÙYÊ™\Ü]Ú]™[
Ý\Nˆš]ÝÛœË^‹X]Û‹\™\ÜÙY‹Y\ÜØYÙNžØÛÛ›Û\Ž]Û’[™^œ‹]ÛŽ›Ÿ_JK›\Ý]Û’][O[ŠN›\Ý]Û’][I‰›\Ý]Û’][OOO[‰‰Š™\Ü]Ú]™[
Ý\Nˆš]ÝÛœË^‹X]Û‹\™[X\ÙY‹Y\ÜØYÙNžØÛÛ›Û\Ž]Û’[™^œ‹]ÛŽ›Ÿ_JK›\Ý]Û’][O]›ÚY
K‹ÝXÚY_XÛ[\[™\U˜[œÙ›Ü›X][Û•ÖŠJ^ØÛÛœÝ]\Ë˜Û[\ÑÜ›Ý[™

NÝ\Ë˜\U˜[œÙ›Ü›X][Û•ÖŠ‹J_X\U˜[œÙ›Ü›X][Û•ÖŠJ^Ý\Ë™Ü›Ý\‹œÜÚ][Û‹˜ÛÜJ
K\Ë™Ü›Ý\‹œ]X]\›š[Û‹˜ÛÜJJK\Ë™Ü›Ý\‹\]SX]š^ÛÜ›
L
_XÛ[\ÑÜ›Ý[™

^ØÛÛœÝO[™]ÈK‘I
\ËšY]Ëœ™Y™\™[˜ÙPÜœËžžKžŠK]K™Ù][]˜][Û•˜[YP]
\ËšY]Ë[S^Y\‹KK”‘PÒTÑWÔ‘PQÖŠ_ÚYŠ\ËšY]Ë˜ÛÛ›ÛË™Ù]Ø[Y\˜PÛÛÜ™[˜]J^ØÛÛœÝYK˜\Ê\ËšY]Ë˜ÛÛ›ÛË™Ù]Ø[Y\˜PÛÛÜ™[˜]J
K˜ÜœÊNÜ™]\›ˆ˜[]YK\‹ZË“RS—ÑSWÐSUQOL	‰Š˜[]YO\ŠÚË“RS—ÑSWÐSUQJK˜\Ê\ËšY]Ëœ™Y™\™[˜ÙPÜœÊKÕ™XÝÜŒÊ
_\™]\›ˆYÙ]ÜYY˜XÝÜŠ
^ØÛÛœÝ]\ËšY]Ë˜ÛÛ›ÛË™Ù]Ø[Y\˜PÛÛÜ™[˜]OÝ\ËšY]Ë˜ÛÛ›ÛË™Ù]Ø[Y\˜PÛÛÜ™[˜]J
K˜[]YNŒNÜ™]\›ˆX]›Z[ŠX]›X^
ÍLŠK™LÊ_YÙ]›Ý][Û–X]Ê
^ØÛÛœÝO]\Ë™Ü›Ý\‹œ]X]\›š[Û‹˜ÛÛ™J
K››Ü›X[^™J
NÛ]LÝ	‰ŠKSX]”JÌM
NØÛÛœÝ]\Ë™Ü›Ý\‹œÜÚ][Û‹˜ÛÛ™J
K››Ü›X[^™J
KOJ™]ÈË”ŠKœÙ]œ›ÛP^\Ð[™ÛJ‹ŠK››Ü›X[^™J
NÜ™]\›ˆKœ™[][\JJK_YÙ]›Ý][Û”]Ú

^ØÛÛœÝO]\Ë™Ü›Ý\‹œ]X]\›š[Û‹˜ÛÛ™J
K››Ü›X[^™J
NÛ]LÝ	‰ŠKSX]”JÌM
NØÛÛœÝ[™]ÈË”L
K
K˜\T]X]\›š[ÛŠJK››Ü›X[^™J
KOJ™]ÈË”ŠKœÙ]œ›ÛP^\Ð[™ÛJ‹ŠK››Ü›X[^™J
NÜ™]\›ˆKœ™[][\JJK_YÙ]˜[œÛ][Û‘[]˜][ÛŠJ^ØÛÛœÝ]\ËšY]Ë˜Ø[Y\˜LÑœÜÚ][Û‹˜ÛÛ™J
K››Ü›X[^™J
NÜ™]\›ˆ‹›][\TØØ[\Š]
™JKŸXØ[Y\˜SÛ‘›J
^Û]O[™]ÈË”L[™]ÈË”LØÛÛœÝ]\Ë™Ù]ÜYY˜XÝÜŠ
NÚYŠOO]™Ø[Y\Y˜^\ÖÌ×J^ØÛÛœÝO]™Ø[Y\Y˜^\ÖÌ×J›ŽÜ[™]ÈË”L
JK˜\T]X]\›š[ÛŠ\ËšY]Ë˜Ø[Y\˜LÑœ]X]\›š[Û‹˜ÛÛ™J
K››Ü›X[^™J
JK›][\TØØ[\ŠJ_ZYŠOO]™Ø[Y\Y˜^\ÖÌ—J^ØÛÛœÝ]™Ø[Y\Y˜^\ÖÌ—J›ŽÙO[™]ÈË”L
K
K˜\T]X]\›š[ÛŠ\ËšY]Ë˜Ø[Y\˜LÑœ]X]\›š[Û‹˜ÛÛ™J
K››Ü›X[^™J
JK›][\TØØ[\ŠŠ_XÛÛœÝO]\Ë™Ü›Ý\‹œ]X]\›š[Û‹˜ÛÛ™J
KÏ]\Ë™Ü›Ý\‹œÜÚ][Û‹˜ÛÛ™J
K˜Y
K˜Y
ŠJNÝ\Ë˜Û[\[™\U˜[œÙ›Ü›X][Û•ÖŠËJ_[Û”Ù[XÝšYÚ[™

^ß[Û”Ù[XÝšYÚÝ\

^ß[Û”Ù[XÝYÝ\

^ß[Û”Ù[XÝY[™

^ß[Û”Ù[XÝÝ\

^ØÛÛœÝO]\™Ù]È›YOOYK\Ù\‘]Kš[™Y™\ÜÏÝ\Ë›Û”Ù[XÝYÝ\
JNˆœšYÚOOYK\Ù\‘]Kš[™Y™\ÜÉ‰\Ë›Û”Ù[XÝšYÚÝ\
J_[Û”Ù[XÝ[™

^ØÛÛœÝO]\™Ù]È›YOOYK\Ù\‘]Kš[™Y™\ÜÏÝ\Ë›Û”Ù[XÝšYÚ[™
JNˆœšYÚOOYK\Ù\‘]Kš[™Y™\ÜÉ‰\Ë›Û”Ù[XÝY[™
J_[Û]Û”™\ÜÙY

^ØÛÛœÝO]\™Ù]È›YOOYK\Ù\‘]Kš[™Y™\ÜÏÝ\Ë›Û“Y]Û”™\ÜÙY

NˆœšYÚOOYK\Ù\‘]Kš[™Y™\ÜÉ‰\Ë›Û”šYÚ]Û”™\ÜÙY

_[Û”šYÚ]Û”™\ÜÙY

^ØÛÛœÝO]\™Ù]ÚYŠOOO]›Y\ÜØYÙK˜]Û’[™^
^ÚYŠOOYK™Ø[Y\Y˜^\ÖÌ×J\™]\›ŽÝ\ËœšYÚ]Û”™\ÜÙYHL_[Û“Y]Û”™\ÜÙY

^ß[Û^\ÐÚ[™ÙY

^ØÛÛœÝO]\™Ù]ÌOOYK™Ø[Y\Y˜^\ÖÌ—I‰ŒOOYK™Ø[Y\Y˜^\ÖÌ×_
›YOOYK\Ù\‘]Kš[™Y™\ÜÏÝ\Ë›Û“Y^\ÐÚ[™ÙY
JNˆœšYÚOOYK\Ù\‘]Kš[™Y™\ÜÉ‰\Ë›Û”šYÚ^\ÐÚ[™ÙY
JJ_[Û”šYÚ^\ÐÚ[™ÙY

^ÚYŠœšYÚOO]\Ù\‘]Kš[™Y™\ÜÊZYŠ\ËœšYÚ]Û”™\ÜÙY
^ØÛÛœÝO]\Ë™Ü›Ý\‹œ]X]\›š[Û‹˜ÛÛ™J
K]\Ë™Ù]ÜYY˜XÝÜŠ
K]\Ë™Ù]˜[œÛ][Û‘[]˜][ÛŠ™Ø[Y\Y˜^\ÖÌ×KŠKO]\Ë™Ü›Ý\‹œÜÚ][Û‹˜ÛÛ™J
K˜Y
ŠNÝ\Ë˜Û[\[™\U˜[œÙ›Ü›X][Û•ÖŠKJ_Y[ÙH\Ë˜Ø[Y\˜SÛ‘›J
_[Û“Y^\ÐÚ[™ÙY

^ÚYŠ›YˆOO]\Ù\‘]Kš[™Y™\ÜÊ\™]\›ŽØÛÛœÝO]\Ë™Ü›Ý\‹œÜÚ][Û‹˜ÛÛ™J
NÛ]ŽÜSX]˜XœÊ™Ø[Y\Y˜^\ÖÌ—JO“X]˜XœÊ™Ø[Y\Y˜^\ÖÌ×JOÝ\Ë™Ù]›Ý][Û–X]Ê™Ø[Y\Y˜^\ÖÌ—JN\Ë™Ù]›Ý][Û”]Ú
™Ø[Y\Y˜^\ÖÌ×JK\Ë˜\U˜[œÙ›Ü›X][Û•ÖŠKŠ_[Û^\ÔÝÜ

^ØÛÛœÝO]\™Ù]È›YOOYK\Ù\‘]Kš[™Y™\ÜÏÝ\Ë›Û“Y^\ÔÝÜ
JNˆœšYÚOOYK\Ù\‘]Kš[™Y™\ÜÉ‰\Ë›Û”šYÚ^\ÔÝÜ
J_[Û”šYÚ^\ÔÝÜ

^ß[Û“Y^\ÔÝÜ

^ß[Û]Û”™[X\ÙY

^ØÛÛœÝO]\™Ù]È›YOOYK\Ù\‘]Kš[™Y™\ÜÏÝ\Ë›Û“Y]Û”™[X\ÙY
JNˆœšYÚOOYK\Ù\‘]Kš[™Y™\ÜÉ‰\Ë›Û”šYÚ]Û”™[X\ÙY
J_[Û”šYÚ]Û”™[X\ÙY

^Ý\ËœšYÚ]Û”™\ÜÙYHL_[Û“Y]Û”™[X\ÙY

^ß_XÛÛœÝYÏZËÏ^ÐÓÓ•“Ó×ÒS’UPSV‘QˆœÛÛ›ÛËZ[š]X[^™YŸNØÛ\ÜÈÈ^[™ÈË”Y]žØÛÛœÝXÝÜŠJ^ÜÝ\\Š
K\ËšY]Ï]\Ë›Ü[ÛœÏYK\Ëœ™[™\ØYK˜Ø[˜XÚË\ËœÛÛ›ÛÏ[[Z[š]X[^™UÙX–J
OOžØÛÛœÝ]\ËšY]Ëœ™[™\™\‹žŽÝ˜Y]™[\Ý[™\ŠœÙ\ÜÚ[ÛœÝ\‹


OOžÝ™[˜X›YHL™Ù]™Y™\™[˜ÙTÜXÙJ›ØØ[ŠNØÛÛœÝO[™]ÈËŽNÙK›˜[YOHž’XYÙ]‹\ËšY]ËœØÙ[™K˜Y
JK\ËšY]Ë˜Ø[Y\˜LÑ™Ù]ÛÜ›ÜÚ][ÛŠKœÜÚ][ÛŠK\ËšY]Ë˜Ø[Y\˜LÑ™Ù]ÛÜ›]X]\›š[ÛŠKœ]X]\›š[ÛŠKK\]SX]š^ÛÜ›
L
KK˜Y
™Ù]Ø[Y\˜J
JK\ËšY]Ë—ØØ[V]\ËšY]Ë˜Ø[Y\˜LÑ˜ÛÛ™J
K\ËšY]Ë—ØØ[V‹™˜\L™M‹\ËšY]Ë—ØØ[V‹›™X\KŒK\ËšY]Ë—ØØ[V‹\]T›Ú™XÝ[Û“X]š^

KK˜Y
\ËšY]Ë—ØØ[VŠK\ËšY]Ë››ÝYžPÚ[™ÙJ
K\Ë›Ü[ÛœË˜ÛÛ›Û\œÉ‰Š\ËœÛÛ›ÛÏ[™]ÈYÊ\ËšY]ËJK\Ë™\Ü]Ú]™[
Ý\NˆœÛÛ›ÛËZ[š]X[^™YŸJJKœÙ][š[X][Û“ÛÜ

OžÝš\Ô™\Ù[[™É‰™Ù]Ø[Y\˜J
K˜Ø[Y\˜\Ë›[™ÝŒ	‰Š[˜Ý[ÛŠJ^ØÛÛœÝÛ™X\Žœ‹˜\Ž›‹\ÜXÝšK›ÝŽ›ßOY[˜Ý[ÛŠ
^ØÛÛœÝO]™[[Y[ËYVÌMKÊVÌLKLJKYVÌMKÊVÌLJÌJKOLŠ“X]˜][ŠKÙVÍWJKÏ\Ë˜ÚŽKœ˜YÑYÊJNÜ™]\›žÛ™X\Žœ‹˜\Ž›‹\ÜXÝ™VÍWKÙVÌK›ÝŽ›ß_JK—ØØ[V‹œ›Ú™XÝ[Û“X]š^
NÙK˜Ø[Y\˜LÑ›™X\\‹K˜Ø[Y\˜LÑ™˜\[‹K˜Ø[Y\˜LÑ˜\ÜXÝZKK˜Ø[Y\˜LÑ™›Ý[ËK˜Ø[Y\˜LÑž›ÛÛOLKK˜Ø[Y\˜LÑ\]T›Ú™XÝ[Û“X]š^

K™Ù]Ø[Y\˜J
K™Ù]ÛÜ›ÜÚ][ÛŠK˜Ø[Y\˜LÑœÜÚ][ÛŠK™Ù]Ø[Y\˜J
K™Ù]ÛÜ›]X]\›š[ÛŠK˜Ø[Y\˜LÑœ]X]\›š[ÛŠKK˜Ø[Y\˜LÑ\]SX]š^

KK˜Ø[Y\˜LÑ\]SX]š^ÛÜ›
L
KK››ÝYžPÚ[™ÙJK˜Ø[Y\˜LÑL
_J\ËšY]ÊKK\]SX]š^ÛÜ›
L
K\ËœÛÛ›ÛÉ‰\ËœÛÛ›ÛË›\Ý[‘Ø[Y\Y

K\Ëœ™[™\Ø‰‰\Ëœ™[™\ØŠ
JK\ËšY]Ë›XZ[“ÛÜœÝ\
\ËšY]ËŠ_JJ_JJ__XÛÛœÝ™Ï\ËYÏ^ÑÓÐ‘WÒS’UPSV‘Q™™‹’S’UPSV‘QVQT—ÐQQ™™‹“VQT—ÐQQVQT—Ô‘SSÕ‘Q™™‹“VQT—Ô‘SSÕ‘QÓÓÔ—ÓVQT”×ÓÔ‘T—ÐÒS‘ÑQ™™‹ÓÓÔ—ÓVQT”×ÓÔ‘T—ÐÒS‘ÑQKÙÏXÛ\ÜÈ^[™ÈYžØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßKX\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—OØ\™Ý[Y[ÖÌ—NžßNÜËŽK‘QUSÕTœÙ]
JKÝ\\Š‘TÑÎMÎ‹ŠK\Ëš\ÑÛØ™UšY]ÏHL\Ë˜Ø[Y\˜LÑ›™X\SX]›X^
MKŒÍL™KNJšK”[ž
K\Ë˜Ø[Y\˜LÑ™˜\LL
šK”[žØÛÛœÝ[™]ÈÛ
™ÛØ™H‹‹›Øš™XÝÙŠNÝ\Ë›XZ[“ÛÜ™Ùž[™Ú[™K›X™[™™[™\™\‹š[™›Õ[S^Y\[‹š[™›Ë\Ë˜Y^Y\ŠŠK\Ë[S^Y\[‹Kš\Ñ^[
K˜ÛÛÜ™YK˜ÛÛÜ™™]ÈK‘I
‘TÑÎÌˆ‹
KK[YK[KKKšXY[™ÏYKšXY[™ßKœ˜[™ÙOYKœ˜[™Ù_ŠšK”[ž
K‹››ÐÛÛ›ÛÏÕ™‹˜[œÙ›Ü›PØ[Y\˜UÓÛÚÐ]\™Ù]
\Ë\Ë˜Ø[Y\˜LÑJNŠ\Ë˜ÛÛ›ÛÏ[™]ÈÛJ\ËK‹˜ÛÛ›ÛÊK\Ë˜ÛÛ›ÛËš[™PÛÛ\Ú[Û]›ÚYOO\‹š[™PÛÛ\Ú[ÛŸ‹š[™PÛÛ\Ú[ÛŠK\Ë˜Y^Y\Š™]ÈÊ˜][ÜÜ\™H‹‹˜][ÜÜ\™JJK\Ë˜Ø[Y\˜Kœ™\Ú^™J˜ÛY[ÚY˜ÛY[ZYÚ
K‹ÙX–‰‰Š\ËÙX–[™]È™Ê\Ë˜›ÛÛX[ˆO]\[Ùˆ‹ÙX–ÞßNœ‹ÙX–ŠK\ËÙX–‹š[š]X[^™UÙX–Š
J_XY^Y\Š
^ÚYŠ]]š\Ó^Y\Š\™]\›ˆ›ÛZ\ÙKœ™Z™XÝ
™]È\œ›ÜŠY^Y\ˆ\HØš™XÝŠJNÚYŠš\ÐÛÛÜ“^Y\Š^ÚYŠ]\Ë[S^Y\‹[SX]š^Ù]Ëš[˜ÛY\ÊœÛÝ\˜ÙK˜ÜœÊJ\™]\›ˆ—Ü™Z™XÝ
Û›H	Ý\Ë[S^Y\‹[SX]š^Ù]ßH[SX]š^Ù]\™HÝ\œ™[HÝ\ÜY›ÜˆÛÛÜˆ^Y\œØ
_Y[ÙHYŠš\Ñ[]˜][Û“^Y\‰‰œÛÝ\˜ÙK˜ÜœÈOO]\Ë[S^Y\‹[SX]š^Ù]ÖÌJ\™]\›ˆ—Ü™Z™XÝ
Û›H	Ý\Ë[S^Y\‹[SX]š^Ù]ÖÌ_H[SX]š^Ù]\ÈÝ\œ™[HÝ\ÜY›Üˆ[]˜][Ûˆ^Y\œØ
NÜ™]\›ˆÝ\\‹˜Y^Y\Š\Ë[S^Y\Š_YÙ]^[ÕÑYÜ™Y\Ê
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNŒKOX\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚYÜ™]\›ˆ\Ë™Ù]Y]\œÕÑYÜ™Y\Ê\Ë™Ù]^[ÕÓY]\œÊJJ_YÙ]^[ÕÑYÜ™Y\Ñœ›ÛQ\Ý[˜ÙJ
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNŒKOX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNŒNÜ™]\›ˆ\Ë™Ù]Y]\œÕÑYÜ™Y\Ê\Ë™Ù]^[ÕÓY]\œÑœ›ÛQ\Ý[˜ÙJJJ_YÙ]Y]\œÕÑYÜ™Y\Ê
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNŒNÜ™]\›ˆË˜ÚŽKœ˜YÑYÊŠ“X]˜\Ú[ŠÊŠšK”[ž
JJ__KYÏ\ËšÐ‹“Q•YÏ\ËšÐ‹“RQK™Ï\ËšÐ‹”’QÒÛ]ÎØÛÛœÝÙÏ[™]ÈË”LÙÏ[™]ÈË”ŽÛ]™ÏLØÛÛœÝYÏ[™]ÈË”LÙÏKLKYÏ^ÙY˜][ˆ˜]]È‹˜YÎˆ›[Ý™H‹[Žˆ˜Ù[‹˜]™[ˆØZ]‹›Ý]Nˆ›[Ý™H‹Ü×Þ›ÛÛNˆØZ]ŸKÙÏ[™]ÈË”LÏ[™]ÈË’NVKYÏ[™]ÈË’NVK™Ï[™]ÈË’NVJ
KÏ[™]ÈË”L™Ï[™]ÈË”LÏ[™]ÈË”LÏ[™]ÈË”L

NÛ]ÙÏLØÛÛœÝ™Ï[™]ÈË”L™Ï[™]ÈË”‹YÏ[™]ÈË’NVKÙÏ[™]ÈË”L™Ï[™]ÈË”LÙÏ[™]ÈË”‹YÏ[™]ÈË”ŽÛ]™ÏL™ÏLÏHLKYÏHLKÙÏLYÏLØÛÛœÝÏ[™]ÈË›Ë	Ï[™]ÈË–˜ÝŠ™]ÈË”L
LJJK™Ï^Ù[˜X›YˆL[˜X›T›Ý][ÛŽˆL›Ý]TÜYYŒ‹Z[”[”ÜYY‹ŒKX^[”ÜYYŒMK›ÛÛU˜]™[[YN‹Œ‹›ÛÛQ˜XÝÜŽŒ‹X^™\ÛÛ][ÛŽŒZ[”™\ÛÛ][ÛŽŒKÌX^[]YNYMËÜ›Ý[™]™[ŒŒ]]Õ˜]™[[YSZ[ŽŒKK]]Õ˜]™[[YSX^]]Õ˜]™[[YQ\ÝYMÛX\˜]™[ZYÚZ[ŽÍKÛX\˜]™[ZYÚX^L[œÝ[˜]™[ˆLKZ[–™[š][™ÛNŒX^™[š][™ÛNŽ‹K[™PÛÛ\Ú[ÛŽˆLZ[‘\Ý[˜ÙPÛÛ\Ú[ÛŽŒÌ[˜X›TÛX\˜]™[ˆL[˜X›T[ŽˆLKÙÏ^ÓSÕ‘Qˆ›[Ý™YŸNØÛ\ÜÈ™È^[™ÈË”Y]žØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNÜÝ\\Š
K\ËšY]Ï]\Ë˜Ø[Y\˜O]˜Ø[Y\˜LÑ\Ë™[˜X›YH˜›ÛÛX[ˆO]\[ÙˆK™[˜X›YÙK™[˜X›Y’™Ë™[˜X›Y\Ë˜Ø[Y\˜Kš\ÓÜÙÜ˜\XÐØ[Y\˜OÊ™Ï]\Ë˜Ø[Y\˜Kž›ÛÛK\Ë™[˜X›T›Ý][ÛHLK\Ë™[˜X›T[HLK\Ë›X^[]YOLKÌ\Ëž›ÛÛU˜]™[[YOH›[X™\ˆO]\[ÙˆKž›ÛÛU˜]™[[YOÙKž›ÛÛU˜]™[[YN’™Ëž›ÛÛU˜]™[[YJNŠ\Ë™[˜X›T›Ý][Û]›ÚYOOYK™[˜X›T›Ý][ÛÒ™Ë™[˜X›T›Ý][ÛŽ™K™[˜X›T›Ý][Û‹\Ëœ›Ý]TÜYYYKœ›Ý]TÜYY™Ëœ›Ý]TÜYY\Ë™[˜X›T[]›ÚYOOYK™[˜X›T[Ò™Ë™[˜X›T[Ž™K™[˜X›T[‹\Ë›Z[”[”ÜYYYK›Z[”[”ÜYY™Ë›Z[”[”ÜYY\Ë›X^[”ÜYYYK›X^[”ÜYY™Ë›X^[”ÜYY\Ë›X^[]YOYK›X^[]Y_™Ë›X^[]YK\Ëž›ÛÛU˜]™[[YOYKž›ÛÛU˜]™[[Y_™Ëž›ÛÛU˜]™[[YJKKž›ÛÛR[‘˜XÝÜ‰‰ŠÛÛœÛÛKØ\›ŠÛÛ›ÛÈ›ÛÛR[‘˜XÝÜˆ\˜[Y]\ˆ\È\™XØ]Yˆ\ÙH›ÛÛQ˜XÝÜˆ[œÝXYˆŠKKž›ÛÛQ˜XÝÜYKž›ÛÛQ˜XÝÜŸKž›ÛÛR[‘˜XÝÜŠKKž›ÛÛSÝ]˜XÝÜ‰‰ŠÛÛœÛÛKØ\›ŠÛÛ›ÛÈ›ÛÛSÝ]˜XÝÜˆ\˜[Y]\ˆ\È\™XØ]Yˆ\ÙH›ÛÛQ˜XÝÜˆ[œÝXYˆŠKKž›ÛÛQ˜XÝÜYKž›ÛÛQ˜XÝÜŸKž›ÛÛR[‘˜XÝÜŸKÙKž›ÛÛSÝ]˜XÝÜŠKOOYKž›ÛÛQ˜XÝÜ‰‰ŠÛÛœÛÛKØ\›ŠÛÛ›ÛÈ›ÛÛQ˜XÝÜˆ\˜[Y]\ˆØ[ˆ›Ý™H\]X[Èˆ]È˜[YHÚ[™HÙ]ÈY˜][ˆŠKKž›ÛÛQ˜XÝÜR™Ëž›ÛÛQ˜XÝÜŠK\Ëž›ÛÛR[‘˜XÝÜYKž›ÛÛQ˜XÝÜŸ™Ëž›ÛÛQ˜XÝÜ‹\Ëž›ÛÛSÝ]˜XÝÜLKÊKž›ÛÛQ˜XÝÜŸ™Ëž›ÛÛQ˜XÝÜŠK\Ë›X^™\ÛÛ][ÛYK›X^™\ÛÛ][ÛŸ™Ë›X^™\ÛÛ][Û‹\Ë›Z[”™\ÛÛ][ÛYK›Z[”™\ÛÛ][ÛŸ™Ë›Z[”™\ÛÛ][Û‹\Ë™Ü›Ý[™]™[YK™Ü›Ý[™]™[™Ë™Ü›Ý[™]™[\Ë˜]]Õ˜]™[[YSZ[YK˜]]Õ˜]™[[YSZ[Ÿ™Ë˜]]Õ˜]™[[YSZ[‹\Ë˜]]Õ˜]™[[YSX^YK˜]]Õ˜]™[[YSX^™Ë˜]]Õ˜]™[[YSX^\Ë˜]]Õ˜]™[[YQ\ÝYK˜]]Õ˜]™[[YQ\Ý™Ë˜]]Õ˜]™[[YQ\ÝKœÛX\›ÛÛRZYÚZ[‰‰ŠÛÛœÛÛKØ\›ŠÛÛ›ÛÈÛX\›ÛÛRZYÚZ[ˆ\˜[Y]\ˆ\È\™XØ]Yˆ\ÙHÛX\˜]™[ZYÚZ[ˆ[œÝXYˆŠKKœÛX\˜]™[ZYÚZ[YKœÛX\˜]™[ZYÚZ[ŸKœÛX\›ÛÛRZYÚZ[ŠKKœÛX\›ÛÛRZYÚX^	‰ŠÛÛœÛÛKØ\›ŠÛÛ›ÛÈÛX\›ÛÛRZYÚX^\˜[Y]\ˆ\È\™XØ]Yˆ\ÙHÛX\˜]™[ZYÚX^[œÝXYˆŠKKœÛX\˜]™[ZYÚX^YKœÛX\˜]™[ZYÚX^KœÛX\›ÛÛRZYÚX^
K\ËœÛX\˜]™[ZYÚZ[YKœÛX\˜]™[ZYÚZ[Ÿ™ËœÛX\˜]™[ZYÚZ[‹\ËœÛX\˜]™[ZYÚX^YKœÛX\˜]™[ZYÚX^™ËœÛX\˜]™[ZYÚX^\Ëš[œÝ[˜]™[YKš[œÝ[˜]™[™Ëš[œÝ[˜]™[\Ë›Z[–™[š][™ÛOJK›Z[–™[š][™Û_™Ë›Z[–™[š][™ÛJJ“X]”KÌN\Ë›X^™[š][™ÛOJK›X^™[š][™Û_™Ë›X^™[š][™ÛJJ“X]”KÌNK™›ØÝ\ÓÛ“[Ý\ÙSÝ™\‰‰˜ÛÛœÛÛKØ\›Š”[˜\ˆÛÛ›ÛÈ	Ù›ØÝ\ÓÛ“[Ý\ÙSÝ™\‰ÈÜ[Û˜[\˜[Y]\ˆ\È™Y[ˆ™[[Ý™YˆŠKK™›ØÝ\ÓÛ“[Ý\ÙPÛXÚÉ‰˜ÛÛœÛÛKØ\›Š”[˜\ˆÛÛ›ÛÈ	Ù›ØÝ\ÓÛ“[Ý\ÙPÛXÚÉÈÜ[Û˜[\˜[Y]\ˆ\È™Y[ˆ™[[Ý™YˆŠK\Ëš[™PÛÛ\Ú[Û]›ÚYOOYKš[™PÛÛ\Ú[ÛÒ™Ëš[™PÛÛ\Ú[ÛŽ™Kš[™PÛÛ\Ú[Û‹\Ë›Z[‘\Ý[˜ÙPÛÛ\Ú[ÛR™Ë›Z[‘\Ý[˜ÙPÛÛ\Ú[Û‹\Ë™[˜X›TÛX\˜]™[]›ÚYOOYK™[˜X›TÛX\˜]™[Ò™Ë™[˜X›TÛX\˜]™[™K™[˜X›TÛX\˜]™[ÙË˜ÛÜJ\Ë˜Ø[Y\˜KœÜÚ][ÛŠKÙË˜ÛÜJ\Ë˜Ø[Y\˜Kœ]X]\›š[ÛŠK\ËœÝ]OTÙË\Ë˜Ý\œÛÜSYË\ËšY]Ë˜ÛÛ›ÛÉ‰ŠÛÛœÛÛKØ\›Š‘\™XØ]Y\ÙHÙˆ[˜\ÛÛ›ÛËˆÙYH^[\\ÈÈÛÜœ™XÝ[˜\ÛÛ›ÛÈ[\[Y[][Û‹ˆŠK\ËšY]Ë˜ÛÛ›ÛË™\ÜÜÙJ
JK\ËšY]Ë˜ÛÛ›ÛÏ]\Ë\Ë—Ú[™\“Û’Ù^QÝÛ]\Ë›Û’Ù^QÝÛ‹˜š[™
\ÊK\Ë—Ú[™\“Û“[Ý\ÙQÝÛ]\Ë›Û“[Ý\ÙQÝÛ‹˜š[™
\ÊK\Ë—Ú[™\“Û“[Ý\ÙU\]\Ë›Û“[Ý\ÙU\˜š[™
\ÊK\Ë—Ú[™\“Û“[Ý\ÙS[Ý™O]\Ë›Û“[Ý\ÙS[Ý™K˜š[™
\ÊK\Ë—Ú[™\“Û“[Ý\ÙUÚY[]\Ë›Û“[Ý\ÙUÚY[˜š[™
\ÊK\Ë—Ú[™\ÛÛ^Y[O]\Ë›ÛÛÛ^Y[K˜š[™
\ÊK\Ë—Ú[™\•\]O]\Ë\]K˜š[™
\ÊK\ËšY]Ë˜Yœ˜[YT™\]Y\Ý\ŠQ•T—ÐÐSQTWÕTUK\Ë—Ú[™\•\]JK\Ë˜Y[œ]\Ý[™\œÊ
_Y\ÜÜÙJ
^Ý\Ëœ™[[Ý™R[œ]\Ý[™\œÊ
K\ËšY]Ëœ™[[Ý™Qœ˜[YT™\]Y\Ý\ŠQ•T—ÐÐSQTWÕTUK\Ë—Ú[™\•\]J_]\]JJ^ÙI‰ŠLMŠNØÛÛœÝ]\ËœÝ]HOOTÙÎÜÝÚ]Ú
\ËœÝ]J^ØØ\ÙHÎ\Ëš[™U˜]™[

K\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜JNØœ™XZÎØØ\ÙH\Ëš[™V›ÛÛSÜÊ
K\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜JNØœ™XZÎØØ\ÙH\Ëš[™Q˜YÓ[Ý™[Y[

K\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜JNØœ™XZÎØØ\ÙHŽ\Ëš[™T›Ý][ÛŠ
K\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜JNØœ™XZÎØØ\ÙHN\Ëš[™T[“[Ý™[Y[

K\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜J_]\Ëš[™PÛÛ\Ú[Û‰‰\ËšY]Ë˜Ø[Y\˜K˜Y\Ý[]YUÐ]›ÚYÛÛ\Ú[Û•Ú]^Y\Š\ËšY]Ë\ËšY]Ë[S^Y\‹\Ë›Z[‘\Ý[˜ÙPÛÛ\Ú[ÛŠK‰‰\ËšY]Ë™\Ü]Ú]™[
Ý\N’ÙË“SÕ‘QJK™ËœÙ]

_Z[š]X]Q˜YÊ
^Ý\ËœÝ]OLË˜ÛÜJ\Ë™Ù]ÛÜ›Ú[]ØÜ™Y[–JÊJKËœÙ]

_Z[™Q˜YÓ[Ý™[Y[

^Ý\Ë™Ù]ÛÜ›Ú[œ›ÛSX][™P]ØÜ™Y[–JËËž‹™ÊKËœÝX•™XÝÜœÊË™ÊK\Ë˜Ø[Y\˜KœÜÚ][Û‹˜Y
ÊKËœÙ]

_Z[š]X]T[Š
^Ý\ËœÝ]OL_Z[™T[“[Ý™[Y[

^Ó™ËœÙ]
T™Ëž™ËžK
K\Ë˜Ø[Y\˜K›ØØ[ÕÛÜ›
™ÊK\Ë˜Ø[Y\˜KœÜÚ][Û‹˜ÛÜJ™Ê_Z[š]X]T›Ý][ÛŠ
^Ý\ËœÝ]OL‹Ë˜ÛÜJ\Ë™Ù]ÛÜ›Ú[]ØÜ™Y[–J™]ÈË’NVJJ\ËšY]Ë›XZ[“ÛÜ™Ùž[™Ú[™KÚYJ\ËšY]Ë›XZ[“ÛÜ™Ùž[™Ú[™KšZYÚ
JJNØÛÛœÝ]\Ë˜Ø[Y\˜KœÜÚ][Û‹™\Ý[˜ÙUÊÊNÓÙÏSX]˜XÛÜÊ
\Ë˜Ø[Y\˜KœÜÚ][Û‹ž‹QËžŠKÝ
_Z[™T›Ý][ÛŠ
^ØÛÛœÝK]\Ëœ›Ý]TÜYY
”™ËžÝ\ËšY]Ë›XZ[“ÛÜ™Ùž[™Ú[™KÚYOK]\Ëœ›Ý]TÜYY
”™ËžKÝ\ËšY]Ë›XZ[“ÛÜ™Ùž[™Ú[™KšZYÚ]\Ë˜Ø[Y\˜KœÜÚ][Û‹˜ÛÛ™J
KœÝXŠÊNÌOO]	‰ŒOOY_
ÙÊÙO]\Ë›Z[–™[š][™ÛI‰“ÙÊÙO]\Ë›X^™[š][™ÛI‰ŒOOYI‰ŠÙÊÏYK™ËœÙ]
JK™ËœÙ]œ›ÛU[š]™XÝÜœÊ\Ë˜Ø[Y\˜K\™ÊK‹˜\T]X]\›š[ÛŠ™ÊK™ËœÙ]œ›ÛSX]š^ÛÛ[[Š\Ë˜Ø[Y\˜K›X]š^
K™ËœÙ]œ›ÛP^\Ð[™ÛJ™ËJK‹˜\T]X]\›š[ÛŠ™ÊK™ËœÙ]
JK™ËœÙ]œ›ÛU[š]™XÝÜœÊ\Ë˜Ø[Y\˜K\™ÊKš[™\

K‹˜\T]X]\›š[ÛŠ™ÊJKOO]	‰Š™ËœÙ]
JK™ËœÙ]œ›ÛP^\Ð[™ÛJ™Ë
K‹˜\T]X]\›š[ÛŠ™ÊJJK\Ë˜Ø[Y\˜KœÜÚ][Û‹˜ÛÜJŠK\Ë˜Ø[Y\˜K›ÛÚÐ]
ÙÊK\Ë˜Ø[Y\˜KœÜÚ][Û‹˜Y
ÊK\Ë˜Ø[Y\˜K\]SX]š^ÛÜ›

_Z[š]X]V›ÛÛJ
^ØÛÛœÝOK]™[VNÑYË˜ÛÜJ\Ë™Ù]ÛÜ›Ú[]ØÜ™Y[–JÊJNØÛÛœÝ[™]ÈË”LÚYŠOŒO	‰\Ë›X^[]YO\Ë˜Ø[Y\˜KœÜÚ][Û‹žŠ^ØÛÛœÝYOŒÝ\Ëž›ÛÛR[‘˜XÝÜŽ\Ëž›ÛÛSÝ]˜XÝÜ‹]\ËšY]Ë™Ù]^[ÕÓY]\œÊ
KÝÚYŠ\Ë›X^™\ÛÛ][Û›Ÿ\Ë›Z[”™\ÛÛ][ÛŠ\™]\›ŽÝ\Ë˜Ø[Y\˜Kš\ÓÜÙÜ˜\XÐØ[Y\˜OÊ\ËœÝ]OM\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜JKÙÏ]\Ë˜Ø[Y\˜Kž›ÛÛKYÏUÙÊYËž]\Ë˜Ø[Y\˜KœÜÚ][Û‹ž‹™ÏL™Ï]\Ëž›ÛÛU˜]™[[YK\Ë\]S[Ý\ÙPÝ\œÛÜ•\J
JNŠ‹›\œ™XÝÜœÊ\Ë˜Ø[Y\˜KœÜÚ][Û‹YËKLKÝ
K\Ëš[š]X]U˜]™[
‹\Ëž›ÛÛU˜]™[[YK[LJJ__Z[™V›ÛÛSÜÊ
^Õ™ÏSX]›Z[Š™ÊÝÌYLËÚ™ËJNØÛÛœÝOUÙÊÕ™ÊŠYËUÙÊNÝ\Ë˜Ø[Y\˜Kž›ÛÛHOOYI‰Š\Ë˜Ø[Y\˜Kž›ÛÛOYK\Ë˜Ø[Y\˜K\]T›Ú™XÝ[Û“X]š^

K\ËšY]ËšY]ÕÓ›Ü›X[^™YÛÛÜ™ÊË™ÊK™ËžL™Ë[œ›Ú™XÝ
\Ë˜Ø[Y\˜JK\Ë˜Ø[Y\˜KœÜÚ][Û‹ž
ÏQYËžS™Ëž\Ë˜Ø[Y\˜KœÜÚ][Û‹žJÏQYËžKS™ËžK\Ë˜Ø[Y\˜K\]SX]š^ÛÜ›
L
JK\Ë\Ý[š[X][Û‘[™

_Z[š]X]TÛX\˜]™[

^ØÛÛœÝ]\Ë™Ù]ÛÜ›Ú[]ØÜ™Y[–JÊKO[™]ÈË”LÙK˜ÛÜJ
KœÝXŠ\Ë˜Ø[Y\˜KœÜÚ][ÛŠKKžLK››Ü›X[^™J
NØÛÛœÝ]\Ë˜Ø[Y\˜KœÜÚ][Û‹™\Ý[˜ÙUÊ
K\Ë˜ÚŽK›\œ
\ËœÛX\˜]™[ZYÚZ[‹\ËœÛX\˜]™[ZYÚX^X]›Z[Š‹ÍYLËJJKO[™]ÈË”LÚK˜ÛÜJ
K\Ë™[˜X›T›Ý][Û‰‰šK˜Y
K›][\TØØ[\ŠŠ‹[ŠJKKž]žŠÛ‹\Ë˜Ø[Y\˜Kš\ÓÜÙÜ˜\XÐØ[Y\˜I‰ŠÙÏ]\Ë˜Ø[Y\˜Kž›ÛÛKYÏUÙÊŠJÓX]›Z[Š‹ÍYLËJJKKž]\Ë˜Ø[Y\˜KœÜÚ][Û‹žŠK\Ëš[š]X]U˜]™[
K˜]]È‹L
_Z[š]X]U˜]™[
K‹Š^ÚYŠ\ËœÝ]OLË\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜JK™ÏL\Ë\]S[Ý\ÙPÝ\œÛÜ•\J
KÏ]\Ë™[˜X›T›Ý][Û‰‰œ‰‰Š‹š\Ô]X]\›š[ÛŸ‹š\Õ™XÝÜŒÊKYÏ[‹™Ë˜ÛÜJ\Ë˜Ø[Y\˜KœÜÚ][ÛŠKÙË˜ÛÜJ\Ë˜Ø[Y\˜Kœ]X]\›š[ÛŠKÉ‰Š‹š\Ô]X]\›š[ÛÔYË˜ÛÜJŠNœ‹š\Õ™XÝÜŒÉ‰ŠOO\Ê\Ë˜Ø[Y\˜K›ÛÚÐ]
ŠKYË˜ÛÜJ\Ë˜Ø[Y\˜Kœ]X]\›š[ÛŠK\Ë˜Ø[Y\˜Kœ]X]\›š[Û‹˜ÛÜJÙÊJNŠ\Ë˜Ø[Y\˜KœÜÚ][Û‹˜ÛÜJ
K\Ë˜Ø[Y\˜K›ÛÚÐ]
ŠKYË˜ÛÜJ\Ë˜Ø[Y\˜Kœ]X]\›š[ÛŠK\Ë˜Ø[Y\˜Kœ]X]\›š[Û‹˜ÛÜJÙÊK\Ë˜Ø[Y\˜KœÜÚ][Û‹˜ÛÜJ™ÊJJJKÙË˜ÛÜJ
K\Ëš[œÝ[˜]™[
Z™ÏLÙ[ÙHYŠ˜]]ÈOOYJ^ØÛÛœÝOSX]›Z[ŠK™\Ý[˜ÙUÊ\Ë˜Ø[Y\˜KœÜÚ][ÛŠKÝ\Ë˜]]Õ˜]™[[YQ\Ý
NÚYŠ™Ï\Ë˜ÚŽK›\œ
\Ë˜]]Õ˜]™[[YSZ[‹\Ë˜]]Õ˜]™[[YSX^JKÊ^ØÛÛœÝKKKJ”YË››Ü›X[^™J
K™Ý
\Ë˜Ø[Y\˜Kœ]X]\›š[Û‹››Ü›X[^™J
JNÚ™ÊLJÌŠ™ÏSX]›Z[Š™Ë\Ë˜]]Õ˜]™[[YSX^
__Y[ÙH™ÏY_Z[™U˜]™[

^Õ™ÏSX]›Z[Š™ÊÝÌYLËÚ™ËJNØÛÛœÝO\YÏÝ\ËœÛ[ÛÝ
™ÊN•™ÎÝ\Ë˜Ø[Y\˜KœÜÚ][Û‹›\œ™XÝÜœÊ™ËÙËJNØÛÛœÝUÙÊÙJŠYËUÙÊNÝ\Ë˜Ø[Y\˜Kš\ÓÜÙÜ˜\XÐØ[Y\˜I‰\Ë˜Ø[Y\˜Kž›ÛÛHOO\‰‰Š\Ë˜Ø[Y\˜Kž›ÛÛO\‹\Ë˜Ø[Y\˜K\]T›Ú™XÝ[Û“X]š^

JKLOORÉ‰\Ë˜Ø[Y\˜Kœ]X]\›š[Û‹œÛ\œ]X]\›š[ÛœÊÙËYËJK\Ë\Ý[š[X][Û‘[™

_]\Ý[š[X][Û‘[™

^ÌOOOU™É‰Š\ËœÝ]OTÙË\Ë\]S[Ý\ÙPÝ\œÛÜ•\J
J_YÛÕÕÜšY]Ê
^ØÛÛœÝ[™]ÈË”LO[™]ÈË”ŽÝ˜ÛÜJ\Ë™Ù]ÛÜ›Ú[]ØÜ™Y[–J™]ÈË’NVJJ\ËšY]Ë›XZ[“ÛÜ™Ùž[™Ú[™KÚYJ\ËšY]Ë›XZ[“ÛÜ™Ùž[™Ú[™KšZYÚ
JJKžŠÏSX]›Z[Š\Ë›X^[]YK\Ë˜Ø[Y\˜KœÜÚ][Û‹™\Ý[˜ÙUÊ
JKKœÙ]œ›ÛP^\Ð[™ÛJ™]ÈË”L
K
K
K\Ëš[š]X]U˜]™[
˜]]È‹KL
_YÛÕÔÝ\šY]Ê
^Ý\Ë˜Ø[Y\˜Kš\ÓÜÙÜ˜\XÐØ[Y\˜I‰ŠÙÏ]\Ë˜Ø[Y\˜Kž›ÛÛKYÏX™ÊK\Ëš[š]X]U˜]™[
ÙË˜]]È‹ÙËL
_YÙ]ÛÜ›Ú[œ›ÛSX][™P]ØÜ™Y[–JJ^Û]X\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—OØ\™Ý[Y[ÖÌ—N›™]ÈË”LÜ™]\›ˆYË˜ÛÜJ\ËšY]ËšY]ÕÓ›Ü›X[^™YÛÛÜ™Ê
JKËœÙ]œ›ÛPØ[Y\˜JYË\Ë˜Ø[Y\˜JK	Ë˜ÛÛœÝ[YKËœ˜^Kš[\œÙXÝ[™J	ËŠKŸYÙ]ÛÜ›Ú[]ØÜ™Y[–J
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWN›™]ÈË”LÜ™]\›ˆ\ËšY]Ë™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\
J_\Ë™Ù]ÛÜ›Ú[œ›ÛSX][™P]ØÜ™Y[–J\Ë™Ü›Ý[™]™[JK_XY[œ]\Ý[™\œÊ
^Ý\ËšY]Ë™ÛQ[[Y[˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹\Ë—Ú[™\“Û’Ù^QÝÛ‹LJK\ËšY]Ë™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\ÙYÝÛˆ‹\Ë—Ú[™\“Û“[Ý\ÙQÝÛ‹LJK\ËšY]Ë™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\Ù]\‹\Ë—Ú[™\“Û“[Ý\ÙU\LJK\ËšY]Ë™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\Ù[X]™H‹\Ë—Ú[™\“Û“[Ý\ÙU\LJK\ËšY]Ë™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\Ù[[Ý™H‹\Ë—Ú[™\“Û“[Ý\ÙS[Ý™KLJK\ËšY]Ë™ÛQ[[Y[˜Y]™[\Ý[™\ŠÚY[‹\Ë—Ú[™\“Û“[Ý\ÙUÚY[LJK\ËšY]Ë™ÛQ[[Y[˜Y]™[\Ý[™\Š˜ÛÛ^Y[H‹\Ë—Ú[™\ÛÛ^Y[KLJ_\™[[Ý™R[œ]\Ý[™\œÊ
^Ý\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠšÙ^YÝÛˆ‹\Ë—Ú[™\“Û’Ù^QÝÛ‹L
K\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š›[Ý\ÙYÝÛˆ‹\Ë—Ú[™\“Û“[Ý\ÙQÝÛ‹LJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š›[Ý\Ù]\‹\Ë—Ú[™\“Û“[Ý\ÙU\LJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š›[Ý\Ù[X]™H‹\Ë—Ú[™\“Û“[Ý\ÙU\LJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š›[Ý\Ù[[Ý™H‹\Ë—Ú[™\“Û“[Ý\ÙS[Ý™KLJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠÚY[‹\Ë—Ú[™\“Û“[Ý\ÙUÚY[LJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š˜ÛÛ^Y[H‹\Ë—Ú[™\ÛÛ^Y[KLJ_]\]S[Ý\ÙPÝ\œÛÜ•\J
^ÜÝÚ]Ú
\ËœÝ]J^ØØ\ÙHÙÎ\ËšY]Ë™ÛQ[[Y[œÝ[K˜Ý\œÛÜ]\Ë˜Ý\œÛÜ‹™Y˜][Øœ™XZÎØØ\ÙH\ËšY]Ë™ÛQ[[Y[œÝ[K˜Ý\œÛÜ]\Ë˜Ý\œÛÜ‹™˜YÎØœ™XZÎØØ\ÙHN\ËšY]Ë™ÛQ[[Y[œÝ[K˜Ý\œÛÜ]\Ë˜Ý\œÛÜ‹œ[ŽØœ™XZÎØØ\ÙHÎ\ËšY]Ë™ÛQ[[Y[œÝ[K˜Ý\œÛÜ]\Ë˜Ý\œÛÜ‹˜]™[Øœ™XZÎØØ\ÙH\ËšY]Ë™ÛQ[[Y[œÝ[K˜Ý\œÛÜ]\Ë˜Ý\œÛÜ‹›Ü×Þ›ÛÛNØœ™XZÎØØ\ÙHŽ\ËšY]Ë™ÛQ[[Y[œÝ[K˜Ý\œÛÜ]\Ë˜Ý\œÛÜ‹œ›Ý]__]\]S[Ý\ÙTÜÚ][Û[™[J
^Ý\ËšY]Ë™]™[ÕšY]ÐÛÛÜ™ÊÊK™Ë˜ÛÜJÊKœÝXŠYÊKYË˜ÛÜJÊ_\Ù]Ý\œÛÜŠJ^Ý\Ë˜Ý\œÛÜ–ÝOYK\Ë\]S[Ý\ÙPÝ\œÛÜ•\J
_[Û“[Ý\ÙQÝÛŠ
^ÚYŠ\Ë™[˜X›Y	‰Šœ™]™[Y˜][

K\ËšY]Ë™ÛQ[[Y[™›ØÝ\Ê
KÙÏOO]\ËœÝ]JJ^ÚYŠÏ]˜]Û‹\Ë\]S[Ý\ÙTÜÚ][Û[™[J
KYÏOO]˜]ÛŠZYŠ˜Ý›Ù^J^ÚYŠ]\Ë™[˜X›T›Ý][ÛŠ\™]\›ŽÝ\Ëš[š]X]T›Ý][ÛŠ
_Y[ÙH\Ëš[š]X]Q˜YÊ
NÙ[ÙHYŠYÏOO]˜]ÛŠ^ÚYŠ]\Ë™[˜X›TÛX\˜]™[
\™]\›ŽÝ\Ëš[š]X]TÛX\˜]™[

_Y[ÙHYŠ™ÏOO]˜]ÛŠ^ÚYŠ]\Ë™[˜X›T[Š\™]\›ŽÝ\Ëš[š]X]T[Š
_]\Ë\]S[Ý\ÙPÝ\œÛÜ•\J
__[Û“[Ý\ÙU\

^Ýœ™]™[Y˜][

KÈOO]\ËœÝ]I‰OO]\ËœÝ]I‰žÏOO]˜]Û‰‰Š\ËœÝ]OTÙÊK\Ë\]S[Ý\ÙPÝ\œÛÜ•\J
_[Û“[Ý\ÙS[Ý™J
^Ý\Ë™[˜X›Y	‰Šœ™]™[Y˜][

K\Ë\]S[Ý\ÙTÜÚ][Û[™[J
KÙÈOO]\ËœÝ]I‰\ËšY]Ë››ÝYžPÚ[™ÙJ
J_[Û’Ù^QÝÛŠ
^ÚYŠÙÏOO]\ËœÝ]I‰\Ë™[˜X›Y
\ÝÚ]Ú
šÙ^PÛÙJ^ØØ\ÙH\Ë˜Ø[Y\˜Kš\ÓÜÙÜ˜\XÐØ[Y\˜_\Ë™ÛÕÕÜšY]Ê
NØœ™XZÎØØ\ÙHN\Ë™ÛÕÔÝ\šY]Ê
NØœ™XZÎØØ\ÙHÌŽ\Ë™[˜X›TÛX\˜]™[	‰\Ëš[š]X]TÛX\˜]™[

__[Û“[Ý\ÙUÚY[

^Ý\Ë™[˜X›Y	‰Šœ™]™[Y˜][

KœÝÜ›ÜYØ][ÛŠ
KÙÏOO]\ËœÝ]I‰\Ëš[š]X]V›ÛÛJ
J_[ÛÛÛ^Y[J
^Ýœ™]™[Y˜][

_\Û[ÛÝ

^Ü™]\›Š
ŠŒŠŠËLŠ
JJŠŒKŒŸ_XÛÛœÝOV™ËPO[™]ÈË”‹O[™]ÈË”LØÛ\ÜÈ^ØÛÛœÝXÝÜŠ
^Ýœ›Ú™XÝ[Û‰‰ŠÛÛœÛÛKØ\›Š”[˜\•[PZ[\ˆ›Ú™XÝ[Ûˆ\˜[Y]\ˆ\È\™XØ]Y\ÙHÜœÈ[œÝXYˆŠK˜ÜœÏÏÏ]œ›Ú™XÝ[ÛŠK\Ë—ØÜœÏ]˜ÜœË\Ë—Ý˜[œÙ›Ü›O^ØÛÛÜ™Î›™]ÈK‘I
‘TÑÎÌˆ‹
KÜÚ][ÛŽ›™]ÈË”L›Ü›X[›™]ÈË”L
J_K\Ë—Ý]ÛÝ[]]ÛÝ[ÏÌ_YÙ]]ÛÝ[

^Ü™]\›ˆ\Ë—Ý]ÛÝ[YÙ]ÜœÊ
^Ü™]\›ˆ\Ë—ØÜœß\™\\™J
^ØÛÛœÝO]Ü™]\›ˆK›˜”›ÝÏLŠŠŠ›]™[
ÌJKK˜ÛÛÜ™[˜]\Ï[™]ÈK‘I
\Ë˜ÜœÊK_XÙ[\Š
^Ü™]\›ˆ˜Ù[\Š\Ë—Ý˜[œÙ›Ü›K˜ÛÛÜ™ÊKKœÙ]
\Ë—Ý˜[œÙ›Ü›K˜ÛÛÜ™Ëž\Ë—Ý˜[œÙ›Ü›K˜ÛÛÜ™ËžK
K_]™\^ÜÚ][ÛŠ
^Ü™]\›ˆ\Ë—Ý˜[œÙ›Ü›KœÜÚ][Û‹œÙ]
žžK
K\Ë—Ý˜[œÙ›Ü›KœÜÚ][ÛŸ]™\^›Ü›X[

^Ü™]\›ˆ\Ë—Ý˜[œÙ›Ü›K››Ü›X[]T›Ú™XÝ
J^Ü™]\›ˆKÙ\Ý
Ý
ŠK™X\ÝYKÙ\Ý
_]”›Ú™XÝ
J^Ü™]\›ˆKœÛÝ]
Ý
ŠK››ÜYKœÛÝ]
_XÛÛ\]TÚ\™XX›Q^[

^Ü™]\›žÜÚ\™XX›Q^[›™]ÈKž”Š˜ÜœÊKœÙ]œ›ÛQ^[
ÝÙ\ÝŒX\Ý“X]˜XœÊÙ\Ý]™X\Ý
KÛÝ]Œ›Ü“X]˜XœÊ››Ü]œÛÝ]
_JK]X]\›š[ÛŽ™PKÜÚ][ÛŽ\Ë˜Ù[\Š
K˜ÛÛ™J
___XÛÛœÝPOXÛ\ÜÈ^[™È[ØÛÛœÝXÝÜŠKŠ^Û]X\™Ý[Y[Ë›[™ÝŒÉ‰›ÚYOOX\™Ý[Y[ÖÌ×OØ\™Ý[Y[ÖÌ×NžßNØÛÛœÝÛZ[”ÝX™]š\Ú[Û“]™[šOLX^ÝX™]š\Ú[Û“]™[›ÏMK‹‹˜_O[‹VÙK˜Üœ×NÚÛË™Ù]
K˜ÜœÊ_ÛËœÙ]
K˜ÜœËJNØÛÛœÝÏ[™]ÈJØÜœÎ™K˜ÜœßJNÜÝ\\ŠŸ™]ÈË–R›ÙWKËÝ[SX]š^Ù]Î›‹‹˜_JK\Ëš\Ô[˜\“^Y\HL\Ë™^[YK\Ë›Z[”ÝX™]š\Ú[Û“]™[ZK\Ë›X^ÝX™]š\Ú[Û“]™[[ß_KÐOXÛ\ÜÈ^[™ÈYžØÛÛœÝXÝÜŠJ^Û]X\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—OØ\™Ý[Y[ÖÌ—NžßNÜËŽK‘QUSÕTœÙ]
JKÝ\\ŠK˜ÜœËŠK\Ëš\Ô[˜\•šY]ÏHLØÛÛœÝYKœ[˜\‘[Y[œÚ[ÛœÊ
KOSX]›X^
‹ž‹žJNÝ\Ë˜Ø[Y\˜LÑ›™X\KŒK\Ë˜Ø[Y\˜LÑ™˜\]\Ë˜Ø[Y\˜LÑš\ÓÜÙÜ˜\XÐØ[Y\˜OÌ™LÎŒŠšK\Ë˜Ø[Y\˜LÑ\]T›Ú™XÝ[Û“X]š^

NØÛÛœÝÏ[™]ÈPJœ[˜\ˆ‹K‹›Øš™XÝÙŠNÝ\Ë›XZ[“ÛÜ™Ùž[™Ú[™K›X™[™™[™\™\‹š[™›Õ[S^Y\[Ëš[™›Ë\Ë˜Y^Y\ŠÊNØÛÛœÝO\‹œXÙ[Y[ßNØKš\Ñ^[
K˜ÛÛÜ™XK˜ÛÛÜ™K˜Ù[\Š
KK[XK[LKšXY[™ÏXKšXY[™ßKœ˜[™ÙOXKœ˜[™Ù_JK™‹˜[œÙ›Ü›PØ[Y\˜UÓÛÚÐ]\™Ù]
\Ë\Ë˜Ø[Y\˜LÑJK‹››ÐÛÛ›Ûß
\Ë˜ÛÛ›ÛÏ[™]ÈJ\Ë‹˜ÛÛ›ÛÊJK\Ë[S^Y\[ßXY^Y\Š
^Ü™]\›ˆÝ\\‹˜Y^Y\Š\Ë[S^Y\Š__KÐOMÙ[˜Ý[ÛˆPJK‹‹J^ÚYŠK›^Y\•\]TÝ]VÜ‹šYJZYŠš\ÐØ[˜Ù[YÛÛ[X[™^Ù\[ÛŠYK›^Y\•\]TÝ]VÜ‹šYKœÝXØÙ\ÜÊ
NÙ[ÙHYŠ[œÝ[˜Ù[ÙˆÞ[^\œ›ÜŠYK›^Y\•\]TÝ]VÜ‹šYK™˜Z[\™JL
NÙ[Ù^ØÛÛœÝYK›^Y\•\]TÝ]VÜ‹šYK™\œ›ÜÛÝ[›ÐNÙK›^Y\•\]TÝ]VÜ‹šYK™˜Z[\™J]K››ÝÊ
KÝ\™Ù]]™[›ŸJKÚ[™ÝËœÙ][Y[Ý]



OOžÚK››ÝYžPÚ[™ÙJKLJ_JKYLÊ™K›^Y\•\]TÝ]VÜ‹šYKœÙXÛÛ™Õ[[™^žJ
J__XÛÛœÝO[™]ÈK‘I
‘TÑÎÌˆ‹
KÐO^Ý\]JKŠ^ÚYŠ\‹œ\™[	‰œ‹˜Ú[™[‹›[™Ý
\™]\›ˆ›ÚYØKœ™[[Ý™PÚ[™[[™ÛX[\™XÝ\œÚ]™[JKŠNÚYŠ\‹š\ÚX›J\™]\›ŽÚYŠ›ÚYOO\‹›^Y\•\]TÝ]VÙKšYJ\‹›^Y\•\]TÝ]VÙKšYO[™]ÈXNÙ[ÙHYŠ\‹›^Y\•\]TÝ]VÙKšYK˜Ø[•žU\]J
J\™]\›ˆ›ÚY‹›[šÖÙKšYOË™›Ü‘XXÚ

OžÝ›^Y\‹›Øš™XÝÙ˜Y

K›Y\Ú\ËœÜÚ][Û‹žTØJKœ\™[
OÜ‹™Ù[ÚYZYÚŒ›Y\Ú\Ë\]SX]š^ÛÜ›

_JJNØÛÛœÝ\‹™Ù]^[ÐžT›Ú™XÝ[ÛŠKœÛÝ\˜ÙK˜ÜœÊ_Ü‹™^[KO[–ÌKž›ÛÛNÚYŠHOYKž›ÛÛK›Z[Ÿ]\ËœÛÝ\˜ÙK™^[[œÚYS[Z]
‹™^[J_KœÛÝ\˜ÙKš\Ñš[TÛÝ\˜ÙI‰ˆ\‹™^[š\ÔÚ[[œÚYJKœÛÝ\˜ÙK™^[˜Ù[\ŠJJJ\™]\›ˆ›ÚY‹›^Y\•\]TÝ]VÙKšYK››Ó[Ü™U\]TÜÜÚX›J
NÜ‹›^Y\•\]TÝ]VÙKšYK›™]ÕžJ
NØÛÛœÝÏ^Û^Y\Ž™K^[ÔÛÝ\˜ÙN›‹šY]ÎšY]Ë™\]Y\Ý\ŽœŸNÜ™]\›ˆœØÚY[\‹™^XÝ]JÊK[Š
OžÜ‹›^Y\•\]TÝ]VÙKšYK››Ó[Ü™U\]TÜÜÚX›J
K‹™›Ü‘XXÚ

OžÛÊ‹›[šÖÙKšYO\‹›[šÖÙKšY_×K‹˜\ÊšY]Ëœ™Y™\™[˜ÙPÜœÊK‹›Y\Ú\ËœÜÚ][Û‹žTØJKœ\™[
OÜ‹™Ù[ÚYZYÚŒ‹\]SX]š^ÛÜ›

KK›Û“Y\ÚÜ™X]Y	‰™K›Û“Y\ÚÜ™X]Y
‹
K‹œ\™[ÊK›Øš™XÝÙ˜Y
ŠK‹›[šÖÙKšYKœ\Ú
ŠJN—ØKœ™[[Ý™PÚ[™[[™ÛX[\™XÝ\œÚ]™[JKŠK‹›^Y\YJNœ‹›^Y\•\]TÝ]VÙKšYK™˜Z[\™JKL
_JJ_JK
O˜PJ‹‹K‹›]™[šY]ÊJJ__NØÛÛœÝOKLKPO[™]ÈË’UTNØÛ\ÜÈH^[™ÈË”Y]žØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë›^Y\]\Ë˜ÜœÏ]œ\™[[SX]š^Ù]Ëš[™^ÙŠ˜ÜœÊKLOO]\Ë˜ÜœÉ‰˜ÛÛœÛÛK™\œ›ÜŠ•[šÛ›ÝÛˆÜœÎˆ‹˜ÜœÊK\Ë^\™\ÏV×K\Ë›Ù™œÙ]ØØ[\ÏV×K\Ë›]™[ZK\Ë›™YYÕ\]OHLK\Ë—Ú[™\Ð‘]™[J
OOžÝ\Ë›™YYÕ\]OHLK˜Y]™[\Ý[™\Šš\ÚX›K\›Ü\KXÚ[™ÙY‹\Ë—Ú[™\Ð‘]™[
K˜Y]™[\Ý[™\Š›ÜXÚ]K\›Ü\KXÚ[™ÙY‹\Ë—Ú[™\Ð‘]™[
_YÙ]Y

^Ü™]\›ˆ\Ë›^Y\‹šYYÙ]ÜXÚ]J
^Ü™]\›ˆ\Ë›^Y\‹›ÜXÚ]_YÙ]š\ÚX›J
^Ü™]\›ˆ\Ë›^Y\‹š\ÚX›_Z[š]œ›ÛT\™[
J^ÚYŠ	‰›]™[\Ë›]™[
^Û]LØÛÛœÝ]\ËœÛÜ™\Ý\™[^\™\Ê^\™\ÊNÙ›ÜŠÛÛœÝÙˆJ^ØÛÛœÝO[‹™š[™

OO™I‰š\Ò[œÚYJK™^[
JJNÙI‰\ËœÙ]^\™JŠÊËK›Ù™œÙ]Ô\™[
K™^[
J___\ÛÜ™\Ý\™[^\™\Ê
^Ü™]\›ˆÔÛÜY


JOOŠ
JOOš\Õ^\™OOOYKš\Õ^\™OÌš\Õ^\™OËLNŒJJJ_

JOO™K™^[ž›ÛÛK]™^[ž›ÛÛJJJJJ_Y\ÜÜÙT™Y˜]Û•^\™\Ê
^ØÛÛœÝO]›X\


JOO\ËœÚÝ[Üš]U^\™P][™^
K
OÙN‹LJJK™š[\Š
O‹LHOO]
JNÙK›[™ÝOO]›[™ÝÝ\Ë™\ÜÜÙJLJN\Ë™\ÜÜÙP][™^\ÊJ_Y\ÜÜÙJ
^ÊJ\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌJ_\™Ý[Y[ÖÌJI‰Š\Ë›^Y\‹œ™[[Ý™Q]™[\Ý[™\Šš\ÚX›K\›Ü\KXÚ[™ÙY‹\Ë—Ú[™\Ð‘]™[
K\Ë›^Y\‹œ™[[Ý™Q]™[\Ý[™\Š›ÜXÚ]K\›Ü\KXÚ[™ÙY‹\Ë—Ú[™\Ð‘]™[
K\Ë—Û\Ý[™\œÏ^ßJK\Ë™\ÜÜÙP][™^\Ê\Ë^\™\ËšÙ^\Ê
JK\Ë^\™\ÏV×K\Ë›Ù™œÙ]ØØ[\ÏV×K\Ë›]™[Z_Y\ÜÜÙP][™^\Ê
^Ù›ÜŠÛÛœÝHÙˆ
^ØÛÛœÝ]\Ë^\™\ÖÙWNÝ	‰š\Õ^\™I‰™\ÜÜÙJ
_]\Ë›™YYÕ\]OHL\Ù]^\™JKŠ^Ý\ËœÚÝ[Üš]U^\™P][™^
JI‰Š\Ë›]™[YI‰™K™^[ÙK™^[ž›ÛÛN\Ë›]™[\Ë^\™\ÖÝOY_[\Ë›Ù™œÙ]ØØ[\ÖÝO\‹\Ë›™YYÕ\]OHL
_\Ù]^\™\ÊJ^Ý\Ë™\ÜÜÙT™Y˜]Û•^\™\Ê
NÙ›ÜŠ]L]›[™ÝÜŽÊÊÜŠ]\ËœÙ]^\™J‹Ü—KVÜ—J_\ÚÝ[Üš]U^\™P][™^
J^Ü™]\›ˆ]\Ë^\™\ÖÝ_I‰™Kš\Õ^\™__XÛ\ÜÈH^[™È^ÙÙ]Y™™XÝÝ\J
^Ü™]\›ˆ\Ë›^Y\‹™Y™™XÝÝ\_YÙ]Y™™XÝÜ\˜[Y]\Š
^Ü™]\›ˆ\Ë›^Y\‹™Y™™XÝÜ\˜[Y]\ŸYÙ]˜[œÜ\™[

^Ü™]\›ˆ\Ë›^Y\‹˜[œÜ\™[_XÛ\ÜÈH^[™È^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
NØÛÛœÝO^ØšX\ÎŒ[ÙN˜‘UK›Z[Ž‹LKÌ›X^ŒKÌNÚYŠ\ËœØØ[Q˜XÝÜLK\ÙT™Ø˜U^\™Q[]˜][ÛŠ]›ÝÈK›[ÙOX”‘ÐKKž›X^MYLË™]È\œ›ÜŠ”™\ÝÜ™H\È™X]\™HŠNÝ\ÙPÛÛÜ•^\™Q[]˜][ÛÊ\ËœØØ[Q˜XÝÜ]˜ÛÛÜ•^\™Q[]˜][Û“X^‹]˜ÛÛÜ•^\™Q[]˜][Û“Z[–‹K›[ÙOXÓÓÔ‹K˜šX\Ï]˜ÛÛÜ•^\™Q[]˜][Û“Z[–‹\Ë›Z[]\Ë›^Y\‹˜ÛÛÜ•^\™Q[]˜][Û“Z[–‹\Ë›X^]\Ë›^Y\‹˜ÛÛÜ•^\™Q[]˜][Û“X^ŠNŠ\Ë›Z[L\Ë›X^L
K\Ë˜šX\Ï]˜šX\ÏÏÙK˜šX\Ë\Ë›[ÙO]›[ÙOÏÙK›[ÙK\Ëž›Z[]ž›Z[ÏÙKž›Z[‹\Ëž›X^]ž›X^ÏÙKž›X^˜Y]™[\Ý[™\ŠœØØ[K\›Ü\KXÚ[™ÙY‹\Ë—Ú[™\Ð‘]™[
_YÙ]ØØ[J
^Ü™]\›ˆ\Ë›^Y\‹œØØ[J\ËœØØ[Q˜XÝÜŸY\ÜÜÙJ
^ÜÝ\\‹™\ÜÜÙJ
K	‰\Ë›^Y\‹œ™[[Ý™Q]™[\Ý[™\ŠœØØ[K\›Ü\KXÚ[™ÙY‹\Ë—Ú[™\Ð‘]™[
_Z[š]œ›ÛT\™[
J^ØÛÛœÝ]\Ë›]™[ÜÝ\\‹š[š]œ›ÛT\™[
JK\Ë\]SZ[“X^[]˜][ÛŠ
KˆOO]\Ë›]™[	‰\Ë™\Ü]Ú]™[
Ý\Nˆœ˜\Ý\‘[]˜][Û“]™[Ú[™ÙY‹›ÙN\ßJ_\Ù]^\™\ÊJ^ØÛÛœÝ]™š[™

O›[O]
JNÚYŠ\Š\™]\›ŽØÛÛœÝ]\Ë›]™[Ý\Ëœ™\XÙS›Ñ]U˜[YQœ›ÛU^\™JŠKÝ\\‹œÙ]^\™\ÊJK\Ë\]SZ[“X^[]˜][ÛŠ
KˆOO]\Ë›]™[	‰\Ë™\Ü]Ú]™[
Ý\Nˆœ˜\Ý\‘[]˜][Û“]™[Ú[™ÙY‹›ÙN\ßJ_]\]SZ[“X^[]˜][ÛŠ
^ØÛÛœÝ]\Ë^\™\Ë™š[™[™^

Oš\Õ^\™JJNÚYŠLHOO]	‰ˆ]\Ë›^Y\‹\ÙPÛÛÜ•^\™Q[]˜][ÛŠ^ØÛÛœÝÛZ[Ž™KX^œŸOY[˜Ý[ÛŠKŠ^ØÛÛœÝÝÚY›‹ZYÚšK]NœßO]š[XYÙNÚYŠ\Ê\™]\›žÛZ[Ž›[X^›[NÛ]ÛZ[Ž›ËX^˜_OY[˜Ý[ÛŠKŠ^ØÛÛœÝYKžOYKžKÏYKž‹ÏVÐJ‹‹JKJ‹ŠÜËJKJ‹ŠÜËJÜÊKJ‹‹JÜÊWK™š[\Š
O›[O]
JNÜ™]\›ˆË›[™ÝÞÛZ[Ž“X]›Z[Š‹‹›ÊKX^“X]›X^
‹‹›Ê_NžÛZ[ŽŒKÌX^‹LKÌ_JKŠNØÛÛœÝSX]™›ÛÜŠKžŠ›ŠNÚYŠŒŠ^ØÛÛœÝSX]™›ÛÜŠKžŠšJKÏSX]™›ÛÜŠKž
›ŠKSX]™›ÛÜŠKžJšJKOSX]›X^
X]™›ÛÜŠÌÌŠKŠNÙ›ÜŠ]OZÙO
ÝÙJÏ]J^Û]YJŠŸ
JØÎØÛÛœÝO]
ÛÙ›ÜŠÝNÝ
Ï]J^ØÛÛœÝO\ÖÝNÙHOO\‹››Ñ]U˜[YI‰ŠOSX]›X^
KJKÏSX]›Z[ŠËJJ___\™]\›ˆ[O\‹ž›Z[‰‰ŠÏ‹ž›Z[‰‰ŠÏ\‹ž›Z[ŠKO‹ž›Z[‰‰ŠO\‹ž›Z[ŠJK[O\‹ž›X^	‰ŠÏœ‹ž›X^	‰ŠÏ\‹ž›X^
KOœ‹ž›X^	‰ŠO\‹ž›X^
JKOOOKLKÌÏOOLKÌÞÛZ[Ž›[X^›[NžÛZ[Ž›ËX^˜__J\Ë^\™\ÖÝK\Ë›Ù™œÙ]ØØ[\ÖÝKÛ›Ñ]U˜[YN\Ë›^Y\‹››Ñ]U˜[YK›Z[Ž\Ë›^Y\‹ž›Z[‹›X^\Ë›^Y\‹ž›X^JNÝ\Ë›Z[OYI‰\Ë›X^O\Ÿ
\Ë›Z[Z\Ó˜SŠJOÝ\Ë›Z[Ž™K\Ë›X^Z\Ó˜SŠŠOÝ\Ë›X^œŠ__\™\XÙS›Ñ]U˜[YQœ›ÛU^\™J
^ØÛÛœÝO]\Ë›^Y\‹››Ñ]U˜[YNÚYŠ[OYJ\™]\›ŽØÛÛœÝ]\Ë^\™\Ë™š[™

O›[O]
JK\‰‰œ‹š[XYÙI‰œ‹š[XYÙK™]KO]š[XYÙI‰š[XYÙK™]NÚI‰ˆY[˜Ý[ÛŠJ^ØÛÛœÝ]›[™ÝÜ™]\›ˆÌO™I‰Ü‹LWO™I‰ÓX]œÜ\
ŠKLWO™I‰Ü‹SX]œÜ\
ŠWO™_JKJI‰™[˜Ý[ÛŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNŠ
OOŒX\™Ý[Y[Ë›[™ÝŒØ\™Ý[Y[ÖÌ—N›ÚYÙ›ÜŠ]LO]›[™ÝÛNÊÊÛŠ]Û—OOO\‰‰ŠÛ—OYJŠJ_JK‰‰™[˜Ý[ÛŠK‹Š^Ü™]\›ˆ™^[›Ù™œÙ]Ô\™[
K™^[ŠKOœ–Ù[˜Ý[ÛŠKŠ^ØÛÛœÝSX]™›ÛÜŠÜŠKÜ‹OYKž
Ý	\‹ÜŠ™Kž‹ÏYKžJÛŠ™KÎÜ™]\›ˆX]™›ÛÜŠÊœŠJœŠÓX]™›ÛÜŠJœŠ_J‹MŠW_J‹‹PJKJ__XÛÛœÝPOLÐOLKPOL‹POLÎÙ[˜Ý[ÛˆJJ^ØÛÛœÝYK™Ü›Ý\Ë™š[\Š
OO™O]
JNÜ™]\›ˆ‹›[™ÝÜ–Ü‹›[™ÝLWN™K™Ü›Ý\ÖÌ_Y[˜Ý[ÛˆJKŠ^Ü™]\›ˆOOZOÜË›Z[ÏÌ“X]›Z[ŠX]˜ÙZ[

JÝ
KÌŠJ_Y[˜Ý[ÛˆÐJK‹‹J^Û]ÎØÛÛœÝÏZOË›X^ÏÌKÌÚYŠ‹›ÝÙ\Ý]™[\œ›ÜˆOLKÌ
\Ï^J‹›ÝÙ\Ý]™[\œ›Ü‹‹JKÏ[‹›ÝÙ\Ý]™[\œ›ÜO\ÏÜËLNœË\OOYÐI‰ŠÏ]JË›Ü[ÛœÊJNÙ[Ù^ÜÝÚ]Ú
\J^ØØ\ÙHÐNœÏ]JK›Ü[ÛœÊNØœ™XZÎØØ\ÙHPNœÏY[˜Ý[ÛŠKŠ^Ü™]\›ˆX]›Z[ŠJÊ‹š[˜Ü™[Y[JJ_JK‹›Ü[ÛœÊNØœ™XZÎØØ\ÙHPNœÏ^JK‹JNØœ™XZÎÙY˜][œÏY_\ÏSX]›Z[ŠËÊ_\™]\›ˆßY[˜Ý[ÛˆÐJ
^Ü™]\›ˆš\ÚX›OÌLŒLY[˜Ý[ÛˆJ
^Ü™]\›ˆJœ™\]Y\Ý\‹œ\™[	‰œ™\]Y\Ý\‹›X]\šX[	‰ˆJ›^Y\‹š\Ñ[]˜][Û“^Y\‰‰œ™\]Y\Ý\‹›X]\šX[™Ù][]˜][Û•[J
I‰\™Ù]]™[]œ™\]Y\Ý\‹›X]\šX[™Ù][]˜][Û•[J
K›]™[
I‰œ™\]Y\Ý\‹›^Y\•\]TÝ]VÝ›^Y\‹šYI‰›^Y\‹œÛÝ\˜ÙK—Ù™X]\™\ÐØXÚ\ÖÝ›^Y\‹˜Üœ×I‰œ™\]Y\Ý\‹›X]\šX[š\ÚX›J_Y[˜Ý[ÛˆPJK‹‹J^Ü™]\›žÝšY]Î^Y\Ž™K^[ÔÛÝ\˜ÙNœ‹^[Ñ\Ý[˜][ÛŽ›‹™\]Y\Ý\ŽšKš[Üš]NÐJK›X]\šX[
KX\›Q›Ü[˜Ý[ÛŽ˜K\X[ØY[™ÎˆL_Y[˜Ý[ÛˆÐJJ^Ü™]\›ˆK›X\


KŠOO™K›Ù™œÙ]Ô\™[
Ü—K™^[
JJ_Y[˜Ý[ÛˆPJK‹Š^ØÛÛœÝO\‹›X]\šX[ÚYŠ[ŸZJ\™]\›ŽØÛÛœÝÏ\‹™Ù]^[ÐžT›Ú™XÝ[ÛŠK˜ÜœÊKÏ\ÖÌKž›ÛÛNÚYŠÏ™Kž›ÛÛK›X^ÏKž›ÛÛK›Z[Š\™]\›ŽÛ]OZK™Ù][JKšY
NÚYŠ›ÚYOO\‹›^Y\•\]TÝ]VÙKšYJ^ÚYŠ‹›^Y\•\]TÝ]VÙKšYO[™]ÈXKYKœÛÝ\˜ÙK™^[[œÚYS[Z]
‹™^[ÊI‰ŠK››Õ^\™T\™[Ý]ÚYS[Z][‹›X]\šX[[‹›X]\šX[™Ù][_[‹›X]\šX[™Ù][JKšY
JJ\™]\›ˆ›ÚY‹›^Y\•\]TÝ]VÙKšYK››Ó[Ü™U\]TÜÜÚX›J
NÚYŠXJ^ØOYKœÙ]\˜\Ý\“›ÙJŠNØÛÛœÝ[‹›X]\šX[Ë™Ù][JKšY
NØKš[š]œ›ÛT\™[
Ê_ZYŠK›]™[YKœÛÝ\˜ÙKž›ÛÛK›Z[Š\™]\›ˆ›ÚYšY]Ë››ÝYžPÚ[™ÙJ‹LJ_ZYŠZKš\ÚX›J\™]\›ŽÚYŠYKš\ÚX›_\‹›^Y\•\]TÝ]VÙKšYK˜Ø[•žU\]J
J\™]\›ŽÚYŠK›]™[\ÖÌKž›ÛÛJ\™]\›ˆ›ÚY‹›^Y\•\]TÝ]VÙKšYK››Ó[Ü™U\]TÜÜÚX›J
NÚYŠK™œ›Þ™[Š\™]\›ŽØÛÛœÝ\‹›^Y\•\]TÝ]VÙKšYK™˜Z[\™T\˜[\ËÏ\ÖÌKž›ÛÛ_‹›]™[WÐJK\]TÝ˜]YÞKËK›]™[KœÛÝ\˜ÙKž›ÛÛJNÚYŠYKœÛÝ\˜ÙKš\Õ™XÝÜ”ÛÝ\˜ÙI‰šXK›]™[˜Ê\™]\›ˆ›ÚY
›ÝÙ\Ý]™[\œ›ÜˆOLKÌ	‰œ‹›^Y\•\]TÝ]VÙKšYK››Ó[Ü™U\]TÜÜÚX›J
JNÚYŠYKœÛÝ\˜ÙK™^[[œÚYS[Z]
‹™^[
J\™]\›ˆ‹›^Y\•\]TÝ]VÙKšYK››Ñ]JÝ\™Ù]]™[šJK›ÚYšY]Ë››ÝYžPÚ[™ÙJ‹LJNØÛÛœÝO\Ë›X\

O[Y^[\™[

JJNÜ‹›^Y\•\]TÝ]VÙKšYK›™]ÕžJ
NØÛÛœÝQPJšY]ËKKËŠNÜ™]\›ˆœØÚY[\‹™^XÝ]J
K[Š
OžÚYŠ\‹›^Y\•\]TÝ]VÙKšYJ\™]\›ŽØÛÛœÝ]›X\


JOO›[O]ÝžÚ\Õ^\™NˆLK^[œÖÙW_JJKOTÐJ‹ÊNØKœÙ]^\™\Ê‹JK‹›^Y\•\]TÝ]VÙKšYKœÝXØÙ\ÜÊ
_JK
O˜PJ‹‹KšY]ÊJJ_Y[˜Ý[ÛˆÐJK‹Š^ØÛÛœÝO\‹›X]\šX[ÚYŠ[ŸZJ\™]\›ŽØÛÛœÝÏ\‹™Ù]^[ÐžT›Ú™XÝ[ÛŠK˜ÜœÊKÏ\ÖÌKž›ÛÛNÚYŠÏ™Kž›ÛÛK›X^ÏKž›ÛÛK›Z[Š\™]\›ŽÛ]OZK™Ù][]˜][Û•[J
NÚYŠ_
OYKœÙ]\˜\Ý\“›ÙJŠJK›ÚYOO\‹›^Y\•\]TÝ]VÙKšYJ^Ü‹›^Y\•\]TÝ]VÙKšYO[™]ÈXNØÛÛœÝO[‹›X]\šX[Ë™Ù][JKšY
NÚYŠKš[š]œ›ÛT\™[
KÊKK›]™[YKœÛÝ\˜ÙKž›ÛÛK›Z[Š\™]\›ˆ›ÚYšY]Ë››ÝYžPÚ[™ÙJ‹LJ_ZYŠK™œ›Þ™[ŸZKš\ÚX›_\‹›^Y\•\]TÝ]VÙKšYK˜Ø[•žU\]J
J\™]\›ŽØÛÛœÝ\‹›^Y\•\]TÝ]VÙKšYK™˜Z[\™T\˜[\ËÏWÐJK\]TÝ˜]YÞKÖÌKž›ÛÛKK›]™[KœÛÝ\˜ÙKž›ÛÛJNÚYŠÏXK›]™[ÏœÖÌKž›ÛÛJ\™]\›ˆ›ÚY‹›^Y\•\]TÝ]VÙKšYK››Ó[Ü™U\]TÜÜÚX›J
NÚYŠYKœÛÝ\˜ÙK™^[[œÚYS[Z]
‹™^[ÊJ\™]\›ˆ‹›^Y\•\]TÝ]VÙKšYK››Ñ]JÝ\™Ù]]™[˜ßJK›ÚYšY]Ë››ÝYžPÚ[™ÙJ‹LJNØÛÛœÝ\Ë›X\

O[Y^[\™[
ÊJJNÜ‹›^Y\•\]TÝ]VÙKšYK›™]ÕžJ
NØÛÛœÝOQPJšY]ËKËŠNÜ™]\›ˆœØÚY[\‹™^XÝ]JJK[Š
OžÚYŠ\‹›^Y\•\]TÝ]VÙKšYJ\™]\›ŽÚYŠÏXK›]™[
\™]\›ˆ›ÚY‹›^Y\•\]TÝ]VÙKšYK››Ó[Ü™U\]TÜÜÚX›J
NØÛÛœÝTÐJÊNØKœÙ]^\™\ÊŠK‹›^Y\•\]TÝ]VÙKšYKœÝXØÙ\ÜÊ
_JK
O˜PJ‹‹KËšY]ÊJJ_Y[˜Ý[ÛˆJ
^Ü™]\›ˆ[˜Ý[ÛŠJ^ÙK›X]\šX[Ëœ™[[Ý™U[I‰Š›ÚYOOYK›X]\šX[™[]˜][Û•[I‰™KœÙ]›ÞŠÛZ[ŽŒX^ŒJKK›X]\šX[œ™[[Ý™U[J
JKK›^Y\•\]TÝ]I‰™K›^Y\•\]TÝ]VÝI‰™[]HK›^Y\•\]TÝ]VÝ__XÛ\ÜÈP^ØÛÛœÝXÝÜŠ
^Ý\ËœÚ^™O]\ËœÏ[[\ËœÛ[›ÛO[[\Ë›[[[\Ù]œ›ÛSZXÛXXÐØ[Xœ˜][ÛŠ
^Û]OHJ\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWJ_\™Ý[Y[ÖÌWNÝ\ËœÏJ™]ÈË’NVJK™œ›ÛP\œ˜^JœÊK\ËœÛ[›ÛOJ™]ÈË’UTJK™œ›ÛP\œ˜^JœÛLÍMÊK\Ë›[[™]ÈË”L\ËœËžOYOÝ\ËœÚ^™KžK]\ËœËžN\ËœËžK\ËœÛ[›ÛKÏ]›[Z]
ŠŒ‹›[‰‰Š\Ë›[‹™œ›ÛP\œ˜^J›[ŠK\Ë›[‹ž]™]]Ê_XÛÛ™J
^ØÛÛœÝ[™]ÈPJ\ËœÚ^™K˜ÛÛ™J
JNÜ™]\›ˆœÏ]\ËœË˜ÛÛ™J
KœÛ[›ÛO]\ËœÛ[›ÛK˜ÛÛ™J
K›[]\Ë›[‹˜ÛÛ™J
K_XÛÛœÝO[™]ÈË”LØÛ\ÜÈH^[™ÈËX›^ØÛÛœÝXÝÜŠ
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNŒLOX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNŒLX\™Ý[Y[Ë›[™ÝŒØ\™Ý[Y[ÖÌ—N›ÚYX\™Ý[Y[Ë›[™ÝŒÉ‰›ÚYOOX\™Ý[Y[ÖÌ×OØ\™Ý[Y[ÖÌ×N‹ŒKOX\™Ý[Y[Ë›[™Ý	‰›ÚYOOX\™Ý[Y[ÖÍOØ\™Ý[Y[ÖÍNŒYMÏX\™Ý[Y[Ë›[™ÝOØ\™Ý[Y[ÖÍWN›ÚYOX\™Ý[Y[Ë›[™ÝØ\™Ý[Y[ÖÍ—N›ÚYÝ]š\Õ™XÝÜŒÝ›™]ÈË’NVJ
KOX_žÝžKÝ\\Š›ÚYK‹JK\ËœÚ^™O]\Ë™›ØØ[YKš\Õ™XÝÜŒÙN›™]ÈË’NVJKJK\Ë˜Ù[\\Ÿ˜ÛÛ™J
K›][\TØØ[\ŠJK\ËœÚÙ]Ï[ß\Ë^\™SX]š^ÛÜ›[™\œÙO[™]ÈËšÛØš™XÝ™Yš[™T›Ü\J\Ë™›Ýˆ‹ÙÙ]Š
OOŒŠœË˜ÚŽKœ˜YÑYÊX]˜][ŒŠ\ËœÚ^™KžKŠ\Ë™›ØØ[žJJKÙ]OžØÛÛœÝOKJ\ËœÚ^™KžKÓX][ŠË˜ÚŽK™YÕÔ˜Y
J
JNÝ\Ë™›ØØ[žYK\Ë™›ØØ[žOY__JK\Ë™\ÝÜ[Û[™]ÈPJ\ËœÚ^™JK\Ë›X\ÚÔ]]›ÚY\Ë›X\ÚÏ]›ÚY\Ë\]T›Ú™XÝ[Û“X]š^

_]\]T›Ú™XÝ[Û“X]š^

^ÚYŠ]\Ë™›ØØ[
\™]\›ŽØÛÛœÝ]\Ë›™X\‹O]Ý\Ë™›ØØ[ž]Ý\Ë™›ØØ[žKKYJ\Ë˜Ù[\‹žOK\Š\Ë˜Ù[\‹žKÏ[ŠÙJ\ËœÚ^™KžÏZJÜŠ\ËœÚ^™KžNÝ\Ëœ›Ú™XÝ[Û“X]š^›XZÙT\œÜXÝ]™J‹ËËK\Ë™˜\ŠK\Ëœ›Ú™XÝ[Û“X]š^™[[Y[ÖÍOLŠ\ËœÚÙ]ËÝ\ËœÚ^™KžØÛÛœÝO]\ËœÚ^™KžÝ\ËœÚ^™KžK]\Ë˜\ÜXÝØNÔKœÙ]
\Ëž›ÛÛK\Ëž›ÛÛKJKŒOÔKžÏ[”KžJ[\Ëœ›Ú™XÝ[Û“X]š^œØØ[JJ_XÛÜJJ^Ü™]\›ˆÝ\\‹˜ÛÜJJK\ËœÚ^™O]œÚ^™K˜ÛÛ™J
K\Ë™›ØØ[]™›ØØ[˜ÛÛ™J
K\Ë˜Ù[\]˜Ù[\‹˜ÛÛ™J
K\Ë™\ÝÜ[Û]™\ÝÜ[Û‹˜ÛÛ™J
K\Ë^\™SX]š^ÛÜ›[™\œÙO]^\™SX]š^ÛÜ›[™\œÙK˜ÛÛ™J
K\ËœÚÙ]Ï]œÚÙ]Ë\Ë›X\ÚÔ]]›X\ÚÔ]\Ë›X\ÚÏ]›X\ÚË\ß_XÛÛœÝOTKO^ÌÎžÛY]Ùˆ˜[œÛ]Vˆ‹ÚYÛŽ‹L_KžÛY]Ùˆ˜[œÛ]Vˆ‹ÚYÛŽŒ_KÍÎžÛY]Ùˆ˜[œÛ]V‹ÚYÛŽ‹L_KÎNžÛY]Ùˆ˜[œÛ]V‹ÚYÛŽŒ_KÌÎžÛY]Ùˆœ›Ý]Vˆ‹ÚYÛŽŒK›ÔÜYYˆLKÍžÛY]Ùˆœ›Ý]Vˆ‹ÚYÛŽ‹LK›ÔÜYYˆLKÚY[\žÛY]Ùˆ˜[œÛ]Vˆ‹ÚYÛŽŒKÛ™\ÚÝˆLKÚY[ÝÛŽžÛY]Ùˆ˜[œÛ]Vˆ‹ÚYÛŽ‹LKÛ™\ÚÝˆL_NÙ[˜Ý[ÛˆJ
^Ýœ™]™[Y˜][

K\Ë—Ú\Ó[Ý\ÙQÝÛHLØÛÛœÝO]\ËšY]Ë™]™[ÕšY]ÐÛÛÜ™Ê
NÝ\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙVYKž\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙVOYKž_Y[˜Ý[ÛˆÐJ
^Ýœ™]™[Y˜][

K\Ë—Ú\Ó[Ý\ÙQÝÛHL\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙV]ÝXÚ\ÖÌKœYÙV\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙVO]ÝXÚ\ÖÌKœYÙV_Y[˜Ý[ÛˆJ
^ÚYŠLOO]\Ë—Ú\Ó[Ý\ÙQÝÛŠ^ØÛÛœÝO]\ËšY]Ë™]™[ÕšY]ÐÛÛÜ™Ê
K\Ë˜ÚŽK™YÕÔ˜Y
\Ë—ØØ[Y\˜LÑ™›ÝŠKÝ\ËšY]Ë›XZ[“ÛÜ™Ùž[™Ú[™KšZYÚÝ\Ë—ØØ[Y\˜LÑœ›Ý]VJ
Kž]\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙV
JœŠK\Ë—ØØ[Y\˜LÑœ›Ý]V

KžK]\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙVJJœŠK\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙVYKž\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙVOYKžK\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë—ØØ[Y\˜LÑLJ__Y[˜Ý[ÛˆJ
^Ý\Ë—Ú\Ó[Ý\ÙQÝÛHL_Y[˜Ý[ÛˆPJ
^ØÛÛœÝOSVÝšÙ^PÛÙWNÙI‰Š\Ë›[Ý™\Ë™[]JJKœ™]™[Y˜][

J_Y[˜Ý[ÛˆÐJ
^ØÛÛœÝOSVÝšÙ^PÛÙWNÙI‰Š\Ë›[Ý™\Ë˜Y
JK\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë—ØØ[Y\˜LÑLJKœ™]™[Y˜][

J_Y[˜Ý[ÛˆJ
^Ë]™[VOÝ\Ë›[Ý™\Ë˜Y
KÚY[\
N\Ë›[Ý™\Ë˜Y
KÚY[ÝÛŠK\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë—ØØ[Y\˜LÑLJ_XÛ\ÜÈÐH^[™ÈË”Y]žØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNÜÝ\\Š
K\ËšY]Ï]\Ë›Ü[ÛœÏYK\Ë—ØØ[Y\˜LÑ]˜Ø[Y\˜LÑ\Ë›[Ý™\Ï[™]ÈÙ]\Ë›[Ý™TÜYYLL\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙVL\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙVOL\Ë—Ú\Ó[Ý\ÙQÝÛHLK™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\ÙYÝÛˆ‹K˜š[™
\ÊKLJK™ÛQ[[Y[˜Y]™[\Ý[™\ŠÝXÚÝ\‹ÐK˜š[™
\ÊKLJNØÛÛœÝSK˜š[™
\ÊNÝ™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\Ù[[Ý™H‹‹LJK™ÛQ[[Y[˜Y]™[\Ý[™\ŠÝXÚ[Ý™H‹‹LJK™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\Ù]\‹K˜š[™
\ÊKLJK™ÛQ[[Y[˜Y]™[\Ý[™\ŠÝXÚ[™‹K˜š[™
\ÊKLJK™ÛQ[[Y[˜Y]™[\Ý[™\ŠÚY[‹K˜š[™
\ÊKLJK™ÛQ[[Y[˜Y]™[\Ý[™\ŠšÙ^]\‹PK˜š[™
\ÊKL
K™ÛQ[[Y[˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹ÐK˜š[™
\ÊKL
K\ËšY]Ë˜Yœ˜[YT™\]Y\Ý\ŠQ•T—ÐÐSQTWÕTUK\Ë\]K˜š[™
\ÊJKK™›ØÝ\ÓÛ“[Ý\ÙSÝ™\‰‰™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\Ù[Ý™\ˆ‹


OO™ÛQ[[Y[™›ØÝ\Ê
JJKK™›ØÝ\ÓÛÛXÚÉ‰™ÛQ[[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹


OO™ÛQ[[Y[™›ØÝ\Ê
JJ_Z\Õ\Ù\’[\˜XÝ[™Ê
^Ü™]\›ˆOO]\Ë›[Ý™\ËœÚ^™_\Ë—Ú\Ó[Ý\ÙQÝÛŸ]\]JJ^ÙI‰ŠLMŠNÙ›ÜŠÛÛœÝHÙˆ\Ë›[Ý™\Ê]\Ë—ØØ[Y\˜LÑÙK›Y]ÙJKœÚYÛŠŠK››ÔÜYYÌN\Ë›[Ý™TÜYY
JÌYLÊNÚYŠ\Ë›[Ý™\ËœÚ^™OŒ\Ë—Ú\Ó[Ý\ÙQÝÛŠ^Ý\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë—ØØ[Y\˜LÑ
NÙ›ÜŠÛÛœÝÙˆ\Ë›[Ý™\Ê]›Û™\ÚÝ	‰\Ë›[Ý™\Ë™[]J
___XÛÛœÝPOQÐNÙ[˜Ý[ÛˆJKŠ^ØÛÛœÝKJœË˜ÚŽK™YÕÔ˜Y
‹]™›ÝŠNÜ™]\›ˆË˜ÚŽK˜Û[\
K[‹Š_XÛÛœÝO[™]ÈË”L
K
NÙ[˜Ý[ÛˆJKŠ^ÙKœ]X]\›š[Û‹œÙ]œ›ÛU[š]™XÝÜœÊKK\
KKœ›Ý]VJ‹œ›Ý]VJKKœ›Ý]V
‹œ›Ý]V
K››ÝYžPÚ[™ÙJ˜Ø[Y\˜LÑ
_XÛÛœÝPO^ÌÎžÛY]Ùˆ˜[œÛ]Vˆ‹ÚYÛŽ‹L_KžÛY]Ùˆ˜[œÛ]Vˆ‹ÚYÛŽŒ_KÍÎžÛY]Ùˆ˜[œÛ]V‹ÚYÛŽ‹L_KÎNžÛY]Ùˆ˜[œÛ]V‹ÚYÛŽŒ_KÌÎžÛY]Ùˆ˜[œÛ]VH‹ÚYÛŽŒ_KÍžÛY]Ùˆ˜[œÛ]VH‹ÚYÛŽ‹L__NÙ[˜Ý[ÛˆÐJ
^Ý\Ë˜Ø[Y\˜KœÜÚ][Û‹žŠÏ]XÛÛœÝPO[™]ÈË”LO[™]ÈË”‹	O[™]ÈË“Î\
–VˆŠNÙ[˜Ý[ÛˆJ
^ÖPK˜ÛÜJ\Ë˜Ø[Y\˜KœÜÚ][ÛŠKPK››Ü›X[^™J
K\Ë˜Ø[Y\˜KœÜÚ][Û‹˜Y
PK›][\TØØ[\Š
J_XÛ\ÜÈÐH^[™ÈË”Y]žØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNÚYŠÝ\\Š
K\Ëš\Ñš\œÝ\œÛÛÛÛ›ÛÏHL\Ë˜Ø[Y\˜O]˜Ø[Y\˜LÑ\ËšY]Ï]\Ë›[Ý™\Ï[™]ÈÙ]Kœ[›Ü˜[XT˜][Ê^ØÛÛœÝLŒ
™Kœ[›Ü˜[XT˜][ËÊŠ“X]”JNÙK™\XØ[“ÕLOYKœ[›Ü˜[XT˜][ÏÌNœË˜ÚŽKœ˜YÑYÊŠ“X]˜][ŠŒÊŠ
JJ_YK™\XØ[“ÕYK™\XØ[“ÕŸNK›[Ý™TÜYY]›ÚYOOYK›[Ý™TÜYYÌL™K›[Ý™TÜYY\Ë›Ü[ÛœÏYK\Ë—Ú\Ó[Ý\ÙQÝÛHLK\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙVL\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙVOL\Ë—ÜÝ]O^Ü›Ý]VŒ›Ý]VNŒÛ˜\ÚÝ

^Ü™]\›žÜ›Ý]V\Ëœ›Ý]V›Ý]VN\Ëœ›Ý]V___K\Ëœ™\Ù]

K\Ë™]™[\Ý[™\œÏYK™\ØX›Q]™[\Ý[™\œËK™\ØX›Q]™[\Ý[™\œß
\Ë—ÛÛ“[Ý\ÙQÝÛ]\Ë›Û“[Ý\ÙQÝÛ‹˜š[™
\ÊK\Ë—ÛÛ“[Ý\ÙS[Ý™O]\Ë›Û“[Ý\ÙS[Ý™K˜š[™
\ÊK\Ë—ÛÛ“[Ý\ÙU\]\Ë›Û“[Ý\ÙU\˜š[™
\ÊK\Ë—ÛÛ“[Ý\ÙUÚY[]\Ë›Û“[Ý\ÙUÚY[˜š[™
\ÊK\Ë—ÛÛ’Ù^U\]\Ë›Û’Ù^U\˜š[™
\ÊK\Ë—ÛÛ’Ù^QÝÛ]\Ë›Û’Ù^QÝÛ‹˜š[™
\ÊK\Ë—ÛÛÛÛ^Y[O]\Ë›ÛÛÛ^Y[K˜š[™
\ÊK™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\ÙYÝÛˆ‹\Ë—ÛÛ“[Ý\ÙQÝÛ‹LJK™ÛQ[[Y[˜Y]™[\Ý[™\ŠÝXÚÝ\‹\Ë—ÛÛ“[Ý\ÙQÝÛ‹LJK™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\Ù[[Ý™H‹\Ë—ÛÛ“[Ý\ÙS[Ý™KLJK™ÛQ[[Y[˜Y]™[\Ý[™\ŠÝXÚ[Ý™H‹\Ë—ÛÛ“[Ý\ÙS[Ý™KLJK™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\Ù]\‹\Ë—ÛÛ“[Ý\ÙU\LJK™ÛQ[[Y[˜Y]™[\Ý[™\ŠÝXÚ[™‹\Ë—ÛÛ“[Ý\ÙU\LJK™ÛQ[[Y[˜Y]™[\Ý[™\ŠÚY[‹\Ë—ÛÛ“[Ý\ÙUÚY[LJK™ÛQ[[Y[˜Y]™[\Ý[™\Š˜ÛÛ^Y[H‹\Ë—ÛÛÛÛ^Y[KLJKØÝ[Y[˜Y]™[\Ý[™\ŠšÙ^YÝÛˆ‹\Ë—ÛÛ’Ù^QÝÛ‹LJKØÝ[Y[˜Y]™[\Ý[™\ŠšÙ^]\‹\Ë—ÛÛ’Ù^U\LJJK\ËšY]Ë˜Yœ˜[YT™\]Y\Ý\ŠQ•T—ÐÐSQTWÕTUK\Ë\]K˜š[™
\ÊJK\Ë—ÛÛ‘›ØÝ\ÏJ
OO™ÛQ[[Y[™›ØÝ\Ê
K\Ë™›ØÝ\ÓÛ“[Ý\ÙSÝ™\YK™›ØÝ\ÓÛ“[Ý\ÙSÝ™\‹K™›ØÝ\ÓÛ“[Ý\ÙSÝ™\‰‰™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\Ù[Ý™\ˆ‹\Ë—ÛÛ‘›ØÝ\ÊK\Ë™›ØÝ\ÓÛÛXÚÏYK™›ØÝ\ÓÛÛXÚËK™›ØÝ\ÓÛÛXÚÉ‰™ÛQ[[Y[˜Y]™[\Ý[™\Š˜ÛXÚÈ‹\Ë—ÛÛ‘›ØÝ\ÊK‘TÑÎMÎO]œ™Y™\™[˜ÙPÜœÏÝ\Ë›[Ý™PØ[Y\˜U™\XØ[RN\Ë›[Ý™PØ[Y\˜U™\XØ[UÐ_Z\Õ\Ù\’[\˜XÝ[™Ê
^Ü™]\›ˆOO]\Ë›[Ý™\ËœÚ^™I‰ˆ]\Ë—Ú\Ó[Ý\ÙQÝÛŸ\™\Ù]

^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌI‰˜\™Ý[Y[ÖÌNÖKœÙ]œ›ÛU[š]™XÝÜœÊK\Ë˜Ø[Y\˜K\
KKš[™\

KK›][\J\Ë˜Ø[Y\˜Kœ]X]\›š[ÛŠK	KœÙ]œ›ÛT]X]\›š[ÛŠJK
\Ë—ÜÝ]Kœ›Ý]VIKž
K\Ë—ÜÝ]Kœ›Ý]VOIKž_]\]JKŠ^ÚYŠO]\Ë™[˜X›Y
^ÙI‰ŠLMŠNÙ›ÜŠÛÛœÝHÙˆ\Ë›[Ý™\ÊH˜[œÛ]VHOOYK›Y]ÙÝ\Ë›[Ý™PØ[Y\˜U™\XØ[
KœÚYÛŠ\Ë›Ü[ÛœË›[Ý™TÜYY
ÌYLÊN\Ë˜Ø[Y\˜VÙK›Y]ÙJKœÚYÛŠ\Ë›Ü[ÛœË›[Ý™TÜYY
ÌYLÊNÈLOO]\Ë—Ú\Ó[Ý\ÙQÝÛ‰‰ˆLOO\ŸJ\ËšY]Ë\Ë˜Ø[Y\˜K\Ë—ÜÝ]JK\Ë›[Ý™\ËœÚ^™I‰\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜J__[Û“[Ý\ÙQÝÛŠ
^ÚYŠO]\Ë™[˜X›Y
\™]\›ŽÝ\Ë—Ú\Ó[Ý\ÙQÝÛHLØÛÛœÝO]\ËšY]Ë™]™[ÕšY]ÐÛÛÜ™Ê
NÝ\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙVYKž\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙVOYKžK\Ë—ÜÝ]SÛ“[Ý\ÙQÝÛ]\Ë—ÜÝ]KœÛ˜\ÚÝ

_[Û“[Ý\ÙU\

^ÌO]\Ë™[˜X›Y	‰Š\Ë—Ú\Ó[Ý\ÙQÝÛHLJ_[Û“[Ý\ÙS[Ý™J
^ÚYŠO]\Ë™[˜X›Y	‰ˆLOO]\Ë—Ú\Ó[Ý\ÙQÝÛŠ^ØÛÛœÝO\Ë˜ÚŽK™YÕÔ˜Y
\Ë˜Ø[Y\˜K™›ÝŠKÝ\ËšY]Ë›XZ[“ÛÜ™Ùž[™Ú[™KšZYÚ]\ËšY]Ë™]™[ÕšY]ÐÛÛÜ™Ê
NÝ\Ë—ÜÝ]Kœ›Ý]VOJ‹ž]\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙV
J™JÝ\Ë—ÜÝ]SÛ“[Ý\ÙQÝÛ‹œ›Ý]VK\Ë—ÜÝ]Kœ›Ý]VUJ\Ë˜Ø[Y\˜K
‹žK]\Ë—ÛÛ“[Ý\ÙQÝÛ“[Ý\ÙVJJ™JÝ\Ë—ÜÝ]SÛ“[Ý\ÙQÝÛ‹œ›Ý]V\Ë›Ü[ÛœË™\XØ[“ÕŠKJ\ËšY]Ë\Ë˜Ø[Y\˜K\Ë—ÜÝ]J__[Û“[Ý\ÙUÚY[

^ÚYŠO]\Ë™[˜X›Y
\™]\›ŽØÛÛœÝO]™[VNÝ\Ë˜Ø[Y\˜K™›Ý\Ë˜ÚŽK˜Û[\
\Ë˜Ø[Y\˜K™›ÝŠÓX]œÚYÛŠJKLX]›Z[ŠL\Ë›Ü[ÛœË™\XØ[“ÕŠJK\Ë˜Ø[Y\˜K\]T›Ú™XÝ[Û“X]š^

K\Ë—ÜÝ]Kœ›Ý]VUJ\Ë˜Ø[Y\˜K\Ë—ÜÝ]Kœ›Ý]V\Ë›Ü[ÛœË™\XØ[“ÕŠKJ\ËšY]Ë\Ë˜Ø[Y\˜K\Ë—ÜÝ]J_[Û’Ù^U\

^ÚYŠO]\Ë™[˜X›Y
\™]\›ŽØÛÛœÝO\PVÝšÙ^PÛÙWNÙI‰Š\Ë›[Ý™\Ë™[]JJK\ËšY]Ë››ÝYžPÚ[™ÙJ›ÚYLJKœ™]™[Y˜][

J_[Û’Ù^QÝÛŠ
^ÚYŠO]\Ë™[˜X›Y
\™]\›ŽØÛÛœÝO\PVÝšÙ^PÛÙWNÙI‰Š\Ë›[Ý™\Ë˜Y
JK\ËšY]Ë››ÝYžPÚ[™ÙJ›ÚYLJKœ™]™[Y˜][

J_[ÛÛÛ^Y[J
^Ýœ™]™[Y˜][

_Y\ÜÜÙJ
^Ý\Ë™]™[\Ý[™\œß
\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š›[Ý\ÙYÝÛˆ‹\Ë—ÛÛ“[Ý\ÙQÝÛ‹LJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠÝXÚÝ\‹\Ë—ÛÛ“[Ý\ÙQÝÛ‹LJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š›[Ý\Ù[[Ý™H‹\Ë—ÛÛ“[Ý\ÙS[Ý™KLJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠÝXÚ[Ý™H‹\Ë—ÛÛ“[Ý\ÙS[Ý™KLJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š›[Ý\Ù]\‹\Ë—ÛÛ“[Ý\ÙU\LJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠÝXÚ[™‹\Ë—ÛÛ“[Ý\ÙU\LJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\ŠÚY[‹\Ë—ÛÛ“[Ý\ÙUÚY[LJK\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š˜ÛÛ^Y[H‹\Ë—ÛÛÛÛ^Y[KLJKØÝ[Y[œ™[[Ý™Q]™[\Ý[™\ŠšÙ^YÝÛˆ‹\Ë—ÛÛ’Ù^QÝÛ‹LJKØÝ[Y[œ™[[Ý™Q]™[\Ý[™\ŠšÙ^]\‹\Ë—ÛÛ’Ù^U\LJJK\Ë™›ØÝ\ÓÛ“[Ý\ÙSÝ™\‰‰\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š›[Ý\Ù[Ý™\ˆ‹\Ë—ÛÛ‘›ØÝ\ÊK\Ë™›ØÝ\ÓÛÛXÚÉ‰\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š˜ÛXÚÈ‹\Ë—ÛÛ‘›ØÝ\ÊK\Ë™\Ü]Ú]™[
Ý\Nˆ™\ÜÜÙHŸJ__XÛÛœÝORÐKO[™]ÈË•ŽPŠØÛÛÜŽŒMÍÍÌŒMK\\ÝˆLK˜[œÜ\™[ˆLÜXÚ]N‹_JNÙ[˜Ý[Ûˆ^JKŠ^ÝœÜÚ][Û‹˜ÛÜJJK\˜ÛÜJJK››Ü›X[^™J
K›ÛÚÐ]
ŠK\]SX]š^ÛÜ›
L
_XÛÛœÝžO[™]ÈË”LžO[™]ÈË”L^O[™]ÈË™ÒKÞO[™]ÈË”LÞO[™]ÈË”ŽÙ[˜Ý[Ûˆ^JKŠ^Û]X\™Ý[Y[Ë›[™ÝŒÉ‰›ÚYOOX\™Ý[Y[ÖÌ×OØ\™Ý[Y[ÖÌ×NŠ
OOžßKOX\™Ý[Y[Ë›[™Ý	‰›ÚYOOX\™Ý[Y[ÖÍOØ\™Ý[Y[ÖÍNŠ
OOžßKÏX\™Ý[Y[Ë›[™ÝI‰›ÚYOOX\™Ý[Y[ÖÍWOØ\™Ý[Y[ÖÍWNŠ
OOžßNÙK™Ù]XÚÚ[™ÔÜÚ][Û‘œ›ÛQ\
K™]™[ÕšY]ÐÛÛÜ™Ê
KžJNØÛÛœÝÏYK˜Ø[Y\˜LÑœÜÚ][Û‹™\Ý[˜ÙUÊžJKO\ÙKœXÚÓØš™XÝÐ]
LKŠN–×NØK›[™Ý	‰˜VÌK™\Ý[˜ÙOÏÊ^K™Ù]›Ü›X[X]š^
VÌK›Øš™XÝ›X]š^ÛÜ›
KžK˜ÛÜJVÌK™˜XÙK››Ü›X[
K˜\S›Ü›X[X]š^
^JKJVÌKœÚ[žJJN™K[S^Y\‰‰›ÏŽMJ™K˜Ø[Y\˜LÑ™˜\ÊK[S^Y\‹š\ÑÛØ™S^Y\ÜÞK˜ÛÜJžJK›][\TØØ[\ŠKŒJNœÞKœÙ]
JKŠžKÞJJNœÊ
_Y[˜Ý[ÛˆJ
^Ü™]\›ˆL
ÌÌ
“X]œÜ\

_XÛÛœÝÞOXÛ\ÜÈ^[™È^ØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNÜÝ\\ŠJK\Ëš\ÔÝ™Y]ÛÛ›ÛÏHL\Ë—ÛÛ“[Ý\ÙSÝ]\Ý\\‹›Û“[Ý\ÙU\˜š[™
\ÊK™ÛQ[[Y[˜Y]™[\Ý[™\Š›[Ý\Ù[Ý]‹\Ë—ÛÛ“[Ý\ÙSÝ]
K\Ëœ™]š[Ý\ÔÜÚ][Û]›ÚY\Ë˜Ý\œ™[ÜÚ][Û]›ÚY\Ë›™^ÜÚ][Û]›ÚY\ËšÙ^QÛÕÓ™^ÜÚ][ÛNL\ËšÙ^QÛÕÔ™]š[Ý\ÔÜÚ][ÛNË\ËšÙ^TÙ]Ø[Y\˜UÐÝ\œ™[ÜÚ][Û[™ÛÚÐ]™^MK\ËšÙ^TÙ]Ø[Y\˜UÐÝ\œ™[ÜÚ][Û[™ÛÚÐ]™]š[Ý\ÏNK\ËÙY[‘Ü›Ý\[™]È™‹^K‘Ü›Ý\\ËœÝ\™˜XÙQÜ›Ý[™YKœÝ\™˜XÙQÜ›Ý[™[˜Ý[ÛŠ
^ØÛÛœÝ[™]ÈËÑ
KÌŠNÜ™]\›ˆ™]ÈË™XQŠJ_J
K\ËœÝ\™˜XÙUØ[YKœÝ\™˜XÙUØ[[˜Ý[ÛŠ
^ØÛÛœÝ[™]ÈË˜™J‹JKO[™]ÈË™XQŠJNÜ™]\›ˆKœ›Ý]V
J‹SX]”JK_J
K\ËœÝ\™˜XÙ\Ï[™]ÈËŽK\ËœÝ\™˜XÙ\Ë˜Y
\ËœÝ\™˜XÙQÜ›Ý[™
K\ËœÝ\™˜XÙ\Ë˜Y
\ËœÝ\™˜XÙUØ[
K\ËšY]ËœØÙ[™K˜Y
\ËœÝ\™˜XÙ\ÊK\ËØ[X^\Ý[˜ÙOYKØ[X^\Ý[˜Ù_YLË\Ë˜[š[X][Û‘\˜][Û•Ø[YK˜[š[X][Û‘\˜][Û•Ø[Œ\Ë˜Z[[™ÜÓ^Y\YK˜Z[[™ÜÓ^Y\‹\Ë˜ÛÛ\]U[YOYK˜ÛÛ\]U[Y_K\Ë›Ù™œÙ]YK›Ù™œÙ]\Ë˜[œÙ›Ü›X][Û”ÜÚ][Û”XÚÓÛ•QÜ›Ý[™YK˜[œÙ›Ü›X][Û”ÜÚ][Û”XÚÓÛ•QÜ›Ý[™
O
K\Ë™[™]\Ë˜Ø[Y\˜K˜ÛÛ™J
_\Ù]Ý\œ™[ÜÚ][ÛŠ
^Ý\Ë˜Ý\œ™[ÜÚ][Û]\Ù]™^ÜÚ][ÛŠ
^Ý\Ë›™^ÜÚ][Û]\Ù]™]š[Ý\ÔÜÚ][ÛŠ
^Ý\Ëœ™]š[Ý\ÔÜÚ][Û][Û“[Ý\ÙU\

^ÌO]\Ë™[˜X›Y	‰ŠÝ\\‹›Û“[Ý\ÙU\

K\Ë—ÜÝ]SÛ“[Ý\ÙQ˜YÏÝ\Ë—ÜÝ]SÛ“[Ý\ÙQ˜YÏHLN˜^J\ËšY]Ë\Ë˜Z[[™ÜÓ^Y\‹\Ë›ÛÛXÚÓÛ‘Ü›Ý[™˜š[™
\ÊK\Ë›ÛÛXÚÓÛ•Ø[˜š[™
\ÊJJ_[Û“[Ý\ÙS[Ý™J
^ÌO]\Ë™[˜X›Y	‰ŠÝ\\‹›Û“[Ý\ÙS[Ý™J
K\Ë—Ú\Ó[Ý\ÙQÝÛÊ\Ë—ÜÝ]SÛ“[Ý\ÙQ˜YÏHL\ËœÝÜ[š[X][ÛœÊ
JN\ËÙY[Ÿ
^J\ËšY]Ë\Ë˜Z[[™ÜÓ^Y\‹

JOOžÙ^J\ËœÝ\™˜XÙ\ËJK\ËœÝ\™˜XÙQÜ›Ý[™š\ÚX›OHL\ËœÝ\™˜XÙUØ[š\ÚX›OHL_JK

JOOžÙ^J\ËœÝ\™˜XÙ\ËJK\ËœÝ\™˜XÙUØ[š\ÚX›OHL\ËœÝ\™˜XÙQÜ›Ý[™š\ÚX›OHL_JJK\ËšY]Ë››ÝYžPÚ[™ÙJ\ËœÝ\™˜XÙ\ÊJJ_\Ù]Ø[Y\˜UÐÝ\œ™[ÜÚ][ÛŠ
^ÝÝ\ËœÙ]Ø[Y\˜SÛ”ÜÚ][ÛŠ\Ë˜Ý\œ™[ÜÚ][Û‹\Ëœ™]š[Ý\ÔÜÚ][ÛŠN\ËœÙ]Ø[Y\˜SÛ”ÜÚ][ÛŠ\Ë˜Ý\œ™[ÜÚ][Û‹\Ë›™^ÜÚ][ÛŠ_\Ù]Ø[Y\˜SÛ”ÜÚ][ÛŠJ^Ý	‰™I‰Š\Ë˜Ø[Y\˜KœÜÚ][Û‹˜ÛÜJ
K\ËšY]Ë[S^Y\‰‰\ËšY]Ë[S^Y\‹š\ÑÛØ™S^Y\Ý\Ë˜Ø[Y\˜K\˜ÛÜJ
K››Ü›X[^™J
N\Ë˜Ø[Y\˜K\œÙ]
JK\Ë˜Ø[Y\˜K›ÛÚÐ]
JK\Ë˜Ø[Y\˜K\]SX]š^ÛÜ›

K\Ëœ™\Ù]

J_[ÛÛXÚÓÛ‘Ü›Ý[™

^Ý]\Ë˜[œÙ›Ü›X][Û”ÜÚ][Û”XÚÓÛ•QÜ›Ý[™

K\ËšY]Ë[S^Y\‰‰\ËšY]Ë[S^Y\‹š\ÑÛØ™S^Y\ÜÞK˜ÛÜJ
K››Ü›X[^™J
NœÞKœÙ]
JK˜Y
ÞK›][\TØØ[\Š\Ë›Ù™œÙ]
JNØÛÛœÝO]\Ë˜Ø[Y\˜KœÜÚ][Û‹™\Ý[˜ÙUÊ
K]\Ë˜ÛÛ\]U[YJJNÝ\Ë›[Ý™PØ[Y\˜UÊŠ_[ÛÛXÚÓÛ•Ø[

^Ý\Ë˜Ø[Y\˜KœÜÚ][Û‹™\Ý[˜ÙUÊ
O\ËØ[X^\Ý[˜ÙI‰\Ë˜[š[X]PØ[Y\˜SÛÚÐ]
\Ë˜[š[X][Û‘\˜][Û•Ø[
_X[š[X]PØ[Y\˜SÛÚÐ]
J^Ý\ËœÝÜ[š[X][ÛœÊ
KÞK˜ÛÜJ\Ë˜Ø[Y\˜Kœ]X]\›š[ÛŠK\Ë™[™˜ÛÜJ\Ë˜Ø[Y\˜JK\Ë™[™›ÛÚÐ]

K\ËÙY[[™]È™‹^K•ÙY[ŠÝŒJKÊÝŒ_KJK™X\Ú[™Ê™‹^K‘X\Ú[™Ë”]XY˜]XË“Ý]
K›ÛÛÛ\]J


OOžÝ\ËœÝÜ[š[X][ÛœÊ
_JJK›Û•\]J
OžÝ\Ë˜Ø[Y\˜Kœ]X]\›š[Û‹œÛ\œ]X]\›š[ÛœÊÞK\Ë™[™œ]X]\›š[Û‹
_JJKœÝ\

K\ËÙY[‘Ü›Ý\˜Y
\ËÙY[ŠK\Ë˜[š[X][Û‘œ˜[YT™\]Y\Ý\J
OOžÝ\ËÙY[‘Ü›Ý\\]J
K\Ëœ™\Ù]

K\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜J_K\ËšY]Ë˜Yœ˜[YT™\]Y\Ý\Š‘Q“Ô‘WÔ‘S‘T‹\Ë˜[š[X][Û‘œ˜[YT™\]Y\Ý\ŠK\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜J_[[Ý™PØ[Y\˜UÊ
^Û]KX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNLÚYŠ]
\™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NØÛÛœÝ[™]È›ÛZ\ÙJ
OžÙO]JJNÜ™]\›ˆ\ËœÝÜ[š[X][ÛœÊ
K\ËÙY[[™]È™‹^K•ÙY[Š\Ë˜Ø[Y\˜KœÜÚ][ÛŠKÊ˜ÛÛ™J
KŠK™X\Ú[™Ê™‹^K‘X\Ú[™Ë”]XY˜]XË“Ý]
K›ÛÛÛ\]J


OOžÝ\ËœÝÜ[š[X][ÛœÊ
KJ
_JJKœÝ\

K\ËÙY[‘Ü›Ý\˜Y
\ËÙY[ŠK\Ë˜[š[X][Û‘œ˜[YT™\]Y\Ý\J
OOžÝ\ËÙY[‘Ü›Ý\\]J
K\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜J_K\ËšY]Ë˜Yœ˜[YT™\]Y\Ý\Š‘Q“Ô‘WÔ‘S‘T‹\Ë˜[š[X][Û‘œ˜[YT™\]Y\Ý\ŠK\ËšY]Ë››ÝYžPÚ[™ÙJ\Ë˜Ø[Y\˜JKŸ\ÝÜ[š[X][ÛœÊ
^Ý\ËÙY[‰‰Š\ËÙY[‹œÝÜ

K\ËÙY[]›ÚY\ËÙY[‘Ü›Ý\œ™[[Ý™P[

JK\Ë˜[š[X][Û‘œ˜[YT™\]Y\Ý\‰‰Š\ËšY]Ëœ™[[Ý™Qœ˜[YT™\]Y\Ý\Š‘Q“Ô‘WÔ‘S‘T‹\Ë˜[š[X][Û‘œ˜[YT™\]Y\Ý\ŠK\Ë˜[š[X][Û‘œ˜[YT™\]Y\Ý\[[
_[[Ý™PØ[Y\˜UÐÝ\œ™[ÜÚ][ÛŠ
^Ý\Ë›[Ý™PØ[Y\˜UÊ\Ë˜Ý\œ™[ÜÚ][ÛŠ_[Û’Ù^QÝÛŠ
^ÌO]\Ë™[˜X›Y	‰ŠÝ\\‹›Û’Ù^QÝÛŠ
KšÙ^PÛÙOO]\ËšÙ^QÛÕÓ™^ÜÚ][Û‰‰\Ë›[Ý™PØ[Y\˜UÊ\Ë›™^ÜÚ][ÛŠKšÙ^PÛÙOO]\ËšÙ^QÛÕÔ™]š[Ý\ÔÜÚ][Û‰‰\Ë›[Ý™PØ[Y\˜UÊ\Ëœ™]š[Ý\ÔÜÚ][ÛŠKšÙ^PÛÙOO]\ËšÙ^TÙ]Ø[Y\˜UÐÝ\œ™[ÜÚ][Û[™ÛÚÐ]™^	‰Š\ËœÙ]Ø[Y\˜UÐÝ\œ™[ÜÚ][ÛŠ
K\ËšY]Ë››ÝYžPÚ[™ÙJ\ËšY]Ë˜Ø[Y\˜LÑ
JKšÙ^PÛÙOO]\ËšÙ^TÙ]Ø[Y\˜UÐÝ\œ™[ÜÚ][Û[™ÛÚÐ]™]š[Ý\É‰Š\ËœÙ]Ø[Y\˜UÐÝ\œ™[ÜÚ][ÛŠL
K\ËšY]Ë››ÝYžPÚ[™ÙJ\ËšY]Ë˜Ø[Y\˜LÑ
JJ_Y\ÜÜÙJ
^Ý\ËšY]Ë™ÛQ[[Y[œ™[[Ý™Q]™[\Ý[™\Š›[Ý\Ù[Ý]‹\Ë—ÛÛ“[Ý\ÙSÝ]LJKÝ\\‹™\ÜÜÙJ
__NÙ[˜Ý[ÛˆJKLŠ^ØÛÛœÝYI‰™K›[™ÝO[ÙVÌJœŽ›[™ÝÛ]Ï]^JK‹L
NØÛÛœÝÏV×NÚYŠ\ßË›™^OO\Ëœ™]Š\™]\›ˆÎÛ]KÎÚYŠ‰‰ŠÏY[˜Ý[ÛŠK‹Š^ØÛÛœÝOV×NÙ›ÜŠ]LÏYK›[™ÝÜÎÜŠÊÊ^ØÛÛœÝÏ]^JVÜ—J›‹ËLOÙVÜŠÌWJ›Ž›[™Ý‹LJNÛÏOO[Ë›™^	‰ŠËœÝZ[™\HL
KKœ\Ú
ÞJÊJ_ZKœÛÜ
^JNÙ›ÜŠ]LÝK›[™ÝÝ
ÊÊ\]žJVÝKŠNÜ™]\›ˆŸJKËŠJK›[™ÝŽ
œŠ^ØOLKÌLKÌÛ]OKLKÌKLKÌÙ›ÜŠ]Ï\ŽÜÏNÜÊÏ\Š^ØÛÛœÝ]Ü×KO]ÜÊÌWNÜI‰ŠO\ŠKO	‰ŠZJK™I‰ŠO\ŠKO›‰‰ŠZJ_XÏSX]›X^
KXK‹[
KÏLOOXÏÌÌÍËØÎŒ\™]\›ˆJËË‹KË
KßY[˜Ý[Ûˆ^JK‹‹J^Û]ÎÚYŠOOOY[˜Ý[ÛŠK‹Š^Û]OLÙ›ÜŠ]ÏYKÏ\‹[ŽÜÏŽÜÊÏ[ŠZJÏJÛ×K]Ü×JJŠÜÊÌWJÝÛÊÌWJKÏ\ÎÜ™]\›ˆ_JK‹ŠOŒ
Y›ÜŠ]OYNÚOŽÚJÏ[Š\ÏSJKÛŸÚWKÚJÌWKÊNÙ[ÙH›ÜŠ]O\‹[ŽÚOYNÚKO[Š\ÏSJKÛŸÚWKÚJÌWKÊNÜ™]\›ˆÉ‰ÞJËË›™^
I‰ŠJÊKÏ\Ë›™^
KßY[˜Ý[ÛˆJJ^ÚYŠ]
\™]\›ˆÙ_
O]
NÛ]‹]ÙÞÚYŠHLK‹œÝZ[™\ŸPÞJ‹‹›™^
I‰ŒOOS^J‹œ™]‹‹‹›™^
J[[‹›™^Ù[Ù^ÚYŠJŠKYO[‹œ™]‹OO[‹›™^
Xœ™XZÎÜHL_]Ú[JŸˆOOYJNÜ™]\›ˆ_Y[˜Ý[ÛˆJK‹‹KËÊ^ÚYŠ]
\™]\›ŽÈ[É‰œÉ‰™[˜Ý[ÛŠK‹Š^Û]O]ÙÞÌOOZKž‰‰ŠKžWÞJKžKžKK‹ŠJKKœ™]–ZKœ™]‹K›™^ZK›™^OZK›™^]Ú[JHOO]
NÚKœ™]–‹›™^[[Kœ™]–[[[˜Ý[ÛŠ
^Û]KLNÙÞÛ]‹O]Ý[[Û]Ï[[Ù›ÜŠOLÚNÊ^ÙJÊÎÛ]ÏZKOLÙ›ÜŠ]LÝ‰‰ŠJÊËÏ[Ë›™^‹ÊNÝ
ÊÊNÛ]\ŽÙ›ÜŠØOŒŒ	‰›ÎÊLOOXI‰ŠOO[[ßKž[ËžŠOÊZKOZK›™^‹KKJNŠ[ËÏ[Ë›™^‹KJKÏÜË›™^[Ž[‹‹œ™]–\ËÏ[ŽÚO[ß\Ë›™^[[ŠLŸ]Ú[JOŒJ_JJ_J‹KÊNÛ]O]Ù›ÜŠÝœ™]ˆOO]›™^Ê^ØÛÛœÝ]œ™]‹Ï]›™^ÚYŠÏÛ^J‹KÊN™žJ
JYKœ\Ú
šKšKËšJKJ
KXË›™^OXË›™^Ù[ÙHYŠ
XÊOOOXJ^ÛÏÌOOO[ÏÜJYÞJJ
KJKK‹‹KËŠNŒOO[É‰^JK‹‹KÊNœJJ
KK‹‹KËJNØœ™XZß__Y[˜Ý[ÛˆžJ
^ØÛÛœÝO]œ™]‹]]›™^ÚYŠ^JK‹ŠOL
\™]\›ˆLNØÛÛœÝOYKžÏ\‹žÏ[‹žOYKžK\‹žKÏ[‹žKSX]›Z[ŠKËÊKOSX]›Z[ŠKÊKSX]›X^
KËÊKSX]›X^
KÊNÛ][‹›™^Ù›ÜŠÙˆOOYNÊ^ÚYŠ‹žZ	‰™‹žY	‰™‹žO]I‰™‹žO\	‰‘^JKKËËË‹ž‹žJI‰“^J‹œ™]‹‹‹›™^
OL
\™]\›ˆLNÙY‹›™^\™]\›ˆLY[˜Ý[Ûˆ^JK‹Š^ØÛÛœÝO]œ™]‹Ï]Ï]›™^ÚYŠ^JKËÊOL
\™]\›ˆLNØÛÛœÝOZKž\ËžÏ[ËžZKžKO\ËžK[ËžKSX]›Z[ŠKÊKSX]›Z[ŠK
KOSX]›X^
KÊKÏSX]›X^
K
KOWÞJ‹K‹ŠKOWÞJKËK‹ŠNÛ]]œ™]–‹]›™^ŽÙ›ÜŠÝ‰‰‹žPI‰ž	‰žž^NÊ^ÚYŠ‹ž\	‰‹ž[I‰‹žOY‰‰‹žOYÉ‰ˆOOZI‰ˆOO[É‰‘^JKKË‹ž‹žJI‰“^J‹œ™]‹‹‹›™^
OL
\™]\›ˆLNÚYŠ]‹œ™]–‹ž\	‰žž[I‰žžOY‰‰žžOYÉ‰žOOZI‰žOO[É‰‘^JKKËžžJI‰“^Jœ™]‹›™^
OL
\™]\›ˆLNÞ^›™^ŸY›ÜŠÝ‰‰‹žPNÊ^ÚYŠ‹ž\	‰‹ž[I‰‹žOY‰‰‹žOYÉ‰ˆOOZI‰ˆOO[É‰‘^JKKË‹ž‹žJI‰“^J‹œ™]‹‹‹›™^
OL
\™]\›ˆLNÝ]‹œ™]–ŸY›ÜŠÞ	‰žž^NÊ^ÚYŠž\	‰žž[I‰žžOY‰‰žžOYÉ‰žOOZI‰žOO[É‰‘^JKKËžžJI‰“^Jœ™]‹›™^
OL
\™]\›ˆLNÞ^›™^Ÿ\™]\›ˆLY[˜Ý[ÛˆÞJJ^Û]]ÙÞØÛÛœÝ\‹œ™]‹O\‹›™^›™^ÈPÞJ‹JI‰•J‹‹‹›™^JI‰”J‹JI‰”JKŠI‰ŠKœ\Ú
‹šK‹šKKšJKJŠKJ‹›™^
K]ZJK\‹›™^]Ú[JˆOO]
NÜ™]\›ˆJŠ_Y[˜Ý[Ûˆ^JK‹‹KÊ^Û]Ï]ÙÞÛ][Ë›™^›™^Ù›ÜŠÝOO[Ëœ™]ŽÊ^ÚYŠËšHOO]šI‰”ÞJË
J^Û]OPžJË
NÜ™]\›ˆÏYJËË›™^
KOYJKK›™^
KJËK‹‹KË
K›ÚYJKK‹‹KË
_]]›™^[Ï[Ë›™^]Ú[JÈOO]
_Y[˜Ý[Ûˆ^JJ^Û]]žYKžÜ™]\›ˆOO\‰‰Š]žKYKžKOO\ŠI‰ŠJ›™^žK]žJKÊ›™^ž]ž
KJK›™^žKYKžJKÊK›™^žYKž
JKŸY[˜Ý[ÛˆžJJ^ØÛÛœÝY[˜Ý[ÛŠJ^Û]YNØÛÛœÝ]žO]žNÛ]ËÏKLKÌÚYŠÞJŠJ\™]\›ˆŽÙÞÚYŠÞJ‹›™^
J\™]\›ˆ‹›™^ÚYŠO\‹žI‰šO\‹›™^žI‰œ‹›™^žHOO\‹žJ^ØÛÛœÝ\‹ž
ÊK\‹žJJŠ‹›™^ž\‹ž
KÊ‹›™^žK\‹žJNÚYŠ[‰‰›É‰ŠÏ]Ï\‹ž‹›™^žÜŽœ‹›™^OO[ŠJ\™]\›ˆß\\‹›™^]Ú[JˆOOYJNÚYŠ\Ê\™]\›ˆ[ØÛÛœÝO\Ë\ËžÏ\ËžNÛ]LKÌÜ\ÎÙÞÚYŠ\‹ž	‰œ‹ž[	‰›ˆOO\‹ž	‰˜žJOÏÛŽ›ËKËOÏÛÎ›‹K‹ž‹žJJ^ØÛÛœÝOSX]˜XœÊK\‹žJKÊ‹\‹ž
NÔJ‹
I‰ŠOOOOZ	‰Š‹žœËž‹žOO\Ëž	‰žJËŠJJI‰ŠÏ\‹YJ_\\‹›™^]Ú[JˆOOXJNÜ™]\›ˆßJJNÚYŠ\Š\™]\›ˆNØÛÛœÝPžJ‹
NÜ™]\›ˆJ‹‹›™^
KJ‹‹›™^
_Y[˜Ý[ÛˆJJ^Ü™]\›ˆ^Jœ™]‹Kœ™]ŠO	‰“^JK›™^›™^
OY[˜Ý[ÛˆÞJK‹‹J^Ü™]\›ŠLMÌMMMÍIŠ
NNNLÍNIŠ
LLLLÍIŠ
LMÌLNLÍIŠ
J\ŠJš_
_
J_
J_ŠJ_JJ_
OLMÌMMMÍIŠ
ONNNLÍNIŠ
OLLLLÍIŠ
OLMÌLNLÍIŠ
OJK[ŠJš_
_O
J_O
J_OŠJ_OJJO_Y[˜Ý[ÛˆÞJ
^Û]O]]ÙÞÊKž‹žKžOO\‹ž	‰™KžO‹žJI‰ŠYJKOYK›™^]Ú[JHOO]
NÜ™]\›ˆŸY[˜Ý[ÛˆžJK‹‹KËËJ^Ü™]\›ŠK[ÊJŠKXJOJ[ÊJŠËXJI‰Š[ÊJŠ‹XJOJ‹[ÊJŠKXJI‰Š‹[ÊJŠËXJOJK[ÊJŠ‹XJ_Y[˜Ý[Ûˆ^JK‹‹KËËJ^Ü™]\›ˆJOO[É‰™OOOXJI‰˜žJK‹‹KËËJ_Y[˜Ý[ÛˆÞJJ^Ü™]\›ˆ›™^šHOOYKšI‰œ™]‹šHOOYKšI‰ˆY[˜Ý[ÛŠJ^Û]]ÙÞÚYŠ‹šHOO]šI‰œ‹›™^šHOO]šI‰œ‹šHOOYKšI‰œ‹›™^šHOOYKšI‰•J‹‹›™^JJ\™]\›ˆLÜ\‹›™^]Ú[JˆOO]
NÜ™]\›ˆL_JJI‰ŠJJI‰”JK
I‰™[˜Ý[ÛŠJ^Û]]HLNØÛÛœÝOJž
ÙKž
KÌ‹ÏJžJÙKžJKÌŽÙÞÜ‹žOœÈO\‹›™^žOœÉ‰œ‹›™^žHOO\‹žI‰šO
‹›™^ž\‹ž
JŠË\‹žJKÊ‹›™^žK\‹žJJÜ‹ž	‰ŠH[ŠK\‹›™^]Ú[JˆOO]
NÜ™]\›ˆŸJJI‰Š^Jœ™]‹Kœ™]Š_^JKœ™]‹JJ_ÞJJI‰“^Jœ™]‹›™^
OŒ	‰“^JKœ™]‹KK›™^
OŒ
_Y[˜Ý[Ûˆ^JKŠ^Ü™]\›ŠKžK]žJJŠ‹žYKž
KJKž]ž
JŠ‹žKYKžJ_Y[˜Ý[ÛˆÞJJ^Ü™]\›ˆžOOYKž	‰žOOOYKž_Y[˜Ý[ÛˆJK‹Š^ØÛÛœÝOTžJ^JKŠJKÏTžJ^JKŠJKÏTžJ^J‹‹
JKOTžJ^J‹‹JJNÜ™]\›ˆHOO\É‰›ÈOOX_JOOZ_R^J‹JJ_JOO\ßR^J‹JJ_JOO[ßR^J‹ŠJ_JOOX_R^J‹KŠJ_Y[˜Ý[Ûˆ^JKŠ^Ü™]\›ˆKžSX]›X^
ž‹ž
I‰™KžSX]›Z[Šž‹ž
I‰™KžOSX]›X^
žK‹žJI‰™KžOSX]›Z[ŠžK‹žJ_Y[˜Ý[ÛˆžJ
^Ü™]\›ˆŒÌNËLNŒY[˜Ý[ÛˆJJ^Ü™]\›ˆ^Jœ™]‹›™^
OÓ^JK›™^
OL	‰“^Jœ™]‹JOL“^JKœ™]ŠO^J›™^JOY[˜Ý[ÛˆžJJ^ØÛÛœÝSÞJšKžžJKSÞJKšKKžKžJKO]›™^ÏYKœ™]ŽÜ™]\›ˆ›™^YKKœ™]]‹›™^ZKKœ™]\‹‹›™^\‹‹œ™][‹Ë›™^[‹‹œ™]\ËŸY[˜Ý[ÛˆJK‹Š^ØÛÛœÝOSÞJKŠNÜ™]\›ˆÊK›™^[‹›™^Kœ™][‹‹›™^œ™]ZK‹›™^ZJNŠKœ™]ZKK›™^ZJK_Y[˜Ý[ÛˆJ
^Ý›™^œ™]]œ™]‹œ™]‹›™^]›™^œ™]–‰‰Šœ™]–‹›™^]›™^ŠK›™^‰‰Š›™^‹œ™]–]œ™]–Š_Y[˜Ý[ÛˆÞJKŠ^Ü™]\›žÚN™KNœ‹™]Ž›[™^›[ŽŒ™]–Ž›[™^Ž›[ÝZ[™\ŽˆL__XÛÛœÝžO[™]ÈK‘I
‘TÑÎÌˆ‹
KžO[™]ÈY‹^O[™]È™ŽÛ]ÞNØÛÛœÝžO[™]ÈË’NVKÞO[™]ÈË’NVK^O[™]ÈË”LžO[™]ÈË”LžO[™]ÈË”LO[™]ÈË”L^O[™]ÈKž”Š‘TÑÎÌˆ‹
KÞO[™]ÈË”LY‹^OH‘TÑÎÌˆŽØÛ\ÜÈH^[™ÈË–R›ÈÙÝÈÐ]ÈÞ]J

OO›™]ÈË–R›
J
NÈÝJ

OO›™]ÈË–R›
J
NØÛÛœÝXÝÜŠJ^ÜÝ\\Š
K\Ë›Y\Ú\ÏJ™]ÈË–R›
K˜Y
‹‹
K\ËˆÞ]J™]ÈË–R›
K˜Y
\Ë›Y\Ú\ÊK\ËˆÞ]œ]X]\›š[Û‹˜ÛÜJKœ]X]\›š[ÛŠK\ËˆÞ]œÜÚ][Û‹˜ÛÜJKœÜÚ][ÛŠK\ËˆÞ]œØØ[K˜ÛÜJKœØØ[JK\ËˆÞ]\]SX]š^

K\ËˆÐ]YK˜ÜœË\ËˆÙÝ]\ËˆÐ]\Ë™^[YK™^[\Ë˜Y
\ËˆÝ˜Y
\ËˆÞ]
J_X\Ê
^ÚYŠ\ËˆÙÝOO]
ZYŠ\ËˆÙÝ]O]\ËˆÐ]
]\ËœXÙKœÜÚ][Û‹œÙ]

K\ËœÜÚ][Û‹œÙ]

K\ËœØØ[KœÙ]
KKJK\Ëœ]X]\›š[Û‹šY[]J
NÙ[Ù^ÓžK˜ÜœÏ]\ËˆÐ]\Ë™^[š\Ñ^[Ê^K˜ÛÜJ\Ë™^[
K˜\SX]š^
\ËˆÞ]›X]š^
K^K˜\ÊžK˜ÜœË^JJN\Ë™^[Ñ^[
žK˜ÜœË^JK^KœÜ]X[]XÛYX[‘[Y[œÚ[ÛœÊžJK^Kœ[˜\‘[Y[œÚ[ÛœÊÞJKÞKž	‰‘ÞKžI‰\ËœØØ[K˜ÛÜJžJK™]šYJÞJKœÙ]ŠJK\ËˆÝœÜÚ][Û‹˜ÛÜJ\ËˆÞ]œÜÚ][ÛŠK›™YØ]J
KžKœÙ]œ›ÛU™XÝÜŒÊ\ËˆÞ]œÜÚ][ÛŠNØÛÛœÝOH‘TÑÎŒÎMÈO]\ËˆÐ]Ö^N\ËˆÐ]ÚK”Ö‹œ]X]\›š[Û‘œ›ÛPÔ”ÕÐÔ”ÊK
JžK˜\Ê^JK\Ëœ]X]\›š[ÛŠKžK˜\ÊžJKÕ™XÝÜŒÊ\ËœÜÚ][ÛŠ_\™]\›ˆ\ß_Y[˜Ý[Ûˆ	J
^Ü™]\›ˆÈÛÛÜˆO]\OÝ•ÞKœÙ]

N•ÞKœÙ]
MÍÍÌŒMJ“X]œ˜[™ÛJ
J_Y[˜Ý[ÛˆžJJ^Ü™]\›ˆOLMOÛ™]ÈZ[\œ˜^J
N™OMMLÍOÛ™]ÈZ[M\œ˜^J
N›™]ÈZ[Ì\œ˜^J
_Y[˜Ý[ÛˆÞJK‹‹J^ØÛÛœÝÏ]›[™ÝÝ›[™Ý
ÏMŠŠ‹LJNÙ›ÜŠ]Ï\‹O\ÎÛÏŠÛ‹LNÊÊÛË
ÊØJZOÊØWO[ËÊÊØWO[ÊÙKÊÊØWO[ÊÌKÊÊØWO[ÊÌKÊÊØWO[ÊÙKÊÊØWO[ÊÙJÌJNŠØWO[ÊÙKÊÊØWO[ËÊÊØWO[ÊÙJÌKÊÊØWO[ÊÙJÌKÊÊØWO[ËÊÊØWO[ÊÌJ_Y[˜Ý[ÛˆžJJ^ØÛÛœÝ]™\XÙ\Ë[™]ÈZ[\œ˜^J‹›[™Ý
KO[™]ÈZ[Ì\œ˜^J‹›[™Ý
KÏYK˜˜]ÚY

JOO™JNÛ]OLØÛÛœÝ[™]È›Ø]Ì\œ˜^JŠNÒKœÙ]œ›ÛSX]š^ØØ[JžK˜ÛÛXÝ[Û‹›X]š^ÛÜ›[™\œÙJK^KœÙ]
JK›][\JJNØÛÛœÝÏV×NÑžKœÙ]™X]\™J
NÙ›ÜŠÛÛœÝHÙˆ™Ù[ÛY]šY\Ê^ØÛÛœÝYKš[™XÙ\ÖÌK›Ù™œÙ]ÏYKš[™XÙ\ÖÌK˜ÛÝ[[ÊKœ›Ü\Y\ËJNÑžKœÙ]Ù[ÛY]žJJNÙ›ÜŠ]OLÊœ‹Ï\ŽÛÏŠÜÎÙJÏLËÊÏLJ^Ý››Ü›X[É‰”^K™œ›ÛP\œ˜^J››Ü›X[ËJK›][\JJNØÛÛœÝQžKœÙ]ØØ[ÛÛÜ™[˜]\Ñœ›ÛP\œ˜^J™\XÙ\ËJNÚÞKœÙ]ÛÛ^
žJNØÛÛœÝØ˜\ÙWØ[]YNœËÛÛÜŽ˜K˜Y]\Î_OZÞKœÚ[ÓžK˜ÛÜJŠK˜\SX]š^
žK˜ÛÛXÝ[Û‹›X]š^ÛÜ›
K‘TÑÎMÎOSžK˜ÜœÉ‰“žK˜\Ê‘TÑÎÌˆ‹žJKžK˜ÛÜJ^JK›][\TØØ[\ŠËSžKžŠK˜Y
ŠKÐ\œ˜^JJK	JJK›][\TØØ[\ŠMJKÐ\œ˜^J‹JKËš[˜ÛY\ÊJ_Ëœ\Ú
JKVÛ×OZXJÊßXÛÛœÝ[™]ÈË“ÖNÜ™]\›ˆœÙ]]šX]JœÜÚ][Ûˆ‹™]ÈË•ÊÊJKœÙ]]šX]J˜ÛÛÜˆ‹™]ÈË•Ê‹ËL
JKœÙ]]šX]J˜˜]ÚY‹™]ÈË•ÊKJJKKœÚ[X]\šX[œÚ^™OXÖÌKË›[™ÝŒI‰˜ÛÛœÛÛKØ\›Š•ÛÈX[žHY™™\™[ÈÚ[œ˜Y]\ËÛ›HHš\œÝÛ™HÚ[™H\ÙYŠK™]ÈË“Ó›
KœÚ[X]\šX[
_Y[˜Ý[ÛˆŠKŠ^ØÛÛœÝJJLÊJÌÊœŽÛ]OLÙ›ÜŠ][‹LËÏYNÜÏŽÜ\ËÊÏLÊZJÏ]Ü—JÜÊÌWK]Ü×JÜŠÌWNÜ™]\›‹Jš_Y[˜Ý[Ûˆ]ŠKŠ^ØÛÛœÝ[™]ÈË–“
™Ù[ÛY]žK›X]\šX[JNÛ]OLÙ›ÜŠ]LÝÊ™NÝ
ÏLÊ^ØÛÛœÝO[™]ÈËšÛÙKœÙ]ÜÚ][ÛŠ–ÝK–Ý
ÌWK–Ý
Ì—JK‹œÙ]X]š^]
KJKJÊß\™]\›ˆ‹š[œÝ[˜ÙSX]š^›™YYÕ\]OHLŸY[˜Ý[ÛˆŠJ^ÚYŠ]™\XÙ\Ê\™]\›ŽÛ]ŽÜÝÚ]Ú
\J^ØØ\ÙHK”ÒS•šYŠÞKœÚ[Ë›[Ù[Ë›Øš™XÝ
]ž^ÜY[˜Ý[ÛŠ
^ØÛÛœÝO]™\XÙ\Ë]™Ù[ÛY]šY\Ë›[™ÝZÞKœÚ[›[Ù[›Øš™XÝÚYŠˆ[œÝ[˜Ù[ÙˆË™XQŠ\™]\›ˆ]Š‹‹JNÚYŠˆ[œÝ[˜Ù[ÙˆËŽJ^ØÛÛœÝ[™]ÈË–R›Ü™]\›ˆ[˜Ý[ÛŠ
^ØÛÛœÝOV×NÜ™]\›ˆ\]SX]š^ÛÜ›

K˜]™\œÙJ
OžÝ[œÝ[˜Ù[ÙˆË™XQ‰‰Š\]SX]š^ÛÜ›

K™Ù[ÛY]žK˜\SX]š^
›X]š^ÛÜ›
KKœ\Ú

J_JJK_JŠK™›Ü‘XXÚ

O˜Y
]Š‹‹JJJJK]›ÝÈ™]È\œ›ÜŠ•H›Ü›X]ÙˆH[Ù[Øš™XÝ›ÝšYY[ˆHÝ[H
^Y\‹œÝ[KœÚ[›[Ù[›Øš™XÝ
H\È›ÝÝ\ÜYˆÛ›H‘QK“Y\ÚÜˆ‘QK“Øš™XÝÑ\™HÝ\ÜYˆŠ_J
K‹š\Ò[œÝ[˜ÙYY\ÚHLXØ]Ú
Š^ÜVžJJ_Y[ÙHVžJJNØœ™XZÎØØ\ÙHK“S‘NœY[˜Ý[ÛŠJ^ØÛÛœÝ]™\XÙ\Ë[™]ÈZ[\œ˜^J‹›[™Ý
KO\‹›[™ÝÌËÏ[™]ÈZ[Ì\œ˜^JJKOYK˜˜]ÚY

JOO™JNÛ]LØÛÛœÝÏ[™]È›Ø]Ì\œ˜^J‹›[™Ý
K[™]ÈË“ÖKOV×NÑžKœÙ]™X]\™J
NØÛÛœÝRžJŠŠK]™Ù[ÛY]šY\Ë›[™Ý
KJNÛ]LÒKœÙ]œ›ÛSX]š^ØØ[JžK˜ÛÛXÝ[Û‹›X]š^ÛÜ›[™\œÙJK^KœÙ]
JK›][\JJNÙ›ÜŠÛÛœÝHÙˆ™Ù[ÛY]šY\Ê^ÑžKœÙ]Ù[ÛY]žJJNØÛÛœÝXJKœ›Ü\Y\Ë
KOYKš[™XÙ\ÖÌK›Ù™œÙ]ÚYŠOMLÍJ^ØÛÛœÛÛKØ\›Š‘™X]\™HÈ[™Nˆ[YÙ\ˆÝ™\™›ÝËÛÈX[žHÚ[È[ˆ[™\ÈŠNØœ™XZßXÛÛœÝÏZJÙKš[™XÙ\ÖÌK˜ÛÝ[Ù›ÜŠ]OLÊšKOZNØOÎÙJÏLËJÏLJ^ÚYŠOËLJ^ÚYŠJOMLÍJJXœ™XZÎÙÜ
Ê×OXKÜ
Ê×OXJÌ_]››Ü›X[É‰”^K™œ›ÛP\œ˜^J››Ü›X[ËJK›][\JJNØÛÛœÝOQžKœÙ]ØØ[ÛÛÜ™[˜]\Ñœ›ÛP\œ˜^J™\XÙ\ËJNÚÞKœÙ]ÛÛ^
žJNØÛÛœÝØ˜\ÙWØ[]YN›ÛÛÜŽšÚY™ŸOZÞKœÝ›ÚÙNÓžK˜ÛÜJJK˜\SX]š^
žK˜ÛÛXÝ[Û‹›X]š^ÛÜ›
K‘TÑÎMÎOSžK˜ÜœÉ‰“žK˜\Ê‘TÑÎÌˆ‹žJKžK˜ÛÜJ^JK›][\TØØ[\ŠSžKžŠK˜Y
JKÐ\œ˜^JËJK	J
K›][\TØØ[\ŠMJKÐ\œ˜^J‹JKKš[˜ÛY\ÊŠ_Kœ\Ú
ŠKÖØWO\Ÿ[
Êß\™]\›ˆK›[™SX]\šX[›[™]ÚY]VÌKK›[™ÝŒI‰˜ÛÛœÛÛKØ\›Š•ÛÈX[žHY™™\™[ÈÝ›ÚÙKÚYÛ›HHš\œÝÛ™HÚ[™H\ÙYŠKœÙ]]šX]JœÜÚ][Ûˆ‹™]ÈË•ÊËÊJKœÙ]]šX]J˜ÛÛÜˆ‹™]ÈË•Ê‹ËL
JKœÙ]]šX]J˜˜]ÚY‹™]ÈË•ÊËJJKœÙ][™^
™]ÈË•ÊJJK™]ÈË‘ÊK›[™SX]\šX[
_JJNØœ™XZÎØØ\ÙHK”ÓQÓÓŽœZÞK™š[	‰“Øš™XÝšÙ^\ÊÞK™š[
Kš[˜ÛY\Ê™^\Ú[Û—ÚZYÚŠOÙ[˜Ý[ÛŠJ^ØÛÛœÝ]™\XÙ\Ë[™]È›Ø]Ì\œ˜^JŠœ‹›[™Ý
KO\‹›[™ÝÌËÏ[™]ÈZ[\œ˜^JŠœ‹›[™Ý
KOV×K[™]ÈZ[Ì\œ˜^J‹›[™ÝÌÊKÏYK˜˜]ÚY

JOO™JNÛ]LÑžKœÙ]™X]\™J
KKœÙ]œ›ÛSX]š^ØØ[JžK˜ÛÛXÝ[Û‹›X]š^ÛÜ›[™\œÙJK^KœÙ]
JK›][\JJKžKœÙ]ÜœÊžK˜ÛÛXÝ[Û‹˜ÜœÊNÙ›ÜŠÛÛœÝHÙˆ™Ù[ÛY]šY\Ê^ÑžKœÙ]Ù[ÛY]žJJNØÛÛœÝÏYKš[™XÙ\ÖÌK›Ù™œÙ]OYKš[™XÙ\ËœÛXÙJLJVÌK]K›Ù™œÙ]
ÝK˜ÛÝ[Y\ËYKš[™XÙ\ÖÌK˜ØÝÏÏÝŠ‹Ë
OOLÊœËÏ\ÊÚKOXÊKœ›Ü\Y\Ë
NÙ›ÜŠ]O[KO[JÜ‹›[™ÝÏ\ÎÙOJÌÊœÙJÏLËJÏLËÊÏLJ^Ý››Ü›X[É‰”^K™œ›ÛP\œ˜^J››Ü›X[ËJK›][\JJNØÛÛœÝÏQžKœÙ]ØØ[ÛÛÜ™[˜]\Ñœ›ÛP\œ˜^J‹JNÚÞKœÙ]ÛÛ^
žJNØÛÛœÝØ˜\ÙWØ[]YNš^\Ú[Û—ÚZYÚKÛÛÜŽ™OZÞK™š[ÓžK˜ÛÜJÊK˜\SX]š^
žK˜ÛÛXÝ[Û‹›X]š^ÛÜ›
K‘TÑÎMÎOSžK˜ÜœÉ‰“žK˜\Ê‘TÑÎÌˆ‹žJKžK˜ÛÜJ^JK›][\TØØ[\ŠSžKžŠK˜Y
ÊKÐ\œ˜^J‹JKØ×OPKžK˜ÛÜJ^JK›][\TØØ[\ŠJK˜Y
žJKÐ\œ˜^J‹JKØÊÚWOPNØÛÛœÝIJ
K›][\TØØ[\ŠMJNÜÐ\œ˜^JËJK›][\TØØ[\ŠJKÐ\œ˜^JËJ_Z
ÊÎØÛÛœÝOZJ‹œÛXÙJÊ™ËÊŠ
ÚJJKKš[™XÙ\Ë›X\

O›Ù™œÙ]\ÊJKœÛXÙJJKÊKXK›[™ÝØK›[™Ý
Ï^K›[™ÝÙ›ÜŠ]LÝK›[™ÝÝ
ÊÊXVÝŠÝO^VÝJÙÎÒÞJKKKš[™XÙ\ÖÌK›Ù™œÙ]Kš[™XÙ\ÖÌK˜ÛÝ[ŠNÙ›ÜŠ]LNÝKš[™XÙ\Ë›[™ÝÝ
ÊÊ^ØÛÛœÝYKš[™XÙ\ÖÝNÒÞJKK‹›Ù™œÙ]‹˜ÛÝ[J‹˜ØÝÏÏÙŠJ__XÛÛœÝO[™]ÈË“ÖNÜ™]\›ˆKœÙ]]šX]JœÜÚ][Ûˆ‹™]ÈË•Ê‹ÊJKKœÙ]]šX]J˜ÛÛÜˆ‹™]ÈË•ÊËËL
JKKœÙ]]šX]J˜˜]ÚY‹™]ÈË•ÊJJKKœÙ][™^
™]ÈË•ÊžJK‹›[™ÝÌÊKJJK™]ÈË™XQŠKKœÛYÛÛ“X]\šX[
_JJN™[˜Ý[ÛŠJ^ØÛÛœÝ[™]È›Ø]Ì\œ˜^J™\XÙ\ÊK[™]ÈZ[\œ˜^J™\XÙ\Ë›[™Ý
KOV×KÏ[™]ÈZ[Ì\œ˜^J‹›[™ÝÌÊKOYK˜˜]ÚY

JOO™JNÑžKœÙ]™X]\™J
KKœÙ]œ›ÛSX]š^ØØ[JžK˜ÛÛXÝ[Û‹›X]š^ÛÜ›[™\œÙJK^KœÙ]
JK›][\JJNÛ]LÙ›ÜŠÛÛœÝHÙˆ™Ù[ÛY]šY\Ê^ØÛÛœÝÏYKš[™XÙ\ÖÌK›Ù™œÙ]ÚYŠÏŽMMÌŽMJ^ØÛÛœÛÛKØ\›Š‘™X]\™HÈÛYÛÛŽˆ[YÙ\ˆÝ™\™›ÝËÛÈX[žHÚ[È[ˆÛYÛÛœÈŠNØœ™XZßQžKœÙ]Ù[ÛY]žJJNØÛÛœÝÏYKš[™XÙ\ËœÛXÙJLJVÌKXË›Ù™œÙ]
ØË˜ÛÝ[OLÊœËXJKœ›Ü\Y\Ë
NÙ›ÜŠ]O]KO\ÎÙOJÌÊŠ\ÊNÙJÏLËJÏLJ^Ý››Ü›X[É‰”^K™œ›ÛP\œ˜^J››Ü›X[ËJK›][\JJNØÛÛœÝÏQžKœÙ]ØØ[ÛÛÜ™[˜]\Ñœ›ÛP\œ˜^J™\XÙ\ËJNÚÞKœÙ]ÛÛ^
žJNØÛÛœÝØ˜\ÙWØ[]YN˜KÛÛÜŽ›OZÞK™š[ÓžK˜ÛÜJÊK˜\SX]š^
žK˜ÛÛXÝ[Û‹›X]š^ÛÜ›
K‘TÑÎMÎOSžK˜ÜœÉ‰“žK˜\Ê‘TÑÎÌˆ‹žJKžK˜ÛÜJ^JK›][\TØØ[\ŠKSžKžŠK˜Y
ÊKÐ\œ˜^J‹JK	J
K›][\TØØ[\ŠMJKÐ\œ˜^J‹JKÖÚWOY[
ÊÎØÛÛœÝZJ‹œÛXÙJÊœËÊš
KKš[™XÙ\Ë›X\

O›Ù™œÙ]\ÊJKœÛXÙJJKÊKZK›[™ÝÚK›[™Ý
Ï\›[™ÝÙ›ÜŠ]LÝ›[™ÝÝ
ÊÊZVÙŠÝO\ÝJÜßXÛÛœÝÏ[™]ÈË“ÖNÜ™]\›ˆËœÙ]]šX]JœÜÚ][Ûˆ‹™]ÈË•Ê‹ÊJKËœÙ]]šX]J˜ÛÛÜˆ‹™]ÈË•Ê‹ËL
JKËœÙ]]šX]J˜˜]ÚY‹™]ÈË•ÊËJJKËœÙ][™^
™]ÈË•ÊžJK‹›[™ÝÌÊKJJK™]ÈË™XQŠËKœÛYÛÛ“X]\šX[
_JJ_\™]\›ˆ‹š\Ò[œÝ[˜ÙYY\Ú
‹›X]\šX[™\^ÛÛÜœÏHL‹›X]\šX[˜ÛÛÜ[™]ÈË”LYŠMÍÍÌŒMJJK‹™™X]\™O]ŸXÛÛœÝ^ØÛÛ™\

^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNžßNÜ™]\›ŠOžÝ˜ÛÛÜ‰‰˜ÛÛœÛÛK™\œ›ÜŠÛÛÜˆÛÛ™\Ü[Ûˆ\È™[[Ý™Y\ÙHÝ[Kž˜ÛÛÜˆŠK™^YI‰˜ÛÛœÛÛK™\œ›ÜŠ™^YHÛÛ™\Ü[Ûˆ\È™[[Ý™Y\ÙHÝ[K™š[™^\Ú[Û—ÚZYÚ[œÝXYŠK˜[]YI‰˜ÛÛœÛÛK™\œ›ÜŠ˜[]YHÛÛ™\Ü[Ûˆ\È™[[Ý™Y\ÙHÝ[Kž˜˜\ÙWØ[]YH[œÝXYŠ_JJ
K[˜Ý[ÛŠJ^ÚYŠYJ\™]\›ŽÝœÚ[X]\šX[
œÚ[X]\šX[XÛ
™]ÈË’	\ÊK›[™SX]\šX[XÛ
™]ÈË›\“K\ÊKœÛYÛÛ“X]\šX[XÛ
™]ÈË•ŽP‹\ÊJKÞO]\ÏËœÝ[_
œÝ[OÛ™]È™ŠœÝ[JN•^JKžKœÙ]ÛÛXÝ[ÛŠJNØÛÛœÝYK™™X]\™\ÎÚYŠ\ŸO\‹›[™Ý
\™]\›ŽØÛÛœÝ\‹›X\

OOžØÛÛœÝ\ŠK
NÜ™]\›ˆ‹›^Y\]\ËŸJJNÜ™]\›ˆ™]ÈJ‹J___K]^ØÛÛÜ—Û^Y\œ×Ü\œ×Ùœ˜YÛY[ˆœÝXÝ^Y\ˆ×ˆ[^\™SÙ™œÙ]×ˆ[ÜœÎ×ˆ[Y™™XÝÝ\N×ˆ›Ø]Y™™XÝÜ\˜[Y]\Ž×ˆ›Ø]ÜXÚ]N×ˆ›ÛÛ˜[œÜ\™[×ŸN×—ˆÚ[˜ÛYH]ÝÛœËØÝ\ÝÛWÚXY\—ØÛÛÜ“^Y\——[šY›Ü›HØ[\\Œ‘\œ˜^HÛÛÜ•^\™\Î×[šY›Ü›H™XÍÛÛÜ“Ù™œÙ]ØØ[\ÖÓ•SWÑ”×ÕVT‘T×N×[šY›Ü›H^Y\ˆÛÛÜ“^Y\œÖÓ•SWÑ”×ÕVT‘T×N×[šY›Ü›H[ÛÛÜ•^\™PÛÝ[×—™XÌÈ]œÖÓ•SWÐÔ”×N×—™›Ø]Ù]›Ü™\‘\Ý[˜ÙJ™XÌˆ]ŠH×ˆ™XÌˆˆHZ[Š]‹Kˆ]]ŠN×ˆ™]\›ˆZ[Š‹ž‹žJN×ŸW—™›Ø]Û\˜[˜ÙHHŽNN×—™XÍ\UÚ]UÒ[š\ÚX›QY™™XÝ
™XÍÛÛÜŠH×ˆ›Ø]HHÝ
ÛÛÜ‹œ™Ø‹™XÌÊŒÌÌÌÌÌÌÌÌÊJN×ˆYˆ
HHÛ\˜[˜ÙJH×ˆÛÛÜ‹˜HHŒ×ˆWˆ™]\›ˆÛÛÜŽ×ŸW—™XÍ\SYÚÛÛÜ•Ò[š\ÚX›QY™™XÝ
™XÍÛÛÜ‹›Ø][[œÚ]JH×ˆ›Ø]HHX^
ŒKKˆH[™Ý
ÛÛÜ‹ž^ˆHKŠJN×ˆÛÛÜ‹˜H
HKŒHÝÊXœÊJK[[œÚ]JN×ˆÛÛÜ‹œ™Øˆ
HÛÛÜ‹œ™Øˆ
ˆÛÛÜ‹œ™ØŽ×ˆ™]\›ˆÛÛÜŽ×ŸW—ˆÚYˆYš[™Y
P•QÊW[šY›Ü›H›ÛÛÚÝÓÝ][™N×[šY›Ü›H™XÌÈÝ][™PÛÛÜœÖÓ•SWÐÔ”×N×[šY›Ü›H›Ø]Ý][™UÚY×—™XÍÙ]Ý][™PÛÛÜŠ™XÌÈÝ][™PÛÛÜ‹™XÌˆ]ŠH×ˆ›Ø][HHKˆHÛ[\
Ù]›Ü™\‘\Ý[˜ÙJ]ŠHÈÝ][™UÚY‹KŠN×ˆ™]\›ˆ™XÍ
Ý][™PÛÛÜ‹[JN×ŸWˆÙ[™Y——[šY›Ü›H›Ø]Z[›Ü™\‘\Ý[˜ÙN×™XÍÙ]^Y\ÛÛÜŠ[^\™SÙ™œÙ]Ø[\\Œ‘\œ˜^H^™XÍÙ™œÙ]ØØ[K^Y\ˆ^Y\ŠH×ˆYˆ
^\™SÙ™œÙ]HÛÛÜ•^\™PÛÝ[
H™]\›ˆ™XÍ

N×—ˆ™XÌÈ]Ž×ˆËÈÜ˜YÛXH[œ›ÛÛÛÜˆ›Üˆ
[HHÈH•SWÐÔ”ÎÈH
ÊÈ
H×ˆYˆ
HOH^Y\‹˜ÜœÈ
H]ˆH]œÖÈHN×ˆW—ˆ›Ø]›Ü™\‘\Ý[˜ÙHHÙ]›Ü™\‘\Ý[˜ÙJ]‹žJN×ˆYˆ
^\™SÙ™œÙ]OH^Y\‹^\™SÙ™œÙ]
È[
]‹žŠH›Ü™\‘\Ý[˜ÙHZ[›Ü™\‘\Ý[˜ÙH
H™]\›ˆ™XÍ

N×ˆ™XÍÛÛÜˆH^\™J^™XÌÊ]UŠ]‹žKÙ™œÙ]ØØ[JK›Ø]
^\™SÙ™œÙ]
JJN×ˆYˆ
^Y\‹™Y™™XÝÝ\HOHÊH×ˆÚ[˜ÛYH]ÝÛœËØÝ\ÝÛWØ›ÙWØÛÛÜ“^Y\—ˆH[ÙH×ˆYˆ
^Y\‹˜[œÜ\™[	‰ˆÛÛÜ‹˜HOHŒ
H×ˆÛÛÜ‹œ™ØˆÏHÛÛÜ‹˜N×ˆW—ˆYˆ
^Y\‹™Y™™XÝÝ\HOHJH×ˆÛÛÜˆH\SYÚÛÛÜ•Ò[š\ÚX›QY™™XÝ
ÛÛÜ‹^Y\‹™Y™™XÝÜ\˜[Y]\ŠN×ˆH[ÙHYˆ
^Y\‹™Y™™XÝÝ\HOHŠH×ˆÛÛÜˆH\UÚ]UÒ[š\ÚX›QY™™XÝ
ÛÛÜŠN×ˆWˆWˆÛÛÜ‹˜H
H^Y\‹›ÜXÚ]N×ˆ™]\›ˆÛÛÜŽ×ŸWˆ‹Ý\ÝÛWØ›ÙWØÛÛÜ“^Y\Žˆ‹ËÈ›ÈÝ\ÝÛH›ÙH‹Ý\ÝÛWÚXY\—ØÛÛÜ“^Y\Žˆ‹ËÈ›ÈÝ\ÝÛHXY\ˆ‹[]˜][Û—Ü\œ×Ý™\^ˆˆÚYˆ•SWÕ”×ÕVT‘TÈˆˆÝXÝ^Y\ˆ×ˆ›Ø]ØØ[N×ˆ›Ø]šX\Î×ˆ[[ÙN×ˆ›Ø]›Z[Ž×ˆ›Ø]›X^×ˆN×—ˆ[šY›Ü›H^Y\ˆ[]˜][Û“^Y\œÖÓ•SWÕ”×ÕVT‘T×N×ˆ[šY›Ü›HØ[\\Œ‘\œ˜^H[]˜][Û•^\™\Î×ˆ[šY›Ü›H™XÍ[]˜][Û“Ù™œÙ]ØØ[\ÖÓ•SWÕ”×ÕVT‘T×N×ˆ[šY›Ü›H[[]˜][Û•^\™PÛÝ[×ˆ[šY›Ü›H›Ø]Ù[ÚYZYÚ×—ˆYÚ›Ø]XÛÙLÌŠYÚ™XÍ™Ø˜JH×ˆYÚ›Ø]ÚYÛˆHKŒHÝ\
LŽŒ™Ø˜VÌJJŒ‹Œ×ˆYÚ›Ø]^Û™[H‹Œ
ˆ[Ù
™Ø˜VÌKLŽŒ
H
ÈÝ\
LŽŒ™Ø˜VÌWJHHLËŒ×ˆYÚ›Ø]X[\ÜØHH[Ù
™Ø˜VÌWKLŽŒ
JMLÍ‹Œ
È™Ø˜VÌ—JŒM‹Œ
Ü™Ø˜VÌ×H
È›Ø]

N×ˆYÚ›Ø]™\Ý[HÚYÛˆ
ˆ^Š^Û™[
H
ˆ
X[\ÜØH
ˆ^ŠLŒËŒ
JN×ˆ™]\›ˆ™\Ý[×ˆW—ˆ›Ø]Ù][]˜][Û“[ÙJ™XÌˆ]‹Ø[\\Œ‘\œ˜^H^[[ÙJH×ˆYˆ
[ÙHOHSUUSÓ—Ô‘ÐJWˆ™]\›ˆXÛÙLÌŠ^\™J^™XÌÊ]‹Œ
JK˜X™Üˆ
ˆMKŒ
N×ˆYˆ
[ÙHOHSUUSÓ—ÑUH[ÙHOHSUUSÓ—ÐÓÓÔŠWˆ™]\›ˆ^\™J^™XÌÊ]‹Œ
JKœŽ×ˆ™]\›ˆŽ×ˆW—ˆ›Ø]Ù][]˜][ÛŠ™XÌˆ]‹Ø[\\Œ‘\œ˜^H^™XÍÙ™œÙ]ØØ[K^Y\ˆ^Y\ŠH×ˆËÈ[]˜][Ûˆ^\™\È\™H[™\Y[Û™ÈHKX^\×ˆ]ˆH™XÌŠ]‹žKŒH]‹žJN×ˆ]ˆH]ˆ
ˆÙ™œÙ]ØØ[KžÈ
ÈÙ™œÙ]ØØ[KžN×ˆ›Ø]HÛ[\
Ù][]˜][Û“[ÙJ]‹^^Y\‹›[ÙJK^Y\‹ž›Z[‹^Y\‹ž›X^
N×ˆ™]\›ˆ
ˆ^Y\‹œØØ[H
È^Y\‹˜šX\Î×ˆWˆÙ[™Y—ˆ‹[]˜][Û—Ý™\^ˆˆÚYˆ•SWÕ”×ÕVT‘TÈˆˆYŠ[]˜][Û•^\™PÛÝ[ˆ
H×ˆ›Ø][]˜][ÛˆHÙ][]˜][ÛŠ]‹[]˜][Û•^\™\Ë[]˜][Û“Ù™œÙ]ØØ[\ÖÌK[]˜][Û“^Y\œÖÌJN×ˆ˜[œÙ›Ü›YY
ÏH[]˜][Ûˆ
ˆ›Ü›X[×ˆWˆÙ[™Y—ˆ‹Ù[ÚYÝ™\^ˆ˜[œÙ›Ü›YY
ÏHÙ[ÚYZYÚ
ˆ›Ü›X[×ˆ‹YÚ[™×Ùœ˜YÛY[ˆšYˆ
YÚ[™Ñ[˜X›Y
H×ˆ›Ø]YÚHZ[Š‹ˆ
ˆÝ
“›Ü›X[YÚÜÚ][ÛŠKKŠN×ˆÛÑœ˜YÐÛÛÜ‹œ™Øˆ
HYÚ×ŸWˆ‹YÚ[™×Ü\œ×Ùœ˜YÛY[ˆ[šY›Ü›H›ÛÛYÚ[™Ñ[˜X›Y×[šY›Ü›H™XÌÈYÚÜÚ][ÛŽ×˜\žZ[™È™XÌÈ“›Ü›X[×ˆ‹[ÙWÙ\Ùœ˜YÛY[ˆˆÚYˆYš[™Y
TÑWÓÑÑT•QŠW™ÛÑœ˜YÐÛÛÜˆHXÚÑ\Ô‘ÐJÛÑœ˜YÑ\V
N×ˆÙ[ÙW™›Ø]œ˜YÐÛÛÜ™ˆHH
ˆ’YÚ™XÚ\Ú[Û–•ÖÌHÈ’YÚ™XÚ\Ú[Û–•ÖÌWH
ÈN×™ÛÑœ˜YÐÛÛÜˆHXÚÑ\Ô‘ÐJœ˜YÐÛÛÜ™ŠN×ˆÙ[™Y—ˆ‹[ÙWÚYÙœ˜YÛY[ˆ‹ËÈMÍÍÌŒM‹ŒOHM‹Œ
ˆM‹Œ
ˆM‹Œ™ÛÑœ˜YÐÛÛÜˆHXÚÑ\Ô‘ÐJ›Ø]
Øš™XÝY
HÈMÍÍÌŒM‹Œ
N×ˆ‹[ÙWÜ\œ×Ùœ˜YÛY[ˆˆÚYˆSÑHOHSÑWÒQSÑHOHSÑWÑTˆÚ[˜ÛYHXÚÚ[™Ï—ˆÙ[™Y——ˆÚYˆSÑHOHSÑWÒQ[šY›Ü›H[Øš™XÝY×ˆÙ[™Y—ˆ‹Ý™\›^WÙœ˜YÛY[ˆ™ÛÑœ˜YÐÛÛÜ‹œ™ØˆHZ^
ÛÑœ˜YÐÛÛÜ‹œ™Ø‹Ý™\›^PÛÛÜ‹Ý™\›^P[JN×ˆ‹Ý™\›^WÜ\œ×Ùœ˜YÛY[ˆ[šY›Ü›H™XÌÈÝ™\›^PÛÛÜŽ×[šY›Ü›H›Ø]Ý™\›^P[N×ˆ‹]UŽˆ™XÌˆ]UŠ™XÌˆ]‹™XÍ]
Wž×ˆ™]\›ˆ]ˆ
ˆ]žÈ
È™XÌŠ]žKŒH]ÈH]žJN×ŸW—ˆ‹™XÚ\Ú[Û—Ü]X[YšY\Žˆœ™XÚ\Ú[ÛˆYÚ›Ø]×œ™XÚ\Ú[ÛˆYÚ[×ˆ‹›Ú™XÝ]™WÝ^\š[™×Ý™\^ˆ™›ÜŠ[HHÈHÔ’QS•QÒSPQÑT×ÐÓÕS•È
ÊÚJWˆ›Ú™XÝ]™U^\™PÛÛÜ™ÖÚWHH›Ú™XÝ]™U^\™SX]š^ÚWH
ˆ]”ÜÚ][ÛŽ×ˆ‹›Ú™XÝ]™WÝ^\š[™×Ü\œ×Ý™\^ˆ[šY›Ü›HX]›Ú™XÝ]™U^\™SX]š^ÓÔ’QS•QÒSPQÑT×ÐÓÕS•N×˜\žZ[™È™XÍ›Ú™XÝ]™U^\™PÛÛÜ™ÖÓÔ’QS•QÒSPQÑT×ÐÓÕS•N×ˆ‹›Ú™XÝ]™WÝ^\š[™×Ü\œ×Ùœ˜YÛY[ˆ[šY›Ü›HØ[\\Œ‘›Ú™XÝ]™U^\™VÓÔ’QS•QÒSPQÑT×ÐÓÕS•N×[šY›Ü›HØ[\\Œ‘X\ÚÖÓÔ’QS•QÒSPQÑT×ÐÓÕS•N×˜\žZ[™È™XÍ›Ú™XÝ]™U^\™PÛÛÜ™ÖÓÔ’QS•QÒSPQÑT×ÐÓÕS•N×[šY›Ü›H›Ø]›Ú™XÝ]™U^\™P[P›Ü™\Ž×[šY›Ü›H›Ø]ÜXÚ]N×[šY›Ü›H›ÛÛ›ÛÜÝYÚ×—œÝXÝ\ÝÜ[Ûˆ×ˆ™XÌˆÚ^™N×ˆÚYˆTÑWÑTÕÔ•SÓ—ˆ™XÌˆÎ×ˆ™XÍÛ[›ÛN×ˆ™XÌÈ[Ž×ˆÙ[™Y—ŸN×—[šY›Ü›H\ÝÜ[Ûˆ›Ú™XÝ]™U^\™Q\ÝÜ[Û–ÓÔ’QS•QÒSPQÑT×ÐÓÕS•N×—™›Ø]Ù][P›Ü™\Š™XÌˆ
Wž×ˆ™XÌˆHÛ[\
›Ú™XÝ]™U^\™P[P›Ü™\ˆ
ˆZ[ŠKˆH
K‹KŠN×ˆ™]\›ˆZ[ŠžžJN×ŸW—ˆÚYˆTÑWÑTÕÔ•SÓ—›ÚY\ÝÜ
[›Ý]™XÌˆ™XÍÛ[›ÛK™XÌˆÊWž×ˆ™XÌˆˆHHÎ×ˆ›Ø]ŒˆHÝ
‹ŠN×ˆYˆ
ŒˆˆÛ[›ÛKÊH×ˆH™XÌŠLKŠN×ˆWˆ[ÙH×ˆ
ÏH
Œˆ
ˆ
Û[›ÛKž
ÈŒˆ
ˆ
Û[›ÛKžH
ÈŒˆ
ˆÛ[›ÛKžŠH
H
H
ˆŽ×ˆWŸW—›ÚY\ÝÜ
[›Ý]™XÌˆ™XÍÛ[›ÛK™XÌÈ[‹™XÌˆÊWž×ˆYˆ

[‹žOHŠH	‰ˆ
[‹žHOHŠJH×ˆ\ÝÜ
Û[›ÛKÊN×ˆH[ÙH×ˆ™XÌˆPˆH
HÊHÈ[‹žŽ×ˆ›Ø]ˆH[™Ý
PŠN×ˆ›Ø][X™HH][ŠŠHÈŽ×ˆ™XÌˆXˆH[X™H
ˆPŽ×ˆ›Ø]šÌˆHÝ
X‹XŠN×ˆ›Ø]ŒÍMÈHKˆ
ÈšÌŠˆ
Û[›ÛKž
ÈšÌŠˆ
Û[›ÛKžH
ÈšÌˆ
ˆÛ[›ÛKžŠJN×ˆHÈ
È[‹žˆ
ˆ
ŒÍMÈ
ˆXˆ
È™XÌŠÝ
[‹žKXŠK[‹žH
ˆX‹ž
JN×ˆWŸWˆÙ[™Y——™XÍZ^˜\ÙPÛÛÜŠ™XÍPÛÛÜ‹™XÍ˜\ÙPÛÛÜŠH×ˆÚY™YˆTÑWÐTÑWÓPUT’PSˆ˜\ÙPÛÛÜ‹œ™ØˆHPÛÛÜ‹˜HOHKŒÈPÛÛÜ‹œ™ØˆˆZ^
˜\ÙPÛÛÜ‹PÛÛÜ‹PÛÛÜ‹˜JKœ™ØŽ×ˆ˜\ÙPÛÛÜ‹˜HHZ[ŠKŒPÛÛÜ‹˜H
È˜\ÙPÛÛÜ‹˜JN×ˆÙ[ÙWˆ˜\ÙPÛÛÜ‹œ™Øˆ
ÏHPÛÛÜ‹œ™Øˆ
ˆPÛÛÜ‹˜N×ˆ˜\ÙPÛÛÜ‹˜H
ÏHPÛÛÜ‹˜N×ˆÙ[™Y—ˆ™]\›ˆ˜\ÙPÛÛÜŽ×ŸW—™XÍ›Ú™XÝ]™U^\™PÛÛÜŠ™XÍÛÛÜ™Ë\ÝÜ[Ûˆ\ÝÜ[Û‹Ø[\\Œ‘^Ø[\\Œ‘X\ÚË™XÍ˜\ÙPÛÛÜŠH×ˆ™XÌÈHÛÛÜ™Ëž^ˆÈÛÛÜ™ËÎ×ˆYŠžˆ
ˆžˆKŠH×ˆÚYˆTÑWÑTÕÔ•SÓ—ˆžH
H\ÝÜ[Û‹œÚ^™N×ˆ\ÝÜ
žK\ÝÜ[Û‹œÛ[›ÛK\ÝÜ[Û‹›[‹\ÝÜ[Û‹œÊN×ˆžHÏH\ÝÜ[Û‹œÚ^™N×ˆÙ[™Y——ˆ›Ø]HÙ][P›Ü™\ŠžJH
ˆ^\™L‘
X\ÚËžJKœŽ×—ˆYŠˆŠH×—ˆÚYˆP•Q×ÐSWÐ“Ô‘T—ˆ™XÌÈˆH^\™L‘
^žJKœ™ØŽ×ˆ™]\›ˆZ^˜\ÙPÛÛÜŠ™XÍ
‹œˆ
ˆ‹™Ë‹˜‹KŒ
K˜\ÙPÛÛÜŠN×ˆÙ[ÙWˆ™XÍÛÛÜˆH^\™L‘
^žJN×ˆÛÛÜ‹˜H
H×ˆYˆ
›ÛÜÝYÚ
H×ˆ™]\›ˆZ^˜\ÙPÛÛÜŠ™XÍ
Ü\
ÛÛÜ‹œ™ØŠKÛÛÜ‹˜JK˜\ÙPÛÛÜŠN×ˆH[ÙH×ˆ™]\›ˆZ^˜\ÙPÛÛÜŠÛÛÜ‹˜\ÙPÛÛÜŠN×ˆWˆÙ[™Y——ˆWˆWˆ™]\›ˆZ^˜\ÙPÛÛÜŠ™XÍ
ŠK˜\ÙPÛÛÜŠN×ŸWˆŸKÝ[™]ÈÛ\ÜÞØÛÛœÝXÝÜŠJ^Ý\Ëœ]YK\Ë\™Ù]]\Ëš[œÝ[

_XÝ\ÝÛRXY\ÛÛÜ“^Y\Š
^Ú]‹˜Ý\ÝÛWÚXY\—ØÛÛÜ“^Y\]\Ë\™Ù]Ø	Ý\Ëœ]XÝ\ÝÛWÚXY\—ØÛÛÜ“^Y\˜O]XÝ\ÝÛP›ÙPÛÛÜ“^Y\Š
^Ú]‹˜Ý\ÝÛWØ›ÙWØÛÛÜ“^Y\]\Ë\™Ù]Ø	Ý\Ëœ]XÝ\ÝÛWØ›ÙWØÛÛÜ“^Y\˜O]Z[œÝ[

^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌN\Ë\™Ù]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNš]‹X\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—OØ\™Ý[Y[ÖÌ—N\Ëœ]Ü™]\›ˆØš™XÝšÙ^\ÊJK™›Ü‘XXÚ

OžÓØš™XÝ™Yš[™T›Ü\J\Ë‹ÙÙ]Š
OO™VÛ—_JKÜŠÛ—OYVÛ—_JJK_J”ÚY\Ú[šËš]ÝÛœËÈŠKÝ\Ý‹][™]È™‹[™]ÈYŽÛ]ÝŽÙ[˜Ý[ÛˆŠJ^Û]X\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—OØ\™Ý[Y[ÖÌ—N–ÞÛÙ™œÙ]ŒÛÝ[Œ_WKX\™Ý[Y[Ë›[™ÝŒÏØ\™Ý[Y[ÖÌ×N›ÚYÏX\™Ý[Y[Ë›[™ÝØ\™Ý[Y[ÖÍN›ÚYÏX\™Ý[Y[Ë›[™ÝOØ\™Ý[Y[ÖÍWN›ÚYOX\™Ý[Y[Ë›[™ÝØ\™Ý[Y[ÖÍ—N›ÚYÚYŠOOYK›[™Ý
\™]\›ŽØÛÛœÝ[™]È]‘Ù›ÜŠÛÛœÝÙˆŠZYŠ™^[	‰šKž”‹š[\œÙXÝÑ^[
™^[ÊJ^ØÛÛœÝ]›Ù™œÙ]
›‹O\ŠÝ˜ÛÝ[
›ŽÛ›[Ý™UÊVÜ—KVÜŠÌWJNÙ›ÜŠ]\ŠÛŽÝNÝ
Ï[Š[›[™UÊVÝKVÝ
ÌWJ_XÝ‹˜\UÐØ[˜\ÔÛYÛÛŠËJ_Y[˜Ý[Ûˆ]ŠK‹Š^Ý˜™YÚ[”]

NØÛÛœÝO[[OXÝ‹œÚ[›ÜXÚ]OÌN˜Ý‹œÚ[›ÜXÚ]NÚHOO]™ÛØ˜[[I‰Š™ÛØ˜[[OZJK˜\˜ÊK‹
Ý‹œÚ[œ˜Y]\ßÊJ›‹Š“X]”KLJKÝ‹œÚ[˜ÛÛÜ‰‰Š™š[Ý[OXÝ‹œÚ[˜ÛÛÜ‹™š[

JKÝ‹œÚ[›[™I‰Š›[™UÚYJÝ‹œÚ[ÚYJJ›‹œÝ›ÚÙTÝ[OXÝ‹œÚ[›[™KœÝ›ÚÙJ
J_XÛÛœÝ[™]ÈK‘I
‘TÑÎÌˆ‹
NÙ[˜Ý[ÛˆŠK‹Š^ØÛÛœÝÏ\‹œ[˜\‘[Y[œÚ[ÛœÊ
KžÝ˜Ø[˜\ËÚYÙ›ÜŠÛÛœÝÈÙˆK™Ù[ÛY]šY\ÊZYŠKž”‹š[\œÙXÝÑ^[
Ë™^[ŠJ^ÚYŠ‹œÙ]Ù[ÛY]žJÊKÝ‹ž›ÛÛK›Z[˜Ý‹˜ÛÛ^ž›ÛÛ_Ý‹ž›ÛÛK›X^XÝ‹˜ÛÛ^ž›ÛÛJ\™]\›ŽÚYŠK\OOORK”ÒS•	‰˜Ý‹œÚ[
^ØÛÛœÝOJX]œ›Ý[™
Ý‹œÚ[œ˜Y]\Ê›Š_Ê›ŠJœÎÙ›ÜŠÛÛœÝÈÙˆËš[™XÙ\Ê^ØÛÛœÝÏ\Ë›Ù™œÙ]
™KœÚ^™KO[ÊÜË˜ÛÝ[
™KœÚ^™NÙ›ÜŠ]Ï[ÎÜÏNÜÊÏYKœÚ^™JY‹œÙ]œ›ÛP\œ˜^JK™\XÙ\ËÊK‹š\ÔÚ[[œÚYJ‹JI‰]ŠK™\XÙ\ÖÜ×KK™\XÙ\ÖÜÊÌWKŠ__Y[ÙHŠK™\XÙ\ËËš[™XÙ\ËKœÚ^™K‹‹K\OORK”ÓQÓÓŠ__XÛÛœÝ[™]ÈË”L][™]ÈË”L
JKÝ[™]ÈË”L][™]ÈË”‹][™]ÈËšÛ[™]ÈËšÛ[™]ÈË”LÝ[™]ÈKž”Š‘TÑÎÌˆ‹
KÝ^ØÜ™X]U^\™Qœ›ÛQ™X]\™JK‹‹J^Û]ÎÚYŠÝ[Ÿ]‹Ý‹œÙ]ÛÛ^
ŠK
^ÙKœ[˜\‘[Y[œÚ[ÛœÊ]ŠNØÛÛœÝOYØÝ[Y[˜Ü™X]Q[[Y[
˜Ø[˜\ÈŠNÙ‹˜ÜœÏYK˜ÜœËKÚY\‹KšZYÚ\ŽØÛÛœÝXK™Ù]ÛÛ^
Œ™‹ÝÚ[™XYœ™\]Y[NˆLJNÚI‰Š™š[Ý[OZK™Ù]Ý[J
K™š[™XÝ
‹ŠJK™ÛØ˜[ÛÛ\ÜÚ]SÜ\˜][Û[‹™ÛØ˜[ÛÛ\ÜÚ]SÜ\˜][ÛŸœÛÝ\˜ÙK[Ý™\ˆ‹š[XYÙTÛ[ÛÝ[™Ñ[˜X›YHLK›[™R›Ú[Hœ›Ý[™‹K˜\Ê˜ÜœËÝŠKÝ‹˜\SX]š^
›X]š^ÛÜ›[™\œÙJKš\Ò[™\YÊ‹œÙ]
KÙ\ÝK››Ü
KÝ‹œÙ]
˜Ø[˜\ËÚY[˜Ø[˜\ËšZYÚJK™]šYJ]ŠJNŠ‹œÙ]
KÙ\ÝKœÛÝ]
KÝ‹œÙ]
˜Ø[˜\ËÚY˜Ø[˜\ËšZYÚJK™]šYJ]ŠJK]‹˜ÛÛ\ÜÙJ‹›][\JÝŠK›™YØ]J
K]‹ÝŠK‹›][\SX]šXÙ\Ê]‹›X]š^ÛÜ›
K‹™XÛÛ\ÜÙJ‹]‹ÝŠKœÙ]˜[œÙ›Ü›JÝ‹žÝ‹žK‹ž‹žJNØÛÛœÝÏSX]˜XœÊKÙÝ‹ž
NÛ‹œÙ]›ÛÛJKž›ÛÛJNÙ›ÜŠÛÛœÝHÙˆ™™X]\™\Ê[‹œÙ]™X]\™JJKŠKÝ‹ÊNÛÏ[™]ÈË‘ÓÔŠJKË™›\O]š\Ò[™\YY[ÙHYŠJ^ØÛÛœÝ[™]ÈZ[\œ˜^JÊNÝÌOLMJšKœ‹ÌWOLMJšK™ËÌ—OLMJšK˜‹Ï[™]ÈË‘ÖQŠKKË‘ÕÙ
_Y[ÙHÏ[™]ÈË™ÔÜ™]\›ˆß_K[™]ÈKž”Š‘TÑÎÌˆŠK]JJOOŠ™Ù[™\˜]SZ\X\ÏHLK›XYÑš[\YK›XYÑš[\ŸËšÍœK›Z[‘š[\YK›Z[‘š[\ŸËšÍœK
KÝ^ØÛÛ™\
KŠ^Û]ŽÚYŠš\Ñ™X]\™PÛÛXÝ[ÛŠ^ØÛÛœÝO\‹œÛÝ\˜ÙK˜˜XÚÙÜ›Ý[™^Y\‹ÏZI‰šKœZ[Û™]ÈË”LYŠKœZ[È˜˜XÚÙÜ›Ý[™XÛÛÜˆ—JN›ÚYÙKÑ^[
‹˜ÜœËŠK]Ý‹˜Ü™X]U^\™Qœ›ÛQ™X]\™J‹‹œÝX™]š\Ú[Û•™\ÚÛ‹œÝ[KÊK‹™™X]\™\Ï]‹™^[Y_Y[Ù^ÚYŠ]š\Õ^\™J]›ÝÈ™]È\œ›ÜŠ‘]H\H\È›ÝÝ\ÜYÈÛÛ™\[È^\™HŠNÛ]\™]\›ˆ‹š\ÐÛÛÜ“^Y\Ù[˜Ý[ÛŠJ^Ü™]\›ˆ˜[š\ÛÝ›ÜOLM‹œ™[][\P[OYK˜[œÜ\™[]ŠJ_J‹ŠNœ‹š\Ñ[]˜][Û“^Y\Ê‹™›\I‰Š‹™›\OHLJK]Š‹ŠJN›ÚY_K]XÛ\ÜÈ^[™È^ØÛÛœÝXÝÜŠJ^ØÛÛœÝØØXÚSY™U[YNœ]˜K•VT‘KZ[‘š[\Ž›‹XYÑš[\ŽšK\]TÝ˜]YÞNœË‹‹›ßOYNÜÝ\\ŠË‹‹›ËØXÚSY™U[YNœŸJK\Ë›Z[‘š[\[‹\Ë›XYÑš[\ZK\Ë\]TÝ˜]YÞO\ÏÏÞÝ\N›PKÜ[ÛœÎžß__XÛÛ™\
J^Ü™]\›ˆÝ‹˜ÛÛ™\
K\Ê_Y[]J
^Ý	‰\Ë˜ØXÚK˜ÛX\Š
NÙ›ÜŠÛÛœÝÙˆ\Ëœ\™[›]™[›Ù\Ê]˜]™\œÙJJ\ËšY
J__KÝXÛ\ÜÈ^[™È]žØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNÝ˜\ˆŽÊYJK™ž	‰ŠÛÛœÛÛKØ\›ŠÛÛÜ“^Y\ˆž\È\™XØ]Y\ÙHÛÛÜ“^Y\‹™Y™™XÝÝ\H[™ÛÛÜ“^Y\‹™Y™™XÝÜ\˜[Y]\ˆ[œÝXYˆŠK‹™žŒÊ‹™Y™™XÝÜ\˜[Y]\\‹™ž‹™Y™™XÝÝ\O]œ™[[Ý™SYÚÛÛÜŠNœ‹™žŒ	‰Š‹™Y™™XÝÜ\˜[Y]\\‹™ž‹™Y™™XÝÝ\O]œ™[[Ý™UÚ]PÛÛÜŠJNØÛÛœÝÙY™™XÝÝ\N›LY™™XÝÜ\˜[Y]\ŽšOLK˜[œÜ\™[œËYX™[^Y\Ž›ÏHLKY\™ÙQ™X]\™\Î˜OHLÝ[N›^ßK‹‹˜ßOYNÜÝ\\ŠÊK\Ëš\ÐÛÛÜ“^Y\HL\ËœÝ[O[[œÝ[˜Ù[Ùˆ™Û›™]È™Š
K\Ëš\ÚX›OHL\Ë™Yš[™S^Y\”›Ü\Jš\ÚX›H‹\Ëš\ÚX›JK\Ë›ÜXÚ]OLK\Ë™Yš[™S^Y\”›Ü\J›ÜXÚ]H‹\Ë›ÜXÚ]JK\ËœÙ\]Y[˜ÙOL\Ë™Yš[™S^Y\”›Ü\JœÙ\]Y[˜ÙH‹\ËœÙ\]Y[˜ÙJK\Ë˜[œÜ\™[\ß\Ë›ÜXÚ]OK\Ë››Õ^\™T\™[Ý]ÚYS[Z]HHYKœÛÝ\˜ÙI‰™KœÛÝ\˜ÙKš\Ñš[TÛÝ\˜ÙK\Ë™Y™™XÝÝ\O[‹\Ë™Y™™XÝÜ\˜[Y]\ZK\Ë˜Z[^[HL\ËœÝXÝ\™OHŒ™‹\Ë˜YX™[^Y\[Ë\Ë›Y\™ÙQ™X]\™\ÏX_\Ù]\˜\Ý\“›ÙJ
^ØÛÛœÝO[™]ÈJ\ÊNÜ™]\›ˆ›X]\šX[˜YÛÛÜ•[JJK›X]\šX[œÙ]ÛÛÜ•[RYÊ\Ëœ\™[˜ÛÛÜ“^Y\œÓÜ™\ŠK_]\]JK‹Š^Ü™]\›ˆPJ\Ë‹Š__KXÛ\ÜÈ^[™È]žØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNØÛÛœÝÜØØ[NœLK›Ñ]U˜[YN›‹Û[\˜[Y\ÎšK\ÙT™Ø˜U^\™Q[]˜][ÛŽœË\ÙPÛÛÜ•^\™Q[]˜][ÛŽ›ËÛÛÜ•^\™Q[]˜][Û“Z[–Ž˜KÛÛÜ•^\™Q[]˜][Û“X^Ž›šX\Î˜Ë[ÙNš‹‹_OYNÜÝ\\ŠJK\Ëš\Ñ[]˜][Û“^Y\HL\Ë››Ñ]U˜[YO[‹
Kž›Z[ŸKž›X^
I‰˜ÛÛœÛÛKØ\›ŠÛÛ™šYÈ\Ú[™È›Z[ˆ[™›X^\™H\™XØ]Y\ÙHØÛ[\˜[Y\ÎˆÛZ[‹X^_HÝXÝ\™KˆŠK\Ëž›Z[ZOË›Z[ÏÙKž›Z[‹\Ëž›X^ZOË›X^ÏÙKž›X^\Ë™Yš[™S^Y\”›Ü\JœØØ[H‹ŠK\Ë\ÙT™Ø˜U^\™Q[]˜][Û\Ë\Ë\ÙPÛÛÜ•^\™Q[]˜][Û[Ë\Ë˜ÛÛÜ•^\™Q[]˜][Û“Z[–XK\Ë˜ÛÛÜ•^\™Q[]˜][Û“X^[\Ë˜šX\ÏXË\Ë›[ÙOZ\Ù]\˜\Ý\“›ÙJ
^ØÛÛœÝO[™]ÈJ\ÊNÝ›X]\šX[œÙ][]˜][Û•[JJK›X]\šX[œÙ][]˜][Û•[RY
\ËšY
NØÛÛœÝJ
OOœÙ]›ÞŠÛZ[Ž™K›Z[‹X^™K›X^ØØ[N\ËœØØ[_JNÜ™]\›ˆŠ
KK˜Y]™[\Ý[™\Šœ˜\Ý\‘[]˜][Û“]™[Ú[™ÙY‹ŠK\Ë˜Y]™[\Ý[™\ŠœØØ[K\›Ü\KXÚ[™ÙY‹ŠK˜Y]™[\Ý[™\Š™\ÜÜÙH‹


OOžÝ\Ëœ™[[Ý™Q]™[\Ý[™\ŠœØØ[K\›Ü\KXÚ[™ÙY‹Š_JJK_]\]JK‹Š^Ü™]\›ˆÐJ\Ë‹Š__K]XÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNØÛÛœÝÛØš™XÝÙœ‹˜]ÚY›‹Û“Y\ÚÜ™X]YšKXØÝ\˜]N›ÏHLš[\Ž˜KY\™ÙQ™X]\™\Î›HLÝ[N˜Ï^ßK‹‹šOYNÜÝ\\ŠŸ™]ÈË–R›
K\Ë\]OXÐK\]K\Ë˜ÛÛ™\[‹˜ÛÛ™\
Ø˜]ÚY›ŸJK\Ë›Û“Y\ÚÜ™X]YZK\Ëš\Ñ™X]\™QÙ[ÛY]žS^Y\HL\ËœÝ[OXÈ[œÝ[˜Ù[Ùˆ™ØÎ›™]È™ŠÊK\Ë˜XØÝ\˜]O[Ë\Ë˜Z[^[H]\Ë˜XØÝ\˜]K\Ë™š[\XK\Ë›Y\™ÙQ™X]\™\Ï[\™U\]JJ^ÙKš\Ê\Ëœ\™[
I‰\Ë›Øš™XÝÙ˜ÛX\Š
__K[™]ÈË”L[™]ÈË™XQ‹[™]ÈË“”›ŽÙ[˜Ý[ÛˆŠK‹Š^Ü™]\›ˆ˜Ø[Y\˜K˜Ø[Y\˜LÑš\ÓÜÙÜ˜\XÐØ[Y\˜OÙ[˜Ý[ÛŠKŠ^ØÛÛœÝ[™]ÈË’UTJŠNÛ‹˜\SX]š^
˜Ø[Y\˜K˜Ø[Y\˜LÑœ›Ú™XÝ[Û“X]š^
NØÛÛœÝOKJ›‹ž
˜Ø[Y\˜KÚYÏKJ›‹žJ˜Ø[Y\˜KšZYÚOSX]œÜ\
JšJÛÊ›ÊNÜ™]\›ˆX]›X^
KYJ_JKŠN™[˜Ý[ÛŠK‹Š^ÚYŠL
\™]\›ˆKÌØÛÛœÝO]˜Ø[Y\˜Kœ™TÔÑJœ‹ÛŽÜ™]\›ˆX]›X^
KYJ_JK‹Š_Y[˜Ý[ÛˆŠ
^Ý›Øš‰‰Š›Øš‹š\ÚX›OHLJK››Ýš\ÚX›TÚ[˜Ù_
››Ýš\ÚX›TÚ[˜ÙOQ]K››ÝÊ
KœÜÙOKLJNÙ›ÜŠÛÛœÝHÙˆ˜Ú[™[ŠQŠJ_Y[˜Ý[ÛˆÝŠ
^Ý›X]\šX[š[[œÚ]T˜[™ÙOËœÙ]
›Z[’[[œÚ]T˜[™ÙK›X^[[œÚ]T˜[™ÙJ_Y[˜Ý[ÛˆŠ
^Ý›X]\šX[™[]˜][Û”˜[™ÙOËœÙ]
›Z[‘[]˜][Û”˜[™ÙK›X^[]˜][Û”˜[™ÙJ_Y[˜Ý[ÛˆŠ
^Ý›X]\šX[˜[™ÛT˜[™ÙOËœÙ]
›Z[[™ÛT˜[™ÙK›X^[™ÛT˜[™ÙJ_T‹™Ù[ÛY]žK˜›Ý[™[™Ð›ÞPŽØÛÛœÝ]XÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNØÛÛœÝÛØš™XÝÙœ[™]ÈË–R›Ü›Ý\›[™]ÈË–R›˜›Þ\ÎšO[™]ÈË–R›ØÝ™YQ\[Z]›ÏKLKÚ[YÙ]˜OL™M‹Ú[Ú^™N›L‹ÜÙU™\ÚÛ˜ÏL‹Z[’[[œÚ]T˜[™ÙNšLKX^[[œÚ]T˜[™ÙNOMMLÍ‹Z[‘[]˜][Û”˜[™ÙN™X^[]˜][Û”˜[™ÙNœZ[[™ÛT˜[™ÙN™KNLX^[™ÛT˜[™ÙN›ONLX]\šX[™Ï^ßK[ÙNOY\ÓÓÔ‹‹‹ž_OYNÜÝ\\Š‹JK\Ëš\ÔÚ[ÛÝY^Y\HL\Ëœ›ÝØÛÛHœÚ[ÛÝY‹\Ë™Ü›Ý\[‹\Ë›Øš™XÝÙ˜Y
\Ë™Ü›Ý\
K\Ë˜˜›Þ\ÏZ_™]ÈË–R›\Ë˜˜›Þ\Ëš\ÚX›OHLK\Ë›Øš™XÝÙ˜Y
\Ë˜˜›Þ\ÊK\Ë™Ü›Ý\\]SX]š^ÛÜ›

K\Ë›ØÝ™YQ\[Z][Ë\ËœÚ[YÙ]XK\ËœÚ[Ú^™O[\ËœÜÙU™\ÚÛXË\Ë™Yš[™S^Y\”›Ü\J›Z[’[[œÚ]T˜[™ÙH‹ÝŠK\Ë™Yš[™S^Y\”›Ü\J›X^[[œÚ]T˜[™ÙH‹KÝŠK\Ë™Yš[™S^Y\”›Ü\J›Z[‘[]˜][Û”˜[™ÙH‹ŠK\Ë™Yš[™S^Y\”›Ü\J›X^[]˜][Û”˜[™ÙH‹ŠK\Ë™Yš[™S^Y\”›Ü\J›Z[[™ÛT˜[™ÙH‹‹ŠK\Ë™Yš[™S^Y\”›Ü\J›X^[™ÛT˜[™ÙH‹KŠK\Ë›X]\šX[YË\Ë›X]\šX[š\ÓX]\šX[
\Ë›X]\šX[š[[œÚ]T˜[™ÙO[™]ÈË’NVJ\Ë›Z[’[[œÚ]T˜[™ÙK\Ë›X^[[œÚ]T˜[™ÙJK\Ë›X]\šX[™[]˜][Û”˜[™ÙO[™]ÈË’NVJ\Ë›Z[‘[]˜][Û”˜[™ÙK\Ë›X^[]˜][Û”˜[™ÙJK\Ë›X]\šX[˜[™ÛT˜[™ÙO[™]ÈË’NVJ\Ë›Z[[™ÛT˜[™ÙK\Ë›X^[™ÛT˜[™ÙJK\Ë›X]\šX[[™]ÈÜ
\Ë›X]\šX[
JK\Ë›[ÙOP_\ÓÓÔ‹\Ëœ›ÛÝ]›ÚY\™U\]JJ^Û]ŽÝ˜Ø[Y\˜Kœ™TÔÑO]˜Ø[Y\˜KšZYÚÊŠ“X][ŠJœË˜ÚŽK™YÕÔ˜Y
˜Ø[Y\˜K˜Ø[Y\˜LÑ™›ÝŠJJK\Ë›X]\šX[	‰Š\Ë›X]\šX[š\ÚX›O]\Ëš\ÚX›K\Ë›X]\šX[›ÜXÚ]O]\Ë›ÜXÚ]K\Ë›X]\šX[œÚ^™O]\ËœÚ[Ú^™K\Ë›X]\šX[œØØ[O]˜Ø[Y\˜Kœ™TÔÑK\Ë›X]\šX[\]U[šY›Ü›\É‰\Ë›X]\šX[\]U[šY›Ü›\Ê
JNÙ›ÜŠÛÛœÝÙˆK˜[Y\Ê
J^ÚYŠš\ÐØ[Y\˜_O]\Ê\™]\›–Ý\Ëœ›ÛÝNÚYŠ›ÚYOO]›Øš‰‰›Øš‹š\ÔÚ[É‰›Øš‹›^Y\O]\ÊZYŠŠ^ÚYŠ]™š[™ÛÛ[[Û[˜Ù\ÝÜŠŠK\Š\™]\›–Ý\Ëœ›ÛÝ_Y[ÙH]\™]\›ˆÖÜ—N–Ý\Ëœ›ÛÝ_]\]JKŠ^ÚYŠ‹š\ÚX›OHLK\Ë›ØÝ™YQ\[Z]L	‰\Ë›ØÝ™YQ\[Z]‹™\
\™]\›ˆ›ÚYŠŠNØÛÛœÝ\‹YÚ˜›ÞÜ‹YÚ˜›Þœ‹˜˜›ÞÚYŠ‹š\ÚX›O]˜Ø[Y\˜Kš\Ð›ÞÕš\ÚX›J‹\Ë›Øš™XÝÙ›X]š^ÛÜ›
K‹š\ÚX›J^ÚYŠ‹››Ýš\ÚX›TÚ[˜ÙO]›ÚY‹˜ÛÜJ˜Ø[Y\˜K˜Ø[Y\˜LÑœÜÚ][ÛŠKœÝXŠ\Ë›Øš™XÝÙ™Ù]ÛÜ›ÜÚ][ÛŠ™]ÈË”L
JK‹˜\T]X]\›š[ÛŠ\Ë›Øš™XÝÙ™Ù]ÛÜ›]X]\›š[ÛŠ™]ÈË”ŠKš[™\

JKOO\‹›[TÚ[ÊZYŠ‹›ØšŠ\‹›Øš‹š\ÚX›OHLÙ[ÙHYŠ\‹œ›ÛZ\ÙJ^ØÛÛœÝOSX]›X^
ŒK‹™\Ý[˜ÙUÔÚ[
ŠJKÏSŠKœÚ[Ú^™K‹œÚ[ÜXÚ[™ËJKÚNÜ‹œ›ÛZ\ÙO]œØÚY[\‹™^XÝ]JÛ^Y\Ž™K™\]Y\Ý\Žœ‹šY]ÎšY]Ëš[Üš]NœË™Y˜]ÎˆLX\›Q›Ü[˜Ý[ÛŽOˆ]œ™\]Y\Ý\‹š\ÚX›_]\Ëš\ÚX›_JK[Š
OžÜ‹›Øš]‹YÚ˜›Þ]YÚ˜›Þ\Ë™Ü›Ý\˜Y
‹›ØšŠK‹›Øš‹\]SX]š^ÛÜ›
L
_JJK˜Ø]Ú

OžÚYŠ]š\ÐØ[˜Ù[YÛÛ[X[™^Ù\[ÛŠ\™]\›ˆJJK™š[˜[J


OOžÜ‹œ›ÛZ\ÙO[[JJ_ZYŠ‹˜Ú[™[‰‰œ‹˜Ú[™[‹›[™Ý
^ØÛÛœÝO[‹™\Ý[˜ÙUÔÚ[
ŠNÚYŠ‹œÜÙOSŠKœÚ[Ú^™K‹œÚ[ÜXÚ[™ËJKÝ\ËœÜÙU™\ÚÛ‹œÜÙOLJ\™]\›ˆ‹˜Ú[™[ŽÙ›ÜŠÛÛœÝÙˆ‹˜Ú[™[ŠQŠ
__Y[ÙHŠŠ_\ÜÝ\]J
^Ý\Ë™\Ü^YYÛÝ[LÙ›ÜŠÛÛœÝÙˆ\Ë™Ü›Ý\˜Ú[™[ŠZYŠš\ÚX›J^ØÛÛœÝO]™Ù[ÛY]žK˜]šX]\ËœÜÚ][Û‹˜ÛÝ[Ý™Ù[ÛY]žKœÙ]˜]Ô˜[™ÙJJK\Ë™\Ü^YYÛÝ[
ÏY_ZYŠ\Ë™\Ü^YYÛÝ[\ËœÚ[YÙ]
ZYŠ\ËœÝ\ÜÔ›ÙÜ™\ÜÚ]™Q\Ü^J^ØÛÛœÝ]\ËœÚ[YÙ]Ý\Ë™\Ü^YYÛÝ[Ù›ÜŠÛÛœÝHÙˆ\Ë™Ü›Ý\˜Ú[™[ŠZYŠKš\ÚX›J^ØÛÛœÝSX]™›ÛÜŠK™Ù[ÛY]žK™˜]Ô˜[™ÙK˜ÛÝ[

NÜŒÙK™Ù[ÛY]žKœÙ]˜]Ô˜[™ÙJŠN™Kš\ÚX›OHL_]\Ë™\Ü^YYÛÝ[
]Y[Ù^Ý\Ë™Ü›Ý\˜Ú[™[‹œÛÜ


JOO™K\Ù\‘]K››ÙKœÜÙK]\Ù\‘]K››ÙKœÜÙJJNÛ]HLNÝ\Ë™\Ü^YYÛÝ[LÙ›ÜŠÛÛœÝHÙˆ\Ë™Ü›Ý\˜Ú[™[Š^ØÛÛœÝYK™Ù[ÛY]žK˜]šX]\ËœÜÚ][Û‹˜ÛÝ[Ý\Ë™\Ü^YYÛÝ[
Ü\ËœÚ[YÙ]ÊKš\ÚX›OHLKHL
N\Ë™\Ü^YYÛÝ[
Ï\Ÿ_XÛÛœÝQ]K››ÝÊ
NÙ›ÜŠ]O]\Ë™Ü›Ý\˜Ú[™[‹›[™ÝLNÙOLÙKKJ^ØÛÛœÝ]\Ë™Ü›Ý\˜Ú[™[–ÙWNÈ\‹š\ÚX›I‰\‹\Ù\‘]K››ÙK››Ýš\ÚX›TÚ[˜ÙOŒYM	‰Š\Ë™Ü›Ý\˜Ú[™[‹œÜXÙJKJK‹™Ù[ÛY]žK™\ÜÜÙJ
K‹›X]\šX[[[‹™Ù[ÛY]žO[[‹\Ù\‘]K››ÙK›Øš[[
__\XÚÓØš™XÝÐ]
KŠ^Û]X\™Ý[Y[Ë›[™ÝŒÉ‰›ÚYOOX\™Ý[Y[ÖÌ×OØ\™Ý[Y[ÖÌ×N–×NÜ™]\›ˆXKœXÚÔÚ[Ð]
K‹\ËŠ_YÙ]Øš™XÝÕ\]Q›Ü]XÚY^Y\œÊ
^ÚYŠ›ØšŠ^ØÛÛœÝO]œ\™[Ü™]\›ˆI‰™K›ØšÞÙ[[Y[›Øš‹\™[™K›ØšŸNžÙ[[Y[›ØšŸ___KÝ[™]ÈË”L[™]ÈË”LÝ[™]ÈË”LØÛ\ÜÈ]ˆ^[™ÈË”Y]žØÛÛœÝXÝÜŠ
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNŒOX\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚYÜÝ\\Š
K\Ë›[TÚ[Ï]\Ë›^Y\YK\Ë˜Ú[™[V×K\Ë˜˜›Þ[™]ÈË“”›‹\ËœÜÙOKL_YÙ]Ú[ÜXÚ[™Ê
^Ü™]\›ˆ\Ë›^Y\‹œÜXÚ[™ËÌŠŠ\Ë™\YÙ]Y

^Ý›ÝÈ™]È\œ›ÜŠ’[ˆ^[™YÚ[ÛÝY›ÙK[ÝH]™HÈ[\[Y[HÙ]\ˆYHŠ_XY
J^Ý\Ë˜Ú[™[‹œ\Ú

Kœ\™[]\Ë\Ë˜Ü™X]PÚ[PPŠJ_XÜ™X]PÚ[PPŠ
^ØÛÛœÝOLŠŠŠ™\]\Ë™\
NÝ\Ë˜˜›Þ™Ù]Ú^™JÝŠK™]šYTØØ[\ŠJK˜˜›Þ›Z[‹˜ÛÜJ\Ë˜˜›Þ›Z[ŠK‹˜ÛÜJ\ÊK›][\TØØ[\ŠJKÝ‹œÝX•™XÝÜœÊŠK›][\JÝŠK˜˜›Þ›Z[‹˜Y
ÝŠK˜˜›Þ›X^˜ÛÜJ˜˜›Þ›Z[ŠK˜Y
ÝŠ_[ØY

^Ü™]\›ˆ\Ë›^Y\‹œÛÝ\˜ÙK™™]Ú\Š\Ë\›\Ë›^Y\‹œÛÝ\˜ÙK›™]ÛÜšÓÜ[ÛœÊK[Š
O\Ë›^Y\‹œÛÝ\˜ÙKœ\œÙJÛÝ]\Ë›^Y\‹[Ž\Ë›^Y\‹œÛÝ\˜Ù_JJJ_Yš[™ÛÛ[[Û[˜Ù\ÝÜŠ
^Ü™]\›ˆ™\O]\Ë™\Ý™\\Ë™\Ý\Ëœ\™[™š[™ÛÛ[[Û[˜Ù\ÝÜŠ
N\Ë™š[™ÛÛ[[Û[˜Ù\ÝÜŠœ\™[
NšYO]\ËšYÝŒO]™\Ý\Ëœ\™[™š[™ÛÛ[[Û[˜Ù\ÝÜŠœ\™[
N›ÚY_XÛÛœÝT]‹[™]ÈË”LØÛ\ÜÈˆ^[™ÈžØÛÛœÝXÝÜŠ
^Û]X\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNŒOX\™Ý[Y[Ë›[™ÝŒØ\™Ý[Y[ÖÌ—N›ÚYÜÝ\\Š\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNŒJK\Ë˜Ú[™[š]šY[]\Ë™\L\ËšY\˜\˜ÚRÙ^OHˆ‹\Ë˜˜\Ù]\›YKœÛÝ\˜ÙK˜˜\Ù]\›YÙ]ØÝ™YR\ÓØYY

^Ü™]\›ˆJ\Ë˜Ú[™[š]šY[	‰ŒOO]\Ë˜Ú[™[‹›[™Ý
_YÙ]\›

^Ü™]\›˜	Ý\Ë˜˜\Ù]\›KÜ‰Ý\ËšY\˜\˜ÚRÙ^_K‰Ý\Ë›^Y\‹œÛÝ\˜ÙK™^[œÚ[ÛŸXYÙ]Y

^Ü™]\›ˆ\ËšY\˜\˜ÚRÙ^_XY
J^ÝšY\˜\˜ÚRÙ^O]\ËšY\˜\˜ÚRÙ^JÙK™\]\Ë™\
ÌKÝ\\‹˜Y
J_XÜ™X]PÚ[PPŠJ^Ý˜˜›Þ˜ÛÜJ\Ë˜˜›Þ
K\Ë˜˜›Þ™Ù]Ù[\Š˜˜›Þ›X^
K‹˜ÛÜJ˜˜›Þ›X^
KœÝXŠ\Ë˜˜›Þ›Z[ŠKOOOYOÊ˜˜›Þ›Z[‹žŠÏZ‹ž‹˜˜›Þ›X^žŠÏZ‹žŠNŒÏOOYOÊ˜˜›Þ›Z[‹žŠÏZ‹ž‹˜˜›Þ›X^žŠÏZ‹ž‹˜˜›Þ›Z[‹žJÏZ‹žK˜˜›Þ›X^žJÏZ‹žJNŒOOY_
OOYOÊ˜˜›Þ›Z[‹žJÏZ‹žK˜˜›Þ›X^žJÏZ‹žJNOOOYOÊ˜˜›Þ›Z[‹žŠÏZ‹ž‹˜˜›Þ›X^žŠÏZ‹ž‹˜˜›Þ›Z[‹ž
ÏZ‹ž˜˜›Þ›X^ž
ÏZ‹ž
NÏOOYOÊ˜˜›Þ›Z[‹˜Y
ŠK˜˜›Þ›X^˜Y
ŠJNOOYOÊ˜˜›Þ›Z[‹ž
ÏZ‹ž˜˜›Þ›X^ž
ÏZ‹ž
NOOYI‰Š˜˜›Þ›Z[‹žJÏZ‹žK˜˜›Þ›X^žJÏZ‹žK˜˜›Þ›Z[‹ž
ÏZ‹ž˜˜›Þ›X^ž
ÏZ‹ž
J_[ØY

^Ü™]\›ˆ\Ë›ØÝ™YR\ÓØYY\Ë›ØYØÝ™YJ
KÝ\\‹›ØY

_[ØYØÝ™YJ
^ØÛÛœÝX	Ý\Ë˜˜\Ù]\›KÜ‰Ý\ËšY\˜\˜ÚRÙ^_K‰Ý\Ë›^Y\‹œÛÝ\˜ÙK™^[œÚ[Û“ØÝ™Y_XÜ™]\›ˆ\Ë›^Y\‹œÛÝ\˜ÙK™™]Ú\Š\Ë›^Y\‹œÛÝ\˜ÙK›™]ÛÜšÓÜ[ÛœÊK[Š
OžØÛÛœÝO[™]È]UšY]Ê
KV×NÛ]LÙ›ÜŠ\Ë˜Ú[™[š]šY[YK™Ù]Z[

KŠÏLK\Ë›[TÚ[ÏYK™Ù]Z[ÌŠKL
KŠÏM‹œ\Ú
\ÊNÜ‹›[™Ý	‰›˜ž]S[™ÝÊ^ØÛÛœÝO\‹œÚY

NÙ›ÜŠ]ÏLÜÏÜÊÊÊZYŠK˜Ú[™[š]šY[	ŒOÉ‰›ŠÍO]˜ž]S[™Ý
^ØÛÛœÝYK™Ù]Z[
ŠNÛŠÏLNØÛÛœÝÏYK™Ù]Z[ÌŠ‹L
_\Ë›[TÚ[ÎÛŠÏMØÛÛœÝO[™]ÈŠË\Ë›^Y\ŠNÚK˜Y
KÊKKšY›[™Ý	]\Ë›^Y\‹šY\˜\˜ÚTÝ\Ú^™OOLØK˜˜\Ù]\›X	Ý\Ë˜˜\Ù]\›KÉØKšYX˜K˜˜\Ù]\›]\Ë˜˜\Ù]\›‹œ\Ú
J___JJ__XÛÛœÝ]R‹Ý[™]ÈË™XQ‹][™]ÈË“”›ŽÕÝ‹™Ù[ÛY]žK˜›Ý[™[™Ð›ÞV]ŽØÛÛœÝXÛ\ÜÈ^[™È]žØÛÛœÝXÝÜŠJ^ÜÝ\\ŠJK\Ëš\ÔÝ™YS^Y\HLØÛÛœÝ]\Ë˜Y[š]X[^˜][Û”Ý\

NÝ\ËœÛÝ\˜ÙKÚ[”™XYK[Š
OžÝ\ËœØØ[OJ™]ÈË”L
K˜YØØ[\ŠœØØ[JK\ËœÜXÚ[™Ï]œÜXÚ[™Ë\ËšY\˜\˜ÚTÝ\Ú^™O]šY\˜\˜ÚTÝ\Ú^™NØÛÛœÝOP\œ˜^Kš\Ð\œ˜^JœÚ[]šX]\ÊI‰œÚ[]šX]\Ë™š[™

OœÝ\ÕÚ]
““Ô“PSŠJJNÜ™]\›ˆI‰Š\Ë›X]\šX[™Yš[™\ÖÙWOLJK\ËœÝ\ÜÔ›ÙÜ™\ÜÚ]™Q\Ü^OH˜Ú[ˆOO]\ËœÛÝ\˜ÙK™^[œÚ[Û‹\Ëœ›ÛÝ[™]È]Š\ÊK\Ëœ›ÛÝ˜˜›Þ›Z[‹œÙ]
˜›Ý[™[™Ð›Þ›˜›Ý[™[™Ð›Þ›K˜›Ý[™[™Ð›Þ›ŠK\Ëœ›ÛÝ˜˜›Þ›X^œÙ]
˜›Ý[™[™Ð›Þ^˜›Ý[™[™Ð›Þ^K˜›Ý[™[™Ð›Þ^ŠK\Ë›Z[‘[]˜][Û”˜[™ÙO]\Ë›Z[‘[]˜][Û”˜[™ÙOÏÝ˜›Ý[™[™Ð›Þ›‹\Ë›X^[]˜][Û”˜[™ÙO]\Ë›X^[]˜][Û”˜[™ÙOÏÝ˜›Ý[™[™Ð›Þ^‹\Ë™^[ZKž”‹™œ›ÛP›ÞÊ\ËœÛÝ\˜ÙK˜Üœß‘TÑÎÌˆ‹\Ëœ›ÛÝ˜˜›Þ
K\Ëœ›ÛÝ›ØYØÝ™YJ
K[ŠŠ_JJ__NØÛ\ÜÈ	ˆ^[™È]žØÛÛœÝXÝÜŠ
^ÜÝ\\Š\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌNŒ\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNŒ\™Ý[Y[Ë›[™ÝŒØ\™Ý[Y[ÖÌ—N›ÚY
_YÙ]\›

^Ü™]\›˜	Ý\Ë˜˜\Ù]\›KÛØÝ™YK˜š[˜[™]ÛÜšÓÜ[ÛœÊJ^ØÛÛœÝ]Ü™]\›žË‹‹\Ë›^Y\‹œÛÝ\˜ÙK›™]ÛÜšÓÜ[ÛœËXY\œÎžË‹‹\Ë›^Y\‹œÛÝ\˜ÙK›™]ÛÜšÓÜ[ÛœËšXY\œË‹‹\Ë\›œÝ\ÕÚ]
šÎ‹ËÜ˜]Ë™Ú]X\Ù\˜ÛÛ[˜ÛÛHŠOÞßNžÈ˜ÛÛ[]\HŽˆ›][\\Øž]\˜[™Ù\ÈŸK˜[™ÙN˜ž]\ÏIÜŸKIÜŠÙKL[ŸX__X\Þ[˜ÈØY

^Ü™]\›ˆ\Ë›ØÝ™YR\ÓØYY]ØZ]\Ë›ØYØÝ™YJ
K\Ë›^Y\‹œÛÝ\˜ÙK™™]Ú\Š\Ë\›\Ë›™]ÛÜšÓÜ[ÛœÊ\Ë˜ž]SÙ™œÙ]\Ë˜ž]TÚ^™JJK[Š
O\Ë›^Y\‹œÛÝ\˜ÙKœ\œÙ\ŠÚ[ŽžÜÛÝ\˜ÙN\Ë›^Y\‹œÛÝ\˜ÙK˜›Þ\Ë˜˜›Þ[TÚ[Î\Ë›[TÚ[ßKÝ]\Ë›^Y\ŸJJJK[Š
OŠ\Ë›ØYYHL\Ë›ØY[™ÏHLK™Ù[ÛY]žJJJ_X\Þ[˜ÈØYØÝ™YJ
^ÚYŠ]\Ë›ØYY	‰ˆ]\Ë›ØY[™Ê\™]\›ˆ\Ë›ØY[™ÏHLOO]\Ë››ÙU\OÝ\Ë›ØYY\˜\˜ÚJ
N”›ÛZ\ÙKœ™\ÛÛ™J
_X\Þ[˜ÈØYY\˜\˜ÚJ
^ØÛÛœÝX	Ý\Ë˜˜\Ù]\›KÚY\˜\˜ÚK˜š[˜OX]ØZ]\Ë›^Y\‹œÛÝ\˜ÙK™™]Ú\Š\Ë›™]ÛÜšÓÜ[ÛœÊ\ËšY\˜\˜ÚPž]SÙ™œÙ]\ËšY\˜\˜ÚPž]TÚ^™JJNÝ\Ëœ\œÙRY\˜\˜ÚJJ_\\œÙRY\˜\˜ÚJ
^ØÛÛœÝO[™]È]UšY]Ê
K]˜ž]S[™ÝÌŒ‹V×NÛ‹œ\Ú
\ÊNÙ›ÜŠ]LÝŽÝ
ÊÊ^ØÛÛœÝ[‹œÚY

KOLŒŠÏYK™Ù]Z[
JÌ
KÏYK™Ù]Z[
JÌJKOYK™Ù]Z[ÌŠJÌ‹L
KYK™Ù]šYÒ[
JÍ‹L
KÏYK™Ù]šYÒ[
JÌML
NÚYŠOO\‹››ÙU\OÊ‹˜ž]SÙ™œÙ][‹˜ž]TÚ^™OXË‹›[TÚ[ÏXJNŒOO\ÏÊ‹šY\˜\˜ÚPž]SÙ™œÙ][‹šY\˜\˜ÚPž]TÚ^™OXË‹›[TÚ[ÏXJNŠ‹˜ž]SÙ™œÙ][‹˜ž]TÚ^™OXË‹›[TÚ[ÏXJKOO\‹˜ž]TÚ^™I‰Š‹›[TÚ[ÏL
K‹››ÙU\O\ËˆOO\‹››ÙU\JY›ÜŠ]LÝÝ
ÊÊ^ÚYŠJO	›ÊJXÛÛ[YNØÛÛœÝO[™]È	ŠKË\Ë›^Y\ŠNÜ‹˜Y
K
K‹œ\Ú
J____XÛÛœÝI‹Ý^ÑUWÕTWÑÕP“NžÛ˜[YNˆ™ÝX›H‹Ú^™NŽKUWÕTWÑ“ÐUžÛ˜[YNˆ™›Ø]‹Ú^™NKUWÕTWÒS•žÛ˜[YNˆš[‹Ú^™NŒ_KUWÕTWÕRS•žÛ˜[YNˆZ[‹Ú^™NŒ_KUWÕTWÒS•MŽžÛ˜[YNˆš[Mˆ‹Ú^™NŒŸKUWÕTWÕRS•MŽžÛ˜[YNˆZ[Mˆ‹Ú^™NŒŸKUWÕTWÒS•ÌŽžÛ˜[YNˆš[Ìˆ‹Ú^™NKUWÕTWÕRS•ÌŽžÛ˜[YNˆZ[Ìˆ‹Ú^™NKUWÕTWÒS•žÛ˜[YNˆš[‹Ú^™NŽKUWÕTWÕRS•žÛ˜[YNˆZ[‹Ú^™NŽ_NÓØš™XÝšÙ^\ÊÝŠK™›Ü‘XXÚ


JOOžÒÝ–ÙWORÝ–Ý_JJNØÛ\ÜÈžØÛÛœÝXÝÜŠKŠ^Ý\Ë›˜[YO]\Ë\OYK\Ë›[Q[[Y[Ï\‹\Ë˜ž]TÚ^™O]\Ë›[Q[[Y[Ê\Ë\KœÚ^™K\Ë™\ØÜš\[ÛHˆ‹\Ëœ˜[™ÙOVÌKÌLKÌ__V‹”ÔÒUSÓ—ÐÐT•TÒPS[™]ÈŠ”ÔÒUSÓ—ÐÐT•TÒPSˆ‹Ý‹‘UWÕTWÑ“ÐUÊK‹”‘ÐWÔPÒÑQ[™]ÈŠÓÓÔ—ÔPÒÑQ‹Ý‹‘UWÕTWÒS•
K‹ÓÓÔ—ÔPÒÑQV‹”‘ÐWÔPÒÑQ‹”‘Ð—ÔPÒÑQ[™]ÈŠÓÓÔ—ÔPÒÑQ‹Ý‹‘UWÕTWÒS•ÊK‹““Ô“PSÑ“ÐUÏ[™]ÈŠ““Ô“PSÑ“ÐUÈ‹Ý‹‘UWÕTWÑ“ÐUÊK‹’S•S”ÒUO[™]ÈŠ’S•S”ÒUH‹Ý‹‘UWÕTWÕRS•M‹JK‹ÓTÔÒQ’PÐUSÓ[™]ÈŠÓTÔÒQ’PÐUSÓˆ‹Ý‹‘UWÕTWÕRS•JK‹““Ô“PSÔÔT‘SPTQ[™]ÈŠ““Ô“PSÔÔT‘SPTQ‹Ý‹‘UWÕTWÕRS•ŠK‹““Ô“PSÓÐÕM[™]ÈŠ““Ô“PSÓÐÕMˆ‹Ý‹‘UWÕTWÕRS•ŠK‹““Ô“PS[™]ÈŠ““Ô“PS‹Ý‹‘UWÕTWÑ“ÐUÊK‹”‘UT“—Ó•SP‘T[™]ÈŠ”‘UT“—Ó•SP‘Tˆ‹Ý‹‘UWÕTWÕRS•JK‹“•SP‘T—ÓÑ—Ô‘UT“”Ï[™]ÈŠ“•SP‘T—ÓÑ—Ô‘UT“”È‹Ý‹‘UWÕTWÕRS•JK‹”ÓÕTÑWÒQ[™]ÈŠ”ÓÕTÑWÒQ‹Ý‹‘UWÕTWÕRS•M‹JK‹’S‘PÑTÏ[™]ÈŠ’S‘PÑTÈ‹Ý‹‘UWÕTWÕRS•Ì‹JK‹”ÔPÒS‘Ï[™]ÈŠ”ÔPÒS‘È‹Ý‹‘UWÕTWÑ“ÐUJK‹‘Ô×ÕSQO[™]ÈŠ‘Ô×ÕSQH‹Ý‹‘UWÕTWÑÕP“KJNØÛ\ÜÈØÛÛœÝXÝÜŠ
^Ý\Ë˜]šX]\ÏV×K\Ë˜ž]TÚ^™OL\ËœÚ^™OL\Ë™XÝÜœÏV×_XY

^Ý\Ë˜]šX]\Ëœ\Ú

K\Ë˜ž]TÚ^™JÏ]˜ž]TÚ^™K\ËœÚ^™JÊßXY™XÝÜŠ
^Ý\Ë™XÝÜœËœ\Ú

_Z\Ó›Ü›X[Ê
^Ù›ÜŠ]LÝ\Ë˜]šX]\Ë›[™ÝÝ
ÊÊ^ØÛÛœÝO]\Ë˜]šX]\ÖÝK]\Ë˜]šX]\ÖÙWNÚYŠOOV‹““Ô“PSÔÔT‘SPTQOOV‹““Ô“PSÑ“ÐUßOOV‹““Ô“PSOOV‹““Ô“PSÓÐÕMŠ\™]\›ˆL\™]\›ˆL__XÛÛœÝ^[™]ÈË™XQ‹ž[™]ÈË“”›ŽÙ^™Ù[ÛY]žK˜›Ý[™[™Ð›Þ\žØÛÛœÝž^ÙÝX›N’Ý‹‘UWÕTWÑÕP“K›Ø]’Ý‹‘UWÕTWÑ“ÐU[’Ý‹‘UWÕTWÒS•Z[’Ý‹‘UWÕTWÕRS•[MŽ’Ý‹‘UWÕTWÒS•M‹Z[MŽ’Ý‹‘UWÕTWÕRS•M‹[ÌŽ’Ý‹‘UWÕTWÒS•Ì‹Z[ÌŽ’Ý‹‘UWÕTWÕRS•Ì‹[’Ý‹‘UWÕTWÒS•Z[’Ý‹‘UWÕTWÕRS•K^XÛ\ÜÈ^[™È]žØÛÛœÝXÝÜŠJ^ÜÝ\\ŠJK\Ëš\ÔÝ™YS^Y\HLØÛÛœÝ]\Ë˜Y[š]X[^˜][Û”Ý\

NÝ\ËœÛÝ\˜ÙKÚ[”™XYK[Š
OžÝ\ËœØØ[O[™]ÈË”L
KKJK\Ë›Y]Y]O]\ËœÚ[]šX]\ÏY[˜Ý[ÛŠ
^ØÛÛœÝO[™]È^Ü™ØŽˆœ™Ø˜HŸNÙ›ÜŠÛÛœÝˆÙˆ
^ØÛÛœÝÛ˜[YN[Q[[Y[ÎšKZ[ŽœËX^›ßO[‹O[žÛ‹\WK[™]ÈŠ–ÝOÜ–ÝNKJNÛœ˜[™ÙOLOOOZOÖÜÖÌKÖÌWN–ÜË×K™ÜË][YHOO]	‰›œ˜[™ÙVÌOOO[œ˜[™ÙVÌWI‰Šœ˜[™ÙVÌWJÏLJKš[š]X[˜[™ÙO[œ˜[™ÙKK˜Y

_]›ÚYOOYK˜]šX]\Ë™š[™

Oˆ“›Ü›X[OO]›˜[YJJI‰›ÚYOOYK˜]šX]\Ë™š[™

Oˆ“›Ü›X[HOO]›˜[YJJI‰›ÚYOOYK˜]šX]\Ë™š[™

Oˆ“›Ü›X[ˆOO]›˜[YJJI‰™K˜Y™XÝÜŠÛ˜[YNˆ““Ô“PS‹]šX]\Î–È“›Ü›X[‹“›Ü›X[H‹“›Ü›X[ˆ—_JNÜ™]\›ˆ_J˜]šX]\ÊK\ËœÜXÚ[™Ï]œÜXÚ[™ÎØÛÛœÝOP\œ˜^Kš\Ð\œ˜^J\ËœÚ[]šX]\Ë˜]šX]\ÊI‰\ËœÚ[]šX]\Ë˜]šX]\Ë™š[™

O›˜[YKœÝ\ÕÚ]
““Ô“PSŠJJNÙI‰Š\Ë›X]\šX[™Yš[™\ÖÙK›˜[YWOLJNØÛÛœÝ[™]ÈË”L
‹‹˜›Ý[™[™Ð›Þ›Z[ŠKÏ[™]ÈË”L
‹‹˜›Ý[™[™Ð›Þ›X^
KO[™]ÈË“”›Š‹ÊK[™]ÈŠ\ÊNÜ™]\›ˆ˜˜›ÞXK˜›Ý[™[™ÔÜ\™OXK™Ù]›Ý[™[™ÔÜ\™J™]ÈËš^]
K\Ë›Z[‘[]˜][Û”˜[™ÙO]\Ë›Z[‘[]˜][Û”˜[™ÙOÏÝ˜›Ý[™[™Ð›Þ›Z[–Ì—K\Ë›X^[]˜][Û”˜[™ÙO]\Ë›X^[]˜][Û”˜[™ÙOÏÝ˜›Ý[™[™Ð›Þ›X^Ì—K››ÙU\OL‹šY\˜\˜ÚPž]SÙ™œÙ]L‹šY\˜\˜ÚPž]TÚ^™OPšYÒ[
šY\˜\˜ÚK™š\œÝÚ[šÔÚ^™JK˜ž]SÙ™œÙ]L\Ëœ›ÛÝ[\Ë™^[ZKž”‹™œ›ÛP›ÞÊ\ËœÛÝ\˜ÙK˜Üœß‘TÑÎÌˆ‹JK\Ëœ›ÛÝ›ØYØÝ™YJ
K[ŠŠ_JJ__NÙ[˜Ý[ÛˆÞ
K‹‹KÊ^ØÛÛœÝÏ^ÝšY]Î™\]Y\Ý\ŽšK^Y\Žœ‹š[Üš]NšOÌKÊK™\Ý[˜ÙJÌJNŒLY]Y]N›‹™Y˜]ÎœßNÜ™]\›ˆ‹™\Ü]Ú]™[
Ý\Nž“Ó—ÕSWÔ‘TUQTÕQY]Y]N›ŸJKK™^XÝ]JÊ_Y[˜Ý[ÛˆÞ

^Ü™]\›ˆ˜Ú[™[‹™š[\Š
OO™K›^Y\O]›^Y\‰‰™K[RY
J_XÛÛœÝ^[™]ÈËšÛÙ[˜Ý[Ûˆ
K‹Š^Ü™]\›ˆJ\‹šY]Ù\”™\]Y\Ý›Û[Y_\‹šY]Ù\”™\]Y\Ý›Û[YKšY]Ù\”™\]Y\Ý›Û[YPÝ[[™ÊKŠJ_J\‹˜›Ý[™[™Õ›Û[Y_\‹˜›Ý[™[™Õ›Û[YK˜›Ý[™[™Õ›Û[YPÝ[[™ÊKŠJ_Y[˜Ý[ÛˆÞ
J^Û]X\™Ý[Y[Ë›[™ÝŒ‰‰›ÚYOOX\™Ý[Y[ÖÌ—OØ\™Ý[Y[ÖÌ—NŒØÛÛœÝYK˜Y]]™T™Yš[™[Y[ŒÙ›ÜŠ]OLÚOK˜Ú[™[‹›[™ÝÚJÊÊYK˜Ú[™[–ÚWK˜ÛÛ[ØÞ
K˜Ú[™[–ÚWKŠÌJN›‰‰—ØKœ™[[Ý™PÚ[™[[™ÛX[\™XÝ\œÚ]™[JK˜Ú[™[–ÚWK›^Y\‹K˜Ú[™[–ÚWJNÚYŠŠYK™\ÜÜÙI‰™K™\ÜÜÙJ
K[]HK˜ÛÛ[[\Ù][\ÖÙK[RYK›ØYYHLKKœ™[[Ý™J‹‹™K˜Ú[™[ŠKO\‰‰™Kœ\™[	‰™Kœ\™[œ™[[Ý™JJNÙ[Ù^ØÛÛœÝ[Þ
JNÙKœ™[[Ý™J‹‹
__Y[˜Ý[Ûˆ

^ÚYŠ]\Ëš\ÚX›J\™]\›–×NÝ\ËœØØ[O]˜Ø[Y\˜K—Ü™TÔÑNØÛÛœÝOQ]K››ÝÊ
NÚYŠ\Ë—ØÛX[˜X›U[\Ë›[™Ý	‰™K]\Ë—ØÛX[˜X›U[\ÖÌK˜ÛX[˜X›TÚ[˜ÙO\Ë˜ÛX[\[^J^Ý\Ëœ›ÛÝ˜ÛX[˜X›TÚ[˜ÙO]›ÚYÛ]LÙ›ÜŠÝ\Ë—ØÛX[˜X›U[\Ë›[™ÝÝ
ÊÊ^ØÛÛœÝ]\Ë—ØÛX[˜X›U[\ÖÝNÚYŠJK\‹˜ÛX[˜X›TÚ[˜ÙO\Ë˜ÛX[\[^JJXœ™XZÎØÞ
\ËŠ_]\Ë—ØÛX[˜X›U[\ËœÜXÙJ
_\™]\›–Ý\Ëœ›ÛÝ_XÛÛœÝ^[™]ÈË“”›‹[™]ÈËš^]Ù[˜Ý[Ûˆ
J^Ý˜ÛÛ[	‰Š˜ÛÛ[š\ÚX›OYJ_Y[˜Ý[Ûˆž
J^ÙK˜ÛX[˜X›TÚ[˜Ù_
K˜ÛX[˜X›TÚ[˜ÙOQ]K››ÝÊ
K—ØÛX[˜X›U[\Ëœ\Ú
JJ_Y[˜Ý[Ûˆ^

^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌN›OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWN™ÞÜ™]\›ˆ[˜Ý[ÛŠ‹‹J^ÚYŠKœ\™[œ[™[™ÔÝX™]š\Ú[Û‰‰ˆZKœ\™[˜Y]]™T™Yš[™[Y[
\™]\›ˆ›ÚY
Kš\ÚX›OHLJNØÛÛœÝÏH]]
‹‹˜Ø[Y\˜KKK›X]š^ÛÜ›
NÚYŠKš\ÚX›O\ËÊ^Û]ÎÚYŠK˜ÛX[˜X›TÚ[˜ÙI‰Š‹—ØÛX[˜X›U[\ËœÜXÙJ‹—ØÛX[˜X›U[\Ëš[™^ÙŠJKJKK˜ÛX[˜X›TÚ[˜ÙO]›ÚY
KKœ[™[™ÔÝX™]š\Ú[ÛŸJ‹‹JJJ[˜Ý[ÛŠK‹Š^Ü‹˜Y]]™T™Yš[™[Y[Ù[˜Ý[ÛŠK‹Š^Ù›ÜŠÛÛœÝHÙˆK[\Ù][\ÖÜ‹[RYK˜Ú[™[Š^ÚYŠKœ›ÛZ\Ù_K›ØYY
XÛÛ[YNÛ]Ï\‹›X]š^ÛÜ›ÚK˜[œÙ›Ü›I‰ŠÏX^›][\SX]šXÙ\Ê‹›X]š^ÛÜ›K˜[œÙ›Ü›JJK
[Ÿ[ŠK˜Ø[Y\˜KKÊJI‰ŠKœ›ÛZ\ÙO\Þ
šY]ËœØÚY[\‹KK‹L
K[Š
OžÜ‹˜Y
ŠK‹\]SX]š^ÛÜ›

KK›Û•[PÛÛ[ØYY
ŠKšY]Ë››ÝYžPÚ[™ÙJJKK›ØYYHL[]HKœ›ÛZ\Ù_JJJ__JK‹ŠN™[˜Ý[ÛŠKŠ^ÚYŠ\‹œ[™[™ÔÝX™]š\Ú[Û‰‰ŒO[Þ
ŠK›[™Ý
^ØÛÛœÝYK[\Ù][\ÖÜ‹[RYK˜Ú[™[ŽÚYŠ›ÚYOO[ŸOO[‹›[™Ý
\™]\›ŽÜ‹œ[™[™ÔÝX™]š\Ú[ÛHLØÛÛœÝOV×NÙ›ÜŠ]ÏLÜÏ‹›[™ÝÜÊÊÊZKœ\Ú
Þ
šY]ËœØÚY[\‹K–Ü×K‹LJK[Š
OOžÛ–Ü×K›ØYYHL‹˜Y
JKK\]SX]š^ÛÜ›

K‹˜Y]]™T™Yš[™[Y[	‰šY]Ë››ÝYžPÚ[™ÙJŠKK[\Ù][\ÖÚK[RYK›ØYYHLK›Û•[PÛÛ[ØYY
J_JJJNÔ›ÛZ\ÙK˜[
JK[Š


OOžÜ‹œ[™[™ÔÝX™]š\Ú[ÛHLKšY]Ë››ÝYžPÚ[™ÙJŠ_JJ__JKŠ_JJ‹‹K
K
KKœ[™[™ÔÝX™]š\Ú[ÛŸK˜Y]]™T™Yš[™[Y[
KÏ[Þ
JNÙ[Ù^Ü
KL
NÙ›ÜŠÛÛœÝÙˆÞ
JJ]š\ÚX›OHLKž
‹
_\™]\›ˆßYž
‹J__Y[˜Ý[ÛˆÞ
KŠ^ÚYŠ›ÚYOOYK[\Ù][\ÖÜ‹[RYK˜Ú[™[Š\™]\›ˆLNÚYŠK[\Ù][\ÖÜ‹[RYKš\Õ[\Ù]
\™]\›ˆLØÛÛœÝY[˜Ý[ÛŠJ^ÚYŠK™\Ý[˜ÙOLK˜›Ý[™[™Õ›Û[YKš[š]X[›Û[YU\OOOZ›˜›Þ
]^˜ÛÜJK˜›Ý[™[™Õ›Û[YK›Û[YJK^˜\SX]š^
K›X]š^ÛÜ›
KK™\Ý[˜ÙO]^™\Ý[˜ÙUÔÚ[
˜Ø[Y\˜LÑœÜÚ][ÛŠNÙ[Ù^ÚYŠK˜›Ý[™[™Õ›Û[YKš[š]X[›Û[YU\HOOZ›œÜ\™I‰™K˜›Ý[™[™Õ›Û[YKš[š]X[›Û[YU\HOOZ›œ™YÚ[ÛŠ\™]\›ˆKÌÙ˜ÛÜJK˜›Ý[™[™Õ›Û[YK›Û[YJK˜\SX]š^
K›X]š^ÛÜ›
KK™\Ý[˜ÙOSX]›X^
™\Ý[˜ÙUÔÚ[
˜Ø[Y\˜LÑœÜÚ][ÛŠJ_\™]\›ˆOOYK™\Ý[˜ÙOÌKÌ—Ü™TÔÑJŠK™Ù[ÛY]šXÑ\œ›Ü‹ÙK™\Ý[˜ÙJ_J˜Ø[Y\˜KŠNÜ™]\›ˆ™KœÜÙU™\ÚÛXÛÛœÝ^[™]ÈKÌK^[™]ÈË”Lž[™]ÈË”L[™]ÈK‘I
‘TÑÎÌˆŠKÞ[™]ÈË”LÞ[™]ÈK‘I
‘TÑÎÌˆŠKž[™]ÈË”L^[™]ÈË”LÞ[™]ÈË”L^XÛ\ÜÞØÛÛœÝXÝÜŠKŠ^ÚYŠ\Ë\OU›˜›Ý[™[™Õ›Û[YKœ™YÚ[ÛŠ]\Ëš[š]X[›Û[YU\OZ›œ™YÚ[Û‹\Ë›Û[YOY[˜Ý[ÛŠJ^ØÛÛœÝ]Ì—K]ÌKO]ÌWKÏ]Ì×KO]ÍK]ÍWKÏ\Ë˜ÚŽKœ˜YÑYÊŠK\Ë˜ÚŽKœ˜YÑYÊŠKO\Ë˜ÚŽKœ˜YÑYÊJK\Ë˜ÚŽKœ˜YÑYÊÊNÝÞœÙ]œ›ÛU˜[Y\ÊJK^˜Ø\ÙÜ˜\XÕÐØ\\ÚX[ŠÞž
KœÙ]œ›ÛU˜[Y\ÊËK
K^˜Ø\ÙÜ˜\XÕÐØ\\ÚX[ŠÞ
NØÛÛœÝ[™]ÈË”LÜ›\œ™XÝÜœÊžÞJNØÛÛœÝQ^œÝX•™XÝÜœÊžÞ
K›[™Ý

KÌ‹O[™]ÈËš^]
ŠNÜ™]\›ˆK˜\SX]š^
JK_Jœ™YÚ[Û‹JNÙ[ÙHYŠ˜›Þ
]\Ëš[š]X[›Û[YU\OZ›˜›Þ\Ë›Û[YOY[˜Ý[ÛŠ
^ÝžœÙ]
ÌKÌWKÌ—JK^œÙ]
Ì×KÍ×KÌLWJK›][\TØØ[\ŠŠNØÛÛœÝO[™]ÈË“”›ŽÜ™]\›ˆKœÙ]œ›ÛPÙ[\[™Ú^™Jž^
K_J˜›Þ
NÙ[Ù^ÚYŠ]œÜ\™J]›ÝÈ™]È\œ›ÜŠ[šÛ›ÝÛˆ›Ý[™[™È›Û[YH\Nˆ	ÝKˆÑ[\È›Ù\È]\Ý]™HH›Ý[™[™È›Û[YHÙˆ\Wˆ™YÚ[Û‹›ÞÜˆÜ\™K˜
NÝ\Ëš[š]X[›Û[YU\OZ›œÜ\™K\Ë›Û[YOY[˜Ý[ÛŠ
^ØÛÛœÝO[™]ÈË”LÜ™]\›ˆKœÙ]
ÌKÌWKÌ—JK™]ÈËš^]
KÌ×J_JœÜ\™J_]™^[œÚ[ÛœÉ‰Š\Ë™^[œÚ[ÛœÏ\‹œ\œÙQ^[œÚ[ÛœÊ™^[œÚ[ÛœË\Ë\JJ_X›Ý[™[™Õ›Û[YPÝ[[™ÊJ^ÚYŠ\Ëš[š]X[›Û[YU\OOOZ›˜›Þ
\™]\›ˆ]š\Ð›ÞÕš\ÚX›J\Ë›Û[YKJNÚYŠ\Ëš[š]X[›Û[YU\OOOZ›œÜ\™_\Ëš[š]X[›Û[YU\OOOZ›œ™YÚ[ÛŠ\™]\›ˆ]š\ÔÜ\™Uš\ÚX›J\Ë›Û[YKJNÝ›ÝÈ™]È\œ›ÜŠ•[šÛ›ÝÛˆ›Ý[™[™È›Û[YH\KˆŠ_]šY]Ù\”™\]Y\Ý›Û[YPÝ[[™ÊJ^Ü™]\›ˆ\Ëš[š]X[›Û[YU\OOOZ›œ™YÚ[ÛÊÛÛœÛÛKØ\›Š”™YÚ[ÛˆšY]Ù\”™\]Y\Ý›Û[YH›ÝY]Ý\ÜYŠKL
N\Ëš[š]X[›Û[YU\OOOZ›˜›ÞÊÛÛœÛÛKØ\›Š›Ý[™[™È›ÞšY]Ù\”™\]Y\Ý›Û[YH›ÝY]Ý\ÜYŠKL
N\Ëš[š]X[›Û[YU\OOOZ›œÜ\™I‰ŠÞ˜ÛÜJ\Ë›Û[YK˜Ù[\ŠKÞ˜\SX]š^
JKJ˜Ø[Y\˜LÑœÜÚ][Û‹™\Ý[˜ÙUÊÞ
O]\Ë›Û[YKœ˜Y]\ÊJ__KÞ[™]ÈËšÛXÛ\ÜÞØÛÛœÝXÝÜŠKŠ^Ý\Ë\OU›[\Ù]\Ë˜\ÜÙ]]˜\ÜÙ]\Ëœ›Ü\Y\Ï]œ›Ü\Y\Ë\Ë™Ù[ÛY]šXÑ\œ›Ü]™Ù[ÛY]šXÑ\œ›Ü‹\Ë™^[œÚ[ÛœÕ\ÙY]™^[œÚ[ÛœÕ\ÙY\Ë™^[œÚ[ÛœÔ™\]Z\™Y]™^[œÚ[ÛœÔ™\]Z\™Y\Ë[\ÏV×K\Ëœ\œÙU[\Êœ›ÛÝK›ÚYŠK™^[œÚ[ÛœÉ‰Š\Ë™^[œÚ[ÛœÏ\‹œ\œÙQ^[œÚ[ÛœÊ™^[œÚ[ÛœË\Ë\JJ_\\œÙU[\ÊK‹Š^ÚYŠ˜[œÙ›Ü›O]˜[œÙ›Ü›OÊ™]ÈËšÛ
K™œ›ÛP\œ˜^J˜[œÙ›Ü›JN›ÚY—ÝÛÜ›œ›ÛSØØ[˜[œÙ›Ü›O]˜[œÙ›Ü›K‰‰œ‹—ÝÛÜ›œ›ÛSØØ[˜[œÙ›Ü›I‰Š˜[œÙ›Ü›OÝ—ÝÛÜ›œ›ÛSØØ[˜[œÙ›Ü›OJ™]ÈËšÛ
K›][\SX]šXÙ\Ê‹—ÝÛÜ›œ›ÛSØØ[˜[œÙ›Ü›K˜[œÙ›Ü›JN—ÝÛÜ›œ›ÛSØØ[˜[œÙ›Ü›O\‹—ÝÛÜ›œ›ÛSØØ[˜[œÙ›Ü›JK
šY]Ù\”™\]Y\Ý›Û[YI‰šY]Ù\”™\]Y\Ý›Û[YKœ™YÚ[ÛŸ˜›Ý[™[™Õ›Û[YI‰˜›Ý[™[™Õ›Û[YKœ™YÚ[ÛŠI‰Š—ÝÛÜ›œ›ÛSØØ[˜[œÙ›Ü›OÐÞ˜ÛÜJ—ÝÛÜ›œ›ÛSØØ[˜[œÙ›Ü›JKš[™\

NÞšY[]J
JKšY]Ù\”™\]Y\Ý›Û[YO]šY]Ù\”™\]Y\Ý›Û[YOÛ™]È^
šY]Ù\”™\]Y\Ý›Û[YKÞŠN›[˜›Ý[™[™Õ›Û[YO]˜›Ý[™[™Õ›Û[YOÛ™]È^
˜›Ý[™[™Õ›Û[YKÞŠN›[\Ë[\Ëœ\Ú

K[RY]\Ë[\Ë›[™ÝLK˜˜\ÙUT“YK˜Ú[™[ŠY›ÜŠÛÛœÝˆÙˆ˜Ú[™[Š]\Ëœ\œÙU[\Ê‹KŠ_Y^[™[\Ù]
K‹Š^Ý\Ëœ\œÙU[\Êœ›ÛÝ‹\Ë[\ÖÙWKŠK\Ë[\ÖÙWK˜Ú[™[VÝœ›ÛÝK\Ë[\ÖÙWKš\Õ[\Ù]HL_K^XÛ\ÜÞÜ™YÚ\Ý\‘^[œÚ[ÛŠJ^Ý\ÖÝOY_YÙ]^[œÚ[ÛŠJ^ÚYŠ\ÖÝI‰\ÖÝVÙWJ\™]\›ˆ\ÖÝVÙWNØÛÛœÛÛK™\œ›ÜŠ›È^[œÚ[ÛˆX[˜YÙ\ˆ™YÚ\Ý\™Y›Üˆ^[œÚ[Ûˆ	ÝH[™›ÜˆÛ\ÜÈ	Ù_X
_Z\Ñ^[œÚ[Û”™YÚ\Ý\™Y

^Ü™]\›ˆ\ÖÝ_\\œÙQ^[œÚ[ÛœÊJ^ØÛÛœÝ^ßNÙ›ÜŠÛÛœÝˆ[ˆ
SØš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
ŠI‰Š–Û—O[™]Ê\Ë™Ù]^[œÚ[ÛŠ‹JJJÛ—JJNÜ™]\›ˆŸ_NÙ[˜Ý[Ûˆž

^Ü™]\›ˆ˜˜]ÚX›OÝ˜˜]ÚX›Nœ\™[Ôž
œ\™[
N›[XÛÛœÝXÛ\ÜÞÈÞØÛÛœÝXÝÜŠK‹‹J^Ý\Ë›Øš™XÝÙZK\Ë˜˜]ÚYYK\Ë™Ü›Ý\Ï\‹\Ë\Ù\‘]O[‹\Ë[RY]\ËˆÞ[[XÛÛ\]UÛÜ››ÞÊ
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌN›™]ÈË“”›ŽÜ™]\›ˆ›X^žKLKÌ›X^žOKLKÌ›X^žKLKÌ›Z[‹žLKÌ›Z[‹žOLKÌ›Z[‹žLKÌ\Ë™Ü›Ý\Ë™›Ü‘XXÚ

OOžØÛÛœÝYKœÝ\
\Ë›Øš™XÝÙ™Ù[ÛY]žK˜]šX]\ËœÜÚ][Û‹š][TÚ^™KJKœÝ\
ÙK˜ÛÝ[
J\Ë›Øš™XÝÙ™Ù[ÛY]žK˜]šX]\ËœÜÚ][Û‹š][TÚ^™NÙ›ÜŠ]O\ŽÙOŽÙJÊÊ^ØÛÛœÝ]\Ë›Øš™XÝÙ™Ù[ÛY]žK˜]šX]\ËœÜÚ][Û‹™Ù]
JK]\Ë›Øš™XÝÙ™Ù[ÛY]žK˜]šX]\ËœÜÚ][Û‹™Ù]JJKO]\Ë›Øš™XÝÙ™Ù[ÛY]žK˜]šX]\ËœÜÚ][Û‹™Ù]ŠJNÝ›X^žSX]›X^
‹›X^ž
K›X^žOSX]›X^
‹›X^žJK›X^žSX]›X^
K›X^žŠK›Z[‹žSX]›Z[Š‹›Z[‹ž
K›Z[‹žOSX]›Z[Š‹›Z[‹žJK›Z[‹žSX]›Z[ŠK›Z[‹žŠ__JJK˜\SX]š^
\Ë›Øš™XÝÙ›X]š^ÛÜ›
KYÙ][™›Ê
^ÚYŠ\ËˆÞ
\™]\›ˆ\ËˆÞØÛÛœÝTž
\Ë›Øš™XÝÙ
NÜ™]\›ˆÊ\ËˆÞ]™Ù][™›ÐžRY
\Ë˜˜]ÚY
K\ËˆÞ
NŠÛÛœÛÛKØ\›ŠÐÌÑ™X]\™WNˆ›È˜]ÚX›H›Ý[™›Üˆ[H	Ý\Ë[RYK˜
K[
__Kž^ÓÓ—ÕSWÐÓÓ•S•ÓÐQQˆ›Û‹][KXÛÛ[[ØYY‹Ó—ÕSWÔ‘TUQTÕQˆ›Û‹][K\™\]Y\ÝYŸK[^

NÙ[˜Ý[Ûˆ

^Û]O]YK[RYÙ›ÜŠÚ\Ó˜SŠŠI‰™Kœ\™[ÊYOYKœ\™[YK[RYÜ™]\›ˆŸY[˜Ý[ÛˆÞ

^Ü™]\›ˆ™Ù[ÛY]žI‰™Ù[ÛY]žK˜]šX]\Ë—Ø˜]ÚYXÛÛœÝžXÛ\ÜÈ^[™ÈØ^È×ÝØÛÛœÝXÝÜŠKŠ^ØÛÛœÛÛKØ\›ŠÌÑ[\Ó^Y\ˆ\È\™XØ]Y[™Ú[™H™[[Ý™Y[ˆUÝÛœÈËŒ™\œÚ[Û‹ˆ\ÙHÑÐÌÑ[\Ó^Y\ˆ[œÝXYˆŠKÝ\\Š™]ÈË–R›ÜÛÝ\˜ÙN™KœÛÝ\˜Ù_JK\Ëš\ÐÌÑ[\Ó^Y\HL\ËœÜÙU™\ÚÛYKœÜÙU™\ÚÛM‹\Ë˜ÛX[\[^OYK˜ÛX[\[^_YLË\Ëœ›ÝØÛÛHŒÙ][\È‹\Ë›˜[YOYK›˜[YK\Ëœ™YÚ\Ý\™Y^[œÚ[ÛœÏYKœ™YÚ\Ý\™Y^[œÚ[Ûœß™]È^\ËœÓ[ÙOY\ÓÓÔ‹\ËœÔÚ\O\œÒTÓK\Ë˜Û\ÜÚYšXØ][ÛYK˜Û\ÜÚYšXØ][Û‹\ËœÔÚ^™S[ÙO[œ•SQK\ËœÓZ[][X]YÚ^™OYKœÓZ[][X]YÚ^™_K\ËœÓX^][X]YÚ^™OYKœÓX^][X]YÚ^™_ËKœÓ[ÙI‰ŠØš™XÝ˜[Y\Ê\
Kš[˜ÛY\ÊKœÓ[ÙJOÝ\ËœÓ[ÙOYKœÓ[ÙN˜ÛÛœÛÛKØ\›Š•HÚ[ÈÛÝY[ÙHÙ\Û‰Ý^\Ýˆ\ÙH	ÐÓÓÔ‰ÈÜˆ	ÐÓTÔÒQ’PÐUSÓ‰È[œÝXYˆŠJKKœÔÚ\I‰ŠØš™XÝ˜[Y\Êœ
Kš[˜ÛY\ÊKœÔÚ\JOÝ\ËœÔÚ\OYKœÔÚ\N˜ÛÛœÛÛKØ\›Š•HÚ[ÈÛÝYÚ[Ú\HÙ\Û‰Ý^\Ýˆ\ÙH	ÐÒTÓIÈÜˆ	ÔÔUPT‘IÈ[œÝXYˆŠJKKœÔÚ^™S[ÙI‰ŠØš™XÝ˜[Y\Êœ
Kš[˜ÛY\ÊKœÔÚ^™S[ÙJOÝ\ËœÔÚ^™S[ÙOYKœÔÚ^™S[ÙN˜ÛÛœÛÛKØ\›Š•HÚ[ÈÛÝYÚ^™H[ÙHÙ\Û‰Ý^\Ýˆ\ÙH	ÕSQIÈÜˆ	ÐUS•PUQ	È[œÝXYˆŠJK\Ë—ÜÝ[OYKœÝ[_[\Ëˆ×Ý[™]ÈX\\Ë[\ÐÌÑ[Q™X]\™\Ï[™]ÈX\K›Û•[PÛÛ[ØYY	‰ŠÛÛœÛÛKØ\›Š‘T‘PÐUQÛ•[PÛÛ[ØYYÚÝ[›Ý™H\ÜÙY]HÛÛXÝ[Û‹\ÙHÌÑST×ÓVQT—ÑU‘S•Ë“Ó—ÕSWÐÓÓ•S•ÓÐQQ]™[[œÝXYŠK\Ë˜Y]™[\Ý[™\Šž“Ó—ÕSWÐÓÓ•S•ÓÐQQK›Û•[PÛÛ[ØYY
JKK›Ý™\œšYSX]\šX[É‰ŠÛÛœÛÛKØ\›Š›Ý™\œšYSX]\šX[È\È\™XØ]Y\ÙHÝ[HTH[œÝXYŠK\Ë›Ý™\œšYSX]\šX[ÏYK›Ý™\œšYSX]\šX[ÊK\Ë—ØÛX[˜X›U[\ÏV×NØÛÛœÝ]\Ë˜Y[š]X[^˜][Û”Ý\

NÝ\ËœÛÝ\˜ÙKÚ[”™XYK[Š
OžÚYŠ\Ë[\Ù][™]È
\ËœÛÝ\˜ÙK˜˜\ÙU\›\Ëœ™YÚ\Ý\™Y^[œÚ[ÛœÊK\Ë[\Ù]™^[œÚ[ÛœÕ\ÙY
Y›ÜŠÛÛœÝÙˆ\Ë[\Ù]™^[œÚ[ÛœÕ\ÙY
]\Ëœ™YÚ\Ý\™Y^[œÚ[ÛœËš\Ñ^[œÚ[Û”™YÚ\Ý\™Y

_
\Ë[\Ù]™^[œÚ[ÛœÔ™\]Z\™Y	‰\Ë[\Ù]™^[œÚ[ÛœÔ™\]Z\™Yš[˜ÛY\Ê
OØÛÛœÛÛK™\œ›ÜŠÑ[\È[\Ù]™\]Z\™Y^[œÚ[Ûˆ‰ÝHˆ]\Ý™H™YÚ\Ý\™YÈHÑ[\È^Y\ˆÙˆUÝÛœÈÈ™H\œÙY[™\ÙY˜
N˜ÛÛœÛÛKØ\›ŠÑ[\È[\Ù]\ÙY^[œÚ[Ûˆ‰ÝHˆ]\Ý™H™YÚ\Ý\™YÈHÑ[\È^Y\ˆÙˆUÝÛœÈÈ™H\œÙY[™\ÙY˜
JNÊ[˜Ý[ÛŠK‹Š^Ü™]\›ˆÞ
K‹‹›ÚYL
K[Š
OžÜ‹›Øš™XÝÙ˜Y

K\]SX]š^ÛÜ›

K‹[\Ù][\ÖÝ[RYK›ØYYHL‹œ›ÛÝ]‹›Û•[PÛÛ[ØYY

_JJ_JJ‹‹›XZ[“ÛÜœØÚY[\‹\Ëœ›ÛÝ
K[ŠŠ_JJ_\™U\]J
^Ü™]\›ˆ˜š[™
\ÊJ
_]\]JKŠ^Ü™]\›ˆ
KŠ_YÙ]Øš™XÝÕ\]Q›Ü]XÚY^Y\œÊ
^ÚYŠ˜ÛÛ[
^ØÛÛœÝOV×NÝ˜ÛÛ[˜]™\œÙJ
OžÜ‹š\ÓØš™XÝÑ	‰œ‹›X]\šX[	‰œ‹›^Y\O]›^Y\‰‰™Kœ\Ú
Š_JJNØÛÛœÝ]œ\™[Ü™]\›ˆ‰‰œ‹˜ÛÛ[ÞÙ[[Y[Î™K\™[œ‹˜ÛÛ[NžÙ[[Y[Î™___YÙ]ÌÑ[Q™X]\™Qœ›ÛR[\œÙXÝÐ\œ˜^J
^Û]O[[Ù›ÜŠ]LÜ›[™ÝÜŠÊÊ^ØÛÛœÝ]Ü—NÚYŠ‹›Øš™XÝ™Ù[ÛY]žI‰›‹›Øš™XÝ™Ù[ÛY]žK˜]šX]\Ë—Ø˜]ÚY	‰›‹™˜XÙI‰›‹›^Y\O]\Ê^ÙO[ŽØœ™XZß_ZYŠYJ\™]\›ˆ[ØÛÛœÝQ
K›Øš™XÝ
KYK™˜XÙK˜KOYK›Øš™XÝ™Ù[ÛY]žK˜]šX]\Ë—Ø˜]ÚY™Ù]
ŠNÜ™]\›ˆ\Ë[\ÐÌÑ[Q™X]\™\Ë™Ù]
ŠK™Ù]
J_[Û•[PÛÛ[ØYY

^Ý\Ëš[š]ÌÑ[Q™X]\™\Ê
K\Ë™\Ü]Ú]™[
Ý\Nž“Ó—ÕSWÐÓÓ•S•ÓÐQQ[PÛÛ[JK\Ë\]TÝ[JÝ[RYJ_Z[š]ÌÑ[Q™X]\™\Ê
^Ý\Ë[\ÐÌÑ[Q™X]\™\ËœÙ]
[RY™]ÈX\
K˜]™\œÙJ
OOžÚYŠÞ
JJ^ØÛÛœÝYK™Ù[ÛY]žK™Ù]]šX]J—Ø˜]ÚYŠNÛ]\‹™Ù]

KOLÏLØÛÛœÝÏJ
OOžÚYŠ\Ë[\ÐÌÑ[Q™X]\™\Ë™Ù]
[RY
Kš\ÊŠJ]\Ë[\ÐÌÑ[Q™X]\™\Ë™Ù]
[RY
K™Ù]
ŠK™Ü›Ý\Ëœ\Ú
ÜÝ\šKÛÝ[œßJNÙ[Ù^ØÛÛœÝ[™]È
[RY‹ÞÜÝ\šKÛÝ[œßWKßKJNÝ\Ë[\ÐÌÑ[Q™X]\™\Ë™Ù]
[RY
KœÙ]
‹Š__KOYK™Ù[ÛY]žK™Ù]]šX]JœÜÚ][ÛˆŠKXK˜ÛÝ[
˜Kš][TÚ^™NÙ›ÜŠ]LÝÝ
ÏXKš][TÚ^™J^ØÛÛœÝO]ØKš][TÚ^™KÏ\‹™Ù]
JNÛˆOOXÉ‰ŠÊ
KXËOYKÏL
KÊÊË
ØKš][TÚ^™O[	‰›Ê
___JJ_]\]TÝ[J
^Û]X\™Ý[Y[Ë›[™ÝŒ	‰›ÚYOOX\™Ý[Y[ÖÌOØ\™Ý[Y[ÖÌN›[ÚYŠ]\Ë—ÜÝ[J\™]\›ˆLNÚYŠ]\Ë›Øš™XÝÙ
\™]\›ˆLNØÛÛœÝOV×K[™]ÈX\Ý\Ë›Øš™XÝÙ˜]™\œÙJ
OOžÚYŠÞ
JJ^ØÛÛœÝQ
JNÚYŠ	‰ˆ]š[˜ÛY\ÊŠJ\™]\›ŽÜ‹š\ÊŠ_‹œÙ]
‹×JK‹™Ù]
ŠKœ\Ú
J__JJNÙ›ÜŠÛÛœÝÝ—[ÙˆŠ^ØÛÛœÝ]\Ë[\ÐÌÑ[Q™X]\™\Ë™Ù]

NÛ‹™›Ü‘XXÚ

OžÝ™Ù[ÛY]žK˜ÛX\‘Ü›Ý\Ê
K›X]\šX[V×NÙ›ÜŠÛÛœÝËW[ÙˆŠ^ÚYŠK›Øš™XÝÙO]
XÛÛ[YNÝ\Ë—ÜÝ[K˜ÛÛ^œÙ]Ù[ÛY]žJÜ›Ü\Y\Î™_JNØÛÛœÝ[™]ÈË”LYŠ\Ë—ÜÝ[K™š[˜ÛÛÜŠK]\Ë—ÜÝ[K™š[›ÜXÚ]KO\‹™Ù]^Ýš[™Ê
JÛŽÛ]Ï[[Ý\Ëˆ×Ýš\ÊJOÛÏ]\Ëˆ×Ý™Ù]
JNŠÏ[™]ÈË—ÍŠØÛÛÜŽœ‹ÜXÚ]N›‹˜[œÜ\™[›K[U\Ý‹Œ_JK\Ëˆ×ÝœÙ]
KÊJNÛ]OKLNÙ›ÜŠ]OLÙO›X]\šX[›[™ÝÙJÊÊ^ØÛÛœÝ]›X]\šX[ÙWNÚYŠË]ZYOO\‹]ZY
^ØOYNØœ™XZß_XO	‰Š›X]\šX[œ\Ú
ÊKO]›X]\šX[›[™ÝLJKK™Ü›Ý\Ë™›Ü‘XXÚ

OOžÝ™Ù[ÛY]žK˜YÜ›Ý\
KœÝ\K˜ÛÝ[J_JJ_UÛ

K›X]\šX[[œÝ[˜Ù[Ùˆ\œ˜^OÝ›X]\šX[™›Ü‘XXÚ

OžÙKš[˜ÛY\Ê
_Kœ\Ú

_JJN™Kš[˜ÛY\Ê›X]\šX[
_Kœ\Ú
›X]\šX[
_JJ_Y›ÜŠÛÛœÝÝ—[Ùˆ\Ëˆ×Ý
YKš[˜ÛY\ÊŠ_
‹™\ÜÜÙJ
K\Ëˆ×Ý™[]J
JNÜ™]\›ˆLYÙ]X]\šX[ÛÝ[

^Ü™]\›ˆ\Ëˆ×ÝœÚ^™_\Ù]Ý[J
^Ý\Ë—ÜÝ[O][œÝ[˜Ù[Ùˆ™ÝÛ™]È™Š
N›[\Ë\]TÝ[J
_YÙ]Ý[J
^Ü™]\›ˆ\Ë—ÜÝ[__Kž[™]ÈËšÛ
KKKK‹ŠK^[™]ÈË‘ÖQŠ™]ÈZ[\œ˜^JÌMKMKMKMWJKKKË‘ÕÙË“ÕSJNÕ^›™YYÕ\]OHLØÛÛœÝÞ[™]ÈË™Ôž[™]ÈË’ÚÎØÛ\ÜÈÞ^[™ÈË’ÚÞØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNÙKœÚYOYKœÚYOÏÜË‰P‹K˜[œÜ\™[YK˜[œÜ\™[ÏÈLK›ÜXÚ]OYK›ÜXÚ]OÏÌNØÛÛœÝ^ßNÙ›ÜŠÛÛœÝ[ˆJSØš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
K
I‰›ÚYOO^žÝI‰Š–ÝOYVÝJNÜÝ\\ŠŠK\Ë™Yš[™\Ë“Ô’QS•QÒSPQÑT×ÐÓÕS•YK“ÜšY[Y[XYÙ\ÐÛÝ[ÏÝ›[™ÝØÛÛœÝQ‹™Ù]X^^\™U[š]ÐÛÝ[

NÝ\Ë™Yš[™\Ë“Ô’QS•QÒSPQÑT×ÐÓÕS•›‰‰ŠÛÛœÛÛKØ\›ŠÜšY[Y[XYÙSX]\šX[ˆØ[‰Ý›Ú™XÝ	Ý›[™ÝH^\™\Ë™XØ]\ÙH]	ÜÈ[Ü™H[ˆÔHØ\Xš[]Y\ÈX^[][H^\™H[š]È
	ÛŸJX
K\Ë™Yš[™\Ë“Ô’QS•QÒSPQÑT×ÐÓÕS•[‹LKÛÛœÛÛKØ\›ŠÜšY[Y[XYÙSX]\šX[ˆÙIÛ\ÙHÛ›HHš\œÝ	Ý\Ë™Yš[™\Ë“Ô’QS•QÒSPQÑT×ÐÓÕS•HØ[Y\˜\Ë˜
JKK\ÙP˜\ÙSX]\šX[	‰Š\Ë™Yš[™\Ë•TÑWÐTÑWÓPUT’PSHL
K\Ë™Yš[™\Ë•TÑWÑTÕÔ•SÓS[X™\ŠœÛÛYJ
O›[OO]™\ÝÜ[Û‹œÊJJK\Ë˜[P›Ü™\LŒK˜[P›Ü™\‹\Ë™Yš[™\Ë‘P•Q×ÐSWÐ“Ô‘TLK™XYÐ[P›Ü™\‹\Ë˜Ø[Y\˜\Ï]ØÛÛœÝOV×KÏV×KOV×KV×NÝ\Ë™Ü›Ý\[™]ÈË–R›Ù›ÜŠ]OLÙO\Ë™Yš[™\Ë“Ô’QS•QÒSPQÑT×ÐÓÕS•ÊÊÙJ[ÖÙWOZÞVÙWOU^VÙWO[™]ÈËšÛÙWK›™YYÕ\]OHLÙWO]ÙWK™\ÝÜ[Û‹\Ë™Ü›Ý\˜Y
ÙWJNÝ\Ë[šY›Ü›\Ë›ÜXÚ]O[™]ÈË›˜É
\Ë›ÜXÚ]JK\Ë[šY›Ü›\Ëœ›Ú™XÝ]™U^\™P[P›Ü™\[™]ÈË›˜É
\Ë˜[P›Ü™\ŠK\Ë[šY›Ü›\Ëœ›Ú™XÝ]™U^\™Q\ÝÜ[Û[™]ÈË›˜É

K\Ë[šY›Ü›\Ëœ›Ú™XÝ]™U^\™SX]š^[™]ÈË›˜É
JK\Ë[šY›Ü›\Ëœ›Ú™XÝ]™U^\™O[™]ÈË›˜É
ÊK\Ë[šY›Ü›\Ë›X\ÚÏ[™]ÈË›˜É
JK\Ë[šY›Ü›\Ë˜›ÛÜÝYÚ[™]ÈË›˜É
LJK\Ë[šY›Ü›\Ë››Ô›Ú™XÝ]™SX]\šX[[™]ÈË›˜É
ÛYÚ\™XÝ[ÛŽ›™]ÈË”L
KKKJK[XšY[›™]ÈË”LYŠŒKŒKŒJKÜXÚ]N‹Í_JK\Ë™\^ÚY\HˆÚ[˜ÛYH]ÝÛœËÜ™XÚ\Ú[Û—Ü]X[YšY\—ˆÚ[˜ÛYH]ÝÛœËÜ›Ú™XÝ]™WÝ^\š[™×Ü\œ×Ý™\^—ˆÚ[˜ÛYHÛÛ[[Û—ˆÚ[˜ÛYHÙÙ\Y—Ü\œ×Ý™\^——˜\žZ[™È™XÌÈ“›Ü›X[×—›ÚYXZ[Š
H×ˆÚ[˜ÛYH™YÚ[—Ý™\^—ˆÚ[˜ÛYH›Ú™XÝÝ™\^—ˆ“›Ü›X[H›Ü›X[×ˆÚ[˜ÛYH]ÝÛœËÜ›Ú™XÝ]™WÝ^\š[™×Ý™\^—ˆÚ[˜ÛYHÙÙ\Y—Ý™\^—ŸWˆ‹\Ë™œ˜YÛY[ÚY\VK[œ›ÛÛÜÊˆÚ[˜ÛYH]ÝÛœËÜ™XÚ\Ú[Û—Ü]X[YšY\—ˆÚ[˜ÛYHÙÙ\Y—Ü\œ×Ùœ˜YÛY[—ˆÚ[˜ÛYH]ÝÛœËÜ›Ú™XÝ]™WÝ^\š[™×Ü\œ×Ùœ˜YÛY[—˜\žZ[™È™XÌÈ“›Ü›X[×—ˆÚY™YˆTÑWÐTÑWÓPUT’PSœÝXÝ›Ô×ˆ™XÌÈYÚ\™XÝ[ÛŽ×ˆ™XÌÈ[XšY[×ˆ›Ø]ÜXÚ]N×ŸN×—[šY›Ü›H›Ô›Ô›Ú™XÝ]™SX]\šX[×ˆÙ[™Y——›ÚYXZ[Š›ÚY
Wž×ˆÚ[˜ÛYHÙÙ\Y—Ùœ˜YÛY[—ˆÚY™YˆTÑWÐTÑWÓPUT’PSˆ›Ø]‘Ý”H
X^
ŒKÝ
“›Ü›X[›Ü›X[^™J›Ô›Ú™XÝ]™SX]\šX[›YÚ\™XÝ[ÛŠJJJN×ˆ™XÍÛÛÜˆH™XÍ
›Ô›Ú™XÝ]™SX]\šX[˜[XšY[
È‘Ý”Œ
N×ˆÙ[ÙWˆ™XÍÛÛÜˆH™XÍ
Œ
N×ˆÙ[™Y——ˆÜ˜YÛXH[œ›ÛÛÛÜˆ›Üˆ
[HHÈHÔ’QS•QÒSPQÑT×ÐÓÕS•ÈJÊÊH×ˆÛÛÜˆH›Ú™XÝ]™U^\™PÛÛÜŠ›Ú™XÝ]™U^\™PÛÛÜ™ÖÈÔ’QS•QÒSPQÑT×ÐÓÕS•HHHHK›Ú™XÝ]™U^\™Q\ÝÜ[Û–ÈÔ’QS•QÒSPQÑT×ÐÓÕS•HHHHK›Ú™XÝ]™U^\™VÈÔ’QS•QÒSPQÑT×ÐÓÕS•HHHHKX\ÚÖÓÔ’QS•QÒSPQÑT×ÐÓÕS•HHHWKÛÛÜŠN×ˆW—ˆÚY™YˆTÑWÐTÑWÓPUT’PSˆÛÛÜ‹˜HHÛÛÜ‹˜HKŒÈX^
›Ô›Ú™XÝ]™SX]\šX[›ÜXÚ]KÛÛÜ‹˜JHˆKŒ×ˆÛÑœ˜YÐÛÛÜˆH™XÍ
ÛÛÜ‹œ™Ø‹ÛÛÜ‹˜H
ˆÜXÚ]JN×ˆÙ[ÙWˆÛÑœ˜YÐÛÛÜˆH™XÍ
ÛÛÜ‹œ™ØˆÈÛÛÜ‹˜KÜXÚ]JN×ˆÙ[™Y——ŸWˆ‹\Ë™Yš[™\Ê_\Ù]^\™\ÊKŠ^ÚYŠ
^Ý\Ë™Ü›Ý\œÜÚ][Û‹˜ÛÜJKœÜÚ][ÛŠK\Ë™Ü›Ý\œ]X]\›š[Û‹˜ÛÜJKœ]X]\›š[ÛŠNÙ›ÜŠ]OLÙO›[™Ý	‰™O\Ë™Yš[™\Ë“Ô’QS•QÒSPQÑT×ÐÓÕS•ÊÊÙJ^ÚYŠ\Ë[šY›Ü›\Ëœ›Ú™XÝ]™U^\™K˜[YVÙWK™\ÜÜÙJ
K\Ë[šY›Ü›\Ëœ›Ú™XÝ]™U^\™K˜[YVÙWO]ÙWKŠ^ØÛÛœÝ]\Ë™Ü›Ý\˜Ú[™[–ÙWNÚYŠ–ÙWHO]›˜[YJ^ØÛÛœÝ]\Ë˜Ø[Y\˜\Ë™š[™

O›˜[YOOO\–ÙWJJNÝ\Ë[šY›Ü›\Ë›X\ÚË˜[YVÙWO]›X\ÚÕ^\™_^\Ë[šY›Ü›\Ë›X\ÚË˜[YVÙWK›™YYÕ\]OHL\Ë[šY›Ü›\Ëœ›Ú™XÝ]™U^\™Q\ÝÜ[Û‹˜[YVÙWO]™\ÝÜ[Û‹\Ë™Ü›Ý\˜Ú[™[–ÙWO]œ\™[]\Ë™Ü›Ý\_]\Ë™Ü›Ý\˜Ú[™[–ÙWK›™YYÕ\]OHL]\Ë™Ü›Ý\\]SX]š^ÛÜ›
L
__]\]U[šY›Ü›\Ê
^Ù›ÜŠ]OLÙO\Ë™Ü›Ý\˜Ú[™[‹›[™ÝÊÊÙJ^ØÛÛœÝ]\Ë™Ü›Ý\˜Ú[™[–ÙWNÜ‹›™YYÕ\]I‰Š‹^\™SX]š^ÛÜ›[™\œÙK›][\SX]šXÙ\Êž‹œ›Ú™XÝ[Û“X]š^
K‹^\™SX]š^ÛÜ›[™\œÙK›][\J‹›X]š^ÛÜ›[™\œÙJK‹›™YYÕ\]OHLJK\Ë[šY›Ü›\Ëœ›Ú™XÝ]™U^\™SX]š^˜[YVÙWK›][\SX]šXÙ\Ê‹^\™SX]š^ÛÜ›[™\œÙK›X]š^ÛÜ›
___XÛÛœÝ^QÞž[™]ÈË•\ž[™]ÈË™ÒK^Ü\œÙJ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNÜ™]\›ˆœÝš[™ÈO]\[Ùˆ	‰ŠR”ÓÓ‹œ\œÙJ
JK›ÛZ\ÙK˜[
›X\

O™[˜Ý[ÛŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNØÛÛœÝ[[OYK\ÙSX\ÚßK\ÙSX\ÚË[[OYKš[XYÙVQÝÛŸKš[XYÙVQÝÛ‹O]œ›Ú™XÝ[Û‹ÏJ™]ÈË’NVJK™œ›ÛP\œ˜^JœÚ^™JKO[™]ÈË’NVJVÌKVÍJK[™]ÈË’NVJVÌ—KÛËžKZVÍWNšVÍWJKÏZVÌWK[™]ÈJËKK›™X\‹K™˜\‹ÊNÚœÜÚ][Û‹™œ›ÛP\œ˜^JœÜÚ][ÛŠNØÛÛœÝOZž™œ›ÛP\œ˜^Jœ›Ý][ÛŠNÛ]Ú›X]š^œÙ]œ›ÛSX]š^ÊJKœ]X]\›š[Û‹œÙ]œ›ÛT›Ý][Û“X]š^
›X]š^
Kœ›Ý]V
X]”JK™\ÝÜ[Û‰‰š™\ÝÜ[Û‹œÙ]œ›ÛSZXÛXXÐØ[Xœ˜][ÛŠ™\ÝÜ[Û‹ŠK›X\ÚÔ]]›X\ÚË›˜[YO]šYØÛÛœÝ[™]È›ÛZ\ÙJ
OžÙ]JJNÜ™]\›ˆ‰‰š›X\ÚÔ]Õž›ØY
›X\ÚÔ]
OžÚ›X\ÚÕ^\™O]

_JJN™

KJJJJJ__K^[™]ÈK‘I
‘TÑÎMÎ‹
KÞ]Oœ™\]Y\Ý\‹šYOO]›^Y\‹˜Ý\œ™[[›ËšYÙ[˜Ý[Ûˆ^

^ÚYŠ]L
\™]\›ŽØÛÛœÝO[™]ÈË‘ÝI
Ì‹ÌŠK[™]ÈË
ØÛÛÜŽÎŽMLËÚYNœË‰P‹˜[œÜ\™[ˆLÜXÚ]N‹KÚ\™Yœ˜[YNˆLJK[™]ÈË™XQŠKŠNÜ™]\›ˆ‹š\ÚX›OHL‹›˜[YOH“ÜšY[Y[XYÙP˜XÚÙÜ›Ý[™‹ŸXÛÛœÝXÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNØÛÛœÝØ˜XÚÙÜ›Ý[™\Ý[˜ÙNœ‹˜XÚÙÜ›Ý[™›V^
ŠKÛ”[›ÐÚ[™ÙY›ÏJ
OOžßKÙ]Ø[Y\˜\Ó˜[YQœ›ÛQ™X]\™N˜OJ
OOžßK‹‹›OYNÙKœ›Ú™XÝ[Û‰‰ŠÛÛœÛÛKØ\›Š“ÜšY[Y[XYÙS^Y\ˆ›Ú™XÝ[Ûˆ\˜[Y]\ˆ\È\™XØ]Y\ÙHÜœÈ[œÝXYˆŠKK˜ÜœÏYK˜ÜœßKœ›Ú™XÝ[ÛŠKÝ\\Š™]ÈË–R›
K\Ëš\ÓÜšY[Y[XYÙS^Y\HL\Ë˜˜XÚÙÜ›Ý[™[‹\Ë˜˜XÚÙÜ›Ý[™	‰Š\Ë˜˜XÚÙÜ›Ý[™›^Y\]\Ë˜˜XÚÙÜ›Ý[™›^Y\ÏÞßK\Ë˜˜XÚÙÜ›Ý[™›^Y\‹šY]\Ë˜˜XÚÙÜ›Ý[™›^Y\‹šYÏÝ\Ë›Øš™XÝÙ˜Y
\Ë˜˜XÚÙÜ›Ý[™
JK\Ë˜Ý\œ™[[›Ï]›ÚY\Ë›Û”[›ÐÚ[™ÙY[Ë\Ë™Ù]Ø[Y\˜\Ó˜[YQœ›ÛQ™X]\™OXNØÛÛœÝÏ]\Ë˜Y[š]X[^˜][Û”Ý\

NÝ\Ë›Y\™ÙQ™X]\™\ÏHLK\Ë™š[\š[™Ñ^[HLK\Ë˜XØÝ\˜]OHLØÛÛœÝ^ÛÝ]\ßNÝ\ËœÛÝ\˜ÙKÚ[”™XYK[Š
OœËœ\œÙJK›ÜšY[][ÛŸ›ÜšY[][Û‹
K[Š
OžÝ\Ëœ[›ÜÏ]™™X]\™\ÎØÛÛœÝZš[‹˜ÜœËYK˜ÜœËÏZK”Ö‹œ]X]\›š[Û‘œ›ÛPÔ”ÕÐÔ”Ê‹ŠKO[™]ÈË”ŽÛ]LÙ›ÜŠÛÛœÝHÙˆ\Ëœ[›ÜÊ\^˜ÜœÏYK˜ÜœË^œÙ]œ›ÛP\œ˜^JK™\XÙ\ÊK˜\SX]š^
›X]š^
KKœÜÚ][Û\^Õ™XÝÜŒÊ
KÊ^JKKœ]X]\›š[ÛZK”Ö‹œ]X]\›š[Û‘œ›ÛP]]YJK™Ù[ÛY]šY\ÖÌKœ›Ü\Y\ÊKœ™[][\JJKKšYYK™Ù[ÛY]šY\ÖÌKœ›Ü\Y\ËšYKš[™^[
ÊßJJK[Š


OOžÒœ\œÙJK˜Ø[Xœ˜][ÛŸ˜Ø[Xœ˜][Û‹JK[Š
OžÝ\Ë˜Ø[Y\˜\Ï]\Ë›X]\šX[[™]È^
\Ë˜Ø[Y\˜\ËJKÊ
_JJ_JJJJ_]\]J
^ß\Ù]›ÛÜÝYÚ

^Ý\Ë›X]\šX[[šY›Ü›\Ë˜›ÛÜÝYÚ˜[YO]YÙ]›ÛÜÝYÚ

^Ü™]\›ˆ\Ë›X]\šX[[šY›Ü›\Ë˜›ÛÜÝYÚ˜[Y_\™U\]J
^Ý˜\ˆNÈY[˜Ý[ÛŠKŠ^ØÛÛœÝ\‹›[ÜÝ™X\”[›ÊKœÜÚ][ÛŠKO\‹˜Ý\œ™[[›ÏÜ‹˜Ý\œ™[[›ËšY›ÚYÚYŠ‰‰šHO[‹šY
^Ü‹˜Ý\œ™[[›Ï[‹‹›Û”[›ÐÚ[™ÙY
Ü™]š[Ý\Ô[›ÔÜÚ][ÛŽœ‹™Ù]™]š[Ý\Ô[›Ê
OÜ‹™Ù]™]š[Ý\Ô[›Ê
KœÜÚ][ÛŽ›ÚYÝ\œ™[[›ÔÜÚ][ÛŽœ‹™Ù]Ý\œ™[[›Ê
KœÜÚ][Û‹™^[›ÔÜÚ][ÛŽœ‹™Ù]™^[›Ê
KœÜÚ][ÛŸJNØÛÛœÝO[‹™Ù[ÛY]šY\ÖÌKœ›Ü\Y\ËšYÙ[œÛÜœËO\‹˜Ø[Y\˜\Ë›X\

OŠØØ[Y\˜RY›˜[YK[›ÒY›‹šY\ÎŠ
OOžß_JJJK™š[\Š
OˆY_Kš[˜ÛY\Ê˜Ø[Y\˜RY
JJKÏ^Û^Y\Žœ‹^[ÔÛÝ\˜ÙNšKšY]ÎšY]Ë™\]Y\Ý\Ž›‹X\›Q›Ü[˜Ý[ÛŽ•ÞNÝœØÚY[\‹™^XÝ]JÊK[Š
OOžÛ‹šYOO\‹˜Ý\œ™[[›ËšY	‰Š‹›X]\šX[œÙ]^\™\ÊK‹‹™Ù]Ø[Y\˜\Ó˜[YQœ›ÛQ™X]\™JŠJK‹›X]\šX[\]U[šY›Ü›\Ê˜Ø[Y\˜K˜Ø[Y\˜LÑ
KšY]Ë››ÝYžPÚ[™ÙJ‹L
J_JK


OOžßJJ__J˜Ø[Y\˜K˜Ø[Y\˜LÑ\ÊK\Ë›X]\šX[\]U[šY›Ü›\Ê˜Ø[Y\˜K˜Ø[Y\˜LÑ
K
O]\ÊK˜˜XÚÙÜ›Ý[™	‰™K˜Ý\œ™[[›É‰ŠK˜˜XÚÙÜ›Ý[™œÜÚ][Û‹˜ÛÜJK˜Ý\œ™[[›ËœÜÚ][ÛŠKK˜˜XÚÙÜ›Ý[™\]SX]š^ÛÜ›

KK˜˜XÚÙÜ›Ý[™›X]\šX[YK›X]\šX[K˜˜XÚÙÜ›Ý[™›X]\šX[
_YÙ]™^[›Ê
^ØÛÛœÝJ\Ë˜Ý\œ™[[›Ëš[™^
ÌJI]\Ëœ[›ÜË›[™ÝÜ™]\›ˆ\Ëœ[›ÜÖÝ_YÙ]Ý\œ™[[›Ê
^Ü™]\›ˆ\Ë˜Ý\œ™[[›ßYÙ]™]š[Ý\Ô[›Ê
^ØÛÛœÝJ\Ë˜Ý\œ™[[›Ëš[™^LJI]\Ëœ[›ÜË›[™ÝÜ™]\›ˆ\Ëœ[›ÜÖÝ_Y[]J
^Ý\Ë˜˜XÚÙÜ›Ý[™	‰œÝ\\‹™[]J
K	‰\Ë˜ØXÚK˜ÛX\Š
K\Ë›X]\šX[š\ÚX›OHLKÛÛœÛÛKØ\›Š–[ÝH™YYÈ™\XÙHÜšY[Y[XYÙS^Y\‹›X]\šX[\YYÛˆXXÚØš™XÝˆ\È\ÜÝYHÚ[™Hš^YÚ[ˆÜšY[Y[XYÙS^Y\ˆÚ[™HHÛÛÜ“^Y\‹ˆHX]\šX[š\ÚXš[]H\ÈÙ]È˜[ÙKˆÈ›ÛÝÈ\ÜÝYHÙYHÎ‹ËÙÚ]X‹˜ÛÛKÚUÝÛœËÚ]ÝÛœËÚ\ÜÝY\ËÌLNŠ_[[ÜÝ™X\”[›Ê
^Û]KLKÌÙ›ÜŠÛÛœÝˆÙˆ\Ëœ[›ÜÊ^ØÛÛœÝO]™\Ý[˜ÙUÊ‹œÜÚ][ÛŠNÚO‰‰ŠZKO[Š_\™]\›ˆ__NÙ[˜Ý[Ûˆ	
K‹Š^Ü™]\›˜	ÝKIÙ_KIÜŸKIÛŸXXÛ\ÜÈž^[™ÈžØÛÛœÝXÝÜŠK‹‹J^ÜÝ\\Š\™Ý[Y[Ë›[™ÝI‰›ÚYOOX\™Ý[Y[ÖÍWOØ\™Ý[Y[ÖÍWNŒJK\Ëš\Ñ[Ú[™TÚ[[S›ÙOHL\Ë™\]\ËžYK\ËžO\‹\Ëž[‹\Ë›Þ[Ù^OI
K‹ŠK\Ë\›X	Ý\Ë›^Y\‹œÛÝ\˜ÙK\›KÙ\Y]KÉÝ\Ë›Þ[Ù^_K‰Ý\Ë›^Y\‹œÛÝ\˜ÙK™^[œÚ[ÛŸXYÙ]ØÝ™YR\ÓØYY

^Ü™]\›ˆ\Ë›[TÚ[ÏLYÙ]Y

^Ü™]\›˜	Ý\Ë™\IÝ\ËžIÝ\Ëž_IÝ\ËžŸX[ØYØÝ™YJ
^ØÛÛœÝX	Ý\Ë›^Y\‹œÛÝ\˜ÙK\›KÙ\ZY\˜\˜ÚKÉÝ\Ë›Þ[Ù^_KšœÛÛ˜Ü™]\›ˆ˜KšœÛÛŠ\Ë›^Y\‹œÛÝ\˜ÙK›™]ÛÜšÓÜ[ÛœÊK[Š
OžÝ\Ë›[TÚ[Ï]Ý\Ë›Þ[Ù^WNØÛÛœÝOV×NÙ›ÜŠKœ\Ú
\ÊNÙK›[™ÝÊ^ØÛÛœÝYKœÚY

K\‹™\
ÌKOLŠœ‹žÏLŠœ‹žKÏLŠœ‹žŽÜ‹™š[™[™Ü™X]PÚ[
‹KËËJK‹™š[™[™Ü™X]PÚ[
‹JÌKËËJK‹™š[™[™Ü™X]PÚ[
‹KÊÌKËJK‹™š[™[™Ü™X]PÚ[
‹JÌKÊÌKËJK‹™š[™[™Ü™X]PÚ[
‹KËÊÌKJK‹™š[™[™Ü™X]PÚ[
‹JÌKËÊÌKJK‹™š[™[™Ü™X]PÚ[
‹KÊÌKÊÌKJK‹™š[™[™Ü™X]PÚ[
‹JÌKÊÌKÊÌKJ__JJ_Yš[™[™Ü™X]PÚ[
K‹‹KÊ^ØÛÛœÝÏZVÉ
K‹ŠWNÚYŠ›[X™\ˆO]\[ÙˆÊ^ØÛÛœÝO[™]Èž
K‹‹\Ë›^Y\‹ÊNÝ\Ë˜Y
JKËœ\Ú
J___XÛÛœÝÞRžž[™]ÈË™XQ‹Ï[™]ÈË“”›ŽÖž™Ù[ÛY]žK˜›Ý[™[™Ð›Þ]ÎØÛÛœÝWÏXÛ\ÜÈ^[™È]žØÛÛœÝXÝÜŠJ^ÜÝ\\ŠJK\Ëš\Ñ[Ú[™TÚ[[S^Y\HL\ËœØØ[O[™]ÈË”L
KKJNØÛÛœÝ]\Ë˜Y[š]X[^˜][Û”Ý\

NÝ\ËÚ[”™XYO]\ËœÛÝ\˜ÙKÚ[”™XYK[Š


OOŠ\ËœÜXÚ[™ÏJX]˜XœÊ\ËœÛÝ\˜ÙK˜›Ý[™ÖÌ×K]\ËœÛÝ\˜ÙK˜›Ý[™ÖÌJJÓX]˜XœÊ\ËœÛÝ\˜ÙK˜›Ý[™ÖÍK]\ËœÛÝ\˜ÙK˜›Ý[™ÖÌWJJKÊŠ\ËœÛÝ\˜ÙKœÜ[ŠK\Ëœ›ÛÝ[™]ÈÞ
\ËLJK\Ëœ›ÛÝ˜˜›Þ›Z[‹™œ›ÛP\œ˜^J\ËœÛÝ\˜ÙK˜›Ý[™ÐÛÛ™›Ü›Z[™Ë
K\Ëœ›ÛÝ˜˜›Þ›X^™œ›ÛP\œ˜^J\ËœÛÝ\˜ÙK˜›Ý[™ÐÛÛ™›Ü›Z[™ËÊK\Ë›Z[‘[]˜][Û”˜[™ÙO]\Ë›Z[‘[]˜][Û”˜[™ÙOÏÝ\ËœÛÝ\˜ÙK˜›Ý[™ÐÛÛ™›Ü›Z[™ÖÌ—K\Ë›X^[]˜][Û”˜[™ÙO]\Ë›X^[]˜][Û”˜[™ÙOÏÝ\ËœÛÝ\˜ÙK˜›Ý[™ÐÛÛ™›Ü›Z[™ÖÍWK\Ë™^[ZKž”‹™œ›ÛP›ÞÊK˜Üœß‘TÑÎÌˆ‹\Ëœ›ÛÝ˜˜›Þ
K\Ëœ›ÛÝ›ØYØÝ™YJ
K[ŠŠJJJ__NÝ˜\ˆ—Ï\ŠMLŒÍ
NÙ[˜Ý[Ûˆ—ÊK‹Š^Ü™]\›˜	ÝKIÙ_KIÜŸKIÛŸXXÛ\ÜÈWÈ^[™ÈžØÛÛœÝXÝÜŠK‹‹KËÊ^ÜÝ\\Š\™Ý[Y[Ë›[™ÝÉ‰›ÚYOOX\™Ý[Y[ÖÍ×OØ\™Ý[Y[ÖÍ×NŒÊK\Ëš\ÐÛÜÓ›ÙOHL\Ë™[žSÙ™œÙ]ZK\Ë™[žS[™Ý\Ë\Ë™\]\ËžYK\ËžO\‹\Ëž[‹\Ë›Þ[Ù^O[—ÊK‹Š_YÙ]ØÝ™YR\ÓØYY

^Ü™]\›ˆ\Ë›[TÚ[ÏLYÙ]Y

^Ü™]\›˜	Ý\Ë™\IÝ\ËžIÝ\Ëž_IÝ\ËžŸXX\Þ[˜ÈÙ™]Ú
J^Ü™]\›ˆ\Ë›^Y\‹œÛÝ\˜ÙK™™]Ú\Š\Ë›^Y\‹œÛÝ\˜ÙK\›Ë‹‹\Ë›^Y\‹œÛÝ\˜ÙK›™]ÛÜšÓÜ[ÛœËXY\œÎžË‹‹\Ë›^Y\‹œÛÝ\˜ÙK›™]ÛÜšÓÜ[ÛœËšXY\œË˜[™ÙN˜ž]\ÏIÝKIÝ
ÙKL_X_J_X\Þ[˜ÈØYØÝ™YJ
^ØÛÛœÝX]ØZ]\Ë—Ù™]Ú
\Ë™[žSÙ™œÙ]\Ë™[žS[™Ý
KOX]ØZ]—Ë’Y\˜\˜ÚKœ\œÙJ™]ÈZ[\œ˜^J
JKYK››Ù\ÖÝ\Ë›Þ[Ù^WNÚYŠ\Š\™]\›ˆ›ÛZ\ÙKœ™Z™XÝ
–ÐÛÜÓ›ÙWNˆ[Y›Ü›YY]K[žH›Ý›Ý[™[ˆY\˜\˜ÚKˆŠNÝ\Ë›[TÚ[Ï\‹œÚ[ÛÝ[\Ë™[žSÙ™œÙ]\‹œÚ[]SÙ™œÙ]\Ë™[žS[™Ý\‹œÚ[]S[™ÝØÛÛœÝV×NÙ›ÜŠ‹œ\Ú
\ÊNÛ‹›[™ÝÊ^ØÛÛœÝ[‹œÚY

K]™\
ÌKOLŠžÏLŠžKÏLŠžŽÝ™š[™[™Ü™X]PÚ[
‹KËËKŠK™š[™[™Ü™X]PÚ[
‹JÌKËËKŠK™š[™[™Ü™X]PÚ[
‹KÊÌKËKŠK™š[™[™Ü™X]PÚ[
‹JÌKÊÌKËKŠK™š[™[™Ü™X]PÚ[
‹KËÊÌKKŠK™š[™[™Ü™X]PÚ[
‹JÌKËÊÌKKŠK™š[™[™Ü™X]PÚ[
‹KÊÌKÊÌKKŠK™š[™[™Ü™X]PÚ[
‹JÌKÊÌKÊÌKKŠ__Yš[™[™Ü™X]PÚ[
K‹‹KÊ^ØÛÛœÝÏ[—ÊK‹ŠNÛ]KÎØÛÛœÝZK››Ù\ÖÛ×NÚYŠ
XOZœÚ[ÛÝ[ZœÚ[]SÙ™œÙ]ÏZœÚ[]S[™ÝÙ[Ù^ØÛÛœÝZKœYÙ\ÖÛ×NÚYŠ]
\™]\›ŽØOKLK]œYÙSÙ™œÙ]Ï]œYÙS[™ÝXÛÛœÝO[™]ÈWÊK‹‹Ë\Ë›^Y\‹JNÝ\Ë˜Y
JKËœ\Ú
J_X\Þ[˜ÈØY

^Ý\Ë›ØÝ™YR\ÓØYY]ØZ]\Ë›ØYØÝ™YJ
NØÛÛœÝX]ØZ]\Ë—Ù™]Ú
\Ë™[žSÙ™œÙ]\Ë™[žS[™Ý
NÜ™]\›ˆ]ØZ]\Ë›^Y\‹œÛÝ\˜ÙKœ\œÙ\ŠÚ[ŽžË‹‹\Ë›^Y\‹œÛÝ\˜ÙKÚ[ÛÝ[\Ë›[TÚ[ßKÝ]\Ë›^Y\ŸJ__XÛÛœÝ×ÏZWË×ÏXÛ\ÜÈ^[™È]žØÛÛœÝXÝÜŠJ^ÜÝ\\ŠJK\Ëš\ÐÛÜÓ^Y\HLØÛÛœÝJ
OO\ÎÝ\ËÚ[”™XYO]\ËœÛÝ\˜ÙKÚ[”™XYK[Š
OžØÛÛœÝØÝX™N™_O]š[™›ËÜYÙSÙ™œÙ]›‹YÙS[™Ýš_O]š[™›Ëœ›ÛÝY\˜\˜ÚTYÙNÜ™]\›ˆ\ËœÜXÚ[™Ï]š[™›ËœÜXÚ[™Ë\Ëœ›ÛÝ[™]È×Ê‹K\ËLJK\Ëœ›ÛÝ˜˜›Þ›Z[‹™œ›ÛP\œ˜^JK
K\Ëœ›ÛÝ˜˜›Þ›X^™œ›ÛP\œ˜^JKÊK\Ë›Z[‘[]˜][Û”˜[™ÙO]\Ë›Z[‘[]˜][Û”˜[™ÙOÏÝšXY\‹›Z[–Ì—K\Ë›X^[]˜][Û”˜[™ÙO]\Ë›X^[]˜][Û”˜[™ÙOÏÝšXY\‹›X^Ì—K\ËœØØ[O[™]ÈË”L
KKJK\Ë›Ù™œÙ][™]ÈË”L

K\Ëœ›ÛÝ›ØYØÝ™YJ
K[ŠŠ_JJ__KWÏXÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^ÚYŠœ\œÙY]I‰ŠÛÛœÛÛKØ\›Š‘š[TÛÝ\˜ÙH\œÙY]H\˜[Y]\ˆ\È\™XØ]Y\ÙH™X]\™\È[œÝXYÙ‹ˆŠK™™X]\™\Ï]™™X]\™\ßœ\œÙY]JKœ›Ú™XÝ[Û‰‰ŠÛÛœÛÛKØ\›Š‘š[TÛÝ\˜ÙH›Ú™XÝ[Ûˆ\˜[Y]\ˆ\È\™XØ]Y\ÙHÜœÈ[œÝXYˆŠK˜ÜœÏ]˜Üœßœ›Ú™XÝ[ÛŠK]˜ÜœÊ^ÚYŠ]™™X]\™\ß]™™X]\™\Ë˜ÜœÊ]›ÝÈ™]È\œ›ÜŠœÛÝ\˜ÙK˜ÜœÈ\È™\]Z\™Y[ˆš[TÛÝ\˜ÙHŠNÝ˜ÜœÏ]™™X]\™\Ë˜ÜœßZYŠ]\›	‰ˆ]™™]ÚY]I‰ˆ]™™X]\™\Ê]›ÝÈ™]È\œ›ÜŠ\›™]ÚY]H[™™X]\™\È\™H›ÝÙ][—ˆš[TÛÝ\˜ÙNÈ]X\ÝÛ™H™YYÈÈ™H™\Ù[ŠNÝ\›]\›››Û™H‹Ý\\Š
K\Ëš\Ñš[TÛÝ\˜ÙOHL\Ë™™]ÚY]O]™™]ÚY]K\Ë™™]ÚY]_™™X]\™\ÏÝ™™X]\™\É‰Š\Ë—Ù™X]\™\ÐØXÚ\ÖÝ™™X]\™\Ë˜Üœ×O[™]È]
ÛX^LJK\Ë—Ù™X]\™\ÐØXÚ\ÖÝ™™X]\™\Ë˜Üœ×KœÙ]
›ÛZ\ÙKœ™\ÛÛ™J™™X]\™\ÊJJN\ËÚ[”™XYO]\Ë™™]Ú\Š\Ë\›œ›ÛQ^[

K\Ë›™]ÛÜšÓÜ[ÛœÊK[Š
OžÝ\Ë™™]ÚY]O]JJK\ËÚ[”™XYK[Š


OO\Ë™™]ÚY]JJK\Ëž›ÛÛO^ÛZ[ŽŒX^ŒKÌ_]\›œ›ÛQ^[

^Ü™]\›ˆ\Ë\›[Û“^Y\YY

^Ýš[]\ËÝ\\‹›Û“^Y\YY

NÛ]O]\Ë—Ù™X]\™\ÐØXÚ\ÖÝ›Ý]˜Üœ×K™Ù]

NÙ_
›Ý]˜Z[^[H‘TÑÎMÎˆO]\Ë˜ÜœË›Ý]˜Z[^[	‰Š›Ý]™›Ü˜ÙY^[ÜœÏH‘TÑÎMÎˆO]›Ý]˜ÜœÏÝ›Ý]˜ÜœÎ\Ë˜ÜœÊKO]\Ëœ\œÙ\Š\Ë™™]ÚY]K
K\Ë—Ù™X]\™\ÐØXÚ\ÖÝ›Ý]˜Üœ×KœÙ]
JJKK[Š
OžÝ™^[	‰Š\Ë™^[]™^[˜ÛÛ™J
K\Ë™^[˜ÜœÏO]˜ÜœÉ‰\Ë™^[˜\SX]š^
›X]š^ÛÜ›
J_JJ_[ØY]JJ^Ü™]\›ˆ\Ë—Ù™X]\™\ÐØXÚ\ÖÙK˜Üœ×K™Ù]

_Y^[[œÚYS[Z]

^Ü™]\›ˆ\Ë™^[š[\œÙXÝÑ^[

__KÏ[™]È˜J‘TÑÎÌˆ‹
K×ÏXÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^ÚYŠ™›Ü›X]]™›Ü›X]š[XYÙKÜ™È‹Ý\\Š
K]˜ÜœÊ]›ÝÈ™]È\œ›ÜŠ“™]ÈTÔÛÝ\˜ÙKÕÓUÔÛÝ\˜ÙNˆÜœÈ\È™\]Z\™YŠNÚYŠ\Ëš\ÕTÔÛÝ\˜ÙOHL™^[
\Ë™^[ZÛË™Ù]
˜ÜœÊJK\Ëž›ÛÛO]ž›ÛÛK\Ëš\Ò[™\Y]š\Ò[™\YLK\Ë˜ÜœÏ]˜ÜœË\Ë[SX]š^Ù][Z]Ï][SX]š^Ù][Z]Ë\Ë™^[Ù][Z]Ï^ßK\Ë[SX]š^Ø[˜XÚÏ][SX]š^Ø[˜XÚß
O
K]\Ëž›ÛÛJZYŠ\Ë[SX]š^Ù][Z]Ê^ØÛÛœÝSØš™XÝšÙ^\Ê\Ë[SX]š^Ù][Z]ÊKO]›[™ÝS[X™\ŠÙKLWJNÝ\Ëž›ÛÛO^ÛZ[Žœ‹YJÌKX^œŸ_Y[ÙH\Ëž›ÛÛO^ÛZ[ŽŒX^ŒKÌ_]\›œ›ÛQ^[

^Ü™]\›ˆž^Š\Ê_[Û“^Y\YY

^ÜÝ\\‹›Û“^Y\YY

NØÛÛœÝO]›Ý]œ\™[YOÙK™^[˜ÜœÎ›Ý]˜ÜœÎÚYŠ\Ë[SX]š^Ù][Z]É‰ˆ]\Ë™^[Ù][Z]ÖÜ—J^Ý\Ë™^[Ù][Z]ÖÜ—O^ßKË˜ÜœÏ]\Ë˜ÜœÎÙ›ÜŠ]]\Ëž›ÛÛK›X^Ý]\Ëž›ÛÛK›Z[ŽÝKJ^ØÛÛœÝO]\Ë[SX]š^Ù][Z]ÖÝKÝÙ\Ý›‹›ÜœßO[ËœÙ]
K›Z[•[T›ÝËK›Z[•[PÛÛ
KÑ^[
ŠKÙX\Ý›ËÛÝ]˜_O[ËœÙ]
K›X^[T›ÝËK›X^[PÛÛ
KÑ^[
ŠNÝ\Ë™^[Ù][Z]ÖÜ—VÝO[™]ÈKž”Š‹‹ËKÊ___Y^[[œÚYS[Z]
J^Ü™]\›ˆO]\Ëž›ÛÛK›Z[‰‰™O]\Ëž›ÛÛK›X^	‰Š[O]\Ë™^[Ù][Z]ÖÝ˜Üœ×_\Ë™^[Ù][Z]ÖÝ˜Üœ×VÙWKš[\œÙXÝÑ^[

J__KÏ[™]ÈKž”Š‘TÑÎÌˆŠKWÏXÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^ÚYŠœ›Ú™XÝ[Û‰‰ŠÛÛœÛÛKØ\›Š•Ñ”ÔÛÝ\˜ÙH›Ú™XÝ[Ûˆ\˜[Y]\ˆ\È\™XØ]Y\ÙHÜœÈ[œÝXYˆŠK˜ÜœÏ]˜Üœßœ›Ú™XÝ[ÛŠK]\S˜[YJ]›ÝÈ™]È\œ›ÜŠœÛÝ\˜ÙK\S˜[YH\È™\]Z\™Y[ˆÙœÈÛÝ\˜ÙKˆŠNÚYŠ]˜ÜœÊ]›ÝÈ™]È\œ›ÜŠœÛÝ\˜ÙK˜ÜœÈ\È™\]Z\™Y[ˆÙœÈÛÝ\˜ÙHŠNÝ™›Ü›X]]™›Ü›X]˜\XØ][Û‹ÚœÛÛˆ‹Ý\\Š
K\Ëš\ÕÑ”ÔÛÝ\˜ÙOHL\Ë\S˜[YO]\S˜[YK\Ë™\œÚ[Û]™\œÚ[ÛŸŒ‹ŒŒˆ‹\Ë˜˜›ÞYÚ]Ï]˜˜›ÞYÚ]Ë\Ëž›ÛÛO^ÛZ[ŽŒX^ŒKÌNØÛÛœÝO[™]ÈT“
\›
NÙKœÙX\˜Ú\˜[\ËœÙ]
”ÑT•’PÑH‹•Ñ”ÈŠKKœÙX\˜Ú\˜[\ËœÙ]
”‘TUQTÕ‹‘Ù]™X]\™HŠKKœÙX\˜Ú\˜[\ËœÙ]
\S˜[YH‹\Ë\S˜[YJKKœÙX\˜Ú\˜[\ËœÙ]
•‘T”ÒSÓˆ‹\Ë™\œÚ[ÛŠKKœÙX\˜Ú\˜[\ËœÙ]
”Ô”ÓSQH‹\Ë˜ÜœÊKKœÙX\˜Ú\˜[\ËœÙ]
›Ý]]›Ü›X]‹\Ë™›Ü›X]
KKœÙX\˜Ú\˜[\ËœÙ]
“Ö‹	X˜›Þ	Ý\Ë˜ÜœßX
K\Ë™[™Ü”ÜXÚYšXÏ]™[™Ü”ÜXÚYšXÎÙ›ÜŠÛÛœÝ[ˆ\Ë™[™Ü”ÜXÚYšXÊSØš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
\Ë™[™Ü”ÜXÚYšXË
I‰™KœÙX\˜Ú\˜[\ËœÙ]
\Ë™[™Ü”ÜXÚYšXÖÝJNÝ\Ë\›YXÛÙUT’PÛÛ\Û™[
KÔÝš[™Ê
J_Z[™[™Ñ\œ›ÜŠ
^Ü™]\›ˆœ™\ÜÛœÙI‰O]œ™\ÜÛœÙKœÝ]\ÏÝœ™\ÜÛœÙK^

K[Š
OOžØÛÛœÝX	Ý\Ë\›TÑT•’PÑOUÑ”É”‘TUQTÕQÙ]Ø\Xš[]Y\É•‘T”ÒSÓIÝ\Ë™\œÚ[ÛŸXJ™]ÈÓT\œÙ\ŠKœ\œÙQœ›ÛTÝš[™ÊK˜\XØ][Û‹Þ[ŠKœ]Y\žTÙ[XÝÜŠ‘^Ù\[ÛˆŠKO[‹™Ù]]šX]J™^Ù\[ÛÛÙHŠKÏ[‹œ]Y\žTÙ[XÝÜŠ‘^Ù\[Û•^ŠK^ÛÛ[ØÛÛœÛÛK™\œ›ÜŠÛÝ\˜ÙH	Ý\Ë\S˜[Y_Nˆ˜Y™\]Y\ÝÚ[ˆ™]Ú[™È]KˆÙ\™\ˆØ^\Îˆ‰Ú_Nˆ	ÜßH‹ˆ”™]šY]Ú[™È	ÜŸHX^H[˜
_JJNœÝ\\‹š[™[™Ñ\œ›ÜŠ
_YÙ]]RÙ^J
^Ü™]\›ˆš\Õ[OÜÝ\\‹™Ù]]RÙ^J
N˜‰Ýž›ÛÛ_\ÉÝœÛÝ]]ÉÝÙ\ÝX]\›œ›ÛQ^[

^ØÛÛœÝO]š\Ñ^[Ý˜\Ê\Ë˜ÜœËÊNÑ^[
\Ë˜ÜœËÊNÜ™]\›ˆ˜˜›Þ
K\Ê_Y^[[œÚYS[Z]

^Ü™]\›ˆ\Ë™^[š[\œÙXÝÑ^[

__KÏ[™]ÈKž”Š‘TÑÎÌˆŠKÏ^Ù[ŽˆÜÙ[ˆ‹\ÎˆÛ™\È‹ÛŽˆ™\ÝÛˆ‹ÜÎˆ™[ÜÈ‹™NˆœÝÛ™H‹ÙNˆ›ÜÙH‹ÎˆœÙ[È‹ÝÎˆ›™\ÝÈŸK—ÏXÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^ÚYŠ]›˜[YJ]›ÝÈ™]È\œ›ÜŠœÛÝ\˜ÙK›˜[YH\È™\]Z\™YˆŠNÚYŠ]™^[
]›ÝÈ™]È\œ›ÜŠœÛÝ\˜ÙK™^[\È™\]Z\™YŠNÚYŠ]˜ÜœÉ‰ˆ]œ›Ú™XÝ[ÛŠ]›ÝÈ™]È\œ›ÜŠœÛÝ\˜ÙK˜ÜœÈ\È™\]Z\™YŠNÝ˜\ˆNÝ™›Ü›X]]™›Ü›X]š[XYÙKÜ™È‹Ý\\Š
K\Ëš\ÕÓTÔÛÝ\˜ÙOHL\Ë›˜[YO]›˜[YK\Ëž›ÛÛO^ÛZ[ŽŒX^ŒKÌK\ËœÝ[O]œÝ[_ˆ‹\ËÚY]ÚYšZYÚM‹\ËšZYÚ]šZYÚÚYM‹\Ë™\œÚ[Û]™\œÚ[ÛŸŒKŒËŒ‹\Ë˜[œÜ\™[]˜[œÜ\™[LK\Ë˜˜›ÞYÚ]Ï]˜˜›ÞYÚ]Ë˜^\ÓÜ™\Ý\Ë˜^\ÓÜ™\]˜^\ÓÜ™\ŽˆŒKŒËŒOO]\Ë™\œÚ[ÛÝ\Ë˜^\ÓÜ™\JOZKË˜^\ÓÜ™\Š\Ë˜ÜœÊJI‰œÖÙKœÛXÙJŠW_ÜÙ[ˆŽ\Ë˜^\ÓÜ™\HÜÙ[ˆŽØÛÛœÝHŒKŒËŒOO]\Ë™\œÚ[ÛÈÔ”ÈŽˆ”Ô”È‹[™]ÈT“
\Ë\›
NÛ‹œÙX\˜Ú\˜[\ËœÙ]
”ÑT•’PÑH‹•ÓTÈŠK‹œÙX\˜Ú\˜[\ËœÙ]
”‘TUQTÕ‹‘Ù]X\ŠK‹œÙX\˜Ú\˜[\ËœÙ]
“VQT”È‹\Ë›˜[YJK‹œÙX\˜Ú\˜[\ËœÙ]
•‘T”ÒSÓˆ‹\Ë™\œÚ[ÛŠK‹œÙX\˜Ú\˜[\ËœÙ]
”ÕSTÈ‹\ËœÝ[JK‹œÙX\˜Ú\˜[\ËœÙ]
‘“Ô“PU‹\Ë™›Ü›X]
K‹œÙX\˜Ú\˜[\ËœÙ]
•S”ÔT‘S•‹\Ë˜[œÜ\™[
K‹œÙX\˜Ú\˜[\ËœÙ]
“Ö‹‰X˜›ÞŠK‹œÙX\˜Ú\˜[\ËœÙ]
‹\Ë˜ÜœÊK‹œÙX\˜Ú\˜[\ËœÙ]
•ÒQ‹\ËÚY
K‹œÙX\˜Ú\˜[\ËœÙ]
’RQÒ‹\ËšZYÚ
K\Ë™[™Ü”ÜXÚYšXÏ]™[™Ü”ÜXÚYšXÎÙ›ÜŠÛÛœÝ[ˆ\Ë™[™Ü”ÜXÚYšXÊSØš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
\Ë™[™Ü”ÜXÚYšXË
I‰›‹œÙX\˜Ú\˜[\ËœÙ]
\Ë™[™Ü”ÜXÚYšXÖÝJNÝ\Ë\›YXÛÙUT’PÛÛ\Û™[
‹ÔÝš[™Ê
J_]\›œ›ÛQ^[

^ØÛÛœÝO]š\Ñ^[Ý˜\Ê\Ë˜ÜœËÊNÑ^[
\Ë˜ÜœËÊNÜ™]\›ˆ˜˜›Þ
K\Ê_Y^[[œÚYS[Z]

^Ü™]\›ˆ\Ë™^[š[\œÙXÝÑ^[

__KWÏXÛ\ÜÈ^[™È×ÞØÛÛœÝXÝÜŠ
^ÚYŠ]›˜[YJ]›ÝÈ™]È\œ›ÜŠ“™]ÈÓUÔÛÝ\˜ÙNˆ˜[YH\È™\]Z\™YŠNÜÝ\\Š
K\Ëš\ÕÓUÔÛÝ\˜ÙOHLØÛÛœÝO[™]ÈT“
\Ë\›
NÙKœÙX\˜Ú\˜[\ËœÙ]
“VQTˆ‹›˜[YJKKœÙX\˜Ú\˜[\ËœÙ]
‘“Ô“PU‹\Ë™›Ü›X]
KKœÙX\˜Ú\˜[\ËœÙ]
”ÑT•’PÑH‹•ÓUÈŠKKœÙX\˜Ú\˜[\ËœÙ]
•‘T”ÒSÓˆ‹™\œÚ[ÛŸŒKŒŒŠKKœÙX\˜Ú\˜[\ËœÙ]
”‘TUQTÕ‹‘Ù][HŠKKœÙX\˜Ú\˜[\ËœÙ]
”ÕSH‹œÝ[_››Ü›X[ŠKKœÙX\˜Ú\˜[\ËœÙ]
•SSPU’VÑU‹[SX]š^Ù]
KKœÙX\˜Ú\˜[\ËœÙ]
•SSPU’V‹‰USSPU’VŠKKœÙX\˜Ú\˜[\ËœÙ]
•ST“ÕÈ‹‰T“ÕÈŠKKœÙX\˜Ú\˜[\ËœÙ]
•SPÓÓ‹‰PÓÓŠK\Ë™[™Ü”ÜXÚYšXÏ]™[™Ü”ÜXÚYšXÎÙ›ÜŠÛÛœÝ[ˆ\Ë™[™Ü”ÜXÚYšXÊSØš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
\Ë™[™Ü”ÜXÚYšXË
I‰™KœÙX\˜Ú\˜[\ËœÙ]
\Ë™[™Ü”ÜXÚYšXÖÝJNÝ\Ë\›YXÛÙUT’PÛÛ\Û™[
KÔÝš[™Ê
J__K×ÏK×ŠÊÊN—×Ê×‹Ï×JŠJÖ××JÊO×ÏÊŠÊOËÎÙ[˜Ý[ÛˆWÊ
^ØÛÛœÝO]œ\˜[\Ë›[™ÝØÉÝœ\˜[\Ëš›Ú[Š‰ˆŠ_XˆˆŽÜ™]\›˜	Ýœ›ÝØÛÛN‹ËÉÝ˜]]Üš]_IÝœ]IÙ_XY[˜Ý[ÛˆWÊJ^ØÛÛœÝ^ÊšÎ‹ËØ\K›X\›Þ˜ÛÛHŠNÚYŠœ›ÝØÛÛ\‹œ›ÝØÛÛ˜]]Üš]O\‹˜]]Üš]KšOO]œ›ÝØÛÛ
^ØÛÛœÝO]œ\˜[\Ëš[™^ÙŠœÙXÝ\™HŠNÙOL	‰œ\˜[\ËœÜXÙJKJ_ZYŠ‹ÈˆOO\‹œ]	‰Šœ]X	Ü‹œ]IÝœ]X
KJOY_[
J]›ÝÈ™]È\œ›ÜŠ[ˆTHXØÙ\ÜÈÚÙ[ˆ\È™\]Z\™YŠNÚYŠœÈOOYVÌJ]›ÝÈ™]È\œ›ÜŠ•\ÙHHX›XÈXØÙ\ÜÈÚÙ[ˆ
ËŠŠK›ÝHÙXÜ™]XØÙ\ÜÈÚÙ[ˆ
ÚËŠŠKˆŠNÜ™]\›ˆœ\˜[\Ï]œ\˜[\Ë™š[\Š
O‹LOOO]š[™^ÙŠ˜XØÙ\Ü×ÝÚÙ[ˆŠJJKœ\˜[\Ëœ\Ú
XØÙ\Ü×ÝÚÙ[IÙ_X
KWÊ
_Y[˜Ý[Ûˆ—Ê
^Ü™]\›ˆOO]š[™^ÙŠ›X\›ÞˆŠ_Y[˜Ý[ÛˆÊ
^ØÛÛœÝO]›X]Ú
×ÊNÚYŠYJ]›ÝÈ™]È\œ›ÜŠ•[˜X›HÈ\œÙHT“Øš™XÝŠNÜ™]\›žÜ›ÝØÛÛ™VÌWK]]Üš]N™VÌ—K]™VÌ×_‹È‹\˜[\Î™VÍOÙVÍKœÜ]
‰ˆŠN–×__XÛÛœÝ×ÏY[˜Ý[ÛŠJ^ÚYŠ]—Ê
J\™]\›ˆØÛÛœÝ^Ê
NÜ™]\›ˆ‹œ]XÜÝ[\ËÝŒIÜ‹œ]XWÊ‹J_K×ÏY[˜Ý[ÛŠJ^ÚYŠ]—Ê
J\™]\›ˆØÛÛœÝ^Ê
NÜ™]\›ˆ‹œ]XÝÉÜ‹˜]]Üš]_KšœÛÛ˜‹œ\˜[\Ëœ\Ú
œÙXÝ\™HŠKWÊ‹J_K—ÏY[˜Ý[ÛŠK‹Š^ØÛÛœÝO^Ê
NÜ™]\›ˆ—Ê
OÊKœ]XÜÝ[\ËÝŒIÚKœ]KÜÜš]IÙ_IÜŸXWÊKŠJNŠKœ]
ÏX	Ù_IÜŸXWÊJJ_NÙ[˜Ý[ÛˆWÊ
^Ü™]\›ˆœ™\XÙJ×ËÙË‰ÈŠ_XÛÛœÝ×ÏXÛ\ÜÈ^[™È×ÞØÛÛœÝXÝÜŠ
^Ý™›Ü›X]H˜\XØ][Û‹Þ\›ÝØYŽÝ\O[X\›Þ]™XÝÜˆ‹˜ÜœÏH‘TÑÎŒÎMÈ‹š\Ò[™\YHL\›]\›‹ˆ‹Ý\\Š
NØÛÛœÝO]™š[\Ÿ


OOˆL
NÛ]‹ŽÚYŠ\Ë\›ÏV×K\Ë›^Y\œÏ^ßK\ËœÝ[\Ï^ßK\Ëš\Õ™XÝÜ•[TÛÝ\˜ÙOHL\Ë˜XØÙ\ÜÕÚÙ[]˜XØÙ\ÜÕÚÙ[‹]œÝ[J]›ÝÈ™]È\œ›ÜŠ“™]È™XÝÜ•[\ÔÛÝ\˜ÙNˆÝ[H\È™\]Z\™YŠNÈœÝš[™ÈO]\[ÙˆœÝ[OÊW×ÊœÝ[K\Ë˜XØÙ\ÜÕÚÙ[ŠK\˜KšœÛÛŠ‹\Ë›™]ÛÜšÓÜ[ÛœÊJNœT›ÛZ\ÙKœ™\ÛÛ™JœÝ[JK\ËÚ[”™XYO\‹[Š
OOžÝ\ËšœÛÛ”Ý[OYNÛ]]œÜš]_KœÜš]NÚYŠŠ^Ü[™]ÈT“
‹ŠKÔÝš[™Ê
NØÛÛœÝX—Ê‹ˆ‹‹šœÛÛˆ‹\Ë˜XØÙ\ÜÕÚÙ[ŠNÜ™]\›ˆ˜KšœÛÛŠ\Ë›™]ÛÜšÓÜ[ÛœÊK[Š
OžÝ\ËœÜš]\Ï]ØÛÛœÝX—Ê‹ˆ‹‹œ™È‹\Ë˜XØÙ\ÜÕÚÙ[ŠNÜ™]\›ˆ\ËœÜš]\ËœÛÝ\˜ÙO[‹_JJ_\™]\›ˆ_JJK[Š
OžÚYŠ›^Y\œË™›Ü‘XXÚ


‹ŠOOžÚYŠ‹œÛÝ\˜ÙUZY]\ËZY˜˜XÚÙÜ›Ý[™OO\‹\J]\Ë˜˜XÚÙÜ›Ý[™^Y\\ŽÙ[ÙHYŠJŠJ^Ý›ÚYOO\–ÈœÛÝ\˜ÙK[^Y\ˆ—I‰™[˜Ý[ÛŠJ^ØÛÛœÝ]™š[\Š
OšYOOYKœ™YŠJVÌNÖÈ\H‹œÛÝ\˜ÙH‹œÛÝ\˜ÙK[^Y\ˆ‹›Z[ž›ÛÛH‹›X^›ÛÛH‹™š[\ˆ‹›^[Ý]—K™›Ü‘XXÚ

OžÙVÝO\–Ý_JJ_J›^Y\œËŠNØÛÛœÝOQÚJ‹\ËœÜš]\Ë\ËœÞ[X›ÛÐÚ\˜ÛJNÝ\ËœÝ[\ÖÜ‹šYOYK\Ë›^Y\œÖÜ–ÈœÛÝ\˜ÙK[^Y\ˆ—W_
\Ë›^Y\œÖÜ–ÈœÛÝ\˜ÙK[^Y\ˆ—WOV×JK\Ë›^Y\œÖÜ–ÈœÛÝ\˜ÙK[^Y\ˆ—WKœ\Ú
ÚYœ‹šYÜ™\Ž›‹š[\‘^™\ÜÚ[ÛŽ–›Š‹™š[\Š_J__JJK‹ˆO]\Ë\›
^ØÛÛœÝOSØš™XÝ˜[Y\ÊœÛÝ\˜Ù\ÊK›X\

OžÚYŠ\›
^Ý\›[™]ÈT“
\›ŠKÔÝš[™Ê
NØÛÛœÝO]×Ê\›\Ë˜XØÙ\ÜÕÚÙ[ŠNÜ™]\›ˆ˜KšœÛÛŠK\Ë›™]ÛÜšÓÜ[ÛœÊK[Š
OžÚYŠ[\ÖÌJ\™]\›ˆ[\ÖÌOYXÛÙUT’PÛÛ\Û™[
™]ÈT“
[\ÖÌKJKÔÝš[™Ê
JKWÊ[\ÖÌJ_JJ_\™]\›ˆ[\ÏÔ›ÛZ\ÙKœ™\ÛÛ™JWÊ[\ÖÌJJN”›ÛZ\ÙKœ™Z™XÝ

_JJNÜ™]\›ˆ›ÛZ\ÙK˜[
J_\™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™JÑWÊ\Ë\›
WJ_JJK[Š
OžÝ\Ë\›ÏP\œ˜^K™œ›ÛJ™]ÈÙ]

J_JJ_]\›œ›ÛQ^[
J^Ü™]\›ˆž^ŠÝ[SX]š^Ø[˜XÚÎ\Ë[SX]š^Ø[˜XÚË\›™_J_[Û“^Y\YY

^ÜÝ\\‹›Û“^Y\YY

K›Ý]œÝ[I‰›Ý]š\Ñ™X]\™QÙ[ÛY]žS^Y\‰‰›Ý]˜XØÝ\˜]I‰ŠÛÛœÛÛKØ\›Š•Ú]™XÝÜ•[\ÔÛÝ\˜ÙH[™™X]\™QÙ[ÛY]žS^Y\‹HXØÝ\˜]HÜ[Ûˆ\È[Ø^\È˜[ÙHŠK›Ý]˜XØÝ\˜]OHLJ_[ØY]JJ^ØÛÛœÝ]\Ë—Ù™X]\™\ÐØXÚ\ÖÙK˜Üœ×K]\Ë™Ù]]RÙ^J
NÛ]O\‹™Ù]
ŠNÜ™]\›ˆ_
OT›ÛZ\ÙK˜[
\Ë\›Ë›X\

O\Ë™™]Ú\Š\Ë\›œ›ÛQ^[
ŠK\Ë›™]ÛÜšÓÜ[ÛœÊK[Š
O\Ëœ\œÙ\Š‹ÛÝ]™K[Ž\Ë^[JJJJJJK[Š
O™[˜Ý[ÛŠ
^ØÛÛœÝO]ÌNÜ™]\›ˆ™›Ü‘XXÚ


ŠOOžÌOO\‰‰™™X]\™\Ë™›Ü‘XXÚ

OžÙK™™X]\™\Ëœ\Ú

_JJ_JJK_J
JJK˜Ø]Ú

O\Ëš[™[™Ñ\œ›ÜŠ
JJK‹œÙ]
‹JJK__KWÏXÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÓÜšY[Y[XYÙTÛÝ\˜ÙOHLØÛÛœÝOV×NÙKœ\Ú
›ÜšY[][ÛœÕ\›Ü˜KšœÛÛŠ›ÜšY[][ÛœÕ\›\Ë›™]ÛÜšÓÜ[ÛœÊN”›ÛZ\ÙKœ™\ÛÛ™J
JKKœ\Ú
˜Ø[Xœ˜][Û•\›Ü˜KšœÛÛŠ˜Ø[Xœ˜][Û•\›\Ë›™]ÛÜšÓÜ[ÛœÊN”›ÛZ\ÙKœ™\ÛÛ™J
JK\ËÚ[”™XYOT›ÛZ\ÙK˜[
JK[Š
OŠÛÜšY[][ÛŽÌKØ[Xœ˜][ÛŽÌW_JJJ_]\›œ›ÛQ^[

^Ü™]\›ˆ\Ëš[XYÙU\›
˜Ø[Y\˜RYœ[›ÒY
_YÙ]]RÙ^J
^Ü™]\›˜ÉÝ˜Ø[Y\˜RY\	Ýœ[›ÒYXZ[XYÙU\›
J^Ü™]\›ˆ\Ë\›œ™\XÙJžØØ[Y\˜RYH‹
Kœ™\XÙJžÜ[›ÒYH‹J__K×Ï^ÔÔÒUSÓ—ÐÐT•TÒPSŽžÛ[Q[[Y[ÎŒË\œ˜^U\N‘›Ø]Ì\œ˜^K]šX]S˜[YNˆœÜÚ][ÛˆŸKÓÓÔ—ÔPÒÑQžÛ[Q[[Y[Î\œ˜^U\N•Z[\œ˜^K]šX]S˜[YNˆ˜ÛÛÜˆ‹›Ü›X[^™YˆLKS•S”ÒUNžÛ[Q[[Y[ÎŒK[Pž]NŒ‹\œ˜^U\N•Z[M\œ˜^K]šX]S˜[YNˆš[[œÚ]H‹›Ü›X[^™YˆLKÓTÔÒQ’PÐUSÓŽžÛ[Q[[Y[ÎŒK\œ˜^U\N•Z[\œ˜^K]šX]S˜[YNˆ˜Û\ÜÚYšXØ][Ûˆ‹›Ü›X[^™YˆLK“Ô“PSÔÔT‘SPTQžÛ[Q[[Y[ÎŒ‹\œ˜^U\N•Z[\œ˜^K]šX]S˜[YNˆœÜ\™SX\Y›Ü›X[ŸK“Ô“PSÓÐÕMŽžÛ[Q[[Y[ÎŒ‹\œ˜^U\N•Z[\œ˜^K]šX]S˜[YNˆ›ØÝM“›Ü›X[ŸK“Ô“PSžÛ[Q[[Y[ÎŒË\œ˜^U\N‘›Ø]Ì\œ˜^K]šX]S˜[YNˆ››Ü›X[Ÿ_NÙ›ÜŠÛÛœÝÙˆØš™XÝšÙ^\Ê×ÊJ^ØÛÛœÝOP×ÖÝNÙKœÝ™YS˜[YO]K›[Pž]OYK›[Pž]_K˜\œ˜^U\K–UT×ÔT—ÑSSQS•K˜ž]TÚ^™OYK›[Q[[Y[Ê™K›[Pž]KK››Ü›X[^™YYK››Ü›X[^™YLNØÛÛœÝH™Ù]Z[ŠÎ
™K›[Pž]NÙK™Ù]˜[YOLOOOYK›[Pž]OÙ[˜Ý[ÛŠJ^Ü™]\›ˆÜ—JJ_N™[˜Ý[ÛŠJ^Ü™]\›ˆÜ—JKL
__XÛÛœÝÏ^Ü\œÙN™[˜Ý[ÛŠJ^ÚYŠ]
]›ÝÈ™]È\œ›ÜŠ“›È\œ˜^HY™™\ˆ›ÝšYYˆŠNØÛÛœÝ[™]È]UšY]Ê
NÛ]LÙ›ÜŠÛÛœÝÙˆKš[‹œÚ[]šX]\Ê[ŠÏP×ÖÝK˜ž]TÚ^™NØÛÛœÝOSX]™›ÛÜŠ˜ž]S[™ÝÛŠKÏ[™]ÈË“ÖNÛ]OLLÙ›ÜŠÛÛœÝÙˆKš[‹œÚ[]šX]\Ê^ØÛÛœÝOP×ÖÝKÏYK›[Q[[Y[ÊšK[™]ÈK˜\œ˜^U\JÊNÙ›ÜŠ]LÝÎÝ
ÏYK›[Q[[Y[Ê^Ù›ÜŠ]LÛK›[Q[[Y[ÎÛŠÊÊZÝ
Û—OYK™Ù]˜[YJ‹
ÛŠ™K›[Pž]JNÛ
Ï[ŸXJÏYK˜ž]TÚ^™KXKËœÙ]]šX]JK˜]šX]S˜[YK™]ÈË•ÊK›[Q[[Y[ËK››Ü›X[^™Y
J_\™]\›ˆË˜ÛÛ\]P›Ý[™[™Ð›Þ

K›ÛZ\ÙKœ™\ÛÛ™JÊ__KWÏ^Ü\œÙN™[˜Ý[ÛŠ
^ÚYŠ]
]›ÝÈ™]È\œ›ÜŠ“›È\œ˜^HY™™\ˆ›ÝšYYˆŠNØÛÛœÝO[™]È]UšY]Ê
K[™]ÈË”L
K™Ù]›Ø]ÌŠL
KK™Ù]›Ø]ÌŠL
KK™Ù]›Ø]ÌŠL
JK[™]ÈË”L
K™Ù]›Ø]ÌŠL‹L
KK™Ù]›Ø]ÌŠM‹L
KK™Ù]›Ø]ÌŠŒL
JKO[™]ÈË“”›Š‹ŠKÏSX]™›ÛÜŠ
˜ž]S[™ÝL
KÌMŠKO[™]È›Ø]Ì\œ˜^JÊ›ÊK[™]ÈZ[\œ˜^J
ÌLŠ›Ë
›ÊKÏ[™]ÈË“ÖNÜ™]\›ˆËœÙ]]šX]JœÜÚ][Ûˆ‹™]ÈË•ÊKÊJKËœÙ]]šX]J˜ÛÛÜˆ‹™]ÈË•ÊL
JKË˜›Ý[™[™Ð›ÞZK›ÛZ\ÙKœ™\ÛÛ™JÊ__K—ÏXÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^ÚYŠ]™š[J]›ÝÈ™]È\œ›ÜŠ“™]ÈÝ™YTÛÝ\˜ÙNˆš[H\È™\]Z\™YŠNÜÝ\\Š
K\Ë™š[O]™š[K\Ë™™]Ú\\˜K˜\œ˜^PY™™\‹\Ë™^[œÚ[Û“ØÝ™YOHš˜È‹\ËÚ[”™XYOJ˜ÛÝYÔ›ÛZ\ÙKœ™\ÛÛ™J˜ÛÝY
Nœ˜KšœÛÛŠ	Ý\Ë\›KÉÝ\Ë™š[_X\Ë›™]ÛÜšÓÜ[ÛœÊJK[Š
OŠ\ËœÚ[]šX]\Ï]œÚ[]šX]\Ë\Ë˜˜\Ù]\›X	Ý\Ë\›KÉÝ›ØÝ™YQ\ŸKÜ˜\Ë™^[œÚ[ÛHÒSˆOO]œÚ[]šX]\ÏÈ˜Ú[ˆŽˆ˜š[ˆ‹\Ëœ\œÙOH˜Ú[ˆOO]\Ë™^[œÚ[ÛÒWËœ\œÙN•Ëœ\œÙK
JJ__NÝ˜\ˆÏ\ŠÊNÔËœ™YÚ\Ý\”Ù\šX[^™\ŽØÛÛœÝ—ÏTËœÜ]Û‹ÏJË›Ø•ÛÜšÙ\‹Ë‘Y˜][Ù\šX[^™\‹Ë”ÛÛË•™XY
KÏTË•˜[œÙ™\ŽÛ]×ÎÔË•ÛÜšÙ\ŽØÛÛœÝ—Ï^Ý\›Z[˜]J
^ØÛÛœÝS×ÎÜ™]\›ˆ×Ï]›ÚYË\›Z[˜]J
_K\œÙN˜\Þ[˜È[˜Ý[ÛŠJ^ØÛÛœÝYKš[‹œÛÝ\˜ÙK›Y]Y]KOYK›Ý]œÚ[]šX]\ËÏ[‹œØØ[KOYKš[‹˜˜›ÞXK›Z[‹ÏXK›X^˜ÛÛ™J
KœÝXŠK›Z[ŠKXK›X^O[‹›Ù™œÙ]YKš[‹›[TÚ[ËY[˜Ý[ÛŠJ^Ü™]\›ˆ”“ÕHOOYK™[˜ÛÙ[™ÏÝœ\œÙPœ›ÝNœ\œÙ_J]ØZ]\Þ[˜È[˜Ý[ÛŠ
^Ü™]\›ˆ×ß
×ÏX]ØZ]—Ê™]ÈÛÜšÙ\Š™]ÈT“
‹œ
Ü‹JÍÊK‹˜ŠKÝ\N›ÚYJJK×Ê_J
KŠKX]ØZ]
Ê
KÜÚ[]šX]\ÎšKØØ[N›ËZ[Ž›X^šÚ^™N˜ËÙ™œÙ]K[TÚ[Î™JKOY‹˜]šX]PY™™\œËÏ[™]ÈË“ÖNÜ™]\›ˆØš™XÝšÙ^\ÊJK™›Ü‘XXÚ

OžØÛÛœÝO[VÝK˜Y™™\ŽÚYŠœÜÚ][ÛˆOO]
YËœÙ]]šX]JœÜÚ][Ûˆ‹™]ÈË•Ê™]È›Ø]Ì\œ˜^JJKÊJNÙ[ÙHYŠœ™Ø˜HOO]
YËœÙ]]šX]J˜ÛÛÜˆ‹™]ÈË•Ê™]ÈZ[\œ˜^JJKL
JNÙ[ÙHYŠ““Ô“PSOO]
YËœÙ]]šX]J››Ü›X[‹™]ÈË•Ê™]È›Ø]Ì\œ˜^JJKÊJNÙ[ÙHYŠ’S‘PÑTÈOO]
^ØÛÛœÝ[™]ÈË•Ê™]ÈZ[\œ˜^JJK
NÝ››Ü›X[^™YHLËœÙ]]šX]Jš[™XÙ\È‹
_Y[Ù^ØÛÛœÝ[™]ÈË•Ê™]È›Ø]Ì\œ˜^JJKJK[VÝK˜]šX]NÜ‹œÝ™YO^ÛÙ™œÙ]›VÝK›Ù™œÙ]ØØ[N›VÝKœØØ[K™XÚ\ÙPY™™\Ž›VÝKœ™XÚ\ÙPY™™\‹˜[™ÙN›‹œ˜[™Ù_KËœÙ]]šX]JŠ__JJKË˜ÛÛ\]P›Ý[™[™Ð›Þ

KÙÙ[ÛY]žN™Ë[œÚ]N™‹™[œÚ]___K—ÏXÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^ÚYŠ]™š[J]›ÝÈ™]È\œ›ÜŠ“™]ÈÝ™YL”ÛÝ\˜ÙNˆš[H\È™\]Z\™YŠNÜÝ\\Š
K\Ë™š[O]™š[K\Ë™™]Ú\\˜K˜\œ˜^PY™™\‹\ËÚ[”™XYOJ›Y]Y]OÔ›ÛZ\ÙKœ™\ÛÛ™J›Y]Y]JNœ˜KšœÛÛŠ	Ý\Ë\›KÉÝ\Ë™š[_X\Ë›™]ÛÜšÓÜ[ÛœÊJK[Š
OŠ\Ë›Y]Y]O]\ËœÚ[]šX]\Ï]˜]šX]\Ë\Ë˜˜\Ù]\›X	Ý\Ë\›X\Ë™^[œÚ[ÛH˜š[ˆ‹\Ëœ\œÙ\S—Ëœ\œÙK
JJ__KWÏXÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÐÌÑ[\ÔÛÝ\˜ÙOHL\Ë˜˜\ÙU\›]\Ë\›œÛXÙJ\Ë\››\Ý[™^ÙŠ‹ÈŠJÌJK\ËÚ[”™XYO\˜KšœÛÛŠ\Ë\›\Ë›™]ÛÜšÓÜ[ÛœÊ__K×ÏXÛ\ÜÈ^[™ÈWÞØÛÛœÝXÝÜŠ
^ÚYŠ]˜XØÙ\ÜÕÚÙ[Š]›ÝÈ™]È\œ›ÜŠ“™]ÈÑ[\È[ÛˆÛÝ\˜ÙNˆXØÙ\ÜÈÚÙ[ˆ\È™\]Z\™YŠNÚYŠ]˜\ÜÙ]Y
]›ÝÈ™]È\œ›ÜŠ“™]ÈÑ[\È[ÛˆÛÝ\˜ÙNˆ\ÜÙ]Y\È™\]Z\™YŠNÝ\›XÎ‹ËØ\K˜Ù\Ú][K˜ÛÛKÝŒKØ\ÜÙ]ËÉÝ˜\ÜÙ]YKÙ[™Ú[ØXØÙ\Ü×ÝÚÙ[IÝ˜XØÙ\ÜÕÚÙ[ŸXÝ\\Š
K\Ëš\ÐÌÑ[\Ò[Û”ÛÝ\˜ÙOHL\Ë˜XØÙ\ÜÕÚÙ[]˜XØÙ\ÜÕÚÙ[‹\Ë˜\ÜÙ]Y]˜\ÜÙ]Y\ËÚ[”™XYO\˜KšœÛÛŠ\›\Ë›™]ÛÜšÓÜ[ÛœÊK[Š
OžÚYŠŒÑSTÈˆOO]\J]›ÝÈ™]È\œ›ÜŠ	Ý\_H]\Ù]Èœ›ÛHÙ\Ú][H[Ûˆ\™H›ÝÝ\ÜYÚ]ÌÑ[\Ò[Û”ÛÝ\˜ÙKˆÛ›HÑ[\È]\Ù]È\™HÝ\ÜY˜
NÜ™]\›ˆ\Ë\›]\›\Ë˜˜\ÙU\›]\›œÛXÙJ\››\Ý[™^ÙŠ‹ÈŠJÌJK\Ë›™]ÛÜšÓÜ[ÛœËšXY\œÏ^ßK\Ë›™]ÛÜšÓÜ[ÛœËšXY\œË]]Üš^˜][ÛX™X\™\ˆ	Ý˜XØÙ\ÜÕÚÙ[ŸX\Ë˜]šX][Û]˜]šX][ÛœË˜KšœÛÛŠ\Ë\›\Ë›™]ÛÜšÓÜ[ÛœÊ_JJ__NÙ[˜Ý[Ûˆ—Ê
^ÚYŠ]
\™]\›ˆ[ÚYŠ˜ÛÛ[	‰˜ÛÛ[\šJ\™]\›ˆ™]ÈT“ÙX\˜Ú\˜[\Ê˜ÛÛ[\šKœÛXÙJ˜ÛÛ[\šKš[™^ÙŠÈŠJÌJJK™Ù]
œÙ\ÜÚ[ÛˆŠNÚYŠ˜Ú[™[‰‰˜Ú[™[‹›[™ÝŒ
Y›ÜŠÛÛœÝHÙˆ˜Ú[™[Š^ØÛÛœÝ^—ÊJNÚYŠ
\™]\›ˆ\™]\›ˆ[XÛÛœÝ×ÏXÛ\ÜÈ^[™ÈWÞØÛÛœÝXÝÜŠ
^ÚYŠ]šÙ^J]›ÝÈ™]È\œ›ÜŠ–ÐÌÑ[\ÑÛÛÙÛTÛÝ\˜ÙWNˆHTHÙ^H›ÜˆHÛÛÙÛHX\[\ÈTH\È™\]Z\™YŠNÝ\›XÎ‹ËÝ[K™ÛÛÙÛX\\Ë˜ÛÛKÝŒKÌÙ[\ËÜ›ÛÝšœÛÛÚÙ^OIÝšÙ^_XÝ\\Š
K\Ëš\ÐÌÑ[\ÑÛÛÙÛTÛÝ\˜ÙOHL\Ë˜˜\ÙU\›HšÎ‹ËÝ[K™ÛÛÙÛX\\Ë˜ÛÛH‹\ËšÙ^O]šÙ^K\ËÚ[”™XYO\˜KšœÛÛŠ\›\Ë›™]ÛÜšÓÜ[ÛœÊK[Š
OžÚYŠ	‰œ›ÛÝ	‰Š\ËœÙ\ÜÚ[Û’Y^—Êœ›ÛÝ
K[OO]\ËœÙ\ÜÚ[Û’Y
J]›ÝÈ™]È\œ›ÜŠ–ÐÌÑ[\ÑÛÛÙÛTÛÝ\˜ÙWNˆØ[››Ýš[™Ù\ÜÚ[Û’Yœ›ÛHH[\Ù]Ú[H]\ÈX[™]ÜžHÈ™\]Y\Ý[\ËˆŠNÜ™]\›ˆJJ_YÙ][U\›

^ØÛÛœÝOXÙ^OIÝ\ËšÙ^_IœÙ\ÜÚ[ÛIÝ\ËœÙ\ÜÚ[Û’YXÜ™]\›‹×ËË\Ý

OØ	ÝI‰Ù_X˜	ÝOÉÙ_X_KWÏXÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÓÑÐÌÑ[\ÔÛÝ\˜ÙOHL_K—ÏXÛ\ÜÈ^[™ÈWÞØÛÛœÝXÝÜŠ
^ÚYŠ]˜XØÙ\ÜÕÚÙ[Š]›ÝÈ™]È\œ›ÜŠ–ÓÑÐÌÑ[\Ò[Û”ÛÝ\˜ÙWNˆXØÙ\ÜÕÚÙ[ˆ\È™\]Z\™YŠNÚYŠ]˜\ÜÙ]Y
]›ÝÈ™]È\œ›ÜŠ–ÓÑÐÌÑ[\Ò[Û”ÛÝ\˜ÙWNˆ\ÜÙ]Y\È™\]Z\™YŠNÝ\›XÎ‹ËØ\K˜Ù\Ú][K˜ÛÛKÝŒKØ\ÜÙ]ËÉÝ˜\ÜÙ]YKÙ[™Ú[ØXØÙ\Ü×ÝÚÙ[IÝ˜XØÙ\ÜÕÚÙ[ŸXÝ\\Š
K\Ëš\ÓÑÐÌÑ[\Ò[Û”ÛÝ\˜ÙOHL\Ë˜XØÙ\ÜÕÚÙ[]˜XØÙ\ÜÕÚÙ[‹\Ë˜\ÜÙ]Y]˜\ÜÙ]Y_K—ÏXÛ\ÜÈ^[™ÈWÞØÛÛœÝXÝÜŠ
^ÚYŠ]šÙ^J]›ÝÈ™]È\œ›ÜŠ–ÓÑÐÌÑ[\ÑÛÛÙÛTÛÝ\˜ÙWNˆHTHÙ^H›ÜˆHÛÛÙÛHX\[\ÈTH\È™\]Z\™YŠNÝ\›XÎ‹ËÝ[K™ÛÛÙÛX\\Ë˜ÛÛKÝŒKÌÙ[\ËÜ›ÛÝšœÛÛÚÙ^OIÝšÙ^_XÝ\\Š
K\Ëš\ÓÑÐÌÑ[\ÑÛÛÙÛTÛÝ\˜ÙOHL\ËšÙ^O]šÙ^__NÝ˜\ˆÏ\ŠMLŽ
NÛ]WË×ÎØ\Þ[˜È[˜Ý[ÛˆWÊ
^Ü™]\›ˆ×ß
×ÏX]ØZ]—Ê™]ÈÛÜšÙ\Š™]ÈT“
‹œ
Ü‹JÍLŠK‹˜ŠKÝ\N›ÚYJJKWÉ‰•×Ë›^”\™ŠWÊK×Ê_Y[˜Ý[ÛˆÊ
^ØÛÛœÝO[™]ÈË“ÖK[™]ÈË•ÊœÜÚ][Û‹ÊNÙKœÙ]]šX]JœÜÚ][Ûˆ‹ŠNØÛÛœÝ[™]ÈË•Êš[[œÚ]KJNÙKœÙ]]šX]Jš[[œÚ]H‹ŠNØÛÛœÝO[™]ÈË•Êœ™]\›“[X™\‹JNÙKœÙ]]šX]Jœ™]\›“[X™\ˆ‹JNØÛÛœÝÏ[™]ÈË•Ê›[X™\“Ù”™]\›œËJNÙKœÙ]]šX]J›[X™\“Ù”™]\›œÈ‹ÊNØÛÛœÝO[™]ÈË•Ê˜Û\ÜÚYšXØ][Û‹JNÙKœÙ]]šX]J˜Û\ÜÚYšXØ][Ûˆ‹JNØÛÛœÝ[™]ÈË•ÊœÚ[ÛÝ\˜ÙRQJNÚYŠKœÙ]]šX]JœÚ[ÛÝ\˜ÙRQ‹
K˜ÛÛÜŠ^ØÛÛœÝ[™]ÈË•Ê˜ÛÛÜ‹L
NÙKœÙ]]šX]J˜ÛÛÜˆ‹Š_XÛÛœÝÏ[™]ÈË•ÊœØØ[[™ÛKJNÜ™]\›ˆKœÙ]]šX]JœØØ[[™ÛH‹ÊKK\Ù\‘]K›ÜšYÚ[J™]ÈË”L
K™œ›ÛP\œ˜^J›ÜšYÚ[ŠK_XÛÛœÝ	Ï^Ù[˜X›S^”\™Š
^ÚYŠ]
]›ÝÈ™]È\œ›ÜŠ”]È^‹\\™ˆ\ÈX[™]ÜžHŠNÜWÏ]K\›Z[˜]J
^ØÛÛœÝU×ÎÜ™]\›ˆ×Ï]›ÚYË\›Z[˜]J
_K\Þ[˜È\œÙPÚ[šÊ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNØÛÛœÝX]ØZ]WÊ
KVÊ
]ØZ]‹œ\œÙPÚ[šÊÊ
KÜÚ[ÛÝ[™Kš[‹œÚ[ÛÝ[XY\Ž™Kš[‹šXY\‹XŽ™K™X‹ÛÛÜ‘\™Kš[‹˜ÛÛÜ‘\JJK˜]šX]\ÊNÜ™]\›ˆ‹˜ÛÛ\]P›Ý[™[™Ð›Þ

KŸK\Þ[˜È\œÙJ
^Û]OX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNÙK›Ý]ËœÚÚ\	‰˜ÛÛœÛÛKØ\›Š•Ø\›š[™ÎˆÜ[ÛœÈ	ÜÚÚ\	È›ÝÝ\ÜY[ž[[Ü™HŠNØÛÛœÝYKš[‹X]ØZ]WÊ
KOX]ØZ]‹œ\œÙQš[JÊ
KØÛÛÜ‘\œË˜ÛÛÜ‘\JKÏVÊK˜]šX]\ÊNÜ™]\›ˆË\Ù\‘]KšXY\ZKšXY\‹Ë˜ÛÛ\]P›Ý[™[™Ð›Þ

Kß_K—ÏXÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\Ñ[Ú[™TÚ[[TÛÝ\˜ÙOHL\Ë˜ÛÛÜ‘\]˜ÛÛÜ‘\\Ë\›]\Ë\›œ™\XÙJ‹Ù\šœÛÛˆ‹ˆŠK\ËÚ[”™XYO\˜KšœÛÛŠ	Ý\Ë\›KÙ\šœÛÛ˜\Ë›™]ÛÜšÓÜ[ÛœÊK[Š
OžÚYŠ\Ëœ\œÙOH›\Þš\OO]™]U\OÉËœ\œÙN•Ëœ\œÙK\Ë™^[œÚ[ÛH›\Þš\OO]™]U\OÈ›^ˆŽˆ˜š[ˆ‹œÜœÊ^ÚYŠœÜœË˜]]Üš]I‰œÜœËšÜš^›Û[
]\Ë˜ÜœÏX	ÝœÜœË˜]]Üš]_N‰ÝœÜœËšÜš^›Û[XËK™YœÊ\Ë˜ÜœÊ_ËK™YœÊ\Ë˜ÜœËœÜœËÚÝ
NÙ[ÙHYŠœÜœËÚÝ
^ÒËK™YœÊ[šÛ›ÝÛˆ‹œÜœËÚÝ
NØÛÛœÝORËK™YœÊ[šÛ›ÝÛˆŠNÝ\Ë˜ÜœÏYK]_K›˜[YK\Ë˜ÜœÈ[ˆËK™YœßËK™YœÊ\Ë˜ÜœËJ_]œÜœË™\XØ[	‰œÜœË™\XØ[OO]œÜœËšÜš^›Û[	‰˜ÛÛœÛÛKØ\›Š‘[Ú[™TÚ[[TÛÝ\˜ÙNˆ™\XØ[ÛÛÜ™[˜]\ÈÞ\Ý[HÛÙH\È›ÝY]Ý\ÜYˆŠ_\™]\›ˆ\Ë˜›Ý[™ÐÛÛ™›Ü›Z[™Ï]˜›Ý[™ÐÛÛ™›Ü›Z[™Ë\Ë˜›Ý[™Ï]˜›Ý[™Ë\ËœÜ[]œÜ[‹\ßJJK\Ë™™]Ú\\˜K˜\œ˜^PY™™\Ÿ_K×ÏXÛ\ÜÈ^[™ÈØ^ØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ëš\ÐÛÜÔÛÝ\˜ÙOHL\Ëœ\œÙ\IËœ\œÙPÚ[šË\Ë™™]Ú\\˜K˜\œ˜^PY™™\‹\Ë˜ÛÛÜ‘\]˜ÛÛÜ‘\ÏÌM‹\ËÚ[”™XYOX\Þ[˜È[˜Ý[ÛŠ
^ØÛÛœÝO\—Ë“\Ë’XY\‹œ\œÙJ]ØZ]
—Ë“\ËÛÛœÝ[Ë›Z[’XY\“[™Ý
JKX]ØZ]—Ë“\Ë•›‹Ø[ÊJK\—Ë“\Ë•›‹™š[™
‹˜ÛÜÈ‹JNÚYŠ[Š\™]\›ˆ›ÛZ\ÙKœ™Z™XÝ
ÓÔÈ[™›È“ˆ\È™\]Z\™YŠNØÛÛœÝO\—Ë’[™›Ëœ\œÙJ]ØZ]—Ë“\Ë•›‹™™]Ú
ŠJKÏ\—Ë“\Ë•›‹™š[™
‹“TÑ—Ô›Ú™XÝ[Ûˆ‹ŒLLŠNÚYŠ\Ê\™]\›ˆ›ÛZ\ÙKœ™Z™XÝ
“TÌKÒÕ“ˆ\È™\]Z\™YŠNØÛÛœÝÏ\—Ëš[˜\žKÐÔÝš[™Ê]ØZ]—Ë“\Ë•›‹™™]Ú
ÊJKO\—Ë“\Ë•›‹™š[™
‹“TÑ—ÔÜXÈ‹
NÜ™]\›žÚXY\Ž™K[™›ÎšKÚÝ›ËXŽ˜OÜ—Ë“\Ë‘^˜Pž]\Ëœ\œÙJ]ØZ]—Ë“\Ë•›‹™™]Ú
JJN–×__J

JOO\Ë™™]Ú\Š\Ë\›Ë‹‹\Ë›™]ÛÜšÓÜ[ÛœËXY\œÎžË‹‹\Ë›™]ÛÜšÓÜ[ÛœËšXY\œË˜[™ÙN˜ž]\ÏIÝKIÙKL_X_JK[Š
O›™]ÈZ[\œ˜^J
JJJJK[Š
OžÛ]NÝ\ËšXY\]šXY\‹\Ëš[™›Ï]š[™›Ë\Ë™X]™X‹ËK™YœÊ[šÛ›ÝÛˆ‹ÚÝ
KÓÓTÐÔÈOORËK™YœÊ[šÛ›ÝÛˆŠK\OÊÛÛœÛÛKØ\›ŠÛÜÔÛÝ\˜ÙNˆÛÛ\Ý[™ÛÛÜ™[˜]HÞ\Ý[H\È›ÝY]Ý\ÜYˆŠKORËK™YœÊ[šÛ›ÝÛˆŠK”“ÒÔÊN™ORËK™YœÊ[šÛ›ÝÛˆŠK\Ë˜ÜœÏYK]_K›˜[Y_‘TÑÎÌˆ‹\Ë˜ÜœÈ[ˆËK™YœßËK™YœÊ\Ë˜ÜœËJNØÛÛœÝ[™]ÈË“”›ŽÜ™]\›ˆ‹›Z[‹™œ›ÛP\œ˜^J\Ëš[™›Ë˜ÝX™K
K‹›X^™œ›ÛP\œ˜^J\Ëš[™›Ë˜ÝX™KÊK\Ë™^[ZKž”‹™œ›ÛP›ÞÊ\Ë˜ÜœËŠK\ßJJ__NÝ˜\ˆ—ËÏH™Y›]K\˜]È‹]Ï\Ù[‹‘XÛÛ\™\ÜÚ[Û”Ý™X[NÝž^Û™]È]ÊÊK—ÏX\Þ[˜ÈOžÛ]O[™]È]ÊÊKYKÜš]X›K™Ù]Üš]\Š
KYKœ™XYX›K™Ù]™XY\Š
NÜ‹Üš]J
K‹˜ÛÜÙJ
NÛ]KËÏV×KOLLÙ›ÜŠÈJÏX]ØZ]‹œ™XY

JK™Û™NÊZO\Ë˜[YKËœ\Ú
JKJÏZK›[™ÝÜ™]\›ˆË›[™ÝLOÊO[™]ÈZ[\œ˜^JJKË›X\

OžÚKœÙ]

K
Ï]›[™ÝJJKJN›ÖÌ__XØ]Úß]˜\ˆÏ[™]È^XÛÙ\‹Ï]OžÝ›ÝÈ™]È\œ›ÜŠ˜]][žš\ˆŠÝ
_K]Ï]OœË™XÛÙJ
NØÛÛœÝÝÏKËŠ×ŠÚ™ŸœÛÛŸšŸÜÊIÚKÝÏYÛØ˜[\Ë•T“Ø\Þ[˜È[˜Ý[Ûˆ]ÊJ^ØÛÛœÝJ
JOOžÚYŠYJ\™]\›ˆØÛÛœÝ[™]ÈÝÊ
NÜ™]\›ˆ‹œ]˜[YOX	Ü‹œ]˜[Y_K‰Ù_X‹š™YŸJJJKHœšˆOOY_˜ÜÈOOYNÝž^ØÛÛœÝX]ØZ]™]Ú
ŠNÚYŠœÝ]\ÏŒÎNJ]›ÝÈ™]È\œ›ÜŠœÝ]\Õ^
NÚYŠŠ\™]\›ˆ^

NØÛÛœÝOX]ØZ]˜\œ˜^PY™™\Š
NÜ™]\›ˆ™]È]UšY]ÊJ_XØ]Ú

^ÚYŠŸ™™ˆOOYJ\™]\›ˆLNÝ›ÝÈ_Y[˜Ý[ÛˆÊ
^Û]OLLNØÛÛœÝ]›[™ÝÛ]KÎØÛÛœÝÏVÝÌVÌKÌVÌWKÌVÌKÌVÌWWNÙ›ÜŠÜŽÊZO\ßÌKÏ]Ü—KJÏJÖÌKZVÌJJŠÖÌWJÚVÌWJKŠÊËÖÌOÖÌI‰ŠÖÌO\ÖÌJKÖÌWOÖÌWI‰ŠÖÌWO\ÖÌWJKÖÌO›ÖÌ—I‰ŠÖÌ—O\ÖÌJKÖÌWO›ÖÌ×I‰ŠÖÌ×O\ÖÌWJNÜ™]\›žÜš[™ÎÛØÚÕÚ\ÙN™OŒ˜›Þ›ËÚ[™[Ž–×__Y[˜Ý[ÛˆÝÊJ^Ü™]\›ˆJ˜˜›ÞÌO™K˜˜›ÞÌ_˜˜›ÞÌWO™K˜˜›ÞÌW_˜˜›ÞÌ—OK˜˜›ÞÌ—_˜˜›ÞÌ×OK˜˜›ÞÌ×J_]]Ëœ›ÝÝ\Kœ\œÙTÚ[Y[˜Ý[ÛŠ
^Ü™]\›žÝ\Nˆ”Ú[‹ÛÛÜ™[˜]\Î\Ëœ\œÙPÛÛÜ™

__K]Ëœ›ÝÝ\Kœ\œÙV”Ú[Y[˜Ý[ÛŠ
^ØÛÛœÝO]\Ëœ\œÙTÚ[

NÜ™]\›ˆK˜ÛÛÜ™[˜]\Ëœ\Ú
™Ù]›Ø]
M‹L
JK_K]Ëœ›ÝÝ\Kœ\œÙTÚ[\œ˜^OY[˜Ý[ÛŠKŠ^ØÛÛœÝV×NÛ]OLÙ›ÜŠÚOŽÊ[‹œ\Ú
\Ëœ\œÙPÛÛÜ™
JJKJÏLM‹JÊÎÜ™]\›ˆŸK]Ëœ›ÝÝ\Kœ\œÙV”Ú[\œ˜^OY[˜Ý[ÛŠK‹Š^Û]OLÙ›ÜŠÚOŽÊ[–ÚWKœ\Ú
™Ù]›Ø]
KL
JKJÊËJÏNÜ™]\›ˆŸK]Ëœ›ÝÝ\Kœ\œÙP\œ˜^QÜ›Ý\Y[˜Ý[ÛŠK‹‹J^ØÛÛœÝÏV×NÛ]ËKLÏLÙ›ÜŠÛŽÊ[
ÊËŠÏMÏXËÏ[OO[ÚN™Ù][ÌŠ‹L
KOXË[ËI‰ŠËœ\Ú
\Ëœ\œÙTÚ[\œ˜^JKJJKJÏXO
NÜ™]\›ˆßK]Ëœ›ÝÝ\Kœ\œÙV\œ˜^QÜ›Ý\Y[˜Ý[ÛŠK‹Š^Û]OLÙ›ÜŠÚOŽÊ[–ÚWO]\Ëœ\œÙV”Ú[\œ˜^JK–ÚWK›[™Ý–ÚWJKJÏ[–ÚWK›[™ÝËJÊÎÜ™]\›ˆŸK]Ëœ›ÝÝ\Kœ\œÙS][TÚ[Y[˜Ý[ÛŠ
^ØÛÛœÝO^ßK]™Ù][ÌŠÌ‹L
NÚYŠ\Š\™]\›ˆ[ØÛÛœÝ]\Ëœ\œÙPÛÛÜ™

KO]\Ëœ\œÙPÛÛÜ™
MŠNÜ™]\›ˆK˜˜›ÞVÛ–ÌK–ÌWKVÌKVÌWWKOOO\ÊK\OH”Ú[‹K˜ÛÛÜ™[˜]\Ï]\Ëœ\œÙPÛÛÜ™
ÍŠJNŠK\OH“][TÚ[‹K˜ÛÛÜ™[˜]\Ï]\Ëœ\œÙTÚ[\œ˜^JÍ‹ŠJK_K]Ëœ›ÝÝ\Kœ\œÙV“][TÚ[Y[˜Ý[ÛŠ
^ØÛÛœÝO]\Ëœ\œÙS][TÚ[

NÚYŠYJ\™]\›ˆ[Û]ŽÚYŠ”Ú[OOYK\J\™]\›ˆK˜ÛÛÜ™[˜]\Ëœ\Ú
™Ù]›Ø]
Ì‹L
JKNÜYK˜ÛÛÜ™[˜]\Ë›[™ÝØÛÛœÝMLŠÊ
NÜ™]\›ˆK˜ÛÛÜ™[˜]\Ï]\Ëœ\œÙV”Ú[\œ˜^J‹‹K˜ÛÛÜ™[˜]\ÊK_K]Ëœ›ÝÝ\Kœ\œÙTÛ[[™OY[˜Ý[ÛŠ
^ØÛÛœÝO^ßK]™Ù][ÌŠÌ‹L
NÚYŠ\Š\™]\›ˆ[ØÛÛœÝ]\Ëœ\œÙPÛÛÜ™

KO]\Ëœ\œÙPÛÛÜ™
MŠNÙK˜˜›ÞVÛ–ÌK–ÌWKVÌKVÌWWNØÛÛœÝÏ]™Ù][ÌŠÍ‹L
NÛ]ËNÜ™]\›ˆOOO\ÊK\OH“[™TÝš[™È‹ÏMK˜ÛÛÜ™[˜]\Ï]\Ëœ\œÙTÚ[\œ˜^JËÊJNŠK\OH“][S[™TÝš[™È‹ÏM
ÊŠKOMK˜ÛÛÜ™[˜]\Ï]\Ëœ\œÙP\œ˜^QÜ›Ý\
Ë‹ÊJK_K]Ëœ›ÝÝ\Kœ\œÙV”Û[[™OY[˜Ý[ÛŠ
^ØÛÛœÝO]\Ëœ\œÙTÛ[[™J
NÚYŠYJ\™]\›ˆ[ØÛÛœÝYK˜ÛÛÜ™[˜]\Ë›[™ÝÛ]ŽÚYŠ“[™TÝš[™ÈOOYK\J\™]\›ˆMŒ
Ê
KK˜ÛÛÜ™[˜]\Ï]\Ëœ\œÙV”Ú[\œ˜^J‹‹K˜ÛÛÜ™[˜]\ÊKNÜ™]\›ˆMMŠÊK˜ÛÛÜ™[˜]\Ëœ™YXÙJ
[˜Ý[ÛŠJ^Ü™]\›ˆ
ÙK›[™ÝJK
O
JÊŠKK˜ÛÛÜ™[˜]\Ï]\Ëœ\œÙV\œ˜^QÜ›Ý\
‹‹K˜ÛÛÜ™[˜]\ÊK_K]Ëœ›ÝÝ\KœÛQ[˜ÜÏY[˜Ý[ÛŠ
^Ü™]\›ˆÈ“[™TÝš[™ÈOO]\OÊ\OH”ÛYÛÛˆ‹˜ÛÛÜ™[˜]\ÏVÝ˜ÛÛÜ™[˜]\×K
NŠ˜ÛÛÜ™[˜]\ÏY[˜Ý[ÛŠ
^ØÛÛœÝOV×KV×NÙ›ÜŠÛÛœÝˆÙˆ
^ØÛÛœÝ[ÊŠNÝ˜ÛØÚÕÚ\ÙOÙKœ\Ú

Nœ‹œ\Ú

_Y›ÜŠÛÛœÝÙˆŠY›ÜŠÛÛœÝˆÙˆJZYŠÝÊ‹
J^Ü‹˜Ú[™[‹œ\Ú
œš[™ÊNØœ™XZßXÛÛœÝV×NÙ›ÜŠÛÛœÝÙˆJ[‹œ\Ú
Ýœš[™×K˜ÛÛ˜Ø]
˜Ú[™[ŠJNÜ™]\›ˆŸJ˜ÛÛÜ™[˜]\ÊKOOO]˜ÛÛÜ™[˜]\Ë›[™ÝÊ\OH”ÛYÛÛˆ‹˜ÛÛÜ™[˜]\Ï]˜ÛÛÜ™[˜]\ÖÌK
NŠ\OH“][TÛYÛÛˆ‹
JNK]Ëœ›ÝÝ\Kœ\œÙTÛYÛÛY[˜Ý[ÛŠ
^Ü™]\›ˆ\ËœÛQ[˜ÜÊ\Ëœ\œÙTÛ[[™J
J_K]Ëœ›ÝÝ\Kœ\œÙV”ÛYÛÛY[˜Ý[ÛŠ
^Ü™]\›ˆ\ËœÛQ[˜ÜÊ\Ëœ\œÙV”Û[[™J
J_NØÛÛœÝÏ^ÌNˆœ\œÙTÚ[‹Îˆœ\œÙTÛ[[™H‹Nˆœ\œÙTÛYÛÛˆ‹ˆœ\œÙS][TÚ[‹LNˆœ\œÙV”Ú[‹LÎˆœ\œÙV”Û[[™H‹MNˆœ\œÙV”ÛYÛÛˆ‹Nˆœ\œÙV“][TÚ[ŸNÙ[˜Ý[Ûˆ]ÊJ^ÚYŠJ\È[œÝ[˜Ù[Ùˆ]ÊJ\™]\›ˆ™]È]ÊJNÝ\Ë˜Y™™\]\ËšXY\œÏ]\Ëœ\œÙRXY\Š
K\ËœÚ[˜ÜÊJK\Ëœ›ÝÜÏ]\Ë™Ù]›ÝÜÊ
_Y[˜Ý[ÛˆÊJ^Ü™]\›ˆ™]È]ÊJKœ›ÝÜß]]Ëœ›ÝÝ\KœÚ[˜ÜÏY[˜Ý[ÛŠ
^Û]O]\ËšXY\œËœÚÛÙNÚYŠOŒŒ	‰ŠKOLŒ
KJH[ˆÊJ]›ÝÈ™]È\œ›ÜŠHÛ‰ÝÛ›ÝÈÚ\H‰Ù_H˜
NÝ˜\ˆŽÝ\Ëœ\œÙQ[˜Ï]\ÖÚÖÙWWK\Ëœ\œÙPÛÛÜ™J]
OÙ[˜Ý[ÛŠJ^ØÛÛœÝVÝ™Ù]›Ø]
KL
K™Ù]›Ø]
JÎL
WNÜ™]\›ˆ‹š[™\œÙJŠ_N™[˜Ý[ÛŠJ^Ü™]\›–Ý™Ù]›Ø]
KL
K™Ù]›Ø]
JÎL
W__K]Ëœ›ÝÝ\K™Ù]ÚÛÙOY[˜Ý[ÛŠ
^Ü™]\›ˆ\Ëœ\œÙRXY\Š
KœÚÛÙ_K]Ëœ›ÝÝ\Kœ\œÙRXY\Y[˜Ý[ÛŠ
^ØÛÛœÝ]\Ë˜Y™™\ŽÜ™]\›žÛ[™Ý™Ù][ÌŠ
OK™\œÚ[ÛŽ™Ù][ÌŠŽL
KÚÛÙN™Ù][ÌŠÌ‹L
K˜›Þ–Ý™Ù]›Ø]
Í‹L
K™Ù]›Ø]
L
K™Ù]›Ø]
L‹L
K™Ù]›Ø]
ŒL
W__K]Ëœ›ÝÝ\K™Ù]›ÝÜÏY[˜Ý[ÛŠ
^Û]LLØÛÛœÝO]\Ë˜Y™™\‹˜ž]S[™ÝNV×NÛ]ŽÙ›ÜŠÝYI‰Š]\Ë™Ù]›ÝÊ
KŠNÊ]
ÏN
Ï[‹›[‹‹\OÜ‹œ\Ú
\Ëœ\œÙQ[˜Ê‹™]JJNœ‹œ\Ú
[
NÜ™]\›ˆŸK]Ëœ›ÝÝ\K™Ù]›ÝÏY[˜Ý[ÛŠ
^ØÛÛœÝO]\Ë˜Y™™\‹™Ù][ÌŠ
K]\Ë˜Y™™\‹™Ù][ÌŠ
Í
ONÜ™]\›ˆOO\ÞÚY™K[Žœ‹\NŒN
ÜŠÎ\Ë˜Y™™\‹˜ž]S[™ÝÝ›ÚYžÚY™K[Žœ‹]N›™]È]UšY]Ê\Ë˜Y™™\‹˜Y™™\‹\Ë˜Y™™\‹˜ž]SÙ™œÙ]
Ý
ÌL‹‹M
K\N\Ë˜Y™™\‹™Ù][ÌŠ
ÎL
__NÝ˜\ˆÏK×ŠÎS”ÒWÊOÊ
ÊIÛNÙ[˜Ý[ÛˆÊJ^ÚYŠ]
\™]\›ˆŽÝž^Û™]È^XÛÙ\Šš[J
J_XØ]Ú
J^Ý˜\ˆ\Ë™^XÊ
NÜ™]\›ˆ‰‰ˆYOÙÊÚ[™ÝÜËHŠÜ–ÌWKL
NŠ]›ÚYŠ_\™]\›ˆŽÙ[˜Ý[ÛˆŠJ^Ý˜\ˆ[™]È^XÛÙ\Š›ÚY
NÜ™]\›Š‹™XÛÙJKÜÝ™X[NˆLJJÜ‹™XÛÙJ
JKœ™\XÙJ×ÙËˆŠKš[J
__Y[˜Ý[Ûˆ]ÊK‹‹J^Ý˜\ˆÏZJ™]ÈZ[\œ˜^J˜Y™™\‹œÛXÙJ˜ž]SÙ™œÙ]
ÙK˜ž]SÙ™œÙ]
ÙJÜŠJJNÜÝÚ]Ú
Š^ØØ\ÙH“ˆŽ˜Ø\ÙH‘ˆŽ˜Ø\ÙH“ÈŽœ™]\›ˆ\œÙQ›Ø]
ËL
NØØ\ÙH‘Žœ™]\›ˆ™]È]JËœÛXÙJ
K\œÙR[
ËœÛXÙJŠKL
KLKËœÛXÙJ‹
JNØØ\ÙH“Žœ™]\›ˆžHOO\ËÓÝÙ\Ø\ÙJ
_OO\ËÓÝÙ\Ø\ÙJ
NÙY˜][œ™]\›ˆß_Y[˜Ý[ÛˆÝÊK‹Š^Ù›ÜŠ˜\ˆKËÏ^ßKOL\‹›[™ÝØOÊZO[]ÊK
Ï\–ØWJK›[‹Ë™]U\KŠKJÏ\Ë›[‹›ÚYOOZI‰ŠÖÜË›˜[YWOZJKJÊÎÜ™]\›ˆßY[˜Ý[Ûˆ]ÊJ^Ù›ÜŠ˜\ˆYÊJKY[˜Ý[ÛŠ
^Ý˜\ˆO^ßNÜ™]\›ˆK›\Ý\]Y[™]È]J™Ù]Z[
JJÌNL™Ù]Z[
ŠK™Ù]Z[
ÊJKKœ™XÛÜ™Ï]™Ù]Z[ÌŠL
KKšXY\“[]™Ù]Z[MŠL
KKœ™XÓ[]™Ù]Z[MŠLL
K_J
KOY[˜Ý[ÛŠKŠ^Ù›ÜŠ˜\ˆV×KOLÌŽÚOI‰Š‹œ\Ú
Û˜[YNœŠ™]ÈZ[\œ˜^J˜Y™™\‹œÛXÙJ˜ž]SÙ™œÙ]
ÚK˜ž]SÙ™œÙ]
ÚJÌLJJJK]U\N”Ýš[™Ë™œ›ÛPÚ\ÛÙJ™Ù]Z[
JÌLJJK[Ž™Ù]Z[
JÌMŠKXÚ[X[™Ù]Z[
JÌMÊ_JKLÈOO]™Ù]Z[
JÌÌŠJNÊZJÏLÌŽÜ™]\›ˆŸJ‹šXY\“[‹LKŠKÏLŠÊK›[™Ý
ÌOJKÏ[‹œ™XÓ[‹O[‹œ™XÛÜ™ËV×NØNÊ[œ\Ú
ÝÊËKŠJKÊÏ[ËKKNÜ™]\›ˆXÛÛœÝ]ÏYÛØ˜[\Ë•T“Ï[™]È^XÛÙ\‹Ï]OžÚYŠ
\™]\›ˆœÝš[™ÈO]\[ÙˆÝÝÊ
_\œ˜^PY™™\‹š\ÕšY]Ê
_Ê
OÝË™XÛÙJ
N›ÚYKÝÏ]OžÚYŠ]
]›ÝÈ™]È\œ›ÜŠ™›Ü™ÛÝÈ\ÜÈY™™\ˆŠNÚYŠÊ
J\™]\›ˆÚYŠÝÊ
J\™]\›ˆ™]È]UšY]Ê
NÚYŠÝÊ˜Y™™\ŠJ\™]\›ˆ™]È]UšY]Ê˜Y™™\‹˜ž]SÙ™œÙ]˜ž]S[™Ý
NÝ›ÝÈ™]È\œ›ÜŠš[˜[YY™™\ˆZÙHØš™XÝŠ_NÙ[˜Ý[ÛˆÝÊ
^Ü™]\›ˆ[œÝ[˜Ù[ÙˆÛØ˜[\Ë\œ˜^PY™™\Ÿ–ÛØš™XÝ\œ˜^PY™™\—HOOSØš™XÝœ›ÝÝ\KÔÝš[™Ë˜Ø[

_Y[˜Ý[ÛˆÊ
^Ü™]\›ˆ[œÝ[˜Ù[ÙˆÛØ˜[\Ë‘]UšY]ß–ÛØš™XÝ]UšY]×HOOSØš™XÝœ›ÝÝ\KÔÝš[™Ë˜Ø[

_XÛÛœÝ]ÏY[˜Ý[ÛŠÝWJ^ØÛÛœÝ^Ý\Nˆ‘™X]\™PÛÛXÝ[Ûˆ‹™X]\™\Î–×_NÛ]LØÛÛœÝO]›[™ÝÙ›ÜŠ_
OV×JNÛNÊ\‹™™X]\™\Ëœ\Ú
Ý\Nˆ‘™X]\™H‹Ù[ÛY]žNÛ—K›Ü\Y\Î™VÛ—_ß_JKŠÊÎÜ™]\›ˆŸKÝÏX\Þ[˜È[˜Ý[ÛŠJ^Û]ŽÝJOžÚYŠ]
]›ÝÈ™]È\œ›ÜŠ™›Ü™ÛÝÈ\ÜÈY™™\ˆŠNÚYŠÝÊ
J\™]\›ˆ™]ÈZ[\œ˜^J
NÚYŠÝÊ˜Y™™\ŠJ\™]\›ˆOOO]–UT×ÔT—ÑSSQS•Ý›™]ÈZ[\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]˜ž]S[™Ý
NÝ›ÝÈ™]È\œ›ÜŠš[˜[YY™™\ˆZÙHØš™XÝŠ_JJ
NØÛÛœÝX]ØZ]
\Þ[˜ÈOžØÛÛœÝO^ßKV×NÙ›ÜŠÛÛœÝˆÙˆ[˜Ý[ÛŠŠOV—Ê^Û]JOžÛ]O]›[™ÝLŒSX]›X^
KMMLM‹ŠNÙ›ÜŠËLHOOJO]›\Ý[™^ÙŠKLJJI‰ŠÍHOO]ÙJÌW_HOO]ÙJÌ—_ˆOO]ÙJÌ×JI‰™OœŽÊNÜ™]\›ˆ_JJ
NËLOOO\‰‰›ÊŠNÛ]JKŠOOœÝX˜\œ˜^JŠÏYKŠÏ[ŠKO[™]È]UšY]Ê˜Y™™\‹˜ž]SÙ™œÙ]
KÏ]OšK™Ù]Z[MŠ
Ü‹L
KÏ]OšK™Ù]Z[ÌŠ
Ü‹L
KO\ÊL
NÙ›ÜŠHOO\Ê
I‰›ÊÊK[ÊMŠNØKKNÊ^Û]O\ÊL
KO\ÊŽ
K\ÊÌ
KÏ\ÊÌŠK[ÊŒ
KO[ÊŠKZ]ÊŠ‹JJKZ]ÊŠÊJK\ŽÜ]K[ŠÌ
ÜÊŠJÜÊŽ
K
KZY[Ùš[[˜[YN™ÛÛ[Y[œ™XYŠ
OOŽ	šOÙJ
NšOÛÊJNKYŸ_J
J\ÝË\Ý
‹™š[[˜[YJI‰œ‹œ\Ú
›ÛZ\ÙKœ™\ÛÛ™J‹œ™XY

JK[Š
O™VÛ‹™š[[˜[YWO]
JJNØ]ØZ]›ÛZ\ÙK˜[
ŠNØÛÛœÝ^ßKO[™]È^XÛÙ\ŽÙ›ÜŠÛÛœÝÝ—[ÙˆØš™XÝ™[šY\ÊJJHœÚOO]œÛXÙJLÊKÓÝÙ\Ø\ÙJ
_™™ˆOO]œÛXÙJLÊKÓÝÙ\Ø\ÙJ
OÛ–ÝO[™]È]UšY]Ê‹˜Y™™\‹‹˜ž]SÙ™œÙ]‹˜ž]S[™Ý
N›–ÝOZK™XÛÙJŠNÜ™]\›ˆŸJJ
KOV×NÙ›ÜŠˆ[ˆOY_×KŠKLOOO\‹š[™^ÙŠ—×ÓPPÓÔÖŠI‰Š‹œÚOO\‹œÛXÙJM
KÓÝÙ\Ø\ÙJ
OÊKœ\Ú
‹œÛXÙJM
JK–Ü‹œÛXÙJLÊJÜ‹œÛXÙJLÊKÓÝÙ\Ø\ÙJ
WO[–Ü—JNˆ‹œšˆOO\‹œÛXÙJM
KÓÝÙ\Ø\ÙJ
OÛ–Ü‹œÛXÙJLÊJÜ‹œÛXÙJLÊKÓÝÙ\Ø\ÙJ
WOJËJJ–Ü—JNˆ‹šœÛÛˆOO\‹œÛXÙJMJKÓÝÙ\Ø\ÙJ
_Kš[™^ÙŠ‹œÜ]
‹ˆŠKœÜ

JO‹LOÚKœ\Ú
‹œÛXÙJLÊJÜ‹œÛXÙJLÊKÓÝÙ\Ø\ÙJ
JNˆ‹™™ˆˆOO\‹œÛXÙJM
KÓÝÙ\Ø\ÙJ
I‰ˆ‹˜ÜÈˆOO\‹œÛXÙJM
KÓÝÙ\Ø\ÙJ
_
–Ü‹œÛXÙJLÊJÜ‹œÛXÙJLÊKÓÝÙ\Ø\ÙJ
WO[–Ü—JJNÚYŠZK›[™Ý
]›ÝÈ™]È\œ›ÜŠ››È^Y\œÈ›Ý[™ÈŠNØÛÛœÝÏZK›X\

[˜Ý[ÛŠ
^Û]‹NØÛÛœÝÏ]›\Ý[™^ÙŠ‹ˆŠNÜ™]\›ˆÏ‹LI‰œÛXÙJÊKš[™^ÙŠšœÛÛˆŠO‹LOÊR”ÓÓ‹œ\œÙJ–ÝJK‹™š[S˜[YO]œÛXÙJÊJN™Kš[™^ÙŠœÛXÙJÊÌJJO‹LOÊ[–ÝK‹™š[S˜[YO]
NŠ–Ý
È‹™™ˆ—I‰ŠOP]Ê–Ý
È‹™™ˆ—K–Ý
È‹˜ÜÈ—JJKQ]ÊÙÊ–Ý
È‹œÚ—K–Ý
È‹œšˆ—JKWJK‹™š[S˜[YO]
KŸJJNÜ™]\›ˆOOO\Ë›[™ÝÜÖÌNœßK]ÏX\Þ[˜ÈOžØÛÛœÝOX]ØZ]›ÛZ\ÙK˜[
Ø]ÊœÚŠK]ÊœšˆŠWJNÛ]HLNÝž^ÙVÌWI‰ŠJËJJVÌWJJ_XØ]Ú

^ÜHL_\™]\›ˆÊVÌKŠ_KÝÏX\Þ[˜ÈOžØÛÛœÝÙK—OX]ØZ]›ÛZ\ÙK˜[
Ø]Ê™™ˆŠK]Ê˜ÜÈŠWJNÚYŠJ\™]\›ˆ]ÊKŠ_KÏJJOO›™]È]ÊÛØ˜[\ÏË™ØÝ[Y[Ë›ØØ][ÛŠKœ]˜[YKœÛXÙJM
KÓÝÙ\Ø\ÙJ
OOOYK]ÏY[˜Ý[ÛŠJ^ÚYŠWÝÊ
KœÝš[™ÈO]\[ÙŠO^ÊJJJ]ž^ÙOJËJJJ_XØ]Ú

^ÙOHL_\™]\›ˆÊJ_KÏX\Þ[˜È[˜Ý[ÛŠJ^ÚYŠœÝš[™ÈˆO]\[Ùˆ
^ÚYŠÝÊ
_\œ˜^PY™™\‹š\ÕšY]Ê
_Ê
J\™]\›ˆÝÊ
NÚYŠœÚ
\™]\›Š
ÜÚ™Ž™KÜÎœ‹šŽ›ŸJOOžØÛÛœÝOVÒ]ÊŠWNÜ™]\›ˆI‰šKœ\Ú
[˜Ý[ÛŠJ^Ü™]\›ˆ]ÊWÝÊ
KO^ÊJJ_JKŠJK]ÊJ_JJ
NÝ›ÝÈ™]È\Q\œ›ÜŠ›]\Ý™HHÝš[™ËÛÛYHÛÜÙˆY™™\‹Üˆ[ˆØš™XÝÚ]]X\ÝHœÚ›Ü\HŠ_ZYŠÊ‹žš\ŠJ\™]\›ˆ\Þ[˜È[˜Ý[ÛŠJ^ØÛÛœÝX]ØZ]]Ê
NÜ™]\›ˆÝÊ‹J_JJNÕÊ‹œÚŠI‰Š]œÛXÙJM
JNØÛÛœÝX]ØZ]›ÛZ\ÙK˜[
Ó]Ê
KÝÊ
WJNÜ™]\›ˆ]ÊŠ_KÏ^Ü\œÙJ
^Û]KX\™Ý[Y[Ë›[™ÝŒI‰›ÚYOOX\™Ý[Y[ÖÌWOØ\™Ý[Y[ÖÌWNžßNÜ™]\›ˆ[œÊŠKžš\ÙOTÊžš\
NœÚ	‰œÚ	‰™™‰‰ŠOTÊ
JK‹š[\‹š[ŸßK‹š[‹˜ÜœÏ]œšÊËJJœšŠK›Ô›Ú‹™][S˜[YNœ‹š[‹˜ÜœË›ÛZ\ÙKœ™\ÛÛ™JJK[Š
OœËœ\œÙJŠJJ__KÏXÛ\ÜÞØÛÛœÝXÝÜŠ
^Ý\Ë˜Û\ÜÙ\Ï]˜Û\ÜÙ\Ë\Ëš[™\œÙRY\˜\˜ÚO^ßK\Ëš[œÝ[˜Ù\ÒYÏV×NØÛÛœÝO^ßNÛ]L]œ\™[ÛÝ[ÎÝ›ÚYOO[‰‰Š[™]È\œ˜^Jš[œÝ[˜Ù\Ó[™Ý
K‹™š[
JJNÙ›ÜŠ]OLÚOš[œÝ[˜Ù\Ó[™ÝÚJÊÊ^Ù›ÜŠ]OLÙO–ÚWNÙJÊÊZHOO]œ\™[YÖÜ—I‰Š›ÚYOO]\Ëš[™\œÙRY\˜\˜ÚVÚWI‰Š\Ëš[™\œÙRY\˜\˜ÚVÚWOV×JK\Ëš[™\œÙRY\˜\˜ÚVÚWKœ\Ú
œ\™[YÖÜ—JKŠÊÊNØÛÛœÝÏ]˜Û\ÜÒYÖÚWNÝ›ÚYOOYVÜ×I‰ŠVÜ×OL
K\Ëš[œÝ[˜Ù\ÒYÖÚWO^ØÛ\ÜÒYœË[œÝ[˜ÙRY™VÜ×_KVÜ×JÊß_YÙ][™›ÐžRY

^ØÛÛœÝO^ßK]\Ëš[œÝ[˜Ù\ÒYÖÝK˜Û\ÜÒY]\Ë˜Û\ÜÙ\ÖÜ—K›˜[YKO]\Ëš[œÝ[˜Ù\ÒYÖÝKš[œÝ[˜ÙRYÏ]\Ë˜Û\ÜÙ\ÖÜ—Kš[œÝ[˜Ù\ÎÙ›ÜŠÛÛœÝ[ˆÊSØš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
Ë
I‰ŠVÝO\ÖÝVÚWJNØÛÛœÝÏ^ßNÚYŠÖÛ—OYK\Ëš[™\œÙRY\˜\˜ÚI‰\Ëš[™\œÙRY\˜\˜ÚVÝJY›ÜŠÛÛœÝHÙˆ\Ëš[™\œÙRY\˜\˜ÚVÝJSØš™XÝ˜\ÜÚYÛŠË\Ë™Ù][™›ÐžRY
JJNÜ™]\›ˆß_KÏHŒ‹KŒHŸKŽLÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠŒÍŒ
KO\ŠŒŒLŠKÏ\ŠMŒÎJKÏ\ŠÍŒ
KO\ŠLÎJK\ŠLMÊKÏ\ŠÌLŠK\ŠLL
KO\ŠŒLŽJK\ŠÍŒÌÊK\ŠÍÌ
K\ŠÍLJK™˜\ÝÙ^KO\ŠLLNJKÏ[KœÙ]O[K™Ù]\‘›ÜŽÝ™^ÜÏ^ÙÙ]ÛÛœÝXÝÜŽ™[˜Ý[ÛŠK‹
^Ý˜\ˆO]

[˜Ý[ÛŠJ^ØJ
KÊÝ\N™K[™^›Š[
Kš\œÝ›[\Ý›[Ú^™NŒJK
œÚ^™OL
K
J_ÊKÚKÝ]T×ÑS•’QTÎœŸJ_JJK]Kœ›ÝÝ\KOPJJKOY[˜Ý[ÛŠKŠ^Ý˜\ˆ‹KÏ[J
KÏ]ŠJNÜ™]\›ˆÏÛË˜[YO\ŽŠË›\Ý[Ï^Ú[™^šOYŠKL
KÙ^N™K˜[YNœ‹™]š[Ý\Î›\Ë›\Ý™^›[™[[Ý™YˆL_KË™š\œÝ
Ë™š\œÝ[ÊK‰‰Š‹›™^[ÊKÜËœÚ^™JÊÎœÚ^™JÊË‘ˆˆOOZI‰ŠËš[™^ÚWO[ÊJKKY[˜Ý[ÛŠJ^Ý˜\ˆ‹[J
KOYŠJNÚYŠ‘ˆˆOOZJ\™]\›ˆ‹š[™^ÚWNÙ›ÜŠ[‹™š\œÝÜŽÜ\‹›™^
ZYŠ‹šÙ^OOOYJ\™]\›ˆŸNÜ™]\›ˆÊØÛX\Ž™[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆ[J\ÊKO]™š\œÝÙNÊYKœ™[[Ý™YHLKœ™]š[Ý\É‰ŠKœ™]š[Ý\ÏYKœ™]š[Ý\Ë›™^[[
KOYK›™^Ý™š\œÝ]›\Ý[[š[™^[Š[
KÝœÚ^™OL\ËœÚ^™OLK[]N™[˜Ý[ÛŠ
^Ý˜\ˆO]\Ë[JJK]ŠK
NÚYŠŠ^Ý˜\ˆO[‹›™^Ï[‹œ™]š[Ý\ÎÙ[]H‹š[™^Û‹š[™^K‹œ™[[Ý™YHLÉ‰ŠË›™^ZJKI‰ŠKœ™]š[Ý\Ï\ÊK‹™š\œÝOO[‰‰Š‹™š\œÝZJK‹›\ÝOO[‰‰Š‹›\Ý\ÊKÜ‹œÚ^™KKN™KœÚ^™KK_\™]\›ˆH[ŸK›Ü‘XXÚ™[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆK[J\ÊK[Ê\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚY
NÙOYOÙK›™^œ‹™š\œÝÊY›ÜŠŠK˜[YKKšÙ^K\ÊNÙI‰™Kœ™[[Ý™YÊYOYKœ™]š[Ý\ßK\Î™[˜Ý[ÛŠ
^Ü™]\›ˆH]Š\Ë
__JKÊÞÙÙ]™[˜Ý[ÛŠ
^Ý˜\ˆO]Š\Ë
NÜ™]\›ˆI‰™K˜[Y_KÙ]™[˜Ý[ÛŠJ^Ü™]\›ˆJ\ËOO]ÌJ__NžØY™[˜Ý[ÛŠ
^Ü™]\›ˆJ\ËLOO]Ì
__JK	‰šJœÚ^™H‹ØÛÛ™šYÝ\˜X›NˆLÙ]™[˜Ý[ÛŠ
^Ü™]\›ˆJ\ÊKœÚ^™__JK_KÙ]Ý›Û™Î™[˜Ý[ÛŠKŠ^Ý˜\ˆYJÈˆ]\˜]Üˆ‹OPJJKÏPJŠNÚ
K
[˜Ý[ÛŠJ^ÙÊ\ËÝ\N›‹\™Ù]Ý]NšJ
KÚ[™™K\Ý›[J_JK
[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆ\Ê\ÊKO]šÚ[™]›\ÝÜ‰‰œ‹œ™[[Ý™YÊ\\‹œ™]š[Ý\ÎÜ™]\›ˆ\™Ù]	‰Š›\Ý\\Ü‹›™^œÝ]K™š\œÝ
OÝJšÙ^\ÈOOYOÜ‹šÙ^Nˆ˜[Y\ÈOOYOÜ‹˜[YN–Ü‹šÙ^K‹˜[YWKLJNŠ\™Ù][[J›ÚYL
J_JKÈ™[šY\ÈŽˆ˜[Y\È‹\‹L
K
J___KŽMŠKŠOOžÈ\ÙHÝšXÝŽÜŠÌLLJJ›X]ÚŠ_KŽNMŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÍŒÎJKÐ\œ˜^NÛŠÝ\™Ù]ˆ\Þ[˜Ò]\˜]Üˆ‹›ÝÎˆL™X[ˆLKÝÐ\œ˜^N™[˜Ý[ÛŠ
^Ü™]\›ˆJ\Ë›ÚY×J__J_KÌMLÎŠKŠOOžÈ\ÙHÝšXÝŽÜŠLN
JÝ\™Ù]ˆ”Þ[X›Û‹Ý]ˆL˜[YNˆš\Ô™YÚ\Ý\™YÞ[X›ÛŸKÚ\Ô™YÚ\Ý\™YœŠLNŠ_J_KÌŒŒŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÌÎL
NÛŠÝ\™Ù]ˆ“[X™\ˆ‹Ý]ˆL›Ü˜ÙY“[X™\‹œ\œÙQ›Ø]OOZ_KÜ\œÙQ›Ø]š_J_KÌÍÌŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠNLŒLÊK™š[\”™Z™XÝÏ\ŠŽJNÛŠÝ\™Ù]ˆ\œ˜^H‹›ÝÎˆL›Ü˜ÙYˆLKÙš[\“Ý]™[˜Ý[ÛŠ
^Ü™]\›ˆJ\Ë\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚY
__JKÊ™š[\“Ý]Š_KÍLNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÍÌ
KÏ\ŠŽMLJKÏ\ŠMŽMŽJKO\ŠLLÊNÛŠÝ\™Ù]ˆ”™Y›XÝ‹Ý]ˆL›Ü˜ÙYœŠÎLÎJJ
[˜Ý[ÛŠ
^Ô™Y›XÝ™Yš[™T›Ü\JK™ŠßKKÝ˜[YNŒ_JKKÝ˜[YNŒŸJ_JJKÚ[NˆZ_KÙYš[™T›Ü\N™[˜Ý[ÛŠKŠ^ÜÊ
NÝ˜\ˆ[ÊJNÜÊŠNÝž^Ü™]\›ˆK™Š‹ŠKLXØ]Ú

^Ü™]\›ˆL___J_KÍÌÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠÍÍÍŠKO\ŠÌÍLMÊKÏ\ŠŒÍ
KÏ\ŠÎŒÊJœÜXÚY\ÈŠKOP\œ˜^NÝ™^ÜÏY[˜Ý[ÛŠ
^Ý˜\ˆNÜ™]\›ˆŠ
I‰ŠO]˜ÛÛœÝXÝÜ‹
JJI‰ŠOOOX_ŠKœ›ÝÝ\JJ_ÊJI‰›[OOJOYVÛ×JJI‰ŠO]›ÚY
JK›ÚYOOYOØN™__KÍÎŠKŠOOžÈ\ÙHÝšXÝŽÜŠÍŒÌÊJ\œ˜^HŠ_KÍNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠŽMMJKO\ŠMÍL
KÏY[˜Ý[ÛŠJ^Ü™]\›–ÙK_NÝ™^ÜÏY[˜Ý[ÛŠ
^Ü™]\›ˆŠK\ËÊ__KÍLŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠŽMLJNÝ™^ÜÏY[˜Ý[ÛŠKŠ^Ü™]\›ˆ[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆO[™]ÈÏX\™Ý[Y[Ë›[™ÝÏLÛÏÎÛÊÊÊ^Ý˜\ˆOX\™Ý[Y[ÖÛ×NÜÙJKŠJVÌKVÌWJN™JKJ_\™]\›ˆ___KÍŒÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÍÌ
KÏ\ŠMLJKÏ\ŠÎLÌŠKO\ŠNJK\ŠLLÊNÚI‰›ŠÝ\™Ù]ˆ“Øš™XÝ‹›ÝÎˆL›Ü˜ÙYœßK××ÙYš[™TÙ]\—×Î™[˜Ý[ÛŠJ^Û™ŠJ\ÊKÜÙ]›ÊJK[[Y\˜X›NˆLÛÛ™šYÝ\˜X›NˆLJ__J_KÍŒÌÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠMÍÍLJKO\ŠŒŒLŠKÏ\ŠÎŒÊKÏ\ŠÍÌ
KO\ÊœÜXÚY\ÈŠNÝ™^ÜÏY[˜Ý[ÛŠ
^Ý˜\ˆO[Š
NÛÉ‰™I‰ˆYVØWI‰šJKKØÛÛ™šYÝ\˜X›NˆLÙ]™[˜Ý[ÛŠ
^Ü™]\›ˆ\ß_J__KÍÍNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠÍÌ
KO\ŠNŽJK“RTÔÑQÔÕPÒÖKÏ\ŠŒŒNMJKÏ\ŠŒŒLŠKO\ŠLLNJK™Ù]T™YÑ^œ›ÝÝ\KÏU\Q\œ›ÜŽÛ‰‰šI‰›ÊœÝXÚÞH‹ØÛÛ™šYÝ\˜X›NˆLÙ]™[˜Ý[ÛŠ
^ÚYŠ\ÈOO[
^ÚYŠ”™YÑ^OO\Ê\ÊJ\™]\›ˆHXJ\ÊKœÝXÚÞNÝ›ÝÈ™]ÈÊ’[˜ÛÛ\]X›H™XÙZ]™\‹™YÑ^™\]Z\™YŠ___J_KMÍÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÍNN
KÏ\ŠŽJKÏ\ŠŽMLŠNÛŠÝ\™Ù]ˆ\œ˜^H‹›ÝÎˆL˜[YNˆ™Ü›Ý\ÓX\‹›Ü˜ÙYœŠMŒÎMJ_ZJ™Ü›Ý\žUÓX\Š_KÙÜ›Ý\žUÓX\›ßJKÊ™Ü›Ý\žUÓX\Š_KŒNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠÎML
KOUÙXZÔÙ]œ›ÝÝ\NÝ™^ÜÏ^ÕÙXZÔÙ]Y›ŠK˜Y
K\Î›ŠKš\ÊK™[[Ý™N›ŠK™[]J__KÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÎML
KÏ\ŠMJKÏTÝš[™Ë™œ›ÛPÚ\ÛÙKOZJˆ‹˜Ú\]
KZJË‹Ë™^XÊKÏZJˆ‹œÛXÙJKK×–×KY—^ÌŸIÚKOK×–×KY—^ÍIÚNÛŠÙÛØ˜[ˆLKÝ[™\ØØ\N™[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆK‹\Ê
KOHˆ‹[‹›[™ÝLÜÊ^ÚYŠ‰HOOJOXJ‹
ÊÊJJZYŠHOOXJ‹
J^ÚYŠXÊ‹
ÌK
ÍJK
KŠJ^ÚJÏ[Ê\œÙR[
‹MŠJK
ÏMNØÛÛ[Y__Y[ÙHYŠXÊ‹
ÌŠK
ŠJ^ÚJÏ[Ê\œÙR[
‹MŠJK
ÏLŽØÛÛ[Y_ZJÏY_\™]\›ˆ__J_KÌNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠNLŒLÊK™]™\žNÛŠÝ\™Ù]ˆ\œ˜^H‹›ÝÎˆL›Ü˜ÙYˆ\ŠÍNN
J™]™\žHŠ_KÙ]™\žN™[˜Ý[ÛŠ
^Ü™]\›ˆJ\Ë\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚY
__J_KLOžÈ\ÙHÝšXÝŽÝ˜\ˆOP\œ˜^KSX]˜XœËSX]œÝËOSX]™›ÛÜ‹ÏSX]›ÙËÏSX]“ŒŽÝ™^ÜÏ^ÜXÚÎ™[˜Ý[ÛŠK
^Ý˜\ˆËKYJ
KN
›XKLKJO
KLKOYŒKÏLŒÏOOXOÛŠ‹L
K[Š‹MÍÊNŒO]OO]	‰ŒKÝÌNŒOLÙ›ÜŠ
\Š
JHO]OOLKÌÊ]O]ÌNŒÏYŠNŠÏZJÊ
KÛÊK
ŠO[Š‹XÊJOI‰ŠËKKJLŠK

ÏXÊÛOLOÙËÝN™Ê›Š‹K[JJJOL‰‰ŠÊÊËKÏLŠKÊÛOYÊLÏYŠN˜ÊÛOLOÊJ
KLJJ›Š‹JKÊÏ[JNŠ]
›Š‹KLJJ›Š‹JKÏL
JNØONÊYÞJÊ×OLMIšÏLM‹KONÙ›ÜŠÏXÏ_
ÏXNÜŒÊYÞJÊ×OLMI˜ËËÏLM‹ONÜ™]\›ˆÞKLW_LLŽ
KK[œXÚÎ™[˜Ý[ÛŠJ^Ý˜\ˆ‹O]›[™ÝÏN
šKYKLKÏJOÊKLKO[ÏŒK\ËMËÏZKLK]ØËKWKOLLÉšÙ›ÜŠMÎÛŒÊ]OLMŠJÝØËKWKONÙ›ÜŠ]IŠO[
KLKOK[
ÏYNÛŒÊ\LMŠœŠÝØËKWKONÚYŠOO]J]OLKXNÙ[Ù^ÚYŠOOO[Ê\™]\›ˆÓ˜SŽšËLKÌŒKÌÜŠÏ[Š‹JKKOX_\™]\›ŠËLNŒJJœŠ›Š‹KYJ___KÌÎOžÈ\ÙHÝšXÝŽÝ™^ÜÏVÈ˜ÛÛœÝXÝÜˆ‹š\ÓÝÛ”›Ü\H‹š\Ô›ÝÝ\SÙˆ‹œ›Ü\R\Ñ[[Y\˜X›H‹ÓØØ[TÝš[™È‹ÔÝš[™È‹˜[YSÙˆ—_KÍÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠM
KO[‹˜U\Y\œ˜^KÏ[‹™^Ü\Y\œ˜^SY]ÙÏSX]™›ÛÜŽÜÊœ™]™\œÙH‹
[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆO]\ËZJJK›[™Ý[Ê‹ÌŠKÏLÜÏŽÊ]YVÜ×KVÜÊÊ×OYVËK\—KVÜ—O]Ü™]\›ˆ_JJ_KLNMNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÍÌ
NÛŠÝ\™Ù]ˆ”Ýš[™È‹›ÝÎˆL›Ü˜ÙYœŠŒÌŒJJœÛX[Š_KÜÛX[™[˜Ý[ÛŠ
^Ü™]\›ˆJ\ËœÛX[‹ˆ‹ˆŠ__J_KLŒŽŠKŠOOžÈ\ÙHÝšXÝŽÜŠÍMJNÝ˜\ˆ\ŠŽMMJKO\ŠÍŽ
KÏ\ŠMÌÌŒÊKÏ\ŠÎLÎJKO\ŠÎŒÊK\ŠŽNJKÏXJœÜXÚY\ÈŠKT™YÑ^œ›ÝÝ\NÝ™^ÜÏY[˜Ý[ÛŠK‹J^Ý˜\ˆXJ
KH[Ê
[˜Ý[ÛŠ
^Ý˜\ˆO^ßNÜ™]\›ˆVÙOY[˜Ý[ÛŠ
^Ü™]\›ˆßKÈOOHˆ–ÝJJ_JJK\	‰ˆ[Ê
[˜Ý[ÛŠ
^Ý˜\ˆOHLKKØKÎÜ™]\›ˆœÜ]OO]	‰Š
^ßJK˜ÛÛœÝXÝÜ^ßK‹˜ÛÛœÝXÝÜ–Ø×OY[˜Ý[ÛŠ
^Ü™]\›ˆŸK‹™›YÜÏHˆ‹–ÙOKË‹ÖÙJK‹™^XÏY[˜Ý[ÛŠ
^Ü™]\›ˆOHL[K–ÙJˆŠKY_JJNÚYŠ\YŸŠ^Ý˜\ˆOKË‹ÖÙKÏYJˆ–ÝK
[˜Ý[ÛŠK‹KÊ^Ý˜\ˆOYK™^XÎÜ™]\›ˆOOO\ßOOOZ™^XÏÜ	‰ˆ[ÏÞÙÛ™NˆL˜[YN›ŠKK‹J_NžÙÛ™NˆL˜[YN›Š‹KJ_NžÙÛ™NˆL__JJNÚJÝš[™Ëœ›ÝÝ\KÖÌJKJÖÌWJ_]I‰›
ÙKœÚ[H‹L
__KLŽŽŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠMŠKO\ŠÎŽJKÏ[‹”Ù]Ï[‹˜YÝ™^ÜÏY[˜Ý[ÛŠ
^Ý˜\ˆO[™]ÈÎÜ™]\›ˆJ
[˜Ý[ÛŠ
^ÛÊK
_JJK__KMŽNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠMÍŠKO\ŠÎMÍ
NÝ™^ÜÏY[˜Ý[ÛŠ
^ÚYŠJ^Ýž^Ü™]\›ˆ‹œ›ØÙ\ÜË™Ù]Z[[“[Ù[J
_XØ]Ú

^ß]ž^Ü™]\›ˆ[˜Ý[ÛŠ	Ü™]\›ˆ™\]Z\™J‰ÊÝ
ÉÈŠIÊJ
_XØ]Ú

^ß___KMŒÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÍÌ
KÏ\ŠMÍŠKÏ\ŠÎML
KO\ŠÎLŽMÊK\ŠMLJKÏ\ŠMŒJK\ŠMJKO\ŠŒŒLŠK\ŠÍÍÍ
K\Ë”Þ[X›Û\	‰œœ›ÝÝ\NÚYŠI‰›

I‰ŠJ™\ØÜš\[Ûˆš[ˆŠ_›ÚYOO\

K™\ØÜš\[ÛŠJ^Ý˜\ˆO^ßKÏY[˜Ý[ÛŠ
^Ý˜\ˆX\™Ý[Y[Ë›[™Ý_›ÚYOOX\™Ý[Y[ÖÌOÝ›ÚYš
\™Ý[Y[ÖÌJKOXÊ‹\ÊOÛ™]È

N›ÚYOO]Ü

Nœ

NÜ™]\›ˆˆOO]	‰ŠVÙWOHL
K_NÙ
Ë
KËœ›ÝÝ\OY‹‹˜ÛÛœÝXÝÜYÎÝ˜\ˆOH”Þ[X›Û
\ØÜš\[Ûˆ]XÝ[ÛŠHOOTÝš[™Ê
™\ØÜš\[Ûˆ]XÝ[ÛˆŠJKO[Ê‹˜[YSÙŠK[Ê‹ÔÝš[™ÊKK×”Þ[X›Û

ŠŠW
V×ŠWJÉËÏ[Êˆ‹œ™\XÙJKÏ[Êˆ‹œÛXÙJNÝJ‹™\ØÜš\[Ûˆ‹ØÛÛ™šYÝ\˜X›NˆLÙ]™[˜Ý[ÛŠ
^Ý˜\ˆ^J\ÊNÚYŠJK
J\™]\›ˆˆŽÝ˜\ˆO]Š
KPOÝÊKËLJN—ÊK‰HŠNÜ™]\›ˆˆOO\Ý›ÚYœŸ_JKŠÙÛØ˜[ˆLÛÛœÝXÝÜŽˆL›Ü˜ÙYˆLKÔÞ[X›Û™ßJ__KMMŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠŽÎJNÝ™^ÜÏKÊÎš\Y\Û™_\Ù
KŠ˜\]ÙXšÚ]ÚK\Ý
Š_KMMÌŽŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠÎLŽMÊKO\ŠÍŽ
KÏ\ŠLÍ
KÏ\ŠÎŒÊJÔš[Z]]™HŠKOQ]Kœ›ÝÝ\NÛŠKÊ_JKËÊ_KNLÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÍÌ
NÛŠÝ\™Ù]ˆ”Ýš[™È‹›ÝÎˆL›Ü˜ÙYœŠŒÌŒJJ˜[˜ÚÜˆŠ_KØ[˜ÚÜŽ™[˜Ý[ÛŠ
^Ü™]\›ˆJ\Ë˜H‹›˜[YH‹
__J_KNMMNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠM
KO\ŠNLŒLÊK™š[™[™^Ï[‹˜U\Y\œ˜^NÊ‹™^Ü\Y\œ˜^SY]Ù
J™š[™[™^‹
[˜Ý[ÛŠ
^Ü™]\›ˆJÊ\ÊK\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚY
_JJ_KLŒÍNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠNLŒLÊK™›Ü‘XXÚO\ŠÍNN
J™›Ü‘XXÚŠNÝ™^ÜÏZOÖ×K™›Ü‘XXÚ™[˜Ý[ÛŠ
^Ü™]\›ˆŠ\Ë\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚY
__KLÎŠKŠOOžÈ\ÙHÝšXÝŽÓØš™XÝ™Yš[™T›Ü\JK—×Ù\Ó[Ù[H‹Ý˜[YNˆLJKK™XÛÛ\™\ÜÑš[OYK™XÛÛ\™\ÜÐÚ[šÏYK”Ú[]O]›ÚYØÛÛœÝ\ŠŽMÍÊKO\ŠŽLMŠNÛ]ÎØ\Þ[˜È[˜Ý[ÛˆÊ
^Ü™]\›ˆ
ß
ÏJ‹˜Ü™X]S^”\™ŠJ
JKÊ_X\Þ[˜È[˜Ý[ÛˆJÜÚ[ÛÝ[™KÚ[]T™XÛÜ™›Ü›X]œ‹Ú[]T™XÛÜ™[™Ý›ŸKJ^ØÛÛœÝÏX]ØZ]ÊJKO[™]ÈZ[\œ˜^JJ›ŠK\Ë—ÛX[ØÊ˜ž]S[™Ý
KÏ\Ë—ÛX[ØÊŠK[™]ÈËÚ[šÑXÛÙ\ŽÝž^ÜË’PTNœÙ]
™]ÈZ[\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]˜ž]S[™Ý
K
K›Ü[Š‹‹
NÙ›ÜŠ]LÝNÊÊÝ
Z™Ù]Ú[
ÊKKœÙ]
™]ÈZ[\œ˜^JË’PTN˜Y™™\‹ËŠK
›Š_Yš[˜[^ÜË—Ùœ™YJ
KË—Ùœ™YJÊK™[]J
_\™]\›ˆ_X\Þ[˜È[˜Ý[Ûˆ
J^ØÛÛœÝX]ØZ]ÊJKZK’XY\‹œ\œÙJ
KÜÚ[ÛÝ[œËÚ[]T™XÛÜ™[™Ý˜_O[‹[™]ÈZ[\œ˜^JÊ˜JKÏ\‹—ÛX[ØÊ˜ž]S[™Ý
K\‹—ÛX[ØÊJKO[™]È‹“TÖš\Ýž^Ü‹’PTNœÙ]
™]ÈZ[\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]˜ž]S[™Ý
KÊKK›Ü[ŠË˜ž]S[™Ý
NÙ›ÜŠ]LÝÎÊÊÝ
]K™Ù]Ú[

KœÙ]
™]ÈZ[\œ˜^J‹’PTN˜Y™™\‹JK
˜J_Yš[˜[^ÝK™[]J
_\™]\›ˆYK”Ú[]O^ØÜ™X]S^”\™Ž›‹˜Ü™X]S^”\™‹XÛÛ\™\ÜÐÚ[šÎ˜KXÛÛ\™\ÜÑš[N›KK™XÛÛ\™\ÜÐÚ[šÏXKK™XÛÛ\™\ÜÑš[O[KLLÍÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠML
KO\ŠŽ
KÏ\ŠLLMŠKÓÓ”Õ•PÕÔŽÝ™^ÜÏ\ßZJ
[˜Ý[ÛŠ
^Û‹˜[

K[Š›ÚY
[˜Ý[ÛŠ
^ßJJ_JJ_KLÎNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠMŒJKOU\Q\œ›ÜŽÝ™^ÜÏY[˜Ý[ÛŠJ^ÚYŠŠK
J\™]\›ˆÝ›ÝÈ™]ÈJ’[˜ÛÜœ™XÝ[›ØØ][ÛˆŠ__KLÍŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠŽMMJKO\ŠÎML
KÏ\ŠLŒŽ
KÏ\ŠŽMLJKO\ŠLMÊK\ŠÍÍL
KÏ\ŠŒŽLÊK\ŠMÎŽJKO\ŠNM
K\ŠMJK\ŠMNMŠK\ŠMŽŠKO\ŠNŽJKÏ\ŠÎLÎJKO[K•S”ÕTÔ•QÖKOSX]›Z[‹ZJ×Kœ\Ú
KZJˆ‹œÛXÙJKÏHYÊ
[˜Ý[ÛŠ
^Ý˜\ˆKÊÎŠKËO]™^XÎÝ™^XÏY[˜Ý[ÛŠ
^Ü™]\›ˆK˜\J\Ë\™Ý[Y[Ê_NÝ˜\ˆH˜Xˆ‹œÜ]

NÜ™]\›ˆˆOO\‹›[™Ý˜HˆOO\–Ì_˜ˆˆOO\–ÌW_JJKÏH˜ÈOOH˜X˜˜È‹œÜ]
ÊŠJ‹ÊVÌW_OOH\Ý‹œÜ]
ÊÎŠKËLJK›[™ÝˆOOH˜Xˆ‹œÜ]
ÊÎ˜XŠJ‹ÊK›[™ÝOOH‹ˆ‹œÜ]
ÊÊJÊKÊK›[™Ý‹ˆ‹œÜ]
Ê
J
KÊK›[™ÝŒ_ˆ‹œÜ]
ËËÊK›[™ÝÜÊœÜ]‹
[˜Ý[ÛŠKŠ^Ý˜\ˆOHŒ‹œÜ]
›ÚY
K›[™ÝÙ[˜Ý[ÛŠŠ^Ü™]\›ˆ›ÚYOO]	‰ŒOO\Ö×N›ŠK\ËŠ_N™NÜ™]\›–Ù[˜Ý[ÛŠKŠ^Ý˜\ˆÏ[
\ÊKÏXJJOÝ›ÚYœ
K
NÜ™]\›ˆÏÛŠËKËŠN›ŠK
ÊKKŠ_K[˜Ý[ÛŠŠ^Ý˜\ˆÏ[Ê\ÊKOY

NÚYŠ]Ê^Ý˜\ˆ\ŠKËK‹HOOYJNÚYŠ™Û™J\™]\›ˆ˜[Y_]˜\ˆXÊË™YÑ^
KO\Ë[šXÛÙKÏJËšYÛ›Ü™PØ\ÙOÈšHŽˆˆŠJÊË›][[[™OÈ›HŽˆˆŠJÊË[šXÛÙOÈHŽˆˆŠJÊOÈ™ÈŽˆžHŠKÏ[™]È
OÈ—ŠÎˆŠÜËœÛÝ\˜ÙJÈŠHŽœËÊK]›ÚYOO[ÍŽMMÌŽMN›ŒÚYŠOOXŠ\™]\›–×NÚYŠOOXK›[™Ý
\™]\›ˆ[OOYŠËJOÖØWN–×NÙ›ÜŠ˜\ˆOLÏLOV×NÔÏK›[™ÝÊ^×Ë›\Ý[™^POÌ”ÎÝ˜\ˆËYŠËOÞ
KÊN˜JNÚYŠ[OOU
Ï^JJË›\Ý[™^
ÊOÔÎŒ
JKK›[™Ý
JOOOQJTÏZ
KËJNÙ[Ù^ÚYŠŠK
KKÊJKK›[™ÝOOXŠ\™]\›ˆNÙ›ÜŠ˜\ˆOLNÒOU›[™ÝLNÒJÊÊZYŠŠKÒWJKK›[™ÝOOXŠ\™]\›ˆNÔÏQOPß_\™]\›ˆŠK
KJJK_W_JKßWËJ_KLÍMÎOžÈ\ÙHÝšXÝŽÝ™^ÜÏY[˜Ý[ÛŠJ^Ýž^ÌOOOX\™Ý[Y[Ë›[™ÝØÛÛœÛÛK™\œ›ÜŠ
N˜ÛÛœÛÛK™\œ›ÜŠJ_XØ]Ú

^ß__KLLŽŠKŠOOžÈ\ÙHÝšXÝŽÜŠÍMJNÝ˜\ˆ‹KÏ\ŠLN
KÏ\ŠŽMMJKO\ŠMLJK\ŠŽMLJKÏ\ŠMJKJHLK
OKÖØX×KÊK™^XÏY[˜Ý[ÛŠ
^Ü™]\›ˆHLË‹Ë™^XË˜\J\Ë\™Ý[Y[Ê_KLOOZK\Ý
˜X˜ÈŠI‰›ŠKOKË‹Ë\ÝÜÊÝ\™Ù]ˆ”™YÑ^‹›ÝÎˆL›Ü˜ÙYˆZKÝ\Ý™[˜Ý[ÛŠ
^Ý˜\ˆO[
\ÊKXÊ
KYK™^XÎÚYŠXJŠJ\™]\›ˆÊKKŠNÝ˜\ˆO[Ê‹KŠNÜ™]\›ˆ[OOZI‰Š
JKL
__J_KLLŒNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠMÍÍLJKO\ŠŽMMJKÏ\ŠÎML
KÏ\ŠÍŒ
KO\ŠŽMLJK\ŠÎLÌŠKÏ\ŠLMÊK\ŠMNMŠKO\ŠÎŒÊK]J˜\Þ[˜Ñ\ÜÜÙHŠK]J™\ÜÜÙHŠK\Ê×Kœ\Ú
KOY[˜Ý[ÛŠKŠ^Ü™]\›ˆ\™Ý[Y[Ë›[™ÝÉ‰ˆXÊ
I‰Š[
[˜Ý[ÛŠJ^ÚYŠ˜\Þ[˜ËY\ÜÜÙHOOYJ^Ý˜\ˆZ

NÜ™]\›ˆ›ÚYOO\Ÿ›ÚYOOJZ

JOÜŽ™[˜Ý[ÛŠ
^Ý˜\ˆ]\ÎÜ™]\›ˆ™]ÊŠ”›ÛZ\ÙHŠJJ
[˜Ý[ÛŠJ^ÚJ‹
KJ›ÚY
_JJ__\™]\›ˆ

_JJ
KJJJK›ÚYOO\Ù[˜Ý[ÛŠ
^ßN›Ê‹
_NÝ™^ÜÏY[˜Ý[ÛŠK‹Š^Ý˜\ˆNÚYŠ\™Ý[Y[Ë›[™Ý
^ÚYŠÊJI‰ˆœÞ[˜ËY\ÜÜÙHOO\Š\™]\›ŽÚO[JKŠ_Y[ÙHO[J›ÚY‹ŠNÙŠœÝXÚËJ__KLLLÍŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠM
KO\ŠÎÎJK™š[™\Ý[™^Ï[‹˜U\Y\œ˜^NÊ‹™^Ü\Y\œ˜^SY]Ù
J™š[™\Ý[™^‹
[˜Ý[ÛŠ
^Ü™]\›ˆJÊ\ÊK\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚY
_JJ_KLLNNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ‹KËÏ\ŠNŒŒŠKO\ŠMÍŠK\ŠŒÍ
KÏ\ŠŽNJK\ŠÎLŽMÊKO\ŠÍÍŒŽJK\ŠŒLNJK\ŠÌŒJKH“Øš™XÝ[™XYH[š]X[^™Y‹OXK•\Q\œ›Ü‹ÏXK•ÙXZÓX\ÚYŠßKœÝ]J^Ý˜\ˆO]KœÝ]_
KœÝ]O[™]ÈÊNÐK™Ù]PK™Ù]Kš\ÏPKš\ËKœÙ]PKœÙ]Y[˜Ý[ÛŠJ^ÚYŠKš\Ê
J]›ÝÈ™]ÈJŠNÜ™]\›ˆK™˜XØYO]KœÙ]
JK_KOY[˜Ý[ÛŠ
^Ü™]\›ˆK™Ù]

_ß_KÏY[˜Ý[ÛŠ
^Ü™]\›ˆKš\Ê
__Y[Ù^Ý˜\ˆOY
œÝ]HŠNÜÞWOHLY[˜Ý[ÛŠJ^ÚYŠ
JJ]›ÝÈ™]ÈJŠNÜ™]\›ˆK™˜XØYO]ÊKJK_KOY[˜Ý[ÛŠ
^Ü™]\›ˆ
JOÝÞWNžß_KÏY[˜Ý[ÛŠ
^Ü™]\›ˆ
J__]™^ÜÏ^ÜÙ]›‹Ù]šK\ÎœË[™›Ü˜ÙN™[˜Ý[ÛŠ
^Ü™]\›ˆÊ
OÚJ
N›ŠßJ_KÙ]\‘›ÜŽ™[˜Ý[ÛŠ
^Ü™]\›ˆ[˜Ý[ÛŠJ^Ý˜\ˆŽÚYŠ[
J_
ZJJJK\HOO]
]›ÝÈ™]ÈJ’[˜ÛÛ\]X›H™XÙZ]™\‹ŠÝ
Èˆ™\]Z\™YŠNÜ™]\›ˆŸ___KLLNLNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÎML
KÏ\ŠLLŽLJKÏQ]Kœ›ÝÝ\KOZJË™Ù][YJKZJËœÙ][YX\ŠNÛŠÝ\™Ù]ˆ‘]H‹›ÝÎˆLKÜÙ]YX\Ž™[˜Ý[ÛŠ
^ØJ\ÊNÝ˜\ˆO\Ê
NÜ™]\›ˆ
\ËOL	‰™ONNOÙJÌNL™J__J_KLLŽLNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠÍJNÝ™^ÜÏY[˜Ý[ÛŠ
^Ý˜\ˆOJÝÜ™]\›ˆHOY_OOYOÌ›ŠJ__KLLŽMŽŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠMJNÝ™^ÜÏ[‰‰ˆHTÞ[X›Û™›Ü‰‰ˆHTÞ[X›ÛšÙ^Q›ÜŸKLLÍMŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLLNJKO\ŠÌÎNM
KÏ\ŠŒLŽJKÏ\ŠÎLŽMÊKO\ŠÌLÌŠK\ŠNJKÏH“Øš™XÝ]\˜]Üˆ‹[‹œÙ]O[‹™Ù]\‘›ÜŠÊNÝ™^ÜÏZJ
[˜Ý[ÛŠJ^Ý˜\ˆ[

NÚ
\ËÝ\N˜Ë[ÙN™KØš™XÝœ‹Ù^\Î˜JŠK[™^ŒJ_JK“Øš™XÝ‹
[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆ]J\ÊKO]šÙ^\ÎÎÊ^ÚYŠ[OOY_š[™^YK›[™Ý
\™]\›ˆ›Øš™XÝ]šÙ^\Ï[[Ê›ÚYL
NÝ˜\ˆYVÝš[™^
Ê×K]›Øš™XÝÚYŠÊ‹ŠJ^ÜÝÚ]Ú
›[ÙJ^ØØ\ÙHšÙ^\ÈŽœ™]\›ˆÊ‹LJNØØ\ÙH˜[Y\ÈŽœ™]\›ˆÊ–Ü—KLJ_\™]\›ˆÊÜ‹–Ü—WKLJ___JJ_KLMMLŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠLLÍM
NÛŠÝ\™Ù]ˆ“Øš™XÝ‹Ý]ˆL›Ü˜ÙYˆLKÚ]\˜]Q[šY\Î™[˜Ý[ÛŠ
^Ü™]\›ˆ™]ÈJ™[šY\ÈŠ__J_KLMŒNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠÎML
KO\ŠMŒÎJKÏ\ŠÍLJK™Ù]ÙXZÑ]KÏ\ŠLÎJKO\ŠŽMLJK\ŠLMÊKÏ\ŠŒÍ
K\ŠÌLŠKO\ŠNLŒLÊK\ŠÎLŽMÊK\ŠLLNJK\œÙ]O\™Ù]\‘›Ü‹Ï]K™š[™O]K™š[™[™^O[Š×KœÜXÙJKLY[˜Ý[ÛŠ
^Ü™]\›ˆ™œ›Þ™[Ÿ
™œ›Þ™[[™]ÈÊ_KÏY[˜Ý[ÛŠ
^Ý\Ë™[šY\ÏV×_KÏY[˜Ý[ÛŠJ^Ü™]\›ˆÊ™[šY\Ë
[˜Ý[ÛŠ
^Ü™]\›ˆÌOOOY_JJ_N×Ëœ›ÝÝ\O^ÙÙ]™[˜Ý[ÛŠ
^Ý˜\ˆO]Ê\Ë
NÚYŠJ\™]\›ˆVÌW_K\Î™[˜Ý[ÛŠ
^Ü™]\›ˆH]Ê\Ë
_KÙ]™[˜Ý[ÛŠJ^Ý˜\ˆ]Ê\Ë
NÜÜ–ÌWOYN\Ë™[šY\Ëœ\Ú
ÝWJ_K[]N™[˜Ý[ÛŠ
^Ý˜\ˆOPJ\Ë™[šY\Ë
[˜Ý[ÛŠJ^Ü™]\›ˆVÌOOO]JJNÜ™]\›Ÿ™I‰žJ\Ë™[šY\ËKJKH_™__K™^ÜÏ^ÙÙ]ÛÛœÝXÝÜŽ™[˜Ý[ÛŠK‹Š^Ý˜\ˆO]

[˜Ý[ÛŠJ^ÛÊ
KŠÝ\N™KYŠÊËœ›Þ™[Ž›[JK
J_
KÛ—KÝ]T×ÑS•’QTÎœŸJ_JJK]Kœ›ÝÝ\KÏ[JJKOY[˜Ý[ÛŠKŠ^Ý˜\ˆYÊ
KO\ÊJJKL
NÜ™]\›ˆLOOZOÞ
ŠKœÙ]
KŠNšVÛ‹šYO\‹NÜ™]\›ˆJÙ[]N™[˜Ý[ÛŠ
^Ý˜\ˆOYÊ\ÊNÚYŠXÊ
J\™]\›ˆLNÝ˜\ˆ\Ê
NÜ™]\›ˆLOO\Þ
JK™[]J
Nœ‰‰™
‹KšY
I‰™[]H–ÙKšY_K\Î™[˜Ý[ÛŠ
^Ý˜\ˆOYÊ\ÊNÚYŠXÊ
J\™]\›ˆLNÝ˜\ˆ\Ê
NÜ™]\›ˆLOO\Þ
JKš\Ê
Nœ‰‰™
‹KšY
__JKJÞÙÙ]™[˜Ý[ÛŠ
^Ý˜\ˆOYÊ\ÊNÚYŠÊ
J^Ý˜\ˆ\Ê
NÚYŠLOO\Š\™]\›ˆ
JK™Ù]

NÚYŠŠ\™]\›ˆ–ÙKšY__KÙ]™[˜Ý[ÛŠJ^Ü™]\›ˆJ\ËJ__NžØY™[˜Ý[ÛŠ
^Ü™]\›ˆJ\ËL
__JK___KLMÌŽŠKŠOOžÈ\ÙHÝšXÝŽÜŠŒNLÊ_KLNMMNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ‹KËËK\ŠMÍŠKÏ\ŠLÌÎJK\ŠÍŒ
KO\ŠNLŒJKœÙ]\ŠNJK\ŠMM
K\ŠJKO\ŠÎŒ
KÏ\ŠÎMÍ
KO[“]]][Û“ØœÙ\™\Ÿ•ÙX’Ú]]]][Û“ØœÙ\™\‹O[™ØÝ[Y[[œ›ØÙ\ÜË[”›ÛZ\ÙKÏXÊœ]Y]YSZXÜ›Ý\ÚÈŠNÚYŠWÊ^Ý˜\ˆÏ[™]ÈY[˜Ý[ÛŠ
^Ý˜\ˆNÙ›ÜŠÉ‰Š]‹™ÛXZ[ŠI‰™^]

NÙO]Ë™Ù]

NÊ]ž^ÙJ
_XØ]Ú

^Ý›ÝÈËšXY	‰›Š
K]	‰™[\Š
_NÜß_P_^OÈY‰‰ž	‰žœ™\ÛÛ™OÊ
Ï^œ™\ÛÛ™J›ÚY
JK˜ÛÛœÝXÝÜ^OZ
Ë[‹ÊKY[˜Ý[ÛŠ
^ØJŠ_JN™ÏÛY[˜Ý[ÛŠ
^Ý‹›™^XÚÊŠ_NŠOZ
K
KY[˜Ý[ÛŠ
^ÝJŠ_JNŠOHLÏ^K˜Ü™X]U^›ÙJˆŠK™]ÈJŠK›ØœÙ\™JËØÚ\˜XÝ\‘]NˆLJKY[˜Ý[ÛŠ
^ÜË™]OZOHZ_JKÏY[˜Ý[ÛŠ
^ÝËšXYŠ
KË˜Y

__]™^ÜÏWßKLŒNNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠŽMMJKO\ŠLLÊKÏ\ŠŽMLJKÏ\ŠŒÍŒ
KO\ŠŽNJK\ŠMŒÎJKÏ\ŠÎŒÊK\ŠLLNJKO\ŠMÍÍLJK\ŠMNMŠK\ŠLÎNŠK\ŠŒLŽJKO\ŠMLÎJKÏ]J”›ÛZ\ÙHŠKOXÊÔÝš[™ÕYÈŠKOH\Þ[˜Ò]\˜]Ü’[\ˆ‹H•Ü˜\›Ü•˜[Y\Þ[˜Ò]\˜]Üˆ‹ZœÙ]ÏY[˜Ý[ÛŠ
^Ý˜\ˆOH]Z™Ù]\‘›ÜŠÝŽžJKOY[˜Ý[ÛŠ
^Ý˜\ˆZJ
[˜Ý[ÛŠ
^Ü™]\›ˆŠ
_JJKÏ[‹™\œ›Ü‹Ï[‹˜[YNÜ™]\›ˆßI‰›Ë™Û™OÞÙ^]ˆL˜[YNœÏÙËœ™Z™XÝ
ÊN™Ëœ™\ÛÛ™JŠ›ÚYL
J_NžÙ^]ˆLK˜[YN›ß_NÜ™]\›ˆ
Ê
KÛ™^™[˜Ý[ÛŠ
^Ý˜\ˆXJ\ÊKO]˜[YNÚYŠ™^]
\™]\›ˆNÝ˜\ˆZJ
[˜Ý[ÛŠ
^Ü™]\›ˆÊK›™^[™\ŠÊJ_JJK\‹™\œ›Ü‹Ï\‹˜[YNÜ™]\›ˆ‰‰ŠK™Û™OHL
KÙËœ™Z™XÝ
ÊN™Ëœ™\ÛÛ™JÊ_K™]\›Ž™[˜Ý[ÛŠ
^Ý˜\ˆOXJ\ÊKYK˜[YNÚYŠK™^]
\™]\›ˆŽÜ‹™Û™OHLÝ˜\ˆËÏ\‹š]\˜]Ü‹ZJ
[˜Ý[ÛŠ
^ÚYŠ‹š[›™\Š]ž^ÛJ‹š[›™\‹š]\˜]Ü‹››Ü›X[Š_XØ]Ú

^Ü™]\›ˆJË›ÝÈ‹
_\™]\›ˆ
Ëœ™]\›ˆŠ_JJNÜ™]\›ˆÏ[Z˜[YK™\œ›ÜÙËœ™Z™XÝ

N›ÚYOO[ÏÙËœ™\ÛÛ™JŠ›ÚYL
JNŠJZJ
[˜Ý[ÛŠ
^Ü™]\›ˆŠËÊ_JJJK˜[YK™\œ›ÜÙËœ™Z™XÝ

NÙËœ™\ÛÛ™J
N™Ëœ™\ÛÛ™J
K[Š
[˜Ý[ÛŠ
^Ü™]\›ˆÊ
KŠ›ÚYL
_JJJ__J_KÏWÊL
KWÊLJNØJ‹K\Þ[˜È]\˜]Üˆ[\ˆŠK™^ÜÏY[˜Ý[ÛŠJ^Ý˜\ˆY[˜Ý[ÛŠ‹Š^ÛÊ‹š]\˜]Ü\‹š]\˜]Ü‹‹›™^\‹›™^
N›\‹‹\OYOÝŽžK‹›™^[™\]‹˜ÛÝ[\L‹™Û™OHLK
\ËŠ_NÜ™]\›ˆ‹œ›ÝÝ\OYOÝÎ˜‹Ÿ_KLŒMŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ^ßNÛ–ÜŠÎŒÊJÔÝš[™ÕYÈŠWOHžˆ‹™^ÜÏH–ÛØš™XÝ—HOOTÝš[™ÊŠ_KLŒMŽŠKŠOOžÈ\ÙHÝšXÝŽÜŠÌLLJJš\ÐÛÛ˜Ø]Ü™XYX›HŠ_KLNŠKŠOOžÈ\ÙHÝšXÝŽÜŠMŽ
J”Ù]‹
[˜Ý[ÛŠ
^Ü™]\›ˆ[˜Ý[ÛŠ
^Ü™]\›ˆ
\Ë\™Ý[Y[Ë›[™ÝØ\™Ý[Y[ÖÌN›ÚY
__JKŠŽLÎ
J_KLÍŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠÎLÎJNÝ™^ÜÏH[Š
[˜Ý[ÛŠ
^Ü™]\›ˆØš™XÝš\Ñ^[œÚX›JØš™XÝœ™]™[^[œÚ[ÛœÊßJJ_JJ_KLÎMŽŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠÎLÎJKO\ŠMLJKÏKÈßœ›ÝÝ\W‹ËÏY[˜Ý[ÛŠJ^Ý˜\ˆ[ØJ
WNÜ™]\›ˆOOZˆOOXÉ‰ŠJJOÛŠJNˆHYJ_KO[Ë››Ü›X[^™OY[˜Ý[ÛŠ
^Ü™]\›ˆÝš[™Ê
Kœ™\XÙJË‹ˆŠKÓÝÙ\Ø\ÙJ
_K[Ë™]O^ßKÏ[Ë“UU‘OH“ˆ‹[Ë”ÓQ’SH”ŽÝ™^ÜÏ[ßKLŽOžÈ\ÙHÝšXÝŽÝ˜\ˆOHPÑQ‘ÒR’ÓS“ÔT”ÕU•ÖV˜X˜ÙY™ÚZšÛ[›Ü\œÝ]Þ^ŒLŒÍMÎH‹YJÈŠËÈ‹YJÈ‹WÈ‹OY[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆO^ßKLÜÜŠÊÊYVÝ˜Ú\]
ŠWO\ŽÜ™]\›ˆ_NÝ™^ÜÏ^ÚL˜Îœ‹ÌšNšJŠKL˜Õ\››‹ÌšU\›šJŠ__KLÌMLÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÍÍ
KÏSX]˜XÛÜÚÏSX]›ÙËOSX]œÜ\SX]“ŒŽÛŠÝ\™Ù]ˆ“X]‹Ý]ˆL›Ü˜ÙYˆ\ßÌLOOSX]™›ÛÜŠÊ[X™\‹“PVÕSQJJ_ÊKÌ
HOOLKÌKØXÛÜÚ™[˜Ý[ÛŠ
^Ý˜\ˆOJÝÜ™]\›ˆOOÓ˜SŽ™OŽMLŒKŒLMMÛÊJJÛšJKLJØJKLJJ˜JJÌJJ__J_KLÌÎNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠMÍŠKO\ŠÍÌ
KÏSØš™XÝ™Ù]ÝÛ”›Ü\Q\ØÜš\ÜŽÝ™^ÜÏY[˜Ý[ÛŠ
^ÚYŠZJ\™]\›ˆ–ÝNÝ˜\ˆO\Ê‹
NÜ™]\›ˆI‰™K˜[Y__KLÍÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠŽMLJKO\ŠŒÍ
KÏ\ŠÍŒÊNÝ™^ÜÏY[˜Ý[ÛŠJ^ÚYŠŠ
KJJI‰™K˜ÛÛœÝXÝÜOO]
\™]\›ˆNÝ˜\ˆ\Ë™Š
NÜ™]\›Š‹œ™\ÛÛ™JJJK‹œ›ÛZ\Ù__KLÍLMŠKŠOOžÈ\ÙHÝšXÝŽÜŠŽJJ™›]Š_KLÍLMNŠKŠOOžÈ\ÙHÝšXÝŽÜŠLN
JÝ\™Ù]ˆ‘]H‹›ÝÎˆLKÝÑÓUÝš[™Î‘]Kœ›ÝÝ\KÕUÔÝš[™ßJ_KLÍLNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠŽMMJKÏ\ŠÎLÌŠKÏ\ŠMÍÍLJKO\ŠÍŒÊK\ŠLLÊKÏ\ŠÌLŠK\ŠLLÍÊKOH“›ÈÛ™H›ÛZ\ÙH™\ÛÛ™YŽÛŠÝ\™Ù]ˆ”›ÛZ\ÙH‹Ý]ˆL›Ü˜ÙYšKØ[žN™[˜Ý[ÛŠ
^Ý˜\ˆO]\Ë[ÊYÙÜ™YØ]Q\œ›ÜˆŠKXK™ŠJK[‹œ™\ÛÛ™K[‹œ™Z™XÝ[

[˜Ý[ÛŠ
^Ý˜\ˆ\ÊKœ™\ÛÛ™JKÏV×KOLLKHLNØÊ
[˜Ý[ÛŠ
^Ý˜\ˆÏXJÊËÏHLNÛ
ÊËJ‹K
K[Š
[˜Ý[ÛŠ
^Øß
HL

J_JK
[˜Ý[ÛŠ
^Øß
ÏHLÖÜ×O]K[
™]ÈŠËJJJ_JJ_JJKK[
™]ÈŠËJJ_JJNÜ™]\›ˆ™\œ›Ü‰‰™
˜[YJK‹œ›ÛZ\Ù__J_KLÍÍÍÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÍŒ
KÏ\ŠÍŒNM
KÏ\ŠŒŒŒÊNÛŠÝ\™Ù]ˆ“X\‹›ÝÎˆL™X[ˆL›Ü˜ÙYˆLKÙ]™\žN™[˜Ý[ÛŠ
^Ý˜\ˆO\Ê\ÊKZJ\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚY
NÜ™]\›ˆLHOO[ÊK
[˜Ý[ÛŠŠ^ÚYŠ\Š‹JJ\™]\›ˆL_JKL
__J_KLÎMNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠŒÍ
KÏ\ŠÍLJK›Û‘œ™Y^™KÏ\ŠLÍ
KO\ŠÎLÎJKSØš™XÝœÙX[ÛŠÝ\™Ù]ˆ“Øš™XÝ‹Ý]ˆL›Ü˜ÙY˜J
[˜Ý[ÛŠ
^Û
J_JJKÚ[Nˆ[ßKÜÙX[™[˜Ý[ÛŠ
^Ü™]\›ˆ	‰šJ
OÛ
Ê
JN_J_KLÎMÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠŒÍ
KÏ\ŠÍLJK›Û‘œ™Y^™KÏ\ŠLÍ
KO\ŠÎLÎJKSØš™XÝœ™]™[^[œÚ[ÛœÎÛŠÝ\™Ù]ˆ“Øš™XÝ‹Ý]ˆL›Ü˜ÙY˜J
[˜Ý[ÛŠ
^Û
J_JJKÚ[Nˆ[ßKÜ™]™[^[œÚ[ÛœÎ™[˜Ý[ÛŠ
^Ü™]\›ˆ	‰šJ
OÛ
Ê
JN_J_KMÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÎLÎJKÏ\ŠŒÍ
KÏ\ŠŒŒNMJKO\ŠMMLŠKSØš™XÝš\Ñœ›Þ™[ŽÛŠÝ\™Ù]ˆ“Øš™XÝ‹Ý]ˆL›Ü˜ÙY˜_J
[˜Ý[ÛŠ
^Û
J_JJ_KÚ\Ñœ›Þ™[Ž™[˜Ý[ÛŠ
^Ü™]\›ˆ\Ê
_JX_\œ˜^PY™™\ˆˆOO[Ê
J_H[	‰›

__J_KMLŽŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÍL
NÛŠÝ\™Ù]ˆ“Øš™XÝ‹Ý]ˆL›Ü˜ÙY“Øš™XÝš\Ñ^[œÚX›HOOZ_KÚ\Ñ^[œÚX›Nš_J_KMMÌŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÌMŠNÛŠÝ\™Ù]ˆ‘[˜Ý[Ûˆ‹›ÝÎˆL›Ü˜ÙY‘[˜Ý[Û‹˜š[™OOZ_KØš[™š_J_KMŽNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÍÌ
NÛŠÝ\™Ù]ˆ”Ýš[™È‹›ÝÎˆL›Ü˜ÙYœŠŒÌŒJJ™š^YŠ_KÙš^Y™[˜Ý[ÛŠ
^Ü™]\›ˆJ\Ë‹ˆ‹ˆŠ__J_KMŽŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠÎML
KOTÙ]œ›ÝÝ\NÝ™^ÜÏ^ÔÙ]Y›ŠK˜Y
K\Î›ŠKš\ÊK™[[Ý™N›ŠK™[]JK›ÝÎš__KMÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ‹KËËO\ŠMÍŠK\ŠMŽJKÏ\ŠMM
KXKœÝXÝ\™YÛÛ™KOXK\œ˜^PY™™\‹XK“Y\ÜØYÙPÚ[›™[HLNÚYŠÊ\Y[˜Ý[ÛŠ
^Ú
Ý˜[œÙ™\Ž–Ý_J_NÙ[ÙHYŠJ]ž^Ù
[
ÛÜšÙ\—Ý™XYÈŠJI‰Š[‹“Y\ÜØYÙPÚ[›™[
K	‰ŠO[™]ÈÏ[™]ÈJŠKÏY[˜Ý[ÛŠ
^ÚKœÜKœÜÝY\ÜØYÙJ[ÝJ_KOO\Ë˜ž]S[™Ý	‰ŠÊÊKOO\Ë˜ž]S[™Ý	‰Š[ÊJJ_XØ]Ú

^ß]™^ÜÏ\KMLŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÎML
KÏ\ŠÍÍÍŠKÏZJ×Kœ™]™\œÙJKOVÌK—NÛŠÝ\™Ù]ˆ\œ˜^H‹›ÝÎˆL›Ü˜ÙY”Ýš[™ÊJOOOTÝš[™ÊKœ™]™\œÙJ
J_KÜ™]™\œÙN™[˜Ý[ÛŠ
^Ü™]\›ˆÊ\ÊI‰Š\Ë›[™Ý]\Ë›[™Ý
KÊ\Ê__J_KMMLÎŠKŠOOžÈ\ÙHÝšXÝŽÓØš™XÝ™Yš[™T›Ü\JK—×Ù\Ó[Ù[H‹Ý˜[YNˆLJKK‘^˜Pž]\Ï]›ÚYØÛÛœÝ\ŠÍŠNÙK‘^˜Pž]\Ï^ÙÙ][Y[œÚ[ÛŽ™[˜Ý[ÛŠÝ\N[™Ý™_J^ÜÝÚ]Ú

^ØØ\ÙHœÚYÛ™YŽ˜Ø\ÙH[œÚYÛ™YŽœÝÚ]Ú
J^ØØ\ÙHN˜Ø\ÙHŽ˜Ø\ÙH˜Ø\ÙHœ™]\›žÝ\NÚ^™N™__XØ\ÙH™›Ø]ŽœÝÚ]Ú
J^ØØ\ÙH˜Ø\ÙHœ™]\›žÝ\NÚ^™N™____K\œÙN™[˜Ý[ÛŠ
^ÚYŠ˜ž]S[™Ý	ZHOL
]›ÝÈ™]È\œ›ÜŠ[˜[Y^˜Hž]\È“ˆ[™Ýˆ	Ý˜ž]S[™ÝX
NØÛÛœÝOV×NÙ›ÜŠ]LÜ˜ž]S[™ÝÜŠÏZJYKœ\Ú
ÊœÛXÙJ‹ŠÚJJJNÜ™]\›ˆ_K\œÙSÛ™NœßNØÛÛœÝOLNLŽÙ[˜Ý[ÛˆÊ
^ÚYŠ˜ž]S[™ÝOOZJ]›ÝÈ™]È\œ›ÜŠ[˜[Y^˜Hž]\È[žH[™Ýˆ	Ý˜ž]S[™ÝX
NØÛÛœÝO[‹š[˜\žKÑ]UšY]Ê
K[‹š[˜\žKÐÔÝš[™ÊœÛXÙJÍŠJKÏ[‹š[˜\žKÐÔÝš[™ÊœÛXÙJŒNLŠJKÏYK™Ù]Z[
ŠKOYK™Ù]Z[
ÊNÚYŠÏLLJ]›ÝÈ™]È\œ›ÜŠ[˜[Y^˜Hž]\È\Hˆ˜[YNˆ	ÛßX
NÚYŠOO[Ê\™]\›žÛ˜[YNœ‹\ØÜš\[ÛŽœË[™Ý˜_NØÛÛœÝJÏXKÚ\Ó›Ù]N›ÛÛX[ŠI˜ÊK\ÓZ[Ž›ÛÛX[ŠÏŒIŒJK\ÓX^›ÛÛX[ŠÏŒ‰ŒJK\ÔØØ[N›ÛÛX[ŠÏŒÉŒJK\ÓÙ™œÙ]›ÛÛX[ŠÏ	ŒJ_JNÝ˜\ˆÎØÛÛœÝY[˜Ý[ÛŠ
^ÜÝÚ]Ú

^ØØ\ÙHNœ™]\›ˆ‹‘[Y[œÚ[Û‹•\KZ[ØØ\ÙHŽœ™]\›ˆ‹‘[Y[œÚ[Û‹•\Kš[ØØ\ÙHÎœ™]\›ˆ‹‘[Y[œÚ[Û‹•\KZ[MŽØØ\ÙHœ™]\›ˆ‹‘[Y[œÚ[Û‹•\Kš[MŽØØ\ÙHNœ™]\›ˆ‹‘[Y[œÚ[Û‹•\KZ[ÌŽØØ\ÙHŽœ™]\›ˆ‹‘[Y[œÚ[Û‹•\Kš[ÌŽØØ\ÙHÎœ™]\›ˆ‹‘[Y[œÚ[Û‹•\KZ[ØØ\ÙHœ™]\›ˆ‹‘[Y[œÚ[Û‹•\Kš[ØØ\ÙHNœ™]\›ˆ‹‘[Y[œÚ[Û‹•\K™›Ø]ÌŽØØ\ÙHLœ™]\›ˆ‹‘[Y[œÚ[Û‹•\K™›Ø]_JÊNÚYŠZ
]›ÝÈ™]È\œ›ÜŠ˜Z[YÈ^˜XÝ[Y[œÚ[Ûˆ\Nˆ	ÛßX
NØÛÛœÝÝ\NKÚ^™N™OZÙ[˜Ý[Ûˆ

^ÜÝÚ]Ú
J^ØØ\ÙHœÚYÛ™YŽœ™]\›Š‹œ\œÙPšYÒ[
JK™Ù]šYÒ[
L
JNØØ\ÙH[œÚYÛ™YŽœ™]\›Š‹œ\œÙPšYÒ[
J
‹™Ù]šYÕZ[
JKL
JNØØ\ÙH™›Ø]Žœ™]\›ˆK™Ù]›Ø]
L
__XÛÛœÝ^Û˜[YNœ‹\ØÜš\[ÛŽœË\NK[™Ý™NÜ™]\›ˆš\Ó›Ù]I‰Š‹››Ù]O\

JKš\ÓZ[‰‰Š‹›Z[\

JKš\ÓX^	‰Š‹›X^\

JKš\ÔØØ[I‰Š‹œØØ[OYK™Ù]›Ø]
LLŠJKš\ÓÙ™œÙ]	‰Š‹›Ù™œÙ]YK™Ù]›Ø]
LÍŠJKŸ_KMŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ‹KËÏ\ŠÍÎLJKO\ŠÍÌ
K\ŠMÍŠKÏ\ŠMLJK\ŠŒÍ
KO\ŠÎLŽMÊK\ŠÍŽMMJK\ŠMŽŒÊK\ŠŽNJKO\ŠÍŽ
KÏ\ŠŒŒLŠKO\ŠMŒJKO\ŠÎÊK\ŠLŽMÊK\ŠÎŒÊKÏ\ŠÌÌÎLŠKÏ\ŠLLNJK]Ë™[™›Ü˜ÙKO]Ë™Ù]Ï[’[\œ˜^KOTÉ‰”Ëœ›ÝÝ\KÏ[•Z[Û[\Y\œ˜^KPÉ‰Ëœ›ÝÝ\KOTÉ‰žJÊKSI‰žJJKSØš™XÝœ›ÝÝ\K[•\Q\œ›Ü‹^
ÔÝš[™ÕYÈŠKWÊ•TQÐT”VWÕQÈŠKÏH•\Y\œ˜^PÛÛœÝXÝÜˆ‹[É‰ˆH]‰‰ˆ“Ü\˜HˆOOY
›Ü\˜JKHLKO^Ò[\œ˜^NŒKZ[\œ˜^NŒKZ[Û[\Y\œ˜^NŒK[M\œ˜^NŒ‹Z[M\œ˜^NŒ‹[Ì\œ˜^NZ[Ì\œ˜^N›Ø]Ì\œ˜^N›Ø]\œ˜^NŽKÏ^ÐšYÒ[\œ˜^NŽšYÕZ[\œ˜^NŽKY[˜Ý[ÛŠ
^Ý˜\ˆO^J
NÚYŠ
JJ^Ý˜\ˆQJJNÜ™]\›ˆ‰‰J‹ÊOÜ–Ó×NžŠJ__KÏY[˜Ý[ÛŠ
^ÚYŠZ

J\™]\›ˆLNÝ˜\ˆOY

NÜ™]\›ˆJKJ_JËJ_NÙ›ÜŠˆ[ˆJJÏJO[Û—JI‰šKœ›ÝÝ\JOØŠÊVÓ×OZN“HLNÙ›ÜŠˆ[ˆÊJÏJO[Û—JI‰šKœ›ÝÝ\JI‰ŠŠÊVÓ×OZJNÚYŠ
SŸXÊJ_OOOQ[˜Ý[Û‹œ›ÝÝ\JI‰ŠOY[˜Ý[ÛŠ
^Ý›ÝÈ™]ÈŠ’[˜ÛÜœ™XÝ[›ØØ][ÛˆŠ_KŠJY›ÜŠˆ[ˆJ[Û—I‰ŠÛ—KJNÚYŠ
SŸTŸOOT
I‰ŠRKœ›ÝÝ\KŠJY›ÜŠˆ[ˆJ[Û—I‰ŠÛ—Kœ›ÝÝ\KŠNÚYŠ‰‰žJ
HOOT‰‰ŠŠKI‰ˆ]J‹
JY›ÜŠˆ[ˆHLÊ‹ØÛÛ™šYÝ\˜X›NˆLÙ]™[˜Ý[ÛŠ
^Ü™]\›ˆ
\ÊOÝ\ÖÑN›ÚY_JKJ[Û—I‰™ŠÛ—KŠNÝ™^ÜÏ^ÓUU‘WÐT”VWÐ•Q‘‘T—Õ’QUÔÎ“‹TQÐT”VWÕQÎ‘‰‰‘U\Y\œ˜^N™[˜Ý[ÛŠ
^ÚYŠÊ
J\™]\›ˆÝ›ÝÈ™]ÈŠ•\™Ù]\È›ÝH\Y\œ˜^HŠ_KU\Y\œ˜^PÛÛœÝXÝÜŽ™[˜Ý[ÛŠ
^ÚYŠÊ
I‰Š]ŸJK
JJ\™]\›ˆÝ›ÝÈ™]ÈŠ

JÈˆ\È›ÝH\Y\œ˜^HÛÛœÝXÝÜˆŠ_K^Ü\Y\œ˜^SY]Ù™[˜Ý[ÛŠK‹Š^ÚYŠJ^ÚYŠŠY›ÜŠ˜\ˆH[ˆJ^Ý˜\ˆÏ[ÚWNÚYŠÉ‰JËœ›ÝÝ\K
J]ž^Ù[]HËœ›ÝÝ\VÝ_XØ]Ú
Š^Ýž^ÜËœ›ÝÝ\VÝOY_XØ]Ú

^ß__T–ÝI‰ˆ\ŸJ‹ÙN“‰‰“VÝ_KŠ__K^Ü\Y\œ˜^TÝ]XÓY]Ù™[˜Ý[ÛŠKŠ^Ý˜\ˆ‹NÚYŠJ^ÚYŠŠ^ÚYŠŠY›ÜŠˆ[ˆJZYŠ
O[Û—JI‰JK
J]ž^Ù[]HVÝ_XØ]Ú

^ßZYŠVÝI‰ˆ\Š\™]\›ŽÝž^Ü™]\›ˆJKÙN“‰‰’VÝ_J_XØ]Ú

^ß_Y›ÜŠˆ[ˆJHJO[Û—J_VÝI‰ˆ\ŸJKJ__KÙ]\Y\œ˜^PÛÛœÝXÝÜŽž‹\ÕšY]Î™[˜Ý[ÛŠ
^ÚYŠZ

J\™]\›ˆLNÝ˜\ˆOY

NÜ™]\›ˆ‘]UšY]ÈOOY_JKJ_JËJ_K\Õ\Y\œ˜^N‘Ë\Y\œ˜^N’K\Y\œ˜^T›ÝÝ\N”Ÿ_KMLNOžÈ\ÙHÝšXÝŽÝ˜\ˆOH›Øš™XÝO]\[ÙˆØÝ[Y[	‰™ØÝ[Y[˜[Ý™^ÜÏ]›ÚYOOYI‰›ÚYOOYOÙ[˜Ý[ÛŠ
^Ü™]\›ˆ™[˜Ý[ÛˆO]\[ÙˆOOY_N™[˜Ý[ÛŠ
^Ü™]\›ˆ™[˜Ý[ÛˆO]\[Ùˆ_KMLLMNŠKŠOOžÈ\ÙHÝšXÝŽÜŠLÎ
_KMLNLŽŠJOOžÈ\ÙHÝšXÝŽÓØš™XÝ™Yš[™T›Ü\JK—×Ù\Ó[Ù[H‹Ý˜[YNˆLJKK”Ý\]›ÚYK”Ý\^Ùœ›ÛR[™^™[˜Ý[ÛŠ
^ÚYŠN
]›ÝÈ™]È\œ›ÜŠ[˜[YÝ\[™^ˆ	ÝX
NÜ™]\›–ÌIÌNŒŒIŒOÌNŒŒ‰ŒOÌNŒ_K\Ý™[˜Ý[ÛŠ
^Ü™]\›–ÖÌKÌWKÌKKÌKWKÌKKÌKWKÌKKKÌKKWW___KMMNOžÈ\ÙHÝšXÝŽÝ™^ÜÏ]OˆH]	‰ŠœÞ[X›ÛO]\[ÙˆÞ[X›Û›ØœÙ\˜X›I‰ˆ™[˜Ý[ÛˆO]\[ÙˆÔÞ[X›Û›ØœÙ\˜X›WOÝOO]ÔÞ[X›Û›ØœÙ\˜X›WJ
Nˆ™[˜Ý[ÛˆO]\[ÙˆÈØœÙ\˜X›H—I‰OO]ÈØœÙ\˜X›H—J
J_KMMÍÎŠKŠOOžÈ\ÙHÝšXÝŽÜŠMNŒÊJ’[Ìˆ‹
[˜Ý[ÛŠ
^Ü™]\›ˆ[˜Ý[ÛŠK‹Š^Ü™]\›ˆ
\ËK‹Š__JJ_KMMŒÍŽŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠMÍŠKO\ŠÎML
KÏ\ŠÌŠKÏ\ŠMÍŽMŠKO\ŠMLMŽJK\ŠÌÎM
KÏ\ŠMÊK\ŠMM
KO[‹œÝXÝ\™YÛÛ™K[‹\œ˜^PY™™\‹[‹‘]UšY]ËSX]›Z[‹OYœ›ÝÝ\KÏ\œ›ÝÝ\KOZJKœÛXÙJKO\ÊKœ™\Ú^˜X›H‹™Ù]ŠK\ÊK›X^ž]S[™Ý‹™Ù]ŠKZJË™Ù][
KÏZJËœÙ][
NÝ™^ÜÏJÊI‰™[˜Ý[ÛŠKŠ^Ý˜\ˆ‹O[

KÏ]›ÚYOOYOÚN›ÊJKOH^_^J
NÚYŠJ
K	‰Š]JÝ˜[œÙ™\Ž–Ý_JKOOO\É‰ŠŸJJJ\™]\›ˆÚYŠO\É‰Š\ŸJJ[PJÊNÙ[Ù^Ý˜\ˆÏ\‰‰ˆ[I‰ÞÛX^ž]S[™ÝŠ
_N›ÚYÛ[™]È
ËÊNÙ›ÜŠ˜\ˆÏ[™]È

K[™]È
ŠKOYŠËJKÏLÔÏNÔÊÊÊWÊ‹Ë
ËÊJ_\™]\›ˆÊ
KŸ_KMŒŽNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÎML
KÏ\ŠŒÍŒÊKÏ\ŠÎLŽMÊKO\ŠŒLÌÊKœÝ\\ŠÍLŠKÏP\œ˜^KT™YÑ^™\ØØ\KOZJˆ‹˜Ú\]
KZJˆ‹˜Ú\ÛÙP]
KZJKŒKÔÝš[™ÊKZJ×Kš›Ú[ŠKOK×–ÌNXK^—KÚKÏK×–É

JŠË‹ÏÖ×WžßWKËOT™YÑ^
—–ÈWˆÉI‰ËNŽÏOˆŠÛ
È—HŠKOZJK™^XÊK^È—Žˆ‹—ˆŽˆ›ˆ‹—ˆŽˆˆ‹—ˆŽˆ™ˆ‹—ˆŽˆœˆŸKY[˜Ý[ÛŠ
^Ý˜\ˆO\


KMŠNÜ™]\›ˆK›[™ÝÏÈ—ŠØJK‹ŒŠNˆ—HŠØJKŒŠ_NÛŠÝ\™Ù]ˆ”™YÑ^‹Ý]ˆL›Ü˜ÙYˆZ—ŒXˆˆOOZ
˜XˆŠ_KÙ\ØØ\N™[˜Ý[ÛŠ
^ÜÊ
NÙ›ÜŠ˜\ˆO]›[™ÝXÊJKLÛNÛŠÊÊ^Ý˜\ˆO]JŠNÚYŠOO[‰‰žJKJJ\–Û—O^
JNÙ[ÙHYŠÊ‹JJ\–Û—OH—ŠÝ–ÚWNÙ[ÙHYŠJËJJ\–Û—OH—ŠÚNÙ[ÙHYŠJKJJ\–Û—O^
JNÙ[Ù^Ý˜\ˆOY
K
NÍMLŽMˆOJŒÍ	˜JOÜ–Û—OZN˜OMMŒÌŒŠÌOY_MŒÌŒOJLL‰™
ŠÌJJOÜ–Û—O^
JNŠ–Û—OZK–ÊÊÛ—O]JŠJ__\™]\›ˆŠ‹ˆŠ__J_KMŒMÎŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠŽMMJKÏ\ŠÎLÌŠKÏ\ŠÍŒÊKO\ŠLLÊK\ŠÌLŠNÛŠÝ\™Ù]ˆ”›ÛZ\ÙH‹Ý]ˆL›Ü˜ÙYœŠLLÍÊ_KØ[Ù]Y™[˜Ý[ÛŠ
^Ý˜\ˆO]\Ë[Ë™ŠJK\‹œ™\ÛÛ™KÏ\‹œ™Z™XÝXJ
[˜Ý[ÛŠ
^Ý˜\ˆ\ÊKœ™\ÛÛ™JKÏV×KOLÏLNÛ

[˜Ý[ÛŠ
^Ý˜\ˆÏXJÊËHLNØÊÊËJ‹K
K[Š
[˜Ý[ÛŠ
^Û
HLÖÜ×O^ÜÝ]\Îˆ™[š[Y‹˜[YNKKXßŠÊJ_JK
[˜Ý[ÛŠ
^Û
HLÖÜ×O^ÜÝ]\Îˆœ™Z™XÝY‹™X\ÛÛŽKKXßŠÊJ_JJ_JJKKXßŠÊ_JJNÜ™]\›ˆ™\œ›Ü‰‰˜Ê˜[YJK‹œ›ÛZ\Ù__J_KMŒÌNNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠŽMLJKO\ŠMLÎJNÝ™^ÜÏY[˜Ý[ÛŠK‹Ê^Ýž^Ü™]\›ˆÏÙJŠŠVÌK–ÌWJN™JŠ_XØ]Ú
J^ÚJ›ÝÈ‹J___KMŒÍŽNŠKŠOOžÈ\ÙHÝšXÝŽÜŠLN
JÝ\™Ù]ˆ“X]‹Ý]ˆL›Ü˜ÙYˆLKÚ[][™[˜Ý[ÛŠJ^Ý˜\ˆMMLÍKJÝOJÙKÏ[‰œ‹ÏZIœ‹O[ŒM‹ZOŒM‹ÏJJ›ÏŒ
JÊÊ›ÏŒMŠNÜ™]\›ˆJ›
ÊÏŒMŠJÊ
Ê›Œ
JÊÉœŠOŒMŠ__J_KMŒÎMNOžÈ\ÙHÝšXÝŽÝ™^ÜÏHL_KMLNŠKŠOOžÈ\ÙHÝšXÝŽÜ‹™
KÑNŠ
OOœËÌÎŠ
OO˜ËÌŽŠ
OO˜KÚÎŠ
OO›‹ŽŠ
OO›šÎŠ
OOšK	Š
OO›ßJNØÛÛœÝKLKOLÏLKÏL‹OLËMŒÍÎLÍËÏKJKÌŽNŒMÌŒŒÍMŒÊ›[
_KMŽNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠÍÌ
KO\ŠŽŠKÏ\ŠLLÊKÏ\ŠŽMLJKO\ŠLÎMÊK\ŠÌLÌŠNÙK™[‰‰ˆZOÓØš™XÝ™Yš[™T›Ü\Y\Î™[˜Ý[ÛŠJ^ÛÊ
NÙ›ÜŠ˜\ˆ‹XJJKO[
JKÏZK›[™ÝLØÏšÊ\Ë™ŠZVÚ
Ê×K–Ü—JNÜ™]\›ˆ_KMŽÍÎOžÈ\ÙHÝšXÝŽÝ˜\ˆOU\Q\œ›ÜŽÝ™^ÜÏY[˜Ý[ÛŠ
^ÚYŠŽLÌNNLMÍNLJ]›ÝÈJ“X^[][H[ÝÙY[™^^ÙYYYŠNÜ™]\›ˆ_KMŽÎŠKŠOOžÈ\ÙHÝšXÝŽÜŠLLLÍ
_KMÌŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠÍÌ
KO\ŠLLÊKÏ\ŠŽN
NÝ™^ÜÏY[˜Ý[ÛŠKŠ^ÛÚK™ŠKÊŠJNÙWO\Ÿ_KMÌŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠMŠKš\ÎÝ™^ÜÏY[˜Ý[ÛŠ
^Ü™]\›ˆŠ
K_KMÍÍLNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠMÍŠKO\ŠMLJNÝ™^ÜÏY[˜Ý[ÛŠJ^Ü™]\›ˆ\™Ý[Y[Ë›[™ÝÊ[–ÝKJŠOÜŽ›ÚY
N›–ÝI‰›–ÝVÙWNÝ˜\ˆŸ_KMÎLŽŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÎLŽMÊKÏ\ŠLÍMÊKÏ\ŠMŽŒÊKO\ŠMÍJK\ŠLLŽMŠKÏXJœÞ[X›Û]Ë\Ýš[™Ë\™YÚ\ÝžHŠNÛŠÝ\™Ù]ˆ”Þ[X›Û‹Ý]ˆL›Ü˜ÙYˆ[KÚÙ^Q›ÜŽ™[˜Ý[ÛŠ
^ÚYŠ\Ê
J]›ÝÈ™]È\Q\œ›ÜŠÊ
JÈˆ\È›ÝHÞ[X›ÛŠNÚYŠJË
J\™]\›ˆÖÝ__J_KMÎLMŽŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠÍŒ
KO\ŠŽMMJKÏ\ŠNJKÏ\ŠMŒÌNJKO\ŠŒJK\ŠÌÍLMÊKÏ\ŠŒNN
K\ŠMÌ
KO\ŠÌJK\ŠLLJKP\œ˜^NÝ™^ÜÏY[˜Ý[ÛŠ
^Ý˜\ˆO\Ê
K[
\ÊKX\™Ý[Y[Ë›[™ÝOYŒOØ\™Ý[Y[ÖÌWN›ÚYÏ]›ÚYOO[NÙÉ‰ŠO[ŠKŒØ\™Ý[Y[ÖÌ—N›ÚY
JNÝ˜\ˆKK‹ËËY
JKOLÚYŠXŸ\ÏOO\	‰˜JŠJY›ÜŠOXÊJKO\Û™]È\ÊJNœ
JNÐO‘NÑJÊÊ]ÏYÏÛJVÑWKJN™VÑWK
KKÊNÙ[ÙH›ÜŠO\Û™]È\Î–×KÏJ]JKŠJK›™^ÈJZJË
JK™Û™NÑJÊÊ]ÏYÏÛÊKÝ‹˜[YKWKL
N‹˜[YK
KKÊNÜ™]\›ˆK›[™ÝQK__KNŒNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠÎML
KÏ\ŠMLJKÏ\ŠÌÍÌŠKO\ŠÎLŽMÊK\ŠÍÌ
KÏSØš™XÝ™Ù]ÝÛ”›Ü\Q\ØÜš\Ü‹K×—Ê˜Û\Ü×‹ËOZJ™^XÊNÛŠÝ\™Ù]ˆ‘[˜Ý[Ûˆ‹Ý]ˆLÚ[NˆL›Ü˜ÙYˆLKÚ\ÐØ[X›N™[˜Ý[ÛŠ
^Ü™]\›ˆÊ
I‰ˆY[˜Ý[ÛŠ
^Ýž^ÚYŠ[]JÊ
JJ\™]\›ˆL_XØ]Ú

^ß]˜\ˆOXÊœ›ÝÝ\HŠNÜ™]\›ˆHYI‰˜JKÜš]X›HŠI‰ˆYKÜš]X›_J
__J_KNÍŒÎŠKŠOOžÈ\ÙHÝšXÝŽÓØš™XÝ™Yš[™T›Ü\JK—×Ù\Ó[Ù[H‹Ý˜[YNˆLJKK’Y\˜\˜ÚO]›ÚYØÛÛœÝ\ŠÍŠKO\ŠLÌŽJNÙ[˜Ý[ÛˆÊ
^ØÛÛœÝO[‹š[˜\žKÑ]UšY]Ê
NÚYŠK˜ž]S[™Ý	ZKšY\˜\˜ÚR][S[™ÝOL
]›ÝÈ™]È\œ›ÜŠ[˜[YY\˜\˜ÚHYÙH[™Ýˆ	ÙK˜ž]S[™ÝX
NØÛÛœÝ^ßKÏ^ßNÙ›ÜŠ]LÝK˜ž]S[™ÝÝ
ÏZKšY\˜\˜ÚR][S[™Ý
^ØÛÛœÝOYK™Ù][ÌŠ
ÌL
KÏYK™Ù][ÌŠ
ÍL
KOYK™Ù][ÌŠ
ÎL
KYK™Ù][ÌŠ
ÌL‹L
KÏJ‹œ\œÙPšYÒ[
J
‹™Ù]šYÕZ[
JK
ÌM‹L
JKYK™Ù][ÌŠ
ÌL
KOYK™Ù][ÌŠ
ÌŽL
K[‹’Ù^KÔÝš[™ÊÚKËKJNÚYŠOLJ]›ÝÈ™]È\œ›ÜŠ[˜[YY\˜\˜ÚHÚ[ÛÝ[]Ù^Nˆ	ÙX
NËLOOO]OÜÖÙO^ÜYÙSÙ™œÙ]˜ËYÙS[™ÝšNœ–ÙO^ÜÚ[ÛÝ[KÚ[]SÙ™œÙ]˜ËÚ[]S[™Ýš_\™]\›žÛ›Ù\Îœ‹YÙ\Îœß_YK’Y\˜\˜ÚO^Ü\œÙNœËØY˜\Þ[˜È[˜Ý[ÛŠJ^ØÛÛœÝ[‹‘Ù]\‹˜Ü™X]J
NÜ™]\›ˆÊ]ØZ]ŠKœYÙSÙ™œÙ]KœYÙSÙ™œÙ]
ÙKœYÙS[™Ý
J___KNŽŠKŠOOžÈ\ÙHÝšXÝŽÜŠŒÍÎLŠKŠÌÌÍÊNÝ˜\ˆ\ŠLN
KO\ŠMÍŠKÏ\ŠLÌÎJKÏ\ŠMÍÍLJKO\ŠŽMMJK\ŠÎML
KÏ\ŠÍÌ
K\ŠÍMŠKO\ŠÍŽ
K\ŠŒŒLŠK\ŠMŒÎJK\ŠLŽÊKO\ŠÌÎNM
KÏ\ŠLLNJKO\ŠLÎJKO\ŠMLJK\ŠÎLŽMÊK\ŠÍŒ
KÏ\ŠÍŽMMJKÏ\ŠŽMLJK\ŠŒÍ
KO\ŠMJKÏ\ŠŒÍŒ
KO\ŠŽN
KÏ\ŠÌJK\ŠLLJKO\ŠŒLŽJK\ŠŒŽLŠK\ŠÎŒÊK\ŠÍ
KT
š]\˜]ÜˆŠKH•T“ÙX\˜Ú\˜[\È‹ÏQ
È’]\˜]Üˆ‹YËœÙ]YË™Ù]\‘›ÜŠ
KOYË™Ù]\‘›ÜŠÊKÏ\Ê™™]ÚŠK\Ê”™\]Y\ÝŠKÏ\Ê’XY\œÈŠKO^‰‰ž‹œ›ÝÝ\KQÉ‰‘Ëœ›ÝÝ\KZK•\Q\œ›Ü‹ZK™[˜ÛÙUT’PÛÛ\Û™[OTÝš[™Ë™œ›ÛPÚ\ÛÙKÏ[Ê”Ýš[™È‹™œ›ÛPÛÙTÚ[ŠKO\\œÙR[[
ˆ‹˜Ú\]
K	[
×Kš›Ú[ŠK[
×Kœ\Ú
KÏ[
ˆ‹œ™\XÙJK[
×KœÚY
K[
×KœÜXÙJK][
ˆ‹œÜ]
K[
ˆ‹œÛXÙJK[
Ë‹Ë™^XÊK]K×
ËÙËÝK×–ÌNXKY—JÉÚKÝY[˜Ý[ÛŠJ^Ý˜\ˆ\
KJÌŠNÜ™]\›ˆ
ÝŠOÖJ‹MŠN“˜SŸK]Y[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆOLLLŽÜŒ	‰	œŽÜLJYJÊÎÜ™]\›ˆ_KY[˜Ý[ÛŠ
^Ý˜\ˆO[[ÜÝÚ]Ú
›[™Ý
^ØØ\ÙHN™O]ÌNØœ™XZÎØØ\ÙHŽ™OJÌIÌJOŸŒÉÌWNØœ™XZÎØØ\ÙHÎ™OJMIÌJOLŸ
ŒÉÌWJOŸŒÉÌ—NØœ™XZÎØØ\ÙH™OJÉÌJON
ŒÉÌWJOLŸ
ŒÉÌ—JOŸŒÉÌ×_\™]\›ˆOŒLLMLLOÛ[™_KÝY[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆOJRÊ]ˆŠJK›[™ÝHˆ‹LÛNÊ^Ý˜\ˆOV
ŠNÚYŠ‰HOOZJ^ÚYŠ‰HOOV
ŠÌJ_ŠÌÏ™J^ÜŠÏH‰H‹ŠÊÎØÛÛ[Y_]˜\ˆÏ[Ý
ŠÌJNÚYŠÈO\Ê^ÜŠÏZKŠÊÎØÛÛ[Y_[ŠÏLŽÝ˜\ˆÏX]
ÊNÚYŠOO[ÊZO\JÊNÙ[Ù^ÚYŠOOO[ßÏ
^ÜŠÏH»ïïH‹ŠÊÎØÛÛ[Y_Y›ÜŠ˜\ˆOVÜ×KLNÛÉ‰ˆJÊÈ
ÊÛ™_‰HˆOOV
ŠJNÊ^Ý˜\ˆÏ[Ý
ŠÌJNÚYŠÈOXÊ^ÛŠÏLÎØœ™XZßZYŠÏŒNL_ÏLŽ
Xœ™XZÎÒŠKÊKŠÏL‹
ÊßZYŠK›[™ÝOO[Ê^ÜŠÏH»ïïHŽØÛÛ[Y_]˜\ˆ[
JNÛ[OOZÜŠÏH»ïïHŽšOUÊ
__\ŠÏZKŠÊß\™]\›ˆŸKKÖÈIÊ
_—_	LŒÙË]^ÈˆHŽˆ‰LŒH‹‰ÈŽˆ‰LÈ‹ŠŽˆ‰LŽ‹ŠHŽˆ‰LŽH‹ŸˆŽˆ‰MÑH‹‰LŒŽˆŠÈŸKY[˜Ý[ÛŠ
^Ü™]\›ˆ]Ý_KY[˜Ý[ÛŠ
^Ü™]\›ˆÊ

K
_K[J
[˜Ý[ÛŠJ^ÓŠ\ËÝ\N“Ë\™Ù]‘Š
K™[šY\Ë[™^ŒÚ[™™_J_JK
[˜Ý[ÛŠ
^Ý˜\ˆUJ\ÊKO]\™Ù]]š[™^
ÊÎÚYŠY_YK›[™Ý
\™]\›ˆ\™Ù][[J›ÚYL
NÝ˜\ˆYVÜ—NÜÝÚ]Ú
šÚ[™
^ØØ\ÙHšÙ^\ÈŽœ™]\›ˆJ‹šÙ^KLJNØØ\ÙH˜[Y\ÈŽœ™]\›ˆJ‹˜[YKLJ_\™]\›ˆJÛ‹šÙ^K‹˜[YWKLJ_JKL
K]Y[˜Ý[ÛŠ
^Ý\Ë™[šY\ÏV×K\Ë\›[[›ÚYOO]	‰ŠŠ
OÝ\Ëœ\œÙSØš™XÝ

N\Ëœ\œÙT]Y\žJœÝš[™ÈO]\[ÙˆÈÈOOV

OÜ
JN‘J
JJ_NÛ]œ›ÝÝ\O^Ý\N‘š[™T“™[˜Ý[ÛŠ
^Ý\Ë\›]\Ë\]J
_K\œÙSØš™XÝ™[˜Ý[ÛŠ
^Ý˜\ˆK‹‹KËËÏ]\Ë™[šY\ËU

NÚYŠ
Y›ÜŠJOPÊ
JK›™^ÈJXJ‹JJK™Û™NÊ^ÚYŠÏJOPÊÊ‹˜[YJJJK›™^
ÏXJËJJK™Û™_
XJËJJK™Û™_XJËJK™Û™J]›ÝÈ™]ÈŠ‘^XÝYÙ\]Y[˜ÙHÚ][™ÝˆŠNÒŠËÚÙ^N‘JË˜[YJK˜[YN‘J˜[YJ_J_Y[ÙH›ÜŠ˜\ˆH[ˆ
]ŠJI‰’ŠËÚÙ^NK˜[YN‘JÝWJ_J_K\œÙT]Y\žN™[˜Ý[ÛŠ
^ÚYŠ
Y›ÜŠ˜\ˆK‹]\Ë™[šY\ËOY]
‰ˆŠKÏLÜÏK›[™ÝÊJOZVÜÊÊ×JK›[™Ý	‰ŠY]
KHŠKŠ‹ÚÙ^N˜Ý
ŠŠJK˜[YN˜Ý
	
‹HŠJ_JJ_KÙ\šX[^™N™[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆO]\Ë™[šY\ËV×KLÛK›[™ÝÊ]YVÛŠÊ×KŠ‹
šÙ^JJÈHŠÜ
˜[YJJNÜ™]\›ˆ	
‹‰ˆŠ_K\]N™[˜Ý[ÛŠ
^Ý\Ë™[šY\Ë›[™ÝL\Ëœ\œÙT]Y\žJ\Ë\›œ]Y\žJ_K\]UT“™[˜Ý[ÛŠ
^Ý\Ë\›	‰\Ë\›\]J
__NÝ˜\ˆÝY[˜Ý[ÛŠ
^ÐJ\Ë]
NÝ˜\ˆSŠ\Ë™]È]
\™Ý[Y[Ë›[™ÝŒØ\™Ý[Y[ÖÌN›ÚY
JNØß
\ËœÚ^™O]™[šY\Ë›[™Ý
_K]YÝœ›ÝÝ\NÚYŠ
]Ø\[™™[˜Ý[ÛŠJ^Ý˜\ˆQŠ\ÊNÔŠ\™Ý[Y[Ë›[™ÝŠKŠ‹™[šY\ËÚÙ^N‘J
K˜[YN‘JJ_JKß\Ë›[™Ý
ÊË‹\]UT“

_K[]N™[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆOQŠ\ÊKTŠ\™Ý[Y[Ë›[™ÝJKYK™[šY\ËOQJ
KÏ\Ý›ÚY˜\™Ý[Y[ÖÌWKÏ]›ÚYOO\ÏÜÎ‘JÊKOLØO‹›[™ÝÊ^Ý˜\ˆ[–ØWNÚYŠšÙ^HOOZ_›ÚYOO[É‰›˜[YHOO[ÊXJÊÎÙ[ÙHYŠ
‹KJK›ÚYOO[ÊXœ™XZßXß
\ËœÚ^™O[‹›[™Ý
KK\]UT“

_KÙ]™[˜Ý[ÛŠ
^Ý˜\ˆOQŠ\ÊK™[šY\ÎÔŠ\™Ý[Y[Ë›[™ÝJNÙ›ÜŠ˜\ˆQJ
KLÛK›[™ÝÛŠÊÊZYŠVÛ—KšÙ^OOO\Š\™]\›ˆVÛ—K˜[YNÜ™]\›ˆ[KÙ][™[˜Ý[ÛŠ
^Ý˜\ˆOQŠ\ÊK™[šY\ÎÔŠ\™Ý[Y[Ë›[™ÝJNÙ›ÜŠ˜\ˆQJ
KV×KOLÚOK›[™ÝÚJÊÊYVÚWKšÙ^OOO\‰‰’Š‹VÚWK˜[YJNÜ™]\›ˆŸK\Î™[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆOQŠ\ÊK™[šY\ËTŠ\™Ý[Y[Ë›[™ÝJKQJ
KO\Ý›ÚY˜\™Ý[Y[ÖÌWKÏ]›ÚYOOZOÚN‘JJKÏLÛÏK›[™ÝÊ^Ý˜\ˆOYVÛÊÊ×NÚYŠKšÙ^OOO[‰‰Š›ÚYOO\ßK˜[YOOO\ÊJ\™]\›ˆL\™]\›ˆL_KÙ]™[˜Ý[ÛŠJ^Ý˜\ˆQŠ\ÊNÔŠ\™Ý[Y[Ë›[™ÝJNÙ›ÜŠ˜\ˆ‹O\‹™[šY\ËÏHLKÏQJ
KOQJJKLÛK›[™ÝÛ
ÊÊJZVÛJKšÙ^OOO[É‰ŠÏÝ
KKKJNŠÏHL‹˜[YOXJJNÜßŠKÚÙ^N›Ë˜[YN˜_JKß
\ËœÚ^™OZK›[™Ý
K‹\]UT“

_KÛÜ™[˜Ý[ÛŠ
^Ý˜\ˆQŠ\ÊNÐŠ™[šY\Ë
[˜Ý[ÛŠJ^Ü™]\›ˆšÙ^O™KšÙ^OÌN‹L_JJK\]UT“

_K›Ü‘XXÚ™[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆKQŠ\ÊK™[šY\Ë^
\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚY
KOLÚO‹›[™ÝÊ[Š
O\–ÚJÊ×JK˜[YKKšÙ^K\Ê_KÙ^\Î™[˜Ý[ÛŠ
^Ü™]\›ˆ™]È
\ËšÙ^\ÈŠ_K˜[Y\Î™[˜Ý[ÛŠ
^Ü™]\›ˆ™]È
\Ë˜[Y\ÈŠ_K[šY\Î™[˜Ý[ÛŠ
^Ü™]\›ˆ™]È
\Ë™[šY\ÈŠ__KÙ[[Y\˜X›NˆLJKJ]]™[šY\ËÛ˜[YNˆ™[šY\ÈŸJKJ]ÔÝš[™È‹
[˜Ý[ÛŠ
^Ü™]\›ˆŠ\ÊKœÙ\šX[^™J
_JKÙ[[Y\˜X›NˆLJKÉ‰™
]œÚ^™H‹ÙÙ]™[˜Ý[ÛŠ
^Ü™]\›ˆŠ\ÊK™[šY\Ë›[™ÝKÛÛ™šYÝ\˜X›NˆL[[Y\˜X›NˆLJKŠÝ
KŠÙÛØ˜[ˆLÛÛœÝXÝÜŽˆL›Ü˜ÙYˆZKÕT“ÙX\˜Ú\˜[\Î™ÝJKZ	‰žJÊJ^Ý˜\ˆ][
‹š\ÊK[
‹œÙ]
KY[˜Ý[ÛŠ
^ÚYŠŠ
J^Ý˜\ˆK]˜›ÙNÚYŠÊŠOOOQ
\™]\›ˆO]šXY\œÏÛ™]ÈÊšXY\œÊN›™]ÈË]
K˜ÛÛ[]\HŠ_
K˜ÛÛ[]\H‹˜\XØ][Û‹Þ]ÝÝËY›Ü›K]\›[˜ÛÙYØÚ\œÙ]UU‹NŠKÊØ›ÙN“JJŠJKXY\œÎ“JJ_J_\™]\›ˆNÚYŠJÊI‰›ŠÙÛØ˜[ˆL[[Y\˜X›NˆLÛØ[Ù]Ù]ˆL›Ü˜ÙYˆLKÙ™]Ú™[˜Ý[ÛŠ
^Ü™]\›ˆÊ\™Ý[Y[Ë›[™ÝŒOÞ
\™Ý[Y[ÖÌWJNžßJ__JKJŠJ^Ý˜\ˆÝY[˜Ý[ÛŠ
^Ü™]\›ˆJ\ËJK™]ÈŠ\™Ý[Y[Ë›[™ÝŒOÞ
\™Ý[Y[ÖÌWJNžßJ_NÔK˜ÛÛœÝXÝÜWÝÝœ›ÝÝ\OTKŠÙÛØ˜[ˆLÛÛœÝXÝÜŽˆLÛØ[Ù]Ù]ˆL›Ü˜ÙYˆLKÔ™\]Y\Ý—ÝJ__]™^ÜÏ^ÕT“ÙX\˜Ú\˜[\Î™ÝÙ]Ý]N‘Ÿ_KNŽLŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLN
KO\ŠLÌL
KÏSX]™^ÛŠÝ\™Ù]ˆ“X]‹Ý]ˆLKÝ[š™[˜Ý[ÛŠ
^Ý˜\ˆOJÝZJJKZJYJNÜ™]\›ˆOOLKÌÌN›OOLKÌËLNŠ‹[ŠKÊÊJJÜÊYJJ__J_KNÌŒNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠÍÌ
KO\ŠÎML
KÏ\ŠŒŒLŠKÏUT“ÙX\˜Ú\˜[\Ëœ›ÝÝ\KOZJË™›Ü‘XXÚ
NÛ‰‰ˆJœÚ^™Hš[ˆÊI‰œÊËœÚ^™H‹ÙÙ]™[˜Ý[ÛŠ
^Ý˜\ˆLÜ™]\›ˆJ\Ë
[˜Ý[ÛŠ
^Ý
ÊßJJKKÛÛ™šYÝ\˜X›NˆL[[Y\˜X›NˆLJ_KNNLŽŠKŠOOžÈ\ÙHÝšXÝŽÜŠNLLJ_KNLŒNŠKŠOOžÈ\ÙHÝšXÝŽÜŠNÍŠ_KNLÎŠKŠOOžÈ\ÙHÝšXÝŽÓØš™XÝ™Yš[™T›Ü\JK—×Ù\Ó[Ù[H‹Ý˜[YNˆLJKKœÙ\šX[^™OYK™\Ù\šX[^™OYKœ™YÚ\Ý\”Ù\šX[^™\]›ÚYØÛÛœÝ\ŠNLM
NÛ]O[‹‘Y˜][Ù\šX[^™\ŽÙKœ™YÚ\Ý\”Ù\šX[^™\Y[˜Ý[ÛŠ
^ÚO[‹™^[™Ù\šX[^™\ŠK
_KK™\Ù\šX[^™OY[˜Ý[ÛŠ
^Ü™]\›ˆK™\Ù\šX[^™J
_KKœÙ\šX[^™OY[˜Ý[ÛŠ
^Ü™]\›ˆKœÙ\šX[^™J
__KNMNŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ‹O\ŠLN
KÏ\ŠÍÍŠKÏ\ŠÍÌÍÊK™‹O\ŠNM
K\ŠMJKÏ\ŠŒLLJK\ŠÍÍL
KO\ŠMÍŠK\ŠMŒÎMJK\Êˆ‹œÛXÙJKSX]›Z[‹O]J™[™ÕÚ]ŠNÚJÝ\™Ù]ˆ”Ýš[™È‹›ÝÎˆL›Ü˜ÙYˆJY	‰ˆ[I‰Š[ÊÝš[™Ëœ›ÝÝ\K™[™ÕÚ]ŠK‰‰ˆ[‹Üš]X›J_J_KÙ[™ÕÚ]™[˜Ý[ÛŠ
^Ý˜\ˆO[

\ÊJNØÊ
NÝ˜\ˆX\™Ý[Y[Ë›[™ÝŒOØ\™Ý[Y[ÖÌWN›ÚYYK›[™ÝO]›ÚYOO\ÛŽ™ŠJŠKŠKÏ[

NÜ™]\›ˆ
KK\Ë›[™ÝJOOO\ß_J_KNMNLŠKŠOOžÈ\ÙHÝšXÝŽÝ˜\ˆ\ŠLLŽLJKOT˜[™ÙQ\œ›ÜŽÝ™^ÜÏY[˜Ý[ÛŠ
^Ý˜\ˆO[Š
NÚYŠO
]›ÝÈ™]ÈJ•H\™Ý[Y[Ø[‰Ý™H\ÜÈ[ˆŠNÜ™]\›ˆ___K^ßNÙ[˜Ý[ÛˆŠ
^Ý˜\ˆO\–ÝNÚYŠ›ÚYOOZJ\™]\›ˆK™^ÜÎÝ˜\ˆÏ\–ÝO^Ù^ÜÎžß_NÜ™]\›ˆVÝK˜Ø[
Ë™^ÜËËË™^ÜËŠKË™^Üß[‹›OYKV×K‹“ÏJK‹KÊOOžÚYŠ\Š^Ý˜\ˆÏLKÌÙ›ÜŠLÚ›[™ÝÚ
ÊÊ^Ù›ÜŠ˜\–Ü‹K×O]ÚKOHLLÛ‹›[™ÝÛ
ÊÊJLIœßÏ\ÊI‰“Øš™XÝšÙ^\Ê‹“ÊK™]™\žJ
O›‹“ÖÝJ–ÛJJJOÜ‹œÜXÙJKKJNŠOHLKÏÉ‰ŠÏ\ÊJNÚYŠJ^ÝœÜXÙJKKJNÝ˜\ˆÏZJ
NÝ›ÚYOOXÉ‰ŠOXÊ__\™]\›ˆ_\Ï\ßÙ›ÜŠ˜\ˆ]›[™ÝÚŒ	‰ÚLWVÌ—OœÎÚKJ]ÚO]ÚLWNÝÚOVÜ‹K×_K‹™JJOOžÙ›ÜŠ˜\ˆˆ[ˆJ[‹›ÊKŠI‰ˆ[‹›ÊŠI‰“Øš™XÝ™Yš[™T›Ü\J‹Ù[[Y\˜X›NˆLÙ]™VÜ—_J_K‹O]OŠÌÍÎˆš]ÝÛœ×ÜÝ™YLÛÜšÙ\ˆ‹ÍLŽˆš]ÝÛœ×Û\ÝÛÜšÙ\ˆŸVÝJÈ‹[YšœÈŠK‹™ÏY[˜Ý[ÛŠ
^ÚYŠ›Øš™XÝO]\[ÙˆÛØ˜[\Ê\™]\›ˆÛØ˜[\ÎÝž^Ü™]\›ˆ\ß™]È[˜Ý[ÛŠœ™]\›ˆ\ÈŠJ
_XØ]Ú

^ÚYŠ›Øš™XÝO]\[ÙˆÚ[™ÝÊ\™]\›ˆÚ[™Ýß_J
K‹›ÏJJOO“Øš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
JK‹œ]OžÈ[™Yš[™YˆO]\[ÙˆÞ[X›Û	‰”Þ[X›ÛÔÝš[™ÕYÉ‰“Øš™XÝ™Yš[™T›Ü\JÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJKØš™XÝ™Yš[™T›Ü\J—×Ù\Ó[Ù[H‹Ý˜[YNˆLJ_K


OOžÝ˜\ˆÛ‹™Ëš[\ÜØÜš\É‰Š[‹™Ë›ØØ][ÛŠÈˆŠNÝ˜\ˆO[‹™Ë™ØÝ[Y[ÚYŠ]	‰™I‰ŠK˜Ý\œ™[ØÜš\	‰ˆ”ÐÔ’TOOYK˜Ý\œ™[ØÜš\YÓ˜[YKÕ\\Ø\ÙJ
I‰ŠYK˜Ý\œ™[ØÜš\œÜ˜ÊK]
J^Ý˜\ˆYK™Ù][[Y[ÐžUYÓ˜[YJœØÜš\ŠNÚYŠ‹›[™Ý
Y›ÜŠ˜\ˆO\‹›[™ÝLNÚO‹LI‰Š]K×š
ÏÊN‹Ë\Ý

JNÊ]\–ÚKKWKœÜ˜ßZYŠ]
]›ÝÈ™]È\œ›ÜŠ]]ÛX]XÈX›XÔ]\È›ÝÝ\ÜY[ˆ\Èœ›ÝÜÙ\ˆŠNÝ]œ™\XÙJ×˜›ØŽ‹ËˆŠKœ™\XÙJÈËŠ‰ËˆŠKœ™\XÙJ×ËŠ‰ËˆŠKœ™\XÙJ×Ö×—×JÉË‹ÈŠK‹œ]JJ
K


OOžÛ‹˜YØÝ[Y[˜˜\ÙUT’_Ù[‹›ØØ][Û‹š™YŽÝ˜\ˆ^ÍÎŒNÛ‹“ËšYOOŒOO]ÙWNÝ˜\ˆOJKŠOOžÝ˜\ˆKËÛËKO\‹ÏLÚYŠËœÛÛYJ
OOŒOO]ÙWJJJ^Ù›ÜŠH[ˆJ[‹›ÊKJI‰Š‹›VÚWOXVÚWJNÚYŠ
]˜\ˆ[
Š_Y›ÜŠI‰™JŠNØÏË›[™ÝØÊÊÊ\Ï[ÖØ×K‹›ÊÊI‰Ü×I‰Ü×VÌJ
KÜ×OLÜ™]\›ˆ‹“Ê
_K\Ù[‹ÙXœXÚÐÚ[šÚ]ÝÛœ×Ü™\ÜÚ]ÜžO\Ù[‹ÙXœXÚÐÚ[šÚ]ÝÛœ×Ü™\ÜÚ]Üž_×NÜ‹™›Ü‘XXÚ
K˜š[™
[
JK‹œ\ÚYK˜š[™
[‹œ\Ú˜š[™
ŠJ_JJ
KŠÊNÝ˜\ˆO[ŠMÍN
NÜ™]\›ˆ‹“ÊJ_JJ
JJNÂ‹ËÈÈÛÝ\˜ÙSX\[™ÕT“Z]ÝÛœË[YšœË›X\