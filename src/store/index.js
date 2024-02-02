import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './slices/postSlice';

const rootReducer = ({
    posts: postsReducer
});

const store = configureStore({ reducer: rootReducer });

export default store;