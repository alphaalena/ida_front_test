<template>
  <div class="products-filter">
    <div class="title">Сортировать по:
      <div class="selector">
        {{ by === null ? 'умолчанию' : by.shortTitle }} ▾
        <div class="selector-items-wrapper">
          <div class="selector-items">
            <div v-for="item in items" :key="item.code" class="selector-item" @click.prevent="filterBy(item)">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productsFilter',
  computed: {
    items() {
      return this.$store.state.sortingPredicates;
    },
    by() {
      return this.$store.state.sortingPredicate;
    },
  },
  methods: {
    filterBy(sortingPredicate) {
      this.$store.commit('sortProducts', sortingPredicate);
    },
  },
};
</script>

<style lang="scss" scoped>
.products-filter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  & .title {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    display: inline-block;
  }

  & .selector {
    color: #59606D;
    position: relative;
    display: inline-block;
    transition: all .5s ease-in-out;

    &-items {
      display: flex;
      flex-direction: column;
      padding-top: 8px;
      padding-bottom: 8px;
      z-index: 2;
      position: absolute;
      top: 30px;
      right: 0;
      width: 160px;
      border-radius: 8px;
      background-color: white;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);

      &-wrapper {
        display: none;
        z-index: 1;
        position: absolute;
        width: 160px;
        height: 100px;
        top: 0;
        right: 0;
      }
    }

    &-item {
      color: #959DAD;
      font-size: 14px;
      line-height: 18px;
      padding: 4px 12px;

      &:hover {
        color: black;
        background-color: #F8F8F8;
      }
    }

    &:hover {
      cursor: pointer;
      user-select: none;

      & > .selector-items-wrapper {
        display: flex;
      }
    }
  }
}
</style>

