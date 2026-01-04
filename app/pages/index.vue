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
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <!-- Ink Wash Effects -->
          <div class="absolute -top-40 -right-40 w-[50rem] h-[50rem] bg-gradient-radial from-gray-200 to-transparent opacity-60 dark:from-gray-800 dark:to-transparent filter blur-3xl"></div>
          <div class="absolute top-20 left-0 w-[40rem] h-[40rem] bg-gradient-radial from-stone-200 to-transparent opacity-40 dark:from-stone-800 dark:to-transparent filter blur-3xl"></div>
          <div class="absolute bottom-0 right-20 w-[60rem] h-[40rem] bg-gradient-radial from-zinc-200 to-transparent opacity-30 dark:from-zinc-800 dark:to-transparent filter blur-3xl"></div>
        </div>

        <div class="relative container mx-auto px-6 py-24">
          <div class="text-center max-w-4xl mx-auto">
             <div class="inline-block mb-6">
                <span class="px-4 py-1.5 rounded-full border border-red-800/30 bg-red-50 text-red-900 dark:bg-red-900/20 dark:border-red-500/30 dark:text-red-300 text-sm font-serif tracking-wide backdrop-blur-sm">
                  🚀 独立开发者初创启动台
                </span>
             </div>

             <h1 class="text-6xl md:text-7xl font-serif font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight tracking-tight">
               发现点子，轻松构建 <br>快速上线!
             </h1>

             <p class="text-xl text-gray-600 dark:text-stone-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
               从经过市场验证，高可信度的蓝海情报中获取点子，配合初创SaaS模板，跳过 80% 的基础搭建坑，直接进入核心业务竞争试错。
             </p>

             <!-- CTA Button -->
             <div class="mb-12">
               <NuxtLink to="/pricing" class="group inline-flex items-center justify-center px-8 py-3 text-lg font-serif text-white transition-all duration-300 bg-red-900 rounded-lg hover:bg-red-800 shadow-lg hover:shadow-red-900/30 transform hover:-translate-y-0.5">
                 立即开始
                 <Icon name="lucide:arrow-right" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
               </NuxtLink>
             </div>
             
             <!-- Filter Tags -->
             <div class="flex flex-wrap justify-center gap-3 mb-16">
                <button 
                  v-for="type in productTypes" 
                  :key="type"
                  @click="selectedType = type"
                  :class="[
                    'px-6 py-2 rounded-lg text-sm transition-all duration-300 font-serif',
                    selectedType === type 
                      ? 'bg-gray-900 text-white shadow-md dark:bg-gray-100 dark:text-gray-900' 
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 dark:bg-white/5 dark:border-white/10 dark:text-stone-400 dark:hover:text-stone-200'
                  ]"
                >
                  {{ type === 'all' ? '全部' : type.replace('_', ' ') }}
                </button>
             </div>

             <!-- Stats -->
               <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
                <div class="glass-card p-6 text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div class="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                    500+
                  </div>
                  <div class="text-gray-500 dark:text-stone-500 text-sm font-light">产品收录</div>
                </div>

                <div class="glass-card p-6 text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div class="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                    $2M+
                  </div>
                  <div class="text-gray-500 dark:text-stone-500 text-sm font-light">月收入总和</div>
                </div>

                <div class="glass-card p-6 text-center group hover:-translate-y-1 transition-transform duration-300">
                  <div class="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                    50+
                  </div>
                  <div class="text-gray-500 dark:text-stone-500 text-sm font-light">技术栈</div>
                </div>

                <div class="glass-card p-6 text-center group hover:-translate-y-1 transition-transform duration-300">
                   <div class="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                    100%
                  </div>
                  <div class="text-gray-500 dark:text-stone-500 text-sm font-light">真实数据</div>
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
      <!-- Why Choose Us -->
      <section class="py-24 relative">
        <div class="container mx-auto px-6">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">为什么选择我们</h2>
            <p class="text-gray-500 dark:text-stone-400 text-lg font-light">深度线索，助力您的独立开发之路</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="glass-card p-8 group hover:-translate-y-1 transition-all duration-300">
              <div class="w-12 h-12 bg-gray-900 dark:bg-white rounded-md flex items-center justify-center mb-6">
                <Icon name="lucide:dollar-sign" class="w-6 h-6 text-white dark:text-gray-900" />
              </div>
              <h3 class="text-xl font-serif font-bold text-gray-900 dark:text-white mb-3">线索产品数据</h3>
              <p class="text-gray-600 dark:text-stone-400 font-light">获取具有可信度评级的产品营收数据，了解市场真实情况</p>
            </div>

            <div class="glass-card p-8 group hover:-translate-y-1 transition-all duration-300">
              <div class="w-12 h-12 bg-red-800 rounded-md flex items-center justify-center mb-6">
                <Icon name="lucide:trending-up" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-serif font-bold text-gray-900 dark:text-white mb-3">增长渠道分析</h3>
              <p class="text-gray-600 dark:text-stone-400 font-light">深入了解成功产品的增长策略和主要获客渠道</p>
            </div>

            <div class="glass-card p-8 group hover:-translate-y-1 transition-all duration-300">
              <div class="w-12 h-12 bg-gray-900 dark:bg-white rounded-md flex items-center justify-center mb-6">
                <Icon name="lucide:code-2" class="w-6 h-6 text-white dark:text-gray-900" />
              </div>
              <h3 class="text-xl font-serif font-bold text-gray-900 dark:text-white mb-3">技术栈解析</h3>
              <p class="text-gray-600 dark:text-stone-400 font-light">了解成功产品背后的技术选型，为您的项目提供参考</p>
            </div>
          </div>
        </div>
      </section>

    </main>

  </div>
</template>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem; /* More boxy for ink style */
  transition: all 0.3s ease;
}

.dark .glass-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.glass-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.1);
}

.dark .glass-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
}
</style>
