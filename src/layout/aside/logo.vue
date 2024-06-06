<template>
<div>
    <img width="32px" height="32px" src="https://eladmin.vip/demo/static/img/logo.381d6a3e.png" alt="">
    <p v-show="store.isCollapse">ELADMIN-后台管理</p>
</div>
</template>
<script lang='ts' setup>
import {useCounterStore} from '@/stores/counter'
const store=useCounterStore()
</script>
<style lang='scss' scoped>
div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    p{
        color: #fff;
        font-weight: bold;
    }
}
</style>