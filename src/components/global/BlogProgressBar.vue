<template>
  <div class="progress-container" :class="{ scroll: windowScrolled }">
    <div class="d-flex justify-content-between align-items-center">
      <div class="progress-bar-page-title">
        <h3 v-html="currentPostTitle"></h3>
        <!-- <h3 v-html="">{{ currentPostTitle }}</h3> -->
      </div>
      <div class="progress-bar-back-to-top">
        <button class="d-flex justify-content-center align-items-center" @click="backToTop">
          <font-awesome class="icon" :icon="['fas', 'chevron-up']" />
          <p>Back to top</p>
        </button>
      </div>
    </div>
    <progress class="scroll-progress" :value="value" max="100"></progress>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postTitle: "test",
      value: 5,
      windowScrolled: false
    };
  },
  computed: {
    currentPostTitle() {
      return this.$store.state.currentPostTitle;
    }
  },
  methods: {
    backToTop() {
      window.scrollTo(0, 0);
    },
    scrollProgress() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      this.value = scrolled;
    },
    updateScroll() {
      window.scrollY > 100
        ? (this.windowScrolled = true)
        : (this.windowScrolled = false);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);

    window.onload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("scroll", this.scrollProgress);
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";
$progressBackground: linear-gradient(
  to right,
  $brand-color-primary-50,
  $brand-color-primary
);

.progress-bar-page-title {
  padding: 0 16px;
  color: $brand-color-text;
  margin: 0;
  h3 {
    font-size: 1.4rem;
    font-weight: 300;
  }
}

.progress-bar-back-to-top {
  color: $brand-color-grey-50;
  padding: 0 16px;
  margin: 0;
  button {
    background-color: unset;
    border: none;
    color: $brand-color-grey-50;
    p {
      font-size: 1rem;
      margin: 0 0 0 4px;
    }
    .icon {
      margin: 0 4px 0 0;
    }
  }
}

.progress-container {
  position: fixed;
  display: block;
  transform: translateY(-100px);
  width: 100%;
  z-index: 5;
  background-color: $brand-color-grey-5;
  top: 0;
  padding: 8px 0 0 0;
  margin: 0;
  transition: all 0.3s ease-in-out;
}

.scroll {
  transform: translateY(0px);
}

.scroll-progress {
  // position: absolute;
  // bottom: -18px;
  left: 0;
  width: 100%;
  appearance: none;
  margin: 0;
  height: 5px;
  padding: 0;
}

progress::-webkit-progress-bar {
  background-color: transparent;
  height: 5px;
  margin: 0;
  padding: 0;
}
progress::-webkit-progress-value {
  background: $progressBackground;
  height: 5px;
  margin: 0;
  padding: 0;
}
progress::-moz-progress-bar {
  background: $progressBackground;
  height: 5px;
  margin: 0;
  padding: 0;
}
</style>