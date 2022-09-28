<template>
  <component
    :is="route ? 'router-link' : 'button'"
    :to="route && route.startsWith('/') ? route : ''"
    @click.stop.prevent="click($event)"
    class="button"
  >
    <span class="button__text" data-button-text>
      <slot></slot>
    </span>
    <span v-if="count" class="button__count"> ({{ count }}) </span>
  </component>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: null,
    },
    count: {
      type: [String, Number],
      default: null,
    },
  },
  methods: {
    click(e) {
      e.stopImmediatePropagation();
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  height: max-content;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.811);
  color: #000;
  font-weight: bold;
  font-size: 14px;
  border-radius: 6px;
  width: 100%;
  text-decoration: none;
  text-align: left;
  border: 1px solid black;
  cursor: pointer;
  &__text {
    padding-left: 20px;
  }
}
</style>
