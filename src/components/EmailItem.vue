<template>
  <div class="item" :class="{ 'item--is-read': markedAsRead }">
    <div class="item__container">
      <input
        v-model="selectedStatus"
        @click.stop="toggleSelect"
        :disabled="markedAsRead"
        type="checkbox"
      />
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    text: {
      type: String,
      default: "",
    },
    markedAsRead: {
      type: Boolean,
      deafult: false,
    },
    selectedStatus: {
      type: Boolean,
    },
  },
  watch: {
    selectedStatus(value) {
      this.checked = value;
    },
  },
  methods: {
    toggleSelect() {
      this.$emit("toggle", !this.checked);
    },
  },
};
</script>

<style scoped lang="scss">
.item {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: #9a9a9a70;
  border-radius: 6px;
  padding: 10px 20px;
  width: 100%;
  height: 70px;
  cursor: pointer;
  &--is-read {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
  &__container {
    display: flex;
    align-content: center;
    justify-content: flex-start;
    & > input {
      height: 25px;
      width: 25px;
      margin-bottom: 0;
      cursor: pointer;
    }
    & > p {
      font-size: 18px;
    }
    & > * {
      margin-right: 20px;
    }
  }
}
</style>
