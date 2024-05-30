<template>
  <div class="news-container">
    <img :src="require('@/assets/codestral.jpg')" alt="Изображение новости" />
    <div class="news-content">
      <h1>Mistral AI выпустила Codestral</h1>
      <p>Стартап Mistral AI из Франции выпустил Codestral — свою первую модель машинного обучения для генерации кода. Нейросеть обучили на 80 языках программирования, включая JavaScript, Python и Java.</p>
      <p>У Codestral 22 млрд параметров, что обеспечивает достаточную производительность для быстро генерации. Нейросеть справляется с созданием программного кода с нуля и заполнения пробелов. Кроме того, Codestral может отвечать на вопросы по кодовой базе проекта и писать тесты.</p>
      <p>В датасет входили как популярные языки программирования, так и менее распространённые, к примеру, Swift и Fortran. Команда стартапа изначально пыталась охватить как можно больше технологий, чтобы нейросетью могли пользоваться разные разработчики. Также Codestral может составлять SQL-запросы и генерировать Bash-скрипты.</p>
      <p>Модель частично открыта и надо соблюдать определённые условия. Нейросеть нельзя использовать в коммерческой деятельности. В пользовательском соглашении это прямо прописано. Вероятно, что модель частично обучали на данных, защищённых авторским правом.</p>
      <p>Codestral с весами опубликована на платформе Hugging Face. Также бесплатно пользоваться моделью можно на портале Le Chat.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodestralPage',
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
