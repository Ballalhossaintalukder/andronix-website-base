<template>
  <footer class="bg-card_background mt-40 border-t border-gray-800">
    <div class="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-10">

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-12">

        <!--  Brand + address + socials  -->
        <div class="lg:col-span-4">
          <h3 class="font-extrabold text-2xl text-white">andronix<span class="text-primary-400">.app</span></h3>
          <p class="text-gray-400 text-sm mt-3 leading-relaxed max-w-xs">
            Learn Linux on your phone. Run Ubuntu, Debian and more on Android, no root required.
          </p>

          <div class="text-gray-400 text-sm leading-relaxed mt-6">
            <p class="font-semibold text-gray-200">Andronix Apps</p>
            <p>Operated by Amita Shukla</p>
            <p>555 Kha/29, Bhola Khera, Krishna Nagar</p>
            <p>Lucknow, Uttar Pradesh 226023, India</p>
            <p class="mt-2">
              <a href="mailto:support@andronix.app"
                 class="text-gray-300 hover:text-primary-400 transition duration-200">support@andronix.app</a>
            </p>
          </div>

          <!--  Socials  -->
          <div class="flex space-x-5 mt-6">
            <a target="_blank" rel="noopener" href="https://git.andronix.app" aria-label="GitHub">
              <svg class="w-5 fill-current text-gray-400 hover:text-white transform transition hover:scale-110 duration-200"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a target="_blank" rel="noopener" href="https://chat.andronix.app" aria-label="Discord">
              <svg class="w-5 fill-current text-gray-400 hover:text-purple-400 transform transition hover:scale-110 duration-200"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"/>
              </svg>
            </a>
            <a target="_blank" rel="noopener" href="https://patreon.com/andronixapp" aria-label="Patreon">
              <svg class="w-5 fill-current text-gray-400 hover:text-red-500 transform transition hover:scale-110 duration-200"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z"/>
              </svg>
            </a>
          </div>
        </div>

        <!--  Link columns  -->
        <div class="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">

          <!--  Products  -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-gray-500">Products</h4>
            <ul class="mt-4 space-y-3">
              <li><NuxtLink class="text-sm text-gray-400 hover:text-white transition duration-200" to="/products/premium">Premium</NuxtLink></li>
              <li><NuxtLink class="text-sm text-gray-400 hover:text-white transition duration-200" to="/products/modded-os">Modded OS</NuxtLink></li>
              <li><NuxtLink class="text-sm text-gray-400 hover:text-white transition duration-200" to="/products/commands">Commands</NuxtLink></li>
              <li><NuxtLink class="text-sm text-gray-400 hover:text-white transition duration-200" to="/pricing">Pricing</NuxtLink></li>
              <li><a class="text-sm text-gray-400 hover:text-white transition duration-200" target="_blank" rel="noopener" href="https://docs.andronix.app">Documentation</a></li>
            </ul>
          </div>

          <!--  Company  -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-gray-500">Company</h4>
            <ul class="mt-4 space-y-3">
              <li><NuxtLink class="text-sm text-gray-400 hover:text-white transition duration-200" to="/about">About us</NuxtLink></li>
              <li><NuxtLink class="text-sm text-gray-400 hover:text-white transition duration-200" to="/compliance">Compliance &amp; Safety</NuxtLink></li>
              <li><NuxtLink class="text-sm text-gray-400 hover:text-white transition duration-200" to="/contact">Contact us</NuxtLink></li>
              <li><NuxtLink class="text-sm text-gray-400 hover:text-white transition duration-200" to="/help">Help</NuxtLink></li>
            </ul>
          </div>

          <!--  Legal  -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-gray-500">Legal</h4>
            <ul class="mt-4 space-y-3">
              <li><NuxtLink class="text-sm text-gray-400 hover:text-white transition duration-200" to="/legal/privacy-policy">Privacy Policy</NuxtLink></li>
              <li><NuxtLink class="text-sm text-gray-400 hover:text-white transition duration-200" to="/legal/terms-conditions">Terms &amp; Conditions</NuxtLink></li>
              <li><NuxtLink class="text-sm text-gray-400 hover:text-white transition duration-200" to="/legal/refund-policy">Refund Policy</NuxtLink></li>
            </ul>
          </div>

          <!--  Resources  -->
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-gray-500">Resources</h4>
            <ul class="mt-4 space-y-3">
              <li><a class="text-sm text-gray-400 hover:text-white transition duration-200" target="_blank" rel="noopener" href="https://chat.andronix.app">Discord</a></li>
              <li><a class="text-sm text-gray-400 hover:text-white transition duration-200" target="_blank" rel="noopener" href="https://git.andronix.app">GitHub</a></li>
              <li><a class="text-sm text-gray-400 hover:text-white transition duration-200" target="_blank" rel="noopener" href="https://translate.andronix.app">Translate</a></li>
              <li><a class="text-sm text-gray-400 hover:text-white transition duration-200" target="_blank" rel="noopener" href="https://status.andronix.app">Status</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!--  Bottom bar  -->
      <div class="mt-14 pt-8 border-t border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-y-6">
        <div class="text-center md:text-left">
          <p class="text-sm text-gray-400">© {{ getCurrentYear() }} Andronix Apps. All rights reserved.</p>
          <p class="text-xs text-gray-500 mt-1">
            Made with
            <a target="_blank" rel="noopener" href="https://tailwindcss.com" class="hover:text-gray-300 transition duration-200">Tailwind</a>
            &amp;
            <a target="_blank" rel="noopener" href="https://nuxtjs.org" class="hover:text-gray-300 transition duration-200">NuxtJS</a>.
          </p>
        </div>

        <!--  Status badge  -->
        <div class="flex justify-center md:justify-end">
          <iframe src="https://status.andronix.app/badge?theme=dark" width="250" height="30" frameborder="0"
                  scrolling="no" style="color-scheme: normal"></iframe>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    getCurrentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
</style>
