<template>
  <modal v-if="showModal" @close="closeModal">
    <h3 slot="header">Post Details</h3>
    <div slot="body">
      <div>
        <span><strong>Title:</strong></span>&nbsp;{{ getSelectedPost.title }}
      </div><br>
      <div><strong>Body:</strong>&nbsp;{{ getSelectedPost.body }}</div>
    </div>
  </modal>
</template>
<script>
import { mapGetters } from 'vuex';
import Modal from './Modal.vue';

export default {
  name: 'PostDetails',
  components: {
    Modal,
  },
  computed: {
    ...mapGetters([
      'getSelectedPost',
      'showModal',
    ]),
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
