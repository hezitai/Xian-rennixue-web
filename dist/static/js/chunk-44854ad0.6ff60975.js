(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44854ad0"],{1697:function(e,t,a){"use strict";var n=a("5b24"),i=a.n(n);i.a},"2d43":function(e,t,a){var n=a("01f5"),i=a("6462"),s=a("db4b"),r=a("b146"),o=a("5824");e.exports=function(e,t){var a=1==e,l=2==e,u=3==e,c=4==e,d=6==e,p=5==e||d,f=t||o;return function(t,o,h){for(var m,v,b=s(t),g=i(b),_=n(o,h,3),y=r(g.length),w=0,S=a?f(t,y):l?f(t,0):void 0;y>w;w++)if((p||w in g)&&(m=g[w],v=_(m,w,b),e))if(a)S[w]=v;else if(v)switch(e){case 3:return!0;case 5:return m;case 6:return w;case 2:S.push(m)}else if(c)return!1;return d?-1:u||c?c:S}}},5824:function(e,t,a){var n=a("f691");e.exports=function(e,t){return new(n(e))(t)}},"5b24":function(e,t,a){},"608b":function(e,t,a){"use strict";var n=a("b2f5"),i=a("2d43")(5),s="find",r=!0;s in[]&&Array(1)[s](function(){r=!1}),n(n.P+n.F*r,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("644a")(s)},dd7f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"giveTimes"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.giveTimes,expression:"giveTimes"}]},[a("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"请输入姓名"},model:{value:e.tableDataName,callback:function(t){e.tableDataName=t},expression:"tableDataName"}}),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("本月可赠送时长"+e._s(e.user.presenterTimeLimit)+"分钟")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("本月可赠额度"+e._s(e.time)+"分钟")]),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%","margin-top":"5px"},attrs:{data:e.tableDataEnd,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{label:"赠送时间","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.updateAt))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"学生姓名","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.studentName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"课堂名称","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.classroomName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"课程名称","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.offCourseName))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"赠送时长","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.preTime)+"分钟")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"}})],1),e._v(" "),a("el-pagination",{staticStyle:{"margin-top":"15px"},attrs:{"current-page":e.currentPage,"page-sizes":[15,20],"page-size":e.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])},i=[],s=(a("608b"),a("d4d5"),{data:function(){return{giveTimes:!1,tableDataBegin:[],tableDataName:"",tableDataEnd:[],currentPage:0,pageSize:0,user:"",modal:!1,modal_time:!1,total:0,limit:15,time:"",idss:[],courseId:"",val:1,page:"",ruleForm:{}}},multipleSelection:[],mounted:function(){this.getTableData(),this.getUser()},methods:{search:function(){this.getTableData()},getTableData:function(){var e=this;this.giveTimes=!0,this.$axios({url:this.$api.baseURL+"api/teacher/presentertime/list",params:{page:this.val,limit:this.limit,key:this.tableDataName}}).then(function(t){e.giveTimes=!1,e.tableDataEnd=t.data.body.list,e.total=t.data.body.totalCount,e.pageSize=t.data.body.totalCount,e.currentPage=t.data.body.currPage}).catch(function(t){e.giveTimes=!1})},handleSizeChange:function(e){console.log("每页 ".concat(e," 条")),this.limit=e,this.getTableData()},getUser:function(){var e=this;this.$axios({url:this.$api.baseURL+"api/teacher/user/getMyInfo"}).then(function(t){e.user=t.data.body,e.time=Number(e.user.presenterTimeLimit)-Number(e.user.presenterTimeConsume)}).catch(function(e){})},handleChangearea:function(e){var t={};t=this.selects.find(function(t){return t.userId===e}),this.userId=t.userId,this.username=t.username},handleCurrentChange:function(e){this.val=e,this.getTableData()},handleSelectionChange:function(e){this.multipleSelection=e;var t=[];this.multipleSelection.map(function(e){var a=e.id;t.push(""+a)}),this.selectedIDs=t,console.log("多选",t),this.idss=this.selectedIDs,console.log(this.idss)}}}),r=s,o=(a("1697"),a("17cc")),l=Object(o["a"])(r,n,i,!1,null,"dcdac736",null);t["default"]=l.exports},f691:function(e,t,a){var n=a("88dd"),i=a("b5b8"),s=a("8b37")("species");e.exports=function(e){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),n(t)&&(t=t[s],null===t&&(t=void 0))),void 0===t?Array:t}}}]);