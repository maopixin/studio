<template>
    <div>
        <header-use></header-use>
        <div class="Institute__content">
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
import HeaderUse from '@global/Header'
export default {
    components: {
        HeaderUse
    },
    data(){
        return {
            
        }
    },
    created(){
        
    }
}
</script>

<style lang='less'>
    @import url('../assets/less/index.less');
    .Institute__content{
        width: 1140px;
        margin: 0 auto;
    }
</style>
