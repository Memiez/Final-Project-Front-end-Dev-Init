<template>
  <v-app>
    <v-main>
      <v-container>
        <UserProfile :user="user" />
        <v-row>
          <v-col
            cols="12"
            md="4"
            v-for="project in projects"
            :key="project.title"
          >
            <v-card>
              <v-card-title>{{ project.title }}</v-card-title>
              <v-card-text>
                <v-progress-linear
                  :value="project.progress"
                  color="deep-purple"
                  height="10"
                ></v-progress-linear>
                <v-chip>{{ project.deadline }}</v-chip>
              </v-card-text>
              <v-card-actions>
                <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserProfile from './components/UserProfile.vue';

const user = {
  name: 'John Doe',
  email: 'john@example.com',
  imageUrl: 'https://via.placeholder.com/150'
};

const projects = ref([
  {
    title: 'Web Designing',
    progress: 60,
    deadline: '2 Days Left',
  },
  {
    title: 'Testing',
    progress: 50,
    deadline: '2 Days Left',
  },
  // เพิ่มโปรเจกต์อื่น ๆ ตามที่คุณต้องการ
]);
</script>
