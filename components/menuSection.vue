<template>
    <section id="menu" class="py-12 sm:py-20 min-h-screen bg-gradient-to-b from-restaurant-navy to-[#0F172A]">
      <div class="container mx-auto px-4 max-w-6xl">
        <!-- Dynamic Categories -->
        <div v-for="category in categories" :key="category.id" class="mb-12 sm:mb-20 last:mb-0">
          <div class="mb-6 sm:mb-8 relative">
            <h2 class="text-2xl sm:text-3xl font-serif text-restaurant-gold italic text-center">
              {{ category.name }}
            </h2>
            <p class="text-gray-400 text-center mt-1 sm:mt-2 text-sm sm:text-base font-light">
              {{ category.description }}
            </p>
            <div class="absolute left-1/2 -translate-x-1/2 h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-restaurant-gold/50 to-transparent bottom-0 mt-2 sm:mt-4" />
          </div>
          

          <div :class="['grid', category.gridColumns || 'grid-cols-1 md:grid-cols-2', 'gap-4 sm:gap-6']">
            <DishCard 
              v-for="item in category.items" 
              :key="item.id" 
              :item="item" 
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'

  
  const categories = ref([
    {
      id: 1,
      name: 'Supat',
      description: 'Fillime perfekte për të zgjuar shijen tuaj',
      items: [
        {
          id: 1,
          name: "Supë pule",
          description: "Supë e ngrohtë me copëza pule",
          price: 2.00,
          isVegetarian: true
        },
        {
          id: 2,
          name: "Supë me perime",
          description: "Supë e freskët me perime",
          price: 2.00,
          isVegetarian: true
        }
      ]
    },

    {
      id: 2,
      name: 'Mëngjesi',
      description: 'Filloni ditën tuaj me energji',
      items: [
        {
          id: 3,
          name: "Mëngjesi Tosca",
          description: "",
          price: 2.50,
          isVegetarian: false
        },
        {
          id: 4,
          name: "Llokuma me Hajvar",
          description: "",
          price: 2.00,
          isVegetarian: false
        },
        {
          id: 5,
          name: "Llokuma me Gjem",
          description: "",
          price: 2.00,
          isVegetarian: false
        },
        {
          id: 6,
          name: "Llokuma me Djath",
          description: "",
          price: 2.00,
          isVegetarian: false
        },
        {
          id: 7,
          name: "Omlet Proshutë",
          description: "Sallatë me djathë dhe hajvar",
          price: 2.00,
          isVegetarian: false
        },
        {
          id: 8,
          name: "Omlet Djathë",
          description: "Sallatë me djathë dhe hajvar",
          price: 2.00,
          isVegetarian: false
        },
        {
          id: 9,
          name: "Omlet Kërpudha",
          description: "Sallatë me djathë dhe hajvar",
          price: 2.00,
          isVegetarian: false
        },
      ]
    },
    


    {
      id: 3,
      name: 'Chef Specials',
      description: 'Exclusive creations from our master chef',
      gridColumns: 'grid-cols-1',
      items: [
        {
          id: 5,
          name: "Chef's Tasting Menu",
          description: "Five-course seasonal tasting experience",
          price: 75,
          isChefSpecial: true
        },
        {
          id: 6,
          name: "Vegetarian Degustation",
          description: "Five-course plant-based tasting menu",
          price: 65,
          isChefSpecial: true
        }
      ]
    }
  ])
  </script>
  
  <style scoped>
  section {
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>