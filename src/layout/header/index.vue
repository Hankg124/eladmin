<template>
<el-header style="background-color: aqua;">
<Top></Top>
<Router></Router>
</el-header>
</template>
<script lang='ts' setup>
import { defineAsyncComponent } from 'vue';

const Top=defineAsyncComponent(()=>import('./headerTop.vue'))
const Router=defineAsyncComponent(()=>import('./headerRouter.vue'))

</script>
<style lang='scss' scoped>
.el-header{
    height: 84px;
}
</style>