<template>
  <div class="d-flex flex-wrap bottom-nav-container">
    <div
      class="col-6 bottom-nav prev-container d-flex align-items-stretch"
      @click="updateNav"
      v-b-tooltip.hover
      id="left"
      :title="prevData.title"
      v-if="postIndex !== postsArrayObject.length - 1"
    >
      <g-link class="link d-flex flex-column" :to="prevData.path">
        <p class="nav-bottom-link">Prev Article</p>
        <p class="date">{{ prevData.date | moment("MMMM Do YYYY") }}</p>
        <h3 v-html="prevData.title"></h3>
        <div
          class="image-container prev-img d-none d-sm-block"
          :style="`background-image: ${isLoadedPrev};`"
        ></div>
      </g-link>
    </div>
    <div
      class="col-6 bottom-nav next-container d-flex align-items-stretch"
      id="right"
      @click="updateNav"
      v-b-tooltip.hover
      :title="nextData.title"
      v-if="postIndex !== 0"
    >
      <g-link
        class="link d-flex flex-column"
        :to="nextData.path"
        ref="nextButton"
      >
        <p class="nav-bottom-link">Next Article</p>
        <p class="date">{{ nextData.date | moment("MMMM Do YYYY") }}</p>
        <h3 v-html="nextData.title"></h3>
        <div
          class="image-container next-img d-none d-sm-block"
          :style="`background-image: ${isLoadedNext};`"
        ></div>
      </g-link>
    </div>
  </div>
</template>

<static-query>
query {
  posts: allWordPressPost(sortBy: "date", order: ASC) {
    edges {
      node {
        id
        title
        excerpt
        date
        path
        featuredMedia {
          sourceUrl
        }
        categories {
          title
        }
        tags {
          title
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  props: {
    postId: String
  },
  data() {
    return {
      postTitle: null,
      postsArrayObject: null,
      postIndex: null,
      nextData: {},
      prevData: {}
    };
  },
  created() {
    this.getArray();
    this.getIndex();
    this.setStoreIndex();
    this.setPagnation();
  },
  mounted() {},
  computed: {
    isLoadedNext() {
      // console.log("this" + this.nextData.featuredMedia);
      return this.nextData.featuredMedia !== null
        ? `url(${this.nextData.featuredMedia.sourceUrl}(`
        : `url(${require("~/assets/images/global/placeholder_default.jpg")})`;
    },
    isLoadedPrev() {
      return this.prevData.featuredMedia !== null
        ? `url(${this.prevData.featuredMedia.sourceUrl})`
        : `url(${require("~/assets/images/global/placeholder_default.jpg")})`;
    }
  },
  methods: {
    getArray() {
      //Flatten nested object to posts title array
      const postsArray = this.$static.posts.edges;
      const postsArrayObject = [];

      postsArray.forEach(post => {
        postsArrayObject.push({
          title: post.node.title,
          id: post.node.id,
          date: post.node.date,
          path: post.node.path,
          categories: post.node.categories,
          featuredMedia: post.node.featuredMedia,
          tags: post.node.tags
        });
      });

      this.postsArrayObject = postsArrayObject;
    },
    getIndex() {
      //find title
      this.postTitle = this.$store.state.currentPostTitle;

      //find index of post title
      let index = this.postsArrayObject.findIndex(
        post => post.id === this.postId
      );

      this.postIndex = index;
    },
    setStoreIndex() {
      //Set store current post index
      this.$store.dispatch("setPostIndex", this.postIndex);
    },
    setPagnation() {
      let length = this.postsArrayObject.length;
      length -= 1;

      //Sets data for next and prev nav
      if (this.postIndex === 0) {
        this.prevData = this.postsArrayObject[this.postIndex + 1];
      } else if (this.postIndex === length) {
        // console.log("working");
        // console.log(this.postsArrayObject[this.postIndex - 1]);
        this.nextData = this.postsArrayObject[this.postIndex - 1];
      } else {
        this.nextData = this.postsArrayObject[this.postIndex - 1];
        this.prevData = this.postsArrayObject[this.postIndex + 1];
      }
    },
    updateNav() {
      this.$forceUpdate();
    }
  },
  watch: {
    postId: function() {
      this.getIndex();
      this.setStoreIndex();
      this.setPagnation();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

#right {
  text-align: right !important;
  margin-left: auto;
}

#left {
  margin-right: auto;
}

.bottom-nav-container {
  padding: 120px 0 0 0;
}
.bottom-nav {
  width: 100%;
  .link {
    text-decoration: none;
    width: 100%;
  }
  .date {
    font-weight: 400;
    font-size: 0.9rem;
  }
  .nav-bottom-link {
    color: $brand-color-secondary;
    font-size: 1.3rem;
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
  p {
    font-size: 1.3rem;
    font-weight: 500;
    color: $brand-color-text;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: $brand-color-primary;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
    @media (max-width: 425px) {
      font-size: 1rem;
      -webkit-line-clamp: 2;
    }
    @media (max-width: 375px) {
      font-size: 1rem;
      -webkit-line-clamp: 3;
    }
    @media (max-width: 320px) {
      font-size: 1rem;
      -webkit-line-clamp: 4;
    }
  }
  .image-container {
    overflow: hidden;
    .image {
      width: 100%;
    }
  }
  background-color: $brand-color-grey-5;
  padding: 40px 10px;
  transform: scale(1);
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.01);
    background-color: $brand-color-primary-25;
  }
}
.next-container {
  text-align: right !important;
  border-left: 1px solid $brand-color-grey-25;
  border-right: 1px solid #ffffff00;
  border-top: 1px solid #ffffff00;
  border-bottom: 1px solid #ffffff00;
  z-index: 1;
  transition: all 0.4s ease-in-out;
  &:hover {
    z-index: 2;
    border-left: 1px solid $brand-color-primary;
    border-right: 1px solid $brand-color-primary;
    border-top: 1px solid $brand-color-primary;
    border-bottom: 1px solid $brand-color-primary;
  }
}

.prev-container {
  text-align: left !important;
  border-right: 1px solid $brand-color-grey-25;
  border-right: 1px solid #ffffff00;
  border-top: 1px solid #ffffff00;
  border-bottom: 1px solid #ffffff00;
  z-index: 1;
  transition: all 0.4s ease-in-out;
  &:hover {
    z-index: 2;
    border-left: 1px solid $brand-color-primary;
    border-right: 1px solid $brand-color-primary;
    border-top: 1px solid $brand-color-primary;
    border-bottom: 1px solid $brand-color-primary;
  }
}

.prev-img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  @media (max-width: 768px) {
    height: 200px;
  }
}

.next-img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  @media (max-width: 768px) {
    height: 200px;
  }
}

.edge {
  display: none !important;
}
</style>
