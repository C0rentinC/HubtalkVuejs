<template>
    <v-flex v-if="suppr" xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>{{item}}</div>
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
  props: ['item'],
  data() {
    return {
      suppr: true
    }
  },
  methods: {
    rm: function() {
      this.suppr = false   
    }
  }
}
</script>
