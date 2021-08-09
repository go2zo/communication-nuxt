<template>
  <div class="shadow-main">
    <div class="container px-4 pb-12 mx-auto lg:flex">
      <TheAsideNav :links="links" :section="section" class="hidden lg:block" />
      <div class="w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ route, $loadPages }) {
    const section = 'example'
    return { ...await $loadPages(route.path, section), section }
  }
}
</script>
