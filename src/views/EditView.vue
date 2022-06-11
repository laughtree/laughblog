<template>
<div id="login" class="back" v-if="user!='owner'">
    <div id="frame">
        <div id="ipw">輸入密碼</div>
        <div id="pwi"><input type="password" id="pw" v-model="pw"></div>
        <div id="login-btn-frame" class="btn" @click="login()">登入<button id="login-btn"></button></div>
    </div>
</div>





<div id="write" class="back" v-if="!edit">
    <div id="up">
        <div id="title">
            <input type="text" id="titleInput" v-model="postcontent.title">
        </div>
            <div id="tag">
            <div id="tags">
                <div id="taglist-frame">
                    <ul id="taglist">
                        <li v-for="tag in postcontent.tags" :key="tag.index" id="tagblock">{{tag}}</li>
                    </ul>
                </div>
                <div id="tagInput">
                    <input type="text" id="newTag" v-model="newTag">
                    <button id="addTag" @click="addTag()">+</button>
                </div>
            </div>
    </div>
    </div>
    <div id="down">
        <div id="left">
            <div id="text">
                <div v-if="displayMode" v-html="getMarkdown" id="markdown"></div>
                <textarea id="textInput" v-model="postcontent.ctx" v-else></textarea>
                <!-- <input value="輸入文章內容" type="text" id="textInput"> -->
            </div>
        </div>
        <div id="right">
            <div id="date-frame">
                <div id="auto">自動<input type="checkbox" id="AS" v-model="auto"></div>
                <div id="select-date"><input type="date" id="date" v-if="!auto"></div>
            </div>
            <div id="type-frame">
                <select id="type" v-model="postcontent.type">
                    <option class="type-opt" >日常瞎扯淡(id:1)</option>
                    <option class="type-opt">心得分享(id:2)</option>
                    <option class="type-opt">胡搞瞎搞(id:3)</option>
                    <option class="type-opt">其他(id:4)</option>
                </select>
            </div>
            <div id="none">
                <div id="mode-switch">
                    <input v-model="postid" id="id-input">
                    <button id="switch-btn" class="btn" @click="modeSwitch">進入編輯模式</button>
                </div>
                <div id="mkd">
                    <button id="markdown-btn" class="btn" @click="displaySwitch();">切換預覽/編輯狀態</button>
                </div>
                <div id="block"></div>
            </div>
            <div id="btn-area">
                <div id="reset">
                    <button id="reset-btn" class="btn" @click="reset">重置</button>
                </div>
                <div id="ok">
                    <button id="ok-btn" class="btn" @click="writePost();">完成</button>
                </div>
            </div>
        </div>
        
    </div>
</div>



<div id="edit" class="back" v-if="edit">
    <div id="up">
        <div id="title">
            <input v-model="postcontent.title" type="text" id="titleInput">
        </div>
            <div id="tag">
            <div id="tags">
                <div id="taglist-frame">
                    <ul id="taglist">
                        <li v-for="tag in postcontent.tags" :key="tag.index" id="tagblock">{{tag}}</li>
                    </ul>
                </div>
                <div id="tagInput">
                    <input type="text" id="newTag" v-model="newTag">
                    <button id="addTag" @click="addTag()">+</button>
                </div>
            </div>
    </div>
    </div>
    <div id="down">
        <div id="left">
            <div id="text">
                <div v-if="displayMode" v-html="getMarkdown" id="markdown"></div>
                <textarea id="textInput" v-model="postcontent.ctx" v-else></textarea>
                <!-- <input value="輸入文章內容" type="text" id="textInput"> -->
            </div>
        </div>
        <div id="right">
            <div id="date-frame">
                <div id="sd">日期</div>
                <div id="auto">自動<input type="checkbox" id="AS" v-model="auto"></div>
                <div id="select-date"><input type="date" id="date" v-if="!auto"></div>
            </div>
            <div id="type-frame">
                <select id="type" v-model="postcontent.type">
                    <option class="type-opt" id="type1" value="1" :selected="selectedtype==1">日常瞎扯淡(id:1)</option>
                    <option class="type-opt" id="type2" value="2" :selected="selectedtype==2">心得分享(id:2)</option>
                    <option class="type-opt" id="type3" value="3" :selected="selectedtype==3">胡搞瞎搞(id:3)</option>
                    <option class="type-opt" id="type4" value="4" :selected="selectedtype==4">其他(id:4)</option>
                </select>
            </div>
            <div id="none">
                <div id="mkd">
                    <div class="box"></div>
                    <button id="markdown-btn" class="btn" @click="displaySwitch();">切換預覽/編輯狀態</button>
                    <div class="box"></div>
                </div>
            </div>
            <div id="btn-area">
                <div id="delete">
                    <button id="delete-btn" class="btn">刪除</button>
                </div>
                <div id="cancel">
                    <button id="cancel-btn" class="btn" @click="edit = false; reset()">取消</button>
                </div>
                <div id="ok">
                    <button id="ok-btn" class="btn" @click="editPost();modeSwitch();reset()">完成</button>
                </div>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>
import {marked} from 'marked'
import axios from 'axios'
export default {
    data() {
        return {
            auto : true,
            newTag : '輸入標籤',
            edit : false,
            postcontent: {'title':'標題','date':'','type':'0','ctx':'','tags':[]},
            postid: '輸入欲編輯文章ID',
            selectedtype: 3,
            pw: '',
            user:'',
            displayMode: false,
        }
    },
    created() {
        let mode = new URLSearchParams(window.location.search).get("mode")
        this.edit = (mode === 'edit')
        if(mode === 'edit'){
            this.postid = new URLSearchParams(window.location.search).get("id")
            axios.get(`http://localhost:8081/edit/${this.postid}`).then((res)=>{
                // console.log(this.postcontent.type) //測試用
                // console.log(this.postcontent) //測試用
                console.log(res.data) //測試用
                this.postcontent.title = res.data[0]['Title']
                this.postcontent.date = res.data[0]['PostDate']
                this.postcontent.type = res.data[0]['PostType']
                this.postcontent.ctx = res.data[0]['ContentText']
                this.postcontent.tags = []
                for(let i in res.data){
                    this.postcontent.tags[i] = res.data[i]['TagName']
                }
                this.selectedtype = this.postcontent.type
            })
        }
    },
    methods : {
        addTag(){
            console.log('add tag')
            this.postcontent.tags.push(this.newTag)
        },
        reset(){
            this.postcontent = {'title':'標題','date':'','type':'0','ctx':'','tags':[]}
            this.newTag = '輸入標籤'
            this.auto = true
            this.postid = '輸入欲編輯文章ID'
        },
        modeSwitch(){
            this.edit = !this.edit
            if(this.edit){
                axios.get(`http://localhost:8081/edit/${this.postid}`).then((res)=>{
                this.postcontent.title = res.data[0]['Title']
                this.postcontent.date = res.data[0]['PostDate']
                this.postcontent.type = res.data[0]['PostType']
                this.postcontent.ctx = res.data[0]['ContentText']
                this.postcontent.tags = []
                for(let i in res.data){
                    this.postcontent.tags[i] = res.data[i]['TagName']
                }
                this.selectedtype = this.postcontent.type
                })
            }
        },
        writePost(){
            axios.post('http://localhost:8081/writepost',{
                postcontent: this.postcontent
            }).then((res)=>{
                alert(res.data['msg'])
            })
        },
        editPost(){
            axios.post('http://localhost:8081/editpost',{
                postcontent: this.postcontent,
                postid: this.postid
            }).then((res)=>{
                alert(res.data['msg'])
            })
        },
        displaySwitch(){
            // const endl = this.postcontent.ctx.replaceAll('\n','  \n')
            // this.dispalyText =  marked(endl,{sanitize:true})
            this.displayMode = !this.displayMode
        },
        login(){
            axios.post('http://localhost:8081/login',{'password':this.pw}).then((res)=>{
                this.user = res.data['user']
                if(res.data['msg'] != undefined){
                    alert(res.data['msg'])
                }
            })
        }
    },
    computed: {
        getMarkdown(){
            const endl = this.postcontent.ctx.replaceAll('\n','  \n')
            return marked(endl,{sanitize:true})
        }
    }
}
</script>

<style scoped>
.back {
    display: flex;
    flex-direction: column;
    padding: 30;
    width: 100vw;
    height: 100vh;
    background-color: #E4E1DE;
}
#frame {
    display: flex;
    justify-content: center; 
    align-items: center; 
}
#up {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: transparent;
}
#down {
    display: flex;
    flex: 4;
    background-color: transparent;
}
#right {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 10px;
    margin: 10px;
    background-color: #E2DFD3;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15);
}
#left {
    flex: 5;
    display: flex;
    padding: 10px;
    margin: 10px;
    background-color: #E2DFD3;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15);
}
.box {
    flex: 1;
}
#textInput {
    flex: 1;
    width: 99.5%;
    height: 100%;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3) inset;
    background-color: #fffce8;
    outline: none;
    border: transparent;
    font-size: 24px;
}
#text {
    flex: 1;
}
#title {
    padding: 10px;
    height: 140;
    flex: 3;
    margin: 10px;
    background-color: #E2DFD3;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15);
}
#titleInput {
    height: 100%;
    width: 99.5%;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3) inset;
    background-color: #fffce8;
    border: transparent;
    outline: none;
    font-size: 32px;
}
#tag {
    padding: 10px;
    height: 140px;
    flex: 1;
    margin: 10px;
    background-color: #E2DFD3;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15) ;
}
#tagblock {
    list-style: none;
    float: left;
    margin-right: 10px;
    background-color: #8A756E;
    min-width: 100px;
    height: 50px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15) ;
    color: #fffae2;
    text-align: center;
    font-size: 36px;
}
#newTag {
    height: 48px;
    background-color: #c9c5b4;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15) inset;
}
#auto {
    flex: 1;
    margin: 10px;
    background-color: #c9c5b4;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15) ;
}
#select-date {
    flex: 3;
    margin: 10px;
    background-color: #c9c5b4;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15) inset;
    align-content: center;
}
#sd {
    margin: 10px;
}
#date {
    width: 99%;
    background-color: transparent;
    border: none;
}
#date-frame {
    display: flex;
    flex: 1;
}
#type-frame {
    flex: 2;
}
#type {
    width: 99%;
    height: 100%;
    font-size: 36px;
    border: none;
    outline: none;
    background-color: #c9c5b4;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15) inset;
}
.type-opt {
    font-size: 36px;
    border: transparent;
}
#id-input {
    flex: 1;
    width: 41%;
    height: 37px;
    background-color: #c9c5b4;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15) inset;
}
#none {
    flex: 13;
    display: flex;
    flex-direction: column-reverse;
}
#mode-switch {
    flex: 1;
    margin: 2%;
    padding-top: 5px;
}
#block {
    flex: 10;
}
#btn-area {
    flex: 2;
    display: flex;
    color: #fffce8;
}
#mkd {
    display: flex;
}
#ok {
    flex: 3;
}
#reset {
    flex: 1;
}
#ok-btn {
    width: 99.5%;
    height: 100%;
    background-color: #8A756E;
    border: #4e3f3b;
    color: #fffce8;
    font-size: 36px;
}
#reset-btn {
    width: 99.5%;
    height: 100%;
    background-color: #8A756E;
    border: #4e3f3b;
    color: #fffce8;
    font-size: 36px;
}
#cancel {
    flex: 1;
}
#cancel-btn {
    width: 99.5%;
    height: 100%;
    background-color: #8A756E;
    border: #4e3f3b;
    color: #fffce8;
    font-size: 36px;
}
#delete {
    flex: 1;
}
#delete-btn {
    width: 99.5%;
    height: 100%;
    background-color: #8A756E;
    border: #4e3f3b;
    color: #fffce8;
    font-size: 36px;
}
#switch-btn {
    width: 55%;
    flex: 1;
    background-color: #8A756E;
    border: #4e3f3b;
    color: #fffce8;
    font-size: 24px;
    height: 90%;
    margin-left: 3px;
    transform: translate(0,5px);
}
#markdown-btn{
    background-color: #8A756E;
    border: #4e3f3b;
    color: #fffce8;
    font-size: 24px;
    flex: 3;
}
.btn:hover {
    transform: scale(1.05,1.05);
}
#addTag {
    height: 100%;
    width: auto;
    background-color: #8A756E;
    border: none;
    font-size: 32px;
    text-align: center;
    text-shadow: 2em,2em,1em,black;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.15);
    color: #E4E1DE;
    transform: translate(0,8px);
}
#addTag:hover {
    transform: scale(1.1,1.1) translate(0,8px);
}

div#markdown h1,h2,h3,h4 {
    color: #232321;
}
div#markdown p {
    color: #3E3C34;
}

</style>