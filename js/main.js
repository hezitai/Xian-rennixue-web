// $(function(){

// })
var vm = new Vue({
    el: "#app",
    data() {
        this.chartSettings = {
            axisSite: {
                right: ['下单率']
            },
            yAxisType: ['KMB', 'KMB'],
            yAxisName: ['有效数据量', '人均数据量']
        };
        return {
            nowDate: new Date().getTime(),
            user: "",
            teamlist: "",
            changeBindSchoolButton: true,
            justManagerUp: true,
            list1startDate: "",
            list1endDate: "",
            list1chooseMonth: "",
            list1groups: "",
            list1page: 1,
            list1limit: 1000,
            // list1total: 0,
            // list1currentPage: 0,
            // list1pageSize: 0,
            list1performanceRank: [],
            list1group: "",
            list1isAllDept: true,
            list1teamlist: "",

            list2page: 1,
            list2limit: 1000,
            // list2total: 0,
            // list2currentPage: 0,
            // list2pageSize: 0,
            list2startDate: "",
            list2endDate: "",
            list2SalesKit: [],
            list2group: "",
            list2isAllDept: true,
            list2teamlist: "",
            list2chooseMonth: "",
            list2temp: [{
                data1: "数据量",
                data2: "0-800",
                data3: "801-1000",
                data4: "1001-1200",
                data5: "1201-1400",
                data6: "1401以上"
            }, {
                data1: "每条提成金额",
                data2: "0.5元",
                data3: "1元",
                data4: "2元",
                data5: "2.5元",
                data6: "3元"
            }],
            list4temp: [{
                data1: "数据量",
                data2: "0-800",
                data3: "801-1000",
                data4: "1001-1200",
                data5: "1201-1400",
                data6: "1401以上"
            }, {
                data1: "每条提成金额",
                data2: "0.5元",
                data3: "1元",
                data4: "2元",
                data5: "2.5元",
                data6: "3元"
            }],
            list3page: 1,
            list3limit: 1000,
            // list2total: 0,
            // list2currentPage: 0,
            // list2pageSize: 0,
            list3startDate: "",
            list3endDate: "",
            list3ResultsSummary: [{
                mouthNum: 1,
                data: {}
            }, {
                mouthNum: 2,
                data: {}
            }, {
                mouthNum: 3,
                data: {}
            }, {
                mouthNum: 4,
                data: {}
            }, {
                mouthNum: 5,
                data: {}
            }, {
                mouthNum: 6,
                data: {}
            }, {
                mouthNum: 7,
                data: {}
            }, {
                mouthNum: 8,
                data: {}
            }, {
                mouthNum: 9,
                data: {}
            }, {
                mouthNum: 10,
                data: {}
            }, {
                mouthNum: 11,
                data: {}
            }, {
                mouthNum: 12,
                data: {}
            }],
            list3group: "",
            list3isAllDept: true,
            list3teamlist: "",
            list3chooseMonth: "",
            list3listType: [{
                name: "全部",
                value: 1
            }, {
                name: "有效数据量",
                value: 2
            }, {
                name: "人均数据量",
                value: 3
            }],
            list3Chart1: [],
            list3Chart2: [],
            list3Year: [{
                name: 2017,
                value: 2017
            }, {
                name: 2018,
                value: 2018
            }, {
                name: 2019,
                value: 2019
            }],
            list3allCount: 0,
            list3chooseYear: 2019,

            list4chooseMonth: '',
            list4startDate: "",
            list4endDate: "",
            list4selfreport: [],
            list4page: 1,
            list4limit: 1000,
            list4userId: '',
            list4teamlist: '',
            list4Count: 0,
            list4Number: 0,
            list4NumberLevel: 0,
            list4showHearten: 0,
            date: "",
            options: [],
            chartData: {},
            superAdmin: false,
        };
    },
    mounted() {
        this.getNowDate();
        this.getFirstInitPageMonth();
        this.getFirstInitPageMonth2();
        this.getFirstInitPageMonth4();
        this.getBeforeIndex();
        this.getStatus();
        this.getlist1();
        // this.getMonth();
        // this.getPerformanceRanking();
        // this.getSalesKit();
    },
    methods: {
        getNowDate() {
            // "M+": this.getMonth() + 1, //月份 
            //     "d+": this.getDate(), //日 
            //     "h+": this.getHours(), //小时 
            //     "m+": this.getMinutes(), //分 
            //     "s+": this.getSeconds(), //秒 
            //     "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            //     "S": this.getMilliseconds() //毫秒 
            function mGetDate() {
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var d = new Date(year, month, 0);
                return d.getDate();
            }
            var nowDate = [];
            var date = new Date();
            var start = date.getFullYear() + '-' + (date.getMonth() + 1) + '-1 00:00:00';
            var end = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + mGetDate(date.getFullYear(),(date.getMonth() + 1)) + ' 23:59:59';
            console.log(start, end);
            nowDate.push(start);
            nowDate.push(end);
            this.list1chooseMonth = JSON.parse(JSON.stringify(nowDate));
            this.list2chooseMonth = JSON.parse(JSON.stringify(nowDate));
            this.list4chooseMonth = JSON.parse(JSON.stringify(nowDate));
        },
        getBeforeIndex() {
            $.getJSON(baseURL + "sys/menu/nav", function (r) {
                // console.log(r);
                // vm.menuList = r.menuList;
                window.permissions = r.permissions;
                // vm.methodss();
            });
        },
        // hasPermission(permission) {
        //     let a;
        //     $.getJSON(baseURL + "sys/menu/nav", function (r) {
        //         // console.log(r);
        //         // window.permissions = r.permissions;
        //         a = r.permissions;
        //         // if (window.parent.permissions.indexOf(permission) > -1) {
        //         if (a.indexOf(permission) > -1) {
        //             console.log(true)
        //             return true;
        //         } else {
        //             console.log(false)
        //             return false;
        //         }
        //     });
        //     // console.log(permission)
        // },
        indexMethod(index) {
            return index;
        },
        //获取登录身份
        getStatus() {
            $.getJSON(baseURL + "sys/user/info", function (r) {
                console.log(r);
                vm.user = r.user;
                var roleIdList = r.user.roleIdList;
                roleIdList.forEach(v => {
                    if (v === 11) {
                        console.log("超级管理员");
                        vm.changeBindSchoolButton = true;
                        vm.justManagerUp = true;
                        // vm.superAdmin = true;
                        vm.getPerformanceRanking();
                        vm.getSalesKit();
                        vm.getResultsSummary();
                    } else if (v == 13) {
                        console.log("经理");
                        vm.changeBindSchoolButton = true;
                        vm.justManagerUp = true;
                        // vm.superAdmin = false;
                        vm.getPerformanceRanking();
                        vm.getSalesKit();
                        vm.getResultsSummary();
                    } else if (v === 6) {
                        console.log("主管");
                        vm.changeBindSchoolButton = true;
                        vm.justManagerUp = false;
                        vm.list1teamlist = r.user.deptId;
                        vm.list2teamlist = r.user.deptId;
                        vm.list1isAllDept = false;
                        // vm.superAdmin = false;
                        vm.getPerformanceRanking();
                        vm.getSalesKit();
                        vm.getResultsSummary();
                    } else if (v === 5) {
                        console.log("专员");
                        vm.changeBindSchoolButton = false;
                        vm.justManagerUp = false;
                        vm.list1teamlist = r.user.deptId;
                        vm.list2teamlist = r.user.deptId;
                        vm.list1isAllDept = false;
                        // vm.superAdmin = false;
                        vm.getPerformanceRanking();
                        vm.getSalesKit();
                        // vm.getResultsSummary();
                        vm.list4userId = r.user.userId;
                        vm.list4teamlist = r.user.deptId;
                        vm.getSelfreport();
                    } else {}
                });
            });
        },
        //获取业绩排行列表
        getPerformanceRanking() {
            console.log(this.list1startDate, this.list1endDate);
            if (
                this.list1startDate == "" || this.list1startDate == undefined || this.list1startDate == null
            ) {
                var myDate = new Date();
                var m = myDate.getMonth() + 1;
                if (
                    m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12
                ) {
                    this.list1endDate = "2019-" + myDate.getMonth() + 1 + "-31 23:59:59";
                } else if (m == 4 || m == 6 || m == 9 || m == 11) {
                    this.list1endDate = "2019-" + myDate.getMonth() + 1 + "-30 23:59:59";
                } else {
                    this.list1endDate = "2019-" + myDate.getMonth() + 1 + "-28 23:59:59";
                }
                this.list1startDate = "2019-" + myDate.getMonth() + 1 + "-01 00:00:00";
                console.log(this.list1startDate, this.list1endDate);
            }
            $.ajax({
                type: "get",
                dataType: "json",
                headers: {
                    token: token
                },
                data: {
                    page: this.list1page,
                    limit: this.list1limit,
                    startDate: this.list1startDate,
                    endDate: this.list1endDate,
                    isAllDept: this.list1isAllDept,
                    deptId: this.list1teamlist
                },
                url: baseURL + "sys/home/queryPerformanceRanking",
                success: function (json) {
                    console.log(json);
                    vm.list1performanceRank = json.body;
                    for (var i in vm.list1performanceRank) {
                        // vm.list1performanceRank[i].percent = (vm.list1performanceRank[i].counts /
                        //     1400).toFixed(2) * 100;
                        vm.list1performanceRank[i].percent = Math.floor(
                            (vm.list1performanceRank[i].counts / 1400) * 100
                        );
                        vm.list1performanceRank[i].lineColor =
                            "#" + Math.floor(Math.random() * 0xffffff).toString(16);
                    }
                    console.log(vm.list1performanceRank);
                    // this.list1total = json.body.totalCount;
                    // this.list1pageSize = json.body.totalCount;
                    // this.list1currentPage = json.body.currPage;
                }
            });
        },
        //刷新业绩排行列表
        searchPerformanceRanking() {
            $.ajax({
                type: "get",
                dataType: "json",
                headers: {
                    token: token
                },
                data: {
                    page: this.list1page,
                    limit: this.list1limit,
                    startDate: this.list1startDate,
                    endDate: this.list1endDate,
                    isAllDept: this.list1isAllDept,
                    deptId: this.list1teamlist
                },
                url: baseURL + "sys/home/queryPerformanceRanking",
                success: function (json) {
                    if (json.status == 200) {
                        console.log(json);
                        vm.list1performanceRank = json.body;
                        for (var i in vm.list1performanceRank) {
                            // vm.list1performanceRank[i].percent = (vm.list1performanceRank[i].counts /
                            //     1400).toFixed(2) * 100;
                            vm.list1performanceRank[i].percent = Math.floor(
                                (vm.list1performanceRank[i].counts / 1400) * 100
                            );
                            vm.list1performanceRank[i].lineColor =
                                "#" + Math.floor(Math.random() * 0xffffff).toString(16);
                        }
                        console.log(vm.list1performanceRank);
                        // this.list1total = json.body.totalCount;
                        // this.list1pageSize = json.body.totalCount;
                        // this.list1currentPage = json.body.currPage;
                    }
                }
            });
        },
        //获取销售简报列表
        getSalesKit() {
            if (
                this.list2startDate == "" || this.list2startDate == undefined || this.list2startDate == null
            ) {
                var myDate = new Date();
                var m = myDate.getMonth() + 1;
                if (
                    m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12
                ) {
                    this.list2endDate = "2019-" + myDate.getMonth() + 1 + "-31 23:59:59";
                } else if (m == 4 || m == 6 || m == 9 || m == 11) {
                    this.list2endDate = "2019-" + myDate.getMonth() + 1 + "-30 23:59:59";
                } else {
                    this.list2endDate = "2019-" + myDate.getMonth() + 1 + "-28 23:59:59";
                }
                this.list2startDate = "2019-" + myDate.getMonth() + 1 + "-01 00:00:00";
                console.log(this.list2startDate, this.list2endDate);
            }
            $.ajax({
                type: "post",
                dataType: "json",
                headers: {
                    token: token,
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    deptId: this.list2teamlist,
                    endTime: this.list1endDate,
                    limit: this.list2limit,
                    page: this.list2page,
                    startTime: this.list2startDate
                }),
                url: baseURL + "sys/sellerPerform/getSellerPerform",
                success: function (json) {
                    console.log("--", json);
                    vm.list2SalesKit = json.body.sellerPerforms;
                    console.log(vm.list2SalesKit);
                    // this.list2total = json.body.totalCount;
                    // this.list2pageSize = json.body.totalCount;
                    // this.list2currentPage = json.body.currPage;
                }
            });
        },
        //刷新销售简报列表
        searchSalesKit() {
            $.ajax({
                type: "post",
                dataType: "json",
                headers: {
                    token: token,
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    deptId: this.list2teamlist,
                    endTime: this.list1endDate,
                    limit: this.list2limit,
                    page: this.list2page,
                    startTime: this.list2startDate
                }),
                url: baseURL + "sys/sellerPerform/getSellerPerform",
                success: function (json) {
                    console.log("--", json);
                    vm.list2SalesKit = json.body.sellerPerforms;
                    console.log(vm.list2SalesKit);
                    // this.list2total = json.body.totalCount;
                    // this.list2pageSize = json.body.totalCount;
                    // this.list2currentPage = json.body.currPage;
                }
            });
        },
        //获取业绩汇总报表
        getResultsSummary() {
            if (
                this.list3startDate == "" || this.list3startDate == undefined || this.list3startDate == null
            ) {
                var myDate = new Date();
                var m = myDate.getMonth() + 1;
                if (
                    m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12
                ) {
                    this.list3endDate = "2019-" + myDate.getMonth() + 1 + "-31 23:59:59";
                } else if (m == 4 || m == 6 || m == 9 || m == 11) {
                    this.list3endDate = "2019-" + myDate.getMonth() + 1 + "-30 23:59:59";
                } else {
                    this.list3endDate = "2019-" + myDate.getMonth() + 1 + "-28 23:59:59";
                }
                this.list3startDate = "2019-" + myDate.getMonth() + 1 + "-01 00:00:00";
                console.log(this.list3startDate, this.list3endDate);
                $.ajax({
                    type: "get",
                    dataType: "json",
                    headers: {
                        token: token
                    },
                    data: {
                        year: this.list3chooseYear
                    },
                    url: baseURL + "sys/home/queryPerformanceSummarySheet",
                    success: function (json) {
                        console.log("---", json);
                        if (json.status == 200) {
                            for (var i in json.body) {
                                vm.list3allCount += json.body[i].mouthCount;
                                json.body[i].yGrowthOf = Math.floor(json.body[i].yGrowthOf * 100) + "%";
                                json.body[i].jGrowthOf = Math.floor(json.body[i].jGrowthOf * 100) + "%";
                                for (var j in vm.list3ResultsSummary) {
                                    if (json.body[i].mouthNum == vm.list3ResultsSummary[j].mouthNum) {
                                        vm.list3ResultsSummary[j].data = json.body[i];
                                    }
                                }
                            };
                            for (var i in vm.list3ResultsSummary) {
                                if (!vm.list3ResultsSummary[i].data.mouthCount) {
                                    var d = 0;
                                    var e = 0;
                                    vm.list3Chart1.push(d);
                                    vm.list3Chart2.push(e);
                                } else {
                                    vm.list3Chart1.push(vm.list3ResultsSummary[i].data.mouthCount);
                                    vm.list3Chart2.push(vm.list3ResultsSummary[i].data.jMouthCount);
                                }
                            };
                            vm.charts();
                            console.log(vm.list3ResultsSummary);
                            console.log(vm.list3allCount);
                        }
                    }
                });
            }
        },
        //刷新业绩汇总报表
        searchResultsSummary() {
            $.ajax({
                type: "get",
                dataType: "json",
                headers: {
                    token: token
                },
                data: {
                    year: this.list3chooseYear
                },
                url: baseURL + "sys/home/queryPerformanceSummarySheet",
                success: function (json) {
                    console.log("---", json);
                    // vm.list3ResultsSummary = json.body;
                    // console.log(vm.list3ResultsSummary);
                    vm.list3Chart1 = [];
                    vm.list3Chart2 = [];
                    vm.list3ResultsSummary = [{
                        mouthNum: 1,
                        data: {}
                    }, {
                        mouthNum: 2,
                        data: {}
                    }, {
                        mouthNum: 3,
                        data: {}
                    }, {
                        mouthNum: 4,
                        data: {}
                    }, {
                        mouthNum: 5,
                        data: {}
                    }, {
                        mouthNum: 6,
                        data: {}
                    }, {
                        mouthNum: 7,
                        data: {}
                    }, {
                        mouthNum: 8,
                        data: {}
                    }, {
                        mouthNum: 9,
                        data: {}
                    }, {
                        mouthNum: 10,
                        data: {}
                    }, {
                        mouthNum: 11,
                        data: {}
                    }, {
                        mouthNum: 12,
                        data: {}
                    }];
                    if (json.status == 200) {
                        vm.chartData.columns = ['月份', '有效数据量', '人均数据量'];
                        vm.chartData.rows = [];
                        for (var i in json.body) {
                            vm.list3allCount += json.body[i].mouthCount;
                            json.body[i].yGrowthOf = Math.floor(json.body[i].yGrowthOf * 100) + "%";
                            json.body[i].jGrowthOf = Math.floor(json.body[i].jGrowthOf * 100) + "%";
                            for (var j in vm.list3ResultsSummary) {
                                if (json.body[i].mouthNum == vm.list3ResultsSummary[j].mouthNum) {
                                    vm.list3ResultsSummary[j].data = json.body[i];
                                }
                            }
                        }
                        for (var i in vm.list3ResultsSummary) {
                            if (!vm.list3ResultsSummary[i].data.mouthCount) {
                                var d = 0;
                                var e = 0;
                                vm.list3Chart1.push(d);
                                vm.list3Chart2.push(e);
                            } else {
                                vm.list3Chart1.push(vm.list3ResultsSummary[i].data.mouthCount);
                                vm.list3Chart2.push(vm.list3ResultsSummary[i].data.zPeopleNum);
                            }
                        };
                        vm.charts();
                        console.log(vm.list3ResultsSummary);
                        console.log(vm.list3allCount);
                    }
                }
            });
        },
        //获取销售简报列表
        getSelfreport() {
            if (
                this.list4startDate == "" || this.list4startDate == undefined || this.list4startDate == null
            ) {
                var myDate = new Date();
                var m = myDate.getMonth() + 1;
                if (
                    m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12
                ) {
                    this.list4endDate = "2019-" + myDate.getMonth() + 1 + "-31 23:59:59";
                } else if (m == 4 || m == 6 || m == 9 || m == 11) {
                    this.list4endDate = "2019-" + myDate.getMonth() + 1 + "-30 23:59:59";
                } else {
                    this.list4endDate = "2019-" + myDate.getMonth() + 1 + "-28 23:59:59";
                }
                this.list4startDate = "2019-" + myDate.getMonth() + 1 + "-01 00:00:00";
                console.log(this.list4startDate, this.list4endDate);
            }
            $.ajax({
                type: "post",
                dataType: "json",
                headers: {
                    token: token,
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    deptId: this.list4teamlist,
                    endTime: this.list4endDate,
                    limit: this.list4limit,
                    page: this.list4page,
                    startTime: this.list4startDate,
                    userId: this.list4userId,
                }),
                url: baseURL + "sys/sellerPerform/getSellerPerform",
                success: function (json) {
                    console.log("-%%%-", json);
                    vm.list4selfreport = [];
                    if (json.body.sellerPerforms.length != 0) {
                        vm.list4selfreport = json.body.sellerPerforms;
                        console.log(vm.list4selfreport);
                        vm.list4Number = vm.list4selfreport[0].validNum;
                        vm.list4Count = vm.list4selfreport[0].validNum;
                        // test:
                        // let abc =601;
                        // vm.list4Number = abc;
                        // vm.list4Count = abc;
                        if (vm.list4Count < 201) {
                            vm.list4showHearten = 0;
                        } else if (vm.list4Count > 200 && vm.list4Count < 401) {
                            vm.list4showHearten = 1;
                        } else if (vm.list4Count > 400 && vm.list4Count < 601) {
                            vm.list4showHearten = 2;
                        } else if (vm.list4Count > 600 && vm.list4Count < 801) {
                            vm.list4showHearten = 3;
                        } else if (vm.list4Count > 800 && vm.list4Count < 1001) {
                            vm.list4showHearten = 4;
                        } else if (vm.list4Count > 1000 && vm.list4Count < 1201) {
                            vm.list4showHearten = 5;
                        } else if (vm.list4Count > 1200 && vm.list4Count < 1401) {
                            vm.list4showHearten = 6;
                        } else if (vm.list4Count > 1400 && vm.list4Count < 1601) {
                            vm.list4showHearten = 7;
                        } else if (vm.list4Count > 1600) {
                            vm.list4showHearten = 8;
                        }
                        console.log(vm.list4Number);
                        if (vm.list4Number < 801) {
                            vm.list4NumberLevel = 0;
                            vm.list4Number = vm.list4selfreport[0].validNum / 800 * 100;
                        } else if (vm.list4Number > 800 && vm.list4Number < 1001) {
                            vm.list4NumberLevel = 1;
                            // vm.list4Number = Math.floor((vm.list4selfreport[0].validNum / 1000) * 100);
                            vm.list4Number = 20 + (vm.list4selfreport[0].validNum - 800) / 200 * 0.8 * 100;
                        } else if (vm.list4Number > 1000 && vm.list4Number < 1201) {
                            vm.list4NumberLevel = 2;
                            // vm.list4Number = Math.floor((vm.list4selfreport[0].validNum / 1200) * 100);
                            vm.list4Number = 20 + (vm.list4selfreport[0].validNum - 1000) / 200 * 0.8 * 100;
                        } else if (vm.list4Number > 1200 && vm.list4Number < 1401) {
                            vm.list4NumberLevel = 3;
                            // vm.list4Number = Math.floor((vm.list4selfreport[0].validNum / 1400) * 100);
                            vm.list4Number = 20 + (vm.list4selfreport[0].validNum - 1200) / 200 * 0.8 * 100;
                        } else if (vm.list4Number > 1400) {
                            vm.list4NumberLevel = 4;
                            // vm.list4Number = Math.floor((vm.list4selfreport[0].validNum / 1600) * 100);
                            vm.list4Number = 20 + (vm.list4selfreport[0].validNum - 1400) / 200 * 0.8 * 100;
                        }
                        // test2
                        // if (vm.list4Number < 801) {
                        //     vm.list4NumberLevel = 0;
                        //     vm.list4Number = Math.floor((vm.list4Number / 800) * 100);
                        // } else if (vm.list4Number > 800 && vm.list4Number < 1001) {
                        //     vm.list4NumberLevel = 1;
                        //     vm.list4Number = 20 + (vm.list4Number - 800) / 200 * 0.8 * 100;
                        // } else if (vm.list4Number > 1000 && vm.list4Number < 1201) {
                        //     vm.list4NumberLevel = 2;
                        //     vm.list4Number = 20 + (vm.list4Number - 1000) / 200 * 0.8 * 100;
                        // } else if (vm.list4Number > 1200 && vm.list4Number < 1401) {
                        //     vm.list4NumberLevel = 3;
                        //     vm.list4Number = 20 + (vm.list4Number - 1200) / 200 * 0.8 * 100;
                        // } else if (vm.list4Number > 1400) {
                        //     vm.list4NumberLevel = 4;
                        //     vm.list4Number = 20 + (vm.list4Number - 1400) / 200 * 0.8 * 100;
                        // }
                    } else {
                        vm.list4Number = 0;
                        vm.list4Count = 0;
                    }

                }
            });
        },
        // hasPermission(permission) {
        //     $.getJSON(baseURL + "sys/menu/nav", function (r) {
        //         // console.log(r);
        //         window.permissions = r.permissions;
        //     });
        //     if (window.parent.permissions.indexOf(permission) > -1) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // },
        //刷新销售简报列表
        searchSelfreport() {
            $.ajax({
                type: "post",
                dataType: "json",
                headers: {
                    token: token,
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    deptId: this.list4teamlist,
                    endTime: this.list4endDate,
                    limit: this.list4limit,
                    page: this.list4page,
                    startTime: this.list4startDate,
                    userId: this.list4userId,
                }),
                url: baseURL + "sys/sellerPerform/getSellerPerform",
                success: function (json) {
                    if (json.body.sellerPerforms.length != 0) {
                        vm.list4selfreport = json.body.sellerPerforms;
                        vm.list4Number = vm.list4selfreport[0].validNum;
                        vm.list4Count = vm.list4selfreport[0].validNum;
                        if (vm.list4Count < 201) {
                            vm.list4showHearten = 0;
                        } else if (vm.list4Count > 200 && vm.list4Count < 401) {
                            vm.list4showHearten = 1;
                        } else if (vm.list4Count > 400 && vm.list4Count < 601) {
                            vm.list4showHearten = 2;
                        } else if (vm.list4Count > 600 && vm.list4Count < 801) {
                            vm.list4showHearten = 3;
                        } else if (vm.list4Count > 800 && vm.list4Count < 1001) {
                            vm.list4showHearten = 4;
                        } else if (vm.list4Count > 1000 && vm.list4Count < 1201) {
                            vm.list4showHearten = 5;
                        } else if (vm.list4Count > 1200 && vm.list4Count < 1401) {
                            vm.list4showHearten = 6;
                        } else if (vm.list4Count > 1400 && vm.list4Count < 1601) {
                            vm.list4showHearten = 7;
                        } else if (vm.list4Count > 1600) {
                            vm.list4showHearten = 8;
                        }
                        console.log(vm.list4Number);
                        if (vm.list4Number < 801) {
                            vm.list4NumberLevel = 0;
                            vm.list4Number = vm.list4selfreport[0].validNum / 800 * 100;
                        } else if (vm.list4Number > 800 && vm.list4Number < 1001) {
                            vm.list4NumberLevel = 1;
                            // vm.list4Number = Math.floor((vm.list4selfreport[0].validNum / 1000) * 100);
                            vm.list4Number = 20 + (vm.list4selfreport[0].validNum - 800) / 200 * 0.8 * 100;
                        } else if (vm.list4Number > 1000 && vm.list4Number < 1201) {
                            vm.list4NumberLevel = 2;
                            // vm.list4Number = Math.floor((vm.list4selfreport[0].validNum / 1200) * 100);
                            vm.list4Number = 20 + (vm.list4selfreport[0].validNum - 1000) / 200 * 0.8 * 100;
                        } else if (vm.list4Number > 1200 && vm.list4Number < 1401) {
                            vm.list4NumberLevel = 3;
                            // vm.list4Number = Math.floor((vm.list4selfreport[0].validNum / 1400) * 100);
                            vm.list4Number = 20 + (vm.list4selfreport[0].validNum - 1200) / 200 * 0.8 * 100;
                        } else if (vm.list4Number > 1400) {
                            vm.list4NumberLevel = 4;
                            // vm.list4Number = Math.floor((vm.list4selfreport[0].validNum / 1600) * 100);
                            vm.list4Number = 20 + (vm.list4selfreport[0].validNum - 1400) / 200 * 0.8 * 100;
                        }
                    } else {
                        vm.list4Number = 0;
                        vm.list4Count = 0;
                    }
                }
            });
        },
        getFirstInitPageMonth(){
            this.list1startDate = this.list1chooseMonth[0];
            this.list1endDate = this.list1chooseMonth[1];
            this.searchPerformanceRanking();
        },
        getFirstInitPageMonth2(){
            this.list2startDate = this.list2chooseMonth[0];
            this.list2endDate = this.list2chooseMonth[1];
            this.searchSalesKit();
        },
        // getFirstInitPageMonth3(){
        //     this.list1startDate = this.list1chooseMonth[0];
        //     this.list1endDate = this.list1chooseMonth[1];
        //     this.searchPerformanceRanking();
        // },
        getFirstInitPageMonth4(){
            this.list4startDate = this.list4chooseMonth[0];
            this.list4endDate = this.list4chooseMonth[1];
            this.searchSelfreport();
        },
        //选择月份
        getMonth() {
            console.log(this.list1chooseMonth)
            vm.list1chooseMonth[1] = vm.list1chooseMonth[1].split(" ")[0] + " 23:59:59";
            console.log(vm.list1chooseMonth);
            vm.list1startDate = vm.list1chooseMonth[0];
            vm.list1endDate = vm.list1chooseMonth[1];
            vm.searchPerformanceRanking();
        },
        //选择月份
        getMonth2() {
            vm.list2chooseMonth[1] =
                vm.list2chooseMonth[1].split(" ")[0] + " 23:59:59";
            console.log(vm.list2chooseMonth);
            vm.list2startDate = vm.list2chooseMonth[0];
            vm.list2endDate = vm.list2chooseMonth[1];
            vm.searchSalesKit();
        },
        //选择月份
        getMonth3() {
            vm.list3chooseMonth[1] =
                vm.list3chooseMonth[1].split(" ")[0] + " 23:59:59";
            console.log(vm.list3chooseMonth);
            vm.list3startDate = vm.list3chooseMonth[0];
            vm.list3endDate = vm.list3chooseMonth[1];
            // vm.searchSalesKit();
        },
        getMonth4() {
            vm.list4chooseMonth[1] =
                vm.list4chooseMonth[1].split(" ")[0] + " 23:59:59";
            console.log(vm.list4chooseMonth);
            vm.list4startDate = vm.list4chooseMonth[0];
            vm.list4endDate = vm.list4chooseMonth[1];
            vm.searchSelfreport();
        },
        //获取组
        getlist1() {
            if (this.justManagerUp != false) {
                $.ajax({
                    type: "get",
                    dataType: "json",
                    data: {
                        token: token,
                        page: 1,
                        limit: 1000
                    },
                    url: baseURL + "sys/dept/queryAllSellerDepts",
                    success: function (json) {
                        console.log(json);
                        vm.list1group = json.body;
                        vm.list2group = json.body;
                        vm.list3group = json.body;
                    }
                });
            }
        },
        //选择组
        changeGroup(val) {
            console.log(vm.list1teamlist);
            if (
                vm.list1teamlist == "" || vm.list1teamlist == undefined || vm.list1teamlist == null
            ) {
                vm.list1isAllDept = true;
            } else {
                vm.list1isAllDept = false;
            }
            vm.searchPerformanceRanking();
        },
        //选择组
        changeGroup2(val) {
            console.log(vm.list2teamlist);
            if (
                vm.list2teamlist == "" || vm.list2teamlist == undefined || vm.list2teamlist == null
            ) {
                vm.list2isAllDept = true;
            } else {
                vm.list2isAllDept = false;
            }
            vm.searchSalesKit();
        },
        //选择组
        changeGroup3(val) {
            console.log(vm.list3teamlist);
            if (
                vm.list3teamlist == "" || vm.list3teamlist == undefined || vm.list3teamlist == null
            ) {
                vm.list3isAllDept = true;
            } else {
                vm.list3isAllDept = false;
            }
            // vm.searchSalesKit();
        },
        changeYear() {
            vm.list3allCount = 0;
            vm.searchResultsSummary();
        },
        charts() {
            console.log(vm.list3Chart1, vm.list3Chart2)
            var dom = document.getElementById("container");
            var myChart = echarts.init(dom);
            var app = {};
            option = null;
            option = {
                title: {
                    text: '业绩汇总图表',
                    // subtext: '纯属虚构'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['有效数据量', '人均数据量']
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {
                            readOnly: false
                        },
                        magicType: {
                            type: ['line', 'bar']
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}'
                    }
                },
                series: [{
                    name: '有效数据量',
                    type: 'line',
                    // data: [2000, 1500, 4500, 500, 7000, 6000, 4000, 5002, 9000, 5555, 1333, 1222],
                    data: this.list3Chart1,
                    markPoint: {
                        // data: [
                        //     {type: 'max', name: '最大值'},
                        //     {type: 'min', name: '最小值'}
                        // ]
                    },
                    markLine: {
                        // data: [
                        //     {type: 'average', name: '平均值'}
                        // ]
                    }
                }, {
                    name: '人均数据量',
                    type: 'line',
                    // data: [400, 555, 222, 333, 666, 999, 5555, 4444, 2222, 1111, 6666, 7777],
                    data: this.list3Chart2,
                    markPoint: {
                        // data: [
                        //     {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        // ]
                    },
                    markLine: {
                        // data: [
                        //     {type: 'average', name: '平均值'},
                        //     [{
                        //         symbol: 'none',
                        //         x: '90%',
                        //         yAxis: 'max'
                        //     }, {
                        //         symbol: 'circle',
                        //         label: {
                        //             normal: {
                        //                 position: 'start',
                        //                 formatter: '最大值'
                        //             }
                        //         },
                        //         type: 'max',
                        //         name: '最高点'
                        //     }]
                        // ]
                    }
                }]
            };
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }
        },
        // list1handleSizeChange(val) {
        // 	console.log(`每页 ${val} 条`);
        // 	vm.list1limit = val;
        // 	this.handleCurrentChange(this.list1currentPage);
        // },
        // list1handleCurrentChange(val) {
        // 	vm.list1page = val;
        // 	// this.getTableData();
        // },
        // list2handleSizeChange(val) {
        // 	console.log(`每页 ${val} 条`);
        // 	vm.list2limit = val;
        // 	this.handleCurrentChange(this.list2currentPage);
        // },
        // list2handleCurrentChange(val) {
        // 	vm.list2page = val;
        // 	// this.getTableData();
        // }
    }
});
// $(function () {
//     function drawChart() {
//         var dom = document.getElementById("container");
//         var myChart = echarts.init(dom);
//         var app = {};
//         option = null;
//         option = {
//             title: {
//                 text: '业绩汇总图表',
//                 // subtext: '纯属虚构'
//             },
//             tooltip: {
//                 trigger: 'axis'
//             },
//             legend: {
//                 data: ['有效数据量', '人均数据量']
//             },
//             toolbox: {
//                 show: true,
//                 feature: {
//                     dataZoom: {
//                         yAxisIndex: 'none'
//                     },
//                     dataView: {
//                         readOnly: false
//                     },
//                     magicType: {
//                         type: ['line', 'bar']
//                     },
//                     restore: {},
//                     saveAsImage: {}
//                 }
//             },
//             xAxis: {
//                 type: 'category',
//                 boundaryGap: false,
//                 data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
//             },
//             yAxis: {
//                 type: 'value',
//                 axisLabel: {
//                     formatter: '{value}'
//                 }
//             },
//             series: [{
//                     name: '有效数据量',
//                     type: 'line',
//                     data: [2000, 1500, 4500, 500, 7000, 6000, 4000, 5002, 9000, 5555, 1333, 1222],
//                     markPoint: {
//                         // data: [
//                         //     {type: 'max', name: '最大值'},
//                         //     {type: 'min', name: '最小值'}
//                         // ]
//                     },
//                     markLine: {
//                         // data: [
//                         //     {type: 'average', name: '平均值'}
//                         // ]
//                     }
//                 },
//                 {
//                     name: '人均数据量',
//                     type: 'line',
//                     data: [400, 555, 222, 333, 666, 999, 5555, 4444, 2222, 1111, 6666, 7777],
//                     markPoint: {
//                         // data: [
//                         //     {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
//                         // ]
//                     },
//                     markLine: {
//                         // data: [
//                         //     {type: 'average', name: '平均值'},
//                         //     [{
//                         //         symbol: 'none',
//                         //         x: '90%',
//                         //         yAxis: 'max'
//                         //     }, {
//                         //         symbol: 'circle',
//                         //         label: {
//                         //             normal: {
//                         //                 position: 'start',
//                         //                 formatter: '最大值'
//                         //             }
//                         //         },
//                         //         type: 'max',
//                         //         name: '最高点'
//                         //     }]
//                         // ]
//                     }
//                 }
//             ]
//         };
//         if (option && typeof option === "object") {
//             myChart.setOption(option, true);
//         }
//     };
//     drawChart();
// })