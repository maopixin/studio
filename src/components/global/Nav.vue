<template>
     <nav class="nav">
        <ul class="nav_list clearfix">
            <li class="nav_item">
                <router-link :to="{ path: '/institute/studio/'+this.$route.params.id }">首页</router-link>
            </li>
            <li 
                class="nav_item"
                v-for="(item,index) in navList"
                :key='index'
                @mouseover="navHover(index)"
                @mouseout="navOut"
                @click='navClick'
            >
                <router-link :to='{name:routerType[item.type_code],query:{navId:item.id}}'>{{item.name}}</router-link>
                <ul 
                    class="nav_item_list"
                    v-show="show==index"
                >
                    <li 
                        class="nav_item_item" 
                        v-for="(value,i) in item.child"
                        :key='i'
                    >
                        <router-link :to='{name:routerType[item.type_code],query:{navId:item.id,mId:value.id}}'>{{value.name}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
import {getCategory,getStudioDetail} from '@api/index.js'
export default {
    name:'Nav',
    metaInfo(){
        return {
            title:this.studioInfo.data.name || '东联教育',
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
    props: ['bgColor','textColor','activeTextColor'],
    data(){
        return {
            activeIndex:1,
            bgColor_d:'#fff',
            textColor_d:'#909399',
            activeTextColor_d:'#301133',
            typeList:{

            },
            studioInfo:{
                l:false,
                data:{},
                fail:false
            },
            show:null,
            list:[
                // {
                //     title:'专题资源',
                //     type:'resource',
                //     child:[
                //         {
                //             title:'资源一'
                //         },
                //         {
                //             title:"资源二"
                //         }
                //     ]
                // },
                // {
                //     title:'资讯列表',
                //     type:'information',
                //     child:[]
                // },
                // {
                //     title:'教研活动',
                //     type:'research',
                //     child:[]
                // },
                // {
                //     title:'特色展示',
                //     type:'characteristic',
                //     child:[]
                // },
                // {
                //     title:'最新动态',
                //     type:'news',
                //     child:[]
                // },
                // {
                //     title:'话题研讨',
                //     type:'topic',
                //     child:[]
                // },
                // {
                //     title:'成员列表',
                //     type:'member',
                //     child:[]
                // },
                // {
                //     title:'名师课堂',
                //     type:'classroom',
                //     child:[]
                // },
                // {
                //     title:'活动案例',
                //     type:'activitycase',
                //     child:[]
                // }
            ],
            routerType:{
                "1":'resource',
                "2":"information",
                "3":"classroom",
                "4":'research'
            }
        }
    },
    created () {
        getCategory({
            source:2,
            source_id:this.$route.params.id,
            pre_page:1000
        }).then(data=>{
            console.log(data);
            if(data.status.code==0){
                this.$store.commit('changeNavList',this.handleData(data.data.nav.list));
                this.$store.commit('changeBodyList',this.handleData2(data.data.body.list));
                this.$store.commit('changeNavL')
            }else{
                this.$message.error('工作室导航请求出错');
            }
        }).catch(error=>{
            this.$message.error('工作室导航请求出错');
        });
        // 工作室信息
        getStudioDetail({
            id:this.$route.params.id
        }).then(data=>{
            console.log(data,'工作室信息');
            this.studioInfo.l = true;
            if(data.status.code==0){
                this.studioInfo.data = data.data
            }else{
                this.studioInfo.fail = true;
            }
        }).catch(error=>{
            this.studioInfo.fail = true;
        })
    },
    methods:{
        handleData(arr){
            var newArr = [];
            arr.forEach(e => {
                if(e.parent_id==0){
                    var obj = e;
                    obj.child = [];
                    newArr.push(obj)
                }
            });
            newArr.forEach(e =>{
                let id = e.id;
                arr.forEach(e1 => {
                    if(e1.parent_id==id){
                        e.child.push(e1)
                    }
                })
            })
            return newArr.slice(0,9);
        },
        handleData2(arr){
            let obj = {};
            arr.forEach(e => {
                obj[e.name.trim()] = e;
            });
            return obj;
        },
        navHover(index){
            this.show = index;
        },
        navOut(){
            this.show = null;
        },
        navClick(){
            this.show = null;
        }
    },
    computed:{
        navList(){
            return this.$store.getters.navList;
        }
    },
}
</script>

<style lang='less'>
    
</style>
