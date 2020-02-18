<template>
    <g-link :to="ctaUrl" class="home-btn-link-container" id="test">
        <div class="home-btn">
            <div class="d-flex justify-content-start align-items-center">
              <div class="col-10">
                <p>{{ ctaText }}</p>
              </div>
              <div class="col-2 d-flex justify-content-start align-items-start">
                <span class="icon"><font-awesome :icon="['fas', 'chevron-right']"/></span>
              </div>
            </div>
        </div>
    </g-link>
</template>

<script>
export default {
    props: {
        ctaText: String,
        ctaUrl: String
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.home-btn-link-container {
      padding: 0 40px 0 0;
      .home-btn {
        border-right: 2px solid #ffffff00;
        border-radius: 2px;
        padding: 8px 8px 8px 0;
        position: relative;
        transition: all .45s ease-in-out;
        .icon {
          color: $brand-color-grey;
          transition: all 0.35s ease-in-out;
          font-size: 2.3rem;
        }
        &::after {
            position:absolute;
            top:0;
            left:0;
            height:2px;
            width:0%;
            // background-color:$brand-color-white;
            background-color:$brand-color-grey;
            display:block;
            content:'';
            transition:0.35s ease-in-out;
        }
        &::before {
            position:absolute;
            bottom:0;
            right:0;
            height:2px;
            width:0%;
            // background-color:$brand-color-white;
            background-color:$brand-color-grey;
            display:block;
            content:'';
            transition:0.35s ease-in-out;
        }
        p {
          margin: 0;
          font-size: 1.4rem;
          text-align: right;
          // color: $brand-color-white;
          color: $brand-color-grey;
          padding: 10px 10px 10px 0;
          transition: all .35s ease-in-out;
          @media (max-width: 768px) {
            font-size: 1.5rem;
          }
          @media (max-width: 425px) {
            font-size: 1.1rem;
          }
          @media (max-width: 375px) {
            font-size: 1rem;
          }
          @media (max-width: 320px) {
            font-size: .9rem;
          }
        }
      }
        &:hover {
        text-decoration: none;
        .home-btn {
            border-right: 2px solid $brand-color-primary;
            &::after {
                background-color: $brand-color-primary;
                width: 100%;
            }
            &::before {
                background-color: $brand-color-primary;
                width: 100%;
            }
        //   border-top: 2px solid $brand-color-primary;
        //   border-bottom: 2px solid $brand-color-primary;
        //   border-right: 2px solid $brand-color-primary;
          p, .icon {
            color: $brand-color-primary;
          }
        }
      }
    }

</style>