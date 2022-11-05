import React, { useContext, useEffect, useState } from "react";
import { NavButton } from '../../cmps/NavButton.tsx';
import { UserList } from '../../cmps/UserList.tsx';
import { ProfileContext, ProfileContextType } from "../Profile.tsx";
import { ProfileContextValue } from "../types/Context";
import { User } from '../../types/User';
import { useLocation, useNavigate } from "react-router-dom";

export const Friends = () => {
    const { currUser, friends, mutualFriends } = useContext<ProfileContextValue>(ProfileContext);
    const [friendsToShow, setFriendsToShow] = useState<User[]>([]);
    const location = useLocation();
    const navigate = useNavigate();
    const isMutualParam = 'mutual=true';

    useEffect(() => {
        const isMutualToShow = location.search.includes(isMutualParam);
        setFriendsToShow(isMutualToShow ? mutualFriends : friends);
    }, [location])

    const friendsPath = `/profile/${currUser._id}/friends`;

    return (
        <div>
            <h1>Friends</h1>
            <NavButton
                content={'All Friends'}
                navTo={() => navigate(friendsPath)}
            />
            <NavButton
                content={'Mutual Friends'}
                navTo={() => navigate(`${friendsPath}?mutual=true`)}
            />
            <UserList users={friendsToShow} />
        </div>
    )
}