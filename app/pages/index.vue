<script setup lang="ts">
import { mockProducts } from '~/data/mockProducts'
import ProductCard from '~/components/ProductCard.vue'
import { ref, computed } from 'vue'

const selectedType = ref('all')

const filteredProducts = computed(() => {
  return mockProducts.filter(product => {
    const matchesType = selectedType.value === 'all' || product.product_type.includes(selectedType.value as any)
    return matchesType
  })
})

const productTypes = ['all', 'saas', 'chrome_extension', 'mobile_app', 'web_app', 'template']
</script>

<template>
  <div>
    
    <main>
      <div class="relative overflow-hidden">
        <!-- Animated background -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div class="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div class="relative container mx-auto px-6 py-24">
          <div class="text-center max-w-4xl mx-auto">
             <div class="inline-block mb-6">
                <span class="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-sm font-medium backdrop-blur-sm">
                  🚀 独立开发者线索平台
                </span>
             </div>

             <h1 class="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-700 to-cyan-700 dark:from-white dark:via-purple-200 dark:to-cyan-200 bg-clip-text text-transparent leading-tight">
               发现成功的<br />独立产品线索
             </h1>

             <p class="text-xl text-gray-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
               探索真实的独立开发者产品数据，包括收入、增长渠道、技术栈等深度线索
             </p>
             
             <!-- Filter Tags -->
             <div class="flex flex-wrap justify-center gap-2 mb-16">
                <button 
                  v-for="type in productTypes" 
                  :key="type"
                  @click="selectedType = type"
                  :class="[
                    'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
                    selectedType === type 
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30' 
                      : 'bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-slate-300 hover:bg-white/80 dark:hover:bg-white/10'
                  ]"
                >
                  {{ type === 'all' ? '全部' : type.replace('_', ' ') }}
                </button>
             </div>

             <!-- Stats -->
               <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div class="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <div class="text-gray-500 dark:text-slate-400 text-sm">产品收录</div>
                </div>

                <div class="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div class="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 dark:from-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent mb-2">
                    $2M+
                  </div>
                  <div class="text-gray-500 dark:text-slate-400 text-sm">月收入总和</div>
                </div>

                <div class="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div class="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 dark:from-emerald-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div class="text-gray-500 dark:text-slate-400 text-sm">技术栈</div>
                </div>

                <div class="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                   <div class="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div class="text-gray-500 dark:text-slate-400 text-sm">真实数据</div>
                </div>
              </div>
          </div>
        </div>
      </div>

      <!-- Product Grid -->
      <section class="py-12 bg-gray-50/50 dark:bg-black/20">
        <div class="container mx-auto px-6">
           <div class="mb-12 flex items-center justify-between">
              <div>
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">热门线索</h2>
                <p class="text-gray-500 dark:text-slate-400">探索最成功的独立开发者产品</p>
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-white/5 px-4 py-2 rounded-lg border border-gray-200 dark:border-white/10">
                显示 {{ filteredProducts.length }} 条线索
              </div>
           </div>
           
           <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ProductCard 
                v-for="product in filteredProducts" 
                :key="product.id" 
                :product="product" 
              />
           </div>
           
           <div v-if="filteredProducts.length === 0" class="py-20 text-center">
              <p class="text-gray-500 text-lg">没有找到匹配的线索。</p>
           </div>
        </div>
      </section>
      
      <!-- Why Choose Us -->
      <section class="py-24 relative">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">为什么选择我们</h2>
            <p class="text-gray-500 dark:text-slate-400 text-lg">深度线索，助力您的独立开发之路</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="glass-card p-8 group hover:scale-105 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Icon name="lucide:dollar-sign" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">线索产品数据</h3>
              <p class="text-gray-600 dark:text-slate-400">获取具有可信度评级的产品营收数据，了解市场真实情况</p>
            </div>

            <div class="glass-card p-8 group hover:scale-105 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Icon name="lucide:trending-up" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">增长渠道分析</h3>
              <p class="text-gray-600 dark:text-slate-400">深入了解成功产品的增长策略和主要获客渠道</p>
            </div>

            <div class="glass-card p-8 group hover:scale-105 transition-all duration-300">
              <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Icon name="lucide:code-2" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">技术栈解析</h3>
              <p class="text-gray-600 dark:text-slate-400">了解成功产品背后的技术选型，为您的项目提供参考</p>
            </div>
          </div>
        </div>
      </section>

    </main>

  </div>
</template>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(209, 213, 219, 0.3);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.dark .glass-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
}

.dark .glass-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(139, 92, 246, 0.2);
}

@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -50px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(50px, 50px) scale(1.05);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
