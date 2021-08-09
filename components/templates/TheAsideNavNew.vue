<template>
  <aside class="block mt-8 -mx-4 bg-gray-100 opacity-transition lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4">
    <div class="h-full overflow-y-auto scrolling-touch text-center lg:text-left lg:h-auto lg:block lg:sticky lg:top-24">
      <nav class="pt-8 lg:overflow-y-auto lg:block lg:pl-0 lg:pr-8 sticky?lg:max-h-(screen-24)" :class="{ hidden: !showNav }">
        <div v-for="(sublinks, group) in sortedLinks" :key="`links-${group}`">
          <template v-if="group !== 'undefined'">
            <h3
              :key="`title-${group}`"
              class="pb-2 font-medium uppercase transition-colors duration-300 ease-linear text-onSufaceSecondary"
            >
              {{ $t(`content.${section}.${group}`) }}
            </h3>
            <ul>
              <li
                v-for="(link, index) in sublinks"
                :key="index"
                class="text-onSurfacePrimary"
              >
                <NuxtLink
                  class="flex p-2 pl-4 transition-colors duration-300 ease-linear rounded hover:text-lightgreen"
                  exact-active-class="bg-green-100 text-lightgreen dark:bg-green-800 dark:text-white"
                  active-class="text-lightgreen dark:text-white"
                  :to="toLink(link)"
                >
                  {{ getTitle(link) }}
                </NuxtLink>
              </li>
            </ul>
          </template>
          <template v-else>
            <h3
              v-for="(link, index) in sublinks"
              :key="index"
              class="pb-2 font-medium uppercase transition-colors duration-300 ease-linear text-onSufaceSecondary"
            >
              <NuxtLink
                class="transition-colors duration-300 ease-linear rounded hover:text-lightgreen"
                exact-active-class="bg-green-100 text-lightgreen dark:bg-green-800 dark:text-white"
                active-class="text-lightgreen dark:text-white"
                :to="toLink(link)"
              >
                {{ getTitle(link) }}
              </NuxtLink>
            </h3>
          </template>
        </div>
      </nav>
    </div>
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
        if (link === 'undefined')
          return -1;
        const contents = Object.keys(this.$i18n.t(`content.${this.section}`))
        return contents.includes(link) ? contents.indexOf(link) : Number.MAX_VALUE
      }).forEach(key => {
        links[key] = this.links[key]
      })
      return links
    }
  },
  methods: {
    toLink(link) {
      return this.localePath({
        name: this.section + '-slug',
        params: { slug: link.slug }
      })
    },
    getTitle(link) {
      return link.menu ? link.menu :
             link.title ? link.title : link.slug
    }
  }
}
</script>
