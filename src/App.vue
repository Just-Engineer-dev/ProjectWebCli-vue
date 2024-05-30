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

</style>
