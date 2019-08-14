<template>
  <modal v-if="show" @close="closeModal">
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
  props: {
    post: {
      type: Object,
      required: true,
    },
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  watch: {
    showModal() {
      this.show = this.showModal;
    },
  },
  methods: {
    closeModal() {
      this.show = !this.show;
      this.$emit('modalClose', this.show);
    },
  },
};
</script>
<style scoped>
</style>
