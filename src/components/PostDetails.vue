<template>
  <modal v-if="showModal" @close="closeModal">
    <h3 slot="header">Post Details</h3>
    <div slot="body">
      <div>
        <span><strong>Title:</strong></span>&nbsp;{{ post.title }}
      </div><br>
      <div><strong>Body:</strong>&nbsp;{{ post.body }}</div>
    </div>
  </modal>
</template>
<script>
import Modal from './Modal.vue';

export default {
  name: 'PostDetails',
  components: {
    Modal,
  },
  computed: {
    post() {
      return this.$store.getters.getSelectedPost;
    },
    showModal() {
      return this.$store.getters.showModal;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit('SHOW_MODAL', false);
    },
  },
};
</script>
<style scoped>
</style>
