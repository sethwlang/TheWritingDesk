<template>
  <div class="about">

    <div class="flex columns header">
      <div class="image">
        <img class="fade-reveal" src="../assets/images/AboutMe.jpg" />
      </div>
      <div class="flex vertical center content">
        <h1>Hi! I’m Bailey Lang</h1>
        <p>Once, I thought I would be a marketing analyst forever, but that all changed when I started a master’s degree
          in rhetoric and writing. Before I knew it, I’d <a href="#">written a book</a>, left my corporate job, and
          started a PhD program in rhetoric and writing studies.</p>

        <p>By the time I finished my dissertation, I realized helping other writers—my undergraduate students, business
          owners, academics, novelists, and more—is what truly lights me up inside.</p>

        <p><b>Now, I help writers and businesses tell stories that matter.</b></p>

        <p>Writing is hard. We’ve all experienced the terror of a blank page, a blinking cursor, and a looming deadline.
          Whether you’re trying to launch new website copy or finish your book, finding the right words can be hard.</p>

        <p>Finding the right support doesn’t have to be! Here at The Writing Desk, I offer a range of services that can
          help you get your writing from a vague idea to a finished product.</p>
      </div>
    </div>

    <section class="insights">
      <ul class="fade-reveal">
        <li>Do you need help setting and achieving manageable writing goals?<br>
        My <router-link to="/unstuck">Accountability Program</router-link> is designed with you in mind.
        </li>

        <li>Are you looking for expert insight on a book, marketing campaign, or short story?<br>
        You’ll find everything you need in my<router-link to="/edit">editing packages</router-link>.
        </li>

        <li>Is it time to work with a writer for your email campaign, proposals, or a book?<br>
          Check out my <router-link to="/write">writing offerings</router-link> —I’m excited to help you out!
        </li>
      </ul>
    </section>

    <section>

      <h2>Here’s what it’s like to work with me!</h2>

      <div class="flex mb-14 mt-14 about-me-testimonials fade-reveal">
        <transition-group class="flex overflow-hidden pr-6" tag="div">
          <div v-for="slide in slides"
              class="p-10 h-44 transition duration-700 ease-in-out w-1/3 text-center bg-twd-blue-primary rounded-r-2xl rounded-tl-2xl flex-none mr-1 ml-1 testimonial-slide"
              :key="slide.id">
            <p v-html="slide.quote" class="no-split"></p>
          </div>
        </transition-group>
        <div class='flex'>
          <button class='carousel-controls__button' @click="previous">prev</button>
          <button class='carousel-controls__button' @click="next">next</button>
        </div>
      </div>

    <div class="form-wrapper fade-reveal">
        <script async type="application/javascript" data-uid="12d0a0d491"
            src="https://expert-painter-8086.ck.page/12d0a0d491/index.js">
        </script>
    </div>

    </section>

  </div>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        {
          quote: '“Bailey provided me with invaluable tips and tricks that I now use with every session.”<span>—Milena Velez, SC, Childrens writer. Accountability Program.</span>',
          id: 1
        },
        {
          quote: '“Bailey is fast, professional, and talented.”<span>—Sara Blackstock, East Hartford, CT. Copywriting.</span>',
          id: 2
        },
        {
          quote: 'Great editor—timely work, understood what I’m doing, and made helpful suggestions. Highly recommended!”<span>—Plum' +
              '      White Press, LLC. Copy editing.</span>',
          id: 3
        },
        {
          quote: '“Bailey was friendly and easy to work with. It was a joy!”<span>—Crystal B., Novelist. Proofreading.</span>',
          id: 4
        }
      ]
    }
  },
  methods: {
    next() {
      const first = this.slides.shift()
      this.slides = this.slides.concat(first)
    },
    previous() {
      const last = this.slides.pop()
      this.slides = [last].concat(this.slides)
    }
  }
}
</script>