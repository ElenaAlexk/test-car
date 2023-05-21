export const selectContacts = state => {
  //console.log('!', state.contacts);
  return state.contacts.contacts;
};
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
