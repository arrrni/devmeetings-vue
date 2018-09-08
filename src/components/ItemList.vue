<template>
    <div>
        <sort-list :items="items" @item-sort="onItemSort"></sort-list>
        <ul>
            <item v-for="item in items" :item="item" :key="item.id" @remove-item="removeItem(item)"></item>
        </ul>
    </div>

</template>

<script>
import Item from './Item.vue';
import SortList from './SortList.vue';

export default {
  name: 'ItemList',
  components: {
    SortList,
    Item,
  },
  props: {
    items: Array,
  },
  methods: {
    removeItem(item) {
      this.$emit('remove-item', item);
    },
    onItemSort(items) {
      this.items = items;
    },
  },
};
</script>

<style scoped>

</style>
