<template>
  <div
    class="w-64 h-auto rounded-xl shadow-xl bg-white transform hover:scale-105 cursor-pointer"
  >
    <div>
      <img class="rounded-t-xl" :src="info.image" alt="image" />
    </div>

    <div class="font-bold py-5">
      <p class="transform">
        Name: <span class="font-normal">{{ info.name }}</span>
      </p>
      <p>
        Status: <span class="font-normal">{{ info.status }}</span>
      </p>
      <p>
        Especie: <span class="font-normal">{{ info.species }}</span>
      </p>
      <p>
        Gender: <span class="font-normal">{{ info.gender }}</span>
      </p>
      <p>
        Location: <span class="font-normal">{{ info.location.name }}</span>
      </p>
      <p>Cantidad comentarios:<span>10</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
