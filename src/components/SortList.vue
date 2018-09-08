<template>
    <div>
        <a @click="sortAlphabetically">Sort alphabetically</a>
    </div>
</template>

<script>
export default {
  name: 'SortList',
  props: {
    items: Array,
  },
  methods: {
    sortAlphabetically() {
      const newItems = this.items.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      this.$emit('item-sort', newItems);
    },
  },
};
</script>

<style scoped>

</style>
