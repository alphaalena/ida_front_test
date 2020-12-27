<template>
  <div class="product-image">
    <img :alt="photo" :src="`${rootUri}${photo}`" class="product-image-photo">
  </div>
</template>

<script>
import { serverHost } from '~/config';

export default {
  name: 'productImage',
  data() {
    return {
      rootUri: serverHost,
    };
  },
  props: {
    photo: String,
  },
};
</script>

<style lang="scss" scoped>
.product-image {
  padding-top: 18px;
  flex: 1;

  &-photo {
    max-height: calc(214px - 18px);
    object-fit: cover;
  }
}
</style>
