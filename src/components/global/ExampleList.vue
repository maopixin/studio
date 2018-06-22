<template>
    <ul>
        <li 
            class="clearfix" 
            v-for="(item,index) in 6"
            :key='index'
        >
            <span class="num">{{index+1}}</span>
            <span class="title">
                <a href="">考拉设计的快乐俺家打开链接阿迪了；</a>
            </span>
        </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
    ul{
        background-color: #fff;
        padding: 20px;
        li{
            font-size: 14px;
            line-height: 20px;
            padding-left: 18px;
            margin-bottom: 32px;
            &:last-child{
                margin: 0;
            }

            span{
                float: left;
            }
            .num{
                width: 20px;
                height: 20px;
                text-align: center;
                background-color: #cacaca;
                color: #fff;
                border-radius: 10px;
                font-size: 12px;
                margin-right: 12px;
            }
            .title{
                width: 200px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #333;
            }
            &:nth-child(1),&:nth-child(2),&:nth-child(3){
                .num{
                    background-color: red;
                }
            }
        }
    }
</style>
