<template>
  <v-app>
    <v-app-bar fixed app>
      <img class="logo" src="/logo.png" />
      <v-app-bar-title>
        <h1 class="text-h3">Meraklis.io</h1>
      </v-app-bar-title>
      <v-spacer />
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="drawer = !drawer" />
      <nav v-else>
        <v-btn text large href="#services">Services</v-btn>
        <v-btn text large href="#apps">Apps</v-btn>
        <v-btn text large href="#contact">Contact</v-btn>
      </nav>
    </v-app-bar>
    <div v-if="$vuetify.breakpoint.smAndDown">
      <v-navigation-drawer v-model="drawer"
          fixed
          temporary
          style="height: 100vh">
        <v-list nav>
          <v-list-item href="#services">Services</v-list-item>
          <v-list-item href="#apps">Apps</v-list-item>
          <v-list-item href="#contact">Contact</v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <v-main>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <v-footer fixed app >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true
  })
}
</script>
<style>
.logo {
  height: 32px;
  width: 52px;
  margin-right: 12px;
  margin-bottom: 10px;
}
</style>
