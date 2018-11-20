<template>
    <div>
        <header-use></header-use>
        <div class="Institute__content">
            <router-view></router-view>
        </div>
        <Footer/>
    </div>
    
</template>

<script>
import HeaderUse from '@global/Header'
import Footer from '@global/Footer'
export default {
    components: {
        HeaderUse,
        Footer
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
