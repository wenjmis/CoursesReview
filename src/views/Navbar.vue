<template>
  <header>
      <router-link :to="{name:'Home'}">
        <img src="@/assets/ccuPlusLogo.png" alt="this is ccuplus logo" class="logo"/>
      </router-link>
      <h1>CCU PLUS 課程評論網</h1>
      <nav class="mobileView">
        <router-link :to="{name:'Home'}" class="page">首頁</router-link>
        <router-link :to="{name:'Create'}" class="page">評論</router-link>
        <router-link :to="{name:'Account'}" class="page">會員</router-link>
      </nav>
      <nav class="desktopView">
        <router-link :to="{name:'Home'}" class="page">首頁</router-link>|
        <router-link :to="{name:'Create'}" class="page">評論</router-link>|
        <router-link :to="{name:'Account'}" class="page">會員</router-link>
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
  width: 40%;
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
    top:0;
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
@media (min-width:501px){
    .mobileView {
    display: none;
  }
}
@media (max-width:500px) {
  header h1{
    font-size: 20px;
    width: 120px;
  }
  img{
    width:80px;
  }
  header a{
    margin-left: 0px;
  }
  header::before{
    height: 150px;
  }
  
  .mobileView .page{
    display: flex;
    font-size: 15px;
    flex-direction: column;
  }
  .mobileView{
    flex-direction: column;
  }
  .desktopView{
    display: none;
  }
}
</style>