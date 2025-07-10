<template>
    <div class="main">
        <div id="messages" class="message-list">
            <MessageItem v-for="message in messages" :key="message.mid" :message="message"/>
        </div>
        <el-dialog :append-to-body="true" v-model="dialog.visible" :title="dialog.who" width="30%">
            <el-input placeholder="Please input" v-model="data.input"></el-input>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="sumbit">
                        发布
                    </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang='ts'>
import { messages, refreshData } from './Hooks/initHooks';
import MessageItem from './components/MessageItem.vue';
import {dialog,data,sumbit} from './Hooks/useDialogHooks';
refreshData();
</script>

<style scoped>
.message-list {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    max-height: 800px;
    overflow-y: auto;
    border: 1px solid rgba(0, 0, 0, 0.05);
}

.message-item {
    padding: 20px;
    position: relative;
    margin-bottom: 15px;
}

.message-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.message-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #3498db;
    transition: width 0.3s ease;
}
</style>