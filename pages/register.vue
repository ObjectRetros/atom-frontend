<script setup lang="ts">
import axios from "axios";
import {ref} from "vue";

interface Form {
    username: string;
    mail: string;
    password: string;
    password_confirmation: string;
    terms: boolean;
}

const form = ref<Form>({
    username: '',
    mail: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

async function submit() {
    const res = await axios.post("/register", form.value);
    console.log(res);
}
</script>

<template>
    <div class="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div class="border rounded-md shadow-sm py-2 px-4 w-[400px]">
            <h2 class="text-2xl text-center">Create an account</h2>

            <form class="space-y-6" @submit.prevent="submit">
                <div class="flex flex-col gap-1 mt-1">
                    <label for="username">Username</label>
                    <input id="username" v-model="form.username" type="text" autocomplete="username" required=""
                           class="border rounded-md shadow-sm py-2 px-4"/>
                </div>

                <div class="flex flex-col gap-1 mt-1">
                    <label for="email">Email address</label>
                    <input id="email" v-model="form.mail" type="email" autocomplete="email" required=""
                           class="border rounded-md shadow-sm py-2 px-4"/>
                </div>

                <div class="flex flex-col gap-1 mt-1">
                    <label for="password">Password</label>
                    <input id="password" v-model="form.password" type="password" autocomplete="password" required=""
                           class="border rounded-md shadow-sm py-2 px-4"/>
                </div>

                <div class="flex flex-col gap-1 mt-1">
                    <label for="password_confirmation">Confirm
                        Password</label>
                    <input id="password_confirmation" v-model="form.password_confirmation" type="password"
                           autocomplete="password_confirmation" required=""
                           class="border rounded-md shadow-sm py-2 px-4"/>
                </div>

                <div class="flex items-center gap-x-3">
                    <input id="terms" type="checkbox" v-model="form.terms" required=""
                           class="mt-1 rounded ring-0 focus:ring-0">

                    <a href="#" target="_blank"
                       class="mt-1 text-sm font-semibold text-gray-900 hover:text-gray-800 hover:underline">
                        I accept the terms
                    </a>
                </div>

                <div>
                    <button type="submit"
                            class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        Create user
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
