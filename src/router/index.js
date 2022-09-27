import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/inbox",
      name: "home",
      components: {
        default: () => import("../views/Home.vue"),
        SideBar: () => import("../components/TheSideBar.vue"),
      },
    },
    {
      path: "/inbox",
      name: "Inbox",
      components: {
        default: () => import("../views/Inbox.vue"),
        SideBar: () => import("../components/TheSideBar.vue"),
      },
    },
    {
      path: "/email/:id",
      name: "single-email",
      components: {
        default: () => import("../views/SingleEmail.vue"),
        SideBar: () => import("../components/TheSideBar.vue"),
      },
    },
    {
      path: "/archive",
      name: "Archive",
      components: {
        default: () => import("../views/Archive.vue"),
        SideBar: () => import("../components/TheSideBar.vue"),
      },
    },
  ],
});

export default router;
