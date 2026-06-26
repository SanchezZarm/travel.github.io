<template>
  <div>
    <AppHeader @open-login="showLogin = true" />
    <main style="padding-top: 20px;">
      <PopularDestinations />
      <PopularTours />
      <PlanTrip />
    </main>
    <AppFooter @open-login="showLogin = true" />
    <LoginModal v-model="showLogin" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import PopularDestinations from './components/PopularDestinations.vue'
import PopularTours from './components/PopularTours.vue'
import PlanTrip from './components/PlanTrip.vue'
import AppFooter from './components/AppFooter.vue'
import LoginModal from './components/LoginModal.vue'

const showLogin = ref(false)
</script>