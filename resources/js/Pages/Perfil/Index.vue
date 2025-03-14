<template>
    <Head title="Editar información" />

    <AuthenticatedLayout>
        <template #header> Editar información </template>

        <div class="inline-block w-full mt-4">
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
                    value="Puntos vive digital"
                />
                <select
                    id="puntos"
                    name="puntos"
                    v-model="punto"
                    @change="handleSelectPuntos"
                    class="block w-full px-4 py-1 text-base text-gray-900 border border-gray-600 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option selected disabled value="0">
                        Seleccionar punto vive digital
                    </option>
                    <option v-for="pt in puntos" :key="pt.id" :value="pt.id">
                        {{ pt.nombre }}
                    </option>
                </select>
            </div>

            <div
                class="mb-4 border-b-2 border-gray-900 rounded-md p-2 sm:flex justify-between"
            >
                <!-- Menu -->
                <div
                    class="sm:flex justify-center items-center gap-4 sm:gap-6 mb-4 sm:mb-auto"
                >
                    <!-- Banner inicial -->
                    <button
                        class="flex cursor mb-2 sm:mb-auto"
                        @click="active = 0"
                        :class="
                            active == 0
                                ? 'underline font-bold text-blue-800'
                                : 'text-gray-600'
                        "
                    >
                        <HomeIcon class="h-6 w-6" />
                        <span class="mx-2">Banner inicial</span>
                    </button>
                    <!-- Informacion pagina inicial -->
                    <button
                        class="flex cursor mb-2 sm:mb-auto"
                        @click="active = 1"
                        :class="
                            active == 1
                                ? 'underline font-bold text-blue-800'
                                : 'text-gray-600'
                        "
                    >
                        <DocumentIcon class="h-6 w-6" />
                        <span class="mx-2">Información inicial</span>
                    </button>
                    <!-- ofertas -->
                    <button
                        class="flex cursor mb-2 sm:mb-auto"
                        @click="active = 2"
                        :class="
                            active == 2
                                ? 'underline font-bold text-blue-800'
                                : 'text-gray-600'
                        "
                    >
                        <FireIcon class="h-6 w-6" />
                        <span class="mx-2">Ofertas</span>
                    </button>
                    <!-- Eventos -->
                    <button
                        class="flex cursor mb-2 sm:mb-auto"
                        @click="active = 3"
                        :class="
                            active == 3
                                ? 'underline font-bold text-blue-800'
                                : 'text-gray-600'
                        "
                    >
                        <FolderIcon class="h-6 w-6" />
                        <span class="mx-2">Eventos/Noticias</span>
                    </button>
                </div>
            </div>
            <!-- formularios de editar o crear -->
            <div class="w-full flex m-auto">
                <!-- formulario banner inicial -->
                <div
                    class="w-full m-auto"
                    v-if="active == 0 && form.id != 'NA'"
                >
                    <!-- botones de añadir o editar -->
                    <div class="w-full flex">
                        <PrimaryButton
                            v-if="form.banner == 'NA'"
                            @click="abrirModal(0)"
                            class="flex justify-center"
                        >
                            Añadir</PrimaryButton
                        >
                        <PrimaryButton
                            v-else
                            @click="abrirModal(1)"
                            class="flex justify-center"
                        >
                            Editar</PrimaryButton
                        >
                    </div>
                    <!-- imagen banner -->
                    <div class="w-full flex">
                        <div
                            class="w-full m-auto flex justify-center align-content-center"
                            v-if="form.banner == 'NA'"
                        >
                            <PhotoIcon class="w-1/6 text-gray-400" />
                        </div>
                        <div class="w-full flex justify-center m-auto" v-else>
                            <img
                                class="w-full"
                                :src="getImageUrl(form.banner)"
                            />
                        </div>
                    </div>
                </div>
                <!-- formulario de informacion basica -->
                <div
                    class="w-full m-auto"
                    v-if="active == 1 && form.id != 'NA'"
                >
                    <form @submit.prevent="submit1">
                        <div class="sm:grid grid-cols-2 gap-4">
                            <!-- telefono -->
                            <div class="mb-4">
                                <InputLabel
                                    class="sm:text-sm text-xs"
                                    for="telefono"
                                    value="Teléfono fijo"
                                />
                                <TextInput
                                    id="telefono"
                                    type="number"
                                    class="mt-1 block w-full p-0 sm:p-2"
                                    v-model="form.telefono"
                                    autocomplete="telefono"
                                />
                                <InputError
                                    class="mt-1"
                                    :message="form.errors.telefono"
                                />
                            </div>

                            <!-- celular -->
                            <div class="mb-4">
                                <InputLabel
                                    class="sm:text-sm text-xs"
                                    for="celular"
                                    value="Teléfono celular"
                                />
                                <TextInput
                                    id="celular"
                                    type="number"
                                    class="mt-1 block w-full p-0 sm:p-2"
                                    v-model="form.celular"
                                    autocomplete="celular"
                                />
                                <InputError
                                    class="mt-1"
                                    :message="form.errors.celular"
                                />
                            </div>

                            <!-- email -->
                            <div class="mb-4">
                                <InputLabel
                                    class="sm:text-sm text-xs"
                                    for="email"
                                    value="Correo electrónico"
                                />
                                <TextInput
                                    id="email"
                                    type="text"
                                    class="mt-1 block w-full p-0 sm:p-2"
                                    v-model="form.email"
                                    autofocus
                                    autocomplete="username"
                                />
                                <InputError
                                    class="mt-1"
                                    :message="form.errors.email"
                                />
                            </div>

                            <!-- twitter -->
                            <div class="mb-4">
                                <InputLabel
                                    class="sm:text-sm text-xs"
                                    for="twitter"
                                    value="Twitter"
                                />
                                <TextInput
                                    id="twitter"
                                    type="text"
                                    class="mt-1 block w-full p-0 sm:p-2"
                                    v-model="form.twitter"
                                    autocomplete="twitter"
                                />
                                <InputError
                                    class="mt-1"
                                    :message="form.errors.twitter"
                                />
                            </div>

                            <!-- instagram -->
                            <div class="mb-4">
                                <InputLabel
                                    class="sm:text-sm text-xs"
                                    for="instagram"
                                    value="Instagram"
                                />
                                <TextInput
                                    id="instagram"
                                    type="text"
                                    class="mt-1 block w-full p-0 sm:p-2"
                                    v-model="form.instagram"
                                    autocomplete="instagram"
                                />
                                <InputError
                                    class="mt-1"
                                    :message="form.errors.instagram"
                                />
                            </div>
                            <!-- facebook -->
                            <div class="mb-4">
                                <InputLabel
                                    class="sm:text-sm text-xs"
                                    for="facebook"
                                    value="Facebook"
                                />
                                <TextInput
                                    id="facebook"
                                    type="text"
                                    class="mt-1 block w-full p-0 sm:p-2"
                                    v-model="form.facebook"
                                    autocomplete="facebook"
                                />
                                <InputError
                                    class="mt-1"
                                    :message="form.errors.facebook"
                                />
                            </div>
                            <!-- descripción -->
                            <div class="col-span-2">
                                <p class="text-gray-600 text-sm">
                                    Descripción adicional del punto vive digital
                                    (max 300 caracteres)
                                </p>
                                <Textarea
                                    v-model="form.descripcion"
                                    variant="filled"
                                    autoResize
                                    rows="5"
                                    class="mt-1 block w-full"
                                    required
                                ></Textarea>
                                <p
                                    class="text-gray-500 text-sm mt-2"
                                    :class="{ 'text-red-500': isMaxPalabras }"
                                >
                                    {{ palabrasEnTestimonio }} caracteres
                                    <span v-if="isMaxPalabras"
                                        >Limite de caracteres superado</span
                                    >
                                </p>
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.descripcion"
                                />
                            </div>
                        </div>
                        <div class="flex items-center gap-4 mt-4">
                            <PrimaryButton
                                :class="{ 'opacity-25': form.processing }"
                                :disabled="form.processing"
                            >
                                Guardar
                            </PrimaryButton>
                            <Transition
                                enter-active-class="transition ease-in-out"
                                enter-from-class="opacity-0"
                                leave-active-class="transition ease-in-out"
                                leave-to-class="opacity-0"
                            >
                                <p
                                    v-if="form.recentlySuccessful"
                                    class="text-sm text-gray-600"
                                >
                                    Actualizado.
                                </p>
                            </Transition>
                        </div>
                    </form>
                </div>
                <!-- list ofertas publicadas -->
                <div
                    class="w-full m-auto"
                    v-if="active == 2 && form.id != 'NA'"
                >
                    <div class="text-right p-4">
                        <PrimaryLink
                            :href="route('ofertas.create', { id: form.id })"
                        >
                            Agregar
                        </PrimaryLink>
                    </div>
                    <div class="flex flex-col overflow-x-auto">
                        <div class="inline-block rounded-lg shadow">
                            <div class="inline-block min-w-full py-2">
                                <div class="overflow-x-auto">
                                    <table
                                        class="min-w-full whitespace-no-wrap"
                                    >
                                        <thead>
                                            <tr
                                                class="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
                                            >
                                                <th
                                                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                                                >
                                                    Nombre
                                                </th>
                                                <th
                                                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                                                >
                                                    Información Horario
                                                </th>

                                                <th
                                                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                                                >
                                                    Descripción
                                                </th>

                                                <th
                                                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                                                >
                                                    Lugar
                                                </th>
                                                <th
                                                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                                                >
                                                    Imagen
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
                                                v-for="ofert in ofertas.data"
                                                :key="ofert.id"
                                                class="text-gray-700"
                                            >
                                                <td
                                                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                                                >
                                                    <p
                                                        class="text-gray-900 whitespace-no-wrap"
                                                    >
                                                        {{ ofert.nombre }}
                                                    </p>
                                                </td>
                                                <td
                                                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                                                >
                                                    <p
                                                        class="text-gray-900 whitespace-no-wrap"
                                                    >
                                                        {{ ofert.horario }}
                                                    </p>
                                                </td>
                                                <td
                                                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                                                >
                                                    <p
                                                        class="text-gray-900 whitespace-no-wrap"
                                                    >
                                                        {{
                                                            ofert.descripcion ||
                                                            "no registra"
                                                        }}
                                                    </p>
                                                </td>
                                                <td
                                                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                                                >
                                                    <p
                                                        class="text-gray-900 whitespace-no-wrap"
                                                    >
                                                        {{ ofert.lugar }}
                                                    </p>
                                                </td>
                                                <td
                                                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                                                >
                                                    <p
                                                        class="text-gray-900 whitespace-no-wrap"
                                                    >
                                                        {{
                                                            ofert.banner == "NA"
                                                                ? "No"
                                                                : "Si"
                                                        }}
                                                    </p>
                                                </td>
                                                <td
                                                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                                                >
                                                    <span
                                                        v-if="ofert.estado == 1"
                                                        class="bg-lime-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                                                    >
                                                        Activo
                                                    </span>
                                                    <span
                                                        v-if="ofert.estado == 0"
                                                        class="bg-red-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-500"
                                                    >
                                                        Bloqueado
                                                    </span>
                                                </td>
                                                <td
                                                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm gap-x-2 flex flex-wrap"
                                                >
                                                    <SecondaryButton
                                                        class="mb-2"
                                                        @click="
                                                            abrirModal(2, ofert)
                                                        "
                                                    >
                                                        Inscribir
                                                    </SecondaryButton>
                                                    <SecondaryLink
                                                        :href="
                                                            route(
                                                                'ofertas.edit',
                                                                { id: ofert.id }
                                                            )
                                                        "
                                                    >
                                                        Editar
                                                    </SecondaryLink>
                                                    <DangerButton
                                                        class="mt-2"
                                                        @click="
                                                            confirmUserDeletion(
                                                                ofert.id
                                                            )
                                                        "
                                                    >
                                                        Eliminar
                                                    </DangerButton>
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
                            v-if="ofertas.links"
                            :links="ofertas.links"
                        />
                    </div>
                </div>

                <!-- list eventos publicadas -->
                <div
                    class="w-full m-auto"
                    v-if="active == 3 && form.id != 'NA'"
                >
                    <div class="text-right p-4">
                        <PrimaryLink
                            :href="route('eventos.create', { id: form.id })"
                        >
                            Agregar
                        </PrimaryLink>
                    </div>
                    <div class="flex flex-col overflow-x-auto">
                        <div class="inline-block rounded-lg shadow">
                            <div class="inline-block min-w-full py-2">
                                <div class="overflow-x-auto">
                                    <table
                                        class="min-w-full whitespace-no-wrap"
                                    >
                                        <thead>
                                            <tr
                                                class="border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"
                                            >
                                                <th
                                                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                                                >
                                                    Nombre
                                                </th>

                                                <th
                                                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                                                >
                                                    Tipo
                                                </th>

                                                <th
                                                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                                                >
                                                    Imagen
                                                </th>

                                                <th
                                                    class="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"
                                                >
                                                    Link
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
                                                v-for="ev in eventos"
                                                :key="ev.id"
                                                class="text-gray-700"
                                            >
                                                <td
                                                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                                                >
                                                    <p
                                                        class="text-gray-900 whitespace-no-wrap"
                                                    >
                                                        {{ ev.nombre }}
                                                    </p>
                                                </td>
                                                <td
                                                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                                                >
                                                    <p
                                                        class="text-gray-900 whitespace-no-wrap"
                                                    >
                                                        {{ ev.tipo }}
                                                    </p>
                                                </td>

                                                <td
                                                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                                                >
                                                    <p
                                                        class="text-gray-900 whitespace-no-wrap"
                                                    >
                                                        {{
                                                            ev.banner == "NA"
                                                                ? "No"
                                                                : "Si"
                                                        }}
                                                    </p>
                                                </td>
                                                <td
                                                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                                                >
                                                    <p
                                                        class="text-gray-900 whitespace-no-wrap"
                                                    >
                                                        {{ ev.link }}
                                                    </p>
                                                </td>
                                                <td
                                                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                                                >
                                                    <span
                                                        v-if="
                                                            ev.estado ==
                                                            'Activo'
                                                        "
                                                        class="bg-lime-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded"
                                                    >
                                                        {{ ev.estado }}
                                                    </span>
                                                    <span
                                                        v-if="
                                                            ev.estado ==
                                                            'Bloqueado'
                                                        "
                                                        class="bg-red-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-500"
                                                    >
                                                        {{ ev.estado }}
                                                    </span>
                                                </td>
                                                <td
                                                    class="border-b border-gray-200 bg-white px-5 py-5 text-sm flex-wrap gap-4"
                                                >
                                                    <SecondaryLink
                                                        class="mb-2"
                                                        :href="
                                                            route(
                                                                'eventos.edit',
                                                                { id: ev.id }
                                                            )
                                                        "
                                                    >
                                                        Editar
                                                    </SecondaryLink>
                                                    <DangerButton
                                                        class="ms-2 mb-2"
                                                        @click="
                                                            confirmEventDeletion(
                                                                ev.id
                                                            )
                                                        "
                                                    >
                                                        Eliminar
                                                    </DangerButton>
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
                            v-if="eventos.links"
                            :links="eventos.links"
                        />
                    </div>
                </div>
            </div>
        </div>

        <!-- MODAL AÑADIR IMAGEN BANNER INICIAL -->
        <Dialog
            v-model:visible="modalAñadir"
            modal
            position="center"
            header="AÑADIR BANNER INICIAL"
            class="w-full sm:w-1/2 mx-2 sm:mx-4 py-4"
        >
            <!-- imagen -->
            <form @submit.prevent="submit" class="mb-2 w-full">
                <p class="text-gray-600 text-sm">
                    Imagen de banner inicial (resolución recomendada: 1280x720)
                </p>
                <div class="border-2 border-gray-300 rounded-md p-2">
                    <TextInput
                        id="imagen"
                        type="file"
                        required
                        class="mt-1 !border-0"
                        accept="image/*"
                        @input="onAdvancedUpload($event.target.files[0])"
                        :maxFileSize="2e6"
                    />
                    <InputError class="mt-2" :message="form.errors.banner" />

                    <div class="flex justify-center">
                        <img
                            v-if="imageUrl"
                            :src="imageUrl"
                            alt="form.nombre"
                            class="w-2/6 h-auto"
                        />
                        <PhotoIcon v-else class="w-1/6 text-gray-300" />
                    </div>
                </div>

                <PrimaryButton
                    class="mt-4 flex justify-center"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    >Añadir</PrimaryButton
                >
            </form>
        </Dialog>
        <!-- MODAL ACTUALIZAR IMAGEN BANNER INICIAL -->
        <Dialog
            v-model:visible="modalActualizar"
            modal
            position="center"
            header="ACTUALIZAR BANNER INICIAL"
            class="w-full sm:w-1/2 mx-2 sm:mx-4 py-4"
        >
            <!-- imagen -->
            <form @submit.prevent="submit" class="mb-2 w-full">
                <p class="text-gray-600 text-sm">
                    Cambiar imagen de banner inicial (resolución recomendada:
                    1280x720)
                </p>
                <div class="border-2 border-gray-300 rounded-md p-2">
                    <TextInput
                        id="imagen"
                        type="file"
                        required
                        class="mt-1 !border-0"
                        accept="image/*"
                        @input="onAdvancedUpload($event.target.files[0])"
                        :maxFileSize="2e6"
                    />
                    <InputError class="mt-2" :message="form.errors.banner" />

                    <div class="flex justify-center">
                        <img
                            v-if="imageUrl"
                            :src="imageUrl"
                            alt="form.nombre"
                            class="w-2/6 h-auto"
                        />
                        <PhotoIcon v-else class="w-1/6 text-gray-300" />
                    </div>
                </div>

                <PrimaryButton
                    class="mt-4 flex justify-center"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    >Actualizar</PrimaryButton
                >
            </form>
        </Dialog>
        <!-- MODAL CONFIRM DELETE OFERTA -->
        <Modal :show="confirmingDeletion" @close="cerrarModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    ¿Estás seguro de que quieres eliminar la oferta?
                </h2>

                <p class="mt-1 text-sm text-gray-600">
                    Una vez que se elimine la oferta, todos los usuarios
                    registrados como estudiantes se perderán del registro
                    histórico. Por favor ingrese su contraseña para confirmar
                    que desea eliminar.
                </p>

                <div class="mt-6">
                    <InputLabel
                        for="password"
                        value="Contraseña"
                        class="sr-only"
                    />

                    <TextInput
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        class="mt-1 block w-3/4"
                        placeholder="Contraseña"
                        @keyup.enter="deleteOfert"
                    />

                    <InputError :message="form.errors.password" class="mt-2" />
                </div>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton type="button" @click="cerrarModal">
                        Cancelar
                    </SecondaryButton>

                    <DangerButton
                        class="ms-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteOfert"
                    >
                        Eliminar oferta
                    </DangerButton>
                </div>
            </div>
        </Modal>
        <!-- MODAL CONFIRM DELETE EVENTO -->
        <Modal :show="confirmingDeletion1" @close="cerrarModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    ¿Estás seguro de que quieres eliminar el evento?
                </h2>

                <p class="mt-1 text-sm text-gray-600">
                    Una vez que se elimine el evento, no volverá aparecer en el
                    registro, ni en la vista del perfil en la pagina web. Por
                    favor ingrese su contraseña para confirmar que desea
                    eliminar.
                </p>

                <div class="mt-6">
                    <InputLabel
                        for="password"
                        value="Contraseña"
                        class="sr-only"
                    />

                    <TextInput
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        class="mt-1 block w-3/4"
                        placeholder="Contraseña"
                        @keyup.enter="deleteEvent"
                    />

                    <InputError :message="form.errors.password" class="mt-2" />
                </div>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton type="button" @click="cerrarModal">
                        Cancelar
                    </SecondaryButton>

                    <DangerButton
                        class="ms-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteEvent"
                    >
                        Eliminar evento
                    </DangerButton>
                </div>
            </div>
        </Modal>

        <!-- MODAL Inscripcion -->
        <Dialog
            v-model:visible="visible"
            modal
            position="center"
            header="INSCRIBIRSE"
            class="max-w-xl mx-2 sm:mx-4 flex"
        >
            <div class="m-auto">
                <p class="text-lg">
                    Ingrese la cédula para validar su información
                </p>

                <div class="flex w-full justify-center">
                    <!-- Identificacion -->
                    <div class="w-full">
                        <InputLabel
                            :class="[
                                isContrast ? '!text-yellow-200 font-bold' : '',
                                letraSize == -2
                                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                    : letraSize == -1
                                    ? '!sm:text-xs !text-[0.65rem]'
                                    : letraSize == 1
                                    ? '!sm:text-lg !text-sm'
                                    : letraSize == 2
                                    ? '!sm:text-xl !text-base'
                                    : 'sm:text-sm text-xs',
                            ]"
                            for="identificacion"
                            value="identificacion"
                        />
                        <TextInput
                            id="identificacion"
                            type="number"
                            class="mt-1 block w-full p-0 sm:p-2"
                            :class="[
                                isContrast
                                    ? '!text-yellow-200 font-bold bg-black'
                                    : '',
                            ]"
                            v-model="form1.identificacion"
                            required
                            autocomplete="identificacion"
                        />
                        <InputError
                            class="mt-1"
                            :message="form1.errors.identificacion"
                        />
                    </div>
                </div>

                <!-- next button -->
                <div
                    class="flex justify-center items-center justify-end mt-6 z-20"
                    v-if="6 < form1.identificacion"
                >
                    <primaryButton
                        type="button"
                        @click="submit2"
                        :class="{ 'opacity-25': form1.processing }"
                        :disabled="form1.processing"
                    >
                        Inscribir
                    </primaryButton>
                </div>
            </div>
        </Dialog>
    </AuthenticatedLayout>
</template>

<script setup>
import { ref, inject, computed } from "vue";
import { watch } from "vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Pagination from "@/Components/Pagination.vue";
import { Head, useForm } from "@inertiajs/vue3";
import { router } from "@inertiajs/vue3";
import SecondaryLink from "@/Components/SecondaryLink.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import DangerButton from "@/Components/DangerButton.vue";
import PrimaryLink from "@/Components/PrimaryLink.vue";
import {
    HomeIcon,
    FireIcon,
    FolderIcon,
    DocumentIcon,
    PhotoIcon,
} from "@heroicons/vue/24/solid";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import Dialog from "primevue/dialog";
import Textarea from "primevue/textarea";
import Modal from "@/Components/Modal.vue";
import { format } from "date-fns";

const swal = inject("$swal");

const props = defineProps({
    puntos: {
        type: Object,
        default: [],
    },

    infoPunto: {
        type: Object,
        default: [],
    },

    ofertas: {
        type: Object,
        default: [],
    },

    eventos: {
        type: Object,
        default: [],
    },

    info_usuario: {
        type: Object,
        default: [],
    },
});

// Modal de eliminacion ofertas
const confirmingDeletion = ref(false);
const ofert_id = ref();
// Modal de eliminacion eventos
const confirmingDeletion1 = ref(false);
// Modal de inscripcion
const visible = ref(false);
const event_id = ref();

const active = ref(0);
const punto = ref(props.infoPunto.length ? props.infoPunto[0].id : 0);
//variable de imagen
const imageUrl = ref(null);
//vars modals
const modalAñadir = ref(false);
const modalActualizar = ref(false);
//max palabras
const isMaxPalabras = ref(false);

console.log(props);

const form = useForm({
    id: props.infoPunto.length ? props.infoPunto[0].id_punto : "NA",
    code: props.infoPunto.length ? props.infoPunto[0].punto.code : "NA",
    descripcion: props.infoPunto.length ? props.infoPunto[0].descripcion : "NA",
    telefono: props.infoPunto.length ? props.infoPunto[0].telefono : "NA",
    celular: props.infoPunto.length ? props.infoPunto[0].celular : "NA",
    email: props.infoPunto.length ? props.infoPunto[0].email : "NA",
    instagram: props.infoPunto.length ? props.infoPunto[0].instagram : "NA",
    facebook: props.infoPunto.length ? props.infoPunto[0].facebook : "NA",
    twitter: props.infoPunto.length ? props.infoPunto[0].twitter : "NA",
    banner: props.infoPunto.length ? props.infoPunto[0].banner : "NA",
    password: "",
});

const form1 = useForm({
    id_oferta: "",
    id_info_user: "",
    identificacion: "",
    nombre_oferta: "",
});

const handleSelectPuntos = () => {
    console.log(punto.value);
    router.get(
        "/perfil",
        { search: punto.value },
        {
            replace: true,
        }
    );
};

const abrirModal = (num, oferta) => {
    modalAñadir.value = false;
    modalActualizar.value = false;
    switch (num) {
        case 0:
            modalAñadir.value = true;
            break;
        case 1:
            modalActualizar.value = true;
            break;
        case 2:
            form1.id_oferta = oferta.id;
            form1.nombre_oferta = oferta.nombre;
            visible.value = true;
            break;

        default:
            break;
    }
};

const cerrarModal = () => {
    modalAñadir.value = false;
    modalActualizar.value = false;
    confirmingDeletion.value = false;
    confirmingDeletion1.value = false;
    visible.value = false;
    form.reset("password");
    form1.reset("identificacion");
};

//eliminar oferta
const confirmUserDeletion = (id) => {
    confirmingDeletion.value = true;
    ofert_id.value = id;
};

const deleteOfert = () => {
    form.delete(route("ofertas.destroy", ofert_id.value), {
        preserveScroll: true,
        onSuccess: () => {
            cerrarModal();
            swal({
                title: "Registro Eliminado",
                text: "La oferta se ha eliminado exitosamente",
                icon: "success",
            });
        },
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};
//eliminar evento
const confirmEventDeletion = (id) => {
    confirmingDeletion1.value = true;
    event_id.value = id;
};

const deleteEvent = () => {
    form.delete(route("eventos.destroy", event_id.value), {
        preserveScroll: true,
        onSuccess: () => {
            cerrarModal();
            swal({
                title: "Registro Eliminado",
                text: "El evento se ha eliminado exitosamente",
                icon: "success",
            });
        },
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset("password", "password_confirmation"),
    });
};

//IMAGEN
const getImageUrl = (imageName) => {
    // Si las imágenes están almacenadas en la carpeta public/images, la ruta sería algo como esto:
    return `/storage/uploads/banners/${imageName}`;
};

//cuando suba la img
const onAdvancedUpload = (ev) => {
    form.banner = ev;
    console.log(form.banner);

    if (!form.banner) return;

    //reader para mostrar el doc cargado
    const reader = new FileReader();
    reader.onload = () => {
        imageUrl.value = reader.result;
    };
    reader.readAsDataURL(form.banner);
};

// Limite palabras
const palabrasEnTestimonio = computed(() => {
    const palabras = form.descripcion.trim();
    const result = palabras.length;

    if (result >= 300) {
        isMaxPalabras.value = true;
    } else {
        isMaxPalabras.value = false;
    }

    return result;
});

watch(palabrasEnTestimonio, () => {
    form.descripcion = form.descripcion.trim(); // Asegúrate de que no haya espacios al principio o al final
});

//fin

//guardar banner inicial bd
const submit = () => {
    form.post(route("perfil.store"), {
        onSuccess: function () {
            cerrarModal();
            swal({
                title: "Registro Guardado",
                text: "El evento se ha almacenado exitosamente",
                icon: "success",
                didClose: () => {
                    window.location.reload();
                },
            });
        },
    });
};

//guardar info en bd
const submit1 = () => {
    form.patch(route("perfil.update", props.infoPunto[0].id), {
        onSuccess: function () {
            cerrarModal();
            swal({
                title: "Registro Actualizado",
                text: "La información se ha actualizado exitosamente",
                icon: "success",
                // didClose: () => {
                //     window.location.reload();
                // }
            });
        },
    });
};

//INSCRIPCIONES
const submit2 = () => {
    if (
        props.info_usuario.find(
            (item) => item.identificacion == form1.identificacion
        )
    ) {
        form1.post(route("puntos.store"), {
            onSuccess: function () {
                visible.value = false;
                swal({
                    title: "Registro Guardado",
                    text:
                        "usuario inscrito a la capacitación " +
                        form1.nombre_oferta,
                    icon: "success",
                });
            },
            onError: function () {
                visible.value = false;
                swal({
                    title: "Registro NO Guardado",
                    text:
                        "posiblemente el usuario ya se encuentre inscrito a la oferta: " +
                        form1.nombre_oferta,
                    icon: "error",
                });
            },
        });
    } else {
        visible.value = false;
        form1.post(route("inscribir-capacitaciones"), {
            onSuccess: () => {
                form.reset(); // Solo se ejecuta si la petición es exitosa
            },
        });
    }
};

const formatField = (value) => {
    return format(new Date(value), "dd/MM/yyyy");
};
</script>
