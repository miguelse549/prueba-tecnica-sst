<template>
  <div class="h-screen border flex flex-col justify-between">
    <header-filter />
    <div class="w-3/4 border mx-auto">
      <card />
    </div>
    <paginator />
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
        page: 2,
      },
    };
  },
  components: {
    Paginator,
    Card,
    HeaderFilter,
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
