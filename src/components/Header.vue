<template>
  <div class="h-20 mb-8 flex justify-evenly items-center bg-gray-100 shadow-xl ">
    <div>
      <img class="w-40" src="imagenes/logo.png" alt="logo" />
    </div>
    <div class="flex items-center gap-x-4">
      <input placeholder="Nombre" type="text" />
      <input placeholder="Especie" type="text" />
      <input placeholder="Locación" type="text" />

      <label for="gender">Estado:</label>
      <select name="status" id="status">
        <option
          v-for="(state, index) in status"
          :key="index"
          :value="state.value"
        >
          {{ state.label }}
        </option>
      </select>

      <label for="gender">Género:</label>
      <select name="gender" id="gender">
        <option
          v-for="(gender, index) in genders"
          :key="index"
          :value="gender.value"
        >
          {{ gender.label }}
        </option>
      </select>

      <button class="rounded-md border-2 py-2 px-4 border-green-700 font-bold">
        <span class="text-green-700">Filtrar</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genders: [
        { value: "male", label: "Masculino" },
        { value: "female", label: "Femenino" },
        { value: "genderless", label: "Sin género" },
        { value: "unknown", label: "Desconocido" },
      ],
      status: [
        { value: "alive", label: "Vivo" },
        { value: "dead", label: "Muerto" },
        { value: "unknown", label: "Desconocido" },
      ],
    };
  },
};
</script>

<style scoped>

input,select {
  height: 40px;
  padding-left: 10px;
  border-bottom: 2px solid;
  @apply border-green-700;
  @apply rounded-md
}

input:focus,select:focus{
  outline: none;
}


</style>
