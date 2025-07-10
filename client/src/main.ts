import { createApp } from 'vue';
import App from './App.vue';
import './assets/style.css';
import 'element-plus/dist/index.css';
import router from '@/router/index.ts';
const app = createApp(App);
app.directive('fontlazy', {
    mounted(el, binding) {
        const target: number = +binding.value;
        const duration: number = +binding.arg! || 3000;
        let startTime: number | undefined = undefined;
        const easeOutQuad = (t: number): number => t * (2 - t);
        function animate(timestamp: number) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;            
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuad(progress);
            const currentValue = Math.floor(easedProgress * target);
            el.textContent = currentValue+"+";
            if (easedProgress < 1) {
                requestAnimationFrame(animate);
            }
        }
        requestAnimationFrame(animate);
    }
});
app.use(router);
app.mount('#app');

