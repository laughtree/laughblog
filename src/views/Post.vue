<template>
    <div id="back">
        <div id="leaf"><img :src="Leaf"></div>
        <div id="title-frame"><div id="title">{{this.post.postTitle}}</div><img :src="PostTitle"></div>
        <div id="frame">
            <div id="text" v-html="markdown" class="markdown">
                
            </div>
         </div>
    </div>
  
</template>

<script>
import PostTitle from "@/assets/posttitle.svg"
import Leaf from "@/assets/leaf.svg"
import {marked} from 'marked'
import axios from 'axios'
import * as sanitizehtml from 'sanitize-html'
export default {
    data() {
        return {
            PostTitle,
            Leaf,
            post: {},
        }
    },

    created() {
        this.postid = (new URLSearchParams(window.location.search)).get("postid");
        console.log(this.postid);
        axios.post('http://localhost:8081/post',{id:this.postid}).then((res)=>{
            this.post = res.data
            console.log(this.post)
        })
    },
    computed: {
        markdown(){
            const endl = this.post.text.replaceAll('\n','  \n')
            return sanitizehtml(marked(endl),{
                allowedTags: sanitizehtml.defaults.allowedTags.concat([ 'img' , 'del' ]),
            })
        }
    }
}
</script>

<style scoped>
#back{
    display: flex;
    align-items: center;
    justify-content: center;
}
#frame{
    margin-top: 80px;
    width: 1530px;
    height: 842px;
    background-color: #E2DFD3;
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.05);
}
#title-frame{
    display: flex;
    position: absolute;
    left: 60px;
    top: 10px;
    align-items: center;
    margin: auto;
}
#title{
    position: absolute;
    font-size: 48px;
    text-align: center;
    top: 55px;
    left: 110px;
    color: #232321;
}
#text{
    margin-top: 150px;
    margin-left: 150px;
    margin-right: 30px;
    font-size: 24px;
    color: rgb(42, 30, 26);
    max-height: 650px;
    overflow: auto;
}
#leaf{
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>

