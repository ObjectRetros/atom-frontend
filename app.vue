<template>
  <header>
    <nav>
      <ul class="flex gap-2">
        <li><NuxtLink to="/">Frontpage</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
      </ul>
    </nav>
  </header>

  <NuxtPage />
</template>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>