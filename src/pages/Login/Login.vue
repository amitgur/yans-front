<template>
  <div
    class="column justify-center items-center content-center full-width full-height bg-blue-grey-2"
  >
    <div class="column">
      <h3 class="text-center q-mt-xs">Login</h3>
      <q-card square bordered class="q-pa-lg shadow-1">
        <q-card-section>
          <q-form class="q-gutter-md">
            <q-input
              square
              filled
              clearable
              v-model="username"
              type="text"
              label="Email"
              :rules="[(val) => !!val || 'Field is required']"
            />
            <q-input
              square
              filled
              clearable
              v-model="password"
              type="password"
              label="Password"
              :rules="[(val) => !!val || 'Field is required']"
            />
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-md">
          <q-btn
            unelevated
            color="light-green-7"
            size="lg"
            class="full-width"
            label="Login"
            @click.prevent="login"
          />
        </q-card-actions>
      </q-card>
      <q-btn to="/sign-up">Sign up for new users</q-btn>
    </div>
  </div>
</template>

<script>
import myMixins from "src/mixins/myMixins";

export default {
  name: "Login",
  mixins: [myMixins],
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    async login() {
      if (!this.username || !this.password) {
        this.myDialog("Some of the fields are missing");
        return;
      }

      // login user
      const user = {
        username: this.username,
        password: this.password,
      };
      let response;
      try {
        response = await this.$axios.post("/apiV1/login_user", user);
        // route to login
        this.myDialog(response.data.msg);
        if (response.data.status === "ok") {
          this.$router.push("/");
        }
      } catch (err) {
        this.serverError(err);
      }
    },
  },
};
</script>

<style scoped></style>
