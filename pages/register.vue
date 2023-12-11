
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
  const res = await axios.post("/api/register", form.value);
  console.log(res);
}
</script>

<template>
	<div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
				alt="Your Company" />
			<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
				Create an account
			</h2>
		</div>

		<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<form class="space-y-6" @submit.prevent="submit">
				<div>
					<label for="username" class="block text-sm font-medium leading-6 text-white">Username</label>
					<div class="mt-2">
						<input id="username" v-model="form.username" type="text" autocomplete="username" required=""
							class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
					</div>
				</div>

				<div>
					<label for="email" class="block text-sm font-medium leading-6 text-white">Email address</label>
					<div class="mt-2">
						<input id="email" v-model="form.mail" type="email" autocomplete="email" required=""
                   class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
					<div class="mt-2">
						<input id="password" v-model="form.password" type="password" autocomplete="password" required=""
							class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
					</div>
				</div>

				<div>
					<label for="password_confirmation" class="block text-sm font-medium leading-6 text-white">Confirm Password</label>
					<div class="mt-2">
						<input id="password_confirmation" v-model="form.password_confirmation" type="password" autocomplete="password_confirmation" required=""
							class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
					</div>
				</div>

				<div class="flex items-center gap-x-3">
					<input id="terms" type="checkbox" v-model="form.terms" required=""
							class="mt-1 rounded ring-0 focus:ring-0">

					<a href="#" target="_blank"
						class="mt-1 text-sm font-semibold text-gray-300 hover:text-gray-200 hover:underline">
						I accept the terms
					</a>
				</div>

				<div>
					<button type="submit"
						class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign
						in</button>
				</div>
			</form>
		</div>
	</div>
</template>
