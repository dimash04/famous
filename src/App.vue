<template>
  <div id="app">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Content from './components/Content.vue'
import './assets/style.scss'


export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Content,
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style-type: none;
  }
  .container {
    max-width: 1168px;
    margin: auto;
  }
  button, input {
    outline: none;
  }
  a {
    text-decoration: none;
  }
</style>
