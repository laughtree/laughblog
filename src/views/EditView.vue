<template>
<div id="login" class="back" v-if="false">
    <div id="frame">
        <div id="ipw">輸入密碼</div>
        <div id="pwi"><input type="text"></div>
        <div id="login-btn-frame"><button></button></div>
    </div>
</div>





<div id="write" class="back" v-if="!edit">
    <div id="up">
        <div id="title">
            <input value="輸入標題" type="text" id="titleInput">
        </div>
            <div id="tag">
            <div id="tags">
                <div id="taglist-frame">
                    <ul id="taglist">
                        <li v-for="tag in postTag" :key="tag.index" id="tagblock">{{tag}}</li>
                    </ul>
                </div>
                <button id="addTag">+</button>
            </div>
    </div>
    </div>
    <div id="down">
        <div id="left">
            <div id="text">
                <textarea id="textInput"></textarea>
                <!-- <input value="輸入文章內容" type="text" id="textInput"> -->
            </div>
        </div>
        <div id="right">
            <div id="date-frame">
                <div id="auto">自動<input type="checkbox" id="AS" checked></div>
                <div id="select-date"><input type="date" id="date" disabled></div>
            </div>
            <div id="type-frame">
                <select id="type">
                    <option class="type-opt">日常瞎扯淡(id:1)</option>
                    <option class="type-opt">心得分享(id:2)</option>
                    <option class="type-opt">胡搞瞎搞(id:3)</option>
                    <option class="type-opt">其他(id:4)</option>
                </select>
            </div>
            <div id="none"></div>
            <div id="btn-area">
                <div id="reset">
                    <button id="reset-btn" class="btn">重置</button>
                </div>
                <div id="ok">
                    <button id="ok-btn" class="btn">完成</button>
                </div>
            </div>
        </div>
        
    </div>
</div>



<div id="edit" class="back" v-if="edit">
    <div id="up">
        <div id="title">
            <input :value="postcontent.title" type="text" id="titleInput">
        </div>
            <div id="tag">
            <div id="tags">
                <div id="taglist-frame">
                    <ul id="taglist">
                        <li v-for="tag in postcontent.tags" :key="tag.index" id="tagblock">{{tag}}</li>
                    </ul>
                </div>
                <button id="addTag">+</button>
            </div>
    </div>
    </div>
    <div id="down">
        <div id="left">
            <div id="text">
                <textarea id="textInput" v-model="postcontent.ctx"></textarea>
                <!-- <input value="輸入文章內容" type="text" id="textInput"> -->
            </div>
        </div>
        <div id="right">
            <div id="date-frame">
                <div id="auto">自動<input type="checkbox" id="AS" checked></div>
                <div id="select-date"><input type="date" id="date" disabled></div>
            </div>
            <div id="type-frame">
                <select id="type">
                    <option class="type-opt">日常瞎扯淡(id:1)</option>
                    <option class="type-opt">心得分享(id:2)</option>
                    <option class="type-opt">胡搞瞎搞(id:3)</option>
                    <option class="type-opt">其他(id:4)</option>
                </select>
            </div>
            <div id="none"></div>
            <div id="btn-area">
                <div id="delete">
                    <button id="delete-btn" class="btn">刪除</button>
                </div>
                <div id="cancel">
                    <button id="cancel-btn" class="btn">取消</button>
                </div>
                <div id="ok">
                    <button id="ok-btn" class="btn">完成</button>
                </div>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            auto : document.getElementById("AS"),
            postTag : ["aaa","bbb","ccc","ddd","eeeeee"],
            edit : false,
            postcontent: {},
            postid: '00000'
        }
    },
    created() {
        let mode = new URLSearchParams(window.location.search).get("mode")
        this.edit = (mode === 'edit')
        if(mode === 'edit'){
            this.postid = new URLSearchParams(window.location.search).get("id")
            axios.get(`http://localhost:8081/edit/${this.postid}`).then((res)=>{
                this.postcontent.title = res.data[0]['Title']
                this.postcontent.date = res.data[0]['PostDate']
                this.postcontent.type = res.data[0]['PostType']
                this.postcontent.ctx = res.data[0]['ContentText']
                this.postcontent.tags = []
                for(let i in res.data){
                    this.postcontent.tags[i] = res.data[i]['TagName']
                }
                console.log(this.postcontent) //測試用
                console.log(res.data) //測試用
            })
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
#none {
    flex: 13;
}
#btn-area {
    flex: 2;
    display: flex;
    color: #fffce8;
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
.btn:hover {
    transform: scale(1.1,1.1);
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
}
#addTag:hover {
    transform: scale(1.1,1.1);
}
</style>