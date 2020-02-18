<template>
    <div class="home-hero-container d-flex flex-column justify-content-center align-content-center">
        <div class="container home-hero-content">
            <div class="d-flex flex-column justify-content-center col-lg-7 col-md-8 col-sm-12 ">
                <h1 class="mb-5 mt-5">Long Term Investing <br/> Made Clear</h1>
                <btn-hero-v1 ctaText="Learn more on how we can make your assets grow" ctaUrl="/"></btn-hero-v1>
            </div>
        </div>
    </div>
</template>

<script>
import btnHeroV1 from '~/components/buttons/btnHeroV1.vue';

export default {
    components: {
      btnHeroV1
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.home-hero-container {
    background: 
        // linear-gradient(90deg, rgba(61, 140, 201, 0.65) 0%, rgba(144,202,245,.15) 100%), 
        url('~@/assets/images/global/strongview_hero.jpg');
    background-position: left top;
    background-repeat: none;
    background-size: cover;
    height: 85vh;
    h1 {
        font-size: 5.2rem;
        font-weight: 600;
        text-align: left;
        color: $brand-color-primary;
        @media (max-width: 768px) {
            font-size: 4.3rem;
        }
        @media (max-width: 425px) {
            font-size: 3.6rem;
        }
        @media (max-width: 320px) {
            font-size: 2.8rem;
        }
    }
  }

  .home-hero-content {
      position: relative;
      padding: 24px 0;
      &::before {
          position: absolute;
          display: block;
          content: "";
          height: 100%;
          width: 100%;
          background: linear-gradient(90deg, rgb(246, 251, 255) 0%, rgba(228, 243, 255, 0.781) 100%);
          transform: translateX(-500px);
          border-radius: 2px;
          @media (max-width: 1024px) {
            transform: translateX(-430px);              
          }
          @media (max-width: 768px) {
            transform: translateX(-270px);              
          }
          @media (max-width: 425px) {
            transform: translateX(-45px);              
          }
      }
  }

</style>