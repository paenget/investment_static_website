import DefaultLayout from "~/layouts/Default.vue";

//Import BootstrapVue
import BootstrapVue from "bootstrap-vue";

//Import custom SCSS
import "~/assets/styles/styles.scss";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";

// Import Bootstrap JS
import "bootstrap-vue/dist/bootstrap-vue.min.js";

// Import VueObserveVisibility
import VueObserveVisibility from "vue-observe-visibility";

//Import Social Share
import SocialSharing from "vue-social-sharing";

//Import Font Awesome 5
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faTwitterSquare,
  faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faChevronLeft,
  faUserTie,
  faChevronUp,
  faChevronDown,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { faChartBar, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(
  faLinkedin,
  faEnvelope,
  faTwitterSquare,
  faChevronRight,
  faChevronLeft,
  faChartBar,
  faUserTie,
  faChevronUp,
  faChevronDown,
  faAngleRight,
  faFacebookSquare
);

//Import Moment (Date library)
import VueMoment from "vue-moment";

//Import Vuex
import Vuex from "vuex";

//Import Lodash
import lodash from "lodash";
import VueLodash from "vue-lodash";

//Import Google Chart Maps
import VueGoogleCharts from "vue-google-charts";

//Import Vue Axios
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout),
    // Use Font Awesome
    Vue.component("font-awesome", FontAwesomeIcon),
    //Use Bootstrap
    Vue.use(BootstrapVue),
    //Use Moment
    Vue.use(VueMoment),
    //Use Lodash
    Vue.use(VueLodash, lodash),
    //Use VueObserveVisibility
    Vue.use(VueObserveVisibility),
    //Use Social Sharing
    Vue.use(SocialSharing),
    //Use Google Chart Maps
    Vue.use(VueGoogleCharts),
    //Use Vuex
    Vue.use(Vuex),
    //Use Vue Axios
    Vue.use(VueAxios, axios);
  appOptions.store = new Vuex.Store({
    state: {
      currentPostTitle: null,
      currentPostIndex: null,
      currentBlogCategory: null,
      homeFeaturedPosts: null,
      currentPostPath: null,
      currentPostDesc: null,
      sessions: 0,
      currentUser: null
    },
    mutations: {
      setPostTitle(state, title) {
        state.currentPostTitle = title;
      },
      setPostIndex(state, index) {
        state.currentPostIndex = index;
      },
      setBlogCategory(state, category) {
        state.currentBlogCategory = category;
      },
      setHomeFeaturedPosts(state, posts) {
        state.homeFeaturedPosts = posts;
      },
      setCurrentPostPath(state, path) {
        state.currentPostPath = path;
      },
      setCurrentPostDesc(state, desc) {
        state.currentPostDesc = desc;
      },
      setSessions(state, session) {
        state.sessions = state.sessions + session;
      },
      setCurrentUser(state, user) {
        state.currentUser = user;
      }
    },
    actions: {
      setPostTitle(state, title) {
        state.commit("setPostTitle", title);
      },
      setPostIndex(state, index) {
        state.commit("setPostIndex", index);
      },
      setBlogCategory(state, category) {
        state.commit("setBlogCategory", category);
      },
      setHomeFeaturedPosts(state, posts) {
        state.commit("setHomeFeaturedPosts", posts);
      },
      setCurrentPostPath(state, path) {
        state.commit("setCurrentPostPath", path);
      },
      setCurrentPostDesc(state, desc) {
        state.commit("setCurrentPostDesc", desc);
      },
      setSessions(state, session) {
        state.commit("setSessions", session);
      },
      setCurrentUser(state, user) {
        state.commit("currentUser", user);
      }
    },
    getters: {
      getCurrentUser: state => {
        return state.currentUser;
      },
      getPosts: state => {
        return state.homeFeaturedPosts;
      }
    }
  });
}
