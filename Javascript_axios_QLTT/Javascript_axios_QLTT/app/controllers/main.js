//Validation
var validation = new Validation();
function getInfobyUser() {
  var username = document.getElementById("TaiKhoan").value;
  var name = document.getElementById("HoTen").value;
  var password = document.getElementById("MatKhau").value;
  var email = document.getElementById("Email").value;
  var person = document.getElementById("loaiNguoiDung").value;
  var language = document.getElementById("loaiNgonNgu").value;
  var picture = document.getElementById("HinhAnh").value;
  var detail = document.getElementById("MoTa").value;

  // tạo flag (cờ)
  var isValid = true;

  //Validation username
  isValid &=
      validation.checkEmpty(username, "divErrorUserName", "(*) Tài Khoản Không Được Để Trống") ;

  //Validation Name
  isValid &=
      validation.checkEmpty(name, "divErrorName", "(*) Họ và Tên Không Được Để Trống") && 
      validation.kiemTraChuoiKyTu(name, "divErrorName", "(*) Vui Lòng");

  //Validation Email
  isValid &=
      validation.checkEmpty(email, "divErrorEmail", "(*) Email Không Được Để Trống") ;

  //Validation Password
  isValid &=
      validation.checkEmpty(password, "divErrorPassword", "(*) Mật Khẩu Không Được Để Trống") ;

  //Username
  isValid &= validation.selectTypeofUser(
    person,
    "divErrorSelectTypeofUser",
    "(*) Loại Người Dùng Không Được Để Trống"
  );

  //Username
  isValid &= validation.selectLanguage(
    language,
    "divErrorSelecLanguage",
    "(*) Ngôn Ngữ Không Được Để Trống"
  );

  //Username
  isValid &= validation.checkEmpty(
    picture,
    "divErrorPicture",
    "(*) Hình Ảnh Không Được Để Trống"
  );

  //Username
  isValid &= validation.checkEmpty(
    detail,
    "divErrorDetail",
    "(*) Mô Tả Không Được Để Trống"
  );

  if (!isValid) return null;

  var product = new Product(
    "",
    username,
    name,
    password,
    email,
    person,
    language,
    detail,
    picture
  );
  return product
}
var services = new Services();
function getListProducts() {
  services.fetchData()
  .then(function(result){
    renderHTML(result.data);
  })
  .catch(function(error){
    console.log(error);
  })
}
getListProducts();

function renderHTML(arrProducts) {
  var content = "";
  for (let index = 0; index < arrProducts.length; index++) {
    const element = arrProducts[index];
    content += `
        <tr>
            <td>${index + 1}</td>
            <td>${element.taiKhoan}</td>
            <td>${element.matKhau}</td>
            <td>${element.hoTen}</td>
            <td>${element.email}</td>
            <td>${element.ngonNgu}</td>
            <td>${element.loaiND}</td>
            <td>
            <button class ="btn btn-Success" onclick="deletebyID(${
              element.id
            })">Xoá</button>
            <button class ="btn btn-danger" onclick="changebyID(${
              element.id
            }) " data-toggle="modal"
            data-target="#myModal">Sửa</button>
            </td>

        </tr>
        `;
  }
  document.getElementById("tblDanhSachNguoiDung").innerHTML = content;
}

function deletebyID(id) {
  services
    .deleteProduct(id)
    .then(function () {
      getListProducts();
    })
    .catch(function (error) {
      console.log(error);
    });
}

document
  .getElementById("btnThemNguoiDung")
  .addEventListener("click", function () {
    document.getElementsByClassName("modal-title")[0].innerHTML =
      "Thêm Người Dùng";

    var footer = `<button class="btn btn-success" onclick="addProduct()">Add</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
  });

function addProduct() {
  var product = getInfobyUser ();
  if (product) {
    services
      .addProductbyUser(product)
      .then(function () {
        getListProducts();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

function changebyID(id) {
  document.getElementsByClassName("modal-title")[0].innerHTML =
    "Sửa Người Dùng";
  var footer = `<button class="btn btn-success" onclick="updateProduct(${id})">Update</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = footer;

  services
    .getProductbyID(id)
    .then(function (result) {
      document.getElementById("TaiKhoan").value = result.data.taiKhoan;
      document.getElementById("HoTen").value = result.data.hoTen;
      document.getElementById("MatKhau").value = result.data.matKhau;
      document.getElementById("Email").value = result.data.email;
      document.getElementById("loaiNguoiDung").value = result.data.loaiND;
      document.getElementById("loaiNgonNgu").value = result.data.ngonNgu;
      document.getElementById("MoTa").value = result.data.moTa;
      document.getElementById("HinhAnh").value = result.data.hinhAnh;
    })
    .catch(function (error) {
      console.log(error);
    });
}
function updateProduct(id) {
  var username = document.getElementById("TaiKhoan").value;
  var name = document.getElementById("HoTen").value;
  var password = document.getElementById("MatKhau").value;
  var email = document.getElementById("Email").value;
  var person = document.getElementById("loaiNguoiDung").value;
  var language = document.getElementById("loaiNgonNgu").value;
  var picture = document.getElementById("HinhAnh").value;
  var detail = document.getElementById("MoTa").value;
  var product = new Product(
    id,
    username,
    name,
    password,
    email,
    person,
    language,
    detail,
    picture
  );
  services
    .updateProductbyID(product)
    .then(function () {
      getListProducts();
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log(product);
}
