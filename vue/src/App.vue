<template>
  <div id="app">
    <div class="row">
      <div class="col col-12">
        <h1>My fancy todo app</h1>
      </div>
    </div>

    <add-new-item-form :items="items" />

    <div class="row">
      <div class="col col-12">
        <items-table :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AddNewItemForm from "@/components/AddNewItemForm";
import ItemsTable from "@/components/ItemsTable";

  export default {
    components: {
      AddNewItemForm,
      ItemsTable,
    },
    computed: mapState({
      items: state => state.items,
    })
  }
</script>
