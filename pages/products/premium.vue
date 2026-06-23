<template>
  <div class="premium bg-background w-full overflow-hidden">

    <!-- ============ HERO ============ -->
    <section class="relative">
      <div class="glow glow-orange hero-glow-1"></div>
      <div class="glow glow-purple hero-glow-2"></div>
      <div class="dot-grid absolute inset-0 opacity-60"></div>

      <div class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 text-center">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Andronix Premium</p>
        <h1 class="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none tracking-tight">
          The Power of <span class="text-grad">Andronix</span>
        </h1>
        <p class="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Andronix Premium acts as an extension to the Andronix app. It adds features like Offline
          Distribution Installation, Andronix Commands, and much more.
        </p>

        <div class="mt-8 flex flex-wrap gap-4 justify-center">
          <button @click="$router.push('/pricing')"
                  class="bg-primary-600 hover:bg-primary-500 rounded-lg px-5 py-2.5 text-white font-bold shadow-lg hover:-translate-y-1 transition transform duration-200">
            Get Now
          </button>
          <button @click="$router.push('/checkout/buy/premium')"
                  class="bg-card_background border border-gray-700 hover:border-gray-600 rounded-lg px-5 py-2.5 text-white font-bold hover:-translate-y-1 transition transform duration-200">
            Buy Premium
          </button>
        </div>
      </div>
    </section>

    <!-- ============ FEATURES ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Andronix</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          What can I do with Andronix Premium?
        </h2>
        <p class="mt-4 text-gray-400 md:text-lg">
          Andronix Premium gives you discounts on other products across Andronix. It also gives you
          access to Andronix Commands, which helps you manage your Terminal commands and much more.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="features in premiumFeatures" :key="features.color"
             class="feature-card bg-card_background border border-gray-800 rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
          <div v-html="features.icon"></div>
          <h3 class="mt-5 text-lg font-bold text-white">{{ features.title }}</h3>
          <p class="mt-2 text-sm text-gray-400 leading-relaxed">{{ features.sub_title }}</p>
        </div>
      </div>

      <p class="mt-8 text-xs text-gray-600 text-center max-w-3xl mx-auto">
        ** Modded Discounts are only available via in-app purchases as of now. Additionally, the
        eligibility of the discount can vary due to the differences in taxes across the globe.
      </p>
    </section>

    <!-- ============ METRICS ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Metrics</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Premium Metrics
        </h2>
        <p class="mt-4 text-gray-400 md:text-lg">Take a look at where our Modded OS stands.</p>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="meta in metric" :key="meta.color"
             class="bg-card_background border border-gray-800 rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
          <div v-html="meta.icon"></div>
          <p class="mt-5 text-3xl font-extrabold text-white tracking-tight">{{ meta.value }}</p>
          <p class="mt-1 text-sm text-gray-400">{{ meta.param }}</p>
        </div>
      </div>
    </section>

    <!-- ============ ANDRONIX COMMANDS ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Commands</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Andronix Commands
        </h2>
        <p class="mt-4 text-gray-400 md:text-lg">
          Manage all your terminal commands and more from around the world. Andronix Commands comes
          bundled with Andronix Premium.
        </p>
      </div>

      <div class="mt-12">
        <img
          class="mx-auto w-11/12 md:w-3/6 lg:w-1/2"
          src="~/assets/images/screenshots/andronix-commands-app-ss.png"
          alt="Andronix Commands app screenshot"
        />
      </div>

      <div class="mt-12 flex justify-center">
        <button @click="$router.push('/products/commands')"
                class="bg-primary-600 hover:bg-primary-500 rounded-lg px-5 py-2.5 text-white font-bold shadow-lg hover:-translate-y-1 transition transform duration-200">
          Get Andronix Commands
        </button>
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Andronix</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          What people say!
        </h2>
        <p class="mt-4 text-gray-400 md:text-lg">
          Listen to what our users say about us all around the internet.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="testimonial in testimonials" :key="testimonial.quote"
             class="bg-card_background border border-gray-800 rounded-2xl p-6 flex flex-col">
          <svg class="w-8 h-8 text-primary-500 opacity-30 fill-current" viewBox="0 0 24 24"><path d="M9.5 4C5.36 4 2 7.36 2 11.5V20h8v-8H6c0-2.21 1.79-4 4-4V4H9.5zm12 0C17.36 4 14 7.36 14 11.5V20h8v-8h-4c0-2.21 1.79-4 4-4V4h-.5z"/></svg>
          <p class="mt-4 text-sm text-gray-300 leading-relaxed flex-1">{{ testimonial.quote }}</p>
          <div class="mt-5 pt-4 border-t border-gray-800">
            <p class="text-sm font-bold text-white">{{ testimonial.name }}</p>
            <p class="text-xs text-gray-500">{{ testimonial.title }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pb-28">
      <div class="relative overflow-hidden rounded-3xl border border-gray-800 bg-card_background px-8 py-16 md:py-20 text-center">
        <div class="glow glow-orange cta-glow-1"></div>
        <div class="glow glow-purple cta-glow-2"></div>
        <div class="relative">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get Andronix Premium.
          </h2>
          <p class="mt-4 text-gray-400 md:text-lg max-w-xl mx-auto">
            You get some nice perks and you also help us maintain this project.
          </p>
          <div class="mt-8 flex flex-wrap gap-4 justify-center">
            <button @click="$router.push('/checkout/buy/premium')"
                    class="bg-primary-600 hover:bg-primary-500 rounded-xl px-7 py-3 text-white font-bold shadow-lg hover:-translate-y-1 transition transform duration-200">
              Get Now
            </button>
            <NuxtLink to="/pricing"
                      class="flex items-center bg-background border border-gray-700 hover:border-gray-600 rounded-xl px-7 py-3 text-white font-bold hover:-translate-y-1 transition transform duration-200">
              View pricing
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import features from '~/static/data/features/premium-features.json'
import testimonials from '~/static/data/testimonials/premium-testimonials.json'
import metrics from '~/static/data/misc/premium-metric.json'

import meta from '~/static/seo/meta-head.json'

export default {
  head() {
    return {
      title: meta.premium.title,
      meta: [{
        hid: meta.premium.hid,
        name: meta.premium.name,
        content: meta.premium.content
      }]
    }
  },
  name: 'index',
  data: function () {
    return {
      premiumFeatures: features.features,
      metric: metrics.metadata,
      testimonials: testimonials.testimonials,
    }
  },
}
</script>

<style scoped>
.premium {
  position: relative;
}

.glow {
  position: absolute;
  border-radius: 9999px;
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
}

.glow-orange {
  background: radial-gradient(circle, rgba(255, 139, 37, 0.30), transparent 70%);
}

.glow-purple {
  background: radial-gradient(circle, rgba(124, 58, 237, 0.30), transparent 70%);
}

.hero-glow-1 {
  width: 520px;
  height: 520px;
  top: -140px;
  left: -120px;
}

.hero-glow-2 {
  width: 460px;
  height: 460px;
  top: 40px;
  right: -100px;
  opacity: 0.7;
}

.cta-glow-1 {
  width: 360px;
  height: 360px;
  top: -120px;
  left: -60px;
}

.cta-glow-2 {
  width: 360px;
  height: 360px;
  bottom: -160px;
  right: -60px;
}

.dot-grid {
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 24px 24px;
  -webkit-mask-image: radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%);
  mask-image: radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%);
}

.text-grad {
  background: linear-gradient(95deg, #ff8b25, #ff6a00);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.feature-card:hover {
  border-color: rgba(124, 58, 237, 0.4);
}
</style>
