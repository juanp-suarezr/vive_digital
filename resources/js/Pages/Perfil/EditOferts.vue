<template>

    <Head title="Editar oferta" />

    <AuthenticatedLayout>
        <template #header>
            Editar oferta
        </template>

        <div class="flex flex-col bg-white border shadow-sm rounded-xl lg:w-full md:w-2/3">
            <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 grid grid-cols-2 gap-4">
                <h3 class="mt-1 text-gray-500">
                    Editar oferta
                </h3>
                <div class="text-right">
                    <SecondaryButtonReturn>
                        Regresar
                    </SecondaryButtonReturn>
                </div>

            </div>
            <div class="p-4 md:p-5">
                <form @submit.prevent="submit" class="sm:grid lg:grid-cols-2 gap-4">
                    <!-- nombre oferta -->
                    <div class="mb-4">
                        <InputLabel for="name" value="Nombre" />
                        <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.nombre" required
                            autofocus autocomplete="name" />
                        <InputError class="mt-2" :message="form.errors.nombre" />
                    </div>

                    <!-- lugar -->
                    <div class="mb-4">
                        <InputLabel for="lugar" value="Lugar del curso (opcional)" />
                        <TextInput id="lugar" type="text" class="mt-1 block w-full" v-model="form.lugar"
                            placeholder="salon 201" autocomplete="lugar" />
                        <InputError class="mt-2" :message="form.errors.lugar" />
                    </div>

                    <!-- Información horario oferta -->
                    <div class="mb-4">
                        <InputLabel for="horario"
                            value="Información horario de la oferta (opcional - max 100 caracteres)" />
                        <textarea id="horario" class="mt-1 block w-full" v-model="form.horario" required
                            placeholder="lunes, martes y miércoles" autocomplete="horario"></textarea>
                        <p class="text-gray-500 text-sm mt-2" :class="{ 'text-red-500': isMaxPalabras }">
                            {{ palabrasEnHorario }} caracteres <span v-if="isMaxPalabras">Limite de caracteres
                                superado</span>
                        </p>
                        <InputError class="mt-2" :message="form.errors.horario" />
                    </div>

                    <!-- Descripción -->
                    <div class="mb-4">
                        <InputLabel for="descripcion"
                            value="Descripción de la oferta (opcional - max 300 caracteres)" />
                        <textarea id="descripcion" class="mt-1 block w-full" v-model="form.descripcion" required
                            placeholder="Descripción detallada de la oferta" autocomplete="descripcion"></textarea>
                        <p class="text-gray-500 text-sm mt-2" :class="{ 'text-red-500': isMaxPalabras1 }">
                            {{ palabrasEnDescripcion }} caracteres <span v-if="isMaxPalabras1">Limite de caracteres
                                superado</span>
                        </p>
                        <InputError class="mt-2" :message="form.errors.descripcion" />
                    </div>


                    <!-- estado oferta -->
                    <div class="mb-4">
                        <InputLabel for="estado" value="estado de curso" />
                        <select id="estado" name="estado" v-model="form.estado"
                            class="block mt-1 w-full px-4 py-2 text-base text-gray-900 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500">
                            <option selected disabled value="0">Seleccionar estado del curso</option>
                            <option value=1>Activo</option>
                            <option value=0>Bloqueado</option>


                        </select>
                        <InputError class="mt-2" :message="form.errors.estado" />
                    </div>
                    <div class="col-span-2">
                        <!-- imagen banner -->
                        <p class="text-gray-600 text-sm">
                            Imagen de banner oferta (resolución recomendada: 1080x1080px)
                        </p>
                        <div class="border-2 border-gray-300 rounded-md p-2">
                            <TextInput id="imagen" type="file" class="mt-1 !border-0" accept="image/*"
                                @input="onAdvancedUpload($event.target.files[0])" :maxFileSize="2e+6" />
                            <InputError class="mt-2" :message="form.errors.banner" />


                            <div class="flex justify-center">

                                <img v-if="form.banner != 'NA'" :src="imageUrl" :alt="form.nombre"
                                    class="w-2/6 h-auto" />
                                <PhotoIcon v-else class="w-1/6 text-gray-300" />

                            </div>
                        </div>
                    </div>



                    <div>
                        <div class="mt-4 flex flex-col items-end">
                            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                Actualizar oferta
                            </PrimaryButton>

                        </div>
                    </div>

                </form>

            </div>
        </div>

    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import SecondaryButtonReturn from "@/Components/SecondaryButtonReturn.vue";
import { inject, ref, computed, watch } from 'vue';
import DataView from 'primevue/dataview';
import Calendar from 'primevue/calendar';
import { PhotoIcon } from '@heroicons/vue/24/solid'

const swal = inject('$swal');

const props = defineProps({
    oferta: {
        type: Object,
        default: () => '',
    }
});

console.log(props.oferta);

const form = useForm({
    id: props.oferta.id,
    nombre: props.oferta ? props.oferta.nombre : '',
    horario: props.oferta ? props.oferta.horario : '',
    descripcion: props.oferta ? props.oferta.descripcion : '',
    estado: props.oferta ? props.oferta.estado : '',
    lugar: props.oferta ? props.oferta.lugar : '',
    id_puntos: props.oferta.id_puntos,
    banner: props.oferta ? props.oferta.banner : '',
});


//max palabras
const isMaxPalabras = ref(false);
const isMaxPalabras1 = ref(false);

//IMAGEN
const getImageUrl = (imageName) => {
    // Si las imágenes están almacenadas en la carpeta public/images, la ruta sería algo como esto:
    return `/storage/uploads/ofertas/${imageName}`;
};

//variable de imagen
const imageUrl = ref(props.oferta ? getImageUrl(props.oferta.banner) : null);


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
    form.post(route('ofertas.actuOferts', props.oferta.id), {
        onSuccess: function () {
            form.reset('password', 'password_confirmation');
            swal({
                title: "Registro Guardado",
                text: "La oferta se ha actualizado exitosamente",
                icon: "success"
            })
        }
    });
};
</script>
