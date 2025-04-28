<template>
    <div>
        <Header />
        <HeroSection />
        <MenuSection />
        <Footer/>
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'Tosca Lounge - Rahovec',
  meta: [
    { name: 'description', content: 'Welcome to our restaurant. Enjoy delicious food and great ambiance.' },
    { name: 'keywords', content: 'restaurant, food, dining, gourmet' },
    { name: 'author', content: 'Your Name' }
  ]
})
</script>