<template>
    <el-row class="tac" :gutter="20">
        <el-col :span="24">
            <el-menu
                :default-active='activeIndexF'
                class="el-menu-vertical-demo box-shadow"
                @open="handleOpen"
                @close="handleClose"
                @select="handleSelect"
            >
                <el-menu-item
                    v-for="(e,i) in menuList"
                    :key='i'
                    :index='i+""'
                    :disabled='e.disabled'
                >
                    <i class="el-icon-tickets"></i>
                    <span slot="title">{{e.title}}</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name:'navMenu',
    props: {
        menuList: Array,
        activeIndexF: String
    },
    data(){
        return {
            
        }
    },
    created () {
        
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(index,indexPath){
            this.$emit('selectChange',index)
        }
    }
}
</script>

<style>
    .tac{
        width: 285px;
    }
</style>
