import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import $ from 'jquery';
gsap.registerPlugin(ScrollTrigger);

export function revealSplitTexts() {
    const revealSplitTexts = gsap.utils.toArray('.splitting');

    revealSplitTexts.forEach((revealSplitTexts) => {
      gsap.from(revealSplitTexts, {
        scrollTrigger: {
          start: 'top 88%',
          end: 'bottom -25%',
          trigger: revealSplitTexts,
          toggleClass: 'reveal',
          markers: false,
          once:true,
        }
      });

      //if ($(this).hasClass('lines')) {
      //  var word = $(this).find('.word');
      //  word.forEach(() => {
      //    $(this).addEventListener("animationend", function () {
      //      $(this).contents().unwrap();
      //    });
      //  });
      //}

    });

}

export function fadeInReveal() {
  const fadeRevealElements = gsap.utils.toArray('.fade-reveal');

  fadeRevealElements.forEach((fadeRevealElements) => {
    gsap.from(fadeRevealElements, {
      scrollTrigger: {
        start: 'top 88%',
        end: 'bottom -25%',
        trigger: fadeRevealElements,
        toggleClass: 'active',
        //markers: true,
        once:false
      }
    });
  });
}