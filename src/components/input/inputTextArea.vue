<template>
  <div class="sv-input-group d-flex flex-column">
    <label :for="name" class="sv-input-group-label">{{ label }}</label>
    <textarea
      :name="name"
      :placeholder="placeholder"
      class="sv-input-group-item"
      :rows="row"
      @input="updateValue"
      ref="inputTextArea"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: null,
    placeholder: null,
    label: null,
    row: null
  },
  methods: {
    updateValue(){
      this.$emit('input', this.$refs.inputTextArea.value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/styles.scss";

textarea {
  -webkit-appearance: none;
  appearance: none;
}

.sv-input-group {
  .sv-input-group-label {
    color: $brand-color-primary;
    font-size: 1.2rem;
    font-weight: 600;
    transform: translateY(20px) translateX(25px);
    position: relative;
    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      height: 26px;
      width: 137px;
      z-index: -1;
      background-color: #fff;
      transform: translateX(-8px) translateY(2px);
    }
  }
  textarea {
    background-color: #ffffff00;
    color: $brand-color-primary;
    display: block;
    height: auto;
    width: 100%;
    font-size: 1.1rem;
    font-weight: 500;
    border: 1px solid $brand-color-primary;
    border-radius: 2px;
    padding: 20px 0 15px 15px;
    &::placeholder {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-transition: all 0.25s ease-in-out;
      transition: all 0.25s ease-in-out;
      color: #3991c0a6;
      padding-left: 10px;
    }
    &:hover {
      color: #3991c0;
      outline: none;
      &::placeholder {
        color: #3991c000;
        position: relative;
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }
    }
    &:focus {
      color: #3991c0;
      outline: none;
      &::placeholder {
        color: #3991c000;
        position: relative;
        -webkit-transform: translateY(-20px);
        transform: translateY(-20px);
      }
    }
    &:active {
      &:focus {
        color: #3991c000;
        outline: none;
        &::placeholder {
          color: #3991c000;
          position: relative;
          -webkit-transform: translateY(-20px);
          transform: translateY(-20px);
        }
      }
    }
  }
}
</style>
