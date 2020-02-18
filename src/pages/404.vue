<template>
  <Layout>
    <div
      class="page-not-found-container d-flex flex-column justify-content-center align-items-center"
    >
      <g-image
        src="~/assets/images/global/404.svg"
        class="page-not-found-img"
      ></g-image>
      <h2>Opps! That page currently does not exist.</h2>
      <p>Click below to go back home.</p>
      <div>
        <btn-primary ctaText="Back to Home" ctaUrl="/"></btn-primary>
      </div>
    </div>
  </Layout>
</template>

<script>
import btnPrimary from "~/components/buttons/btnPrimary.vue";

export default {
  components: { btnPrimary }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.page-not-found-container {
  height: 80vh;
  color: $brand-color-primary;
  text-align: center;
  h2 {
    font-size: 2rem;
    @media (max-width: 425px) {
      font-size: 1.7rem;
    }
  }
  p {
    font-size: 1.3rem;
    @media (max-width: 425px) {
      font-size: 1.1rem;
    }
  }
  .page-not-found-img {
    width: 400px;
    @media (max-width: 425px) {
      width: 300px;
    }
  }
}
</style>
