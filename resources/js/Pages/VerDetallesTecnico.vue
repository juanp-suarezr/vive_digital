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

    oferta: {
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



const abrirModal = () => {
    form.id_oferta = props.oferta.id;
    form.nombre_oferta = props.oferta.nombre;
    visible.value = true;
}



const getLetterSize = size => {
    let fontClass = 'text';
    switch (size) {
        case -2:
            fontClass = `${fontClass}-base sm:${fontClass}-xl md:${fontClass}-2xl`;
            break;
        case -1:
            fontClass = `${fontClass}-lg sm:${fontClass}-2xl md:${fontClass}-4xl`;
            break;
        case 0:
            fontClass = `${fontClass}-xl sm:${fontClass}-4xl md:${fontClass}-6xl`;
            break;
        case 1:
            fontClass = `${fontClass}-2xl sm:${fontClass}-6xl md:${fontClass}-8xl`;
            break;
        case 2:
            fontClass = `${fontClass}-4xl sm:${fontClass}-8xl md:${fontClass}-9xl`;
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





//INSCRIPCIONES
const submit = () => {

    if (props.info_usuario.find(item => item.identificacion == form.identificacion)) {

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

    } else {
        visible.value = false;
        form.post(route('inscribir-capacitaciones'), {
        onSuccess: () => {
            form.reset(); // Solo se ejecuta si la petición es exitosa
        },
    });

    }


};

const formatField = value => {

    return format(new Date(value), 'dd/MM/yyyy');

}

</script>

<template>

    <Head title="Oferta especial" />

    <PageLayout>

        <div class="w-full px-2 sm:px-6 mt-0 p-0 bg-gradient-to-b from-option2 to-option1"
            :class="{ '!bg-gradient-to-b !from-black to-black !text-yellow-200 font-bold': isContrast }">

            <div class="w-full" v-if="oferta">
                <div class="w-full">
                    <img :src="getImageUrl(oferta.banner, 'ofertas')" alt="Imagen de la oferta"
                            class="w-full rounded-lg shadow-lg object-contain border-2 border-yellow-200" />

                    <div class="flex flex-col sm:flex-row items-center">
                        <div class="ml-4 mt-4 py-4">
                            <h1 :class="[isContrast ? '!text-yellow-200 font-bold' : '', getLetterSize(letraSize)]">
                                {{ oferta.nombre }}
                            </h1>
                            <p :class="[isContrast ? '!text-yellow-200 font-bold' : '', getLetterSize(letraSize)]">
                                {{ oferta.descripcion }}
                            </p>
                            <p :class="[isContrast ? '!text-yellow-200 font-bold' : '', getLetterSize(letraSize)]">
                                <span class="font-bold">Horario:</span>
                                {{ oferta.horario }}
                            </p>
                            <p :class="[isContrast ? '!text-yellow-200 font-bold' : '', getLetterSize(letraSize)]">
                                <span class="font-bold">Lugar:</span>
                                {{ oferta.lugar }}
                            </p>
                            <p :class="[isContrast ? '!text-yellow-200 font-bold' : '', getLetterSize(letraSize)]">
                                <span class="font-bold">Tipo:</span>
                                {{ oferta.tipo }}
                            </p>

                        </div>
                    </div>

                    <div class="mt-8 sm:mt-0">
                        <PrimaryButton @click="abrirModal" type="button" class="bg-yellow-200 hover:bg-yellow-300 !text-4xl"
                            :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            INSCRIBIRSE
                        </PrimaryButton>
                    </div>
                </div>


            </div>
            <div class="w-full h-full flex justify-center items-center" v-else>
                <p>
                    Loading...
                </p>
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
    <Dialog v-model:visible="visible" modal position="center" header="INSCRIPCIÓN" class="max-w-xl mx-2 sm:mx-4 flex">

        <div class="m-auto">
            <p class="text-lg">
                Ingrese su documento de identificación para validar su información.
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

                <primaryButton
                    type="button" @click="submit" :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing">
                    INSCRIBIRSE
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
