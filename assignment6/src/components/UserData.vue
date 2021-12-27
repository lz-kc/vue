<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" placeholder="Your name" v-model="inputName" />
    </div>
    <div>
      <label>Age</label>
      <input type="number" placeholder="Your name" v-model="inputAge" />
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputName: "",
      inputAge: 0,
    };
  },
  emits: ["add-user"],
  methods: {
    submitData() {
      this.$emit("add-user", this.inputName, this.inputAge);
      this.inputName = "";
      this.inputAge = 0;
    },
  },
};
</script>
