<template>
  <div>
    <h1>Week {{weekNumber}} Updates</h1>
    <br/>
    <BaseDailyInfo v-for="u in weekUpdates" :key="u.id" :update="u"/> <br/>
    <button class="button is-primary is-light" @click="backToTop">Back to Top</button>
  </div>
</template>

<script>
import BaseDailyInfo from "@/components/BaseDailyInfo";

export default {
  components: {
    BaseDailyInfo: BaseDailyInfo
  },
  props: {
      id: null
  },
  created() {
      this.$store.dispatch("getWeeks");
      window.scrollTo(0,0);
  },
  computed: {
      weekUpdates() {
          return this.$store.getters.getUpdatesByWeek(this.id);
      },
      weekNumber() {
          let weekInfo = this.$store.getters.getWeekInfoById(this.id);
          return weekInfo?.weekNum;
      }
  },
  methods: {
      backToTop() {
          window.scrollTo(0,0);
      }
  }
};
</script>

<style>
button {
  font-family: 'Gloria Hallelujah', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 5%;
}
</style>
