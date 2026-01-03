<template>
  <footer class="border-t border-white/10 bg-slate-950/50 backdrop-blur-xl">
    <div class="container mx-auto px-6 py-12">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span class="text-xl font-bold text-white">独立开发情报</span>
          </div>
          <p class="text-slate-400 max-w-md">
            探索真实的独立开发者产品数据，包括收入、增长渠道、技术栈等深度情报。助力您的独立开发之路。
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">快速链接</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="text-slate-400 hover:text-white transition-colors">
                首页
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/products" class="text-slate-400 hover:text-white transition-colors">
                产品目录
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="text-slate-400 hover:text-white transition-colors">
                关于我们
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h3 class="text-white font-semibold mb-4">关注我们</h3>
          <div class="flex gap-3">
            <a 
              href="#" 
              class="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <svg class="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            
            <a 
              href="#" 
              class="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <svg class="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-slate-400 text-sm">
          © {{ currentYear }} 独立开发情报. All rights reserved.
        </p>
        
        <div class="flex gap-6 text-sm">
          <a href="#" class="text-slate-400 hover:text-white transition-colors">
            隐私政策
          </a>
          <a href="#" class="text-slate-400 hover:text-white transition-colors">
            服务条款
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
