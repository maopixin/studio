<template>
<div class="header-use">
    <div class="inner clearfix">
        <div class="fl">
            <a href="http://www.dljy.com"><img src="@img/logo.png" class="logo" alt=""></a>
            <div class="teacher-class">
                名师工作室
            </div>
        </div>
        <div class="sub-nav fr">
            <div class="input-box">
                <el-input 
                    placeholder="请输入内容" 
                    v-model="seacrValue" 
                    class="input"
                    @focus='search'
                >
                    <el-button slot="append" icon="el-icon-search" @click='search'></el-button>
                </el-input>
            </div>
            <div class="part" data-type='login' style="" v-if='!userInfo'>
                <a href="http://account.dljy.com/user/login/login">登录</a>
                /
                <a href="http://account.dljy.com/user/login/register" class="orange">注册</a>
            </div>
            <div class="part" data-type='logined' v-if='userInfo'>
                <a href="http://meet.dljy.com" data-user='logined' style="margin-right:20px;">{{name}}</a>
                <a href="http://account.dljy.com/user/login/logout" class="orange">退出</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {getUserInfo} from '@api/index'
export default {
    name:'header-use',
    data(){
        return {
            seacrValue:'',
            userInfo:false,
            name:''
        }
    },
    created(){
        getUserInfo().then(data=>{
            if(data.status.code==0){
                this.userInfo = true;
                this.name = data.data.user.nickname;
                this.$store.commit('changeuserInfo',data.data.user)
            }else{
                this.$message({
                    message: '登录信息获取失败',
                    type: 'warning'
                });
            }
        })
    },
    methods:{
        search(){
            this.$message('搜索暂未开放');
        }
    }
}
</script>

<style lang='less' scoped>
.header-use{
    background-color: #fff;
}
.inner {
  width: 1140px;
  margin: 0 auto;
  height: 58px;
}
.inner .fl{
    a{
        height: 51px;
        padding: 7px 0 0 0;
        display: inline-block;
        vertical-align: middle;
    }
}
.teacher-class{
    display: inline-block;
    vertical-align: middle;
    font-size: 20px;
    color: #3daae2;
    font-style: italic;
    padding: 0 58px;
}

.inner .logo {
  width: 140px;
  vertical-align: top;
}

.inner .sub-nav {
    width: 504px;
    text-align: right;
}
.input-box{
    display: inline-block;
    vertical-align: middle;
    width: 300px;
    padding: 13px 0;
}
.input{
    
}
.inner .sub-nav .part {
    display: inline-block;
    vertical-align: middle;
}

.inner .sub-nav .part{
    font-size: 14px;
    color: #3daae2 !important;
    margin-right: 20px;
    width: 140px;
}

.inner .sub-nav .part a.orange {
  color: #464646 !important;
}

.inner .sub-nav .part a{
  color: #3daae2 !important;
}

.inner .sub-nav .my-divide {
  display: inline-block;
  vertical-align: middle;
  height: 16px;
  width: 1px;
  margin: 0 27px;
  background: #ada9a9;
}
</style>
