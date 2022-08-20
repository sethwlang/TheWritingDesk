import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import $ from "jquery";
import './assets/css/tailwind.css'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "./scss/main.scss";

// Loading Screen
import {loadingSplash} from './js/loading-screen.js'
// Cursor
import {cursorElement, cursorCheck} from './js/cursor-element.js';
//Viewport Type/Size Detection
import {viewportSize, viewportType } from './js/viewport.js';
// Smooth Scroll
//import smoothScroll from './js/smooth-scroll.js';
// Type Animation
//import {circleText} from './js/type-anim.js';
//Splitting.js
import splitText from './js/text-splitting.js';
import {revealSplitTexts, fadeInReveal} from './js/scroll-triggers.js';

//import loadImages from './js/img-prefetch.js'; //not working with @/assets or ../assets ?

//Init Vue
Vue.config.productionTip = false
Vue.use(VueRouter, VueAxios, axios)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


//////////////////////////////////////////
// One Time Functions
//////////////////////////////////////////

$(document).ready(onLoadFunction);

$(document).ready(function() {

  window.addEventListener('load', () => {

    document.addEventListener("scroll", scrollEvent); 

    var prevScrollPosition = 0;
    function scrollEvent() {
      var currentScrollPosition = $(document).scrollTop();
      if (currentScrollPosition > 136 && !$('.nav-links').hasClass('active')) {
        $('nav').addClass('scrolled');
        if (prevScrollPosition < currentScrollPosition) {
          $('nav').addClass('hide');
        } else {
          $('nav').removeClass('hide');
        }
      } else {
        $('nav').removeClass('scrolled');
      }
      prevScrollPosition = currentScrollPosition;
    }

    setTimeout(function(){
      //smoothScroll();
      splitText();
      //circleText();
    }, 100);

    setTimeout(function(){
      cursorElement();
      cursorCheck();
    }, 2000);

  });
  loadingSplash();
  //loadImages();
});



//////////////////////////////////////////
// Functions On Every Page and AJAX Page
//////////////////////////////////////////

function onLoadFunction() {

  $('nav a').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    splitText();
    setTimeout(function(){ // Todo: ensure this fires after vue-router dom load
      revealSplitTexts();
      fadeInReveal();
      cursorCheck();
    }, 200);
  });
  $('.logo a').click(function(){
      $('nav a').removeClass('active');
      splitText();
      setTimeout(function(){ // Todo: ensure this fires after vue-router dom load
        revealSplitTexts();
        fadeInReveal();
        cursorCheck();
      }, 200);
  });

}

//////////////////////////////////////////
// Resize Functions
//////////////////////////////////////////

$(window).resize(function() {
  var fireResizeFunctions;
  clearTimeout(fireResizeFunctions);
  fireResizeFunctions = setTimeout(resizeFunctions, 140);

  $('nav').addClass('resizing');
  function resizeFunctions() {
    //smoothScroll();
    viewportSize();
    viewportType();
    setTimeout(function(){
      $('nav').removeClass('resizing');
    }, 400);
  }
});
