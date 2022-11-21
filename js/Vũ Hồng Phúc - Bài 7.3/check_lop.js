// var malop = String();
var tenlop  = String();
var gvcn = String();

const varToString = varObj => Object.keys(varObj)[0]

function change(value,arg) {
    if (value.length == 0) {
        eval(arg + " = " + "String();");
    } else {
        eval(arg + " = " + "value" + ";");

    }
    // console.log(arg);
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
    if (length_err(varToString({tenlop}),tenlop,"tên lớp") && length_err(varToString({gvcn}),gvcn,"tên GVCN")) {
        if (secure(varToString({tenlop})) && secure(varToString({gvcn}))) {
            document.getElementById("query").innerHTML = "Đã thêm vào CSDL";
            console.log(true);
        }
    }
}