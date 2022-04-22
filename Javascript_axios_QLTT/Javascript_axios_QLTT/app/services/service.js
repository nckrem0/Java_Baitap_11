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
    this.addProductbyUser = function(product){
        return axios ({
            url: `https://625569238646add390d66a56.mockapi.io/api/tabula`,
            method: "POST",
            data: product,
        })
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
  