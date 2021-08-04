<template>
  <div class="shadow-main">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <TheAsideNav :links="links" section="sms" class="hidden lg:block" />
      <div class="w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4">
        <NuxtChild />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  key(route) {
    return route.fullPath
  },
  async asyncData({app, route}) {
    let pages = []
    console.log(app.router.options.routes)
    try {
      pages = await app.router.options.routes.filter(r => r.path.startsWith(route.path))
    } catch (e) { }

    return {
      links: pages
    }
  }
}
</script>
