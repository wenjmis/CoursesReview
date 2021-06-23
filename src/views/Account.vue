<template>
<div class="title">會員登入</div>
<div v-if="showLogin">
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <p class="register">還沒有帳號嗎?<span @click="showLogin = false">  Sign up</span> </p>
    <button >Log in</button>
  </form>
</div>
<div v-else>
    <Register/>
</div>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'
import Register from '../components/Register.vue'
import { useRouter } from 'vue-router'

export default {
    components:{Register},
  setup(props,context) {
    // refs
    const showLogin = ref(true)
    const email = ref('')
    const password = ref('')
    const { error, login } = useLogin()

    const router = useRouter()
    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        //emit a customer event
        context.emit('login')
        router.push({name:'Home'})
      }
    
    }

    return {showLogin, email, password, handleSubmit, error}
  }
}
</script>

<style>
form{
    margin: 30px;
}
div .title{
   text-align: center;
   text-shadow: silver;
   font-weight: bold;
   margin: 80px 0 0 0 ;
}
.register{
    text-align: center;
}
button{
    margin: 30px auto 100px;

}
</style>