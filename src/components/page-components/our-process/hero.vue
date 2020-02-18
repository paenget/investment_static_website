<template>
  <section class="our-process-hero d-flex align-items-center">
    <div class="container d-flex flex-column justify-content-center align-items-start">
      <div class="col-lg-7 col-md-8 col-sm-12">
        <h1 class="mb-5">Why Partner With Strongview</h1>
        <btn-hero-v1 ctaText="Register now" ctaUrl="/"></btn-hero-v1>
      </div>
    </div>
  </section>
</template>

<script>
import btnHeroV1 from '~/components/buttons/btnHeroV1.vue'

export default {
  components: {
    btnHeroV1
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.our-process-hero {
    height: 80vh;
    h1 {
      font-size: 5.2rem;
      font-weight: 600;
      text-align: left;
      color: $brand-color-primary;
    @media (max-width: 768px) {
        font-size: 4.3rem;
    }
    @media (max-width: 425px) {
        font-size: 3.6rem;
    }
    @media (max-width: 320px) {
        font-size: 2.8rem;
    }
  }
}
</style>