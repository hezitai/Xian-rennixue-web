function CreateNewSocket(obj){
    window.noPluginNum = 0;
    var _this = this;
    var showAlertMessage = true;
    var tryResetOnline = true;
    $('.alertMessage').css('display','none');
    this.init = function(){
        if ('WebSocket' in window) {
            this.ws = new WebSocket("ws://" + obj.url);
        } else if ('MozWebSocket' in window) {
            this.ws = new MozWebSocket("ws://" + obj.url);
        } else {
            this.ws = new SockJS("http://" + obj.url);
        }
        this.ws.onopen = function(ev){
            $('.alertMessage').css('display','none');
            obj.onOpen(ev);
            setInterval(function(){
                if(obj.sendData.split('@')[0] == 'Heartbeat'){
                    if(window.TkTime == '00:00:00'){
                        _this.ws.send('Heartbeat@' + window.TkTime);
                    } else {
                        _this.ws.send('Heartbeat@' + window.heartbeat);
                    }
                } else {
                    if(window.TkTime == '00:00:00'){
                        _this.ws.send('TaskList@' + window.TkTime);
                    } else {
                        _this.ws.send('TaskList@' + window.taskList);
                    }
                }
            }, 1000);
        };
        
        this.ws.onmessage = function(ev){
            $('.alertMessage').css('display','none');
            obj.onMessage(ev);
            tryResetOnline = true;
            showAlertMessage = true;
        };
        this.ws.onclose = function(ev){
            obj.onClose(ev);
            var func = function(){
                if (showAlertMessage) {
                    showAlertMessage = false;
                    $('.alertMessage').css('display','block');
                } else {
                    return;
                }
            }
            func();
            var timerss = setInterval(function() {
                if (_this.ws.readyState == 2 || _this.ws.readyState == 3) {
                    _this.init()
                } else if (_this.ws.readyState == 1) {
                    clearTimeout(timerss);
                }
            }, 500);         
        }
        this.ws.onerror = function(er){
            $('.alertMessage').css('display','block');
            obj.onError(er);
            var funcs = function(){
                if (tryResetOnline) {
                    tryResetOnline = false;
                    $.ajax({
                        url:'https://127.0.0.1:49411/',
                        type:'GET',
                        success:function(res){
                            console.error(res);
                        },
                        error:function(error){

                        }
                    })
                } else {
                    return;
                }
            }
            funcs();
            Task().plugNoRuningCallback();
        }
    }
    this.init();
    return this.ws;
}

function Task(){
    var _this = this;
    banProcessCallback = function(){
        $('.ban-sys').css('display', 'block');
    }
    plugNoRuningCallback = function(){
        
    };
    perOnMessage = function(result){
        if(typeof result == 'string'){
            var socketNum = result.split('##')[1];
            var socketItem = result.split('##')[2];
            if(socketNum == 1){
                var TaskArray = JSON.stringify(socketItem);
            } else if(socketNum == 3){
                if(window.isError == true){
                    _this.plugNoRuningCallback();
                }
            }
            return {
                socketNum,
                socketItem
            }
        }
    }
    //检查是否有非法进程
    checkBadTask = function(taskStr){
        for(var i in window.setPlugin){
            if(taskStr.indexOf(window.setPlugin[i]) != -1){
                //检索到了可疑进程
                _this.banProcessCallback();
                return false
            } else {
                $('.ban-sys').css('display', 'none');
            }
        };
    }
    return {
        banProcessCallback,plugNoRuningCallback,perOnMessage,checkBadTask
    }
}
