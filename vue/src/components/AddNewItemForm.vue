<template>
  <form @submit="addNewItem" ref="form">
    <div class="row">
      <div class="col col-5">
        <form-group label="Title" id="input-1" v-model="item.title"></form-group>
      </div>
      <div class="col col-5">
        <form-group label="Description" id="input-2" v-model="item.description"></form-group>
      </div>
      <div class="col col-2">
        <div class="form-group">
          <label>&nbsp;</label>
          <button type="submit" class="input-block btn-primary btn-small">Add</button>
        </div>
      </div>
    </div>

    <div class="row" v-show="error">
      <div class="col col-12 padding-top-none">
        <div class="alert alert-danger">{{ error }}</div>
      </div>
    </div>
  </form>
</template>

<script>
import FormGroup from "@/components/FormGroup";

export default {
  name: "AddNewItemForm",
  components: {
    FormGroup,
  },
  props: {
    items: {
      type: Array,
    }
  },
  data() {
    return {
      item: {
        title: null,
        description: null,
      },
      error: false,
    }
  },
  methods: {
    addNewItem() {
      if (!this.item.title || !this.item.description) {
        this.error = 'Please fill all fields';
        return;
      }

      debugger;
      if (this.items.some(item => item.title === this.item.title)) {
        this.error = 'Please use unique title';
        return;
      }

      this.$store.dispatch('ADD_NEW_ITEM', this.item)

      // clear form after submit
      this.$refs.form.reset();
    }
  },
}
</script>

<style scoped>

</style>
