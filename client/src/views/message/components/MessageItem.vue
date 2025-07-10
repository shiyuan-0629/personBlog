<template>
    <div class="message-item">
        <div class="message-author">
            <img :src="message.avatar" alt="用户头像">
            {{ message.name }}
        </div>
        <div class="message-content">
            {{ message.content }}
        </div>
        <div class="message-time">{{ message.createdAt }}</div>
        <button class="reply-btn" @click="reply(message)">回复</button>
        <div class="reply-section" v-if="message.children && message.children.length">
            <MessageItem v-for="child in message.children" :key="child.mid" :message="child"/>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { reply } from "../Hooks/useDialogHooks";
import type { Message } from "../entry";
const {message} = defineProps({
  message: {
    type: Object as PropType<Message>,
    required: true,
  },
});
</script>

<style scoped>
.message-item {
    min-width: 300px;
    background: #f2f2f2;
    padding: 20px 0px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.message-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.message-time {
    font-size: 0.85rem;
    color: #888;
    margin-top: 5px;
    display: flex;
    align-items: center;
}

.message-time::before {
    content: '🕒';
    margin-right: 5px;
    font-size: 0.9em;
}

.reply-btn {
    background: #3498db;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.3s ease;
    display: flex;
    align-items: center;
}

.reply-btn::before {
    content: '💬';
    margin-right: 5px;
    font-size: 0.9em;
}

.reply-btn:hover {
    background: #2980b9;
}

.reply-section {
    margin-top: 10px;
    padding-left: 20px;
    border-left: 2px solid #eee;
}


.message-item:hover::before {
    width: 6px;
}

.message-author {
    font-weight: 600;
    margin-bottom: 8px;
    color: #3498db;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
}

.message-author img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
}


.message-content {
    white-space: pre-wrap;
    color: #555;
    line-height: 1.6;
    padding-left: 10px;
    border-left: 2px solid #eee;
    margin-left: 10px;
}
</style>