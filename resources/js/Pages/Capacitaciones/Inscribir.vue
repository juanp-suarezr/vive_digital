<template>
    <Head title="Inscribir a curso" />

    <GuestLayout :isRegister="true">
        <!-- <div class="absolute sm:top-0 top-6 sm:right-[-18%] xl:right-12 xs:left-6">
            <button v-if="isFirstTime" class="w-[15%]" @click="playInfo">
                <PlayCircleIcon class="w-full text-gray-600" />
            </button>
            <button v-if="!isFirstTime && handledAudio" class="w-[15%]">
                <SpeakerWaveIcon class="w-full text-blue-800" />
            </button>
        </div> -->
        <div
            class="flex grid grid-cols-2 gap-4 w-full"
            :class="[isContrast ? '!text-yellow-200 font-bold bg-white' : '']"
        >
            <Link href="/" class="flex items-center justify-center">
                <ApplicationLogo
                    class="w-full sm:w-2/6 fill-current text-gray-500"
                />
            </Link>

            <div class="flex items-center justify-center">
                <img :src="logoViveD" />
            </div>
        </div>

        <form @submit.prevent="submit">
            <div
                class="mt-6 justify-center"
                :class="[isContrast ? 'bg-white' : '']"
            >
                <Steps :model="items" v-model:activeStep="active" />
            </div>

            <div class="px-4 mt-6 text-center text-blue-500">
                <b>Inscripción a oferta:</b> {{ props.info.nombre_oferta }}
            </div>

            <div class="rounded-xl shadow-xl p-4">
                <!-- Formulario de registro 1 -->
                <div class="justify-center font-medium" v-if="active == 0">
                    <div class="w-full mt-6 sm:grid grid-cols-2 gap-4">
                        <!-- nombres -->
                        <div class="mb-4">
                            <InputLabel
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold'
                                        : '',
                                    letraSize == -2
                                        ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                        : letraSize == -1
                                        ? '!sm:text-xs !text-[0.65rem]'
                                        : letraSize == 1
                                        ? '!sm:text-lg !text-sm'
                                        : letraSize == 2
                                        ? '!sm:text-xl !text-base'
                                        : '',
                                ]"
                                class="sm:text-sm text-xs"
                                for="nombres"
                                value="Nombres"
                            />
                            <TextInput
                                id="nombres"
                                type="text"
                                class="mt-1 block w-full p-0 sm:p-2"
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold bg-black'
                                        : '',
                                ]"
                                v-model="form.nombres"
                                required
                                autofocus
                                autocomplete="nombre"
                            />
                            <InputError
                                class="mt-1"
                                :message="form.errors.nombres"
                            />
                        </div>
                        <!-- apellidos -->
                        <div class="mb-4">
                            <InputLabel
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold'
                                        : '',
                                    letraSize == -2
                                        ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                        : letraSize == -1
                                        ? '!sm:text-xs !text-[0.65rem]'
                                        : letraSize == 1
                                        ? '!sm:text-lg !text-sm'
                                        : letraSize == 2
                                        ? '!sm:text-xl !text-base'
                                        : '',
                                ]"
                                class="sm:text-sm text-xs"
                                for="apellidos"
                                value="Apellidos"
                            />
                            <TextInput
                                id="apellidos"
                                type="text"
                                class="mt-1 block w-full p-0 sm:p-2"
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold bg-black'
                                        : '',
                                ]"
                                v-model="form.apellidos"
                                required
                                autocomplete="apellidos"
                            />
                            <InputError
                                class="mt-1"
                                :message="form.errors.apellidos"
                            />
                        </div>

                        <!-- edad e identificacion -->
                        <div class="col-span-2 mb-4 sm:flex">
                            <!-- edad -->
                            <div class="w-3/12 sm:pe-6">
                                <InputLabel
                                    :class="[
                                        isContrast
                                            ? '!text-yellow-200 font-bold'
                                            : '',
                                        letraSize == -2
                                            ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                            : letraSize == -1
                                            ? '!sm:text-xs !text-[0.65rem]'
                                            : letraSize == 1
                                            ? '!sm:text-lg !text-sm'
                                            : letraSize == 2
                                            ? '!sm:text-xl !text-base'
                                            : '',
                                    ]"
                                    class="sm:text-sm text-xs"
                                    for="edad"
                                    value="Edad"
                                />
                                <TextInput
                                    id="edad"
                                    type="number"
                                    class="mt-1 p-0 sm:p-2 block w-full"
                                    :class="[
                                        isContrast
                                            ? '!text-yellow-200 font-bold bg-black'
                                            : '',
                                    ]"
                                    v-model="form.edad"
                                    required
                                    autocomplete="edad"
                                />
                                <InputError
                                    class="mt-1"
                                    :message="form.errors.edad"
                                />
                            </div>

                            <!-- identificacion -->
                            <div
                                class="w-full sm:w-9/12 grid grid-cols-4 gap-4 mt-4 sm:mt-0"
                            >
                                <!-- tipo de identificacion -->
                                <div class="col-span-1">
                                    <InputLabel
                                        :class="[
                                            isContrast
                                                ? '!text-yellow-200 font-bold'
                                                : '',
                                            letraSize == -2
                                                ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                                : letraSize == -1
                                                ? '!sm:text-xs !text-[0.65rem]'
                                                : letraSize == 1
                                                ? '!sm:text-lg !text-sm'
                                                : letraSize == 2
                                                ? '!sm:text-xl !text-base'
                                                : '',
                                        ]"
                                        for="tipo"
                                        value="Tipo"
                                        class="text-neutral-500 sm:text-sm text-xs"
                                    />
                                    <select
                                        id="tipo"
                                        name="tipo"
                                        v-model="form.tipo_documento"
                                        class="block w-full sm:px-4 sm:py-2 p-0 mt-1 text-base text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                        :class="[
                                            isContrast
                                                ? '!text-yellow-200 font-bold bg-black'
                                                : '',
                                        ]"
                                    >
                                        <option
                                            class="text-black text-[9px] sm:text-xs"
                                            v-for="tipo in tipoIden"
                                            :key="tipo.id"
                                            :value="tipo.nombre"
                                        >
                                            {{
                                                tipo.code == "CC" ||
                                                tipo.code == "TI" ||
                                                tipo.code == "PPT"
                                                    ? tipo.code
                                                    : tipo.nombre
                                            }}
                                        </option>
                                    </select>
                                    <InputError
                                        class="mt-1"
                                        :message="form.errors.tipo_documento"
                                    />
                                </div>
                                <!-- Identificacion -->
                                <div class="col-span-3">
                                    <InputLabel
                                        :class="[
                                            isContrast
                                                ? '!text-yellow-200 font-bold'
                                                : '',
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
                                         class="mt-1 block w-full p-0 sm:p-2 bg-gray-200"
                                         :class="[
                                             isContrast
                                                 ? '!text-yellow-200 font-bold bg-black'
                                                 : '',
                                         ]"
                                         v-model="form.identificacion"
                                         disabled
                                         autocomplete="identificacion"
                                     />
                                     <InputError
                                         class="mt-1"
                                         :message="form.errors.identificacion"
                                     />
                                 </div>
                             </div>

                             <!-- Anexo documento solo si no está registrado -->
                             <div v-if="!info_usuario" class="col-span-2 mb-4">
                                 <InputLabel
                                     :class="[
                                         isContrast
                                             ? '!text-yellow-200 font-bold'
                                             : '',
                                         letraSize == -2
                                             ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                             : letraSize == -1
                                             ? '!sm:text-xs !text-[0.65rem]'
                                             : letraSize == 1
                                             ? '!sm:text-lg !text-sm'
                                             : letraSize == 2
                                             ? '!sm:text-xl !text-base'
                                             : '',
                                     ]"
                                     class="sm:text-sm text-xs"
                                     for="anexo_documento"
                                     value="Fotocopia de Cédula (PDF, JPG, PNG) *"
                                 />
                                 <input
                                     id="anexo_documento"
                                     type="file"
                                     class="mt-1 block w-full p-0 sm:p-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                     :class="[
                                         isContrast
                                             ? '!text-yellow-200 font-bold bg-black'
                                             : '',
                                     ]"
                                     @change="handleAnexoChange"
                                     accept=".pdf,.jpg,.jpeg,.png"
                                     required
                                 />
                                 <InputError
                                     class="mt-1"
                                     :message="form.errors.anexo_documento"
                                 />
                             </div>
                        </div>

                        <!-- direccion -->
                        <div class="mb-4">
                            <InputLabel
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold'
                                        : '',
                                    letraSize == -2
                                        ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                        : letraSize == -1
                                        ? '!sm:text-xs !text-[0.65rem]'
                                        : letraSize == 1
                                        ? '!sm:text-lg !text-sm'
                                        : letraSize == 2
                                        ? '!sm:text-xl !text-base'
                                        : '',
                                ]"
                                class="sm:text-sm text-xs"
                                for="direccion"
                                value="Dirección de residencia"
                            />
                            <TextInput
                                id="direccion"
                                type="text"
                                class="mt-1 block w-full p-0 sm:p-2"
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold bg-black'
                                        : '',
                                ]"
                                v-model="form.direccion"
                                required
                                autofocus
                                autocomplete="direccion"
                            />
                            <InputError
                                class="mt-1"
                                :message="form.errors.direccion"
                            />
                        </div>
                        <!-- sector -->
                        <div class="mb-4">
                            <InputLabel
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold'
                                        : '',
                                    letraSize == -2
                                        ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                        : letraSize == -1
                                        ? '!sm:text-xs !text-[0.65rem]'
                                        : letraSize == 1
                                        ? '!sm:text-lg !text-sm'
                                        : letraSize == 2
                                        ? '!sm:text-xl !text-base'
                                        : '',
                                ]"
                                class="sm:text-sm text-xs"
                                for="sector"
                                value="Barrio o vereda"
                            />
                            <TextInput
                                id="sector"
                                type="text"
                                class="mt-1 block w-full p-0 sm:p-2"
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold bg-black'
                                        : '',
                                ]"
                                v-model="form.sector"
                                required
                                autofocus
                                autocomplete="sector"
                            />
                            <InputError
                                class="mt-1"
                                :message="form.errors.sector"
                            />
                        </div>
                        <!-- telefono -->
                        <div class="mb-4">
                            <InputLabel
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold'
                                        : '',
                                    letraSize == -2
                                        ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                        : letraSize == -1
                                        ? '!sm:text-xs !text-[0.65rem]'
                                        : letraSize == 1
                                        ? '!sm:text-lg !text-sm'
                                        : letraSize == 2
                                        ? '!sm:text-xl !text-base'
                                        : '',
                                ]"
                                class="sm:text-sm text-xs"
                                for="telefono"
                                value="Telefono"
                            />
                            <TextInput
                                id="telefono"
                                type="number"
                                class="mt-1 block w-full p-0 sm:p-2"
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold bg-black'
                                        : '',
                                ]"
                                v-model="form.telefono"
                                required
                                autofocus
                                autocomplete="telefono"
                            />
                            <InputError
                                class="mt-1"
                                :message="form.errors.telefono"
                            />
                        </div>
                        <!-- email -->
                        <div class="mb-4">
                            <InputLabel
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold'
                                        : '',
                                    letraSize == -2
                                        ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                        : letraSize == -1
                                        ? '!sm:text-xs !text-[0.65rem]'
                                        : letraSize == 1
                                        ? '!sm:text-lg !text-sm'
                                        : letraSize == 2
                                        ? '!sm:text-xl !text-base'
                                        : '',
                                ]"
                                class="sm:text-sm text-xs"
                                for="email"
                                value="Correo electronico"
                            />
                            <TextInput
                                id="email"
                                type="email"
                                class="mt-1 block w-full p-0 sm:p-2"
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold bg-black'
                                        : '',
                                ]"
                                v-model="form.email"
                                autofocus
                                autocomplete="username"
                            />
                            <InputError
                                class="mt-1"
                                :message="form.errors.email"
                            />
                        </div>
                    </div>

                    <!-- botones -->
                    <div class="flex pt-4 justify-end">
                        <button
                            type="button"
                            @click="nextStep(1)"
                            class="bg-secondary hover:bg-primary text-xs sm:text-sm text-white p-2 rounded-md shadow-xl"
                            :class="[
                                letraSize == -2
                                    ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                    : letraSize == -1
                                    ? '!sm:text-xs !text-[0.65rem]'
                                    : letraSize == 1
                                    ? '!sm:text-lg !text-sm'
                                    : letraSize == 2
                                    ? '!sm:text-xl !text-base'
                                    : '',
                            ]"
                        >
                            Siguiente
                        </button>
                    </div>
                </div>

                <!-- Formulario de registro 2 -->
                <div class="justify-center font-medium" v-if="active == 1">
                    <div class="w-full mt-6 sm:grid grid-cols-2 gap-4">
                        <!-- genero -->
                        <div class="mb-4">
                            <InputLabel
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold'
                                        : '',
                                    letraSize == -2
                                        ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                        : letraSize == -1
                                        ? '!sm:text-xs !text-[0.65rem]'
                                        : letraSize == 1
                                        ? '!sm:text-lg !text-sm'
                                        : letraSize == 2
                                        ? '!sm:text-xl !text-base'
                                        : '',
                                ]"
                                class="sm:text-sm text-xs"
                                for="genero"
                                value="Genero"
                            />
                            <div class="mt-2 block sm:flex">
                                <div class="">
                                    <input
                                        type="radio"
                                        id="masculino"
                                        value="Masculino"
                                        v-model="form.genero"
                                    />
                                    <label
                                        class="ps-2 text-sm sm:text-base"
                                        :class="[
                                            isContrast
                                                ? '!text-yellow-200 font-bold'
                                                : '',
                                            letraSize == -2
                                                ? '!sm:text-xs !text-[0.65rem]'
                                                : letraSize == -1
                                                ? '!sm:text-sm !text-xs'
                                                : letraSize == 1
                                                ? '!sm:text-lg !text-base'
                                                : letraSize == 2
                                                ? '!sm:text-xl !text-lg'
                                                : '',
                                        ]"
                                        for="masculino"
                                        >Masculino</label
                                    >
                                </div>
                                <div class="sm:ms-6">
                                    <input
                                        type="radio"
                                        id="two"
                                        value="Femenino"
                                        v-model="form.genero"
                                    />
                                    <label
                                        class="ps-2 text-sm sm:text-base"
                                        :class="[
                                            isContrast
                                                ? '!text-yellow-200 font-bold'
                                                : '',
                                            letraSize == -2
                                                ? '!sm:text-xs !text-[0.65rem]'
                                                : letraSize == -1
                                                ? '!sm:text-sm !text-xs'
                                                : letraSize == 1
                                                ? '!sm:text-lg !text-base'
                                                : letraSize == 2
                                                ? '!sm:text-xl !text-lg'
                                                : '',
                                        ]"
                                        for="two"
                                        >Femenino</label
                                    >
                                </div>
                                <!-- otros generos -->
                                <div v-if="IsNewGenero" class="sm:ms-6">
                                    <InputLabel
                                        :class="[
                                            isContrast
                                                ? '!text-yellow-200 font-bold'
                                                : '',
                                            letraSize == -2
                                                ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                                : letraSize == -1
                                                ? '!sm:text-xs !text-[0.65rem]'
                                                : letraSize == 1
                                                ? '!sm:text-lg !text-sm'
                                                : letraSize == 2
                                                ? '!sm:text-xl !text-base'
                                                : '',
                                        ]"
                                        class="sm:text-sm text-xs"
                                        for="genero"
                                        value="¿Cual?"
                                    />
                                    <TextInput
                                        id="genero"
                                        type="text"
                                        class="mt-1 block w-full p-0 sm:p-1"
                                        :class="[
                                            isContrast
                                                ? '!text-yellow-200 font-bold bg-black'
                                                : '',
                                        ]"
                                        v-model="form.genero"
                                        autocomplete="genero"
                                    />
                                    <InputError
                                        class="mt-1"
                                        :message="form.errors.genero"
                                    />
                                </div>
                                <div v-else class="sm:ms-6">
                                    <input
                                        type="radio"
                                        id="two"
                                        value="true"
                                        v-model="IsNewGenero"
                                    />
                                    <label
                                        class="ps-2 text-sm sm:text-base"
                                        :class="[
                                            isContrast
                                                ? '!text-yellow-200 font-bold'
                                                : '',
                                            letraSize == -2
                                                ? '!sm:text-xs !text-[0.65rem]'
                                                : letraSize == -1
                                                ? '!sm:text-sm !text-xs'
                                                : letraSize == 1
                                                ? '!sm:text-lg !text-base'
                                                : letraSize == 2
                                                ? '!sm:text-xl !text-lg'
                                                : '',
                                        ]"
                                        for="two"
                                        >Otro</label
                                    >
                                </div>
                            </div>
                        </div>
                        <!-- condicion -->
                        <div class="mb-4">
                            <InputLabel
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold'
                                        : '',
                                    letraSize == -2
                                        ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                        : letraSize == -1
                                        ? '!sm:text-xs !text-[0.65rem]'
                                        : letraSize == 1
                                        ? '!sm:text-lg !text-sm'
                                        : letraSize == 2
                                        ? '!sm:text-xl !text-base'
                                        : '',
                                ]"
                                for="condicion"
                                value="Condición"
                                class="text-neutral-500 sm:text-sm text-xs"
                            />
                            <select
                                id="condicion"
                                name="condicion"
                                v-model="form.condicion"
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold bg-black'
                                        : '',
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
                                <option
                                    class="text-black"
                                    :class="[
                                        isContrast
                                            ? '!text-yellow-200 font-bold'
                                            : '',
                                    ]"
                                    v-for="con in condiciones"
                                    :key="con.id"
                                    :value="con.code"
                                >
                                    {{ con.nombre }}
                                </option>
                            </select>
                            <InputError
                                class="mt-1"
                                :message="form.errors.condicion"
                            />
                        </div>
                        <!-- etnia -->
                        <div class="mb-4">
                            <InputLabel
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold'
                                        : '',
                                    letraSize == -2
                                        ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                        : letraSize == -1
                                        ? '!sm:text-xs !text-[0.65rem]'
                                        : letraSize == 1
                                        ? '!sm:text-lg !text-sm'
                                        : letraSize == 2
                                        ? '!sm:text-xl !text-base'
                                        : '',
                                ]"
                                for="etnia"
                                value="Etnia"
                                class="text-neutral-500 sm:text-sm text-xs"
                            />
                            <select
                                id="etnia"
                                name="etnia"
                                v-model="form.etnia"
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold bg-black'
                                        : '',
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
                                <option
                                    class="text-black"
                                    :class="[
                                        isContrast
                                            ? '!text-yellow-200 font-bold'
                                            : '',
                                    ]"
                                    v-for="et in etnias"
                                    :key="et.id"
                                    :value="et.code"
                                >
                                    {{ et.nombre }}
                                </option>
                            </select>
                            <InputError
                                class="mt-1"
                                :message="form.errors.etnia"
                            />
                        </div>
                        <!-- nivel estudio -->
                        <div class="mb-4">
                            <InputLabel
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold'
                                        : '',
                                    letraSize == -2
                                        ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                        : letraSize == -1
                                        ? '!sm:text-xs !text-[0.65rem]'
                                        : letraSize == 1
                                        ? '!sm:text-lg !text-sm'
                                        : letraSize == 2
                                        ? '!sm:text-xl !text-base'
                                        : '',
                                ]"
                                for="nivel_estudio"
                                value="Nivel de estudio"
                                class="text-neutral-500 sm:text-sm text-xs"
                            />
                            <select
                                id="nivel_estudio"
                                name="nivel_estudio"
                                v-model="form.nivel_estudio"
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold bg-black'
                                        : '',
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
                                <option
                                    class="text-black"
                                    :class="[
                                        isContrast
                                            ? '!text-yellow-200 font-bold'
                                            : '',
                                    ]"
                                    v-for="niv in nivel_estudios"
                                    :key="niv.id"
                                    :value="niv.code"
                                >
                                    {{ niv.nombre }}
                                </option>
                            </select>
                            <InputError
                                class="mt-1"
                                :message="form.errors.nivel_estudio"
                            />
                        </div>

                        <!-- ncheck tratamiento datos -->
                        <div class="mb-4 col-span-2">
                            <input
                                type="checkbox"
                                id="consentimiento1"
                                name="consentimiento1"
                                required
                                autofocus
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold bg-black border-yellow-200'
                                        : '',
                                ]"
                            />
                            <label
                                for="consentimiento1"
                                class="ps-4 pe-12 sm:text-base text-sm text-gray-500"
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold'
                                        : '',
                                    letraSize == -2
                                        ? '!sm:text-xs !text-[0.65rem]'
                                        : letraSize == -1
                                        ? '!sm:text-sm !text-xs'
                                        : letraSize == 1
                                        ? '!sm:text-lg !text-base'
                                        : letraSize == 2
                                        ? '!sm:text-xl !text-lg'
                                        : '',
                                ]"
                                >Conozco y Acepto la Política de Privacidad de Datos <a href="https://www.pereira.gov.co/publicaciones/38/politicas-de-privacidad-y-condiciones-de-uso/" target="_blank">politica</a></label
                            >
                            <InputError
                                class="mt-1"
                                :message="form.errors.checked"
                            />
                        </div>
                    </div>

                    <!-- botones -->
                    <div class="pt-4 flex justify-between gap-2">
                        <div class="flex pt-4 justify-end">
                            <button
                                type="button"
                                @click="prevStep(0)"
                                class="bg-secondary hover:bg-primary text-xs sm:text-sm text-white p-2 rounded-md shadow-xl"
                                :class="[
                                    isContrast
                                        ? '!text-yellow-200 font-bold'
                                        : '',
                                    letraSize == -2
                                        ? '!sm:text-[0.65rem] !text-[0.55rem]'
                                        : letraSize == -1
                                        ? '!sm:text-xs !text-[0.65rem]'
                                        : letraSize == 1
                                        ? '!sm:text-lg !text-sm'
                                        : letraSize == 2
                                        ? '!sm:text-xl !text-base'
                                        : '',
                                ]"
                            >
                                Atras
                            </button>
                        </div>
                        <div class="flex pt-4 justify-end">
                            <PrimaryButton
                                class="justify-center !p-2 !mb-0 text-xs sm:text-sm"
                                :class="{ 'opacity-25': form.processing }"
                                :disabled="form.processing"
                            >
                                Enviar e Inscribirse al curso
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </GuestLayout>

    <audio ref="infoAudio" :src="audioIntro"></audio>

    <!-- Modal para cargar anexo -->
    <Dialog v-model:visible="showModal" modal header="Cargar Fotocopia de Cédula" class="w-96">
        <div class="p-4">
            <p class="mb-4 text-gray-700">Por favor, cargue la fotocopia de su cédula en formato PDF, escaneado o imagen (JPG, PNG).</p>
            <input type="file" @change="handleFileChange" accept=".pdf,.jpg,.jpeg,.png" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            <div v-if="selectedFile" class="mt-2 text-sm text-green-600">{{ selectedFile.name }}</div>
            <div class="flex justify-end mt-6 gap-2">
                <button @click="showModal = false" class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Cancelar</button>
                <button @click="uploadDocument" :disabled="!selectedFile" class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark disabled:opacity-50">Cargar y Continuar</button>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import GuestLayout from "@/Layouts/GuestLayout.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import { Head, Link, useForm, router, usePage } from "@inertiajs/vue3";
import logoViveD from "../../../../public/assets/img/puntoViveDigital.webp";
import Steps from "primevue/steps";
import { ref, watch, inject, onMounted } from "vue";
import Dialog from "primevue/dialog";
import VueQrcode from "vue-qrcode";
import { useToast } from "vue-toast-notification";
import { SpeakerWaveIcon, PlayCircleIcon } from "@heroicons/vue/24/solid";
import audioIntro from "../../../../public/assets/audios/inicioForm.wav";
import axios from "axios";

const $toast = useToast();
const swal = inject("$swal");

const props = defineProps({
    info: {
        type: Object,
        default: () => ({}),
    },
});
console.log(props.info);

const isContrast = ref(usePage().props.accesibilidad.contraste);
const letraSize = ref(usePage().props.accesibilidad.letra);
const info_usuario = ref([]);



watch(
    () => usePage().props.accesibilidad.contraste,
    (newVal) => {
        isContrast.value = newVal;
        console.log(isContrast.value);
    }
);

watch(
    () => usePage().props.accesibilidad.letra,
    (newVal) => {
        letraSize.value = newVal;
        console.log(letraSize.value);
    }
);

const form = useForm({
    nombres: "",
    apellidos: "",
    edad: 0,
    tipo_documento: "",
    identificacion: props.info.identificacion,
    direccion: "",
    sector: "",
    telefono: 0,
    email: "",
    genero: "",
    condicion: "NA",
    etnia: "NA",
    nivel_estudio: "",
    id_oferta: props.info.id_oferta,
    checked: "",
    anexo_documento: null,
});

//valida si ya se reprodujo el audio
const isFirstTime = ref(true);

//handled audio
const handledAudio = ref(true);
// referencia al audio intro
const infoAudio = ref(null);

//ITEMS DEL STEP
const items = ref([
    {
        label: "Paso 1",
    },
    {
        label: "Paso 2",
    },
]);

//ITEMS DEL TIPO DE IDENTIFICACION
const tipoIden = ref([
    { id: "0", nombre: "Tarjeta de Identidad", code: "TI" },
    { id: "1", nombre: "Registro Civil", code: "R" },
    { id: "2", nombre: "Cédula Ciudadanía", code: "CC" },
    { id: "3", nombre: "Cédula Extranjería", code: "CE" },
    { id: "4", nombre: "Pasaporte", code: "P" },
    { id: "5", nombre: "Permiso por Protección Temporal", code: "PPT" },
    { id: "6", nombre: "Otro", code: "O" },
]);
//ITEMS DE CONDICIONES
const condiciones = ref([
    { id: "0", nombre: "Sin condición", code: "NA" },
    { id: "1", nombre: "Discapacitado", code: "discapacitado" },
    { id: "2", nombre: "Desplazados", code: "desplazados" },
    {
        id: "3",
        nombre: "Victimas conflicto armado interno",
        code: "victimasConfArm",
    },
    { id: "4", nombre: "Mujer cabeza de hogar", code: "mujerCabHogar" },
    { id: "5", nombre: "Diversidad sexual", code: "diversidadSex" },
    { id: "6", nombre: "Habitante de calle", code: "habitanteCalle" },
    { id: "7", nombre: "Migrante", code: "migrante" },
]);

//ITEMS DE ETNIAS
const etnias = ref([
    { id: "0", nombre: "No aplica", code: "NA" },
    { id: "1", nombre: "Mestizo", code: "mestizo" },
    { id: "2", nombre: "Afrocolombiano", code: "afro" },
    { id: "3", nombre: "Indígena", code: "indigena" },
    { id: "4", nombre: "Palanquero", code: "palanquero" },
    { id: "5", nombre: "Razal", code: "razal" },
    { id: "6", nombre: "ROM", code: "rom" },
]);

//ITEMS DE nivel_estudios
const nivel_estudios = ref([
    { id: "0", nombre: "Ninguno", code: "NA" },
    { id: "1", nombre: "Primaria", code: "primaria" },
    { id: "2", nombre: "Secundaria", code: "secundaria" },
    { id: "3", nombre: "Tecnico", code: "tecnico" },
    { id: "4", nombre: "Tecnologico", code: "tecnologico" },
    { id: "5", nombre: "Universitario", code: "universitario" },
    { id: "6", nombre: "Postgrado", code: "postgrado" },
]);

//ITEMS DEL TIPO DE Servicios
const tipoServ = ref([
    { id: "0", nombre: "Uso internet - Estudio", code: "Uso internet-estudio" },
    { id: "1", nombre: "Uso internet - Ocio", code: "Uso internet-ocio" },
    { id: "2", nombre: "Capacitaciones", code: "capacitaciones" },
    { id: "3", nombre: "Préstamo de aulas", code: "prestamo aulas" },
    { id: "4", nombre: "Tramites", code: "tramites" },
    { id: "5", nombre: "Videojuegos", code: "videojuegos" },
]);

//step activo
const active = ref(0);
//validado
const isValidate = ref(false);
//abrir modal
const visible = ref(false);
//modal para anexo
const showModal = ref(false);
const selectedFile = ref(null);
//SABER SI SE ACTIVA EL INPUT DE OTROS
const IsNewGenero = ref(false);

watch(IsNewGenero, (value) => {
    if (value) {
        form.genero = "";
    }
});

//STEP PART
//prev
const prevStep = (num) => {
    active.value = num;
};
//next
const nextStep = (num) => {
    isValidate.value = false;
    switch (num) {
        case 1:
            if (
                form.nombres &&
                form.apellidos &&
                form.identificacion &&
                form.edad &&
                form.tipo_documento &&
                form.telefono &&
                form.direccion &&
                form.sector
            ) {
                isValidate.value = true;
            }
            break;

        default:
            break;
    }

    if (isValidate.value) {
        active.value = num;
    } else {
        if (!form.nombres) {
            form.errors.nombres = "Este campo es requerido.";
        }
        if (!form.identificacion) {
            form.errors.identificacion = "Este campo es requerido.";
        }
        if (!form.apellidos) {
            form.errors.apellidos = "Este campo es requerido.";
        }
        if (!form.edad) {
            form.errors.edad = "Este campo es requerido.";
        }
        if (!form.tipo_documento) {
            form.errors.tipo_documento = "Este campo es requerido.";
        }

        if (!form.direccion) {
            form.errors.direccion = "Este campo es requerido.";
        }
        if (!form.sector) {
            form.errors.sector = "Este campo es requerido.";
        }
        if (!form.telefono) {
            form.errors.telefono = "Este campo es requerido.";
        }
    }
};
//play button
const playInfo = () => {
    isFirstTime.value = false;
    const audio = infoAudio.value;
    audio.play();
    usePage().props.accesibilidad.audio = true;
};

//activar/desactivar sonido
const handleAudio = (num) => {
    isFirstTime.value = false;
    if (num == 0) {
        usePage().props.accesibilidad.audio = true;
    } else if (num == 1) {
        usePage().props.accesibilidad.audio = false;
    }
};

const closeModal = () => {
    visible.value = false;
    window.location.reload();
};

const handleFileChange = (event) => {
    selectedFile.value = event.target.files[0];
};

const handleAnexoChange = (event) => {
    form.anexo_documento = event.target.files[0];
};

const uploadDocument = () => {
    if (!selectedFile.value) return;

    const formData = new FormData();
    formData.append('anexo_documento', selectedFile.value);
    formData.append('identificacion', props.info.identificacion);

    axios.post('/updateAnexo', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((response) => {
        if (response.data.success) {
            showModal.value = false;
            // Actualizar info_usuario localmente
            if (info_usuario.value) {
                info_usuario.value.anexo_documento = 'uploaded';
            }
            // Proceder con el submit
            submitForm();
        } else {
            $toast.open({
                message: response.data.message || 'Error al cargar el documento.',
                type: 'error',
            });
        }
    }).catch((error) => {
        console.error('Error uploading document:', error);
        $toast.open({
            message: 'Error al cargar el documento. Intente nuevamente.',
            type: 'error',
        });
    });
};

const submitForm = () => {
    form.post(route("inscribirCurso"), {
        onSuccess: function () {
            swal({
                title: "Registro Guardado",
                text:
                    "proceso de Inscripción realizado, será notificado por Correo electrónico si es aprobado para empezar el curso o capacitación " +
                    props.info.nombre_oferta,
                icon: "success",
            }).then(() => {
                // Habilita el scroll automático y vuelve a la página anterior
                history.scrollRestoration = "auto";
                history.back();
            });
        },
        onError: function () {
            swal({
                title: "Registro NO Guardado",
                text: `Estamos teniendo inconvenientes al guardar el registro, por favor verificar si ya se registro en el curso de ${props.info.nombre_oferta} o vuelva a intentar más tarde.`,
                icon: "error",
            });
        },
    });
};

const submit = () => {
    // Verificar si el usuario está registrado y si tiene anexo_documento
    if (info_usuario.value && !info_usuario.value.anexo_documento) {
        showModal.value = true;
        return;
    }
    // Si no está registrado o ya tiene anexo, proceder
    submitForm();
};
</script>
