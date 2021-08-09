<template>
  <div class="shadow-main">
    <div class="container px-4 pb-12 mx-auto lg:flex">
      <TheAsideNav :links="links" section="sms" class="hidden lg:block" />
      <div class="w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({app, route}) {
    let pages = {}

    try {
      pages = await app.router.options.routes.find(r => r.path.startsWith(route.path))
    } catch (e) { }

    return {
      links: pages
      // links: app.$deepPick(pages, ['path', 'name'])
    }
  }

}
</script>
