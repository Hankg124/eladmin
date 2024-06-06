<template>
    <el-aside width="200px" :style="{ 'background-color': '#304156', 'width': store.isCollapse ? '200px' : '64px' }">
        <el-scrollbar height="100vh">
        <Logo></Logo>
        <Menu></Menu>
        </el-scrollbar>
    </el-aside>

</template>
<script lang='ts' setup>
import { defineAsyncComponent } from 'vue';
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()

const Menu = defineAsyncComponent(() => import('./menu.vue'))
const Logo = defineAsyncComponent(() => import('./logo.vue'))

</script>
<style lang='scss' scoped>
.el-aside{
    z-index: 2;
}
</style>