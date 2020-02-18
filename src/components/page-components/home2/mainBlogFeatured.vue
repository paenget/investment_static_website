<template>
  <div v-if="featuredPostsPrimary && featuredPostsPrimary.length">
    <g-link
      :to="featuredPostsPrimary[0].path"
      class="article-link d-flex flex-column justify-content-start align-items-start"
    >
      <div
        class="blog-feature-img"
        :style="`background-image: ${isLoadedImg(featuredPostsPrimary[0])}`"
      ></div>
      <h3 class="mt-2">{{ featuredPostsPrimary[0].title }}</h3>
      <p class="date">{{ posts[0].date | moment("MMMM Do YYYY") }}</p>
      <p class="tag mt-2" v-for="category in posts[0].categories">{{ category.title }}</p>
      <p class="description mt-2" v-html="featuredPostsPrimary[0].excerpt"></p>
    </g-link>
  </div>
</template>

<static-query>
query {
  posts: allWordPressPost {
    edges {
      node {
        id
        title
        path
        date
        excerpt
        featuredMedia {
          sourceUrl
        }
        tags {
            title
        }
        categories {
          id
          title
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      posts: null,
      featuredPosts: [],
      featuredPostsPrimary: [],
      featuredPostsSecondary: []
    };
  },
  created() {
    const postsEdgesArray = this.$static.posts.edges;
    const postsArray = [];

    postsEdgesArray.forEach(post => {
      postsArray.push({
        title: post.node.title,
        id: post.node.id,
        categories: post.node.categories,
        date: post.node.date,
        path: post.node.path,
        featuredMedia: post.node.featuredMedia,
        tags: post.node.tags,
        excerpt: post.node.excerpt
      });
    });

    this.posts = postsArray;

    this.filteredArrayTag();
    this.filteredArrayTagPrimary();
  },
  methods: {
    filteredArrayTagPrimary() {
      const filteredArrayTag = this.posts
        .filter(post => post.tags.some(tag => tag.title == "Primary"))
        .map(post => {
          let n = Object.assign({}, post, {
            tags: post.tags.filter(tag => tag.title == "Primary")
          });
          return n;
        });
      this.featuredPostsPrimary = filteredArrayTag;
    },
    filteredArrayTag() {
      const filteredArrayTag = this.posts
        .filter(post => post.tags.some(tag => tag.title == "Featured"))
        .map(post => {
          let n = Object.assign({}, post, {
            tags: post.tags.filter(tag => tag.title == "Featured")
          });
          return n;
        });
      this.featuredPosts = filteredArrayTag;
      this.$store.dispatch("setHomeFeaturedPosts", this.featuredPosts);
      this.$parent.$emit("featured-post", this.featuredPosts);
    },
    isLoadedImg(post) {
      return post.featuredMedia !== null
        ? `url(${post.featuredMedia.sourceUrl})`
        : `url(${require("~/assets/images/global/placeholder_default.jpg")})`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.article-link {
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 4px;
  transform: scale(1);
  transition: all 0.4s ease-in-out;
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
  .date {
    font-size: 0.9rem;
    color: $brand-color-grey-50;
    margin-bottom: 8px;
  }
  .description {
    margin: 0;
    font-size: 1rem;
    color: $brand-color-text;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 24px; /* fallback */
    max-height: 48px; /* fallback */
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
  .blog-feature-img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 300px;
    width: 100%;
  }
  &:hover {
    background-color: $brand-color-grey-5;
    border: 1px solid $brand-color-primary;
    transform: scale(1.009);
  }
}
</style>
