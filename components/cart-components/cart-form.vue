<template>
  <div class="cart-form">
    <h3 class="cart-form-title">Оформить заказ</h3>
    <form action="" class="cart-form-inputs" @submit.prevent="makeOrder">
      <app-input v-model="name" placeholder="Ваше имя" />
      <app-input v-model="phone" mask="+7 ###-###-##-##" placeholder="Телефон" />
      <app-input v-model="address" placeholder="Адрес" />
      <button :disabled="isFormInvalid || isOrderInProcess" class="make-order" type="submit" @click.prevent="makeOrder">{{ isOrderInProcess ? 'Загрузка...' : 'Отправить' }}</button>
    </form>
  </div>
</template>

<script>
import AppInput from '~/components/app-input';

export default {
  name: 'cartForm',
  components: { AppInput },
  data() {
    return {
      phone: '',
      name: '',
      address: '',
    };
  },
  computed: {
    isFormInvalid() {
      const isPhoneValid = this.phone.length === 16;
      const isNameValid = this.name.trim().length > 1;
      const isAddressValid = this.address.trim().length > 3;
      return !(isPhoneValid && isNameValid && isAddressValid);
    },
    isOrderInProcess() {
      return this.$store.state.isOrderInProcess;
    },
  },
  methods: {
    makeOrder() {
      this.$store.dispatch('makeOrder');
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-form {

  &-title {
    font-size: 18px;
    line-height: 23px;
    color: #59606D;
    font-weight: 400;
    padding-bottom: 16px;
  }

  &-inputs {
    align-self: stretch;

    & .app-input {
      margin-bottom: 16px;
    }

    & .make-order {
      width: 100%;
      margin-top: 8px;
    }
  }
}
</style>
