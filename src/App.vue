<template>
  <Navbar/>
  <!-- <img src="./assets/ccuPlusLogo.png" alt="this is ccuplus logo"> -->
  
  <router-view/>
  <Footer/>
</template>
<script>
import Navbar from './views/Navbar'
import Footer from './views/Footer'

export default {
  components:{
    Navbar,
    Footer
  },
  setup() {
    
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
