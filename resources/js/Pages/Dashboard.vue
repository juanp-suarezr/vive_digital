<template>

    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            Dashboard
        </template>

        <div class="w-full">
            <div class="items-center px-4 py-8 m-auto mt-5">
                <div class="flex flex-wrap pb-3 mx-4 md:mx-24 lg:mx-0">
                    <!-- Registrados -->
                    <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
                        <div
                            class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group">
                            <div class="flex flex-row justify-between items-center">
                                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                                    <ClipboardDocumentIcon class="h-6 w-6" />
                                </div>
                                <div class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">

                                    Total Registrados
                                    {{ puntos.id ?
                                        `del punto ${puntos.nombre}`
                                        : 'de todos los puntos' }}
                                </div>
                            </div>
                            <h1
                                class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                                {{ registrados }}</h1>
                            <div class="flex group-hover:text-gray-200">
                                <p>Registros</p>
                            </div>
                        </div>
                    </div>
                    <!-- Ofertas -->
                    <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
                        <div
                            class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group">
                            <div class="flex flex-row justify-between items-center">
                                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                                    <FireIcon class="h-6 w-6" />
                                </div>
                                <div class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">

                                    Ofertas {{ puntos.id ? `del punto ${puntos.nombre}` : 'de todos los puntos' }}
                                </div>
                            </div>
                            <h1
                                class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                                {{ ofertas }}</h1>
                            <div class="flex group-hover:text-gray-200">
                                <p>Ofertas</p>
                            </div>
                        </div>
                        
                    </div>
                    <!-- Puntos -->
                    <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
                        <div
                            class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group">
                            <div class="flex flex-row justify-between items-center">
                                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                                    <UserGroupIcon class="h-6 w-6" />
                                </div>
                                <div class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">

                                    {{ puntos.id ? `certificados x curso` : 'Total de certificaciones' }}
                                </div>
                            </div>
                            <div class="" v-if="puntos.id">
                                <h1 class="text-lg sm:text-xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                                    {{ puntos.nombre }}</h1>
                                <div class="group-hover:text-gray-200">
                                    <p>
                                        {{ certificados }}
                                    </p>
                                    <p>
                                        Total de Certificados
                                    </p>
                                </div>
                            </div>
                            <div class="" v-else>
                                <h1
                                    class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                                    {{ certificados }}</h1>
                                <div class="flex group-hover:text-gray-200">
                                    <p>Total de certificados en los cursos</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!-- trafico -->
                    <div class="w-full p-2 lg:w-1/4 md:w-1/2 flex">
                        <div
                            class="flex w-full flex-col px-6 py-10 overflow-hidden bg-white border-[#e1e5ea] hover:text-white hover:bg-gradient-to-br hover:from-primary hover:to-secondary rounded-xl border-2 duration-300 hover:shadow-2xl group">
                            <div class="flex flex-row justify-between items-center">
                                <div class="px-4 py-4 bg-gray-300 rounded-xl bg-opacity-30">
                                    <EyeIcon class="h-6 w-6" />
                                </div>
                                <div class="inline-flex text-sm text-gray-600 group-hover:text-gray-200 sm:text-base">

                                    Trafico
                                </div>
                            </div>
                            <p
                                class="text-sm sm:text-base xl:text-lg font-bold text-gray-700 mt-8 group-hover:text-gray-50">
                                <b>Inicio:</b> {{ getTotalViews('inicio') }}
                                <br>
                                <b>Registros:</b> {{ getTotalViews('register') }}
                                <br>
                                <b>Capacitaciones:</b> {{ getTotalViews('capacitaciones') }}
                            </p>
                            <div class="flex group-hover:text-gray-200">
                                <p>Visitas a la pagina</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue'
import { Head } from '@inertiajs/vue3';
import { ref, watch, inject, onMounted, computed } from 'vue';
import {
    UserGroupIcon,
    EyeIcon,
    FireIcon,
    ClipboardDocumentIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
    registrados: {
        type: Number,
        default: 0,
    },
    ofertas: {
        type: Number,
        default: 0
    },
    puntos: {
        type: Object,
        default: () => ({}),
    },
    views: {
        type: Object,
        default: () => ({}),
    },
    certificados: {
        type: Object,
        default: () => ({}),
    },
});

console.log(props);

// Computed que retorna una función para contar visitas en la página especificada
const getTotalViews = computed(() => (pageType) => {
    let pagesToCount;

    // Determina las páginas a contar según el tipo de página solicitado
    if (pageType === 'inicio') {
        pagesToCount = ['/', 'Welcome', 'Home'];
    } else if (pageType === 'capacitaciones') {
        pagesToCount = ['capacitaciones'];
     } else if (pageType === 'register') {
        pagesToCount = ['register'];
    } else {
        return 0;
    }

    // Filtra las vistas según el tipo de página y suma los views
    return props.views
        .filter(view => pagesToCount.includes(view.page))
        .reduce((total, view) => total + view.views, 0);
});


</script>
