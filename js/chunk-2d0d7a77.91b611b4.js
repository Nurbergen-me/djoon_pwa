(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7a77"],{7877:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item_block"},[a("div",{staticClass:"item_header_block"},[a("div",{staticClass:"item_header_container"},[a("div",{staticClass:"item_header_label"},[a("div",{staticClass:"item_header_text"},[t._v(" "+t._s(t.data.translations.find(({locale:a})=>a===t.currentLocale).title)+" ")]),a("div",{staticClass:"item_header_date"},[t._v(" "+t._s(t.$t("Date"))+": "+t._s(t._f("formatDate")(t.data.published_date,"DD.MM.YY"))+" ")])]),a("div",{staticClass:"item_header_slider"},[a("div",{staticClass:"item_header_slider_container"},[a("img",{staticClass:"item_header_img",attrs:{src:t.data.image?t.getImagePath(t.data.image.path):"",alt:"Изображение новости"}}),t.data.image&&t.data.image.description?a("div",{staticClass:"item_header_img_text"},[t._v(t._s(t.data.image.description))]):t._e()])])])]),a("div",{staticClass:"item_article_block"},[a("div",{staticClass:"item_article_container"},[a("div",{staticClass:"item_article_label"},[a("div",{staticClass:"item_article",domProps:{innerHTML:t._s(t.data.translations.find(({locale:a})=>a===t.currentLocale).text)}})])])])])},s=[],d={name:"NewsItem",data(){return{data:{},currentLocale:this.$i18n.locale}},methods:{getImagePath(t){return API_ROOT+t}},mounted(){this.$http.get(`${API_ROOT}/api/news/${this.$route.params.id}`).then(({data:t})=>{this.data=t}).catch(t=>{console.log(t)})}},l=d,c=e("2877"),r=Object(c["a"])(l,i,s,!1,null,"69cdba1e",null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d7a77.91b611b4.js.map