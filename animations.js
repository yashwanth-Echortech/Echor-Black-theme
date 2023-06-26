// magnetic button animation


// const throttle = (fn, wait) => {
//     let inThrottle, lastFn, lastTime;
//     return function () {
//         const context = this,
//             args = arguments;
//         if (!inThrottle) {
//             fn.apply(context, args);
//             lastTime = performance.now();
//             inThrottle = true;
//         } else {
//             clearTimeout(lastFn);
//             lastFn = setTimeout(function () {
//                 if (performance.now() - lastTime >= wait) {
//                     fn.apply(context, args);
//                     lastTime = performance.now();
//                 }
//             }, Math.max(wait - (performance.now() - lastTime), 0));
//         }
//     };
// };

// document.querySelectorAll(".magnetic-button").forEach((box) => {
//     const button = document.createElement("span");
//     button.className = "magnetic-button_base";
//     const mask = document.createElement("span");
//     mask.className = "magnetic-button_mask";
//     button.append(mask);
//     box.prepend(button);
//     const text = box.querySelector(".magnetic-button_text");
//     const stayStill = box.classList.contains("stay-still");
//     const disabled = box.classList.contains("disabled");
//     const easing = { ease: "Power3.easeOut" };

//     if (!stayStill && !disabled) {
//         box.addEventListener(
//             "mousemove",
//             throttle(({ x, y }) => {
//                 let bbox = box.getBoundingClientRect();
//                 let speedX = x - bbox.left - bbox.width / 2;
//                 let speedY = y - bbox.top - bbox.height / 2;
//                 new TimelineMax()
//                     .to(button, 0.5, { x: speedX * 0.4, y: speedY * 0.4, ...easing }, 0)
//                     .to(text, 0.5, { x: speedX * 0.2, y: speedY * 0.2, ...easing }, 0);
//             }, 15)
//         );
//     }
//     if (!disabled) {
//         box.addEventListener("mouseenter", () => {
//             let { width } = button.getBoundingClientRect();
//             new TimelineMax()
//                 .set(mask, { y: 100 })
//                 .set(text, { color: "white" })
//                 .to(mask, 0.8, { y: -width / 2, ...easing })
//                 .set(text, { color: "white" });
//         });

//         box.addEventListener("mouseleave", () => {
//             let { width, height } = button.getBoundingClientRect();
//             new TimelineMax()
//                 .set(text, { color: "black" })
//                 .to(button, 0.8, { x: 0, y: 0 }, 0)
//                 .to(text, 0.8, { x: 0, y: 0 }, 0)
//                 .to(mask, 0.8, { y: -(2 * width + height), ...easing }, 0)
//                 .to(button, 0.8, { x: 0, y: 0 }, 0)
//                 .set(mask, { y: 100 })
//                 .set(text, { color: "black" });
//         });
//     }

// });


// magnetic button animation ends