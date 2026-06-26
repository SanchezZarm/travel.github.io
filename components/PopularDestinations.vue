<template>
  <section class="destinations-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t('popularDestinations') }}</h2>
        <a href="#" class="section-link">{{ t('seeAll') }}</a>
      </div>

      <div class="carousel-wrapper">
        <button class="carousel-arrow left" @click="scrollCarousel(-1)">‹</button>
        <div class="destinations-track" ref="track">
          <div v-for="(dest, index) in destinations" :key="index" class="destination-item">
            <div class="destination-circle">
              <img :src="dest.image" :alt="dest.name" class="destination-img" />
            </div>
            <span class="destination-name">{{ dest.name }}</span>
          </div>
        </div>
        <button class="carousel-arrow right" @click="scrollCarousel(1)">›</button>
      </div>

      <div class="carousel-dots">
        <span class="dot active"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const track = ref(null)

const destinations = computed(() => [
  { name: t('paris'), image: '~/assets/images/paris.png' },
  { name: t('rome'), image: '~/assets/images//rim.png' },
  { name: t('bali'), image: '~/assets/images/bali.png' },
  { name: t('baikal'), image: '~/assets/images/baikal.png' }
])

const scrollCarousel = (direction) => {
  if (track.value) {
    const scrollAmount = 200
    track.value.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.destinations-section {
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.section-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  position: relative;
}

.section-title {
  font-size: 28px;
  font-weight: 800;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-block;
  padding-bottom: 4px;
  margin: 0;
}

.section-link {
  font-size: 14px;
  color: #333;
  font-weight: 500;
  position: absolute;
  right: 0;
}

.carousel-wrapper {
  position: relative;
}

.destinations-track {
  display: flex;
  justify-content: center;
  gap: 100px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 10px 0;
}

.destinations-track::-webkit-scrollbar {
  display: none;
}

.destination-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  flex-shrink: 0;
}

.destination-circle {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.destination-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.destination-name {
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
}

.carousel-dots {
  display: none;
  justify-content: center;
  gap: 6px;
  margin-top: 24px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ccc;
}

.dot.active {
  width: 24px;
  border-radius: 4px;
  background: #0047BB;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0,0,0,0.06);
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #333;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.carousel-arrow.left { left: 0; }
.carousel-arrow.right { right: 0; }

@media (min-width: 769px) {
  .carousel-dots {
    display: flex;
  }

  .carousel-arrow {
    display: none;
  }

  .destinations-track {
    overflow-x: visible;
  }
}

@media (max-width: 768px) {
  .section-header {
    justify-content: space-between;
    padding: 0 4px;
  }

  .section-title {
    font-size: 22px;
    border-bottom: none;
    text-transform: none;
  }

  .section-link {
    position: static;
    font-size: 13px;
  }

  .destinations-track {
    justify-content: flex-start;
    gap: 16px;
    padding: 10px 40px;
  }

  .carousel-arrow {
    display: flex;
  }

  .carousel-dots {
    display: none;
  }

  .destination-item {
    flex: 0 0 calc(50% - 8px);
  }

  .destination-circle {
    width: 140px;
    height: 140px;
  }

  .destination-name {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 20px;
  }

  .destination-circle {
    width: 120px;
    height: 120px;
  }

  .destination-name {
    font-size: 13px;
  }
}
</style>