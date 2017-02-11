// Default JavaScript Functions and Initiations

// Setup WOW.js
var wow = new WOW({
  boxClass:     'content-block',
  animateClass: 'active',
  offset:       1,
  mobile:       true,
  live:         true
});
// Initiate WOW.js
wow.init();

// Load Custom Google Font
WebFont.load({
  google: {
    families: ['Open Sans:400,700', 'Yeseva One:400']
  }
});

//Custom JS goes here!
//Wire up all the button to show and hide divs
$(document).ready(function(){
    $("#startBTN").click(function(){
        $("#landingBanner").hide(500);
        $("#categoryBanner").show(500);
    });
    $("#classicBTN").click(function(){
        $("#categoryBanner").hide(500);
        $("#classicBanner").show(500);
    });
    $("#eroticaBTN").click(function(){
        $("#categoryBanner").hide(500);
        $("#eroticaBanner").show(500);
    });
    $("#highschoolBTN").click(function(){
        $("#categoryBanner").hide(500);
        $("#highschoolBanner").show(500);
    });
    $("#romanticBTN").click(function(){
        $("#categoryBanner").hide(500);
        $("#romanticBanner").show(500);
    });
    $("#homeBTN").click(function(){
        $("#resultsBanner").hide(500);
        $("#categoryBanner").show(500);
    });
});

//When the submit buttons are clicked
$( "#classicRomForm" ).submit(function( event ) {
  //We have to do input validation here
  $("#classicBanner").hide(500);
  $("#resultsBanner").show(500);
  event.preventDefault();
});

$( "#eroticaForm" ).submit(function( event ) {
  //We have to do input validation here
  $("#eroticaBanner").hide(500);
  $("#resultsBanner").show(500);
  event.preventDefault();
});

$( "#hsForm" ).submit(function( event ) {
  //We have to do input validation here
  $("#highschoolBanner").hide(500);
  $("#resultsBanner").show(500);
  event.preventDefault();
});

$( "#romanticForm" ).submit(function( event ) {
  //We have to do input validation here
  $("#romanticBanner").hide(500);
  $("#resultsBanner").show(500);
  event.preventDefault();
});
