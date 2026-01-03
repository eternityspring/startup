<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <!-- Animated background -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div class="relative container mx-auto px-6 py-24">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-block mb-6">
            <span class="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-sm">
              🚀 独立开发者情报平台
            </span>
          </div>
          
          <h1 class="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
            发现成功的<br />独立产品
          </h1>
          
          <p class="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            探索真实的独立开发者产品数据，包括收入、增长渠道、技术栈等深度情报
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NuxtLink 
              to="/products" 
              class="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105"
            >
              <span class="flex items-center gap-2">
                浏览产品
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </NuxtLink>
            
            <button class="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-white hover:bg-white/10 transition-all duration-300">
              了解更多
            </button>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-4xl mx-auto">
          <div class="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div class="text-slate-400 text-sm">产品收录</div>
          </div>
          
          <div class="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div class="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              $2M+
            </div>
            <div class="text-slate-400 text-sm">月收入总和</div>
          </div>
          
          <div class="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div class="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div class="text-slate-400 text-sm">技术栈</div>
          </div>
          
          <div class="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div class="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div class="text-slate-400 text-sm">真实数据</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-24 relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">精选产品</h2>
          <p class="text-slate-400 text-lg">探索最成功的独立开发者产品</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id" 
            :product="product"
          />
        </div>

        <div class="text-center">
          <NuxtLink 
            to="/products" 
            class="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
          >
            查看全部产品
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-24 relative">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-4">为什么选择我们</h2>
          <p class="text-slate-400 text-lg">深度情报，助力您的独立开发之路</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="glass-card p-8 group hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">真实收入数据</h3>
            <p class="text-slate-400">获取真实的产品收入数据和可信度评级，了解市场真实情况</p>
          </div>

          <div class="glass-card p-8 group hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">增长渠道分析</h3>
            <p class="text-slate-400">深入了解成功产品的增长策略和主要获客渠道</p>
          </div>

          <div class="glass-card p-8 group hover:scale-105 transition-all duration-300">
            <div class="w-12 h-12 bg-gradient-to-br from-emerald-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">技术栈透明</h3>
            <p class="text-slate-400">了解成功产品背后的技术选型，为您的项目提供参考</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 relative">
      <div class="container mx-auto px-6">
        <div class="glass-card p-12 text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold text-white mb-6">
            开始探索独立开发者的成功之路
          </h2>
          <p class="text-slate-300 text-lg mb-8">
            加入我们，获取最新的独立产品情报和深度分析
          </p>
          <NuxtLink 
            to="/products" 
            class="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105"
          >
            立即开始
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { mockProducts } from '~/data/mockProducts';

const featuredProducts = mockProducts.slice(0, 6);

useHead({
  title: '独立开发情报 - 发现成功的独立产品',
  meta: [
    { name: 'description', content: '探索真实的独立开发者产品数据，包括收入、增长渠道、技术栈等深度情报' }
  ]
});
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.glass-card:hover {
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