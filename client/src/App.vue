<template>
  <div>
    <topBar/>
    <div class="box">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">
import topBar from '@/components/topBar.vue';
</script>

<style scoped>
.box {
  width: 100%;
  padding-top: 60px;
}
</style>