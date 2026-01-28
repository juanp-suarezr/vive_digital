<template>
  <Head title="Reporte satisfacción" />

  <AuthenticatedLayout :breadCrumbLinks="breadcrumbLinks">
    <template #header> Reporte encuesta de satisfacción </template>

    <div class="flex flex-wrap inline-block min-w-full overflow-hidden mb-3">
      <div class="sm:flex inline-block w-full m-auto gap-3">
        <!-- fecha inicio -->
        <Calendar
          v-model="fecha_init"
          dateFormat="dd/mm/yy"
          showButtonBar
          placeholder="Fecha inicio"
          class="my-4 flex justify-center"
        />
        <!-- fecha fin -->
        <Calendar
          v-model="fecha_end"
          dateFormat="dd/mm/yy"
          showButtonBar
          placeholder="Fecha fin"
          class="my-4 flex justify-center"
        />

        <div class="flex justify-center my-auto gap-2 inline-block ms-2">
          <div class="">
            <PrimaryButton
              type="submit"
              @click="handleEnterKey"
              class="flex justify-center"
            >
              Buscar</PrimaryButton
            >
          </div>
          <div class="">
            <button
              type="submit"
              @click="clearAll"
              class="flex justify-center border-2 border-gray-400 text-gray-600 font-semibold rounded-md py-2 px-4 hover:bg-gray-300"
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-end w-full my-auto">
        <a
          :href="
            route('satisfaccion.excel', {
              fecha_init: fecha_init,
              fecha_end: fecha_end,
            })
          "
          class="flex text-white bg-green-800 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
        >
          <DocumentArrowDownIcon class="h-6 w-6 me-2" />Exportar
        </a>
      </div>
    </div>

    <!-- solo admin, para elegir punto -->
    <div
      class="sm:w-1/2 md:w-2/6 mb-4"
      v-if="
        $page.props.user.roles.includes('Administrador') ||
        $page.props.user.roles.includes('Supervisor')
      "
    >
      <InputLabel
        class="!text-base mb-1"
        for="puntos"
        value="Centros tecnológicos vive digital"
      />
      <select
        id="puntos"
        name="puntos"
        v-model="punto"
        @change="handleEnterKey"
        class="block w-full px-4 py-1 text-base text-gray-900 border border-gray-600 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500"
      >
        <option selected disabled value="">
          Seleccionar centros tecnológicos vive digital
        </option>
        <option v-for="pt in puntos" :key="pt.id" :value="pt.id">
          {{ pt.nombre }}
        </option>
      </select>
    </div>

    <div class="flex flex-col overflow-x-auto">
      <div class="inline-block rounded-lg shadow">
        <div class="inline-block min-w-full py-2">
          <div class="overflow-x-auto">
            <table class="min-w-full whitespace-no-wrap">
              <thead>
                <tr
                  class="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
                >
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Fecha registro
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Motivo visita
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Velocidad de internet
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Disponibilidad de equipos
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Funcionamiento de equipos
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Capacidad del administrador
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Amabilidad del administrador
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Publicidad de servicios
                  </th>
                  <th
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Nombre punto vive digital
                  </th>
                  <th
                    v-if="
                      $page.props.user.roles.includes('Administrador') ||
                      $page.props.user.roles.includes('Supervisor')
                    "
                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                  >
                    Nombre del encuestado
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="user in satisfacciones.data"
                  :key="user.id"
                  class="text-gray-700"
                >
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                    :class="{ 'bg-green-200': isToday(user.created_at) }"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ formatDate(new Date(user.created_at)) }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.motivo_visita }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.velocidad_internet }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.disponibilidad_equipos }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.funcionamiento_equipos }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.capacidad_administrador }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.amabilidad_administrador }}
                    </p>
                  </td>
                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.publicidad_servicios }}
                    </p>
                  </td>

                  <td
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <p
                      class="text-gray-900 whitespace-no-wrap"
                      :class="{
                        'bg-blue-200 p-2 rounded-md':
                          puntos.find((item) => item.id == user.id_punto)
                            .id_user == $page.props.auth.user.id,
                      }"
                    >
                      {{
                        puntos.find((item) => item.id == user.id_punto).nombre
                      }}
                    </p>
                  </td>
                  <td
                    v-if="
                      $page.props.user.roles.includes('Administrador') ||
                      $page.props.user.roles.includes('Supervisor')
                    "
                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ user.nombre }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center border-t bg-white px-5 py-5 xs:flex-row xs:justify-between"
    >
      <pagination
        v-if="satisfacciones.length > 1"
        :links="props.satisfacciones.links"
      />
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import { ref } from "vue";
import { watch } from "vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import Pagination from "@/Components/Pagination.vue";
import { Head } from "@inertiajs/vue3";
import { router } from "@inertiajs/vue3";
import SecondaryLink from "@/Components/SecondaryLink.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import { DocumentArrowDownIcon } from "@heroicons/vue/24/solid";
import Calendar from "primevue/calendar";
import InputLabel from "@/Components/InputLabel.vue";

const props = defineProps({
  satisfacciones: {
    type: Object,
    default: () => ({}),
  },
  filters: {
    type: Object,
    default: () => ({}),
  },

  puntos: {
    type: Object,
    default: [],
  },
});

const breadcrumbLinks = [
  { url: "/satisfaccion", text: "reporte de encuesta de satisfacción" },
];

console.log(props.filters);

// pass filters in search
let fecha_init = ref(props.filters.fecha_init ?? "");
let fecha_end = ref(props.filters.fecha_end ?? "");
const punto = ref(props.filters.punto ?? "");
const handleEnterKey = () => {
  router.get(
    "/satisfaccion",
    {
      fecha_init: fecha_init.value,
      fecha_end: fecha_end.value,
      punto: punto.value,
    },
    {
      replace: true,
    },
    {
      onSuccess: () => {
        window.location.reload();
      },
    }
  );
};
//Liampiar filtros
const clearAll = () => {
  fecha_init.value = "";
  fecha_end.value = "";
  punto.value = "";
  router.get(
    "/satisfaccion",
    {
      fecha_init: fecha_init.value,
      fecha_end: fecha_end.value,
      punto: punto.value,
    },
    {
      replace: true,
    }
  );
};

const formatDate = (fechaHora) => {
  return `${fechaHora.getFullYear()}-${("0" + (fechaHora.getMonth() + 1)).slice(
    -2
  )}-${("0" + fechaHora.getDate()).slice(-2)}`;
};

const isToday = (fecha) => {
  const formattedDate = formatDate(new Date(fecha));
  const today = new Date();
  const formattedToday = formatDate(today);

  // Comparar solo el año, mes y día
  console.log(formattedDate === formattedToday);
  return formattedDate === formattedToday;
};
</script>
