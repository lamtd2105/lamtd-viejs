<template>
  <div id="app">
    <AppHeader msg="Welcome to Your Vue.js App"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Hello App!</h1>
    <p>
      <!-- use router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link to="/">Go to Foo</router-link>
      <router-link to="/products">Go to product list</router-link>
      <router-link to="/product/111111">Go to product detail</router-link>
    </p>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>

  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader
  },
  created: function(){
    console.log("CDN", CDN)
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
