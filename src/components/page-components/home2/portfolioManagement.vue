<template>
  <section class="portfolio-management-container">
    <div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1>Long Term Investing Made Clear</h1>
        <h2>Focused on Portfolio Management</h2>
        <hr class="divider" />
      </div>
      <b-tabs class="tabs" justified active-nav-item-class="active-tab">
        <!-- TAB 1 -->
        <b-tab title="Day in the life" active>
          <div class="tab-content pt-5">
            <div class="d-flex flex-column container">
              <!-- <div class="day-in-life container pb-2 pt-3"> -->
              <!-- <h4>
                  We spend 60% of our day on Portfolio Management and 15% on
                  Trade Execution, compared to Private banks that spend only
                  12.5% on Portfolio Management and 12.5% Trade Execution.
              </h4>-->
              <!-- </div>  -->
              <div class="d-flex flex-wrap charts-day">
                <div class="col-sm-6 col-12 pt-3">
                  <!-- <chart-pie-bank></chart-pie-bank> -->
                  <h3 class="pb-1">Day in A Private Bank</h3>
                  <p>25% spent on portfolio management</p>
                  <g-image
                    immediate="false"
                    class="chart-img"
                    src="~/assets/images/global/chart_bank.png"
                  />
                </div>
                <div class="day-in-life-sv col-sm-6 col-12 pt-3">
                  <h3 class="pb-1">Day in StrongView</h3>
                  <p>75% spent on portfolio management</p>
                  <g-image
                    immediate="false"
                    class="chart-img"
                    src="~/assets/images/global/chart_sv.png"
                  />
                  <!-- <chart-pie-sv></chart-pie-sv> -->
                </div>
              </div>
            </div>
          </div>
        </b-tab>
        <!-- TAB 2 -->
        <b-tab title="Realtime Monitoring & Rebalancing">
          <div class="tab-content pt-5 pb-5">
            <div
              class="monitoring-container container d-flex flex-wrap justify-content-center align-items-between"
            >
              <div class="monitoring-item d-flex flex-column col-sm-4 col-12">
                <h4 class="title">Daily</h4>
                <ul>
                  <li>
                    <p>We monitor markets and securities daily.</p>
                  </li>
                  <li>
                    <p>Technical: price action, momentum, and sentiment</p>
                  </li>
                  <li>
                    <p>Fundamental: valuation</p>
                  </li>
                </ul>
              </div>

              <div class="monitoring-item d-flex flex-column col-sm-4 col-12">
                <h4 class="title">Weekly</h4>
                <ul>
                  <li>
                    <p>Portfolio review</p>
                  </li>
                </ul>
              </div>

              <div class="monitoring-item d-flex flex-column col-sm-4 col-12">
                <h4 class="title">Monthly</h4>
                <ul>
                  <li>
                    <p>Asset Allocation Review</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </b-tab>
        <!-- TAB 3 -->
        <b-tab title="Best of Breed Research">
          <div class="tab-content pt-5 research-container">
            <div class="d-flex flex-column container">
              <h4>Decisions Based on Extensive Research</h4>
              <p>
                Distilled research from various private banks and newsfeeds to
                identify and monitor investment ideas
              </p>
              <div
                class="sources-container d-flex flex-wrap justify-content-center align-items-center"
              >
                <div
                  class="sources-item col-sm-2 col-6 d-flex justify-content-center align-items-center"
                >
                  <g-image
                    immediate="false"
                    id="source-item-img"
                    src="~/assets/images/global/julius_bar.png"
                  ></g-image>
                </div>
                <div
                  class="sources-item col-sm-2 col-6 d-flex justify-content-center align-items-center"
                >
                  <g-image
                    immediate="false"
                    id="source-item-img"
                    src="~/assets/images/global/deutsche_bank.png"
                  ></g-image>
                </div>
                <div
                  class="sources-item col-sm-2 col-6 d-flex justify-content-center align-items-center"
                >
                  <g-image
                    immediate="false"
                    id="source-item-img"
                    src="~/assets/images/global/hsbc.png"
                  ></g-image>
                </div>
                <div
                  class="sources-item col-sm-2 col-6 d-flex justify-content-center align-items-center"
                >
                  <g-image
                    immediate="false"
                    id="source-item-img"
                    src="~/assets/images/global/baml.png"
                  ></g-image>
                </div>
                <div
                  class="sources-item col-sm-2 col-6 d-flex justify-content-center align-items-center"
                >
                  <g-image
                    immediate="false"
                    id="source-item-img"
                    src="~/assets/images/global/lgt.png"
                  ></g-image>
                </div>
                <div
                  class="sources-item col-sm-2 col-6 d-flex justify-content-center align-items-center"
                >
                  <g-image
                    immediate="false"
                    id="source-item-img"
                    src="~/assets/images/global/safra_sarasin.png"
                  ></g-image>
                </div>
                <div
                  class="sources-item col-sm-2 col-6 d-flex justify-content-center align-items-center"
                >
                  <g-image
                    immediate="false"
                    id="source-item-img"
                    src="~/assets/images/global/cult_wines.png"
                  ></g-image>
                </div>
                <div
                  class="sources-item col-sm-2 col-6 d-flex justify-content-center align-items-center"
                >
                  <g-image
                    immediate="false"
                    id="source-item-img"
                    src="~/assets/images/global/liv_ex.png"
                  ></g-image>
                </div>
                <!-- <div class="sources-item col-sm-4 col-12 d-flex flex-column">
                  <div class="d-flex justify-content-center align-content-center">
                    <g-image id="source-item-img" src="~/assets/images/global/julius_bar.png"></g-image>
                  </div>
                  <h5>Investment Themes and Stocks</h5>
                </div>
                <div class="sources-item col-sm-4 col-12 d-flex flex-column">
                  <div class="d-flex justify-content-center align-content-center">
                    <g-image id="source-item-img" src="~/assets/images/global/bank_singapore.png"></g-image>
                  </div>
                  <h5>Emerging Market Bonds</h5>
                </div>
                <div class="sources-item col-sm-4 col-12 d-flex flex-column">
                  <div class="d-flex justify-content-center align-content-center">
                    <g-image id="source-item-img" src="~/assets/images/global/pictet.png"></g-image>
                  </div>
                  <h5>Niche Views</h5>
                </div>-->
              </div>
              <div class="sources-other-container container">
                <h4>Other Sources:</h4>
                <div class="d-flex flex-wrap justify-content-between">
                  <div
                    class="sources-other-item col-sm-3 col-md-4 col-6 d-flex justify-content-center align-items-center"
                  >
                    <g-image
                      immediate="false"
                      class="sources-other-img"
                      src="~/assets/images/global/foreign_affairs.png"
                    ></g-image>
                  </div>
                  <div
                    class="sources-other-item col-sm-3 col-md-4 col-6 d-flex justify-content-center align-items-center"
                  >
                    <g-image
                      immediate="false"
                      class="sources-other-img"
                      src="~/assets/images/global/seeking-alpha.png"
                    ></g-image>
                  </div>
                  <div
                    class="sources-other-item col-sm-3 col-md-4 col-6 d-flex justify-content-center align-items-center"
                  >
                    <g-image
                      immediate="false"
                      class="sources-other-img"
                      src="~/assets/images/global/financial_times.png"
                    ></g-image>
                  </div>
                  <div
                    class="sources-other-item col-sm-3 col-md-4 col-6 d-flex justify-content-center align-items-center"
                  >
                    <g-image
                      immediate="false"
                      class="sources-other-img"
                      src="~/assets/images/global/economist.png"
                    ></g-image>
                  </div>
                  <div
                    class="sources-other-item col-sm-3 col-md-4 col-6 d-flex justify-content-center align-items-center"
                  >
                    <g-image
                      immediate="false"
                      class="sources-other-img"
                      src="~/assets/images/global/wall_street_journal.png"
                    ></g-image>
                  </div>
                  <div
                    class="sources-other-item col-sm-3 col-md-4 col-6 d-flex justify-content-center align-items-center"
                  >
                    <g-image
                      immediate="false"
                      class="sources-other-img"
                      src="~/assets/images/global/real_vision.png"
                    ></g-image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script>
import chartPieBank from "~/components/charts/chartPieBank.vue";
import chartPieSv from "~/components/charts/chartPieSv.vue";

export default {
  components: {
    chartPieBank,
    chartPieSv
  }
};
</script>

<style lang="scss">
@import "~/assets/styles/styles.scss";

.charts-day {
  h3 {
    text-align: center;
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
    color: $brand-color-primary;
  }
}

.chart-img {
  width: 100%;
}

.day-in-life {
  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    color: $brand-color-text;
  }
}

.portfolio-management-container {
  background-color: $brand-color-primary;
  h1 {
    font-size: 2.8rem;
    padding: 40px 0 60px 0;
    color: $brand-color-white;
    text-align: center;
  }
  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: $brand-color-white;
    text-align: center;
    // margin: 0 0 42px 0;
  }
  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    background-color: $brand-color-secondary !important;
    color: $brand-color-white !important;
    font-weight: 600;
    position: relative;
    &::after {
      content: "";
      display: inline-block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 15px 60px 0 60px;
      border-color: $brand-color-secondary transparent transparent transparent;
      position: absolute;
      z-index: 0;
      bottom: -10px;
      left: calc(50% - 60px) !important;
      @media (max-width: 425px) {
        border-width: 15px 30px 0 30px;
        left: calc(50% - 30px) !important;
      }
    }
  }
  .nav-tabs .nav-link {
    background-color: #ffffff00 !important;
    border-bottom: 2px solid $brand-color-secondary !important;
    border-radius: 2px;
    color: $brand-color-secondary !important;
    height: 100%;
    font-size: 1.2rem;
    position: relative;
    @media (max-width: 375px) {
      font-size: 0.9rem;
    }
    @media (max-width: 320px) {
      font-size: 0.65rem;
    }
    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      border-top: 2px solid $brand-color-secondary;
      width: 0%;
      z-index: 1;
      top: 0;
      left: 0;
      transition: all 0.4s ease-in-out;
    }
    &:hover::before {
      width: 100%;
    }
  }
}

.tabs {
  background-color: $brand-color-white;
  padding: 24px 24px 0 24px;
}

.tab-content {
  padding: 0 0 40px 0;
}

.day-in-life-sv {
  background: rgb(177, 217, 247);
  background: linear-gradient(
    90deg,
    rgba(177, 217, 247, 0.5) 0%,
    rgba(144, 202, 245, 0.5) 100%
  );
  border-radius: 2px;
  border: 2px solid #ffffff00;
  transition: all 0.4s ease-in-out;
  &:hover {
    border: 2px solid $brand-color-primary;
  }
}

.monitoring-container {
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: $brand-color-primary;
    text-align: center;
  }
  .monitoring-item {
    padding: 0 0 80px 0;
    h4 {
      font-size: 1.6rem;
      font-weight: 600;
      color: $brand-color-primary;
      padding: 0 0 14px 0;
    }
    p {
      font-size: 1.2rem;
      font-weight: 400;
      text-align: left;
      color: $brand-color-text;
    }
    img {
      width: 100%;
    }
  }
}

.research-container {
  h4 {
    font-size: 1.6rem;
    font-weight: 600;
    color: $brand-color-primary;
    padding: 0 0 14px 0;
  }
  p {
    font-size: 1.2rem;
    font-weight: 400;
    color: $brand-color-text;
  }
  .sources-container {
    padding: 20px 0;
    .sources-item {
      padding: 24px 0;
      #source-item-img {
        width: 200px;
        @media (max-width: 1024px) {
          width: 170px;
        }
        @media (max-width: 768px) {
          width: 130px;
        }
      }
      h5 {
        color: $brand-color-primary-75;
        text-align: center;
        padding: 14px 0 0 0;
      }
    }
  }
  .sources-other-container {
    padding: 20px 0;
    .sources-other-item {
      padding: 24px 0;
      .sources-other-img {
        width: 200px;
        @media (max-width: 768px) {
          width: 140px;
        }
        @media (max-width: 375px) {
          width: 140px;
        }
      }
    }
  }
}

.divider {
  width: 50%;
  height: 1px;
  border-radius: 5px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.25) 0%,
    rgba(255, 255, 255, 0.75) 15%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.75) 85%,
    rgba(255, 255, 255, 0.25) 100%
  );
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 425px) {
    width: 90%;
  }
}

.title {
  margin: 0 auto;
}
</style>
