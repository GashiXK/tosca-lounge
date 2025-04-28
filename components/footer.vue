<template>
    <footer class="bg-restaurant-navy text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Restaurant Info -->
          <div>
            <h3 class="text-xl font-semibold mb-4">
              <span class="font-serif">Tosca</span>
              <span class="font-sans font-light text-restaurant-gold">Lounge Bar</span>
            </h3>
            <p class="text-gray-300 mb-4">
              Përjetoni bashkimin perfekt të traditës dhe modernës. 
            </p>
            <div class="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/18eTnQp8bS/?mibextid=wwXIfr" 
                class="text-gray-300 hover:text-restaurant-gold transition-colors"
              >
                <UIcon name="ic-baseline-facebook" class="w-6 h-6" />
              </a>

              <a 
                href="https://www.instagram.com/toscaloungebar?igsh=MXIzd2VhY2hjNWZz" 
                class="text-gray-300 hover:text-restaurant-gold transition-colors"
              >
                <UIcon name="mdi-instagram" class="w-6 h-6" />
              </a>
            </div>
          </div>
  
          <!-- Hours -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Hours</h4>
            <ul class="space-y-2 text-gray-300">
              <li v-for="(hours, day) in openingHours" :key="day" class="flex justify-between">
                <span>{{ day }}</span>
                <span>{{ hours }}</span>
              </li>
            </ul>
          </div>
  
          <!-- Contact -->
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact</h4>
            <address class="not-italic text-gray-300 space-y-2">
              
              <p><UIcon name="tdesign-location"/> Rahovec, Kosova </p>
              <p><UIcon name="mdi-light-phone"/> 049 18 18 16</p>
             
            </address>
          </div>
        </div>
  
        <!-- Copyright -->
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {{ currentYear }} Tosca Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  const currentYear = ref(new Date().getFullYear())
  
  const openingHours = {
    'Monday - Saturday': '7:00 AM - 12:00 PM',
    'Sunday': '9:00 AM - 12:00 PM'
  }
  </script>
  
  <style scoped>

  </style>