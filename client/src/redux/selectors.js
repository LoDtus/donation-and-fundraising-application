import { createSelector } from '@reduxjs/toolkit';

// export const getAuth = (state) => state.auth;
export const getContent = (state) => state.post.content;
export const getNew     = (state) => state.post.isNew;
export const getPreview = (state) => state.post.isPreview;