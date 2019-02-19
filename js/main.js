
var imagenscroll;
var entop=true;
function loaded(){
var slides=document.getElementById("slides");
var containerpaquetes=document.getElementById("containerpaquetes");
var botonscroll=document.getElementById("botonscroll");
 imagenscroll=document.getElementById("imagenboton")
containerpaquetes.innerHTML="";

slides.innerHTML+=slider_slide("Encuentre su tour ideal","Solo denos la informacion de lo que desee hacer y nosotros haremos el resto por ti","img/slide1.jpg")
slides.innerHTML+=slider_slide("Tours unicos en el pais","Aqui podra encontrar tours que en ningun otro sitio podra encontrar","img/slide2.jpg")
slides.innerHTML+=slider_slide("Vive","","img/slide3.jpg")
slides.innerHTML+=slider_slide("Vive","","img/slide4.jpg")
for(var i=0;i<5;i++){
containerpaquetes.innerHTML+=packpageview("sadsadasdasd ","sdsadsadasddddddddddddddddd ","img/slide3.jpg",523)
}
var elems = document.querySelectorAll('.slider');
var instances = M.Slider.init(elems,{indicators:true});
instances[0].start();






}
function scrollearA(){
if(entop)
  document.scrollingElement.scrollTo(0,screen.height);
else
   document.scrollingElement.scrollTo(0,0);

}



function scrolleo(){
console.log(document.scrollingElement.scrollTop);
console.log(screen.height);
if(document.scrollingElement.scrollTop>(screen.height/2)){
    imagenscroll.innerText="arrow_upward"
    entop=false;
}
  
else
{
    entop=true;
    imagenscroll.innerText= "arrow_downward"
}
  


}