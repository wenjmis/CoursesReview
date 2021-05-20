<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.CourseId }}">
    <div class="UpperContent">
      <h3 class="CourseName">{{ post.CourseName }}</h3>
      <p class="time">{{time}}</p>
    </div>
    </router-link>
    <div class="LowerContent">
      <p>{{ snippet }}</p>
      <span v-for="tag in post.tags" :key="tag" class="pill">
        #{{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import Moment from 'moment'
import { timestamp } from '../firebase/config'

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

    // }
    return { snippet,time }
  }
}
</script>

<style>
  .post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
    background-color: rgb(170, 240, 168);
    border-radius: 10px;
  }
  .post h3 {
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
    display: inline-block ;
    font-weight:bold ;
    text-shadow: black 0.1em 0.1em 0.1em;
  }
  .LowerContent{
    
  }

  .time{
    float:right;
    margin-bottom: 10px;
    color: seashell;
    text-shadow: black 0.1em 0.1em 0.1em;
    padding-top: 20px;
    padding-right: 10px;
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