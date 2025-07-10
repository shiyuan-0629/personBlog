<template>
    <div class="main">
        <div class="timer">
            <el-timeline>
                <el-timeline-item v-for="item in notices" :key="item.id" :timestamp="item.created_at" placement="top">
                    <el-card>
                        <h4>{{ item.content }}</h4>
                        <p>{{ item.location }} {{ item.created_at }}</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>

</template>

<script lang="ts" setup>
import instance from '@/api';
interface notice{
    id:number,
    content:string,
    location:string,
    created_at:string
};
const notices = ref<notice[]>([]);
instance.get("/api/notice").then((res) => {
    notices.value = res.data;
});
</script>
<style scoped>
.timer {
    max-height: 800px;
    overflow: auto;
}
</style>