<template>
  <nav
    class="z-20 fixed w-full transition transform duration-200 ease-in-out"
    :class="!view.atTopOfPage || activeGroup !== null || mobileOpen ? 'bg-background bg-opacity-90 backdrop-filter backdrop-blur border-b border-gray-800' : ''"
    @keydown.esc="closeAll"
  >
    <div class="max-w-screen-2xl mx-auto flex px-6 lg:px-8 py-4 items-center">

      <!--  Wordmark    -->
      <div class="flex items-center cursor-pointer mr-auto lg:mr-8" @click="goHome">
        <h3 class="text-white font-sans font-bold text-lg">andronix</h3>
        <span class="text-primary-500 font-bold text-lg">.app</span>
      </div>

      <!--  Desktop nav    -->
      <div class="hidden lg:flex items-center space-x-1" @mouseleave="scheduleClose">
        <div
          v-for="group in groups"
          :key="group.id"
          class="relative"
          @mouseenter="group.columns ? openGroup(group.id) : closeNow()"
        >
          <!--  Direct link (no panel) — external  -->
          <a
            v-if="!group.columns && group.to.indexOf('https://') === 0"
            :href="group.to" target="_blank" rel="noopener"
            class="flex items-center px-3 py-2 rounded text-sm font-medium text-gray-200 hover:text-white hover:bg-card_background_accent transition duration-150"
          >{{ group.title }}</a>
          <!--  Direct link (no panel) — internal  -->
          <NuxtLink
            v-else-if="!group.columns"
            :to="group.to"
            class="flex items-center px-3 py-2 rounded text-sm font-medium text-gray-200 hover:text-white hover:bg-card_background_accent transition duration-150"
          >{{ group.title }}</NuxtLink>

          <!--  Panel trigger  -->
          <button
            v-else
            :id="group.id"
            type="button"
            aria-haspopup="true"
            :aria-expanded="activeGroup === group.id ? 'true' : 'false'"
            class="flex items-center px-3 py-2 rounded text-sm font-medium transition duration-150 focus:outline-none focus:ring-2 focus:ring-primary-500"
            :class="activeGroup === group.id ? 'text-white bg-gray-700 bg-opacity-50' : 'text-gray-200 hover:text-white hover:bg-gray-700 hover:bg-opacity-50'"
            @click="toggleGroup(group.id)"
            @focus="openGroup(group.id)"
          >
            {{ group.title }}
            <svg
              class="ml-1 h-4 w-4 transform transition-transform duration-200 fill-current"
              :class="activeGroup === group.id ? 'rotate-180 text-primary-400' : 'text-gray-400'"
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

          <!--  Mega panel  -->
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-class="opacity-0 transform -translate-y-2"
            enter-to-class="opacity-100 transform translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-class="opacity-100 transform translate-y-0"
            leave-to-class="opacity-0 transform -translate-y-2"
          >
            <div
              v-if="group.columns && activeGroup === group.id"
              class="absolute left-0 mt-3 z-30 max-w-none"
              :style="panelStyle(group)"
            >
              <div
                class="bg-card_background rounded-lg shadow-2xl ring-1 ring-black ring-opacity-40 border border-gray-800 p-4 max-w-none"
              >
                <div class="flex">
                  <div
                    v-for="(col, ci) in group.columns"
                    :key="col.heading"
                    class="flex-1"
                    :class="ci !== 0 ? 'ml-2 pl-4 border-l border-gray-700' : ''"
                  >
                    <p class="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-gray-500">{{ col.heading }}</p>
                    <mega-menu-item
                      v-for="item in col.items"
                      :key="item.id"
                      :item="item"
                      variant="desktop"
                      @navigate="closeNow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!--  Right side: account + download (desktop)  -->
      <div class="hidden lg:flex items-center lg:ml-auto space-x-3">
        <!--  Account (logged in)  -->
        <NuxtLink
          v-if="isLoggedIn"
          to="/user/profile"
          class="flex items-center cursor-pointer rounded-full"
          aria-label="Your profile"
        >
          <img
            class="rounded-full object-cover w-8 h-8 ring-2 ring-transparent hover:ring-primary-500 transition duration-150"
            :src="userData && userData.photo_url ? userData.photo_url : '/static_images/default_dp.svg'"
            alt="Profile"
          >
        </NuxtLink>
        <button
          v-if="isLoggedIn"
          type="button"
          @click="logout"
          class="text-sm font-medium text-gray-300 hover:text-white transition duration-150"
        >Logout</button>

        <!--  Download CTA  -->
        <a
          href="https://play.andronix.app"
          target="_blank"
          rel="noopener"
          class="text-white cursor-pointer px-4 py-2 bg-primary-600 flex items-center space-x-2 justify-center rounded font-bold text-sm hover:bg-white hover:text-primary-600 hover:-translate-y-1 transition transform duration-300"
        >
          <svg class="text-current fill-current w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd" />
          </svg>
          <span>Download</span>
        </a>
      </div>

      <!--  Hamburger (mobile)  -->
      <button
        type="button"
        id="nav_hamburger"
        class="lg:hidden ml-4 cursor-pointer text-white focus:outline-none"
        aria-label="Open menu"
        :aria-expanded="mobileOpen ? 'true' : 'false'"
        @click="toggleMobile"
      >
        <svg v-if="!mobileOpen" class="stroke-current" xmlns="http://www.w3.org/2000/svg" width="28" height="14">
          <g fill="none" stroke="currentColor" stroke-width="3">
            <path d="M0 1.5h28M0 12.5h28" />
          </g>
        </svg>
        <svg v-else class="stroke-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!--  Mobile overlay menu  -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-class="opacity-0 transform -translate-y-4"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-4"
    >
      <div
        v-show="mobileOpen"
        class="lg:hidden absolute left-0 right-0 top-full px-4 pb-6 pt-2"
      >
        <div class="bg-card_background rounded-lg shadow-2xl ring-1 ring-black ring-opacity-40 border border-gray-800 p-4 max-h-screen overflow-y-auto">

          <!--  Account (logged in)  -->
          <NuxtLink
            v-if="isLoggedIn"
            to="/user/profile"
            class="flex items-center space-x-3 bg-gray-700 bg-opacity-40 px-4 py-3 rounded-lg mb-4 hover:bg-opacity-60 transition duration-150"
            @click.native="closeAll"
          >
            <img
              class="rounded-full object-cover w-9 h-9"
              :src="userData && userData.photo_url ? userData.photo_url : '/static_images/default_dp.svg'"
              alt="Profile"
            >
            <span class="min-w-0">
              <span class="block text-sm font-semibold text-white overflow-ellipsis line-clamp-1">{{ userData && userData.name ? userData.name : 'Your account' }}</span>
              <span class="block text-xs text-gray-400 overflow-ellipsis line-clamp-1">{{ userData && userData.email ? userData.email : '' }}</span>
            </span>
          </NuxtLink>

          <!--  Accordion groups  -->
          <div class="divide-y divide-gray-700">
            <div v-for="group in groups" :key="group.id" class="py-1">
              <!--  Direct link group — external  -->
              <a
                v-if="!group.columns && group.to.indexOf('https://') === 0"
                :href="group.to" target="_blank" rel="noopener"
                class="flex items-center w-full px-2 py-3 text-base font-semibold text-white"
                @click="closeAll"
              >{{ group.title }}</a>
              <!--  Direct link group — internal  -->
              <NuxtLink
                v-else-if="!group.columns"
                :to="group.to"
                class="flex items-center w-full px-2 py-3 text-base font-semibold text-white"
                @click.native="closeAll"
              >{{ group.title }}</NuxtLink>

              <!--  Expandable group  -->
              <template v-else>
                <button
                  type="button"
                  class="flex items-center justify-between w-full px-2 py-3 text-base font-semibold text-white focus:outline-none"
                  :aria-expanded="mobileExpanded === group.id ? 'true' : 'false'"
                  @click="toggleMobileGroup(group.id)"
                >
                  {{ group.title }}
                  <svg
                    class="h-5 w-5 transform transition-transform duration-200 fill-current"
                    :class="mobileExpanded === group.id ? 'rotate-180 text-primary-400' : 'text-gray-500'"
                    viewBox="0 0 20 20"
                  >
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <transition
                  enter-active-class="transition-all ease-out duration-200 overflow-hidden"
                  enter-class="max-h-0 opacity-0"
                  enter-to-class="max-h-screen opacity-100"
                  leave-active-class="transition-all ease-in duration-150 overflow-hidden"
                  leave-class="max-h-screen opacity-100"
                  leave-to-class="max-h-0 opacity-0"
                >
                  <div v-show="mobileExpanded === group.id" class="pb-2">
                    <template v-for="col in group.columns">
                      <mega-menu-item
                        v-for="item in col.items"
                        :key="item.id"
                        :item="item"
                        variant="mobile"
                        id-prefix="m_"
                        @navigate="closeAll"
                      />
                    </template>
                  </div>
                </transition>
              </template>
            </div>
          </div>

          <!--  Download CTA  -->
          <a
            href="https://play.andronix.app"
            target="_blank"
            rel="noopener"
            class="mt-4 text-white cursor-pointer px-4 py-3 bg-primary-600 flex items-center space-x-2 justify-center rounded font-bold hover:bg-primary-500 transition duration-200"
          >
            <svg class="text-current fill-current w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd" />
            </svg>
            <span>Download</span>
          </a>

          <!--  Auth actions  -->
          <div v-if="isLoggedIn" class="mt-3">
            <button
              type="button"
              @click="logout"
              class="w-full px-4 py-3 bg-card_background flex items-center justify-center space-x-2 rounded text-white font-bold hover:bg-background transition duration-200"
            >
              <svg class="text-white stroke-current w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </button>
          </div>
          <div v-else class="mt-3 flex space-x-3">
            <NuxtLink
              to="/auth/register"
              class="flex-1 text-center px-4 py-2 rounded bg-card_background2 text-white font-medium hover:scale-105 transition transform duration-200"
              @click.native="closeAll"
            >Register</NuxtLink>
            <NuxtLink
              to="/auth/login"
              class="flex-1 text-center px-4 py-2 rounded bg-card_background text-white font-medium hover:scale-105 transition transform duration-200"
              @click.native="closeAll"
            >Login</NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import megaMenu from '~/static/data/menu/mega-menu.json'

export default {
  name: 'MegaMenu',
  data() {
    return {
      groups: megaMenu.groups,
      activeGroup: null,
      mobileOpen: false,
      mobileExpanded: null,
      closeTimer: null,
      view: {
        atTopOfPage: true
      }
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isUserLoggedIn']
    },
    userData() {
      return this.$store.getters['auth/getUserData']
    }
  },
  watch: {
    // close menus on route change
    $route() {
      this.closeAll()
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    document.removeEventListener('click', this.handleOutsideClick)
    if (this.closeTimer) clearTimeout(this.closeTimer)
  },
  methods: {
    panelStyle(group) {
      // size the panel to its column count, without Tailwind arbitrary values
      const cols = group.columns ? group.columns.length : 1
      return { width: cols > 1 ? '46rem' : '23rem' }
    },
    openGroup(id) {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer)
        this.closeTimer = null
      }
      this.activeGroup = id
    },
    closeNow() {
      this.activeGroup = null
    },
    toggleGroup(id) {
      this.activeGroup = this.activeGroup === id ? null : id
    },
    scheduleClose() {
      if (this.closeTimer) clearTimeout(this.closeTimer)
      this.closeTimer = setTimeout(() => {
        this.activeGroup = null
        this.closeTimer = null
      }, 150)
    },
    toggleMobile() {
      this.mobileOpen = !this.mobileOpen
      if (!this.mobileOpen) this.mobileExpanded = null
    },
    toggleMobileGroup(id) {
      this.mobileExpanded = this.mobileExpanded === id ? null : id
    },
    closeAll() {
      this.activeGroup = null
      this.mobileOpen = false
      this.mobileExpanded = null
    },
    handleOutsideClick(e) {
      if (!this.$el.contains(e.target)) {
        this.activeGroup = null
      }
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      } else {
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    },
    goHome() {
      this.closeAll()
      if (this.$route.path !== '/') this.$router.push('/')
    },
    async logout() {
      this.closeAll()
      return this.$store.dispatch('auth/logoutUser')
    }
  }
}
</script>

<style scoped>
</style>
