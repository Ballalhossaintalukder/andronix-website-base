<template>

  <div class="relative bg-background min-h-screen overflow-hidden">
    <loading :active.sync="isLoading"
             background-color="#0F1535"
             color="#ff8b25"
             :is-full-page="true"
    />

    <!-- atmosphere -->
    <div class="glow glow-orange auth-glow-1"></div>
    <div class="glow glow-purple auth-glow-2"></div>
    <div class="dot-grid absolute inset-0 opacity-60"></div>

    <div class="relative max-w-screen-xl mx-auto px-6 lg:px-10 pt-32 lg:pt-28 pb-20 flex justify-center">
      <div class="w-full max-w-md">

        <!-- header -->
        <div class="text-center">
          <p class="text-xs font-bold uppercase tracking-widest text-primary-500">Account</p>
          <XyzTransition appear-visible xyz="fade small">
            <h1 class="mt-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight">Welcome back.</h1>
          </XyzTransition>
          <p class="mt-4 text-gray-400 md:text-lg">Sign in to manage your Andronix account.</p>
        </div>

        <!-- card -->
        <div class="mt-10 bg-card_background border border-gray-800 rounded-2xl p-7">
          <XyzTransition appear-visible xyz="fade right-100% small">
            <FormulateForm
              class="login-form"
              ref="form"
              @submit="loginWithEmail"
              #default="{ hasErrors }"
            >
              <div class="grid gap-x-5 grid-cols-1">

                <!--   Name       -->
                <FormulateInput
                  type="text"
                  name="email"
                  id="login_email_input"
                  placeholder="Email"
                  input-class="formulate-input-class"
                  label-class="formulate-label-class"
                  error-class="formulate-error-class"
                  outer-class="mb-4"
                  help-class="formulate-help-class"
                  validation="^required|email"
                />
                <FormulateInput
                  type="password"
                  name="password"
                  id="login_password_input"
                  input-class="formulate-input-class"
                  label-class="formulate-label-class"
                  placeholder="Password"
                  error-class="formulate-error-class"
                  outer-class="mb-5"
                  help-class="formulate-help-class"
                  validation="required|min:6,length"
                />
              </div>

              <FormulateInput
                type="submit"
                id="login_submit_button"
                :input-class="`w-full flex justify-center items-center rounded-lg font-bold py-2.5 px-4 text-white shadow-lg transition transform duration-200 ${!hasErrors ?'bg-primary-600 hover:bg-primary-500 hover:-translate-y-1 opacity-1':'bg-gray-700 opacity-50'}`"
                :disabled="hasErrors"
                :label="isLoading ? 'Loading...' : 'Login'"
              />
            </FormulateForm>
          </XyzTransition>

          <!-- divider -->
          <div class="flex items-center gap-4 my-6">
            <span class="h-px flex-1 bg-gray-800"></span>
            <span class="text-gray-500 text-xs font-semibold uppercase tracking-widest">OR</span>
            <span class="h-px flex-1 bg-gray-800"></span>
          </div>

          <XyzTransition appear-visible xyz="fade left-100% small">
            <div>
              <div
                class="w-full bg-background border border-gray-700 hover:border-gray-600 rounded-lg px-4 py-2.5 cursor-pointer transition duration-200"
                @click="googleLogin"
              >
                <div class="flex justify-center items-center gap-3">
                  <svg class="fill-current w-5" viewBox="0 0 533.5 544.3"
                       xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                  <p class="text-white font-bold">Continue with Google</p>
                </div>
              </div>
            </div>
          </XyzTransition>
        </div>

        <p class="text-gray-400 mt-8 text-center text-sm">New here?
          <NuxtLink to="/auth/register" class="text-primary-400 hover:text-primary-300 font-bold transition duration-200">Register</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  created () {
    if (this.$store.getters['auth/isUserLoggedIn']) {
      console.log('Logged in')
      this.$router.push('/user/profile')
    } else {
      console.log('Not Logged in')
    }
  },
  components: {
    Loading
  },
  data: () => {
    return {
      isLoading: false,
      email: '',
      password: '',
    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters['auth/isUserLoggedIn']
    },
  },
  methods: {
    async loginWithEmail (data) {
      this.isLoading = true
      try {
        await this.$store.dispatch('auth/loginUserWithEmailPassword', {
          email: data.email,
          password: data.password
        })
        this.isLoading = false
        await this.$router.push('/')
      } catch (e) {
        this.isLoading = false
        this.$toast.error(e)
      }
    },
    async googleLogin () {
      this.isLoading = true
      try {
        await this.$store.dispatch('auth/loginWithGoogle')
        this.isLoading = false
        await this.$router.push('/')
      } catch (e) {
        this.isLoading = false
        this.$toast.error(e)
      }
    },
  },
  watch: {
    isLoggedIn (val) {
      console.log(val)
      if (val) {
        console.log('Logged in')
        this.$router.push('/user/profile')
      } else {
        console.log('Not Logged in')
      }
    }
  },
  name: 'index.vue'
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

.auth-glow-1 {
  width: 460px;
  height: 460px;
  top: -140px;
  left: -120px;
}

.auth-glow-2 {
  width: 420px;
  height: 420px;
  top: 60px;
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
