<template>
  <li>
    <h2>{{ name }} {{ isShort ? "(Short)" : "(NOT SHORT!!!)" }}</h2>
    <button @click="toggleDetails">
      {{ detailsVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleShort">Toggle Short</button>
    <ul v-if="detailsVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
      <li><strong>Is Short: </strong>{{ isShort }}</li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    emailAddress: {
      type: String,
      required: true,
    },
    isShort: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toggle-short", "delete"],
  // emits: {
  //   'toggle-short': function(id) {
  //     if (id) return true;
  //     else {
  //       console.warn('id missing!');
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      detailsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleShort() {
      this.$emit("toggle-short", this.id);
    },
    deleteFriend() {
      this.$emit("delete", this.id);
    },
  },
};
</script>
