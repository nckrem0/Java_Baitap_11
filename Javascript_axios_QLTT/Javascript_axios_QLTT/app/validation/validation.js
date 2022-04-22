function Validation (){
    this.checkEmpty = function (value,errorID,msg) {
        if (value === "") {
            document.getElementById(errorID).innerHTML = msg ;
            document.getElementById(errorID).style.display ="block";
            return false
        }
        document.getElementById(errorID).innerHTML = msg ;
        document.getElementById(errorID).style.display="none";
        return true 
    }

    this.selectTypeofUser = function (value,errorID,msg) {
        if (value === "Chọn loại người dùng") {
            document.getElementById(errorID).innerHTML = msg ;
            document.getElementById(errorID).style.display ="block";
            return false
        }
        document.getElementById(errorID).innerHTML = msg ;
        document.getElementById(errorID).style.display="none";
        return true 
    }

    this.selectLanguage = function (value,errorID,msg) {
        if (value === "Chọn ngôn ngữ") {
            document.getElementById(errorID).innerHTML = msg ;
            document.getElementById(errorID).style.display ="block";
            return false
        }
        document.getElementById(errorID).innerHTML = msg ;
        document.getElementById(errorID).style.display="none";
        return true 
    }
    this.kiemTraChuoiKyTu = function(value,errorID,msg){
        var letter ="^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$" ;
        if(value.match(letter)){
            getEle(errorID).innerHTML = "" ;
            getEle(errorID).style.display="none";
            return true
        }
        getEle(errorID).innerHTML = msg ;
        getEle(errorID).style.display="block";
        return false
    }
}
