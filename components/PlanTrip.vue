<template>
  <section class="plan-section">
    <div class="container">
      <h2 class="section-title">{{ t('planTrip') }}</h2>

      <div class="plan-tabs">
        <button class="plan-tab active">{{ t('region') }}</button>
        <button class="plan-tab">{{ t('country') }}</button>
        <button class="plan-tab">{{ t('airport') }}</button>
        <button class="plan-tab">{{ t('city') }}</button>
      </div>

      <div class="plan-links">
        <div class="plan-column">
          <a href="#">{{ t('cheapTicketsParis') }}</a>
          <a href="#">{{ t('ticketsCanary') }}</a>
          <a href="#">{{ t('ticketsCatalonia') }}</a>
        </div>
        <div class="plan-column">
          <a href="#">{{ t('flightsTokyo') }}</a>
          <a href="#">{{ t('cheapTicketsBeijing') }}</a>
          <a href="#">{{ t('ticketsYerevan') }}</a>
        </div>
        <div class="plan-column">
          <a href="#">{{ t('ticketsBangkok') }}</a>
          <a href="#">{{ t('cheapTicketsIrkutsk') }}</a>
          <a href="#">{{ t('flightsDubai') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
const { t } = useI18n()
</script>

<style scoped>
.plan-section {
  padding: 40px 0 60px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.section-title {
  font-size: 24px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 16px;
}

.plan-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  overflow-x: auto;
}

.plan-tab {
  padding: 6px 20px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 13px;
  color: #333;
  cursor: pointer;
  white-space: nowrap;
}

.plan-tab.active {
  background: #f5f5f5;
  border-color: #999;
}

.plan-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px 40px;
}

.plan-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.plan-column a {
  font-size: 14px;
  color: #333;
}

.plan-column a:hover {
  color: #0047BB;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 22px;
  }

  .plan-links {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .plan-column a {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 20px;
  }
}
</style>