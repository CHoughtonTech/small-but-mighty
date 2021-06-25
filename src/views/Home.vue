<template>
  <div>
    <img src="../../public/baby.png" /><br/>
    Lucas James Houghton<br/>
    6/19/2021 10:22 AM<br/>
    3 lbs 6 oz <br/>
    15 inches<br/>
    <!-- <BaseDailyInfo :update=update></BaseDailyInfo>
    <BaseDailyInfo :update=secondUpdate></BaseDailyInfo> -->
    <BaseDailyInfo v-for="u in weekUpdates" :key="u.id" :update="u"/>
  </div>
</template>

<script>
import BaseDailyInfo from "@/components/BaseDailyInfo";

export default {
  components: {
    BaseDailyInfo: BaseDailyInfo
  },
  computed: {
    weekUpdates() {
      return this.$store.getters.getUpdatesByWeek(0);
    }
  },
  data() {
    return {
      updates: [],
      update: {
        id: 0,
        date: "6/19/2021",
        details: "Born Today! It's cold out here!",
        weight: 1540,
        url: "https://i.imgur.com/veaZVZ0.jpeg",
        additionalDetails: "Luke was born after complications due to pre-eclampsia."
      },
      secondUpdate: {
        id: 0,
        date: "6/25/2021",
        details: "Stayed off oxygen, and gained one whole ounce today! Mom and Dad are happy with my growth!",
        weight: 1280,
        url: "https://i.imgur.com/veaZVZ0.jpeg",
        additionalDetails: "Luke's health has been doing great, and he has managed to stay off of oxygen as well as IV fluids. He will now start gaining some weight, which we already saw with his 1 oz gain today. The doctors are optimistic on his growth, and caution that setbacks are still a possibility with any preemie."
      }
    }
  }
};
</script>
