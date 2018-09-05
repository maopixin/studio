<template>
    <div class="step_box">
        <h4>
            <span>
                {{data.name}}
            </span>
        </h4>
        <ul class="describe">
            <li class="clearfix">
                <span class="fl title">截止时间:</span>
                <span class="fl info">{{data.end_time}}</span>
            </li>
            <li class="clearfix">
                <span class="fl title">任务描述:</span>
                <span class="fl info">{{data.detail.description}}</span>
            </li>
        </ul>
        <!-- <div class="doc-box">
            <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
        </div> -->
        <h4>
            <span>
                文档列表
            </span>
        </h4>
        <el-upload
            class="upload-demo"
            action="/public/File/upload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :with-credentials='true'
            :file-list="fileList">
            <el-button size="small" type="primary">上传文件</el-button>
            <div slot="tip" class="el-upload__tip"></div>
        </el-upload>
        <ul class="doc-list">
            <li 
                class="clearfix type-doc"
                v-for="(item) in data.detail.user_resources.data"
                :key='item.id'
            >
                <span class="type fl">活动文档：</span>
                <span class="fl"><a href="">{{item.filename}}</a></span>
                <span class="fr">
                    <a href="javascript:;"><img src="@/assets/icon/down.png" alt=""></a>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['data'],
    data() {
      return {
          fileList:[]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file,1);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
}
</script>

<style lang='less'>
    
</style>
