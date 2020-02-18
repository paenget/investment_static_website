<template>
  <div class="hero-scroll-container">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <p>Scroll down</p>
      <g-image src="~/assets/images/global/arrow.svg" class="icon"></g-image>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.hero-scroll-container {
  position: absolute;
  p {
    color: $brand-color-primary !important;
  }
  .icon {
    width: 100px;
    color: $brand-color-primary !important;
  }
}
</style>
