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
    $("#resultsPara").append("Ashamed of his ugly(adjective) penis(body part), the beast concealed himself
              inside his castle, with a road(noun) as his only window to the outside world. The
              girl(noun) she had offered was truly an enchanted girl(same noun), which would
              bloom until his 35th(ordinal number - 1st 2nd etc) year. If he could learn to
              suck(verb) another, and earn her car(noun) in return by the time the last
              spoon(object) fell, then the spell would be broken. If not, he would be doomed to
              remain a dog(animal) for all time.<mark>" + values[8] + "</mark>.")
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
    $("#resultsPara").append("Show me how you slap(action word) yourself. Keep still. Weʼre going to have to
            work on keeping you still, diana(name) … Letʼs see if we can make you fart(action
            word) like this … Youʼre so beautifully(adverb) beautiful(adjective). God, I want you
            … Iʼm going to jump(action word) you now, Miss Steele … Hard ... run(Action word)
            for me, jhan(name).<mark>" + values[8] + "</mark>.")
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
    $("#resultsPara").append("One upon a time there was a __Noue(1)__
    living all alone in the middle of ___Place(1)___, __Noue(1)__
    sat on his __Furniture__
    watching all the couples play and wishing that he had someone too. from his __Place(1)__
    came this idea that he would __Verb(Present tense)(1)___
    year and year. <br />
    Years of _Verb(ending in ing) all alone turned his heart into __hard object___.
    While little did he know that living in the ___Place(1)___,
    below Another  __Noue(2)__
    was listening to his __Verb(Present tense)(1)___
    Because she believed a __Noue(1)__ __Body part___
    was meant for ___Noun(2)__
    Now __Noune(2)___
    was so ready to meet __Noune(2)
    above the __Place(1)
    As he __Verb___
    of hope for finding Love. <mark>" + values[8] + "</mark>.");
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
    $("#resultsPara").append("Being a woman is worse than being a cleaner(occupation) there is so much farting
        (ACTION VERB ENDS WITH ING) and lightbulb(noun) running(action verb ends
        with ing) to be done: elbow(body part) to be talked(passive tense), bums(body
        part) shaved, a foot(body part) plucked, left arm (body part) pumiced, a little
        toe(body part) exfoliated and moisturised, spots cleansed, roots dyed, eyelashes
        tinted, nails filed, cellulite massaged, stomach muscles exercised.");
  }
  else{
    //Empty fields were detected inform the user
    alert("Oh no, look like one or more fields are empty.");
  }
  //Stops the submit button from reloading the page
  event.preventDefault();
});
