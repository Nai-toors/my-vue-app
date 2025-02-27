<template>
  <div>
    <Header />
    <main>
      <DataTableView />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import DataTableView from './components/DataTableView.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    DataTableView
  }
}
</script>

<style>
/* Глобальные стили при необходимости */
</style>
