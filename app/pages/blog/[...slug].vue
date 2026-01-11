<script setup lang="ts">
const route = useRoute()

const { data: blog } = await useAsyncData(() => queryCollection('blog').path(route.path).first())

useSeoMeta({
  title: blog.value?.title,
  description: blog.value?.description
})
</script>

<template>
  <div v-if="blog" class="page-container">
    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12">{{ blog.title }}</h1>
    <div class="blog-content">
      <ContentRenderer :value="blog" />
    </div>
  </div>
  <Empty v-else class="page-container">
    <EmptyHeader>
      <EmptyTitle>404 - Not Found</EmptyTitle>
      <EmptyDescription>
        Article no found.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <EmptyDescription>
        <NuxtLink to="/blog" class="text-primary-500 hover:underline">
          Return to blog
        </NuxtLink>
      </EmptyDescription>
    </EmptyContent>
  </Empty>
</template>