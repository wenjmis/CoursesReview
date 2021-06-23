import { ref } from "vue"
import {projectAuth} from "../firebase/config"

const error = ref(null)

const login = async (email,password)=>{
    error.value = null

    try{
        const res = await  projectAuth.signInWithEmailAndPassword(email,password)
        console.log(res)
        return res
    }catch(err){
        console.log(err.message)
        // show the error in the login.vue <div error>
        error.value = 'Incorrect login credentials'
        
    }
}

const useLogin = ()=>{
    return {error,login}
}

export default useLogin