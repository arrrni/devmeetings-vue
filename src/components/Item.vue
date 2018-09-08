<template>
    <li>
        {{ item.name }} <button @click="removeItem(item)">Remove</button>
    </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
    },
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
