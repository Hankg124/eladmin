<template>
    <div class="routerBox">
        <div @click="router.push(item.path)" v-for="(item, index) in routerData" :key="item.path"
            :class="route.path == item.path ? 'green' : ''">
            <div class="round" v-show="route.path == item.path ? true : false"></div>
            <div class="title">{{ item.title }}</div>
            <div class="cha" v-if="index != 0" @click="handelDelete(index)">
                <div style="margin-bottom: 3px;">×</div>
                <!-- <el-icon v-if="index != 0" :size="10" style="margin-left: 10px;" @click="handelDelete(index)">
                    <CloseBold />
                </el-icon> -->
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { onBeforeRouteUpdate, type RouteLocationNormalized, type RouteLocationNormalizedLoaded } from 'vue-router';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();
const router = useRouter();

const routerData = ref<{ title: string, path: string }[]>([
    {
        title: '首页',
        path: '/dashboard'
    }
]);

const selectIndex = ref<number>(0)

//监听路由变化  当前路由
onBeforeRouteUpdate((to) => {
    addRouter(to);

});

const addRouter = (to: RouteLocationNormalizedLoaded) => {
    if (to.meta.title) {
        // 判断是否已经存在
        let flog = routerData.value.some(item => item.title == to.meta.title)
        if (!flog) {
            routerData.value.push({
                title: to.meta.title as string,
                path: to.path
            })
        }

    }
}
//进入的路由
addRouter(route);

//删除
const handelDelete = (index: number) => {

}

</script>
<style lang='scss' scoped>
.cha{
    border-radius: 100%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cha:hover{
    background-color: #ccc;
}
.green {
    background-color: #42b983;
    color: #fff;
}

.round {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #fff;
    margin-right: 8px;
}

.title {
    margin-bottom: 2px;
    font-size: 14px;
}

.routerBox {
    display: flex;
    align-items: center;
    height: 30px;
    margin-top: 5px;
    margin-left: 20px;

    >div {
        margin-right: 5px;
        height: 30px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 10px;
        cursor: pointer;
    }
}
</style>