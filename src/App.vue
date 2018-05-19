<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Casher from './components/Cash/Cashier.vue'
export default {
  name: 'app',
  components: {
    Casher
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
