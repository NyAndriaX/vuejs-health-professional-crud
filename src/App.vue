<template>
  <ModalComponent/>
  <TableauComponent/>
</template>

<script>
import TableauComponent from './components/tableau.vue';
import ModalComponent from "./components/modal.vue"

export default {
  name: 'App',
  components: {
    TableauComponent,
    ModalComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
