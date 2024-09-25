<template>
  <section>
    <h2>Our Services</h2>
    <ul>
      <li>Car Wash - $15</li>
      <li>Car Polish - $25</li>
      <li>Car Wax - $30</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ServicesComponent'
}
</script>

<style>
section {
  background-color: #141212;
  padding: 15px;
  border-radius: 8px;
}
h2 {
  color: #cfa119;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 0;
}
</style>
