
var instanciamodal=null;
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  function inicializarmodal(){

    var modal = document.querySelectorAll('.modal');
  var  elemmodal = M.Modal.init(modal);
  instanciamodal=M.Modal.getInstance(elemmodal[0]);
}


function fillbottomsheet(titulo,precios,ref){

  document.getElementById("modaltitulo").innerHTML=titulo;
  var collectionitems="";
  console.log(precios);
  for(var i=0;i<precios.length;i++){
    collectionitems+=`
    <li class="collection-item  elevarable">     
  
    <span class="title">${precios[i].titulo}</span>
      <p> 
     
      ${precios[i].descripcion}  <button class="btn green right" ><i class="material-icons inline-icon">attach_money</i></button> <br>
      <h6 class="green-text">${precios[i].precio}</h6>
   
      </p>
      
     
    </li>
    `
   
  }
  
  document.getElementById("modalcontainer").innerHTML=`
  <ul class="collection">
    ${collectionitems}
  </ul>
  `
  document.getElementById("modalprices").scrollTo(0,0);
  document.getElementById("modallink").href=ref;

}