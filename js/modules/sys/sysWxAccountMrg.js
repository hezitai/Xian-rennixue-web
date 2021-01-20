$(function () {
    // function xiugai(val, id) {
    //     console.log(val, id)
    // }
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/basedata/wxManager/list',
        datatype: "json",
        colModel: [{
                label: '状态',
                name: 'statused',
                width: 80,
                formatter: function (value, options, row) {
                    if (value === 1) {
                        return '<div><span class="label label-success">备用号</span><input style="display: none" value="' + value + '"></div>';
                    }
                    if (value === 2) {
                        return '<div><span class="label label-danger">使用中</span><input style="display: none" value="\' + value + \'"></div>';
                    }
                    if (value === 4) {
                        return '<div><span class="label label-warning">已交付</span><input style="display: none" value="\' + value + \'"></div>';
                    }
                }
            }, {
                label: '分组',
                name: 'deptName',
                width: 80,
                formatter: function (value, options, row) {
                    let a = value;
                    if (a == null) {
                        a = '暂无分组';
                        return '<p>' + a + '</p>'
                    } else {
                        return '<p>' + a + '</p>'
                    }
                }
            }, {
                label: '使用人',
                name: 'receiverName',
                width: 90
            }, {
                label: '微信账号',
                name: 'wxAccount',
                width: 75
            }, {
                label: '微信昵称',
                name: 'wxName',
                width: 75
            }, {
                label: '当前好友数',
                name: 'friendNum',
                width: 100,
                formatter: function (value, grid, rows, state) {
                    // console.log(value, options, row);
                    return '<div style="text-align:center;cursor:pointer;"><span style="display:inline-block;width:50px;text-align:center;">' + value + '</span><span class="label label-success">修改</span></div>'
                }
            }, {
                label: '系统有效数据',
                name: 'reaFriendNum',
                width: 80
            }, {
                label: '操作',
                name: 'handle',
                width: 120,
                formatter: function (value, grid, rows, state) {
                    // console.log(value, options, row);
                    return '<div style="text-align:center;cursor:pointer;"><span class="label label-info">查看绑定学校</span></div>'
                }
            },
            // {
            //         label: '微信ID',
            //         name: 'id',
            //         index: "id",
            //         width: 45,
            //         key: true
            //     },


            //     {
            //         label: '微信创建人',
            //         name: 'signinUser',
            //         width: 90
            //     },
            //     {
            //         label: '建号时间',
            //         name: 'signupTime',
            //         width: 80
            //     },
            //     {
            //         label: '更新时间',
            //         name: 'updateAt',
            //         width: 80
            //     },



            //     {
            //         label: '操作人',
            //         name: 'operatorName',
            //         width: 90
            //     },


        ],
        cellEdit: true,
        viewrecords: true,
        height: 380,
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
        onCellSelect: function (rowid, iCol, cellcontent, e) {
            // console.log(rowid, iCol, cellcontent, e);
            if (iCol == 7) { // 当前好友
                console.log(rowid, cellcontent, e)
                console.log(cellcontent.split('center;">')[1].split('</span><s')[0]);
                vm.userIdhaoyou = rowid;
                vm.haoyoushu = cellcontent.split('center;">')[1].split('</span><s')[0];
                vm.nowFriendNum = cellcontent.split('center;">')[1].split('</span><s')[0]
                vm.xiugaihaoyou = true;
            } else if (iCol == 8) { // 系统有效数据
                console.log(rowid, cellcontent)
            } else if (iCol == 9) { //操作
                vm.getNowWxId = rowid;
                $.ajax({
                    type: "get",
                    url: baseURL + "sys/basedata/wxManager/selectu",
                    headers: {
                        token: token
                    },
                    data: {
                        wxId: rowid
                    },
                    success: function (r) {
                        console.log(r);
                        vm.getBindSchoolWxList = r.body;
                    }
                });
                $("#unBindSchoolModal").modal("show");
                // vm.unBindSchool = false;
                // vm.showList = false;
                // vm.title = "修改";
                vm.getWxAccount(rowid);
                $("#reasonId1").val(vm.wxAccount.deliveryReason);
                // initTime();
            }
        },
        gridComplete: function () {
            //隐藏grid底部滚动条
            $("#jqGrid").closest(".ui-jqgrid-bdiv").css({
                "overflow-x": "hidden"
            });
        },
        // ondblClickRow: function (rowid, iRow, iCol, e) {
        //     // console.log(rowid, iRow, iCol, e);
        //     vm.getNowWxId = rowid;
        //     $.ajax({
        //         type: "get",
        //         url: baseURL + "sys/basedata/wxManager/selectu",
        //         headers: {
        //             token: token
        //         },
        //         data: {
        //             wxId: rowid
        //         },
        //         success: function (r) {
        //             console.log(r);
        //             vm.getBindSchoolWxList = r.body;
        //         }
        //     });
        //     $("#unBindSchoolModal").modal("show");
        //     // vm.unBindSchool = false;
        //     // vm.showList = false;
        //     // vm.title = "修改";
        //     vm.getWxAccount(rowid);
        //     $("#reasonId1").val(vm.wxAccount.deliveryReason);
        //     // initTime();
        // }
    });

    $.ajax({
        type: "get",
        url: baseURL + "sys/basedata/exceptionList/list",
        data: {
            limit: 1000,
            page: 1,
            type: 3,
            statused: this.status,
        },
        success: function (r) {
            vm.reasons = r.body.list;
        }
    });
    $.ajax({
        type: "get",
        url: baseURL + "sys/user/userList",
        success: function (r) {
            vm.userList = r.body;
            $("#userId").val(null);
        }
    });
    $(function () {
        $('#bindSchoolModal').on('hide.bs.modal', function () {
            vm.countryId = '全部';
            vm.universityId = "全部";
        })
    });

    initTime();
    var user = getUser();
    if (user.roleIdList != null && user.roleIdList.length > 0) {
        if ($.inArray(11, user.roleIdList) == -1) {
            $(".delclass").remove();
        }
        if ($.inArray(13, user.roleIdList) > -1) {
            // $(".manager").attr("disabled", true);

        }
    } else {
        $(".delclass").remove();
    }
    //initToastr();
});

var vm = new Vue({
    el: '#rrapp',
    data: {
        value: '',
        q: {
            username: null
        },
        nowChooseWxId: '',
        showList: true,
        unBindSchool: true,
        showSubList: false,
        title: null,
        reasons: {},
        userList: null,
        user: '',
        changeBindSchoolButton: false,
        // unBindSchoolModal: false,
        wxAccount: {
            id: null,
            wxAccount: null,
            wxName: null,
            wxPassword: null,
            devices: null,
            statused: null,
            creatorId: null,
            operatorId: null,
            receiverId: null,
            deliveryTime: null,
            deliveryReason: null,
            signupTime: null,
            friendNum: null,
            reaFriendNum: null,
            signinUser: null,
            certificationUser: null,
            operatorName: null,
            updateAt: null,
            status: null,
            // realName: null,
            bindPhone: null,
            payPassword: null,
            wxEmergencyContacts: [{
                userName: '',
                userPhone: '',
            }, {
                userName: '',
                userPhone: '',
            }, {
                userName: '',
                userPhone: '',
            }, {
                userName: '',
                userPhone: '',
            }, {
                userName: '',
                userPhone: '',
            }],

            // emergencyName: null,
            // emergencyPhone: null,
        },
        wxEmergencyContacts: {
            emergencyName: null,
            emergencyPhone: null,
        },
        countryId: '',
        country: '',
        universityId: '',
        university: '',
        devices: '',
        devicesId: '',
        bindSchoolList: [],
        bindDeviceList: [],
        getBindSchoolWxList: [],
        getNowWxId: '',
        dialogType: true,
        jingli: false,
        xiugaihaoyou: false,
        haoyoushu: '',
        userIdhaoyou: '',
        nowFriendNum: '',
        dangqianhaoyou: '',
    },
    methods: {
        xiugaihaoyouhandleClose: function () {
            this.userIdhaoyou = '';
            this.dangqianhaoyou = '';
            this.haoyoushu = '';
            this.xiugaihaoyou = false;
        },
        xiugaihaoyouSubmit: function () {
            console.log(this.userIdhaoyou, this.dangqianhaoyou)
            var _this = this;
            $.ajax({
                type: "GET",
                url: baseURL + "sys/basedata/wxManager/updaFriendNum",
                contentType: "application/json",
                data: {
                    id:this.userIdhaoyou,
                    num:(this.haoyoushu * 1) - (this.nowFriendNum * 1)
                },
                success: function (r) {
                    if (r.status == 200) {
                        alert('操作成功', function () {
                            window.location.reload();
                        });
                    } else {
                        alert(r.body.msg);
                    }
                }
            })
        },
        addEmergency: function () {
            vm.wxAccount.wxEmergencyContacts.push({
                userName: '',
                userPhone: '',
            });

            console.log(vm.wxAccount.wxEmergencyContacts);
        },
        delEmergency: function (item) {
            var index = vm.wxAccount.wxEmergencyContacts.indexOf(item)
            if (index !== -1) {
                vm.wxAccount.wxEmergencyContacts.splice(index, 1)
            }
        },
        getWxBindSchool: function () {
            // console.log(1111);
            // var index = this.dynamicValidateForm.domains.indexOf(item)
            // if (index !== -1) {
            //     this.dynamicValidateForm.domains.splice(index, 1)
            // }
        },
        getRank: function () {
            $.getJSON(baseURL + "sys/user/info", function (r) {
                console.log(r);
                vm.user = r.user;
                var roleIdList = r.user.roleIdList;
                roleIdList.forEach(v => {
                    if (v === 11) {
                        console.log('超级管理员');
                        vm.jingli = true;
                        vm.changeBindSchoolButton = true;
                    } else if (v == 13) {
                        console.log('经理');
                        vm.jingli = false;
                        vm.changeBindSchoolButton = true;
                    } else if (v === 6) {
                        console.log('主管');
                        vm.jingli = false;
                        vm.changeBindSchoolButton = false;
                    } else if (v === 5) {
                        console.log('专员');
                        vm.jingli = false;
                        vm.changeBindSchoolButton = false;
                    } else {

                    }
                })
            });

        },
        query: function () {
            vm.reloadOnPageOne();
        },
        add: function () {
            vm.clear();
            vm.showList = false;
            vm.title = "新增";
            initTime();
            vm.dialogType = true;
            /*var user = getUser();
            vm.wxAccount.creatorName = user.username;
            vm.wxAccount.operatorName = user.username;*/
        },
        update: function () {
            vm.clear();
            var id = getSelectedRow();
            if (id == null) {
                return;
            }
            vm.showList = false;
            vm.title = "修改";
            vm.dialogType = false;
            vm.getWxAccount(id);
            $("#reasonId1").val(vm.wxAccount.deliveryReason);
        },
        change() {
            var opt = $("#select").val();
            if (opt == "") {
                window.location.reload()
            } else {
                var opt = $("#select").val();
                vm.wxAccount.status = opt;
                vm.reloadOnPageOne();
            }
        },
        del: function () {
            var userIds = getSelectedRows();
            if (userIds == null) {
                return;
            }

            confirm('确定要删除选中的记录？', function () {
                $.ajax({
                    type: "POST",
                    url: baseURL + "sys/basedata/wxManager/delete",
                    contentType: "application/json",
                    data: JSON.stringify(userIds),
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
        returned: function () {
            var id = getSelectedRow();
            if (id == null) {
                return;
            }
            vm.getWxAccount(id);
            /*if (vm.wxAccount.statused != 2) {
                toastr.warning("只有使用中的账号才能交付！");
                return;
            }*/
            $("#reasonId").val(null);
            $("#returnedModal").modal("show");
        },
        doreturn: function () {
            var id = vm.wxAccount.id;
            var deliveryReason = vm.wxAccount.deliveryReason;
            vm.clear();
            vm.wxAccount.id = id;
            vm.wxAccount.statused = 4;
            vm.wxAccount.deliveryReason = deliveryReason;
            vm.saveOrUpdate();
            $("#returnedModal").modal("hide");
        },
        saveOrUpdate: function () {
            var url = vm.wxAccount.id == null ? "sys/basedata/wxManager/save" : "sys/basedata/wxManager/update";
            // debugger;
            $.ajax({
                type: "POST",
                url: baseURL + url,
                contentType: "application/json",
                data: JSON.stringify(vm.wxAccount),
                success: function (r) {
                    if (r.status == 200) {
                        alert('操作成功', function () {
                            if (vm.wxAccount.id == null) {
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
        getWxAccount: function (id) {
            $.ajaxSettings.async = false;
            $.get(baseURL + "sys/basedata/wxManager/info/" + id, function (r) {
                vm.wxAccount = r.body;
                vm.wxAccount.password = null;
            });
            $.ajaxSettings.async = true;
        },
        reload: function () {
            vm.showList = true;
            var page = $("#jqGrid").jqGrid('getGridParam', 'page');
            $("#jqGrid").jqGrid('setGridParam', {
                postData: {
                    'key': vm.q.username
                },
                page: page
            }).trigger("reloadGrid");
            vm.clear();
        },
        reloadOnPageOne: function () {
            vm.showList = true;
            $("#jqGrid").jqGrid('setGridParam', {
                postData: {
                    'key': vm.q.username,
                    'statused': vm.wxAccount.status
                },
                page: 1
            }).trigger("reloadGrid");
            vm.clear();
        },
        clear: function () {
            vm.wxAccount.id = null;
            vm.wxAccount.wxAccount = null;
            vm.wxAccount.wxName = null;
            vm.wxAccount.wxPassword = null;
            vm.wxAccount.devices = null;
            vm.wxAccount.statused = null;
            vm.wxAccount.creatorId = null;
            vm.wxAccount.operatorId = null;
            vm.wxAccount.receiverId = null;
            vm.wxAccount.deliveryTime = null;
            vm.wxAccount.deliveryReason = null;
            vm.wxAccount.signupTime = null;
            vm.wxAccount.friendNum = null;
            vm.wxAccount.reaFriendNum = null;
            vm.wxAccount.signinUser = null;
            vm.wxAccount.operatorName = null;
            vm.wxAccount.bindPhone = null;
            vm.wxAccount.payPassword = null;
            vm.wxAccount.wxEmergencyContacts = [{
                userName: '',
                userPhone: '',
            }, {
                userName: '',
                userPhone: '',
            }, {
                userName: '',
                userPhone: '',
            }, {
                userName: '',
                userPhone: '',
            }, {
                userName: '',
                userPhone: '',
            }];
        },
        reasonChange: function (event) {
            vm.wxAccount.deliveryReason = event.target.value;
        },
        setDateTime: function () {
            $("#signupTime").datetimepicker({
                format: 'yyyy-mm-dd hh:ii:ss',
                autoclose: true,
                todayHighlight: true,
                language: 'zh-CN',
            });
            $("#signupTime").datetimepicker().on('hide', function (ev) {
                var endTime = $("#signupTime").val();
                vm.wxAccount.signupTime = endTime;
            });
        },
        userChange(val) {
            vm.wxAccount.userId = val;
        },
        showBind: function () {
            $("#userId").val(null);

            var id = getSelectedRow();
            if (id == null) {
                return;
            }
            vm.getWxAccount(id);
            if (vm.wxAccount.statused != 1 && vm.wxAccount.statused != 4) {
                alert("只有备用号或已交付才可绑定");
                return false;
            }
            $("#bindModal").modal("show");
        },
        showUnBind: function () {
            var id = getSelectedRow();
            if (id == null) {
                return;
            }
            vm.getWxAccount(id);
            if (vm.wxAccount.statused != 2) {
                alert("只有使用中的号才可解绑");
                return false;
            }
            var data = {
                wxid: vm.wxAccount.id,
                userId: vm.wxAccount.receiverId
            };
            confirm('确定要解绑选中的记录？', function () {
                $.ajax({
                    type: "get",
                    url: baseURL + "sys/basedata/wxManager/unbind",
                    data: data,
                    success: function (r) {
                        if (r.status == 200) {
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
        doBind: function () {
            var data = {
                wxid: vm.wxAccount.id,
                userId: vm.wxAccount.userId,
            };
            $.ajax({
                type: "get",
                url: baseURL + "sys/basedata/wxManager/bind",
                data: data,
                success: function (r) {
                    if (r.status == 200) {
                        alert('操作成功', function () {
                            $("#bindModal").modal("hide");
                            vm.reload();
                        });
                    } else {
                        alert(r.body.msg);
                    }
                }
            });

            vm.value = '';
        },
        showSchoolBind: function () {
            $("#userId").val(null);

            var id = getSelectedRow();
            if (id == null) {
                return;
            }
            console.log(id);

            vm.getWxAccount(id);
            // if (vm.wxAccount.statused != 1 && vm.wxAccount.statused != 4) {
            //     alert("只有备用号或已交付才可绑定");
            //     return false;
            // }
            $("#bindSchoolModal").modal("show");
        },
        showFacilityBind: function () {
            $("#userId").val(null);

            var id = getSelectedRow();
            if (id == null) {
                return;
            }
            vm.getWxAccount(id);
            if (vm.wxAccount.statused != 1 && vm.wxAccount.statused != 4) {
                alert("只有备用号或已交付才可绑定");
                return false;
            }
            $("#bindFacilityModal").modal("show");
        },
        change_country(val) {
            console.log(val);
            vm.countryId = val;
            vm.universityId = '全部';
            vm.getuniversitys();
            // 3811.67    3927.77
            // if (vm.ruleForm.universityId !== undefined) {
            //     vm.ruleForm.universityId = "";
            // };
            // if (vm.usertable == true) {
            //     vm.isArea1 = false;
            // };
        },
        change_university(val) {
            console.log(val);
            vm.universityId = val;
            // if (vm.usertable == true) {
            //     vm.isArea1 = false;
            //     vm.serach();
            // };
        },
        getcountrys() {
            $.ajax({
                type: "get",
                dataType: "json",
                data: {
                    "token": token,
                    "page": 1,
                    "limit": 1000
                },
                url: "" + baseURL + "sys/basedata/country/list",
                success: function (json) {
                    vm.country = json.body.list;
                }
            });
        },
        getdevices() {
            $.ajax({
                type: "get",
                dataType: "json",
                data: {
                    "token": token,
                    "page": 1,
                    "limit": 1000
                },
                url: "" + baseURL + "sys/basedata/devices/list",
                success: function (json) {
                    console.log(json);
                    vm.devices = json.body.list;
                }
            });
        },
        getuniversitys() {
            $.ajax({
                type: "get",
                dataType: "json",
                data: {
                    "token": token,
                    "page": 1,
                    "limit": 1000,
                    "countryId": vm.countryId
                },
                url: "" + baseURL + "sys/basedata/university/list",
                success: function (json) {
                    vm.university = json.body.list;
                }
            });
        },
        doBindSchool: function () {
            var country, university;
            country = vm.countryId;
            university = vm.universityId;
            var id = getSelectedRow();
            $.ajax({
                type: "get",
                dataType: "json",
                data: {
                    wxid: id,
                    uniId: university,
                    isBindWx: true,
                },
                url: "" + baseURL + "sys/basedata/wxManager/bindUniver",
                success: function (json) {
                    if (json.status == 200) {
                        alert('操作成功', function () {
                            // setTimeout(function () {
                            //     // window.location.reload();    hhh
                            // }, 500);
                            // $("#unBindSchoolModal").modal("hide");
                            $("#bindSchoolModal").modal("hide");
                        });
                    } else {
                        alert(json.body.msg);
                    }
                }
            });
        },
        doBindFacility: function () {
            var id = getSelectedRow();
            console.log(vm.devicesId);
            $.ajax({
                type: "get",
                dataType: "json",
                data: {
                    wxid: id,
                    devId: vm.devicesId,
                },
                url: "" + baseURL + "sys/basedata/wxManager/bindDev",
                success: function (json) {
                    if (json.status == 200) {
                        alert('操作成功', function () {
                            setTimeout(function () {
                                // window.location.reload();    hhh
                            }, 500);
                        });
                    } else {
                        alert(json.body.msg);
                    }
                }
            });
        },
        doUnBindSchool: function () {
            var id = getSelectedRow();
        },
        doUnBindFacility: function () {
            var id = getSelectedRow();
        },
        showSchoolUnBind: function () {
            $("#userId").val(null);

            var id = getSelectedRow();
            if (id == null) {
                return;
            }
            vm.getWxAccount(id);
            if (vm.wxAccount.statused != 1 && vm.wxAccount.statused != 4) {
                alert("只有备用号或已交付才可解除绑定");
                return false;
            }
            $("#unBindSchoolModal").modal("show");
        },
        showFacilityUnBind: function () {
            $("#userId").val(null);

            var id = getSelectedRow();
            if (id == null) {
                return;
            }
            vm.getWxAccount(id);
            if (vm.wxAccount.statused != 1 && vm.wxAccount.statused != 4) {
                alert("只有备用号或已交付才可解除绑定");
                return false;
            }
            $("#unBindFacilityModal").modal("show");
        },
        delBindWxToSchool: function (e) {
            console.log(vm.getNowWxId, e.id);
            $.ajax({
                type: "get",
                url: baseURL + "sys/basedata/wxManager/unbindUniver",
                data: {
                    wxid: vm.getNowWxId,
                    uniId: e.id
                },
                success: function (json) {
                    if (json.status == 200) {
                        alert('操作成功', function () {
                            // setTimeout(function () {
                            //     // window.location.reload();    hhh
                            // }, 500);
                            $("#unBindSchoolModal").modal("hide");
                        });
                    } else {
                        alert(json.body.msg);
                    }
                }
            });
        }
    },
    mounted() {
        this.getRank();
        this.getcountrys();
        this.getdevices();
    },
});

function initTime() {
    $(".mydatetime").datetimepicker({
        format: 'yyyy-mm-dd hh:ii:ss',
        autoclose: true,
        todayHighlight: true,
        language: 'zh-CN',
    });

    /*$(".mydatetime").flatpickr({
        dateFormat: 'Y-m-d h:i:S',
        time_24hr: true,
        allowInput: true,
        enableTime: true,
        minuteIncrement: 1,
        enableSeconds: true,
        locale: 'zh'
    });*/
}

function initToastr() {
    toastr.options = {
        closeButton: false,
        debug: false,
        progressBar: true,
        positionClass: "toast-bottom-right",
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "3000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    };
}