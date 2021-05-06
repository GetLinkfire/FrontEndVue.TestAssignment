import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        title: 'Create nice components',
        description: 'chop chop chop',
      },
      {
        title: 'Hook up logic',
        description: 'This is where the fun begins',
      },
      {
        title: 'Apply magic dust',
        description: 'Sprinkle sprinkle',
      }
    ]
  },
  mutations: {
    PUSH_ITEM_TO_LIST(state, item) {
      state.items.push(item);
    },
    DELETE_ITEM_FROM_LIST(state, itemTitle) {
      const elementIndex = state.items.findIndex(item => item.title === itemTitle);
      state.items.splice(elementIndex, 1);
    }
  },
  actions: {
    ADD_NEW_ITEM({ commit }, item) {
      commit('PUSH_ITEM_TO_LIST', item);
    },
    DELETE_ITEM({ commit }, itemTitle) {
      // unique title is using
      commit('DELETE_ITEM_FROM_LIST', itemTitle);
    }
  }
})
