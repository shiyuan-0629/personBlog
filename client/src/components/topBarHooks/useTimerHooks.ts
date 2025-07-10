import { getCurrentTime } from '@/utils/time';
const currentTime = ref('');

const timer = setInterval(() => {
    currentTime.value = getCurrentTime();
}, 1000);

export { currentTime, getCurrentTime, timer };