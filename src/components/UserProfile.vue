<template>
    <v-card class="pa-4">
        <v-avatar size="120" class="mb-4">
            <img :src="user.imageUrl" :alt="`Profile image of ${user.name}`">
        </v-avatar>
        <v-card-title class="text-h5">{{ user.name }}</v-card-title>
        <v-card-subtitle>{{ user.email }}</v-card-subtitle>
    </v-card>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    user: {
        type: Object,
        required: true
    }
});
</script>
  
<style scoped>
/* สไตล์ของ UserProfile ตามที่คุณต้องการ */
</style>
  
  
<style scoped>
.user-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem;
    background-color: #fff;
}

.user-profile__image {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-bottom: 1rem;
}

h2 {
    margin: 0.5rem 0;
}

p {
    color: #666;
}
</style>
  