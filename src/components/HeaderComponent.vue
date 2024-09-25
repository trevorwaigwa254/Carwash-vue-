<template>
  <header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style>
header {
  background-color: #007BFF;
  color: white;
  padding: 15px;
}
nav ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}
nav li {
  margin-right: 20px;
}
nav a {
  color: white;
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
</style>
