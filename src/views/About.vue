<template>
  <div class="about">
    <h4>This is my family! See how different we were when we were born!</h4> <br/>
    <ul>
      <li v-for="f in this.$store.state.family" :key="f.id"><BaseFamilyInfo :familyMember="f"></BaseFamilyInfo></li>
    </ul>
    <button class="button is-info" @click="backToTop">Back to Top</button>
  </div>
</template>
<script>
import BaseFamilyInfo from '../components/BaseFamilyInfo.vue'
export default {
  components: {
    BaseFamilyInfo: BaseFamilyInfo
  },
  methods: {
    backToTop() {
      window.scrollTo(0,0);
    }
  } 
}
</script>
