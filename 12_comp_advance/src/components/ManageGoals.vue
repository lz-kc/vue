<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <teleport to="body">
    <error-alert v-if="inputInvalid">
      <h2>Input is Invalid</h2>
      <p>Please enter something!</p>
      <button @click="confirmError">OK</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  components: { ErrorAlert },
  data() {
    return {
      inputInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputInvalid = true;
      }
    },
    confirmError() {
      this.inputInvalid = false;
    },
  },
};
</script>
