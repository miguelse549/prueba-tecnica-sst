<template>
  <div class="border h-20">
    <input placeholder="Nombre" type="text" />
    <input placeholder="Especie" type="text" />
    <input placeholder="Locación" type="text" />

    <label for="gender">Estado</label>
    <select name="status" id="status">
      <option
        v-for="(state, index) in status"
        :key="index"
        :value="state.value"
      >
        {{ state.label }}
      </option>
    </select>

    <label for="gender">Género</label>
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

<style></style>
