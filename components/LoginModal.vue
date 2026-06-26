<template>
  <Teleport to="body">
    <div v-if="modelValue" class="modal-overlay" @click.self="$emit('update:modelValue', false)">
      <div class="modal-content">
        <button class="modal-close" @click="$emit('update:modelValue', false)">✕</button>

        <div class="modal-header">
          <div class="modal-logo">
            <img src="~/public/images/Photoroom.png" alt="TravelPulse" class="modal-logo-img" />
          </div>
          <h2 class="modal-title">TravelPulse</h2>
        </div>
        
        <p class="modal-subtitle">{{ t('modalSubtitle') || 'Используйте все свои возможности!' }}</p>

        <div v-if="mode === 'login'" class="auth-form">
          <button class="email-login-btn" @click="mode = 'emailLogin'">
            {{ t('emailLogin') || 'Войти с помощью электронной почты' }}
          </button>

          <div class="divider">
            <span class="divider-line"></span>
            <span class="divider-text">{{ t('or') || 'или' }}</span>
            <span class="divider-line"></span>
          </div>

          <div class="social-buttons">
            <button class="social-btn facebook">
              <img src="~/public/images/face.png"/>
              <span>Facebook</span>
            </button>
            <button class="social-btn google">
              <img src="~/public/images/google.png"/>
              <span>Google</span>
            </button>
            <button class="social-btn apple">
             <img src="~/public/images/apple.png"/>
              <span>Apple</span>
            </button>
          </div>

          <label class="remember-me">
            <input type="checkbox" />
            <span>{{ t('rememberMe') || 'Запомнить меня' }}</span>
          </label>

          <p class="terms-text">
            {{ t('termsText') || 'Продолжая, вы принимаете наши Условия предоставления услуг и Политику конфиденциальности' }}
          </p>
        </div>

        <div v-if="mode === 'emailLogin'" class="auth-form">
          <h2 class="modal-subtitle">{{ t('loginEmailTitle') || 'Вход по электронной почте' }}</h2>
          
          <input
            type="email"
            :placeholder="t('emailPlaceholder') || 'Электронная почта'"
            class="form-input"
          />
          <input
            type="password"
            :placeholder="t('passwordPlaceholder') || 'Пароль'"
            class="form-input"
          />

          <button class="submit-btn">
            {{ t('loginBtn') || 'Войти' }}
          </button>

          <p class="switch-auth">
            {{ t('noAccount') || 'Нет аккаунта?' }}
            <a href="#" @click.prevent="mode = 'register'">{{ t('registerNow') || 'Зарегистрируйтесь сейчас' }}</a>
          </p>
        </div>

        <div v-if="mode === 'register'" class="auth-form">
          <h2 class="modal-subtitle">{{ t('registerTitle') || 'Регистрация' }}</h2>

          <input
            type="text"
            :placeholder="t('firstName') || 'Имя'"
            class="form-input"
          />
          <input
            type="text"
            :placeholder="t('lastName') || 'Фамилия'"
            class="form-input"
          />
          <input
            type="email"
            :placeholder="t('emailPlaceholder') || 'Электронная почта'"
            class="form-input"
          />
          <input
            type="password"
            :placeholder="t('passwordPlaceholder') || 'Пароль'"
            class="form-input"
          />
          <input
            type="password"
            :placeholder="t('confirmPassword') || 'Подтвердите пароль'"
            class="form-input"
          />

          <button class="submit-btn">
            {{ t('registerBtn') || 'Зарегистрироваться' }}
          </button>

          <p class="terms-text register-terms">
            {{ t('registerTermsText') || 'Регистрируясь, вы принимаете наши Условия предоставления услуг и Политику конфиденциальности' }}
          </p>

          <p class="switch-auth">
            {{ t('haveAccount') || 'Уже есть аккаунт?' }}
            <a href="#" @click.prevent="mode = 'login'">{{ t('loginHere') || 'Войдите здесь' }}</a>
          </p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from '../composables/useI18n'

const props = defineProps({
  modelValue: Boolean
})

defineEmits(['update:modelValue'])

const { t } = useI18n()
const mode = ref('login')

watch(() => props.modelValue, (val) => {
  if (val) mode.value = 'login'
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #fff;
  border-radius: 20px;
  padding: 32px 40px 40px;
  width: 480px;
  max-width: 90vw;
  position: relative;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 20px;
  font-size: 24px;
  color: #999;
  background: none;
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;
}

.modal-close:hover {
  background: #f0f0f0;
  color: #333;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.modal-logo {
  display: flex;
  align-items: center;
}

.modal-logo-img {
  height: 50px;
  width: auto;
  object-fit: contain;
}

.modal-title {
  font-size: 28px;
  font-weight: 700;
  color: #ff7400;
  text-align: center;
  margin: 0;
  letter-spacing: -0.5px;
}

.modal-subtitle {
  font-size: 36px;
  color: #000000;
  margin-bottom: 28px;
  font-weight: bold;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.email-login-btn {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  background: #fff;
  color: #000000;
  border: 2px solid #d9d9d9;
  transition: all 0.2s;
}

.email-login-btn:hover {
  background: #0047BB;
  color: #fff;
}

.divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 8px 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: #e0e0e0;
}

.divider-text {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
}

.social-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  background: #fff;
  transition: all 0.2s;
}

.social-btn:hover {
  background: #f5f5f5;
  transform: translateY(-1px);
}

.social-btn svg {
  width: 20px;
  height: 20px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  color: #000000;
  cursor: pointer;
  margin-top: 8px;
}

.remember-me input {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #0047BB;
}

.terms-text {
  font-size: 20px;
  color: #000000;
  line-height: 1.4;
  margin-top: 12px;
}

.register-terms {
  margin-top: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 14px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 14px;
  background: #fff;
  color: #333;
  outline: none;
  transition: border-color 0.2s;
}

.form-input::placeholder {
  color: #aaa;
}

.form-input:focus {
  border-color: #0047BB;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  background: #0047BB;
  color: #fff;
  border: none;
  margin-top: 4px;
  transition: background 0.2s;
}

.submit-btn:hover {
  background: #003399;
}

.switch-auth {
  text-align: center;
  font-size: 13px;
  color: #666;
  margin-top: 8px;
}

.switch-auth a {
  color: #0047BB;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
}

.switch-auth a:hover {
  text-decoration: underline;
}
@media (max-width: 768px) {
  .modal-content {
    padding: 24px 20px 28px;
    width: 95vw;
    max-width: 95vw;
    border-radius: 16px;
  }

  .modal-header {
    gap: 8px;
  }

  .modal-logo-img {
    height: 40px;
  }

  .modal-title {
    font-size: 22px;
  }

  .modal-subtitle {
    font-size: 20px !important;
    margin-bottom: 20px !important;
  }

  .email-login-btn {
    font-size: 16px !important;
    padding: 12px;
  }

  .social-btn {
    font-size: 16px !important;
    padding: 10px;
  }

  .remember-me {
    font-size: 16px !important;
  }

  .terms-text {
    font-size: 14px !important;
  }

  .form-input {
    font-size: 14px;
    padding: 10px 12px;
  }

  .submit-btn {
    font-size: 16px;
    padding: 12px;
  }

  .switch-auth {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .modal-content {
    padding: 20px 16px 24px;
    border-radius: 12px;
  }

  .modal-close {
    top: 12px;
    right: 12px;
    font-size: 20px;
    width: 28px;
    height: 28px;
  }

  .modal-logo-img {
    height: 32px;
  }

  .modal-title {
    font-size: 18px;
  }

  .modal-subtitle {
    font-size: 16px !important;
    margin-bottom: 16px !important;
  }

  .email-login-btn {
    font-size: 14px !important;
    padding: 10px;
  }

  .social-btn {
    font-size: 14px !important;
    padding: 8px;
  }

  .divider-text {
    font-size: 10px;
  }

  .remember-me {
    font-size: 14px !important;
  }

  .terms-text {
    font-size: 12px !important;
  }

  .form-input {
    font-size: 13px;
    padding: 8px 10px;
  }

  .submit-btn {
    font-size: 14px;
    padding: 10px;
  }

  .switch-auth {
    font-size: 12px;
  }
}
</style>