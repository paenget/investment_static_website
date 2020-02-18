<template>
  <b-navbar toggleable="xl" type="light" id="main-nav">
    <b-navbar-brand to="/">
      <g-image class="logo" src="~/assets/images/global/strongview_sub_logo.png" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <g-link class="link" to="/origin-of-strongview">Origin of StrongView</g-link>
        <g-link class="link" to="/our-team">Our Team</g-link>
        <!-- <g-link class="link" to="/portfolio-investments">Portfolio Investments</g-link> -->
        <g-link class="link" to="/investment-ideas">Investment Ideas</g-link>
        <g-link class="link" to="/liquid-alt">Liquid Alt</g-link>
      </b-navbar-nav>

      <b-navbar-nav class="ml-xl-3">
        <div>
          <btn-primary ctaText="Member Enrollment" ctaUrl="/member-enrollment"></btn-primary>
        </div>
      </b-navbar-nav>
      <b-navbar-nav class="ml-xl-2" v-if="!userToken">
        <div class="d-flex justify-content-start pt-lg-2 pt-xl-0">
          <g-link to="/login" class="btn-login">
            <p>LOG IN</p>
          </g-link>
        </div>
      </b-navbar-nav>
      <b-navbar-nav class="ml-xl-2" v-else>
        <div class="d-flex justify-content-start pt-lg-2 pt-xl-0">
          <button @click="logout" class="btn btn-login">
            <p>LOG OUT</p>
          </button>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import btnPrimary from "~/components/buttons/btnPrimary.vue";

export default {
  components: {
    btnPrimary
  },
  data() {
    return {
      userToken: null
    };
  },

  mounted() {
    let strongUserToken = localStorage.getItem("strongUserToken");
    this.userToken = strongUserToken;

    // console.log(this.userToken);
  },

  methods: {
    logout() {
      this.userToken = null;
      localStorage.removeItem("strongUserToken");
      location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.btn-login {
  text-decoration: none;
  p {
    padding: 4px 8px;
    margin: 0;
    color: $brand-color-primary-75;
    font-size: 1rem;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    p {
      border: 1px solid $brand-color-primary;
      border-radius: 2px;
    }
  }
}

#main-nav {
  padding: 10px 40px;
  @media (max-width: 768px) {
    padding: 10px 20px;
  }
}

.logo {
  width: 370px;
  @media (max-width: 425px) {
    width: 250px;
  }
  @media (max-width: 375px) {
    width: 190px;
  }
}

.navbar-light .navbar-nav .nav-link,
.navbar-light .navbar-nav .link {
  color: $brand-color-grey;
  font-size: 1.15rem;
  font-weight: 400;
  opacity: 0.85;
  display: inline-block;
  position: relative;
  margin: 0 0 0 20px;
  transition: all 0.6s ease-in-out;
  @media (max-width: 1024px) {
    margin: 8px 0 8px 0;
  }
  &::before {
    transition: 300ms;
    transform: translateY(10px);
    text-decoration: none;
    height: 2px;
    width: 0%;
    bottom: 5px;
    content: "";
    position: absolute;
    background-color: $brand-color-primary;
  }
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .link:focus,
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .link:hover {
  color: $brand-color-primary;
  text-decoration: none;
  &::before {
    width: 100%;
    @media (max-width: 768px) {
      width: 15%;
    }
    @media (max-width: 425px) {
      width: 27%;
    }
    @media (max-width: 375px) {
      width: 30%;
    }
    @media (max-width: 320px) {
      width: 38%;
    }
  }
}
</style>
