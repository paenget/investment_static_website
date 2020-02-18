<template>
  <keep-alive>
    <b-modal id="bv-modal" ref="pop-up-modal" size="lg" centered hide-footer>
      <template v-slot:modal-title> </template>
      <div
        class="model-content d-flex flex-column justify-content-center align-items-center"
      >
        <h3>
          Join our Investor Community for exclusive access to fresh investment
          ideas.
        </h3>
        <!-- <p>You'll also enjoy free access to our premium portfolio articles.</p> -->
        <div>
          <btn-primary
            ctaText="Join Investor Community"
            ctaUrl="/member-enrollment"
          ></btn-primary>
        </div>
      </div>
    </b-modal>
  </keep-alive>
</template>

<script>
import btnPrimary from "~/components/buttons/btnPrimary.vue";

export default {
  data() {
    return {};
  },
  components: {
    btnPrimary
  },
  created() {
    if (this.$store.state.sessions === 0) {
      setTimeout(() => {
        this.$refs["pop-up-modal"].show();
        this.$store.dispatch("setSessions", 1);
      }, 30000);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

#bv-modal {
}

.modal-content {
  border-radius: 2px;
  h3 {
    font-size: 1.7rem;
    font-weight: 400;
    color: $brand-color-primary;
    padding: 16px 16px;
    text-align: center;
    @media (max-width: 425px) {
      padding: 16px 8px;
    }
  }
  p {
    font-size: 1.3rem;
    font-weight: 300;
    margin-bottom: 16px;
    text-align: center;
  }
}
</style>
