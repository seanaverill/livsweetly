import{a as r}from"./vuex.esm.8fdeb4b6.js";import"./WpTable.e7a99c57.js";import{n as i}from"./_plugin-vue2_normalizer.61652a7c.js";import"./index.3751d023.js";import{M as n}from"./MetaTag.1c306c27.js";import"./SaveChanges.e40a9083.js";import{C as s}from"./Card.72525ad5.js";import{C as a}from"./SettingsRow.edbb3005.js";import"./helpers.de7566d0.js";import"./attachments.482685b4.js";import"./cleanForSlug.961c836c.js";import"./isArrayLikeObject.cf278c5f.js";import"./constants.59a77347.js";import"./default-i18n.3a91e0e5.js";import"./Caret.6d7f2e24.js";import"./_commonjsHelpers.f84db168.js";import"./html.f941cb8b.js";import"./Index.ffa20ee1.js";import"./Tooltip.68a8a92b.js";import"./index.cf60653e.js";import"./client.e62d6c37.js";import"./translations.c394afe3.js";import"./portal-vue.esm.98f2e05b.js";import"./Slide.15a07930.js";import"./Row.830f6397.js";const p={components:{CoreCard:s,CoreSettingsRow:a},mixins:[n],data(){return{pagePostOptions:[],strings:{pinterest:this.$t.__("Pinterest",this.$td),description:this.$t.__("Pinterest uses Open Graph metadata just like Facebook, so be sure to keep Open Graph enabled on the Facebook tab checked if you want to optimize your site for Pinterest.",this.$td),learnHowToGetPinterestTag:this.$t.__("Learn how to get your Pinterest Verification Code",this.$td),skipStep:this.$t.__("If you have already confirmed your website with Pinterest, you can skip the step below.",this.$td),pinterestVerificationCode:this.$t.__("Pinterest Verification Code",this.$td)}}},computed:{...r(["options"])}};var c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-pinterest"},[e("core-card",{attrs:{slug:"pinterest","header-text":t.strings.pinterest}},[e("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),e("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.strings.learnHowToGetPinterestTag,"pinterestSiteVerification",!0))}}),e("br"),e("br"),e("strong",[t._v(t._s(t.strings.skipStep))])]),e("core-settings-row",{attrs:{name:t.strings.pinterestVerificationCode,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-input",{attrs:{size:"medium"},on:{blur:function(o){return t.maybeUpdateId("pinterest")}},model:{value:t.options.webmasterTools.pinterest,callback:function(o){t.$set(t.options.webmasterTools,"pinterest",o)},expression:"options.webmasterTools.pinterest"}})]},proxy:!0}])})],1)],1)},m=[],u=i(p,c,m,!1,null,null,null,null);const R=u.exports;export{R as default};
