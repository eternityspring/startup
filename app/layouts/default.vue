<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:via-purple-950 dark:to-slate-900 transition-colors">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
