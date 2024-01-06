<script setup lang="ts">
import { ref } from 'vue';
import { VApp, VMain, VNavigationDrawer, VList, VListItem, VBtn, VDivider, VIcon } from 'vuetify/lib';

const drawer = ref(true);
const rail = ref(true);
const toggleRail = () => {
  rail.value = !rail.value;
}
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer.value"
      :rail="rail.value"
      permanent
      @click="toggleRail"
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        nav
      >
        <template #append>
          <v-btn
            text
            icon
            @click.stop="toggleRail"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item icon="mdi-home-city" title="Home" value="home"></v-list-item>
        <v-list-item icon="mdi-account" title="My Account" value="account"></v-list-item>
        <v-list-item icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <!-- Your content here -->
    </v-main>
  </v-app>
</template>

<style>
/* Add custom styles here */
</style>
