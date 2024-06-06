<template>
<el-header>
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
    padding: 0;
    height: 90px;
    box-shadow: 0 0 10px 2px #ebeaea;
}
</style>