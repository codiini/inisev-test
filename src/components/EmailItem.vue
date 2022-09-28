<template>
  <div class="item" :class="{ 'item--is-read': markedAsRead }">
    <div class="item__container">
      <input
        v-model="checkedStatus"
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
  methods: {
    toggleSelect() {
      this.$emit("toggle", !this.checked);
    },
  },
  computed: {
    checkedStatus: {
      get() {
        return this.selectedStatus;
      },
      set(value) {
        this.$emit("toggle", value);
      },
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
