<template>
    <div>
        <input type="text" placeholder="Find item" v-model="search">
        <p>{{ result }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FindItem',
  data() {
    return {
      search: '',
      result: '',
    };
  },
  watch: {
    search() {
      this.result = 'Waiting to stop writing...';
      this.getResult();
    },
  },
  methods: {
    getResult() {
      axios.get(`http://localhost:3000/posts?title=${this.search}`)
        .then(function (result) {
          this.result = result.data[0].name;
        })
        .catch(function (error) {
          this.result = error.data;
        });
    },
  },
};
</script>

<style scoped>

</style>
