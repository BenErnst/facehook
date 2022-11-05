import { GlobalState } from '../../types/Store';

const INITIAL_STATE = {
    users: [],
    loggedInUser: null
} as GlobalState;

export function userReducer(state = INITIAL_STATE, action): GlobalState {

    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: [...action.users]
            };

        case 'SET_LOGGED_IN_USER':
            return {
                ...state,
                loggedInUser: { ...action.loggedInUser }
            }

        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map(user => {
                    const { savedUser } = action;
                    return (user._id === savedUser._id) ? savedUser : user;
                })
            }

        default:
            return state;
    }

}