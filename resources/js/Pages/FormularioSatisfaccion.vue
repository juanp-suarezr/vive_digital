<template>
  <Head title="Formulario de Satisfacción" />

  <PageLayout>
    <template #header> Formulario de Satisfacción </template>

    <div
      class="bg-white max-w-4xl mx-auto my-8 p-8 rounded-lg shadow-md"
      :class="[isContrast ? '!text-yellow-200 font-bold !bg-slate-950' : '']"
    >
      <form @submit.prevent="submitForm" class="sm:grid sm:grid-cols-2 gap-6">
        <!-- puntos y motivo visita -->
        <div class="mb-4">
          <!-- Punto -->
          <div class="mb-6">
            <label
              class="block text-gray-700 font-bold mb-2"
              :class="[isContrast ? '!text-white' : '']"
              >Punto</label
            >
            <select
              v-model="form.id_punto"
              :class="[
                isContrast ? '!text-yellow-200 font-bold !bg-black' : '',
                letraSize == -2
                  ? '!text-[0.65rem]'
                  : letraSize == -1
                  ? '!text-sm'
                  : letraSize == 1
                  ? '!text-lg'
                  : letraSize == 2
                  ? '!text-xl'
                  : '',
              ]"
              class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            >
              <option disabled value="">
                Seleccione un centros tecnológico
              </option>
              <option v-for="punto in puntos" :key="punto.id" :value="punto.id">
                {{ punto.nombre }}
              </option>
            </select>
            <InputError class="mt-1" :message="form.errors.id_punto" />
          </div>

          <!-- Motivo de visita -->
          <div class="mb-6">
            <label
              class="block text-gray-700 font-bold mb-2"
              :class="[isContrast ? '!text-white' : '']"
              >Motivo de visita</label
            >
            <select
              id="motivo_visita"
              name="motivo_visita"
              v-model="form.motivo_visita"
              :class="[
                isContrast ? '!text-yellow-200 font-bold !bg-black' : '',
                letraSize == -2
                  ? '!text-[0.65rem]'
                  : letraSize == -1
                  ? '!text-sm'
                  : letraSize == 1
                  ? '!text-lg'
                  : letraSize == 2
                  ? '!text-xl'
                  : '',
              ]"
              class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            >
              <option disabled value="">Seleccione un motivo</option>
              <option
                class="text-black"
                :class="[isContrast ? '!text-yellow-200 font-bold' : '']"
                v-for="niv in tipoServ"
                :key="niv.id"
                :value="niv.code"
              >
                {{ niv.nombre }}
              </option>
            </select>
            <InputError class="mt-1" :message="form.errors.motivo_visita" />
          </div>

          <!-- Identificación -->
          <div class="mb-6">
            <label
              class="block text-gray-700 font-bold mb-2"
              :class="[isContrast ? '!text-white' : '']"
              >Identificación</label
            >
            <TextInput
              id="identificacion"
              type="number"
              class="mt-1 block w-full p-0 sm:p-2"
              :class="[
                isContrast
                  ? '!text-yellow-200 placeholder:text-yellow-200 font-bold bg-black'
                  : '',
              ]"
              v-model="form.identificacion"
              required
              autofocus
              autocomplete="identificacion"
              placeholder="identificación"
            />
            <InputError class="mt-1" :message="form.errors.identificacion" />
          </div>

          <!-- Nombre -->
          <div class="mb-6" v-if="inputNamevisible">
            <label
              class="block text-gray-700 font-bold mb-2"
              :class="[isContrast ? '!text-white' : '']"
              >Nombre completo</label
            >
            <TextInput
              id="nombres"
              type="text"
              :disabled="info_usuario.nombres"
              class="mt-1 block w-full p-0 sm:p-2 disabled:bg-gray-200"
              :class="[
                isContrast
                  ? 'text-yellow-200 font-bold bg-black disabled:bg-slate-900 disabled:text-yellow-600'
                  : '',
              ]"
              v-model="form.nombre"
              required
              autocomplete="nombre"
            />
            <InputError class="mt-1" :message="form.errors.nombre" />
          </div>
        </div>

        <div class="mb-4">
          <!-- Velocidad de internet -->
          <SatisfaccionRdio
            label="Velocidad de internet"
            v-model="form.velocidad_internet"
          />

          <!-- Disponibilidad de equipos -->
          <SatisfaccionRdio
            label="Disponibilidad de equipos"
            v-model="form.disponibilidad_equipos"
          />

          <!-- Funcionamiento de equipos -->
          <SatisfaccionRdio
            label="Funcionamiento de equipos"
            v-model="form.funcionamiento_equipos"
          />

          <!-- Capacidad del administrador -->
          <SatisfaccionRdio
            label="Capacidad del administrador"
            v-model="form.capacidad_administrador"
          />

          <!-- Amabilidad del administrador -->
          <SatisfaccionRdio
            label="Amabilidad del administrador"
            v-model="form.amabilidad_administrador"
          />

          <!-- Publicidad de servicios -->
          <SatisfaccionRdio
            label="Publicidad de servicios"
            v-model="form.publicidad_servicios"
          />
        </div>
        <div class="col-span-2 w-full flex justify-center">
          <PrimaryButton
            type="submit"
            class="w-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Enviar
          </PrimaryButton>
        </div>
      </form>
    </div>
  </PageLayout>
</template>

<script setup>
import PageLayout from "@/Layouts/PageLayout.vue";
import { Head, useForm, usePage } from "@inertiajs/vue3";
import { ref, watch, inject } from "vue";
import SatisfaccionRdio from "@/Components/SatisfaccionRdio.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";

const swal = inject("$swal");

const props = defineProps({
  puntos: {
    type: Object,
    required: true,
  },
});

console.log(props);

const form = useForm({
  id_punto: "",
  motivo_visita: "",
  velocidad_internet: "",
  disponibilidad_equipos: "",
  funcionamiento_equipos: "",
  capacidad_administrador: "",
  amabilidad_administrador: "",
  publicidad_servicios: "",
  identificacion: "",
  nombre: "",
});

//ITEMS DEL TIPO DE Servicios
const tipoServ = ref([
  { id: "0", nombre: "Uso internet - Estudio", code: "Uso internet-estudio" },
  { id: "1", nombre: "Uso internet - Ocio", code: "Uso internet-ocio" },
  { id: "2", nombre: "Capacitaciones", code: "capacitaciones" },
  { id: "3", nombre: "Préstamo de aulas", code: "prestamo aulas" },
  { id: "4", nombre: "Tramites", code: "tramites" },
  { id: "5", nombre: "Videojuegos", code: "videojuegos" },
]);

const isContrast = ref(usePage().props.accesibilidad.contraste);
const letraSize = ref(usePage().props.accesibilidad.letra);
//info user guardadp
const info_usuario = ref("");
//para mostrar campo de name
const inputNamevisible = ref(false);

watch(
  () => usePage().props.accesibilidad.contraste,
  (newVal) => {
    isContrast.value = newVal;
  }
);

watch(
  () => usePage().props.accesibilidad.letra,
  (newVal) => {
    letraSize.value = newVal;
  }
);

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const fetchUserInfo = debounce((newVal) => {
  if (newVal.length > 6) {
    console.log(newVal);
    axios
      .get("/searchRegistrado", {
        params: {
          identificacion: newVal,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.registrados) {
          info_usuario.value = response.data.registrados;
          form.nombre = info_usuario.value
            ? info_usuario.value.nombres + " " + info_usuario.value.apellidos
            : form.nombre;
        }

        inputNamevisible.value = true;
      })
      .catch((error) => {
        console.error("Error loading:", error);
      });
  }
}, 300); // 300 ms debounce delay

watch(
  () => form.identificacion,
  (newVal) => {
    inputNamevisible.value = false;
    info_usuario.value = "";
    form.nombre = "";
    fetchUserInfo(newVal);
  }
);

function submitForm() {
  form.post(route("formulario-satisfaccion"), {
    onSuccess: () => {
      form.reset();
      swal({
        title: "Registro Guardado",
        text: "El registro se ha almacenado exitosamente",
        icon: "success",
      });
    },

    onError: () => {
      let instance = $toast.open({
        message:
          "Algo salio mal en el registro, revise los campos o vuelva a intentarlo por favor",
        type: "warning",
        position: "top-right",
        duration: 6000,
        pauseOnHover: true,
      });
    },
  });
}
</script>

