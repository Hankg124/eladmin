import { reactive, ref } from 'vue';
import {  ElNotification, type FormInstance, type FormRules } from 'element-plus';
import type { LoginParamsType } from '@/api/authType';
import { loginCodeApi, loginApi } from '@/api/auth'
import { getToken, setToken } from '@/utils/auth'
import { rasEncrypt } from '@/utils/rsaEncrypt'
import { useRouter } from 'vue-router';

export default function useLogin() {
    const router = useRouter();
    const codeImg = ref('')

    const formRef = ref<FormInstance>()

    const form = ref({
        code: '',
        password: "",
        username: "admin",
        uuid: "",
        copyPassword: ''
    })

    const rules = reactive<FormRules<LoginParamsType>>({
        username: [
            { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        code: [
            { required: true, message: '验证码不能为空', trigger: 'blur' }
        ]
    })

    //获取验证码
const getCode = async () => {
    const res = await loginCodeApi();
    codeImg.value = res.img;
    form.value.uuid = res.uuid;
}
//密码失焦
const blurPass = () => {
    setToken('copyPassword', form.value.password);
    form.value.copyPassword = form.value.password;
}
//登录
const login = () => {

    formRef.value!.validate((valid: boolean) => {
        if (valid) {
            if (form.value.copyPassword == getToken('copyPassword')) {
                form.value.copyPassword = rasEncrypt(form.value.password) as string;
            } else {
                console.log('已加密');
            }
            loginApi({
                code: form.value.code,
                password: form.value.copyPassword,
                username: form.value.username,
                uuid: form.value.uuid,
            }).then((res: any) => {
                console.log(res);
                setToken('token', res.token);
                ElNotification({
                    title: 'Success',
                    message: '登录成功',
                    type: 'success',
                })
                router.push('/');
            })
        }
    })
}
    

    return{
        formRef,
        codeImg,
        form,
        rules,
        getCode,
        blurPass,
        login
    }
}