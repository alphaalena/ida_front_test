<template>
  <column class="side-bar">
    <h2>Каталог</h2>
    <div class="navigation-links">
      <nuxt-link v-for="item in items" :key="item.title" :class="{'is-active': item.id === currentCategoryId}" :to="`/${rootUri}/${item.id}`">
        {{ item.title }}
      </nuxt-link>
    </div>
  </column>
</template>

<script>
import { categoriesRootUri } from '~/config';
import Column from '~/components/grid-components/column';
import { productsRoutingMixin } from '~/components/product-components/products-routing-mixin';

export default {
  name: 'sidebar',
  mixins: [
    productsRoutingMixin,
  ],
  components: { Column },
  data() {
    return {
      rootUri: categoriesRootUri,
      items: [
        {
          title: 'Рюкзаки',
          id: 1,
        },
        {
          title: 'Сумки-мессенджеры',
          id: 2,
        },
        {
          title: 'Деловые сумки',
          id: 3,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.side-bar {
  margin-top: 32px;
  transition: all .5s ease-in-out;
}

h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 24px;
}

.navigation-links {
  display: flex;
  flex-direction: column;
  outline: none;
  align-items: flex-start;

  a {
    font-size: 16px;
    padding: 10px;
    line-height: 21px;
    text-decoration: none;
    color: #959DAD;

    &:hover {
      color: #1F1F1F;
    }

    &.is-active {
      color: #1F1F1F;
      text-decoration: underline;
    }
  }
}
</style>
