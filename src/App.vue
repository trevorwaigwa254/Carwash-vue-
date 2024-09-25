<template>
  <div id="app">
    <HeaderComponent />
    <main>
      <HomeComponent />
      <AboutComponent />
      <ServicesComponent />
      <BookingComponent />
      <ContactComponent />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ServicesComponent from './components/ServicesComponent.vue';
import BookingComponent from './components/BookingComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: { HeaderComponent, AboutComponent, ServicesComponent, BookingComponent, ContactComponent, FooterComponent }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  color: #333;
}
main {
  padding: 20px;
}
</style>