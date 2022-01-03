<template>
  <h3>{{ counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      // return this.$store.getters.finalCounter;
      return this.$store.getters['counter/finalCounter'];
    },
  },
};
</script>
