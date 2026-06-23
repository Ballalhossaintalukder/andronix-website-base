<template>
  <div class="home bg-background w-full overflow-hidden">

    <!-- ============ HERO ============ -->
    <section class="relative">
      <div class="glow glow-orange hero-glow-1"></div>
      <div class="glow glow-purple hero-glow-2"></div>
      <div class="dot-grid absolute inset-0 opacity-60"></div>

      <div class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-10 lg:pt-20 pb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <!-- Copy -->
          <div class="text-center lg:text-left">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none tracking-tight">
              Learn <span class="text-grad">Linux</span><br class="hidden md:block"> on your phone.
            </h1>

            <p class="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Andronix helps students, developers, and learners install Ubuntu, Debian, and other
              educational Linux distributions on their Android device — in a sandboxed, no-root environment.
            </p>

            <div class="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="https://play.andronix.app" target="_blank" rel="noopener"
                 class="group flex items-center gap-2.5 bg-primary-600 hover:bg-primary-500 rounded-lg px-4 py-2 shadow-lg hover:-translate-y-1 transition transform duration-200">
                <img src="~assets/images/icons/play-store.svg" class="w-4 h-auto" alt="">
                <div class="text-left leading-tight">
                  <span class="block text-white text-opacity-80 text-xs font-medium">Get the app on</span>
                  <span class="block text-white font-bold text-sm">Google Play</span>
                </div>
              </a>
              <a href="https://github.com/AndronixApp" target="_blank" rel="noopener"
                 class="flex items-center gap-2.5 bg-card_background border border-gray-700 hover:border-gray-600 rounded-lg px-4 py-2 hover:-translate-y-1 transition transform duration-200">
                <img src="~assets/images/icons/github.svg" class="w-4" alt="">
                <div class="text-left leading-tight">
                  <span class="block text-gray-400 text-xs font-medium">Know more on</span>
                  <span class="block text-white font-bold text-sm">GitHub</span>
                </div>
              </a>
            </div>

            <!-- Trust chips -->
            <div class="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-gray-500">
              <span class="flex items-center gap-2"><svg class="w-4 h-4 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> No root required</span>
              <span class="flex items-center gap-2"><svg class="w-4 h-4 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Sandboxed (PRoot)</span>
              <span class="flex items-center gap-2"><svg class="w-4 h-4 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Open source</span>
            </div>
          </div>

          <!-- Phone image -->
          <div class="relative flex justify-center lg:justify-end">
            <div class="glow glow-purple phone-glow"></div>
            <img class="relative w-full max-w-md lg:max-w-xl object-contain"
                 src="~assets/images/background/final_edited.svg" alt="Andronix running Linux on Android">
          </div>
        </div>
      </div>
    </section>

    <!-- ============ DISTRO SHOWCASE ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Distributions</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Run real Linux distributions
        </h2>
        <p class="mt-4 text-gray-400 md:text-lg">
          Pick from official distros and Andronix Modded OS — the same selection you see inside the app.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <div v-for="d in distros" :key="d.name"
             class="distro-card group bg-card_background border border-gray-800 rounded-xl p-4 transition duration-200 hover:-translate-y-1">
          <div class="flex items-start justify-between">
            <div class="h-9 w-9 rounded-lg bg-background flex items-center justify-center border border-gray-800">
              <img :src="d.img" class="h-5 w-5 object-contain" :alt="d.name">
            </div>
            <span class="mt-1 rounded-full px-2 py-0.5 text-xs font-semibold bg-opacity-10" :class="pillClass(d.level)">
              {{ pillText(d.level) }}
            </span>
          </div>
          <h3 class="mt-3 text-base font-bold text-white leading-tight">{{ d.name }}</h3>
          <p class="text-xs text-gray-500">{{ d.vendor }}</p>
        </div>
      </div>

      <p class="mt-6 text-xs text-gray-600 text-center">
        Kali Linux is provided for cybersecurity education and authorized security testing.
      </p>
    </section>

    <!-- ============ HOW IT WORKS ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">How it works</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Up and running in four steps
        </h2>
        <p class="mt-4 text-gray-400 md:text-lg">A guided flow with an intuitive UI — copy, configure, connect, done.</p>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="(step, i) in steps" :key="step.title"
             class="relative bg-card_background border border-gray-800 rounded-2xl p-6">
          <span class="absolute top-5 right-5 text-5xl font-extrabold text-white opacity-5">{{ i + 1 }}</span>
          <div class="h-12 w-12 rounded-xl flex items-center justify-center text-white" :class="stepColor(i)">
            <div v-html="step.icon"></div>
          </div>
          <h3 class="mt-5 text-lg font-bold text-white">{{ step.title }}</h3>
          <p class="mt-2 text-sm text-gray-400 leading-relaxed">{{ step.sub_title }}</p>
        </div>
      </div>
    </section>

    <!-- ============ FEATURES ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Why Andronix</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          A full Linux toolkit in your pocket
        </h2>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="(f, i) in features" :key="f.title"
             class="feature-card bg-card_background border border-gray-800 rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
          <div class="text-primary-400" :class="featureColor(i)">
            <div v-html="f.icon"></div>
          </div>
          <h3 class="mt-5 text-lg font-bold text-white">{{ f.title }}</h3>
          <p class="mt-2 text-sm text-gray-400 leading-relaxed">{{ f.sub_title }}</p>
        </div>
      </div>
    </section>

    <!-- ============ USE CASES ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Use cases</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Who is Andronix for?</h2>
        <p class="mt-4 text-gray-400 md:text-lg">
          From classrooms to side projects — learners and builders use Andronix to explore Linux anywhere.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="u in useCases" :key="u.title"
             class="bg-card_background border border-gray-800 rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
          <h3 class="text-lg font-bold text-white">{{ u.title }}</h3>
          <p class="mt-2 text-sm text-gray-400 leading-relaxed">{{ u.description }}</p>
        </div>
      </div>
    </section>

    <!-- ============ PRODUCTS ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Products</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Go further with Andronix</h2>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        <NuxtLink v-for="p in products" :key="p.product" :to="p.link"
                  class="group bg-card_background border border-gray-800 rounded-2xl p-7 transition duration-200 hover:-translate-y-1 hover:border-gray-700">
          <div class="flex items-center gap-3">
            <h3 class="text-xl font-bold text-white">{{ p.product }}</h3>
            <span v-if="p.isPaid" class="rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary-500 bg-opacity-10 text-primary-400">Paid</span>
            <span v-else class="rounded-full px-2.5 py-0.5 text-xs font-semibold bg-green-500 bg-opacity-10 text-green-400">Free</span>
          </div>
          <p class="mt-3 text-sm text-gray-400 leading-relaxed">{{ p.description }}</p>
          <span class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-400 group-hover:gap-2 transition-all duration-200">
            Learn more
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
          </span>
        </NuxtLink>
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Testimonials</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Loved by learners worldwide</h2>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="t in testimonials" :key="t.name"
             class="bg-card_background border border-gray-800 rounded-2xl p-6 flex flex-col">
          <svg class="w-8 h-8 text-primary-500 opacity-30 fill-current" viewBox="0 0 24 24"><path d="M9.5 4C5.36 4 2 7.36 2 11.5V20h8v-8H6c0-2.21 1.79-4 4-4V4H9.5zm12 0C17.36 4 14 7.36 14 11.5V20h8v-8h-4c0-2.21 1.79-4 4-4V4h-.5z"/></svg>
          <p class="mt-4 text-sm text-gray-300 leading-relaxed flex-1">{{ t.quote }}</p>
          <div class="mt-5 pt-4 border-t border-gray-800">
            <p class="text-sm font-bold text-white">{{ t.name }}</p>
            <p class="text-xs text-gray-500">{{ t.platform }}</p>
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
            Ready to run Linux on your phone?
          </h2>
          <p class="mt-4 text-gray-400 md:text-lg max-w-xl mx-auto">
            Install Andronix from Google Play and spin up your first distribution in minutes.
          </p>
          <div class="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="https://play.andronix.app" target="_blank" rel="noopener"
               class="flex items-center gap-3 bg-primary-600 hover:bg-primary-500 rounded-xl px-7 py-3 shadow-lg hover:-translate-y-1 transition transform duration-200">
              <img src="~assets/images/icons/play-store.svg" class="w-5 h-auto" alt="">
              <span class="text-white font-bold">Download on Google Play</span>
            </a>
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
import features from '../static/data/features/andronix-features.json'
import products from '../static/data/misc/products.json'
import mainTestimonials from '../static/data/testimonials/main-testimonials.json'
import andronixSteps from '../static/data/misc/andronix-steps.json'

export default {
  name: 'Home',
  data () {
    return {
      features: features.features,
      products: products.products,
      testimonials: mainTestimonials.testimonials,
      steps: andronixSteps.steps,
      distros: [
        {name: 'Ubuntu', vendor: 'Canonical', img: '/static_images/distro/ubuntu.svg', level: 'beginner'},
        {name: 'Debian', vendor: 'The Debian Project', img: '/static_images/distro/debian.svg', level: 'beginner'},
        {name: 'Manjaro', vendor: 'Manjaro Team', img: '/static_images/distro/manjaro.svg', level: 'beginner'},
        {name: 'Fedora', vendor: 'Red Hat', img: '/static_images/distro/fedora.svg', level: 'intermediate'},
        {name: 'Void', vendor: 'Void Linux', img: '/static_images/distro/void.svg', level: 'advanced'},
        {name: 'Alpine', vendor: 'Alpine Linux', img: '/static_images/distro/alpine.svg', level: 'advanced'},
        {name: 'Kali', vendor: 'OffSec', img: '/static_images/distro/kali.svg', level: 'security'},
        {name: 'Arch', vendor: 'Arch Linux', img: '/static_images/distro/arch.svg', level: 'advanced'}
      ],
      useCases: [
        {title: 'CS students', description: 'Learn Linux, the command line, and shell scripting for college coursework — right on your phone.'},
        {title: 'Developers', description: 'Prototype, test, and run developer tools on the go without carrying a laptop.'},
        {title: 'Educators', description: 'Teach shell scripting and open-source software with an accessible, low-cost setup for every learner.'},
        {title: 'Hobbyists', description: 'Explore distributions, desktop environments, and open-source software for fun and curiosity.'}
      ]
    }
  },
  methods: {
    pillText (level) {
      return {
        beginner: 'Beginner',
        intermediate: 'Intermediate',
        advanced: 'Advanced',
        security: 'Security'
      }[level]
    },
    pillClass (level) {
      return {
        beginner: 'text-green-400 bg-green-500',
        intermediate: 'text-blue-400 bg-blue-500',
        advanced: 'text-purple-400 bg-purple-500',
        security: 'text-yellow-400 bg-yellow-500'
      }[level]
    },
    stepColor (i) {
      return ['bg-primary-600', 'bg-blue-500', 'bg-purple-500', 'bg-green-500'][i % 4]
    },
    featureColor (i) {
      return ['text-primary-400', 'text-blue-400', 'text-purple-400', 'text-green-400'][i % 4]
    }
  }
}
</script>

<style>
body {
  background-color: #0e0f13;
  max-width: 100%;
  overflow-x: hidden;
  height: auto;
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

.home {
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

.phone-glow {
  width: 380px;
  height: 380px;
  top: 10%;
  left: 20%;
  opacity: 0.6;
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

.distro-card:hover {
  border-color: rgba(255, 139, 37, 0.4);
}

.feature-card:hover {
  border-color: rgba(124, 58, 237, 0.4);
}
</style>
