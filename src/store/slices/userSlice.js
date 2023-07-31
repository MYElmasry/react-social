import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isLoggedIn: false,
    value: [
      {
        id: 1,
        profilePicture: "assets/person/1.jpeg",
        username: "Safak Kocaoglu",
      },
      {
        id: 2,
        profilePicture: "assets/person/2.jpeg",
        username: "Janell Shrum",
      },
      {
        id: 3,
        profilePicture: "assets/person/3.jpeg",
        username: "Alex Durden",
      },
      {
        id: 4,
        profilePicture: "assets/person/4.jpeg",
        username: "Dora Hawks",
      },
      {
        id: 5,
        profilePicture: "assets/person/5.jpeg",
        username: "Thomas Holden",
      },
      {
        id: 6,
        profilePicture: "assets/person/6.jpeg",
        username: "Shirley Beauchamp",
      },
      {
        id: 7,
        profilePicture: "assets/person/7.jpeg",
        username: "Travis Bennett",
      },
      {
        id: 8,
        profilePicture: "assets/person/8.jpeg",
        username: "Kristen Thomas",
      },
      {
        id: 9,
        profilePicture: "assets/person/9.jpeg",
        username: "Gary Duty",
      },
      {
        id: 10,
        profilePicture: "assets/person/10.jpeg",
        username: "Safak Kocaoglu",
      },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    setIsLoggedIn: (state, _) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export default userSlice.reducer;
export const { addUser, setIsLoggedIn } = userSlice.actions;
