(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96cfb3a8"],{"57b3":function(e,s,t){"use strict";t("8364")},"5c60":function(e,s,t){},8364:function(e,s,t){},b0d2:function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e._self._c;return s("div",{staticClass:"theme_one_block"},[s("div",{staticClass:"theme_one_header_block"},[s("div",{staticClass:"theme_one_header_container"},[s("div",{staticClass:"theme_one_header_label"},[e._v(" "+e._s(e.course.title)+" ")])])]),s("div",{staticClass:"theme_one_main_block"},[s("div",{staticClass:"theme_one_main_container"},[s("div",{staticClass:"theme_one_content_container"},[e.course?s("div",{staticClass:"theme_one_plot"},[s("router-link",{staticClass:"theme_one_plot_theme",attrs:{to:{name:"about-course",slug:e.course.slug}}},[e._v(" "+e._s(e.$t("About_course"))+" ")]),e._l(e.course.modules,(function(t){return s("router-link",{staticClass:"theme_one_plot_theme",attrs:{to:{name:"course-module",params:{slug:e.course.slug,module:t.id}}}},[e._v(" "+e._s(t.title)+" ")])})),e.course.quiz?s("router-link",{staticClass:"module_one_plot_about",attrs:{to:{name:"final-testing",params:{slug:e.course.slug}}}},[e._v(" "+e._s(e.$t("Final_testing"))+" ")]):e._e()],2):s("div",{staticClass:"theme_one_plot"},[s("el-skeleton",{attrs:{rows:6}})],1)]),s("div",{staticClass:"theme_one_exercises_desc"},[e.error&&e.success?s("div",{staticClass:"theme_one_exercises_desc_text_container"},[s("div",{staticClass:"theme_one_desc_test w-100",staticStyle:{height:"400px"}},[s("div",{staticClass:"theme_one_modal_result_bad"},[s("div",{staticClass:"theme_one_modal_bad_text_block"},[s("div",{staticClass:"theme_one_modal_bad_result_text"},[e._v(e._s(e.$t("Data_not_found")))]),s("div",{staticClass:"theme_one_modal_bad_result_btn"},[e._v(e._s(e.$t("Try_again")))])]),s("div",{staticClass:"theme_one_modal_result_img"})])])]):s("div",{staticClass:"theme_one_exercises_desc_text_container"},[e.success?s("div",{staticClass:"theme_one_modal_save_result"},[s("div",{staticClass:"theme_one_modal_result_text"},[e._v(e._s(e.$t("Response_saved_successfully")))]),s("div",{staticClass:"theme_one_modal_result_img"})]):e._e(),e.finished&&"ONLY_RAW_ANSWERS"==e.quiz.mode?s("div",{staticClass:"theme_one_modal_result_bad"},[s("div",{staticClass:"theme_one_modal_bad_text_block"},[s("div",{staticClass:"theme_one_modal_bad_result_text w-100"},[s("h5",[e._v(e._s(e.$t("endTask"))+"!")])]),e.quizEnded?e._e():s("div",{staticClass:"theme_one_modal_bad_result_btn pointer",on:{click:e.refreshQuiz}},[e._v(e._s(e.$t("try_again"))+" ")])])]):e._e(),e.finished&&e.result<e.quiz.passing_score&&"ONLY_RAW_ANSWERS"!=e.quiz.mode?s("div",{staticClass:"theme_one_modal_result_bad"},[s("div",{staticClass:"theme_one_modal_bad_text_block"},[s("div",{staticClass:"theme_one_modal_bad_result_text w-100"},[s("h5",[e._v(e._s(e.$t("Sorry_you_did_not_pass_the_test")))]),s("br"),s("h6",[e._v(e._s(e.$t("Your_score"))+": "+e._s(e.percent)+"%. Вы набрали "+e._s(e.result)+" из "+e._s(e.max_score)+" баллов. "),s("br"),s("br"),e._v("Проходной балл "+e._s(e.passing_score))])]),e.quizEnded?s("div",{staticClass:"theme_one_modal_bad_result_btn pointer",on:{click:function(s){e.finished=!1}}},[e._v("Закрыть")]):s("div",{staticClass:"theme_one_modal_bad_result_btn pointer",on:{click:e.refreshQuiz}},[e._v(e._s(e.$t("try_again"))+" ")])])]):e._e(),e.finished&&e.result>=e.quiz.passing_score?s("div",{staticClass:"theme_one_modal_result_bad"},[s("div",{staticClass:"theme_one_modal_bad_text_block"},[s("div",{staticClass:"theme_one_modal_bad_result_text w-100"},[e._v(" "+e._s(e.$t("Congratulations!_You_have_passed_the_test"))+" "),s("br"),s("br"),e._v(" "+e._s(e.$t("Your_score"))+": "+e._s(e.percent)+"%. Вы набрали "+e._s(e.result)+" из "+e._s(e.max_score)+" баллов. "),s("br"),e._v("Проходной балл "+e._s(e.passing_score)+" ")]),s("div",{staticClass:"theme_one_modal_bad_result_btn pointer",on:{click:function(s){e.finished=!1}}},[e._v("Закрыть")])])]):e._e(),s("div",{staticClass:"theme_one_desc_title"},[e._v(e._s(e.finished?"Результаты теста: ":"")+e._s(e.quiz.title))]),s("div",{staticClass:"theme_one_desc_test w-100"},[e.error?s("div",{staticClass:"theme_one_modal_result_bad"},[s("div",{staticClass:"theme_one_modal_bad_text_block"},[s("div",{staticClass:"theme_one_modal_bad_result_text"},[e._v(e._s(e.$t("An_error_has_occurred")))]),s("div",{staticClass:"theme_one_modal_bad_result_btn"},[e._v(e._s(e.$t("Try_again")))])]),s("div",{staticClass:"theme_one_modal_result_img"})]):s("div",[e.currentQuestion&&e.currentQuestion.text?s("div",{staticClass:"theme_one_desc_text",domProps:{innerHTML:e._s(e.currentQuestion.text)}}):e._e(),e.currentQuestion&&e.currentQuestion.file?s("div",["audio"===e.currentQuestion.file.type?s("audio",{attrs:{src:e.apiRoot+e.currentQuestion.file.path,controls:""}}):e._e()]):e._e(),e.currentQuestion&&e.currentQuestion.file?s("div",{staticClass:"mb-5 w-100 text-center"},["file"===e.currentQuestion.file.type?s("a",{staticClass:"theme_one_desc_download",attrs:{target:"_blank",href:e.apiRoot+e.currentQuestion.file.path}},[e._v(" "+e._s(e.$t("Download_file"))+" ")]):e._e()]):e._e(),e.currentQuestion&&"TYPE_SINGLE"===e.currentQuestion.type||e.currentQuestion&&"TYPE_MULTIPLE"===e.currentQuestion.type?s("div",{staticClass:"my_courses_list_radio_block"},e._l(e.currentQuestion.answers,(function(t){return e.currentQuestion&&e.currentQuestion.answers?s("div",{staticClass:"my_courses_radio_item"},["TYPE_SINGLE"===e.currentQuestion.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAnswer,expression:"selectedAnswer"}],staticClass:"my_courses_list_radio",attrs:{disabled:e.quizEnded,id:"answer"+t.id,type:"radio",name:"answer[]"},domProps:{value:t.id,checked:e._q(e.selectedAnswer,t.id)},on:{change:function(s){e.selectedAnswer=t.id}}}):e._e(),"TYPE_MULTIPLE"===e.currentQuestion.type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedAnswer,expression:"selectedAnswer"}],staticClass:"my_courses_list_radio",attrs:{disabled:e.quizEnded,id:"answer"+t.id,type:"checkbox",name:"answer[]"},domProps:{value:t.id,checked:Array.isArray(e.selectedAnswer)?e._i(e.selectedAnswer,t.id)>-1:e.selectedAnswer},on:{change:function(s){var i=e.selectedAnswer,r=s.target,n=!!r.checked;if(Array.isArray(i)){var a=t.id,o=e._i(i,a);r.checked?o<0&&(e.selectedAnswer=i.concat([a])):o>-1&&(e.selectedAnswer=i.slice(0,o).concat(i.slice(o+1)))}else e.selectedAnswer=n}}}):e._e(),s("label",{staticClass:"my_courses_radio_label pointer pt-3",attrs:{for:"answer"+t.id},domProps:{innerHTML:e._s(t.text)}})]):e._e()})),0):s("div",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.selectedAnswerRaw,expression:"selectedAnswerRaw"}],staticClass:"form-control mb-5",attrs:{disabled:e.quizEnded},domProps:{value:e.selectedAnswerRaw},on:{input:function(s){s.target.composing||(e.selectedAnswerRaw=s.target.value)}}})])])]),e.finished?e._e():s("div",{staticClass:"theme_one_desc_btn"},[e.firstQuestion?e._e():s("a",{staticClass:"theme_one_desc_btn_back pointer",on:{click:e.prev}},[e._v(e._s(e.$t("Back")))]),e.lastQuestion?e._e():s("a",{staticClass:"theme_one_desc_btn_next pointer",on:{click:e.next}},[e._v(e._s(e.$t("Further")))]),e.lastQuestion&&0==e.quizEnded?s("a",{staticClass:"theme_one_desc_btn_next pointer",on:{click:e.finish}},[e._v(e._s(e.$t("Finish")))]):e._e()]),e.quizEnded?s("div",{staticClass:"theme_one_desc_btn button-quiz-ended-wrapper"},["DEFAULT"===e.quiz.mode?s("a",{staticClass:"button-quiz-ended",on:{click:e.showResults}},[e._v("Показать результаты")]):e._e(),!e.quiz.can_refresh||e.result>=e.quiz.passing_score?e._e():s("a",{staticClass:"button-quiz-ended",on:{click:e.refreshQuiz}},[e._v("Пройти заново")])]):e._e()])])])]),s("b-modal",{attrs:{id:"show","hide-footer":"","hide-header":"",centered:"",size:"lg"}},[s("div",{staticClass:"store__product__modal",staticStyle:{background:"#F7E9F6",color:"#C460C0"},attrs:{id:"dialog"}},[s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(s){return e.$bvModal.hide("show")}}},[s("span",{attrs:{"aria-hidden":"true"}})]),s("h1",[e._v("Вы успешно завершили курс")]),s("br"),e._v(" На ваш счет начислено 25 коинов ")])])],1)},r=[],n=(t("14d9"),t("2b0e")),a={name:"CourseExercise",data(){return{finished:!1,results:[],result:0,percent:0,passing_score:0,max_score:0,success:!1,error:!1,quiz:!1,apiRoot:window.API_ROOT,selectedAnswer:[],selectedAnswerRaw:null,currentQuestionId:0,course:!1,quizEnded:!1,triesAvalible:!1,savedAnswers:[]}},methods:{showResults(e=!0){this.$http.get(`${this.apiRoot}/api/course/quiz/get-user-answers/${this.quiz.id}`).then(s=>{this.results=s.body.data,this.result=s.body.result,this.passing_score=s.body.passing_score,this.percent=s.body.percent,this.max_score=s.body.max_score,this.error=!1,this.success=!1,this.finished=e}).catch(e=>{n["default"].toastr({message:"Error",description:"Не удалось завершить тест",type:"error"})}).finally(()=>{})},getQuiz(e=!0){let s=this.$route.params.slug,t=this.$route.params.quiz;this.$http.get(`${this.apiRoot}/api/course/${s}/quiz/${t}`).then(s=>{if(this.quiz=s.body,this.triesAvalible=this.quiz.user_tries>0,e){this.showResults(!1);let e=[];for(let t=0;t<s.body.questions.length;t++)(s.body.questions[t].user_answer.answer[0]||s.body.questions[t].user_answer.answer_raw)&&e.push(!0);e.length==s.body.questions.length&&(this.quizEnded=!0)}}).catch(e=>console.log(e)).finally(()=>{})},getCourseDetails(){let e=this.$route.params.slug;this.$http.get(`${this.apiRoot}/api/course/${e}`).then(e=>{this.course=e.body}).catch(e=>console.log(e)).finally(()=>{})},saveAnswer(){let e=null!==this.selectedAnswerRaw?{answer:this.selectedAnswerRaw,answer_raw:this.selectedAnswerRaw,question_id:this.currentQuestion.id,quiz_id:this.quiz.id}:{answer:this.selectedAnswer,question_id:this.currentQuestion.id,quiz_id:this.quiz.id};this.$http.post(this.apiRoot+"/api/course/quiz/answer/store",e).then(e=>{}).catch(e=>{}).finally(()=>{})},refreshQuiz(){this.quizEnded=!1,this.triesAvalible=!1,this.savedAnswers=[],this.finished=!1,this.results=[],this.result=0,this.percent=0,this.passing_score=0,this.max_score=0,this.success=!1,this.error=!1,this.quiz=!1,this.apiRoot=window.API_ROOT,this.selectedAnswer=[],this.selectedAnswerRaw=null,this.currentQuestionId=0;let e=this.quizId;this.$http.post(`${this.apiRoot}/api/course/quiz/refresh/${e}`).then(e=>{}).catch(e=>console.log(e)).finally(()=>{this.getQuiz(!1)})},prev(){this.currentQuestionId&&(("null"!==this.selectedAnswerRaw||this.selectedAnswer.length)&&this.saveAnswer(),this.currentQuestionId--,this.error=!1,this.success=!1,this.selectedAnswer=[],this.selectedAnswerRaw=null,this.currentQuestion.user_answer&&(this.currentQuestion.user_answer.answer&&(1==this.currentQuestion.user_answer.answer.length?this.selectedAnswer=this.currentQuestion.user_answer.answer[0]:this.selectedAnswer=this.currentQuestion.user_answer.answer),this.currentQuestion.user_answer.answer_raw&&(this.selectedAnswerRaw=this.currentQuestion.user_answer.answer_raw)))},next(){("null"!==this.selectedAnswerRaw||this.selectedAnswer.length)&&this.saveAnswer(),this.currentQuestionId++,this.error=!1,this.success=!1,this.selectedAnswer=[],this.selectedAnswerRaw=null},finish(){this.saveAnswer(),"DEFAULT"===this.quiz.mode?this.$http.get(`${this.apiRoot}/api/course/quiz/get-user-answers/${this.quiz.id}`).then(e=>{this.results=e.body.data,this.result=e.body.result,this.passing_score=e.body.passing_score,this.percent=e.body.percent,this.max_score=e.body.max_score,this.error=!1,this.success=!1,this.finished=!0,this.finished&&this.result>=this.quiz.passing_score&&this.$bvModal.show("show")}).catch(e=>{n["default"].toastr({message:"Error",description:"Не удалось завершить тест",type:"error"})}).finally(()=>{}):this.$router.push({name:"final-testing",params:{slug:this.$route.params.slug}})},reloadExercise(){window.location.reload()}},computed:{currentQuestion(){if(!this.quiz.questions)return;let e=this.quiz.questions.find((e,s)=>s==this.currentQuestionId);return e.user_answer&&(e.user_answer.answer&&(1==e.user_answer.answer.length?this.selectedAnswer=e.user_answer.answer[0]:this.selectedAnswer=e.user_answer.answer),e.user_answer.answer_raw&&(this.selectedAnswerRaw=e.user_answer.answer_raw)),e},currentModule:function(){return!(!this.quiz.course||!this.quiz.course.modules)&&this.quiz.course.modules.find(e=>e.id===this.quiz.module_id)},currentModuleId:function(){if(this.quiz&&this.quiz.owner)return this.quiz.owner.course_chapter_id},currentTheme:function(){return!!this.currentModule&&this.currentModule.themes.find(e=>e.id===this.quiz.theme_id)},lastQuestion:function(){return this.currentQuestionId+1===this.quiz.questions.length},firstQuestion:function(){return 0==this.currentQuestionId}},mounted(){this.getCourseDetails(),this.getQuiz()}},o=a,_=(t("d343"),t("57b3"),t("2877")),u=Object(_["a"])(o,i,r,!1,null,"63021b56",null);s["default"]=u.exports},d343:function(e,s,t){"use strict";t("5c60")}}]);
//# sourceMappingURL=chunk-96cfb3a8.317361c5.js.map