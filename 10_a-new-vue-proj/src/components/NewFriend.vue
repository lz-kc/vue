<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="inputName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="inputPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="inputEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputName: "",
      inputPhone: "",
      inputEmail: "",
    };
  },
  emits: ["add-friend"],
  methods: {
    submitData() {
      this.$emit(
        "add-friend",
        this.inputName,
        this.inputPhone,
        this.inputEmail
      );
      this.inputName = "";
      this.inputPhone = "";
      this.inputEmail = "";
    },
  },
};
</script>
