<template>
  <Layout>
    <div class="home-wrapper">
      <hero id="hero" />
      <div class="home-value-prop-container">
        <portfolioManagement id="portfolioManagement"></portfolioManagement>
        <investment-strategy id="investmentStrategy"></investment-strategy>
        <unconflicted id="unconflicted"></unconflicted>
      </div>
      <blog-feature id="blog" />
      <hr />
    </div>
  </Layout>
</template>

<script>
import hero from "~/components/page-components/home2/hero.vue";
import blogFeature from "~/components/page-components/home2/blogFeature.vue";
import btnPrimary from "~/components/buttons/btnPrimary.vue";
import unconflicted from "~/components/page-components/home2/unconflicted.vue";
import portfolioManagement from "~/components/page-components/home2/portfolioManagement.vue";
import investmentStrategy from "~/components/page-components/home2/investmentStrategy.vue";
// import homeSideNav from "~/components/global/homeSideNav.vue";

export default {
  data() {
    return {
      currentView: null
    };
  },
  metaInfo() {
    return {
      title: "StrongView Investment Management",
      description: "Long Term Investing Made Clear"
    };
  },
  components: {
    hero,
    blogFeature,
    btnPrimary,
    unconflicted,
    portfolioManagement,
    investmentStrategy
    // homeSideNav
  },
  methods: {
    // heroVisible(isVisible, entry) {
    //   // console.log("hero visible");
    //   this.currentView = "hero";
    // },
    // unconflictedVisible(isVisible, entry) {
    //   // console.log("Unconficted visible");
    //   this.currentView = "unconflicted";
    // },
    // portfolioManagementVisible(isVisible, entry) {
    //   // console.log("portfolioManagement visible");
    //   this.currentView = "portfolio-management";
    // },
    // investmentStrategyVisible(isVisible, entry) {
    //   // console.log("investmentStrategy visible");
    //   this.currentView = "investment-strategy";
    // },
    // blogVisible(isVisible, entry) {
    //   // console.log("blog visible");
    //   this.currentView = "blog";
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.home-wrapper {
  position: relative;
}

.home-value-prop-container {
  .home-value-prop-welcome {
    background-color: $brand-color-white;
    .message {
      padding: 80px 25px 80px 15px;
    }
    #home-welcome-img {
      background: url("~@/assets/images/global/strongview_home_1.jpg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      // background-attachment: fixed;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        display: inline-block;
        width: 2px;
        left: -20px;
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
