<template>
  <footer>
    <div class="container">
      <div class="d-flex flex-wrap">
        <div
          class="footer-logo-container col-md-4 col-sm-6 d-flex flex-column justify-content-start"
        >
          <g-image class="logo" src="~/assets/images/global/strongview_sub_logo.png" />
          <p class="mt-3 pr-3">Long Term Investing Made Clear.</p>
        </div>

        <div
          class="menu-links-container col-md-3 col-sm-6 d-flex flex-column justify-content-start"
        >
          <h3>Menu</h3>
          <g-link to="/" class="menu-link">Home</g-link>
          <g-link to="/member-enrollment" class="menu-link">Member Enrollment</g-link>
          <g-link to="/login" class="menu-link">Log in</g-link>
          <g-link to="/origin-of-strongview" class="menu-link">Origin of StrongView</g-link>
          <g-link to="/our-team" class="menu-link">Our Team</g-link>
          <!-- <g-link to="/portfolio-investments" class="menu-link">Portfolio Investments</g-link> -->
          <g-link to="/investment-ideas" class="menu-link">Investment Ideas</g-link>
          <g-link to="/liquid-alt" class="menu-link">Liquid Alt</g-link>
        </div>

        <div class="contact-footer col-md-3 col-sm-6 d-flex flex-column justify-content-start">
          <h3>Contact</h3>
          <a
            href="mailto:research@strongview.com.ph.com?Subject=Strongview%20Inquiry"
            target="_top"
          >research@strongview.com.ph</a>
          <a href="tel:+639175299937" target="_blank">+63 (917) 529 9937</a>
          <a href="https://goo.gl/maps/exGyHdQByBvHtqVB8" target="_blank">
            <p>
              160 Robinson Road
              <br />#14-04 Singapore
              <br />068914
            </p>
          </a>
        </div>

        <div class="social-footer col-md-2 col-sm-6 d-flex flex-column justify-content-start">
          <h3>Social</h3>
          <div class="social-links d-flex justify-content-start">
            <a
              href="https://www.linkedin.com/company/strongview-incorporated/about/"
              class="link pl-1 pr-1"
              target="_blank"
            >
              <font-awesome :icon="['fab', 'linkedin']" />
            </a>
            <a href="https://twitter.com/strngvw?lang=en" class="link pl-1 pr-1" target="_blank">
              <font-awesome :icon="['fab', 'twitter-square']" />
            </a>
            <!-- <a href class="link pl-1 pr-1" target="_blank">
              <font-awesome :icon="['fab', 'facebook-square']" />
            </a>-->
          </div>
        </div>
      </div>
    </div>

    <div class="sub-footer d-flex justify-content-center align-items-center">
      <p>2019 © Strongview Inc Pte. Ltd.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.footer-logo-container {
  padding: 14px 0;
  p {
    font-size: 1.4rem;
    color: $brand-color-text;
  }
}
.logo {
  width: 80%;
}
.menu-links-container,
.contact-footer,
.social-footer {
  padding: 14px 0;
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: $brand-color-primary;
  }
  a {
    font-size: 1.05rem;
    font-weight: 500;
    color: $brand-color-primary-75;
    transition: all 0.4s ease-in-out;
    transform: scale(1);
    padding: 8px 0;
    &:hover {
      color: $brand-color-primary;
      text-decoration: none;
      transform: scale(1.009);
    }
  }
}

.social-links {
  .link {
    font-size: 1.8rem;
  }
}

.sub-footer {
  background-color: $brand-color-primary;
  padding: 8px 0;
  p {
    color: $brand-color-white;
    font-size: 0.9rem;
    margin: 0;
    font-size: 400;
  }
}
</style>
