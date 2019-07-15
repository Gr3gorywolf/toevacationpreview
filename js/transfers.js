
document.addEventListener('DOMContentLoaded', function () {
    // Side Menu
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});
  });
    var instance = M.Carousel.init(document.getElementById("carousel1"), {
      fullWidth: true,
      indicators: true
    });
    setInterval(() => {
        console.log("pase");
        if (!instance.pressed)
          instance.next();
      }, 6000)