<template>
  <section class="investment-strategy-container">
      <div class="container">
        <h2>We Have a Tried and Tested Investment Strategy</h2>
        <b-tabs justified  active-nav-item-class="active-tab">
            <!-- TAB 1 -->
            <b-tab title="Capital Preservation">
                <div class="tab-content pt-5">
                    <div class="d-flex flex-wrap">
                        <div class="">

                        </div>
                    </div>
                </div>
            </b-tab>
            <!-- TAB 2 -->
            <b-tab title="Asset Allocation" active>
                <div class="tab-content pt-5">
                    <chart-bar-horizontal-type></chart-bar-horizontal-type> 
                    <chart-bar-horizontal-sector></chart-bar-horizontal-sector> 
                    <chart-geo-assets></chart-geo-assets>
                </div>
            </b-tab>
            <!-- TAB 3 -->
            <b-tab title="Technical Signaling Momentum">
                <div class="tab-content pt-5 research-container">
                    
                </div>
            </b-tab>
        </b-tabs>
      </div>
  </section>
</template>

<script> 
import chartGeoAssets from '~/components/charts/chartGeoAssets.vue'; 
import chartBarHorizontalType from '~/components/charts/chartBarHorizontalType.vue';
import chartBarHorizontalSector from '~/components/charts/chartBarHorizontalSector.vue';

export default {
    components: { 
        chartGeoAssets,
        chartBarHorizontalType,
        chartBarHorizontalSector 
    }
}
</script>

<style lang="scss">
@import "~/assets/styles/styles.scss";

.investment-strategy-container {
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
</style>