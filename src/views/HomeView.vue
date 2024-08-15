<style scoped>
    .usersCountWrapper {
        background: greenyellow;
    }
</style>

<template>
    <h1>{{title}}</h1>
    <button @click="fetchUsers">Get response from server</button>
    <button @click="changeState">Change the state of users data wrapper</button>
    <br><br><hr><br>
    <div class="usersCountWrapper">
        <h2>Total users count is: {{state.usersCount}}</h2>
    </div>
    <br><hr><br>
    <div class="responseWrapper">
        <li v-for="user in state.usersData">
            <p>{{user.name}}</p>
            <p>{{user.email}}</p>
        </li>
        <pre></pre>
    </div>
</template>

<script setup>
    import { ref, onMounted, reactive, computed } from 'vue';
    const title = import.meta.env.VITE_APP_TITLE;
    const state = reactive({
        usersCount: 0,
        usersData: undefined,
    })
    async function getUsersCount() {
        const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/users/count');
        if (!response.ok) {
            console.error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        return result[0];
    }
    async function getUsers() {
        const response = await fetch(import.meta.env.VITE_APP_SERVER_URL + '/users');
        if (!response.ok) {
            console.error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result)
        return result[0];
    }
    async function fetchUsers() {
        state.usersData = await getUsers();
    }
    function changeState() {
        state.usersData = {
            'name': 'Martin'
        }
    }
    onMounted(async () => {
      // const usersCount = await getUsersCount();
      state.usersCount = await getUsersCount();
      state.usersData = await getUsers();
    })
</script>
