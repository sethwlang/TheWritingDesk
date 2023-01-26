<template>
  <div id="home" class="home">
    <div class="flex columns bg-twd-blue-secondary-light header">
      <div class="company-description">
        <div class="text-content">
          <h1 class="handwriting mt-10">Welcome to<br> The Writing Desk!</h1>
          <p >I’m Bailey Lang: writer, editor, coach, and founder of The Writing Desk. </p>
          <p>If you’re in education, finance, or technology and looking for copywriting, ghostwriting, or editing, your search has come to an end. </p>
          <p>If you’re an author looking for actionable editing support or help setting—and reaching—your writing goals, you’re in the right place! </p>
          <h4 >The Writing Desk exists to help you tell stories that matter.</h4>
          <p >I’m excited you’re here! Let’s talk about what I can do for you.</p>
        </div>
      </div>
      <div class="image" :style="{backgroundImage:'url('+require('@/assets/images/LandingPage.webp')+')'}"></div>
    </div>

    <div class="flex flex-wrap writing-services">
      <h1 class="handwriting">The Writing Desk Services</h1>
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
              Coaching
            </a>
          </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded bg-twd-blue-secondary-light services-descriptions panel-content">
          <div class="py-5 flex vertical center">
            <div class="tab-content tab-space">
              <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                <div class="flex vertical items-center justify-center bg-twd-blue-secondary-light">
                  <p>
                    Struggling to find the right words? I specialize in copywriting and ghostwriting for businesses in education, finance, and technology.
                  </p>
                </div>
                <router-link class="primary-button" to="/write">
                  <span>Learn More</span>
                </router-link>
              </div>
              <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                <div class="flex vertical items-center justify-center">
                  <p>
                    It’s time to take your writing to the next level! Whether you need developmental editing, copyediting, or proofreading, I’ve got you covered.
                  </p>
                </div>
                <router-link class="primary-button" to="/edit">
                  <span>Learn More</span>
                </router-link>
              </div>
              <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                <div class="flex vertical items-center justify-center">
                  <p>
                    If you’re a writer who needs additional support figuring out how to make real progress on your writing goals, look no further! My one-on-one coaching program is for you.
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
      <div id="signup">
        <script async data-uid="2734e4e08a" type="application/javascript" src="https://expert-painter-8086.ck.page/2734e4e08a/index.js" defer></script>
      </div>
      <div class="testimonials">
        <div id="testimonies">
          <div>
            <p class="quote white-bg">
              “Bailey has been a key part of refining our website copy, creating several key product announcements, and
              creating concise user-help guides.”
              <strong>
              — Sara Blackstock - East Hartford, CT. Virtual Reality Training Software Company. 
              </strong>
            </p>
          </div>
          <div>
            <p class="quote white-bg">
              “Bailey is the consummate professional. She provided clear, concise, and informative feedback to my work. When
              you are writing a large and meandering novel such as mine, it takes a keen and sensitive eye to catch all the
              discrepancies and an avid lover of words to really grasp the heart of your intention. Bailey did all this and
              more.”
              <strong>—Rey, Science Fiction Author.</strong>
            </p>
          </div>
          <div>
            <p class="quote white-bg">
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