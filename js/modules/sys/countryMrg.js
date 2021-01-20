$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/basedata/country/list',
        datatype: "json",
        colModel: [
            {label: '国家ID', name: 'id', index: "user_id", width: 45, key: true},
            {label: 'Code', name: 'code', width: 75},
            {label: '名称', name: 'name', width: 90},
            {label: '币种', name: 'currency', width: 75},
            {label: '创建时间', name: 'createAt', width: 85},
            {label: '更新时间', name: 'updateAt', width: 85}
        ],
        disabled: true,
        ExpandColumn: 'name',
        lazy: true,
        lazyLoadUrl: baseURL + 'sys/basedata/country/list',
        leafColumn: 0,
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
        country: {
            id: null,
            name: null,
            code: null,
            currency: null
        }
    },
    methods: {
        query: function () {
            vm.reloadOnPageOne();
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
            if (ids == null) {
                return;
            }

            confirm('确定要删除选中的记录？', function () {
                $.ajax({
                    type: "POST",
                    url: baseURL + "sys/basedata/country/delete",
                    contentType: "application/json",
                    data: JSON.stringify(ids),
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
        saveOrUpdate: function () {
            var url = vm.country.id == null ? "sys/basedata/country/save" : "sys/basedata/country/update";
            $.ajax({
                type: "POST",
                url: baseURL + url,
                contentType: "application/json",
                data: JSON.stringify(vm.country),
                success: function (r) {
                    if (r.status != 200) {
                        alert(r.body.msg);
                    } else {
                        if (vm.country.id == null) {
                            alert('操作成功', function () {
                                vm.reload();
                            });
                        } else {
                            alert('操作成功', function () {
                                vm.reloadOnPageOne();
                            });
                        }
                    }
                }
            });
        },
        queryObject: function (id) {
            $.get(baseURL + "sys/basedata/country/info/" + id, function (r) {
                vm.country = r.body;
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
            vm.country.id = null;
            vm.country.name = null;
            vm.country.code = null;
            vm.country.currency = null;
        },
    }
});