<template>
     <nav class="nav">
        <ul class="nav_list clearfix">
            <li class="nav_item">
                <router-link :to="{ path: '/institute/studio/'+this.$route.params.id }">首页</router-link>
            </li>
            <li 
                class="nav_item"
                v-for="(item,index) in list"
                :key='index'
            >
                <router-link :to='{name:item.type}'>{{item.name}}</router-link>
                <ul class="nav_item_list">
                    <li 
                        class="nav_item_item" 
                        v-for="(value,i) in item.child"
                        :key='i'
                    >
                        <a href="">{{value.name}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
import {getCategory} from '@api/index.js'
export default {
    name:'Nav',
    props: ['bgColor','textColor','activeTextColor'],
    data(){
        return {
            activeIndex:1,
            bgColor_d:'#fff',
            textColor_d:'#909399',
            activeTextColor_d:'#301133',
            typeList:{

            },
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
            ]
        }
    },
    created () {
        getCategory({
            source:2,
            source_id:this.$route.params.id
        }).then(data=>{
            console.log(data);
            if(data.status.code==0){
                this.list = this.handleData(data.data.list);
            }
        }).catch(error=>{

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
            return newArr
        }
    }
}
</script>

<style lang='less'>
    
</style>
