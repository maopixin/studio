<template>
    <el-container>
        <el-header>
            <crumbs></crumbs>
        </el-header>
        <el-main class="box-shadow">
            <el-row :gutter='20' class="leader-head">
                <el-col :span='24'>
                    <img class="fl" src="@img/now.jpg" alt=""/>
                    <div class="fl">
                        <h4 class="title">全部文章</h4>
                        <span>普高教育钟小平网络名师工作室学科带头人群像。</span>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter='20' class="leader-list">
                <el-col 
                    :span='4'
                    v-for="(item,index) in 12"
                    :key='index'
                >
                    <div class="box-shadow">
                        <img src="https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/0df431adcbef760903428c1722dda3cc7dd99ee8.jpg" alt=""/>
                        <div>
                            郑庐江
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import Crumbs from '@global/crumbs'
export default {
    name:'subjeceleader',
    components: {
        Crumbs
    }
}
</script>

<style lang='less' scoped>
    .el-container{
        width: 1140px;
        margin: 0 auto;
    }
    .el-main{
        background-color: #fff;
    }
    .leader-head{
        img{
            vertical-align: top;
            width: 101px;
            height: 101px;
            margin-right: 20px;
        }
        div{
            text-indent: 0.5em;
            .title{
                font-size: 20px;
                line-height: 36px;
                padding-bottom: 6px;
                border-bottom: 1px solid #ccc;
            }
            span{
                display: block;
                font-size: 14px;
                line-height: 32px;
                color: #8f8e91;
            }
        }
    }
    .leader-list{
        margin-top: 50px;
        .box-shadow{
            margin-bottom: 20px;
            padding: 3px;
            position: relative;
            border: 1px solid #ccc;
            -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.1);
            box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.1);
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
            div{
                position: absolute;
                left: 0;
                bottom: 0;
                background-color: #fd9026;
                width: 93px;
                height: 24px;
                text-indent: 1em;
                color: #fff;
                font-size: 14px;
                line-height: 24px;
                &:after{
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 0;
                    border-color: #fd9026 transparent;
                    border-width: 0px 16px 24px 0px;
                    border-style: solid;
                    right: -16px;
                }
            }
        }
    }
</style>
