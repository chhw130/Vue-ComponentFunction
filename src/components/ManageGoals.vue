<template>
  <h2>Manage Goals</h2>
  <input type="text" />
  <button @click="setGoal">Set goal</button>
</template>

<script>
export default {
  methods: {
    setGoal() {
      const enteredValue = this.$refs;

      console.log(enteredValue);
      if (enteredValue === "") {
        alert("Input must not be empty!");
      }
    },
  },
};
</script>
