<template>
  <div class="about bg-background w-full overflow-hidden">

    <!-- ============ HERO ============ -->
    <section class="relative">
      <div class="glow glow-orange hero-glow-1"></div>
      <div class="glow glow-purple hero-glow-2"></div>
      <div class="dot-grid absolute inset-0 opacity-60"></div>

      <div class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-16 lg:pt-28 pb-20 text-center">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Andronix</p>
        <h1 class="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none tracking-tight">
          Who are <span class="text-grad">we?</span>
        </h1>
        <p class="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          We are developers from India who like to share our knowledge and try to deliver a platform to mobile users to
          make them aware of the Linux kernel and distributions, providing them a way to use desktop software on their
          Android devices. We are really thankful to all our users and our additional team members for supporting us and
          bringing us to where we are today.
        </p>

        <div class="mt-8 flex justify-center">
          <a href="https://chat.andronix.app" target="_blank" rel="noopener"
             class="bg-primary-600 hover:bg-primary-500 rounded-lg px-5 py-2.5 text-white font-bold shadow-lg hover:-translate-y-1 transition transform duration-200">
            Talk to us
          </a>
        </div>
      </div>
    </section>

    <!-- ============ OUR STORY ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">About</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Our Story</h2>
        <p class="mt-4 text-gray-400 md:text-lg">
          It's kinda long but quite interesting. It's our story from yet another app that let's you install Linux to one
          of the top ones in the domain.
        </p>
      </div>

      <div class="mt-12 max-w-3xl mx-auto bg-card_background border border-gray-800 rounded-2xl p-6 md:p-10">
        <p class="text-gray-400 leading-relaxed md:text-lg">
          The idea of Andronix was incepted in 2019 when we, Prakhar Shukla and Anurag Verma, were riding back home from
          our workout. It struck us that people use their phones as computers either because they cannot afford them or
          for portability. So we thought of converting that idea into an app which ended up us finding that apps that
          helped you install Linux on Android. However, there were a few issues. First, they were just outdated and ugly
          to look at, and secondly, if you're stuck, you're basically on your own.
          <br>
          <br>

          Andronix was born. We released our first version, way different from what it currently offers. The journey
          started, and soon we released Andronix Premium, Andronix Commands, and then the most anticipated product, the
          Andronix Modded OS. We enjoyed and learned a lot while developing for Andronix. It gave us a platform to
          refine our passion for programming.
          <br>
          <br>

          To say that Andronix has changed our lives would be an understatement because of all the love we get, whether
          from the people rating us or emailing us about how much they love using Andronix to the mods over at Discord
          helping us to keep things moving around here. We are ever so grateful for all the love and support we get.

          <br>
          <br>

          <strong class="font-bold text-white">Andronix Apps is operated by Amita Shukla, based in Lucknow,
            India.</strong> Prakhar Shukla (developer) and Anurag Verma (Linux backend) continue to contribute to the
          platform. Our mission stays the same as day one — helping students, developers, and curious learners run
          Linux on the device they already carry, and making open-source software approachable for everyone.
        </p>
      </div>
    </section>

    <!-- ============ TEAM ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Meet us</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Our Team</h2>
        <p class="mt-4 text-gray-400 md:text-lg">
          Here we are. We have a spectrum of people down here, from developers to community moderators to people who
          support us and much more.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        <div v-for="member in teams.dev" :key="member.name"
             class="team-card flex flex-col bg-card_background border border-gray-800 rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
          <div class="flex items-center gap-4">
            <img class="h-14 w-14 rounded-full object-cover bg-background border border-gray-800"
                 :src="member.photo_url" :alt="member.name">
            <div>
              <h3 class="text-lg font-bold text-white leading-tight">{{ member.name }}</h3>
              <p class="text-xs font-semibold uppercase tracking-wider text-primary-400">{{ member.position }}</p>
            </div>
          </div>
          <p class="mt-5 text-sm text-gray-400 leading-relaxed flex-1">{{ member.quote }}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import teams from '~/static/data/misc/teams.json'
import meta from '~/static/seo/meta-head.json'

export default {
  head() {
    return {
      title: meta.about.title,
      meta: [{
        hid: meta.about.hid,
        name: meta.about.name,
        content: meta.about.content
      }]
    }
  },
  name: 'about.vue',
  data: function () {
    return {
      teams,
    }
  },
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

.team-card:hover {
  border-color: rgba(255, 139, 37, 0.4);
}
</style>
