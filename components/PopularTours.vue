<template>
  <section class="tours-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t('popularToursTitle') }}</h2>
        <a href="#" class="section-link">{{ t('seeAll') }}</a>
      </div>

      <div class="tours-grid">
        <div v-for="(tour, index) in tours" :key="index" class="tour-card">
          <div class="tour-image-wrapper">
            <img :src="tour.image" :alt="tour.name" class="tour-image" />
          </div>
          <div class="tour-info">
            <span class="tour-location">{{ tour.location }}</span>
            <div class="tour-bottom">
              <h3 class="tour-name">{{ tour.name }} - {{ t('excursion') }}</h3>
              <div class="tour-rating">
                <span class="rating-value">{{ tour.rating }}</span>
                <span class="rating-star">★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const tours = [
  { name: 'DisneyLand', location: 'France, Paris', rating: 4.7, image: '/travel.github.io//images/disnayland.png' },
  { name: 'Coliseum', location: 'Italy, Roma', rating: 4.2, image: '/travel.github.io//images/colizey.png' },
  { name: 'Tanakh-Lot', location: 'Indonesia, Bali', rating: 5.0, image: '/travel.github.io//images/indonesia.png' },
  { name: 'Olkhon', location: 'Russia, Irkutsk', rating: 4.0, image: '/travel.github.io//images/olkhon.png' },
  { name: 'The Great Wall of China', location: 'China', rating: 4.1, image: '/travel.github.io//images/china.png' },
  { name: 'Burj Khalifa', location: 'UAE, Dubai', rating: 4.8, image: '/travel.github.io//images/dubai.png' }
]
</script>

<style scoped>
.tours-section {
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.section-title {
  font-size: 24px;
  font-weight: 800;
  color: #1a1a1a;
}

.section-link {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.tour-card {
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
}

.tour-image-wrapper {
  width: calc(100% - 24px);
  margin: 14px 12px 0;
  height: 170px;
  overflow: hidden;
  border-radius: 12px;
  background: #f0f0f0;
}

.tour-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.tour-info {
  padding: 14px 16px 18px;
}

.tour-location {
  font-size: 13px;
  color: #888;
  display: block;
  margin-bottom: 4px;
}

.tour-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
}

.tour-name {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.4;
  margin: 0;
  flex: 1;
}

.tour-rating {
  display: flex;
  align-items: center;
  gap: 3px;
  flex-shrink: 0;
}

.rating-value {
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
}

.rating-star {
  color: #FFB800;
  font-size: 15px;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 22px;
  }

  .tours-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .tour-image-wrapper {
    height: 120px;
    margin: 10px 10px 0;
    border-radius: 10px;
  }

  .tour-info {
    padding: 10px 12px 12px;
  }

  .tour-location {
    font-size: 11px;
  }

  .tour-name {
    font-size: 13px;
  }

  .rating-value {
    font-size: 13px;
  }

  .rating-star {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 20px;
  }

  .tour-image-wrapper {
    height: 100px;
  }

  .tour-name {
    font-size: 12px;
  }
}
</style>