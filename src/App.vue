<template>
    <div id="app">
        <h1>Item list</h1>
        <item-list :items="sharedState.items" @remove-item="onRemoveItem"></item-list>
        <p v-if="!sharedState.items.length">No items!</p>
        <add-item @add-item="onAddItem"></add-item>
        <hr>
        <h1>Order items</h1>
        <add-item @add-item="onAddOrderItem"></add-item>
        <item-list :items="sharedState.orderItems" @remove-item="onRemoveOrderItem"></item-list>
        <hr>
        <find-item></find-item>
    </div>
</template>

<script>
import ItemList from './components/ItemList.vue';
import AddItem from './components/AddItem.vue';
import FindItem from './components/FindItem.vue';

export default {
  name: 'app',
  components: {
    FindItem,
    ItemList,
    AddItem,
  },
  created() {
    this.$store.dispatch('fetchItems');
  },
  data() {
    return {
      sharedState: this.$store.state,
    };
  },
  methods: {
    onAddItem(item) {
      this.$store.dispatch('addItem', item);
    },
    onAddOrderItem(item) {
      const current = this.sharedState.items.find(x => x.name === item.name);
      if (!current) {
        return;
      }
      this.$store.dispatch('addOrderItem', current);
    },
    onRemoveItem(item) {
      this.$store.dispatch('removeItem', item);
    },
    onRemoveOrderItem(item) {
      this.$store.dispatch('removeOrderItem', item);
    },
  },
};
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
