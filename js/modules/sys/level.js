$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/basedata/level/list',
        datatype: "json",
        colModel: [
            {label: 'ID', name: 'id', index: "id", width: 45, key: true},
            {label: '名称', name: 'levelName', width: 90},
            {label: '创建时间', name: 'createAt', width: 85},
            {label: '更新时间', name: 'updateAt', width: 85}
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
            $("#jqGrid").closest(".ui-jqgrid-bdiv").css({"overflow-x": "hidden"});
        },
        ondblClickRow: function (rowid, iRow, iCol, e) {
            vm.showList = false;
            vm.title = "修改";
            vm.queryObject(rowid);
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
        countrys: {},
        level: {
            id: null,
            levelName: null,
            createAt: null,
            updateAt: null
        },
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
                    url: baseURL + "sys/basedata/level/delete",
                    contentType: "application/json",
                    data: JSON.stringify(ids),
                    success: function (r) {
                        if (r.status == 200) {
                            alert('操作成功', function(){
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
            var url = vm.level.id == null ? "sys/basedata/level/save" : "sys/basedata/level/update";
            $.ajax({
                type: "POST",
                url: baseURL + url,
                contentType: "application/json",
                data: JSON.stringify(vm.level),
                success: function (r) {
                    if (r.status == 200) {
                        alert('操作成功', function(){
                            if (vm.level.id == null) {
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
            $.get(baseURL + "sys/basedata/level/info/" + id, function (r) {
                vm.level = r.body;
            });
        },
        reload: function () {
            vm.showList = true;
            var page = $("#jqGrid").jqGrid('getGridParam', 'page');
            $("#jqGrid").jqGrid('setGridParam', {
                postData: {'key': vm.q.key},
                page: page
            }).trigger("reloadGrid");
            vm.clear();
        },
        reloadOnPageOne: function () {
            vm.showList = true;
            $("#jqGrid").jqGrid('setGridParam', {
                postData: {'key': vm.q.key},
                page: 1
            }).trigger("reloadGrid");
            vm.clear();
        },
        clear: function () {
            vm.level.id = null;
            vm.level.levelName = null;
            vm.level.createAt = null;
            vm.level.updateAt = null;
        }
    }
});