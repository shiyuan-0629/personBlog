<template>
    <div class="menu">
        <ul>
            <li v-for="(item, index) in items" :key="index" :class="{ active: category === index }"
                @click="selectHandle(index)">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup lang='ts'>
const category = defineModel({ required: true })
const items = ref<Array<string>>([
    '网络安全篇',
    '前端小技巧',
    '后端疑难点',
    '数据可视化',
    '大数据设计'
]);
const selectHandle = (index:number) => {
    category.value = index;
};
</script>

<style scoped>
.menu {
    width: 350px;
    height: calc(100vh - 120px);
    position: fixed;
    padding-top: 150px;
    border-right: 5px solid #ccc;
}

ul {
    width: 300px;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
}

li {
    text-align: center;
    width: 100px;
    padding: 12px 20px;
    background-color: #f0f0f0;
    border-radius: 30px;
    color: #333;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

li:hover {
    background-color: #e0e0e0;
    transform: translateX(5px);
}

.active {
    background-color: #00e504;
    color: #fff;
    transform: scale(0.95);
}
</style>