<template>
  <div class="request-password-container d-flex">
    <div class="container d-flex justify-content-center align-items-center">
      <div
        class="request-password d-flex flex-column justify-content-center align-items-center col-sm-6 col-12"
      >
        <h4>Click on the link below to reset password</h4>
        <a class="btn btn-primary" :href="requestLink">Reset Password</a>
      </div>
    </div>
  </div>
</template>

<script>
import btnPrimary from "~/components/buttons/btnPrimary.vue";

export default {
  components: {
    btnPrimary
  },
  data() {
    return {
      requestLink: "https://testreset.com"
    };
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
  font-size: 0.9rem;
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

.request-password-container {
  height: 100vh;
  width: 100vw;
  background-color: $brand-color-secondary;
  .request-password {
    background-color: #fff;
    padding: 40px;
    border-radius: 2px;
    @media (max-width: 375px) {
      padding: 40px 20px;
    }
    h4 {
      font-size: 1.5rem;
      margin-bottom: 16px;
      color: $brand-color-secondary;
    }
    p {
      font-size: 1.2rem;
      margin: 0;
    }
  }
}
</style>