<template>
  <section class="blog-list-container">
    <div class>
      <div
        class="blog-top-nav-container d-flex flex-wrap justify-content-center align-items-center"
      >
        <div class="col-sm-3 col-10 filter-item">
          <p>Search Articles:</p>
          <input
            type="text"
            placeholder="Search"
            v-model="searchInput"
            class="search-input form-control sv-input"
          />
        </div>
        <div class="col-sm-3 col-10 filter-item">
          <p>Filter by Category:</p>
          <form-select-category @click.native="resetSearchInput"></form-select-category>
        </div>
        <div class="col-sm-3 col-10 filter-item">
          <p>Sort by:</p>
          <b-form-select v-model="sort" :options="sortOptions" class="form-control sv-input"></b-form-select>
        </div>
      </div>
      <div class="blog-articles d-flex flex-wrap justify-content-center align-items-stretch">
        <g-link
          :to="post.path"
          class="blog-article d-flex flex-column col-md-3 col-sm-6 col-12 justify-content-between"
          v-for="post in filteredArray"
          :key="post.id"
        >
          <g-image immediate="false" :src="isLoadedImg(post)"></g-image>
          <div class="tags d-flex flex-wrap">
            <p
              class="tag d-flex justify-content-center align-items-center"
              v-for="category in post.categories"
              :key="category.id"
            >{{ category.title }}</p>
          </div>
          <h4 v-html="post.title"></h4>
          <div class="d-flex flex-wrap">
            <p class="post-tag" v-for="tag in post.tags" :key="tag.id">{{tag.title}}</p>
          </div>
          <div class="d-flex">
            <div class="col-9">
              <!-- <div class="d-flex justify-content-start align-items-center">
                <g-image class="author-img" :src="edge.node.author.avatars.avatar24"></g-image>
                <p>{{ edge.node.author.name }}</p>
              </div>-->
              <p class="blog-date">{{ post.date | moment("MMMM Do YYYY") }}</p>
            </div>
            <div class="icon col-3 d-flex justify-content-center align-items-center">
              <font-awesome :icon="['fas', 'angle-right']" />
            </div>
          </div>
        </g-link>
      </div>
    </div>
  </section>
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
        tags {
          title
          id
        }
        featuredMedia {
          sourceUrl
        }
        categories {
          id
          title
          slug
        }
        author {
          name
          avatars {
            avatar24
          }
        }
      }
    }
  }
}
</static-query>

<script>
import formSelectCategory from "~/components/form/formSelectCategory.vue";
import btnSecondary from "~/components/buttons/btnSecondary.vue";

export default {
  components: {
    formSelectCategory,
    btnSecondary
  },
  data() {
    return {
      sort: "desc",
      sortOptions: [
        {
          value: "desc",
          text: "Newest Posts"
        },
        {
          value: "asc",
          text: "Oldest Posts"
        }
      ],
      searchInput: "",
      postsArray: null
    };
  },
  created() {
    //Create array of posts
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
        tags: post.node.tags
      });
    });

    //Assign posts array to data
    this.postsArray = postsArray;
  },
  computed: {
    //Filtered Array
    filteredArray() {
      if (this.searchInput === "") {
        return this.sortFilteredCategoryArray();
      } else {
        return this.sortFilteredSearchArray();
      }
    }
  },
  mounted() {
    // console.log(this.sortFilteredSearchArray());
  },
  methods: {
    resetSearchInput() {
      this.searchInput = "";
    },
    isLoadedImg(post) {
      return post.featuredMedia !== null
        ? `${post.featuredMedia.sourceUrl}`
        : `${require("~/assets/images/global/placeholder_default.jpg")}`;
    },
    stripSpecialAndLowerCase(string) {
      return string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    },
    sortFilteredCategoryArray() {
      if (this.sort === "desc") {
        return _.sortBy(this.filteredCategoryArray(), [
          function(o) {
            return o.item;
          }
        ]);
      } else {
        const sortArr = _.sortBy(this.filteredCategoryArray(), [
          function(o) {
            return o.item;
          }
        ]);
        return sortArr.reverse();
      }
    },
    sortFilteredSearchArray() {
      if (this.sort === "desc") {
        return _.sortBy(this.filterSeachInput(), [
          function(o) {
            return o.item;
          }
        ]);
      } else {
        const sortArr = _.sortBy(this.filterSeachInput(), [
          function(o) {
            return o.item;
          }
        ]);
        return sortArr.reverse();
      }
    },
    filterSeachInput() {
      return this.postsArray.filter(post => {
        return this.stripSpecialAndLowerCase(post.title).includes(
          this.stripSpecialAndLowerCase(this.searchInput)
        );
      });
    },
    filteredCategoryArray() {
      const filteredCategoryArray = this.postsArray
        .filter(post =>
          post.categories.some(
            category => category.slug === this.$store.state.currentBlogCategory
          )
        )
        .map(post => {
          let n = Object.assign({}, post, {
            categories: post.categories.filter(
              category =>
                category.slug === this.$store.state.currentBlogCategory
            )
          });
          return n;
        });
      if (
        filteredCategoryArray === undefined ||
        filteredCategoryArray.length == 0
      ) {
        return this.postsArray;
      } else {
        return filteredCategoryArray;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.filter-item {
  padding: 16px 8px;
  p {
    color: $brand-color-primary;
  }
}

input {
  background-color: transparent;
  color: $brand-color-primary;
  display: block;
  width: 100%;
  border: 1px solid $brand-color-primary;
  &::placeholder {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transition: 0.25s;
    transition: 0.25s;
    color: $brand-color-grey-25;
  }
  &:hover {
    color: $brand-color-grey-25;
    outline: none;
    border-bottom: 1px solid #2565d8;
    &::placeholder {
      color: $brand-color-grey-25;
      position: relative;
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }
  &:focus {
    color: $brand-color-text;
    outline: none;
    border-bottom: 1px solid #2565d8;
    &::placeholder {
      color: $brand-color-text;
      position: relative;
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
    }
  }
  &:active {
    &:focus {
      color: $brand-color-text;
      outline: none;
      border-bottom: 1px solid #2565d8;
      &::placeholder {
        color: $brand-color-text;
        position: relative;
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }
    }
  }
}

.blog-top-nav-container {
  padding: 40px 0;
  background-color: $brand-color-grey-5;
}

.blog-articles {
  padding: 80px 10px;
  .blog-article {
    margin: 4px;
    text-decoration: none;
    color: $brand-color-text;
    background-color: $brand-color-white;
    padding: 0 0 8px 0;
    border: 1px solid #8a8a8a6e;
    position: relative;
    z-index: 0;
    transform: scale(1);
    transition: all 0.4s ease-in-out;
    img {
      width: 100%;
      height: 200px;
    }
    h4 {
      font-size: 1.2rem;
      text-align: center;
      padding: 8px 4px;
      font-weight: 300;
    }
    p {
      padding: 0 0 0 8px;
      margin: 0;
      font-weight: 300;
    }
    .author-img {
      width: 40px;
      height: 40px;
    }
    .blog-date {
      font-style: italic;
      font-size: 0.8rem;
      padding: 4px 0;
      color: $brand-color-grey-75;
    }
    .icon {
      font-size: 1.5rem;
      color: $brand-color-grey-75;
      transition: all 0.4s ease-in-out;
    }
    &:hover {
      transform: scale(1.02);
      z-index: 4;
      background-color: #e8f8ff;
      border: 1px solid $brand-color-primary;
      .icon {
        color: $brand-color-secondary;
      }
    }
  }
}

.tags {
  position: absolute;
  top: 0;
  border-radius: 2px;
  p {
    font-weight: 400 !important;
    margin: 4px !important;
    background-color: $brand-color-secondary;
    padding: 2px 8px !important;
    font-size: 0.8rem;
    color: $brand-color-white !important;
  }
}

.post-tag {
  color: $brand-color-primary;
  font-size: 0.8rem;
  margin: 0 0 4px 0;
}

.sv-input {
  border: 1px solid $brand-color-primary;
  border-radius: 2px !important;
}
</style>