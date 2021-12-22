const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue",
      // courseGoalB: "Master vue and build an app",
      courseGoalB: "<h2>Master vue and build an app</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
