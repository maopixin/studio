<template>
    <el-row class="tac" :gutter="20">
        <el-col :span="24">
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo box-shadow"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="2">
                <i class="el-icon-tickets"></i>
                <span slot="title">导航二啊</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-tickets"></i>
                <span slot="title">导航三啊</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-tickets"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name:'navMenu',
    methods: {
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
        console.log(key, keyPath);
        }
    }
}
</script>

<style>
    .tac{
        width: 285px;
    }
</style>
