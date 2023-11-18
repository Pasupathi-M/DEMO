/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import TestService from "../../../services/test/Test.service";

export const TestAPIGelAll = createAsyncThunk(
  "fetch-data/test",
  async (_thunk?: Record<string, unknown>) => {
    try {
      return await TestService.getUserData(
        "https://jsonplaceholder.typicode.com/todos",
        '',
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (e) {
      //
    }
  }
);

export const TestAPIGetOne = createAsyncThunk(
  "fetch-one-data/test",
  async (thunk: Record<string, unknown>) => {
    try {
      return await TestService.getUserDataOne(
        `https://jsonplaceholder.typicode.com/todos/${thunk.id}`
      );
    } catch (e) {
      console.log("Error", e);
    }
  }
);

// interface TestInitialState {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const testData: TestInitialState | Array<TestInitialState> = {
//   userId: 0,
//   id: 0,
//   title: "",
//   completed: false,
// };

export const TestSlice = createSlice({
  name: "testApi",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(TestAPIGelAll?.pending, (state, _action: any) => {
        state.isLoading = true;
      })
      .addCase(TestAPIGelAll?.fulfilled, (state, action: any) => {
        console.log("action >>>>>>", action);
        state.isLoading = false;
        state.data = action.payload.data;
        // state.message = action.payload.message
      })
      .addCase(TestAPIGelAll?.rejected, (state, action: any) => {
        state.isLoading = false;
        state.data = action.payload.data;
        // state.message = action.payload.message
      });

    // builder.addCase(TestAPIGetOne?.pending, (state, _action: any) => {
    //     state.isLoading = true
    // })
    // .addCase(TestAPIGetOne?.pending, (state, action: any) => {
    //     state.isLoading = false,
    //     state.data = action.payload.data,
    //     state.message = action.payload.message
    // })
    // .addCase(TestAPIGetOne.rejected, (state, action: any) => {
    //     state.isLoading = false,
    //     state.message = action.paylaod.message
    // })
  },
});

export default TestSlice.reducer;
