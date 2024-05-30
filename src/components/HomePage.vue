<template>
  <div>
    <h1>Главная страница</h1>
    <p>Добро пожаловать в WebDevHub! Ваш путь к современным технологиям веб-разработки.</p>

    <div class="news-section">
      <h2>Новости</h2>
      <div class="news-grid">
        <div class="news-block">
          <img :src="require('@/assets/gpt.jpg')" alt="Новинка в технике 1" />
          <h3>OpenAi Анонсировали новый ChatGPT Edu</h3>
          <p>OpenAi анонсировали новый ChatGPT Edu, созданный специально для учебы...</p>
          <router-link to="/chatgpt-edu">Читать далее</router-link>
        </div>
        <div class="news-block">
          <img :src="require('@/assets/codestral.jpg')" alt="Новинка в технике 2" />
          <h3>Mistral AI выпустила Codestral</h3>
          <p>Mistral AI выпустила Codestral — модель машинного обучения для генерации кода...</p>
          <router-link to="/codestral">Читать далее</router-link>
        </div>
        <div class="news-block">
          <img :src="require('@/assets/Asociation.jpeg')" alt="Новинка в технике 3" />
          <h3>Федеральная Ассоциация IT–специалистов</h3>
          <p>СМИ: в России создадут федеральную Ассоциацию IT–специалистов с отделениями в каждом регионе страны...</p>
          <router-link to="/association">Читать далее</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style>
.news-section {
  margin-top: 40px;
}

.news-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.news-block {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: calc(33% - 20px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.news-block img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.news-block h3 {
  margin-top: 10px;
}

.news-block p {
  margin: 10px 0;
}

.news-block router-link {
  text-decoration: none;
  color: #007bff;
}

.news-block router-link:hover {
  text-decoration: underline;
}
</style>
