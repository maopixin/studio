<template>
    <div>
        <Crumbs/>
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
                        <el-tab-pane label="全部" name="first">
                            <List/>
                        </el-tab-pane>
                        <el-tab-pane label="未开始" name="second">

                        </el-tab-pane>
                        <el-tab-pane label="进行中" name="third">

                        </el-tab-pane>
                        <el-tab-pane label="已结束" name="fourth">

                        </el-tab-pane>
                    </el-tabs>
                    <el-pagination
                        background
                        class="page_box"
                        layout="prev, pager, next"
                        :total="50"
                        :page-size="5"
                    >
                    </el-pagination>
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
                    <ExampleList/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Crumbs from "@/components/global/crumbs";
import List from './components/List';
import ExampleList from '@/components/global/ExampleList.vue';
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
        list:[]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
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
