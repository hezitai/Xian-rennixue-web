var vm = new Vue({
    el: '#app',
    data() {
        return {
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },
            modals: false,
            res: true,
            managerCheckStatus: 2,
            typeids: [],
            type: false,
            states: '',
            onlyStaff: true,
            rowid: '',
            btnstatus: false,
            btnval: "确 定",
            modal: false,
            num: 0,
            userId: '',
            startdatetime: '',
            enddatetime: '',
            start: " 00:00:01",
            end: " 23:59:59",
            startTime: '',
            endTime: '',
            statused: "1,5,10",
            changeRed: -1,
            isActive1: true,
            isActive2: false,
            isActive3: false,
            isActive4: false,
            isActive5: false,
            isActive6: false,
            btnstatus: false,
            isArea1: true,
            isgroup1: true,
            ismember1: true,
            btnval: "确 定",
            usertable: true,
            userform: false,
            tableDataName: "",
            tableDataEnd: [],
            currentPage: 0,
            pageSize: 0,
            total: 0,
            limit: 100,
            page: 1,
            idss: [],
            ids: [],
            value: '',
            countrys: '',
            universitys: '',
            countryId: '',
            professionalNames: '',
            levels: '',
            wxaccounts: '',
            wxAccount: '',
            id: '',
            enroltimes: '',
            getmemberes: '',
            members: '',
            reasons: '',
            sysWxAccount: '',
            groups: '',
            putStudWx: false,
            putStudWxCompile: false,
            compileData: '',
            ruleForm: {
                wx: '',
                wxAccount: '',
                wxName: '',
                countryId: '',
                addTime: '',
                enrolTime: '',
                level: '',
                studentName: '',
                contents: '',
                description: '',
                universityId: '',
                professionalId: '',
                value1: '',
                value2: '',
                getmemberId: '',
                groupCheckDesc: '',
                reason: '',
                groupId: '',
                groupCheckDescs: '',
                sysWxAccountName: '',
                universityName:'',
            },
            dialogFormVisible: false,
            desc: '',
            checkUnPassId: '',
            compileData: '',
            rules: {
                wxAccount: [{
                    required: true,
                    message: '请输入微信账号',
                    trigger: 'blue'
                }],
                addTime: [{
                    required: true,
                    message: '请选择建号时间',
                    trigger: 'change'
                }],
                countryId: [{
                    required: true,
                    message: '请选择国家',
                    trigger: 'change'
                }],
                universityId: [{
                    required: true,
                    message: '请选择学校',
                    trigger: 'change'
                }],
                // enrolTime: [{
                //     required: true,
                //     message: '请选择入学时间',
                //     trigger: 'change'
                // }],
                level: [{
                    required: true,
                    message: '请选择学术级别',
                    trigger: 'change'
                }],
                professionalId: [{
                    required: true,
                    message: '请选择专业',
                    trigger: 'change'
                }],
                studentName: [{
                    required: true,
                    message: '请输入学生姓名',
                    trigger: 'blue'
                }],
                contents: [{
                    required: true,
                    message: '请输入信息',
                    trigger: 'blue'
                }],
                groupCheckDesc: [{
                    required: true,
                    message: '请输入原因',
                    trigger: 'blue'
                }],
                groupCheckDescs: [{
                    required: true,
                    message: '请输入原因',
                    trigger: 'blue'
                }],
                sysWxAccount: [{
                    required: true,
                    message: '请选择微信',
                    trigger: 'change'
                }]
            }
        }
    },
    multipleSelection: [],
    mounted() {
        this.getcountrys();
        this.getprofessionalNames();
        this.getlevels();
        this.getgroups();
        this.getenroltimes();
        this.getTableData();
    },
    methods: {
        choosedata: function (value) {
            this.value = value;
        },
        getTableData: function () {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading'
            });
            var self = this;
            $.ajax({
                type: "get",
                dataType: "json",
                headers: {
                    "token": token,
                },
                data: {
                    "page": this.page,
                    "limit": this.limit,
                    "startCreateAt": this.ruleForm.value1,
                    "endCreateAt": this.ruleForm.value2,
                    // "key": this.key,
                    "countryId": this.ruleForm.countryId,
                    "universityId": this.ruleForm.universityId,
                    "level": this.ruleForm.level,
                    "professionalId": this.ruleForm.professionalId,
                    "key": this.tableDataName,
                    "sysWxAccount": this.ruleForm.wx,
                    // 'enrolTime': this.enrolTimes,
                    'isAllDept': true,
                },
                url: "" + baseURL + "sys/privatestudWx/listManager",
                success: function (json) {
                    console.log(json);
                    self.tableDataEnd = json.body.list;
                    self.total = json.body.totalCount;
                    self.pageSize = json.body.totalCount;
                    self.currentPage = json.body.currPage;
                    loading.close();
                }
            });
        },
        change_wxid() {
            vm.serach();
        },
        change_wx(val) {
            let obj = {};
            obj = this.wxaccounts.find((item) => {
                return item.id === val;
            });
            vm.wxAccount = obj.wxAccount;
            vm.ad = obj.id;
            vm.fileList = [];
        },
        getwxs() {
            $.ajax({
                type: "get",
                dataType: "json",
                data: {
                    "token": token,
                    "page": 1,
                    "limit": 1000,
                    "isMy": true,
                    "receiverId": vm.ruleForm.getmemberId,
                    "isSerach": true,
                },
                url: "" + baseURL + "sys/basedata/wxManager/list",
                success: function (json) {
                    vm.wxaccounts = json.body.list;
                }
            });
        },
        addDate() {
            vm.userform = true;
            vm.usertable = false;
            vm.getUser();
            vm.getwxaccounts();
            vm.getenroltimes();
            vm.ruleForm.countryId = "";
            vm.ruleForm.universityId = "";
            vm.ruleForm.level = "";
            vm.ruleForm.professionalId = "";
        },
        getUser() {
            $.getJSON(baseURL + "sys/user/info", function (r) {
                vm.ruleForm.sysWxAccount = r.user.username;
            });
        },
        back() {
            // vm.userform = false;
            // vm.usertable = true; 
            // vm.ruleForm.countryId = "";
            // vm.ruleForm.universityId = "";
            // vm.ruleForm.level = "";
            // vm.ruleForm.professionalId = "";
            // vm.getTableData();
            window.location.reload();
        },
        submitForm(formName) {
            let self = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    vm.btnstatus = true;
                    vm.btnval = "加载中";
                    $.ajax({
                        type: "post",
                        dataType: "json",
                        cache: false,
                        contentType: "application/json",
                        headers: {
                            "token": token
                        },
                        data: JSON.stringify({
                            wxName: vm.ruleForm.wxName,
                            studentName: vm.ruleForm.wxName,
                            countryId: vm.ruleForm.countryId,
                            universityId: vm.ruleForm.universityId,
                            addTime: vm.ruleForm.addTime,
                            // enrolTime: vm.ruleForm.enrolTime,
                            enrolTime:1,
                            professionalId: vm.ruleForm.professionalId,
                            level: vm.ruleForm.level,
                            contents: vm.ruleForm.contents,
                            description: vm.ruleForm.description,
                            sysWxAccount: vm.id,
                            wxAccount: vm.wxAccount,
                        }),
                        url: "" + baseURL + "sys/studWx/putStudWx",
                        success: function (json) {
                            if (json.status == "200") {
                                vm.$message({
                                    message: json.body.msg,
                                    type: 'success'
                                });
                                vm.btnstatus = false;
                                vm.btnval = "创 建";
                                vm.userform = false;
                                vm.usertable = true;
                                vm.getTableData();
                            }
                            if (json.status == "400") {
                                vm.$message({
                                    message: json.body.msg,
                                    type: 'warning'
                                });
                                vm.btnstatus = false;
                                vm.btnval = "创 建";
                            }
                        }
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        getwxaccounts() {
            $.ajax({
                type: "get",
                dataType: "json",
                data: {
                    "token": token,
                    "page": 1,
                    "limit": 1000,
                    receiver_id: localStorage.getItem('crm_number'),
                    isMy: true,
                },
                url: "" + baseURL + "sys/basedata/wxManager/list",
                success: function (json) {
                    vm.wxaccounts = json.body.list;
                }
            });
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
                    vm.countrys = json.body.list;
                }
            });
        },
        dialogOpen() {
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
                    console.log(json.body)
                    vm.universitys = json.body.list;
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
                    vm.universitys = json.body.list;
                }
            });
        },
        getprofessionalNames() {
            $.ajax({
                type: "get",
                dataType: "json",
                data: {
                    "token": token,
                    "page": 1,
                    "limit": 1000
                },
                url: "" + baseURL + "sys/basedata/professionalCourses/list",
                success: function (json) {
                    vm.professionalNames = json.body.list;
                }
            });
        },
        change_school(val){
            // debugger;
            // console.log(11);
            vm.ruleForm.universityId = val;
            console.log(vm.ruleForm, val);
        },
        getlevels() {
            $.ajax({
                type: "get",
                dataType: "json",
                data: {
                    "token": token,
                    "page": 1,
                    "limit": 1000
                },
                url: "" + baseURL + "sys/basedata/level/queryAll",
                success: function (json) {
                    vm.levels = json.body;
                }
            });
        },
        getenroltimes() {
            $.ajax({
                type: "get",
                dataType: "json",
                data: {
                    "token": token,
                    "page": 1,
                    "limit": 1000
                },
                url: "" + baseURL + "sys/basedata/enrolTime/list",
                success: function (json) {
                    vm.enroltimes = json.body.list;
                }
            });
        },
        getmembers() {
            $.ajax({
                type: "get",
                dataType: "json",
                data: {
                    "token": token,
                    "page": 1,
                    "limit": 1000,
                    "onlyStaff": true,
                    "deptId": vm.ruleForm.groupId,
                },
                url: "" + baseURL + "sys/user/getUserListByDept",
                success: function (json) {
                    vm.members = json.body.list;
                }
            });
        },
        getgroups() {
            $.ajax({
                type: "get",
                dataType: "json",
                data: {
                    "token": token,
                    "page": 1,
                    "limit": 1000,
                },
                url: "" + baseURL + "sys/dept/queryAllSellerDepts",
                success: function (json) {
                    vm.groups = json.body;
                }
            });
        },
        change_country(val) {
            vm.countryId = val;
            vm.getuniversitys();
            if (vm.ruleForm.universityId !== undefined) {
                vm.ruleForm.universityId = "";
            };
            if (vm.usertable == true) {
                vm.isArea1 = false;
                vm.serach();
            };
        },
        change_countrys(val) {
            vm.countryId = val;
            vm.ruleForm.universityName = '请选择';
            vm.getuniversitys();
            if (vm.ruleForm.universityId !== undefined) {
                vm.ruleForm.universityId = "";
            };
            if (vm.usertable == true) {
                vm.isArea1 = false;
            };
        },
        change_universitys(val) {
            vm.ruleForm.universityId = val;
            if (vm.usertable == true) {
                vm.isArea1 = false;
                vm.serach();
            };
        },
        change_university(val) {

            console.log(val);
            vm.ruleForm.universityId = val;
            if (vm.usertable == true) {
                vm.isArea1 = false;
                // vm.serach();
            };
        },
        change_professionalId(val) {
            vm.ruleForm.professionalId = val;
            if (vm.usertable == true) {
                vm.isArea1 = false;
                vm.serach();
            };
        },
        change_level(val) {
            vm.ruleForm.level = val;
            if (vm.usertable == true) {
                vm.isArea1 = false;
                vm.serach();
            };
        },
        area_all() {
            if (vm.usertable == true) {
                vm.ruleForm.level = "";
                vm.ruleForm.professionalId = "";
                vm.ruleForm.universityId = "";
                vm.ruleForm.countryId = "";
                vm.countryId = "";
                vm.universitys = "";
                vm.isArea1 = true;
                vm.serach();
            };
        },
        change_wxaccount(val) {
            let obj = {};
            obj = this.wxaccounts.find((item) => {
                return item.id === val;
            });
            vm.wxAccount = obj.wxAccount;
            vm.id = obj.id;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.limit = val;
            this.handleCurrentChange(this.currentPage);
        },
        handleCurrentChange(val) {
            vm.page = val;
            this.getTableData();
        },
        handleSelectionChange(val) {
            vm.compileData = val;
            this.multipleSelection = val;
            let ids = [];
            let typeids = [];
            this.multipleSelection.map((item) => {
                var id = item.id;
                vm.rowid = item.id;
                vm.states = item.statused;
                ids.push("" + id + "");
                vm.num = val.length;
                typeids.push(item.statused);
            });
            vm.typeids = typeids;
            this.selectedIDs = ids;
            this.idss = this.selectedIDs;
            if (this.selectedIDs == "") {
                vm.num = 0;
            }
            if (vm.usertable === true) {

            }
        },
        Time(now) {
            let year = new Date(now).getFullYear();
            let month = new Date(now).getMonth() + 1;
            let date = new Date(now).getDate();
            if (month < 10) month = "0" + month;
            if (date < 10) date = "0" + date;
            return year + "-" + month + "-" + date;
        },
        //本周第一天；
        showWeekFirstDay() {
            let Nowdate = new Date();
            let WeekFirstDay = new Date(Nowdate - (Nowdate.getDay() - 1) * 86400000);
            let M = Number(WeekFirstDay.getMonth()) + 1;
            if (M < 10) {
                M = "0" + M;
            }
            let D = WeekFirstDay.getDate();
            if (D < 10) {
                D = "0" + D;
            }
            return WeekFirstDay.getFullYear() + "-" + M + "-" + D;
        },
        //本周最后一天
        showWeekLastDay() {
            let Nowdate = new Date();
            let WeekFirstDay = new Date(Nowdate - (Nowdate.getDay() - 1) * 86400000);
            let WeekLastDay = new Date((WeekFirstDay / 1000 + 6 * 86400) * 1000);
            let M = Number(WeekLastDay.getMonth()) + 1;
            if (M < 10) {
                M = "0" + M;
            }
            let D = WeekLastDay.getDate();
            if (D < 10) {
                D = "0" + D;
            }
            return WeekLastDay.getFullYear() + "-" + M + "-" + D;
        },
        //获得某月的天数：
        getMonthDays(myMonth) {
            let monthStartDate = new Date(new Date().getFullYear(), myMonth, 1);
            let monthEndDate = new Date(new Date().getFullYear(), myMonth + 1, 1);
            let days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
            return days;
        },
        //点击事件
        query: function (way) {
            let self = this;
            // this.$refs.pag.currentPage=1;
            // this.page=this.$refs.pag.currentPage;
            switch (way) {
                case 'today':
                    this.startTime = this.Time(new Date().getTime());
                    this.endTime = this.Time(new Date().getTime());
                    vm.isActive1 = true;
                    vm.isActive2 = false;
                    vm.isActive3 = false;
                    vm.isActive4 = false;
                    vm.isActive5 = false;
                    vm.isActive6 = false;
                    vm.ruleForm.value1 = "";
                    vm.ruleForm.value2 = "";
                    break;
                case 'yesterday':
                    this.startTime = this.Time(new Date().getTime() - 24 * 60 * 60 * 1000);
                    this.endTime = this.Time(new Date().getTime() - 24 * 60 * 60 * 1000);
                    vm.isActive1 = false;
                    vm.isActive2 = true;
                    vm.isActive3 = false;
                    vm.isActive4 = false;
                    vm.isActive5 = false;
                    vm.isActive6 = false;
                    vm.ruleForm.value1 = "";
                    vm.ruleForm.value2 = "";
                    break;
                case 'weeks':
                    this.startTime = this.showWeekFirstDay();
                    this.endTime = this.showWeekLastDay();
                    vm.isActive1 = false;
                    vm.isActive2 = false;
                    vm.isActive3 = true;
                    vm.isActive4 = false;
                    vm.isActive5 = false;
                    vm.isActive6 = false;
                    vm.ruleForm.value1 = "";
                    vm.ruleForm.value2 = "";
                    break;
                case 'lastWeek':
                    this.startTime = this.Time(new Date(new Date().getFullYear(), new Date().getMonth(),
                        new Date().getDate() - new Date().getDay() - 6));
                    this.endTime = this.Time(new Date(new Date().getFullYear(), new Date().getMonth(),
                        new Date().getDate() + (6 - new Date().getDay() - 6)));
                    vm.isActive1 = false;
                    vm.isActive2 = false;
                    vm.isActive3 = false;
                    vm.isActive4 = true;
                    vm.isActive5 = false;
                    vm.isActive6 = false;
                    vm.ruleForm.value1 = "";
                    vm.ruleForm.value2 = "";
                    break;
                case 'month':
                    this.startTime = this.Time(new Date(new Date().getFullYear(), new Date().getMonth(),
                        1));
                    this.endTime = this.Time(new Date(new Date().getFullYear(), new Date().getMonth(),
                        this.getMonthDays(new Date().getMonth())));
                    vm.isActive1 = false;
                    vm.isActive2 = false;
                    vm.isActive3 = false;
                    vm.isActive4 = false;
                    vm.isActive5 = true;
                    vm.isActive6 = false;
                    vm.ruleForm.value1 = "";
                    vm.ruleForm.value2 = "";
                    break;
                case 'lastMonth':
                    this.startTime = this.Time(new Date(new Date().getFullYear(), new Date().getMonth() -
                        1, 1));
                    this.endTime = this.Time(new Date(new Date().getFullYear(), new Date().getMonth() -
                        1, this.getMonthDays(new Date().getMonth() - 1)));
                    vm.isActive1 = false;
                    vm.isActive2 = false;
                    vm.isActive3 = false;
                    vm.isActive4 = false;
                    vm.isActive5 = false;
                    vm.isActive6 = true;
                    vm.ruleForm.value1 = "";
                    vm.ruleForm.value2 = "";
                    break;
            }
            vm.serach();
        },
        serach() {
            var self = this;
            if (vm.startTime !== "") {
                vm.startdatetime = vm.startTime + vm.start;
                vm.enddatetime = vm.endTime + vm.end;
            } else {
                vm.startdatetime = vm.startdatetime;
                vm.enddatetime = vm.enddatetime;
            }
            $.ajax({
                type: "get",
                dataType: "json",
                headers: {
                    "token": token,
                },
                data: {
                    "page": this.page,
                    "limit": this.limit,
                    "startCreateAt": vm.startdatetime,
                    "endCreateAt": vm.enddatetime,
                    // "key": this.key,
                    "countryId": this.ruleForm.countryId,
                    "universityId": this.ruleForm.universityId,
                    "level": this.ruleForm.level,
                    "professionalId": this.ruleForm.professionalId,
                    "key": this.tableDataName,
                    "sysWxAccount": this.ruleForm.wx,
                    // 'enrolTime': this.enrolTimes,
                    enrolTime:1,
                    "isAllDept": vm.onlyStaff,
                    'deptId':vm.ruleForm.groupId,
                    userId:vm.ruleForm.getmemberId,
                },
                url: "" + baseURL + "sys/privatestudWx/listManager",
                success: function (json) {
                    console.log(json);
                    self.tableDataEnd = json.body.list;
                    self.total = json.body.totalCount;
                    self.pageSize = json.body.totalCount;
                    self.currentPage = json.body.currPage;
                    // loading.close();
                }
            });
        },
        serach_data() {
            if (vm.tableDataName !== "") {
                vm.serach();
            }
        },
        change_starttime(val) {
            if (val !== "") {
                vm.isActive1 = false;
                vm.isActive2 = false;
                vm.isActive3 = false;
                vm.isActive4 = false;
                vm.isActive5 = false;
                vm.isActive6 = false;
                vm.startdatetime = val + " 00:00:00";
            };
            if (vm.ruleForm.value1 !== "" && vm.ruleForm.value2 !== "") {

                vm.serach();
            }
        },
        change_endtime(val) {
            if (val !== "") {
                vm.isActive1 = false;
                vm.isActive2 = false;
                vm.isActive3 = false;
                vm.isActive4 = false;
                vm.isActive5 = false;
                vm.isActive6 = false;
                vm.enddatetime = val + " 23:59:59";
            };
            if (vm.ruleForm.value1 !== "" && vm.ruleForm.value2 !== "") {

                vm.serach();
            }
        },
        group_all() {
            vm.ismember1 = true;
            vm.ruleForm.getmemberId = "";
            vm.serach();
        },
        change_getmember(val) {
            if (val == "") {
                vm.ismember1 = true;
            }
            vm.ruleForm.getmemberId = val;
            vm.serach();
            vm.ismember1 = false;
            vm.getwxs();
            vm.ruleForm.wx = "";
        },
        yes(id) {
            console.log(id);
            // if (vm.idss.length === 0) {
            //     vm.$message({
            //         message: '请选择您要通过的列表',
            //         type: 'warning'
            //     });
            //     return false;
            // } else {

            // }
            this.$confirm('是否通过?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                })
                .then(_ => {
                    $.ajax({
                        type: "post",
                        // contentType: "application/json",
                        headers: {
                            'token': token,
                        },
                        data: {
                            "swlId": id,
                            "status": 1,
                            "desc": '',
                        },
                        url: "" + baseURL + "sys/privatestudWx/lookOver",
                        success: function (json) {
                            console.log(json);
                            if (json.status == 200) {
                                vm.$message({
                                    message: json.body.msg,
                                    type: 'success'
                                });
                                vm.serach();
                            }
                            if (json.status == 400) {
                                vm.$message({
                                    message: json.body.msg,
                                    type: 'warning'
                                });
                                vm.serach();
                            }
                        }
                    });
                })
                .catch(_ => {});
        },
        checkUnPass() {
            console.log(this.checkUnPassId);
            $.ajax({
                type: "post",
                // contentType: "application/json",
                headers: {
                    'token': token,
                },
                data: {
                    "swlId": this.checkUnPassId,
                    "status": 2,
                    "desc": vm.desc,
                },
                url: "" + baseURL + "sys/privatestudWx/lookOver",
                success: function (json) {
                    console.log(json);
                    if (json.status == 200) {
                        vm.$message({
                            message: json.body.msg,
                            type: 'success'
                        });
                        vm.serach();
                    }
                    if (json.status == 400) {
                        vm.$message({
                            message: json.body.msg,
                            type: 'warning'
                        });
                        vm.serach();
                    }
                }
            });
        },
        no(id) {
            console.log(id);
            this.checkUnPassId = id;
            vm.dialogFormVisible = true;
            // if (vm.idss.length === 0) {
            //     vm.$message({
            //         message: '请选择您要不通过的列表',
            //         type: 'warning'
            //     });
            // } else if (vm.states === 1) {
            //     vm.$message({
            //         message: '主管未审核',
            //         type: 'warning'
            //     });
            // } else if (vm.idss.length > 1) {
            //     vm.$message({
            //         message: '只能选择一条数据',
            //         type: 'warning'
            //     });
            // } else {
            //     vm.modal = true;
            //     vm.managerCheckStatus = 2;
            //     vm.getreason();
            // }
        },
        getreason() {
            $.ajax({
                type: "get",
                dataType: "json",
                data: {
                    "token": token,
                    "page": 1,
                    "limit": 1000,
                    "type": 1,
                },
                url: "" + baseURL + "sys/basedata/exceptionList/list",
                success: function (json) {
                    vm.reasons = json.body.list;
                }
            });
        },
        submitForm(formName) {
            var self = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    vm.btnstatus = true;
                    vm.btnval = "加载中";
                    $.ajax({
                        type: "post",
                        contentType: "application/json",
                        headers: {
                            "token": token
                        },
                        data: JSON.stringify({
                            checkIds: vm.idss,
                            managerCheckStatus: vm.managerCheckStatus,
                            managerExceptionTypeId: this.$refs.ruleForm.model.reason,
                            managerCheckDesc: this.$refs.ruleForm.model.groupCheckDesc,
                        }),
                        url: "" + baseURL + "sys/studWx/putCheckResultByManager",
                        success: function (json) {
                            if (json.status == 200) {
                                vm.$message({
                                    message: json.body.msg,
                                    type: 'success'
                                });
                                vm.modal = false;
                                vm.btnstatus = false;
                                vm.btnval = "确 定";
                                vm.ruleForm.reason = "";
                                vm.ruleForm.groupCheckDesc = "";
                                vm.getTableData();
                            }
                            if (json.status == 400) {
                                vm.$message({
                                    message: json.body.msg,
                                    type: 'warning'
                                });
                                vm.modal = false;
                                vm.btnstatus = false;
                                vm.btnval = "确 定";
                            }
                        }
                    });
                }
            });
        },
        submitForm1(formName) {
            var self = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    vm.btnstatus = true;
                    vm.btnval = "加载中";
                    $.ajax({
                        type: "post",
                        contentType: "application/json",
                        headers: {
                            "token": token
                        },
                        data: JSON.stringify({
                            checkIds: vm.idss,
                            managerCheckStatus: vm.managerCheckStatus,
                            managerCheckDesc: this.$refs.ruleForm.model.groupCheckDescs,
                        }),
                        url: "" + baseURL + "sys/studWx/putCheckResultByManager",
                        success: function (json) {
                            if (json.status == 200) {
                                vm.$message({
                                    message: json.body.msg,
                                    type: 'success'
                                });
                                vm.modals = false;
                                vm.btnstatus = false;
                                vm.btnval = "确 定";
                                vm.ruleForm.reason = "";
                                vm.ruleForm.groupCheckDesc = "";
                                vm.getTableData();
                            }
                            if (json.status == 400) {
                                vm.$message({
                                    message: json.body.msg,
                                    type: 'warning'
                                });
                                vm.modals = false;
                                vm.btnstatus = false;
                                vm.btnval = "确 定";
                            }
                        }
                    });
                }
            });
        },
        edit() {
            if (vm.idss.length === 0) {
                vm.$message({
                    message: '请选择您要编辑的列表',
                    type: 'warning'
                });
            } else if (vm.idss.length > 1) {
                vm.$message({
                    message: '只能选择一条数据',
                    type: 'warning'
                });
            } else {
                vm.getuniversitys();
                vm.getenroltimes();
                vm.getwxaccounts();
                $.ajax({
                    type: "get",
                    dataType: "json",
                    data: {
                        token: token,
                        id: vm.rowid,
                    },
                    url: "" + baseURL + "sys/studWx/getStudWxInfo",
                    success: function (json) {
                        vm.sysWxAccount = json.body.userName;
                        vm.ruleForm = json.body;
                    }
                });
                vm.usertable = false;
                vm.userform = true;
            }
        },
        submit(formName) {
            var self = this;
            var dataform = this.ruleForm;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    vm.btnstatus = true;
                    vm.btnval = "加载中";
                    $.ajax({
                        type: "post",
                        contentType: "application/json",
                        headers: {
                            "token": token
                        },
                        data: JSON.stringify(
                            dataform
                        ),
                        url: "" + baseURL + "sys/studWx/updateStudWx",
                        success: function (json) {
                            if (json.status == 200) {
                                vm.$message({
                                    message: json.body.msg,
                                    type: 'success'
                                });
                                vm.modal = false;
                                vm.btnstatus = false;
                                vm.btnval = "确 定";
                                setTimeout(function () {
                                    window.location.reload();
                                }, 1000);
                            }
                            if (json.status == 400) {
                                vm.$message({
                                    message: json.body.msg,
                                    type: 'warning'
                                });
                                vm.modal = false;
                                vm.btnstatus = false;
                                vm.btnval = "确 定";
                            }
                        }
                    });
                }
            });
        },
        groupname_all() {
            vm.isgroup1 = true;
            vm.ruleForm.groupId = "";
            vm.onlyStaff = true;
            vm.serach();
        },
        change_group(val) {
            vm.ruleForm.groupId = val;
            vm.getmembers();
            vm.isgroup1 = false;
            if (val === "") {
                vm.onlyStaff = true;
                vm.ruleForm.getmemberId = "";
                vm.ruleForm.wx = "";
                vm.isgroup1 = true;
                vm.serach();
            } else {
                vm.ruleForm.getmemberId = "";
                vm.ruleForm.wx = "";
                vm.onlyStaff = false;
                vm.serach();
            }
        },
        change_statused(val) {
            vm.statused = val;
            vm.serach();
        },
        del() {
            if (vm.idss.length === 0) {
                vm.$message({
                    message: '请选择至少一条数据',
                    type: 'warning'
                });
                return false;
            } else {
                this.$confirm('是否删除?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    })
                    .then(_ => {
                        $.ajax({
                            type: "post",
                            contentType: "application/json",
                            headers: {
                                "token": token
                            },
                            data: JSON.stringify(
                                vm.idss,
                            ),
                            url: "" + baseURL + "sys/studWx/deleteStudWx",
                            success: function (json) {
                                if (json.status == 200) {
                                    vm.$message({
                                        message: json.body.msg,
                                        type: 'success'
                                    });
                                    vm.getTableData();
                                }
                                if (json.status == 400) {
                                    vm.$message({
                                        message: json.body.msg,
                                        type: 'warning'
                                    });
                                    vm.getTableData();
                                }
                            }
                        });
                    })
                    .catch(_ => {});
            }
        },
        compile() {
            console.log(vm.compileData);
            if (vm.compileData.length == 0) {
                vm.$message({
                    message: '请选择编辑的数据',
                    type: 'warning'
                });
            } else if (vm.compileData.length >= 2) {
                vm.$message({
                    message: '只能选择一条数据编辑',
                    type: 'warning'
                });
            } else {
                // vm.putStudWxCompile = true;
                $.ajax({
                    type: "get",
                    dataType: "json",
                    data: {
                        "token": token,
                        "page": 1,
                        "limit": 1000,
                        "countryId": vm.ruleForm.countryId,
                    },
                    url: "" + baseURL + "sys/basedata/university/list",
                    success: function (json) {
                        console.log(json.body)
                        vm.universitys = json.body.list;
                    }
                });
                vm.userform = true;
                vm.usertable = false;
                vm.ruleForm = vm.compileData[0];
                vm.putStudWx = true
            }
        },
        returnBack() {
            window.location.reload();
        },
        entering() {
            console.log(vm);
            // if (vm.ruleForm.sysWxAccount == '' || vm.ruleForm.sysWxAccount == null) {
            //     vm.$message({
            //         message: '请填写来自微信号',
            //         type: 'warning'
            //     });
            //     return false;
            // }
            // if (vm.ruleForm.studentName == '' || vm.ruleForm.studentName == null) {
            //     vm.$message({
            //         message: '请填写学生姓名',
            //         type: 'warning'
            //     });
            //     return false;
            // }
            // if (vm.ruleForm.wxAccount == '' || vm.ruleForm.wxAccount == null) {
            //     vm.$message({
            //         message: '请填写学生微信号',
            //         type: 'warning'
            //     });
            //     return false;
            // };
            $.ajax({
                type: "post",
                dataType: "json",
                cache: false,
                contentType: "application/json",
                headers: {
                    "token": token
                },
                data: JSON.stringify({
                    'id': vm.compileData[0].id,
                    "sysWxAccount": vm.compileData[0].sysWxAccount,
                    "studentName": vm.compileData[0].studentName,
                    "wxAccount": vm.compileData[0].wxAccount,
                    "countryId": vm.compileData[0].countryId,
                    "universityId": vm.compileData[0].universityId,
                    "professionalId": vm.compileData[0].professionalId,
                    // "enrolTime": vm.compileData[0].enrolTime,
                    enrolTime:1,
                    "level": vm.compileData[0].level,
                    "addTime": vm.compileData[0].addTime,
                    "contents": vm.compileData[0].contents
                }),
                url: "" + baseURL + "sys/privatestudWx/updateStudWx",
                success: function (json) {
                    console.log(json);
                    if (json.status == "200") {
                        vm.$message({
                            message: json.body.msg,
                            type: 'success'
                        });
                        setTimeout(function () {
                            window.location.reload();
                        }, 1000);
                    }
                    if (json.status == "400") {
                        vm.$message({
                            message: json.body.msg,
                            type: 'warning'
                        });
                    }
                }
            });
        },
        submitPutStudWx() {
            // vm.ruleForm = {
            //     wx: '',
            //     wxAccount: '',
            //     wxName: '',
            //     countryId: '',
            //     addTime: '',
            //     enrolTime: '',
            //     level: '',
            //     studentName: '',
            //     contents: '',
            //     description: '',
            //     universityId: '',
            //     professionalId: '',
            //     value1: '',
            //     value2: '',
            //     getmemberId: '',
            //     groupCheckDesc: '',
            //     reason: '',
            //     groupId: '',
            //     groupCheckDescs: '',
            //     sysWxAccountName: '',
            // };
            vm.putStudWx = true;
            if (vm.ruleForm.sysWxAccount == '' || vm.ruleForm.sysWxAccount == null) {
                vm.$message({
                    message: '请填写来自微信号',
                    type: 'warning'
                });
                return false;
            }
            // if (vm.ruleForm.studentName == '' || vm.ruleForm.studentName == null) {
            //     vm.$message({
            //         message: '请填写学生姓名',
            //         type: 'warning'
            //     });
            //     return false;
            // }
            if (vm.ruleForm.wxAccount == '' || vm.ruleForm.wxAccount == null) {
                vm.$message({
                    message: '请填写学生微信号',
                    type: 'warning'
                });
                return false;
            };
            $.ajax({
                type: "post",
                dataType: "json",
                cache: false,
                contentType: "application/json",
                headers: {
                    "token": token
                },
                data: JSON.stringify({
                    'id': vm.compileData[0].id,
                    "sysWxAccount": vm.compileData[0].sysWxAccount,
                    "studentName": vm.compileData[0].studentName,
                    "wxAccount": vm.compileData[0].wxAccount,
                    "countryId": vm.compileData[0].countryId,
                    "universityId": vm.compileData[0].universityId,
                    "professionalId": vm.compileData[0].professionalId,
                    // "enrolTime": vm.compileData[0].enrolTime,
                    enrolTime:1,
                    "level": vm.compileData[0].level,
                    "addTime": vm.compileData[0].addTime,
                    "contents": vm.compileData[0].contents
                }),
                url: "" + baseURL + "sys/privatestudWx/putStudWx",
                success: function (json) {
                    console.log(json);
                    if (json.status == "200") {
                        vm.$message({
                            message: json.body.msg,
                            type: 'success'
                        });
                        setTimeout(function () {
                            window.location.reload();
                        }, 1000);
                    }
                    if (json.status == "400") {
                        vm.$message({
                            message: json.body.msg,
                            type: 'warning'
                        });
                    }
                }
            });
        }
    }
});