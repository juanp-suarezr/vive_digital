<template>
  <Head title="Inscripciones" />

  <AuthenticatedLayout :breadCrumbLinks="breadcrumbLinks">
    <template #header> Total Inscripciones </template>

    <div class="flex justify-end gap-2 p-2">
      <!-- solo admin, para elegir punto -->
      .
      <div
        class="w-auto sm:flex sm:gap-2 mb-2 my-auto"
        v-if="
          $page.props.user.roles.includes('Administrador') ||
          $page.props.user.roles.includes('Supervisor')
        "
      >
      <div class="mb-2">
        <select
          id="puntos"
          name="puntos"
          v-model="punto"
          @change="handleSelectPuntos"
          class="block w-full px-4 py-1 text-base text-gray-900 border border-gray-600 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500"
        >
          <option selected disabled value="">
            Seleccionar punto vive digital
          </option>
          <option v-for="pt in puntos" :key="pt.id" :value="pt.id">
            {{ pt.nombre }}
          </option>
        </select>
      </div>

      <div class="mb-2">
        <label for="fecha_inicio" class="block text-sm font-medium text-gray-700">Fecha Inicio</label>
        <input
          type="date"
          id="fecha_inicio"
          v-model="fechaInicio"
          @change="handleSelectPuntos"
          class="block w-full px-4 py-1 text-base text-gray-900 border border-gray-600 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div class="mb-2">
        <label for="fecha_fin" class="block text-sm font-medium text-gray-700">Fecha Fin</label>
        <input
          type="date"
          id="fecha_fin"
          v-model="fechaFin"
          @change="handleSelectPuntos"
          class="block w-full px-4 py-1 text-base text-gray-900 border border-gray-600 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

        <button
          type="submit"
          @click="clearAll"
          class="mb-2 flex justify-center items-center border-2 border-gray-400 text-gray-600 font-semibold rounded-md px-4 hover:bg-gray-300"
        >
          Limpiar
        </button>
      </div>

      <div class="flex justify-end w-full my-auto mb-2">
        <a
          :href="route('totalInscritos.excel', { punto: punto, fecha_inicio: fechaInicio, fecha_fin: fechaFin })"
          class="flex text-white bg-green-800 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
        >
          <DocumentArrowDownIcon class="h-6 w-6 me-2" />Exportar
        </a>
      </div>
    </div>

    <div class="w-full gap-4">
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
                      Nombre oferta
                    </th>
                    <th
                      class="border-b-2 border-gray-200 bg-gray-100 px-2 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      Id_oferta
                    </th>
                    <th
                      class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      Nombre usuario
                    </th>
                    <th
                      class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      Identificación
                    </th>
                    <th
                      class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      Fecha inscrito
                    </th>
                    <th
                      class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      Estado
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="ins in props.inscripciones.data"
                    :key="ins.id"
                    class="text-gray-700"
                  >
                    <td
                      class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ ins.oferta.nombre }}
                      </p>
                    </td>
                    <td
                      class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ ins.oferta.id }}
                      </p>
                    </td>
                    <td
                      class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ ins.info_user.nombres }}
                        {{ ins.info_user.apellidos }}
                      </p>
                    </td>
                    <td
                      class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ ins.identificacion }}
                      </p>
                    </td>

                    <td
                      class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ formatDate(new Date(ins.created_at)) }}
                      </p>
                    </td>

                    <td
                      class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                    >
                      <p
                        :class="{
                          '!bg-lime-500': ins.estadoProceso == 'Certificado',
                          '!bg-secondary':
                            ins.estadoProceso == 'No certificado',
                        }"
                        class="text-white bg-orange-600 px-2.5 py-0.5 rounded-md whitespace-no-wrap"
                      >
                        {{ ins.estadoProceso }}
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
          v-if="props.inscripciones && props.inscripciones.data.length > 1"
          :links="props.inscripciones.links"
        />
      </div>
    </div>

    <!-- Gráfica y resumen -->
    <div
      class="flex flex-col md:flex-row gap-4 mt-8"
      v-if="props.inscripciones.data.length > 0"
    >
      <!-- Gráfica -->
      <div class="w-full md:w-1/2">
        <Chart type="doughnut" :data="chartData" :options="chartOptions" />
      </div>

      <!-- Tabla resumen -->
      <div class="w-full md:w-1/2 bg-white p-4 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Resumen de Inscripciones</h2>
        <table class="w-full text-left text-sm">
            <tbody>
                <tr>
            <td class="py-2 font-semibold">Total de Inscritos:</td>
            <td>{{ totalInscritos }}</td>
          </tr>
          <tr>
            <td class="py-2 font-semibold">Certificados:</td>
            <td>{{ certificados }}</td>
          </tr>
          <tr>
            <td class="py-2 font-semibold">Inscritos:</td>
            <td>{{ procesos }}</td>
          </tr>
          <tr>
            <td class="py-2 font-semibold">No Certificados:</td>
            <td>{{ noCertificados }}</td>
          </tr>
            </tbody>

        </table>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<script setup>
import { defineProps } from "vue";
import { Head } from "@inertiajs/vue3";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Tag from "primevue/tag";
import { ref, onMounted, watch } from "vue";
import Modal from "@/Components/Modal.vue";
import { DocumentArrowDownIcon } from "@heroicons/vue/24/solid";
import SecondaryLink from "@/Components/SecondaryLink.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import { router } from "@inertiajs/vue3";
import Pagination from "@/Components/Pagination.vue";
import Chart from "primevue/chart";
import Inplace from "primevue/inplace";

const props = defineProps({
  inscripciones: {
    type: Object,
    default: () => ({}),
  },
  filters: {
    type: Object,
    default: () => ({}),
  },
  certificados: {
    type: Number,
    default: () => 0,
  },
  procesos: {
    type: Number,
    default: () => 0,
  },
  noCertificados: {
    type: Number,
    default: () => 0,
  },
  puntos: {
    type: Object,
    default: [],
  },
});

const breadcrumbLinks = [{ url: "", text: "Total inscripciones" }];

console.log(props.inscripciones);

const chartData = ref();
const chartOptions = ref(null);

const certificados = ref(props.certificados);
const procesos = ref(props.procesos);
const noCertificados = ref(props.noCertificados);
const totalInscritos = ref(
  props.certificados + props.procesos + props.noCertificados
);

const punto = ref(props.filters.punto ?? "");
const fechaInicio = ref(props.filters.fecha_inicio ?? "");
const fechaFin = ref(props.filters.fecha_fin ?? "");

const handleSelectPuntos = () => {
  console.log(punto.value);
  router.get(
    "/totalInscritos",
    { punto: punto.value, fecha_inicio: fechaInicio.value, fecha_fin: fechaFin.value },
    {
      replace: true,
    }
  );
};

//Liampiar filtros
const clearAll = () => {

    punto.value = "";
    fechaInicio.value = "";
    fechaFin.value = "";
    router.get(
        "/totalInscritos",
        { punto: punto.value, fecha_inicio: fechaInicio.value, fecha_fin: fechaFin.value },
        {
            replace: true,
        }
    );
};

const updateChartData = () => {
  const documentStyle = getComputedStyle(document.body);
  chartData.value = {
    labels: ["Certificados", "Inscritos", "No certificado"],
    datasets: [
      {
        data: [certificados.value, procesos.value, noCertificados.value],
        backgroundColor: [
          documentStyle.getPropertyValue("--green-700"),
          documentStyle.getPropertyValue("--orange-600"),
          documentStyle.getPropertyValue("--secondary"),
        ],
        hoverBackgroundColor: [
          documentStyle.getPropertyValue("--green-500"),
          documentStyle.getPropertyValue("--orange-400"),
          documentStyle.getPropertyValue("--primary"),
        ],
      },
    ],
  };
};

watch([certificados, procesos, noCertificados], () => {
  totalInscritos.value =
    certificados.value + procesos.value + noCertificados.value;
  updateChartData();
});

onMounted(() => {
  updateChartData();
  setChartOptions();
});

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--p-text-color");

  return {
    maintainAspectRatio: true,
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          cutout: "60%",
          color: textColor,
        },
      },
    },
  };
};

const formatDate = (fechaHora) => {
  const format = new Date(fechaHora);
  const opciones = { year: "numeric", month: "long", day: "numeric" };
  return format.toLocaleDateString("es-ES", opciones);
};

const certificar = (id) => {
  router.post(
    "/certificar",
    { id: id },
    {
      onSuccess: () => {
        window.location.reload();
      },
    }
  );
};

const noCertificar = (id) => {
  router.post(
    "/cancelar-certificado",
    { id: id },
    {
      onSuccess: () => {
        window.location.reload();
      },
    }
  );
};
</script>
