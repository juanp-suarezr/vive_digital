<template>

    <Head title="Ofertas" />

    <AuthenticatedLayout>
        <template #header>
            Ofertas
        </template>

        <div class="flex inline-block min-w-full overflow-hidden mb-3 grid md:grid-cols-10 gap-4">

            <div class="... col-span-3 w-full m-auto">

                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" @keydown.enter="handleEnterKey" v-model="search" id="default-search"
                        class="block w-full py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:border-transparent"
                        placeholder="Búsqueda de ofertas" required>

                </div>
            </div>

            <div class="sm:flex inline-block w-full m-auto gap-3 col-span-5">

                <div class="flex justify-center my-auto gap-2 inline-block ms-2">
                    <div class="">
                        <PrimaryButton type="submit" @click="handleEnterKey" class="flex justify-center">
                            Buscar</PrimaryButton>
                    </div>
                    <div class="">
                        <button type="submit" @click="clearAll"
                            class="flex justify-center border-2 border-gray-400 text-gray-600 font-semibold rounded-md py-2 px-4 hover:bg-gray-300">
                            Limpiar</button>
                    </div>
                </div>

            </div>

            <div class="flex justify-end w-full my-auto col-span-2">
                <a :href="route('oferts.excel', { search: search, punto: punto })"
                    class="flex text-white bg-green-800 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2">
                    <DocumentArrowDownIcon class="h-6 w-6 me-2" />Exportar
                </a>
            </div>


        </div>

        <!-- solo admin, para elegir punto -->
        <div class="sm:w-1/2 md:w-2/6 mb-4"
            v-if="$page.props.user.roles.includes('Administrador') || $page.props.user.roles.includes('Supervisor')">
            <InputLabel class="!text-base mb-1" for="puntos" value="Puntos vive digital" />
            <select id="puntos" name="puntos" v-model="punto" @change="handleSelectPuntos"
                class="block w-full px-4 py-1 text-base text-gray-900 border border-gray-600 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500">
                <option selected disabled value="">Seleccionar punto vive digital</option>
                <option v-for="pt in puntos" :key="pt.id" :value="pt.id">{{ pt.nombre }}</option>

            </select>
        </div>

        <div class="flex flex-col overflow-x-auto">
            <div class="inline-block rounded-lg shadow">
                <div class="inline-block min-w-full py-2">
                    <div class="overflow-x-auto">
                        <table class="min-w-full whitespace-no-wrap ">
                            <thead>
                                <tr
                                    class="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">

                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Nombre oferta
                                    </th>

                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Información Horario
                                    </th>

                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Punto vive
                                    </th>

                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Descripción
                                    </th>
                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Estado
                                    </th>

                                    <th
                                        class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                                        Acciones
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="oferta in ofertas" :key="oferta.id" class="text-gray-700">

                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{{ oferta.nombre }} </p>
                                    </td>

                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{{ oferta.horario || 'no registrado' }}</p>
                                    </td>


                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap"
                                            :class="{ 'bg-blue-200 p-2 rounded-md': puntos.find(item => item.id == oferta.id_puntos).id_user == $page.props.auth.user.id }">
                                            {{ puntos.find(item => item.id == oferta.id_puntos).nombre }} </p>
                                    </td>

                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{{ oferta.descripcion || 'no registra' }}</p>
                                    </td>

                                    <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                                        <p :class="{'bg-lime-500':oferta.estado}" class="text-white px-2.5 py-1 rounded whitespace-no-wrap">{{ oferta.estado ? 'Activo' : 'Bloqueado' }}</p>
                                    </td>

                                    <td class="border-b border-gray-200 bg-white flex flex-wrap gap-x-2 sm:px-5 sm:py-5 p-2 sm:text-sm text-xs">
                                        <!-- ver inscritos -->
                                        <SecondaryButton @click="showPost(oferta.id)"
                                        v-tooltip.bottom="{ value: 'ver Inscritos', autoHide: false }"
                                            class="md:mr-3 text-white xs:text-xs !p-2 !bg-azul hover:scale-105 !rounded-full mb-2 cursor-pointer">
                                            <EyeIcon class="w-6 h-6" />
                                        </SecondaryButton>

                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center border-t bg-white px-5 py-5 xs:flex-row xs:justify-between">
            <pagination v-if="props.oferts.links" :links="props.oferts.links" />
        </div>

    </AuthenticatedLayout>
</template>

<script setup>
import { ref } from "vue";
import { watch } from "vue";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PrimaryLink from '@/Components/PrimaryLink.vue';
import Pagination from '@/Components/Pagination.vue'
import { Head } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3'
import SecondaryLink from "@/Components/SecondaryLink.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { EyeIcon, DocumentArrowDownIcon } from '@heroicons/vue/24/solid';
import Calendar from 'primevue/calendar';





const props = defineProps({
    oferts: {
        type: Object,
        default: () => ({}),
    },
    filters: {
        type: Object,
        default: () => ({}),
    },
    validation: {
        type: Boolean,
        default: false,
    },
    puntos: {
        type: Object,
        default: ([]),
    }

});

console.log(props.filters);

const ofertas = ref(props.oferts.data);



console.log(props.oferts);

// pass filters in search
let search = ref(props.filters.search);
const punto = ref(props.filters.punto ?? "");


const handleSelectPuntos = () => {
    console.log(punto.value);
    router.get(
        "/oferts",
        { punto: punto.value },
        {

            replace: true,
        },
    );
};

const handleEnterKey = () => {
    router.get(
        "/oferts",
        { search: search.value, punto: punto.value },
        {

            replace: true,
        },
        {
            onSuccess: () => {
                window.location.reload();
            }
        }


    );
};
//Liampiar filtros
const clearAll = () => {

    search.value = '';

    punto.value = '';
    router.get(
        "/oferts",
        { search: search.value, punto: punto.value },
        {

            replace: true,
        },

    );
}



const formatDate = (fechaHora) => {

    return `${fechaHora.getFullYear()}-${('0' + (fechaHora.getMonth() + 1)).slice(-2)}-${('0' + fechaHora.getDate()).slice(-2)}`;
}

const isToday = (fecha) => {
    const formattedDate = formatDate(new Date(fecha));
    const today = new Date();
    const formattedToday = formatDate(today);

    // Comparar solo el año, mes y día
    console.log(formattedDate === formattedToday);
    return formattedDate === formattedToday;
}

const showPost = (id) => {
    router.get(
        "/inscritos",
        { id: id },


    );
}


watch(search, (value) => {
    console.log("Valor de búsqueda actualizado:", value)
});
</script>
