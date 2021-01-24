function nameCustomer() {
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    let LOWER = 'abcdefghijklmnopqrstuvwxyz ';
    let name;
    let check = false;
    do {
        name = prompt("nhập tên khách hàng");
        let a = name.length;
        for (let i = 0; i < a; i++) {
            let kyTu = name.charAt(i);
            let b = UPPER.indexOf(kyTu);
            let c = LOWER.indexOf(kyTu);
            if (b == -1 && c == -1) {
                check = false;
                break
            } else {
                check = true;
            }
        }
        if (name.charAt(0) == " " || name.charAt(a - 1) == " ") {
            name=name.trim();
        }

    } while (!check);
    let index=LOWER.indexOf(name.charAt(0));
    if (index!=-1){
        let  vietHoaChuDau=name.charAt(0).toUpperCase();
        let xoaChuDau=name.slice(1);
        name=vietHoaChuDau+xoaChuDau;
    };
    let arrName=[];
    for(let i=0;i<name.length;i++){
        arrName[i]=name.charAt(i);
    }
    let viTriKyTuInHoa=0;
    let a=arrName.length;
    for (let i=1;i<a;i++){
        if(arrName[i]==" " && arrName[i+1]==" "){
            arrName.splice(i,1);
            i--;
        }else if(arrName[i]==" " && arrName[i+1]!=" "){
            arrName[i+1]=arrName[i+1].toUpperCase();
        }
    }
    a=arrName.length;
    let bienDem=0;
    for (let i=0;i<a;i++){
        if (arrName[i]==" "){
            for (let j=i;j>i-bienDem;j--){
                arrName[j]=arrName[j].toLowerCase();
            }
            bienDem=0;
        }else{
            bienDem++;
        }
    }
    for (let i=a;i>0;i--){
        if(arrName[i]==" "){
            for (let j=i+2; j<a;j++){
                arrName[j]=arrName[j].toLowerCase();
            }
            break;
        }
    }
    let strName=arrName.join("");
    alert(strName);
    return strName;
}
function cmndCustomer() {
    let cmnd;
    let checkcmnd=false;
    do{
        cmnd=prompt("nhập số cmnd");
        console.log(cmnd.length);
        if (cmnd.length==8){
            if(0<=cmnd&&cmnd<=99999999){
                alert("oke dung roi");
                checkcmnd=false;
            }else {
                alert("hay nhap lai");
                checkcmnd=true;
            }
        }else {
            alert("hay nhap lai");
            checkcmnd=true;
        }
    }while (checkcmnd);
    return cmnd;
}
function dayRents() {
    let dayRents;
    let checkdR=false;
    do{
        dayRents=prompt("nhập số ngày thuê");
        if (dayRents>0){
            alert("oke dung roi");
            checkdR=false
        }else {
            alert("hay nhap lai");
            checkdR=true;
        }
    }while (checkdR);
    return dayRents;
}
function nguoiDiCung() {
    let nguoiDiCung;
    let checkdR=false;
    do{
        nguoiDiCung=prompt("nhập số người đi cùng bạn");
        if (nguoiDiCung>0){
            alert("oke dung roi");
            checkdR=false
        }else {
            alert("hay nhap lai");
            checkdR=true;
        }
    }while (checkdR);
    return nguoiDiCung;
}
function birthdayCustomer() {
    let checkNS = false;
    let ngaySinh="";
    do {

         ngaySinh = prompt("nhập ngày sinh");
        let ArrayNS = [];
        for (i = 0; i < ngaySinh.length; i++) {
            ArrayNS.push(ngaySinh.charAt(i));
        }
        if (ngaySinh.length == 10) {
            let thang=ArrayNS[3]+ArrayNS[4];
            console.log(thang);
            if (ArrayNS[0] <=3 && ArrayNS[1] >= 0 && ArrayNS[2] == "/" && thang<=12 && ArrayNS[5] >= "/" && ArrayNS[6] >= 0 && ArrayNS[7] >= 0 && ArrayNS[8] >= 0 && ArrayNS[9] >= 0) {
                alert("oke dung roi")
                checkNS = false;
            } else {
                alert("hay nhap lai");
                checkNS = true;
            }
        } else {
            alert("hay nhap lai");
            checkNS = true;
        }
    } while (checkNS);
    return ngaySinh;
}
function emailCustomer() {
    let kiemTraChuSo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.@";
    let kiemTraChu = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let email = "";
    let checkEmail = false;
    let count1 = 0;
    let count2 = 0;
    let luuViTri1 = 0;
    let luuViTri2 = 0;
    do {
        email = prompt("nhập email");
        let kyTu0 = email.charAt(0);
        let b = kiemTraChu.indexOf(kyTu0);
        let strLength = email.length;
        let kyTuCuoi = email.charAt(strLength - 1);
        if (b != -1) {
            for (let i = 1; i < strLength; i++) {
                let kyTu_i = email.charAt(i);
                let c = kiemTraChuSo.charAt(i);
                if (c != -1) {
                    if (kyTu_i == "@") {
                        count1++;
                        luuViTri1 = i + 1;
                    } else if (kyTu_i == ".") {
                        count2++;
                        luuViTri2 = i;
                    }
                } else {
                    alert("hay nhap lai");
                    checkEmail = false;
                    break;
                }
            }
            if (count1 == 1 && count2 == 1 && luuViTri2 > luuViTri1 && kyTuCuoi != ".") {
                checkEmail = true;
                alert("oke dung roi");
            } else {
                alert("hay nhap lai");
                checkEmail = false;
                count1 = 0;
                count2 = 0;
                luuViTri1 = 0;
                luuViTri2 = 0;
            }
        } else {
            alert("hay nhap lai");
            checkEmail = false;
        }
    } while (!checkEmail);
    return email;
}
let arrCustomer=[];
let arr=[];
function addNewCustomer(){
    let n=parseInt(prompt("nhập số lượng khách hàng muốn thêm"));
    for(let i=0;i<n;i++) {
        arr[i]=new Array(11);
        arr[i][0] = nameCustomer();
        arr[i][1] = cmndCustomer();
        arr[i][2] = birthdayCustomer();
        arr[i][3] = emailCustomer();
        arr[i][4] = prompt("nhập địa chỉ");
        arr[i][5] = prompt("nhập loại Customer");
        arr[i][6] = prompt("nhập phiếu giảm giá");
        arr[i][7] = nguoiDiCung();
        arr[i][8] = dayRents();
        arr[i][9] = prompt("nhập loại dịch vụ");
        arr[i][10] =prompt("nhập loại phòng thuê");
        arrCustomer.push(arr[i]);
    }
}
function displayCustomers() {
    let tableString = '<table border="1" style="border-collapse: separate">\n' +
        '    <tr>\n' +
        '        <th>STT</th>\n' +
        '        <th>Tên</th>\n' +
        '        <th>CMND</th>\n'+
        '        <th>Ngày Sinh</th>\n' +
        '        <th>Email</th>\n' +
        '        <th>Địa chỉ</th>\n' +
        '        <th>Loại Customer</th>\n' +
        '        <th>Giảm giá</th>\n' +
        '        <th>Số lượng đi kèm</th>\n' +
        '        <th>Số ngày thuê</th>\n' +
        '        <th>Loại dịch vụ</th>\n' +
        '        <th>Loại phòng thuê</th>\n' +
        '        <th>Sửa</th>\n' +
        '    </tr>';
    arrCustomer.sort();
    for (let i = 0; i < arrCustomer.length; i++) {
        tableString += '<tr>\n' +
            '        <td>' + (i + 1) + '</td>\n' +
            '        <td>' + arrCustomer[i][0] + '</td>\n' +
            '        <td>' + arrCustomer[i][1] + '</td>\n' +
            '        <td>' + arrCustomer[i][2] + '</td>\n' +
            '        <td>' + arrCustomer[i][3] + '</td>\n' +
            '        <td>' + arrCustomer[i][4] + '</td>\n' +
            '        <td>' + arrCustomer[i][5] + '</td>\n' +
            '        <td>' + arrCustomer[i][6] + '</td>\n' +
            '        <td>' + arrCustomer[i][7] + '</td>\n' +
            '        <td>' + arrCustomer[i][8] + '</td>\n' +
            '        <td>' + arrCustomer[i][9] + '</td>\n' +
            '        <td>' + arrCustomer[i][10] + '</td>\n' +
            '        <td> <button onclick="editCustomer(' + i + ')">Sửa</button></td>\n' +
            '    </tr>';
    }
    tableString += '</table>';
    document.getElementById("1").innerHTML = tableString;
}
function editCustomer(id) {
    let a=parseInt(prompt("Bạn muốn sửa thông tin nào?"+"\n"+"" +
        "1.Tên khách hàng      7.Giảm giá"+"\n"+
        "2.CMND                     8.Số lượng đi kèm"+"\n"+
        "3.Ngày sinh                9.Số ngày thuê"+"\n"+
        "4.Email                       10.Loại dịch vụ"+"\n"+
        "5.Địa chỉ                     11.Loại phòng thuê"+"\n"+
        "6.Loại Customer"+"\n"+
        "Lưu ý: nhập số nguyên từ 1-11 để chọn phần muốn sửa"));
    if(a==1) {
        let newName = nameCustomer();
        arrCustomer[id][0]=newName;
    }else if (a==2){
        let newCMND=cmndCustomer();
        arrCustomer[id][1]=newCMND;
    }else if (a==3){
        let newNgaySinh=birthdayCustomer();
        arrCustomer[id][2]=newNgaySinh;
    }else if (a==4){
        let newEmail=emailCustomer();
        arrCustomer[id][3]=newEmail;
    }else if (a==5){
        let newDiaChi=prompt("nhập địa chỉ");
        arrCustomer[id][4]=newDiaChi;
    }else if (a==6){
        let newCustomer=prompt("nhập loại Customer");
        arrCustomer[id][5]=newCustomer;
    }else if (a==7){
        let newGiamGia=prompt("nhập giảm giá");
        arrCustomer[id][6]=newGiamGia;
    }else if (a==8){
        let newSL=prompt("số lượng đi kèm");
        arrCustomer[id][7]=newSL;
    }else if (a==9){
        let newDayRents=dayRents();
        arrCustomer[id][8]=newDayRents;
    }else if (a==10){
        let newDichVu=prompt("loại dịch vụ");
        arrCustomer[id][9]=newDichVu;
    }else if (a==11){
        let newPhong=prompt("loại phòng thuê");
        arrCustomer[id][10]=newPhong;
    }else {
        alert("hãy chọn số từ 1-11!")
    }
    displayCustomers();
}
function del() {
    alert("nhap ten Customer muon xoa");
    let nameDelete=nameCustomer();
    let countdel=0;
    for (let i=0; i<arrCustomer.length; i++){
        if(arrCustomer[i][0]==nameDelete){
            arrCustomer.splice(i,1);
            countdel++;
            break;
        }
    }
    if(countdel==0){
        alert("ko co ten trong danh sach");
    }
    displayCustomers();
}
function diaChi() {
    let diaChi;
    let check=false;
    do{
        diaChi=prompt("+Nhập địa chỉ:" + "\n" + "+Chọn 1 trong 4: Đà Nẵng-Huế-Quảng Nam-Khác" + "\n"+"+Lưu ý: Nhập sai là nhập lại đó");
        switch (diaChi) {
            case "Đà Nẵng":
                check=true;
                break;
            case "Huế":
                check=true;
                break;
            case "Quảng Nam":
                check=true;
                break;
            case "Khác":
                check=true;
                break;
            default:
                check=false;
        }
    }while (!check)
    return diaChi;
}
function loaiCustomer() {
    let diaChi;
    let check=false;
    do{
        diaChi=prompt("+Nhập thẻ Customer:" + "\n" + "+Chọn 1 trong 5: Diamond-Platinum-Gold-Silver-Member" + "\n"+"+Lưu ý: Nhập sai là nhập lại đó");
        switch (diaChi) {
            case "Member":
                check=true;
                break;
            case "Silver":
                check=true;
                break;
            case "Gold":
                check=true;
                break;
            case "Platinum":
                check=true;
                break;
            case "Diamond":
                check=true;
                break;
            default:
                check=false;
        }
    }while (!check)
    return diaChi;
}
function loaiDV() {
    let diaChi;
    let check=false;
    do{
        diaChi=prompt("+Nhập loại dịch vụ:" + "\n" + "+Chọn 1 trong 3: Villa-House-Room" + "\n"+"+Lưu ý: Nhập sai là nhập lại đó");
        switch (diaChi) {
            case "Villa":
                check=true;
                break;
            case "House":
                check=true;
                break;
            case "Room":
                check=true;
                break;
            default:
                check=false;
        }
    }while (!check);
    return diaChi;
}
function loaiPhong() {
    let diaChi;
    let check=false;
    do{
        diaChi=prompt("+Nhập loại phòng:" + "\n" + "+Chọn 1 trong 3: Vip-Business-Normal" + "\n"+"+Lưu ý: Nhập sai là nhập lại đó");
        switch (diaChi) {
            case "Vip":
                check=true;
                break;
            case "Business":
                check=true;
                break;
            case "Normal":
                check=true;
                break;
            default:
                check=false;
        }
    }while (!check);
    return diaChi;
}
function giamGia() {
    let giamGia;
    let checkdR=false;
    do{
        giamGia=prompt("+Nhập phiếu giảm giá"+"\n"+"+Ví dụ: 10, 15, 20 (đơn vị %)"+"\n"+"+Nhập 10, 20 thôi đừng nhập % vào bắt nhập lại đó");
        if (giamGia>=0){
            alert("oke dung roi");
            checkdR=false
        }else {
            alert("hay nhap lai");
            checkdR=true;
        }
    }while (checkdR);
    giamGia=parseInt(giamGia);
    return giamGia;
}