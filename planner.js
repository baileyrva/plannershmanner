$(document).ready(function() {
  //pull and display date and time
  var NowMoment = moment().format("LLL");
  var eDisplayMoment = document.getElementById("displayMoment");
  eDisplayMoment.innerHTML = NowMoment;
  //time displayed as integer
  var currentTime = moment().format("HH");
  //hour variables
  var nineAM = 9;
  var tenAM = 10;
  var elevenAM = 11;
  var twelvePM = 12;
  var onePM = 13;
  var twoPM = 14;
  var threePM = 15;
  var fourPM = 16;
  var fivePM = 17;
  console.log(currentTime);
  console.log(nineAM);
  console.log(elevenAM);
  //if statements for coloring of table
  //9:00
  if (currentTime > nineAM) {
    $("#nineInput").css("background-color", "#A9A9A9");
  } else if (currentTime < nineAM) {
    $("#nineInput").css("background-color", "#66CDAA");
  } else {
    $("#nineInput").css("background-color", "#F08080");
  }
  //10:00
  if (currentTime > tenAM) {
    $("#tenInput").css("background-color", "#A9A9A9");
  } else if (currentTime < tenAM) {
    $("#tenInput").css("background-color", "#66CDAA");
  } else {
    $("#tenInput").css("background-color", "#F08080");
  }
  //11:00
  if (currentTime > elevenAM) {
    $("#elevenInput").css("background-color", "#A9A9A9");
  } else if (currentTime < elevenAM) {
    $("#elevenInput").css("background-color", "#66CDAA");
  } else {
    $("#elevenInput").css("background-color", "#F08080");
  }
  //12:00
  if (currentTime > twelvePM) {
    $("#twelveInput").css("background-color", "#A9A9A9");
  } else if (currentTime < twelvePM) {
    $("#twelveInput").css("background-color", "#66CDAA");
  } else {
    $("#twelveInput").css("background-color", "#F08080");
  }
  //1:00
  if (currentTime > onePM) {
    $("#oneInput").css("background-color", "#A9A9A9");
  } else if (currentTime < onePM) {
    $("#oneInput").css("background-color", "#66CDAA");
  } else {
    $("#oneInput").css("background-color", "#F08080");
  }
  //2:00
  if (currentTime > twoPM) {
    $("#twoInput").css("background-color", "#A9A9A9");
  } else if (currentTime < twoPM) {
    $("#twoInput").css("background-color", "#66CDAA");
  } else {
    $("#twoInput").css("background-color", "#F08080");
  }
  //3:00
  if (currentTime > threePM) {
    $("#threeInput").css("background-color", "#A9A9A9");
  } else if (currentTime < threePM) {
    $("#threeInput").css("background-color", "#66CDAA");
  } else {
    $("#threeInput").css("background-color", "#F08080");
  }
  //4:00
  if (currentTime > fourPM) {
    $("#fourInput").css("background-color", "#A9A9A9");
  } else if (currentTime < fourPM) {
    $("#fourInput").css("background-color", "#66CDAA");
  } else {
    $("#fourInput").css("background-color", "#F08080");
  }
  //5:00
  if (currentTime > fivePM) {
    $("#fiveInput").css("background-color", "#A9A9A9");
  } else if (currentTime < fivePM) {
    $("#fiveInput").css("background-color", "#66CDAA");
  } else {
    $("#fiveInput").css("background-color", "#F08080");
  }
});
