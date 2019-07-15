// Side Menu
var modal = null;
var sidenavinst=null;
var adventurescontainer = document.getElementById("adventurescontainer");
var Allinclusivecontainer = document.getElementById("hotelscontainer");
var searchBar = document.getElementById("searchBar");
var adventuresdata = "";
var hotelsdata = "";
var modalContainer = document.getElementById("modalcontent");
var modalTitle = document.getElementById("modaltitle");
for (var i = 0; i < 3; i++) {
  adventuresdata += adventuresCard(adventures[i]);
}
for (var i = 0; i < 4; i++) {
  hotelsdata += allinclusivecardv1(allinclusive[i]);
}
adventurescontainer.innerHTML = adventuresdata;
Allinclusivecontainer.innerHTML = hotelsdata;

function loaded() {

  for (let ave of adventures) {
    var buttonbook = new TrekkSoft.Embed.Button();
    buttonbook
      .setAttrib("target", "fancy")
      .setAttrib("entryPoint", "tour")
      .setAttrib("tourId", ave.tour_id)
      .setAttrib("referral", "TOUROPERADORESESPERANZA")
      .setAttrib("fancywidth", "70%")
      .setAttrib("fancyheight", "100%")
      .registerOnClick("#" + ave.treksoft_id);
    var buttoninfo = new TrekkSoft.Embed.Button();
    buttoninfo
      .setAttrib("target", "fancy")
      .setAttrib("entryPoint", "tour_details")
      .setAttrib("tourId", ave.tour_id)
      .setAttrib("referral", "TOUROPERADORESESPERANZA")
      .setAttrib("fancywidth", "70%")
      .setAttrib("fancyheight", "100%")
      .registerOnClick("#" + ave.treksoft_id + "(i)");
  }
  for (let all of allinclusive) {
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
  var random = Math.floor(Math.random() * ads.length)
  document.getElementsByTagName("header")[0].innerHTML += adbanner(ads[random].img)

}





document.addEventListener('DOMContentLoaded', function () {
  // Side Menu
  const sideNav = document.querySelector('.sidenav');
   var  instances=M.Sidenav.init(sideNav, {});
   var sidenavinst=instances
console.log(instances);
  // Slider
  const slider = document.querySelector('.slider');
  M.Slider.init(slider, {
    indicators: false,

    transition: 500,
    interval: 6000
  });

  // Scrollspy
  const ss = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(ss, {});

  // Material Boxed
  const mb = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(mb, {});
  //carousel
  var cr = document.querySelectorAll('.carousel');
  M.Carousel.init(cr, {
    fullWidth: true,
    duration: 150,

  });
  var carrouselinst = M.Carousel.getInstance(cr[0]);
  setInterval(() => {
    console.log("pase");
    if (!carrouselinst.pressed)
      carrouselinst.next();
  }, 6000)

  var md = document.querySelectorAll('.modal');
  var ins = M.Modal.init(md);
  modal = M.Modal.getInstance(document.getElementById("modal1"));
});
searchBar.addEventListener("keyup", function (event) {

  if (event.keyCode === 13) {

    event.preventDefault();
    modalContainer.innerHTML = "";
    modalTitle.innerHTML = "Search results for: " + searchBar.value.toString();
    var adventuresresults = "";
    var packagesresults = "";
    var indexes = [];
    for (let adv of adventures) {
      if (adv.name.toLowerCase().indexOf(searchBar.value.toString().toLowerCase()) != -1) {
        indexes.push(adv.tour_id);
        adventuresresults += `
              <li class="collection-item avatar elevarable" id="${adv.tour_id}">
              <img src="${adv.image}" alt="" class="circle" style="height:42px;width:42px;">
              <span class="title truncate">${adv.name}</span>
              <p> <i class="material-icons inline-icon">location_on </i>  ${adv.location}<br>
              <i class="material-icons inline-icon">attach_money </i> ${adv.price}
              </p>
              <a href="#!" class="secondary-content"><i class="material-icons black-text" style="margin-top:18px">navigate_next</i></a>
            </li>
              `
      }

    }
    for (let pack of allinclusive) {
      if (pack.name.toLowerCase().indexOf(searchBar.value.toString().toLowerCase()) != -1) {
        var dias = pack.packpages.find((valor) => {
          indexes.push(pack.tour_id);
          return valor.nights == 3;
        });

        packagesresults += `
        <li class="collection-item avatar elevarable" id="${pack.tour_id}">
        <img src="${pack.image}" alt="" class="circle">
        <span class="title">${pack.name}</span>
        <p> <i class="material-icons inline-icon">location_on </i>  ${pack.location}<br>
        <i class="material-icons inline-icon">attach_money  </i> ${dias.nights} nights from ${dias.price} US
        </p>
        <a href="#!" class="secondary-content"><i class="material-icons black-text" style="margin-top:18px">navigate_next</i></a>
      </li>
        `
      }
    }

    if (adventuresresults.length > 0) {
      modalContainer.innerHTML += ` <li class="collection-header "> 
        <h5  class="center"> <i class="material-icons inline-icon" style="font-size:40px">beach_access</i>Adventures</h5>
        ${
          adventuresresults
        }
        </li>`
    }
    if (packagesresults.length > 0) {

      modalContainer.innerHTML += ` <li class="collection-header  "> 
        <h5 class="center"> <i class="material-icons inline-icon" style="font-size:40px">card_travel</i> Packages</h5>
        ${
          packagesresults
        }
        </li>`
    }

    for (let ind of indexes) {
      let buttoninfo = new TrekkSoft.Embed.Button();
      buttoninfo
        .setAttrib("target", "fancy")
        .setAttrib("entryPoint", "tour_details")
        .setAttrib("tourId", ind)
        .setAttrib("referral", "TOUROPERADORESESPERANZA")
        .setAttrib("fancywidth", "70%")
        .setAttrib("fancyheight", "100%")
        .registerOnClick("#" + ind);
    }
    modal.open();
  }

 
});
