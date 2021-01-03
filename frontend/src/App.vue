<template>
  <div id="app" class="container mx-auto">
    <div id="nav" class="bg-red-700">
      <router-link to="/">Home</router-link>
      <router-link to="/my-links">My Links</router-link>
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>