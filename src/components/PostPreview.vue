<template>
  <div class="outer">
      <div id="info">
          <div class="inside">
              <div id="title"><p>{{postTitle}}</p></div>
              <div id="time"><p>0000/00/00</p></div>
              <div id="summary"><p>{{postSummary}}</p></div>
              <a :href="postLink"><div id="link"></div></a>
              <img :src="Info">
          </div>
      </div>
      <div id="content">
          <div class="inside">
              <p id=text>{{contentText}}</p>
              <img :src="Content">
          </div>
      </div>
  </div>
</template>

<script>
import Info from "@/assets/preview-info.svg"
import Content from "@/assets/preview-content.svg"
export default {
    data() {
        return {
            Info,
            Content,
        }
    },
    props: {
        postTitle: {
            type: String,
            default: '無題',
        },
        postSummary: {
            type: String,
            default: 'none'
        },
        postLink:  {
            type: String,
            default: '/unknownpost'
        },
        contentText: {
            type: String,
            default: 'none'
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
}
#link{
    position: absolute;
    width: 255px;
    height: 210px;
    left: 50px;
    top: 50px;
}
</style>