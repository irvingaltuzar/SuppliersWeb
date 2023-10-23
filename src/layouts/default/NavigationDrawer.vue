<template>
   <v-navigation-drawer
        expand-on-hover
        rail
      >
     <v-list>
          <v-list-item
            prepend-avatar="@/assets/supplier-icon.svg"
            title="Proveedores"
            subtitle="Menú"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-account-edit" title="Registro Provedor" value="myfiles"></v-list-item>
         <!-- <v-list-item prepend-icon="mdi-account-search" title="Buscar Registro" value="shared"></v-list-item>-->
        </v-list>
      </v-navigation-drawer>
</template>

<script setup>
  //
</script>
<style>

</style>