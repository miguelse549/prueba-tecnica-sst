<template>
  <div
    class="
      border
      bg-gray-100
      rounded-lg
      h-12
      flex
      items-center
      justify-center
      my-2
      font-bold
    "
  >
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style>
</style>