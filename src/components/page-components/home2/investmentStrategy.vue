<template>
  <section class="investment-strategy-container">
    <div>
      <h2>Investment Process</h2>
      <b-tabs justified active-nav-item-class="active-tab">
        <!-- TAB 1 -->
        <b-tab title="Capital Preservation">
          <div class="tab-content pt-5">
            <div class="capital-preservation d-flex flex-column align-items-center container">
              <!-- <h3>
                We have a strict stop loss policy of
                <span class="percent">15%</span>
              </h3>-->
              <q>Profits compound but loses are exponential.</q>
              <p>
                Long-term investment success is our goal and for us to achieve
                that severe loses must be avoided.
              </p>
              <g-image
                immediate="false"
                class="cp-image"
                src="~/assets/images/global/capital_preservation_graph.jpg"
              ></g-image>
            </div>
          </div>
        </b-tab>
        <!-- TAB 2 -->
        <b-tab title="Asset Allocation" active>
          <div class="tab-content pt-5">
            <div class="d-flex flex-wrap vert-wrapper charts-day container">
              <!-- <chart-pie-type class="col-md-4 col-sm-6 col-12"></chart-pie-type> -->
              <!-- <chart-pie-central class="col-sm-6 col-12"></chart-pie-central> -->
              <div
                class="col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center"
              >
                <h3 class="pb-1">Model Portfolio</h3>
                <g-image
                  immediate="false"
                  class="chart-img"
                  src="~/assets/images/global/chart_model.png"
                />
              </div>
              <div class="vert-line"></div>

              <div
                class="mt-sm-0 mt-5 col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center"
              >
                <h3 class="pb-1">Equity Sector Allocation</h3>
                <g-image
                  immediate="false"
                  class="chart-img"
                  src="~/assets/images/global/chart_sector.png"
                />
              </div>
              <!-- <chart-pie-sector class="col-sm-6 col-12"></chart-pie-sector> -->
            </div>

            <div class="container pt-5">
              <chart-geo-assets-google></chart-geo-assets-google>
            </div>
          </div>
        </b-tab>
        <!-- TAB 3 -->
        <b-tab title="Technical Signaling Momentum">
          <div class="tab-content pt-5 technical-signaling-container container">
            <!-- <h3>Data-driven Strategies</h3> -->
            <!-- <p>
              There are difficulties in predicting market cycles and for us to
              mitigate risks on investors' portfolios we practice data-driven
              strategies together with robust investment processes for asset
              allocation decisions.
            </p>-->
            <div class="d-flex flex-wrap stats justify-content-between">
              <div
                class="mb-3 col-sm-4 col-12 d-flex justify-content-center align-items-center signaling"
              >
                <h4>Technical Momentum</h4>
              </div>
              <div
                class="mb-3 stats-cont d-flex flex-wrap col-sm-7 col-12 align-items-center justify-content-center"
              >
                <div
                  class="p-3 d-flex flex-column justify-content-center align-items-center col-sm-4 col-6"
                >
                  <h5>RSI</h5>
                  <p>Relative Strength Index</p>
                </div>
                <div
                  class="p-3 d-flex flex-column justify-content-center align-items-center col-sm-4 col-6"
                >
                  <h5>CCI</h5>
                  <p>Commodity Channel Index</p>
                </div>
                <div
                  class="p-3 d-flex flex-column justify-content-center align-items-center col-sm-4 col-6"
                >
                  <h5>MACD</h5>
                  <p>Moving Average Convergence/Divergence</p>
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
// import chartPieType from "~/components/charts/chartPieType.vue";
import chartPieSector from "~/components/charts/chartPieSector.vue";
import chartPieCentral from "~/components/charts/chartPieCentral.vue";
import chartGeoAssetsGoogle from "~/components/charts/chartGeoAssetsGoogle.vue";

export default {
  components: {
    chartGeoAssetsGoogle,
    // chartPieType,
    chartPieSector,
    chartPieCentral
  }
};
</script>

<style lang="scss">
@import "~/assets/styles/styles.scss";

.charts-day {
  h3 {
    text-align: center;
    font-size: 2rem;
    color: $brand-color-primary;
  }
}

.chart-img {
  width: 100%;
}

.vert-wrapper {
  position: relative;
  .vert-line {
    border-left: 2px solid $brand-color-primary-75;
    height: 90%;
    position: absolute;
    left: 50%;
    margin-left: -3px;
    top: 0;
    bottom: 0;
    @media (max-width: 425px) {
      display: none;
    }
  }
}

.technical-signaling-container {
  p {
    font-size: 1.3rem;
    text-align: center;
    color: $brand-color-text;
    margin: 0 0 40px 0;
    font-weight: 300;
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  h3 {
    font-size: 2rem;
    color: $brand-color-primary;
    text-align: center;
    margin-bottom: 24px;
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
    @media (max-width: 425px) {
      font-size: 1.4rem;
    }
  }
  .stats {
    .signaling {
      background: linear-gradient(
          0deg,
          rgba(30, 86, 112, 0.7),
          rgba(30, 65, 117, 0.7)
        ),
        url("~@/assets/images/global/candle-stick.jpg");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      height: 300px;
    }
    h4 {
      text-align: center;
      font-size: 2.2rem;
      color: $brand-color-white;
      margin: 0;
      text-shadow: 1px 0px rgb(158, 162, 167);
    }
    .stats-cont {
      border: 2px solid $brand-color-primary;
      border-radius: 2px;
      padding: 20px;
      p {
        margin: 0;
        font-size: 1.4rem;
        @media (max-width: 1024px) {
          font-size: 1rem;
        }
        @media (max-width: 768px) {
          font-size: 0.9rem;
        }
      }
      h5 {
        font-size: 1.8rem;
        color: $brand-color-secondary;
      }
    }
  }
}

.capital-preservation {
  p {
    font-size: 1.3rem;
    text-align: center;
    color: $brand-color-text;
    margin: 0 0 40px 0;
    font-weight: 300;
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  q {
    font-size: 1.6rem;
    color: $brand-color-secondary;
    margin: 0 0 18px 0;
    font-weight: 400;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
  h3 {
    font-size: 2rem;
    color: $brand-color-text;
    text-align: center;
    margin-bottom: 24px;
    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
    @media (max-width: 425px) {
      font-size: 1.4rem;
    }
    .percent {
      color: $brand-color-primary-75-f;
    }
  }
  .cp-image {
    width: 700px;
    @media (max-width: 768px) {
      width: 500px;
    }
    @media (max-width: 425px) {
      width: 350px;
    }
    @media (max-width: 375px) {
      width: 290px;
    }
  }
}

.investment-strategy-container {
  background-color: $brand-color-primary;
  padding: 80px 0;
  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: $brand-color-white;
    text-align: center;
    margin: 0 0 42px 0;
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
      // border-color: red transparent transparent transparent;
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
    @media (max-width: 425px) {
      font-size: 1rem;
    }
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
</style>
