<template>
  <div class="slider-container">
    <h1>Галерея технологий</h1>
    <p class="description">Это галерея технологий, используемых на нашем сайте. Изображения представляют различные фреймворки и библиотеки, такие как Vue.js, React и Angular.</p>
    <div class="slider">
      <button @click="prevSlide">&lt;</button>
      <img :src="images[currentImageIndex]" alt="Gallery image" class="slider-img">
      <button @click="nextSlide">&gt;</button>
    </div>
    <div class="slider-indicators">
      <span v-for="(image, index) in images" :key="index" :class="{ active: index === currentImageIndex }" @click="currentImageIndex = index"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImageIndex: 0,
      images: [
        require('@/assets/vue.jpg'),
        require('@/assets/node.png'),
        require('@/assets/html.png'),
        require('@/assets/css.png'),
      ]
    };
  },
  methods: {
    prevSlide() {
      this.currentImageIndex = (this.currentImageIndex + this.images.length - 1) % this.images.length;
    },
    nextSlide() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.slider {
  display: flex;
  align-items: center;
}

.slider-img {
  max-width: 600px;
  width: 400px;
  height: 300px;
  object-fit: fill;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: all 0.5s ease;
}

button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #0056b3;
  transform: scale(1.1);
}

.description {
  margin-top: 20px;
  font-size: 1.2em;
  color: #666;
  font-family: 'Montserrat', sans-serif;
}

h1 {
  font-family: 'Montserrat', sans-serif;
}

.slider-indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.slider-indicators span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
}

.slider-indicators span.active {
  background-color: #007bff;
}
</style>