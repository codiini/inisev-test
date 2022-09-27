<script>
import { RouterLink, RouterView } from "vue-router";
import TheMailDrawer from "./components/TheMailDrawer.vue";
import { mapState } from "pinia";
import { useAppStore } from "@/stores/app";
export default {
  components: { TheMailDrawer },
  computed: {
    ...mapState(useAppStore, {
      drawerState: "isMailDrawerOpen",
    }),
    getRouteName() {
      return this.$route.name;
    },
  },
  watch: {
    $route: {
      deep: true,
    },
  },
};
</script>

<template>
  <div class="app">
    <div class="app__container-views">
      <div class="app__container-views__text">
        <h1>{{ getRouteName }}</h1>
      </div>
      <RouterView
        class="app__container-views__first"
        name="SideBar"
      ></RouterView>
      <RouterView class="app__container-views__second"> </RouterView>
    </div>
    <Transition name="slide">
      <TheMailDrawer v-show="drawerState"></TheMailDrawer>
    </Transition>
    <div
      :class="{ 'drawer-overlay--drawer-open': drawerState }"
      class="drawer-overlay"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;
  background: #ffff;
  width: 100%;
  &__container-views {
    &__text {
      font-size: 18px;
      margin-left: 300px;
      padding-left: 50px;
      padding-top: 20px;
    }
    &__second {
      margin-left: 300px;
    }
  }
}
.drawer-overlay {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  opacity: 0.5;
  z-index: 20;
  background-color: #000000;
  display: none;
  &--drawer-open {
    display: block;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  transition: all 150ms ease-in 0s;
}
</style>
