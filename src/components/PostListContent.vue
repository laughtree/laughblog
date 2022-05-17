<template>
  <div id="outer">
      <div id="pic"><a :href="post"><img :src="imgpath" id="postimg"></a></div>
      <div id="text">
          <div id="title"><a :href="post">{{posttitle}}</a></div>
          <div id="content">
              <div id="info">
                  <div id="datediv">{{postdate}}</div>
                  <div id="tagdiv">
                      <div id="textframe"><post-tag></post-tag></div>
                  </div>
              </div>
              <div id="sum"></div>
          </div>
      </div>
  </div>
</template>

<script>
import nopic from "@/assets/nopic.png"
import PostTag from "@/components/PostTag.vue"
export default {
    components: {
        PostTag
    },
    data(){
        return{
            imgpath: nopic,
            post: "00000"
        }
    },
    props: {
        imgsrc:{
            type: String,
            default: nopic
        },
        posttitle: {
            type: String,
            default: "no title"
        },
        postdate: {
            type: String,
            default: "9999/00/00"
        },
        ID: {
            type: String,
            default: "00000"
        }
    },
    created() {
        this.imgpath = this.imgsrc;
        this.post = "./?postid=" + this.ID;
    }

}
</script>

<style scoped>
#outer{
    display: flex;
    background-color: rgba(233,221,173,0.5);
    height: 160px;
    width: 78vw;
    box-shadow: 6px 6px 6px 6px rgba(0,0,0,0.05);
}
#pic{
    flex: 1;
}
#text{
    display: flex;
    flex: 4;
    flex-direction: column;
}
#title{
    flex: 1;
    padding-left: 4px;
    font-size: 28px;
}
#content{
    flex: 3;
    display: flex;
}
#postimg{
    width: 160px;
    height: 160px;
}
#info{
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 5px 5px 5px 5px;
    
}
#sum{
    flex: 4;
}
#datediv{
    flex: 1;
    background-color: rgba(186, 134, 115, 0.3);
}
#tagdiv{
    flex: 3;
}
#textframe{
    height: 100%;
    padding-top: -3px;
    background-color: rgba(121, 85, 72, 0.3);
    padding: 5px 5px 5px 5px;
}
a{
    text-decoration: none;
    color: rgb(96, 66, 56);
    font-weight: bolder;
}
</style>