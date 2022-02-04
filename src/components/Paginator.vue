<template>
  <div class="border text-green-700 my-10">
    <button
      class="rounded-md border-2 py-2 px-4 border-green-700 font-bold"
      @click="previous"
    >
      Anterior
    </button>
    <span class="text-black mx-5 font-bold"
      >Pagina {{ page }} de {{ paginator.pages }}
    </span>
    <button
      class="rounded-md border-2 py-2 px-4 border-green-700 font-bold"
      @click="next"
    >
      Siguiente
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    ...mapState({
      paginator: (state) => state.paginator,
    }),
  },
  methods: {
    next() {
      if (this.page < this.paginator.pages) {
        this.page++;
        this.$emit("page", this.page);
      }
    },
    previous() {
      if (this.page > 1) {
        this.page--;
        this.$emit("page", this.page);
      }
    },
  },
};
</script>

<style>
</style>
