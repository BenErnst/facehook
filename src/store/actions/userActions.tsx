import { userService } from '../../services/userService.tsx';
import { User } from '../../types/User';

export function loadUsers() {
    return async (dispatch) => {
        try {
            const users: User[] = await userService.query();
            dispatch({ type: 'SET_USERS', users });
        } catch (err) {
            console.error('Error in loadUsers Action:', err);
            throw err;
        }
    }
}

export function loadLoggedInUser() {
    return (dispatch) => {
        const loggedInUser: User = userService.getLoggedInUser();
        dispatch({ type: 'SET_LOGGED_IN_USER', loggedInUser });
    }
}

export function saveUser(user: User) {
    return async (dispatch) => {
        const method = (user._id) ? 'UPDATE' : 'ADD';
        try {
            const { savedUser, isTheLoggedInUser } = await userService.saveUser(user);
            if (isTheLoggedInUser) dispatch(loadLoggedInUser());
            dispatch({ type: `${method}_USER`, savedUser });
        } catch (err) {
            console.error('Error in saveUser Action:', err);
            throw err;
        }
    }
}


// export function savePlayer(playerToSave) {
//     return async (dispatch) => {
//         try {
//             const player = await playerService.savePlayer(playerToSave);
//             dispatch({ type: 'SET_PLAYER', player });
//         } catch (err) {
//             console.log('Error in savePlayer Action:', err);
//         }
//     }
// }
