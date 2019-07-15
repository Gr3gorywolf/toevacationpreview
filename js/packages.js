let instanciamodal;
var hoteles = document.getElementById("containerhotels");
var carrousel = document.getElementById("slides");
var containerlocations=document.getElementById("containerlocations")
var packageslocation=document.getElementById("packageslocation")
cargar();
function cargar( location = null){

var innerhoteles = "";
var innercarousel = "";
var innerlocations = travellocation('All');
var locations = ['All'];
var everything = true;
if (location != 'All' && location != null) {
  everything = false;

}

for (var all of allinclusive) {

  if(everything || all.location==location){
  innercarousel += allinclusivecarousel(all);
  innerhoteles += packpagecard(all, allinclusive.indexOf(all));
}

if (locations.indexOf(all.location) == -1) {
  locations.push(all.location)
  innerlocations += travellocation(all.location);

}
}
carrousel.innerHTML = innercarousel;
hoteles.innerHTML = innerhoteles;
containerlocations.innerHTML=innerlocations;
if (everything){
  packageslocation.innerHTML = "All packages"
  M.toast({html:"Showing all packages"});
}
else{
  M.toast({html:"Showing packages from: "+ location});
  packageslocation.innerHTML = "Packages from: " + location;
}
var instance = M.Slider.init(document.getElementById("slideshow"), {
  interval: 2300,
  indicators: false

});

}
function loaded() {

  document.getElementsByTagName("header")[0].innerHTML += BottonSheetModal();

  inicializarmodal();
  var sideNav = document.querySelector('.sidenav');
  M.Sidenav.init(sideNav);
 

}

function inicializarmodal() {

  var modal = document.querySelectorAll('.modal');
  instanciamodal = M.Modal.init(modal)[0];


}



function abrirbottomsheet(pkgindex) {
  document.getElementById("modaltitulo").innerHTML = allinclusive[pkgindex].name;
  var modalcontainer = document.getElementById("modalcontainer");
  modalcontainer.innerHTML = "";
  var nightsvalues=[3,4,5,7];
  var elementosnights = ["", "", "", ""];

  for (var all of allinclusive[pkgindex].packpages) {
    let pos = 0;
    if (all.nights == 4)
      pos = 1
    else
    if (all.nights == 5)
      pos = 2
    else
    if (all.nights == 7)
      pos = 3


    elementosnights[pos] += `
  <li class="collection-item avatar elevarable">     
    <i   alt="" class="circle  orange darken-3 material-icons"  style="margin-top:20px;">card_travel</i>
  <span class="title">Room category: ${all.bedroom_category}</span>
    <p> 
   
   
    <h5 class="orange-text text-darken-3">${all.price} US</h5>
 
    </p>
    
   
  </li>
  `
  }

var fullcollection="";
for(let i=0;i<elementosnights.length;i++){
if(elementosnights[i].toString().length>0){          
     fullcollection+=`<li class='collection-header orange-text text-darken-3' style="padding:10px;"><h4 class='center'>${nightsvalues[i]} nights packages</h4></li> ${elementosnights[i]}`
            
 }

}

  modalcontainer.innerHTML = `
<ul class="collection">
  ${fullcollection}
</ul>
`

  var buttonbook = new TrekkSoft.Embed.Button();
  buttonbook
    .setAttrib("target", "fancy")
    .setAttrib("entryPoint", "tour")
    .setAttrib("type", "tour")
    .setAttrib("tourId", allinclusive[pkgindex].tour_id)
    .setAttrib("referral", "TOUROPERADORESESPERANZA")
    .setAttrib("fancywidth", "70%")
    .setAttrib("fancyheight", "100%")
    .registerOnClick("modalbuy");

    var buttoninfo = new TrekkSoft.Embed.Button();
  buttoninfo
    .setAttrib("target", "fancy")
    .setAttrib("type", "tour_details")
    .setAttrib("entryPoint", "tour_details")
    .setAttrib("tourId", allinclusive[pkgindex].tour_id)
    .setAttrib("referral", "TOUROPERADORESESPERANZA")
    .setAttrib("fancywidth", "70%")
    .setAttrib("fancyheight", "100%")
    .registerOnClick("modallink");
  instanciamodal.open();

}