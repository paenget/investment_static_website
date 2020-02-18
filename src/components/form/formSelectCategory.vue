<template>
  <b-form-select v-model="selected" :options="categories" class="form-control sv-input"></b-form-select>
</template>

<static-query>
query {
  category: allWordPressCategory {
    edges {
      node {
        title
        id
        slug
        count
      }
    }
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      categories: [{ value: "all", text: "All" }],
      selected: "all"
    };
  },
  created() {
    const categoryArray = this.$static.category.edges;
    const categoryArrayObject = [];

    categoryArray.forEach(category => {
      categoryArrayObject.push({
        value: category.node.slug,
        text: category.node.title,
        count: category.node.count
      });
    });

    var cleanedCategoriesArray = _.map(categoryArrayObject, function(category) {
      if (category.count >= 1) return category;
    });
    cleanedCategoriesArray = _.without(cleanedCategoriesArray, undefined);

    cleanedCategoriesArray.push({
      value: "all",
      text: "All",
      count: 1
    });

    // console.log(cleanedCategoriesArray);
    this.categories = cleanedCategoriesArray;

    this.$store.dispatch("setBlogCategory", this.selected);
  },
  watch: {
    selected: function() {
      this.$store.dispatch("setBlogCategory", this.selected);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.sv-input {
  border: 1px solid $brand-color-primary;
  border-radius: 2px !important;
}
</style>