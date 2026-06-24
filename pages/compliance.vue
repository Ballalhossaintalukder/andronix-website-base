<template>
  <div class="compliance bg-background w-full overflow-hidden">

    <!-- ============ HERO ============ -->
    <section class="relative">
      <div class="glow glow-orange hero-glow-1"></div>
      <div class="glow glow-purple hero-glow-2"></div>
      <div class="dot-grid absolute inset-0 opacity-60"></div>

      <div class="relative max-w-screen-lg mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-10">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Trust &amp; Safety</p>
        <h1 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Compliance &amp; Safety
        </h1>
        <p class="mt-4 text-gray-400 md:text-lg leading-relaxed max-w-2xl">
          Andronix is an educational tool that helps students, developers, and learners run Linux distributions on
          their Android devices. We take safety, lawful use, and platform compliance seriously. This page summarises
          how Andronix works and the standards it follows.
        </p>
      </div>
    </section>

    <!-- ============ BODY ============ -->
    <section class="relative max-w-screen-lg mx-auto px-6 lg:px-10 pb-24 space-y-6">

      <!-- How Andronix works -->
      <div class="bg-card_background border border-gray-800 rounded-2xl p-6 md:p-8">
        <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">How Andronix works</h2>
        <ul class="mt-5 space-y-4">
          <li class="flex items-start gap-3 text-gray-400 leading-relaxed">
            <svg class="mt-1 w-5 h-5 flex-shrink-0 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span><span class="text-white font-bold">No root required.</span> Andronix runs entirely without root access on your Android device.</span>
          </li>
          <li class="flex items-start gap-3 text-gray-400 leading-relaxed">
            <svg class="mt-1 w-5 h-5 flex-shrink-0 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span><span class="text-white font-bold">Sandboxed environment.</span> Linux distributions run in a sandboxed environment using PRoot, isolated from the rest of your device.</span>
          </li>
          <li class="flex items-start gap-3 text-gray-400 leading-relaxed">
            <svg class="mt-1 w-5 h-5 flex-shrink-0 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span><span class="text-white font-bold">Not a hacking tool.</span> Andronix cannot bypass Android security. It does not provide any capability to compromise your device or other systems.</span>
          </li>
        </ul>
      </div>

      <!-- Standards we follow -->
      <div class="bg-card_background border border-gray-800 rounded-2xl p-6 md:p-8">
        <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">Standards we follow</h2>
        <ul class="mt-5 space-y-4">
          <li class="flex items-start gap-3 text-gray-400 leading-relaxed">
            <svg class="mt-1 w-5 h-5 flex-shrink-0 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span>Compliant with the Google Play Developer Program Policies.</span>
          </li>
          <li class="flex items-start gap-3 text-gray-400 leading-relaxed">
            <svg class="mt-1 w-5 h-5 flex-shrink-0 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span>Compliant with India's Digital Personal Data Protection Act, 2023. See our
              <NuxtLink to="/legal/privacy-policy" class="text-primary-400 hover:text-primary-300 font-medium transition duration-200">Privacy Policy</NuxtLink>.</span>
          </li>
          <li class="flex items-start gap-3 text-gray-400 leading-relaxed">
            <svg class="mt-1 w-5 h-5 flex-shrink-0 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span>Governed by our <NuxtLink to="/legal/terms-conditions" class="text-primary-400 hover:text-primary-300 font-medium transition duration-200">Terms &amp; Conditions</NuxtLink>, including an Acceptable Use policy.</span>
          </li>
        </ul>
      </div>

      <!-- Responsible use -->
      <div class="bg-card_background border border-gray-800 rounded-2xl p-6 md:p-8">
        <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">Responsible use</h2>
        <ul class="mt-5 space-y-4">
          <li class="flex items-start gap-3 text-gray-400 leading-relaxed">
            <svg class="mt-1 w-5 h-5 flex-shrink-0 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span>Andronix is not to be used to violate any platform terms or applicable laws.</span>
          </li>
          <li class="flex items-start gap-3 text-gray-400 leading-relaxed">
            <svg class="mt-1 w-5 h-5 flex-shrink-0 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span>Andronix does not facilitate illegal content or unauthorized access to any system.</span>
          </li>
          <li class="flex items-start gap-3 text-gray-400 leading-relaxed">
            <svg class="mt-1 w-5 h-5 flex-shrink-0 text-green-400 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            <span><span class="text-white font-bold">Age guidance:</span> intended for users aged 13 and above.</span>
          </li>
        </ul>
      </div>

      <!-- A note on Kali Linux and security distributions -->
      <div class="bg-card_background border border-gray-800 rounded-2xl p-6 md:p-8">
        <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">A note on Kali Linux and security distributions</h2>
        <p class="mt-4 text-gray-400 leading-relaxed">
          Some of the distributions available through Andronix, such as Kali Linux, are widely used by computer
          science students and cybersecurity professionals for ethical, authorized security testing and learning.
          Andronix provides these distributions for legitimate educational and professional use only. Using any tool
          for unauthorized access or attacks is strictly prohibited under our Acceptable Use policy.
        </p>
      </div>

      <!-- Contact -->
      <div class="bg-card_background border border-gray-800 rounded-2xl p-6 md:p-8">
        <h2 class="text-xl md:text-2xl font-bold text-white tracking-tight">Contact</h2>
        <p class="mt-4 text-gray-400 leading-relaxed">
          For any compliance or safety questions, reach us at
          <a href="mailto:support@andronix.app" class="text-primary-400 hover:text-primary-300 font-medium transition duration-200">support@andronix.app</a>.
        </p>
        <p class="mt-6 pt-6 border-t border-gray-800 text-sm text-gray-500 leading-relaxed">
          Andronix Apps · Operated by Amita Shukla<br>
          555 Kha/29, Bhola Khera, Krishna Nagar, Lucknow, Uttar Pradesh 226023, India<br>
          <a href="mailto:support@andronix.app" class="text-gray-400 hover:text-primary-400 transition duration-200">support@andronix.app</a>
        </p>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'compliance',
  head () {
    return {
      title: 'Compliance & Safety, Andronix',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'How Andronix keeps users safe: no root required, sandboxed PRoot environment, and compliance with Google Play policies and India\'s DPDP Act 2023.'
      }]
    }
  }
}
</script>

<style scoped>
.compliance {
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
  width: 420px;
  height: 420px;
  top: 0;
  right: -120px;
  opacity: 0.7;
}

.dot-grid {
  background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 24px 24px;
  -webkit-mask-image: radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%);
  mask-image: radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%);
}
</style>
