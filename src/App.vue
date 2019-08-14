<template>
  <div id="app">
    <post-list/>
  </div>
</template>

<script>
import PostList from './components/PostList.vue';

export default {
  name: 'app',
  components: {
    PostList,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 20px auto auto 250px;
}
</style>
