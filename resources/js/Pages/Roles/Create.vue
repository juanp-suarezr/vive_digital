<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import MultiCheckbox from "@/Components/MultiCheckbox.vue";
import { Head, useForm, usePage, Link } from '@inertiajs/vue3';
import { ref, watch, inject } from 'vue';
import SecondaryLink from "@/Components/SecondaryLink.vue";
const swal = inject('$swal');

const props = defineProps({
    permission: Object,
});

const form = useForm({
    name: '',
    permisos: []
});

const breadcrumbLinks = [
    { url: '/roles', text: 'Roles' },
    { url: '', text: 'Nuevo Rol' },
];

const submit = () => {
    form.post(route('roles.store'), {
        onSuccess: () => swal({
            title: "Registro Guardado",
            text: "El rol se ha registrado exitosamente",
            icon: "success"
        })
    });
};
watch(
    () => usePage().props.flash.code,
    () => {
        if (usePage().props.flash.code) {
        }
    }
);

const agruparPorModulo = (permisos) => {
    const grupos = {};
    permisos.forEach((permiso) => {
        const [modulo] = permiso.split("-");
        if (!grupos[modulo]) {
            grupos[modulo] = [];
        }
        grupos[modulo].push(permiso);
    });
    return grupos;
};

const colorPorModulo = (modulo) => {
    const colores = {
        usuarios: "bg-blue-200",
        servicios: "bg-sky-600 text-white",
        empleados: "bg-cyan-200",
        sucursal: "bg-orange-400  text-white",
        gastos: "bg-red-400  text-white",
        clientes: "bg-emerald-400 text-white",
        // Agrega más colores para otros módulos si es necesario
    };
    return colores[modulo] || "bg-gray-200";
};

</script>

<template>

    <Head title="Nuevo Rol" />

    <AuthenticatedLayout :breadCrumbLinks="breadcrumbLinks">
        <template #header>
            <Link class="text-white hover:text-indigo-600" href="/roles"> Roles </Link> / {{ form.name }}
        </template>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="flex flex-col bg-white border shadow-sm rounded-xl">
                <div class="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 grid lg:grid-cols-2 gap-4">
                    <h3 class="mt-1 text-gray-500">Crear Rol</h3>
                    <div class="text-right">
                        <SecondaryButtonReturn class="text-center" />
                    </div>
                </div>
                <div class="p-4 md:p-5">
                    <form @submit.prevent="submit">
                        <div class="mx-auto sm:grid sm:grid-cols-1 sm:px-2 lg:px-2 p-4 gap-4">
                            <div class="">
                                <InputLabel for="name" value="Rol"></InputLabel>
                                <TextInput id="name" v-model="form.name" autofocus required type="text"
                                    class="mt-1 block w-full">
                                </TextInput>
                                <InputError :message="form.errors.name" class="mt-2"></InputError>
                            </div>
                            <div class="sm:w-full">
                                <InputLabel for="name" value="Permisos" class="mb-1"></InputLabel>
                                <MultiSelect name="permisos" v-model="form.permisos"
                                    selectedItemsLabel="{} permisos seleccionados" :options="Object.values(permission)"
                                    filter placeholder="Selecciona los permisos" :maxSelectedLabels="7"
                                    class="w-full md:w-20rem" :checked="permission.id" />
                            </div>
                            <div></div>
                            <div class="p-2 text-right">
                                <PrimaryButton :disabled="form.processing" :class="{ 'opacity-25': form.processing }"
                                    class="my-2">
                                    <i class="fa-solid fa-save"></i> Guardar
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-span-2 flex flex-col bg-white border shadow-sm rounded-xl">
                <div class="p-4 md:p-5 grid grid-cols-2 gap-4">
                    <span v-for="(grupoPermisos, modulo) in agruparPorModulo(
                        form.permisos
                    )" :key="modulo" class="mt-2 inline-block">
                        <Fieldset :legend="modulo">
                            <span v-for="permiso in grupoPermisos" :key="permiso" :class="colorPorModulo(modulo)"
                                class="inline-block mt-1 text-sm font-medium me-2 px-2.5 py-0.5 rounded">
                                {{ permiso }}
                            </span>
                        </Fieldset>
                    </span>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
