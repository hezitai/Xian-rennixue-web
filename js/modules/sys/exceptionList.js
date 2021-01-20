$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/basedata/exceptionList/list',
        datatype: "json",
        colModel: [{
                label: 'ID',
                name: 'id',
                index: "id",
                width: 45,
                key: true
            },
            {
                label: '原因名称',
                name: 'exceptionName',
                width: 90
            },
            {
                label: '原因类型',
                name: 'exceType',
                width: 75,
                formatter: function (value, options, row) {
                    if (value == 1) {
                        return "审查不通过";
                    } else if (value == 2) {
                        return "抽查不通过";
                    } else if (value == 3) {
                        return "交付原因";
                    } else {
                        return "-";
                    }
                }
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
                label: '是否影响指标',
                name: 'ifIndex',
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
            vm.showList = false;
            vm.title = "修改";
            vm.queryObject(rowid);
        }
    });
    $("#exceType").val(null);
});


var vm = new Vue({
    el: '#rrapp',
    data: {
        q: {
            key: null
        },
        showList: true,
        title: null,
        exceptionList: {
            id: null,
            exceptionName: null,
            exceType: null,
            createAt: null,
            updateAt: null,
            ifIndex: null,
        },
        ifIndex: '',
    },
    methods: {
        query: function () {
            vm.reload();
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
                    url: baseURL + "sys/basedata/exceptionList/delete",
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
        saveOrUpdate: function () {
            var url = vm.exceptionList.id == null ? "sys/basedata/exceptionList/save" : "sys/basedata/exceptionList/update";
            $.ajax({
                type: "POST",
                url: baseURL + url,
                contentType: "application/json",
                data: JSON.stringify(vm.exceptionList),
                success: function (r) {
                    if (r.status == 200) {
                        alert('操作成功', function () {
                            if (vm.exceptionList.id == null) {
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
        queryObject: function (id) {
            $.get(baseURL + "sys/basedata/exceptionList/info/" + id, function (r) {
                vm.exceptionList = r.body;
                $("#exceType").val(vm.exceptionList.exceType);
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
        exceptionChange: function () {
            console.log(vm.exceptionList.exceType);
            vm.exceptionList.exceType = event.target.value;
        },
        clear: function () {
            vm.exceptionList.id = null;
            vm.exceptionList.exceptionName = null;
            vm.exceptionList.exceType = null;
            vm.exceptionList.createAt = null;
            vm.exceptionList.updateAt = null;
            vm.exceptionList.ifIndex = null;
            $("#exceType").val(null);
        }
    }
});