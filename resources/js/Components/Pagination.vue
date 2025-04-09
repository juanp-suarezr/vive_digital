<template>
  <div v-if="links.length > 3">
    <div class="flex flex-wrap -mb-1">
      <template v-for="(link, key) in links">
        <div v-if="link.url === null" :key="key"
          class="px-2 py-1 mr-1 mb-1 text-sm leading-4 text-gray-400 rounded border" v-html="link.label" />
        <Link v-else :key="key + 1"
          class="px-2 py-1 mr-1 mb-1 text-sm leading-4 rounded border hover:bg-sky-500 hover:text-white focus:border-sky-500 focus:text-white"
          :class="{ 'text-white bg-sky-500': link.active }"
          :href="getLinkWithSearch(link.url)" v-html="link.label" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { Link } from "@inertiajs/vue3";
import { computed } from "vue";

const props = defineProps({
  links: Array,
  search: [String, Number], // Añadir el parámetro search
  OfertaID: [String, Number], // Añadir el parámetro OfertaID como opcional
});

const getLinkWithSearch = (url) => {
  if (!url) return null;
  const urlObj = new URL(url, window.location.origin);
  if (props.search) {
    urlObj.searchParams.set('search', props.search);
  }
  // Añadir el parámetro OfertaID si está definido
  if (props.OfertaID) {
    urlObj.searchParams.set("id", props.OfertaID);
  }
  return urlObj.toString();
};
</script>
