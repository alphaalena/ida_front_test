<template>
  <div class="cart-header">
    <h2 class="title">Корзина</h2>
    <button class="closer" @click.prevent="closeCart">
      <svg fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z" fill="black" fill-rule="evenodd" />
        <path clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="black" fill-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'cartHeader',
  methods: {
    closeCart() {
      this.$store.commit('closeCart');
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & .title {
    font-size: 32px;
    line-height: 41px;
    font-weight: 700;
  }

  & .closer {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
}
</style>
