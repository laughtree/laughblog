<template>
<div id="under">
    <div id="sidediv">
        <div id="title"><p id="type">{{title[type]}}</p></div>
        <div id="intro"></div>
    </div>
    <div id="background">
        <div id="list-frame">
            <list-content postdate="2122/13/32" posttitle="oH YeAH"  imgsrc="https://media.nownews.com/nn_media/thumbnail/2017/04/b9a2f68efc4be7905e67fdc9c55ef2e6-1200x1348.jpg" ID="00001"></list-content>
            <list-content postdate="1111/111/11"></list-content>
            <list-content></list-content>
            <list-content></list-content>
            <list-content></list-content>
            <list-content></list-content>
        </div>
    </div>
</div>
    
</template>

<script>
import ListContent from "@/components/PostListContent.vue"
import axios from 'axios'
export default {
    components:{ListContent

    },
    created() {
        this.type = (new URLSearchParams(window.location.search)).get("type")
        axios.get(`http://localhost:8081/post/list?type=${this.type}`).then((res)=>{
            console.log(res.data)
        })
    },
    data() {
        return{
            type:0,
            posttypes: {'none':0,'日常瞎扯淡(id:1)':1,'心得分享':2,'胡搞瞎搞':3,'其他':4},
            title: ["none","日常瞎扯淡","心得分享","胡搞瞎搞","其他"]
        }
    },

}
</script>

<style scoped>
#under{
    display: flex;
    height: 100vh;
}
#background{
    flex: 5;
    background-color: #E2DFD3;
    box-shadow: 6px 6px 6px 6px #cccccc;
    display: flex;
}
#sidediv{
    display: flex;
    flex: 1;
    flex-direction: column;
}
#title{
    flex: 1;
}
#intro{
    flex: 4;
}
#pic{
    position: relative;
    flex: 2;
}
#outer{
    margin-top: 20px;
    margin-left: 40px;
}
#list-frame{
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 100%;
}
#type{
    font-size: 56px;
    text-align: center;
    color: rgb(96, 66, 56);
    font-weight: bolder;
}
</style>