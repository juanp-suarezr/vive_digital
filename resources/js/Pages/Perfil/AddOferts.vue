<template>
    <Head title="Agregar oferta" />

    <AuthenticatedLayout :breadCrumbLinks="breadcrumbLinks">
        <template #header> Nueva oferta </template>

        <div class="md:grid grid-cols-2 gap-4">
            <!-- manual -->
            <div class="flex flex-col bg-white border shadow-sm rounded-xl">
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 grid grid-cols-2 gap-4"
                >
                    <h3 class="mt-1 text-gray-500">Nueva oferta</h3>
                    <div class="text-right">
                        <SecondaryButtonReturn>
                            Regresar
                        </SecondaryButtonReturn>
                    </div>
                </div>
                <div class="p-4 md:p-5">
                    <form
                        @submit.prevent="submit"
                        class="grid lg:grid-cols-2 gap-4"
                    >
                        <!-- nombre oferta -->
                        <div>
                            <InputLabel for="name" value="Nombre" />
                            <TextInput
                                id="name"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.nombre"
                                required
                                autofocus
                                autocomplete="name"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.nombre"
                            />
                        </div>

                        <!-- lugar -->
                        <div>
                            <InputLabel
                                for="lugar"
                                value="Lugar del curso (opcional)"
                            />
                            <TextInput
                                id="lugar"
                                type="text"
                                class="mt-1 block w-full"
                                v-model="form.lugar"
                                placeholder="salon 201"
                                autocomplete="lugar"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.lugar"
                            />
                        </div>

                        <!-- Información horario oferta -->
                        <div class="col-span-2">
                            <InputLabel
                                for="horario"
                                value="Información horario de la oferta (opcional - max 100 caracteres)"
                            />
                            <textarea
                                id="horario"
                                class="mt-1 block w-full"
                                v-model="form.horario"
                                placeholder="lunes, martes y miércoles"
                                autocomplete="horario"
                            ></textarea>
                            <p
                                class="text-gray-500 text-sm mt-2"
                                :class="{ 'text-red-500': isMaxPalabras }"
                            >
                                {{ palabrasEnHorario }} caracteres
                                <span v-if="isMaxPalabras"
                                    >Limite de caracteres superado</span
                                >
                            </p>
                            <InputError
                                class="mt-2"
                                :message="form.errors.horario"
                            />
                        </div>

                        <!-- Descripción -->
                        <div class="col-span-2">
                            <InputLabel
                                for="descripcion"
                                value="Descripción de la oferta (opcional - max 300 caracteres)"
                            />
                            <textarea
                                id="descripcion"
                                class="mt-1 block w-full"
                                v-model="form.descripcion"
                                placeholder="Descripción detallada de la oferta"
                                autocomplete="descripcion"
                            ></textarea>
                            <p
                                class="text-gray-500 text-sm mt-2"
                                :class="{ 'text-red-500': isMaxPalabras1 }"
                            >
                                {{ palabrasEnDescripcion }} caracteres
                                <span v-if="isMaxPalabras1"
                                    >Limite de caracteres superado</span
                                >
                            </p>
                            <InputError
                                class="mt-2"
                                :message="form.errors.descripcion"
                            />
                        </div>

                        <!-- estado oferta -->
                        <div class="mb-4">
                            <InputLabel for="estado" value="estado de curso" />
                            <select
                                id="estado"
                                name="estado"
                                v-model="form.estado"
                                class="block mt-1 w-full px-4 py-2 text-base text-gray-900 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option selected disabled value="0">
                                    Seleccionar estado del curso
                                </option>
                                <option value="Activo">Activo</option>
                                <option value="En formación">
                                    En formación
                                </option>
                                <option value="Finalizado">Finalizado</option>
                                <option value="Cancelado">Cancelado</option>
                            </select>
                            <InputError
                                class="mt-2"
                                :message="form.errors.estado"
                            />
                        </div>

                        <div class="col-span-2">
                            <!-- imagen banner -->
                            <p class="text-gray-600 text-sm">
                                Imagen de banner oferta (resolución recomendada:
                                1080x1080px)
                            </p>
                            <div
                                class="border-2 border-gray-300 rounded-md p-2"
                            >
                                <TextInput
                                    id="imagen"
                                    type="file"
                                    class="mt-1 !border-0"
                                    accept="image/*"
                                    @input="
                                        onAdvancedUpload($event.target.files[0])
                                    "
                                    :maxFileSize="2e6"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.banner"
                                />

                                <div class="flex justify-center">
                                    <img
                                        v-if="imageUrl"
                                        :src="imageUrl"
                                        :alt="form.nombre"
                                        class="w-2/6 h-auto"
                                    />
                                    <PhotoIcon
                                        v-else
                                        class="w-1/6 text-gray-300"
                                    />
                                </div>
                                <div
                                    v-if="imageUrl"
                                    class="flex justify-center mt-2"
                                >
                                    <button
                                        @click="removeImage"
                                        type="button"
                                        class="bg-red-500 text-white px-4 py-2 rounded"
                                    >
                                        Eliminar Imagen
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="mt-4 flex flex-col items-end">
                                <PrimaryButton
                                    :class="{ 'opacity-25': form.processing }"
                                    :disabled="form.processing"
                                >
                                    Registrar oferta
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <!-- cargue -->
            <div class="w-full bg-white border shadow-sm rounded-xl">
                <div
                    class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 flex"
                >
                    <h3 class="text-gray-500 m-auto">CARGUE MASIVO</h3>
                </div>

                <div class="w-full h-full flex px-4">
                    <div class="mt-6 w-full">
                        <p class="">
                            <b>Nota:</b> Para subir masivamente la lista de
                            ofertas, debe descargar la plantilla, dando clic en
                            el siguiente botón.
                        </p>

                        <a
                            :href="
                                route('plantillaOF.excel', { punto: punto_id })
                            "
                            class="flex inline-flex text-white bg-green-800 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2 mt-4"
                        >
                            <i
                                class="fa-solid fa-file-arrow-down m-auto me-2"
                            ></i
                            >Descargar plantilla
                        </a>

                        <p class="mt-4">
                            Luego de descargar la plantilla y cargar los datos,
                            subir el mismo archivo excel en el apartado de
                            abajo.
                        </p>

                        <form @submit.prevent="cargueMasivo">
                            <TextInput
                                id="cargueMasivoOfertas"
                                type="file"
                                class="mt-4 block w-full"
                                @change="validateFile($event)"
                            />
                            <InputError
                                class="mt-2"
                                :message="form.errors.ofertas"
                            />

                            <!-- boton registrar -->
                            <div>
                                <div class="mt-12 flex flex-col items-end">
                                    <PrimaryButton
                                        :class="{
                                            'opacity-25': form.processing,
                                        }"
                                        :disabled="form.processing"
                                    >
                                        Enviar
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm, usePage } from "@inertiajs/vue3";
import SecondaryButtonReturn from "@/Components/SecondaryButtonReturn.vue";
import { inject, ref, computed, watch } from "vue";
import DataView from "primevue/dataview";
import Calendar from "primevue/calendar";
import { PhotoIcon } from "@heroicons/vue/24/solid";

const swal = inject("$swal");

const props = defineProps({
    punto_id: {
        type: String,
        default: () => "",
    },
});

const form = useForm({
    nombre: "",
    horario: "",
    descripcion: "",
    estado: "Activo",
    lugar: "",
    id_puntos: props.punto_id,
    banner: "",
    ofertas: "", // Variable para almacenar el archivo de ofertas MASIVO
});

const breadcrumbLinks = [
    { url: `/perfil?search=${props.punto_id}`, text: 'Editar perfil' },
    { url: '', text: 'Añadir Ofertas' },
];

//max palabras
const isMaxPalabras = ref(false);
const isMaxPalabras1 = ref(false);

//variable de imagen
const imageUrl = ref(null);
//IMAGEN
const getImageUrl = (imageName) => {
    // Si las imágenes están almacenadas en la carpeta public/images, la ruta sería algo como esto:
    return `/storage/uploads/ofertas/${imageName}`;
};

//cuando suba la img
const onAdvancedUpload = (ev) => {
    form.banner = ev;
    console.log(form.banner);

    if (!form.banner) return;

    //reader para mostrar el doc cargado
    const reader = new FileReader();
    reader.onload = () => {
        imageUrl.value = reader.result;
    };
    reader.readAsDataURL(form.banner);
};

// Eliminar la imagen seleccionada
const removeImage = () => {
    form.banner = null;
    imageUrl.value = null;
};

// Limite palabras
const palabrasEnDescripcion = computed(() => {
    const palabras = form.descripcion.trim();
    const result = palabras.length;

    if (result >= 300) {
        isMaxPalabras1.value = true;
    } else {
        isMaxPalabras1.value = false;
    }

    return result;
});

watch(palabrasEnDescripcion, () => {
    form.descripcion = form.descripcion.trim(); // Asegúrate de que no haya espacios al principio o al final
});
//FIN

//Limite palabras
const palabrasEnHorario = computed(() => {
    const palabras = form.horario.trim();
    const result = palabras.length;

    if (result >= 100) {
        isMaxPalabras.value = true;
    } else {
        isMaxPalabras.value = false;
    }

    return result;
});

watch(palabrasEnHorario, () => {
    form.horario = form.horario.trim(); // Asegúrate de que no haya espacios al principio o al final
});

//fin

const submit = () => {
    if (form.lugar == "") {
        form.lugar = "NA";
    }
    form.post(route("ofertas.store"), {
        onSuccess: function () {
            form.reset("password", "password_confirmation");
            swal({
                title: "Registro Guardado",
                text: "La oferta se ha almacenado exitosamente",
                icon: "success",
            });
        },
    });
};

const validateFile = (event) => {
    const file = event.target.files[0];

    // Validar si se ha seleccionado un archivo
    if (!file) {
        form.errors.ofertas = "Por favor, selecciona un archivo.";
        return;
    }

    // Validar el tamaño del archivo (en bytes)
    if (file.size > 2 * 1024 * 1024) {
        // 2 MB en bytes
        form.errors.ofertas = "El archivo no debe ser mayor a 2 MB.";
        return;
    }

    // Reiniciar errores si la validación es exitosa
    form.errors.ofertas = null;
    // Asignar el archivo al modelo de datos
    form.ofertas = file;
    console.log(form.ofertas);
};

const cargueMasivo = () => {
    form.post(route("cargueOfertas"), {
        forceFormData: true,
        onSuccess: () => {
            // Verificar si la propiedad 'success' está presente en la respuesta
            if (usePage().props.flash.success !== undefined) {
                swal({
                    title: "Registros Cargados",
                    text: `${usePage().props.flash.success}.`,
                    icon: "success",
                    didClose: () => {
                        window.location.reload();
                    },
                });
            } else {
                swal({
                    title: "Registros Cargados",
                    text: "Se han importado los registros de forma masiva",
                    icon: "success",
                    didClose: () => {
                        window.location.reload();
                    },
                });
            }
        },
        // Manejar el error en caso de que ocurra algún problema con la solicitud
        onError: (error) => {
            swal({
                title: "Error",
                text: "Hubo un problema al procesar la solicitud.",
                icon: "error",
                didClose: () => {
                    window.location.reload();
                },
            });
        },
    });
};
</script>
