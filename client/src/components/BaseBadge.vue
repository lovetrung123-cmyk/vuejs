<template>
  <span :class="badgeClasses" :data-testid="testId">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'default';
  testId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default'
});

const badgeClasses = computed(() => {
  const base = 'inline-flex items-center justify-center rounded-full font-medium whitespace-nowrap';
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    default: 'px-3 py-1 text-xs'
  };
  
  const variants = {
    default: 'bg-secondary text-secondary-foreground',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
  };
  
  return `${base} ${sizes[props.size]} ${variants[props.variant]}`;
});
</script>
