import Vue from "vue";
import Vuex from "vuex";
import LucasUpdates from "../api/LucasUpdates";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weeks: [],
    updates: []
  },
  mutations: {
    setWeeks(state, weeks) {
      state.weeks = weeks;
    },
    setUpdates(state, updates) {
      state.updates = updates;
    }
  },
  getters: {
    getUpdatesByWeek: (state) => (weekId) => {
      if (weekId !== null) {
        let thisWeeksUpdates = state.updates.filter(update => update.weekId == weekId);
        return thisWeeksUpdates;
      }
    }
  },
  actions: {
    getWeeks({commit}) {
      return new Promise((resolve) => {
        LucasUpdates.getWeeks(weeks => {
          commit('setWeeks', weeks);
          resolve();
        });
      });
    },
    getDailyUpdates({commit}) {
      return new Promise((resolve) => {
        LucasUpdates.getDailyUpdates(updates => {
          commit('setUpdates', updates);
          resolve();
        });
      });
    }
  }
});
