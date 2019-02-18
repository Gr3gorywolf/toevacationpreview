function slider_slide(titulo,subtitulo,imagen){
return `
<li class="black">
<img src="${imagen}" style="opacity:0.5"> <!-- random image -->
<div class="caption center-align">
  <h3>${titulo}</h3>
  <h5 class="light grey-text text-lighten-3">${subtitulo}</h5>
</div>
</li>


`


}

function card_normal(titulo,subtitulo,subtitulo2,imagen){
return `


<div class="col s12 m6 l4 xl3" style="cursor:pointer">
      <div class="card   elevarable">
        <div class="card-image black " >
          <img src="${imagen}" style="height:200px;opacity:0.6">
          <span class="card-title">${titulo}</span>
        </div>
        <div class="card-content" style="max-height:100px;min-height:100px;overflow-y:auto;" >
          <p >${subtitulo}</p>
        </div>
        <div class="card-action">
        <h6 class="green-text"><i class="material-icons inline-icon">attach_money</i>${subtitulo2}<h6>
      </div>
      </div>
    </div>


`


}
function card_large(titulo,subtitulo,subtitulo2,imagen){
  return `
  
  <div class="col s12 m6 l4 xl3" style="cursor:pointer">
  <div class="card elevarable" style="min-height:320px;max-height:350px">
  <div class="card-image waves-effect waves-block waves-light sticky-action">
 
  <img src="${imagen}" style="height:200px;opacity:0.6" >
 
  </div>
  <div class="card-content">
  <i class="material-icons right activator inline-icon">more_vert</i>
    <span class="card-title  grey-text text-darken-4 truncate" style="font-size:20px;">${titulo}</span>
    <h6 class="green-text"><i class="material-icons inline-icon">attach_money</i>${subtitulo2}<h6>
  </div>
  <div class="card-reveal">
  <i class="material-icons right activator card-title">close</i>
    <span class="card-title grey-text text-darken-4">${titulo}</span>
    <p>${subtitulo}</p>
  </div>
</div>
</div>


  
  
  `
  
  
  }