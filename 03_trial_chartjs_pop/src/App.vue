<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>神奈川県内人口状況</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <SideNav/>
    <v-main>
      <v-container fluid fill-height align-start>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideNav from './components/SideNav'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    SideNav
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['toggleSideMenu'])
  }
};
</script>
