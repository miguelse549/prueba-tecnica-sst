<template>
  <div
    class="
      fixed
      h-full
      w-full
      bg-black bg-opacity-80
      flex
      items-center
      justify-center
      inset-0
      z-50
    "
  >
    <div class="w-80 h-84 rounded-xl flex flex-col justify-center bg-white">
      <div class="prueba flex flex-col justify-center items-center">
        <div
          class="bg-cover bg-center h-60 w-full rounded-t-xl"
          :style="{ 'background-image': 'url(' + dataDetails.image + ')' }"
        >
          <!-- <img
            class="rounded-t-xl w-full h-auto bg-contain"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="image"
          /> -->
          <i
            class="fas fa-times-circle text-black text-2xl cursor-pointer ml-72"
            @click="$emit('closeModal')"
          ></i>
        </div>
      </div>

      <div class="px-8 pt-3 font-bold">
        <p class="my-2">
          Name: <span class="font-thin"> {{ dataDetails.name }} </span>
        </p>
        <hr />
        <p class="my-2">
          Status: <span class="font-thin">{{ dataDetails.status }}</span>
        </p>
        <hr />
        <p class="my-2">
          Especie: <span class="font-thin">{{ dataDetails.species }} </span>
        </p>
        <hr />
        <p class="my-2">
          Gender: <span class="font-thin">{{ dataDetails.gender }}</span>
        </p>
        <hr />
        <p class="my-2">
          Location:
          <span class="font-thin">{{ dataDetails.location.name }}</span>
        </p>
        <hr />
      </div>

      <div class="font-bold">
        <p class="my-2">Comentarios:</p>
        <textarea :v-model="dataDetails.coment" class="border"></textarea>
        <button
          class="rounded-md border-2 py-2 px-4 border-green-700 font-bold"
          @click="addComent(dataDetails.coment)"
        >
          <span class="text-green-700">Agregar comentario</span>
        </button>
      </div>

      <div class="my-4 px-8 overflow-y-auto h-32">
        <item />
        <item />
        <item />
        <item />
        <item />
        <item />
        <item />
        <item />
        <item />
        <item />
        <item />
        <item />
        <item />
        <item />
        <item />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
export default {
  name: "Modal",
  props: {
    dataDetails: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  components: {
    Item,
  },
  methods: {
    addComent(coment) {
      console.log(coment);
    },
  },
  created() {
    console.log(this.dataDetails.episode);
  },
};
</script>

<style scoped>
</style>
