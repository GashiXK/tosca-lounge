<template>
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div 
          class="absolute inset-0 bg-restaurant-navy opacity-70"
          :style="{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)'
          }"
        ></div>
      </div>
  
      <div class="container mx-auto px-4 relative z-10 text-center">
        <!-- Welcome animation -->
        <div :class="['welcome-animation', { 'active': isLoaded }]">
          <div class="plate-icon mb-4 sm:mb-8 animate-[scaleUp_1s_ease-out_forwards] delay-300">
            <div class="relative w-20 h-20 sm:w-32 sm:h-32 mx-auto">
              <div class="absolute inset-0 bg-restaurant-gold rounded-full opacity-20 animate-[pulseGentle_3s_ease-in-out_infinite]" />
              <div class="absolute inset-2 sm:inset-4 bg-restaurant-gold rounded-full opacity-40 animate-[pulseGentle_3s_ease-in-out_infinite] delay-500" />
              <div class="absolute inset-4 sm:inset-8 bg-restaurant-gold rounded-full opacity-60 animate-[pulseGentle_3s_ease-in-out_infinite] delay-1000" />
              <div class="absolute inset-6 sm:inset-12 bg-restaurant-gold rounded-full animate-[pulseGentle_3s_ease-in-out_infinite] delay-1500" />
            </div>
          </div>
        </div>
  
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-white opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          <span class="block">Tosca</span>
          <span class="text-restaurant-gold">LoungeBar</span>
        </h1>
        <p class="text-white mb-6 sm:mb-8 max-w-md sm:max-w-lg mx-auto opacity-0 animate-[fadeIn_1s_ease-out_forwards] delay-400">
          Përjetoni menunë tonë me pjata të shkëlqyera të përgatitura për ju me pasion dhe saktësi.
        </p>
        <div class="flex justify-center opacity-0 animate-[fadeIn_1s_ease-out_forwards] delay-600">
          <UButton 
            @click="scrollToMenu"
            class="bg-restaurant-gold text-restaurant-navy hover:bg-restaurant-amber text-base sm:text-lg  sm:px-6 sm:py-4 flex items-center gap-2"
          >
            Menu
            <UIcon name="i-heroicons-arrow-down" class=" sm:w-6 sm:h-6" />
          </UButton>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const isLoaded = ref(false)
  
  onMounted(() => {
    isLoaded.value = true
  })
  
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu')
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  </script>
  
