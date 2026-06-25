<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <a href="#" class="footer-link">{{ t('moreDetails') }}</a>
          <a href="#" class="footer-link">{{ t('aboutUs') }}</a>
          <a href="#" class="footer-link">{{ t('forPartners') }}</a>
          <a href="#" class="footer-link">{{ t('trips') }}</a>
        </div>
        <div class="footer-column">
          <a href="#" class="footer-link">{{ t('reference') }}</a>
          <a href="#" class="footer-link">{{ t('privacySettings') }}</a>
          <a href="#" class="footer-link" @click.prevent="$emit('openLogin')">{{ t('loginLink') }}</a>
        </div>
        <div class="footer-column">
          <a href="#" class="footer-link">{{ t('cookiePolicy') }}</a>
          <a href="#" class="footer-link">{{ t('privacyPolicy') }}</a>
          <a href="#" class="footer-link">{{ t('termsOfService') }}</a>
          <a href="#" class="footer-link">{{ t('ourContacts') }}</a>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-locale">{{ t('localeLabel') }}</div>
      </div>

      <div class="footer-copyright">{{ t('copyright') }}</div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
defineEmits(['openLogin'])
const { t } = useI18n()
</script>

<style scoped>
.footer {
  background: #0047BB;
  padding: 40px 0 20px;
  color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 32px;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: #fff;
  font-size: 13px;
  opacity: 0.9;
  cursor: pointer;
}

.footer-link:hover {
  opacity: 1;
  text-decoration: underline;
}

.footer-bottom {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.footer-locale {
  padding: 6px 14px;
  background: #fff;
  color: #333;
  border-radius: 4px;
  font-size: 13px;
}

.footer-copyright {
  text-align: center;
  font-size: 12px;
  opacity: 0.7;
  padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,0.2);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .footer-bottom {
    justify-content: center;
  }

  .footer-copyright {
    font-size: 11px;
  }
}
</style>