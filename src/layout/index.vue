<template>
    <el-container>
        <Aside></Aside>
        <el-container style="display: flex;flex-direction: column;">
            <Header></Header>
            <Main></Main>
        </el-container>
    </el-container>
</template>
<script lang='ts' setup>
import { getUserInfoApi } from '@/api/auth';
import { defineAsyncComponent } from 'vue';

const Aside = defineAsyncComponent(()=>import('./aside/index.vue'))
const Header = defineAsyncComponent(()=>import('./header/index.vue'))
const Main = defineAsyncComponent(()=>import('./main/index.vue'))

const getInfo=async()=>{
    await getUserInfoApi();
}
getInfo();

</script>
<style lang='scss' scoped></style>