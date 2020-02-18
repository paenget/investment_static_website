<template>
  <g-link class="btn btn-primary" :to="ctaUrl">{{ ctaText }}</g-link>
</template>

<script>
export default {
  props: {
    ctaText: String,
    ctaUrl: String
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle {
  color: $brand-color-white;
  background-color: $brand-color-primary-75-f;
  border-radius: 2px;
  border-color: #ffffff00;
  font-size: 0.91rem;
  font-weight: 500;
  transition: all 0.35s ease-in-out;
  &:hover {
    background-color: $brand-color-white;
    color: $brand-color-primary;
    border-color: $brand-color-primary-75-f;
  }
}
.btn-primary {
  color: $brand-color-white;
  background-color: $brand-color-primary-75-f;
  border-radius: 2px;
  border-color: #ffffff00;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.35s ease-in-out;
  &:hover {
    background-color: $brand-color-white;
    color: $brand-color-primary-75-f;
    border-color: $brand-color-primary-75-f;
  }
}
</style>