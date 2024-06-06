<template>
    <div class="login-bg">
        <div class="login">
            <h3 style="color: #707070;">ELADMIN 后台管理系统</h3>
            <el-form :model="form" :rules="rules" ref="formRef">
                <el-form-item prop="username">
                    <el-input :prefix-icon="UserFilled" v-model="form.username" />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" @change="blurPass" :prefix-icon="Lock" v-model="form.password" />
                </el-form-item>
                <el-form-item style="display: flex;" prop="code">
                    <el-input placeholder="验证码" :prefix-icon="UserFilled" v-model="form.code" style="width: 70%;" />
                    <img @click="getCode" width="30%" :src="codeImg" alt="">
                </el-form-item>
                <el-form-item>
                    <el-checkbox label="记住我" size="large" />
                </el-form-item>
                <el-form-item>
                    <el-button @click="login" type="primary" style="width: 100%;">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>


<script lang='ts' setup>
// import { useRouter } from 'vue-router';
// const router = useRouter();
// import { rasEncrypt } from '@/utils/rsaEncrypt'
import { getToken, setToken } from '@/utils/auth'
// import { loginCodeApi, loginApi } from '@/api/auth'
// import { reactive, ref } from 'vue';
import { UserFilled, Lock } from '@element-plus/icons-vue'
// import { ElMessage, ElNotification, type FormInstance, type FormRules } from 'element-plus';
// import type { LoginParamsType } from '@/api/authType';

import useeLogin from '@/hooks/useLogin'
const {formRef,codeImg,form,rules,getCode,blurPass,login} = useeLogin()

// const codeImg = ref('')

// const formRef = ref<FormInstance>()

// const form = ref({
//     code: '',
//     password: "",
//     username: "admin",
//     uuid: "",
//     copyPassword: ''
// })

// const rules = reactive<FormRules<LoginParamsType>>({
//     username: [
//         { required: true, message: '用户名不能为空', trigger: 'blur' }
//     ],
//     password: [
//         { required: true, message: '密码不能为空', trigger: 'blur' }
//     ],
//     code: [
//         { required: true, message: '验证码不能为空', trigger: 'blur' }
//     ]
// })

//获取验证码
// const getCode = async () => {
//     const res = await loginCodeApi();
//     codeImg.value = res.img;
//     form.value.uuid = res.uuid;
// }

getCode();
setToken('copyPassword', form.value.password);
//密码失焦
// const blurPass = () => {
//     setToken('copyPassword', form.value.password);
//     form.value.copyPassword = form.value.password;
// }

// //登录
// const login = () => {

//     formRef.value!.validate((valid: boolean) => {
//         if (valid) {
//             if (form.value.copyPassword == getToken('copyPassword')) {
//                 form.value.copyPassword = rasEncrypt(form.value.password) as string;
//             } else {
//                 console.log('已加密');
//             }
//             loginApi({
//                 code: form.value.code,
//                 password: form.value.copyPassword,
//                 username: form.value.username,
//                 uuid: form.value.uuid,
//             }).then((res: any) => {
//                 console.log(res);
//                 setToken('token', res.token);
//                 ElNotification({
//                     title: 'Success',
//                     message: '登录成功',
//                     type: 'success',
//                 })
//                 router.push('/dashboard');
//             })
//         }
//     })
// }

</script>
<style lang='scss' scoped>
.el-form {
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