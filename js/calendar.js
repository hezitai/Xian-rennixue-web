import calendar from '../plugins/calendar/Calendar.vue'

export default {
    name: 'app',
    components: {
        calendar
    },
    data(){
        return {
            calendar1:{
                value:[2018,2,16], //默认日期
                // lunar:true, //显示农历
                weeks:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                events:{
                    '2018-2-14':'$408','2018-2-15':'$460','2018-2-16':'$500',
                },
                select(value){
                    console.log(value.toString());
                }
            },
            calendar2:{
                range:true,
                value:[[2018,2,16],[2019,2,16]], //默认日期
                lunar:true, //显示农历
                begin:[2017,2,16], //可选开始日期
                end:[2019,2,16], //可选结束日期
                select(begin,end){
                    // console.log(begin.toString(),end.toString());
                }
            },
            calendar3:{
                display:"2018/02/16",
                show:false,
                zero:true,
                value:[2018,2,16], //默认日期
                lunar:true, //显示农历
                select:(value)=>{
                this.calendar3.show=false;
        this.calendar3.value=value;
        this.calendar3.display=value.join("/");
    }
    },
        calendar4:{
            display:"2018/02/16 ~ 2019/02/16",
                show:false,
                range:true,
                zero:true,
                value:[[2018,2,16],[2019,2,16]], //默认日期
                lunar:true, //显示农历
                select:(begin,end)=>{
                console.log(begin,end)
                this.calendar4.show=false;
                this.calendar4.value=[begin,end];
                this.calendar4.display=begin.join("/")+" ~ "+end.join("/");
            }
        },
    }
    },
    methods:{
        openByDrop(e){
            this.calendar3.show=true;
            this.calendar3.left=e.target.offsetLeft+19;
            this.calendar3.top=e.target.offsetTop+70;

            e.stopPropagation();
            window.setTimeout(()=>{
                document.addEventListener("click",(e)=>{
                this.calendar3.show=false;
            document.removeEventListener("click",()=>{},false);
        },false);
        },1000)
        },
        openByDialog(){
            this.calendar4.show=true;
        },
        closeByDialog(){
            this.calendar4.show=false;
        }
    }
}