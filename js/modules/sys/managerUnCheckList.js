$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/studWx/listManager',
        datatype: "json",
        colModel: [			
			{ label: 'ID', name: 'id', index: "id", width: 45, key: true },
			{ label: '来自微信', name: 'wxAccount', width: 75 },
            { label: '微信号', name: 'wxName', width: 75 },
			{ label: '姓名', name: 'creatorName', width: 90 },
			{ label: '国家', name: 'signupTime', width: 80 },
			{ label: '专业', name: 'friendNum', width: 80 },
			{ label: '内容/微信群', name: 'reaFriendNum', width: 80 },
			{ label: '添加时间', name: 'reaFriendNum', width: 80 },
			{ label: '学术等级', name: 'reaFriendNum', width: 80 },
			// { label: '入学时间', name: 'reaFriendNum', width: 80 },
			{ label: '组长', name: 'reaFriendNum', width: 80 },
			{ label: '经理', name: 'receiverName', index: "create_time", width: 90}
        ],
		viewrecords: true,
        height: 385,
        rowNum: 10,
		rowList : [10,30,50],
        rownumbers: true, 
        rownumWidth: 25, 
        autowidth:true,
        multiselect: true,
        pager: "#jqGridPager",
        jsonReader : {
            root: "body.list",
            page: "body.currPage",
            total: "body.totalPage",
            records: "body.totalCount"
        },
        prmNames : {
            page:"page", 
            rows:"limit", 
            order: "order"
        },
        gridComplete:function(){
        	//隐藏grid底部滚动条
        	$("#jqGrid").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" }); 
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
            url:"nourl"
        }
    }
};
var ztree;

var vm = new Vue({
	el:'#rrapp',
	data:{
		q:{
			username: null
		},
		showList: true,
		showSubList: false,
		title:null,
		userList:{},
		wxAccount:{
			wxAccount:1,
			wxName:"",
			wxPassword:"",
			devices:"",
			statused:1,
			creatorId:null,
			operatorId:null,
			receiverId:null,
			devices:"",
			deliveryTime:"",
			deliveryReason:"",
			signupTime:"",
			friendNum:0,
			reaFriendNum:0
		}
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function(){
			vm.showList = false;
			vm.title = "新增";
			// vm.roleList = {};
			// vm.user = {deptName:null, deptId:null, status:1, roleIdList:[]};

			vm.getUsers();
		},
        getUsers: function(){
            //加载所有销售部门专员列表
            $.get(baseURL + "sys/user/sellerList", function(r){
                vm.data.userList = r;
            })
        },
		update: function () {
			var userId = getSelectedRow();
			if(userId == null){
				return ;
			}
			
			vm.showList = false;
            vm.title = "修改";
			
			vm.getUser(userId);
			//获取角色信息
			this.getRoleList();
		},
		del: function () {
			var userIds = getSelectedRows();
			if(userIds == null){
				return ;
			}
			
			confirm('确定要删除选中的记录？', function(){
				$.ajax({
					type: "POST",
				    url: baseURL + "sys/user/delete",
                    contentType: "application/json",
				    data: JSON.stringify(userIds),
				    success: function(r){
						if(r.body.states == 200){
							alert('操作成功', function(){
                                vm.reload();
							});
						}else{
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
			    success: function(r){
			    	if(r.body.status === 200){
						alert('操作成功', function(){
							vm.reload();
						});
					}else{
						alert(r.body.msg);
					}
				}
			});
		},
		getUser: function(userId){
			$.get(baseURL + "sys/user/info/"+userId, function(r){
				vm.user = r.user;
				vm.user.password = null;

                vm.getDept();
			});
		},
		getRoleList: function(){
			$.get(baseURL + "sys/role/select", function(r){
				vm.roleList = r.list;
			});
		},
        deptTree: function(){
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
					if(node[0].deptType == 1){
						vm.showSubList = true;
                    }else{
						vm.showSubList = false;
					}
                }
            });
        },
		reload: function () {
			vm.showList = true;
			var page = $("#jqGrid").jqGrid('getGridParam','page');
			$("#jqGrid").jqGrid('setGridParam',{ 
                postData:{'username': vm.q.username},
                page:page
            }).trigger("reloadGrid");
		}
	}
});