import { store } from '../store';
import { User } from './User';

const { getState, dispatch } = store;

export type RootState = ReturnType<typeof getState>;
export type AppDispatch = typeof dispatch;

export interface GlobalState {
    users: User[],
    loggedInUser: User | null
}