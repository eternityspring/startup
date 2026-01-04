<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <div class="container mx-auto px-6 py-12">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          线索列表
        </h1>
        <p class="text-gray-500 dark:text-slate-400 text-lg">
          管理 {{ filteredProducts.length }} 个潜在客户和产品线索
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Filters Sidebar -->
        <aside class="lg:w-80 flex-shrink-0">
          <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sticky top-20 transition-all">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">筛选</h2>
              <button
                  v-if="hasActiveFilters"
                  @click="clearFilters"
                  class="text-sm text-indigo-600 hover:text-indigo-500 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
              >
                清除
              </button>
            </div>

            <!-- Product Type -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-3">产品类型</label>
              <div class="space-y-2">
                <label
                    v-for="type in productTypes"
                    :key="type.value"
                    class="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                      type="checkbox"
                      :value="type.value"
                      v-model="selectedProductTypes"
                      class="w-4 h-4 rounded border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-indigo-600 dark:text-purple-600 focus:ring-indigo-500 dark:focus:ring-purple-500 focus:ring-offset-0 cursor-pointer"
                  />
                  <span class="text-gray-600 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-slate-300 transition-colors">
                    {{ type.label }}
                  </span>
                </label>
              </div>
            </div>

            <!-- Revenue Range -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-3">收入范围</label>
              <div class="space-y-2">
                <label
                    v-for="range in revenueRanges"
                    :key="range.value"
                    class="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                      type="checkbox"
                      :value="range.value"
                      v-model="selectedRevenueRanges"
                      class="w-4 h-4 rounded border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-indigo-600 dark:text-purple-600 focus:ring-indigo-500 dark:focus:ring-purple-500 focus:ring-offset-0 cursor-pointer"
                  />
                  <span class="text-gray-600 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-slate-300 transition-colors">
                    {{ range.label }}
                  </span>
                </label>
              </div>
            </div>

            <!-- Growth Channels -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-3">增长渠道</label>
              <div class="space-y-2">
                <label
                    v-for="channel in growthChannels"
                    :key="channel.value"
                    class="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                      type="checkbox"
                      :value="channel.value"
                      v-model="selectedGrowthChannels"
                      class="w-4 h-4 rounded border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-indigo-600 dark:text-purple-600 focus:ring-indigo-500 dark:focus:ring-purple-500 focus:ring-offset-0 cursor-pointer"
                  />
                  <span class="text-gray-600 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-slate-300 transition-colors">
                    {{ channel.label }}
                  </span>
                </label>
              </div>
            </div>

            <!-- Status -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-3">状态</label>
              <div class="space-y-2">
                <label
                    v-for="status in statuses"
                    :key="status.value"
                    class="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                      type="checkbox"
                      :value="status.value"
                      v-model="selectedStatuses"
                      class="w-4 h-4 rounded border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 text-indigo-600 dark:text-purple-600 focus:ring-indigo-500 dark:focus:ring-purple-500 focus:ring-offset-0 cursor-pointer"
                  />
                  <span class="text-gray-600 dark:text-slate-400 group-hover:text-gray-900 dark:group-hover:text-slate-300 transition-colors">
                    {{ status.label }}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        <!-- Products Grid -->
        <main class="flex-1">
          <!-- Sort & View Options -->
          <div class="flex items-center justify-between mb-6">
            <div class="text-gray-500 dark:text-slate-400">
              显示 <span class="text-gray-900 dark:text-white font-semibold">{{ filteredProducts.length }}</span> 个产品
            </div>

            <select
                v-model="sortBy"
                class="px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 cursor-pointer shadow-sm transition-all"
            >
              <option value="newest">最新收录</option>
              <option value="revenue">收入最高</option>
              <option value="name">名称 A-Z</option>
            </select>
          </div>

          <!-- Products Grid -->
          <div v-if="filteredProducts.length > 0" class="grid md:grid-cols-2 gap-6">
            <ProductCard
                v-for="product in sortedProducts"
                :key="product.id"
                :product="product"
            />
          </div>

          <!-- Empty State -->
          <div v-else class="rounded-xl border border-gray-200 bg-white p-12 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div class="w-16 h-16 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-gray-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">未找到产品</h3>
            <p class="text-gray-500 dark:text-slate-400 mb-4">尝试调整筛选条件</p>
            <button
                @click="clearFilters"
                class="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-purple-600 dark:hover:bg-purple-700 rounded-lg text-white transition-colors shadow-sm"
            >
              清除筛选
            </button>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { mockProducts } from '~/data/mockProducts';
import type { ProductType, RevenueRange, GrowthChannel, ProductStatus } from '~/types/product';

// Filter state
const searchQuery = ref('');
const selectedProductTypes = ref<ProductType[]>([]);
const selectedRevenueRanges = ref<RevenueRange[]>([]);
const selectedGrowthChannels = ref<GrowthChannel[]>([]);
const selectedStatuses = ref<ProductStatus[]>([]);
const sortBy = ref('newest');

// Filter options
const productTypes = [
  { value: 'saas' as ProductType, label: 'SaaS' },
  { value: 'chrome_extension' as ProductType, label: 'Chrome 扩展' },
  { value: 'mobile_app' as ProductType, label: '移动应用' },
  { value: 'web_app' as ProductType, label: 'Web 应用' },
  { value: 'api' as ProductType, label: 'API' },
  { value: 'content_site' as ProductType, label: '内容网站' },
  { value: 'template' as ProductType, label: '模板' },
  { value: 'other' as ProductType, label: '其他' },
];

const revenueRanges = [
  { value: 'unknown' as RevenueRange, label: '未知' },
  { value: '<$1k' as RevenueRange, label: '<$1k/月' },
  { value: '$1k-$5k' as RevenueRange, label: '$1k-$5k/月' },
  { value: '$5k-$10k' as RevenueRange, label: '$5k-$10k/月' },
  { value: '$10k-$50k' as RevenueRange, label: '$10k-$50k/月' },
  { value: '$50k+' as RevenueRange, label: '$50k+/月' },
];

const growthChannels = [
  { value: 'seo' as GrowthChannel, label: 'SEO' },
  { value: 'social' as GrowthChannel, label: '社交媒体' },
  { value: 'community' as GrowthChannel, label: '社区' },
  { value: 'ads' as GrowthChannel, label: '广告' },
  { value: 'producthunt' as GrowthChannel, label: 'Product Hunt' },
  { value: 'marketplace' as GrowthChannel, label: '应用市场' },
  { value: 'cold_email' as GrowthChannel, label: '冷邮件' },
];

const statuses = [
  { value: 'active' as ProductStatus, label: '活跃' },
  { value: 'stagnant' as ProductStatus, label: '停滞' },
  { value: 'sold' as ProductStatus, label: '已出售' },
  { value: 'shutdown' as ProductStatus, label: '已关闭' },
];

// Computed
const hasActiveFilters = computed(() => {
  return searchQuery.value !== '' ||
      selectedProductTypes.value.length > 0 ||
      selectedRevenueRanges.value.length > 0 ||
      selectedGrowthChannels.value.length > 0 ||
      selectedStatuses.value.length > 0;
});

const filteredProducts = computed(() => {
  return mockProducts.filter(product => {
    // Search filter
    if (searchQuery.value && !product.name.toLowerCase().includes(searchQuery.value.toLowerCase())) {
      return false;
    }

    // Product type filter
    if (selectedProductTypes.value.length > 0) {
      const hasMatchingType = product.product_type.some(type =>
          selectedProductTypes.value.includes(type)
      );
      if (!hasMatchingType) return false;
    }

    // Revenue range filter
    if (selectedRevenueRanges.value.length > 0 &&
        !selectedRevenueRanges.value.includes(product.revenue_range)) {
      return false;
    }

    // Growth channel filter
    if (selectedGrowthChannels.value.length > 0) {
      const hasMatchingChannel = product.growth_channels.some(channel =>
          selectedGrowthChannels.value.includes(channel)
      );
      if (!hasMatchingChannel) return false;
    }

    // Status filter
    if (selectedStatuses.value.length > 0 &&
        !selectedStatuses.value.includes(product.status)) {
      return false;
    }

    return true;
  });
});

const sortedProducts = computed(() => {
  const products = [...filteredProducts.value];

  switch (sortBy.value) {
    case 'newest':
      return products.sort((a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    case 'revenue':
      const revenueOrder: Record<RevenueRange, number> = {
        '$50k+': 5,
        '$10k-$50k': 4,
        '$5k-$10k': 3,
        '$1k-$5k': 2,
        '<$1k': 1,
        'unknown': 0,
      };
      return products.sort((a, b) =>
          revenueOrder[b.revenue_range] - revenueOrder[a.revenue_range]
      );
    case 'name':
      return products.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return products;
  }
});

// Methods
const clearFilters = () => {
  searchQuery.value = '';
  selectedProductTypes.value = [];
  selectedRevenueRanges.value = [];
  selectedGrowthChannels.value = [];
  selectedStatuses.value = [];
};

useHead({
  title: '产品目录 - 独立开发情报',
  meta: [
    { name: 'description', content: '浏览所有独立开发者产品，使用高级筛选找到您感兴趣的项目' }
  ]
});
</script>
