<template>
  <section class="home-subscribe-news-letter">
      <div class="container d-flex flex-wrap">
          <div class="home-subscribe-news-letter-text d-flex flex-column col-md-6 col-sm-12 pt-3 pb-3">
              <h2>Stay up-to-date with the latest and exclusive market news</h2>
              <p>tanders nang ma-kyonget at thunder shongaers sa ng chuckie na ng wiz pamentos at bongga</p>
          </div>

          <div class="col-md-6 col-sm-12 pt-3 pb-3">
              <form @submit.prevent="" action="" method="POST" class="subscribe-form d-flex flex-column justify-content-center align-content-center">
                  <h3>Subscribe now!</h3>
                  <input-field type="email" placeholder="ie. max@inlglobal.com" name="subscriberEmail" label="Email Address"></input-field>
                  <div class="mt-3 d-flex justify-content-center">
                    <btn-primary-action ctaText="Subscribe" type="submit"></btn-primary-action>
                  </div>
              </form>
          </div>
      </div>
  </section>
</template>

<script>
import inputField from '~/components/input/inputField.vue'
import btnPrimaryAction from '~/components/buttons/btnPrimaryAction.vue'

export default {
    data() {
        return {
            email: null
        }
    },
    components: {
        inputField,
        btnPrimaryAction
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.home-subscribe-news-letter {
    padding: 80px 0;
    .home-subscribe-news-letter-text {
        h2 {
            font-size: 1.9rem;
            font-weight: 600;
            color: $brand-color-primary;
        }
        p {
            color: $brand-color-text;
            font-size: 1.1rem;
            font-weight: 400;
        }
    }
    .subscribe-form {
        background-color: #f1f1f1;
        border-radius: 2px;
        padding: 20px;
        h3 {
            font-size: 1.9rem;
            font-weight: 500;
            text-align: center;
            color: $brand-color-primary;
        }
    }
}
</style>