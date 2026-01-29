<script setup lang="ts">
import type { Product } from '~/types/product'

const props = defineProps<{
  product: Product
}>()

const formatRevenue = (range: string) => {
  if (range === 'unknown') return 'Revenue Unknown'
  return `${range} ARR`
}

const getStatusColor = (status: Product['status']) => {
  switch (status) {
    case 'active': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    case 'stagnant': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
    case 'sold': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
    case 'shutdown': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
    default: return 'bg-gray-100 text-gray-700'
  }
}
</script>

<template>
  <Card class="group relative flex flex-col p-6 transition-all hover:shadow-md">
    <!-- Header: Logo & Name -->
    <div class="mb-4 flex items-start justify-between">
      <div class="flex items-center gap-4">
        <div class="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 p-1 dark:border-gray-800 dark:bg-gray-900">
          <img :src="product.logoUrl" :alt="product.name" class="h-full w-full object-contain" />
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
            <NuxtLink :to="`/products/${product.id}`" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true" />
              {{ product.name }}
            </NuxtLink>
          </h3>
          <div class="flex items-center gap-2 text-sm text-gray-500">
            <span :class="['inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium', getStatusColor(product.status)]">
              {{ product.status }}
            </span>
            <span class="text-xs">•</span>
            <span class="text-xs capitalize">{{ product.productType[0] }}</span>
          </div>
        </div>
      </div>
      <a :href="product.sourceUrl" target="_blank" class="text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300">
        <Icon name="lucide:external-link" class="h-5 w-5" />
      </a>
    </div>

    <!-- Description -->
    <p class="mb-4 text-sm text-gray-600 line-clamp-2 dark:text-gray-300">
      {{ product.descriptionZh || product.descriptionEn }}
    </p>

    <!-- Metrics -->
    <div class="mb-4 grid grid-cols-2 gap-4 border-y border-gray-100 py-4 text-sm dark:border-gray-800">
      <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <Icon name="lucide:dollar-sign" class="h-4 w-4 text-gray-400" />
        <span>{{ formatRevenue(product.revenueRange) }}</span>
      </div>
      <div class="flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <Icon name="lucide:trending-up" class="h-4 w-4 text-gray-400" />
        <span class="capitalize">{{ product.growthChannels[0] || 'Organic' }}</span>
      </div>
    </div>

    <!-- Tags -->
    <div class="mt-auto flex flex-wrap gap-2">
      <span v-for="tag in product.tags.slice(0, 3)" :key="tag" 
        class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-700">
        #{{ tag }}
      </span>
      <span v-if="product.tags.length > 3" class="text-xs text-gray-400">+{{ product.tags.length - 3 }}</span>
    </div>
  </Card>
</template>
