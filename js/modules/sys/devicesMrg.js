$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/basedata/devices/list',
        datatype: "json",
        colModel: [{
                label: 'ID',
                name: 'id',
                index: "id",
                width: 45,
                key: true
            },
            {
                label: '设备名称',
                name: 'deviceName',
                width: 75
            },
            {
                label: '设备编号',
                name: 'deviceModel',
                width: 90
            },
            {
                label: '创建时间',
                name: 'createAt',
                width: 85
            },
            {
                label: '更新时间',
                name: 'updateAt',
                width: 85
            },
            {
                label: '已綁定微信號',
                name: 'bindWxAccount',
                width: 85,
                formatter: function (value, grid, rows, state) {
                    // console.log(value, options, row);
                    return '<div style="text-align:center;cursor:pointer;"><span class="label label-info">双击查看</span></div>'
                }
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
            root: "body.list",
            page: "body.currPage",
            total: "body.totalPage",
            records: "body.totalCount"
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
        },
        ondblClickRow: function (rowid, iRow, iCol, e) {
            // vm.showList = false;
            // vm.title = "修改";
            $.ajax({
                type: "get",
                url: baseURL + "sys/basedata/wxManager/selectd",
                headers: {
                    token: token
                },
                data: {
                    dId: rowid
                },
                success: function (r) {
                    // console.log(r);
                    vm.getBindWxList = r.body;
                }
            });
            $("#unBindFacilityModal1").modal("show");
            vm.queryObject(rowid);
            vm.nowDeviceId = rowid;
            // console.log(rowid, iRow, iCol);
        }
    });
    $.ajax({
        type: "get",
        url: baseURL + "sys/user/userList",
        data: {
            limit: 1000,
            page: 1
        },
        success: function (r) {
            // console.log(r);
            vm.userList = r.body;
        }
    });
    $.getJSON(baseURL + "sys/user/info", function (r) {
        // console.log(r);
        // vm.user = r.user;
        var roleIdList = r.user.roleIdList;
        roleIdList.forEach(v => {
            if (v === 11) {
                console.log('超级管理员');
                vm.changeBindSchoolButton = true;
                vm.statusType = true;
            } else if (v == 13) {
                console.log('经理');
                vm.changeBindSchoolButton = false;
                vm.statusType = false;
            } else if (v === 6) {
                console.log('主管');
                vm.changeBindSchoolButton = false;
                vm.statusType = false;
            } else if (v === 5) {
                console.log('专员');
                vm.changeBindSchoolButton = false;
                vm.statusType = false;
            } else {

            }
        })
    });
    $.ajax({
        type: "get",
        dataType: "json",
        header: {
            "token": token,
        },
        data: {
            "page": 1,
            "limit": 1000,
            // "isMy": true,
            // "receiverId": vm.ruleForm.getmemberId,
            // "isSerach": true,
            isBindWx: true,
        },
        url: "" + baseURL + "sys/basedata/wxManager/list",
        success: function (json) {
            // console.log(json);
            vm.wxaccounts = json.body.list;
        }
    });
});


var vm = new Vue({
    el: '#rrapp',
    data: {
        q: {
            key: null
        },
        showList: true,
        title: null,
        userList: {},
        devices: {
            id: null,
            deviceName: null,
            deviceModel: null,
            createAt: null,
            updateAt: null,
            receiverId: null
        },
        // devices: '',
        devicesId: '',
        chooseWxList: '',
        WxList: '',
        wxaccounts: '',
        nowWxId: '',
        nowDeviceId: '',
        getBindWxList: [],
        nowBindWx: '',
        changeBindSchoolButton: true,
        statusType: true,
    },
    computed: {

    },
    methods: {
        query: function () {
            vm.reload();
        },
        deleteBindWx: function (e) {
            // console.log(e);
            confirm('确定要删除选中的记录？', function () {
                $.ajax({
                    type: "get",
                    url: baseURL + "sys/basedata/wxManager/unbindDev",
                    data: {
                        wxid: e,
                        devId: vm.nowDeviceId,
                    },
                    success: function (r) {
                        console.log(r);
                        if (r.status == 200) {
                            alert('操作成功', function () {
                                // vm.reloadOnPageOne();
                                window.location.reload();
                            });
                        } else {
                            alert(r.body.msg);
                        }
                    }
                });
            });
        },
        add: function () {
            vm.showList = false;
            vm.title = "新增";
            vm.clear();
        },
        update: function () {
            vm.clear();
            var id = getSelectedRow();
            if (id == null) {
                return;
            }

            vm.showList = false;
            vm.title = "修改";

            vm.queryObject(id);
        },
        del: function () {
            var ids = getSelectedRows();
            console.log(ids);
            if (ids == null) {
                return;
            }

            confirm('确定要删除选中的记录？', function () {
                $.ajax({
                    type: "POST",
                    url: baseURL + "sys/basedata/devices/delete",
                    contentType: "application/json",
                    data: JSON.stringify(ids),
                    success: function (r) {
                        if (r.status == 200) {
                            alert('操作成功', function () {
                                vm.reloadOnPageOne();
                            });

                        } else {
                            alert(r.body.msg);
                        }
                    }
                });
            });
        },
        bindDevice: function () {
            // vm.clear();
            var id = getSelectedRow();
            if (id == null) {
                return;
            }
            $.ajax({
                type: "get",
                url: baseURL + "sys/basedata/wxManager/list",
                data: {
                    page: 1,
                    limit: 1000,
                    statused: 1,
                    isBindWx: true,
                },
                success: function (r) {
                    console.log(r);
                    if (r.status == 200) {
                        vm.chooseWxList = r.body.list;
                    } else {
                        alert(r.body.msg);
                    }
                }
            });
            $("#unBindFacilityModal12").modal("show");
            // vm.showList = false;
            // vm.title = "修改";

            // vm.queryObject(id);
        },
        saveOrUpdate: function () {
            var url = vm.devices.id == null ? "sys/basedata/devices/save" : "sys/basedata/devices/update";
            $.ajax({
                type: "POST",
                url: baseURL + url,
                contentType: "application/json",
                data: JSON.stringify(vm.devices),
                success: function (r) {
                    if (r.status == 200) {
                        alert('操作成功', function () {
                            if (vm.devices.id == null) {
                                vm.reloadOnPageOne();
                            } else {
                                vm.reload();
                            }
                        });
                    } else {
                        alert(r.body.msg);
                    }
                }
            });
        },
        setNowWxId() {
            vm.nowWxId = event.target.value;
            console.log(vm.nowWxId)
        },
        doUnBindFacility() {
            var id = getSelectedRow();
            $.ajax({
                type: "get",
                dataType: "json",
                header: {
                    "token": token,
                },
                data: {
                    wxid: vm.nowBindWx,
                    devId: id,
                },
                url: "" + baseURL + "sys/basedata/wxManager/bindDev",
                success: function (json) {
                    console.log(json);
                    if (json.status == 200) {
                        alert('操作成功', function () {
                            window.location.reload();
                        });
                        $("#unBindFacilityModal12").modal("hide");
                    } else {
                        alert(json.body.msg);
                        $("#unBindFacilityModal12").modal("hide");
                    }
                }
            });
        },
        queryObject: function (id) {
            $.get(baseURL + "sys/basedata/devices/info/" + id, function (r) {
                vm.devices = r.body;
                $("#userId").val(r.body.receiverId);
            });
        },
        reload: function () {
            vm.showList = true;
            var page = $("#jqGrid").jqGrid('getGridParam', 'page');
            $("#jqGrid").jqGrid('setGridParam', {
                postData: {
                    'key': vm.q.key
                },
                page: page
            }).trigger("reloadGrid");
            vm.clear();
        },
        reloadOnPageOne: function () {
            vm.showList = true;
            $("#jqGrid").jqGrid('setGridParam', {
                postData: {
                    'key': vm.q.key
                },
                page: 1
            }).trigger("reloadGrid");
            vm.clear();
        },
        userChange: function () {
            vm.devices.receiverId = event.target.value;
        },
        clear: function () {
            vm.devices.id = null;
            vm.devices.deviceName = null;
            vm.devices.deviceModel = null;
            vm.devices.createAt = null;
            vm.devices.updateAt = null;
            vm.devices.receiverId = null;
            $("#userId").val(null);
        }
    },
    // mounted() {
    //     this.getwxs();
    // }
});