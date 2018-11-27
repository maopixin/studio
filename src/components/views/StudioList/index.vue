<template>
    <div>
        <!-- <Crumbs title='工作室列表'/> -->
        <div style="padding-top:30px;">
            <div class="content clearfix">
            <div class="left fl">
                <!-- <div class="filter_box box-shadow">
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
                    
                </div> -->
                <div class="studio_box margin_t">
                    <div 
                        class="studio_box_head clearfix" 
                        
                    >
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
                        <div class="fr studio_list_search">
                            <!-- <el-autocomplete
                                class="inline-input"
                                v-model="seacrValue"
                                :fetch-suggestions="querySearch"
                                placeholder="请输入工作室名称"
                                :trigger-on-focus="false"
                                @select="handleSelect"
                            >
                                <i
                                    class="el-icon-edit el-input__icon"
                                    slot="suffix"
                                    @click="handleIconClick">
                                </i>
                                <template slot-scope="{ item }">
                                    <div class="name">{{ item.name }}</div>
                                    <span class="addr">{{ item.synopsis }}</span>
                                </template>
                            </el-autocomplete> -->
                            <el-input
                                placeholder="请输入工作室名称" 
                                v-model="seacrValue"

                                class="input"
                            >
                                <i
                                    class="el-icon-circle-close-outline el-input__icon"
                                    slot="suffix"
                                    @click="handleIconClick">
                                </i>
                                <el-button @click="handleSearch" slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </div>
                    </div>
                    <ul 
                        class="studio_list" 
                        :class="showType"
                        v-loading="loading"
                        element-loading-text="拼命加载中"
                        element-loading-background="rgba(255, 255, 255, 0.8)"
                    >
                        <li v-if="data.list.length<=0" class="no_list">暂无工作室数据</li>
                        <li
                            v-for="(item) in data.list"
                            :key='item.id'
                        >
                            <!-- {name:'studio',params: { id: item.id }} -->
                            <router-link class="pic_url" :to="'/institute/studio/'+item.id">
                                <img class="studio_head_pic" :src="item.logo" alt="">
                            </router-link>
                            <!-- <a class="" href=""></a> -->
                            <div class="studio_info">
                                <div class="top">
                                    <span class="studio_name">
                                        <a href="">{{item.name}}</a>
                                    </span>
                                    <span class="studio_type">学科：{{item.subject_major||'暂无'}}</span>
                                    <span class="studio_area">地区</span>
                                </div>
                                <div class="middle">
                                    <span class="member">
                                        成员：<span>{{item.member_cnt}}</span>
                                    </span>
                                    <span class="visit_num">
                                        访问量：<span>{{item.pv}}</span>
                                    </span>
                                </div>
                                <div class="bottom">
                                    工作室简介：{{item.synopsis}}
                                </div>
                            </div>
                            <a class="join_btn" href="javascript:;">申请加入</a>
                        </li>
                    </ul>
                    <div id="page_box" class="clearfix" v-if='Number(data.total)!==0'>
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :page-size="limit"
                            :total="Number(data.total)"
                            :current-page="page"
                            @current-change="currentChange"
                        >
                        </el-pagination>
                    </div>
                </div>
            </div>
            <!-- <div class="right fr box-shadow">
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
            </div> -->
        </div>
        </div>
    </div>
</template>

<script>
import Crumbs from '@global/crumbs';
import jsonp from 'jsonp';
import qs from 'qs';
export default {
    props:['institute'],
    components: {
        Crumbs
    },
    metaInfo(){
        return {
            title:'东联教育 - 名师工作室',
            meta: [
                {
                    name: 'keyWords',
                    content: '东联教育,东联在线,工作室,研究院,在线教育,家庭教育'
                },
                {
                    name:'description',
                    content: '优质的教育资源，各类专家坐阵咨询，百强名校成果展示，万位名师供你选择，周末与孩子共成长'
                }
            ]
        }
    },
    data(){
        return {
            loading:false,
            area: 0,
            areaText:'不限',
            lv: 0,
            lvText: '不限',
            sortArr:['默认','访问量','成员数','开通时间'],
            sortTypeArr:['pv','pv','member_cnt','ctime'],
            reverseOrder: false,
            sort: 0,
            show: 0,
            showText :'inline-block',
            showType:'r',
            seacrValue:"",
            page:1,
            limit:8,
            data:{
                total:0,
                list:[]
            }
        }
    },
    created(){
        this.pageChange();
    },
    computed:{
        
    },
    methods:{
        // areaClickHandle(index,text){
        //     this.area = index+1;
        //     return false;
        // },
        // lvClickHandle(index,text){
        //     this.lv = index+1;
        // },
        // 配置参数
        setParams(){
            let data = {
                p:this.page,
                limit:this.limit
            };
            // 是否为搜索
            if(this.showSearch){
                data.k = this.seacrValue;
            }
            // 排序方式
            let str = '';
            if(!this.reverseOrder){
                str += "-";
            }
            str += this.sortTypeArr[this.sort];

            data._sort = str;
            if(this.institute){
                data.institute_id = this.institute
            }
            console.log(data)
            return data;
        },
        // 页面改变
        pageChange(cb){
            this.loading = true;
            let str = qs.stringify(this.setParams());
            jsonp("/api/studioP/index?"+str,null,(err,data)=>{
                if (err) {
                    this.loading = false;
                    this.$message({
                        message: '工作室列表获取失败',
                        type: 'warning'
                    });
                } else {
                    this.loading = false;
                    cb&&cb();
                    if(data.status.code==0){
                        this.data = data.data;
                    }else{
                        this.$message({
                            message: data.data[0],
                            type: 'warning'
                        });
                    }
                }
            })
        },
        sortClickHandle(index){
            if(this.loading){
                this.$message({
                    message: '您点的太快了',
                    type: 'warning'
                });
                return false;
            }
            if(index==this.sort){
                if(index==0) return false;
                this.reverseOrder = !this.reverseOrder;
            }else{
                this.reverseOrder = false;
                this.sort = index;
            };
            this.$nextTick(()=>{
                this.pageChange()
            })
        },
        showClickHandle(text){
            if(text!=this.showType){
                this.showType = text;
            }
        },
        handleSelect(item){
            this.$router.push({ path: '/institute/studio/'+item.id });
        },
        handleIconClick(){
            if(this.seacrValue==""){
                return false;
            }
            this.seacrValue = "";
            this.showSearch = false;
            this.page = 1;
            let str = '';
            this.$nextTick(()=>{
                this.pageChange()
            })
        },
        currentChange(val){
            this.page = val;
            this.$nextTick(()=>{
                this.pageChange()
            })
        },
        handleSearch(){
            this.showSearch = true;
            this.page = 1;
            this.loading = true;
            let str = '';
            this.$nextTick(()=>{
                this.pageChange();
            })
        }
    }
}
</script>

<style lang='less' scoped>
#page_box{
    margin: 0;
    margin-top: 20px;
    padding-bottom: 0;
}
.left{
    // width: 870px;
    width: 1140px;
}
.right{
    // width: 250px;
    // padding-right: 20px;
}
.filter_box{
    user-select:none;
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
.studio_list_search{
    // width: 350px;
}

.name {
    text-overflow: ellipsis;
    overflow: hidden;
}
.addr {
    font-size: 12px;
    color: #b4b4b4;
}

.highlighted .addr {
    color: #ddd;
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
        .rank_filter{
            user-select:none;
        }
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
    min-height: 260px;
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
            width: 82px;
            height: 82px;
            margin-right: 16px;
            border-radius: 4px;
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
                    min-height: 26px;
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
            border-radius: 4px;
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
        margin-right: 23px;
        margin-bottom: 30px;
        &:nth-of-type(4n){
            margin-right: 0px;
        }
        .pic_url{
            display: block;
            width: 100%;
            height: 165px;
            overflow: hidden;
            position: relative;
        }
        .studio_head_pic{
            height: 100%;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate3d(-50%,0,0);
        }
        .studio_info{
            padding: 8px 28px;
            background-color: #fff;
            .top{
                .studio_name{
                    display: block;
                    font-size: 14px;
                    font-weight: 600;
                    min-height: 26px;
                    line-height: 26px;
                    color: #5c5c5c;
                    border-bottom: 1px solid #bfbfbf;
                }
                .studio_type{
                    display: block;
                    margin-top: 6px;
                    font-size: 12px;
                    min-height: 26px;
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
    .no_list{
        float: initial;
        width: 100%;
        height: 240px;
        line-height: 240px;
        border: none;
        box-shadow: initial;
        text-align: center;
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
