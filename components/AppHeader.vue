<template>
  <header class="header">
    <div class="header-top container">
      <div class="header-left">
        <a href="/" class="logo">
          <img src="/images/photoroom.png" alt="Travel Pulse" class="logo-img" />
          <div class="logo-text-wrapper">
            <span class="logo-text">Travel</span>
            <span class="logo-text">Pulse</span>
          </div>
        </a>
      </div>

      <div class="header-search" v-if="!isMobile">
        <div class="search-input-wrapper">
          <input type="text" :placeholder="t('search')" class="header-search-input" />
          <button class="search-btn">
            <img src="/images/search.png" />
          </button>
        </div>
      </div>

      <div class="header-right">
        <div class="lang-wrapper">
          <button class="lang-btn" @click="showLangDropdown = !showLangDropdown">
            {{ lang === 'ru' ? 'RUS' : 'ENG' }}
          </button>
          <div v-if="showLangDropdown" class="lang-dropdown">
            <button class="lang-option" :class="{ active: lang === 'ru' }" @click="changeLang('ru')">
              RUS
            </button>
            <button class="lang-option" :class="{ active: lang === 'en' }" @click="changeLang('en')">
              ENG
            </button>
          </div>
        </div>

        <button class="login-btn" @click="$emit('openLogin')">
          <img src="/images/icon.png" width="30" height="30" />
          <span class="login-text">{{ t('login') }}</span>
        </button>
        <button class="menu-btn">
          <img src="/images/menu.png" width="30" height="30" />
        </button>
      </div>
    </div>

    <div class="header-tabs container" v-if="!isMobile">
      <button class="tab-btn">
        <img src="/images/car.png" alt="car" width="20" height="20" class="tab-icon" />
        {{ t('carRental') }}
      </button>
      <button class="tab-btn">
        <img src="/images/airport.png" alt="airport" width="20" height="20" class="tab-icon" />
        {{ t('flights') }}
      </button>
      <button class="tab-btn">
        <img src="/images/bed.png" alt="bed" width="20" height="20" class="tab-icon" />
        {{ t('hotels') }}
      </button>
    </div>

    <div class="header-title container">
      <h1>{{ t('heroTitle') }}</h1>
    </div>

    <SearchForm v-if="!isMobile" />

    <div class="mobile-tour-form" v-else>
      <div class="mobile-from-field">
        <span class="mobile-from-label">Из Улан-Удэ</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>

      <div class="mobile-dest-field">
       <img src="/images/pointer2.png"/>
        <input type="text" :placeholder="t('countryCity')" class="mobile-dest-input" />
      </div>

      <div class="mobile-row">
        <div class="mobile-half-field">
        <img src="/images/calendar.png"/>
          <span class="mobile-half-text">{{ t('selectDate') }}</span>
        </div>
        <div class="mobile-half-field">
          <img src="/images/clock.png"/>
          <span class="mobile-half-text">Кол-во ночей</span>
        </div>
      </div>

      <div class="mobile-row">
        <div class="mobile-half-field">
          <img src="/images/customer.png"/>
          <span class="mobile-half-text">Кол-во людей</span>
        </div>
        <div class="mobile-half-field">
          <img src="/images/private.png"/>
          <span class="mobile-half-text">Выберите класс</span>
        </div>
      </div>

      <button class="mobile-search-btn">{{ t('searchTours') }}</button>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'
import SearchForm from './SearchForm.vue'

defineEmits(['openLogin'])

const { t, setLang, lang } = useI18n()
const showLangDropdown = ref(false)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)

const isMobile = computed(() => windowWidth.value <= 768)

const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

const changeLang = (newLang) => {
  setLang(newLang)
  showLangDropdown.value = false
}
</script>

<style scoped>
.header {
  background: #0047BB;
  padding-bottom: 20px;
  position: relative;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.header-top {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-wrap: wrap;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  text-decoration: none;
}

.logo-img {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.logo-text-wrapper {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-text {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
}

.header-search {
  flex: 1;
  max-width: 849px;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.header-search-input {
  width: 100%;
  padding: 10px 40px 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  background: #fff;
  color: #333;
}

.header-search-input::placeholder {
  color: #999;
}

.search-btn {
  position: absolute;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.lang-wrapper {
  position: relative;
}

.lang-btn {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
}

.lang-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: #FF6B00;
  border-radius: 8px;
  padding: 8px 12px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 80px;
}

.lang-option {
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 2px 0;
}

.lang-option:hover {
  opacity: 0.8;
}

.login-btn {
  display: flex !important;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
}

.login-text {
  display: inline-block !important;
  white-space: nowrap;
  color: #fff;
  font-size: 14px;
}

.menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.header-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 20px;
  background: #fff;
  color: #333;
  font-size: 13px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-btn:hover {
  background: #f0f0f0;
}

.tab-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.header-title h1 {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 20px;
}

.mobile-tour-form {
  padding: 0 16px 24px;
}

.mobile-from-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 12px;
  border-bottom: 1px solid rgba(255,255,255,0.25);
  margin-bottom: 12px;
  cursor: pointer;
}

.mobile-from-label {
  color: #fff;
  font-size: 15px;
  font-weight: 500;
}

.mobile-dest-field {
  background: #fff;
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.mobile-dest-icon {
  font-size: 18px;
}

.mobile-dest-input {
  border: none;
  outline: none;
  font-size: 14px;
  flex: 1;
  background: transparent;
  color: #333;
}

.mobile-dest-input::placeholder {
  color: #999;
}

.mobile-row {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.mobile-half-field {
  flex: 1;
  background: #fff;
  border-radius: 12px;
  padding: 14px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.mobile-half-icon {
  font-size: 16px;
}

.mobile-half-text {
  font-size: 13px;
  color: #666;
  flex: 1;
}

.mobile-search-btn {
  width: 100%;
  padding: 16px;
  background: #FF6B00;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 6px;
}

.mobile-search-btn:active {
  background: #e55f00;
}

@media (max-width: 768px) {
  .header-top {
    gap: 125px;
  }

  .header-title h1 {
    font-size: 22px;
    line-height: 1.3;
  }
}

@media (max-width: 480px) {
  .header-title h1 {
    font-size: 20px;
  }
  
  .login-text {
    font-size: 13px;
  }
}
</style>