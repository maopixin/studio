<template>
    <div>
        <dljy-head :id="$route.params.id"/>
        <div class="container">
            <studio-list :institute='$route.params.id'/>
        </div>
        <Footer/>
    </div>
</template>

<script>
import DljyHead from '@global/DljyHome'
import StudioList from '@views/StudioList'
import Footer from '@global/Footer'
export default {
    components:{
        DljyHead,
        StudioList,
        Footer
    }
}
</script>

<style scoped>
    .container{
        width: 1140px;
        margin: -60px auto 0;
    }
    .container /deep/ .margin_t {
        margin-top: 12px;
        border-radius: 4px;
        overflow: hidden;
        -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.26), 0 0 6px 0 rgba(0, 0, 0, 0.2);
    }
    .container /deep/ #page_box{
        text-align: center;
    }
</style>
