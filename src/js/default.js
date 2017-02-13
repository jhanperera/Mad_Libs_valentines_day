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
        $("#resultsPara").empty();
    });
});

//When the submit buttons are clicked
$( "#classicRomForm" ).submit(function( event ) {
  //We have to do input validation here
  var values = [];
  var emptyCheck = false;
  //For each input that is text we check if its empty
  $('#classicRomForm input[type=text]').each(function() {
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
    $("#classicBanner").hide(500);
    $("#resultsBanner").show(500);
    //add the story to the resultsPara
    $("#resultsPara").append("Ashamed of his <mark>" + values[0] + "</mark> <mark>" + values[1]
              +"</mark>, the beast concealed himself inside his castle, with a <mark>" + values[2]
              +"</mark> as his only window to the outside world. The <mark>" + values[3]
              +"</mark> she had offered was truly an enchanted <mark>" + values[3]
              +"</mark>, which would bloom until his <mark>" + values[4]
              +"</mark> year. If he could learn to <mark>" + values[5]
              +"</mark> another, and earn her <mark>"+ values[6]
              +"</mark> in return by the time the last <mark>" + values[7]
              +"</mark> fell, then the spell would be broken. If not, he would be doomed to remain a <mark>" +  values [8]
              +"</mark> for all time.")
  }
  else{
    //Empty fields were detected inform the user
    alert("Oh no, look like one or more fields are empty.")
  }
  //Stops the submit button from reloading the page
  event.preventDefault();
});

$( "#eroticaForm" ).submit(function( event ) {
  //We have to do input validation here
  var values = [];
  var emptyCheck = false;
  //For each input that is text we check if its empty
  $('#eroticaForm input[type=text]').each(function() {
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
    $("#eroticaBanner").hide(500);
    $("#resultsBanner").show(500);
    //add the story to the resultsPara
    $("#resultsPara").append("Show me how you <mark>" + values[0]
            +"</mark> yourself. Keep still. Weʼre going to have to work on keeping you still, <mark>" + values[1]
            +"</mark>… Letʼs see if we can make you <mark>" + values[2]
            +"</mark> like this … Youʼre so <mark>" + values[3] + "</mark> <mark>" + values[4]
            +"</mark> God, I want you Iʼm going to <mark>" + values[5]
            +"</mark> you now, Miss Steele … Hard ... <mark>" + values[6]
            +"</mark> for me, <mark>" +  values[7] +"</mark>");
  }
  else{
    //Empty fields were detected inform the user
    alert("Oh no, look like one or more fields are empty.")
  }
  //Stops the submit button from reloading the page
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
    $("#resultsPara").append("One upon a time there was a <mark>" + values[0]
                +"</mark> living all alone in the middle of <mark>" + values[1] + "</mark>, <mark>" + values[0]
                +"</mark> sat on his <mark>" + values[2]
                +"</mark> watching all the couples play and wishing that he had someone too. from his <mark>" + values[1]
                +"</mark> came this idea that he would <mark>" + values[3]
                +"</mark> year and year."
                + "Years of <mark>" + values[4]
                +"</mark> all alone turned his heart into <mark>" + values[5]
                +"</mark> While little did he know that living in the <mark>" + values[1]
                +"</mark> below Another  <mark>" + values[6]
                +"</mark> was listening to his <mark>" + values[3]
                +"</mark> Because she believed a <mark>" + values[0] + "</mark> <mark>" + values[7]
                +"</mark> was meant for <mark>" + values[6]
                +"</mark> Now <mark>" + values[6]
                +"</mark> was so ready to meet <mark>" + values[6]
                +"</mark> above the <mark>" + values[1]
                +"</mark> As he <mark>" + values[8]
                +"</mark> of hope for finding Love.");
  }
  else{
    //Empty fields were detected inform the user
    alert("Oh no, look like one or more fields are empty.");
  }
  //Stops the submit button from reloading the page
  event.preventDefault();
});

$( "#romanticForm" ).submit(function( event ) {
  //We have to do input validation here
  var values = [];
  var emptyCheck = false;
  //For each input that is text we check if its empty
  $('#romanticForm input[type=text]').each(function() {
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
    $("#romanticBanner").hide(500);
    $("#resultsBanner").show(500);
    //add the story to the resultsPara
    $("#resultsPara").append("Being a woman is worse than being a <mark>" + values[0]
        +"</mark> there is so much <mark>" + values[1]
        +"</mark> and <mark>" + values[2] + "</mark> <mark>" + values[3]
        +"</mark> to be done: <mark>" + values[4]
        +"</mark> to be <mark>" + values[5] + "</mark> <mark>" + values[6]
        +"</mark> shaved, a <mark>" + values[7]
        +"</mark> plucked, left <mark>" + values[8]
        +"</mark> pumiced, a little <mark>" + values[9]
        +"</mark> exfoliated and moisturised, spots cleansed, roots dyed, eyelashes tinted, nails filed, cellulite massaged, stomach muscles exercised.");
  }
  else{
    //Empty fields were detected inform the user
    alert("Oh no, look like one or more fields are empty.");
  }
  //Stops the submit button from reloading the page
  event.preventDefault();
});
