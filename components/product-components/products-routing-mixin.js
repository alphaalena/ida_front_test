export const productsRoutingMixin = {
  data() {
    return {
      currentCategoryId: 1,
    };
  },
  methods: {
    updateCurrentId() {
      this.currentCategoryId = Number($nuxt.$route.params.categoryId);
    },
  },
  mounted() {
    this.updateCurrentId();
  },
  watch: {
    $route() {
      this.updateCurrentId();
    },
  },
};
