<template>
  <div class="columns">
    <div class="column is-one-third"></div>
    <div class="column is-one-second">
      <div class="tile is-parent" id="loginCard">
        <article class="tile is-child notification is-success">
          <section>
            <b-field label="Username" type="is-success">
              <b-input v-model="username" maxlength="15"></b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                type="password"
                v-model="password"
                maxlength="20"
                password-reveal
              >
              </b-input>
            </b-field>

            <b-field label="CheckPassword">
              <b-input
                type="password"
                v-model="checkPassword"
                maxlength="20"
                password-reveal
              >
              </b-input>
            </b-field>

            <b-field label="Email" type="is-success">
              <b-input v-model="email"></b-input>
            </b-field>
          </section>

          <b-button label="Register" class="mt-5" @click="regitster()"></b-button>
        </article>
      </div>
    </div>

    <div class="column"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      checkPassword: "",
      email: "",
    };
  },

  methods: {
    register() {
      console.log(this.checkPassword);
    },
  },
};
</script>

<style>
#loginCard {
  position: absolute;
  top: 150px;
  z-index: 20;
}
</style>