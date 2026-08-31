<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
import { CLINIC } from '../../data/clinic'
import { useTranslations, type Lang } from '../../data/translations'

const props = withDefaults(defineProps<{ lang?: Lang }>(), { lang: 'en' })
const t = computed(() => useTranslations(props.lang).contact)

// Set PUBLIC_FORMSPREE_ID in the environment (see .env.example). Without it the
// form would POST into the void, so we show the phone fallback instead of a
// submit button that is guaranteed to fail.
const FORMSPREE_ID = import.meta.env.PUBLIC_FORMSPREE_ID
const isConfigured = Boolean(FORMSPREE_ID)
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`

const form = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
  language: props.lang === 'es' ? 'Spanish' : 'English',
})

// This island is client:visible. Until it hydrates, @submit.prevent is not
// attached, so a click would trigger a native GET submit — navigating to
// `?` and silently discarding everything the patient typed. Keep the button
// inert until Vue is actually listening.
const hydrated = ref(false)
onMounted(() => {
  hydrated.value = true
})

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const validationError = ref('')
const nameInput = ref<HTMLInputElement | null>(null)
const phoneInput = ref<HTMLInputElement | null>(null)
const successBanner = ref<HTMLElement | null>(null)

const nameInvalid = computed(() => Boolean(validationError.value) && !form.name)
const phoneInvalid = computed(() => Boolean(validationError.value) && !form.phone)

async function handleSubmit() {
  // The form is `novalidate`, so an empty required field must be reported here
  // or submitting does nothing visible at all.
  if (!form.name || !form.phone) {
    validationError.value = t.value.missingFields
    await nextTick()
    ;(form.name ? phoneInput.value : nameInput.value)?.focus()
    return
  }
  validationError.value = ''

  status.value = 'sending'
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...form, _subject: `Website enquiry — ${form.name}` }),
    })
    status.value = response.ok ? 'success' : 'error'
  } catch {
    status.value = 'error'
  }

  // The form unmounts on success; move focus so it does not fall to <body>.
  if (status.value === 'success') {
    await nextTick()
    successBanner.value?.focus()
  }
}

const inputClass =
  'w-full px-[15px] py-[13px] rounded-xl border-[1.5px] border-[#DDD6EE] bg-[#FBFAFE] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary focus:bg-white text-sm transition'
const invalidClass = 'border-red-500 bg-red-50'
</script>

<template>
  <div
    v-if="!isConfigured"
    role="alert"
    class="bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-5 text-sm font-medium"
  >
    {{ t.unavailable }}
    <a :href="`tel:${CLINIC.phoneE164}`" class="underline font-bold">{{ CLINIC.phone }}</a
    >.
  </div>

  <form v-else @submit.prevent="handleSubmit" novalidate class="space-y-5">
    <!-- Status region is always present so screen readers announce changes into it -->
    <div aria-live="polite" role="status">
      <div
        v-if="status === 'success'"
        ref="successBanner"
        tabindex="-1"
        class="bg-green-50 border border-green-200 text-green-800 rounded-xl p-5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        ✓ {{ t.success }}
      </div>
    </div>

    <div
      v-if="status === 'error'"
      role="alert"
      class="bg-red-50 border border-red-200 text-red-800 rounded-xl p-5 text-sm font-medium"
    >
      {{ t.error }}
      <a :href="`tel:${CLINIC.phoneE164}`" class="underline">{{ CLINIC.phone }}</a
      >.
    </div>

    <div
      v-if="validationError"
      role="alert"
      class="bg-red-50 border border-red-200 text-red-800 rounded-xl p-4 text-sm font-medium"
    >
      {{ validationError }}
    </div>

    <template v-if="status !== 'success'">
      <div class="grid sm:grid-cols-2 gap-5">
        <div>
          <label for="cf-name" class="block text-[13px] font-bold text-neutral-700 mb-1.5">
            {{ t.name }} <span class="text-red-600" aria-hidden="true">*</span>
            <span class="sr-only">({{ t.required }})</span>
          </label>
          <input
            id="cf-name"
            ref="nameInput"
            v-model="form.name"
            type="text"
            required
            aria-required="true"
            :aria-invalid="nameInvalid"
            autocomplete="name"
            :placeholder="t.namePlaceholder"
            :class="[inputClass, nameInvalid && invalidClass]"
          />
        </div>
        <div>
          <label for="cf-phone" class="block text-[13px] font-bold text-neutral-700 mb-1.5">
            {{ t.phone }} <span class="text-red-600" aria-hidden="true">*</span>
            <span class="sr-only">({{ t.required }})</span>
          </label>
          <input
            id="cf-phone"
            ref="phoneInput"
            v-model="form.phone"
            type="tel"
            required
            aria-required="true"
            :aria-invalid="phoneInvalid"
            autocomplete="tel"
            :placeholder="t.phonePlaceholder"
            :class="[inputClass, phoneInvalid && invalidClass]"
          />
        </div>
      </div>

      <div>
        <label for="cf-email" class="block text-[13px] font-bold text-neutral-700 mb-1.5">{{ t.email }}</label>
        <input
          id="cf-email"
          v-model="form.email"
          type="email"
          autocomplete="email"
          :placeholder="t.emailPlaceholder"
          :class="inputClass"
        />
      </div>

      <div class="grid sm:grid-cols-2 gap-5">
        <div>
          <label for="cf-service" class="block text-[13px] font-bold text-neutral-700 mb-1.5">{{ t.service }}</label>
          <select id="cf-service" v-model="form.service" :class="inputClass">
            <option value="">{{ t.servicePlaceholder }}</option>
            <option v-for="s in t.serviceOptions" :key="s" :value="s">{{ s }}</option>
          </select>
        </div>
        <div>
          <label for="cf-language" class="block text-[13px] font-bold text-neutral-700 mb-1.5">{{ t.language }}</label>
          <select id="cf-language" v-model="form.language" :class="inputClass">
            <option value="English">English</option>
            <option value="Spanish">Español</option>
          </select>
        </div>
      </div>

      <div>
        <label for="cf-message" class="block text-[13px] font-bold text-neutral-700 mb-1.5">{{ t.message }}</label>
        <textarea
          id="cf-message"
          v-model="form.message"
          rows="4"
          :placeholder="t.messagePlaceholder"
          :class="[inputClass, 'resize-none']"
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="!hydrated || status === 'sending'"
        class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-10 py-4 rounded-full shadow-cta transition-colors text-base"
      >
        <svg v-if="status === 'sending'" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
        {{ status === 'sending' ? t.sending : t.send }}
      </button>
    </template>
  </form>
</template>
