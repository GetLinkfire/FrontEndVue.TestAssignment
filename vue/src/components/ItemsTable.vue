<template>
  <table>
    <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Description</th>
      <th>Edit</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in items" :key="item.title">
      <td>{{ index + 1 }}</td>
      <td>{{ item.title }}</td>
      <td><small>{{ item.description }}</small></td>
      <td>
        <button class="btn-danger btn-small" @click="removeItem(item.title)">Delete</button> &nbsp;
        <button class="btn-secondary btn-small">Edit</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "ItemsTable",
  props: {
    items: {
      type: Array,
    }
  },
  methods: {
    removeItem(title) {
      this.$store.dispatch('DELETE_ITEM', title);
    }
  },
}
</script>

<style scoped>

</style>
