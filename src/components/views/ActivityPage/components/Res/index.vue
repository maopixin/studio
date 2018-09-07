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
            :action="'/index/file/upload?studio_id='+this.$route.params.id+'&activity_tache_id='+this.data.id"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success='success'
            :on-error='uperror'
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :with-credentials='true'
            :file-list="fileList"
            :disabled='!this.$store.getters.userInfo.get_login'
        >
            <el-button size="small" type="primary" @click='beforeUpload'>上传文件</el-button>
            <div slot="tip" class="el-upload__tip">只能上传{{data.detail.upload_limit.join('、')}}文件</div>
        </el-upload>
        <ul class="doc-list">
            <li 
                class="clearfix type-doc"
                v-for="(item) in flist"
                :key='item.id'
            >
                <span class="type fl">活动文档：</span>
                <span class="fl"><a :href="'/index/file/download?activity_user_resource='+item.id" target="_blank">{{item.filename}}</a></span>
                <span class="fr">
                    <a :href="'/index/file/download?activity_user_resource='+item.id" target="_blank"><img src="@/assets/icon/down.png" alt=""></a>
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
          fileList:[],
          list:[]
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
      },
      beforeUpload(){
            if(!this.$store.getters.userInfo.get_login){
                this.$alert('上传文件需要登录，请您先进行登录', '未登录', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(() => {
                    window.location.href = 'http://account.dljy.com/user/login/login?goto='+window.location.href;
                }).catch(()=>{
                    console.log('取消登录')
                })
            }
      },
      success(response, file, fileList){
        if(!response.status){
            this.$message.error('文件上传失败');
            this.fileList = [];
        }else{
            if(response.status.code==0){
                this.$message({
                    message: '文件上传成功',
                    type: 'success'
                });
                this.list = [...this.list,response.data.data];
                this.fileList = [];
            }else{
                this.$message.error('文件上传失败');
                this.fileList = [];
            }
        }
      },
      uperror(err, file, fileList){
        this.$message.error('文件上传失败');
        this.fileList = [];
      }
    },
    computed:{
        flist(){
            return [...this.list,...this.data.detail.user_resources.data]
        }
    }
}
</script>

<style lang='less'>
    
</style>
