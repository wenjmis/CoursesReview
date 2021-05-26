<template>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <footer>
      <h3>CCU PLUS 課程評論網</h3>
      <!-- <h1>test</h1> -->
      <div  class="footerIcon">
       <font-awesome-icon :icon="['fab', 'instagram']" class="fa fa-instagram fa-3x"/>
       <font-awesome-icon :icon="['fab', 'github']" class="fa fa-github fa-3x"/>
      </div>
      <!-- <span class="material-icons">facebook</span>
      <div>
        <a class="icon" href="#" ><i class="fab fa-github"></i></a>
      </div> -->
  </footer>
</template>

<script>

export default {

}
</script>

<style>
/* img {
  border-radius: 50%;
  width: 10%;
} */
footer h3{
    color: ghostwhite;
    text-align: center;
    padding-top: 30px;
}
footer::before {
    content: "";
    display: block;
    width: 100%;
    height: 20%;
    background: #1a3325;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
  }
.footerIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  color:white;
}
.fa-3x{
    padding: 10px;
}
</style>