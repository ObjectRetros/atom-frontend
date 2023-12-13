export default defineNuxtConfig({
    modules: ["@vueuse/nuxt", "@nuxtjs/tailwindcss", "@formkit/nuxt"],
    css: ['~/assets/css/main.css'],
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            htmlAttrs: {
                lang: 'en',
                class: 'h-full',
            },
            bodyAttrs: {
                class: 'h-full',
            },
        },
    },
    tailwindcss: {
        config: {
            content: ["./node_modules/laravel-vue-pagination/**/*.vue"],
        },
    },
    runtimeConfig: {
        public: {
            appURL: "http://localhost",
        },
    },
    routeRules: {
        "/profiles/*": { swr: true },
        "/*": { ssr: false },
    },
});