import React, { useContext, useEffect, useState } from "react";
import AvatarGroup from '@mui/material/AvatarGroup';
import { Avatar } from "@mui/material";
import { ProfilePic } from './ProfilePic.tsx';
import { User } from '../types/User';
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../pages/Profile.tsx";
import { ProfileContextValue } from "../types/Context";

export const FriendsAvatars = () => {
    const [friendsToShow, setFriendsToShow] = useState<User[]>([]);
    const { friends } = useContext<ProfileContextValue>(ProfileContext);
    const navigate = useNavigate();
    const picStyle = { width: 32, height: 32 };

    useEffect(() => {
        const firstSevenFriends = friends.filter((friend, idx) => idx < 7);
        setFriendsToShow(firstSevenFriends);
    }, [friends]);

    return (
        <AvatarGroup>
            {friendsToShow.length ?
                <div className="friends-avatars-container">
                    {friendsToShow.map(friend => {
                        const { _id, media } = friend;
                        return (
                            <div
                                key={_id}
                                onClick={() => navigate(`/profile/${_id}`)}
                                className="friend-avatar"
                            >
                                <ProfilePic
                                    picUrl={media.profilePictureUrl}
                                    style={picStyle}
                                />
                            </div>
                        )
                    })}
                    {(friends.length > 7) &&
                        <Avatar
                            style={{
                                width: 29,
                                height: 29,
                                background: 'gray'
                            }}
                            className="rest0friends-avatar"
                            onClick={() => navigate(`friends`)}
                            title={'The Rest of Friends...'}
                        >
                            {'••••'}
                        </Avatar>
                    }
                </div>
                : null
            }
        </AvatarGroup>
    )
}