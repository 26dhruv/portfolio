import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: 'Dhruv',
  lastName: 'Thakkar',
  description: "I'm a web developer",
  profilePicture: "src/assets/person.jpg",
  links: {
    github: 'https://github.com/26dhruv',
    linkedin: 'https://www.linkedin.com/in/dhruv-thakkar-97a666239',
    instagram: 'https://www.instagram.com/dhruv_thakkar26',
    twitter: 'https://twitter.com/your-username',
  }
};

const userProfileSlice = createSlice({
  name: "userProfile",
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
    }
  }
});
export const {
  editFirstName,
  editLastName,
  editDescription,
  editProfileImage,
  editLink
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
