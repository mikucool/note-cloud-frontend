<template>
  <div>
    <b-navbar :shadow="true" class="navbar is-white">
      <template #start>
        <b-navbar-item @click="setHeader()"> Home </b-navbar-item>
        <b-navbar-item href="#"> Documentation </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#"> About </b-navbar-item>
          <b-navbar-item href="#"> Contact </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary" href="#/register">
              <strong>Register</strong>
            </a>
            <a class="button is-dark" href="#/login"> Log in</a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div id="aside">
      <page-aside v-if="showHeader" />
    </div>
  </div>
</template>

<script>
import pageAside from "./pageAside.vue";
export default {
  components: { pageAside },
  data() {
    return { showHeader: false };
  },

  methods: {
    setHeader() {
      if (this.showHeader) {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
    },
  },
};
</script>

<style>
#aside {
  position: absolute;
  z-index: 20;
}
</style>