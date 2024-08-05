<template>
  <div class="sidebar">
    <img src="/Logo.png" alt="Logo" class="logo">
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 15px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.logo {
  width: 70%; 
  margin-bottom: 20px;
}
</style>