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
        <ul class="pic-box clearfix">
            <li
                v-for="(item) in data.detail.user_resources.data"
                :key='item.id'
            >
                <img :src="item.source_path" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['data']
}
</script>

<style lang='less' scoped>
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
