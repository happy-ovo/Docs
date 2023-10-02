"use strict";(self.webpackChunkhappy_docs=self.webpackChunkhappy_docs||[]).push([[9686],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(t),m=o,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||i;return t?r.createElement(d,u(u({ref:n},p),{},{components:t})):r.createElement(d,u({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[s]="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7846:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return l}});var r=t(7462),o=(t(7294),t(3905));const i={title:"\u4e8b\u4ef6",description:"\u5bf9\u83dc\u5355\u7684\u4e00\u4e9b\u4e8b\u4ef6\u6267\u884c\u6761\u4ef6\u52a8\u4f5c\u53cd\u5e94"},u=void 0,a={unversionedId:"TrMenu/menu/configuration/event",id:"TrMenu/menu/configuration/event",title:"\u4e8b\u4ef6",description:"\u5bf9\u83dc\u5355\u7684\u4e00\u4e9b\u4e8b\u4ef6\u6267\u884c\u6761\u4ef6\u52a8\u4f5c\u53cd\u5e94",source:"@site/docs/TrMenu/menu/configuration/event.md",sourceDirName:"TrMenu/menu/configuration",slug:"/TrMenu/menu/configuration/event",permalink:"/TrMenu/menu/configuration/event",draft:!1,editUrl:"https://github.com/Happy-clo/Docs/tree/main/docs/TrMenu/menu/configuration/event.md",tags:[],version:"current",frontMatter:{title:"\u4e8b\u4ef6",description:"\u5bf9\u83dc\u5355\u7684\u4e00\u4e9b\u4e8b\u4ef6\u6267\u884c\u6761\u4ef6\u52a8\u4f5c\u53cd\u5e94"},sidebar:"tutorialSidebar",previous:{title:"\u7ed1\u5b9a",permalink:"/TrMenu/menu/configuration/bindings"},next:{title:"\u5185\u7f6e\u51fd\u6570",permalink:"/TrMenu/menu/configuration/internal-functions"}},c={},l=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}],p={toc:l},s="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#\n# \u83dc\u5355\u7684\u4e8b\u4ef6\u5904\u7406\n#\nEvents:\n  # \u5f00\u542f\u83dc\u5355\n  Open:\n    - condition: 'perm *trmenu.use'\n      actions:\n        - 'sound: BLOCK_CHEST_OPEN-1-0'\n      deny:\n        - 'sound: ENTITY_ITEM_BREAK-1-0'\n        - 'title: `&c&lPermission Required` `&7&lYou need permission &6&ltrmenu.use &7&lto open this menu` 15 20 15'\n        - 'return'\n  # \u5173\u95ed\u83dc\u5355\n  Close:\n    - 'sound: BLOCK_CHEST_CLOSE-1-0'\n\n")),(0,o.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u914d\u7f6e\u7684\u5bf9\u8c61\u5747\u662f\u53cd\u5e94\uff08\u52a8\u4f5c\u7ec4\uff09"),(0,o.kt)("li",{parentName:"ul"},"\u82e5\u6267\u884c RETURN \u52a8\u4f5c\uff0c\u5219\u4e8b\u4ef6\u5c06\u53d6\u6d88")))}f.isMDXComponent=!0}}]);