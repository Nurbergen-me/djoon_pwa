(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e09bf26"],{"0567":function(t,e,s){"use strict";s("c01f")},"106c":function(t,e,s){t.exports=s.p+"img/2.12c37d37.png"},"1f24":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"new-tooltip"},[t._t("default")],2)},a=[],n={name:"Tooltip"},c=n,o=(s("333d"),s("2877")),l=Object(o["a"])(c,i,a,!1,null,"23795c6a",null);e["a"]=l.exports},"20bf5":function(t,e,s){"use strict";s("4d17")},2125:function(t,e,s){"use strict";s("ce67")},"28ee":function(t,e,s){t.exports=s.p+"img/motivation_img.56a6c534.png"},2911:function(t,e,s){},"333d":function(t,e,s){"use strict";s("a8df")},"3d9c":function(t,e,s){t.exports=s.p+"img/smiley_x_eyes.c1a8d31d.svg"},"421b":function(t,e,s){t.exports=s.p+"img/calendar_blank.6fd99b86.svg"},"43b3":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e(t.tag,{tag:"component",staticClass:"title"},[t._t("default")],2)},a=[],n={name:"Title",props:{tag:{type:String,default:"h2",required:!1,validator:t=>["h1","h2","h3","h4","h5","h6"].includes(t)}}},c=n,o=(s("2125"),s("2877")),l=Object(o["a"])(c,i,a,!1,null,"33a91f34",null);e["a"]=l.exports},"4d17":function(t,e,s){},5316:function(t,e,s){t.exports=s.p+"img/advantages_img.8b0c97ce.png"},"603d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("HeroSection"),e("ExplainSection"),e("SecretSection"),e("HelpSection"),e("HowItWorksSection"),e("AdvantagesSection"),e("MotivationSection")],1)},a=[],n=function(){var t=this,e=t._self._c;return e("Section",{staticClass:"hero"},[e("div",{staticClass:"hero__inner"},[e("div",{staticClass:"hero__content"},[e("div",{staticClass:"hero__text"},[e("Title",{staticClass:"hero__title",attrs:{tag:"h1"}},[t._v(t._s(t.$t("free_curse_train"))+" ")]),e("p",{staticClass:"hero__desc"},[t._v(" "+t._s(t.$t("from_zero"))+" ")]),e("Tooltip",[t._v("150 000 ₸")])],1),e("StudyButton",{staticClass:"hero__btn"},[t._v(t._s(t.$t("learn_free")))])],1),e("img",{staticClass:"hero__img",attrs:{src:s("d11e"),alt:"Hero courses"}})])])},c=[],o=s("bbf6"),l=s("43b3"),_=s("1f24"),r=(s("14d9"),function(){var t=this,e=t._self._c;return e("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.$router.push({name:"courses-list"})}}},[t._t("default")],2)}),u=[],d={name:"StudyButton"},f=d,p=(s("0567"),s("2877")),v=Object(p["a"])(f,r,u,!1,null,"770a0b3e",null),h=v.exports,m={name:"HeroSection",components:{Section:o["a"],Title:l["a"],Tooltip:_["a"],StudyButton:h}},g=m,b=(s("d05b"),Object(p["a"])(g,n,c,!1,null,"353d8d7f",null)),C=b.exports,S=function(){var t=this,e=t._self._c;return e("Section",{staticClass:"explain"},[e("div",{staticClass:"explain__block"},[e("div",{staticClass:"explain__content"},[e("Title",{staticClass:"explain__title"},[t._v(t._s(t.$t("who_is_manager")))]),e("p",{staticClass:"explain__desc"},[t._v(" "+t._s(t.$t("who_is_manager_desc"))+" ")])],1)])])},w=[],k={name:"ExplainSection",components:{Section:o["a"],Title:l["a"]}},x=k,$=(s("6f87"),Object(p["a"])(x,S,w,!1,null,"7e00132d",null)),y=$.exports,T=function(){var t=this,e=t._self._c;return e("Section",{staticClass:"secret"},[e("div",{staticClass:"secret__content"},[e("Title",{staticClass:"secret__title"},[t._v(t._s(t.$t("open_secret")))]),e("div",{staticClass:"secret__blocks"},t._l(t.secretItems,(function({title:s,image:i},a){return e("div",{key:a,staticClass:"secret__block"},[e("img",{staticClass:"secret__block-img",attrs:{width:"61",height:"60",src:i,alt:i}}),e("p",{staticClass:"secret__block-desc"},[t._v(t._s(s))])])})),0)],1)])},I=[],j={name:"SecretSection",components:{Section:o["a"],Title:l["a"]},data(){return{secretItems:[{title:this.$t("secret_reason_1"),image:s("6891")},{title:this.$t("secret_reason_2"),image:s("106c")},{title:this.$t("secret_reason_3"),image:s("95f2")}]}},methods:{}},O=j,H=(s("a383"),Object(p["a"])(O,T,I,!1,null,"9ca54258",null)),B=H.exports,W=function(){var t=this,e=t._self._c;return e("Section",{staticClass:"help"},[e("div",{staticClass:"help__block"},[e("Title",{staticClass:"help__title"},[t._v(t._s(t.$t("course_will_help")))]),e("div",{staticClass:"help__features"},t._l(t.featureItems,(function(s,i){return e("div",{key:i,staticClass:"help__feature"},[t._v(" "+t._s(s)+" ")])})),0)],1)])},A=[],M={name:"HelpSection",components:{Section:o["a"],Title:l["a"]},data(){return{featureItems:[this.$t("reason_systematic"),this.$t("reason_dialog"),this.$t("reason_find_work"),this.$t("reason_be_best")]}},methods:{}},E=M,J=(s("20bf5"),Object(p["a"])(E,W,A,!1,null,"7f347226",null)),q=J.exports,z=function(){var t=this,e=t._self._c;return e("Section",{staticClass:"how-it-work"},[e("div",{staticClass:"how-it-work__inner"},[e("Title",{staticClass:"how-it-work__title"},[t._v(t._s(t.$t("how_it_works")))]),e("div",{staticClass:"how-it-work__images"},t._l(t.howItWorksImages,(function({image:t},s){return e("img",{key:s,staticClass:"how-it-work__image",attrs:{src:t,alt:t}})})),0)],1)])},N=[],D={name:"HowItWorksSection",components:{Section:o["a"],Title:l["a"]},data(){return{howItWorksImages:[{image:s("63c4")},{image:s("ddca")},{image:s("8f3c")}]}},methods:{}},F=D,G=(s("d6e1"),Object(p["a"])(F,z,N,!1,null,"26c50837",null)),K=G.exports,L=s("9851"),P=function(){var t=this,e=t._self._c;return e("Section",{staticClass:"motivation"},[e("div",{staticClass:"motivation__block"},[e("div",{staticClass:"motivation__content"},[e("Title",{staticClass:"motivation__title"},[t._v(" "+t._s(t.$t("you_need_motivation"))+" ")]),e("p",{staticClass:"motivation__desc"},[t._v(" "+t._s(t.$t("you_need_motivation_desc"))+" ")]),e("StudyButton",[t._v(" "+t._s(t.$t("learn_free"))+" ")])],1),e("img",{staticClass:"motivation__img",attrs:{src:s("28ee"),width:"284",height:"286",alt:"Motivation"}})])])},Q=[],R={name:"MotivationSection",components:{Section:o["a"],Title:l["a"],StudyButton:h}},U=R,V=(s("ae7a"),Object(p["a"])(U,P,Q,!1,null,"0565ad7c",null)),X=V.exports,Y={name:"NewCourses",components:{HeroSection:C,ExplainSection:y,SecretSection:B,HelpSection:q,HowItWorksSection:K,AdvantagesSection:L["a"],MotivationSection:X}},Z=Y,tt=Object(p["a"])(Z,i,a,!1,null,"47118fb8",null);e["default"]=tt.exports},"63c4":function(t,e,s){t.exports=s.p+"img/1.ef1cd1f2.png"},"67fb":function(t,e,s){},6891:function(t,e,s){t.exports=s.p+"img/1.70da1da1.png"},"6f87":function(t,e,s){"use strict";s("2911")},"850a":function(t,e,s){t.exports=s.p+"img/note.9ff35acd.svg"},"8f3c":function(t,e,s){t.exports=s.p+"img/3.4bb254a2.png"},"946e":function(t,e,s){},"95f2":function(t,e,s){t.exports=s.p+"img/3.26cdb6e3.png"},9851:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("Section",{staticClass:"advantages"},[e("div",{staticClass:"advantages__inner"},[e("Title",{staticClass:"advantages__title"},[t._v(" "+t._s(t.$t("our_pros"))+" ")]),e("div",{staticClass:"advantages__content"},[e("div",{staticClass:"advantages__content-block"},[e("p",{staticClass:"advantages__content-desc"},[t._v(" "+t._s(t.$t("our_pros_desc"))+" ")]),t._l(t.advantagesItems,(function({icon:s,title:i,desc:a},n){return e("div",{key:n,staticClass:"advantages__blocks"},[e("div",{staticClass:"advantages__block"},[e("div",{staticClass:"advantages__block-icon"},[e("img",{attrs:{src:s,alt:"Smiley"}})]),e("div",[e("h4",{staticClass:"advantages__block-title"},[t._v(t._s(i))]),e("p",{staticClass:"advantages__block-desc"},[t._v(" "+t._s(a)+" ")])])])])}))],2),e("img",{staticClass:"advantages__img",attrs:{src:s("5316"),width:"564",height:"458",alt:"Advantages"}})])],1)])},a=[],n=s("bbf6"),c=s("43b3"),o={name:"AdvantagesSection",components:{Section:n["a"],Title:c["a"]},data(){return{advantagesItems:[{icon:s("3d9c"),title:this.$t("without_teachers"),desc:this.$t("without_teachers_desc")},{icon:s("a970"),title:this.$t("without_webinars"),desc:this.$t("without_webinars_desc")},{icon:s("850a"),title:this.$t("without_hw"),desc:this.$t("without_hw_desc")},{icon:s("421b"),title:this.$t("without_deadlines"),desc:this.$t("without_deadlines_desc")}]}}},l=o,_=(s("b557"),s("2877")),r=Object(_["a"])(l,i,a,!1,null,"03af581e",null);e["a"]=r.exports},a383:function(t,e,s){"use strict";s("67fb")},a8df:function(t,e,s){},a970:function(t,e,s){t.exports=s.p+"img/monitor_play.e2608984.svg"},ae7a:function(t,e,s){"use strict";s("fc2b")},b557:function(t,e,s){"use strict";s("d1b9")},be44:function(t,e,s){},c01f:function(t,e,s){},ce67:function(t,e,s){},d05b:function(t,e,s){"use strict";s("be44")},d11e:function(t,e,s){t.exports=s.p+"img/courses_hero.b0b349e6.png"},d1b9:function(t,e,s){},d6e1:function(t,e,s){"use strict";s("946e")},ddca:function(t,e,s){t.exports=s.p+"img/2.1e53f769.png"},fc2b:function(t,e,s){}}]);
//# sourceMappingURL=chunk-3e09bf26.f09fff89.js.map