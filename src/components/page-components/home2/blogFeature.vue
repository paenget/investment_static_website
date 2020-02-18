<template>
  <section class="container">
    <div class="home-blog-feature">
      <div class="home-blog-head d-flex flex-wrap">
        <div class="col-md-8 col-sm-12 d-flex flex-column">
          <h2>Investment Ideas</h2>
          <h3>Financial Resources & News</h3>
          <p>Stay up to date and informed with the latest market news.</p>
        </div>
        <div class="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
          <btn-primary ctaText="Read More Articles" ctaUrl="/investment-ideas"></btn-primary>
        </div>
      </div>

      <hr />

      <div class="home-blog-articles d-flex flex-wrap">
        <div class="home-blog-main col-md-8 col-sm-12">
          <main-blog-featured></main-blog-featured>
        </div>
        <div class="home-blog-list col-md-4 col-sm-12">
          <hr class="article-divider" />
          <div
            class="home-blog-list-item d-flex flex-column justify-content-start align-items-start"
          >
            <p class="recent-articles-heading">Recent Articles</p>
            <div v-for="post in posts" :key="post.id" v-if="posts && posts.length">
              <g-link
                :to="post.path"
                class="article-link d-flex flex-column justify-content-start align-items-start"
              >
                <h3 class="mt-2" v-html="post.title"></h3>
                <p class="tag mt-2" v-for="category in posts.categories">{{ category.title }}</p>
                <p class="description mt-2" v-html="post.excerpt"></p>
              </g-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import btnPrimary from "~/components/buttons/btnPrimary.vue";
import mainBlogFeatured from "~/components/page-components/home2/mainBlogFeatured.vue";

export default {
  components: {
    btnPrimary,
    mainBlogFeatured
  },
  data() {
    return {
      posts: null
    };
  },
  computed: {
    getPosts() {
      this.posts = this.$store.getters.homeFeaturedPosts;
    }
  },
  created() {
    // this.posts = this.$store.state.homeFeaturedPosts;
    this.$on("featured-post", post => {
      this.posts = post;
    });
    // console.log(this.$store.getters.homeFeaturedPosts);
    // console.log(this.$store.state.homeFeaturedPosts);
  }
};
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
        font-size: 0.8rem;
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
        overflow-y: auto;
        width: 100%;
        max-height: 500px;
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
          font-size: 0.6rem;
          font-weight: 400;
        }
        .description {
          margin: 0;
          font-size: 0.85rem;
          color: $brand-color-text;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          line-height: 24px; /* fallback */
          max-height: 48px; /* fallback */
          -webkit-line-clamp: 2; /* number of lines to show */
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}

.article-link {
  text-decoration: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 4px;
  transform: scale(1);
  transition: all 0.4s ease-in-out;
  margin: 0 0 8px 0;
  z-index: 1;
  &:hover {
    background-color: $brand-color-grey-5;
    border: 1px solid $brand-color-primary;
    z-index: 4;
  }
}

.article-divider {
  display: none;
  @media (max-width: 767px) {
    display: block;
    margin: 40px 0 20px 0;
  }
}

.recent-articles-heading {
  margin: 0 0 8px 0;
  font-size: 1rem;
  font-weight: 500;
  color: $brand-color-secondary;
}
</style>
