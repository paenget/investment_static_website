<template>
  <div class="unconflicted-container">
    <div class="unconflicted-desc d-flex align-items-center justify-content-center">
      <div class="d-flex flex-column justify-content-center align-content-center">
        <div class="unconflicted-desc-head">
          <h3>Unconflicted</h3>
          <hr class="divider" />
          <p>
            Total focus on our portfolio's performance and not Bank's Return on
            Assets.
          </p>
          <h4>We are bank agnostic.</h4>
        </div>
      </div>
    </div>

    <div class="unconflicted-items container">
      <!-- <div
        class="unconflicted-item col-md-6 col-sm-12 d-flex justify-content-center align-content-center"
      >
        <div class="col-6 unconflicted-item-img" id="one">
          <div class="item-hover d-flex justify-content-center align-items-center">
            <p>We are bank agnostic.</p>
          </div>
        </div>
        <div class="col-6 d-flex justify-content-center align-items-center">
          <p>Our compensation is based on total portfolio performance, NOT commissions generated.</p>
        </div>
      </div>-->
      <div class="unconflicted-item d-flex flex-wrap">
        <div class="item col-sm-4 col-12 d-flex justify-content-center align-items-center">
          <p>
            Our compensation is based on total portfolio performance, NOT
            commissions generated.
          </p>
        </div>
        <div class="item col-sm-4 col-12 unconflicted-item-img" id="two">
          <div class="item-hover d-flex justify-content-center align-items-center">
            <p>Complete transparency on fees, rebates from the banks.</p>
          </div>
        </div>
        <div class="item col-sm-4 col-12 d-flex justify-content-center align-items-center">
          <p>Focused on Long Term Portfolio Performance</p>
        </div>
      </div>
    </div>
    <div class="filler"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.unconflicted-container {
  .unconflicted-desc {
    background-color: $brand-color-primary;
    .unconflicted-desc-head {
      padding: 0px 4px 40px 4px;
      h3 {
        font-size: 2rem;
        font-weight: 400;
        color: $brand-color-white;
        text-align: center;
      }
      p {
        font-size: 1.4rem;
        font-weight: 300;
        text-align: center;
        color: $brand-color-white;
      }
      h4 {
        font-size: 1.5rem;
        font-weight: 500;
        color: $brand-color-white;
        text-align: center;
      }
    }
  }
}

.unconflicted-items {
  .unconflicted-item {
    padding: 0 0 0 0 !important;
    position: relative;
    @media (min-width: 768px) {
      height: 300px;
    }
    p {
      font-size: 1.4rem;
      text-align: center;
      color: $brand-color-text;
      margin: 0 !important;
    }
    .item {
      @media (max-width: 425px) {
        height: 200px;
      }
    }
    .unconflicted-item-img {
      padding: 0 !important;
      .item-hover {
        height: 100%;
        width: 100%;
        transition: all 0.4s ease-in-out;
        p {
          color: $brand-color-white;
          padding: 0 4px;
          text-align: center;
          margin: 0 !important;
          font-size: 1.6rem;
          transition: all 0.4s ease-in-out;
          @media (max-width: 768px) {
            font-size: 1.4rem;
          }
          @media (max-width: 425px) {
            font-size: 1.2rem;
          }
        }
      }
      &:hover {
        .item-hover {
          background-color: $brand-color-grey-25;
          p {
            color: $brand-color-primary;
          }
        }
      }
    }
  }
  #one {
    background: linear-gradient(
        0deg,
        rgba(30, 86, 112, 0.5),
        rgba(30, 65, 117, 0.5)
      ),
      url("~@/assets/images/global/strongview_home_2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #two {
    background: linear-gradient(
        0deg,
        rgba(30, 86, 112, 0.5),
        rgba(30, 65, 117, 0.5)
      ),
      url("~@/assets/images/global/strongview_home_3.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
}

.filler {
  background-color: $brand-color-primary;
  height: 40px;
}
</style>
