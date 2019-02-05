<template>
  <div id="app">
    <div id="nav">
      <v-toolbar>
        <v-toolbar-title>Toolbar</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/">Home</v-btn>
          <v-btn flat to="/profil">Profil</v-btn>
          <v-btn flat to="/todolist">Todolist</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>      
    <router-view/>
  </div>
</template>