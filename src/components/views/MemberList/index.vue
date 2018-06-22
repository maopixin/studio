<template>
    <div>
        <crumbs/>
        <div class="content">
            <el-container class="tab-top">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="全部" name="first">
                        <type-box/>
                    </el-tab-pane>
                    <el-tab-pane label="管理员" name="second">
                        <type-box/>
                    </el-tab-pane>
                    <el-tab-pane label="学科带头人" name="third">
                        <type-box/>
                    </el-tab-pane>
                    <el-tab-pane label="普通成员" name="fourth">
                        <type-box/>
                    </el-tab-pane>
                    <el-tab-pane label="专家" name="fifth">
                        <type-box/>
                    </el-tab-pane>
                    <el-tab-pane label="助教" name="sixth">
                        <type-box/>
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
export default {
    name:'MemberList',
    components: {
        Crumbs,
        TypeBox
    },
    data() {
      return {
        activeName: 'first',
        searchValue:''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
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

