<template>
  <div class="space-y-1.5">
    <div class="flex items-baseline gap-2 justify-between">
      <h3 class="text-xl font-serif font-semibold text-slate-100 tracking-tight">
        {{ item.name }}
      </h3>

      <!-- Kontrollo nëse ka çmime të shumëfishta -->
      <span v-if="item.price" class="text-lg text-restaurant-gold font-medium whitespace-nowrap">
        €{{ item.price.toFixed(2) }}
      </span>
    </div>

    <p class="text-slate-300 text-sm font-sans italic max-w-[85%] leading-snug">
      {{ item.description }}
    </p>

    <div v-if="item.prices" class="text-slate-200 text-sm font-light space-y-1">
      <div>
        <span class="text-restaurant-gold font-medium">E Vogël:</span>
        €{{ item.prices.small.toFixed(2) }}
      </div>
      <div>
        <span class="text-restaurant-gold font-medium">Mesme:</span>
        €{{ item.prices.medium.toFixed(2) }}
      </div>
      <div>
        <span class="text-restaurant-gold font-medium">E Madhe:</span>
        €{{ item.prices.large.toFixed(2) }}
      </div>
    </div>
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
