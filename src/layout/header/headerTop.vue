<template>
    <div class="top">
        <div class="left">

            <el-icon size="24" v-show="!store.isCollapse" @click="store.isCollapse = !store.isCollapse">
                <Expand />
            </el-icon>
            <el-icon size="24" v-show="store.isCollapse" @click="store.isCollapse = !store.isCollapse">
                <Fold />
            </el-icon>
            <el-breadcrumb separator="/" style="margin-left: 10px;">
                <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(item, index) in BreadcrumbData" :key="index">{{ item.meta.title
                    }}</el-breadcrumb-item>

            </el-breadcrumb>
        </div>
        <div class="right">
            <div>
                <img src="@/assets/icon/sousuo.svg" alt="">
            </div>
            <div>
                <el-tooltip class="box-item" effect="dark" content="项目文档" placement="bottom">
                    <img @click="openDoc" src="@/assets/icon/d.svg" alt="">
                </el-tooltip>
            </div>
            <div>
                <el-tooltip class="box-item" effect="dark" content="全屏缩放" placement="bottom">
                    <img @click="toggle" v-show="!isFullscreen" src="@/assets/icon/quanping.svg" alt="">
                </el-tooltip>
                <el-tooltip class="box-item" effect="dark" content="全屏缩放" placement="bottom">
                    <img @click="toggle" v-show="isFullscreen" src="@/assets/icon/suoxiao.svg" alt="">
                </el-tooltip>
            </div>
            <div>
                <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <el-tooltip class="box-item" effect="dark" content="布局设置" placement="bottom">
                    <img width="22px" height= "22px" src="@/assets/icon/word.svg" alt="">
                </el-tooltip>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Default</el-dropdown-item>
                        <el-dropdown-item>Medium</el-dropdown-item>
                        <el-dropdown-item>Small</el-dropdown-item>
                        <el-dropdown-item>Mini</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            </div>
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img width="45px" height="45px" style="border-radius: 10px;" src="https://eladmin.vip/avatar/avatar.jpeg" alt=""><el-icon style="margin-left: 5px;"><CaretBottom /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>布局设置</el-dropdown-item>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue';
const store = useCounterStore()

import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()




import { onBeforeRouteUpdate, useRoute, type RouteLocationNormalized, type RouteRecordNormalized } from 'vue-router'
const route = useRoute()
console.log(route);

const BreadcrumbData = ref<RouteRecordNormalized[]>([]);
//监听路由变化
onBeforeRouteUpdate((to: RouteLocationNormalized) => {
    getBreadcrumb(to);
})
//获取面包屑
const getBreadcrumb = (to: RouteLocationNormalized) => {
    BreadcrumbData.value = to.matched.filter((item) => item.meta && item.meta.title);
}
getBreadcrumb(route);

//跳转到项目文档
const openDoc = () => {
    window.open('https://eladmin.vip/pages/010101/');
}


</script>
<style lang='scss' scoped>
.right {
    >div {
        margin: 0 10px;
        cursor: pointer;
        >img {
            width: 22px;
            height: 22px;
        }
    }
}

.top {
    box-sizing: border-box;
    padding:0 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    box-shadow: 0 0 10px 2px #ebeaea;
}

.left,
.right {
    display: flex;
    align-items: center;
}
</style>