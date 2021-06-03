//BÀI TẬP 1: Cho người dùng nhập vào 3 số nguyên. Viết chương trình xuất 3 số theo thứ tự tăng dần
/**Bước 1:Nhập input lần lượt 3 số nguyên bất kì soNguyenA soNguyenB soNguyenC
 * Bước 2: cách thực hiện
 * soNguyenA>soNguyenB && soNguyenA>soNguyenC => số lớn nhất là soNguyenA
 *xét tiếp 2 số nguyên còn lại, nếu soNguyenB>soNguyenC => soNguyenB sẽ là số lớn tiếp theo, và còn lại số nhỏ nhất là soNguyenC
 Bước 3: xuất output 
 */
var soLonNhat = document.getElementById("idSoLonNhat");
var soTiepTheo = document.getElementById("idSoTiepTheo");
var soNhoNhat = document.getElementById("idSoNhoNhat");

document.getElementById("btnKetQua1").onclick = function () {
  var soNguyenA = document.getElementById("idSoNguyenA").value;
  var soNguyenB = document.getElementById("idSoNguyenB").value;
  var soNguyenC = document.getElementById("idSoNguyenC").value;

  if (
    (Number(soNguyenA) > Number(soNguyenB) &&
      Number(soNguyenA) > Number(soNguyenC) &&
      Number(soNguyenB) > Number(soNguyenC)) ||
    (Number(soNguyenA) == Number(soNguyenB) &&
      Number(soNguyenA) == Number(soNguyenC)) ||
    (Number(soNguyenA) == Number(soNguyenB) &&
      Number(soNguyenA) > Number(soNguyenC))
  ) {
    soLonNhat.innerHTML = Number(soNguyenA);
    soTiepTheo.innerHTML = Number(soNguyenB);
    soNhoNhat.innerHTML = Number(soNguyenC);
  } else if (
    (Number(soNguyenA) > Number(soNguyenB) &&
      Number(soNguyenA) > Number(soNguyenC) &&
      Number(soNguyenB) < Number(soNguyenC)) ||
    (Number(soNguyenA) == Number(soNguyenC) &&
      Number(soNguyenA) > Number(soNguyenB))
  ) {
    soLonNhat.innerHTML = Number(soNguyenA);
    soTiepTheo.innerHTML = Number(soNguyenC);
    soNhoNhat.innerHTML = Number(soNguyenB);
  } else if (
    (Number(soNguyenB) > Number(soNguyenA) &&
      Number(soNguyenB) > Number(soNguyenC) &&
      Number(soNguyenA) > Number(soNguyenC)) ||
    (Number(soNguyenA) == Number(soNguyenC) &&
      Number(soNguyenA) < Number(soNguyenB))
  ) {
    soLonNhat.innerHTML = Number(soNguyenB);
    soTiepTheo.innerHTML = Number(soNguyenA);
    soNhoNhat.innerHTML = Number(soNguyenC);
  } else if (
    (Number(soNguyenB) > Number(soNguyenA) &&
      Number(soNguyenB) > Number(soNguyenC) &&
      Number(soNguyenA) < Number(soNguyenC)) ||
    (Number(soNguyenB) == Number(soNguyenC) &&
      Number(soNguyenB) > Number(soNguyenA))
  ) {
    soLonNhat.innerHTML = Number(soNguyenB);
    soTiepTheo.innerHTML = Number(soNguyenC);
    soNhoNhat.innerHTML = Number(soNguyenA);
  } else if (
    (Number(soNguyenC) > Number(soNguyenA) &&
      Number(soNguyenC) > Number(soNguyenB) &&
      Number(soNguyenA) > Number(soNguyenB)) ||
    (Number(soNguyenA) == Number(soNguyenB) &&
      Number(soNguyenA) < Number(soNguyenC))
  ) {
    soLonNhat.innerHTML = Number(soNguyenC);
    soTiepTheo.innerHTML = Number(soNguyenA);
    soNhoNhat.innerHTML = Number(soNguyenB);
  } else if (
    Number(soNguyenC) > Number(soNguyenA) &&
    Number(soNguyenC) > Number(soNguyenB) &&
    Number(soNguyenA) < Number(soNguyenB)
  ) {
    soLonNhat.innerHTML = Number(soNguyenC);
    soTiepTheo.innerHTML = Number(soNguyenB);
    soNhoNhat.innerHTML = Number(soNguyenA);
  } else {
    soLonNhat.innerHTML = Number(soNguyenA);
    soTiepTheo.innerHTML = Number(soNguyenB);
    soNhoNhat.innerHTML = Number(soNguyenC);
  }
};

/**BÀI TẬP 2:Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E) 
 * BƯớc 1: kB báo input : gồm 1 thẻ input để nhập tên thành viên trong gia đình có id "idThanhVien"
 * Bước 2: Nếu nhập vào tên Bố  và sau khi click nút sẽ hiện câu xin chào là "Xin chào Bố !"
Bước 3: xuất kết quả output
câu xin chào thành viên trong gia dình
*/

document.getElementById("btnKetQua2").onclick = function () {
  var thanhVien = document.getElementById("idThanhVien").value;

  if (thanhVien === "Bố") {
    alert("Xin chào Bố");
  } else if (thanhVien === "Mẹ") {
    alert("Xin chào Mẹ");
  } else if (thanhVien === "Anh Trai") {
    alert("Xin chào Anh Trai");
  } else if (thanhVien === "Em Gái") {
    alert("Xin chào Em Gái");
  } else {
    alert("Bạn đã nhập sai định dạng, mời bạn nhập lại...");
  }
};

/**BÀI TẬP 3: Cho 3 số nguyên. Viết chương trình xuất ra có Co nhiêu số lẻ và Co nhiêu số chẵn.
 Bước 1. khai báo input: soLe,soChan,soNgA,soNgB,soNgC
 Bước 2: Nếu số nguyên chia hết cho 2 thì đó là số chẵn là ngược lại
 * 
 Bước 3: xuất output: có bao nhiêu số chẵn bao nhiêu số lẻ
 */
var soLe = document.getElementById("idSoLe");
var soChan = document.getElementById("idSoChan");

document.getElementById("btnKetQua3").onclick = function () {
  var soNgA = document.getElementById("idSoNgA").value;
  var soNgB = document.getElementById("idSoNgB").value;
  var soNgC = document.getElementById("idSoNgC").value;

  if (soNgA % 2 == 0 && soNgB % 2 == 0 && soNgC % 2 == 0) {
    soLe.innerHTML = 0;
    soChan.innerHTML = 3;
  } else if (
    (soNgA % 2 == 0 && soNgB % 2 == 0 && soNgC % 2 != 0) ||
    (soNgA % 2 != 0 && soNgB % 2 == 0 && soNgC % 2 == 0) ||
    (soNgA % 2 == 0 && soNgB % 2 != 0 && soNgC % 2 == 0)
  ) {
    soLe.innerHTML = 1;
    soChan.innerHTML = 2;
  } else if (
    (soNgA % 2 != 0 && soNgB % 2 != 0 && soNgC % 2 == 0) ||
    (soNgA % 2 == 0 && soNgB % 2 != 0 && soNgC % 2 != 0) ||
    (soNgA % 2 != 0 && soNgB % 2 == 0 && soNgC % 2 != 0)
  ) {
    soLe.innerHTML = 2;
    soChan.innerHTML = 1;
  } else if (soNgA % 2 != 0 && soNgB % 2 != 0 && soNgC % 2 != 0) {
    soLe.innerHTML = 3;
    soChan.innerHTML = 0;
  } else {
    alert("Bạn đã nhập thiếu, mời nhập lại...");
  }
};

/**BÀI TẬP 4. Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
 * Bước 1: input là 3 cạnh của tam giác canhAB canhAC canhBC
 * Bước 2: áp dụng công thức : nếu 2 cạnh góc vuông canhAB=canhAC thì đó là tam giác cân
 * nếu 3 cạnh bằng nhau. đó là tam giác đều
 * nếu canhBC.canhBC=canhAB*canhAB+canhAC*canhAC thì đó là tam giác vuoong
 * trường hợp còn lại là tam giác bình thường
 * BƯỚC 3: output: xuất ra đó là tam giác gìx
 */
var tamGiac = document.getElementById("idTamGiac");
document.getElementById("btnKetQua4").onclick = function () {
  var canhAB = document.getElementById("idCanhAB").value;
  var canhAC = document.getElementById("idCanhAC").value;
  var canhBC = document.getElementById("idCanhBC").value;

  if (canhAB == canhAC && canhAC != canhBC) {
    tamGiac.innerHTML = "Tam giác cân";
  } else if (canhAB == canhAC && canhAB == canhBC) {
    tamGiac.innerHTML = "Tam giác đều";
  } else if (canhBC == Math.sqrt(canhAB * canhAB + canhAC * canhAC)) {
    tamGiac.innerHTML = "Tam giác vuông";
  } else {
    tamGiac.innerHTML = "Tam giác bình thường";
  }
};
