<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/">Home</router-link>
      </div>
      <div>      
        <router-link to="/profil">Profil</router-link>
      </div>
      <div>      
        <router-link to="/todolist">Todolist</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>