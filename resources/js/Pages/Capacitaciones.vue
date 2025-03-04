<script setup>
import { Head, Link, useForm, usePage, router } from '@inertiajs/vue3';
import { ref, onMounted, inject, watch, computed } from "vue";
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
import { format } from 'date-fns';

AOS.init();

const swal = inject('$swal');

const props = defineProps({

    puntos: {
        type: Object,
    },

    ofertas_lucy: {
        type: Object,
    },
    ofertas_fernando: {
        type: Object,
    },
    ofertas_bella: {
        type: Object,
    },
    ofertas_consota: {
        type: Object,
    },
    ofertas_remanso: {
        type: Object,
    },
    info_usuario: {
        type: Object,
    },
});

console.log(props);


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

// Computed properties para agrupar las ofertas por punto
const allOfertas = computed(() => [
    { punto: 'CENTRO CULTURAL LUCY TEJADA', ofertas: props.ofertas_lucy },
    { punto: 'SAN FERNANDO CUBA', ofertas: props.ofertas_fernando },
    { punto: 'Centro Administrativo La Bella', ofertas: props.ofertas_bella },
    { punto: 'Centro de Desarrollo Vecinal Villa Consota', ofertas: props.ofertas_consota },
    { punto: 'El Remanso', ofertas: props.ofertas_remanso },
]);

const abrirModal = oferta => {
    form.id_oferta = oferta.id;
    form.nombre_oferta = oferta.nombre;
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
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '860px',
        numVisible: 1,
        numScroll: 1
    },

]);


//INSCRIPCIONES
const submit = () => {

    form.post(route('puntos.store'), {
        onSuccess: function () {
            visible.value = false;
            swal({
                title: "Registro Guardado",
                text: "proceso de Inscripción realizado, será notificado por Correo electrónico si es aprobado para empezar el curso o capacitación " + form.nombre_oferta,
                icon: "success"
            })
        }, onError: function () {
            visible.value = false;
            swal({
                title: "Registro NO Guardado",
                text: `Estamos teniendo inconvenientes al guardar el registro, por favor verificar si ya se registro en el curso de ${form.nombre_oferta} o vuelva a intentar más tarde.`,
                icon: "error"
            })
        }
    });
};

const formatField = value => {

    return format(new Date(value), 'dd/MM/yyyy');

}

</script>

<template>

    <Head title="Capacitaciones" />

    <PageLayout>

        <div class="w-full px-2 sm:px-6 mt-0 p-0 bg-gradient-to-b from-option2 to-option1"
            :class="{ '!bg-gradient-to-b !from-black to-black !text-yellow-200 font-bold': isContrast }">

            <!-- Recorremos las ofertas de cada punto -->
            <div v-for="punto in allOfertas" :key="punto.punto" class="py-6">
                <h2 class="text-2xl font-bold mb-4 px-6">{{ punto.punto }}</h2>

                <Carousel :value="punto.ofertas" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions"
                    :class="{ 'min-[900px]:px-44': punto.ofertas.length == 1 }">
                    <template #item="slotProps">
                        <div
                            class="flex flex-col my-auto text-parrafo bg-white surface-border shadow-md rounded-md sm:m-2 p-3 h-full">
                            <!-- imagen y tag con tipo -->
                            <div class="mb-3">
                                <div class="relative mx-auto">
                                    <img v-if="slotProps.data.banner != 'NA'"
                                        :src="getImageUrl(slotProps.data.banner, 'ofertas')"
                                        :alt="slotProps.data.nombre"
                                        class="w-full rounded-md min-[320px]:!h-[20vh] sm:!h-[40vh]" />
                                    <div v-else class="w-full min-[320px]:!h-[20vh] sm:!h-[40vh] flex">
                                        <h2
                                            class="flex justify-center text-center m-auto text-4xl sm:text-6xl text-parrafo font-bold">
                                            {{ slotProps.data.nombre }}
                                        </h2>
                                    </div>
                                    <Tag :value="punto.punto"
                                        class="absolute bg-primary text-[8px] sm:text-sm text-white sm:top-[5px] sm:left-[5px] top-[-10px]" />
                                </div>
                            </div>
                            <!-- info general -->
                            <div class="flex flex-wrap md:flex-row flex-col justify-between gap-4">
                                <!-- nombre, jornada, horario, lugar -->
                                <div class="">
                                    <div class="mb-3 font-medium p-2 bg-azul rounded-md shadow-md text-white">{{
                                        slotProps.data.nombre }}</div>
                                    <div class="mb-3"><b>Información Horario:</b> {{ slotProps.data.horario }}</div>
                                    <div class="mb-3"><b>Descripción:</b> {{ slotProps.data.descripcion }}</div>
                                </div>
                                <!-- cupo, fecha inicio, fin -->
                                <div class="">

                                    <div class="mb-3"><b>Lugar:</b> {{ slotProps.data.lugar }}</div>
                                </div>
                            </div>

                            <div class="flex justify-center align-items-center">

                                <button type="button" @click="abrirModal(slotProps.data)"
                                    class="bg-secondary hover:bg-primary text-xs sm:text-sm text-white p-2 rounded-md shadow-xl z-10"
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
                    <template #empty>
                        <div class="px-6 text-secondary font-bold">Actualmente no hay cursos disponibles</div>
                    </template>
                </Carousel>
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
    <Dialog v-model:visible="visible" modal position="center" header="PRESCRIPCIÓN" class="max-w-xl mx-2 sm:mx-4 flex">

        <div class="m-auto">
            <p class="text-lg">
                Ingrese la cédula para validar su información
            </p>

            <div class="flex w-full justify-center">
                <!-- Identificacion -->
                <div class="w-full">
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
            <div class="flex justify-center items-center justify-end mt-6 z-20" v-if="6 < form.identificacion">

                <primaryButton v-if="info_usuario.find(item => item.identificacion == form.identificacion)"
                    type="button" @click="submit" :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing">
                    INSCRIBIRSE
                </primaryButton>
                <div v-else class="">
                    <em>debe registrarse primero en el punto para realizar el proceso de inscripción al curso. <a
                            :href="route('register')" class="bg-blue-400 underline">click
                            aquí</a> para registrarse</em>
                </div>
            </div>

        </div>



    </Dialog>

</template>

<style scoped>
.inverted {
    transform: scaleY(-1);
}
</style>

<style>
/* Estilos personalizados para el componente Carousel */
.p-carousel .p-carousel-indicators .p-carousel-indicator button {
    background-color: #dcabae !important;
    /* Color de fondo para los elementos no seleccionados */

}

.p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background-color: #e20613 !important;
    /* Color de fondo para los elementos seleccionados */
}
</style>
