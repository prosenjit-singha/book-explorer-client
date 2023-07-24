import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import User from "../../../types/user.type";
import api from "../../../helpers/api";
import ApiResponse from "../../../types/apiResponse";
import { AxiosError, AxiosResponse } from "axios";

interface IUserState {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
  error: ApiResponse["error"];
}

interface ICredential {
  email: string;
  password: string;
}

interface IRegisterPayload {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const initialState: IUserState = {
  user: null,
  isLoading: false,
  isError: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (payload: IRegisterPayload) => {
    const res = await api.post<
      ApiResponse<{ accessToken: string; user: User }>
    >("/auth/register", payload);

    localStorage.setItem("accessToken", res.data.data!.accessToken);

    return res.data.data!.user;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credential: ICredential, { rejectWithValue }) => {
    try {
      const res = await api.post<
        ApiResponse<{ accessToken: string; user: User }>
      >("/auth/login", credential, { withCredentials: true });

      localStorage.setItem("accessToken", res.data.data!.accessToken);
      return res.data.data!.user;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "user/refreshToken",
  async (_undefined, { rejectWithValue }) => {
    try {
      const res = await api.get<
        ApiResponse<{ accessToken: string; user: User }>
      >("/auth/refresh-token", { withCredentials: true });
      localStorage.setItem("accessToken", res.data.data!.accessToken);

      return res.data.data!.user;
    } catch (err) {
      return rejectWithValue((err as AxiosError).response!.data);
    }
  }
);

export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  const res = await api.post("/auth/logout");
  localStorage.removeItem("accessToken");

  return res.data as unknown;
});

const userSlice = createSlice({
  name: "user ",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        const payload = action.payload as AxiosResponse<ApiResponse>;
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.error = payload.data.error;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      })
      .addCase(refreshToken.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
