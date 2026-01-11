<script setup lang="ts">
const route = useRoute()

// 调试：查询所有内容
const { data: all } = await useAsyncData('all-content', () => queryCollection('blog').all())
console.log('All content:', all.value)
console.log('Current path:', route.path)

const { data: blog } = await useAsyncData(() => queryCollection('blog').path(route.path).first())
console.log('Query result:', blog.value)

useSeoMeta({
  title: blog.value?.title,
  description: blog.value?.description
})
</script>

<template>
  <div v-if="blog" class="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12">{{blog.title}}</h1>
    <div class="blog-content">
      <ContentRenderer :value="blog" />
    </div>
  </div>
  <Empty v-else class="min-h-[calc(100vh-381px)]">
    <EmptyHeader>
      <EmptyTitle>404 - Not Found</EmptyTitle>
      <EmptyDescription>
        The page you're looking for doesn't exist. Try searching for what you
        need below.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <EmptyDescription>
        <nuxt-link to="/">
          返回首页
        </nuxt-link>
      </EmptyDescription>
    </EmptyContent>
  </Empty>
</template>