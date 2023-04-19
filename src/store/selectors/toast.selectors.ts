import { RootState } from 'store/reducers';

const toastSelector = (state: RootState) => state.toast;
const toasts = (state: RootState) => toastSelector(state).toasts;

const ToastSelector = { toastSelector, toasts };
export default ToastSelector;
