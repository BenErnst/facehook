import React from "react";
import { User } from '../types/User';
import { useNavigate } from 'react-router-dom';
import { ProfilePic } from './ProfilePic.tsx';

interface Props {
    user: User
}

export const UserPreview = (props: Props) => {
    const { user: { _id, name, media } } = props;

    const navigate = useNavigate();
    const profilePicStyle = { width: 84, height: 84 };

    return (
        <div
            onClick={() => navigate(`/profile/${_id}`)}
            style={{ margin: '20px', cursor: 'pointer' }}
        >
            <h2>{name.first}</h2>
            <ProfilePic
                picUrl={media.profilePictureUrl}
                style={profilePicStyle}
            />
        </div>
    )
}