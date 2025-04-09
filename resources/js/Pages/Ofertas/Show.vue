<template>
  <Head title="Oferta" />

  <AuthenticatedLayout :breadCrumbLinks="breadcrumbLinks">
    <template #header> Inscripciones </template>

    <div class="flex justify-end gap-2 p-2">
      <SecondaryLink
        :href="route('oferts.ofertas')"
        v-tooltip.bottom="{ value: 'volver atrás', autoHide: false }"
        class="md:mr-3 text-parrafo xs:text-xs mb-2 !bg-transparent"
      >
        Regresar
      </SecondaryLink>
      <SecondaryButton
        @click="certificar(selectedIds)"
        v-tooltip.bottom="{
          value: 'Certificar seleccionados',
          autoHide: false,
        }"
        class="md:mr-3 text-white xs:text-xs !p-2 !bg-azul hover:scale-105 !rounded-full mb-2 cursor-pointer"
      >
        Certificar seleccionados
      </SecondaryButton>
      <div class="flex my-auto mb-2">
        <a
          :href="route('totalInscritosXOferta.excel', { ofertaId: OfertaID })"
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
                      class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3"
                    >
                      <input type="checkbox" @change="toggleSelectAll" />
                    </th>
                    <th
                      class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      Nombre oferta
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
                    <th
                      class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                    >
                      Acciones
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
                      <input
                        type="checkbox"
                        :value="ins.id"
                        v-model="selectedIds"
                      />
                    </td>
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
                    <td
                      class="border-b border-gray-200 bg-white flex flex-wrap gap-x-2 sm:px-5 sm:py-5 p-2 sm:text-sm text-xs"
                    >
                      <!-- certificar -->
                      <SecondaryButton
                        v-if="ins.estadoProceso != 'Certificado'"
                        @click="certificar([ins.id])"
                        v-tooltip.bottom="{
                          value: 'certificar',
                          autoHide: false,
                        }"
                        class="md:mr-3 text-white xs:text-xs !p-2 !bg-azul hover:scale-105 !rounded-full mb-2 cursor-pointer"
                      >
                        <CheckBadgeIcon class="w-6 h-6" />
                      </SecondaryButton>
                      <!-- cancelar certificado para inscrito -->
                      <SecondaryButton
                        v-if="ins.estadoProceso == 'Inscrito'"
                        @click="noCertificar([ins.id])"
                        v-tooltip.bottom="{
                          value: 'No certificar',
                          autoHide: false,
                        }"
                        class="md:mr-3 text-white xs:text-xs !p-2 !bg-primary hover:scale-105 !rounded-full mb-2 cursor-pointer"
                      >
                        <XCircleIcon class="w-6 h-6" />
                      </SecondaryButton>
                      <!-- cancelar certificado -->
                      <SecondaryButton
                        v-if="ins.estadoProceso == 'Certificado'"
                        @click="noCertificar([ins.id])"
                        v-tooltip.bottom="{
                          value: 'Cancelar certificado',
                          autoHide: false,
                        }"
                        class="md:mr-3 text-white xs:text-xs !p-2 !bg-primary hover:scale-105 !rounded-full mb-2 cursor-pointer"
                      >
                        <XCircleIcon class="w-6 h-6" />
                      </SecondaryButton>
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
          :links="props.inscripciones.links" :OfertaID="OfertaID"
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
import { ref, onMounted, watch, inject } from "vue";
import Modal from "@/Components/Modal.vue";
import { CheckBadgeIcon, XCircleIcon } from "@heroicons/vue/24/solid";
import SecondaryLink from "@/Components/SecondaryLink.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import { router } from "@inertiajs/vue3";
import Pagination from "@/Components/Pagination.vue";
import Chart from "primevue/chart";
import Inplace from "primevue/inplace";
import { DocumentArrowDownIcon } from "@heroicons/vue/24/solid";

const swal = inject("$swal");

const props = defineProps({
  inscripciones: {
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
  OfertaID: {
    type: Number,
    default: () => 0,
  },
});

console.log(props);

const breadcrumbLinks = [
  { url: `/oferts`, text: "Listado de ofertas" },
  { url: "", text: "Inscripciones" },
];

const chartData = ref();
const chartOptions = ref(null);

const certificados = ref(props.certificados);
const procesos = ref(props.procesos);
const noCertificados = ref(props.noCertificados);
const totalInscritos = ref(
  props.certificados + props.procesos + props.noCertificados
);

const selectedIds = ref([]);

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

const certificar = (ids) => {
  router.post(
    "/certificar",
    { ids: ids },
    {
      onSuccess: () => {
        swal({
          title: "Éxito",
          text: "Las inscripciones han sido certificadas correctamente.",
          icon: "success",
          button: "OK",
        }).then(() => {
          window.location.reload();
        });
      },
      onError: (errors) => {
        swal({
          title: "Error",
          text: "Ocurrió un error al certificar las inscripciones. Por favor, inténtelo de nuevo.",
          icon: "error",
          button: "OK",
        });
      },
    }
  );
};

const noCertificar = (ids) => {
  router.post(
    "/cancelar-certificado",
    { ids: ids },
    {
      onSuccess: () => {
        swal({
          title: "Éxito",
          text: "La certificación ha sido cancelada correctamente.",
          icon: "success",
          button: "OK",
        }).then(() => {
          window.location.reload();
        });
      },
      onError: (errors) => {
        swal({
          title: "Error",
          text: "Ocurrió un error al cancelar la certificación. Por favor, inténtelo de nuevo.",
          icon: "error",
          button: "OK",
        });
      },
    }
  );
};

const toggleSelectAll = (event) => {
  if (event.target.checked) {
    selectedIds.value = props.inscripciones.data.map((ins) => ins.id);
  } else {
    selectedIds.value = [];
  }
};
</script>
