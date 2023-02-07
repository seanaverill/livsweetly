"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[473],{4401:function(e,t,r){r.d(t,{V:function(){return l}});var a=r(9307),n=r(5791),s=r(4316),i=r(950),l=e=>{let{title:t,subtitle:r,error:l}=e;return(0,a.createElement)(n.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,a.createElement)(s.Z,{title:t,subtitle:r}),(0,a.createElement)("div",{className:"step-error-state__logo"}),(0,a.createElement)("h3",{className:"step-error-state__error"},l),(0,a.createElement)(i.Z,null))}},4316:function(e,t,r){var a=r(9307),n=r(5736);t.Z=e=>{let{title:t,subtitle:r}=e;return(0,a.createElement)("div",{className:"nfd-main-heading"},(0,a.createElement)("h2",{className:"nfd-main-heading__title"},(0,n.__)(t,"wp-module-onboarding")),(0,a.createElement)("h3",{className:"nfd-main-heading__subtitle"},(0,n.__)(r,"wp-module-onboarding")))}},5791:function(e,t,r){r.d(t,{Z:function(){return g}});var a=r(9307),n=(r(5609),r(4184)),s=r.n(n),i=r(5158),l=r(6974),o=r(2200),u=r(6989),d=r.n(u),c=r(4704),m=e=>{let{className:t="nfd-onboarding-layout__base",children:r}=e;const n=(0,l.TH)(),u=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==u||u.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,i.speak)(t,"assertive")}(n,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){d()({url:(0,c.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${o.Db}-pageview`,{stepID:n.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=n.pathname}),[n.pathname]),(0,a.createElement)("div",{className:s()("nfd-onboarding-layout",t)},r)};const h=e=>{let{children:t}=e;return(0,a.createElement)("section",{className:"is-contained"},t)};var g=e=>{let{className:t="",children:r,isBgPrimary:n=!1,isCentered:i=!1,isVerticallyCentered:l=!1,isContained:o=!1,isPadded:u=!1,isFadeIn:d=!0}=e;const c=o?h:a.Fragment;return(0,a.createElement)(m,{className:s()("nfd-onboarding-layout__common",t,{"is-layout-fade-in":d},{"is-bg-primary":n},{"is-centered":i},{"is-vertically-centered":l},{"is-padded":u})},(0,a.createElement)(c,null,r))}},7004:function(e,t,r){r.d(t,{L:function(){return o},Y:function(){return l}});var a=r(9307),n=r(5791),s=r(4316),i=r(950),l=e=>{let{title:t,subtitle:r}=e;return(0,a.createElement)(n.Z,{className:"step-loader",isVerticallyCentered:!0},(0,a.createElement)(s.Z,{title:t,subtitle:r}),(0,a.createElement)("div",{className:"step-loader__logo-container"},(0,a.createElement)("div",{className:"step-loader__logo"})),(0,a.createElement)(i.Z,null))},o=()=>(0,a.createElement)("div",{className:"image-upload-loader--loading-box"},(0,a.createElement)("div",{className:"image-upload-loader--loading-box__loader"}))},950:function(e,t,r){var a=r(9307),n=r(9685),s=r(9818),i=r(5736);t.Z=e=>{let{question:t=(0,i.__)("Need Help?","wp-module-onboarding"),urlLabel:r=(0,i.__)("Hire our Experts","wp-module-onboarding")}=e;const l=(0,s.select)(n.h).getHireExpertsUrl();return(0,a.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,a.createElement)("a",{href:l,target:"_blank"},r))}},1340:function(e,t,r){r.d(t,{U:function(){return m},g:function(){return p}});var a=r(9307),n=r(9818),s=r(4333),i=r(7004),l=r(9685),o=r(7625),u=r(2200),d=r(4401),c=r(5736),m=e=>{let{children:t,navigationStateCallback:r=!1}=e;const m=(0,s.useViewportMatch)("medium"),{storedThemeStatus:h,brandName:g}=(0,n.useSelect)((e=>({storedThemeStatus:e(l.h).getThemeStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),p=(e=>({loader:{title:(0,c.sprintf)(
/* translators: %s: Brand */
(0,c.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,c.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,c.sprintf)(
/* translators: %s: Brand */
(0,c.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,c.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,c.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(g),{updateThemeStatus:w,setIsDrawerOpened:v,setIsDrawerSuppressed:f,setIsHeaderNavigationEnabled:b}=(0,n.useDispatch)(l.h),_=async()=>{const e=await(0,o.YL)(u.DY);return null!=e&&e.error?u.vv:e.body.status},S=e=>{switch(e){case u.vv:case u.GV:return(()=>{if("function"==typeof r)return r();m&&v(!0),f(!1),b(!0)})();default:v(!1),f(!0),b(!1)}};return(0,a.useEffect)((async()=>{if(S(h),h===u.a0){const e=await _();switch(e){case u.Zh:setTimeout((async()=>{if(await _()!==u.GV)return w(u.vv);window.location.reload()}),u.YU);break;case u.GV:window.location.reload();break;default:w(e)}}}),[h]),(0,a.createElement)(a.Fragment,null,(()=>{switch(h){case u.vv:return(0,a.createElement)(d.V,{title:p.errorState.title,subtitle:p.errorState.subtitle,error:p.errorState.error});case u.GV:return t;default:return(0,a.createElement)(i.Y,{title:p.loader.title,subtitle:p.loader.subtitle})}})())},h=r(3421),g=r(1392),p=e=>{let{children:t,navigationStateCallback:r=!1}=e;const o=(0,s.useViewportMatch)("medium"),[m,p]=(0,a.useState)(u.Sr),{storedPluginsStatus:w,brandName:v}=(0,n.useSelect)((e=>({storedPluginsStatus:e(l.h).getPluginsStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),f=(e=>({loader:{title:(0,c.sprintf)(
/* translators: 1: Brand 2: Site */
(0,c.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,g.I)("Site")),subtitle:(0,c.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding")},errorState:{title:(0,c.sprintf)(
/* translators: 1: Brand 2: Site */
(0,c.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,g.I)("Site")),subtitle:(0,c.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding"),error:(0,c.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(v),{updatePluginsStatus:b,setIsDrawerOpened:_,setIsDrawerSuppressed:S,setIsHeaderNavigationEnabled:y}=(0,n.useDispatch)(l.h),E=async()=>{const e=await(0,h.qC)(u.Gv);return null!=e&&e.error?u.sG:e.body.status},N=e=>{switch(e){case u.sG:case u.ye:return(()=>{if("function"==typeof r)return r();o&&_(!0),S(!1),y(!0)})();default:_(!1),S(!0),y(!1)}};return(0,a.useEffect)((()=>{N(m)}),[m]),(0,a.useEffect)((async()=>{if(p(w[u.Gv]),w[u.Gv]===u.Ck){const e=await E();switch(e){case u.Sr:setTimeout((async()=>{if(await E()!==u.ye)return w[u.Gv]=u.sG,b(w),p(u.sG);window.location.reload()}),u.sr);break;case u.ye:window.location.reload();break;default:w[u.Gv]=e,p(e),b(w)}}}),[w]),(0,a.createElement)(a.Fragment,null,(()=>{switch(m){case u.sG:return(0,a.createElement)(d.V,{title:f.errorState.title,subtitle:f.errorState.subtitle,error:f.errorState.error});case u.ye:return t;default:return(0,a.createElement)(i.Y,{title:f.loader.title,subtitle:f.loader.subtitle})}})())}},7473:function(e,t,r){r.r(t);var a=r(9307),n=r(9818),s=r(6974),i=r(9685),l=r(5791),o=r(4316),u=r(2520),d=r(6138),c=r(7625),m=r(2200),h=r(1340),g=r(6332);t.default=()=>{var e;const t=(0,s.TH)(),[r,p]=(0,a.useState)(!1),[w,v]=(0,a.useState)(),[f,b]=(0,a.useState)(),[_,S]=(0,a.useState)(),y=(0,s.s0)(),{currentStep:E,nextStep:N,currentData:k,storedPreviewSettings:D,themeStatus:P,themeVariations:C}=(0,n.useSelect)((e=>({currentStep:e(i.h).getStepFromPath(t.pathname),nextStep:e(i.h).getNextStep(),currentData:e(i.h).getCurrentOnboardingData(),storedPreviewSettings:e(i.h).getPreviewSettings(),themeStatus:e(i.h).getThemeStatus(),themeVariations:e(i.h).getStepPreviewData()})),[]),{setDrawerActiveView:V,setSidebarActiveView:G,updatePreviewSettings:I,setCurrentOnboardingData:O,updateThemeStatus:Z}=(0,n.useDispatch)(i.h);return(0,a.useEffect)((()=>{G(m.Jq),V(m.Yl)}),[]),(0,a.useEffect)((()=>{r||P!==m.GV||(async()=>{const e=await(0,d.C)(E.patternId,!0);if(null!=e&&e.error)return Z(m.vv);const t=await(0,c.oC)(!0);if(null!=t&&t.error)return Z(m.vv);v(null==e?void 0:e.body),b(null==t?void 0:t.body),S(k.data.theme.variation),p(!0)})()}),[r,P]),(0,a.createElement)(h.U,null,(0,a.createElement)(l.Z,null,(0,a.createElement)("div",{className:"theme-styles-menu"},(0,a.createElement)(o.Z,{title:null==E?void 0:E.heading,subtitle:null==E?void 0:E.subheading}),(0,a.createElement)("div",{className:"theme-styles-menu__list"},(0,a.createElement)(g.r9,{className:"theme-styles-menu__list__item",count:null===(e=C[null==E?void 0:E.patternId])||void 0===e?void 0:e.previewCount,watch:w&&f,callback:()=>null==f?void 0:f.map(((e,t)=>(0,a.createElement)(g.H,{key:t,className:"theme-styles-menu__list__item",selected:e.title===_,blockGrammer:w,viewportWidth:900,styling:"custom",previewSettings:e,overlay:!0,onClick:()=>(e=>{const t=f[e];I((0,u.NF)(t,D)),S(t.title),k.data.theme.variation=t.title,O(k),y(N.path)})(t)}))),viewportWidth:900})))))}}}]);