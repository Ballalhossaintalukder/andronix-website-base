<template>
  <div class="contact bg-background w-full overflow-hidden">

    <!-- ============ HERO ============ -->
    <section class="relative">
      <div class="glow glow-orange hero-glow-1"></div>
      <div class="glow glow-purple hero-glow-2"></div>
      <div class="dot-grid absolute inset-0 opacity-60"></div>

      <div class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-12 text-center">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Andronix</p>
        <h1 class="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none tracking-tight">
          Connect with <span class="text-grad">us</span>
        </h1>
        <p class="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Facing any issues? We are here to help you with all your queries and issues.
        </p>
      </div>
    </section>

    <!-- ============ CONTACT CHANNELS ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pb-24 lg:pb-28">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
        <a
          v-for="platform in contact"
          :key="platform.color"
          :href="platform.link"
          target="_blank"
          rel="noopener"
          class="group bg-card_background border border-gray-800 rounded-2xl p-7 transition duration-200 hover:-translate-y-1 hover:border-gray-700"
        >
          <div class="h-12 w-12 rounded-xl flex items-center justify-center" :class="tile(platform)">
            <div v-html="platform.icon"></div>
          </div>
          <h2 class="mt-5 text-xl font-bold text-white">{{ platform.param }}</h2>
          <p class="mt-2 text-sm text-gray-400 leading-relaxed">{{ platform.value }}</p>
          <span class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-400 group-hover:gap-2 transition-all duration-200">
            {{ platform.ctaText }}
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
          </span>
        </a>
      </div>
    </section>

  </div>
</template>

<script>
import contact from "../static/data/misc/contact.json"

export default {
  name: "contact",
  data: function () {
    return {
      contact: contact.platforms
    }
  },
  methods: {
    tile (platform) {
      return (platform.color || 'bg-primary-400').replace('400', '500') + ' bg-opacity-10'
    }
  }
}
</script>

<style scoped>
.contact {
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
  top: -160px;
  left: -120px;
}

.hero-glow-2 {
  width: 460px;
  height: 460px;
  top: -40px;
  right: -100px;
  opacity: 0.7;
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
