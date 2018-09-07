<template>
    <div>
        <not-more v-if="list.length<=0"/>
        <div class="box clearfix" v-if="list.length>0">
            <div class="left fl box-shadow">
                <el-carousel height="460px">
                    <el-carousel-item v-for="item in list.slice(0,4)" :key="item.id">
                        <a :href="item._link" target="_blank">
                            <img :src="item.media.large" alt=""/>
                        </a>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="right fr">
                <el-row :gutter='20' class="video_list">
                    <el-col 
                        :span='12'
                        v-for="(item) in list.slice(0,4)"
                        :key='item.id' 
                        style='margin-bottom:10px;'
                    >
                        <div class="box-shadow">
                            <div class="pic-box">
                                <img :src="item.media.large" alt=""/>
                                <a :href="item._link" target="_blank" class="">
                                    <img src="@icon/video-player.png" alt=""/>
                                </a>
                            </div>
                            <div class="lesson-info">
                                <div class="lesson-title">{{item.title}}</div>
                                <div class="clearfix info">
                                    <span class="fl">{{item.username}}</span>
                                    <span class="fr">{{item.utime.y}}-{{item.utime.m}}-{{item.utime.d}}</span>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import NotMore from '@global/NotMore';
export default {
    props:{
        list:Array
    },
    components:{
        NotMore
    },
    created(){
        
    }
}
</script>

<style lang='less' scoped>
    .box{
        padding: 40px 20px;
    }
    .left{
        width: 620px;
        height: 460px;
        position: relative;
        img{
            height: 100%;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%,0);      
        }
    }
    .right{
        width: 440px;
    }
    .video_list{
        .pic-box{
            position: relative;
            height: 160px;
            padding: 0 !important;
            img{
                display: block;
                height: 160px;
                vertical-align: top;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%,0);
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
            a:hover{
                opacity: 1;
            }
        }
        .lesson-info{
            padding: 8px 10px 5px;
            .lesson-title{
                font-size: 14px;
                line-height: 30px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
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
