import { ref } from "vue"
import {projectAuth} from "../firebase/config"

const error = ref(null)

const signup = async(email,password,displayName)=>{
    //if the account info. doesnt enough or meet a network problem
    //this method will assign again to make sure user input a correct 
    //data to the database
    error.value = null  
    try{
       const res =  await projectAuth.createUserWithEmailAndPassword(email, password)
       //if res equal to  [null] run the content
       if(!res){
           throw new Error('Could not complete the signup')
       }
       await res.user.updateProfile({displayName})
       error.value = null

       return res

    }
    catch(err) {
        console.log(err.message)
        error.value = err.message;
      }
}

//seperate use scence and the method, reduce the re-invoke method problem
//that is,calling the method again while receiving different type of error
const useSignup = () =>{
    return{error,signup}
}

export default useSignup