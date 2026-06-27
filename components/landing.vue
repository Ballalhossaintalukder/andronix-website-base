<template>
  <div class="relative h-screen mt-8 lg:mt-0 bg-background w-full lg:px-24 px-4">
    <div class="grid grid-cols-1 ms:grid-cols-2 lg:grid-cols-3 justify-between lg:-mt-8">
      <div
        class="mt-6 self-stretch text-center lg:text-left lg:self-center lg:grid-cols-1 justify-self-center lg:justify-self-start order-2 lg:order-1"
      >
        <div xyz="fade big top-100% duration-5" class="xyz-in"
        >
          <h1 class="text-white text-4xl pr-3 lg:text-5xl font-black">Learn
            <strong class="text-primary-600">Linux</strong> on your
            phone.</h1>
        </div>

        <div xyz="fade small bottom-100% ease-out-back delay-2" class="xyz-in">
          <p class="text-gray-400 lg:text-lg text-center lg:text-left px-8 pt-3 lg:pr-8 lg:pl-0">Andronix helps students,
            developers, and tech learners install Ubuntu, Debian, and other educational Linux distributions on their
            Android device. <strong>No root required.</strong></p>

          <div class="flex flex-wrap mt-8 justify-center lg:justify-start items-center lg:items-start">
            <a target="_blank" href="https://play.andronix.app" class="xyz-in"
               xyz="fade big left ease-out-back delay-3"
            >
              <div
                class="min-w-max cursor-pointer bg-primary-600 hover:bg-primary-500 px-5 rounded-lg py-2.5 mt-4 flex mr-4 shadow-lg hover:-translate-y-1 hover:shadow-xl transform transition ease-in-out duration-200"
              >
                <img
                  src="~assets/images/icons/play-store.svg"
                  class="w-5 h-auto mr-3 self-center"
                  alt=""
                />
                <div>
                  <h5 class="text-white text-opacity-80 font-sans text-xs font-medium text-left">
                    Get the app on
                  </h5>
                  <h2 class="text-white font-sans font-bold text-left leading-tight">
                    Google Play
                  </h2>
                </div>
              </div>
            </a>
            <a target="_blank" href="https://github.com/AndronixApp" class="xyz-in"
               xyz="fade big left ease-out-back delay-3"
            >
              <div
                class="min-w-max cursor-pointer bg-card_background border border-gray-700 px-5 rounded-xl py-2.5 mt-4 mr-4 flex hover:-translate-y-1 hover:border-gray-600 transform transition ease-in-out duration-200"
              >
                <img src="~assets/images/icons/github.svg" class="w-5 mr-3 self-center" alt=""/>
                <div>
                  <h5 class="text-gray-400 font-sans text-xs font-medium text-left">
                    Know more on
                  </h5>
                  <h2 class="text-white font-sans font-bold text-left leading-tight">GitHub</h2>
                </div>
              </div>
            </a>
          </div>

        </div>

      </div>

      <div xyz="fade right-100% duration-5"
           class="lg:mt-16 max-w-sm md:max-w-md lg:max-w-screen-md order-1 xyz-in lg:order-2 lg:col-span-2 w-full md:w-8/12 lg:w-full place-self-center"
      >
        <img class="lg:pl-24 object-cover w-full" src="~assets/images/background/final_edited.svg">
      </div>

    </div>
  </div>
</template>

<script>
import detailsJson from '../static/distros/details.json'

export default {
  name: 'Landing',
  data: () => {
    return {
      details: detailsJson.ubuntu,
    }
  },
}
</script>

<style scoped>
</style>
