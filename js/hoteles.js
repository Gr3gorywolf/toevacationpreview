function loaded(){
var containerhotels=document.getElementById("containerhoteles");
var hotelsdata="";
    for(let i=0;i<data.length;i++){
        let precioaprox=data[i].precios[0].descripcion + " Desde "+ data[i].precios[0].precio
        hotelsdata+=card_normal(data[i].nombre,data[i].descripcion,precioaprox,data[i].imagen,i);
           console.log(data[i].precios[0]);

    }


    containerhotels.innerHTML=hotelsdata;
    document.getElementsByTagName("main")[0].innerHTML+=BottonSheetModal();
    inicializarmodal();

}
function showmodal(index){
    fillbottomsheet(data[index].nombre,data[index].precios);
    

}