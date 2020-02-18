<template>
  <div class="share">
    <h3>Share this article:</h3>
    <social-sharing
      :url="computedUrl"
      :title="computeditle"
      :description="computedDescription"
      :quote="computedDescription"
      hashtags="strongview, investment-management"
      twitter-user="strngvw"
      inline-template
    >
      <div class="d-flex">
        <network network="linkedin" class="mr-3">
          <div class="d-flex justify-content-center align-items-center">
            <font-awesome
              class="icon"
              style="color:#3a7ca0; font-size: 2.5rem;"
              :icon="['fab', 'linkedin']"
            />
          </div>
        </network>
        <network network="facebook" class="mr-3">
          <div class="d-flex justify-content-center align-items-center">
            <font-awesome
              class="icon"
              style="color:#3a7ca0; font-size: 2.5rem;"
              :icon="['fab', 'facebook-square']"
            />
          </div>
        </network>
        <network network="twitter" class="mr-3">
          <div class="d-flex justify-content-center align-items-center">
            <font-awesome
              class="icon"
              style="color:#3a7ca0; font-size: 2.5rem;"
              :icon="['fab', 'twitter-square']"
            />
          </div>
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: null,
      title: null,
      description: null
    };
  },
  computed: {
    computedTitle() {
      this.title = this.$store.state.currentPostTitle;
      return this.title;
    },
    computedUrl() {
      this.url = "www.strongview.com.ph" + this.$store.state.currentPostPath;
      return this.url;
    },
    computedDesc() {
      this.description = this.$store.state.currentPostDescription;
      return this.description;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.share {
  margin-bottom: 20px;
}

h3 {
  font-size: 1.7rem;
  font-weight: 400;
  color: $brand-color-primary;
  margin: 16px 0 0 0;
  padding-bottom: 8px;
}
</style>
