import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGreeting = createAsyncThunk(
  '/v1/message/index',
  async (csrfToken) => {
    const greetingParams = {
      method: 'get',
      url: 'http://127.0.0.1:3000/api/v1/messages',
      headers: {
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json',
      }
    }

    try {
      const res = await axios(greetingParams);
      console.log(res.data);
      return res.data.greeting;
    } catch(err) {
        return err.message;
    }
  }
)

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: null
  },
  extraReducers: (builder) => {
    builder.addCase(getGreeting.fulfilled, (state, { payload }) => {
      state.greeting = payload;
    })
  }
})

const { reducer } = greetingsSlice;
export default reducer;