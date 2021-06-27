const slidersContainer = document.getElementById("film-highlight");
const listSliders = slidersContainer.getElementsByClassName("item-film-highlight");

let indexSlider = 0;
let subInterval;
renderSlider(0, true);
$(document).ready(function () {
  renderListDots();
  // SSSlider();
  intervalSlider();
  
  $("#icon-right").click((e) => {
    if (indexSlider < listSliders.length - 3) {
      indexSlider += 1;
    } else {
      indexSlider = 0;
      renderSlider(indexSlider, true);
      return;
    }
    renderSlider(indexSlider);
  });
  $("#icon-left").click((e) => {
    if (indexSlider > 0) {
      indexSlider -= 1;
    } else {
      indexSlider = listSliders.length - 1;
      renderSlider(indexSlider, true);
      return;
    }
    renderSlider(indexSlider);
  });
});

function intervalSlider() {
  let time = $("#film-highlight").attr("data-time");
  let atime = $("#film-highlight").attr("time");
  let isInterVal = $("#film-highlight").attr("data-interval");
  if (isInterVal === "true") {
    clearInterval(subInterval);
    subInterval = setInterval(() => {
      if (indexSlider < listSliders.length - 10) {
        indexSlider += 1;
      }
      renderSlider(indexSlider);
    }, 1 * atime);
    
    subInterval = setInterval(() => {
      
      if (indexSlider < listSliders.length - 3) {
        indexSlider += 1;
      } else {
        indexSlider = 0;
        renderSlider(indexSlider, true);
        return;
      }
      renderSlider(indexSlider);
    }, 1 * time);
  }
}
function SSSlider() {
  let atime = $("#film-highlight").attr("time");
  let isInterVal = $("#film-highlight").attr("data-interval");
  if (isInterVal === "true") {
    clearInterval(subInterval);
    subInterval = setInterval(() => {
      if (indexSlider < listSliders.length - 10) {
        indexSlider += 1;
      }
      renderSlider(indexSlider);
    }, 1 * atime);
  }
}

function renderSlider(indexSlider = 0, isReset = false) {
  // console.log(indexSlider);
  for (let i = 0; i < listSliders.length; i++) {
    listSliders[i].style.transform = `translateX(${(i - indexSlider ) * (100)}% )`;
    if (isReset) {
      listSliders[i].style.transition = "none";
    } else {
      listSliders[i].style.transition = "all 1s ease-in-out";
    }
  }
}

function renderListDots() {
  const listDots = document.getElementsByClassName('list-dots');
  if (listDots.length > 0) {
    for (let i = 0; i < listSliders.length; i++) {
      const node = document.createElement('span');
      node.setAttribute('data-index-slider', i);
      node.classList.add('dot');
      node.addEventListener('click', () => {
        renderSlider(i);
      });
      listDots[0].appendChild(node);
    }
  }
}
window.addEventListener('resize', (e) => {
  console.log(e);
})