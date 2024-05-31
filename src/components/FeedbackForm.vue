<template>
  <div>
    <h1>Обратная связь</h1>
    <p>Если вы ходитет подсказать новость или связаться с нами, заполните поля ниже</p>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Имя</label>
        <input type="text" class="form-control" id="name" v-model="name" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Почта</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Сообщение</label>
        <textarea class="form-control" id="message" v-model="message" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Подтвердить</button>
    </form>

    <div v-if="modalVisible" class="modal fade show" tabindex="-1" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Статус отправки</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <p v-if="formSuccess">Форма успешно отправлена!</p>
            <p v-else>Пожалуйста, заполните все необходимые поля правильно.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Закрыть</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackForm',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      modalVisible: false,
      formSuccess: false,
    };
  },
  methods: {
    handleSubmit() {
      if (this.name && this.validateEmail(this.email) && this.message) {
        this.formSuccess = true;
      } else {
        this.formSuccess = false;
      }
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
  },
};
</script>
