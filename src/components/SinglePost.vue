<template>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <div class="post">
    <!-- <router-link :to="{ name: 'Details', params: { id: post.CourseId }}"> -->
    <div class="UpperContent">
      <h3 class="CourseName">{{ post.CourseName }}</h3>
      <p class="time">{{time}}</p>
    </div>
    <!-- </router-link> -->
    <div class="LowerContent">
      <p>{{ snippet }}</p>
      <span v-for="tag in post.tags" :key="tag" class="pill">
        #{{ tag }}
      </span>
    </div>
    <div class="rank">
      <button v-on:click="thumbsUp" class="thumbs"><font-awesome-icon :icon="['fas', 'thumbs-up']" class="fa fa-thumbs-up fa-3x"/></button>
      <button v-on:click="thumbsDown" class="thumbs"><font-awesome-icon :icon="['fas', 'thumbs-down']" class="fa fa-thumbs-down fa-3x"/></button>
      <p class="likeNum">{{post.like}}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import Moment from 'moment'
import { postsFirestore,timestamp,increment,Decrement } from '../firebase/config'

export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      if(props.post.content.strlength>50){
        return props.post.content.substring(0, 50) + '...'
      }
      else{
        return props.post.content
      }
      //console.log(props)
      //return props.post.content
    })
    // const creatTime=()=>{
      // const createdTime = props.post.createdAt
      // console.log(createdTime)
      // console.log(timestamp)
      // const time =Moment(new Date(props.post.createdAt)).locale('zh-tw').format("MMM Do YY HH:MM");
      // let date = new Date(props.post.createdAt.content);
    let time = props.post.createdAt
    time = Moment(time.toDate()).locale('zh-tw').format("MMM Do YYYY HH:MM");

    const id = String(props.post.id);
    // const increment = firebase.firestore.FieldValue.increment(1);
    
    const thumbsUp = async () => {
      const likeRef = await postsFirestore.collection('posts').doc(id);
      console.log(id)
      console.log(likeRef)
      likeRef.update({like:increment})
    }
    const thumbsDown = async () => {
      const likeRef = await postsFirestore.collection('posts').doc(id);
      console.log(id)
      console.log(likeRef)
      likeRef.update({like:Decrement})
    }


    return { snippet,time ,thumbsUp,thumbsDown}
  }
}
</script>

<style>
  div{
    display: block;

  }

  .post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
    background-color: rgb(170, 240, 168);
    border-radius: 10px;
    display: flex;
    align-items: left;
    flex-direction: column;
    padding: 10px 20px;
  }
    p.time{
    margin-bottom: 10px;
    color: seashell;
    text-shadow: black 0.01em 0.01em 0.1em;
    padding-top: 0px;
    padding-right: 10px;
    position: absolute;
    font-size: 16px;
    right: 50px;
    float: right;
  }
  .post h3 {
    color: white;
    margin-bottom: 10px;

    max-width: 400px;
    font-weight:bold ;
    text-shadow: black 0.1em 0.1em 0.1em;
  }
  .post a{
    display: block;
    width: 350px;
    height: 60px;
  }


  .post .pill {
    display: inline-block;
    margin: 0px 10px 10px 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
  .rank{
    display: flex;
    direction: row;
    align-items: center;
  }
  .thumbs{
    
    margin: 5px;
    font-size: 10px;
    padding: 1px ;
    border-radius: 10px;
  }
  .likeNum{
    margin-left: 40px;
    max-width: 10px;
    display: block;
    color: rgb(255, 255, 255);
    text-decoration:bisque;
    font-size: 20px;
     text-shadow: black 0.1em 0.1em 0.1em;
    font-weight: bold;
  }
</style>