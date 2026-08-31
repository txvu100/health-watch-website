<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { CLINIC } from '../../data/clinic'
import { NAV_KEYS, route } from '../../data/routes'
import { useTranslations, type Lang } from '../../data/translations'

const props = withDefaults(defineProps<{ lang?: Lang }>(), { lang: 'en' })
const t = computed(() => useTranslations(props.lang))

const navItems = computed(() => [
  ...NAV_KEYS.map((key) => ({ label: t.value.nav[key], href: route(key, props.lang) })),
  { label: t.value.nav.patientPortal, href: '/patient-portal/' },
])

const isOpen = ref(false)
const drawer = ref<HTMLElement | null>(null)
const trigger = ref<HTMLButtonElement | null>(null)

const toggle = () => (isOpen.value = !isOpen.value)
const close = () => (isOpen.value = false)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    close()
    return
  }
  if (event.key !== 'Tab' || !drawer.value) return

  // Keep Tab inside the drawer — without this the page behind stays reachable.
  const focusable = drawer.value.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
  )
  if (!focusable.length) return
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

watch(isOpen, async (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) {
    document.addEventListener('keydown', onKeydown)
    await nextTick()
    drawer.value?.querySelector<HTMLElement>('a[href], button')?.focus()
  } else {
    document.removeEventListener('keydown', onKeydown)
    trigger.value?.focus()
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div>
    <!-- Hamburger -->
    <button
      ref="trigger"
      @click="toggle"
      :aria-expanded="isOpen"
      aria-controls="mobile-nav"
      :aria-label="t.nav.toggleMenu"
      class="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md focus-visible:outline-2 focus-visible:outline-primary"
    >
      <span
        class="block w-6 h-0.5 bg-primary transition-all duration-200"
        :class="isOpen ? 'rotate-45 translate-y-2' : ''"
      />
      <span
        class="block w-6 h-0.5 bg-primary transition-all duration-200"
        :class="isOpen ? 'opacity-0' : ''"
      />
      <span
        class="block w-6 h-0.5 bg-primary transition-all duration-200"
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
        ref="drawer"
        id="mobile-nav"
        class="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 lg:hidden shadow-2xl flex flex-col"
      >
        <div class="flex items-center justify-between p-5 bg-navy">
          <span class="text-white font-display font-extrabold text-lg tracking-[-0.4px]"><span class="text-white">Health</span><span class="text-secondary">Watch</span></span>
          <button
            @click="close"
            :aria-label="t.nav.closeMenu"
            class="text-white/80 hover:text-white transition-colors"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul class="flex-1 overflow-y-auto py-4">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              @click="close"
              class="flex items-center px-6 py-3.5 text-neutral-600 hover:text-primary hover:bg-neutral-50 font-semibold transition-colors border-b border-neutral-100"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <div class="p-5 space-y-3 border-t border-neutral-200">
          <a
            :href="route('contact', props.lang)"
            @click="close"
            class="block w-full text-center bg-secondary hover:bg-secondary-dark text-white font-bold py-3 rounded-full shadow-cta transition-colors"
          >
            {{ t.nav.bookAppointment }}
          </a>
          <a
            :href="`tel:${CLINIC.phoneE164}`"
            class="block w-full text-center border-2 border-neutral-200 text-primary hover:bg-lavender font-bold py-3 rounded-full transition-colors"
          >
            {{ CLINIC.phone }}
          </a>
          <p class="text-center text-sm text-primary font-bold">Se habla español</p>
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
