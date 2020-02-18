<template>
  <div class="container member-enrollment-wrapper">
    <div class="image-container d-flex justify-content-center align-items-center">
      <g-image class="image-logo pt-5" src="~/assets/images/global/strongview_sub_logo.png"></g-image>
    </div>
    <div class="member-enrollment-container"></div>
  </div>
</template>

<script>
// import { ConversationalForm } from "conversational-form";
import axios from "axios";

export default {
  metaInfo() {
    return {
      title: "Member Enrollment | StrongView Investment Management",
      description: "Long Term Investing Made Clear"
    };
  },
  methods: {
    makeSuccessToast() {
      this.$bvToast.toast(
        "You successfully enrolled as a member. Log in to continue.",
        {
          title: "Success!",
          variant: "Success",
          solid: true,
          "no-auto-hide": true,
          "is-status": true
        }
      );
    },
    setupForm: function() {
      const formFields = [
        {
          tag: "input",
          type: "text",
          name: "fullname",
          "cf-questions": "What is your full name?"
        },
        {
          tag: "input",
          type: "email",
          name: "email",
          "cf-questions": "What is your email?"
        },
        {
          tag: "input",
          type: "password",
          name: "password",
          "cf-questions": "Please choose your login password"
        },
        {
          tag: "input",
          type: "password",
          name: "password_confirm",
          "cf-questions": "Can you confirm your password?"
        },
        {
          tag: "select",
          isMultiChoice: false,
          name: "funds",
          children: [
            {
              tag: "option",
              "cf-label": "$10,000",
              value: "$10,000"
            },
            {
              tag: "option",
              "cf-label": "$100,000",
              value: "$100,000"
            },
            {
              tag: "option",
              "cf-label": "$250,000",
              value: "$250,000"
            },
            {
              tag: "option",
              "cf-label": "$500,000",
              value: "$500,000"
            },
            {
              tag: "option",
              "cf-label": "$1,000,000",
              value: "$1,000,000"
            },
            {
              tag: "option",
              "cf-label": "$5,000,000",
              value: "$5,000,000"
            },
            {
              tag: "option",
              "cf-label": "$10,000,000",
              value: "$10,000,000"
            }
          ],
          "cf-questions": "How much is your investible funds?"
        },
        {
          tag: "input",
          type: "tel",
          name: "mobile_number",
          "cf-questions":
            "Are you interested in getting your investment ideas on WhatsApp? Please leave your mobile number."
        },
        {
          tag: "select",
          isMultiChoice: false,
          name: "tocall",
          children: [
            {
              tag: "option",
              "cf-label": "Call",
              value: "call"
            },
            {
              tag: "option",
              "cf-label": "Email",
              value: "email"
            }
          ],
          "cf-questions": "What's the best way to reach you? Call or email?"
        }
      ];
      const ConForm = require("conversational-form");
      // console.log(ConForm);
      this.cf = ConForm.ConversationalForm.startTheConversation({
        options: {
          context: document.querySelector(".member-enrollment-container"),
          flowStepCallback: this.flowCallback,
          submitCallback: this.submitCallback,
          preventAutoFocus: true,
          robotImage:
            "https://media.licdn.com/dms/image/C510BAQHmjiQHXUrnQQ/company-logo_400_400/0?e=1582156800&v=beta&t=hQ3V2SlQAIyCklIaHbFDby8if9UB8t_df0LwbJugiOM",
          // userImage: ""
          userInterfaceOptions: {
            controlElementsInAnimationDelay: 250,
            robot: {
              robotResponseTime: 200,
              chainedResponseTime: 1000
            },
            user: {
              showThinking: true,
              showThumb: true
            }
          }
        },
        tags: formFields
      });
      // this.$el.appendChild(this.cf.el);
      document
        .querySelector(".member-enrollment-container")
        .appendChild(this.cf.el);
    },
    flowCallback: function(dto, success, error) {
      if (dto.tag.name == "password_confirm") {
        var formDataSerialized = this.cf.getFormData(true);

        // console.log(
        //   formDataSerialized["password"],
        //   formDataSerialized["password_confirm"]
        // );

        if (
          formDataSerialized["password"] ==
          formDataSerialized["password_confirm"]
        ) {
          success();
        } else {
          error("Password confirmation does not match!");
        }
      } else {
        success();
      }
    },
    submitCallback: function() {
      var formDataSerialized = this.cf.getFormData(true);

      this.submitRegistation(formDataSerialized);

      // const closingResponses = [
      //   "Ok, seems like I got to know you a little better now and you seem like a very interesting person.",
      //   "Will get in touch with you soon, so expected me to reach out very soon.",
      //   "Thanks!"
      // ];

      // closingResponses.forEach(response => {
      //   setTimeout(() => {
      //     this.cf.addRobotChatResponse(response);
      //   }, 1500);
      // });
      setTimeout(() => {
        this.cf.addRobotChatResponse(
          "Thanks! One of us will get in touch with you as soon as possible."
        );
      }, 2000);
    },

    submitRegistation(fields) {
      console.log(fields);
      let funds =
        fields["funds"] && fields["funds"].length ? fields["funds"][0] : "";
      let toCall =
        fields["tocall"] && fields["tocall"].length ? fields["tocall"][0] : "";

      let username = fields["email"];

      fields["funds"] = funds;
      fields["tocall"] = toCall;
      fields["username"] = username;

      let headers = {
        "Content-Type": "application/json;charset=utf-8"
      };

      let baseUrl = "https://strongview.blog/wp-json/wp/v2/users/register";
      // let baseUrl = 'http://localhost:8000/wp-json/wp/v2/users/register';

      axios
        .post(baseUrl, fields, { headers })
        .then(response => {
          console.log(response);
          this.makeSuccessToast();
          setTimeout(() => {
            this.$router.push({ path: "/login" });
          }, 4000);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.setupForm();
    window.scrollTo(
      0,
      document.body.scrollHeight || document.documentElement.scrollHeight
    );
    window.ConversationalForm.focus();
    window.ConversationalForm.addRobotChatResponse(
      "Please answer the questions below to gain access to Strongview's member-only articles."
    );
  }
};
</script>

<style lang="scss">
@import "~/assets/styles/styles.scss";

.image-logo {
  width: 250px;
}

.member-enrollment-wrapper {
  .member-enrollment-container {
    // height: 100%;
    height: 90vh;
  }
}
</style>
