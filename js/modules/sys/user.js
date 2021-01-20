$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/user/list',
        datatype: "json",
        colModel: [{
                label: '用户ID',
                name: 'userId',
                index: "user_id",
                width: 45,
                key: true
            },
            {
                label: '用户名',
                name: 'username',
                width: 75
            },
            {
                label: '所属部门',
                name: 'deptName',
                width: 75
            },
            {
                label: '邮箱',
                name: 'email',
                width: 90
            },
            {
                label: '手机号',
                name: 'mobile',
                width: 80
            },
            // { label: '状态', name: 'status', width: 80, formatter: function(value, options, row){
            // 	return value === 0 ? 
            // 		'<span class="label label-danger">禁用</span>' : 
            // 		'<span class="label label-success">正常</span>';
            // }},
            {
                label: '状态',
                name: 'deptName',
                width: 80,
                formatter: function (value, options, row) {
                    console.log(value)
                    return value === "TEAM-E" ?
                        '<span class="label label-danger">已离职</span>' :
                        '<span class="label label-success">正常</span>';
                }
            },
            {
                label: '创建时间',
                name: 'createTime',
                index: "create_time",
            },
            {
                label: '入职时间',
                name: 'entryTime',
                index: "entry_time",
                
            },
            {
                label: '离职时间',
                name: 'leaveTime',
                index: "leave_time",
            }
        ],
        viewrecords: true,
        height: 385,
        rowNum: 10,
        rowList: [10, 30, 50],
        rownumbers: true,
        rownumWidth: 25,
        autowidth: true,
        multiselect: true,
        pager: "#jqGridPager",
        jsonReader: {
            root: "page.list",
            page: "page.currPage",
            total: "page.totalPage",
            records: "page.totalCount"
        },
        prmNames: {
            page: "page",
            rows: "limit",
            order: "order"
        },
        gridComplete: function () {
            //隐藏grid底部滚动条
            $("#jqGrid").closest(".ui-jqgrid-bdiv").css({
                "overflow-x": "hidden"
            });
        }
    });
});

var setting = {
    data: {
        simpleData: {
            enable: true,
            idKey: "deptId",
            pIdKey: "parentId",
            rootPId: -1
        },
        key: {
            url: "nourl"
        }
    }
};
var ztree;

var vm = new Vue({
    el: '#rrapp',
    data: {
        q: {
            username: null
        },
        showList: true,
        showSubList: false,
        title: null,
        roleList: [],
        user: {
            status: 1,
            deptId: null,
            deptName: null,
            salesTarget: 0,
            roleIdList: [],
            entryTime:null,
        },
        user1: {
        },
        status:0,
        leave_jobDialog:false,
        leaveDate:'',
    },
    mounted(){
        this.getStatus();
    },
    methods: {
        getStatus() {
            $.getJSON(baseURL + "sys/user/info", function (r) {
                console.log(r);
                vm.user = r.user;
                var roleIdList = r.user.roleIdList;
                roleIdList.forEach(v => {
                    if (v === 11) {
                        console.log("超级管理员");
                        vm.status = v;
                    } else if (v == 13) {
                        console.log("经理");
                        vm.status = v;
                    } else if (v === 6) {
                        console.log("主管");
                        vm.status = v;
                    } else if (v === 5) {
                        console.log("专员");
                        vm.status = v;
                    } else {}
                });
            });
        },
        query: function () {
            vm.reload();
        },
        add: function () {
            vm.showList = false;
            vm.title = "新增";
            vm.roleList = [];
            vm.user = {
                deptName: null,
                deptId: null,
                status: 1,
                roleIdList: []
            };
            

            //获取角色信息
            vm.getRoleList();

            vm.getDept();
        },
        getDept: function () {
            //加载部门树
            $.get(baseURL + "sys/dept/list", function (r) {
                ztree = $.fn.zTree.init($("#deptTree"), setting, r);
                var node = ztree.getNodeByParam("deptId", vm.user.deptId);
                console.log(node);
                if (node != null) {
                    ztree.selectNode(node);

                    vm.user.deptName = node.name;
                };

            })
        },
        update: function () {
            var deptId = getSelectedObject();
            var userId = getSelectedRow();
            if (userId == null) {
                return;
            }
            if (deptId == 16) {
                return;
            }
            vm.roleList = [];
            vm.showList = false;
            vm.title = "修改";

            vm.getUser(userId);
            //获取角色信息
            vm.getRoleList();
        },
        del: function () {
            var userIds = getSelectedRows();
            if (userIds == null) {
                return;
            }

            confirm('确定要删除选中的记录？', function () {
                $.ajax({
                    type: "POST",
                    url: baseURL + "sys/user/delete",
                    contentType: "application/json",
                    data: JSON.stringify(userIds),
                    success: function (r) {
                        if (r.body.states == 200) {
                            alert('操作成功', function () {
                                vm.reload();
                            });
                        } else {
                            alert(r.body.msg);
                        }
                    }
                });
            });
        },
        saveOrUpdate: function () {
            var url = vm.user.userId == null ? "sys/user/save" : "sys/user/update";
            console.log(url);
            $.ajax({
                type: "POST",
                url: baseURL + url,
                contentType: "application/json",
                data: JSON.stringify(vm.user),
                success: function (r) {
                    if (r.body.status === 200) {
                        alert('操作成功', function () {
                            vm.reload();
                        });
                    } else {
                        alert(r.body.msg);
                    }
                }
            });
        },
        leave_jobDialogHandleClose:function(){
            this.leaveDate = '';
            this.leave_jobDialog = false;
        },
        leave_jobDialogSubmit:function(){
            console.log(this.leaveDate)
            // return
            var userId = getSelectedRow();
            if (userId == null) {
                return;
            }
            $.ajax({
                type: "POST",
                url: baseURL + "sys/user/leaveOffice?userId=" + userId + "&leaveTime=" + this.leaveDate + ' 00:00:00',
                contentType: "application/json",
                // data: JSON.stringify(vm.user),
                success: function (r) {
                    if (r.body.status === 200) {
                        alert('操作成功', function () {
                            vm.reload();
                            vm.leave_jobDialogHandleClose();
                        });
                    } else {
                        alert(r.body.msg);
                    }
                }
            });
        },
        leave_job: function () {

            this.leave_jobDialog = true;

            // var userId = getSelectedRow();
            // if (userId == null) {
            //     return;
            // }
            // $.ajax({
            //     type: "POST",
            //     url: baseURL + "sys/user/leaveOffice?userId=" + userId,
            //     contentType: "application/json",
            //     // data: JSON.stringify(vm.user),
            //     success: function (r) {
            //         if (r.body.status === 200) {
            //             alert('操作成功', function () {
            //                 vm.reload();
            //             });
            //         } else {
            //             alert(r.body.msg);
            //         }
            //     }
            // });
        },
        getUser: function (userId) {
            $.get(baseURL + "sys/user/info/" + userId, function (r) {
                console.log(r);
                vm.user = r.user;
                vm.user1 = r.user;
                vm.user.password = null;

                vm.getDept();
                console.log(vm.user1.entryTime);
            });
        },
        getRoleList: function () {
            console.log(vm.status);
            $.get(baseURL + "sys/role/select", function (r) {
                // console.log(r);
                if(vm.status == 13){
                    for(var i in r.list){
                        if(r.list[i].roleId != 11 && r.list[i].roleId != 13){
                            vm.roleList.push(r.list[i]);
                        }
                    }
                } else {
                    vm.roleList = r.list;
                }
                console.log(vm.roleList);
            });
        },
        deptTree: function () {
            layer.open({
                type: 1,
                offset: '50px',
                skin: 'layui-layer-molv',
                title: "选择部门",
                area: ['300px', '450px'],
                shade: 0,
                shadeClose: false,
                content: jQuery("#deptLayer"),
                btn: ['确定', '取消'],
                btn1: function (index) {
                    var node = ztree.getSelectedNodes();
                    //选择上级部门
                    vm.user.deptId = node[0].deptId;
                    vm.user.deptName = node[0].name;

                    layer.close(index);
                    // 销售部门-销售业绩目标
                    if (node[0].deptType == 1) {
                        vm.showSubList = true;
                    } else {
                        vm.showSubList = false;
                    }
                }
            });
        },
        reload: function () {
            vm.showList = true;
            var page = $("#jqGrid").jqGrid('getGridParam', 'page');
            $("#jqGrid").jqGrid('setGridParam', {
                postData: {
                    'username': vm.q.username
                },
                page: page
            }).trigger("reloadGrid");
        }
    }
});