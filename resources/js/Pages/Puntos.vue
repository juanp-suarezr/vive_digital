<script setup>
import { Head, Link, useForm, usePage, router } from '@inertiajs/vue3';
import { ref, onMounted, inject, watch } from "vue";
import PageLayout from '@/Layouts/PageLayout.vue';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import PrimaryLink from '@/Components/PrimaryLink.vue';
import Dialog from 'primevue/dialog';
import TextInput from '@/Components/TextInput.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import puntoVive from '../../../public/assets/img/puntoVive.webp';
import { WifiIcon, ComputerDesktopIcon, AcademicCapIcon, RocketLaunchIcon } from '@heroicons/vue/24/solid'

AOS.init();

const swal = inject('$swal');

const props = defineProps({

    infoPunto: {
        type: Object,
    },
    ofertas: {
        type: Object,
    },
    eventos: {
        type: Object,
    },
    puntos: {
        type: Object,
    },
    info_usuario: {
        type: Object,
    },
});

console.log(props);

const punto = ref(props.infoPunto.length ? props.infoPunto[0].id : 0);

const isContrast = ref(usePage().props.accesibilidad.contraste);
const letraSize = ref(usePage().props.accesibilidad.letra);

//modal
const visible = ref(false);

const form = useForm({
    id_oferta: '',
    id_info_user: '',
    identificacion: '',
    nombre_oferta: '',
});

watch(() => usePage().props.accesibilidad.contraste, (newVal) => {
    isContrast.value = newVal;

});

watch(() => usePage().props.accesibilidad.letra, (newVal) => {
    letraSize.value = newVal;

});

const handleSelectPuntos = () => {

    router.get(
        "/puntos",
        { search: punto.value, identificacion: form.identificacion },
        {

            replace: true,
        },
    );
};

const abrirModal = oferta => {
    form.id_oferta = oferta.id;
    form.nombre_oferta = oferta.id;
    visible.value = true;
}



const getLetterSize = size => {
    let fontClass = 'text';
    switch (size) {
        case -2:
            fontClass = `${fontClass}-xs sm:${fontClass}-base md:${fontClass}-lg`;
            break;
        case -1:
            fontClass = `${fontClass}-sm sm:${fontClass}-lg md:${fontClass}-xl`;
            break;
        case 0:
            fontClass = `${fontClass}-base sm:${fontClass}-xl md:${fontClass}-2xl`;
            break;
        case 1:
            fontClass = `${fontClass}-lg sm:${fontClass}-2xl md:${fontClass}-4xl`;
            break;
        case 2:
            fontClass = `${fontClass}-xl sm:${fontClass}-4xl md:${fontClass}-6xl`;
            break;
        default:
            break;
    }
    return fontClass;
}


const getInitials = function (name) {
    let parts = name.split(' ');
    let initials = '';
    let count = 0;

    for (var i = 0; i < parts.length && count < 2; i++) {
        if (parts[i].length > 0 && parts[i] !== '') {
            initials += parts[i][0];
            count++;
        }
    }
    return initials;
};

//IMAGEN
const getImageUrl = (imageName, folder) => {
    // Si las imágenes están almacenadas en la carpeta public/images, la ruta sería algo como esto:
    return `/storage/uploads/${folder}/${imageName}`;
};



const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);


//INSCRIPCIONES
const submit = () => {

    form.post(route('puntos.store'), {
        onSuccess: function () {
            visible.value = false;
            swal({
                title: "Registro Guardado",
                text: "Se ha inscrito a la capacitación " + form.nombre_oferta,
                icon: "success"
            })
        }
    });
};

</script>

<template>

    <Head title="punto digital" />

    <PageLayout>

        <div class="w-full px-4 sm:px-6 mt-0 bg-gradient-to-b from-option2 to-option1">

            <div class="mb-4 px-4 sm:flex">
                <div class="sm:w-1/2 md:w-2/6 mb-4">
                    <InputLabel class="!text-base mb-1" for="puntos" value="Centros tecnológicos vive digital" />
                    <select id="puntos" name="puntos" v-model="punto" @change="handleSelectPuntos"
                        class="block w-full px-4 py-1 text-base text-gray-900 border border-gray-600 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500">
                        <option selected disabled value="0">Seleccionar centro tecnológico vive digital</option>
                        <option v-for="pt in puntos" :key="pt.id" :value="pt.id">{{ pt.nombre }}</option>

                    </select>
                </div>

            </div>

            <!-- active - 0 INICIO -->
            <div class="overflow-hidden shadow-sm sm:rounded-lg">
                <!-- perfil banner -->
                <div class="sm:grid grid-cols-6 gap-4">
                    <!-- banner izquierda de 4 columns de 6 -->
                    <div class="bg-white col-span-4">
                        <!-- banner color -->
                        <div class="rounded-t-md w-full bg-option1">
                            <!-- imagen -->
                            <div v-if="infoPunto[0].banner != 'NA'" class="w-full h-full">
                                <figure>
                                    <img class="w-full rounded-xl shadow-xl"
                                        :src="getImageUrl(infoPunto[0].banner, 'banners')"
                                        alt="imagen de espacio digital" title="Punto vive digital">
                                    <figcaption lang="es" class="hidden">Esta es una imagen del punto vive digital Lucy
                                        Tejada de
                                        Pereira</figcaption>
                                </figure>
                            </div>
                            <!-- Banner -->
                            <div v-else class="w-full h-[280px] flex bg-gradient-to-br from-primary to-secondary">
                                <h2
                                    class="flex justify-center text-center m-auto text-4xl sm:text-6xl text-white font-bold">
                                    {{ infoPunto[0].punto.nombre }}
                                </h2>
                            </div>
                        </div>

                        <!-- avatar -->
                        <div class="mt-[-26%] sm:mt-[-10%] mb-2 w-full flex justify-center sm:flex-col">
                            <div
                                class="rounded-full border-2 border-white w-36 ms-4 h-36 bg-yellow-600 flex justify-center items-center">
                                <p class="text-4xl text-white">{{
                                    getInitials(infoPunto[0].punto.nombre) }}</p>

                            </div>
                        </div>

                        <!-- info  -->
                        <div class="sm:grid grid-cols-4">
                            <!-- info left -->
                            <div class="col-span-4 px-4 mb-4">
                                <h2 class="text-base sm:text-xl text-gray-600 font-semibold">{{
                                    infoPunto[0].punto.direccion }}
                                </h2>
                                <p class="text-sm sm:text-lg text-gray-500">{{ infoPunto[0].email }} </p>
                                <p class="text-xs sm:text-base text-gray-400">Celular: {{ infoPunto[0].celular }}</p>
                                <h2 class="text-base sm:text-xl text-gray-600 font-semibold">Administrador: {{
                                    infoPunto[0].punto.administrador }}
                                </h2>
                            </div>

                        </div>
                    </div>
                    <!-- banner derecha de una columnas de 6 -->
                    <div class="bg-white col-span-2 p-4 mt-4 sm:mt-0">
                        <div class="pb-2 border-b-2">
                            <h2 class="text-lg sm:text-xl">Sector</h2>
                            <p class="text-sm sm:text-base text-gray-600">
                                {{ infoPunto[0].punto.sector }}
                            </p>
                        </div>
                        <div class="pb-2">
                            <h2 class="text-lg sm:text-xl pt-2">Canales</h2>
                            <!-- face, insta, youtube -->
                            <div class="flex mt-4 gap-2">
                                <!-- Instagram -->
                                <a v-if="infoPunto[0].instagram != 'NA'" target="_blank" :href="infoPunto[0].instagram">
                                    <span class="[&>svg]:h-8 [&>svg]:w-8 text-red-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                        </svg>
                                    </span>
                                </a>
                                <!-- Facebook -->
                                <a v-if="infoPunto[0].facebook != 'NA'" target="_blank" :href="infoPunto[0].facebook">
                                    <span class="[&>svg]:w-8 [&>svg]:h-8 text-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                            viewBox="0 0 320 512">

                                            <path
                                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                        </svg>
                                    </span>
                                </a>

                            </div>

                        </div>

                    </div>
                    <!-- descripcion -->
                    <div class="bg-white mt-4 col-span-6">
                        <h2 class="text-2xl text-center py-4 bg-blue-200 text-gray-600">Descripción del punto</h2>
                        <p class="p-4 text-base sm:text-lg text-gray-500">{{ infoPunto[0].descripcion }}</p>
                    </div>

                </div>
                <!-- CAPACITACIONES -->
                <div class="mt-8 flex flex-col w-full">
                    <h1 class="text-parrafo mb-4" :class="letraSize == -2 ? 'sm:text-2xl text-xl'
                        : letraSize == -1 ? 'sm:text-4xl text-2xl'
                            : letraSize == 1 ? 'sm:text-[4rem] text-4xl'
                                : letraSize == 2 ? 'sm:text-[5rem] text-4xl' : 'sm:text-[3rem] text-4xl'">
                        CAPACITACIONES
                    </h1>
                    <Carousel :value="ofertas" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions">
                        <template #item="slotProps">
                            <div
                                class="flex flex-col my-auto text-parrafo bg-white surface-border shadow-xl rounded-md sm:m-2 p-3">
                                <!-- imagen y tag con tipo -->
                                <div class="mb-3">
                                    <div class="relative mx-auto">
                                        <img v-if="slotProps.data.banner != 'NA'"
                                            :src="getImageUrl(slotProps.data.banner, 'ofertas')"
                                            :alt="slotProps.data.nombre" class="w-full rounded-md !h-[40vh]" />
                                        <div v-else class="w-full !h-[40vh] flex">
                                            <h2
                                                class="flex justify-center text-center m-auto text-4xl sm:text-6xl text-parrafo font-bold">
                                                {{ slotProps.data.nombre }}
                                            </h2>
                                        </div>
                                        <Tag :value="slotProps.data.tipo"
                                            class="absolute bg-primary text-base sm:text-xl text-white"
                                            style="left:5px; top: 5px" />
                                    </div>
                                </div>
                                <!-- info general -->
                                <div class="flex flex-wrap md:flex-row flex-col justify-between gap-4">
                                    <!-- nombre, jornada, horario, lugar -->
                                    <div class="">
                                        <div class="mb-3 font-medium p-2 bg-azul rounded-md shadow-md text-white">{{
                                            slotProps.data.nombre }}</div>
                                        <div class="mb-3"><b>Jornada:</b> {{ slotProps.data.jornada }}</div>
                                        <div class="mb-3"><b>Horario:</b> {{ slotProps.data.horario }}</div>
                                        <div class="mb-3"><b>Lugar:</b> {{ slotProps.data.lugar }}</div>
                                    </div>
                                    <!-- cupo, fecha inicio, fin -->
                                    <div class="">
                                        <div class="mb-3"><b>Cupo max:</b> {{ slotProps.data.cupo }}</div>
                                        <div class="mb-3"><b>Fecha inicio:</b> {{ slotProps.data.fecha_init }}</div>
                                        <div class="mb-3"><b>Fecha fin:</b> {{ slotProps.data.fecha_fin }}</div>
                                    </div>
                                </div>

                                <div class="flex justify-center align-items-center">

                                    <button type="button" @click="abrirModal(slotProps.data)"
                                        class="bg-secondary hover:bg-primary text-xs sm:text-sm text-white p-2 rounded-md shadow-xl"
                                        :class="[isContrast ? '!text-yellow-200 font-bold' : '',
                                        letraSize == -2 ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                            : letraSize == -1 ? '!sm:text-xs !text-[0.65rem]'
                                                : letraSize == 1 ? '!sm:text-lg !text-sm'
                                                    : letraSize == 2 ? '!sm:text-xl !text-base' : ''
                                        ]">
                                        INSCRIBIRSE
                                    </button>
                                </div>
                            </div>
                        </template>
                    </Carousel>
                </div>
                <!-- EVENTOS -->
                <div class="mt-8 flex flex-col w-full">
                    <h1 class="text-parrafo mb-4" :class="letraSize == -2 ? 'sm:text-2xl text-xl'
                        : letraSize == -1 ? 'sm:text-4xl text-2xl'
                            : letraSize == 1 ? 'sm:text-[4rem] text-4xl'
                                : letraSize == 2 ? 'sm:text-[5rem] text-4xl' : 'sm:text-[3rem] text-4xl'">
                        EVENTOS
                    </h1>
                    <Carousel :value="eventos" :numVisible="1" :numScroll="1">
                        <template #item="slotProps">
                            <div
                                class="flex flex-col my-auto text-parrafo bg-white surface-border shadow-xl rounded-md sm:m-2 p-3">
                                <!-- imagen y tag con tipo -->
                                <div class="mb-3">
                                    <div class="relative mx-auto">
                                        <img v-if="slotProps.data.banner != 'NA'"
                                            :src="getImageUrl(slotProps.data.banner, 'ofertas')"
                                            :alt="slotProps.data.nombre" class="w-full rounded-md !h-[40vh]" />
                                        <div v-else class="w-full !h-[40vh] flex">
                                            <h2
                                                class="flex justify-center text-center m-auto text-4xl sm:text-6xl text-parrafo font-bold">
                                                {{ slotProps.data.nombre }}
                                            </h2>
                                        </div>
                                        <Tag :value="slotProps.data.tipo"
                                            class="absolute bg-primary text-base sm:text-xl text-white"
                                            style="left:5px; top: 5px" />
                                    </div>
                                </div>
                                <!-- info general -->
                                <div class="mb-3 font-medium">{{ slotProps.data.nombre }}</div>
                                <div class="mb-3">{{ slotProps.data.descripción }}</div>

                                <div class="flex justify-center align-items-center">

                                    <PrimaryLink v-if="slotProps.data.link != 'NA'" :href="slotProps.data.link"
                                        target="_blank">
                                        VER ENLACE
                                    </PrimaryLink>
                                </div>
                            </div>
                        </template>
                    </Carousel>
                </div>

            </div>



        </div>
        <section class="section2 overflow-hidden">
            <svg class="curve" viewBox="0 0 370.417 79.375">
                <path class="wave"
                    d="M-1.301 51.894C141.54 5.807 159.612 38.111 226.846 62.2c90.74 32.51 149.712-33.492 149.712-33.492v59.541H-1.302z"
                    fill="#C20E1A" fill-rule="evenodd" />
            </svg>

        </section>


    </PageLayout>

    <!-- MODAL Inscripcion -->
    <Dialog v-model:visible="visible" modal position="center" header="REGISTRO REALIZADO"
        class="max-w-xl mx-2 sm:mx-4 flex">

        <div class="m-auto">
            <p class="text-lg">
                Ingrese la cédula para validar su información
            </p>

            <div class="flex w-full justify-center">
                <!-- Identificacion -->
                <div class="col-span-3">
                    <InputLabel :class="[isContrast ? '!text-yellow-200 font-bold' : '',
                    letraSize == -2 ? '!sm:text-[0.65rem] !text-[0.55rem]'
                        : letraSize == -1 ? '!sm:text-xs !text-[0.65rem]'
                            : letraSize == 1 ? '!sm:text-lg !text-sm'
                                : letraSize == 2 ? '!sm:text-xl !text-base' : 'sm:text-sm text-xs'
                    ]" for="identificacion" value="identificacion" />
                    <TextInput id="identificacion" type="number" class="mt-1 block w-full p-0 sm:p-2"
                        :class="[isContrast ? '!text-yellow-200 font-bold bg-black' : '']" v-model="form.identificacion"
                        required autocomplete="identificacion" />
                    <InputError class="mt-1" :message="form.errors.identificacion" />
                </div>
            </div>


            <!-- next button -->
            <div class="flex justify-center items-center justify-end mt-6 z-20">

                <primaryButton v-if="info_usuario.find(item => item.identificacion == form.identificacion)" type="button" @click="submit" :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing">
                    Inscribirse
                </primaryButton>
            </div>

        </div>



    </Dialog>

</template>

<style scoped>
.inverted {
    transform: scaleY(-1);
}
</style>
