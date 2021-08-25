<template>
  <div
    class="column justify-center items-center content-center full-width full-height bg-blue-grey-2"
  >
    <div class="column">
      <h1>{{ language?.home?.title }}</h1>
      <h3 class="text-center q-mt-xs">This page required no authentication</h3>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Page1",
  data() {
    return {};
  },
  computed: {
    ...mapState("Auth", ["language"]),
  },
};
</script>

<style scoped></style>
