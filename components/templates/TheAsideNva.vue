<template>
  <aside class="opacity-transition block bg-gray-100 mt-8 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4">
    <div></div>
  </aside>
</template>

<script>
import sortBy from 'lodash.sortby'

export default {
  props: {
    links: {
      type: Object,
      default: () => {}
    },
    section: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      current: 0,
      setInter: null,
      showNav: false
    }
  },
  computed: {
    visible() {
      return this.$store.state.visibleAffix
    },
    path() {
      return this.$route.path.slice(-1) === '/'
        ? this.$route.path.slice(0, -1)
        : this.$route.path
    },
    sortedLinks() {
      const links = {}
      sortBy(Object.keys(this.links), link => {
        return Object.keys(this.$i18n.t(`content.${this.section}`)).indexOf(link)
      }).forEach(key => {
        links[key] = this.links[key]
      })
      return links
    }
  }
}
</script>
