var adventureContainer = document.getElementById("containeradventures");
var carrousel = document.getElementById("slides")
var containerlocations = document.getElementById("containerlocations");
var adventurelocations = document.getElementById("adventurelocation")
cargar();




function cargar(location = null) {
  var inneradventures = "";
  var innercarousel = "";
  var innerlocations = travellocation('All');
  var locations = ['All'];
  var everything = true;
  if (location != 'All' && location != null) {
    everything = false;

  }

  for (var all of adventures) {
    console.log(all);
    if (everything || all.location == location) {
      inneradventures += adventuresCardv2(all);
      innercarousel += allinclusivecarousel(all);
    }
    if (locations.indexOf(all.location) == -1) {
      locations.push(all.location)
      innerlocations += travellocation(all.location);

    }
  }

  carrousel.innerHTML = innercarousel;
  containerlocations.innerHTML = innerlocations;
  adventureContainer.innerHTML = inneradventures;

  if (everything) {
    adventurelocations.innerHTML = "All adventures"
    M.toast({
      html: "Showing all adventures"
    });
  } else {
    M.toast({
      html: "Showing adventures from: " + location
    });
    adventurelocations.innerHTML = "Adventures from: " + location;
  }
  var instance = M.Slider.init(document.getElementById("slideshow"), {
    interval: 2300,
    indicators: false

  });

  loaded();

}



document.addEventListener('DOMContentLoaded', function () {
  const sideNav = document.querySelector('.sidenav');
  M.Sidenav.init(sideNav, {});
  var instance = M.Slider.init(document.getElementById("slideshow"), {
    interval: 2300,
    indicators: false

  });
});


function loaded() {

  for (let all of adventures) {
    var buttonbook = new TrekkSoft.Embed.Button();
    buttonbook
      .setAttrib("target", "fancy")
      .setAttrib("entryPoint", "tour")
      .setAttrib("tourId", all.tour_id)
      .setAttrib("referral", "TOUROPERADORESESPERANZA")
      .setAttrib("fancywidth", "70%")
      .setAttrib("fancyheight", "100%")
      .registerOnClick("#" + all.treksoft_id);
    var buttoninfo = new TrekkSoft.Embed.Button();
    buttoninfo
      .setAttrib("target", "fancy")
      .setAttrib("entryPoint", "tour_details")
      .setAttrib("tourId", all.tour_id)
      .setAttrib("referral", "TOUROPERADORESESPERANZA")
      .setAttrib("fancywidth", "70%")
      .setAttrib("fancyheight", "100%")
      .registerOnClick("#" + all.treksoft_id + "(i)");
  }

}