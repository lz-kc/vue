const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      doublename: "",
    };
  },
  computed: {
    fullname() {
      return this.name === "" ? "" : this.name + " " + "Zhang";
    },
  },
  watch: {
    name(value) {
      this.doublename = value + " " + value;
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    // outputFullname() {
    //   return this.name === "" ? "" : this.name + " " + "Zhang";
    // },
  },
});

app.mount("#events");
