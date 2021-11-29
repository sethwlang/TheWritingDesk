<template>
  <div class="home">
    <div class="grid grid-cols-2 bg-twd-blue-secondary-light">
      <div class=" pt-40 pr-20 pl-10"><p>Welcome to The Writing Desk!</p>
        <p> I’m Bailey Lang, founder of The Writing Desk. I write for businesses of all sizes, and provide one-on-one
          editing services for my fellow writers.</p>
        <p>The Writing Desk exists to help you make a difference with your writing.</p>
        <p>I’m excited you’re here! If you’re here, it’s probably because you’re struggling to find the right words for
          something that matters to you. I’d love to help.</p>
        <p>Maybe you’re a small business hoping to land a new contract that will propel you to the next stage of growth,
          or you know your website copy needs refreshed.
          Maybe you’ve written the story you always wanted to share with the world, and you’re not sure what comes
          next.</p>

        <p>If any of that sounds familiar, you’re in the right place! </p></div>
      <div><img src="@/assets/images/LandingPage.jpg" width="100%" height="100px"/></div>
    </div>

      <div class="" id="overview">
        <div class="text-5xl text-center">
          <div class="p-10">Writing Services</div>
        </div>
      </div>
    <div class="flex flex-wrap ">
      <div class="w-full ">
        <ul class="flex mb-0 list-none flex-wrap pt-3 flex-row">
          <li class="-mb-px last:mr-0 flex-auto text-center">
            <a class="text-xl font-bold uppercase px-5 py-3 rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'bg-twd-blue-secondary-light': openTab !== 1, 'text-white bg-twd-grey-primary-light': openTab === 1}">
              Writing
            </a>
          </li>
          <li class="-mb-px last:mr-0 flex-auto text-center">
            <a class="text-xl font-bold uppercase px-5 py-3  rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'bg-twd-blue-secondary-light': openTab !== 2, 'text-white bg-twd-grey-primary-light': openTab === 2}">
              Editing
            </a>
          </li>
          <li class="-mb-px last:mr-0 flex-auto text-center">
            <a class="text-xl font-bold uppercase px-5 py-3 rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'bg-twd-blue-secondary-light': openTab !== 3, 'text-white bg-twd-grey-primary-light': openTab === 3}">
              Accountability
            </a>
          </li>
        </ul>
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded bg-twd-blue-secondary-light">
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                <div class="flex items-center justify-center bg-twd-blue-secondary-light">
                  I offer copywriting, grant and proposal writing, and ghostwriting services for companies and individuals.
                </div>
                <div class="bg-twd-grey-primary-light text-white pt-2 pb-2 pl-5 pr-5 rounded-full mt-5 mb-5 mr-auto ml-auto w-32 flex items-center justify-center">
                  <router-link to="/write">
                    Learn More
                  </router-link>
                </div>
              </div>
              <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                <div class="flex items-center justify-center ">
                  Ready to take your writing to the next level? I provide developmental editing, copyediting, accountability
                  partnerships, and more.
                </div>
                <div class="bg-twd-grey-primary-light text-white pt-2 pb-2 pl-5 pr-5 rounded-full mt-5 mb-5 mr-auto ml-auto w-32 flex items-center justify-center ">
                  <router-link to="/edit">
                    Learn More
                  </router-link>
                </div>
              </div>
              <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                <div class="flex items-center justify-center ">
                  Looking for additional support in setting—and reaching—your writing goals? My accountability program is for you.
                </div>
                <div class="bg-twd-grey-primary-light text-white pt-2 pb-2 pl-5 pr-5 rounded-full mt-5 mb-5 mr-auto ml-auto w-32 flex items-center justify-center">
                  <router-link to="/unstuck">
                    Learn More
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center" id="signup"><script async data-uid="4c8af9b4fc" type="application/javascript" src="https://expert-painter-8086.ck.page/4c8af9b4fc/index.js"></script></div>
      <div class=" grid grid-cols-3 p-10 inline-block bg-twd-blue-secondary-light" id="testimonies">
        <div class="p-5 text-center bg-twd-blue-primary rounded-r-2xl rounded-tl-2xl h-52 flex items-center justify-center m-2">“Bailey has been an key part of refining our website copy, creating several key product announcements, and creating concise user-help guides”.<br/>— Sara Blackstock - East Hartford, CT</div>
        <div class="p-5 text-center bg-twd-grey-primary-light text-white rounded-r-2xl rounded-tl-2xl h-52 flex items-center justify-center m-2">Bailey is the consummate professional. She provided clear, concise, and informative feedback to my work. When you are writing a large and meandering novel such as mine, it takes a keen and sensitive eye to catch all the discrepancies and an avid lover of words to really grasp the heart of your intention. Bailey did all this and more.”<br/>—Rey</div>
        <div class="p-5 text-center bg-twd-blue-primary rounded-r-2xl rounded-tl-2xl h-52 flex items-center justify-center m-2">Bailey is easy to work with, detail-oriented, and she will take your writing project, or any project, as seriously as you do. But she will also make it fun for you. I have no idea why I thought writing has to be a solitary experience we muddle through on our own, when it is only enhanced by working with someone who is trained to help you and who has also been there and gets it.” <br/>—Milena Velez, Chapin, SC</div>
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
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>