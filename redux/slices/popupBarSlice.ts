 
import { PopupBarState } from '@/types/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PopupBarState = {
  isVisible: false,
  message: '',
  type: 'info',
};
 
const popupBarSlice = createSlice({
  name: 'popupBar',
  initialState,
  reducers: {
  
    showPopup: (state, action: PayloadAction<{ message: string; type: 'info' | 'warning' | 'error' }>) => {
      state.isVisible = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    
    hidePopup: (state) => {
      state.isVisible = false;
    },
  },
});
 
export const { showPopup, hidePopup } = popupBarSlice.actions;

 
export default popupBarSlice.reducer;
