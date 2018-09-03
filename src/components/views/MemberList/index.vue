<template>
    <div>
        <crumbs title='工作室成员'/>
        <div class="content">
            <el-container class="tab-top">
                <el-tabs v-model="active.name" @tab-click="handleClick">
                    <el-tab-pane label="全部" name='all'>
                        <type-box :list='all' @follow='followClick'/>
                    </el-tab-pane>
                    <el-tab-pane label="管理员" name='admin'>
                        <type-box :list='admin' @follow='followClick'/>
                    </el-tab-pane>
                    <el-tab-pane label="学科带头人" name='subject'>
                        <type-box :list='subject' @follow='followClick'/>
                    </el-tab-pane>
                    <el-tab-pane label="普通成员" name='member'>
                        <type-box :list='member' @follow='followClick'/>
                    </el-tab-pane>
                    <el-tab-pane label="专家" name='expert'>
                        <type-box :list='expert' @follow='followClick'/>
                    </el-tab-pane>
                    <el-tab-pane label="助教" name='assistant'>
                        <type-box :list='assistant' @follow='followClick'/>
                    </el-tab-pane>
                </el-tabs>
                <el-main class="search-box">
                    <div class="search_box">
                        <el-autocomplete
                            class="inline-input"
                            v-model="searchValue"
                            :fetch-suggestions="querySearch"
                            placeholder="搜索成员"
                            :trigger-on-focus="false"
                            @select="handleSelect"
                        >
                            <el-tooltip class="item" slot="suffix" effect="dark" content="点击展示" placement="bottom-start">
                                <i
                                    class="el-icon-edit el-input__icon"
                                    
                                    @click="handleIconClick">
                                </i>
                            </el-tooltip>
                            <template slot-scope="{ item }">
                                <div class="name">{{ item.title }}</div>
                                <span class="addr">{{ item.duty }}</span>
                            </template>
                        </el-autocomplete>
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
        searchValue:'',
        loading:true,
        memberList:[],
        memberListCopy:[],
        showSearch:false,
      };
    },
    methods: {
      handleClick(tab,event) {
          if(this.searchValue=='' && this.showSearch){
              this.memberList = this.memberListCopy;
          }
      },
      followClick(obj){
          if(obj.type=='关注'){
            followPerson({
                follow_user_id:obj.id
            }).then(data=>{
                console.log(data)
                if(data.status.code==0){
                    console.log(obj,111)
                    this.$notify({
                        title: '关注成功',
                        message: '您已成功关注: '+obj.name,
                        type: 'success'
                    });
                    for (let i = 0; i < this.memberList.length; i++) {
                        if(this.memberList[i].id == obj.id){
                            var obj2 = this.memberList[i];
                            obj2.is_follow_mine = 1;
                            this.$set(this.memberList,i,obj2);
                            return false;
                        }
                    }
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
                        title: '取消成功',
                        message: '您已成功取消关注: '+obj.name,
                        type: 'success'
                    });
                    for (let i = 0; i < this.memberList.length; i++) {
                        if(this.memberList[i].id == obj.id){
                            var obj2 = this.memberList[i];
                            obj2.is_follow_mine = 0;
                            this.$set(this.memberList,i,obj2);
                            return false;
                        }
                    }
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
      },
        handelData(arr){
            let follows = this.$store.getters.userInfo.follows;
            for (let i = 0; i < follows.length; i++) {
                for (let k = 0; k < arr.length; k++) {
                    console.log(arr[k].id == follows[i].follow_user_id,arr[k].id , follows[i].follow_user_id)
                    if(arr[k].id == follows[i].follow_user_id){
                        arr[k].is_follow_mine = 1;
                    }
                }
            };
            return arr;
        },
        querySearch(queryString, cb){
            let arr = queryString ? this.memberList.filter(e=>{
                return e.title.toLowerCase().indexOf(queryString.toLowerCase())>=0
            }) : this.memberList;
            cb(arr);
        },
        handleSelect(item){
            this.searchValue = item.title;
            this.memberListCopy = this.memberList;
            this.memberList = [item];
            this.showSearch = true;
        },
        handleIconClick(){
            this.searchValue = '';
            this.memberList = this.memberListCopy
        }
    },
    created(){
        console.log(this.$store.getters.userInfo)
        getStuidoMembers({
            studio_id:this.$route.params.id,
            pre_page:1000
        }).then(data=>{
            if(data.status.code==0){
                let list = this.handelData(data.data.list);
                this.loading = false;
                this.memberList = list;
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
            console.log(error)
            this.list[0].list.loading = true;
            this.$notify.error({
                title: '错误',
                message: '请求出错'
            });
        })
    },
    computed:{
        all(){
            return this.memberList;
        },
        admin(){
            return this.memberList.filter(e=>{
                return e.duty == '管理员';
            });
        },
        subject(){
            return this.memberList.filter(e=>{
                return e.duty == '学科带头人';
            });
        },
        member(){
            return this.memberList.filter(e=>{
                return e.duty == '普通成员';
            });
        },
        expert(){
            return this.memberList.filter(e=>{
                return e.duty == '专家';
            });
        },
        assistant(){
            return this.memberList.filter(e=>{
                return e.duty == '助教';
            });
        },
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
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
      line-height:18px;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
      line-height:18px;
    }
</style>

