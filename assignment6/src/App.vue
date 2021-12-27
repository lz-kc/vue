<template>
  <section>
    <header><h1>All Users</h1></header>
    <user-data @add-user="addUser"></user-data>
    <ul>
      <li>
        <active-user
          v-for="user in users"
          :key="user.id"
          :id="user.id"
          :name="user.name"
          :age="user.age"
        ></active-user>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    addUser(name, age) {
      const newUser = {
        id: new Date().toISOString(),
        name: name,
        age: age,
      };
      this.users.push(newUser);
    },
  },
};
</script>
