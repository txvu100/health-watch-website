<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Telemedicine', href: '/telemedicine' },
  { label: 'Patient Portal', href: '/patient-portal' },
  { label: 'Contact', href: '/contact' },
]

const toggle = () => (isOpen.value = !isOpen.value)
const close = () => (isOpen.value = false)
</script>

<template>
  <div>
    <!-- Hamburger -->
    <button
      @click="toggle"
      :aria-expanded="isOpen"
      aria-controls="mobile-nav"
      aria-label="Toggle navigation menu"
      class="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md focus-visible:outline-2 focus-visible:outline-white"
    >
      <span
        class="block w-6 h-0.5 bg-white transition-all duration-200"
        :class="isOpen ? 'rotate-45 translate-y-2' : ''"
      />
      <span
        class="block w-6 h-0.5 bg-white transition-all duration-200"
        :class="isOpen ? 'opacity-0' : ''"
      />
      <span
        class="block w-6 h-0.5 bg-white transition-all duration-200"
        :class="isOpen ? '-rotate-45 -translate-y-2' : ''"
      />
    </button>

    <!-- Overlay -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        @click="close"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        aria-hidden="true"
      />
    </Transition>

    <!-- Drawer -->
    <Transition name="slide">
      <nav
        v-if="isOpen"
        id="mobile-nav"
        class="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 lg:hidden shadow-2xl flex flex-col"
      >
        <div class="flex items-center justify-between p-5 bg-primary">
          <span class="text-white font-display font-bold text-lg">Health Watch</span>
          <button
            @click="close"
            aria-label="Close menu"
            class="text-white/80 hover:text-white transition-colors"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul class="flex-1 overflow-y-auto py-4">
          <li v-for="item in NAV_ITEMS" :key="item.href">
            <a
              :href="item.href"
              @click="close"
              class="flex items-center px-6 py-3.5 text-neutral-700 hover:text-primary hover:bg-neutral-50 font-medium transition-colors border-b border-neutral-100"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <div class="p-5 space-y-3 border-t border-neutral-200">
          <a
            href="/contact"
            @click="close"
            class="block w-full text-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded-full transition-colors"
          >
            Book Appointment
          </a>
          <a
            href="tel:+14059491552"
            class="block w-full text-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 rounded-full transition-colors"
          >
            (405) 949-1552
          </a>
          <p class="text-center text-sm text-secondary font-semibold">🇲🇽 Se Habla Español</p>
        </div>
      </nav>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
