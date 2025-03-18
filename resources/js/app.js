import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
// theme
import "primevue/resources/themes/aura-light-blue/theme.css";
import { createInertiaApp } from "@inertiajs/vue3";
import { createPinia } from "pinia";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";
import PrimeVue from "primevue/config";
import "vue-toast-notification/dist/theme-default.css";
import Tooltip from 'primevue/tooltip';
import Traduccion from '../../public/traduccion.json';

const appName = "Vive Digital";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        const pinia = createPinia();
        const application = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(pinia)
            .use(VueSweetalert2)
            .use(PrimeVue, {
                theme: {
                    theme: "light",
                    cssLayer: {
                        name: "primevue",
                        order: "tailwind-base, primevue, tailwind-utilities",
                    },
                },
                locale: Traduccion,
            })
            .use(ZiggyVue)
            .directive('tooltip', Tooltip)
            .mount(el);

        delete el.dataset.page;
        return application;
    },
    progress: {
        color: "#E20613",
        // Whether the NProgress spinner will be shown...
        showSpinner: true,
    },
});
