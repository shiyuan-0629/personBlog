<template>
    <div class="topBar">
        <div class="left">
            <img src="../assets/favicon.png" class="logo">
            <div class="time">{{ currentTime }}</div>
        </div>
        <el-menu class="el-menu-demo" :default-active="index" mode="horizontal" active-text-color="#00ff00eb"
            :ellipsis="false">
            <el-menu-item index="1" @click="handleClick('Home','1')">首页</el-menu-item>
            <el-menu-item index="2" @click="handleClick('Article','2')">帖子</el-menu-item>
            <el-menu-item index="3" @click="handleClick('Message','3')">留言</el-menu-item>
            <el-menu-item index="4" @click="handleClick('Notice','4')">随笔</el-menu-item>
            <el-menu-item index="5" @click="handleClick('Test','5')">测试</el-menu-item>
        </el-menu>
        <div>
            <el-input v-model="input" auto-complete="off" placeholder="按下回车即可发布" @keyup.enter="sumbit">
                <template #prepend>发布留言</template>
            </el-input>
        </div>
        <el-avatar @click="open" :size="40" :src="personInfo.circleUrl" style="margin-right: 20px;" />
        <el-drawer v-model="isShowDrawer" title="注意:邮箱地址不会进行校验" direction="rtl" class="demo-drawer">
            <div class="demo-drawer__content">
                <el-input aria-autocomplete="none" v-model="personInfo.email" style="max-width: 400px"
                    placeholder="Email">
                    <template #append>
                        <el-select v-model="personInfo.suffix" placeholder="后缀" size="large" style="width: 150px">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </template>
                </el-input>
                <br>
                <br>
                <el-input v-model="personInfo.nickname" style="max-width: 400px" placeholder="请给我一个你想要的昵称" />
            </div>
            <template #footer>
                <el-button @click="isShowDrawer = false">Cancel</el-button>
                <el-button type="primary" @click="submitEmail">
                    Submit
                </el-button>
            </template>
        </el-drawer>
    </div>
</template>

<script setup lang='ts'>
import { isShowDrawer, options, personInfo, open, submitEmail } from '@/components/topBarHooks/useDrawerHooks';
import { currentTime, getCurrentTime, timer } from '@/components/topBarHooks/useTimerHooks';
import { input,indexName,index, getRouter, sumbit } from './topBarHooks/useDailogHools';
import { useRouter } from 'vue-router';
getRouter(useRouter());
const router = useRouter();
function handleClick(name: string,id: string) {
    indexName.value = name;
    index.value = id;
    router.push({ name });
}
onMounted(() => {
    currentTime.value = getCurrentTime();
    const item = localStorage.getItem("email");
    if (item) {
        personInfo.value.suffix = '@' + item.split("@")[1];
        personInfo.value.email = item.split("@")[0];
    }
    personInfo.value.nickname = localStorage.getItem("nickname") || "";
    personInfo.value.circleUrl = localStorage.getItem("circle") || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
})

onBeforeUnmount(() => {
    clearInterval(timer);
})
</script>

<style scoped>
.topBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 1;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)
}

.left {
    height: 60px;
    margin-left: 20px;
    display: flex;
    align-items: center;
}

.logo {
    width: 40px;
    height: 40px;
    border-radius: 10px;
}

.time {
    margin-left: 10px;
    color: #0e1054;
    font-size: 16px;
}

.postList {
    width: 100%;
    height: 400px;
    padding: 20px;
}
</style>