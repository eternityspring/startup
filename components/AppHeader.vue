<script setup lang="ts">
const isDark = ref(false)
const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
    <div class="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <a href="/" class="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-gray-100">
          <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
            <span class="text-sm font-bold">S</span>
          </div>
          <span>Startup</span>
        </a>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
        <a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400">首页</a>
        <a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400">线索</a>
        <a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400">价格</a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-4">

        <!-- Theme Toggle -->
        <button 
          @click="toggleTheme" 
          class="rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-800"
        >
          <Icon v-if="isDark" name="lucide:sun" class="h-5 w-5" />
          <Icon v-else name="lucide:moon" class="h-5 w-5" />
        </button>
        
        <!-- Mobile Menu Button -->
        <button class="md:hidden rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
          <Icon name="lucide:menu" class="h-5 w-5" />
        </button>
      </div>
    </div>
  </header>
</template>
