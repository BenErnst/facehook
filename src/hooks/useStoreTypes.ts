import { RootState, AppDispatch } from '../types/Store';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

export const useAppSelector = useSelector as TypedUseSelectorHook<RootState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
