<template>
  <div class="cart-empty">
    <p class="annotation">Пока что вы ничего не добавили в корзину.</p>
    <button class="open-products" @click.prevent.stop="$store.commit('closeCart')">Перейти к выбору</button>
  </div>
</template>

<script>
export default {
  name: 'cartEmpty',
};
</script>

<style lang="scss" scoped>
.cart-empty {
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  & .annotation {
    font-size: 22px;
    line-height: 28px;
    font-weight: 400;
    padding-bottom: 24px;
  }
}
</style>
