import { createSelector } from '@reduxjs/toolkit';

export const getSignIn  = (state) => state.access.signIn;
export const getSignUp  = (state) => state.access.signUp;
export const getContent = (state) => state.post.content;
export const getNew     = (state) => state.post.isNew;
export const getPreview = (state) => state.post.isPreview;