<template>
  <div class="contact">
    <div class="text-content">
      <h1 class="handwriting">Get In Touch</h1>
      <p>
        Hi there! Have a project you'd like to discuss with me? I'd love to hear
        from you!
      </p>
      <p>
        Fill out the following form and I'll be in touch within 24 business
        hours.
      </p>
    </div>
    <div>
    
      <ValidationObserver v-slot="{ invalid }">
      <form class="mt-12 ml-auto mr-auto">
        <div>
          <label class="handwriting">Name</label>
          <ValidationProvider v-slot="{ errors }" rules="required|min:3">
            <input
              required
              name="name"
              v-model="name"
              type="text"
              autocomplete="off"
              class="border-twd-grey-primary-dark"
            />
            <span class="text-red-600 text-sm flex ml-5 mb-5">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div>
          <label class="handwriting">Email</label>
          <ValidationProvider v-slot="{ errors }" rules="required|email|min:7">
            <input
              required
              name="email"
              v-model="email"
              type="email"
              autocomplete="off"
              class="border-twd-grey-primary-dark"
            />
            <span class="text-red-600 text-sm flex ml-5 mb-5">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div>
          <label class="handwriting">Tell me about your project</label>
          <ValidationProvider v-slot="{ errors }" rules="required|min:1" class="">
            <textarea
              name="message"
              rows="6"
              v-model="message"
              placeholder="Message"
              class="border-twd-grey-primary-dark"
            ></textarea>
            <span class="text-red-600 text-sm flex ml-5 mb-5">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <button class="send" :disabled="invalid" type="submit" @click.prevent="sendForm">
          Send
        </button>
      </form>
       </ValidationObserver>
    </div>
  </div>
</template>
<script>
import {ValidationObserver, ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import axios from 'axios';

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      alertMessage: "",
    };
  },
  methods: {
    sendForm () {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message };
      axios.post('/contact/contact.php',data)
      .then(async response => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
         this.alertMessage = "There was an issue submiting the form, please try again."
        return Promise.reject(error);
      }

      this.alertMessage ="Form Submitted Successfully";
    })
    .catch(error => {
      this.errorMessage = error;
      this.alertMessage = "There was an issue submiting the form, please try again."
      console.error('There was an error!', error);
    });
    },
  },
  
};
</script>
