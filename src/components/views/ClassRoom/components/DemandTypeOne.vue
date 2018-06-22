<template>
    <div class="box clearfix">
        <div class="left fl box-shadow">
            <el-carousel height="460px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img src="http://edu.dljy.com/files/article/2018/06-15/1626411add39863764.jpg" alt=""/>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="right fr">
            <el-row :gutter='20' class="video_list">
                <el-col 
                    :span='12'
                    v-for="(item,index) in 4"
                    :key='index' 
                    style='margin-bottom:10px;'
                >
                    <div class="box-shadow">
                        <div class="pic-box">
                            <img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3757916566,3108098082&fm=58&bpow=512&bpoh=512" alt=""/>
                            <a href="" class="">
                                <img src="@icon/video-player.png" alt=""/>
                            </a>
                        </div>
                        <div class="lesson-info">
                            <div class="lesson-title">课程主题</div>
                            <div class="clearfix info">
                                <span class="fl">楼仙娟</span>
                                <span class="fr">2018-06-06</span>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
    .box{
        padding: 40px 20px;
    }
    .left{
        width: 620px;
        height: 460px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .right{
        width: 440px;
    }
    .video_list{
        .pic-box{
            position: relative;
            img{
                display: block;
                width: 100%;
                height: 160px;
                vertical-align: top;
            }
            a{
                position: absolute;
                opacity: 0;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
                transition: 0.5s;
                img{
                    width: 50px;
                    height: 50px;
                    display: block;
                    margin: 63px auto;
                }
            }
            .hover:hover{
                opacity: 1;
            }
        }
        .lesson-info{
            padding: 8px 10px 5px;
            .lesson-title{
                font-size: 16px;
                line-height: 30px;
                color: #333333;
            }
            .info{
                font-size: 14px;
                line-height: 22px;
                color: #797a7a;
            }
        }
    }
</style>
<style lang='less'>
    .el-carousel__arrow{
        background-color: rgba(0,0,0,0.6);
        &:hover{
            background-color: #000;
        }
        i{
            font-weight: 600;
            font-size: 20px;
        }
    }
</style>
