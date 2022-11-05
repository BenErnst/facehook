import { httpService } from './httpService';
import { utilService } from './utilService';
import { storageService } from './storageService';
import { User } from '../types/user';

export const userService = {
    query,
    saveUser,
    setLoggedInUser,
    getLoggedInUser
    // printUser
}

// REST API methods
const { get, post, put } = httpService;

async function query() {
    try {
        const users: User[] = await get('user');
        return users;
    } catch (err) {
        console.error('Error in query users:', err);
        throw err;
    }
}

async function saveUser(user: User) {
    const { _id } = user;
    const [save, endpoint] = (_id) ? [put, `user/${_id}`] : [post, 'user/'];
    try {
        const savedUser: User = await save(endpoint, user);
        const loggedInUser: User = getLoggedInUser();
        const isTheLoggedInUser: boolean = (savedUser._id === loggedInUser._id);
        if (isTheLoggedInUser) setLoggedInUser(savedUser);
        return { savedUser, isTheLoggedInUser };
    } catch (err) {
        console.error('Error in saveUser (userService):', err);
        throw err;
    }
}

const { sessionStore, sessionLoad } = storageService;

function setLoggedInUser(user: User) {
    sessionStore('loggedInUser', user);
}

function getLoggedInUser() {
    return sessionLoad('loggedInUser') as User;
}



// function printUser(name, pravatarNum) {
//     const password = utilService.makePassword();
//     const profilePictureUrl = `https://i.pravatar.cc/150?img=${pravatarNum}`;
//     const coverPhotoUrl = ``;
//     const user = createUser(name, password, { profilePictureUrl, coverPhotoUrl });
//     console.log(JSON.stringify(user, null, 2));
// }


// function createUser(name, password, media) {
//     return {
//         name,
//         password,
//         media,
//         postsData: {
//             uploadedPostsIds: [],
//             taggedPostsIds: []
//         },
//         info: {
//             workPlaces: [],
//             educations: [],
//             residence: {
//                 current: '',
//                 origin: ''
//             },
//             relationship: {
//                 type: ''
//             }
//         },
//         friendsIds: [],
//         checkIns: [],
//         likedPagesIds: []
//     }
// }



