(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1edada46"],{"249d":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.sellerDetail,expression:"sellerDetail"}],staticClass:"sellerDetail"},[s("transition",{attrs:{name:"el-fade-in-linear"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.downloadFiles,expression:"downloadFiles"}],staticClass:"maskLoading"},[s("div",{staticClass:"imgText"},[s("img",{staticStyle:{"margin-left":"40%"},attrs:{src:"images/loading.gif",alt:""}}),e._v(" "),s("p",[e._v("打包下载中，请耐心等待。"),s("br"),e._v("过程中请不要关闭或刷新浏览器！避免下载失败。")])])])]),e._v(" "),s("el-row",{staticStyle:{margin:"0"},attrs:{gutter:20}},[s("el-col",{attrs:{id:"leftdiv",span:12}},[s("div",{staticClass:"grid-content bg-purple"},[s("p",{staticClass:"title"},[e._v("订单信息")]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("订单号:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm1.orderNo))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("课程代码:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.courseCode))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("订单状态:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm1.statused))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("销售名称:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm1.username))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("负责师资:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm1.nickname))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("辅导讲师:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm1.nickname1))])]),e._v(" "),s("p",{staticStyle:{"border-top":"1px dashed #409EFF"}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.typeOrder,expression:"!typeOrder"}],staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("购买课时:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm1.scheduledTime)+" H")])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("学生已上课时:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm1.allSchooltime)+" MIN")])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("系统赠送时长:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm1.persenterTime)+" MIN")])]),e._v(" "),s("p",{staticStyle:{"border-top":"1px dashed #409EFF"}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.typeOrder,expression:"typeOrder"}],staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("字数:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm1.wordsNum)+" 字")])]),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:e.typeOrder,expression:"typeOrder"}],staticStyle:{"border-top":"1px dashed #409EFF"}}),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("Deal Deadline:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm.endCourseTime))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("Offcial Deadline:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm.examTime))])]),e._v(" "),s("p",{staticStyle:{"border-top":"1px dashed #409EFF"}}),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("师资费用(G):")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:0==e.isKaoqiantuji,expression:"isKaoqiantuji == false"}]},[e._v(e._s(e.ruleForm1.teacFixedPrice))]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:1==e.isKaoqiantuji,expression:"isKaoqiantuji == true"}]},[e._v("90.0")])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("讲师已获(G):")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm1.prices1))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("讲师已获(OTG):")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm1.prices2))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("订单讲师时薪:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm1.hourlyWage))]),e._v(" "),s("span",[e._v(" G")])]),e._v(" "),s("p",{staticStyle:{"border-top":"1px dashed #409EFF"}}),e._v(" "),0==e.isDingzhifudaoNew?s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("辅导需求:")]),e._v(" "),s("span",[e._v(e._s(e.question))])]):e._e(),e._v(" "),1==e.isDingzhifudaoNew?s("div",{staticClass:"grid-content bg-purple",staticStyle:{clear:"both"}},e._l(e.question,function(t,a){return s("p",{key:a,staticStyle:{display:"block",clear:"both",margin:"10px 0"}},[e._v("\n            "+e._s(t.question)+"："+e._s(t.answer)+"\n          ")])}),0):e._e(),e._v(" "),s("p",{staticClass:"title"},[e._v("学生信息")]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("姓名:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm.nickname))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("学校名称:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm.schoolName))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("专业:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm.temCourseName))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("学历:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm.levelName))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("学年:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm.schoolYear))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("学校系统账号:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm.schoolAccount))])]),e._v(" "),s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("学校系统密码:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm.schoolPws))])])])]),e._v(" "),s("el-col",{attrs:{span:12}},[s("div",{staticStyle:{background:"#fff",padding:"10px"}},[s("p",{staticClass:"title"},[e._v("课件信息")]),e._v(" "),s("div",{staticStyle:{height:"40px","padding-bottom":"20px"}},[s("div",[s("p",[s("el-button",{attrs:{type:"primary",loading:e.downLoadChooseCourseLoading,title:"选中你想下载的文件后点击"},on:{click:e.downloadZip}},[e._v("选择批量下载")]),e._v(" "),s("el-button",{attrs:{type:"warning",loading:e.downloadAllCourseLoading,title:"直接下载包含整个课件的压缩包"},on:{click:e.checkBoxAll}},[e._v("下载全部课件")]),e._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:1==e.downfileTypeOtherBtn,expression:"downfileTypeOtherBtn == true"}],staticStyle:{"margin-left":"20px",color:"#409EFF","text-decoration":"underline",cursor:"pointer"},on:{click:e.downfileTypeOther}},[e._v("资料整理模板 / 编辑文件\n                下载")]),e._v(" "),s("a",{directives:[{name:"show",rawName:"v-show",value:1==e.downfileType4Btn,expression:"downfileType4Btn == true"}],staticStyle:{"margin-left":"20px",color:"#409EFF","text-decoration":"underline",cursor:"pointer"},attrs:{type:"primary"},on:{click:e.downfileType4}},[e._v("论文大礼包模板 /\n                编辑文件\n                下载")])],1)])]),e._v(" "),e._l(e.courses,function(t,a){return s("div",{key:a},[s("div",[e._v(e._s(t.groupName)+"\n            "),s("ul",e._l(e.coursesItem,function(a,r){return t.groupName==a.groupName?s("li",{key:r},[s("div",{staticStyle:{position:"relative"}},[s("el-checkbox",{staticStyle:{"padding-right":"10px"},on:{change:function(t){return e.chooseDownLoadCheckBox(a)}}}),e._v(" "),s("a",{staticClass:"view",on:{click:function(t){return e.downFiles(a)}}},[e._v("\n                    "+e._s(a.name)+"\n                  ")]),e._v(" "),s("span",{staticStyle:{display:"inline-block",overflow:"hidden",position:"absolute",right:"5px",background:"#fff","z-index":"999","padding-left":"10px"}},[e._v("\n                    "+e._s(e._f("spliting")(a.createAt))+"\n\n                  ")])],1)]):e._e()}),0)])])}),e._v(" "),s("p",{staticClass:"title"},[e._v("作业： "),s("el-button",{attrs:{type:"primary"},on:{click:e.uploadDropbox}},[e._v("上传作业")])],1),e._v(" "),s("ul",{staticStyle:{margin:"0",padding:"0 0 0 10px"}},e._l(e.dropBoxList,function(t,a){return s("li",{key:a,staticStyle:{background:"#fff","line-height":"30px",border:"none"}},[s("a",{staticStyle:{"text-decoration":"none",color:"#409EFF",cursor:"pointer"},on:{click:function(s){return e.downDropBox(t.url)}}},[e._v(e._s(t.name))])])}),0)],2),e._v(" "),s("div",{staticStyle:{background:"#fff",padding:"10px",margin:"8px 0px 0 0",height:"412px"}},[s("p",{staticClass:"title"},[e._v("空余时间 (北京时间)")]),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:3}},[s("div",{staticClass:"grid-content bg-purple"},[e._v("周一")])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("上午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.am1))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("中午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.bm1))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("下午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.pm1))])])])],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:3}},[s("div",{staticClass:"grid-content bg-purple"},[e._v("周二")])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("上午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.am2))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("中午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.bm2))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("下午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.pm2))])])])],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:3}},[s("div",{staticClass:"grid-content bg-purple"},[e._v("周三")])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("上午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.am3))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("中午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.bm3))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("下午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.pm3))])])])],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:3}},[s("div",{staticClass:"grid-content bg-purple"},[e._v("周四")])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("上午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.am4))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("中午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.bm4))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("下午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.pm4))])])])],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:3}},[s("div",{staticClass:"grid-content bg-purple"},[e._v("周五")])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("上午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.am5))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("中午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.bm5))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("下午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.pm5))])])])],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:3}},[s("div",{staticClass:"grid-content bg-purple"},[e._v("周六")])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("上午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.am6))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("中午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.bm6))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("下午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.pm6))])])])],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:3}},[s("div",{staticClass:"grid-content bg-purple"},[e._v("周日")])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("上午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.am7))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("中午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.bm7))])])]),e._v(" "),s("el-col",{attrs:{span:7}},[s("div",{staticClass:"grid-content bg-purple"},[s("span",{staticClass:"label"},[e._v("下午:")]),e._v(" "),s("span",[e._v(e._s(e.ruleForm2.pm7))])])])],1)],1)])],1),e._v(" "),s("div",{staticStyle:{background:"#fff",padding:"10px",margin:"8px 10px"}},[s("p",{staticClass:"title"},[e._v("课堂信息")]),e._v(" "),s("el-table",{staticStyle:{width:"100%","margin-top":"5px",background:"#e5e9f2"},attrs:{data:e.classroomdata,border:""}},[s("el-table-column",{attrs:{label:"课堂名称","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"课堂说明","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.description))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"预计开始时间",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.startTime))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"预计结束时间",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.endTime))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"实际开始时间",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.reaStartTime))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"实际结束时间",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.reaEndTime))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"上课时长",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.schooltime)+"分")])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"赠送时长",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.presenterTime)+"分")])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"评分",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.rate))])]}}])})],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"课堂记录",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[e._l(e.history,function(t,a){return s("div",{key:a,staticClass:"text item"},[s("div",[e._v("讲师 "+e._s(t.nickname)+" "+e._s(t.joinTime)+" 进入了课堂")]),e._v(" "),s("div",[e._v("讲师 "+e._s(t.nickname)+" "+e._s(t.leaveTime)+" 离开了课堂")]),e._v(" "),s("div",[e._v("持续了 "+e._s(t.duration)+" 分钟")])])}),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],2),e._v(" "),s("el-dialog",{attrs:{visible:e.uploadDropBoxDialog,width:"50%"},on:{"update:visible":function(t){e.uploadDropBoxDialog=t}}},[s("div",{staticClass:"coursewaressssss"},[s("div",{staticStyle:{"padding-left":"25px","margin-top":"10px"}},[s("el-button",{attrs:{id:"selectfiles",type:"primary"}},[e._v("选择文件")]),e._v(" "),s("div",{staticStyle:{padding:"10px 0"},attrs:{id:"ossfile"}})],1)]),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{id:"postfiles",type:"primary"}},[e._v("上传")])],1)])],1)},r=[],o=(s("f763"),s("7364"),s("d4d5"),s("0857"),s("7bc1"),s("7f3e")),l=s.n(o),i={filters:{rounding:function(e){return e.toFixed(2)},spliting:function(e){return e.split(" ")[0]}},data:function(){return{sellerDetail:!1,uploadFilesArray:[],isKaoqiantuji:!1,uploadDropBoxDialog:!1,uploadUseData:{},uploadStatus:"exception",uploadPercent:20,showUploadProgress:!1,span:0,dropboxLoading:!1,fileListnum:0,fileList:[],uploadImgTimes:0,formdata:new FormData,downfileTypeOtherBtn:!1,downfileType4Btn:!1,dropBoxList:[],typeOrder:!0,cailiaofei:!0,history:"",dialogVisible:!1,checked:!1,courses:"",urls:[],id:"",btnstatus:!1,classroomdata:[],studCoursewareList:[],filelist:[],ruleForm:{course:""},ruleForm1:{username:"",nickname:"",sellerDemandDesc:"",hourlyWage:""},ruleForm2:{courseCode:"",courseName:"",type:""},checkedArray:[],checkedBoxAll:!1,downloadAllCourseLoading:!1,downLoadChooseCourseLoading:!1,downloadFiles:!1,coursesItem:[],question:"",isDingzhifudao:!1,isDingzhifudaoNew:!1,uploader:null}},mounted:function(){this.getclassroomdata(),this.coursedata()},methods:{downFiles:function(e){window.open(e.url)},downloadZip:function(){var e=JSON.stringify(this.checkedArray);this.downLoadChooseCourse(e)},downLoadChooseCourse:function(e){var t=this;this.downloadFiles=!0,this.$message({type:"success",message:"文件正在打包中..."}),this.$axios({url:this.$api.baseURL+"/resource/getZipFile",headers:{"Content-Type":"application/json"},method:"post",data:e}).then(function(e){t.downloadFiles=!1,200==e.data.status?(t.$message({type:"success",message:"文件打包成功"}),window.location.href=t.$api.baseURL+e.data.body.filePath):t.$message({type:"warning",message:e.data.body.msg})}).catch(function(e){t.downloadFiles=!1})},chooseDownLoadCheckBox:function(e){if(console.log(e),e.checkbox=!e.checkbox,1==e.checkbox)this.checkedArray.push(e.url);else for(var t in this.checkedArray)this.checkedArray[t]==e.url&&this.checkedArray.splice(t,1)},checkBoxAll:function(e){var t=[];for(var s in this.coursesItem)t.push(this.coursesItem[s].url);var a=JSON.stringify(t);this.downLoadChooseCourse(a)},uploadDropbox:function(){var e=this;function t(){this.date=new Date,"function"!==typeof this.newGUID&&(t.prototype.newGUID=function(){this.date=new Date;for(var e="",t=this.hexadecimal(this.getGUIDDate(),16),s=this.hexadecimal(this.getGUIDTime(),16),a=0;a<9;a++)e+=Math.floor(16*Math.random()).toString(16);e+=t,e+=s;while(e.length<32)e+=Math.floor(16*Math.random()).toString(16);return this.formatGUID(e)},t.prototype.getGUIDDate=function(){return this.date.getFullYear()+this.addZero(this.date.getMonth()+1)+this.addZero(this.date.getDay())},t.prototype.getGUIDTime=function(){return this.addZero(this.date.getHours())+this.addZero(this.date.getMinutes())+this.addZero(this.date.getSeconds())+this.addZero(parseInt(this.date.getMilliseconds()/10))},t.prototype.addZero=function(e){return"NaN"!=Number(e).toString()&&e>=0&&e<10?"0"+Math.floor(e):e.toString()},t.prototype.hexadecimal=function(e,t,s){return void 0!=s?parseInt(e.toString(),s).toString(t):parseInt(e.toString()).toString(t)},t.prototype.formatGUID=function(e){var t=e.slice(0,8)+"-",s=e.slice(8,12)+"-",a=e.slice(12,16)+"-",r=e.slice(16,20)+"-",o=e.slice(20);return t+s+a+r+o})}this.uploadDropBoxDialog=!0;var s=0,a=0,r="",o="",i="",n="",d="",u="",c=new t;this.$route.query.id;this.$axios({url:this.$api.baseURL+"api/oss/getAliOSSUploadSign?dir=courseware/"+c.newGUID()+"/"}).then(function(t){if(200==t.data.status){var c=function(e,t){u=encodeURIComponent(t),console.log(u),p(e,t,!1)},p=function(e,t,s){s&&c(e,t);var a={key:d+t,policy:i,OSSAccessKeyId:r,success_action_status:"200",signature:n};e.setOption({url:o,multipart_params:a}),e.start()};r=t.data.body.accessid,o=t.data.body.host,i=t.data.body.policy,n=t.data.body.signature,d=t.data.body.dir;var v=e;e.uploader=new l.a.Uploader({runtimes:"html5,flash,silverlight,html4",browse_button:"selectfiles",url:"http://oss.aliyuncs.com",init:{PostInit:function(){document.getElementById("ossfile").innerHTML="",document.getElementById("postfiles").onclick=function(){return p(v.uploader,"",!1),!1}},FilesAdded:function(e,t){console.log(t),s=t.length,l.a.each(t,function(e){document.getElementById("ossfile").innerHTML+='<div id="'+e.id+'" style="padding: 10px 0;">'+e.name+" ("+l.a.formatSize(e.size).split(" ")[0]+l.a.formatSize(e.size).split(" ")[1].toUpperCase()+')<b></b><div class="progress" style="display:none;"><div class="progress-bar" style="width: 0%"></div></div></div>'}),v.uploadFileActive=2},BeforeUpload:function(e,t){p(e,t.name,!0)},UploadProgress:function(e,t){v.updataFiles=!0;var s=document.getElementById(t.id);s.getElementsByClassName("progress")[0].style.display="block",s.getElementsByTagName("b")[0].innerHTML='<span style="display:inline-block;padding-left:10px;">'+t.percent+"%</span>";var a=s.getElementsByTagName("div")[0],r=a.getElementsByTagName("div")[0];r.style.width=t.percent+"%",r.setAttribute("aria-valuenow",t.percent)},FileUploaded:function(e,r,l){if(200==l.status){a++;var i={cdId:v.$route.query.id,groupId:0,name:r.name,url:o+"/"+d+u};v.uploadFilesArray.push(i),a===s&&v.$axios({method:"post",url:v.$api.baseURL+"api/teacher/courseware/saveWithOssUrl",headers:{"Content-Type":"application/json"},data:JSON.stringify(v.uploadFilesArray)}).then(function(e){v.updataFiles=!1,200==t.status&&(v.$message({type:"success",message:"文件上传成功"}),setInterval(function(){window.location.reload()},1e3))}).catch(function(e){v.updataFiles=!1})}else document.getElementById(r.id).getElementsByTagName("b")[0].innerHTML=l.response},Error:function(e,t){v.$message({type:"error",message:"文件上传失败， 请刷新重试"}),v.updataFiles=!1}}}),e.uploader.init()}}).catch(function(e){})},downfileTypeOther:function(){window.open("https://classbro-oss.oss-cn-hongkong.aliyuncs.com/statice-resource/%E8%B5%84%E6%96%99%E6%95%B4%E7%90%86%E6%A8%A1%E6%9D%BF.zip")},downfileType4:function(){window.open("https://classbro-oss.oss-cn-hongkong.aliyuncs.com/statice-resource/%E8%AE%BA%E6%96%87%E5%A4%A7%E7%A4%BC%E5%8C%85%EF%BC%88%E5%8C%85%E6%8B%AC%E5%A4%A7%E8%AE%BA%E6%96%87%EF%BC%89(1).zip")},downDropBox:function(e){window.open(e)},coursedata:function(){var e=this;this.$axios({url:this.$api.baseURL+"api/teacher/courseware/groupList",params:{page:1,limit:1e3}}).then(function(t){if(200==t.data.status){var s=[];t.data.body.list.forEach(function(e){var t={};t.groupName=e.groupName,t.name=e.groupName.split(" ")[0],t.id=e.id,s.push(t)}),e.courses=s}console.log(e.courses)})},getclassroomdata:function(){var e=this,t=this.$route.query.id;this.sellerDetail=!0,this.$axios({url:this.$api.baseURL+"api/teacher/order/getCourseObject?id="+t,params:{page:1,limit:6,exceptionType:""}}).then(function(t){if(e.sellerDetail=!1,e.question=t.data.body.studPurchaseOrder.sellerDemandDesc,"0"==t.data.body.studPurchaseOrder.type&&(e.cailiaofei=!1,e.isDingzhifudao=!0,null==t.data.body.studPurchaseOrder.orderQuestions?e.isDingzhifudaoNew=!1:(e.isDingzhifudaoNew=!0,e.question=t.data.body.studPurchaseOrder.orderQuestions)),e.dropBoxList=t.data.body.dropBoxList,e.ruleForm1.hourlyWage=t.data.body.hourlyWage,e.classroomdata=t.data.body.classroomList,e.studCoursewareList=t.data.body.studCoursewareList,e.studdate=t.data.body.studUser,e.filelist=t.data.body.studCoursewareList,e.ruleForm1.orderNo=t.data.body.orderNo,e.ruleForm1.remark=t.data.body.remark,e.ruleForm1.scheduledTime=t.data.body.studPurchaseOrder.scheduledTime,e.ruleForm1.allSchooltime=t.data.body.allSchooltime,e.ruleForm1.totalPrice=t.data.body.studPurchaseOrder.totalPrice+" "+t.data.body.studPurchaseOrder.currency,e.ruleForm1.prepayment=t.data.body.studPurchaseOrder.prepayment+" "+t.data.body.studPurchaseOrder.currency,e.ruleForm1.prices1=Number(t.data.body.teacG)+Number(t.data.body.teacPreG),e.ruleForm1.prices2=Number(t.data.body.teacOtg)+Number(t.data.body.teacPreOtg),e.ruleForm1.sellerDemandDesc=t.data.body.studPurchaseOrder.sellerDemandDesc,e.ruleForm2.spareTime=t.data.body.studPurchaseOrder.spareTime,null!=e.ruleForm2.spareTime){var s=t.data.body.studPurchaseOrder.spareTime.split("|"),a=s[0],r=a.split(",");e.ruleForm2.am1=r[0],e.ruleForm2.bm1=r[1],e.ruleForm2.pm1=r[2];var o=s[1],l=o.split(",");e.ruleForm2.am2=l[0],e.ruleForm2.bm2=l[1],e.ruleForm2.pm2=l[2];var i=s[2],n=i.split(",");e.ruleForm2.am3=n[0],e.ruleForm2.bm3=n[1],e.ruleForm2.pm3=n[2];var d=s[3],u=d.split(",");e.ruleForm2.am4=u[0],e.ruleForm2.bm4=u[1],e.ruleForm2.pm4=u[2];var c=s[4],p=c.split(",");e.ruleForm2.am5=p[0],e.ruleForm2.bm5=p[1],e.ruleForm2.pm5=p[2];var v=s[5],m=v.split(",");e.ruleForm2.am6=m[0],e.ruleForm2.bm6=m[1],e.ruleForm2.pm6=m[2];var _=s[6],b=_.split(",");e.ruleForm2.am7=b[0],e.ruleForm2.bm7=b[1],e.ruleForm2.pm7=b[2]}for(var g in 1==t.data.body.statused&&(e.ruleForm1.statused="未处理（无任何销售接单）"),2==t.data.body.statused&&(e.ruleForm1.statused="待审核"),4==t.data.body.statused&&(e.ruleForm1.statused="待确定"),8==t.data.body.statused&&(e.ruleForm1.statused="待规划（等待教师/运营接单）"),16==t.data.body.statused&&(e.ruleForm1.statused="规划中(订单第一次超时等待运营接单)"),32==t.data.body.statused&&(e.ruleForm1.statused="规划中(订单第二次超时等待运营主管强制指派)"),64==t.data.body.statused&&(e.ruleForm1.statused="规划中(运营接单待指派，正在处理)"),128==t.data.body.statused&&(e.ruleForm1.statused="待排课"),256==t.data.body.statused&&(e.ruleForm1.statused="已排课"),512==t.data.body.statused&&(e.ruleForm1.statused="申请结课中"),1024==t.data.body.statused&&(e.ruleForm1.statused="已结课"),2048==t.data.body.statused&&(e.ruleForm1.statused="已强制结课"),4096==t.data.body.statused&&(e.ruleForm1.statused="已取消"),8192==t.data.body.statused&&(e.ruleForm1.statused="坏单申请中"),16384==t.data.body.statused&&(e.ruleForm1.statused="订单作废"),32768==t.data.body.statused&&(e.ruleForm1.statused="销售被更换"),65536==t.data.body.statused&&(e.ruleForm1.statused="事故单申请中"),131072==t.data.body.statused&&(e.ruleForm1.statused="讲师已更换"),262144==t.data.body.statused&&(e.ruleForm1.statused="事故单更换教师待委派"),e.ruleForm1.username=t.data.body.sysSeller.username,e.ruleForm1.nickname=t.data.body.sysUserEntity.username,e.ruleForm1.nickname1=t.data.body.teacUser.username,e.ruleForm1.teacFixedPrice=t.data.body.teacFixedPrice,e.ruleForm2.courseName=t.data.body.studPurchaseOrder.courseName,e.ruleForm2.courseCode=t.data.body.studPurchaseOrder.courseCode,0==t.data.body.studPurchaseOrder.type&&(e.ruleForm2.type="定制辅导",e.downfileType4Btn=!1,e.downfileTypeOtherBtn=!1),1==t.data.body.studPurchaseOrder.type&&(e.ruleForm2.type="考前突击",e.downfileType4Btn=!1,e.downfileTypeOtherBtn=!0,e.isKaoqiantuji=!0),2==t.data.body.studPurchaseOrder.type&&(e.ruleForm2.type="包课辅导",e.downfileType4Btn=!1,e.downfileTypeOtherBtn=!0),4==t.data.body.studPurchaseOrder.type&&(e.ruleForm2.type="论文辅导",e.downfileType4Btn=!0,e.downfileTypeOtherBtn=!1),32==t.data.body.studPurchaseOrder.type&&(e.ruleForm2.type="特殊订单",e.downfileType4Btn=!1,e.downfileTypeOtherBtn=!0),e.ruleForm.nickname=t.data.body.studUser.nickName,e.ruleForm.schoolName=t.data.body.sysUniversity.name,e.ruleForm.temCourseName=t.data.body.sysProfessionalCourses.chineseName,e.ruleForm.levelName=t.data.body.studUser.eduName,e.ruleForm.schoolYear=t.data.body.studPurchaseOrder.schoolYear,e.ruleForm.endCourseTime=t.data.body.studPurchaseOrder.endCourseTime,e.ruleForm.examTime=t.data.body.studPurchaseOrder.examTime,e.ruleForm.schoolAccount=t.data.body.studPurchaseOrder.schoolAccount,e.ruleForm.schoolPws=t.data.body.studPurchaseOrder.schoolPws,e.coursesItem=JSON.parse(JSON.stringify(t.data.body.studCoursewareList)),e.coursesItem)e.coursesItem[g].checkbox=!1})}}},n=i,d=(s("b824"),s("f0ae"),s("17cc")),u=Object(d["a"])(n,a,r,!1,null,null,null);t["default"]=u.exports},"8ed9":function(e,t,s){},b824:function(e,t,s){"use strict";var a=s("cbfe"),r=s.n(a);r.a},cbfe:function(e,t,s){},f0ae:function(e,t,s){"use strict";var a=s("8ed9"),r=s.n(a);r.a}}]);