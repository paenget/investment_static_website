<template>
  <div class="forgot-password-container d-flex">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="forgot-password-form col-sm-12 col-md-6 col-12">
        <form @submit.prevent="submitForgot">
          <h1>Forgot your password?</h1>
          <p>Enter your email below to receive password reset instructions.</p>
          <input-field
            type="email"
            name="email-password-reset"
            placeholder="Enter your email"
            label="Email Address"
            required="true"
            v-model="forgot.user_login"
          />
          <div v-if="forgot.status == 'success'" class="alert alert-success mt-3">
            Reset Password link had been send to your email.
          </div>
          <div v-if="forgot.status == 'error'" class="alert alert-danger mt-3">
            The field 'user_login' is required.
          </div>
          <div class="d-flex justify-content-center pt-5">
            <button class="btn btn-primary login-btn" :disabled="isSubmitting">
              <p>Submit</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import inputField from "~/components/input/inputField.vue";
import axios from "axios";

export default {
  components: {
    inputField
  },
  data() {
    return {
      forgot: {
        user_login: "",
        status: "",
        msg: ""
      }, 
      isSubmitting: false
    };
  },
  methods: {
    submitForgot() {
      this.isSubmitting = true;
      let headers = {
        "Content-Type": "application/json;charset=utf-8"
      };

      let baseUrl = "https://strongview.blog/wp-json/wp/v2/users/lost-password";
      // let baseUrl = 'http://localhost:8000/wp-json/wp/v2/users/lost-password';

      if(!this.forgot.user_login){
        this.forgot.status = 'error'; 
        return false;
      }

      axios
        .post(baseUrl, this.forgot, { headers })
        .then(response => {
          console.log(response)
          this.forgot.status = 'success';
          this.forgot.msg = response.data.message;
          this.isSubmitting = false;
          console.log(this.forgot)
        })
        .catch(error => {
          console.log(error);
          this.forgot.status = 'error';
          this.forgot.msg = response.data.message;
          this.isSubmitting = false;
          console.log(this.forgot)
        });
    }
  },
  metaInfo() {
    return {
      title: "Forgot Password | StrongView Investment Management",
      description: "Reset password"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.forgot-password-container {
  height: 100vh;
  width: 100vw;
  background-color: $brand-color-primary;
  .forgot-password-form {
    background-color: #fff;
    padding: 40px;
    border-radius: 2px;
    @media (max-width: 375px) {
      padding: 40px 20px;
    }
    h1 {
      font-size: 1.5rem;
      margin-bottom: 16px;
    }
    p {
      font-size: 1.2rem;
    }
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
