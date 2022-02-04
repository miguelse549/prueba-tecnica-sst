<template>
  <div>
    <modal
      @closeModal="closeModal"
      v-if="showModal"
      :dataDetails="dataDetails"
    />
  </div>

  <div>
    <div class="min-h-screen border flex flex-col justify-between bg-gray-100">
      <header-filter
        class="sticky top-0 z-10"
        @dataFilter="parameters = $event"
        @sortBy="sortBy = $event"
      />

      <div class="w-3/4 mx-auto flex gap-8 flex-wrap justify-center">
        <card
          v-for="(item, index) in items"
          :key="index"
          :info="item"
          @click="detailsCharacter(item.id)"
        />
      </div>
      <paginator @page="parameters.page = $event" />
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
import Paginator from "@/components/Paginator.vue";
import Card from "@/components/Card.vue";
import HeaderFilter from "@/components/Header.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "Character",
  data() {
    return {
      showModal: false,
      dataDetails: null,

      parameters: {
        name: "",
        status: "",
        species: "",
        gender: "",
        location: "",
        page: 1,
      },
      pagesChange: 0,
      sortBy: null,
    };
  },

  watch: {
    "parameters.page"(val) {
      this.parameters.page = val;
      this.getData(this.parameters);
    },
    parameters: {
      handler(val) {
        this.parameters = val;
        this.getData(this.parameters);
      },
      deep: true,
    },
    sortBy(val) {
      this.sortBy = val;
      this.orderFields(val);
    },
  },
  computed: {
    ...mapState({
      items: (state) => state.items,
    }),
  },
  components: {
    Paginator,
    Card,
    HeaderFilter,
    Modal,
  },

  methods: {
    ...mapActions(["getData"]),

    async detailsCharacter(id) {
      //console.log(id);
      // this.$router.push("/character/" + 5);
      const url = "https://rickandmortyapi.com/api/character/" + id;
      try {
        const { data } = await axios.get(url);
        this.dataDetails = data;
        this.dataDetails.coment = "";
        console.log(JSON.stringify(this.dataDetails));
      } catch (error) {
        console.log(error);
      }
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },

    orderFields(prop) {
      this.items.sort(this.comparateFields(prop));
    },

    comparateFields(prop) {
      return function (a, b) {
        if (a[prop] > b[prop]) {
          return 1;
        } else if (a[prop] < b[prop]) {
          return -1;
        }
        return 0;
      };
    },
  },
  created() {
    this.getData(this.parameters);
  },
};
</script>

<style></style>
