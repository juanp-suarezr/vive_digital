<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import { Head } from '@inertiajs/vue3';
defineProps({
    usuario: {
        type: Object,
        default: () => ({}),
    },
    roles: {
        type: Object,
        default: () => ({}),
    },
    userRole: {
        type: Object,
        default: () => ({}),
    },
});

const breadcrumbLinks = [
    { url: '/users', text: 'Listado de usuarios' },
    { url: '', text: 'Editar Usuario' },
];

</script>

<template>
    <Head title="Editar Usuario" />

    <AuthenticatedLayout :breadCrumbLinks="breadcrumbLinks">
        <template #header>
            Editar Usuario
        </template>
        <div class="py-2">
            <div class="overflow-hidden shadow-sm sm:rounded-lg space-y-6 w-2/4">
                <div class="p-6 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdateProfileInformationForm :user="usuario" :roles="roles" :userRoles="userRole" class="max-w-xl" />
                </div>

                <div class="p-6 sm:p-8 bg-white shadow sm:rounded-lg">
                    <UpdatePasswordForm :user="usuario" class="max-w-xl" />
                </div>

                <div class="p-6 sm:p-8 bg-white shadow sm:rounded-lg">
                    <DeleteUserForm :user="usuario" class="max-w-xl" />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
