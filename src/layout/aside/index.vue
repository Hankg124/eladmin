<template>
    <el-aside width="200px" style="background-color: #304156;">
        <Menu></Menu>
    </el-aside>
</template>
<script lang='ts' setup>
import { defineAsyncComponent } from 'vue';

const Menu =defineAsyncComponent(()=>import('./menu.vue'))

</script>
<style lang='scss' scoped></style>