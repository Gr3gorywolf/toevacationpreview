function loaded(){
    var containerexcursiones=document.getElementById("containerexcursiones");
    var excursiondata="";
        for(let i=0;i<data.length;i++){

            let aproxprice=data[i].precios[0].descripcion+" Desde "+data[i].precios[0].precio
            excursiondata+=card_large(data[i].nombre,data[i].descripcion,aproxprice,data[i].imagen,i);
    
    
        }
    
    
        containerexcursiones.innerHTML=excursiondata;
        document.getElementsByTagName("main")[0].innerHTML+=BottonSheetModal();
        inicializarmodal();
       
        

}
function showmodal(index){
    fillbottomsheet(data[index].nombre,data[index].precios);
  

}


