<template>
  <div class="contact ml-28 mr-28">
    <h1>Get In Touch</h1>
    <div class="pb-6">Hi there! Have a project you'd like to discuss with me? I'd love to hear from you! Fill out the following form and I'll be in touch within 24 business hours.</div>
    <div>
      <img src="@/assets/images/Contact2.jpg" width="60%" class="ml-auto mr-auto"/>
        <form class="mt-12 ml-auto mr-auto w-7/12"  >
          <div>
          <label class="pr-24">Name</label>
          <input required name="name"  type="text" autocomplete="off" class="rounded-3xl pt-5 pb-5 mb-10 border-4 border-twd-grey-primary-dark w-10/12">
          </div>
          <div>
            <label class="pr-24">Email</label>
          <input required name="email"  type="email" autocomplete="off" class="rounded-3xl pt-5 pb-5 mb-10 border-4 border-twd-grey-primary-dark w-10/12">
          </div>
          <div><label class="pr-8 float-left">Tell me about<br/> your project</label>
          <textarea name="message"  rows="6" placeholder="Message" class="rounded-3xl pt-5 pb-5  mb-10 pl-8 pr-10 border-4 border-twd-grey-primary-dark w-10/12"></textarea>
          </div>
          <button class="bg-twd-blue-primary pt-2 pb-2 pl-5 pr-5 rounded-full  mb-5 float-right mr-10">Send</button>
        </form>
    </div>
  </div>
</template>