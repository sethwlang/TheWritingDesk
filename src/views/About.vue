<template>
  <div class="about">

    <div class="flex columns header">
      <div class="image">
        <img class="fade-reveal" src="../assets/images/AboutMe.jpg" />
      </div>
      <div class="flex vertical center content">
        <div class="text-content">
          <h1>Hi! I’m Bailey Lang</h1>
          <p class="split-lines">Once, I thought I would be a marketing analyst forever, but that all changed when I started a master’s degree
            in rhetoric and writing. Before I knew it, I’d <a href="https://www.nebraskapress.unl.edu/potomac-books/9781612347660/" target="_blank">written a book</a>, left my corporate job, and
            started a PhD program in rhetoric and writing studies.</p>

          <p class="split-lines">By the time I finished my dissertation, I realized helping other writers—ndergraduate students, academics, novelists, 
            and businesses—is what I'm meant to do.</p>

          <p class="split-lines"><b>Now, I help writers and businesses tell stories that matter.</b></p>

          <p class="split-lines">Writing is hard. We’ve all experienced the terror of a blank page, a blinking cursor, and a looming deadline.
            Whether you’re trying to launch new website copy or finish your book, finding the right words can be a challenge.</p>

          <p class="split-lines" style="width:574px;max-width:100%;">Finding the right support doesn’t have to be!</p>
          <p class="split-lines">Here at The Writing Desk, I offer services that will
            help you take your writing from vague idea to finished product.</p>
        </div>
      </div>
    </div>
    <section class="insights">
      <ul class="list-disc ml-5">
        <li>
          Is it time to work with a writer for your email campaign, proposals, or a book? Check out my <router-link to="/write">writing offerings</router-link>—I’m excited to help you out! 
        </li>
        <li>Are you looking for expert edits on your book, short story, or marketing materials? 
          You’ll find everything you need in my <router-link to="/edit">editing packages</router-link>.
        </li>
        <li>Do you need help setting and achieving manageable writing goals?
          My <router-link to="/unstuck">Accountability Program</router-link> is designed with you in mind.
        </li>
      </ul>
    </section>
   
    <VueSlickCarousel v-bind="settings" class="carousel">
    <div v-for="slide in slides" :key="slide.quote">
      <p class="quote white-bg" v-html="slide.quote"></p>
    </div>
    </VueSlickCarousel>
    <div class="flex columns">
      <div class="content">
        <p>I’d love to stay in touch and learn about your projects. Sign up for my free newsletter, Word to the Wise, and get a copy of Get Unstuck, my guide to beating writer’s block once and for all. </p>
      </div>
      <div>
        <script async data-uid="12d0a0d491" src="https://expert-painter-8086.ck.page/12d0a0d491/index.js" type="application/javascript"></script>
      </div>
    </div>


  </div>
</template>


<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  data() {
    return {
      slides: [
        {
          quote: '“Bailey provided me with invaluable tips and tricks that I now use with every session.”<strong>—Milena Velez, SC, YA and Children’s Author. Accountability Program.</strong>'
        },
        {
          quote: '“Bailey is fast, professional, and talented.”<strong>—Sara Blackstock, East Hartford, CT. Copywriting.</strong>'
        },
        {
          quote: '“Great editor—timely work, understood what I’m doing, and made helpful suggestions. Highly recommended!”<strong>—Plum' +
              '      White Press, LLC. Copy editing.</strong>'
        },
        {
          quote: '“Bailey was friendly and easy to work with. It was a joy!”<strong>—Crystal B., Romance Author. Proofreading.</strong>'
        },
        {
          quote: '"I cannot express how happy I am with the end result."<strong>—Rey, Science Fiction Author. Developmental editing.</strong>'
        }
      ],
       settings: {
          arrows: false,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 5000,
          slidesToShow: 2,
          responsive: [
          {
            "breakpoint": 1024,
            "settings": {
            "slidesToShow": 1,
        
        }
    }],

        },
    }
  },
  components: { VueSlickCarousel },
  methods: {
    next() {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous() {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    },
    isEven(id){
      let remainder = id % 2;
      if(remainder == 0){
        return true;
      }
      return false;
    }
  }
}
</script>