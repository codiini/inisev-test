<template>
  <main class="home-container">
    <div class="home-container__wrapper">
      <h2>Emails Selected ({{ getselectedEmails }})</h2>

      <div class="control-menu">
        <div class="control-menu__checkbox-container">
          <input
            @click="selectAllItems"
            v-model="globalSelect"
            type="checkbox"
          />
        </div>

        <BaseButton @click="markMailsAsRead" count="r">Mark as read</BaseButton>
        <!-- <BaseButton count="a">Archive</BaseButton> -->
      </div>

      <div class="email-list-container">
        <EmailItem
          v-for="{ text, index } in archiveList"
          @toggle="(e) => (archiveList[index].selected = e)"
          :key="index"
          :selectedStatus="archiveList[index].selected"
          v-model="archiveList[index].selected"
          :text="text"
          :markedAsRead="archiveList[index].isRead"
        ></EmailItem>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAppStore } from "@/stores/app";
import EmailItem from "../components/EmailItem.vue";
import BaseButton from "../components/BaseButton.vue";
export default {
  components: {
    EmailItem,
    BaseButton,
  },
  data() {
    return {
      globalSelect: false,
      selectedCount: "3",
    };
  },
  methods: {
    ...mapActions(useAppStore, ["markMailsAsRead"]),
    selectAllItems() {
      this.archiveList.map((e) => {
        e.selected = !this.globalSelect;
      });
    },
  },
  computed: {
    ...mapState(useAppStore, {
      archiveList: "archiveList",
    }),
    getselectedEmails() {
      const list = this.archiveList.filter((e) => {
        return e.selected == true;
      });
      return list.length;
    },
  },
};
</script>

<style scoped lang="scss">
.home-container {
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
      width: 40%;
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
