import Vue from 'vue';
import Vuex from 'vuex';
import BASE_URL from './config';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    ADD_POSTS(state, posts) {
      state.posts = posts;
    },
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
  actions: {
    async getPostsData({ commit }) {
      try {
        const response = await fetch(`${BASE_URL}/posts/`);
        const result = await response.json();
        if (response.status === 200) {
          console.log(result);
          commit('ADD_POSTS', result);
        }
      } catch (errors) {
        throw Error(errors);
      }
    },
  },
});
