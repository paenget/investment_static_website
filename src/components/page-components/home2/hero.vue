<template>
  <div
    class="home-hero-container d-flex flex-column justify-content-center align-content-center"
  >
    <div class="container home-hero-content">
      <div class="d-flex flex-column justify-content-center">
        <!-- <h1 class="mb-1">Long Term Investing Made Clear</h1> -->
      </div>
      <div class="hero-scroll d-flex flex-column">
        <button @click="scrollDown">
          <p>Click to know more</p>
          <font-awesome class="icon" :icon="['fas', 'chevron-down']" />
        </button>
      </div>
    </div>
  </div>
  <!-- Video Hero-->
  <!--   
  <header
    class="home-hero-container-video d-flex flex-column justify-content-center align-content-center"
  >
    <div class="overlay"></div>
    <div class="hero-scroll d-flex flex-column">
      <button @click="scrollDown">
        <p>Click to know more</p>
        <font-awesome class="icon" :icon="['fas', 'chevron-down']" />
      </button>
    </div>
    <video loop="loop" muted="muted" playsinline="playsinline" autoplay class="hero-video">
      <source src="@/assets/video/mountain_hero_5.mp4" type="video/mp4" />
    </video>
    <div class="container home-hero-content-video">
      <div class="d-flex flex-column justify-content-center">
        <h1 class="mb-1">Long Term Investing Made Clear</h1>
      </div>
    </div>
  </header>-->
</template>

<script>
import btnHeroV1 from "~/components/buttons/btnHeroV1.vue";
import btnPrimary from "~/components/buttons/btnPrimary.vue";

export default {
  components: {
    btnHeroV1,
    btnPrimary
  },
  methods: {
    scrollDown() {
      let pageHeight = window.innerHeight;
      window.scrollBy(0, pageHeight);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

// header {
//   position: relative;
//   background-color: black;
//   height: calc(100vh - 74px);
//   min-height: 75vh;
//   width: 100%;
//   overflow: hidden;
//   video {
//     position: absolute;
//     top: 25%;
//     left: 50%;
//     min-width: 100%;
//     min-height: 100%;
//     width: auto;
//     height: auto;
//     z-index: 0;
//     -ms-transform: translateX(-50%) translateY(-50%);
//     -moz-transform: translateX(-50%) translateY(-50%);
//     -webkit-transform: translateX(-50%) translateY(-50%);
//     transform: translateX(-50%) translateY(-50%);
//   }
//   .container {
//     position: relative;
//     z-index: 2;
//     h1 {
//       // margin: 150px 0;
//       font-size: 4rem;
//       font-weight: 500;
//       text-align: center;
//       color: $brand-color-white;
//       @media (max-width: 768px) {
//         font-size: 3.3rem;
//       }
//       @media (max-width: 425px) {
//         font-size: 2.7rem;
//       }
//       @media (max-width: 320px) {
//         font-size: 2.1rem;
//       }
//     }
//   }
//   .overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100%;
//     width: 100%;
//     // background-color: $brand-color-primary;
//     background: linear-gradient(
//       0deg,
//       rgba(30, 86, 112, 0.5),
//       rgba(30, 65, 117, 0.7)
//     );
//     opacity: 1;
//     z-index: 1;
//     pointer-events: none;
//   }
//   .hero-scroll {
//     position: absolute;
//     width: 200px;
//     z-index: 2;
//     bottom: 0;
//     left: calc(50% - 100px);
//     button {
//       background-color: transparent;
//       border: none;
//       margin-bottom: 20px;
//       color: $brand-color-white;
//       transform: scale(1);
//       transition: all 0.2s ease-in-out;
//       p {
//         font-size: 1.4rem;
//         font-weight: 500;
//       }
//       .icon {
//         margin: 0;
//         font-size: 2rem;
//         transform: translateY(0);
//         transition: all 0.2s ease-in-out;
//       }
//       &:hover {
//         color: $brand-color-grey-50;
//         .icon {
//           transform: translateY(8px);
//         }
//       }
//     }
//   }
// }

#heroBtn {
  font-size: 1.2rem !important;
}

.home-hero-container {
  // background: linear-gradient(
  //     0deg,
  //     rgba(30, 86, 112, 0.6),
  //     rgba(30, 65, 117, 0.6)
  //   ),
  //   url("~@/assets/images/global/strongview_hero_2.jpg");
  background: url("~@/assets/images/global/strongview_hero_2.jpg");
  background-position: center;
  background-repeat: none;
  background-attachment: fixed;
  background-size: cover;
  height: 90vh;
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    background-attachment: unset;
  }

  p {
    font-size: 1.4rem;
    text-align: center;
    color: $brand-color-white;
    margin-bottom: 40px;
    @media (max-width: 425px) {
      font-size: 1.2rem;
    }
    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }
  h1 {
    // margin: 150px 0;
    font-size: 4rem;
    font-weight: 500;
    text-align: center;
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
}

.home-hero-content {
  position: relative;
  padding: 24px 0;
  .hero-scroll {
    position: absolute;
    width: 300px;
    z-index: 2;
    bottom: -200px;
    left: calc(50% - 150px);
    @media (min-width: 2560px) {
      bottom: -500px;
    }
    @media (max-width: 1440px) {
      bottom: -280px;
    }
    @media (max-width: 1024px) {
      bottom: -320px;
    }
    @media (max-width: 768px) {
      bottom: -320px;
    }
    @media (max-width: 425px) {
      bottom: -220px;
    }
    button {
      background-color: transparent;
      border: none;
      margin-bottom: 10px;
      // color: $brand-color-grey-25 !important;
      transform: scale(1);
      transition: all 0.2s ease-in-out;
      p {
        font-size: 1.6rem;
        font-weight: 500;
        color: $brand-color-grey !important;
        text-shadow: 2px 2px 2px $brand-color-grey-25;
      }
      .icon {
        // margin: 0;
        color: $brand-color-grey !important;
        font-size: 2rem;
        transform: translateY(-20px);
        transition: all 0.2s ease-in-out;
      }
      &:hover {
        // color: $brand-color-grey-25;
        .icon {
          transform: translateY(0px);
        }
      }
    }
  }
}
</style>
