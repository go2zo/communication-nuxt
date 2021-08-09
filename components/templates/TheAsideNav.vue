<template>
  <aside class="block mt-8 -mx-4 bg-gray-100 opacity-transition lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4">
    <div>
      <nav>
        <div v-for="(sublinks, group) in sortedLinks" :key="`links-${group}`">
          <h3 :key="`title-${group}`"></h3>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script>
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
      return this.links
    }
  }
}
</script>
