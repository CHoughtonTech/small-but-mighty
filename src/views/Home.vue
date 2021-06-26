<template>
  <div>
    <BaseWeeklyInfo v-for="w in this.$store.state.weeks" :key="w.id" :week="w"/>
  </div>
</template>

<script>
import BaseWeeklyInfo from "@/components/BaseWeeklyInfo";

export default {
  components: {
    BaseWeeklyInfo: BaseWeeklyInfo
  }
};
</script>
