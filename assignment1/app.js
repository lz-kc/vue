const app = Vue.createApp({
  data() {
    return {
      name: "Li",
      age: 30,
      imageURL:
        "https://static.wikia.nocookie.net/sans-nagito/images/3/30/Nagi.JPG/revision/latest?cb=20200511142605",
    };
  },
  methods: {
    favoriteNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
