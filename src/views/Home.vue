<template>
  <div>
    <img class="title-img" src="@/assets/main_ljh.jpg" /><br/>
    <h3>Lucas James Houghton</h3>
    <h3>6/19/2021 10:22 AM</h3>
    <h3>3 lbs 6 oz</h3>
    <h3>15 inches</h3>
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
