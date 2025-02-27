import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 1. Подключаем Pinia
import { createPinia } from 'pinia' //библиотека для управления состоянием

// 2. Подключаем PrimeVue
import PrimeVue from 'primevue/config' //библиотека UI-компонентов

// 3. Подключаем стили PrimeVue
import 'primevue/themes/arya-blue/theme.css' // Стили для конкретной темы оформления
import 'primeicons/primeicons.css' // стили для самих компонентов PrimeVu
import 'primeflex/primeflex.css' // стили для иконок

// 4. Подключаем PrimeFlex
import 'primeflex/primeflex.css' //CSS-фреймворк для построения гибких и адаптивных макетов с использованием Flexbox
                                 // не используем app.use(), т.к. не содержит Vue-компонентов и не предоставляет никаких JavaScript-функций, которые нужно было бы инициализировать 

const app = createApp(App)

// 5. Добавляем Pinia в приложение
app.use(createPinia())

// 6. Добавляем PrimeVue в приложение
app.use(PrimeVue)

// 7. Монтируем приложение
app.mount('#app')
