/*
--------------------------------------------------------

[ INSTA , Javscript ]

  Template Name : INSTA - Responsive Onepage Resume Template

  Version       :  1.0

  Author        :  Pixel_Factory

  Author URI    :  http://themeforest.net/user/Pixel_Factory

  Author Email  : h.nafees.anwar@gmail.com

--------------------------------------------------------
*/

/*  ------------------
    Remove Preloader
    ------------------  */
    $(window).load(function(){$("#preloader").delay(350).fadeOut("slow",function(){$(".profile-page, .resume-page, .contact-page").hide()})}),$(document).ready(function(){"use strict";function a(){var a=$(window).width(),b=$(window).height();$(".introduction , .menu").css(a>b?{width:"50%",height:"100%"}:{width:"100%",height:"50%"});var c=$(".introduction").width(),d=$(".introduction").height(),e=$(".introduction").find("img");e.css(c>d?{width:"100%",height:"auto"}:{width:"auto",height:"100%"})}function b(){var a=0;$(".services").each(function(){var b=$(this).height();b>a&&(a=b)}),$(".services").height(a)}$(window).on("load resize",a),$(".menu > div").on("click",function(){var a=$(".introduction").width(),b=$(".menu").width();$(".introduction").animate({left:"-"+a},1e3,"easeOutQuart"),$(".menu").animate({left:b},1e3,"easeOutQuart",function(){$(".home-page").css({visibility:"hidden"})})}),$(".menu div.profile-btn").on("click",function(){$(".profile-page").fadeIn(1200)}),$(".menu div.resume-btn").on("click",function(){$(".resume-page").fadeIn(1200)}),$(".menu div.portfolio-btn").on("click",function(){$(".portfolio-page").fadeIn(1200)}),$(".menu div.contact-btn").on("click",function(){$(".contact-page").fadeIn(1200)}),$(".close-btn").on("click",function(){$(".home-page").css({visibility:"visible"}),$(".introduction, .menu").animate({left:0},1e3,"easeOutQuart"),$(".profile-page, .resume-page, .portfolio-page, .contact-page").fadeOut(800)}),b(),$(window).on("resize",b),$('.intro-content .social-media [data-toggle="tooltip"]').tooltip({placement:"bottom"}),$('.contact-details .social-media [data-toggle="tooltip"]').tooltip(),$(function(){var a=$(".footer").css("background-color");$(".skill").easyPieChart({barColor:a,trackColor:"#c6c6c6",scaleColor:"#c6c6c6",scaleLength:8,lineWidth:8,size:150,lineCap:"butt"})}),$(function(){$("#projects").mixItUp({callbacks:{onMixLoad:function(){$(".portfolio-page").hide()}}})}),$(function(){$(".show-popup").popup({keepInlineChanges:!0,speed:500})}),$(function(){$(".owl-carousel").owlCarousel({navigation:!1,slideSpeed:200,paginationSpeed:300,singleItem:!0})}),$("#contactForm").submit(function(){return $.ajax({type:"POST",url:"php/contact.php",data:$("#contactForm").serialize(),success:function(a){"SEND"==a?($(".success").fadeIn(),$(".error").fadeOut(),$("#contactForm")[0].reset()):($(".success").fadeOut(),$(".error").fadeIn().find("h3").text(a))}}),!1}),$("#google-map").gMap({latitude:31.56213,longitude:74.31946,maptype:"TERRAIN",scrollwheel:!1,zoom:14,markers:[{latitude:31.56213,longitude:74.31946,html:"I am Here!",icon:{image:"images/icon/map_marker.png",iconsize:[46,46],iconanchor:[12,46]}}],controls:{panControl:!1,zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1}})});
