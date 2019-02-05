<template>
    <v-flex v-if="suppr" xs12 sm6 offset-sm3 pb-2>
      <v-card>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ici}}</h3>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat @click="rm()" color="orange">DELETE</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
</template>

<script>
export default {
  props: {item: {
    type: String,
    required: true,
    default: "",
  }},
  data() {
    return {
      suppr: true,
      ici: this.item
    }
  },
  methods: {
    rm: function() {
      console.log(this.ici)
      this.suppr = false   
    }
  }
}
</script>
