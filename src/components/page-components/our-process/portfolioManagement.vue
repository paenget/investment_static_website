<template>
  <section class="portfolio-management-container">
      <div class="container">
        <h2>We are Focused on Portfolio Management</h2>
        <b-tabs justified  active-nav-item-class="active-tab">
            <!-- TAB 1 -->
            <b-tab title="Day in the life" active>
                <div class="tab-content pt-5">
                    <div class="d-flex flex-wrap">
                        <div class="col-sm-6 col-12">
                            <chart-pie-bank></chart-pie-bank>
                        </div>
                        <div class="day-in-life-sv col-sm-6 col-12">
                            <chart-pie-sv></chart-pie-sv>
                        </div>
                    </div>
                </div>
            </b-tab>
            <!-- TAB 2 -->
            <b-tab title="Realtime Monitoring & Rebalancing">
                <div class="tab-content pt-5">
                    <div class="monitoring-container d-flex flex-column justify-content-center align-items-between">
                        <div class="monitoring-item d-flex flex-wrap">
                            <div class="col-sm-8 col-12 d-flex flex-column align-items-start">
                                <h4>Daily</h4>
                                <p>We monitor markets and securities daily.</p>
                                <p>Technical: price action, momentum, and sentiment</p>
                                <p>Fundamental: valuation</p>
                            </div>
                            <div class="col-sm-4 col-12 d-flex justify-content-end align-items-center">
                                <g-image src="https://picsum.photos/200"></g-image>
                            </div>
                        </div>

                        <div class="monitoring-item d-flex flex-wrap">
                            <div class="col-sm-8 col-12 d-flex flex-column align-items-sm-end align-items-start order-sm-2 ">
                                <h4>Weekly</h4>
                                <p>Portfolio review</p>
                            </div>
                            <div class="col-sm-4 col-12 d-flex justify-content-end align-items-center order-1">
                                <g-image src="https://picsum.photos/200"></g-image>
                            </div>
                        </div>

                        <div class="monitoring-item d-flex flex-wrap">
                            <div class="col-sm-8 col-12 d-flex flex-column align-items-start">
                                <h4>Monthly</h4>
                                <p>Asset Allocation Review</p>
                            </div>
                            <div class="col-sm-4 col-12 d-flex justify-content-end align-items-center">
                                <g-image src="https://picsum.photos/200"></g-image>
                            </div>
                        </div>
                    </div>
                </div>
            </b-tab>
            <!-- TAB 3 -->
            <b-tab title="Best of Breed Research">
                <div class="tab-content pt-5 research-container">
                    <div class="d-flex flex-column">
                        <h4>Decisions Based on Extensive Research</h4>
                        <p>Distilled research from various private banks and newsfeeds to identify and monitor investment ideas</p>
                        <div class="sources-container d-flex flex-wrap">
                            <div class="sources-item col-sm-4 col-12 d-flex flex-column">
                                <div class="d-flex justify-content-center align-content-center">
                                    <g-image src="https://picsum.photos/150"></g-image>
                                </div>
                                <h5>Investment Themes and Stocks</h5>
                            </div>
                            <div class="sources-item col-sm-4 col-12 d-flex flex-column">
                                <div class="d-flex justify-content-center align-content-center">
                                    <g-image src="https://picsum.photos/150"></g-image>
                                </div>
                                <h5>Emerging Market Bonds</h5>
                            </div>
                            <div class="sources-item col-sm-4 col-12 d-flex flex-column">
                                <div class="d-flex justify-content-center align-content-center">
                                    <g-image src="https://picsum.photos/150"></g-image>
                                </div>
                                <h5>Niche Views</h5>
                            </div>
                        </div>
                        <div class="sources-other-container">
                            <h4>Other Sources:</h4>
                            <div class="d-flex flex-wrap">
                                <div class="sources-other-item col-sm-3 col-6 d-flex justify-content-center align-items-center">
                                    <g-image src="https://picsum.photos/150"></g-image>
                                </div>
                                <div class="sources-other-item col-sm-3 col-6 d-flex justify-content-center align-items-center">
                                    <g-image src="https://picsum.photos/150"></g-image>
                                </div>
                                <div class="sources-other-item col-sm-3 col-6 d-flex justify-content-center align-items-center">
                                    <g-image src="https://picsum.photos/150"></g-image>
                                </div>
                                <div class="sources-other-item col-sm-3 col-6 d-flex justify-content-center align-items-center">
                                    <g-image src="https://picsum.photos/150"></g-image>
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
import chartPieBank from '~/components/charts/chartPieBank.vue';
import chartPieSv from '~/components/charts/chartPieSv.vue';

export default {
    components: {
        chartPieBank,
        chartPieSv
    }
}
</script>

<style lang="scss">
@import "~/assets/styles/styles.scss";

.portfolio-management-container {
    padding: 80px 0;
    h2 {
        font-size: 2rem;
        font-weight: 600;
        color: $brand-color-primary;
        text-align: center;
        margin: 0 0 42px 0;
    }
    .nav-tabs .nav-item.show .nav-link, 
    .nav-tabs .nav-link.active {
        background-color: $brand-color-primary !important;
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
            border-color: $brand-color-primary transparent transparent transparent;
            position: absolute;
            z-index: -1;
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
        border-bottom: 2px solid $brand-color-primary !important;
        border-radius: 2px;
        color: $brand-color-primary !important;
        height: 100%;
        font-size: 1.2rem;
        position: relative;
        @media (max-width: 375px) {
            font-size: .9rem;
        }
        @media (max-width: 320px) {
            font-size: .75rem;
        }
        &::before {
            content: "";
            position: absolute;
            display: inline-block;
            border-top: 2px solid $brand-color-primary;
            width: 0%;
            z-index: 1; 
            top: 0;
            left: 0;
            transition: all .4s ease-in-out;
        }
        &:hover::before {
            width: 100%;
        }
    }

}

.day-in-life-sv {
    background: rgb(177,217,247);
    background: linear-gradient(90deg, rgba(177,217,247,.5) 0%, rgba(144,202,245,.5) 100%);
    border-radius: 2px;
    border: 2px solid #ffffff00;
    transition: all .4s ease-in-out;
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
        padding: 40px 0;
        .sources-item {
            padding: 24px 0;
            img {
                // width: 100%;
            }
            h5 {
                color: $brand-color-primary-75;
                text-align: center;
                padding: 14px 0 0 0;
            }
        }
    }
    .sources-other-container {
        padding: 40px 0;
        .sources-other-item {
            padding: 24px 0;
        }
    }
}
</style>