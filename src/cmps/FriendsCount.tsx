import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ProfileContext, ProfileContextType } from "../pages/Profile.tsx";
import { User } from "../types/User";
import { ProfileContextValue } from "../types/Context";

export const FriendsCount = () => {
    const { friends, mutualFriends } = useContext<ProfileContextValue>(ProfileContext);

    const getFriendsTxt = () => {
        const endingLetter = (friends.length > 1) ? 's' : '';
        return `${friends.length} friend${endingLetter}`;
    }

    const getMutualFriendsTxt = () => {
        return `${mutualFriends.length} mutual`;
    }

    return (
        <h4>
            <Link to='friends'>
                {getFriendsTxt()}
            </Link>
            {mutualFriends.length ?
                <>
                    {' • '}
                    <Link to='friends?mutual=true'>
                        {getMutualFriendsTxt()}
                    </Link>
                </>
                : null
            }
        </h4>
    )
}