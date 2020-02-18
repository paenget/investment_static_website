<template>
  <div class="side-nav-container">
    <div class="side-nav d-flex flex-column">
      <a
        v-for="link in anchors"
        :key="link.id"
        :href="`#${link.name}`"
        :id="link.id"
        class="side-nav-item"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentView: String
  },
  watch: {
    currentView: function(val) {
      if (val === "hero") {
        this.clearActiveClass();
        this.setHeroActive();
      } else if (val === "portfolio-management") {
        this.clearActiveClass();
        this.setPortfolioManagementActive();
      } else if (val === "investment-strategy") {
        this.clearActiveClass();
        this.setInvestmentStrategyActive();
      } else if (val === "unconflicted") {
        this.clearActiveClass();
        this.setUnconflictedActive();
      } else if (val === "blog") {
        this.clearActiveClass();
        this.setBlogActive();
      }
      // this.clearActiveClass();
    }
  },
  mounted() {
    this.clearActiveClass();
  },
  methods: {
    clearActiveClass() {
      document.querySelectorAll(".side-nav-item").forEach(el => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        }
      });
    },
    setHeroActive() {
      document.querySelector("#hero-nav").classList.add("active");
      // console.log("1");
    },
    setPortfolioManagementActive() {
      document
        .querySelector("#portfolioManagement-nav")
        .classList.add("active");
      // console.log("2");
    },
    setInvestmentStrategyActive() {
      document.querySelector("#investmentStrategy-nav").classList.add("active");
      // console.log("3");
    },
    setUnconflictedActive() {
      document.querySelector("#unconflicted-nav").classList.add("active");
      // console.log("4");
    },
    setBlogActive() {
      document.querySelector("#blog-nav").classList.add("active");
      // console.log("5");
    }
  },
  data() {
    return {
      anchors: [
        {
          id: "hero-nav",
          name: "hero",
          alt: "Hero"
        },
        {
          id: "portfolioManagement-nav",
          name: "portfolioManagement",
          alt: "Portfolio Management"
        },
        {
          id: "investmentStrategy-nav",
          name: "investmentStrategy",
          alt: "Investment Strategy"
        },
        {
          id: "unconflicted-nav",
          name: "unconflicted",
          alt: "Unconflicted"
        },
        {
          id: "blog-nav",
          name: "blog",
          alt: "Blog Feature"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.side-nav-container {
  position: fixed;
  right: 0;
  top: 40%;
  .side-nav {
    .side-nav-item {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      margin: 10px 15px;
      background-color: $brand-color-secondary;
      transform: scale(1);
      transition: all 0.4s ease-in-out;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: -16px;
        right: 4px;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background-color: transparent;
        transition: all 0.4s ease-in-out;
      }
      &::after {
        content: "";
        position: absolute;
        top: 24px;
        right: 4px;
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background-color: transparent;
        transition: all 0.4s ease-in-out;
      }
      &:hover {
        background-color: $brand-color-primary;
        transform: scale(1.5);
        margin: 28px 15px;
        &::before {
          content: "";
          position: absolute;
          top: -16px;
          right: 4px;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background-color: $brand-color-primary-25;
        }
        &::after {
          content: "";
          position: absolute;
          top: 24px;
          right: 4px;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background-color: $brand-color-primary-25;
        }
      }
    }
  }
}

.active {
  background-color: $brand-color-primary-50 !important;
  transform: scale(1.5) !important;
}
</style>