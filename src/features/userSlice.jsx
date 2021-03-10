import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    viewSlots: false,
    viewDate:true,
    formFill: false,
    viewResult:false,
    viewForm:false,

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
    } 
  },
});

export const { setViewSlots, setViewDate, setFormFill, setViewResult, setViewForm } = userSlice.actions;

export const selectViewSlots = (state) => state.user.viewSlots;
export const selectViewDate = (state) => state.user.viewDate;
export const selectFormFill = (state) => state.user.formFill;
export const selectViewResult = (state) => state.user.viewResult;
export const selectViewForm = (state) => state.user.viewForm;
export default userSlice.reducer;
