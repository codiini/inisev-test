<script setup>
import EmailItem from "../components/EmailItem.vue";
import Button from "../components/Button.vue";
</script>

<template>
  <main class="inbox-container">
    <div class="inbox-container__wrapper">
      <h2>Emails Selected ({{ getselectedEmails }})</h2>

      <div class="control-menu">
        <div class="control-menu__checkbox-container">
          <input
            @click="selectAllItems"
            v-model="globalSelect"
            type="checkbox"
          />
        </div>

        <Button @click="markMailsAsRead" count="r">Mark as read</Button>
        <Button @click="archiveMail" count="a">Archive</Button>
      </div>

      <div class="email-list-container">
        <EmailItem
          v-for="{ text, index } in emailList"
          @toggle="(e) => (emailList[index].selected = e)"
          :key="index"
          :selectedStatus="emailList[index].selected"
          v-model="emailList[index].selected"
          :text="text"
          :markedAsRead="emailList[index].isRead"
          @click.stop.prevent="toggleMailDrawerState(true, index)"
        ></EmailItem>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAppStore } from "@/stores/app";
export default {
  data() {
    return {
      globalSelect: false,
      selectedCount: "3",
    };
  },
  methods: {
    ...mapActions(useAppStore, ["toggleMailDrawerState"]),
    selectAllItems() {
      this.emailList.map((e) => {
        e.selected = !this.globalSelect;
      });
    },
    markMailsAsRead() {
      const list = this.emailList.filter((e) => {
        return e.selected == true;
      });
      list.forEach((e) => {
        e.isRead = true;
      });
    },
    archiveMail() {
      const list = this.emailList.filter((e) => {
        return e.selected == true;
      });
      list.forEach((e) => {
        e.isArchived = true;
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
      emailList: "emailList",
    }),
    getselectedEmails() {
      const list = this.emailList.filter((e) => {
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
      width: 50%;
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
      & > div {
        margin-top: 20px;
      }
    }
  }
}
</style>
