// const listflimhighlight = document.getElementById("film-highlight");
// const filmhighlight = document.getElementsByTagName("item-film-highlight")
// let indexSlider = 0;
// let subInterval;
// renderSlider(0, true);
// $(document).ready(function () {
//     // renderListDots();
//     intervalSlider();
//     $("#icon-right").click((e) => {
//       if (indexSlider < filmhighlight.length - 1) {
//         indexSlider += 1;
//       } else {
//         indexSlider = 0;
//         renderSlider(indexSlider, true);
//         return;
//       }
//       renderSlider(indexSlider);
//     });
//     $("#icon-left").click((e) => {
//       if (indexSlider > 0) {
//         indexSlider -= 1;
//       } else {
//         indexSlider = filmhighlight.length - 1;
//         renderSlider(indexSlider, true);
//         return;
//       }
//       renderSlider(indexSlider);
//     });
//   });

// //   function intervalSlider() {
// //     let time = $("#slider-container").attr("data-time");
// //     let isInterVal = $("#slider-container").attr("data-interval");
// //     if (isInterVal === "true") {
// //       clearInterval(subInterval);
// //       subInterval = setInterval(() => {
// //         if (indexSlider < listSliders.length - 1) {
// //           indexSlider += 1;
// //         } else {
// //           indexSlider = 0;
// //           renderSlider(indexSlider, true);
// //           return;
// //         }
// //         renderSlider(indexSlider);
// //       }, 1 * time);
// //     }
// //   }
//   function renderSlider(indexSlider = 0, isReset = false) {
//     console.log(indexSlider);
//     for (let i = 0; i < filmhighlight.length; i++) {
//         filmhighlight[i].style.transform = `translateX(${(i - indexSlider) * 100}%)`;
//       if (isReset) {
//         filmhighlight[i].style.transition = "none";
//       } else {
//         filmhighlight[i].style.transition = "all 1s ease-in-out";
//       }
//     }
//   }