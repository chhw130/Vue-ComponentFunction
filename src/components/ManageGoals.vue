<template>
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set goal</button>
  <ErrorAlertModal v-if="inputIsInvalid">
    <h2>Input is invalid</h2>
    <p>Please enter at least a few charactars...</p>
  </ErrorAlertModal>
</template>

<script>
import ErrorAlertModal from "./ErrorAlertModal.vue";

export default {
  components: { ErrorAlertModal },

  data() {
    return {
      inputIsInvalid: false,
    };
  },

  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;

      if (enteredValue === "") {
        this.inputIsInvalid = true;

        console.log(this.inputIsInvalid);
      }
    },
  },
};
</script>
