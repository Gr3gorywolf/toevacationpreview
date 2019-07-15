

function adventuresCard(adv){


return `<div class="col s12 m6 l4 xl3">
              <div class="card large hoverable">
                <div class="card-image black">
                <span class="new badge  orange darken-3 pricechip"   data-badge-caption="">From ${adv.price}</span>
                <span class="new badge  orange darken-3 locationchip"  data-badge-caption=""> ${adv.location}</span>
                <img src="${adv.image}" alt="" style="opacity:.65">
                  
                  <span class="truncate card-title">${adv.name}</span>
                  
                </div>
                <div class="card-content">
                   
                  <p class="truncatedparagraph">
                  
                  ${adv.description}
                  </p>
                  
                </div>
                <div class="card-action center">
                
                <a style="cursor:pointer;" id="${adv.treksoft_id}" class="center"><button class="btn-small orange darken-3">Book
                Now</button></a>
                <a> <button id="${adv.treksoft_id+"(i)"}" class="btn-small orange darken-3"><i class="material-icons">info</i></button> </a>
                </div>
              </div>
            </div>`

}
function adventuresCardv2(adv){


  return `<div class="col s12 m6 l6 xl4">
                <div class="card large hoverable">
                  <div class="card-image black">
                  <span class="new badge  orange darken-3 pricechip"   data-badge-caption="">From ${adv.price}</span>
                  <span class="new badge  orange darken-3 locationchip"  data-badge-caption=""> ${adv.location}</span> 
                  <img src="${adv.image}" alt="" style="opacity:.65">
                    
                    <span class="truncate card-title">${adv.name}</span>
                    
                  </div>
                  <div class="card-content">
                     
                    <p class="truncatedparagraph">
                    
                    ${adv.description}
                    </p>
                    
                  </div>
                  <div class="card-action center">
                  
                  <a style="cursor:pointer;" id="${adv.treksoft_id}" class="center"><button class="btn-small orange darken-3">Book
                  Now</button></a>
                  <a> <button id="${adv.treksoft_id+"(i)"}" class="btn-small orange darken-3"><i class="material-icons">info</i></button> </a>
                  </div>
                </div>
              </div>`
  
  }
function allinclusivecardv1(all){

  var dias=all.packpages.find((valor)=>{

    return valor.nights==3;
  
  });
  return `<div class="col s12 m6 l4 xl3">
                <div class="card large hoverable">
                  <div class="card-image black">
           <span class="new badge  orange darken-3 pricechip"   data-badge-caption="">${dias.nights} nights from ${dias.price} US</span>
           <span class="new badge  orange darken-3 locationchip"  data-badge-caption=""> ${all.location}</span>     
           <img src="${all.image}" alt="" style="opacity:.65">
                    <span class="truncate card-title">${all.name}</span>
                  </div>
                  <div class="card-content">
  
                    <p class="truncatedparagraph">
                    ${all.description}
                    </p>
                  </div>
                  <div class="card-action center">
                  <a style="cursor:pointer;" id="${all.treksoft_id}" class="center"><button class="btn-small orange darken-3">Book
                  Now</button></a>
                  <a> <button id="${all.treksoft_id+"(i)"}" class="btn-small orange darken-3"><i class="material-icons">info</i></button> </a>
                  </div>
                </div>
              </div>`
  
  }

function allinclusivecard(all){

var estrellas="";
for(var i=0;i<all.stars;i++){
  estrellas+="<i class='material-icons yellow-text' style='font-size:12px'>start</i>"

}
for(var i=0;i<(5 - all.stars);i++){
  estrellas+="<i class='material-icons gray-text' style='font-size:12px'>start</i>"

}
var dias=all.packpages.find((valor)=>{

  return valor.nights==3;

});

return `
<div class="col s12 m6 l4 xl3">
<div class="card medium hoverable sticky-action">
<div class="card-image waves-effect waves-block waves-light black">
<span class="new badge  orange darken-3 pricechip"  data-badge-caption="">${dias.nights} nights from ${dias.price} US</span>
<span class="new badge  orange darken-3 locationchip"  data-badge-caption=""> ${all.location}</span> 
<img class="activator card-image"  src="${all.image}">
  
</div>
<div class="card-content">
<h6 class="card-title activator grey-text text-darken-4 truncate" style="font-size:15px;"><i class="material-icons right">more_vert</i>${all.name}</h6>
  <p>${estrellas}</p>
</div>
<div class="card-action center">
<a style="cursor:pointer;" id="${all.treksoft_id}" class="center"><button class="btn-small orange darken-3">Book Now</button></a>
<a> <button id="${all.treksoft_id+"(i)"}" class="btn-small orange darken-3"><i class="material-icons">info</i></button> </a>
</div>
<div class="card-reveal">
  <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>${all.name}</span>
  <p>${all.description}</p>
</div>
</div>
</div>
`

}
function allinclusivecarousel(all){
  
  
 return  `<li>
 <img src="${all.image}" style="opacity:0.5"> 
 <div class="caption center-align">
   <h3>${all.name}</h3>
   
 </div>
</li>`


}

function packpagecard(all,index){

  var estrellas="";
  for(var i=0;i<all.stars;i++){
    estrellas+="<i class='material-icons yellow-text' style='font-size:15px'>start</i>"
  
  }
  for(var i=0;i<(5 - all.stars);i++){
    estrellas+="<i class='material-icons gray-text' style='font-size:15px'>start</i>"
  
  }
  var dias=all.packpages.find((valor)=>{

        return valor.nights==3;

  });
  
  return `
  <div class="col s12 m6 xl4">
  <div class="card medium hoverable sticky-action">
  <div class="card-image waves-effect waves-block waves-light black">
  <span class="new badge  orange darken-3 pricechip"  data-badge-caption="">${dias.nights} nights from ${dias.price} US</span>
  <span class="new badge  orange darken-3 locationchip"  data-badge-caption=""> ${all.location}</span>
    <img class="activator card-image"  src="${all.image}">
    
  </div>
  <div class="card-content">
  <h6 class="card-title activator grey-text text-darken-4 truncate" style="font-size:15px;"><i class="material-icons right">more_vert</i>${all.name}</h6>
    <p>${estrellas}</p>
  </div>
  <div class="card-action center">
  <a style="cursor:pointer;" id="${all.treksoft_id}" class="center">
  <button class="btn-small orange darken-3" onclick="abrirbottomsheet(${index})">Package info</button>
  </a>
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>${all.name}</span>
    <p>${all.description}</p>
  </div>
  </div>
  </div>
  `
  
  }



 function adbanner(imageurl) {
   return `
   <div class="animated fadeOutDown delay-3s" style="z-index:998;position:fixed;height:100%;width:100%;background:rgba(0, 0, 0, 0.4)">
  
   <span class="center"><img src="${imageurl}" style="padding:15%;height:100%;width:100%;z-index:999;"/></span>
   </div>
     
   `


 }


  function  travellocation(location) {
    
    
   return ` <li class="collection-item avatar elevarable " style="cursor:pointer" onclick="cargar('${location}')">
    <i class="circle orange darken-1 material-icons white-text " style="margin-top:10px;">room</i>

    <p><br>${location}<br>

    </p>
    <a href="#!" class="secondary-content" style="margin-top:15px;"><i class="material-icons black-text">arrow_forward
      </i></a>
  </li>`
  }

  function   BottonSheetModal(){
    return `<div id="modalprices" class="modal bottom-sheet modal-fixed-footer" style="max-height:100%;z-index:0">
     <div class="modal-content">
       <h4 id="modaltitulo" class="truncate"></h4>
       <div id="modalcontainer">
       </div>
     </div>
     <div class="modal-footer orange darken-3">
     <a class="modal-close waves-effect waves-green btn-flat white-text">Close</a>
     <a id="modallink" class="modal-close waves-effect waves-orange btn-flat white-text">Hotel info</a>
     <a id="modalbuy" class="modal-close waves-effect waves-orange btn-flat white-text">Book now</a>
     </div>
   </div>`
   
   
   }