<template>
  <div>
    <AppHeader @openLogin="showLogin = true" />
    <SearchForm />
    <PopularDestinations />
    <PopularTours />
    <PlanTrip />
    <AppFooter />
    <LoginModal v-model="showLogin" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showLogin = ref(false)
</script>