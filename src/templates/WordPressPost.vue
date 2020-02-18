<template>
  <div>
    <BlogLayout>
      <div class="blog-post-container">
        <div
          class="blog-post-hero-img d-flex flex-column justify-content-center align-content-center"
          :style="`background: ${isLoadedHero};`"
        >
          <div class="container blog-post-heading-bg">
            <div class="d-flex justify-content-start align-content-center mb-3">
              <p
                v-for="category in $page.wordPressPost.categories"
                class="blog-post-category"
                :key="category.id"
              >{{ category.title }}</p>
            </div>
            <div class="blog-post-divider-hor"></div>
            <div
              class="blog-post-head d-flex flex-column justify-content-center align-content-center"
            >
              <h1 class="mb-2" v-html="$page.wordPressPost.title" />
              <div class="blog-post-author d-flex justify-content-center align-items-center">
                <div>
                  <g-image immediate="false" :src="$page.wordPressPost.author.avatars.avatar24"></g-image>
                </div>
                <div class="d-flex flex-column justify-content-start align-content-start pl-3">
                  <h4>{{ $page.wordPressPost.author.name }}</h4>
                  <p>
                    {{
                    $page.wordPressPost.date | moment("MMMM Do YYYY h:mm a")
                    }}
                  </p>
                </div>
              </div>
              <div
                class="blog-post-tag-container d-flex justify-content-start align-content-center"
              >
                <p class="pr-2">Tags:</p>
                <p
                  class="blog-post-tag mr-2"
                  v-for="tag in $page.wordPressPost.tags"
                  :key="tag.id"
                >{{ tag.title }}</p>
              </div>
              <div class="blog-post-excerpt">
                <h3 v-html="$page.wordPressPost.excerpt"></h3>
              </div>
              <hr class="hr-text" :data-content="$page.wordPressPost.categories[0].title" />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="blog-content" v-html="$page.wordPressPost.content" />
          <div class="social-share-container">
            <social-share-component></social-share-component>
          </div>
        </div>

        <div class="blog-footer">
          <div>
            <!-- <hr /> -->
            <blog-bottom-nav :postId="$page.wordPressPost.id"></blog-bottom-nav>
          </div>
        </div>
      </div>
    </BlogLayout>
  </div>
</template>

<page-query>
query Post ($path: String!) {
  wordPressPost (path: $path) {
    id
    date
    title
    excerpt
    path
    content
    featuredMedia {
    sourceUrl
    }
    author {
        name
        avatars {
          avatar24
        }
      }
    categories {
      title
    }
    tags {
      title
    }
  }
}
</page-query>

<script>
import BlogLayout from "~/layouts/BlogLayout.vue";
import blogBottomNav from "~/components/page-components/blog/blogBottomNav.vue";
import socialShareComponent from "~/components/page-components/blog/socialShareComponent.vue";

export default {
  metaInfo() {
    return {
      title: this.$page.wordPressPost.title,
      description: this.$page.wordPressPost.excerpt
    };
  },
  components: {
    BlogLayout,
    blogBottomNav,
    socialShareComponent
  },
  computed: {
    isLoadedHero() {
      return this.$page.wordPressPost.featuredMedia !== null
        ? `url(${this.$page.wordPressPost.featuredMedia.sourceUrl})`
        : `url(${require("~/assets/images/global/placeholder_default.jpg")})`;
    },

    isPremium() {
      // this.$router.push({ path: '/login' })
      if (this.$page.wordPressPost.categories) {
        let hasPremiumCat = this.$page.wordPressPost.categories.find(cat => {
          return cat.title == "Premium";
        });
        let strongUserToken = localStorage.getItem("strongUserToken");

        // console.log(hasPremiumCat, strongUserToken);

        if (hasPremiumCat && !strongUserToken) {
          this.makeWarningToast();
          setTimeout(() => {
            this.$router.push({ path: "/login" });
          }, 1500);
        }
      }
      return false;
    }
  },
  mounted() {
    this.isPremium();
  },
  methods: {
    makeWarningToast() {
      this.$bvToast.toast("Please enroll as a member to view this content.", {
        title: "Members only content",
        variant: "warning",
        solid: true,
        "no-auto-hide": true,
        "is-status": true
      });
    }
  },
  created() {
    // console.log(this.isPremium);
    //sets progressbar page title
    this.$store.dispatch("setPostTitle", this.$page.wordPressPost.title);
    //sets store post path
    this.$store.dispatch("setCurrentPostPath", this.$page.wordPressPost.path);
    // stes store post desc
    this.$store.dispatch(
      "setCurrentPostDesc",
      this.$page.wordPressPost.excerpt
    );
  },
  updated() {
    this.$store.dispatch("setPostTitle", this.$page.wordPressPost.title);
    this.$store.dispatch("setCurrentPostPath", this.$page.wordPressPost.path);
    this.$store.dispatch(
      "setCurrentPostDesc",
      this.$page.wordPressPost.excerpt
    );
    // console.log("this is title" + this.$page.wordPressPost.title);
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.block-white {
  &::before {
    content: "";
    height: 300%;
    width: 100%;
    position: absolute;
    z-index: 1000;
    background-color: $brand-color-primary;
  }
}

.social-share-container {
  position: absolute;
  z-index: 20;
}

.blog-post-container {
  padding: 0 0 80px 0;
  .blog-post-category {
    background-color: $brand-color-secondary;
    color: $brand-color-white;
    padding: 2px 8px;
    border-radius: 2px;
    margin: 0 4px;
  }
  .blog-post-head {
    text-align: center;
    h1 {
      font-size: 2.8rem;
      color: $brand-color-grey;
      text-align: left;
      font-weight: 300;
      @media (max-width: 768px) {
        font-size: 2.3rem;
      }
      @media (max-width: 425px) {
        font-size: 1.9rem;
      }
    }
    .blog-post-tag-container {
      font-size: 0.8rem;
      margin: 8px 0 0 4px;
      p {
        font-size: 1rem;
      }
    }
    .blog-post-tag {
      color: $brand-color-primary-75;
    }
    .blog-post-author {
      border-radius: 2px;
      // background-color: #ecf6ff;
      padding: 14px 14px;
      width: fit-content;
      img {
        width: 50px;
      }
      p {
        margin: 0;
        text-align: left;
        font-size: 0.8rem;
      }
      h4 {
        font-size: 1.3rem;
        margin: 0;
        text-align: left;
        color: $brand-color-primary;
      }
    }
  }
  .blog-hero-img {
    padding: 24px 0;
    border-radius: 5px;
    width: 1000px;
    @media (max-width: 1024px) {
      width: 800px;
    }
    @media (max-width: 768px) {
      width: 600px;
    }
    @media (max-width: 425px) {
      width: 390px;
    }
    @media (max-width: 375px) {
      width: 290px;
    }
  }
  .blog-content {
    transform: translateY(200px);
    padding: 0 24px 200px 24px;
    color: $brand-color-text;
    font-family: "Montserrat", sans-serif;
    overflow: scroll;
  }
  .blog-post-divider-hor {
    background-color: $brand-color-grey-25;
    height: 5px;
    width: 70%;
    margin: 0 4px;
    position: relative;
    margin: 4px 0;
    &::after {
      content: "";
      position: absolute;
      display: inline-block;
      width: 40%;
      height: 5px;
      background-color: $brand-color-primary;
      z-index: 1;
    }
  }
}
.blog-post-hero-img {
  padding: 40px 0 0 0;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  @media (max-width: 425px) {
    background-position: 50% -200px !important;
  }
}
.blog-post-heading-bg {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.9458158263305322) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 40px 24px;
  border-radius: 2px 2px 0 0;
  transform: translateY(200px);
  -webkit-box-shadow: 0px -5px 10px 1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -5px 10px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -5px 10px 1px rgba(0, 0, 0, 0.3);
  position: relative;
  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    height: 100px;
    width: 100%;
    left: 0;
    background-color: #ffffff;
    z-index: 4;
  }
}
.blog-post-excerpt {
  h3 {
    font-weight: 300;
    color: $brand-color-primary;
  }
}

.hr-text {
  line-height: 1px;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  background: linear-gradient(
    to right,
    transparent,
    $brand-color-primary,
    transparent
  );
  height: 1px;
  width: 100%;
  opacity: 0.5;
  &::after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;
    padding: 0 0.5em;
    line-height: 1.5em;
    color: $brand-color-primary;
    transform: translateY(-12px);
    background-color: #fff;
  }
}
</style>
