<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>課程名稱</label>
      <input v-model="CourseName" type="text" required placeholder="必填欄位">
      <label>評論內容</label>
      <textarea v-model="content" required placeholder="必填欄位"></textarea>
      <label>HashTags (按下Enter創建hashtag):</label>
      <input 
        @keydown.enter.prevent="handleKeydown" 
        v-model="tag" 
        type="text"
      >
      <div v-for="tag in tags" :key="tag" class="pill">
        #{{ tag }}
      </div>
      <button>Add Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { postsFirestore,timestamp } from '../firebase/config'
export default {
  setup() {
    const CourseName = ref('')
    const content = ref('')
    const tags = ref([])
    const tag = ref('')
    const router = useRouter()
    //console.log(router)
    //router.go(1)
    //router.go(-1)
    const handleKeydown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.replace(/\s/g,'') // remove all whitespace
        tags.value.push(tag.value.toLowerCase())
      }
      tag.value = ''
    }
    const handleSubmit = async () => {
      const post = {
        CourseName: CourseName.value,
        content: content.value,
        tags: tags.value,
        createdAt: timestamp
      }
      const res = await postsFirestore.collection('posts').add(post)
      // console.log(res) // can see the id and path of doc created
      router.push({ name: 'Home' })
    }
    return { content, CourseName, tags, tag, handleKeydown, handleSubmit }
  },
}
</script>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #3a9764;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
  }
  button {
    display: block;
    margin-top: 30px;
    background: #3a9764;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  button:hover{
    background: #286845;
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>