<template>
  <div :class="cardClasses" :data-testid="testId">
    <div v-if="$slots.header || title" class="px-6 py-4 border-b border-card-border">
      <slot name="header">
        <h3 class="text-lg font-semibold text-card-foreground">{{ title }}</h3>
      </slot>
    </div>
    
    <div class="p-6">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="px-6 py-4 border-t border-card-border">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title?: string;
  hoverable?: boolean;
  testId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  hoverable: false
});

const cardClasses = computed(() => {
  const base = 'bg-card border border-card-border rounded-lg';
  const hover = props.hoverable ? 'hover-elevate cursor-pointer' : '';
  return `${base} ${hover}`;
});
</script>
