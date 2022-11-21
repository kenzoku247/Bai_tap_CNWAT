var maSV = String();
var hoten = String();
var diachi = String();
var ngaysinh = String();

const varToString = varObj => Object.keys(varObj)[0];



function change(value,arg) {
    if (value.length == 0) {
        eval(arg + " = String();");
    } else {
        eval(arg + " = value;");
    }
}

function checkMaSV(){
    var khoa = document.getElementById("khoa").value;
    var lop = document.getElementById("lop").value;
    maSV = document.getElementById("maSV").value;
    if (maSV.length > 8 || maSV.length <= 6) {
        document.getElementById("maSV_err").innerHTML = "<small>Sai định dạng mã sinh viên!</small>";
        return false;
    } else {
        if (!maSV.includes("AT" + khoa + lop)) {
            document.getElementById("maSV_err").innerHTML = "<small>Mã sinh viên và khoá, lớp không trùng khớp!</small>";
            return false;
        } else {
            document.getElementById("maSV_err").innerHTML = "";
            return true;
        }
    }
}


function length_err(arg_name , arg, name){
    if (arg.length == 0 || arg == "") {
        document.getElementById(arg_name + "_err").innerHTML = "<small>Vui lòng nhập " + name +"!</small>";
        return false;
    } else {
        document.getElementById(arg_name + "_err").innerHTML = "";
        return true;
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

function kiemtra() {
    var check = false;
    if (checkMaSV()) {
        check = true;
        if (length_err(varToString({hoten}),hoten,"họ tên") && length_err(varToString({diachi}),diachi,"địa chỉ")) {
            check = true;
            if (secure(varToString({hoten})) && secure(varToString({diachi}))) {
                check = true;
                if (ngaysinh.length == 0) {
                    document.getElementById("ngaysinh_err").innerHTML = "<small>Vui lòng nhập ngày sinh!</small>";
                    check =  false;
                } else {
                    document.getElementById("ngaysinh_err").innerHTML = "";
                    check = true;
                }
            } else {
                check = false;
            }
        } else {
            check = false;
        }
    } else {
        check = false;
    }
    if (check) {
        document.getElementById("query").innerHTML = "Đã thêm vào CSDL";
    }
}