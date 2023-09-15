<template>
  <div>
    <TheHeader />
    <!-- <BadgeList />
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <CourseGoal>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProps }}</p>
      </template>
    </CourseGoal> -->
    <button @click="setSeletecComponent('ActiveGoals')">Active Goals</button>
    <button @click="setSeletecComponent('ManageGoals')">Manage Goals</button>
    <ManageGoals v-if="seletedComponent === 'ManageGoals'" />
    <ActiveGoals v-if="seletedComponent === 'ActiveGoals'" />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoal from "./components/CourseGoal.vue";
import ManageGoals from "./components/ManageGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";

export default {
  components: {
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoal,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
      seletedComponent: ManageGoals,
    };
  },

  methods: {
    setSeletecComponent(cmp) {
      this.seletedComponent = cmp;

      console.log(this.seletedComponent);
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
