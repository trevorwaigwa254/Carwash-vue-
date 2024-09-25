<template>
    <section>
      <h2>Book a Service</h2>
      <form @submit.prevent="submitBooking">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
  
        <label for="service">Select Service:</label>
        <select id="service" v-model="selectedService" required>
          <option value="">--Please choose an option--</option>
          <option value="Car Wash">Car Wash</option>
          <option value="Car Polish">Car Polish</option>
          <option value="Car Wax">Car Wax</option>
        </select>
  
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="date" required />
  
        <button type="submit">Book Now</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'BookingComponent',
    data() {
      return {
        name: '',
        selectedService: '',
        date: '',
        message: ''
      };
    },
    methods: {
      submitBooking() {
        this.message = `Thank you, ${this.name}! Your ${this.selectedService} is booked for ${this.date}.`;
        this.name = '';
        this.selectedService = '';
        this.date = '';
      }
    }
  }
  </script>
  
  <style>
  section {
    margin-top: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin: 10px 0 5px;
  }
  input, select {
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
  