<template>

    <Head title="Aprobación de PRE-Inscripciones" />

    <AuthenticatedLayout :breadCrumbLinks="breadcrumbLinks">
        <template #header>
            Aprobación de PRE-Inscripciones
        </template>

        <!-- Filtros -->
        <div class="flex flex-wrap gap-4 p-4">
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" @keydown.enter="aplicarFiltros" v-model="filters.search_user" id="search-user"
                    class="block w-full py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:border-transparent"
                    placeholder="Búsqueda por usuario" required>
            </div>

            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="search" @keydown.enter="aplicarFiltros" v-model="filters.search_oferta" id="search-oferta"
                    class="block w-full py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:border-transparent"
                    placeholder="Búsqueda por oferta" required>
            </div>


            <select v-model="filters.estado" @change="aplicarFiltros"
                class="block px-4 py-1 text-base text-gray-900 border border-gray-600 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500">
                <option value="">Todos los estados</option>
                <option value="En proceso">Pendiente o en proceso</option>
                <option value="Rechazado">Rechazadas</option>
            </select>
            <!-- solo admin, para elegir punto -->
            <select
                v-if="$page.props.user.roles.includes('Administrador') || $page.props.user.roles.includes('Supervisor')"
                id="puntos" name="puntos" v-model="filters.punto" @change="aplicarFiltros"
                class="block w-auto px-4 py-1 text-base text-gray-900 border border-gray-600 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500">
                <option selected disabled value="">Seleccionar punto vive digital</option>
                <option v-for="pt in puntos" :key="pt.id" :value="pt.id">{{ pt.nombre }}</option>

            </select>
            <button @click="aplicarFiltros" class="bg-blue-500 text-white px-4 py-2 rounded-md">Filtrar</button>
            <button @click="clearFiltros" class="border border-gray-600 px-4 py-2 rounded-md">Limpiar</button>
        </div>

        <!-- Aprobación/Rechazo Masivo -->
        <div class="flex justify-end p-4 gap-4">
            <button @click="confirmarAprobacion" class="bg-green-500 text-white px-4 py-2 rounded"
                :disabled="!selectedInscripciones.length">
                Aprobar Seleccionados
            </button>
            <button @click="confirmarRechazo" class="bg-red-500 text-white px-4 py-2 rounded"
                :disabled="!selectedInscripciones.length">
                Rechazar Seleccionados
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
                                <th class="px-2 py-3">Id_oferta</th>
                                <th class="px-5 py-3">Nombre usuario</th>
                                <th class="px-5 py-3">Identificación</th>
                                <th class="px-5 py-3">Edad</th>
                                <th class="px-5 py-3">Teléfono</th>
                                <th class="px-5 py-3">Tiempo de espera</th>
                                <th v-if="$page.props.user.roles.includes('Administrador') || $page.props.user.roles.includes('Supervisor')"
                                    class="px-5 py-3">Punto vive</th>
                                <th class="px-5 py-3">Estado</th>
                                <th class="px-5 py-3">Comentario</th>
                                <th class="px-5 py-3">Ver Anexo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="ins in props.inscripciones.data" :key="ins.id" class="text-gray-700">

                                <td class="px-3 py-5">
                                    <input type="checkbox" v-model="selectedInscripciones" :value="ins.id" />
                                </td>
                                <td class="px-3 py-5">{{ ins.oferta.nombre }}</td>
                                <td class="px-2 py-5">{{ ins.oferta.id }}</td>
                                <td class="px-3 py-5">{{ ins.info_user.nombres }} {{ ins.info_user.apellidos }}</td>
                                <td class="px-3 py-5">{{ ins.identificacion }}</td>
                                <td class="px-3 py-5">{{ ins.info_user.edad }}</td>
                                <td class="px-3 py-5">{{ ins.info_user.telefono }}</td>
                                <td class="px-5 py-5">
                                    <Tag :severity="calcularTiempoEspera(ins.created_at).color"
                                        :value="calcularTiempoEspera(ins.created_at).texto">
                                    </Tag>
                                </td>
                                <td v-if="$page.props.user.roles.includes('Administrador') || $page.props.user.roles.includes('Supervisor')"
                                    class="px-3 py-5 break-words">{{ ins.oferta.puntos_vive.nombre }}</td>
                                <td class="px-3 py-5 whitespace-nowrap">
                                    <span :class="{
                                        '!bg-secondary': ins.estadoProceso === 'Rechazado',
                                    }" class="text-white text-sm bg-orange-600 px-2.5 py-0.5 rounded-md">
                                        {{ ins.estadoProceso }}
                                    </span>
                                </td>
                                <td class="py-5 flex justify-center items-center">
                                    <button @click="editComment(ins)"
                                        v-tooltip.left="{ value: ins.comentario, offset: 8 }"
                                        class="text-white xs:text-xs !p-2 !bg-azul hover:scale-105 !rounded-full mb-2 cursor-pointer">
                                        <ChatBubbleBottomCenterTextIcon class="w-6 h-6" />
                                    </button>

                                </td>
                                <td class="px-3 py-5">
                                    <button v-if="ins.info_user.anexo_documento" @click="viewAnexo(ins.info_user.anexo_documento)" class="text-blue-600 hover:text-blue-800 underline">
                                        Ver Anexo
                                    </button>
                                    <span v-else class="text-gray-500">Sin anexo</span>
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

        <!-- Modal de Confirmación de Aprobación -->
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

        <!-- Modal de Confirmación de Rechazo -->
        <div v-if="showRechazoModal" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
            <div class="bg-white p-6 rounded shadow-lg w-1/3">
                <h3 class="text-lg font-semibold">Confirmar Rechazo</h3>
                <p>¿Está seguro de que desea rechazar las pre-inscripciones seleccionadas?</p>
                <div class="flex justify-end gap-4 mt-4">
                    <button @click="cancelarRechazo" :disabled="isLoading"
                        class="bg-gray-400 disabled:bg-gray-500/60 text-white px-4 py-2 rounded">Cancelar</button>
                    <button @click="rechazarInscripciones"
                        class="bg-red-500 disabled:bg-red-500/40 text-white px-4 py-2 rounded" :disabled="isLoading">
                        Confirmar
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal de Comentario -->
        <Dialog header="Editar Comentario" v-model:visible="showCommentModal" :modal="true" :closable="false">
            <div class="p-fluid">
                <div class="field">
                    <label for="comentario">Comentario</label>
                    <Textarea id="comentario" v-model="currentComment" rows="5" cols="30" />
                    <p class="text-gray-500 text-sm mt-2" :class="{ 'text-red-500': isMaxPalabras1 }">
                        {{ palabrasEnDescripcion }} caracteres <span v-if="isMaxPalabras1">Limite de caracteres
                            superado</span>
                    </p>
                </div>
                <div class="flex justify-end gap-4 mt-4">
                    <Button label="Cancelar" icon="pi pi-times" class="p-button-text" @click="cancelComment" />
                    <Button label="Guardar" icon="pi pi-check" class="p-button-text" @click="saveComment" />
                </div>
            </div>
        </Dialog>

        <!-- Modal para visor de anexo -->
        <Dialog v-model:visible="showViewer" modal header="Visor de Anexo" class="w-11/12 max-w-4xl">
            <div class="p-4">
                <div v-if="fileType === 'image'" class="flex justify-center">
                    <img :src="`/storage/${selectedFile}`" alt="Anexo" class="max-w-full max-h-96 object-contain" />
                </div>
                <div v-else-if="fileType === 'pdf'" class="w-full h-96">
                    <iframe :src="`/storage/${selectedFile}`" class="w-full h-full border-0"></iframe>
                </div>
                <div v-else class="text-center">
                    <p class="mb-4">Este tipo de archivo no se puede visualizar en el navegador.</p>
                    <a :href="`/storage/${selectedFile}`" target="_blank" class="text-blue-600 hover:text-blue-800 underline">Descargar archivo</a>
                </div>
            </div>
            <template #footer>
                <button @click="closeViewer" class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Cerrar</button>
            </template>
        </Dialog>

    </AuthenticatedLayout>
</template>

<script setup>
import { defineProps, ref, watch, inject, computed } from 'vue';
import { router, Head } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import Pagination from '@/Components/Pagination.vue';
import Tag from 'primevue/tag';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import dayjs from "dayjs";
import "dayjs/locale/es";
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/vue/24/solid';

dayjs.locale("es");
const swal = inject('$swal');

const props = defineProps({
    inscripciones: { type: Object, default: () => ({}) },
    filters: {
        type: Object,
        default: () => ({}),
    },
    puntos: {
        type: Array,
        default: () => [],
    },
});

const breadcrumbLinks = [
    { url: '', text: 'Gestión de inscripciones' },

];

console.log(props);

const filters = ref({
    search_user: '',
    search_oferta: '',
    estado: '',
    punto: '',
});

const selectedInscripciones = ref([]);
const selectAll = ref(false);
const showModal = ref(false);
const showRechazoModal = ref(false);
const showCommentModal = ref(false);
const currentComment = ref('');
const currentInscripcion = ref(null);
const errorMessage = ref('');
const isLoading = ref(false);

const isMaxPalabras1 = ref(false);

const aplicarFiltros = () => {
    router.get(route('gestionInscritos'), filters.value, {
        preserveState: true,
        replace: true,
    });
};

const clearFiltros = () => {
    filters.value = {
        search_user: '',
        search_oferta: '',
        estado: '',
        punto: '',
    };
    aplicarFiltros();
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

    router.post(route('inscripciones.aprobar'), { ids: selectedInscripciones.value }, {
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

const confirmarRechazo = () => {
    showRechazoModal.value = true;
};

const cancelarRechazo = () => {
    showRechazoModal.value = false;
};

const rechazarInscripciones = async () => {
    isLoading.value = true;

    router.post(route('inscripciones.rechazar'), { ids: selectedInscripciones.value }, {
        onSuccess: () => {
            showRechazoModal.value = false;
            isLoading.value = false;
            selectedInscripciones.value = []; // Limpiar selección
            swal({
                title: 'Éxito',
                text: 'Las inscripciones han sido rechazadas correctamente.',
                icon: 'success',
                button: 'OK',
            }).then(() => {
                window.location.reload(); // Recargar la página
            });
        },
        onError: (errors) => {
            errorMessage.value = 'Ocurrió un error al rechazar las inscripciones. Por favor, inténtelo de nuevo.';
            showRechazoModal.value = false;
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

const editComment = (inscripcion) => {
    currentInscripcion.value = inscripcion;
    currentComment.value = inscripcion.comentario || '';
    showCommentModal.value = true;
};

const cancelComment = () => {
    showCommentModal.value = false;
    currentComment.value = '';
    currentInscripcion.value = null;
};



const saveComment = async () => {
    if (!currentInscripcion.value) return;

    isLoading.value = true;

    router.put(route('inscripciones.updateComment', currentInscripcion.value.id), { comentario: currentComment.value }, {
        onSuccess: () => {
            showCommentModal.value = false;
            isLoading.value = false;
            swal({
                title: 'Éxito',
                text: 'El comentario ha sido guardado correctamente.',
                icon: 'success',
                button: 'OK',
            }).then(() => {
                window.location.reload(); // Recargar la página
            });
        },
        onError: (errors) => {
            errorMessage.value = 'Ocurrió un error al guardar el comentario. Por favor, inténtelo de nuevo.';
            showCommentModal.value = false;
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

// Limite palabras
const palabrasEnDescripcion = computed(() => {
    const palabras = currentComment.value.trim();
    const result = palabras.length;

    if (result >= 100) {
        isMaxPalabras1.value = true;
    } else {
        isMaxPalabras1.value = false;
    }

    return result;
});

watch(palabrasEnDescripcion, () => {
    currentComment.value = currentComment.value.trim(); // Asegúrate de que no haya espacios al principio o al final
});

watch(selectedInscripciones, () => {
    selectAll.value = selectedInscripciones.value.length === props.inscripciones.data.length;
});

// Calculate waiting time
const calcularTiempoEspera = (createdAt) => {
    if (!createdAt) return { texto: "Desconocido", color: "secondary" };

    const ahora = dayjs();
    const creado = dayjs(createdAt);
    const dias = ahora.diff(creado, "days");
    const horas = ahora.diff(creado, "hours") % 24;

    let color = "secondary";
    if (dias >= 1 && dias <= 3) {
        color = "success";
    } else if (dias >= 4 && dias <= 6) {
        color = "warn";
    } else if (dias >= 7) {
        color = "danger";
    }

    return { texto: `${dias} días`, color };
};

const showViewer = ref(false);
const selectedFile = ref('');
const fileType = ref('');

const viewAnexo = (anexoPath) => {
    selectedFile.value = anexoPath;
    const ext = anexoPath.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png'].includes(ext)) {
        fileType.value = 'image';
    } else if (ext === 'pdf') {
        fileType.value = 'pdf';
    } else {
        fileType.value = 'other';
    }
    showViewer.value = true;
};

const closeViewer = () => {
    showViewer.value = false;
    selectedFile.value = '';
    fileType.value = '';
};

</script>

<style scoped></style>
