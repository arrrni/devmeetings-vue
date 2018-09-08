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
    </div>
</template>

<script>
import store from '../store';
import ItemList from './components/ItemList.vue';
import AddItem from './components/AddItem.vue';

export default {
  name: 'app',
  components: {
    ItemList,
    AddItem,
  },
  created() {
    store.fetchItems();
  },
  data() {
    return {
      sharedState: store.state,
    };
  },
  methods: {
    onAddItem(item) {
      store.addItem(item);
    },
    onAddOrderItem(item) {
      const current = this.items.find(x => x.name === item.name);
      if (!current) {
        return;
      }
      store.addOrderItem(current);
    },
    onRemoveItem(item) {
      this.items.pop(item);
    },
    onRemoveOrderItem(item) {
      this.orderItems.pop(item);
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
