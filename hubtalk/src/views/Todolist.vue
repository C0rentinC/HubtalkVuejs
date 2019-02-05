<template>
  <v-container>
    <v-layout wrap>
      <div v-for="item in lists" :key="item.id">
        <Todolist :message="item"/>
      </div>
    </v-layout>
  </v-container>
</template>


<script>
import Todolist from "@/components/TodolistComponent.vue";

export default {
  data() {
    return {
      lists: ["bonjour", "hello"]
    };
  },
  components: {
    Todolist
  }
};
</script>