<template>
  <header>
      <router-link :to="{name:'Home'}">
        <img src="@/assets/ccuPlusLogo.png" alt="this is ccuplus logo" class="logo"/>
      </router-link>
      <h1>CCU PLUS 課程評論網</h1>
      <nav>
      <router-link :to="{name:'Home'}" class="page">首頁</router-link>|
      <router-link :to="{name:'Create'}" class="page">評論課程</router-link>
      </nav>
  </header>
</template>

<script>

export default {

}
</script>

<style>
img {
  border: 1px solid #ddd;
  border-radius: 50%;
  padding: 5px;
  width: 100px;
}

img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
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
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    padding: 10px;
    margin-left: 20px;
    font-size: 20px;
}
.page.router-link-active {
    color: rgb(255, 255, 255);
    background-color: rgba(196, 196, 196, 0.5);
    font-weight: bold;
    padding: 10px;
    font-size: 20px;
    font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif;
}
</style>