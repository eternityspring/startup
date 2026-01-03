<template>
  <span 
    class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-medium"
    :class="[badgeClass, sizeClass]"
  >
    <span class="w-1.5 h-1.5 rounded-full" :class="dotClass"></span>
    {{ statusLabel }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { ProductStatus } from '~/types/product';
import { STATUS_LABELS } from '~/types/product';

interface Props {
  status: ProductStatus;
  size?: 'sm' | 'md';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md'
});

const statusLabel = computed(() => STATUS_LABELS[props.status].zh);

const sizeClass = computed(() => {
  return props.size === 'sm' ? 'text-xs' : 'text-sm';
});

const badgeClass = computed(() => {
  switch (props.status) {
    case 'active':
      return 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300';
    case 'stagnant':
      return 'bg-yellow-500/20 border border-yellow-500/30 text-yellow-300';
    case 'sold':
      return 'bg-blue-500/20 border border-blue-500/30 text-blue-300';
    case 'shutdown':
      return 'bg-red-500/20 border border-red-500/30 text-red-300';
    default:
      return 'bg-white/5 border border-white/10 text-slate-400';
  }
});

const dotClass = computed(() => {
  switch (props.status) {
    case 'active':
      return 'bg-emerald-500';
    case 'stagnant':
      return 'bg-yellow-500';
    case 'sold':
      return 'bg-blue-500';
    case 'shutdown':
      return 'bg-red-500';
    default:
      return 'bg-slate-500';
  }
});
</script>
