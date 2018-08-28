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
        <ul class="pic-box clearfix">
            <li>
                <img src="https://ubmcmm.baidustatic.com/media/v1/0f000csC0xlmAaJk3ffAt0.jpg" alt="">
            </li>
            <li>
                <img src="https://ubmcmm.baidustatic.com/media/v1/0f000csC0xlmAaJk3ffAt0.jpg" alt="">
            </li>
            <li>
                <img src="https://ubmcmm.baidustatic.com/media/v1/0f000csC0xlmAaJk3ffAt0.jpg" alt="">
            </li>
            <li>
                <img src="https://ubmcmm.baidustatic.com/media/v1/0f000csC0xlmAaJk3ffAt0.jpg" alt="">
            </li>
            <li>
                <img src="https://ubmcmm.baidustatic.com/media/v1/0f000csC0xlmAaJk3ffAt0.jpg" alt="">
            </li>
            <li>
                <img src="https://ubmcmm.baidustatic.com/media/v1/0f000csC0xlmAaJk3ffAt0.jpg" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
    .pic-box{
        padding: 30px 0;
        li{
            float: left;
            width: 249px;
            height: 181px;
            overflow: hidden;
            position: relative;
            margin-right: 7px;
            margin-bottom: 7px;
            &:nth-of-type(3n){
                margin-right: 0;
            }
            img{
                min-width: 249px;
                min-height: 181px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                transition: 0.3s ease;
                &:hover{
                    min-width: 298px;
                    min-height: 217px;
                }
            }
        }
    }
</style>
