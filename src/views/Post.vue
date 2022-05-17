<template>
    <div id="back">
        <div id="leaf"><img :src="Leaf"></div>
        <div id="title-frame"><div id="title">{{Title}}</div><img :src="PostTitle"></div>
        <div id="frame">
            <div id="text">
                {{PostContent}}
            </div>
         </div>
    </div>
  
</template>

<script>
import PostTitle from "@/assets/posttitle.svg"
import Leaf from "@/assets/leaf.svg"
const PostDic = require("@/assets/test/test.json")
export default {
    data() {
        return {
            postid :"00000",
            PostTitle,
            PostContent : " ",
            Title: " ",
            Leaf,

        }
    },

    created() {
        this.postid = (new URLSearchParams(window.location.search)).get("postid");
        this.PostContent = PostDic[this.postid-1].content;
        this.Title = PostDic[this.postid-1].title;
        console.log(this.postid);
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
    position: absolute;
    left: 60px;
    top: 10px;
    align-items: center;
}
#title{
    position: absolute;
    font-size: 48px;
    text-align: center;
    top: 55px;
    left: 110px;
}
#text{
    margin-top: 150px;
    margin-left: 150px;
    margin-right: 30px;
    font-size: 24px;
    color: rgb(42, 30, 26);
}
#leaf{
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>

