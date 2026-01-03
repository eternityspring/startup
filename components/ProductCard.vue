<template>
  <NuxtLink 
    :to="`/products/${product.id}`"
    class="product-card glass-card p-6 block group hover:scale-[1.02] transition-all duration-300"
  >
    <!-- Header -->
    <div class="flex items-start gap-4 mb-4">
      <img 
        :src="product.logo_url" 
        :alt="product.name"
        class="w-16 h-16 rounded-xl shadow-lg flex-shrink-0"
      />
      
      <div class="flex-1 min-w-0">
        <h3 class="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors truncate">
          {{ product.name }}
        </h3>
        <p class="text-slate-400 text-sm line-clamp-2">
          {{ product.description_zh }}
        </p>
      </div>
    </div>

    <!-- Revenue Badge -->
    <div class="mb-4">
      <RevenueBadge :revenue="product.revenue_range" :confidence="product.revenue_confidence" />
    </div>

    <!-- Growth Channels -->
    <div class="mb-4">
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="channel in product.growth_channels.slice(0, 3)" 
          :key="channel"
          class="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-slate-300"
        >
          {{ getChannelLabel(channel) }}
        </span>
        <span 
          v-if="product.growth_channels.length > 3"
          class="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-slate-400"
        >
          +{{ product.growth_channels.length - 3 }}
        </span>
      </div>
    </div>

    <!-- Tech Stack -->
    <div v-if="product.tech_stack && product.tech_stack.length > 0" class="mb-4">
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tech in product.tech_stack.slice(0, 3)" 
          :key="tech"
          class="px-2 py-1 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded text-xs text-purple-300 font-mono"
        >
          {{ tech }}
        </span>
        <span 
          v-if="product.tech_stack.length > 3"
          class="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-400"
        >
          +{{ product.tech_stack.length - 3 }}
        </span>
      </div>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between pt-4 border-t border-white/10">
      <div class="flex items-center gap-2">
        <StatusBadge :status="product.status" size="sm" />
      </div>
      
      <div class="flex items-center gap-2 text-slate-400 text-xs">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {{ product.launched_at || '未知' }}
      </div>
    </div>

    <!-- Hover Arrow -->
    <div class="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
      <svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Product, GrowthChannel } from '~/types/product';
import { GROWTH_CHANNEL_LABELS } from '~/types/product';

interface Props {
  product: Product;
}

defineProps<Props>();

const getChannelLabel = (channel: GrowthChannel) => GROWTH_CHANNEL_LABELS[channel].zh;
</script>

<style scoped>
.product-card {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
}

.product-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(139, 92, 246, 0.3);
  box-shadow: 0 8px 32px 0 rgba(139, 92, 246, 0.2);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
