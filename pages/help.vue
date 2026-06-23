<template>
  <div class="help bg-background w-full overflow-hidden">

    <!-- ============ HELP CHANNELS ============ -->
    <section class="relative">
      <div class="glow glow-orange help-glow-1"></div>
      <div class="glow glow-purple help-glow-2"></div>
      <div class="dot-grid absolute inset-0 opacity-60"></div>

      <div class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-20 lg:pb-24">
        <div class="text-center max-w-2xl mx-auto">
          <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Support</p>
          <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get help fast
          </h2>
          <p class="mt-4 text-gray-400 md:text-lg">
            We are here to help you through our community channels. Please stay patient while waiting
            for an answer and read the respective rules of the platform.
          </p>
        </div>

        <div class="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">

          <!-- Discord -->
          <a href="https://chat.andronix.app" target="_blank" rel="noopener"
             class="group bg-card_background border border-gray-800 rounded-2xl p-7 transition duration-200 hover:-translate-y-1 hover:border-gray-700">
            <div class="h-12 w-12 rounded-xl flex items-center justify-center bg-purple-500 bg-opacity-10 text-purple-400">
              <svg class="w-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 class="mt-5 text-xl font-bold text-white">Discord</h3>
            <p class="mt-2 text-sm text-gray-400 leading-relaxed">Join a community of over 8500+ Andronix users on Discord.</p>
            <span class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-400 group-hover:gap-2 transition-all duration-200">
              Join Discord
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </span>
          </a>

          <!-- Forum -->
          <a href="https://forum.andronix.app" target="_blank" rel="noopener"
             class="group bg-card_background border border-gray-800 rounded-2xl p-7 transition duration-200 hover:-translate-y-1 hover:border-gray-700">
            <div class="h-12 w-12 rounded-xl flex items-center justify-center bg-blue-500 bg-opacity-10 text-blue-400">
              <svg class="w-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 class="mt-5 text-xl font-bold text-white">Andronix Forum</h3>
            <p class="mt-2 text-sm text-gray-400 leading-relaxed">Join or search through the forum for the most common questions.</p>
            <span class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-400 group-hover:gap-2 transition-all duration-200">
              Open Forum
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- ============ FAQ ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pb-28">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">FAQ</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Frequently asked questions
        </h2>
        <p class="mt-4 text-gray-400 md:text-lg">Quick answers to the questions we hear most often.</p>
      </div>

      <div class="mt-14 max-w-screen-md mx-auto space-y-4">
        <div v-for="faq in faqs" :key="faq.question"
             class="bg-card_background border border-gray-800 rounded-2xl p-6 transition duration-200 hover:-translate-y-1 hover:border-gray-700">
          <h3 class="text-lg font-bold text-white">{{ faq.question }}</h3>
          <p class="mt-2 text-gray-400 leading-relaxed">{{ faq.answer }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import meta from '~/static/seo/meta-head.json'

export default {
  head () {
    return {
      title: meta.help.title,
      meta: [{
        hid: meta.help.hid,
        name: meta.help.name,
        content: meta.help.content
      }]
    }
  },
  name: "help",
  data () {
    return {
      faqs: [
        {
          question: "Is Andronix a hacking app?",
          answer: "No. Andronix installs official Linux distributions in a sandboxed environment using PRoot. It is an educational tool for learning Linux, development, and open-source software — not a tool for hacking or bypassing device security."
        },
        {
          question: "Does Andronix require root?",
          answer: "No. Andronix runs entirely without root access. Your device stays unmodified and secure."
        },
        {
          question: "Is Kali Linux on Andronix for hacking?",
          answer: "Kali Linux is used by cybersecurity students and professionals worldwide for ethical, authorized security testing and learning. On Andronix it is provided for legitimate educational and professional use only."
        }
      ]
    }
  }
};
</script>

<style scoped>
.help {
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

.help-glow-1 {
  width: 460px;
  height: 460px;
  top: -140px;
  left: -120px;
}

.help-glow-2 {
  width: 420px;
  height: 420px;
  top: 0;
  right: -100px;
  opacity: 0.7;
}

.dot-grid {
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 24px 24px;
  -webkit-mask-image: radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%);
  mask-image: radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%);
}
</style>
