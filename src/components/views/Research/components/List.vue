<template>
    <ul class="activity_list">
        <li 
            class="clearfix"
            v-for="(item,index) in list"
            :key='index'
        >
            <div class="pic_box fl">
                <img :src="item.cover" alt="">
                <span>{{item.type_text}}</span>
            </div>
            <div class="activity_info fl">
                <div class="title clearfix">
                    <h4 class="fl">
                        <router-link :to="{name:'activityPage',params:{activityId:item.id}}">{{item.title}}</router-link>
                    </h4>
                    <span class="fl" :class="statusClass[item.process_status]">{{item.process_status_text}}</span>
                </div>
                <div class="time">
                    起止时间：{{item.start_time}}至{{item.stop_time}}
                </div>
                <div class="number clearfix">
                    <span class="person fl">创建者：{{item.creator_name}}</span>
                    <span class="person_num fl">参与人数：{{item.partner_cnt}}</span>
                </div>
                <div class="sys">
                    <span class="fl">活动描述：{{item.description}}</span>
                    <a @click='handleJoinActivityClick(item.id,item.have_been_involved_mine)' v-if='item.process_status==1'>{{item.have_been_involved_mine?'取消参与':'立即参与'}}</a>
                    <!--  -->
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        list : Array,
    },
    data(){
        return {
            statusClass:{
                '0':'un_start',
                '1':'going',
                '2':'over'
            }
        }
    },
    methods:{
        handleJoinActivityClick(id,go){
            this.$emit('joinActivityClick',{id,go});
        }
    },
    created(){
        
    }
}
</script>

<style lang='less' >
    .el-tabs__content{
        overflow: visible;
    }
    .activity_list{
        li{
            padding: 24px 0;
            border-bottom: 1px solid #eeeeee;
        }
        .pic_box{
            width: 156px;
            height: 115px;
            margin: 0 14px;
            position: relative;
            img{
                width: 100%;
                height: 100%;
            }
            span{
                width: 60px;
                height: 30px;
                background: url('./img/line.png') no-repeat ;
                position: absolute;
                top: 8px;
                left: -6px;
                color: #fff;
                line-height: 36px;
                text-indent: 1em;
                font-size: 12px;
            }
        }
        .activity_info{
            width: 518px;
            .title{
                h4{
                    font-size: 16px;
                    line-height: 24px;
                    color: #333333;
                    width: 329px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                span{
                    width: 72px;
                    height: 17px;
                    background: url('./img/going.png') no-repeat;
                    color: #fff;
                    font-size: 12px;
                    text-indent: 1em;
                    line-height: 18px;
                }
                .un_start{
                    background-image: url('./img/going.png');
                }
                .going{
                    background-image: url('./img/over.png');
                }
                .over{
                    background-image: url('./img/ready.png');
                }
            }
            .time{
                font-size: 12px;
                line-height: 18px;
                margin-top: 15px;
                color: #666666;
            }
            .number{
                color: #1b9fe2;
                font-size: 14px;
                line-height: 36px;
                .person{
                    width: 250px;
                }
            }
            .sys{
                span{
                    width: 398px;
                    font-size: 14px;
                    line-height: 22px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                a{
                    cursor: pointer;
                    width: 96px;
                    height: 30px;
                    background-color: red;
                    border-radius: 15px;
                    float: left;
                    text-align: center;
                    color: #fff;
                    line-height: 30px;
                    margin: -10px 0 0 20px;
                }
            }
        }
    }
</style>
