<template>
  <img :src="Title" id="title" />
  <div class="background">
    <div id="background" />
  </div>
  <div class="action-overlay">
    <div class="menu">
      <div class="menu-frame">
        <!-- Menu Buttons in a list -->
        <page-button page-name="網站介紹" page="introduce"></page-button>
        <page-button page-name="文章列表" page="post"></page-button>
        <page-button page-name="其他功能" page="tool"></page-button>
      </div>
    </div>
    <div class="post-previews">
      <div class="post-previews-frame">
        <!-- Post previews in a list -->
        <post-preview postTitle="test" postSummary="哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈"></post-preview>
        <post-preview></post-preview>
        <post-preview></post-preview>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/assets/title.svg";
import PageButton from '@/components/PageButton.vue';
import PostPreview from '@/components/PostPreview.vue';
export default {
  components: {PageButton,PostPreview},
  name: "HomeView",
  data() {
    return {
      Title,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
body {
  font-family: 'Noto Sans TC', sans-serif;
  background-color: #e4e1de;
}
::-webkit-scrollbar{
  width: 6px;
  margin-left: -4px;
}
::-webkit-scrollbar-button{
  background-color: rgba(121, 85, 72, 0);
}
::-webkit-scrollbar-thumb{
  background-color: rgba(121, 85, 72, 0.3);
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.05);
}
</style>

<style scoped>
#background {
  width: 90vw;
  height: 85vh;
  background-color: #e2dfd3;
  box-shadow: 3px 3px 5px 6px #cccccc;
}
.background {
  display: grid;
  place-items: center;
  height: 100vh;
}
#title {
  position: absolute;
  height: 16em;
}
.action-overlay {
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  flex-direction: row;
}
.menu,
.post-previews {
  flex: 1;
}
.menu {
  padding-top: 16em;
  padding-left: 3em;
}
.menu-frame {
  width: 25em;
}

.post-previews {
  padding: 10em 8.2em 7em 7em;
}

.post-previews-frame {
  height: 100%;
  box-shadow: 0px -1px 26px -2px rgba(0, 0, 0, 0.3) inset;
  background-color: #e4e1de;
  overflow-y: auto;
  overflow-x: hidden;
}

</style>
