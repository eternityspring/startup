<template>
  <nav class="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-white/10">
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="text-xl font-bold text-white">独立开发情报</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink 
            to="/" 
            class="nav-link"
            :class="{ 'active': isActive('/') }"
          >
            首页
          </NuxtLink>
          
          <NuxtLink 
            to="/products" 
            class="nav-link"
            :class="{ 'active': isActive('/products') }"
          >
            产品目录
          </NuxtLink>
          
          <NuxtLink 
            to="/about" 
            class="nav-link"
            :class="{ 'active': isActive('/about') }"
          >
            关于
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <NuxtLink 
            to="/login"
            class="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            登录
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden py-4 border-t border-white/10"
      >
        <div class="flex flex-col gap-2">
          <NuxtLink 
            to="/" 
            @click="closeMobileMenu"
            class="px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            首页
          </NuxtLink>
          
          <NuxtLink 
            to="/products" 
            @click="closeMobileMenu"
            class="px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            产品目录
          </NuxtLink>
          
          <NuxtLink 
            to="/about" 
            @click="closeMobileMenu"
            class="px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            关于
          </NuxtLink>
          
          <NuxtLink 
            to="/login"
            @click="closeMobileMenu"
            class="mt-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-white text-center"
          >
            登录
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const route = useRoute();
const mobileMenuOpen = ref(false);

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/';
  }
  return route.path.startsWith(path);
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<style scoped>
.nav-link {
  @apply text-slate-300 hover:text-white transition-colors relative;
}

.nav-link.active {
  @apply text-white;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -1.5rem;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, #8b5cf6, #06b6d4);
}
</style>
