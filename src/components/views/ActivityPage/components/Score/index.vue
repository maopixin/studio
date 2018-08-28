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
            <li class="clearfix">
                <span class="fl title">任务主题:</span>
                <span class="fl info">123</span>
            </li>
        </ul>
        <div class="score-box">
            <div class="clearfix">
                <div class="fl label">满意度</div>
                <span class="fl">：</span>
                <div class="score-content fl">
                    <el-rate v-model="value4"></el-rate>
                </div>
            </div>
            <div class="clearfix">
                <div class="fl label">收获</div>
                <span class="fl">：</span>
                <div class="score-content fl">1</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value4:null
        }
    }
}
</script>

<style lang='less' scoped>
    .score-box{
        border-top: 1px solid #eaeaea;
        margin-top: 25px;
        font-size: 16px;
        line-height: 72px;
        .label{
            width: 73px;
            padding-left: 4px;
            height: 72px;
            color: #1b9fe2;
            text-align: justify;
            text-align-last: justify;
            &:after {
                content: "";
                display: inline-block;
                width: 100%;
            }
        }
        span.fl{
            color: #1b9fe2;
        }
        .score-content{
            width: 658px;
            padding-left: 10px;
        }
    }
</style>
