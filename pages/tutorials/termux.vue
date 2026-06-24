<template>
  <div class="termux bg-background w-full overflow-hidden">

    <!-- ============ HERO ============ -->
    <section class="relative">
      <div class="glow glow-orange hero-glow-1"></div>
      <div class="glow glow-purple hero-glow-2"></div>
      <div class="dot-grid absolute inset-0 opacity-60"></div>

      <div class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16 text-center">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Tutorial</p>
        <h1 class="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none tracking-tight">
          Install Linux with <span class="text-grad">Termux</span>
        </h1>
        <p class="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Andronix runs your Linux distribution inside Termux — a free, open-source terminal emulator for Android.
          Set up Termux once, paste your Andronix command, and you're running real Linux. No root required.
        </p>

        <div class="mt-8 flex flex-wrap gap-4 justify-center">
          <a href="https://f-droid.org/en/packages/com.termux/" target="_blank" rel="noopener"
             class="flex items-center gap-2.5 bg-primary-600 hover:bg-primary-500 rounded-lg px-5 py-2.5 shadow-lg hover:-translate-y-1 transition transform duration-200">
            <span class="text-white font-bold text-sm">Get Termux on F-Droid</span>
          </a>
          <a href="https://play.andronix.app" target="_blank" rel="noopener"
             class="flex items-center gap-2.5 bg-card_background border border-gray-700 hover:border-gray-600 rounded-lg px-5 py-2.5 hover:-translate-y-1 transition transform duration-200">
            <img src="~assets/images/icons/play-store.svg" class="w-4 h-auto" alt="">
            <span class="text-white font-bold text-sm">Get Andronix</span>
          </a>
        </div>

        <!-- Trust chips -->
        <div class="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm text-gray-500">
          <span class="flex items-center gap-2"><svg class="w-4 h-4 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> No root required</span>
          <span class="flex items-center gap-2"><svg class="w-4 h-4 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Free &amp; open source</span>
          <span class="flex items-center gap-2"><svg class="w-4 h-4 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Works on Android</span>
        </div>
      </div>
    </section>

    <!-- ============ WHY TERMUX ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <div class="bg-card_background border border-gray-800 rounded-2xl p-7 md:p-10 max-w-3xl mx-auto">
        <h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight">What is Termux?</h2>
        <p class="mt-4 text-gray-400 leading-relaxed">
          Termux is an Android terminal emulator and Linux environment that runs without root. Andronix uses
          Termux to download, configure, and launch your chosen distribution inside a sandboxed PRoot environment —
          which is why you install Termux first, then run your Andronix command inside it.
        </p>
        <p class="mt-4 text-gray-400 leading-relaxed">
          We recommend installing Termux from
          <a href="https://f-droid.org/en/packages/com.termux/" target="_blank" rel="noopener"
             class="text-primary-400 hover:text-primary-300 font-semibold transition duration-200">F-Droid</a>
          or
          <a href="https://github.com/termux/termux-app" target="_blank" rel="noopener"
             class="text-primary-400 hover:text-primary-300 font-semibold transition duration-200">GitHub</a>,
          as the Play Store build is no longer maintained.
        </p>
      </div>
    </section>

    <!-- ============ STEPS ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">How it works</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Up and running in four steps
        </h2>
        <p class="mt-4 text-gray-400 md:text-lg">A guided flow — install, copy, configure, connect.</p>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="(step, i) in steps" :key="step.title"
             class="relative bg-card_background border border-gray-800 rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
          <span class="absolute top-5 right-5 text-5xl font-extrabold text-white opacity-5">{{ i + 1 }}</span>
          <div class="h-12 w-12 rounded-xl flex items-center justify-center text-white" :class="stepColor(i)">
            <div v-html="step.icon"></div>
          </div>
          <h3 class="mt-5 text-lg font-bold text-white">{{ step.title }}</h3>
          <p class="mt-2 text-sm text-gray-400 leading-relaxed">{{ step.sub_title }}</p>
        </div>
      </div>
    </section>

    <!-- ============ DETAILED CHECKLIST ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Step by step</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Setting up Termux
        </h2>
      </div>

      <div class="mt-12 max-w-2xl mx-auto bg-card_background border border-gray-800 rounded-2xl p-7 md:p-8">
        <ol class="space-y-7">
          <li v-for="(item, i) in checklist" :key="item.title" class="flex gap-4">
            <span class="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold"
                  :class="i === checklist.length - 1
                    ? 'bg-green-500 bg-opacity-10 text-green-400'
                    : 'bg-primary-500 bg-opacity-10 text-primary-400'">
              {{ i + 1 }}
            </span>
            <div>
              <h3 class="text-base font-bold text-white leading-tight">{{ item.title }}</h3>
              <p class="mt-1 text-sm text-gray-400 leading-relaxed">{{ item.description }}</p>
            </div>
          </li>
        </ol>
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
            Install Andronix, pick a distribution, and paste your command into Termux to get started.
          </p>
          <div class="mt-8 flex flex-wrap gap-4 justify-center">
            <a href="https://play.andronix.app" target="_blank" rel="noopener"
               class="flex items-center gap-3 bg-primary-600 hover:bg-primary-500 rounded-lg px-7 py-3 shadow-lg hover:-translate-y-1 transition transform duration-200">
              <img src="~assets/images/icons/play-store.svg" class="w-5 h-auto" alt="">
              <span class="text-white font-bold">Download on Google Play</span>
            </a>
            <a href="https://docs.andronix.app" target="_blank" rel="noopener"
               class="flex items-center bg-background border border-gray-700 hover:border-gray-600 rounded-lg px-7 py-3 text-white font-bold hover:-translate-y-1 transition transform duration-200">
              Read the docs
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import andronixSteps from '../../static/data/misc/andronix-steps.json'

export default {
  name: 'TermuxTutorial',
  data () {
    return {
      steps: andronixSteps.steps,
      checklist: [
        {
          title: 'Install Termux',
          description: 'Download Termux from F-Droid or GitHub and install it on your Android device.'
        },
        {
          title: 'Open Termux',
          description: 'Launch Termux and wait for it to finish setting up its base packages.'
        },
        {
          title: 'Copy your Andronix command',
          description: 'In the Andronix app, choose a distribution and copy the generated install command.'
        },
        {
          title: 'Paste and run',
          description: 'Paste the command into Termux and press enter to start the installation.'
        },
        {
          title: 'Start your distro',
          description: 'Once installed, your Linux distribution is ready to use directly from Termux.'
        }
      ]
    }
  },
  methods: {
    stepColor (i) {
      return ['bg-primary-600', 'bg-blue-500', 'bg-purple-500', 'bg-green-500'][i % 4]
    }
  },
  head () {
    return {
      title: 'Install Linux with Termux | Andronix',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Learn how to install a Linux distribution on Android using Termux and Andronix — no root required.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.termux {
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
</style>
