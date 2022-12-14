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
        text: " 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis.",
        isRead: false,
        isArchived: false,
      },
      {
        index: 1,
        selected: false,
        text: " 2Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis.",
        isRead: false,
        isArchived: false,
      },
      {
        index: 2,
        selected: false,
        text: "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis.",
        isRead: false,
        isArchived: false,
      },
      {
        index: 3,
        selected: false,
        text: " 4Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis.",
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
    markMailsAsRead() {
      const list = this.inboxList.filter((e) => {
        return e.selected == true;
      });
      list.forEach((e) => {
        e.isRead = true;
      });
    },
    markArchivedMailsAsRead() {
      const list = this.archiveList.filter((e) => {
        return e.selected == true;
      });
      list.forEach((e) => {
        e.isRead = true;
      });
    },
    archiveMail() {
      let indexes = [];
      const list = this.inboxList.filter((e) => {
        return e.selected === true;
      });
      list.map((e) => {
        e.isArchived = true;
        indexes.push(e.index);
      });
      for (var i = indexes.length - 1; i >= 0; i--) {
        const removedItem = this.inboxList.splice(indexes[i], 1);
        const archivedItem = this.archiveList.push(...removedItem);
        this.archiveList[archivedItem - 1].selected = false;
      }
    },
  },
});
