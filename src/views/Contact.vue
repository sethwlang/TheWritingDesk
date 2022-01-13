<template>
  <div class="contact">
  <div class="text-content">
    <h1>Get In Touch</h1>
    <p>Hi there! Have a project you'd like to discuss with me? I'd love to hear from you!<br> Fill out the following form and I'll be in touch within 24 business hours.</p>
  </div>
    <div>
      <img src="@/assets/images/Contact2.jpg" width="60%" class="ml-auto mr-auto fade-reveal"/>
        <form class="mt-12 ml-auto mr-auto fade-reveal">
          <div>
          <label>Name</label>
          <input required name="name"  type="text" autocomplete="off" class="border-twd-grey-primary-dark">
          </div>
          <div>
            <label>Email</label>
          <input required name="email"  type="email" autocomplete="off" class="border-twd-grey-primary-dark">
          </div>
          <div><label>Tell me about your project</label>
          <textarea name="message"  rows="6" placeholder="Message" class="border-twd-grey-primary-dark"></textarea>
          </div>
          <button class="send">Send</button>
        </form>
    </div>
  </div>
</template>