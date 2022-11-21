'use strict';

var select_questions = new Array();
var type_questions = new Array();
var select_answers = new Array();

select_questions = [
    'Khi thiết lập luật ACL cho bộ định tuyến, cần tuân thủ hướng dẫn chung nào?',
    'Sắp xếp các phương pháp định danh theo thứ tự an toàn tăng dần?',
    'Giao thức nào sau đây không thể định tuyến?',
    'Khi truy cập vào các tài liệu trong một thư mục trên máy tính của bạn, bạn nhận thấy tất cả các tệp đã bị đổi tên thành các tên tệp ngẫu nhiên. Ngoài ra, bạn thấy một tài liệu chứa các hướng dẫn thanh toán để giải mã các tệp tin. Trong trường hợp này bạn đã nhiễm mã độc nào?',
]

type_questions = [
    'Số người yêu của bạn là bao nhiêu? Nhập số lượng: ',
    'Trường bạn đang theo học là: '
]

select_answers = [
    [
        'Không cho phép lưu lượng truy cập dựa trên địa chỉ IP.',
        'Không chặn lưu lượng dựa trên địa chỉ IP.',
        'Quy tắc đầu tiên phải là quy tắc từ chối tất cả.',
        'Quy tắc cuối cùng phải là quy tắc từ chối tất cả.'
    ],
    [
        'Thẻ thông minh, quét võng mạc, mật khẩu',
        'Quét võng mạc, mật khẩu, thẻ thông minh',
        'Tên người dùng và mật khẩu, thẻ thông minh, quét võng mạc',
        'ACL, tên người dùng và mật khẩu, quét võng mạc',

    ],
    [
        'HTTP',
        'DNS',
        'NetBIOS',
        'Telnet',
    ],
    [
        'Encryptionware',
        'Mã độc',
        'Criminalware',
        'Ransomware',
    ],
]


var rightAnswers = [4,3,3,4,'0','KMA'];

var value = '';
var userAnswers = [...Array((select_answers.length+type_questions.length))].map(e => Array().fill(value));

var empty = new Array();
for (var i = 0; i < (select_answers.length + type_questions.length); i ++) {
    empty.push(i+1);
}

var score = 0;
var NoRA = 0;

var element, endTime, hours, mins, msLeft, time;

function getAnswers(value,name){
    userAnswers[name.charAt(5) - 1] = value;
    for (var i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] != "") {
            if (empty.includes(i+1)) {
                empty = empty.filter(function(item) {
                    return item !== i+1;
                })
            }
        } else {
            if (!empty.includes(i+1)) {
                empty.push(i+1);
            }
        }
    }
}



function submitForm(){
    
    if (empty.length > 0) {
        if (empty.length === 1) {
            alert("Câu: " +empty+ " không được để trống.");
        } else {
            alert("Các câu: " +empty+ " không được để trống.");
        }

    } else {
        var r = confirm("Bạn có chắc muốn nộp bài?");
        if (r==true) {
            for (var i = 0; i < userAnswers.length; i ++) {
                if (userAnswers[i] == rightAnswers[i] &&  userAnswers[i] != "") {
                    NoRA += 1;
                }
            }
            score = 10 / (select_questions.length + type_questions.length) * NoRA;
            score = score.toFixed(2);
            localStorage.setItem('NoRA',NoRA);
            localStorage.setItem('Score',score);
            localStorage.setItem('UserAnswers',[...userAnswers]);
            location.replace("result.html")
            
        } 
    }
}

function outOfTime(){
    for (var i = 0; i < userAnswers.length; i ++) {
        if (userAnswers[i] == rightAnswers[i] &&  userAnswers[i] != "") {
            NoRA += 1;
        }
    }
    score = 10 / (select_questions.length + type_questions.length) * NoRA;
    score = score.toFixed(2);
    localStorage.setItem('NoRA',NoRA);
    localStorage.setItem('Score',score);
    localStorage.setItem('UserAnswers',[...userAnswers]);
    location.replace("result.html")
}

function myFunc(variable,value){
    document.getElementById(variable).innerHTML = value;
} 

function removeStorage(){
    localStorage.removeItem("UserAnswers");
    localStorage.removeItem("Score");
    localStorage.removeItem("NoRA");
}

function countdown( elementName, minutes, seconds ){
    
    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }
    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Time is up!";
            outOfTime();
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }
    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}
