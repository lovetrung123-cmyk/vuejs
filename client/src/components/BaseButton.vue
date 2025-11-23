<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
    :data-testid="testId"
  >
    <span v-if="loading" class="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'default' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  testId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'default',
  type: 'button',
  disabled: false,
  loading: false
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover-elevate active-elevate-2';
  
  const sizes = {
    sm: 'min-h-8 px-3 text-sm',
    default: 'min-h-9 px-4 py-2',
    lg: 'min-h-10 px-6 text-lg'
  };
  
  const variants = {
    primary: 'bg-primary text-primary-foreground border border-primary-border focus:ring-primary',
    secondary: 'bg-secondary text-secondary-foreground border border-secondary-border focus:ring-secondary',
    outline: 'border border-border bg-background text-foreground focus:ring-ring',
    ghost: 'text-foreground focus:ring-ring',
    destructive: 'bg-destructive text-destructive-foreground border border-destructive-border focus:ring-destructive'
  };
  
  return `${base} ${sizes[props.size]} ${variants[props.variant]}`;
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
};
</script>
