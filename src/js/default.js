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
  var values = [];
  var emptyCheck = false;
  //For each input that is text we check if its empty
  $('#hsForm input[type=text]').each(function() {
    //Trim and check if the value is empty
    if($.trim($(this).val()) == ''){
      emptyCheck = true;
      $(this).addClass("error");
    }else{
      //else we push it into the array
      emptyCheck = false;
      $(this).removeClass("error");
      values.push($(this).val());
  }});

  //If we are all good we go in here
  if(emptyCheck == false){
    $("#highschoolBanner").hide(500);
    $("#resultsBanner").show(500);
    //add the story to the resultsPara
    $("#resultsPara").append("Today was the day, <mark>" + values[0] +
    "</mark> built up the courage to finally ask out <mark>" + values[1] +
    "</mark> on a date. It was all planned out, first they would <mark>" + values[2] +
    "</mark> over to the roller rink to spend a few hours <mark>" + values[3] +
    "</mark>. Then watch <mark> " + values[4] +
    "</mark> at the local theater while eating <mark>" + values[5] +
    "</mark>. Finally, at the end of the night <mark>" + values[0] +
    "</mark>. would take  <mark>" + values[1] +
    "</mark> home where he would offer <mark>" + values[6] +
    "</mark> as a thank you and leaned in for a  <mark>" + values[7] +
    "</mark> on the <mark>" + values[8] + "</mark>.")
  }
  else{
    //Empty fields were detected inform the user
    alert("Oh no, look like one or more fields are empty.")
  }
  //Stops the submit button from reloading the page
  event.preventDefault();
});

$( "#romanticForm" ).submit(function( event ) {
  //We have to do input validation here
  $("#romanticBanner").hide(500);
  $("#resultsBanner").show(500);
  event.preventDefault();
});
