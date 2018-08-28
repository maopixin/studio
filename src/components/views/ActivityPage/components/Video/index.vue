<template>
    <div class="step_box">
        <h4>
            <span>
                活动文档
            </span>
        </h4>
        <ul class="describe">
            <li class="clearfix">
                <span class="fl title">截止时间:</span>
                <span class="fl info">2018-08-09 23:24</span>
            </li>
            <li class="clearfix">
                <span class="fl title">任务描述:</span>
                <span class="fl info">123</span>
            </li>
        </ul>
        <div class="video-box">

        </div>
        <div class="video-info clearfix">
            <span class="fl">0.0.</span>
            <span class="fr">
                <a href="javascript:;">
                    <img src="@/assets/icon/down.png" alt="">
                    下载
                </a>
            </span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
    .video-box{
        padding: 15px;
        background-color: #000;
        margin-top: 10px;
        height: 340px;
    }
    .video-info{
        font-size: 16px;
        line-height: 54px;
        margin-bottom: 40px;
        color: #606060;
        .fr{
            img{
                width: 22px;
                height: 22px;
                margin-top: -1px;
            }
        }
    }
</style>
