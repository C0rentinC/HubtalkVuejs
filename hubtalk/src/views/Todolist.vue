<template>
  <v-container>

  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-btn
        slot="activator"
        color="red lighten-2"
        dark
      >
        Click Me
      </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

          <input v-model="message" placeholder="modifiez-moi">
          <p>Le message est : {{ message }}</p>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="add()"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    <v-btn flat @click="add()" color="orange">ADD</v-btn>
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
       dialog: false,
      lists: ["bonjour", "hello"],
      message: "lol"
    };
  },
  methods: {
    add: function () {
      this.dialog = true
      this.lists.push(this.message)
    }
  },
  components: {
    Todolist
  }
};
</script>