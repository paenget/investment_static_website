<template>
    <section class="container">
        <div class="home-value-prop-cta-1 d-flex flex-wrap justify-content-center align-items-center">
            <div class="col-md-6 col-sm-12 order-md-2 order-sm-1 order-1">
                <h3>Tried and Tested</h3>
                <p>We only invest in stocks that we ourselves have studied and invested in.</p>
                <btn-primary ctaText="Learn More" ctaUrl="/" />
            </div>
            <div class="col-md-6 col-sm-12">
                <g-image src="https://picsum.photos/250"> </g-image>
            </div>
        </div>
    </section>    
</template>

<script>
import btnPrimary from '~/components/buttons/btnPrimary.vue'

export default {
    components: {
        btnPrimary
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

 //Value Prop Call to Action 1
    .home-value-prop-cta-1 {
        padding: 80px 0;
        h3 {
            font-size: 1.8rem;
            font-weight: 600;
            color: $brand-color-primary;
        }
        p {
            font-size: 1.5rem;
            font-weight: 400;
            color: $brand-color-text;
        }
    }
</style>