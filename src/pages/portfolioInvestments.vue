<template>
  <Layout>
      <hero></hero>
      <stock-portfolio></stock-portfolio>
  </Layout>
</template>

<script>
import hero from '~/components/page-components/analysis/hero.vue';
import stockPortfolio from '~/components/page-components/analysis/stockPortfolio.vue';

export default {
    metaInfo: {
      title: 'Analysis'
    },
    components: {
        hero,
        stockPortfolio
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

</style>