<template>
  <Layout>
    <div class="bad-rm-container">
      <div class="hero safari_only container d-flex justify-content-center align-items-center">
        <h1>Liquid Alternatives</h1>
        <div class="hero-img">
          <!-- <g-image src="~/assets/images/global/confession.jpg" class="hero-img" /> -->
        </div>
      </div>

      <section class="blue">
        <div class="container">
          <div class="top-desc py-5">
            <p>
              StrongView research into Liquid Alternative investments arose from
              our hunt for higher yields in an abnormally low interest rate
              environment.
            </p>
            <p>
              We strive to both diversify portfolio risk and increase overall
              portfolio returns by buying uncorrelated assets.
            </p>
          </div>
        </div>
      </section>

      <section class="mt-5">
        <div class="container">
          <div class="list">
            <h2>To this end, we have invested in the following:</h2>

            <div class="list-item">
              <div class="d-flex align-items-center">
                <h2>1</h2>
                <h3>Early stage impact investments focused on fair finance</h3>
              </div>
              <div class="py-3 d-flex flex-wrap justify-content-center align-items-center">
                <a class="col-sm-4 col-12 py-5" href="https://uploan.ph/" target="_blank">
                  <g-image
                    immediate="false"
                    class="list-item-img"
                    src="~/assets/images/global/uploan.png"
                  />
                </a>
                <div class="col-sm-8 col-12">
                  <p>
                    Uploan is a innovative fintech company operating in the
                    Philippines that provides secure, reliable, and affordable
                    “Salary Loan” solutions to hardworking employees. Our
                    services focus on Salary Loans, Salary Advance, and
                    Insurance options that fit each employee’s financial need.
                  </p>
                  <btn-primary ctaText="View Website" ctaUrl="https://uploan.ph/" target="_blank" />
                </div>
              </div>
            </div>

            <div class="list-item">
              <div class="d-flex align-items-center">
                <h2>2</h2>
                <h3>Actively Managed Portfolio of Fine Wines</h3>
              </div>
              <div class="py-3 d-flex flex-wrap justify-content-center align-items-center">
                <a class="col-sm-4 col-12" href="https://www.wineinvestment.com/" target="_blank">
                  <g-image
                    immediate="false"
                    class="list-item-img"
                    src="~/assets/images/global/cult_wines.png"
                  />
                </a>
                <div class="col-sm-8 col-12">
                  <p>
                    Cult Wines has provided market-leading fine wine investment
                    and collection management services to a global audience. Our
                    unique analytical-based approach combined with great client
                    service has been central to our success, which has seen us
                    win a number of prestigious awards including the Queen's
                    Award for Enterprise: International Trade.
                  </p>
                  <btn-primary
                    ctaText="View Website"
                    ctaUrl="https://www.wineinvestment.com/"
                    target="_blank"
                  />
                </div>
              </div>
            </div>

            <div class="list-item">
              <div class="d-flex align-items-center">
                <h2>3</h2>
                <h3>High frequency algorithmically driven Hedge Fund</h3>
              </div>
              <div class="py-3 d-flex flex-wrap justify-content-center align-items-center">
                <a class="col-sm-4 col-12 py-5" href="https://enoraglobal.com/" target="_blank">
                  <g-image
                    immediate="false"
                    class="list-item-img"
                    src="~/assets/images/global/enora.png"
                  />
                </a>
                <div class="col-sm-8 col-12">
                  <p>
                    Enora Global Fund is a Long/Short fund formed with an
                    investment objective of achieving consistent capital
                    appreciation by deploying well selected strategies on a
                    diverse pool of tradable instruments. For the purpose of
                    achieving the objective these strategies could be created
                    manually or through artificial intelligence engines or any
                    well-defined data mining methodology. Primary objective of
                    ENORA is to consistently generate 'alpha' by deploying
                    diverse stock selection and price modeling algorithms that
                    work in tandem.
                  </p>
                  <btn-primary
                    ctaText="View Website"
                    ctaUrl="https://enoraglobal.com/"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>
  </Layout>
</template>

<script>
import btnPrimary from "~/components/buttons/btnPrimary.vue";

export default {
  components: {
    btnPrimary
  },
  metaInfo() {
    return {
      title: "Liquid Alternatives | StrongView Investment Management",
      description:
        "StrongView research into Liquid Alternative investments arose from our hunt for higher yields in an abnormally low interest rate environment."
    };
  },
  mounted() {
    this.isLoggedIn();
  },
  methods: {
    isLoggedIn() {
      let strongUserToken = localStorage.getItem("strongUserToken");
      // console.log(strongUserToken);
      if (!strongUserToken) {
        document
          .querySelector(".bad-rm-container")
          .classList.add("block-white");
        this.makeWarningToast();
        setTimeout(() => {
          this.$router.push({ path: "/login" });
        }, 1500);
      } else {
        document
          .querySelector(".bad-rm-container")
          .classList.remove("block-white");
      }
      // return false;
    },
    makeWarningToast() {
      this.$bvToast.toast(
        "Please enroll as a member to view this content.",
        {
          title: "Members only content",
          variant: "warning",
          solid: true,
          "no-auto-hide": true,
          "is-status": true
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.block-white {
  &::before {
    content: "";
    height: 300%;
    width: 100%;
    position: absolute;
    z-index: 1000;
    background-color: $brand-color-primary;
  }
}

.download-file-sec {
  margin-bottom: 40px;
  a {
    background-color: $brand-color-primary;
    padding: 16px 24px;
    font-size: 1.3rem;
    color: #fff;
    border-radius: 0;
    border: 2px solid transparent;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #fff;
      border: 2px solid $brand-color-primary;
      color: $brand-color-primary;
    }
  }
}

.list {
  h2 {
    font-size: 2rem;
    color: $brand-color-primary;
    @media (max-width: 425px) {
      font-size: 1.8rem;
    }
  }
  .list-item {
    padding: 40px 0;
    h2 {
      font-size: 4rem;
      color: $brand-color-secondary;
      margin: 0 16px 0 0;
    }
    h3 {
      color: $brand-color-primary;
      font-size: 2rem;
      margin: 0;
    }
    p {
      color: $brand-color-text;
      font-size: 1.2rem;
    }
    .list-item-img {
      width: 100%;
    }
  }
}

_::-webkit-full-page-media,
_:future,
:root .safari_only {
  transform: translateY(-500px);
}

.bad-rm-container {
  .hero {
    position: relative;
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
      transform: translateY(-500px);
    }

    .hero-img {
      background: url("~@/assets/images/global/lake.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: absolute;
      right: 0;
      top: 50%;
      width: 800px;
      height: 500px;
      z-index: 1;
      @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
        // background-attachment: fixed;
      }
      @media (max-width: 768px) {
        background-position-x: 200px !important;
      }
      @media (max-width: 425px) {
        background-position-x: 280px !important;
      }
      @media (max-width: 320px) {
        background-position-x: 300px !important;
      }
    }
    h1 {
      position: absolute;
      background-color: #fff;
      margin-top: 160px;
      width: 50%;
      z-index: 2;
      left: 0;
      top: 50%;
      text-align: left;
      font-size: 4rem;
      font-weight: 600;
      color: $brand-color-primary;
      padding: 24px 8px 24px 0px;
      // @media (min-width: 2560px) {
      //   margin-left: 700px;
      //   width: 20%;
      // }
      @media (max-width: 768px) {
        font-size: 2.8rem;
      }
      @media (max-width: 425px) {
        font-size: 2.4rem;
        width: 60%;
        padding-left: 8px;
      }
      @media (max-width: 375px) {
        font-size: 2rem;
      }
      @media (max-width: 320px) {
        width: 65%;
      }
    }
  }
  .top-desc {
    margin-top: 500px;
    padding-top: 40px;
    p {
      font-size: 1.2rem;
      font-weight: 300;
      line-height: 32px;
    }
  }
}

.blue {
  background-color: #1c4a63dc;
  color: $brand-color-white;
}
</style>
