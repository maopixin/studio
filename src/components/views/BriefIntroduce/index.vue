<template>
    <div class="content">
        <div class="box-shadow">
            <div class="title_box">
                <h3 class="column_title">
                    <div class="t_l">LINE</div>
                    <div class="t_c">名师简介</div>
                </h3>
            </div>
            <div class="clearfix teacher-info">
                <div class="fl teacher-pic box-shadow">
                    <img src="http://static.dljy.com/cms/1/20180621104503_5b2b112f8e014.png" alt=""/>
                </div>
                <div class="fr teacher-text">
                    <div class="t-t">
                        <div class="name">
                            名师： <span>张亮</span>
                        </div>
                        <div class="clearfix">
                            <div class="fl">学科：<span>高中教师</span></div>
                            <div class="fl">评定时间： <span>xxx</span></div>
                        </div>
                        <div class="clearfix">
                            <div class="fl">职称：<span>特级教师</span></div>
                            <div class="fl">设立单位：<span>浙江省谢谢嘻嘻嘻嘻嘻嘻嘻</span></div>
                        </div>
                    </div>
                    <div class="info">
                        邱锋，浙江省英语特级教师，全国三八红旗手，浙江省功勋教师，杭州市政府特殊津贴获得者，享受正教授待遇的中学高级教师，已完成了国家教育部“园丁工程”中小学英语骨干教师国家级培训立项课题《关于普高英语任务型教学内容及教师行动研究》的实验，该课题是教育部制定的新《英语课程标准》试点研究的一部分，力图率先论证《新课标》中任务型教学在我国英语教学中的实际可行性，在理论学习、师资培训、教材选定等方面做了相当充分的准备，研究目标明确，研究过程、方法及材料格式科学规范，研究成果显著，教学方式在全校推开，取得了成功，并在全国产生了有较大的影响力，促进了英语教学的改革。并撰写了题为《对TBL教学法的初探》的课题报告（发表在2002年“中小学教材教学”杂志第2期上）。以该课题结题报告为蓝本的《高中英语任务型教学的研究》获得2005年浙江省教育科学学院、浙江省教育科学规划领导小组办公室授予的省一等奖；《新课程背景下的英语TBL教学---普通高中英语任务型教学的研究》2007年6月浙江大学出版社出版；参加了根据“新课标”任务型教学为模式的《新标准英语》1A和1B的教师用书的编写工作，并已由“外语教学与研究出版社”出版。主持的课题《资优生教育教学过程优化的实践与研究》获得了2009年度浙江省优秀教科研课题一等奖。
                        并撰写了《走向卓越——资优生教育的理论与实践》一书。2011年《新课程背景下国家课程校本实施和校本教学评价的实践与研究》获杭州市课题一等奖。应杭州示范大学邀请，参与省师训基地建设，从2013年至今已经开发课程30多门，培训全省各地教师1000多人次。
                    </div>
                </div>
            </div>
            <div class="plan-box">
                <div class="plan box-shadow">
                    <div class="title">
                        <i class="el-icon-date"></i>
                        <h4>工作室2018工作计划</h4>
                    </div>
                    <div class="p-box">
                        xxx
                    </div>
                </div>
            </div>
            <div class="plan-box">
                <div class="plan box-shadow">
                    <div class="title">
                        <i class="el-icon-document"></i>
                        <h4>工作室实施方案</h4>
                    </div>
                    <div class="p-box">
                        xxx
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getStudioDetail} from '@api/index.js'
export default {
    data(){
        return {
            data: {

            }
        }
    },
    created(){
        console.log(this.$route);
        getStudioDetail({
            id:this.$route.params.id
        }).then(data=>{
            console.log(data);
        }).catch(error=>{
            console.log(error)
        })
    }
}
</script>

<style lang='less' scoped>
    .content{
        width: 1140px;
        margin: 0 auto;
        padding: 20px 0;
    }
    .box-shadow{
        background-color: #fff;
        padding-bottom: 40px;
    }
    .teacher-info{
        padding: 20px;
    }
    .teacher-pic{
        width: 306px;
        height: 410px;
        padding: 5px;
        border: 1px solid #ccc;
        img{
            width: 306px;
            height: 410px;
        }
    }
    .teacher-text{
        width: 770px;
        .t-t{
            font-size: 16px;
            font-weight: 600;
            span{
                color: #4296d3;
            }
            .name{
                line-height: 78px;
                margin-bottom: 10px;
                position: relative;
                &:after{
                    content: "";
                    position: absolute;
                    width: 30px;
                    height: 4px;
                    background-color: #8f8e91;
                    top: 70px;
                    left: 0;
                }
            }
            .clearfix{
                line-height: 30px;
                .fl:nth-child(1){
                    width: 200px;
                }
            }
        }
        .info{
            border-top: 1px solid #cccccc;
            margin-top: 20px;
            font-size: 14px;
            line-height: 18px;
            color: #747474;
            padding: 20px 0;
        }
    }
    .plan-box{
        padding: 40px 20px 0;
        .plan{
            border: 1px solid #3396d5;
            padding: 30px 20px 0;
        }
    }
    .title{
        i{
            font-size: 20px;
            color: #1b9fe2;
            margin-left: 5px;
        }
        h4{
            display: inline-block;
            font-size: 18px;
            line-height: 40px;
            margin-left: 20px;
            border-bottom: 1px solid #ccc;
        }
    }
    .p-box{
        padding: 20px 50px;
        color: #747474;
    }
</style>
