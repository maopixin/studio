<template>
    <div class="top">
        <header-use></header-use>
        <div class="studio_background" style="background-image:url('http://img.zjer.cn/uploads/album/2017/1215/125/5a33a8219fa98.jpg')">

        </div>
        <Nav :list='list' bgColor='#1b9fe2'/>
    </div>
</template>

<script>
import Nav from './Nav';
import HeaderUse from '@global/Header.vue'
export default {
  name: "Head",
  components: {
      Nav,
      HeaderUse
  },
  data() {
    return {
        activeIndex: '1',
        list:[
            {
                id:'2',
                title:'我的订单',
                children:[
                    {
                        fid:'2',
                        id:'1',
                        title:'wod'
                    }
                ]
            }
        ]
    };
  },
  methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClick(path){
            console.log(path);
        }
    }
};
</script>

<style scoped>
/*头部网站状态*/
.top{
    width: 100%;
    background-color: #f6f6f6;
}
/*工作室背景图*/
.studio_background{
    width: 100%;
    height: 340px;
    background-position: center center;
    background-repeat: no-repeat;
}

</style>
