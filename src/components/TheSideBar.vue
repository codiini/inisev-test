<template>
  <aside class="sidebar-container">
    <div class="sidebar-container__wrapper">
      <div class="sidebar-container__wrapper__first">
        <BaseButton route="/inbox" :count="getAllInbox">Inbox</BaseButton>
        <BaseButton route="/archive" :count="getAllArchives"
          >Archive</BaseButton
        >
      </div>
      <div class="sidebar-container__wrapper__second">
        <BaseButton>Logout</BaseButton>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.sidebar-container {
  height: 100vh;
  position: absolute;
  width: 300px;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background-color: #343a40;
  box-shadow: -5px 2px 20px 0;
  display: flex;
  flex-direction: column;
  flex: 0 0 50px;
  min-height: 100vh;
  height: 100%;
  &__wrapper {
    width: 100%;
    padding: 10px 20px;
    height: 100%;
    &__first {
      width: 100%;
      display: flex;
      align-content: center;
      justify-content: space-between;
      flex-direction: column;
      & > a {
        margin-top: 20px;
      }
    }
    &__second {
      margin-top: auto;
      height: calc(100vh - 200px);
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  }
}
</style>

<script>
import { mapState } from "pinia";
import { useAppStore } from "@/stores/app";
import BaseButton from "./BaseButton.vue";

export default {
  components: { BaseButton },
  computed: {
    ...mapState(useAppStore, {
      inboxList: "inboxList",
      archiveList: "archiveList",
    }),
    getAllInbox() {
      return this.inboxList.length > 0 ? this.inboxList.length : "0";
    },
    getAllArchives() {
      return this.archiveList.length > 0 ? this.archiveList.length : "0";
    },
  },
};
</script>
