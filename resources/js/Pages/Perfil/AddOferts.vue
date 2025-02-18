<template>

    <Head title="Agregar oferta" />

    <AuthenticatedLayout>
        <template #header>
            Nueva oferta
        </template>

        <div class="flex flex-col bg-white border shadow-sm rounded-xl lg:w-1/2 md:w-2/3">
            <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 grid grid-cols-2 gap-4">
                <h3 class="mt-1 text-gray-500">
                    Nueva oferta
                </h3>
                <div class="text-right">
                    <SecondaryLink :href="route('perfil.index')">
                        Regresar
                    </SecondaryLink>
                </div>

            </div>
            <div class="p-4 md:p-5">
                <form @submit.prevent="submit" class="grid lg:grid-cols-2 gap-4">
                    <!-- nombre oferta -->
                    <div>
                        <InputLabel for="name" value="Nombre" />
                        <TextInput id="name" type="text" class="mt-1 block w-full" v-model="form.nombre" required
                            autofocus autocomplete="name" />
                        <InputError class="mt-2" :message="form.errors.nombre" />
                    </div>
                    <!-- tipo oferta -->
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
                    <!-- fecha inicio -->
                    <div>
                        <InputLabel for="fecha_init" value="Fecha de inicio del curso" />
                        <Calendar class="mt-1 rounded-md border" v-model="form.fecha_init" showButtonBar />
                        <InputError class="mt-2" :message="form.errors.fecha_init" />
                    </div>
                    <!-- fecha fin -->
                    <div>
                        <InputLabel for="fecha_fin" value="Fecha de fin del curso" />
                        <Calendar class="mt-1 rounded-md border" v-model="form.fecha_fin" showButtonBar />
                        <InputError class="mt-2" :message="form.errors.fecha_fin" />
                    </div>
                    <!-- jornada (dias) oferta -->
                    <div>
                        <InputLabel for="jornada" value="Jornada de la oferta" />
                        <TextInput id="jornada" type="text" class="mt-1 block w-full" v-model="form.jornada" required
                            placeholder="lunes,martes y miércoles" autocomplete="jornada" />
                        <InputError class="mt-2" :message="form.errors.jornada" />
                    </div>
                    <!-- horario -->
                    <div>
                        <InputLabel for="horario" value="Horario del curso" />
                        <TextInput id="horario" type="text" class="mt-1 block w-full" v-model="form.horario" required
                            placeholder="2pm - 6pm" autocomplete="horario" />
                        <InputError class="mt-2" :message="form.errors.horario" />
                    </div>
                    <!-- lugar -->
                    <div>
                        <InputLabel for="lugar" value="Lugar del curso (opcional)" />
                        <TextInput id="lugar" type="text" class="mt-1 block w-full" v-model="form.lugar"
                            placeholder="salon 201" autocomplete="lugar" />
                        <InputError class="mt-2" :message="form.errors.lugar" />
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
                                Registrar oferta
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
import { inject, ref } from 'vue';
import DataView from 'primevue/dataview';
import Calendar from 'primevue/calendar';
import { PhotoIcon } from '@heroicons/vue/24/solid'

const swal = inject('$swal');

const props = defineProps({
    punto_id: {
        type: String,
        default: () => '',
    }
});

const form = useForm({
    nombre: '',
    horario: '',
    jornada: '',
    fecha_init: '',
    fecha_fin: '',
    estado: '',
    cupo: '',
    tipo: '',
    lugar: '',
    id_puntos: props.punto_id,
    banner: '',
});

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

const submit = () => {
    if (form.lugar == '') {
        form.lugar = 'NA';
    };
    form.post(route('ofertas.store'), {
        onSuccess: function () {
            form.reset('password', 'password_confirmation');
            swal({
                title: "Registro Guardado",
                text: "La oferta se ha almacenado exitosamente",
                icon: "success"
            })
        }
    });
};
</script>
