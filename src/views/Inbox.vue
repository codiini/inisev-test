<template>
  <main class="inbox-container">
    <div class="inbox-container__wrapper">
      <h2>Emails Selected ({{ getInboxCount }})</h2>

      <div class="control-menu">
        <div class="control-menu__checkbox-container">
          <input
            @click="selectAllItems"
            v-model="globalSelect"
            type="checkbox"
          />
        </div>

        <BaseButton @click="markMailsAsRead" count="r">Mark as read</BaseButton>
        <BaseButton @click="archiveMail" count="a">Archive</BaseButton>
      </div>

      <div class="email-list-container">
        <template v-for="({ text, index }, i) in inboxList" :key="index">
          <EmailItem
            @toggle="(e) => (inboxList[i].selected = e)"
            :selectedStatus="inboxList[i].selected"
            v-model="inboxList[i].selected"
            :text="text"
            :markedAsRead="inboxList[i].isRead"
            @click.stop.prevent="toggleMailDrawerState(true, i)"
          ></EmailItem>
        </template>
      </div>
    </div>
  </main>
</template>

<script>
import EmailItem from "../components/EmailItem.vue";
import BaseButton from "../components/BaseButton.vue";
import { mapState, mapActions } from "pinia";
import { useAppStore } from "@/stores/app";
export default {
  components: {
    EmailItem,
    BaseButton,
  },
  data() {
    return {
      globalSelect: false,
    };
  },
  methods: {
    ...mapActions(useAppStore, [
      "toggleMailDrawerState",
      "markMailsAsRead",
      "archiveMail",
    ]),
    selectAllItems() {
      this.inboxList.map((e) => {
        e.selected = !this.globalSelect;
      });
    },
    keyCommands(e) {
      if (e.key == "a") {
        this.archiveMail();
      }
      if (e.key == "r") {
        this.markMailsAsRead();
      }
    },
  },
  computed: {
    ...mapState(useAppStore, {
      inboxList: "inboxList",
      archiveList: "archiveList",
    }),
    getInboxCount() {
      const list = this.inboxList.filter((e) => {
        return e.selected == true;
      });
      return list.length;
    },
  },
  created() {
    window.addEventListener("keydown", this.keyCommands);
  },
  unmounted() {
    window.removeEventListener("keydown", this.keyCommands);
  },
};
</script>

<style scoped lang="scss">
.inbox-container {
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
  padding-left: 50px;
  padding-top: 30px;
  &__wrapper {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    & h2 {
      font-size: 40px;
      font-weight: 700;
    }
    .control-menu {
      width: 60%;
      display: flex;
      justify-content: space-evenly;
      margin-top: 50px;
      margin-left: 50px;
      & > * {
        margin-right: 20px;
      }
      &__checkbox-container {
        margin-bottom: 0;
        margin-right: 50px;
        cursor: pointer;
        & input {
          height: 30px;
          width: 30px;
        }
      }
    }
    .email-list-container {
      max-width: 800px;
      width: 100%;
      margin-top: 20px;
      padding-bottom: 50px;
      & > div {
        margin-top: 20px;
      }
    }
  }
}
</style>
