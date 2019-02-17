function loaded(){
    var containervehiculos=document.getElementById("containervehiculos");
    var vehicledata="";
        for(let i=0;i<data.length;i++){
            vehicledata+=card_normal(data[i].nombre,data[i].descripcion,data[i].precio,data[i].imagen);
    
    
        }
    
    
        containervehiculos.innerHTML=vehicledata;
    
}