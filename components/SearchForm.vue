<template>
  <section class="search-section" ref="searchSection">
    <div class="container">
      <div class="search-row">
        <div class="search-field" @click="openDropdown('from')">
          <span class="field-label">{{ t('from') }}</span>
          <img class="line" alt="Line" src="/images/line-1-2.svg" />
          <span class="field-value">{{ fromCity }}</span>
          <div v-if="activeDropdown === 'from'" class="dropdown">
            <div class="dropdown-item" @click.stop="selectFrom('Россия (RU)')">
              <img src="/images/flag.png" alt="flag" class="dropdown-icon-img" />
              <div>
                <div class="dropdown-name">Россия (RU)</div>
                <div class="dropdown-sub">Россия</div>
              </div>
            </div>
            <div class="dropdown-item" @click.stop="selectFrom('Москва (Любой)')">
              <img src="/images/pointer.png" alt="pointer" class="dropdown-icon-img" />
              <div>
                <div class="dropdown-name">Москва (Любой)</div>
                <div class="dropdown-sub">Россия</div>
              </div>
            </div>
            <div class="dropdown-item" @click.stop="selectFrom('Санкт-Петербург Пулково (LED)')">
              <img src="/images/airplane.png" alt="airplane" class="dropdown-icon-img" />
              <div>
                <div class="dropdown-name">Санкт-Петербург Пулково (LED)</div>
                <div class="dropdown-sub">Россия</div>
              </div>
            </div>
            <div class="dropdown-item" @click.stop="selectFrom('Казань (KZN)')">
              <img src="/images/airplane.png" alt="airplane" class="dropdown-icon-img" />
              <div>
                <div class="dropdown-name">Казань (KZN)</div>
                <div class="dropdown-sub">Россия</div>
              </div>
            </div>
            <div class="dropdown-item" @click.stop="selectFrom('Сочи (AER)')">
              <img src="/images/airplane.png" alt="airplane" class="dropdown-icon-img" />
              <div>
                <div class="dropdown-name">Сочи (AER)</div>
                <div class="dropdown-sub">Россия</div>
              </div>
            </div>
            <div class="dropdown-item" @click.stop="selectFrom('Moma (MQJ)')">
              <img src="/images/airplane.png" alt="airplane" class="dropdown-icon-img" />
              <div>
                <div class="dropdown-name">Moma (MQJ)</div>
                <div class="dropdown-sub">Россия</div>
              </div>
            </div>
            <div class="dropdown-item" @click.stop="selectFrom('Москва Шереметьево (SVO)')">
              <img src="/images/airplane.png" alt="airplane" class="dropdown-icon-img" />
              <div>
                <div class="dropdown-name">Москва Шереметьево (SVO)</div>
                <div class="dropdown-sub">Россия</div>
              </div>
            </div>
            <div class="dropdown-item" @click.stop="selectFrom('Москва Внуково (VKO)')">
              <img src="/images/airplane.png" alt="airplane" class="dropdown-icon-img" />
              <div>
                <div class="dropdown-name">Москва Внуково (VKO)</div>
                <div class="dropdown-sub">Россия</div>
              </div>
            </div>
            <div class="dropdown-item" @click.stop="selectFrom('Москва Жуковский (ZIA)')">
              <img src="/images/airplane.png" alt="airplane" class="dropdown-icon-img" />
              <div>
                <div class="dropdown-name">Москва Жуковский (ZIA)</div>
                <div class="dropdown-sub">Россия</div>
              </div>
            </div>
          </div>
        </div>

        <div class="search-field" @click="openDropdown('to')">
          <span class="field-label">{{ t('to') }}</span>
          <img class="line-2" alt="Line" src="/images/line-1-2.svg" />
          <span class="field-value" :class="{ placeholder: !toCity }">{{ toCity || t('countryCity') }}</span>
          <div v-if="activeDropdown === 'to'" class="dropdown to-dropdown">
            <div class="dropdown-item" @click.stop="closeAllDropdowns()">
              <img src="/images/search.png" alt="search" class="dropdown-icon-img" />
              <div class="dropdown-name" style="color: #0047BB; font-weight: 600;">{{ t('searchEverywhere') }}</div>
            </div>
            <div class="dropdown-item" @click.stop="closeAllDropdowns()">
              <img src="/images/airplane.png" alt="airplane" class="dropdown-icon-img" />
              <div class="dropdown-name" style="color: #0047BB; font-weight: 600;">{{ t('complexRoute') }}</div>
            </div>
          </div>
        </div>

        <div class="search-field" @click="toggleCalendar('depart')">
          <span class="field-label">{{ t('there') }}</span>
          <img class="line-3" alt="Line" src="/images/line-1-2.svg" />
          <span class="field-value" :class="{ placeholder: !departDate }">{{ departDate || t('selectDate') }}</span>
        </div>

        <div class="search-field date-field" @click="toggleCalendar('return')">
          <span class="field-label">{{ t('back') }}</span>
          <img class="line-3" alt="Line" src="/images/line-1-2.svg" />
          <span class="field-value" :class="{ placeholder: !returnDate }">{{ returnDate || t('selectDate') }}</span>
        </div>

        <div class="search-field" @click="openDropdown('travelers')">
          <span class="field-label">{{ t('travelers') }}</span>
          <img class="line-3" alt="Line" src="/images/line-1-4.svg" />
          <span class="field-value">{{ travelersText }}</span>
          <div v-if="activeDropdown === 'travelers'" class="dropdown travelers-dropdown">
            <div class="traveler-row">
              <div class="traveler-info">
                <div class="traveler-label">{{ t('adultsLabel') }}</div>
                <div class="traveler-sub">{{ t('adultsSub') }}</div>
              </div>
              <div class="traveler-controls">
                <button class="counter-btn" @click.stop="adults > 0 && adults--">−</button>
                <span class="counter-value">{{ adults }}</span>
                <button class="counter-btn" @click.stop="adults++">+</button>
              </div>
            </div>
            <div class="traveler-row">
              <div class="traveler-info">
                <div class="traveler-label">{{ t('childrenLabel') }}</div>
                <div class="traveler-sub">{{ t('childrenSub') }}</div>
              </div>
              <div class="traveler-controls">
                <button class="counter-btn" @click.stop="children > 0 && children--">−</button>
                <span class="counter-value">{{ children }}</span>
                <button class="counter-btn" @click.stop="children++">+</button>
              </div>
            </div>
          </div>
        </div>

        <div class="search-field" @click="openDropdown('class')">
          <span class="field-label">{{ t('class') }}</span>
          <img class="line-3" alt="Line" src="/images/line-1-5.svg" />
          <span class="field-value">{{ selectedClass }}</span>
          <div v-if="activeDropdown === 'class'" class="dropdown class-dropdown">
            <div class="class-dropdown-title">{{ t('cabinClass') }}</div>
            <div class="class-option" :class="{ active: selectedClass === t('economy') }" @click.stop="selectClass(t('economy'))">
              {{ t('economy') }}
            </div>
            <div class="class-option" :class="{ active: selectedClass === t('premiumEconomy') }" @click.stop="selectClass(t('premiumEconomy'))">
              {{ t('premiumEconomy') }}
            </div>
            <div class="class-option" :class="{ active: selectedClass === t('businessClass') }" @click.stop="selectClass(t('businessClass'))">
              {{ t('businessClass') }}
            </div>
            <div class="class-option" :class="{ active: selectedClass === t('firstClass') }" @click.stop="selectClass(t('firstClass'))">
              {{ t('firstClass') }}
            </div>
          </div>
        </div>

        <button class="search-btn-main" @click.stop="closeAllDropdowns()">{{ t('searchBtn') }}</button>
      </div>

      <div v-if="showCalendar" class="calendar-popup">
        <div class="calendar-header-row">
          <button class="cal-tab active">{{ t('specificDates') }}</button>
          <button class="cal-tab">{{ t('flexibleDates') }}</button>
          <button class="cal-close" @click.stop="closeAllDropdowns()">✕</button>
        </div>
        <div class="calendar-trip-type">
          <button class="trip-type-btn active">{{ t('roundTrip') }}</button>
        </div>

        <div class="calendar-body">
          <div class="calendar-month">
            <div class="month-nav">
              <button class="month-arrow">‹</button>
              <h3>Июнь</h3>
            </div>
            <div class="cal-grid">
              <span class="cal-day-name">пн</span>
              <span class="cal-day-name">вт</span>
              <span class="cal-day-name">ср</span>
              <span class="cal-day-name">чт</span>
              <span class="cal-day-name">пт</span>
              <span class="cal-day-name">сб</span>
              <span class="cal-day-name">вс</span>
              <span class="cal-day empty"></span>
              <span class="cal-day empty"></span>
              <span class="cal-day empty"></span>
              <span class="cal-day empty"></span>
              <span class="cal-day empty"></span>
              <span class="cal-day empty"></span>
              <span class="cal-day">1</span>
              <span class="cal-day">2</span>
              <span class="cal-day">3</span>
              <span class="cal-day">4</span>
              <span class="cal-day">5</span>
              <span class="cal-day selected">6</span>
              <span class="cal-day">7</span>
              <span class="cal-day">8</span>
              <span class="cal-day">9</span>
              <span class="cal-day">10</span>
              <span class="cal-day">11</span>
              <span class="cal-day">12</span>
              <span class="cal-day">13</span>
              <span class="cal-day">14</span>
              <span class="cal-day">15</span>
              <span class="cal-day">16</span>
              <span class="cal-day">17</span>
              <span class="cal-day">18</span>
              <span class="cal-day">19</span>
              <span class="cal-day">20</span>
              <span class="cal-day">21</span>
              <span class="cal-day">22</span>
              <span class="cal-day">23</span>
              <span class="cal-day">24</span>
              <span class="cal-day">25</span>
              <span class="cal-day">26</span>
              <span class="cal-day">27</span>
              <span class="cal-day">28</span>
              <span class="cal-day">29</span>
              <span class="cal-day">30</span>
            </div>
          </div>

          <div class="calendar-month">
            <div class="month-nav">
              <h3>Июль</h3>
              <button class="month-arrow">›</button>
            </div>
            <div class="cal-grid">
              <span class="cal-day-name">пн</span>
              <span class="cal-day-name">вт</span>
              <span class="cal-day-name">ср</span>
              <span class="cal-day-name">чт</span>
              <span class="cal-day-name">пт</span>
              <span class="cal-day-name">сб</span>
              <span class="cal-day-name">вс</span>
              <span class="cal-day empty"></span>
              <span class="cal-day">1</span>
              <span class="cal-day">2</span>
              <span class="cal-day">3</span>
              <span class="cal-day">4</span>
              <span class="cal-day">5</span>
              <span class="cal-day">6</span>
              <span class="cal-day">7</span>
              <span class="cal-day">8</span>
              <span class="cal-day">9</span>
              <span class="cal-day">10</span>
              <span class="cal-day">11</span>
              <span class="cal-day">12</span>
              <span class="cal-day">13</span>
              <span class="cal-day">14</span>
              <span class="cal-day">15</span>
              <span class="cal-day">16</span>
              <span class="cal-day">17</span>
              <span class="cal-day">18</span>
              <span class="cal-day">19</span>
              <span class="cal-day">20</span>
              <span class="cal-day">21</span>
              <span class="cal-day">22</span>
              <span class="cal-day">23</span>
              <span class="cal-day">24</span>
              <span class="cal-day">25</span>
              <span class="cal-day">26</span>
              <span class="cal-day">27</span>
              <span class="cal-day">28</span>
              <span class="cal-day">29</span>
              <span class="cal-day">30</span>
              <span class="cal-day">31</span>
            </div>
          </div>
        </div>

        <div class="calendar-footer">
          <span class="calendar-hint">{{ t('selectDeparture') }}</span>
          <button class="calendar-apply" @click.stop="closeAllDropdowns()">{{ t('apply') }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, lang } = useI18n()

const fromCity = ref('Иркутск (IKT)')
const toCity = ref('')
const departDate = ref('')
const returnDate = ref('')
const adults = ref(1)
const children = ref(0)
const selectedClass = ref('Эконом')

 fromCity.value = t('Иркутск(IKT)')
  selectedClass.value = t('economy')

watch(lang, () => {
  fromCity.value = t('Irkutsk (IKT)')
  selectedClass.value = t('economy')
})

const activeDropdown = ref(null)
const showCalendar = ref(false)
const calendarMode = ref('depart')
const searchSection = ref(null)

const months = computed(() => t('months').split(','))
const weekdays = computed(() => t('weekdays').split(','))

const openDropdown = (name) => {
  if (activeDropdown.value === name) {
    activeDropdown.value = null
  } else {
    activeDropdown.value = name
  }
  showCalendar.value = false
}

const closeAllDropdowns = () => {
  activeDropdown.value = null
  showCalendar.value = false
}

const toggleCalendar = (mode) => {
  calendarMode.value = mode || 'depart'
  if (showCalendar.value) {
    showCalendar.value = false
    activeDropdown.value = null
  } else {
    activeDropdown.value = 'calendar'
    showCalendar.value = true
  }
}

const selectDate = (date, mode) => {
  if (mode === 'depart') {
    departDate.value = date
  } else {
    returnDate.value = date
  }
}

const handleClickOutside = (event) => {
  if (searchSection.value && searchSection.value.contains(event.target)) {
    return
  }
  closeAllDropdowns()
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const selectFrom = (city) => {
  fromCity.value = city
  closeAllDropdowns()
}

const selectClass = (cls) => {
  selectedClass.value = cls
  closeAllDropdowns()
}

const travelersText = computed(() => {
  const parts = []
  if (adults.value > 0) {
    const adultWord = adults.value === 1 ? t('adult') : t('adults')
    parts.push(`${adults.value} ${adultWord}`)
  }
  if (children.value > 0) {
    const childWord = children.value === 1 ? t('child') : t('children')
    parts.push(`${children.value} ${childWord}`)
  }
  return parts.join(', ') || `1 ${t('adult')}`
})
</script>

<style scoped>
.search-section {
  padding: 0 0 24px;
  position: relative;
  background: #0047BB;
}
.search-row {
  display: flex;
  gap: 8px;
  align-items: stretch;
}
.search-field {
  position: relative;
  flex: 1;
  min-width: 0;
  background: #ffffff;
  border: 1px solid #dce1e8;
  border-radius: 10px;
  padding: 10px 14px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  min-height: 62px;
  transition: all 0.2s ease;
}

.search-field:hover {
  border-color: #b0b8c4;
  background: #f8f9fb;
  box-shadow: 0 2px 8px rgba(0, 40, 100, 0.06);
}

.field-label {
  font-size: 11px;
  color: #8893a3;
  font-weight: 500;
  margin-bottom: 4px;
  line-height: 1.2;
}

.field-value {
  font-size: 15px;
  font-weight: 600;
  color: #1a1f2b;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.field-value.placeholder {
  color: #5a6474;
  font-weight: 500;
}

.search-btn-main {
  padding: 0 36px;
  background: #FF6B00;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  min-height: 62px;
  flex-shrink: 0;
  transition: background 0.2s;
  box-shadow: 0 4px 12px rgba(255, 107, 0, 0.25);
}

.search-btn-main:hover {
  background: #e55f00;
}

.dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #e2e6ed;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 20, 60, 0.15);
  z-index: 100;
  max-height: 320px;
  overflow-y: auto;
}

.to-dropdown {
  min-width: 280px;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  cursor: pointer;
  transition: background 0.15s;
}

.dropdown-item:hover {
  background: #f5f7fa;
}

.dropdown-icon {
  font-size: 14px;
  width: 20px;
  text-align: center;
}

.dropdown-name {
  font-size: 13px;
  font-weight: 500;
  color: #333;
}

.dropdown-sub {
  font-size: 11px;
  color: #999;
}

.travelers-dropdown {
  min-width: 260px;
  padding: 12px;
}

.traveler-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f0f2f5;
}

.traveler-row:last-child {
  border-bottom: none;
}

.traveler-info {
  display: flex;
  flex-direction: column;
}

.traveler-label {
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.traveler-sub {
  font-size: 11px;
  color: #999;
}

.traveler-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.counter-btn {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid #ddd;
  background: #f5f5f5;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #333;
}

.counter-btn:hover {
  background: #e8e8e8;
}

.counter-value {
  font-size: 16px;
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

.class-dropdown {
  min-width: 200px;
  padding: 8px 0;
}

.class-dropdown-title {
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
}

.class-option {
  padding: 8px 14px;
  font-size: 13px;
  color: #333;
  cursor: pointer;
  transition: background 0.15s;
}

.class-option:hover {
  background: #f5f5f5;
}

.class-option.active {
  background: #e8f0fe;
  color: #0047BB;
  font-weight: 600;
}

.calendar-popup {
  position: absolute;
  top: calc(100% + 8px);
  left: 200px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  z-index: 200;
  padding: 16px;
  width: 380px;
  margin-top: 4px;
}

.calendar-header-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  justify-content: center;
  position: relative;
}

.cal-tab {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  border: 1px solid #ddd;
  background: #fff;
  color: #333;
}

.cal-tab.active {
  background: #0047BB;
  color: #fff;
  border-color: #0047BB;
}

.cal-close {
  position: absolute;
  right: 0;
  font-size: 16px;
  color: #999;
  background: none;
  border: none;
  cursor: pointer;
}

.calendar-trip-type {
  margin-bottom: 12px;
}

.trip-type-btn {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  border: 1px solid #ddd;
  background: #fff;
}

.trip-type-btn.active {
  background: #f0f0f0;
}

.calendar-body {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.calendar-month {
  flex: 1;
}

.month-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.month-nav h3 {
  font-size: 14px;
  font-weight: 600;
}

.month-arrow {
  font-size: 18px;
  color: #666;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 4px;
}

.cal-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  text-align: center;
}

.cal-day-name {
  font-size: 10px;
  color: #999;
  padding: 4px 0;
}

.cal-day {
  font-size: 12px;
  padding: 4px 0;
  cursor: pointer;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.cal-day:hover:not(.empty) {
  background: #e8f0fe;
}

.cal-day.selected {
  background: #0047BB;
  color: #fff;
}

.cal-day.empty {
  cursor: default;
}

.calendar-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid #eee;
}

.calendar-hint {
  font-size: 12px;
  color: #666;
}

.calendar-apply {
  padding: 8px 24px;
  background: #0047BB;
  color: #fff;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .search-section {
    padding: 16px 0 24px;
  }

  .search-row {
    flex-direction: column;
    gap: 12px;
  }

  .search-fields-wrapper {
    width: 100%;
    border-radius: 12px;
    flex-direction: column;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .search-field {
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
  }

  .search-field:last-child {
    border-bottom: none;
  }

  .from-field,
  .to-field,
  .date-field,
  .travelers-field,
  .class-field {
    flex: none;
    width: 100%;
  }

  .field-box {
    min-height: 56px;
    padding: 8px 12px;
  }

  .field-label {
    font-size: 11px;
    margin-bottom: 2px;
  }

  .field-value {
    font-size: 14px;
  }

  .search-btn-main {
    width: 100%;
    min-height: 52px;
    font-size: 16px;
    border-radius: 12px;
  }

  .calendar-popup {
    left: 50%;
    transform: translateX(-50%);
    width: calc(100vw - 32px);
    max-width: none;
  }

  .dropdown {
    left: 0;
    right: 0;
    max-width: none;
  }

  .travelers-dropdown {
    min-width: auto;
    width: 100%;
  }

  .class-dropdown {
    min-width: auto;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .search-section {
    padding: 12px 0 20px;
  }

  .field-box {
    padding: 6px 10px;
  }

  .field-label {
    font-size: 10px;
  }

  .field-value {
    font-size: 13px;
  }

  .search-btn-main {
    font-size: 15px;
    padding: 0 24px;
  }
}
</style>