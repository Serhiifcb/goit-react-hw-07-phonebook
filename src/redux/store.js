import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducers';
import { createSlice } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: [],
//   reducers: {
//     add(state, action) {
//       state.push(action.payload);
//     },
//     remove(state, action) {
//       return state.filter(item => item.id !== action.payload);
//     },
//   },
// });

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    update(state, action) {
      return action.payload;
    },
  },
});

// const rootReducer = combineReducers({
//   contacts: contactsSlice.reducer,
//   filter: filterSlice.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice.reducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});
export const { update } = filterSlice.actions;
// export const { add, remove } = contactsSlice.actions;
// export const persistor = persistStore(store);
