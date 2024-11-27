import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'post',
    initialState: {
        id: null,
        thumbnail:  '',
        title:      '',
        content:    '',
        introduce:  '',
        modifyAt:   '',
        author:     '',
        totalDonated: '',
        isLiked:    '',
        isSaved:    '',
        isNew:      false,
        isPreview:  false,
    },
    reducers: {
        setPostById: (state, action) => {
            state.id = action.payload.id;
            state.thumbnail = action.payload.thumbnail;
            state.title     = action.payload.title;
            state.content   = action.payload.content;
            state.introduce = action.payload.introduce;
            state.modifyAt  = action.payload.modifyAt;
            state.author    = action.payload.author;
            state.totalDonated = action.payload.totalDonated;
            state.isLiked   = action.payload.isLiked;
            state.isSaved   = action.payload.isSaved;
            state.isPreview = action.payload.isPreview;
        },
        setContent: (state, action) => {
            state.content = action.payload;
        },
        setLiked: (state, action) => {
            state.isLiked = action.payload;
        },
        setSaved: (state, action) => {
            state.isSaved = action.payload;
        },
        setNew: (state, action) => {
            state.isNew = action.payload;
        },
        setPreview: (state, action) => {
            state.isPreview = action.payload;
        },
    }
});