<script setup lang="ts">
import { reactive, ref } from 'vue'

// Replace YOUR_FORM_ID with your Formspree form ID from formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
  language: 'English',
})

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

const SERVICES = [
  'Blood Pressure Management',
  'Diabetes Management',
  "Women's Primary Health Care",
  'Immigration Medical Exam (I-693)',
  'Mental Health Screening',
  'Child Health Exams & Immunizations',
  'Weight Loss & Metabolic Services',
  'Annual & Sports Physicals',
  'Vaccines & Immunizations',
  'Telemedicine',
  'General / Other',
]

async function handleSubmit() {
  if (!form.name || !form.phone) return

  status.value = 'sending'
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    })
    status.value = response.ok ? 'success' : 'error'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" novalidate class="space-y-5">
    <div v-if="status === 'success'" class="bg-green-50 border border-green-200 text-green-800 rounded-xl p-5 text-sm font-medium">
      ✓ Thank you! We'll contact you within 1 business day.
    </div>

    <div v-if="status === 'error'" class="bg-red-50 border border-red-200 text-red-800 rounded-xl p-5 text-sm font-medium">
      Something went wrong. Please call us at <a href="tel:+14059491552" class="underline">(405) 949-1552</a>.
    </div>

    <template v-if="status !== 'success'">
      <div class="grid sm:grid-cols-2 gap-5">
        <div>
          <label for="cf-name" class="block text-sm font-semibold text-neutral-700 mb-1.5">Full Name <span class="text-red-500">*</span></label>
          <input
            id="cf-name"
            v-model="form.name"
            type="text"
            required
            autocomplete="name"
            placeholder="Jane Smith"
            class="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition"
          />
        </div>
        <div>
          <label for="cf-phone" class="block text-sm font-semibold text-neutral-700 mb-1.5">Phone Number <span class="text-red-500">*</span></label>
          <input
            id="cf-phone"
            v-model="form.phone"
            type="tel"
            required
            autocomplete="tel"
            placeholder="(405) 555-0100"
            class="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition"
          />
        </div>
      </div>

      <div>
        <label for="cf-email" class="block text-sm font-semibold text-neutral-700 mb-1.5">Email Address</label>
        <input
          id="cf-email"
          v-model="form.email"
          type="email"
          autocomplete="email"
          placeholder="jane@example.com"
          class="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition"
        />
      </div>

      <div class="grid sm:grid-cols-2 gap-5">
        <div>
          <label for="cf-service" class="block text-sm font-semibold text-neutral-700 mb-1.5">Service of Interest</label>
          <select
            id="cf-service"
            v-model="form.service"
            class="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition"
          >
            <option value="">Select a service…</option>
            <option v-for="s in SERVICES" :key="s" :value="s">{{ s }}</option>
          </select>
        </div>
        <div>
          <label for="cf-language" class="block text-sm font-semibold text-neutral-700 mb-1.5">Preferred Language</label>
          <select
            id="cf-language"
            v-model="form.language"
            class="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition"
          >
            <option value="English">English</option>
            <option value="Spanish">Español</option>
          </select>
        </div>
      </div>

      <div>
        <label for="cf-message" class="block text-sm font-semibold text-neutral-700 mb-1.5">Message</label>
        <textarea
          id="cf-message"
          v-model="form.message"
          rows="4"
          placeholder="Tell us how we can help…"
          class="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm resize-none transition"
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="status === 'sending'"
        class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-10 py-4 rounded-full transition-colors text-base"
      >
        <svg v-if="status === 'sending'" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
        {{ status === 'sending' ? 'Sending…' : 'Send Message' }}
      </button>
    </template>
  </form>
</template>
