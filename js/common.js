//jqGrid的配置信息
$.jgrid.defaults.width = 1000;
$.jgrid.defaults.responsive = true;
$.jgrid.defaults.styleUI = 'Bootstrap';

//jqgrid全局配置
$.extend($.jgrid.defaults, {
    ajaxGridOptions: {
        headers: {
            "token": token
        }
    }
});


//工具集合Tools
window.T = {};

// 获取请求参数
// 使用示例
// location.href = http://localhost/index.html?id=123
// T.p('id') --> 123;
var url = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};
T.p = url;

//请求前缀
// var baseURL = "http://www.classbro.com/xiancrm/";
// var baseURL = "http://192.168.1.154/xiancrm/";
// var baseURL = "http://www.classbro.ca/xiancrm/";
// var baseURL = 'http://47.244.43.84/';
var baseURL = "http://121.43.174.41/xiancrm/";


//登录token
var token = localStorage.getItem("xian_token");

//jquery全局配置
$.ajaxSetup({
    dataType: "json",
    cache: false,
    headers: {
        "token": token
    },
    // xhrFields: {
    //     withCredentials: true
    // },
    complete: function (xhr) {
        if (xhr.responseJSON.body.code == 4011) {
            location.href = 'login.html';
        }
    },
    // complete: function (xhr) {
    //     // console.log(xhr);
    //     if (xhr.responseJSON.status == 400) {
    //         location.href = 'login.html';
    //     }
    // }
});



//权限判断
function hasPermission(permission) {
    // console.log(permission)
    if (window.parent.permissions != undefined) {
        if (window.parent.permissions.indexOf(permission) > -1) {
            return true;
        } else {
            return false;
        }
    }
}

function getUser() {
    $.ajaxSettings.async = false;
    var user;
    $.getJSON(baseURL + "sys/user/info", function (r) {
        user = r.user;
    });
    $.ajaxSettings.async = true;
    return user;
}

//重写alert
window.alert = function (msg, callback) {
    parent.layer.alert(msg, function (index) {
        parent.layer.close(index);
        if (typeof (callback) === "function") {
            callback("ok");
        }
    });
}

//重写confirm式样框
window.confirm = function (msg, callback) {
    parent.layer.confirm(msg, {
            btn: ['确定', '取消']
        },
        function () { //确定事件
            if (typeof (callback) === "function") {
                callback("ok");
            }
        });
}

//选择一条记录
function getSelectedRow() {
    var grid = $("#jqGrid");
    var rowKey = grid.getGridParam("selrow");
    if (!rowKey) {
        alert("请选择一条记录");
        return;
    }

    var selectedIDs = grid.getGridParam("selarrrow");
    if (selectedIDs.length > 1) {
        alert("只能选择一条记录");
        return;
    }

    return selectedIDs[0];
}

//选择一条记录对象
function getSelectedObject() {
    var grid = $("#jqGrid");
    var rowKey = grid.getGridParam("selrow");
    if (!rowKey) {
        alert("请选择一条记录");
        return;
    }

    var selectedIDs = grid.getGridParam("selarrrow");
    if (selectedIDs.length > 1) {
        alert("只能选择一条记录");
        return;
    }
    var row = grid.getRowData(selectedIDs[0]);
    return row;
}

//选择多条记录
function getSelectedRows() {
    var grid = $("#jqGrid");
    var rowKey = grid.getGridParam("selrow");
    if (!rowKey) {
        alert("请选择一条记录");
        return;
    }

    return grid.getGridParam("selarrrow");
}