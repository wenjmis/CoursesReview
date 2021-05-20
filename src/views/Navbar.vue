<template>
  <header>
      <img src="@/assets/ccuPlusLogo.png" alt="this is ccuplus logo"/>
      <h1>CCU PLUS 課程評論網</h1>
      <nav>
      <router-link :to="{name:'Home'}">首頁</router-link>|
      <router-link :to="{name:'Create'}">評論課程</router-link>
      </nav>
  </header>
</template>

<script>

export default {

}
</script>

<style>
img {
  border-radius: 50%;
  width: 10%;
}
header {
    display:flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px;
}
header::before {
    content: "";
    display: block;
    width: 100%;
    height: 20%;
    background: #3a9764;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
  }
header h1 {
    color: #fff;
    font-size: 30px;

}
header a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
}
header a.router-link-active {
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>