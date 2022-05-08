<template>
  <div id="action-overlay">
    <div id="sidebar">
      <p id="pN">文章類別</p>
      <img id="bar" :src="SidebarImg">
    </div>
    <div id="posttype">
      <div class="inside">
        <div class="in-inside"><a href="post/list?type=1"><p class="twolinetypetitle">日常<br>瞎扯淡</p><img class="typebutton" :src="Ellipse1"></a></div>
        <div class="in-inside"><a href="post/list?type=2"><p class="fwtypetitle" >心得分享</p><img class="typebutton" :src="Ellipse2"></a></div>
      </div>
      <div class="inside">
        <div class="in-inside"><a href="post/list?type=3"><p class="fwtypetitle">胡搞瞎搞</p><img class="typebutton" :src="Ellipse3"></a></div>
        <div class="in-inside"><a href="post/list?type=4"><p class="twtypetitle">其它</p><img class="typebutton" :src="Ellipse4"></a></div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarImg from "@/assets/postSidebar.svg"
import Ellipse1 from "@/assets/Ellipse1.svg"
import Ellipse2 from "@/assets/Ellipse2.svg"
import Ellipse3 from "@/assets/Ellipse3.svg"
import Ellipse4 from "@/assets/Ellipse4.svg"

export default {
  components: {
    
  },
  data() {
    return{
      SidebarImg,
      Ellipse1,
      Ellipse2,
      Ellipse3,
      Ellipse4
    } 
  },
}
</script>

<style scoped>
#action-overlay{
  display: flex;
  width: 100vw;
  height: 100vh;
}
#sidebar{
  flex: 2;
  position: relative;
}
#posttype{
  flex: 3;
  display: flex;
}
#bar{
  height: 100vh;
  position: absolute;
}
#pN{
  z-index: 2;
  position: absolute;
  left: 60px;
  top: -50px;
  font-size: 70px;
  color: #3F251C;
  font-weight: bolder;
}
.inside{
  flex: 1;
  display: flex;
  flex-direction: column;
}
.in-inside{
  flex: 1;
  position: relative;
}
.typebutton{
  max-width: 380px;
  max-height: 380px;
  position: absolute;
  left: -80px;
}
.fwtypetitle{
  position: absolute;
  z-index: 2;
  top: 75px;
  left: -15px;
  font-size: 60px;
  text-align: center;
  font-weight: bolder;
  color: #3F251C;
}
.twolinetypetitle{
  position: absolute;
  z-index: 2;
  top: 45px;
  left: 15px;
  font-size: 60px;
  text-align: center;
  font-weight: bolder;
  color: #3F251C;
}
.twtypetitle{
  position: absolute;
  z-index: 2;
  top: 75px;
  left: 45px;
  font-size: 60px;
  text-align: center;
  font-weight: bolder;
  color: #3F251C;
}
</style>