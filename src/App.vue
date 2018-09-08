<template>
    <div id="app">
        <h1>Item list</h1>
        <ul>
            <li v-for="item in items" :key="item.id" :id="item.id">{{ item.name }}
                <button @click="removeItem(item)">Remove</button>
            </li>
        </ul>
        <p v-if="!items.length">No items!</p>
        <form @submit.prevent="addItem">
            <label for="addItem">Item to add</label>
            <input name="item" id="addItem" v-model="newItem.name" v-validate="'required|min:3'">
            <div v-show="errors.has('item')">
                {{ errors.first('item') }}
            </div>
        </form>
        <hr>
        <h1>Order items</h1>
        <form @submit.prevent="orderItem">
            <label for="itemList">Select item from list</label>
            <select id="itemList" v-model="selectedItem.id">
                <option v-for="item in items" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
            <input type="submit" value="Order selected">
        </form>
        <ul>
            <li v-for="item in orderItems" :key="item.id" :id="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
import uuid from 'uuid/v4';

export default {
  name: 'app',
  data() {
    return {
      items: [],
      orderItems: [],
      newItem: {
        name: '',
      },
      selectedItem: {
        id: '',
      },
    };
  },
  methods: {
    addItem() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        this.items.push({
          id: uuid(),
          ...this.newItem,
        });
        this.newItem.name = '';
        this.$validator.reset();
      });
    },
    removeItem(item) {
      this.items.pop(item);
    },
    orderItem() {
      const item = this.items.find(x => x.id === this.selectedItem.id);
      if (!item) {
        return;
      }
      this.orderItems.push(item);
      this.selectedItem.id = '';
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
