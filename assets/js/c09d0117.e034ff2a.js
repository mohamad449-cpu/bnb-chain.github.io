"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[3362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,b=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57900:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_label:"Storage Transactions",sidebar_position:2,hide_table_of_contents:!1},o="Storage Transactions",s={unversionedId:"greenfield/tech-specs/storage-transactions",id:"greenfield/tech-specs/storage-transactions",isDocsHomePage:!1,title:"Storage Transactions",description:"The Greenfield blockchain supports a series of transactions to create,",source:"@site/docs/greenfield/tech-specs/storage-transactions.md",sourceDirName:"greenfield/tech-specs",slug:"/greenfield/tech-specs/storage-transactions",permalink:"/docs/greenfield/tech-specs/storage-transactions",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/greenfield/tech-specs/storage-transactions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Storage Transactions",sidebar_position:2,hide_table_of_contents:!1},sidebar:"bscSideBar",previous:{title:"Data Availability Challenge",permalink:"/docs/greenfield/tech-specs/data-availability-challenge"},next:{title:"Billing and Payment",permalink:"/docs/greenfield/tech-specs/billing-and-payment"}},c=[],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"storage-transactions"},"Storage Transactions"),(0,a.kt)("p",null,"The Greenfield blockchain supports a series of transactions to create,\nupdate, and delete the Greenfield resources."),(0,a.kt)("p",null,"The bucket and object creation transactions have to interact with the\nSPs to ensure they are ready, while group and permission-related\noperations do not require that."),(0,a.kt)("p",null,"The users should always create a bucket before they can store any\nobjects."),(0,a.kt)("p",null,"Greenfield bucket name follows the same naming specification as AWS S3\nbucket name. It must be globally unique."),(0,a.kt)("p",null,"The CreateBucket transaction must have the below information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Sender"),", which can be derived from the transaction signer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Bucket name")),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ID")," of the SP that the bucket and all objects under this bucket will use as the Primary SP")),(0,a.kt)("p",null,"There is a corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"DeleteBucket")," transaction. It requires that all the objects under the bucket must be deleted first. As described in the earlier section, the bucket owner can delete any object under his/her bucket."),(0,a.kt)("p",null,"Object creation is described in ",(0,a.kt)("a",{parentName:"p",href:"/docs/greenfield/design/design-principles"},"Design Section"),". There is a corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"DeleteObject")," transaction. The deletion will tell Greenfield to refund the reserved fees and reduce the payment stream."),(0,a.kt)("p",null,"There are group ",(0,a.kt)("inlineCode",{parentName:"p"},"creation"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"deletion"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"member management")," transactions."),(0,a.kt)("p",null,"There are transactions about permission creation and deletion, as they\nare the cornerstone functionality for the economy."),(0,a.kt)("p",null,"More worthy of highlighting, all of these transactions can be triggered\nvia cross-chain infrastructure from BSC smart contracts and EOAs."),(0,a.kt)("p",null,"There are a few transactions about changing the Primary SP of users'\nbuckets. It will be asynchronous as the action may take some time based\non the number and size of the objects in the bucket. The bucket needs to\nbe \"",(0,a.kt)("strong",{parentName:"p"},"Sealed"),'" again by the new Primary SP.'))}p.isMDXComponent=!0}}]);