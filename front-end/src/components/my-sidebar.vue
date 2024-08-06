<template>
  <aside class="sidebar">
    <div class="logo">
        <img src="/Logo.png" alt="Logo">
    </div>
    <nav class="nav">
      <ul>
        <li class="nav-item">
          <img src="/IconSidebar.png" alt="Ícone" class="nav-icon" />
          <span class="nav-text">Notas fiscais</span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  background-color: #f5f5f5;
  width: 288px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo {
  height: 80px;
}

.nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.nav-icon {
  width: 24px;
  height: auto;
  margin-right: 10px;
}

.nav-text {
  color: #00AD8C;
  font-size: 16px;
}
</style>