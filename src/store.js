import Vue from 'vue';
import Vuex from 'vuex';
import BASE_URL from './config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    selectedPost: {},
    showModal: false,
  },
  mutations: {
    ADD_POSTS(state, payload) {
      state.posts = payload;
    },
    SELECTED_POST(state, payload) {
      state.selectedPost = payload;
    },
    SHOW_MODAL(state, payload) {
      state.showModal = payload;
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
    getSelectedPost(state) {
      return state.selectedPost;
    },
    showModal(state) {
      return state.showModal;
    },
  },
  actions: {
    async getPostsData({ commit }) {
      try {
        const response = await fetch(`${BASE_URL}/posts/`);
        const result = await response.json();
        if (response.status === 200) {
          commit('ADD_POSTS', result);
        }
      } catch (errors) {
        throw Error(errors);
      }
    },
    updatePost({ commit }, payload) {
      commit('SELECTED_POST', payload);
      commit('SHOW_MODAL', true);
    },
  },
});
