const app = Vue.createApp({
  data() {
    return {
      val: "",
      confirmedVal: "",
    };
  },
  methods: {
    showAlert() {
      alert("This is an alert");
    },
    setVal(event) {
      this.val = event.target.value;
    },
    confirmVal() {
      this.confirmedVal = this.val;
    },
  },
});

app.mount("#assignment");
