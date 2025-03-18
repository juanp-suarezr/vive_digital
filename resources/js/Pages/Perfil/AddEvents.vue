<template>

    <Head title="Agregar evento" />

    <AuthenticatedLayout :breadCrumbLinks="breadcrumbLinks">
        <template #header>
            Nuevo evento
        </template>

        <div class="flex flex-col bg-white border shadow-sm rounded-xl lg:w-1/2 md:w-2/3">
            <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 grid grid-cols-2 gap-4">
                <h3 class="mt-1 text-gray-500">
                    Nuevo evento
                </h3>
                <div class="text-right">
                    <SecondaryLink :href="route('perfil.index')">
                        Regresar
                    </SecondaryLink>
                </div>

            </div>
            <div class="p-4 md:p-5">
                <form @submit.prevent="submit" class="grid lg:grid-cols-2 gap-4">
                    <!-- nombre evento -->
                    <div>
                        <InputLabel for="name" value="Nombre" />
                        <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.nombre" required
                            autofocus autocomplete="name" />
                        <InputError class="mt-2" :message="form.errors.nombre" />
                    </div>
                    <!-- tipo evento -->
                    <div>
                        <InputLabel for="tipo" value="Tipo de curso" />
                        <select id="tipos" name="tipos" v-model="form.tipo"
                            class="block mt-1 w-full px-4 py-2 text-base text-gray-900 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500">
                            <option selected disabled value="0">Seleccionar tipo de curso</option>
                            <option value="Ofimática">Ofimática</option>
                            <option value="Tecnología">Tecnología</option>
                            <option value="Finanzas">Finanzas</option>
                            <option value="Crecimiento personal">Crecimiento personal</option>
                            <option value="Otros">Otros</option>

                        </select>
                        <InputError class="mt-2" :message="form.errors.tipo" />
                    </div>
                    <!-- link -->
                    <div>
                        <InputLabel for="link" value="link del curso (opcional)" />
                        <TextInput id="link" type="text" class="mt-1 block w-full" v-model="form.link"
                            autocomplete="link" />
                        <InputError class="mt-2" :message="form.errors.link" />
                    </div>
                    <!-- descripción -->
                    <div class="mb-2 col-span-2">
                        <p>
                            Describa brevemente la temática del evento (max 300 caracteres)
                        </p>
                        <Textarea v-model="form.descripcion" variant="filled" autoResize rows="5"
                            class="mt-1 block w-full" autocomplete="descripcion" />
                        <p class="text-gray-500 text-sm mt-2" :class="{ 'text-red-500': isMaxPalabras }">
                            {{ palabrasEnTestimonio }} caracteres <span v-if="isMaxPalabras">Limite de caracteres
                                superado</span>
                        </p>
                        <InputError class="mt-2" :message="form.errors.descripcion" />
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

                                <img v-if="imageUrl" :src="imageUrl" :alt="form.nombre" class="w-2/6 h-auto" />
                                <PhotoIcon v-else class="w-1/6 text-gray-300" />

                            </div>
                        </div>
                    </div>



                    <div>
                        <div class="mt-4 flex flex-col items-end">
                            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                Registrar evento
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
import SecondaryLink from "@/Components/SecondaryLink.vue";
import { inject, ref, computed } from 'vue';
import DataView from 'primevue/dataview';
import Calendar from 'primevue/calendar';
import { PhotoIcon } from '@heroicons/vue/24/solid';
import Textarea from 'primevue/textarea';

const swal = inject('$swal');

const props = defineProps({
    punto_id: {
        type: String,
        default: () => '',
    }
});

const form = useForm({
    nombre: '',
    estado: '',
    descripcion: 'NA',
    tipo: '',
    link: 'NA',
    id_puntos: props.punto_id,
    banner: '',
});

const breadcrumbLinks = [
    { url: `/perfil?search=${props.punto_id}`, text: 'Editar perfil' },
    { url: '', text: 'Añadir evento' },
];

//variable de imagen
const imageUrl = ref(null);

//max palabras
const isMaxPalabras = ref(false);


// Limite palabras
const palabrasEnTestimonio = computed(() => {
    const palabras = form.descripcion.trim();
    const result = palabras.length;

    if (result > 300) {
        isMaxPalabras.value = true;
    } else {
        isMaxPalabras.value = false;
    }

    return result;
});

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

const submit = () => {
    form.post(route('eventos.store'), {
        onSuccess: function () {
            form.reset('password', 'password_confirmation');
            swal({
                title: "Registro Guardado",
                text: "El evento se ha almacenado exitosamente",
                icon: "success"
            })
        }
    });
};
</script>
