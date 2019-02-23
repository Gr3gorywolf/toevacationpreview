
var imagenscroll;
var entop=true;
function loaded(){
var slides=document.getElementById("slides");
var containerpaquetes=document.getElementById("containerpaquetes");
var botonscroll=document.getElementById("botonscroll");
 imagenscroll=document.getElementById("imagenboton")
containerpaquetes.innerHTML="";
slides.innerHTML+=slider_slide("Pongase en contacto con nosotros",
`<br><br><i class='material-icons inline-icon'>phone</i>+1(829)-523-5453<br><br>
<i class='material-icons inline-icon'>mail</i>&nbsp;ToursOperadoresEsperanza@gmail.com <br><br>
<img class='inline-icon' style='height:20px;width:20px' src='img/facebook.png' />&nbsp;ToursOperadores Esperanza `
,"img/slide5.jpg")
slides.innerHTML+=slider_slide("Encuentre su tour ideal","Solo denos la informacion de lo que desee hacer y nosotros haremos el resto por ti","img/slide1.jpg")
slides.innerHTML+=slider_slide("Tours unicos en el pais","Aqui podra encontrar tours que en ningun otro sitio podra encontrar","img/slide2.jpg")
slides.innerHTML+=slider_slide("Vive","","img/slide3.jpg")
slides.innerHTML+=slider_slide("Vive","","img/slide4.jpg")
for(var i=0;i<5;i++){
containerpaquetes.innerHTML+=packpageview("sadsadasdasd ","sdsadsadasddddddddddddddddd ","img/slide3.jpg",523)
}
var elems = document.querySelectorAll('.slider');
var instances = M.Slider.init(elems,{indicators:true,duration:1000});
instances[0].start();






}
function scrollearA(){
if(entop)
  document.scrollingElement.scrollTo(0,screen.height-65);
else
   document.scrollingElement.scrollTo(0,0);

}



function scrolleo(){
console.log(document.scrollingElement.scrollTop);
console.log(screen.height);
if(document.scrollingElement.scrollTop>((screen.height)/2)){
    imagenscroll.innerText="arrow_upward"
    entop=false;
}
  
else
{
    entop=true;
    imagenscroll.innerText= "arrow_downward"
}
  


}