var ho = Array();
var ten = Array();
var dem = Array();

ho = ["Ái","An","Anh","Ao","Ánh","Ân","Âu","Âu Dương","Ấu","Bá","Bạc","Bạch","Bàn","Bàng","Bành","Bảo","Bế","Bì","Biện","Bình","Bồ","Chriêng","Ca","Cà","Cái","Cai","Cam","Cảnh","Cao","Cáp","Cát","Cầm","Cấn","Chế","Chiêm","Chu/Châu","Chắng","Chung","Chúng","Chương","Chử","Cồ","Cổ","Công","Cống","Cung","Cù","Cự","Dã","Danh","Diêm","Diệp","Doãn","Du","Duy","Dư","Đái","Đan","Đàm","Đào","Đăng","Đắc","Đầu","Đậu","Đèo","Điêu","Điền","Điều","Đinh","Đình","Đoái","Đoàn","Đoạn","Đôn","Đống","Đồ","Đồng","Đổng","Đới/Đái","Đương","Đường","Đức","Giả","Giao","Giang","Giàng","Giản","Giảng","Giáp","Hưng","H'","H'ma","H'nia","Hầu","Hà","Hạ","Hàn","Hàng","Hán","Hề","Hi","Hình","Hoa","Hoà","Hoài","Hoàng Phủ","Hồng","Hùng","Hứa","Hướng","Kinh","Kông","Kiểu","Kha","Khà","Khai","Khâu","Khiếu","Khoa","Khổng","Khu","Khuất","Khúc","Khương","Khưu","Kiều","Kim","Ly","Lý","La","Lã","Lữ","Lành","Lãnh","Lạc","Lại","Lăng","Lâm","Lầu","Lèng","Lều","Liên","Liệp","Liêu","Liễu","Linh","Loan","Lò","Lô","Lỗ","Lộ","Lộc","Luyện","Lục","Lư","Lương","Lường","Lưu","Ma","Mai","Mang","Mã","Mạc","Mạch","Mạnh","Mâu","Mầu","Mẫn","Minh","Mộc","Mông","Mùa","Mục","Miêu","Niê","Ngạc","Ngân","Nghiêm","Nghị","Ngọ","Ngọc","Ngôn","Ngũ","Ngụy","Nhan","Nhâm","Nhữ","Ninh","Nông","Ong","Ông","Phi","Phí","Phó","Phong","Phù","Phú","Phùng","Phương","Quản","Quán","Quang","Quàng","Quảng","Quách","Quế","Quốc","Quyền","Sái","Sâm","Sầm","Sơn","Sử","Sùng","Sỳ","Tán","Tào","Tạ","Tăng","Tấn","Tất","Tề","Thang","Thanh","Thái","Thành","Thào","Thạch","Thân","Thẩm","Thập","Thế","Thi","Thiều","Thiệu","Thịnh","Thiềm","Thoa","Thôi","Thóng","Thục","Tiêu","Tiết","Tiếp","Tinh","Tòng","Tô","Tôn","Tôn Nữ","Tôn Thất","Tông","Tống","Trang","Tráng","Trác","Trà","Trâu","Tri","Trì","Triệu","Trình","Trịnh","Trung","Trưng","Tuấn","Từ","Tưởng","Tướng","Ty","Uông","Ung","Ưng","Ứng","Vàng","Vâng","Vạn","Văn","Vi","Vĩnh","Viêm","Viên","Việt","Vòng","Võ","Vừ","Vương","Vưu","Vu","Vũ","Xa","Xung","Y","Yên","Nguyễn","Trần","Lê","Hoàng","Huỳnh","Phạm","Đặng","Bùi","Đỗ","Hồ","Ngô","Dương","Lý"];
ten = ["Ái","Ấm","An","Án","Anh","Ánh","Ân","Ấn","Ẩn","Ấp","Ất","Âu","Ấu","Ba","Bá","Bạ","Bạc","Bách","Bạch","Bái","Bài","Ban","Bản","Bàng","Bảng","Báo","Bào","Bảo","Bạt","Báu","Bắc","Bằng","Bặt","Bân","Bật","Bến","Bền","Bi","Bích","Biên","Biền","Biện","Biểu","Bính","Bình","Bố","Bổ","Bộ","Bốc","Bộc","Bôi","Bối","Bồi","Bội","Bôn","Bốn","Bổn","Bông","Bồng","Bổng","Bột","Bùi","Buông","Bút","Bưng","Bưu","Ca","Cai","Cam","Can","Canh","Cảnh","Cán","Cao","Cảo","Cát","Căn","Cầm","Cẩm","Cần","Cẩn","Cận","Cật","Câu","Cầu","Chanh","Chánh","Chăm","Châm","Chân","Chấn","Chẩn","Chấp","Chất","Châu","Chế","Chi","Chí","Chỉ","Chiêm","Chiếm","Chiến","Chiêu","Chiếu","Chinh","Chính","Chình","Chỉnh","Chu","Chú","Chủ","Chúa","Chúc","Chung","Chủng","Chuyên","Chuyển","Chư","Chử","Chức","Chước","Chương","Chưởng","Cổ","Côn","Cổn","Công","Cống","Cơ","Cú","Cù","Cúc","Cung","Củng","Cư","Cứ","Cừ","Cử","Cự","Cương","Cường","Cửu","Cữu","Cựu","Danh","Dao","Dân","Dần","Dẫn","Dật","Di","Dị","Dịch","Diêm","Diễm","Diệm","Diếp","Diệp","Diệu","Dinh","Dĩnh","Do","Doãn","Doanh","Du","Dũ","Dụ","Duật","Dục","Duệ","Dung","Dũng","Dụng","Duy","Duyên","Duyệt","Dư","Dự","Dực","Dược","Dương","Dưỡng","Ðạc","Ðãi","Ðại","Ðam","Ðàm","Ðảm","Ðạm","Ðan","Ðán","Ðàn","Ðản","Ðào","Ðang","Ðàng","Ðảng","Ðào","Ðảo","Ðạo","Ðạt","Ðắc","Ðăng","Ðằng","Ðẳng","Ðẩu","Ðậu","Ðể","Ðệ","Ðiềm","Ðiền","Ðiệp","Ðiều","Ðiểu","Ðinh","Ðính","Ðình","Ðỉnh","Ðĩnh","Ðịnh","Ðoá","Ðoài","Ðoái","Ðoan","Ðoàn","Ðô","Ðổ","Ðộ","Ðốc","Ðối","Ðôn","Ðông","Ðồng","Ðổng","Ðới","Ðơn","Ðủ","Ðức","Ðược","Ðương","Ðường","Em","Gia","Giá","Giả","Giác","Giai","Giải","Giám","Gián","Giản","Giang","Giảng","Giao","Giáo","Giáp","Giàu","Giới","Giũ","Hà","Hạ","Hạc","Hách","Hai","Hài","Hải","Hàm","Hán","Hàn","Hãn","Hạn","Hạng","Hanh","Hành","Hạnh","Hào","Hảo","Hạo","Hạp","Hạt","Hằng","Hân","Hậu","Hiến","Hiền","Hiển","Hiệp","Hiệt","Hiếu","Hiểu","Hiệu","Hinh","Hoa","Hoá","Hoà","Hoạch","Hoài","Hoán","Hoàn","Hoàng"
,"Hoành","Hoạnh","Học","Hoạt","Hồ","Hổ","Hộ","Hối","Hồi","Hội","Hồng","Hợp","Huân","Huấn","Huề","Huệ","Hùng","Huy","Huyên","Huyến","Huyền","Huyện","Huynh","Huỳnh","Hứa","Hưng","Hương","Hướng","Hường","Hưởng","Hưu","Hữu","Hựu","Hy","Hỷ","Ích","Keo","Kế","Kết","Kha","Khá","Khả","Khai","Khái","Khải","Kham","Khán","Khang","Kháng","Khảng","Khanh","Khánh","Khảo","Khắc","Khâm","Khẩn","Khấp","Khâu","Khê","Khiêm","Khiết","Khiêu","Khinh","Khoa","Khoá","Khoả","Khoách","Khoái","Khoan","Khoán","Khoát","Khôi","Khôn","Khổng","Khu","Khúc","Khuê","Khuông","Khuyến","Khuyết","Khuynh","Khương","Khưu","Kiêm","Kiểm","Kiệm","Kiên","Kiện","Kiệt","Kiều","Kim","Kinh","Kính","Kỉnh","Kỳ","Kỷ","Kỵ","La","Lạc","Lai","Lài","Lại","Lam","Lãm","Lan","Lang","Lãng","Lanh","Lành","Lãnh","Lạp","Lăng","Lâm","Lân","Lập","Lâu","Lê","Lễ","Lệ","Lịch","Liêm","Liên","Liễn","Liêu","Liễu","Liệu","Linh","Loan","Long","Lô","Lộc","Lôi","Lời","Lợi","Lụa","Luân","Luận","Luật","Lục","Luỹ","Luyến","Luyện","Lư","Lữ","Lực","Lược","Lương","Lượng","Lưu","Lựu","Ly","Lý","Mai","Mại","Mãn","Mạnh","Mão","Mạo","Mẫn","Mầu","Mậu","Mây","Mịch","Minh","Mít","Mộc","Mưu","Nam","Năm","Năng","Nga","Ngạc","Ngãi","Ngạn","Ngân","Nghê","Nghệ","Nghi","Nghị","Nghĩa","Nghiêm","Nghiên","Nghiệp","Nghinh","Ngọ","Ngoã","Ngoan","Ngoạn","Ngọc","Ngô","Ngộ","Ngôn","Ngũ","Ngụ","Ngung","Nguyên","Nguyện","Nguyệt","Ngữ","Ngự","Nhã","Nhạc","Nham","Nhâm","Nhan","Nhàn","Nhạn","Nhậm","Nhân","Nhẫn","Nhất","Nhật","Nhi","Nhĩ","Nhiệm","Nhiên","Nhiếp","Nhiêu","Nhiễu","Nho","Nhu","Nhuận","Nhuệ","Nhung","Như","Nhự","Nhưỡng","Niêm","Niệm","Niên","Ninh","Nội","Nông","Nữ","Nương","Oai","Oanh","Oánh","Ơn","Phả","Phách","Phái","Phàm","Phạm","Phan","Phán","Phát","Phấn","Phê","Phi","Phiên","Phiến","Phiệt","Phiêu","Phó","Phong","Phóng","Phòng","Phô","Phổ","Phồn","Phu","Phú","Phủ","Phụ","Phúc","Phục","Phùng","Phụng","Phức","Phước","Phương","Phượng","Qua","Quá","Quả","Quan","Quán","Quản","Quang","Quảng"
,"Quân","Quận","Quế","Quốc","Quít","Quy","Quý","Quỳ","Quyên","Quyến","Quyền","Quyết","Quýnh","Quỳnh","Sách","Sám","San","Sang","Sáng","Sanh","Sảnh","Sao","Sát","Sắc","Sâm","Sinh","Sĩ","Siêu","Sinh","Sính","Soạn","Song","Sở","Sơn","Sung","Sử","Sứ","Sự","Sương","Sửu","Tá","Tạ","Tác","Tài","Tác","Tam","Tám","Tạo","Tăng","Tâm","Tầm","Tân","Tấn","Tần","Tập","Tất","Tây","Tế","Thạch","Thaí","Thảng","Thanh","Thành","Thạnh","Thao","Thảo","Thăng","Thắng","Thân","Thận","Thập","Thâu","Thế","Thể","Thi","Thí","Thì","Thị","Thích","Thiên","Thiện","Thiệp","Thiết","Thinh","Thịnh","Thọ","Thoa","Thoả","Thoại","Thoàn","Thôi","Thông","Thống","Thời","Thu","Thủ","Thụ","Thuấn","Thuần","Thuận","Thuật","Thúc","Thục","Thuý","Thuỳ","Thuỷ","Thuỵ","Thuyên","Thuyết","Thư","Thứ","Thừa","Thức","Thực","Thước","Thược","Thương","Thường","Thưởng","Thượng","Thy","Tích","Tiêm","Tiềm","Tiên","Tiến","Tiển","Tiễn","Tiếp","Tiết","Tiêu","Tiếu","Tín","Tinh","Tính","Tình","Tỉnh","Tĩnh","Toa","Toả","Toại","Toan","Toán","Toàn","Toản","Toát","Tòng","Tô","Tố","Tộ","Tổ","Tôn","Tồn","Tống","Tốt","Trà","Trác","Trạc","Trạch","Trai","Trang","Tráng","Tràng","Trạng","Trát","Trắc","Trâm","Trầm","Trân","Trấn","Trần","Tri","Trí","Trì","Trị","Trích","Triêm","Triển","Triết","Triều","Triệu","Trinh","Trình","Trịnh","Trọng","Trợ","Trụ","Truật","Trúc","Trung","Truyền","Trữ","Trứ","Trực","Trưng","Trừng","Trước","Trương","Trường","Trưởng","Tú","Tuân","Tuấn","Tuần","Túc","Tuế","Tuệ","Tung","Tùng","Tụng","Tuy","Tuý","Tuỵ","Tuyên","Tuyến","Tuyền","Tuyển","Tuyết","Tư","Tứ","Từ","Tự","Tước","Tương","Tường","Tưởng","Tửu","Tựu","Ty","Tý","Tỵ","Uẩn","Uy","Uỷ","Uyên","Uyển","ƯÔng","Ưu","Vang","Văn","Vân","Vệ","Vị","Viên","Viễn","Viện","Việt","Vinh","Vĩnh","Vịnh","Võ","Vọng","Vũ","Vui","Vỹ","Vương","Vượng","Xa","Xá","Xoài","Xuân","Xuyên","Xuyến","Xương","Xướng","Yêm","Yểm","Yên","Yến"];


var hoten = String();
var diachi = String();
var gioitinh = String();
var ngaysinh = String();
var email = String();
var dienthoai = String();
var khoa = Array();
var username = String();
var password = String();
var re_password = String();
var ghichu = String();

const varToString = varObj => Object.keys(varObj)[0]

window.onload = function() {
    document.getElementById("hoten").focus();
  }


function change(value,arg) {
    if (value.length == 0) {
        eval(arg + " = String();");
    } else {
        eval(arg + " = value;");
    }
}

function secure(arg_name){
    if (document.getElementById(arg_name).value.toLowerCase().includes("script")) {
        document.getElementById(arg_name + "_err").innerHTML = "<small>Chứa mã không hợp lệ!</small>";
        return false;
    } else {
        document.getElementById(arg_name + "_err").innerHTML = "";
        return true;
    }
}

function checkLength(arg_name, arg, value1,value2){
    if (arg.length == 0 || arg.length > 50) {
        document.getElementById(arg_name).innerHTML = value1;
        return false;
    } else {
        document.getElementById(arg_name).innerHTML = value2;
        return true;
    }
}

function chechFormatTen() {
    var elements = Array();
    elements = hoten.split(" ");
    elements = elements.filter(entry => entry != "");
    if (elements.length == 1){
        document.getElementById("hoten_err").innerHTML = "<small>Vui lòng nhập đầy đủ họ tên</small>";
        return false;
    } else {
        if (ho.map(x => x.toLowerCase()).includes(elements[0].toLowerCase()) && ten.map(x => x.toLowerCase()).includes(elements[elements.length - 1].toLowerCase())) {
            elements = elements.map(e => (e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()))
            hoten = elements.join(" ");
            document.getElementById("hoten").value = hoten;
            document.getElementById("hoten_err").innerHTML = "";
            
            return true;
        }
        else {
            document.getElementById("hoten_err").innerHTML = "<small>Vui lòng nhập đúng định dạng tên!</small>";
            return false;
        }
    }
}

function checkTen(){
    if (checkLength(varToString({hoten}) + "_err",hoten,"<small>Vui lòng nhập họ tên, không quá 50 ký tự</small>","")) {
        if (chechFormatTen()){
            document.getElementById("hoten").addEventListener('keyup', function(evt) {
                if (evt.key == 13) { 
                    console.log(5);
                    evt.preventDefault();
                    document.getElementById('diachi').focus();
                }  
            });
            
            return true;
        }  else return false;
    }
}


function checkDiaChi(){
    if (checkLength(varToString({diachi}) + "_err",diachi,"<small>Vui lòng nhập địa, không quá 50 ký tự</small>","")) {
        if (secure(varToString({diachi}))) {
            return true;

        } else return false;
    } 

}

function showPass(arg1,arg2) {
    if (document.getElementById(arg2).value == 0) {
        document.getElementById(arg2).value = 1;
        document.getElementById(arg1).type = "text";
    } else {
        document.getElementById(arg2).value = 0;
        document.getElementById(arg1).type = "password";
    }
}

function submitForm() {
    // var check = false;
    // if (checkTen()) {
    //     if(chechFormatTen()) {
    //         check = true;
    //     }
    // }

    // if (check) {
    //     if (checkDiaChi()) {
    //         check = true;
    //     }
    // }
}

$(document).on('keyup', 'input,select', function (e) {
    if (e.key == 13) {
        e.preventDefault();
        var $next = $('[inputIndex=' + (+this.inputIndex + 1) + ']');
        console.log($next.length);
        if (!$next.length) {
            $next = $('[inputIndex=1]');        
        }
        $next.focus().click();
    }
});