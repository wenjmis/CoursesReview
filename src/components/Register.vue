<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="display name" v-model="displayName">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <div class="error">{{error}}</div>
      <button @signup="enterHome">Sign up</button>
      
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
import { useRouter} from 'vue-router'
export default {
    setup(props,context){
        //refs
        const displayName = ref('')
        const email = ref('')
        const password = ref('')
        // useSignup
        const { error, signup} = useSignup()
        const router = useRouter()
        const handleSubmit = async()=>{
            await signup(email.value, password.value, displayName.value) 
            if (!error.value) {
            //emit a customer event
                context.emit('signup')
            }
            router.push({name:'Home'})
        }

        return { displayName,email,password,handleSubmit,error }
    }
}
</script>

<style>

</style>