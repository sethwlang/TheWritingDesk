<template>
  <div class="edit">
    <div class="flex columns header">
      <div class="image">
        <!--<img src="@/assets/images/writing.jpg"/>-->
        <img   src="../assets/images/writing.jpg" />
      </div>
      <div class="flex vertical center content">
        <div class="text-content">
          <h1 class="handwriting">Editing Services</h1>
          <p >When you’re ready to take your writing from draft to done,
            I’ll be here to help you develop your best ideas—and avoid going to print with any pesky typos still hanging around.</p>
            <p  >Whether you’re working with the first draft of a book or putting the final touches in place for a marketing campaign, I’ve got an editing service to match.</p>
            <p  >Read on to learn about everything from developmental editing to proofreading.</p> 
        </div>
      </div>
    </div>

    <section class="bg-primary-light">
      <div class="text-content">
        <h2 class="handwriting">Developmental Editing</h2>
        <p>Developmental editing takes two forms: ongoing coaching and feedback as you work on a draft, or an in-depth review of your completed manuscript.</p>
 
        <p>When working with me on developmental edits, you’ll get a professional editorial perspective on your manuscript along with specific, actionable feedback.</p>
 
        <p>Developmental editing provides insight into big-picture items like pacing, dialogue, and structure.</p>
 
        <p>If you have a draft in progress, we’ll meet regularly to discuss your writing, assess your writing habits, and figure out how to overcome any roadblocks. 
          I’ll read your work as you go and make suggestions.</p>
 
        <p>If you have a completed manuscript, we’ll meet twice: once at the start of the project and once after I’ve provided my comments. 
          You’ll receive an in-depth assessment of your writing, including in-line comments and specific recommendations for your revision process.</p>

        <p class="quote white-bg"><i>“I cannot express how happy I am with the end result. I would not hesitate to work with Bailey again.”
        <strong>—Rey, Science Fiction Author.</strong></i></p>
        <p> I bring more than a decade of writing and editing experience to the table. I provide developmental edits for
          writers working on:</p>
          <ul class="list-disc ml-5">
            <li class="indent-1">Fiction—especially science fiction, fantasy, and romance</li>
            <li>Nonfiction—with an emphasis on business, leadership, and self-help</li>
            <li>Academic monographs and articles—particularly in the humanities</li>
            </ul>

        <p>Developmental editing is an investment in your growth as a writer and in the worth of your writing.</p>
    
        <p>I have a limited number of slots available for developmental editing, so don’t wait! <a href="https://calendly.com/the-writing-desk/free-consultation"  target="_blank">Contact me</a> to
          schedule a free 30-minute consultation.</p><br/>

        <a href="https://calendly.com/the-writing-desk/free-consultation" class="primary-button" ><span>Contact Bailey</span></a>

        
      </div>
    </section>


      
    <section class="flex columns editing-proofreading">
      <div><img class="" src="../assets/images/writing3.jpg"/></div>
      <div class="content">
        <h2 class="handwriting">Line Editing, Copy Editing,<br> and Proofreading</h2>
        <p>
        Developmental editing helps you identify big-picture items for revision, but doesn’t focus on style,
        technical considerations, or typos. However, your work also deserves the TLC of line editing, copy editing, and
        proofreading.
        </p>
        <p>
        Spell check and grammar check are useful tools, but they’re still no match for a human editor who understands
        context—as well as how, when, and why to break the rules.
        </p>
        <p>
        Read on to learn about line editing, copy editing, and proofreading services for website copy, marketing collateral, books, and any other writing projects.
        </p>

      </div>
    </section>
      <div>
        <div class="tab-panel">
          <ul class="flex mb-0 list-none flex-wrap flex-row">
            <li class="-mb-px last:mr-0 text-center">
              <a class="text-xl font-bold px-5 py-3 block leading-normal" v-on:click="toggleTabs(1)"
                v-bind:class="{'active': openTab === 1}">
                Line Editing
              </a>
            </li>
            <li class="-mb-px last:mr-0 text-center">
              <a class="text-xl font-bold px-5 py-3 block leading-normal" v-on:click="toggleTabs(2)"
                v-bind:class="{'active': openTab === 2}">
                Copy Editing
              </a>
            </li>
            <li class="-mb-px last:mr-0 text-center">
              <a class="text-xl font-bold px-5 py-3 block leading-normal" v-on:click="toggleTabs(3)"
                v-bind:class="{'active': openTab === 3}">
                Proofreading
              </a>
            </li>
          </ul>
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded bg-twd-blue-secondary-light panel-content">
            <div class="py-5 flex vertical center">
              <div class="tab-content tab-space">
                <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                  <div class="flex vertical items-center justify-center bg-twd-blue-secondary-light">
                
                    <p>
                    While line editing, I focus on content, style, and language use. Line editing helps identify overused phrases,
                    inconsistencies in style, and other issues to ensure your project is readable and accessible.
                    </p>
                  </div>
                </div>
                <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                  <div class="flex vertical items-center justify-center">
                   
                    <p>
                    Copy editing emphasizes technical considerations like grammar, spelling, punctuation, and sentence structure.
                    If you’re using an in-house style guide or APA, MLA, or Chicago style, I’ll make sure your project adheres to
                    those guidelines.
                    </p>
                  </div>
                </div>
                <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                  <div class="flex vertical items-center justify-center">
                   
                    <p>Proofreading is the last edit before a project is published—this is where I'll check your work for any typos,
                      extra spaces, or formatting issues. When your project is ready to spread its wings and fly, proofreading clears the runway.</p><br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-content">
          <p>You can purchase any editing service individually, or get a discount when bundling all three.</p><br/>

          <p>At the end of the editing process, you’ll receive an edited copy of your document, along with a summary
            explaining what changes I made, why I made them, and any patterns I noticed.</p><br/>

          <p>The cost of putting poorly edited work out into the world is astronomical—investing in edits ahead of time
            saves time, money, and embarrassment. <a href="https://calendly.com/the-writing-desk/free-consultation"  target="_blank">Contact me</a> to get started!</p><br/>

            <a href="https://calendly.com/the-writing-desk/free-consultation" class="primary-button" ><span>Contact Bailey</span></a><br/><br/>

          <p class="quote white-bg"><i>"I couldn't be more pleased to work with Bailey! She's an amazing editor—really knows her stuff and also so
            quick and efficient. I loved that she was very responsive and answered all my questions quickly. Bailey is an
            amazing find"<br/><strong>—Mish S., Cookbook Author.</strong></i></p>
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