import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    viewSlots: false,
    viewDate:true,
    formFill: false,
    viewResult:false,
    viewForm:false,
    count:-1,

  },
  reducers: {
    setViewSlots: (state, action) => {
      state.viewSlots = action.payload;
    },
    setViewDate: (state, action) => {
        state.viewDate = action.payload;
      },
    setFormFill: (state, action) => {
      state.formFill = action.payload;
    },
    setViewResult: (state, action) => {
        state.viewResult = action.payload;
      },
    setViewForm: (state,action) =>{
        state.viewForm = action.payload;
    },
    setCount: (state,action) =>{
      state.count = state.count+1;
  },

  },
});

export const { setViewSlots, setViewDate, setFormFill, setViewResult, setViewForm, setCount } = userSlice.actions;

export const selectViewSlots = (state) => state.user.viewSlots;
export const selectViewDate = (state) => state.user.viewDate;
export const selectFormFill = (state) => state.user.formFill;
export const selectViewResult = (state) => state.user.viewResult;
export const selectViewForm = (state) => state.user.viewForm;
export const selectCount = (state) => state.user.count;
export default userSlice.reducer;
