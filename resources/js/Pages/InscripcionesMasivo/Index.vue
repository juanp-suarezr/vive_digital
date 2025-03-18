<template>

    <Head title="Oferta" />

    <AuthenticatedLayout :breadCrumbLinks="breadcrumbLinks">
        <template #header>
            CARGUE MASIVO INSCRITOS OFERTAS
        </template>


        <!-- cargue -->
        <div class="sm:px-24 mt-12">
            <div class="w-full  bg-white border shadow-sm rounded-xl">
                <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 flex">
                    <h3 class="text-gray-500 m-auto text-xl">
                        CARGUE MASIVO
                    </h3>

                </div>

                <div class="w-full h-full flex px-4">
                    <div class="mt-8 w-full">

                        <p class="sm:text-lg">
                            <b>Nota:</b> Para subir masivamente la lista de inscritos a las ofertas, debe descargar la
                            plantilla, dando
                            clic en
                            el
                            siguiente
                            botón.
                        </p>

                        <a :href="route('plantillaIns.excel')"
                            class="flex inline-flex text-white bg-green-800 hover:bg-blue-800 font-medium rounded-lg text-base px-4 py-2 mt-8">
                            <i class="fa-solid fa-file-arrow-down m-auto me-2 sm:!text-lg"></i>Descargar plantilla
                        </a>

                        <p class="mt-12 sm:text-lg">
                            Luego de descargar la plantilla y cargar los datos, subir el mismo archivo excel en el
                            apartado
                            de
                            abajo.
                        </p>


                        <form @submit.prevent="cargueMasivo">
                            <TextInput id="cargueMasivoInscritos" type="file" class="mt-4 block w-full h-36"
                                @change="validateFile($event)" />
                            <InputError class="mt-2" :message="form.errors.inscritos" />

                            <!-- boton registrar -->
                            <div>
                                <div class="mt-12 flex flex-col items-start">
                                    <PrimaryButton :class="{ 'opacity-25': form.processing }" class="sm:!text-lg"
                                        :disabled="form.processing">
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
import { defineProps } from "vue";
import { Head } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import { ref, onMounted, watch, inject } from "vue";
import Modal from '@/Components/Modal.vue';
import { DocumentArrowDownIcon } from '@heroicons/vue/24/solid';
import SecondaryLink from "@/Components/SecondaryLink.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { router, useForm, usePage } from '@inertiajs/vue3'
import Pagination from '@/Components/Pagination.vue'

const swal = inject('$swal');

const props = defineProps({

});

const form = useForm({

    inscritos: '', // Variable para almacenar el archivo de inscritos MASIVO
});

const breadcrumbLinks = [
    { url: '', text: 'Cargue Masivo Inscritos' },
];

const validateFile = (event) => {
    const file = event.target.files[0];

    // Validar si se ha seleccionado un archivo
    if (!file) {
        form.errors.inscritos = "Por favor, selecciona un archivo.";
        return;
    }

    // Validar el tamaño del archivo (en bytes)
    // if (file.size > 2 * 1024 * 1024) { // 2 MB en bytes
    //     form.errors.inscritos = "El archivo no debe ser mayor a 2 MB.";
    //     return;
    // }

    // Reiniciar errores si la validación es exitosa
    form.errors.inscritos = null;
    // Asignar el archivo al modelo de datos
    form.inscritos = file;
    console.log(form.inscritos);
};

const cargueMasivo = () => {
    form.post(route('cargueInscritos'), {
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
                    }
                });
            } else {
                swal({
                    title: "Registros Cargados",
                    text: "Se han importado los registros de forma masiva",
                    icon: "success",
                    didClose: () => {

                        window.location.reload();
                    }
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
                }
            });
        }
    });
};

</script>
