<template>
  <div class="layout">
    <header class="header">
      <navbar></navbar>
    </header>
    <slot />
    <footer-s></footer-s>
    <pop-up v-if="routerValid"></pop-up>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "~/components/global/Navbar.vue";
import FooterS from "~/components/global/FooterS.vue";
import popUp from "~/components/global/popUp.vue";

export default {
  components: {
    Navbar,
    FooterS,
    popUp
  },
  created() {
    // console.log(this.routerValid);
  },
  computed: {
    routerValid() {
      if (this.$route.path != "/member-enrollment") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style></style>
