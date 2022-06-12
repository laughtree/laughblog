<template>
  <div id="outer">
      <div id="pic"><a :href="post"><img :src="imgpath" id="postimg"></a></div>
      <div id="text">
          <div id="title"><a :href="post">{{posttitle}}</a></div>
          <div id="content">
              <div id="info">
                  <div id="datediv">{{postdate}}</div>
                  <div id="tagdiv">
                      <div id="textframe">
                        <post-tag v-for="tag in tags" :key="tag.index" :tag="tag"></post-tag>
                        </div>
                  </div>
              </div>
              <div id="sum" v-html="markdown" class="markdown"></div>
          </div>
      </div>
  </div>
</template>

<script>
import nopic from "@/assets/nopic.png"
import PostTag from "@/components/PostTag.vue"
import axios from 'axios'
import {marked} from 'marked'
import * as sanitizehtml from 'sanitize-html'
export default {
    components: {
        PostTag
    },
    data(){
        return{
            imgpath: nopic,
            post: "00000",
            tags: []
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
        },
        ctx:{
            type: String,
            default: ""
        }
    },
    created() {
        this.imgpath = this.imgsrc;
        this.post = "./?postid=" + this.ID;
        axios.post('http://localhost:8081/getTag',{id:this.ID}).then((res)=>{
            console.log(res.data)
            for(let i in res.data){
                this.tags[i] = res.data[i]['TagName']
                console.log(this.tags[i])
            }
        })
    },
    computed: {
        markdown(){
            const endl = this.ctx.replaceAll('\n','  \n')
            return sanitizehtml(marked(endl),{
                allowedTags: sanitizehtml.defaults.allowedTags.concat([ 'img' , 'del' ]),
            })
        }
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
    overflow: hidden;
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
    overflow: hidden;
    max-width: 445;
    max-height: 120;
}
#sum p {
    max-height: 120;
    overflow: hidden;
}
#datediv{
    flex: 1;
    background-color: rgba(186, 134, 115, 0.3);
}
#tagdiv{
    flex: 3;
    overflow: hidden;
}
#textframe{
    height: 100%;
    max-height: 82.5px;
    padding-top: -3px;
    background-color: rgba(121, 85, 72, 0.3);
    padding: 5px 5px 5px 5px;
    overflow-y: auto;
}
a{
    text-decoration: none;
    color: rgb(96, 66, 56);
    font-weight: bolder;
}
</style>