<template>
  <div class="min-h-screen border flex flex-col justify-between bg-gray-100">
    <header-filter />
    <div class="w-3/4 border mx-auto flex gap-8 flex-wrap justify-center">
      <card v-for="(item, index) in items" :key="index" :info="item" />
    </div>
    <paginator />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Paginator from "@/components/Paginator.vue";
import Card from "@/components/Card.vue";
import HeaderFilter from "@/components/Header.vue";

export default {
  name: "Character",

  data() {
    return {
      parameters: {
        name: "",
        status: "",
        species: "",
        gender: "",
        location: "",
        page: 1,
      },
    };
  },
  components: {
    Paginator,
    Card,
    HeaderFilter,
  },
  computed: {
    ...mapState({
      items: (state) => state.items,
    }),
  },

  methods: {
    ...mapActions(["getData"]),
  },
  created() {
    this.getData(this.parameters);
  },
};
</script>

<style></style>
