<template>
  <div>
    <button class="btn-secondary">{{btnText}}</button>
  </div>
</template>

<script>
export default {
  props: {
    btnText: null
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.btn-secondary:not(:disabled):not(.disabled).active,
.btn-secondary:not(:disabled):not(.disabled):active,
.show > .btn-secondary.dropdown-toggle {
  color: $brand-color-white;
  background-color: $brand-color-primary;
  border-radius: 2px;
  border-color: #ffffff00;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.35s ease-in-out;
  &:hover {
    background-color: $brand-color-white;
    color: $brand-color-primary;
    border-color: $brand-color-primary;
  }
}
.btn-secondary {
  color: $brand-color-white;
  background-color: $brand-color-primary;
  border-radius: 2px;
  border-color: #ffffff00;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.35s ease-in-out;
  &:hover {
    background-color: $brand-color-white;
    color: $brand-color-primary;
    border-color: $brand-color-primary;
  }
}
</style>