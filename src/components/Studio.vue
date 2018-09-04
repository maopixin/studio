<template>
  <div>
    <Head></Head>
    <transition>
      <keep-alive include="Home">
        <router-view/>
      </keep-alive>
    </transition>
    <Footer/>
  </div>

</template>

<script>
  import Head from './global/Head.vue';
  import Content from '@/components/global/Content';
  import Footer from '@global/Footer.vue';
  export default {
    name: "Index",
    components: {
      Head,
      Footer
    },  
    data() {
      return {
        name: ""
      };
    },
    created () {
      
    }
  };
</script>

<style lang='less'>
  @import url('../assets/less/index.less');
  @import url('../assets/layui/css/layui.css');
</style>
