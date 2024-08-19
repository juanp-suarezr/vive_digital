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

                                    Total Registrados {{ puntos.id ? `del punto ${puntos.nombre}` : 'de todos los puntos' }}
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

                                    {{ puntos.id ? `Información Punto` : 'Total de todos los puntos' }}
                                </div>
                            </div>
                            <div class="" v-if="puntos.id">
                                <h1 class="text-lg sm:text-xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                                {{ puntos.nombre }}</h1>
                            <div class="group-hover:text-gray-200">
                                <p>
                                    {{ puntos.administrador }}
                                </p>
                                <p>
                                    {{ puntos.direccion }}
                                </p>
                            </div>
                            </div>
                            <div class="" v-else>
                                <h1
                                class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                                {{ puntos }}</h1>
                            <div class="flex group-hover:text-gray-200">
                                <p>Puntos registrados</p>
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
                            <h1
                                class="text-3xl sm:text-4xl xl:text-5xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
                                #</h1>
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
        type: Object,
        default: () => ({}),
    },
    ofertas: {
        type: Object,
        default: () => ({}),
    },
    puntos: {
        type: Object,
        default: () => ({}),
    },
    
});

console.log(props);


</script>
