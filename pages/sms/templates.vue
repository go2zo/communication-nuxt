<template>
  <div class="shadow-main">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <div>
        <h2>SMS</h2>
        <table>
          <tbody>
            <tr v-for="template in templates" :key="template.id">
              <td>{{ template.id }}</td>
              <td>{{ template.title }}</td>
              <td>{{ template.category }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $http }) {
    const templates = await $http.$get('https://my-json-server.typicode.com/go2zo/fakeapp/templates')
    return { templates }
  },
}
</script>
