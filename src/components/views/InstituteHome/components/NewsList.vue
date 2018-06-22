<template>
    <ul class="studio_new_list">
        <li 
            v-for="(item,index) in 5"
            :key="index"
        >
            <el-container>
                <el-aside>
                    <span class="data">
                        <em>05/30</em>
                        <em>2018</em>
                    </span>
                </el-aside>
                <el-main>
                    <span class="new_title">
                        <a href="">
                            普高教育段教育是德国v额计划大纲工普高教育段教育是德国v额计划大纲工
                        </a>
                    </span>
                </el-main>
            </el-container>
        </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
    .el-aside{
        width: 48px !important;
        height: 35px;
        overflow: hidden;
    }
    .el-main{
        padding: 0;
        overflow: hidden;
        margin-left: 14px;
    }
    .studio_new_list{
        background-color: #fff;
        font-size: 0;
        li{
            margin-bottom: 24px;
            span{
                display: block;
                font-size: 14px;
            }
            .data{
                background-color: #1b9fe2;
                width: 100%;
                height: 35px;
                color: #fff;
                border-radius: 6px;
                box-sizing: border-box;
                padding: 0 4px;
                text-align: center;
                em{
                    font-style: normal;
                    display: inline-block;
                    line-height: 18px;
                    &:nth-child(2){
                        font-size: 12px;
                        text-align: right;
                        width: 36px;
                    }
                }
            }
            .new_title{
                width: 100%;
                line-height: 36px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #666566;
            }
        }
    }
</style>
