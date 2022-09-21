<template>
  <div class="columns">
    <div class="column is-one-third"></div>
    <div class="column is-one-second" >
      <div class="tile is-parent" id="loginCard">
        <article class="tile is-child notification is-success">
          <section>
            <b-field
              label="Username"
              type="is-success"
              message="This username is available"
            >
              <b-input value="johnsilver" maxlength="30"></b-input>
            </b-field>

            <b-field label="Password">
              <b-input type="password" value="iwantmytreasure" password-reveal>
              </b-input>
            </b-field>
          </section>
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
      name: "John Silver",
    };
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