var date = new Date();
        
var year = date.getFullYear();        //年 ,从 Date 对象以四位数字返回年份
var month = date.getMonth() + 1;      //月 ,从 Date 对象返回月份 (0 ~ 11) ,date.getMonth()比实际月份少 1 个月
var day = date.getDate();             //日 ,从 Date 对象返回一个月中的某一天 (1 ~ 31)

var hours = date.getHours();          //小时 ,返回 Date 对象的小时 (0 ~ 23)
var minutes = date.getMinutes();      //分钟 ,返回 Date 对象的分钟 (0 ~ 59)
var seconds = date.getSeconds();      //秒 ,返回 Date 对象的秒数 (0 ~ 59)   

//获取当前系统时间  
var currentDate = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;

//修改月份格式
if (month >= 1 && month <= 9) {
    month = "0" + month;
    }

//修改日期格式
if (day >= 0 && day <= 9) {
    day = "0" + day;
    }

//修改小时格式
if (hours >= 0 && hours <= 9) {
    hours = "0" + hours;
    }

//修改分钟格式
if (minutes >= 0 && minutes <= 9) {
    minutes = "0" + minutes;
    }

//修改秒格式
if (seconds >= 0 && seconds <= 9) {
    seconds = "0" + seconds;
    }

//获取当前系统时间  格式(yyyy-mm-dd hh:mm:ss)
var currentFormatDate = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
var time = document.getElementById('time');
time.value = currentFormatDate

var student_id = "2020110" + Math.floor(Math.random(0, 1) * 900 + 1);;
document.getElementById("student_id").value = student_id;

const lastName = ['周','吴','郑','王','赵','钱','孙','李','冯','陈','朱','戴','严','孔','顾','常','潘','蒋','何','吕'];
const firstName = ['治华','卫川','浩宇','英杰','文博','天佑','烨','维奇','远超','帅','俊楠','艺檬','可欣','雯','文倩','馨','月','海迪','倩倩','文祥','伟','静','丽'];
const index = Math.floor(Math.random(0,1)*lastName.length);
const index1 = Math.floor(Math.random(0,1)*firstName.length);
const student_name = lastName[index].concat(firstName[index1]);
document.getElementById("student_name").value = student_name;


$('#chooseImage').on('change',function(){
    var filePath = $(this).val(),         //获取到input的value，里面是文件的路径
        fileFormat = filePath.substring(filePath.lastIndexOf(".")).toLowerCase(),
        src = window.URL.createObjectURL(this.files[0]); //转成可以在本地预览的格式
        
    // 检查是否是图片
    if( !fileFormat.match(/.png|.jpg|.jpeg/) ) {
        error_prompt_alert('上传错误,文件格式必须为：png/jpg/jpeg');
        return;  
    }

    $('#cropedBigImg').attr('src',src);
    $('#chooseImage').attr('class',"hide");
});