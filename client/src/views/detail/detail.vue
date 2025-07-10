<template>
    <div class="main">
        <div class="article-container">
            <div class="article-header">
                <h1 class="article-title">{{ article.title }}</h1>
                <div class="article-meta">
                    <span>{{ article.createdAt }}</span>
                    <span>{{ article.subtitle }}</span>
                </div>
            </div>
            <div class="article-content" v-html="result">
            </div>
        </div>
    </div>
</template>

<script setup lang='js'>
import markdownit from 'markdown-it';
import prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-bash';
import instance from '@/api';
const result = ref("");
const {id} = defineProps(['id']);
const article = ref({
    title: '',
    createdAt: '',
    subtitle: '',
    content: ''
});
const md = markdownit({
  highlight: (code, language) => {
    if (prism.languages[language]) {
      return `<pre class="language-${language}"><code>${
        prism.highlight(code, prism.languages[language], language)
      }</code></pre>`;
    }
    return `<pre><code>${md.utils.escapeHtml(code)}</code></pre>`;
  }
});
onMounted(async () => {
    const res = await instance.get('/api/articles/'+id);
    article.value = res.data;
    result.value = md.render(article.value.content);
})


</script>

<style scoped>
.article-container {
    max-height: 800px;
    overflow: auto;
}

.article-header {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.article-title {
    font-size: 2.2rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 10px;
}

.article-meta {
    color: #666;
    font-size: 0.9rem;
}

.article-meta span {
    margin-right: 15px;
}

.article-content {
    font-size: 1.1rem;
    color: #444;
}









</style>