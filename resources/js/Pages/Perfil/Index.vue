<template>

    <Head title="Editar información" />

    <AuthenticatedLayout>
        <template #header>
            Editar información
        </template>

        <div class="inline-block w-full mt-4">

            <!-- solo admin, para elegir punto -->
            <div class="sm:w-1/2 md:w-2/6 mb-4" v-if="$page.props.user.roles.includes('Administrador')">
                <InputLabel class="!text-base mb-1" for="puntos" value="Puntos vive digital" />
                <select id="puntos" name="puntos" v-model="punto" @change="handleSelectPuntos"
                    class="block w-full px-4 py-1 text-base text-gray-900 border border-gray-600 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500">
                    <option selected disabled value="">Seleccionar punto vive digital</option>
                    <option v-for="pt in puntos" :key="pt.id" :value="pt">{{ pt.nombre }}</option>
                    
                </select>
            </div>

            <div class="mb-4 border-b-2 border-gray-900 rounded-md p-2 sm:flex justify-between">
                <!-- Menu -->
                <div class="sm:flex justify-center items-center gap-4 sm:gap-6 mb-4 sm:mb-auto">
                    <!-- Banner inicial -->
                    <button class="flex cursor mb-2 sm:mb-auto" @click="active = 0"
                        :class="active == 0 ? 'underline font-bold text-blue-800' : 'text-gray-600'">
                        <HomeIcon class="h-6 w-6" />
                        <span class="mx-2">Banner inicial</span>
                    </button>
                    <!-- Informacion pagina inicial -->
                    <button class="flex cursor mb-2 sm:mb-auto" @click="active = 1"
                        :class="active == 1 ? 'underline font-bold text-blue-800' : 'text-gray-600'">
                        <DocumentIcon class="h-6 w-6" />
                        <span class="mx-2">Información inicial</span>
                    </button>
                    <!-- ofertas -->
                    <button class="flex cursor mb-2 sm:mb-auto" @click="active = 2"
                        :class="active == 2 ? 'underline font-bold text-blue-800' : 'text-gray-600'">
                        <FireIcon class="h-6 w-6" />
                        <span class="mx-2">Ofertas</span>
                    </button>
                    <!-- Eventos -->
                    <button class="flex cursor mb-2 sm:mb-auto" @click="active = 2"
                        :class="active == 2 ? 'underline font-bold text-blue-800' : 'text-gray-600'">
                        <FolderIcon class="h-6 w-6" />
                        <span class="mx-2">Eventos/Noticias</span>
                    </button>
                </div>

            </div>

        </div>


    </AuthenticatedLayout>
</template>

<script setup>
import { ref } from "vue";
import { watch } from "vue";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Pagination from '@/Components/Pagination.vue'
import { Head } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3'
import SecondaryButton from "@/Components/SecondaryButton.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { HomeIcon, FireIcon, FolderIcon, DocumentIcon } from '@heroicons/vue/24/solid'
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';



const props = defineProps({

    puntos: {
        type: Object,
        default: ([]),
    },

    infoPunto: {
        type: Object,
        default: ([]),
    }

});

const active = ref(0);
const punto = ref(props.puntos.id);

console.log(props.puntos);
console.log(props.infoPunto);



</script>
