<template>
  <div class="h-auto mb-8 flex justify-center xl:justify-evenly xl:items-center bg-gray-100 shadow-xl xl:h-20 ">
    <div>
      <img class="hidden xl:block xl:w-40" src="imagenes/logo.png" alt="logo" />
    </div>
    <div class="flex items-center flex-col sm:flex-row flex-wrap justify-center gap-y-4 gap-x-4 my-2 ">
      <input
        v-model="dataFilter.name"
        placeholder="Nombre"
        type="text"
        @keyup="changeFilter"
      />
      <input
        v-model="dataFilter.species"
        placeholder="Especie"
        type="text"
        @keyup="changeFilter"
      />
  

      <label for="gender">Estado:</label>
      <select
        v-model="dataFilter.status"
        name="status"
        id="status"
        @change="changeFilter"
      >
      
        <option
          v-for="(state, index) in status"
          :key="index"
          :value="state.value"
        >
          {{ state.label }}
        </option>
      </select>

      <label for="gender">Género:</label>
      <select
        v-model="dataFilter.gender"
        name="gender"
        id="gender"
        @change="changeFilter"
      >
        <option
          v-for="(gender, index) in genders"
          :key="index"
          :value="gender.value"
        >
          {{ gender.label }}
        </option>
      </select>

      <!-- <button class="rounded-md border-2 py-2 px-4 border-green-700 font-bold" @click="changeFilter">
        <span class="text-green-700">Filtrar</span>
      </button> -->
    </div>

    <!-- <div>
      <button class="rounded-md border-2 py-2 px-4 border-green-700 font-bold">
        <span class="text-green-700">Filtros</span>
      </button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataFilter: {
        page: 1,
      },
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
  methods: {
    changeFilter() {
      this.$emit("dataFilter", this.dataFilter);
      //console.log(JSON.stringify(this.dataFilter));
    },
  },
};
</script>

<style scoped>
input,
select {
  height: 40px;
  padding-left: 10px;
  border-bottom: 2px solid;
  @apply border-green-700;
  @apply rounded-md;
}

input:focus,
select:focus {
  outline: none;
}
</style>
