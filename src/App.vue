<template>
  <Navbar/>
  <!-- <img src="./assets/ccuPlusLogo.png" alt="this is ccuplus logo"> -->
  <router-view/>
</template>
<script>
import Navbar from './views/Navbar'
export default {
  components:{
    Navbar
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
