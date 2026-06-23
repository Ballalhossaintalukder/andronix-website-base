<template>
  <div class="profile-page relative bg-background min-h-screen w-full text-white overflow-hidden">
    <loading :active.sync="isLoading"
             background-color="#0F1535"
             color="#ff8b25"
             :is-full-page="true"
    />

    <!-- atmosphere -->
    <div class="glow glow-orange profile-glow-1"></div>
    <div class="glow glow-purple profile-glow-2"></div>
    <div class="dot-grid absolute inset-0 opacity-60"></div>

    <div class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-24 lg:pt-32 pb-24">

      <!-- ============ PROFILE HEADER ============ -->
      <div class="max-w-xl mx-auto text-center">
        <div class="h-24 w-24 rounded-full overflow-hidden mx-auto border-2 border-gray-800 ring-2 ring-primary-500 ring-opacity-30 bg-card_background">
          <img class="h-full w-full object-cover"
               :src="userData.photo_url ? userData.photo_url : '/static_images/default_dp.svg'"
               alt=""
          >
        </div>
        <h1 class="mt-6 text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          {{ userData.name ? userData.name : 'Anonymous' }}
        </h1>
        <p class="mt-1 text-sm font-medium text-gray-500 break-words">
          {{ userData.email ? userData.email : 'Not Logged In' }}
        </p>
      </div>

      <!-- ============ PURCHASES ============ -->
      <div class="mt-16 max-w-screen-sm mx-auto">
        <div class="text-center max-w-2xl mx-auto">
          <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Your account</p>
          <h2 class="mt-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">Purchases</h2>
        </div>

        <!-- empty state -->
        <div v-if="!isLoading && areNoPurchases"
             class="mt-10 bg-card_background border border-gray-800 rounded-2xl p-8 text-center"
        >
          <p class="font-bold text-gray-400">We couldn't find any purchases...</p>
          <button @click="$router.push('/pricing')"
                  class="mt-6 inline-flex items-center bg-primary-600 hover:bg-primary-500 rounded-lg px-5 py-2.5 text-white font-bold shadow-lg hover:-translate-y-1 transition transform duration-200">
            Check our pricing
          </button>
        </div>

        <!-- purchases list -->
        <XyzTransition appear-visible xyz="fade small left-100% delay-15">
          <div class="mt-10 flex-col space-y-4" xyz="inner staggered fade small">
            <div v-for="(value, product) in purchaseObject" :key="product" v-if="Object.keys(value).length>0"
                 class="group bg-card_background border border-gray-800 rounded-2xl p-5 flex items-center gap-5 transition duration-200 hover:-translate-y-1 hover:border-gray-700"
            >
              <div class="h-14 w-14 shrink-0 rounded-xl bg-background border border-gray-800 flex items-center justify-center">
                <span class="font-extrabold text-xl" :class="textColor(product)">{{ logoText(product) }}</span>
              </div>
              <div class="min-w-0">
                <h4 class="font-bold text-white capitalize">{{ product.replace('_', ' ') }}</h4>
                <p class="mt-1 text-sm text-gray-400 break-words">{{ value.payID }}</p>
                <p v-if="value.time" class="mt-1 text-xs text-gray-500">{{ value.time }}</p>
              </div>
            </div>
          </div>
        </XyzTransition>
      </div>
    </div>
  </div>
</template>

<script>

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components: {
    Loading
  },
  created () {
    if (!this.isLoggedIn) {
      this.$router.push('/auth/login')
    }
  },
  mounted () {
    this.getPurchases()
  },
  computed: {
    areNoPurchases () {
      let flag = true
      for (const product in this.purchaseObject) {
        console.log(Object.keys(this.purchaseObject[product]).length)
        if (Object.keys(this.purchaseObject[product]).length > 0) {
          flag = false
        }
      }
      return flag
    },
    isLoggedIn () {
      return this.$store.getters['auth/isUserLoggedIn']
    },
    userData () {
      return this.$store.getters['auth/getUserData']
    }
  },
  data: function () {
    return {
      purchaseObject: {},
      isLoading: true,
      email: this.$store.getters['auth/getEmail']
    }
  },
  methods: {
    logoText (product) {
      switch (product) {
        case 'ubuntu_xfce':
          return 'UX'
        case 'debian_xfce':
          return 'DX'
        case 'manjaro_xfce':
          return 'MX'
        case 'ubuntu_kde':
          return 'UK'
        case 'premium':
          return 'PR'
      }
    },
    textColor (product) {
      switch (product) {
        case 'ubuntu_xfce':
          return 'text-primary-400'
        case 'debian_xfce':
          return 'text-pink-400'
        case 'manjaro_xfce':
          return 'text-green-400'
        case 'ubuntu_kde':
          return 'text-blue-400'
        case 'premium':
          return 'text-purple-400'
      }
    },
    async getPurchases () {
      try {
        const res = await this.$axios.get(`/gen/purchases?email=${this.email}`)
        this.isLoading = false
        console.log(res.data)
        this.purchaseObject = res.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  name: 'index'
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

.profile-glow-1 {
  width: 460px;
  height: 460px;
  top: -160px;
  left: -120px;
}

.profile-glow-2 {
  width: 420px;
  height: 420px;
  top: -40px;
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
