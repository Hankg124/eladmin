<template>
    <div class="login-bg">
        <div class="login">
            <h3 style="color: #707070;">ELADMIN 后台管理系统</h3>
            <el-form :model="form">
                <el-form-item>
                    <el-input :prefix-icon="UserFilled" v-model="form.username" />
                </el-form-item>
                <el-form-item>
                    <el-input show-password :prefix-icon="Lock" v-model="form.password" />
                </el-form-item>
                <el-form-item style="display: flex;">
                    <el-input placeholder="验证码" :prefix-icon="UserFilled" v-model="form.password" style="width: 70%;" />
                    <img @click="getCode" width="30%" :src="codeImg" alt="">
                </el-form-item>
                <el-form-item>
                    <el-checkbox label="记住我" size="large" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 100%;">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>


<script lang='ts' setup>
import {loginCodeApi} from '@/api/auth'
import { ref } from 'vue';
import {UserFilled,Lock} from '@element-plus/icons-vue'

const codeImg=ref('')

const form = ref({
    code: '',
    password: "",
    username:"",
    uuid:"",
})

const getCode=async()=>{
    const res = await loginCodeApi();
    codeImg.value=res.img;
}

getCode();

</script>
<style lang='scss' scoped>
.el-form{
    margin: 20px 0;
}
.login-bg {
    width: 100%;
    height: 100%;
    background: url('https://eladmin.vip/demo/static/img/background.4a692a58.jpeg') no-repeat;
    background-size: cover;
    position: relative;

    .login {
        box-sizing: border-box;
        padding: 20px;
        width: 385px;
        height: 350px;
        background-color: #fff;
        border-radius: 10px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        h3 {
            text-align: center;
        }
    }
}
</style>