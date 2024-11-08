import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emails: [
    { id: 1, sender: "Jullu Jalal", label: "Primary", subject: "Our Bachelor of Commerce program is ACBSP-accredited.", time: "8:38 AM" },
    { id: 2, sender: "Minerva Barnett", label: "Work", subject: "Get Best Advertiser In Your Side Pocket", time: "8:13 AM" },
    { id: 3, sender: "Peter Lewis", label: "Friends", subject: "Vacation Home Rental Success", time: "7:52 PM" },
    { id: 4, sender: "Anthony Briggs", subject: "Free Classifieds Using Them To Promote Your Stuff Online", time: "7:52 PM" },
    { id: 5, sender: "Clifford Morgan", label: "Social", subject: "Enhance Your Brand Potential With Giant Advertising Blimps", time: "4:13 PM" },
    { id: 6, sender: "Cecilia Webster", label: "Friends", subject: "Always Look On The Bright Side Of Life", time: "3:52 PM" },
    { id: 7, sender: "Harvey Manning", subject: "Curling Irons Are As Individual As The Women Who Use Them", time: "2:30 PM" },
    { id: 8, sender: "Willie Blake", label: "Primary", subject: "Our Bachelor of Commerce program is ACBSP-accredited.", time: "8:38 AM" },
    { id: 9, sender: "Minerva Barnett", label: "Work", subject: "Get Best Advertiser In Your Side Pocket", time: "8:13 AM" },
    { id: 10, sender: "Fanny Weaver", subject: "Free Classifieds Using Them To Promote Your Stuff Online", time: "7:52 PM" },
    { id: 11, sender: "Olga Hogan", label: "Social", subject: "Enhance Your Brand Potential With Giant Advertising Blimps", time: "4:13 PM" },
    { id: 12, sender: "Lora Houston", label: "Friends", subject: "Vacation Home Rental Success", time: "7:52 PM" },
  ],
  selectedEmailIds: [],
  starredMails: [],
  sentMails: [],
  draftedMails: [],
  spamMails: [],
  binMails: [],
  currentView: 'inbox',
  currentLabel: 'all',
};

const inboxSlice = createSlice({
  name: 'inbox',
  initialState,
  reducers: {

    setView: (state, action) => {
      state.currentView = action.payload;
    },

    toggleSelect: (state, action) => {
      const emailId = action.payload;
      state.selectedEmailIds.includes(emailId)
        ? state.selectedEmailIds = state.selectedEmailIds.filter(id => id !== emailId)
        : state.selectedEmailIds.push(emailId);
    },

    deleteSelectedEmails: (state) => {
      state.selectedEmailIds.forEach(id => {
        const email = state.emails.find(email => email.id === id);
        if (email) state.binMails.push(email);
      });
      state.emails = state.emails.filter(email => !state.selectedEmailIds.includes(email.id));
      state.selectedEmailIds = [];
    },

    restoreEmail: (state, action) => {
      const emailId = action.payload;
      const emailIndex = state.binMails.findIndex(email => email.id === emailId);
      if (emailIndex !== -1) {
        const restoredEmail = state.binMails[emailIndex];
        restoredEmail.deleted = false;
        state.emails.push(restoredEmail);
        state.binMails.splice(emailIndex, 1);
      }
    },

    moveSelectedToDrafts: (state) => {
      state.selectedEmailIds.forEach(id => {
        const email = state.emails.find(email => email.id === id);
        if (email) state.draftedMails.push(email);
      });
      state.emails = state.emails.filter(email => !state.selectedEmailIds.includes(email.id));
      state.selectedEmailIds = [];
    },

    moveSelectedToSpam: (state) => {
      state.selectedEmailIds.forEach(id => {
        const email = state.emails.find(email => email.id === id);
        if (email) state.spamMails.push(email);
      });
      state.emails = state.emails.filter(email => !state.selectedEmailIds.includes(email.id));
      state.selectedEmailIds = [];
    },

    toggleStar: (state, action) => {
      const emailId = action.payload;
      const email = state.emails.find(email => email.id === emailId);

      if (email) {
        email.starred = !email.starred;

        if (email.starred) {
          if (!state.starredMails.some(mail => mail.id === emailId)) {
            state.starredMails.push(email);
          }
        } else {
          state.starredMails = state.starredMails.filter(mail => mail.id !== emailId);
        }
      }

    },

    composeEmail: (state, action) => {
      const newEmail = action.payload;
      state.emails.push(newEmail);
      state.sentMails.push(newEmail);
    },

    setLabel: (state, action) => {
      state.currentLabel = action.payload;
    },

  },

});

export const {
  toggleSelect,
  deleteSelectedEmails,
  moveSelectedToDrafts,
  moveSelectedToSpam,
  toggleStar,
  composeEmail,
  setView,
  setLabel,
} = inboxSlice.actions;

export default inboxSlice.reducer;