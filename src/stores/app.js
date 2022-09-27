import { defineStore } from "pinia";

export const useAppStore = defineStore("appStore", {
  id: "app",
  state: () => ({
    isMailDrawerOpen: false,
    mailIndex: null,
    inboxList: [
      {
        index: 0,
        selected: false,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis.",
        isRead: false,
        isArchived: false,
      },
      {
        index: 1,
        selected: false,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis.",
        isRead: false,
        isArchived: false,
      },
      {
        index: 2,
        selected: false,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis.",
        isRead: false,
        isArchived: false,
      },
      {
        index: 3,
        selected: false,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis.",
        isRead: false,
        isArchived: false,
      },
    ],
    archiveList: [],
  }),
  getters: {
    getMailDrawerState: (state) => state.isMailDrawerOpen,
  },
  actions: {
    toggleMailDrawerState(state, index) {
      this.isMailDrawerOpen = state;
      this.mailIndex = index;
    },
  },
});
