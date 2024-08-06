<template>
  <div class="invoice-list">
    <div class="invoice-header">
      <img src="/IconInvoiceList.png" alt="Ícone" class="header-icon" />
      <span class="header-title">Notas fiscais</span>
    </div>
    <p class="header-description">Visualize as notas fiscais que você tem.</p>
    <div class="invoice-header-row">
      <div class="invoice-field">Nota Fiscal</div>
      <div class="invoice-field">Sacado</div>
      <div class="invoice-field">Cedente</div>
      <div class="invoice-field">Emissão</div>
      <div class="invoice-field">Valor</div>
      <div class="invoice-field">Status</div>
      <div class="invoice-field">Dados do Cedente</div>
    </div>
    <div class="invoice-items">
      <div class="invoice-item" v-for="invoice in invoices" :key="invoice.orderNfId">
        <div class="invoice-field">{{ invoice.orderNfId }}</div>
        <div class="invoice-field">{{ invoice.buyer.name }}</div>
        <div class="invoice-field">{{ invoice.provider.name }}</div>
        <div class="invoice-field">{{ new Date(invoice.emissionDate).toLocaleDateString() }}</div>
        <div class="invoice-field value">{{ formatCurrency(invoice.value) }}</div>
        <div class="invoice-field status">{{ invoice.orderStatusBuyer }}</div>
        <div class="invoice-field">
          <button>Dados do Cedente</button>
        </div>
      </div>
    </div>
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
  },
  methods: {
    formatCurrency(value) {
      const number = parseFloat(value);
      return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
  }
};
</script>

<style scoped>
.invoice-list {
  padding: 50px;
}

.invoice-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.header-icon {
  width: 24px;
  height: auto;
  margin-right: 10px;
}

.header-title {
  color: #021B51;
  font-size: 28px;
  font-weight: bold;
  text-align: left;
}

.header-description {
  color: #727D94;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: left;
}

.invoice-header-row {
  display: flex;
  padding: 10px;
  font-weight: bold;
}

.invoice-items {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Espaçamento entre itens */
}

.invoice-item {
  display: flex;
  gap: 10px;
  padding: 10px;
  border: 1px solid #DFE2EB;
  border-radius: 6px; 
  align-items: center;
}

.invoice-field {
  flex: 1; /* Faz com que cada campo ocupe espaço igual */
  color: #4D5566;
  font-size: 16px;
}

.invoice-field.value {
  color: #00AD8C;
}

.invoice-field.status {
  color: #00AD8C;
  text-transform: uppercase;
}

button {
  background: none;
  border: 1px solid #ddd;
  padding: 8px 29px;
  border-radius: 100px;
  cursor: pointer;
  color: #727D94;
}
</style>
