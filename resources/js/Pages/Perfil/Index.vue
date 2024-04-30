<template>

    <Head title="Editar información" />

    <AuthenticatedLayout>
        <template #header>
            Editar información
        </template>

        <div class="inline-block w-full mt-4">

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
                        <FolderIcon class="h-6 w-6" />
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
import PrimaryLink from '@/Components/PrimaryLink.vue';
import Pagination from '@/Components/Pagination.vue'
import { Head } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3'
import SecondaryButton from "@/Components/SecondaryButton.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";




const props = defineProps({
    registro: {
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



const registrados = ref(props.registro.data);

if (props.validation) {
    let nuevosRegistros = [];

    // Agregar el último registro al nuevo array
    nuevosRegistros.push(props.registro);
    registrados.value = nuevosRegistros;

}

console.log(registrados.value);

// pass filters in search
let search = ref(props.filters.search);
let estado_users = ref(props.filters.estado_users ?? "");
const handleEnterKey = () => {
    router.get(
        "/registrados", {
        onSuccess: () => {
            window.location.reload();
        }
    },
        { search: search.value },
        {
            preserveState: true,
            replace: true,
        },

    );
};



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


watch(search, (value) => {
    console.log("Valor de búsqueda actualizado:", value)
});
</script>
