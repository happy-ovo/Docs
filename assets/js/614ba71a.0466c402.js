"use strict";(self.webpackChunkhappy_docs=self.webpackChunkhappy_docs||[]).push([[2456],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3885:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return u}});var r=n(7462),o=(n(7294),n(3905));const a={title:"\u53c2\u6570",description:"\u5355\u6761\u52a8\u4f5c\u652f\u6301\u7684\u53c2\u6570"},l=void 0,i={unversionedId:"TrMenu/menu/action/option",id:"TrMenu/menu/action/option",title:"\u53c2\u6570",description:"\u5355\u6761\u52a8\u4f5c\u652f\u6301\u7684\u53c2\u6570",source:"@site/docs/TrMenu/menu/action/option.md",sourceDirName:"TrMenu/menu/action",slug:"/TrMenu/menu/action/option",permalink:"/TrMenu/menu/action/option",draft:!1,editUrl:"https://github.com/Happy-clo/Docs/tree/main/docs/TrMenu/menu/action/option.md",tags:[],version:"current",frontMatter:{title:"\u53c2\u6570",description:"\u5355\u6761\u52a8\u4f5c\u652f\u6301\u7684\u53c2\u6570"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e",permalink:"/TrMenu/menu/icon/settings"},next:{title:"\u52a8\u4f5c\u7ec4",permalink:"/TrMenu/menu/action/reactions"}},c={},u=[{value:"\u5ef6\u65f6",id:"\u5ef6\u65f6",level:2},{value:"\u6982\u7387",id:"\u6982\u7387",level:2},{value:"\u6761\u4ef6",id:"\u6761\u4ef6",level:2},{value:"\u904d\u5386",id:"\u904d\u5386",level:2}],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5ef6\u65f6"},"\u5ef6\u65f6"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"{delay=","[","TICKS","]","}")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# \u5ef6\u65f6 1sec \u53d1\u9001\u6d88\u606f\n- 'tell: Delayed Message {delay=20}'\n")),(0,o.kt)("h2",{id:"\u6982\u7387"},"\u6982\u7387"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"{chance=","[","rate","]","}")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- 'give-item: material:DIAMOND {chance=0.8}'\n")),(0,o.kt)("h2",{id:"\u6761\u4ef6"},"\u6761\u4ef6"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"{condition=","<","Expression",">","}")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- 'tell: VIP User Message {condition=perm *user.vip}'\n")),(0,o.kt)("h2",{id:"\u904d\u5386"},"\u904d\u5386"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"{players=","<","Expression",">","}")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- 'tell: A Broadcast Message {players}'\n\n- 'tell: An admin broadcast message {players: perm *admin}'\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5faa\u73af\u4e3a\u6240\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\u5728\u7ebf\u73a9\u5bb6\u6267\u884c\u8be5\u52a8\u4f5c")))}m.isMDXComponent=!0}}]);