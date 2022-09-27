<template>
  <aside id="box" class="sidebar-container">
    <div class="sidebar-container__wrapper">
      <div class="sidebar-container__wrapper__first">
        <div
          @click="toggleMailDrawerState()"
          class="sidebar-container__wrapper__first__close-text"
        >
          Close (Esc)
        </div>
        <div class="sidebar-container__wrapper__first__button-list">
          <Button @click="markMailAsRead()" count="r">Mark as read</Button>
          <Button count="a">Archive</Button>
        </div>
      </div>
      <div class="sidebar-container__wrapper__second">
        <h1 class="email-title">Your 7 Figure plan goes bye-bye at midnight</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam modi
          iste ipsam ipsum maxime esse officiis dignissimos illo nemo reiciendis
          possimus, earum voluptas harum debitis nostrum at a eligendi nihil.
          Praesentium dolorum dolore magnam cumque voluptas ipsa voluptates
          laboriosam vitae. Cumque officia quos consequuntur rem unde porro
          culpa nostrum nam provident atque beatae illo perspiciatis fugiat
          optio natus alias omnis eum qui, sit voluptatibus voluptas obcaecati,
          odio facere. Est, numquam sed? Similique provident quam tempore
          temporibus libero nostrum repellendus at laborum in! Consequuntur
          deserunt, nulla sunt quisquam iusto inventore pariatur quam velit
          esse, nobis qui unde. Sequi accusantium aspernatur laboriosam.
        </p>
      </div>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.sidebar-container {
  height: 100vh;
  position: absolute;
  width: 500px;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 50;
  background-color: #fff;
  box-shadow: -5px 2px 20px 0;
  min-height: 100vh;
  height: 100%;
  &__wrapper {
    width: 100%;
    padding: 10px 20px;
    height: 100%;
    &__first {
      width: 100%;
      margin-top: 50px;
      &__close-text {
        text-decoration: underline;
        cursor: pointer;
      }
      &__button-list {
        margin-top: 10px;
        display: flex;
        align-content: center;
        justify-content: space-between;
        & > button {
          margin-right: 20px;
        }
      }
    }
    &__second {
      margin-top: 50px;
      width: 100%;
      .email-title {
        font-weight: 700;
        font-size: 22px;
        max-width: 400px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>

<script>
import Button from "./Button.vue";
import { mapActions, mapState } from "pinia";
import { useAppStore } from "@/stores/app";

export default {
  components: { Button },
  methods: {
    ...mapActions(useAppStore, ["toggleMailDrawerState"]),
    markMailAsRead() {
      this.emailList[this.mailIndex].isRead = true;
    },
    // checkForOutsideClick(e) {
    //   const el = document.getElementById("box");
    //   if (document.getElementById("box").contains(e.target)) {
    //      e.stopPropagation()
    //     console.log("Not it");
    //     // this.toggleMailDrawerState();
    //   } else {
    //     console.log("This is it");
    //     this.toggleMailDrawerState();
    //   }

    //   //  window.removeEventListener("click", this.checkForOutsideClick);
    // },
  },
  computed: {
    ...mapState(useAppStore, {
      emailList: "emailList",
      mailIndex: "mailIndex",
    }),
  },
  // created() {
  // const el = document.getElementById("box");
  // el.addEventListener("click", this.checkForOutsideClick);
  // window.addEventListener("keydown", (e) => {
  //   if (e.key == "Escape") {
  //     this.toggleMailDrawerState;
  //   }
  // });
  // },
};
</script>
