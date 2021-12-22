const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      hidden: false,
      inputColor: "",
    };
  },
  computed: {
    inputClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
      };
    },
    toggleClasses() {
      return {
        hidden: this.hidden,
        visible: !this.hidden,
      };
    },
  },
  methods: {
    toggle() {
      this.hidden = !this.hidden;
    },
  },
});

app.mount("#assignment");
