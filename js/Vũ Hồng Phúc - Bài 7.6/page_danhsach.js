var data = Array();

data = [
    ["Hoàng Thị Thảo", "23/6/1990","Nữ"],
    ["Nguyễn Thanh Tùng", "14/4/1992","Nam"],
    ["Hoàng Thị Ngân", "12/12/1992","Nữ"],
    ["Ngô Mạnh Quân", "27/9/1991","Nam"],
]

var wrapper = document.getElementById('Danhsach');
var values = '';
values += '<tr><td><input type="checkbox" name="" value="0" id="checkAll" onclick="checkedAll(this.id,this.value);"></td><td>Họ tên</td><td>Ngày sinh</td><td>Giới tính</td></tr>'
data.map(x => {
    values += '<tr id="values'+(data.indexOf(x))+'" onclick="selectRow(this)" style="background-color: ';
    if (data.indexOf(x) % 2 == 0) {
        values += '#dbdddb;"';
    } else {
        values += '#f9fb60;"';
    }
    values += ' onmouseover="handleMouseOver(this.id)" onmouseout="handleMouseOut(this.id)"><td><input type="checkbox" id="check'+(data.indexOf(x))+'" value="0" onclick="selectRow(this);"></td><td id="hoten">'+(x[0])+'</td><td id="ngaysinh">'+(x[1])+'</td><td id="gioitinh">'+(x[2])+'</td></tr>';
})
wrapper.innerHTML = values;



function handleMouseOver(id) {
    document.getElementById(id).style.backgroundColor = "green";
    document.getElementById(id).style.cursor = "pointer";
}

function handleMouseOut(id) {
    if (id.substring(6,) % 2 == 0) {
        document.getElementById(id).style.backgroundColor = "#dbdddb";
    } else {
        document.getElementById(id).style.backgroundColor = "#f9fb60";

    }
}

function checkedBox(id,value) {
    // console.log(document.getElementById("values" + id.substring(5,)))
    if (value == 1) {
        if (id.substring(5,) % 2 == 0) {
            document.getElementById("values" + id.substring(5,)).style.backgroundColor = "#dbdddb";
        } else {
            document.getElementById("values" + id.substring(5,)).style.backgroundColor = "#f9fb60";
    
        }
        document.getElementById("values" + id.substring(5,)).onmouseover = function () {handleMouseOver("values" + id.substring(5,))};
        document.getElementById("values" + id.substring(5,)).onmouseout = function () {handleMouseOut("values" + id.substring(5,))};
        document.getElementById(id).value = 0;
        document.getElementById(id).checked = false;

    } else {
        document.getElementById("values" + id.substring(5,)).style.backgroundColor = "yellow";
        document.getElementById("values" + id.substring(5,)).onmouseover = "";
        document.getElementById("values" + id.substring(5,)).onmouseout = "";
        document.getElementById(id).value = 1;
        document.getElementById(id).checked = true;
    }
    checkedTitle();
}

function checkedAll(id,value){
    if (value == 0) {
        document.getElementById(id).value = 1;    
        for (let i = 0; i < data.length; i++) {
            document.getElementById("check" + i).checked = true;
            if (document.getElementById("check" + i).value != 1) {
                checkedBox("check" + i,document.getElementById("check" + i).value);
            }
        }
    } else {
        document.getElementById(id).value = 0;    
        for (let i = 0; i < data.length; i++) {
            document.getElementById("check" + i).checked = false;
            if (document.getElementById("check" + i).value == 1) {
                checkedBox("check" + i,document.getElementById("check" + i).value);
            }

        }
    }
}

function checkedTitle(){
    var listchecked = Array();
    for (let i = 0; i < data.length; i++) { 
        listchecked.push(document.getElementById("check" + i).value)
    }
    if (listchecked.filter(x => x == 1).length == 4) {
        document.getElementById("checkAll").value = 1; 
        document.getElementById("checkAll").checked = true;

    } 
    else {
        document.getElementById("checkAll").value = 0;
        document.getElementById("checkAll").checked = false;
    }

}

function selectRow(row){
    var firstInput = row.getElementsByTagName('input')[0];
    firstInput.checked = !firstInput.checked;
    checkedBox(firstInput.id,firstInput.value);
    // checkedTitle();
}