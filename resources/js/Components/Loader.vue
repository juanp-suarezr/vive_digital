<template>
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <span class="loaderGlobal"></span>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { router } from "@inertiajs/vue3";

const isLoading = ref(false);

onMounted(() => {
    router.on("start", () => {
        isLoading.value = true;
    });

    router.on("finish", () => {
        isLoading.value = false;
    });
});
</script>

<style scoped>
.loaderGlobal {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite;
}
.loaderGlobal::before,
.loaderGlobal::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #FFF;
    animation: prixClipFix 2s linear infinite;
}
.loaderGlobal::after {
    border-color: #1E3A8A;
    animation: prixClipFix 2s linear infinite, rotate 0.5s linear infinite reverse;
    inset: 6px;
}

@keyframes rotate {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
}

@keyframes prixClipFix {
    0% { clip-path: polygon(50% 50%,0 0,0 0,0 0,0 0,0 0) }
    25% { clip-path: polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0) }
    50% { clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%) }
    75% { clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%) }
    100% { clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0) }
}
</style>
