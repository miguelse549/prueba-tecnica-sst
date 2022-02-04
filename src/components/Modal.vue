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
    <div
      class="
        w-72
        md:w-1/3
        h-84
        rounded-xl
        flex flex-col
        justify-center
        bg-white
      "
    >
      <div class="prueba flex flex-col justify-center items-center">
        <div
          class="
            bg-cover bg-center bg-no-repeat
            h-56
            md:h-96
            w-full
            rounded-t-xl
            bg-gray-300
          "
          :style="{ 'background-image': 'url(' + dataDetails.image + ')' }"
        >
          <!-- <img
            class="rounded-t-xl w-full h-auto bg-contain"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="image"
          /> -->
          <i
            class="
              fas
              fa-times-circle
              text-white text-2xl
              cursor-pointer
              flex
              justify-end
              mx-2
            "
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
        <p class="my-2">Episodios:</p>
        <hr />
      </div>

      <!-- <div class="font-bold">
        <p class="my-2">Comentarios:</p>
        <textarea :v-model="dataDetails.coment" class="border"></textarea>
        <button
          class="rounded-md border-2 py-2 px-4 border-green-700 font-bold"
          @click="addComent(dataDetails.coment)"
        >
          <span class="text-green-700">Agregar comentario</span>
        </button>

        <p class="my-1">Episodios:</p>
      </div> -->

      <div class="my-4 px-8 overflow-y-auto h-32">
        <item
          v-for="(episode, index) in episodes"
          :key="index"
          :name="episode.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Item from "@/components/Item.vue";
export default {
  name: "Modal",
  props: {
    dataDetails: {
      type: Object,
    },
  },
  data() {
    return {
      episodes: [],
    };
  },
  components: {
    Item,
  },
  methods: {
    addComent(coment) {
      console.log(coment);
    },
    async getEpisodes() {
      const urls = this.dataDetails.episode;

      for (const url of urls) {
        try {
          const { data } = await axios.get(url);
          this.episodes.push({ name: data.name, airdate: data.air_date });
        } catch (error) {
          console.log(error);
        }
      }
      console.log(JSON.stringify(this.episodes));
    },
  },
  created() {
    this.getEpisodes();
    // console.log(this.dataDetails.episode);
  },
};
</script>

<style scoped>
</style>
