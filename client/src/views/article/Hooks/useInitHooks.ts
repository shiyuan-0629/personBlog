import instance from '@/api/index';
import type { Article } from '@/views/article/entry';

const category = ref(0);
const index = ref(0);
const items = ref<Array<Article>>(new Array());
const disabled = ref(false);

async function load() {
    if (disabled.value) return;
    disabled.value = true;
    const res: { code: number, data: { data: Array<Article>, disable: boolean } } =
        await instance.get("/api/articles", { params: { category: category.value, index: index.value } });
    if (res.code === 200) {
        index.value = index.value + 4;
        items.value.push(...res.data.data)
        disabled.value = res.data.disable;
        console.log('disabled:', disabled.value);
    }
}

watch(category, async (newValue, oldValue) => {
    if (newValue !== oldValue) {
        index.value = 0;
        disabled.value = false;
        items.value = [];
        await load();
    }
});

export { category, items, load, disabled };