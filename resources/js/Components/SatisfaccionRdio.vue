<template>
  <div class="mb-2">
    <label
      v-if="label"
      :class="[isContrast ? '!text-white' : '']"
      class="block text-gray-700 font-bold mb-1"
      >{{ label }}</label
    >
    <div class="flex flex-wrap gap-2">
      <label
        v-for="option in opciones"
        :key="option.value"
        class="flex flex-col items-center cursor-pointer px-2 py-1 rounded-lg transition border border-gray-300"
        :class="[
          modelValue === option.label
            ? isContrast ? '!bg-blue-800 !text-white border-blue-600 shadow' : 'bg-blue-600 text-white border-blue-600 shadow'
            : isContrast ? '!text-yellow-200 hover:bg-slate-800' : 'bg-gray-100 text-gray-700 hover:bg-blue-100',

        ]"
      >
        <input
          type="radio"
          class="hidden"
          :value="option.label"
          :checked="modelValue === option.label"
          @change="$emit('update:modelValue', option.label)"
          name="satisfaccion"
        />
        <span class="text-2xl">{{ option.emoji }}</span>
        <span class="text-xs sm:text-sm">{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { usePage } from "@inertiajs/vue3";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});

const opciones = [
  { value: "1", label: "Mala", emoji: "😡" },
  { value: "2", label: "Regular", emoji: "😕" },
  { value: "3", label: "Buena", emoji: "😊" },
  { value: "4", label: "Muy buena", emoji: "🤩" },
];

const isContrast = ref(usePage().props.accesibilidad.contraste);
const letraSize = ref(usePage().props.accesibilidad.letra);

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
</script>
