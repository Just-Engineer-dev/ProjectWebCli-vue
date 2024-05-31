<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">WebDevHub</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Домашняя страница</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">О нас</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/form">Обратная связь</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/gallery">Галерея</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container" style="margin-top: 60px;">
      <router-view/>
    </div>
    <footer class="bg-light text-center">
  <div class="container p-4">
    <div class="row">
      <div class="col-md-6">
        <h5 class="text-uppercase">WebDevHub</h5>
        <p class="mb-0">Ваш надежный источник новостей и аналитики в области веб-разработки.</p>
      </div>
      <div class="col-md-6">
        <h5 class="text-uppercase">Контакты</h5>
        <ul class="list-unstyled mb-0">
          <li><a href="mailto:info@webdevhub.com" class="text-dark">nikitanikit@gmail.com</a></li>
          <li><a href="tel:+123456789" class="text-dark">+7 953-209-49-39</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2024 WebDevHub
  </div>
</footer>


  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  padding-top: 56px; /* Adjust according to navbar height */
}
.navbar {
  background: url('@/assets/pattern.png') repeat; /* Используем ваше изображение */
  animation: slide 10s alternate infinite; /* Анимация */
}

@keyframes slide {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 80%;
  }
}

@media (max-width: 1200px) {
  .container {
    max-width: 100%;
  }
}

@media (max-width: 800px) {
  .navbar {
    font-size: 0.9em;
  }
}

@media (max-width: 550px) {
  .navbar-brand, .navbar-nav .nav-link {
    font-size: 0.8em;
  }
}

/* Footer styles */
footer {
  margin-top: 20px;
  padding: 20px 0;
  background-color: #f8f9fa;
  color: #6c757d;
}

footer h5 {
  font-size: 1.25rem;
  font-weight: bold;
}

footer p {
  font-size: 1rem;
}

footer ul {
  padding-left: 0;
  list-style: none;
}

footer ul li {
  margin-bottom: 10px;
}

footer a {
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
</style>
