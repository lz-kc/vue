const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "marco",
          name: "Marco Zhou",
          phone: "123 456 7890",
          email: "m.zhou@gmail.com",
        },
        {
          id: "lisa",
          name: "Lisa Li",
          phone: "789 456 3456",
          email: "lisa@microsoft.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details</button>
          <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "marco",
        name: "Marco Zhou",
        phone: "123 456 7890",
        email: "m.zhou@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});

app.mount("#app");
