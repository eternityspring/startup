<script setup lang="ts">
const { data: blogs } = await useAsyncData('list', () =>
  queryCollection('blog').all()
)

useSeoMeta({
  title: '博客',
  description: '博客文章列表'
})
</script>

<template>
  <div class="page-container">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12">博客</h1>

    <div v-if="blogs?.length" class="grid gap-6">
      <NuxtLink
        v-for="blog in blogs"
        :key="blog.path"
        :to="blog.path"
        class="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
      >
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {{ blog.title }}
        </h2>
        <p v-if="blog.description" class="text-gray-600 dark:text-gray-400">
          {{ blog.description }}
        </p>
      </NuxtLink>
    </div>

    <div v-else class="text-center text-gray-500 dark:text-gray-400 py-12">
      暂无博客文章
    </div>
  </div>
</template>