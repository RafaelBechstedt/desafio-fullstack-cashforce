<template>
  <div class="home">
    <Sidebar />
    <div class="content">
      <Header />
      <InvoiceList />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/my-sidebar.vue';
import Header from '../components/my-header.vue';
import InvoiceList from '../components/invoice-list.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
    Header,
    InvoiceList
  }
};
</script>

<style scoped>
.home {
  display: flex;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>