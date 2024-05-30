<template>
  <div class="news-container">
    <img :src="require('@/assets/gpt.jpg')" alt="Изображение новости" />
    <div class="news-content">
      <h1>OpenAi Анонсировали новый ChatGPT Edu</h1>
      <p>Школьники, студенты, преподаватели и аспиранты и ученые получат доступ к GPT-4o, с расширенными возможностями и увеличенными лимитами. </p>
      <p>Новая модель дает возможность создавать пользовательские версии ChatGPT, и делиться ими для  совместных исследований и обучения. </p>
      <p>- Значительно более высокие лимиты на количество сообщений, чем в бесплатной версии ChatGPT </p>
      <p>- Улучшены языковые возможности по качеству и скорости работы, поддерживается более 50 языков </p>
      <p>- Надежная защита информации,конфиденциальность данных и продвинутые административные средства управления ИИ. </p>
      <p>Модель основана на GPT-4o, она может работать с текстовой и визуальной информациией, поддерживает передовые инструменты анализа данных. </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ChatGPTEduPage',
  };
  </script>

<style>
.news-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.news-content {
  max-width: 800px;
  text-align: center;
}

.news-container img {
  width: 100%;
  max-width: 800px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.news-content h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.news-content p {
  font-size: 1.2em;
  line-height: 1.6;
  text-align:justify;
}
</style>
