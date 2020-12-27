<template>
  <div class="product-content">
    <h3 class="title">{{ title }}</h3>
    <span class="price">{{ price.toLocaleString() }} ₽</span>
  </div>
</template>

<script>
export default {
  name: 'productContent',
  props: {
    title: String,
    price: Number,
  },
};
</script>

<style lang="scss" scoped>
.product-content {
  height: 58px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  & .title {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #59606D;
    padding-left: 16px;
    padding-right: 16px;
    max-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & .price {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    padding-left: 16px;
    padding-bottom: 16px;
  }
}
</style>
