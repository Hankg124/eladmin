<template>
    <el-menu router active-text-color="#3066e4" background-color="#304156" class="el-menu-vertical-demo"
        default-active="/dashboard" text-color="#fff">
        <el-menu-item index="/dashboard">
            <el-icon>
                <HomeFilled />
            </el-icon>
            <span>首页</span>
        </el-menu-item>
        <!-- 第一层 -->
        <el-sub-menu :index="item.path" v-for="(item, index) in menu" :key="index">
            <template #title>
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{ item.name }}</span>
            </template>
            <!-- 第二层 -->
            <el-sub-menu v-show="ele.children" v-for="(ele, i) in item.children" :key="i" :index="ele.path">
                <template #title>{{ ele.meta.title }}</template>
                <!-- 第三层 -->
                <el-menu-item v-for="(e, j) in ele.children" :key="j" :index="e.path">{{ e.meta.title }}</el-menu-item>
            </el-sub-menu>
            <!-- 第二层 -->
            <el-menu-item v-show="!ele.children" v-for="(ele, i) in item.children" :key="i" :index="ele.path">{{
                ele.meta.title}}</el-menu-item>
        </el-sub-menu>
    </el-menu>

</template>
<script lang='ts' setup>
import { getUserMenuApi } from '@/api/auth';
import type { MenuType } from '@/api/authType';
import { ref } from 'vue';

const menu = ref<any>();

const getMenu = async () => {
    const res = await getUserMenuApi();
    console.log(res);
    menu.value = res;
}
getMenu();
</script>
<style lang='scss' scoped></style>