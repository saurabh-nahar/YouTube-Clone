// import { createSlice } from "@reduxjs/toolkit";

// // const videoDataSlice = createSlice({
// //     name: "data",
// //     initialState: [

// //     ],
// //     reducers: {
// //         addData: (state, action) => {
// //             state.push(...action.payload)
// //         }
// //     }
// // })

// // export const {addData} = videoDataSlice.actions;
// // export default videoDataSlice.reducer;

// export const videoDataSlice = createSlice({
//     name: 'videoData',
//     initialState: [],
//     reducers: {
//       addData: (state, action) => {
//         // Spread the existing state and add new items
//         return [...state, ...action.payload];
//       },
//     },
//   });

//   export const {addData} = videoDataSlice.actions;
// export default videoDataSlice.reducer;
  
// videoSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { videoApi } from '../constants/videoApi';

export const fetchVideos = createAsyncThunk(
  'videos/fetchVideos',
  async ({ nextPageToken = '' }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${videoApi}&pageToken=${nextPageToken}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    videoData: [],
    nextPageToken: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.videoData.push(...action.payload.items);
        state.nextPageToken = action.payload.nextPageToken;
        state.loading = false;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default videoSlice.reducer;
