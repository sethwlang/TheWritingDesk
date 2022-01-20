<template>
  <div class="contact">
  <div class="text-content">
    <h1 class="handwriting">Get In Touch</h1>
    <p>Hi there! Have a project you'd like to discuss with me? I'd love to hear from you!</p>
    <p>Fill out the following form and I'll be in touch within 24 business hours.</p>
  </div>
    <div>
      <img src="@/assets/images/Contact2.jpg" width="60%" class="ml-auto mr-auto"/>
        <form class="mt-12 ml-auto mr-auto" >
          <div>
          <label class="handwriting">Name</label>
          <input required name="name"  type="text" autocomplete="off" class="border-twd-grey-primary-dark">
          </div>
          <div>
            <label class="handwriting">Email</label>
          <input required name="email"  type="email" autocomplete="off" class="border-twd-grey-primary-dark">
          </div>
          <div><label class="handwriting">Tell me about your project</label>
          <textarea name="message"  rows="6" placeholder="Message" class="border-twd-grey-primary-dark"></textarea>
          </div>
          <button class="send">Send</button>
        </form>
    </div>
  </div>
</template>