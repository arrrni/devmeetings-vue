<template>
    <div id="app">
        <h1>Item list</h1>
        <item-list :items="items" @remove-item="onRemoveItem"></item-list>
        <p v-if="!items.length">No items!</p>
        <add-item @add-item="onAddItem"></add-item>
        <hr>
        <h1>Order items</h1>
        <add-item @add-item="onAddOrderItem"></add-item>
        <item-list :items="orderItems" @remove-item="onRemoveOrderItem"></item-list>
    </div>
</template>

<script>
import ItemList from './components/ItemList.vue';
import AddItem from './components/AddItem.vue';

export default {
  name: 'app',
  components: {
    ItemList,
    AddItem,
  },
  data() {
    return {
      items: [],
      orderItems: [],
      selectedItem: {
        id: '',
      },
    };
  },
  methods: {
    onAddItem(item) {
      this.items.push(item);
    },
    onAddOrderItem(item) {
      const current = this.items.find(x => x.name === item.name);
      if (!current) {
        return;
      }
      this.orderItems.push(current);
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
