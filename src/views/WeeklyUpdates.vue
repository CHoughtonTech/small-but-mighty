<template>
  <div>
    <h1>Week {{weekNumber}} Updates</h1>
    <br/>
    <BaseDailyInfo v-for="u in weekUpdates" :key="u.id" :update="u" @show-additional-details="showAdditionalDetails"/> <br/>
    <BaseModal v-if="showUpdateDetails" @close-modal="toggleModal">
      <div slot="header"><h3>Mom &amp; Dad Updates</h3></div>
      <div slot="body">{{updateAdditionalDetails}}</div>
    </BaseModal>
    <button class="button is-info" @click="backToTop">Back to Top</button>
  </div>
</template>

<script>
import BaseDailyInfo from "@/components/BaseDailyInfo";
import BaseModal from "@/components/BaseModal";

export default {
  components: {
    BaseDailyInfo: BaseDailyInfo,
    BaseModal: BaseModal
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
  data() {
    return {
      showUpdateDetails: false,
      updateAdditionalDetails: null
    }
  },
  methods: {
      backToTop() {
          window.scrollTo(0,0);
      },
      toggleModal() {
        this.showUpdateDetails = !this.showUpdateDetails;
      },
      showAdditionalDetails(details) {
        this.updateAdditionalDetails = details;
        this.toggleModal();
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
  margin-top: 5%;
}
</style>
