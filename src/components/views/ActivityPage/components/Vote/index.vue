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
        <div class="vote-box">
            <div class="vote-num clearfix">
                <div class="fl">{{parseInt(agree/total*100)}}%（{{agree}}票）</div>
                <div class="fr">{{parseInt((total-agree)/total*100)}}%（{{total-agree}}票）</div>
            </div>
            <div class="vote-show">
                <div class="blue" :style="{width:parseInt(agree/total*100)+'%'}"></div>
            </div>
            <div class="vote-btn">
                <el-button 
                    type="primary" 
                    round
                    @click='vote(1)'
                >已确定确实如此</el-button>
                <el-button 
                    type="info" 
                    round
                    @click='vote(0)'
                >不太赞同</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['data'],
    data(){
        return {
            agree:12,
            total:100
        }
    },
    methods:{
        vote(type){
            parseInt
        }
    }
}
</script>

<style lang='less' scoped>
    .vote-box{
        padding: 30px 0;
        .vote-num{
            font-size: 22px;
            line-height: 70px;
            padding: 0 10px;
            .fl{
                color: #1b9fe2;
            }
            .fr{
                color: #b1b1b1;
            }
        }
        .vote-show{
            height: 26px;
            background-color: #b2b2b2;
            border-radius: 13px;
            overflow: hidden;
            .blue{
                background-color: #35a9e4;
                height: 26px;
            }
        }
        .vote-btn{
            padding: 60px 0;
            text-align: center;
            /deep/ .el-button{
                box-sizing: border-box;
                border-radius: 26px;
                min-width: 240px;
                height: 52px;
                line-height: 36px;
                font-size: 22px;
            }
        }
    }
</style>
