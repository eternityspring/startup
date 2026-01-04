<template>
  <input
    :class="[
      'flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950',
      'placeholder:text-zinc-500',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300',
      props.class
    ]"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
interface Props {
  type?: string
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: '',
  placeholder: '',
  disabled: false,
  required: false,
})

defineEmits(['update:modelValue'])
</script>