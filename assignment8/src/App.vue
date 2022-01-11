<template>
  <h2>My Course Goals: Composition</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <div v-if="show">
    <h3>{{ goal1 }}</h3>
    <h3>{{ goal2.goal }}</h3>
    <h3>{{ goal3.goal }}</h3>
  </div>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggle">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
  <h2>My Course Goal: Options</h2>
  <h3 v-if="visible">{{ goal4 }}</h3>
  <button @click="toggle2">Toggle Goal Option</button>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  setup() {
    const showGoals = ref(true);
    const g1 = ref('Eat more');
    const g2 = ref({
      goal: 'Eat better',
    });
    const g3 = reactive({
      goal: 'Six Pack',
    });

    function toggleGoals() {
      showGoals.value = !showGoals.value;
    }

    return {
      goal1: g1,
      goal2: g2,
      goal3: g3,
      show: showGoals,
      toggle: toggleGoals,
    };
  },
  data() {
    return {
      goal4: 'Stay sane',
      visible: true,
    };
  },
  methods: {
    toggle2() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
