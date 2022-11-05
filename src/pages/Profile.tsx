import React, { createContext, Fragment, useEffect, useState } from 'react';
import { utilService } from '../services/utilService';
import { AppHeader } from '../cmps/AppHeader.tsx';
import { Outlet, useParams } from 'react-router-dom';
import { User, UserId } from '../types/User';
import { useAppSelector, useAppDispatch } from '../hooks/useStoreTypes.ts';
import { saveUser } from '../store/actions/userActions.tsx';
import { ProfilePresentation } from '../cmps/ProfilePresentation.tsx';
import { ProfileContextValue } from '../types/Context';

export const ProfileContext = createContext<ProfileContextValue | null>(null);

export const Profile = () => {
    const { users, loggedInUser } = useAppSelector(state => state.userModule);
    const [currUser, setCurrUser] = useState<User | null>(null);
    const [isAFriend, setIsAFriend] = useState<boolean>(false);
    const [friends, setFriends] = useState<User[]>([]);
    const [mutualFriends, setMutualFriends] = useState<User[]>([]);
    const [isOwnProfile, setIsOwnProfile] = useState<boolean>(false);
    const params = useParams();
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    useEffect(() => {
        const matchedUser = users.find(user => user._id === params.id);
        setCurrUser(matchedUser);
    }, [params, users]);

    useEffect(() => {
        setIsAFriend(loggedInUser?.friendsIds.includes(currUser?._id));
        setCurrUserFriends();
        setIsOwnProfile(loggedInUser?._id === currUser?._id);
    }, [loggedInUser, currUser])

    useEffect(() => {
        const mutualFriends: User[] = (params.id === loggedInUser._id) ? [] :
            friends.filter((friend: User) => loggedInUser.friendsIds.includes(friend._id));
        setMutualFriends(mutualFriends);
    }, [friends]);

    const setCurrUserFriends = () => {
        const currUserFriends: User[] = users.filter(user => {
            return currUser?.friendsIds.includes(user._id);
        });
        setFriends(currUserFriends);
    }

    const handleFriendship = () => {
        const idsMap = {
            0: currUser?._id,
            1: loggedInUser._id
        };
        [loggedInUser, currUser].forEach(async (user, idx) => {
            const userToEdit = utilService.getDeepCopy(user) as User;
            const friendId: UserId = idsMap[idx];
            if (isAFriend) {
                unFriend(userToEdit, friendId);
            } else {
                addFriend(userToEdit, friendId);
            }
            await dispatch(saveUser(userToEdit));
        })
    }

    const addFriend = (userToEdit: User, friendId: UserId) => {
        userToEdit.friendsIds.push(friendId);
    }

    const unFriend = (userToEdit: User, friendId: UserId) => {
        const idx = userToEdit.friendsIds.findIndex(id => id === friendId);
        userToEdit.friendsIds.splice(idx, 1);
    }

    const contextValue = { currUser, friends, mutualFriends };

    return (
        <Fragment>
            <AppHeader isOwnProfile={isOwnProfile} />
            {currUser &&
                <ProfileContext.Provider value={contextValue}>
                    <ProfilePresentation
                        isOwnProfile={isOwnProfile}
                        isAFriend={isAFriend}
                        handleFriendship={handleFriendship}
                    />
                    <Outlet />
                </ProfileContext.Provider>
            }
        </Fragment>
    )
}