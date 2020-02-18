<template>
  <section class="blog-posts-hero d-flex justify-content-center">
    <div class="d-flex flex-column justify-content-center align-content-center">
      <h1>Investment Ideas</h1>
      <!-- <p>Keeping you informed with the hottest and latest market news</p> -->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.blog-posts-hero {
  height: 60vh;
  background: linear-gradient(
      0deg,
      rgba(30, 86, 112, 0.5),
      rgba(30, 65, 117, 0.5)
    ),
    url("~@/assets/images/global/blog_hero.jpg");
  background-position: bottom;
  background-repeat: none;
  // background-attachment: fixed;
  background-size: cover;
  h1 {
    text-align: center;
    font-size: 4rem;
    font-weight: 500;
    // margin-top: 100px;
    color: $brand-color-white;
    @media (max-width: 768px) {
      font-size: 3.3rem;
    }
    @media (max-width: 425px) {
      font-size: 2.7rem;
    }
    @media (max-width: 320px) {
      font-size: 2.1rem;
    }
  }
  p {
    text-align: center;
    font-size: 1.4rem;
    color: $brand-color-white;
    @media (max-width: 425px) {
      font-size: 1.2rem;
    }
    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }
}
</style>