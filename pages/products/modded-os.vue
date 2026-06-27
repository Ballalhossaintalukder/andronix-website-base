<template>
  <div class="modded-os bg-background w-full overflow-hidden">

    <!-- ============ HERO ============ -->
    <section class="relative">
      <div class="glow glow-orange hero-glow-1"></div>
      <div class="glow glow-purple hero-glow-2"></div>
      <div class="dot-grid absolute inset-0 opacity-60"></div>

      <div class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 text-center">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Modded OS</p>
        <h1 class="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-none tracking-tight">
          Take Andronix to the <span class="text-grad">Next Level</span>
        </h1>
        <p class="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Modded OS are versions of standard distros optimized, beautified, and made super stable by our
          experienced developers. These include Ubuntu, Debian, Manjaro for now. We carefully choose what goes
          into these and cherry-pick the best features for you.
        </p>
        <div class="mt-8 flex justify-center">
          <button @click="$router.push('/pricing')"
                  class="bg-primary-600 hover:bg-primary-500 rounded-lg px-5 py-2.5 text-white font-bold shadow-lg hover:-translate-y-1 transition transform duration-200">
            Get Now
          </button>
        </div>
      </div>
    </section>

    <!-- ============ FEATURES ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Andronix</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Why Modded OS?</h2>
        <p class="mt-4 text-gray-400 md:text-lg">
          We specially mod these OS after we saw people struggling with regular distributions because either
          they weren't comfortable with Linux or it was a hassle fixing many issues on ARM chips. Modded OS
          negates all these things and brings you straight to a stable and pretty environment to work with.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="f in moddedOsFeaturesData" :key="f.color"
             class="bg-card_background border border-gray-800 rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
          <div v-html="f.icon"></div>
          <h3 class="mt-5 text-lg font-bold text-white">{{ f.title }}</h3>
          <p class="mt-2 text-sm text-gray-400 leading-relaxed">{{ f.sub_title }}</p>
        </div>
      </div>
    </section>

    <!-- ============ METRICS ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Metrics</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Modded OS Metrics</h2>
        <p class="mt-4 text-gray-400 md:text-lg">Take a look at where our Modded OS stands.</p>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="meta in metadata" :key="meta.color"
             class="bg-card_background border border-gray-800 rounded-2xl p-6 text-center transition duration-200 hover:-translate-y-1">
          <div class="flex justify-center" v-html="meta.icon"></div>
          <p class="mt-4 text-3xl md:text-4xl font-extrabold text-white tracking-tight">{{ meta.value }}</p>
          <p class="mt-1 text-sm text-gray-400">{{ meta.param }}</p>
        </div>
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Andronix</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">What people say!</h2>
        <p class="mt-4 text-gray-400 md:text-lg">Listen to what our users say about us all around the internet.</p>
      </div>

      <div class="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="testimonial in moddedOsTestimonials" :key="testimonial.name"
             class="bg-card_background border border-gray-800 rounded-2xl p-6 flex flex-col">
          <svg class="w-8 h-8 text-primary-500 opacity-30 fill-current" viewBox="0 0 24 24"><path d="M9.5 4C5.36 4 2 7.36 2 11.5V20h8v-8H6c0-2.21 1.79-4 4-4V4H9.5zm12 0C17.36 4 14 7.36 14 11.5V20h8v-8h-4c0-2.21 1.79-4 4-4V4h-.5z"/></svg>
          <p class="mt-4 text-sm text-gray-300 leading-relaxed flex-1">{{ testimonial.quote }}</p>
          <div class="mt-5 pt-4 border-t border-gray-800 flex items-center justify-between gap-3">
            <div>
              <p class="text-sm font-bold text-white">{{ testimonial.name }}</p>
              <p class="text-xs text-gray-500">{{ testimonial.title }}</p>
            </div>
            <div class="flex-shrink-0" v-html="testimonial.icon"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PREVIEWS ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Modded OS</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Take a look</h2>
        <p class="mt-4 text-gray-400 md:text-lg">
          Looking for a Modded OS that will suit your needs? Here are the OS that we offer with their respective
          screenshots to help you find the right one.
        </p>
      </div>

      <div class="mt-14 space-y-6">
        <div v-for="os in moddedOsInfo" :key="os.color"
             class="bg-card_background border border-gray-800 rounded-2xl p-6 md:p-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">

            <!-- Copy -->
            <div class="text-center lg:text-left">
              <h3 class="font-extrabold text-2xl md:text-4xl" :class="`text-${os.color}`">{{ os.logo_text }}</h3>
              <h3 class="mt-2 font-extrabold text-xl md:text-2xl text-white">{{ os.name }}</h3>
              <p class="mt-3 text-sm text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">{{ os.description }}</p>

              <ul class="mt-6 space-y-3 text-left inline-block lg:block">
                <li v-for="feature in os.features" :key="feature" class="flex items-start gap-3">
                  <svg class="w-5 h-5 mt-0.5 flex-shrink-0 text-green-400 fill-current"
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"/>
                  </svg>
                  <p class="text-sm text-gray-300">{{ feature }}</p>
                </li>
              </ul>

              <div class="mt-8 flex justify-center lg:justify-start">
                <button @click="purchase(os.id)"
                        class="flex items-center gap-2.5 bg-primary-600 hover:bg-primary-500 rounded-lg px-5 py-2.5 text-white font-bold shadow-lg hover:-translate-y-1 transition transform duration-200">
                  <svg class="text-white fill-current w-4" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  </svg>
                  Buy Now!
                </button>
              </div>
            </div>

            <!-- Screenshots -->
            <div class="grid grid-cols-2 gap-4">
              <div v-for="image in imagesArray[os.id]" :key="image" v-viewer
                   class="overflow-hidden rounded-xl border border-gray-800 cursor-pointer">
                <img class="object-cover w-full h-full" :src="image" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
import moddedOsFeatures from '~/static/data/features/modded-os-features.json'
import moddedOsTestimonials from '~/static/data/testimonials/modded-os-testimonials.json'
import metadata from '~/static/data/misc/modded-os-metric.json'
import moddedOsInfo from '~/static/data/products/modded-os-info.json'

import meta from '~/static/seo/meta-head.json'

export default {
  head() {
    return {
      title: meta['modded-os'].title,
      meta: [{
        hid: meta['modded-os'].hid,
        name: meta['modded-os'].name,
        content: meta['modded-os'].content
      }]
    }
  },
  async mounted() {
    await this.fetchImages()
  },
  methods: {
    purchase: function (id) {
      if (this.is_billing_active) {
        if (this.$store.getters['auth/isUserLoggedIn']) {
          this.$router.push(`/checkout/buy/${id.replace('_modded', '')}`)
        } else {
          this.$router.push('/auth/login')
        }
      } else {
        this.$toast.info('Billing is not yet activated. We\'re working on it! Please buy the product from the Andronix App until then.')
      }
    },
    async fetchImages() {
      try {
        console.log("Fetching images...")
        let res = await this.$axios.get('/gen/modded-images')
        console.log("log")
        let imagesObj = res.data
        console.log({imagesObj})

        for (let osImageId in imagesObj) {
          if (imagesObj.hasOwnProperty(osImageId)) {
            this.$set(this.imagesArray, osImageId, imagesObj[osImageId])
          }
        }
      } catch (e) {
        console.log(e)
      }
    },
  },
  data: () => {
    return {
      moddedOsInfo: moddedOsInfo.info,
      moddedOsFeaturesData: moddedOsFeatures.features,
      moddedOsTestimonials: moddedOsTestimonials.testimonials,
      imagesArray: {},
      metadata: metadata.metadata,
    }
  },
  computed: {
    is_billing_active() {
      return this.$store.getters['checkout/getBillingState']
    }
  },
}
</script>

<style scoped>
.modded-os {
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
