import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastState {
  toasts: Toast[];
}
type Toast = {
  title: string;
  severity: 'error' | 'success';
  usePortal: boolean;
};

const initialState: ToastState = { toasts: [] };

const toast = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    fireToast: {
      reducer(state, action: PayloadAction<Toast>) {
        state.toasts.push(action.payload);
      },
      prepare(title, severity, usePortal) {
        return {
          payload: {
            title,
            severity,
            usePortal: usePortal !== false && true,
          },
        };
      },
    },
  },
});

export const { fireToast } = toast.actions;
export default toast.reducer;
