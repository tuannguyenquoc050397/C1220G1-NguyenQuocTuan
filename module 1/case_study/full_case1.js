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
            check = false;
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