$(document).ready(function(){"use strict";setTimeout(function(){jQuery(".preloader").fadeOut(300)},300),particlesJS("particles-js",{particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}});var e=$("body").find("section").first().attr("id");$("a[href='#"+e+"']").addClass("active"),$("a").on("click",function(){$("a").removeClass("active"),$(this).addClass("active")}),$(window).on("load scroll",function(){var e;$("section").each(function(){$(this).offset().top<=$(window).scrollTop()+$(window).height()/2&&(e=$(this).attr("id"))}),$("a").removeClass("active"),$("a[href='#"+e+"']").addClass("active")}),$(window).on("scroll",function(){$(this).scrollTop()>200?$(".position_top").addClass("sticky"):$(".position_top").removeClass("sticky")}),$(".mobile-menu").on("click",function(e){$(".main-nav").hasClass("slidenav")?$(".main-nav").removeClass("slidenav"):$(".main-nav").addClass("slidenav"),e.preventDefault()}),$(".remove").on("click",function(e){$(".main-nav").hasClass("slidenav")?$(".main-nav").removeClass("slidenav"):$(".main-nav").addClass("slidenav")}),$(".main-nav .bi").on("click",function(e){var i=$(this);i.parent().siblings().find(".sub-menu").slideUp(),i.parent().siblings().find(".bi").addClass("bi-chevron-down"),i.hasClass("bi-chevron-down")?i.removeClass("bi-chevron-down").addClass("bi-chevron-up"):i.removeClass("bi-chevron-up").addClass("bi-chevron-down"),i.next(".sub-menu").slideToggle()}),$(".tab-link").on("click",function(e){$(".tab-link").removeClass("active"),$(this).addClass("active")}),$(".counter").counterUp({delay:10,time:1e3}),$(".video-popup").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),new Swiper(".team-slider",{loop:!0,slidesPerView:3,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},992:{slidesPerView:3}}}),new Swiper(".partner-slider",{loop:!0,slidesPerView:3,spaceBetween:30,speed:1e3,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next-c",prevEl:".swiper-button-prev-c"},breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},992:{slidesPerView:3}}}),new Swiper(".solutions-slider",{loop:!0,slidesPerView:3,spaceBetween:30,speed:1e3,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},992:{slidesPerView:3}}}),new WOW().init(),window.wow=new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,offset:100}),window.wow.init(),$("#contactus-form").submit(function(e){e.preventDefault();var i=new FormData(this);$.ajax({url:atob("aHR0cHM6Ly9nZXRmb3JtLmlvL2YvZWJwd3duZ2E="),type:"POST",data:i,contentType:!1,processData:!1,success:function(e){Swal.fire({icon:"success",title:"Contact Form Submitted",text:"Your message has been successfully sent!",showConfirmButton:!1,timer:1500})},error:function(e){Swal.fire({icon:"error",title:"Oops...",text:"Something went wrong! Please try again later.",showConfirmButton:!1,timer:1500})}})})});