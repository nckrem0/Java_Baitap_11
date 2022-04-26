function Services() {
    this.fetchData = function () {
      return axios({
        url: "https://625569238646add390d66a56.mockapi.io/api/tabula",
        method: "GET",
      });
    };
    this.deleteProduct =function(id){
        return axios ({
            url: `https://625569238646add390d66a56.mockapi.io/api/tabula/${id}`,
            method: "DELETE",
        })
    }
    this.addProductbyUser = async function(product){
        let checkExisted = await CheckUserExisted(product.taiKhoan);
        console.log("check", checkExisted);
        if(checkExisted)
        {
            return {
                status: 0
            }
        }
        else
        {
            return axios ({
                url: `https://625569238646add390d66a56.mockapi.io/api/tabula`,
                method: "POST",
                data: product,
            })
        }
        
        
    }
    this.getProductbyID = function(id){
        return axios ({
            url: `https://625569238646add390d66a56.mockapi.io/api/tabula/${id}`,
            method: "GET",
        })
    }
    this.updateProductbyID = function(product){
        return axios ({
            url: `https://625569238646add390d66a56.mockapi.io/api/tabula/${product.id}`,
            method: "PUT",
            data: product,
        })
    }
}


async function CheckUserExisted(username){
    let dataUser = await axios({
        url: "https://625569238646add390d66a56.mockapi.io/api/tabula",
        method: "GET",
      });
    dataUser = dataUser.data;
    let check = false;
    for(const user of dataUser){
        if(user.taiKhoan == username)
        {
            check = true;
            break;
        } 
    }
    return check;
}