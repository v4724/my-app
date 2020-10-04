<template>
  <v-container>
    <p>{{ value }}</p>
  </v-container>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>