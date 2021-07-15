import Vue from "vue";
import Vuex from "vuex";
import LucasUpdates from "../api/LucasUpdates";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weeks: [],
    updates: [],
    family: []
  },
  mutations: {
    setWeeks(state, weeks) {
      state.weeks = weeks;
    },
    setUpdates(state, updates) {
      state.updates = updates;
    },
    setFamily(state, family) {
      state.family = family;
    }
  },
  getters: {
    getUpdatesByWeek: (state) => (weekId) => {
      if (weekId !== null) {
        let thisWeeksUpdates = state.updates.filter(update => update.weekId == weekId);
        return thisWeeksUpdates;
      }
    },
    getWeekInfoById: (state) => (weekId) => {
      if (weekId !== null) {
        return state.weeks.find(week => week.id === parseInt(weekId));
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
    },
    getFamilyMembers({commit}){
      return new Promise((resolve) => {
        LucasUpdates.getFamily(family => {
          commit('setFamily', family);
          resolve();
        });
      });
    }
  }
});
