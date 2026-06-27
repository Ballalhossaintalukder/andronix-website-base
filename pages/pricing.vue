<template>
  <div class="bg-background w-full overflow-hidden">
    <loading
      :active.sync="isLoading"
      background-color="#0F1535"
      color="#ff8b25"
      :is-full-page="true"
    />

    <!-- ============ HERO / PRICING ============ -->
    <section class="relative">
      <div class="glow glow-orange hero-glow-1"></div>
      <div class="glow glow-purple hero-glow-2"></div>
      <div class="dot-grid absolute inset-0 opacity-60"></div>

      <div class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-20 lg:pb-24">

        <!-- Section header -->
        <div class="text-center max-w-2xl mx-auto">
          <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Pricing</p>
          <h1 class="mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            One-time. <span class="text-grad">Lifelong.</span>
          </h1>
          <p class="mt-4 text-gray-400 md:text-lg">
            We hate subscriptions. All purchases here are one-time and life long. They sync all your devices automatically.
          </p>
        </div>

        <!-- Pricing cards -->
        <div class="mt-14 grid gap-6 grid-cols-1 lg:grid-cols-2 items-stretch max-w-4xl mx-auto">
          <div
            v-for="product in productDetails"
            :key="product.id"
            class="relative flex flex-col bg-card_background rounded-2xl p-7 transition duration-200 hover:-translate-y-1"
            :class="product.id === 'premium'
              ? 'border-2 border-primary-600'
              : 'border border-gray-800 hover:border-gray-700'"
          >
            <!-- Recommended pill -->
            <span
              v-if="product.id === 'premium'"
              class="absolute -top-3 left-7 rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary-600 text-white shadow-lg"
            >
              Recommended
            </span>

            <!-- Header -->
            <div>
              <p class="text-xs font-bold uppercase tracking-widest text-gray-500">{{ product.deco_heading }}</p>
              <h2 class="mt-1 text-2xl font-extrabold text-white tracking-tight">{{ product.heading }}</h2>
            </div>

            <!-- Price -->
            <div class="mt-5 flex items-end gap-3">
              <span class="text-4xl font-extrabold text-white tracking-tight">
                {{ pricingObject[product.id] ? pricingObject[product.id] : 'Loading...' }}
              </span>
              <span class="mb-1 text-base font-medium text-gray-500 line-through">{{ product.slashedPrice }}</span>
            </div>
            <p class="mt-1 text-xs text-gray-500">One-time payment · lifetime access</p>

            <!-- Features -->
            <ul class="mt-6 space-y-3 flex-1">
              <li v-for="feature in product.features" :key="feature" class="flex items-start gap-3">
                <svg
                  class="mt-0.5 h-5 w-5 flex-shrink-0 fill-current"
                  :class="product.id === 'premium' ? 'text-primary-400' : 'text-green-400'"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-sm text-gray-300 leading-relaxed">{{ feature }}</span>
              </li>
            </ul>

            <!-- CTA -->
            <button
              :id="product.css_id"
              @click="purchase(product.id)"
              class="mt-8 w-full rounded-lg px-4 py-2.5 text-white font-bold shadow-lg hover:-translate-y-1 transition transform duration-200"
              :class="product.id === 'premium'
                ? 'bg-primary-600 hover:bg-primary-500'
                : 'bg-card_background border border-gray-700 hover:border-gray-600'"
            >
              Purchase
            </button>
            <p class="mt-2 text-center text-xs text-gray-500">or purchase via the Andronix app</p>
          </div>
        </div>

        <p class="mt-8 text-gray-500 text-xs text-center max-w-2xl mx-auto">
          ** In-App pricing of the products might be different depending on the region you are using Andronix due to the variation in taxes.
        </p>
      </div>
    </section>

    <!-- ============ BUNDLES ============ -->
    <section class="relative max-w-screen-xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
      <div class="text-center max-w-2xl mx-auto">
        <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Andronix Bundles</p>
        <h2 class="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Save more with bundles
        </h2>
        <p class="mt-4 text-gray-400 md:text-lg">
          Bundles will soon be generally available for you to get it here.
        </p>
      </div>

      <div class="mt-12 flex items-center justify-center">
        <div class="rounded-2xl border border-gray-800 bg-card_background px-10 py-12 text-center">
          <span class="rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary-500 bg-opacity-10 text-primary-400">
            Coming soon
          </span>
          <h3 class="mt-4 text-2xl md:text-3xl font-extrabold text-white opacity-30 tracking-tight">
            COMING SOON...
          </h3>
        </div>
      </div>

      <!--      <div class="grid gap-x-16 gap-y-5 grid-cols-1 items-center lg:grid-cols-2 justify-center max-w-screen-lg mx-auto">
              <PricingCard @purchase="purchase" v-for="product in bundleDetails"
                           :id="product.id"
                           :heading="product.heading"
                           :deco_heading="product.deco_heading"
                           :price="product.price"
                           :color="product.color"
                           :slashedPrice="product.slashedPrice"
                           :features="product.features"
              />-->
    </section>
  </div>
</template>

<script>
import productDetails from '~/static/data/pricing/product-details.json'
import { getPrices } from '~/lib/checkout/checkoutHelper'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { database } from '~/plugins/firebase'
import meta from '~/static/seo/meta-head.json'

export default {
  head () {
    return {
      title: meta.pricing.title,
      meta: [{
        hid: meta.pricing.hid,
        name: meta.pricing.name,
        content: meta.pricing.content
      }]
    }
  },
  components: { Loading },
  mounted () {
    //todo enable this
    this.observeBillingStatus()
    this.getPricing()
  },
  data: function () {
    return {
      isLoading: false,
      productDetails: productDetails.products,
      bundleDetails: productDetails.bundles,
      showDistroSelection: false,
      pricingObject: {
        modded_os: null,
        premium: null,
      },
    }
  },
  computed: {
    is_billing_active () {
      return this.$store.getters['checkout/getBillingState']
    }
  },
  methods: {
    async observeBillingStatus () {
      try {
        if (window.Cypress) {
          console.log('Running in cypress')
          await this.$store.dispatch('checkout/setBillingState', true)
        } else {
          await database.ref('billingStatus/isActive').on('value', async (snapshot) => {
            let isBillingActive = snapshot.val()
            console.log({ isBillingActive })
            await this.$store.dispatch('checkout/setBillingState', isBillingActive)
          })
        //  await this.$store.dispatch('checkout/setBillingState', true)
        }
      } catch (e) {
        console.log(e)
      }
    },
    async getPricing () {
      // this.isLoading = true
      let moddedRes = await getPrices('ubuntu_xfce', this.$axios)
      this.$set(this.pricingObject, 'modded_os', moddedRes.price)
      let premiumRes = await getPrices('premium', this.$axios)
      this.$set(this.pricingObject, 'premium', premiumRes.price)
      this.isLoading = false
    },
    purchase: function (id) {
      if (this.is_billing_active) {
        if (this.$store.getters['auth/isUserLoggedIn']) {
          if (id !== 'premium') {
            this.$router.push('checkout/buy')
          } else {
            this.$router.push('checkout/buy/premium')
          }
        } else {
          this.$router.push('auth/login')
        }
      } else {
        this.$toast.info('Billing is not yet activated. We\'re working on it! Please buy the product from the Andronix App until then.')
      }
    },
  },
  name: 'pricing',
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
</style>
