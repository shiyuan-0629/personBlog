<template>
    <div class="main">
        <CpMenu v-model="category" />
        <div class="content" v-infinite-scroll="load" :infinite-scroll-disabled="disabled"
            :infinite-scroll-distance="200">
            <div class="article-item" v-for="i in items" :key="i.bid">
                <div class="article-title">{{ i.title }}</div>
                <div class="article-meta">{{ i.createdAt }}</div>
                <div class="article-summary">{{ i.subtitle }}</div>
                <RouterLink :to="`/detail/${i.bid}`" class="read-more">阅读更多</RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import CpMenu from './components/CpMenu.vue';
import { category, items, load, disabled } from './Hooks/useInitHooks';
</script>

<style scoped>
.content {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow: auto;
    height: 800px;
}

.article-item {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 25px;
    margin-bottom: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #e0e0e0;
}

.article-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.article-title {
    font-size: 22px;
    font-weight: bold;
    color: #4a90e2;
    margin-bottom: 10px;
    transition: color 0.3s ease;
}

.article-item:hover .article-title {
    color: #357abd;
}

.article-meta {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
}

.article-summary {
    font-size: 16px;
    color: #444;
    line-height: 1.6;
}

.read-more {
    display: inline-block;
    margin-top: 15px;
    color: #4a90e2;
    text-decoration: none;
    font-weight: bold;
    padding: 8px 16px;
    border: 2px solid #4a90e2;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.read-more:hover {
    color: #ffffff;
    background-color: #4a90e2;
    text-decoration: none;
}
</style>