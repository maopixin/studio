<template>
    <div>
        <Crumbs title="教研活动"/>
        <div class="content clearfix">
            <div class="activity box-shadow fl">
                <div class="title_box">
                    <h3 class="column_title">
                        <div class="t_l">LINE</div>
                        <div class="t_c">教研活动</div>
                    </h3>
                </div>
                <div class="activity_box">
                    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                        <el-tab-pane label="全部" name="first" v-loading="detailList.loading">
                            <div style="height:50px;" v-if="detailList.loading"></div>
                            <List 
                                :list='all'
                                @joinActivityClick = 'joinActivityClick'
                                v-if="detailList.list.length>0"
                            />
                            <el-pagination
                                v-if="detailList.list.length>0"
                                background
                                class="page_box"
                                layout="total , prev , pager , next , jumper"
                                :total="Number(detailList.total)"
                                :page-size="pre_page"
                                @current-change='detailListChange'
                            >
                            </el-pagination>
                            <div v-if="detailList.list.length<=0&&!detailList.loading" style="text-align:center;">暂无更多数据</div>
                        </el-tab-pane>
                        <el-tab-pane label="未开始" name="second" v-loading="unStartList.loading">
                            <div style="height:50px;" v-if="unStartList.loading"></div>
                            <List :list='unStartList.list' v-if="unStartList.list.length>0"/>
                            <el-pagination
                                v-if="unStartList.list.length>0"
                                background
                                class="page_box"
                                layout="total , prev , pager , next , jumper"
                                :total="Number(unStartList.total)"
                                :page-size="pre_page"
                            >
                            </el-pagination>
                            <div v-if="unStartList.list.length<=0" style="text-align:center;">暂无更多数据</div>
                        </el-tab-pane>
                        <el-tab-pane label="进行中" name="third" v-loading="goingList.loading">
                            <div style="height:50px;" v-if="goingList.loading"></div>
                            <List 
                                :list='going' 
                                @joinActivityClick = 'joinActivityClick'
                                v-if="goingList.list.length>0"
                            />
                            <el-pagination
                                v-if="goingList.list.length>0"
                                background
                                class="page_box"
                                layout="total , prev , pager , next , jumper"
                                :total="Number(goingList.total)"
                                :page-size="pre_page"
                            >
                            </el-pagination>
                            <div v-if="goingList.list.length<=0" style="text-align:center;">暂无更多数据</div>
                        </el-tab-pane>
                        <el-tab-pane label="已结束" name="fourth" v-loading="overList.loading">
                            <div style="height:50px;" v-if="overList.loading"></div>
                            <List :list='overList.list' v-if="overList.list.length>0"/>
                            <el-pagination
                                v-if="overList.list.length>0"
                                background
                                class="page_box"
                                layout="total , prev , pager , next , jumper"
                                :total="Number(overList.total)"
                                :page-size="pre_page"
                            >
                            </el-pagination>
                            <div v-if="overList.list.length<=0" style="text-align:center;">暂无更多数据</div>
                        </el-tab-pane>
                    </el-tabs>
                    
                    
                </div>
            </div>
            <div class="example box-shadow fr">
                <div class="title_box">
                    <h3 class="column_title">
                        <div class="t_l">LINE</div>
                        <div class="t_c">活动案例</div>
                    </h3>
                </div>
                <div>
                    <ExampleList :list='overList.list'/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Crumbs from "@/components/global/crumbs";
import List from './components/List';
import ExampleList from '@/components/global/ExampleList.vue';
import {getActivityList,joinActivity,getUserJoined,quitActivity} from '@api/index.js';
export default {
    name:'research',
    components: {
        Crumbs,
        List,
        ExampleList
    },
    data() {
      return {
        activeName: 'first',
        detailList:{list:[],loading:true},
        unStartList:{list:[],loading:true},
        goingList:{list:[],loading:true},
        overList:{list:[],loading:true},
        userJoined:[],
        pre_page:5,
      };
    },
    computed:{
        all(){
            return this.detailList.list.map(e=>{
                for (let i = 0; i < this.userJoined.length; i++) {
                    if(e.id==this.userJoined[i].activity_id){
                        e.have_been_involved_mine = true;
                        break;
                    }else{
                        e.have_been_involved_mine = false;
                    }
                };
                if(this.userJoined.length<=0){
                   e.have_been_involved_mine = false; 
                }
                return e;
            })
        },
        going(){
            return this.goingList.list.map(e=>{
                for (let i = 0; i < this.userJoined.length; i++) {
                    if(e.id==this.userJoined[i].activity_id){
                        e.have_been_involved_mine = true;
                        break;
                    }else{
                        e.have_been_involved_mine = false;
                    }
                }
                if(this.userJoined.length<=0){
                   e.have_been_involved_mine = false; 
                }
                return e;
            })
        }
    },
    created(){
        getUserJoined().then(data=>{
            if(data.status.code==0){
                this.userJoined = data.data.list;
            }
        })
        getActivityList({
            page:1,
            pre_page:this.pre_page
        }).then(data=>{
            this.detailList.loading = false;
            if(data.status.code==0){

                this.detailList = data.data;
            }else{
                this.$notify.error({
                    title: '错误',
                    message: data.status.msg
                });
            }
        }).catch(error=>{
            this.detailList.loading = false;
        })
        getActivityList({
            page:1,
            process_status:0,
            pre_page:this.pre_page
        }).then(data=>{
            this.unStartList.loading = false;
            if(data.status.code==0){
                this.unStartList = data.data;
            }else{
                this.$notify.error({
                    title: '错误',
                    message: data.status.msg
                });
            }
        });
        getActivityList({
            page:1,
            process_status:1,
            pre_page:this.pre_page
        }).then(data=>{
            this.goingList.loading = false;
            if(data.status.code==0){
                this.goingList = data.data;
            }else{
                this.$notify.error({
                    title: '错误',
                    message: data.status.msg
                });
            }
        });
        getActivityList({
            page:1,
            pre_page:this.pre_page,
            process_status:2,
        }).then(data=>{
            this.overList.loading = false;
            if(data.status.code==0){
                this.overList = data.data;
            }else{
                this.$notify.error({
                    title: '错误',
                    message: data.status.msg
                });
            }
        });
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      detailListChange(page){
          getActivityList({
            page:page,
            pre_page:this.pre_page
        }).then(data=>{
            if(data.status.code==0){
                console.log(data.data.list)
                this.detailList = data.data;
                this.detailList.loading = false;
            }else{
                this.$notify.error({
                    title: '错误',
                    message: data.status.msg
                });
            }
        });
      },
      unStartListChange(page){
          getActivityList({
            page:page,
            pre_page:this.pre_page
        }).then(data=>{
            if(data.status.code==0){
                console.log(data.data.list)
                this.unStartList = data.data;
                this.unStartList.loading = false;
            }else{
                this.$notify.error({
                    title: '错误',
                    message: data.status.msg
                });
            }
        });
      },
      goingListChange(page){
          getActivityList({
            page:page,
            pre_page:this.pre_page
        }).then(data=>{
            if(data.status.code==0){
                console.log(data.data.list)
                this.goingList = data.data;
                this.goingList.loading = false;
            }else{
                this.$notify.error({
                    title: '错误',
                    message: data.status.msg
                });
            }
        });
      },
      overListChange(page){
          getActivityList({
            page:page,
            pre_page:this.pre_page
        }).then(data=>{
            if(data.status.code==0){
                console.log(data.data.list)
                this.overlList = data.data;
                this.overlList.loading = false;
            }else{
                this.$notify.error({
                    title: '错误',
                    message: data.status.msg
                });
            }
        });
      },
      joinActivityClick(obj){
          let {id,go} = obj
          if(go){
            return false;
            
          }else{
            joinActivity({
                activity_id:id
            }).then(data=>{
                console.log(data);
                if(data.status.code==0){
                    this.$notify({
                        title: '成功',
                        message: '参与活动成功',
                        type: 'success'
                    });
                    this.userJoined = [...this.userJoined,{activity_id:id}];
                    this.detailList.list = this.detailList.list.map(e=>{
                        if(e.id==id){
                            e.partner_cnt = data.data.cnt
                        };
                        return e;
                    });
                    this.goingList.list = this.goingList.list.map(e=>{
                        if(e.id==id){
                            e.partner_cnt = data.data.cnt
                        };
                        return e;
                    })
                }else{
                    if(data.status.code==10105){
                        this.$confirm('参与教研活动需要登录，是否需要登录？', '未登录', {
                            distinguishCancelAndClose: true,
                            confirmButtonText: '确定',
                            cancelButtonText: '取消'
                        })
                        .then(() => {
                            window.location.href='http://account.dljy.com/user/login/login?goto='+window.location.href;
                        })
                       
                    }else{
                        let str = '';
                        for(let i in data.data){
                            str += data.data[i]
                        }
                        this.$notify.error({
                        title: '错误',
                        message: str
                        });
                    }
                }

            }).catch(error=>{
                console.log(error)
            })
          }
      }
    }
}
</script>

<style lang='less' scoped>
    .content{
        width: 1140px;
        margin: 0 auto;
        .activity{
            width: 775px;
            background-color: #fff;
            .activity_box{
                padding: 20px;
            }
        }
        .example{
            width: 337px;
        }
    }
    .el-tabs__content {
        display: none;
    }
    .page_box{
        text-align: center;
        padding: 20px 0;
    }
</style>
