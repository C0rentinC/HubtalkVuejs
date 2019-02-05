<template>
    <Home/>
</template>

<script>
import Home from "@/components/HomeComponent.vue";

export default {
  data() {
    return {
      value: "bonjour"
    };
  },
  components: {
    Home
  }
};
</script>
