<template>
  <v-app>
    <default-bar />
<navigation-drawer/>
    <default-view />
     <v-footer color="#3f5465" app>
      <v-spacer></v-spacer>
      <span class="white--text">&copy; Grupo DMI 2023</span>
    </v-footer>
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import NavigationDrawer from './NavigationDrawer.vue'
  import DefaultView from './View.vue'
</script>
