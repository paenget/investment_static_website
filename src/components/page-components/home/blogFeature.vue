<template>
    <section class="container">
        <div class="home-blog-feature">
            <div class="home-blog-head d-flex">
                <div class="col-md-8 col-sm-12 d-flex flex-column">
                    <h2>Blog</h2>
                    <h3>Financial Resources & News</h3>
                    <p>jupang-pang wrangler at nang ganders at shokot chopopo valaj shonget mashumers bella na katol waz</p>
                </div>
                <div class="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                    <btn-primary ctaText="Read More" ctaUrl="/"></btn-primary>
                </div>
            </div>

            <hr>

            <div class="home-blog-articles d-flex flex-wrap">
                <div class="home-blog-main col-md-8 col-sm-12">
                    <g-link to="/" class="article-link d-flex flex-column justify-content-start align-items-start">
                        <g-image src="https://picsum.photos/200"></g-image>
                        <h3 class="mt-2">Article Title Here: Blah Blak</h3>
                        <p class="tag mt-2">Tagname here</p>
                        <p class="description mt-2">anders nang ma-kyonget at thunder shongaers sa ng chuckie na ng wiz pamentos at bongga</p>
                    </g-link>
                </div>
                <div class="home-blog-list col-md-4 col-sm-12">
                    <hr class="article-divider">
                    <div class="home-blog-list-item d-flex flex-column justify-content-start align-items-start">
                        <g-link to="/" class="article-link d-flex flex-column justify-content-start align-items-start">
                            <h3 class="mt-2">Article name here</h3>
                            <p class="tag mt-2">Taghere</p>
                            <p class="description mt-2">anders nang ma-kyonget at thunder shongaers sa ng chuckie na ng wiz pamentos at bongga</p>
                        </g-link>
                    </div>
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

   //Blog Featured
.home-blog-feature {
    padding: 80px 0;
    .home-blog-head {
        h2 {
            font-size: 1.5rem;
            font-weight: 600;
            color: $brand-color-primary;
        }
        h3 {
            font-size: 2.5rem;
            font-weight: 400;
            color: $brand-color-primary-75;
        }
        p {
            font-size: 1.2rem;
            font-weight: 400;
            color: $brand-color-text;
        }
    }
    .home-blog-articles {
        .home-blog-main {
            img {
                widows: 250px;
            }
            h3 {
                font-weight: 400;
                font-size: 1.6rem;
                color: $brand-color-primary;
            }
            .tag {
                background-color: $brand-color-grey-25;
                border-radius: 2px;
                padding: 2px 8px;
                margin: 0;
                color: $brand-color-text;
                font-size: .8rem;
                font-weight: 400;
            }
            .description {
                margin: 0;
                font-size: 1rem;
                color: $brand-color-text;
            }
        }
        .home-blog-list {
            .home-blog-list-item {
                // padding: 24px 0;
                h3 {
                    font-size: 1.2rem;
                    font-weight: 400;
                    color: $brand-color-primary;
                }
                .tag {
                    background-color: $brand-color-primary-75;
                    border-radius: 2px;
                    padding: 2px 8px;
                    margin: 0;
                    color: $brand-color-white;
                    font-size: .6rem;
                    font-weight: 400;
                }
                .description {
                    margin: 0;
                    font-size: .85rem;
                    color: $brand-color-text;
                }
            }
        }
    }
}

.article-link {
    text-decoration: none;
}

.article-divider {
    display: none;
    @media (max-width: 767px) {
        display: block;
        margin: 40px 0 20px 0;
    }
}
</style>