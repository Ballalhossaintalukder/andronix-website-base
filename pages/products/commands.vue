<template>
  <div class="commands bg-background w-full overflow-hidden">

    <!-- ============ HERO ============ -->
    <section class="relative">
      <div class="glow glow-orange hero-glow-1"></div>
      <div class="glow glow-purple hero-glow-2"></div>
      <div class="dot-grid absolute inset-0 opacity-60"></div>

      <div class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-16 lg:pt-28 pb-20 text-center">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Andronix Commands</p>
        <h1 class="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none tracking-tight">
          Sync your <span class="text-grad">world</span>.
        </h1>
        <p class="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Andronix Commands is a one-stop solution for all your Terminal needs. Save and sync
          commands on the go; just copy and paste.
        </p>
        <div class="mt-8 flex flex-wrap gap-4 justify-center">
          <button
            @click="$router.push('/pricing')"
            class="bg-primary-600 hover:bg-primary-500 rounded-lg px-5 py-2.5 text-white font-bold shadow-lg hover:-translate-y-1 transition transform duration-200"
          >
            Get it with Premium
          </button>
        </div>
      </div>
    </section>

    <!-- ============ WHAT IS IT ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Commands</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          What is Andronix Commands?
        </h2>
        <p class="mt-4 text-gray-400 md:text-lg">
          Andronix Commands is a handy and intuitive tool developed by Andronix which cures the
          problem of remembering all the commands while you use a Terminal or anything. AndroNix
          Commands lets you sync your commands and access them from anywhere in the world on any
          internet-connected device, right in a browser, phone, or just your command line.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div v-for="(f, i) in app" :key="f.color"
             class="feature-card bg-card_background border border-gray-800 rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
          <div :class="featureColor(i)">
            <div v-html="f.icon"></div>
          </div>
          <h3 class="mt-5 text-lg font-bold text-white">{{ f.title }}</h3>
          <p class="mt-2 text-sm text-gray-400 leading-relaxed">{{ f.sub_title }}</p>
        </div>
      </div>
    </section>

    <!-- ============ GET YOUR COMMANDS ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Anywhere</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Get your Commands.
        </h2>
        <p class="mt-4 text-gray-400 md:text-lg">
          Use Andronix Commands within Andronix, use our web app, or be the terminal person you
          are and have it right where you're working, i.e., on your terminal application.
        </p>
      </div>

      <div class="mt-12 flex justify-center">
        <img
          class="w-11/12 md:w-3/6 lg:w-1/2 rounded-2xl"
          src="~/assets/images/screenshots/andronix-commands-app-ss.png"
          alt="Andronix Commands app screenshot"
        />
      </div>

      <!-- Platform cards -->
      <div class="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <a href="#"
           class="group flex items-start gap-4 bg-card_background border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
          <div class="h-12 w-12 shrink-0 rounded-xl bg-background border border-gray-800 flex items-center justify-center">
            <svg class="w-7 text-green-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M17.523 15.341a1 1 0 010-1.999 1 1 0 010 2m-11.046 0a1 1 0 010-2 1 1 0 010 2m11.405-6.02l1.997-3.46a.416.416 0 00-.152-.567.416.416 0 00-.568.152L17.137 8.95c-1.547-.706-3.284-1.1-5.137-1.1s-3.59.394-5.137 1.1L4.841 5.447a.416.416 0 00-.568-.152.416.416 0 00-.152.567l1.997 3.46C2.688 11.186.343 14.658 0 18.76h24c-.344-4.102-2.69-7.574-6.119-9.44"
              />
            </svg>
          </div>
          <div>
            <p class="text-lg font-bold text-white">Android</p>
            <p class="mt-1 text-sm text-gray-400 leading-relaxed">Get your commands within Andronix App.</p>
          </div>
        </a>

        <a target="_blank" rel="noopener" href="https://web.andronix.app"
           class="group flex items-start gap-4 bg-card_background border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
          <div class="h-12 w-12 shrink-0 rounded-xl bg-background border border-gray-800 flex items-center justify-center">
            <svg class="w-7 text-blue-400 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
          </div>
          <div>
            <p class="text-lg font-bold text-white">Web</p>
            <p class="mt-1 text-sm text-gray-400 leading-relaxed">On the web? Get your commands right there!</p>
          </div>
        </a>

        <a target="_blank" rel="noopener" href="https://www.npmjs.com/package/andronix-command-cli"
           class="group flex items-start gap-4 bg-card_background border border-gray-800 hover:border-gray-700 rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
          <div class="h-12 w-12 shrink-0 rounded-xl bg-background border border-gray-800 flex items-center justify-center">
            <svg class="w-7 text-purple-400 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p class="text-lg font-bold text-white">Command Line</p>
            <p class="mt-1 text-sm text-gray-400 leading-relaxed">Right in your terminal app. No need to leave the terminal.</p>
          </div>
        </a>
      </div>
    </section>

    <!-- ============ HOW DOES IT WORK ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">How it works</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          How does it work?
        </h2>
        <p class="mt-4 text-gray-400 md:text-lg">
          Using Andronix Commands is as easy as it can get. You just need to enter the details,
          and we'll handle the syncing. Everything is real-time and hence accessible on all your
          devices.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="(step, i) in steps" :key="step.color"
             class="relative bg-card_background border border-gray-800 rounded-2xl p-6">
          <span class="absolute top-5 right-5 text-5xl font-extrabold text-white opacity-5">{{ step.step }}</span>
          <div class="h-12 w-12 rounded-xl flex items-center justify-center text-white" :class="stepColor(i)">
            <div v-html="step.icon"></div>
          </div>
          <h3 class="mt-5 text-lg font-bold text-white">{{ step.title }}</h3>
          <p class="mt-2 text-sm text-gray-400 leading-relaxed">{{ step.sub_title }}</p>
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
            <button
              @click="$router.push('/checkout/buy/premium')"
              class="bg-primary-600 hover:bg-primary-500 rounded-xl px-7 py-3 text-white font-bold shadow-lg hover:-translate-y-1 transition transform duration-200"
            >
              Get now
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
import features from '~/static/data/features/commands-feature.json'
import steps from '~/static/data/misc/command-steps.json'

import meta from '~/static/seo/meta-head.json'

export default {
  head () {
    return {
      title: meta.commands.title,
      meta: [{
        hid: meta.commands.hid,
        name: meta.commands.name,
        content: meta.commands.content
      }]
    }
  },
  name: 'index',
  data: function () {
    return {
      app: features.features,
      steps: steps.steps,
    }
  },
  methods: {
    stepColor (i) {
      return ['bg-primary-600', 'bg-blue-500', 'bg-purple-500', 'bg-green-500'][i % 4]
    },
    featureColor (i) {
      return ['text-primary-400', 'text-blue-400', 'text-purple-400', 'text-green-400'][i % 4]
    }
  }
}
</script>

<style scoped>
.commands {
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
