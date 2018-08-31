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
        <!-- <div class="doc-box">
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
        </div> -->
        <h4>
            <span>
                文档列表
            </span>
        </h4>
        <ul class="doc-list">
            <li 
                class="clearfix type-doc"
                v-for="(item) in data.detail.user_resources.data"
                :key='item.id'
            >
                <span class="type fl">活动文档：</span>
                <span class="fl"><a href="">{{item.filename}}</a></span>
                <span class="fr">
                    <a href="javascript:;"><img src="@/assets/icon/down.png" alt=""></a>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['data'],
    methods:{

    },
    created(){
        console.log(this.data)
    }
}
</script>

<style lang='less'>
    
</style>
