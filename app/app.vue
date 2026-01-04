<template>
  <div>
    <NuxtLayout class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <NuxtPage />
    </NuxtLayout>
    <div v-if="!isReady" class="fixed inset-0 bg-white z-50">
      <div id="loading-screen" class="loading-overlay">
        <div class="loader">正在加载中...</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()
const isReady = ref(false)

nuxtApp.hook('app:suspense:resolve', () => {
  isReady.value = true
})
</script>

<style>
.loading-overlay {
  position: fixed;
  inset: 0;
  background: white;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading-overlay.fade-out {
  opacity: 0;
  transition: opacity 0.5s ease;
}
</style>