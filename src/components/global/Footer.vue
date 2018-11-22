<template>
  <div class="footer">
    <div class="container">
      <div class="clearfix">
        <div class="footer-info-box">
          <h4 class="footer-info-title">全新的教学体验</h4>
          <ul>
            <li>技术与教育的融合</li>
            <li>课程与过程的融合</li>
            <li>线上与线下的融合</li>
            <li>授课与学习的融合</li></ul>
        </div>
        <div class="footer-info-box">
          <h4 class="footer-info-title">优质的教育资源</h4>
          <ul>
            <li>各类专家坐阵咨询</li>
            <li>百强名校成果展示</li>
            <li>万位名师供你选择</li>
            <li>周末与孩子共成长</li></ul>
        </div>
        <div class="footer-info-box">
          <h4 class="footer-info-title">核心产品的支撑</h4>
          <ul>
            <li>東联·书生学校联盟</li>
            <li>教师培训</li>
            <li>德育动漫</li>
            <li>东联研学</li></ul>
        </div>
      </div>
      <div class="clearfix">
        <div class="footer-tip-box clearfix">
          <div class="footer-label-box">
            <span>合作多赢</span></div>
          <ul>
            <li>教师授课加学习</li>
            <li>知识与名利的多项提升</li></ul>
        </div>
        <div class="footer-tip-box clearfix">
          <div class="footer-label-box">
            <span>资源整合</span></div>
          <ul>
            <li>校长论坛、教师培训</li>
            <li>家长课堂、研学旅行......</li></ul>
        </div>
        <div class="footer-tip-box clearfix">
          <div class="footer-label-box">
            <span>方便省钱</span></div>
          <ul>
            <li>线上课程更优惠</li>
            <li>查漏补缺随时学</li></ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  background: #efefef;
  min-width: 1020px;
  width: 100%;
  margin-top: 60px;
  padding: 25px 0;
  color: #666;
}
.container{
    width: 1140px;
    margin: 0 auto;
}
.footer-info-box {
  float: left;
  width: 33.3%;
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 2px solid #d5d6d8;
}
.footer-info-box ul li {
  font-size: 16px;
  color: #666;
  line-height: 25px;
}
.footer-info-title {
  font-size: 27px;
  color: #666;
  margin-bottom: 20px;
  font-weight: 700;
}
.footer-tip-box {
  float: left;
  margin-top: 12px;
  width: 33.3%;
}
.footer-tip-box .footer-label-box {
  float: left;
  margin-left: 28%;
  width: 70px;
  height: 23px;
  color: #fff;
  font-size: 14px;
  background: #009db5;
  text-align: center;
  line-height: 23px;
  position: relative;
}
.footer-tip-box .footer-label-box::after {
  border: solid transparent;
  content: " ";
  height: 0;
  bottom: 0;
  left: 100%;
  position: absolute;
  width: 0;
  border-width: 5px 0 0 5px;
  border-left-color: #009db5;
}
.footer-tip-box ul {
  float: left;
  margin-left: 12px;
}
.footer-tip-box ul li {
  color: #666;
}
</style>
