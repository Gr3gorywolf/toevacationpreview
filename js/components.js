function slider_slide(titulo,subtitulo,imagen){
return `
<li class="black">
<img src="${imagen}" style="opacity:0.5"> <!-- random image -->
<div class="caption center-align">
  <h5>${titulo}</h5>
  <h5 class="light grey-text text-lighten-3">${subtitulo}</h5>
</div>
</li>
`


}

function card_normal(titulo,subtitulo,subtitulo2,imagen,index=0){
 
return `


<div class="col s12 m6 l4 xl3" style="cursor:pointer">
      <div class="card   elevarable modal-trigger " data-target="modalprices" onclick="showmodal(${index})">
        <div class="card-image black " >
          <img src="${imagen}" style="height:200px;opacity:0.6">
          <span class="card-title">${titulo}</span>
        </div>
        <div class="card-content" style="max-height:100px;min-height:100px;overflow-y:auto;" >
          <p >${subtitulo}</p>
        </div>
        <div class="card-action">
        <a href="#" class="green-text">${subtitulo2}</a>
      </div>     
      </div>
    </div>


`


}
function card_large(titulo,subtitulo,subtitulo2,imagen,index=0){
  return `


  <div class="col s12 m6 l4 xl3" style="cursor:pointer">
        <div class="card medium elevarable modal-trigger"  data-target="modalprices" onclick="showmodal(${index})">
          <div class="card-image black " >
            <img src="${imagen}" style="height:200px;opacity:0.6">
            <span class="card-title">${titulo}</span>
          </div>
          <div class="card-content" style="min-height:100px;overflow : hidden;" >
            <p>${subtitulo}</p>
          </div> 
          <div class="card-action">
          <a href="#" class="green-text">${subtitulo2}</a>
        </div>   
        </div>
      </div> 
  `
  }




function   BottonSheetModal(){
 return `<div id="modalprices" class="modal bottom-sheet modal-fixed-footer" style="max-height:100%;z-index:90">
  <div class="modal-content">
    <h4 id="modaltitulo" class="truncate"></h4>
    <div id="modalcontainer">
    </div>
  </div>
  <div class="modal-footer green">
  <a class="modal-close waves-effect waves-green btn-flat white-text">Cerrar</a>
  <a id="modallink" class="modal-close waves-effect waves-green btn-flat white-text">Mas información<i class="material-icons inline-icon">arrow_forward</i></a>
  </div>
</div>`


}
function packpageview(titulo,descripcion,imagen,precio,index=0){
return `

<div class="col s12 m6 " style="cursor:pointer">
      <div class="card   elevarable">
        <div class="card-image black modal-trigger "  data-target="modalprices" >
          <img src="${imagen}" style="height:200px;opacity:0.6"  onclick="showmodal(${index})">
          <span class="card-title">${titulo}</span>
        </div>
        <div class="card-content" style="max-height:100px;min-height:100px;overflow-y:auto;" >
          <p >${descripcion}</p>
        </div>
        <div class="card-action">
          <a href="#" class="green-text">${precio}</a>
        </div> 
      </div>
    </div>


`


}