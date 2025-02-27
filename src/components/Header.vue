<template>
  <header class="p-d-flex p-jc-between p-ai-center p-p-3" style="background-color: #f8f9fa;">
    <h1 class="p-m-0">Мой Vue-проект</h1>
    <nav>
      <a href="#">Главная</a>
      <a href="#">О проекте</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
nav a {
  margin-left: 15px;
  text-decoration: none;
  color: #007bff;
}
</style>
