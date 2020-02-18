<template>
  <Layout>
    <div class="bad-rm-container">
      <div class="hero safari_only container d-flex justify-content-center align-items-center">
        <h1>Origin of StrongView</h1>
        <div class="hero-img">
          <!-- <g-image src="~/assets/images/global/confession.jpg" class="hero-img" /> -->
        </div>
      </div>

      <section class="blue">
        <div class="container">
          <div class="top-desc py-5">
            <p>After the Great Financial Crisis of 2008 and its attendant regulatory burdens, private bankers found themselves wasting more of their day in endless compliance, administration and marketing meetings, and spending less time researching and discussing great investment ideas with clients.</p>
            <p>
              StrongView was formed to address these issues. We work directly for our clients’ interest, eliminating conflicts of interest that bank employees are inherently faced with.
              We look for like-minded clients that prefer analyzing actionable investment research with experienced portfolio managers, rather than a lunch with interesting conversationalists.
            </p>
            <p>We believe that focused research and analyses, unencumbered by large overheard costs and corporate agendas, is the most value-added component you require from your financial advisor.</p>
            <p>We acted upon this belief, took the leap towards independence and set up StrongView on July 4, 2016.</p>
          </div>
        </div>
      </section>

      <section class="mt-5">
        <div class="container">
          <div class="list">
            <h2>Who We Are</h2>
            <!-- <hr /> -->
            <div class="list-item">
              <div class="list-item-img" id="one"></div>
              <div class="d-flex align-items-center">
                <h2>1</h2>
                <h3>Research</h3>
              </div>
              <p>We have over 30 years combined investment experience in the capital markets. We continue to devote 3x the amount of time your typical RMs spend researching and analysing companies; some of these companies we have been following for more than a decade. Our investment views continue to be refined by analyzing data from our private banks, paid research and countless hours of in-house due diligence research. We are confident of the quality of our investments.</p>
            </div>

            <div class="list-item">
              <div class="list-item-img" id="two"></div>
              <div class="d-flex align-items-center">
                <h2>2</h2>
                <h3>Transparency and Cost Control</h3>
              </div>
              <p>Whereas one of a private bank’s main objectives is THEIR profitability, our fees are a percentage of your assets under management. Our fees are wholly dependent on your portfolios performance, not commissions generated. Thus, our trading costs are closely monitored and controlled. As we work directly for you and not the bank, we actively seek out the best value providers.</p>
            </div>

            <div class="list-item">
              <div class="list-item-img" id="three"></div>
              <div class="d-flex align-items-center">
                <h2>3</h2>
                <h3>Risk Management</h3>
              </div>
              <p>Our global asset allocations are dynamic allowing us to quickly respond to macro-economic events and policies that impact your portfolio’s performance.</p>
              <p>We focus on capital preservation; efficiently moving your funds into safe haven cash and bonds as market sentiment sours.</p>
              <p>Although we are long-term investors, there is an always an allocation for opportunistic trades. For these trades, we automatically assess attractive risk/return ratios, monitor price action and execute buy and sell decisions on predetermined stop loss, take profit and entry prices.</p>
            </div>

            <div class="list-item">
              <div class="list-item-img" id="four"></div>
              <div class="d-flex align-items-center">
                <h2>4</h2>
                <h3>Alternative Investments</h3>
              </div>
              <p>Alternative Investments are attractive as an uncorrelated asset class to optimize a portfolio’s performance and minimize volatility. So from direct lending to private companies, or investing in Indian high frequency hedge funds, to discussing Grand Cru wine portfolios in the UK.</p>
            </div>

            <div class="list-item">
              <div class="list-item-img" id="five"></div>
              <div class="d-flex align-items-center">
                <h2>5</h2>
                <h3>Integrity and Loyalty</h3>
              </div>
              <p>We at StrongView value Integrity, which inspires loyalty. It is the foundation for of all our relationships and investment decisions. Almost all of our clients have been with us for over 5 years, and we consider them friends. They have stood by us and we stand by them.</p>
            </div>

            <!-- <div class="download-file-sec d-flex justify-content-center align-items-center">
              <g-link
                to="../../static/strongview_deck.pdf"
                download
                class="download"
              >Download Presentation</g-link>
            </div>-->
          </div>
        </div>
      </section>
      <hr />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Origin of StrongView",
      description:
        "After the Great Financial Crisis of 2008 and its attendant regulatory burdens, private bankers found themselves wasting more of their day in endless compliance, administration and marketing meetings, and spending less time researching and discussing great investment ideas with clients.3 years ago, StrongView was activated by two private bankers who thought independent financial advisory was a better way to manage client portfolios and our own personal lives."
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

_::-webkit-full-page-media,
_:future,
:root .safari_only {
  transform: translateY(-500px);
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
    font-size: 3rem;
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
      height: 400px;
      margin-bottom: 16px;
      background: $brand-color-primary;
      border-radius: 3px;
    }
    #one {
      background: url("~@/assets/images/global/research.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #two {
      background: url("~@/assets/images/global/performance.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #three {
      background: url("~@/assets/images/global/risk.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #four {
      background: url("~@/assets/images/global/wine.jpg");
      background-position: center;
      background-repeat: no-repeat;
    }
    #five {
      background: url("~@/assets/images/global/hand.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}

.bad-rm-container {
  .hero {
    position: relative;
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
      transform: translateY(-500px);
    }
    .hero-img {
      background: url("~@/assets/images/global/confession.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: absolute;
      right: 0;
      top: 50%;
      width: 800px;
      height: 500px;
      z-index: 1;
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
      margin-top: 100px;
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
