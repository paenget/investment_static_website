<template>
  <div class="container-login">
    <div class="d-flex flex-wrap">
      <div
        class="container-login-form col-sm-6 col-12 d-flex flex-column justify-content-center"
      >
        <div>
          <g-image
            immediate="false"
            class="container-login-logo"
            src="~/assets/images/global/strongview_clean_logo.png"
          />
        </div>
        <div>
          <h1>Log in to your account</h1>
          <form @submit.prevent="submitLogin" action>
            <input-field
              type="text"
              name="login-email"
              placeholder="Enter your email"
              label="Email"
              required="true"
              v-model="login.username"
            />
            <input-field
              type="password"
              name="login-password"
              placeholder="Enter your password"
              label="Password"
              required="true"
              v-model="login.password"
            />
            <div class="d-flex flex-column pt-2">
              <div class="d-flex justify-content-end">
                <g-link to="/forgot-password" class="forgot-password-btn"
                  >Forgot your password?</g-link
                >
              </div>
              <div class="d-flex justify-content-center pt-3">
                <button class="btn btn-primary login-btn">
                  Login
                </button>
              </div>
            </div>
          </form>
          <div class="container-login-noaccount d-flex justify-content-center">
            <p>Don't have an account yet?</p>
            <g-link to="/member-enrollment" class="link">
              <p>Create an account.</p>
            </g-link>
          </div>
        </div>
      </div>
      <div
        class="col-sm-6 col-12 container-login-image d-none d-sm-block"
      ></div>
    </div>
  </div>
</template>

<script>
import inputField from "~/components/input/inputField.vue";
import axios from "axios";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    inputField
  },
  metaInfo() {
    return {
      title: "Login | StrongView Investment Management",
      description: "Long Term Investing Made Clear"
    };
  },

  data() {
    return {
      login: {
        username: "",
        password: ""
      }
    };
  },

  methods: {
    submitLogin() {
      console.log(this.login);
      let headers = {
        "Content-Type": "application/json;charset=utf-8"
      };

      let baseUrl = "https://strongview.blog/wp-json/jwt-auth/v1/token";
      // let baseUrl = 'http://localhost:8000/wp-json/jwt-auth/v1/token';

      axios
        .post(baseUrl, this.login, { headers })
        .then(response => {
          console.log(response);
          // this.$store.dispatch('setCurrentUser', response.data)

          localStorage.setItem("strongUserToken", response.data.token);
          this.$router.push({ path: "/" });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  mounted() {
    // currentUser = this.$store.getters.currentUser
    // console.log(this.$store.getters)

    let strongUserToken = localStorage.getItem("strongUserToken");
    console.log(strongUserToken);

    if (strongUserToken) {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.container-login {
  height: 100vh;
  width: 100vw;
  .container-login-form {
    height: 100vh;
    width: 100%;
    background-color: #fff;
    padding: 20px 100px;
    @media (max-width: 1024px) {
      padding: 20px 60px;
    }
    @media (max-width: 768px) {
      padding: 20px 30px;
    }
    h1 {
      font-size: 1.6rem;
      font-weight: 300;
      margin-bottom: 20px;
    }
    .container-login-logo {
      width: 250px;
      margin-bottom: 100px;
    }
    .forgot-password-btn {
      background-color: transparent;
      border: none;
      color: $brand-color-text;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: $brand-color-primary;
      }
    }
    .container-login-noaccount {
      margin-top: 16px;
      p {
        font-size: 1rem;
        color: $brand-color-text;
      }
      .link {
        margin-left: 8px;
        text-decoration: none;
        p {
          color: $brand-color-primary;
          transition: all 0.35s ease-in-out;
          &:hover {
            color: $brand-color-primary-75;
          }
        }
      }
    }
  }
  .container-login-image {
    background: url("~@/assets/images/global/login_image.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle {
  color: $brand-color-white;
  background-color: $brand-color-primary-75-f;
  border-radius: 2px;
  border-color: #ffffff00;
  //   font-size: 1rem;
  //   font-weight: 500;
  transition: all 0.35s ease-in-out;
  &:hover {
    background-color: $brand-color-white;
    color: $brand-color-primary;
    border-color: $brand-color-primary-75-f;
  }
}
.btn-primary {
  color: $brand-color-white;
  background-color: $brand-color-primary-75-f;
  border-radius: 2px;
  border-color: #ffffff00;
  font-size: 1.2rem;
  font-weight: 400;
  transition: all 0.35s ease-in-out;
  p {
    margin: 0;
  }
  &:hover {
    background-color: $brand-color-white;
    color: $brand-color-primary-75-f;
    border-color: $brand-color-primary-75-f;
  }
}
</style>
