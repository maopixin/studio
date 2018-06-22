<template>
    <div class="crumbs_box">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/institute/studio/'+this.$route.params.id }">工作室首页</el-breadcrumb-item>
            <el-breadcrumb-item>专题资源</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    props:['crumbList'],
    data(){
        return{

        }
    },
}
</script>

<style>
    .crumbs_box{
        width: 1140px;
        margin: 0 auto;
        padding: 30px 0;
    }
</style>
