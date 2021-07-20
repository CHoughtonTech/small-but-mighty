<template>
  <div id="app">
    <br/>
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <hr/>
    <div class="copyright">&copy; {{currentYear}} OxSoft Solutions</div>
    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getWeeks");
    this.$store.dispatch("getDailyUpdates");
    this.$store.dispatch("getFamilyMembers");
    this.$store.dispatch("getLucasInfo");
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Gloria Hallelujah', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:lightgreen;
}

#nav {
  padding-bottom: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}

hr {
  width: 100%;
  background-color: #2c3e50;
  height: 1px;
}
h1 {
  font-size: 50px;
  font-weight: 700;
}
h2 {
  font-size: 38px;
  font-weight: 700;
}
h3 {
  font-size: 28px;
  font-weight: 700;
}
h4 {
  font-size: 21px;
  font-weight: 700;
}
h5 {
  font-size: 16px;
  font-weight: 700;
}
h6 {
  font-size: 15px;
  font-weight: 700;
}
.title-img {
  width:300px;
  border-radius: 25px;
}
</style>
