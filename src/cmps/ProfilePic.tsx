import React from 'react';
import { Avatar } from '@mui/material';
import { UserMedia } from '../types/User';
import { AvatarStyle } from '../types/AvatarStyle';

interface Props {
    picUrl: UserMedia['profilePictureUrl'],
    style: AvatarStyle
}

export const ProfilePic = (props: Props) => {
    const { picUrl, style } = props;
    const sx = { ...style, cursor: 'pointer' };
    return <Avatar src={picUrl} sx={sx} />
}

