import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  users: [{ id: nanoid(), name: "Jahid", phone: 12345678, age: '25' }],
};

const todosSlice = createSlice({
  name: "todoslist",
  initialState,
  reducers: {
    add_user: (state, action) => {
      const user = {
        id: nanoid(),
        name: action.payload.name,
        phone: action.payload.phone,
        age: action.payload.age
      };
      state.users.push(user);
    },
    remove_user: (state, action) =>{
      state.users = state.users.filter((userId) => userId.id !== action.payload)
    },
    edit_user: (state, action) =>{
      const isAvaliable  =  state.users.filter((user) => user.id == action.payload.id)
      if(isAvaliable){
        isAvaliable[0].name = action.payload.name;
        isAvaliable[0].number = action.payload.number;
        isAvaliable[0].age = action.payload.age;
      }
    }
  },
});

export const { add_user, remove_user, edit_user} = todosSlice.actions;

export default todosSlice.reducer;
