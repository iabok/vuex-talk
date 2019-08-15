import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import PostList from '@/components/PostList.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

const testData = [
  {
    id: '1',
    title: 'Hi there!',
    body: 'Another form of gretting',
  },
  {
    id: '2',
    title: 'Hi there!',
    body: 'Another form of gretting',
  },
  {
    id: '3',
    title: 'Hi there!',
    body: 'Another form of gretting',
  },
];

describe('PostList.vue', () => {
  let actions;
  let store;
  let getters;

  beforeEach(() => {
    actions = {
      getPostsData: jest.fn(),
    };
    getters = {
      getPosts: jest.fn(() => testData),
    };
    store = new Vuex.Store({ actions, getters });
    shallowMount(PostList, { store, localVue });
  });

  it('has a created hook', () => {
    expect(typeof PostList.created).toBe('function');
    expect(actions.getPostsData).toHaveBeenCalled();
  });

  it('renders the list of posts', () => {
    expect(typeof PostList.computed.getPosts).toBe('function');
    expect(getters.getPosts).toHaveBeenCalled();
    expect(getters.getPosts().length).toBe(3);
  });
});
