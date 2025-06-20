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
          isVegetarian: false
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
      name: 'Mëngjes',
      description: 'Filloni ditën tuaj me energji',
      items: [
        {
          id: 3,
          name: "Mëngjes Tosca",
          description: "Kaqkavall,Perime, Proshutë, Sallatë, Suxhukë",
          price: 3.00,
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
          name: "Llokuma me Djathë",
          description: "",
          price: 2.00,
          isVegetarian: false
        },
        {
          id: 7,
          name: "Omlet Proshutë",
          description: "Sallatë, Djathë, Hajvar",
          price: 2.00,
          isVegetarian: false
        },
        {
          id: 8,
          name: "Omlet Djathë",
          description: "Sallatë, Djathë, Hajvar",
          price: 2.00,
          isVegetarian: false
        },
      ]
    },

    {
      id: 3,
      name: 'Senduiç',
      description: 'Shije të freskëta dhe të shijshme në çdo kafshatë',
      items: [
        {
          id: 9,
          name: "Senduiç Pule",
          description: "Djathë, Sallatë, Pomfrit, Sos",
          price: 2.00,
          isVegetarian: false
        },
        {
          id: 10,
          name: "Senduiç Proshuto",
          description: "Djathë, Sallatë, Pomfrit, Sos",
          price: 2.00,
          isVegetarian: false
        },
        {
          id: 11,
          name: "Senduiç Peperoni",
          description: "Sallatë, Pomfrit, Sos",
          price: 2.00,
          isVegetarian: false
        },
        {
          id: 12,
          name: "Senduiç Tosca",
          description: "Pomfrit, Sallatë, Proshutë, Sos",
          price: 3.00,
          isVegetarian: false
        },
        {
          id: 13,
          name: "Senduiç Tosca Pule",
          description: "Pomfrit, Sallatë, Sos",
          price: 3.00,
          isVegetarian: false
        },
      ]
    },

    {
      id: 4,
      name: 'Pasta',
      description: 'Përvoja e shijes italiane në çdo kafshatë',
      items: [
        {
          id: 14,
          name: "Pasta Aglio Olio",
          description: "Hudhër, Djeks, Verë e bardhë - sipas dëshirës",
          price: 2.50,
          isVegetarian: false
        },
        {
          id: 15,
          name: "Pasta Arabiata",
          description: "Qepë, domate, fafarona",
          price: 2.50,
          isVegetarian: false
        },
        {
          id: 16,
          name: "Pasta Carbonara",
          description: "Proshutë, vezë",
          price: 3.00,
          isVegetarian: false
        },
        {
          id: 17,
          name: "Pasta Boloneze",
          description: "Qepë, mish i bluar",
          price: 3.00,
          isVegetarian: false
        },
      ]
    },

    {
      id: 5,
      name: 'Paragjella',
      description: 'Shije të freskëta dhe të shijshme në çdo kafshatë',
      items: [
        {
          id: 18,
          name: "Pomfrit",
          description: "Djathë",
          price: 2.00,
          isVegetarian: false
        },
        {
          id: 19,
          name: "Paragjellë Tosca",
          description: "Proshutë, Suxhukë, Djathë",
          price: 3.50,
          isVegetarian: false
        },
        {
          id: 20,
          name: "Kërpudha të fërguara",
          description: "Qepë",
          price: 2.50,
          isVegetarian: false
        },
        {
          id: 21,
          name: "Chicken Fingers",
          description: "Sos, Pomfrit",
          price: 4.00,
          isVegetarian: false
        },
        {
          id: 22,
          name: "Djath Porcion",
          description: "",
          price: 2.50,
          isVegetarian: false
        },
      ]
    },
    
    {
      id: 6,
      name: 'Hamburger',
      description: 'Hamburger të shijshëm dhe të freskët',
      items: [
        {
          id: 23,
          name: "Hamburger",
          description: "Pomfrit, Sallatë, Sos",
          price: 1.80,
          isVegetarian: false
        },
        {
          id: 24,
          name: "Hamburger me Veze",
          description: "Pomfrit, Sallatë, Sos",
          price: 2.00,
          isVegetarian: false
        },
        {
          id: 25,
          name: "Cheese Burger",
          description: "Pomfrit, Djathë, Sallatë, Sos",
          price: 2.00,
          isVegetarian: false
        },
        {
          id: 26,
          name: "Chicken Burger",
          description: "Pomfrit, Mish Pule, Sallatë, Sos",
          price: 4.00,
          isVegetarian: false
        },
        {
          id: 27,
          name: "Big Burger",
          description: "2x Pleskavica, Pomfrit, Sallatë, Sos",
          price: 2.50,
          isVegetarian: false
        },
      ]
    },
    
    {
      id: 7,
      name: 'Risoto',
      description: 'Risoto të shijshëm dhe të freskët',
      items: [
        {
          id: 28,
          name: "Risoto Pule",
          description: "Sallatë, Pomfrit",
          price: 3.50,
          isVegetarian: false
        },
        {
          id: 29,
          name: "Risoto Kërpudha",
          description: "Sallatë, Pomfrit ",
          price: 3.50,
          isVegetarian: false
        },
        {
          id: 30,
          name: "Risoto Perime",
          description: "Sallatë, Pomfrit ",
          price: 3.50,
          isVegetarian: false
        },
      ]
    },

    {
      id: 8,
      name: 'Sallata',
      description: 'Sallata të shijshme dhe të freskëta',
      items: [
        {
          id: 31,
          name: "Sallatë Shope",
          description: "Domate, Tranguj, Qepë, Djathë",
          price: 2.50,
          isVegetarian: false
        },
        {
          id: 32,
          name: "Sallatë Mix",
          description: "Sallatë gjelbërt, Domate, Tranguj, Laker, Qepë, Karrota",
          price: 2.50,
          isVegetarian: false
        },
        {
          id: 33,
          name: "Sallatë e Gjelbërt",
          description: "Tranguj, Qepë",
          price: 2.50,
          isVegetarian: false
        },

        {
          id: 34,
          name: "Sallatë Greke",
          description: "Domate, Tranguj, Qepë, Djathë",
          price: 2.50,
          isVegetarian: false
        },
        {
          id: 35,
          name: "Sallatë Tuna",
          description: "Tuna, Tranguj, Qepë",
          price: 3.50,
          isVegetarian: false
        },
        {
          id: 36,
          name: "Sallatë Pule",
          description: "Sallat e gjelbërt, Domate, Tranguj, Qepë",
          price: 3.50,
          isVegetarian: false
        },
      ]
    },

    {
      id: 9,
      name: 'Skara',
      description: 'Mishra nga Skara të shijshme dhe të freskëta',
      items: [
        {
          id: 37,
          name: "Qofte me kajmak",
          description: "Sallatë, Pomfrit",
          price: 3.50,
          isVegetarian: false
        },
        {
          id: 38,
          name: "Pleskavicë ",
          description: "Sallatë, Pomfrit",
          price: 4.00,
          isVegetarian: false
        },
        {
          id: 39,
          name: "Pleskavicë me sos",
          description: "Sallatë, Pomfrit",
          price: 4.50,
          isVegetarian: false
        },

        {
          id: 40,
          name: "Pleskavicë e mbushur",
          description: "Sallatë, Pomfrit",
          price: 4.00,
          isVegetarian: false
        },
        {
          id: 41,
          name: "Pleskavicë e mbushur me sos",
          description: "Sallatë, Pomfrit",
          price: 4.50,
          isVegetarian: false
        },
        {
          id: 42,
          name: "File Pule në grill",
          description: "Sallatë, Pomfrit",
          price: 4.00,
          isVegetarian: false
        },
        {
          id: 43,
          name: "File Pule me sos",
          description: "Sallatë, Pomfrit, Oriz",
          price: 4.00,
          isVegetarian: false
        },
        {
          id: 44,
          name: "Shnicell Pule",
          description: "Mish i bardhë i fërguar, Sallatë, Pomfrit, Sos",
          price: 4.50,
          isVegetarian: false
        },

        {
          id: 45,
          name: "Ramstek",
          description: "Sallatë, Pomfrit, Kërpudha",
          price: 7.00,
          isVegetarian: false
        },
        {
          id: 46,
          name: "Kombinim mishi",
          description: "Mish i bardhë, Ramstek, Suxhuk, Qofte, Sallatë",
          price: 8.00,
          isVegetarian: false
        },
      ]
    },


    {
      id: 10,
      name: 'Samun',
      description: 'Samuna të shijshme',
      items: [
        {
          id: 47,
          name: " Samun Proshutë",
          description: "Pomfrit, Sos",
          price: 2.50,
          isVegetarian: false
        },
        {
          id: 48,
          name: "Samun Suxhuk",
          description: "Pomfrit, Sos",
          price: 2.50,
          isVegetarian: false
        },
        {
          id: 49,
          name: "Samun Mix",
          description: "Pomfrit, Sos",
          price: 2.50,
          isVegetarian: false
        },
      ]
    },

  {
  id: 11,
  name: 'Pizza',
  description: 'Pizza të freskëta dhe të shijshme në çdo përmasë',
  items: [
    {
      id: 50,
      name: "Pizza Margarita",
      description: "Sos domate, Djathë",
      prices: {
        small: 2.00,
        medium: 3.00,
        large: 4.00
      },
      isVegetarian: true
    },
    {
      id: 51,
      name: "Pizza Proshuto",
      description: "Sos domatesh, Djathë, Proshutë",
      prices: {
        small: 2.00,
        medium: 3.00,
        large: 4.00
      },
      isVegetarian: false
    },
    {
      id: 52,
      name: "Pizza Regjina",
      description: "Sos domatesh, Djathë, Proshutë, Kërpudha",
      prices: {
        small: 2.00,
        medium: 3.00,
        large: 4.00
      },
      isVegetarian: true
    },
    {
      id: 53,
      name: "Pizza Tuna",
      description: "Sos domatesh, Djathë, Peshk, Qepë",
      prices: {
        small: 2.00,
        medium: 4.00,
        large: 5.50
      },
      isVegetarian: false
    },
    {
      id: 54,
      name: "Pizza Tosca",
      description: "Sos domatesh, Kaqkavall, Proshutë, Kërpudha, Suxhuk, Krem",
      prices: {
        small: 2.50,
        medium: 4.00,
        large: 5.50
      },
      isVegetarian: false
    },
        {
      id: 55,
      name: "Pizza Peperoni",
      description: "Sos domatesh, Djathë, Suxhuk",
      prices: {
        small: 2.50,
        medium: 4.00,
        large: 5.50
      },
      isVegetarian: false
    },
  ],
  


},


{
  id: 56,
  name: 'Extra',
  items: [
    {
      id: 50,
      name: "Sos",
      description: "CDO POROSI EXTRA PAGUHET!",
      price: 0.50
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
