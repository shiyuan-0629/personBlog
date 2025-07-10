<template>
    <div class="card">
        <span class="value" v-fontlazy:[duration]="value"></span>
        <span class="title">{{title}}</span>
    </div>
</template>

<script setup lang='ts'>
defineProps(["title","value","duration"]);
</script>

<style scoped>
.card{
    width: 200px;
    height: 100px;
    background-color: rgba(239, 239, 239,0.5);
    position: relative;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
}
.card:hover{
    transform: scale(1.1);
}
.value{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 34px;
    font-weight: bolder;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
}
.title{
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    color: rgb(100, 100, 100);
}
</style>