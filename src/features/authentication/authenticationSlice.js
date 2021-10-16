import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Auth } from "aws-amplify";

const initialState = {
  isSignedIn: false,
  isLoading: false,
  user: null,
};

export const signUp = createAsyncThunk(
  "authentication/signUp",
  async (data, thunkAPI) => {
    const { name, email, username, password, birthMonth, birthDay, birthYear } =
      data;
    console.log(data);
    const birthdate = `${birthYear}-${("0" + birthMonth).slice(-2)}-${(
      "0" + birthDay
    ).slice(-2)}`;
    console.log(birthdate);

    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          name,
          email,
          birthdate,
        },
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const confirmSignUp = createAsyncThunk(
  "authentication/confirmSignUp",
  async (data, thunkAPI) => {
    const { username, code } = data;
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "authentication/signIn",
  async (data, thunkAPI) => {
    const { username, password } = data;
    try {
      const user = await Auth.signIn(username, password);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateAuth: (state, action) => {
      const { isSignedIn, user } = action.payload;
      state.isSignedIn = isSignedIn;
      state.user = user;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      // signUp
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
      })

      // confirmSignUp
      .addCase(confirmSignUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(confirmSignUp.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(confirmSignUp.rejected, (state) => {
        state.isLoading = false;
      })

      // signIn
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isSignedIn = true;
      })
      .addCase(signIn.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { updateAuth } = authenticationSlice.actions;

export const authIsLoading = (state) => state.authentication.isLoading;
export const authError = (state) => state.authentication.error;
export const authIsSignedIn = (state) => state.authentication.isSignedIn;
export const authUser = (state) => state.authentication.user;

export default authenticationSlice.reducer;
