<template>
  <section class="home-value-prop-container">
    <div class="home-value-prop-welcome d-flex flex-wrap">
      <div
        class="message col-md-7 col-sm-12 d-flex flex-column justify-content-start align-items-start"
      >
        <h2>Welcome to Strongview</h2>
        <h4>Unconflicted Asset Management</h4>
        <p>Lorem ipsum keme keme keme 48 years boyband intonses wrangler ano keme chapter at nang tetetet ng kasi klapeypey-klapeypey</p>
      </div>
      <div
        class="col-md-5 col-sm-12 d-flex justify-content-center align-items-center"
        id="home-welcome-img"
      ></div>
    </div>
    <unconflicted></unconflicted>
    <portfolioManagement></portfolioManagement>
    <investment-strategy></investment-strategy>
  </section>
</template>

<script>
import btnPrimary from "~/components/buttons/btnPrimary.vue";
import unconflicted from "~/components/page-components/home2/unconflicted.vue";
import portfolioManagement from "~/components/page-components/home2/portfolioManagement.vue";
import investmentStrategy from "~/components/page-components/home2/investmentStrategy.vue";

export default {
  components: {
    btnPrimary,
    unconflicted,
    portfolioManagement,
    investmentStrategy
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.home-value-prop-container {
  .home-value-prop-welcome {
    background-color: $brand-color-white;
    .message {
      padding: 80px 25px 80px 15px;
    }
    #home-welcome-img {
      background: url("~@/assets/images/global/placeholder_default.jpg");
      background-position: center;
      background-size: cover;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        display: inline-block;
        width: 2px;
        left: -30px;
        background-color: $brand-color-primary;
        height: 90%;
      }
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: $brand-color-primary;
    }
    h4 {
      font-size: 2.5rem;
      font-weight: 400;
      color: $brand-color-primary-75;
    }
    p {
      font-size: 1.2rem;
      font-weight: 400;
      color: $brand-color-text;
    }
    @media (max-width: 768px) {
      h2 {
        font-size: 1.4rem;
      }
      h4 {
        font-size: 2.1rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
}
</style>