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
    <div class="prose lg:prose-xl max-w-[70%] mx-auto">
      <h1>{{ blog.title }}</h1>
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