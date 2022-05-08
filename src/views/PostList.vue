<template>
<div id="under">
    <div id="sidediv">
        <div id="title"><p id="type">{{title[type]}}</p></div>
        <div id="intro"></div>
        <div id="pic"><img :src="Leaf" id="leaf"></div>
    </div>
    <div id="background">
        <div id="list-frame">
            <list-content postdate="2122/13/32" posttitle="oH YeAH"  imgsrc="https://media.nownews.com/nn_media/thumbnail/2017/04/b9a2f68efc4be7905e67fdc9c55ef2e6-1200x1348.jpg"></list-content>
            <list-content></list-content>
            <list-content></list-content>
            <list-content></list-content>
            <list-content></list-content>
            <list-content></list-content>
        </div>
    </div>
</div>
    
</template>

<script>
import Leaf from "@/assets/leaf.svg"
import ListContent from "@/components/PostListContent.vue"
export default {
    components:{ListContent

    },
    created() {
        this.type = (new URLSearchParams(window.location.search)).get("type")
    },
    data() {
        return{
            Leaf,
            type:0,
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
#leaf{
    align-self: flex-end;
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