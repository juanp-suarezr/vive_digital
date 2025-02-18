<template>

    <Head title="Aprobación de PRE-Inscripciones" />

    <AuthenticatedLayout>
        <template #header>
            Aprobación de PRE-Inscripciones
        </template>

        <!-- Filtros -->
        <div class="flex gap-4 p-4">
            <input v-model="filters.nombreOferta" placeholder="Buscar por oferta" class="input-filter" />
            <input v-model="filters.nombreUsuario" placeholder="Buscar por usuario" class="input-filter" />
            <select v-model="filters.estado" class="input-filter">
                <option value="En proceso">Pendiente o en proceso</option>
                <option value="Rechazado">Rechazadas</option>
            </select>
            <button @click="aplicarFiltros" class="bg-blue-500 text-white px-4 py-2 rounded">Filtrar</button>
        </div>

        <!-- Aprobación Masiva -->
        <div class="flex justify-end p-4">
            <button @click="confirmarAprobacion" class="bg-green-500 text-white px-4 py-2 rounded"
                :disabled="!selectedInscripciones.length">
                Aprobar Seleccionados
            </button>
        </div>

        <!-- Mensaje de Error -->
        <div v-if="errorMessage" class="bg-red-500 text-white p-4 rounded mb-4">
            {{ errorMessage }}
        </div>

        <!-- Tabla de Inscripciones -->
        <div class="w-full gap-4">
            <div class="flex flex-col overflow-x-auto">
                <div class="inline-block rounded-lg shadow">
                    <table class="min-w-full whitespace-no-wrap">
                        <thead>
                            <tr class="border-b bg-gray-50 text-left text-xs font-semibold uppercase text-gray-500">
                                <th class="px-5 py-3">
                                    <input type="checkbox" v-model="selectAll" @change="toggleSelectAll" />
                                </th>
                                <th class="px-5 py-3">Nombre oferta</th>
                                <th class="px-5 py-3">Nombre usuario</th>
                                <th class="px-5 py-3">Identificación</th>
                                <th class="px-5 py-3">Teléfono</th>
                                <th class="px-5 py-3">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ins in props.inscripciones.data" :key="ins.id" class="text-gray-700">
                                <td class="px-5 py-5">
                                    <input type="checkbox" v-model="selectedInscripciones" :value="ins.id" />
                                </td>
                                <td class="px-5 py-5">{{ ins.oferta.nombre }}</td>
                                <td class="px-5 py-5">{{ ins.info_user.nombres }} {{ ins.info_user.apellidos }}</td>
                                <td class="px-5 py-5">{{ ins.identificacion }}</td>
                                <td class="px-5 py-5">{{ ins.info_user.telefono }}</td>
                                <td class="px-5 py-5">
                                    <span :class="{
                                        '!bg-secondary': ins.estadoProceso === 'Rechazado',
                                    }" class="text-white bg-orange-600 px-2.5 py-0.5 rounded-md">
                                        {{ ins.estadoProceso }}
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Paginación -->
            <div class="flex flex-col items-center bg-white px-5 py-5">
                <Pagination v-if="props.inscripciones.links" :links="props.inscripciones.links" />
            </div>
        </div>

        <!-- Modal de Confirmación -->
        <div v-if="showModal" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-6 rounded shadow-lg w-1/3">
                <h3 class="text-lg font-semibold">Confirmar Aprobación</h3>
                <p>¿Está seguro de que desea aprobar las pre-inscripciones seleccionadas?</p>
                <div class="flex justify-end gap-4 mt-4">
                    <button @click="cancelarAprobacion" :disabled="isLoading"
                        class="bg-gray-400 disabled:bg-gray-500/60 text-white px-4 py-2 rounded">Cancelar</button>
                    <button @click="aprobarInscripciones"
                        class="bg-green-500 disabled:bg-green-500/40 text-white px-4 py-2 rounded"
                        :disabled="isLoading">

                        Confirmar
                    </button>
                </div>
            </div>
        </div>

    </AuthenticatedLayout>
</template>

<script setup>
import { defineProps, ref, watch, inject } from 'vue';
import { router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Pagination from '@/Components/Pagination.vue';

const swal = inject('$swal');

const props = defineProps({
    inscripciones: { type: Object, default: () => ({}) },
    filters: {
        type: Object,
        default: () => ({}),
    },
});

const filters = ref({
    nombreOferta: '',
    nombreUsuario: '',
    estado: '',
});

const selectedInscripciones = ref([]);
const selectAll = ref(false);
const showModal = ref(false);
const errorMessage = ref('');
const isLoading = ref(false);

const aplicarFiltros = () => {
    router.get(route('gestionInscritos'), filters.value, {
        preserveState: true,
        replace: true,
    });
};

const toggleSelectAll = () => {
    if (selectAll.value) {
        selectedInscripciones.value = props.inscripciones.data.map(ins => ins.id);
    } else {
        selectedInscripciones.value = [];
    }
};

const confirmarAprobacion = () => {
    showModal.value = true;
};

const cancelarAprobacion = () => {
    showModal.value = false;
};

const aprobarInscripciones = async () => {
    isLoading.value = true;

    router.post(route('inscripciones.aprobar'), { ids: selectedInscripciones.value}, {
        onSuccess: () => {
            showModal.value = false;
            isLoading.value = false;
            selectedInscripciones.value = []; // Limpiar selección
            swal({
                title: 'Éxito',
                text: 'Las inscripciones han sido aprobadas correctamente.',
                icon: 'success',
                button: 'OK',
            }).then(() => {
                window.location.reload(); // Recargar la página
            });
        },
        onError: (errors) => {
            errorMessage.value = 'Ocurrió un error al aprobar las inscripciones. Por favor, inténtelo de nuevo.';
            showModal.value = false;
            swal({
                title: 'Error',
                text: errorMessage.value,
                icon: 'error',
                button: 'OK',
            });
        },
        onFinish: () => {
            isLoading.value = false;
        }
    });
};

watch(selectedInscripciones, () => {
    selectAll.value = selectedInscripciones.value.length === props.inscripciones.data.length;
});
</script>

<style scoped>
.input-filter {
    @apply border border-gray-300 rounded px-2 py-1;
}

</style>
