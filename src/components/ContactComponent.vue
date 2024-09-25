<template>
    <section>
      <h2>Contact Us</h2>
      <p>Get in touch with us to learn more about our services or to schedule an appointment.</p>
      <form @submit.prevent="submitContact">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
    
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
    
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
    
        <button type="submit">Send Message</button>
      </form>
      <p v-if="messageSent">{{ messageSent }}</p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactComponent',
    data() {
      return {
        name: '',
        email: '',
        message: '',
        messageSent: ''
      };
    },
    methods: {
      submitContact() {
        this.messageSent = `Thank you, ${this.name}! Your message has been sent.`;
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  }
  </script>
  
  <style>
  section {
    background-color: #f8f8f8;
    padding: 15px;
    border-radius: 8px;
  }
  h2 {
    color: #007BFF;
  }
  label {
    margin: 10px 0 5px;
  }
  input, textarea {
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>