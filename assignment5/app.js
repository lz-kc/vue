const app = Vue.createApp({
  data() {
    return {
      enteredTask: "",
      tasks: [],
      hidden: false,
    };
  },
  computed: {
    buttonCaption() {
      return this.hidden ? "Show List" : "Hide List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = "";
    },
    toggle() {
      this.hidden = !this.hidden;
    },
  },
});

app.mount("#assignment");
