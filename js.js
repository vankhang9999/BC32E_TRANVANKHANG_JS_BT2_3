//BT1:
//input
document.getElementById('ketQua').onclick=function(){
    var luong1Ngay=Number(document.getElementById('luong1Ngay').value);
    var soNgaylam=Number(document.getElementById('soNgayLam').value);
    var tongLuong=0;
    tongLuong=luong1Ngay*soNgaylam;
    //out: tongluong=?
    document.getElementById('luong').innerHTML= tongLuong;
}
//bt2
document.getElementById('btnTrungBinh').onclick=function(){
    //in
    var soThu1=Number(document.getElementById('soThu1').value);
    var soThu2=Number(document.getElementById('soThu2').value);
    var soThu3=Number(document.getElementById('soThu3').value);
    var soThu4=Number(document.getElementById('soThu4').value);
    var soThu5=Number(document.getElementById('soThu5').value);
    var trungBinh =0;
    trungBinh=(soThu1+soThu2+soThu3+soThu4+soThu5)/5;
    //out
    document.getElementById('ketQua2').innerHTML=trungBinh;

}
//BT3
document.getElementById('btnDoitien').onclick=function(){
    //input
    var soTiendoi=Number(document.getElementById('soTiendoi').value);
    var thanhTien=0;
    //out
    thanhTien=soTiendoi*23500;
    document.getElementById('ketQua3').innerHTML=thanhTien;
}
//BT4
document.getElementById('btnTinh').onclick=function(){
    //input
    var chieuDai=Number(document.getElementById('chieuDai').value);
    var chieuRong=Number(document.getElementById('chieuRong').value);
    var chuVi=0;
    var dienTich=0;
    //out
    chuVi=(chieuDai+chieuRong)*2;
    dienTich=chieuDai*chieuRong;

    document.getElementById('ketQua4').innerHTML='Diên tích:'+ dienTich + ' ; ' +(
    document.getElementById('ketQua4').innerHTML='Chu vi:'+ chuVi);
}
//BT5
document.getElementById('btnTinhTong').onclick=function(){
    //input
    var so2Chuso=Number(document.getElementById('soNhapvao').value);
    var soHangDonVi=so2Chuso % 10;
    var soHangChuc=Math.floor(so2Chuso / 10);
    //output
    var tinhTong2so=0;
    tinhTong2so=soHangChuc+soHangDonVi;
    document.getElementById('ketQua5').innerHTML=tinhTong2so;
}