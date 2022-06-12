<template>
  <div class="outer">
      <div id="info">
          <div class="inside">
              <div id="title"><p>{{postTitle}}</p></div>
              <div id="time"><p>{{postDate}}</p></div>
              <div id="summary"><p>{{types[postSum]}}</p></div>
              <a :href="Link"><div id="link"></div></a>
              <img :src="Info">
          </div>
      </div>
      <div id="content">
          <div class="inside">
              <p id=text v-html="markdown" class="markdown"></p>
              <img :src="Content">
          </div>
      </div>
  </div>
</template>

<script>
import Info from "@/assets/preview-info.svg"
import Content from "@/assets/preview-content.svg"
import {marked} from 'marked'
import * as sanitizehtml from 'sanitize-html'
export default {
    data() {
        return {
            Info,
            Content,
            Link : "/post/?postid=" + this.postID,
            types: ["none","日常瞎扯淡","心得分享","胡搞瞎搞","其他"],
        }
    },
    props: {
        postTitle: {
            type: String,
            default: '無題',
        },
        postSum: {
            type: String,
            default: 'none'
        },
        postID:  {
            type: String,
            default: 'null'
        },
        contentText: {
            type: String,
            default: 'none'
        },
        postDate: {
            type: String,
            default: '0000/00/00'
        }
    },
    computed: {
        markdown(){
            const endl = this.contentText.replaceAll('\n','  \n')
            return sanitizehtml(marked(endl),{
                allowedTags: sanitizehtml.defaults.allowedTags.concat([ 'img' , 'del' ]),
            })
        }
    }
}
</script>

<style scoped>
.outer{
    display: flex;
    flex-direction: row;
    margin-top: -20px;
    max-height: 16em;
}
#info{
    flex: 1;
    
}
#content{
    flex: 1;
    margin-left: -50px;
    position: relative;
}
.inside{
    display: flex;
    flex-direction: column;
    position: relative;
}
#title{
    flex: 2;
    position: absolute;
    left: 60px;
    top: 25px;
    font-size: 28px;
    color: #FCF1ED;
    font-weight: 500;
}
#time{
    flex: 1;
    position: absolute;
    left: 60px;
    top: 80px;
    font-size: 16px;
    color: #EAD2CA;
}
#summary{
    flex: 4;
    position: absolute;
    left: 60px;
    top: 100px;
    color: #d19b87;
    word-wrap: break-word;
    max-width: 250px;
}
#text{
    position: absolute;
    left: 80px;
    top: 40px;
    font-size: 20px;
    color: #3F251C;
    max-height: 170px;
    overflow: hidden;
}
#link{
    position: absolute;
    width: 255px;
    height: 210px;
    left: 50px;
    top: 50px;
}
</style>