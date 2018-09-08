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
        </form>
        <div v-show="errors.has('item')">
            {{ errors.first('item') }}
        </div>
        <button @click="addItem()">Add Item</button>
    </div>
</template>

<script>
import uuid from 'uuid/v4';

export default {
  name: 'app',
  data() {
    return {
      items: [],
      newItem: {
        name: '',
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
