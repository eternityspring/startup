<template>
  <div class="inline-flex items-center gap-2">
    <div 
      class="px-3 py-1.5 rounded-lg font-semibold text-sm"
      :class="badgeClass"
    >
      {{ revenueLabel }}
    </div>
    
    <div v-if="confidence" class="flex items-center gap-1" :title="`可信度: ${confidence}/5`">
      <div 
        v-for="i in 5" 
        :key="i"
        class="w-1.5 h-1.5 rounded-full transition-all"
        :class="i <= confidence ? 'bg-emerald-500' : 'bg-slate-700'"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { RevenueRange } from '~/types/product';
import { REVENUE_LABELS } from '~/types/product';

interface Props {
  revenue: RevenueRange;
  confidence?: number;
}

const props = defineProps<Props>();

const revenueLabel = computed(() => REVENUE_LABELS[props.revenue].zh);

const badgeClass = computed(() => {
  switch (props.revenue) {
    case '$50k+':
      return 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-emerald-300';
    case '$10k-$50k':
      return 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300';
    case '$5k-$10k':
      return 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300';
    case '$1k-$5k':
      return 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300';
    case '<$1k':
      return 'bg-gradient-to-r from-slate-500/20 to-slate-600/20 border border-slate-500/30 text-slate-300';
    case 'unknown':
      return 'bg-white/5 border border-white/10 text-slate-400';
    default:
      return 'bg-white/5 border border-white/10 text-slate-400';
  }
});
</script>
