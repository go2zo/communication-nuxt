<template>
  <div class="shadow-main">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <TheAsideNav :links="links" section="sms" class="hidden lg:block" />
      <div class="w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nestedRoutes: []
    }
  },
  created() {
    this.$router.options.routes.forEach(routeOption => {
      if (routeOption.path.startsWith(this.$route.path)) {
        this.nestedRoutes.push({
          name: routeOption.name,
          path: routeOption.path
        })
      }
    })
  }
}
</script>
