<script setup lang="ts">
</script>

<template>
  <footer class="border-t border-gray-200 bg-white py-12 dark:border-gray-800 dark:bg-gray-950">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
        <!-- Brand -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2">
            <NuxtLink to="/" class="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-gray-100">
              <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black">
                <span class="text-sm font-bold">S</span>
              </div>
              <span>Startup</span>
            </NuxtLink>
          </div>
          <p class="mt-4 max-w-sm text-sm text-gray-600 dark:text-gray-400">
            通过数据驱动的洞察，帮助独立开发者构建更好的产品。
          </p>
          <div class="mt-6 flex gap-4">
            <a href="#" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <Icon name="lucide:twitter" class="h-5 w-5" />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <Icon name="lucide:github" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-semibold text-gray-900 dark:text-gray-100">产品</h4>
          <ul class="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400">功能</a></li>
            <li><a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400">定价</a></li>
            <li><a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400">API</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-gray-900 dark:text-gray-100">公司</h4>
          <ul class="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400">关于</a></li>
            <li><a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400">博客</a></li>
            <li><a href="#" class="hover:text-indigo-600 dark:hover:text-indigo-400">招聘</a></li>
          </ul>
        </div>
      </div>
      
      <div class="mt-12 border-t border-gray-100 pt-8 text-center text-sm text-gray-500 dark:border-gray-800">
        &copy; {{ new Date().getFullYear() }} Startup. 保留所有权利。
      </div>
    </div>
  </footer>
</template>
