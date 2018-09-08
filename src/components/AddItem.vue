<template>
    <form @submit.prevent="onSubmit">
        <label for="addItem">Item to add</label>
        <input name="item" id="addItem" v-model="newItem.name" v-validate="'required|min:3'">
        <div v-show="errors.has('item')">
            {{ errors.first('item') }}
        </div>
    </form>
</template>

<script>
import uuid from 'uuid/v4';

export default {
  name: 'AddItem',
  data() {
    return {
      newItem: {
        name: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return;
        }
        this.$emit('add-item', {
          id: uuid(),
          ...this.newItem,
        });
        this.newItem.name = '';
        this.$validator.reset();
      });
    },
  },
};
</script>

<style scoped>

</style>
