// var baseURL = "http://www.classbro.com/xiancrm/";
// var baseURL = "http://192.168.1.154/xiancrm/";
// var baseURL = "http://www.classbro.ca/xiancrm/";
//  var comURL = "http://www.classbro.ca/";
// var baseURL = 'http://47.244.43.84/';
var baseURL = "http://121.43.174.41/xiancrm/";

var token = localStorage.getItem("xian_token");
// if(token == null){
//     parent.location.href = "../../login.html"
// }
$.ajaxSetup({
    dataType: "json",
    cache: false,
    headers: {
        "token": token
    },
    // xhrFields: {
    //     withCredentials: true
    // },
    // complete: function(xhr) {
    //     if(xhr.responseJSON.code == 401){
    //         parent.location.href = '../../login.html';
    //     } 
    // }
});