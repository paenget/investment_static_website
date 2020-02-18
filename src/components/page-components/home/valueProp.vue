<template>
    <section class="home-value-prop-container">
        <div class="container">
            <div class="home-value-prop-welcome d-flex flex-wrap">
                <div class="col-md-6 col-sm-12 d-flex flex-column justify-content-start align-items-start">
                    <h2>Welcome to Strongview</h2>
                    <h4>Customized and Unconflicted Asset Management</h4>
                    <p>Lorem ipsum keme keme keme 48 years boyband intonses wrangler ano keme chapter at nang tetetet ng kasi klapeypey-klapeypey</p>
                </div>
                <div class="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <g-image src="https://picsum.photos/350"></g-image>
                </div>
            </div>

            <div class="home-value-prop-items d-flex flex-wrap justify-content-center align-items-center">
                <div class="home-value-prop-item d-flex justify-content-start flex-column col-md-4 col-sm-12">
                    <font-awesome :icon="['fas', 'chevron-right']"/>
                    <h3 class="mt-3">Unconflicted</h3>
                    <p>Lorem ipsum keme keme keme 48 years boyband intonses wrangler ano keme chapter at nang tetetet ng kasi klapeypey-klapeypey</p>
                </div>
                <div class="home-value-prop-item d-flex justify-content-start flex-column col-md-4 col-sm-12">
                    <font-awesome :icon="['fas', 'chevron-right']"/>
                    <h3 class="mt-3">Portfolio Management</h3>
                    <p>Lorem ipsum keme keme keme 48 years boyband intonses wrangler ano keme chapter at nang tetetet ng kasi klapeypey-klapeypey</p>
                </div>
                <div class="home-value-prop-item d-flex justify-content-start flex-column col-md-4 col-sm-12">
                    <font-awesome :icon="['fas', 'chevron-right']"/>
                    <h3 class="mt-3">Investmetn Strategy</h3>
                    <p>Lorem ipsum keme keme keme 48 years boyband intonses wrangler ano keme chapter at nang tetetet ng kasi klapeypey-klapeypey</p>
                </div>
            </div>
        </div>
    </section>
    
</template>

<script>
import btnPrimary from '~/components/buttons/btnPrimary.vue';

export default {
    components: {
        btnPrimary
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.home-value-prop-container {
    .home-value-prop-welcome {
        padding: 80px 0;
        h2 {
            font-size: 1.5rem;
            font-weight: 600;
            color: $brand-color-primary;
        }
        h4 {
            font-size: 2.5rem;
            font-weight: 400;
            color: $brand-color-primary-75;
        }
        p {
            font-size: 1.2rem;
            font-weight: 400;
            color: $brand-color-text;
        }
        @media (max-width: 768px) {
            h2 {
                font-size: 1.4rem;
            }
            h4 {
                font-size: 2.1rem;
            }
            p {
                font-size: 1rem;
            }
        }
    }

    //Value Proposition Items Styles
    .home-value-prop-items {
        padding: 80px 0;
        .home-value-prop-item {
            padding: 32px 4px;
            svg {
                color: $brand-color-primary;
                font-size: 2.3rem;
            }
            h3 {
                font-size: 1.8rem;
                font-weight: 600;
                color: $brand-color-primary-75;
            }
            p {
                font-size: 1.2rem;
                font-weight: 400;
                padding-right: 14px;
                color: $brand-color-text;
            }
        }
    }
}
</style>