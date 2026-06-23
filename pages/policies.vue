<template>
  <div class="bg-background w-full overflow-hidden">

    <!-- ============ HEADER ============ -->
    <section class="relative">
      <div class="glow glow-orange policies-glow-1"></div>
      <div class="glow glow-purple policies-glow-2"></div>
      <div class="dot-grid absolute inset-0 opacity-60"></div>

      <div class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-12">
        <div class="text-center max-w-2xl mx-auto">
          <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Andronix</p>
          <h1 class="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Policies &amp; <span class="text-grad">Terms</span>
          </h1>
          <p class="mt-4 text-gray-400 md:text-lg">
            Explore our policies about Andronix.
          </p>
        </div>
      </div>
    </section>

    <!-- ============ POLICY CARDS ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pb-28">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">

        <NuxtLink v-for="p in policies" :key="p.title" :to="p.link"
                  class="group bg-card_background border border-gray-800 rounded-2xl p-7 transition duration-200 hover:-translate-y-1 hover:border-gray-700 flex flex-col">
          <div class="h-12 w-12 rounded-xl bg-background flex items-center justify-center border border-gray-800" :class="p.iconColor">
            <svg
              class="w-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="p.icon" />
            </svg>
          </div>
          <h3 class="mt-5 text-xl font-bold text-white">{{ p.title }}</h3>
          <p class="mt-2 text-sm text-gray-400 leading-relaxed flex-1">{{ p.desc }}</p>
          <span class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-400 group-hover:gap-2 transition-all duration-200">
            Explore
            <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
          </span>
        </NuxtLink>

      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'policies',
  data () {
    return {
      policies: [
        {
          title: 'Privacy Policy',
          link: '/legal/privacy-policy',
          desc: 'Know how we handle your data here at Andronix.',
          iconColor: 'text-green-400',
          icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
        },
        {
          title: 'Terms',
          link: '/legal/terms-conditions',
          desc: 'Know the terms you accept when you sign up.',
          iconColor: 'text-blue-400',
          icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
        },
        {
          title: 'Refund',
          link: '/legal/refund-policy',
          desc: "Know when you're eligible for a refund.",
          iconColor: 'text-primary-400',
          icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
        }
      ]
    }
  }
}
</script>

<style scoped>
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

.policies-glow-1 {
  width: 460px;
  height: 460px;
  top: -160px;
  left: -120px;
}

.policies-glow-2 {
  width: 420px;
  height: 420px;
  top: -60px;
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
