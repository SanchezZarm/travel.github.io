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
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
import SearchForm from '~/components/SearchForm.vue'
import PopularDestinations from '~/components/PopularDestinations.vue'
import PopularTours from '~/components/PopularTours.vue'
import PlanTrip from '~/components/PlanTrip.vue'
import LoginModal from '~/components/LoginModal.vue'

const showLogin = ref(false)
</script>