<template>
    <div class="job-box clearfix">
        <ul class="job-type-list fl">
            <li>
                <span class="ranking">名次</span>
                <span class="name">工作室名称</span>
                <span class="hot">{{label}}</span>
            </li>
            <li 
                v-for="(item,index) in 5"
                :key="index"
            >
                <span class="ranking">{{index+1}}</span>
                <span class="name">
                    <router-link :to="{path:'/institute/studio/'+index}">
                        工作室名称
                    </router-link>
                </span>
                <span class="hot">访问量</span>
            </li>
        </ul>
        <ul class="job-type-list fr">
            <li>
                <span class="ranking">名次</span>
                <span class="name">工作室名称</span>
                <span class="hot">{{label}}</span>
            </li>
            <li 
                v-for="(item,index) in 5"
                :key="index"
            >
                <span class="ranking">6</span>
                <span class="name">工作室名称</span>
                <span class="hot">访问量</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'RankList',
    props:{
        label:String,
    },
    data(){
        return {

        }
    }
}
</script>

<style lang='less' scoped>
    .job-box{
        background-color: #fff;
        padding: 20px 10px;
    }
    .job-type-list{
        width: 360px;
        li{
            line-height: 48px;
            font-size: 14px;
            margin-bottom: 1px;
            overflow: hidden;
            background-color: #efefef;
            span{
                float: left;
                text-align: center;
                color: #666666;
            }
            .ranking{
                width: 78px;
            }
            .name{
                width: 162px;
                a{
                    color: inherit;
                    &:hover{
                        color: #1b9fe2;
                    }
                }
            }
            .hot{
                width: 120px;
            }
            &:nth-child(1){
                background-color: #9d9d9d;
                span{
                    color: #fff;
                }
            }
        }
        &:nth-child(1){
            li{
                &:nth-child(2){
                    background-color: #f4d0d3;
                    .ranking{
                        background: url('../../../../assets/img/flower-red.png') no-repeat center 10px;
                        font-size: 12px;
                        color: #f41e4a;
                    }
                } 
                &:nth-child(3){
                    background-color: #d2e8f3;
                    .ranking{
                        background: url('../../../../assets/img/flower_blue.png') no-repeat center 10px;
                        font-size: 12px;
                        color: #1b9fe2;
                    }
                } 
                &:nth-child(4){
                    background-color: #f3e7d9;
                    .ranking{
                        background: url('../../../../assets/img/flower_yellow.png') no-repeat center 10px;
                        font-size: 12px;
                        color: #975a12;
                    } 
                } 
            }
        }
    }
</style>
