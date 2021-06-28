<template>
  <div>{{ book }}</div>
</template>

<script>
export default {
  asyncData({ $content, app, params, redirect }) {
    return { book: params.book }
  },
}
</script>
