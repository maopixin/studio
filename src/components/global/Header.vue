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
                <a href="javascript:;" @click='login'>登录</a>
                /
                <a href="javascript:;" @click='register' class="orange">注册</a>
            </div>
            <div class="part" data-type='logined' v-if='userInfo'>
                <a :href="userUrl" data-user='logined' style="display:inline-block;line-height:21px;vertical-align:middle;margin-right:20px;width:85px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{name}}</a>
                <a href="javascript:;" @click='logout' class="orange" style="display:inline-block;vertical-align:middle;">退出</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {getUserInfo} from '@api/index'
const jsonp = require('jsonp');
export default {
    name:'header-use',      
    data(){
        return {
            seacrValue:'', // 搜索内容
            userInfo:false, // 用户信息
            name:'', // 当前登录用户的用户名
            loginUrl:'//edu.dljy.com/login?goto=', // 登录链接
            registerUrl:'//edu.dljy.com/register?goto=', // 注册链接
            logoutUrl:'//edu.dljy.com/logout', // 登出链接
            userUrl:'//edu.dljy.com/settings', // 个人信息页面
        }
    },
    created(){
        jsonp('http://account.dljy.com/user/api/get_login_user', null, (err, data) => {
            if (err) {
                this.$message({
                    message: '登录信息获取失败',
                    type: 'warning'
                });
            } else {
                if(data.status.code==0){
                    if(data.data.is_login){
                        this.userInfo = true;
                        this.name = data.data.user.nickname;
                        getUserInfo().then(data=>{
                            if(data.status.code==0){
                                data.data.user.get_login = true;
                                this.$store.commit('changeuserInfo',data.data.user);
                            }
                        }).catch(error=>{
                            console.log(error,'登录信息请求出错');
                        })
                    }
                }else{
                    this.$message({
                        message: '登录信息获取失败',
                        type: 'warning'
                    });
                }
            }
        });
    },
    methods:{
        search(){
            this.$message('搜索暂未开放');
        },
        login(){
            window.location.href = this.loginUrl + window.location.href;
        },
        register(){
            window.location.href = this.registerUrl + window.location.href;
        },
        logout(){
            window.location.href = this.logoutUrl ;
        },
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
