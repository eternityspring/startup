<script setup lang="ts">
import { useRoute } from 'vue-router'
import { mockProducts } from '~/data/mockProducts'
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

const route = useRoute()
const productId = route.params.id as string

const product = mockProducts.find(p => p.id === productId)

const formatRevenue = (range: string) => {
  if (range === 'unknown') return '未知'
  return `${range} ARR`
}

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long' })
}

const getStatusColor = (status: string) => {
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
  <div class="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors">
    <AppHeader />

    <main v-if="product" class="container mx-auto px-4 py-8 lg:px-8 lg:py-12">
      <!-- Breadcrumb -->
      <nav class="flex mb-8 text-sm text-gray-500 dark:text-gray-400">
        <a href="/" class="hover:text-indigo-600 dark:hover:text-indigo-400">首页</a>
        <span class="mx-2">/</span>
        <span class="text-gray-900 dark:text-gray-200">线索详情</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
            <!-- Header Card -->
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                <div class="flex items-start gap-6">
                    <img :src="product.logo_url" :alt="product.name" class="w-20 h-20 rounded-xl bg-gray-50 dark:bg-gray-800 object-contain p-2 border border-gray-100 dark:border-gray-700" />
                    <div class="flex-1">
                        <div class="flex items-center justify-between mb-2">
                             <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{{ product.name }}</h1>
                             <a :href="product.source_url" target="_blank" class="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors">
                                访问网站
                                <Icon name="lucide:external-link" class="w-4 h-4" />
                             </a>
                        </div>
                        <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">{{ product.description_zh }}</p>
                        <div class="flex flex-wrap gap-3">
                             <span :class="['px-3 py-1 rounded-full text-sm font-medium', getStatusColor(product.status)]">
                                {{ product.status }}
                             </span>
                             <span v-for="type in product.product_type" :key="type" class="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm">
                                {{ type.replace('_', ' ') }}
                             </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Story Section -->
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <Icon name="lucide:book-open" class="w-5 h-5 text-indigo-500" />
                    产品故事
                </h2>
                <div class="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p class="text-lg leading-relaxed mb-6">{{ product.story_zh }}</p>
                    <div class="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                        <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">目标用户</h3>
                        <p>{{ product.target_user_zh }}</p>
                    </div>
                </div>
            </div>

            <!-- Analysis Notes -->
             <div v-if="product.notes_zh" class="bg-indigo-50 dark:bg-indigo-950/20 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900/50">
                <h2 class="text-xl font-bold text-indigo-900 dark:text-indigo-300 mb-4 flex items-center gap-2">
                    <Icon name="lucide:lightbulb" class="w-5 h-5" />
                    分析笔记
                </h2>
                <p class="text-indigo-800 dark:text-indigo-200">{{ product.notes_zh }}</p>
            </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
            <!-- Key Metrics -->
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">关键指标</h3>
                
                <div class="space-y-6">
                    <div>
                        <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">年度经常性收入 (ARR)</div>
                        <div class="flex items-center gap-2">
                            <span class="text-2xl font-bold text-gray-900 dark:text-white">{{ formatRevenue(product.revenue_range) }}</span>
                            <div class="flex gap-0.5">
                                <Icon v-for="i in 5" :key="i" name="lucide:dollar-sign" 
                                    :class="['w-4 h-4', i <= product.revenue_confidence ? 'text-emerald-500' : 'text-gray-200 dark:text-gray-700']" 
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">上线时间</div>
                        <div class="text-lg font-medium text-gray-900 dark:text-white">{{ product.launched_at || '未知' }}</div>
                    </div>

                    <div>
                         <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">收录时间</div>
                         <div class="text-lg font-medium text-gray-900 dark:text-white">{{ formatDate(product.created_at) }}</div>
                    </div>
                </div>
            </div>

            <!-- Growth Channels -->
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">增长渠道</h3>
                <div class="flex flex-wrap gap-2">
                    <span v-for="channel in product.growth_channels" :key="channel" 
                        class="px-3 py-1.5 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 text-sm font-medium border border-orange-100 dark:border-orange-800">
                        {{ channel }}
                    </span>
                </div>
            </div>

            <!-- Tech Stack -->
            <div v-if="product.tech_stack" class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">技术栈</h3>
                <div class="flex flex-wrap gap-2">
                    <span v-for="tech in product.tech_stack" :key="tech" 
                        class="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-100 dark:border-slate-700">
                        {{ tech }}
                    </span>
                </div>
            </div>
            
            <!-- Tags -->
            <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">标签</h3>
                <div class="flex flex-wrap gap-2">
                    <span v-for="tag in product.tags" :key="tag" 
                        class="px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs">
                        #{{ tag }}
                    </span>
                </div>
            </div>
        </div>
      </div>
    </main>
    
    <div v-else class="container mx-auto px-4 py-20 text-center">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">未找到线索</h2>
        <a href="/" class="text-indigo-600 hover:text-indigo-500 mt-4 inline-block">返回首页</a>
    </div>

    <AppFooter />
  </div>
</template>
