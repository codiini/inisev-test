<script setup>
import EmailItem from "../components/EmailItem.vue";
import Button from "../components/Button.vue";
</script>

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

        <Button count="r">Mark as read</Button>
        <Button count="a">Archive</Button>
      </div>

      <div class="email-list-container">
        <EmailItem
          v-for="{ text, index } in emailList"
          @toggle="(e) => (emailList[index].selected = e)"
          :key="index"
          :selectedStatus="emailList[index].selected"
          v-model="emailList[index].selected"
          :text="text"
          :markedAsRead="false"
        ></EmailItem>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      globalSelect: false,
      selectedCount: "3",
      emailList: [
        {
          index: 0,
          selected: false,
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis.",
        },
        {
          index: 1,
          selected: false,
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis.",
        },
        {
          index: 2,
          selected: false,
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis.",
        },
        {
          index: 3,
          selected: false,
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis.",
        },
      ],
    };
  },
  methods: {
    selectAllItems() {
      this.emailList.map((e) => {
        e.selected = !this.globalSelect;
      });
    },
  },
  computed: {
    getselectedEmails() {
      const list = this.emailList.filter((e) => {
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
