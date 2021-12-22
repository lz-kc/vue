const app = Vue.createApp({
  data() {
    return {
      val: 0,
    };
  },
  computed: {
    result() {
      if (this.val === 37) {
        return this.val;
      } else if (this.val > 37) {
        return "Too much!";
      } else {
        return "Not there yet";
      }
    },
  },
  watch: {
    result(value) {
      const that = this;
      setTimeout(function () {
        that.val = 0;
      }, 5000);
    },
  },
  methods: {
    add(num) {
      this.val += num;
    },
  },
});

app.mount("#assignment");
