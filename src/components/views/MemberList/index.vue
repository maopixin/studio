<template>
    <div>
        <crumbs/>
        <div class="content">
            <el-container class="tab-top">
                <el-tabs v-model="active.name" @tab-click="handleClick">
                    <el-tab-pane
                        v-for="(e,i) in list"
                        :key='i'
                        :label="e.label"
                        :name="e.value"
                        v-loading="!e.list.loading"
                    >
                        <type-box :list='e.list.list' @follow='followClick'/>
                    </el-tab-pane>
                </el-tabs>
                <el-main class="search-box">
                    <div class="search_box">
                        <el-input placeholder="搜索成员" v-model="searchValue" class="input-with-select">
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
import Crumbs from '@global/crumbs'
import TypeBox from './components/TypeBox'
import {getStuidoMembers, followPerson, followCancel} from '@api/index.js'
import { Loading } from 'element-ui';
export default {
    name:'MemberList',
    components: {
        Crumbs,
        TypeBox
    },
    data() {
      return {
        active:{
            name:'all',
        },
        list:[
            {
                label:'全部',
                value:'all',
                list:{
                    loading:false,
                    list:[]
                }
            },
            {
                label:'管理员',
                value:'admin',
                type:1,
                list:{
                    loading:false,
                    list:[]
                }
            },
            {
                label:'学科带头人',
                value:'subject',
                type:2,
                list:{
                    loading:false,
                    list:[]
                }
            },
            {
                label:'普通成员',
                value:'member',
                type:3,
                list:{
                    loading:false,
                    list:[]
                }
            },
            {
                label:'专家',
                value:'expert',
                type:4,
                list:{
                    loading:false,
                    list:[]
                }
            },
            {
                label:'助教',
                value:'assistant',
                type:5,
                list:{
                    loading:false,
                    list:[]
                }
            },
        ],
        searchValue:'',
      };
    },
    methods: {
      handleClick(tab,event) {
        if(!this.list[tab.index].list.loading){
            let loadingInstance = Loading.service({target:document.getElementById('pane-'+this.list[tab.index].value),lock:true,fullscreen:false});
            getStuidoMembers({
                id:this.$route.params.id,
                duty_code:this.list[tab.index].type,
                pre_page:1000
            }).then(data=>{
                loadingInstance.close();
                if(data.status.code==0){
                    this.list[tab.index].list.list = data.data.list;
                    this.list[tab.index].list.loading = true;
                }else{
                    var str = ''
                    for (const key in data.data) {
                        str += data.data[key]
                    }
                    this.$notify.error({
                        title: '错误',
                        message: str
                    });
                }
            }).catch(error=>{
                this.$notify.error({
                    title: '错误',
                    message: '请求出错'
                });
            })
        }   
      },
      followClick(obj){
          if(obj.type=='关注'){
            followPerson({
                follow_user_id:obj.id
            }).then(data=>{
                console.log(data)
                if(data.status.code==0){
                    this.$notify({
                        title: '成功',
                        message: '关注成功',
                        type: 'success'
                    });
                }else{
                    console.log(this.$fn)
                    var _this = this;
                    this.$notify.error({
                        title: '错误',
                        message: this.$tips(data.data)
                    });
                }
            }).catch((error)=>{
                console.log(error)
                this.$notify.error({
                    title: '错误',
                    message: '请求出错'
                });
            })
          }else{
            followCancel({
                follow_user_id:obj.id
            }).then(data=>{
                console.log(data)
                if(data.status.code==0){
                    this.$notify({
                        title: '成功',
                        message: '取消成功',
                        type: 'success'
                    });
                }else{
                    this.$notify.error({
                        title: '错误',
                        message: this.$tips(data.data)
                    });
                }
            }).catch(()=>{
                this.$notify.error({
                    title: '错误',
                    message: '请求出错'
                });
            })
          }
      }
    },
    created(){
        getStuidoMembers({
            id:this.$route.params.id,
            pre_page:1000
        }).then(data=>{
            if(data.status.code==0){
                this.list[0].list.loading = true;
                this.list[0].list.list = data.data.list;
            }else{
                var str = ''
                for (const key in data.data) {
                    str += data.data[key]
                }
                this.$notify.error({
                    title: '错误',
                    message: str
                });
            }
        }).catch(error=>{
            this.list[0].list.loading = true;
            this.$notify.error({
                title: '错误',
                message: '请求出错'
            });
        })
    }
}
</script>

<style lang='less'>
    
    .tab-top{
        .el-tabs__nav-wrap{
        padding: 12px 20px 0;
        line-height: 56px;
        }
        .el-tabs__content{
            width: 1140px;
            position: absolute;
            background-color: #fff;
        }
    }
    .search-box{
        padding: 0;
        height: 68px;
        border-bottom: 2px solid #e4e7ed;
        .search_box{
            width: 224px;
            margin-top: 22px;
            margin-left: 96px;
        }
    }
</style>

<style lang="less" scoped>
    .content{
        width: 1140px;
        margin: 0 auto;
        background-color: #fff;
        position: relative;
        overflow: visible;
    }
</style>

