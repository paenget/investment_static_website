<template>
  <Layout>
    <hero></hero>
    <blog-list></blog-list>
  </Layout>
</template>

<script>
import hero from "~/components/page-components/blog/hero.vue";
import blogList from "~/components/page-components/blog/blogList.vue";

export default {
  metaInfo() {
    return {
      title: "Investment Ideas | StrongView Investment Management",
      description: "Long Term Investing Made Clear"
    };
  },
  components: {
    hero,
    blogList
  }
};
</script>

<style lang="scss" scoped></style>
