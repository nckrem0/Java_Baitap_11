function Services (){
    this.fetchData = function () {
        return axios ({
            url: "https://625569238646add390d66a56.mockapi.io/api/tabula",
            method: "GET",
        });
    };
    
}