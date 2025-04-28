<template>
  <div class="space-y-1.5">
    <div class="flex items-baseline gap-2 justify-between">
      <h3 class="text-xl font-serif font-semibold text-slate-100 tracking-tight">
        {{ item.name }}
      </h3>
      
      <span class="text-lg text-restaurant-gold font-medium whitespace-nowrap">
        €{{ item.price.toFixed(2) }}
      </span>

    </div>
    <p class="text-slate-300 text-sm font-sans italic max-w-[85%] leading-snug">
      {{ item.description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: false
  }
})
</script>