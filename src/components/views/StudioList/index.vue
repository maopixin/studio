<template>
    <div>
        <Crumbs></Crumbs>
        <div>
            <div class="content clearfix">
            <div class="left fl">
                <div class="filter_box box-shadow">
                    <div class="filter_item clearfix">
                        <h3 class="title fl">区域：</h3>
                        <ul class="filter_list fl" data-filter='area'>
                            <li 
                                class="fl" 
                                :class="{'active' : area==0}"
                                @click='areaClickHandle(-1)'
                            >不限</li>
                            <li 
                                class="fl"
                                v-for="(item,index) in 20"
                                :key='index'
                                :class="{'active':area==index+1}"
                                @click='areaClickHandle(index)'
                            >北京市</li>
                        </ul>
                    </div>
                    <div class="filter_item clearfix">
                        <h3 class="title fl">学段：</h3>
                        <ul class="filter_list fl" data-filter='phase'>
                            <li 
                                class="fl"
                                :class="{'active' : lv==0}"
                                @click='lvClickHandle(-1)'
                            >不限</li>
                            <li 
                                class="fl"
                                v-for="(item,index) in 3"
                                :key='index'
                                :class="{'active' : lv == index + 1}"
                                @click='lvClickHandle(index)'
                            >北京市</li>
                        </ul>
                    </div>
                </div>
                <div class="studio_box margin_t">
                    <div class="studio_box_head clearfix">
                        <dl class="fl rank_filter">
                            <dt>排序</dt>
                            <dd
                                v-for="(item,index) in sortArr"
                                :key='index'
                                :class="{'active' : sort == index}"
                                @click='sortClickHandle(index)'
                            >{{item}}
                                <span 
                                    v-if="index!==0"
                                    :class="{'re' : index==sort&&reverseOrder}"
                                ></span>
                            </dd>
                        </dl>
                        <div class="fr show_style_box">
                            显示方式
                            <span class="r" :class="{'active' : showType=='r'}" @click='showClickHandle("r")'>

                            </span>
                            <span class='l' :class="{'active' : showType=='l'}" @click='showClickHandle("l")'>

                            </span>
                        </div>
                    </div>
                    <ul class="studio_list" :class="showType">
                        <li 
                            v-for="(item,index) in 3"
                            :key='index'

                        >
                            <a href=""><img class="studio_head_pic" src="http://yun.zjer.cn/uploads/snsPhotos/snscover/551e070cc5593_200.jpg" alt=""></a>
                            <div class="studio_info">
                                <div class="top">
                                    <span class="studio_name">
                                        <a href="">工作室名称</a>
                                    </span>
                                    <span class="studio_type">数学</span>
                                    <span class="studio_area">地区</span>
                                </div>
                                <div class="middle">
                                    <span class="member">
                                        成员：<span>23123</span>
                                    </span>
                                    <span class="visit_num">
                                        访问量：<span>211231</span>
                                    </span>
                                </div>
                                <div class="bottom">
                                    工作室简介：萨达打算的
                                </div>
                            </div>
                            <a class="join_btn" href="">申请加入</a>
                        </li>
                    </ul>
                    <div id="page_box" class="clearfix"></div>
                </div>
            </div>
            <div class="right fr box-shadow">
                <div class="title_box">
                    <h3 class="column_title">
                        <div class="t_l">LINE</div>
                        <div class="t_c">热门工作室</div>
                    </h3>
                </div>
                <dl class="hot_studio">
                    <dd class="clearfix">
                        <span class="no">1</span>
                        <a href="">毛毛吗名师工作室</a>
                        <span class="visit_num">231231</span>
                    </dd>
                    <dd class="clearfix">
                        <span class="no">1</span>
                        <a href="">毛毛吗名师工作室</a>
                        <span class="visit_num">231231</span>
                    </dd>
                    <dd class="clearfix">
                        <span class="no">1</span>
                        <a href="">毛毛吗名师工作室</a>
                        <span class="visit_num">231231</span>
                    </dd>
                    <dd class="clearfix">
                        <span class="no">1</span>
                        <a href="">毛毛吗名师工作室</a>
                        <span class="visit_num">231231</span>
                    </dd>
                    <dd class="clearfix">
                        <span class="no">1</span>
                        <a href="">毛毛吗名师工作室</a>
                        <span class="visit_num">231231</span>
                    </dd>
                </dl>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Crumbs from '@global/crumbs'
export default {
    components: {
        Crumbs
    },
    data(){
        return {
            area: 0,
            areaText:'不限',
            lv: 0,
            lvText: '不限',
            sortArr:['默认','访问量','成员数','开通时间'],
            reverseOrder: false,
            sort: 0,
            show: 0,
            showText :'inline-block',
            showType:'r'
        }
    },
    methods:{
        areaClickHandle(index,text){
            this.area = index+1;
        },
        lvClickHandle(index,text){
            this.lv = index+1;
        },
        sortClickHandle(index){
            if(index==this.sort){
                this.reverseOrder = !this.reverseOrder;
            }else{
                this.reverseOrder = false;
                this.sort = index;
            }
        },
        showClickHandle(text){
            if(text!=this.showType){
                this.showType = text;
            }
        }
    }
}
</script>

<style lang='less' scoped>
.left{
    width: 870px;
}
.right{
    width: 250px;
    // padding-right: 20px;
}
.filter_box{
    background-color: #fff;
    border-top: 1px solid #d3d3d3;
    font-size: 12px;
    line-height: 36px;
    .filter_item{
        border-bottom: 1px solid #d3d3d3;
        padding:20px;
    }
    .filter_list{
        width: 785px;
        li{
            margin: 0 19px;
            cursor: pointer;
            &:hover{
                color: #1b9fe2;
            }
            &:nth-child(11){
                margin-right: 0;
            }
        }
        .active{
            color: #1b9fe2;
        }
    }
    .title{
        font-weight: 600;
    }
}
.studio_box{
    background-color: #fff;
    .studio_box_head{
        padding: 0 20px;
        height: 48px;
        line-height: 48px;
        font-size: 14px;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
    }
    dt,dd{
        float: left;
        margin: 0 10px;
        color: #919698;
    }
    dd{
        &:hover{
            cursor: pointer;
        }
        span{
            display: inline-block;
            background: url('../../../assets/icon/top.png') no-repeat;
            width: 16px;
            height: 16px;
            background-size: cover;
            vertical-align: middle;
            margin-left: 6px;
        }
        .re{
            transform: rotate(180deg);
        }
    }
    .active{
        color: #1b9fe2;
    }
    .show_style_box{
        span{
            width: 23px;
            height: 24px;
            display: inline-block;
            vertical-align: middle;
            cursor: pointer;
            margin: 0 4px;
        }
        .r{
            background: url('../../../assets/icon/fx1.png') no-repeat;
            background-size: cover;
            &:hover{
                background-image: url('../../../assets/icon/fx11.png');
            }
        }
        .r.active{
            background-image: url('../../../assets/icon/fx11.png');
        }
        .l{
            background: url('../../../assets/icon/fx2.png') no-repeat;
            background-size: cover;
            &:hover{
                background-image: url('../../../assets/icon/fx22.png');
            }
        }
        .l.active{
            background-image: url('../../../assets/icon/fx22.png');
        }
    }
}

.studio_list{
    padding: 20px 23px 0px;
    background-color: #fff;
}
.studio_list.l{
    padding-bottom: 20px;
    li{
        border-bottom: 1px solid #e7e7e7;
        padding: 20px 15px 20px 10px;
        overflow: hidden;
        &:hover{
            background-color: #f3f3f3;
        }
        .studio_head_pic{
            float: left;
            width: 64px;
            height: 64px;
            margin-right: 16px;
        }
        .studio_info{
            float: left;
            width: 600px;
            .top{
                line-height: 22px;
                height: 22px;
                font-size: 12px;
                margin-bottom: 11px;
                span{
                    display: inline-block;
                    vertical-align: middle;
                }
                .studio_name{
                    font-size: 14px;
                    color: #555555;
                    font-weight: 600;
                    margin-right: 20px;
                }
                .studio_type{
                    color: #1b9fe2;
                    margin-right: 20px;
                }
                .studio_area{
                    color: #a5a5a5;
                }
            }
            .middle{
                margin-bottom: 5px;
                line-height: 22px;
                color: #8f9a9e;
                .member,.visit_num{
                    margin-right: 25px;
                    span{
                        color: #1b9fe2;
                    }
                }
            }
            .bottom{
                font-size: 12px;
                line-height: 22px;
                color: #8f9a9e;
            }
        }
        .join_btn{
            float: right;
            width: 102px;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
            background-color: #1b9fe2;
            color: #fff;
            &:hover{
                text-decoration:none;
                background-color: #1881c2;
            }
        }
    }
}

.studio_list.r{
    overflow: hidden;
    li{
        float: left;
        width: 256px;
        box-shadow: 0 0 5px #ccc;
        margin-right: 28px;
        margin-bottom: 30px;
        &:nth-child(3n){
            margin-right: 0px;
        }
        .studio_head_pic{
            width: 256px;
            height: 165px;
        }
        .studio_info{
            padding: 8px 28px;
            background-color: #fff;
            .top{
                .studio_name{
                    display: block;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 26px;
                    color: #5c5c5c;
                    border-bottom: 1px solid #bfbfbf;
                }
                .studio_type{
                    display: block;
                    margin-top: 6px;
                    font-size: 12px;
                    line-height: 26px;
                    color: #1b9fe2;
                }
                .studio_area{
                    display: none;
                }
            }
            .middle{
                overflow: hidden;
                font-size: 12px;
                line-height: 26px;
                .member{
                    float: left;
                }
                .visit_num{
                    float: right;
                }
            }
            .bottom{
                display: none;
            }
        }
        .join_btn{
            display: none;
        }
    }
}
#page_box{
    background-color: #fff;
    margin-top: 0px;
    padding-bottom: 20px;
}

.hot_studio{
    padding: 20px 10px;
    background-color: #fff;
    dt{
        font-size: 20px;
        line-height: 48px;
        padding-top: 8px;
        color: #7b8083;
    }
    dd{
        font-size: 12px;
        line-height: 21px;
        margin-bottom: 17px;
        
        .no{
            float: left;
            width: 21px;
            height: 21px;
            border: 1px solid #1b9fe2;
            text-align: center;
            line-height: 21px;
            color: #1b9fe2;
            margin-right: 9px;
        }
        a{
            float: left;
            width: 120px;
            white-space: nowrap;
            overflow: hidden;
        }
        .visit_num{
            width: 60px;
            float: right;
            color: #1b9fe2;
            text-align: right;
        }
        &:nth-child(2),&:nth-child(3),&:nth-child(4){
            .no{
                background-color: #fc9025;
                border-color: #fc9025;
                color: #fff;
            }
        }
    }
}
</style>
