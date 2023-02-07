"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[932],{4401:function(e,t,r){r.d(t,{V:function(){return o}});var a=r(9307),n=r(5791),s=r(4316),l=r(950),o=e=>{let{title:t,subtitle:r,error:o}=e;return(0,a.createElement)(n.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,a.createElement)(s.Z,{title:t,subtitle:r}),(0,a.createElement)("div",{className:"step-error-state__logo"}),(0,a.createElement)("h3",{className:"step-error-state__error"},o),(0,a.createElement)(l.Z,null))}},4316:function(e,t,r){var a=r(9307),n=r(5736);t.Z=e=>{let{title:t,subtitle:r}=e;return(0,a.createElement)("div",{className:"nfd-main-heading"},(0,a.createElement)("h2",{className:"nfd-main-heading__title"},(0,n.__)(t,"wp-module-onboarding")),(0,a.createElement)("h3",{className:"nfd-main-heading__subtitle"},(0,n.__)(r,"wp-module-onboarding")))}},5791:function(e,t,r){r.d(t,{Z:function(){return h}});var a=r(9307),n=(r(5609),r(4184)),s=r.n(n),l=r(5158),o=r(6974),i=r(2200),c=r(6989),u=r.n(c),d=r(4704),m=e=>{let{className:t="nfd-onboarding-layout__base",children:r}=e;const n=(0,o.TH)(),c=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==c||c.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,l.speak)(t,"assertive")}(n,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){u()({url:(0,d.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${i.Db}-pageview`,{stepID:n.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=n.pathname}),[n.pathname]),(0,a.createElement)("div",{className:s()("nfd-onboarding-layout",t)},r)};const p=e=>{let{children:t}=e;return(0,a.createElement)("section",{className:"is-contained"},t)};var h=e=>{let{className:t="",children:r,isBgPrimary:n=!1,isCentered:l=!1,isVerticallyCentered:o=!1,isContained:i=!1,isPadded:c=!1,isFadeIn:u=!0}=e;const d=i?p:a.Fragment;return(0,a.createElement)(m,{className:s()("nfd-onboarding-layout__common",t,{"is-layout-fade-in":u},{"is-bg-primary":n},{"is-centered":l},{"is-vertically-centered":o},{"is-padded":c})},(0,a.createElement)(d,null,r))}},7004:function(e,t,r){r.d(t,{L:function(){return i},Y:function(){return o}});var a=r(9307),n=r(5791),s=r(4316),l=r(950),o=e=>{let{title:t,subtitle:r}=e;return(0,a.createElement)(n.Z,{className:"step-loader",isVerticallyCentered:!0},(0,a.createElement)(s.Z,{title:t,subtitle:r}),(0,a.createElement)("div",{className:"step-loader__logo-container"},(0,a.createElement)("div",{className:"step-loader__logo"})),(0,a.createElement)(l.Z,null))},i=()=>(0,a.createElement)("div",{className:"image-upload-loader--loading-box"},(0,a.createElement)("div",{className:"image-upload-loader--loading-box__loader"}))},950:function(e,t,r){var a=r(9307),n=r(9685),s=r(9818),l=r(5736);t.Z=e=>{let{question:t=(0,l.__)("Need Help?","wp-module-onboarding"),urlLabel:r=(0,l.__)("Hire our Experts","wp-module-onboarding")}=e;const o=(0,s.select)(n.h).getHireExpertsUrl();return(0,a.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,a.createElement)("a",{href:o,target:"_blank"},r))}},1340:function(e,t,r){r.d(t,{U:function(){return m},g:function(){return g}});var a=r(9307),n=r(9818),s=r(4333),l=r(7004),o=r(9685),i=r(7625),c=r(2200),u=r(4401),d=r(5736),m=e=>{let{children:t,navigationStateCallback:r=!1}=e;const m=(0,s.useViewportMatch)("medium"),{storedThemeStatus:p,brandName:h}=(0,n.useSelect)((e=>({storedThemeStatus:e(o.h).getThemeStatus(),brandName:e(o.h).getNewfoldBrandName()})),[]),g=(e=>({loader:{title:(0,d.sprintf)(
/* translators: %s: Brand */
(0,d.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,d.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,d.sprintf)(
/* translators: %s: Brand */
(0,d.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,d.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,d.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(h),{updateThemeStatus:_,setIsDrawerOpened:b,setIsDrawerSuppressed:w,setIsHeaderNavigationEnabled:f}=(0,n.useDispatch)(o.h),v=async()=>{const e=await(0,i.YL)(c.DY);return null!=e&&e.error?c.vv:e.body.status},y=e=>{switch(e){case c.vv:case c.GV:return(()=>{if("function"==typeof r)return r();m&&b(!0),w(!1),f(!0)})();default:b(!1),w(!0),f(!1)}};return(0,a.useEffect)((async()=>{if(y(p),p===c.a0){const e=await v();switch(e){case c.Zh:setTimeout((async()=>{if(await v()!==c.GV)return _(c.vv);window.location.reload()}),c.YU);break;case c.GV:window.location.reload();break;default:_(e)}}}),[p]),(0,a.createElement)(a.Fragment,null,(()=>{switch(p){case c.vv:return(0,a.createElement)(u.V,{title:g.errorState.title,subtitle:g.errorState.subtitle,error:g.errorState.error});case c.GV:return t;default:return(0,a.createElement)(l.Y,{title:g.loader.title,subtitle:g.loader.subtitle})}})())},p=r(3421),h=r(1392),g=e=>{let{children:t,navigationStateCallback:r=!1}=e;const i=(0,s.useViewportMatch)("medium"),[m,g]=(0,a.useState)(c.Sr),{storedPluginsStatus:_,brandName:b}=(0,n.useSelect)((e=>({storedPluginsStatus:e(o.h).getPluginsStatus(),brandName:e(o.h).getNewfoldBrandName()})),[]),w=(e=>({loader:{title:(0,d.sprintf)(
/* translators: 1: Brand 2: Site */
(0,d.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,h.I)("Site")),subtitle:(0,d.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding")},errorState:{title:(0,d.sprintf)(
/* translators: 1: Brand 2: Site */
(0,d.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,h.I)("Site")),subtitle:(0,d.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding"),error:(0,d.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(b),{updatePluginsStatus:f,setIsDrawerOpened:v,setIsDrawerSuppressed:y,setIsHeaderNavigationEnabled:S}=(0,n.useDispatch)(o.h),E=async()=>{const e=await(0,p.qC)(c.Gv);return null!=e&&e.error?c.sG:e.body.status},N=e=>{switch(e){case c.sG:case c.ye:return(()=>{if("function"==typeof r)return r();i&&v(!0),y(!1),S(!0)})();default:v(!1),y(!0),S(!1)}};return(0,a.useEffect)((()=>{N(m)}),[m]),(0,a.useEffect)((async()=>{if(g(_[c.Gv]),_[c.Gv]===c.Ck){const e=await E();switch(e){case c.Sr:setTimeout((async()=>{if(await E()!==c.ye)return _[c.Gv]=c.sG,f(_),g(c.sG);window.location.reload()}),c.sr);break;case c.ye:window.location.reload();break;default:_[c.Gv]=e,g(e),f(_)}}}),[_]),(0,a.createElement)(a.Fragment,null,(()=>{switch(m){case c.sG:return(0,a.createElement)(u.V,{title:w.errorState.title,subtitle:w.errorState.subtitle,error:w.errorState.error});case c.ye:return t;default:return(0,a.createElement)(l.Y,{title:w.loader.title,subtitle:w.loader.subtitle})}})())}},2932:function(e,t,r){r.r(t);var a=r(9307),n=r(9818),s=r(6974),l=r(5609),o=r(5736),i=r(2819),c=r(6332),u=r(5791),d=r(2200),m=r(9685),p=r(6138),h=r(5330),g=r(1340);t.default=()=>{const e=(0,s.TH)(),[t,r]=(0,a.useState)(!1),[_,b]=(0,a.useState)(),[w,f]=(0,a.useState)(!1),{currentStep:v,currentData:y,routes:S,designSteps:E,allSteps:N,themeStatus:k}=(0,n.useSelect)((t=>({currentStep:t(m.h).getStepFromPath(e.pathname),currentData:t(m.h).getCurrentOnboardingData(),routes:t(m.h).getRoutes(),allSteps:t(m.h).getAllSteps(),designSteps:t(m.h).getDesignSteps(),themeStatus:t(m.h).getThemeStatus()})),[]),{setDrawerActiveView:C,setSidebarActiveView:D,updateRoutes:T,updateDesignSteps:G,updateAllSteps:V,setCurrentOnboardingData:P,updateThemeStatus:I}=(0,n.useDispatch)(m.h);(0,a.useEffect)((()=>{D(d.Jq),C(d._h),x(y.data.customDesign,!1)}),[]);const O=()=>{const e=Z(),t=[h.mT.designColors,h.mT.designTypography];return{routes:(0,i.orderBy)(e.routes.concat(t),["priority"],["asc"]),allSteps:(0,i.orderBy)(e.allSteps.concat(t),["priority"],["asc"]),designSteps:(0,i.orderBy)(e.designSteps.concat(t),["priority"],["asc"])}},Z=()=>({routes:(0,i.filter)(S,(e=>!e.path.includes(h.mT.designColors.path)&&!e.path.includes(h.mT.designTypography.path))),allSteps:(0,i.filter)(N,(e=>!e.path.includes(h.mT.designColors.path)&&!e.path.includes(h.mT.designTypography.path))),designSteps:(0,i.filter)(E,(e=>!e.path.includes(h.mT.designColors.path)&&!e.path.includes(h.mT.designTypography.path)))}),x=function(e){let t,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=e?O():Z(),T(t.routes),G(t.designSteps),V(t.allSteps),f(e),r&&(y.data.customDesign=e,P(y))};return(0,a.useEffect)((()=>{t||k!==d.GV||(async()=>{const e=await(0,p.C)(v.patternId,!0);if(null!=e&&e.error)return I(d.vv);b(null==e?void 0:e.body),r(!0)})()}),[t,k]),(0,a.createElement)(g.U,null,(0,a.createElement)(c.V3,null,(0,a.createElement)(u.Z,{className:"theme-styles-preview"},(0,a.createElement)("div",{className:"theme-styles-preview__checkbox"},(0,a.createElement)(l.CheckboxControl,{label:(0,a.createElement)("div",{className:"theme-styles-preview__checkbox__label"},(0,a.createElement)("span",{className:"theme-styles-preview__checkbox__label__question"},(0,o.__)("Customize Colors & Fonts?","wp-module-onboarding"),(0,a.createElement)("span",{className:"theme-styles-preview__checkbox__label__hint"},(0,o.__)("Check to customize in the next few steps (or leave empty and use the Site Editor later)","wp-module-onboarding")))),checked:w,onChange:()=>x(!w)})),(0,a.createElement)("div",{className:"theme-styles-preview__title-bar"},(0,a.createElement)("div",{className:"theme-styles-preview__title-bar__browser"},(0,a.createElement)("span",{className:"theme-styles-preview__title-bar__browser__dot"}),(0,a.createElement)("span",{className:"theme-styles-preview__title-bar__browser__dot"}),(0,a.createElement)("span",{className:"theme-styles-preview__title-bar__browser__dot"}))),(0,a.createElement)("div",{className:"theme-styles-preview__live-preview-container"},!_&&(0,a.createElement)(c.i5,{blockGrammer:"",styling:"custom",viewportWidth:1300}),_&&(0,a.createElement)(c.i5,{blockGrammer:_,styling:"custom",viewportWidth:1300})))))}}}]);