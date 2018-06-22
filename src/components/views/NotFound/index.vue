<template>
    <div class="notfound">
        <section class="wid">
            <!-- 404背景 -->
            <div class="bg sprite-notfound">
                404
            </div>
            <!-- 两个按钮 -->
            <div class="btns">
                <a href="javascript:;" @click='backHandle' class="pre-btn">
                    <span class="ico sprite-notfound"></span>
                    返回上一页
                </a>
                <router-link class="home-btn" :to="{name:'home'}">
                    <span class="ico sprite-notfound"></span>
                    返回首页
                </router-link>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name:'nofound',
    methods:{
        backHandle(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>
    @import url('./css/404.css');
</style>
