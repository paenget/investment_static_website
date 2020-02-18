<template>
    <div class="unconflicted-container container d-flex flex-wrap">
        <div class="unconflicted-desc d-flex flex-column align-items-start justify-content-center col-md-6 col-sm-12">
            <div class="d-flex flex-column justify-content-center align-content-center">
                <div class="unconflicted-desc-head">
                    <h3>We are UNCONFLICTED</h3>
                    <p>Total focus on our portfolio's performance and not Bank's Return on Assets.</p>
                </div>
                <div class="">
                    <div class="unconflicted-item d-flex justify-content-center align-content-center">
                        <div class="col-2">
                            <font-awesome :icon="['far', 'chart-bar']" class="icon"/>
                        </div>
                        <div class="col-10">
                            <p>Our compensation is based on total portfolio performance, NOT commissions generated.</p>
                        </div>
                    </div>
                    <div class="unconflicted-item d-flex justify-content-center align-content-center">
                        <div class="col-2">
                            <font-awesome :icon="['fas', 'user-tie']" class="icon"/>
                        </div>
                        <div class="col-10">
                            <p>Long-term performance of our clients is our focus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="unconflicted-image d-flex align-items-center justify-content-center col-md-6 col-sm-12">
            <g-image src="https://picsum.photos/200"></g-image>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.unconflicted-container {
    padding: 80px 0;
    .unconflicted-desc {
        .unconflicted-desc-head {
            padding: 15px 0;
            h3 {
                font-size: 2rem;
                font-weight: 600;
                color: $brand-color-primary;
            }
            p {
                font-size: 1.4rem;
                font-weight: 400;
                color: $brand-color-primary-75;
            }
        }
        .unconflicted-item {
            .icon {
                font-size: 2.3rem;
                color: $brand-color-primary-75;
            }
            p {
                font-size: 1.1rem;
                color: $brand-color-text;
            }
        }
    }
}
</style>