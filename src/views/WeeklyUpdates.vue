<template>
  <div>
    <BaseDailyInfo v-for="u in weekUpdates" :key="u.id" :update="u"/>
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
  computed: {
      weekUpdates() {
          return this.$store.getters.getUpdatesByWeek(this.id);
      }
  }
};
</script>
