<template>
  <div>
    <div class="header">
      <div class="top-bar">
        <div class="container header-top-link-box">
          <a data-type="login" class="header-top-link" v-if="!userInfo" href="http://account.dljy.com/user/login/login">登录</a>
          <a data-type="login" class="header-top-link top-register-btn" v-if="!userInfo" href="http://account.dljy.com/user/login/register">注册</a>
          <a data-type="logined" v-if="userInfo" data-user="logined" class="header-top-link" href="http://meet.dljy.com">{{user.nickname}}</a>
          <a data-type="logined" v-if="userInfo" class="header-top-link top-register-btn" href="http://meet.dljy.com">用户中心</a>
          <a data-type="logined" v-if="studio_url!==''" :href="studio_url" data-studio="enter" class="header-top-link top-register-btn">进入工作室</a>
          <a data-type="logined" v-if="userInfo" class="header-top-link" href="http://account.dljy.com/user/login/logout">退出</a>
          <span class="header-split-bar"></span>
          <a class="header-top-link" href="http://www.dljy.com/c_conference">教师培训</a>
          <a class="header-top-link" href="http://www.dljy.com/c_school">联盟校</a>
          <a class="header-top-link" href="javascript:;">德育动漫</a>
          <a class="header-top-link" href="http://www.dljy.com/index/index/about">关于我们</a></div>
      </div>
      <div class="header-main-box container clearfix" style="margin:35px auto">
        <a href="http://www.dljy.com/">
          <img class="logo" src="http://www.dljy.com/static/common/img/logo.png"></a>
        <div class="header-search-box">
          <div>
            <div class="header-search-input-box clearfix">
              <select class="header-search-select">
                <option value="微课">微课</option></select>
              <input type="text" name="" value="" class="header-search-input"></div>
            <a href="javascript:;" class="header-search-btn">搜索</a></div>
          <p class="header-search-keyword-box">
            <label>关键词：</label>
            <span>德育</span>
            <span>小学</span>
            <span>教育</span>
            <span>课程</span>
            <span>会议</span>
          </p>
        </div>
      </div>
      <div class="navigator-box clearfix">
        <ul class="container clearfix">
          <li class="nav-item"><a class="nav-cont" href="http://www.dljy.com/c_conference">教师培训</a></li>
          <li class="nav-item"><a class="nav-cont" href="http://www.dljy.com/c_school">学校联盟</a></li>
          <li class="nav-item"><a class="nav-cont" href="http://www.dljy.com/c_cartoon">德育动漫</a></li>
          <li class="nav-item"><a class="nav-cont" href="http://www.dljy.com/c_institute">東联研究院</a></li>
          <li class="nav-item"><a class="nav-cont" href="http://www.dljy.com/rating/index/rating">评选大赛</a></li>
        </ul>
      </div>
    </div>
    <div class="wrapper">
      <section style="width:1140px;margin:0 auto 50px auto;">
        <div class="clearfix title-box">
          <h4 class="adver-title">
            <div class="adver-title-cont">RESEARCH<i class="title-bar"></i>东联研究院</div>
          </h4>
        </div>
        <div class="btn_box_show">
          <a class="item" :href="'http://www.dljy.com/institute/index/show?id='+id">简介</a>
          <a class="item active" href="javascript:;">下属工作室</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import '@/assets/css/dljy_head.css'
import jsonp from 'jsonp'
export default {
  props:['id'],
  data(){
    return {
      userInfo:false,
      user:{
        
      },
      studio_url:""
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
                this.user = data.data.user;
                this.studio_url = data.data.studio_url;
              }
          }else{
              this.$message({
                  message: '登录信息获取失败',
                  type: 'warning'
              });
          }
      }
  });
  }
}
</script>

<style>

</style>
