function filterProjects() {
  var filters = document.getElementsByName('project-filter');
  
  Flickity(".main-carousel").destroy();
  var all_cells = document.getElementsByClassName('main-carousel')[0].children;
  for (let i=0;i<all_cells.length;i++) {
    all_cells[i].classList.add('carousel-cell');
    all_cells[i].style.display = '';
  }

  var engineering_filter = Array.from(document.getElementsByClassName('carousel-cell engineering'));
  var programming_filter = Array.from(document.getElementsByClassName('carousel-cell programming'));

  if (filters[1].checked == true) {
    for (let i=0;i<all_cells.length;i++) {
      if (!engineering_filter.includes(all_cells[i])) {
        all_cells[i].classList.remove('carousel-cell');
        all_cells[i].style.display = 'none';
      }
    }
  } else if (filters[2].checked == true) {
    for (let i=0;i<all_cells.length;i++) {
      if (!programming_filter.includes(all_cells[i])) {
        all_cells[i].classList.remove('carousel-cell');
        all_cells[i].style.display = 'none';
      }
    }
  }
  eventListeners();
}

function eventListeners() {
  flkty = new Flickity(".main-carousel", {
    cellAlign: "center",
    resize: false,
    prevNextButtons: false,
    cellSelector: ".carousel-cell"
  });

  window.addEventListener("resize", (event) => {
    document.getElementsByClassName("flickity-viewport")[0].style.height =
      "";
    flkty.reloadCells();
    flkty.resize();
    flkty.reposition();
  });
  flkty.on("change", function (index) {
    flkty.reloadCells();
    flkty.reposition();
  });
  
  var newCells = Array.from(document.getElementsByClassName("flickity-slider")[0].children).toSorted((a,b) => {
    const nameA = parseInt(a.id.replace(/\D/g, ''));
    const nameB = parseInt(b.id.replace(/\D/g, ''));
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  })
  document.getElementsByClassName("flickity-slider")[0].innerHTML = '';
  for (let i=0;i<newCells.length;i++) {
    document.getElementsByClassName("flickity-slider")[0].appendChild(newCells[i]);
  }

  document.getElementsByClassName("flickity-viewport")[0].style.height =
    "";
  flkty.reloadCells();
  flkty.resize();
  flkty.reposition();
}

document.addEventListener("DOMContentLoaded", () => {
  eventListeners();
});
