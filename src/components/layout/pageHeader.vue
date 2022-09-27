<template>
  <div>
    <b-navbar :shadow="true" class="navbar is-white">
      <template #start>
        <b-navbar-item @click="setDropdown()"> Home </b-navbar-item>
        <b-navbar-item href="#"> Documentation </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#"> About </b-navbar-item>
          <b-navbar-item href="#"> Contact </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template #end>
        <div v-if="token != null && token !== ''">
         <b-navbar-item>
          <b-button @click="logout">
            <strong>Logout</strong>
          </b-button>
         </b-navbar-item>
        </div>
        <div v-else>
          <b-navbar-item tag="div">
            <div class="buttons">
              <a class="button is-primary" href="#/register">
                <strong>Register</strong>
              </a>
              <a class="button is-dark" href="#/login"> 
              <strong>Login</strong>
              </a>
            </div>
          </b-navbar-item>
        </div>
      </template>
    </b-navbar>
    <div id="aside">
      <page-aside v-if="showHeader" />
    </div>
  </div>
</template>

<script>
import pageAside from "./pageAside.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    // 获取状态数据
    ...mapGetters(["token", "user"]),
  },
  components: { pageAside },
  data() {
    return { showHeader: false };
  },

  methods: {
    setDropdown() {
      if (this.showHeader) {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
    },
    async logout() {
      this.$store.dispatch("user/logout", this.token).then(() => {
        this.$message.info("logout successfully");
        setTimeout(() => {
        }, 500);
      });
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