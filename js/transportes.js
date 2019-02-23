function loaded(){
    var containervehiculos=document.getElementById("containervehiculos");
    var vehicledata="";
        for(let i=0;i<data.length;i++){
            let precioaprox=data[i].precios[0].descripcion + " Desde "+ data[i].precios[0].precio
            vehicledata+=card_normal(data[i].nombre,data[i].descripcion,precioaprox,data[i].imagen,i);
    
    
        }
    
    
        containervehiculos.innerHTML=vehicledata;
        document.getElementsByTagName("main")[0].innerHTML+=BottonSheetModal();
        inicializarmodal();
}
function showmodal(index){
    fillbottomsheet(data[index].nombre,data[index].precios);


}
