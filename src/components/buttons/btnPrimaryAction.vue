<template>
  <button :type="type" class="btn btn-primary">{{ ctaText }}</button>
</template>
    
<script>
export default {
    props: {
        ctaText: null,
        type: null
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

.btn-primary:not(:disabled):not(.disabled).active, 
.btn-primary:not(:disabled):not(.disabled):active, 
.show>.btn-primary.dropdown-toggle {
    color: $brand-color-white;
    background-color: $brand-color-primary;
    border-radius: 2px;
    border-color: #ffffff00;
    font-size: .9rem;
    font-weight: 500;
    transition: all .35s ease-in-out;
    &:hover {
        background-color: $brand-color-white;
        color: $brand-color-primary;
        border-color: $brand-color-primary;
    }
}
.btn-primary {
    color: $brand-color-white;
    background-color: $brand-color-primary;
    border-radius: 2px;
    border-color: #ffffff00;
    font-size: .9rem;
    font-weight: 500;
    transition: all .35s ease-in-out;
    &:hover {
        background-color: $brand-color-white;
        color: $brand-color-primary;
        border-color: $brand-color-primary;
    }
}
</style>