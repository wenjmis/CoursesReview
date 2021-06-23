<template>
  
  <div class="home">
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length" class="layout">
      <PostList  :posts="posts"/>
      <!-- <TagCloud  :posts="posts"/> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import getPosts from '../composables/getposts.js'
// component imports
import PostList from '../components/PostList'
import TagCloud from '../components/TagCloud.vue'


export default {
  name: 'Home',
  components: { PostList, TagCloud },
  setup() { 
    const { posts, error, load } = getPosts()
    load()
    console.log(posts)
    return { posts, error }
  },
}
</script>

<style>
 .home {
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
    top:20px;
    position: relative;
  }
  .layout {
    position: relative;
    background-color: rgb(112, 219, 192);
    padding:10px;
    margin: auto;
    border: lightsteelblue 2px;
  }
  
</style>