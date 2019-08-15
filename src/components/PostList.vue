<template>
  <div>
    <div class="posts">
      <h1 class="news-blog">News Blog</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="post in getPosts">
            <tr v-bind:key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.title }}</td>
              <td>{{ post.body }}</td>
              <td><a @click="showDetails(post)" href="#">Read</a></td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <post-details
      :showModal="showModal"
      :post="selectedPost"
      @modalClose="resetModal"
    />
  </div>
</template>

<script>
import PostDetails from './PostDetails.vue';
import BASE_URL from '../config';

export default {
  components: {
    PostDetails,
  },
  data() {
    return {
      showModal: false,
      selectedPost: {},
      allPosts: [],
    };
  },
  created() {
    this.getPostsData();
  },
  computed: {
    getPosts() {
      return this.allPosts;
    },
  },
  methods: {
    async getPostsData() {
      try {
        const response = await fetch(`${BASE_URL}/posts/`);
        const result = await response.json();
        if (response.status === 200) {
          this.allPosts = result;
        }
      } catch (errors) {
        throw Error(errors);
      }
    },
    showDetails(post) {
      this.showModal = !this.showModal;
      this.selectedPost = post;
    },
    resetModal(status) {
      this.showModal = status;
    },
  },
};
</script>
<style lang="scss" scoped>
.posts {
  width: 80%;
  h1 {
    &.news-blog {
      margin: 30px 0px 30px 0px ;
    }
  }
  table {
    border-collapse: collapse;
  }
  .trucate-text {
    max-width: 1vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  td, th {
    padding: 8px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #000000;
    color: white;
    &:first-child {
      width: 1%;
    }
  }

  tr {
    &:nth-child(even) {
      background-color: #f2f2f2;
    }
    &:hover {
      background-color: #ddd;
    }
  }

  tbody {
    tr {
      padding: 20px;
      height: 100px;
      td {
        text-align: left;
        &:first-child {
          width: 1%;
        }
        &:nth-child(2) {
          width: 20%;
          @extend .trucate-text;
        }
        &:nth-child(3) {
          width: 80%;
          @extend .trucate-text;
        }
      }
    }
  }
}
</style>
