import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  firstName: 'Dhruv',
  lastName: 'Thakkar',
  description: "I'm a web developer",
  profilePicture: 'src/assets/person.jpg',
  links: {
    github: 'https://github.com/26dhruv',
    linkedin: 'https://www.linkedin.com/in/dhruv-thakkar-97a666239',
    instagram: 'https://www.instagram.com/dhruv_thakkar26',
    twitter: 'https://twitter.com/your-username',
  },
  isAuthenticated: false,
  token: null,
  error: null,
  role: null,
  user: [{ username: 'admin', password: '123' }],
};
export const loginUser = createAsyncThunk(
  'userProfile/loginUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const registerUser = createAsyncThunk(
  'userProfile/registerUser',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3000/register', {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    editFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    editLastName: (state, action) => {
      state.lastName = action.payload;
    },
    editProfileImage: (state, action) => {
      state.profilePicture = action.payload;
    },
    editDescription: (state, action) => {
      state.description = action.payload;
    },
    editLink: (state, action) => {
      const { platform, url } = action.payload;
      if (platform in state.links) {
        state.links[platform] = url;
      }
    },
    logout: state => {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.error = null;
        state.role = action.payload.role;
        alert('login successful');
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.token = null;
        state.error = !action.payload.message || 'Login Failed';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.push({
          username: action.payload.username,
          password: action.payload.password,
        });
        window.alert('Registeration successful');
      })
      .addCase(registerUser.rejected, () => {
        alert('Registeration Unsuccessful');
      });
  },
});
export const {
  editFirstName,
  editLastName,
  editDescription,
  editProfileImage,
  editLink,
  logout,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
