<template>
  <div>
    <Head></Head>
    <router-view/>
  </div>
</template>

<script>
  import Head from './global/Head.vue';
  import Content from '@/components/global/Content'
  export default {
    name: "Index",
    components: {
      Head
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
