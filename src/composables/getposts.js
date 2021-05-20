
import { ref } from 'vue'
import {postsFirestore} from'../firebase/config.js'

const getPosts = () =>{
    const posts = ref([])
    const error = ref(null)

    const load = async ()=>{
      try{
        let res = await postsFirestore.collection('posts')
        .orderBy('createdAt','desc')
        .get()
        
        posts.value = res.docs.map((doc)=>{
          return {...doc.data(),id:doc.id}
        })
      }
      catch(err){
        error.value = err.message
        console.log(error.value)

      }
    }

    return {posts,error,load}
}

export default getPosts