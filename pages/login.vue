<script setup lang="ts">

import axios from "axios";

const form = ref({
    username: '',
    password: '',
});

async function submit() {
    const res = await axios.post("/login", form.value);
    console.log(res);
}
</script>

<template>
    <div class="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div class="border rounded-md shadow-sm py-2 px-4 w-[400px]">
            <h2 class="text-2xl text-center">Sign into your account</h2>

            <form @submit.prevent="submit" class="mt-3">
                <div class="flex flex-col gap-1">
                    <label for="username">Username</label>
                    <input v-model="form.username" type="text" id="username" class="border rounded-md shadow-sm py-2 px-4" />
                </div>

                <div class="flex flex-col gap-1 mt-1">
                    <label for="password">Password</label>
                    <input v-model="form.password" type="password" id="password" class="border rounded-md shadow-sm py-2 px-4" />
                </div>

                <button type="submit" class="rounded-md py-2 px-4 bg-indigo-500 w-full mt-3 text-indigo-100">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>