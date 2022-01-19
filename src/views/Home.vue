<template>
  <div id="home" class="home">
    <div class="flex columns bg-twd-blue-secondary-light header">
      <div class="company-description">
        <div class="text-content">
          <h1 class="handwriting">Welcome to<br> The Writing Desk!</h1>
          <p class="split-lines"> I’m Bailey Lang, founder of The Writing Desk. I write copy businesses of all sizes, and provide one-on-one
            editing services and accountability for my fellow writers.</p>
          <h4 class="split-lines">The Writing Desk exists to help you make a difference with your writing.</h4>
          <p class="split-lines">I’m excited you’re here! If you’re here, it’s probably because you’re struggling to find the right words for
            something that matters to you. I’d love to help.</p>
          <p class="split-lines">Maybe you’re a small business hoping to land new business that will propel you to the next stage of growth,
            or you know your website copy needs refreshed.
            Maybe you’ve written the story you always wanted to share with the world, and you’re not sure what comes
            next.</p>
          <p class="split-lines">If any of that sounds familiar, you’re in the right place!</p>
        </div>
      </div>
      <div class="image" :style="{backgroundImage:'url('+require('@/assets/images/LandingPage.jpg')+')'}"></div>
    </div>

    <div class="flex flex-wrap writing-services fade-reveal">
      <h1 class="handwriting">What I Do</h1>
      <div class="w-full services-panel tab-panel">
        <ul class="flex mb-0 list-none flex-wrap flex-row">
          <li class="-mb-px last:mr-0 text-center">
            <a class="text-xl font-bold px-5 py-3 block leading-normal" v-on:click="toggleTabs(1)"
               v-bind:class="{'active': openTab === 1}">
              Writing
            </a>
          </li>
          <li class="-mb-px last:mr-0 text-center">
            <a class="text-xl font-bold px-5 py-3 block leading-normal" v-on:click="toggleTabs(2)"
               v-bind:class="{'active': openTab === 2}">
              Editing
            </a>
          </li>
          <li class="-mb-px last:mr-0 text-center">
            <a class="text-xl font-bold px-5 py-3 block leading-normal" v-on:click="toggleTabs(3)"
               v-bind:class="{'active': openTab === 3}">
              Accountability
            </a>
          </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded bg-twd-blue-secondary-light services-descriptions panel-content">
          <div class="py-5 flex vertical center">
            <div class="tab-content tab-space">
              <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                <div class="flex vertical items-center justify-center bg-twd-blue-secondary-light">
                  <p>
                  Your search for a copywriter is at an end! I specialize in writing for education, finance, and technology businesses.
                  </p>
                </div>
                <router-link class="primary-button fade-reveal" to="/write">
                  <span>Learn More</span>
                </router-link>
              </div>
              <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                <div class="flex vertical items-center justify-center">
                  <p>
                  It's time to take your writing to the next level! I provide developmental editing, copy editing, and more.
                  </p>
                </div>
                <router-link class="primary-button" to="/edit">
                  <span>Learn More</span>
                </router-link>
              </div>
              <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                <div class="flex vertical items-center justify-center">
                  <p>
                  If you need additional support in setting—and reaching—your writing goals, look no further! My accountability program is for you.
                  </p>
                </div>
                <router-link class="primary-button" to="/unstuck">
                  <span>Learn More</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-and-testimonials">
      <div id="signup" class="fade-reveal">
        <script async data-uid="4c8af9b4fc" type="application/javascript"
                src="https://expert-painter-8086.ck.page/4c8af9b4fc/index.js"></script>
      </div>
      <div class="testimonials">
        <div id="testimonies">
          <div>
            <p class="quote white-bg fade-reveal">
              “Bailey has been a key part of refining our website copy, creating several key product announcements, and
              creating concise user-help guides.”
              <strong>
              — Sara Blackstock - East Hartford, CT. Virtual Reality Training Software Company. 
              </strong>
            </p>
          </div>
          <div>
            <p class="quote white-bg fade-reveal">
              “Bailey is the consummate professional. She provided clear, concise, and informative feedback to my work. When
              you are writing a large and meandering novel such as mine, it takes a keen and sensitive eye to catch all the
              discrepancies and an avid lover of words to really grasp the heart of your intention. Bailey did all this and
              more.”
              <strong>—Rey, Science Fiction Author.</strong>
            </p>
          </div>
          <div>
            <p class="quote white-bg fade-reveal">
              “Bailey is easy to work with, detail-oriented, and she will take your writing project, or any project, as
              seriously as you do. I have no idea why I thought writing has to be a
              solitary experience we muddle through on our own, when it is only enhanced by working with someone who is
              trained to help you and who has also been there and gets it.” 
              <strong>—Milena Velez, Chapin, SC. YA and Children’s Author.</strong>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber
    }
  }
}
</script>