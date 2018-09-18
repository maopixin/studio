<template>
    <div class="">
        <Header/>
        <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="studio_apply_form_box" label-position='top'>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="tel">
                <el-input v-model="form.tel"></el-input>
            </el-form-item>
            <el-form-item label="所在学校">
                <el-input v-model="form.school"></el-input>
            </el-form-item>
            <el-form-item label="所获职称">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="所获荣誉" class="sp"></el-form-item>
            <div class="upload_box">
                <el-upload
                    action="/api/upload/doUpload"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-success='handleSuccess'
                    :on-error='handleError'
                    :before-upload="beforeAvatarUpload"
                >
                    <i class="el-icon-plus"></i>
                    <div slot="tip" class="el-upload__tip">请上传jpg, gif, png格式的图片</div>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </div>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即申请</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Header from '@global/Header'
import {studioApply} from '@api/index'
export default {
    components:{
        Header
    },
    data() {
    var checkNumber = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入申请人的联系方式'));
        }
        setTimeout(() => {
          if(typeof(Number(value))=='number' && !isNaN(Number(value))){
                return callback();
          }else{
              return callback(new Error('联系方式必须为数字'))
          }
        }, 1);
      };
      return {
        form: {
          name: '',
          tel: '',
          school: '',
          title: ''
        },
        rules:{
            name:[
                { required: true, message: '请输入申请人的姓名' },
            ],
            tel:[
                { required: true, validator: checkNumber }
            ],
        },
        dialogImageUrl: '',
        dialogVisible: false,
        picList:[]
      }
    },
    methods: {
      onSubmit() {
        this.$refs['form'].validate((valid) => {
          if (valid) {
            studioApply({
                person_name:this.form.name,
                phone:this.form.tel,
                school:this.form.school,
                duty:this.form.title,
                honor_image:this.picList.join(',')
            }).then(data=>{
                if(data.status.code==0){
                    this.$message({
                        message: '工作室申请提交成功，请等待管理员审核',
                        type: 'success'
                    });
                    setTimeout(()=>{
                        window.location.href = 'http://www.dljy.com'
                    },2000)
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleSuccess(response, file, fileList) {
        if(response.status.code==0){
            this.picList.push(response.data.path);
        }else{
            this.$message('上传失败');
        }
      },
      handleError(err, file, fileList){
        this.$message.error('文件上传出错');
      },
      beforeAvatarUpload(file) {
        let type = false;
        console.log(file.type)
        if(file.type==='image/jpeg' || file.type==='image/jpg' || file.type==='image/png' || file.type==='image/gif'){
            type = true
        }else{
            this.$message.error('只能上传jpg,png,gif格式图片');
            return false;
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 2MB!');
        }
        return type && isLt2M
      }
    }
}
</script>

<style lang='less' scoped>
    .studio_apply_form_box{
        width: 470px;
        margin: 0 auto;
        padding: 100px 100px 0;
        .sp{
            width: 110px;
        }
        .upload_box{
            margin-top: -18px;
            margin-bottom: 18px;
        }
    }
</style>
