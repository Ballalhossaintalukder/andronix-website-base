<template>
  <a
    v-if="external"
    :id="idPrefix + item.id"
    :href="item.to"
    target="_blank"
    rel="noopener"
    :class="itemClass"
    @click="$emit('navigate')"
  >
    <span class="mt-0.5 flex-shrink-0" v-html="item.icon"></span>
    <span class="min-w-0">
      <span class="block text-sm font-semibold text-white" :class="titleClass">{{ item.title }}</span>
      <span class="block text-xs text-gray-400 leading-snug">{{ item.description }}</span>
    </span>
  </a>
  <NuxtLink
    v-else
    :id="idPrefix + item.id"
    :to="item.to"
    :class="itemClass"
    @click.native="$emit('navigate')"
  >
    <span class="mt-0.5 flex-shrink-0" v-html="item.icon"></span>
    <span class="min-w-0">
      <span class="block text-sm font-semibold text-white" :class="titleClass">{{ item.title }}</span>
      <span class="block text-xs text-gray-400 leading-snug">{{ item.description }}</span>
    </span>
  </NuxtLink>
</template>

<script>
export default {
  name: 'MegaMenuItem',
  props: {
    item: { type: Object, required: true },
    // 'desktop' keeps titles on one line; 'mobile' allows wrapping
    variant: { type: String, default: 'desktop' },
    // disambiguate ids between the desktop panel and the mobile menu
    idPrefix: { type: String, default: '' }
  },
  computed: {
    external() {
      return typeof this.item.to === 'string' && this.item.to.includes('https://')
    },
    itemClass() {
      return 'group flex items-start space-x-3 px-3 py-2 rounded-lg hover:bg-gray-700 transition duration-150 focus:outline-none focus:bg-gray-700'
    },
    titleClass() {
      return this.variant === 'desktop' ? 'whitespace-nowrap' : ''
    }
  }
}
</script>

<style scoped>
</style>
