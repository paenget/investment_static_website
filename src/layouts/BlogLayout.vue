<template>
  <div class="layout">
    <header class="header">
      <navbar></navbar>
      <div class="back-to-blog-container d-flex justify-content-start align-items-center">
        <div class="d-flex align-items-center px-3 back-to-blog">
          <font-awesome class="mr-3 icon" :icon="['fas', 'chevron-left']" />
          <g-link to="/investment-ideas" class="link">Back to blog</g-link>
        </div>
      </div>
      <blog-progress-bar></blog-progress-bar>
    </header>
    <slot />
    <footer-s></footer-s>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "~/components/global/Navbar.vue";
import FooterS from "~/components/global/FooterS.vue";
import BlogProgressBar from "~/components/global/BlogProgressBar.vue";

export default {
  components: {
    Navbar,
    FooterS,
    BlogProgressBar
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.header {
  position: relative;
}

.back-to-blog-container {
  position: absolute;
  height: 40px;
  width: 100%;
  background-color: #e6e6e6f3;
  .back-to-blog {
    font-size: 1.2rem;
    .icon {
      color: $brand-color-primary;
      transform: translateX(0);
      transition: all 0.4s ease-in-out;
    }
    .link {
      color: $brand-color-primary;
      text-decoration: none;
      transition: all 0.4s ease-in-out;
    }
    &:hover {
      .icon {
        transform: translateX(-8px);
        color: $brand-color-primary-75;
      }
      .link {
        color: $brand-color-primary-75;
      }
    }
  }
}
</style>
