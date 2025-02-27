<template>
  <div class="p-m-4">
    <DataTable :value="products" responsiveLayout="scroll">
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Название"></Column>
      <Column field="price" header="Цена"></Column>
    </DataTable>
  </div>
</template>

<script>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

export default {
  name: 'DataTableView',
  components: {
    DataTable,
    Column
  },
  setup() {
    // Тестовые данные для таблицы
    const products = ref([
      { id: 1, name: 'Продукт A', price: 100 },
      { id: 2, name: 'Продукт B', price: 200 },
      { id: 3, name: 'Продукт C', price: 300 }
    ])

    return { products }
  }
}
</script>

<style scoped>
/* Дополнительные стили для таблицы можно добавить здесь */
</style>
