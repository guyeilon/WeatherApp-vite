import { useAppDispatch, useAppSelector } from 'store/hooks';
import ToastSelector from 'store/selectors/toast.selectors';
import * as Action from 'store/reducers/toast.reducer';

type Toast = {
  title: string;
  severity: 'error' | 'success';
  usePortal?: boolean;
};

const useToast = () => {
  const dispatch = useAppDispatch();
  const toasts = useAppSelector(ToastSelector.toasts);

  const fireToast = (payload: Toast) => dispatch(Action.fireToast(payload.title, payload.severity, payload.usePortal));

  return { toasts, fireToast };
};

export default useToast;
