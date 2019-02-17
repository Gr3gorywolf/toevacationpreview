function loaded(){
var containerhotels=document.getElementById("containerhoteles");
var hotelsdata="";
    for(let i=0;i<data.length;i++){
        hotelsdata+=card_normal(data[i].nombre,data[i].descripcion,data[i].precio,data[i].imagen);


    }


    containerhotels.innerHTML=hotelsdata;


}