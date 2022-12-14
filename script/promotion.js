// JavaScript source code for event page
// Developed by: Jia Zhu, Tingting Song, Xiaotong Zhang
// Script Date: September 12, 2021

"use strict";

runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock() {
  /* Store the current date and time */
  var currentDay = new Date();
  var dateStr = currentDay.toLocaleDateString();
  var timeStr = currentDay.toLocaleTimeString();

  /* Display the current date and time */
  document.getElementById("dateNow").innerHTML = dateStr + "&nbsp" + timeStr;
  /* Calculate the days until oct 1st */
  var promotionDay = new Date("October 1, 2021 00:00:00");

  var daysLeft = (promotionDay - currentDay) / (1000 * 60 * 60 * 24);

  /* Calculate the hours left in the current day */
  var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

  /* Calculate the minutes and seconds left in the current hour */
  var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
  var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

  /* Display the time left until promotion day ends */
  document.getElementById("days").textContent = Math.floor(daysLeft);
  document.getElementById("hrs").textContent = Math.floor(hrsLeft);
  document.getElementById("mins").textContent = Math.floor(minsLeft);
  document.getElementById("secs").textContent = Math.floor(secsLeft);
}
function changeText() {
  let x = document.getElementById("promotion_info");
  // check the status of the currentSign
  if (x.innerHTML === "π20% off Entire Purchase Promo code: offT80π") {
    // switch text
    x.innerHTML = "π50%  off on Vegan Burgerπ";
  } else if (x.innerHTML === "π50%  off on Vegan Burgerπ") {
    // switch text
    x.innerHTML = "π50%  off nowπ";
    // change the current sign value to on
  } else {
    x.innerHTML = "π20% off Entire Purchase Promo code: offT80π";
  }
}
changeText();
setInterval("changeText()", 1000);

