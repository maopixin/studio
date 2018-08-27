<template>
    <div class="msg-box">
        <h4 class="title">写评论</h4>
        <div class="leave_msg_box clearfix">
            <div class="fl person-head">
                <img src="@/assets/img/person128*128.png" alt="">
            </div>
            <div class="fr msg_box">
                <el-input
                    type="textarea"
                    :autosize="{ minRows: 4, maxRows: 4}"
                    placeholder="我也来评论一句"
                    v-model="msg"
                    @input='change'
                >
                </el-input>
                <div class="msg_btn">
                    <el-tooltip class="item" effect="dark" content="全角字符(中文汉字及标点等)等于一个文字,两个半角字符(英文字母及标点、阿拉伯数字等)等于一个文字" placement="bottom-end">
                        <span>还能输入<em>{{textNum}}</em>个字</span>
                    </el-tooltip>
                    <el-button type="primary">评论</el-button>
                </div>
            </div>
        </div>
        <h4 class="title">最新评论</h4>
        <div>
            <ul class="msg-list">
                <li class="msg-item">
                    <div class="fl msg_head">
                        <a href="javascript:;">
                            <img src="@/assets/img/person128*128.png" alt="">
                        </a>
                    </div>
                    <div class="fr msg_content">
                        <div class="text">
                            <a href="javascript:;" class="color">李月兰</a>：哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                        </div>
                        <div class="time_fn">
                            <time class="fl" datatime=''>2018-08-09 23:24</time>
                            <div class="fr">
                                <div class="fl">
                                    <img src="@/assets/icon/up.png" alt="">
                                    (0)
                                </div>
                                <div class="fl color">
                                    回复
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: '',
            textNum:140,
            textNumShow:140
        }
    },
    methods:{
        change(value){
            let num = this.GetLength(value);
            if(num>this.textNumShow*2){
                this.$message({
                    message: `单条评论最多输入${this.textNumShow}个字`,
                    type: 'warning'
                });
                this.$nextTick(() => {
                    let str = this.cutstr(value,this.textNumShow*2);
                    this.msg = str;
                    this.textNum = parseInt(140-this.GetLength(str)/2)
                })
            }else{
                this.$nextTick(()=>{
                    this.textNum = parseInt(140-num/2)
                })
            }
        },
        GetLength (str) {
            var realLength = 0, len = str.length, charCode = -1;
            for (var i = 0; i < len; i++) {
                charCode = str.charCodeAt(i);
                if (charCode >= 0 && charCode <= 128) realLength += 1;
                else realLength += 2;
            }
            return realLength;
        },
        cutstr(str, len) {
            var str_length = 0;
            var str_len = 0;
            var str_cut = new String();
            var str_len = str.length;
            for (var i = 0; i < str_len; i++) {
                var a = str.charAt(i);
                str_length++;
                if (escape(a).length > 4) {
                    //中文字符的长度经编码之后大于4  
                    str_length++;
                }
                str_cut = str_cut.concat(a);
                if (str_length >= len) {
                    return str_cut;
                }
            }
            //如果给定字符串小于指定长度，则返回源字符串
            if (str_length < len) {
                return str;
            }
        }
    },
}
</script>

<style lang='less' scoped>
    .msg-box{
        .title{
            font-size: 22px;
            line-height: 48px;
            border-bottom: 1px solid #eaeaea;
            text-indent: 6px;
        }
        .leave_msg_box{
            padding-top: 38px;
        }
        .person-head{
            width: 80px;
            height: 80px;
            border-radius: 4px;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                background-color: #c2c8cb;
            }
        }
        .msg_box{
            width: 660px;
            padding-bottom: 20px;
            /deep/ .el-textarea__inner{
                padding: 15px;
            }
            .msg_btn{
                text-align: right;
                padding-top: 9px;
                span{
                    display: inline-block;
                    vertical-align: top;
                    font-size: 16px;
                    color: #b3b3b3;
                    line-height: 32px;
                    margin-right: 30px;
                    em{
                        font-size: 22px;
                    }
                }
            }
        }
        .msg-list{
            padding-top: 32px;
            font-size: 16px;
            .msg_head{
                width: 50px;
                height: 50px;
                border-radius: 4px;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                    background-color: #c2c8cb;
                }
            }
            .msg_content{
                width: 690px;
                .text{
                    line-height: 18px;
                }
            }
            .color{
                color: #1b9fe2;
            }
        }
    }
</style>
