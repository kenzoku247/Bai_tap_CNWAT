<?php
    session_start();
    include('connection.php');

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $subject = $_POST["subject"];
        $term = $_POST["term"];
        $tp1 = $_POST["tp1"];
        $tp2 = $_POST["tp2"];
        $thi = $_POST["thi"];
        $kthp = ($tp1*0.3 + $tp2*0.7)*0.3 + $thi*0.7;
        $kthp = strval(round($$kthp, 1));
        var_dump($subject,$term,$tp1,$tp2,$thi,$kthp);
        $query = "INSERT INTO bangdiem(tenHocPhan,hocKy,dtp1,dtp2,dthi,dtkhp) VALUES ('$subject','$term','$tp1','$tp2','$thi','$kthp')";
        // $query = "INSERT INTO bangdiem(tenHocPhan,hocKy,dtp1,dtp2,dthi,dtkhp) VALUES ('mon hoc','1','$tp1,'$tp2','$thi','$kthp')";
        $result = mysqli_query($con,$query);
        var_dump($result);
        if($result == true){
            header("Location: transcript.php");
            die;
        } else {
            echo "
                <script>
                    alert('Something Went Wrong!');
                </script>";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transcript</title>
    <link rel="stylesheet" href="transcript.css" type="text/css">
</head>
<body>
    <div class="Header">
        <div class="Logo">
            <img src="logoKMA.png" alt="">
        </div>
        <div class="LeftHeader">
            <h2 style="font-weight: bold;">BỘ GIÁO DỤC & ĐÀO TẠO</h2>
            <h2 style="font-weight: bold;">HỌC VIỆN KỸ THUẬT MẬT MÃ</h2>
            <div class="hl"></div>
        </div>
        <div class="RightHeader">
            <h2 style="font-weight: bold; font-size: 20px">CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</h2>
            <h3 style="font-weight: bold;">Độc lập - Tự do - Hạnh phúc</h2>
            <div class="hl"></div>
        </div>
    </div>
    <div class="Body">
        <div class="Title">
            <h1 style="font-weight: bold;">BẢNG ĐIỂM HỌC TẬP</h1>
            <h3>(Theo GĐ công nhận TN số 2345/QĐ-HVKTMM ngày 03/11/2022)</h3>
        </div>
        <div class="Info">
            <div class="LeftInfo">
                <h3>Họ và tên: <b>VŨ HỒNG PHÚC</b></h3>
                <h3>Ngày sinh: <b>32/13/2000</b></h3>
                <h3>Cấp đào tạo: <b>TCCN</b></h3>
                <h3>Ngành học: <b>An toàn thông tin</b></h3>
            </div>
            <div class="RightInfo">
                <h3>Nơi sinh: <b>Thái Bình</b></h3>
                <h3>Hệ đào tạo: <b>Chính quy</b></h3>
                <h3>Khoá học: <b>2019 - 2024</b></h3>
            </div>
        </div>
        <div class="Table">
            <h2 ><b>Kết quả học tập</b></h2>
            <table border=1 cellspacing=0 cellpadding=10>
                <tr align="center">
                    <td colspan="7"><b>Năm học 2022 - 2023</b></td>
                </tr>
                <tr align="center">
                    <td><b>STT</b></td>
                    <td><b>Tên học phần</b></td>
                    <td><b>Học kỳ</b></td>
                    <td><b>ĐTP1</b></td>
                    <td><b>ĐTP2</b></td>
                    <td><b>ĐTHI</b></td>
                    <td><b>ĐTKHP</b></td>
                </tr>
                <?php
                    $i = 1;
                    $rows = mysqli_query($con, "SELECT * FROM bangdiem ORDER BY stt");
                    
                ?>
                <?php
                    foreach($rows as $row):
                ?>
                    <tr align="center">
                        <td>
                            <?php echo $i++;?>
                        </td>
                        <td>
                            <?php echo $row["tenHocPhan"];?>
                        </td>
                        <td>
                            <?php echo $row["hocKy"];?>
                        </td>
                        <td>
                            <?php  echo $row["dtp1"];?>
                        </td>
                        <td>
                            <?php echo  $row["dtp2"];?>
                        </td>
                        <td>
                            <?php  echo $row["dthi"];?>
                        </td>
                        <td>
                            <?php  echo $row["dtkhp"];?>
                        </td>
                    </tr>
                <?php endforeach?>
                <tr align="center">
                    <td colspan="6"><b>Điểm trung bình cả năm</b></td>
                    <td>
                        <?php $tbinh = mysqli_query($con, "SELECT avg(dtkhp) as dtb FROM bangdiem");
                            $numratingsa = mysqli_fetch_all($tbinh, MYSQLI_ASSOC);
                            $myLastElementa = end($numratingsa);
                            $stringo = implode($myLastElementa);
                            $roundin = round($stringo, 1);
                            echo $roundin;
                        ?>
                    
                    </td>
                </tr>
            </table>
            <div>
                <form action="transcript.php" method="POST" autocomplete="off" enctype="multipart/form-data">
                    <h3>Them mon:</h3>
                    <label for="subject">Ten hoc phan: </label>
                    <input type="text" name="subject" id="subject" required value=""> 
                    <label for="term">Hoc Ky: </label>
                    <input type="text" name="term" id="term" required value=""> <br>
                    <label for="tp1">Diem TP 1: </label>
                    <input type="text" name="tp1" id="tp1" required value=""> <br>
                    <label for="tp2">Diem TP 2: </label>
                    <input type="text" name="tp2" id="tp2" required value=""> <br>
                    <label for="thi">Diem thi: </label>
                    <input type="text" name="thi" id="thi" required value=""> <br>
                    <input type="submit" value="Upload" name="submit">
                </form>
            </div>
        </div>
    </div>
    
</body>
</html>