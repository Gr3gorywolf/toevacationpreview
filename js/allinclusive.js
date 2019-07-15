
var hoteles=document.getElementById("containerhotels");
var carrousel=document.getElementById("slides")
var innerhoteles="";
var innercarousel="";
for (var all of allinclusive){
  console.log(all);
innerhoteles+=allinclusivecard(all);
innercarousel+=allinclusivecarousel(all);
}
carrousel.innerHTML=innercarousel;
hoteles.innerHTML=innerhoteles;


  var instance = M.Slider.init(document.getElementById("slideshow"), {
    interval: 2300,
    indicators:false
   
  });
  document.addEventListener('DOMContentLoaded', function () {
  // Side Menu
  const sideNav = document.querySelector('.sidenav');
  M.Sidenav.init(sideNav, {});
});
function loaded(){

 for(let all of allinclusive){
  var buttonbook = new TrekkSoft.Embed.Button();
    buttonbook
      .setAttrib("target", "fancy")
      .setAttrib("entryPoint", "tour")
      .setAttrib("tourId", all.tour_id)
      .setAttrib("referral", "TOUROPERADORESESPERANZA")
      .setAttrib("fancywidth", "70%")
      .setAttrib("fancyheight", "100%")
      .registerOnClick("#"+all.treksoft_id);
      var buttoninfo=new TrekkSoft.Embed.Button();
      buttoninfo
      .setAttrib("target", "fancy")
      .setAttrib("entryPoint", "tour_details")
      .setAttrib("tourId", all.tour_id)
      .setAttrib("referral", "TOUROPERADORESESPERANZA")
      .setAttrib("fancywidth", "70%")
      .setAttrib("fancyheight", "100%")
      .registerOnClick("#"+all.treksoft_id+"(i)");
    }

}

