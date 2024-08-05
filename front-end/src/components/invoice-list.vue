<template>
  <div class="invoice-list">
    <table>
      <thead>
        <tr>
          <th>Nota Fiscal</th>
          <th>Sacado</th>
          <th>Cedente</th>
          <th>Emissão</th>
          <th>Valor</th>
          <th>Status</th>
          <th>Dados do Cedente</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in invoices" :key="invoice.orderNfId">
          <td>{{ invoice.orderNfId }}</td>
          <td>{{ invoice.buyer.name }}</td>
          <td>{{ invoice.provider.name }}</td>
          <td>{{ new Date(invoice.emissionDate).toLocaleDateString() }}</td>
          <td>{{ parseFloat(invoice.value).toFixed(2) }}</td>
          <td>{{ invoice.orderStatusBuyer }}</td>
          <td><button>Dados do Cedente</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'InvoiceList',
  data() {
    return {
      invoices: []
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3001/api/orders');
      this.invoices = response.data;
    } catch (error) {
      console.error('Erro ao buscar ordens:', error);
    }
  }
};
</script>

<style scoped>
.invoice-list {
  padding: 15px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>
