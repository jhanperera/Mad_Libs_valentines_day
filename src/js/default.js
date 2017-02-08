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
        $("#landingBanner").hide(1000);
        $("#categoryBanner").show(1000);
    });
    $("#classicBTN").click(function(){
        $("#categoryBanner").hide(1000);
        $("#categoryBanner").show(1000);
    });
    $("#eroticaBTN").click(function(){
        $("#categoryBanner").hide(1000);
        $("#categoryBanner").show(1000);
    });
    $("#highschoolBTN").click(function(){
        $("#categoryBanner").hide(1000);
        $("#categoryBanner").show(1000);
    });
    $("#romanticBTN").click(function(){
        $("#categoryBanner").hide(1000);
        $("#categoryBanner").show(1000);
    });
});
