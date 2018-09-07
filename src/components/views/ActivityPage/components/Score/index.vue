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
        <div class="score-box">
            <div class="clearfix">
                <div class="fl label">满意度</div>
                <span class="fl">：</span>
                <div class="score-content rate-box fl">
                    <el-rate 
                        v-model="rate"
                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                        show-text
                        :texts="['极差','不满意','一般','满意','很满意']"
                    ></el-rate>
                </div>
            </div>
            <div class="clearfix">
                <div class="fl label">{{data.detail.comment_text}}</div>
                <span class="fl">：</span>
                <div class="score-content fl">
                    <div class="input-box">
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 4, maxRows: 4}"
                            placeholder="请输入内容"
                            v-model="harvest">
                        </el-input>
                    </div>
                    <div align='right'>
                        <el-button type="primary" @click='upDataRate'>提交</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {activitiyUserAppraisal} from '@api/index'
export default {
    props:['data'],
    data(){
        return {
            rate:0,
            harvest:'',
            rateText:['','worst','low','ordinary','better','top']
        }
    },
    methods:{
        upDataRate(){
            if( this.rate > 0 && this.harvest.trim()!==''){
                activitiyUserAppraisal({
                    activity_appraisal_id:this.data.detail.id,
                    description:this.harvest.trim(),
                    appraisal:this.rateText[this.rate]
                }).then(data=>{
                    console.log(`满意度：${this.rate}星</br>${this.data.detail.comment_text}：${this.harvest}`);
                    if(data.status.code==0){
                        console.log(1)
                        this.$notify({
                            title: '评价成功',
                            message: `满意度：${this.rate}星  ; ${this.data.detail.comment_text}：${this.harvest}`,
                            duration: 0
                        });
                        this.rate = 0;
                        this.harvest = '';
                    }
                }).catch(error=>{

                })
            }else if(this.rate<=0){
                this.$message('请先打分再进行提交');
            }else if(this.harvest.trim()==''){
                this.$message('请输入内容再进行提交');
            }
        }
    }
}
</script>

<style lang='less' scoped>
    .score-box{
        border-top: 1px solid #eaeaea;
        margin-top: 25px;
        padding-bottom: 40px;
        font-size: 16px;
        line-height: 72px;
        .label{
            width: 73px;
            padding-left: 4px;
            height: 72px;
            color: #1b9fe2;
            text-align: justify;
            text-align-last: justify;
            &:after {
                content: "";
                display: inline-block;
                width: 100%;
            }
        }
        span.fl{
            color: #1b9fe2;
        }
        .score-content{
            width: 658px;
            padding-left: 10px;
            .input-box{
                padding-top: 25px;
                /deep/ .el-textarea__inner{
                    padding: 15px;
                    // resize: none;
                }
            }
        }
        .rate-box{
            padding-top: 25px;
            /deep/ .el-rate__text{
                display: inline-block;
                line-height: 20px;
                vertical-align: top;
            }
        }
    }
</style>
