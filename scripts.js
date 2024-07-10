let lastScroll = 0

function eventListeners() {
  var flkty = new Flickity(".main-carousel");
  document.getElementsByClassName("flickity-viewport")[0].style.height =
    "";
  flkty.resize();
  flkty.reposition();
  window.addEventListener("resize", (event) => {
    document.getElementsByClassName("flickity-viewport")[0].style.height =
      "";
    flkty.resize();
    flkty.reposition();
  });
  flkty.on("change", function (index) {
    flkty.reposition();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  eventListeners();
});