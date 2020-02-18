<template>
  <Layout>
    <div>
      <div class="our-team-container">
        <div
          class="our-team-hero d-flex justify-content-center align-items-center"
        >
          <h1>Our Team</h1>
        </div>
        <div
          class="container team-items d-flex flex-wrap justify-content-around"
        >
          <div
            class="team-item col-sm-5 col-11 d-flex flex-column justify-content-center align-items-center"
          >
            <g-image
              immediate="false"
              class="team-item-image"
              src="~/assets/images/global/anton_romulo.jpg"
            />
            <h3>Anton Romulo</h3>
            <p>Managing Director</p>
            <div
              class="team-item-hover d-flex flex-column justify-content-between align-items-center"
            >
              <p>
                Anton is Managing Director of StrongView Inc, an investment
                advisory specialising global multi asset class investment
                portfolios and Philippine liquid and alternative investments for
                high net worth clients.
                <br />
                <br />Previous to this, Anton worked for 10 years in private
                banking in Manila and California (Bank of Singapore, UBS, Morgan
                Stanley) and 5 years in Hong Kong, Tokyo and Manila in
                institutional equity sales (Societe Generale Securities, and
                Schroders).
                <br />
                <br />Anton also has business development and strategic planning
                experience working in San Miguel International and as co-founder
                in PETNET, a remittance and payment processor with 2500
                locations in the Philippines.
              </p>
              <div class="d-flex justify-content-center align-items-center">
                <a
                  href="https://www.linkedin.com/in/antonromulo/"
                  target="_blank"
                >
                  <font-awesome class="icon" :icon="['fab', 'linkedin']" />
                </a>
              </div>
            </div>
          </div>

          <div
            class="team-item col-sm-5 col-11 d-flex flex-column justify-content-center align-items-center"
          >
            <g-image
              immediate="false"
              class="team-item-image"
              src="~/assets/images/global/laarni_limkin.jpg"
            />
            <h3>Laarni Limkin</h3>
            <p>Director - Portfolio Management</p>
            <div
              class="team-item-hover d-flex flex-column justify-content-between align-items-center"
            >
              <p>
                Laarni is responsible for overall portfolio monitoring and trade
                execution. More importantly, she is the voice of reason in our
                portfolio management.
                <br />
                <br />She has over seven years of experience in investment
                advisory. She started out with Bank of Singapore where she
                worked with Anton. She then did a two year stint as a Philippine
                equity analyst with DBP-Daiwa Securities covering the retail
                sector before rejoining Anton to setup StrongView.
                <br />
                <br />Laarni passed all three CFA exams in 2.5 years and
                graduated in the top 10% of her class in Philippine Science High
                School and the Ateneo, with a double major in BS Management
                Engineering and AB Economics.
              </p>
              <div class="d-flex justify-content-center align-items-center">
                <a
                  href="https://www.linkedin.com/in/laarni-limkin-125610a1/"
                  target="_blank"
                >
                  <font-awesome class="icon" :icon="['fab', 'linkedin']" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="contact-container container" id="contact-us">
        <div class="d-flex flex-wrap">
          <div class="col-md-6 col-12 contact-details-container">
            <h3>Contact Us</h3>
            <form
              @submit.prevent
              action
              method="POST"
              class="d-flex flex-column justify-content-center"
            >
              <input-field
                type="text"
                placeholder="ie. Mary"
                id="contactFormName"
                name="contactFormName"
                v-model="info.contactFormName"
                label="Full Name"
              ></input-field>
              <input-field
                type="email"
                placeholder="ie. maryg001@gmail.com"
                id="contactFormEmail"
                name="contactFormEmail"
                v-model="info.contactFormEmail"
                label="Email Address"
              ></input-field>
              <input-text-area
                placeholder="..."
                name="contactFormMessage"
                id="contactFormMessage"
                v-model="info.contactFormMessage"
                label="Message"
                row="5"
              ></input-text-area>
              <div class="d-flex justify-content-center pt-5">
                <button
                  type="button"
                  class="btn btn-primary submit-button"
                  @click="submitInquiry"
                >
                  Submit
                </button>
              </div>
              <div
                class="d-flex justify-content-center pt-5"
                v-if="showSentMessage"
              >
                <b-badge variant="success">Your message has been sent!</b-badge>
              </div>
              <div
                class="d-flex justify-content-center pt-5"
                v-if="showErrorMessage"
              >
                <b-badge variant="warning"
                  >Your message has some errors.</b-badge
                >
              </div>
            </form>
          </div>
          <div
            class="d-flex flex-column col-md-6 col-12 contact-details-container"
          >
            <h3>Address</h3>
            <p>160 Robinson Road, #14-04 Singapore 068914</p>
            <h3>Social Media</h3>
            <div class="d-flex">
              <a
                href="https://www.linkedin.com/company/strongview-incorporated/about/"
                target="_blank"
              >
                <font-awesome :icon="['fab', 'linkedin']" />
              </a>
              <a href="https://twitter.com/strngvw?lang=en" target="_blank">
                <font-awesome :icon="['fab', 'twitter-square']" />
              </a>
              <!-- <a href>
                <font-awesome :icon="['fab', 'facebook-square']" />
              </a>-->
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  </Layout>
</template>

<script>
import inputField from "~/components/input/inputField.vue";
import inputTextArea from "~/components/input/inputTextArea.vue";
import btnPrimary from "~/components/buttons/btnPrimary.vue";

export default {
  data() {
    return {
      errors: [],
      info: {
        contactFormName: "",
        contactFormEmail: "",
        contactFormMessage: ""
      },
      showErrorMessage: false,
      showSentMessage: false
    };
  },
  metaInfo() {
    return {
      title: "Our Team | StrongView Investment Management",
      description: "Long Term Investments Made Clear"
    };
  },
  components: {
    inputField,
    inputTextArea,
    btnPrimary
  },
  methods: {
    submitInquiry() {
      this.errors = [];

      // assemble the request headers
      let headers = {
        "Content-Type": "multipart/form-data"
      };

      let inquireURL =
        "https://strongview.blog/wp-json/contact-form-7/v1/contact-forms/510/feedback";

      console.log(this.info);

      let bodyFormData = new FormData();
      bodyFormData.set("contactFormName", this.info.contactFormName);
      bodyFormData.set("contactFormEmail", this.info.contactFormEmail);
      bodyFormData.set("contactFormMessage", this.info.contactFormMessage);

      this.axios
        .post(inquireURL, bodyFormData, { headers })
        .then(response => {
          console.log(response);
          if (!response.data.invalidFields) {
            this.showSentMessage = true;
            this.showErrorMessage = false;
          } else {
            this.showSentMessage = false;
            this.showErrorMessage = true;
          }
        })
        .catch(error => {
          this.showSentMessage = false;
          this.showErrorMessage = true;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.our-team-container {
  // padding:  0;
  .our-team-hero {
    background: linear-gradient(
        0deg,
        rgba(30, 86, 112, 0.5),
        rgba(30, 65, 117, 0.5)
      ),
      url("~@/assets/images/global/placeholder_default.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 400px;
    position: relative;
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
      background-attachment: unset;
    }
    h1 {
      text-align: center;
      font-size: 4rem;
      font-weight: 500;
      color: $brand-color-white;
      @media (max-width: 425px) {
        font-size: 3rem;
      }
      @media (max-width: 320px) {
        font-size: 2rem;
      }
    }
  }
}

.team-items {
  padding: 80px 0;
}
.team-item {
  padding: 40px 15px;
  margin: 15px 0;
  position: relative;
  transition: all 0.35s ease-in-out;
  background-color: $brand-color-grey-5;
  border-radius: 2px;
  h3 {
    color: $brand-color-primary;
    font-size: 2.3rem;
    padding: 24px 0 0 0;
  }
  p {
    color: $brand-color-text;
    font-size: 1.5rem;
    font-weight: 300;
  }
  .team-item-image {
    max-width: 80%;
    border-radius: 2px;
    // background: url("~@/assets/images/global/anton_romulo.jpg");
    // height: 300px;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
  }
  .team-item-hover {
    position: absolute;
    padding: 40px 15px;
    opacity: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    @media (max-width: 768px) {
      padding: 20px 15px;
    }
    p {
      color: $brand-color-white;
      font-size: 1rem;
      font-weight: 300;
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
      @media (max-width: 425px) {
        font-size: 1rem;
      }
      @media (max-width: 320px) {
        font-size: 0.8rem;
      }
    }
    .icon {
      color: $brand-color-white;
      font-size: 3rem;
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
  }
  &:hover {
    .team-item-hover {
      opacity: 1;
      background-color: $brand-color-primary-90;
    }
  }
}

.contact-container {
  padding: 40px 0;
  h3 {
    font-size: 2.2rem;
    color: $brand-color-primary;
    padding: 0 0 14px 0;
  }
  .contact-us-map {
    padding: 20px 14px;
    background-color: $brand-color-grey-5;
    border-radius: 2px;
  }
  .contact-details-container {
    padding-bottom: 40px;
    h4 {
      font-size: 1.5rem;
      font-weight: 500;
      color: $brand-color-secondary;
      span {
        font-weight: 400;
        color: $brand-color-text;
      }
    }
    p {
      font-size: 1.3rem;
      color: $brand-color-secondary;
    }
    a {
      font-size: 2.5rem;
      margin: 0 8px;
      font-weight: 500;
      color: $brand-color-primary-75;
      transform: scale(1);
      transition: all 0.4s ease-in-out;
      padding: 8px 0;
      &:hover {
        color: $brand-color-primary;
        text-decoration: none;
        transform: scale(1.01);
      }
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
  font-size: 0.9rem;
  font-weight: 500;
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
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.35s ease-in-out;
  &:hover {
    background-color: $brand-color-white;
    color: $brand-color-primary-75-f;
    border-color: $brand-color-primary-75-f;
  }
}
</style>
