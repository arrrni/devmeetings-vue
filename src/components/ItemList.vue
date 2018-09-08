<template>
    <ul>
        <item v-for="item in items" :item="item" :key="item.id" @remove-item="removeItem"></item>
    </ul>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'ItemList',
  components: {
    Item,
  },
  props: {
    items: Array,
  },
  methods: {
    removeItem(item) {
      this.$emit('remove-item', item);
    },
  },
};
</script>

<style scoped>

</style>
