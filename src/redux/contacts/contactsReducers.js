import { createSlice } from '@reduxjs/toolkit';
// import * as contactsActions from './contactsActions';
import { fetchContacts, deleteContact } from './contactsOperations';

// const items = createReducer([], {
//   [fetchContacts.fulfilled]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [fetchContacts.pending]: () => null,
// });

// export default combineReducers({
//   items,
//   isLoading,
//   error,
// });

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return { ...state, items: action.payload, isLoading: false };
    },
    [fetchContacts.pending]: (state, action) => {
      return { ...state, isLoading: true, error: null };
    },
    [fetchContacts.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.pending]: (state, action) => {
      return { ...state, isLoading: true, error: null };
    },
    [deleteContact.rejected]: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
  },
});

export default contactsSlice.reducer;
