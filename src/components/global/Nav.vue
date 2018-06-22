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
                <router-link :to='{name:item.type}'>{{item.title}}</router-link>
                <ul class="nav_item_list">
                    <li 
                        class="nav_item_item" 
                        v-for="(value,i) in item.child"
                        :key='i'
                    >
                        <a href="">{{value.title}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:'Nav',
    props: ['bgColor','textColor','activeTextColor'],
    data(){
        return {
            activeIndex:1,
            bgColor_d:'#fff',
            textColor_d:'#909399',
            activeTextColor_d:'#301133',
            list:[
                {
                    title:'专题资源',
                    type:'resource',
                    child:[
                        {
                            title:'资源一'
                        },
                        {
                            title:"资源二"
                        }
                    ]
                },
                {
                    title:'资讯列表',
                    type:'information',
                    child:[]
                },
                {
                    title:'教研活动',
                    type:'research',
                    child:[]
                },
                {
                    title:'特色展示',
                    type:'characteristic',
                    child:[]
                },
                {
                    title:'最新动态',
                    type:'news',
                    child:[]
                },
                {
                    title:'话题研讨',
                    type:'topic',
                    child:[]
                },
                {
                    title:'成员列表',
                    type:'member',
                    child:[]
                },
                {
                    title:'名师课堂',
                    type:'classroom',
                    child:[]
                },
                {
                    title:'活动案例',
                    type:'activitycase',
                    child:[]
                }
            ]
        }
    },
    created () {
        console.log(this.$store)
    },
    computed: {
        
    }
}
</script>

<style lang='less'>
    
</style>
