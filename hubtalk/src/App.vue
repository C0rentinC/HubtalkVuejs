<template>
  <div id="app">
    <div id="nav">
      <v-toolbar>
        <v-toolbar-title>Toolbar</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <router-link to="/">Home</router-link>
          <router-link to="/profil">Profil</router-link>
          <router-link to="/todolist">Todolist</router-link>
        </v-toolbar-items>
      </v-toolbar>
    </div>      
    <router-view/>
  </div>
</template>