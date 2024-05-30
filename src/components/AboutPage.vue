<template>
  <div>
    <h1>Добро пожаловать в WebDevHub!</h1>
    <p>Оставайтесь в курсе последних тенденций и инноваций в сфере IT.</p>
    
    <div class="content">
      <h2>Новинки в IT</h2>
      <p>Исследуйте новейшие достижения в области технологий, от передовых разработок программного обеспечения до последних выпусков аппаратного обеспечения. Наша платформа предоставляет актуальные новости и подробные статьи о том, что происходит в мире IT.</p>
      
      <div class="image-gallery">
        <img :src="require('@/assets/img1.png')" alt="Новинка в технике 1" />
        <img :src="require('@/assets/img2.png')" alt="Новинка в технике 2" />
        <img :src="require('@/assets/img3.jpeg')" alt="Новинка в технике 3" />
      </div>
      
      <h3>Рекомендуемые статьи</h3>
      <ul>
        <li><router-link to="/chatgpt-edu">OpenAi Анонсировали новый ChatGPT Edu, созданный специально для учебы</router-link></li>
        <li><router-link to="/codestral">Mistral AI выпустила Codestral — модель машинного обучения для генерации кода</router-link></li>
        <li><router-link to="/association">СМИ: в России создадут федеральную Ассоциацию IT–специалистов с отделениями в каждом регионе страны</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style>
.content {
  margin-top: 20px;
}

.image-gallery {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.image-gallery img {
  width: 30%;
  max-width: auto;
  height: 300px;
  border-radius: 10px;
}
</style>
