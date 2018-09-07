<template>
    <div class="step_box">
        <h4>
            <span>
                {{data.name}}
            </span>
        </h4>
        <ul class="describe">
            <li class="clearfix">
                <span class="fl title">截止时间:</span>
                <span class="fl info">{{data.end_time}}</span>
            </li>
            <li class="clearfix">
                <span class="fl title">任务描述:</span>
                <span class="fl info">{{data.detail.description}}</span>
            </li>
        </ul>
        <div
            v-for="(item) in data.detail.user_resources.data"
            :key='item.id'
        >
            <div class="video-box">

            </div>
            <div class="video-info clearfix">
                <span class="fl">{{item.filename}}</span>
                <span class="fr">
                    <a :href="'/index/file/download?activity_user_resource='+item.id" target="_blank">
                        <img src="@/assets/icon/down.png" alt="">
                        下载
                    </a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['data']
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
