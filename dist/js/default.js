var wow=new WOW({boxClass:"content-block",animateClass:"active",offset:1,mobile:!0,live:!0});wow.init(),WebFont.load({google:{families:["Open Sans:400,700","Yeseva One:400"]}}),$(document).ready(function(){$("#startBTN").click(function(){$("#landingBanner").hide(500),$("#categoryBanner").show(500)}),$("#classicBTN").click(function(){$("#categoryBanner").hide(500),$("#classicBanner").show(500)}),$("#eroticaBTN").click(function(){$("#categoryBanner").hide(500),$("#eroticaBanner").show(500)}),$("#highschoolBTN").click(function(){$("#categoryBanner").hide(500),$("#highschoolBanner").show(500)}),$("#romanticBTN").click(function(){$("#categoryBanner").hide(500),$("#romanticBanner").show(500)}),$("#homeBTN").click(function(){$("#resultsBanner").hide(500),$("#categoryBanner").show(500)})}),$("#classicRomForm").submit(function(n){$("#classicBanner").hide(500),$("#resultsBanner").show(500),n.preventDefault()}),$("#eroticaForm").submit(function(n){$("#eroticaBanner").hide(500),$("#resultsBanner").show(500),n.preventDefault()}),$("#hsForm").submit(function(n){$("#highschoolBanner").hide(500),$("#resultsBanner").show(500),n.preventDefault()}),$("#romanticForm").submit(function(n){$("#romanticBanner").hide(500),$("#resultsBanner").show(500),n.preventDefault()});