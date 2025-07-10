import instance from '@/api';
import type { Message } from '../entry';

const messages = ref<Message[]>([]);

const refreshData = () => {
    instance.get('/api/messages').then((res) => {
        messages.value = res.data;
    })
};
export {messages,refreshData};